(()=>{var Ah=0,Ll=1,Rh=2;var Ui=1,Ch=2,_s=3,gi=0,cn=1,ve=2,Vn=0,ys=1,Pn=2,Dl=3,Nl=4,Go=5;var Fi=100,Ih=101,Ph=102,Lh=103,Dh=104,Nh=200,Vo=201,Uh=202,Fh=203,Ul=204,ur=205,Bh=206,Oh=207,zh=208,kh=209,Hh=210,Gh=211,Vh=212,Wh=213,Xh=214,io=0,so=1,ro=2,os=3,oo=4,ao=5,lo=6,co=7,Fl=0,qh=1,Yh=2,Ln=0,Bl=1,Ol=2,zl=3,kl=4,Hl=5,Gl=6,Vl=7;var Wl=300,xi=301,Bi=302,Wo=303,Xo=304,dr=306,as=1e3,Bn=1001,ho=1002,pe=1003,Zh=1004;var fr=1005;var Be=1006,qo=1007;var _i=1008;var dn=1009,Xl=1010,ql=1011,vs=1012,Yo=1013,xn=1014,Sn=1015,_n=1016,Zo=1017,Jo=1018,Ms=1020,Yl=35902,Zl=35899,Jl=1021,$l=1022,fn=1023,On=1026,yi=1027,$o=1028,Ko=1029,vi=1030,jo=1031;var Qo=1033,pr=33776,mr=33777,gr=33778,xr=33779,ta=35840,ea=35841,na=35842,ia=35843,sa=36196,ra=37492,oa=37496,aa=37488,la=37489,_r=37490,ca=37491,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,xa=37815,_a=37816,ya=37817,va=37818,Ma=37819,ba=37820,Sa=37821,wa=36492,Ea=36494,Ta=36495,Aa=36283,Ra=36284,yr=36285,Ca=36286;var Hs=2300,uo=2301,eo=2302,Sl=2303,wl=2400,El=2401,Tl=2402;var Jh=3200,Kl=3201;var vr=0,$h=1,Dn="",on="srgb",Pi="srgb-linear",Gs="linear",he="srgb";var no=7680;var Kh=519,jh=512,Qh=513,tu=514,Ia=515,eu=516,nu=517,Pa=518,iu=519,su=35044,bs=35048;var jl="300 es",In=2e3,ls=2001;function wd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ed(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ru(){let s=Vs("canvas");return s.style.display="block",s}var jc={},cs=null;function Ql(...s){let t="THREE."+s.shift();cs?cs("log",t,...s):console.log(t,...s)}function ou(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function zt(...s){s=ou(s);let t="THREE."+s.shift();if(cs)cs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=ou(s);let t="THREE."+s.shift();if(cs)cs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ii(...s){let t=s.join(" ");t in jc||(jc[t]=!0,zt(...s))}function au(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lu={[io]:so,[ro]:lo,[oo]:co,[os]:ao,[so]:io,[lo]:ro,[co]:oo,[ao]:os},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=1234567,Bs=Math.PI/180,hs=180/Math.PI;function Ss(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function $t(s,t,e){return Math.max(t,Math.min(e,s))}function tc(s,t){return(s%t+t)%t}function Td(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ad(s,t,e){return s!==t?(e-s)/(t-s):0}function Os(s,t,e){return(1-e)*s+e*t}function Rd(s,t,e,n){return Os(s,t,1-Math.exp(-e*n))}function Cd(s,t=1){return t-Math.abs(tc(s,t*2)-t)}function Id(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Pd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ld(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Dd(s,t){return s+Math.random()*(t-s)}function Nd(s){return s*(.5-Math.random())}function Ud(s){s!==void 0&&(Qc=s);let t=Qc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fd(s){return s*Bs}function Bd(s){return s*hs}function Od(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function zd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function kd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ss(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ec={DEG2RAD:Bs,RAD2DEG:hs,generateUUID:Ss,clamp:$t,euclideanModulo:tc,mapLinear:Td,inverseLerp:Ad,lerp:Os,damp:Rd,pingpong:Cd,smoothstep:Id,smootherstep:Pd,randInt:Ld,randFloat:Dd,randFloatSpread:Nd,seededRandom:Ud,degToRad:Fd,radToDeg:Bd,isPowerOfTwo:Od,ceilPowerOfTwo:zd,floorPowerOfTwo:kd,setQuaternionFromProperEuler:Hd,normalize:rn,denormalize:ss},ac=class ac{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ac.prototype.isVector2=!0;var vt=ac,Ae=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),T=Math.sin(M);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lc=class lc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lc.prototype.isVector3=!0;var A=lc,Qa=new A,th=new Ae,cc=class cc{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],M=i[1],T=i[4],v=i[7],S=i[2],w=i[5],R=i[8];return r[0]=o*_+a*M+l*S,r[3]=o*g+a*T+l*w,r[6]=o*m+a*v+l*R,r[1]=c*_+h*M+d*S,r[4]=c*g+h*T+d*w,r[7]=c*m+h*v+d*R,r[2]=u*_+f*M+p*S,r[5]=u*g+f*T+p*w,r[8]=u*m+f*v+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tl.makeScale(t,e)),this}rotate(t){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tl.makeRotation(-t)),this}translate(t,e){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};cc.prototype.isMatrix3=!0;var Wt=cc,tl=new Wt,eh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gd(){let s={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(i.r=Kn(i.r),i.g=Kn(i.g),i.b=Kn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?Gs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pi]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:he,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),s}var se=Gd();function Kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Wi,fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wi===void 0&&(Wi=Vs("canvas")),Wi.width=t.width,Wi.height=t.height;let i=Wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vd=0,us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(el(i[o].image)):r.push(el(i[o]))}else r=el(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function el(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Wd=0,nl=new A,ln=class s extends zn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Bn,i=Bn,r=Be,o=_i,a=fn,l=dn,c=s.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ss(),this.name="",this.source=new us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Wl;ln.DEFAULT_ANISOTROPY=1;var hc=class hc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,v=(f+1)/2,S=(m+1)/2,w=(h+u)/4,R=(d+_)/4,x=(p+g)/4;return T>v&&T>S?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=R/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=x/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=R/r,i=x/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hc.prototype.isVector4=!0;var we=hc,po=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new ln(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new us(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends po{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ws=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pe,this.minFilter=pe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mo=class extends ln{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=pe,this.minFilter=pe,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ho=class Ho{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ho().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Xi.setFromMatrixColumn(t,0).length(),r=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xd,t,qd)}lookAt(t,e,n){let i=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ri.crossVectors(n,pn),ri.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ri.crossVectors(n,pn)),ri.normalize(),Dr.crossVectors(pn,ri),i[0]=ri.x,i[4]=Dr.x,i[8]=pn.x,i[1]=ri.y,i[5]=Dr.y,i[9]=pn.y,i[2]=ri.z,i[6]=Dr.z,i[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],T=n[7],v=n[11],S=n[15],w=i[0],R=i[4],x=i[8],E=i[12],I=i[1],D=i[5],L=i[9],O=i[13],P=i[2],F=i[6],k=i[10],X=i[14],Y=i[3],z=i[7],$=i[11],Q=i[15];return r[0]=o*w+a*I+l*P+c*Y,r[4]=o*R+a*D+l*F+c*z,r[8]=o*x+a*L+l*k+c*$,r[12]=o*E+a*O+l*X+c*Q,r[1]=h*w+d*I+u*P+f*Y,r[5]=h*R+d*D+u*F+f*z,r[9]=h*x+d*L+u*k+f*$,r[13]=h*E+d*O+u*X+f*Q,r[2]=p*w+_*I+g*P+m*Y,r[6]=p*R+_*D+g*F+m*z,r[10]=p*x+_*L+g*k+m*$,r[14]=p*E+_*O+g*X+m*Q,r[3]=M*w+T*I+v*P+S*Y,r[7]=M*R+T*D+v*F+S*z,r[11]=M*x+T*L+v*k+S*$,r[15]=M*E+T*O+v*X+S*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],M=l*f-c*u,T=a*f-c*d,v=a*u-l*d,S=o*f-c*h,w=o*u-l*h,R=o*d-a*h;return e*(_*M-g*T+m*v)-n*(p*M-g*S+m*w)+i*(p*T-_*S+m*R)-r*(p*v-_*w+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=e*a-n*o,T=e*l-i*o,v=e*c-r*o,S=n*l-i*a,w=n*c-r*a,R=i*c-r*l,x=h*_-d*p,E=h*g-u*p,I=h*m-f*p,D=d*g-u*_,L=d*m-f*_,O=u*m-f*g,P=M*O-T*L+v*D+S*I-w*E+R*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return t[0]=(a*O-l*L+c*D)*F,t[1]=(i*L-n*O-r*D)*F,t[2]=(_*R-g*w+m*S)*F,t[3]=(u*w-d*R-f*S)*F,t[4]=(l*I-o*O-c*E)*F,t[5]=(e*O-i*I+r*E)*F,t[6]=(g*v-p*R-m*T)*F,t[7]=(h*R-u*v+f*T)*F,t[8]=(o*L-a*I+c*x)*F,t[9]=(n*I-e*L-r*x)*F,t[10]=(p*w-_*v+m*M)*F,t[11]=(d*v-h*w-f*M)*F,t[12]=(a*E-o*D-l*x)*F,t[13]=(e*D-n*E+i*x)*F,t[14]=(_*T-p*S-g*M)*F,t[15]=(h*S-d*T+u*M)*F,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,g=o*d,m=a*d,M=l*c,T=l*h,v=l*d,S=n.x,w=n.y,R=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+v)*S,i[2]=(p-T)*S,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(u+m))*w,i[6]=(g+M)*w,i[7]=0,i[8]=(p+T)*R,i[9]=(g-M)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Xi.set(i[0],i[1],i[2]).length(),a=Xi.set(i[4],i[5],i[6]).length(),l=Xi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Tn.copy(this);let c=1/o,h=1/a,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=In,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===In)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ls)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=In,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===In)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===ls)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ho.prototype.isMatrix4=!0;var jt=Ho,Xi=new A,Tn=new jt,Xd=new A(0,0,0),qd=new A(1,1,1),ri=new A,Dr=new A,pn=new A,ih=new jt,sh=new Ae,un=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yd=0,rh=new A,qi=new Ae,qn=new jt,Nr=new A,Ps=new A,Zd=new A,Jd=new Ae,oh=new A(1,0,0),ah=new A(0,1,0),lh=new A(0,0,1),ch={type:"added"},$d={type:"removed"},Yi={type:"childadded",child:null},il={type:"childremoved",child:null},Ye=class s extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new A,e=new un,n=new Ae,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new Wt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ps,Nr,this.up):qn.lookAt(Nr,Ps,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(qn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($d),il.child=t,this.dispatchEvent(il),il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new A(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kd={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function sl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=tc(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sl(o,r,t+1/3),this.g=sl(o,r,t),this.b=sl(o,r,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return se.workingToColorSpace(en.copy(this),t),Math.round($t(en.r*255,0,255))*65536+Math.round($t(en.g*255,0,255))*256+Math.round($t(en.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(en.copy(this),e);let n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=on){se.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,i=en.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Ur);let n=Os(oi.h,Ur.h,e),i=Os(oi.s,Ur.s,e),r=Os(oi.l,Ur.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new xt;xt.NAMES=cu;var Li=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},An=new A,Yn=new A,rl=new A,Zn=new A,Zi=new A,Ji=new A,hh=new A,ol=new A,al=new A,ll=new A,cl=new we,hl=new we,ul=new we,hi=class s{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),An.subVectors(t,e),i.cross(An);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){An.subVectors(i,e),Yn.subVectors(n,e),rl.subVectors(t,e);let o=An.dot(An),a=An.dot(Yn),l=An.dot(rl),c=Yn.dot(Yn),h=Yn.dot(rl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,n),ul.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(t,e,n,i){return An.subVectors(n,e),Yn.subVectors(t,e),An.cross(Yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Zi.subVectors(i,n),Ji.subVectors(r,n),ol.subVectors(t,n);let l=Zi.dot(ol),c=Ji.dot(ol);if(l<=0&&c<=0)return e.copy(n);al.subVectors(t,i);let h=Zi.dot(al),d=Ji.dot(al);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zi,o);ll.subVectors(t,r);let f=Zi.dot(ll),p=Ji.dot(ll);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ji,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return hh.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(hh,a);let m=1/(g+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},kn=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Br.subVectors(this.max,Ls),$i.subVectors(t.a,Ls),Ki.subVectors(t.b,Ls),ji.subVectors(t.c,Ls),ai.subVectors(Ki,$i),li.subVectors(ji,Ki),Ti.subVectors($i,ji);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ti.z,Ti.y,ai.z,0,-ai.x,li.z,0,-li.x,Ti.z,0,-Ti.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ti.y,Ti.x,0];return!dl(e,$i,Ki,ji,Br)||(e=[1,0,0,0,1,0,0,0,1],!dl(e,$i,Ki,ji,Br))?!1:(Or.crossVectors(ai,li),e=[Or.x,Or.y,Or.z],dl(e,$i,Ki,ji,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new A,new A,new A,new A,new A,new A,new A,new A],Rn=new A,Fr=new kn,$i=new A,Ki=new A,ji=new A,ai=new A,li=new A,Ti=new A,Ls=new A,Br=new A,Or=new A,Ai=new A;function dl(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ai.fromArray(s,r);let a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ue=new A,zr=new vt,jd=0,Fe=class extends zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=rn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var qs=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ys=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qd=new kn,Ds=new A,fl=new A,jn=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(fl)),this.expandByPoint(Ds.copy(t.center).sub(fl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},tf=0,Mn=new jt,pl=new Ye,Qi=new A,mn=new kn,Ns=new kn,We=new A,ue=class s extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wd(t)?Ys:qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(mn.min,Ns.min),mn.expandByPoint(We),We.addVectors(mn.max,Ns.max),mn.expandByPoint(We)):(mn.expandByPoint(Ns.min),mn.expandByPoint(Ns.max))}mn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),We.add(Qi)),i=Math.max(i,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Fe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new A,l[x]=new A;let c=new A,h=new A,d=new A,u=new vt,f=new vt,p=new vt,_=new A,g=new A;function m(x,E,I){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[x].add(_),a[E].add(_),a[I].add(_),l[x].add(g),l[E].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,E=M.length;x<E;++x){let I=M[x],D=I.start,L=I.count;for(let O=D,P=D+L;O<P;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let T=new A,v=new A,S=new A,w=new A;function R(x){S.fromBufferAttribute(i,x),w.copy(S);let E=a[x];T.copy(E),T.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(w,E);let D=v.dot(l[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,D)}for(let x=0,E=M.length;x<E;++x){let I=M[x],D=I.start,L=I.count;for(let O=D,P=D+L;O<P;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Fe(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ml=new A,ef=new A,nf=new Wt,Cn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ml.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nf.getNormalMatrix(t),i=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},sf=0,Hn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=ys,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=ur,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Cn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var $n=new A,gl=new A,kr=new A,Hr=new A,Zs=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gl.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),Hr.copy(this.origin).sub(gl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(kr),a=Hr.dot(this.direction),l=-Hr.dot(kr),c=Hr.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gl).addScaledVector(kr,u),f}intersectSphere(t,e){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,g=e.z-o.z,m=n.x-o.x,M=n.y-o.y,T=n.z-o.z,v=Math.abs(l),S=Math.abs(c),w=Math.abs(h),R,x,E,I,D,L,O,P,F,k,X,Y;if(v>=S&&v>=w?(E=l,L=d,F=p,Y=m,l>=0?(R=c,x=h,I=u,D=f,O=_,P=g,k=M,X=T):(R=h,x=c,I=f,D=u,O=g,P=_,k=T,X=M)):S>=w?(E=c,L=u,F=_,Y=M,c>=0?(R=h,x=l,I=f,D=d,O=g,P=p,k=T,X=m):(R=l,x=h,I=d,D=f,O=p,P=g,k=m,X=T)):(E=h,L=f,F=g,Y=T,h>=0?(R=l,x=c,I=d,D=u,O=p,P=_,k=m,X=M):(R=c,x=l,I=u,D=d,O=_,P=p,k=M,X=m)),E===0)return null;let z=R/E,$=x/E,Q=1/E,yt=I-z*L,bt=D-$*L,Xt=O-z*F,Ht=P-$*F,Yt=k-z*Y,J=X-$*Y,nt=Yt*Ht-J*Xt,St=yt*J-bt*Yt,kt=Xt*bt-Ht*yt;if(i){if(nt<0||St<0||kt<0)return null}else if((nt<0||St<0||kt<0)&&(nt>0||St>0||kt>0))return null;let wt=nt+St+kt;if(wt===0)return null;let Qt=Q*(nt*L+St*F+kt*Y);return(wt>0?Qt<0:Qt>0)?null:this.at(Qt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},uh=new jt,Ri=new Zs,Gr=new jn,dh=new A,Vr=new A,Wr=new A,Xr=new A,xl=new A,qr=new A,fh=new A,Yr=new A,Tt=class extends Ye{constructor(t=new ue,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(xl.fromBufferAttribute(d,t),o?qr.addScaledVector(xl,h):qr.addScaledVector(xl.sub(e),h))}e.add(qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Gr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Gr,dh)===null||Ri.origin.distanceToSquared(dh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,S=T;v<S;v+=3){let w=a.getX(v),R=a.getX(v+1),x=a.getX(v+2);i=Zr(this,m,t,n,c,h,d,w,R,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=a.getX(g),T=a.getX(g+1),v=a.getX(g+2);i=Zr(this,o,t,n,c,h,d,M,T,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),T=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,S=T;v<S;v+=3){let w=v,R=v+1,x=v+2;i=Zr(this,m,t,n,c,h,d,w,R,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=g,T=g+1,v=g+2;i=Zr(this,o,t,n,c,h,d,M,T,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function rf(s,t,e,n,i,r,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===gi,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:s}}function Zr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Vr),s.getVertexPosition(l,Wr),s.getVertexPosition(c,Xr);let h=rf(s,t,e,n,Vr,Wr,Xr,fh);if(h){let d=new A;hi.getBarycoord(fh,Vr,Wr,Xr,d),i&&(h.uv=hi.getInterpolatedAttribute(i,a,l,c,d,new vt)),r&&(h.uv1=hi.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(h.normal=hi.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new A,materialIndex:0};hi.getNormal(Vr,Wr,Xr,u.normal),h.face=u,h.barycoord=d}return h}var Di=class extends ln{constructor(t=null,e=1,n=1,i,r,o,a,l,c=pe,h=pe,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=class extends Fe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ts=new jt,ph=new jt,Jr=[],mh=new kn,of=new jt,Us=new Tt,Fs=new jn,Js=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,of)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),mh.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(mh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Fs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ts),ph.multiplyMatrices(n,ts),Us.matrixWorld=ph,Us.raycast(t,Jr);for(let o=0,a=Jr.length;o<a;o++){let l=Jr[o];l.instanceId=r,l.object=this,e.push(l)}Jr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(i*this.count),i,this.count,$o,Sn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ci=new jn,af=new vt(.5,.5),$r=new A,ps=class{constructor(t=new Cn,e=new Cn,n=new Cn,i=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],M=r[12],T=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-o,f-h,m-p,S-M).normalize(),i[1].setComponents(c+o,f+h,m+p,S+M).normalize(),i[2].setComponents(c+a,f+d,m+_,S+T).normalize(),i[3].setComponents(c-a,f-d,m-_,S-T).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,f-u,m-g,S-v).normalize();else if(i[4].setComponents(c-l,f-u,m-g,S-v).normalize(),e===In)i[5].setComponents(c+l,f+u,m+g,S+v).normalize();else if(e===ls)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);let e=af.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if($r.x=i.normal.x>0?t.max.x:t.min.x,$r.y=i.normal.y>0?t.max.y:t.min.y,$r.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var go=class extends Hn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gh=new jt,Al=new Zs,Kr=new jn,jr=new A,$s=class extends Ye{constructor(t=new ue,e=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;gh.copy(i).invert(),Al.copy(t.ray).applyMatrix4(gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let g=c.getX(p);jr.fromBufferAttribute(d,g),xh(jr,g,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)jr.fromBufferAttribute(d,p),xh(jr,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xh(s,t,e,n,i,r,o){let a=Al.distanceSqToPoint(s);if(a<e){let l=new A;Al.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ks=class extends ln{constructor(t=[],e=xi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},js=class extends ln{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gn=class extends ln{constructor(t,e,n=xn,i,r,o,a=pe,l=pe,c,h=On,d=1){if(h!==On&&h!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xo=class extends Gn{constructor(t,e=xn,n=xi,i,r,o=pe,a=pe,l,c=On){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qs=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Bt=class s extends ue{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2));function p(_,g,m,M,T,v,S,w,R,x,E){let I=v/R,D=S/x,L=v/2,O=S/2,P=w/2,F=R+1,k=x+1,X=0,Y=0,z=new A;for(let $=0;$<k;$++){let Q=$*D-O;for(let yt=0;yt<F;yt++){let bt=yt*I-L;z[_]=bt*M,z[g]=Q*T,z[m]=P,c.push(z.x,z.y,z.z),z[_]=0,z[g]=0,z[m]=w>0?1:-1,h.push(z.x,z.y,z.z),d.push(yt/R),d.push(1-$/x),X+=1}}for(let $=0;$<x;$++)for(let Q=0;Q<R;Q++){let yt=u+Q+F*$,bt=u+Q+F*($+1),Xt=u+(Q+1)+F*($+1),Ht=u+(Q+1)+F*$;l.push(yt,bt,Ht),l.push(bt,Xt,Ht),Y+=6}a.addGroup(f,Y,E),f+=Y,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ms=class s extends ue{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,_=i+1,g=new A,m=new A;for(let M=0;M<=p;M++){let T=0,v=0,S=0,w=0;if(M<=n){let E=M/n,I=E*Math.PI/2;v=-h-t*Math.cos(I),S=t*Math.sin(I),w=-t*Math.cos(I),T=E*d}else if(M<=n+r){let E=(M-n)/r;v=-h+E*e,S=t,w=0,T=d+E*u}else{let E=(M-n-r)/n,I=E*Math.PI/2;v=h+t*Math.sin(I),S=t*Math.cos(I),w=t*Math.sin(I),T=d+u+E*d}let R=Math.max(0,Math.min(1,T/f)),x=0;M===0?x=.5/i:M===p&&(x=-.5/i);for(let E=0;E<=i;E++){let I=E/i,D=I*Math.PI*2,L=Math.sin(D),O=Math.cos(D);m.x=-S*O,m.y=v,m.z=S*L,a.push(m.x,m.y,m.z),g.set(-S*O,w,S*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+x,R)}if(M>0){let E=(M-1)*_;for(let I=0;I<i;I++){let D=E+I,L=E+I+1,O=M*_+I,P=M*_+I+1;o.push(D,L,O),o.push(L,P,O)}}}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ui=class s extends ue{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new A,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ne=class s extends ue{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],g=n/2,m=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ft(d,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function M(){let v=new A,S=new A,w=0,R=(e-t)/n;for(let x=0;x<=r;x++){let E=[],I=x/r,D=I*(e-t)+t;for(let L=0;L<=i;L++){let O=L/i,P=O*l+a,F=Math.sin(P),k=Math.cos(P);S.x=D*F,S.y=-I*n+g,S.z=D*k,d.push(S.x,S.y,S.z),v.set(F,R,k).normalize(),u.push(v.x,v.y,v.z),f.push(O,1-I),E.push(p++)}_.push(E)}for(let x=0;x<i;x++)for(let E=0;E<r;E++){let I=_[E][x],D=_[E+1][x],L=_[E+1][x+1],O=_[E][x+1];(t>0||E!==0)&&(h.push(I,D,O),w+=3),(e>0||E!==r-1)&&(h.push(D,L,O),w+=3)}c.addGroup(m,w,0),m+=w}function T(v){let S=p,w=new vt,R=new A,x=0,E=v===!0?t:e,I=v===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),p++;let D=p;for(let L=0;L<=i;L++){let P=L/i*l+a,F=Math.cos(P),k=Math.sin(P);R.x=E*k,R.y=g*I,R.z=E*F,d.push(R.x,R.y,R.z),u.push(0,I,0),w.x=F*.5+.5,w.y=k*.5*I+.5,f.push(w.x,w.y),p++}for(let L=0;L<i;L++){let O=S+L,P=D+L;v===!0?h.push(P,P+1,O):h.push(P+1,P,O),x+=3}c.addGroup(m,x,v===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ee=class s extends ne{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_o=class s extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ft(r,3)),this.setAttribute("normal",new Ft(r.slice(),3)),this.setAttribute("uv",new Ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let T=new A,v=new A,S=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],T),f(e[w+1],v),f(e[w+2],S),l(T,v,S,M)}function l(M,T,v,S){let w=S+1,R=[];for(let x=0;x<=w;x++){R[x]=[];let E=M.clone().lerp(v,x/w),I=T.clone().lerp(v,x/w),D=w-x;for(let L=0;L<=D;L++)L===0&&x===w?R[x][L]=E:R[x][L]=E.clone().lerp(I,L/D)}for(let x=0;x<w;x++)for(let E=0;E<2*(w-x)-1;E++){let I=Math.floor(E/2);E%2===0?(u(R[x][I+1]),u(R[x+1][I]),u(R[x][I])):(u(R[x][I+1]),u(R[x+1][I+1]),u(R[x+1][I]))}}function c(M){let T=new A;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(M),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let M=new A;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let v=g(M)/2/Math.PI+.5,S=m(M)/Math.PI+.5;o.push(v,1-S)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){let T=o[M+0],v=o[M+2],S=o[M+4],w=Math.max(T,v,S),R=Math.min(T,v,S);w>.9&&R<.1&&(T<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,T){let v=M*3;T.x=t[v+0],T.y=t[v+1],T.z=t[v+2]}function p(){let M=new A,T=new A,v=new A,S=new A,w=new vt,R=new vt,x=new vt;for(let E=0,I=0;E<r.length;E+=9,I+=6){M.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),w.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),x.set(o[I+4],o[I+5]),S.copy(M).add(T).add(v).divideScalar(3);let D=g(S);_(w,I+0,M,D),_(R,I+2,T,D),_(x,I+4,v,D)}}function _(M,T,v,S){S<0&&M.x===1&&(o[T]=M.x-1),v.x===0&&v.z===0&&(o[T]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new vt:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new A,i=[],r=[],o=[],a=new A,l=new jt;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos($t(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},tr=class extends bn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yo=class extends tr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var _h=new A,yh=new A,_l=new nc,yl=new nc,vl=new nc,vo=class extends bn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(yh.subVectors(i[0],i[1]).add(i[0]),c=yh);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(_h.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_h),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),_l.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),yl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),vl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),yl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),vl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(_l.calc(l),yl.calc(l),vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function lf(s,t){let e=1-s;return e*e*t}function cf(s,t){return 2*(1-s)*s*t}function hf(s,t){return s*s*t}function zs(s,t,e,n){return lf(s,t)+cf(s,e)+hf(s,n)}function uf(s,t){let e=1-s;return e*e*e*t}function df(s,t){let e=1-s;return 3*e*e*s*t}function ff(s,t){return 3*(1-s)*s*s*t}function pf(s,t){return s*s*s*t}function ks(s,t,e,n,i){return uf(s,t)+df(s,e)+ff(s,n)+pf(s,i)}var Mo=class extends bn{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(t,i.x,r.x,o.x,a.x),ks(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends bn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ks(t,i.x,r.x,o.x,a.x),ks(t,i.y,r.y,o.y,a.y),ks(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},So=class extends bn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends bn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends bn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(t,i.x,r.x,o.x),zs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ni=class extends bn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(t,i.x,r.x,o.x),zs(t,i.y,r.y,o.y),zs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(vh(a,l.x,c.x,h.x,d.x),vh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new vt().fromArray(i))}return this}},mf=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:vo,CubicBezierCurve:Mo,CubicBezierCurve3:bo,EllipseCurve:tr,LineCurve:So,LineCurve3:wo,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:Ni,SplineCurve:To});var Ze=class s extends _o{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},er=class s extends ue{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=$t(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new A,u=new vt,f=new A,p=new A,_=new A,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let M=0;M<=e;M++){let T=n+M*h*i,v=Math.sin(T),S=Math.cos(T);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*v,d.y=t[w].y,d.z=t[w].x*S,o.push(d.x,d.y,d.z),u.x=M/e,u.y=w/(t.length-1),a.push(u.x,u.y);let R=l[3*w+0]*v,x=l[3*w+1],E=l[3*w+0]*S;c.push(R,x,E)}}for(let M=0;M<e;M++)for(let T=0;T<t.length-1;T++){let v=T+M*t.length,S=v,w=v+t.length,R=v+t.length+1,x=v+1;r.push(S,w,x),r.push(R,x,w)}this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("uv",new Ft(a,2)),this.setAttribute("normal",new Ft(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Oe=class s extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*u-o;for(let T=0;T<c;T++){let v=T*d-r;p.push(v,-M,0),_.push(0,0,1),g.push(T/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let T=M+c*m,v=M+c*(m+1),S=M+1+c*(m+1),w=M+1+c*m;f.push(T,v,w),f.push(v,S,w)}this.setIndex(f),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},nr=class s extends ue{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new A,p=new vt;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){let m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<i;_++){let g=_*(n+1);for(let m=0;m<n;m++){let M=m+g,T=M,v=M+n+1,S=M+n+2,w=M+1;a.push(T,v,w),a.push(v,S,w)}}this.setIndex(a),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ye=class s extends ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new A,u=new A,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],T=m/n,v=o+T*a,S=t*Math.cos(v),w=Math.sqrt(t*t-S*S),R=0;m===0&&o===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){let E=x/e,I=i+E*r;d.x=-w*Math.cos(I),d.y=S,d.z=w*Math.sin(I),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(E+R,1-T),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let T=h[m][M+1],v=h[m][M],S=h[m+1][M],w=h[m+1][M+1];(m!==0||o>0)&&f.push(T,v,w),(m!==n-1||l<Math.PI)&&f.push(v,S,w)}this.setIndex(f),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qn=class s extends ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new A,f=new A,p=new A;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let m=0;m<=i;m++){let M=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let m=(i+1)*_+g-1,M=(i+1)*(_-1)+g-1,T=(i+1)*(_-1)+g,v=(i+1)*_+g;l.push(m,M,v),l.push(M,T,v)}this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ir=class s extends ue{constructor(t=new Ni(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new vt,h=new A,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ft(d,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function _(){for(let T=0;T<e;T++)g(T);g(r===!1?e:0),M(),m()}function g(T){h=t.getPointAt(T/e,h);let v=o.normals[T],S=o.binormals[T];for(let w=0;w<=i;w++){let R=w/i*Math.PI*2,x=Math.sin(R),E=-Math.cos(R);l.x=E*v.x+x*S.x,l.y=E*v.y+x*S.y,l.z=E*v.z+x*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let T=1;T<=e;T++)for(let v=1;v<=i;v++){let S=(i+1)*(T-1)+(v-1),w=(i+1)*T+(v-1),R=(i+1)*T+v,x=(i+1)*(T-1)+v;p.push(S,w,x),p.push(w,R,x)}}function M(){for(let T=0;T<=e;T++)for(let v=0;v<=i;v++)c.x=T/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new mf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Oi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Mh(i))i.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Mh(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function nn(s){let t={};for(let e=0;e<s.length;e++){let n=Oi(s[e]);for(let i in n)t[i]=n[i]}return t}function Mh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function gf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ic(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var hu={clone:Oi,merge:nn},xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new xt().setHex(i.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new A().fromArray(i.value);break;case"v4":this.uniforms[n].value=new we().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ao=class extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var sr=class extends Hn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},di=class extends Hn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var gs=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ro=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function es(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ml(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var fi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Co=class extends fi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case El:r=t,a=2*e-n;break;case Tl:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case El:o=t,l=2*n-e;break;case Tl:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,T=(-1-f)*g+(1.5+f)*_+.5*p,v=f*g-f*_;for(let S=0;S!==a;++S)r[S]=m*o[h+S]+M*o[c+S]+T*o[l+S]+v*o[d+S];return r}},Io=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Po=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Lo=class extends fi{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=f*u+p*2,M=d[m],T=d[m+1],v=t*u+p*2,S=h[v],w=h[v+1],R=vf(n,e,M,S,i);r[p]=uu(R,_,T,w,g)}return r}};function uu(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function yf(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function vf(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=uu(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=yf(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=es(e,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:es(t.times,Array),values:es(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ml(t.settings)&&(n.settings={inTangents:es(t.settings.inTangents,Array),outTangents:es(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Lo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Hs:e=this.InterpolantFactoryMethodDiscrete;break;case uo:e=this.InterpolantFactoryMethodLinear;break;case eo:e=this.InterpolantFactoryMethodSmooth;break;case Sl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return eo;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ml(this.settings)&&(bh(this.settings.inTangents,t),bh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Gt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Ed(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===eo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ml(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function bh(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=uo;var pi=class extends gn{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Hs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};Do.prototype.ValueTypeName="color";var No=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};No.prototype.ValueTypeName="number";var Uo=class extends fi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ae.slerpFlat(r,0,o,c-a,o,c,l);return r}},rr=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends gn{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Hs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends gn{constructor(t,e,n,i){super(t,e,n,i)}};Fo.prototype.ValueTypeName="vector";var Bo=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},du=new Bo,Oo=class{constructor(t){this.manager=t!==void 0?t:du,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},or=class extends xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bl=new jt,Sh=new A,wh=new A,ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(bl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===ls||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(bl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qr=new A,to=new Ae,Fn=new A,lr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qr,to,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,to,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qr,to,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,to,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new A,Eh=new vt,Th=new vt,an=class extends lr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,Th),e.subVectors(Th,Eh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Rl=class extends ar{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},cr=class extends xs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ti=class extends lr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cl=class extends ar{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Cl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ns=-90,is=1,zo=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(ns,is,t,e);i.layers=this.layers,this.add(i);let r=new an(ns,is,t,e);r.layers=this.layers,this.add(r);let o=new an(ns,is,t,e);o.layers=this.layers,this.add(o);let a=new an(ns,is,t,e);a.layers=this.layers,this.add(a);let l=new an(ns,is,t,e);l.layers=this.layers,this.add(l);let c=new an(ns,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ko=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var sc="\\[\\]\\.:\\/",Mf=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",bf="[^"+sc.replace("\\.","")+"]",Sf=/((?:WC+[\/:])*)/.source.replace("WC",rc),wf=/(WCOD+)?/.source.replace("WCOD",bf),Ef=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),Tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),Af=new RegExp("^"+Sf+wf+Ef+Tf+"$"),Rf=["material","materials","bones","map"],Il=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Mf,"")}static parseTrackName(t){let e=Af.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Rf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Il;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jx=new Float32Array(1);var uc=class uc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};uc.prototype.isMatrix2=!0;var Pl=uc;function oc(s,t,e,n){let i=Cf(n);switch(e){case Jl:return s*t;case $o:return s*t/i.components*i.byteLength;case Ko:return s*t/i.components*i.byteLength;case vi:return s*t*2/i.components*i.byteLength;case jo:return s*t*2/i.components*i.byteLength;case $l:return s*t*3/i.components*i.byteLength;case fn:return s*t*4/i.components*i.byteLength;case Qo:return s*t*4/i.components*i.byteLength;case pr:case mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case gr:case xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ea:case ia:return Math.max(s,16)*Math.max(t,8)/4;case ta:case na:return Math.max(s,8)*Math.max(t,8)/2;case sa:case ra:case aa:case la:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case oa:case _r:case ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case va:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wa:case Ea:case Ta:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Aa:case Ra:return Math.ceil(s/4)*Math.ceil(t/4)*8;case yr:case Ca:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cf(s){switch(s){case dn:case Xl:return{byteLength:1,components:1};case vs:case ql:case _n:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case xn:case Yo:case Sn:return{byteLength:4,components:1};case Yl:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Nu(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ff(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Kf=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,op=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Np=`PhysicalMaterial material;
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
#endif`,Up=`uniform sampler2D dfgLUT;
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
}`,Fp=`
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yp=`#if defined( USE_POINTS_UV )
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
#endif`,Zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
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
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_m=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Om=`uniform sampler2D t2D;
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,qm=`#define DISTANCE
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,jm=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define MATCAP
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
}`,n0=`#define MATCAP
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
}`,i0=`#define NORMAL
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
}`,s0=`#define NORMAL
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
}`,r0=`#define PHONG
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
}`,o0=`#define PHONG
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
}`,a0=`#define STANDARD
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
}`,l0=`#define STANDARD
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
}`,c0=`#define TOON
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
}`,h0=`#define TOON
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
}`,u0=`uniform float size;
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
}`,d0=`uniform vec3 diffuse;
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
}`,f0=`#include <common>
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
}`,p0=`uniform vec3 color;
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
}`,m0=`uniform float rotation;
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
}`,g0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Bf,alphahash_pars_fragment:Of,alphamap_fragment:zf,alphamap_pars_fragment:kf,alphatest_fragment:Hf,alphatest_pars_fragment:Gf,aomap_fragment:Vf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Yf,beginnormal_vertex:Zf,bsdfs:Jf,iridescence_fragment:$f,bumpmap_pars_fragment:Kf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:op,cube_uv_reflection_fragment:ap,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:xp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Cp,envmap_vertex:yp,fog_vertex:vp,fog_pars_vertex:Mp,fog_fragment:bp,fog_pars_fragment:Sp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Ep,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Np,lights_physical_pars_fragment:Up,lights_fragment_begin:Fp,lights_fragment_maps:Bp,lights_fragment_end:Op,lightprobes_pars_fragment:zp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Hp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Vp,map_fragment:Wp,map_pars_fragment:Xp,map_particle_fragment:qp,map_particle_pars_fragment:Yp,metalnessmap_fragment:Zp,metalnessmap_pars_fragment:Jp,morphinstance_vertex:$p,morphcolor_vertex:Kp,morphnormal_vertex:jp,morphtarget_pars_vertex:Qp,morphtarget_vertex:tm,normal_fragment_begin:em,normal_fragment_maps:nm,normal_pars_fragment:im,normal_pars_vertex:sm,normal_vertex:rm,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:lm,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:um,packing:dm,premultiplied_alpha_fragment:fm,project_vertex:pm,dithering_fragment:mm,dithering_pars_fragment:gm,roughnessmap_fragment:xm,roughnessmap_pars_fragment:_m,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:vm,shadowmap_vertex:Mm,shadowmask_pars_fragment:bm,skinbase_vertex:Sm,skinning_pars_vertex:wm,skinning_vertex:Em,skinnormal_vertex:Tm,specularmap_fragment:Am,specularmap_pars_fragment:Rm,tonemapping_fragment:Cm,tonemapping_pars_fragment:Im,transmission_fragment:Pm,transmission_pars_fragment:Lm,uv_pars_fragment:Dm,uv_pars_vertex:Nm,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Bm,background_frag:Om,backgroundCube_vert:zm,backgroundCube_frag:km,cube_vert:Hm,cube_frag:Gm,depth_vert:Vm,depth_frag:Wm,distance_vert:Xm,distance_frag:qm,equirect_vert:Ym,equirect_frag:Zm,linedashed_vert:Jm,linedashed_frag:$m,meshbasic_vert:Km,meshbasic_frag:jm,meshlambert_vert:Qm,meshlambert_frag:t0,meshmatcap_vert:e0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:s0,meshphong_vert:r0,meshphong_frag:o0,meshphysical_vert:a0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:h0,points_vert:u0,points_frag:d0,shadow_vert:f0,shadow_frag:p0,sprite_vert:m0,sprite_frag:g0},ft={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Xn={basic:{uniforms:nn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:nn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:nn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:nn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:nn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new xt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:nn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:nn([ft.points,ft.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:nn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:nn([ft.common,ft.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:nn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:nn([ft.sprite,ft.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:nn([ft.common,ft.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:nn([ft.lights,ft.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Xn.physical={uniforms:nn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var La={r:0,b:0,g:0},x0=new jt,Uu=new Wt;Uu.set(-1,0,0,0,1,0,0,0,1);function _0(s,t,e,n,i,r){let o=new xt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let v=M.backgroundBlurriness>0;T=t.get(T,v)}return T}function p(M){let T=!1,v=f(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),T=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,T){let v=f(T);v&&(v.isCubeTexture||v.mapping===dr)?(c===void 0&&(c=new Tt(new Bt(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Oi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(x0.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Uu),c.material.toneMapped=se.getTransfer(v.colorSpace)!==he,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Tt(new Oe(2,2),new Ie({name:"BackgroundMaterial",uniforms:Oi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,T){M.getRGB(La,ic(s)),e.buffers.color.setClear(La.r,La.g,La.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:_,dispose:m}}function y0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(D,L,O,P,F){let k=!1,X=d(D,P,O,L);r!==X&&(r=X,c(r.object)),k=f(D,P,O,F),k&&p(D,P,O,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(D,L,O,P),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,L,O,P){let F=P.wireframe===!0,k=n[L.id];k===void 0&&(k={},n[L.id]=k);let X=D.isInstancedMesh===!0?D.id:0,Y=k[X];Y===void 0&&(Y={},k[X]=Y);let z=Y[O.id];z===void 0&&(z={},Y[O.id]=z);let $=z[F];return $===void 0&&($=u(l()),z[F]=$),$}function u(D){let L=[],O=[],P=[];for(let F=0;F<e;F++)L[F]=0,O[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,L,O,P){let F=r.attributes,k=L.attributes,X=0,Y=O.getAttributes();for(let z in Y)if(Y[z].location>=0){let Q=F[z],yt=k[z];if(yt===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor)),Q===void 0||Q.attribute!==yt||yt&&Q.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==P}function p(D,L,O,P){let F={},k=L.attributes,X=0,Y=O.getAttributes();for(let z in Y)if(Y[z].location>=0){let Q=k[z];Q===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let yt={};yt.attribute=Q,Q&&Q.data&&(yt.data=Q.data),F[z]=yt,X++}r.attributes=F,r.attributesNum=X,r.index=P}function _(){let D=r.newAttributes;for(let L=0,O=D.length;L<O;L++)D[L]=0}function g(D){m(D,0)}function m(D,L){let O=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;O[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),F[D]!==L&&(s.vertexAttribDivisor(D,L),F[D]=L)}function M(){let D=r.newAttributes,L=r.enabledAttributes;for(let O=0,P=L.length;O<P;O++)L[O]!==D[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function T(D,L,O,P,F,k,X){X===!0?s.vertexAttribIPointer(D,L,O,F,k):s.vertexAttribPointer(D,L,O,P,F,k)}function v(D,L,O,P){_();let F=P.attributes,k=O.getAttributes(),X=L.defaultAttributeValues;for(let Y in k){let z=k[Y];if(z.location>=0){let $=F[Y];if($===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let Q=$.normalized,yt=$.itemSize,bt=t.get($);if(bt===void 0)continue;let Xt=bt.buffer,Ht=bt.type,Yt=bt.bytesPerElement,J=Ht===s.INT||Ht===s.UNSIGNED_INT||$.gpuType===Yo;if($.isInterleavedBufferAttribute){let nt=$.data,St=nt.stride,kt=$.offset;if(nt.isInstancedInterleavedBuffer){for(let wt=0;wt<z.locationSize;wt++)m(z.location+wt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let wt=0;wt<z.locationSize;wt++)g(z.location+wt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let wt=0;wt<z.locationSize;wt++)T(z.location+wt,yt/z.locationSize,Ht,Q,St*Yt,(kt+yt/z.locationSize*wt)*Yt,J)}else{if($.isInstancedBufferAttribute){for(let nt=0;nt<z.locationSize;nt++)m(z.location+nt,$.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let nt=0;nt<z.locationSize;nt++)g(z.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let nt=0;nt<z.locationSize;nt++)T(z.location+nt,yt/z.locationSize,Ht,Q,yt*Yt,yt/z.locationSize*nt*Yt,J)}}else if(X!==void 0){let Q=X[Y];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(z.location,Q);break;case 3:s.vertexAttrib3fv(z.location,Q);break;case 4:s.vertexAttrib4fv(z.location,Q);break;default:s.vertexAttrib1fv(z.location,Q)}}}}M()}function S(){E();for(let D in n){let L=n[D];for(let O in L){let P=L[O];for(let F in P){let k=P[F];for(let X in k)h(k[X].object),delete k[X];delete P[F]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let O in L){let P=L[O];for(let F in P){let k=P[F];for(let X in k)h(k[X].object),delete k[X];delete P[F]}}delete n[D.id]}function R(D){for(let L in n){let O=n[L];for(let P in O){let F=O[P];if(F[D.id]===void 0)continue;let k=F[D.id];for(let X in k)h(k[X].object),delete k[X];delete F[D.id]}}}function x(D){for(let L in n){let O=n[L],P=D.isInstancedMesh===!0?D.id:0,F=O[P];if(F!==void 0){for(let k in F){let X=F[k];for(let Y in X)h(X[Y].object),delete X[Y];delete F[k]}delete O[P],Object.keys(O).length===0&&delete n[L]}}}function E(){I(),o=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function v0(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function M0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==fn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===_n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==dn&&R!==Sn&&!x&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:v,maxSamples:S,samples:w}}function b0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Cn,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,T=M*4,v=m.clippingState||null;l.value=v,v=h(p,u,T,f);for(let S=0;S!==T;++S)v[S]=e[S];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,v=f;T!==_;++T,v+=4)o.copy(d[T]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Es=4,S0=6,w0=20,E0=256,Mr=new ti,fu=new xt,dc=null,fc=0,pc=0,mc=!1,T0=new A,zi=new A,Na=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=T0}=r;dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:_n,format:fn,colorSpace:Pi,depthBuffer:!1},i=pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=A0(r)),this._blurMaterial=C0(r,t,e),this._ggxMaterial=R0(r,t,e)}return i}_compileMaterial(t){let e=new Tt(new ue,t);this._renderer.compile(e,Mr)}_sceneToCubeUV(t,e,n,i,r){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(fu),d.toneMapping=Ln,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Bt,new Re({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(fu),m=!0);for(let T=0;T<6;T++){let v=T%3;v===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):v===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let S=this._cubeSize;ws(i,v*S,T>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===xi||t.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Mr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Es?n-p+Es:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,ws(r,g,m,3*_,2*_),i.setRenderTarget(r),i.render(a,Mr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,ws(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(a,Mr)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Es?i-this._lodMax+Es:0),u=4*(this._cubeSize-h);ws(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Mr)}};function A0(s){let t=[],e=[],n=s,i=s-Es+1+S0;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,T=m>2?0:-1,v=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];p.set(v,f*u*m);for(let S=0;S<u;S++){let w=h[S*2]*2-1,R=h[S*2+1]*2-1;m===0?zi.set(1,R,w):m===1?zi.set(-w,1,-R):m===2?zi.set(-w,R,1):m===3?zi.set(-1,R,-w):m===4?zi.set(-w,-1,R):zi.set(w,R,-1),zi.toArray(_,(m*u+S)*f)}}let g=new ue;g.setAttribute("position",new Fe(p,f)),g.setAttribute("outputDirection",new Fe(_,f)),e.push(new Tt(g,null)),n>Es&&n--}return{lodMeshes:e,sizeLods:t}}function pu(s,t,e){let n=new qe(s,t,e);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function R0(s,t,e){return new Ie({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function C0(s,t,e){return new Ie({name:"SphericalGaussianBlur",defines:{SAMPLES:w0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function mu(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function gu(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ba(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ua=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ks(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bt(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Vn});r.uniforms.tEquirect.value=e;let o=new Tt(i,r),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=Be),new zo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function I0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wo||f===Xo)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new Ua(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Wo||f===Xo,_=f===xi||f===Bi;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Na(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Na(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Wo?u.mapping=xi:f===Xo&&(u.mapping=Bi),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function P0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ii("WebGLRenderer: "+n+" extension not supported."),i}}}function L0(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let T=0,v=M.length;T<v;T+=3){let S=M[T+0],w=M[T+1],R=M[T+2];u.push(S,w,w,R,R,S)}}else{let M=p.array;_=p.version;for(let T=0,v=M.length/3-1;T<v;T+=3){let S=T+0,w=T+1,R=T+2;u.push(S,w,w,R,R,S)}}let g=new(p.count>=65535?Ys:qs)(u,1);g.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function D0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function N0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function U0(s,t,e){let n=new WeakMap,i=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],T=0;f===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let v=a.attributes.position.count*T,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*S*4*d),R=new Ws(w,v,S,d);R.type=Sn,R.needsUpdate=!0;let x=T*4;for(let I=0;I<d;I++){let D=g[I],L=m[I],O=M[I],P=v*S*4*I;for(let F=0;F<D.count;F++){let k=F*x;f===!0&&(i.fromBufferAttribute(D,F),w[P+k+0]=i.x,w[P+k+1]=i.y,w[P+k+2]=i.z,w[P+k+3]=0),p===!0&&(i.fromBufferAttribute(L,F),w[P+k+4]=i.x,w[P+k+5]=i.y,w[P+k+6]=i.z,w[P+k+7]=0),_===!0&&(i.fromBufferAttribute(O,F),w[P+k+8]=i.x,w[P+k+9]=i.y,w[P+k+10]=i.z,w[P+k+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new vt(v,S)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function F0(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var B0={[Bl]:"LINEAR_TONE_MAPPING",[Ol]:"REINHARD_TONE_MAPPING",[zl]:"CINEON_TONE_MAPPING",[kl]:"ACES_FILMIC_TONE_MAPPING",[Gl]:"AGX_TONE_MAPPING",[Vl]:"NEUTRAL_TONE_MAPPING",[Hl]:"CUSTOM_TONE_MAPPING"};function O0(s,t,e,n,i,r){let o=new qe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ue;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let h=new Ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Tt(c,h),u=new ti(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,M=[],T=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let w=0;w<M.length;w++){let R=M[w];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){M=v,T=M.length>0&&M[0].isRenderPass===!0;let S=o.width,w=o.height;M.length>0&&a===null&&(a=new qe(S,w,{type:_n,depthBuffer:!1,stencilBuffer:!1}),l=new qe(S,w,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let x=M[R];x.setSize&&x.setSize(S,w)}},this.begin=function(v,S){if(_||v.toneMapping===Ln&&M.length===0)return!1;if(m=S,S!==null){let w=S.width,R=S.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return T===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Ln,!0},this.hasRenderPass=function(){return T},this.end=function(v,S){v.toneMapping=g,_=!0;let w=o,R=a;for(let x=0;x<M.length;x++){let E=M[x];E.enabled!==!1&&(E.render(v,R,w,S),E.needsSwap!==!1&&(w=R,R=R===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},se.getTransfer(f)===he&&(h.defines.SRGB_TRANSFER="");let x=B0[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Fu=new ln,_c=new Gn(1,1),Bu=new Ws,Ou=new mo,zu=new Ks,xu=[],_u=[],yu=new Float32Array(16),vu=new Float32Array(9),Mu=new Float32Array(4);function As(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=xu[i];if(r===void 0&&(r=new Float32Array(i),xu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function He(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Oa(s,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function z0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function k0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function G0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function V0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Mu.set(n),s.uniformMatrix2fv(this.addr,!1,Mu),Ge(e,n)}}function W0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;vu.set(n),s.uniformMatrix3fv(this.addr,!1,vu),Ge(e,n)}}function X0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;yu.set(n),s.uniformMatrix4fv(this.addr,!1,yu),Ge(e,n)}}function q0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function Z0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function J0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function $0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function K0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function j0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function Q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function tg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_c.compareFunction=e.isReversedDepthBuffer()?Pa:Ia,r=_c):r=Fu,e.setTexture2D(t||r,i)}function eg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ou,i)}function ng(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zu,i)}function ig(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bu,i)}function sg(s){switch(s){case 5126:return z0;case 35664:return k0;case 35665:return H0;case 35666:return G0;case 35674:return V0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return $0;case 36294:return K0;case 36295:return j0;case 36296:return Q0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(s,t){s.uniform1fv(this.addr,t)}function og(s,t){let e=As(t,this.size,2);s.uniform2fv(this.addr,e)}function ag(s,t){let e=As(t,this.size,3);s.uniform3fv(this.addr,e)}function lg(s,t){let e=As(t,this.size,4);s.uniform4fv(this.addr,e)}function cg(s,t){let e=As(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function hg(s,t){let e=As(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ug(s,t){let e=As(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function dg(s,t){s.uniform1iv(this.addr,t)}function fg(s,t){s.uniform2iv(this.addr,t)}function pg(s,t){s.uniform3iv(this.addr,t)}function mg(s,t){s.uniform4iv(this.addr,t)}function gg(s,t){s.uniform1uiv(this.addr,t)}function xg(s,t){s.uniform2uiv(this.addr,t)}function _g(s,t){s.uniform3uiv(this.addr,t)}function yg(s,t){s.uniform4uiv(this.addr,t)}function vg(s,t,e){let n=this.cache,i=t.length,r=Oa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=_c:o=Fu;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Mg(s,t,e){let n=this.cache,i=t.length,r=Oa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ou,r[o])}function bg(s,t,e){let n=this.cache,i=t.length,r=Oa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||zu,r[o])}function Sg(s,t,e){let n=this.cache,i=t.length,r=Oa(e,i);He(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Bu,r[o])}function wg(s){switch(s){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return _g;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Sg}}var yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}},vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wg(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},gc=/(\w+)(\])?(\[|\.)?/g;function bu(s,t){s.seq.push(t),s.map[t.id]=t}function Eg(s,t,e){let n=s.name,i=n.length;for(gc.lastIndex=0;;){let r=gc.exec(n),o=gc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bu(e,c===void 0?new yc(a,s,t):new vc(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Mc(a),bu(e,d)),e=d}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Eg(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Su(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Tg=37297,Ag=0;function Rg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wu=new Wt;function Cg(s){se._getMatrix(wu,se.workingColorSpace,s);let t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case Gs:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Eu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Rg(s.getShaderSource(t),a)}else return r}function Ig(s,t){let e=Cg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Pg={[Bl]:"Linear",[Ol]:"Reinhard",[zl]:"Cineon",[kl]:"ACESFilmic",[Gl]:"AgX",[Vl]:"Neutral",[Hl]:"Custom"};function Lg(s,t){let e=Pg[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Da=new A;function Dg(){se.getLuminanceCoefficients(Da);let s=Da.x.toFixed(4),t=Da.y.toFixed(4),e=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Ug(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Sr(s){return s!==""}function Tu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Au(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(s){return s.replace(Bg,zg)}var Og=new Map;function zg(s,t){let e=Jt[t];if(e===void 0){let n=Og.get(t);if(n!==void 0)e=Jt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return bc(e)}var kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(s){return s.replace(kg,Hg)}function Hg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Gg={[Ui]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function Vg(s){return Gg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wg={[xi]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[dr]:"ENVMAP_TYPE_CUBE_UV"};function Xg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Wg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var qg={[Bi]:"ENVMAP_MODE_REFRACTION"};function Yg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":qg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zg={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[qh]:"ENVMAP_BLENDING_MIX",[Yh]:"ENVMAP_BLENDING_ADD"};function Jg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Zg[s.combine]||"ENVMAP_BLENDING_NONE"}function $g(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Kg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Vg(e),c=Xg(e),h=Yg(e),d=Jg(e),u=$g(e),f=Ng(e),p=Ug(r),_=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Sr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(g=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Lg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Ig("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=bc(o),o=Tu(o,e),o=Au(o,e),a=bc(a),a=Tu(a,e),a=Au(a,e),o=Ru(o),a=Ru(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let T=M+g+o,v=M+m+a,S=Su(i,i.VERTEX_SHADER,T),w=Su(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(S)||"",P=i.getShaderInfoLog(w)||"",F=L.trim(),k=O.trim(),X=P.trim(),Y=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,w);else{let $=Eu(i,S,"vertex"),Q=Eu(i,w,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+$+`
`+Q)}else F!==""?zt("WebGLProgram: Program Info Log:",F):(k===""||X==="")&&(z=!1);z&&(D.diagnostics={runnable:Y,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:X,prefix:m}})}i.deleteShader(S),i.deleteShader(w),x=new Ts(i,_),E=Fg(i,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(_,Tg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}var jg=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wc(t),e.set(t,n)),n}},wc=class{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}};function Qg(s){return s===vi||s===_r||s===yr}function tx(s,t,e,n,i,r){let o=new Xs,a=new Sc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,E,I,D,L,O){let P=D.fog,F=L.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||k,X),z=Y&&Y.mapping===dr?Y.image.height:null,$=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,yt=Q!==void 0?Q.length:0,bt=0;F.morphAttributes.position!==void 0&&(bt=1),F.morphAttributes.normal!==void 0&&(bt=2),F.morphAttributes.color!==void 0&&(bt=3);let Xt,Ht,Yt,J;if($){let xe=Xn[$];Xt=xe.vertexShader,Ht=xe.fragmentShader}else{Xt=x.vertexShader,Ht=x.fragmentShader;let xe=a.getVertexShaderStage(x),le=a.getFragmentShaderStage(x);a.update(x,xe,le),Yt=xe.id,J=le.id}let nt=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),kt=L.isInstancedMesh===!0,wt=L.isBatchedMesh===!0,Qt=!!x.map,ke=!!x.matcap,te=!!Y,oe=!!x.aoMap,ge=!!x.lightMap,ie=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,Ve=!!x.displacementMap,hn=!!x.emissiveMap,Te=!!x.metalnessMap,De=!!x.roughnessMap,B=x.anisotropy>0,je=x.clearcoat>0,de=x.dispersion>0,C=x.retroreflectivity>0,y=x.iridescence>0,H=x.sheen>0,q=x.transmission>0,K=B&&!!x.anisotropyMap,rt=je&&!!x.clearcoatMap,at=je&&!!x.clearcoatNormalMap,j=je&&!!x.clearcoatRoughnessMap,et=y&&!!x.iridescenceMap,lt=y&&!!x.iridescenceThicknessMap,Dt=H&&!!x.sheenColorMap,dt=H&&!!x.sheenRoughnessMap,ct=!!x.specularMap,Nt=!!x.specularColorMap,Ot=!!x.specularIntensityMap,qt=q&&!!x.transmissionMap,U=q&&!!x.thicknessMap,ht=!!x.gradientMap,tt=!!x.alphaMap,ut=x.alphaTest>0,gt=!!x.alphaHash,it=!!x.extensions,Ut=Ln;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ut=s.toneMapping);let It={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Xt,fragmentShader:Ht,defines:x.defines,customVertexShaderID:Yt,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:wt,batchingColor:wt&&L._colorsTexture!==null,instancing:kt,instancingColor:kt&&L.instanceColor!==null,instancingMorph:kt&&L.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Qt,matcap:ke,envMap:te,envMapMode:te&&Y.mapping,envMapCubeUVHeight:z,aoMap:oe,lightMap:ge,bumpMap:ie,normalMap:Se,displacementMap:Ve,emissiveMap:hn,normalMapObjectSpace:Se&&x.normalMapType===$h,normalMapTangentSpace:Se&&x.normalMapType===vr,packedNormalMap:Se&&x.normalMapType===vr&&Qg(x.normalMap.format),metalnessMap:Te,roughnessMap:De,anisotropy:B,anisotropyMap:K,clearcoat:je,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:j,dispersion:de,retroreflection:C,iridescence:y,iridescenceMap:et,iridescenceThicknessMap:lt,sheen:H,sheenColorMap:Dt,sheenRoughnessMap:dt,specularMap:ct,specularColorMap:Nt,specularIntensityMap:Ot,transmission:q,transmissionMap:qt,thicknessMap:U,gradientMap:ht,opaque:x.transparent===!1&&x.blending===ys&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:ut,alphaHash:gt,combine:x.combine,mapUv:Qt&&p(x.map.channel),aoMapUv:oe&&p(x.aoMap.channel),lightMapUv:ge&&p(x.lightMap.channel),bumpMapUv:ie&&p(x.bumpMap.channel),normalMapUv:Se&&p(x.normalMap.channel),displacementMapUv:Ve&&p(x.displacementMap.channel),emissiveMapUv:hn&&p(x.emissiveMap.channel),metalnessMapUv:Te&&p(x.metalnessMap.channel),roughnessMapUv:De&&p(x.roughnessMap.channel),anisotropyMapUv:K&&p(x.anisotropyMap.channel),clearcoatMapUv:rt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:dt&&p(x.sheenRoughnessMap.channel),specularMapUv:ct&&p(x.specularMap.channel),specularColorMapUv:Nt&&p(x.specularColorMap.channel),specularIntensityMapUv:Ot&&p(x.specularIntensityMap.channel),transmissionMapUv:qt&&p(x.transmissionMap.channel),thicknessMapUv:U&&p(x.thicknessMap.channel),alphaMapUv:tt&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Se||B),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Qt||tt),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:bt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Qt&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===he,decodeVideoTextureEmissive:hn&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===he,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ve,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)E.push(I),E.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(E,x),M(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function m(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function T(x){let E=f[x.type],I;if(E){let D=Xn[E];I=hu.clone(D.uniforms)}else I=x.uniforms;return I}function v(x,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new Kg(s,E,x,i),c.push(I),h.set(E,I)),I}function S(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:T,acquireProgram:v,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:R}}function ex(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function nx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Iu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,g,m){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,f,p,_,g,m,M){M.reversedDepth===!0&&(g=-g);let T=a(u,f,p,_,g,m);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function c(u,f,p,_,g,m){let M=a(u,f,p,_,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||nx),n.length>1&&n.sort(f||Iu),i.length>1&&i.sort(f||Iu)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function ix(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Pu,s.set(n,[o])):i>=r.length?(o=new Pu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function sx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new xt};break;case"SpotLight":e={position:new A,direction:new A,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function rx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ox=0;function ax(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lx(s){let t=new sx,e=rx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let i=new A,r=new jt,o=new jt;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,M=0,T=0,v=0,S=0,w=0,R=0,x=0,E=0,I=0;c.sort(ax);for(let L=0,O=c.length;L<O;L++){let P=c[L],F=P.color,k=P.intensity,X=P.distance,Y=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vi?Y=P.shadow.map.texture:Y=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*k,d+=F.g*k,u+=F.b*k;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],k);I++}else if(P.isSunLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,Q=e.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[p]=Q,n.sunShadowMap[p]=Y;let yt=$.getViewportCount();for(let bt=0;bt<yt;bt++)n.sunShadowMatrix[_+bt]=$.getMatrix(bt),n.sunShadowCascade[_+bt]=$._cascadeData[bt];_+=yt,p++}n.sun[f]=z,f++}else if(P.isDirectionalLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,Q=e.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=P.shadow.matrix,S++}n.directional[g]=z,g++}else if(P.isSpotLight){let z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(F).multiplyScalar(k),z.distance=X,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[M]=z;let $=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,$.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[M]=$.matrix,P.castShadow){let Q=e.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=Y,R++}M++}else if(P.isRectAreaLight){let z=t.get(P);z.color.copy(F).multiplyScalar(k),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=z,T++}else if(P.isPointLight){let z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let $=P.shadow,Q=e.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=z,m++}else if(P.isHemisphereLight){let z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(k),z.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[v]=z,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==R||D.numSpotMaps!==x||D.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=T,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=M,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=R,D.numSpotMaps=x,D.numLightProbes=I,n.version=ox++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){let v=c[M];if(v.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Lu(s){let t=new lx(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function cx(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Lu(s),t.set(i,[a])):r>=o.length?(a=new Lu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`,dx=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],fx=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Du=new jt,br=new A,xc=new A;function px(s,t,e){let n=new ps,i=new vt,r=new vt,o=new we,a=new gs,l=new Ro,c={},h=e.maxTextureSize,d={[gi]:cn,[cn]:gi,[ve]:ve},u=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ue;p.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Tt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ui;let m=this.type;this.render=function(w,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Ch&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ui);let E=s.getRenderTarget(),I=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Vn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=m!==this.type;O&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=w.length;P<F;P++){let k=w[P],X=k.shadow;if(X===void 0){zt("WebGLShadowMap:",k,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let Y=X.getFrameExtents();i.multiply(Y),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,X.mapSize.y=r.y));let z=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=z,X.map===null||O===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===_s){if(k.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new qe(i.x,i.y,{format:vi,type:_n,minFilter:Be,magFilter:Be,generateMipmaps:!1}),X.map.texture.name=k.name+".shadowMap",X.map.depthTexture=new Gn(i.x,i.y,Sn),X.map.depthTexture.name=k.name+".shadowMapDepth",X.map.depthTexture.format=On,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=pe,X.map.depthTexture.magFilter=pe}else k.isPointLight?(X.map=new Ua(i.x),X.map.depthTexture=new xo(i.x,xn)):(X.map=new qe(i.x,i.y),X.map.depthTexture=new Gn(i.x,i.y,xn)),X.map.depthTexture.name=k.name+".shadowMap",X.map.depthTexture.format=On,this.type===Ui?(X.map.depthTexture.compareFunction=z?Pa:Ia,X.map.depthTexture.minFilter=Be,X.map.depthTexture.magFilter=Be):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=pe,X.map.depthTexture.magFilter=pe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let $=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();k.isPointLight!==!0&&X.updateMatrices(k,x);for(let Q=0;Q<$;Q++){let yt=X.getCamera(Q);if(k.isPointLight){let bt=X.camera,Xt=X.matrix,Ht=k.distance||bt.far;Ht!==bt.far&&(bt.far=Ht,bt.updateProjectionMatrix()),br.setFromMatrixPosition(k.matrixWorld),bt.position.copy(br),xc.copy(bt.position),xc.add(dx[Q]),bt.up.copy(fx[Q]),bt.lookAt(xc),bt.updateMatrixWorld(),Xt.makeTranslation(-br.x,-br.y,-br.z),Du.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Du,bt.coordinateSystem,bt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(X.map),s.clear());let bt=X.getViewport(Q);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),L.viewport(o)}n=X.getFrustum(Q),v(R,x,yt,k,this.type)}X.isPointLightShadow!==!0&&this.type===_s&&M(X,x),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,I,D)};function M(w,R){let x=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new qe(i.x,i.y,{format:vi,type:_n}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,x,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,x,f,_,null)}function T(w,R,x,E){let I=null,D=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)I=D;else if(I=x.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=I.uuid,O=R.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let F=P[O];F===void 0&&(F=I.clone(),P[O]=F,R.addEventListener("dispose",S)),I=F}if(I.visible=R.visible,I.wireframe=R.wireframe,E===_s?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let L=s.properties.get(I);L.light=x}return I}function v(w,R,x,E,I){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===_s)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let O=t.update(w),P=w.material;if(Array.isArray(P)){let F=O.groups;for(let k=0,X=F.length;k<X;k++){let Y=F[k],z=P[Y.materialIndex];if(z&&z.visible){let $=T(w,z,E,I);w.onBeforeShadow(s,w,R,x,O,$,Y),s.renderBufferDirect(x,null,O,$,w,Y),w.onAfterShadow(s,w,R,x,O,$,Y)}}}else if(P.visible){let F=T(w,P,E,I);w.onBeforeShadow(s,w,R,x,O,F,null),s.renderBufferDirect(x,null,O,F,w,null),w.onAfterShadow(s,w,R,x,O,F,null)}}let L=w.children;for(let O=0,P=L.length;O<P;O++)v(L[O],R,x,E,I)}function S(w){w.target.removeEventListener("dispose",S);for(let x in c){let E=c[x],I=w.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function mx(s,t){function e(){let U=!1,ht=new we,tt=null,ut=new we(0,0,0,0);return{setMask:function(gt){tt!==gt&&!U&&(s.colorMask(gt,gt,gt,gt),tt=gt)},setLocked:function(gt){U=gt},setClear:function(gt,it,Ut,It,xe){xe===!0&&(gt*=It,it*=It,Ut*=It),ht.set(gt,it,Ut,It),ut.equals(ht)===!1&&(s.clearColor(gt,it,Ut,It),ut.copy(ht))},reset:function(){U=!1,tt=null,ut.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,tt=null,ut=null,gt=null;return{setReversed:function(it){if(ht!==it){let Ut=t.get("EXT_clip_control");it?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let It=gt;gt=null,this.setClear(It)}},getReversed:function(){return ht},setTest:function(it){it?nt(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(it){tt!==it&&!U&&(s.depthMask(it),tt=it)},setFunc:function(it){if(ht&&(it=lu[it]),ut!==it){switch(it){case io:s.depthFunc(s.NEVER);break;case so:s.depthFunc(s.ALWAYS);break;case ro:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case oo:s.depthFunc(s.EQUAL);break;case ao:s.depthFunc(s.GEQUAL);break;case lo:s.depthFunc(s.GREATER);break;case co:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=it}},setLocked:function(it){U=it},setClear:function(it){gt!==it&&(gt=it,ht&&(it=1-it),s.clearDepth(it))},reset:function(){U=!1,tt=null,ut=null,gt=null,ht=!1}}}function i(){let U=!1,ht=null,tt=null,ut=null,gt=null,it=null,Ut=null,It=null,xe=null;return{setTest:function(le){U||(le?nt(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(le){ht!==le&&!U&&(s.stencilMask(le),ht=le)},setFunc:function(le,En,Nn){(tt!==le||ut!==En||gt!==Nn)&&(s.stencilFunc(le,En,Nn),tt=le,ut=En,gt=Nn)},setOp:function(le,En,Nn){(it!==le||Ut!==En||It!==Nn)&&(s.stencilOp(le,En,Nn),it=le,Ut=En,It=Nn)},setLocked:function(le){U=le},setClear:function(le){xe!==le&&(s.clearStencil(le),xe=le)},reset:function(){U=!1,ht=null,tt=null,ut=null,gt=null,it=null,Ut=null,It=null,xe=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,T=null,v=null,S=null,w=null,R=null,x=new xt(0,0,0),E=0,I=!1,D=null,L=null,O=null,P=null,F=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),X=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),X=Y>=2);let $=null,Q={},yt=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),Xt=new we().fromArray(yt),Ht=new we().fromArray(bt);function Yt(U,ht,tt,ut){let gt=new Uint8Array(4),it=s.createTexture();s.bindTexture(U,it),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<tt;Ut++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ht+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return it}let J={};J[s.TEXTURE_2D]=Yt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(os),ie(!1),Se(Ll),nt(s.CULL_FACE),oe(Vn);function nt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function St(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function kt(U,ht){return u[U]!==ht?(s.bindFramebuffer(U,ht),u[U]=ht,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function wt(U,ht){let tt=p,ut=!1;if(U){tt=f.get(ht),tt===void 0&&(tt=[],f.set(ht,tt));let gt=U.textures;if(tt.length!==gt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let it=0,Ut=gt.length;it<Ut;it++)tt[it]=s.COLOR_ATTACHMENT0+it;tt.length=gt.length,ut=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,ut=!0);ut&&s.drawBuffers(tt)}function Qt(U){return _!==U?(s.useProgram(U),_=U,!0):!1}let ke={[Fi]:s.FUNC_ADD,[Ih]:s.FUNC_SUBTRACT,[Ph]:s.FUNC_REVERSE_SUBTRACT};ke[Lh]=s.MIN,ke[Dh]=s.MAX;let te={[Nh]:s.ZERO,[Vo]:s.ONE,[Uh]:s.SRC_COLOR,[Ul]:s.SRC_ALPHA,[Hh]:s.SRC_ALPHA_SATURATE,[zh]:s.DST_COLOR,[Bh]:s.DST_ALPHA,[Fh]:s.ONE_MINUS_SRC_COLOR,[ur]:s.ONE_MINUS_SRC_ALPHA,[kh]:s.ONE_MINUS_DST_COLOR,[Oh]:s.ONE_MINUS_DST_ALPHA,[Gh]:s.CONSTANT_COLOR,[Vh]:s.ONE_MINUS_CONSTANT_COLOR,[Wh]:s.CONSTANT_ALPHA,[Xh]:s.ONE_MINUS_CONSTANT_ALPHA};function oe(U,ht,tt,ut,gt,it,Ut,It,xe,le){if(U===Vn){g===!0&&(St(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),U!==Go){if(U!==m||le!==I){if((M!==Fi||S!==Fi)&&(s.blendEquation(s.FUNC_ADD),M=Fi,S=Fi),le)switch(U){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pn:s.blendFunc(s.ONE,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",U);break}else switch(U){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Pn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dl:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",U);break}T=null,v=null,w=null,R=null,x.set(0,0,0),E=0,m=U,I=le}return}gt=gt||ht,it=it||tt,Ut=Ut||ut,(ht!==M||gt!==S)&&(s.blendEquationSeparate(ke[ht],ke[gt]),M=ht,S=gt),(tt!==T||ut!==v||it!==w||Ut!==R)&&(s.blendFuncSeparate(te[tt],te[ut],te[it],te[Ut]),T=tt,v=ut,w=it,R=Ut),(It.equals(x)===!1||xe!==E)&&(s.blendColor(It.r,It.g,It.b,xe),x.copy(It),E=xe),m=U,I=!1}function ge(U,ht){U.side===ve?St(s.CULL_FACE):nt(s.CULL_FACE);let tt=U.side===cn;ht&&(tt=!tt),ie(tt),U.blending===ys&&U.transparent===!1?oe(Vn):oe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let ut=U.stencilWrite;a.setTest(ut),ut&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),hn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){D!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),D=U)}function Se(U){U!==Ah?(nt(s.CULL_FACE),U!==L&&(U===Ll?s.cullFace(s.BACK):U===Rh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),L=U}function Ve(U){U!==O&&(X&&s.lineWidth(U),O=U)}function hn(U,ht,tt){U?(nt(s.POLYGON_OFFSET_FILL),(P!==ht||F!==tt)&&(P=ht,F=tt,o.getReversed()&&(ht=-ht),s.polygonOffset(ht,tt))):St(s.POLYGON_OFFSET_FILL)}function Te(U){U?nt(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function De(U){U===void 0&&(U=s.TEXTURE0+k-1),$!==U&&(s.activeTexture(U),$=U)}function B(U,ht,tt){tt===void 0&&($===null?tt=s.TEXTURE0+k-1:tt=$);let ut=Q[tt];ut===void 0&&(ut={type:void 0,texture:void 0},Q[tt]=ut),(ut.type!==U||ut.texture!==ht)&&($!==tt&&(s.activeTexture(tt),$=tt),s.bindTexture(U,ht||J[U]),ut.type=U,ut.texture=ht)}function je(){let U=Q[$];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function de(){try{s.compressedTexImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function y(){try{s.texSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function H(){try{s.texSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function rt(){try{s.texStorage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function at(){try{s.texStorage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function j(){try{s.texImage2D(...arguments)}catch(U){Gt("WebGLState:",U)}}function et(){try{s.texImage3D(...arguments)}catch(U){Gt("WebGLState:",U)}}function lt(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function Dt(U,ht){d[U]!==ht&&(s.pixelStorei(U,ht),d[U]=ht)}function dt(U){Xt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Xt.copy(U))}function ct(U){Ht.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Ht.copy(U))}function Nt(U,ht){let tt=c.get(ht);tt===void 0&&(tt=new WeakMap,c.set(ht,tt));let ut=tt.get(U);ut===void 0&&(ut=s.getUniformBlockIndex(ht,U.name),tt.set(U,ut))}function Ot(U,ht){let ut=c.get(ht).get(U);l.get(ht)!==ut&&(s.uniformBlockBinding(ht,ut,U.__bindingPointIndex),l.set(ht,ut))}function qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,Q={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,T=null,v=null,S=null,w=null,R=null,x=new xt(0,0,0),E=0,I=!1,D=null,L=null,O=null,P=null,F=null,Xt.set(0,0,s.canvas.width,s.canvas.height),Ht.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:St,bindFramebuffer:kt,drawBuffers:wt,useProgram:Qt,setBlending:oe,setMaterial:ge,setFlipSided:ie,setCullFace:Se,setLineWidth:Ve,setPolygonOffset:hn,setScissorTest:Te,activeTexture:De,bindTexture:B,unbindTexture:je,compressedTexImage2D:de,compressedTexImage3D:C,texImage2D:j,texImage3D:et,pixelStorei:Dt,getParameter:lt,updateUBOMapping:Nt,uniformBlockBinding:Ot,texStorage2D:rt,texStorage3D:at,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:dt,viewport:ct,reset:qt}}function gx(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return p?new OffscreenCanvas(C,y):Vs("canvas")}function g(C,y,H){let q=1,K=de(C);if((K.width>H||K.height>H)&&(q=H/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let rt=Math.floor(q*K.width),at=Math.floor(q*K.height);u===void 0&&(u=_(rt,at));let j=y?_(rt,at):u;return j.width=rt,j.height=at,j.getContext("2d").drawImage(C,0,0,rt,at),zt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+rt+"x"+at+")."),j}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){s.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,y,H,q,K,rt=!1){if(C!==null){if(s[C]!==void 0)return s[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let at;q&&(at=t.get("EXT_texture_norm16"),at||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8),H===s.UNSIGNED_SHORT&&at&&(j=at.R16_EXT),H===s.SHORT&&at&&(j=at.R16_SNORM_EXT)),y===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),y===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8),H===s.UNSIGNED_SHORT&&at&&(j=at.RG16_EXT),H===s.SHORT&&at&&(j=at.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),y===s.RGB&&(H===s.UNSIGNED_SHORT&&at&&(j=at.RGB16_EXT),H===s.SHORT&&at&&(j=at.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),y===s.RGBA){let et=rt?Gs:se.getTransfer(K);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=et===he?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&at&&(j=at.RGBA16_EXT),H===s.SHORT&&at&&(j=at.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(C,y){let H;return C?y===null||y===xn||y===Ms?H=s.DEPTH24_STENCIL8:y===Sn?H=s.DEPTH32F_STENCIL8:y===vs&&(H=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xn||y===Ms?H=s.DEPTH_COMPONENT24:y===Sn?H=s.DEPTH_COMPONENT32F:y===vs&&(H=s.DEPTH_COMPONENT16),H}function w(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==pe&&C.minFilter!==Be?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){let y=C.target;y.removeEventListener("dispose",R),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(C){let y=C.target;y.removeEventListener("dispose",x),D(y)}function E(C){let y=n.get(C);if(y.__webglInit===void 0)return;let H=C.source,q=f.get(H);if(q){let K=q[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(C),Object.keys(q).length===0&&f.delete(H)}n.remove(C)}function I(C){let y=n.get(C);s.deleteTexture(y.__webglTexture);let H=C.source,q=f.get(H);delete q[y.__cacheKey],o.memory.textures--}function D(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let K=0;K<y.__webglFramebuffer[q].length;K++)s.deleteFramebuffer(y.__webglFramebuffer[q][K]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=C.textures;for(let q=0,K=H.length;q<K;q++){let rt=n.get(H[q]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(C)}let L=0;function O(){L=0}function P(){return L}function F(C){L=C}function k(){let C=L;return C>=i.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function X(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Y(C,y){let H=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let q=C.image;if(q===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(H,C,y);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+y)}function z(C,y){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){St(H,C,y);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+y)}function $(C,y){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){St(H,C,y);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+y)}function Q(C,y){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){kt(H,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+y)}let yt={[as]:s.REPEAT,[Bn]:s.CLAMP_TO_EDGE,[ho]:s.MIRRORED_REPEAT},bt={[pe]:s.NEAREST,[Zh]:s.NEAREST_MIPMAP_NEAREST,[fr]:s.NEAREST_MIPMAP_LINEAR,[Be]:s.LINEAR,[qo]:s.LINEAR_MIPMAP_NEAREST,[_i]:s.LINEAR_MIPMAP_LINEAR},Xt={[jh]:s.NEVER,[iu]:s.ALWAYS,[Qh]:s.LESS,[Ia]:s.LEQUAL,[tu]:s.EQUAL,[Pa]:s.GEQUAL,[eu]:s.GREATER,[nu]:s.NOTEQUAL};function Ht(C,y){if(y.type===Sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Be||y.magFilter===qo||y.magFilter===fr||y.magFilter===_i||y.minFilter===Be||y.minFilter===qo||y.minFilter===fr||y.minFilter===_i)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,yt[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,yt[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,yt[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,bt[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,bt[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pe||y.minFilter!==fr&&y.minFilter!==_i||y.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Yt(C,y){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));let q=y.source,K=f.get(q);K===void 0&&(K={},f.set(q,K));let rt=X(y);if(rt!==C.__cacheKey){K[rt]===void 0&&(K[rt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[rt].usedTimes++;let at=K[C.__cacheKey];at!==void 0&&(K[C.__cacheKey].usedTimes--,at.usedTimes===0&&I(y)),C.__cacheKey=rt,C.__webglTexture=K[rt].texture}return H}function J(C,y,H){return Math.floor(Math.floor(C/H)/y)}function nt(C,y,H,q){let rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,H,q,y.data);else{rt.sort((Dt,dt)=>Dt.start-dt.start);let at=0;for(let Dt=1;Dt<rt.length;Dt++){let dt=rt[at],ct=rt[Dt],Nt=dt.start+dt.count,Ot=J(ct.start,y.width,4),qt=J(dt.start,y.width,4);ct.start<=Nt+1&&Ot===qt&&J(ct.start+ct.count-1,y.width,4)===Ot?dt.count=Math.max(dt.count,ct.start+ct.count-dt.start):(++at,rt[at]=ct)}rt.length=at+1;let j=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Dt=0,dt=rt.length;Dt<dt;Dt++){let ct=rt[Dt],Nt=Math.floor(ct.start/4),Ot=Math.ceil(ct.count/4),qt=Nt%y.width,U=Math.floor(Nt/y.width),ht=Ot,tt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,qt,U,ht,tt,H,q,y.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function St(C,y,H){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);let K=Yt(C,y),rt=y.source;e.bindTexture(q,C.__webglTexture,s.TEXTURE0+H);let at=n.get(rt);if(rt.version!==at.__version||K===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let tt=se.getPrimaries(se.workingColorSpace),ut=y.colorSpace===Dn?null:se.getPrimaries(y.colorSpace),gt=y.colorSpace===Dn||tt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let et=g(y.image,!1,i.maxTextureSize);et=je(y,et);let lt=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type),dt=v(y.internalFormat,lt,Dt,y.normalized,y.colorSpace,y.isVideoTexture);Ht(q,y);let ct,Nt=y.mipmaps,Ot=y.isVideoTexture!==!0,qt=at.__version===void 0||K===!0,U=rt.dataReady,ht=w(y,et);if(y.isDepthTexture)dt=S(y.format===yi,y.type),qt&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,dt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,dt,et.width,et.height,0,lt,Dt,null));else if(y.isDataTexture)if(Nt.length>0){Ot&&qt&&e.texStorage2D(s.TEXTURE_2D,ht,dt,Nt[0].width,Nt[0].height);for(let tt=0,ut=Nt.length;tt<ut;tt++)ct=Nt[tt],Ot?U&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,tt,dt,ct.width,ct.height,0,lt,Dt,ct.data);y.generateMipmaps=!1}else Ot?(qt&&e.texStorage2D(s.TEXTURE_2D,ht,dt,et.width,et.height),U&&nt(y,et,lt,Dt)):e.texImage2D(s.TEXTURE_2D,0,dt,et.width,et.height,0,lt,Dt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ot&&qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,dt,Nt[0].width,Nt[0].height,et.depth);for(let tt=0,ut=Nt.length;tt<ut;tt++)if(ct=Nt[tt],y.format!==fn)if(lt!==null)if(Ot){if(U)if(y.layerUpdates.size>0){let gt=oc(ct.width,ct.height,y.format,y.type);for(let it of y.layerUpdates){let Ut=ct.data.subarray(it*gt/ct.data.BYTES_PER_ELEMENT,(it+1)*gt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,it,ct.width,ct.height,1,lt,Ut)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,et.depth,lt,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,dt,ct.width,ct.height,et.depth,0,ct.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,et.depth,lt,Dt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,dt,ct.width,ct.height,et.depth,0,lt,Dt,ct.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ot&&qt&&e.texStorage2D(s.TEXTURE_2D,ht,dt,Nt[0].width,Nt[0].height);for(let tt=0,ut=Nt.length;tt<ut;tt++)ct=Nt[tt],y.format!==fn?lt!==null?Ot?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,dt,ct.width,ct.height,0,ct.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?U&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,Dt,ct.data):e.texImage2D(s.TEXTURE_2D,tt,dt,ct.width,ct.height,0,lt,Dt,ct.data)}else if(y.isDataArrayTexture)if(Ot){if(qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,dt,et.width,et.height,et.depth),U)if(y.layerUpdates.size>0){let tt=oc(et.width,et.height,y.format,y.type);for(let ut of y.layerUpdates){let gt=et.data.subarray(ut*tt/et.data.BYTES_PER_ELEMENT,(ut+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,et.width,et.height,1,lt,Dt,gt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,lt,Dt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,et.width,et.height,et.depth,0,lt,Dt,et.data);else if(y.isData3DTexture)Ot?(qt&&e.texStorage3D(s.TEXTURE_3D,ht,dt,et.width,et.height,et.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,lt,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,dt,et.width,et.height,et.depth,0,lt,Dt,et.data);else if(y.isFramebufferTexture){if(qt)if(Ot)e.texStorage2D(s.TEXTURE_2D,ht,dt,et.width,et.height);else{let tt=et.width,ut=et.height;for(let gt=0;gt<ht;gt++)e.texImage2D(s.TEXTURE_2D,gt,dt,tt,ut,0,lt,Dt,null),tt>>=1,ut>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let tt=s.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),d.add(y),tt.onpaint=ut=>{let gt=ut.changedElements;for(let it of d)gt.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{let gt=s.RGBA,it=s.RGBA,Ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,gt,it,Ut,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Ot&&qt){let tt=de(Nt[0]);e.texStorage2D(s.TEXTURE_2D,ht,dt,tt.width,tt.height)}for(let tt=0,ut=Nt.length;tt<ut;tt++)ct=Nt[tt],Ot?U&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,lt,Dt,ct):e.texImage2D(s.TEXTURE_2D,tt,dt,lt,Dt,ct);y.generateMipmaps=!1}else if(Ot){if(qt){let tt=de(et);e.texStorage2D(s.TEXTURE_2D,ht,dt,tt.width,tt.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,Dt,et)}else e.texImage2D(s.TEXTURE_2D,0,dt,lt,Dt,et);m(y)&&M(q),at.__version=rt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function kt(C,y,H){if(y.image.length!==6)return;let q=Yt(C,y),K=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);let rt=n.get(K);if(K.version!==rt.__version||q===!0){e.activeTexture(s.TEXTURE0+H);let at=se.getPrimaries(se.workingColorSpace),j=y.colorSpace===Dn?null:se.getPrimaries(y.colorSpace),et=y.colorSpace===Dn||at===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let lt=y.isCompressedTexture||y.image[0].isCompressedTexture,Dt=y.image[0]&&y.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!lt&&!Dt?dt[it]=g(y.image[it],!0,i.maxCubemapSize):dt[it]=Dt?y.image[it].image:y.image[it],dt[it]=je(y,dt[it]);let ct=dt[0],Nt=r.convert(y.format,y.colorSpace),Ot=r.convert(y.type),qt=v(y.internalFormat,Nt,Ot,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ht=rt.__version===void 0||q===!0,tt=K.dataReady,ut=w(y,ct);Ht(s.TEXTURE_CUBE_MAP,y);let gt;if(lt){U&&ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,qt,ct.width,ct.height);for(let it=0;it<6;it++){gt=dt[it].mipmaps;for(let Ut=0;Ut<gt.length;Ut++){let It=gt[Ut];y.format!==fn?Nt!==null?U?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,It.width,It.height,Nt,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,qt,It.width,It.height,0,It.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,0,0,It.width,It.height,Nt,Ot,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut,qt,It.width,It.height,0,Nt,Ot,It.data)}}}else{if(gt=y.mipmaps,U&&ht){gt.length>0&&ut++;let it=de(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,qt,it.width,it.height)}for(let it=0;it<6;it++)if(Dt){U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,Nt,Ot,dt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,dt[it].width,dt[it].height,0,Nt,Ot,dt[it].data);for(let Ut=0;Ut<gt.length;Ut++){let xe=gt[Ut].image[it].image;U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,xe.width,xe.height,Nt,Ot,xe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,qt,xe.width,xe.height,0,Nt,Ot,xe.data)}}else{U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Nt,Ot,dt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,qt,Nt,Ot,dt[it]);for(let Ut=0;Ut<gt.length;Ut++){let It=gt[Ut];U?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,0,0,Nt,Ot,It.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ut+1,qt,Nt,Ot,It.image[it])}}}m(y)&&M(s.TEXTURE_CUBE_MAP),rt.__version=K.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function wt(C,y,H,q,K,rt){let at=r.convert(H.format,H.colorSpace),j=r.convert(H.type),et=v(H.internalFormat,at,j,H.normalized,H.colorSpace),lt=n.get(y),Dt=n.get(H);if(Dt.__renderTarget=y,!lt.__hasExternalTextures){let dt=Math.max(1,y.width>>rt),ct=Math.max(1,y.height>>rt);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,rt,et,dt,ct,y.depth,0,at,j,null):e.texImage2D(K,rt,et,dt,ct,0,at,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),De(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,K,Dt.__webglTexture,0,Te(y)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,K,Dt.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(C,y,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){let q=y.depthTexture,K=q&&q.isDepthTexture?q.type:null,rt=S(y.stencilBuffer,K),at=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;De(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te(y),rt,y.width,y.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te(y),rt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,rt,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,C)}else{let q=y.textures;for(let K=0;K<q.length;K++){let rt=q[K],at=r.convert(rt.format,rt.colorSpace),j=r.convert(rt.type),et=v(rt.internalFormat,at,j,rt.normalized,rt.colorSpace);De(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te(y),et,y.width,y.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te(y),et,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,et,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(C,y,H){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,y.depthTexture);let lt=r.convert(y.depthTexture.format),Dt=r.convert(y.depthTexture.type),dt;y.depthTexture.format===On?dt=s.DEPTH_COMPONENT24:y.depthTexture.format===yi&&(dt=s.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,dt,y.width,y.height,0,lt,Dt,null)}}else Y(y.depthTexture,0);let rt=K.__webglTexture,at=Te(y),j=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,et=y.depthTexture.format===yi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===On)De(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,j,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,et,j,rt,0);else if(y.depthTexture.format===yi)De(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,j,rt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,et,j,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(C){let y=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)ke(y.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?ke(y.__webglFramebuffer[0],C,0):ke(y.__webglFramebuffer,C,0)}else if(H){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),Qt(y.__webglDepthbuffer[q],C,!1);else{let K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,rt)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Qt(y.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,rt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(C,y,H){let q=n.get(C);y!==void 0&&wt(q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&te(C)}function ge(C){let y=C.texture,H=n.get(C),q=n.get(y);C.addEventListener("dispose",x);let K=C.textures,rt=C.isWebGLCubeRenderTarget===!0,at=K.length>1;if(at||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,o.memory.textures++),rt){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let et=0;et<y.mipmaps.length;et++)H.__webglFramebuffer[j][et]=s.createFramebuffer()}else H.__webglFramebuffer[j]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)H.__webglFramebuffer[j]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(at)for(let j=0,et=K.length;j<et;j++){let lt=n.get(K[j]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&De(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let et=K[j];H.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let lt=r.convert(et.format,et.colorSpace),Dt=r.convert(et.type),dt=v(et.internalFormat,lt,Dt,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),ct=Te(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,dt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,H.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Qt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)wt(H.__webglFramebuffer[j][et],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,et);else wt(H.__webglFramebuffer[j],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(y)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let j=0,et=K.length;j<et;j++){let lt=K[j],Dt=n.get(lt),dt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Dt.__webglTexture),Ht(dt,lt),wt(H.__webglFramebuffer,C,lt,s.COLOR_ATTACHMENT0+j,dt,0),m(lt)&&M(dt)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,q.__webglTexture),Ht(j,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)wt(H.__webglFramebuffer[et],C,y,s.COLOR_ATTACHMENT0,j,et);else wt(H.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,j,0);m(y)&&M(j),e.unbindTexture()}C.depthBuffer&&te(C)}function ie(C){let y=C.textures;for(let H=0,q=y.length;H<q;H++){let K=y[H];if(m(K)){let rt=T(C),at=n.get(K).__webglTexture;e.bindTexture(rt,at),M(rt),e.unbindTexture()}}}let Se=[],Ve=[];function hn(C){if(C.samples>0){if(De(C)===!1){let y=C.textures,H=C.width,q=C.height,K=s.COLOR_BUFFER_BIT,rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(C),j=y.length>1;if(j)for(let lt=0;lt<y.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let et=C.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let lt=0;lt<y.length;lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);let Dt=n.get(y[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,H,q,0,0,H,q,K,s.NEAREST),l===!0&&(Se.length=0,Ve.length=0,Se.push(s.COLOR_ATTACHMENT0+lt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Se.push(rt),Ve.push(rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let lt=0;lt<y.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);let Dt=n.get(y[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Te(C){return Math.min(i.maxSamples,C.samples)}function De(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function je(C,y){let H=C.colorSpace,q=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Pi&&H!==Dn&&(se.getTransfer(H)===he?(q!==fn||K!==dn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",H)),y}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=oe,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=hn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function xx(s,t){function e(n,i=Dn){let r,o=se.getTransfer(i);if(n===dn)return s.UNSIGNED_BYTE;if(n===Zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xl)return s.BYTE;if(n===ql)return s.SHORT;if(n===vs)return s.UNSIGNED_SHORT;if(n===Yo)return s.INT;if(n===xn)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===Jl)return s.ALPHA;if(n===$l)return s.RGB;if(n===fn)return s.RGBA;if(n===On)return s.DEPTH_COMPONENT;if(n===yi)return s.DEPTH_STENCIL;if(n===$o)return s.RED;if(n===Ko)return s.RED_INTEGER;if(n===vi)return s.RG;if(n===jo)return s.RG_INTEGER;if(n===Qo)return s.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===xr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sa||n===ra||n===oa||n===aa||n===la||n===_r||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sa||n===ra)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===aa)return r.COMPRESSED_R11_EAC;if(n===la)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===ca)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===xa||n===_a||n===ya||n===va||n===Ma||n===ba||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Ea||n===Ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wa)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===Ra||n===yr||n===Ca)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ie({vertexShader:_x,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends zn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Ec,m={},M=e.getContextAttributes(),T=null,v=null,S=[],w=[],R=new vt,x=null,E=null,I=new an;I.viewport=new we;let D=new an;D.viewport=new we;let L=[I,D],O=new ko,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=S[J];return nt===void 0&&(nt=new ds,S[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=S[J];return nt===void 0&&(nt=new ds,S[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=S[J];return nt===void 0&&(nt=new ds,S[J]=nt),nt.getHandSpace()};function k(J){let nt=w.indexOf(J.inputSource);if(nt===-1)return;let St=S[nt];St!==void 0&&(St.update(J.inputSource,J.frame,c||o),St.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Y);for(let J=0;J<S.length;J++){let nt=w[J];nt!==null&&(w[J]=null,S[J].disconnect(nt))}P=null,F=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(T),f=null,u=null,d=null,i=null,v=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,kt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=M.stencil?yi:On,kt=M.stencil?Ms:xn);let Qt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Qt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new qe(u.textureWidth,u.textureHeight,{format:fn,type:dn,depthTexture:new Gn(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new qe(f.framebufferWidth,f.framebufferHeight,{format:fn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(J){for(let nt=0;nt<J.removed.length;nt++){let St=J.removed[nt],kt=w.indexOf(St);kt>=0&&(w[kt]=null,S[kt].disconnect(St))}for(let nt=0;nt<J.added.length;nt++){let St=J.added[nt],kt=w.indexOf(St);if(kt===-1){for(let Qt=0;Qt<S.length;Qt++)if(Qt>=w.length){w.push(St),kt=Qt;break}else if(w[Qt]===null){w[Qt]=St,kt=Qt;break}if(kt===-1)break}let wt=S[kt];wt&&wt.connect(St)}}let z=new A,$=new A;function Q(J,nt,St){z.setFromMatrixPosition(nt.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);let kt=z.distanceTo($),wt=nt.projectionMatrix.elements,Qt=St.projectionMatrix.elements,ke=wt[14]/(wt[10]-1),te=wt[14]/(wt[10]+1),oe=(wt[9]+1)/wt[5],ge=(wt[9]-1)/wt[5],ie=(wt[8]-1)/wt[0],Se=(Qt[8]+1)/Qt[0],Ve=ke*ie,hn=ke*Se,Te=kt/(-ie+Se),De=Te*-ie;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(De),J.translateZ(Te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let B=ke+Te,je=te+Te,de=Ve-De,C=hn+(kt-De),y=oe*te/je*B,H=ge*te/je*B;J.projectionMatrix.makePerspective(de,C,y,H,B,je),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function yt(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,St=J.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(St=g.depthFar)),O.near=D.near=I.near=nt,O.far=D.far=I.far=St,(P!==O.near||F!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,F=O.far),O.layers.mask=J.layers.mask|6,I.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let kt=J.parent,wt=O.cameras;yt(O,kt);for(let Qt=0;Qt<wt.length;Qt++)yt(wt[Qt],kt);wt.length===2?Q(O,I,D):O.projectionMatrix.copy(I.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),bt(J,O,kt)};function bt(J,nt,St){St===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(J){return m[J]};let Xt=null;function Ht(J,nt){if(h=nt.getViewerPose(c||o),p=nt,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let kt=!1;St.length!==O.cameras.length&&(O.cameras.length=0,kt=!0);for(let te=0;te<St.length;te++){let oe=St[te],ge=null;if(f!==null)ge=f.getViewport(oe);else{let Se=d.getViewSubImage(u,oe);ge=Se.viewport,te===0&&(t.setRenderTargetTextures(v,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(v))}let ie=L[te];ie===void 0&&(ie=new an,ie.layers.enable(te),ie.viewport=new we,L[te]=ie),ie.matrix.fromArray(oe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(oe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ge.x,ge.y,ge.width,ge.height),te===0&&(O.matrix.copy(ie.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),kt===!0&&O.cameras.push(ie)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let te=d.getDepthInformation(St[0]);te&&te.isValid&&te.texture&&g.init(te,i.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let te=0;te<St.length;te++){let oe=St[te].camera;if(oe){let ge=m[oe];ge||(ge=new Qs,m[oe]=ge);let ie=d.getCameraImage(oe);ge.sourceTexture=ie}}}}for(let St=0;St<S.length;St++){let kt=w[St],wt=S[St];kt!==null&&wt!==void 0&&wt.update(kt,nt,c||o)}Xt&&Xt(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),p=null}let Yt=new Nu;Yt.setAnimationLoop(Ht),this.setAnimationLoop=function(J){Xt=J},this.dispose=function(){}}},vx=new jt,ku=new Wt;ku.set(-1,0,0,0,1,0,0,0,1);function Mx(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ic(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,T,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===cn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===cn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),T=M.envMap,v=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ku),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=T*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let w=S.program;n.uniformBlockBinding(v,w)}function c(v,S){let w=i[v.id];w===void 0&&(g(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",M));let R=S.program;n.updateUBOMapping(v,R);let x=t.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let S=d();v.__bindingPointIndex=S;let w=s.createBuffer(),R=v.__size,x=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,R,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,w),w}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],w=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let x=0,E=w.length;x<E;x++){let I=w[x];if(Array.isArray(I))for(let D=0,L=I.length;D<L;D++)f(I[D],x,D,R);else f(I,x,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,S,w,R){if(_(v,S,w,R)===!0){let x=v.__offset,E=v.value;if(Array.isArray(E)){let I=0;for(let D=0;D<E.length;D++){let L=E[D],O=m(L);p(L,v.__data,I),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(I+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,v.__data)}}function p(v,S,w){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,w)}function _(v,S,w,R){let x=v.value,E=S+"_"+w;if(R[E]===void 0)return typeof x=="number"||typeof x=="boolean"?R[E]=x:ArrayBuffer.isView(x)?R[E]=x.slice():R[E]=x.clone(),!0;{let I=R[E];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return R[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function g(v){let S=v.uniforms,w=0,R=16;for(let E=0,I=S.length;E<I;E++){let D=Array.isArray(S[E])?S[E]:[S[E]];for(let L=0,O=D.length;L<O;L++){let P=D[L],F=Array.isArray(P.value)?P.value:[P.value];for(let k=0,X=F.length;k<X;k++){let Y=F[k],z=m(Y),$=w%R,Q=$%z.boundary,yt=$+Q;w+=Q,yt!==0&&R-yt<z.storage&&(w+=R-yt),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=z.storage}}}let x=w%R;return x>0&&(w+=R-x),v.__size=w,v.__cache={},this}function m(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){let S=v.target;S.removeEventListener("dispose",M);let w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function T(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:T}}var Sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function wx(){return Wn===null&&(Wn=new Di(Sx,16,16,vi,_n),Wn.name="DFG_LUT",Wn.minFilter=Be,Wn.magFilter=Be,Wn.wrapS=Bn,Wn.wrapT=Bn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var Fa=class{constructor(t={}){let{canvas:e=ru(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,g=new Set([Qo,jo,Ko]),m=new Set([dn,xn,vs,Ms,Zo,Jo]),M=new Uint32Array(4),T=new Int32Array(4),v=new A,S=null,w=null,R=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,L=null,O=null,P=null,F=null;this._outputColorSpace=on;let k=0,X=0,Y=null,z=-1,$=null,Q=new we,yt=new we,bt=null,Xt=new xt(0),Ht=0,Yt=e.width,J=e.height,nt=1,St=null,kt=null,wt=new we(0,0,Yt,J),Qt=new we(0,0,Yt,J),ke=!1,te=new ps,oe=!1,ge=!1,ie=new jt,Se=new A,Ve=new we,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function De(){return Y===null?nt:1}let B=n;function je(b,N){return e.getContext(b,N)}let de,C,y,H,q,K,rt,at,j,et,lt,Dt,dt,ct,Nt,Ot,qt,U,ht,tt,ut,gt,it;try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",En,!1),B===null){let N="webgl2";if(B=je(N,b),B===null)throw je(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(b){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Gt("WebGLRenderer: "+b.message),b}function Ut(){de=new P0(B),de.init(),ut=new xx(B,de),C=new M0(B,de,t,ut),y=new mx(B,de),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),O=B.createFramebuffer(),P=B.createFramebuffer(),F=B.createFramebuffer(),H=new N0(B),q=new ex,K=new gx(B,de,y,q,C,ut,H),rt=new I0(I),at=new Ff(B),gt=new y0(B,at),j=new L0(B,at,H,gt),et=new F0(B,j,at,gt,H),U=new U0(B,C,K),Nt=new b0(q),lt=new tx(I,rt,de,C,gt,Nt),Dt=new Mx(I,q),dt=new ix,ct=new cx(de),qt=new _0(I,rt,y,et,p,l),Ot=new px(I,et,C),it=new bx(B,H,C,y),ht=new v0(B,de,H),tt=new D0(B,de,H),H.programs=lt.programs,I.capabilities=C,I.extensions=de,I.properties=q,I.renderLists=dt,I.shadowMap=Ot,I.state=y,I.info=H}_!==dn&&(E=new O0(_,e.width,e.height,a,i,r));let It=new Tc(I,B);this.xr=It,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){b!==void 0&&(nt=b,this.setSize(Yt,J,!1))},this.getSize=function(b){return b.set(Yt,J)},this.setSize=function(b,N,Z=!0){if(It.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Yt=b,J=N,e.width=Math.floor(b*nt),e.height=Math.floor(N*nt),Z===!0&&(e.style.width=b+"px",e.style.height=N+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Yt*nt,J*nt).floor()},this.setDrawingBufferSize=function(b,N,Z){Yt=b,J=N,nt=Z,e.width=Math.floor(b*Z),e.height=Math.floor(N*Z),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(_===dn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,N,Z,V){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,N,Z,V),y.viewport(Q.copy(wt).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy(Qt)},this.setScissor=function(b,N,Z,V){b.isVector4?Qt.set(b.x,b.y,b.z,b.w):Qt.set(b,N,Z,V),y.scissor(yt.copy(Qt).multiplyScalar(nt).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(b){y.setScissorTest(ke=b)},this.setOpaqueSort=function(b){St=b},this.setTransparentSort=function(b){kt=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,Z=!0){let V=0;if(b){let W=!1;if(Y!==null){let mt=Y.texture.format;W=g.has(mt)}if(W){let mt=Y.texture.type,Et=m.has(mt),pt=qt.getClearColor(),At=qt.getClearAlpha(),Lt=pt.r,Zt=pt.g,ee=pt.b;Et?(M[0]=Lt,M[1]=Zt,M[2]=ee,M[3]=At,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=Lt,T[1]=Zt,T[2]=ee,T[3]=At,B.clearBufferiv(B.COLOR,0,T))}else V|=B.COLOR_BUFFER_BIT}N&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",En,!1),qt.dispose(),dt.dispose(),ct.dispose(),q.dispose(),rt.dispose(),et.dispose(),gt.dispose(),it.dispose(),lt.dispose(),It.dispose(),It.removeEventListener("sessionstart",Vc),It.removeEventListener("sessionend",Wc),Ei.stop()};function xe(b){b.preventDefault(),Ql("WebGLRenderer: Context Lost."),D=!0}function le(){Ql("WebGLRenderer: Context Restored."),D=!1;let b=H.autoReset,N=Ot.enabled,Z=Ot.autoUpdate,V=Ot.needsUpdate,W=Ot.type;Ut(),H.autoReset=b,Ot.enabled=N,Ot.autoUpdate=Z,Ot.needsUpdate=V,Ot.type=W}function En(b){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Nn(b){let N=b.target;N.removeEventListener("dispose",Nn),xd(N)}function xd(b){_d(b),q.remove(b)}function _d(b){let N=q.get(b).programs;N!==void 0&&(N.forEach(function(Z){lt.releaseProgram(Z)}),b.isShaderMaterial&&lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,Z,V,W,mt){N===null&&(N=hn);let Et=W.isMesh&&W.matrixWorld.determinantAffine()<0,pt=Md(b,N,Z,V,W);y.setMaterial(V,Et);let At=Z.index,Lt=1;if(V.wireframe===!0){if(At=j.getWireframeAttribute(Z),At===void 0)return;Lt=2}let Zt=Z.drawRange,ee=Z.attributes.position,Rt=Zt.start*Lt,ce=(Zt.start+Zt.count)*Lt;mt!==null&&(Rt=Math.max(Rt,mt.start*Lt),ce=Math.min(ce,(mt.start+mt.count)*Lt)),At!==null?(Rt=Math.max(Rt,0),ce=Math.min(ce,At.count)):ee!=null&&(Rt=Math.max(Rt,0),ce=Math.min(ce,ee.count));let Ne=ce-Rt;if(Ne<0||Ne===1/0)return;gt.setup(W,V,pt,Z,At);let Me,me=ht;if(At!==null&&(Me=at.get(At),me=tt,me.setIndex(Me)),W.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*De()),me.setMode(B.LINES)):me.setMode(B.TRIANGLES);else if(W.isLine){let Qe=V.linewidth;Qe===void 0&&(Qe=1),y.setLineWidth(Qe*De()),W.isLineSegments?me.setMode(B.LINES):W.isLineLoop?me.setMode(B.LINE_LOOP):me.setMode(B.LINE_STRIP)}else W.isPoints?me.setMode(B.POINTS):W.isSprite&&me.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(de.get("WEBGL_multi_draw"))me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Qe=W._multiDrawStarts,Mt=W._multiDrawCounts,sn=W._multiDrawCount,re=At?at.get(At).bytesPerElement:1,vn=q.get(V).currentProgram.getUniforms();for(let Un=0;Un<sn;Un++)vn.setValue(B,"_gl_DrawID",Un),me.render(Qe[Un]/re,Mt[Un])}else if(W.isInstancedMesh)me.renderInstances(Rt,Ne,W.count);else if(Z.isInstancedBufferGeometry){let Qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Mt=Math.min(Z.instanceCount,Qe);me.renderInstances(Rt,Ne,Mt)}else me.render(Rt,Ne)};function Gc(b,N,Z,V){L!==null&&b.isNodeMaterial&&L.setObject(V,b),oe===!0&&Nt.setState(b,Z,!1),b.transparent===!0&&b.side===ve&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,Lr(b,N,V),b.side=gi,b.needsUpdate=!0,Lr(b,N,V),b.side=ve):Lr(b,N,V)}this.compile=function(b,N,Z=null){Z===null&&(Z=b),L!==null&&L.renderStart(b,N,Z),w=ct.get(Z),w.init(N),x.push(w),Z.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),b!==Z&&b.traverseVisible(function(W){W.isLight&&W.layers.test(N.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),ge=this.localClippingEnabled,oe=Nt.init(this.clippingPlanes,ge),oe===!0&&Nt.setGlobalState(this.clippingPlanes,N),L!==null&&Ot.render(w.state.shadowsArray,Z,N);let V=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let mt=W.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let pt=mt[Et];Gc(pt,Z,N,W),V.add(pt)}else Gc(mt,Z,N,W),V.add(mt)}),w=x.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(b,N,Z=null){let V=this.compile(b,N,Z);return new Promise(W=>{function mt(){if(V.forEach(function(Et){let At=q.get(Et).currentProgram;(At===void 0||At.isReady())&&V.delete(Et)}),V.size===0){W(b);return}setTimeout(mt,10)}de.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ka=null;function yd(b){Ka&&Ka(b)}function Vc(){Ei.stop()}function Wc(){Ei.start()}let Ei=new Nu;Ei.setAnimationLoop(yd),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(b){Ka=b,It.setAnimationLoop(b),b===null?Ei.stop():Ei.start()},It.addEventListener("sessionstart",Vc),It.addEventListener("sessionend",Wc),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(b,N);let Z=It.enabled===!0&&It.isPresenting===!0,V=E!==null&&(Y===null||Z)&&E.begin(I,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(N),N=It.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,N,Y),w=ct.get(b,x.length),w.init(N),w.state.textureUnits=K.getTextureUnits(),x.push(w),ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),te.setFromProjectionMatrix(ie,In,N.reversedDepth),ge=this.localClippingEnabled,oe=Nt.init(this.clippingPlanes,ge),S=dt.get(b,R.length),S.init(),R.push(S),It.enabled===!0&&It.isPresenting===!0){let Et=I.xr.getDepthSensingMesh();Et!==null&&ja(Et,N,-1/0,I.sortObjects)}ja(b,N,0,I.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),I.sortObjects===!0&&S.sort(St,kt),Te=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Te&&qt.addToRenderList(S,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Nt.beginShadows();let W=w.state.shadowsArray;if(Ot.render(W,b,N),oe===!0&&Nt.endShadows(),(V&&E.hasRenderPass())===!1){let Et=S.opaque,pt=S.transmissive;if(w.setupLights(),N.isArrayCamera){let At=N.cameras;if(pt.length>0)for(let Lt=0,Zt=At.length;Lt<Zt;Lt++){let ee=At[Lt];qc(Et,pt,b,ee)}Te&&qt.render(b);for(let Lt=0,Zt=At.length;Lt<Zt;Lt++){let ee=At[Lt];Xc(S,b,ee,ee.viewport)}}else pt.length>0&&qc(Et,pt,b,N),Te&&qt.render(b),Xc(S,b,N)}Y!==null&&X===0&&(K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y)),V&&E.end(I),b.isScene===!0&&b.onAfterRender(I,b,N),gt.resetDefaultState(),z=-1,$=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),oe===!0&&Nt.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,L!==null&&L.renderEnd()};function ja(b,N,Z,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(te)){V&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ie);let Et=et.update(b),pt=b.material;pt.visible&&S.push(b,Et,pt,Z,Ve.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(te))){let Et=et.update(b),pt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ve.copy(Et.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(ie)),Array.isArray(pt)){let At=Et.groups;for(let Lt=0,Zt=At.length;Lt<Zt;Lt++){let ee=At[Lt],Rt=pt[ee.materialIndex];Rt&&Rt.visible&&S.push(b,Et,Rt,Z,Ve.z,ee,N)}}else pt.visible&&S.push(b,Et,pt,Z,Ve.z,null,N)}}let mt=b.children;for(let Et=0,pt=mt.length;Et<pt;Et++)ja(mt[Et],N,Z,V)}function Xc(b,N,Z,V){let{opaque:W,transmissive:mt,transparent:Et}=b;w.setupLightsView(Z),oe===!0&&Nt.setGlobalState(I.clippingPlanes,Z),V&&y.viewport(Q.copy(V)),W.length>0&&Pr(W,N,Z),mt.length>0&&Pr(mt,N,Z),Et.length>0&&Pr(Et,N,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function qc(b,N,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Rt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new qe(1,1,{generateMipmaps:!0,type:Rt?_n:dn,minFilter:_i,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let mt=w.state.transmissionRenderTarget[V.id],Et=V.viewport||Q;mt.setSize(Et.z*I.transmissionResolutionScale,Et.w*I.transmissionResolutionScale);let pt=I.getRenderTarget(),At=I.getActiveCubeFace(),Lt=I.getActiveMipmapLevel();I.setRenderTarget(mt),I.getClearColor(Xt),Ht=I.getClearAlpha(),Ht<1&&I.setClearColor(16777215,.5),I.clear(),Te&&qt.render(Z);let Zt=I.toneMapping;I.toneMapping=Ln;let ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),oe===!0&&Nt.setGlobalState(I.clippingPlanes,V),Pr(b,Z,V),K.updateMultisampleRenderTarget(mt),K.updateRenderTargetMipmap(mt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ce=0,Ne=N.length;ce<Ne;ce++){let Me=N[ce],{object:me,geometry:Qe,material:Mt,group:sn}=Me;if(Mt.side===ve&&me.layers.test(V.layers)){let re=Mt.side;Mt.side=cn,Mt.needsUpdate=!0,Yc(me,Z,V,Qe,Mt,sn),Mt.side=re,Mt.needsUpdate=!0,Rt=!0}}Rt===!0&&(K.updateMultisampleRenderTarget(mt),K.updateRenderTargetMipmap(mt))}I.setRenderTarget(pt,At,Lt),I.setClearColor(Xt,Ht),ee!==void 0&&(V.viewport=ee),I.toneMapping=Zt}function Pr(b,N,Z){let V=N.isScene===!0?N.overrideMaterial:null;for(let W=0,mt=b.length;W<mt;W++){let Et=b[W],{object:pt,geometry:At,group:Lt}=Et,Zt=Et.material;Zt.allowOverride===!0&&V!==null&&(Zt=V),pt.layers.test(Z.layers)&&Yc(pt,N,Z,At,Zt,Lt)}}function Yc(b,N,Z,V,W,mt){L!==null&&W.isNodeMaterial&&L.setObject(b,W),b.onBeforeRender(I,N,Z,V,W,mt),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(I,N,Z,V,b,mt),W.transparent===!0&&W.side===ve&&W.forceSinglePass===!1?(W.side=cn,W.needsUpdate=!0,I.renderBufferDirect(Z,N,V,W,b,mt),W.side=gi,W.needsUpdate=!0,I.renderBufferDirect(Z,N,V,W,b,mt),W.side=ve):I.renderBufferDirect(Z,N,V,W,b,mt),b.onAfterRender(I,N,Z,V,W,mt)}function Lr(b,N,Z){N.isScene!==!0&&(N=hn);let V=q.get(b),W=w.state.lights,mt=w.state.shadowsArray,Et=W.state.version,pt=lt.getParameters(b,W.state,mt,N,Z,w.state.lightProbeGridArray),At=lt.getProgramCacheKey(pt),Lt=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let Zt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=rt.get(b.envMap||V.environment,Zt),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",Nn),Lt=new Map,V.programs=Lt);let ee=Lt.get(At);if(ee!==void 0){if(V.currentProgram===ee&&V.lightsStateVersion===Et)return Jc(b,pt),ee}else pt.uniforms=lt.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,Z,pt),b.onBeforeCompile(pt,I),ee=lt.acquireProgram(pt,At),Lt.set(At,ee),V.uniforms=pt.uniforms;let Rt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Nt.uniform),Jc(b,pt),V.needsLights=Sd(b),V.lightsStateVersion=Et,V.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.sunLights.value=W.state.sun,Rt.sunLightShadows.value=W.state.sunShadow,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.sunShadowMatrix.value=W.state.sunShadowMatrix,Rt.sunShadowCascade.value=W.state.sunShadowCascade,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=ee,V.uniformsList=null,ee}function Zc(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Ts.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Jc(b,N){let Z=q.get(b);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function vd(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let Z=0,V=b.length;Z<V;Z++){let W=b[Z];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Md(b,N,Z,V,W){N.isScene!==!0&&(N=hn),K.resetTextureUnits();let mt=N.fog,Et=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,pt=Y===null?I.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:se.workingColorSpace,At=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Lt=rt.get(V.envMap||Et,At),Zt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ee=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!Z.morphAttributes.position,ce=!!Z.morphAttributes.normal,Ne=!!Z.morphAttributes.color,Me=Ln;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Me=I.toneMapping);let me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qe=me!==void 0?me.length:0,Mt=q.get(V),sn=w.state.lights;if(oe===!0&&(ge===!0||b!==$)){let _e=b===$&&V.id===z;Nt.setState(V,b,_e)}let re=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==sn.state.version||Mt.outputColorSpace!==pt||W.isBatchedMesh&&Mt.batching===!1||!W.isBatchedMesh&&Mt.batching===!0||W.isBatchedMesh&&Mt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Mt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Mt.instancing===!1||!W.isInstancedMesh&&Mt.instancing===!0||W.isSkinnedMesh&&Mt.skinning===!1||!W.isSkinnedMesh&&Mt.skinning===!0||W.isInstancedMesh&&Mt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Mt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Mt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Mt.instancingMorph===!1&&W.morphTexture!==null||Mt.envMap!==Lt||V.fog===!0&&Mt.fog!==mt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Nt.numPlanes||Mt.numIntersection!==Nt.numIntersection)||Mt.vertexAlphas!==Zt||Mt.vertexTangents!==ee||Mt.morphTargets!==Rt||Mt.morphNormals!==ce||Mt.morphColors!==Ne||Mt.toneMapping!==Me||Mt.morphTargetsCount!==Qe||!!Mt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Mt.__version=V.version);let vn=Mt.currentProgram;re===!0&&(vn=Lr(V,N,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,vn,Mt));let Un=!1,ni=!1,Gi=!1,fe=vn.getUniforms(),Le=Mt.uniforms;if(y.useProgram(vn.program)&&(Un=!0,ni=!0,Gi=!0),V.id!==z&&(z=V.id,ni=!0),Mt.needsLights){let _e=vd(w.state.lightProbeGridArray,W);Mt.lightProbeGrid!==_e&&(Mt.lightProbeGrid=_e,ni=!0)}if(Un||$!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(B,"projectionMatrix",b.projectionMatrix),fe.setValue(B,"viewMatrix",b.matrixWorldInverse);let si=fe.map.cameraPosition;si!==void 0&&si.setValue(B,Se.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&fe.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&fe.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,ni=!0,Gi=!0)}if(Mt.needsLights&&(sn.state.sunShadowMap.length>0&&fe.setValue(B,"sunShadowMap",sn.state.sunShadowMap,K),sn.state.directionalShadowMap.length>0&&fe.setValue(B,"directionalShadowMap",sn.state.directionalShadowMap,K),sn.state.spotShadowMap.length>0&&fe.setValue(B,"spotShadowMap",sn.state.spotShadowMap,K),sn.state.pointShadowMap.length>0&&fe.setValue(B,"pointShadowMap",sn.state.pointShadowMap,K)),W.isSkinnedMesh){fe.setOptional(B,W,"bindMatrix"),fe.setOptional(B,W,"bindMatrixInverse");let _e=W.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),fe.setValue(B,"boneTexture",_e.boneTexture,K))}W.isBatchedMesh&&(fe.setOptional(B,W,"batchingTexture"),fe.setValue(B,"batchingTexture",W._matricesTexture,K),fe.setOptional(B,W,"batchingIdTexture"),fe.setValue(B,"batchingIdTexture",W._indirectTexture,K),fe.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&fe.setValue(B,"batchingColorTexture",W._colorsTexture,K));let ii=Z.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&U.update(W,Z,vn),(ni||Mt.receiveShadow!==W.receiveShadow)&&(Mt.receiveShadow=W.receiveShadow,fe.setValue(B,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Le.envMapIntensity.value=N.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=wx()),ni){if(fe.setValue(B,"toneMappingExposure",I.toneMappingExposure),Mt.needsLights&&bd(Le,Gi),mt&&V.fog===!0&&Dt.refreshFogUniforms(Le,mt),Dt.refreshMaterialUniforms(Le,V,nt,J,w.state.transmissionRenderTarget[b.id]),Mt.needsLights&&Mt.lightProbeGrid){let _e=Mt.lightProbeGrid;Le.probesSH.value=_e.texture,Le.probesMin.value.copy(_e.boundingBox.min),Le.probesMax.value.copy(_e.boundingBox.max),Le.probesResolution.value.copy(_e.resolution)}Ts.upload(B,Zc(Mt),Le,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ts.upload(B,Zc(Mt),Le,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&fe.setValue(B,"center",W.center),fe.setValue(B,"modelViewMatrix",W.modelViewMatrix),fe.setValue(B,"normalMatrix",W.normalMatrix),fe.setValue(B,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let _e=V.uniformsGroups;for(let si=0,Vi=_e.length;si<Vi;si++){let Kc=_e[si];it.update(Kc,vn),it.bind(Kc,vn)}}return vn}function bd(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Sd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,N,Z){let V=q.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(b.texture).__webglTexture=N,q.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let Z=q.get(b);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,Z=0){Y=b,k=N,X=Z;let V=null,W=!1,mt=!1;if(b){let pt=q.get(b);if(pt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,pt.__webglFramebuffer),Q.copy(b.viewport),yt.copy(b.scissor),bt=b.scissorTest,y.viewport(Q),y.scissor(yt),y.setScissorTest(bt),z=-1;return}else if(pt.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(pt.__hasExternalTextures)K.rebindTextures(b,q.get(b.texture).__webglTexture,q.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Zt=b.depthTexture;if(pt.__boundDepthTexture!==Zt){if(Zt!==null&&q.has(Zt)&&(b.width!==Zt.image.width||b.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(mt=!0);let Lt=q.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?V=Lt[N][Z]:V=Lt[N],W=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?V=q.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?V=Lt[Z]:V=Lt,Q.copy(b.viewport),yt.copy(b.scissor),bt=b.scissorTest}else Q.copy(wt).multiplyScalar(nt).floor(),yt.copy(Qt).multiplyScalar(nt).floor(),bt=ke;if(Z!==0&&(V=O),y.bindFramebuffer(B.FRAMEBUFFER,V)&&y.drawBuffers(b,V),y.viewport(Q),y.scissor(yt),y.setScissorTest(bt),W){let pt=q.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,pt.__webglTexture,Z)}else if(mt){let pt=N;for(let At=0;At<b.textures.length;At++){let Lt=q.get(b.textures[At]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+At,Lt.__webglTexture,Z,pt)}}else if(b!==null&&Z!==0){let pt=q.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pt.__webglTexture,Z)}z=-1};function $c(b){let N=q.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=C.textureFormatReadable(b.format),N.__typeReadable=C.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,Z,V,W,mt,Et,pt=0){if(!(b&&b.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){y.bindFramebuffer(B.FRAMEBUFFER,At);try{let Lt=b.textures[pt],Zt=Lt.format,ee=Lt.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pt);let Rt=$c(Lt);if(Rt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&Z>=0&&Z<=b.height-W&&B.readPixels(N,Z,V,W,ut.convert(Zt),ut.convert(ee),mt)}finally{let Lt=Y!==null?q.get(Y).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,N,Z,V,W,mt,Et,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=q.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(N>=0&&N<=b.width-V&&Z>=0&&Z<=b.height-W){y.bindFramebuffer(B.FRAMEBUFFER,At);let Lt=b.textures[pt],Zt=Lt.format,ee=Lt.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pt);let Rt=$c(Lt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.bufferData(B.PIXEL_PACK_BUFFER,mt.byteLength,B.STREAM_READ),B.readPixels(N,Z,V,W,ut.convert(Zt),ut.convert(ee),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Ne=Y!==null?q.get(Y).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Ne);let Me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await au(B,Me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,mt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ce),B.deleteSync(Me),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,Z=0){let V=Math.pow(2,-Z),W=Math.floor(b.image.width*V),mt=Math.floor(b.image.height*V),Et=N!==null?N.x:0,pt=N!==null?N.y:0;K.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Et,pt,W,mt),y.unbindTexture()},this.copyTextureToTexture=function(b,N,Z=null,V=null,W=0,mt=0){let Et,pt,At,Lt,Zt,ee,Rt,ce,Ne,Me=b.isCompressedTexture?b.mipmaps[mt]:b.image;if(Z!==null)Et=Z.max.x-Z.min.x,pt=Z.max.y-Z.min.y,At=Z.isBox3?Z.max.z-Z.min.z:1,Lt=Z.min.x,Zt=Z.min.y,ee=Z.isBox3?Z.min.z:0;else{let Le=Math.pow(2,-W);Et=Math.floor(Me.width*Le),pt=Math.floor(Me.height*Le),b.isDataArrayTexture?At=Me.depth:b.isData3DTexture?At=Math.floor(Me.depth*Le):At=1,Lt=0,Zt=0,ee=0}V!==null?(Rt=V.x,ce=V.y,Ne=V.z):(Rt=0,ce=0,Ne=0);let me=ut.convert(N.format),Qe=ut.convert(N.type),Mt;N.isData3DTexture?(K.setTexture3D(N,0),Mt=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(K.setTexture2DArray(N,0),Mt=B.TEXTURE_2D_ARRAY):(K.setTexture2D(N,0),Mt=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let sn=y.getParameter(B.UNPACK_ROW_LENGTH),re=y.getParameter(B.UNPACK_IMAGE_HEIGHT),vn=y.getParameter(B.UNPACK_SKIP_PIXELS),Un=y.getParameter(B.UNPACK_SKIP_ROWS),ni=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Me.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Me.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Lt),y.pixelStorei(B.UNPACK_SKIP_ROWS,Zt),y.pixelStorei(B.UNPACK_SKIP_IMAGES,ee);let Gi=b.isDataArrayTexture||b.isData3DTexture,fe=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let Le=q.get(b),ii=q.get(N),_e=q.get(Le.__renderTarget),si=q.get(ii.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,_e.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Vi=0;Vi<At;Vi++)Gi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(b).__webglTexture,W,ee+Vi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(N).__webglTexture,mt,Ne+Vi)),B.blitFramebuffer(Lt,Zt,Et,pt,Rt,ce,Et,pt,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||q.has(b)){let Le=q.get(b),ii=q.get(N);y.bindFramebuffer(B.READ_FRAMEBUFFER,P),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let _e=0;_e<At;_e++)Gi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.__webglTexture,W,ee+_e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Le.__webglTexture,W),fe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ii.__webglTexture,mt,Ne+_e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ii.__webglTexture,mt),W!==0?B.blitFramebuffer(Lt,Zt,Et,pt,Rt,ce,Et,pt,B.COLOR_BUFFER_BIT,B.NEAREST):fe?B.copyTexSubImage3D(Mt,mt,Rt,ce,Ne+_e,Lt,Zt,Et,pt):B.copyTexSubImage2D(Mt,mt,Rt,ce,Lt,Zt,Et,pt);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else fe?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Mt,mt,Rt,ce,Ne,Et,pt,At,me,Qe,Me.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(Mt,mt,Rt,ce,Ne,Et,pt,At,me,Me.data):B.texSubImage3D(Mt,mt,Rt,ce,Ne,Et,pt,At,me,Qe,Me):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,mt,Rt,ce,Et,pt,me,Qe,Me.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,mt,Rt,ce,Me.width,Me.height,me,Me.data):B.texSubImage2D(B.TEXTURE_2D,mt,Rt,ce,Et,pt,me,Qe,Me);y.pixelStorei(B.UNPACK_ROW_LENGTH,sn),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,re),y.pixelStorei(B.UNPACK_SKIP_PIXELS,vn),y.pixelStorei(B.UNPACK_SKIP_ROWS,Un),y.pixelStorei(B.UNPACK_SKIP_IMAGES,ni),mt===0&&N.generateMipmaps&&B.generateMipmap(Mt),y.unbindTexture()},this.initRenderTarget=function(b){q.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){k=0,X=0,Y=null,y.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Ce=(s,t,e)=>s<t?t:s>e?e:s,Ct=(s,t,e)=>s+(t-s)*e,ki=(s,t,e,n)=>Ct(s,t,1-Math.exp(-e*n)),Rs=s=>s*s*(3-2*s),G=(s=0,t=1)=>s+Math.random()*(t-s);function ze(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Mi(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function bi(s,t,e,n){return s+Mi(s,t)*(1-Math.exp(-e*n))}function $e(s,t){let e=new Uint8ClampedArray(s*t*4),n=(i,r)=>(i%r+r)%r;return{w:s,h:t,data:e,set(i,r,o,a=255){i=n(Math.round(i),s),r=n(Math.round(r),t);let l=(r*s+i)*4;e[l]=o[0],e[l+1]=o[1],e[l+2]=o[2],e[l+3]=a},get(i,r){i=n(Math.round(i),s),r=n(Math.round(r),t);let o=(r*s+i)*4;return[e[o],e[o+1],e[o+2]]},rect(i,r,o,a,l){for(let c=0;c<o;c++)for(let h=0;h<a;h++)this.set(i+c,r+h,l)}}}function Ke(s,{repeat:t=!0,linear:e=!1}={}){let n=document.createElement("canvas");return n.width=s.w,n.height=s.h,n.getContext("2d").putImageData(new ImageData(s.data,s.w,s.h),0,0),Hu(n,{repeat:t,linear:e})}function Hu(s,{repeat:t=!0,linear:e=!1}={}){let n=new js(s);return n.magFilter=e?Be:pe,n.minFilter=e?Be:pe,n.generateMipmaps=!1,n.colorSpace=e?Dn:on,t&&(n.wrapS=n.wrapT=as),n}var Je=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Pe=(s,t)=>[s[0]+t,s[1]+t,s[2]+t],Ex=(s,t,e)=>[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e],Ac=new Map;function Xe(s,t){return Ac.has(s)||Ac.set(s,t()),Ac.get(s)}function Rc(s=7,t=[176,168,148],e=15){return Xe("floor"+s+t+e,()=>{let i=$e(64,64),r=ze(s),o=[],a=Math.round(Math.sqrt(e));for(let h=0;h<a;h++)for(let d=0;d<a;d++){let u=(r()-.5)*30,f=(r()-.5)*12;o.push({x:(h+.2+r()*.6)/a*64,y:(d+.2+r()*.6)/a*64,sx:.75+r()*.6,sy:.75+r()*.6,c:[t[0]+u+f,t[1]+u,t[2]+u-f],moss:r()<.15})}let l=(h,d,u)=>{let f=Math.abs(d-h.x),p=Math.abs(u-h.y);return f=Math.min(f,64-f)*h.sx,p=Math.min(p,64-p)*h.sy,Math.max(f,p)*.75+(f+p)*.25},c=(h,d)=>{let u=null,f=1e9,p=1e9;for(let _ of o){let g=l(_,h,d);g<f?(p=f,f=g,u=_):g<p&&(p=g)}return{b:u,gap:p-f}};for(let h=0;h<64;h++)for(let d=0;d<64;d++){let{b:u,gap:f}=c(h,d),p=u.c,_=r();_<.07?p=Pe(p,-12):_<.12&&(p=Pe(p,8)),f<1.1?(p=Je(u.c,.66),u.moss&&r()<.5&&(p=[112,124,86])):f<2.2&&(p=c(h,d-2).b!==u||c(h-2,d).b!==u?Pe(u.c,12):Je(u.c,.88)),i.set(h,d,p)}return Ke(i)})}function Gu(){return Xe("path",()=>{let s=$e(64,64),t=ze(31),e=[158,156,148];for(let n=0;n<4;n++){let i=n%2?8:0;for(let r=0;r<4;r++){let o=(t()-.5)*20,a=Pe(e,o);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=a,d=t();d<.06?h=Pe(a,-12):d<.1&&(h=Pe(a,8)),l===15||c===15?h=Je(a,.7):(l===0||c===0)&&(h=Pe(a,10)),s.set(r*16+l+i,n*16+c,h)}}}return Ke(s)})}function Cc(s=[168,160,142]){return Xe("block"+s,()=>{let t=$e(32,32),e=ze(5);for(let n=0;n<4;n++){let i=n%2?8:0;for(let r=0;r<2;r++){let o=Pe(s,(e()-.5)*22);for(let a=0;a<16;a++)for(let l=0;l<8;l++){let c=o;e()<.08&&(c=Pe(o,-10)),a===15||l===7?c=Je(o,.55):l===0&&(c=Pe(o,16)),t.set(r*16+a+i,n*8+l,c)}}}return Ke(t)})}function Vu(s=[92,132,64]){return Xe("grass"+s,()=>{let t=$e(32,32),e=ze(11);for(let n=0;n<32;n++)for(let i=0;i<32;i++){let r=e(),o=Pe(s,(e()-.5)*14);r<.12?o=Je(s,.78):r<.2&&(o=Je(s,1.14)),t.set(n,i,o)}for(let n=0;n<7;n++){let i=Math.floor(e()*32),r=Math.floor(e()*32),o=e()<.5?[236,230,200]:[232,200,92];t.set(i,r,o)}return Ke(t)})}function Wu(){return Xe("dirt",()=>{let s=$e(32,32),t=ze(13),e=[96,104,70];for(let n=0;n<32;n++)for(let i=0;i<32;i++){let r=t(),o=Pe(e,(t()-.5)*12);r<.15?o=[88,86,66]:r<.22&&(o=Je(e,1.15)),s.set(n,i,o)}return Ke(s)})}function Ic(s=[150,44,34]){return Xe("wood"+s,()=>{let t=$e(16,16),e=ze(17);for(let n=0;n<16;n++){let i=(e()-.5)*16;for(let r=0;r<16;r++){let o=Pe(s,i+(e()-.5)*6);n%5===0&&e()<.6&&(o=Je(s,.84)),t.set(n,r,o)}}return Ke(t)})}function Xu(){return Ic([92,60,40])}function qu(s=[84,90,98]){return Xe("roof"+s,()=>{let t=$e(32,32),e=ze(19);for(let n=0;n<32;n++)for(let i=0;i<32;i++){let r=n%4,o;r===0?o=Je(s,.62):r===1?o=Je(s,1):r===2?o=Je(s,1.22):o=Je(s,1.06),i%8===7?o=Je(o,.78):i%8===0&&r!==0&&(o=Je(o,1.08)),o=Pe(o,(e()-.5)*6),t.set(n,i,o)}return Ke(t)})}function za(){return Xe("dancheong",()=>{let s=$e(64,16),t=[46,122,98],e=[34,92,76],n=[44,82,150],i=[176,52,44],r=[236,228,206],o=[226,182,64];for(let a=0;a<64;a++)for(let l=0;l<16;l++){let c=t;l===0||l===15?c=i:l===1||l===14?c=r:(l===2||l===13)&&(c=e),s.set(a,l,c)}for(let a=0;a<4;a++){let l=a*16+8,c=8;for(let h=-5;h<=5;h++)for(let d=-4;d<=4;d++){let u=Math.abs(h)/5+Math.abs(d)/4;u<=1&&s.set(l+h,c+d,u>.75?r:u>.5?n:u>.25?i:o)}for(let h=3;h<=12;h++)s.set(a*16,h,r),s.set(a*16+1,h,n)}return Ke(s)})}function Pc(s=!1){return Xe("lattice"+s,()=>{let t=$e(32,48),e=s?[0,0,0]:[44,104,84],n=s?[0,0,0]:[30,70,58],i=s?[255,214,150]:[226,216,186],r=s?[220,170,110]:[204,192,160];for(let o=0;o<32;o++)for(let a=0;a<48;a++){let l=i;a>36&&(l=s?[0,0,0]:[120,60,44]),a===36&&(l=n);let c=o%5,h=a%6;a<36&&(c===0||h===0)&&(l=e),a<36&&c===4&&(l=Ex(l,r,s?.3:.5)),(o<2||o>29||a<2||a>45)&&(l=n),t.set(o,a,l)}return Ke(t,{repeat:!1})})}function Yu(){return Xe("plaster",()=>{let s=$e(32,32),t=ze(23);for(let e=0;e<32;e++)for(let n=0;n<32;n++){let i=Pe([226,220,204],(t()-.5)*8);n>24&&(i=Pe([150,140,124],(t()-.5)*12)),(n===24||n===2||e===0||e===31)&&(i=[156,52,40]),s.set(e,n,i)}return Ke(s)})}function Zu(s){return Xe("banner"+s,()=>{let n=document.createElement("canvas");n.width=32,n.height=40;let i=n.getContext("2d"),r,o,a,l,c;if(s==="red"?(r="#b8302a",o="#e8b030",a="#f0c040",l="\u4EE4",c="#7a1c18"):s==="white"?(r="#ece6d4",o="#e0a828",a="#1a1a1a",l="\u9F8D",c="#ece6d4"):(r="#23305e",o="#c8342c",a="#e8e0d0",l="\u6B66",c="#23305e"),i.fillStyle=o,i.fillRect(0,0,32,40),i.fillStyle=r,i.fillRect(3,3,26,34),s==="white"){i.fillStyle="#c03028";for(let h=0;h<40;h+=4)i.fillRect(29,h,3,2),i.fillRect(0,h+2,2,2);for(let h=0;h<32;h+=4)i.fillRect(h,37,2,3)}else s==="red"&&(i.fillStyle=c,i.fillRect(6,6,20,28),i.fillStyle=o,i.fillRect(6,6,20,1),i.fillRect(6,33,20,1),i.fillRect(6,6,1,28),i.fillRect(25,6,1,28));return i.fillStyle=a,i.font='bold 20px "Noto Serif CJK KR","Noto Sans CJK KR","Malgun Gothic","Apple SD Gothic Neo",serif',i.textAlign="center",i.textBaseline="middle",i.fillText(l,32/2,40/2+1),Tx(i,32,40,[r,o,a,c,"#c03028"]),Hu(n,{repeat:!1})})}function Tx(s,t,e,n){let i=n.map(a=>[parseInt(a.slice(1,3),16),parseInt(a.slice(3,5),16),parseInt(a.slice(5,7),16)]),r=s.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=i[0],c=1e9;for(let h of i){let d=(o[a]-h[0])**2+(o[a+1]-h[1])**2+(o[a+2]-h[2])**2;d<c&&(c=d,l=h)}o[a]=l[0],o[a+1]=l[1],o[a+2]=l[2],o[a+3]=255}s.putImageData(r,0,0)}function Ju(){return Xe("drumside",()=>{let s=$e(64,32),t=ze(29),e=[40,92,150];for(let n=0;n<64;n++)for(let i=0;i<32;i++){let r=Pe(e,(t()-.5)*8),o=Math.sin(n*.4+Math.sin(i*.35)*2.2)+Math.sin(i*.5+n*.12);o>1.35?r=[196,62,50]:o>1.1?r=[236,220,180]:o<-1.45&&(r=[70,150,110]),(i<3||i>28)&&(r=[180,48,40]),(i===3||i===28)&&(r=[226,186,70]),s.set(n,i,r)}return Ke(s)})}function $u(){return Xe("drumface",()=>{let s=$e(32,32),t=[[196,52,44],[40,80,160],[228,186,60]];for(let e=0;e<32;e++)for(let n=0;n<32;n++){let i=e-15.5,r=n-15.5,o=Math.hypot(i,r),a=[222,206,170];if(o>14.5)a=[120,70,40];else if(o>13.5)a=[226,186,70];else if(o<8){let l=Math.atan2(r,i)+o*.22,c=Math.floor((l/(Math.PI*2)%1+1)%1*3);a=t[c]}s.set(e,n,a)}return Ke(s,{repeat:!1})})}function Ku(){return Xe("medallion",()=>{let s=$e(64,64),t=ze(37),e=[170,164,148];for(let n=0;n<64;n++)for(let i=0;i<64;i++){let r=n-31.5,o=i-31.5,a=Pe(e,(t()-.5)*10),l=Math.abs(r)+Math.abs(o),c=Math.max(Math.abs(r),Math.abs(o)),h=Math.hypot(r,o),d=Math.atan2(o,r),u=Je(e,.68),f=Pe(e,18);c>30?a=u:c>29&&(a=f),Math.abs(l-29)<.8&&(a=u),Math.abs(l-27)<.8&&(a=f);let p=9+5*Math.abs(Math.cos(d*4));Math.abs(h-p)<.8&&(a=u),h<p-.8&&h>p-2&&(a=f),h<4&&(a=Math.abs(h-3)<.8?u:Pe(e,8)),Math.abs(h-19)<.7&&Math.abs(Math.sin(d*8))>.4&&(a=u),s.set(n,i,a)}return Ke(s,{repeat:!1})})}function ju(){return Xe("carving",()=>{let s=$e(16,32),t=[178,170,152];for(let e=0;e<16;e++)for(let n=0;n<32;n++){let i=t;e===0||e===15||n===0||n===31?i=Je(t,.65):(e===1||n===1)&&(i=Pe(t,16));let r=e-7.5,o=n-15.5,a=Math.sin(r*.9)*3+Math.cos(o*.5)*2;Math.abs(r)<5&&Math.abs(o)<12&&Math.abs(a)<.6&&(i=Je(t,.7)),s.set(e,n,i)}return Ke(s,{repeat:!1})})}function Qu(){return Xe("bark",()=>{let s=$e(16,16),t=ze(41);for(let e=0;e<16;e++)for(let n=0;n<16;n++){let i=Pe([104,78,62],(t()-.5)*16);(n+Math.floor(e/4)*3)%5===0&&(i=[70,52,42]),t()<.08&&(i=[132,102,80]),s.set(e,n,i)}return Ke(s)})}function td(){return Xe("tiger",()=>{let s=$e(16,16);for(let t=0;t<16;t++)for(let e=0;e<16;e++){let n=[226,142,48];Math.sin(t*1.1+Math.sin(e*.7)*1.5)>.55&&(n=[40,28,24]),s.set(t,e,n)}return Ke(s)})}function ed(){return Xe("cloud",()=>{let t=$e(128,128),e=ze(53),n=[[4,.5],[8,.27],[16,.15],[32,.08]],i=n.map(([o])=>Array.from({length:o*o},()=>e())),r=o=>o*o*(3-2*o);for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=0;n.forEach(([h,d],u)=>{let f=o/128*h,p=a/128*h,_=Math.floor(f),g=Math.floor(p),m=r(f-_),M=r(p-g),T=i[u],v=(R,x)=>T[x%h*h+R%h],S=v(_,g)+(v(_+1,g)-v(_,g))*m,w=v(_,g+1)+(v(_+1,g+1)-v(_,g+1))*m;l+=(S+(w-S)*M)*d});let c=Math.max(0,Math.min(255,l*255));t.set(o,a,[c,c,c])}return Ke(t,{linear:!0})})}var yn={time:{value:0},player:{value:new A(0,-100,0)},night:{value:0}},Cs=null;function Rx(){if(!Cs){let s=new Uint8Array([78,78,78,255,150,150,150,255,212,212,212,255,255,255,255,255]);Cs=new Di(s,4,1,fn),Cs.magFilter=Cs.minFilter=pe,Cs.needsUpdate=!0}return Cs}function Vt(s={}){return new sr({gradientMap:Rx(),...s})}function Lc(s,{local:t="",world:e=""},n){s.onBeforeCompile=i=>{i.uniforms.uTime=yn.time,i.uniforms.uPlayer=yn.player;let r=`uniform float uTime;
uniform vec3 uPlayer;
`+i.vertexShader;t&&(r=r.replace("#include <begin_vertex>",`#include <begin_vertex>
`+t)),e&&(r=r.replace("#include <project_vertex>",`
        vec4 mvPosition = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          mvPosition = instanceMatrix * mvPosition;
        #endif
        vec4 wPos = modelMatrix * mvPosition;
        ${e}
        mvPosition = viewMatrix * wPos;
        gl_Position = projectionMatrix * mvPosition;`)),i.vertexShader=r},s.customProgramCacheKey=()=>n}var Dc=new Map;function ka(s,t,{shadow:e=!0}={}){let n="anim:"+(t.local||"")+"|"+(t.world||"");if(Lc(s.material,t,n),e){let o=new gs({depthPacking:Kl});Lc(o,t,n+":depth"),s.customDepthMaterial=o}let i=s.material.side,r=n+i;if(!Dc.has(r)){let o=new di({side:i});Lc(o,t,n+":normal"),Dc.set(r,o)}return s.userData.nmat=Dc.get(r),s}var Ha={flag:{local:`
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
      wPos.y -= push * h * 0.5;`}};var wr=16,Cx=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Ix=`
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
}`,Ga=class{constructor(t){this.container=t,this.canvas=document.createElement("canvas"),this.canvas.className="view",t.appendChild(this.canvas);let e=this.renderer=new Fa({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.shadowMap.enabled=!0,e.shadowMap.type=Ui,e.shadowMap.autoUpdate=!1,e.outputColorSpace=Pi,this.pixelSize=3,this.userZoom=0,this.colorTarget=null,this.normalTarget=null,this.normalFront=new di,this.normalDouble=new di({side:ve}),this.compMat=new Ie({vertexShader:Cx,fragmentShader:Ix,uniforms:{tColor:{value:null},tNormal:{value:null},tDepth:{value:null},tCloud:{value:ed()},res:{value:new vt(1,1)},cNear:{value:1},cFar:{value:100},invViewProj:{value:new jt},time:yn.time,night:yn.night,outline:{value:1},flash:{value:0},flashColor:{value:new xt(1,1,1)},vignette:{value:.55}},depthTest:!1,depthWrite:!1}),this.compScene=new Li,this.compCam=new ti(-1,1,1,-1,0,1);let n=new Tt(new Oe(2,2),this.compMat);n.frustumCulled=!1,this.compScene.add(n),this.camera=new ti(-1,1,1,-1,1,160),this.pitch=ec.degToRad(45),this.camDist=70,this.shift={x:0,y:0},this.resize(),window.addEventListener("resize",()=>this.resize())}basePixelSize(){return Math.max(2,Math.round(Math.sqrt(window.innerWidth*window.innerHeight)/330))}autoPixelSize(){return this.basePixelSize()+this.userZoom}zoom(t){let e=this.basePixelSize(),n=Math.min(Math.max(e+this.userZoom+t,2),e+3);this.userZoom=n-e,this.resize()}resize(){let t=this.pixelSize=Math.max(2,this.autoPixelSize()),e=this.W=Math.ceil(window.innerWidth/t),n=this.H=Math.ceil(window.innerHeight/t),i=this.RW=e+2,r=this.RH=n+2;this.renderer.setSize(i,r,!1),Object.assign(this.canvas.style,{width:i*t+"px",height:r*t+"px"});let o={minFilter:pe,magFilter:pe,type:_n};this.colorTarget?.dispose(),this.normalTarget?.dispose(),this.colorTarget=new qe(i,r,o),this.normalTarget=new qe(i,r,{minFilter:pe,magFilter:pe}),this.normalTarget.depthTexture=new Gn(i,r),this.normalTarget.depthTexture.type=xn,this.compMat.uniforms.res.value.set(i,r);let a=this.camera;a.left=-i/wr/2,a.right=i/wr/2,a.top=r/wr/2,a.bottom=-r/wr/2,a.updateProjectionMatrix()}project(t,e={x:0,y:0}){let n=Nc.copy(t).project(this.camera),i=this.pixelSize;return e.x=(n.x*.5+.5)*this.RW*i-i+this.shift.x,e.y=(-n.y*.5+.5)*this.RH*i-i+this.shift.y,e.z=n.z,e}unproject(t,e,n=0){let i=this.pixelSize,r=(t+i-this.shift.x)/(this.RW*i)*2-1,o=-((e+i-this.shift.y)/(this.RH*i)*2-1),a=Nc.set(r,o,-1).unproject(this.camera),c=Px.set(r,o,1).unproject(this.camera).sub(a),h=(n-a.y)/c.y;return new A(a.x+c.x*h,n,a.z+c.z*h)}setFocus(t){let e=this.camera,n=this.pitch,i=Nc.set(0,Math.sin(n),Math.cos(n)).multiplyScalar(this.camDist);e.position.copy(t).add(i),e.up.set(0,1,0),e.lookAt(t),e.updateMatrixWorld();let r=Lx.setFromMatrixColumn(e.matrixWorld,0),o=Dx.setFromMatrixColumn(e.matrixWorld,1),a=1/wr,l=e.position.dot(r),c=e.position.dot(o),h=Math.round(l/a)*a,d=Math.round(c/a)*a;e.position.addScaledVector(r,h-l).addScaledVector(o,d-c),e.updateMatrixWorld();let u=(l-h)/a,f=(c-d)/a,p=this.pixelSize;this.shift.x=-u*p,this.shift.y=f*p,this.canvas.style.transform=`translate(${(-p+this.shift.x).toFixed(2)}px, ${(-p+this.shift.y).toFixed(2)}px)`}render(t){let e=this.renderer,n=this.camera,i=[],r=[];t.traverseVisible(l=>{if(l.isMesh||l.isPoints||l.isLine||l.isSprite)if(l.userData.noOutline||l.isPoints||l.isSprite||l.isLine||l.material&&l.material.transparent)r.push(l);else{i.push(l,l.material);let c=l.userData.nmat||(Array.isArray(l.material)?l.material[0].side===ve?this.normalDouble:this.normalFront:l.material.side===ve?this.normalDouble:this.normalFront);l.material=c}});for(let l of r)l.visible=!1;let o=t.background;t.background=null,e.setRenderTarget(this.normalTarget),e.setClearColor(8421631,1),e.clear(),e.render(t,n);for(let l=0;l<i.length;l+=2)i[l].material=i[l+1];for(let l of r)l.visible=!0;t.background=o,e.shadowMap.needsUpdate=!0,e.setRenderTarget(this.colorTarget),e.render(t,n);let a=this.compMat.uniforms;a.tColor.value=this.colorTarget.texture,a.tNormal.value=this.normalTarget.texture,a.tDepth.value=this.normalTarget.depthTexture,a.cNear.value=n.near,a.cFar.value=n.far,a.invViewProj.value.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).invert(),e.setRenderTarget(null),e.render(this.compScene,this.compCam)}},Nc=new A,Px=new A,Lx=new A,Dx=new A;function id(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=nd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][u]);let p=nd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function nd(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Fe(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let _=h.getComponent(u,p);a.setComponent(u+d,p,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Pt(s,t,e,n=4){let i=new Bt(s,t,e),r=i.attributes.uv,o=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0]/n,r.getY(c)*o[a][1]/n)}return i}function wn(s,t,e,n=12,i=0,r=0){let o=new ne(s,t,e,n);if(i){let a=o.attributes.uv;for(let l=0;l<a.count;l++)a.setXY(l,a.getX(l)*i,a.getY(l)*r)}return o}var Er=class{constructor(){this.groups=new Map}add(t,e,n){let i=t.index?t.toNonIndexed():t.clone();i.attributes.uv||i.setAttribute("uv",new Ft(new Float32Array(i.attributes.position.count*2),2));for(let r of Object.keys(i.attributes))["position","normal","uv"].includes(r)||i.deleteAttribute(r);i.applyMatrix4(n),this.groups.has(e)||this.groups.set(e,[]),this.groups.get(e).push(i)}put(t,e,n,i,r,o=0,a=0,l=0,c=1){sd.compose(Nx.set(n,i,r),Ux.setFromEuler(Fx.set(a,o,l,"YXZ")),Bx.set(c,c,c)),this.add(t,e,sd)}build(t,{cast:e=!0,receive:n=!0}={}){let i=[];for(let[r,o]of this.groups){let a=id(o,!1),l=new Tt(a,r);l.castShadow=e,l.receiveShadow=n,t.add(l),i.push(l)}return this.groups.clear(),i}},sd=new jt,Nx=new A,Ux=new Ae,Fx=new un,Bx=new A;function rd({w:s,d:t,h:e,overhang:n=2,lift:i=.7,power:r=1.7,seg:o=28,thick:a=.28,tile:l=2}){let c=s+n*2,h=t+n*2,d=Math.min(c,h)/2,u=(Y,z)=>{let $=c/2-Math.abs(Y),Q=h/2-Math.abs(z),yt=Math.max(0,Math.min($,Q)),bt=Math.min(1,yt/d),Xt=e*Math.pow(bt,r),Ht=Math.min(1,Math.abs(Y)/(c/2)),Yt=Math.min(1,Math.abs(z)/(h/2));return Xt+=i*Math.pow(Ht*Yt,2.2),Xt},f=o,p=Math.max(6,Math.round(o*h/c)),_=[],g=[],m=[],M=[],T=[],v=[],S=.05,w=(Y,z)=>{let $=(u(Y+S,z)-u(Y-S,z))/(2*S),Q=(u(Y,z+S)-u(Y,z-S))/(2*S);return new A(-$,1,-Q).normalize()},R=Y=>-c/2+c*Y/f,x=Y=>-h/2+h*Y/p,E=(Y,z,$)=>{let Q=(Y[0]+z[0]+$[0])/3,yt=(Y[1]+z[1]+$[1])/3,bt=c/2-Math.abs(Q)>h/2-Math.abs(yt);for(let[Xt,Ht]of[Y,z,$]){let Yt=u(Xt,Ht),J=w(Xt,Ht);_.push(Xt,Yt,Ht),g.push(J.x,J.y,J.z),bt?m.push(Xt/l,(h/2-Math.abs(Ht))/l):m.push(Ht/l,(c/2-Math.abs(Xt))/l)}for(let[Xt,Ht]of[Y,$,z]){let Yt=u(Xt,Ht)-a;M.push(Xt,Yt,Ht),T.push(0,-1,0),v.push(Xt/2,Ht/2)}};for(let Y=0;Y<f;Y++)for(let z=0;z<p;z++){let $=[R(Y),x(z)],Q=[R(Y+1),x(z)],yt=[R(Y+1),x(z+1)],bt=[R(Y),x(z+1)];(R(Y)+R(Y+1))*(x(z)+x(z+1))>0?(E($,bt,Q),E(Q,bt,yt)):(E($,bt,yt),E($,yt,Q))}let I=new ue;I.setAttribute("position",new Ft(_,3)),I.setAttribute("normal",new Ft(g,3)),I.setAttribute("uv",new Ft(m,2));let D=new ue;D.setAttribute("position",new Ft(M,3)),D.setAttribute("normal",new Ft(T,3)),D.setAttribute("uv",new Ft(v,2));let L=[],O=[],P=[],F=[];for(let Y=0;Y<=f;Y++)F.push([R(Y),-h/2,0,0,-1]);for(let Y=1;Y<=p;Y++)F.push([c/2,x(Y),1,0,0]);for(let Y=f-1;Y>=0;Y--)F.push([R(Y),h/2,0,0,1]);for(let Y=p-1;Y>=0;Y--)F.push([-c/2,x(Y),-1,0,0]);let k=0;for(let Y=0;Y<F.length-1;Y++){let[z,$]=F[Y],[Q,yt,bt,,Xt]=F[Y+1],Ht=u(z,$),Yt=u(Q,yt),J=Math.hypot(Q-z,yt-$),nt=[[z,Ht,$,k,1],[Q,Yt,yt,k+J,1],[Q,Yt-a,yt,k+J,0],[z,Ht-a,$,k,0]];for(let St of[0,2,1,0,3,2]){let kt=nt[St];L.push(kt[0],kt[1],kt[2]),O.push(bt,0,Xt),P.push(kt[3]/4,kt[4]*.25)}k+=J}let X=new ue;return X.setAttribute("position",new Ft(L,3)),X.setAttribute("normal",new Ft(O,3)),X.setAttribute("uv",new Ft(P,2)),{top:I,under:D,fascia:X,height:u,W:c,D:h}}function Va(s,t=12){return new er(s.map(([e,n])=>new vt(e,n)),t)}var Wa=class{constructor(t){this.scene=t,this.root=new Kt,t.add(this.root),this.rects=[],this.ramps=[],this.blockRects=[],this.circles=[],this.lanterns=[],this.glowMats=[],this.drums=[],this.windows=[],this.spawnPoints=[],this.makeMaterials(),this.build()}makeMaterials(){let t=e=>new xt(e);this.M={floor:Vt({map:Rc()}),slab:Vt({map:Rc(9,[186,178,160],25)}),path:Vt({map:Gu()}),block:Vt({map:Cc()}),blockDark:Vt({map:Cc([140,134,120])}),grass:Vt({map:Vu()}),dirt:Vt({map:Wu()}),wood:Vt({map:Ic()}),darkWood:Vt({map:Xu()}),roof:Vt({map:qu()}),roofUnder:Vt({map:za()}),fascia:Vt({map:za(),side:ve}),ridge:Vt({color:t("#3b4048")}),mortar:Vt({color:t("#e2dccb")}),dancheong:Vt({map:za()}),plaster:Vt({map:Yu()}),bark:Vt({map:Qu()}),leaf:Vt({color:t("#3f6e3e")}),leaf2:Vt({color:t("#5f924a")}),bronze:Vt({color:t("#6e5a3e")}),bronzeDark:Vt({color:t("#3c3226")}),gold:Vt({color:t("#d9a83a")}),black:Vt({color:t("#2a2624")}),stoneLight:Vt({color:t("#bdb5a2")}),stoneGrey:Vt({color:t("#a29c8e")}),pot:Vt({color:t("#c9b48e")}),lotus:Vt({color:t("#4e8a4a")}),pink:Vt({color:t("#e889a6")}),orange:Vt({color:t("#e88a3a")}),blue:Vt({color:t("#2f5aa8")}),red:Vt({color:t("#b23a2e")}),drumSide:Vt({map:Ju()}),drumFace:Vt({map:$u()}),medallion:Vt({map:Ku(),polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),carving:Vt({map:ju()}),lattice:Vt({map:Pc(),emissiveMap:Pc(!0),emissive:t("#000000")}),lampGlow:Vt({color:t("#f3e2b8"),emissive:t("#000000")})},this.glowMats.push({mat:this.M.lattice,color:new xt("#ffb060"),k:1.1}),this.glowMats.push({mat:this.M.lampGlow,color:new xt("#ffc070"),k:1.6})}heightAt(t,e){let n=0;for(let i of this.rects)t>=i.x0&&t<=i.x1&&e>=i.z0&&e<=i.z1&&i.h>n&&(n=i.h);for(let i of this.ramps)if(t>=i.x0&&t<=i.x1&&e>=i.z0&&e<=i.z1){let r=(e-i.z0)/(i.z1-i.z0),o=i.h0+(i.h1-i.h0)*r;o>n&&(n=o)}return n}isBlocked(t,e,n,i){if(t<-21.6+n||t>21.6-n||e<-33.3+n||e>21.2-n&&(t<-3.2+n||t>3.2-n)||e>30)return!0;for(let a of this.blockRects)if(t>a.x0-n&&t<a.x1+n&&e>a.z0-n&&e<a.z1+n)return!0;for(let a of this.circles){let l=t-a.x,c=e-a.z,h=a.r+n;if(l*l+c*c<h*h&&Math.abs((a.y||0)-i)<1.5)return!0}let r=this.heightAt(t,e);if(Math.abs(r-i)>.45)return!0;let o=n*.8;for(let[a,l]of Ox)if(Math.abs(this.heightAt(t+a*o,e+l*o)-r)>.45)return!0;return!1}move(t,e,n,i){let r=Math.hypot(e,n),o=Math.max(1,Math.ceil(r/.15)),a=e/o,l=n/o,c=!1,h=this.heightAt(t.x,t.z);if(this.isBlocked(t.x,t.z,i,h)){let d=t.x+e,u=t.z+n;if(Math.abs(this.heightAt(d,u)-h)<=.45&&d>-21.6&&d<21.6&&u>-33.3&&u<30)return t.x=d,t.z=u,!0}for(let d=0;d<o;d++){let u=this.heightAt(t.x,t.z);if(!this.isBlocked(t.x+a,t.z+l,i,u))t.x+=a,t.z+=l,c=!0;else if(a&&!this.isBlocked(t.x+a,t.z,i,u))t.x+=a,c=!0;else if(l&&!this.isBlocked(t.x,t.z+l,i,u))t.z+=l,c=!0;else break}return c}randomWalkable(t,e,n,i,r=30){for(let o=0;o<r;o++){let a=Math.random()*Math.PI*2,l=n+Math.random()*(i-n),c=t+Math.cos(a)*l,h=e+Math.sin(a)*l,d=this.heightAt(c,h);if(!this.isBlocked(c,h,.5,d)&&h<20)return new A(c,d,h)}return null}build(){let t=this.M,e=this.batch=new Er,n=ze(77);this.foliage=new Er;let i=new Tt(new Oe(160,160),t.dirt);i.geometry.attributes.uv.array.forEach((l,c,h)=>h[c]=l*80),i.rotation.x=-Math.PI/2,i.position.y=-.02,i.receiveShadow=!0,this.root.add(i);let r=new Oe(48,58);r.attributes.uv.array.forEach((l,c,h)=>h[c]=l*(c%2===0?12:14.5));let o=new Tt(r,t.floor);o.rotation.x=-Math.PI/2,o.position.set(0,0,-6),o.receiveShadow=!0,this.root.add(o),e.add(Pt(5.2,.12,24.6,4),t.path,ot(0,.06,8.7)),this.rects.push({x0:-2.6,x1:2.6,z0:-3.6,z1:21,h:.12}),e.add(Pt(5.2,.08,10,4),t.path,ot(0,.04,27)),this.rects.push({x0:-2.6,x1:2.6,z0:21,z1:32,h:.08}),this.terrace(-15,15,-14,-6,.9),this.terrace(-12,12,-22,-13,1.8),this.stairs(-6,-3.6,.9,0),this.stairs(-13,-10.6,1.8,.9),this.balustrade(-15,-6,-2.9,-6,.9),this.balustrade(2.9,-6,15,-6,.9),this.balustrade(-15,-14,-15,-6,.9),this.balustrade(15,-14,15,-6,.9),this.balustrade(-12,-13,-2.9,-13,1.8),this.balustrade(2.9,-13,12,-13,1.8),this.balustrade(-12,-22,-12,-13,1.8),this.balustrade(12,-22,12,-13,1.8);for(let l of[-1,1])this.haetae(l*3.3,.9,-6.5,l),this.haetae(l*3.3,1.8,-13.5,l);this.hall();for(let l of[-1,1])this.cauldron(l*6.2,.9,-8.2);for(let l of[-1,1])this.cauldron(l*10.5,1.8,-15.2);for(let l of[-1,1])this.flag(l*5.4,1.8,-13.45,"red",l),this.flag(l*4.6,.9,-8.6,"white",l),this.flag(l*4.8,0,1.2,"red",l),this.flag(l*4.8,0,9.5,"white",l),this.flag(l*19.5,0,-24,"navy",l),this.flag(l*20,0,-11,"navy",l),this.flag(l*20,0,18,"navy",l);for(let l of[-1,1])this.drum(l*10.5,4.2,l);for(let l of[-1,1]){let c=new Tt(new Oe(6,6),t.medallion);c.rotation.x=-Math.PI/2,c.position.set(l*17,.012,4.2),c.receiveShadow=!0,this.root.add(c)}this.planter(-14.6,-6,-6,-1.4),this.planter(6,14.6,-6,-1.4),this.planter(-14,-7.4,9.2,14.2),this.planter(7.4,14,9.2,14.2),this.pine(-11.2,.3,-3.6,1.15,3),this.pine(11.4,.3,-3.4,1.1,4),this.pine(-10.6,.3,11.8,.85,5),this.pine(10.8,.3,11.6,.8,6),this.shrub(-7.4,.3,-2.6),this.shrub(7.6,.3,-2.4),this.shrub(-13.2,.3,-2.2),this.shrub(13,.3,-4.6),this.shrub(-8.4,.3,13.1),this.shrub(8.6,.3,10.2);for(let[l,c,h,d]of[[-16,-28,1.2,11],[15,-27,1.3,12],[-5,-30,1,13],[6,-31,.95,14],[17.5,-18.5,.9,15],[-17.5,-18,.95,16]])this.pine(l,0,c,h,d);for(let[l,c,h,d]of[[-12,27,1.2,21],[11,28,1.3,22],[-22,30,1,23],[24,31,1.1,24],[-7,33,.9,25],[7,35,1,26],[-30,10,1.3,27],[31,-5,1.2,28],[-31,-20,1.2,29],[30,15,1.1,30]])this.pine(l,0,c,h,d,!1);for(let l of[-1,1])this.flowerPot(l*3.7,4.6),this.flowerPot(l*3.7,13.4),this.flowerPot(l*3.7,-1.6);for(let l of[-1,1])this.stoneLantern(l*7.6,0,17.2),this.stoneLantern(l*16.5,0,-2.2),this.stoneLantern(l*16.5,0,12),this.stoneLantern(l*10.9,1.8,-21),this.stoneLantern(l*13.6,.9,-7);this.stoneLantern(-11,0,-26),this.stoneLantern(11,0,-24),this.pond(-21,-15,-31.2,-24.6),this.corridor(-1),this.corridor(1),this.northWall(),this.southWall(),this.scatterGrass(),e.build(this.root);let a=this.foliage.build(this.root);for(let l of a)ka(l,Ha.foliage);this.spawnPoints.push(new A(0,0,25),new A(-1.5,0,26),new A(1.5,0,26))}terrace(t,e,n,i,r){let o=this.M,a=this.batch,l=e-t,c=i-n,h=Pt(l,r,c,2),d=Pt(l,.001,c,4);a.add(h,o.block,ot((t+e)/2,r/2,(n+i)/2)),a.add(d,o.slab,ot((t+e)/2,r+.001,(n+i)/2)),a.add(Pt(l+.3,.14,.4,2),o.stoneLight,ot((t+e)/2,r-.05,i+.05)),this.rects.push({x0:t,x1:e,z0:n,z1:i,h:r})}stairs(t,e,n,i){let r=this.M,o=this.batch,a=6,l=(e-t)/a,c=(n-i)/a;for(let g=0;g<a;g++){let m=n-c*(g+1)+c,M=t+l*(g+.5),T=i-.2,v=Pt(5.2,m-T,l,2);o.add(v,g%2?r.stoneLight:r.stoneGrey,ot(0,(m+T)/2,M))}let h=Math.hypot(e-t,n-i),d=Math.atan2(n-i,e-t),u=(t+e)/2,f=(n+i)/2,p=Pt(1.4,.12,h,2),_=p.attributes.uv;for(let g=8;g<12;g++)_.setXY(g,g%2,g<10?1:0);o.add(p,r.carving,ot(0,f+.06,u,0,d));for(let g of[-1,1])o.add(Pt(.45,.4,h+.2,2),r.stoneLight,ot(g*2.82,f+.12,u,0,d));this.ramps.push({x0:-2.6,x1:2.6,z0:t,z1:e,h0:n,h1:i})}balustrade(t,e,n,i,r){let o=this.M,a=this.batch,l=Math.hypot(n-t,i-e),c=Math.atan2(-(i-e),n-t),h=Math.max(1,Math.round(l/1.6));for(let f=0;f<=h;f++){let p=f/h,_=t+(n-t)*p,g=e+(i-e)*p;a.add(Pt(.24,.62,.24,2),o.stoneLight,ot(_,r+.31,g)),a.add(Pt(.3,.1,.3,2),o.stoneGrey,ot(_,r+.65,g))}let d=(t+n)/2,u=(e+i)/2;a.add(Pt(l,.08,.12,2),o.stoneLight,ot(d,r+.5,u,c)),a.add(Pt(l,.18,.08,2),o.stoneGrey,ot(d,r+.14,u,c))}haetae(t,e,n,i){let r=this.M,o=this.batch;o.add(Pt(.7,.3,.9,2),r.stoneGrey,ot(t,e+.15,n)),o.add(new ye(.32,8,6),r.stoneLight,ot(t,e+.6,n,0,0,0,[1,.9,1.25])),o.add(new ye(.27,8,6),r.stoneLight,ot(t,e+.95,n+.25)),o.add(new ye(.12,6,4),r.stoneGrey,ot(t-.12,e+1.15,n+.2)),o.add(new ye(.12,6,4),r.stoneGrey,ot(t+.12,e+1.15,n+.2)),o.add(Pt(.12,.3,.12,2),r.stoneLight,ot(t-.15,e+.45,n+.3)),o.add(Pt(.12,.3,.12,2),r.stoneLight,ot(t+.15,e+.45,n+.3)),this.circles.push({x:t,z:n,r:.45,y:e})}hall(){let t=this.M,e=this.batch,n=2.1,i=-18.5;e.add(Pt(19.4,.3,6.2,2),t.block,ot(0,1.95,i)),e.add(Pt(19.6,.06,6.4,2),t.stoneLight,ot(0,2.1,i)),this.blockRects.push({x0:-9.7,x1:9.7,z0:-21.6,z1:-15.4}),e.add(Pt(17.6,3.5,4.6,2),t.darkWood,ot(0,n+1.75,i));let r=wn(.24,.27,3.6,10,1,1);for(let o=0;o<=6;o++){let a=-9+o*3;e.add(r,t.wood,ot(a,n+1.8,-16)),e.add(r,t.wood,ot(a,n+1.8,-21)),e.add(wn(.36,.38,.14,10),t.stoneLight,ot(a,n+.07,-16))}for(let o of[-1,1])e.add(r,t.wood,ot(o*9,n+1.8,-18.5));for(let o=0;o<6;o++){let a=-7.5+o*3;for(let l of[-.62,.62])e.add(new Bt(1.22,3.3,.08),t.lattice,ot(a+l,n+1.68,-16.18));e.add(Pt(2.76,.12,.14,2),t.wood,ot(a,n+3.38,-16.15)),e.add(Pt(2.76,.1,.14,2),t.wood,ot(a,n+.05,-16.15))}for(let o of[-1,1])for(let a of[-17.25,-19.75])e.add(new Bt(.08,3.3,2.3),t.lattice,ot(o*8.85,n+1.68,a));this.hallLightPos=[new A(-4.5,3.8,-15),new A(4.5,3.8,-15)],e.add(Pt(18.8,.42,5.8,4),t.dancheong,ot(0,5.9,i)),e.add(Pt(19.6,.4,6.6,4),t.dancheong,ot(0,6.3,i));for(let o=0;o<=24;o++){let a=-9.6+o*.8;for(let l of[-15.1,-21.9])e.add(Pt(.3,.26,.6,1),o%2?t.dancheong:t.red,ot(a,6.58,l))}for(let o=0;o<=8;o++)for(let a of[-1,1])e.add(Pt(.6,.26,.3,1),o%2?t.dancheong:t.red,ot(a*9.95,6.58,-21.7+o*.8));this.roof({cx:0,cy:6.72,cz:i,w:19.6,d:6.4,h:1.5,overhang:1.5,lift:.7,ridge:!1}),e.add(Pt(13.2,2.1,2.9,2),t.darkWood,ot(0,8.35,i));for(let o=0;o<6;o++){let a=-5.5+o*2.2;e.add(new Bt(1.7,1.25,.06),t.lattice,ot(a,8.55,i+1.48))}for(let o=0;o<=6;o++)e.add(wn(.17,.17,2.1,8),t.wood,ot(-6.6+o*2.2,8.35,i+1.5));e.add(Pt(14,.4,3.6,4),t.dancheong,ot(0,9.55,i)),this.roof({cx:0,cy:9.8,cz:i,w:14,d:3.6,h:2.4,overhang:1.9,lift:.85,ridge:!0})}roof({cx:t,cy:e,cz:n,w:i,d:r,h:o,overhang:a,lift:l,ridge:c,power:h=1.7,tile:d=2,rot:u=0}){let f=this.M,p=rd({w:i,d:r,h:o,overhang:a,lift:l,power:h,tile:d}),_=new Kt;_.position.set(t,e,n),_.rotation.y=u;let g=new Tt(p.top,f.roof),m=new Tt(p.under,f.roofUnder),M=new Tt(p.fascia,f.fascia);for(let w of[g,m,M])w.castShadow=!0,w.receiveShadow=!0,_.add(w);let T=p.W,v=p.D,S=Math.max(.5,T-v);if(c){let w=new Tt(Pt(S+.6,.5,.5,2),f.ridge);w.position.set(0,o+.2,0);let R=new Tt(Pt(S+.3,.2,.56,2),f.mortar);R.position.set(0,o+.05,0),_.add(w,R);for(let x of[-1,1]){let E=new Tt(Pt(.5,.8,.6,1),f.ridge);E.position.set(x*(S/2+.3),o+.45,0),E.rotation.z=x*.15,_.add(E)}}for(let w of[-1,1])for(let R of[-1,1]){let x=new A(w*S/2,0,0),E=new A(w*T/2,0,R*v/2),I=7,D=null;for(let L=0;L<=I;L++){let O=.02+L/I*.96,P=x.x+(E.x-x.x)*O,F=x.z+(E.z-x.z)*O,k=new A(P,p.height(P,F)+.12,F);if(D){let X=D.clone().add(k).multiplyScalar(.5),Y=D.distanceTo(k),z=new Tt(Pt(.32,.26,Y+.08,1),f.ridge);z.position.copy(X),z.quaternion.setFromUnitVectors(new A(0,0,1),k.clone().sub(D).normalize()),z.castShadow=!0,_.add(z)}D=k}for(let L=0;L<3;L++){let O=.62+L*.1,P=x.x+(E.x-x.x)*O,F=x.z+(E.z-x.z)*O,k=new Tt(new Bt(.16,.24,.16),f.ridge);k.position.set(P,p.height(P,F)+.36,F),_.add(k)}}return this.root.add(_),{group:_,r:p}}cauldron(t,e,n){let i=this.M,r=this.batch;r.add(Pt(1.2,.2,1.2,2),i.stoneGrey,ot(t,e+.1,n));let o=Va([[0,0],[.42,.02],[.58,.25],[.62,.55],[.56,.72],[.62,.78],[.5,.78]],12);r.add(o,i.bronze,ot(t,e+.2,n)),r.add(new ui(.5,12),i.bronzeDark,ot(t,e+.9,n,0,-Math.PI/2));for(let a of[-1,1])r.add(new Qn(.12,.035,4,8),i.bronzeDark,ot(t+a*.6,e+.6,n,Math.PI/2));this.circles.push({x:t,z:n,r:.7,y:e})}flag(t,e,n,i,r){let o=this.M,a=this.batch,l=4.4;a.add(Pt(.7,.28,.7,1),o.black,ot(t,e+.14,n)),a.add(Pt(.4,.4,.4,1),o.darkWood,ot(t,e+.48,n)),a.add(wn(.055,.07,l,6),o.black,ot(t,e+l/2,n)),a.add(new Ee(.1,.35,6),o.gold,ot(t,e+l+.15,n));let c=new Oe(1.1,1.4,8,4),h=Vt({map:Zu(i),side:ve}),d=new Tt(c,h);d.position.set(t+r*.6,e+l-.9,n),r<0&&(d.scale.x=-1),d.rotation.y=r<0?.25:-.25,d.castShadow=!0,d.receiveShadow=!0,ka(d,Ha.flag),this.root.add(d),this.circles.push({x:t,z:n,r:.4,y:e})}drum(t,e,n){let i=this.M,r=this.batch,o=new Kt;o.position.set(t,0,e),o.rotation.y=n*.5;let a=Pt(.18,2.2,.18,1);for(let d of[-1,1])for(let u of[-1,1]){let f=new Tt(a,i.wood);f.position.set(d*.75,1,u*.75),f.rotation.set(u*.12,0,-d*.12),o.add(f)}for(let d of[-1,1]){let u=new Tt(Pt(1.7,.14,.14,1),i.wood);u.position.set(0,.35,d*.8),o.add(u)}let l=new Kt;l.position.y=2.15;let c=new Tt(Va([[.95,-.75],[1.08,-.4],[1.12,0],[1.08,.4],[.95,.75]],18),i.drumSide);c.rotation.x=Math.PI/2,l.add(c);for(let d of[-1,1]){let u=new Tt(new ui(.95,18),i.drumFace);u.position.z=d*.76,u.rotation.y=d>0?0:Math.PI,l.add(u);for(let f=0;f<14;f++){let p=f/14*Math.PI*2,_=new Tt(new ye(.05,4,3),i.gold);_.position.set(Math.cos(p)*.97,Math.sin(p)*.97,d*.66),l.add(_)}}let h=new Tt(new Ee(.25,.6,6),i.gold);h.position.y=1.35,l.add(h),o.add(l),o.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),this.root.add(o),this.circles.push({x:t,z:e,r:1.25,y:0}),this.drums.push({group:o,body:l,pos:new A(t,0,e),shake:0})}planter(t,e,n,i){let r=this.M,o=this.batch,a=e-t,l=i-n,c=(t+e)/2,h=(n+i)/2,d=.32,u=.3;o.add(Pt(a,d,u,2),r.stoneLight,ot(c,d/2,n+u/2)),o.add(Pt(a,d,u,2),r.stoneLight,ot(c,d/2,i-u/2)),o.add(Pt(u,d,l-u*2,2),r.stoneLight,ot(t+u/2,d/2,h)),o.add(Pt(u,d,l-u*2,2),r.stoneLight,ot(e-u/2,d/2,h));for(let[f,p]of[[t,n],[e,n],[t,i],[e,i]])o.add(Pt(.42,.46,.42,1),r.stoneGrey,ot(f+(f===t?.15:-.15),.23,p+(p===n?.15:-.15)));o.add(Pt(a-u*2,.26,l-u*2,2),r.grass,ot(c,.13,h)),this.rects.push({x0:t,x1:e,z0:n,z1:i,h:.3}),this.grassAreas=this.grassAreas||[],this.grassAreas.push({x0:t+u,x1:e-u,z0:n+u,z1:i-u,y:.26})}pine(t,e,n,i,r,o=!0){let a=this.batch,l=this.foliage,c=this.M,h=ze(r*97+3),d=new A(0,1,0),u=new A(t,e,n),f=new A((h()-.5)*.5,1,(h()-.5)*.5).normalize(),p=5,_=.9*i,g=.3*i,m=[];for(let v=0;v<p;v++){let S=g*.8,w=u.clone().addScaledVector(f,_),R=new ne(S,g,_*1.05,7),x=new Ae().setFromUnitVectors(d,f);a.add(R,c.bark,new jt().compose(u.clone().add(w).multiplyScalar(.5),x,new A(1,1,1))),m.push(w.clone()),u=w,g=S,f.x+=(h()-.5)*.7,f.z+=(h()-.5)*.5,f.y=1,f.normalize()}let M=(v,S,w,R,x)=>{let E=new Ze(1,1);l.add(E,x,new jt().compose(v,new Ae().setFromEuler(new un(0,h()*6,0)),new A(S,w,R)))};for(let v=2;v<p;v++){let S=m[v-1],w=2;for(let R=0;R<w;R++){let x=h()*Math.PI*2,E=(1.2+h()*1)*i*(1-(v-2)*.18),I=new A(Math.cos(x),.25+h()*.3,Math.sin(x)).normalize(),D=S.clone().addScaledVector(I,E),L=new ne(.06*i,.11*i,E,5),O=new Ae().setFromUnitVectors(d,I);a.add(L,c.bark,new jt().compose(S.clone().add(D).multiplyScalar(.5),O,new A(1,1,1)));let P=(.8+h()*.4)*i;M(D.clone().add(new A(0,.15*i,0)),1.25*P,.42*P,1.05*P,c.leaf),M(D.clone().add(new A(.1,.42*i,.05)),.85*P,.3*P,.75*P,c.leaf2)}}let T=m[p-1];M(T.clone().add(new A(0,.2*i,0)),1.5*i,.5*i,1.3*i,c.leaf),M(T.clone().add(new A(.1,.55*i,0)),1*i,.35*i,.9*i,c.leaf2),o&&this.circles.push({x:t,z:n,r:.45*i,y:e})}shrub(t,e,n){let i=this.foliage,r=this.M,o=ze(Math.floor(t*31+n*7));for(let a=0;a<3;a++)i.add(new Ze(1,1),a?r.leaf2:r.leaf,new jt().compose(new A(t+(o()-.5)*.6,e+.3+a*.12,n+(o()-.5)*.6),new Ae,new A(.55,.42,.5)))}flowerPot(t,e){let n=this.M,i=this.batch;i.add(Pt(.7,.5,.7,2),n.stoneLight,ot(t,.25,e)),i.add(Pt(.8,.08,.8,2),n.stoneGrey,ot(t,.52,e)),i.add(Va([[.18,0],[.3,.1],[.34,.3],[.3,.38]],10),n.pot,ot(t,.56,e));let r=ze(Math.floor(t*13+e*5+99));for(let o=0;o<6;o++){let a=r()*Math.PI*2,l=r()*.2;i.add(new Ze(.09,0),o%3?n.pink:n.orange,ot(t+Math.cos(a)*l,.98+r()*.1,e+Math.sin(a)*l))}i.add(new Ze(.22,0),n.leaf2,ot(t,.9,e)),this.circles.push({x:t,z:e,r:.45,y:0})}stoneLantern(t,e,n){let i=this.M,r=this.batch;r.add(wn(.42,.46,.2,8),i.stoneGrey,ot(t,e+.1,n)),r.add(wn(.3,.38,.16,8),i.stoneLight,ot(t,e+.28,n)),r.add(wn(.13,.15,.9,8),i.stoneLight,ot(t,e+.8,n)),r.add(wn(.36,.2,.2,8),i.stoneLight,ot(t,e+1.32,n)),r.add(wn(.22,.22,.42,8),i.lampGlow,ot(t,e+1.63,n));for(let o=0;o<4;o++){let a=o/4*Math.PI*2+Math.PI/4;r.add(Pt(.1,.44,.1,1),i.stoneLight,ot(t+Math.cos(a)*.24,e+1.63,n+Math.sin(a)*.24))}r.add(new Ee(.52,.32,8),i.stoneGrey,ot(t,e+2,n)),r.add(new ye(.1,6,4),i.stoneGrey,ot(t,e+2.22,n)),this.lanterns.push(new A(t,e+1.65,n)),this.circles.push({x:t,z:n,r:.45,y:e})}pond(t,e,n,i){let r=this.M,o=this.batch,a=e-t,l=i-n,c=(t+e)/2,h=(n+i)/2,d=.4,u=.35;o.add(Pt(a,u,d,2),r.blockDark,ot(c,u/2,n+d/2)),o.add(Pt(a,u,d,2),r.blockDark,ot(c,u/2,i-d/2)),o.add(Pt(d,u,l-2*d,2),r.blockDark,ot(t+d/2,u/2,h)),o.add(Pt(d,u,l-2*d,2),r.blockDark,ot(e-d/2,u/2,h));let f=new Tt(new Oe(a-2*d,l-2*d),zx());f.rotation.x=-Math.PI/2,f.position.set(c,.2,h),this.root.add(f),this.water=f;let p=ze(5);for(let _=0;_<9;_++){let g=t+.9+p()*(a-1.8),m=n+.9+p()*(l-1.8),M=.3+p()*.25;o.add(wn(M,M,.03,9),r.lotus,ot(g,.23,m)),p()<.45&&o.add(new Ee(.12,.22,5),r.pink,ot(g+.1,.36,m))}this.blockRects.push({x0:t-.1,x1:e+.1,z0:n-.1,z1:i+.1})}corridor(t){let e=this.M,n=this.batch,i=t*22,r=t*26.2,o=(i+r)/2,a=-34,l=22,c=l-a,h=(a+l)/2;n.add(Pt(4.4,.5,c,2),e.block,ot(o,.25,h)),n.add(Pt(4.4,.02,c,4),e.slab,ot(o,.51,h)),n.add(Pt(.4,3.6,c,2),e.plaster,ot(t*25.9,2.3,h));let d=wn(.17,.19,3.3,8);for(let u=a+1;u<=l-1;u+=3)n.add(d,e.wood,ot(t*22.5,2.15,u)),n.add(Pt(.4,.14,.4,1),e.stoneLight,ot(t*22.5,.56,u));n.add(Pt(.3,.36,c,4),e.dancheong,ot(t*22.5,3.85,h)),this.roof({cx:t*24.2,cy:4.05,cz:h,w:3.8,d:c,h:1.25,overhang:1,lift:0,ridge:!0,power:1.5})}northWall(){let t=this.M;this.batch.add(Pt(44,3.2,.6,2),t.plaster,ot(0,1.6,-33.9)),this.roof({cx:0,cy:3.2,cz:-33.9,w:44,d:.5,h:.5,overhang:.55,lift:0,ridge:!0,power:1.2})}southWall(){let t=this.M,e=this.batch;for(let n of[-1,1]){let i=n*3.9,r=n*22,o=(i+r)/2,a=Math.abs(r-i);e.add(Pt(a,1.2,.7,2),t.block,ot(o,.6,21.9)),e.add(Pt(a+.1,.12,.85,2),t.stoneLight,ot(o,1.26,21.9)),this.blockRects.push({x0:Math.min(i,r),x1:Math.max(i,r),z0:21.4,z1:22.4}),e.add(Pt(.7,3.4,.7,1),t.wood,ot(n*3.6,1.7,21.9)),e.add(Pt(1,.3,1,1),t.stoneLight,ot(n*3.6,.15,21.9)),this.circles.push({x:n*3.6,z:21.9,r:.5,y:0})}e.add(Pt(7.9,.5,.8,4),t.dancheong,ot(0,3.5,21.9)),this.roof({cx:0,cy:3.75,cz:21.9,w:8,d:1.1,h:.9,overhang:.8,lift:.3,ridge:!0})}scatterGrass(){let t=this.grassAreas,e=0;for(let f of t)e+=Math.floor((f.x1-f.x0)*(f.z1-f.z0)*26);let n=new ue;n.setAttribute("position",new Ft([-.05,0,0,.05,0,0,0,.38,0],3)),n.setAttribute("normal",new Ft([0,1,0,0,1,0,0,1,0],3)),n.setAttribute("color",new Ft([.55,.62,.5,.55,.62,.5,1.15,1.12,.95],3));let i=Vt({color:16777215,vertexColors:!0,side:ve}),r=new Js(n,i,e),o=new jt,a=new Ae,l=new un,c=new xt,h=ze(99),d=["#6f9c48","#5d8c3e","#86ad52","#7aa04a"].map(f=>new xt(f)),u=0;for(let f of t){let p=Math.floor((f.x1-f.x0)*(f.z1-f.z0)*26);for(let _=0;_<p;_++){let g=f.x0+h()*(f.x1-f.x0),m=f.z0+h()*(f.z1-f.z0);l.set(0,h()*Math.PI,0);let M=.7+h()*.7;o.compose(new A(g,f.y,m),a.setFromEuler(l),new A(M,M*(.8+h()*.6),M)),r.setMatrixAt(u,o);let T=Math.sin(g*.7)*Math.cos(m*.9)*.5+.5;c.copy(d[Math.floor(h()*d.length)]).lerp(new xt("#a8b85a"),T*.35),h()<.015&&c.set(h()<.5?"#f2eee0":"#f0c850"),r.setColorAt(u,c),u++}}r.receiveShadow=!0,r.castShadow=!1,r.userData.noOutline=!0,ka(r,Ha.grass,{shadow:!1}),this.root.add(r)}buildNav(){let i=Math.ceil(88),r=Math.ceil(64/.5),o=i*r,a=new Float32Array(o),l=[new Uint8Array(o),new Uint8Array(o)];for(let c=0;c<r;c++)for(let h=0;h<i;h++){let d=-22+(h+.5)*.5,u=-34+(c+.5)*.5,f=c*i+h,p=a[f]=this.heightAt(d,u);l[0][f]=this.isBlocked(d,u,Is[0],p)?0:1,l[1][f]=this.isBlocked(d,u,Is[1],p)?0:1}this.nav={cs:.5,x0:-22,z0:-34,nx:i,nz:r,h:a,ok:l,dist:[new Float32Array(o),new Float32Array(o)],target:[-1,-1],heap:new Int32Array(o*8),hd:new Float32Array(o*8)}}navCell(t,e){let n=this.nav,i=Math.floor((t-n.x0)/n.cs),r=Math.floor((e-n.z0)/n.cs);return i<0||r<0||i>=n.nx||r>=n.nz?-1:r*n.nx+i}navLink(t,e,n){let i=this.nav;return i.ok[n][e]&&Math.abs(i.h[t]-i.h[e])<=.35}updateFlow(t,e,n){let i=this.nav;if(!i)return;let r=this.navCell(t,e);if(r<0)return;if(!i.ok[n][r]){let f=-1,p=1e9,_=r%i.nx,g=Math.floor(r/i.nx);for(let m=-4;m<=4;m++)for(let M=-4;M<=4;M++){let T=_+M,v=g+m;if(T<0||v<0||T>=i.nx||v>=i.nz)continue;let S=v*i.nx+T;i.ok[n][S]&&Math.abs(i.h[S]-i.h[r])<.5&&M*M+m*m<p&&(p=M*M+m*m,f=S)}if(f<0)return;r=f}if(i.target[n]===r)return;i.target[n]=r;let o=i.dist[n];o.fill(1/0),o[r]=0;let a=i.heap,l=i.hd,c=0,h=(f,p)=>{let _=c++;for(;_>0;){let g=_-1>>1;if(l[g]<=p)break;a[_]=a[g],l[_]=l[g],_=g}a[_]=f,l[_]=p},d=()=>{let f=a[0],p=a[--c],_=l[c],g=0;for(;;){let m=2*g+1;if(m>=c||(m+1<c&&l[m+1]<l[m]&&m++,l[m]>=_))break;a[g]=a[m],l[g]=l[m],g=m}return a[g]=p,l[g]=_,f};h(r,0);let u=i.nx;for(;c>0;){let f=l[0],p=d();if(f>o[p])continue;let _=p%u,g=(p-_)/u;for(let m=0;m<8;m++){let M=Uc[m],T=Fc[m],v=_+M,S=g+T;if(v<0||S<0||v>=u||S>=i.nz)continue;let w=S*u+v;if(!this.navLink(p,w,n)||M&&T&&(!this.navLink(p,g*u+v,n)||!this.navLink(p,S*u+_,n)))continue;let R=f+(M&&T?1.4142:1);R<o[w]&&(o[w]=R,h(w,R))}}}navDir(t,e){let n=this.nav;if(!n)return null;let i=this.navCell(t.x,t.z);if(i<0)return null;let r=n.dist[e];if(!isFinite(r[i])){let p=-1,_=1/0,g=i%n.nx,m=Math.floor(i/n.nx);for(let M=0;M<8;M++){let T=g+Uc[M],v=m+Fc[M];if(T<0||v<0||T>=n.nx||v>=n.nz)continue;let S=v*n.nx+T;r[S]<_&&Math.abs(n.h[S]-n.h[i])<=.5&&(_=r[S],p=S)}if(p<0)return null;i=p}let o=[],a=i;for(let p=0;p<6;p++){let _=a%n.nx,g=(a-_)/n.nx,m=a,M=r[a];for(let T=0;T<8;T++){let v=_+Uc[T],S=g+Fc[T];if(v<0||S<0||v>=n.nx||S>=n.nz)continue;let w=S*n.nx+v;r[w]<M&&this.navLink(a,w,e)&&(M=r[w],m=w)}if(m===a)break;a=m,o.push(a)}if(!o.length)return null;let l=p=>{let _=p%n.nx,g=(p-_)/n.nx;return[n.x0+(_+.5)*n.cs,n.z0+(g+.5)*n.cs]},c,h;for(let p=o.length-1;p>=0&&([c,h]=l(o[p]),!(p===0||this.clearLine(t.x,t.z,c,h,Is[e])));p--);let d=c-t.x,u=h-t.z,f=Math.hypot(d,u);return f<.05?null:{x:d/f,z:u/f,dist:r[i]*n.cs}}clearLine(t,e,n,i,r){let o=Math.hypot(n-t,i-e),a=Math.ceil(o/.35),l=this.heightAt(t,e);for(let c=1;c<=a;c++){let h=c/a,d=t+(n-t)*h,u=e+(i-e)*h;if(this.isBlocked(d,u,r,l))return!1;l=this.heightAt(d,u)}return!0}setNight(t){for(let e of this.glowMats)e.mat.emissive.copy(e.color).multiplyScalar(t*e.k)}update(t,e){for(let n of this.drums)if(n.shake>0){n.shake=Math.max(0,n.shake-t*2.5);let i=n.shake;n.body.scale.set(1+Math.sin(e*60)*.05*i,1+Math.sin(e*60+1)*.05*i,1),n.body.rotation.z=Math.sin(e*40)*.04*i}this.water&&(this.water.material.uniforms.uNight.value=yn.night.value)}},Ox=[[1,0],[-1,0],[0,1],[0,-1]],Is=[.36,.7],Uc=[1,-1,0,0,1,1,-1,-1],Fc=[0,0,1,-1,1,-1,1,-1];function ot(s,t,e,n=0,i=0,r=0,o=null){let a=new jt,l=Array.isArray(o)?new A(...o):new A(1,1,1);return a.compose(new A(s,t,e),new Ae().setFromEuler(new un(i,n,r,"YXZ")),l),a}function zx(){return new Ie({uniforms:{uTime:yn.time,uNight:{value:0}},vertexShader:`
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
      }`})}var kx=`
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
}`,Hx=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  if (vAlpha <= 0.01) discard;
  gl_FragColor = vec4(vColor * vAlpha, vAlpha);
}`,Xa=class{constructor(t,e,n){this.cap=e,this.list=[];let i=this.geo=new ue;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),i.setAttribute("position",new Fe(this.pos,3).setUsage(bs)),i.setAttribute("aColor",new Fe(this.col,3).setUsage(bs)),i.setAttribute("aSize",new Fe(this.size,1).setUsage(bs)),i.setAttribute("aAlpha",new Fe(this.alpha,1).setUsage(bs));let r=new Ie({vertexShader:kx,fragmentShader:Hx,transparent:!0,depthWrite:!1,blending:n?Pn:Go,blendSrc:Vo,blendDst:ur});this.points=new $s(i,r),this.points.frustumCulled=!1,this.points.renderOrder=n?20:10,t.add(this.points)}emit(t){this.list.length>=this.cap&&this.list.shift();let e=t.color instanceof xt?t.color:new xt(t.color??16777215);this.list.push({x:t.x,y:t.y,z:t.z,vx:t.vx||0,vy:t.vy||0,vz:t.vz||0,g:t.g??0,drag:t.drag??0,life:t.life??1,max:t.life??1,size:t.size??2,endSize:t.endSize??t.size??2,r:e.r,gg:e.g,b:e.b,c2:t.color2?new xt(t.color2):null,alpha:t.alpha??1,flicker:t.flicker||0,floor:t.floor??-100,wob:t.wob||0,seed:Math.random()*100})}update(t,e){let n=this.list,i=0;for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.life-=t,o.life<=0){n.splice(r,1);continue}o.vy-=o.g*t;let a=Math.exp(-o.drag*t);o.vx*=a,o.vy*=a,o.vz*=a,o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.wob&&(o.x+=Math.sin(e*2+o.seed)*o.wob*t,o.z+=Math.cos(e*1.7+o.seed)*o.wob*t),o.y<o.floor&&(o.y=o.floor,o.vy*=-.3,o.vx*=.6,o.vz*=.6)}for(let r of n){if(i>=this.cap)break;let o=r.life/r.max;this.pos[i*3]=r.x,this.pos[i*3+1]=r.y,this.pos[i*3+2]=r.z;let a=r.r,l=r.gg,c=r.b;r.c2&&(a=r.c2.r+(a-r.c2.r)*o,l=r.c2.g+(l-r.c2.g)*o,c=r.c2.b+(c-r.c2.b)*o),this.col[i*3]=a,this.col[i*3+1]=l,this.col[i*3+2]=c,this.size[i]=Math.max(1,Math.round(r.endSize+(r.size-r.endSize)*o));let h=r.alpha*Math.min(1,o*3);r.flicker&&(h*=1-r.flicker*(Math.sin(e*30+r.seed*10)*.5+.5)),this.alpha[i]=h,i++}this.geo.setDrawRange(0,i);for(let r of["position","aColor","aSize","aAlpha"])this.geo.attributes[r].needsUpdate=!0}},Bc=`
varying vec2 vL;
void main(){ vL = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,Gx=`
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
}`,Vx=`
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
}`,Wx=`
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
}`,qa=class{constructor(t,e){this.scene=t,this.pixel=e,this.add=new Xa(t,2500,!0),this.norm=new Xa(t,1500,!1),this.arcs=[],this.rings=[],this.numbers=[],this.flashes=[],this.ghosts=[],this.bolts=[],this.numLayer=document.getElementById("numbers"),this.time=0}spark(t,e,n,i=10,r="#fff6c8",o=6){for(let a=0;a<i;a++){let l=Math.random()*Math.PI*2,c=G(-.2,1),h=o*G(.4,1);this.add.emit({x:t,y:e,z:n,vx:Math.cos(l)*h,vy:c*h*.8,vz:Math.sin(l)*h,g:12,drag:4,life:G(.15,.35),size:3,endSize:1,color:r,color2:"#ff8a30"})}}dust(t,e,n,i=4,r="#c8bca0"){for(let o=0;o<i;o++){let a=Math.random()*Math.PI*2;this.norm.emit({x:t+G(-.15,.15),y:e+.05,z:n+G(-.15,.15),vx:Math.cos(a)*.8,vy:G(.3,.9),vz:Math.sin(a)*.8,drag:3,life:G(.3,.55),size:3,endSize:1,color:r,alpha:.75})}}blueFire(t,e,n,i=20,r=.5){for(let o=0;o<i;o++)this.add.emit({x:t+G(-r,r),y:e+G(0,.4),z:n+G(-r,r),vx:G(-.4,.4),vy:G(1.2,3.2),vz:G(-.4,.4),drag:1.5,life:G(.35,.8),size:G(2,4),endSize:1,color:"#9ff0ff",color2:"#2050ff",flicker:.3})}smoke(t,e,n,i=8){for(let r=0;r<i;r++)this.norm.emit({x:t+G(-.4,.4),y:e+G(0,.5),z:n+G(-.4,.4),vx:G(-.6,.6),vy:G(.5,1.4),vz:G(-.6,.6),drag:2,life:G(.5,.9),size:5,endSize:2,color:"#d8d4e8",alpha:.7})}coins(t,e,n,i=6){for(let r=0;r<i;r++){let o=Math.random()*Math.PI*2;this.add.emit({x:t,y:e+.4,z:n,vx:Math.cos(o)*G(1,2.5),vy:G(3,5),vz:Math.sin(o)*G(1,2.5),g:14,life:G(.7,1.1),size:2,color:"#ffe070",floor:e+.02,flicker:.5})}}slash(t,e,n=0,i={}){let r=i.inner??.45,o=i.outer??1.9,a=i.len??2.8,l=-Math.PI/2-a/2,c=new nr(r,o,24,1,l,a),h=new Ie({vertexShader:Bc,fragmentShader:Gx,uniforms:{uProg:{value:0},uStart:{value:l},uLen:{value:a},uInner:{value:r},uOuter:{value:o},uColor:{value:new xt(i.color||"#e8fbff")},uFade:{value:1},uTail:{value:i.static?1.2:.55}},transparent:!0,depthWrite:!1,blending:Pn,side:ve}),d=new Tt(c,h),u=new Kt;return u.add(d),u.position.copy(t),u.rotation.y=e,d.rotation.x=-Math.PI/2,n===1&&(d.scale.x=-1),n===2&&(d.rotation.set(0,0,0),d.rotation.y=Math.PI/2,d.rotation.z=-Math.PI/2+0,u.position.y+=.2),d.renderOrder=30,this.scene.add(u),i.scale&&u.scale.setScalar(i.scale),this.arcs.push({g:u,mat:h,t:0,dur:i.dur??.2,move:i.move||null,static:!!i.static,fadeAll:!!i.fadeAll,kill:!1}),u}cross(t,e="#bff4ff",n=2.2,i=.38){let r=new Kt;r.position.copy(t),r.rotation.x=-Math.PI/4;let o=[];for(let[a,l]of[[.75,1],[-.75,.8]]){let c=new Ie({vertexShader:Bc,fragmentShader:Wx,uniforms:{uColor:{value:new xt(e)},uAlpha:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Pn,side:ve}),h=new Tt(new Oe(2,2),c);h.rotation.z=a,h.scale.set(n*.5*l,.14,1),h.renderOrder=40,r.add(h),o.push(c)}this.scene.add(r),this.flashes.push({g:r,mats:o,t:0,dur:i,size:n})}bolt(t,e=1){let n=new Kt,i=new Re({color:"#ffffff",transparent:!0,blending:Pn,depthWrite:!1}),r=new Re({color:"#8a6aff",transparent:!0,opacity:.55,blending:Pn,depthWrite:!1}),o=new A(t.x+G(-1.5,1.5),t.y+13,t.z+G(-1.5,1.5)),a=9;for(let l=1;l<=a;l++){let c=l/a,h=new A(t.x+(o.x-t.x)*0+(l<a?G(-.7,.7)*(1-c):0),t.y+13*(1-c),t.z+(l<a?G(-.7,.7)*(1-c):0)),d=o.clone().add(h).multiplyScalar(.5),u=o.distanceTo(h),f=h.clone().sub(o).normalize(),p=new Ae().setFromUnitVectors(new A(0,1,0),f);for(let[_,g]of[[r,.42*e],[i,.16*e]]){let m=new Tt(new Bt(g,u+.05,g),_);m.position.copy(d),m.quaternion.copy(p),m.renderOrder=45,n.add(m)}if(l>2&&l<a-1&&Math.random()<.45){let _=G(.6,1.4),g=new A(G(-1,1),-G(.3,1),G(-1,1)).normalize(),m=new Tt(new Bt(.1*e,_,.1*e),i);m.position.copy(h).addScaledVector(g,_/2),m.quaternion.setFromUnitVectors(new A(0,1,0),g),n.add(m)}o=h}this.scene.add(n),this.bolts.push({g:n,mats:[i,r],t:0,dur:.32}),this.ring(t,1.2*e,"#ffffff",.25)}ghost(t,e="#5ab8ff",n=.28){let i=new Re({color:new xt(e),transparent:!0,opacity:.55,blending:Pn,depthWrite:!1}),r=t.root.clone(!0);r.traverse(o=>{o.isMesh&&(o.material=i,o.castShadow=!1,o.receiveShadow=!1)}),this.scene.add(r),this.ghosts.push({c:r,mat:i,t:0,dur:n})}ring(t,e,n="#ffffff",i=.35,r=0){let o=new ui(1,32),a=new Ie({vertexShader:Bc,fragmentShader:Vx,uniforms:{uColor:{value:new xt(n)},uAlpha:{value:1},uProg:{value:0},uMode:{value:r}},transparent:!0,depthWrite:!1,blending:Pn}),l=new Tt(o,a);l.rotation.x=-Math.PI/2,l.position.copy(t),l.position.y+=.04,l.renderOrder=25,this.scene.add(l);let c={m:l,mat:a,t:0,dur:i,radius:e,mode:r,manual:r===1};return l.scale.setScalar(r===1?e:.01),this.rings.push(c),c}removeRing(t){t.dead=!0}number(t,e,n="normal"){let i=document.createElement("div");i.className="dmg "+n,i.textContent=e,this.numLayer.appendChild(i),this.numbers.push({el:i,p:t.clone(),vy:2.6,vx:G(-.6,.6),t:0,life:n==="heal"?1:.85})}update(t){this.time+=t,this.add.update(t,this.time),this.norm.update(t,this.time);for(let e=this.arcs.length-1;e>=0;e--){let n=this.arcs[e];n.t+=t;let i=n.t/n.dur;n.mat.uniforms.uProg.value=n.static?1:Math.min(1.55,i*1.55),n.mat.uniforms.uFade.value=n.fadeAll?Math.max(0,1-i)*(n.alpha??1):i>.7?Math.max(0,1-(i-.7)/.3):1,n.move&&n.move(n,t),(i>=1||n.kill)&&(this.scene.remove(n.g),n.mat.dispose(),n.g.children[0].geometry.dispose(),this.arcs.splice(e,1))}for(let e=this.rings.length-1;e>=0;e--){let n=this.rings[e];if(n.t+=t,!n.manual){let i=n.t/n.dur;n.m.scale.setScalar(.2+n.radius*Math.sqrt(i)),n.mat.uniforms.uAlpha.value=1-i,i>=1&&(n.dead=!0)}n.dead&&(this.scene.remove(n.m),n.mat.dispose(),n.m.geometry.dispose(),this.rings.splice(e,1))}for(let e=this.flashes.length-1;e>=0;e--){let n=this.flashes[e];n.t+=t;let i=n.t/n.dur,r=Math.min(1,n.t/.06);n.g.children.forEach((o,a)=>{o.scale.x=n.size*.5*(a?.8:1)*(.3+.7*r),o.scale.y=.14*(1-i*.7)});for(let o of n.mats)o.uniforms.uAlpha.value=Math.max(0,1-i*i);if(i>=1){this.scene.remove(n.g);for(let o of n.mats)o.dispose();n.g.children.forEach(o=>o.geometry.dispose()),this.flashes.splice(e,1)}}for(let e=this.bolts.length-1;e>=0;e--){let n=this.bolts[e];n.t+=t;let i=n.t/n.dur;n.g.visible=i<.35||Math.floor(n.t*40)%2===0,n.mats[0].opacity=Math.max(0,1-i),n.mats[1].opacity=.55*Math.max(0,1-i),i>=1&&(this.scene.remove(n.g),n.g.traverse(r=>r.geometry&&r.geometry.dispose()),n.mats.forEach(r=>r.dispose()),this.bolts.splice(e,1))}for(let e=this.ghosts.length-1;e>=0;e--){let n=this.ghosts[e];n.t+=t;let i=n.t/n.dur;n.mat.opacity=.55*Math.max(0,1-i),i>=1&&(this.scene.remove(n.c),n.mat.dispose(),this.ghosts.splice(e,1))}for(let e=this.numbers.length-1;e>=0;e--){let n=this.numbers[e];n.t+=t,n.vy-=7*t,n.p.y+=n.vy*t,n.p.x+=n.vx*t;let i=this.pixel.project(n.p),r=this.pixel.pixelSize,o=Math.round(i.x/r)*r,a=Math.round(i.y/r)*r,l=n.t<.08?1.6-n.t*7:1;n.el.style.transform=`translate(${o}px, ${a}px) translate(-50%, -50%) scale(${l.toFixed(2)})`,n.el.style.opacity=n.t>n.life*.6?String(1-(n.t-n.life*.6)/(n.life*.4)):"1",n.t>=n.life&&(n.el.remove(),this.numbers.splice(e,1))}}};var Ya=class{constructor(){this.ctx=null,this.musicOn=!0,this.mood="day",this.nextNote=0,this.step=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.55,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=.32;let n=e.createDelay();n.delayTime.value=.28;let i=e.createGain();i.gain.value=.3;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=2200,this.music.connect(this.master),this.music.connect(n),n.connect(r),r.connect(i),i.connect(n),r.connect(this.master);let o=e.sampleRate;this.noiseBuf=e.createBuffer(1,o,e.sampleRate);let a=this.noiseBuf.getChannelData(0);for(let l=0;l<o;l++)a[l]=Math.random()*2-1;this.nextNote=e.currentTime+.3}noise(t,{type:e="bandpass",f0:n=1e3,f1:i=1e3,q:r=1,gain:o=.3,attack:a=.005,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime,d=c.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.7+Math.random()*.6;let u=c.createBiquadFilter();u.type=e,u.Q.value=r,u.frequency.setValueAtTime(n,h),u.frequency.exponentialRampToValueAtTime(Math.max(20,i),h+t);let f=c.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(o,h+a),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(f),f.connect(l||this.sfx),d.start(h,Math.random()*.5),d.stop(h+t+.05)}tone(t,{type:e="sine",f0:n=440,f1:i=null,gain:r=.3,attack:o=.005,at:a=0,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+a,d=c.createOscillator();d.type=e,d.frequency.setValueAtTime(n,h),i&&d.frequency.exponentialRampToValueAtTime(i,h+t);let u=c.createGain();u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(r,h+o),u.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(l||this.sfx),d.start(h),d.stop(h+t+.05)}play(t){if(this.ctx)switch(t){case"swing":this.noise(.16,{f0:700,f1:3200,q:2.5,gain:.22});break;case"swing3":this.noise(.22,{f0:500,f1:3800,q:2.2,gain:.3}),this.tone(.2,{type:"triangle",f0:900,f1:1800,gain:.05});break;case"hit":this.tone(.14,{f0:160,f1:50,gain:.5}),this.noise(.08,{type:"highpass",f0:2500,f1:1500,gain:.25});break;case"crit":this.tone(.2,{f0:200,f1:45,gain:.6}),this.noise(.12,{type:"highpass",f0:3e3,f1:1200,gain:.3}),this.tone(.18,{type:"square",f0:1320,f1:1760,gain:.04,at:.02});break;case"drum":this.tone(1.1,{f0:95,f1:38,gain:.95,attack:.004}),this.tone(.6,{f0:180,f1:70,gain:.3}),this.noise(.35,{type:"lowpass",f0:900,f1:120,gain:.5});break;case"draw":this.noise(.22,{type:"highpass",f0:2500,f1:6e3,gain:.22,attack:.01}),this.tone(.25,{type:"triangle",f0:2600,f1:3400,gain:.05}),this.noise(.18,{f0:900,f1:3500,q:2.5,gain:.25,attack:.02});break;case"sheathe":this.tone(.05,{type:"square",f0:2200,f1:1400,gain:.06}),this.noise(.06,{type:"highpass",f0:3e3,f1:2e3,gain:.2}),this.tone(.08,{type:"square",f0:1300,f1:900,gain:.04,at:.04});break;case"bowdraw":this.noise(.22,{f0:300,f1:900,q:6,gain:.08,attack:.08});break;case"bow":this.tone(.18,{type:"triangle",f0:420,f1:180,gain:.18}),this.noise(.12,{f0:2500,f1:800,q:1.5,gain:.2});break;case"bowskill":for(let e=0;e<4;e++)this.tone(.16,{type:"triangle",f0:460-e*30,f1:200,gain:.12,at:e*.04});this.noise(.6,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.03});break;case"arrowhit":this.noise(.06,{type:"highpass",f0:3e3,f1:1500,gain:.18}),this.tone(.07,{f0:260,f1:120,gain:.25});break;case"cast":this.noise(.18,{f0:800,f1:2400,q:2,gain:.15}),this.tone(.25,{type:"sine",f0:880,f1:1320,gain:.06});break;case"fire":this.noise(.4,{type:"lowpass",f0:2400,f1:200,gain:.35,attack:.005}),this.tone(.2,{f0:140,f1:60,gain:.3});break;case"chant":[523,659,784].forEach((e,n)=>this.tone(.35,{type:"sine",f0:e,gain:.06,at:n*.08}));break;case"charge":this.noise(.4,{f0:200,f1:3e3,q:4,gain:.12,attack:.3});break;case"thunder":this.noise(.12,{type:"highpass",f0:5e3,f1:2e3,gain:.4,attack:.002}),this.noise(1.2,{type:"lowpass",f0:900,f1:60,gain:.6,attack:.01}),this.tone(.9,{f0:80,f1:30,gain:.5});break;case"blink":this.tone(.25,{type:"sine",f0:1600,f1:400,gain:.08}),this.noise(.25,{f0:3e3,f1:600,q:3,gain:.15});break;case"skill":this.noise(.5,{f0:300,f1:5e3,q:1.8,gain:.32,attack:.02}),this.tone(.45,{type:"sawtooth",f0:220,f1:1760,gain:.05,attack:.02}),this.tone(.6,{type:"triangle",f0:1320,f1:2640,gain:.07,at:.05}),this.tone(.3,{f0:120,f1:50,gain:.4});break;case"skillhit":this.tone(.25,{type:"square",f0:1800,f1:600,gain:.05}),this.noise(.18,{type:"highpass",f0:4e3,f1:1500,gain:.25});break;case"burst":this.noise(.5,{type:"lowpass",f0:3e3,f1:200,gain:.25}),this.tone(.4,{type:"triangle",f0:1760,f1:440,gain:.05});break;case"impact":this.tone(.3,{f0:110,f1:40,gain:.45}),this.noise(.2,{type:"lowpass",f0:1200,f1:150,gain:.3});break;case"dash":this.noise(.25,{type:"lowpass",f0:2400,f1:300,gain:.25,attack:.03});break;case"wave":this.noise(.45,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.05}),this.tone(.4,{type:"triangle",f0:600,f1:1400,gain:.08});break;case"hurt":this.tone(.2,{type:"square",f0:260,f1:90,gain:.12}),this.noise(.12,{f0:1200,f1:400,gain:.25});break;case"poof":this.noise(.4,{type:"lowpass",f0:1800,f1:200,gain:.35,attack:.01}),this.tone(.25,{type:"triangle",f0:500,f1:1500,gain:.08});break;case"spawn":this.tone(.5,{type:"sine",f0:300,f1:900,gain:.08,attack:.1}),this.noise(.5,{f0:300,f1:1500,q:3,gain:.12,attack:.15});break;case"laugh":for(let e=0;e<3;e++)this.tone(.09,{type:"square",f0:760-e*40,f1:620-e*40,gain:.04,at:e*.11});break;case"slam":this.tone(.8,{f0:70,f1:28,gain:.9}),this.noise(.6,{type:"lowpass",f0:600,f1:80,gain:.6});break;case"orb":this.tone(.25,{type:"sine",f0:900,f1:400,gain:.08});break;case"talk":this.tone(.04,{type:"square",f0:520+Math.random()*80,gain:.025});break;case"coin":this.tone(.08,{type:"square",f0:1320,gain:.04}),this.tone(.15,{type:"square",f0:1760,gain:.04,at:.07});break;case"victory":[523,659,784,1046].forEach((e,n)=>this.tone(.5,{type:"triangle",f0:e,gain:.12,at:n*.12,dest:this.sfx}));break;case"block":this.tone(.06,{type:"square",f0:1800,f1:1200,gain:.05});break}}pluck(t,e,n=.18){let i=this.ctx,r=i.createOscillator();r.type="triangle",r.frequency.setValueAtTime(t*1.01,e),r.frequency.exponentialRampToValueAtTime(t,e+.08),Math.random()<.3&&(r.frequency.setValueAtTime(t,e+.25),r.frequency.linearRampToValueAtTime(t*1.06,e+.4),r.frequency.linearRampToValueAtTime(t,e+.6));let o=i.createOscillator();o.type="sine",o.frequency.value=t*2;let a=i.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(n,e+.004),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let l=i.createGain();l.gain.value=.25,r.connect(a),o.connect(l),l.connect(a),a.connect(this.music),r.start(e),o.start(e),r.stop(e+1.2),o.stop(e+1.2)}janggu(t,e){let n=this.ctx;if(e==="deong"){let a=n.createOscillator();a.frequency.setValueAtTime(110,t),a.frequency.exponentialRampToValueAtTime(55,t+.2);let l=n.createGain();l.gain.setValueAtTime(.35,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.3),a.connect(l),l.connect(this.music),a.start(t),a.stop(t+.35)}let i=n.createBufferSource();i.buffer=this.noiseBuf;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=e==="kung"?400:2400,r.Q.value=1.5;let o=n.createGain();o.gain.setValueAtTime(e==="kung"?.3:.18,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.08),i.connect(r),r.connect(o),o.connect(this.music),i.start(t,Math.random()),i.stop(t+.1)}update(){let t=this.ctx;if(!t||!this.musicOn)return;let e=this.mood==="battle"?146.83:196,n=[0,2,5,7,9,12,14,17,19],i=this.mood==="battle"?.22:.42;for(;this.nextNote<t.currentTime+.25;){let r=this.nextNote,o=this.step,a=this.mood==="battle"?["deong",0,"tta","kung","deong",0,"tta","tta"]:["deong",0,0,"kung",0,"tta",0,0,"kung",0,"tta",0],l=a[o%a.length];l&&this.janggu(r,l);let c=this.mood==="battle"?1:2;if(o%c===0&&Math.random()<(this.mood==="battle"?.75:.6)){this.melIdx=Math.max(0,Math.min(n.length-1,(this.melIdx??4)+Math.floor(Math.random()*5)-2));let h=e*Math.pow(2,n[this.melIdx]/12);this.pluck(h,r,this.mood==="battle"?.13:.16),Math.random()<.25&&this.pluck(h/2,r,.1)}o%16===0&&this.pluck(e/2,r,.12),this.step++,this.nextNote+=i}}toggleMusic(){return this.musicOn=!this.musicOn,this.music&&(this.music.gain.value=this.musicOn?.32:0),this.musicOn}};var Za=class{constructor(t){this.game=t;let e=n=>document.getElementById(n);this.el={hud:e("hud"),hpFill:e("hp-fill"),hpLag:e("hp-lag"),hpText:e("hp-text"),dashCd:e("cd-dash"),skillCd:e("cd-skill"),quest:e("quest-text"),questTitle:e("quest-title"),banner:e("banner"),bannerMain:e("banner-main"),bannerSub:e("banner-sub"),dialog:e("dialog"),dName:e("dialog-name"),dText:e("dialog-text"),prompt:e("prompt"),boss:e("boss"),bossFill:e("boss-fill"),bossLag:e("boss-lag"),bossName:e("boss-name"),bars:e("hpbars"),title:e("title"),over:e("gameover"),combo:e("combo"),comboN:e("combo-n"),kills:e("kills"),best:e("best"),toast:e("toast"),flash:e("flash")},this.hpLag=1,this.bossLag=1,this.dialogState=null,this.bars=new Map,this.bannerT=0,this.toastT=0}showHud(t){this.el.hud.classList.toggle("hidden",!t)}setClass(t){Oc(document.getElementById("portrait-cv"),t.id),document.getElementById("hero-name").innerHTML=`${t.title} <b>${t.name}</b><span class="lv">Lv.7</span>`;for(let e of["atk","dash","skill"]){let n=t.labels[e];document.getElementById("sk-"+e).textContent=n,document.querySelectorAll(".lbl-"+e).forEach(i=>i.textContent=n)}document.querySelector("#combo span").textContent=t.hitWord}setQuest(t,e){let n=t+"|"+e;if(n===this.questKey)return;let i=!this.questKey||this.questKey.split("|")[0]!==t;if(this.questKey=n,this.el.questTitle.textContent=t,!i){this.el.quest.innerHTML=e;return}this.el.quest.innerHTML=e,this.el.quest.parentElement.classList.remove("pulse"),this.el.quest.parentElement.offsetWidth,this.el.quest.parentElement.classList.add("pulse")}banner(t,e="",n=2.6,i=""){this.el.bannerMain.textContent=t,this.el.bannerSub.textContent=e,this.el.banner.className="show "+i,this.bannerT=n}saveMark(){let t=document.getElementById("savemark");t&&(t.classList.remove("show"),t.offsetWidth,t.classList.add("show"))}toast(t,e=2.2){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e}flash(t,e){let n=this.el.flash;n.style.transition="none",n.style.background=t,n.style.opacity=String(e),requestAnimationFrame(()=>{n.style.transition="opacity 0.35s",n.style.opacity="0"})}dialog(t,e,n){this.dialogState={name:t,lines:e,i:0,shown:0,onDone:n,acc:0},this.el.dialog.classList.add("show"),this.el.dName.textContent=t,this.el.dText.textContent=""}get inDialog(){return!!this.dialogState}advance(){let t=this.dialogState;if(!t)return;let e=t.lines[t.i];if(t.shown<e.length){t.shown=e.length,this.el.dText.textContent=e;return}t.i++,t.shown=0,t.acc=0,t.i>=t.lines.length&&(this.el.dialog.classList.remove("show"),this.dialogState=null,t.onDone&&t.onDone())}setBoss(t){this.bossEnemy=t,this.el.boss.classList.toggle("show",!!t),t&&(this.el.bossName.textContent=t.name||"\uB3C4\uAE68\uBE44 \uB300\uC655",this.bossLag=1)}update(t){let e=this.game,n=e.player,i=this.el,r=n.hp/n.maxHp;if(this.hpLag=Math.max(r,this.hpLag-t*.5),i.hpFill.style.width=(r*100).toFixed(1)+"%",i.hpLag.style.width=(this.hpLag*100).toFixed(1)+"%",i.hpText.textContent=`${Math.ceil(n.hp)} / ${n.maxHp}`,i.hpFill.classList.toggle("low",r<.3),i.dashCd.style.height=n.dashCd/(n.dashMax||.5)*100+"%",i.skillCd.style.height=n.skillCd/n.skillMax*100+"%",i.kills.textContent=e.kills,i.best&&(i.best.textContent=e.bestCombo),this.bossEnemy){let h=this.bossEnemy,d=Math.max(0,h.hp/h.maxHp);this.bossLag=Math.max(d,this.bossLag-t*.4),i.bossFill.style.width=(d*100).toFixed(1)+"%",i.bossLag.style.width=(this.bossLag*100).toFixed(1)+"%",h.dead&&this.bossLag<=.001&&this.setBoss(null)}this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&i.banner.classList.remove("show")),this.toastT>0&&(this.toastT-=t,this.toastT<=0&&i.toast.classList.remove("show")),e.hitCombo>=2&&e.time-e.lastHitTime<2?(i.combo.classList.add("show"),i.comboN.textContent=e.hitCombo):i.combo.classList.remove("show");let o=this.dialogState;if(o){let h=o.lines[o.i];if(o.shown<h.length){o.acc+=t*38;let d=o.shown;o.shown=Math.min(h.length,Math.floor(o.acc)),o.shown>d&&o.shown%2===0&&e.audio.play("talk"),i.dText.textContent=h.slice(0,o.shown)}i.dialog.classList.toggle("done",o.shown>=h.length)}let a=e.pixel.pixelSize,l=new Set;for(let h of e.enemies){if(h.type==="boss"||h.dead||h.spawning||h.hp>=h.maxHp)continue;l.add(h);let d=this.bars.get(h);d||(d=document.createElement("div"),d.className="ebar",d.innerHTML="<i></i>",i.bars.appendChild(d),this.bars.set(h,d));let u=h.type==="wisp"?2:1.75,f=e.pixel.project({x:h.pos.x,y:h.y+u,z:h.pos.z,isVector3:!0,clone(){return this}});d.style.transform=`translate(${Math.round(f.x/a)*a}px, ${Math.round(f.y/a)*a}px)`,d.firstChild.style.width=h.hp/h.maxHp*100+"%"}for(let[h,d]of this.bars)l.has(h)||(d.remove(),this.bars.delete(h));let c=e.nearInteract;if(c&&!this.inDialog&&e.state==="play"){let h=e.pixel.project(c.promptPos);i.prompt.style.transform=`translate(${Math.round(h.x/a)*a}px, ${Math.round(h.y/a)*a}px)`,i.prompt.innerHTML=`<b>E</b>${c.label}`,i.prompt.classList.add("show")}else i.prompt.classList.remove("show")}},od={sword:{bg:"#3a4878",rows:["....................",".......hhhhhh.......",".....hhhhhhhhhh.....","....hhhhhhhhhhhh....","...hhhhhhhhhhhhhh...","...rrrrrrrrrrrrrr...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","...hsseessssseessh..","...hsseWsssseeWsh...","...hsseessssseessh..","...hspssssssssspsh..","....ssssssmmsssss...",".....ssssssssssss...","......ssssssssss....",".......cwwwwwwc.....",".....wwwcwwwwcwww...","....wwwwwcwwcwwwwww.","...wwwwwwwccwwwwwwww"],col:{h:"#2a2024",r:"#c8302c",s:"#f6d6b6",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",w:"#eeeae0",c:"#2e4f8f"}},mage:{bg:"#4a3a78",rows:[".......kkkkkk.......",".......kkkkkk.......",".......kkkkkk.......",".......vvvvvv.......","kkkkkkkkkkkkkkkkkkkk","...hhhhhhhhhhhhhh...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","..bhsseessssseesshb.","...hsseWsssseeWsh...","..bhsseessssseesshb.","...hspssssssssspsh..","..b.ssssssmmsssss.b.",".....ssssssssssss...","......ssssssssss....",".......gnnnnnng.....",".....nnngnnnngnnn...","....nnnnngnngnnnnnn.","...nnnnnnnggnnnnnnnn"],col:{k:"#16141c",v:"#6a5ad8",h:"#1e1a24",s:"#f4d4b2",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",n:"#3a3a7a",g:"#e0b040",b:"#e0a84a"}},elf:{bg:"#2e5a3a",rows:["....................",".......hhhhhh.......",".....hhhhhhhhhhff...","....hhhhhhhhhhhfFf..","...hhhhhhhhhhhhhf...","...hhhhhhhhhhhhhh...","...hhhhsssshhhhhh...","..hhhsssssssssshhh..","s.hhssssssssssssh.s.","sshhsseessssseesshss","..hhsseWsssseeWshh..","..hhsseessssseesshh.","..hhspssssssssspshh.","..hh.ssssssmmssss.hh","..hh..ssssssssss..hh","..hh...ssssssss...hh","..hh...lgggggl....hh","..h..gggglgglggg...h","....ggggggllgggggg..","...gggggggggggggggg."],col:{h:"#e8e4c8",s:"#fbe2cc",e:"#2a6a4a",W:"#ffffff",p:"#f8a8b8",m:"#c86a60",g:"#5aa84e",l:"#bfe07a",f:"#ff9ac0",F:"#fff0a0"}}};function Oc(s,t="sword"){if(!s)return;let e=od[t]||od.sword,n=s.getContext("2d");n.fillStyle=e.bg,n.fillRect(0,0,20,20),e.rows.forEach((i,r)=>[...i].forEach((o,a)=>{e.col[o]&&(n.fillStyle=e.col[o],n.fillRect(a,r,1,1))}))}var _t=s=>new xt(s),zc=new A(0,.17,0),Xx=new A(0,.8,0),qx=new A(0,0,0),Yx=new Ae,Tr=s=>1-Math.pow(1-s,3),Si=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;function st(s,t,e=0,n=0,i=0){let r=new Tt(s,t);return r.position.set(e,n,i),r.castShadow=!0,r.receiveShadow=!0,r}var wi=class{constructor(t){this.cfg=t,this.mats=[];let e=d=>{let u=Vt(d);return u.userData.baseEmissive=(d.emissive||_t("#000")).clone?.()||_t("#000"),this.mats.push(u),u};this.mat=e;let n=t.scale||1;this.root=new Kt,this.body=new Kt,this.body.scale.setScalar(n),this.root.add(this.body);let i=e({color:_t(t.skin)}),r=t.legLen??.36;this.legLen=r;let o=e({color:_t(t.pants)}),a=e({color:_t(t.shoes||"#26211f")});this.legs=[];for(let d of[-1,1]){let u=new Kt;u.position.set(d*.1*(t.wide||1),r,0),u.add(st(new ms(.075*(t.limb||1),r-.15,3,6),o,0,-r/2+.02,0)),u.add(st(new Bt(.14,.08,.2),a,0,-r+.04,.03)),this.body.add(u),this.legs.push(u)}if(this.hips=new Kt,this.hips.position.y=r,this.body.add(this.hips),this.chest=new Kt,this.chest.position.y=t.torsoH??.4,this.hips.add(this.chest),t.type==="mage"){let d=e({color:_t(t.robe)}),u=e({color:_t(t.belt)});this.hips.add(st(new ne(.17,.25,.46,10),d,0,.2,0)),this.hips.add(st(new ne(.25,.36,.4,12),d,0,-.14,0)),this.hips.add(st(new ne(.362,.37,.04,12),u,0,-.33,0)),this.hips.add(st(new ne(.228,.235,.06,10),u,0,.1,0));let f=e({color:_t("#f0ead8")});for(let p of[-1,1]){let _=st(new Bt(.06,.3,.04),f,p*.05,.28,.19);_.rotation.z=p*.5,this.hips.add(_)}this.hips.add(st(new Bt(.1,.13,.06),e({color:_t("#c8302c")}),-.2,0,.12))}else if(t.type==="elf"){let d=e({color:_t(t.robe)}),u=e({color:_t(t.skirt)}),f=e({color:_t(t.belt)});this.hips.add(st(new ne(.15,.21,.42,10),d,0,.2,0)),this.hips.add(st(new ne(.21,.3,.2,10),u,0,-.04,0)),this.hips.add(st(new ne(.212,.215,.05,10),f,0,.08,0));let p=e({color:_t("#bfe07a")});for(let m of[-1,1]){let M=st(new Bt(.12,.05,.08),p,m*.09,.4,.12);M.rotation.z=m*.4,this.hips.add(M)}let _=new Kt;_.position.set(-.1,.25,-.2),_.rotation.set(-.25,0,.45),_.add(st(new ne(.07,.06,.42,8),f,0,0,0));let g=e({color:_t("#f4f0e4")});for(let m=0;m<4;m++)_.add(st(new Bt(.03,.12,.05),g,(m-1.5)*.03,.27,m%2*.03));this.hips.add(_)}else if(t.type==="hero"||t.type==="guard"){let d=e({color:_t(t.robe)}),u=e({color:_t(t.belt)});this.hips.add(st(new ne(.17,.235,.44,10),d,0,.2,0)),this.hips.add(st(new ne(.24,.31,.24,10),d,0,-.04,0)),this.hips.add(st(new ne(.215,.225,.07,10),u,0,.1,0));let f=e({color:_t(t.collar||"#2a2a36")}),p=st(new Bt(.05,.26,.04),f,.05,.3,.19);p.rotation.z=.5,this.hips.add(p);let _=st(new Bt(.05,.26,.04),f,-.05,.3,.19);_.rotation.z=-.5,this.hips.add(_);let g=st(new Bt(.04,.16,.02),u,.06,.04,.24);g.rotation.z=.2,this.hips.add(g),this.tie=g}else if(t.type==="lady"){let d=e({color:_t(t.robe)}),u=e({color:_t(t.skirt)});this.hips.add(st(new ne(.15,.2,.22,10),d,0,.3,0)),this.hips.add(st(new ne(.17,.42,.62,12),u,0,-.06,0));let f=e({color:_t("#c23a4a")});this.hips.add(st(new Bt(.06,.2,.03),f,.04,.18,.18))}else if(t.type==="dokkaebi"){this.hips.add(st(new ye(.27,10,8),i,0,.25,.02));let d=e({map:td()});this.hips.add(st(new ne(.25,.29,.2,10),d,0,0,0));let u=e({color:_t("#2b2220")});this.hips.add(st(new ne(.262,.262,.05,10),u,0,.1,0))}this.head=new Kt,this.head.position.y=t.neck??.27,this.chest.add(this.head);let l=t.headR??.27,c=st(new ye(l,14,10),i);c.scale.set(1,.93,.95),this.head.add(c),this.buildFace(l,t),this.buildHair(l,t),this.arms=[];let h=e({color:_t(t.sleeve||t.robe||t.skin)});for(let d of[-1,1]){let u=new Kt;u.position.set(d*(t.shoulder??.21),-.03,0);let f=st(new ms(.068*(t.limb||1),.2,3,6),h,0,-.14,0);u.add(f),t.cuff&&u.add(st(new ne(.08,.085,.05,8),e({color:_t(t.cuff)}),0,-.26,0));let p=new Kt;p.position.y=-.31,p.add(st(new ye(.065*(t.limb||1),6,5),i)),u.add(p),u.userData.hand=p,this.chest.add(u),this.arms.push(u)}this.armR=this.arms[0],this.armL=this.arms[1],this.handR=this.armR.userData.hand,this.handL=this.armL.userData.hand,t.weapon&&this.buildWeapon(t.weapon),this.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),this.phase=0,this.idleT=Math.random()*10,this.flash=0,this.lean=0,this.deadT=0}buildFace(t,e){let n=this.mat({color:_t(e.eye||"#1b1416")}),i=t*.93;if(e.type==="dokkaebi"){let r=Vt({color:_t("#f4e86a"),emissive:_t("#7a6410")});for(let h of[-1,1]){let d=st(new ye(.075,6,5),r,h*.11,.03,i-.04);d.scale.z=.5,this.head.add(d),this.head.add(st(new Bt(.045,.06,.02),n,h*.11,.03,i+0));let u=st(new Bt(.12,.035,.03),this.mat({color:_t(e.hair)}),h*.11,.13,i-.02);u.rotation.z=h*.35,this.head.add(u)}let o=st(new Bt(.26,.07,.04),this.mat({color:_t("#5a1820")}),0,-.11,i-.05);this.head.add(o);let a=this.mat({color:_t("#fbf6e8")});for(let h of[-1,1])this.head.add(st(new Ee(.025,.07,4),a,h*.08,-.06,i-.03));let l=this.mat({color:_t(e.horn||"#efe2b0")}),c=e.horns??1;for(let h=0;h<c;h++){let d=c===1?0:h?.13:-.13,u=st(new Ee(.06,.24,6),l,d,t+.06,.02);u.rotation.z=-d*1.5,this.head.add(u)}this.head.add(st(new ye(.05,5,4),this.mat({color:new xt(e.skin).multiplyScalar(.8)}),0,-.02,i))}else{for(let o of[-1,1])this.head.add(st(new Bt(.05,.085,.03),n,o*.095,-.02,i-.01)),this.head.add(st(new Bt(.02,.025,.01),this.mat({color:_t("#ffffff")}),o*.095+.01,.005,i+.008));let r=this.mat({color:_t("#f0a0a0")});for(let o of[-1,1])this.head.add(st(new Bt(.06,.025,.02),r,o*.16,-.085,i-.06))}}buildHair(t,e){let n=this.mat({color:_t(e.hair||"#231c1e")});if(e.type==="dokkaebi"){for(let r=0;r<9;r++){let o=r/9*Math.PI*2,a=st(new Ee(.07,.22,4),n),l=new A(Math.cos(o)*.8,.55,Math.sin(o)*.8-.25).normalize();a.position.copy(l).multiplyScalar(t*.95),a.quaternion.setFromUnitVectors(new A(0,1,0),l),this.head.add(a)}return}let i=st(new ye(t*1.06,14,8,0,Math.PI*2,0,Math.PI*.5),n);i.rotation.x=-.35,i.position.set(0,.02,-.02),this.head.add(i);for(let r=-2;r<=2;r++){let o=st(new Bt(.09,.12,.06),n,r*.07,t*.62,t*.68);o.rotation.x=.5,o.rotation.z=r*.15,this.head.add(o)}if(e.type==="hero"){this.head.add(st(new ye(.09,8,6),n,0,t+.04,-.06));let r=st(new Qn(t*.98,.025,4,16),this.mat({color:_t("#c8302c")}),0,.09,0);r.rotation.x=Math.PI/2-.3,this.head.add(r);let o=new Kt;o.position.set(0,.06,-t*.95);let a=st(new Bt(.07,.36,.02),this.mat({color:_t("#c8302c")}),0,-.18,0);o.add(a),this.head.add(o),this.tail=o}else if(e.type==="mage"){let r=this.mat({color:_t("#16141c")}),o=t*.66;this.head.add(st(new ne(.4,.4,.022,18),r,0,o,0)),this.head.add(st(new ne(.13,.15,.26,12),r,0,o+.13,0)),this.head.add(st(new ne(.152,.152,.03,12),this.mat({color:_t("#6a5ad8")}),0,o+.03,0));let a=this.mat({color:_t("#e0a84a")});for(let l of[-1,1])for(let c=0;c<4;c++)this.head.add(st(new ye(.022,4,3),a,l*(.22-c*.015),o-.06-c*.07,.06))}else if(e.type==="elf"){this.head.add(st(new Bt(.46,.55,.14),n,0,-.2,-.2));for(let a of[-1,1]){this.head.add(st(new Bt(.08,.38,.1),n,a*.25,-.12,.06));let l=st(new Ee(.045,.2,4),this.mat({color:_t(e.skin)}),a*.3,.04,-.02);l.rotation.z=-a*1.15,this.head.add(l)}let r=this.mat({color:_t("#ff9ac0")});this.head.add(st(new Ze(.06,0),r,.2,.18,.1)),this.head.add(st(new Ze(.035,0),this.mat({color:_t("#fff0a0")}),.22,.2,.14));let o=new Kt;o.position.set(0,-.3,-.24),o.add(st(new Bt(.3,.32,.06),n,0,-.16,0)),this.head.add(o),this.tail=o}else if(e.type==="guard"){let r=this.mat({color:_t("#1d1b22")});this.head.add(st(new ne(.44,.44,.03,16),r,0,t*.62,0)),this.head.add(st(new ye(.2,10,6,0,Math.PI*2,0,Math.PI/2),r,0,t*.62,0)),this.head.add(st(new ye(.05,5,4),this.mat({color:_t("#d0a030")}),0,t*.62+.22,0)),this.head.add(st(new Ee(.05,.15,5),this.mat({color:_t("#c8302c")}),0,t*.62+.3,0))}else e.type==="lady"&&(this.head.add(st(new ye(.13,8,6),n,0,-.05,-t*.95)),this.head.add(st(new Bt(.3,.025,.025),this.mat({color:_t("#e0b040")}),0,-.04,-t*1.1)))}buildWeapon(t){let e=this.handR,n=new Kt,i=(r,o,a)=>(r.rotation[o]=a,r);if(t==="sword"){let r=this.mat({color:_t("#c9d4e0"),emissive:_t("#000000")}),o=this.mat({color:_t("#ffffff"),emissive:_t("#000000")}),a=this.mat({color:_t("#1c1824")}),l=this.mat({color:_t("#d8d0e8")}),c=this.mat({color:_t("#d9a83a")}),h=this.mat({color:_t("#141218")});for(let M=0;M<6;M++)n.add(st(new ne(.023,.023,.045,6),M%2?l:a,0,.12-M*.045,0));n.add(st(new ne(.026,.026,.03,6),c,0,.16,0));let d=st(new ne(.075,.075,.022,10),h,0,-.13,0);n.add(d),n.add(i(st(new Qn(.072,.008,4,12),c,0,-.13,0),"x",Math.PI/2)),n.add(st(new Bt(.03,.05,.045),c,0,-.165,0));let u=7,f=1.08,p=-.19,_=0,g=0;for(let M=0;M<u;M++){let T=f/u,v=1-M/u*.35,S=new Kt;S.position.set(0,p,_),S.rotation.x=g;let w=st(new Bt(.03,T+.012,.068*v),r,0,-T/2,-.004),R=st(new Bt(.034,T+.012,.02),o,0,-T/2,.032*v);S.add(w,R),n.add(S),p-=Math.cos(g)*T,_-=Math.sin(g)*T,g-=.035}let m=st(new Ee(.036,.14,4),o,0,p-.06,_-.002);if(m.rotation.x=Math.PI+g,m.scale.set(.55,1,1),n.add(m),this.bladeMat=r,this.edgeMat=o,this.cfg.type==="hero"){let M=new Kt;M.position.set(.21,.1,.12),M.rotation.set(1.22,0,.18);let T=this.mat({color:_t("#1a1420")});M.add(st(new Bt(.046,1.2,.088),T,0,-.6,.004)),M.add(st(new Bt(.052,.045,.094),c,0,-1.18,.004)),M.add(st(new Bt(.052,.05,.096),this.mat({color:_t("#c8302c")}),0,-.12,.004)),M.add(st(new Bt(.052,.03,.096),c,0,-.015,.004)),this.hips.add(M),this.saya=M}}else if(t==="club"){let r=this.mat({color:_t("#7a4a2a")}),o=this.mat({color:_t("#c8c0b0")}),a=st(new ne(.11,.045,.75,7),r,0,-.32,0);a.rotation.x=Math.PI,n.add(a);for(let l=0;l<6;l++){let c=l/6*Math.PI*2;n.add(i(st(new Ee(.03,.07,4),o,Math.cos(c)*.1,-.55+l%2*.1,Math.sin(c)*.1),"z",-Math.cos(c)*1.5))}}else if(t==="goldclub"){let r=this.mat({color:_t("#e0b040"),emissive:_t("#000")}),o=st(new ne(.14,.05,.85,8),r,0,-.36,0);o.rotation.x=Math.PI,n.add(o);for(let a=0;a<8;a++){let l=a/8*Math.PI*2;n.add(i(st(new Ee(.035,.09,4),r,Math.cos(l)*.13,-.62+a%2*.12,Math.sin(l)*.13),"z",-Math.cos(l)*1.5))}}else if(t==="staff"){let r=this.mat({color:_t("#5a3e2a")}),o=this.mat({color:_t("#e0b040")});n.add(st(new ne(.028,.034,1.55,6),r,0,.35,0)),n.add(i(st(new Qn(.14,.022,4,12,Math.PI*1.4),o,0,1.2,0),"z",-Math.PI*.2));let a=this.mat({color:_t("#b8a8ff"),emissive:_t("#6a4aff")});this.orbMat=a,n.add(st(new Ze(.075,1),a,0,1.2,0));let l=new Re({color:new xt("#f2d36b"),side:ve}),c=new Tt(new Oe(.08,.2),l);c.position.set(.05,1,0),n.add(c)}else if(t==="bow"){let r=this.mat({color:_t("#8a5a32")}),o=new Ni(new A(0,.1,.5),new A(0,-.22,0),new A(0,.1,-.5));n.add(st(new ir(o,10,.024,4),r)),n.add(st(new Bt(.05,.05,.12),this.mat({color:_t("#3a7a3a")}),0,-.1,0));let a=new Re({color:new xt("#f0ece0")});this.bowEnds=[new A(0,.1,.5),new A(0,.1,-.5)],this.bowStrings=[0,1].map(()=>{let c=new Tt(new Bt(.012,1,.012),a);return n.add(c),c});let l=new Kt;l.add(st(new Bt(.02,.72,.02),this.mat({color:_t("#9a7a52")}),0,-.36,0)),l.add(i(st(new Ee(.03,.09,4),this.mat({color:_t("#d8dde4")}),0,-.76,0),"x",Math.PI)),this.nockArrow=l,n.add(l),this.setBowDraw(0),n.traverse(c=>{c.isMesh&&(c.castShadow=!0)}),this.handL.add(n),this.weapon=n;return}else if(t==="spear"){let r=this.mat({color:_t("#6a4a32")}),o=this.mat({color:_t("#cfd6de")}),a=st(new ne(.025,.025,2,5),r,0,.2,0);n.add(a),n.add(st(new Ee(.05,.25,4),o,0,1.3,0)),n.add(i(st(new Ee(.06,.1,6),this.mat({color:_t("#c8302c")}),0,1.13,0),"x",Math.PI))}n.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),e.add(n),this.weapon=n,this.saya&&(this.saya.add(n),n.position.copy(zc),n.quaternion.identity(),this.sheathed=!0,this.wStage="in")}setBowDraw(t){if(!this.bowStrings)return;let e=new A(0,.1+.42*t,0);this.bowStrings.forEach((n,i)=>{let r=this.bowEnds[i],o=new A().subVectors(e,r),a=o.length();n.position.copy(r).addScaledVector(o,.5),n.scale.set(1,a,1),n.quaternion.setFromUnitVectors(new A(0,1,0),o.normalize())}),this.nockArrow.position.copy(e),this.nockArrow.visible=t>.15}unsheathe(){!this.saya||!this.sheathed||(this.handR.attach(this.weapon),this.sheathed=!1,this.wStage="hand")}sheathe(){!this.saya||this.sheathed||(this.saya.attach(this.weapon),this.sheathed=!0,this.wStage="align",this.wStageT=0)}updateWeapon(t){if(!this.saya)return;let e=this.weapon,n,i;this.wStage==="hand"?(n=qx,i=26):this.wStage==="align"?(n=Xx,i=22,this.wStageT+=t,this.wStageT>.16&&(this.wStage="slide",this.wStageT=0)):this.wStage==="slide"?(n=zc,i=16,this.wStageT+=t,this.wStageT>.22&&(this.wStage="in",this.justSheathed=!0)):(n=zc,i=30);let r=1-Math.exp(-i*t);e.position.lerp(n,r),e.quaternion.slerp(Yx,r)}setFlash(t){if(t!==this._lastFlash){this._lastFlash=t;for(let e of this.mats)t>0?e.emissive.setRGB(t,t*.95,t*.9):e.emissive.set(0,0,0)}}animate(t,e){let n=e.speed||0,i=Ce(n/4,0,1);this.idleT+=t,i>.05&&(this.phase+=t*(6+n*1.6));let r=this.phase,o=Math.sin(r)*i,a=o*.9,l=-o*.9,c=-o*.7-.25,h=.12,d=0,u=o*.7,f=-.12,p=0,_=.08*i,g=Math.abs(Math.cos(r))*.06*i,m=Math.sin(this.idleT*2.4)*.012*(1-i);this.chest.position.y=(this.cfg.torsoH??.4)+m;let M=0,T=0,v=0;this.cfg.weapon==="spear"&&(c=-.35,h=.25,v=-1.2);let S=this.cfg.weapon==="sword";S&&!this.sheathed&&(c=-o*.18-.2,v=-1.2),S&&this.saya&&(u=-.5+o*.12,f=.18);let w=this.cfg.weapon==="staff",R=.22;w&&(c=-.3-o*.15,h=.18);let x=this.cfg.weapon==="bow",E=0;if(x&&(u=-.3+o*.3,f=-.08),e.attack&&e.attack.kind>=20){let L=e.attack.t,O=e.attack.kind,P=Tr(Ce(L/.45,0,1)),F=L>.45?Tr(Ce((L-.45)/.2,0,1)):0,k=1-Si(Ce((L-.7)/.3,0,1)),X=Math.min(1,P*1.6)*k;E=P*(1-F),u=Ct(u,-1.55,X),f=Ct(f,.06,X),c=Ct(c,-1.42+.35*F,X),h=Ct(h,-.62+.5*F,X),p=(O===21?Ct(-.7,.5,F):-.4)*k,a=.3*k,l=-.2*k}else if(e.attack&&e.attack.kind>=10){let L=e.attack.t,O=e.attack.kind;if(O===11){let P=Si(Ce(L/.45,0,1)),F=Tr(Ce((L-.45)/.15,0,1)),k=1-Si(Ce((L-.7)/.3,0,1));c=Ct(-.3,Ct(-2.7,-1.25,F),Math.max(P,F)*k),R=Ct(.22,Ct(.35,1.75,F),Math.max(P,F)*k),u=Ct(u,Ct(-2.2,-1.1,F),P*k),_=Ct(-.2*P,.35,F)*k,g-=.05*F*k,a=.35*F*k,l=-.3*F*k}else{let P=Si(Ce(L/.35,0,1)),F=Tr(Ce((L-.35)/.2,0,1)),k=1-Si(Ce((L-.65)/.35,0,1));u=Ct(u,Ct(.6,-1.75,F),k*Math.max(P,F)),f=Ct(f,-.1,k),p=Ct(-.45*P,.3,F)*k,O===12&&(c=Ct(c,-1.3,F*k),R=Ct(.22,1.3,F*k)),a=.25*F*k,l=-.2*F*k}}else if(e.attack){v=0;let L=e.attack.t,O=e.attack.kind,P=O===3?.3:.26,F=O===3?.56:.5,k=Si(Ce(L/P,0,1)),X=Tr(Ce((L-P)/(F-P),0,1)),Y=Si(Ce((L-F-.08)/(1-F-.08),0,1)),z=1-Y;if(O===0||O===1){let $=O===0?1:-1,Q=-1.2*$,yt=1.5*$;p=Ct(Ct(0,Q,k),yt,X)*z,c=Ct(c,Ct(-1.4,-1.58,X),z*Math.max(k,X)),h=Ct(.12,O===0?.45:.15,k)*z,u=Ct(u,.35,z),a=.35*z,l=-.25*z,g-=.04*X*z}else O===3?(p=Ct(Ct(0,.95,k),-1.55,X)*z,c=Ct(Ct(c,-.75,k),-1.58,X),c=Ct(-.2,c,z),h=Ct(Ct(.12,-.95,k),.4,X)*z,u=Ct(Ct(u,-.6,k),.55,X),u=Ct(-.5,u,z),a=Ct(.2*k,.55,X)*z,l=Ct(-.1*k,-.35,X)*z,g-=(.06*k+.05*X)*z,_=Ct(.15*k,.2,X)*z):(c=Ct(Ct(c,-2.9,k),-.45,X),c=Ct(c,-.25,Y),d=0,_=Ct(Ct(0,-.25,k),.38,X)*z,u=c*.9,f=-.05,g-=.06*X*z,a=.4*X*z,l=-.4*X*z)}else if(e.sheathing>0){let L=e.sheathing,O=Math.sin(Math.min(1,L*1.3)*Math.PI*.5)*(1-Si(Ce((L-.75)/.25,0,1)));c=Ct(c,-1.15,O),h=Ct(h,-.7,O),v=Ct(-1.2,0,Math.min(1,L*3)),p=.35*O,u=Ct(u,-.7,O)}e.dash&&(_=.45,a=.9,l=-.7,c=S&&!this.sheathed?1.3:.9,u=S?-.5:.9,v=0,g=.02),w&&(v=R-c),e.hurt>0&&(_=-.35*e.hurt,M=-.2*e.hurt),e.cast&&(u=-1.5,f=-.2);let I=1-Math.exp(-(e.attack?34:16)*t),D=(L,O,P)=>L[O]+=(P-L[O])*I;if(D(this.legs[0].rotation,"x",l),D(this.legs[1].rotation,"x",a),D(this.armR.rotation,"x",c),D(this.armR.rotation,"z",-h),D(this.armR.rotation,"y",d),D(this.armL.rotation,"x",u),D(this.armL.rotation,"z",-f),D(this.chest.rotation,"y",p),D(this.hips.rotation,"x",_),D(this.head.rotation,"x",M),this.handR&&D(this.handR.rotation,"x",v),this.body.position.y=g,this.updateWeapon(t),x&&(this.bowCur=(this.bowCur||0)+(E-(this.bowCur||0))*(1-Math.exp(-(E<(this.bowCur||0)?60:20)*t)),this.setBowDraw(this.bowCur)),this.orbMat){let L=.45+Math.sin(this.idleT*4)*.15+(e.attack?.5:0);this.orbMat.emissive.setRGB(.42*L,.29*L,L)}if(this.body.rotation.z=T,this.tail&&(this.tail.rotation.x=.25+i*.6+Math.sin(this.idleT*7)*.08*i),e.dead){this.deadT+=t;let L=Rs(Ce(this.deadT/.45,0,1));this.body.rotation.x=-L*Math.PI/2,this.body.position.y=L*.15}else this.deadT=0,this.body.rotation.x=0}};function ad(){return new wi({type:"hero",scale:1.15,skin:"#f6d6b6",robe:"#eeeae0",sleeve:"#eeeae0",cuff:"#2e4f8f",belt:"#2e4f8f",collar:"#2e4f8f",pants:"#3a3f5a",hair:"#2a2024",weapon:"sword"})}function ld(){return new wi({type:"guard",scale:1.15,skin:"#eac8a6",robe:"#2b4374",sleeve:"#2b4374",cuff:"#c8302c",belt:"#c8302c",collar:"#c8302c",pants:"#1f2438",hair:"#1c1a1e",weapon:"spear"})}function cd(){return new wi({type:"mage",scale:1.15,skin:"#f4d4b2",robe:"#3a3a7a",sleeve:"#3a3a7a",cuff:"#e0b040",belt:"#e0b040",pants:"#24244a",hair:"#1e1a24",weapon:"staff"})}function hd(){return new wi({type:"elf",scale:1.12,skin:"#fbe2cc",robe:"#5aa84e",sleeve:"#5aa84e",cuff:"#e8d8a0",skirt:"#3f7a3a",belt:"#7a4e2e",pants:"#f0e8d0",shoes:"#6a4428",hair:"#e8e4c8",eye:"#2a6a4a",weapon:"bow"})}function ud(){return new wi({type:"lady",scale:1.15,skin:"#f6d8bc",robe:"#9cc46a",sleeve:"#9cc46a",cuff:"#d84a6a",skirt:"#d8486a",pants:"#d8486a",hair:"#2a2024"})}function dd(s="blue"){let t={blue:{skin:"#5d8fd8",hair:"#e2522e",horns:1,scale:1.12},red:{skin:"#d8574a",hair:"#2a2430",horns:2,scale:1.18},boss:{skin:"#b03a5a",hair:"#f0e8d8",horns:2,scale:2.3,horn:"#f0c040"}}[s];return new wi({type:"dokkaebi",skin:t.skin,hair:t.hair,horns:t.horns,horn:t.horn,scale:t.scale,pants:t.skin,sleeve:t.skin,legLen:.3,torsoH:.42,headR:.32,neck:.3,shoulder:.27,limb:1.35,wide:1.3,weapon:s==="boss"?"goldclub":"club",eye:"#1b1416"})}var Hi={sword:{id:"sword",title:"\uAC80\uAC1D",name:"\uC774\uB791",make:ad,hp:120,skillCd:2.6,dashCd:.5,role:"\uBC1C\uB3C4\uC220 \xB7 \uADFC\uC811",desc:"\uCE7C\uC9D1\uC5D0\uC11C \uBF51\uC73C\uBA70 \uBCA0\uB294 \uBC1C\uB3C4\uC220, \uB0A0\uC544\uAC00\uB294 \uAC80\uAE30",labels:{atk:"\uBCA0\uAE30",dash:"\uD68C\uD53C",skill:"\uAC80\uAE30"},hitWord:"\uC5F0\uC18D \uBCA0\uAE30"},mage:{id:"mage",title:"\uB3C4\uC0AC",name:"\uCCAD\uC6B4",make:cd,hp:90,skillCd:4.2,dashCd:.8,role:"\uBD80\uC801\uC220 \xB7 \uC6D0\uAC70\uB9AC \uAD11\uC5ED",desc:"\uD130\uC9C0\uB294 \uBD88\uBD80\uC801, \uD558\uB298\uC5D0\uC11C \uB0B4\uB9AC\uCE58\uB294 \uB099\uB8B0, \uCD95\uC9C0\uBC95",labels:{atk:"\uBD88\uBD80\uC801",dash:"\uCD95\uC9C0",skill:"\uB099\uB8B0"},hitWord:"\uC5F0\uC18D \uD0C0\uACA9"},elf:{id:"elf",title:"\uC694\uC815",name:"\uD558\uB2AC",make:hd,hp:100,skillCd:3.2,dashCd:.45,role:"\uD65C \xB7 \uC6D0\uAC70\uB9AC \uC5F0\uC0AC",desc:"\uBE60\uB978 \uD654\uC0B4, \uBD80\uCC44\uAF34\uB85C \uC3DF\uC544\uC9C0\uB294 \uBC14\uB78C\uD654\uC0B4",labels:{atk:"\uC0AC\uACA9",dash:"\uAD6C\uB974\uAE30",skill:"\uBC14\uB78C\uD654\uC0B4"},hitWord:"\uC5F0\uC18D \uBA85\uC911"}},Ar=["sword","mage","elf"];var Rr=new A,Ja=class{constructor(t,e="sword"){this.game=t,this.pos=new A(0,.12,16),this.yaw=Math.PI,this.vel=new A,this.radius=.32,this.maxHp=120,this.hp=this.maxHp,this.attack=null,this.combo=0,this.comboTimer=0,this.buffered=!1,this.dashT=0,this.dashCd=0,this.dashDir=new A,this.skillCd=0,this.skillMax=2.6,this.invuln=0,this.hurtT=0,this.dead=!1,this.stepAcc=0,this.y=this.pos.y,this.lastCombat=0,this.moveR=this.radius,this.setClass(e)}setClass(t){let e=Hi[t]||Hi.sword;this.rig&&this.game.scene.remove(this.rig.root),this.cls=e.id,this.cfg=e,this.rig=e.make(),this.game.scene.add(this.rig.root),this.maxHp=e.hp,this.hp=this.maxHp,this.skillMax=e.skillCd,this.dashMax=e.dashCd,this.attack=null,this.combo=0,this.sheatheT=0}reset(){this.hp=this.maxHp,this.dead=!1,this.attack=null,this.invuln=1.5,this.rig.deadT=0}aimYaw(t,e=this.cls==="sword"?3.6:11){let n=this.game,i=null,r=1e9,o=t.moveLen>.1?Math.atan2(t.mx,t.mz):this.yaw;for(let a of n.enemies){if(a.dead||a.spawning)continue;let l=a.pos.x-this.pos.x,c=a.pos.z-this.pos.z,h=Math.hypot(l,c);if(h>e)continue;let d=Math.abs(Mi(o,Math.atan2(l,c))),u=h+d*(e>4?4:1.5);d<(e>4?.9:1.7)&&u<r&&(r=u,i=Math.atan2(l,c))}return i!==null?i:t.mouseRecent&&t.mouseWorld?Math.atan2(t.mouseWorld.x-this.pos.x,t.mouseWorld.z-this.pos.z):o}startAttack(t){if(this.dead||this.dashT>0)return;if(this.attack){this.attack.t>.4&&(this.buffered=!0);return}if(this.cls!=="sword"){let a=(this.cls==="mage"?10:20)+[0,0,2][this.combo%3];this.combo++,this.yaw=this.aimYaw(t);let l=a%10===2;this.attack={t:0,kind:a,dur:this.cls==="mage"?l?.46:.36:l?.42:.32,hit:!1,hitAt:this.cls==="mage"?.42:.47},this.cls==="elf"&&this.game.audio.play("bowdraw"),this.lastCombat=this.game.time;return}this.rig.sheathed?(this.combo=0,this.drawCut()):this.combo===0&&(this.comboFromSheath=!1);let r=(this.comboFromSheath?[3,0,2]:[1,0,2])[this.combo%3];this.combo++,this.yaw=this.aimYaw(t),this.attack={t:0,kind:r,dur:r===2?.48:r===3?.42:.36,hit:!1,hitAt:r===3?.44:.38},r!==3&&this.game.audio.play(r===2?"swing3":"swing"),this.lastCombat=this.game.time,this.sinceAttack=0}drawCut(){this.rig.unsheathe(),this.sheatheT=0,this.comboFromSheath=!0,this.game.audio.play("draw");let t=this.rig.saya;if(t){let e=new A;t.getWorldPosition(e),this.game.fx.spark(e.x,e.y,e.z,6,"#ffffff",3)}}startDash(t){if(this.dead||this.dashCd>0)return;let e=t.moveLen>.1?Rr.set(t.mx,0,t.mz).normalize():Rr.set(Math.sin(this.yaw),0,Math.cos(this.yaw));if(this.dashDir.copy(e),this.yaw=Math.atan2(e.x,e.z),this.cls==="mage"){this.blink(e);return}this.dashT=.2,this.dashCd=this.dashMax??.5,this.invuln=Math.max(this.invuln,.3),this.attack=null,this.buffered=!1,this.game.audio.play("dash"),this.game.fx.dust(this.pos.x,this.pos.y,this.pos.z,8)}blink(t){let e=this.game,n=this.pos.clone();e.fx.ghost(this.rig,"#9a7aff",.4),e.fx.smoke(n.x,n.y+.2,n.z,10),e.world.move(this.pos,t.x*3.6,t.z*3.6,this.moveR),this.vel.set(0,0,0),this.dashCd=this.dashMax,this.invuln=Math.max(this.invuln,.35),this.attack=null,this.buffered=!1,e.audio.play("blink");let i=this.pos;for(let r=0;r<14;r++){let o=r/13;e.fx.add.emit({x:n.x+(i.x-n.x)*o,y:n.y+.8+G(-.4,.4),z:n.z+(i.z-n.z)*o,vx:G(-.5,.5),vy:G(0,1),vz:G(-.5,.5),life:G(.25,.5),size:3,endSize:1,color:"#d8c8ff",color2:"#5a3aff"})}e.fx.ring(new A(i.x,e.world.heightAt(i.x,i.z),i.z),1.6,"#b8a0ff",.35),e.fx.smoke(i.x,i.y+.2,i.z,8)}startSkill(t){if(this.dead||this.skillCd>0||this.dashT>0)return;if(this.cls!=="sword"){this.skillCd=this.skillMax,this.yaw=this.aimYaw(t),this.combo=0,this.cls==="mage"?(this.attack={t:0,kind:11,dur:.62,hit:!1,hitAt:.5,skill:!0},this.game.audio.play("chant")):(this.attack={t:0,kind:21,dur:.5,hit:!1,hitAt:.47,skill:!0},this.game.audio.play("bowdraw")),this.lastCombat=this.game.time;return}this.skillCd=this.skillMax,this.yaw=this.aimYaw(t);let e=this.rig.sheathed;e&&this.drawCut(),this.attack={t:0,kind:e?3:1,dur:e?.4:.36,hit:!0,skill:!0},this.combo=0,this.sinceAttack=0,e||this.game.audio.play("swing3"),this.game.spawnSwordWave(this),this.lastCombat=this.game.time}damage(t,e){if(this.invuln>0||this.dead||this.game.godMode)return!1;this.hp-=t,this.invuln=.7,this.blinkT=.7,this.hurtT=.3,this.lastCombat=this.game.time;let n=this.game;return n.fx.number(this.pos.clone().add(new A(0,1.7,0)),t,"player"),n.audio.play("hurt"),n.shake(.25),n.screenFlash(.25,"#ff3030"),e&&(Rr.subVectors(this.pos,e).setY(0).normalize(),this.vel.addScaledVector(Rr,7)),this.hp<=0&&(this.hp=0,this.dead=!0,n.onPlayerDeath()),!0}update(t,e){let n=this.game;this.dashCd=Math.max(0,this.dashCd-t),this.skillCd=Math.max(0,this.skillCd-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.comboTimer-=t;let i=0;if(!this.dead){let a=0;if(this.dashT>0){this.dashT-=t;let c=14*(.4+.6*(this.dashT/.2));n.world.move(this.pos,this.dashDir.x*c*t,this.dashDir.z*c*t,this.radius),i=c,Math.random()<.8&&n.fx.add.emit({x:this.pos.x+G(-.2,.2),y:this.pos.y+G(.3,1.1),z:this.pos.z+G(-.2,.2),life:.25,size:2,color:"#bfe8ff"}),this.ghostT=(this.ghostT??0)-t,this.ghostT<=0&&(this.ghostT=.045,n.fx.ghost(this.rig,this.cls==="elf"?"#7ad86a":"#5ab8ff")),this.cls==="elf"&&Math.random()<.6&&n.fx.norm.emit({x:this.pos.x+G(-.3,.3),y:this.pos.y+G(.2,.9),z:this.pos.z+G(-.3,.3),vx:G(-1,1),vy:G(.5,1.5),vz:G(-1,1),wob:1.5,life:G(.5,.9),size:2,color:Math.random()<.5?"#8ad06a":"#c8e88a"})}else{let h=4.6*(this.attack?this.attack.skill?this.cls==="sword"?.1:.25:this.cls==="sword"?.22:.45:1);if(e.moveLen>.1){a=1;let d=e.mx*h,u=e.mz*h;this.vel.x=Ct(this.vel.x,d,1-Math.exp(-18*t)),this.vel.z=Ct(this.vel.z,u,1-Math.exp(-18*t)),this.attack||(this.yaw=bi(this.yaw,Math.atan2(e.mx,e.mz),16,t))}else this.vel.x=Ct(this.vel.x,0,1-Math.exp(-14*t)),this.vel.z=Ct(this.vel.z,0,1-Math.exp(-14*t));if(this.attack&&!this.attack.skill&&this.cls==="sword"){let d=this.attack;if(d.t>.25&&d.t<.5){let u=d.kind===2?3.5:2.6;this.vel.x+=Math.sin(this.yaw)*u*t*10*(1-Math.exp(-t*5)),this.vel.z+=Math.cos(this.yaw)*u*t*10*(1-Math.exp(-t*5))}}n.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),i=Math.hypot(this.vel.x,this.vel.z)}if(this.stepAcc+=i*t,this.stepAcc>1.1&&this.dashT<=0&&(this.stepAcc=0,n.fx.dust(this.pos.x,this.pos.y,this.pos.z,2)),this.attack){let c=this.attack;c.t+=t/c.dur,!c.hit&&c.t>=(c.hitAt??.38)&&(c.hit=!0,c.skill?n.playerSkillHit(this,c):this.cls==="sword"?n.playerSwingHit(this,c.kind):n.playerShoot(this,c.kind)),c.t>=1&&(this.attack=null,this.buffered?(this.buffered=!1,this.startAttack(e)):this.comboTimer=.35)}else this.comboTimer<=0&&(this.combo=0);let l=this.rig;!this.attack&&l.saya&&(this.sinceAttack=(this.sinceAttack??9)+t,!l.sheathed&&this.sinceAttack>.9&&this.dashT<=0&&(l.sheathe(),this.sheatheT=1e-4)),this.sheatheT>0&&(this.sheatheT+=t/.42,l.justSheathed&&(l.justSheathed=!1,n.audio.play("sheathe")),this.sheatheT>=1&&(this.sheatheT=0))}let r=n.world.heightAt(this.pos.x,this.pos.z);this.y=Ct(this.y,r,1-Math.exp(-20*t)),this.pos.y=r,!this.dead&&n.time-this.lastCombat>4&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+t*6));let o=this.rig;if(o.root.position.set(this.pos.x,this.y,this.pos.z),o.root.rotation.y=this.yaw,o.animate(t,{speed:this.dead?0:i,attack:this.attack?{t:Math.min(1,this.attack.t),kind:this.attack.kind}:null,sheathing:this.sheatheT>0?Math.min(1,this.sheatheT):0,dash:this.dashT>0,hurt:this.hurtT/.3,dead:this.dead}),this.blinkT=Math.max(0,(this.blinkT||0)-t),o.root.visible=this.dead||this.blinkT<=0||Math.floor(n.time*18)%2===0,o.setFlash(this.hurtT>.2?.6:0),o.bladeMat){let a=this.attack?.5:o.sheathed?0:n.night>.5?.16:.08;o.bladeMat.emissive.setRGB(a*.6,a*.9,a),o.edgeMat.emissive.setRGB(a*1.2,a*1.4,a*1.6)}}},Zx={blue:{hp:46,speed:2.7,dmg:10,range:1.5,windup:.5,recover:.6,radius:.46,rig:"blue",exp:10},red:{hp:72,speed:3.1,dmg:15,range:1.6,windup:.42,recover:.5,radius:.48,rig:"red",exp:16},wisp:{hp:28,speed:3.2,dmg:9,range:7,windup:.6,recover:1.6,radius:.35,exp:12},boss:{hp:900,speed:2.35,dmg:24,range:2.7,windup:.85,recover:.8,radius:.95,rig:"boss",exp:200}},Cr=class{constructor(t,e,n,i=1){this.game=t,this.type=e;let r=this.T=Zx[e],o=1+(i-1)*.25;this.maxHp=Math.round(r.hp*o),this.hp=this.maxHp,this.dmg=Math.round(r.dmg*(1+(i-1)*.15)),this.radius=r.radius,this.moveR=e==="boss"?Is[1]:Math.min(r.radius,Is[0]),this.pos=n.clone(),this.vel=new A,this.yaw=0,this.state="spawn",this.st=0,this.attackCd=G(.4,1.2),this.hurtT=0,this.flashT=0,this.dead=!1,this.deadT=0,this.spawning=!0,this.y=n.y,this.strafe=Math.random()<.5?1:-1,this.leapCd=6,this.summoned=0,e==="wisp"?this.buildWisp():(this.rig=dd(r.rig),t.scene.add(this.rig.root)),this.root=this.rig?this.rig.root:this.wisp,this.root.position.copy(this.pos),this.root.scale.setScalar(.01),t.fx.blueFire(n.x,n.y,n.z,e==="boss"?80:30,e==="boss"?1.2:.5),t.fx.ring(n,e==="boss"?3:1.4,"#7fd8ff",.5),t.audio.play("spawn")}buildWisp(){let t=new Kt,e=new Re({color:new xt("#bff4ff")}),n=new Tt(new Ze(.28,1),e);t.add(n);let i=new Tt(new Ze(.36,1),new Re({color:new xt("#3a8cff"),transparent:!0,opacity:.45,depthWrite:!1}));i.userData.noOutline=!0,t.add(i);let r=new Re({color:659504});for(let o of[-1,1]){let a=new Tt(new Bt(.06,.1,.04),r);a.position.set(o*.09,.03,.27),t.add(a)}this.game.scene.add(t),this.wisp=t,this.coreMat=e}get alive(){return!this.dead}center(){return Rr.set(this.pos.x,this.y+(this.type==="boss"?2:this.type==="wisp"?1.3:.8),this.pos.z)}hit(t,e,n=5,i=.25){if(this.dead||this.spawning)return!1;if(this.hp-=t,this.flashT=.12,this.type!=="boss"||this.state==="chase"){let r=this.type==="boss"?n*.15:n;this.vel.addScaledVector(e,r),this.type!=="boss"&&(this.hurtT=i,this.state==="windup"&&i>=.25&&(this.state="chase",this.attackCd=.6,this.clearTele()))}return this.hp<=0&&this.die(),!0}die(){this.dead=!0,this.hp=0,this.deadT=0,this.clearTele();let t=this.game;t.audio.play("poof"),this.type==="wisp"&&(t.fx.blueFire(this.pos.x,this.y+1,this.pos.z,40,.4),t.fx.ring(new A(this.pos.x,this.y,this.pos.z),1.5,"#7fd8ff",.4)),t.onEnemyKilled(this)}clearTele(){this.tele&&(this.game.fx.removeRing(this.tele),this.tele=null)}update(t){let e=this.game,n=e.player;if(this.st+=t,this.flashT=Math.max(0,this.flashT-t),this.hurtT=Math.max(0,this.hurtT-t),this.attackCd-=t,this.leapCd-=t,this.dead){if(this.deadT+=t,this.type==="wisp")this.root.scale.setScalar(Math.max(.01,1-this.deadT*4));else if(this.rig.animate(t,{speed:0,dead:!0}),this.rig.setFlash(Math.max(0,.8-this.deadT*2)),this.deadT>.55&&!this.poofed){this.poofed=!0;let d=this.type==="boss";e.fx.smoke(this.pos.x,this.y+.3,this.pos.z,d?30:12),e.fx.blueFire(this.pos.x,this.y+.2,this.pos.z,d?60:24,d?1.4:.6),e.fx.coins(this.pos.x,this.y,this.pos.z,d?30:6),e.audio.play("coin"),this.root.visible=!1}return this.deadT<1.2}if(this.spawning){let d=Rs(Ce(this.st/.7,0,1));return this.root.scale.setScalar(Math.max(.01,d)),Math.random()<.6&&e.fx.blueFire(this.pos.x,this.pos.y,this.pos.z,2,this.type==="boss"?1:.4),this.st>=.7&&(this.spawning=!1,this.state="chase",this.st=0,this.root.scale.setScalar(1),(Math.random()<.4||this.type==="boss")&&e.audio.play("laugh")),this.type==="wisp"?this.root.position.set(this.pos.x,this.pos.y+1.3*d,this.pos.z):this.place(t,0),!0}let i=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,o=Math.hypot(i,r),a=Math.atan2(i,r),l=0,c=null,h=this.T;if(this.type==="wisp")return this.updateWisp(t,o,a);if(this.vel.lengthSq()>.001&&(e.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-9*t))),!(this.hurtT>0)){if(this.state==="chase"){let d=Math.abs(n.pos.y-this.pos.y)<.5;if(n.dead)l=0,this.yaw=bi(this.yaw,a,8,t);else if(this.type==="boss"&&this.leapCd<=0&&o>4.5&&o<14)this.state="leapPrep",this.st=0,this.leapTarget=n.pos.clone(),this.tele=e.fx.ring(this.leapTarget,3.6,"#ff4a3a",1,1);else if(o>h.range*.85||!d){let u=h.speed*(this.type==="boss"&&this.hp<this.maxHp*.4?1.25:1);l=this.chaseMove(t,u,i,r,o),this.yaw=bi(this.yaw,this.los?a:Math.atan2(this.moveX,this.moveZ),8,t)}else if(this.yaw=bi(this.yaw,a,8,t),this.attackCd<=0&&(this.state="windup",this.st=0,this.type==="boss")){let u=new A(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6);this.tele=e.fx.ring(u,2.6,"#ff4a3a",1,1),this.smashAt=u}}else if(this.state==="windup")this.st<h.windup*.6&&(this.yaw=bi(this.yaw,a,5,t)),c={t:.28*Ce(this.st/h.windup,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/h.windup),this.type==="boss"&&this.smashAt&&(this.smashAt.set(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6),this.tele&&this.tele.m.position.set(this.smashAt.x,this.smashAt.y+.04,this.smashAt.z)),this.st>=h.windup&&(this.state="strike",this.st=0,e.audio.play("swing"));else if(this.state==="strike"){if(c={t:.28+.34*Ce(this.st/.12,0,1),kind:2},!this.struck&&this.st>=.08)if(this.struck=!0,this.type==="boss")this.clearTele(),e.bossSlam(this,this.smashAt,2.6,this.dmg);else{let d=Math.sin(this.yaw),u=Math.cos(this.yaw),f=this.pos.x+d*.9,p=this.pos.z+u*.9;e.fx.dust(f,this.pos.y,p,5),Math.hypot(n.pos.x-f,n.pos.z-p)<1.05+n.radius&&Math.abs(n.pos.y-this.pos.y)<1&&n.damage(this.dmg,this.pos)}this.st>=.12&&(this.state="recover",this.st=0,this.struck=!1)}else if(this.state==="recover")c={t:.62+.38*Ce(this.st/h.recover,0,1),kind:2},this.st>=h.recover&&(this.state="chase",this.st=0,this.attackCd=G(.6,1.4));else if(this.state==="leapPrep")c={t:.2*Ce(this.st/.6,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/1.5),this.st>=.6&&(this.state="leap",this.st=0,this.leapFrom=this.pos.clone(),e.audio.play("dash"),e.fx.dust(this.pos.x,this.pos.y,this.pos.z,14));else if(this.state==="leap"){let d=Ce(this.st/.9,0,1);if(this.tele&&(this.tele.mat.uniforms.uProg.value=.4+d*.6),this.pos.x=Ct(this.leapFrom.x,this.leapTarget.x,Rs(d)),this.pos.z=Ct(this.leapFrom.z,this.leapTarget.z,Rs(d)),this.jumpY=Math.sin(d*Math.PI)*4.5,c={t:.28,kind:2},d>=1){this.jumpY=0,this.clearTele();let u=e.world.heightAt(this.pos.x,this.pos.z);e.world.isBlocked(this.pos.x,this.pos.z,this.moveR*.7,u)&&this.pos.copy(this.leapFrom),e.bossSlam(this,this.pos.clone(),3.6,Math.round(this.dmg*1.2),!0),this.state="recover",this.st=0,this.leapCd=G(6,9)}}}return this.place(t,l,c),!0}updateWisp(t,e,n){let i=this.game,r=i.player;this.yaw=bi(this.yaw,n,6,t),this.vel.lengthSq()>.001&&(i.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-6*t)));let o=r.pos.x-this.pos.x,a=r.pos.z-this.pos.z,l=o/(e||1),c=a/(e||1),h=0,d=0;if(this.state==="chase"){if(e>7.5){let g=i.world.clearLine(this.pos.x,this.pos.z,r.pos.x,r.pos.z,this.moveR)?null:i.world.navDir(this.pos,0);g?(h=g.x,d=g.z):(h=l,d=c)}else e<4.5&&(h=-l,d=-c);h+=-c*this.strafe*.6,d+=l*this.strafe*.6,Math.random()<t*.3&&(this.strafe*=-1),this.attackCd<=0&&e<10&&!r.dead&&(this.state="windup",this.st=0,i.audio.play("orb"))}else this.state==="windup"&&(Math.random()<.8&&i.fx.add.emit({x:this.pos.x+G(-.6,.6),y:this.y+1.3+G(-.6,.6),z:this.pos.z+G(-.6,.6),vx:0,vy:0,vz:0,life:.3,size:2,color:"#8fe8ff"}),this.st>=this.T.windup&&(i.spawnOrb(this),this.state="chase",this.st=0,this.attackCd=G(2,3)));let u=Math.hypot(h,d);u>.01&&i.world.move(this.pos,h/u*this.T.speed*t,d/u*this.T.speed*t,this.moveR);let f=i.world.heightAt(this.pos.x,this.pos.z);this.y=Ct(this.y,f,1-Math.exp(-6*t));let p=Math.sin(i.time*3+this.strafe)*.15;this.root.position.set(this.pos.x,this.y+1.3+p,this.pos.z),this.root.rotation.y=this.yaw;let _=this.state==="windup"?1+Math.sin(this.st*40)*.12+this.st*.4:1;return this.root.scale.setScalar(_),this.coreMat.color.set(this.flashT>0?"#ffffff":this.state==="windup"?"#e8ffff":"#9feaff"),Math.random()<.7&&i.fx.add.emit({x:this.pos.x+G(-.15,.15),y:this.y+1.45+p,z:this.pos.z+G(-.15,.15),vx:G(-.3,.3),vy:G(.8,1.6),vz:G(-.3,.3),life:G(.3,.6),size:G(2,4),endSize:1,color:"#7fe0ff",color2:"#1a40ff"}),!0}chaseMove(t,e,n,i,r){let o=this.game.world,a=this.game.player,l=this.type==="boss"?1:0;this.losT=(this.losT??0)-t,this.losT<=0&&(this.losT=.2+Math.random()*.1,this.los=Math.abs(a.pos.y-this.pos.y)<.5&&o.clearLine(this.pos.x,this.pos.z,a.pos.x,a.pos.z,this.moveR));let c,h;if(this.los||r<1.2){let _=r>3?.35*this.strafe:0,g=n/r,m=i/r;c=g-m*_,h=m+g*_;let M=Math.hypot(c,h);c/=M,h/=M}else{let _=o.navDir(this.pos,l);_?(c=_.x,h=_.z):(c=n/r,h=i/r)}this.unstuckT>0&&(this.unstuckT-=t,c=this.unstuckX,h=this.unstuckZ),this.moveX=this.moveX===void 0?c:this.moveX+(c-this.moveX)*Math.min(1,t*12),this.moveZ=this.moveZ===void 0?h:this.moveZ+(h-this.moveZ)*Math.min(1,t*12);let d=Math.hypot(this.moveX,this.moveZ)||1,u=this.pos.x,f=this.pos.z;o.move(this.pos,this.moveX/d*e*t,this.moveZ/d*e*t,this.moveR);let p=Math.hypot(this.pos.x-u,this.pos.z-f);if(this.stuckAcc=p<e*t*.35?(this.stuckAcc||0)+t:0,this.stuckAcc>.35){this.stuckAcc=0,this.los=!1,this.losT=.8,this.strafe*=-1;let _=Math.atan2(h,c)+(Math.random()<.5?1:-1)*(Math.PI/2+Math.random()*.5);this.unstuckX=Math.cos(_),this.unstuckZ=Math.sin(_),this.unstuckT=.3}return t>0?p/t:0}place(t,e,n=null){let r=this.game.world.heightAt(this.pos.x,this.pos.z);this.y=Ct(this.y,r,1-Math.exp(-18*t)),this.pos.y=r;let o=this.rig;o.root.position.set(this.pos.x,this.y+(this.jumpY||0),this.pos.z),o.root.rotation.y=this.yaw,o.animate(t,{speed:e,attack:n,hurt:this.hurtT>0?this.hurtT/.25:0}),this.flashT>0?o.setFlash(.9):this.state==="windup"&&this.type!=="boss"?o.setFlash(Math.floor(this.st*14)%2?.35:0):this.state==="windup"||this.state==="leapPrep"?o.setFlash(Math.floor(this.st*10)%2?.25:0):o.setFlash(0)}dispose(){this.clearTele(),this.game.scene.remove(this.root)}},Ir=class{constructor(t,e,n,i,r,o,a){this.game=t,this.rig=e==="guard"?ld():ud(),this.pos=new A(n,t.world.heightAt(n,i),i),this.baseYaw=r,this.yaw=r,this.name=o,this.lines=a,this.radius=.4,t.scene.add(this.rig.root),t.world.circles.push({x:n,z:i,r:.4,y:this.pos.y})}update(t){let e=this.game.player,i=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<4?Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z):this.baseYaw;this.yaw=bi(this.yaw,i,4,t),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.yaw,this.rig.animate(t,{speed:0})}},$a=class{constructor(t,e){this.game=t;let n=this.root=new Kt,i=Vt({color:new xt("#8a5a3a")}),r=Vt({color:new xt("#e8d8b8")}),o=Vt({color:new xt("#2a2020")}),a=new Tt(new ye(.1,6,5),i);a.scale.set(.9,.8,1.2),a.position.y=.1;let l=new Tt(new ye(.075,6,4),r);l.position.set(0,.07,.03);let c=new Tt(new ye(.065,6,5),i);c.position.set(0,.19,.08);let h=new Tt(new Ee(.02,.05,4),o);h.rotation.x=Math.PI/2,h.position.set(0,.18,.15);let d=new Tt(new Bt(.06,.015,.1),o);d.position.set(0,.12,-.13),d.rotation.x=-.4,this.wings=[];for(let u of[-1,1]){let f=new Kt;f.position.set(u*.07,.13,0);let p=new Tt(new Bt(.14,.015,.1),i);p.position.x=u*.06,f.add(p),n.add(f),this.wings.push(f)}this.head=c,n.add(a,l,c,h,d),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),t.scene.add(n),this.pos=e.clone(),this.yaw=G(0,Math.PI*2),this.state="idle",this.t=G(0,2),this.hopY=0,this.vel=new A}update(t){let e=this.game,n=e.player;this.t-=t;let i=Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z);if(this.state!=="fly"&&this.state!=="gone"&&(i<2.6||e.alarm>0)){this.state="fly";let r=this.pos.x-n.pos.x,o=this.pos.z-n.pos.z,a=Math.hypot(r,o)||1;this.vel.set(r/a*4+G(-1,1),4.5,o/a*4+G(-1,1)),this.yaw=Math.atan2(this.vel.x,this.vel.z)}if(this.state==="idle")this.head.position.y=.19-(Math.sin(e.time*9+this.yaw*10)>.6?.05:0),this.t<=0&&(this.t=G(.4,1.6),Math.random()<.6&&(this.state="hop",this.hopT=0,this.yaw+=G(-1.2,1.2)));else if(this.state==="hop"){this.hopT+=t;let r=this.hopT/.2;this.hopY=Math.sin(Math.min(1,r)*Math.PI)*.12;let o=this.pos.x+Math.sin(this.yaw)*t*1.2,a=this.pos.z+Math.cos(this.yaw)*t*1.2;e.world.isBlocked(o,a,.1,this.pos.y)||(this.pos.x=o,this.pos.z=a),r>=1&&(this.state="idle",this.hopY=0)}else if(this.state==="fly"){this.pos.addScaledVector(this.vel,t),this.vel.y+=t*1.5;for(let r of this.wings)r.rotation.z=Math.sin(e.time*50)*1.1*(r.position.x>0?1:-1);this.pos.y>14&&(this.state="gone",this.root.visible=!1,this.t=G(8,16))}else if(this.state==="gone"&&this.t<=0&&e.alarm<=0){let r=e.world.randomWalkable(n.pos.x,n.pos.z,8,15);if(r){this.pos.copy(r),this.state="idle",this.root.visible=!0;for(let o of this.wings)o.rotation.z=0}else this.t=2}(this.state==="idle"||this.state==="hop")&&(this.pos.y=e.world.heightAt(this.pos.x,this.pos.z)),this.root.position.set(this.pos.x,this.pos.y+this.hopY,this.pos.z),this.root.rotation.y=this.yaw}};var kc="dot3d-palace-save-v1";function fd(){try{let s=localStorage.getItem(kc);if(!s)return null;let t=JSON.parse(s);return t&&t.v===1?t:null}catch{return null}}function pd(s){try{return localStorage.setItem(kc,JSON.stringify({v:1,savedAt:Date.now(),...s})),!0}catch{return!1}}function md(){try{localStorage.removeItem(kc)}catch{}}var ae=(s,t,e)=>new A(s,t,e),Hc=class{constructor(){this.pixel=new Ga(document.getElementById("stage"));let t=this.scene=new Li;t.background=new xt("#3b4a3a"),this.time=0,this.state="title",this.night=0,this.nightTarget=0,this.hitstop=0,this.shakeAmt=0,this.kills=0,this.hitCombo=0,this.lastHitTime=-10,this.alarm=0,this.enemies=[],this.projectiles=[],this.timers=[],this.spawnQueue=[],this.wave=0,this.round=0,this.stage=0,this.waveActive=!1,this.focus=ae(0,0,10),this.lead=ae(),this.setupLights(),this.world=new Wa(t),this.fx=new qa(t,this.pixel),this.audio=new Ya,this.ui=new Za(this),this.player=new Ja(this),this.npcs=[new Ir(this,"guard",-12.4,6.4,.6,"\uC218\uBB38\uC7A5 \uBC15\uB3CC\uC1E0",[]),new Ir(this,"lady",19.2,7.5,-.9,"\uB098\uC778 \uC5F0\uC774",["\uC5B4\uBA38, \uAC80\uAC1D\uB2D8. \uC774 \uAD81\uC740 \uBC24\uB9CC \uB418\uBA74 \uB3C4\uAE68\uBE44\uBD88\uC774 \uB5A0\uB2E4\uB140\uC694.","\uB3C4\uAE68\uBE44\uB4E4\uC740 \uC7A5\uB09C\uC774 \uC2EC\uD558\uC9C0\uB9CC, \uD63C\uCB50\uC744 \uB0B4\uC8FC\uBA74 \uAE08\uBC29 \uB2EC\uC544\uB09C\uB2F5\uB2C8\uB2E4.","\uD478\uB978 \uBD88\uB369\uC774\uB97C \uC3D8\uB294 \uB140\uC11D\uC740 \uAC80\uC73C\uB85C \uCCD0\uB0B4\uBA74 \uD295\uACA8\uB0BC \uC218 \uC788\uB300\uC694!","(N \uD0A4\uB85C \uB0AE\uACFC \uBC24\uC744 \uBC14\uAFD4 \uBCFC \uC218 \uC788\uC5B4\uC694. \uC2F8\uC6B0\uB294 \uC911\uC5D4 \uC548 \uB3FC\uC694.)"])],this.birds=[];for(let[e,n]of[[-6,6],[-5.4,6.6],[6.5,15],[7,14.3],[-15,9],[14,-.5],[.5,-9.5]])this.birds.push(new $a(this,ae(e,this.world.heightAt(e,n),n)));this.world.buildNav(),this.flowT=0,this.setupInput(),this.bestCombo=0,this.saveT=15,this.selectedCls="sword",this.setupClassSelect(),this.applySave(fd()),this.ui.setClass(this.player.cfg),this.updateQuest(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.save(!1)}),window.addEventListener("pagehide",()=>this.save(!1)),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}setupLights(){let t=this.scene;this.hemi=new or("#dfe9ff","#8a7c62",1.15),t.add(this.hemi);let e=this.sun=new hr("#fff0d6",2.5);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-30,n.right=30,n.top=30,n.bottom=-30,n.near=1,n.far=140,e.shadow.bias=-6e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sunOffset=ae(-16,30,14),this.points=[];for(let i=0;i<8;i++){let r=new cr("#ffb35c",0,9,1.4);t.add(r),this.points.push(r)}this.lightTimer=0}updateLights(t){let e=this.night;yn.night.value=e;let n=(f,p)=>new xt(f).lerp(new xt(p),e);this.sun.color.copy(n("#fff0d6","#8ea6ff")),this.sun.intensity=Ct(2.5,.9,e),this.hemi.color.copy(n("#dfe9ff","#55669e")),this.hemi.groundColor.copy(n("#8a7c62","#262438")),this.hemi.intensity=Ct(1.15,.95,e),this.scene.background.copy(n("#3b4a3a","#0e1220")),this.world.setNight(e);let i=this.focus,r=Jx.copy(this.sunOffset).normalize(),o=$x.crossVectors(gd.set(0,1,0),r).normalize(),a=gd.crossVectors(r,o).normalize(),l=60/2048,c=Math.round(i.dot(o)/l)*l,h=Math.round(i.dot(a)/l)*l,d=i.dot(r),u=Kx.copy(o).multiplyScalar(c).addScaledVector(a,h).addScaledVector(r,d);if(this.sun.target.position.copy(u),this.sun.position.copy(u).add(this.sunOffset),this.sun.target.updateMatrixWorld(),this.lightTimer-=t,this.lightTimer<=0){this.lightTimer=.25;let f=[...this.world.lanterns].sort((p,_)=>p.distanceToSquared(i)-_.distanceToSquared(i));for(let p=0;p<6;p++)this.points[p].position.copy(f[p]);this.points[6].position.copy(this.world.hallLightPos[0]),this.points[7].position.copy(this.world.hallLightPos[1])}for(let f=0;f<8;f++){let p=1+Math.sin(this.time*9+f*1.7)*.06+Math.sin(this.time*23+f)*.04;this.points[f].intensity=e*(f<6?22:30)*p,this.points[f].distance=f<6?8:11}}setupInput(){this.keys=new Set,this.input={mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null},this.mouse={x:0,y:0,t:-10},window.addEventListener("keydown",e=>{if(e.repeat){this.keys.add(e.code);return}this.keys.add(e.code),this.onKey(e.code,e)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear());let t=document.getElementById("app");t.addEventListener("mousemove",e=>{this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time}),t.addEventListener("mousedown",e=>{if(this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time,this.state==="title"){let n=e.target.closest&&e.target.closest(".cls");n&&this.selectClass(n.dataset.cls),this.start();return}if(this.audio.unlock(),this.ui.inDialog){this.ui.advance();return}this.state==="play"&&(e.button===0&&this.player.startAttack(this.readInput()),e.button===2&&this.player.startSkill(this.readInput()))}),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("wheel",e=>{this.pixel.zoom(e.deltaY>0?-1:1),this.saveT=Math.min(this.saveT,2)},{passive:!0}),this.setupTouch()}setupTouch(){let t=document.getElementById("touch");if(!("ontouchstart"in window))return;t.classList.add("on"),document.body.classList.add("touch"),document.getElementById("dialog").addEventListener("touchstart",c=>{c.preventDefault(),this.ui.advance()},{passive:!1}),document.getElementById("gameover").addEventListener("touchstart",c=>{c.preventDefault(),this.state==="dead"&&this.retry()},{passive:!1});let e=document.getElementById("stick"),n=e.firstElementChild;this.touchMove={x:0,z:0};let i=null,r=0,o=0,a=document.getElementById("stick-area");a.addEventListener("touchstart",c=>{this.state==="title"&&this.start();let h=c.changedTouches[0];i=h.identifier,r=h.clientX,o=h.clientY,e.style.left=r+"px",e.style.top=o+"px",e.classList.add("show"),c.preventDefault()},{passive:!1}),a.addEventListener("touchmove",c=>{for(let h of c.changedTouches)if(h.identifier===i){let d=h.clientX-r,u=h.clientY-o,f=Math.hypot(d,u),p=50;f>p&&(d*=p/f,u*=p/f),n.style.transform=`translate(${d}px, ${u}px)`,this.touchMove.x=d/p,this.touchMove.z=u/p}c.preventDefault()},{passive:!1});let l=c=>{for(let h of c.changedTouches)h.identifier===i&&(i=null,this.touchMove.x=0,this.touchMove.z=0,n.style.transform="",e.classList.remove("show"))};a.addEventListener("touchend",l),a.addEventListener("touchcancel",l);for(let c of document.querySelectorAll("#touch [data-k]"))c.addEventListener("touchstart",h=>{h.preventDefault(),this.state==="title"?this.start():this.onKey(c.dataset.k)},{passive:!1})}readInput(){let t=this.keys,e=0,n=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(n-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(n+=1),this.touchMove&&(this.touchMove.x||this.touchMove.z)&&(e=this.touchMove.x,n=this.touchMove.z);let i=Math.hypot(e,n),r=this.input;return r.moveLen=Math.min(1,i),r.mx=i>0?e/Math.max(1,i):0,r.mz=i>0?n/Math.max(1,i):0,i>1&&(r.mx=e/i,r.mz=n/i),r.mouseRecent=this.time-this.mouse.t<3,r.mouseWorld=r.mouseRecent?this.pixel.unproject(this.mouse.x,this.mouse.y,this.player.pos.y+.6):null,(this.ui.inDialog||this.state!=="play")&&(r.moveLen=0,r.mx=r.mz=0),r}setupClassSelect(){for(let t of document.querySelectorAll("#classes .cls")){let e=Hi[t.dataset.cls];Oc(t.querySelector("canvas"),e.id),t.querySelector(".role").textContent=e.role,t.querySelector(".desc").textContent=e.desc}this.selectClass(this.selectedCls)}selectClass(t){if(Hi[t]){this.selectedCls=t;for(let e of document.querySelectorAll("#classes .cls"))e.classList.toggle("sel",e.dataset.cls===t);this.player.cls!==t&&(this.player.setClass(t),this.ui.setClass(this.player.cfg))}}applySave(t){let e=document.getElementById("title-save");if(!t){e&&(e.textContent="");return}if(this.kills=t.kills|0,this.round=t.round|0,this.bestCombo=t.bestCombo|0,this.stage=this.round>0?3:Math.min(1,t.stage|0),t.music===!1&&this.audio.musicOn&&this.audio.toggleMusic(),t.outline===0&&(this.pixel.compMat.uniforms.outline.value=0),typeof t.zoom=="number"&&t.zoom!==this.pixel.userZoom&&(this.pixel.userZoom=t.zoom,this.pixel.resize()),t.night&&(this.nightTarget=1,this.night=1),t.cls&&Hi[t.cls]&&this.selectClass(t.cls),e){let n=new Date(t.savedAt||Date.now()),i=r=>String(r).padStart(2,"0");e.innerHTML=`\uC774\uC5B4\uD558\uAE30 \xB7 <b>${this.round+1}\uD68C\uCC28</b> \xB7 \uD1F4\uCE58 <b>${this.kills}</b> \xB7 \uCD5C\uACE0 \uC5F0\uC18D <b>${this.bestCombo}</b><small>${n.getMonth()+1}/${n.getDate()} ${i(n.getHours())}:${i(n.getMinutes())} \uC790\uB3D9 \uC800\uC7A5 \xB7 Delete \uD0A4: \uAE30\uB85D \uC9C0\uC6B0\uAE30</small>`}}save(t=!0){pd({kills:this.kills,round:this.round,stage:this.stage===2?this.round>0?3:1:this.stage,bestCombo:this.bestCombo,cls:this.player.cls,music:this.audio.musicOn,outline:this.pixel.compMat.uniforms.outline.value,zoom:this.pixel.userZoom,night:!this.waveActive&&this.nightTarget>.5})&&t&&this.ui.saveMark(),this.saveT=15}onKey(t){if(this.state==="title"){if(t==="Delete"||t==="Backspace"){md(),this.kills=0,this.round=0,this.stage=0,this.bestCombo=0,this.applySave(null),this.updateQuest();let i=document.getElementById("title-save");i&&(i.textContent="\uAE30\uB85D\uC744 \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uC2DC\uC791\uD569\uB2C8\uB2E4.");return}let n=Ar.indexOf(this.selectedCls);if(t==="ArrowLeft"||t==="KeyA"){this.selectClass(Ar[(n+2)%3]),this.audio.unlock(),this.audio.play("talk");return}if(t==="ArrowRight"||t==="KeyD"){this.selectClass(Ar[(n+1)%3]),this.audio.unlock(),this.audio.play("talk");return}if(t==="Digit1"||t==="Digit2"||t==="Digit3"){this.selectClass(Ar[+t.slice(-1)-1]);return}this.start();return}if(this.audio.unlock(),t==="KeyM"){let n=this.audio.toggleMusic();this.ui.toast(n?"\uC74C\uC545 \uCF1C\uC9D0":"\uC74C\uC545 \uAEBC\uC9D0"),this.save(!1);return}if(t==="Equal"||t==="NumpadAdd"){this.pixel.zoom(1);return}if(t==="Minus"||t==="NumpadSubtract"){this.pixel.zoom(-1);return}if(t==="KeyO"){this.pixel.compMat.uniforms.outline.value=this.pixel.compMat.uniforms.outline.value?0:1,this.ui.toast(this.pixel.compMat.uniforms.outline.value?"\uC678\uACFD\uC120 \uCF1C\uC9D0":"\uC678\uACFD\uC120 \uAEBC\uC9D0"),this.save(!1);return}if(this.state==="dead"){(t==="KeyR"||t==="Enter"||t==="act")&&this.retry();return}if(this.ui.inDialog){["KeyE","Space","Enter","KeyJ","KeyZ","act","atk"].includes(t)&&this.ui.advance();return}let e=this.readInput();switch(t){case"KeyJ":case"KeyZ":case"atk":this.player.startAttack(e);break;case"Space":case"ShiftLeft":case"ShiftRight":case"KeyL":case"dash":this.player.startDash(e);break;case"KeyK":case"KeyX":case"skill":this.player.startSkill(e);break;case"KeyE":case"Enter":case"act":this.interact();break;case"KeyN":if(this.waveActive){this.ui.toast("\uB3C4\uAE68\uBE44\uAC00 \uB0A0\uB6F0\uB294 \uC911\uC5D4 \uC2DC\uAC04\uC744 \uBC14\uAFC0 \uC218 \uC5C6\uC5B4\uC694");break}this.nightTarget=this.nightTarget>.5?0:1,this.ui.toast(this.nightTarget?"\uBC24\uC774 \uCC3E\uC544\uC635\uB2C8\uB2E4\u2026":"\uB0A0\uC774 \uBC1D\uC544\uC635\uB2C8\uB2E4");break;case"KeyG":this.godMode=!this.godMode,this.ui.toast(this.godMode?"\uBB34\uC801 (\uB514\uBC84\uADF8)":"\uBB34\uC801 \uD574\uC81C");break}}start(){this.audio.unlock(),this.state="play",this.player.cls!==this.selectedCls&&this.player.setClass(this.selectedCls),this.ui.setClass(this.player.cfg),this.player.hp=this.player.maxHp,this.save(!1),document.getElementById("title").classList.add("hide"),this.ui.showHud(!0),this.ui.banner("\u6708\u4E0B\u5BAE","\uB3C4\uAE68\uBE44 \uC57C\uD589",2.8,"title-banner")}findInteract(){let t=this.player.pos,e=null,n=2.4;for(let i of this.npcs){let r=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);r<n&&(n=r,e={kind:"npc",npc:i,label:"\uB300\uD654",promptPos:i.pos.clone().add(ae(0,2.1,0))})}for(let i of this.world.drums){let r=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);r<2.9&&r-.5<n&&(n=r-.5,e={kind:"drum",drum:i,label:this.waveActive?"\uBD81 \uCE58\uAE30":"\uBD81 \uC6B8\uB9AC\uAE30",promptPos:i.pos.clone().add(ae(0,4,0))})}return e}interact(){let t=this.nearInteract;if(t)if(t.kind==="npc"){let e=t.npc,n=e.lines;e.name.startsWith("\uC218\uBB38\uC7A5")&&(n=this.guardLines()),this.ui.dialog(e.name,n,()=>{e.name.startsWith("\uC218\uBB38\uC7A5")&&this.stage===0&&(this.stage=1,this.updateQuest(),this.save())})}else t.kind==="drum"&&(this.player.yaw=Math.atan2(t.drum.pos.x-this.player.pos.x,t.drum.pos.z-this.player.pos.z),this.player.startAttack({moveLen:0,mx:0,mz:0}),this.player.cls!=="sword"&&this.drumHit(t.drum))}guardLines(){return this.stage===0?[`\uC5B4\uC774, \uAC70\uAE30 \uC80A\uC740 ${this.player.cfg.title}! \uB9C8\uCE68 \uC798 \uC654\uC18C.`,"\uD574\uB9CC \uC9C0\uBA74 \uC774 \uAD81\uAD90 \uB9C8\uB2F9\uC5D0 \uB3C4\uAE68\uBE44 \uB188\uB4E4\uC774 \uB5BC\uB85C \uBAB0\uB824\uC640 \uB09C\uC7A5\uD310\uC744 \uCE5C\uB2E4\uC624.","\uC800\uAE30 \uC800 \uD070 \uBD81\uC774 \uBCF4\uC774\uC2DC\uC624? \uBD81\uC744 \uB465\u2014 \uD558\uACE0 \uC6B8\uB9AC\uBA74 \uC228\uC5B4 \uC788\uB358 \uB188\uB4E4\uC774 \uC8C4\uB2E4 \uD280\uC5B4\uB098\uC62C \uAC8C\uC694.","\uB188\uB4E4\uC744 \uBAA8\uC870\uB9AC \uD63C\uCB50\uB0B4 \uC8FC\uC2DC\uC624! \uB9C8\uC9C0\uB9C9\uC5D4 \uB3C4\uAE68\uBE44 \uB300\uC655\uC774 \uB098\uC628\uB2E4\uB294 \uC18C\uBB38\uC774 \uC788\uC73C\uB2C8 \uC870\uC2EC\uD558\uACE0.","(\uBD81 \uC55E\uC5D0\uC11C E \uD0A4, \uD639\uC740 \uAC80\uC73C\uB85C \uBD81\uC744 \uBCA0\uC5B4 \uC6B8\uB9AC\uC138\uC694)"]:this.waveActive?["\uC9C0\uAE08 \uD55C\uAC00\uD558\uAC8C \uC774\uC57C\uAE30\uD560 \uB54C\uAC00 \uC544\uB2C8\uC624! \uB3C4\uAE68\uBE44\uB4E4\uC774 \uBAB0\uB824\uC624\uACE0 \uC788\uC18C!"]:this.round>=1?[`\uD5C8\uD5C8, \uB300\uC655\uAE4C\uC9C0 \uCAD3\uC544\uB0B4\uB2E4\uB2C8! \uBC8C\uC368 ${this.kills}\uB9C8\uB9AC\uB098 \uD63C\uCB50\uC744 \uB0C8\uAD6C\uB824.`,"\uBD81\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC62C \uAC70\uC694. \uAC01\uC624\uAC00 \uB418\uC5C8\uB2E4\uBA74 \uC5B8\uC81C\uB4E0."]:["\uBD81\uC740 \uC800\uAE30 \uC788\uC18C. \uB465\u2014 \uD558\uACE0 \uC6B8\uB824 \uBCF4\uC2DC\uC624!"]}updateQuest(){let t=this.ui;if(this.stage===0)t.setQuest("\uC784\uBB34","\uC67C\uCABD \uBD81 \uC606\uC758 <b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uB9D0\uC744 \uAC78\uC790");else if(this.stage===1)t.setQuest("\uC784\uBB34","<b>\uD070 \uBD81</b>\uC744 \uC6B8\uB824 \uB3C4\uAE68\uBE44\uB97C \uBD88\uB7EC\uB0B4\uC790");else if(this.stage===2){let e=this.enemies.filter(n=>!n.dead).length+this.spawnQueue.length;t.setQuest(`\uB3C4\uAE68\uBE44 \uC57C\uD589 \xB7 \uC81C ${this.wave} \uD30C`,`\uB0A8\uC740 \uB3C4\uAE68\uBE44 <b>${e}</b>`)}else t.setQuest("\uC790\uC720 \uD0D0\uBC29",`\uBD81\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 <b>${this.round+1}\uD68C\uCC28</b> \uB3C4\uAE68\uBE44\uAC00 \uBAB0\uB824\uC628\uB2E4`)}drumHit(t){t.shake=1,this.audio.play("drum"),this.shake(.35),this.alarm=3,this.fx.ring(ae(t.pos.x,0,t.pos.z),5,"#fff2c0",.6),this.fx.spark(t.pos.x,2.2,t.pos.z,14,"#fff2c0",5),!this.waveActive&&(this.stage===1||this.stage===3||this.stage===0)&&this.startNight()}startNight(){this.waveActive=!0,this.stage=2,this.wave=0,this.nightTarget=1,this.audio.mood="battle",this.ui.banner("\uB3C4\uAE68\uBE44 \uC57C\uD589",this.round>0?`${this.round+1}\uD68C\uCC28 \u2014 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC628\uB2E4`:"\uBD81\uC18C\uB9AC\uC5D0 \uB3C4\uAE68\uBE44\uB4E4\uC774 \uAE68\uC5B4\uB09C\uB2E4\u2026",3,"night-banner"),setTimeout(()=>this.nextWave(),3200)}waveDef(t){let e=this.round,n=[],i=(r,o)=>{for(let a=0;a<o;a++)n.push(r)};return t===1?(i("blue",4+e),i("red",e)):t===2?(i("blue",3+e),i("red",2+e),i("wisp",2+Math.floor(e/2))):(i("boss",1),i("red",2+e),i("wisp",e)),n}nextWave(){if(this.state==="dead")return;this.wave>0&&this.save(),this.wave++;let t=this.waveDef(this.wave),e=this.wave===3;this.ui.banner(`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C`,e?"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8 \uCD9C\uD604!":`\uB3C4\uAE68\uBE44 ${t.length}\uB9C8\uB9AC`,2.4,e?"boss-banner":""),this.audio.play(e?"drum":"wave");let n=.6;for(let i of t)this.spawnQueue.push({type:i,at:this.time+n}),n+=i==="boss"?1.2:G(.3,.6);this.updateQuest()}spawnEnemy(t){let e=this.player.pos,n=t==="boss"?this.world.randomWalkable(e.x,e.z,6,9):this.world.randomWalkable(e.x,e.z,5,10);n||(n=ae(0,.12,5));let i=new Cr(this,t,n,1+this.round);t==="boss"&&(i.name=this.round>0?`\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8 +${this.round}`:"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8",this.ui.setBoss(i),this.shake(.5)),this.enemies.push(i)}playerSwingHit(t,e){let n=e===2?2.45:2.2,i=e===2?.95:1.35,r=e===3?1:e,o=t.yaw,a=ae(t.pos.x,t.y+.72,t.pos.z);if(this.fx.slash(a,o,r,{dur:e===3?.2:.16,outer:n+(e===3?.25:0),len:e===3?3.2:2.8,color:e===2?"#fff6d0":e===3?"#d8f4ff":"#a8e4ff"}),this.fx.slash(a,o,r,{dur:e===3?.2:.16,inner:n-.32,outer:n-.05+(e===3?.25:0),len:e===3?3.2:2.8,color:"#ffffff"}),e===2){let c=ae(t.pos.x+Math.sin(o)*1.4,t.y,t.pos.z+Math.cos(o)*1.4);this.fx.ring(c,1.9,"#fff2c0",.3),this.fx.dust(c.x,c.y,c.z,10);for(let h=0;h<14;h++)this.fx.norm.emit({x:c.x+G(-.4,.4),y:c.y+.1,z:c.z+G(-.4,.4),vx:G(-2,2),vy:G(3,6),vz:G(-2,2),g:18,life:.8,size:2,color:"#9a9284",floor:c.y});this.audio.play("impact")}let l=!1;for(let c of this.enemies){if(c.dead||c.spawning)continue;let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z,u=Math.hypot(h,d),f=c.type==="wisp"?c.y+1.3:c.y;if(Math.abs(f-t.y)>2.2||u>n+c.radius||u>.6&&Math.abs(Mi(o,Math.atan2(h,d)))>i)continue;let p=Math.random()<.15,_=Math.round((e===2?G(24,30):e===3?G(18,23):G(13,17))*(p?1.8:1));this.damageEnemy(c,_,p,e===2?9:5.5,e===2?.4:.25),l=!0}for(let c of this.projectiles){if(c.owner!=="enemy"||c.dead)continue;let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z;Math.hypot(h,d)<n+.3&&Math.abs(Mi(o,Math.atan2(h,d)))<i+.3&&(c.owner="player",c.dir.set(Math.sin(o),0,Math.cos(o)),c.speed*=1.6,c.dmg=30,c.life=1.2,c.hitSet=new Set,this.audio.play("block"),this.fx.spark(c.pos.x,c.pos.y,c.pos.z,10,"#bff4ff",5),this.ui.toast("\uD295\uACA8\uB0B4\uAE30!",.8),this.hitstop=Math.max(this.hitstop,.06))}for(let c of this.world.drums){let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z;Math.hypot(h,d)<n+1.3&&Math.abs(Mi(o,Math.atan2(h,d)))<i&&(this.drumHit(c),l=!0)}l&&this.shake(e===2?.22:.12)}damageEnemy(t,e,n,i,r){let o=this.player,a=ae(t.pos.x-o.pos.x,0,t.pos.z-o.pos.z).normalize();if(!t.hit(e,a,i,r))return;let l=t.center().clone();if(this.fx.spark(l.x,l.y,l.z,n?18:10,n?"#fff07a":"#ffffff",n?8:6),this.fx.number(l.clone().add(ae(0,.5*(t.type==="boss"?2:1),0)),e,n?"crit":"normal"),this.audio.play(n?"crit":"hit"),this.hitstop=Math.max(this.hitstop,n?.085:.05),this.hitCombo=this.time-this.lastHitTime<2?this.hitCombo+1:1,this.lastHitTime=this.time,this.hitCombo>this.bestCombo&&(this.bestCombo=this.hitCombo),o.lastCombat=this.time,t.type==="boss"&&!t.dead){let c=t.hp/t.maxHp;if(c<.6&&t.summoned===0||c<.3&&t.summoned===1){t.summoned++,this.audio.play("laugh"),this.ui.toast('\uB450\uC5B5\uC2DC\uB2C8: "\uC598\uB4E4\uC544, \uB098\uC640\uB77C \uB69D\uB531!"',2);for(let h=0;h<2+this.round;h++)this.spawnQueue.push({type:h===0?"red":"blue",at:this.time+.3+h*.3})}}}spawnSwordWave(t){let e=ae(Math.sin(t.yaw),0,Math.cos(t.yaw)),n=ae(t.pos.x,t.y,t.pos.z),i=ae(t.pos.x,t.y+.75,t.pos.z).addScaledVector(e,.6),r={owner:"player",kind:"wave",pos:i,dir:e,yaw:t.yaw,speed:16,life:.6,dmg:34,hitSet:new Set,radius:1.3,trailT:0},o=a=>a.g.position.copy(r.pos);r.vis=[this.fx.slash(i,t.yaw,0,{inner:.25,outer:2,len:2.4,dur:.6,color:"#2f7dff",static:!0,move:o}),this.fx.slash(i,t.yaw,0,{inner:.9,outer:1.85,len:2.2,dur:.6,color:"#8fe4ff",static:!0,move:o}),this.fx.slash(i,t.yaw,0,{inner:1.55,outer:1.8,len:2,dur:.6,color:"#ffffff",static:!0,move:o})],this.projectiles.push(r),this.audio.play("skill"),this.fx.ring(n,2.6,"#7fd8ff",.4),this.fx.ring(n,1.3,"#ffffff",.22),this.fx.spark(i.x,i.y,i.z,18,"#d8f6ff",7);for(let a=0;a<24;a++){let l=a/24*Math.PI*2;this.fx.add.emit({x:n.x+Math.cos(l)*.4,y:n.y+.08,z:n.z+Math.sin(l)*.4,vx:Math.cos(l)*5,vy:G(.2,1.2),vz:Math.sin(l)*5,drag:4,life:G(.25,.45),size:3,endSize:1,color:"#bff4ff",color2:"#2050ff"})}this.ui.flash("#3a8cff",.18),this.hitstop=Math.max(this.hitstop,.05),this.shake(.22)}swordWaveTrail(t,e){let n=this.fx;t.trailT-=e,t.trailT<=0&&(t.trailT=.03,n.slash(t.pos.clone(),t.yaw,0,{inner:.6,outer:1.95,len:2.3,dur:.18,color:"#2a5cff",static:!0,fadeAll:!0}));let i=ae(t.dir.z,0,-t.dir.x);for(let o=0;o<5;o++){let a=G(-1.1,1.1),l=G(1.2,1.9),c=t.pos.x+(t.dir.x*Math.cos(a)+i.x*Math.sin(a))*l,h=t.pos.z+(t.dir.z*Math.cos(a)+i.z*Math.sin(a))*l;n.add.emit({x:c,y:t.pos.y+G(-.15,.25),z:h,vx:-t.dir.x*G(2,5),vy:G(0,1.2),vz:-t.dir.z*G(2,5),drag:3,life:G(.25,.5),size:G(2,4),endSize:1,color:"#e0faff",color2:"#2050ff"})}let r=this.world.heightAt(t.pos.x,t.pos.z);for(let o=0;o<3;o++){let a=G(-1.3,1.3);n.add.emit({x:t.pos.x+i.x*a,y:r+.06,z:t.pos.z+i.z*a,life:G(.5,.9),size:2,color:"#7fd8ff",alpha:.8})}}swordWaveEnd(t){let e=this.fx;for(let n of t.vis)n.kill=!0;this.audio.play("burst"),e.ring(ae(t.pos.x,this.world.heightAt(t.pos.x,t.pos.z),t.pos.z),2.2,"#7fd8ff",.35);for(let n=0;n<36;n++){let i=Math.random()*Math.PI*2,r=G(-.3,1);e.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,vx:Math.cos(i)*G(2,6),vy:r*4,vz:Math.sin(i)*G(2,6),g:6,drag:2.5,life:G(.3,.7),size:G(2,4),endSize:1,color:"#e0faff",color2:"#1a40ff"})}}playerShoot(t,e){let n=e%10===2;if(t.cls==="mage"){let i=n?[-.28,0,.28]:[0];for(let r of i)this.spawnTalisman(t,t.yaw+r,n?15:19);this.audio.play("cast")}else{let i=n?[-.14,0,.14]:[0];for(let r of i)this.spawnArrow(t,t.yaw+r,{dmg:n?14:16});this.audio.play("bow")}}playerSkillHit(t,e){t.cls==="mage"?this.castLightning(t):t.cls==="elf"&&this.windArrows(t)}handPos(t,e=ae()){return e.set(t.pos.x+Math.sin(t.yaw)*.5,t.y+.95,t.pos.z+Math.cos(t.yaw)*.5)}spawnTalisman(t,e,n){let i=ae(Math.sin(e),0,Math.cos(e)),r=this.handPos(t),o=new Kt,a=new Tt(new Oe(.24,.36),new Re({color:"#f6d870",side:ve})),l=new Tt(new Oe(.06,.26),new Re({color:"#c8302c",side:ve}));l.position.z=.002,a.add(l),o.add(a),o.position.copy(r),this.scene.add(o),this.projectiles.push({owner:"player",kind:"talisman",pos:r,dir:i,yaw:e,speed:13,life:.8,dmg:n,mesh:o,paper:a,radius:.5,hitSet:new Set,knock:4,stun:.3})}talismanBurst(t){let e=this.fx,n=t.pos;this.audio.play("fire"),e.ring(ae(n.x,this.world.heightAt(n.x,n.z),n.z),1.7,"#ffb050",.3);for(let i=0;i<26;i++){let r=Math.random()*Math.PI*2,o=G(1.5,4.5);e.add.emit({x:n.x,y:n.y,z:n.z,vx:Math.cos(r)*o,vy:G(.5,3.5),vz:Math.sin(r)*o,g:3,drag:3,life:G(.25,.55),size:G(2,5),endSize:1,color:"#fff2a0",color2:"#ff3a10",flicker:.3})}e.smoke(n.x,n.y-.2,n.z,5);for(let i of this.enemies)i.dead||i.spawning||i===t.hitEnemy||Math.hypot(i.pos.x-n.x,i.pos.z-n.z)<1.5+i.radius&&this.damageEnemy(i,Math.round(t.dmg*.6),!1,3,.2)}spawnArrow(t,e,{dmg:n=16,pierce:i=!1,glow:r=!1,speed:o=26,life:a=.55}={}){let l=ae(Math.sin(e),0,Math.cos(e)),c=this.handPos(t),h=new Kt,d=new Re({color:r?"#c8ff9a":"#9a7a52"}),u=new Tt(new Bt(.04,.04,.78),d),f=new Tt(new Ee(.05,.14,4),new Re({color:r?"#ffffff":"#d8dde4"}));f.rotation.x=Math.PI/2,f.position.z=.44;let p=new Tt(new Bt(.1,.02,.14),new Re({color:r?"#8aff6a":"#f0ece0"}));p.position.z=-.32,h.add(u,f,p),h.position.copy(c),h.rotation.y=e,this.scene.add(h),this.projectiles.push({owner:"player",kind:"arrow",pos:c,dir:l,yaw:e,speed:o,life:a,dmg:n,mesh:h,radius:.4,hitSet:new Set,pierce:i,glow:r,knock:i?5:3,stun:i?.3:.18})}missileTrail(t,e){let n=this.fx;if(t.kind==="talisman"){t.paper.rotation.z+=e*18,t.paper.rotation.y=Math.sin(this.time*20)*.5,t.mesh.position.copy(t.pos);for(let r=0;r<2;r++)n.add.emit({x:t.pos.x+G(-.1,.1),y:t.pos.y+G(-.1,.1),z:t.pos.z+G(-.1,.1),vx:-t.dir.x*2+G(-.4,.4),vy:G(.4,1.4),vz:-t.dir.z*2+G(-.4,.4),life:G(.2,.4),size:G(2,4),endSize:1,color:"#ffe080",color2:"#ff3010",flicker:.3})}else if(t.mesh.position.copy(t.pos),t.glow)for(let r=0;r<2;r++)n.add.emit({x:t.pos.x+G(-.08,.08),y:t.pos.y+G(-.08,.08),z:t.pos.z+G(-.08,.08),vx:-t.dir.x*3,vy:G(0,.6),vz:-t.dir.z*3,life:G(.2,.4),size:G(2,3),endSize:1,color:"#e8ffc8",color2:"#3aa83a"});else Math.random()<.6&&n.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,life:.12,size:2,color:"#fff8e0",alpha:.6});this.world.heightAt(t.pos.x,t.pos.z)>t.pos.y-.3&&(t.life=0)}castLightning(t){let e=null,n=11;for(let a of this.enemies){if(a.dead||a.spawning)continue;let l=a.pos.x-t.pos.x,c=a.pos.z-t.pos.z,h=Math.hypot(l,c);h<n&&Math.abs(Mi(t.yaw,Math.atan2(l,c)))<1&&(n=h,e=a)}let i=e?ae(e.pos.x,0,e.pos.z):ae(t.pos.x+Math.sin(t.yaw)*5,0,t.pos.z+Math.cos(t.yaw)*5);i.y=this.world.heightAt(i.x,i.z);let r=2.9,o=this.fx.ring(i,r,"#b89aff",1,1);this.fx.ring(this.handPos(t),1.2,"#d8c8ff",.3),this.audio.play("charge"),this.shake(.12),this.timers.push({at:this.time+.42,fn:()=>{this.fx.removeRing(o),[i,...[0,1,2].map(()=>ae(i.x+G(-1.8,1.8),i.y,i.z+G(-1.8,1.8)))].forEach((l,c)=>this.fx.bolt(l,c===0?1.4:.9)),this.audio.play("thunder"),this.ui.flash("#e8e0ff",.55),this.shake(.6),this.hitstop=Math.max(this.hitstop,.08),this.fx.ring(i,r*1.25,"#d8c8ff",.4),this.fx.ring(i,r*.6,"#ffffff",.25);for(let l=0;l<50;l++){let c=Math.random()*Math.PI*2,h=G(2,8);this.fx.add.emit({x:i.x,y:i.y+.3,z:i.z,vx:Math.cos(c)*h,vy:G(1,6),vz:Math.sin(c)*h,g:10,drag:2,life:G(.3,.7),size:G(2,4),endSize:1,color:"#ffffff",color2:"#7a5aff"})}for(let l=0;l<30;l++){let c=l/30*Math.PI*2,h=G(.5,r);this.fx.add.emit({x:i.x+Math.cos(c)*h,y:i.y+.06,z:i.z+Math.sin(c)*h,life:G(.6,1.2),size:2,color:"#b89aff",alpha:.8,flicker:.6})}for(let l of this.enemies)if(!(l.dead||l.spawning)&&Math.hypot(l.pos.x-i.x,l.pos.z-i.z)<r+l.radius){let c=Math.random()<.2;this.damageEnemy(l,Math.round(G(44,54)*(c?1.8:1)),c,3,.7);let h=l.center();this.fx.spark(h.x,h.y,h.z,10,"#e8e0ff",6)}}})}windArrows(t){for(let n=0;n<9;n++)this.spawnArrow(t,t.yaw+(n-4)*.13,{dmg:22,pierce:!0,glow:!0,speed:24,life:.6});this.audio.play("bowskill");let e=ae(t.pos.x,t.y,t.pos.z);this.fx.ring(e,2.4,"#a8ff8a",.4),this.fx.ring(this.handPos(t),1.4,"#ffffff",.25);for(let n=0;n<26;n++){let i=t.yaw+G(-.7,.7);this.fx.norm.emit({x:e.x,y:e.y+G(.3,1.2),z:e.z,vx:Math.sin(i)*G(3,8),vy:G(0,1.5),vz:Math.cos(i)*G(3,8),drag:2,wob:1,life:G(.5,1),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"})}this.ui.flash("#6aff7a",.15),this.shake(.18)}spawnOrb(t){let e=this.player,n=ae(t.pos.x,t.y+1.3,t.pos.z),r=ae(e.pos.x+e.vel.x*.3,e.y+.7,e.pos.z+e.vel.z*.3).sub(n).setY(0).normalize(),o=new Tt(new Ze(.2,1),new Re({color:"#d8fbff"}));o.position.copy(n),this.scene.add(o),this.projectiles.push({owner:"enemy",kind:"orb",pos:n,dir:r,speed:7,life:3,dmg:t.dmg,mesh:o,radius:.45,hitSet:new Set,y:n.y})}bossSlam(t,e,n,i,r=!1){this.audio.play("slam"),this.shake(r?.9:.6),this.alarm=2,this.fx.ring(e,n*1.15,"#ffd6a0",.45),this.fx.ring(e,n*.7,"#ffffff",.3);for(let a=0;a<40;a++){let l=a/40*Math.PI*2;this.fx.norm.emit({x:e.x+Math.cos(l)*n*.6,y:e.y+.1,z:e.z+Math.sin(l)*n*.6,vx:Math.cos(l)*4,vy:G(1,3),vz:Math.sin(l)*4,g:6,drag:3,life:G(.4,.8),size:4,endSize:1,color:"#c8bca0"})}for(let a=0;a<18;a++)this.fx.norm.emit({x:e.x+G(-1,1),y:e.y+.2,z:e.z+G(-1,1),vx:G(-3,3),vy:G(4,8),vz:G(-3,3),g:20,life:1,size:3,color:"#8a8478",floor:e.y});let o=this.player;Math.hypot(o.pos.x-e.x,o.pos.z-e.z)<n+o.radius&&Math.abs(o.pos.y-e.y)<1.2&&o.damage(i,e)}onEnemyKilled(t){this.kills++,this.updateQuest(),t.type==="boss"&&(this.hitstop=.25,this.shake(1),this.ui.flash("#ffffff",.6))}checkWave(){!this.waveActive||this.wave===0||this.spawnQueue.length||this.enemies.some(t=>!t.dead)||this.waveClearing||(this.waveClearing=!0,this.wave>=3?setTimeout(()=>this.victory(),1500):(this.ui.banner("\uACA9\uD1F4!",`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C \uC644\uB8CC`,1.8),setTimeout(()=>{this.waveClearing=!1,this.nextWave()},2600)))}victory(){this.waveClearing=!1,this.waveActive=!1,this.round++,this.stage=3,this.nightTarget=0,this.audio.mood="day",this.audio.play("victory"),this.player.hp=this.player.maxHp,this.ui.banner("\uC2B9\uB9AC","\uB3C4\uAE68\uBE44\uB4E4\uC774 \uB2EC\uC544\uB098\uACE0 \uB3D9\uC774 \uD2BC\uB2E4",4,"win-banner"),this.updateQuest(),this.save()}onPlayerDeath(){this.state="dead",setTimeout(()=>document.getElementById("gameover").classList.add("show"),900)}retry(){document.getElementById("gameover").classList.remove("show"),this.state="play",this.player.reset();for(let t of this.enemies)t.dispose();this.enemies=[],this.spawnQueue=[];for(let t of this.projectiles)t.mesh&&this.scene.remove(t.mesh);this.projectiles=[],this.timers=[],this.ui.setBoss(null),this.waveClearing=!1,this.waveActive&&(this.wave=Math.max(0,this.wave-1),setTimeout(()=>this.nextWave(),1200))}shake(t){this.shakeAmt=Math.min(1.2,Math.max(this.shakeAmt,t))}screenFlash(t,e){this.ui.flash(e,.35)}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){let n=this.projectiles[e];if(n.life-=t,n.pos.addScaledVector(n.dir,n.speed*t),n.kind==="orb"){n.mesh.position.copy(n.pos),n.mesh.material.color.set(n.owner==="player"?"#ffffff":"#d8fbff"),Math.random()<.9&&this.fx.add.emit({x:n.pos.x+G(-.1,.1),y:n.pos.y+G(-.1,.1),z:n.pos.z+G(-.1,.1),vx:G(-.3,.3),vy:G(.2,.8),vz:G(-.3,.3),life:G(.2,.45),size:3,endSize:1,color:"#8ff0ff",color2:"#1a40ff"});let i=this.world.heightAt(n.pos.x,n.pos.z);(i>n.pos.y-.4||this.world.isBlocked(n.pos.x,n.pos.z,.05,i)&&i>n.pos.y-1)&&(n.life=0)}else n.kind==="wave"?this.swordWaveTrail(n,t):(n.kind==="talisman"||n.kind==="arrow")&&this.missileTrail(n,t);if(n.owner==="player"&&(n.kind==="talisman"||n.kind==="arrow"))for(let i of this.world.drums)Math.hypot(i.pos.x-n.pos.x,i.pos.z-n.pos.z)<1.25&&(this.drumHit(i),n.life=0);if(n.owner==="player")for(let i of this.enemies){if(i.dead||i.spawning||n.hitSet.has(i))continue;if(Math.hypot(i.pos.x-n.pos.x,i.pos.z-n.pos.z)<n.radius+i.radius){n.hitSet.add(i);let o=Math.random()<(n.kind==="arrow"?.25:.2);if(this.damageEnemy(i,Math.round(n.dmg*(o?1.8:1)*G(.9,1.1)),o,n.knock??7,n.stun??.35),n.kind==="wave"){let a=i.center().clone();this.fx.cross(a,"#9fe8ff",i.type==="boss"?5.5:3.8),this.fx.ring(ae(i.pos.x,i.y,i.pos.z),i.type==="boss"?3:1.8,"#9fe8ff",.3),this.fx.spark(a.x,a.y,a.z,14,"#d8f6ff",7),this.audio.play("skillhit"),this.hitstop=Math.max(this.hitstop,.07)}if(n.kind==="orb"&&(n.life=0),n.kind==="talisman"&&(n.hitEnemy=i,n.life=0),n.kind==="arrow"){this.audio.play("arrowhit");let a=i.center();this.fx.spark(a.x,a.y,a.z,n.pierce?10:6,n.pierce?"#c8ff9a":"#ffffff",5),n.pierce&&this.fx.cross(a.clone(),"#a8ff8a",i.type==="boss"?3.5:2.4,.25),n.pierce||(n.life=0,n.stuck=!0)}if(n.life<=0)break}}else{let i=this.player;Math.hypot(i.pos.x-n.pos.x,i.pos.z-n.pos.z)<n.radius+i.radius*.5&&i.dashT<=0&&i.damage(n.dmg,n.pos)&&(n.life=0)}n.life<=0&&(n.kind==="wave"&&this.swordWaveEnd(n),n.kind==="talisman"&&this.talismanBurst(n),n.mesh&&(this.scene.remove(n.mesh),n.kind==="orb"&&this.fx.blueFire(n.pos.x,n.pos.y-.2,n.pos.z,10,.2),n.kind==="arrow"&&this.fx.spark(n.pos.x,n.pos.y,n.pos.z,3,"#e8dcc0",2)),this.projectiles.splice(e,1))}}separate(){let t=[this.player,...this.enemies.filter(e=>!e.dead&&e.type!=="wisp")];for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let i=t[e],r=t[n],o=r.pos.x-i.pos.x,a=r.pos.z-i.pos.z,l=Math.hypot(o,a),c=i.radius+r.radius;if(l<c&&l>1e-4){let h=(c-l)*.5,d=o/l,u=a/l,f=i===this.player?.3:i.type==="boss"?.1:1,p=r.type==="boss"?.1:1;this.world.move(i.pos,-d*h*f,-u*h*f,i.moveR??i.radius),this.world.move(r.pos,d*h*p,u*h*p,r.moveR??r.radius)}}}ambient(t){let e=this.focus,n=this.night;Math.random()<t*6*(1-n)&&this.fx.norm.emit({x:e.x+G(-18,18),y:G(4,8),z:e.z+G(-16,10),vx:G(.4,1),vy:-.6,vz:G(-.2,.3),wob:1.2,life:7,size:2,color:Math.random()<.6?"#f6c8d4":"#fff4f0",floor:.02,alpha:.95}),Math.random()<t*14*n&&this.fx.add.emit({x:e.x+G(-18,18),y:G(.4,2.5),z:e.z+G(-14,10),vx:G(-.3,.3),vy:G(-.1,.2),vz:G(-.3,.3),wob:.8,life:G(2.5,5),size:2,color:Math.random()<.3?"#9ff0ff":"#d8ff8a",flicker:.8})}simulate(t,e){if(this.player.update(t,e),this.flowT-=t,this.enemies.length&&this.flowT<=0){this.flowT=.15;let n=this.player.pos;this.world.updateFlow(n.x,n.z,0),this.enemies.some(i=>i.type==="boss"&&!i.dead)&&this.world.updateFlow(n.x,n.z,1)}for(let n=this.enemies.length-1;n>=0;n--){let i=this.enemies[n];i.update(t)||(i.dispose(),this.enemies.splice(n,1))}this.separate(),this.updateProjectiles(t);for(let n=this.timers.length-1;n>=0;n--)if(this.timers[n].at<=this.time){let i=this.timers[n];this.timers.splice(n,1),i.fn()}for(;this.spawnQueue.length&&this.spawnQueue[0].at<=this.time;)this.spawnEnemy(this.spawnQueue.shift().type);this.spawnQueue.sort((n,i)=>n.at-i.at),this.checkWave(),(this.enemies.length||this.spawnQueue.length)&&this.updateQuest()}stepSim(t){this.time+=t,yn.time.value+=t,this.simulate(t,{mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null})}spawnEnemyAt(t,e,n){let i=new Cr(this,t,ae(e,this.world.heightAt(e,n),n),1+this.round);return this.enemies.push(i),i}loop(t){requestAnimationFrame(this.loop);let e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.audio.update(),this.state==="play"&&(this.saveT-=e,this.saveT<=0&&this.save());let n=e;this.hitstop>0&&(this.hitstop-=e,n=e*.05),this.time+=n,yn.time.value+=n,this.night=ki(this.night,this.nightTarget,1.2,e),Math.abs(this.night-this.nightTarget)<.002&&(this.night=this.nightTarget),this.alarm=Math.max(0,this.alarm-e);let i=this.readInput();this.state!=="title"?this.simulate(n,i):this.player.update(n,i);for(let l of this.npcs)l.update(n);for(let l of this.birds)l.update(n);this.world.update(n,this.time),this.ambient(n),this.fx.update(n),yn.player.value.copy(this.player.pos),this.nearInteract=this.state==="play"?this.findInteract():null;let r;if(this.state==="title"){let l=Math.sin(this.time*.12)*.5+.5;r=ae(Math.sin(this.time*.07)*4,.5,Ct(10,-6,l)),this.focus.copy(r)}else{let l=this.player;this.lead.x=ki(this.lead.x,l.vel.x*.28,3,e),this.lead.z=ki(this.lead.z,l.vel.z*.28,3,e),r=ae(l.pos.x+this.lead.x,l.y+.6,l.pos.z+this.lead.z-.8),this.focus.x=ki(this.focus.x,r.x,7,e),this.focus.y=ki(this.focus.y,r.y,5,e),this.focus.z=ki(this.focus.z,r.z,7,e)}this.shakeAmt=Math.max(0,this.shakeAmt-e*2.2);let o=this.shakeAmt*this.shakeAmt*.45,a=this.focus.clone().add(ae(G(-o,o),0,G(-o,o)*.6));this.pixel.setFocus(a),this.updateLights(e),this.ui.update(e),this.pixel.render(this.scene)}},Jx=new A,$x=new A,gd=new A,Kx=new A;window.addEventListener("DOMContentLoaded",()=>{try{window.game=new Hc}catch(s){console.error(s),document.getElementById("title").innerHTML=`<div class="err">WebGL\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.<br><small>${s.message}</small></div>`}});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
