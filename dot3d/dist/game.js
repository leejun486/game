(()=>{var Jc=0,hl=1,$c=2;var Ci=1,Kc=2,fs=3,pi=0,rn=1,De=2,Hn=0,ps=1,Ii=2,ul=3,dl=4,Ma=5;var Pi=100,jc=101,Qc=102,th=103,eh=104,nh=200,Sa=201,ih=202,sh=203,fl=204,nr=205,rh=206,ah=207,oh=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,Xr=0,qr=1,Yr=2,es=3,Zr=4,Jr=5,$r=6,Kr=7,pl=0,ph=1,mh=2,In=0,ml=1,gl=2,xl=3,_l=4,yl=5,vl=6,Ml=7;var Sl=300,mi=301,Li=302,ba=303,Ea=304,ir=306,ns=1e3,Un=1001,jr=1002,ue=1003,gh=1004;var sr=1005;var Pe=1006,wa=1007;var gi=1008;var ln=1009,bl=1010,El=1011,ms=1012,Ta=1013,mn=1014,vn=1015,gn=1016,Aa=1017,Ra=1018,gs=1020,wl=35902,Tl=35899,Al=1021,Rl=1022,cn=1023,Fn=1026,xi=1027,Ca=1028,Ia=1029,_i=1030,Pa=1031;var La=1033,rr=33776,ar=33777,or=33778,lr=33779,Da=35840,Na=35841,Ua=35842,Fa=35843,Ba=36196,Oa=37492,za=37496,ka=37488,Ha=37489,cr=37490,Va=37491,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,Ja=37814,$a=37815,Ka=37816,ja=37817,Qa=37818,to=37819,eo=37820,no=37821,io=36492,so=36494,ro=36495,ao=36283,oo=36284,hr=36285,lo=36286;var Ns=2300,Qr=2301,Gr=2302,el=2303,nl=2400,il=2401,sl=2402;var xh=3200,Cl=3201;var ur=0,_h=1,Pn="",en="srgb",wi="srgb-linear",Us="linear",ae="srgb";var Wr=7680;var yh=519,vh=512,Mh=513,Sh=514,co=515,bh=516,Eh=517,ho=518,wh=519,Th=35044,xs=35048;var Il="300 es",Rn=2e3,is=2001;function Hu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ah(){let s=Fs("canvas");return s.style.display="block",s}var bc={},ss=null;function Pl(...s){let t="THREE."+s.shift();ss?ss("log",t,...s):console.log(t,...s)}function Rh(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ft(...s){s=Rh(s);let t="THREE."+s.shift();if(ss)ss("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function zt(...s){s=Rh(s);let t="THREE."+s.shift();if(ss)ss("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ei(...s){let t=s.join(" ");t in bc||(bc[t]=!0,Ft(...s))}function Ch(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ih={[Xr]:qr,[Yr]:$r,[Zr]:Kr,[es]:Jr,[qr]:Xr,[$r]:Yr,[Kr]:Zr,[Jr]:es},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=1234567,Ls=Math.PI/180,rs=180/Math.PI;function _s(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function Ll(s,t){return(s%t+t)%t}function Gu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Wu(s,t,e){return s!==t?(e-s)/(t-s):0}function Ds(s,t,e){return(1-e)*s+e*t}function Xu(s,t,e,n){return Ds(s,t,1-Math.exp(-e*n))}function qu(s,t=1){return t-Math.abs(Ll(s,t*2)-t)}function Yu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Zu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ju(s,t){return s+Math.floor(Math.random()*(t-s+1))}function $u(s,t){return s+Math.random()*(t-s)}function Ku(s){return s*(.5-Math.random())}function ju(s){s!==void 0&&(Ec=s);let t=Ec+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qu(s){return s*Ls}function td(s){return s*rs}function ed(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function nd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function id(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function sd(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Dl={DEG2RAD:Ls,RAD2DEG:rs,generateUUID:_s,clamp:jt,euclideanModulo:Ll,mapLinear:Gu,inverseLerp:Wu,lerp:Ds,damp:Xu,pingpong:qu,smoothstep:Yu,smootherstep:Zu,randInt:Ju,randFloat:$u,randFloatSpread:Ku,seededRandom:ju,degToRad:Qu,radToDeg:td,isPowerOfTwo:ed,ceilPowerOfTwo:nd,floorPowerOfTwo:id,setQuaternionFromProperEuler:sd,normalize:tn,denormalize:Qi},Ol=class Ol{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ol.prototype.isVector2=!0;var Bt=Ol,Fe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==m){let g=l*u+c*f+h*m+d*v;g<0&&(u=-u,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let S=Math.acos(g),R=Math.sin(S);p=Math.sin(p*S)/R,o=Math.sin(o*S)/R,l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+m*o,d=d*p+v*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-o*f,t[e+2]=c*m+h*f+o*u-l*d,t[e+3]=h*m-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zl=class zl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zl.prototype.isVector3=!0;var I=zl,No=new I,wc=new Fe,kl=class kl{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],S=i[1],R=i[4],y=i[7],E=i[2],b=i[5],T=i[8];return r[0]=a*v+o*S+l*E,r[3]=a*g+o*R+l*b,r[6]=a*p+o*y+l*T,r[1]=c*v+h*S+d*E,r[4]=c*g+h*R+d*b,r[7]=c*p+h*y+d*T,r[2]=u*v+f*S+m*E,r[5]=u*g+f*R+m*b,r[8]=u*p+f*y+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=d*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uo.makeScale(t,e)),this}rotate(t){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uo.makeRotation(-t)),this}translate(t,e){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};kl.prototype.isMatrix3=!0;var Ht=kl,Uo=new Ht,Tc=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rd(){let s={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ae&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ae&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?Us:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wi]:{primaries:t,whitePoint:n,transfer:Us,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),s}var te=rd();function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var zi,ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{zi===void 0&&(zi=Fs("canvas")),zi.width=t.width,zi.height=t.height;let i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ad=0,as=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fo(i[a].image)):r.push(Fo(i[a]))}else r=Fo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ta.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var od=0,Bo=new I,sn=class s extends Bn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Un,i=Un,r=Pe,a=gi,o=cn,l=ln,c=s.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=_s(),this.name="",this.source=new as(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bo).x}get height(){return this.source.getSize(Bo).y}get depth(){return this.source.getSize(Bo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ns:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case jr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ns:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case jr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Sl;sn.DEFAULT_ANISOTROPY=1;var Hl=class Hl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,y=(f+1)/2,E=(p+1)/2,b=(h+u)/4,T=(d+v)/4,x=(m+g)/4;return R>y&&R>E?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=b/n,r=T/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=x/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=x/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;var Me=Hl,ea=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new sn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new as(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ge=class extends ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bs=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var na=class extends sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ue,this.minFilter=ue,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var va=class va{constructor(t,e,n,i,r,a,o,l,c,h,d,u,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,f,m,v,g)}set(t,e,n,i,r,a,o,l,c,h,d,u,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new va().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,m=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u+v*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,m=o*h,v=o*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=m*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ld,t,cd)}lookAt(t,e,n){let i=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),ii.crossVectors(n,hn),ii.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),ii.crossVectors(n,hn)),ii.normalize(),Mr.crossVectors(hn,ii),i[0]=ii.x,i[4]=Mr.x,i[8]=hn.x,i[1]=ii.y,i[5]=Mr.y,i[9]=hn.y,i[2]=ii.z,i[6]=Mr.z,i[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],S=n[3],R=n[7],y=n[11],E=n[15],b=i[0],T=i[4],x=i[8],w=i[12],C=i[1],P=i[5],D=i[9],B=i[13],L=i[2],z=i[6],q=i[10],Z=i[14],W=i[3],k=i[7],$=i[11],Q=i[15];return r[0]=a*b+o*C+l*L+c*W,r[4]=a*T+o*P+l*z+c*k,r[8]=a*x+o*D+l*q+c*$,r[12]=a*w+o*B+l*Z+c*Q,r[1]=h*b+d*C+u*L+f*W,r[5]=h*T+d*P+u*z+f*k,r[9]=h*x+d*D+u*q+f*$,r[13]=h*w+d*B+u*Z+f*Q,r[2]=m*b+v*C+g*L+p*W,r[6]=m*T+v*P+g*z+p*k,r[10]=m*x+v*D+g*q+p*$,r[14]=m*w+v*B+g*Z+p*Q,r[3]=S*b+R*C+y*L+E*W,r[7]=S*T+R*P+y*z+E*k,r[11]=S*x+R*D+y*q+E*$,r[15]=S*w+R*B+y*Z+E*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15],S=l*f-c*u,R=o*f-c*d,y=o*u-l*d,E=a*f-c*h,b=a*u-l*h,T=a*d-o*h;return e*(v*S-g*R+p*y)-n*(m*S-g*E+p*b)+i*(m*R-v*E+p*T)-r*(m*y-v*b+g*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],S=e*o-n*a,R=e*l-i*a,y=e*c-r*a,E=n*l-i*o,b=n*c-r*o,T=i*c-r*l,x=h*v-d*m,w=h*g-u*m,C=h*p-f*m,P=d*g-u*v,D=d*p-f*v,B=u*p-f*g,L=S*B-R*D+y*P+E*C-b*w+T*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return t[0]=(o*B-l*D+c*P)*z,t[1]=(i*D-n*B-r*P)*z,t[2]=(v*T-g*b+p*E)*z,t[3]=(u*b-d*T-f*E)*z,t[4]=(l*C-a*B-c*w)*z,t[5]=(e*B-i*C+r*w)*z,t[6]=(g*y-m*T-p*R)*z,t[7]=(h*T-u*y+f*R)*z,t[8]=(a*D-o*C+c*x)*z,t[9]=(n*C-e*D-r*x)*z,t[10]=(m*b-v*y+p*S)*z,t[11]=(d*y-h*b-f*S)*z,t[12]=(o*w-a*P-l*x)*z,t[13]=(e*P-n*w+i*x)*z,t[14]=(v*R-m*E-g*S)*z,t[15]=(h*E-d*R+u*S)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,m=r*d,v=a*h,g=a*d,p=o*d,S=l*c,R=l*h,y=l*d,E=n.x,b=n.y,T=n.z;return i[0]=(1-(v+p))*E,i[1]=(f+y)*E,i[2]=(m-R)*E,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+p))*b,i[6]=(g+S)*b,i[7]=0,i[8]=(m+R)*T,i[9]=(g-S)*T,i[10]=(1-(u+v))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ki.set(i[0],i[1],i[2]).length(),o=ki.set(i[4],i[5],i[6]).length(),l=ki.set(i[8],i[9],i[10]).length();r<0&&(a=-a),En.copy(this);let c=1/a,h=1/o,d=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Rn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,v;if(l)m=r/(a-r),v=a*r/(a-r);else if(o===Rn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===is)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Rn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),m,v;if(l)m=1/(a-r),v=a/(a-r);else if(o===Rn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===is)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};va.prototype.isMatrix4=!0;var Jt=va,ki=new I,En=new Jt,ld=new I(0,0,0),cd=new I(1,1,1),ii=new I,Mr=new I,hn=new I,Rc=new Jt,Cc=new Fe,on=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hd=0,Ic=new I,Hi=new Fe,Wn=new Jt,Sr=new I,Ts=new I,ud=new I,dd=new Fe,Pc=new I(1,0,0),Lc=new I(0,1,0),Dc=new I(0,0,1),Nc={type:"added"},fd={type:"removed"},Vi={type:"childadded",child:null},Oo={type:"childremoved",child:null},We=class s extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new on,n=new Fe,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ht}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Pc,t)}rotateY(t){return this.rotateOnAxis(Lc,t)}rotateZ(t){return this.rotateOnAxis(Dc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pc,t)}translateY(t){return this.translateOnAxis(Lc,t)}translateZ(t){return this.translateOnAxis(Dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ts,Sr,this.up):Wn.lookAt(Sr,Ts,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new I(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var le=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},pd={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},br={h:0,s:0,l:0};function zo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Ll(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zo(a,r,t+1/3),this.g=zo(a,r,t),this.b=zo(a,r,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return te.workingToColorSpace(Ke.copy(this),t),Math.round(jt(Ke.r*255,0,255))*65536+Math.round(jt(Ke.g*255,0,255))*256+Math.round(jt(Ke.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,i=Ke.g,r=Ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=en){te.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,i=Ke.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(br);let n=Ds(si.h,br.h,e),i=Ds(si.s,br.s,e),r=Ds(si.l,br.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new St;St.NAMES=Ph;var Ti=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new I,Xn=new I,ko=new I,qn=new I,Gi=new I,Wi=new I,Uc=new I,Ho=new I,Vo=new I,Go=new I,Wo=new Me,Xo=new Me,qo=new Me,li=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){wn.subVectors(i,e),Xn.subVectors(n,e),ko.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(Xn),l=wn.dot(ko),c=Xn.dot(Xn),h=Xn.dot(ko),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Wo.setScalar(0),Xo.setScalar(0),qo.setScalar(0),Wo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Wo,r.x),a.addScaledVector(Xo,r.y),a.addScaledVector(qo,r.z),a}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),Xn.subVectors(t,e),wn.cross(Xn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),wn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Gi.subVectors(i,n),Wi.subVectors(r,n),Ho.subVectors(t,n);let l=Gi.dot(Ho),c=Wi.dot(Ho);if(l<=0&&c<=0)return e.copy(n);Vo.subVectors(t,i);let h=Gi.dot(Vo),d=Wi.dot(Vo);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Gi,a);Go.subVectors(t,r);let f=Gi.dot(Go),m=Wi.dot(Go);if(m>=0&&f<=m)return e.copy(r);let v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Wi,o);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return Uc.subVectors(r,i),o=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(Uc,o);let p=1/(g+v+u);return a=v*p,o=u*p,e.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},On=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Er.copy(n.boundingBox)),Er.applyMatrix4(t.matrixWorld),this.union(Er)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),wr.subVectors(this.max,As),Xi.subVectors(t.a,As),qi.subVectors(t.b,As),Yi.subVectors(t.c,As),ri.subVectors(qi,Xi),ai.subVectors(Yi,qi),vi.subVectors(Xi,Yi);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-vi.z,vi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,vi.z,0,-vi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-vi.y,vi.x,0];return!Yo(e,Xi,qi,Yi,wr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Xi,qi,Yi,wr))?!1:(Tr.crossVectors(ri,ai),e=[Tr.x,Tr.y,Tr.z],Yo(e,Xi,qi,Yi,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,Er=new On,Xi=new I,qi=new I,Yi=new I,ri=new I,ai=new I,vi=new I,As=new I,wr=new I,Tr=new I,Mi=new I;function Yo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Mi.fromArray(s,r);let o=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ce=new I,Ar=new Bt,md=0,Ie=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:md++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var zs=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ks=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Lt=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},gd=new On,Rs=new I,Zo=new I,$n=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Zo)),this.expandByPoint(Rs.copy(t.center).sub(Zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xd=0,yn=new Jt,Jo=new We,Zi=new I,un=new On,Cs=new On,ke=new I,ce=class s extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hu(t)?ks:zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(un.min,Cs.min),un.expandByPoint(ke),ke.addVectors(un.max,Cs.max),un.expandByPoint(ke)):(un.expandByPoint(Cs.min),un.expandByPoint(Cs.max))}un.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ke.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),ke.add(Zi)),i=Math.max(i,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;let c=new I,h=new I,d=new I,u=new Bt,f=new Bt,m=new Bt,v=new I,g=new I;function p(x,w,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[x].add(v),o[w].add(v),o[C].add(v),l[x].add(g),l[w].add(g),l[C].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,w=S.length;x<w;++x){let C=S[x],P=C.start,D=C.count;for(let B=P,L=P+D;B<L;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let R=new I,y=new I,E=new I,b=new I;function T(x){E.fromBufferAttribute(i,x),b.copy(E);let w=o[x];R.copy(w),R.sub(E.multiplyScalar(E.dot(w))).normalize(),y.crossVectors(b,w);let P=y.dot(l[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,P)}for(let x=0,w=S.length;x<w;++x){let C=S[x],P=C.start,D=C.count;for(let B=P,L=P+D;B<L;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),v=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new Ie(u,h,d)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $o=new I,_d=new I,yd=new Ht,An=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=$o.subVectors(n,e).cross(_d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta($o),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||yd.getNormalMatrix(t),i=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},vd=0,zn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=ps,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=nr,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new St().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new An().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Zn=new I,Ko=new I,Rr=new I,Cr=new I,Hs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ko.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),Cr.copy(this.origin).sub(Ko);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Rr),o=Cr.dot(this.direction),l=-Cr.dot(Rr),c=Cr.lengthSq(),h=Math.abs(1-a*a),d,u,f,m;if(h>0)if(d=a*l-o,u=a*o-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ko).addScaledVector(Rr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,m=e.x-a.x,v=e.y-a.y,g=e.z-a.z,p=n.x-a.x,S=n.y-a.y,R=n.z-a.z,y=Math.abs(l),E=Math.abs(c),b=Math.abs(h),T,x,w,C,P,D,B,L,z,q,Z,W;if(y>=E&&y>=b?(w=l,D=d,z=m,W=p,l>=0?(T=c,x=h,C=u,P=f,B=v,L=g,q=S,Z=R):(T=h,x=c,C=f,P=u,B=g,L=v,q=R,Z=S)):E>=b?(w=c,D=u,z=v,W=S,c>=0?(T=h,x=l,C=f,P=d,B=g,L=m,q=R,Z=p):(T=l,x=h,C=d,P=f,B=m,L=g,q=p,Z=R)):(w=h,D=f,z=g,W=R,h>=0?(T=l,x=c,C=d,P=u,B=m,L=v,q=p,Z=S):(T=c,x=l,C=u,P=d,B=v,L=m,q=S,Z=p)),w===0)return null;let k=T/w,$=x/w,Q=1/w,xt=C-k*D,_t=P-$*D,Vt=B-k*z,Ot=L-$*z,Xt=q-k*W,Y=Z-$*W,et=Xt*Ot-Y*Vt,yt=xt*Y-_t*Xt,Ut=Vt*_t-Ot*xt;if(i){if(et<0||yt<0||Ut<0)return null}else if((et<0||yt<0||Ut<0)&&(et>0||yt>0||Ut>0))return null;let vt=et+yt+Ut;if(vt===0)return null;let Zt=Q*(et*D+yt*z+Ut*W);return(vt>0?Zt<0:Zt>0)?null:this.at(Zt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fc=new Jt,Si=new Hs,Ir=new $n,Bc=new I,Pr=new I,Lr=new I,Dr=new I,jo=new I,Nr=new I,Oc=new I,Ur=new I,Pt=class extends We{constructor(t=new ce,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(jo.fromBufferAttribute(d,t),a?Nr.addScaledVector(jo,h):Nr.addScaledVector(jo.sub(e),h))}e.add(Nr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(Ir.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Ir,Bc)===null||Si.origin.distanceToSquared(Bc)>(t.far-t.near)**2))&&(Fc.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),R=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,E=R;y<E;y+=3){let b=o.getX(y),T=o.getX(y+1),x=o.getX(y+2);i=Fr(this,p,t,n,c,h,d,b,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let S=o.getX(g),R=o.getX(g+1),y=o.getX(g+2);i=Fr(this,a,t,n,c,h,d,S,R,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=u.length;m<v;m++){let g=u[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=S,E=R;y<E;y+=3){let b=y,T=y+1,x=y+2;i=Fr(this,p,t,n,c,h,d,b,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let S=g,R=g+1,y=g+2;i=Fr(this,a,t,n,c,h,d,S,R,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Md(s,t,e,n,i,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===pi,o),l===null)return null;Ur.copy(o),Ur.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:s}}function Fr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Pr),s.getVertexPosition(l,Lr),s.getVertexPosition(c,Dr);let h=Md(s,t,e,n,Pr,Lr,Dr,Oc);if(h){let d=new I;li.getBarycoord(Oc,Pr,Lr,Dr,d),i&&(h.uv=li.getInterpolatedAttribute(i,o,l,c,d,new Bt)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,d,new Bt)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};li.getNormal(Pr,Lr,Dr,u.normal),h.face=u,h.barycoord=d}return h}var Ai=class extends sn{constructor(t=null,e=1,n=1,i,r,a,o,l,c=ue,h=ue,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ls=class extends Ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ji=new Jt,zc=new Jt,Br=[],kc=new On,Sd=new Jt,Is=new Pt,Ps=new $n,Vs=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Sd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),kc.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(kc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Ps.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ji),zc.multiplyMatrices(n,Ji),Is.matrixWorld=zc,Is.raycast(t,Br);for(let a=0,o=Br.length;a<o;a++){let l=Br[a];l.instanceId=r,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ai(new Float32Array(i*this.count),i,this.count,Ca,vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bi=new $n,bd=new Bt(.5,.5),Or=new I,cs=class{constructor(t=new An,e=new An,n=new An,i=new An,r=new An,a=new An){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],S=r[12],R=r[13],y=r[14],E=r[15];if(i[0].setComponents(c-a,f-h,p-m,E-S).normalize(),i[1].setComponents(c+a,f+h,p+m,E+S).normalize(),i[2].setComponents(c+o,f+d,p+v,E+R).normalize(),i[3].setComponents(c-o,f-d,p-v,E-R).normalize(),n)i[4].setComponents(l,u,g,y).normalize(),i[5].setComponents(c-l,f-u,p-g,E-y).normalize();else if(i[4].setComponents(c-l,f-u,p-g,E-y).normalize(),e===Rn)i[5].setComponents(c+l,f+u,p+g,E+y).normalize();else if(e===is)i[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);let e=bd.distanceTo(t.center);return bi.radius=.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Or.x=i.normal.x>0?t.max.x:t.min.x,Or.y=i.normal.y>0?t.max.y:t.min.y,Or.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ia=class extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hc=new Jt,rl=new Hs,zr=new $n,kr=new I,Gs=class extends We{constructor(t=new ce,e=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;Hc.copy(i).invert(),rl.copy(t.ray).applyMatrix4(Hc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=u,v=f;m<v;m++){let g=c.getX(m);kr.fromBufferAttribute(d,g),Vc(kr,g,l,i,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let m=u,v=f;m<v;m++)kr.fromBufferAttribute(d,m),Vc(kr,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vc(s,t,e,n,i,r,a){let o=rl.distanceSqToPoint(s);if(o<e){let l=new I;rl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ws=class extends sn{constructor(t=[],e=mi,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xs=class extends sn{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var kn=class extends sn{constructor(t,e,n=mn,i,r,a,o=ue,l=ue,c,h=Fn,d=1){if(h!==Fn&&h!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new as(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sa=class extends kn{constructor(t,e=mn,n=mi,i,r,a=ue,o=ue,l,c=Fn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},qs=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ee=class s extends ce{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function m(v,g,p,S,R,y,E,b,T,x,w){let C=y/T,P=E/x,D=y/2,B=E/2,L=b/2,z=T+1,q=x+1,Z=0,W=0,k=new I;for(let $=0;$<q;$++){let Q=$*P-B;for(let xt=0;xt<z;xt++){let _t=xt*C-D;k[v]=_t*S,k[g]=Q*R,k[p]=L,c.push(k.x,k.y,k.z),k[v]=0,k[g]=0,k[p]=b>0?1:-1,h.push(k.x,k.y,k.z),d.push(xt/T),d.push(1-$/x),Z+=1}}for(let $=0;$<x;$++)for(let Q=0;Q<T;Q++){let xt=u+Q+z*$,_t=u+Q+z*($+1),Vt=u+(Q+1)+z*($+1),Ot=u+(Q+1)+z*$;l.push(xt,_t,Ot),l.push(_t,Vt,Ot),W+=6}o.addGroup(f,W,w),f+=W,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},hs=class s extends ce{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,m=n*2+r,v=i+1,g=new I,p=new I;for(let S=0;S<=m;S++){let R=0,y=0,E=0,b=0;if(S<=n){let w=S/n,C=w*Math.PI/2;y=-h-t*Math.cos(C),E=t*Math.sin(C),b=-t*Math.cos(C),R=w*d}else if(S<=n+r){let w=(S-n)/r;y=-h+w*e,E=t,b=0,R=d+w*u}else{let w=(S-n-r)/n,C=w*Math.PI/2;y=h+t*Math.sin(C),E=t*Math.cos(C),b=t*Math.sin(C),R=d+u+w*d}let T=Math.max(0,Math.min(1,R/f)),x=0;S===0?x=.5/i:S===m&&(x=-.5/i);for(let w=0;w<=i;w++){let C=w/i,P=C*Math.PI*2,D=Math.sin(P),B=Math.cos(P);p.x=-E*B,p.y=y,p.z=E*D,o.push(p.x,p.y,p.z),g.set(-E*B,b,E*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+x,T)}if(S>0){let w=(S-1)*v;for(let C=0;C<i;C++){let P=w+C,D=w+C+1,B=S*v+C,L=S*v+C+1;a.push(P,D,B),a.push(D,L,B)}}}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ci=class s extends ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new Bt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},be=class s extends ce{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,v=[],g=n/2,p=0;S(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function S(){let y=new I,E=new I,b=0,T=(e-t)/n;for(let x=0;x<=r;x++){let w=[],C=x/r,P=C*(e-t)+t;for(let D=0;D<=i;D++){let B=D/i,L=B*l+o,z=Math.sin(L),q=Math.cos(L);E.x=P*z,E.y=-C*n+g,E.z=P*q,d.push(E.x,E.y,E.z),y.set(z,T,q).normalize(),u.push(y.x,y.y,y.z),f.push(B,1-C),w.push(m++)}v.push(w)}for(let x=0;x<i;x++)for(let w=0;w<r;w++){let C=v[w][x],P=v[w+1][x],D=v[w+1][x+1],B=v[w][x+1];(t>0||w!==0)&&(h.push(C,P,B),b+=3),(e>0||w!==r-1)&&(h.push(P,D,B),b+=3)}c.addGroup(p,b,0),p+=b}function R(y){let E=m,b=new Bt,T=new I,x=0,w=y===!0?t:e,C=y===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=i;D++){let L=D/i*l+o,z=Math.cos(L),q=Math.sin(L);T.x=w*q,T.y=g*C,T.z=w*z,d.push(T.x,T.y,T.z),u.push(0,C,0),b.x=z*.5+.5,b.y=q*.5*C+.5,f.push(b.x,b.y),m++}for(let D=0;D<i;D++){let B=E+D,L=P+D;y===!0?h.push(L,L+1,B):h.push(L+1,L,B),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Le=class s extends be{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ra=class s extends ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let R=new I,y=new I,E=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],R),f(e[b+1],y),f(e[b+2],E),l(R,y,E,S)}function l(S,R,y,E){let b=E+1,T=[];for(let x=0;x<=b;x++){T[x]=[];let w=S.clone().lerp(y,x/b),C=R.clone().lerp(y,x/b),P=b-x;for(let D=0;D<=P;D++)D===0&&x===b?T[x][D]=w:T[x][D]=w.clone().lerp(C,D/P)}for(let x=0;x<b;x++)for(let w=0;w<2*(b-x)-1;w++){let C=Math.floor(w/2);w%2===0?(u(T[x][C+1]),u(T[x+1][C]),u(T[x][C])):(u(T[x][C+1]),u(T[x+1][C+1]),u(T[x+1][C]))}}function c(S){let R=new I;for(let y=0;y<r.length;y+=3)R.x=r[y+0],R.y=r[y+1],R.z=r[y+2],R.normalize().multiplyScalar(S),r[y+0]=R.x,r[y+1]=R.y,r[y+2]=R.z}function h(){let S=new I;for(let R=0;R<r.length;R+=3){S.x=r[R+0],S.y=r[R+1],S.z=r[R+2];let y=g(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;a.push(y,1-E)}m(),d()}function d(){for(let S=0;S<a.length;S+=6){let R=a[S+0],y=a[S+2],E=a[S+4],b=Math.max(R,y,E),T=Math.min(R,y,E);b>.9&&T<.1&&(R<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,R){let y=S*3;R.x=t[y+0],R.y=t[y+1],R.z=t[y+2]}function m(){let S=new I,R=new I,y=new I,E=new I,b=new Bt,T=new Bt,x=new Bt;for(let w=0,C=0;w<r.length;w+=9,C+=6){S.set(r[w+0],r[w+1],r[w+2]),R.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),b.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),E.copy(S).add(R).add(y).divideScalar(3);let P=g(E);v(b,C+0,S,P),v(T,C+2,R,P),v(x,C+4,y,P)}}function v(S,R,y,E){E<0&&S.x===1&&(a[R]=S.x-1),y.x===0&&y.z===0&&(a[R]=E/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var dn=class s extends ra{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Ys=class s extends ce{constructor(t=[new Bt(0,-.5),new Bt(.5,0),new Bt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=jt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new I,u=new Bt,f=new I,m=new I,v=new I,g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let S=0;S<=e;S++){let R=n+S*h*i,y=Math.sin(R),E=Math.cos(R);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*y,d.y=t[b].y,d.z=t[b].x*E,a.push(d.x,d.y,d.z),u.x=S/e,u.y=b/(t.length-1),o.push(u.x,u.y);let T=l[3*b+0]*y,x=l[3*b+1],w=l[3*b+0]*E;c.push(T,x,w)}}for(let S=0;S<e;S++)for(let R=0;R<t.length-1;R++){let y=R+S*t.length,E=y,b=y+t.length,T=y+t.length+1,x=y+1;r.push(E,b,x),r.push(T,x,b)}this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var fn=class s extends ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let S=p*u-a;for(let R=0;R<c;R++){let y=R*d-r;m.push(y,-S,0),v.push(0,0,1),g.push(R/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let R=S+c*p,y=S+c*(p+1),E=S+1+c*(p+1),b=S+1+c*p;f.push(R,y,b),f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Zs=class s extends ce{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new I,m=new Bt;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let v=0;v<i;v++){let g=v*(n+1);for(let p=0;p<n;p++){let S=p+g,R=S,y=S+n+1,E=S+n+2,b=S+1;o.push(R,y,b),o.push(y,E,b)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ye=class s extends ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let S=[],R=p/n,y=a+R*o,E=t*Math.cos(y),b=Math.sqrt(t*t-E*E),T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let x=0;x<=e;x++){let w=x/e,C=i+w*r;d.x=-b*Math.cos(C),d.y=E,d.z=b*Math.sin(C),m.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(w+T,1-R),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let R=h[p][S+1],y=h[p][S],E=h[p+1][S],b=h[p+1][S+1];(p!==0||a>0)&&f.push(R,y,b),(p!==n-1||l<Math.PI)&&f.push(y,E,b)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ri=class s extends ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new I,f=new I,m=new I;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let p=0;p<=i;p++){let S=p/i*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(p/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){let p=(i+1)*v+g-1,S=(i+1)*(v-1)+g-1,R=(i+1)*(v-1)+g,y=(i+1)*v+g;l.push(p,S,y),l.push(S,R,y)}this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Di(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Gc(i))i.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Gc(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function je(s){let t={};for(let e=0;e<s.length;e++){let n=Di(s[e]);for(let i in n)t[i]=n[i]}return t}function Gc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ed(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Nl(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Lh={clone:Di,merge:je},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Te=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=Ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new St().setHex(i.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},aa=class extends Te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Js=class extends zn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new St(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hi=class extends zn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var us=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oa=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $i(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Qo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var ui=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},la=class extends ui{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case il:r=t,o=2*e-n;break;case sl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case il:a=t,l=2*n-e;break;case sl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-u*g+2*u*v-u*m,S=(1+u)*g+(-1.5-2*u)*v+(-.5+u)*m+1,R=(-1-f)*g+(1.5+f)*v+.5*m,y=f*g-f*v;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+S*a[c+E]+R*a[l+E]+y*a[d+E];return r}},ca=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ha=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ua=class extends ui{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(i-e),v=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*v+a[l+g]*m;return r}let u=o*2,f=t-1;for(let m=0;m!==o;++m){let v=a[c+m],g=a[l+m],p=f*u+m*2,S=d[p],R=d[p+1],y=t*u+m*2,E=h[y],b=h[y+1],T=Rd(n,e,S,E,i);r[m]=Dh(T,v,R,b,g)}return r}};function Dh(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Ad(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Rd(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Dh(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Ad(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$i(e,this.TimeBufferType),this.values=$i(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$i(t.times,Array),values:$i(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Qo(t.settings)&&(n.settings={inTangents:$i(t.settings.inTangents,Array),outTangents:$i(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ns:e=this.InterpolantFactoryMethodDiscrete;break;case Qr:e=this.InterpolantFactoryMethodLinear;break;case Gr:e=this.InterpolantFactoryMethodSmooth;break;case el:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Gr;case this.InterpolantFactoryMethodBezier:return el}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Qo(this.settings)&&(Wc(this.settings.inTangents,t),Wc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Vu(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let v=e[d+m];if(v!==e[u+m]||v!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Qo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Wc(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Qr;var di=class extends pn{constructor(t,e,n){super(t,e,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ns;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}};da.prototype.ValueTypeName="color";var fa=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}};fa.prototype.ValueTypeName="number";var pa=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)Fe.slerpFlat(r,0,a,c-o,a,c,l);return r}},$s=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends pn{constructor(t,e,n){super(t,e,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Ns;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}};ma.prototype.ValueTypeName="vector";var ga=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nh=new ga,xa=class{constructor(t){this.manager=t!==void 0?t:Nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ks=class extends ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},tl=new Jt,Xc=new I,qc=new I,js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xc),qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(tl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===is||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hr=new I,Vr=new Fe,Nn=new I,Qs=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hr,Vr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Vr,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hr,Vr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Vr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new I,Yc=new Bt,Zc=new Bt,nn=class extends Qs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,Zc),e.subVectors(Zc,Yc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var al=class extends js{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},tr=class extends ds{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new al}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Kn=class extends Qs{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ol=class extends js{constructor(){super(new Kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new ol}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ki=-90,ji=1,_a=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new nn(Ki,ji,t,e);i.layers=this.layers,this.add(i);let r=new nn(Ki,ji,t,e);r.layers=this.layers,this.add(r);let a=new nn(Ki,ji,t,e);a.layers=this.layers,this.add(a);let o=new nn(Ki,ji,t,e);o.layers=this.layers,this.add(o);let l=new nn(Ki,ji,t,e);l.layers=this.layers,this.add(l);let c=new nn(Ki,ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ya=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ul="\\[\\]\\.:\\/",Cd=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",Id="[^"+Ul.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",Fl),Ld=/(WCOD+)?/.source.replace("WCOD",Id),Dd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),Nd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),Ud=new RegExp("^"+Pd+Ld+Dd+Nd+"$"),Fd=["material","materials","bones","map"],ll=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cd,"")}static parseTrackName(t){let e=Ud.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Fd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=ll;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var sx=new Float32Array(1);var Vl=class Vl{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Vl.prototype.isMatrix2=!0;var cl=Vl;function Bl(s,t,e,n){let i=Bd(n);switch(e){case Al:return s*t;case Ca:return s*t/i.components*i.byteLength;case Ia:return s*t/i.components*i.byteLength;case _i:return s*t*2/i.components*i.byteLength;case Pa:return s*t*2/i.components*i.byteLength;case Rl:return s*t*3/i.components*i.byteLength;case cn:return s*t*4/i.components*i.byteLength;case La:return s*t*4/i.components*i.byteLength;case rr:case ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case or:case lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Na:case Fa:return Math.max(s,16)*Math.max(t,8)/4;case Da:case Ua:return Math.max(s,8)*Math.max(t,8)/2;case Ba:case Oa:case ka:case Ha:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case za:case cr:case Va:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case io:case so:case ro:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ao:case oo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hr:case lo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bd(s){switch(s){case ln:case bl:return{byteLength:1,components:1};case ms:case El:case gn:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case mn:case Ta:case vn:return{byteLength:4,components:1};case wl:case Tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nu(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Wd(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qd=`#ifdef USE_ALPHAHASH
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
#endif`,Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rf=`#ifdef USE_IRIDESCENCE
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
#endif`,af=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Df=`#ifdef USE_GRADIENTMAP
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
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Of=`#ifdef USE_ENVMAP
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Wf=`uniform sampler2D dfgLUT;
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
}`,Xf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,np=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
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
#endif`,cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
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
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
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
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,Qp=`#if DEPTH_PACKING == 3200
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
}`,tm=`#define DISTANCE
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
}`,em=`#define DISTANCE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,om=`uniform vec3 diffuse;
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
}`,lm=`#define LAMBERT
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,fm=`#define NORMAL
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
}`,pm=`#define PHONG
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
}`,mm=`#define PHONG
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
}`,gm=`#define STANDARD
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
}`,xm=`#define STANDARD
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
}`,_m=`#define TOON
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
}`,ym=`#define TOON
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
}`,vm=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,bm=`uniform vec3 color;
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
}`,Em=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Xd,alphahash_pars_fragment:qd,alphamap_fragment:Yd,alphamap_pars_fragment:Zd,alphatest_fragment:Jd,alphatest_pars_fragment:$d,aomap_fragment:Kd,aomap_pars_fragment:jd,batching_pars_vertex:Qd,batching_vertex:tf,begin_vertex:ef,beginnormal_vertex:nf,bsdfs:sf,iridescence_fragment:rf,bumpmap_pars_fragment:af,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:hf,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:xf,displacementmap_pars_vertex:_f,displacementmap_vertex:yf,emissivemap_fragment:vf,emissivemap_pars_fragment:Mf,colorspace_fragment:Sf,colorspace_pars_fragment:bf,envmap_fragment:Ef,envmap_common_pars_fragment:wf,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Of,envmap_vertex:Rf,fog_vertex:Cf,fog_pars_vertex:If,fog_fragment:Pf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Df,lightmap_pars_fragment:Nf,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Ff,lights_pars_begin:Bf,lights_toon_fragment:zf,lights_toon_pars_fragment:kf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:jf,map_fragment:Qf,map_pars_fragment:tp,map_particle_fragment:ep,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:sp,morphinstance_vertex:rp,morphcolor_vertex:ap,morphnormal_vertex:op,morphtarget_pars_vertex:lp,morphtarget_vertex:cp,normal_fragment_begin:hp,normal_fragment_maps:up,normal_pars_fragment:dp,normal_pars_vertex:fp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:yp,opaque_fragment:vp,packing:Mp,premultiplied_alpha_fragment:Sp,project_vertex:bp,dithering_fragment:Ep,dithering_pars_fragment:wp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ap,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Cp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Pp,skinbase_vertex:Lp,skinning_pars_vertex:Dp,skinning_vertex:Np,skinnormal_vertex:Up,specularmap_fragment:Fp,specularmap_pars_fragment:Bp,tonemapping_fragment:Op,tonemapping_pars_fragment:zp,transmission_fragment:kp,transmission_pars_fragment:Hp,uv_pars_fragment:Vp,uv_pars_vertex:Gp,uv_vertex:Wp,worldpos_vertex:Xp,background_vert:qp,background_frag:Yp,backgroundCube_vert:Zp,backgroundCube_frag:Jp,cube_vert:$p,cube_frag:Kp,depth_vert:jp,depth_frag:Qp,distance_vert:tm,distance_frag:em,equirect_vert:nm,equirect_frag:im,linedashed_vert:sm,linedashed_frag:rm,meshbasic_vert:am,meshbasic_frag:om,meshlambert_vert:lm,meshlambert_frag:cm,meshmatcap_vert:hm,meshmatcap_frag:um,meshnormal_vert:dm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:xm,meshtoon_vert:_m,meshtoon_frag:ym,points_vert:vm,points_frag:Mm,shadow_vert:Sm,shadow_frag:bm,sprite_vert:Em,sprite_frag:wm},dt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Gn={basic:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:je([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:je([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:je([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new St(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:je([dt.points,dt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:je([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:je([dt.common,dt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:je([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:je([dt.sprite,dt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:je([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:je([dt.lights,dt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Gn.physical={uniforms:je([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var uo={r:0,b:0,g:0},Tm=new Jt,iu=new Ht;iu.set(-1,0,0,0,1,0,0,0,1);function Am(s,t,e,n,i,r){let a=new St(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let y=S.backgroundBlurriness>0;R=t.get(R,y)}return R}function m(S){let R=!1,y=f(S);y===null?g(a,o):y&&y.isColor&&(g(y,1),R=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(S,R){let y=f(R);y&&(y.isCubeTexture||y.mapping===ir)?(c===void 0&&(c=new Pt(new ee(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:Di(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(iu),c.material.toneMapped=te.getTransfer(y.colorSpace)!==ae,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new fn(2,2),new Te({name:"BackgroundMaterial",uniforms:Di(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,R){S.getRGB(uo,Nl(s)),e.buffers.color.setClear(uo.r,uo.g,uo.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,R=1){a.set(S),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:v,dispose:p}}function Rm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(P,D,B,L,z){let q=!1,Z=d(P,L,B,D);r!==Z&&(r=Z,c(r.object)),q=f(P,L,B,z),q&&m(P,L,B,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(P,D,B,L),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,D,B,L){let z=L.wireframe===!0,q=n[D.id];q===void 0&&(q={},n[D.id]=q);let Z=P.isInstancedMesh===!0?P.id:0,W=q[Z];W===void 0&&(W={},q[Z]=W);let k=W[B.id];k===void 0&&(k={},W[B.id]=k);let $=k[z];return $===void 0&&($=u(l()),k[z]=$),$}function u(P){let D=[],B=[],L=[];for(let z=0;z<e;z++)D[z]=0,B[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,D,B,L){let z=r.attributes,q=D.attributes,Z=0,W=B.getAttributes();for(let k in W)if(W[k].location>=0){let Q=z[k],xt=q[k];if(xt===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(xt=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(xt=P.instanceColor)),Q===void 0||Q.attribute!==xt||xt&&Q.data!==xt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==L}function m(P,D,B,L){let z={},q=D.attributes,Z=0,W=B.getAttributes();for(let k in W)if(W[k].location>=0){let Q=q[k];Q===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));let xt={};xt.attribute=Q,Q&&Q.data&&(xt.data=Q.data),z[k]=xt,Z++}r.attributes=z,r.attributesNum=Z,r.index=L}function v(){let P=r.newAttributes;for(let D=0,B=P.length;D<B;D++)P[D]=0}function g(P){p(P,0)}function p(P,D){let B=r.newAttributes,L=r.enabledAttributes,z=r.attributeDivisors;B[P]=1,L[P]===0&&(s.enableVertexAttribArray(P),L[P]=1),z[P]!==D&&(s.vertexAttribDivisor(P,D),z[P]=D)}function S(){let P=r.newAttributes,D=r.enabledAttributes;for(let B=0,L=D.length;B<L;B++)D[B]!==P[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function R(P,D,B,L,z,q,Z){Z===!0?s.vertexAttribIPointer(P,D,B,z,q):s.vertexAttribPointer(P,D,B,L,z,q)}function y(P,D,B,L){v();let z=L.attributes,q=B.getAttributes(),Z=D.defaultAttributeValues;for(let W in q){let k=q[W];if(k.location>=0){let $=z[W];if($===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let Q=$.normalized,xt=$.itemSize,_t=t.get($);if(_t===void 0)continue;let Vt=_t.buffer,Ot=_t.type,Xt=_t.bytesPerElement,Y=Ot===s.INT||Ot===s.UNSIGNED_INT||$.gpuType===Ta;if($.isInterleavedBufferAttribute){let et=$.data,yt=et.stride,Ut=$.offset;if(et.isInstancedInterleavedBuffer){for(let vt=0;vt<k.locationSize;vt++)p(k.location+vt,et.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let vt=0;vt<k.locationSize;vt++)g(k.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let vt=0;vt<k.locationSize;vt++)R(k.location+vt,xt/k.locationSize,Ot,Q,yt*Xt,(Ut+xt/k.locationSize*vt)*Xt,Y)}else{if($.isInstancedBufferAttribute){for(let et=0;et<k.locationSize;et++)p(k.location+et,$.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let et=0;et<k.locationSize;et++)g(k.location+et);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let et=0;et<k.locationSize;et++)R(k.location+et,xt/k.locationSize,Ot,Q,xt*Xt,xt/k.locationSize*et*Xt,Y)}}else if(Z!==void 0){let Q=Z[W];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(k.location,Q);break;case 3:s.vertexAttrib3fv(k.location,Q);break;case 4:s.vertexAttrib4fv(k.location,Q);break;default:s.vertexAttrib1fv(k.location,Q)}}}}S()}function E(){w();for(let P in n){let D=n[P];for(let B in D){let L=D[B];for(let z in L){let q=L[z];for(let Z in q)h(q[Z].object),delete q[Z];delete L[z]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let B in D){let L=D[B];for(let z in L){let q=L[z];for(let Z in q)h(q[Z].object),delete q[Z];delete L[z]}}delete n[P.id]}function T(P){for(let D in n){let B=n[D];for(let L in B){let z=B[L];if(z[P.id]===void 0)continue;let q=z[P.id];for(let Z in q)h(q[Z].object),delete q[Z];delete z[P.id]}}}function x(P){for(let D in n){let B=n[D],L=P.isInstancedMesh===!0?P.id:0,z=B[L];if(z!==void 0){for(let q in z){let Z=z[q];for(let W in Z)h(Z[W].object),delete Z[W];delete z[q]}delete B[L],Object.keys(B).length===0&&delete n[D]}}}function w(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function Cm(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Im(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==cn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ln&&T!==vn&&!x&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:y,maxSamples:E,samples:b}}function Pm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new An,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let S=r?0:n,R=S*4,y=p.clippingState||null;l.value=y,y=h(m,u,R,f);for(let E=0;E!==R;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=f+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,y=f;R!==v;++R,y+=4)a.copy(d[R]).applyMatrix4(S,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}var vs=4,Lm=6,Dm=20,Nm=256,dr=new Kn,Uh=new St,Gl=null,Wl=0,Xl=0,ql=!1,Um=new I,Ni=new I,po=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Um}=r;Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gl,Wl,Xl),this._renderer.xr.enabled=ql,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:gn,format:cn,colorSpace:wi,depthBuffer:!1},i=Fh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fm(r)),this._blurMaterial=Om(r,t,e),this._ggxMaterial=Bm(r,t,e)}return i}_compileMaterial(t){let e=new Pt(new ce,t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,i,r){let l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Uh),d.toneMapping=In,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new ee,new Cn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(Uh),p=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));let E=this._cubeSize;ys(i,y*E,R>2?E:0,E,E),d.setRenderTarget(i),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===mi||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-vs?n-m+vs:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,ys(r,g,p,3*v,2*v),i.setRenderTarget(r),i.render(o,dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,ys(t,g,p,3*v,2*v),i.setRenderTarget(t),i.render(o,dr)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-vs?i-this._lodMax+vs:0),u=4*(this._cubeSize-h);ys(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,dr)}};function Fm(s){let t=[],e=[],n=s,i=s-vs+1+Lm;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,m=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,R=p>2?0:-1,y=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];m.set(y,f*u*p);for(let E=0;E<u;E++){let b=h[E*2]*2-1,T=h[E*2+1]*2-1;p===0?Ni.set(1,T,b):p===1?Ni.set(-b,1,-T):p===2?Ni.set(-b,T,1):p===3?Ni.set(-1,T,-b):p===4?Ni.set(-b,-1,T):Ni.set(b,T,-1),Ni.toArray(v,(p*u+E)*f)}}let g=new ce;g.setAttribute("position",new Ie(m,f)),g.setAttribute("outputDirection",new Ie(v,f)),e.push(new Pt(g,null)),n>vs&&n--}return{lodMeshes:e,sizeLods:t}}function Fh(s,t,e){let n=new Ge(s,t,e);return n.texture.mapping=ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Bm(s,t,e){return new Te({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Om(s,t,e){return new Te({name:"SphericalGaussianBlur",defines:{SAMPLES:Dm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Bh(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Oh(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var mo=class extends Ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ws(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ee(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Hn});r.uniforms.tEquirect.value=e;let a=new Pt(i,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=Pe),new _a(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function zm(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ba||f===Ea)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new mo(m.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,m=f===ba||f===Ea,v=f===mi||f===Li;if(m||v){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new po(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return m&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new po(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===ba?u.mapping=mi:f===Ea&&(u.mapping=Li),u}function l(u){let f=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function km(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ei("WebGLRenderer: "+n+" extension not supported."),i}}}function Hm(s,t,e,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,m=d.attributes.position,v=0;if(m===void 0)return;if(f!==null){let S=f.array;v=f.version;for(let R=0,y=S.length;R<y;R+=3){let E=S[R+0],b=S[R+1],T=S[R+2];u.push(E,b,b,T,T,E)}}else{let S=m.array;v=m.version;for(let R=0,y=S.length/3-1;R<y;R+=3){let E=R+0,b=R+1,T=R+2;u.push(E,b,b,T,T,E)}}let g=new(m.count>=65535?ks:zs)(u,1);g.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Vm(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g];e.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Gm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Wm(s,t,e){let n=new WeakMap,i=new Me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],R=0;f===!0&&(R=1),m===!0&&(R=2),v===!0&&(R=3);let y=o.attributes.position.count*R,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*E*4*d),T=new Bs(b,y,E,d);T.type=vn,T.needsUpdate=!0;let x=R*4;for(let C=0;C<d;C++){let P=g[C],D=p[C],B=S[C],L=y*E*4*C;for(let z=0;z<P.count;z++){let q=z*x;f===!0&&(i.fromBufferAttribute(P,z),b[L+q+0]=i.x,b[L+q+1]=i.y,b[L+q+2]=i.z,b[L+q+3]=0),m===!0&&(i.fromBufferAttribute(D,z),b[L+q+4]=i.x,b[L+q+5]=i.y,b[L+q+6]=i.z,b[L+q+7]=0),v===!0&&(i.fromBufferAttribute(B,z),b[L+q+8]=i.x,b[L+q+9]=i.y,b[L+q+10]=i.z,b[L+q+11]=B.itemSize===4?i.w:1)}}u={count:d,texture:T,size:new Bt(y,E)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Xm(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var qm={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[xl]:"CINEON_TONE_MAPPING",[_l]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[Ml]:"NEUTRAL_TONE_MAPPING",[yl]:"CUSTOM_TONE_MAPPING"};function Ym(s,t,e,n,i,r){let a=new Ge(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ce;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pt(c,h),u=new Kn(-1,1,1,-1,0,1),f=null,m=null,v=!1,g,p=null,S=[],R=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let b=0;b<S.length;b++){let T=S[b];T.setSize&&T.setSize(y,E)}},this.setEffects=function(y){S=y,R=S.length>0&&S[0].isRenderPass===!0;let E=a.width,b=a.height;S.length>0&&o===null&&(o=new Ge(E,b,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new Ge(E,b,{type:gn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<S.length;T++){let x=S[T];x.setSize&&x.setSize(E,b)}},this.begin=function(y,E){if(v||y.toneMapping===In&&S.length===0)return!1;if(p=E,E!==null){let b=E.width,T=E.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return R===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=In,!0},this.hasRenderPass=function(){return R},this.end=function(y,E){y.toneMapping=g,v=!0;let b=a,T=o;for(let x=0;x<S.length;x++){let w=S[x];w.enabled!==!1&&(w.render(y,T,b,E),w.needsSwap!==!1&&(b=T,T=T===o?l:o))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,h.defines={},te.getTransfer(f)===ae&&(h.defines.SRGB_TRANSFER="");let x=qm[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var su=new sn,Jl=new kn(1,1),ru=new Bs,au=new na,ou=new Ws,zh=[],kh=[],Hh=new Float32Array(16),Vh=new Float32Array(9),Gh=new Float32Array(4);function Ss(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=zh[i];if(r===void 0&&(r=new Float32Array(i),zh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _o(s,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function $m(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function Km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function jm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Gh.set(n),s.uniformMatrix2fv(this.addr,!1,Gh),Oe(e,n)}}function Qm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Vh.set(n),s.uniformMatrix3fv(this.addr,!1,Vh),Oe(e,n)}}function t0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Be(e,n))return;Hh.set(n),s.uniformMatrix4fv(this.addr,!1,Hh),Oe(e,n)}}function e0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function n0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function s0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function r0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function a0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function o0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function c0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Jl.compareFunction=e.isReversedDepthBuffer()?ho:co,r=Jl):r=su,e.setTexture2D(t||r,i)}function h0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||au,i)}function u0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ou,i)}function d0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ru,i)}function f0(s){switch(s){case 5126:return Zm;case 35664:return Jm;case 35665:return $m;case 35666:return Km;case 35674:return jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(s,t){s.uniform1fv(this.addr,t)}function m0(s,t){let e=Ss(t,this.size,2);s.uniform2fv(this.addr,e)}function g0(s,t){let e=Ss(t,this.size,3);s.uniform3fv(this.addr,e)}function x0(s,t){let e=Ss(t,this.size,4);s.uniform4fv(this.addr,e)}function _0(s,t){let e=Ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function y0(s,t){let e=Ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function v0(s,t){let e=Ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function M0(s,t){s.uniform1iv(this.addr,t)}function S0(s,t){s.uniform2iv(this.addr,t)}function b0(s,t){s.uniform3iv(this.addr,t)}function E0(s,t){s.uniform4iv(this.addr,t)}function w0(s,t){s.uniform1uiv(this.addr,t)}function T0(s,t){s.uniform2uiv(this.addr,t)}function A0(s,t){s.uniform3uiv(this.addr,t)}function R0(s,t){s.uniform4uiv(this.addr,t)}function C0(s,t,e){let n=this.cache,i=t.length,r=_o(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Jl:a=su;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function I0(s,t,e){let n=this.cache,i=t.length,r=_o(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||au,r[a])}function P0(s,t,e){let n=this.cache,i=t.length,r=_o(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||ou,r[a])}function L0(s,t,e){let n=this.cache,i=t.length,r=_o(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ru,r[a])}function D0(s){switch(s){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return x0;case 35674:return _0;case 35675:return y0;case 35676:return v0;case 5124:case 35670:return M0;case 35667:case 35671:return S0;case 35668:case 35672:return b0;case 35669:case 35673:return E0;case 5125:return w0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return L0}}var $l=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=f0(e.type)}},Kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D0(e.type)}},jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Yl=/(\w+)(\])?(\[|\.)?/g;function Wh(s,t){s.seq.push(t),s.map[t.id]=t}function N0(s,t,e){let n=s.name,i=n.length;for(Yl.lastIndex=0;;){let r=Yl.exec(n),a=Yl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Wh(e,c===void 0?new $l(o,s,t):new Kl(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new jl(o),Wh(e,d)),e=d}}}var Ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);N0(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Xh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var U0=37297,F0=0;function B0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var qh=new Ht;function O0(s){te._getMatrix(qh,te.workingColorSpace,s);let t=`mat3( ${qh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Us:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Yh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+B0(s.getShaderSource(t),o)}else return r}function z0(s,t){let e=O0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var k0={[ml]:"Linear",[gl]:"Reinhard",[xl]:"Cineon",[_l]:"ACESFilmic",[vl]:"AgX",[Ml]:"Neutral",[yl]:"Custom"};function H0(s,t){let e=k0[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fo=new I;function V0(){te.getLuminanceCoefficients(fo);let s=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function W0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function X0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function pr(s){return s!==""}function Zh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(s){return s.replace(q0,Z0)}var Y0=new Map;function Z0(s,t){let e=Yt[t];if(e===void 0){let n=Y0.get(t);if(n!==void 0)e=Yt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ql(e)}var J0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $h(s){return s.replace(J0,$0)}function $0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var K0={[Ci]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function j0(s){return K0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Q0={[mi]:"ENVMAP_TYPE_CUBE",[Li]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE_UV"};function tg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Q0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var eg={[Li]:"ENVMAP_MODE_REFRACTION"};function ng(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":eg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ig={[pl]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function sg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ig[s.combine]||"ENVMAP_BLENDING_NONE"}function rg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ag(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=j0(e),c=tg(e),h=ng(e),d=sg(e),u=rg(e),f=G0(e),m=W0(r),v=i.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pr).join(`
`),p.length>0&&(p+=`
`)):(g=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),p=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Yt.tonemapping_pars_fragment:"",e.toneMapping!==In?H0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),V0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=Ql(a),a=Zh(a,e),a=Jh(a,e),o=Ql(o),o=Zh(o,e),o=Jh(o,e),a=$h(a),o=$h(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=S+g+a,y=S+p+o,E=Xh(i,i.VERTEX_SHADER,R),b=Xh(i,i.FRAGMENT_SHADER,y);i.attachShader(v,E),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function T(P){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(v)||"",B=i.getShaderInfoLog(E)||"",L=i.getShaderInfoLog(b)||"",z=D.trim(),q=B.trim(),Z=L.trim(),W=!0,k=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,E,b);else{let $=Yh(i,E,"vertex"),Q=Yh(i,b,"fragment");zt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+$+`
`+Q)}else z!==""?Ft("WebGLProgram: Program Info Log:",z):(q===""||Z==="")&&(k=!1);k&&(P.diagnostics={runnable:W,programLog:z,vertexShader:{log:q,prefix:g},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(E),i.deleteShader(b),x=new Ms(i,v),w=X0(i,v)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,U0)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=b,this}var og=0,tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ec(t),e.set(t,n)),n}},ec=class{constructor(t){this.id=og++,this.code=t,this.usedTimes=0}};function lg(s){return s===_i||s===cr||s===hr}function cg(s,t,e,n,i,r){let a=new Os,o=new tc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,w,C,P,D,B){let L=P.fog,z=D.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=t.get(x.envMap||q,Z),k=W&&W.mapping===ir?W.image.height:null,$=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xt=Q!==void 0?Q.length:0,_t=0;z.morphAttributes.position!==void 0&&(_t=1),z.morphAttributes.normal!==void 0&&(_t=2),z.morphAttributes.color!==void 0&&(_t=3);let Vt,Ot,Xt,Y;if($){let pe=Gn[$];Vt=pe.vertexShader,Ot=pe.fragmentShader}else{Vt=x.vertexShader,Ot=x.fragmentShader;let pe=o.getVertexShaderStage(x),se=o.getFragmentShaderStage(x);o.update(x,pe,se),Xt=pe.id,Y=se.id}let et=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Ut=D.isInstancedMesh===!0,vt=D.isBatchedMesh===!0,Zt=!!x.map,Ue=!!x.matcap,$t=!!W,ie=!!x.aoMap,fe=!!x.lightMap,Qt=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,ze=!!x.displacementMap,an=!!x.emissiveMap,Se=!!x.metalnessMap,Ae=!!x.roughnessMap,F=x.anisotropy>0,Ze=x.clearcoat>0,oe=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,G=x.transmission>0,J=F&&!!x.anisotropyMap,st=Ze&&!!x.clearcoatMap,at=Ze&&!!x.clearcoatNormalMap,K=Ze&&!!x.clearcoatRoughnessMap,tt=_&&!!x.iridescenceMap,ot=_&&!!x.iridescenceThicknessMap,Rt=O&&!!x.sheenColorMap,ut=O&&!!x.sheenRoughnessMap,lt=!!x.specularMap,Ct=!!x.specularColorMap,Dt=!!x.specularIntensityMap,Gt=G&&!!x.transmissionMap,U=G&&!!x.thicknessMap,ct=!!x.gradientMap,j=!!x.alphaMap,ht=x.alphaTest>0,mt=!!x.alphaHash,nt=!!x.extensions,It=In;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(It=s.toneMapping);let wt={shaderID:$,shaderType:x.type,shaderName:x.name,vertexShader:Vt,fragmentShader:Ot,defines:x.defines,customVertexShaderID:Xt,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:vt,batchingColor:vt&&D._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&D.instanceColor!==null,instancingMorph:Ut&&D.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Zt,matcap:Ue,envMap:$t,envMapMode:$t&&W.mapping,envMapCubeUVHeight:k,aoMap:ie,lightMap:fe,bumpMap:Qt,normalMap:ve,displacementMap:ze,emissiveMap:an,normalMapObjectSpace:ve&&x.normalMapType===_h,normalMapTangentSpace:ve&&x.normalMapType===ur,packedNormalMap:ve&&x.normalMapType===ur&&lg(x.normalMap.format),metalnessMap:Se,roughnessMap:Ae,anisotropy:F,anisotropyMap:J,clearcoat:Ze,clearcoatMap:st,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:oe,retroreflection:A,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:O,sheenColorMap:Rt,sheenRoughnessMap:ut,specularMap:lt,specularColorMap:Ct,specularIntensityMap:Dt,transmission:G,transmissionMap:Gt,thicknessMap:U,gradientMap:ct,opaque:x.transparent===!1&&x.blending===ps&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:mt,combine:x.combine,mapUv:Zt&&m(x.map.channel),aoMapUv:ie&&m(x.aoMap.channel),lightMapUv:fe&&m(x.lightMap.channel),bumpMapUv:Qt&&m(x.bumpMap.channel),normalMapUv:ve&&m(x.normalMap.channel),displacementMapUv:ze&&m(x.displacementMap.channel),emissiveMapUv:an&&m(x.emissiveMap.channel),metalnessMapUv:Se&&m(x.metalnessMap.channel),roughnessMapUv:Ae&&m(x.roughnessMap.channel),anisotropyMapUv:J&&m(x.anisotropyMap.channel),clearcoatMapUv:st&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&m(x.sheenRoughnessMap.channel),specularMapUv:lt&&m(x.specularMap.channel),specularColorMapUv:Ct&&m(x.specularColorMap.channel),specularIntensityMapUv:Dt&&m(x.specularIntensityMap.channel),transmissionMapUv:Gt&&m(x.transmissionMap.channel),thicknessMapUv:U&&m(x.thicknessMap.channel),alphaMapUv:j&&m(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ve||F),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(Zt||j),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:_t,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:It,decodeVideoTexture:Zt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===ae,decodeVideoTextureEmissive:an&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===De,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function g(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(w,x),S(w,x),w.push(s.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){let w=f[x.type],C;if(w){let P=Gn[w];C=Lh.clone(P.uniforms)}else C=x.uniforms;return C}function y(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new ag(s,w,x,i),c.push(C),h.set(w,C)),C}function E(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:R,acquireProgram:y,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:T}}function hg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ug(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function jh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,m,v,g,p){let S=s[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:m,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},s[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=m,S.materialVariant=a(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=g,S.group=p),t++,S}function l(u,f,m,v,g,p,S){S.reversedDepth===!0&&(g=-g);let R=o(u,f,m,v,g,p);m.transmission>0?n.push(R):m.transparent===!0?i.push(R):e.push(R)}function c(u,f,m,v,g,p){let S=o(u,f,m,v,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?i.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||ug),n.length>1&&n.sort(f||jh),i.length>1&&i.sort(f||jh)}function d(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function dg(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Qh,s.set(n,[a])):i>=r.length?(a=new Qh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function fg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new St};break;case"SpotLight":e={position:new I,direction:new I,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function pg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var mg=0;function gg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xg(s){let t=new fg,e=pg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Jt,a=new Jt;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,S=0,R=0,y=0,E=0,b=0,T=0,x=0,w=0,C=0;c.sort(gg);for(let D=0,B=c.length;D<B;D++){let L=c[D],z=L.color,q=L.intensity,Z=L.distance,W=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===_i?W=L.shadow.map.texture:W=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=z.r*q,d+=z.g*q,u+=z.b*q;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],q);C++}else if(L.isSunLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,Q=e.get(L);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=W;let xt=$.getViewportCount();for(let _t=0;_t<xt;_t++)n.sunShadowMatrix[v+_t]=$.getMatrix(_t),n.sunShadowCascade[v+_t]=$._cascadeData[_t];v+=xt,m++}n.sun[f]=k,f++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,Q=e.get(L);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=L.shadow.matrix,E++}n.directional[g]=k,g++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(z).multiplyScalar(q),k.distance=Z,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[S]=k;let $=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,$.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[S]=$.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=W,T++}S++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(z).multiplyScalar(q),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[R]=k,R++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let $=L.shadow,Q=e.get(L);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=W,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=k,p++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(q),k.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[y]=k,y++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==S||P.rectAreaLength!==R||P.hemiLength!==y||P.numSunShadows!==m||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==T||P.numSpotMaps!==x||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=R,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=S,P.rectAreaLength=R,P.hemiLength=y,P.numSunShadows=m,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=T,P.numSpotMaps=x,P.numLightProbes=C,n.version=mg++)}function l(c,h){let d=0,u=0,f=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){let y=c[S];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),u++}else if(y.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let E=n.rectArea[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function tu(s){let t=new xg(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function _g(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new tu(s),t.set(i,[o])):r>=a.length?(o=new tu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
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
}`,Mg=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Sg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],eu=new Jt,fr=new I,Zl=new I;function bg(s,t,e){let n=new cs,i=new Bt,r=new Bt,a=new Me,o=new us,l=new oa,c={},h=e.maxTextureSize,d={[pi]:rn,[rn]:pi,[De]:De},u=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:yg,fragmentShader:vg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new ce;m.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Pt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ci;let p=this.type;this.render=function(b,T,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Kc&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ci);let w=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Hn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=p!==this.type;B&&T.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=b.length;L<z;L++){let q=b[L],Z=q.shadow;if(Z===void 0){Ft("WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let W=Z.getFrameExtents();i.multiply(W),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,Z.mapSize.y=r.y));let k=s.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=k,Z.map===null||B===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===fs){if(q.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Ge(i.x,i.y,{format:_i,type:gn,minFilter:Pe,magFilter:Pe,generateMipmaps:!1}),Z.map.texture.name=q.name+".shadowMap",Z.map.depthTexture=new kn(i.x,i.y,vn),Z.map.depthTexture.name=q.name+".shadowMapDepth",Z.map.depthTexture.format=Fn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=ue,Z.map.depthTexture.magFilter=ue}else q.isPointLight?(Z.map=new mo(i.x),Z.map.depthTexture=new sa(i.x,mn)):(Z.map=new Ge(i.x,i.y),Z.map.depthTexture=new kn(i.x,i.y,mn)),Z.map.depthTexture.name=q.name+".shadowMap",Z.map.depthTexture.format=Fn,this.type===Ci?(Z.map.depthTexture.compareFunction=k?ho:co,Z.map.depthTexture.minFilter=Pe,Z.map.depthTexture.magFilter=Pe):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=ue,Z.map.depthTexture.magFilter=ue);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==i.x||Z.map.height!==i.y)&&Z.map.setSize(i.x,i.y);let $=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();q.isPointLight!==!0&&Z.updateMatrices(q,x);for(let Q=0;Q<$;Q++){let xt=Z.getCamera(Q);if(q.isPointLight){let _t=Z.camera,Vt=Z.matrix,Ot=q.distance||_t.far;Ot!==_t.far&&(_t.far=Ot,_t.updateProjectionMatrix()),fr.setFromMatrixPosition(q.matrixWorld),_t.position.copy(fr),Zl.copy(_t.position),Zl.add(Mg[Q]),_t.up.copy(Sg[Q]),_t.lookAt(Zl),_t.updateMatrixWorld(),Vt.makeTranslation(-fr.x,-fr.y,-fr.z),eu.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(eu,_t.coordinateSystem,_t.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(Z.map),s.clear());let _t=Z.getViewport(Q);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),D.viewport(a)}n=Z.getFrustum(Q),y(T,x,xt,q,this.type)}Z.isPointLightShadow!==!0&&this.type===fs&&S(Z,x),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,C,P)};function S(b,T){let x=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ge(i.x,i.y,{format:_i,type:gn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,x,u,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,x,f,v,null)}function R(b,T,x,w){let C=null,P=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=x.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let D=C.uuid,B=T.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let z=L[B];z===void 0&&(z=C.clone(),L[B]=z,T.addEventListener("dispose",E)),C=z}if(C.visible=T.visible,C.wireframe=T.wireframe,w===fs?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:d[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=s.properties.get(C);D.light=x}return C}function y(b,T,x,w,C){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===fs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let B=t.update(b),L=b.material;if(Array.isArray(L)){let z=B.groups;for(let q=0,Z=z.length;q<Z;q++){let W=z[q],k=L[W.materialIndex];if(k&&k.visible){let $=R(b,k,w,C);b.onBeforeShadow(s,b,T,x,B,$,W),s.renderBufferDirect(x,null,B,$,b,W),b.onAfterShadow(s,b,T,x,B,$,W)}}}else if(L.visible){let z=R(b,L,w,C);b.onBeforeShadow(s,b,T,x,B,z,null),s.renderBufferDirect(x,null,B,z,b,null),b.onAfterShadow(s,b,T,x,B,z,null)}}let D=b.children;for(let B=0,L=D.length;B<L;B++)y(D[B],T,x,w,C)}function E(b){b.target.removeEventListener("dispose",E);for(let x in c){let w=c[x],C=b.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Eg(s,t){function e(){let U=!1,ct=new Me,j=null,ht=new Me(0,0,0,0);return{setMask:function(mt){j!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){U=mt},setClear:function(mt,nt,It,wt,pe){pe===!0&&(mt*=wt,nt*=wt,It*=wt),ct.set(mt,nt,It,wt),ht.equals(ct)===!1&&(s.clearColor(mt,nt,It,wt),ht.copy(ct))},reset:function(){U=!1,j=null,ht.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,j=null,ht=null,mt=null;return{setReversed:function(nt){if(ct!==nt){let It=t.get("EXT_clip_control");nt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ct=nt;let wt=mt;mt=null,this.setClear(wt)}},getReversed:function(){return ct},setTest:function(nt){nt?et(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(nt){j!==nt&&!U&&(s.depthMask(nt),j=nt)},setFunc:function(nt){if(ct&&(nt=Ih[nt]),ht!==nt){switch(nt){case Xr:s.depthFunc(s.NEVER);break;case qr:s.depthFunc(s.ALWAYS);break;case Yr:s.depthFunc(s.LESS);break;case es:s.depthFunc(s.LEQUAL);break;case Zr:s.depthFunc(s.EQUAL);break;case Jr:s.depthFunc(s.GEQUAL);break;case $r:s.depthFunc(s.GREATER);break;case Kr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ht=nt}},setLocked:function(nt){U=nt},setClear:function(nt){mt!==nt&&(mt=nt,ct&&(nt=1-nt),s.clearDepth(nt))},reset:function(){U=!1,j=null,ht=null,mt=null,ct=!1}}}function i(){let U=!1,ct=null,j=null,ht=null,mt=null,nt=null,It=null,wt=null,pe=null;return{setTest:function(se){U||(se?et(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(se){ct!==se&&!U&&(s.stencilMask(se),ct=se)},setFunc:function(se,bn,Ln){(j!==se||ht!==bn||mt!==Ln)&&(s.stencilFunc(se,bn,Ln),j=se,ht=bn,mt=Ln)},setOp:function(se,bn,Ln){(nt!==se||It!==bn||wt!==Ln)&&(s.stencilOp(se,bn,Ln),nt=se,It=bn,wt=Ln)},setLocked:function(se){U=se},setClear:function(se){pe!==se&&(s.clearStencil(se),pe=se)},reset:function(){U=!1,ct=null,j=null,ht=null,mt=null,nt=null,It=null,wt=null,pe=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,S=null,R=null,y=null,E=null,b=null,T=null,x=new St(0,0,0),w=0,C=!1,P=null,D=null,B=null,L=null,z=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,W=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),Z=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Z=W>=2);let $=null,Q={},xt=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),Vt=new Me().fromArray(xt),Ot=new Me().fromArray(_t);function Xt(U,ct,j,ht){let mt=new Uint8Array(4),nt=s.createTexture();s.bindTexture(U,nt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<j;It++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,ht,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ct+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return nt}let Y={};Y[s.TEXTURE_2D]=Xt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(es),Qt(!1),ve(hl),et(s.CULL_FACE),ie(Hn);function et(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function yt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Ut(U,ct){return u[U]!==ct?(s.bindFramebuffer(U,ct),u[U]=ct,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function vt(U,ct){let j=m,ht=!1;if(U){j=f.get(ct),j===void 0&&(j=[],f.set(ct,j));let mt=U.textures;if(j.length!==mt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let nt=0,It=mt.length;nt<It;nt++)j[nt]=s.COLOR_ATTACHMENT0+nt;j.length=mt.length,ht=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,ht=!0);ht&&s.drawBuffers(j)}function Zt(U){return v!==U?(s.useProgram(U),v=U,!0):!1}let Ue={[Pi]:s.FUNC_ADD,[jc]:s.FUNC_SUBTRACT,[Qc]:s.FUNC_REVERSE_SUBTRACT};Ue[th]=s.MIN,Ue[eh]=s.MAX;let $t={[nh]:s.ZERO,[Sa]:s.ONE,[ih]:s.SRC_COLOR,[fl]:s.SRC_ALPHA,[ch]:s.SRC_ALPHA_SATURATE,[oh]:s.DST_COLOR,[rh]:s.DST_ALPHA,[sh]:s.ONE_MINUS_SRC_COLOR,[nr]:s.ONE_MINUS_SRC_ALPHA,[lh]:s.ONE_MINUS_DST_COLOR,[ah]:s.ONE_MINUS_DST_ALPHA,[hh]:s.CONSTANT_COLOR,[uh]:s.ONE_MINUS_CONSTANT_COLOR,[dh]:s.CONSTANT_ALPHA,[fh]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(U,ct,j,ht,mt,nt,It,wt,pe,se){if(U===Hn){g===!0&&(yt(s.BLEND),g=!1);return}if(g===!1&&(et(s.BLEND),g=!0),U!==Ma){if(U!==p||se!==C){if((S!==Pi||E!==Pi)&&(s.blendEquation(s.FUNC_ADD),S=Pi,E=Pi),se)switch(U){case ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ii:s.blendFunc(s.ONE,s.ONE);break;case ul:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:zt("WebGLState: Invalid blending: ",U);break}else switch(U){case ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ul:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",U);break}R=null,y=null,b=null,T=null,x.set(0,0,0),w=0,p=U,C=se}return}mt=mt||ct,nt=nt||j,It=It||ht,(ct!==S||mt!==E)&&(s.blendEquationSeparate(Ue[ct],Ue[mt]),S=ct,E=mt),(j!==R||ht!==y||nt!==b||It!==T)&&(s.blendFuncSeparate($t[j],$t[ht],$t[nt],$t[It]),R=j,y=ht,b=nt,T=It),(wt.equals(x)===!1||pe!==w)&&(s.blendColor(wt.r,wt.g,wt.b,pe),x.copy(wt),w=pe),p=U,C=!1}function fe(U,ct){U.side===De?yt(s.CULL_FACE):et(s.CULL_FACE);let j=U.side===rn;ct&&(j=!j),Qt(j),U.blending===ps&&U.transparent===!1?ie(Hn):ie(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ht=U.stencilWrite;o.setTest(ht),ht&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),an(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(U){P!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),P=U)}function ve(U){U!==Jc?(et(s.CULL_FACE),U!==D&&(U===hl?s.cullFace(s.BACK):U===$c?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),D=U}function ze(U){U!==B&&(Z&&s.lineWidth(U),B=U)}function an(U,ct,j){U?(et(s.POLYGON_OFFSET_FILL),(L!==ct||z!==j)&&(L=ct,z=j,a.getReversed()&&(ct=-ct),s.polygonOffset(ct,j))):yt(s.POLYGON_OFFSET_FILL)}function Se(U){U?et(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function Ae(U){U===void 0&&(U=s.TEXTURE0+q-1),$!==U&&(s.activeTexture(U),$=U)}function F(U,ct,j){j===void 0&&($===null?j=s.TEXTURE0+q-1:j=$);let ht=Q[j];ht===void 0&&(ht={type:void 0,texture:void 0},Q[j]=ht),(ht.type!==U||ht.texture!==ct)&&($!==j&&(s.activeTexture(j),$=j),s.bindTexture(U,ct||Y[U]),ht.type=U,ht.texture=ct)}function Ze(){let U=Q[$];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oe(){try{s.compressedTexImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function _(){try{s.texSubImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function O(){try{s.texSubImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function J(){try{s.compressedTexSubImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function st(){try{s.texStorage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function at(){try{s.texStorage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function K(){try{s.texImage2D(...arguments)}catch(U){zt("WebGLState:",U)}}function tt(){try{s.texImage3D(...arguments)}catch(U){zt("WebGLState:",U)}}function ot(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function Rt(U,ct){d[U]!==ct&&(s.pixelStorei(U,ct),d[U]=ct)}function ut(U){Vt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Vt.copy(U))}function lt(U){Ot.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Ot.copy(U))}function Ct(U,ct){let j=c.get(ct);j===void 0&&(j=new WeakMap,c.set(ct,j));let ht=j.get(U);ht===void 0&&(ht=s.getUniformBlockIndex(ct,U.name),j.set(U,ht))}function Dt(U,ct){let ht=c.get(ct).get(U);l.get(ct)!==ht&&(s.uniformBlockBinding(ct,ht,U.__bindingPointIndex),l.set(ct,ht))}function Gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,Q={},u={},f=new WeakMap,m=[],v=null,g=!1,p=null,S=null,R=null,y=null,E=null,b=null,T=null,x=new St(0,0,0),w=0,C=!1,P=null,D=null,B=null,L=null,z=null,Vt.set(0,0,s.canvas.width,s.canvas.height),Ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:yt,bindFramebuffer:Ut,drawBuffers:vt,useProgram:Zt,setBlending:ie,setMaterial:fe,setFlipSided:Qt,setCullFace:ve,setLineWidth:ze,setPolygonOffset:an,setScissorTest:Se,activeTexture:Ae,bindTexture:F,unbindTexture:Ze,compressedTexImage2D:oe,compressedTexImage3D:A,texImage2D:K,texImage3D:tt,pixelStorei:Rt,getParameter:ot,updateUBOMapping:Ct,uniformBlockBinding:Dt,texStorage2D:st,texStorage3D:at,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:ut,viewport:lt,reset:Gt}}function wg(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return m?new OffscreenCanvas(A,_):Fs("canvas")}function g(A,_,O){let G=1,J=oe(A);if((J.width>O||J.height>O)&&(G=O/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let st=Math.floor(G*J.width),at=Math.floor(G*J.height);u===void 0&&(u=v(st,at));let K=_?v(st,at):u;return K.width=st,K.height=at,K.getContext("2d").drawImage(A,0,0,st,at),Ft("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+st+"x"+at+")."),K}else return"data"in A&&Ft("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,_,O,G,J,st=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at;G&&(at=t.get("EXT_texture_norm16"),at||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===s.RED&&(O===s.FLOAT&&(K=s.R32F),O===s.HALF_FLOAT&&(K=s.R16F),O===s.UNSIGNED_BYTE&&(K=s.R8),O===s.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),O===s.SHORT&&at&&(K=at.R16_SNORM_EXT)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.R8UI),O===s.UNSIGNED_SHORT&&(K=s.R16UI),O===s.UNSIGNED_INT&&(K=s.R32UI),O===s.BYTE&&(K=s.R8I),O===s.SHORT&&(K=s.R16I),O===s.INT&&(K=s.R32I)),_===s.RG&&(O===s.FLOAT&&(K=s.RG32F),O===s.HALF_FLOAT&&(K=s.RG16F),O===s.UNSIGNED_BYTE&&(K=s.RG8),O===s.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),O===s.SHORT&&at&&(K=at.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RG8UI),O===s.UNSIGNED_SHORT&&(K=s.RG16UI),O===s.UNSIGNED_INT&&(K=s.RG32UI),O===s.BYTE&&(K=s.RG8I),O===s.SHORT&&(K=s.RG16I),O===s.INT&&(K=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RGB8UI),O===s.UNSIGNED_SHORT&&(K=s.RGB16UI),O===s.UNSIGNED_INT&&(K=s.RGB32UI),O===s.BYTE&&(K=s.RGB8I),O===s.SHORT&&(K=s.RGB16I),O===s.INT&&(K=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),O===s.UNSIGNED_INT&&(K=s.RGBA32UI),O===s.BYTE&&(K=s.RGBA8I),O===s.SHORT&&(K=s.RGBA16I),O===s.INT&&(K=s.RGBA32I)),_===s.RGB&&(O===s.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),O===s.SHORT&&at&&(K=at.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),_===s.RGBA){let tt=st?Us:te.getTransfer(J);O===s.FLOAT&&(K=s.RGBA32F),O===s.HALF_FLOAT&&(K=s.RGBA16F),O===s.UNSIGNED_BYTE&&(K=tt===ae?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),O===s.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function E(A,_){let O;return A?_===null||_===mn||_===gs?O=s.DEPTH24_STENCIL8:_===vn?O=s.DEPTH32F_STENCIL8:_===ms&&(O=s.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mn||_===gs?O=s.DEPTH_COMPONENT24:_===vn?O=s.DEPTH_COMPONENT32F:_===ms&&(O=s.DEPTH_COMPONENT16),O}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ue&&A.minFilter!==Pe?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){let _=A.target;_.removeEventListener("dispose",T),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),P(_)}function w(A){let _=n.get(A);if(_.__webglInit===void 0)return;let O=A.source,G=f.get(O);if(G){let J=G[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(A),Object.keys(G).length===0&&f.delete(O)}n.remove(A)}function C(A){let _=n.get(A);s.deleteTexture(_.__webglTexture);let O=A.source,G=f.get(O);delete G[_.__cacheKey],a.memory.textures--}function P(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let J=0;J<_.__webglFramebuffer[G].length;J++)s.deleteFramebuffer(_.__webglFramebuffer[G][J]);else s.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)s.deleteFramebuffer(_.__webglFramebuffer[G]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=A.textures;for(let G=0,J=O.length;G<J;G++){let st=n.get(O[G]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),a.memory.textures--),n.remove(O[G])}n.remove(A)}let D=0;function B(){D=0}function L(){return D}function z(A){D=A}function q(){let A=D;return A>=i.maxTextures&&Ft("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,A}function Z(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function W(A,_){let O=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let G=A.image;if(G===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function k(A,_){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){yt(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function $(A,_){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){yt(O,A,_);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function Q(A,_){let O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ut(O,A,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}let xt={[ns]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[jr]:s.MIRRORED_REPEAT},_t={[ue]:s.NEAREST,[gh]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Pe]:s.LINEAR,[wa]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},Vt={[vh]:s.NEVER,[wh]:s.ALWAYS,[Mh]:s.LESS,[co]:s.LEQUAL,[Sh]:s.EQUAL,[ho]:s.GEQUAL,[bh]:s.GREATER,[Eh]:s.NOTEQUAL};function Ot(A,_){if(_.type===vn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pe||_.magFilter===wa||_.magFilter===sr||_.magFilter===gi||_.minFilter===Pe||_.minFilter===wa||_.minFilter===sr||_.minFilter===gi)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,xt[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,xt[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,xt[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,_t[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Vt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ue||_.minFilter!==sr&&_.minFilter!==gi||_.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xt(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));let G=_.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let st=Z(_);if(st!==A.__cacheKey){J[st]===void 0&&(J[st]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[st].usedTimes++;let at=J[A.__cacheKey];at!==void 0&&(J[A.__cacheKey].usedTimes--,at.usedTimes===0&&C(_)),A.__cacheKey=st,A.__webglTexture=J[st].texture}return O}function Y(A,_,O){return Math.floor(Math.floor(A/O)/_)}function et(A,_,O,G){let st=A.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,O,G,_.data);else{st.sort((Rt,ut)=>Rt.start-ut.start);let at=0;for(let Rt=1;Rt<st.length;Rt++){let ut=st[at],lt=st[Rt],Ct=ut.start+ut.count,Dt=Y(lt.start,_.width,4),Gt=Y(ut.start,_.width,4);lt.start<=Ct+1&&Dt===Gt&&Y(lt.start+lt.count-1,_.width,4)===Dt?ut.count=Math.max(ut.count,lt.start+lt.count-ut.start):(++at,st[at]=lt)}st.length=at+1;let K=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),ot=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Rt=0,ut=st.length;Rt<ut;Rt++){let lt=st[Rt],Ct=Math.floor(lt.start/4),Dt=Math.ceil(lt.count/4),Gt=Ct%_.width,U=Math.floor(Ct/_.width),ct=Dt,j=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Gt),e.pixelStorei(s.UNPACK_SKIP_ROWS,U),e.texSubImage2D(s.TEXTURE_2D,0,Gt,U,ct,j,O,G,_.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ot)}}function yt(A,_,O){let G=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=s.TEXTURE_3D);let J=Xt(A,_),st=_.source;e.bindTexture(G,A.__webglTexture,s.TEXTURE0+O);let at=n.get(st);if(st.version!==at.__version||J===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let j=te.getPrimaries(te.workingColorSpace),ht=_.colorSpace===Pn?null:te.getPrimaries(_.colorSpace),mt=_.colorSpace===Pn||j===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=g(_.image,!1,i.maxTextureSize);tt=Ze(_,tt);let ot=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type),ut=y(_.internalFormat,ot,Rt,_.normalized,_.colorSpace,_.isVideoTexture);Ot(G,_);let lt,Ct=_.mipmaps,Dt=_.isVideoTexture!==!0,Gt=at.__version===void 0||J===!0,U=st.dataReady,ct=b(_,tt);if(_.isDepthTexture)ut=E(_.format===xi,_.type),Gt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,ut,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,ut,tt.width,tt.height,0,ot,Rt,null));else if(_.isDataTexture)if(Ct.length>0){Dt&&Gt&&e.texStorage2D(s.TEXTURE_2D,ct,ut,Ct[0].width,Ct[0].height);for(let j=0,ht=Ct.length;j<ht;j++)lt=Ct[j],Dt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,Rt,lt.data):e.texImage2D(s.TEXTURE_2D,j,ut,lt.width,lt.height,0,ot,Rt,lt.data);_.generateMipmaps=!1}else Dt?(Gt&&e.texStorage2D(s.TEXTURE_2D,ct,ut,tt.width,tt.height),U&&et(_,tt,ot,Rt)):e.texImage2D(s.TEXTURE_2D,0,ut,tt.width,tt.height,0,ot,Rt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&Gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,ut,Ct[0].width,Ct[0].height,tt.depth);for(let j=0,ht=Ct.length;j<ht;j++)if(lt=Ct[j],_.format!==cn)if(ot!==null)if(Dt){if(U)if(_.layerUpdates.size>0){let mt=Bl(lt.width,lt.height,_.format,_.type);for(let nt of _.layerUpdates){let It=lt.data.subarray(nt*mt/lt.data.BYTES_PER_ELEMENT,(nt+1)*mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,nt,lt.width,lt.height,1,ot,It)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,tt.depth,ot,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,ut,lt.width,lt.height,tt.depth,0,lt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,tt.depth,ot,Rt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,ut,lt.width,lt.height,tt.depth,0,ot,Rt,lt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Dt&&Gt&&e.texStorage2D(s.TEXTURE_2D,ct,ut,Ct[0].width,Ct[0].height);for(let j=0,ht=Ct.length;j<ht;j++)lt=Ct[j],_.format!==cn?ot!==null?Dt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,ut,lt.width,lt.height,0,lt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,Rt,lt.data):e.texImage2D(s.TEXTURE_2D,j,ut,lt.width,lt.height,0,ot,Rt,lt.data)}else if(_.isDataArrayTexture)if(Dt){if(Gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,ut,tt.width,tt.height,tt.depth),U)if(_.layerUpdates.size>0){let j=Bl(tt.width,tt.height,_.format,_.type);for(let ht of _.layerUpdates){let mt=tt.data.subarray(ht*j/tt.data.BYTES_PER_ELEMENT,(ht+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ht,tt.width,tt.height,1,ot,Rt,mt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ot,Rt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ut,tt.width,tt.height,tt.depth,0,ot,Rt,tt.data);else if(_.isData3DTexture)Dt?(Gt&&e.texStorage3D(s.TEXTURE_3D,ct,ut,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ot,Rt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,ut,tt.width,tt.height,tt.depth,0,ot,Rt,tt.data);else if(_.isFramebufferTexture){if(Gt)if(Dt)e.texStorage2D(s.TEXTURE_2D,ct,ut,tt.width,tt.height);else{let j=tt.width,ht=tt.height;for(let mt=0;mt<ct;mt++)e.texImage2D(s.TEXTURE_2D,mt,ut,j,ht,0,ot,Rt,null),j>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){let j=s.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),d.add(_),j.onpaint=ht=>{let mt=ht.changedElements;for(let nt of d)mt.includes(nt.image)&&(nt.needsUpdate=!0)},j.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let mt=s.RGBA,nt=s.RGBA,It=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,mt,nt,It,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Dt&&Gt){let j=oe(Ct[0]);e.texStorage2D(s.TEXTURE_2D,ct,ut,j.width,j.height)}for(let j=0,ht=Ct.length;j<ht;j++)lt=Ct[j],Dt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,ot,Rt,lt):e.texImage2D(s.TEXTURE_2D,j,ut,ot,Rt,lt);_.generateMipmaps=!1}else if(Dt){if(Gt){let j=oe(tt);e.texStorage2D(s.TEXTURE_2D,ct,ut,j.width,j.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot,Rt,tt)}else e.texImage2D(s.TEXTURE_2D,0,ut,ot,Rt,tt);p(_)&&S(G),at.__version=st.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ut(A,_,O){if(_.image.length!==6)return;let G=Xt(A,_),J=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);let st=n.get(J);if(J.version!==st.__version||G===!0){e.activeTexture(s.TEXTURE0+O);let at=te.getPrimaries(te.workingColorSpace),K=_.colorSpace===Pn?null:te.getPrimaries(_.colorSpace),tt=_.colorSpace===Pn||at===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ot=_.isCompressedTexture||_.image[0].isCompressedTexture,Rt=_.image[0]&&_.image[0].isDataTexture,ut=[];for(let nt=0;nt<6;nt++)!ot&&!Rt?ut[nt]=g(_.image[nt],!0,i.maxCubemapSize):ut[nt]=Rt?_.image[nt].image:_.image[nt],ut[nt]=Ze(_,ut[nt]);let lt=ut[0],Ct=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type),Gt=y(_.internalFormat,Ct,Dt,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ct=st.__version===void 0||G===!0,j=J.dataReady,ht=b(_,lt);Ot(s.TEXTURE_CUBE_MAP,_);let mt;if(ot){U&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Gt,lt.width,lt.height);for(let nt=0;nt<6;nt++){mt=ut[nt].mipmaps;for(let It=0;It<mt.length;It++){let wt=mt[It];_.format!==cn?Ct!==null?U?j&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,0,0,wt.width,wt.height,Ct,wt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,Gt,wt.width,wt.height,0,wt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,0,0,wt.width,wt.height,Ct,Dt,wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,Gt,wt.width,wt.height,0,Ct,Dt,wt.data)}}}else{if(mt=_.mipmaps,U&&ct){mt.length>0&&ht++;let nt=oe(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Gt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Rt){U?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ut[nt].width,ut[nt].height,Ct,Dt,ut[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Gt,ut[nt].width,ut[nt].height,0,Ct,Dt,ut[nt].data);for(let It=0;It<mt.length;It++){let pe=mt[It].image[nt].image;U?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,0,0,pe.width,pe.height,Ct,Dt,pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,Gt,pe.width,pe.height,0,Ct,Dt,pe.data)}}else{U?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ct,Dt,ut[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Gt,Ct,Dt,ut[nt]);for(let It=0;It<mt.length;It++){let wt=mt[It];U?j&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,0,0,Ct,Dt,wt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,Gt,Ct,Dt,wt.image[nt])}}}p(_)&&S(s.TEXTURE_CUBE_MAP),st.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function vt(A,_,O,G,J,st){let at=r.convert(O.format,O.colorSpace),K=r.convert(O.type),tt=y(O.internalFormat,at,K,O.normalized,O.colorSpace),ot=n.get(_),Rt=n.get(O);if(Rt.__renderTarget=_,!ot.__hasExternalTextures){let ut=Math.max(1,_.width>>st),lt=Math.max(1,_.height>>st);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,st,tt,ut,lt,_.depth,0,at,K,null):e.texImage2D(J,st,tt,ut,lt,0,at,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Ae(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,J,Rt.__webglTexture,0,Se(_)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,J,Rt.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(A,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){let G=_.depthTexture,J=G&&G.isDepthTexture?G.type:null,st=E(_.stencilBuffer,J),at=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se(_),st,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se(_),st,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,st,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,A)}else{let G=_.textures;for(let J=0;J<G.length;J++){let st=G[J],at=r.convert(st.format,st.colorSpace),K=r.convert(st.type),tt=y(st.internalFormat,at,K,st.normalized,st.colorSpace);Ae(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se(_),tt,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se(_),tt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,tt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(A,_,O){let G=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,_.depthTexture);let ot=r.convert(_.depthTexture.format),Rt=r.convert(_.depthTexture.type),ut;_.depthTexture.format===Fn?ut=s.DEPTH_COMPONENT24:_.depthTexture.format===xi&&(ut=s.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ut,_.width,_.height,0,ot,Rt,null)}}else W(_.depthTexture,0);let st=J.__webglTexture,at=Se(_),K=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,tt=_.depthTexture.format===xi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Fn)Ae(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,K,st,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,tt,K,st,0);else if(_.depthTexture.format===xi)Ae(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,K,st,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,tt,K,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(A){let _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let G=0;G<6;G++)Ue(_.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?Ue(_.__webglFramebuffer[0],A,0):Ue(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=s.createRenderbuffer(),Zt(_.__webglDepthbuffer[G],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Zt(_.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,st)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(A,_,O){let G=n.get(A);_!==void 0&&vt(G.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&$t(A)}function fe(A){let _=A.texture,O=n.get(A),G=n.get(_);A.addEventListener("dispose",x);let J=A.textures,st=A.isWebGLCubeRenderTarget===!0,at=J.length>1;if(at||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=_.version,a.memory.textures++),st){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let tt=0;tt<_.mipmaps.length;tt++)O.__webglFramebuffer[K][tt]=s.createFramebuffer()}else O.__webglFramebuffer[K]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)O.__webglFramebuffer[K]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(at)for(let K=0,tt=J.length;K<tt;K++){let ot=n.get(J[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Ae(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let tt=J[K];O.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[K]);let ot=r.convert(tt.format,tt.colorSpace),Rt=r.convert(tt.type),ut=y(tt.internalFormat,ot,Rt,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),lt=Se(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,ut,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,O.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)vt(O.__webglFramebuffer[K][tt],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt);else vt(O.__webglFramebuffer[K],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,tt=J.length;K<tt;K++){let ot=J[K],Rt=n.get(ot),ut=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Rt.__webglTexture),Ot(ut,ot),vt(O.__webglFramebuffer,A,ot,s.COLOR_ATTACHMENT0+K,ut,0),p(ot)&&S(ut)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,G.__webglTexture),Ot(K,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)vt(O.__webglFramebuffer[tt],A,_,s.COLOR_ATTACHMENT0,K,tt);else vt(O.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,K,0);p(_)&&S(K),e.unbindTexture()}A.depthBuffer&&$t(A)}function Qt(A){let _=A.textures;for(let O=0,G=_.length;O<G;O++){let J=_[O];if(p(J)){let st=R(A),at=n.get(J).__webglTexture;e.bindTexture(st,at),S(st),e.unbindTexture()}}}let ve=[],ze=[];function an(A){if(A.samples>0){if(Ae(A)===!1){let _=A.textures,O=A.width,G=A.height,J=s.COLOR_BUFFER_BIT,st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(A),K=_.length>1;if(K)for(let ot=0;ot<_.length;ot++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<_.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let Rt=n.get(_[ot]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Rt,0)}s.blitFramebuffer(0,0,O,G,0,0,O,G,J,s.NEAREST),l===!0&&(ve.length=0,ze.length=0,ve.push(s.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ve.push(st),ze.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ze)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<_.length;ot++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let Rt=n.get(_[ot]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,Rt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Se(A){return Math.min(i.maxSamples,A.samples)}function Ae(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ze(A,_){let O=A.colorSpace,G=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==wi&&O!==Pn&&(te.getTransfer(O)===ae?(G!==cn||J!==ln)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",O)),_}function oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=ie,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Tg(s,t){function e(n,i=Pn){let r,a=te.getTransfer(i);if(n===ln)return s.UNSIGNED_BYTE;if(n===Aa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return s.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===bl)return s.BYTE;if(n===El)return s.SHORT;if(n===ms)return s.UNSIGNED_SHORT;if(n===Ta)return s.INT;if(n===mn)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===gn)return s.HALF_FLOAT;if(n===Al)return s.ALPHA;if(n===Rl)return s.RGB;if(n===cn)return s.RGBA;if(n===Fn)return s.DEPTH_COMPONENT;if(n===xi)return s.DEPTH_STENCIL;if(n===Ca)return s.RED;if(n===Ia)return s.RED_INTEGER;if(n===_i)return s.RG;if(n===Pa)return s.RG_INTEGER;if(n===La)return s.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===lr)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Na||n===Ua||n===Fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===Oa||n===za||n===ka||n===Ha||n===cr||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===Oa)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return r.COMPRESSED_R11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_R11_EAC;if(n===cr)return r.COMPRESSED_RG11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===so||n===ro)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ao||n===oo||n===hr||n===lo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`,nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Te({vertexShader:Ag,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ic=class extends Bn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new nc,p={},S=e.getContextAttributes(),R=null,y=null,E=[],b=[],T=new Bt,x=null,w=null,C=new nn;C.viewport=new Me;let P=new nn;P.viewport=new Me;let D=[C,P],B=new ya,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=E[Y];return et===void 0&&(et=new os,E[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=E[Y];return et===void 0&&(et=new os,E[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=E[Y];return et===void 0&&(et=new os,E[Y]=et),et.getHandSpace()};function q(Y){let et=b.indexOf(Y.inputSource);if(et===-1)return;let yt=E[et];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||a),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Z(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<E.length;Y++){let et=b[Y];et!==null&&(b[Y]=null,E[Y].disconnect(et))}L=null,z=null,g.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(R),f=null,u=null,d=null,i=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),w!==null){let Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",W),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Ut=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=S.stencil?xi:Fn,Ut=S.stencil?gs:mn);let Zt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Zt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ge(u.textureWidth,u.textureHeight,{format:cn,type:ln,depthTexture:new kn(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ge(f.framebufferWidth,f.framebufferHeight,{format:cn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Y){for(let et=0;et<Y.removed.length;et++){let yt=Y.removed[et],Ut=b.indexOf(yt);Ut>=0&&(b[Ut]=null,E[Ut].disconnect(yt))}for(let et=0;et<Y.added.length;et++){let yt=Y.added[et],Ut=b.indexOf(yt);if(Ut===-1){for(let Zt=0;Zt<E.length;Zt++)if(Zt>=b.length){b.push(yt),Ut=Zt;break}else if(b[Zt]===null){b[Zt]=yt,Ut=Zt;break}if(Ut===-1)break}let vt=E[Ut];vt&&vt.connect(yt)}}let k=new I,$=new I;function Q(Y,et,yt){k.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(yt.matrixWorld);let Ut=k.distanceTo($),vt=et.projectionMatrix.elements,Zt=yt.projectionMatrix.elements,Ue=vt[14]/(vt[10]-1),$t=vt[14]/(vt[10]+1),ie=(vt[9]+1)/vt[5],fe=(vt[9]-1)/vt[5],Qt=(vt[8]-1)/vt[0],ve=(Zt[8]+1)/Zt[0],ze=Ue*Qt,an=Ue*ve,Se=Ut/(-Qt+ve),Ae=Se*-Qt;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ae),Y.translateZ(Se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),vt[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let F=Ue+Se,Ze=$t+Se,oe=ze-Ae,A=an+(Ut-Ae),_=ie*$t/Ze*F,O=fe*$t/Ze*F;Y.projectionMatrix.makePerspective(oe,A,_,O,F,Ze),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function xt(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let et=Y.near,yt=Y.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),B.near=P.near=C.near=et,B.far=P.far=C.far=yt,(L!==B.near||z!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,z=B.far),B.layers.mask=Y.layers.mask|6,C.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let Ut=Y.parent,vt=B.cameras;xt(B,Ut);for(let Zt=0;Zt<vt.length;Zt++)xt(vt[Zt],Ut);vt.length===2?Q(B,C,P):B.projectionMatrix.copy(C.projectionMatrix),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),_t(Y,B,Ut)};function _t(Y,et,yt){yt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Y){return p[Y]};let Vt=null;function Ot(Y,et){if(h=et.getViewerPose(c||a),m=et,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ut=!1;yt.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let $t=0;$t<yt.length;$t++){let ie=yt[$t],fe=null;if(f!==null)fe=f.getViewport(ie);else{let ve=d.getViewSubImage(u,ie);fe=ve.viewport,$t===0&&(t.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(y))}let Qt=D[$t];Qt===void 0&&(Qt=new nn,Qt.layers.enable($t),Qt.viewport=new Me,D[$t]=Qt),Qt.matrix.fromArray(ie.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ie.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(fe.x,fe.y,fe.width,fe.height),$t===0&&(B.matrix.copy(Qt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(Qt)}let vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let $t=d.getDepthInformation(yt[0]);$t&&$t.isValid&&$t.texture&&g.init($t,i.renderState)}if(vt&&vt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let $t=0;$t<yt.length;$t++){let ie=yt[$t].camera;if(ie){let fe=p[ie];fe||(fe=new qs,p[ie]=fe);let Qt=d.getCameraImage(ie);fe.sourceTexture=Qt}}}}for(let yt=0;yt<E.length;yt++){let Ut=b[yt],vt=E[yt];Ut!==null&&vt!==void 0&&vt.update(Ut,et,c||a)}Vt&&Vt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let Xt=new nu;Xt.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){Vt=Y},this.dispose=function(){}}},Cg=new Jt,lu=new Ht;lu.set(-1,0,0,0,1,0,0,0,1);function Ig(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nl(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,R):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),R=S.envMap,y=S.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(lu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=R*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let b=E.program;n.uniformBlockBinding(y,b)}function c(y,E){let b=i[y.id];b===void 0&&(g(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",S));let T=E.program;n.updateUBOMapping(y,T);let x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let E=d();y.__bindingPointIndex=E;let b=s.createBuffer(),T=y.__size,x=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,T,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=i[y.id],b=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let x=0,w=b.length;x<w;x++){let C=b[x];if(Array.isArray(C))for(let P=0,D=C.length;P<D;P++)f(C[P],x,P,T);else f(C,x,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,E,b,T){if(v(y,E,b,T)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let P=0;P<w.length;P++){let D=w[P],B=p(D);m(D,y.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,y.__data)}}function m(y,E,b){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,b)}function v(y,E,b,T){let x=y.value,w=E+"_"+b;if(T[w]===void 0)return typeof x=="number"||typeof x=="boolean"?T[w]=x:ArrayBuffer.isView(x)?T[w]=x.slice():T[w]=x.clone(),!0;{let C=T[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return T[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(y){let E=y.uniforms,b=0,T=16;for(let w=0,C=E.length;w<C;w++){let P=Array.isArray(E[w])?E[w]:[E[w]];for(let D=0,B=P.length;D<B;D++){let L=P[D],z=Array.isArray(L.value)?L.value:[L.value];for(let q=0,Z=z.length;q<Z;q++){let W=z[q],k=p(W),$=b%T,Q=$%k.boundary,xt=$+Q;b+=Q,xt!==0&&T-xt<k.storage&&(b+=T-xt),L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=k.storage}}}let x=b%T;return x>0&&(b+=T-x),y.__size=b,y.__cache={},this}function p(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",y),E}function S(y){let E=y.target;E.removeEventListener("dispose",S);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function R(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:R}}var Lg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function Dg(){return Vn===null&&(Vn=new Ai(Lg,16,16,_i,gn),Vn.name="DFG_LUT",Vn.minFilter=Pe,Vn.magFilter=Pe,Vn.wrapS=Un,Vn.wrapT=Un,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var go=class{constructor(t={}){let{canvas:e=Ah(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=f,g=new Set([La,Pa,Ia]),p=new Set([ln,mn,ms,gs,Aa,Ra]),S=new Uint32Array(4),R=new Int32Array(4),y=new I,E=null,b=null,T=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,D=null,B=null,L=null,z=null;this._outputColorSpace=en;let q=0,Z=0,W=null,k=-1,$=null,Q=new Me,xt=new Me,_t=null,Vt=new St(0),Ot=0,Xt=e.width,Y=e.height,et=1,yt=null,Ut=null,vt=new Me(0,0,Xt,Y),Zt=new Me(0,0,Xt,Y),Ue=!1,$t=new cs,ie=!1,fe=!1,Qt=new Jt,ve=new I,ze=new Me,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ae(){return W===null?et:1}let F=n;function Ze(M,N){return e.getContext(M,N)}let oe,A,_,O,G,J,st,at,K,tt,ot,Rt,ut,lt,Ct,Dt,Gt,U,ct,j,ht,mt,nt;try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",bn,!1),F===null){let N="webgl2";if(F=Ze(N,M),F===null)throw Ze(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(M){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),zt("WebGLRenderer: "+M.message),M}function It(){oe=new km(F),oe.init(),ht=new Tg(F,oe),A=new Im(F,oe,t,ht),_=new Eg(F,oe),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),B=F.createFramebuffer(),L=F.createFramebuffer(),z=F.createFramebuffer(),O=new Gm(F),G=new hg,J=new wg(F,oe,_,G,A,ht,O),st=new zm(C),at=new Wd(F),mt=new Rm(F,at),K=new Hm(F,at,O,mt),tt=new Xm(F,K,at,mt,O),U=new Wm(F,A,J),Ct=new Pm(G),ot=new cg(C,st,oe,A,mt,Ct),Rt=new Ig(C,G),ut=new dg,lt=new _g(oe),Gt=new Am(C,st,_,tt,m,l),Dt=new bg(C,tt,A),nt=new Pg(F,O,A,_),ct=new Cm(F,oe,O),j=new Vm(F,oe,O),O.programs=ot.programs,C.capabilities=A,C.extensions=oe,C.properties=G,C.renderLists=ut,C.shadowMap=Dt,C.state=_,C.info=O}v!==ln&&(w=new Ym(v,e.width,e.height,o,i,r));let wt=new ic(C,F);this.xr=wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(M){M!==void 0&&(et=M,this.setSize(Xt,Y,!1))},this.getSize=function(M){return M.set(Xt,Y)},this.setSize=function(M,N,X=!0){if(wt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=M,Y=N,e.width=Math.floor(M*et),e.height=Math.floor(N*et),X===!0&&(e.style.width=M+"px",e.style.height=N+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(Xt*et,Y*et).floor()},this.setDrawingBufferSize=function(M,N,X){Xt=M,Y=N,et=X,e.width=Math.floor(M*X),e.height=Math.floor(N*X),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(v===ln){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(vt)},this.setViewport=function(M,N,X,H){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,N,X,H),_.viewport(Q.copy(vt).multiplyScalar(et).round())},this.getScissor=function(M){return M.copy(Zt)},this.setScissor=function(M,N,X,H){M.isVector4?Zt.set(M.x,M.y,M.z,M.w):Zt.set(M,N,X,H),_.scissor(xt.copy(Zt).multiplyScalar(et).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(M){_.setScissorTest(Ue=M)},this.setOpaqueSort=function(M){yt=M},this.setTransparentSort=function(M){Ut=M},this.getClearColor=function(M){return M.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,X=!0){let H=0;if(M){let V=!1;if(W!==null){let pt=W.texture.format;V=g.has(pt)}if(V){let pt=W.texture.type,Mt=p.has(pt),ft=Gt.getClearColor(),bt=Gt.getClearAlpha(),At=ft.r,qt=ft.g,Kt=ft.b;Mt?(S[0]=At,S[1]=qt,S[2]=Kt,S[3]=bt,F.clearBufferuiv(F.COLOR,0,S)):(R[0]=At,R[1]=qt,R[2]=Kt,R[3]=bt,F.clearBufferiv(F.COLOR,0,R))}else H|=F.COLOR_BUFFER_BIT}N&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Gt.dispose(),ut.dispose(),lt.dispose(),G.dispose(),st.dispose(),tt.dispose(),mt.dispose(),nt.dispose(),ot.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",pc),wt.removeEventListener("sessionend",mc),yi.stop()};function pe(M){M.preventDefault(),Pl("WebGLRenderer: Context Lost."),P=!0}function se(){Pl("WebGLRenderer: Context Restored."),P=!1;let M=O.autoReset,N=Dt.enabled,X=Dt.autoUpdate,H=Dt.needsUpdate,V=Dt.type;It(),O.autoReset=M,Dt.enabled=N,Dt.autoUpdate=X,Dt.needsUpdate=H,Dt.type=V}function bn(M){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ln(M){let N=M.target;N.removeEventListener("dispose",Ln),Nu(N)}function Nu(M){Uu(M),G.remove(M)}function Uu(M){let N=G.get(M).programs;N!==void 0&&(N.forEach(function(X){ot.releaseProgram(X)}),M.isShaderMaterial&&ot.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,X,H,V,pt){N===null&&(N=an);let Mt=V.isMesh&&V.matrixWorld.determinantAffine()<0,ft=Ou(M,N,X,H,V);_.setMaterial(H,Mt);let bt=X.index,At=1;if(H.wireframe===!0){if(bt=K.getWireframeAttribute(X),bt===void 0)return;At=2}let qt=X.drawRange,Kt=X.attributes.position,Et=qt.start*At,re=(qt.start+qt.count)*At;pt!==null&&(Et=Math.max(Et,pt.start*At),re=Math.min(re,(pt.start+pt.count)*At)),bt!==null?(Et=Math.max(Et,0),re=Math.min(re,bt.count)):Kt!=null&&(Et=Math.max(Et,0),re=Math.min(re,Kt.count));let Re=re-Et;if(Re<0||Re===1/0)return;mt.setup(V,H,ft,X,bt);let xe,de=ct;if(bt!==null&&(xe=at.get(bt),de=j,de.setIndex(xe)),V.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*Ae()),de.setMode(F.LINES)):de.setMode(F.TRIANGLES);else if(V.isLine){let Je=H.linewidth;Je===void 0&&(Je=1),_.setLineWidth(Je*Ae()),V.isLineSegments?de.setMode(F.LINES):V.isLineLoop?de.setMode(F.LINE_LOOP):de.setMode(F.LINE_STRIP)}else V.isPoints?de.setMode(F.POINTS):V.isSprite&&de.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))de.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Je=V._multiDrawStarts,gt=V._multiDrawCounts,Qe=V._multiDrawCount,ne=bt?at.get(bt).bytesPerElement:1,_n=G.get(H).currentProgram.getUniforms();for(let Dn=0;Dn<Qe;Dn++)_n.setValue(F,"_gl_DrawID",Dn),de.render(Je[Dn]/ne,gt[Dn])}else if(V.isInstancedMesh)de.renderInstances(Et,Re,V.count);else if(X.isInstancedBufferGeometry){let Je=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gt=Math.min(X.instanceCount,Je);de.renderInstances(Et,Re,gt)}else de.render(Et,Re)};function fc(M,N,X,H){D!==null&&M.isNodeMaterial&&D.setObject(H,M),ie===!0&&Ct.setState(M,X,!1),M.transparent===!0&&M.side===De&&M.forceSinglePass===!1?(M.side=rn,M.needsUpdate=!0,vr(M,N,H),M.side=pi,M.needsUpdate=!0,vr(M,N,H),M.side=De):vr(M,N,H)}this.compile=function(M,N,X=null){X===null&&(X=M),D!==null&&D.renderStart(M,N,X),b=lt.get(X),b.init(N),x.push(b),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),M!==X&&M.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),fe=this.localClippingEnabled,ie=Ct.init(this.clippingPlanes,fe),ie===!0&&Ct.setGlobalState(this.clippingPlanes,N),D!==null&&Dt.render(b.state.shadowsArray,X,N);let H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let pt=V.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){let ft=pt[Mt];fc(ft,X,N,V),H.add(ft)}else fc(pt,X,N,V),H.add(pt)}),b=x.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(M,N,X=null){let H=this.compile(M,N,X);return new Promise(V=>{function pt(){if(H.forEach(function(Mt){let bt=G.get(Mt).currentProgram;(bt===void 0||bt.isReady())&&H.delete(Mt)}),H.size===0){V(M);return}setTimeout(pt,10)}oe.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Lo=null;function Fu(M){Lo&&Lo(M)}function pc(){yi.stop()}function mc(){yi.start()}let yi=new nu;yi.setAnimationLoop(Fu),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(M){Lo=M,wt.setAnimationLoop(M),M===null?yi.stop():yi.start()},wt.addEventListener("sessionstart",pc),wt.addEventListener("sessionend",mc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(M,N);let X=wt.enabled===!0&&wt.isPresenting===!0,H=w!==null&&(W===null||X)&&w.begin(C,W);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(N),N=wt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,N,W),b=lt.get(M,x.length),b.init(N),b.state.textureUnits=J.getTextureUnits(),x.push(b),Qt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$t.setFromProjectionMatrix(Qt,Rn,N.reversedDepth),fe=this.localClippingEnabled,ie=Ct.init(this.clippingPlanes,fe),E=ut.get(M,T.length),E.init(),T.push(E),wt.enabled===!0&&wt.isPresenting===!0){let Mt=C.xr.getDepthSensingMesh();Mt!==null&&Do(Mt,N,-1/0,C.sortObjects)}Do(M,N,0,C.sortObjects),E.finish(),D!==null&&D.updateLights(b.state.lightsArray),C.sortObjects===!0&&E.sort(yt,Ut),Se=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Se&&Gt.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Ct.beginShadows();let V=b.state.shadowsArray;if(Dt.render(V,M,N),ie===!0&&Ct.endShadows(),(H&&w.hasRenderPass())===!1){let Mt=E.opaque,ft=E.transmissive;if(b.setupLights(),N.isArrayCamera){let bt=N.cameras;if(ft.length>0)for(let At=0,qt=bt.length;At<qt;At++){let Kt=bt[At];xc(Mt,ft,M,Kt)}Se&&Gt.render(M);for(let At=0,qt=bt.length;At<qt;At++){let Kt=bt[At];gc(E,M,Kt,Kt.viewport)}}else ft.length>0&&xc(Mt,ft,M,N),Se&&Gt.render(M),gc(E,M,N)}W!==null&&Z===0&&(J.updateMultisampleRenderTarget(W),J.updateRenderTargetMipmap(W)),H&&w.end(C),M.isScene===!0&&M.onAfterRender(C,M,N),mt.resetDefaultState(),k=-1,$=null,x.pop(),x.length>0?(b=x[x.length-1],J.setTextureUnits(b.state.textureUnits),ie===!0&&Ct.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,D!==null&&D.renderEnd()};function Do(M,N,X,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum($t)){H&&ze.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Qt);let Mt=tt.update(M),ft=M.material;ft.visible&&E.push(M,Mt,ft,X,ze.z,null,N)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum($t))){let Mt=tt.update(M),ft=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ze.copy(M.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),ze.copy(Mt.boundingSphere.center)),ze.applyMatrix4(M.matrixWorld).applyMatrix4(Qt)),Array.isArray(ft)){let bt=Mt.groups;for(let At=0,qt=bt.length;At<qt;At++){let Kt=bt[At],Et=ft[Kt.materialIndex];Et&&Et.visible&&E.push(M,Mt,Et,X,ze.z,Kt,N)}}else ft.visible&&E.push(M,Mt,ft,X,ze.z,null,N)}}let pt=M.children;for(let Mt=0,ft=pt.length;Mt<ft;Mt++)Do(pt[Mt],N,X,H)}function gc(M,N,X,H){let{opaque:V,transmissive:pt,transparent:Mt}=M;b.setupLightsView(X),ie===!0&&Ct.setGlobalState(C.clippingPlanes,X),H&&_.viewport(Q.copy(H)),V.length>0&&yr(V,N,X),pt.length>0&&yr(pt,N,X),Mt.length>0&&yr(Mt,N,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function xc(M,N,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let Et=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Ge(1,1,{generateMipmaps:!0,type:Et?gn:ln,minFilter:gi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let pt=b.state.transmissionRenderTarget[H.id],Mt=H.viewport||Q;pt.setSize(Mt.z*C.transmissionResolutionScale,Mt.w*C.transmissionResolutionScale);let ft=C.getRenderTarget(),bt=C.getActiveCubeFace(),At=C.getActiveMipmapLevel();C.setRenderTarget(pt),C.getClearColor(Vt),Ot=C.getClearAlpha(),Ot<1&&C.setClearColor(16777215,.5),C.clear(),Se&&Gt.render(X);let qt=C.toneMapping;C.toneMapping=In;let Kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ie===!0&&Ct.setGlobalState(C.clippingPlanes,H),yr(M,X,H),J.updateMultisampleRenderTarget(pt),J.updateRenderTargetMipmap(pt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let re=0,Re=N.length;re<Re;re++){let xe=N[re],{object:de,geometry:Je,material:gt,group:Qe}=xe;if(gt.side===De&&de.layers.test(H.layers)){let ne=gt.side;gt.side=rn,gt.needsUpdate=!0,_c(de,X,H,Je,gt,Qe),gt.side=ne,gt.needsUpdate=!0,Et=!0}}Et===!0&&(J.updateMultisampleRenderTarget(pt),J.updateRenderTargetMipmap(pt))}C.setRenderTarget(ft,bt,At),C.setClearColor(Vt,Ot),Kt!==void 0&&(H.viewport=Kt),C.toneMapping=qt}function yr(M,N,X){let H=N.isScene===!0?N.overrideMaterial:null;for(let V=0,pt=M.length;V<pt;V++){let Mt=M[V],{object:ft,geometry:bt,group:At}=Mt,qt=Mt.material;qt.allowOverride===!0&&H!==null&&(qt=H),ft.layers.test(X.layers)&&_c(ft,N,X,bt,qt,At)}}function _c(M,N,X,H,V,pt){D!==null&&V.isNodeMaterial&&D.setObject(M,V),M.onBeforeRender(C,N,X,H,V,pt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(C,N,X,H,M,pt),V.transparent===!0&&V.side===De&&V.forceSinglePass===!1?(V.side=rn,V.needsUpdate=!0,C.renderBufferDirect(X,N,H,V,M,pt),V.side=pi,V.needsUpdate=!0,C.renderBufferDirect(X,N,H,V,M,pt),V.side=De):C.renderBufferDirect(X,N,H,V,M,pt),M.onAfterRender(C,N,X,H,V,pt)}function vr(M,N,X){N.isScene!==!0&&(N=an);let H=G.get(M),V=b.state.lights,pt=b.state.shadowsArray,Mt=V.state.version,ft=ot.getParameters(M,V.state,pt,N,X,b.state.lightProbeGridArray),bt=ot.getProgramCacheKey(ft),At=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;let qt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=st.get(M.envMap||H.environment,qt),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,At===void 0&&(M.addEventListener("dispose",Ln),At=new Map,H.programs=At);let Kt=At.get(bt);if(Kt!==void 0){if(H.currentProgram===Kt&&H.lightsStateVersion===Mt)return vc(M,ft),Kt}else ft.uniforms=ot.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,X,ft),M.onBeforeCompile(ft,C),Kt=ot.acquireProgram(ft,bt),At.set(bt,Kt),H.uniforms=ft.uniforms;let Et=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=Ct.uniform),vc(M,ft),H.needsLights=ku(M),H.lightsStateVersion=Mt,H.needsLights&&(Et.ambientLightColor.value=V.state.ambient,Et.lightProbe.value=V.state.probe,Et.sunLights.value=V.state.sun,Et.sunLightShadows.value=V.state.sunShadow,Et.directionalLights.value=V.state.directional,Et.directionalLightShadows.value=V.state.directionalShadow,Et.spotLights.value=V.state.spot,Et.spotLightShadows.value=V.state.spotShadow,Et.rectAreaLights.value=V.state.rectArea,Et.ltc_1.value=V.state.rectAreaLTC1,Et.ltc_2.value=V.state.rectAreaLTC2,Et.pointLights.value=V.state.point,Et.pointLightShadows.value=V.state.pointShadow,Et.hemisphereLights.value=V.state.hemi,Et.sunShadowMatrix.value=V.state.sunShadowMatrix,Et.sunShadowCascade.value=V.state.sunShadowCascade,Et.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Et.spotLightMatrix.value=V.state.spotLightMatrix,Et.spotLightMap.value=V.state.spotLightMap,Et.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=Kt,H.uniformsList=null,Kt}function yc(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Ms.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function vc(M,N){let X=G.get(M);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Bu(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let X=0,H=M.length;X<H;X++){let V=M[X];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Ou(M,N,X,H,V){N.isScene!==!0&&(N=an),J.resetTextureUnits();let pt=N.fog,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,ft=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:te.workingColorSpace,bt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,At=st.get(H.envMap||Mt,bt),qt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Et=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color,xe=In;H.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(xe=C.toneMapping);let de=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Je=de!==void 0?de.length:0,gt=G.get(H),Qe=b.state.lights;if(ie===!0&&(fe===!0||M!==$)){let me=M===$&&H.id===k;Ct.setState(H,M,me)}let ne=!1;H.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Qe.state.version||gt.outputColorSpace!==ft||V.isBatchedMesh&&gt.batching===!1||!V.isBatchedMesh&&gt.batching===!0||V.isBatchedMesh&&gt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&gt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&gt.instancing===!1||!V.isInstancedMesh&&gt.instancing===!0||V.isSkinnedMesh&&gt.skinning===!1||!V.isSkinnedMesh&&gt.skinning===!0||V.isInstancedMesh&&gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&gt.instancingMorph===!1&&V.morphTexture!==null||gt.envMap!==At||H.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Ct.numPlanes||gt.numIntersection!==Ct.numIntersection)||gt.vertexAlphas!==qt||gt.vertexTangents!==Kt||gt.morphTargets!==Et||gt.morphNormals!==re||gt.morphColors!==Re||gt.toneMapping!==xe||gt.morphTargetsCount!==Je||!!gt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,gt.__version=H.version);let _n=gt.currentProgram;ne===!0&&(_n=vr(H,N,V),D&&H.isNodeMaterial&&D.onUpdateProgram(H,_n,gt));let Dn=!1,ti=!1,Bi=!1,he=_n.getUniforms(),we=gt.uniforms;if(_.useProgram(_n.program)&&(Dn=!0,ti=!0,Bi=!0),H.id!==k&&(k=H.id,ti=!0),gt.needsLights){let me=Bu(b.state.lightProbeGridArray,V);gt.lightProbeGrid!==me&&(gt.lightProbeGrid=me,ti=!0)}if(Dn||$!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),he.setValue(F,"projectionMatrix",M.projectionMatrix),he.setValue(F,"viewMatrix",M.matrixWorldInverse);let ni=he.map.cameraPosition;ni!==void 0&&ni.setValue(F,ve.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&he.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,ti=!0,Bi=!0)}if(gt.needsLights&&(Qe.state.sunShadowMap.length>0&&he.setValue(F,"sunShadowMap",Qe.state.sunShadowMap,J),Qe.state.directionalShadowMap.length>0&&he.setValue(F,"directionalShadowMap",Qe.state.directionalShadowMap,J),Qe.state.spotShadowMap.length>0&&he.setValue(F,"spotShadowMap",Qe.state.spotShadowMap,J),Qe.state.pointShadowMap.length>0&&he.setValue(F,"pointShadowMap",Qe.state.pointShadowMap,J)),V.isSkinnedMesh){he.setOptional(F,V,"bindMatrix"),he.setOptional(F,V,"bindMatrixInverse");let me=V.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),he.setValue(F,"boneTexture",me.boneTexture,J))}V.isBatchedMesh&&(he.setOptional(F,V,"batchingTexture"),he.setValue(F,"batchingTexture",V._matricesTexture,J),he.setOptional(F,V,"batchingIdTexture"),he.setValue(F,"batchingIdTexture",V._indirectTexture,J),he.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&he.setValue(F,"batchingColorTexture",V._colorsTexture,J));let ei=X.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&U.update(V,X,_n),(ti||gt.receiveShadow!==V.receiveShadow)&&(gt.receiveShadow=V.receiveShadow,he.setValue(F,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(we.envMapIntensity.value=N.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=Dg()),ti){if(he.setValue(F,"toneMappingExposure",C.toneMappingExposure),gt.needsLights&&zu(we,Bi),pt&&H.fog===!0&&Rt.refreshFogUniforms(we,pt),Rt.refreshMaterialUniforms(we,H,et,Y,b.state.transmissionRenderTarget[M.id]),gt.needsLights&&gt.lightProbeGrid){let me=gt.lightProbeGrid;we.probesSH.value=me.texture,we.probesMin.value.copy(me.boundingBox.min),we.probesMax.value.copy(me.boundingBox.max),we.probesResolution.value.copy(me.resolution)}Ms.upload(F,yc(gt),we,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ms.upload(F,yc(gt),we,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(F,"center",V.center),he.setValue(F,"modelViewMatrix",V.modelViewMatrix),he.setValue(F,"normalMatrix",V.normalMatrix),he.setValue(F,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let me=H.uniformsGroups;for(let ni=0,Oi=me.length;ni<Oi;ni++){let Sc=me[ni];nt.update(Sc,_n),nt.bind(Sc,_n)}}return _n}function zu(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function ku(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(M,N,X){let H=G.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=N,G.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let X=G.get(M);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,X=0){W=M,q=N,Z=X;let H=null,V=!1,pt=!1;if(M){let ft=G.get(M);if(ft.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,ft.__webglFramebuffer),Q.copy(M.viewport),xt.copy(M.scissor),_t=M.scissorTest,_.viewport(Q),_.scissor(xt),_.setScissorTest(_t),k=-1;return}else if(ft.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(ft.__hasExternalTextures)J.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let qt=M.depthTexture;if(ft.__boundDepthTexture!==qt){if(qt!==null&&G.has(qt)&&(M.width!==qt.image.width||M.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let bt=M.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(pt=!0);let At=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[N])?H=At[N][X]:H=At[N],V=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?H=G.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?H=At[X]:H=At,Q.copy(M.viewport),xt.copy(M.scissor),_t=M.scissorTest}else Q.copy(vt).multiplyScalar(et).floor(),xt.copy(Zt).multiplyScalar(et).floor(),_t=Ue;if(X!==0&&(H=B),_.bindFramebuffer(F.FRAMEBUFFER,H)&&_.drawBuffers(M,H),_.viewport(Q),_.scissor(xt),_.setScissorTest(_t),V){let ft=G.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,X)}else if(pt){let ft=N;for(let bt=0;bt<M.textures.length;bt++){let At=G.get(M.textures[bt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+bt,At.__webglTexture,X,ft)}}else if(M!==null&&X!==0){let ft=G.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ft.__webglTexture,X)}k=-1};function Mc(M){let N=G.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=A.textureFormatReadable(M.format),N.__typeReadable=A.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,X,H,V,pt,Mt,ft=0){if(!(M&&M.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt){_.bindFramebuffer(F.FRAMEBUFFER,bt);try{let At=M.textures[ft],qt=At.format,Kt=At.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Et=Mc(At);if(Et.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&X>=0&&X<=M.height-V&&F.readPixels(N,X,H,V,ht.convert(qt),ht.convert(Kt),pt)}finally{let At=W!==null?G.get(W).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(M,N,X,H,V,pt,Mt,ft=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Mt!==void 0&&(bt=bt[Mt]),bt)if(N>=0&&N<=M.width-H&&X>=0&&X<=M.height-V){_.bindFramebuffer(F.FRAMEBUFFER,bt);let At=M.textures[ft],qt=At.format,Kt=At.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ft);let Et=Mc(At);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,re),F.bufferData(F.PIXEL_PACK_BUFFER,pt.byteLength,F.STREAM_READ),F.readPixels(N,X,H,V,ht.convert(qt),ht.convert(Kt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Re=W!==null?G.get(W).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Re);let xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ch(F,xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(re),F.deleteSync(xe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,X=0){let H=Math.pow(2,-X),V=Math.floor(M.image.width*H),pt=Math.floor(M.image.height*H),Mt=N!==null?N.x:0,ft=N!==null?N.y:0;J.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Mt,ft,V,pt),_.unbindTexture()},this.copyTextureToTexture=function(M,N,X=null,H=null,V=0,pt=0){let Mt,ft,bt,At,qt,Kt,Et,re,Re,xe=M.isCompressedTexture?M.mipmaps[pt]:M.image;if(X!==null)Mt=X.max.x-X.min.x,ft=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,qt=X.min.y,Kt=X.isBox3?X.min.z:0;else{let we=Math.pow(2,-V);Mt=Math.floor(xe.width*we),ft=Math.floor(xe.height*we),M.isDataArrayTexture?bt=xe.depth:M.isData3DTexture?bt=Math.floor(xe.depth*we):bt=1,At=0,qt=0,Kt=0}H!==null?(Et=H.x,re=H.y,Re=H.z):(Et=0,re=0,Re=0);let de=ht.convert(N.format),Je=ht.convert(N.type),gt;N.isData3DTexture?(J.setTexture3D(N,0),gt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),gt=F.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),gt=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let Qe=_.getParameter(F.UNPACK_ROW_LENGTH),ne=_.getParameter(F.UNPACK_IMAGE_HEIGHT),_n=_.getParameter(F.UNPACK_SKIP_PIXELS),Dn=_.getParameter(F.UNPACK_SKIP_ROWS),ti=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,xe.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,At),_.pixelStorei(F.UNPACK_SKIP_ROWS,qt),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt);let Bi=M.isDataArrayTexture||M.isData3DTexture,he=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let we=G.get(M),ei=G.get(N),me=G.get(we.__renderTarget),ni=G.get(ei.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,me.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Oi=0;Oi<bt;Oi++)Bi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(M).__webglTexture,V,Kt+Oi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.get(N).__webglTexture,pt,Re+Oi)),F.blitFramebuffer(At,qt,Mt,ft,Et,re,Mt,ft,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||G.has(M)){let we=G.get(M),ei=G.get(N);_.bindFramebuffer(F.READ_FRAMEBUFFER,L),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let me=0;me<bt;me++)Bi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,we.__webglTexture,V,Kt+me):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,V),he?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ei.__webglTexture,pt,Re+me):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ei.__webglTexture,pt),V!==0?F.blitFramebuffer(At,qt,Mt,ft,Et,re,Mt,ft,F.COLOR_BUFFER_BIT,F.NEAREST):he?F.copyTexSubImage3D(gt,pt,Et,re,Re+me,At,qt,Mt,ft):F.copyTexSubImage2D(gt,pt,Et,re,At,qt,Mt,ft);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else he?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(gt,pt,Et,re,Re,Mt,ft,bt,de,Je,xe.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(gt,pt,Et,re,Re,Mt,ft,bt,de,xe.data):F.texSubImage3D(gt,pt,Et,re,Re,Mt,ft,bt,de,Je,xe):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pt,Et,re,Mt,ft,de,Je,xe.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pt,Et,re,xe.width,xe.height,de,xe.data):F.texSubImage2D(F.TEXTURE_2D,pt,Et,re,Mt,ft,de,Je,xe);_.pixelStorei(F.UNPACK_ROW_LENGTH,Qe),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ne),_.pixelStorei(F.UNPACK_SKIP_PIXELS,_n),_.pixelStorei(F.UNPACK_SKIP_ROWS,Dn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,ti),pt===0&&N.generateMipmaps&&F.generateMipmap(gt),_.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){q=0,Z=0,W=null,_.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var xn=(s,t,e)=>s<t?t:s>e?e:s,ge=(s,t,e)=>s+(t-s)*e,Ui=(s,t,e,n)=>ge(s,t,1-Math.exp(-e*n)),Qn=s=>s*s*(3-2*s),it=(s=0,t=1)=>s+Math.random()*(t-s);function Ne(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Fi(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function bs(s,t,e,n){return s+Fi(s,t)*(1-Math.exp(-e*n))}function qe(s,t){let e=new Uint8ClampedArray(s*t*4),n=(i,r)=>(i%r+r)%r;return{w:s,h:t,data:e,set(i,r,a,o=255){i=n(Math.round(i),s),r=n(Math.round(r),t);let l=(r*s+i)*4;e[l]=a[0],e[l+1]=a[1],e[l+2]=a[2],e[l+3]=o},get(i,r){i=n(Math.round(i),s),r=n(Math.round(r),t);let a=(r*s+i)*4;return[e[a],e[a+1],e[a+2]]},rect(i,r,a,o,l){for(let c=0;c<a;c++)for(let h=0;h<o;h++)this.set(i+c,r+h,l)}}}function Ye(s,{repeat:t=!0,linear:e=!1}={}){let n=document.createElement("canvas");return n.width=s.w,n.height=s.h,n.getContext("2d").putImageData(new ImageData(s.data,s.w,s.h),0,0),cu(n,{repeat:t,linear:e})}function cu(s,{repeat:t=!0,linear:e=!1}={}){let n=new Xs(s);return n.magFilter=e?Pe:ue,n.minFilter=e?Pe:ue,n.generateMipmaps=!1,n.colorSpace=e?Pn:en,t&&(n.wrapS=n.wrapT=ns),n}var Xe=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Ee=(s,t)=>[s[0]+t,s[1]+t,s[2]+t],Ng=(s,t,e)=>[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e],sc=new Map;function He(s,t){return sc.has(s)||sc.set(s,t()),sc.get(s)}function rc(s=7,t=[176,168,148],e=15){return He("floor"+s+t+e,()=>{let i=qe(64,64),r=Ne(s),a=[],o=Math.round(Math.sqrt(e));for(let h=0;h<o;h++)for(let d=0;d<o;d++){let u=(r()-.5)*30,f=(r()-.5)*12;a.push({x:(h+.2+r()*.6)/o*64,y:(d+.2+r()*.6)/o*64,sx:.75+r()*.6,sy:.75+r()*.6,c:[t[0]+u+f,t[1]+u,t[2]+u-f],moss:r()<.15})}let l=(h,d,u)=>{let f=Math.abs(d-h.x),m=Math.abs(u-h.y);return f=Math.min(f,64-f)*h.sx,m=Math.min(m,64-m)*h.sy,Math.max(f,m)*.75+(f+m)*.25},c=(h,d)=>{let u=null,f=1e9,m=1e9;for(let v of a){let g=l(v,h,d);g<f?(m=f,f=g,u=v):g<m&&(m=g)}return{b:u,gap:m-f}};for(let h=0;h<64;h++)for(let d=0;d<64;d++){let{b:u,gap:f}=c(h,d),m=u.c,v=r();v<.07?m=Ee(m,-12):v<.12&&(m=Ee(m,8)),f<1.1?(m=Xe(u.c,.66),u.moss&&r()<.5&&(m=[112,124,86])):f<2.2&&(m=c(h,d-2).b!==u||c(h-2,d).b!==u?Ee(u.c,12):Xe(u.c,.88)),i.set(h,d,m)}return Ye(i)})}function hu(){return He("path",()=>{let s=qe(64,64),t=Ne(31),e=[158,156,148];for(let n=0;n<4;n++){let i=n%2?8:0;for(let r=0;r<4;r++){let a=(t()-.5)*20,o=Ee(e,a);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=o,d=t();d<.06?h=Ee(o,-12):d<.1&&(h=Ee(o,8)),l===15||c===15?h=Xe(o,.7):(l===0||c===0)&&(h=Ee(o,10)),s.set(r*16+l+i,n*16+c,h)}}}return Ye(s)})}function ac(s=[168,160,142]){return He("block"+s,()=>{let t=qe(32,32),e=Ne(5);for(let n=0;n<4;n++){let i=n%2?8:0;for(let r=0;r<2;r++){let a=Ee(s,(e()-.5)*22);for(let o=0;o<16;o++)for(let l=0;l<8;l++){let c=a;e()<.08&&(c=Ee(a,-10)),o===15||l===7?c=Xe(a,.55):l===0&&(c=Ee(a,16)),t.set(r*16+o+i,n*8+l,c)}}}return Ye(t)})}function uu(s=[92,132,64]){return He("grass"+s,()=>{let t=qe(32,32),e=Ne(11);for(let n=0;n<32;n++)for(let i=0;i<32;i++){let r=e(),a=Ee(s,(e()-.5)*14);r<.12?a=Xe(s,.78):r<.2&&(a=Xe(s,1.14)),t.set(n,i,a)}for(let n=0;n<7;n++){let i=Math.floor(e()*32),r=Math.floor(e()*32),a=e()<.5?[236,230,200]:[232,200,92];t.set(i,r,a)}return Ye(t)})}function du(){return He("dirt",()=>{let s=qe(32,32),t=Ne(13),e=[96,104,70];for(let n=0;n<32;n++)for(let i=0;i<32;i++){let r=t(),a=Ee(e,(t()-.5)*12);r<.15?a=[88,86,66]:r<.22&&(a=Xe(e,1.15)),s.set(n,i,a)}return Ye(s)})}function oc(s=[150,44,34]){return He("wood"+s,()=>{let t=qe(16,16),e=Ne(17);for(let n=0;n<16;n++){let i=(e()-.5)*16;for(let r=0;r<16;r++){let a=Ee(s,i+(e()-.5)*6);n%5===0&&e()<.6&&(a=Xe(s,.84)),t.set(n,r,a)}}return Ye(t)})}function fu(){return oc([92,60,40])}function pu(s=[84,90,98]){return He("roof"+s,()=>{let t=qe(32,32),e=Ne(19);for(let n=0;n<32;n++)for(let i=0;i<32;i++){let r=n%4,a;r===0?a=Xe(s,.62):r===1?a=Xe(s,1):r===2?a=Xe(s,1.22):a=Xe(s,1.06),i%8===7?a=Xe(a,.78):i%8===0&&r!==0&&(a=Xe(a,1.08)),a=Ee(a,(e()-.5)*6),t.set(n,i,a)}return Ye(t)})}function yo(){return He("dancheong",()=>{let s=qe(64,16),t=[46,122,98],e=[34,92,76],n=[44,82,150],i=[176,52,44],r=[236,228,206],a=[226,182,64];for(let o=0;o<64;o++)for(let l=0;l<16;l++){let c=t;l===0||l===15?c=i:l===1||l===14?c=r:(l===2||l===13)&&(c=e),s.set(o,l,c)}for(let o=0;o<4;o++){let l=o*16+8,c=8;for(let h=-5;h<=5;h++)for(let d=-4;d<=4;d++){let u=Math.abs(h)/5+Math.abs(d)/4;u<=1&&s.set(l+h,c+d,u>.75?r:u>.5?n:u>.25?i:a)}for(let h=3;h<=12;h++)s.set(o*16,h,r),s.set(o*16+1,h,n)}return Ye(s)})}function lc(s=!1){return He("lattice"+s,()=>{let t=qe(32,48),e=s?[0,0,0]:[44,104,84],n=s?[0,0,0]:[30,70,58],i=s?[255,214,150]:[226,216,186],r=s?[220,170,110]:[204,192,160];for(let a=0;a<32;a++)for(let o=0;o<48;o++){let l=i;o>36&&(l=s?[0,0,0]:[120,60,44]),o===36&&(l=n);let c=a%5,h=o%6;o<36&&(c===0||h===0)&&(l=e),o<36&&c===4&&(l=Ng(l,r,s?.3:.5)),(a<2||a>29||o<2||o>45)&&(l=n),t.set(a,o,l)}return Ye(t,{repeat:!1})})}function mu(){return He("plaster",()=>{let s=qe(32,32),t=Ne(23);for(let e=0;e<32;e++)for(let n=0;n<32;n++){let i=Ee([226,220,204],(t()-.5)*8);n>24&&(i=Ee([150,140,124],(t()-.5)*12)),(n===24||n===2||e===0||e===31)&&(i=[156,52,40]),s.set(e,n,i)}return Ye(s)})}function gu(s){return He("banner"+s,()=>{let n=document.createElement("canvas");n.width=32,n.height=40;let i=n.getContext("2d"),r,a,o,l,c;if(s==="red"?(r="#b8302a",a="#e8b030",o="#f0c040",l="\u4EE4",c="#7a1c18"):s==="white"?(r="#ece6d4",a="#e0a828",o="#1a1a1a",l="\u9F8D",c="#ece6d4"):(r="#23305e",a="#c8342c",o="#e8e0d0",l="\u6B66",c="#23305e"),i.fillStyle=a,i.fillRect(0,0,32,40),i.fillStyle=r,i.fillRect(3,3,26,34),s==="white"){i.fillStyle="#c03028";for(let h=0;h<40;h+=4)i.fillRect(29,h,3,2),i.fillRect(0,h+2,2,2);for(let h=0;h<32;h+=4)i.fillRect(h,37,2,3)}else s==="red"&&(i.fillStyle=c,i.fillRect(6,6,20,28),i.fillStyle=a,i.fillRect(6,6,20,1),i.fillRect(6,33,20,1),i.fillRect(6,6,1,28),i.fillRect(25,6,1,28));return i.fillStyle=o,i.font='bold 20px "Noto Serif CJK KR","Noto Sans CJK KR","Malgun Gothic","Apple SD Gothic Neo",serif',i.textAlign="center",i.textBaseline="middle",i.fillText(l,32/2,40/2+1),Ug(i,32,40,[r,a,o,c,"#c03028"]),cu(n,{repeat:!1})})}function Ug(s,t,e,n){let i=n.map(o=>[parseInt(o.slice(1,3),16),parseInt(o.slice(3,5),16),parseInt(o.slice(5,7),16)]),r=s.getImageData(0,0,t,e),a=r.data;for(let o=0;o<a.length;o+=4){let l=i[0],c=1e9;for(let h of i){let d=(a[o]-h[0])**2+(a[o+1]-h[1])**2+(a[o+2]-h[2])**2;d<c&&(c=d,l=h)}a[o]=l[0],a[o+1]=l[1],a[o+2]=l[2],a[o+3]=255}s.putImageData(r,0,0)}function xu(){return He("drumside",()=>{let s=qe(64,32),t=Ne(29),e=[40,92,150];for(let n=0;n<64;n++)for(let i=0;i<32;i++){let r=Ee(e,(t()-.5)*8),a=Math.sin(n*.4+Math.sin(i*.35)*2.2)+Math.sin(i*.5+n*.12);a>1.35?r=[196,62,50]:a>1.1?r=[236,220,180]:a<-1.45&&(r=[70,150,110]),(i<3||i>28)&&(r=[180,48,40]),(i===3||i===28)&&(r=[226,186,70]),s.set(n,i,r)}return Ye(s)})}function _u(){return He("drumface",()=>{let s=qe(32,32),t=[[196,52,44],[40,80,160],[228,186,60]];for(let e=0;e<32;e++)for(let n=0;n<32;n++){let i=e-15.5,r=n-15.5,a=Math.hypot(i,r),o=[222,206,170];if(a>14.5)o=[120,70,40];else if(a>13.5)o=[226,186,70];else if(a<8){let l=Math.atan2(r,i)+a*.22,c=Math.floor((l/(Math.PI*2)%1+1)%1*3);o=t[c]}s.set(e,n,o)}return Ye(s,{repeat:!1})})}function yu(){return He("medallion",()=>{let s=qe(64,64),t=Ne(37),e=[170,164,148];for(let n=0;n<64;n++)for(let i=0;i<64;i++){let r=n-31.5,a=i-31.5,o=Ee(e,(t()-.5)*10),l=Math.abs(r)+Math.abs(a),c=Math.max(Math.abs(r),Math.abs(a)),h=Math.hypot(r,a),d=Math.atan2(a,r),u=Xe(e,.68),f=Ee(e,18);c>30?o=u:c>29&&(o=f),Math.abs(l-29)<.8&&(o=u),Math.abs(l-27)<.8&&(o=f);let m=9+5*Math.abs(Math.cos(d*4));Math.abs(h-m)<.8&&(o=u),h<m-.8&&h>m-2&&(o=f),h<4&&(o=Math.abs(h-3)<.8?u:Ee(e,8)),Math.abs(h-19)<.7&&Math.abs(Math.sin(d*8))>.4&&(o=u),s.set(n,i,o)}return Ye(s,{repeat:!1})})}function vu(){return He("carving",()=>{let s=qe(16,32),t=[178,170,152];for(let e=0;e<16;e++)for(let n=0;n<32;n++){let i=t;e===0||e===15||n===0||n===31?i=Xe(t,.65):(e===1||n===1)&&(i=Ee(t,16));let r=e-7.5,a=n-15.5,o=Math.sin(r*.9)*3+Math.cos(a*.5)*2;Math.abs(r)<5&&Math.abs(a)<12&&Math.abs(o)<.6&&(i=Xe(t,.7)),s.set(e,n,i)}return Ye(s,{repeat:!1})})}function Mu(){return He("bark",()=>{let s=qe(16,16),t=Ne(41);for(let e=0;e<16;e++)for(let n=0;n<16;n++){let i=Ee([104,78,62],(t()-.5)*16);(n+Math.floor(e/4)*3)%5===0&&(i=[70,52,42]),t()<.08&&(i=[132,102,80]),s.set(e,n,i)}return Ye(s)})}function Su(){return He("tiger",()=>{let s=qe(16,16);for(let t=0;t<16;t++)for(let e=0;e<16;e++){let n=[226,142,48];Math.sin(t*1.1+Math.sin(e*.7)*1.5)>.55&&(n=[40,28,24]),s.set(t,e,n)}return Ye(s)})}function bu(){return He("cloud",()=>{let t=qe(128,128),e=Ne(53),n=[[4,.5],[8,.27],[16,.15],[32,.08]],i=n.map(([a])=>Array.from({length:a*a},()=>e())),r=a=>a*a*(3-2*a);for(let a=0;a<128;a++)for(let o=0;o<128;o++){let l=0;n.forEach(([h,d],u)=>{let f=a/128*h,m=o/128*h,v=Math.floor(f),g=Math.floor(m),p=r(f-v),S=r(m-g),R=i[u],y=(T,x)=>R[x%h*h+T%h],E=y(v,g)+(y(v+1,g)-y(v,g))*p,b=y(v,g+1)+(y(v+1,g+1)-y(v,g+1))*p;l+=(E+(b-E)*S)*d});let c=Math.max(0,Math.min(255,l*255));t.set(a,o,[c,c,c])}return Ye(t,{linear:!0})})}var Mn={time:{value:0},player:{value:new I(0,-100,0)},night:{value:0}},Es=null;function Bg(){if(!Es){let s=new Uint8Array([78,78,78,255,150,150,150,255,212,212,212,255,255,255,255,255]);Es=new Ai(s,4,1,cn),Es.magFilter=Es.minFilter=ue,Es.needsUpdate=!0}return Es}function kt(s={}){return new Js({gradientMap:Bg(),...s})}function cc(s,{local:t="",world:e=""},n){s.onBeforeCompile=i=>{i.uniforms.uTime=Mn.time,i.uniforms.uPlayer=Mn.player;let r=`uniform float uTime;
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
        gl_Position = projectionMatrix * mvPosition;`)),i.vertexShader=r},s.customProgramCacheKey=()=>n}var hc=new Map;function vo(s,t,{shadow:e=!0}={}){let n="anim:"+(t.local||"")+"|"+(t.world||"");if(cc(s.material,t,n),e){let a=new us({depthPacking:Cl});cc(a,t,n+":depth"),s.customDepthMaterial=a}let i=s.material.side,r=n+i;if(!hc.has(r)){let a=new hi({side:i});cc(a,t,n+":normal"),hc.set(r,a)}return s.userData.nmat=hc.get(r),s}var Mo={flag:{local:`
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
      wPos.y -= push * h * 0.5;`}};var mr=16,Og=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,zg=`
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
}`,So=class{constructor(t){this.container=t,this.canvas=document.createElement("canvas"),this.canvas.className="view",t.appendChild(this.canvas);let e=this.renderer=new go({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.shadowMap.enabled=!0,e.shadowMap.type=Ci,e.shadowMap.autoUpdate=!1,e.outputColorSpace=wi,this.pixelSize=3,this.userZoom=0,this.colorTarget=null,this.normalTarget=null,this.normalFront=new hi,this.normalDouble=new hi({side:De}),this.compMat=new Te({vertexShader:Og,fragmentShader:zg,uniforms:{tColor:{value:null},tNormal:{value:null},tDepth:{value:null},tCloud:{value:bu()},res:{value:new Bt(1,1)},cNear:{value:1},cFar:{value:100},invViewProj:{value:new Jt},time:Mn.time,night:Mn.night,outline:{value:1},flash:{value:0},flashColor:{value:new St(1,1,1)},vignette:{value:.55}},depthTest:!1,depthWrite:!1}),this.compScene=new Ti,this.compCam=new Kn(-1,1,1,-1,0,1);let n=new Pt(new fn(2,2),this.compMat);n.frustumCulled=!1,this.compScene.add(n),this.camera=new Kn(-1,1,1,-1,1,160),this.pitch=Dl.degToRad(45),this.camDist=70,this.shift={x:0,y:0},this.resize(),window.addEventListener("resize",()=>this.resize())}autoPixelSize(){return Math.max(2,Math.round(window.innerHeight/250))+this.userZoom}zoom(t){let e=Math.max(2,Math.round(window.innerHeight/250)),n=Math.min(Math.max(e+this.userZoom+t,2),e+3);this.userZoom=n-e,this.resize()}resize(){let t=this.pixelSize=Math.max(2,this.autoPixelSize()),e=this.W=Math.ceil(window.innerWidth/t),n=this.H=Math.ceil(window.innerHeight/t),i=this.RW=e+2,r=this.RH=n+2;this.renderer.setSize(i,r,!1),Object.assign(this.canvas.style,{width:i*t+"px",height:r*t+"px"});let a={minFilter:ue,magFilter:ue,type:gn};this.colorTarget?.dispose(),this.normalTarget?.dispose(),this.colorTarget=new Ge(i,r,a),this.normalTarget=new Ge(i,r,{minFilter:ue,magFilter:ue}),this.normalTarget.depthTexture=new kn(i,r),this.normalTarget.depthTexture.type=mn,this.compMat.uniforms.res.value.set(i,r);let o=this.camera;o.left=-i/mr/2,o.right=i/mr/2,o.top=r/mr/2,o.bottom=-r/mr/2,o.updateProjectionMatrix()}project(t,e={x:0,y:0}){let n=uc.copy(t).project(this.camera),i=this.pixelSize;return e.x=(n.x*.5+.5)*this.RW*i-i+this.shift.x,e.y=(-n.y*.5+.5)*this.RH*i-i+this.shift.y,e.z=n.z,e}unproject(t,e,n=0){let i=this.pixelSize,r=(t+i-this.shift.x)/(this.RW*i)*2-1,a=-((e+i-this.shift.y)/(this.RH*i)*2-1),o=uc.set(r,a,-1).unproject(this.camera),c=kg.set(r,a,1).unproject(this.camera).sub(o),h=(n-o.y)/c.y;return new I(o.x+c.x*h,n,o.z+c.z*h)}setFocus(t){let e=this.camera,n=this.pitch,i=uc.set(0,Math.sin(n),Math.cos(n)).multiplyScalar(this.camDist);e.position.copy(t).add(i),e.up.set(0,1,0),e.lookAt(t),e.updateMatrixWorld();let r=Hg.setFromMatrixColumn(e.matrixWorld,0),a=Vg.setFromMatrixColumn(e.matrixWorld,1),o=1/mr,l=e.position.dot(r),c=e.position.dot(a),h=Math.round(l/o)*o,d=Math.round(c/o)*o;e.position.addScaledVector(r,h-l).addScaledVector(a,d-c),e.updateMatrixWorld();let u=(l-h)/o,f=(c-d)/o,m=this.pixelSize;this.shift.x=-u*m,this.shift.y=f*m,this.canvas.style.transform=`translate(${(-m+this.shift.x).toFixed(2)}px, ${(-m+this.shift.y).toFixed(2)}px)`}render(t){let e=this.renderer,n=this.camera,i=[],r=[];t.traverseVisible(l=>{if(l.isMesh||l.isPoints||l.isLine||l.isSprite)if(l.userData.noOutline||l.isPoints||l.isSprite||l.isLine||l.material&&l.material.transparent)r.push(l);else{i.push(l,l.material);let c=l.userData.nmat||(Array.isArray(l.material)?l.material[0].side===De?this.normalDouble:this.normalFront:l.material.side===De?this.normalDouble:this.normalFront);l.material=c}});for(let l of r)l.visible=!1;let a=t.background;t.background=null,e.setRenderTarget(this.normalTarget),e.setClearColor(8421631,1),e.clear(),e.render(t,n);for(let l=0;l<i.length;l+=2)i[l].material=i[l+1];for(let l of r)l.visible=!0;t.background=a,e.shadowMap.needsUpdate=!0,e.setRenderTarget(this.colorTarget),e.render(t,n);let o=this.compMat.uniforms;o.tColor.value=this.colorTarget.texture,o.tNormal.value=this.normalTarget.texture,o.tDepth.value=this.normalTarget.depthTexture,o.cNear.value=n.near,o.cFar.value=n.far,o.invViewProj.value.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).invert(),e.setRenderTarget(null),e.render(this.compScene,this.compCam)}},uc=new I,kg=new I,Hg=new I,Vg=new I;function wu(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ce,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Eu(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let m=Eu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Eu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ie(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let v=h.getComponent(u,m);o.setComponent(u+d,m,v)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function Tt(s,t,e,n=4){let i=new ee(s,t,e),r=i.attributes.uv,a=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/n,r.getY(c)*a[o][1]/n)}return i}function Sn(s,t,e,n=12,i=0,r=0){let a=new be(s,t,e,n);if(i){let o=a.attributes.uv;for(let l=0;l<o.count;l++)o.setXY(l,o.getX(l)*i,o.getY(l)*r)}return a}var gr=class{constructor(){this.groups=new Map}add(t,e,n){let i=t.index?t.toNonIndexed():t.clone();i.attributes.uv||i.setAttribute("uv",new Lt(new Float32Array(i.attributes.position.count*2),2));for(let r of Object.keys(i.attributes))["position","normal","uv"].includes(r)||i.deleteAttribute(r);i.applyMatrix4(n),this.groups.has(e)||this.groups.set(e,[]),this.groups.get(e).push(i)}put(t,e,n,i,r,a=0,o=0,l=0,c=1){Tu.compose(Gg.set(n,i,r),Wg.setFromEuler(Xg.set(o,a,l,"YXZ")),qg.set(c,c,c)),this.add(t,e,Tu)}build(t,{cast:e=!0,receive:n=!0}={}){let i=[];for(let[r,a]of this.groups){let o=wu(a,!1),l=new Pt(o,r);l.castShadow=e,l.receiveShadow=n,t.add(l),i.push(l)}return this.groups.clear(),i}},Tu=new Jt,Gg=new I,Wg=new Fe,Xg=new on,qg=new I;function Au({w:s,d:t,h:e,overhang:n=2,lift:i=.7,power:r=1.7,seg:a=28,thick:o=.28,tile:l=2}){let c=s+n*2,h=t+n*2,d=Math.min(c,h)/2,u=(W,k)=>{let $=c/2-Math.abs(W),Q=h/2-Math.abs(k),xt=Math.max(0,Math.min($,Q)),_t=Math.min(1,xt/d),Vt=e*Math.pow(_t,r),Ot=Math.min(1,Math.abs(W)/(c/2)),Xt=Math.min(1,Math.abs(k)/(h/2));return Vt+=i*Math.pow(Ot*Xt,2.2),Vt},f=a,m=Math.max(6,Math.round(a*h/c)),v=[],g=[],p=[],S=[],R=[],y=[],E=.05,b=(W,k)=>{let $=(u(W+E,k)-u(W-E,k))/(2*E),Q=(u(W,k+E)-u(W,k-E))/(2*E);return new I(-$,1,-Q).normalize()},T=W=>-c/2+c*W/f,x=W=>-h/2+h*W/m,w=(W,k,$)=>{let Q=(W[0]+k[0]+$[0])/3,xt=(W[1]+k[1]+$[1])/3,_t=c/2-Math.abs(Q)>h/2-Math.abs(xt);for(let[Vt,Ot]of[W,k,$]){let Xt=u(Vt,Ot),Y=b(Vt,Ot);v.push(Vt,Xt,Ot),g.push(Y.x,Y.y,Y.z),_t?p.push(Vt/l,(h/2-Math.abs(Ot))/l):p.push(Ot/l,(c/2-Math.abs(Vt))/l)}for(let[Vt,Ot]of[W,$,k]){let Xt=u(Vt,Ot)-o;S.push(Vt,Xt,Ot),R.push(0,-1,0),y.push(Vt/2,Ot/2)}};for(let W=0;W<f;W++)for(let k=0;k<m;k++){let $=[T(W),x(k)],Q=[T(W+1),x(k)],xt=[T(W+1),x(k+1)],_t=[T(W),x(k+1)];(T(W)+T(W+1))*(x(k)+x(k+1))>0?(w($,_t,Q),w(Q,_t,xt)):(w($,_t,xt),w($,xt,Q))}let C=new ce;C.setAttribute("position",new Lt(v,3)),C.setAttribute("normal",new Lt(g,3)),C.setAttribute("uv",new Lt(p,2));let P=new ce;P.setAttribute("position",new Lt(S,3)),P.setAttribute("normal",new Lt(R,3)),P.setAttribute("uv",new Lt(y,2));let D=[],B=[],L=[],z=[];for(let W=0;W<=f;W++)z.push([T(W),-h/2,0,0,-1]);for(let W=1;W<=m;W++)z.push([c/2,x(W),1,0,0]);for(let W=f-1;W>=0;W--)z.push([T(W),h/2,0,0,1]);for(let W=m-1;W>=0;W--)z.push([-c/2,x(W),-1,0,0]);let q=0;for(let W=0;W<z.length-1;W++){let[k,$]=z[W],[Q,xt,_t,,Vt]=z[W+1],Ot=u(k,$),Xt=u(Q,xt),Y=Math.hypot(Q-k,xt-$),et=[[k,Ot,$,q,1],[Q,Xt,xt,q+Y,1],[Q,Xt-o,xt,q+Y,0],[k,Ot-o,$,q,0]];for(let yt of[0,2,1,0,3,2]){let Ut=et[yt];D.push(Ut[0],Ut[1],Ut[2]),B.push(_t,0,Vt),L.push(Ut[3]/4,Ut[4]*.25)}q+=Y}let Z=new ce;return Z.setAttribute("position",new Lt(D,3)),Z.setAttribute("normal",new Lt(B,3)),Z.setAttribute("uv",new Lt(L,2)),{top:C,under:P,fascia:Z,height:u,W:c,D:h}}function bo(s,t=12){return new Ys(s.map(([e,n])=>new Bt(e,n)),t)}var Eo=class{constructor(t){this.scene=t,this.root=new le,t.add(this.root),this.rects=[],this.ramps=[],this.blockRects=[],this.circles=[],this.lanterns=[],this.glowMats=[],this.drums=[],this.windows=[],this.spawnPoints=[],this.makeMaterials(),this.build()}makeMaterials(){let t=e=>new St(e);this.M={floor:kt({map:rc()}),slab:kt({map:rc(9,[186,178,160],25)}),path:kt({map:hu()}),block:kt({map:ac()}),blockDark:kt({map:ac([140,134,120])}),grass:kt({map:uu()}),dirt:kt({map:du()}),wood:kt({map:oc()}),darkWood:kt({map:fu()}),roof:kt({map:pu()}),roofUnder:kt({map:yo()}),fascia:kt({map:yo(),side:De}),ridge:kt({color:t("#3b4048")}),mortar:kt({color:t("#e2dccb")}),dancheong:kt({map:yo()}),plaster:kt({map:mu()}),bark:kt({map:Mu()}),leaf:kt({color:t("#3f6e3e")}),leaf2:kt({color:t("#5f924a")}),bronze:kt({color:t("#6e5a3e")}),bronzeDark:kt({color:t("#3c3226")}),gold:kt({color:t("#d9a83a")}),black:kt({color:t("#2a2624")}),stoneLight:kt({color:t("#bdb5a2")}),stoneGrey:kt({color:t("#a29c8e")}),pot:kt({color:t("#c9b48e")}),lotus:kt({color:t("#4e8a4a")}),pink:kt({color:t("#e889a6")}),orange:kt({color:t("#e88a3a")}),blue:kt({color:t("#2f5aa8")}),red:kt({color:t("#b23a2e")}),drumSide:kt({map:xu()}),drumFace:kt({map:_u()}),medallion:kt({map:yu(),polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),carving:kt({map:vu()}),lattice:kt({map:lc(),emissiveMap:lc(!0),emissive:t("#000000")}),lampGlow:kt({color:t("#f3e2b8"),emissive:t("#000000")})},this.glowMats.push({mat:this.M.lattice,color:new St("#ffb060"),k:1.1}),this.glowMats.push({mat:this.M.lampGlow,color:new St("#ffc070"),k:1.6})}heightAt(t,e){let n=0;for(let i of this.rects)t>=i.x0&&t<=i.x1&&e>=i.z0&&e<=i.z1&&i.h>n&&(n=i.h);for(let i of this.ramps)if(t>=i.x0&&t<=i.x1&&e>=i.z0&&e<=i.z1){let r=(e-i.z0)/(i.z1-i.z0),a=i.h0+(i.h1-i.h0)*r;a>n&&(n=a)}return n}isBlocked(t,e,n,i){if(t<-21.6+n||t>21.6-n||e<-33.3+n||e>21.2-n&&(t<-3.2+n||t>3.2-n)||e>30)return!0;for(let o of this.blockRects)if(t>o.x0-n&&t<o.x1+n&&e>o.z0-n&&e<o.z1+n)return!0;for(let o of this.circles){let l=t-o.x,c=e-o.z,h=o.r+n;if(l*l+c*c<h*h&&Math.abs((o.y||0)-i)<1.5)return!0}let r=this.heightAt(t,e);if(Math.abs(r-i)>.45)return!0;let a=n*.8;for(let[o,l]of Yg)if(Math.abs(this.heightAt(t+o*a,e+l*a)-r)>.45)return!0;return!1}move(t,e,n,i){let r=Math.hypot(e,n),a=Math.max(1,Math.ceil(r/.15)),o=e/a,l=n/a,c=!1;for(let h=0;h<a;h++){let d=this.heightAt(t.x,t.z);if(!this.isBlocked(t.x+o,t.z+l,i,d))t.x+=o,t.z+=l,c=!0;else if(o&&!this.isBlocked(t.x+o,t.z,i,d))t.x+=o,c=!0;else if(l&&!this.isBlocked(t.x,t.z+l,i,d))t.z+=l,c=!0;else break}return c}randomWalkable(t,e,n,i,r=30){for(let a=0;a<r;a++){let o=Math.random()*Math.PI*2,l=n+Math.random()*(i-n),c=t+Math.cos(o)*l,h=e+Math.sin(o)*l,d=this.heightAt(c,h);if(!this.isBlocked(c,h,.5,d)&&h<20)return new I(c,d,h)}return null}build(){let t=this.M,e=this.batch=new gr,n=Ne(77);this.foliage=new gr;let i=new Pt(new fn(160,160),t.dirt);i.geometry.attributes.uv.array.forEach((l,c,h)=>h[c]=l*80),i.rotation.x=-Math.PI/2,i.position.y=-.02,i.receiveShadow=!0,this.root.add(i);let r=new fn(48,58);r.attributes.uv.array.forEach((l,c,h)=>h[c]=l*(c%2===0?12:14.5));let a=new Pt(r,t.floor);a.rotation.x=-Math.PI/2,a.position.set(0,0,-6),a.receiveShadow=!0,this.root.add(a),e.add(Tt(5.2,.12,24.6,4),t.path,rt(0,.06,8.7)),this.rects.push({x0:-2.6,x1:2.6,z0:-3.6,z1:21,h:.12}),e.add(Tt(5.2,.08,10,4),t.path,rt(0,.04,27)),this.rects.push({x0:-2.6,x1:2.6,z0:21,z1:32,h:.08}),this.terrace(-15,15,-14,-6,.9),this.terrace(-12,12,-22,-14,1.8),this.stairs(-6,-3.6,.9,0),this.stairs(-14,-11.6,1.8,.9),this.balustrade(-15,-6,-2.9,-6,.9),this.balustrade(2.9,-6,15,-6,.9),this.balustrade(-15,-14,-15,-6,.9),this.balustrade(15,-14,15,-6,.9),this.balustrade(-12,-14,-2.9,-14,1.8),this.balustrade(2.9,-14,12,-14,1.8),this.balustrade(-12,-22,-12,-14,1.8),this.balustrade(12,-22,12,-14,1.8);for(let l of[-1,1])this.haetae(l*3.3,.9,-6.5,l),this.haetae(l*3.3,1.8,-14.5,l);this.hall();for(let l of[-1,1])this.cauldron(l*6.2,.9,-8.2);for(let l of[-1,1])this.cauldron(l*10.5,1.8,-15.2);for(let l of[-1,1])this.flag(l*4.6,1.8,-15.3,"red",l),this.flag(l*4.6,.9,-8.6,"white",l),this.flag(l*4.8,0,1.2,"red",l),this.flag(l*4.8,0,9.5,"white",l),this.flag(l*19.5,0,-24,"navy",l),this.flag(l*20,0,-11,"navy",l),this.flag(l*20,0,18,"navy",l);for(let l of[-1,1])this.drum(l*10.5,4.2,l);for(let l of[-1,1]){let c=new Pt(new fn(6,6),t.medallion);c.rotation.x=-Math.PI/2,c.position.set(l*17,.012,4.2),c.receiveShadow=!0,this.root.add(c)}this.planter(-14.6,-6,-5.6,-1.4),this.planter(6,14.6,-5.6,-1.4),this.planter(-14,-7.4,9.2,14.2),this.planter(7.4,14,9.2,14.2),this.pine(-11.2,.3,-3.6,1.15,3),this.pine(11.4,.3,-3.4,1.1,4),this.pine(-10.6,.3,11.8,.85,5),this.pine(10.8,.3,11.6,.8,6),this.shrub(-7.4,.3,-2.6),this.shrub(7.6,.3,-2.4),this.shrub(-13.2,.3,-2.2),this.shrub(13,.3,-4.6),this.shrub(-8.4,.3,13.1),this.shrub(8.6,.3,10.2);for(let[l,c,h,d]of[[-16,-28,1.2,11],[15,-27,1.3,12],[-5,-30,1,13],[6,-31,.95,14],[17.5,-18.5,.9,15],[-17.5,-18,.95,16]])this.pine(l,0,c,h,d);for(let[l,c,h,d]of[[-12,27,1.2,21],[11,28,1.3,22],[-22,30,1,23],[24,31,1.1,24],[-7,33,.9,25],[7,35,1,26],[-30,10,1.3,27],[31,-5,1.2,28],[-31,-20,1.2,29],[30,15,1.1,30]])this.pine(l,0,c,h,d,!1);for(let l of[-1,1])this.flowerPot(l*3.7,4.6),this.flowerPot(l*3.7,13.4),this.flowerPot(l*3.7,-1.6);for(let l of[-1,1])this.stoneLantern(l*7.6,0,17.2),this.stoneLantern(l*16.5,0,-2.2),this.stoneLantern(l*16.5,0,12),this.stoneLantern(l*10.9,1.8,-21),this.stoneLantern(l*13.6,.9,-7);this.stoneLantern(-11,0,-26),this.stoneLantern(11,0,-24),this.pond(-21,-15,-31.2,-24.6),this.corridor(-1),this.corridor(1),this.northWall(),this.southWall(),this.scatterGrass(),e.build(this.root);let o=this.foliage.build(this.root);for(let l of o)vo(l,Mo.foliage);this.spawnPoints.push(new I(0,0,25),new I(-1.5,0,26),new I(1.5,0,26))}terrace(t,e,n,i,r){let a=this.M,o=this.batch,l=e-t,c=i-n,h=Tt(l,r,c,2),d=Tt(l,.001,c,4);o.add(h,a.block,rt((t+e)/2,r/2,(n+i)/2)),o.add(d,a.slab,rt((t+e)/2,r+.001,(n+i)/2)),o.add(Tt(l+.3,.14,.4,2),a.stoneLight,rt((t+e)/2,r-.05,i+.05)),this.rects.push({x0:t,x1:e,z0:n,z1:i,h:r})}stairs(t,e,n,i){let r=this.M,a=this.batch,o=6,l=(e-t)/o,c=(n-i)/o;for(let g=0;g<o;g++){let p=n-c*(g+1)+c,S=t+l*(g+.5),R=i-.2,y=Tt(5.2,p-R,l,2);a.add(y,g%2?r.stoneLight:r.stoneGrey,rt(0,(p+R)/2,S))}let h=Math.hypot(e-t,n-i),d=Math.atan2(n-i,e-t),u=(t+e)/2,f=(n+i)/2,m=Tt(1.4,.12,h,2),v=m.attributes.uv;for(let g=8;g<12;g++)v.setXY(g,g%2,g<10?1:0);a.add(m,r.carving,rt(0,f+.06,u,0,d));for(let g of[-1,1])a.add(Tt(.45,.4,h+.2,2),r.stoneLight,rt(g*2.82,f+.12,u,0,d));this.ramps.push({x0:-2.6,x1:2.6,z0:t,z1:e,h0:n,h1:i})}balustrade(t,e,n,i,r){let a=this.M,o=this.batch,l=Math.hypot(n-t,i-e),c=Math.atan2(-(i-e),n-t),h=Math.max(1,Math.round(l/1.6));for(let f=0;f<=h;f++){let m=f/h,v=t+(n-t)*m,g=e+(i-e)*m;o.add(Tt(.24,.62,.24,2),a.stoneLight,rt(v,r+.31,g)),o.add(Tt(.3,.1,.3,2),a.stoneGrey,rt(v,r+.65,g))}let d=(t+n)/2,u=(e+i)/2;o.add(Tt(l,.08,.12,2),a.stoneLight,rt(d,r+.5,u,c)),o.add(Tt(l,.18,.08,2),a.stoneGrey,rt(d,r+.14,u,c))}haetae(t,e,n,i){let r=this.M,a=this.batch;a.add(Tt(.7,.3,.9,2),r.stoneGrey,rt(t,e+.15,n)),a.add(new ye(.32,8,6),r.stoneLight,rt(t,e+.6,n,0,0,0,[1,.9,1.25])),a.add(new ye(.27,8,6),r.stoneLight,rt(t,e+.95,n+.25)),a.add(new ye(.12,6,4),r.stoneGrey,rt(t-.12,e+1.15,n+.2)),a.add(new ye(.12,6,4),r.stoneGrey,rt(t+.12,e+1.15,n+.2)),a.add(Tt(.12,.3,.12,2),r.stoneLight,rt(t-.15,e+.45,n+.3)),a.add(Tt(.12,.3,.12,2),r.stoneLight,rt(t+.15,e+.45,n+.3)),this.circles.push({x:t,z:n,r:.45,y:e})}hall(){let t=this.M,e=this.batch,n=2.1,i=-18.5;e.add(Tt(19.4,.3,6.2,2),t.block,rt(0,1.95,i)),e.add(Tt(19.6,.06,6.4,2),t.stoneLight,rt(0,2.1,i)),this.blockRects.push({x0:-9.7,x1:9.7,z0:-21.6,z1:-15.4}),e.add(Tt(17.6,3.5,4.6,2),t.darkWood,rt(0,n+1.75,i));let r=Sn(.24,.27,3.6,10,1,1);for(let a=0;a<=6;a++){let o=-9+a*3;e.add(r,t.wood,rt(o,n+1.8,-16)),e.add(r,t.wood,rt(o,n+1.8,-21)),e.add(Sn(.36,.38,.14,10),t.stoneLight,rt(o,n+.07,-16))}for(let a of[-1,1])e.add(r,t.wood,rt(a*9,n+1.8,-18.5));for(let a=0;a<6;a++){let o=-7.5+a*3;for(let l of[-.62,.62])e.add(new ee(1.22,3.3,.08),t.lattice,rt(o+l,n+1.68,-16.18));e.add(Tt(2.76,.12,.14,2),t.wood,rt(o,n+3.38,-16.15)),e.add(Tt(2.76,.1,.14,2),t.wood,rt(o,n+.05,-16.15))}for(let a of[-1,1])for(let o of[-17.25,-19.75])e.add(new ee(.08,3.3,2.3),t.lattice,rt(a*8.85,n+1.68,o));this.hallLightPos=[new I(-4.5,3.8,-15),new I(4.5,3.8,-15)],e.add(Tt(18.8,.42,5.8,4),t.dancheong,rt(0,5.9,i)),e.add(Tt(19.6,.4,6.6,4),t.dancheong,rt(0,6.3,i));for(let a=0;a<=24;a++){let o=-9.6+a*.8;for(let l of[-15.1,-21.9])e.add(Tt(.3,.26,.6,1),a%2?t.dancheong:t.red,rt(o,6.58,l))}for(let a=0;a<=8;a++)for(let o of[-1,1])e.add(Tt(.6,.26,.3,1),a%2?t.dancheong:t.red,rt(o*9.95,6.58,-21.7+a*.8));this.roof({cx:0,cy:6.72,cz:i,w:19.6,d:6.4,h:1.5,overhang:1.5,lift:.7,ridge:!1}),e.add(Tt(13.2,2.1,2.9,2),t.darkWood,rt(0,8.35,i));for(let a=0;a<6;a++){let o=-5.5+a*2.2;e.add(new ee(1.7,1.25,.06),t.lattice,rt(o,8.55,i+1.48))}for(let a=0;a<=6;a++)e.add(Sn(.17,.17,2.1,8),t.wood,rt(-6.6+a*2.2,8.35,i+1.5));e.add(Tt(14,.4,3.6,4),t.dancheong,rt(0,9.55,i)),this.roof({cx:0,cy:9.8,cz:i,w:14,d:3.6,h:2.4,overhang:1.9,lift:.85,ridge:!0})}roof({cx:t,cy:e,cz:n,w:i,d:r,h:a,overhang:o,lift:l,ridge:c,power:h=1.7,tile:d=2,rot:u=0}){let f=this.M,m=Au({w:i,d:r,h:a,overhang:o,lift:l,power:h,tile:d}),v=new le;v.position.set(t,e,n),v.rotation.y=u;let g=new Pt(m.top,f.roof),p=new Pt(m.under,f.roofUnder),S=new Pt(m.fascia,f.fascia);for(let b of[g,p,S])b.castShadow=!0,b.receiveShadow=!0,v.add(b);let R=m.W,y=m.D,E=Math.max(.5,R-y);if(c){let b=new Pt(Tt(E+.6,.5,.5,2),f.ridge);b.position.set(0,a+.2,0);let T=new Pt(Tt(E+.3,.2,.56,2),f.mortar);T.position.set(0,a+.05,0),v.add(b,T);for(let x of[-1,1]){let w=new Pt(Tt(.5,.8,.6,1),f.ridge);w.position.set(x*(E/2+.3),a+.45,0),w.rotation.z=x*.15,v.add(w)}}for(let b of[-1,1])for(let T of[-1,1]){let x=new I(b*E/2,0,0),w=new I(b*R/2,0,T*y/2),C=7,P=null;for(let D=0;D<=C;D++){let B=.02+D/C*.96,L=x.x+(w.x-x.x)*B,z=x.z+(w.z-x.z)*B,q=new I(L,m.height(L,z)+.12,z);if(P){let Z=P.clone().add(q).multiplyScalar(.5),W=P.distanceTo(q),k=new Pt(Tt(.32,.26,W+.08,1),f.ridge);k.position.copy(Z),k.quaternion.setFromUnitVectors(new I(0,0,1),q.clone().sub(P).normalize()),k.castShadow=!0,v.add(k)}P=q}for(let D=0;D<3;D++){let B=.62+D*.1,L=x.x+(w.x-x.x)*B,z=x.z+(w.z-x.z)*B,q=new Pt(new ee(.16,.24,.16),f.ridge);q.position.set(L,m.height(L,z)+.36,z),v.add(q)}}return this.root.add(v),{group:v,r:m}}cauldron(t,e,n){let i=this.M,r=this.batch;r.add(Tt(1.2,.2,1.2,2),i.stoneGrey,rt(t,e+.1,n));let a=bo([[0,0],[.42,.02],[.58,.25],[.62,.55],[.56,.72],[.62,.78],[.5,.78]],12);r.add(a,i.bronze,rt(t,e+.2,n)),r.add(new ci(.5,12),i.bronzeDark,rt(t,e+.9,n,0,-Math.PI/2));for(let o of[-1,1])r.add(new Ri(.12,.035,4,8),i.bronzeDark,rt(t+o*.6,e+.6,n,Math.PI/2));this.circles.push({x:t,z:n,r:.7,y:e})}flag(t,e,n,i,r){let a=this.M,o=this.batch,l=4.4;o.add(Tt(.7,.28,.7,1),a.black,rt(t,e+.14,n)),o.add(Tt(.4,.4,.4,1),a.darkWood,rt(t,e+.48,n)),o.add(Sn(.055,.07,l,6),a.black,rt(t,e+l/2,n)),o.add(new Le(.1,.35,6),a.gold,rt(t,e+l+.15,n));let c=new fn(1.1,1.4,8,4),h=kt({map:gu(i),side:De}),d=new Pt(c,h);d.position.set(t+r*.6,e+l-.9,n),r<0&&(d.scale.x=-1),d.rotation.y=r<0?.25:-.25,d.castShadow=!0,d.receiveShadow=!0,vo(d,Mo.flag),this.root.add(d),this.circles.push({x:t,z:n,r:.4,y:e})}drum(t,e,n){let i=this.M,r=this.batch,a=new le;a.position.set(t,0,e),a.rotation.y=n*.5;let o=Tt(.18,2.2,.18,1);for(let d of[-1,1])for(let u of[-1,1]){let f=new Pt(o,i.wood);f.position.set(d*.75,1,u*.75),f.rotation.set(u*.12,0,-d*.12),a.add(f)}for(let d of[-1,1]){let u=new Pt(Tt(1.7,.14,.14,1),i.wood);u.position.set(0,.35,d*.8),a.add(u)}let l=new le;l.position.y=2.15;let c=new Pt(bo([[.95,-.75],[1.08,-.4],[1.12,0],[1.08,.4],[.95,.75]],18),i.drumSide);c.rotation.x=Math.PI/2,l.add(c);for(let d of[-1,1]){let u=new Pt(new ci(.95,18),i.drumFace);u.position.z=d*.76,u.rotation.y=d>0?0:Math.PI,l.add(u);for(let f=0;f<14;f++){let m=f/14*Math.PI*2,v=new Pt(new ye(.05,4,3),i.gold);v.position.set(Math.cos(m)*.97,Math.sin(m)*.97,d*.66),l.add(v)}}let h=new Pt(new Le(.25,.6,6),i.gold);h.position.y=1.35,l.add(h),a.add(l),a.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),this.root.add(a),this.circles.push({x:t,z:e,r:1.25,y:0}),this.drums.push({group:a,body:l,pos:new I(t,0,e),shake:0})}planter(t,e,n,i){let r=this.M,a=this.batch,o=e-t,l=i-n,c=(t+e)/2,h=(n+i)/2,d=.32,u=.3;a.add(Tt(o,d,u,2),r.stoneLight,rt(c,d/2,n+u/2)),a.add(Tt(o,d,u,2),r.stoneLight,rt(c,d/2,i-u/2)),a.add(Tt(u,d,l-u*2,2),r.stoneLight,rt(t+u/2,d/2,h)),a.add(Tt(u,d,l-u*2,2),r.stoneLight,rt(e-u/2,d/2,h));for(let[f,m]of[[t,n],[e,n],[t,i],[e,i]])a.add(Tt(.42,.46,.42,1),r.stoneGrey,rt(f+(f===t?.15:-.15),.23,m+(m===n?.15:-.15)));a.add(Tt(o-u*2,.26,l-u*2,2),r.grass,rt(c,.13,h)),this.rects.push({x0:t,x1:e,z0:n,z1:i,h:.3}),this.grassAreas=this.grassAreas||[],this.grassAreas.push({x0:t+u,x1:e-u,z0:n+u,z1:i-u,y:.26})}pine(t,e,n,i,r,a=!0){let o=this.batch,l=this.foliage,c=this.M,h=Ne(r*97+3),d=new I(0,1,0),u=new I(t,e,n),f=new I((h()-.5)*.5,1,(h()-.5)*.5).normalize(),m=5,v=.9*i,g=.3*i,p=[];for(let y=0;y<m;y++){let E=g*.8,b=u.clone().addScaledVector(f,v),T=new be(E,g,v*1.05,7),x=new Fe().setFromUnitVectors(d,f);o.add(T,c.bark,new Jt().compose(u.clone().add(b).multiplyScalar(.5),x,new I(1,1,1))),p.push(b.clone()),u=b,g=E,f.x+=(h()-.5)*.7,f.z+=(h()-.5)*.5,f.y=1,f.normalize()}let S=(y,E,b,T,x)=>{let w=new dn(1,1);l.add(w,x,new Jt().compose(y,new Fe().setFromEuler(new on(0,h()*6,0)),new I(E,b,T)))};for(let y=2;y<m;y++){let E=p[y-1],b=2;for(let T=0;T<b;T++){let x=h()*Math.PI*2,w=(1.2+h()*1)*i*(1-(y-2)*.18),C=new I(Math.cos(x),.25+h()*.3,Math.sin(x)).normalize(),P=E.clone().addScaledVector(C,w),D=new be(.06*i,.11*i,w,5),B=new Fe().setFromUnitVectors(d,C);o.add(D,c.bark,new Jt().compose(E.clone().add(P).multiplyScalar(.5),B,new I(1,1,1)));let L=(.8+h()*.4)*i;S(P.clone().add(new I(0,.15*i,0)),1.25*L,.42*L,1.05*L,c.leaf),S(P.clone().add(new I(.1,.42*i,.05)),.85*L,.3*L,.75*L,c.leaf2)}}let R=p[m-1];S(R.clone().add(new I(0,.2*i,0)),1.5*i,.5*i,1.3*i,c.leaf),S(R.clone().add(new I(.1,.55*i,0)),1*i,.35*i,.9*i,c.leaf2),a&&this.circles.push({x:t,z:n,r:.45*i,y:e})}shrub(t,e,n){let i=this.foliage,r=this.M,a=Ne(Math.floor(t*31+n*7));for(let o=0;o<3;o++)i.add(new dn(1,1),o?r.leaf2:r.leaf,new Jt().compose(new I(t+(a()-.5)*.6,e+.3+o*.12,n+(a()-.5)*.6),new Fe,new I(.55,.42,.5)))}flowerPot(t,e){let n=this.M,i=this.batch;i.add(Tt(.7,.5,.7,2),n.stoneLight,rt(t,.25,e)),i.add(Tt(.8,.08,.8,2),n.stoneGrey,rt(t,.52,e)),i.add(bo([[.18,0],[.3,.1],[.34,.3],[.3,.38]],10),n.pot,rt(t,.56,e));let r=Ne(Math.floor(t*13+e*5+99));for(let a=0;a<6;a++){let o=r()*Math.PI*2,l=r()*.2;i.add(new dn(.09,0),a%3?n.pink:n.orange,rt(t+Math.cos(o)*l,.98+r()*.1,e+Math.sin(o)*l))}i.add(new dn(.22,0),n.leaf2,rt(t,.9,e)),this.circles.push({x:t,z:e,r:.45,y:0})}stoneLantern(t,e,n){let i=this.M,r=this.batch;r.add(Sn(.42,.46,.2,8),i.stoneGrey,rt(t,e+.1,n)),r.add(Sn(.3,.38,.16,8),i.stoneLight,rt(t,e+.28,n)),r.add(Sn(.13,.15,.9,8),i.stoneLight,rt(t,e+.8,n)),r.add(Sn(.36,.2,.2,8),i.stoneLight,rt(t,e+1.32,n)),r.add(Sn(.22,.22,.42,8),i.lampGlow,rt(t,e+1.63,n));for(let a=0;a<4;a++){let o=a/4*Math.PI*2+Math.PI/4;r.add(Tt(.1,.44,.1,1),i.stoneLight,rt(t+Math.cos(o)*.24,e+1.63,n+Math.sin(o)*.24))}r.add(new Le(.52,.32,8),i.stoneGrey,rt(t,e+2,n)),r.add(new ye(.1,6,4),i.stoneGrey,rt(t,e+2.22,n)),this.lanterns.push(new I(t,e+1.65,n)),this.circles.push({x:t,z:n,r:.45,y:e})}pond(t,e,n,i){let r=this.M,a=this.batch,o=e-t,l=i-n,c=(t+e)/2,h=(n+i)/2,d=.4,u=.35;a.add(Tt(o,u,d,2),r.blockDark,rt(c,u/2,n+d/2)),a.add(Tt(o,u,d,2),r.blockDark,rt(c,u/2,i-d/2)),a.add(Tt(d,u,l-2*d,2),r.blockDark,rt(t+d/2,u/2,h)),a.add(Tt(d,u,l-2*d,2),r.blockDark,rt(e-d/2,u/2,h));let f=new Pt(new fn(o-2*d,l-2*d),Zg());f.rotation.x=-Math.PI/2,f.position.set(c,.2,h),this.root.add(f),this.water=f;let m=Ne(5);for(let v=0;v<9;v++){let g=t+.9+m()*(o-1.8),p=n+.9+m()*(l-1.8),S=.3+m()*.25;a.add(Sn(S,S,.03,9),r.lotus,rt(g,.23,p)),m()<.45&&a.add(new Le(.12,.22,5),r.pink,rt(g+.1,.36,p))}this.blockRects.push({x0:t-.1,x1:e+.1,z0:n-.1,z1:i+.1})}corridor(t){let e=this.M,n=this.batch,i=t*22,r=t*26.2,a=(i+r)/2,o=-34,l=22,c=l-o,h=(o+l)/2;n.add(Tt(4.4,.5,c,2),e.block,rt(a,.25,h)),n.add(Tt(4.4,.02,c,4),e.slab,rt(a,.51,h)),n.add(Tt(.4,3.6,c,2),e.plaster,rt(t*25.9,2.3,h));let d=Sn(.17,.19,3.3,8);for(let u=o+1;u<=l-1;u+=3)n.add(d,e.wood,rt(t*22.5,2.15,u)),n.add(Tt(.4,.14,.4,1),e.stoneLight,rt(t*22.5,.56,u));n.add(Tt(.3,.36,c,4),e.dancheong,rt(t*22.5,3.85,h)),this.roof({cx:t*24.2,cy:4.05,cz:h,w:3.8,d:c,h:1.25,overhang:1,lift:0,ridge:!0,power:1.5})}northWall(){let t=this.M;this.batch.add(Tt(44,3.2,.6,2),t.plaster,rt(0,1.6,-33.9)),this.roof({cx:0,cy:3.2,cz:-33.9,w:44,d:.5,h:.5,overhang:.55,lift:0,ridge:!0,power:1.2})}southWall(){let t=this.M,e=this.batch;for(let n of[-1,1]){let i=n*3.9,r=n*22,a=(i+r)/2,o=Math.abs(r-i);e.add(Tt(o,1.2,.7,2),t.block,rt(a,.6,21.9)),e.add(Tt(o+.1,.12,.85,2),t.stoneLight,rt(a,1.26,21.9)),this.blockRects.push({x0:Math.min(i,r),x1:Math.max(i,r),z0:21.4,z1:22.4}),e.add(Tt(.7,3.4,.7,1),t.wood,rt(n*3.6,1.7,21.9)),e.add(Tt(1,.3,1,1),t.stoneLight,rt(n*3.6,.15,21.9)),this.circles.push({x:n*3.6,z:21.9,r:.5,y:0})}e.add(Tt(7.9,.5,.8,4),t.dancheong,rt(0,3.5,21.9)),this.roof({cx:0,cy:3.75,cz:21.9,w:8,d:1.1,h:.9,overhang:.8,lift:.3,ridge:!0})}scatterGrass(){let t=this.grassAreas,e=0;for(let f of t)e+=Math.floor((f.x1-f.x0)*(f.z1-f.z0)*26);let n=new ce;n.setAttribute("position",new Lt([-.05,0,0,.05,0,0,0,.38,0],3)),n.setAttribute("normal",new Lt([0,1,0,0,1,0,0,1,0],3)),n.setAttribute("color",new Lt([.55,.62,.5,.55,.62,.5,1.15,1.12,.95],3));let i=kt({color:16777215,vertexColors:!0,side:De}),r=new Vs(n,i,e),a=new Jt,o=new Fe,l=new on,c=new St,h=Ne(99),d=["#6f9c48","#5d8c3e","#86ad52","#7aa04a"].map(f=>new St(f)),u=0;for(let f of t){let m=Math.floor((f.x1-f.x0)*(f.z1-f.z0)*26);for(let v=0;v<m;v++){let g=f.x0+h()*(f.x1-f.x0),p=f.z0+h()*(f.z1-f.z0);l.set(0,h()*Math.PI,0);let S=.7+h()*.7;a.compose(new I(g,f.y,p),o.setFromEuler(l),new I(S,S*(.8+h()*.6),S)),r.setMatrixAt(u,a);let R=Math.sin(g*.7)*Math.cos(p*.9)*.5+.5;c.copy(d[Math.floor(h()*d.length)]).lerp(new St("#a8b85a"),R*.35),h()<.015&&c.set(h()<.5?"#f2eee0":"#f0c850"),r.setColorAt(u,c),u++}}r.receiveShadow=!0,r.castShadow=!1,r.userData.noOutline=!0,vo(r,Mo.grass,{shadow:!1}),this.root.add(r)}setNight(t){for(let e of this.glowMats)e.mat.emissive.copy(e.color).multiplyScalar(t*e.k)}update(t,e){for(let n of this.drums)if(n.shake>0){n.shake=Math.max(0,n.shake-t*2.5);let i=n.shake;n.body.scale.set(1+Math.sin(e*60)*.05*i,1+Math.sin(e*60+1)*.05*i,1),n.body.rotation.z=Math.sin(e*40)*.04*i}this.water&&(this.water.material.uniforms.uNight.value=Mn.night.value)}},Yg=[[1,0],[-1,0],[0,1],[0,-1]];function rt(s,t,e,n=0,i=0,r=0,a=null){let o=new Jt,l=Array.isArray(a)?new I(...a):new I(1,1,1);return o.compose(new I(s,t,e),new Fe().setFromEuler(new on(i,n,r,"YXZ")),l),o}function Zg(){return new Te({uniforms:{uTime:Mn.time,uNight:{value:0}},vertexShader:`
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
      }`})}var Jg=`
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
}`,$g=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  if (vAlpha <= 0.01) discard;
  gl_FragColor = vec4(vColor * vAlpha, vAlpha);
}`,wo=class{constructor(t,e,n){this.cap=e,this.list=[];let i=this.geo=new ce;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),i.setAttribute("position",new Ie(this.pos,3).setUsage(xs)),i.setAttribute("aColor",new Ie(this.col,3).setUsage(xs)),i.setAttribute("aSize",new Ie(this.size,1).setUsage(xs)),i.setAttribute("aAlpha",new Ie(this.alpha,1).setUsage(xs));let r=new Te({vertexShader:Jg,fragmentShader:$g,transparent:!0,depthWrite:!1,blending:n?Ii:Ma,blendSrc:Sa,blendDst:nr});this.points=new Gs(i,r),this.points.frustumCulled=!1,this.points.renderOrder=n?20:10,t.add(this.points)}emit(t){this.list.length>=this.cap&&this.list.shift();let e=t.color instanceof St?t.color:new St(t.color??16777215);this.list.push({x:t.x,y:t.y,z:t.z,vx:t.vx||0,vy:t.vy||0,vz:t.vz||0,g:t.g??0,drag:t.drag??0,life:t.life??1,max:t.life??1,size:t.size??2,endSize:t.endSize??t.size??2,r:e.r,gg:e.g,b:e.b,c2:t.color2?new St(t.color2):null,alpha:t.alpha??1,flicker:t.flicker||0,floor:t.floor??-100,wob:t.wob||0,seed:Math.random()*100})}update(t,e){let n=this.list,i=0;for(let r=n.length-1;r>=0;r--){let a=n[r];if(a.life-=t,a.life<=0){n.splice(r,1);continue}a.vy-=a.g*t;let o=Math.exp(-a.drag*t);a.vx*=o,a.vy*=o,a.vz*=o,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,a.wob&&(a.x+=Math.sin(e*2+a.seed)*a.wob*t,a.z+=Math.cos(e*1.7+a.seed)*a.wob*t),a.y<a.floor&&(a.y=a.floor,a.vy*=-.3,a.vx*=.6,a.vz*=.6)}for(let r of n){if(i>=this.cap)break;let a=r.life/r.max;this.pos[i*3]=r.x,this.pos[i*3+1]=r.y,this.pos[i*3+2]=r.z;let o=r.r,l=r.gg,c=r.b;r.c2&&(o=r.c2.r+(o-r.c2.r)*a,l=r.c2.g+(l-r.c2.g)*a,c=r.c2.b+(c-r.c2.b)*a),this.col[i*3]=o,this.col[i*3+1]=l,this.col[i*3+2]=c,this.size[i]=Math.max(1,Math.round(r.endSize+(r.size-r.endSize)*a));let h=r.alpha*Math.min(1,a*3);r.flicker&&(h*=1-r.flicker*(Math.sin(e*30+r.seed*10)*.5+.5)),this.alpha[i]=h,i++}this.geo.setDrawRange(0,i);for(let r of["position","aColor","aSize","aAlpha"])this.geo.attributes[r].needsUpdate=!0}},Ru=`
varying vec2 vL;
void main(){ vL = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,Kg=`
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
}`,jg=`
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
}`,To=class{constructor(t,e){this.scene=t,this.pixel=e,this.add=new wo(t,2500,!0),this.norm=new wo(t,1500,!1),this.arcs=[],this.rings=[],this.numbers=[],this.numLayer=document.getElementById("numbers"),this.time=0}spark(t,e,n,i=10,r="#fff6c8",a=6){for(let o=0;o<i;o++){let l=Math.random()*Math.PI*2,c=it(-.2,1),h=a*it(.4,1);this.add.emit({x:t,y:e,z:n,vx:Math.cos(l)*h,vy:c*h*.8,vz:Math.sin(l)*h,g:12,drag:4,life:it(.15,.35),size:3,endSize:1,color:r,color2:"#ff8a30"})}}dust(t,e,n,i=4,r="#c8bca0"){for(let a=0;a<i;a++){let o=Math.random()*Math.PI*2;this.norm.emit({x:t+it(-.15,.15),y:e+.05,z:n+it(-.15,.15),vx:Math.cos(o)*.8,vy:it(.3,.9),vz:Math.sin(o)*.8,drag:3,life:it(.3,.55),size:3,endSize:1,color:r,alpha:.75})}}blueFire(t,e,n,i=20,r=.5){for(let a=0;a<i;a++)this.add.emit({x:t+it(-r,r),y:e+it(0,.4),z:n+it(-r,r),vx:it(-.4,.4),vy:it(1.2,3.2),vz:it(-.4,.4),drag:1.5,life:it(.35,.8),size:it(2,4),endSize:1,color:"#9ff0ff",color2:"#2050ff",flicker:.3})}smoke(t,e,n,i=8){for(let r=0;r<i;r++)this.norm.emit({x:t+it(-.4,.4),y:e+it(0,.5),z:n+it(-.4,.4),vx:it(-.6,.6),vy:it(.5,1.4),vz:it(-.6,.6),drag:2,life:it(.5,.9),size:5,endSize:2,color:"#d8d4e8",alpha:.7})}coins(t,e,n,i=6){for(let r=0;r<i;r++){let a=Math.random()*Math.PI*2;this.add.emit({x:t,y:e+.4,z:n,vx:Math.cos(a)*it(1,2.5),vy:it(3,5),vz:Math.sin(a)*it(1,2.5),g:14,life:it(.7,1.1),size:2,color:"#ffe070",floor:e+.02,flicker:.5})}}slash(t,e,n=0,i={}){let r=i.inner??.45,a=i.outer??1.9,o=i.len??2.8,l=-Math.PI/2-o/2,c=new Zs(r,a,24,1,l,o),h=new Te({vertexShader:Ru,fragmentShader:Kg,uniforms:{uProg:{value:0},uStart:{value:l},uLen:{value:o},uInner:{value:r},uOuter:{value:a},uColor:{value:new St(i.color||"#e8fbff")},uFade:{value:1},uTail:{value:i.static?1.2:.55}},transparent:!0,depthWrite:!1,blending:Ii,side:De}),d=new Pt(c,h),u=new le;return u.add(d),u.position.copy(t),u.rotation.y=e,d.rotation.x=-Math.PI/2,n===1&&(d.scale.x=-1),n===2&&(d.rotation.set(0,0,0),d.rotation.y=Math.PI/2,d.rotation.z=-Math.PI/2+0,u.position.y+=.2),d.renderOrder=30,this.scene.add(u),this.arcs.push({g:u,mat:h,t:0,dur:i.dur??.2,move:i.move||null,static:!!i.static}),u}ring(t,e,n="#ffffff",i=.35,r=0){let a=new ci(1,32),o=new Te({vertexShader:Ru,fragmentShader:jg,uniforms:{uColor:{value:new St(n)},uAlpha:{value:1},uProg:{value:0},uMode:{value:r}},transparent:!0,depthWrite:!1,blending:Ii}),l=new Pt(a,o);l.rotation.x=-Math.PI/2,l.position.copy(t),l.position.y+=.04,l.renderOrder=25,this.scene.add(l);let c={m:l,mat:o,t:0,dur:i,radius:e,mode:r,manual:r===1};return l.scale.setScalar(r===1?e:.01),this.rings.push(c),c}removeRing(t){t.dead=!0}number(t,e,n="normal"){let i=document.createElement("div");i.className="dmg "+n,i.textContent=e,this.numLayer.appendChild(i),this.numbers.push({el:i,p:t.clone(),vy:2.6,vx:it(-.6,.6),t:0,life:n==="heal"?1:.85})}update(t){this.time+=t,this.add.update(t,this.time),this.norm.update(t,this.time);for(let e=this.arcs.length-1;e>=0;e--){let n=this.arcs[e];n.t+=t;let i=n.t/n.dur;n.mat.uniforms.uProg.value=n.static?1:Math.min(1.55,i*1.55),n.mat.uniforms.uFade.value=i>.7?Math.max(0,1-(i-.7)/.3):1,n.move&&n.move(n,t),i>=1&&(this.scene.remove(n.g),n.mat.dispose(),n.g.children[0].geometry.dispose(),this.arcs.splice(e,1))}for(let e=this.rings.length-1;e>=0;e--){let n=this.rings[e];if(n.t+=t,!n.manual){let i=n.t/n.dur;n.m.scale.setScalar(.2+n.radius*Math.sqrt(i)),n.mat.uniforms.uAlpha.value=1-i,i>=1&&(n.dead=!0)}n.dead&&(this.scene.remove(n.m),n.mat.dispose(),n.m.geometry.dispose(),this.rings.splice(e,1))}for(let e=this.numbers.length-1;e>=0;e--){let n=this.numbers[e];n.t+=t,n.vy-=7*t,n.p.y+=n.vy*t,n.p.x+=n.vx*t;let i=this.pixel.project(n.p),r=this.pixel.pixelSize,a=Math.round(i.x/r)*r,o=Math.round(i.y/r)*r,l=n.t<.08?1.6-n.t*7:1;n.el.style.transform=`translate(${a}px, ${o}px) translate(-50%, -50%) scale(${l.toFixed(2)})`,n.el.style.opacity=n.t>n.life*.6?String(1-(n.t-n.life*.6)/(n.life*.4)):"1",n.t>=n.life&&(n.el.remove(),this.numbers.splice(e,1))}}};var Ao=class{constructor(){this.ctx=null,this.musicOn=!0,this.mood="day",this.nextNote=0,this.step=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.55,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=.32;let n=e.createDelay();n.delayTime.value=.28;let i=e.createGain();i.gain.value=.3;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=2200,this.music.connect(this.master),this.music.connect(n),n.connect(r),r.connect(i),i.connect(n),r.connect(this.master);let a=e.sampleRate;this.noiseBuf=e.createBuffer(1,a,e.sampleRate);let o=this.noiseBuf.getChannelData(0);for(let l=0;l<a;l++)o[l]=Math.random()*2-1;this.nextNote=e.currentTime+.3}noise(t,{type:e="bandpass",f0:n=1e3,f1:i=1e3,q:r=1,gain:a=.3,attack:o=.005,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime,d=c.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.7+Math.random()*.6;let u=c.createBiquadFilter();u.type=e,u.Q.value=r,u.frequency.setValueAtTime(n,h),u.frequency.exponentialRampToValueAtTime(Math.max(20,i),h+t);let f=c.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(a,h+o),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(f),f.connect(l||this.sfx),d.start(h,Math.random()*.5),d.stop(h+t+.05)}tone(t,{type:e="sine",f0:n=440,f1:i=null,gain:r=.3,attack:a=.005,at:o=0,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+o,d=c.createOscillator();d.type=e,d.frequency.setValueAtTime(n,h),i&&d.frequency.exponentialRampToValueAtTime(i,h+t);let u=c.createGain();u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(r,h+a),u.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u),u.connect(l||this.sfx),d.start(h),d.stop(h+t+.05)}play(t){if(this.ctx)switch(t){case"swing":this.noise(.16,{f0:700,f1:3200,q:2.5,gain:.22});break;case"swing3":this.noise(.22,{f0:500,f1:3800,q:2.2,gain:.3}),this.tone(.2,{type:"triangle",f0:900,f1:1800,gain:.05});break;case"hit":this.tone(.14,{f0:160,f1:50,gain:.5}),this.noise(.08,{type:"highpass",f0:2500,f1:1500,gain:.25});break;case"crit":this.tone(.2,{f0:200,f1:45,gain:.6}),this.noise(.12,{type:"highpass",f0:3e3,f1:1200,gain:.3}),this.tone(.18,{type:"square",f0:1320,f1:1760,gain:.04,at:.02});break;case"drum":this.tone(1.1,{f0:95,f1:38,gain:.95,attack:.004}),this.tone(.6,{f0:180,f1:70,gain:.3}),this.noise(.35,{type:"lowpass",f0:900,f1:120,gain:.5});break;case"dash":this.noise(.25,{type:"lowpass",f0:2400,f1:300,gain:.25,attack:.03});break;case"wave":this.noise(.45,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.05}),this.tone(.4,{type:"triangle",f0:600,f1:1400,gain:.08});break;case"hurt":this.tone(.2,{type:"square",f0:260,f1:90,gain:.12}),this.noise(.12,{f0:1200,f1:400,gain:.25});break;case"poof":this.noise(.4,{type:"lowpass",f0:1800,f1:200,gain:.35,attack:.01}),this.tone(.25,{type:"triangle",f0:500,f1:1500,gain:.08});break;case"spawn":this.tone(.5,{type:"sine",f0:300,f1:900,gain:.08,attack:.1}),this.noise(.5,{f0:300,f1:1500,q:3,gain:.12,attack:.15});break;case"laugh":for(let e=0;e<3;e++)this.tone(.09,{type:"square",f0:760-e*40,f1:620-e*40,gain:.04,at:e*.11});break;case"slam":this.tone(.8,{f0:70,f1:28,gain:.9}),this.noise(.6,{type:"lowpass",f0:600,f1:80,gain:.6});break;case"orb":this.tone(.25,{type:"sine",f0:900,f1:400,gain:.08});break;case"talk":this.tone(.04,{type:"square",f0:520+Math.random()*80,gain:.025});break;case"coin":this.tone(.08,{type:"square",f0:1320,gain:.04}),this.tone(.15,{type:"square",f0:1760,gain:.04,at:.07});break;case"victory":[523,659,784,1046].forEach((e,n)=>this.tone(.5,{type:"triangle",f0:e,gain:.12,at:n*.12,dest:this.sfx}));break;case"block":this.tone(.06,{type:"square",f0:1800,f1:1200,gain:.05});break}}pluck(t,e,n=.18){let i=this.ctx,r=i.createOscillator();r.type="triangle",r.frequency.setValueAtTime(t*1.01,e),r.frequency.exponentialRampToValueAtTime(t,e+.08),Math.random()<.3&&(r.frequency.setValueAtTime(t,e+.25),r.frequency.linearRampToValueAtTime(t*1.06,e+.4),r.frequency.linearRampToValueAtTime(t,e+.6));let a=i.createOscillator();a.type="sine",a.frequency.value=t*2;let o=i.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(n,e+.004),o.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let l=i.createGain();l.gain.value=.25,r.connect(o),a.connect(l),l.connect(o),o.connect(this.music),r.start(e),a.start(e),r.stop(e+1.2),a.stop(e+1.2)}janggu(t,e){let n=this.ctx;if(e==="deong"){let o=n.createOscillator();o.frequency.setValueAtTime(110,t),o.frequency.exponentialRampToValueAtTime(55,t+.2);let l=n.createGain();l.gain.setValueAtTime(.35,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.3),o.connect(l),l.connect(this.music),o.start(t),o.stop(t+.35)}let i=n.createBufferSource();i.buffer=this.noiseBuf;let r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=e==="kung"?400:2400,r.Q.value=1.5;let a=n.createGain();a.gain.setValueAtTime(e==="kung"?.3:.18,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.08),i.connect(r),r.connect(a),a.connect(this.music),i.start(t,Math.random()),i.stop(t+.1)}update(){let t=this.ctx;if(!t||!this.musicOn)return;let e=this.mood==="battle"?146.83:196,n=[0,2,5,7,9,12,14,17,19],i=this.mood==="battle"?.22:.42;for(;this.nextNote<t.currentTime+.25;){let r=this.nextNote,a=this.step,o=this.mood==="battle"?["deong",0,"tta","kung","deong",0,"tta","tta"]:["deong",0,0,"kung",0,"tta",0,0,"kung",0,"tta",0],l=o[a%o.length];l&&this.janggu(r,l);let c=this.mood==="battle"?1:2;if(a%c===0&&Math.random()<(this.mood==="battle"?.75:.6)){this.melIdx=Math.max(0,Math.min(n.length-1,(this.melIdx??4)+Math.floor(Math.random()*5)-2));let h=e*Math.pow(2,n[this.melIdx]/12);this.pluck(h,r,this.mood==="battle"?.13:.16),Math.random()<.25&&this.pluck(h/2,r,.1)}a%16===0&&this.pluck(e/2,r,.12),this.step++,this.nextNote+=i}}toggleMusic(){return this.musicOn=!this.musicOn,this.music&&(this.music.gain.value=this.musicOn?.32:0),this.musicOn}};var Ro=class{constructor(t){this.game=t;let e=n=>document.getElementById(n);this.el={hud:e("hud"),hpFill:e("hp-fill"),hpLag:e("hp-lag"),hpText:e("hp-text"),dashCd:e("cd-dash"),skillCd:e("cd-skill"),quest:e("quest-text"),questTitle:e("quest-title"),banner:e("banner"),bannerMain:e("banner-main"),bannerSub:e("banner-sub"),dialog:e("dialog"),dName:e("dialog-name"),dText:e("dialog-text"),prompt:e("prompt"),boss:e("boss"),bossFill:e("boss-fill"),bossLag:e("boss-lag"),bossName:e("boss-name"),bars:e("hpbars"),title:e("title"),over:e("gameover"),combo:e("combo"),comboN:e("combo-n"),kills:e("kills"),toast:e("toast"),flash:e("flash")},this.hpLag=1,this.bossLag=1,this.dialogState=null,this.bars=new Map,this.bannerT=0,this.toastT=0,Qg(document.getElementById("portrait-cv"))}showHud(t){this.el.hud.classList.toggle("hidden",!t)}setQuest(t,e){let n=t+"|"+e;if(n===this.questKey)return;let i=!this.questKey||this.questKey.split("|")[0]!==t;if(this.questKey=n,this.el.questTitle.textContent=t,!i){this.el.quest.innerHTML=e;return}this.el.quest.innerHTML=e,this.el.quest.parentElement.classList.remove("pulse"),this.el.quest.parentElement.offsetWidth,this.el.quest.parentElement.classList.add("pulse")}banner(t,e="",n=2.6,i=""){this.el.bannerMain.textContent=t,this.el.bannerSub.textContent=e,this.el.banner.className="show "+i,this.bannerT=n}toast(t,e=2.2){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e}flash(t,e){let n=this.el.flash;n.style.transition="none",n.style.background=t,n.style.opacity=String(e),requestAnimationFrame(()=>{n.style.transition="opacity 0.35s",n.style.opacity="0"})}dialog(t,e,n){this.dialogState={name:t,lines:e,i:0,shown:0,onDone:n,acc:0},this.el.dialog.classList.add("show"),this.el.dName.textContent=t,this.el.dText.textContent=""}get inDialog(){return!!this.dialogState}advance(){let t=this.dialogState;if(!t)return;let e=t.lines[t.i];if(t.shown<e.length){t.shown=e.length,this.el.dText.textContent=e;return}t.i++,t.shown=0,t.acc=0,t.i>=t.lines.length&&(this.el.dialog.classList.remove("show"),this.dialogState=null,t.onDone&&t.onDone())}setBoss(t){this.bossEnemy=t,this.el.boss.classList.toggle("show",!!t),t&&(this.el.bossName.textContent=t.name||"\uB3C4\uAE68\uBE44 \uB300\uC655",this.bossLag=1)}update(t){let e=this.game,n=e.player,i=this.el,r=n.hp/n.maxHp;if(this.hpLag=Math.max(r,this.hpLag-t*.5),i.hpFill.style.width=(r*100).toFixed(1)+"%",i.hpLag.style.width=(this.hpLag*100).toFixed(1)+"%",i.hpText.textContent=`${Math.ceil(n.hp)} / ${n.maxHp}`,i.hpFill.classList.toggle("low",r<.3),i.dashCd.style.height=n.dashCd/.5*100+"%",i.skillCd.style.height=n.skillCd/n.skillMax*100+"%",i.kills.textContent=e.kills,this.bossEnemy){let h=this.bossEnemy,d=Math.max(0,h.hp/h.maxHp);this.bossLag=Math.max(d,this.bossLag-t*.4),i.bossFill.style.width=(d*100).toFixed(1)+"%",i.bossLag.style.width=(this.bossLag*100).toFixed(1)+"%",h.dead&&this.bossLag<=.001&&this.setBoss(null)}this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&i.banner.classList.remove("show")),this.toastT>0&&(this.toastT-=t,this.toastT<=0&&i.toast.classList.remove("show")),e.hitCombo>=2&&e.time-e.lastHitTime<2?(i.combo.classList.add("show"),i.comboN.textContent=e.hitCombo):i.combo.classList.remove("show");let a=this.dialogState;if(a){let h=a.lines[a.i];if(a.shown<h.length){a.acc+=t*38;let d=a.shown;a.shown=Math.min(h.length,Math.floor(a.acc)),a.shown>d&&a.shown%2===0&&e.audio.play("talk"),i.dText.textContent=h.slice(0,a.shown)}i.dialog.classList.toggle("done",a.shown>=h.length)}let o=e.pixel.pixelSize,l=new Set;for(let h of e.enemies){if(h.type==="boss"||h.dead||h.spawning||h.hp>=h.maxHp)continue;l.add(h);let d=this.bars.get(h);d||(d=document.createElement("div"),d.className="ebar",d.innerHTML="<i></i>",i.bars.appendChild(d),this.bars.set(h,d));let u=h.type==="wisp"?2:1.75,f=e.pixel.project({x:h.pos.x,y:h.y+u,z:h.pos.z,isVector3:!0,clone(){return this}});d.style.transform=`translate(${Math.round(f.x/o)*o}px, ${Math.round(f.y/o)*o}px)`,d.firstChild.style.width=h.hp/h.maxHp*100+"%"}for(let[h,d]of this.bars)l.has(h)||(d.remove(),this.bars.delete(h));let c=e.nearInteract;if(c&&!this.inDialog&&e.state==="play"){let h=e.pixel.project(c.promptPos);i.prompt.style.transform=`translate(${Math.round(h.x/o)*o}px, ${Math.round(h.y/o)*o}px)`,i.prompt.innerHTML=`<b>E</b>${c.label}`,i.prompt.classList.add("show")}else i.prompt.classList.remove("show")}};function Qg(s){if(!s)return;let t=s.getContext("2d"),e=["....................",".......hhhhhh.......",".....hhhhhhhhhh.....","....hhhhhhhhhhhh....","...hhhhhhhhhhhhhh...","...rrrrrrrrrrrrrr...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","...hsseessssseessh..","...hsseWsssseeWsh...","...hsseessssseessh..","...hspssssssssspsh..","....ssssssmmsssss...",".....ssssssssssss...","......ssssssssss....",".......cwwwwwwc.....",".....wwwcwwwwcwww...","....wwwwwcwwcwwwwww.","...wwwwwwwccwwwwwwww"],n={h:"#2a2024",r:"#c8302c",s:"#f6d6b6",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",w:"#eeeae0",c:"#2e4f8f"};t.fillStyle="#3a4878",t.fillRect(0,0,20,20),e.forEach((i,r)=>[...i].forEach((a,o)=>{n[a]&&(t.fillStyle=n[a],t.fillRect(o,r,1,1))}))}var Wt=s=>new St(s);function Nt(s,t,e=0,n=0,i=0){let r=new Pt(s,t);return r.position.set(e,n,i),r.castShadow=!0,r.receiveShadow=!0,r}var ws=class{constructor(t){this.cfg=t,this.mats=[];let e=d=>{let u=kt(d);return u.userData.baseEmissive=(d.emissive||Wt("#000")).clone?.()||Wt("#000"),this.mats.push(u),u};this.mat=e;let n=t.scale||1;this.root=new le,this.body=new le,this.body.scale.setScalar(n),this.root.add(this.body);let i=e({color:Wt(t.skin)}),r=t.legLen??.36;this.legLen=r;let a=e({color:Wt(t.pants)}),o=e({color:Wt(t.shoes||"#26211f")});this.legs=[];for(let d of[-1,1]){let u=new le;u.position.set(d*.1*(t.wide||1),r,0),u.add(Nt(new hs(.075*(t.limb||1),r-.15,3,6),a,0,-r/2+.02,0)),u.add(Nt(new ee(.14,.08,.2),o,0,-r+.04,.03)),this.body.add(u),this.legs.push(u)}if(this.hips=new le,this.hips.position.y=r,this.body.add(this.hips),this.chest=new le,this.chest.position.y=t.torsoH??.4,this.hips.add(this.chest),t.type==="hero"||t.type==="guard"){let d=e({color:Wt(t.robe)}),u=e({color:Wt(t.belt)});this.hips.add(Nt(new be(.17,.235,.44,10),d,0,.2,0)),this.hips.add(Nt(new be(.24,.31,.24,10),d,0,-.04,0)),this.hips.add(Nt(new be(.215,.225,.07,10),u,0,.1,0));let f=e({color:Wt(t.collar||"#2a2a36")}),m=Nt(new ee(.05,.26,.04),f,.05,.3,.19);m.rotation.z=.5,this.hips.add(m);let v=Nt(new ee(.05,.26,.04),f,-.05,.3,.19);v.rotation.z=-.5,this.hips.add(v);let g=Nt(new ee(.04,.16,.02),u,.06,.04,.24);g.rotation.z=.2,this.hips.add(g),this.tie=g}else if(t.type==="lady"){let d=e({color:Wt(t.robe)}),u=e({color:Wt(t.skirt)});this.hips.add(Nt(new be(.15,.2,.22,10),d,0,.3,0)),this.hips.add(Nt(new be(.17,.42,.62,12),u,0,-.06,0));let f=e({color:Wt("#c23a4a")});this.hips.add(Nt(new ee(.06,.2,.03),f,.04,.18,.18))}else if(t.type==="dokkaebi"){this.hips.add(Nt(new ye(.27,10,8),i,0,.25,.02));let d=e({map:Su()});this.hips.add(Nt(new be(.25,.29,.2,10),d,0,0,0));let u=e({color:Wt("#2b2220")});this.hips.add(Nt(new be(.262,.262,.05,10),u,0,.1,0))}this.head=new le,this.head.position.y=t.neck??.27,this.chest.add(this.head);let l=t.headR??.27,c=Nt(new ye(l,14,10),i);c.scale.set(1,.93,.95),this.head.add(c),this.buildFace(l,t),this.buildHair(l,t),this.arms=[];let h=e({color:Wt(t.sleeve||t.robe||t.skin)});for(let d of[-1,1]){let u=new le;u.position.set(d*(t.shoulder??.21),-.03,0);let f=Nt(new hs(.068*(t.limb||1),.2,3,6),h,0,-.14,0);u.add(f),t.cuff&&u.add(Nt(new be(.08,.085,.05,8),e({color:Wt(t.cuff)}),0,-.26,0));let m=new le;m.position.y=-.31,m.add(Nt(new ye(.065*(t.limb||1),6,5),i)),u.add(m),u.userData.hand=m,this.chest.add(u),this.arms.push(u)}this.armR=this.arms[0],this.armL=this.arms[1],this.handR=this.armR.userData.hand,t.weapon&&this.buildWeapon(t.weapon),this.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),this.phase=0,this.idleT=Math.random()*10,this.flash=0,this.lean=0,this.deadT=0}buildFace(t,e){let n=this.mat({color:Wt(e.eye||"#1b1416")}),i=t*.93;if(e.type==="dokkaebi"){let r=kt({color:Wt("#f4e86a"),emissive:Wt("#7a6410")});for(let h of[-1,1]){let d=Nt(new ye(.075,6,5),r,h*.11,.03,i-.04);d.scale.z=.5,this.head.add(d),this.head.add(Nt(new ee(.045,.06,.02),n,h*.11,.03,i+0));let u=Nt(new ee(.12,.035,.03),this.mat({color:Wt(e.hair)}),h*.11,.13,i-.02);u.rotation.z=h*.35,this.head.add(u)}let a=Nt(new ee(.26,.07,.04),this.mat({color:Wt("#5a1820")}),0,-.11,i-.05);this.head.add(a);let o=this.mat({color:Wt("#fbf6e8")});for(let h of[-1,1])this.head.add(Nt(new Le(.025,.07,4),o,h*.08,-.06,i-.03));let l=this.mat({color:Wt(e.horn||"#efe2b0")}),c=e.horns??1;for(let h=0;h<c;h++){let d=c===1?0:h?.13:-.13,u=Nt(new Le(.06,.24,6),l,d,t+.06,.02);u.rotation.z=-d*1.5,this.head.add(u)}this.head.add(Nt(new ye(.05,5,4),this.mat({color:new St(e.skin).multiplyScalar(.8)}),0,-.02,i))}else{for(let a of[-1,1])this.head.add(Nt(new ee(.05,.085,.03),n,a*.095,-.02,i-.01)),this.head.add(Nt(new ee(.02,.025,.01),this.mat({color:Wt("#ffffff")}),a*.095+.01,.005,i+.008));let r=this.mat({color:Wt("#f0a0a0")});for(let a of[-1,1])this.head.add(Nt(new ee(.06,.025,.02),r,a*.16,-.085,i-.06))}}buildHair(t,e){let n=this.mat({color:Wt(e.hair||"#231c1e")});if(e.type==="dokkaebi"){for(let r=0;r<9;r++){let a=r/9*Math.PI*2,o=Nt(new Le(.07,.22,4),n),l=new I(Math.cos(a)*.8,.55,Math.sin(a)*.8-.25).normalize();o.position.copy(l).multiplyScalar(t*.95),o.quaternion.setFromUnitVectors(new I(0,1,0),l),this.head.add(o)}return}let i=Nt(new ye(t*1.06,14,8,0,Math.PI*2,0,Math.PI*.5),n);i.rotation.x=-.35,i.position.set(0,.02,-.02),this.head.add(i);for(let r=-2;r<=2;r++){let a=Nt(new ee(.09,.12,.06),n,r*.07,t*.62,t*.68);a.rotation.x=.5,a.rotation.z=r*.15,this.head.add(a)}if(e.type==="hero"){this.head.add(Nt(new ye(.09,8,6),n,0,t+.04,-.06));let r=Nt(new Ri(t*.98,.025,4,16),this.mat({color:Wt("#c8302c")}),0,.09,0);r.rotation.x=Math.PI/2-.3,this.head.add(r);let a=new le;a.position.set(0,.06,-t*.95);let o=Nt(new ee(.07,.36,.02),this.mat({color:Wt("#c8302c")}),0,-.18,0);a.add(o),this.head.add(a),this.tail=a}else if(e.type==="guard"){let r=this.mat({color:Wt("#1d1b22")});this.head.add(Nt(new be(.44,.44,.03,16),r,0,t*.62,0)),this.head.add(Nt(new ye(.2,10,6,0,Math.PI*2,0,Math.PI/2),r,0,t*.62,0)),this.head.add(Nt(new ye(.05,5,4),this.mat({color:Wt("#d0a030")}),0,t*.62+.22,0)),this.head.add(Nt(new Le(.05,.15,5),this.mat({color:Wt("#c8302c")}),0,t*.62+.3,0))}else e.type==="lady"&&(this.head.add(Nt(new ye(.13,8,6),n,0,-.05,-t*.95)),this.head.add(Nt(new ee(.3,.025,.025),this.mat({color:Wt("#e0b040")}),0,-.04,-t*1.1)))}buildWeapon(t){let e=this.handR,n=new le;if(t==="sword"){let i=this.mat({color:Wt("#dfe6ee"),emissive:Wt("#000000")}),r=this.mat({color:Wt("#2a2030")}),a=this.mat({color:Wt("#d9a83a")});n.add(Nt(new be(.025,.025,.18,5),r,0,.03,0)),n.add(Nt(new ee(.16,.035,.08),a,0,-.07,0));let o=Nt(new ee(.035,.78,.06),i,0,-.47,0);n.add(o),n.add(Nt(new Le(.035,.1,4),i,0,-.9,0)).rotation.x=Math.PI,this.bladeMat=i}else if(t==="club"){let i=this.mat({color:Wt("#7a4a2a")}),r=this.mat({color:Wt("#c8c0b0")}),a=Nt(new be(.11,.045,.75,7),i,0,-.32,0);a.rotation.x=Math.PI,n.add(a);for(let o=0;o<6;o++){let l=o/6*Math.PI*2;n.add(Nt(new Le(.03,.07,4),r,Math.cos(l)*.1,-.55+o%2*.1,Math.sin(l)*.1)).rotation.z=-Math.cos(l)*1.5}}else if(t==="goldclub"){let i=this.mat({color:Wt("#e0b040"),emissive:Wt("#000")}),r=Nt(new be(.14,.05,.85,8),i,0,-.36,0);r.rotation.x=Math.PI,n.add(r);for(let a=0;a<8;a++){let o=a/8*Math.PI*2;n.add(Nt(new Le(.035,.09,4),i,Math.cos(o)*.13,-.62+a%2*.12,Math.sin(o)*.13)).rotation.z=-Math.cos(o)*1.5}}else if(t==="spear"){let i=this.mat({color:Wt("#6a4a32")}),r=this.mat({color:Wt("#cfd6de")}),a=Nt(new be(.025,.025,2,5),i,0,.2,0);n.add(a),n.add(Nt(new Le(.05,.25,4),r,0,1.3,0)),n.add(Nt(new Le(.06,.1,6),this.mat({color:Wt("#c8302c")}),0,1.13,0)).rotation.x=Math.PI}n.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),e.add(n),this.weapon=n}setFlash(t){if(t!==this._lastFlash){this._lastFlash=t;for(let e of this.mats)t>0?e.emissive.setRGB(t,t*.95,t*.9):e.emissive.set(0,0,0)}}animate(t,e){let n=e.speed||0,i=xn(n/4,0,1);this.idleT+=t,i>.05&&(this.phase+=t*(6+n*1.6));let r=this.phase,a=Math.sin(r)*i,o=a*.9,l=-a*.9,c=-a*.7-.25,h=.12,d=0,u=a*.7,f=-.12,m=0,v=.08*i,g=Math.abs(Math.cos(r))*.06*i,p=Math.sin(this.idleT*2.4)*.012*(1-i);this.chest.position.y=(this.cfg.torsoH??.4)+p;let S=0,R=0,y=0;if(this.cfg.weapon==="spear"&&(c=-.35,h=.25,y=-1.2),e.attack){let T=e.attack.t,x=e.attack.kind,w=Qn(xn(T/.28,0,1)),C=Qn(xn((T-.28)/.22,0,1)),P=Qn(xn((T-.62)/.38,0,1));if(x===0||x===1){let D=x===0?1:-1,B=-1.25*D,L=1.35*D;m=ge(ge(0,B,w),L,C)*(1-P),c=ge(c,ge(-1.45,-1.55,C),(1-P)*Math.max(w,C)),h=ge(.12,.35,w)*(1-P),u=.4*(1-P),o=.35*(1-P),l=-.25*(1-P)}else c=ge(ge(c,-2.9,w),-.45,C),c=ge(c,-.25,P),d=0,v=ge(ge(0,-.25,w),.35,C)*(1-P),u=c*.9,f=-.05,g-=.05*C*(1-P),o=.4*C*(1-P),l=-.4*C*(1-P)}e.dash&&(v=.45,o=.9,l=-.7,c=.9,u=.9,g=.02),e.hurt>0&&(v=-.35*e.hurt,S=-.2*e.hurt),e.cast&&(u=-1.5,f=-.2);let E=1-Math.exp(-28*t),b=(T,x,w)=>T[x]+=(w-T[x])*E;if(b(this.legs[0].rotation,"x",l),b(this.legs[1].rotation,"x",o),b(this.armR.rotation,"x",c),b(this.armR.rotation,"z",-h),b(this.armR.rotation,"y",d),b(this.armL.rotation,"x",u),b(this.armL.rotation,"z",-f),b(this.chest.rotation,"y",m),b(this.hips.rotation,"x",v),b(this.head.rotation,"x",S),this.handR&&b(this.handR.rotation,"x",y),this.body.position.y=g,this.body.rotation.z=R,this.tail&&(this.tail.rotation.x=.25+i*.6+Math.sin(this.idleT*7)*.08*i),e.dead){this.deadT+=t;let T=Qn(xn(this.deadT/.45,0,1));this.body.rotation.x=-T*Math.PI/2,this.body.position.y=T*.15}else this.deadT=0,this.body.rotation.x=0}};function Cu(){return new ws({type:"hero",scale:1.15,skin:"#f6d6b6",robe:"#eeeae0",sleeve:"#eeeae0",cuff:"#2e4f8f",belt:"#2e4f8f",collar:"#2e4f8f",pants:"#3a3f5a",hair:"#2a2024",weapon:"sword"})}function Iu(){return new ws({type:"guard",scale:1.15,skin:"#eac8a6",robe:"#2b4374",sleeve:"#2b4374",cuff:"#c8302c",belt:"#c8302c",collar:"#c8302c",pants:"#1f2438",hair:"#1c1a1e",weapon:"spear"})}function Pu(){return new ws({type:"lady",scale:1.15,skin:"#f6d8bc",robe:"#9cc46a",sleeve:"#9cc46a",cuff:"#d84a6a",skirt:"#d8486a",pants:"#d8486a",hair:"#2a2024"})}function Lu(s="blue"){let t={blue:{skin:"#5d8fd8",hair:"#e2522e",horns:1,scale:1.12},red:{skin:"#d8574a",hair:"#2a2430",horns:2,scale:1.18},boss:{skin:"#b03a5a",hair:"#f0e8d8",horns:2,scale:2.3,horn:"#f0c040"}}[s];return new ws({type:"dokkaebi",skin:t.skin,hair:t.hair,horns:t.horns,horn:t.horn,scale:t.scale,pants:t.skin,sleeve:t.skin,legLen:.3,torsoH:.42,headR:.32,neck:.3,shoulder:.27,limb:1.35,wide:1.3,weapon:s==="boss"?"goldclub":"club",eye:"#1b1416"})}var xr=new I,Co=class{constructor(t){this.game=t,this.rig=Cu(),t.scene.add(this.rig.root),this.pos=new I(0,.12,16),this.yaw=Math.PI,this.vel=new I,this.radius=.32,this.maxHp=120,this.hp=this.maxHp,this.attack=null,this.combo=0,this.comboTimer=0,this.buffered=!1,this.dashT=0,this.dashCd=0,this.dashDir=new I,this.skillCd=0,this.skillMax=2.6,this.invuln=0,this.hurtT=0,this.dead=!1,this.stepAcc=0,this.y=this.pos.y,this.lastCombat=0}reset(){this.hp=this.maxHp,this.dead=!1,this.attack=null,this.invuln=1.5,this.rig.deadT=0}aimYaw(t){let e=this.game,n=null,i=1e9,r=t.moveLen>.1?Math.atan2(t.mx,t.mz):this.yaw;for(let a of e.enemies){if(a.dead||a.spawning)continue;let o=a.pos.x-this.pos.x,l=a.pos.z-this.pos.z,c=Math.hypot(o,l);if(c>3.6)continue;let h=Math.abs(Fi(r,Math.atan2(o,l))),d=c+h*1.5;h<1.7&&d<i&&(i=d,n=Math.atan2(o,l))}return n!==null?n:t.mouseRecent&&t.mouseWorld?Math.atan2(t.mouseWorld.x-this.pos.x,t.mouseWorld.z-this.pos.z):r}startAttack(t){if(this.dead||this.dashT>0)return;if(this.attack){this.attack.t>.4&&(this.buffered=!0);return}let e=this.combo%3;this.combo++,this.yaw=this.aimYaw(t),this.attack={t:0,kind:e,dur:e===2?.46:.34,hit:!1},this.game.audio.play(e===2?"swing3":"swing"),this.lastCombat=this.game.time}startDash(t){if(this.dead||this.dashCd>0)return;let e=t.moveLen>.1?xr.set(t.mx,0,t.mz).normalize():xr.set(Math.sin(this.yaw),0,Math.cos(this.yaw));this.dashDir.copy(e),this.yaw=Math.atan2(e.x,e.z),this.dashT=.2,this.dashCd=.5,this.invuln=Math.max(this.invuln,.3),this.attack=null,this.buffered=!1,this.game.audio.play("dash"),this.game.fx.dust(this.pos.x,this.pos.y,this.pos.z,8)}startSkill(t){this.dead||this.skillCd>0||this.dashT>0||(this.skillCd=this.skillMax,this.yaw=this.aimYaw(t),this.attack={t:0,kind:0,dur:.36,hit:!0,skill:!0},this.game.audio.play("swing3"),this.game.spawnSwordWave(this),this.lastCombat=this.game.time)}damage(t,e){if(this.invuln>0||this.dead||this.game.godMode)return!1;this.hp-=t,this.invuln=.7,this.blinkT=.7,this.hurtT=.3,this.lastCombat=this.game.time;let n=this.game;return n.fx.number(this.pos.clone().add(new I(0,1.7,0)),t,"player"),n.audio.play("hurt"),n.shake(.25),n.screenFlash(.25,"#ff3030"),e&&(xr.subVectors(this.pos,e).setY(0).normalize(),this.vel.addScaledVector(xr,7)),this.hp<=0&&(this.hp=0,this.dead=!0,n.onPlayerDeath()),!0}update(t,e){let n=this.game;this.dashCd=Math.max(0,this.dashCd-t),this.skillCd=Math.max(0,this.skillCd-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.comboTimer-=t;let i=0;if(!this.dead){let o=0;if(this.dashT>0){this.dashT-=t;let l=14*(.4+.6*(this.dashT/.2));n.world.move(this.pos,this.dashDir.x*l*t,this.dashDir.z*l*t,this.radius),i=l,Math.random()<.8&&n.fx.add.emit({x:this.pos.x+it(-.2,.2),y:this.pos.y+it(.3,1.1),z:this.pos.z+it(-.2,.2),life:.25,size:2,color:"#bfe8ff"})}else{let c=4.6*(this.attack?this.attack.skill?.1:.22:1);if(e.moveLen>.1){o=1;let h=e.mx*c,d=e.mz*c;this.vel.x=ge(this.vel.x,h,1-Math.exp(-18*t)),this.vel.z=ge(this.vel.z,d,1-Math.exp(-18*t)),this.attack||(this.yaw=bs(this.yaw,Math.atan2(e.mx,e.mz),16,t))}else this.vel.x=ge(this.vel.x,0,1-Math.exp(-14*t)),this.vel.z=ge(this.vel.z,0,1-Math.exp(-14*t));if(this.attack&&!this.attack.skill){let h=this.attack;if(h.t>.25&&h.t<.5){let d=h.kind===2?3.5:2.6;this.vel.x+=Math.sin(this.yaw)*d*t*10*(1-Math.exp(-t*5)),this.vel.z+=Math.cos(this.yaw)*d*t*10*(1-Math.exp(-t*5))}}n.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.radius),i=Math.hypot(this.vel.x,this.vel.z)}if(this.stepAcc+=i*t,this.stepAcc>1.1&&this.dashT<=0&&(this.stepAcc=0,n.fx.dust(this.pos.x,this.pos.y,this.pos.z,2)),this.attack){let l=this.attack;l.t+=t/l.dur,!l.hit&&l.t>=.36&&(l.hit=!0,n.playerSwingHit(this,l.kind)),l.t>=1&&(this.attack=null,this.buffered?(this.buffered=!1,this.startAttack(e)):this.comboTimer=.35)}else this.comboTimer<=0&&(this.combo=0)}let r=n.world.heightAt(this.pos.x,this.pos.z);this.y=ge(this.y,r,1-Math.exp(-20*t)),this.pos.y=r,!this.dead&&n.time-this.lastCombat>4&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+t*6));let a=this.rig;if(a.root.position.set(this.pos.x,this.y,this.pos.z),a.root.rotation.y=this.yaw,a.animate(t,{speed:this.dead?0:i,attack:this.attack?{t:Math.min(1,this.attack.t),kind:this.attack.kind}:null,dash:this.dashT>0,hurt:this.hurtT/.3,dead:this.dead}),this.blinkT=Math.max(0,(this.blinkT||0)-t),a.root.visible=this.dead||this.blinkT<=0||Math.floor(n.time*18)%2===0,a.setFlash(this.hurtT>.2?.6:0),a.bladeMat){let o=this.attack?.5:n.night>.5?.12:0;a.bladeMat.emissive.setRGB(o*.6,o*.9,o)}}},tx={blue:{hp:46,speed:2.7,dmg:10,range:1.45,windup:.5,recover:.6,radius:.42,rig:"blue",exp:10},red:{hp:72,speed:3.1,dmg:15,range:1.55,windup:.42,recover:.5,radius:.45,rig:"red",exp:16},wisp:{hp:28,speed:3.2,dmg:9,range:7,windup:.6,recover:1.6,radius:.35,exp:12},boss:{hp:900,speed:2.35,dmg:24,range:2.7,windup:.85,recover:.8,radius:.95,rig:"boss",exp:200}},Io=class{constructor(t,e,n,i=1){this.game=t,this.type=e;let r=this.T=tx[e],a=1+(i-1)*.25;this.maxHp=Math.round(r.hp*a),this.hp=this.maxHp,this.dmg=Math.round(r.dmg*(1+(i-1)*.15)),this.radius=r.radius,this.pos=n.clone(),this.vel=new I,this.yaw=0,this.state="spawn",this.st=0,this.attackCd=it(.4,1.2),this.hurtT=0,this.flashT=0,this.dead=!1,this.deadT=0,this.spawning=!0,this.y=n.y,this.strafe=Math.random()<.5?1:-1,this.leapCd=6,this.summoned=0,e==="wisp"?this.buildWisp():(this.rig=Lu(r.rig),t.scene.add(this.rig.root)),this.root=this.rig?this.rig.root:this.wisp,this.root.position.copy(this.pos),this.root.scale.setScalar(.01),t.fx.blueFire(n.x,n.y,n.z,e==="boss"?80:30,e==="boss"?1.2:.5),t.fx.ring(n,e==="boss"?3:1.4,"#7fd8ff",.5),t.audio.play("spawn")}buildWisp(){let t=new le,e=new Cn({color:new St("#bff4ff")}),n=new Pt(new dn(.28,1),e);t.add(n);let i=new Pt(new dn(.36,1),new Cn({color:new St("#3a8cff"),transparent:!0,opacity:.45,depthWrite:!1}));i.userData.noOutline=!0,t.add(i);let r=new Cn({color:659504});for(let a of[-1,1]){let o=new Pt(new ee(.06,.1,.04),r);o.position.set(a*.09,.03,.27),t.add(o)}this.game.scene.add(t),this.wisp=t,this.coreMat=e}get alive(){return!this.dead}center(){return xr.set(this.pos.x,this.y+(this.type==="boss"?2:this.type==="wisp"?1.3:.8),this.pos.z)}hit(t,e,n=5,i=.25){if(this.dead||this.spawning)return!1;if(this.hp-=t,this.flashT=.12,this.type!=="boss"||this.state==="chase"){let r=this.type==="boss"?n*.15:n;this.vel.addScaledVector(e,r),this.type!=="boss"&&(this.hurtT=i,this.state==="windup"&&i>=.25&&(this.state="chase",this.attackCd=.6,this.clearTele()))}return this.hp<=0&&this.die(),!0}die(){this.dead=!0,this.hp=0,this.deadT=0,this.clearTele();let t=this.game;t.audio.play("poof"),this.type==="wisp"&&(t.fx.blueFire(this.pos.x,this.y+1,this.pos.z,40,.4),t.fx.ring(new I(this.pos.x,this.y,this.pos.z),1.5,"#7fd8ff",.4)),t.onEnemyKilled(this)}clearTele(){this.tele&&(this.game.fx.removeRing(this.tele),this.tele=null)}update(t){let e=this.game,n=e.player;if(this.st+=t,this.flashT=Math.max(0,this.flashT-t),this.hurtT=Math.max(0,this.hurtT-t),this.attackCd-=t,this.leapCd-=t,this.dead){if(this.deadT+=t,this.type==="wisp")this.root.scale.setScalar(Math.max(.01,1-this.deadT*4));else if(this.rig.animate(t,{speed:0,dead:!0}),this.rig.setFlash(Math.max(0,.8-this.deadT*2)),this.deadT>.55&&!this.poofed){this.poofed=!0;let d=this.type==="boss";e.fx.smoke(this.pos.x,this.y+.3,this.pos.z,d?30:12),e.fx.blueFire(this.pos.x,this.y+.2,this.pos.z,d?60:24,d?1.4:.6),e.fx.coins(this.pos.x,this.y,this.pos.z,d?30:6),e.audio.play("coin"),this.root.visible=!1}return this.deadT<1.2}if(this.spawning){let d=Qn(xn(this.st/.7,0,1));return this.root.scale.setScalar(Math.max(.01,d)),Math.random()<.6&&e.fx.blueFire(this.pos.x,this.pos.y,this.pos.z,2,this.type==="boss"?1:.4),this.st>=.7&&(this.spawning=!1,this.state="chase",this.st=0,this.root.scale.setScalar(1),(Math.random()<.4||this.type==="boss")&&e.audio.play("laugh")),this.type==="wisp"?this.root.position.set(this.pos.x,this.pos.y+1.3*d,this.pos.z):this.place(t,0),!0}let i=n.pos.x-this.pos.x,r=n.pos.z-this.pos.z,a=Math.hypot(i,r),o=Math.atan2(i,r),l=0,c=null,h=this.T;if(this.type==="wisp")return this.updateWisp(t,a,o);if(this.vel.lengthSq()>.001&&(e.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.radius),this.vel.multiplyScalar(Math.exp(-9*t))),!(this.hurtT>0)){if(this.state==="chase"){if(this.yaw=bs(this.yaw,o,8,t),n.dead)l=0;else if(this.type==="boss"&&this.leapCd<=0&&a>4.5&&a<14)this.state="leapPrep",this.st=0,this.leapTarget=n.pos.clone(),this.tele=e.fx.ring(this.leapTarget,3.6,"#ff4a3a",1,1);else if(a>h.range*.85){let d=h.speed*(this.type==="boss"&&this.hp<this.maxHp*.4?1.25:1),u=a>3?.35*this.strafe:0,f=i/a,m=r/a,v=f-m*u,g=m+f*u;e.world.move(this.pos,v*d*t,g*d*t,this.radius),l=d}else if(this.attackCd<=0&&(this.state="windup",this.st=0,this.type==="boss")){let d=new I(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6);this.tele=e.fx.ring(d,2.6,"#ff4a3a",1,1),this.smashAt=d}}else if(this.state==="windup")this.st<h.windup*.6&&(this.yaw=bs(this.yaw,o,5,t)),c={t:.28*xn(this.st/h.windup,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/h.windup),this.type==="boss"&&this.smashAt&&(this.smashAt.set(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6),this.tele&&this.tele.m.position.set(this.smashAt.x,this.smashAt.y+.04,this.smashAt.z)),this.st>=h.windup&&(this.state="strike",this.st=0,e.audio.play("swing"));else if(this.state==="strike"){if(c={t:.28+.34*xn(this.st/.12,0,1),kind:2},!this.struck&&this.st>=.08)if(this.struck=!0,this.type==="boss")this.clearTele(),e.bossSlam(this,this.smashAt,2.6,this.dmg);else{let d=Math.sin(this.yaw),u=Math.cos(this.yaw),f=this.pos.x+d*.9,m=this.pos.z+u*.9;e.fx.dust(f,this.pos.y,m,5),Math.hypot(n.pos.x-f,n.pos.z-m)<1.05+n.radius&&Math.abs(n.pos.y-this.pos.y)<1&&n.damage(this.dmg,this.pos)}this.st>=.12&&(this.state="recover",this.st=0,this.struck=!1)}else if(this.state==="recover")c={t:.62+.38*xn(this.st/h.recover,0,1),kind:2},this.st>=h.recover&&(this.state="chase",this.st=0,this.attackCd=it(.6,1.4));else if(this.state==="leapPrep")c={t:.2*xn(this.st/.6,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/1.5),this.st>=.6&&(this.state="leap",this.st=0,this.leapFrom=this.pos.clone(),e.audio.play("dash"),e.fx.dust(this.pos.x,this.pos.y,this.pos.z,14));else if(this.state==="leap"){let d=xn(this.st/.9,0,1);if(this.tele&&(this.tele.mat.uniforms.uProg.value=.4+d*.6),this.pos.x=ge(this.leapFrom.x,this.leapTarget.x,Qn(d)),this.pos.z=ge(this.leapFrom.z,this.leapTarget.z,Qn(d)),this.jumpY=Math.sin(d*Math.PI)*4.5,c={t:.28,kind:2},d>=1){this.jumpY=0,this.clearTele();let u=e.world.heightAt(this.pos.x,this.pos.z);e.world.isBlocked(this.pos.x,this.pos.z,this.radius*.5,u)&&this.pos.copy(this.leapFrom),e.bossSlam(this,this.pos.clone(),3.6,Math.round(this.dmg*1.2),!0),this.state="recover",this.st=0,this.leapCd=it(6,9)}}}return this.place(t,l,c),!0}updateWisp(t,e,n){let i=this.game,r=i.player;this.yaw=bs(this.yaw,n,6,t),this.vel.lengthSq()>.001&&(i.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.radius),this.vel.multiplyScalar(Math.exp(-6*t)));let a=r.pos.x-this.pos.x,o=r.pos.z-this.pos.z,l=a/(e||1),c=o/(e||1),h=0,d=0;this.state==="chase"?(e>7.5?(h=l,d=c):e<4.5&&(h=-l,d=-c),h+=-c*this.strafe*.6,d+=l*this.strafe*.6,Math.random()<t*.3&&(this.strafe*=-1),this.attackCd<=0&&e<10&&!r.dead&&(this.state="windup",this.st=0,i.audio.play("orb"))):this.state==="windup"&&(Math.random()<.8&&i.fx.add.emit({x:this.pos.x+it(-.6,.6),y:this.y+1.3+it(-.6,.6),z:this.pos.z+it(-.6,.6),vx:0,vy:0,vz:0,life:.3,size:2,color:"#8fe8ff"}),this.st>=this.T.windup&&(i.spawnOrb(this),this.state="chase",this.st=0,this.attackCd=it(2,3)));let u=Math.hypot(h,d);u>.01&&i.world.move(this.pos,h/u*this.T.speed*t,d/u*this.T.speed*t,this.radius);let f=i.world.heightAt(this.pos.x,this.pos.z);this.y=ge(this.y,f,1-Math.exp(-6*t));let m=Math.sin(i.time*3+this.strafe)*.15;this.root.position.set(this.pos.x,this.y+1.3+m,this.pos.z),this.root.rotation.y=this.yaw;let v=this.state==="windup"?1+Math.sin(this.st*40)*.12+this.st*.4:1;return this.root.scale.setScalar(v),this.coreMat.color.set(this.flashT>0?"#ffffff":this.state==="windup"?"#e8ffff":"#9feaff"),Math.random()<.7&&i.fx.add.emit({x:this.pos.x+it(-.15,.15),y:this.y+1.45+m,z:this.pos.z+it(-.15,.15),vx:it(-.3,.3),vy:it(.8,1.6),vz:it(-.3,.3),life:it(.3,.6),size:it(2,4),endSize:1,color:"#7fe0ff",color2:"#1a40ff"}),!0}place(t,e,n=null){let r=this.game.world.heightAt(this.pos.x,this.pos.z);this.y=ge(this.y,r,1-Math.exp(-18*t)),this.pos.y=r;let a=this.rig;a.root.position.set(this.pos.x,this.y+(this.jumpY||0),this.pos.z),a.root.rotation.y=this.yaw,a.animate(t,{speed:e,attack:n,hurt:this.hurtT>0?this.hurtT/.25:0}),this.flashT>0?a.setFlash(.9):this.state==="windup"&&this.type!=="boss"?a.setFlash(Math.floor(this.st*14)%2?.35:0):this.state==="windup"||this.state==="leapPrep"?a.setFlash(Math.floor(this.st*10)%2?.25:0):a.setFlash(0)}dispose(){this.clearTele(),this.game.scene.remove(this.root)}},_r=class{constructor(t,e,n,i,r,a,o){this.game=t,this.rig=e==="guard"?Iu():Pu(),this.pos=new I(n,t.world.heightAt(n,i),i),this.baseYaw=r,this.yaw=r,this.name=a,this.lines=o,this.radius=.4,t.scene.add(this.rig.root),t.world.circles.push({x:n,z:i,r:.4,y:this.pos.y})}update(t){let e=this.game.player,i=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<4?Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z):this.baseYaw;this.yaw=bs(this.yaw,i,4,t),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.yaw,this.rig.animate(t,{speed:0})}},Po=class{constructor(t,e){this.game=t;let n=this.root=new le,i=kt({color:new St("#8a5a3a")}),r=kt({color:new St("#e8d8b8")}),a=kt({color:new St("#2a2020")}),o=new Pt(new ye(.1,6,5),i);o.scale.set(.9,.8,1.2),o.position.y=.1;let l=new Pt(new ye(.075,6,4),r);l.position.set(0,.07,.03);let c=new Pt(new ye(.065,6,5),i);c.position.set(0,.19,.08);let h=new Pt(new Le(.02,.05,4),a);h.rotation.x=Math.PI/2,h.position.set(0,.18,.15);let d=new Pt(new ee(.06,.015,.1),a);d.position.set(0,.12,-.13),d.rotation.x=-.4,this.wings=[];for(let u of[-1,1]){let f=new le;f.position.set(u*.07,.13,0);let m=new Pt(new ee(.14,.015,.1),i);m.position.x=u*.06,f.add(m),n.add(f),this.wings.push(f)}this.head=c,n.add(o,l,c,h,d),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),t.scene.add(n),this.pos=e.clone(),this.yaw=it(0,Math.PI*2),this.state="idle",this.t=it(0,2),this.hopY=0,this.vel=new I}update(t){let e=this.game,n=e.player;this.t-=t;let i=Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z);if(this.state!=="fly"&&this.state!=="gone"&&(i<2.6||e.alarm>0)){this.state="fly";let r=this.pos.x-n.pos.x,a=this.pos.z-n.pos.z,o=Math.hypot(r,a)||1;this.vel.set(r/o*4+it(-1,1),4.5,a/o*4+it(-1,1)),this.yaw=Math.atan2(this.vel.x,this.vel.z)}if(this.state==="idle")this.head.position.y=.19-(Math.sin(e.time*9+this.yaw*10)>.6?.05:0),this.t<=0&&(this.t=it(.4,1.6),Math.random()<.6&&(this.state="hop",this.hopT=0,this.yaw+=it(-1.2,1.2)));else if(this.state==="hop"){this.hopT+=t;let r=this.hopT/.2;this.hopY=Math.sin(Math.min(1,r)*Math.PI)*.12;let a=this.pos.x+Math.sin(this.yaw)*t*1.2,o=this.pos.z+Math.cos(this.yaw)*t*1.2;e.world.isBlocked(a,o,.1,this.pos.y)||(this.pos.x=a,this.pos.z=o),r>=1&&(this.state="idle",this.hopY=0)}else if(this.state==="fly"){this.pos.addScaledVector(this.vel,t),this.vel.y+=t*1.5;for(let r of this.wings)r.rotation.z=Math.sin(e.time*50)*1.1*(r.position.x>0?1:-1);this.pos.y>14&&(this.state="gone",this.root.visible=!1,this.t=it(8,16))}else if(this.state==="gone"&&this.t<=0&&e.alarm<=0){let r=e.world.randomWalkable(n.pos.x,n.pos.z,8,15);if(r){this.pos.copy(r),this.state="idle",this.root.visible=!0;for(let a of this.wings)a.rotation.z=0}else this.t=2}(this.state==="idle"||this.state==="hop")&&(this.pos.y=e.world.heightAt(this.pos.x,this.pos.z)),this.root.position.set(this.pos.x,this.pos.y+this.hopY,this.pos.z),this.root.rotation.y=this.yaw}};var Ve=(s,t,e)=>new I(s,t,e),dc=class{constructor(){this.pixel=new So(document.getElementById("stage"));let t=this.scene=new Ti;t.background=new St("#3b4a3a"),this.time=0,this.state="title",this.night=0,this.nightTarget=0,this.hitstop=0,this.shakeAmt=0,this.kills=0,this.hitCombo=0,this.lastHitTime=-10,this.alarm=0,this.enemies=[],this.projectiles=[],this.spawnQueue=[],this.wave=0,this.round=0,this.stage=0,this.waveActive=!1,this.focus=Ve(0,0,10),this.lead=Ve(),this.setupLights(),this.world=new Eo(t),this.fx=new To(t,this.pixel),this.audio=new Ao,this.ui=new Ro(this),this.player=new Co(this),this.npcs=[new _r(this,"guard",-12.4,6.4,.6,"\uC218\uBB38\uC7A5 \uBC15\uB3CC\uC1E0",[]),new _r(this,"lady",19.2,7.5,-.9,"\uB098\uC778 \uC5F0\uC774",["\uC5B4\uBA38, \uAC80\uAC1D\uB2D8. \uC774 \uAD81\uC740 \uBC24\uB9CC \uB418\uBA74 \uB3C4\uAE68\uBE44\uBD88\uC774 \uB5A0\uB2E4\uB140\uC694.","\uB3C4\uAE68\uBE44\uB4E4\uC740 \uC7A5\uB09C\uC774 \uC2EC\uD558\uC9C0\uB9CC, \uD63C\uCB50\uC744 \uB0B4\uC8FC\uBA74 \uAE08\uBC29 \uB2EC\uC544\uB09C\uB2F5\uB2C8\uB2E4.","\uD478\uB978 \uBD88\uB369\uC774\uB97C \uC3D8\uB294 \uB140\uC11D\uC740 \uAC80\uC73C\uB85C \uCCD0\uB0B4\uBA74 \uD295\uACA8\uB0BC \uC218 \uC788\uB300\uC694!","(N \uD0A4\uB85C \uB0AE\uACFC \uBC24\uC744 \uBC14\uAFD4 \uBCFC \uC218 \uC788\uC5B4\uC694. \uC2F8\uC6B0\uB294 \uC911\uC5D4 \uC548 \uB3FC\uC694.)"])],this.birds=[];for(let[e,n]of[[-6,6],[-5.4,6.6],[6.5,15],[7,14.3],[-15,9],[14,-.5],[.5,-9.5]])this.birds.push(new Po(this,Ve(e,this.world.heightAt(e,n),n)));this.setupInput(),this.updateQuest(),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}setupLights(){let t=this.scene;this.hemi=new Ks("#dfe9ff","#8a7c62",1.15),t.add(this.hemi);let e=this.sun=new er("#fff0d6",2.5);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-30,n.right=30,n.top=30,n.bottom=-30,n.near=1,n.far=140,e.shadow.bias=-6e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sunOffset=Ve(-16,30,14),this.points=[];for(let i=0;i<8;i++){let r=new tr("#ffb35c",0,9,1.4);t.add(r),this.points.push(r)}this.lightTimer=0}updateLights(t){let e=this.night;Mn.night.value=e;let n=(f,m)=>new St(f).lerp(new St(m),e);this.sun.color.copy(n("#fff0d6","#8ea6ff")),this.sun.intensity=ge(2.5,.9,e),this.hemi.color.copy(n("#dfe9ff","#55669e")),this.hemi.groundColor.copy(n("#8a7c62","#262438")),this.hemi.intensity=ge(1.15,.95,e),this.scene.background.copy(n("#3b4a3a","#0e1220")),this.world.setNight(e);let i=this.focus,r=ex.copy(this.sunOffset).normalize(),a=nx.crossVectors(Du.set(0,1,0),r).normalize(),o=Du.crossVectors(r,a).normalize(),l=60/2048,c=Math.round(i.dot(a)/l)*l,h=Math.round(i.dot(o)/l)*l,d=i.dot(r),u=ix.copy(a).multiplyScalar(c).addScaledVector(o,h).addScaledVector(r,d);if(this.sun.target.position.copy(u),this.sun.position.copy(u).add(this.sunOffset),this.sun.target.updateMatrixWorld(),this.lightTimer-=t,this.lightTimer<=0){this.lightTimer=.25;let f=[...this.world.lanterns].sort((m,v)=>m.distanceToSquared(i)-v.distanceToSquared(i));for(let m=0;m<6;m++)this.points[m].position.copy(f[m]);this.points[6].position.copy(this.world.hallLightPos[0]),this.points[7].position.copy(this.world.hallLightPos[1])}for(let f=0;f<8;f++){let m=1+Math.sin(this.time*9+f*1.7)*.06+Math.sin(this.time*23+f)*.04;this.points[f].intensity=e*(f<6?22:30)*m,this.points[f].distance=f<6?8:11}}setupInput(){this.keys=new Set,this.input={mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null},this.mouse={x:0,y:0,t:-10},window.addEventListener("keydown",e=>{if(e.repeat){this.keys.add(e.code);return}this.keys.add(e.code),this.onKey(e.code,e)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear());let t=document.getElementById("app");t.addEventListener("mousemove",e=>{this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time}),t.addEventListener("mousedown",e=>{if(this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time,this.state==="title"){this.start();return}if(this.audio.unlock(),this.ui.inDialog){this.ui.advance();return}this.state==="play"&&(e.button===0&&this.player.startAttack(this.readInput()),e.button===2&&this.player.startSkill(this.readInput()))}),t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("wheel",e=>{this.pixel.zoom(e.deltaY>0?-1:1)},{passive:!0}),this.setupTouch()}setupTouch(){let t=document.getElementById("touch");if(!("ontouchstart"in window))return;t.classList.add("on");let e=document.getElementById("stick"),n=e.firstElementChild;this.touchMove={x:0,z:0};let i=null,r=0,a=0,o=document.getElementById("stick-area");o.addEventListener("touchstart",c=>{this.state==="title"&&this.start();let h=c.changedTouches[0];i=h.identifier,r=h.clientX,a=h.clientY,e.style.left=r+"px",e.style.top=a+"px",e.classList.add("show"),c.preventDefault()},{passive:!1}),o.addEventListener("touchmove",c=>{for(let h of c.changedTouches)if(h.identifier===i){let d=h.clientX-r,u=h.clientY-a,f=Math.hypot(d,u),m=50;f>m&&(d*=m/f,u*=m/f),n.style.transform=`translate(${d}px, ${u}px)`,this.touchMove.x=d/m,this.touchMove.z=u/m}c.preventDefault()},{passive:!1});let l=c=>{for(let h of c.changedTouches)h.identifier===i&&(i=null,this.touchMove.x=0,this.touchMove.z=0,n.style.transform="",e.classList.remove("show"))};o.addEventListener("touchend",l),o.addEventListener("touchcancel",l);for(let c of document.querySelectorAll("#touch [data-k]"))c.addEventListener("touchstart",h=>{h.preventDefault(),this.state==="title"?this.start():this.onKey(c.dataset.k)},{passive:!1})}readInput(){let t=this.keys,e=0,n=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(n-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(n+=1),this.touchMove&&(this.touchMove.x||this.touchMove.z)&&(e=this.touchMove.x,n=this.touchMove.z);let i=Math.hypot(e,n),r=this.input;return r.moveLen=Math.min(1,i),r.mx=i>0?e/Math.max(1,i):0,r.mz=i>0?n/Math.max(1,i):0,i>1&&(r.mx=e/i,r.mz=n/i),r.mouseRecent=this.time-this.mouse.t<3,r.mouseWorld=r.mouseRecent?this.pixel.unproject(this.mouse.x,this.mouse.y,this.player.pos.y+.6):null,(this.ui.inDialog||this.state!=="play")&&(r.moveLen=0,r.mx=r.mz=0),r}onKey(t){if(this.state==="title"){this.start();return}if(this.audio.unlock(),t==="KeyM"){let n=this.audio.toggleMusic();this.ui.toast(n?"\uC74C\uC545 \uCF1C\uC9D0":"\uC74C\uC545 \uAEBC\uC9D0");return}if(t==="Equal"||t==="NumpadAdd"){this.pixel.zoom(1);return}if(t==="Minus"||t==="NumpadSubtract"){this.pixel.zoom(-1);return}if(t==="KeyO"){this.pixel.compMat.uniforms.outline.value=this.pixel.compMat.uniforms.outline.value?0:1,this.ui.toast(this.pixel.compMat.uniforms.outline.value?"\uC678\uACFD\uC120 \uCF1C\uC9D0":"\uC678\uACFD\uC120 \uAEBC\uC9D0");return}if(this.state==="dead"){(t==="KeyR"||t==="Enter"||t==="act")&&this.retry();return}if(this.ui.inDialog){["KeyE","Space","Enter","KeyJ","KeyZ","act","atk"].includes(t)&&this.ui.advance();return}let e=this.readInput();switch(t){case"KeyJ":case"KeyZ":case"atk":this.player.startAttack(e);break;case"Space":case"ShiftLeft":case"ShiftRight":case"KeyL":case"dash":this.player.startDash(e);break;case"KeyK":case"KeyX":case"skill":this.player.startSkill(e);break;case"KeyE":case"Enter":case"act":this.interact();break;case"KeyN":if(this.waveActive){this.ui.toast("\uB3C4\uAE68\uBE44\uAC00 \uB0A0\uB6F0\uB294 \uC911\uC5D4 \uC2DC\uAC04\uC744 \uBC14\uAFC0 \uC218 \uC5C6\uC5B4\uC694");break}this.nightTarget=this.nightTarget>.5?0:1,this.ui.toast(this.nightTarget?"\uBC24\uC774 \uCC3E\uC544\uC635\uB2C8\uB2E4\u2026":"\uB0A0\uC774 \uBC1D\uC544\uC635\uB2C8\uB2E4");break;case"KeyG":this.godMode=!this.godMode,this.ui.toast(this.godMode?"\uBB34\uC801 (\uB514\uBC84\uADF8)":"\uBB34\uC801 \uD574\uC81C");break}}start(){this.audio.unlock(),this.state="play",document.getElementById("title").classList.add("hide"),this.ui.showHud(!0),this.ui.banner("\u6708\u4E0B\u5BAE","\uB3C4\uAE68\uBE44 \uC57C\uD589",2.8,"title-banner")}findInteract(){let t=this.player.pos,e=null,n=2.4;for(let i of this.npcs){let r=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);r<n&&(n=r,e={kind:"npc",npc:i,label:"\uB300\uD654",promptPos:i.pos.clone().add(Ve(0,2.1,0))})}for(let i of this.world.drums){let r=Math.hypot(i.pos.x-t.x,i.pos.z-t.z);r<2.9&&r-.5<n&&(n=r-.5,e={kind:"drum",drum:i,label:this.waveActive?"\uBD81 \uCE58\uAE30":"\uBD81 \uC6B8\uB9AC\uAE30",promptPos:i.pos.clone().add(Ve(0,4,0))})}return e}interact(){let t=this.nearInteract;if(t)if(t.kind==="npc"){let e=t.npc,n=e.lines;e.name.startsWith("\uC218\uBB38\uC7A5")&&(n=this.guardLines()),this.ui.dialog(e.name,n,()=>{e.name.startsWith("\uC218\uBB38\uC7A5")&&this.stage===0&&(this.stage=1,this.updateQuest())})}else t.kind==="drum"&&(this.player.yaw=Math.atan2(t.drum.pos.x-this.player.pos.x,t.drum.pos.z-this.player.pos.z),this.player.startAttack(this.readInput()))}guardLines(){return this.stage===0?["\uC5B4\uC774, \uAC70\uAE30 \uC80A\uC740 \uAC80\uAC1D! \uB9C8\uCE68 \uC798 \uC654\uC18C.","\uD574\uB9CC \uC9C0\uBA74 \uC774 \uAD81\uAD90 \uB9C8\uB2F9\uC5D0 \uB3C4\uAE68\uBE44 \uB188\uB4E4\uC774 \uB5BC\uB85C \uBAB0\uB824\uC640 \uB09C\uC7A5\uD310\uC744 \uCE5C\uB2E4\uC624.","\uC800\uAE30 \uC800 \uD070 \uBD81\uC774 \uBCF4\uC774\uC2DC\uC624? \uBD81\uC744 \uB465\u2014 \uD558\uACE0 \uC6B8\uB9AC\uBA74 \uC228\uC5B4 \uC788\uB358 \uB188\uB4E4\uC774 \uC8C4\uB2E4 \uD280\uC5B4\uB098\uC62C \uAC8C\uC694.","\uB188\uB4E4\uC744 \uBAA8\uC870\uB9AC \uD63C\uCB50\uB0B4 \uC8FC\uC2DC\uC624! \uB9C8\uC9C0\uB9C9\uC5D4 \uB3C4\uAE68\uBE44 \uB300\uC655\uC774 \uB098\uC628\uB2E4\uB294 \uC18C\uBB38\uC774 \uC788\uC73C\uB2C8 \uC870\uC2EC\uD558\uACE0.","(\uBD81 \uC55E\uC5D0\uC11C E \uD0A4, \uD639\uC740 \uAC80\uC73C\uB85C \uBD81\uC744 \uBCA0\uC5B4 \uC6B8\uB9AC\uC138\uC694)"]:this.waveActive?["\uC9C0\uAE08 \uD55C\uAC00\uD558\uAC8C \uC774\uC57C\uAE30\uD560 \uB54C\uAC00 \uC544\uB2C8\uC624! \uB3C4\uAE68\uBE44\uB4E4\uC774 \uBAB0\uB824\uC624\uACE0 \uC788\uC18C!"]:this.round>=1?[`\uD5C8\uD5C8, \uB300\uC655\uAE4C\uC9C0 \uCAD3\uC544\uB0B4\uB2E4\uB2C8! \uBC8C\uC368 ${this.kills}\uB9C8\uB9AC\uB098 \uD63C\uCB50\uC744 \uB0C8\uAD6C\uB824.`,"\uBD81\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC62C \uAC70\uC694. \uAC01\uC624\uAC00 \uB418\uC5C8\uB2E4\uBA74 \uC5B8\uC81C\uB4E0."]:["\uBD81\uC740 \uC800\uAE30 \uC788\uC18C. \uB465\u2014 \uD558\uACE0 \uC6B8\uB824 \uBCF4\uC2DC\uC624!"]}updateQuest(){let t=this.ui;if(this.stage===0)t.setQuest("\uC784\uBB34","\uC67C\uCABD \uBD81 \uC606\uC758 <b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uB9D0\uC744 \uAC78\uC790");else if(this.stage===1)t.setQuest("\uC784\uBB34","<b>\uD070 \uBD81</b>\uC744 \uC6B8\uB824 \uB3C4\uAE68\uBE44\uB97C \uBD88\uB7EC\uB0B4\uC790");else if(this.stage===2){let e=this.enemies.filter(n=>!n.dead).length+this.spawnQueue.length;t.setQuest(`\uB3C4\uAE68\uBE44 \uC57C\uD589 \xB7 \uC81C ${this.wave} \uD30C`,`\uB0A8\uC740 \uB3C4\uAE68\uBE44 <b>${e}</b>`)}else t.setQuest("\uC790\uC720 \uD0D0\uBC29",`\uBD81\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 <b>${this.round+1}\uD68C\uCC28</b> \uB3C4\uAE68\uBE44\uAC00 \uBAB0\uB824\uC628\uB2E4`)}drumHit(t){t.shake=1,this.audio.play("drum"),this.shake(.35),this.alarm=3,this.fx.ring(Ve(t.pos.x,0,t.pos.z),5,"#fff2c0",.6),this.fx.spark(t.pos.x,2.2,t.pos.z,14,"#fff2c0",5),!this.waveActive&&(this.stage===1||this.stage===3||this.stage===0)&&this.startNight()}startNight(){this.waveActive=!0,this.stage=2,this.wave=0,this.nightTarget=1,this.audio.mood="battle",this.ui.banner("\uB3C4\uAE68\uBE44 \uC57C\uD589",this.round>0?`${this.round+1}\uD68C\uCC28 \u2014 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC628\uB2E4`:"\uBD81\uC18C\uB9AC\uC5D0 \uB3C4\uAE68\uBE44\uB4E4\uC774 \uAE68\uC5B4\uB09C\uB2E4\u2026",3,"night-banner"),setTimeout(()=>this.nextWave(),3200)}waveDef(t){let e=this.round,n=[],i=(r,a)=>{for(let o=0;o<a;o++)n.push(r)};return t===1?(i("blue",4+e),i("red",e)):t===2?(i("blue",3+e),i("red",2+e),i("wisp",2+Math.floor(e/2))):(i("boss",1),i("red",2+e),i("wisp",e)),n}nextWave(){if(this.state==="dead")return;this.wave++;let t=this.waveDef(this.wave),e=this.wave===3;this.ui.banner(`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C`,e?"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8 \uCD9C\uD604!":`\uB3C4\uAE68\uBE44 ${t.length}\uB9C8\uB9AC`,2.4,e?"boss-banner":""),this.audio.play(e?"drum":"wave");let n=.6;for(let i of t)this.spawnQueue.push({type:i,at:this.time+n}),n+=i==="boss"?1.2:it(.3,.6);this.updateQuest()}spawnEnemy(t){let e=this.player.pos,n=t==="boss"?this.world.randomWalkable(e.x,e.z,6,9):this.world.randomWalkable(e.x,e.z,5,10);n||(n=Ve(0,.12,5));let i=new Io(this,t,n,1+this.round);t==="boss"&&(i.name=this.round>0?`\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8 +${this.round}`:"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8",this.ui.setBoss(i),this.shake(.5)),this.enemies.push(i)}playerSwingHit(t,e){let n=e===2?2.25:1.95,i=e===2?.95:1.35,r=t.yaw,a=Ve(t.pos.x,t.y+.72,t.pos.z);this.fx.slash(a,r,e,{dur:.16,outer:n,color:e===2?"#fff6d0":"#e8fbff"});let o=!1;for(let l of this.enemies){if(l.dead||l.spawning)continue;let c=l.pos.x-t.pos.x,h=l.pos.z-t.pos.z,d=Math.hypot(c,h),u=l.type==="wisp"?l.y+1.3:l.y;if(Math.abs(u-t.y)>2.2||d>n+l.radius||d>.6&&Math.abs(Fi(r,Math.atan2(c,h)))>i)continue;let f=Math.random()<.15,m=Math.round((e===2?it(24,30):it(13,17))*(f?1.8:1));this.damageEnemy(l,m,f,e===2?9:5.5,e===2?.4:.25),o=!0}for(let l of this.projectiles){if(l.owner!=="enemy"||l.dead)continue;let c=l.pos.x-t.pos.x,h=l.pos.z-t.pos.z;Math.hypot(c,h)<n+.3&&Math.abs(Fi(r,Math.atan2(c,h)))<i+.3&&(l.owner="player",l.dir.set(Math.sin(r),0,Math.cos(r)),l.speed*=1.6,l.dmg=30,l.life=1.2,l.hitSet=new Set,this.audio.play("block"),this.fx.spark(l.pos.x,l.pos.y,l.pos.z,10,"#bff4ff",5),this.ui.toast("\uD295\uACA8\uB0B4\uAE30!",.8),this.hitstop=Math.max(this.hitstop,.06))}for(let l of this.world.drums){let c=l.pos.x-t.pos.x,h=l.pos.z-t.pos.z;Math.hypot(c,h)<n+1.3&&Math.abs(Fi(r,Math.atan2(c,h)))<i&&(this.drumHit(l),o=!0)}o&&this.shake(e===2?.22:.12)}damageEnemy(t,e,n,i,r){let a=this.player,o=Ve(t.pos.x-a.pos.x,0,t.pos.z-a.pos.z).normalize();if(!t.hit(e,o,i,r))return;let l=t.center().clone();if(this.fx.spark(l.x,l.y,l.z,n?18:10,n?"#fff07a":"#ffffff",n?8:6),this.fx.number(l.clone().add(Ve(0,.5*(t.type==="boss"?2:1),0)),e,n?"crit":"normal"),this.audio.play(n?"crit":"hit"),this.hitstop=Math.max(this.hitstop,n?.085:.05),this.hitCombo=this.time-this.lastHitTime<2?this.hitCombo+1:1,this.lastHitTime=this.time,a.lastCombat=this.time,t.type==="boss"&&!t.dead){let c=t.hp/t.maxHp;if(c<.6&&t.summoned===0||c<.3&&t.summoned===1){t.summoned++,this.audio.play("laugh"),this.ui.toast('\uB450\uC5B5\uC2DC\uB2C8: "\uC598\uB4E4\uC544, \uB098\uC640\uB77C \uB69D\uB531!"',2);for(let h=0;h<2+this.round;h++)this.spawnQueue.push({type:h===0?"red":"blue",at:this.time+.3+h*.3})}}}spawnSwordWave(t){let e=Ve(Math.sin(t.yaw),0,Math.cos(t.yaw)),n=Ve(t.pos.x,t.y+.75,t.pos.z).addScaledVector(e,.6),i={owner:"player",kind:"wave",pos:n,dir:e,speed:15,life:.55,dmg:34,hitSet:new Set,radius:1.2};i.vis=this.fx.slash(n,t.yaw,0,{inner:.3,outer:1.5,len:2.3,dur:.55,color:"#9fe8ff",static:!0,move:r=>r.g.position.copy(i.pos)}),this.projectiles.push(i),this.shake(.1)}spawnOrb(t){let e=this.player,n=Ve(t.pos.x,t.y+1.3,t.pos.z),r=Ve(e.pos.x+e.vel.x*.3,e.y+.7,e.pos.z+e.vel.z*.3).sub(n).setY(0).normalize(),a=new Pt(new dn(.2,1),new Cn({color:"#d8fbff"}));a.position.copy(n),this.scene.add(a),this.projectiles.push({owner:"enemy",kind:"orb",pos:n,dir:r,speed:7,life:3,dmg:t.dmg,mesh:a,radius:.45,hitSet:new Set,y:n.y})}bossSlam(t,e,n,i,r=!1){this.audio.play("slam"),this.shake(r?.9:.6),this.alarm=2,this.fx.ring(e,n*1.15,"#ffd6a0",.45),this.fx.ring(e,n*.7,"#ffffff",.3);for(let o=0;o<40;o++){let l=o/40*Math.PI*2;this.fx.norm.emit({x:e.x+Math.cos(l)*n*.6,y:e.y+.1,z:e.z+Math.sin(l)*n*.6,vx:Math.cos(l)*4,vy:it(1,3),vz:Math.sin(l)*4,g:6,drag:3,life:it(.4,.8),size:4,endSize:1,color:"#c8bca0"})}for(let o=0;o<18;o++)this.fx.norm.emit({x:e.x+it(-1,1),y:e.y+.2,z:e.z+it(-1,1),vx:it(-3,3),vy:it(4,8),vz:it(-3,3),g:20,life:1,size:3,color:"#8a8478",floor:e.y});let a=this.player;Math.hypot(a.pos.x-e.x,a.pos.z-e.z)<n+a.radius&&Math.abs(a.pos.y-e.y)<1.2&&a.damage(i,e)}onEnemyKilled(t){this.kills++,this.updateQuest(),t.type==="boss"&&(this.hitstop=.25,this.shake(1),this.ui.flash("#ffffff",.6))}checkWave(){!this.waveActive||this.wave===0||this.spawnQueue.length||this.enemies.some(t=>!t.dead)||this.waveClearing||(this.waveClearing=!0,this.wave>=3?setTimeout(()=>this.victory(),1500):(this.ui.banner("\uACA9\uD1F4!",`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C \uC644\uB8CC`,1.8),setTimeout(()=>{this.waveClearing=!1,this.nextWave()},2600)))}victory(){this.waveClearing=!1,this.waveActive=!1,this.round++,this.stage=3,this.nightTarget=0,this.audio.mood="day",this.audio.play("victory"),this.player.hp=this.player.maxHp,this.ui.banner("\uC2B9\uB9AC","\uB3C4\uAE68\uBE44\uB4E4\uC774 \uB2EC\uC544\uB098\uACE0 \uB3D9\uC774 \uD2BC\uB2E4",4,"win-banner"),this.updateQuest()}onPlayerDeath(){this.state="dead",setTimeout(()=>document.getElementById("gameover").classList.add("show"),900)}retry(){document.getElementById("gameover").classList.remove("show"),this.state="play",this.player.reset();for(let t of this.enemies)t.dispose();this.enemies=[],this.spawnQueue=[];for(let t of this.projectiles)t.mesh&&this.scene.remove(t.mesh);this.projectiles=[],this.ui.setBoss(null),this.waveClearing=!1,this.waveActive&&(this.wave=Math.max(0,this.wave-1),setTimeout(()=>this.nextWave(),1200))}shake(t){this.shakeAmt=Math.min(1.2,Math.max(this.shakeAmt,t))}screenFlash(t,e){this.ui.flash(e,.35)}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){let n=this.projectiles[e];if(n.life-=t,n.pos.addScaledVector(n.dir,n.speed*t),n.kind==="orb"){n.mesh.position.copy(n.pos),n.mesh.material.color.set(n.owner==="player"?"#ffffff":"#d8fbff"),Math.random()<.9&&this.fx.add.emit({x:n.pos.x+it(-.1,.1),y:n.pos.y+it(-.1,.1),z:n.pos.z+it(-.1,.1),vx:it(-.3,.3),vy:it(.2,.8),vz:it(-.3,.3),life:it(.2,.45),size:3,endSize:1,color:"#8ff0ff",color2:"#1a40ff"});let i=this.world.heightAt(n.pos.x,n.pos.z);(i>n.pos.y-.4||this.world.isBlocked(n.pos.x,n.pos.z,.05,i)&&i>n.pos.y-1)&&(n.life=0)}else n.kind==="wave"&&Math.random()<.9&&this.fx.add.emit({x:n.pos.x+it(-.6,.6),y:n.pos.y+it(-.1,.1),z:n.pos.z+it(-.6,.6),vx:0,vy:.3,vz:0,life:.3,size:2,color:"#bff4ff"});if(n.owner==="player")for(let i of this.enemies){if(i.dead||i.spawning||n.hitSet.has(i))continue;if(Math.hypot(i.pos.x-n.pos.x,i.pos.z-n.pos.z)<n.radius+i.radius){n.hitSet.add(i);let a=Math.random()<.2;this.damageEnemy(i,Math.round(n.dmg*(a?1.8:1)*it(.9,1.1)),a,7,.35),n.kind==="orb"&&(n.life=0)}}else{let i=this.player;Math.hypot(i.pos.x-n.pos.x,i.pos.z-n.pos.z)<n.radius+i.radius*.5&&i.dashT<=0&&i.damage(n.dmg,n.pos)&&(n.life=0)}n.life<=0&&(n.mesh&&(this.scene.remove(n.mesh),this.fx.blueFire(n.pos.x,n.pos.y-.2,n.pos.z,10,.2)),this.projectiles.splice(e,1))}}separate(){let t=[this.player,...this.enemies.filter(e=>!e.dead&&e.type!=="wisp")];for(let e=0;e<t.length;e++)for(let n=e+1;n<t.length;n++){let i=t[e],r=t[n],a=r.pos.x-i.pos.x,o=r.pos.z-i.pos.z,l=Math.hypot(a,o),c=i.radius+r.radius;if(l<c&&l>1e-4){let h=(c-l)*.5,d=a/l,u=o/l,f=i===this.player?.3:i.type==="boss"?.1:1,m=r.type==="boss"?.1:1;this.world.move(i.pos,-d*h*f,-u*h*f,i.radius),this.world.move(r.pos,d*h*m,u*h*m,r.radius)}}}ambient(t){let e=this.focus,n=this.night;Math.random()<t*6*(1-n)&&this.fx.norm.emit({x:e.x+it(-18,18),y:it(4,8),z:e.z+it(-16,10),vx:it(.4,1),vy:-.6,vz:it(-.2,.3),wob:1.2,life:7,size:2,color:Math.random()<.6?"#f6c8d4":"#fff4f0",floor:.02,alpha:.95}),Math.random()<t*14*n&&this.fx.add.emit({x:e.x+it(-18,18),y:it(.4,2.5),z:e.z+it(-14,10),vx:it(-.3,.3),vy:it(-.1,.2),vz:it(-.3,.3),wob:.8,life:it(2.5,5),size:2,color:Math.random()<.3?"#9ff0ff":"#d8ff8a",flicker:.8})}loop(t){requestAnimationFrame(this.loop);let e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.audio.update();let n=e;this.hitstop>0&&(this.hitstop-=e,n=e*.05),this.time+=n,Mn.time.value+=n,this.night=Ui(this.night,this.nightTarget,1.2,e),Math.abs(this.night-this.nightTarget)<.002&&(this.night=this.nightTarget),this.alarm=Math.max(0,this.alarm-e);let i=this.readInput();if(this.state!=="title"){this.player.update(n,i);for(let l=this.enemies.length-1;l>=0;l--){let c=this.enemies[l];c.update(n)||(c.dispose(),this.enemies.splice(l,1))}for(this.separate(),this.updateProjectiles(n);this.spawnQueue.length&&this.spawnQueue[0].at<=this.time;)this.spawnEnemy(this.spawnQueue.shift().type);this.spawnQueue.sort((l,c)=>l.at-c.at),this.checkWave(),(this.enemies.length||this.spawnQueue.length)&&this.updateQuest()}else this.player.update(n,i);for(let l of this.npcs)l.update(n);for(let l of this.birds)l.update(n);this.world.update(n,this.time),this.ambient(n),this.fx.update(n),Mn.player.value.copy(this.player.pos),this.nearInteract=this.state==="play"?this.findInteract():null;let r;if(this.state==="title"){let l=Math.sin(this.time*.12)*.5+.5;r=Ve(Math.sin(this.time*.07)*4,.5,ge(10,-6,l)),this.focus.copy(r)}else{let l=this.player;this.lead.x=Ui(this.lead.x,l.vel.x*.28,3,e),this.lead.z=Ui(this.lead.z,l.vel.z*.28,3,e),r=Ve(l.pos.x+this.lead.x,l.y+.6,l.pos.z+this.lead.z-.8),this.focus.x=Ui(this.focus.x,r.x,7,e),this.focus.y=Ui(this.focus.y,r.y,5,e),this.focus.z=Ui(this.focus.z,r.z,7,e)}this.shakeAmt=Math.max(0,this.shakeAmt-e*2.2);let a=this.shakeAmt*this.shakeAmt*.45,o=this.focus.clone().add(Ve(it(-a,a),0,it(-a,a)*.6));this.pixel.setFocus(o),this.updateLights(e),this.ui.update(e),this.pixel.render(this.scene)}},ex=new I,nx=new I,Du=new I,ix=new I;window.addEventListener("DOMContentLoaded",()=>{try{window.game=new dc}catch(s){console.error(s),document.getElementById("title").innerHTML=`<div class="err">WebGL\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.<br><small>${s.message}</small></div>`}});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
