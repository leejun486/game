#!/usr/bin/env python3
"""SerpApi(구글 지도)로 식당 정보를 가져와 영상용 place.json / place.js 를 만든다.

사용법:
  export SERPAPI_KEY=...            # 키는 코드나 채팅에 적지 말고 환경 변수로
  python3 fetch_place.py "연남동 라멘집 이름"
  python3 fetch_place.py "연남동 라멘집 이름" --pick 2 --menu "돈코츠 라멘:11000,교자:6000"

검색 결과가 여러 개면 후보 목록을 보여 주고 끝난다. --pick N 으로 골라 다시 실행한다.
메뉴는 구글 지도 결과에 없는 경우가 많아서 --menu 로 직접 넣는다 (최대 3개).
"""
import argparse
import datetime
import json
import os
import re
import sys
import urllib.parse
import urllib.request

API = "https://serpapi.com/search.json"
HERE = os.path.dirname(os.path.abspath(__file__))


def serp(params):
    key = os.environ.get("SERPAPI_KEY")
    if not key:
        sys.exit("SERPAPI_KEY 환경 변수가 없습니다. export SERPAPI_KEY=... 후 다시 실행하세요.")
    q = dict(params, api_key=key, hl="ko", gl="kr")
    url = API + "?" + urllib.parse.urlencode(q)
    try:
        with urllib.request.urlopen(url, timeout=30) as r:
            data = json.load(r)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")
        sys.exit(f"SerpApi 요청 실패 ({e.code}): {body[:300]}")
    if "error" in data:
        sys.exit("SerpApi 오류: " + data["error"])
    return data


def area_of(address):
    toks = re.split(r"\s+", address or "")
    for suffix in ("동", "가", "읍", "면", "구"):
        for t in reversed(toks):
            if t.endswith(suffix) and len(t) > 1 and not t[:-1].isdigit():
                return t
    return ""


def hours_of(p):
    oh = p.get("operating_hours")
    if isinstance(oh, dict) and oh:
        vals = list(oh.values())
        if all(v == vals[0] for v in vals):
            return "매일 " + vals[0]
        days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        today = days[datetime.date.today().weekday()]
        today_ko = "월화수목금토일"[datetime.date.today().weekday()] + "요일"
        for k, v in oh.items():
            if k.lower() == today or k == today_ko:
                return "오늘 " + v
        return "%s %s" % next(iter(oh.items()))
    return p.get("hours") or p.get("open_state") or ""


def pick_quote(data_id):
    if not data_id:
        return ""
    try:
        d = serp({"engine": "google_maps_reviews", "data_id": data_id, "sort_by": "qualityScore"})
    except SystemExit as e:
        print("리뷰를 가져오지 못했습니다:", e, file=sys.stderr)
        return ""
    best = ""
    for rv in d.get("reviews", []):
        txt = rv.get("snippet") or (rv.get("extracted_snippet") or {}).get("original") or ""
        txt = re.sub(r"\s+", " ", txt).strip()
        if (rv.get("rating") or 0) >= 4 and 12 <= len(txt) <= 70:
            return txt
        if not best and txt:
            best = txt[:68] + ("…" if len(txt) > 68 else "")
    return best


def parse_menu(s):
    out = []
    for part in (s or "").split(","):
        if not part.strip():
            continue
        name, _, price = part.partition(":")
        price = price.strip().replace(",", "")
        out.append({"name": name.strip(), "price": int(price) if price.isdigit() else price})
    return out[:3]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("query", help="식당 이름 (지역을 같이 쓰면 정확해집니다)")
    ap.add_argument("--pick", type=int, help="검색 후보 번호 (1부터)")
    ap.add_argument("--menu", help='"이름:가격,이름:가격" 형식, 최대 3개')
    ap.add_argument("--out", default=os.path.join(HERE, "place.json"))
    a = ap.parse_args()

    d = serp({"engine": "google_maps", "type": "search", "q": a.query})
    cands = d.get("local_results") or ([d["place_results"]] if d.get("place_results") else [])
    if not cands:
        sys.exit("검색 결과가 없습니다. 지역명을 붙여 다시 검색해 보세요.")
    if len(cands) > 1 and not a.pick:
        print("후보가 여러 개입니다. --pick 번호로 골라 다시 실행하세요:\n")
        for i, c in enumerate(cands[:10], 1):
            print(f"  {i}. {c.get('title')}  ★{c.get('rating', '-')}  ({c.get('type', '')})  {c.get('address', '')}")
        return
    p = cands[(a.pick or 1) - 1]

    place = {
        "name": p.get("title", ""),
        "category": p.get("type") or (p.get("types") or [""])[0],
        "area": area_of(p.get("address", "")),
        "rating": p.get("rating"),
        "reviews": p.get("reviews"),
        "address": p.get("address", ""),
        "hours": hours_of(p),
        "phone": p.get("phone", ""),
        "menu": parse_menu(a.menu),
        "quote": pick_quote(p.get("data_id")),
        "source": "구글 지도 리뷰 기준",
    }
    with open(a.out, "w", encoding="utf-8") as f:
        json.dump(place, f, ensure_ascii=False, indent=2)
    with open(os.path.join(os.path.dirname(a.out), "place.js"), "w", encoding="utf-8") as f:
        f.write("window.PLACE = " + json.dumps(place, ensure_ascii=False, indent=2) + ";\n")
    print(json.dumps(place, ensure_ascii=False, indent=2))
    print("\n저장:", a.out, "→ 이제 node render.js 로 영상을 만드세요.")


if __name__ == "__main__":
    main()
