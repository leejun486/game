(()=>{var Uh=0,kl=1,Fh=2;var Vn=1,Bh=2,Ts=3,_n=0,ci=1,xe=2,Wi=0,As=1,Oe=2,Hl=3,Gl=4,Zo=5;var Wn=100,zh=101,Oh=102,kh=103,Hh=104,Gh=200,$o=201,Vh=202,Wh=203,Vl=204,xr=205,Xh=206,qh=207,Yh=208,Zh=209,$h=210,Jh=211,Kh=212,jh=213,Qh=214,co=0,ho=1,uo=2,ps=3,fo=4,po=5,mo=6,go=7,Wl=0,tu=1,eu=2,Di=0,Xl=1,ql=2,Yl=3,Zl=4,$l=5,Jl=6,Kl=7;var jl=300,vn=301,Xn=302,Jo=303,Ko=304,yr=306,ms=1e3,zi=1001,xo=1002,de=1003,iu=1004;var _r=1005;var ze=1006,jo=1007;var Mn=1008;var di=1009,Ql=1010,tc=1011,Rs=1012,Qo=1013,yi=1014,wi=1015,_i=1016,ta=1017,ea=1018,Cs=1020,ec=35902,ic=35899,nc=1021,sc=1022,fi=1023,Oi=1026,bn=1027,ia=1028,na=1029,Sn=1030,sa=1031;var ra=1033,vr=33776,Mr=33777,br=33778,Sr=33779,oa=35840,aa=35841,la=35842,ca=35843,ha=36196,ua=37492,da=37496,fa=37488,pa=37489,wr=37490,ma=37491,ga=37808,xa=37809,ya=37810,_a=37811,va=37812,Ma=37813,ba=37814,Sa=37815,wa=37816,Ea=37817,Ta=37818,Aa=37819,Ra=37820,Ca=37821,Ia=36492,Pa=36494,La=36495,Da=36283,Na=36284,Er=36285,Ua=36286;var Js=2300,yo=2301,ao=2302,Pl=2303,Ll=2400,Dl=2401,Nl=2402;var nu=3200,rc=3201;var Tr=0,su=1,Ni="",oi="srgb",Fn="srgb-linear",Ks="linear",ue="srgb";var lo=7680;var ru=519,ou=512,au=513,lu=514,Fa=515,cu=516,hu=517,Ba=518,uu=519,du=35044,Is=35048;var oc="300 es",Pi=2e3,gs=2001;function Bd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fu(){let r=js("canvas");return r.style.display="block",r}var oh={},xs=null;function ac(...r){let t="THREE."+r.shift();xs?xs("log",t,...r):console.log(t,...r)}function pu(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function kt(...r){r=pu(r);let t="THREE."+r.shift();if(xs)xs("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Vt(...r){r=pu(r);let t="THREE."+r.shift();if(xs)xs("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Un(...r){let t=r.join(" ");t in oh||(oh[t]=!0,kt(...r))}function mu(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var gu={[co]:ho,[uo]:mo,[fo]:go,[ps]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:ps},ki=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=1234567,qs=Math.PI/180,ys=180/Math.PI;function Ps(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[r&255]+ei[r>>8&255]+ei[r>>16&255]+ei[r>>24&255]+"-"+ei[t&255]+ei[t>>8&255]+"-"+ei[t>>16&15|64]+ei[t>>24&255]+"-"+ei[e&63|128]+ei[e>>8&255]+"-"+ei[e>>16&255]+ei[e>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function jt(r,t,e){return Math.max(t,Math.min(e,r))}function lc(r,t){return(r%t+t)%t}function Od(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function kd(r,t,e){return r!==t?(e-r)/(t-r):0}function Ys(r,t,e){return(1-e)*r+e*t}function Hd(r,t,e,i){return Ys(r,t,1-Math.exp(-e*i))}function Gd(r,t=1){return t-Math.abs(lc(r,t*2)-t)}function Vd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Wd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Xd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function qd(r,t){return r+Math.random()*(t-r)}function Yd(r){return r*(.5-Math.random())}function Zd(r){r!==void 0&&(ah=r);let t=ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $d(r){return r*qs}function Jd(r){return r*ys}function Kd(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function jd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tf(r,t,e,i,n){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),d=s((t-i)/2),u=o((t-i)/2),f=s((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ds(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ri(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cc={DEG2RAD:qs,RAD2DEG:ys,generateUUID:Ps,clamp:jt,euclideanModulo:lc,mapLinear:Od,inverseLerp:kd,lerp:Ys,damp:Hd,pingpong:Gd,smoothstep:Vd,smootherstep:Wd,randInt:Xd,randFloat:qd,randFloatSpread:Yd,seededRandom:Zd,degToRad:$d,radToDeg:Jd,isPowerOfTwo:Kd,ceilPowerOfTwo:jd,floorPowerOfTwo:Qd,setQuaternionFromProperEuler:tf,normalize:ri,denormalize:ds},mc=class mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mc.prototype.isVector2=!0;var Mt=mc,Te=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+x*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[o],u=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(s/2),u=l(i/2),f=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gc=class gc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),d=2*(s*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=n+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gc.prototype.isVector3=!0;var A=gc,al=new A,lh=new Te,xc=class xc{constructor(t,e,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],M=n[1],T=n[4],v=n[7],S=n[2],w=n[5],R=n[8];return s[0]=o*x+a*M+l*S,s[3]=o*g+a*T+l*w,s[6]=o*m+a*v+l*R,s[1]=c*x+h*M+d*S,s[4]=c*g+h*T+d*w,s[7]=c*m+h*v+d*R,s[2]=u*x+f*M+p*S,s[5]=u*g+f*T+p*w,s[8]=u*m+f*v+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,p=e*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Un("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(t,e)),this}rotate(t){return Un("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return Un("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xc.prototype.isMatrix3=!0;var Xt=xc,ll=new Xt,ch=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ef(){let r={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ue&&(n.r=Qi(n.r),n.g=Qi(n.g),n.b=Qi(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(n.r=fs(n.r),n.g=fs(n.g),n.b=fs(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ni?Ks:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Un("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Un("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Fn]:{primaries:t,whitePoint:i,transfer:Ks,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:ch,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}var oe=ef();function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var jn,_o=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{jn===void 0&&(jn=js("canvas")),jn.width=t.width,jn.height=t.height;let n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=jn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=js("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qi(e[i]/255)*255):e[i]=Qi(e[i]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nf=0,_s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(cl(n[o].image)):s.push(cl(n[o]))}else s=cl(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function cl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_o.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var sf=0,hl=new A,li=class r extends ki{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=zi,n=zi,s=ze,o=Mn,a=fi,l=di,c=r.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ps(),this.name="",this.source=new _s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=jl;li.DEFAULT_ANISOTROPY=1;var yc=class yc{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(f+1)/2,S=(m+1)/2,w=(h+u)/4,R=(d+x)/4,y=(p+g)/4;return T>v&&T>S?T<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(T),n=w/i,s=R/i):v>S?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=w/n,s=y/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=R/s,n=y/s),this.set(i,n,s,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yc.prototype.isVector4=!0;var Ae=yc,vo=class extends ki{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},s=new li(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new _s(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends vo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Qs=class extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=de,this.minFilter=de,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mo=class extends li{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=de,this.minFilter=de,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Yo=class Yo{constructor(t,e,i,n,s,o,a,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,d,u,f,p,x,g)}set(t,e,i,n,s,o,a,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Qn.setFromMatrixColumn(t,0).length(),s=1/Qn.setFromMatrixColumn(t,1).length(),o=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rf,t,of)}lookAt(t,e,i){let n=this.elements;return mi.subVectors(t,e),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),cn.crossVectors(i,mi),cn.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),cn.crossVectors(i,mi)),cn.normalize(),Or.crossVectors(mi,cn),n[0]=cn.x,n[4]=Or.x,n[8]=mi.x,n[1]=cn.y,n[5]=Or.y,n[9]=mi.y,n[2]=cn.z,n[6]=Or.z,n[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],M=i[3],T=i[7],v=i[11],S=i[15],w=n[0],R=n[4],y=n[8],E=n[12],P=n[1],N=n[5],D=n[9],B=n[13],L=n[2],z=n[6],H=n[10],X=n[14],Y=n[3],k=n[7],J=n[11],Q=n[15];return s[0]=o*w+a*P+l*L+c*Y,s[4]=o*R+a*N+l*z+c*k,s[8]=o*y+a*D+l*H+c*J,s[12]=o*E+a*B+l*X+c*Q,s[1]=h*w+d*P+u*L+f*Y,s[5]=h*R+d*N+u*z+f*k,s[9]=h*y+d*D+u*H+f*J,s[13]=h*E+d*B+u*X+f*Q,s[2]=p*w+x*P+g*L+m*Y,s[6]=p*R+x*N+g*z+m*k,s[10]=p*y+x*D+g*H+m*J,s[14]=p*E+x*B+g*X+m*Q,s[3]=M*w+T*P+v*L+S*Y,s[7]=M*R+T*N+v*z+S*k,s[11]=M*y+T*D+v*H+S*J,s[15]=M*E+T*B+v*X+S*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],M=l*f-c*u,T=a*f-c*d,v=a*u-l*d,S=o*f-c*h,w=o*u-l*h,R=o*d-a*h;return e*(x*M-g*T+m*v)-i*(p*M-g*S+m*w)+n*(p*T-x*S+m*R)-s*(p*v-x*w+g*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(s*h-a*l)+n*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=e*a-i*o,T=e*l-n*o,v=e*c-s*o,S=i*l-n*a,w=i*c-s*a,R=n*c-s*l,y=h*x-d*p,E=h*g-u*p,P=h*m-f*p,N=d*g-u*x,D=d*m-f*x,B=u*m-f*g,L=M*B-T*D+v*N+S*P-w*E+R*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(a*B-l*D+c*N)*z,t[1]=(n*D-i*B-s*N)*z,t[2]=(x*R-g*w+m*S)*z,t[3]=(u*w-d*R-f*S)*z,t[4]=(l*P-o*B-c*E)*z,t[5]=(e*B-n*P+s*E)*z,t[6]=(g*v-p*R-m*T)*z,t[7]=(h*R-u*v+f*T)*z,t[8]=(o*D-a*P+c*y)*z,t[9]=(i*P-e*D-s*y)*z,t[10]=(p*w-x*v+m*M)*z,t[11]=(d*v-h*w-f*M)*z,t[12]=(a*E-o*N-l*y)*z,t[13]=(e*N-i*E+n*y)*z,t[14]=(x*T-p*S-g*M)*z,t[15]=(h*S-d*T+u*M)*z,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,p=s*d,x=o*h,g=o*d,m=a*d,M=l*c,T=l*h,v=l*d,S=i.x,w=i.y,R=i.z;return n[0]=(1-(x+m))*S,n[1]=(f+v)*S,n[2]=(p-T)*S,n[3]=0,n[4]=(f-v)*w,n[5]=(1-(u+m))*w,n[6]=(g+M)*w,n[7]=0,n[8]=(p+T)*R,n[9]=(g-M)*R,n[10]=(1-(u+x))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=Qn.set(n[0],n[1],n[2]).length(),a=Qn.set(n[4],n[5],n[6]).length(),l=Qn.set(n[8],n[9],n[10]).length();s<0&&(o=-o),Ai.copy(this);let c=1/o,h=1/a,d=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,e.setFromRotationMatrix(Ai),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,s,o,a=Pi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Pi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===gs)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Pi,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Pi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===gs)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Yo.prototype.isMatrix4=!0;var Qt=Yo,Qn=new A,Ai=new Qt,rf=new A(0,0,0),of=new A(1,1,1),cn=new A,Or=new A,mi=new A,uh=new Qt,dh=new Te,ui=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},af=0,fh=new A,ts=new Te,Zi=new Qt,kr=new A,ks=new A,lf=new A,cf=new Te,ph=new A(1,0,0),mh=new A(0,1,0),gh=new A(0,0,1),xh={type:"added"},hf={type:"removed"},es={type:"childadded",child:null},ul={type:"childremoved",child:null},$e=class r extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new A,e=new ui,i=new Te,n=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Xt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(ph,t)}rotateY(t){return this.rotateOnAxis(mh,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return fh.copy(t).applyQuaternion(this.quaternion),this.position.add(fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ph,t)}translateY(t){return this.translateOnAxis(mh,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?kr.copy(t):kr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ks,kr,this.up):Zi.lookAt(kr,ks,this.up),this.quaternion.setFromRotationMatrix(Zi),n&&(Zi.extractRotation(n.matrixWorld),ts.setFromRotationMatrix(Zi),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),es.child=t,this.dispatchEvent(es),es.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hf),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,lf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$e.DEFAULT_UP=new A(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=class extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}},uf={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uf)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function dl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var lt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=oe.workingColorSpace){if(t=lc(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=dl(o,s,t+1/3),this.g=dl(o,s,t),this.b=dl(o,s,t-1/3)}return oe.colorSpaceToWorking(this,n),this}setStyle(t,e=oi){function i(s){s!==void 0&&parseFloat(s)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){let i=xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return oe.workingToColorSpace(ii.copy(this),t),Math.round(jt(ii.r*255,0,255))*65536+Math.round(jt(ii.g*255,0,255))*256+Math.round(jt(ii.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(ii.copy(this),e);let i=ii.r,n=ii.g,s=ii.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(ii.copy(this),e),t.r=ii.r,t.g=ii.g,t.b=ii.b,t}getStyle(t=oi){oe.workingToColorSpace(ii.copy(this),t);let e=ii.r,i=ii.g,n=ii.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(hn),this.setHSL(hn.h+t,hn.s+e,hn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hn),t.getHSL(Hr);let i=Ys(hn.h,Hr.h,e),n=Ys(hn.s,Hr.s,e),s=Ys(hn.l,Hr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ii=new lt;lt.NAMES=xu;var Bn=class extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ri=new A,$i=new A,fl=new A,Ji=new A,is=new A,ns=new A,yh=new A,pl=new A,ml=new A,gl=new A,xl=new Ae,yl=new Ae,_l=new Ae,pn=class r{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ri.subVectors(t,e),n.cross(Ri);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ri.subVectors(n,e),$i.subVectors(i,e),fl.subVectors(t,e);let o=Ri.dot(Ri),a=Ri.dot($i),l=Ri.dot(fl),c=$i.dot($i),h=$i.dot(fl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return xl.setScalar(0),yl.setScalar(0),_l.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),_l.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(xl,s.x),o.addScaledVector(yl,s.y),o.addScaledVector(_l,s.z),o}static isFrontFacing(t,e,i,n){return Ri.subVectors(i,e),$i.subVectors(t,e),Ri.cross($i).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),Ri.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;is.subVectors(n,i),ns.subVectors(s,i),pl.subVectors(t,i);let l=is.dot(pl),c=ns.dot(pl);if(l<=0&&c<=0)return e.copy(i);ml.subVectors(t,n);let h=is.dot(ml),d=ns.dot(ml);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(is,o);gl.subVectors(t,s);let f=is.dot(gl),p=ns.dot(gl);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(ns,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return yh.subVectors(s,n),a=(d-h)/(d-h+(f-p)),e.copy(n).addScaledVector(yh,a);let m=1/(g+x+u);return o=x*m,a=u*m,e.copy(i).addScaledVector(is,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ci):Ci.fromBufferAttribute(s,o),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gr.copy(i.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Vr.subVectors(this.max,Hs),ss.subVectors(t.a,Hs),rs.subVectors(t.b,Hs),os.subVectors(t.c,Hs),un.subVectors(rs,ss),dn.subVectors(os,rs),Pn.subVectors(ss,os);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-Pn.z,Pn.y,un.z,0,-un.x,dn.z,0,-dn.x,Pn.z,0,-Pn.x,-un.y,un.x,0,-dn.y,dn.x,0,-Pn.y,Pn.x,0];return!vl(e,ss,rs,os,Vr)||(e=[1,0,0,0,1,0,0,0,1],!vl(e,ss,rs,os,Vr))?!1:(Wr.crossVectors(un,dn),e=[Wr.x,Wr.y,Wr.z],vl(e,ss,rs,os,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new A,new A,new A,new A,new A,new A,new A,new A],Ci=new A,Gr=new Hi,ss=new A,rs=new A,os=new A,un=new A,dn=new A,Pn=new A,Hs=new A,Vr=new A,Wr=new A,Ln=new A;function vl(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Ln.fromArray(r,s);let a=n.x*Math.abs(Ln.x)+n.y*Math.abs(Ln.y)+n.z*Math.abs(Ln.z),l=t.dot(Ln),c=e.dot(Ln),h=i.dot(Ln);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Fe=new A,Xr=new Mt,df=0,Be=class extends ki{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:df++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=du,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ds(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ri(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=ri(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=ri(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ri(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=ri(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ri(e,this.array),i=ri(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ri(e,this.array),i=ri(i,this.array),n=ri(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ri(e,this.array),i=ri(i,this.array),n=ri(n,this.array),s=ri(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends Be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ir=class extends Be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var zt=class extends Be{constructor(t,e,i){super(new Float32Array(t),e,i)}},ff=new Hi,Gs=new A,Ml=new A,tn=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ff.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Ml)),this.expandByPoint(Gs.copy(t.center).sub(Ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},pf=0,bi=new Qt,bl=new $e,as=new A,gi=new Hi,Vs=new Hi,qe=new A,fe=class r extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bd(t)?ir:er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,e,i){return bi.makeTranslation(t,e,i),this.applyMatrix4(bi),this}scale(t,e,i){return bi.makeScale(t,e,i),this.applyMatrix4(bi),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(gi.min,Vs.min),gi.expandByPoint(qe),qe.addVectors(gi.max,Vs.max),gi.expandByPoint(qe)):(gi.expandByPoint(Vs.min),gi.expandByPoint(Vs.max))}gi.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)qe.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(qe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qe.fromBufferAttribute(a,c),l&&(as.fromBufferAttribute(t,c),qe.add(as)),n=Math.max(n,i.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Be(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new A,l[y]=new A;let c=new A,h=new A,d=new A,u=new Mt,f=new Mt,p=new Mt,x=new A,g=new A;function m(y,E,P){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,P),u.fromBufferAttribute(s,y),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,P),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(N),a[y].add(x),a[E].add(x),a[P].add(x),l[y].add(g),l[E].add(g),l[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,E=M.length;y<E;++y){let P=M[y],N=P.start,D=P.count;for(let B=N,L=N+D;B<L;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let T=new A,v=new A,S=new A,w=new A;function R(y){S.fromBufferAttribute(n,y),w.copy(S);let E=a[y];T.copy(E),T.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(w,E);let N=v.dot(l[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,N)}for(let y=0,E=M.length;y<E;++y){let P=M[y],N=P.start,D=P.count;for(let B=N,L=N+D;B<L;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Be(u,h,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sl=new A,mf=new A,gf=new Xt,Ii=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Sl.subVectors(i,e).cross(mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Sl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||gf.getNormalMatrix(t),n=this.coplanarPoint(Sl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},xf=0,Gi=class extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=As,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=xr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ii().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Mt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ji=new A,wl=new A,qr=new A,Yr=new A,nr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){wl.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Yr.copy(this.origin).sub(wl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(qr),a=Yr.dot(this.direction),l=-Yr.dot(qr),c=Yr.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=s*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(wl).addScaledVector(qr,u),f}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);let i=ji.dot(this.direction),n=ji.dot(ji)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=i.x-o.x,M=i.y-o.y,T=i.z-o.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(h),R,y,E,P,N,D,B,L,z,H,X,Y;if(v>=S&&v>=w?(E=l,D=d,z=p,Y=m,l>=0?(R=c,y=h,P=u,N=f,B=x,L=g,H=M,X=T):(R=h,y=c,P=f,N=u,B=g,L=x,H=T,X=M)):S>=w?(E=c,D=u,z=x,Y=M,c>=0?(R=h,y=l,P=f,N=d,B=g,L=p,H=T,X=m):(R=l,y=h,P=d,N=f,B=p,L=g,H=m,X=T)):(E=h,D=f,z=g,Y=T,h>=0?(R=l,y=c,P=d,N=u,B=p,L=x,H=m,X=M):(R=c,y=l,P=u,N=d,B=x,L=p,H=M,X=m)),E===0)return null;let k=R/E,J=y/E,Q=1/E,vt=P-k*D,St=N-J*D,Yt=B-k*z,Gt=L-J*z,$t=H-k*Y,$=X-J*Y,it=$t*Gt-$*Yt,wt=vt*$-St*$t,Ht=Yt*St-Gt*vt;if(n){if(it<0||wt<0||Ht<0)return null}else if((it<0||wt<0||Ht<0)&&(it>0||wt>0||Ht>0))return null;let Et=it+wt+Ht;if(Et===0)return null;let ee=Q*(it*D+wt*z+Ht*Y);return(Et>0?ee<0:ee>0)?null:this.at(ee/Et,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_h=new Qt,Dn=new nr,Zr=new tn,vh=new A,$r=new A,Jr=new A,Kr=new A,El=new A,jr=new A,Mh=new A,Qr=new A,at=class extends $e{constructor(t=new fe,e=new ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){jr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(El.fromBufferAttribute(d,t),o?jr.addScaledVector(El,h):jr.addScaledVector(El.sub(e),h))}e.add(jr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Dn.copy(t.ray).recast(t.near),!(Zr.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(Zr,vh)===null||Dn.origin.distanceToSquared(vh)>(t.far-t.near)**2))&&(_h.copy(s).invert(),Dn.copy(t.ray).applyMatrix4(_h),!(i.boundingBox!==null&&Dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,S=T;v<S;v+=3){let w=a.getX(v),R=a.getX(v+1),y=a.getX(v+2);n=to(this,m,t,i,c,h,d,w,R,y),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=a.getX(g),T=a.getX(g+1),v=a.getX(g+2);n=to(this,o,t,i,c,h,d,M,T,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,S=T;v<S;v+=3){let w=v,R=v+1,y=v+2;n=to(this,m,t,i,c,h,d,w,R,y),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,T=g+1,v=g+2;n=to(this,o,t,i,c,h,d,M,T,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function yf(r,t,e,i,n,s,o,a){let l;if(t.side===ci?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===_n,a),l===null)return null;Qr.copy(a),Qr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Qr);return c<e.near||c>e.far?null:{distance:c,point:Qr.clone(),object:r}}function to(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,$r),r.getVertexPosition(l,Jr),r.getVertexPosition(c,Kr);let h=yf(r,t,e,i,$r,Jr,Kr,Mh);if(h){let d=new A;pn.getBarycoord(Mh,$r,Jr,Kr,d),n&&(h.uv=pn.getInterpolatedAttribute(n,a,l,c,d,new Mt)),s&&(h.uv1=pn.getInterpolatedAttribute(s,a,l,c,d,new Mt)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new A,materialIndex:0};pn.getNormal($r,Jr,Kr,u.normal),h.face=u,h.barycoord=d}return h}var zn=class extends li{constructor(t=null,e=1,i=1,n,s,o,a,l,c=de,h=de,d,u){super(null,o,a,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ms=class extends Be{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ls=new Qt,bh=new Qt,eo=[],Sh=new Hi,_f=new Qt,Ws=new at,Xs=new tn,sr=class extends at{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ms(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,_f)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ls),Sh.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Sh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ls),Xs.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),t.ray.intersectsSphere(Xs)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ls),bh.multiplyMatrices(i,ls),Ws.matrixWorld=bh,Ws.raycast(t,eo);for(let o=0,a=eo.length;o<a;o++){let l=eo[o];l.instanceId=s,l.object=this,e.push(l)}eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new zn(new Float32Array(n*this.count),n,this.count,ia,wi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nn=new tn,vf=new Mt(.5,.5),io=new A,bs=class{constructor(t=new Ii,e=new Ii,i=new Ii,n=new Ii,s=new Ii,o=new Ii){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pi,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],p=s[8],x=s[9],g=s[10],m=s[11],M=s[12],T=s[13],v=s[14],S=s[15];if(n[0].setComponents(c-o,f-h,m-p,S-M).normalize(),n[1].setComponents(c+o,f+h,m+p,S+M).normalize(),n[2].setComponents(c+a,f+d,m+x,S+T).normalize(),n[3].setComponents(c-a,f-d,m-x,S-T).normalize(),i)n[4].setComponents(l,u,g,v).normalize(),n[5].setComponents(c-l,f-u,m-g,S-v).normalize();else if(n[4].setComponents(c-l,f-u,m-g,S-v).normalize(),e===Pi)n[5].setComponents(c+l,f+u,m+g,S+v).normalize();else if(e===gs)n[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){Nn.center.set(0,0,0);let e=vf.distanceTo(t.center);return Nn.radius=.7071067811865476+e,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(io.x=n.normal.x>0?t.max.x:t.min.x,io.y=n.normal.y>0?t.max.y:t.min.y,io.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bo=class extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wh=new Qt,Ul=new nr,no=new tn,so=new A,rr=class extends $e{constructor(t=new fe,e=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(n),no.radius+=s,t.ray.intersectsSphere(no)===!1)return;wh.copy(n).invert(),Ul.copy(t.ray).applyMatrix4(wh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);so.fromBufferAttribute(d,g),Eh(so,g,l,n,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)so.fromBufferAttribute(d,p),Eh(so,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Eh(r,t,e,i,n,s,o){let a=Ul.distanceSqToPoint(r);if(a<e){let l=new A;Ul.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var or=class extends li{constructor(t=[],e=vn,i,n,s,o,a,l,c,h){super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},On=class extends li{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends li{constructor(t,e,i=yi,n,s,o,a=de,l=de,c,h=Oi,d=1){if(h!==Oi&&h!==bn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},So=class extends Vi{constructor(t,e=yi,i=vn,n,s,o=de,a=de,l,c=Oi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ar=class extends li{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},At=class r extends fe{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,o,s,0),p("z","y","x",1,-1,i,e,-t,o,s,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function p(x,g,m,M,T,v,S,w,R,y,E){let P=v/R,N=S/y,D=v/2,B=S/2,L=w/2,z=R+1,H=y+1,X=0,Y=0,k=new A;for(let J=0;J<H;J++){let Q=J*N-B;for(let vt=0;vt<z;vt++){let St=vt*P-D;k[x]=St*M,k[g]=Q*T,k[m]=L,c.push(k.x,k.y,k.z),k[x]=0,k[g]=0,k[m]=w>0?1:-1,h.push(k.x,k.y,k.z),d.push(vt/R),d.push(1-J/y),X+=1}}for(let J=0;J<y;J++)for(let Q=0;Q<R;Q++){let vt=u+Q+z*J,St=u+Q+z*(J+1),Yt=u+(Q+1)+z*(J+1),Gt=u+(Q+1)+z*J;l.push(vt,St,Gt),l.push(St,Yt,Gt),Y+=6}a.addGroup(f,Y,E),f+=Y,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ss=class r extends fe{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=i*2+s,x=n+1,g=new A,m=new A;for(let M=0;M<=p;M++){let T=0,v=0,S=0,w=0;if(M<=i){let E=M/i,P=E*Math.PI/2;v=-h-t*Math.cos(P),S=t*Math.sin(P),w=-t*Math.cos(P),T=E*d}else if(M<=i+s){let E=(M-i)/s;v=-h+E*e,S=t,w=0,T=d+E*u}else{let E=(M-i-s)/i,P=E*Math.PI/2;v=h+t*Math.sin(P),S=t*Math.cos(P),w=t*Math.sin(P),T=d+u+E*d}let R=Math.max(0,Math.min(1,T/f)),y=0;M===0?y=.5/n:M===p&&(y=-.5/n);for(let E=0;E<=n;E++){let P=E/n,N=P*Math.PI*2,D=Math.sin(N),B=Math.cos(N);m.x=-S*B,m.y=v,m.z=S*D,a.push(m.x,m.y,m.z),g.set(-S*B,w,S*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+y,R)}if(M>0){let E=(M-1)*x;for(let P=0;P<n;P++){let N=E+P,D=E+P+1,B=M*x+P,L=M*x+P+1;o.push(N,D,B),o.push(D,L,B)}}}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},en=class r extends fe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new A,h=new Mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},te=class r extends fe{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],f=[],p=0,x=[],g=i/2,m=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function M(){let v=new A,S=new A,w=0,R=(e-t)/i;for(let y=0;y<=s;y++){let E=[],P=y/s,N=P*(e-t)+t;for(let D=0;D<=n;D++){let B=D/n,L=B*l+a,z=Math.sin(L),H=Math.cos(L);S.x=N*z,S.y=-P*i+g,S.z=N*H,d.push(S.x,S.y,S.z),v.set(z,R,H).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-P),E.push(p++)}x.push(E)}for(let y=0;y<n;y++)for(let E=0;E<s;E++){let P=x[E][y],N=x[E+1][y],D=x[E+1][y+1],B=x[E][y+1];(t>0||E!==0)&&(h.push(P,N,B),w+=3),(e>0||E!==s-1)&&(h.push(N,D,B),w+=3)}c.addGroup(m,w,0),m+=w}function T(v){let S=p,w=new Mt,R=new A,y=0,E=v===!0?t:e,P=v===!0?1:-1;for(let D=1;D<=n;D++)d.push(0,g*P,0),u.push(0,P,0),f.push(.5,.5),p++;let N=p;for(let D=0;D<=n;D++){let L=D/n*l+a,z=Math.cos(L),H=Math.sin(L);R.x=E*H,R.y=g*P,R.z=E*z,d.push(R.x,R.y,R.z),u.push(0,P,0),w.x=z*.5+.5,w.y=H*.5*P+.5,f.push(w.x,w.y),p++}for(let D=0;D<n;D++){let B=S+D,L=N+D;v===!0?h.push(L,L+1,B):h.push(L+1,L,B),y+=3}c.addGroup(m,y,v===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},me=class r extends te{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wo=class r extends fe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],o=[];a(n),c(i),h(),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(s.slice(),3)),this.setAttribute("uv",new zt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new A,v=new A,S=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],T),f(e[w+1],v),f(e[w+2],S),l(T,v,S,M)}function l(M,T,v,S){let w=S+1,R=[];for(let y=0;y<=w;y++){R[y]=[];let E=M.clone().lerp(v,y/w),P=T.clone().lerp(v,y/w),N=w-y;for(let D=0;D<=N;D++)D===0&&y===w?R[y][D]=E:R[y][D]=E.clone().lerp(P,D/N)}for(let y=0;y<w;y++)for(let E=0;E<2*(w-y)-1;E++){let P=Math.floor(E/2);E%2===0?(u(R[y][P+1]),u(R[y+1][P]),u(R[y][P])):(u(R[y][P+1]),u(R[y+1][P+1]),u(R[y+1][P]))}}function c(M){let T=new A;for(let v=0;v<s.length;v+=3)T.x=s[v+0],T.y=s[v+1],T.z=s[v+2],T.normalize().multiplyScalar(M),s[v+0]=T.x,s[v+1]=T.y,s[v+2]=T.z}function h(){let M=new A;for(let T=0;T<s.length;T+=3){M.x=s[T+0],M.y=s[T+1],M.z=s[T+2];let v=g(M)/2/Math.PI+.5,S=m(M)/Math.PI+.5;o.push(v,1-S)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){let T=o[M+0],v=o[M+2],S=o[M+4],w=Math.max(T,v,S),R=Math.min(T,v,S);w>.9&&R<.1&&(T<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function f(M,T){let v=M*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function p(){let M=new A,T=new A,v=new A,S=new A,w=new Mt,R=new Mt,y=new Mt;for(let E=0,P=0;E<s.length;E+=9,P+=6){M.set(s[E+0],s[E+1],s[E+2]),T.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),w.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),y.set(o[P+4],o[P+5]),S.copy(M).add(T).add(v).divideScalar(3);let N=g(S);x(w,P+0,M,N),x(R,P+2,T,N),x(y,P+4,v,N)}}function x(M,T,v,S){S<0&&M.x===1&&(o[T]=M.x-1),v.x===0&&v.z===0&&(o[T]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new Mt:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new A,n=[],s=[],o=[],a=new A,l=new Qt;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(jt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(jt(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),o[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends Si{constructor(t=0,e=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Eo=class extends lr{constructor(t,e,i,n,s,o){super(t,e,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let r=0,t=0,e=0,i=0;function n(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+i*a}}}var Th=new A,Ah=new A,Tl=new hc,Al=new hc,Rl=new hc,To=class extends Si{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new A){let i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%s]:(Ah.subVectors(n[0],n[1]).add(n[0]),c=Ah);let d=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(Th.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Th),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Tl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),Al.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),Rl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Al.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Rl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Tl.calc(l),Al.calc(l),Rl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new A().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Rh(r,t,e,i,n){let s=(i-t)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*r+e}function Mf(r,t){let e=1-r;return e*e*t}function bf(r,t){return 2*(1-r)*r*t}function Sf(r,t){return r*r*t}function Zs(r,t,e,i){return Mf(r,t)+bf(r,e)+Sf(r,i)}function wf(r,t){let e=1-r;return e*e*e*t}function Ef(r,t){let e=1-r;return 3*e*e*r*t}function Tf(r,t){return 3*(1-r)*r*r*t}function Af(r,t){return r*r*r*t}function $s(r,t,e,i,n){return wf(r,t)+Ef(r,e)+Tf(r,i)+Af(r,n)}var Ao=class extends Si{constructor(t=new Mt,e=new Mt,i=new Mt,n=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Mt){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($s(t,n.x,s.x,o.x,a.x),$s(t,n.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ro=class extends Si{constructor(t=new A,e=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new A){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set($s(t,n.x,s.x,o.x,a.x),$s(t,n.y,s.y,o.y,a.y),$s(t,n.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends Si{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Si{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends Si{constructor(t=new Mt,e=new Mt,i=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Mt){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(Zs(t,n.x,s.x,o.x),Zs(t,n.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kn=class extends Si{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(Zs(t,n.x,s.x,o.x),Zs(t,n.y,s.y,o.y),Zs(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let i=e,n=this.points,s=(n.length-1)*t,o=Math.floor(s),a=s-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(Rh(a,l.x,c.x,h.x,d.x),Rh(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new Mt().fromArray(n))}return this}},Rf=Object.freeze({__proto__:null,ArcCurve:Eo,CatmullRomCurve3:To,CubicBezierCurve:Ao,CubicBezierCurve3:Ro,EllipseCurve:lr,LineCurve:Co,LineCurve3:Io,QuadraticBezierCurve:Po,QuadraticBezierCurve3:kn,SplineCurve:Lo});var Ge=class r extends wo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},cr=class r extends fe{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=jt(n,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,d=new A,u=new Mt,f=new A,p=new A,x=new A,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let M=0;M<=e;M++){let T=i+M*h*n,v=Math.sin(T),S=Math.cos(T);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*v,d.y=t[w].y,d.z=t[w].x*S,o.push(d.x,d.y,d.z),u.x=M/e,u.y=w/(t.length-1),a.push(u.x,u.y);let R=l[3*w+0]*v,y=l[3*w+1],E=l[3*w+0]*S;c.push(R,y,E)}}for(let M=0;M<e;M++)for(let T=0;T<t.length-1;T++){let v=T+M*t.length,S=v,w=v+t.length,R=v+t.length+1,y=v+1;s.push(S,w,y),s.push(R,y,w)}this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.setAttribute("normal",new zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Ce=class r extends fe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*u-o;for(let T=0;T<c;T++){let v=T*d-s;p.push(v,-M,0),x.push(0,0,1),g.push(T/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let T=M+c*m,v=M+c*(m+1),S=M+1+c*(m+1),w=M+1+c*m;f.push(T,v,w),f.push(v,S,w)}this.setIndex(f),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Hn=class r extends fe{constructor(t=.5,e=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/n,f=new A,p=new Mt;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let m=s+g/i*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<n;x++){let g=x*(i+1);for(let m=0;m<i;m++){let M=m+g,T=M,v=M+i+1,S=M+i+2,w=M+1;a.push(T,v,w),a.push(v,S,w)}}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var be=class r extends fe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new A,u=new A,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let M=[],T=m/i,v=o+T*a,S=t*Math.cos(v),w=Math.sqrt(t*t-S*S),R=0;m===0&&o===0?R=.5/e:m===i&&l===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let E=y/e,P=n+E*s;d.x=-w*Math.cos(P),d.y=S,d.z=w*Math.sin(P),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(E+R,1-T),M.push(c++)}h.push(M)}for(let m=0;m<i;m++)for(let M=0;M<e;M++){let T=h[m][M+1],v=h[m][M],S=h[m+1][M],w=h[m+1][M+1];(m!==0||o>0)&&f.push(T,v,w),(m!==i-1||l<Math.PI)&&f.push(v,S,w)}this.setIndex(f),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Li=class r extends fe{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new A,f=new A,p=new A;for(let x=0;x<=i;x++){let g=o+x/i*a;for(let m=0;m<=n;m++){let M=m/n*s;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=n;g++){let m=(n+1)*x+g-1,M=(n+1)*(x-1)+g-1,T=(n+1)*(x-1)+g,v=(n+1)*x+g;l.push(m,M,v),l.push(M,T,v)}this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var hr=class r extends fe{constructor(t=new kn(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new Mt,h=new A,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function x(){for(let T=0;T<e;T++)g(T);g(s===!1?e:0),M(),m()}function g(T){h=t.getPointAt(T/e,h);let v=o.normals[T],S=o.binormals[T];for(let w=0;w<=n;w++){let R=w/n*Math.PI*2,y=Math.sin(R),E=-Math.cos(R);l.x=E*v.x+y*S.x,l.y=E*v.y+y*S.y,l.z=E*v.z+y*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let T=1;T<=e;T++)for(let v=1;v<=n;v++){let S=(n+1)*(T-1)+(v-1),w=(n+1)*T+(v-1),R=(n+1)*T+v,y=(n+1)*(T-1)+v;p.push(S,w,y),p.push(w,R,y)}}function M(){for(let T=0;T<=e;T++)for(let v=0;v<=n;v++)c.x=T/e,c.y=v/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Rf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function qn(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(Ch(n))n.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Ch(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ni(r){let t={};for(let e=0;e<r.length;e++){let i=qn(r[e]);for(let n in i)t[n]=i[n]}return t}function Ch(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Cf(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function uc(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var yu={clone:qn,merge:ni},If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qn(t.uniforms),this.uniformsGroups=Cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new lt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Mt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ae().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Qt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Do=class extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Gn=class extends Gi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new lt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mn=class extends Gi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var ws=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},No=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cs(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Cl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var gn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Uo=class extends gn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:s=t,a=2*e-i;break;case Nl:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dl:o=t,l=2*i-e;break;case Nl:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,M=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,T=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let S=0;S!==a;++S)s[S]=m*o[h+S]+M*o[c+S]+T*o[l+S]+v*o[d+S];return s}},Fo=class extends gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},Bo=class extends gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},zo=class extends gn{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(n-e),x=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*p;return s}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*u+p*2,M=d[m],T=d[m+1],v=t*u+p*2,S=h[v],w=h[v+1],R=Df(i,e,M,S,n);s[p]=_u(R,x,T,w,g)}return s}};function _u(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function Lf(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function Df(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=_u(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let l=Lf(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var xi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cs(e,this.TimeBufferType),this.values=cs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:cs(t.times,Array),values:cs(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Cl(t.settings)&&(i.settings={inTangents:cs(t.settings.inTangents,Array),outTangents:cs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Bo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new zo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Js:e=this.InterpolantFactoryMethodDiscrete;break;case yo:e=this.InterpolantFactoryMethodLinear;break;case ao:e=this.InterpolantFactoryMethodSmooth;break;case Pl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return ao;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Cl(this.settings)&&(Ih(this.settings.inTangents,t),Ih(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Vt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&zd(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ao,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Cl(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Ih(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=yo;var xn=class extends xi{constructor(t,e,i){super(t,e,i)}};xn.prototype.ValueTypeName="bool";xn.prototype.ValueBufferType=Array;xn.prototype.DefaultInterpolation=Js;xn.prototype.InterpolantFactoryMethodLinear=void 0;xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends xi{constructor(t,e,i,n){super(t,e,i,n)}};Oo.prototype.ValueTypeName="color";var ko=class extends xi{constructor(t,e,i,n){super(t,e,i,n)}};ko.prototype.ValueTypeName="number";var Ho=class extends gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Te.slerpFlat(s,0,o,c-a,o,c,l);return s}},ur=class extends xi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Ho(this.times,this.values,this.getValueSize(),t)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;var yn=class extends xi{constructor(t,e,i){super(t,e,i)}};yn.prototype.ValueTypeName="string";yn.prototype.ValueBufferType=Array;yn.prototype.DefaultInterpolation=Js;yn.prototype.InterpolantFactoryMethodLinear=void 0;yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends xi{constructor(t,e,i,n){super(t,e,i,n)}};Go.prototype.ValueTypeName="vector";var Vo=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vu=new Vo,Wo=class{constructor(t){this.manager=t!==void 0?t:vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},dr=class extends Es{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Il=new Qt,Ph=new A,Lh=new A,fr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Il,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=n?n.z/s.x:1,a=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ro=new A,oo=new Te,Bi=new A,pr=class extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ro,oo,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ro,oo,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fn=new A,Dh=new Mt,Nh=new Mt,ai=class extends pr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fn.x,fn.y).multiplyScalar(-t/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fn.x,fn.y).multiplyScalar(-t/fn.z)}getViewSize(t,e){return this.getViewBounds(t,Dh,Nh),e.subVectors(Nh,Dh)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qs*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fl=class extends fr{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}},mr=class extends Es{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},nn=class extends pr{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bl=class extends fr{constructor(){super(new nn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gr=class extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var hs=-90,us=1,Xo=class extends $e{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ai(hs,us,t,e);n.layers=this.layers,this.add(n);let s=new ai(hs,us,t,e);s.layers=this.layers,this.add(s);let o=new ai(hs,us,t,e);o.layers=this.layers,this.add(o);let a=new ai(hs,us,t,e);a.layers=this.layers,this.add(a);let l=new ai(hs,us,t,e);l.layers=this.layers,this.add(l);let c=new ai(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},qo=class extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var dc="\\[\\]\\.:\\/",Nf=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Uf="[^"+dc.replace("\\.","")+"]",Ff=/((?:WC+[\/:])*)/.source.replace("WC",fc),Bf=/(WCOD+)?/.source.replace("WCOD",Uf),zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Of=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),kf=new RegExp("^"+Ff+Bf+zf+Of+"$"),Hf=["material","materials","bones","map"],zl=class{constructor(t,e,i){let n=i||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},we=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nf,"")}static parseTrackName(t){let e=kf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Hf.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=zl;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dy=new Float32Array(1);var _c=class _c{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};_c.prototype.isMatrix2=!0;var Ol=_c;function pc(r,t,e,i){let n=Gf(i);switch(e){case nc:return r*t;case ia:return r*t/n.components*n.byteLength;case na:return r*t/n.components*n.byteLength;case Sn:return r*t*2/n.components*n.byteLength;case sa:return r*t*2/n.components*n.byteLength;case sc:return r*t*3/n.components*n.byteLength;case fi:return r*t*4/n.components*n.byteLength;case ra:return r*t*4/n.components*n.byteLength;case vr:case Mr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case br:case Sr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case aa:case ca:return Math.max(r,16)*Math.max(t,8)/4;case oa:case la:return Math.max(r,8)*Math.max(t,8)/2;case ha:case ua:case fa:case pa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case da:case wr:case ma:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ya:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case _a:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case va:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Aa:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ra:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Pa:case La:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Da:case Na:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Er:case Ua:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gf(r){switch(r){case di:case Ql:return{byteLength:1,components:1};case Rs:case tc:case _i:return{byteLength:2,components:1};case ta:case ea:return{byteLength:2,components:4};case yi:case Qo:case wi:return{byteLength:4,components:1};case ec:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gu(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function $f(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$p=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Jf,alphahash_pars_fragment:Kf,alphamap_fragment:jf,alphamap_pars_fragment:Qf,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:ip,aomap_pars_fragment:np,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:xp,color_vertex:yp,common:_p,cube_uv_reflection_fragment:vp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:wp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Ip,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Np,fog_fragment:Up,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:zp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:kp,lights_pars_begin:Hp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:Zp,lights_fragment_begin:$p,lights_fragment_maps:Jp,lights_fragment_end:Kp,lightprobes_pars_fragment:jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:im,map_fragment:nm,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:om,metalnessmap_fragment:am,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:xm,normal_vertex:ym,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Sm,opaque_fragment:wm,packing:Em,premultiplied_alpha_fragment:Tm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Um,skinbase_vertex:Fm,skinning_pars_vertex:Bm,skinning_vertex:zm,skinnormal_vertex:Om,specularmap_fragment:km,specularmap_pars_fragment:Hm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:Zm,worldpos_vertex:$m,background_vert:Jm,background_frag:Km,backgroundCube_vert:jm,backgroundCube_frag:Qm,cube_vert:t0,cube_frag:e0,depth_vert:i0,depth_frag:n0,distance_vert:s0,distance_frag:r0,equirect_vert:o0,equirect_frag:a0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:h0,meshbasic_frag:u0,meshlambert_vert:d0,meshlambert_frag:f0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:g0,meshnormal_frag:x0,meshphong_vert:y0,meshphong_frag:_0,meshphysical_vert:v0,meshphysical_frag:M0,meshtoon_vert:b0,meshtoon_frag:S0,points_vert:w0,points_frag:E0,shadow_vert:T0,shadow_frag:A0,sprite_vert:R0,sprite_frag:C0},gt={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},qi={basic:{uniforms:ni([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:ni([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:ni([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:ni([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:ni([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new lt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:ni([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:ni([gt.points,gt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:ni([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:ni([gt.common,gt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:ni([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:ni([gt.sprite,gt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:ni([gt.common,gt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:ni([gt.lights,gt.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};qi.physical={uniforms:ni([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var za={r:0,b:0,g:0},I0=new Qt,Vu=new Xt;Vu.set(-1,0,0,0,1,0,0,0,1);function P0(r,t,e,i,n,s){let o=new lt(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let v=M.backgroundBlurriness>0;T=t.get(T,v)}return T}function p(M){let T=!1,v=f(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),T=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(M,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===yr)?(c===void 0&&(c=new at(new At(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:qn(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vu),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==ue,(h!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new at(new Ce(2,2),new Ie({name:"BackgroundMaterial",uniforms:qn(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(za,uc(r)),e.buffers.color.setClear(za.r,za.g,za.b,T,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:x,dispose:m}}function L0(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,o=!1;function a(N,D,B,L,z){let H=!1,X=d(N,L,B,D);s!==X&&(s=X,c(s.object)),H=f(N,L,B,z),H&&p(N,L,B,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(N,D,B,L),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,D,B,L){let z=L.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let X=N.isInstancedMesh===!0?N.id:0,Y=H[X];Y===void 0&&(Y={},H[X]=Y);let k=Y[B.id];k===void 0&&(k={},Y[B.id]=k);let J=k[z];return J===void 0&&(J=u(l()),k[z]=J),J}function u(N){let D=[],B=[],L=[];for(let z=0;z<e;z++)D[z]=0,B[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,D,B,L){let z=s.attributes,H=D.attributes,X=0,Y=B.getAttributes();for(let k in Y)if(Y[k].location>=0){let Q=z[k],vt=H[k];if(vt===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(vt=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(vt=N.instanceColor)),Q===void 0||Q.attribute!==vt||vt&&Q.data!==vt.data)return!0;X++}return s.attributesNum!==X||s.index!==L}function p(N,D,B,L){let z={},H=D.attributes,X=0,Y=B.getAttributes();for(let k in Y)if(Y[k].location>=0){let Q=H[k];Q===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let vt={};vt.attribute=Q,Q&&Q.data&&(vt.data=Q.data),z[k]=vt,X++}s.attributes=z,s.attributesNum=X,s.index=L}function x(){let N=s.newAttributes;for(let D=0,B=N.length;D<B;D++)N[D]=0}function g(N){m(N,0)}function m(N,D){let B=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;B[N]=1,L[N]===0&&(r.enableVertexAttribArray(N),L[N]=1),z[N]!==D&&(r.vertexAttribDivisor(N,D),z[N]=D)}function M(){let N=s.newAttributes,D=s.enabledAttributes;for(let B=0,L=D.length;B<L;B++)D[B]!==N[B]&&(r.disableVertexAttribArray(B),D[B]=0)}function T(N,D,B,L,z,H,X){X===!0?r.vertexAttribIPointer(N,D,B,z,H):r.vertexAttribPointer(N,D,B,L,z,H)}function v(N,D,B,L){x();let z=L.attributes,H=B.getAttributes(),X=D.defaultAttributeValues;for(let Y in H){let k=H[Y];if(k.location>=0){let J=z[Y];if(J===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){let Q=J.normalized,vt=J.itemSize,St=t.get(J);if(St===void 0)continue;let Yt=St.buffer,Gt=St.type,$t=St.bytesPerElement,$=Gt===r.INT||Gt===r.UNSIGNED_INT||J.gpuType===Qo;if(J.isInterleavedBufferAttribute){let it=J.data,wt=it.stride,Ht=J.offset;if(it.isInstancedInterleavedBuffer){for(let Et=0;Et<k.locationSize;Et++)m(k.location+Et,it.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Et=0;Et<k.locationSize;Et++)g(k.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let Et=0;Et<k.locationSize;Et++)T(k.location+Et,vt/k.locationSize,Gt,Q,wt*$t,(Ht+vt/k.locationSize*Et)*$t,$)}else{if(J.isInstancedBufferAttribute){for(let it=0;it<k.locationSize;it++)m(k.location+it,J.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let it=0;it<k.locationSize;it++)g(k.location+it);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let it=0;it<k.locationSize;it++)T(k.location+it,vt/k.locationSize,Gt,Q,vt*$t,vt/k.locationSize*it*$t,$)}}else if(X!==void 0){let Q=X[Y];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(k.location,Q);break;case 3:r.vertexAttrib3fv(k.location,Q);break;case 4:r.vertexAttrib4fv(k.location,Q);break;default:r.vertexAttrib1fv(k.location,Q)}}}}M()}function S(){E();for(let N in i){let D=i[N];for(let B in D){let L=D[B];for(let z in L){let H=L[z];for(let X in H)h(H[X].object),delete H[X];delete L[z]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;let D=i[N.id];for(let B in D){let L=D[B];for(let z in L){let H=L[z];for(let X in H)h(H[X].object),delete H[X];delete L[z]}}delete i[N.id]}function R(N){for(let D in i){let B=i[D];for(let L in B){let z=B[L];if(z[N.id]===void 0)continue;let H=z[N.id];for(let X in H)h(H[X].object),delete H[X];delete z[N.id]}}}function y(N){for(let D in i){let B=i[D],L=N.isInstancedMesh===!0?N.id:0,z=B[L];if(z!==void 0){for(let H in z){let X=z[H];for(let Y in X)h(X[Y].object),delete X[Y];delete z[H]}delete B[L],Object.keys(B).length===0&&delete i[D]}}}function E(){P(),o=!0,s!==n&&(s=n,c(s.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:E,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function D0(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function N0(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==fi&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let y=R===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==di&&R!==wi&&!y&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,maxSamples:S,samples:w}}function U0(r){let t=this,e=null,i=0,n=!1,s=!1,o=new Ii,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=r.get(d);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let M=s?0:i,T=M*4,v=m.clippingState||null;l.value=v,v=h(p,u,T,f);for(let S=0;S!==T;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,v=f;T!==x;++T,v+=4)o.copy(d[T]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ds=4,F0=6,B0=20,z0=256,Ar=new nn,Mu=new lt,vc=null,Mc=0,bc=0,Sc=!1,O0=new A,Yn=new A,ka=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=O0}=s;vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,Mc,bc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vn||t.mapping===Xn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:_i,format:fi,colorSpace:Fn,depthBuffer:!1},n=bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=k0(s)),this._blurMaterial=G0(s,t,e),this._ggxMaterial=H0(s,t,e)}return n}_compileMaterial(t){let e=new at(new fe,t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,i,n,s){let l=new ai(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Mu),d.toneMapping=Di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new At,new ie({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(Mu),m=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));let S=this._cubeSize;Ls(n,v*S,T>2?S:0,S,S),d.setRenderTarget(n),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===vn||t.mapping===Xn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let s=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Ls(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ar)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-Ds?i-p+Ds:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ls(s,g,m,3*x,2*x),n.setRenderTarget(s),n.render(a,Ar),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,Ls(t,g,m,3*x,2*x),n.setRenderTarget(t),n.render(a,Ar)}_blur(t,e,i,n){let s=this._pingPongRenderTarget,o=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,n,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],d=3*h*(n>this._lodMax-Ds?n-this._lodMax+Ds:0),u=4*(this._cubeSize-h);Ls(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Ar)}};function k0(r){let t=[],e=[],i=r,n=r-Ds+1+F0;for(let s=0;s<n;s++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,T=m>2?0:-1,v=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];p.set(v,f*u*m);for(let S=0;S<u;S++){let w=h[S*2]*2-1,R=h[S*2+1]*2-1;m===0?Yn.set(1,R,w):m===1?Yn.set(-w,1,-R):m===2?Yn.set(-w,R,1):m===3?Yn.set(-1,R,-w):m===4?Yn.set(-w,-1,R):Yn.set(w,R,-1),Yn.toArray(x,(m*u+S)*f)}}let g=new fe;g.setAttribute("position",new Be(p,f)),g.setAttribute("outputDirection",new Be(x,f)),e.push(new at(g,null)),i>Ds&&i--}return{lodMeshes:e,sizeLods:t}}function bu(r,t,e){let i=new Ze(r,t,e);return i.texture.mapping=yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function H0(r,t,e){return new Ie({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function G0(r,t,e){return new Ie({name:"SphericalGaussianBlur",defines:{SAMPLES:B0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Va(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Su(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function wu(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ha=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new or(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new At(5,5,5),s=new Ie({name:"CubemapFromEquirect",uniforms:qn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:Wi});s.uniforms.tEquirect.value=e;let o=new at(n,s),a=e.minFilter;return e.minFilter===Mn&&(e.minFilter=ze),new Xo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}};function V0(r){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===Jo||f===Ko)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Ha(p.height);return x.fromEquirectangularTexture(r,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Jo||f===Ko,x=f===vn||f===Xn;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new ka(r)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new ka(r)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Jo?u.mapping=vn:f===Ko&&(u.mapping=Xn),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function W0(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Un("WebGLRenderer: "+i+" extension not supported."),n}}}function X0(r,t,e,i){let n={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete n[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let T=0,v=M.length;T<v;T+=3){let S=M[T+0],w=M[T+1],R=M[T+2];u.push(S,w,w,R,R,S)}}else{let M=p.array;x=p.version;for(let T=0,v=M.length/3-1;T<v;T+=3){let S=T+0,w=T+1,R=T+2;u.push(S,w,w,R,R,S)}}let g=new(p.count>=65535?ir:er)(u,1);g.version=x;let m=s.get(d);m&&t.remove(m),s.set(d,g)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function q0(r,t,e){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Y0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Z0(r,t,e){let i=new WeakMap,n=new Ae;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),x===!0&&(T=3);let v=a.attributes.position.count*T,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*S*4*d),R=new Qs(w,v,S,d);R.type=wi,R.needsUpdate=!0;let y=T*4;for(let P=0;P<d;P++){let N=g[P],D=m[P],B=M[P],L=v*S*4*P;for(let z=0;z<N.count;z++){let H=z*y;f===!0&&(n.fromBufferAttribute(N,z),w[L+H+0]=n.x,w[L+H+1]=n.y,w[L+H+2]=n.z,w[L+H+3]=0),p===!0&&(n.fromBufferAttribute(D,z),w[L+H+4]=n.x,w[L+H+5]=n.y,w[L+H+6]=n.z,w[L+H+7]=0),x===!0&&(n.fromBufferAttribute(B,z),w[L+H+8]=n.x,w[L+H+9]=n.y,w[L+H+10]=n.z,w[L+H+11]=B.itemSize===4?n.w:1)}}u={count:d,texture:R,size:new Mt(v,S)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function $0(r,t,e,i,n){let s=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var J0={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Zl]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function K0(r,t,e,i,n,s){let o=new Ze(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new fe;c.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zt([0,2,0,0,2,0],2));let h=new Do({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new at(c,h),u=new nn(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,M=[],T=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<M.length;w++){let R=M[w];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){M=v,T=M.length>0&&M[0].isRenderPass===!0;let S=o.width,w=o.height;M.length>0&&a===null&&(a=new Ze(S,w,{type:_i,depthBuffer:!1,stencilBuffer:!1}),l=new Ze(S,w,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let y=M[R];y.setSize&&y.setSize(S,w)}},this.begin=function(v,S){if(x||v.toneMapping===Di&&M.length===0)return!1;if(m=S,S!==null){let w=S.width,R=S.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return T===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Di,!0},this.hasRenderPass=function(){return T},this.end=function(v,S){v.toneMapping=g,x=!0;let w=o,R=a;for(let y=0;y<M.length;y++){let E=M[y];E.enabled!==!1&&(E.render(v,R,w,S),E.needsSwap!==!1&&(w=R,R=R===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},oe.getTransfer(f)===ue&&(h.defines.SRGB_TRANSFER="");let y=J0[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Wu=new li,Tc=new Vi(1,1),Xu=new Qs,qu=new Mo,Yu=new or,Eu=[],Tu=[],Au=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function Us(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Eu[n];if(s===void 0&&(s=new Float32Array(n),Eu[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ve(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function We(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Wa(r,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function j0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Q0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2fv(this.addr,t),We(e,t)}}function tg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;r.uniform3fv(this.addr,t),We(e,t)}}function eg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4fv(this.addr,t),We(e,t)}}function ig(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Cu.set(i),r.uniformMatrix2fv(this.addr,!1,Cu),We(e,i)}}function ng(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Ru.set(i),r.uniformMatrix3fv(this.addr,!1,Ru),We(e,i)}}function sg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Au.set(i),r.uniformMatrix4fv(this.addr,!1,Au),We(e,i)}}function rg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function og(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2iv(this.addr,t),We(e,t)}}function ag(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3iv(this.addr,t),We(e,t)}}function lg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4iv(this.addr,t),We(e,t)}}function cg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function hg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;r.uniform2uiv(this.addr,t),We(e,t)}}function ug(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;r.uniform3uiv(this.addr,t),We(e,t)}}function dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;r.uniform4uiv(this.addr,t),We(e,t)}}function fg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Tc.compareFunction=e.isReversedDepthBuffer()?Ba:Fa,s=Tc):s=Wu,e.setTexture2D(t||s,n)}function pg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||qu,n)}function mg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Yu,n)}function gg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Xu,n)}function xg(r){switch(r){case 5126:return j0;case 35664:return Q0;case 35665:return tg;case 35666:return eg;case 35674:return ig;case 35675:return ng;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function yg(r,t){r.uniform1fv(this.addr,t)}function _g(r,t){let e=Us(t,this.size,2);r.uniform2fv(this.addr,e)}function vg(r,t){let e=Us(t,this.size,3);r.uniform3fv(this.addr,e)}function Mg(r,t){let e=Us(t,this.size,4);r.uniform4fv(this.addr,e)}function bg(r,t){let e=Us(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Sg(r,t){let e=Us(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function wg(r,t){let e=Us(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Eg(r,t){r.uniform1iv(this.addr,t)}function Tg(r,t){r.uniform2iv(this.addr,t)}function Ag(r,t){r.uniform3iv(this.addr,t)}function Rg(r,t){r.uniform4iv(this.addr,t)}function Cg(r,t){r.uniform1uiv(this.addr,t)}function Ig(r,t){r.uniform2uiv(this.addr,t)}function Pg(r,t){r.uniform3uiv(this.addr,t)}function Lg(r,t){r.uniform4uiv(this.addr,t)}function Dg(r,t,e){let i=this.cache,n=t.length,s=Wa(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),We(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Tc:o=Wu;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function Ng(r,t,e){let i=this.cache,n=t.length,s=Wa(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),We(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||qu,s[o])}function Ug(r,t,e){let i=this.cache,n=t.length,s=Wa(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),We(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Yu,s[o])}function Fg(r,t,e){let i=this.cache,n=t.length,s=Wa(e,n);Ve(i,s)||(r.uniform1iv(this.addr,s),We(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Xu,s[o])}function Bg(r){switch(r){case 5126:return yg;case 35664:return _g;case 35665:return vg;case 35666:return Mg;case 35674:return bg;case 35675:return Sg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Ig;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}var Ac=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}},Rc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bg(e.type)}},Cc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},wc=/(\w+)(\])?(\[|\.)?/g;function Iu(r,t){r.seq.push(t),r.map[t.id]=t}function zg(r,t,e){let i=r.name,n=i.length;for(wc.lastIndex=0;;){let s=wc.exec(i),o=wc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Iu(e,c===void 0?new Ac(a,r,t):new Rc(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Cc(a),Iu(e,d)),e=d}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);zg(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Pu(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var Og=37297,kg=0;function Hg(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Lu=new Xt;function Gg(r){oe._getMatrix(Lu,oe.workingColorSpace,r);let t=`mat3( ${Lu.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(r)){case Ks:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Du(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Hg(r.getShaderSource(t),a)}else return s}function Vg(r,t){let e=Gg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wg={[Xl]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[Zl]:"ACESFilmic",[Jl]:"AgX",[Kl]:"Neutral",[$l]:"Custom"};function Xg(r,t){let e=Wg[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oa=new A;function qg(){oe.getLuminanceCoefficients(Oa);let r=Oa.x.toFixed(4),t=Oa.y.toFixed(4),e=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Zg(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $g(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Cr(r){return r!==""}function Nu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(r){return r.replace(Jg,jg)}var Kg=new Map;function jg(r,t){let e=Kt[t];if(e===void 0){let i=Kg.get(t);if(i!==void 0)e=Kt[i],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ic(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(r){return r.replace(Qg,tx)}function tx(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Bu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ex={[Vn]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function ix(r){return ex[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nx={[vn]:"ENVMAP_TYPE_CUBE",[Xn]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE_UV"};function sx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":nx[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var rx={[Xn]:"ENVMAP_MODE_REFRACTION"};function ox(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":rx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ax={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[tu]:"ENVMAP_BLENDING_MIX",[eu]:"ENVMAP_BLENDING_ADD"};function lx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ax[r.combine]||"ENVMAP_BLENDING_NONE"}function cx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function hx(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ix(e),c=sx(e),h=ox(e),d=lx(e),u=cx(e),f=Yg(e),p=Zg(s),x=n.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Cr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Cr).join(`
`),m.length>0&&(m+=`
`)):(g=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),m=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Di?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Ic(o),o=Nu(o,e),o=Uu(o,e),a=Ic(a),a=Nu(a,e),a=Uu(a,e),o=Fu(o),a=Fu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=M+g+o,v=M+m+a,S=Pu(n,n.VERTEX_SHADER,T),w=Pu(n,n.FRAGMENT_SHADER,v);n.attachShader(x,S),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function R(N){if(r.debug.checkShaderErrors){let D=n.getProgramInfoLog(x)||"",B=n.getShaderInfoLog(S)||"",L=n.getShaderInfoLog(w)||"",z=D.trim(),H=B.trim(),X=L.trim(),Y=!0,k=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,S,w);else{let J=Du(n,S,"vertex"),Q=Du(n,w,"fragment");Vt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+J+`
`+Q)}else z!==""?kt("WebGLProgram: Program Info Log:",z):(H===""||X==="")&&(k=!1);k&&(N.diagnostics={runnable:Y,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:X,prefix:m}})}n.deleteShader(S),n.deleteShader(w),y=new Ns(n,x),E=$g(n,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,Og)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var ux=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Lc(t),e.set(t,i)),i}},Lc=class{constructor(t){this.id=ux++,this.code=t,this.usedTimes=0}};function dx(r){return r===Sn||r===wr||r===Er}function fx(r,t,e,i,n,s){let o=new tr,a=new Pc,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,P,N,D,B){let L=N.fog,z=D.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=t.get(y.envMap||H,X),k=Y&&Y.mapping===yr?Y.image.height:null,J=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&kt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,vt=Q!==void 0?Q.length:0,St=0;z.morphAttributes.position!==void 0&&(St=1),z.morphAttributes.normal!==void 0&&(St=2),z.morphAttributes.color!==void 0&&(St=3);let Yt,Gt,$t,$;if(J){let ve=qi[J];Yt=ve.vertexShader,Gt=ve.fragmentShader}else{Yt=y.vertexShader,Gt=y.fragmentShader;let ve=a.getVertexShaderStage(y),ce=a.getFragmentShaderStage(y);a.update(y,ve,ce),$t=ve.id,$=ce.id}let it=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Ht=D.isInstancedMesh===!0,Et=D.isBatchedMesh===!0,ee=!!y.map,He=!!y.matcap,ne=!!Y,le=!!y.aoMap,_e=!!y.lightMap,re=!!y.bumpMap&&y.wireframe===!1,Ee=!!y.normalMap,Xe=!!y.displacementMap,hi=!!y.emissiveMap,Re=!!y.metalnessMap,Ne=!!y.roughnessMap,O=y.anisotropy>0,Qe=y.clearcoat>0,pe=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,G=y.sheen>0,q=y.transmission>0,K=O&&!!y.anisotropyMap,rt=Qe&&!!y.clearcoatMap,ct=Qe&&!!y.clearcoatNormalMap,j=Qe&&!!y.clearcoatRoughnessMap,et=_&&!!y.iridescenceMap,ht=_&&!!y.iridescenceThicknessMap,Ut=G&&!!y.sheenColorMap,mt=G&&!!y.sheenRoughnessMap,ut=!!y.specularMap,Ft=!!y.specularColorMap,Ot=!!y.specularIntensityMap,Zt=q&&!!y.transmissionMap,F=q&&!!y.thicknessMap,dt=!!y.gradientMap,tt=!!y.alphaMap,ft=y.alphaTest>0,_t=!!y.alphaHash,nt=!!y.extensions,Bt=Di;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Bt=r.toneMapping);let Pt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Yt,fragmentShader:Gt,defines:y.defines,customVertexShaderID:$t,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Et,batchingColor:Et&&D._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&D.instanceColor!==null,instancingMorph:Ht&&D.morphTexture!==null,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ee,matcap:He,envMap:ne,envMapMode:ne&&Y.mapping,envMapCubeUVHeight:k,aoMap:le,lightMap:_e,bumpMap:re,normalMap:Ee,displacementMap:Xe,emissiveMap:hi,normalMapObjectSpace:Ee&&y.normalMapType===su,normalMapTangentSpace:Ee&&y.normalMapType===Tr,packedNormalMap:Ee&&y.normalMapType===Tr&&dx(y.normalMap.format),metalnessMap:Re,roughnessMap:Ne,anisotropy:O,anisotropyMap:K,clearcoat:Qe,clearcoatMap:rt,clearcoatNormalMap:ct,clearcoatRoughnessMap:j,dispersion:pe,retroreflection:C,iridescence:_,iridescenceMap:et,iridescenceThicknessMap:ht,sheen:G,sheenColorMap:Ut,sheenRoughnessMap:mt,specularMap:ut,specularColorMap:Ft,specularIntensityMap:Ot,transmission:q,transmissionMap:Zt,thicknessMap:F,gradientMap:dt,opaque:y.transparent===!1&&y.blending===As&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:_t,combine:y.combine,mapUv:ee&&p(y.map.channel),aoMapUv:le&&p(y.aoMap.channel),lightMapUv:_e&&p(y.lightMap.channel),bumpMapUv:re&&p(y.bumpMap.channel),normalMapUv:Ee&&p(y.normalMap.channel),displacementMapUv:Xe&&p(y.displacementMap.channel),emissiveMapUv:hi&&p(y.emissiveMap.channel),metalnessMapUv:Re&&p(y.metalnessMap.channel),roughnessMapUv:Ne&&p(y.roughnessMap.channel),anisotropyMapUv:K&&p(y.anisotropyMap.channel),clearcoatMapUv:rt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&p(y.sheenRoughnessMap.channel),specularMapUv:ut&&p(y.specularMap.channel),specularColorMapUv:Ft&&p(y.specularColorMap.channel),specularIntensityMapUv:Ot&&p(y.specularIntensityMap.channel),transmissionMapUv:Zt&&p(y.transmissionMap.channel),thicknessMapUv:F&&p(y.thicknessMap.channel),alphaMapUv:tt&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ee||O),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(ee||tt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&Ee===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:St,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Bt,decodeVideoTexture:ee&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===ue,decodeVideoTextureEmissive:hi&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===ue,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xe,flipSided:y.side===ci,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:nt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&y.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(E,y),M(E,y),E.push(r.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){let E=f[y.type],P;if(E){let N=qi[E];P=yu.clone(N.uniforms)}else P=y.uniforms;return P}function v(y,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new hx(r,E,y,n),c.push(P),h.set(E,P)),P}function S(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:T,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:R}}function px(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function mx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function zu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ou(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,g,m){let M=r[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},r[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,f,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let T=a(u,f,p,x,g,m);p.transmission>0?i.push(T):p.transparent===!0?n.push(T):e.push(T)}function c(u,f,p,x,g,m){let M=a(u,f,p,x,g,m);p.transmission>0?i.unshift(M):p.transparent===!0?n.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||mx),i.length>1&&i.sort(f||zu),n.length>1&&n.sort(f||zu)}function d(){for(let u=t,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function gx(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new Ou,r.set(i,[o])):n>=s.length?(o=new Ou,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function xx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new lt};break;case"SpotLight":e={position:new A,direction:new A,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":e={color:new lt,position:new A,halfWidth:new A,halfHeight:new A};break}return r[t.id]=e,e}}}function yx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var _x=0;function vx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Mx(r){let t=new xx,e=yx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let n=new A,s=new Qt,o=new Qt;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,T=0,v=0,S=0,w=0,R=0,y=0,E=0,P=0;c.sort(vx);for(let D=0,B=c.length;D<B;D++){let L=c[D],z=L.color,H=L.intensity,X=L.distance,Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Sn?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],H);P++}else if(L.isSunLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,Q=e.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=Q,i.sunShadowMap[p]=Y;let vt=J.getViewportCount();for(let St=0;St<vt;St++)i.sunShadowMatrix[x+St]=J.getMatrix(St),i.sunShadowCascade[x+St]=J._cascadeData[St];x+=vt,p++}i.sun[f]=k,f++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let J=L.shadow,Q=e.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=L.shadow.matrix,S++}i.directional[g]=k,g++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(z).multiplyScalar(H),k.distance=X,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[M]=k;let J=L.shadow;if(L.map&&(i.spotLightMap[y]=L.map,y++,J.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[M]=J.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.spotShadow[M]=Q,i.spotShadowMap[M]=Y,R++}M++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(z).multiplyScalar(H),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[T]=k,T++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let J=L.shadow,Q=e.get(L);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=L.shadow.matrix,w++}i.point[m]=k,m++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(H),k.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[v]=k,v++}}T>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2):(i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==M||N.rectAreaLength!==T||N.hemiLength!==v||N.numSunShadows!==p||N.numDirectionalShadows!==S||N.numPointShadows!==w||N.numSpotShadows!==R||N.numSpotMaps!==y||N.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=g,i.spot.length=M,i.rectArea.length=T,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-E,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=M,N.rectAreaLength=T,N.hemiLength=v,N.numSunShadows=p,N.numDirectionalShadows=S,N.numPointShadows=w,N.numSpotShadows=R,N.numSpotMaps=y,N.numLightProbes=P,i.version=_x++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let v=c[M];if(v.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),u++}else if(v.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function ku(r){let t=new Mx(r),e=[],i=[],n=[];function s(u){d.camera=u,e.length=0,i.length=0,n.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){n.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function bx(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new ku(r),t.set(n,[a])):s>=o.length?(a=new ku(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ex=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Tx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Hu=new Qt,Rr=new A,Ec=new A;function Ax(r,t,e){let i=new bs,n=new Mt,s=new Mt,o=new Ae,a=new ws,l=new No,c={},h=e.maxTextureSize,d={[_n]:ci,[ci]:_n,[xe]:xe},u=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Sx,fragmentShader:wx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new fe;p.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new at(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vn;let m=this.type;this.render=function(w,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Bh&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vn);let E=r.getRenderTarget(),P=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=m!==this.type;B&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=w.length;L<z;L++){let H=w[L],X=H.shadow;if(X===void 0){kt("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let Y=X.getFrameExtents();n.multiply(Y),s.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Y.x),n.x=s.x*Y.x,X.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Y.y),n.y=s.y*Y.y,X.mapSize.y=s.y));let k=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=k,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ts){if(H.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ze(n.x,n.y,{format:Sn,type:_i,minFilter:ze,magFilter:ze,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new Vi(n.x,n.y,wi),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=Oi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=de,X.map.depthTexture.magFilter=de}else H.isPointLight?(X.map=new Ha(n.x),X.map.depthTexture=new So(n.x,yi)):(X.map=new Ze(n.x,n.y),X.map.depthTexture=new Vi(n.x,n.y,yi)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=Oi,this.type===Vn?(X.map.depthTexture.compareFunction=k?Ba:Fa,X.map.depthTexture.minFilter=ze,X.map.depthTexture.magFilter=ze):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=de,X.map.depthTexture.magFilter=de);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==n.x||X.map.height!==n.y)&&X.map.setSize(n.x,n.y);let J=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,y);for(let Q=0;Q<J;Q++){let vt=X.getCamera(Q);if(H.isPointLight){let St=X.camera,Yt=X.matrix,Gt=H.distance||St.far;Gt!==St.far&&(St.far=Gt,St.updateProjectionMatrix()),Rr.setFromMatrixPosition(H.matrixWorld),St.position.copy(Rr),Ec.copy(St.position),Ec.add(Ex[Q]),St.up.copy(Tx[Q]),St.lookAt(Ec),St.updateMatrixWorld(),Yt.makeTranslation(-Rr.x,-Rr.y,-Rr.z),Hu.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Hu,St.coordinateSystem,St.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,Q),r.clear();else{Q===0&&(r.setRenderTarget(X.map),r.clear());let St=X.getViewport(Q);o.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),D.viewport(o)}i=X.getFrustum(Q),v(R,y,vt,H,this.type)}X.isPointLightShadow!==!0&&this.type===Ts&&M(X,y),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(E,P,N)};function M(w,R){let y=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ze(n.x,n.y,{format:Sn,type:_i}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(R,null,y,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(R,null,y,f,x,null)}function T(w,R,y,E){let P=null,N=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?l:a,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=P.uuid,B=R.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let z=L[B];z===void 0&&(z=P.clone(),L[B]=z,R.addEventListener("dispose",S)),P=z}if(P.visible=R.visible,P.wireframe=R.wireframe,E===Ts?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=r.properties.get(P);D.light=y}return P}function v(w,R,y,E,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ts)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let B=t.update(w),L=w.material;if(Array.isArray(L)){let z=B.groups;for(let H=0,X=z.length;H<X;H++){let Y=z[H],k=L[Y.materialIndex];if(k&&k.visible){let J=T(w,k,E,P);w.onBeforeShadow(r,w,R,y,B,J,Y),r.renderBufferDirect(y,null,B,J,w,Y),w.onAfterShadow(r,w,R,y,B,J,Y)}}}else if(L.visible){let z=T(w,L,E,P);w.onBeforeShadow(r,w,R,y,B,z,null),r.renderBufferDirect(y,null,B,z,w,null),w.onAfterShadow(r,w,R,y,B,z,null)}}let D=w.children;for(let B=0,L=D.length;B<L;B++)v(D[B],R,y,E,P)}function S(w){w.target.removeEventListener("dispose",S);for(let y in c){let E=c[y],P=w.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Rx(r,t){function e(){let F=!1,dt=new Ae,tt=null,ft=new Ae(0,0,0,0);return{setMask:function(_t){tt!==_t&&!F&&(r.colorMask(_t,_t,_t,_t),tt=_t)},setLocked:function(_t){F=_t},setClear:function(_t,nt,Bt,Pt,ve){ve===!0&&(_t*=Pt,nt*=Pt,Bt*=Pt),dt.set(_t,nt,Bt,Pt),ft.equals(dt)===!1&&(r.clearColor(_t,nt,Bt,Pt),ft.copy(dt))},reset:function(){F=!1,tt=null,ft.set(-1,0,0,0)}}}function i(){let F=!1,dt=!1,tt=null,ft=null,_t=null;return{setReversed:function(nt){if(dt!==nt){let Bt=t.get("EXT_clip_control");nt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),dt=nt;let Pt=_t;_t=null,this.setClear(Pt)}},getReversed:function(){return dt},setTest:function(nt){nt?it(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(nt){tt!==nt&&!F&&(r.depthMask(nt),tt=nt)},setFunc:function(nt){if(dt&&(nt=gu[nt]),ft!==nt){switch(nt){case co:r.depthFunc(r.NEVER);break;case ho:r.depthFunc(r.ALWAYS);break;case uo:r.depthFunc(r.LESS);break;case ps:r.depthFunc(r.LEQUAL);break;case fo:r.depthFunc(r.EQUAL);break;case po:r.depthFunc(r.GEQUAL);break;case mo:r.depthFunc(r.GREATER);break;case go:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=nt}},setLocked:function(nt){F=nt},setClear:function(nt){_t!==nt&&(_t=nt,dt&&(nt=1-nt),r.clearDepth(nt))},reset:function(){F=!1,tt=null,ft=null,_t=null,dt=!1}}}function n(){let F=!1,dt=null,tt=null,ft=null,_t=null,nt=null,Bt=null,Pt=null,ve=null;return{setTest:function(ce){F||(ce?it(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(ce){dt!==ce&&!F&&(r.stencilMask(ce),dt=ce)},setFunc:function(ce,Ti,Ui){(tt!==ce||ft!==Ti||_t!==Ui)&&(r.stencilFunc(ce,Ti,Ui),tt=ce,ft=Ti,_t=Ui)},setOp:function(ce,Ti,Ui){(nt!==ce||Bt!==Ti||Pt!==Ui)&&(r.stencilOp(ce,Ti,Ui),nt=ce,Bt=Ti,Pt=Ui)},setLocked:function(ce){F=ce},setClear:function(ce){ve!==ce&&(r.clearStencil(ce),ve=ce)},reset:function(){F=!1,dt=null,tt=null,ft=null,_t=null,nt=null,Bt=null,Pt=null,ve=null}}}let s=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,T=null,v=null,S=null,w=null,R=null,y=new lt(0,0,0),E=0,P=!1,N=null,D=null,B=null,L=null,z=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=Y>=2);let J=null,Q={},vt=r.getParameter(r.SCISSOR_BOX),St=r.getParameter(r.VIEWPORT),Yt=new Ae().fromArray(vt),Gt=new Ae().fromArray(St);function $t(F,dt,tt,ft){let _t=new Uint8Array(4),nt=r.createTexture();r.bindTexture(F,nt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<tt;Bt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,_t):r.texImage2D(dt+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_t);return nt}let $={};$[r.TEXTURE_2D]=$t(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=$t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=$t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=$t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(r.DEPTH_TEST),o.setFunc(ps),re(!1),Ee(kl),it(r.CULL_FACE),le(Wi);function it(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function wt(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Ht(F,dt){return u[F]!==dt?(r.bindFramebuffer(F,dt),u[F]=dt,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function Et(F,dt){let tt=p,ft=!1;if(F){tt=f.get(dt),tt===void 0&&(tt=[],f.set(dt,tt));let _t=F.textures;if(tt.length!==_t.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let nt=0,Bt=_t.length;nt<Bt;nt++)tt[nt]=r.COLOR_ATTACHMENT0+nt;tt.length=_t.length,ft=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,ft=!0);ft&&r.drawBuffers(tt)}function ee(F){return x!==F?(r.useProgram(F),x=F,!0):!1}let He={[Wn]:r.FUNC_ADD,[zh]:r.FUNC_SUBTRACT,[Oh]:r.FUNC_REVERSE_SUBTRACT};He[kh]=r.MIN,He[Hh]=r.MAX;let ne={[Gh]:r.ZERO,[$o]:r.ONE,[Vh]:r.SRC_COLOR,[Vl]:r.SRC_ALPHA,[$h]:r.SRC_ALPHA_SATURATE,[Yh]:r.DST_COLOR,[Xh]:r.DST_ALPHA,[Wh]:r.ONE_MINUS_SRC_COLOR,[xr]:r.ONE_MINUS_SRC_ALPHA,[Zh]:r.ONE_MINUS_DST_COLOR,[qh]:r.ONE_MINUS_DST_ALPHA,[Jh]:r.CONSTANT_COLOR,[Kh]:r.ONE_MINUS_CONSTANT_COLOR,[jh]:r.CONSTANT_ALPHA,[Qh]:r.ONE_MINUS_CONSTANT_ALPHA};function le(F,dt,tt,ft,_t,nt,Bt,Pt,ve,ce){if(F===Wi){g===!0&&(wt(r.BLEND),g=!1);return}if(g===!1&&(it(r.BLEND),g=!0),F!==Zo){if(F!==m||ce!==P){if((M!==Wn||S!==Wn)&&(r.blendEquation(r.FUNC_ADD),M=Wn,S=Wn),ce)switch(F){case As:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oe:r.blendFunc(r.ONE,r.ONE);break;case Hl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Vt("WebGLState: Invalid blending: ",F);break}else switch(F){case As:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Oe:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Hl:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",F);break}T=null,v=null,w=null,R=null,y.set(0,0,0),E=0,m=F,P=ce}return}_t=_t||dt,nt=nt||tt,Bt=Bt||ft,(dt!==M||_t!==S)&&(r.blendEquationSeparate(He[dt],He[_t]),M=dt,S=_t),(tt!==T||ft!==v||nt!==w||Bt!==R)&&(r.blendFuncSeparate(ne[tt],ne[ft],ne[nt],ne[Bt]),T=tt,v=ft,w=nt,R=Bt),(Pt.equals(y)===!1||ve!==E)&&(r.blendColor(Pt.r,Pt.g,Pt.b,ve),y.copy(Pt),E=ve),m=F,P=!1}function _e(F,dt){F.side===xe?wt(r.CULL_FACE):it(r.CULL_FACE);let tt=F.side===ci;dt&&(tt=!tt),re(tt),F.blending===As&&F.transparent===!1?le(Wi):le(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let ft=F.stencilWrite;a.setTest(ft),ft&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),hi(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(F){N!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),N=F)}function Ee(F){F!==Uh?(it(r.CULL_FACE),F!==D&&(F===kl?r.cullFace(r.BACK):F===Fh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),D=F}function Xe(F){F!==B&&(X&&r.lineWidth(F),B=F)}function hi(F,dt,tt){F?(it(r.POLYGON_OFFSET_FILL),(L!==dt||z!==tt)&&(L=dt,z=tt,o.getReversed()&&(dt=-dt),r.polygonOffset(dt,tt))):wt(r.POLYGON_OFFSET_FILL)}function Re(F){F?it(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Ne(F){F===void 0&&(F=r.TEXTURE0+H-1),J!==F&&(r.activeTexture(F),J=F)}function O(F,dt,tt){tt===void 0&&(J===null?tt=r.TEXTURE0+H-1:tt=J);let ft=Q[tt];ft===void 0&&(ft={type:void 0,texture:void 0},Q[tt]=ft),(ft.type!==F||ft.texture!==dt)&&(J!==tt&&(r.activeTexture(tt),J=tt),r.bindTexture(F,dt||$[F]),ft.type=F,ft.texture=dt)}function Qe(){let F=Q[J];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function pe(){try{r.compressedTexImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function _(){try{r.texSubImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function G(){try{r.texSubImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function rt(){try{r.texStorage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function ct(){try{r.texStorage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function j(){try{r.texImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function et(){try{r.texImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function ht(F){return d[F]!==void 0?d[F]:r.getParameter(F)}function Ut(F,dt){d[F]!==dt&&(r.pixelStorei(F,dt),d[F]=dt)}function mt(F){Yt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Yt.copy(F))}function ut(F){Gt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Gt.copy(F))}function Ft(F,dt){let tt=c.get(dt);tt===void 0&&(tt=new WeakMap,c.set(dt,tt));let ft=tt.get(F);ft===void 0&&(ft=r.getUniformBlockIndex(dt,F.name),tt.set(F,ft))}function Ot(F,dt){let ft=c.get(dt).get(F);l.get(dt)!==ft&&(r.uniformBlockBinding(dt,ft,F.__bindingPointIndex),l.set(dt,ft))}function Zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,Q={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,T=null,v=null,S=null,w=null,R=null,y=new lt(0,0,0),E=0,P=!1,N=null,D=null,B=null,L=null,z=null,Yt.set(0,0,r.canvas.width,r.canvas.height),Gt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:wt,bindFramebuffer:Ht,drawBuffers:Et,useProgram:ee,setBlending:le,setMaterial:_e,setFlipSided:re,setCullFace:Ee,setLineWidth:Xe,setPolygonOffset:hi,setScissorTest:Re,activeTexture:Ne,bindTexture:O,unbindTexture:Qe,compressedTexImage2D:pe,compressedTexImage3D:C,texImage2D:j,texImage3D:et,pixelStorei:Ut,getParameter:ht,updateUBOMapping:Ft,uniformBlockBinding:Ot,texStorage2D:rt,texStorage3D:ct,texSubImage2D:_,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:mt,viewport:ut,reset:Zt}}function Cx(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return p?new OffscreenCanvas(C,_):js("canvas")}function g(C,_,G){let q=1,K=pe(C);if((K.width>G||K.height>G)&&(q=G/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(q*K.width),ct=Math.floor(q*K.height);u===void 0&&(u=x(rt,ct));let j=_?x(rt,ct):u;return j.width=rt,j.height=ct,j.getContext("2d").drawImage(C,0,0,rt,ct),kt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+rt+"x"+ct+")."),j}else return"data"in C&&kt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(C,_,G,q,K,rt=!1){if(C!==null){if(r[C]!==void 0)return r[C];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;q&&(ct=t.get("EXT_texture_norm16"),ct||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8),G===r.UNSIGNED_SHORT&&ct&&(j=ct.R16_EXT),G===r.SHORT&&ct&&(j=ct.R16_SNORM_EXT)),_===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),_===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8),G===r.UNSIGNED_SHORT&&ct&&(j=ct.RG16_EXT),G===r.SHORT&&ct&&(j=ct.RG16_SNORM_EXT)),_===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),_===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),_===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),_===r.RGB&&(G===r.UNSIGNED_SHORT&&ct&&(j=ct.RGB16_EXT),G===r.SHORT&&ct&&(j=ct.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),_===r.RGBA){let et=rt?Ks:oe.getTransfer(K);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=et===ue?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&ct&&(j=ct.RGBA16_EXT),G===r.SHORT&&ct&&(j=ct.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(C,_){let G;return C?_===null||_===yi||_===Cs?G=r.DEPTH24_STENCIL8:_===wi?G=r.DEPTH32F_STENCIL8:_===Rs&&(G=r.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yi||_===Cs?G=r.DEPTH_COMPONENT24:_===wi?G=r.DEPTH_COMPONENT32F:_===Rs&&(G=r.DEPTH_COMPONENT16),G}function w(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==de&&C.minFilter!==ze?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){let _=C.target;_.removeEventListener("dispose",R),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(C){let _=C.target;_.removeEventListener("dispose",y),N(_)}function E(C){let _=i.get(C);if(_.__webglInit===void 0)return;let G=C.source,q=f.get(G);if(q){let K=q[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(C),Object.keys(q).length===0&&f.delete(G)}i.remove(C)}function P(C){let _=i.get(C);r.deleteTexture(_.__webglTexture);let G=C.source,q=f.get(G);delete q[_.__cacheKey],o.memory.textures--}function N(C){let _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let K=0;K<_.__webglFramebuffer[q].length;K++)r.deleteFramebuffer(_.__webglFramebuffer[q][K]);else r.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)r.deleteFramebuffer(_.__webglFramebuffer[q]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let G=C.textures;for(let q=0,K=G.length;q<K;q++){let rt=i.get(G[q]);rt.__webglTexture&&(r.deleteTexture(rt.__webglTexture),o.memory.textures--),i.remove(G[q])}i.remove(C)}let D=0;function B(){D=0}function L(){return D}function z(C){D=C}function H(){let C=D;return C>=n.maxTextures&&kt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),D+=1,C}function X(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function Y(C,_){let G=i.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let q=C.image;if(q===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(G,C,_);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+_)}function k(C,_){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){wt(G,C,_);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+_)}function J(C,_){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){wt(G,C,_);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+_)}function Q(C,_){let G=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){Ht(G,C,_);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+_)}let vt={[ms]:r.REPEAT,[zi]:r.CLAMP_TO_EDGE,[xo]:r.MIRRORED_REPEAT},St={[de]:r.NEAREST,[iu]:r.NEAREST_MIPMAP_NEAREST,[_r]:r.NEAREST_MIPMAP_LINEAR,[ze]:r.LINEAR,[jo]:r.LINEAR_MIPMAP_NEAREST,[Mn]:r.LINEAR_MIPMAP_LINEAR},Yt={[ou]:r.NEVER,[uu]:r.ALWAYS,[au]:r.LESS,[Fa]:r.LEQUAL,[lu]:r.EQUAL,[Ba]:r.GEQUAL,[cu]:r.GREATER,[hu]:r.NOTEQUAL};function Gt(C,_){if(_.type===wi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ze||_.magFilter===jo||_.magFilter===_r||_.magFilter===Mn||_.minFilter===ze||_.minFilter===jo||_.minFilter===_r||_.minFilter===Mn)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,vt[_.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,vt[_.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,vt[_.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,St[_.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,St[_.minFilter]),_.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===de||_.minFilter!==_r&&_.minFilter!==Mn||_.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $t(C,_){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));let q=_.source,K=f.get(q);K===void 0&&(K={},f.set(q,K));let rt=X(_);if(rt!==C.__cacheKey){K[rt]===void 0&&(K[rt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),K[rt].usedTimes++;let ct=K[C.__cacheKey];ct!==void 0&&(K[C.__cacheKey].usedTimes--,ct.usedTimes===0&&P(_)),C.__cacheKey=rt,C.__webglTexture=K[rt].texture}return G}function $(C,_,G){return Math.floor(Math.floor(C/G)/_)}function it(C,_,G,q){let rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,_.width,_.height,G,q,_.data);else{rt.sort((Ut,mt)=>Ut.start-mt.start);let ct=0;for(let Ut=1;Ut<rt.length;Ut++){let mt=rt[ct],ut=rt[Ut],Ft=mt.start+mt.count,Ot=$(ut.start,_.width,4),Zt=$(mt.start,_.width,4);ut.start<=Ft+1&&Ot===Zt&&$(ut.start+ut.count-1,_.width,4)===Ot?mt.count=Math.max(mt.count,ut.start+ut.count-mt.start):(++ct,rt[ct]=ut)}rt.length=ct+1;let j=e.getParameter(r.UNPACK_ROW_LENGTH),et=e.getParameter(r.UNPACK_SKIP_PIXELS),ht=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,_.width);for(let Ut=0,mt=rt.length;Ut<mt;Ut++){let ut=rt[Ut],Ft=Math.floor(ut.start/4),Ot=Math.ceil(ut.count/4),Zt=Ft%_.width,F=Math.floor(Ft/_.width),dt=Ot,tt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(r.UNPACK_SKIP_ROWS,F),e.texSubImage2D(r.TEXTURE_2D,0,Zt,F,dt,tt,G,q,_.data)}C.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,j),e.pixelStorei(r.UNPACK_SKIP_PIXELS,et),e.pixelStorei(r.UNPACK_SKIP_ROWS,ht)}}function wt(C,_,G){let q=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=r.TEXTURE_3D);let K=$t(C,_),rt=_.source;e.bindTexture(q,C.__webglTexture,r.TEXTURE0+G);let ct=i.get(rt);if(rt.version!==ct.__version||K===!0){if(e.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let tt=oe.getPrimaries(oe.workingColorSpace),ft=_.colorSpace===Ni?null:oe.getPrimaries(_.colorSpace),_t=_.colorSpace===Ni||tt===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment);let et=g(_.image,!1,n.maxTextureSize);et=Qe(_,et);let ht=s.convert(_.format,_.colorSpace),Ut=s.convert(_.type),mt=v(_.internalFormat,ht,Ut,_.normalized,_.colorSpace,_.isVideoTexture);Gt(q,_);let ut,Ft=_.mipmaps,Ot=_.isVideoTexture!==!0,Zt=ct.__version===void 0||K===!0,F=rt.dataReady,dt=w(_,et);if(_.isDepthTexture)mt=S(_.format===bn,_.type),Zt&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,mt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,mt,et.width,et.height,0,ht,Ut,null));else if(_.isDataTexture)if(Ft.length>0){Ot&&Zt&&e.texStorage2D(r.TEXTURE_2D,dt,mt,Ft[0].width,Ft[0].height);for(let tt=0,ft=Ft.length;tt<ft;tt++)ut=Ft[tt],Ot?F&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,ut.width,ut.height,ht,Ut,ut.data):e.texImage2D(r.TEXTURE_2D,tt,mt,ut.width,ut.height,0,ht,Ut,ut.data);_.generateMipmaps=!1}else Ot?(Zt&&e.texStorage2D(r.TEXTURE_2D,dt,mt,et.width,et.height),F&&it(_,et,ht,Ut)):e.texImage2D(r.TEXTURE_2D,0,mt,et.width,et.height,0,ht,Ut,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&Zt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,mt,Ft[0].width,Ft[0].height,et.depth);for(let tt=0,ft=Ft.length;tt<ft;tt++)if(ut=Ft[tt],_.format!==fi)if(ht!==null)if(Ot){if(F)if(_.layerUpdates.size>0){let _t=pc(ut.width,ut.height,_.format,_.type);for(let nt of _.layerUpdates){let Bt=ut.data.subarray(nt*_t/ut.data.BYTES_PER_ELEMENT,(nt+1)*_t/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,nt,ut.width,ut.height,1,ht,Bt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,ut.width,ut.height,et.depth,ht,ut.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,mt,ut.width,ut.height,et.depth,0,ut.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?F&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,ut.width,ut.height,et.depth,ht,Ut,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,mt,ut.width,ut.height,et.depth,0,ht,Ut,ut.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ot&&Zt&&e.texStorage2D(r.TEXTURE_2D,dt,mt,Ft[0].width,Ft[0].height);for(let tt=0,ft=Ft.length;tt<ft;tt++)ut=Ft[tt],_.format!==fi?ht!==null?Ot?F&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,mt,ut.width,ut.height,0,ut.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?F&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,ut.width,ut.height,ht,Ut,ut.data):e.texImage2D(r.TEXTURE_2D,tt,mt,ut.width,ut.height,0,ht,Ut,ut.data)}else if(_.isDataArrayTexture)if(Ot){if(Zt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,mt,et.width,et.height,et.depth),F)if(_.layerUpdates.size>0){let tt=pc(et.width,et.height,_.format,_.type);for(let ft of _.layerUpdates){let _t=et.data.subarray(ft*tt/et.data.BYTES_PER_ELEMENT,(ft+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ft,et.width,et.height,1,ht,Ut,_t)}_.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ht,Ut,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,mt,et.width,et.height,et.depth,0,ht,Ut,et.data);else if(_.isData3DTexture)Ot?(Zt&&e.texStorage3D(r.TEXTURE_3D,dt,mt,et.width,et.height,et.depth),F&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ht,Ut,et.data)):e.texImage3D(r.TEXTURE_3D,0,mt,et.width,et.height,et.depth,0,ht,Ut,et.data);else if(_.isFramebufferTexture){if(Zt)if(Ot)e.texStorage2D(r.TEXTURE_2D,dt,mt,et.width,et.height);else{let tt=et.width,ft=et.height;for(let _t=0;_t<dt;_t++)e.texImage2D(r.TEXTURE_2D,_t,mt,tt,ft,0,ht,Ut,null),tt>>=1,ft>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in r){let tt=r.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),d.add(_),tt.onpaint=ft=>{let _t=ft.changedElements;for(let nt of d)_t.includes(nt.image)&&(nt.needsUpdate=!0)},tt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,et);else{let _t=r.RGBA,nt=r.RGBA,Bt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,_t,nt,Bt,et)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Ot&&Zt){let tt=pe(Ft[0]);e.texStorage2D(r.TEXTURE_2D,dt,mt,tt.width,tt.height)}for(let tt=0,ft=Ft.length;tt<ft;tt++)ut=Ft[tt],Ot?F&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,ht,Ut,ut):e.texImage2D(r.TEXTURE_2D,tt,mt,ht,Ut,ut);_.generateMipmaps=!1}else if(Ot){if(Zt){let tt=pe(et);e.texStorage2D(r.TEXTURE_2D,dt,mt,tt.width,tt.height)}F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,Ut,et)}else e.texImage2D(r.TEXTURE_2D,0,mt,ht,Ut,et);m(_)&&M(q),ct.__version=rt.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ht(C,_,G){if(_.image.length!==6)return;let q=$t(C,_),K=_.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);let rt=i.get(K);if(K.version!==rt.__version||q===!0){e.activeTexture(r.TEXTURE0+G);let ct=oe.getPrimaries(oe.workingColorSpace),j=_.colorSpace===Ni?null:oe.getPrimaries(_.colorSpace),et=_.colorSpace===Ni||ct===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ht=_.isCompressedTexture||_.image[0].isCompressedTexture,Ut=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let nt=0;nt<6;nt++)!ht&&!Ut?mt[nt]=g(_.image[nt],!0,n.maxCubemapSize):mt[nt]=Ut?_.image[nt].image:_.image[nt],mt[nt]=Qe(_,mt[nt]);let ut=mt[0],Ft=s.convert(_.format,_.colorSpace),Ot=s.convert(_.type),Zt=v(_.internalFormat,Ft,Ot,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,dt=rt.__version===void 0||q===!0,tt=K.dataReady,ft=w(_,ut);Gt(r.TEXTURE_CUBE_MAP,_);let _t;if(ht){F&&dt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Zt,ut.width,ut.height);for(let nt=0;nt<6;nt++){_t=mt[nt].mipmaps;for(let Bt=0;Bt<_t.length;Bt++){let Pt=_t[Bt];_.format!==fi?Ft!==null?F?tt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt,0,0,Pt.width,Pt.height,Ft,Pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt,Zt,Pt.width,Pt.height,0,Pt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt,0,0,Pt.width,Pt.height,Ft,Ot,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt,Zt,Pt.width,Pt.height,0,Ft,Ot,Pt.data)}}}else{if(_t=_.mipmaps,F&&dt){_t.length>0&&ft++;let nt=pe(mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Zt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Ut){F?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,mt[nt].width,mt[nt].height,Ft,Ot,mt[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,mt[nt].width,mt[nt].height,0,Ft,Ot,mt[nt].data);for(let Bt=0;Bt<_t.length;Bt++){let ve=_t[Bt].image[nt].image;F?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt+1,0,0,ve.width,ve.height,Ft,Ot,ve.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt+1,Zt,ve.width,ve.height,0,Ft,Ot,ve.data)}}else{F?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ft,Ot,mt[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,Ft,Ot,mt[nt]);for(let Bt=0;Bt<_t.length;Bt++){let Pt=_t[Bt];F?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt+1,0,0,Ft,Ot,Pt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Bt+1,Zt,Ft,Ot,Pt.image[nt])}}}m(_)&&M(r.TEXTURE_CUBE_MAP),rt.__version=K.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Et(C,_,G,q,K,rt){let ct=s.convert(G.format,G.colorSpace),j=s.convert(G.type),et=v(G.internalFormat,ct,j,G.normalized,G.colorSpace),ht=i.get(_),Ut=i.get(G);if(Ut.__renderTarget=_,!ht.__hasExternalTextures){let mt=Math.max(1,_.width>>rt),ut=Math.max(1,_.height>>rt);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,rt,et,mt,ut,_.depth,0,ct,j,null):e.texImage2D(K,rt,et,mt,ut,0,ct,j,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Ne(_)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,K,Ut.__webglTexture,0,Re(_)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,K,Ut.__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(C,_,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),_.depthBuffer){let q=_.depthTexture,K=q&&q.isDepthTexture?q.type:null,rt=S(_.stencilBuffer,K),ct=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ne(_)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(_),rt,_.width,_.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(_),rt,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,rt,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,C)}else{let q=_.textures;for(let K=0;K<q.length;K++){let rt=q[K],ct=s.convert(rt.format,rt.colorSpace),j=s.convert(rt.type),et=v(rt.internalFormat,ct,j,rt.normalized,rt.colorSpace);Ne(_)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re(_),et,_.width,_.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re(_),et,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,et,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(C,_,G){let q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,_.depthTexture);let ht=s.convert(_.depthTexture.format),Ut=s.convert(_.depthTexture.type),mt;_.depthTexture.format===Oi?mt=r.DEPTH_COMPONENT24:_.depthTexture.format===bn&&(mt=r.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,mt,_.width,_.height,0,ht,Ut,null)}}else Y(_.depthTexture,0);let rt=K.__webglTexture,ct=Re(_),j=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,et=_.depthTexture.format===bn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(_.depthTexture.format===Oi)Ne(_)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,j,rt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,et,j,rt,0);else if(_.depthTexture.format===bn)Ne(_)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,j,rt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,et,j,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(C){let _=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=q}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)He(_.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?He(_.__webglFramebuffer[0],C,0):He(_.__webglFramebuffer,C,0)}else if(G){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=r.createRenderbuffer(),ee(_.__webglDepthbuffer[q],C,!1);else{let K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,rt)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),ee(_.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,rt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function le(C,_,G){let q=i.get(C);_!==void 0&&Et(q.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&ne(C)}function _e(C){let _=C.texture,G=i.get(C),q=i.get(_);C.addEventListener("dispose",y);let K=C.textures,rt=C.isWebGLCubeRenderTarget===!0,ct=K.length>1;if(ct||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=_.version,o.memory.textures++),rt){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let et=0;et<_.mipmaps.length;et++)G.__webglFramebuffer[j][et]=r.createFramebuffer()}else G.__webglFramebuffer[j]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)G.__webglFramebuffer[j]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ct)for(let j=0,et=K.length;j<et;j++){let ht=i.get(K[j]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ne(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let et=K[j];G.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let ht=s.convert(et.format,et.colorSpace),Ut=s.convert(et.type),mt=v(et.internalFormat,ht,Ut,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),ut=Re(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,mt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,G.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)Et(G.__webglFramebuffer[j][et],C,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,et);else Et(G.__webglFramebuffer[j],C,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(_)&&M(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let j=0,et=K.length;j<et;j++){let ht=K[j],Ut=i.get(ht),mt=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(mt,Ut.__webglTexture),Gt(mt,ht),Et(G.__webglFramebuffer,C,ht,r.COLOR_ATTACHMENT0+j,mt,0),m(ht)&&M(mt)}e.unbindTexture()}else{let j=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,q.__webglTexture),Gt(j,_),_.mipmaps&&_.mipmaps.length>0)for(let et=0;et<_.mipmaps.length;et++)Et(G.__webglFramebuffer[et],C,_,r.COLOR_ATTACHMENT0,j,et);else Et(G.__webglFramebuffer,C,_,r.COLOR_ATTACHMENT0,j,0);m(_)&&M(j),e.unbindTexture()}C.depthBuffer&&ne(C)}function re(C){let _=C.textures;for(let G=0,q=_.length;G<q;G++){let K=_[G];if(m(K)){let rt=T(C),ct=i.get(K).__webglTexture;e.bindTexture(rt,ct),M(rt),e.unbindTexture()}}}let Ee=[],Xe=[];function hi(C){if(C.samples>0){if(Ne(C)===!1){let _=C.textures,G=C.width,q=C.height,K=r.COLOR_BUFFER_BIT,rt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=i.get(C),j=_.length>1;if(j)for(let ht=0;ht<_.length;ht++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let et=C.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ht=0;ht<_.length;ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);let Ut=i.get(_[ht]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ut,0)}r.blitFramebuffer(0,0,G,q,0,0,G,q,K,r.NEAREST),l===!0&&(Ee.length=0,Xe.length=0,Ee.push(r.COLOR_ATTACHMENT0+ht),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ee.push(rt),Xe.push(rt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let ht=0;ht<_.length;ht++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.RENDERBUFFER,ct.__webglColorRenderbuffer[ht]);let Ut=i.get(_[ht]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ht,r.TEXTURE_2D,Ut,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let _=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function Re(C){return Math.min(n.maxSamples,C.samples)}function Ne(C){let _=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(C){let _=o.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Qe(C,_){let G=C.colorSpace,q=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Fn&&G!==Ni&&(oe.getTransfer(G)===ue?(q!==fi||K!==di)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",G)),_}function pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=le,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=hi,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ix(r,t){function e(i,n=Ni){let s,o=oe.getTransfer(n);if(i===di)return r.UNSIGNED_BYTE;if(i===ta)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ea)return r.UNSIGNED_SHORT_5_5_5_1;if(i===ec)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===ic)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ql)return r.BYTE;if(i===tc)return r.SHORT;if(i===Rs)return r.UNSIGNED_SHORT;if(i===Qo)return r.INT;if(i===yi)return r.UNSIGNED_INT;if(i===wi)return r.FLOAT;if(i===_i)return r.HALF_FLOAT;if(i===nc)return r.ALPHA;if(i===sc)return r.RGB;if(i===fi)return r.RGBA;if(i===Oi)return r.DEPTH_COMPONENT;if(i===bn)return r.DEPTH_STENCIL;if(i===ia)return r.RED;if(i===na)return r.RED_INTEGER;if(i===Sn)return r.RG;if(i===sa)return r.RG_INTEGER;if(i===ra)return r.RGBA_INTEGER;if(i===vr||i===Mr||i===br||i===Sr)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===br)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oa||i===aa||i===la||i===ca)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===aa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===la)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ha||i===ua||i===da||i===fa||i===pa||i===wr||i===ma)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ha||i===ua)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===da)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===fa)return s.COMPRESSED_R11_EAC;if(i===pa)return s.COMPRESSED_SIGNED_R11_EAC;if(i===wr)return s.COMPRESSED_RG11_EAC;if(i===ma)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ga||i===xa||i===ya||i===_a||i===va||i===Ma||i===ba||i===Sa||i===wa||i===Ea||i===Ta||i===Aa||i===Ra||i===Ca)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ga)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ya)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_a)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===va)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ma)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ba)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ea)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ta)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Aa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ra)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ca)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ia||i===Pa||i===La)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ia)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===La)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Da||i===Na||i===Er||i===Ua)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Da)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Er)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ie({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new Ce(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends ki{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Dc,m={},M=e.getContextAttributes(),T=null,v=null,S=[],w=[],R=new Mt,y=null,E=null,P=new ai;P.viewport=new Ae;let N=new ai;N.viewport=new Ae;let D=[P,N],B=new qo,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=S[$];return it===void 0&&(it=new vs,S[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=S[$];return it===void 0&&(it=new vs,S[$]=it),it.getGripSpace()},this.getHand=function($){let it=S[$];return it===void 0&&(it=new vs,S[$]=it),it.getHandSpace()};function H($){let it=w.indexOf($.inputSource);if(it===-1)return;let wt=S[it];wt!==void 0&&(wt.update($.inputSource,$.frame,c||o),wt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",Y);for(let $=0;$<S.length;$++){let it=w[$];it!==null&&(w[$]=null,S[$].disconnect(it))}L=null,z=null,g.reset();for(let $ in m)delete m[$];if(t.setRenderTarget(T),f=null,u=null,d=null,n=null,v=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",X),n.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Et=null;M.depth&&(Et=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=M.stencil?bn:Oi,Ht=M.stencil?Cs:yi);let ee={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(ee),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ze(u.textureWidth,u.textureHeight,{format:fi,type:di,depthTexture:new Vi(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let wt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,wt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ze(f.framebufferWidth,f.framebufferHeight,{format:fi,type:di,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),$t.setContext(n),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y($){for(let it=0;it<$.removed.length;it++){let wt=$.removed[it],Ht=w.indexOf(wt);Ht>=0&&(w[Ht]=null,S[Ht].disconnect(wt))}for(let it=0;it<$.added.length;it++){let wt=$.added[it],Ht=w.indexOf(wt);if(Ht===-1){for(let ee=0;ee<S.length;ee++)if(ee>=w.length){w.push(wt),Ht=ee;break}else if(w[ee]===null){w[ee]=wt,Ht=ee;break}if(Ht===-1)break}let Et=S[Ht];Et&&Et.connect(wt)}}let k=new A,J=new A;function Q($,it,wt){k.setFromMatrixPosition(it.matrixWorld),J.setFromMatrixPosition(wt.matrixWorld);let Ht=k.distanceTo(J),Et=it.projectionMatrix.elements,ee=wt.projectionMatrix.elements,He=Et[14]/(Et[10]-1),ne=Et[14]/(Et[10]+1),le=(Et[9]+1)/Et[5],_e=(Et[9]-1)/Et[5],re=(Et[8]-1)/Et[0],Ee=(ee[8]+1)/ee[0],Xe=He*re,hi=He*Ee,Re=Ht/(-re+Ee),Ne=Re*-re;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(Re),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Et[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let O=He+Re,Qe=ne+Re,pe=Xe-Ne,C=hi+(Ht-Ne),_=le*ne/Qe*O,G=_e*ne/Qe*O;$.projectionMatrix.makePerspective(pe,C,_,G,O,Qe),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function vt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let it=$.near,wt=$.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),B.near=N.near=P.near=it,B.far=N.far=P.far=wt,(L!==B.near||z!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,z=B.far),B.layers.mask=$.layers.mask|6,P.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let Ht=$.parent,Et=B.cameras;vt(B,Ht);for(let ee=0;ee<Et.length;ee++)vt(Et[ee],Ht);Et.length===2?Q(B,P,N):B.projectionMatrix.copy(P.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),St($,B,Ht)};function St($,it,wt){wt===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(wt.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ys*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function($){return m[$]};let Yt=null;function Gt($,it){if(h=it.getViewerPose(c||o),p=it,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ht=!1;wt.length!==B.cameras.length&&(B.cameras.length=0,Ht=!0);for(let ne=0;ne<wt.length;ne++){let le=wt[ne],_e=null;if(f!==null)_e=f.getViewport(le);else{let Ee=d.getViewSubImage(u,le);_e=Ee.viewport,ne===0&&(t.setRenderTargetTextures(v,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(v))}let re=D[ne];re===void 0&&(re=new ai,re.layers.enable(ne),re.viewport=new Ae,D[ne]=re),re.matrix.fromArray(le.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(le.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(_e.x,_e.y,_e.width,_e.height),ne===0&&(B.matrix.copy(re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ht===!0&&B.cameras.push(re)}let Et=n.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let ne=d.getDepthInformation(wt[0]);ne&&ne.isValid&&ne.texture&&g.init(ne,n.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let ne=0;ne<wt.length;ne++){let le=wt[ne].camera;if(le){let _e=m[le];_e||(_e=new ar,m[le]=_e);let re=d.getCameraImage(le);_e.sourceTexture=re}}}}for(let wt=0;wt<S.length;wt++){let Ht=w[wt],Et=S[wt];Ht!==null&&Et!==void 0&&Et.update(Ht,it,c||o)}Yt&&Yt($,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),p=null}let $t=new Gu;$t.setAnimationLoop(Gt),this.setAnimationLoop=function($){Yt=$},this.dispose=function(){}}},Dx=new Qt,Zu=new Xt;Zu.set(-1,0,0,0,1,0,0,0,1);function Nx(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,uc(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,M,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),d(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===ci&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===ci&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),T=M.envMap,v=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Zu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ci&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Ux(r,t,e,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;i.uniformBlockBinding(v,w)}function c(v,S){let w=n[v.id];w===void 0&&(g(v),w=h(v),n[v.id]=w,v.addEventListener("dispose",M));let R=S.program;i.updateUBOMapping(v,R);let y=t.render.frame;s[v.id]!==y&&(u(v),s[v.id]=y)}function h(v){let S=d();v.__bindingPointIndex=S;let w=r.createBuffer(),R=v.__size,y=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,R,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,w),w}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=n[v.id],w=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let y=0,E=w.length;y<E;y++){let P=w[y];if(Array.isArray(P))for(let N=0,D=P.length;N<D;N++)f(P[N],y,N,R);else f(P,y,0,R)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,w,R){if(x(v,S,w,R)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let P=0;for(let N=0;N<E.length;N++){let D=E[N],B=m(D);p(D,v.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,y,v.__data)}}function p(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function x(v,S,w,R){let y=v.value,E=S+"_"+w;if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:ArrayBuffer.isView(y)?R[E]=y.slice():R[E]=y.clone(),!0;{let P=R[E];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(v){let S=v.uniforms,w=0,R=16;for(let E=0,P=S.length;E<P;E++){let N=Array.isArray(S[E])?S[E]:[S[E]];for(let D=0,B=N.length;D<B;D++){let L=N[D],z=Array.isArray(L.value)?L.value:[L.value];for(let H=0,X=z.length;H<X;H++){let Y=z[H],k=m(Y),J=w%R,Q=J%k.boundary,vt=J+Q;w+=Q,vt!==0&&R-vt<k.storage&&(w+=R-vt),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=k.storage}}}let y=w%R;return y>0&&(w+=R-y),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){let S=v.target;S.removeEventListener("dispose",M);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function T(){for(let v in n)r.deleteBuffer(n[v]);o=[],n={},s={}}return{bind:l,update:c,dispose:T}}var Fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function Bx(){return Xi===null&&(Xi=new zn(Fx,16,16,Sn,_i),Xi.name="DFG_LUT",Xi.minFilter=ze,Xi.magFilter=ze,Xi.wrapS=zi,Xi.wrapT=zi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var Ga=class{constructor(t={}){let{canvas:e=fu(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=di}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,g=new Set([ra,sa,na]),m=new Set([di,yi,Rs,Cs,ta,ea]),M=new Uint32Array(4),T=new Int32Array(4),v=new A,S=null,w=null,R=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,D=null,B=null,L=null,z=null;this._outputColorSpace=oi;let H=0,X=0,Y=null,k=-1,J=null,Q=new Ae,vt=new Ae,St=null,Yt=new lt(0),Gt=0,$t=e.width,$=e.height,it=1,wt=null,Ht=null,Et=new Ae(0,0,$t,$),ee=new Ae(0,0,$t,$),He=!1,ne=new bs,le=!1,_e=!1,re=new Qt,Ee=new A,Xe=new Ae,hi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ne(){return Y===null?it:1}let O=i;function Qe(b,U){return e.getContext(b,U)}let pe,C,_,G,q,K,rt,ct,j,et,ht,Ut,mt,ut,Ft,Ot,Zt,F,dt,tt,ft,_t,nt;try{let b={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Ti,!1),O===null){let U="webgl2";if(O=Qe(U,b),O===null)throw Qe(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(b){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Ti,!1),Vt("WebGLRenderer: "+b.message),b}function Bt(){pe=new W0(O),pe.init(),ft=new Ix(O,pe),C=new N0(O,pe,t,ft),_=new Rx(O,pe),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),B=O.createFramebuffer(),L=O.createFramebuffer(),z=O.createFramebuffer(),G=new Y0(O),q=new px,K=new Cx(O,pe,_,q,C,ft,G),rt=new V0(P),ct=new $f(O),_t=new L0(O,ct),j=new X0(O,ct,G,_t),et=new $0(O,j,ct,_t,G),F=new Z0(O,C,K),Ft=new U0(q),ht=new fx(P,rt,pe,C,_t,Ft),Ut=new Nx(P,q),mt=new gx,ut=new bx(pe),Zt=new P0(P,rt,_,et,p,l),Ot=new Ax(P,et,C),nt=new Ux(O,G,C,_),dt=new D0(O,pe,G),tt=new q0(O,pe,G),G.programs=ht.programs,P.capabilities=C,P.extensions=pe,P.properties=q,P.renderLists=mt,P.shadowMap=Ot,P.state=_,P.info=G}x!==di&&(E=new K0(x,e.width,e.height,a,n,s));let Pt=new Nc(P,O);this.xr=Pt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(b){b!==void 0&&(it=b,this.setSize($t,$,!1))},this.getSize=function(b){return b.set($t,$)},this.setSize=function(b,U,Z=!0){if(Pt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=b,$=U,e.width=Math.floor(b*it),e.height=Math.floor(U*it),Z===!0&&(e.style.width=b+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set($t*it,$*it).floor()},this.setDrawingBufferSize=function(b,U,Z){$t=b,$=U,it=Z,e.width=Math.floor(b*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===di){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,U,Z,V){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,U,Z,V),_.viewport(Q.copy(Et).multiplyScalar(it).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,U,Z,V){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,U,Z,V),_.scissor(vt.copy(ee).multiplyScalar(it).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(b){_.setScissorTest(He=b)},this.setOpaqueSort=function(b){wt=b},this.setTransparentSort=function(b){Ht=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,Z=!0){let V=0;if(b){let W=!1;if(Y!==null){let yt=Y.texture.format;W=g.has(yt)}if(W){let yt=Y.texture.type,Tt=m.has(yt),xt=Zt.getClearColor(),Rt=Zt.getClearAlpha(),Dt=xt.r,Jt=xt.g,se=xt.b;Tt?(M[0]=Dt,M[1]=Jt,M[2]=se,M[3]=Rt,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=Dt,T[1]=Jt,T[2]=se,T[3]=Rt,O.clearBufferiv(O.COLOR,0,T))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Ti,!1),Zt.dispose(),mt.dispose(),ut.dispose(),q.dispose(),rt.dispose(),et.dispose(),_t.dispose(),nt.dispose(),ht.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Kc),Pt.removeEventListener("sessionend",jc),In.stop()};function ve(b){b.preventDefault(),ac("WebGLRenderer: Context Lost."),N=!0}function ce(){ac("WebGLRenderer: Context Restored."),N=!1;let b=G.autoReset,U=Ot.enabled,Z=Ot.autoUpdate,V=Ot.needsUpdate,W=Ot.type;Bt(),G.autoReset=b,Ot.enabled=U,Ot.autoUpdate=Z,Ot.needsUpdate=V,Ot.type=W}function Ti(b){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ui(b){let U=b.target;U.removeEventListener("dispose",Ui),Id(U)}function Id(b){Pd(b),q.remove(b)}function Pd(b){let U=q.get(b).programs;U!==void 0&&(U.forEach(function(Z){ht.releaseProgram(Z)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,Z,V,W,yt){U===null&&(U=hi);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,xt=Nd(b,U,Z,V,W);_.setMaterial(V,Tt);let Rt=Z.index,Dt=1;if(V.wireframe===!0){if(Rt=j.getWireframeAttribute(Z),Rt===void 0)return;Dt=2}let Jt=Z.drawRange,se=Z.attributes.position,Ct=Jt.start*Dt,he=(Jt.start+Jt.count)*Dt;yt!==null&&(Ct=Math.max(Ct,yt.start*Dt),he=Math.min(he,(yt.start+yt.count)*Dt)),Rt!==null?(Ct=Math.max(Ct,0),he=Math.min(he,Rt.count)):se!=null&&(Ct=Math.max(Ct,0),he=Math.min(he,se.count));let Ue=he-Ct;if(Ue<0||Ue===1/0)return;_t.setup(W,V,xt,Z,Rt);let Se,ye=dt;if(Rt!==null&&(Se=ct.get(Rt),ye=tt,ye.setIndex(Se)),W.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*Ne()),ye.setMode(O.LINES)):ye.setMode(O.TRIANGLES);else if(W.isLine){let ti=V.linewidth;ti===void 0&&(ti=1),_.setLineWidth(ti*Ne()),W.isLineSegments?ye.setMode(O.LINES):W.isLineLoop?ye.setMode(O.LINE_LOOP):ye.setMode(O.LINE_STRIP)}else W.isPoints?ye.setMode(O.POINTS):W.isSprite&&ye.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ti=W._multiDrawStarts,bt=W._multiDrawCounts,si=W._multiDrawCount,ae=Rt?ct.get(Rt).bytesPerElement:1,Mi=q.get(V).currentProgram.getUniforms();for(let Fi=0;Fi<si;Fi++)Mi.setValue(O,"_gl_DrawID",Fi),ye.render(ti[Fi]/ae,bt[Fi])}else if(W.isInstancedMesh)ye.renderInstances(Ct,Ue,W.count);else if(Z.isInstancedBufferGeometry){let ti=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,bt=Math.min(Z.instanceCount,ti);ye.renderInstances(Ct,Ue,bt)}else ye.render(Ct,Ue)};function Jc(b,U,Z,V){D!==null&&b.isNodeMaterial&&D.setObject(V,b),le===!0&&Ft.setState(b,Z,!1),b.transparent===!0&&b.side===xe&&b.forceSinglePass===!1?(b.side=ci,b.needsUpdate=!0,zr(b,U,V),b.side=_n,b.needsUpdate=!0,zr(b,U,V),b.side=xe):zr(b,U,V)}this.compile=function(b,U,Z=null){Z===null&&(Z=b),D!==null&&D.renderStart(b,U,Z),w=ut.get(Z),w.init(U),y.push(w),Z.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),b!==Z&&b.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),_e=this.localClippingEnabled,le=Ft.init(this.clippingPlanes,_e),le===!0&&Ft.setGlobalState(this.clippingPlanes,U),D!==null&&Ot.render(w.state.shadowsArray,Z,U);let V=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let yt=W.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){let xt=yt[Tt];Jc(xt,Z,U,W),V.add(xt)}else Jc(yt,Z,U,W),V.add(yt)}),w=y.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(b,U,Z=null){let V=this.compile(b,U,Z);return new Promise(W=>{function yt(){if(V.forEach(function(Tt){let Rt=q.get(Tt).currentProgram;(Rt===void 0||Rt.isReady())&&V.delete(Tt)}),V.size===0){W(b);return}setTimeout(yt,10)}pe.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let rl=null;function Ld(b){rl&&rl(b)}function Kc(){In.stop()}function jc(){In.start()}let In=new Gu;In.setAnimationLoop(Ld),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(b){rl=b,Pt.setAnimationLoop(b),b===null?In.stop():In.start()},Pt.addEventListener("sessionstart",Kc),Pt.addEventListener("sessionend",jc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(b,U);let Z=Pt.enabled===!0&&Pt.isPresenting===!0,V=E!==null&&(Y===null||Z)&&E.begin(P,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(U),U=Pt.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,U,Y),w=ut.get(b,y.length),w.init(U),w.state.textureUnits=K.getTextureUnits(),y.push(w),re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(re,Pi,U.reversedDepth),_e=this.localClippingEnabled,le=Ft.init(this.clippingPlanes,_e),S=mt.get(b,R.length),S.init(),R.push(S),Pt.enabled===!0&&Pt.isPresenting===!0){let Tt=P.xr.getDepthSensingMesh();Tt!==null&&ol(Tt,U,-1/0,P.sortObjects)}ol(b,U,0,P.sortObjects),S.finish(),D!==null&&D.updateLights(w.state.lightsArray),P.sortObjects===!0&&S.sort(wt,Ht),Re=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Re&&Zt.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Ft.beginShadows();let W=w.state.shadowsArray;if(Ot.render(W,b,U),le===!0&&Ft.endShadows(),(V&&E.hasRenderPass())===!1){let Tt=S.opaque,xt=S.transmissive;if(w.setupLights(),U.isArrayCamera){let Rt=U.cameras;if(xt.length>0)for(let Dt=0,Jt=Rt.length;Dt<Jt;Dt++){let se=Rt[Dt];th(Tt,xt,b,se)}Re&&Zt.render(b);for(let Dt=0,Jt=Rt.length;Dt<Jt;Dt++){let se=Rt[Dt];Qc(S,b,se,se.viewport)}}else xt.length>0&&th(Tt,xt,b,U),Re&&Zt.render(b),Qc(S,b,U)}Y!==null&&X===0&&(K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y)),V&&E.end(P),b.isScene===!0&&b.onAfterRender(P,b,U),_t.resetDefaultState(),k=-1,J=null,y.pop(),y.length>0?(w=y[y.length-1],K.setTextureUnits(w.state.textureUnits),le===!0&&Ft.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,D!==null&&D.renderEnd()};function ol(b,U,Z,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(ne)){V&&Xe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);let Tt=et.update(b),xt=b.material;xt.visible&&S.push(b,Tt,xt,Z,Xe.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(ne))){let Tt=et.update(b),xt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xe.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Xe.copy(Tt.boundingSphere.center)),Xe.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(xt)){let Rt=Tt.groups;for(let Dt=0,Jt=Rt.length;Dt<Jt;Dt++){let se=Rt[Dt],Ct=xt[se.materialIndex];Ct&&Ct.visible&&S.push(b,Tt,Ct,Z,Xe.z,se,U)}}else xt.visible&&S.push(b,Tt,xt,Z,Xe.z,null,U)}}let yt=b.children;for(let Tt=0,xt=yt.length;Tt<xt;Tt++)ol(yt[Tt],U,Z,V)}function Qc(b,U,Z,V){let{opaque:W,transmissive:yt,transparent:Tt}=b;w.setupLightsView(Z),le===!0&&Ft.setGlobalState(P.clippingPlanes,Z),V&&_.viewport(Q.copy(V)),W.length>0&&Br(W,U,Z),yt.length>0&&Br(yt,U,Z),Tt.length>0&&Br(Tt,U,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function th(b,U,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Ct=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Ze(1,1,{generateMipmaps:!0,type:Ct?_i:di,minFilter:Mn,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let yt=w.state.transmissionRenderTarget[V.id],Tt=V.viewport||Q;yt.setSize(Tt.z*P.transmissionResolutionScale,Tt.w*P.transmissionResolutionScale);let xt=P.getRenderTarget(),Rt=P.getActiveCubeFace(),Dt=P.getActiveMipmapLevel();P.setRenderTarget(yt),P.getClearColor(Yt),Gt=P.getClearAlpha(),Gt<1&&P.setClearColor(16777215,.5),P.clear(),Re&&Zt.render(Z);let Jt=P.toneMapping;P.toneMapping=Di;let se=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),le===!0&&Ft.setGlobalState(P.clippingPlanes,V),Br(b,Z,V),K.updateMultisampleRenderTarget(yt),K.updateRenderTargetMipmap(yt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let he=0,Ue=U.length;he<Ue;he++){let Se=U[he],{object:ye,geometry:ti,material:bt,group:si}=Se;if(bt.side===xe&&ye.layers.test(V.layers)){let ae=bt.side;bt.side=ci,bt.needsUpdate=!0,eh(ye,Z,V,ti,bt,si),bt.side=ae,bt.needsUpdate=!0,Ct=!0}}Ct===!0&&(K.updateMultisampleRenderTarget(yt),K.updateRenderTargetMipmap(yt))}P.setRenderTarget(xt,Rt,Dt),P.setClearColor(Yt,Gt),se!==void 0&&(V.viewport=se),P.toneMapping=Jt}function Br(b,U,Z){let V=U.isScene===!0?U.overrideMaterial:null;for(let W=0,yt=b.length;W<yt;W++){let Tt=b[W],{object:xt,geometry:Rt,group:Dt}=Tt,Jt=Tt.material;Jt.allowOverride===!0&&V!==null&&(Jt=V),xt.layers.test(Z.layers)&&eh(xt,U,Z,Rt,Jt,Dt)}}function eh(b,U,Z,V,W,yt){D!==null&&W.isNodeMaterial&&D.setObject(b,W),b.onBeforeRender(P,U,Z,V,W,yt),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(P,U,Z,V,b,yt),W.transparent===!0&&W.side===xe&&W.forceSinglePass===!1?(W.side=ci,W.needsUpdate=!0,P.renderBufferDirect(Z,U,V,W,b,yt),W.side=_n,W.needsUpdate=!0,P.renderBufferDirect(Z,U,V,W,b,yt),W.side=xe):P.renderBufferDirect(Z,U,V,W,b,yt),b.onAfterRender(P,U,Z,V,W,yt)}function zr(b,U,Z){U.isScene!==!0&&(U=hi);let V=q.get(b),W=w.state.lights,yt=w.state.shadowsArray,Tt=W.state.version,xt=ht.getParameters(b,W.state,yt,U,Z,w.state.lightProbeGridArray),Rt=ht.getProgramCacheKey(xt),Dt=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let Jt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=rt.get(b.envMap||V.environment,Jt),V.envMapRotation=V.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Ui),Dt=new Map,V.programs=Dt);let se=Dt.get(Rt);if(se!==void 0){if(V.currentProgram===se&&V.lightsStateVersion===Tt)return nh(b,xt),se}else xt.uniforms=ht.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,Z,xt),b.onBeforeCompile(xt,P),se=ht.acquireProgram(xt,Rt),Dt.set(Rt,se),V.uniforms=xt.uniforms;let Ct=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=Ft.uniform),nh(b,xt),V.needsLights=Fd(b),V.lightsStateVersion=Tt,V.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.sunLights.value=W.state.sun,Ct.sunLightShadows.value=W.state.sunShadow,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.sunShadowMatrix.value=W.state.sunShadowMatrix,Ct.sunShadowCascade.value=W.state.sunShadowCascade,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=se,V.uniformsList=null,se}function ih(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ns.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function nh(b,U){let Z=q.get(b);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Dd(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Z=0,V=b.length;Z<V;Z++){let W=b[Z];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Nd(b,U,Z,V,W){U.isScene!==!0&&(U=hi),K.resetTextureUnits();let yt=U.fog,Tt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,xt=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:oe.workingColorSpace,Rt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Dt=rt.get(V.envMap||Tt,Rt),Jt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,se=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ct=!!Z.morphAttributes.position,he=!!Z.morphAttributes.normal,Ue=!!Z.morphAttributes.color,Se=Di;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Se=P.toneMapping);let ye=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ti=ye!==void 0?ye.length:0,bt=q.get(V),si=w.state.lights;if(le===!0&&(_e===!0||b!==J)){let Me=b===J&&V.id===k;Ft.setState(V,b,Me)}let ae=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==si.state.version||bt.outputColorSpace!==xt||W.isBatchedMesh&&bt.batching===!1||!W.isBatchedMesh&&bt.batching===!0||W.isBatchedMesh&&bt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&bt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&bt.instancing===!1||!W.isInstancedMesh&&bt.instancing===!0||W.isSkinnedMesh&&bt.skinning===!1||!W.isSkinnedMesh&&bt.skinning===!0||W.isInstancedMesh&&bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&bt.instancingMorph===!1&&W.morphTexture!==null||bt.envMap!==Dt||V.fog===!0&&bt.fog!==yt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Ft.numPlanes||bt.numIntersection!==Ft.numIntersection)||bt.vertexAlphas!==Jt||bt.vertexTangents!==se||bt.morphTargets!==Ct||bt.morphNormals!==he||bt.morphColors!==Ue||bt.toneMapping!==Se||bt.morphTargetsCount!==ti||!!bt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,bt.__version=V.version);let Mi=bt.currentProgram;ae===!0&&(Mi=zr(V,U,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Mi,bt));let Fi=!1,on=!1,Jn=!1,ge=Mi.getUniforms(),De=bt.uniforms;if(_.useProgram(Mi.program)&&(Fi=!0,on=!0,Jn=!0),V.id!==k&&(k=V.id,on=!0),bt.needsLights){let Me=Dd(w.state.lightProbeGridArray,W);bt.lightProbeGrid!==Me&&(bt.lightProbeGrid=Me,on=!0)}if(Fi||J!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ge.setValue(O,"projectionMatrix",b.projectionMatrix),ge.setValue(O,"viewMatrix",b.matrixWorldInverse);let ln=ge.map.cameraPosition;ln!==void 0&&ln.setValue(O,Ee.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ge.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,on=!0,Jn=!0)}if(bt.needsLights&&(si.state.sunShadowMap.length>0&&ge.setValue(O,"sunShadowMap",si.state.sunShadowMap,K),si.state.directionalShadowMap.length>0&&ge.setValue(O,"directionalShadowMap",si.state.directionalShadowMap,K),si.state.spotShadowMap.length>0&&ge.setValue(O,"spotShadowMap",si.state.spotShadowMap,K),si.state.pointShadowMap.length>0&&ge.setValue(O,"pointShadowMap",si.state.pointShadowMap,K)),W.isSkinnedMesh){ge.setOptional(O,W,"bindMatrix"),ge.setOptional(O,W,"bindMatrixInverse");let Me=W.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ge.setValue(O,"boneTexture",Me.boneTexture,K))}W.isBatchedMesh&&(ge.setOptional(O,W,"batchingTexture"),ge.setValue(O,"batchingTexture",W._matricesTexture,K),ge.setOptional(O,W,"batchingIdTexture"),ge.setValue(O,"batchingIdTexture",W._indirectTexture,K),ge.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ge.setValue(O,"batchingColorTexture",W._colorsTexture,K));let an=Z.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&F.update(W,Z,Mi),(on||bt.receiveShadow!==W.receiveShadow)&&(bt.receiveShadow=W.receiveShadow,ge.setValue(O,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(De.envMapIntensity.value=U.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Bx()),on){if(ge.setValue(O,"toneMappingExposure",P.toneMappingExposure),bt.needsLights&&Ud(De,Jn),yt&&V.fog===!0&&Ut.refreshFogUniforms(De,yt),Ut.refreshMaterialUniforms(De,V,it,$,w.state.transmissionRenderTarget[b.id]),bt.needsLights&&bt.lightProbeGrid){let Me=bt.lightProbeGrid;De.probesSH.value=Me.texture,De.probesMin.value.copy(Me.boundingBox.min),De.probesMax.value.copy(Me.boundingBox.max),De.probesResolution.value.copy(Me.resolution)}Ns.upload(O,ih(bt),De,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ns.upload(O,ih(bt),De,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ge.setValue(O,"center",W.center),ge.setValue(O,"modelViewMatrix",W.modelViewMatrix),ge.setValue(O,"normalMatrix",W.normalMatrix),ge.setValue(O,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Me=V.uniformsGroups;for(let ln=0,Kn=Me.length;ln<Kn;ln++){let rh=Me[ln];nt.update(rh,Mi),nt.bind(rh,Mi)}}return Mi}function Ud(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Fd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,U,Z){let V=q.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=U,q.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let Z=q.get(b);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,Z=0){Y=b,H=U,X=Z;let V=null,W=!1,yt=!1;if(b){let xt=q.get(b);if(xt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,xt.__webglFramebuffer),Q.copy(b.viewport),vt.copy(b.scissor),St=b.scissorTest,_.viewport(Q),_.scissor(vt),_.setScissorTest(St),k=-1;return}else if(xt.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(xt.__hasExternalTextures)K.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Jt=b.depthTexture;if(xt.__boundDepthTexture!==Jt){if(Jt!==null&&q.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(yt=!0);let Dt=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?V=Dt[U][Z]:V=Dt[U],W=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?V=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?V=Dt[Z]:V=Dt,Q.copy(b.viewport),vt.copy(b.scissor),St=b.scissorTest}else Q.copy(Et).multiplyScalar(it).floor(),vt.copy(ee).multiplyScalar(it).floor(),St=He;if(Z!==0&&(V=B),_.bindFramebuffer(O.FRAMEBUFFER,V)&&_.drawBuffers(b,V),_.viewport(Q),_.scissor(vt),_.setScissorTest(St),W){let xt=q.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,Z)}else if(yt){let xt=U;for(let Rt=0;Rt<b.textures.length;Rt++){let Dt=q.get(b.textures[Rt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,Z,xt)}}else if(b!==null&&Z!==0){let xt=q.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xt.__webglTexture,Z)}k=-1};function sh(b){let U=q.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=C.textureFormatReadable(b.format),U.__typeReadable=C.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,Z,V,W,yt,Tt,xt=0){if(!(b&&b.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){_.bindFramebuffer(O.FRAMEBUFFER,Rt);try{let Dt=b.textures[xt],Jt=Dt.format,se=Dt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xt);let Ct=sh(Dt);if(Ct.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&Z>=0&&Z<=b.height-W&&O.readPixels(U,Z,V,W,ft.convert(Jt),ft.convert(se),yt)}finally{let Dt=Y!==null?q.get(Y).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,U,Z,V,W,yt,Tt,xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(U>=0&&U<=b.width-V&&Z>=0&&Z<=b.height-W){_.bindFramebuffer(O.FRAMEBUFFER,Rt);let Dt=b.textures[xt],Jt=Dt.format,se=Dt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xt);let Ct=sh(Dt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,he),O.bufferData(O.PIXEL_PACK_BUFFER,yt.byteLength,O.STREAM_READ),O.readPixels(U,Z,V,W,ft.convert(Jt),ft.convert(se),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ue=Y!==null?q.get(Y).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Ue);let Se=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mu(O,Se,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,he),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,yt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(he),O.deleteSync(Se),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,Z=0){let V=Math.pow(2,-Z),W=Math.floor(b.image.width*V),yt=Math.floor(b.image.height*V),Tt=U!==null?U.x:0,xt=U!==null?U.y:0;K.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Tt,xt,W,yt),_.unbindTexture()},this.copyTextureToTexture=function(b,U,Z=null,V=null,W=0,yt=0){let Tt,xt,Rt,Dt,Jt,se,Ct,he,Ue,Se=b.isCompressedTexture?b.mipmaps[yt]:b.image;if(Z!==null)Tt=Z.max.x-Z.min.x,xt=Z.max.y-Z.min.y,Rt=Z.isBox3?Z.max.z-Z.min.z:1,Dt=Z.min.x,Jt=Z.min.y,se=Z.isBox3?Z.min.z:0;else{let De=Math.pow(2,-W);Tt=Math.floor(Se.width*De),xt=Math.floor(Se.height*De),b.isDataArrayTexture?Rt=Se.depth:b.isData3DTexture?Rt=Math.floor(Se.depth*De):Rt=1,Dt=0,Jt=0,se=0}V!==null?(Ct=V.x,he=V.y,Ue=V.z):(Ct=0,he=0,Ue=0);let ye=ft.convert(U.format),ti=ft.convert(U.type),bt;U.isData3DTexture?(K.setTexture3D(U,0),bt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),bt=O.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),bt=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let si=_.getParameter(O.UNPACK_ROW_LENGTH),ae=_.getParameter(O.UNPACK_IMAGE_HEIGHT),Mi=_.getParameter(O.UNPACK_SKIP_PIXELS),Fi=_.getParameter(O.UNPACK_SKIP_ROWS),on=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,Se.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Se.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Dt),_.pixelStorei(O.UNPACK_SKIP_ROWS,Jt),_.pixelStorei(O.UNPACK_SKIP_IMAGES,se);let Jn=b.isDataArrayTexture||b.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let De=q.get(b),an=q.get(U),Me=q.get(De.__renderTarget),ln=q.get(an.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,Me.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let Kn=0;Kn<Rt;Kn++)Jn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(b).__webglTexture,W,se+Kn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,q.get(U).__webglTexture,yt,Ue+Kn)),O.blitFramebuffer(Dt,Jt,Tt,xt,Ct,he,Tt,xt,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||q.has(b)){let De=q.get(b),an=q.get(U);_.bindFramebuffer(O.READ_FRAMEBUFFER,L),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Me=0;Me<Rt;Me++)Jn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,De.__webglTexture,W,se+Me):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,De.__webglTexture,W),ge?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,an.__webglTexture,yt,Ue+Me):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,an.__webglTexture,yt),W!==0?O.blitFramebuffer(Dt,Jt,Tt,xt,Ct,he,Tt,xt,O.COLOR_BUFFER_BIT,O.NEAREST):ge?O.copyTexSubImage3D(bt,yt,Ct,he,Ue+Me,Dt,Jt,Tt,xt):O.copyTexSubImage2D(bt,yt,Ct,he,Dt,Jt,Tt,xt);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ge?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(bt,yt,Ct,he,Ue,Tt,xt,Rt,ye,ti,Se.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,yt,Ct,he,Ue,Tt,xt,Rt,ye,Se.data):O.texSubImage3D(bt,yt,Ct,he,Ue,Tt,xt,Rt,ye,ti,Se):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,yt,Ct,he,Tt,xt,ye,ti,Se.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,yt,Ct,he,Se.width,Se.height,ye,Se.data):O.texSubImage2D(O.TEXTURE_2D,yt,Ct,he,Tt,xt,ye,ti,Se);_.pixelStorei(O.UNPACK_ROW_LENGTH,si),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ae),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Mi),_.pixelStorei(O.UNPACK_SKIP_ROWS,Fi),_.pixelStorei(O.UNPACK_SKIP_IMAGES,on),yt===0&&U.generateMipmaps&&O.generateMipmap(bt),_.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){H=0,X=0,Y=null,_.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var Pe=(r,t,e)=>r<t?t:r>e?e:r,It=(r,t,e)=>r+(t-r)*e,Zn=(r,t,e,i)=>It(r,t,1-Math.exp(-e*i)),Fs=r=>r*r*(3-2*r),I=(r=0,t=1)=>r+Math.random()*(t-r);function ke(r){return function(){r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wn(r,t){let e=t-r;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function En(r,t,e,i){return r+wn(r,t)*(1-Math.exp(-e*i))}function Ke(r,t){let e=new Uint8ClampedArray(r*t*4),i=(n,s)=>(n%s+s)%s;return{w:r,h:t,data:e,set(n,s,o,a=255){n=i(Math.round(n),r),s=i(Math.round(s),t);let l=(s*r+n)*4;e[l]=o[0],e[l+1]=o[1],e[l+2]=o[2],e[l+3]=a},get(n,s){n=i(Math.round(n),r),s=i(Math.round(s),t);let o=(s*r+n)*4;return[e[o],e[o+1],e[o+2]]},rect(n,s,o,a,l){for(let c=0;c<o;c++)for(let h=0;h<a;h++)this.set(n+c,s+h,l)}}}function je(r,{repeat:t=!0,linear:e=!1}={}){let i=document.createElement("canvas");return i.width=r.w,i.height=r.h,i.getContext("2d").putImageData(new ImageData(r.data,r.w,r.h),0,0),$u(i,{repeat:t,linear:e})}function $u(r,{repeat:t=!0,linear:e=!1}={}){let i=new On(r);return i.magFilter=e?ze:de,i.minFilter=e?ze:de,i.generateMipmaps=!1,i.colorSpace=e?Ni:oi,t&&(i.wrapS=i.wrapT=ms),i}var Je=(r,t)=>[r[0]*t,r[1]*t,r[2]*t],Le=(r,t)=>[r[0]+t,r[1]+t,r[2]+t],zx=(r,t,e)=>[r[0]+(t[0]-r[0])*e,r[1]+(t[1]-r[1])*e,r[2]+(t[2]-r[2])*e],Uc=new Map;function Ye(r,t){return Uc.has(r)||Uc.set(r,t()),Uc.get(r)}function Fc(r=7,t=[176,168,148],e=15){return Ye("floor"+r+t+e,()=>{let n=Ke(64,64),s=ke(r),o=[],a=Math.round(Math.sqrt(e));for(let h=0;h<a;h++)for(let d=0;d<a;d++){let u=(s()-.5)*30,f=(s()-.5)*12;o.push({x:(h+.2+s()*.6)/a*64,y:(d+.2+s()*.6)/a*64,sx:.75+s()*.6,sy:.75+s()*.6,c:[t[0]+u+f,t[1]+u,t[2]+u-f],moss:s()<.15})}let l=(h,d,u)=>{let f=Math.abs(d-h.x),p=Math.abs(u-h.y);return f=Math.min(f,64-f)*h.sx,p=Math.min(p,64-p)*h.sy,Math.max(f,p)*.75+(f+p)*.25},c=(h,d)=>{let u=null,f=1e9,p=1e9;for(let x of o){let g=l(x,h,d);g<f?(p=f,f=g,u=x):g<p&&(p=g)}return{b:u,gap:p-f}};for(let h=0;h<64;h++)for(let d=0;d<64;d++){let{b:u,gap:f}=c(h,d),p=u.c,x=s();x<.07?p=Le(p,-12):x<.12&&(p=Le(p,8)),f<1.1?(p=Je(u.c,.66),u.moss&&s()<.5&&(p=[112,124,86])):f<2.2&&(p=c(h,d-2).b!==u||c(h-2,d).b!==u?Le(u.c,12):Je(u.c,.88)),n.set(h,d,p)}return je(n)})}function Ju(){return Ye("path",()=>{let r=Ke(64,64),t=ke(31),e=[158,156,148];for(let i=0;i<4;i++){let n=i%2?8:0;for(let s=0;s<4;s++){let o=(t()-.5)*20,a=Le(e,o);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=a,d=t();d<.06?h=Le(a,-12):d<.1&&(h=Le(a,8)),l===15||c===15?h=Je(a,.7):(l===0||c===0)&&(h=Le(a,10)),r.set(s*16+l+n,i*16+c,h)}}}return je(r)})}function Bc(r=[168,160,142]){return Ye("block"+r,()=>{let t=Ke(32,32),e=ke(5);for(let i=0;i<4;i++){let n=i%2?8:0;for(let s=0;s<2;s++){let o=Le(r,(e()-.5)*22);for(let a=0;a<16;a++)for(let l=0;l<8;l++){let c=o;e()<.08&&(c=Le(o,-10)),a===15||l===7?c=Je(o,.55):l===0&&(c=Le(o,16)),t.set(s*16+a+n,i*8+l,c)}}}return je(t)})}function Ku(r=[92,132,64]){return Ye("grass"+r,()=>{let t=Ke(32,32),e=ke(11);for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=e(),o=Le(r,(e()-.5)*14);s<.12?o=Je(r,.78):s<.2&&(o=Je(r,1.14)),t.set(i,n,o)}for(let i=0;i<7;i++){let n=Math.floor(e()*32),s=Math.floor(e()*32),o=e()<.5?[236,230,200]:[232,200,92];t.set(n,s,o)}return je(t)})}function ju(){return Ye("dirt",()=>{let r=Ke(32,32),t=ke(13),e=[96,104,70];for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=t(),o=Le(e,(t()-.5)*12);s<.15?o=[88,86,66]:s<.22&&(o=Je(e,1.15)),r.set(i,n,o)}return je(r)})}function zc(r=[150,44,34]){return Ye("wood"+r,()=>{let t=Ke(16,16),e=ke(17);for(let i=0;i<16;i++){let n=(e()-.5)*16;for(let s=0;s<16;s++){let o=Le(r,n+(e()-.5)*6);i%5===0&&e()<.6&&(o=Je(r,.84)),t.set(i,s,o)}}return je(t)})}function Qu(){return zc([92,60,40])}function td(r=[84,90,98]){return Ye("roof"+r,()=>{let t=Ke(32,32),e=ke(19);for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=i%4,o;s===0?o=Je(r,.62):s===1?o=Je(r,1):s===2?o=Je(r,1.22):o=Je(r,1.06),n%8===7?o=Je(o,.78):n%8===0&&s!==0&&(o=Je(o,1.08)),o=Le(o,(e()-.5)*6),t.set(i,n,o)}return je(t)})}function Xa(){return Ye("dancheong",()=>{let r=Ke(64,16),t=[46,122,98],e=[34,92,76],i=[44,82,150],n=[176,52,44],s=[236,228,206],o=[226,182,64];for(let a=0;a<64;a++)for(let l=0;l<16;l++){let c=t;l===0||l===15?c=n:l===1||l===14?c=s:(l===2||l===13)&&(c=e),r.set(a,l,c)}for(let a=0;a<4;a++){let l=a*16+8,c=8;for(let h=-5;h<=5;h++)for(let d=-4;d<=4;d++){let u=Math.abs(h)/5+Math.abs(d)/4;u<=1&&r.set(l+h,c+d,u>.75?s:u>.5?i:u>.25?n:o)}for(let h=3;h<=12;h++)r.set(a*16,h,s),r.set(a*16+1,h,i)}return je(r)})}function Oc(r=!1){return Ye("lattice"+r,()=>{let t=Ke(32,48),e=r?[0,0,0]:[44,104,84],i=r?[0,0,0]:[30,70,58],n=r?[255,214,150]:[226,216,186],s=r?[220,170,110]:[204,192,160];for(let o=0;o<32;o++)for(let a=0;a<48;a++){let l=n;a>36&&(l=r?[0,0,0]:[120,60,44]),a===36&&(l=i);let c=o%5,h=a%6;a<36&&(c===0||h===0)&&(l=e),a<36&&c===4&&(l=zx(l,s,r?.3:.5)),(o<2||o>29||a<2||a>45)&&(l=i),t.set(o,a,l)}return je(t,{repeat:!1})})}function ed(){return Ye("plaster",()=>{let r=Ke(32,32),t=ke(23);for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=Le([226,220,204],(t()-.5)*8);i>24&&(n=Le([150,140,124],(t()-.5)*12)),(i===24||i===2||e===0||e===31)&&(n=[156,52,40]),r.set(e,i,n)}return je(r)})}function id(r){return Ye("banner"+r,()=>{let i=document.createElement("canvas");i.width=32,i.height=40;let n=i.getContext("2d"),s,o,a,l,c;if(r==="red"?(s="#b8302a",o="#e8b030",a="#f0c040",l="\u4EE4",c="#7a1c18"):r==="white"?(s="#ece6d4",o="#e0a828",a="#1a1a1a",l="\u9F8D",c="#ece6d4"):(s="#23305e",o="#c8342c",a="#e8e0d0",l="\u6B66",c="#23305e"),n.fillStyle=o,n.fillRect(0,0,32,40),n.fillStyle=s,n.fillRect(3,3,26,34),r==="white"){n.fillStyle="#c03028";for(let h=0;h<40;h+=4)n.fillRect(29,h,3,2),n.fillRect(0,h+2,2,2);for(let h=0;h<32;h+=4)n.fillRect(h,37,2,3)}else r==="red"&&(n.fillStyle=c,n.fillRect(6,6,20,28),n.fillStyle=o,n.fillRect(6,6,20,1),n.fillRect(6,33,20,1),n.fillRect(6,6,1,28),n.fillRect(25,6,1,28));return n.fillStyle=a,n.font='bold 20px "Noto Serif CJK KR","Noto Sans CJK KR","Malgun Gothic","Apple SD Gothic Neo",serif',n.textAlign="center",n.textBaseline="middle",n.fillText(l,32/2,40/2+1),Ox(n,32,40,[s,o,a,c,"#c03028"]),$u(i,{repeat:!1})})}function Ox(r,t,e,i){let n=i.map(a=>[parseInt(a.slice(1,3),16),parseInt(a.slice(3,5),16),parseInt(a.slice(5,7),16)]),s=r.getImageData(0,0,t,e),o=s.data;for(let a=0;a<o.length;a+=4){let l=n[0],c=1e9;for(let h of n){let d=(o[a]-h[0])**2+(o[a+1]-h[1])**2+(o[a+2]-h[2])**2;d<c&&(c=d,l=h)}o[a]=l[0],o[a+1]=l[1],o[a+2]=l[2],o[a+3]=255}r.putImageData(s,0,0)}function nd(){return Ye("drumside",()=>{let r=Ke(64,32),t=ke(29),e=[40,92,150];for(let i=0;i<64;i++)for(let n=0;n<32;n++){let s=Le(e,(t()-.5)*8),o=Math.sin(i*.4+Math.sin(n*.35)*2.2)+Math.sin(n*.5+i*.12);o>1.35?s=[196,62,50]:o>1.1?s=[236,220,180]:o<-1.45&&(s=[70,150,110]),(n<3||n>28)&&(s=[180,48,40]),(n===3||n===28)&&(s=[226,186,70]),r.set(i,n,s)}return je(r)})}function sd(){return Ye("drumface",()=>{let r=Ke(32,32),t=[[196,52,44],[40,80,160],[228,186,60]];for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=e-15.5,s=i-15.5,o=Math.hypot(n,s),a=[222,206,170];if(o>14.5)a=[120,70,40];else if(o>13.5)a=[226,186,70];else if(o<8){let l=Math.atan2(s,n)+o*.22,c=Math.floor((l/(Math.PI*2)%1+1)%1*3);a=t[c]}r.set(e,i,a)}return je(r,{repeat:!1})})}function rd(){return Ye("medallion",()=>{let r=Ke(64,64),t=ke(37),e=[170,164,148];for(let i=0;i<64;i++)for(let n=0;n<64;n++){let s=i-31.5,o=n-31.5,a=Le(e,(t()-.5)*10),l=Math.abs(s)+Math.abs(o),c=Math.max(Math.abs(s),Math.abs(o)),h=Math.hypot(s,o),d=Math.atan2(o,s),u=Je(e,.68),f=Le(e,18);c>30?a=u:c>29&&(a=f),Math.abs(l-29)<.8&&(a=u),Math.abs(l-27)<.8&&(a=f);let p=9+5*Math.abs(Math.cos(d*4));Math.abs(h-p)<.8&&(a=u),h<p-.8&&h>p-2&&(a=f),h<4&&(a=Math.abs(h-3)<.8?u:Le(e,8)),Math.abs(h-19)<.7&&Math.abs(Math.sin(d*8))>.4&&(a=u),r.set(i,n,a)}return je(r,{repeat:!1})})}function od(){return Ye("carving",()=>{let r=Ke(16,32),t=[178,170,152];for(let e=0;e<16;e++)for(let i=0;i<32;i++){let n=t;e===0||e===15||i===0||i===31?n=Je(t,.65):(e===1||i===1)&&(n=Le(t,16));let s=e-7.5,o=i-15.5,a=Math.sin(s*.9)*3+Math.cos(o*.5)*2;Math.abs(s)<5&&Math.abs(o)<12&&Math.abs(a)<.6&&(n=Je(t,.7)),r.set(e,i,n)}return je(r,{repeat:!1})})}function ad(){return Ye("bark",()=>{let r=Ke(16,16),t=ke(41);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let n=Le([104,78,62],(t()-.5)*16);(i+Math.floor(e/4)*3)%5===0&&(n=[70,52,42]),t()<.08&&(n=[132,102,80]),r.set(e,i,n)}return je(r)})}function ld(){return Ye("tiger",()=>{let r=Ke(16,16);for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=[226,142,48];Math.sin(t*1.1+Math.sin(e*.7)*1.5)>.55&&(i=[40,28,24]),r.set(t,e,i)}return je(r)})}function cd(){return Ye("cloud",()=>{let t=Ke(128,128),e=ke(53),i=[[4,.5],[8,.27],[16,.15],[32,.08]],n=i.map(([o])=>Array.from({length:o*o},()=>e())),s=o=>o*o*(3-2*o);for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=0;i.forEach(([h,d],u)=>{let f=o/128*h,p=a/128*h,x=Math.floor(f),g=Math.floor(p),m=s(f-x),M=s(p-g),T=n[u],v=(R,y)=>T[y%h*h+R%h],S=v(x,g)+(v(x+1,g)-v(x,g))*m,w=v(x,g+1)+(v(x+1,g+1)-v(x,g+1))*m;l+=(S+(w-S)*M)*d});let c=Math.max(0,Math.min(255,l*255));t.set(o,a,[c,c,c])}return je(t,{linear:!0})})}var vi={time:{value:0},player:{value:new A(0,-100,0)},night:{value:0}},Bs=null;function Hx(){if(!Bs){let r=new Uint8Array([78,78,78,255,150,150,150,255,212,212,212,255,255,255,255,255]);Bs=new zn(r,4,1,fi),Bs.magFilter=Bs.minFilter=de,Bs.needsUpdate=!0}return Bs}function Wt(r={}){return new Gn({gradientMap:Hx(),...r})}function kc(r,{local:t="",world:e=""},i){r.onBeforeCompile=n=>{n.uniforms.uTime=vi.time,n.uniforms.uPlayer=vi.player;let s=`uniform float uTime;
uniform vec3 uPlayer;
`+n.vertexShader;t&&(s=s.replace("#include <begin_vertex>",`#include <begin_vertex>
`+t)),e&&(s=s.replace("#include <project_vertex>",`
        vec4 mvPosition = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
        #endif
        vec4 wPos = modelMatrix * mvPosition;
        ${e}
        mvPosition = viewMatrix * wPos;
        gl_Position = projectionMatrix * mvPosition;`)),n.vertexShader=s},r.customProgramCacheKey=()=>i}var Hc=new Map;function qa(r,t,{shadow:e=!0}={}){let i="anim:"+(t.local||"")+"|"+(t.world||"");if(kc(r.material,t,i),e){let o=new ws({depthPacking:rc});kc(o,t,i+":depth"),r.customDepthMaterial=o}let n=r.material.side,s=i+n;if(!Hc.has(s)){let o=new mn({side:n});kc(o,t,i+":normal"),Hc.set(s,o)}return r.userData.nmat=Hc.get(s),r}var Ya={flag:{local:`
      float k = clamp(position.x + 0.5, 0.0, 1.0);
      float ph = uTime * 3.2 - position.x * 4.5 + position.y * 1.3 + modelMatrix[3].x * 0.7;
      transformed.z += sin(ph) * 0.14 * k;
      transformed.y += sin(ph * 0.7) * 0.03 * k;`},foliage:{world:`
      float sw = sin(uTime * 1.1 + wPos.x * 0.35 + wPos.z * 0.25);
      wPos.x += sw * 0.035 * max(0.0, wPos.y - 1.0) * 0.4;
      wPos.z += cos(uTime * 0.9 + wPos.x * 0.3) * 0.02 * max(0.0, wPos.y - 1.0) * 0.4;`},grass:{world:`
      float h = position.y;
      float w = sin(uTime * 2.1 + wPos.x * 0.55 + wPos.z * 0.35) * 0.5 + sin(uTime * 3.7 + wPos.x * 1.3) * 0.2 + 0.35;
      wPos.x += w * h * 0.45;
      wPos.z += w * h * 0.15;
      vec2 dp = wPos.xz - uPlayer.xz;
      float dl = length(dp) + 0.0001;
      float push = max(0.0, 0.85 - dl) * step(abs(wPos.y - uPlayer.y), 1.2);
      wPos.xz += dp / dl * push * h * 1.6;
      wPos.y -= push * h * 0.5;`}};var Ir=16,Gx=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Vx=`
uniform sampler2D tColor;
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform sampler2D tCloud;
uniform vec2 res;
uniform float cNear;
uniform float cFar;
uniform mat4 invViewProj;
uniform float time;
uniform float night;
uniform float outline;
uniform float flash;
uniform vec3 flashColor;
uniform float vignette;
varying vec2 vUv;

float rawD(vec2 uv) { return texture2D(tDepth, uv).r; }
float linD(vec2 uv) { return cNear + rawD(uv) * (cFar - cNear); }
vec3 getN(vec2 uv) { return texture2D(tNormal, uv).rgb * 2.0 - 1.0; }

float bayer4(vec2 p) {
  ivec2 q = ivec2(mod(p, 4.0));
  int i = q.x + q.y * 4;
  float m[16];
  m[0]=0.;m[1]=8.;m[2]=2.;m[3]=10.;m[4]=12.;m[5]=4.;m[6]=14.;m[7]=6.;
  m[8]=3.;m[9]=11.;m[10]=1.;m[11]=9.;m[12]=15.;m[13]=7.;m[14]=13.;m[15]=5.;
  for (int k = 0; k < 16; k++) if (k == i) return m[k] / 16.0;
  return 0.0;
}

float normalEdge(vec3 n, float d, vec2 uv) {
  float dd = linD(uv) - d;
  vec3 nn = getN(uv);
  vec3 bias = vec3(1.0, 1.0, 1.0);
  float nd = dot(n - nn, bias);
  float nInd = clamp(smoothstep(-0.01, 0.01, nd), 0.0, 1.0);
  float dInd = clamp(sign(dd * 0.25 + 0.0025), 0.0, 1.0);
  return (1.0 - dot(n, nn)) * dInd * nInd;
}

vec3 sat(vec3 c, float s) { float l = dot(c, vec3(0.299, 0.587, 0.114)); return mix(vec3(l), c, s); }

void main() {
  vec2 t = 1.0 / res;
  vec3 col = texture2D(tColor, vUv).rgb;
  float dr = rawD(vUv);
  float d = cNear + dr * (cFar - cNear);
  vec3 n = getN(vUv);

  if (dr < 0.9999 && outline > 0.0) {
    float dd = 0.0;
    dd += clamp(linD(vUv + vec2(t.x, 0.0)) - d, 0.0, 1.0);
    dd += clamp(linD(vUv - vec2(t.x, 0.0)) - d, 0.0, 1.0);
    dd += clamp(linD(vUv + vec2(0.0, t.y)) - d, 0.0, 1.0);
    dd += clamp(linD(vUv - vec2(0.0, t.y)) - d, 0.0, 1.0);
    float dEdge = step(0.35, dd);

    float ne = 0.0;
    ne += normalEdge(n, d, vUv + vec2(t.x, 0.0));
    ne += normalEdge(n, d, vUv - vec2(t.x, 0.0));
    ne += normalEdge(n, d, vUv + vec2(0.0, t.y));
    ne += normalEdge(n, d, vUv - vec2(0.0, t.y));
    float nEdge = step(0.12, ne);

    float coef = dEdge > 0.0 ? (1.0 - 0.48 * outline) : (1.0 + 0.32 * nEdge * outline);
    col *= coef;
  }

  // \uC6D4\uB4DC \uC88C\uD45C \uBCF5\uC6D0 \u2192 \uD750\uB974\uB294 \uAD6C\uB984 \uADF8\uB9BC\uC790 (\uB514\uB354\uB9C1)
  vec4 ndc = vec4(vUv * 2.0 - 1.0, dr * 2.0 - 1.0, 1.0);
  vec4 wp = invViewProj * ndc; wp /= wp.w;
  vec2 cuv = wp.xz * 0.012 + vec2(time * 0.006, time * 0.0035);
  float cl = texture2D(tCloud, cuv).r;
  float dither = bayer4(gl_FragCoord.xy);
  float cs = smoothstep(0.47, 0.62, cl);
  float shadow = step(dither * 0.9 + 0.05, cs) * (1.0 - night);
  col *= 1.0 - 0.26 * shadow;

  // \uC0C9\uBCF4\uC815: \uB0AE\uC740 \uC0B4\uC9DD \uB530\uB73B\uD558\uAC8C, \uBC24\uC740 \uD478\uB974\uAC8C
  col = sat(col, mix(1.12, 0.85, night));
  col *= mix(vec3(1.04, 1.0, 0.95), vec3(0.72, 0.82, 1.12), night);
  col += vec3(0.004, 0.006, 0.02) * night;

  // \uBE44\uB124\uD2B8
  vec2 vc = vUv - 0.5;
  col *= 1.0 - dot(vc, vc) * vignette;

  col = mix(col, flashColor, flash);

  // \uBBF8\uC138 \uB514\uB354 \uD6C4 \uCC44\uB110\uB2F9 6\uBE44\uD2B8 \uC815\uB3C4\uB85C \uC591\uC790\uD654 \u2192 \uADF8\uB77C\uB370\uC774\uC158 \uB760\uB97C \uB3C4\uD2B8\uB2F5\uAC8C
  col = max(col, 0.0);
  vec3 srgb = pow(col, vec3(1.0 / 2.2));
  srgb = floor(srgb * 48.0 + dither) / 48.0;
  gl_FragColor = vec4(srgb, 1.0);
}`,Za=class{constructor(t){this.container=t,this.canvas=document.createElement("canvas"),this.canvas.className="view",t.appendChild(this.canvas);let e=this.renderer=new Ga({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.shadowMap.enabled=!0,e.shadowMap.type=Vn,e.shadowMap.autoUpdate=!1,e.outputColorSpace=Fn,this.pixelSize=3,this.userZoom=0,this.colorTarget=null,this.normalTarget=null,this.normalFront=new mn,this.normalDouble=new mn({side:xe}),this.compMat=new Ie({vertexShader:Gx,fragmentShader:Vx,uniforms:{tColor:{value:null},tNormal:{value:null},tDepth:{value:null},tCloud:{value:cd()},res:{value:new Mt(1,1)},cNear:{value:1},cFar:{value:100},invViewProj:{value:new Qt},time:vi.time,night:vi.night,outline:{value:1},flash:{value:0},flashColor:{value:new lt(1,1,1)},vignette:{value:.55}},depthTest:!1,depthWrite:!1}),this.compScene=new Bn,this.compCam=new nn(-1,1,1,-1,0,1);let i=new at(new Ce(2,2),this.compMat);i.frustumCulled=!1,this.compScene.add(i),this.camera=new nn(-1,1,1,-1,1,160),this.pitch=cc.degToRad(45),this.camDist=70,this.shift={x:0,y:0},this.resize(),window.addEventListener("resize",()=>this.resize())}basePixelSize(){return Math.max(2,Math.round(Math.sqrt(window.innerWidth*window.innerHeight)/330))}autoPixelSize(){return this.basePixelSize()+this.userZoom}zoom(t){let e=this.basePixelSize(),i=Math.min(Math.max(e+this.userZoom+t,2),e+3);this.userZoom=i-e,this.resize()}resize(){let t=this.pixelSize=Math.max(2,this.autoPixelSize()),e=this.W=Math.ceil(window.innerWidth/t),i=this.H=Math.ceil(window.innerHeight/t),n=this.RW=e+2,s=this.RH=i+2;this.renderer.setSize(n,s,!1),Object.assign(this.canvas.style,{width:n*t+"px",height:s*t+"px"});let o={minFilter:de,magFilter:de,type:_i};this.colorTarget?.dispose(),this.normalTarget?.dispose(),this.colorTarget=new Ze(n,s,o),this.normalTarget=new Ze(n,s,{minFilter:de,magFilter:de}),this.normalTarget.depthTexture=new Vi(n,s),this.normalTarget.depthTexture.type=yi,this.compMat.uniforms.res.value.set(n,s);let a=this.camera;a.left=-n/Ir/2,a.right=n/Ir/2,a.top=s/Ir/2,a.bottom=-s/Ir/2,a.updateProjectionMatrix()}project(t,e={x:0,y:0}){let i=Gc.copy(t).project(this.camera),n=this.pixelSize;return e.x=(i.x*.5+.5)*this.RW*n-n+this.shift.x,e.y=(-i.y*.5+.5)*this.RH*n-n+this.shift.y,e.z=i.z,e}unproject(t,e,i=0){let n=this.pixelSize,s=(t+n-this.shift.x)/(this.RW*n)*2-1,o=-((e+n-this.shift.y)/(this.RH*n)*2-1),a=Gc.set(s,o,-1).unproject(this.camera),c=Wx.set(s,o,1).unproject(this.camera).sub(a),h=(i-a.y)/c.y;return new A(a.x+c.x*h,i,a.z+c.z*h)}setFocus(t){let e=this.camera,i=this.pitch,n=Gc.set(0,Math.sin(i),Math.cos(i)).multiplyScalar(this.camDist);e.position.copy(t).add(n),e.up.set(0,1,0),e.lookAt(t),e.updateMatrixWorld();let s=Xx.setFromMatrixColumn(e.matrixWorld,0),o=qx.setFromMatrixColumn(e.matrixWorld,1),a=1/Ir,l=e.position.dot(s),c=e.position.dot(o),h=Math.round(l/a)*a,d=Math.round(c/a)*a;e.position.addScaledVector(s,h-l).addScaledVector(o,d-c),e.updateMatrixWorld();let u=(l-h)/a,f=(c-d)/a,p=this.pixelSize;this.shift.x=-u*p,this.shift.y=f*p,this.canvas.style.transform=`translate(${(-p+this.shift.x).toFixed(2)}px, ${(-p+this.shift.y).toFixed(2)}px)`}render(t){let e=this.renderer,i=this.camera,n=[],s=[];t.traverseVisible(l=>{if(l.isMesh||l.isPoints||l.isLine||l.isSprite)if(l.userData.noOutline||l.isPoints||l.isSprite||l.isLine||l.material&&l.material.transparent)s.push(l);else{n.push(l,l.material);let c=l.userData.nmat||(Array.isArray(l.material)?l.material[0].side===xe?this.normalDouble:this.normalFront:l.material.side===xe?this.normalDouble:this.normalFront);l.material=c}});for(let l of s)l.visible=!1;let o=t.background;t.background=null,e.setRenderTarget(this.normalTarget),e.setClearColor(8421631,1),e.clear(),e.render(t,i);for(let l=0;l<n.length;l+=2)n[l].material=n[l+1];for(let l of s)l.visible=!0;t.background=o,e.shadowMap.needsUpdate=!0,e.setRenderTarget(this.colorTarget),e.render(t,i);let a=this.compMat.uniforms;a.tColor.value=this.colorTarget.texture,a.tNormal.value=this.normalTarget.texture,a.tDepth.value=this.normalTarget.depthTexture,a.cNear.value=i.near,a.cFar.value=i.far,a.invViewProj.value.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).invert(),e.setRenderTarget(null),e.render(this.compScene,this.compCam)}},Gc=new A,Wx=new A,Xx=new A,qx=new A;function ud(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new fe,c=0;for(let h=0;h<r.length;++h){let d=r[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<r.length;++u){let f=r[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(let h in s){let d=hd(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let p=hd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function hd(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new Be(o,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);a.setComponent(u+d,p,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}function Lt(r,t,e,i=4){let n=new At(r,t,e),s=n.attributes.uv,o=[[e,t],[e,t],[r,e],[r,e],[r,t],[r,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;s.setXY(c,s.getX(c)*o[a][0]/i,s.getY(c)*o[a][1]/i)}return n}function Ei(r,t,e,i=12,n=0,s=0){let o=new te(r,t,e,i);if(n){let a=o.attributes.uv;for(let l=0;l<a.count;l++)a.setXY(l,a.getX(l)*n,a.getY(l)*s)}return o}var Pr=class{constructor(){this.groups=new Map}add(t,e,i){let n=t.index?t.toNonIndexed():t.clone();n.attributes.uv||n.setAttribute("uv",new zt(new Float32Array(n.attributes.position.count*2),2));for(let s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);n.applyMatrix4(i),this.groups.has(e)||this.groups.set(e,[]),this.groups.get(e).push(n)}put(t,e,i,n,s,o=0,a=0,l=0,c=1){dd.compose(Yx.set(i,n,s),Zx.setFromEuler($x.set(a,o,l,"YXZ")),Jx.set(c,c,c)),this.add(t,e,dd)}build(t,{cast:e=!0,receive:i=!0}={}){let n=[];for(let[s,o]of this.groups){let a=ud(o,!1),l=new at(a,s);l.castShadow=e,l.receiveShadow=i,t.add(l),n.push(l)}return this.groups.clear(),n}},dd=new Qt,Yx=new A,Zx=new Te,$x=new ui,Jx=new A;function fd({w:r,d:t,h:e,overhang:i=2,lift:n=.7,power:s=1.7,seg:o=28,thick:a=.28,tile:l=2}){let c=r+i*2,h=t+i*2,d=Math.min(c,h)/2,u=(Y,k)=>{let J=c/2-Math.abs(Y),Q=h/2-Math.abs(k),vt=Math.max(0,Math.min(J,Q)),St=Math.min(1,vt/d),Yt=e*Math.pow(St,s),Gt=Math.min(1,Math.abs(Y)/(c/2)),$t=Math.min(1,Math.abs(k)/(h/2));return Yt+=n*Math.pow(Gt*$t,2.2),Yt},f=o,p=Math.max(6,Math.round(o*h/c)),x=[],g=[],m=[],M=[],T=[],v=[],S=.05,w=(Y,k)=>{let J=(u(Y+S,k)-u(Y-S,k))/(2*S),Q=(u(Y,k+S)-u(Y,k-S))/(2*S);return new A(-J,1,-Q).normalize()},R=Y=>-c/2+c*Y/f,y=Y=>-h/2+h*Y/p,E=(Y,k,J)=>{let Q=(Y[0]+k[0]+J[0])/3,vt=(Y[1]+k[1]+J[1])/3,St=c/2-Math.abs(Q)>h/2-Math.abs(vt);for(let[Yt,Gt]of[Y,k,J]){let $t=u(Yt,Gt),$=w(Yt,Gt);x.push(Yt,$t,Gt),g.push($.x,$.y,$.z),St?m.push(Yt/l,(h/2-Math.abs(Gt))/l):m.push(Gt/l,(c/2-Math.abs(Yt))/l)}for(let[Yt,Gt]of[Y,J,k]){let $t=u(Yt,Gt)-a;M.push(Yt,$t,Gt),T.push(0,-1,0),v.push(Yt/2,Gt/2)}};for(let Y=0;Y<f;Y++)for(let k=0;k<p;k++){let J=[R(Y),y(k)],Q=[R(Y+1),y(k)],vt=[R(Y+1),y(k+1)],St=[R(Y),y(k+1)];(R(Y)+R(Y+1))*(y(k)+y(k+1))>0?(E(J,St,Q),E(Q,St,vt)):(E(J,St,vt),E(J,vt,Q))}let P=new fe;P.setAttribute("position",new zt(x,3)),P.setAttribute("normal",new zt(g,3)),P.setAttribute("uv",new zt(m,2));let N=new fe;N.setAttribute("position",new zt(M,3)),N.setAttribute("normal",new zt(T,3)),N.setAttribute("uv",new zt(v,2));let D=[],B=[],L=[],z=[];for(let Y=0;Y<=f;Y++)z.push([R(Y),-h/2,0,0,-1]);for(let Y=1;Y<=p;Y++)z.push([c/2,y(Y),1,0,0]);for(let Y=f-1;Y>=0;Y--)z.push([R(Y),h/2,0,0,1]);for(let Y=p-1;Y>=0;Y--)z.push([-c/2,y(Y),-1,0,0]);let H=0;for(let Y=0;Y<z.length-1;Y++){let[k,J]=z[Y],[Q,vt,St,,Yt]=z[Y+1],Gt=u(k,J),$t=u(Q,vt),$=Math.hypot(Q-k,vt-J),it=[[k,Gt,J,H,1],[Q,$t,vt,H+$,1],[Q,$t-a,vt,H+$,0],[k,Gt-a,J,H,0]];for(let wt of[0,2,1,0,3,2]){let Ht=it[wt];D.push(Ht[0],Ht[1],Ht[2]),B.push(St,0,Yt),L.push(Ht[3]/4,Ht[4]*.25)}H+=$}let X=new fe;return X.setAttribute("position",new zt(D,3)),X.setAttribute("normal",new zt(B,3)),X.setAttribute("uv",new zt(L,2)),{top:P,under:N,fascia:X,height:u,W:c,D:h}}function $a(r,t=12){return new cr(r.map(([e,i])=>new Mt(e,i)),t)}var Ja=class{constructor(t){this.scene=t,this.root=new qt,t.add(this.root),this.rects=[],this.ramps=[],this.blockRects=[],this.circles=[],this.lanterns=[],this.glowMats=[],this.drums=[],this.windows=[],this.spawnPoints=[],this.makeMaterials(),this.build()}makeMaterials(){let t=e=>new lt(e);this.M={floor:Wt({map:Fc()}),slab:Wt({map:Fc(9,[186,178,160],25)}),path:Wt({map:Ju()}),block:Wt({map:Bc()}),blockDark:Wt({map:Bc([140,134,120])}),grass:Wt({map:Ku()}),dirt:Wt({map:ju()}),wood:Wt({map:zc()}),darkWood:Wt({map:Qu()}),roof:Wt({map:td()}),roofUnder:Wt({map:Xa()}),fascia:Wt({map:Xa(),side:xe}),ridge:Wt({color:t("#3b4048")}),mortar:Wt({color:t("#e2dccb")}),dancheong:Wt({map:Xa()}),plaster:Wt({map:ed()}),bark:Wt({map:ad()}),leaf:Wt({color:t("#3f6e3e")}),leaf2:Wt({color:t("#5f924a")}),bronze:Wt({color:t("#6e5a3e")}),bronzeDark:Wt({color:t("#3c3226")}),gold:Wt({color:t("#d9a83a")}),black:Wt({color:t("#2a2624")}),stoneLight:Wt({color:t("#bdb5a2")}),stoneGrey:Wt({color:t("#a29c8e")}),pot:Wt({color:t("#c9b48e")}),lotus:Wt({color:t("#4e8a4a")}),pink:Wt({color:t("#e889a6")}),orange:Wt({color:t("#e88a3a")}),blue:Wt({color:t("#2f5aa8")}),red:Wt({color:t("#b23a2e")}),drumSide:Wt({map:nd()}),drumFace:Wt({map:sd()}),medallion:Wt({map:rd(),polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),carving:Wt({map:od()}),lattice:Wt({map:Oc(),emissiveMap:Oc(!0),emissive:t("#000000")}),lampGlow:Wt({color:t("#f3e2b8"),emissive:t("#000000")})},this.glowMats.push({mat:this.M.lattice,color:new lt("#ffb060"),k:1.1}),this.glowMats.push({mat:this.M.lampGlow,color:new lt("#ffc070"),k:1.6})}heightAt(t,e){let i=0;for(let n of this.rects)t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1&&n.h>i&&(i=n.h);for(let n of this.ramps)if(t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1){let s=(e-n.z0)/(n.z1-n.z0),o=n.h0+(n.h1-n.h0)*s;o>i&&(i=o)}return i}isBlocked(t,e,i,n){if(t<-21.6+i||t>21.6-i||e<-33.3+i||e>21.2-i&&(t<-3.2+i||t>3.2-i)||e>30)return!0;for(let a of this.blockRects)if(t>a.x0-i&&t<a.x1+i&&e>a.z0-i&&e<a.z1+i)return!0;for(let a of this.circles){let l=t-a.x,c=e-a.z,h=a.r+i;if(l*l+c*c<h*h&&Math.abs((a.y||0)-n)<1.5)return!0}let s=this.heightAt(t,e);if(Math.abs(s-n)>.45)return!0;let o=i*.8;for(let[a,l]of Kx)if(Math.abs(this.heightAt(t+a*o,e+l*o)-s)>.45)return!0;return!1}move(t,e,i,n){let s=Math.hypot(e,i),o=Math.max(1,Math.ceil(s/.15)),a=e/o,l=i/o,c=!1,h=this.heightAt(t.x,t.z);if(this.isBlocked(t.x,t.z,n,h)){let d=t.x+e,u=t.z+i;if(Math.abs(this.heightAt(d,u)-h)<=.45&&d>-21.6&&d<21.6&&u>-33.3&&u<30)return t.x=d,t.z=u,!0}for(let d=0;d<o;d++){let u=this.heightAt(t.x,t.z);if(!this.isBlocked(t.x+a,t.z+l,n,u))t.x+=a,t.z+=l,c=!0;else if(a&&!this.isBlocked(t.x+a,t.z,n,u))t.x+=a,c=!0;else if(l&&!this.isBlocked(t.x,t.z+l,n,u))t.z+=l,c=!0;else break}return c}randomWalkable(t,e,i,n,s=30){for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,l=i+Math.random()*(n-i),c=t+Math.cos(a)*l,h=e+Math.sin(a)*l,d=this.heightAt(c,h);if(!this.isBlocked(c,h,.5,d)&&h<20)return new A(c,d,h)}return null}build(){let t=this.M,e=this.batch=new Pr,i=ke(77);this.foliage=new Pr;let n=new at(new Ce(160,160),t.dirt);n.geometry.attributes.uv.array.forEach((l,c,h)=>h[c]=l*80),n.rotation.x=-Math.PI/2,n.position.y=-.02,n.receiveShadow=!0,this.root.add(n);let s=new Ce(48,58);s.attributes.uv.array.forEach((l,c,h)=>h[c]=l*(c%2===0?12:14.5));let o=new at(s,t.floor);o.rotation.x=-Math.PI/2,o.position.set(0,0,-6),o.receiveShadow=!0,this.root.add(o),e.add(Lt(5.2,.12,24.6,4),t.path,ot(0,.06,8.7)),this.rects.push({x0:-2.6,x1:2.6,z0:-3.6,z1:21,h:.12}),e.add(Lt(5.2,.08,10,4),t.path,ot(0,.04,27)),this.rects.push({x0:-2.6,x1:2.6,z0:21,z1:32,h:.08}),this.terrace(-15,15,-14,-6,.9),this.terrace(-12,12,-22,-13,1.8),this.stairs(-6,-3.6,.9,0),this.stairs(-13,-10.6,1.8,.9),this.balustrade(-15,-6,-2.9,-6,.9),this.balustrade(2.9,-6,15,-6,.9),this.balustrade(-15,-14,-15,-6,.9),this.balustrade(15,-14,15,-6,.9),this.balustrade(-12,-13,-2.9,-13,1.8),this.balustrade(2.9,-13,12,-13,1.8),this.balustrade(-12,-22,-12,-13,1.8),this.balustrade(12,-22,12,-13,1.8);for(let l of[-1,1])this.haetae(l*3.3,.9,-6.5,l),this.haetae(l*3.3,1.8,-13.5,l);this.hall();for(let l of[-1,1])this.cauldron(l*6.2,.9,-8.2);for(let l of[-1,1])this.cauldron(l*10.5,1.8,-15.2);for(let l of[-1,1])this.flag(l*5.4,1.8,-13.45,"red",l),this.flag(l*4.6,.9,-8.6,"white",l),this.flag(l*4.8,0,1.2,"red",l),this.flag(l*4.8,0,9.5,"white",l),this.flag(l*19.5,0,-24,"navy",l),this.flag(l*20,0,-11,"navy",l),this.flag(l*20,0,18,"navy",l);for(let l of[-1,1])this.drum(l*10.5,4.2,l);for(let l of[-1,1]){let c=new at(new Ce(6,6),t.medallion);c.rotation.x=-Math.PI/2,c.position.set(l*17,.012,4.2),c.receiveShadow=!0,this.root.add(c)}this.planter(-14.6,-6,-6,-1.4),this.planter(6,14.6,-6,-1.4),this.planter(-14,-7.4,9.2,14.2),this.planter(7.4,14,9.2,14.2),this.pine(-11.2,.3,-3.6,1.15,3),this.pine(11.4,.3,-3.4,1.1,4),this.pine(-10.6,.3,11.8,.85,5),this.pine(10.8,.3,11.6,.8,6),this.shrub(-7.4,.3,-2.6),this.shrub(7.6,.3,-2.4),this.shrub(-13.2,.3,-2.2),this.shrub(13,.3,-4.6),this.shrub(-8.4,.3,13.1),this.shrub(8.6,.3,10.2);for(let[l,c,h,d]of[[-16,-28,1.2,11],[15,-27,1.3,12],[-5,-30,1,13],[6,-31,.95,14],[17.5,-18.5,.9,15],[-17.5,-18,.95,16]])this.pine(l,0,c,h,d);for(let[l,c,h,d]of[[-12,27,1.2,21],[11,28,1.3,22],[-22,30,1,23],[24,31,1.1,24],[-7,33,.9,25],[7,35,1,26],[-30,10,1.3,27],[31,-5,1.2,28],[-31,-20,1.2,29],[30,15,1.1,30]])this.pine(l,0,c,h,d,!1);for(let l of[-1,1])this.flowerPot(l*3.7,4.6),this.flowerPot(l*3.7,13.4),this.flowerPot(l*3.7,-1.6);for(let l of[-1,1])this.stoneLantern(l*7.6,0,17.2),this.stoneLantern(l*16.5,0,-2.2),this.stoneLantern(l*16.5,0,12),this.stoneLantern(l*10.9,1.8,-21),this.stoneLantern(l*13.6,.9,-7);this.stoneLantern(-11,0,-26),this.stoneLantern(11,0,-24),this.pond(-21,-15,-31.2,-24.6),this.corridor(-1),this.corridor(1),this.northWall(),this.southWall(),this.scatterGrass(),e.build(this.root);let a=this.foliage.build(this.root);for(let l of a)qa(l,Ya.foliage);this.spawnPoints.push(new A(0,0,25),new A(-1.5,0,26),new A(1.5,0,26))}terrace(t,e,i,n,s){let o=this.M,a=this.batch,l=e-t,c=n-i,h=Lt(l,s,c,2),d=Lt(l,.001,c,4);a.add(h,o.block,ot((t+e)/2,s/2,(i+n)/2)),a.add(d,o.slab,ot((t+e)/2,s+.001,(i+n)/2)),a.add(Lt(l+.3,.14,.4,2),o.stoneLight,ot((t+e)/2,s-.05,n+.05)),this.rects.push({x0:t,x1:e,z0:i,z1:n,h:s})}stairs(t,e,i,n){let s=this.M,o=this.batch,a=6,l=(e-t)/a,c=(i-n)/a;for(let g=0;g<a;g++){let m=i-c*(g+1)+c,M=t+l*(g+.5),T=n-.2,v=Lt(5.2,m-T,l,2);o.add(v,g%2?s.stoneLight:s.stoneGrey,ot(0,(m+T)/2,M))}let h=Math.hypot(e-t,i-n),d=Math.atan2(i-n,e-t),u=(t+e)/2,f=(i+n)/2,p=Lt(1.4,.12,h,2),x=p.attributes.uv;for(let g=8;g<12;g++)x.setXY(g,g%2,g<10?1:0);o.add(p,s.carving,ot(0,f+.06,u,0,d));for(let g of[-1,1])o.add(Lt(.45,.4,h+.2,2),s.stoneLight,ot(g*2.82,f+.12,u,0,d));this.ramps.push({x0:-2.6,x1:2.6,z0:t,z1:e,h0:i,h1:n})}balustrade(t,e,i,n,s){let o=this.M,a=this.batch,l=Math.hypot(i-t,n-e),c=Math.atan2(-(n-e),i-t),h=Math.max(1,Math.round(l/1.6));for(let f=0;f<=h;f++){let p=f/h,x=t+(i-t)*p,g=e+(n-e)*p;a.add(Lt(.24,.62,.24,2),o.stoneLight,ot(x,s+.31,g)),a.add(Lt(.3,.1,.3,2),o.stoneGrey,ot(x,s+.65,g))}let d=(t+i)/2,u=(e+n)/2;a.add(Lt(l,.08,.12,2),o.stoneLight,ot(d,s+.5,u,c)),a.add(Lt(l,.18,.08,2),o.stoneGrey,ot(d,s+.14,u,c))}haetae(t,e,i,n){let s=this.M,o=this.batch;o.add(Lt(.7,.3,.9,2),s.stoneGrey,ot(t,e+.15,i)),o.add(new be(.32,8,6),s.stoneLight,ot(t,e+.6,i,0,0,0,[1,.9,1.25])),o.add(new be(.27,8,6),s.stoneLight,ot(t,e+.95,i+.25)),o.add(new be(.12,6,4),s.stoneGrey,ot(t-.12,e+1.15,i+.2)),o.add(new be(.12,6,4),s.stoneGrey,ot(t+.12,e+1.15,i+.2)),o.add(Lt(.12,.3,.12,2),s.stoneLight,ot(t-.15,e+.45,i+.3)),o.add(Lt(.12,.3,.12,2),s.stoneLight,ot(t+.15,e+.45,i+.3)),this.circles.push({x:t,z:i,r:.45,y:e})}hall(){let t=this.M,e=this.batch,i=2.1,n=-18.5;e.add(Lt(19.4,.3,6.2,2),t.block,ot(0,1.95,n)),e.add(Lt(19.6,.06,6.4,2),t.stoneLight,ot(0,2.1,n)),this.blockRects.push({x0:-9.7,x1:9.7,z0:-21.6,z1:-15.4}),e.add(Lt(17.6,3.5,4.6,2),t.darkWood,ot(0,i+1.75,n));let s=Ei(.24,.27,3.6,10,1,1);for(let o=0;o<=6;o++){let a=-9+o*3;e.add(s,t.wood,ot(a,i+1.8,-16)),e.add(s,t.wood,ot(a,i+1.8,-21)),e.add(Ei(.36,.38,.14,10),t.stoneLight,ot(a,i+.07,-16))}for(let o of[-1,1])e.add(s,t.wood,ot(o*9,i+1.8,-18.5));for(let o=0;o<6;o++){let a=-7.5+o*3;for(let l of[-.62,.62])e.add(new At(1.22,3.3,.08),t.lattice,ot(a+l,i+1.68,-16.18));e.add(Lt(2.76,.12,.14,2),t.wood,ot(a,i+3.38,-16.15)),e.add(Lt(2.76,.1,.14,2),t.wood,ot(a,i+.05,-16.15))}for(let o of[-1,1])for(let a of[-17.25,-19.75])e.add(new At(.08,3.3,2.3),t.lattice,ot(o*8.85,i+1.68,a));this.hallLightPos=[new A(-4.5,3.8,-15),new A(4.5,3.8,-15)],e.add(Lt(18.8,.42,5.8,4),t.dancheong,ot(0,5.9,n)),e.add(Lt(19.6,.4,6.6,4),t.dancheong,ot(0,6.3,n));for(let o=0;o<=24;o++){let a=-9.6+o*.8;for(let l of[-15.1,-21.9])e.add(Lt(.3,.26,.6,1),o%2?t.dancheong:t.red,ot(a,6.58,l))}for(let o=0;o<=8;o++)for(let a of[-1,1])e.add(Lt(.6,.26,.3,1),o%2?t.dancheong:t.red,ot(a*9.95,6.58,-21.7+o*.8));this.roof({cx:0,cy:6.72,cz:n,w:19.6,d:6.4,h:1.5,overhang:1.5,lift:.7,ridge:!1}),e.add(Lt(13.2,2.1,2.9,2),t.darkWood,ot(0,8.35,n));for(let o=0;o<6;o++){let a=-5.5+o*2.2;e.add(new At(1.7,1.25,.06),t.lattice,ot(a,8.55,n+1.48))}for(let o=0;o<=6;o++)e.add(Ei(.17,.17,2.1,8),t.wood,ot(-6.6+o*2.2,8.35,n+1.5));e.add(Lt(14,.4,3.6,4),t.dancheong,ot(0,9.55,n)),this.roof({cx:0,cy:9.8,cz:n,w:14,d:3.6,h:2.4,overhang:1.9,lift:.85,ridge:!0})}roof({cx:t,cy:e,cz:i,w:n,d:s,h:o,overhang:a,lift:l,ridge:c,power:h=1.7,tile:d=2,rot:u=0}){let f=this.M,p=fd({w:n,d:s,h:o,overhang:a,lift:l,power:h,tile:d}),x=new qt;x.position.set(t,e,i),x.rotation.y=u;let g=new at(p.top,f.roof),m=new at(p.under,f.roofUnder),M=new at(p.fascia,f.fascia);for(let w of[g,m,M])w.castShadow=!0,w.receiveShadow=!0,x.add(w);let T=p.W,v=p.D,S=Math.max(.5,T-v);if(c){let w=new at(Lt(S+.6,.5,.5,2),f.ridge);w.position.set(0,o+.2,0);let R=new at(Lt(S+.3,.2,.56,2),f.mortar);R.position.set(0,o+.05,0),x.add(w,R);for(let y of[-1,1]){let E=new at(Lt(.5,.8,.6,1),f.ridge);E.position.set(y*(S/2+.3),o+.45,0),E.rotation.z=y*.15,x.add(E)}}for(let w of[-1,1])for(let R of[-1,1]){let y=new A(w*S/2,0,0),E=new A(w*T/2,0,R*v/2),P=7,N=null;for(let D=0;D<=P;D++){let B=.02+D/P*.96,L=y.x+(E.x-y.x)*B,z=y.z+(E.z-y.z)*B,H=new A(L,p.height(L,z)+.12,z);if(N){let X=N.clone().add(H).multiplyScalar(.5),Y=N.distanceTo(H),k=new at(Lt(.32,.26,Y+.08,1),f.ridge);k.position.copy(X),k.quaternion.setFromUnitVectors(new A(0,0,1),H.clone().sub(N).normalize()),k.castShadow=!0,x.add(k)}N=H}for(let D=0;D<3;D++){let B=.62+D*.1,L=y.x+(E.x-y.x)*B,z=y.z+(E.z-y.z)*B,H=new at(new At(.16,.24,.16),f.ridge);H.position.set(L,p.height(L,z)+.36,z),x.add(H)}}return this.root.add(x),{group:x,r:p}}cauldron(t,e,i){let n=this.M,s=this.batch;s.add(Lt(1.2,.2,1.2,2),n.stoneGrey,ot(t,e+.1,i));let o=$a([[0,0],[.42,.02],[.58,.25],[.62,.55],[.56,.72],[.62,.78],[.5,.78]],12);s.add(o,n.bronze,ot(t,e+.2,i)),s.add(new en(.5,12),n.bronzeDark,ot(t,e+.9,i,0,-Math.PI/2));for(let a of[-1,1])s.add(new Li(.12,.035,4,8),n.bronzeDark,ot(t+a*.6,e+.6,i,Math.PI/2));this.circles.push({x:t,z:i,r:.7,y:e})}flag(t,e,i,n,s){let o=this.M,a=this.batch,l=4.4;a.add(Lt(.7,.28,.7,1),o.black,ot(t,e+.14,i)),a.add(Lt(.4,.4,.4,1),o.darkWood,ot(t,e+.48,i)),a.add(Ei(.055,.07,l,6),o.black,ot(t,e+l/2,i)),a.add(new me(.1,.35,6),o.gold,ot(t,e+l+.15,i));let c=new Ce(1.1,1.4,8,4),h=Wt({map:id(n),side:xe}),d=new at(c,h);d.position.set(t+s*.6,e+l-.9,i),s<0&&(d.scale.x=-1),d.rotation.y=s<0?.25:-.25,d.castShadow=!0,d.receiveShadow=!0,qa(d,Ya.flag),this.root.add(d),this.circles.push({x:t,z:i,r:.4,y:e})}drum(t,e,i){let n=this.M,s=this.batch,o=new qt;o.position.set(t,0,e),o.rotation.y=i*.5;let a=Lt(.18,2.2,.18,1);for(let d of[-1,1])for(let u of[-1,1]){let f=new at(a,n.wood);f.position.set(d*.75,1,u*.75),f.rotation.set(u*.12,0,-d*.12),o.add(f)}for(let d of[-1,1]){let u=new at(Lt(1.7,.14,.14,1),n.wood);u.position.set(0,.35,d*.8),o.add(u)}let l=new qt;l.position.y=2.15;let c=new at($a([[.95,-.75],[1.08,-.4],[1.12,0],[1.08,.4],[.95,.75]],18),n.drumSide);c.rotation.x=Math.PI/2,l.add(c);for(let d of[-1,1]){let u=new at(new en(.95,18),n.drumFace);u.position.z=d*.76,u.rotation.y=d>0?0:Math.PI,l.add(u);for(let f=0;f<14;f++){let p=f/14*Math.PI*2,x=new at(new be(.05,4,3),n.gold);x.position.set(Math.cos(p)*.97,Math.sin(p)*.97,d*.66),l.add(x)}}let h=new at(new me(.25,.6,6),n.gold);h.position.y=1.35,l.add(h),o.add(l),o.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),this.root.add(o),this.circles.push({x:t,z:e,r:1.25,y:0}),this.drums.push({group:o,body:l,pos:new A(t,0,e),shake:0})}planter(t,e,i,n){let s=this.M,o=this.batch,a=e-t,l=n-i,c=(t+e)/2,h=(i+n)/2,d=.32,u=.3;o.add(Lt(a,d,u,2),s.stoneLight,ot(c,d/2,i+u/2)),o.add(Lt(a,d,u,2),s.stoneLight,ot(c,d/2,n-u/2)),o.add(Lt(u,d,l-u*2,2),s.stoneLight,ot(t+u/2,d/2,h)),o.add(Lt(u,d,l-u*2,2),s.stoneLight,ot(e-u/2,d/2,h));for(let[f,p]of[[t,i],[e,i],[t,n],[e,n]])o.add(Lt(.42,.46,.42,1),s.stoneGrey,ot(f+(f===t?.15:-.15),.23,p+(p===i?.15:-.15)));o.add(Lt(a-u*2,.26,l-u*2,2),s.grass,ot(c,.13,h)),this.rects.push({x0:t,x1:e,z0:i,z1:n,h:.3}),this.grassAreas=this.grassAreas||[],this.grassAreas.push({x0:t+u,x1:e-u,z0:i+u,z1:n-u,y:.26})}pine(t,e,i,n,s,o=!0){let a=this.batch,l=this.foliage,c=this.M,h=ke(s*97+3),d=new A(0,1,0),u=new A(t,e,i),f=new A((h()-.5)*.5,1,(h()-.5)*.5).normalize(),p=5,x=.9*n,g=.3*n,m=[];for(let v=0;v<p;v++){let S=g*.8,w=u.clone().addScaledVector(f,x),R=new te(S,g,x*1.05,7),y=new Te().setFromUnitVectors(d,f);a.add(R,c.bark,new Qt().compose(u.clone().add(w).multiplyScalar(.5),y,new A(1,1,1))),m.push(w.clone()),u=w,g=S,f.x+=(h()-.5)*.7,f.z+=(h()-.5)*.5,f.y=1,f.normalize()}let M=(v,S,w,R,y)=>{let E=new Ge(1,1);l.add(E,y,new Qt().compose(v,new Te().setFromEuler(new ui(0,h()*6,0)),new A(S,w,R)))};for(let v=2;v<p;v++){let S=m[v-1],w=2;for(let R=0;R<w;R++){let y=h()*Math.PI*2,E=(1.2+h()*1)*n*(1-(v-2)*.18),P=new A(Math.cos(y),.25+h()*.3,Math.sin(y)).normalize(),N=S.clone().addScaledVector(P,E),D=new te(.06*n,.11*n,E,5),B=new Te().setFromUnitVectors(d,P);a.add(D,c.bark,new Qt().compose(S.clone().add(N).multiplyScalar(.5),B,new A(1,1,1)));let L=(.8+h()*.4)*n;M(N.clone().add(new A(0,.15*n,0)),1.25*L,.42*L,1.05*L,c.leaf),M(N.clone().add(new A(.1,.42*n,.05)),.85*L,.3*L,.75*L,c.leaf2)}}let T=m[p-1];M(T.clone().add(new A(0,.2*n,0)),1.5*n,.5*n,1.3*n,c.leaf),M(T.clone().add(new A(.1,.55*n,0)),1*n,.35*n,.9*n,c.leaf2),o&&this.circles.push({x:t,z:i,r:.45*n,y:e})}shrub(t,e,i){let n=this.foliage,s=this.M,o=ke(Math.floor(t*31+i*7));for(let a=0;a<3;a++)n.add(new Ge(1,1),a?s.leaf2:s.leaf,new Qt().compose(new A(t+(o()-.5)*.6,e+.3+a*.12,i+(o()-.5)*.6),new Te,new A(.55,.42,.5)))}flowerPot(t,e){let i=this.M,n=this.batch;n.add(Lt(.7,.5,.7,2),i.stoneLight,ot(t,.25,e)),n.add(Lt(.8,.08,.8,2),i.stoneGrey,ot(t,.52,e)),n.add($a([[.18,0],[.3,.1],[.34,.3],[.3,.38]],10),i.pot,ot(t,.56,e));let s=ke(Math.floor(t*13+e*5+99));for(let o=0;o<6;o++){let a=s()*Math.PI*2,l=s()*.2;n.add(new Ge(.09,0),o%3?i.pink:i.orange,ot(t+Math.cos(a)*l,.98+s()*.1,e+Math.sin(a)*l))}n.add(new Ge(.22,0),i.leaf2,ot(t,.9,e)),this.circles.push({x:t,z:e,r:.45,y:0})}stoneLantern(t,e,i){let n=this.M,s=this.batch;s.add(Ei(.42,.46,.2,8),n.stoneGrey,ot(t,e+.1,i)),s.add(Ei(.3,.38,.16,8),n.stoneLight,ot(t,e+.28,i)),s.add(Ei(.13,.15,.9,8),n.stoneLight,ot(t,e+.8,i)),s.add(Ei(.36,.2,.2,8),n.stoneLight,ot(t,e+1.32,i)),s.add(Ei(.22,.22,.42,8),n.lampGlow,ot(t,e+1.63,i));for(let o=0;o<4;o++){let a=o/4*Math.PI*2+Math.PI/4;s.add(Lt(.1,.44,.1,1),n.stoneLight,ot(t+Math.cos(a)*.24,e+1.63,i+Math.sin(a)*.24))}s.add(new me(.52,.32,8),n.stoneGrey,ot(t,e+2,i)),s.add(new be(.1,6,4),n.stoneGrey,ot(t,e+2.22,i)),this.lanterns.push(new A(t,e+1.65,i)),this.circles.push({x:t,z:i,r:.45,y:e})}pond(t,e,i,n){let s=this.M,o=this.batch,a=e-t,l=n-i,c=(t+e)/2,h=(i+n)/2,d=.4,u=.35;o.add(Lt(a,u,d,2),s.blockDark,ot(c,u/2,i+d/2)),o.add(Lt(a,u,d,2),s.blockDark,ot(c,u/2,n-d/2)),o.add(Lt(d,u,l-2*d,2),s.blockDark,ot(t+d/2,u/2,h)),o.add(Lt(d,u,l-2*d,2),s.blockDark,ot(e-d/2,u/2,h));let f=new at(new Ce(a-2*d,l-2*d),jx());f.rotation.x=-Math.PI/2,f.position.set(c,.2,h),this.root.add(f),this.water=f;let p=ke(5);for(let x=0;x<9;x++){let g=t+.9+p()*(a-1.8),m=i+.9+p()*(l-1.8),M=.3+p()*.25;o.add(Ei(M,M,.03,9),s.lotus,ot(g,.23,m)),p()<.45&&o.add(new me(.12,.22,5),s.pink,ot(g+.1,.36,m))}this.blockRects.push({x0:t-.1,x1:e+.1,z0:i-.1,z1:n+.1})}corridor(t){let e=this.M,i=this.batch,n=t*22,s=t*26.2,o=(n+s)/2,a=-34,l=22,c=l-a,h=(a+l)/2;i.add(Lt(4.4,.5,c,2),e.block,ot(o,.25,h)),i.add(Lt(4.4,.02,c,4),e.slab,ot(o,.51,h)),i.add(Lt(.4,3.6,c,2),e.plaster,ot(t*25.9,2.3,h));let d=Ei(.17,.19,3.3,8);for(let u=a+1;u<=l-1;u+=3)i.add(d,e.wood,ot(t*22.5,2.15,u)),i.add(Lt(.4,.14,.4,1),e.stoneLight,ot(t*22.5,.56,u));i.add(Lt(.3,.36,c,4),e.dancheong,ot(t*22.5,3.85,h)),this.roof({cx:t*24.2,cy:4.05,cz:h,w:3.8,d:c,h:1.25,overhang:1,lift:0,ridge:!0,power:1.5})}northWall(){let t=this.M;this.batch.add(Lt(44,3.2,.6,2),t.plaster,ot(0,1.6,-33.9)),this.roof({cx:0,cy:3.2,cz:-33.9,w:44,d:.5,h:.5,overhang:.55,lift:0,ridge:!0,power:1.2})}southWall(){let t=this.M,e=this.batch;for(let i of[-1,1]){let n=i*3.9,s=i*22,o=(n+s)/2,a=Math.abs(s-n);e.add(Lt(a,1.2,.7,2),t.block,ot(o,.6,21.9)),e.add(Lt(a+.1,.12,.85,2),t.stoneLight,ot(o,1.26,21.9)),this.blockRects.push({x0:Math.min(n,s),x1:Math.max(n,s),z0:21.4,z1:22.4}),e.add(Lt(.7,3.4,.7,1),t.wood,ot(i*3.6,1.7,21.9)),e.add(Lt(1,.3,1,1),t.stoneLight,ot(i*3.6,.15,21.9)),this.circles.push({x:i*3.6,z:21.9,r:.5,y:0})}e.add(Lt(7.9,.5,.8,4),t.dancheong,ot(0,3.5,21.9)),this.roof({cx:0,cy:3.75,cz:21.9,w:8,d:1.1,h:.9,overhang:.8,lift:.3,ridge:!0})}scatterGrass(){let t=this.grassAreas,e=0;for(let f of t)e+=Math.floor((f.x1-f.x0)*(f.z1-f.z0)*26);let i=new fe;i.setAttribute("position",new zt([-.05,0,0,.05,0,0,0,.38,0],3)),i.setAttribute("normal",new zt([0,1,0,0,1,0,0,1,0],3)),i.setAttribute("color",new zt([.55,.62,.5,.55,.62,.5,1.15,1.12,.95],3));let n=Wt({color:16777215,vertexColors:!0,side:xe}),s=new sr(i,n,e),o=new Qt,a=new Te,l=new ui,c=new lt,h=ke(99),d=["#6f9c48","#5d8c3e","#86ad52","#7aa04a"].map(f=>new lt(f)),u=0;for(let f of t){let p=Math.floor((f.x1-f.x0)*(f.z1-f.z0)*26);for(let x=0;x<p;x++){let g=f.x0+h()*(f.x1-f.x0),m=f.z0+h()*(f.z1-f.z0);l.set(0,h()*Math.PI,0);let M=.7+h()*.7;o.compose(new A(g,f.y,m),a.setFromEuler(l),new A(M,M*(.8+h()*.6),M)),s.setMatrixAt(u,o);let T=Math.sin(g*.7)*Math.cos(m*.9)*.5+.5;c.copy(d[Math.floor(h()*d.length)]).lerp(new lt("#a8b85a"),T*.35),h()<.015&&c.set(h()<.5?"#f2eee0":"#f0c850"),s.setColorAt(u,c),u++}}s.receiveShadow=!0,s.castShadow=!1,s.userData.noOutline=!0,qa(s,Ya.grass,{shadow:!1}),this.root.add(s)}buildNav(){let n=Math.ceil(88),s=Math.ceil(64/.5),o=n*s,a=new Float32Array(o),l=[new Uint8Array(o),new Uint8Array(o)];for(let c=0;c<s;c++)for(let h=0;h<n;h++){let d=-22+(h+.5)*.5,u=-34+(c+.5)*.5,f=c*n+h,p=a[f]=this.heightAt(d,u);l[0][f]=this.isBlocked(d,u,zs[0],p)?0:1,l[1][f]=this.isBlocked(d,u,zs[1],p)?0:1}this.nav={cs:.5,x0:-22,z0:-34,nx:n,nz:s,h:a,ok:l,dist:[new Float32Array(o),new Float32Array(o)],target:[-1,-1],heap:new Int32Array(o*8),hd:new Float32Array(o*8)}}navCell(t,e){let i=this.nav,n=Math.floor((t-i.x0)/i.cs),s=Math.floor((e-i.z0)/i.cs);return n<0||s<0||n>=i.nx||s>=i.nz?-1:s*i.nx+n}navLink(t,e,i){let n=this.nav;return n.ok[i][e]&&Math.abs(n.h[t]-n.h[e])<=.35}updateFlow(t,e,i){let n=this.nav;if(!n)return;let s=this.navCell(t,e);if(s<0)return;if(!n.ok[i][s]){let f=-1,p=1e9,x=s%n.nx,g=Math.floor(s/n.nx);for(let m=-4;m<=4;m++)for(let M=-4;M<=4;M++){let T=x+M,v=g+m;if(T<0||v<0||T>=n.nx||v>=n.nz)continue;let S=v*n.nx+T;n.ok[i][S]&&Math.abs(n.h[S]-n.h[s])<.5&&M*M+m*m<p&&(p=M*M+m*m,f=S)}if(f<0)return;s=f}if(n.target[i]===s)return;n.target[i]=s;let o=n.dist[i];o.fill(1/0),o[s]=0;let a=n.heap,l=n.hd,c=0,h=(f,p)=>{let x=c++;for(;x>0;){let g=x-1>>1;if(l[g]<=p)break;a[x]=a[g],l[x]=l[g],x=g}a[x]=f,l[x]=p},d=()=>{let f=a[0],p=a[--c],x=l[c],g=0;for(;;){let m=2*g+1;if(m>=c||(m+1<c&&l[m+1]<l[m]&&m++,l[m]>=x))break;a[g]=a[m],l[g]=l[m],g=m}return a[g]=p,l[g]=x,f};h(s,0);let u=n.nx;for(;c>0;){let f=l[0],p=d();if(f>o[p])continue;let x=p%u,g=(p-x)/u;for(let m=0;m<8;m++){let M=Vc[m],T=Wc[m],v=x+M,S=g+T;if(v<0||S<0||v>=u||S>=n.nz)continue;let w=S*u+v;if(!this.navLink(p,w,i)||M&&T&&(!this.navLink(p,g*u+v,i)||!this.navLink(p,S*u+x,i)))continue;let R=f+(M&&T?1.4142:1);R<o[w]&&(o[w]=R,h(w,R))}}}navDir(t,e){let i=this.nav;if(!i)return null;let n=this.navCell(t.x,t.z);if(n<0)return null;let s=i.dist[e];if(!isFinite(s[n])){let p=-1,x=1/0,g=n%i.nx,m=Math.floor(n/i.nx);for(let M=0;M<8;M++){let T=g+Vc[M],v=m+Wc[M];if(T<0||v<0||T>=i.nx||v>=i.nz)continue;let S=v*i.nx+T;s[S]<x&&Math.abs(i.h[S]-i.h[n])<=.5&&(x=s[S],p=S)}if(p<0)return null;n=p}let o=[],a=n;for(let p=0;p<6;p++){let x=a%i.nx,g=(a-x)/i.nx,m=a,M=s[a];for(let T=0;T<8;T++){let v=x+Vc[T],S=g+Wc[T];if(v<0||S<0||v>=i.nx||S>=i.nz)continue;let w=S*i.nx+v;s[w]<M&&this.navLink(a,w,e)&&(M=s[w],m=w)}if(m===a)break;a=m,o.push(a)}if(!o.length)return null;let l=p=>{let x=p%i.nx,g=(p-x)/i.nx;return[i.x0+(x+.5)*i.cs,i.z0+(g+.5)*i.cs]},c,h;for(let p=o.length-1;p>=0&&([c,h]=l(o[p]),!(p===0||this.clearLine(t.x,t.z,c,h,zs[e])));p--);let d=c-t.x,u=h-t.z,f=Math.hypot(d,u);return f<.05?null:{x:d/f,z:u/f,dist:s[n]*i.cs}}clearLine(t,e,i,n,s){let o=Math.hypot(i-t,n-e),a=Math.ceil(o/.35),l=this.heightAt(t,e);for(let c=1;c<=a;c++){let h=c/a,d=t+(i-t)*h,u=e+(n-e)*h;if(this.isBlocked(d,u,s,l))return!1;l=this.heightAt(d,u)}return!0}setNight(t){for(let e of this.glowMats)e.mat.emissive.copy(e.color).multiplyScalar(t*e.k)}update(t,e){for(let i of this.drums)if(i.shake>0){i.shake=Math.max(0,i.shake-t*2.5);let n=i.shake;i.body.scale.set(1+Math.sin(e*60)*.05*n,1+Math.sin(e*60+1)*.05*n,1),i.body.rotation.z=Math.sin(e*40)*.04*n}this.water&&(this.water.material.uniforms.uNight.value=vi.night.value)}},Kx=[[1,0],[-1,0],[0,1],[0,-1]],zs=[.36,.7],Vc=[1,-1,0,0,1,1,-1,-1],Wc=[0,0,1,-1,1,-1,1,-1];function ot(r,t,e,i=0,n=0,s=0,o=null){let a=new Qt,l=Array.isArray(o)?new A(...o):new A(1,1,1);return a.compose(new A(r,t,e),new Te().setFromEuler(new ui(n,i,s,"YXZ")),l),a}function jx(){return new Ie({uniforms:{uTime:vi.time,uNight:{value:0}},vertexShader:`
      varying vec3 vW;
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform float uTime; uniform float uNight;
      varying vec3 vW;
      vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
      void main(){
        vec2 p = floor(vW.xz * 16.0) / 16.0;
        float w = sin(p.x * 3.1 + uTime * 1.3) + sin(p.y * 2.3 - uTime * 1.1) + sin((p.x + p.y) * 4.7 + uTime * 2.0) * 0.5;
        vec3 deep = vec3(0.16, 0.36, 0.42);
        vec3 c = deep;
        if (w > 1.2) c = vec3(0.30, 0.55, 0.58);
        if (w > 1.75) c = vec3(0.70, 0.86, 0.84);
        if (w < -1.3) c = vec3(0.11, 0.27, 0.33);
        c = lin(c);
        c *= mix(1.0, 0.35, uNight);
        gl_FragColor = vec4(c, 1.0);
      }`})}var $n=null;function Qx(){if($n)return $n;let r=128,t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d");e.imageSmoothingEnabled=!1,e.strokeStyle=e.fillStyle="#fff";let i=r/2,n=(o,a)=>{e.lineWidth=a,e.beginPath(),e.arc(i,i,o,0,Math.PI*2),e.stroke()};n(61,2),n(56,1),n(40,2),n(18,1);for(let o=0;o<8;o++){let a=o/8*Math.PI*2;e.save(),e.translate(i,i),e.rotate(a);for(let l=0;l<3;l++){let c=-50+l*4;o>>l&1?(e.fillRect(-7,c,6,2),e.fillRect(1,c,6,2)):e.fillRect(-7,c,14,2)}e.restore()}e.lineWidth=1,e.beginPath();for(let o=0;o<=8;o++){let a=o*3/8*Math.PI*2,l=i+Math.cos(a)*40,c=i+Math.sin(a)*40;o?e.lineTo(l,c):e.moveTo(l,c)}e.stroke();for(let o=0;o<24;o++){let a=o/24*Math.PI*2;e.fillRect(i+Math.cos(a)*30-1,i+Math.sin(a)*30-1,2,2)}e.beginPath(),e.arc(i,i,12,0,Math.PI),e.fill(),e.globalCompositeOperation="destination-out",e.beginPath(),e.arc(i-6,i,6,0,Math.PI*2),e.fill(),e.globalCompositeOperation="source-over",e.beginPath(),e.arc(i+6,i,6,Math.PI,Math.PI*2),e.fill();let s=e.getImageData(0,0,r,r);for(let o=3;o<s.data.length;o+=4)s.data[o]=s.data[o]>90?255:0;return e.putImageData(s,0,0),$n=new On(t),$n.magFilter=$n.minFilter=de,$n.generateMipmaps=!1,$n}var ty=`
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = aColor; vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize;
}`,ey=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  if (vAlpha <= 0.01) discard;
  gl_FragColor = vec4(vColor * vAlpha, vAlpha);
}`,ja=class{constructor(t,e,i){this.cap=e,this.list=[];let n=this.geo=new fe;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),n.setAttribute("position",new Be(this.pos,3).setUsage(Is)),n.setAttribute("aColor",new Be(this.col,3).setUsage(Is)),n.setAttribute("aSize",new Be(this.size,1).setUsage(Is)),n.setAttribute("aAlpha",new Be(this.alpha,1).setUsage(Is));let s=new Ie({vertexShader:ty,fragmentShader:ey,transparent:!0,depthWrite:!1,blending:i?Oe:Zo,blendSrc:$o,blendDst:xr});this.points=new rr(n,s),this.points.frustumCulled=!1,this.points.renderOrder=i?20:10,t.add(this.points)}emit(t){this.list.length>=this.cap&&this.list.shift();let e=t.color instanceof lt?t.color:new lt(t.color??16777215);this.list.push({x:t.x,y:t.y,z:t.z,vx:t.vx||0,vy:t.vy||0,vz:t.vz||0,g:t.g??0,drag:t.drag??0,life:t.life??1,max:t.life??1,size:t.size??2,endSize:t.endSize??t.size??2,r:e.r,gg:e.g,b:e.b,c2:t.color2?new lt(t.color2):null,alpha:t.alpha??1,flicker:t.flicker||0,floor:t.floor??-100,wob:t.wob||0,seed:Math.random()*100})}update(t,e){let i=this.list,n=0;for(let s=i.length-1;s>=0;s--){let o=i[s];if(o.life-=t,o.life<=0){i.splice(s,1);continue}o.vy-=o.g*t;let a=Math.exp(-o.drag*t);o.vx*=a,o.vy*=a,o.vz*=a,o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.wob&&(o.x+=Math.sin(e*2+o.seed)*o.wob*t,o.z+=Math.cos(e*1.7+o.seed)*o.wob*t),o.y<o.floor&&(o.y=o.floor,o.vy*=-.3,o.vx*=.6,o.vz*=.6)}for(let s of i){if(n>=this.cap)break;let o=s.life/s.max;this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z;let a=s.r,l=s.gg,c=s.b;s.c2&&(a=s.c2.r+(a-s.c2.r)*o,l=s.c2.g+(l-s.c2.g)*o,c=s.c2.b+(c-s.c2.b)*o),this.col[n*3]=a,this.col[n*3+1]=l,this.col[n*3+2]=c,this.size[n]=Math.max(1,Math.round(s.endSize+(s.size-s.endSize)*o));let h=s.alpha*Math.min(1,o*3);s.flicker&&(h*=1-s.flicker*(Math.sin(e*30+s.seed*10)*.5+.5)),this.alpha[n]=h,n++}this.geo.setDrawRange(0,n);for(let s of["position","aColor","aSize","aAlpha"])this.geo.attributes[s].needsUpdate=!0}},Ka=`
varying vec2 vL;
void main(){ vL = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,iy=`
uniform float uProg; uniform float uStart; uniform float uLen; uniform float uInner; uniform float uOuter;
uniform vec3 uColor; uniform float uFade; uniform float uTail;
varying vec2 vL;
void main(){
  float ang = atan(vL.y, vL.x);
  float a = (ang - uStart) / uLen;
  a = fract(a + 2.0);
  float r = (length(vL) - uInner) / (uOuter - uInner);
  float tail = uProg - a;
  if (tail < 0.0 || tail > uTail) discard;
  float b = 1.0 - tail / uTail;
  b *= smoothstep(0.0, 0.6, r);
  b = b * b;
  if (r > 0.86) b = 1.6 * (1.0 - tail / uTail);
  b *= uFade;
  b = floor(b * 4.0 + 0.5) / 4.0;
  if (b <= 0.0) discard;
  gl_FragColor = vec4(uColor * b, b);
}`,ny=`
uniform vec3 uColor; uniform float uAlpha; uniform float uProg; uniform float uMode;
varying vec2 vL;
void main(){
  float r = length(vL);
  float a = 0.0;
  if (uMode < 0.5) { // \uCDA9\uACA9\uD30C \uB9C1
    a = step(0.86, r) * step(r, 1.0);
  } else { // \uC9C0\uBA74 \uACBD\uACE0: \uD14C\uB450\uB9AC + \uCC28\uC624\uB974\uB294 \uC6D0
    a = step(0.92, r) * step(r, 1.0) * 0.9 + step(r, uProg) * 0.35;
    float stripe = step(0.5, fract((vL.x + vL.y) * 4.0));
    a *= 0.75 + 0.25 * stripe;
  }
  a *= uAlpha;
  if (a <= 0.01) discard;
  gl_FragColor = vec4(uColor * a, a);
}`,pd=`
uniform vec3 uColor; uniform float uAlpha;
varying vec2 vL;
void main(){
  float x = abs(vL.x), y = abs(vL.y);
  float a = (1.0 - x * x) * (1.0 - y);
  float core = step(y, 0.35) * (1.0 - x);
  vec3 c = mix(uColor, vec3(1.0), core);
  a = floor(a * uAlpha * 4.0 + 0.5) / 4.0;
  if (a <= 0.0) discard;
  gl_FragColor = vec4(c * a, a);
}`,Qa=class{constructor(t,e){this.scene=t,this.pixel=e,this.add=new ja(t,2500,!0),this.norm=new ja(t,1500,!1),this.arcs=[],this.rings=[],this.numbers=[],this.flashes=[],this.ghosts=[],this.bolts=[],this.circles=[],this.scorches=[],this.streaks=[],this.spikes=[],this.numLayer=document.getElementById("numbers"),this.time=0}spark(t,e,i,n=10,s="#fff6c8",o=6){for(let a=0;a<n;a++){let l=Math.random()*Math.PI*2,c=I(-.2,1),h=o*I(.4,1);this.add.emit({x:t,y:e,z:i,vx:Math.cos(l)*h,vy:c*h*.8,vz:Math.sin(l)*h,g:12,drag:4,life:I(.15,.35),size:3,endSize:1,color:s,color2:"#ff8a30"})}}dust(t,e,i,n=4,s="#c8bca0"){for(let o=0;o<n;o++){let a=Math.random()*Math.PI*2;this.norm.emit({x:t+I(-.15,.15),y:e+.05,z:i+I(-.15,.15),vx:Math.cos(a)*.8,vy:I(.3,.9),vz:Math.sin(a)*.8,drag:3,life:I(.3,.55),size:3,endSize:1,color:s,alpha:.75})}}blueFire(t,e,i,n=20,s=.5){for(let o=0;o<n;o++)this.add.emit({x:t+I(-s,s),y:e+I(0,.4),z:i+I(-s,s),vx:I(-.4,.4),vy:I(1.2,3.2),vz:I(-.4,.4),drag:1.5,life:I(.35,.8),size:I(2,4),endSize:1,color:"#9ff0ff",color2:"#2050ff",flicker:.3})}smoke(t,e,i,n=8){for(let s=0;s<n;s++)this.norm.emit({x:t+I(-.4,.4),y:e+I(0,.5),z:i+I(-.4,.4),vx:I(-.6,.6),vy:I(.5,1.4),vz:I(-.6,.6),drag:2,life:I(.5,.9),size:5,endSize:2,color:"#d8d4e8",alpha:.7})}coins(t,e,i,n=6){for(let s=0;s<n;s++){let o=Math.random()*Math.PI*2;this.add.emit({x:t,y:e+.4,z:i,vx:Math.cos(o)*I(1,2.5),vy:I(3,5),vz:Math.sin(o)*I(1,2.5),g:14,life:I(.7,1.1),size:2,color:"#ffe070",floor:e+.02,flicker:.5})}}slash(t,e,i=0,n={}){let s=n.inner??.45,o=n.outer??1.9,a=n.len??2.8,l=-Math.PI/2-a/2,c=new Hn(s,o,24,1,l,a),h=new Ie({vertexShader:Ka,fragmentShader:iy,uniforms:{uProg:{value:0},uStart:{value:l},uLen:{value:a},uInner:{value:s},uOuter:{value:o},uColor:{value:new lt(n.color||"#e8fbff")},uFade:{value:1},uTail:{value:n.static?1.2:.55}},transparent:!0,depthWrite:!1,blending:Oe,side:xe}),d=new at(c,h),u=new qt;return u.add(d),u.position.copy(t),u.rotation.y=e,d.rotation.x=-Math.PI/2,i===1&&(d.scale.x=-1),i===2&&(d.rotation.set(0,0,0),d.rotation.y=Math.PI/2,d.rotation.z=-Math.PI/2+0,u.position.y+=.2),d.renderOrder=30,this.scene.add(u),n.scale&&u.scale.setScalar(n.scale),this.arcs.push({g:u,mat:h,t:0,dur:n.dur??.2,move:n.move||null,static:!!n.static,fadeAll:!!n.fadeAll,kill:!1}),u}cross(t,e="#bff4ff",i=2.2,n=.38){let s=new qt;s.position.copy(t),s.rotation.x=-Math.PI/4;let o=[];for(let[a,l]of[[.75,1],[-.75,.8]]){let c=new Ie({vertexShader:Ka,fragmentShader:pd,uniforms:{uColor:{value:new lt(e)},uAlpha:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Oe,side:xe}),h=new at(new Ce(2,2),c);h.rotation.z=a,h.scale.set(i*.5*l,.14,1),h.renderOrder=40,s.add(h),o.push(c)}this.scene.add(s),this.flashes.push({g:s,mats:o,t:0,dur:n,size:i})}circle(t,e,i="#b89aff",n=1,s=1.2){let o=new ie({map:Qx(),color:new lt(i),transparent:!0,blending:Oe,depthWrite:!1}),a=new at(new Ce(2,2),o);a.rotation.x=-Math.PI/2,a.position.set(t.x,t.y+.05,t.z),a.renderOrder=22,this.scene.add(a);let l={m:a,mat:o,t:0,dur:n,radius:e,spin:s};return this.circles.push(l),l}scorch(t,e,i="#1a1220",n=2.5){let s=new ie({color:new lt(i),transparent:!0,opacity:.55,depthWrite:!1}),o=new at(new en(e,12),s);o.rotation.x=-Math.PI/2,o.position.set(t.x,t.y+.03,t.z),o.renderOrder=5,this.scene.add(o),this.scorches.push({m:o,mat:s,t:0,dur:n})}arc(t,e,i="#d8c8ff",n=.6){let s=new qt,o=new ie({color:"#ffffff",transparent:!0,blending:Oe,depthWrite:!1}),a=new ie({color:new lt(i),transparent:!0,opacity:.6,blending:Oe,depthWrite:!1}),l=6,c=t.clone();for(let h=1;h<=l;h++){let d=h/l,u=t.clone().lerp(e,d);h<l&&u.add(new A(I(-.35,.35),I(-.3,.3),I(-.35,.35)));let f=c.distanceTo(u),p=u.clone().sub(c).normalize(),x=new Te().setFromUnitVectors(new A(0,1,0),p);for(let[g,m]of[[a,.3*n],[o,.1*n]]){let M=new at(new At(m,f+.04,m),g);M.position.copy(c).lerp(u,.5),M.quaternion.copy(x),M.renderOrder=45,s.add(M)}c=u}this.scene.add(s),this.bolts.push({g:s,mats:[o,a],t:0,dur:.25})}streak(t,e,i="#ffffff",n=.45,s=.35){let o=t.distanceTo(e),a=new Ie({vertexShader:Ka,fragmentShader:pd,uniforms:{uColor:{value:new lt(i)},uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:Oe,side:xe}),l=new at(new Ce(2,2),a);l.position.copy(t).lerp(e,.5),l.rotation.order="YXZ",l.rotation.y=Math.atan2(e.x-t.x,e.z-t.z)+Math.PI/2,l.rotation.x=-Math.PI/2,l.scale.set(o/2,s/2,1),l.renderOrder=42,this.scene.add(l),this.streaks.push({m:l,mat:a,t:0,dur:n,w:s})}iceSpike(t,e=1.2,i=1.3){this.iceMat||(this.iceMat=new Gn({color:new lt("#bfe8ff"),emissive:new lt("#2a5a8a")}));let n=new at(new me(.22+Math.random()*.1,e,5),this.iceMat);n.position.set(t.x,t.y-e/2,t.z),n.rotation.set(I(-.25,.25),I(0,6),I(-.25,.25)),n.castShadow=!0,this.scene.add(n),this.spikes.push({m:n,t:0,life:i,h:e,y0:t.y})}bolt(t,e=1){let i=new qt,n=new ie({color:"#ffffff",transparent:!0,blending:Oe,depthWrite:!1}),s=new ie({color:"#8a6aff",transparent:!0,opacity:.55,blending:Oe,depthWrite:!1}),o=new A(t.x+I(-1.5,1.5),t.y+13,t.z+I(-1.5,1.5)),a=9;for(let l=1;l<=a;l++){let c=l/a,h=new A(t.x+(o.x-t.x)*0+(l<a?I(-.7,.7)*(1-c):0),t.y+13*(1-c),t.z+(l<a?I(-.7,.7)*(1-c):0)),d=o.clone().add(h).multiplyScalar(.5),u=o.distanceTo(h),f=h.clone().sub(o).normalize(),p=new Te().setFromUnitVectors(new A(0,1,0),f);for(let[x,g]of[[s,.42*e],[n,.16*e]]){let m=new at(new At(g,u+.05,g),x);m.position.copy(d),m.quaternion.copy(p),m.renderOrder=45,i.add(m)}if(l>2&&l<a-1&&Math.random()<.45){let x=I(.6,1.4),g=new A(I(-1,1),-I(.3,1),I(-1,1)).normalize(),m=new at(new At(.1*e,x,.1*e),n);m.position.copy(h).addScaledVector(g,x/2),m.quaternion.setFromUnitVectors(new A(0,1,0),g),i.add(m)}o=h}this.scene.add(i),this.bolts.push({g:i,mats:[n,s],t:0,dur:.32}),this.ring(t,1.2*e,"#ffffff",.25)}ghost(t,e="#5ab8ff",i=.28){let n=new ie({color:new lt(e),transparent:!0,opacity:.55,blending:Oe,depthWrite:!1}),s=t.root.clone(!0);s.traverse(o=>{o.isMesh&&(o.material=n,o.castShadow=!1,o.receiveShadow=!1)}),this.scene.add(s),this.ghosts.push({c:s,mat:n,t:0,dur:i})}ring(t,e,i="#ffffff",n=.35,s=0){let o=new en(1,32),a=new Ie({vertexShader:Ka,fragmentShader:ny,uniforms:{uColor:{value:new lt(i)},uAlpha:{value:1},uProg:{value:0},uMode:{value:s}},transparent:!0,depthWrite:!1,blending:Oe}),l=new at(o,a);l.rotation.x=-Math.PI/2,l.position.copy(t),l.position.y+=.04,l.renderOrder=25,this.scene.add(l);let c={m:l,mat:a,t:0,dur:n,radius:e,mode:s,manual:s===1};return l.scale.setScalar(s===1?e:.01),this.rings.push(c),c}removeRing(t){t.dead=!0}number(t,e,i="normal"){let n=document.createElement("div");n.className="dmg "+i,n.textContent=e,this.numLayer.appendChild(n),this.numbers.push({el:n,p:t.clone(),vy:2.6,vx:I(-.6,.6),t:0,life:i==="heal"?1:.85})}update(t){this.time+=t,this.add.update(t,this.time),this.norm.update(t,this.time);for(let e=this.arcs.length-1;e>=0;e--){let i=this.arcs[e];i.t+=t;let n=i.t/i.dur;i.mat.uniforms.uProg.value=i.static?1:Math.min(1.55,n*1.55),i.mat.uniforms.uFade.value=i.fadeAll?Math.max(0,1-n)*(i.alpha??1):n>.7?Math.max(0,1-(n-.7)/.3):1,i.move&&i.move(i,t),(n>=1||i.kill)&&(this.scene.remove(i.g),i.mat.dispose(),i.g.children[0].geometry.dispose(),this.arcs.splice(e,1))}for(let e=this.rings.length-1;e>=0;e--){let i=this.rings[e];if(i.t+=t,!i.manual){let n=i.t/i.dur;i.m.scale.setScalar(.2+i.radius*Math.sqrt(n)),i.mat.uniforms.uAlpha.value=1-n,n>=1&&(i.dead=!0)}i.dead&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.rings.splice(e,1))}for(let e=this.flashes.length-1;e>=0;e--){let i=this.flashes[e];i.t+=t;let n=i.t/i.dur,s=Math.min(1,i.t/.06);i.g.children.forEach((o,a)=>{o.scale.x=i.size*.5*(a?.8:1)*(.3+.7*s),o.scale.y=.14*(1-n*.7)});for(let o of i.mats)o.uniforms.uAlpha.value=Math.max(0,1-n*n);if(n>=1){this.scene.remove(i.g);for(let o of i.mats)o.dispose();i.g.children.forEach(o=>o.geometry.dispose()),this.flashes.splice(e,1)}}for(let e=this.circles.length-1;e>=0;e--){let i=this.circles[e];i.t+=t;let n=i.t/i.dur,s=Math.min(1,i.t/.18);i.m.scale.setScalar(i.radius*(.4+.6*(1-Math.pow(1-s,3)))),i.m.rotation.z+=t*i.spin,i.mat.opacity=n>.75?Math.max(0,1-(n-.75)/.25):1,(n>=1||i.dead)&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.circles.splice(e,1))}for(let e=this.scorches.length-1;e>=0;e--){let i=this.scorches[e];i.t+=t,i.mat.opacity=.55*Math.max(0,1-i.t/i.dur),i.t>=i.dur&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.scorches.splice(e,1))}for(let e=this.streaks.length-1;e>=0;e--){let i=this.streaks[e];i.t+=t;let n=i.t/i.dur;i.mat.uniforms.uAlpha.value=Math.max(0,1-n*n),i.m.scale.y=i.w/2*(1-n*.8),n>=1&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.streaks.splice(e,1))}for(let e=this.spikes.length-1;e>=0;e--){let i=this.spikes[e];i.t+=t;let n=Math.min(1,i.t/.12);if(i.m.position.y=i.y0-i.h/2+i.h*(1-Math.pow(1-n,3))*.95,i.t>=i.life){for(let s=0;s<6;s++)this.add.emit({x:i.m.position.x,y:i.y0+I(.2,i.h),z:i.m.position.z,vx:I(-2,2),vy:I(1,4),vz:I(-2,2),g:12,life:I(.3,.6),size:3,endSize:1,color:"#e8f8ff",color2:"#5aa8ff"});this.scene.remove(i.m),i.m.geometry.dispose(),this.spikes.splice(e,1)}}for(let e=this.bolts.length-1;e>=0;e--){let i=this.bolts[e];i.t+=t;let n=i.t/i.dur;i.g.visible=n<.35||Math.floor(i.t*40)%2===0,i.mats[0].opacity=Math.max(0,1-n),i.mats[1].opacity=.55*Math.max(0,1-n),n>=1&&(this.scene.remove(i.g),i.g.traverse(s=>s.geometry&&s.geometry.dispose()),i.mats.forEach(s=>s.dispose()),this.bolts.splice(e,1))}for(let e=this.ghosts.length-1;e>=0;e--){let i=this.ghosts[e];i.t+=t;let n=i.t/i.dur;i.mat.opacity=.55*Math.max(0,1-n),n>=1&&(this.scene.remove(i.c),i.mat.dispose(),this.ghosts.splice(e,1))}for(let e=this.numbers.length-1;e>=0;e--){let i=this.numbers[e];i.t+=t,i.vy-=7*t,i.p.y+=i.vy*t,i.p.x+=i.vx*t;let n=this.pixel.project(i.p),s=this.pixel.pixelSize,o=Math.round(n.x/s)*s,a=Math.round(n.y/s)*s,l=i.t<.08?1.6-i.t*7:1;i.el.style.transform=`translate(${o}px, ${a}px) translate(-50%, -50%) scale(${l.toFixed(2)})`,i.el.style.opacity=i.t>i.life*.6?String(1-(i.t-i.life*.6)/(i.life*.4)):"1",i.t>=i.life&&(i.el.remove(),this.numbers.splice(e,1))}}};var tl=class{constructor(){this.ctx=null,this.musicOn=!0,this.mood="day",this.nextNote=0,this.step=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.55,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=.32;let i=e.createDelay();i.delayTime.value=.28;let n=e.createGain();n.gain.value=.3;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this.music.connect(this.master),this.music.connect(i),i.connect(s),s.connect(n),n.connect(i),s.connect(this.master);let o=e.sampleRate;this.noiseBuf=e.createBuffer(1,o,e.sampleRate);let a=this.noiseBuf.getChannelData(0);for(let l=0;l<o;l++)a[l]=Math.random()*2-1;this.nextNote=e.currentTime+.3}noise(t,{type:e="bandpass",f0:i=1e3,f1:n=1e3,q:s=1,gain:o=.3,attack:a=.005,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime,d=c.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.7+Math.random()*.6;let u=c.createBiquadFilter();u.type=e,u.Q.value=s,u.frequency.setValueAtTime(i,h),u.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+t);let f=c.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(o,h+a),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(f),f.connect(l||this.sfx),d.start(h,Math.random()*.5),d.stop(h+t+.05)}tone(t,{type:e="sine",f0:i=440,f1:n=null,gain:s=.3,attack:o=.005,at:a=0,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+a,d=c.createOscillator();d.type=e,d.frequency.setValueAtTime(i,h),n&&d.frequency.exponentialRampToValueAtTime(n,h+t);let u=c.createGain();u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(s,h+o),u.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(l||this.sfx),d.start(h),d.stop(h+t+.05)}play(t){if(this.ctx)switch(t){case"swing":this.noise(.16,{f0:700,f1:3200,q:2.5,gain:.22});break;case"swing3":this.noise(.22,{f0:500,f1:3800,q:2.2,gain:.3}),this.tone(.2,{type:"triangle",f0:900,f1:1800,gain:.05});break;case"hit":this.tone(.14,{f0:160,f1:50,gain:.5}),this.noise(.08,{type:"highpass",f0:2500,f1:1500,gain:.25});break;case"crit":this.tone(.2,{f0:200,f1:45,gain:.6}),this.noise(.12,{type:"highpass",f0:3e3,f1:1200,gain:.3}),this.tone(.18,{type:"square",f0:1320,f1:1760,gain:.04,at:.02});break;case"drum":this.tone(1.1,{f0:95,f1:38,gain:.95,attack:.004}),this.tone(.6,{f0:180,f1:70,gain:.3}),this.noise(.35,{type:"lowpass",f0:900,f1:120,gain:.5});break;case"draw":this.noise(.22,{type:"highpass",f0:2500,f1:6e3,gain:.22,attack:.01}),this.tone(.25,{type:"triangle",f0:2600,f1:3400,gain:.05}),this.noise(.18,{f0:900,f1:3500,q:2.5,gain:.25,attack:.02});break;case"sheathe":this.tone(.05,{type:"square",f0:2200,f1:1400,gain:.06}),this.noise(.06,{type:"highpass",f0:3e3,f1:2e3,gain:.2}),this.tone(.08,{type:"square",f0:1300,f1:900,gain:.04,at:.04});break;case"bowdraw":this.noise(.22,{f0:300,f1:900,q:6,gain:.08,attack:.08});break;case"bow":this.tone(.18,{type:"triangle",f0:420,f1:180,gain:.18}),this.noise(.12,{f0:2500,f1:800,q:1.5,gain:.2});break;case"bowskill":for(let e=0;e<4;e++)this.tone(.16,{type:"triangle",f0:460-e*30,f1:200,gain:.12,at:e*.04});this.noise(.6,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.03});break;case"arrowhit":this.noise(.06,{type:"highpass",f0:3e3,f1:1500,gain:.18}),this.tone(.07,{f0:260,f1:120,gain:.25});break;case"cast":this.noise(.18,{f0:800,f1:2400,q:2,gain:.15}),this.tone(.25,{type:"sine",f0:880,f1:1320,gain:.06});break;case"fire":this.noise(.4,{type:"lowpass",f0:2400,f1:200,gain:.35,attack:.005}),this.tone(.2,{f0:140,f1:60,gain:.3});break;case"chant":[523,659,784].forEach((e,i)=>this.tone(.35,{type:"sine",f0:e,gain:.06,at:i*.08}));break;case"charge":this.noise(.4,{f0:200,f1:3e3,q:4,gain:.12,attack:.3});break;case"thunder":this.noise(.12,{type:"highpass",f0:5e3,f1:2e3,gain:.4,attack:.002}),this.noise(1.2,{type:"lowpass",f0:900,f1:60,gain:.6,attack:.01}),this.tone(.9,{f0:80,f1:30,gain:.5});break;case"blink":this.tone(.25,{type:"sine",f0:1600,f1:400,gain:.08}),this.noise(.25,{f0:3e3,f1:600,q:3,gain:.15});break;case"freeze":[1568,2093,2637,3136].forEach((e,i)=>this.tone(.4,{type:"triangle",f0:e,f1:e*.98,gain:.05,at:i*.05})),this.noise(.5,{type:"highpass",f0:4e3,f1:6e3,gain:.18,attack:.01}),this.tone(.4,{f0:160,f1:60,gain:.3});break;case"tornado":this.noise(1.6,{f0:300,f1:1600,q:2.5,gain:.3,attack:.2}),this.noise(1.4,{type:"lowpass",f0:600,f1:200,gain:.25,attack:.3});break;case"levelup":[523,659,784,1046,1318].forEach((e,i)=>this.tone(.45,{type:"triangle",f0:e,gain:.1,at:i*.07})),this.noise(.8,{f0:2e3,f1:6e3,q:1,gain:.12,attack:.1});break;case"denied":this.tone(.07,{type:"square",f0:180,gain:.05}),this.tone(.07,{type:"square",f0:140,gain:.05,at:.07});break;case"skill":this.noise(.5,{f0:300,f1:5e3,q:1.8,gain:.32,attack:.02}),this.tone(.45,{type:"sawtooth",f0:220,f1:1760,gain:.05,attack:.02}),this.tone(.6,{type:"triangle",f0:1320,f1:2640,gain:.07,at:.05}),this.tone(.3,{f0:120,f1:50,gain:.4});break;case"skillhit":this.tone(.25,{type:"square",f0:1800,f1:600,gain:.05}),this.noise(.18,{type:"highpass",f0:4e3,f1:1500,gain:.25});break;case"burst":this.noise(.5,{type:"lowpass",f0:3e3,f1:200,gain:.25}),this.tone(.4,{type:"triangle",f0:1760,f1:440,gain:.05});break;case"impact":this.tone(.3,{f0:110,f1:40,gain:.45}),this.noise(.2,{type:"lowpass",f0:1200,f1:150,gain:.3});break;case"dash":this.noise(.25,{type:"lowpass",f0:2400,f1:300,gain:.25,attack:.03});break;case"wave":this.noise(.45,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.05}),this.tone(.4,{type:"triangle",f0:600,f1:1400,gain:.08});break;case"hurt":this.tone(.2,{type:"square",f0:260,f1:90,gain:.12}),this.noise(.12,{f0:1200,f1:400,gain:.25});break;case"poof":this.noise(.4,{type:"lowpass",f0:1800,f1:200,gain:.35,attack:.01}),this.tone(.25,{type:"triangle",f0:500,f1:1500,gain:.08});break;case"spawn":this.tone(.5,{type:"sine",f0:300,f1:900,gain:.08,attack:.1}),this.noise(.5,{f0:300,f1:1500,q:3,gain:.12,attack:.15});break;case"laugh":for(let e=0;e<3;e++)this.tone(.09,{type:"square",f0:760-e*40,f1:620-e*40,gain:.04,at:e*.11});break;case"slam":this.tone(.8,{f0:70,f1:28,gain:.9}),this.noise(.6,{type:"lowpass",f0:600,f1:80,gain:.6});break;case"orb":this.tone(.25,{type:"sine",f0:900,f1:400,gain:.08});break;case"talk":this.tone(.04,{type:"square",f0:520+Math.random()*80,gain:.025});break;case"coin":this.tone(.08,{type:"square",f0:1320,gain:.04}),this.tone(.15,{type:"square",f0:1760,gain:.04,at:.07});break;case"victory":[523,659,784,1046].forEach((e,i)=>this.tone(.5,{type:"triangle",f0:e,gain:.12,at:i*.12,dest:this.sfx}));break;case"block":this.tone(.06,{type:"square",f0:1800,f1:1200,gain:.05});break}}pluck(t,e,i=.18){let n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(t*1.01,e),s.frequency.exponentialRampToValueAtTime(t,e+.08),Math.random()<.3&&(s.frequency.setValueAtTime(t,e+.25),s.frequency.linearRampToValueAtTime(t*1.06,e+.4),s.frequency.linearRampToValueAtTime(t,e+.6));let o=n.createOscillator();o.type="sine",o.frequency.value=t*2;let a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(i,e+.004),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let l=n.createGain();l.gain.value=.25,s.connect(a),o.connect(l),l.connect(a),a.connect(this.music),s.start(e),o.start(e),s.stop(e+1.2),o.stop(e+1.2)}janggu(t,e){let i=this.ctx;if(e==="deong"){let a=i.createOscillator();a.frequency.setValueAtTime(110,t),a.frequency.exponentialRampToValueAtTime(55,t+.2);let l=i.createGain();l.gain.setValueAtTime(.35,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.3),a.connect(l),l.connect(this.music),a.start(t),a.stop(t+.35)}let n=i.createBufferSource();n.buffer=this.noiseBuf;let s=i.createBiquadFilter();s.type="bandpass",s.frequency.value=e==="kung"?400:2400,s.Q.value=1.5;let o=i.createGain();o.gain.setValueAtTime(e==="kung"?.3:.18,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.08),n.connect(s),s.connect(o),o.connect(this.music),n.start(t,Math.random()),n.stop(t+.1)}update(){let t=this.ctx;if(!t||!this.musicOn)return;let e=this.mood==="battle"?146.83:196,i=[0,2,5,7,9,12,14,17,19],n=this.mood==="battle"?.22:.42;for(;this.nextNote<t.currentTime+.25;){let s=this.nextNote,o=this.step,a=this.mood==="battle"?["deong",0,"tta","kung","deong",0,"tta","tta"]:["deong",0,0,"kung",0,"tta",0,0,"kung",0,"tta",0],l=a[o%a.length];l&&this.janggu(s,l);let c=this.mood==="battle"?1:2;if(o%c===0&&Math.random()<(this.mood==="battle"?.75:.6)){this.melIdx=Math.max(0,Math.min(i.length-1,(this.melIdx??4)+Math.floor(Math.random()*5)-2));let h=e*Math.pow(2,i[this.melIdx]/12);this.pluck(h,s,this.mood==="battle"?.13:.16),Math.random()<.25&&this.pluck(h/2,s,.1)}o%16===0&&this.pluck(e/2,s,.12),this.step++,this.nextNote+=n}}toggleMusic(){return this.musicOn=!this.musicOn,this.music&&(this.music.gain.value=this.musicOn?.32:0),this.musicOn}};var Yi=[{name:"\uC77C\uBC18",color:"#d8d0c0"},{name:"\uACE0\uAE09",color:"#6ad06a"},{name:"\uD76C\uADC0",color:"#5ab0ff"},{name:"\uC601\uC6C5",color:"#c87aff"},{name:"\uC804\uC124",color:"#ffc040"}],Tn={sword:[{id:"sw0",name:"\uC218\uB828\uC6A9 \uD658\uB3C4",tier:0,atk:0,style:{}},{id:"sw1",name:"\uAC15\uCCA0 \uD658\uB3C4",tier:1,atk:.15,style:{blade:"#aeb8c4",guard:"#2a2830",wrap:"#3a2a20"}},{id:"sw2",name:"\uCCAD\uAC15 \uC6D4\uAD11\uAC80",tier:2,atk:.32,style:{blade:"#bfe4ff",edge:"#ffffff",guard:"#c8d4e0",wrap:"#2a3a6a",glow:"#3a9aff"}},{id:"sw3",name:"\uC790\uC6B4 \uBE44\uB3C4",tier:3,atk:.5,style:{blade:"#d8c8ff",edge:"#ffffff",guard:"#8a5ad8",wrap:"#3a1a5a",glow:"#9a5aff",long:1.12}},{id:"sw4",name:"\uD751\uB8E1\uB3C4",tier:4,atk:.75,style:{blade:"#2a2830",edge:"#ff6a3a",guard:"#e0b040",wrap:"#8a1a1a",glow:"#ff3010",long:1.2}}],mage:[{id:"mg0",name:"\uBCF5\uC22D\uC544\uB098\uBB34 \uC9C0\uD321\uC774",tier:0,atk:0,style:{}},{id:"mg1",name:"\uCCAD\uB3D9 \uC9C0\uD321\uC774",tier:1,atk:.15,style:{wood:"#3a2a1a",moon:"#b07a3a",orb:"#8affc8",orbGlow:"#2aff9a"}},{id:"mg2",name:"\uC6D4\uC7A5\uC11D \uC9C0\uD321\uC774",tier:2,atk:.32,style:{wood:"#e0e0f0",moon:"#c8d4e0",orb:"#bfe8ff",orbGlow:"#4ab0ff"}},{id:"mg3",name:"\uB1CC\uC804 \uC9C0\uD321\uC774",tier:3,atk:.5,style:{wood:"#2a2a40",moon:"#ffe060",orb:"#fff6a0",orbGlow:"#ffd020",big:1.3}},{id:"mg4",name:"\uD654\uB8E1 \uC9C0\uD321\uC774",tier:4,atk:.75,style:{wood:"#2a1414",moon:"#e0b040",orb:"#ff8a4a",orbGlow:"#ff3a00",big:1.5}}],elf:[{id:"bw0",name:"\uBC84\uB4E4 \uD65C",tier:0,atk:0,style:{}},{id:"bw1",name:"\uBB3C\uC18C\uBFD4 \uAC01\uAD81",tier:1,atk:.15,style:{wood:"#3a2a2a",grip:"#c8302c",tips:"#f0ead8"}},{id:"bw2",name:"\uBC14\uB78C\uACB0 \uD65C",tier:2,atk:.32,style:{wood:"#5ac85a",grip:"#e8f0a0",tips:"#ffffff",glow:"#3aff6a"}},{id:"bw3",name:"\uC11C\uB9AC \uD65C",tier:3,atk:.5,style:{wood:"#bfe8ff",grip:"#3a6aaa",tips:"#ffffff",glow:"#4ab0ff",big:1.15}},{id:"bw4",name:"\uC6D4\uAD81",tier:4,atk:.75,style:{wood:"#f0e8ff",grip:"#e0b040",tips:"#ffe080",glow:"#ffd040",big:1.25}}]},el=[{id:"ot0",name:"\uD3C9\uC0C1\uBCF5",tier:0,hp:0,def:0,pal:null},{id:"ot1",name:"\uCCAD\uB8E1 \uBB34\uAD00\uBCF5",tier:1,hp:20,def:.05,pal:{main:"#2b4374",accent:"#c8302c",trim:"#e0b040",dark:"#1f2438"}},{id:"ot2",name:"\uC790\uC6B4 \uBE44\uB2E8\uC637",tier:2,hp:35,def:.08,pal:{main:"#6a3a8a",accent:"#e0b040",trim:"#f0e0a0",dark:"#2a1a3a"}},{id:"ot3",name:"\uBC31\uD638 \uC804\uD3EC",tier:3,hp:55,def:.12,pal:{main:"#eeeae2",accent:"#e08a2a",trim:"#2a2a2a",dark:"#4a4a52"},armor:"light"},{id:"ot4",name:"\uD751\uC6D4 \uAC11\uC8FC",tier:4,hp:80,def:.18,pal:{main:"#2a2a34",accent:"#b02a2a",trim:"#d9a83a",dark:"#18181e"},armor:"heavy"}],Xc=new Map;for(let r of Object.keys(Tn))for(let t of Tn[r])Xc.set(t.id,{...t,kind:"weapon",cls:r});for(let r of el)Xc.set(r.id,{...r,kind:"outfit"});function pi(r){return Xc.get(r)}function md(r){return r?r.kind==="weapon"?`\uACF5\uACA9\uB825 +${Math.round(r.atk*100)}%`:`\uCCB4\uB825 +${r.hp} \xB7 \uBC1B\uB294 \uD53C\uD574 -${Math.round(r.def*100)}%`:""}function gd(r,t,e){let i={blue:.07,red:.12,wisp:.1,boss:1}[r]??0;if(Math.random()>i)return null;let n=1,s=Math.random()+t*.12+(r==="boss"?.55:r==="red"?.1:0);if(s>1.35?n=4:s>1.05?n=3:s>.7&&(n=2),Math.random()<.55){let o=Math.random()<.8?e:["sword","mage","elf"][Math.floor(Math.random()*3)];return Tn[o][n].id}return el[n].id}function xd(r,t){let e=pi(t),i=r.getContext("2d");if(i.clearRect(0,0,16,16),!e)return;let n=Yi[e.tier].color;i.fillStyle="#14101c",i.fillRect(0,0,16,16),i.fillStyle=n,i.globalAlpha=.25,i.fillRect(0,0,16,16),i.globalAlpha=1;let s=(a,l,c)=>{i.fillStyle=c,i.fillRect(a,l,1,1)},o=e.style||{};if(e.kind==="weapon"&&e.cls==="sword"){let a=o.blade||"#c9d4e0";for(let l=0;l<9;l++)s(4+l,11-l,a),s(5+l,11-l,o.edge||"#ffffff");s(3,12,o.guard||"#d9a83a"),s(4,13,o.guard||"#d9a83a"),s(2,11,o.guard||"#d9a83a"),s(5,12,o.guard||"#d9a83a"),s(2,13,o.wrap||"#1c1824"),s(1,14,o.wrap||"#1c1824")}else if(e.kind==="weapon"&&e.cls==="mage"){for(let a=0;a<11;a++)s(3+a*.8,14-a,o.wood||"#5a3e2a");i.fillStyle=o.moon||"#e0b040",i.fillRect(10,2,4,1),i.fillRect(13,3,1,2),i.fillStyle=o.orb||"#b8a8ff",i.fillRect(11,3,2,2)}else if(e.kind==="weapon"){let a=o.wood||"#8a5a32";for(let l=0;l<12;l++){let c=9-Math.round(Math.sin(l/11*Math.PI)*5);s(c,2+l,a)}for(let l=0;l<12;l++)s(10,2+l,"#f0ece0");s(4,7,o.grip||"#3a7a3a"),s(4,8,o.grip||"#3a7a3a")}else{let a=e.pal||{main:"#eeeae0",accent:"#2e4f8f",trim:"#2e4f8f",dark:"#3a3f5a"};i.fillStyle=a.main,i.fillRect(4,3,8,10),i.fillRect(2,4,2,6),i.fillRect(12,4,2,6),i.fillStyle=a.accent,i.fillRect(4,8,8,1),i.fillRect(7,3,2,5),i.fillStyle=a.trim,i.fillRect(2,9,2,1),i.fillRect(12,9,2,1),e.armor&&(i.fillStyle=a.trim,i.fillRect(3,3,3,2),i.fillRect(10,3,3,2))}i.strokeStyle=n,i.strokeRect(.5,.5,15,15)}var pt=r=>new lt(r),qc=new A(0,.17,0),sy=new A(0,.8,0),ry=new A(0,0,0),oy=new Te,Lr=r=>1-Math.pow(1-r,3),An=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function st(r,t,e=0,i=0,n=0){let s=new at(r,t);return s.position.set(e,i,n),s.castShadow=!0,s.receiveShadow=!0,s}var Rn=class{constructor(t){this.cfg=t,this.mats=[];let e=d=>{let u=Wt(d);return u.userData.baseEmissive=(d.emissive||pt("#000")).clone?.()||pt("#000"),this.mats.push(u),u};this.mat=e;let i=t.scale||1;this.root=new qt,this.body=new qt,this.body.scale.setScalar(i),this.root.add(this.body);let n=e({color:pt(t.skin)}),s=t.legLen??.36;this.legLen=s;let o=e({color:pt(t.pants)}),a=e({color:pt(t.shoes||"#26211f")});this.legs=[];for(let d of[-1,1]){let u=new qt;u.position.set(d*.1*(t.wide||1),s,0),u.add(st(new Ss(.075*(t.limb||1),s-.15,3,6),o,0,-s/2+.02,0)),u.add(st(new At(.14,.08,.2),a,0,-s+.04,.03)),this.body.add(u),this.legs.push(u)}if(this.hips=new qt,this.hips.position.y=s,this.body.add(this.hips),this.chest=new qt,this.chest.position.y=t.torsoH??.4,this.hips.add(this.chest),t.type==="mage"){let d=e({color:pt(t.robe)}),u=e({color:pt(t.belt)});this.hips.add(st(new te(.17,.25,.46,10),d,0,.2,0)),this.hips.add(st(new te(.25,.36,.4,12),d,0,-.14,0)),this.hips.add(st(new te(.362,.37,.04,12),u,0,-.33,0)),this.hips.add(st(new te(.228,.235,.06,10),u,0,.1,0));let f=e({color:pt("#f0ead8")});for(let p of[-1,1]){let x=st(new At(.06,.3,.04),f,p*.05,.28,.19);x.rotation.z=p*.5,this.hips.add(x)}this.hips.add(st(new At(.1,.13,.06),e({color:pt("#c8302c")}),-.2,0,.12))}else if(t.type==="elf"){let d=e({color:pt(t.robe)}),u=e({color:pt(t.skirt)}),f=e({color:pt(t.belt)});this.hips.add(st(new te(.15,.21,.42,10),d,0,.2,0)),this.hips.add(st(new te(.21,.3,.2,10),u,0,-.04,0)),this.hips.add(st(new te(.212,.215,.05,10),f,0,.08,0));let p=e({color:pt("#bfe07a")});for(let m of[-1,1]){let M=st(new At(.12,.05,.08),p,m*.09,.4,.12);M.rotation.z=m*.4,this.hips.add(M)}let x=new qt;x.position.set(-.1,.25,-.2),x.rotation.set(-.25,0,.45),x.add(st(new te(.07,.06,.42,8),f,0,0,0));let g=e({color:pt("#f4f0e4")});for(let m=0;m<4;m++)x.add(st(new At(.03,.12,.05),g,(m-1.5)*.03,.27,m%2*.03));this.hips.add(x)}else if(t.type==="hero"||t.type==="guard"){let d=e({color:pt(t.robe)}),u=e({color:pt(t.belt)});this.hips.add(st(new te(.17,.235,.44,10),d,0,.2,0)),this.hips.add(st(new te(.24,.31,.24,10),d,0,-.04,0)),this.hips.add(st(new te(.215,.225,.07,10),u,0,.1,0));let f=e({color:pt(t.collar||"#2a2a36")}),p=st(new At(.05,.26,.04),f,.05,.3,.19);p.rotation.z=.5,this.hips.add(p);let x=st(new At(.05,.26,.04),f,-.05,.3,.19);x.rotation.z=-.5,this.hips.add(x);let g=st(new At(.04,.16,.02),u,.06,.04,.24);g.rotation.z=.2,this.hips.add(g),this.tie=g}else if(t.type==="lady"){let d=e({color:pt(t.robe)}),u=e({color:pt(t.skirt)});this.hips.add(st(new te(.15,.2,.22,10),d,0,.3,0)),this.hips.add(st(new te(.17,.42,.62,12),u,0,-.06,0));let f=e({color:pt("#c23a4a")});this.hips.add(st(new At(.06,.2,.03),f,.04,.18,.18))}else if(t.type==="dokkaebi"){this.hips.add(st(new be(.27,10,8),n,0,.25,.02));let d=e({map:ld()});this.hips.add(st(new te(.25,.29,.2,10),d,0,0,0));let u=e({color:pt("#2b2220")});this.hips.add(st(new te(.262,.262,.05,10),u,0,.1,0))}this.head=new qt,this.head.position.y=t.neck??.27,this.chest.add(this.head);let l=t.headR??.27,c=st(new be(l,14,10),n);c.scale.set(1,.93,.95),this.head.add(c),this.buildFace(l,t),this.buildHair(l,t),this.arms=[];let h=e({color:pt(t.sleeve||t.robe||t.skin)});for(let d of[-1,1]){let u=new qt;u.position.set(d*(t.shoulder??.21),-.03,0);let f=st(new Ss(.068*(t.limb||1),.2,3,6),h,0,-.14,0);u.add(f),t.cuff&&u.add(st(new te(.08,.085,.05,8),e({color:pt(t.cuff)}),0,-.26,0));let p=new qt;p.position.y=-.31,p.add(st(new be(.065*(t.limb||1),6,5),n)),u.add(p),u.userData.hand=p,this.chest.add(u),this.arms.push(u)}this.armR=this.arms[0],this.armL=this.arms[1],this.handR=this.armR.userData.hand,this.handL=this.armL.userData.hand,t.armor&&this.buildArmor(t),t.weapon&&this.buildWeapon(t.weapon),this.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),this.phase=0,this.idleT=Math.random()*10,this.flash=0,this.lean=0,this.deadT=0}buildFace(t,e){let i=this.mat({color:pt(e.eye||"#1b1416")}),n=t*.93;if(e.type==="dokkaebi"){let s=Wt({color:pt("#f4e86a"),emissive:pt("#7a6410")});for(let h of[-1,1]){let d=st(new be(.075,6,5),s,h*.11,.03,n-.04);d.scale.z=.5,this.head.add(d),this.head.add(st(new At(.045,.06,.02),i,h*.11,.03,n+0));let u=st(new At(.12,.035,.03),this.mat({color:pt(e.hair)}),h*.11,.13,n-.02);u.rotation.z=h*.35,this.head.add(u)}let o=st(new At(.26,.07,.04),this.mat({color:pt("#5a1820")}),0,-.11,n-.05);this.head.add(o);let a=this.mat({color:pt("#fbf6e8")});for(let h of[-1,1])this.head.add(st(new me(.025,.07,4),a,h*.08,-.06,n-.03));let l=this.mat({color:pt(e.horn||"#efe2b0")}),c=e.horns??1;for(let h=0;h<c;h++){let d=c===1?0:h?.13:-.13,u=st(new me(.06,.24,6),l,d,t+.06,.02);u.rotation.z=-d*1.5,this.head.add(u)}this.head.add(st(new be(.05,5,4),this.mat({color:new lt(e.skin).multiplyScalar(.8)}),0,-.02,n))}else{for(let o of[-1,1])this.head.add(st(new At(.05,.085,.03),i,o*.095,-.02,n-.01)),this.head.add(st(new At(.02,.025,.01),this.mat({color:pt("#ffffff")}),o*.095+.01,.005,n+.008));let s=this.mat({color:pt("#f0a0a0")});for(let o of[-1,1])this.head.add(st(new At(.06,.025,.02),s,o*.16,-.085,n-.06))}}buildHair(t,e){let i=this.mat({color:pt(e.hair||"#231c1e")});if(e.type==="dokkaebi"){for(let s=0;s<9;s++){let o=s/9*Math.PI*2,a=st(new me(.07,.22,4),i),l=new A(Math.cos(o)*.8,.55,Math.sin(o)*.8-.25).normalize();a.position.copy(l).multiplyScalar(t*.95),a.quaternion.setFromUnitVectors(new A(0,1,0),l),this.head.add(a)}return}let n=st(new be(t*1.06,14,8,0,Math.PI*2,0,Math.PI*.5),i);n.rotation.x=-.35,n.position.set(0,.02,-.02),this.head.add(n);for(let s=-2;s<=2;s++){let o=st(new At(.09,.12,.06),i,s*.07,t*.62,t*.68);o.rotation.x=.5,o.rotation.z=s*.15,this.head.add(o)}if(e.type==="hero"){this.head.add(st(new be(.09,8,6),i,0,t+.04,-.06));let s=st(new Li(t*.98,.025,4,16),this.mat({color:pt("#c8302c")}),0,.09,0);s.rotation.x=Math.PI/2-.3,this.head.add(s);let o=new qt;o.position.set(0,.06,-t*.95);let a=st(new At(.07,.36,.02),this.mat({color:pt("#c8302c")}),0,-.18,0);o.add(a),this.head.add(o),this.tail=o}else if(e.type==="mage"){let s=this.mat({color:pt("#16141c")}),o=t*.66;this.head.add(st(new te(.4,.4,.022,18),s,0,o,0)),this.head.add(st(new te(.13,.15,.26,12),s,0,o+.13,0)),this.head.add(st(new te(.152,.152,.03,12),this.mat({color:pt("#6a5ad8")}),0,o+.03,0));let a=this.mat({color:pt("#e0a84a")});for(let l of[-1,1])for(let c=0;c<4;c++)this.head.add(st(new be(.022,4,3),a,l*(.22-c*.015),o-.06-c*.07,.06))}else if(e.type==="elf"){this.head.add(st(new At(.46,.55,.14),i,0,-.2,-.2));for(let a of[-1,1]){this.head.add(st(new At(.08,.38,.1),i,a*.25,-.12,.06));let l=st(new me(.045,.2,4),this.mat({color:pt(e.skin)}),a*.3,.04,-.02);l.rotation.z=-a*1.15,this.head.add(l)}let s=this.mat({color:pt("#ff9ac0")});this.head.add(st(new Ge(.06,0),s,.2,.18,.1)),this.head.add(st(new Ge(.035,0),this.mat({color:pt("#fff0a0")}),.22,.2,.14));let o=new qt;o.position.set(0,-.3,-.24),o.add(st(new At(.3,.32,.06),i,0,-.16,0)),this.head.add(o),this.tail=o}else if(e.type==="guard"){let s=this.mat({color:pt("#1d1b22")});this.head.add(st(new te(.44,.44,.03,16),s,0,t*.62,0)),this.head.add(st(new be(.2,10,6,0,Math.PI*2,0,Math.PI/2),s,0,t*.62,0)),this.head.add(st(new be(.05,5,4),this.mat({color:pt("#d0a030")}),0,t*.62+.22,0)),this.head.add(st(new me(.05,.15,5),this.mat({color:pt("#c8302c")}),0,t*.62+.3,0))}else e.type==="lady"&&(this.head.add(st(new be(.13,8,6),i,0,-.05,-t*.95)),this.head.add(st(new At(.3,.025,.025),this.mat({color:pt("#e0b040")}),0,-.04,-t*1.1)))}buildArmor(t){let e=t.armor==="heavy",i=this.mat({color:pt(t.trim||"#d9a83a")}),n=this.mat({color:pt(t.pants||"#2a2a34")});for(let s of[-1,1]){let o=st(new At(e?.2:.16,.08,e?.24:.2),i,s*(e?.25:.23),0,0);if(o.rotation.z=s*-.35,this.chest.add(o),e){let a=st(new At(.17,.06,.22),n,s*.28,-.07,0);a.rotation.z=s*-.5,this.chest.add(a)}}this.hips.add(st(new At(.26,e?.26:.18,.06),i,0,.24,.17)),e&&(this.hips.add(st(new At(.42,.14,.06),n,0,-.06,.24)),this.head.add(st(new At(.06,.12,.03),i,0,.2,.28)))}buildWeapon(t){let e=this.handR,i=new qt,n=(s,o,a)=>(s.rotation[o]=a,s);if(t==="sword"){let s=this.cfg.wstyle||{},o=this.mat({color:pt(s.blade||"#c9d4e0"),emissive:pt("#000000")}),a=this.mat({color:pt(s.edge||"#ffffff"),emissive:pt("#000000")}),l=this.mat({color:pt(s.wrap||"#1c1824")}),c=this.mat({color:pt("#d8d0e8")}),h=this.mat({color:pt(s.guard||"#d9a83a")});this.glowColor=s.glow?pt(s.glow):null;let d=this.mat({color:pt("#141218")});for(let T=0;T<6;T++)i.add(st(new te(.023,.023,.045,6),T%2?c:l,0,.12-T*.045,0));i.add(st(new te(.026,.026,.03,6),h,0,.16,0));let u=st(new te(.075,.075,.022,10),d,0,-.13,0);i.add(u),i.add(n(st(new Li(.072,.008,4,12),h,0,-.13,0),"x",Math.PI/2)),i.add(st(new At(.03,.05,.045),h,0,-.165,0));let f=7,p=1.08*(s.long||1),x=-.19,g=0,m=0;for(let T=0;T<f;T++){let v=p/f,S=1-T/f*.35,w=new qt;w.position.set(0,x,g),w.rotation.x=m;let R=st(new At(.03,v+.012,.068*S),o,0,-v/2,-.004),y=st(new At(.034,v+.012,.02),a,0,-v/2,.032*S);w.add(R,y),i.add(w),x-=Math.cos(m)*v,g-=Math.sin(m)*v,m-=.035}let M=st(new me(.036,.14,4),a,0,x-.06,g-.002);if(M.rotation.x=Math.PI+m,M.scale.set(.55,1,1),i.add(M),this.bladeMat=o,this.edgeMat=a,this.cfg.type==="hero"){let T=new qt;T.position.set(.21,.1,.12),T.rotation.set(1.22,0,.18);let v=this.mat({color:pt("#1a1420")}),S=1.2*(s.long||1);T.add(st(new At(.046,S,.088),v,0,-S/2,.004)),T.add(st(new At(.052,.045,.094),h,0,-S+.02,.004)),T.add(st(new At(.052,.05,.096),this.mat({color:pt("#c8302c")}),0,-.12,.004)),T.add(st(new At(.052,.03,.096),h,0,-.015,.004)),this.hips.add(T),this.saya=T}}else if(t==="club"){let s=this.mat({color:pt("#7a4a2a")}),o=this.mat({color:pt("#c8c0b0")}),a=st(new te(.11,.045,.75,7),s,0,-.32,0);a.rotation.x=Math.PI,i.add(a);for(let l=0;l<6;l++){let c=l/6*Math.PI*2;i.add(n(st(new me(.03,.07,4),o,Math.cos(c)*.1,-.55+l%2*.1,Math.sin(c)*.1),"z",-Math.cos(c)*1.5))}}else if(t==="goldclub"){let s=this.mat({color:pt("#e0b040"),emissive:pt("#000")}),o=st(new te(.14,.05,.85,8),s,0,-.36,0);o.rotation.x=Math.PI,i.add(o);for(let a=0;a<8;a++){let l=a/8*Math.PI*2;i.add(n(st(new me(.035,.09,4),s,Math.cos(l)*.13,-.62+a%2*.12,Math.sin(l)*.13),"z",-Math.cos(l)*1.5))}}else if(t==="staff"){let s=this.cfg.wstyle||{},o=s.big||1,a=this.mat({color:pt(s.wood||"#5a3e2a")}),l=this.mat({color:pt(s.moon||"#e0b040")});if(i.add(st(new te(.028,.034,1.55,6),a,0,.35,0)),i.add(n(st(new Li(.14*o,.022*o,4,12,Math.PI*1.4),l,0,1.2,0),"z",-Math.PI*.2)),o>1.2)for(let u of[-1,1])i.add(n(st(new me(.03,.18,4),l,u*.14,1.05,0),"z",u*.6));let c=this.mat({color:pt(s.orb||"#b8a8ff"),emissive:pt("#000000")});this.orbMat=c,this.glowColor=pt(s.orbGlow||"#6a4aff"),i.add(st(new Ge(.075*o,1),c,0,1.2,0));let h=new ie({color:new lt("#f2d36b"),side:xe}),d=new at(new Ce(.08,.2),h);d.position.set(.05,1,0),i.add(d)}else if(t==="bow"){let s=this.cfg.wstyle||{},o=s.big||1,a=this.mat({color:pt(s.wood||"#8a5a32"),emissive:pt("#000000")});this.glowColor=s.glow?pt(s.glow):null,this.bowMat=a;let l=new kn(new A(0,.1,.5*o),new A(0,-.22*o,0),new A(0,.1,-.5*o));if(i.add(st(new hr(l,10,.024,4),a)),i.add(st(new At(.05,.05,.12),this.mat({color:pt(s.grip||"#3a7a3a")}),0,-.1,0)),s.tips)for(let d of[-1,1])i.add(st(new At(.05,.05,.1),this.mat({color:pt(s.tips)}),0,.1,d*.5*o));let c=new ie({color:new lt("#f0ece0")});this.bowEnds=[new A(0,.1,.5*o),new A(0,.1,-.5*o)],this.bowStrings=[0,1].map(()=>{let d=new at(new At(.012,1,.012),c);return i.add(d),d});let h=new qt;h.add(st(new At(.02,.72,.02),this.mat({color:pt("#9a7a52")}),0,-.36,0)),h.add(n(st(new me(.03,.09,4),this.mat({color:pt("#d8dde4")}),0,-.76,0),"x",Math.PI)),this.nockArrow=h,i.add(h),this.setBowDraw(0),i.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),this.handL.add(i),this.weapon=i;return}else if(t==="spear"){let s=this.mat({color:pt("#6a4a32")}),o=this.mat({color:pt("#cfd6de")}),a=st(new te(.025,.025,2,5),s,0,.2,0);i.add(a),i.add(st(new me(.05,.25,4),o,0,1.3,0)),i.add(n(st(new me(.06,.1,6),this.mat({color:pt("#c8302c")}),0,1.13,0),"x",Math.PI))}i.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(i),this.weapon=i,this.saya&&(this.saya.add(i),i.position.copy(qc),i.quaternion.identity(),this.sheathed=!0,this.wStage="in")}setBowDraw(t){if(!this.bowStrings)return;let e=new A(0,.1+.42*t,0);this.bowStrings.forEach((i,n)=>{let s=this.bowEnds[n],o=new A().subVectors(e,s),a=o.length();i.position.copy(s).addScaledVector(o,.5),i.scale.set(1,a,1),i.quaternion.setFromUnitVectors(new A(0,1,0),o.normalize())}),this.nockArrow.position.copy(e),this.nockArrow.visible=t>.15}unsheathe(){!this.saya||!this.sheathed||(this.handR.attach(this.weapon),this.sheathed=!1,this.wStage="hand")}sheathe(){!this.saya||this.sheathed||(this.saya.attach(this.weapon),this.sheathed=!0,this.wStage="align",this.wStageT=0)}updateWeapon(t){if(!this.saya)return;let e=this.weapon,i,n;this.wStage==="hand"?(i=ry,n=26):this.wStage==="align"?(i=sy,n=22,this.wStageT+=t,this.wStageT>.16&&(this.wStage="slide",this.wStageT=0)):this.wStage==="slide"?(i=qc,n=16,this.wStageT+=t,this.wStageT>.22&&(this.wStage="in",this.justSheathed=!0)):(i=qc,n=30);let s=1-Math.exp(-n*t);e.position.lerp(i,s),e.quaternion.slerp(oy,s)}setFlash(t){if(t!==this._lastFlash){this._lastFlash=t;for(let e of this.mats)t>0?e.emissive.setRGB(t,t*.95,t*.9):e.emissive.set(0,0,0)}}animate(t,e){let i=e.speed||0,n=Pe(i/4,0,1);this.idleT+=t,n>.05&&(this.phase+=t*(6+i*1.6));let s=this.phase,o=Math.sin(s)*n,a=o*.9,l=-o*.9,c=-o*.7-.25,h=.12,d=0,u=o*.7,f=-.12,p=0,x=.08*n,g=Math.abs(Math.cos(s))*.06*n,m=Math.sin(this.idleT*2.4)*.012*(1-n);this.chest.position.y=(this.cfg.torsoH??.4)+m;let M=0,T=0,v=0;this.cfg.weapon==="spear"&&(c=-.35,h=.25,v=-1.2);let S=this.cfg.weapon==="sword";S&&!this.sheathed&&(c=-o*.18-.2,v=-1.2),S&&this.saya&&(u=-.5+o*.12,f=.18);let w=this.cfg.weapon==="staff",R=.22;w&&(c=-.3-o*.15,h=.18);let y=this.cfg.weapon==="bow",E=0;if(y&&(u=-.3+o*.3,f=-.08),e.attack&&e.attack.kind>=20){let D=e.attack.t,B=e.attack.kind,L=Lr(Pe(D/.45,0,1)),z=D>.45?Lr(Pe((D-.45)/.2,0,1)):0,H=1-An(Pe((D-.7)/.3,0,1)),X=Math.min(1,L*1.6)*H;E=L*(1-z),u=It(u,B===23?-2.45:-1.55,X),f=It(f,.06,X),B===23&&(x=-.3*X),c=It(c,(B===23?-2.2:-1.42)+.35*z,X),h=It(h,-.62+.5*z,X),p=(B===21?It(-.7,.5,z):-.4)*H,a=.3*H,l=-.2*H}else if(e.attack&&e.attack.kind>=10){let D=e.attack.t,B=e.attack.kind;if(B===11){let L=An(Pe(D/.45,0,1)),z=Lr(Pe((D-.45)/.15,0,1)),H=1-An(Pe((D-.7)/.3,0,1));c=It(-.3,It(-2.7,-1.25,z),Math.max(L,z)*H),R=It(.22,It(.35,1.75,z),Math.max(L,z)*H),u=It(u,It(-2.2,-1.1,z),L*H),x=It(-.2*L,.35,z)*H,g-=.05*z*H,a=.35*z*H,l=-.3*z*H}else{let L=An(Pe(D/.35,0,1)),z=Lr(Pe((D-.35)/.2,0,1)),H=1-An(Pe((D-.65)/.35,0,1));u=It(u,It(.6,-1.75,z),H*Math.max(L,z)),f=It(f,-.1,H),p=It(-.45*L,.3,z)*H,B===12&&(c=It(c,-1.3,z*H),R=It(.22,1.3,z*H)),a=.25*z*H,l=-.2*z*H}}else if(e.attack){v=0;let D=e.attack.t,B=e.attack.kind,L=B===3?.3:.26,z=B===3?.56:.5,H=An(Pe(D/L,0,1)),X=Lr(Pe((D-L)/(z-L),0,1)),Y=An(Pe((D-z-.08)/(1-z-.08),0,1)),k=1-Y;if(B===0||B===1){let J=B===0?1:-1,Q=-1.2*J,vt=1.5*J;p=It(It(0,Q,H),vt,X)*k,c=It(c,It(-1.4,-1.58,X),k*Math.max(H,X)),h=It(.12,B===0?.45:.15,H)*k,u=It(u,.35,k),a=.35*k,l=-.25*k,g-=.04*X*k}else B===3?(p=It(It(0,.95,H),-1.55,X)*k,c=It(It(c,-.75,H),-1.58,X),c=It(-.2,c,k),h=It(It(.12,-.95,H),.4,X)*k,u=It(It(u,-.6,H),.55,X),u=It(-.5,u,k),a=It(.2*H,.55,X)*k,l=It(-.1*H,-.35,X)*k,g-=(.06*H+.05*X)*k,x=It(.15*H,.2,X)*k):(c=It(It(c,-2.9,H),-.45,X),c=It(c,-.25,Y),d=0,x=It(It(0,-.25,H),.38,X)*k,u=c*.9,f=-.05,g-=.06*X*k,a=.4*X*k,l=-.4*X*k)}else if(e.sheathing>0){let D=e.sheathing,B=Math.sin(Math.min(1,D*1.3)*Math.PI*.5)*(1-An(Pe((D-.75)/.25,0,1)));c=It(c,-1.15,B),h=It(h,-.7,B),v=It(-1.2,0,Math.min(1,D*3)),p=.35*B,u=It(u,-.7,B)}e.dash&&(x=.45,a=.9,l=-.7,c=S&&!this.sheathed?1.3:.9,u=S?-.5:.9,v=0,g=.02),w&&(v=R-c),e.hurt>0&&(x=-.35*e.hurt,M=-.2*e.hurt),e.cast&&(u=-1.5,f=-.2);let P=1-Math.exp(-(e.attack?34:16)*t),N=(D,B,L)=>D[B]+=(L-D[B])*P;if(N(this.legs[0].rotation,"x",l),N(this.legs[1].rotation,"x",a),N(this.armR.rotation,"x",c),N(this.armR.rotation,"z",-h),N(this.armR.rotation,"y",d),N(this.armL.rotation,"x",u),N(this.armL.rotation,"z",-f),N(this.chest.rotation,"y",p),N(this.hips.rotation,"x",x),N(this.head.rotation,"x",M),this.handR&&N(this.handR.rotation,"x",v),this.body.position.y=g,this.updateWeapon(t),y&&(this.bowCur=(this.bowCur||0)+(E-(this.bowCur||0))*(1-Math.exp(-(E<(this.bowCur||0)?60:20)*t)),this.setBowDraw(this.bowCur)),this.orbMat){let D=.45+Math.sin(this.idleT*4)*.15+(e.attack?.5:0);this.orbMat.emissive.copy(this.glowColor).multiplyScalar(D)}if(this.body.rotation.z=T,this.tail&&(this.tail.rotation.x=.25+n*.6+Math.sin(this.idleT*7)*.08*n),e.dead){this.deadT+=t;let D=Fs(Pe(this.deadT/.45,0,1));this.body.rotation.x=-D*Math.PI/2,this.body.position.y=D*.15}else this.deadT=0,this.body.rotation.x=0}};function yd(r={}){return new Rn({type:"hero",scale:1.15,skin:"#f6d6b6",robe:"#eeeae0",sleeve:"#eeeae0",cuff:"#2e4f8f",belt:"#2e4f8f",collar:"#2e4f8f",pants:"#3a3f5a",hair:"#2a2024",weapon:"sword",...r})}function _d(r,t,e){return t?r==="hero"?{robe:t.main,sleeve:t.main,cuff:t.accent,belt:t.accent,collar:t.accent,pants:t.dark,armor:e,trim:t.trim}:r==="mage"?{robe:t.main,sleeve:t.main,cuff:t.trim,belt:t.trim,pants:t.dark,armor:e,trim:t.trim}:{robe:t.main,sleeve:t.main,cuff:t.trim,skirt:t.accent,belt:t.dark,pants:t.trim,armor:e,trim:t.trim}:{}}function vd(){return new Rn({type:"guard",scale:1.15,skin:"#eac8a6",robe:"#2b4374",sleeve:"#2b4374",cuff:"#c8302c",belt:"#c8302c",collar:"#c8302c",pants:"#1f2438",hair:"#1c1a1e",weapon:"spear"})}function Md(r={}){return new Rn({type:"mage",scale:1.15,skin:"#f4d4b2",robe:"#3a3a7a",sleeve:"#3a3a7a",cuff:"#e0b040",belt:"#e0b040",pants:"#24244a",hair:"#1e1a24",weapon:"staff",...r})}function bd(r={}){return new Rn({type:"elf",scale:1.12,skin:"#fbe2cc",robe:"#5aa84e",sleeve:"#5aa84e",cuff:"#e8d8a0",skirt:"#3f7a3a",belt:"#7a4e2e",pants:"#f0e8d0",shoes:"#6a4428",hair:"#e8e4c8",eye:"#2a6a4a",weapon:"bow",...r})}function Sd(){return new Rn({type:"lady",scale:1.15,skin:"#f6d8bc",robe:"#9cc46a",sleeve:"#9cc46a",cuff:"#d84a6a",skirt:"#d8486a",pants:"#d8486a",hair:"#2a2024"})}function wd(r="blue"){let t={blue:{skin:"#5d8fd8",hair:"#e2522e",horns:1,scale:1.12},red:{skin:"#d8574a",hair:"#2a2430",horns:2,scale:1.18},boss:{skin:"#b03a5a",hair:"#f0e8d8",horns:2,scale:2.3,horn:"#f0c040"}}[r];return new Rn({type:"dokkaebi",skin:t.skin,hair:t.hair,horns:t.horns,horn:t.horn,scale:t.scale,pants:t.skin,sleeve:t.skin,legLen:.3,torsoH:.42,headR:.32,neck:.3,shoulder:.27,limb:1.35,wide:1.3,weapon:r==="boss"?"goldclub":"club",eye:"#1b1416"})}var Cn={sword:{id:"sword",title:"\uAC80\uAC1D",name:"\uC774\uB791",make:yd,hp:120,skillCd:2.6,dashCd:.5,skill2Cd:6,skill3Cd:8,role:"\uBC1C\uB3C4\uC220 \xB7 \uADFC\uC811",desc:"\uBC1C\uB3C4\uC220, \uAC80\uAE30, \uC21C\uAC04 \uB3CC\uC9C4 \uC77C\uC12C, \uD68C\uC624\uB9AC\uBCA0\uAE30",labels:{atk:"\uBCA0\uAE30",dash:"\uD68C\uD53C",skill:"\uAC80\uAE30",skill2:"\uC77C\uC12C",skill3:"\uD68C\uC624\uB9AC"},hitWord:"\uC5F0\uC18D \uBCA0\uAE30"},mage:{id:"mage",title:"\uB3C4\uC0AC",name:"\uCCAD\uC6B4",make:Md,hp:90,skillCd:4.2,dashCd:.8,skill2Cd:6.5,skill3Cd:9,role:"\uBD80\uC801\uC220 \xB7 \uC6D0\uAC70\uB9AC \uAD11\uC5ED",desc:"\uBD88\uBD80\uC801, \uB099\uB8B0, \uBD88\uBC40\uC744 \uBD80\uB974\uB294 \uD654\uB8E1\uBD80, \uC5BC\uC74C \uAC00\uC2DC \uBE59\uACB0\uC9C4",labels:{atk:"\uBD88\uBD80\uC801",dash:"\uCD95\uC9C0",skill:"\uB099\uB8B0",skill2:"\uD654\uB8E1\uBD80",skill3:"\uBE59\uACB0\uC9C4"},hitWord:"\uC5F0\uC18D \uD0C0\uACA9"},elf:{id:"elf",title:"\uC694\uC815",name:"\uD558\uB2AC",make:bd,hp:100,skillCd:3.2,dashCd:.45,skill2Cd:6,skill3Cd:9,role:"\uD65C \xB7 \uC6D0\uAC70\uB9AC \uC5F0\uC0AC",desc:"\uBC14\uB78C\uD654\uC0B4, \uD558\uB298\uC5D0\uC11C \uC3DF\uC544\uC9C0\uB294 \uD654\uC0B4\uBE44, \uC801\uC744 \uBE68\uC544\uB4E4\uC774\uB294 \uD68C\uC624\uB9AC \uC815\uB839",labels:{atk:"\uC0AC\uACA9",dash:"\uAD6C\uB974\uAE30",skill:"\uBC14\uB78C\uD654\uC0B4",skill2:"\uD654\uC0B4\uBE44",skill3:"\uD68C\uC624\uB9AC \uC815\uB839"},hitWord:"\uC5F0\uC18D \uBA85\uC911"}},Dr=["sword","mage","elf"];var rn={2:3,3:5},Nr=r=>40+r*30,Os=new A,ay={4:3,5:0,13:12,14:11,24:21},il=class{constructor(t,e="sword"){this.game=t,this.pos=new A(0,.12,16),this.yaw=Math.PI,this.vel=new A,this.radius=.32,this.maxHp=120,this.hp=this.maxHp,this.attack=null,this.combo=0,this.comboTimer=0,this.buffered=!1,this.dashT=0,this.dashCd=0,this.dashDir=new A,this.skillCd=0,this.skillMax=2.6,this.invuln=0,this.hurtT=0,this.dead=!1,this.stepAcc=0,this.y=this.pos.y,this.lastCombat=0,this.moveR=this.radius,this.setClass(e)}setClass(t){let e=Cn[t]||Cn.sword;this.cls=e.id,this.cfg=e;let i=this.game.progressOf(e.id);this.level=i.level,this.exp=i.exp,this.skillMax=e.skillCd,this.cd2=0,this.cd3=0,this.cd2Max=e.skill2Cd,this.cd3Max=e.skill3Cd,this.dashMax=e.dashCd,this.attack=null,this.combo=0,this.sheatheT=0,this.buildRig(),this.recalc(!0)}buildRig(){let t=this.game.progressOf(this.cls),e=pi(t.weapon),i=pi(t.outfit),n={sword:"hero",mage:"mage",elf:"elf"}[this.cls],s=this.rig;this.rig=this.cfg.make({wstyle:e?.style,..._d(n,i?.pal,i?.armor)}),s&&(this.game.scene.remove(s.root),this.rig.root.position.copy(s.root.position),this.rig.root.rotation.y=s.root.rotation.y),this.game.scene.add(this.rig.root)}recalc(t=!1){let e=this.game.progressOf(this.cls),i=pi(e.weapon),n=pi(e.outfit),s=this.maxHp?this.hp/this.maxHp:1;this.maxHp=Math.round(this.cfg.hp+(this.level-1)*12+(n?.hp||0)),this.atkMul=(1+(this.level-1)*.08)*(1+(i?.atk||0)),this.def=n?.def||0,this.hp=t?this.maxHp:Math.max(1,Math.round(this.maxHp*s))}equip(t){let e=pi(t);if(!e||e.kind==="weapon"&&e.cls!==this.cls)return!1;let i=this.game.progressOf(this.cls);return e.kind==="weapon"?i.weapon=t:i.outfit=t,this.buildRig(),this.recalc(),!0}addExp(t){this.exp+=t;let e=0;for(;this.exp>=Nr(this.level);)this.exp-=Nr(this.level),this.level++,e++;let i=this.game.progressOf(this.cls);i.level=this.level,i.exp=this.exp,e&&(this.recalc(!0),this.game.onLevelUp(this,e))}reset(){this.hp=this.maxHp,this.dead=!1,this.attack=null,this.invuln=1.5,this.rig.deadT=0}aimYaw(t,e=this.cls==="sword"?3.6:11){let i=this.game,n=i.target;if(n&&!n.dead&&!n.spawning&&Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)<i.targetRange()+2)return Math.atan2(n.pos.x-this.pos.x,n.pos.z-this.pos.z);let s=null,o=1e9,a=t.moveLen>.1?Math.atan2(t.mx,t.mz):this.yaw;for(let l of i.enemies){if(l.dead||l.spawning)continue;let c=l.pos.x-this.pos.x,h=l.pos.z-this.pos.z,d=Math.hypot(c,h);if(d>e)continue;let u=Math.abs(wn(a,Math.atan2(c,h))),f=d+u*(e>4?4:1.5);u<(e>4?.9:1.7)&&f<o&&(o=f,s=Math.atan2(c,h))}return s!==null?s:t.mouseRecent&&t.mouseWorld?Math.atan2(t.mouseWorld.x-this.pos.x,t.mouseWorld.z-this.pos.z):a}startAttack(t){if(this.dead||this.dashT>0)return;if(this.attack){this.attack.t>.4&&(this.buffered=!0);return}if(this.cls!=="sword"){let a=(this.cls==="mage"?10:20)+[0,0,2][this.combo%3];this.combo++,this.yaw=this.aimYaw(t);let l=a%10===2;this.attack={t:0,kind:a,dur:this.cls==="mage"?l?.46:.36:l?.42:.32,hit:!1,hitAt:this.cls==="mage"?.42:.47},this.cls==="elf"&&this.game.audio.play("bowdraw"),this.lastCombat=this.game.time;return}this.rig.sheathed?(this.combo=0,this.drawCut()):this.combo===0&&(this.comboFromSheath=!1);let s=(this.comboFromSheath?[3,0,2]:[1,0,2])[this.combo%3];this.combo++,this.yaw=this.aimYaw(t),this.attack={t:0,kind:s,dur:s===2?.48:s===3?.42:.36,hit:!1,hitAt:s===3?.44:.38},s!==3&&this.game.audio.play(s===2?"swing3":"swing"),this.lastCombat=this.game.time,this.sinceAttack=0}drawCut(){this.rig.unsheathe(),this.sheatheT=0,this.comboFromSheath=!0,this.game.audio.play("draw");let t=this.rig.saya;if(t){let e=new A;t.getWorldPosition(e),this.game.fx.spark(e.x,e.y,e.z,6,"#ffffff",3)}}startDash(t){if(this.dead||this.dashCd>0)return;let e=t.moveLen>.1?Os.set(t.mx,0,t.mz).normalize():Os.set(Math.sin(this.yaw),0,Math.cos(this.yaw));if(this.dashDir.copy(e),this.yaw=Math.atan2(e.x,e.z),this.cls==="mage"){this.blink(e);return}this.dashT=.2,this.dashCd=this.dashMax??.5,this.invuln=Math.max(this.invuln,.3),this.attack=null,this.buffered=!1,this.game.audio.play("dash"),this.game.fx.dust(this.pos.x,this.pos.y,this.pos.z,8)}blink(t){let e=this.game,i=this.pos.clone();e.fx.ghost(this.rig,"#9a7aff",.4),e.fx.smoke(i.x,i.y+.2,i.z,10),e.world.move(this.pos,t.x*3.6,t.z*3.6,this.moveR),this.vel.set(0,0,0),this.dashCd=this.dashMax,this.invuln=Math.max(this.invuln,.35),this.attack=null,this.buffered=!1,e.audio.play("blink");let n=this.pos;for(let s=0;s<14;s++){let o=s/13;e.fx.add.emit({x:i.x+(n.x-i.x)*o,y:i.y+.8+I(-.4,.4),z:i.z+(n.z-i.z)*o,vx:I(-.5,.5),vy:I(0,1),vz:I(-.5,.5),life:I(.25,.5),size:3,endSize:1,color:"#d8c8ff",color2:"#5a3aff"})}e.fx.ring(new A(n.x,e.world.heightAt(n.x,n.z),n.z),1.6,"#b8a0ff",.35),e.fx.smoke(n.x,n.y+.2,n.z,8)}startExtraSkill(t,e){if(this.dead||this.dashT>0)return;let i=e===2?"cd2":"cd3";if(this.level<rn[e]||this[i]>0||this.attack&&this.attack.t<.6)return;this[i]=e===2?this.cd2Max:this.cd3Max,this.yaw=this.aimYaw(t),this.combo=0,this.buffered=!1;let n=this.game,s={sword:{2:{kind:4,dur:.5,hitAt:.3},3:{kind:5,dur:.9,hitAt:.05}},mage:{2:{kind:13,dur:.5,hitAt:.45},3:{kind:14,dur:.62,hitAt:.5}},elf:{2:{kind:23,dur:.55,hitAt:.5},3:{kind:24,dur:.5,hitAt:.47}}}[this.cls][e];this.cls==="sword"&&this.rig.sheathed&&this.drawCut(),this.attack={t:0,kind:s.kind,dur:s.dur,hit:!1,hitAt:s.hitAt,skill:!0,slot:e},this.cls==="mage"?n.audio.play("chant"):this.cls==="elf"&&n.audio.play("bowdraw"),this.sinceAttack=0,this.lastCombat=n.time}startSkill(t){if(this.dead||this.skillCd>0||this.dashT>0)return;if(this.cls!=="sword"){this.skillCd=this.skillMax,this.yaw=this.aimYaw(t),this.combo=0,this.cls==="mage"?(this.attack={t:0,kind:11,dur:.62,hit:!1,hitAt:.5,skill:!0},this.game.audio.play("chant")):(this.attack={t:0,kind:21,dur:.5,hit:!1,hitAt:.47,skill:!0},this.game.audio.play("bowdraw")),this.lastCombat=this.game.time;return}this.skillCd=this.skillMax,this.yaw=this.aimYaw(t);let e=this.rig.sheathed;e&&this.drawCut(),this.attack={t:0,kind:e?3:1,dur:e?.4:.36,hit:!0,skill:!0},this.combo=0,this.sinceAttack=0,e||this.game.audio.play("swing3"),this.game.spawnSwordWave(this),this.lastCombat=this.game.time}damage(t,e){if(this.invuln>0||this.dead||this.game.godMode)return!1;t=Math.max(1,Math.round(t*(1-(this.def||0)))),this.hp-=t,this.invuln=.7,this.blinkT=.7,this.hurtT=.3,this.lastCombat=this.game.time;let i=this.game;return i.fx.number(this.pos.clone().add(new A(0,1.7,0)),t,"player"),i.audio.play("hurt"),i.shake(.25),i.screenFlash(.25,"#ff3030"),e&&(Os.subVectors(this.pos,e).setY(0).normalize(),this.vel.addScaledVector(Os,7)),this.hp<=0&&(this.hp=0,this.dead=!0,i.onPlayerDeath()),!0}update(t,e){let i=this.game;this.dashCd=Math.max(0,this.dashCd-t),this.skillCd=Math.max(0,this.skillCd-t),this.cd2=Math.max(0,(this.cd2||0)-t),this.cd3=Math.max(0,(this.cd3||0)-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.comboTimer-=t;let n=0;if(!this.dead){let l=0;if(this.dashT>0){this.dashT-=t;let h=14*(.4+.6*(this.dashT/.2));i.world.move(this.pos,this.dashDir.x*h*t,this.dashDir.z*h*t,this.radius),n=h,Math.random()<.8&&i.fx.add.emit({x:this.pos.x+I(-.2,.2),y:this.pos.y+I(.3,1.1),z:this.pos.z+I(-.2,.2),life:.25,size:2,color:"#bfe8ff"}),this.ghostT=(this.ghostT??0)-t,this.ghostT<=0&&(this.ghostT=.045,i.fx.ghost(this.rig,this.cls==="elf"?"#7ad86a":"#5ab8ff")),this.cls==="elf"&&Math.random()<.6&&i.fx.norm.emit({x:this.pos.x+I(-.3,.3),y:this.pos.y+I(.2,.9),z:this.pos.z+I(-.3,.3),vx:I(-1,1),vy:I(.5,1.5),vz:I(-1,1),wob:1.5,life:I(.5,.9),size:2,color:Math.random()<.5?"#8ad06a":"#c8e88a"})}else{let d=4.6*(this.attack?this.attack.kind===5?.7:this.attack.skill?this.cls==="sword"?.1:.25:this.cls==="sword"?.22:.45:1);if(e.moveLen>.1){l=1;let u=e.mx*d,f=e.mz*d;this.vel.x=It(this.vel.x,u,1-Math.exp(-18*t)),this.vel.z=It(this.vel.z,f,1-Math.exp(-18*t)),this.attack||(this.yaw=En(this.yaw,Math.atan2(e.mx,e.mz),16,t))}else this.vel.x=It(this.vel.x,0,1-Math.exp(-14*t)),this.vel.z=It(this.vel.z,0,1-Math.exp(-14*t));if(this.attack&&!this.attack.skill&&this.cls==="sword"){let u=this.attack;if(u.t>.25&&u.t<.5){let f=u.kind===2?3.5:2.6;this.vel.x+=Math.sin(this.yaw)*f*t*10*(1-Math.exp(-t*5)),this.vel.z+=Math.cos(this.yaw)*f*t*10*(1-Math.exp(-t*5))}}i.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),n=Math.hypot(this.vel.x,this.vel.z)}if(this.stepAcc+=n*t,this.stepAcc>1.1&&this.dashT<=0&&(this.stepAcc=0,i.fx.dust(this.pos.x,this.pos.y,this.pos.z,2)),this.attack){let h=this.attack;h.t+=t/h.dur,!h.hit&&h.t>=(h.hitAt??.38)&&(h.hit=!0,h.slot?i.castSkill(this,h.slot):h.skill?i.playerSkillHit(this,h):this.cls==="sword"?i.playerSwingHit(this,h.kind):i.playerShoot(this,h.kind)),h.t>=1&&(this.attack=null,this.buffered?(this.buffered=!1,this.startAttack(e)):this.comboTimer=.35)}else this.comboTimer<=0&&(this.combo=0);let c=this.rig;!this.attack&&c.saya&&(this.sinceAttack=(this.sinceAttack??9)+t,!c.sheathed&&this.sinceAttack>.9&&this.dashT<=0&&(c.sheathe(),this.sheatheT=1e-4)),this.sheatheT>0&&(this.sheatheT+=t/.42,c.justSheathed&&(c.justSheathed=!1,i.audio.play("sheathe")),this.sheatheT>=1&&(this.sheatheT=0))}let s=i.world.heightAt(this.pos.x,this.pos.z);this.y=It(this.y,s,1-Math.exp(-20*t)),this.pos.y=s,!this.dead&&i.time-this.lastCombat>4&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+t*6));let o=this.rig;o.root.position.set(this.pos.x,this.y,this.pos.z);let a=this.attack&&this.attack.kind===5?Math.min(1,this.attack.t/.85)*Math.PI*6:0;if(o.root.rotation.y=this.yaw+a,o.animate(t,{speed:this.dead?0:n,attack:this.attack?{t:Math.min(1,this.attack.t),kind:ay[this.attack.kind]??this.attack.kind}:null,sheathing:this.sheatheT>0?Math.min(1,this.sheatheT):0,dash:this.dashT>0,hurt:this.hurtT/.3,dead:this.dead}),this.blinkT=Math.max(0,(this.blinkT||0)-t),o.root.visible=this.dead||this.blinkT<=0||Math.floor(i.time*18)%2===0,o.setFlash(this.hurtT>.2?.6:0),o.bladeMat){let l=this.attack?.5:o.sheathed?0:i.night>.5?.16:.08;if(o.glowColor){let c=o.sheathed?0:l+.22+Math.sin(i.time*5)*.06;o.bladeMat.emissive.copy(o.glowColor).multiplyScalar(c*.8),o.edgeMat.emissive.copy(o.glowColor).multiplyScalar(c*1.4)}else o.bladeMat.emissive.setRGB(l*.6,l*.9,l),o.edgeMat.emissive.setRGB(l*1.2,l*1.4,l*1.6)}if(o.bowMat&&o.glowColor&&o.bowMat.emissive.copy(o.glowColor).multiplyScalar(.3+Math.sin(i.time*4)*.08+(this.attack?.3:0)),o.glowColor&&!o.sheathed&&Math.random()<t*14){let l=o.weapon.getWorldPosition(Os);i.fx.add.emit({x:l.x+I(-.3,.3),y:l.y+I(-.3,.5),z:l.z+I(-.3,.3),vy:I(.2,.8),life:I(.3,.6),size:2,color:"#ffffff",color2:"#"+o.glowColor.getHexString()})}}},ly={blue:{hp:46,speed:2.7,dmg:10,range:1.5,windup:.5,recover:.6,radius:.46,rig:"blue",exp:10},red:{hp:72,speed:3.1,dmg:15,range:1.6,windup:.42,recover:.5,radius:.48,rig:"red",exp:16},wisp:{hp:28,speed:3.2,dmg:9,range:7,windup:.6,recover:1.6,radius:.35,exp:12},boss:{hp:900,speed:2.35,dmg:24,range:2.7,windup:.85,recover:.8,radius:.95,rig:"boss",exp:200}},Ur=class{constructor(t,e,i,n=1){this.game=t,this.type=e;let s=this.T=ly[e],o=1+(n-1)*.25;this.maxHp=Math.round(s.hp*o),this.hp=this.maxHp,this.dmg=Math.round(s.dmg*(1+(n-1)*.15)),this.radius=s.radius,this.moveR=e==="boss"?zs[1]:Math.min(s.radius,zs[0]),this.pos=i.clone(),this.vel=new A,this.yaw=0,this.state="spawn",this.st=0,this.attackCd=I(.4,1.2),this.hurtT=0,this.flashT=0,this.dead=!1,this.deadT=0,this.spawning=!0,this.y=i.y,this.strafe=Math.random()<.5?1:-1,this.leapCd=6,this.summoned=0,e==="wisp"?this.buildWisp():(this.rig=wd(s.rig),t.scene.add(this.rig.root)),this.root=this.rig?this.rig.root:this.wisp,this.root.position.copy(this.pos),this.root.scale.setScalar(.01),t.fx.blueFire(i.x,i.y,i.z,e==="boss"?80:30,e==="boss"?1.2:.5),t.fx.ring(i,e==="boss"?3:1.4,"#7fd8ff",.5),t.audio.play("spawn")}buildWisp(){let t=new qt,e=new ie({color:new lt("#bff4ff")}),i=new at(new Ge(.28,1),e);t.add(i);let n=new at(new Ge(.36,1),new ie({color:new lt("#3a8cff"),transparent:!0,opacity:.45,depthWrite:!1}));n.userData.noOutline=!0,t.add(n);let s=new ie({color:659504});for(let o of[-1,1]){let a=new at(new At(.06,.1,.04),s);a.position.set(o*.09,.03,.27),t.add(a)}this.game.scene.add(t),this.wisp=t,this.coreMat=e}get alive(){return!this.dead}center(){return Os.set(this.pos.x,this.y+(this.type==="boss"?2:this.type==="wisp"?1.3:.8),this.pos.z)}hit(t,e,i=5,n=.25){if(this.dead||this.spawning)return!1;if(this.hp-=t,this.flashT=.12,this.type!=="boss"||this.state==="chase"){let s=this.type==="boss"?i*.15:i;this.vel.addScaledVector(e,s),this.type!=="boss"&&(this.hurtT=n,this.state==="windup"&&n>=.25&&(this.state="chase",this.attackCd=.6,this.clearTele()))}return this.hp<=0&&this.die(),!0}freeze(t){if(!(this.dead||this.type==="boss")&&(this.frozenT=Math.max(this.frozenT||0,t),this.hurtT=Math.max(this.hurtT,t),(this.state==="windup"||this.state==="strike")&&(this.state="chase",this.attackCd=.8,this.clearTele()),!this.ice)){let e=this.type==="wisp"?.9:1.15*(this.T.radius/.46),i=new ie({color:"#a8e4ff",transparent:!0,opacity:.42,depthWrite:!1});this.ice=new at(new Ge(.75*e,0),i),this.ice.scale.set(1,1.35,1),this.game.scene.add(this.ice)}}updateIce(t){if(!this.ice)return;this.frozenT-=t;let e=this.type==="wisp"?this.y+1.3:this.y+.75;if(this.ice.position.set(this.pos.x,e,this.pos.z),this.frozenT<=0||this.dead){let i=this.game;for(let n=0;n<14;n++)i.fx.add.emit({x:this.pos.x,y:e+I(-.4,.4),z:this.pos.z,vx:I(-3,3),vy:I(1,4),vz:I(-3,3),g:12,life:I(.3,.6),size:3,endSize:1,color:"#e8f8ff",color2:"#5aa8ff"});i.audio.play("block"),i.scene.remove(this.ice),this.ice.geometry.dispose(),this.ice.material.dispose(),this.ice=null,this.frozenT=0}}die(){this.dead=!0,this.hp=0,this.deadT=0,this.clearTele();let t=this.game;t.audio.play("poof"),this.type==="wisp"&&(t.fx.blueFire(this.pos.x,this.y+1,this.pos.z,40,.4),t.fx.ring(new A(this.pos.x,this.y,this.pos.z),1.5,"#7fd8ff",.4)),t.onEnemyKilled(this)}clearTele(){this.tele&&(this.game.fx.removeRing(this.tele),this.tele=null)}update(t){let e=this.game,i=e.player;if(this.updateIce(t),this.st+=t,this.flashT=Math.max(0,this.flashT-t),this.hurtT=Math.max(0,this.hurtT-t),this.attackCd-=t,this.leapCd-=t,this.dead){if(this.deadT+=t,this.type==="wisp")this.root.scale.setScalar(Math.max(.01,1-this.deadT*4));else if(this.rig.animate(t,{speed:0,dead:!0}),this.rig.setFlash(Math.max(0,.8-this.deadT*2)),this.deadT>.55&&!this.poofed){this.poofed=!0;let d=this.type==="boss";e.fx.smoke(this.pos.x,this.y+.3,this.pos.z,d?30:12),e.fx.blueFire(this.pos.x,this.y+.2,this.pos.z,d?60:24,d?1.4:.6),e.fx.coins(this.pos.x,this.y,this.pos.z,d?30:6),e.audio.play("coin"),this.root.visible=!1}return this.deadT<1.2}if(this.spawning){let d=Fs(Pe(this.st/.7,0,1));return this.root.scale.setScalar(Math.max(.01,d)),Math.random()<.6&&e.fx.blueFire(this.pos.x,this.pos.y,this.pos.z,2,this.type==="boss"?1:.4),this.st>=.7&&(this.spawning=!1,this.state="chase",this.st=0,this.root.scale.setScalar(1),(Math.random()<.4||this.type==="boss")&&e.audio.play("laugh")),this.type==="wisp"?this.root.position.set(this.pos.x,this.pos.y+1.3*d,this.pos.z):this.place(t,0),!0}let n=i.pos.x-this.pos.x,s=i.pos.z-this.pos.z,o=Math.hypot(n,s),a=Math.atan2(n,s),l=0,c=null,h=this.T;if(this.type==="wisp")return this.updateWisp(t,o,a);if(this.vel.lengthSq()>.001&&(e.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-9*t))),!(this.hurtT>0)){if(this.state==="chase"){let d=Math.abs(i.pos.y-this.pos.y)<.5;if(i.dead)l=0,this.yaw=En(this.yaw,a,8,t);else if(this.type==="boss"&&this.leapCd<=0&&o>4.5&&o<14)this.state="leapPrep",this.st=0,this.leapTarget=i.pos.clone(),this.tele=e.fx.ring(this.leapTarget,3.6,"#ff4a3a",1,1);else if(o>h.range*.85||!d){let u=h.speed*(this.type==="boss"&&this.hp<this.maxHp*.4?1.25:1);l=this.chaseMove(t,u,n,s,o),this.yaw=En(this.yaw,this.los?a:Math.atan2(this.moveX,this.moveZ),8,t)}else if(this.yaw=En(this.yaw,a,8,t),this.attackCd<=0&&(this.state="windup",this.st=0,this.type==="boss")){let u=new A(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6);this.tele=e.fx.ring(u,2.6,"#ff4a3a",1,1),this.smashAt=u}}else if(this.state==="windup")this.st<h.windup*.6&&(this.yaw=En(this.yaw,a,5,t)),c={t:.28*Pe(this.st/h.windup,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/h.windup),this.type==="boss"&&this.smashAt&&(this.smashAt.set(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6),this.tele&&this.tele.m.position.set(this.smashAt.x,this.smashAt.y+.04,this.smashAt.z)),this.st>=h.windup&&(this.state="strike",this.st=0,e.audio.play("swing"));else if(this.state==="strike"){if(c={t:.28+.34*Pe(this.st/.12,0,1),kind:2},!this.struck&&this.st>=.08)if(this.struck=!0,this.type==="boss")this.clearTele(),e.bossSlam(this,this.smashAt,2.6,this.dmg);else{let d=Math.sin(this.yaw),u=Math.cos(this.yaw),f=this.pos.x+d*.9,p=this.pos.z+u*.9;e.fx.dust(f,this.pos.y,p,5),Math.hypot(i.pos.x-f,i.pos.z-p)<1.05+i.radius&&Math.abs(i.pos.y-this.pos.y)<1&&i.damage(this.dmg,this.pos)}this.st>=.12&&(this.state="recover",this.st=0,this.struck=!1)}else if(this.state==="recover")c={t:.62+.38*Pe(this.st/h.recover,0,1),kind:2},this.st>=h.recover&&(this.state="chase",this.st=0,this.attackCd=I(.6,1.4));else if(this.state==="leapPrep")c={t:.2*Pe(this.st/.6,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/1.5),this.st>=.6&&(this.state="leap",this.st=0,this.leapFrom=this.pos.clone(),e.audio.play("dash"),e.fx.dust(this.pos.x,this.pos.y,this.pos.z,14));else if(this.state==="leap"){let d=Pe(this.st/.9,0,1);if(this.tele&&(this.tele.mat.uniforms.uProg.value=.4+d*.6),this.pos.x=It(this.leapFrom.x,this.leapTarget.x,Fs(d)),this.pos.z=It(this.leapFrom.z,this.leapTarget.z,Fs(d)),this.jumpY=Math.sin(d*Math.PI)*4.5,c={t:.28,kind:2},d>=1){this.jumpY=0,this.clearTele();let u=e.world.heightAt(this.pos.x,this.pos.z);e.world.isBlocked(this.pos.x,this.pos.z,this.moveR*.7,u)&&this.pos.copy(this.leapFrom),e.bossSlam(this,this.pos.clone(),3.6,Math.round(this.dmg*1.2),!0),this.state="recover",this.st=0,this.leapCd=I(6,9)}}}return this.place(t,l,c),!0}updateWisp(t,e,i){let n=this.game,s=n.player;if(this.frozenT>0)return!0;this.yaw=En(this.yaw,i,6,t),this.vel.lengthSq()>.001&&(n.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-6*t)));let o=s.pos.x-this.pos.x,a=s.pos.z-this.pos.z,l=o/(e||1),c=a/(e||1),h=0,d=0;if(this.state==="chase"){if(e>7.5){let g=n.world.clearLine(this.pos.x,this.pos.z,s.pos.x,s.pos.z,this.moveR)?null:n.world.navDir(this.pos,0);g?(h=g.x,d=g.z):(h=l,d=c)}else e<4.5&&(h=-l,d=-c);h+=-c*this.strafe*.6,d+=l*this.strafe*.6,Math.random()<t*.3&&(this.strafe*=-1),this.attackCd<=0&&e<10&&!s.dead&&(this.state="windup",this.st=0,n.audio.play("orb"))}else this.state==="windup"&&(Math.random()<.8&&n.fx.add.emit({x:this.pos.x+I(-.6,.6),y:this.y+1.3+I(-.6,.6),z:this.pos.z+I(-.6,.6),vx:0,vy:0,vz:0,life:.3,size:2,color:"#8fe8ff"}),this.st>=this.T.windup&&(n.spawnOrb(this),this.state="chase",this.st=0,this.attackCd=I(2,3)));let u=Math.hypot(h,d);u>.01&&n.world.move(this.pos,h/u*this.T.speed*t,d/u*this.T.speed*t,this.moveR);let f=n.world.heightAt(this.pos.x,this.pos.z);this.y=It(this.y,f,1-Math.exp(-6*t));let p=Math.sin(n.time*3+this.strafe)*.15;this.root.position.set(this.pos.x,this.y+1.3+p,this.pos.z),this.root.rotation.y=this.yaw;let x=this.state==="windup"?1+Math.sin(this.st*40)*.12+this.st*.4:1;return this.root.scale.setScalar(x),this.coreMat.color.set(this.flashT>0?"#ffffff":this.state==="windup"?"#e8ffff":"#9feaff"),Math.random()<.7&&n.fx.add.emit({x:this.pos.x+I(-.15,.15),y:this.y+1.45+p,z:this.pos.z+I(-.15,.15),vx:I(-.3,.3),vy:I(.8,1.6),vz:I(-.3,.3),life:I(.3,.6),size:I(2,4),endSize:1,color:"#7fe0ff",color2:"#1a40ff"}),!0}chaseMove(t,e,i,n,s){let o=this.game.world,a=this.game.player,l=this.type==="boss"?1:0;this.losT=(this.losT??0)-t,this.losT<=0&&(this.losT=.2+Math.random()*.1,this.los=Math.abs(a.pos.y-this.pos.y)<.5&&o.clearLine(this.pos.x,this.pos.z,a.pos.x,a.pos.z,this.moveR));let c,h;if(this.los||s<1.2){let x=s>3?.35*this.strafe:0,g=i/s,m=n/s;c=g-m*x,h=m+g*x;let M=Math.hypot(c,h);c/=M,h/=M}else{let x=o.navDir(this.pos,l);x?(c=x.x,h=x.z):(c=i/s,h=n/s)}this.unstuckT>0&&(this.unstuckT-=t,c=this.unstuckX,h=this.unstuckZ),this.moveX=this.moveX===void 0?c:this.moveX+(c-this.moveX)*Math.min(1,t*12),this.moveZ=this.moveZ===void 0?h:this.moveZ+(h-this.moveZ)*Math.min(1,t*12);let d=Math.hypot(this.moveX,this.moveZ)||1,u=this.pos.x,f=this.pos.z;o.move(this.pos,this.moveX/d*e*t,this.moveZ/d*e*t,this.moveR);let p=Math.hypot(this.pos.x-u,this.pos.z-f);if(this.stuckAcc=p<e*t*.35?(this.stuckAcc||0)+t:0,this.stuckAcc>.35){this.stuckAcc=0,this.los=!1,this.losT=.8,this.strafe*=-1;let x=Math.atan2(h,c)+(Math.random()<.5?1:-1)*(Math.PI/2+Math.random()*.5);this.unstuckX=Math.cos(x),this.unstuckZ=Math.sin(x),this.unstuckT=.3}return t>0?p/t:0}place(t,e,i=null){let s=this.game.world.heightAt(this.pos.x,this.pos.z);this.y=It(this.y,s,1-Math.exp(-18*t)),this.pos.y=s;let o=this.rig;o.root.position.set(this.pos.x,this.y+(this.jumpY||0),this.pos.z),o.root.rotation.y=this.yaw,o.animate(t,{speed:e,attack:i,hurt:this.frozenT>0?.3:this.hurtT>0?Math.min(1,this.hurtT/.25):0}),this.flashT>0?o.setFlash(.9):this.state==="windup"&&this.type!=="boss"?o.setFlash(Math.floor(this.st*14)%2?.35:0):this.state==="windup"||this.state==="leapPrep"?o.setFlash(Math.floor(this.st*10)%2?.25:0):o.setFlash(0)}dispose(){this.clearTele(),this.ice&&(this.game.scene.remove(this.ice),this.ice=null),this.game.scene.remove(this.root)}},Fr=class{constructor(t,e,i,n,s,o,a){this.game=t,this.rig=e==="guard"?vd():Sd(),this.pos=new A(i,t.world.heightAt(i,n),n),this.baseYaw=s,this.yaw=s,this.name=o,this.lines=a,this.radius=.4,t.scene.add(this.rig.root),t.world.circles.push({x:i,z:n,r:.4,y:this.pos.y})}update(t){let e=this.game.player,n=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<4?Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z):this.baseYaw;this.yaw=En(this.yaw,n,4,t),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.yaw,this.rig.animate(t,{speed:0})}},nl=class{constructor(t,e){this.game=t;let i=this.root=new qt,n=Wt({color:new lt("#8a5a3a")}),s=Wt({color:new lt("#e8d8b8")}),o=Wt({color:new lt("#2a2020")}),a=new at(new be(.1,6,5),n);a.scale.set(.9,.8,1.2),a.position.y=.1;let l=new at(new be(.075,6,4),s);l.position.set(0,.07,.03);let c=new at(new be(.065,6,5),n);c.position.set(0,.19,.08);let h=new at(new me(.02,.05,4),o);h.rotation.x=Math.PI/2,h.position.set(0,.18,.15);let d=new at(new At(.06,.015,.1),o);d.position.set(0,.12,-.13),d.rotation.x=-.4,this.wings=[];for(let u of[-1,1]){let f=new qt;f.position.set(u*.07,.13,0);let p=new at(new At(.14,.015,.1),n);p.position.x=u*.06,f.add(p),i.add(f),this.wings.push(f)}this.head=c,i.add(a,l,c,h,d),i.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),t.scene.add(i),this.pos=e.clone(),this.yaw=I(0,Math.PI*2),this.state="idle",this.t=I(0,2),this.hopY=0,this.vel=new A}update(t){let e=this.game,i=e.player;this.t-=t;let n=Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z);if(this.state!=="fly"&&this.state!=="gone"&&(n<2.6||e.alarm>0)){this.state="fly";let s=this.pos.x-i.pos.x,o=this.pos.z-i.pos.z,a=Math.hypot(s,o)||1;this.vel.set(s/a*4+I(-1,1),4.5,o/a*4+I(-1,1)),this.yaw=Math.atan2(this.vel.x,this.vel.z)}if(this.state==="idle")this.head.position.y=.19-(Math.sin(e.time*9+this.yaw*10)>.6?.05:0),this.t<=0&&(this.t=I(.4,1.6),Math.random()<.6&&(this.state="hop",this.hopT=0,this.yaw+=I(-1.2,1.2)));else if(this.state==="hop"){this.hopT+=t;let s=this.hopT/.2;this.hopY=Math.sin(Math.min(1,s)*Math.PI)*.12;let o=this.pos.x+Math.sin(this.yaw)*t*1.2,a=this.pos.z+Math.cos(this.yaw)*t*1.2;e.world.isBlocked(o,a,.1,this.pos.y)||(this.pos.x=o,this.pos.z=a),s>=1&&(this.state="idle",this.hopY=0)}else if(this.state==="fly"){this.pos.addScaledVector(this.vel,t),this.vel.y+=t*1.5;for(let s of this.wings)s.rotation.z=Math.sin(e.time*50)*1.1*(s.position.x>0?1:-1);this.pos.y>14&&(this.state="gone",this.root.visible=!1,this.t=I(8,16))}else if(this.state==="gone"&&this.t<=0&&e.alarm<=0){let s=e.world.randomWalkable(i.pos.x,i.pos.z,8,15);if(s){this.pos.copy(s),this.state="idle",this.root.visible=!0;for(let o of this.wings)o.rotation.z=0}else this.t=2}(this.state==="idle"||this.state==="hop")&&(this.pos.y=e.world.heightAt(this.pos.x,this.pos.z)),this.root.position.set(this.pos.x,this.pos.y+this.hopY,this.pos.z),this.root.rotation.y=this.yaw}};var sl=class{constructor(t){this.game=t;let e=i=>document.getElementById(i);this.el={hud:e("hud"),hpFill:e("hp-fill"),hpLag:e("hp-lag"),hpText:e("hp-text"),quest:e("quest-text"),questTitle:e("quest-title"),banner:e("banner"),bannerMain:e("banner-main"),bannerSub:e("banner-sub"),dialog:e("dialog"),dName:e("dialog-name"),dText:e("dialog-text"),prompt:e("prompt"),boss:e("boss"),bossFill:e("boss-fill"),bossLag:e("boss-lag"),bossName:e("boss-name"),bars:e("hpbars"),title:e("title"),over:e("gameover"),combo:e("combo"),comboN:e("combo-n"),kills:e("kills"),best:e("best"),toast:e("toast"),flash:e("flash")},this.hpLag=1,this.bossLag=1,this.dialogState=null,this.bars=new Map,this.bannerT=0,this.toastT=0}showHud(t){this.el.hud.classList.toggle("hidden",!t)}setClass(t,e=this.game.player){Yc(document.getElementById("portrait-cv"),t.id),document.getElementById("hero-name").innerHTML=`${t.title} <b>${t.name}</b><span class="lv">Lv.${e?.level??1}</span>`,this.refreshBag();for(let i of["atk","dash","skill","skill2","skill3"]){let n=t.labels[i];document.getElementById("sk-"+i).textContent=n,document.querySelectorAll(".lbl-"+i).forEach(s=>s.textContent=n)}document.querySelector("#combo span").textContent=t.hitWord}setQuest(t,e){let i=t+"|"+e;if(i===this.questKey)return;let n=!this.questKey||this.questKey.split("|")[0]!==t;if(this.questKey=i,this.el.questTitle.textContent=t,!n){this.el.quest.innerHTML=e;return}this.el.quest.innerHTML=e,this.el.quest.parentElement.classList.remove("pulse"),this.el.quest.parentElement.offsetWidth,this.el.quest.parentElement.classList.add("pulse")}banner(t,e="",i=2.6,n=""){this.el.bannerMain.textContent=t,this.el.bannerSub.textContent=e,this.el.banner.className="show "+n,this.bannerT=i}slots(t){return this.slotCache=this.slotCache||{},this.slotCache[t]||(this.slotCache[t]=[...document.querySelectorAll(`[data-slot="${t}"]`)].map(e=>({el:e,cd:e.querySelector(".cd"),t:e.querySelector(".cdt")}))),this.slotCache[t]}setCd(t,e,i){this.cdState=this.cdState||{};let n=e>.02,s=n?e>=1?String(Math.ceil(e)):e.toFixed(1):"",o=n?(e/i*100).toFixed(1)+"%":"0%",a=this.cdState[t];for(let l of this.slots(t))l.cd.style.setProperty("--p",o),l.t.textContent!==s&&(l.t.textContent=s),l.el.classList.toggle("cooling",n),a&&!n&&(l.el.classList.remove("ready"),l.el.offsetWidth,l.el.classList.add("ready"));this.cdState[t]=n}setLock(t,e){for(let i of this.slots(t))if(i.el.classList.toggle("locked",!!e),e){i.cd.style.setProperty("--p","0%");let n=`Lv${e}`;i.t.textContent!==n&&(i.t.textContent=n),i.el.classList.remove("cooling")}else i.t.textContent.startsWith("Lv")&&(i.t.textContent="")}showBag(t){document.getElementById("bag").classList.toggle("show",t),t&&this.refreshBag()}itemRow(t,e,i){let n=pi(t),s=document.createElement("div");s.className="it "+e;let o=document.createElement("canvas");o.width=o.height=16,xd(o,t);let a=document.createElement("div");return a.innerHTML=`<span style="color:${Yi[n.tier].color}">${n.name}</span><small>${Yi[n.tier].name} \xB7 ${md(n)}</small>`,s.append(o,a),i&&s.addEventListener("click",l=>{l.stopPropagation(),i()}),s}refreshBag(){let t=this.game;if(!t||!t.player||!document.getElementById("bag").classList.contains("show"))return;let e=t.player,i=t.progressOf(e.cls);document.getElementById("bag-stats").innerHTML=`${e.cfg.title} ${e.cfg.name} <b>Lv.${e.level}</b><br>\uACBD\uD5D8\uCE58 <b>${Math.floor(e.exp)}</b> / ${Nr(e.level)}<br>\uCD5C\uB300 \uCCB4\uB825 <b>${e.maxHp}</b><br>\uACF5\uACA9\uB825 <b>\xD7${e.atkMul.toFixed(2)}</b><br>\uBC1B\uB294 \uD53C\uD574 <b>-${Math.round(e.def*100)}%</b>`;for(let[o,a]of[["eq-weapon",i.weapon],["eq-outfit",i.outfit]]){let l=document.getElementById(o);l.innerHTML="";let c=this.itemRow(a,"on");l.append(...c.childNodes)}let n=document.getElementById("bag-weapons"),s=document.getElementById("bag-outfits");n.innerHTML="",s.innerHTML="";for(let o of[e.cls,...Object.keys(Tn).filter(a=>a!==e.cls)])for(let a of Tn[o]){if(!t.inv.has(a.id)){o===e.cls&&n.append(this.itemRow(a.id,"locked-it"));continue}let l=o===e.cls;n.append(this.itemRow(a.id,(i.weapon===a.id?"on":"")+(l?"":" other"),l?()=>t.equipItem(a.id):null))}for(let o of el){if(!t.inv.has(o.id)){s.append(this.itemRow(o.id,"locked-it"));continue}s.append(this.itemRow(o.id,i.outfit===o.id?"on":"",()=>t.equipItem(o.id)))}}denied(t){for(let e of this.slots(t))e.el.classList.remove("denied"),e.el.offsetWidth,e.el.classList.add("denied")}saveMark(){let t=document.getElementById("savemark");t&&(t.classList.remove("show"),t.offsetWidth,t.classList.add("show"))}toast(t,e=2.2){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e}flash(t,e){let i=this.el.flash;i.style.transition="none",i.style.background=t,i.style.opacity=String(e),requestAnimationFrame(()=>{i.style.transition="opacity 0.35s",i.style.opacity="0"})}dialog(t,e,i){this.dialogState={name:t,lines:e,i:0,shown:0,onDone:i,acc:0},this.el.dialog.classList.add("show"),this.el.dName.textContent=t,this.el.dText.textContent=""}get inDialog(){return!!this.dialogState}advance(){let t=this.dialogState;if(!t)return;let e=t.lines[t.i];if(t.shown<e.length){t.shown=e.length,this.el.dText.textContent=e;return}t.i++,t.shown=0,t.acc=0,t.i>=t.lines.length&&(this.el.dialog.classList.remove("show"),this.dialogState=null,t.onDone&&t.onDone())}setBoss(t){this.bossEnemy=t,this.el.boss.classList.toggle("show",!!t),t&&(this.el.bossName.textContent=t.name||"\uB3C4\uAE68\uBE44 \uB300\uC655",this.bossLag=1)}update(t){let e=this.game,i=e.player,n=this.el,s=i.hp/i.maxHp;this.hpLag=Math.max(s,this.hpLag-t*.5),n.hpFill.style.width=(s*100).toFixed(1)+"%",n.hpLag.style.width=(this.hpLag*100).toFixed(1)+"%",n.hpText.textContent=`${Math.ceil(i.hp)} / ${i.maxHp}`,n.hpFill.classList.toggle("low",s<.3);let o=Nr(i.level);document.getElementById("exp-fill").style.width=(i.exp/o*100).toFixed(1)+"%";let a=`EXP ${Math.floor(i.exp)} / ${o}`,l=document.getElementById("exp-text");l.textContent!==a&&(l.textContent=a),document.getElementById("bag-dot").classList.toggle("hidden",!this.newItem),this.setCd("dash",i.dashCd,i.dashMax||.5),this.setCd("skill",i.skillCd,i.skillMax);for(let f of[2,3]){let p="skill"+f;i.level<rn[f]?this.setLock(p,rn[f]):(this.setLock(p,0),this.setCd(p,(f===2?i.cd2:i.cd3)||0,f===2?i.cd2Max:i.cd3Max))}if(n.kills.textContent=e.kills,n.best&&(n.best.textContent=e.bestCombo),this.bossEnemy){let f=this.bossEnemy,p=Math.max(0,f.hp/f.maxHp);this.bossLag=Math.max(p,this.bossLag-t*.4),n.bossFill.style.width=(p*100).toFixed(1)+"%",n.bossLag.style.width=(this.bossLag*100).toFixed(1)+"%",f.dead&&this.bossLag<=.001&&this.setBoss(null)}this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&n.banner.classList.remove("show")),this.toastT>0&&(this.toastT-=t,this.toastT<=0&&n.toast.classList.remove("show")),e.hitCombo>=2&&e.time-e.lastHitTime<2?(n.combo.classList.add("show"),n.comboN.textContent=e.hitCombo):n.combo.classList.remove("show");let c=this.dialogState;if(c){let f=c.lines[c.i];if(c.shown<f.length){c.acc+=t*38;let p=c.shown;c.shown=Math.min(f.length,Math.floor(c.acc)),c.shown>p&&c.shown%2===0&&e.audio.play("talk"),n.dText.textContent=f.slice(0,c.shown)}n.dialog.classList.toggle("done",c.shown>=f.length)}let h=e.pixel.pixelSize,d=new Set;for(let f of e.enemies){if(f.type==="boss"||f.dead||f.spawning||f.hp>=f.maxHp)continue;d.add(f);let p=this.bars.get(f);p||(p=document.createElement("div"),p.className="ebar",p.innerHTML="<i></i>",n.bars.appendChild(p),this.bars.set(f,p));let x=f.type==="wisp"?2:1.75,g=e.pixel.project({x:f.pos.x,y:f.y+x,z:f.pos.z,isVector3:!0,clone(){return this}});p.style.transform=`translate(${Math.round(g.x/h)*h}px, ${Math.round(g.y/h)*h}px)`,p.firstChild.style.width=f.hp/f.maxHp*100+"%"}for(let[f,p]of this.bars)d.has(f)||(p.remove(),this.bars.delete(f));let u=e.nearInteract;if(u&&!this.inDialog&&e.state==="play"){let f=e.pixel.project(u.promptPos);n.prompt.style.transform=`translate(${Math.round(f.x/h)*h}px, ${Math.round(f.y/h)*h}px)`,n.prompt.innerHTML=`<b>E</b>${u.label}`,n.prompt.classList.add("show")}else n.prompt.classList.remove("show")}},Ed={sword:{bg:"#3a4878",rows:["....................",".......hhhhhh.......",".....hhhhhhhhhh.....","....hhhhhhhhhhhh....","...hhhhhhhhhhhhhh...","...rrrrrrrrrrrrrr...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","...hsseessssseessh..","...hsseWsssseeWsh...","...hsseessssseessh..","...hspssssssssspsh..","....ssssssmmsssss...",".....ssssssssssss...","......ssssssssss....",".......cwwwwwwc.....",".....wwwcwwwwcwww...","....wwwwwcwwcwwwwww.","...wwwwwwwccwwwwwwww"],col:{h:"#2a2024",r:"#c8302c",s:"#f6d6b6",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",w:"#eeeae0",c:"#2e4f8f"}},mage:{bg:"#4a3a78",rows:[".......kkkkkk.......",".......kkkkkk.......",".......kkkkkk.......",".......vvvvvv.......","kkkkkkkkkkkkkkkkkkkk","...hhhhhhhhhhhhhh...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","..bhsseessssseesshb.","...hsseWsssseeWsh...","..bhsseessssseesshb.","...hspssssssssspsh..","..b.ssssssmmsssss.b.",".....ssssssssssss...","......ssssssssss....",".......gnnnnnng.....",".....nnngnnnngnnn...","....nnnnngnngnnnnnn.","...nnnnnnnggnnnnnnnn"],col:{k:"#16141c",v:"#6a5ad8",h:"#1e1a24",s:"#f4d4b2",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",n:"#3a3a7a",g:"#e0b040",b:"#e0a84a"}},elf:{bg:"#2e5a3a",rows:["....................",".......hhhhhh.......",".....hhhhhhhhhhff...","....hhhhhhhhhhhfFf..","...hhhhhhhhhhhhhf...","...hhhhhhhhhhhhhh...","...hhhhsssshhhhhh...","..hhhsssssssssshhh..","s.hhssssssssssssh.s.","sshhsseessssseesshss","..hhsseWsssseeWshh..","..hhsseessssseesshh.","..hhspssssssssspshh.","..hh.ssssssmmssss.hh","..hh..ssssssssss..hh","..hh...ssssssss...hh","..hh...lgggggl....hh","..h..gggglgglggg...h","....ggggggllgggggg..","...gggggggggggggggg."],col:{h:"#e8e4c8",s:"#fbe2cc",e:"#2a6a4a",W:"#ffffff",p:"#f8a8b8",m:"#c86a60",g:"#5aa84e",l:"#bfe07a",f:"#ff9ac0",F:"#fff0a0"}}};function Yc(r,t="sword"){if(!r)return;let e=Ed[t]||Ed.sword,i=r.getContext("2d");i.fillStyle=e.bg,i.fillRect(0,0,20,20),e.rows.forEach((n,s)=>[...n].forEach((o,a)=>{e.col[o]&&(i.fillStyle=e.col[o],i.fillRect(a,s,1,1))}))}var Zc="dot3d-palace-save-v1";function Td(){try{let r=localStorage.getItem(Zc);if(!r)return null;let t=JSON.parse(r);return t&&t.v===1?t:null}catch{return null}}function Ad(r){try{return localStorage.setItem(Zc,JSON.stringify({v:1,savedAt:Date.now(),...r})),!0}catch{return!1}}function Rd(){try{localStorage.removeItem(Zc)}catch{}}var Nt=(r,t,e)=>new A(r,t,e),$c=class{constructor(){this.pixel=new Za(document.getElementById("stage"));let t=this.scene=new Bn;t.background=new lt("#3b4a3a"),this.time=0,this.state="title",this.night=0,this.nightTarget=0,this.hitstop=0,this.shakeAmt=0,this.kills=0,this.hitCombo=0,this.lastHitTime=-10,this.alarm=0,this.enemies=[],this.projectiles=[],this.timers=[],this.rains=[],this.tornados=[],this.spawnQueue=[],this.wave=0,this.round=0,this.stage=0,this.waveActive=!1,this.focus=Nt(0,0,10),this.lead=Nt(),this.setupLights(),this.world=new Ja(t),this.fx=new Qa(t,this.pixel),this.audio=new tl,this.ui=new sl(this),this.progress={},this.inv=new Set(["sw0","mg0","bw0","ot0"]),this.drops=[],this.target=null,this.paused=!1,this.player=new il(this),this.buildTargetMarker(),this.npcs=[new Fr(this,"guard",-12.4,6.4,.6,"\uC218\uBB38\uC7A5 \uBC15\uB3CC\uC1E0",[]),new Fr(this,"lady",19.2,7.5,-.9,"\uB098\uC778 \uC5F0\uC774",["\uC5B4\uBA38, \uAC80\uAC1D\uB2D8. \uC774 \uAD81\uC740 \uBC24\uB9CC \uB418\uBA74 \uB3C4\uAE68\uBE44\uBD88\uC774 \uB5A0\uB2E4\uB140\uC694.","\uB3C4\uAE68\uBE44\uB4E4\uC740 \uC7A5\uB09C\uC774 \uC2EC\uD558\uC9C0\uB9CC, \uD63C\uCB50\uC744 \uB0B4\uC8FC\uBA74 \uAE08\uBC29 \uB2EC\uC544\uB09C\uB2F5\uB2C8\uB2E4.","\uD478\uB978 \uBD88\uB369\uC774\uB97C \uC3D8\uB294 \uB140\uC11D\uC740 \uAC80\uC73C\uB85C \uCCD0\uB0B4\uBA74 \uD295\uACA8\uB0BC \uC218 \uC788\uB300\uC694!","(N \uD0A4\uB85C \uB0AE\uACFC \uBC24\uC744 \uBC14\uAFD4 \uBCFC \uC218 \uC788\uC5B4\uC694. \uC2F8\uC6B0\uB294 \uC911\uC5D4 \uC548 \uB3FC\uC694.)"])],this.birds=[];for(let[e,i]of[[-6,6],[-5.4,6.6],[6.5,15],[7,14.3],[-15,9],[14,-.5],[.5,-9.5]])this.birds.push(new nl(this,Nt(e,this.world.heightAt(e,i),i)));this.world.buildNav(),this.flowT=0,this.setupInput(),this.bestCombo=0,this.saveT=15,this.selectedCls="sword",this.setupClassSelect(),this.applySave(Td()),this.ui.setClass(this.player.cfg),this.updateQuest(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.save(!1)}),window.addEventListener("pagehide",()=>this.save(!1)),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}setupLights(){let t=this.scene;this.hemi=new dr("#dfe9ff","#8a7c62",1.15),t.add(this.hemi);let e=this.sun=new gr("#fff0d6",2.5);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let i=e.shadow.camera;i.left=-30,i.right=30,i.top=30,i.bottom=-30,i.near=1,i.far=140,e.shadow.bias=-6e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sunOffset=Nt(-16,30,14),this.points=[];for(let n=0;n<8;n++){let s=new mr("#ffb35c",0,9,1.4);t.add(s),this.points.push(s)}this.lightTimer=0}updateLights(t){let e=this.night;vi.night.value=e;let i=(f,p)=>new lt(f).lerp(new lt(p),e);this.sun.color.copy(i("#fff0d6","#8ea6ff")),this.sun.intensity=It(2.5,.9,e),this.hemi.color.copy(i("#dfe9ff","#55669e")),this.hemi.groundColor.copy(i("#8a7c62","#262438")),this.hemi.intensity=It(1.15,.95,e),this.scene.background.copy(i("#3b4a3a","#0e1220")),this.world.setNight(e);let n=this.focus,s=cy.copy(this.sunOffset).normalize(),o=hy.crossVectors(Cd.set(0,1,0),s).normalize(),a=Cd.crossVectors(s,o).normalize(),l=60/2048,c=Math.round(n.dot(o)/l)*l,h=Math.round(n.dot(a)/l)*l,d=n.dot(s),u=uy.copy(o).multiplyScalar(c).addScaledVector(a,h).addScaledVector(s,d);if(this.sun.target.position.copy(u),this.sun.position.copy(u).add(this.sunOffset),this.sun.target.updateMatrixWorld(),this.lightTimer-=t,this.lightTimer<=0){this.lightTimer=.25;let f=[...this.world.lanterns].sort((p,x)=>p.distanceToSquared(n)-x.distanceToSquared(n));for(let p=0;p<6;p++)this.points[p].position.copy(f[p]);this.points[6].position.copy(this.world.hallLightPos[0]),this.points[7].position.copy(this.world.hallLightPos[1])}for(let f=0;f<8;f++){let p=1+Math.sin(this.time*9+f*1.7)*.06+Math.sin(this.time*23+f)*.04;this.points[f].intensity=e*(f<6?22:30)*p,this.points[f].distance=f<6?8:11}}setupInput(){this.keys=new Set,this.input={mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null},this.mouse={x:0,y:0,t:-10},window.addEventListener("keydown",e=>{if(e.code==="Tab"&&e.preventDefault(),e.repeat){this.keys.add(e.code);return}this.keys.add(e.code),this.onKey(e.code,e)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear());let t=document.getElementById("app");t.addEventListener("mousemove",e=>{this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time}),t.addEventListener("mousedown",e=>{if(this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time,this.state==="title"){let i=e.target.closest&&e.target.closest(".cls");i&&this.selectClass(i.dataset.cls),this.start();return}if(this.audio.unlock(),this.paused){(code==="KeyB"||code==="Escape"||code==="Tab")&&this.toggleBag(!1);return}if(this.ui.inDialog){this.ui.advance();return}this.state==="play"&&(e.button===0&&this.player.startAttack(this.readInput()),e.button===2&&!this.cdCheck("skill",this.player.skillCd)&&this.player.startSkill(this.readInput()))}),t.addEventListener("contextmenu",e=>e.preventDefault());for(let e of["bag-btn","bag"]){let i=document.getElementById(e);i.addEventListener("mousedown",n=>n.stopPropagation()),i.addEventListener("touchstart",n=>n.stopPropagation(),{passive:!0})}document.getElementById("bag-btn").addEventListener("click",()=>{this.state==="play"&&this.toggleBag()}),document.getElementById("bag-close").addEventListener("click",()=>this.toggleBag(!1)),t.addEventListener("wheel",e=>{this.pixel.zoom(e.deltaY>0?-1:1),this.saveT=Math.min(this.saveT,2)},{passive:!0}),this.setupTouch()}setupTouch(){let t=document.getElementById("touch");if(!("ontouchstart"in window))return;t.classList.add("on"),document.body.classList.add("touch"),document.getElementById("dialog").addEventListener("touchstart",c=>{c.preventDefault(),this.ui.advance()},{passive:!1}),document.getElementById("gameover").addEventListener("touchstart",c=>{c.preventDefault(),this.state==="dead"&&this.retry()},{passive:!1});let e=document.getElementById("stick"),i=e.firstElementChild;this.touchMove={x:0,z:0};let n=null,s=0,o=0,a=document.getElementById("stick-area");a.addEventListener("touchstart",c=>{this.state==="title"&&this.start();let h=c.changedTouches[0];n=h.identifier,s=h.clientX,o=h.clientY,e.style.left=s+"px",e.style.top=o+"px",e.classList.add("show"),c.preventDefault()},{passive:!1}),a.addEventListener("touchmove",c=>{for(let h of c.changedTouches)if(h.identifier===n){let d=h.clientX-s,u=h.clientY-o,f=Math.hypot(d,u),p=50;f>p&&(d*=p/f,u*=p/f),i.style.transform=`translate(${d}px, ${u}px)`,this.touchMove.x=d/p,this.touchMove.z=u/p}c.preventDefault()},{passive:!1});let l=c=>{for(let h of c.changedTouches)h.identifier===n&&(n=null,this.touchMove.x=0,this.touchMove.z=0,i.style.transform="",e.classList.remove("show"))};a.addEventListener("touchend",l),a.addEventListener("touchcancel",l);for(let c of document.querySelectorAll("#touch [data-k]"))c.addEventListener("touchstart",h=>{h.preventDefault(),this.state==="title"?this.start():this.onKey(c.dataset.k)},{passive:!1})}readInput(){let t=this.keys,e=0,i=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(i-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i+=1),this.touchMove&&(this.touchMove.x||this.touchMove.z)&&(e=this.touchMove.x,i=this.touchMove.z);let n=Math.hypot(e,i),s=this.input;return s.moveLen=Math.min(1,n),s.mx=n>0?e/Math.max(1,n):0,s.mz=n>0?i/Math.max(1,n):0,n>1&&(s.mx=e/n,s.mz=i/n),s.mouseRecent=this.time-this.mouse.t<3,s.mouseWorld=s.mouseRecent?this.pixel.unproject(this.mouse.x,this.mouse.y,this.player.pos.y+.6):null,(this.ui.inDialog||this.state!=="play")&&(s.moveLen=0,s.mx=s.mz=0),s}setupClassSelect(){for(let t of document.querySelectorAll("#classes .cls")){let e=Cn[t.dataset.cls];Yc(t.querySelector("canvas"),e.id),t.querySelector(".role").textContent=e.role,t.querySelector(".desc").textContent=e.desc}this.selectClass(this.selectedCls)}selectClass(t){if(Cn[t]){this.selectedCls=t;for(let e of document.querySelectorAll("#classes .cls"))e.classList.toggle("sel",e.dataset.cls===t);this.player.cls!==t&&(this.player.setClass(t),this.ui.setClass(this.player.cfg))}}progressOf(t){return this.progress[t]||(this.progress[t]={level:1,exp:0,weapon:Tn[t][0].id,outfit:"ot0"}),this.progress[t]}buildTargetMarker(){let t=new qt,e=new ie({color:"#ff5a3a",transparent:!0,opacity:.85,blending:Oe,depthWrite:!1}),i=new at(new Hn(.85,1,24,1),e);i.rotation.x=-Math.PI/2;let n=new ie({color:"#ffe0a0",transparent:!0,blending:Oe,depthWrite:!1}),s=new qt;for(let a=0;a<4;a++){let l=new at(new Ce(.34,.1),n),c=a/4*Math.PI*2;l.position.set(Math.cos(c)*1.15,0,Math.sin(c)*1.15),l.rotation.set(-Math.PI/2,0,-c+Math.PI/2),s.add(l)}let o=new at(new me(.24,.48,4),new ie({color:"#ff6a3a"}));o.rotation.x=Math.PI,o.userData.noOutline=!0,t.add(i,s,o),t.visible=!1,this.scene.add(t),this.marker={g:t,ring:i,ticks:s,arrow:o}}targetRange(){return this.player.cls==="sword"?7:12}validTarget(t){if(!t||t.dead||t.spawning)return!1;let e=this.player.pos;return Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<this.targetRange()+2}updateTarget(t=!1){let e=this.player.pos,i=this.enemies.filter(n=>!n.dead&&!n.spawning).map(n=>({e:n,d:Math.hypot(n.pos.x-e.x,n.pos.z-e.z)})).filter(n=>n.d<this.targetRange()).sort((n,s)=>n.d-s.d);if(t&&i.length){let n=i.findIndex(s=>s.e===this.target);this.target=i[(n+1)%i.length].e,this.audio.play("talk");return}if(this.validTarget(this.target)){let n=Math.hypot(this.target.pos.x-e.x,this.target.pos.z-e.z);i.length&&i[0].e!==this.target&&i[0].d<n-2.5&&(this.target=i[0].e);return}this.target=i.length?i[0].e:null}updateMarker(t){let e=this.marker,i=this.target;if(e.g.visible=!!i&&this.state==="play",!e.g.visible)return;let n=i.type==="boss"?1.6:i.type==="wisp"?.7:.8;e.g.position.set(i.pos.x,i.y+.05,i.pos.z);let s=1+Math.sin(this.time*8)*.06;e.ring.scale.setScalar(n*s),e.ticks.scale.setScalar(n*(1.05+Math.sin(this.time*8)*.1)),e.ticks.rotation.y+=t*1.5;let o=i.type==="boss"?4.4:i.type==="wisp"?2.3:2.2;e.arrow.position.set(0,o+Math.abs(Math.sin(this.time*5))*.25,0)}onLevelUp(t,e){let i=Nt(t.pos.x,t.y,t.pos.z);this.audio.play("levelup"),this.ui.flash("#ffd060",.35),this.ui.banner("LEVEL UP",`${t.cfg.title} ${t.cfg.name} \xB7 Lv.${t.level}`,2.4,"win-banner"),this.fx.circle(i,2.2,"#ffd060",1.4,2),this.fx.ring(i,3,"#fff2c0",.5);for(let n=0;n<70;n++){let s=Math.random()*Math.PI*2,o=I(.2,.9);this.fx.add.emit({x:i.x+Math.cos(s)*o,y:i.y+I(0,.5),z:i.z+Math.sin(s)*o,vy:I(2,7),drag:1,life:I(.6,1.3),size:I(2,4),endSize:1,color:"#fff6c0",color2:"#ffa020"})}for(let n of[2,3])if(t.level-e<rn[n]&&t.level>=rn[n]){let s=t.cfg.labels["skill"+n];setTimeout(()=>this.ui.toast(`\uC0C8 \uC2A4\uD0AC \uD574\uAE08: ${s} (${n===2?"L":"I"})`,3),900)}this.ui.setClass(t.cfg,t),this.save(!1)}spawnDrop(t,e){let i=pi(e),n=new lt(Yi[i.tier].color),s=new qt,o=new at(new At(.34,.34,.34),new ie({color:n})),a=new at(new At(.2,.2,.2),new ie({color:"#ffffff"}));a.userData.noOutline=!0,o.add(a);let l=new at(new te(.16,.3,4,8,1,!0),new ie({color:n,transparent:!0,opacity:.35,blending:Oe,depthWrite:!1,side:xe}));l.position.y=2,s.add(o,l),s.position.set(t.x,this.world.heightAt(t.x,t.z),t.z),this.scene.add(s);let c=Nt(I(-2,2),5,I(-2,2));this.drops.push({id:e,g:s,box:o,beam:l,vel:c,y:.6,t:0,col:n}),this.fx.ring(s.position,1.2,Yi[i.tier].color,.4)}updateDrops(t){let e=this.player;for(let i=this.drops.length-1;i>=0;i--){let n=this.drops[i];n.t+=t;let s=this.world.heightAt(n.g.position.x,n.g.position.z);n.t<.8?(n.vel.y-=14*t,this.world.move(n.g.position,n.vel.x*t,n.vel.z*t,.1),n.y=Math.max(.35,n.y+n.vel.y*t)):n.y=.45+Math.sin(n.t*3)*.08,n.box.rotation.y+=t*2.5,n.box.position.y=n.y,n.g.position.y=s,n.beam.material.opacity=.25+Math.sin(n.t*5)*.08,Math.random()<t*8&&this.fx.add.emit({x:n.g.position.x+I(-.3,.3),y:s+I(.2,1.5),z:n.g.position.z+I(-.3,.3),vy:.8,life:.6,size:2,color:"#ffffff",color2:"#"+n.col.getHexString()});let o=Math.hypot(e.pos.x-n.g.position.x,e.pos.z-n.g.position.z);if(n.t>.8&&o<3.5&&!e.dead){let a=Math.min(1,t*8);n.g.position.x+=(e.pos.x-n.g.position.x)*a,n.g.position.z+=(e.pos.z-n.g.position.z)*a}n.t>.8&&o<.7&&(this.scene.remove(n.g),this.drops.splice(i,1),this.pickup(n.id))}}pickup(t){let e=pi(t),i=Yi[e.tier],n=this.player;this.audio.play("coin"),this.fx.spark(n.pos.x,n.y+1,n.pos.z,14,i.color,4),this.inv.has(t)?(n.addExp(15+e.tier*15),this.ui.toast(`\uC774\uBBF8 \uAC00\uC9C4 ${e.name} \u2192 \uACBD\uD5D8\uCE58 +${15+e.tier*15}`,2.2)):(this.inv.add(t),this.ui.toast(`\uD68D\uB4DD! [${i.name}] ${e.name} \u2014 B \uD0A4\uB85C \uAC00\uBC29 \uC5F4\uAE30`,3),this.ui.newItem=!0,this.ui.refreshBag()),this.save(!1)}toggleBag(t=!this.paused){this.paused=t,this.ui.showBag(t),t&&(this.ui.newItem=!1)}equipItem(t){let e=this.player,i=pi(t);if(!i||!this.inv.has(t))return;if(i.kind==="weapon"&&i.cls!==e.cls){this.ui.toast("\uB2E4\uB978 \uC9C1\uC5C5\uC758 \uBB34\uAE30\uC608\uC694"),this.audio.play("denied");return}e.equip(t),this.audio.play(i.kind==="weapon"?"draw":"coin");let n=Nt(e.pos.x,e.y,e.pos.z);this.fx.ring(n,1.6,Yi[i.tier].color,.4);for(let s=0;s<30;s++)this.fx.add.emit({x:n.x+I(-.4,.4),y:n.y+I(0,1.6),z:n.z+I(-.4,.4),vy:I(.5,2),life:I(.4,.8),size:2,color:"#ffffff",color2:Yi[i.tier].color});this.ui.setClass(e.cfg,e),this.ui.refreshBag(),this.save(!1)}applySave(t){let e=document.getElementById("title-save");if(!t){e&&(e.textContent="");return}if(this.kills=t.kills|0,this.round=t.round|0,this.bestCombo=t.bestCombo|0,this.stage=this.round>0?3:Math.min(1,t.stage|0),t.music===!1&&this.audio.musicOn&&this.audio.toggleMusic(),t.outline===0&&(this.pixel.compMat.uniforms.outline.value=0),typeof t.zoom=="number"&&t.zoom!==this.pixel.userZoom&&(this.pixel.userZoom=t.zoom,this.pixel.resize()),t.night&&(this.nightTarget=1,this.night=1),t.progress)for(let n of Object.keys(Cn))t.progress[n]&&Object.assign(this.progressOf(n),t.progress[n]);if(Array.isArray(t.inv))for(let n of t.inv)pi(n)&&this.inv.add(n);let i=t.cls&&Cn[t.cls]?t.cls:this.player.cls;if(this.player.cls=null,this.selectClass(i),e){let n=new Date(t.savedAt||Date.now()),s=o=>String(o).padStart(2,"0");e.innerHTML=`\uC774\uC5B4\uD558\uAE30 \xB7 ${this.player.cfg.title} <b>Lv.${this.player.level}</b> \xB7 <b>${this.round+1}\uD68C\uCC28</b> \xB7 \uD1F4\uCE58 <b>${this.kills}</b> \xB7 \uCD5C\uACE0 \uC5F0\uC18D <b>${this.bestCombo}</b><small>${n.getMonth()+1}/${n.getDate()} ${s(n.getHours())}:${s(n.getMinutes())} \uC790\uB3D9 \uC800\uC7A5 \xB7 Delete \uD0A4: \uAE30\uB85D \uC9C0\uC6B0\uAE30</small>`}}save(t=!0){Ad({kills:this.kills,round:this.round,stage:this.stage===2?this.round>0?3:1:this.stage,bestCombo:this.bestCombo,cls:this.player.cls,progress:this.progress,inv:[...this.inv],music:this.audio.musicOn,outline:this.pixel.compMat.uniforms.outline.value,zoom:this.pixel.userZoom,night:!this.waveActive&&this.nightTarget>.5})&&t&&this.ui.saveMark(),this.saveT=15}onKey(t){if(this.state==="title"){if(t==="Delete"||t==="Backspace"){Rd(),this.kills=0,this.round=0,this.stage=0,this.bestCombo=0,this.progress={},this.inv=new Set(["sw0","mg0","bw0","ot0"]);let n=this.player.cls;this.player.cls=null,this.selectClass(n),this.applySave(null),this.updateQuest();let s=document.getElementById("title-save");s&&(s.textContent="\uAE30\uB85D\uC744 \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uC2DC\uC791\uD569\uB2C8\uB2E4.");return}let i=Dr.indexOf(this.selectedCls);if(t==="ArrowLeft"||t==="KeyA"){this.selectClass(Dr[(i+2)%3]),this.audio.unlock(),this.audio.play("talk");return}if(t==="ArrowRight"||t==="KeyD"){this.selectClass(Dr[(i+1)%3]),this.audio.unlock(),this.audio.play("talk");return}if(t==="Digit1"||t==="Digit2"||t==="Digit3"){this.selectClass(Dr[+t.slice(-1)-1]);return}this.start();return}if(this.audio.unlock(),t==="KeyM"){let i=this.audio.toggleMusic();this.ui.toast(i?"\uC74C\uC545 \uCF1C\uC9D0":"\uC74C\uC545 \uAEBC\uC9D0"),this.save(!1);return}if(t==="Equal"||t==="NumpadAdd"){this.pixel.zoom(1);return}if(t==="Minus"||t==="NumpadSubtract"){this.pixel.zoom(-1);return}if(t==="KeyO"){this.pixel.compMat.uniforms.outline.value=this.pixel.compMat.uniforms.outline.value?0:1,this.ui.toast(this.pixel.compMat.uniforms.outline.value?"\uC678\uACFD\uC120 \uCF1C\uC9D0":"\uC678\uACFD\uC120 \uAEBC\uC9D0"),this.save(!1);return}if(this.state==="dead"){(t==="KeyR"||t==="Enter"||t==="act")&&this.retry();return}if(this.ui.inDialog){["KeyE","Space","Enter","KeyJ","KeyZ","act","atk"].includes(t)&&this.ui.advance();return}let e=this.readInput();switch(t){case"KeyJ":case"KeyZ":case"atk":this.player.startAttack(e);break;case"Space":case"ShiftLeft":case"ShiftRight":case"dash":this.cdCheck("dash",this.player.dashCd)||this.player.startDash(e);break;case"KeyL":case"KeyQ":case"skill2":!this.lockCheck(2)&&!this.cdCheck("skill2",this.player.cd2)&&this.player.startExtraSkill(e,2);break;case"KeyI":case"KeyR":case"skill3":!this.lockCheck(3)&&!this.cdCheck("skill3",this.player.cd3)&&this.player.startExtraSkill(e,3);break;case"bag":this.toggleBag();break;case"KeyK":case"KeyX":case"skill":this.cdCheck("skill",this.player.skillCd)||this.player.startSkill(e);break;case"KeyE":case"Enter":case"act":this.interact();break;case"KeyN":if(this.waveActive){this.ui.toast("\uB3C4\uAE68\uBE44\uAC00 \uB0A0\uB6F0\uB294 \uC911\uC5D4 \uC2DC\uAC04\uC744 \uBC14\uAFC0 \uC218 \uC5C6\uC5B4\uC694");break}this.nightTarget=this.nightTarget>.5?0:1,this.ui.toast(this.nightTarget?"\uBC24\uC774 \uCC3E\uC544\uC635\uB2C8\uB2E4\u2026":"\uB0A0\uC774 \uBC1D\uC544\uC635\uB2C8\uB2E4");break;case"Tab":this.updateTarget(!0);break;case"KeyB":this.toggleBag();break;case"KeyG":this.godMode=!this.godMode,this.ui.toast(this.godMode?"\uBB34\uC801 (\uB514\uBC84\uADF8)":"\uBB34\uC801 \uD574\uC81C");break}}lockCheck(t){return this.player.level>=rn[t]?!1:(this.ui.denied("skill"+t),this.audio.play("denied"),this.ui.toast(`${this.player.cfg.labels["skill"+t]}: Lv.${rn[t]}\uC5D0 \uC5F4\uB9BD\uB2C8\uB2E4`,1.6),!0)}cdCheck(t,e){return!(e>.05)||this.player.dead?!1:(this.ui.denied(t),this.audio.play("denied"),!0)}start(){this.audio.unlock(),this.state="play",this.player.cls!==this.selectedCls&&this.player.setClass(this.selectedCls),this.ui.setClass(this.player.cfg),this.player.hp=this.player.maxHp,this.save(!1),document.getElementById("title").classList.add("hide"),this.ui.showHud(!0),this.ui.banner("\u6708\u4E0B\u5BAE","\uB3C4\uAE68\uBE44 \uC57C\uD589",2.8,"title-banner")}findInteract(){let t=this.player.pos,e=null,i=2.4;for(let n of this.npcs){let s=Math.hypot(n.pos.x-t.x,n.pos.z-t.z);s<i&&(i=s,e={kind:"npc",npc:n,label:"\uB300\uD654",promptPos:n.pos.clone().add(Nt(0,2.1,0))})}for(let n of this.world.drums){let s=Math.hypot(n.pos.x-t.x,n.pos.z-t.z);s<2.9&&s-.5<i&&(i=s-.5,e={kind:"drum",drum:n,label:this.waveActive?"\uBD81 \uCE58\uAE30":"\uBD81 \uC6B8\uB9AC\uAE30",promptPos:n.pos.clone().add(Nt(0,4,0))})}return e}interact(){let t=this.nearInteract;if(t)if(t.kind==="npc"){let e=t.npc,i=e.lines;e.name.startsWith("\uC218\uBB38\uC7A5")&&(i=this.guardLines()),this.ui.dialog(e.name,i,()=>{e.name.startsWith("\uC218\uBB38\uC7A5")&&this.stage===0&&(this.stage=1,this.updateQuest(),this.save())})}else t.kind==="drum"&&(this.player.yaw=Math.atan2(t.drum.pos.x-this.player.pos.x,t.drum.pos.z-this.player.pos.z),this.player.startAttack({moveLen:0,mx:0,mz:0}),this.player.cls!=="sword"&&this.drumHit(t.drum))}guardLines(){return this.stage===0?[`\uC5B4\uC774, \uAC70\uAE30 \uC80A\uC740 ${this.player.cfg.title}! \uB9C8\uCE68 \uC798 \uC654\uC18C.`,"\uD574\uB9CC \uC9C0\uBA74 \uC774 \uAD81\uAD90 \uB9C8\uB2F9\uC5D0 \uB3C4\uAE68\uBE44 \uB188\uB4E4\uC774 \uB5BC\uB85C \uBAB0\uB824\uC640 \uB09C\uC7A5\uD310\uC744 \uCE5C\uB2E4\uC624.","\uC800\uAE30 \uC800 \uD070 \uBD81\uC774 \uBCF4\uC774\uC2DC\uC624? \uBD81\uC744 \uB465\u2014 \uD558\uACE0 \uC6B8\uB9AC\uBA74 \uC228\uC5B4 \uC788\uB358 \uB188\uB4E4\uC774 \uC8C4\uB2E4 \uD280\uC5B4\uB098\uC62C \uAC8C\uC694.","\uB188\uB4E4\uC744 \uBAA8\uC870\uB9AC \uD63C\uCB50\uB0B4 \uC8FC\uC2DC\uC624! \uB9C8\uC9C0\uB9C9\uC5D4 \uB3C4\uAE68\uBE44 \uB300\uC655\uC774 \uB098\uC628\uB2E4\uB294 \uC18C\uBB38\uC774 \uC788\uC73C\uB2C8 \uC870\uC2EC\uD558\uACE0.","(\uBD81 \uC55E\uC5D0\uC11C E \uD0A4, \uD639\uC740 \uAC80\uC73C\uB85C \uBD81\uC744 \uBCA0\uC5B4 \uC6B8\uB9AC\uC138\uC694)"]:this.waveActive?["\uC9C0\uAE08 \uD55C\uAC00\uD558\uAC8C \uC774\uC57C\uAE30\uD560 \uB54C\uAC00 \uC544\uB2C8\uC624! \uB3C4\uAE68\uBE44\uB4E4\uC774 \uBAB0\uB824\uC624\uACE0 \uC788\uC18C!"]:this.round>=1?[`\uD5C8\uD5C8, \uB300\uC655\uAE4C\uC9C0 \uCAD3\uC544\uB0B4\uB2E4\uB2C8! \uBC8C\uC368 ${this.kills}\uB9C8\uB9AC\uB098 \uD63C\uCB50\uC744 \uB0C8\uAD6C\uB824.`,"\uBD81\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC62C \uAC70\uC694. \uAC01\uC624\uAC00 \uB418\uC5C8\uB2E4\uBA74 \uC5B8\uC81C\uB4E0."]:["\uBD81\uC740 \uC800\uAE30 \uC788\uC18C. \uB465\u2014 \uD558\uACE0 \uC6B8\uB824 \uBCF4\uC2DC\uC624!"]}updateQuest(){let t=this.ui;if(this.stage===0)t.setQuest("\uC784\uBB34","\uC67C\uCABD \uBD81 \uC606\uC758 <b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uB9D0\uC744 \uAC78\uC790");else if(this.stage===1)t.setQuest("\uC784\uBB34","<b>\uD070 \uBD81</b>\uC744 \uC6B8\uB824 \uB3C4\uAE68\uBE44\uB97C \uBD88\uB7EC\uB0B4\uC790");else if(this.stage===2){let e=this.enemies.filter(i=>!i.dead).length+this.spawnQueue.length;t.setQuest(`\uB3C4\uAE68\uBE44 \uC57C\uD589 \xB7 \uC81C ${this.wave} \uD30C`,`\uB0A8\uC740 \uB3C4\uAE68\uBE44 <b>${e}</b>`)}else t.setQuest("\uC790\uC720 \uD0D0\uBC29",`\uBD81\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 <b>${this.round+1}\uD68C\uCC28</b> \uB3C4\uAE68\uBE44\uAC00 \uBAB0\uB824\uC628\uB2E4`)}drumHit(t){t.shake=1,this.audio.play("drum"),this.shake(.35),this.alarm=3,this.fx.ring(Nt(t.pos.x,0,t.pos.z),5,"#fff2c0",.6),this.fx.spark(t.pos.x,2.2,t.pos.z,14,"#fff2c0",5),!this.waveActive&&(this.stage===1||this.stage===3||this.stage===0)&&this.startNight()}startNight(){this.waveActive=!0,this.stage=2,this.wave=0,this.nightTarget=1,this.audio.mood="battle",this.ui.banner("\uB3C4\uAE68\uBE44 \uC57C\uD589",this.round>0?`${this.round+1}\uD68C\uCC28 \u2014 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC628\uB2E4`:"\uBD81\uC18C\uB9AC\uC5D0 \uB3C4\uAE68\uBE44\uB4E4\uC774 \uAE68\uC5B4\uB09C\uB2E4\u2026",3,"night-banner"),setTimeout(()=>this.nextWave(),3200)}waveDef(t){let e=this.round,i=[],n=(s,o)=>{for(let a=0;a<o;a++)i.push(s)};return t===1?(n("blue",4+e),n("red",e)):t===2?(n("blue",3+e),n("red",2+e),n("wisp",2+Math.floor(e/2))):(n("boss",1),n("red",2+e),n("wisp",e)),i}nextWave(){if(this.state==="dead")return;this.wave>0&&this.save(),this.wave++;let t=this.waveDef(this.wave),e=this.wave===3;this.ui.banner(`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C`,e?"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8 \uCD9C\uD604!":`\uB3C4\uAE68\uBE44 ${t.length}\uB9C8\uB9AC`,2.4,e?"boss-banner":""),this.audio.play(e?"drum":"wave");let i=.6;for(let n of t)this.spawnQueue.push({type:n,at:this.time+i}),i+=n==="boss"?1.2:I(.3,.6);this.updateQuest()}spawnEnemy(t){let e=this.player.pos,i=t==="boss"?this.world.randomWalkable(e.x,e.z,6,9):this.world.randomWalkable(e.x,e.z,5,10);i||(i=Nt(0,.12,5));let n=new Ur(this,t,i,1+this.round+Math.floor((this.player.level-1)/3));t==="boss"&&(n.name=this.round>0?`\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8 +${this.round}`:"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8",this.ui.setBoss(n),this.shake(.5)),this.enemies.push(n)}playerSwingHit(t,e){let i=e===2?2.45:2.2,n=e===2?.95:1.35,s=e===3?1:e,o=t.yaw,a=Nt(t.pos.x,t.y+.72,t.pos.z);if(this.fx.slash(a,o,s,{dur:e===3?.2:.16,outer:i+(e===3?.25:0),len:e===3?3.2:2.8,color:e===2?"#fff6d0":e===3?"#d8f4ff":"#a8e4ff"}),this.fx.slash(a,o,s,{dur:e===3?.2:.16,inner:i-.32,outer:i-.05+(e===3?.25:0),len:e===3?3.2:2.8,color:"#ffffff"}),e===2){let c=Nt(t.pos.x+Math.sin(o)*1.4,t.y,t.pos.z+Math.cos(o)*1.4);this.fx.ring(c,1.9,"#fff2c0",.3),this.fx.dust(c.x,c.y,c.z,10);for(let h=0;h<14;h++)this.fx.norm.emit({x:c.x+I(-.4,.4),y:c.y+.1,z:c.z+I(-.4,.4),vx:I(-2,2),vy:I(3,6),vz:I(-2,2),g:18,life:.8,size:2,color:"#9a9284",floor:c.y});this.audio.play("impact")}let l=!1;for(let c of this.enemies){if(c.dead||c.spawning)continue;let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z,u=Math.hypot(h,d),f=c.type==="wisp"?c.y+1.3:c.y;if(Math.abs(f-t.y)>2.2||u>i+c.radius||u>.6&&Math.abs(wn(o,Math.atan2(h,d)))>n)continue;let p=Math.random()<.15,x=Math.round((e===2?I(24,30):e===3?I(18,23):I(13,17))*(p?1.8:1));this.damageEnemy(c,x,p,e===2?9:5.5,e===2?.4:.25),l=!0}for(let c of this.projectiles){if(c.owner!=="enemy"||c.dead)continue;let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z;Math.hypot(h,d)<i+.3&&Math.abs(wn(o,Math.atan2(h,d)))<n+.3&&(c.owner="player",c.dir.set(Math.sin(o),0,Math.cos(o)),c.speed*=1.6,c.dmg=30,c.life=1.2,c.hitSet=new Set,this.audio.play("block"),this.fx.spark(c.pos.x,c.pos.y,c.pos.z,10,"#bff4ff",5),this.ui.toast("\uD295\uACA8\uB0B4\uAE30!",.8),this.hitstop=Math.max(this.hitstop,.06))}for(let c of this.world.drums){let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z;Math.hypot(h,d)<i+1.3&&Math.abs(wn(o,Math.atan2(h,d)))<n&&(this.drumHit(c),l=!0)}l&&this.shake(e===2?.22:.12)}damageEnemy(t,e,i,n,s){let o=this.player;e=Math.max(1,Math.round(e*(o.atkMul||1)));let a=Nt(t.pos.x-o.pos.x,0,t.pos.z-o.pos.z).normalize();if(!t.hit(e,a,n,s))return;let l=t.center().clone();if(this.fx.spark(l.x,l.y,l.z,i?18:10,i?"#fff07a":"#ffffff",i?8:6),this.fx.number(l.clone().add(Nt(0,.5*(t.type==="boss"?2:1),0)),e,i?"crit":"normal"),this.audio.play(i?"crit":"hit"),this.hitstop=Math.max(this.hitstop,i?.085:.05),this.hitCombo=this.time-this.lastHitTime<2?this.hitCombo+1:1,this.lastHitTime=this.time,this.hitCombo>this.bestCombo&&(this.bestCombo=this.hitCombo),o.lastCombat=this.time,t.type==="boss"&&!t.dead){let c=t.hp/t.maxHp;if(c<.6&&t.summoned===0||c<.3&&t.summoned===1){t.summoned++,this.audio.play("laugh"),this.ui.toast('\uB450\uC5B5\uC2DC\uB2C8: "\uC598\uB4E4\uC544, \uB098\uC640\uB77C \uB69D\uB531!"',2);for(let h=0;h<2+this.round;h++)this.spawnQueue.push({type:h===0?"red":"blue",at:this.time+.3+h*.3})}}}spawnSwordWave(t){let e=Nt(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=Nt(t.pos.x,t.y,t.pos.z),n=Nt(t.pos.x,t.y+.75,t.pos.z).addScaledVector(e,.6),s={owner:"player",kind:"wave",pos:n,dir:e,yaw:t.yaw,speed:16,life:.6,dmg:34,hitSet:new Set,radius:1.3,trailT:0},o=a=>a.g.position.copy(s.pos);s.vis=[this.fx.slash(n,t.yaw,0,{inner:.25,outer:2,len:2.4,dur:.6,color:"#2f7dff",static:!0,move:o}),this.fx.slash(n,t.yaw,0,{inner:.9,outer:1.85,len:2.2,dur:.6,color:"#8fe4ff",static:!0,move:o}),this.fx.slash(n,t.yaw,0,{inner:1.55,outer:1.8,len:2,dur:.6,color:"#ffffff",static:!0,move:o})],this.projectiles.push(s),this.audio.play("skill"),this.fx.ring(i,2.6,"#7fd8ff",.4),this.fx.ring(i,1.3,"#ffffff",.22),this.fx.spark(n.x,n.y,n.z,18,"#d8f6ff",7);for(let a=0;a<24;a++){let l=a/24*Math.PI*2;this.fx.add.emit({x:i.x+Math.cos(l)*.4,y:i.y+.08,z:i.z+Math.sin(l)*.4,vx:Math.cos(l)*5,vy:I(.2,1.2),vz:Math.sin(l)*5,drag:4,life:I(.25,.45),size:3,endSize:1,color:"#bff4ff",color2:"#2050ff"})}this.ui.flash("#3a8cff",.18),this.hitstop=Math.max(this.hitstop,.05),this.shake(.22)}swordWaveTrail(t,e){let i=this.fx;t.trailT-=e,t.trailT<=0&&(t.trailT=.03,i.slash(t.pos.clone(),t.yaw,0,{inner:.6,outer:1.95,len:2.3,dur:.18,color:"#2a5cff",static:!0,fadeAll:!0}));let n=Nt(t.dir.z,0,-t.dir.x);for(let o=0;o<5;o++){let a=I(-1.1,1.1),l=I(1.2,1.9),c=t.pos.x+(t.dir.x*Math.cos(a)+n.x*Math.sin(a))*l,h=t.pos.z+(t.dir.z*Math.cos(a)+n.z*Math.sin(a))*l;i.add.emit({x:c,y:t.pos.y+I(-.15,.25),z:h,vx:-t.dir.x*I(2,5),vy:I(0,1.2),vz:-t.dir.z*I(2,5),drag:3,life:I(.25,.5),size:I(2,4),endSize:1,color:"#e0faff",color2:"#2050ff"})}let s=this.world.heightAt(t.pos.x,t.pos.z);for(let o=0;o<3;o++){let a=I(-1.3,1.3);i.add.emit({x:t.pos.x+n.x*a,y:s+.06,z:t.pos.z+n.z*a,life:I(.5,.9),size:2,color:"#7fd8ff",alpha:.8})}}swordWaveEnd(t){let e=this.fx;for(let i of t.vis)i.kill=!0;this.audio.play("burst"),e.ring(Nt(t.pos.x,this.world.heightAt(t.pos.x,t.pos.z),t.pos.z),2.2,"#7fd8ff",.35);for(let i=0;i<36;i++){let n=Math.random()*Math.PI*2,s=I(-.3,1);e.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,vx:Math.cos(n)*I(2,6),vy:s*4,vz:Math.sin(n)*I(2,6),g:6,drag:2.5,life:I(.3,.7),size:I(2,4),endSize:1,color:"#e0faff",color2:"#1a40ff"})}}playerShoot(t,e){let i=e%10===2;if(t.cls==="mage"){let n=i?[-.28,0,.28]:[0];for(let s of n)this.spawnTalisman(t,t.yaw+s,i?15:19);this.audio.play("cast")}else{let n=i?[-.14,0,.14]:[0];for(let s of n)this.spawnArrow(t,t.yaw+s,{dmg:i?14:16});this.audio.play("bow")}}playerSkillHit(t,e){t.cls==="mage"?this.castLightning(t):t.cls==="elf"&&this.windArrows(t)}handPos(t,e=Nt()){return e.set(t.pos.x+Math.sin(t.yaw)*.5,t.y+.95,t.pos.z+Math.cos(t.yaw)*.5)}spawnTalisman(t,e,i){let n=Nt(Math.sin(e),0,Math.cos(e)),s=this.handPos(t),o=new qt,a=new at(new Ce(.24,.36),new ie({color:"#f6d870",side:xe})),l=new at(new Ce(.06,.26),new ie({color:"#c8302c",side:xe}));l.position.z=.002,a.add(l),o.add(a),o.position.copy(s),this.scene.add(o),this.projectiles.push({owner:"player",kind:"talisman",pos:s,dir:n,yaw:e,speed:13,life:.8,dmg:i,mesh:o,paper:a,radius:.5,hitSet:new Set,knock:4,stun:.3})}talismanBurst(t){let e=this.fx,i=t.pos;this.audio.play("fire"),e.ring(Nt(i.x,this.world.heightAt(i.x,i.z),i.z),1.7,"#ffb050",.3);for(let n=0;n<26;n++){let s=Math.random()*Math.PI*2,o=I(1.5,4.5);e.add.emit({x:i.x,y:i.y,z:i.z,vx:Math.cos(s)*o,vy:I(.5,3.5),vz:Math.sin(s)*o,g:3,drag:3,life:I(.25,.55),size:I(2,5),endSize:1,color:"#fff2a0",color2:"#ff3a10",flicker:.3})}e.smoke(i.x,i.y-.2,i.z,5);for(let n of this.enemies)n.dead||n.spawning||n===t.hitEnemy||Math.hypot(n.pos.x-i.x,n.pos.z-i.z)<1.5+n.radius&&this.damageEnemy(n,Math.round(t.dmg*.6),!1,3,.2)}spawnArrow(t,e,{dmg:i=16,pierce:n=!1,glow:s=!1,speed:o=26,life:a=.55}={}){let l=Nt(Math.sin(e),0,Math.cos(e)),c=this.handPos(t),h=this.makeArrowMesh(s);h.position.copy(c),h.rotation.y=e,this.scene.add(h),this.projectiles.push({owner:"player",kind:"arrow",pos:c,dir:l,yaw:e,speed:o,life:a,dmg:i,mesh:h,radius:.4,hitSet:new Set,pierce:n,glow:s,knock:n?5:3,stun:n?.3:.18})}makeArrowMesh(t){let e=new qt,i=new ie({color:t?"#c8ff9a":"#9a7a52"}),n=new at(new At(.04,.04,.78),i),s=new at(new me(.05,.14,4),new ie({color:t?"#ffffff":"#d8dde4"}));s.rotation.x=Math.PI/2,s.position.z=.44;let o=new at(new At(.1,.02,.14),new ie({color:t?"#8aff6a":"#f0ece0"}));return o.position.z=-.32,e.add(n,s,o),e}missileTrail(t,e){let i=this.fx;if(t.kind==="talisman"){t.paper.rotation.z+=e*18,t.paper.rotation.y=Math.sin(this.time*20)*.5,t.mesh.position.copy(t.pos);for(let s=0;s<2;s++)i.add.emit({x:t.pos.x+I(-.1,.1),y:t.pos.y+I(-.1,.1),z:t.pos.z+I(-.1,.1),vx:-t.dir.x*2+I(-.4,.4),vy:I(.4,1.4),vz:-t.dir.z*2+I(-.4,.4),life:I(.2,.4),size:I(2,4),endSize:1,color:"#ffe080",color2:"#ff3010",flicker:.3})}else if(t.mesh.position.copy(t.pos),t.glow)for(let s=0;s<2;s++)i.add.emit({x:t.pos.x+I(-.08,.08),y:t.pos.y+I(-.08,.08),z:t.pos.z+I(-.08,.08),vx:-t.dir.x*3,vy:I(0,.6),vz:-t.dir.z*3,life:I(.2,.4),size:I(2,3),endSize:1,color:"#e8ffc8",color2:"#3aa83a"});else Math.random()<.6&&i.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,life:.12,size:2,color:"#fff8e0",alpha:.6});this.world.heightAt(t.pos.x,t.pos.z)>t.pos.y-.3&&(t.life=0)}aimPoint(t,e=5,i=11){if(this.validTarget(this.target)){let a=this.target;return Nt(a.pos.x,this.world.heightAt(a.pos.x,a.pos.z),a.pos.z)}let n=null,s=i;for(let a of this.enemies){if(a.dead||a.spawning)continue;let l=a.pos.x-t.pos.x,c=a.pos.z-t.pos.z,h=Math.hypot(l,c);h<s&&Math.abs(wn(t.yaw,Math.atan2(l,c)))<1&&(s=h,n=a)}let o=n?Nt(n.pos.x,0,n.pos.z):Nt(t.pos.x+Math.sin(t.yaw)*e,0,t.pos.z+Math.cos(t.yaw)*e);return o.y=this.world.heightAt(o.x,o.z),o}enemiesIn(t,e){return this.enemies.filter(i=>!i.dead&&!i.spawning&&Math.hypot(i.pos.x-t.x,i.pos.z-t.z)<e+i.radius)}castLightning(t){let e=this.aimPoint(t),i=2.9;this.fx.circle(e,i*1.15,"#b89aff",1.3,2.2),this.fx.circle(Nt(t.pos.x,t.y,t.pos.z),1.3,"#d8c8ff",.7,-3);let n=this.fx.ring(e,i,"#b89aff",1,1);for(let s=0;s<46;s++){let o=Math.random()*Math.PI*2,a=i*I(.8,1.1);this.fx.add.emit({x:e.x+Math.cos(o)*a,y:e.y+I(.1,1.6),z:e.z+Math.sin(o)*a,vx:-Math.cos(o)*a/.42,vy:I(-.5,1),vz:-Math.sin(o)*a/.42,life:.42,size:I(2,3),color:"#e8e0ff",color2:"#6a4aff"})}this.audio.play("charge"),this.shake(.12),this.timers.push({at:this.time+.42,fn:()=>{this.fx.removeRing(n),this.fx.bolt(e,1.7),this.audio.play("thunder"),this.ui.flash("#e8e0ff",.6),this.shake(.7),this.hitstop=Math.max(this.hitstop,.09),this.fx.ring(e,i*1.3,"#d8c8ff",.45),this.fx.ring(e,i*.6,"#ffffff",.25),this.fx.scorch(e,i*.75,"#1c1230",3);for(let a=0;a<60;a++){let l=Math.random()*Math.PI*2,c=I(2,9);this.fx.add.emit({x:e.x,y:e.y+.3,z:e.z,vx:Math.cos(l)*c,vy:I(1,7),vz:Math.sin(l)*c,g:10,drag:2,life:I(.3,.8),size:I(2,4),endSize:1,color:"#ffffff",color2:"#7a5aff"})}for(let a=0;a<30;a++){let l=Math.random()*Math.PI*2,c=I(.3,i);this.fx.add.emit({x:e.x+Math.cos(l)*c,y:e.y+.06,z:e.z+Math.sin(l)*c,vy:I(0,.4),life:I(.8,1.6),size:2,color:"#d8c8ff",alpha:.8,flicker:.7})}let s=this.enemiesIn(e,i),o=Nt(e.x,e.y+1.2,e.z);for(let a of s){let l=Math.random()<.2;this.damageEnemy(a,Math.round(I(44,54)*(l?1.8:1)),l,3,.7);let c=a.center().clone();this.fx.arc(o,c,"#c8b0ff",.8),this.fx.spark(c.x,c.y,c.z,10,"#e8e0ff",6),o=c}for(let a=1;a<=3;a++)this.timers.push({at:this.time+a*.07,fn:()=>{let l=Nt(e.x+I(-2,2),e.y,e.z+I(-2,2));this.fx.bolt(l,.9),this.fx.spark(l.x,l.y+.2,l.z,8,"#e8e0ff",5),this.shake(.25)}})}})}windArrows(t){for(let n=0;n<9;n++)this.spawnArrow(t,t.yaw+(n-4)*.13,{dmg:22,pierce:!0,glow:!0,speed:24,life:.6});this.audio.play("bowskill");let e=Nt(t.pos.x,t.y,t.pos.z);this.fx.circle(e,2.2,"#8aff7a",.7,3);let i=this.handPos(t);for(let n=0;n<3;n++)this.timers.push({at:this.time+n*.05,fn:()=>{let s=i.clone().add(Nt(Math.sin(t.yaw)*n*.6,0,Math.cos(t.yaw)*n*.6));this.fx.ring(s,.8+n*.4,n?"#c8ffb0":"#ffffff",.25)}});for(let n=0;n<36;n++){let s=t.yaw+I(-.8,.8);this.fx.norm.emit({x:e.x,y:e.y+I(.3,1.2),z:e.z,vx:Math.sin(s)*I(3,9),vy:I(0,1.5),vz:Math.cos(s)*I(3,9),drag:2,wob:1.5,life:I(.5,1.1),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"})}for(let n=0;n<30;n++){let s=n/30*Math.PI*4,o=.3+n*.03;this.fx.add.emit({x:e.x+Math.cos(s)*o,y:e.y+n*.05,z:e.z+Math.sin(s)*o,vx:-Math.sin(s)*3,vy:1,vz:Math.cos(s)*3,life:.4,size:2,color:"#e8ffd8",color2:"#3aa83a"})}this.ui.flash("#6aff7a",.18),this.shake(.2)}castSkill(t,e){let i=t.cls+e;i==="sword2"?this.skillIssen(t):i==="sword3"?this.skillWhirl(t):i==="mage2"?this.skillDragon(t):i==="mage3"?this.skillFrost(t):i==="elf2"?this.skillArrowRain(t):i==="elf3"&&this.skillTornado(t)}skillIssen(t){let e=Nt(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=t.pos.clone();this.fx.ghost(t.rig,"#ffffff",.4),this.world.move(t.pos,e.x*7,e.z*7,t.moveR),t.vel.set(0,0,0),t.invuln=Math.max(t.invuln,.6);let n=t.pos.clone(),s=t.y+.8;this.fx.streak(Nt(i.x,s,i.z),Nt(n.x,s,n.z),"#ffffff",.55,.5),this.fx.streak(Nt(i.x,s,i.z),Nt(n.x,s,n.z),"#7fd8ff",.7,1.2);for(let c=1;c<5;c++){let h=c/5,d=i.clone().lerp(n,h);this.fx.add.emit({x:d.x,y:s,z:d.z,vx:I(-1,1),vy:I(0,1),vz:I(-1,1),life:.4,size:3,endSize:1,color:"#ffffff",color2:"#7fd8ff"})}this.fx.dust(i.x,i.y,i.z,12),this.fx.ring(Nt(n.x,t.y,n.z),1.6,"#ffffff",.25),this.audio.play("dash"),this.audio.play("swing3"),this.shake(.2);let o=n.clone().sub(i),a=o.lengthSq()||1,l=this.enemies.filter(c=>{if(c.dead||c.spawning)return!1;let h=Math.max(0,Math.min(1,((c.pos.x-i.x)*o.x+(c.pos.z-i.z)*o.z)/a)),d=i.x+o.x*h,u=i.z+o.z*h;return Math.hypot(c.pos.x-d,c.pos.z-u)<1.3+c.radius});t.sinceAttack=5,this.timers.push({at:this.time+.62,fn:()=>{if(this.audio.play("sheathe"),!!l.length){this.audio.play("crit"),this.ui.flash("#ffffff",.35),this.shake(.5),this.hitstop=Math.max(this.hitstop,.1);for(let c of l){if(c.dead)continue;let h=Math.random()<.3;this.damageEnemy(c,Math.round(I(40,48)*(h?1.8:1)),h,5,.6);let d=c.center().clone();this.fx.cross(d,"#fff6d0",c.type==="boss"?6:4.2,.45),this.fx.spark(d.x,d.y,d.z,16,"#fff6d0",8)}}}})}skillWhirl(t){for(let e=0;e<3;e++)this.timers.push({at:this.time+e*.27,fn:()=>{if(t.dead)return;let i=e===2,n=i?2.9:2.5,s=Nt(t.pos.x,t.y+.7,t.pos.z);this.fx.slash(s,t.yaw+e*2.1,0,{inner:.4,outer:n,len:6.25,dur:.24,color:i?"#fff6d0":"#a8e4ff"}),this.fx.slash(s,t.yaw+e*2.1,0,{inner:n-.3,outer:n-.05,len:6.25,dur:.24,color:"#ffffff"}),this.fx.ring(Nt(t.pos.x,t.y,t.pos.z),n,i?"#fff2c0":"#bfe8ff",.3);for(let a=0;a<16;a++){let l=a/16*Math.PI*2;this.fx.norm.emit({x:t.pos.x+Math.cos(l)*.6,y:t.y+.1,z:t.pos.z+Math.sin(l)*.6,vx:Math.cos(l)*4-Math.sin(l)*3,vy:I(.3,1),vz:Math.sin(l)*4+Math.cos(l)*3,drag:3,life:.5,size:3,endSize:1,color:"#c8bca0",alpha:.7})}this.audio.play(i?"swing3":"swing");let o=!1;for(let a of this.enemiesIn(t.pos,n)){let l=Math.random()<.15;this.damageEnemy(a,Math.round((i?I(22,28):I(13,17))*(l?1.8:1)),l,i?8:2.5,.3),o=!0}o&&this.shake(i?.35:.15)}})}skillDragon(t){let e=Nt(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=this.handPos(t),n=new qt,s=[],o=12;for(let c=0;c<o;c++){let h=c/(o-1),d=new lt("#fff2a0").lerp(new lt("#e8401a"),h),u=new at(new Ge(.46*(1-h*.6),1),new ie({color:d}));n.add(u),s.push(u)}let a=s[0];for(let c of[-1,1]){let h=new at(new me(.06,.35,4),new ie({color:"#ffd040"}));h.position.set(c*.16,.22,-.12),h.rotation.x=-.8,a.add(h);let d=new at(new At(.07,.07,.05),new ie({color:"#2a0a0a"}));d.position.set(c*.13,.08,.27),a.add(d)}this.scene.add(n);let l={owner:"fx",kind:"dragon",pos:i.clone(),base:i.clone(),dir:e,yaw:t.yaw,speed:10,life:1.6,t:0,dmg:20,mesh:n,segs:s,hist:[],hitAt:new Map};for(let c=0;c<o*3;c++)l.hist.push(i.clone());this.projectiles.push(l),this.audio.play("fire"),this.audio.play("cast"),this.fx.circle(Nt(t.pos.x,t.y,t.pos.z),1.6,"#ffa040",.6,3),this.fx.ring(i,1.4,"#ffd080",.3),this.ui.flash("#ff8a30",.18),this.shake(.2)}dragonUpdate(t,e){t.t+=e,t.base.addScaledVector(t.dir,t.speed*e);let i=Nt(t.dir.z,0,-t.dir.x),n=Math.sin(t.t*9)*.9;t.pos.copy(t.base).addScaledVector(i,n),t.pos.y=t.base.y+Math.sin(t.t*6)*.25,t.hist.unshift(t.pos.clone()),t.hist.length=t.segs.length*3,t.segs.forEach((a,l)=>{let c=t.hist[Math.min(t.hist.length-1,l*3)];a.position.copy(c)});let s=t.segs[0],o=t.hist[2]||t.pos;s.lookAt(t.pos.clone().add(t.pos.clone().sub(o)));for(let a=0;a<4;a++){let l=t.hist[Math.floor(Math.random()*t.hist.length)];this.fx.add.emit({x:l.x+I(-.15,.15),y:l.y+I(-.1,.2),z:l.z+I(-.15,.15),vx:I(-.6,.6),vy:I(.8,2),vz:I(-.6,.6),life:I(.25,.5),size:I(2,5),endSize:1,color:"#fff0a0",color2:"#ff2a00",flicker:.3})}for(let a of this.enemies){if(a.dead||a.spawning||Math.hypot(a.pos.x-t.pos.x,a.pos.z-t.pos.z)>.9+a.radius)continue;let l=t.hitAt.get(a)??-9;if(this.time-l<.35)continue;t.hitAt.set(a,this.time);let c=Math.random()<.2;this.damageEnemy(a,Math.round(t.dmg*(c?1.8:1)*I(.9,1.1)),c,3,.3);let h=a.center();for(let d=0;d<12;d++)this.fx.add.emit({x:h.x,y:h.y,z:h.z,vx:I(-3,3),vy:I(1,4),vz:I(-3,3),drag:2,life:I(.3,.5),size:3,endSize:1,color:"#ffe080",color2:"#ff3010"})}if(t.life<=0&&!t.exploded){t.exploded=!0;let a=t.pos,l=this.world.heightAt(a.x,a.z);this.audio.play("fire"),this.fx.ring(Nt(a.x,l,a.z),2.4,"#ffb050",.35),this.fx.scorch(Nt(a.x,l,a.z),1.6,"#2a140a",2.5);for(let c=0;c<40;c++){let h=Math.random()*Math.PI*2,d=I(2,6);this.fx.add.emit({x:a.x,y:a.y,z:a.z,vx:Math.cos(h)*d,vy:I(.5,5),vz:Math.sin(h)*d,g:4,drag:2.5,life:I(.3,.7),size:I(2,5),endSize:1,color:"#fff2a0",color2:"#ff2a00",flicker:.3})}for(let c of this.enemiesIn(a,2.2))this.damageEnemy(c,Math.round(I(24,30)),!1,6,.35);this.shake(.35)}}skillFrost(t){let e=Nt(t.pos.x,t.y,t.pos.z),i=4.6;this.fx.circle(e,i,"#8ad8ff",1.6,1.4),this.fx.scorch(e,i*.9,"#cfefff",2.6),this.audio.play("freeze"),this.ui.flash("#8ad8ff",.25),this.shake(.35),[1.4,2.8,4.2].forEach((n,s)=>{this.timers.push({at:this.time+s*.09,fn:()=>{let o=Math.round(n*5);for(let a=0;a<o;a++){let l=a/o*Math.PI*2+s*.3,c=e.x+Math.cos(l)*n,h=e.z+Math.sin(l)*n,d=this.world.heightAt(c,h);Math.abs(d-e.y)>1||this.fx.iceSpike(Nt(c,d,h),I(.8,1.5)*(1-s*.15),1.4-s*.1)}this.fx.ring(e,n+.3,"#d8f4ff",.25);for(let a=0;a<20;a++){let l=Math.random()*Math.PI*2;this.fx.add.emit({x:e.x+Math.cos(l)*n,y:e.y+.2,z:e.z+Math.sin(l)*n,vx:Math.cos(l)*2,vy:I(1,3),vz:Math.sin(l)*2,g:6,life:I(.4,.8),size:2,color:"#ffffff",color2:"#7ac8ff"})}this.shake(.15)}})});for(let n of this.enemiesIn(e,i)){let s=Math.random()<.15;this.damageEnemy(n,Math.round(I(26,32)*(s?1.8:1)),s,1,.2),n.freeze(1.8)}}skillArrowRain(t){let e=this.aimPoint(t,6),i=3;this.fx.circle(e,i*1.1,"#9aff8a",1.7,1.6);let n=this.fx.ring(e,i,"#9aff8a",1,1);this.audio.play("bow"),this.audio.play("bowskill");for(let s=0;s<5;s++)this.fx.add.emit({x:t.pos.x+I(-.2,.2),y:t.y+1.4,z:t.pos.z+I(-.2,.2),vx:I(-.5,.5),vy:18,vz:I(-.5,.5),life:.4,size:3,color:"#e8ffd8",color2:"#3aa83a"});this.rains.push({c:e,R:i,t:-.35,dur:1.2,acc:0,tele:n})}skillTornado(t){let e=Nt(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=Nt(t.pos.x+e.x*1.5,t.y,t.pos.z+e.z*1.5),n=[];for(let s=0;s<4;s++){let o=new ie({color:s%2?"#c8ffb0":"#ffffff",transparent:!0,opacity:.5,blending:Oe,depthWrite:!1}),a=new at(new Li(1,.05,4,20),o);a.rotation.x=Math.PI/2,this.scene.add(a),n.push(a)}this.tornados.push({pos:i,dir:e,t:0,dur:3.2,tick:0,rings:n}),this.audio.play("tornado"),this.fx.circle(i,2,"#9aff8a",.8,4),this.ui.flash("#9aff8a",.15)}updateSkills(t){for(let e=this.rains.length-1;e>=0;e--){let i=this.rains[e];if(i.t+=t,!(i.t<0)){for(i.acc+=t*34;i.acc>=1;){i.acc-=1;let n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*i.R,o=i.c.x+Math.cos(n)*s,a=i.c.z+Math.sin(n)*s,l=this.world.heightAt(o,a),c=Nt(o+I(-1,1),l+9,a+I(-1,1)-1.5),h=Nt(o,l,a).sub(c).normalize(),d=this.makeArrowMesh(!0);d.position.copy(c),d.lookAt(c.clone().add(h)),this.scene.add(d),this.projectiles.push({owner:"fx",kind:"rainArrow",pos:c,dir:h,speed:30,life:1,mesh:d,groundY:l})}i.t>=i.dur&&(this.fx.removeRing(i.tele),this.rains.splice(e,1))}}for(let e=this.tornados.length-1;e>=0;e--){let i=this.tornados[e];i.t+=t,this.world.move(i.pos,i.dir.x*3*t,i.dir.z*3*t,.4),i.pos.y=this.world.heightAt(i.pos.x,i.pos.z);let n=Math.min(1,i.t/.25)*Math.min(1,(i.dur-i.t)/.4);i.rings.forEach((s,o)=>{let a=.3+o*.8;s.position.set(i.pos.x+Math.sin(i.t*7+o)*.12,i.pos.y+a,i.pos.z+Math.cos(i.t*7+o)*.12),s.scale.setScalar((.5+o*.45)*n),s.rotation.z+=t*(8+o*2),s.material.opacity=.45*n});for(let s=0;s<10;s++){let o=Math.random()*3.2,a=i.t*9+o*2.2+Math.random()*6.28,l=(.25+o*.4)*n;this.fx.add.emit({x:i.pos.x+Math.cos(a)*l,y:i.pos.y+o,z:i.pos.z+Math.sin(a)*l,vx:-Math.sin(a)*4,vy:1.2,vz:Math.cos(a)*4,life:.25,size:2,color:"#f0ffe8",color2:"#5ac84a",alpha:.9})}Math.random()<.5&&this.fx.norm.emit({x:i.pos.x+I(-1,1),y:i.pos.y+I(.2,2.5),z:i.pos.z+I(-1,1),vx:I(-3,3),vy:I(1,3),vz:I(-3,3),wob:2,life:.8,size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"}),Math.random()<.3&&this.fx.dust(i.pos.x,i.pos.y,i.pos.z,1);for(let s of this.enemiesIn(i.pos,3)){let o=i.pos.x-s.pos.x,a=i.pos.z-s.pos.z,l=Math.hypot(o,a)||1,c=(s.type==="boss"?.8:3.4)*t;l>.4&&this.world.move(s.pos,o/l*c,a/l*c,s.moveR??s.radius)}if(i.tick-=t,i.tick<=0){i.tick=.25;for(let s of this.enemiesIn(i.pos,1.7)){this.damageEnemy(s,Math.round(I(7,10)),!1,.5,.25);let o=s.center();this.fx.spark(o.x,o.y,o.z,4,"#e8ffd8",3)}}if(i.t>=i.dur){for(let s of i.rings)this.scene.remove(s),s.geometry.dispose(),s.material.dispose();for(let s=0;s<30;s++)this.fx.norm.emit({x:i.pos.x,y:i.pos.y+I(.3,2.5),z:i.pos.z,vx:I(-5,5),vy:I(0,3),vz:I(-5,5),wob:2,drag:2,life:I(.6,1.1),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"});this.fx.ring(i.pos,2.2,"#c8ffb0",.35),this.tornados.splice(e,1)}}}rainArrowUpdate(t){if(t.mesh.position.copy(t.pos),t.pos.y<=t.groundY+.05){t.life=0,this.fx.dust(t.pos.x,t.groundY,t.pos.z,2),this.fx.add.emit({x:t.pos.x,y:t.groundY+.1,z:t.pos.z,life:.2,size:4,endSize:1,color:"#e8ffd8"});for(let e of this.enemiesIn(t.pos,.8)){let i=Math.random()<.15;this.damageEnemy(e,Math.round(I(9,12)*(i?1.8:1)),i,1,.15)}Math.random()<.3&&this.audio.play("arrowhit")}}spawnOrb(t){let e=this.player,i=Nt(t.pos.x,t.y+1.3,t.pos.z),s=Nt(e.pos.x+e.vel.x*.3,e.y+.7,e.pos.z+e.vel.z*.3).sub(i).setY(0).normalize(),o=new at(new Ge(.2,1),new ie({color:"#d8fbff"}));o.position.copy(i),this.scene.add(o),this.projectiles.push({owner:"enemy",kind:"orb",pos:i,dir:s,speed:7,life:3,dmg:t.dmg,mesh:o,radius:.45,hitSet:new Set,y:i.y})}bossSlam(t,e,i,n,s=!1){this.audio.play("slam"),this.shake(s?.9:.6),this.alarm=2,this.fx.ring(e,i*1.15,"#ffd6a0",.45),this.fx.ring(e,i*.7,"#ffffff",.3);for(let a=0;a<40;a++){let l=a/40*Math.PI*2;this.fx.norm.emit({x:e.x+Math.cos(l)*i*.6,y:e.y+.1,z:e.z+Math.sin(l)*i*.6,vx:Math.cos(l)*4,vy:I(1,3),vz:Math.sin(l)*4,g:6,drag:3,life:I(.4,.8),size:4,endSize:1,color:"#c8bca0"})}for(let a=0;a<18;a++)this.fx.norm.emit({x:e.x+I(-1,1),y:e.y+.2,z:e.z+I(-1,1),vx:I(-3,3),vy:I(4,8),vz:I(-3,3),g:20,life:1,size:3,color:"#8a8478",floor:e.y});let o=this.player;Math.hypot(o.pos.x-e.x,o.pos.z-e.z)<i+o.radius&&Math.abs(o.pos.y-e.y)<1.2&&o.damage(n,e)}onEnemyKilled(t){this.kills++;let e=Math.round(t.T.exp*(1+this.round*.25));this.player.addExp(e),this.fx.number(Nt(t.pos.x,t.y+(t.type==="boss"?4:2.2),t.pos.z),`+${e} EXP`,"exp");let i=gd(t.type,this.round,this.player.cls);i&&this.spawnDrop(t.pos,i),this.target===t&&(this.target=null),this.updateQuest(),t.type==="boss"&&(this.hitstop=.25,this.shake(1),this.ui.flash("#ffffff",.6))}checkWave(){!this.waveActive||this.wave===0||this.spawnQueue.length||this.enemies.some(t=>!t.dead)||this.waveClearing||(this.waveClearing=!0,this.wave>=3?setTimeout(()=>this.victory(),1500):(this.ui.banner("\uACA9\uD1F4!",`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C \uC644\uB8CC \xB7 \uACBD\uD5D8\uCE58 +${20+this.round*10}`,1.8),this.player.addExp(20+this.round*10),setTimeout(()=>{this.waveClearing=!1,this.nextWave()},2600)))}victory(){this.waveClearing=!1,this.waveActive=!1,this.round++,this.stage=3,this.nightTarget=0,this.audio.mood="day",this.audio.play("victory"),this.player.hp=this.player.maxHp,this.ui.banner("\uC2B9\uB9AC","\uB3C4\uAE68\uBE44\uB4E4\uC774 \uB2EC\uC544\uB098\uACE0 \uB3D9\uC774 \uD2BC\uB2E4",4,"win-banner"),this.updateQuest(),this.save()}onPlayerDeath(){this.state="dead",setTimeout(()=>document.getElementById("gameover").classList.add("show"),900)}retry(){document.getElementById("gameover").classList.remove("show"),this.state="play",this.player.reset();for(let t of this.enemies)t.dispose();this.enemies=[],this.spawnQueue=[];for(let t of this.projectiles)t.mesh&&this.scene.remove(t.mesh);this.projectiles=[],this.timers=[];for(let t of this.rains)this.fx.removeRing(t.tele);this.rains=[];for(let t of this.tornados)for(let e of t.rings)this.scene.remove(e);this.tornados=[],this.ui.setBoss(null),this.waveClearing=!1,this.waveActive&&(this.wave=Math.max(0,this.wave-1),setTimeout(()=>this.nextWave(),1200))}shake(t){this.shakeAmt=Math.min(1.2,Math.max(this.shakeAmt,t))}screenFlash(t,e){this.ui.flash(e,.35)}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){let i=this.projectiles[e];if(i.life-=t,i.pos.addScaledVector(i.dir,i.speed*t),i.kind==="orb"){i.mesh.position.copy(i.pos),i.mesh.material.color.set(i.owner==="player"?"#ffffff":"#d8fbff"),Math.random()<.9&&this.fx.add.emit({x:i.pos.x+I(-.1,.1),y:i.pos.y+I(-.1,.1),z:i.pos.z+I(-.1,.1),vx:I(-.3,.3),vy:I(.2,.8),vz:I(-.3,.3),life:I(.2,.45),size:3,endSize:1,color:"#8ff0ff",color2:"#1a40ff"});let n=this.world.heightAt(i.pos.x,i.pos.z);(n>i.pos.y-.4||this.world.isBlocked(i.pos.x,i.pos.z,.05,n)&&n>i.pos.y-1)&&(i.life=0)}else i.kind==="wave"?this.swordWaveTrail(i,t):i.kind==="talisman"||i.kind==="arrow"?this.missileTrail(i,t):i.kind==="dragon"?this.dragonUpdate(i,t):i.kind==="rainArrow"&&this.rainArrowUpdate(i);if(i.owner==="player"&&(i.kind==="talisman"||i.kind==="arrow"))for(let n of this.world.drums)Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<1.25&&(this.drumHit(n),i.life=0);if(i.owner==="player")for(let n of this.enemies){if(n.dead||n.spawning||i.hitSet.has(n))continue;if(Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<i.radius+n.radius){i.hitSet.add(n);let o=Math.random()<(i.kind==="arrow"?.25:.2);if(this.damageEnemy(n,Math.round(i.dmg*(o?1.8:1)*I(.9,1.1)),o,i.knock??7,i.stun??.35),i.kind==="wave"){let a=n.center().clone();this.fx.cross(a,"#9fe8ff",n.type==="boss"?5.5:3.8),this.fx.ring(Nt(n.pos.x,n.y,n.pos.z),n.type==="boss"?3:1.8,"#9fe8ff",.3),this.fx.spark(a.x,a.y,a.z,14,"#d8f6ff",7),this.audio.play("skillhit"),this.hitstop=Math.max(this.hitstop,.07)}if(i.kind==="orb"&&(i.life=0),i.kind==="talisman"&&(i.hitEnemy=n,i.life=0),i.kind==="arrow"){this.audio.play("arrowhit");let a=n.center();if(this.fx.spark(a.x,a.y,a.z,i.pierce?10:6,i.pierce?"#c8ff9a":"#ffffff",5),i.pierce){this.fx.cross(a.clone(),"#a8ff8a",n.type==="boss"?3.5:2.4,.25);for(let l=0;l<6;l++)this.fx.norm.emit({x:a.x,y:a.y,z:a.z,vx:I(-3,3),vy:I(1,3),vz:I(-3,3),wob:1.5,drag:2,life:I(.4,.8),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"})}i.pierce||(i.life=0,i.stuck=!0)}if(i.life<=0)break}}else if(i.owner==="enemy"){let n=this.player;Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<i.radius+n.radius*.5&&n.dashT<=0&&n.damage(i.dmg,i.pos)&&(i.life=0)}i.life<=0&&(i.kind==="wave"&&this.swordWaveEnd(i),i.kind==="talisman"&&this.talismanBurst(i),i.mesh&&(this.scene.remove(i.mesh),i.kind==="orb"&&this.fx.blueFire(i.pos.x,i.pos.y-.2,i.pos.z,10,.2),i.kind==="arrow"&&this.fx.spark(i.pos.x,i.pos.y,i.pos.z,3,"#e8dcc0",2)),this.projectiles.splice(e,1))}}separate(){let t=[this.player,...this.enemies.filter(e=>!e.dead&&e.type!=="wisp")];for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let n=t[e],s=t[i],o=s.pos.x-n.pos.x,a=s.pos.z-n.pos.z,l=Math.hypot(o,a),c=n.radius+s.radius;if(l<c&&l>1e-4){let h=(c-l)*.5,d=o/l,u=a/l,f=n===this.player?.3:n.type==="boss"?.1:1,p=s.type==="boss"?.1:1;this.world.move(n.pos,-d*h*f,-u*h*f,n.moveR??n.radius),this.world.move(s.pos,d*h*p,u*h*p,s.moveR??s.radius)}}}ambient(t){let e=this.focus,i=this.night;Math.random()<t*6*(1-i)&&this.fx.norm.emit({x:e.x+I(-18,18),y:I(4,8),z:e.z+I(-16,10),vx:I(.4,1),vy:-.6,vz:I(-.2,.3),wob:1.2,life:7,size:2,color:Math.random()<.6?"#f6c8d4":"#fff4f0",floor:.02,alpha:.95}),Math.random()<t*14*i&&this.fx.add.emit({x:e.x+I(-18,18),y:I(.4,2.5),z:e.z+I(-14,10),vx:I(-.3,.3),vy:I(-.1,.2),vz:I(-.3,.3),wob:.8,life:I(2.5,5),size:2,color:Math.random()<.3?"#9ff0ff":"#d8ff8a",flicker:.8})}simulate(t,e){if(this.updateTarget(),this.player.update(t,e),this.updateDrops(t),this.flowT-=t,this.enemies.length&&this.flowT<=0){this.flowT=.15;let i=this.player.pos;this.world.updateFlow(i.x,i.z,0),this.enemies.some(n=>n.type==="boss"&&!n.dead)&&this.world.updateFlow(i.x,i.z,1)}for(let i=this.enemies.length-1;i>=0;i--){let n=this.enemies[i];n.update(t)||(n.dispose(),this.enemies.splice(i,1))}this.separate(),this.updateProjectiles(t),this.updateSkills(t);for(let i=this.timers.length-1;i>=0;i--)if(this.timers[i].at<=this.time){let n=this.timers[i];this.timers.splice(i,1),n.fn()}for(;this.spawnQueue.length&&this.spawnQueue[0].at<=this.time;)this.spawnEnemy(this.spawnQueue.shift().type);this.spawnQueue.sort((i,n)=>i.at-n.at),this.checkWave(),(this.enemies.length||this.spawnQueue.length)&&this.updateQuest()}stepSim(t){this.time+=t,vi.time.value+=t,this.simulate(t,{mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null})}spawnEnemyAt(t,e,i){let n=new Ur(this,t,Nt(e,this.world.heightAt(e,i),i),1+this.round);return this.enemies.push(n),n}loop(t){requestAnimationFrame(this.loop);let e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.audio.update(),this.state==="play"&&(this.saveT-=e,this.saveT<=0&&this.save());let i=e;this.hitstop>0&&(this.hitstop-=e,i=e*.05),this.time+=i,vi.time.value+=i,this.night=Zn(this.night,this.nightTarget,1.2,e),Math.abs(this.night-this.nightTarget)<.002&&(this.night=this.nightTarget),this.alarm=Math.max(0,this.alarm-e);let n=this.readInput();this.state!=="title"&&!this.paused?this.simulate(i,n):this.player.update(i,n);for(let l of this.npcs)l.update(i);for(let l of this.birds)l.update(i);this.world.update(i,this.time),this.ambient(i),this.fx.update(i),vi.player.value.copy(this.player.pos),this.nearInteract=this.state==="play"?this.findInteract():null,this.updateMarker(e);let s;if(this.state==="title"){let l=Math.sin(this.time*.12)*.5+.5;s=Nt(Math.sin(this.time*.07)*4,.5,It(10,-6,l)),this.focus.copy(s)}else{let l=this.player;this.lead.x=Zn(this.lead.x,l.vel.x*.28,3,e),this.lead.z=Zn(this.lead.z,l.vel.z*.28,3,e),s=Nt(l.pos.x+this.lead.x,l.y+.6,l.pos.z+this.lead.z-.8),this.focus.x=Zn(this.focus.x,s.x,7,e),this.focus.y=Zn(this.focus.y,s.y,5,e),this.focus.z=Zn(this.focus.z,s.z,7,e)}this.shakeAmt=Math.max(0,this.shakeAmt-e*2.2);let o=this.shakeAmt*this.shakeAmt*.45,a=this.focus.clone().add(Nt(I(-o,o),0,I(-o,o)*.6));this.pixel.setFocus(a),this.updateLights(e),this.ui.update(e),this.pixel.render(this.scene)}},cy=new A,hy=new A,Cd=new A,uy=new A;window.addEventListener("DOMContentLoaded",()=>{try{window.game=new $c}catch(r){console.error(r),document.getElementById("title").innerHTML=`<div class="err">WebGL\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.<br><small>${r.message}</small></div>`}});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
