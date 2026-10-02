(()=>{var Kh=0,Ql=1,jh=2;var is=1,Qh=2,Os=3,Dn=0,fi=1,de=2,$i=0,Hs=1,Be=2,tc=3,ec=4,oa=5;var ns=100,td=101,ed=102,id=103,nd=104,sd=200,aa=201,rd=202,od=203,ic=204,Ar=205,ad=206,ld=207,cd=208,hd=209,dd=210,ud=211,fd=212,pd=213,md=214,bo=0,wo=1,Eo=2,Cs=3,So=4,To=5,Ao=6,Ro=7,nc=0,gd=1,xd=2,Fi=0,sc=1,rc=2,oc=3,ac=4,lc=5,cc=6,hc=7;var dc=300,Nn=301,ss=302,la=303,ca=304,Rr=306,Is=1e3,Vi=1001,Co=1002,he=1003,yd=1004;var Cr=1005;var We=1006,ha=1007;var Un=1008;var mi=1009,uc=1010,fc=1011,Gs=1012,da=1013,Mi=1014,Ai=1015,bi=1016,ua=1017,fa=1018,Vs=1020,pc=35902,mc=35899,gc=1021,xc=1022,gi=1023,Wi=1026,Fn=1027,pa=1028,ma=1029,Bn=1030,ga=1031;var xa=1033,Ir=33776,Pr=33777,Lr=33778,Dr=33779,ya=35840,va=35841,_a=35842,Ma=35843,ba=36196,wa=37492,Ea=37496,Sa=37488,Ta=37489,Nr=37490,Aa=37491,Ra=37808,Ca=37809,Ia=37810,Pa=37811,La=37812,Da=37813,Na=37814,Ua=37815,Fa=37816,Ba=37817,ka=37818,za=37819,Oa=37820,Ha=37821,Ga=36492,Va=36494,Wa=36495,Xa=36283,qa=36284,Ur=36285,Ya=36286;var cr=2300,Io=2301,_o=2302,Wl=2303,Xl=2400,ql=2401,Yl=2402;var vd=3200,yc=3201;var Fr=0,_d=1,Bi="",hi="srgb",Zn="srgb-linear",hr="linear",ge="srgb";var Mo=7680;var Md=519,bd=512,wd=513,Ed=514,Za=515,Sd=516,Td=517,$a=518,Ad=519,Rd=35044,Ws=35048;var vc="300 es",Ni=2e3,Ps=2001;function gf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function dr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cd(){let r=dr("canvas");return r.style.display="block",r}var bh={},Ls=null;function _c(...r){let t="THREE."+r.shift();Ls?Ls("log",t,...r):console.log(t,...r)}function Id(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Vt(...r){r=Id(r);let t="THREE."+r.shift();if(Ls)Ls("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function qt(...r){r=Id(r);let t="THREE."+r.shift();if(Ls)Ls("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Yn(...r){let t=r.join(" ");t in bh||(bh[t]=!0,Vt(...r))}function Pd(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Ld={[bo]:wo,[Eo]:Ao,[So]:Ro,[Cs]:To,[wo]:bo,[Ao]:Eo,[Ro]:So,[To]:Cs},Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=1234567,rr=Math.PI/180,Ds=180/Math.PI;function Xs(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[r&255]+si[r>>8&255]+si[r>>16&255]+si[r>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function ie(r,t,e){return Math.max(t,Math.min(e,r))}function Mc(r,t){return(r%t+t)%t}function yf(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function vf(r,t,e){return r!==t?(e-r)/(t-r):0}function or(r,t,e){return(1-e)*r+e*t}function _f(r,t,e,i){return or(r,t,1-Math.exp(-e*i))}function Mf(r,t=1){return t-Math.abs(Mc(r,t*2)-t)}function bf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function wf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Ef(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Sf(r,t){return r+Math.random()*(t-r)}function Tf(r){return r*(.5-Math.random())}function Af(r){r!==void 0&&(wh=r);let t=wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rf(r){return r*rr}function Cf(r){return r*Ds}function If(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Pf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Lf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Df(r,t,e,i,n){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),f=s((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*f,a*h,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function As(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ci(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bc={DEG2RAD:rr,RAD2DEG:Ds,generateUUID:Xs,clamp:ie,euclideanModulo:Mc,mapLinear:yf,inverseLerp:vf,lerp:or,damp:_f,pingpong:Mf,smoothstep:bf,smootherstep:wf,randInt:Ef,randFloat:Sf,randFloatSpread:Tf,seededRandom:Af,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:If,ceilPowerOfTwo:Pf,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:ci,denormalize:As},Rc=class Rc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rc.prototype.isVector2=!0;var wt=Rc,we=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[o+0],f=s[o+1],p=s[o+2],x=s[o+3];if(u!==x||l!==d||c!==f||h!==p){let g=l*d+c*f+h*p+u*x;g<0&&(d=-d,f=-f,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let _=Math.acos(g),S=Math.sin(_);m=Math.sin(m*_)/S,a=Math.sin(a*_)/S,l=l*m+d*a,c=c*m+f*a,h=h*m+p*a,u=u*m+x*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+p*a,u=u*m+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cc=class Cc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cc.prototype.isVector3=!0;var A=Cc,_l=new A,Eh=new we,Ic=class Ic{constructor(t,e,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],p=i[8],x=n[0],g=n[3],m=n[6],_=n[1],S=n[4],v=n[7],b=n[2],w=n[5],C=n[8];return s[0]=o*x+a*_+l*b,s[3]=o*g+a*S+l*w,s[6]=o*m+a*v+l*C,s[1]=c*x+h*_+u*b,s[4]=c*g+h*S+u*w,s[7]=c*m+h*v+u*C,s[2]=d*x+f*_+p*b,s[5]=d*g+f*S+p*w,s[8]=d*m+f*v+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,p=e*u+i*d+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ml.makeScale(t,e)),this}rotate(t){return Yn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ml.makeRotation(-t)),this}translate(t,e){return Yn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ml.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ic.prototype.isMatrix3=!0;var Yt=Ic,Ml=new Yt,Sh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nf(){let r={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(n.r=cn(n.r),n.g=cn(n.g),n.b=cn(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(n.r=Rs(n.r),n.g=Rs(n.g),n.b=Rs(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Bi?hr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Yn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Yn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Zn]:{primaries:t,whitePoint:i,transfer:hr,toXYZ:Sh,fromXYZ:Th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:Sh,fromXYZ:Th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),r}var le=Nf();function cn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var fs,Po=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fs===void 0&&(fs=dr("canvas")),fs.width=t.width,fs.height=t.height;let n=fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=fs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=dr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=cn(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(cn(e[i]/255)*255):e[i]=cn(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uf=0,Ns=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(bl(n[o].image)):s.push(bl(n[o]))}else s=bl(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function bl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Po.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Ff=0,wl=new A,ui=class r extends Xi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Vi,n=Vi,s=We,o=Un,a=gi,l=mi,c=r.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Xs(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wl).x}get height(){return this.source.getSize(wl).y}get depth(){return this.source.getSize(wl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=dc;ui.DEFAULT_ANISOTROPY=1;var Pc=class Pc{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,v=(f+1)/2,b=(m+1)/2,w=(h+d)/4,C=(u+x)/4,y=(p+g)/4;return S>v&&S>b?S<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(S),n=w/i,s=C/i):v>b?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=w/n,s=y/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=C/s,n=y/s),this.set(i,n,s,e),this}let _=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pc.prototype.isVector4=!0;var Le=Pc,Lo=class extends Xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},s=new ui(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ns(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Lo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ur=class extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=he,this.minFilter=he,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Do=class extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=he,this.minFilter=he,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ra=class ra{constructor(t,e,i,n,s,o,a,l,c,h,u,d,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,u,d,f,p,x,g)}set(t,e,i,n,s,o,a,l,c,h,u,d,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bf,t,kf)}lookAt(t,e,i){let n=this.elements;return xi.subVectors(t,e),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),bn.crossVectors(i,xi),bn.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),bn.crossVectors(i,xi)),bn.normalize(),Kr.crossVectors(xi,bn),n[0]=bn.x,n[4]=Kr.x,n[8]=xi.x,n[1]=bn.y,n[5]=Kr.y,n[9]=xi.y,n[2]=bn.z,n[6]=Kr.z,n[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],p=i[2],x=i[6],g=i[10],m=i[14],_=i[3],S=i[7],v=i[11],b=i[15],w=n[0],C=n[4],y=n[8],T=n[12],P=n[1],N=n[5],L=n[9],B=n[13],D=n[2],U=n[6],H=n[10],X=n[14],Y=n[3],O=n[7],K=n[11],tt=n[15];return s[0]=o*w+a*P+l*D+c*Y,s[4]=o*C+a*N+l*U+c*O,s[8]=o*y+a*L+l*H+c*K,s[12]=o*T+a*B+l*X+c*tt,s[1]=h*w+u*P+d*D+f*Y,s[5]=h*C+u*N+d*U+f*O,s[9]=h*y+u*L+d*H+f*K,s[13]=h*T+u*B+d*X+f*tt,s[2]=p*w+x*P+g*D+m*Y,s[6]=p*C+x*N+g*U+m*O,s[10]=p*y+x*L+g*H+m*K,s[14]=p*T+x*B+g*X+m*tt,s[3]=_*w+S*P+v*D+b*Y,s[7]=_*C+S*N+v*U+b*O,s[11]=_*y+S*L+v*H+b*K,s[15]=_*T+S*B+v*X+b*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],_=l*f-c*d,S=a*f-c*u,v=a*d-l*u,b=o*f-c*h,w=o*d-l*h,C=o*u-a*h;return e*(x*_-g*S+m*v)-i*(p*_-g*b+m*w)+n*(p*S-x*b+m*C)-s*(p*v-x*w+g*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(s*h-a*l)+n*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],_=e*a-i*o,S=e*l-n*o,v=e*c-s*o,b=i*l-n*a,w=i*c-s*a,C=n*c-s*l,y=h*x-u*p,T=h*g-d*p,P=h*m-f*p,N=u*g-d*x,L=u*m-f*x,B=d*m-f*g,D=_*B-S*L+v*N+b*P-w*T+C*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return t[0]=(a*B-l*L+c*N)*U,t[1]=(n*L-i*B-s*N)*U,t[2]=(x*C-g*w+m*b)*U,t[3]=(d*w-u*C-f*b)*U,t[4]=(l*P-o*B-c*T)*U,t[5]=(e*B-n*P+s*T)*U,t[6]=(g*v-p*C-m*S)*U,t[7]=(h*C-d*v+f*S)*U,t[8]=(o*L-a*P+c*y)*U,t[9]=(i*P-e*L-s*y)*U,t[10]=(p*w-x*v+m*_)*U,t[11]=(u*v-h*w-f*_)*U,t[12]=(a*T-o*N-l*y)*U,t[13]=(e*N-i*T+n*y)*U,t[14]=(x*S-p*b-g*_)*U,t[15]=(h*b-u*S+d*_)*U,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,p=s*u,x=o*h,g=o*u,m=a*u,_=l*c,S=l*h,v=l*u,b=i.x,w=i.y,C=i.z;return n[0]=(1-(x+m))*b,n[1]=(f+v)*b,n[2]=(p-S)*b,n[3]=0,n[4]=(f-v)*w,n[5]=(1-(d+m))*w,n[6]=(g+_)*w,n[7]=0,n[8]=(p+S)*C,n[9]=(g-_)*C,n[10]=(1-(d+x))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=ps.set(n[0],n[1],n[2]).length(),a=ps.set(n[4],n[5],n[6]).length(),l=ps.set(n[8],n[9],n[10]).length();s<0&&(o=-o),Ii.copy(this);let c=1/o,h=1/a,u=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=u,Ii.elements[9]*=u,Ii.elements[10]*=u,e.setFromRotationMatrix(Ii),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,s,o,a=Ni,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-n),d=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Ni)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ps)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Ni,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-n),d=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Ni)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ps)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ra.prototype.isMatrix4=!0;var Jt=ra,ps=new A,Ii=new Jt,Bf=new A(0,0,0),kf=new A(1,1,1),bn=new A,Kr=new A,xi=new A,Ah=new Jt,Rh=new we,je=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};je.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zf=0,Ch=new A,ms=new we,sn=new Jt,jr=new A,Qs=new A,Of=new A,Hf=new we,Ih=new A(1,0,0),Ph=new A(0,1,0),Lh=new A(0,0,1),Dh={type:"added"},Gf={type:"removed"},gs={type:"childadded",child:null},El={type:"childremoved",child:null},Qe=class r extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new A,e=new je,i=new we,n=new A(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Yt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?jr.copy(t):jr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Qs,jr,this.up):sn.lookAt(jr,Qs,this.up),this.quaternion.setFromRotationMatrix(sn),n&&(sn.extractRotation(n.matrixWorld),ms.setFromRotationMatrix(sn),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),gs.child=t,this.dispatchEvent(gs),gs.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gf),El.child=t,this.dispatchEvent(El),El.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new A(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nt=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vf={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,i),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Nt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Sl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=le.workingColorSpace){if(t=Mc(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Sl(o,s,t+1/3),this.g=Sl(o,s,t),this.b=Sl(o,s,t-1/3)}return le.colorSpaceToWorking(this,n),this}setStyle(t,e=hi){function i(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hi){let i=Dd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cn(t.r),this.g=cn(t.g),this.b=cn(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return le.workingToColorSpace(ri.copy(this),t),Math.round(ie(ri.r*255,0,255))*65536+Math.round(ie(ri.g*255,0,255))*256+Math.round(ie(ri.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(ri.copy(this),e);let i=ri.r,n=ri.g,s=ri.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(ri.copy(this),e),t.r=ri.r,t.g=ri.g,t.b=ri.b,t}getStyle(t=hi){le.workingToColorSpace(ri.copy(this),t);let e=ri.r,i=ri.g,n=ri.b;return t!==hi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(Qr);let i=or(wn.h,Qr.h,e),n=or(wn.s,Qr.s,e),s=or(wn.l,Qr.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new ct;ct.NAMES=Dd;var hn=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new A,rn=new A,Tl=new A,on=new A,xs=new A,ys=new A,Nh=new A,Al=new A,Rl=new A,Cl=new A,Il=new Le,Pl=new Le,Ll=new Le,An=class r{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Pi.subVectors(t,e),n.cross(Pi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Pi.subVectors(n,e),rn.subVectors(i,e),Tl.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(rn),l=Pi.dot(Tl),c=rn.dot(rn),h=rn.dot(Tl),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return s.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,on.x),l.addScaledVector(o,on.y),l.addScaledVector(a,on.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return Il.setScalar(0),Pl.setScalar(0),Ll.setScalar(0),Il.fromBufferAttribute(t,e),Pl.fromBufferAttribute(t,i),Ll.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Il,s.x),o.addScaledVector(Pl,s.y),o.addScaledVector(Ll,s.z),o}static isFrontFacing(t,e,i,n){return Pi.subVectors(i,e),rn.subVectors(t,e),Pi.cross(rn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Pi.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;xs.subVectors(n,i),ys.subVectors(s,i),Al.subVectors(t,i);let l=xs.dot(Al),c=ys.dot(Al);if(l<=0&&c<=0)return e.copy(i);Rl.subVectors(t,n);let h=xs.dot(Rl),u=ys.dot(Rl);if(h>=0&&u<=h)return e.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(xs,o);Cl.subVectors(t,s);let f=xs.dot(Cl),p=ys.dot(Cl);if(p>=0&&f<=p)return e.copy(s);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(ys,a);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Nh.subVectors(s,n),a=(u-h)/(u-h+(f-p)),e.copy(n).addScaledVector(Nh,a);let m=1/(g+x+d);return o=x*m,a=d*m,e.copy(i).addScaledVector(xs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qi=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Li.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Li.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Li.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Li):Li.fromBufferAttribute(s,o),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),eo.subVectors(this.max,tr),vs.subVectors(t.a,tr),_s.subVectors(t.b,tr),Ms.subVectors(t.c,tr),En.subVectors(_s,vs),Sn.subVectors(Ms,_s),Vn.subVectors(vs,Ms);let e=[0,-En.z,En.y,0,-Sn.z,Sn.y,0,-Vn.z,Vn.y,En.z,0,-En.x,Sn.z,0,-Sn.x,Vn.z,0,-Vn.x,-En.y,En.x,0,-Sn.y,Sn.x,0,-Vn.y,Vn.x,0];return!Dl(e,vs,_s,Ms,eo)||(e=[1,0,0,0,1,0,0,0,1],!Dl(e,vs,_s,Ms,eo))?!1:(io.crossVectors(En,Sn),e=[io.x,io.y,io.z],Dl(e,vs,_s,Ms,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},an=[new A,new A,new A,new A,new A,new A,new A,new A],Li=new A,to=new qi,vs=new A,_s=new A,Ms=new A,En=new A,Sn=new A,Vn=new A,tr=new A,eo=new A,io=new A,Wn=new A;function Dl(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Wn.fromArray(r,s);let a=n.x*Math.abs(Wn.x)+n.y*Math.abs(Wn.y)+n.z*Math.abs(Wn.z),l=t.dot(Wn),c=e.dot(Wn),h=i.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ge=new A,no=new wt,Wf=0,Ve=class extends Xi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rd,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=As(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ci(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=ci(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=ci(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ci(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=ci(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ci(e,this.array),i=ci(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ci(e,this.array),i=ci(i,this.array),n=ci(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=ci(e,this.array),i=ci(i,this.array),n=ci(n,this.array),s=ci(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var mr=class extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ot=class extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xf=new qi,er=new A,Nl=new A,dn=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xf.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(er,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Nl)),this.expandByPoint(er.copy(t.center).sub(Nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qf=0,Si=new Jt,Ul=new Qe,bs=new A,yi=new qi,ir=new qi,Ke=new A,xe=class r extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gf(t)?mr:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,i){return Si.makeTranslation(t,e,i),this.applyMatrix4(Si),this}scale(t,e,i){return Si.makeScale(t,e,i),this.applyMatrix4(Si),this}lookAt(t){return Ul.lookAt(t),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(yi.min,ir.min),yi.expandByPoint(Ke),Ke.addVectors(yi.max,ir.max),yi.expandByPoint(Ke)):(yi.expandByPoint(ir.min),yi.expandByPoint(ir.max))}yi.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)Ke.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ke));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ke.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(t,c),Ke.add(bs)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ve(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new A,l[y]=new A;let c=new A,h=new A,u=new A,d=new wt,f=new wt,p=new wt,x=new A,g=new A;function m(y,T,P){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,P),d.fromBufferAttribute(s,y),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,P),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let N=1/(f.x*p.y-p.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(N),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(N),a[y].add(x),a[T].add(x),a[P].add(x),l[y].add(g),l[T].add(g),l[P].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,T=_.length;y<T;++y){let P=_[y],N=P.start,L=P.count;for(let B=N,D=N+L;B<D;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new A,v=new A,b=new A,w=new A;function C(y){b.fromBufferAttribute(n,y),w.copy(b);let T=a[y];S.copy(T),S.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(w,T);let N=v.dot(l[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,N)}for(let y=0,T=_.length;y<T;++y){let P=_[y],N=P.start,L=P.count;for(let B=N,D=N+L;B<D;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Ve(d,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fl=new A,Yf=new A,Zf=new Yt,Di=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Fl.subVectors(i,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zf.getNormalMatrix(t),n=this.coplanarPoint(Fl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$f=0,Yi=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=Hs,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=Ar,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Di().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new wt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ln=new A,Bl=new A,so=new A,ro=new A,gr=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Bl.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),ro.copy(this.origin).sub(Bl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(so),a=ro.dot(this.direction),l=-ro.dot(so),c=ro.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=s*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Bl).addScaledVector(so,d),f}intersectSphere(t,e){if(t.radius<0)return null;ln.subVectors(t.center,this.origin);let i=ln.dot(this.direction),n=ln.dot(ln)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=i.x-o.x,_=i.y-o.y,S=i.z-o.z,v=Math.abs(l),b=Math.abs(c),w=Math.abs(h),C,y,T,P,N,L,B,D,U,H,X,Y;if(v>=b&&v>=w?(T=l,L=u,U=p,Y=m,l>=0?(C=c,y=h,P=d,N=f,B=x,D=g,H=_,X=S):(C=h,y=c,P=f,N=d,B=g,D=x,H=S,X=_)):b>=w?(T=c,L=d,U=x,Y=_,c>=0?(C=h,y=l,P=f,N=u,B=g,D=p,H=S,X=m):(C=l,y=h,P=u,N=f,B=p,D=g,H=m,X=S)):(T=h,L=f,U=g,Y=S,h>=0?(C=l,y=c,P=u,N=d,B=p,D=x,H=m,X=_):(C=c,y=l,P=d,N=u,B=x,D=p,H=_,X=m)),T===0)return null;let O=C/T,K=y/T,tt=1/T,bt=P-O*L,At=N-K*L,Zt=B-O*U,Xt=D-K*U,Qt=H-O*Y,J=X-K*Y,st=Qt*Xt-J*Zt,Rt=bt*J-At*Qt,Wt=Zt*At-Xt*bt;if(n){if(st<0||Rt<0||Wt<0)return null}else if((st<0||Rt<0||Wt<0)&&(st>0||Rt>0||Wt>0))return null;let Ct=st+Rt+Wt;if(Ct===0)return null;let se=tt*(st*L+Rt*U+Wt*Y);return(Ct>0?se<0:se>0)?null:this.at(se/Ct,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kt=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Uh=new Jt,Xn=new gr,oo=new dn,Fh=new A,ao=new A,lo=new A,co=new A,kl=new A,ho=new A,Bh=new A,uo=new A,at=class extends Qe{constructor(t=new xe,e=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){ho.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(kl.fromBufferAttribute(u,t),o?ho.addScaledVector(kl,h):ho.addScaledVector(kl.sub(e),h))}e.add(ho)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),Xn.copy(t.ray).recast(t.near),!(oo.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(oo,Fh)===null||Xn.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Uh.copy(s).invert(),Xn.copy(t.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&Xn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xn)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,b=S;v<b;v+=3){let w=a.getX(v),C=a.getX(v+1),y=a.getX(v+2);n=fo(this,m,t,i,c,h,u,w,C,y),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=a.getX(g),S=a.getX(g+1),v=a.getX(g+2);n=fo(this,o,t,i,c,h,u,_,S,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=_,b=S;v<b;v+=3){let w=v,C=v+1,y=v+2;n=fo(this,m,t,i,c,h,u,w,C,y),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let _=g,S=g+1,v=g+2;n=fo(this,o,t,i,c,h,u,_,S,v),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}};function Jf(r,t,e,i,n,s,o,a){let l;if(t.side===fi?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===Dn,a),l===null)return null;uo.copy(a),uo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(uo);return c<e.near||c>e.far?null:{distance:c,point:uo.clone(),object:r}}function fo(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,ao),r.getVertexPosition(l,lo),r.getVertexPosition(c,co);let h=Jf(r,t,e,i,ao,lo,co,Bh);if(h){let u=new A;An.getBarycoord(Bh,ao,lo,co,u),n&&(h.uv=An.getInterpolatedAttribute(n,a,l,c,u,new wt)),s&&(h.uv1=An.getInterpolatedAttribute(s,a,l,c,u,new wt)),o&&(h.normal=An.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new A,materialIndex:0};An.getNormal(ao,lo,co,d.normal),h.face=d,h.barycoord=u}return h}var $n=class extends ui{constructor(t=null,e=1,i=1,n,s,o,a,l,c=he,h=he,u,d){super(null,o,a,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fs=class extends Ve{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new Jt,kh=new Jt,po=[],zh=new qi,Kf=new Jt,nr=new at,sr=new dn,Jn=class extends at{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Kf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ws),zh.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(zh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ws),sr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(i),t.ray.intersectsSphere(sr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ws),kh.multiplyMatrices(i,ws),nr.matrixWorld=kh,nr.raycast(t,po);for(let o=0,a=po.length;o<a;o++){let l=po[o];l.instanceId=s,l.object=this,e.push(l)}po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new $n(new Float32Array(n*this.count),n,this.count,pa,Ai));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qn=new dn,jf=new wt(.5,.5),mo=new A,Bs=class{constructor(t=new Di,e=new Di,i=new Di,n=new Di,s=new Di,o=new Di){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],p=s[8],x=s[9],g=s[10],m=s[11],_=s[12],S=s[13],v=s[14],b=s[15];if(n[0].setComponents(c-o,f-h,m-p,b-_).normalize(),n[1].setComponents(c+o,f+h,m+p,b+_).normalize(),n[2].setComponents(c+a,f+u,m+x,b+S).normalize(),n[3].setComponents(c-a,f-u,m-x,b-S).normalize(),i)n[4].setComponents(l,d,g,v).normalize(),n[5].setComponents(c-l,f-d,m-g,b-v).normalize();else if(n[4].setComponents(c-l,f-d,m-g,b-v).normalize(),e===Ni)n[5].setComponents(c+l,f+d,m+g,b+v).normalize();else if(e===Ps)n[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){qn.center.set(0,0,0);let e=jf.distanceTo(t.center);return qn.radius=.7071067811865476+e,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(mo.x=n.normal.x>0?t.max.x:t.min.x,mo.y=n.normal.y>0?t.max.y:t.min.y,mo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var No=class extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Oh=new Jt,Zl=new gr,go=new dn,xo=new A,xr=class extends Qe{constructor(t=new xe,e=new No){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(n),go.radius+=s,t.ray.intersectsSphere(go)===!1)return;Oh.copy(n).invert(),Zl.copy(t.ray).applyMatrix4(Oh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let g=c.getX(p);xo.fromBufferAttribute(u,g),Hh(xo,g,l,n,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)xo.fromBufferAttribute(u,p),Hh(xo,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Hh(r,t,e,i,n,s,o){let a=Zl.distanceSqToPoint(r);if(a<e){let l=new A;Zl.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var yr=class extends ui{constructor(t=[],e=Nn,i,n,s,o,a,l,c,h){super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Kn=class extends ui{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zi=class extends ui{constructor(t,e,i=Mi,n,s,o,a=he,l=he,c,h=Wi,u=1){if(h!==Wi&&h!==Fn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ns(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Uo=class extends Zi{constructor(t,e=Mi,i=Nn,n,s,o=he,a=he,l,c=Wi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,n,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vr=class extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dt=class r extends xe{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,s,0),p("z","y","x",1,-1,i,e,-t,o,s,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function p(x,g,m,_,S,v,b,w,C,y,T){let P=v/C,N=b/y,L=v/2,B=b/2,D=w/2,U=C+1,H=y+1,X=0,Y=0,O=new A;for(let K=0;K<H;K++){let tt=K*N-B;for(let bt=0;bt<U;bt++){let At=bt*P-L;O[x]=At*_,O[g]=tt*S,O[m]=D,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[m]=w>0?1:-1,h.push(O.x,O.y,O.z),u.push(bt/C),u.push(1-K/y),X+=1}}for(let K=0;K<y;K++)for(let tt=0;tt<C;tt++){let bt=d+tt+U*K,At=d+tt+U*(K+1),Zt=d+(tt+1)+U*(K+1),Xt=d+(tt+1)+U*K;l.push(bt,At,Xt),l.push(At,Zt,Xt),Y+=6}a.addGroup(f,Y,T),f+=Y,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},un=class r extends xe{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,p=i*2+s,x=n+1,g=new A,m=new A;for(let _=0;_<=p;_++){let S=0,v=0,b=0,w=0;if(_<=i){let T=_/i,P=T*Math.PI/2;v=-h-t*Math.cos(P),b=t*Math.sin(P),w=-t*Math.cos(P),S=T*u}else if(_<=i+s){let T=(_-i)/s;v=-h+T*e,b=t,w=0,S=u+T*d}else{let T=(_-i-s)/i,P=T*Math.PI/2;v=h+t*Math.sin(P),b=t*Math.cos(P),w=t*Math.sin(P),S=u+d+T*u}let C=Math.max(0,Math.min(1,S/f)),y=0;_===0?y=.5/n:_===p&&(y=-.5/n);for(let T=0;T<=n;T++){let P=T/n,N=P*Math.PI*2,L=Math.sin(N),B=Math.cos(N);m.x=-b*B,m.y=v,m.z=b*L,a.push(m.x,m.y,m.z),g.set(-b*B,w,b*L),g.normalize(),l.push(g.x,g.y,g.z),c.push(P+y,C)}if(_>0){let T=(_-1)*x;for(let P=0;P<n;P++){let N=T+P,L=T+P+1,B=_*x+P,D=_*x+P+1;o.push(N,L,B),o.push(L,D,B)}}}this.setIndex(o),this.setAttribute("position",new Ot(a,3)),this.setAttribute("normal",new Ot(l,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},vi=class r extends xe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new A,h=new wt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ht=class r extends xe{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],u=[],d=[],f=[],p=0,x=[],g=i/2,m=0;_(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function _(){let v=new A,b=new A,w=0,C=(e-t)/i;for(let y=0;y<=s;y++){let T=[],P=y/s,N=P*(e-t)+t;for(let L=0;L<=n;L++){let B=L/n,D=B*l+a,U=Math.sin(D),H=Math.cos(D);b.x=N*U,b.y=-P*i+g,b.z=N*H,u.push(b.x,b.y,b.z),v.set(U,C,H).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-P),T.push(p++)}x.push(T)}for(let y=0;y<n;y++)for(let T=0;T<s;T++){let P=x[T][y],N=x[T+1][y],L=x[T+1][y+1],B=x[T][y+1];(t>0||T!==0)&&(h.push(P,N,B),w+=3),(e>0||T!==s-1)&&(h.push(N,L,B),w+=3)}c.addGroup(m,w,0),m+=w}function S(v){let b=p,w=new wt,C=new A,y=0,T=v===!0?t:e,P=v===!0?1:-1;for(let L=1;L<=n;L++)u.push(0,g*P,0),d.push(0,P,0),f.push(.5,.5),p++;let N=p;for(let L=0;L<=n;L++){let D=L/n*l+a,U=Math.cos(D),H=Math.sin(D);C.x=T*H,C.y=g*P,C.z=T*U,u.push(C.x,C.y,C.z),d.push(0,P,0),w.x=U*.5+.5,w.y=H*.5*P+.5,f.push(w.x,w.y),p++}for(let L=0;L<n;L++){let B=b+L,D=N+L;v===!0?h.push(D,D+1,B):h.push(D+1,D,B),y+=3}c.addGroup(m,y,v===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ne=class r extends Ht{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fo=class r extends xe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Ot(s,3)),this.setAttribute("normal",new Ot(s.slice(),3)),this.setAttribute("uv",new Ot(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let S=new A,v=new A,b=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],S),f(e[w+1],v),f(e[w+2],b),l(S,v,b,_)}function l(_,S,v,b){let w=b+1,C=[];for(let y=0;y<=w;y++){C[y]=[];let T=_.clone().lerp(v,y/w),P=S.clone().lerp(v,y/w),N=w-y;for(let L=0;L<=N;L++)L===0&&y===w?C[y][L]=T:C[y][L]=T.clone().lerp(P,L/N)}for(let y=0;y<w;y++)for(let T=0;T<2*(w-y)-1;T++){let P=Math.floor(T/2);T%2===0?(d(C[y][P+1]),d(C[y+1][P]),d(C[y][P])):(d(C[y][P+1]),d(C[y+1][P+1]),d(C[y+1][P]))}}function c(_){let S=new A;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(_),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){let _=new A;for(let S=0;S<s.length;S+=3){_.x=s[S+0],_.y=s[S+1],_.z=s[S+2];let v=g(_)/2/Math.PI+.5,b=m(_)/Math.PI+.5;o.push(v,1-b)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let S=o[_+0],v=o[_+2],b=o[_+4],w=Math.max(S,v,b),C=Math.min(S,v,b);w>.9&&C<.1&&(S<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),b<.2&&(o[_+4]+=1))}}function d(_){s.push(_.x,_.y,_.z)}function f(_,S){let v=_*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function p(){let _=new A,S=new A,v=new A,b=new A,w=new wt,C=new wt,y=new wt;for(let T=0,P=0;T<s.length;T+=9,P+=6){_.set(s[T+0],s[T+1],s[T+2]),S.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),w.set(o[P+0],o[P+1]),C.set(o[P+2],o[P+3]),y.set(o[P+4],o[P+5]),b.copy(_).add(S).add(v).divideScalar(3);let N=g(b);x(w,P+0,_,N),x(C,P+2,S,N),x(y,P+4,v,N)}}function x(_,S,v,b){b<0&&_.x===1&&(o[S]=_.x-1),v.x===0&&v.z===0&&(o[S]=b/2/Math.PI+.5)}function g(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let h=i[n],d=i[n+1]-h,f=(o-h)/d;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new wt:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new A,n=[],s=[],o=[],a=new A,l=new Jt;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new A)}s[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ie(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(ie(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),o[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_r=class extends Ti{constructor(t=0,e=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bo=class extends _r{constructor(t,e,i,n,s,o){super(t,e,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let r=0,t=0,e=0,i=0;function n(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,n(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+i*a}}}var Gh=new A,Vh=new A,zl=new wc,Ol=new wc,Hl=new wc,ko=class extends Ti{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new A){let i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%s]:(Vh.subVectors(n[0],n[1]).add(n[0]),c=Vh);let u=n[a%s],d=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(Gh.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Gh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),zl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,g),Ol.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,g),Hl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ol.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Hl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(zl.calc(l),Ol.calc(l),Hl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new A().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Wh(r,t,e,i,n){let s=(i-t)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*r+e}function Qf(r,t){let e=1-r;return e*e*t}function tp(r,t){return 2*(1-r)*r*t}function ep(r,t){return r*r*t}function ar(r,t,e,i){return Qf(r,t)+tp(r,e)+ep(r,i)}function ip(r,t){let e=1-r;return e*e*e*t}function np(r,t){let e=1-r;return 3*e*e*r*t}function sp(r,t){return 3*(1-r)*r*r*t}function rp(r,t){return r*r*r*t}function lr(r,t,e,i,n){return ip(r,t)+np(r,e)+sp(r,i)+rp(r,n)}var zo=class extends Ti{constructor(t=new wt,e=new wt,i=new wt,n=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new wt){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,n.x,s.x,o.x,a.x),lr(t,n.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Oo=class extends Ti{constructor(t=new A,e=new A,i=new A,n=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new A){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(lr(t,n.x,s.x,o.x,a.x),lr(t,n.y,s.y,o.y,a.y),lr(t,n.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends Ti{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Ti{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Ti{constructor(t=new wt,e=new wt,i=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new wt){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(ar(t,n.x,s.x,o.x),ar(t,n.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jn=class extends Ti{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(ar(t,n.x,s.x,o.x),ar(t,n.y,s.y,o.y),ar(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wo=class extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let i=e,n=this.points,s=(n.length-1)*t,o=Math.floor(s),a=s-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(Wh(a,l.x,c.x,h.x,u.x),Wh(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new wt().fromArray(n))}return this}},op=Object.freeze({__proto__:null,ArcCurve:Bo,CatmullRomCurve3:ko,CubicBezierCurve:zo,CubicBezierCurve3:Oo,EllipseCurve:_r,LineCurve:Ho,LineCurve3:Go,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:jn,SplineCurve:Wo});var Ae=class r extends Fo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Mr=class r extends xe{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=ie(n,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,d=new wt,f=new A,p=new A,x=new A,g=0,m=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[_+1].x-t[_].x,m=t[_+1].y-t[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=e;_++){let S=i+_*h*n,v=Math.sin(S),b=Math.cos(S);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*b,o.push(u.x,u.y,u.z),d.x=_/e,d.y=w/(t.length-1),a.push(d.x,d.y);let C=l[3*w+0]*v,y=l[3*w+1],T=l[3*w+0]*b;c.push(C,y,T)}}for(let _=0;_<e;_++)for(let S=0;S<t.length-1;S++){let v=S+_*t.length,b=v,w=v+t.length,C=v+t.length+1,y=v+1;s.push(b,w,y),s.push(C,y,w)}this.setIndex(s),this.setAttribute("position",new Ot(o,3)),this.setAttribute("uv",new Ot(a,2)),this.setAttribute("normal",new Ot(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var ve=class r extends xe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let _=m*d-o;for(let S=0;S<c;S++){let v=S*u-s;p.push(v,-_,0),x.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let S=_+c*m,v=_+c*(m+1),b=_+1+c*(m+1),w=_+1+c*m;f.push(S,v,w),f.push(v,b,w)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Qn=class r extends xe{constructor(t=.5,e=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/n,f=new A,p=new wt;for(let x=0;x<=n;x++){for(let g=0;g<=i;g++){let m=s+g/i*o;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<n;x++){let g=x*(i+1);for(let m=0;m<i;m++){let _=m+g,S=_,v=_+i+1,b=_+i+2,w=_+1;a.push(S,v,w),a.push(v,b,w)}}this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var jt=class r extends xe{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new A,d=new A,f=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){let _=[],S=m/i,v=o+S*a,b=t*Math.cos(v),w=Math.sqrt(t*t-b*b),C=0;m===0&&o===0?C=.5/e:m===i&&l===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let T=y/e,P=n+T*s;u.x=-w*Math.cos(P),u.y=b,u.z=w*Math.sin(P),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(T+C,1-S),_.push(c++)}h.push(_)}for(let m=0;m<i;m++)for(let _=0;_<e;_++){let S=h[m][_+1],v=h[m][_],b=h[m+1][_],w=h[m+1][_+1];(m!==0||o>0)&&f.push(S,v,w),(m!==i-1||l<Math.PI)&&f.push(v,b,w)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var oi=class r extends xe{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],u=[],d=new A,f=new A,p=new A;for(let x=0;x<=i;x++){let g=o+x/i*a;for(let m=0;m<=n;m++){let _=m/n*s;f.x=(t+e*Math.cos(g))*Math.cos(_),f.y=(t+e*Math.cos(g))*Math.sin(_),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),u.push(m/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let g=1;g<=n;g++){let m=(n+1)*x+g-1,_=(n+1)*(x-1)+g-1,S=(n+1)*(x-1)+g,v=(n+1)*x+g;l.push(m,_,v),l.push(_,S,v)}this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var br=class r extends xe{constructor(t=new jn(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new A,l=new A,c=new wt,h=new A,u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function x(){for(let S=0;S<e;S++)g(S);g(s===!1?e:0),_(),m()}function g(S){h=t.getPointAt(S/e,h);let v=o.normals[S],b=o.binormals[S];for(let w=0;w<=n;w++){let C=w/n*Math.PI*2,y=Math.sin(C),T=-Math.cos(C);l.x=T*v.x+y*b.x,l.y=T*v.y+y*b.y,l.z=T*v.z+y*b.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=e;S++)for(let v=1;v<=n;v++){let b=(n+1)*(S-1)+(v-1),w=(n+1)*S+(v-1),C=(n+1)*S+v,y=(n+1)*(S-1)+v;p.push(b,w,y),p.push(w,C,y)}}function _(){for(let S=0;S<=e;S++)for(let v=0;v<=n;v++)c.x=S/e,c.y=v/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new op[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function rs(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(Xh(n))n.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Xh(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ai(r){let t={};for(let e=0;e<r.length;e++){let i=rs(r[e]);for(let n in i)t[n]=i[n]}return t}function Xh(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ap(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ec(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Nd={clone:rs,merge:ai},lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(n.value);break;case"v2":this.uniforms[i].value=new wt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new A().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Jt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xo=class extends Ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ts=class extends Yi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Rn=class extends Yi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var ks=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qo=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Es(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Gl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Cn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends Cn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case ql:s=t,a=2*e-i;break;case Yl:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ql:o=t,l=2*i-e;break;case Yl:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,_=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,S=(-1-f)*g+(1.5+f)*x+.5*p,v=f*g-f*x;for(let b=0;b!==a;++b)s[b]=m*o[h+b]+_*o[c+b]+S*o[l+b]+v*o[u+b];return s}},Zo=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},$o=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Jo=class extends Cn{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(n-e),x=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*p;return s}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=f*d+p*2,_=u[m],S=u[m+1],v=t*d+p*2,b=h[v],w=h[v+1],C=dp(i,e,_,b,n);s[p]=Ud(C,x,S,w,g)}return s}};function Ud(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function hp(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function dp(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=Ud(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let l=hp(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var _i=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Es(e,this.TimeBufferType),this.values=Es(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Es(t.times,Array),values:Es(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Gl(t.settings)&&(i.settings={inTangents:Es(t.settings.inTangents,Array),outTangents:Es(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case Io:e=this.InterpolantFactoryMethodLinear;break;case _o:e=this.InterpolantFactoryMethodSmooth;break;case Wl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Vt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return _o;case this.InterpolantFactoryMethodBezier:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Gl(this.settings)&&(qh(this.settings.inTangents,t),qh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&xf(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===_o,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let p=0;p!==i;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Gl(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function qh(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=Io;var In=class extends _i{constructor(t,e,i){super(t,e,i)}};In.prototype.ValueTypeName="bool";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=cr;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};Ko.prototype.ValueTypeName="color";var jo=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};jo.prototype.ValueTypeName="number";var Qo=class extends Cn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)we.slerpFlat(s,0,o,c-a,o,c,l);return s}},wr=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Qo(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pn=class extends _i{constructor(t,e,i){super(t,e,i)}};Pn.prototype.ValueTypeName="string";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=cr;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var ta=class extends _i{constructor(t,e,i,n){super(t,e,i,n)}};ta.prototype.ValueTypeName="vector";var ea=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fd=new ea,ia=class{constructor(t){this.manager=t!==void 0?t:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},es=class extends zs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Vl=new Jt,Yh=new A,Zh=new A,Er=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Vl,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=n?n.z/s.x:1,a=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},yo=new A,vo=new we,Gi=new A,Sr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yo,vo,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,vo,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(yo,vo,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,vo,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Tn=new A,$h=new wt,Jh=new wt,di=class extends Sr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ds*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Jh),e.subVectors(Jh,$h)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $l=class extends Er{constructor(){super(new di(90,1,.5,500)),this.isPointLightShadow=!0}},Tr=class extends zs{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new $l}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ui=class extends Sr{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jl=class extends Er{constructor(){super(new Ui(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ln=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Jl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ss=-90,Ts=1,na=class extends Qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new di(Ss,Ts,t,e);n.layers=this.layers,this.add(n);let s=new di(Ss,Ts,t,e);s.layers=this.layers,this.add(s);let o=new di(Ss,Ts,t,e);o.layers=this.layers,this.add(o);let a=new di(Ss,Ts,t,e);a.layers=this.layers,this.add(a);let l=new di(Ss,Ts,t,e);l.layers=this.layers,this.add(l);let c=new di(Ss,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},sa=class extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Sc="\\[\\]\\.:\\/",up=new RegExp("["+Sc+"]","g"),Tc="[^"+Sc+"]",fp="[^"+Sc.replace("\\.","")+"]",pp=/((?:WC+[\/:])*)/.source.replace("WC",Tc),mp=/(WCOD+)?/.source.replace("WCOD",fp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),yp=new RegExp("^"+pp+mp+gp+xp+"$"),vp=["material","materials","bones","map"],Kl=class{constructor(t,e,i){let n=i||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ce=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(up,"")}static parseTrackName(t){let e=yp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);vp.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Kl;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zy=new Float32Array(1);var Lc=class Lc{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};Lc.prototype.isMatrix2=!0;var jl=Lc;function Ac(r,t,e,i){let n=_p(i);switch(e){case gc:return r*t;case pa:return r*t/n.components*n.byteLength;case ma:return r*t/n.components*n.byteLength;case Bn:return r*t*2/n.components*n.byteLength;case ga:return r*t*2/n.components*n.byteLength;case xc:return r*t*3/n.components*n.byteLength;case gi:return r*t*4/n.components*n.byteLength;case xa:return r*t*4/n.components*n.byteLength;case Ir:case Pr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Lr:case Dr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case va:case Ma:return Math.max(r,16)*Math.max(t,8)/4;case ya:case _a:return Math.max(r,8)*Math.max(t,8)/2;case ba:case wa:case Sa:case Ta:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Nr:case Aa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Na:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Va:case Wa:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Xa:case qa:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ur:case Ya:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _p(r){switch(r){case mi:case uc:return{byteLength:1,components:1};case Gs:case fc:case bi:return{byteLength:2,components:1};case ua:case fa:return{byteLength:2,components:4};case Mi:case da:case Ai:return{byteLength:4,components:1};case pc:case mc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function su(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ap(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_0=`#ifdef USE_ENVMAP
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
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S0=`PhysicalMaterial material;
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
#endif`,T0=`uniform sampler2D dfgLUT;
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
}`,A0=`
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
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
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,O0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
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
#endif`,j0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fm=`float getShadowMask() {
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
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`#include <common>
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
}`,Um=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#include <common>
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define LAMBERT
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,$m=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,Km=`#define PHONG
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
}`,jm=`#define STANDARD
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
}`,Qm=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,eg=`#define TOON
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
}`,ig=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Ip,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Np,aomap_pars_fragment:Up,batching_pars_vertex:Fp,batching_vertex:Bp,begin_vertex:kp,beginnormal_vertex:zp,bsdfs:Op,iridescence_fragment:Hp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:Zp,color_pars_vertex:$p,color_vertex:Jp,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:t0,displacementmap_vertex:e0,emissivemap_fragment:i0,emissivemap_pars_fragment:n0,colorspace_fragment:s0,colorspace_pars_fragment:r0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:_0,envmap_vertex:h0,fog_vertex:d0,fog_pars_vertex:u0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:y0,lights_pars_begin:v0,lights_toon_fragment:M0,lights_toon_pars_fragment:b0,lights_phong_fragment:w0,lights_phong_pars_fragment:E0,lights_physical_fragment:S0,lights_physical_pars_fragment:T0,lights_fragment_begin:A0,lights_fragment_maps:R0,lights_fragment_end:C0,lightprobes_pars_fragment:I0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:N0,map_fragment:U0,map_pars_fragment:F0,map_particle_fragment:B0,map_particle_pars_fragment:k0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:O0,morphinstance_vertex:H0,morphcolor_vertex:G0,morphnormal_vertex:V0,morphtarget_pars_vertex:W0,morphtarget_vertex:X0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:Z0,normal_pars_vertex:$0,normal_vertex:J0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:j0,clearcoat_normal_fragment_maps:Q0,clearcoat_pars_fragment:tm,iridescence_pars_fragment:em,opaque_fragment:im,packing:nm,premultiplied_alpha_fragment:sm,project_vertex:rm,dithering_fragment:om,dithering_pars_fragment:am,roughnessmap_fragment:lm,roughnessmap_pars_fragment:cm,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:dm,shadowmap_vertex:um,shadowmask_pars_fragment:fm,skinbase_vertex:pm,skinning_pars_vertex:mm,skinning_vertex:gm,skinnormal_vertex:xm,specularmap_fragment:ym,specularmap_pars_fragment:vm,tonemapping_fragment:_m,tonemapping_pars_fragment:Mm,transmission_fragment:bm,transmission_pars_fragment:wm,uv_pars_fragment:Em,uv_pars_vertex:Sm,uv_vertex:Tm,worldpos_vertex:Am,background_vert:Rm,background_frag:Cm,backgroundCube_vert:Im,backgroundCube_frag:Pm,cube_vert:Lm,cube_frag:Dm,depth_vert:Nm,depth_frag:Um,distance_vert:Fm,distance_frag:Bm,equirect_vert:km,equirect_frag:zm,linedashed_vert:Om,linedashed_frag:Hm,meshbasic_vert:Gm,meshbasic_frag:Vm,meshlambert_vert:Wm,meshlambert_frag:Xm,meshmatcap_vert:qm,meshmatcap_frag:Ym,meshnormal_vert:Zm,meshnormal_frag:$m,meshphong_vert:Jm,meshphong_frag:Km,meshphysical_vert:jm,meshphysical_frag:Qm,meshtoon_vert:tg,meshtoon_frag:eg,points_vert:ig,points_frag:ng,shadow_vert:sg,shadow_frag:rg,sprite_vert:og,sprite_frag:ag},yt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Ki={basic:{uniforms:ai([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:ai([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:ai([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:ai([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:ai([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ct(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:ai([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:ai([yt.points,yt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:ai([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:ai([yt.common,yt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:ai([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:ai([yt.sprite,yt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:ai([yt.common,yt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:ai([yt.lights,yt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Ki.physical={uniforms:ai([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Ja={r:0,b:0,g:0},lg=new Jt,ru=new Yt;ru.set(-1,0,0,0,1,0,0,0,1);function cg(r,t,e,i,n,s){let o=new ct(0),a=n===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=t.get(S,v)}return S}function p(_){let S=!1,v=f(_);v===null?g(o,a):v&&v.isColor&&(g(v,1),S=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(_,S){let v=f(S);v&&(v.isCubeTexture||v.mapping===Rr)?(c===void 0&&(c=new at(new dt(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:rs(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ru),c.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,(h!==v||u!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new at(new ve(2,2),new Ne({name:"BackgroundMaterial",uniforms:rs(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=le.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,S){_.getRGB(Ja,Ec(r)),e.buffers.color.setClear(Ja.r,Ja.g,Ja.b,S,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,S=1){o.set(_),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:x,dispose:m}}function hg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,o=!1;function a(N,L,B,D,U){let H=!1,X=u(N,D,B,L);s!==X&&(s=X,c(s.object)),H=f(N,D,B,U),H&&p(N,D,B,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(N,L,B,D),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function u(N,L,B,D){let U=D.wireframe===!0,H=i[L.id];H===void 0&&(H={},i[L.id]=H);let X=N.isInstancedMesh===!0?N.id:0,Y=H[X];Y===void 0&&(Y={},H[X]=Y);let O=Y[B.id];O===void 0&&(O={},Y[B.id]=O);let K=O[U];return K===void 0&&(K=d(l()),O[U]=K),K}function d(N){let L=[],B=[],D=[];for(let U=0;U<e;U++)L[U]=0,B[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:D,object:N,attributes:{},index:null}}function f(N,L,B,D){let U=s.attributes,H=L.attributes,X=0,Y=B.getAttributes();for(let O in Y)if(Y[O].location>=0){let tt=U[O],bt=H[O];if(bt===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(bt=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(bt=N.instanceColor)),tt===void 0||tt.attribute!==bt||bt&&tt.data!==bt.data)return!0;X++}return s.attributesNum!==X||s.index!==D}function p(N,L,B,D){let U={},H=L.attributes,X=0,Y=B.getAttributes();for(let O in Y)if(Y[O].location>=0){let tt=H[O];tt===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let bt={};bt.attribute=tt,tt&&tt.data&&(bt.data=tt.data),U[O]=bt,X++}s.attributes=U,s.attributesNum=X,s.index=D}function x(){let N=s.newAttributes;for(let L=0,B=N.length;L<B;L++)N[L]=0}function g(N){m(N,0)}function m(N,L){let B=s.newAttributes,D=s.enabledAttributes,U=s.attributeDivisors;B[N]=1,D[N]===0&&(r.enableVertexAttribArray(N),D[N]=1),U[N]!==L&&(r.vertexAttribDivisor(N,L),U[N]=L)}function _(){let N=s.newAttributes,L=s.enabledAttributes;for(let B=0,D=L.length;B<D;B++)L[B]!==N[B]&&(r.disableVertexAttribArray(B),L[B]=0)}function S(N,L,B,D,U,H,X){X===!0?r.vertexAttribIPointer(N,L,B,U,H):r.vertexAttribPointer(N,L,B,D,U,H)}function v(N,L,B,D){x();let U=D.attributes,H=B.getAttributes(),X=L.defaultAttributeValues;for(let Y in H){let O=H[Y];if(O.location>=0){let K=U[Y];if(K===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let tt=K.normalized,bt=K.itemSize,At=t.get(K);if(At===void 0)continue;let Zt=At.buffer,Xt=At.type,Qt=At.bytesPerElement,J=Xt===r.INT||Xt===r.UNSIGNED_INT||K.gpuType===da;if(K.isInterleavedBufferAttribute){let st=K.data,Rt=st.stride,Wt=K.offset;if(st.isInstancedInterleavedBuffer){for(let Ct=0;Ct<O.locationSize;Ct++)m(O.location+Ct,st.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ct=0;Ct<O.locationSize;Ct++)g(O.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let Ct=0;Ct<O.locationSize;Ct++)S(O.location+Ct,bt/O.locationSize,Xt,tt,Rt*Qt,(Wt+bt/O.locationSize*Ct)*Qt,J)}else{if(K.isInstancedBufferAttribute){for(let st=0;st<O.locationSize;st++)m(O.location+st,K.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let st=0;st<O.locationSize;st++)g(O.location+st);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let st=0;st<O.locationSize;st++)S(O.location+st,bt/O.locationSize,Xt,tt,bt*Qt,bt/O.locationSize*st*Qt,J)}}else if(X!==void 0){let tt=X[Y];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(O.location,tt);break;case 3:r.vertexAttrib3fv(O.location,tt);break;case 4:r.vertexAttrib4fv(O.location,tt);break;default:r.vertexAttrib1fv(O.location,tt)}}}}_()}function b(){T();for(let N in i){let L=i[N];for(let B in L){let D=L[B];for(let U in D){let H=D[U];for(let X in H)h(H[X].object),delete H[X];delete D[U]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;let L=i[N.id];for(let B in L){let D=L[B];for(let U in D){let H=D[U];for(let X in H)h(H[X].object),delete H[X];delete D[U]}}delete i[N.id]}function C(N){for(let L in i){let B=i[L];for(let D in B){let U=B[D];if(U[N.id]===void 0)continue;let H=U[N.id];for(let X in H)h(H[X].object),delete H[X];delete U[N.id]}}}function y(N){for(let L in i){let B=i[L],D=N.isInstancedMesh===!0?N.id:0,U=B[D];if(U!==void 0){for(let H in U){let X=U[H];for(let Y in X)h(X[Y].object),delete X[Y];delete U[H]}delete B[D],Object.keys(B).length===0&&delete i[L]}}}function T(){P(),o=!0,s!==n&&(s=n,c(s.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function dg(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function ug(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){return!(C!==gi&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==mi&&C!==Ai&&!y&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:b,samples:w}}function fg(r){let t=this,e=null,i=0,n=!1,s=!1,o=new Di,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=r.get(u);if(!n||p===null||p.length===0||s&&!g)s?h(null):c();else{let _=s?0:i,S=_*4,v=m.clippingState||null;l.value=v,v=h(p,d,S,f);for(let b=0;b!==S;++b)v[b]=e[b];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=f;S!==x;++S,v+=4)o.copy(u[S]).applyMatrix4(_,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ys=4,pg=6,mg=20,gg=256,Br=new Ui,Bd=new ct,Dc=null,Nc=0,Uc=0,Fc=!1,xg=new A,os=new A,ja=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=xg}=s;Dc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dc,Nc,Uc),this._renderer.xr.enabled=Fc,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Nn||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Uc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:bi,format:gi,colorSpace:Zn,depthBuffer:!1},n=kd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kd(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yg(s)),this._blurMaterial=_g(s,t,e),this._ggxMaterial=vg(s,t,e)}return n}_compileMaterial(t){let e=new at(new xe,t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,i,n,s){let l=new di(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Bd),u.toneMapping=Fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new dt,new Kt({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,_=t.background;_?_.isColor&&(g.color.copy(_),t.background=null,m=!0):(g.color.copy(Bd),m=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let b=this._cubeSize;qs(n,v*b,S>2?b:0,b,b),u.setRenderTarget(n),m&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Nn||t.mapping===ss;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());let s=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;qs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Br)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[i],g=3*x*(i>p-Ys?i-p+Ys:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,qs(s,g,m,3*x,2*x),n.setRenderTarget(s),n.render(a,Br),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,qs(t,g,m,3*x,2*x),n.setRenderTarget(t),n.render(a,Br)}_blur(t,e,i,n){let s=this._pingPongRenderTarget,o=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,n,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],u=3*h*(n>this._lodMax-Ys?n-this._lodMax+Ys:0),d=4*(this._cubeSize-h);qs(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,Br)}};function yg(r){let t=[],e=[],i=r,n=r-Ys+1+pg;for(let s=0;s<n;s++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let m=0;m<u;m++){let _=m%3*2/3-1,S=m>2?0:-1,v=[_,S,0,_+2/3,S,0,_+2/3,S+1,0,_,S,0,_+2/3,S+1,0,_,S+1,0];p.set(v,f*d*m);for(let b=0;b<d;b++){let w=h[b*2]*2-1,C=h[b*2+1]*2-1;m===0?os.set(1,C,w):m===1?os.set(-w,1,-C):m===2?os.set(-w,C,1):m===3?os.set(-1,C,-w):m===4?os.set(-w,-1,C):os.set(w,C,-1),os.toArray(x,(m*d+b)*f)}}let g=new xe;g.setAttribute("position",new Ve(p,f)),g.setAttribute("outputDirection",new Ve(x,f)),e.push(new at(g,null)),i>Ys&&i--}return{lodMeshes:e,sizeLods:t}}function kd(r,t,e){let i=new Ye(r,t,e);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function vg(r,t,e){return new Ne({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function _g(r,t,e){return new Ne({name:"SphericalGaussianBlur",defines:{SAMPLES:mg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:el(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zd(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Od(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function el(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Qa=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new yr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new dt(5,5,5),s=new Ne({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fi,blending:$i});s.uniforms.tEquirect.value=e;let o=new at(n,s),a=e.minFilter;return e.minFilter===Un&&(e.minFilter=We),new na(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}};function Mg(r){let t=new WeakMap,e=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?o(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===la||f===ca)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Qa(p.height);return x.fromEquirectangularTexture(r,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===la||f===ca,x=f===Nn||f===ss;if(p||x){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new ja(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let _=d.image;return p&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new ja(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===la?d.mapping=Nn:f===ca&&(d.mapping=ss),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function bg(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&Yn("WebGLRenderer: "+i+" extension not supported."),n}}}function wg(r,t,e,i){let n={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete n[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let S=0,v=_.length;S<v;S+=3){let b=_[S+0],w=_[S+1],C=_[S+2];d.push(b,w,w,C,C,b)}}else{let _=p.array;x=p.version;for(let S=0,v=_.length/3-1;S<v;S+=3){let b=S+0,w=S+1,C=S+2;d.push(b,w,w,C,C,b)}}let g=new(p.count>=65535?mr:pr)(d,1);g.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Eg(r,t,e){let i;function n(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,d){r.drawElements(i,d,s,u*o),e.update(d,i,1)}function c(u,d,f){f!==0&&(r.drawElementsInstanced(i,d,s,u*o,f),e.update(d,i,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Sg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:qt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Tg(r,t,e){let i=new WeakMap,n=new Le;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let T=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let v=a.attributes.position.count*S,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*b*4*u),C=new ur(w,v,b,u);C.type=Ai,C.needsUpdate=!0;let y=S*4;for(let P=0;P<u;P++){let N=g[P],L=m[P],B=_[P],D=v*b*4*P;for(let U=0;U<N.count;U++){let H=U*y;f===!0&&(n.fromBufferAttribute(N,U),w[D+H+0]=n.x,w[D+H+1]=n.y,w[D+H+2]=n.z,w[D+H+3]=0),p===!0&&(n.fromBufferAttribute(L,U),w[D+H+4]=n.x,w[D+H+5]=n.y,w[D+H+6]=n.z,w[D+H+7]=0),x===!0&&(n.fromBufferAttribute(B,U),w[D+H+8]=n.x,w[D+H+9]=n.y,w[D+H+10]=n.z,w[D+H+11]=B.itemSize===4?n.w:1)}}d={count:u,texture:C,size:new wt(v,b)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ag(r,t,e,i,n){let s=new WeakMap;function o(c){let h=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Rg={[sc]:"LINEAR_TONE_MAPPING",[rc]:"REINHARD_TONE_MAPPING",[oc]:"CINEON_TONE_MAPPING",[ac]:"ACES_FILMIC_TONE_MAPPING",[cc]:"AGX_TONE_MAPPING",[hc]:"NEUTRAL_TONE_MAPPING",[lc]:"CUSTOM_TONE_MAPPING"};function Cg(r,t,e,i,n,s){let o=new Ye(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new xe;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let h=new Xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new at(c,h),d=new Ui(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,_=[],S=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),l!==null&&l.setSize(v,b);for(let w=0;w<_.length;w++){let C=_[w];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){_=v,S=_.length>0&&_[0].isRenderPass===!0;let b=o.width,w=o.height;_.length>0&&a===null&&(a=new Ye(b,w,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(b,w,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let y=_[C];y.setSize&&y.setSize(b,w)}},this.begin=function(v,b){if(x||v.toneMapping===Fi&&_.length===0)return!1;if(m=b,b!==null){let w=b.width,C=b.height;(o.width!==w||o.height!==C)&&this.setSize(w,C)}return S===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Fi,!0},this.hasRenderPass=function(){return S},this.end=function(v,b){v.toneMapping=g,x=!0;let w=o,C=a;for(let y=0;y<_.length;y++){let T=_[y];T.enabled!==!1&&(T.render(v,C,w,b),T.needsSwap!==!1&&(w=C,C=C===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},le.getTransfer(f)===ge&&(h.defines.SRGB_TRANSFER="");let y=Rg[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var ou=new ui,zc=new Zi(1,1),au=new ur,lu=new Do,cu=new yr,Hd=[],Gd=[],Vd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function $s(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=Hd[n];if(s===void 0&&(s=new Float32Array(n),Hd[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ze(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function $e(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function il(r,t){let e=Gd[t];e===void 0&&(e=new Int32Array(t),Gd[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Ig(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2fv(this.addr,t),$e(e,t)}}function Lg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;r.uniform3fv(this.addr,t),$e(e,t)}}function Dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4fv(this.addr,t),$e(e,t)}}function Ng(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;Xd.set(i),r.uniformMatrix2fv(this.addr,!1,Xd),$e(e,i)}}function Ug(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;Wd.set(i),r.uniformMatrix3fv(this.addr,!1,Wd),$e(e,i)}}function Fg(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,i))return;Vd.set(i),r.uniformMatrix4fv(this.addr,!1,Vd),$e(e,i)}}function Bg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function kg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2iv(this.addr,t),$e(e,t)}}function zg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3iv(this.addr,t),$e(e,t)}}function Og(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4iv(this.addr,t),$e(e,t)}}function Hg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;r.uniform2uiv(this.addr,t),$e(e,t)}}function Vg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;r.uniform3uiv(this.addr,t),$e(e,t)}}function Wg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;r.uniform4uiv(this.addr,t),$e(e,t)}}function Xg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(zc.compareFunction=e.isReversedDepthBuffer()?$a:Za,s=zc):s=ou,e.setTexture2D(t||s,n)}function qg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||lu,n)}function Yg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||cu,n)}function Zg(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||au,n)}function $g(r){switch(r){case 5126:return Ig;case 35664:return Pg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Bg;case 35667:case 35671:return kg;case 35668:case 35672:return zg;case 35669:case 35673:return Og;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Jg(r,t){r.uniform1fv(this.addr,t)}function Kg(r,t){let e=$s(t,this.size,2);r.uniform2fv(this.addr,e)}function jg(r,t){let e=$s(t,this.size,3);r.uniform3fv(this.addr,e)}function Qg(r,t){let e=$s(t,this.size,4);r.uniform4fv(this.addr,e)}function tx(r,t){let e=$s(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ex(r,t){let e=$s(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ix(r,t){let e=$s(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function nx(r,t){r.uniform1iv(this.addr,t)}function sx(r,t){r.uniform2iv(this.addr,t)}function rx(r,t){r.uniform3iv(this.addr,t)}function ox(r,t){r.uniform4iv(this.addr,t)}function ax(r,t){r.uniform1uiv(this.addr,t)}function lx(r,t){r.uniform2uiv(this.addr,t)}function cx(r,t){r.uniform3uiv(this.addr,t)}function hx(r,t){r.uniform4uiv(this.addr,t)}function dx(r,t,e){let i=this.cache,n=t.length,s=il(e,n);Ze(i,s)||(r.uniform1iv(this.addr,s),$e(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=zc:o=ou;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function ux(r,t,e){let i=this.cache,n=t.length,s=il(e,n);Ze(i,s)||(r.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||lu,s[o])}function fx(r,t,e){let i=this.cache,n=t.length,s=il(e,n);Ze(i,s)||(r.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||cu,s[o])}function px(r,t,e){let i=this.cache,n=t.length,s=il(e,n);Ze(i,s)||(r.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||au,s[o])}function mx(r){switch(r){case 5126:return Jg;case 35664:return Kg;case 35665:return jg;case 35666:return Qg;case 35674:return tx;case 35675:return ex;case 35676:return ix;case 5124:case 35670:return nx;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}var Oc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},Hc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mx(e.type)}},Gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},Bc=/(\w+)(\])?(\[|\.)?/g;function qd(r,t){r.seq.push(t),r.map[t.id]=t}function gx(r,t,e){let i=r.name,n=i.length;for(Bc.lastIndex=0;;){let s=Bc.exec(i),o=Bc.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){qd(e,c===void 0?new Oc(a,r,t):new Hc(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Gc(a),qd(e,u)),e=u}}}var Zs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);gx(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Yd(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var xx=37297,yx=0;function vx(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Zd=new Yt;function _x(r){le._getMatrix(Zd,le.workingColorSpace,r);let t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(r)){case hr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $d(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+vx(r.getShaderSource(t),a)}else return s}function Mx(r,t){let e=_x(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var bx={[sc]:"Linear",[rc]:"Reinhard",[oc]:"Cineon",[ac]:"ACESFilmic",[cc]:"AgX",[hc]:"Neutral",[lc]:"Custom"};function wx(r,t){let e=bx[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ka=new A;function Ex(){le.getLuminanceCoefficients(Ka);let r=Ka.x.toFixed(4),t=Ka.y.toFixed(4),e=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Tx(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Ax(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function zr(r){return r!==""}function Jd(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(r){return r.replace(Rx,Ix)}var Cx=new Map;function Ix(r,t){let e=ee[t];if(e===void 0){let i=Cx.get(t);if(i!==void 0)e=ee[i],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vc(e)}var Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(r){return r.replace(Px,Lx)}function Lx(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Qd(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var Dx={[is]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function Nx(r){return Dx[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ux={[Nn]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE_UV"};function Fx(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Ux[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Bx={[ss]:"ENVMAP_MODE_REFRACTION"};function kx(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Bx[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zx={[nc]:"ENVMAP_BLENDING_MULTIPLY",[gd]:"ENVMAP_BLENDING_MIX",[xd]:"ENVMAP_BLENDING_ADD"};function Ox(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":zx[r.combine]||"ENVMAP_BLENDING_NONE"}function Hx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Gx(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Nx(e),c=Fx(e),h=kx(e),u=Ox(e),d=Hx(e),f=Sx(e),p=Tx(s),x=n.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(zr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(zr).join(`
`),m.length>0&&(m+=`
`)):(g=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),m=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Fi?wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Mx("linearToOutputTexel",e.outputColorSpace),Ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Vc(o),o=Jd(o,e),o=Kd(o,e),a=Vc(a),a=Jd(a,e),a=Kd(a,e),o=jd(o),a=jd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=_+g+o,v=_+m+a,b=Yd(n,n.VERTEX_SHADER,S),w=Yd(n,n.FRAGMENT_SHADER,v);n.attachShader(x,b),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(N){if(r.debug.checkShaderErrors){let L=n.getProgramInfoLog(x)||"",B=n.getShaderInfoLog(b)||"",D=n.getShaderInfoLog(w)||"",U=L.trim(),H=B.trim(),X=D.trim(),Y=!0,O=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,b,w);else{let K=$d(n,b,"vertex"),tt=$d(n,w,"fragment");qt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+K+`
`+tt)}else U!==""?Vt("WebGLProgram: Program Info Log:",U):(H===""||X==="")&&(O=!1);O&&(N.diagnostics={runnable:Y,programLog:U,vertexShader:{log:H,prefix:g},fragmentShader:{log:X,prefix:m}})}n.deleteShader(b),n.deleteShader(w),y=new Zs(n,x),T=Ax(n,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,xx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}var Vx=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xc(t),e.set(t,i)),i}},Xc=class{constructor(t){this.id=Vx++,this.code=t,this.usedTimes=0}};function Wx(r){return r===Bn||r===Nr||r===Ur}function Xx(r,t,e,i,n,s){let o=new fr,a=new Wc,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,P,N,L,B){let D=N.fog,U=L.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=t.get(y.envMap||H,X),O=Y&&Y.mapping===Rr?Y.image.height:null,K=f[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Vt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,bt=tt!==void 0?tt.length:0,At=0;U.morphAttributes.position!==void 0&&(At=1),U.morphAttributes.normal!==void 0&&(At=2),U.morphAttributes.color!==void 0&&(At=3);let Zt,Xt,Qt,J;if(K){let Se=Ki[K];Zt=Se.vertexShader,Xt=Se.fragmentShader}else{Zt=y.vertexShader,Xt=y.fragmentShader;let Se=a.getVertexShaderStage(y),pe=a.getFragmentShaderStage(y);a.update(y,Se,pe),Qt=Se.id,J=pe.id}let st=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),Wt=L.isInstancedMesh===!0,Ct=L.isBatchedMesh===!0,se=!!y.map,qe=!!y.matcap,re=!!Y,ue=!!y.aoMap,Ee=!!y.lightMap,ae=!!y.bumpMap&&y.wireframe===!1,Pe=!!y.normalMap,Je=!!y.displacementMap,pi=!!y.emissiveMap,De=!!y.metalnessMap,Oe=!!y.roughnessMap,z=y.anisotropy>0,ii=y.clearcoat>0,ye=y.dispersion>0,I=y.retroreflectivity>0,M=y.iridescence>0,G=y.sheen>0,q=y.transmission>0,j=z&&!!y.anisotropyMap,lt=ii&&!!y.clearcoatMap,ht=ii&&!!y.clearcoatNormalMap,Q=ii&&!!y.clearcoatRoughnessMap,it=M&&!!y.iridescenceMap,ut=M&&!!y.iridescenceThicknessMap,Bt=G&&!!y.sheenColorMap,xt=G&&!!y.sheenRoughnessMap,ft=!!y.specularMap,kt=!!y.specularColorMap,Gt=!!y.specularIntensityMap,$t=q&&!!y.transmissionMap,k=q&&!!y.thicknessMap,pt=!!y.gradientMap,et=!!y.alphaMap,mt=y.alphaTest>0,Mt=!!y.alphaHash,rt=!!y.extensions,zt=Fi;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(zt=r.toneMapping);let Ut={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:Xt,defines:y.defines,customVertexShaderID:Qt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ct,batchingColor:Ct&&L._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&L.instanceColor!==null,instancingMorph:Wt&&L.morphTexture!==null,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:se,matcap:qe,envMap:re,envMapMode:re&&Y.mapping,envMapCubeUVHeight:O,aoMap:ue,lightMap:Ee,bumpMap:ae,normalMap:Pe,displacementMap:Je,emissiveMap:pi,normalMapObjectSpace:Pe&&y.normalMapType===_d,normalMapTangentSpace:Pe&&y.normalMapType===Fr,packedNormalMap:Pe&&y.normalMapType===Fr&&Wx(y.normalMap.format),metalnessMap:De,roughnessMap:Oe,anisotropy:z,anisotropyMap:j,clearcoat:ii,clearcoatMap:lt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Q,dispersion:ye,retroreflection:I,iridescence:M,iridescenceMap:it,iridescenceThicknessMap:ut,sheen:G,sheenColorMap:Bt,sheenRoughnessMap:xt,specularMap:ft,specularColorMap:kt,specularIntensityMap:Gt,transmission:q,transmissionMap:$t,thicknessMap:k,gradientMap:pt,opaque:y.transparent===!1&&y.blending===Hs&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:mt,alphaHash:Mt,combine:y.combine,mapUv:se&&p(y.map.channel),aoMapUv:ue&&p(y.aoMap.channel),lightMapUv:Ee&&p(y.lightMap.channel),bumpMapUv:ae&&p(y.bumpMap.channel),normalMapUv:Pe&&p(y.normalMap.channel),displacementMapUv:Je&&p(y.displacementMap.channel),emissiveMapUv:pi&&p(y.emissiveMap.channel),metalnessMapUv:De&&p(y.metalnessMap.channel),roughnessMapUv:Oe&&p(y.roughnessMap.channel),anisotropyMapUv:j&&p(y.anisotropyMap.channel),clearcoatMapUv:lt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:xt&&p(y.sheenRoughnessMap.channel),specularMapUv:ft&&p(y.specularMap.channel),specularColorMapUv:kt&&p(y.specularColorMap.channel),specularIntensityMapUv:Gt&&p(y.specularIntensityMap.channel),transmissionMapUv:$t&&p(y.transmissionMap.channel),thicknessMapUv:k&&p(y.thicknessMap.channel),alphaMapUv:et&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Pe||z),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(se||et),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&Pe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Rt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:se&&y.map.isVideoTexture===!0&&le.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:pi&&y.emissiveMap.isVideoTexture===!0&&le.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===de,flipSided:y.side===fi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&y.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(T,y),_(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function S(y){let T=f[y.type],P;if(T){let N=Ki[T];P=Nd.clone(N.uniforms)}else P=y.uniforms;return P}function v(y,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Gx(r,T,y,n),c.push(P),h.set(T,P)),P}function b(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:v,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function qx(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Yx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function tu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function eu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,g,m){let _=r[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},r[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=g,_.group=m),t++,_}function l(d,f,p,x,g,m,_){_.reversedDepth===!0&&(g=-g);let S=a(d,f,p,x,g,m);p.transmission>0?i.push(S):p.transparent===!0?n.push(S):e.push(S)}function c(d,f,p,x,g,m){let _=a(d,f,p,x,g,m);p.transmission>0?i.unshift(_):p.transparent===!0?n.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||Yx),i.length>1&&i.sort(f||tu),n.length>1&&n.sort(f||tu)}function u(){for(let d=t,f=r.length;d<f;d++){let p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:u,sort:h}}function Zx(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new eu,r.set(i,[o])):n>=s.length?(o=new eu,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function $x(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new ct};break;case"SpotLight":e={position:new A,direction:new A,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new A,halfWidth:new A,halfHeight:new A};break}return r[t.id]=e,e}}}function Jx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Kx=0;function jx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Qx(r){let t=new $x,e=Jx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new A);let n=new A,s=new Jt,o=new Jt;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,_=0,S=0,v=0,b=0,w=0,C=0,y=0,T=0,P=0;c.sort(jx);for(let L=0,B=c.length;L<B;L++){let D=c[L],U=D.color,H=D.intensity,X=D.distance,Y=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Bn?Y=D.shadow.map.texture:Y=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=U.r*H,u+=U.g*H,d+=U.b*H;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],H);P++}else if(D.isSunLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,tt=e.get(D);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[p]=tt,i.sunShadowMap[p]=Y;let bt=K.getViewportCount();for(let At=0;At<bt;At++)i.sunShadowMatrix[x+At]=K.getMatrix(At),i.sunShadowCascade[x+At]=K._cascadeData[At];x+=bt,p++}i.sun[f]=O,f++}else if(D.isDirectionalLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,tt=e.get(D);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=Y,i.directionalShadowMatrix[g]=D.shadow.matrix,b++}i.directional[g]=O,g++}else if(D.isSpotLight){let O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(U).multiplyScalar(H),O.distance=X,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[_]=O;let K=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,K.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[_]=K.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,i.spotShadow[_]=tt,i.spotShadowMap[_]=Y,C++}_++}else if(D.isRectAreaLight){let O=t.get(D);O.color.copy(U).multiplyScalar(H),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=O,S++}else if(D.isPointLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let K=D.shadow,tt=e.get(D);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=D.shadow.matrix,w++}i.point[m]=O,m++}else if(D.isHemisphereLight){let O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(H),O.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[v]=O,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let N=i.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==S||N.hemiLength!==v||N.numSunShadows!==p||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==C||N.numSpotMaps!==y||N.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=g,i.spot.length=_,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+y-T,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=_,N.rectAreaLength=S,N.hemiLength=v,N.numSunShadows=p,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=C,N.numSpotMaps=y,N.numLightProbes=P,i.version=Kx++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let v=c[_];if(v.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),d++}else if(v.isSpotLight){let b=i.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let b=i.hemi[g];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function iu(r){let t=new Qx(r),e=[],i=[],n=[];function s(d){u.camera=d,e.length=0,i.length=0,n.length=0}function o(d){e.push(d)}function a(d){i.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ty(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new iu(r),t.set(n,[a])):s>=o.length?(a=new iu(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iy=`uniform sampler2D shadow_pass;
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
}`,ny=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],sy=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],nu=new Jt,kr=new A,kc=new A;function ry(r,t,e){let i=new Bs,n=new wt,s=new wt,o=new Le,a=new ks,l=new qo,c={},h=e.maxTextureSize,u={[Dn]:fi,[fi]:Dn,[de]:de},d=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:ey,fragmentShader:iy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new xe;p.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new at(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is;let m=this.type;this.render=function(w,C,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Qh&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=is);let T=r.getRenderTarget(),P=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),L=r.state;L.setBlending($i),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=m!==this.type;B&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(U=>U.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,U=w.length;D<U;D++){let H=w[D],X=H.shadow;if(X===void 0){Vt("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let Y=X.getFrameExtents();n.multiply(Y),s.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Y.x),n.x=s.x*Y.x,X.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Y.y),n.y=s.y*Y.y,X.mapSize.y=s.y));let O=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=O,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Os){if(H.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ye(n.x,n.y,{format:Bn,type:bi,minFilter:We,magFilter:We,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new Zi(n.x,n.y,Ai),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=Wi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=he,X.map.depthTexture.magFilter=he}else H.isPointLight?(X.map=new Qa(n.x),X.map.depthTexture=new Uo(n.x,Mi)):(X.map=new Ye(n.x,n.y),X.map.depthTexture=new Zi(n.x,n.y,Mi)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=Wi,this.type===is?(X.map.depthTexture.compareFunction=O?$a:Za,X.map.depthTexture.minFilter=We,X.map.depthTexture.magFilter=We):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=he,X.map.depthTexture.magFilter=he);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==n.x||X.map.height!==n.y)&&X.map.setSize(n.x,n.y);let K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,y);for(let tt=0;tt<K;tt++){let bt=X.getCamera(tt);if(H.isPointLight){let At=X.camera,Zt=X.matrix,Xt=H.distance||At.far;Xt!==At.far&&(At.far=Xt,At.updateProjectionMatrix()),kr.setFromMatrixPosition(H.matrixWorld),At.position.copy(kr),kc.copy(At.position),kc.add(ny[tt]),At.up.copy(sy[tt]),At.lookAt(kc),At.updateMatrixWorld(),Zt.makeTranslation(-kr.x,-kr.y,-kr.z),nu.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),X._frustum.setFromProjectionMatrix(nu,At.coordinateSystem,At.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,tt),r.clear();else{tt===0&&(r.setRenderTarget(X.map),r.clear());let At=X.getViewport(tt);o.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),L.viewport(o)}i=X.getFrustum(tt),v(C,y,bt,H,this.type)}X.isPointLightShadow!==!0&&this.type===Os&&_(X,y),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(T,P,N)};function _(w,C){let y=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ye(n.x,n.y,{format:Bn,type:bi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,y,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,y,f,x,null)}function S(w,C,y,T){let P=null,N=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=P.uuid,B=C.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let U=D[B];U===void 0&&(U=P.clone(),D[B]=U,C.addEventListener("dispose",b)),P=U}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Os?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=r.properties.get(P);L.light=y}return P}function v(w,C,y,T,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Os)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let B=t.update(w),D=w.material;if(Array.isArray(D)){let U=B.groups;for(let H=0,X=U.length;H<X;H++){let Y=U[H],O=D[Y.materialIndex];if(O&&O.visible){let K=S(w,O,T,P);w.onBeforeShadow(r,w,C,y,B,K,Y),r.renderBufferDirect(y,null,B,K,w,Y),w.onAfterShadow(r,w,C,y,B,K,Y)}}}else if(D.visible){let U=S(w,D,T,P);w.onBeforeShadow(r,w,C,y,B,U,null),r.renderBufferDirect(y,null,B,U,w,null),w.onAfterShadow(r,w,C,y,B,U,null)}}let L=w.children;for(let B=0,D=L.length;B<D;B++)v(L[B],C,y,T,P)}function b(w){w.target.removeEventListener("dispose",b);for(let y in c){let T=c[y],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function oy(r,t){function e(){let k=!1,pt=new Le,et=null,mt=new Le(0,0,0,0);return{setMask:function(Mt){et!==Mt&&!k&&(r.colorMask(Mt,Mt,Mt,Mt),et=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,rt,zt,Ut,Se){Se===!0&&(Mt*=Ut,rt*=Ut,zt*=Ut),pt.set(Mt,rt,zt,Ut),mt.equals(pt)===!1&&(r.clearColor(Mt,rt,zt,Ut),mt.copy(pt))},reset:function(){k=!1,et=null,mt.set(-1,0,0,0)}}}function i(){let k=!1,pt=!1,et=null,mt=null,Mt=null;return{setReversed:function(rt){if(pt!==rt){let zt=t.get("EXT_clip_control");rt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),pt=rt;let Ut=Mt;Mt=null,this.setClear(Ut)}},getReversed:function(){return pt},setTest:function(rt){rt?st(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(rt){et!==rt&&!k&&(r.depthMask(rt),et=rt)},setFunc:function(rt){if(pt&&(rt=Ld[rt]),mt!==rt){switch(rt){case bo:r.depthFunc(r.NEVER);break;case wo:r.depthFunc(r.ALWAYS);break;case Eo:r.depthFunc(r.LESS);break;case Cs:r.depthFunc(r.LEQUAL);break;case So:r.depthFunc(r.EQUAL);break;case To:r.depthFunc(r.GEQUAL);break;case Ao:r.depthFunc(r.GREATER);break;case Ro:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=rt}},setLocked:function(rt){k=rt},setClear:function(rt){Mt!==rt&&(Mt=rt,pt&&(rt=1-rt),r.clearDepth(rt))},reset:function(){k=!1,et=null,mt=null,Mt=null,pt=!1}}}function n(){let k=!1,pt=null,et=null,mt=null,Mt=null,rt=null,zt=null,Ut=null,Se=null;return{setTest:function(pe){k||(pe?st(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(pe){pt!==pe&&!k&&(r.stencilMask(pe),pt=pe)},setFunc:function(pe,Ci,Oi){(et!==pe||mt!==Ci||Mt!==Oi)&&(r.stencilFunc(pe,Ci,Oi),et=pe,mt=Ci,Mt=Oi)},setOp:function(pe,Ci,Oi){(rt!==pe||zt!==Ci||Ut!==Oi)&&(r.stencilOp(pe,Ci,Oi),rt=pe,zt=Ci,Ut=Oi)},setLocked:function(pe){k=pe},setClear:function(pe){Se!==pe&&(r.clearStencil(pe),Se=pe)},reset:function(){k=!1,pt=null,et=null,mt=null,Mt=null,rt=null,zt=null,Ut=null,Se=null}}}let s=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,S=null,v=null,b=null,w=null,C=null,y=new ct(0,0,0),T=0,P=!1,N=null,L=null,B=null,D=null,U=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=Y>=2);let K=null,tt={},bt=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),Zt=new Le().fromArray(bt),Xt=new Le().fromArray(At);function Qt(k,pt,et,mt){let Mt=new Uint8Array(4),rt=r.createTexture();r.bindTexture(k,rt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let zt=0;zt<et;zt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(pt,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(pt+zt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return rt}let J={};J[r.TEXTURE_2D]=Qt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(Cs),ae(!1),Pe(Ql),st(r.CULL_FACE),ue($i);function st(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function Rt(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function Wt(k,pt){return d[k]!==pt?(r.bindFramebuffer(k,pt),d[k]=pt,k===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=pt),k===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ct(k,pt){let et=p,mt=!1;if(k){et=f.get(pt),et===void 0&&(et=[],f.set(pt,et));let Mt=k.textures;if(et.length!==Mt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,zt=Mt.length;rt<zt;rt++)et[rt]=r.COLOR_ATTACHMENT0+rt;et.length=Mt.length,mt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,mt=!0);mt&&r.drawBuffers(et)}function se(k){return x!==k?(r.useProgram(k),x=k,!0):!1}let qe={[ns]:r.FUNC_ADD,[td]:r.FUNC_SUBTRACT,[ed]:r.FUNC_REVERSE_SUBTRACT};qe[id]=r.MIN,qe[nd]=r.MAX;let re={[sd]:r.ZERO,[aa]:r.ONE,[rd]:r.SRC_COLOR,[ic]:r.SRC_ALPHA,[dd]:r.SRC_ALPHA_SATURATE,[cd]:r.DST_COLOR,[ad]:r.DST_ALPHA,[od]:r.ONE_MINUS_SRC_COLOR,[Ar]:r.ONE_MINUS_SRC_ALPHA,[hd]:r.ONE_MINUS_DST_COLOR,[ld]:r.ONE_MINUS_DST_ALPHA,[ud]:r.CONSTANT_COLOR,[fd]:r.ONE_MINUS_CONSTANT_COLOR,[pd]:r.CONSTANT_ALPHA,[md]:r.ONE_MINUS_CONSTANT_ALPHA};function ue(k,pt,et,mt,Mt,rt,zt,Ut,Se,pe){if(k===$i){g===!0&&(Rt(r.BLEND),g=!1);return}if(g===!1&&(st(r.BLEND),g=!0),k!==oa){if(k!==m||pe!==P){if((_!==ns||b!==ns)&&(r.blendEquation(r.FUNC_ADD),_=ns,b=ns),pe)switch(k){case Hs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Be:r.blendFunc(r.ONE,r.ONE);break;case tc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ec:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qt("WebGLState: Invalid blending: ",k);break}else switch(k){case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Be:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tc:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ec:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",k);break}S=null,v=null,w=null,C=null,y.set(0,0,0),T=0,m=k,P=pe}return}Mt=Mt||pt,rt=rt||et,zt=zt||mt,(pt!==_||Mt!==b)&&(r.blendEquationSeparate(qe[pt],qe[Mt]),_=pt,b=Mt),(et!==S||mt!==v||rt!==w||zt!==C)&&(r.blendFuncSeparate(re[et],re[mt],re[rt],re[zt]),S=et,v=mt,w=rt,C=zt),(Ut.equals(y)===!1||Se!==T)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Se),y.copy(Ut),T=Se),m=k,P=!1}function Ee(k,pt){k.side===de?Rt(r.CULL_FACE):st(r.CULL_FACE);let et=k.side===fi;pt&&(et=!et),ae(et),k.blending===Hs&&k.transparent===!1?ue($i):ue(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let mt=k.stencilWrite;a.setTest(mt),mt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),pi(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ae(k){N!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),N=k)}function Pe(k){k!==Kh?(st(r.CULL_FACE),k!==L&&(k===Ql?r.cullFace(r.BACK):k===jh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),L=k}function Je(k){k!==B&&(X&&r.lineWidth(k),B=k)}function pi(k,pt,et){k?(st(r.POLYGON_OFFSET_FILL),(D!==pt||U!==et)&&(D=pt,U=et,o.getReversed()&&(pt=-pt),r.polygonOffset(pt,et))):Rt(r.POLYGON_OFFSET_FILL)}function De(k){k?st(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function Oe(k){k===void 0&&(k=r.TEXTURE0+H-1),K!==k&&(r.activeTexture(k),K=k)}function z(k,pt,et){et===void 0&&(K===null?et=r.TEXTURE0+H-1:et=K);let mt=tt[et];mt===void 0&&(mt={type:void 0,texture:void 0},tt[et]=mt),(mt.type!==k||mt.texture!==pt)&&(K!==et&&(r.activeTexture(et),K=et),r.bindTexture(k,pt||J[k]),mt.type=k,mt.texture=pt)}function ii(){let k=tt[K];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ye(){try{r.compressedTexImage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function M(){try{r.texSubImage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function G(){try{r.texSubImage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function j(){try{r.compressedTexSubImage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function lt(){try{r.texStorage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function ht(){try{r.texStorage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function Q(){try{r.texImage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function it(){try{r.texImage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function ut(k){return u[k]!==void 0?u[k]:r.getParameter(k)}function Bt(k,pt){u[k]!==pt&&(r.pixelStorei(k,pt),u[k]=pt)}function xt(k){Zt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Zt.copy(k))}function ft(k){Xt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Xt.copy(k))}function kt(k,pt){let et=c.get(pt);et===void 0&&(et=new WeakMap,c.set(pt,et));let mt=et.get(k);mt===void 0&&(mt=r.getUniformBlockIndex(pt,k.name),et.set(k,mt))}function Gt(k,pt){let mt=c.get(pt).get(k);l.get(pt)!==mt&&(r.uniformBlockBinding(pt,mt,k.__bindingPointIndex),l.set(pt,mt))}function $t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,tt={},d={},f=new WeakMap,p=[],x=null,g=!1,m=null,_=null,S=null,v=null,b=null,w=null,C=null,y=new ct(0,0,0),T=0,P=!1,N=null,L=null,B=null,D=null,U=null,Zt.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:Rt,bindFramebuffer:Wt,drawBuffers:Ct,useProgram:se,setBlending:ue,setMaterial:Ee,setFlipSided:ae,setCullFace:Pe,setLineWidth:Je,setPolygonOffset:pi,setScissorTest:De,activeTexture:Oe,bindTexture:z,unbindTexture:ii,compressedTexImage2D:ye,compressedTexImage3D:I,texImage2D:Q,texImage3D:it,pixelStorei:Bt,getParameter:ut,updateUBOMapping:kt,uniformBlockBinding:Gt,texStorage2D:lt,texStorage3D:ht,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:xt,viewport:ft,reset:$t}}function ay(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,M){return p?new OffscreenCanvas(I,M):dr("canvas")}function g(I,M,G){let q=1,j=ye(I);if((j.width>G||j.height>G)&&(q=G/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let lt=Math.floor(q*j.width),ht=Math.floor(q*j.height);d===void 0&&(d=x(lt,ht));let Q=M?x(lt,ht):d;return Q.width=lt,Q.height=ht,Q.getContext("2d").drawImage(I,0,0,lt,ht),Vt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+lt+"x"+ht+")."),Q}else return"data"in I&&Vt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function m(I){return I.generateMipmaps}function _(I){r.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(I,M,G,q,j,lt=!1){if(I!==null){if(r[I]!==void 0)return r[I];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ht;q&&(ht=t.get("EXT_texture_norm16"),ht||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===r.RED&&(G===r.FLOAT&&(Q=r.R32F),G===r.HALF_FLOAT&&(Q=r.R16F),G===r.UNSIGNED_BYTE&&(Q=r.R8),G===r.UNSIGNED_SHORT&&ht&&(Q=ht.R16_EXT),G===r.SHORT&&ht&&(Q=ht.R16_SNORM_EXT)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.R8UI),G===r.UNSIGNED_SHORT&&(Q=r.R16UI),G===r.UNSIGNED_INT&&(Q=r.R32UI),G===r.BYTE&&(Q=r.R8I),G===r.SHORT&&(Q=r.R16I),G===r.INT&&(Q=r.R32I)),M===r.RG&&(G===r.FLOAT&&(Q=r.RG32F),G===r.HALF_FLOAT&&(Q=r.RG16F),G===r.UNSIGNED_BYTE&&(Q=r.RG8),G===r.UNSIGNED_SHORT&&ht&&(Q=ht.RG16_EXT),G===r.SHORT&&ht&&(Q=ht.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RG8UI),G===r.UNSIGNED_SHORT&&(Q=r.RG16UI),G===r.UNSIGNED_INT&&(Q=r.RG32UI),G===r.BYTE&&(Q=r.RG8I),G===r.SHORT&&(Q=r.RG16I),G===r.INT&&(Q=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),G===r.UNSIGNED_INT&&(Q=r.RGB32UI),G===r.BYTE&&(Q=r.RGB8I),G===r.SHORT&&(Q=r.RGB16I),G===r.INT&&(Q=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),G===r.UNSIGNED_INT&&(Q=r.RGBA32UI),G===r.BYTE&&(Q=r.RGBA8I),G===r.SHORT&&(Q=r.RGBA16I),G===r.INT&&(Q=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_SHORT&&ht&&(Q=ht.RGB16_EXT),G===r.SHORT&&ht&&(Q=ht.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),M===r.RGBA){let it=lt?hr:le.getTransfer(j);G===r.FLOAT&&(Q=r.RGBA32F),G===r.HALF_FLOAT&&(Q=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Q=it===ge?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&ht&&(Q=ht.RGBA16_EXT),G===r.SHORT&&ht&&(Q=ht.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function b(I,M){let G;return I?M===null||M===Mi||M===Vs?G=r.DEPTH24_STENCIL8:M===Ai?G=r.DEPTH32F_STENCIL8:M===Gs&&(G=r.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===Vs?G=r.DEPTH_COMPONENT24:M===Ai?G=r.DEPTH_COMPONENT32F:M===Gs&&(G=r.DEPTH_COMPONENT16),G}function w(I,M){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==he&&I.minFilter!==We?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function C(I){let M=I.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function y(I){let M=I.target;M.removeEventListener("dispose",y),N(M)}function T(I){let M=i.get(I);if(M.__webglInit===void 0)return;let G=I.source,q=f.get(G);if(q){let j=q[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(I),Object.keys(q).length===0&&f.delete(G)}i.remove(I)}function P(I){let M=i.get(I);r.deleteTexture(M.__webglTexture);let G=I.source,q=f.get(G);delete q[M.__cacheKey],o.memory.textures--}function N(I){let M=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let j=0;j<M.__webglFramebuffer[q].length;j++)r.deleteFramebuffer(M.__webglFramebuffer[q][j]);else r.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)r.deleteFramebuffer(M.__webglFramebuffer[q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=I.textures;for(let q=0,j=G.length;q<j;q++){let lt=i.get(G[q]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),o.memory.textures--),i.remove(G[q])}i.remove(I)}let L=0;function B(){L=0}function D(){return L}function U(I){L=I}function H(){let I=L;return I>=n.maxTextures&&Vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),L+=1,I}function X(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function Y(I,M){let G=i.get(I);if(I.isVideoTexture&&z(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let q=I.image;if(q===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(G,I,M);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function O(I,M){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Rt(G,I,M);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function K(I,M){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Rt(G,I,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function tt(I,M){let G=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){Wt(G,I,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}let bt={[Is]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[Co]:r.MIRRORED_REPEAT},At={[he]:r.NEAREST,[yd]:r.NEAREST_MIPMAP_NEAREST,[Cr]:r.NEAREST_MIPMAP_LINEAR,[We]:r.LINEAR,[ha]:r.LINEAR_MIPMAP_NEAREST,[Un]:r.LINEAR_MIPMAP_LINEAR},Zt={[bd]:r.NEVER,[Ad]:r.ALWAYS,[wd]:r.LESS,[Za]:r.LEQUAL,[Ed]:r.EQUAL,[$a]:r.GEQUAL,[Sd]:r.GREATER,[Td]:r.NOTEQUAL};function Xt(I,M){if(M.type===Ai&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===We||M.magFilter===ha||M.magFilter===Cr||M.magFilter===Un||M.minFilter===We||M.minFilter===ha||M.minFilter===Cr||M.minFilter===Un)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,bt[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,bt[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,bt[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,At[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,At[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Zt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===he||M.minFilter!==Cr&&M.minFilter!==Un||M.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(I,M){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",C));let q=M.source,j=f.get(q);j===void 0&&(j={},f.set(q,j));let lt=X(M);if(lt!==I.__cacheKey){j[lt]===void 0&&(j[lt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[lt].usedTimes++;let ht=j[I.__cacheKey];ht!==void 0&&(j[I.__cacheKey].usedTimes--,ht.usedTimes===0&&P(M)),I.__cacheKey=lt,I.__webglTexture=j[lt].texture}return G}function J(I,M,G){return Math.floor(Math.floor(I/G)/M)}function st(I,M,G,q){let lt=I.updateRanges;if(lt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,q,M.data);else{lt.sort((Bt,xt)=>Bt.start-xt.start);let ht=0;for(let Bt=1;Bt<lt.length;Bt++){let xt=lt[ht],ft=lt[Bt],kt=xt.start+xt.count,Gt=J(ft.start,M.width,4),$t=J(xt.start,M.width,4);ft.start<=kt+1&&Gt===$t&&J(ft.start+ft.count-1,M.width,4)===Gt?xt.count=Math.max(xt.count,ft.start+ft.count-xt.start):(++ht,lt[ht]=ft)}lt.length=ht+1;let Q=e.getParameter(r.UNPACK_ROW_LENGTH),it=e.getParameter(r.UNPACK_SKIP_PIXELS),ut=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Bt=0,xt=lt.length;Bt<xt;Bt++){let ft=lt[Bt],kt=Math.floor(ft.start/4),Gt=Math.ceil(ft.count/4),$t=kt%M.width,k=Math.floor(kt/M.width),pt=Gt,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(r.UNPACK_SKIP_ROWS,k),e.texSubImage2D(r.TEXTURE_2D,0,$t,k,pt,et,G,q,M.data)}I.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,it),e.pixelStorei(r.UNPACK_SKIP_ROWS,ut)}}function Rt(I,M,G){let q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=r.TEXTURE_3D);let j=Qt(I,M),lt=M.source;e.bindTexture(q,I.__webglTexture,r.TEXTURE0+G);let ht=i.get(lt);if(lt.version!==ht.__version||j===!0){if(e.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let et=le.getPrimaries(le.workingColorSpace),mt=M.colorSpace===Bi?null:le.getPrimaries(M.colorSpace),Mt=M.colorSpace===Bi||et===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let it=g(M.image,!1,n.maxTextureSize);it=ii(M,it);let ut=s.convert(M.format,M.colorSpace),Bt=s.convert(M.type),xt=v(M.internalFormat,ut,Bt,M.normalized,M.colorSpace,M.isVideoTexture);Xt(q,M);let ft,kt=M.mipmaps,Gt=M.isVideoTexture!==!0,$t=ht.__version===void 0||j===!0,k=lt.dataReady,pt=w(M,it);if(M.isDepthTexture)xt=b(M.format===Fn,M.type),$t&&(Gt?e.texStorage2D(r.TEXTURE_2D,1,xt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,xt,it.width,it.height,0,ut,Bt,null));else if(M.isDataTexture)if(kt.length>0){Gt&&$t&&e.texStorage2D(r.TEXTURE_2D,pt,xt,kt[0].width,kt[0].height);for(let et=0,mt=kt.length;et<mt;et++)ft=kt[et],Gt?k&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,ut,Bt,ft.data):e.texImage2D(r.TEXTURE_2D,et,xt,ft.width,ft.height,0,ut,Bt,ft.data);M.generateMipmaps=!1}else Gt?($t&&e.texStorage2D(r.TEXTURE_2D,pt,xt,it.width,it.height),k&&st(M,it,ut,Bt)):e.texImage2D(r.TEXTURE_2D,0,xt,it.width,it.height,0,ut,Bt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&$t&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,xt,kt[0].width,kt[0].height,it.depth);for(let et=0,mt=kt.length;et<mt;et++)if(ft=kt[et],M.format!==gi)if(ut!==null)if(Gt){if(k)if(M.layerUpdates.size>0){let Mt=Ac(ft.width,ft.height,M.format,M.type);for(let rt of M.layerUpdates){let zt=ft.data.subarray(rt*Mt/ft.data.BYTES_PER_ELEMENT,(rt+1)*Mt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,rt,ft.width,ft.height,1,ut,zt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,it.depth,ut,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,xt,ft.width,ft.height,it.depth,0,ft.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?k&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,it.depth,ut,Bt,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,xt,ft.width,ft.height,it.depth,0,ut,Bt,ft.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Gt&&$t&&e.texStorage2D(r.TEXTURE_2D,pt,xt,kt[0].width,kt[0].height);for(let et=0,mt=kt.length;et<mt;et++)ft=kt[et],M.format!==gi?ut!==null?Gt?k&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,et,xt,ft.width,ft.height,0,ft.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?k&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ft.width,ft.height,ut,Bt,ft.data):e.texImage2D(r.TEXTURE_2D,et,xt,ft.width,ft.height,0,ut,Bt,ft.data)}else if(M.isDataArrayTexture)if(Gt){if($t&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,xt,it.width,it.height,it.depth),k)if(M.layerUpdates.size>0){let et=Ac(it.width,it.height,M.format,M.type);for(let mt of M.layerUpdates){let Mt=it.data.subarray(mt*et/it.data.BYTES_PER_ELEMENT,(mt+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,mt,it.width,it.height,1,ut,Bt,Mt)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ut,Bt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,xt,it.width,it.height,it.depth,0,ut,Bt,it.data);else if(M.isData3DTexture)Gt?($t&&e.texStorage3D(r.TEXTURE_3D,pt,xt,it.width,it.height,it.depth),k&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ut,Bt,it.data)):e.texImage3D(r.TEXTURE_3D,0,xt,it.width,it.height,it.depth,0,ut,Bt,it.data);else if(M.isFramebufferTexture){if($t)if(Gt)e.texStorage2D(r.TEXTURE_2D,pt,xt,it.width,it.height);else{let et=it.width,mt=it.height;for(let Mt=0;Mt<pt;Mt++)e.texImage2D(r.TEXTURE_2D,Mt,xt,et,mt,0,ut,Bt,null),et>>=1,mt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),it.parentNode!==et){et.appendChild(it),u.add(M),et.onpaint=mt=>{let Mt=mt.changedElements;for(let rt of u)Mt.includes(rt.image)&&(rt.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,it);else{let Mt=r.RGBA,rt=r.RGBA,zt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Mt,rt,zt,it)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Gt&&$t){let et=ye(kt[0]);e.texStorage2D(r.TEXTURE_2D,pt,xt,et.width,et.height)}for(let et=0,mt=kt.length;et<mt;et++)ft=kt[et],Gt?k&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ut,Bt,ft):e.texImage2D(r.TEXTURE_2D,et,xt,ut,Bt,ft);M.generateMipmaps=!1}else if(Gt){if($t){let et=ye(it);e.texStorage2D(r.TEXTURE_2D,pt,xt,et.width,et.height)}k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,Bt,it)}else e.texImage2D(r.TEXTURE_2D,0,xt,ut,Bt,it);m(M)&&_(q),ht.__version=lt.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Wt(I,M,G){if(M.image.length!==6)return;let q=Qt(I,M),j=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+G);let lt=i.get(j);if(j.version!==lt.__version||q===!0){e.activeTexture(r.TEXTURE0+G);let ht=le.getPrimaries(le.workingColorSpace),Q=M.colorSpace===Bi?null:le.getPrimaries(M.colorSpace),it=M.colorSpace===Bi||ht===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Bt=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let rt=0;rt<6;rt++)!ut&&!Bt?xt[rt]=g(M.image[rt],!0,n.maxCubemapSize):xt[rt]=Bt?M.image[rt].image:M.image[rt],xt[rt]=ii(M,xt[rt]);let ft=xt[0],kt=s.convert(M.format,M.colorSpace),Gt=s.convert(M.type),$t=v(M.internalFormat,kt,Gt,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,pt=lt.__version===void 0||q===!0,et=j.dataReady,mt=w(M,ft);Xt(r.TEXTURE_CUBE_MAP,M);let Mt;if(ut){k&&pt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,$t,ft.width,ft.height);for(let rt=0;rt<6;rt++){Mt=xt[rt].mipmaps;for(let zt=0;zt<Mt.length;zt++){let Ut=Mt[zt];M.format!==gi?kt!==null?k?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,0,0,Ut.width,Ut.height,kt,Ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,$t,Ut.width,Ut.height,0,Ut.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,0,0,Ut.width,Ut.height,kt,Gt,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,$t,Ut.width,Ut.height,0,kt,Gt,Ut.data)}}}else{if(Mt=M.mipmaps,k&&pt){Mt.length>0&&mt++;let rt=ye(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,$t,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Bt){k?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt[rt].width,xt[rt].height,kt,Gt,xt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,$t,xt[rt].width,xt[rt].height,0,kt,Gt,xt[rt].data);for(let zt=0;zt<Mt.length;zt++){let Se=Mt[zt].image[rt].image;k?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,0,0,Se.width,Se.height,kt,Gt,Se.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,$t,Se.width,Se.height,0,kt,Gt,Se.data)}}else{k?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,kt,Gt,xt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,$t,kt,Gt,xt[rt]);for(let zt=0;zt<Mt.length;zt++){let Ut=Mt[zt];k?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,0,0,kt,Gt,Ut.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,$t,kt,Gt,Ut.image[rt])}}}m(M)&&_(r.TEXTURE_CUBE_MAP),lt.__version=j.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Ct(I,M,G,q,j,lt){let ht=s.convert(G.format,G.colorSpace),Q=s.convert(G.type),it=v(G.internalFormat,ht,Q,G.normalized,G.colorSpace),ut=i.get(M),Bt=i.get(G);if(Bt.__renderTarget=M,!ut.__hasExternalTextures){let xt=Math.max(1,M.width>>lt),ft=Math.max(1,M.height>>lt);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,lt,it,xt,ft,M.depth,0,ht,Q,null):e.texImage2D(j,lt,it,xt,ft,0,ht,Q,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),Oe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,j,Bt.__webglTexture,0,De(M)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,j,Bt.__webglTexture,lt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function se(I,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){let q=M.depthTexture,j=q&&q.isDepthTexture?q.type:null,lt=b(M.stencilBuffer,j),ht=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Oe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De(M),lt,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,De(M),lt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,lt,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,I)}else{let q=M.textures;for(let j=0;j<q.length;j++){let lt=q[j],ht=s.convert(lt.format,lt.colorSpace),Q=s.convert(lt.type),it=v(lt.internalFormat,ht,Q,lt.normalized,lt.colorSpace);Oe(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De(M),it,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,De(M),it,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,it,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(I,M,G){let q=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,M.depthTexture);let ut=s.convert(M.depthTexture.format),Bt=s.convert(M.depthTexture.type),xt;M.depthTexture.format===Wi?xt=r.DEPTH_COMPONENT24:M.depthTexture.format===Fn&&(xt=r.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,xt,M.width,M.height,0,ut,Bt,null)}}else Y(M.depthTexture,0);let lt=j.__webglTexture,ht=De(M),Q=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,it=M.depthTexture.format===Fn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Wi)Oe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,Q,lt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,it,Q,lt,0);else if(M.depthTexture.format===Fn)Oe(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,Q,lt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,it,Q,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(I){let M=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let q=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=q}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)qe(M.__webglFramebuffer[q],I,q);else{let q=I.texture.mipmaps;q&&q.length>0?qe(M.__webglFramebuffer[0],I,0):qe(M.__webglFramebuffer,I,0)}else if(G){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=r.createRenderbuffer(),se(M.__webglDepthbuffer[q],I,!1);else{let j=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,lt)}}else{let q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),se(M.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,lt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(I,M,G){let q=i.get(I);M!==void 0&&Ct(q.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&re(I)}function Ee(I){let M=I.texture,G=i.get(I),q=i.get(M);I.addEventListener("dispose",y);let j=I.textures,lt=I.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=M.version,o.memory.textures++),lt){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let it=0;it<M.mipmaps.length;it++)G.__webglFramebuffer[Q][it]=r.createFramebuffer()}else G.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)G.__webglFramebuffer[Q]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ht)for(let Q=0,it=j.length;Q<it;Q++){let ut=i.get(j[Q]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&Oe(I)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let it=j[Q];G.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let ut=s.convert(it.format,it.colorSpace),Bt=s.convert(it.type),xt=v(it.internalFormat,ut,Bt,it.normalized,it.colorSpace,I.isXRRenderTarget===!0),ft=De(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,xt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),se(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)Ct(G.__webglFramebuffer[Q][it],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else Ct(G.__webglFramebuffer[Q],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(M)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let Q=0,it=j.length;Q<it;Q++){let ut=j[Q],Bt=i.get(ut),xt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(xt,Bt.__webglTexture),Xt(xt,ut),Ct(G.__webglFramebuffer,I,ut,r.COLOR_ATTACHMENT0+Q,xt,0),m(ut)&&_(xt)}e.unbindTexture()}else{let Q=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,q.__webglTexture),Xt(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)Ct(G.__webglFramebuffer[it],I,M,r.COLOR_ATTACHMENT0,Q,it);else Ct(G.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,Q,0);m(M)&&_(Q),e.unbindTexture()}I.depthBuffer&&re(I)}function ae(I){let M=I.textures;for(let G=0,q=M.length;G<q;G++){let j=M[G];if(m(j)){let lt=S(I),ht=i.get(j).__webglTexture;e.bindTexture(lt,ht),_(lt),e.unbindTexture()}}}let Pe=[],Je=[];function pi(I){if(I.samples>0){if(Oe(I)===!1){let M=I.textures,G=I.width,q=I.height,j=r.COLOR_BUFFER_BIT,lt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=i.get(I),Q=M.length>1;if(Q)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let it=I.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let Bt=i.get(M[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Bt,0)}r.blitFramebuffer(0,0,G,q,0,0,G,q,j,r.NEAREST),l===!0&&(Pe.length=0,Je.length=0,Pe.push(r.COLOR_ATTACHMENT0+ut),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Pe.push(lt),Je.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,ht.__webglColorRenderbuffer[ut]);let Bt=i.get(M[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,Bt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function De(I){return Math.min(n.maxSamples,I.samples)}function Oe(I){let M=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function z(I){let M=o.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function ii(I,M){let G=I.colorSpace,q=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Zn&&G!==Bi&&(le.getTransfer(G)===ge?(q!==gi||j!==mi)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",G)),M}function ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=ue,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=pi,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ly(r,t){function e(i,n=Bi){let s,o=le.getTransfer(n);if(i===mi)return r.UNSIGNED_BYTE;if(i===ua)return r.UNSIGNED_SHORT_4_4_4_4;if(i===fa)return r.UNSIGNED_SHORT_5_5_5_1;if(i===pc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===mc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===uc)return r.BYTE;if(i===fc)return r.SHORT;if(i===Gs)return r.UNSIGNED_SHORT;if(i===da)return r.INT;if(i===Mi)return r.UNSIGNED_INT;if(i===Ai)return r.FLOAT;if(i===bi)return r.HALF_FLOAT;if(i===gc)return r.ALPHA;if(i===xc)return r.RGB;if(i===gi)return r.RGBA;if(i===Wi)return r.DEPTH_COMPONENT;if(i===Fn)return r.DEPTH_STENCIL;if(i===pa)return r.RED;if(i===ma)return r.RED_INTEGER;if(i===Bn)return r.RG;if(i===ga)return r.RG_INTEGER;if(i===xa)return r.RGBA_INTEGER;if(i===Ir||i===Pr||i===Lr||i===Dr)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ir)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ir)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ya||i===va||i===_a||i===Ma)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===va)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_a)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ba||i===wa||i===Ea||i===Sa||i===Ta||i===Nr||i===Aa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ba||i===wa)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ea)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sa)return s.COMPRESSED_R11_EAC;if(i===Ta)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Nr)return s.COMPRESSED_RG11_EAC;if(i===Aa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ra||i===Ca||i===Ia||i===Pa||i===La||i===Da||i===Na||i===Ua||i===Fa||i===Ba||i===ka||i===za||i===Oa||i===Ha)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ra)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ca)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ia)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===La)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Da)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Na)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ua)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ka)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===za)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ga||i===Va||i===Wa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ga)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xa||i===qa||i===Ur||i===Ya)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ur)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
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

}`,qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ne({vertexShader:cy,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new ve(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yc=class extends Xi{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new qc,m={},_=e.getContextAttributes(),S=null,v=null,b=[],w=[],C=new wt,y=null,T=null,P=new di;P.viewport=new Le;let N=new di;N.viewport=new Le;let L=[P,N],B=new sa,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=b[J];return st===void 0&&(st=new Us,b[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=b[J];return st===void 0&&(st=new Us,b[J]=st),st.getGripSpace()},this.getHand=function(J){let st=b[J];return st===void 0&&(st=new Us,b[J]=st),st.getHandSpace()};function H(J){let st=w.indexOf(J.inputSource);if(st===-1)return;let Rt=b[st];Rt!==void 0&&(Rt.update(J.inputSource,J.frame,c||o),Rt.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",Y);for(let J=0;J<b.length;J++){let st=w[J];st!==null&&(w[J]=null,b[J].disconnect(st))}D=null,U=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(S),f=null,d=null,u=null,n=null,v=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,e)),u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(S=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",X),n.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Wt=null,Ct=null;_.depth&&(Ct=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=_.stencil?Fn:Wi,Wt=_.stencil?Vs:Mi);let se={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(se),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ye(d.textureWidth,d.textureHeight,{format:gi,type:mi,depthTexture:new Zi(d.textureWidth,d.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Rt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,Rt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ye(f.framebufferWidth,f.framebufferHeight,{format:gi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Qt.setContext(n),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(J){for(let st=0;st<J.removed.length;st++){let Rt=J.removed[st],Wt=w.indexOf(Rt);Wt>=0&&(w[Wt]=null,b[Wt].disconnect(Rt))}for(let st=0;st<J.added.length;st++){let Rt=J.added[st],Wt=w.indexOf(Rt);if(Wt===-1){for(let se=0;se<b.length;se++)if(se>=w.length){w.push(Rt),Wt=se;break}else if(w[se]===null){w[se]=Rt,Wt=se;break}if(Wt===-1)break}let Ct=b[Wt];Ct&&Ct.connect(Rt)}}let O=new A,K=new A;function tt(J,st,Rt){O.setFromMatrixPosition(st.matrixWorld),K.setFromMatrixPosition(Rt.matrixWorld);let Wt=O.distanceTo(K),Ct=st.projectionMatrix.elements,se=Rt.projectionMatrix.elements,qe=Ct[14]/(Ct[10]-1),re=Ct[14]/(Ct[10]+1),ue=(Ct[9]+1)/Ct[5],Ee=(Ct[9]-1)/Ct[5],ae=(Ct[8]-1)/Ct[0],Pe=(se[8]+1)/se[0],Je=qe*ae,pi=qe*Pe,De=Wt/(-ae+Pe),Oe=De*-ae;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Oe),J.translateZ(De),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let z=qe+De,ii=re+De,ye=Je-Oe,I=pi+(Wt-Oe),M=ue*re/ii*z,G=Ee*re/ii*z;J.projectionMatrix.makePerspective(ye,I,M,G,z,ii),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function bt(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let st=J.near,Rt=J.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),B.near=N.near=P.near=st,B.far=N.far=P.far=Rt,(D!==B.near||U!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,U=B.far),B.layers.mask=J.layers.mask|6,P.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let Wt=J.parent,Ct=B.cameras;bt(B,Wt);for(let se=0;se<Ct.length;se++)bt(Ct[se],Wt);Ct.length===2?tt(B,P,N):B.projectionMatrix.copy(P.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),At(J,B,Wt)};function At(J,st,Rt){Rt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(Rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ds*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(J){return m[J]};let Zt=null;function Xt(J,st){if(h=st.getViewerPose(c||o),p=st,h!==null){let Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Wt=!1;Rt.length!==B.cameras.length&&(B.cameras.length=0,Wt=!0);for(let re=0;re<Rt.length;re++){let ue=Rt[re],Ee=null;if(f!==null)Ee=f.getViewport(ue);else{let Pe=u.getViewSubImage(d,ue);Ee=Pe.viewport,re===0&&(t.setRenderTargetTextures(v,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(v))}let ae=L[re];ae===void 0&&(ae=new di,ae.layers.enable(re),ae.viewport=new Le,L[re]=ae),ae.matrix.fromArray(ue.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),re===0&&(B.matrix.copy(ae.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Wt===!0&&B.cameras.push(ae)}let Ct=n.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let re=u.getDepthInformation(Rt[0]);re&&re.isValid&&re.texture&&g.init(re,n.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let re=0;re<Rt.length;re++){let ue=Rt[re].camera;if(ue){let Ee=m[ue];Ee||(Ee=new vr,m[ue]=Ee);let ae=u.getCameraImage(ue);Ee.sourceTexture=ae}}}}for(let Rt=0;Rt<b.length;Rt++){let Wt=w[Rt],Ct=b[Rt];Wt!==null&&Ct!==void 0&&Ct.update(Wt,st,c||o)}Zt&&Zt(J,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),p=null}let Qt=new su;Qt.setAnimationLoop(Xt),this.setAnimationLoop=function(J){Zt=J},this.dispose=function(){}}},dy=new Jt,hu=new Yt;hu.set(-1,0,0,0,1,0,0,0,1);function uy(r,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Ec(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function n(g,m,_,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fi&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fi&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let _=t.get(m),S=_.envMap,v=_.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(hu),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fi&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let _=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function fy(r,t,e,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let w=b.program;i.uniformBlockBinding(v,w)}function c(v,b){let w=n[v.id];w===void 0&&(g(v),w=h(v),n[v.id]=w,v.addEventListener("dispose",_));let C=b.program;i.updateUBOMapping(v,C);let y=t.render.frame;s[v.id]!==y&&(d(v),s[v.id]=y)}function h(v){let b=u();v.__bindingPointIndex=b;let w=r.createBuffer(),C=v.__size,y=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,C,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let b=n[v.id],w=v.uniforms,C=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let y=0,T=w.length;y<T;y++){let P=w[y];if(Array.isArray(P))for(let N=0,L=P.length;N<L;N++)f(P[N],y,N,C);else f(P,y,0,C)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,b,w,C){if(x(v,b,w,C)===!0){let y=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){let L=T[N],B=m(L);p(L,v.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,y,v.__data)}}function p(v,b,w){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,w)}function x(v,b,w,C){let y=v.value,T=b+"_"+w;if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{let P=C[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(v){let b=v.uniforms,w=0,C=16;for(let T=0,P=b.length;T<P;T++){let N=Array.isArray(b[T])?b[T]:[b[T]];for(let L=0,B=N.length;L<B;L++){let D=N[L],U=Array.isArray(D.value)?D.value:[D.value];for(let H=0,X=U.length;H<X;H++){let Y=U[H],O=m(Y),K=w%C,tt=K%O.boundary,bt=K+tt;w+=tt,bt!==0&&C-bt<O.storage&&(w+=C-bt),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=O.storage}}}let y=w%C;return y>0&&(w+=C-y),v.__size=w,v.__cache={},this}function m(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),b}function _(v){let b=v.target;b.removeEventListener("dispose",_);let w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function S(){for(let v in n)r.deleteBuffer(n[v]);o=[],n={},s={}}return{bind:l,update:c,dispose:S}}var py=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ji=null;function my(){return Ji===null&&(Ji=new $n(py,16,16,Bn,bi),Ji.name="DFG_LUT",Ji.minFilter=We,Ji.magFilter=We,Ji.wrapS=Vi,Ji.wrapT=Vi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}var tl=class{constructor(t={}){let{canvas:e=Cd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=f,g=new Set([xa,ga,ma]),m=new Set([mi,Mi,Gs,Vs,ua,fa]),_=new Uint32Array(4),S=new Int32Array(4),v=new A,b=null,w=null,C=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,L=null,B=null,D=null,U=null;this._outputColorSpace=hi;let H=0,X=0,Y=null,O=-1,K=null,tt=new Le,bt=new Le,At=null,Zt=new ct(0),Xt=0,Qt=e.width,J=e.height,st=1,Rt=null,Wt=null,Ct=new Le(0,0,Qt,J),se=new Le(0,0,Qt,J),qe=!1,re=new Bs,ue=!1,Ee=!1,ae=new Jt,Pe=new A,Je=new Le,pi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return Y===null?st:1}let z=i;function ii(E,F){return e.getContext(E,F)}let ye,I,M,G,q,j,lt,ht,Q,it,ut,Bt,xt,ft,kt,Gt,$t,k,pt,et,mt,Mt,rt;try{let E={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Ci,!1),z===null){let F="webgl2";if(z=ii(F,E),z===null)throw ii(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(E){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Ci,!1),qt("WebGLRenderer: "+E.message),E}function zt(){ye=new bg(z),ye.init(),mt=new ly(z,ye),I=new ug(z,ye,t,mt),M=new oy(z,ye),I.reversedDepthBuffer&&d&&M.buffers.depth.setReversed(!0),B=z.createFramebuffer(),D=z.createFramebuffer(),U=z.createFramebuffer(),G=new Sg(z),q=new qx,j=new ay(z,ye,M,q,I,mt,G),lt=new Mg(P),ht=new Ap(z),Mt=new hg(z,ht),Q=new wg(z,ht,G,Mt),it=new Ag(z,Q,ht,Mt,G),k=new Tg(z,I,j),kt=new fg(q),ut=new Xx(P,lt,ye,I,Mt,kt),Bt=new uy(P,q),xt=new Zx,ft=new ty(ye),$t=new cg(P,lt,M,it,p,l),Gt=new ry(P,it,I),rt=new fy(z,G,I,M),pt=new dg(z,ye,G),et=new Eg(z,ye,G),G.programs=ut.programs,P.capabilities=I,P.extensions=ye,P.properties=q,P.renderLists=xt,P.shadowMap=Gt,P.state=M,P.info=G}x!==mi&&(T=new Cg(x,e.width,e.height,a,n,s));let Ut=new Yc(P,z);this.xr=Ut,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(E){E!==void 0&&(st=E,this.setSize(Qt,J,!1))},this.getSize=function(E){return E.set(Qt,J)},this.setSize=function(E,F,$=!0){if(Ut.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=E,J=F,e.width=Math.floor(E*st),e.height=Math.floor(F*st),$===!0&&(e.style.width=E+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Qt*st,J*st).floor()},this.setDrawingBufferSize=function(E,F,$){Qt=E,J=F,st=$,e.width=Math.floor(E*$),e.height=Math.floor(F*$),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===mi){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(Ct)},this.setViewport=function(E,F,$,V){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,F,$,V),M.viewport(tt.copy(Ct).multiplyScalar(st).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,F,$,V){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,F,$,V),M.scissor(bt.copy(se).multiplyScalar(st).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){M.setScissorTest(qe=E)},this.setOpaqueSort=function(E){Rt=E},this.setTransparentSort=function(E){Wt=E},this.getClearColor=function(E){return E.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,$=!0){let V=0;if(E){let W=!1;if(Y!==null){let _t=Y.texture.format;W=g.has(_t)}if(W){let _t=Y.texture.type,It=m.has(_t),vt=$t.getClearColor(),Lt=$t.getClearAlpha(),Ft=vt.r,te=vt.g,oe=vt.b;It?(_[0]=Ft,_[1]=te,_[2]=oe,_[3]=Lt,z.clearBufferuiv(z.COLOR,0,_)):(S[0]=Ft,S[1]=te,S[2]=oe,S[3]=Lt,z.clearBufferiv(z.COLOR,0,S))}else V|=z.COLOR_BUFFER_BIT}F&&(V|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Ci,!1),$t.dispose(),xt.dispose(),ft.dispose(),q.dispose(),lt.dispose(),it.dispose(),Mt.dispose(),rt.dispose(),ut.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",fh),Ut.removeEventListener("sessionend",ph),Gn.stop()};function Se(E){E.preventDefault(),_c("WebGLRenderer: Context Lost."),N=!0}function pe(){_c("WebGLRenderer: Context Restored."),N=!1;let E=G.autoReset,F=Gt.enabled,$=Gt.autoUpdate,V=Gt.needsUpdate,W=Gt.type;zt(),G.autoReset=E,Gt.enabled=F,Gt.autoUpdate=$,Gt.needsUpdate=V,Gt.type=W}function Ci(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oi(E){let F=E.target;F.removeEventListener("dispose",Oi),cf(F)}function cf(E){hf(E),q.remove(E)}function hf(E){let F=q.get(E).programs;F!==void 0&&(F.forEach(function($){ut.releaseProgram($)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,$,V,W,_t){F===null&&(F=pi);let It=W.isMesh&&W.matrixWorld.determinantAffine()<0,vt=ff(E,F,$,V,W);M.setMaterial(V,It);let Lt=$.index,Ft=1;if(V.wireframe===!0){if(Lt=Q.getWireframeAttribute($),Lt===void 0)return;Ft=2}let te=$.drawRange,oe=$.attributes.position,Dt=te.start*Ft,me=(te.start+te.count)*Ft;_t!==null&&(Dt=Math.max(Dt,_t.start*Ft),me=Math.min(me,(_t.start+_t.count)*Ft)),Lt!==null?(Dt=Math.max(Dt,0),me=Math.min(me,Lt.count)):oe!=null&&(Dt=Math.max(Dt,0),me=Math.min(me,oe.count));let He=me-Dt;if(He<0||He===1/0)return;Mt.setup(W,V,vt,$,Lt);let Re,be=pt;if(Lt!==null&&(Re=ht.get(Lt),be=et,be.setIndex(Re)),W.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*Oe()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if(W.isLine){let ni=V.linewidth;ni===void 0&&(ni=1),M.setLineWidth(ni*Oe()),W.isLineSegments?be.setMode(z.LINES):W.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else W.isPoints?be.setMode(z.POINTS):W.isSprite&&be.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))be.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ni=W._multiDrawStarts,Tt=W._multiDrawCounts,li=W._multiDrawCount,ce=Lt?ht.get(Lt).bytesPerElement:1,Ei=q.get(V).currentProgram.getUniforms();for(let Hi=0;Hi<li;Hi++)Ei.setValue(z,"_gl_DrawID",Hi),be.render(ni[Hi]/ce,Tt[Hi])}else if(W.isInstancedMesh)be.renderInstances(Dt,He,W.count);else if($.isInstancedBufferGeometry){let ni=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Tt=Math.min($.instanceCount,ni);be.renderInstances(Dt,He,Tt)}else be.render(Dt,He)};function uh(E,F,$,V){L!==null&&E.isNodeMaterial&&L.setObject(V,E),ue===!0&&kt.setState(E,$,!1),E.transparent===!0&&E.side===de&&E.forceSinglePass===!1?(E.side=fi,E.needsUpdate=!0,Jr(E,F,V),E.side=Dn,E.needsUpdate=!0,Jr(E,F,V),E.side=de):Jr(E,F,V)}this.compile=function(E,F,$=null){$===null&&($=E),L!==null&&L.renderStart(E,F,$),w=ft.get($),w.init(F),y.push(w),$.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),E!==$&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),Ee=this.localClippingEnabled,ue=kt.init(this.clippingPlanes,Ee),ue===!0&&kt.setGlobalState(this.clippingPlanes,F),L!==null&&Gt.render(w.state.shadowsArray,$,F);let V=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _t=W.material;if(_t)if(Array.isArray(_t))for(let It=0;It<_t.length;It++){let vt=_t[It];uh(vt,$,F,W),V.add(vt)}else uh(_t,$,F,W),V.add(_t)}),w=y.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(E,F,$=null){let V=this.compile(E,F,$);return new Promise(W=>{function _t(){if(V.forEach(function(It){let Lt=q.get(It).currentProgram;(Lt===void 0||Lt.isReady())&&V.delete(It)}),V.size===0){W(E);return}setTimeout(_t,10)}ye.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let yl=null;function df(E){yl&&yl(E)}function fh(){Gn.stop()}function ph(){Gn.start()}let Gn=new su;Gn.setAnimationLoop(df),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(E){yl=E,Ut.setAnimationLoop(E),E===null?Gn.stop():Gn.start()},Ut.addEventListener("sessionstart",fh),Ut.addEventListener("sessionend",ph),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(E,F);let $=Ut.enabled===!0&&Ut.isPresenting===!0,V=T!==null&&(Y===null||$)&&T.begin(P,Y);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(F),F=Ut.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,F,Y),w=ft.get(E,y.length),w.init(F),w.state.textureUnits=j.getTextureUnits(),y.push(w),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),re.setFromProjectionMatrix(ae,Ni,F.reversedDepth),Ee=this.localClippingEnabled,ue=kt.init(this.clippingPlanes,Ee),b=xt.get(E,C.length),b.init(),C.push(b),Ut.enabled===!0&&Ut.isPresenting===!0){let It=P.xr.getDepthSensingMesh();It!==null&&vl(It,F,-1/0,P.sortObjects)}vl(E,F,0,P.sortObjects),b.finish(),L!==null&&L.updateLights(w.state.lightsArray),P.sortObjects===!0&&b.sort(Rt,Wt),De=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,De&&$t.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&kt.beginShadows();let W=w.state.shadowsArray;if(Gt.render(W,E,F),ue===!0&&kt.endShadows(),(V&&T.hasRenderPass())===!1){let It=b.opaque,vt=b.transmissive;if(w.setupLights(),F.isArrayCamera){let Lt=F.cameras;if(vt.length>0)for(let Ft=0,te=Lt.length;Ft<te;Ft++){let oe=Lt[Ft];gh(It,vt,E,oe)}De&&$t.render(E);for(let Ft=0,te=Lt.length;Ft<te;Ft++){let oe=Lt[Ft];mh(b,E,oe,oe.viewport)}}else vt.length>0&&gh(It,vt,E,F),De&&$t.render(E),mh(b,E,F)}Y!==null&&X===0&&(j.updateMultisampleRenderTarget(Y),j.updateRenderTargetMipmap(Y)),V&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,F),Mt.resetDefaultState(),O=-1,K=null,y.pop(),y.length>0?(w=y[y.length-1],j.setTextureUnits(w.state.textureUnits),ue===!0&&kt.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,L!==null&&L.renderEnd()};function vl(E,F,$,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(re)){V&&Je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);let It=it.update(E),vt=E.material;vt.visible&&b.push(E,It,vt,$,Je.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(re))){let It=it.update(E),vt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Je.copy(E.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Je.copy(It.boundingSphere.center)),Je.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(vt)){let Lt=It.groups;for(let Ft=0,te=Lt.length;Ft<te;Ft++){let oe=Lt[Ft],Dt=vt[oe.materialIndex];Dt&&Dt.visible&&b.push(E,It,Dt,$,Je.z,oe,F)}}else vt.visible&&b.push(E,It,vt,$,Je.z,null,F)}}let _t=E.children;for(let It=0,vt=_t.length;It<vt;It++)vl(_t[It],F,$,V)}function mh(E,F,$,V){let{opaque:W,transmissive:_t,transparent:It}=E;w.setupLightsView($),ue===!0&&kt.setGlobalState(P.clippingPlanes,$),V&&M.viewport(tt.copy(V)),W.length>0&&$r(W,F,$),_t.length>0&&$r(_t,F,$),It.length>0&&$r(It,F,$),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function gh(E,F,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Dt=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Ye(1,1,{generateMipmaps:!0,type:Dt?bi:mi,minFilter:Un,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let _t=w.state.transmissionRenderTarget[V.id],It=V.viewport||tt;_t.setSize(It.z*P.transmissionResolutionScale,It.w*P.transmissionResolutionScale);let vt=P.getRenderTarget(),Lt=P.getActiveCubeFace(),Ft=P.getActiveMipmapLevel();P.setRenderTarget(_t),P.getClearColor(Zt),Xt=P.getClearAlpha(),Xt<1&&P.setClearColor(16777215,.5),P.clear(),De&&$t.render($);let te=P.toneMapping;P.toneMapping=Fi;let oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),ue===!0&&kt.setGlobalState(P.clippingPlanes,V),$r(E,$,V),j.updateMultisampleRenderTarget(_t),j.updateRenderTargetMipmap(_t),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let me=0,He=F.length;me<He;me++){let Re=F[me],{object:be,geometry:ni,material:Tt,group:li}=Re;if(Tt.side===de&&be.layers.test(V.layers)){let ce=Tt.side;Tt.side=fi,Tt.needsUpdate=!0,xh(be,$,V,ni,Tt,li),Tt.side=ce,Tt.needsUpdate=!0,Dt=!0}}Dt===!0&&(j.updateMultisampleRenderTarget(_t),j.updateRenderTargetMipmap(_t))}P.setRenderTarget(vt,Lt,Ft),P.setClearColor(Zt,Xt),oe!==void 0&&(V.viewport=oe),P.toneMapping=te}function $r(E,F,$){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,_t=E.length;W<_t;W++){let It=E[W],{object:vt,geometry:Lt,group:Ft}=It,te=It.material;te.allowOverride===!0&&V!==null&&(te=V),vt.layers.test($.layers)&&xh(vt,F,$,Lt,te,Ft)}}function xh(E,F,$,V,W,_t){L!==null&&W.isNodeMaterial&&L.setObject(E,W),E.onBeforeRender(P,F,$,V,W,_t),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(P,F,$,V,E,_t),W.transparent===!0&&W.side===de&&W.forceSinglePass===!1?(W.side=fi,W.needsUpdate=!0,P.renderBufferDirect($,F,V,W,E,_t),W.side=Dn,W.needsUpdate=!0,P.renderBufferDirect($,F,V,W,E,_t),W.side=de):P.renderBufferDirect($,F,V,W,E,_t),E.onAfterRender(P,F,$,V,W,_t)}function Jr(E,F,$){F.isScene!==!0&&(F=pi);let V=q.get(E),W=w.state.lights,_t=w.state.shadowsArray,It=W.state.version,vt=ut.getParameters(E,W.state,_t,F,$,w.state.lightProbeGridArray),Lt=ut.getProgramCacheKey(vt),Ft=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let te=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=lt.get(E.envMap||V.environment,te),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",Oi),Ft=new Map,V.programs=Ft);let oe=Ft.get(Lt);if(oe!==void 0){if(V.currentProgram===oe&&V.lightsStateVersion===It)return vh(E,vt),oe}else vt.uniforms=ut.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,$,vt),E.onBeforeCompile(vt,P),oe=ut.acquireProgram(vt,Lt),Ft.set(Lt,oe),V.uniforms=vt.uniforms;let Dt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=kt.uniform),vh(E,vt),V.needsLights=mf(E),V.lightsStateVersion=It,V.needsLights&&(Dt.ambientLightColor.value=W.state.ambient,Dt.lightProbe.value=W.state.probe,Dt.sunLights.value=W.state.sun,Dt.sunLightShadows.value=W.state.sunShadow,Dt.directionalLights.value=W.state.directional,Dt.directionalLightShadows.value=W.state.directionalShadow,Dt.spotLights.value=W.state.spot,Dt.spotLightShadows.value=W.state.spotShadow,Dt.rectAreaLights.value=W.state.rectArea,Dt.ltc_1.value=W.state.rectAreaLTC1,Dt.ltc_2.value=W.state.rectAreaLTC2,Dt.pointLights.value=W.state.point,Dt.pointLightShadows.value=W.state.pointShadow,Dt.hemisphereLights.value=W.state.hemi,Dt.sunShadowMatrix.value=W.state.sunShadowMatrix,Dt.sunShadowCascade.value=W.state.sunShadowCascade,Dt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Dt.spotLightMatrix.value=W.state.spotLightMatrix,Dt.spotLightMap.value=W.state.spotLightMap,Dt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=oe,V.uniformsList=null,oe}function yh(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Zs.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function vh(E,F){let $=q.get(E);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function uf(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let $=0,V=E.length;$<V;$++){let W=E[$];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function ff(E,F,$,V,W){F.isScene!==!0&&(F=pi),j.resetTextureUnits();let _t=F.fog,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,vt=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:le.workingColorSpace,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ft=lt.get(V.envMap||It,Lt),te=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,oe=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Dt=!!$.morphAttributes.position,me=!!$.morphAttributes.normal,He=!!$.morphAttributes.color,Re=Fi;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Re=P.toneMapping);let be=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ni=be!==void 0?be.length:0,Tt=q.get(V),li=w.state.lights;if(ue===!0&&(Ee===!0||E!==K)){let Te=E===K&&V.id===O;kt.setState(V,E,Te)}let ce=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==li.state.version||Tt.outputColorSpace!==vt||W.isBatchedMesh&&Tt.batching===!1||!W.isBatchedMesh&&Tt.batching===!0||W.isBatchedMesh&&Tt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Tt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Tt.instancing===!1||!W.isInstancedMesh&&Tt.instancing===!0||W.isSkinnedMesh&&Tt.skinning===!1||!W.isSkinnedMesh&&Tt.skinning===!0||W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null||Tt.envMap!==Ft||V.fog===!0&&Tt.fog!==_t||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==kt.numPlanes||Tt.numIntersection!==kt.numIntersection)||Tt.vertexAlphas!==te||Tt.vertexTangents!==oe||Tt.morphTargets!==Dt||Tt.morphNormals!==me||Tt.morphColors!==He||Tt.toneMapping!==Re||Tt.morphTargetsCount!==ni||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Tt.__version=V.version);let Ei=Tt.currentProgram;ce===!0&&(Ei=Jr(V,F,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Ei,Tt));let Hi=!1,vn=!1,ds=!1,_e=Ei.getUniforms(),Fe=Tt.uniforms;if(M.useProgram(Ei.program)&&(Hi=!0,vn=!0,ds=!0),V.id!==O&&(O=V.id,vn=!0),Tt.needsLights){let Te=uf(w.state.lightProbeGridArray,W);Tt.lightProbeGrid!==Te&&(Tt.lightProbeGrid=Te,vn=!0)}if(Hi||K!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_e.setValue(z,"projectionMatrix",E.projectionMatrix),_e.setValue(z,"viewMatrix",E.matrixWorldInverse);let Mn=_e.map.cameraPosition;Mn!==void 0&&Mn.setValue(z,Pe.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&_e.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_e.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,vn=!0,ds=!0)}if(Tt.needsLights&&(li.state.sunShadowMap.length>0&&_e.setValue(z,"sunShadowMap",li.state.sunShadowMap,j),li.state.directionalShadowMap.length>0&&_e.setValue(z,"directionalShadowMap",li.state.directionalShadowMap,j),li.state.spotShadowMap.length>0&&_e.setValue(z,"spotShadowMap",li.state.spotShadowMap,j),li.state.pointShadowMap.length>0&&_e.setValue(z,"pointShadowMap",li.state.pointShadowMap,j)),W.isSkinnedMesh){_e.setOptional(z,W,"bindMatrix"),_e.setOptional(z,W,"bindMatrixInverse");let Te=W.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),_e.setValue(z,"boneTexture",Te.boneTexture,j))}W.isBatchedMesh&&(_e.setOptional(z,W,"batchingTexture"),_e.setValue(z,"batchingTexture",W._matricesTexture,j),_e.setOptional(z,W,"batchingIdTexture"),_e.setValue(z,"batchingIdTexture",W._indirectTexture,j),_e.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&_e.setValue(z,"batchingColorTexture",W._colorsTexture,j));let _n=$.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&k.update(W,$,Ei),(vn||Tt.receiveShadow!==W.receiveShadow)&&(Tt.receiveShadow=W.receiveShadow,_e.setValue(z,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(Fe.envMapIntensity.value=F.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=my()),vn){if(_e.setValue(z,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&pf(Fe,ds),_t&&V.fog===!0&&Bt.refreshFogUniforms(Fe,_t),Bt.refreshMaterialUniforms(Fe,V,st,J,w.state.transmissionRenderTarget[E.id]),Tt.needsLights&&Tt.lightProbeGrid){let Te=Tt.lightProbeGrid;Fe.probesSH.value=Te.texture,Fe.probesMin.value.copy(Te.boundingBox.min),Fe.probesMax.value.copy(Te.boundingBox.max),Fe.probesResolution.value.copy(Te.resolution)}Zs.upload(z,yh(Tt),Fe,j)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zs.upload(z,yh(Tt),Fe,j),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_e.setValue(z,"center",W.center),_e.setValue(z,"modelViewMatrix",W.modelViewMatrix),_e.setValue(z,"normalMatrix",W.normalMatrix),_e.setValue(z,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Te=V.uniformsGroups;for(let Mn=0,us=Te.length;Mn<us;Mn++){let Mh=Te[Mn];rt.update(Mh,Ei),rt.bind(Mh,Ei)}}return Ei}function pf(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function mf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(E,F,$){let V=q.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=F,q.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let $=q.get(E);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,$=0){Y=E,H=F,X=$;let V=null,W=!1,_t=!1;if(E){let vt=q.get(E);if(vt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(z.FRAMEBUFFER,vt.__webglFramebuffer),tt.copy(E.viewport),bt.copy(E.scissor),At=E.scissorTest,M.viewport(tt),M.scissor(bt),M.setScissorTest(At),O=-1;return}else if(vt.__webglFramebuffer===void 0)j.setupRenderTarget(E);else if(vt.__hasExternalTextures)j.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let te=E.depthTexture;if(vt.__boundDepthTexture!==te){if(te!==null&&q.has(te)&&(E.width!==te.image.width||E.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(E)}}let Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(_t=!0);let Ft=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?V=Ft[F][$]:V=Ft[F],W=!0):E.samples>0&&j.useMultisampledRTT(E)===!1?V=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?V=Ft[$]:V=Ft,tt.copy(E.viewport),bt.copy(E.scissor),At=E.scissorTest}else tt.copy(Ct).multiplyScalar(st).floor(),bt.copy(se).multiplyScalar(st).floor(),At=qe;if($!==0&&(V=B),M.bindFramebuffer(z.FRAMEBUFFER,V)&&M.drawBuffers(E,V),M.viewport(tt),M.scissor(bt),M.setScissorTest(At),W){let vt=q.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,$)}else if(_t){let vt=F;for(let Lt=0;Lt<E.textures.length;Lt++){let Ft=q.get(E.textures[Lt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Lt,Ft.__webglTexture,$,vt)}}else if(E!==null&&$!==0){let vt=q.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vt.__webglTexture,$)}O=-1};function _h(E){let F=q.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=I.textureFormatReadable(E.format),F.__typeReadable=I.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,$,V,W,_t,It,vt=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){M.bindFramebuffer(z.FRAMEBUFFER,Lt);try{let Ft=E.textures[vt],te=Ft.format,oe=Ft.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+vt);let Dt=_h(Ft);if(Dt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&$>=0&&$<=E.height-W&&z.readPixels(F,$,V,W,mt.convert(te),mt.convert(oe),_t)}finally{let Ft=Y!==null?q.get(Y).__webglFramebuffer:null;M.bindFramebuffer(z.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(E,F,$,V,W,_t,It,vt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt)if(F>=0&&F<=E.width-V&&$>=0&&$<=E.height-W){M.bindFramebuffer(z.FRAMEBUFFER,Lt);let Ft=E.textures[vt],te=Ft.format,oe=Ft.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+vt);let Dt=_h(Ft);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,me),z.bufferData(z.PIXEL_PACK_BUFFER,_t.byteLength,z.STREAM_READ),z.readPixels(F,$,V,W,mt.convert(te),mt.convert(oe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let He=Y!==null?q.get(Y).__webglFramebuffer:null;M.bindFramebuffer(z.FRAMEBUFFER,He);let Re=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Pd(z,Re,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,me),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_t),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(me),z.deleteSync(Re),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,$=0){let V=Math.pow(2,-$),W=Math.floor(E.image.width*V),_t=Math.floor(E.image.height*V),It=F!==null?F.x:0,vt=F!==null?F.y:0;j.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,$,0,0,It,vt,W,_t),M.unbindTexture()},this.copyTextureToTexture=function(E,F,$=null,V=null,W=0,_t=0){let It,vt,Lt,Ft,te,oe,Dt,me,He,Re=E.isCompressedTexture?E.mipmaps[_t]:E.image;if($!==null)It=$.max.x-$.min.x,vt=$.max.y-$.min.y,Lt=$.isBox3?$.max.z-$.min.z:1,Ft=$.min.x,te=$.min.y,oe=$.isBox3?$.min.z:0;else{let Fe=Math.pow(2,-W);It=Math.floor(Re.width*Fe),vt=Math.floor(Re.height*Fe),E.isDataArrayTexture?Lt=Re.depth:E.isData3DTexture?Lt=Math.floor(Re.depth*Fe):Lt=1,Ft=0,te=0,oe=0}V!==null?(Dt=V.x,me=V.y,He=V.z):(Dt=0,me=0,He=0);let be=mt.convert(F.format),ni=mt.convert(F.type),Tt;F.isData3DTexture?(j.setTexture3D(F,0),Tt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(j.setTexture2DArray(F,0),Tt=z.TEXTURE_2D_ARRAY):(j.setTexture2D(F,0),Tt=z.TEXTURE_2D),M.activeTexture(z.TEXTURE0),M.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);let li=M.getParameter(z.UNPACK_ROW_LENGTH),ce=M.getParameter(z.UNPACK_IMAGE_HEIGHT),Ei=M.getParameter(z.UNPACK_SKIP_PIXELS),Hi=M.getParameter(z.UNPACK_SKIP_ROWS),vn=M.getParameter(z.UNPACK_SKIP_IMAGES);M.pixelStorei(z.UNPACK_ROW_LENGTH,Re.width),M.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Re.height),M.pixelStorei(z.UNPACK_SKIP_PIXELS,Ft),M.pixelStorei(z.UNPACK_SKIP_ROWS,te),M.pixelStorei(z.UNPACK_SKIP_IMAGES,oe);let ds=E.isDataArrayTexture||E.isData3DTexture,_e=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let Fe=q.get(E),_n=q.get(F),Te=q.get(Fe.__renderTarget),Mn=q.get(_n.__renderTarget);M.bindFramebuffer(z.READ_FRAMEBUFFER,Te.__webglFramebuffer),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let us=0;us<Lt;us++)ds&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(E).__webglTexture,W,oe+us),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(F).__webglTexture,_t,He+us)),z.blitFramebuffer(Ft,te,It,vt,Dt,me,It,vt,z.DEPTH_BUFFER_BIT,z.NEAREST);M.bindFramebuffer(z.READ_FRAMEBUFFER,null),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||q.has(E)){let Fe=q.get(E),_n=q.get(F);M.bindFramebuffer(z.READ_FRAMEBUFFER,D),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let Te=0;Te<Lt;Te++)ds?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.__webglTexture,W,oe+Te):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Fe.__webglTexture,W),_e?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,_n.__webglTexture,_t,He+Te):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,_n.__webglTexture,_t),W!==0?z.blitFramebuffer(Ft,te,It,vt,Dt,me,It,vt,z.COLOR_BUFFER_BIT,z.NEAREST):_e?z.copyTexSubImage3D(Tt,_t,Dt,me,He+Te,Ft,te,It,vt):z.copyTexSubImage2D(Tt,_t,Dt,me,Ft,te,It,vt);M.bindFramebuffer(z.READ_FRAMEBUFFER,null),M.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _e?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Tt,_t,Dt,me,He,It,vt,Lt,be,ni,Re.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Tt,_t,Dt,me,He,It,vt,Lt,be,Re.data):z.texSubImage3D(Tt,_t,Dt,me,He,It,vt,Lt,be,ni,Re):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_t,Dt,me,It,vt,be,ni,Re.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_t,Dt,me,Re.width,Re.height,be,Re.data):z.texSubImage2D(z.TEXTURE_2D,_t,Dt,me,It,vt,be,ni,Re);M.pixelStorei(z.UNPACK_ROW_LENGTH,li),M.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce),M.pixelStorei(z.UNPACK_SKIP_PIXELS,Ei),M.pixelStorei(z.UNPACK_SKIP_ROWS,Hi),M.pixelStorei(z.UNPACK_SKIP_IMAGES,vn),_t===0&&F.generateMipmaps&&z.generateMipmap(Tt),M.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&j.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?j.setTextureCube(E,0):E.isData3DTexture?j.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?j.setTexture2DArray(E,0):j.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){H=0,X=0,Y=null,M.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var fe=(r,t,e)=>r<t?t:r>e?e:r,Et=(r,t,e)=>r+(t-r)*e,as=(r,t,e,i)=>Et(r,t,1-Math.exp(-e*i)),ji=r=>r*r*(3-2*r),R=(r=0,t=1)=>r+Math.random()*(t-r);function Me(r){return function(){r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function kn(r,t){let e=t-r;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function fn(r,t,e,i){return r+kn(r,t)*(1-Math.exp(-e*i))}function ke(r,t){let e=new Uint8ClampedArray(r*t*4),i=(n,s)=>(n%s+s)%s;return{w:r,h:t,data:e,set(n,s,o,a=255){n=i(Math.round(n),r),s=i(Math.round(s),t);let l=(s*r+n)*4;e[l]=o[0],e[l+1]=o[1],e[l+2]=o[2],e[l+3]=a},get(n,s){n=i(Math.round(n),r),s=i(Math.round(s),t);let o=(s*r+n)*4;return[e[o],e[o+1],e[o+2]]},rect(n,s,o,a,l){for(let c=0;c<o;c++)for(let h=0;h<a;h++)this.set(n+c,s+h,l)}}}function ze(r,{repeat:t=!0,linear:e=!1}={}){let i=document.createElement("canvas");return i.width=r.w,i.height=r.h,i.getContext("2d").putImageData(new ImageData(r.data,r.w,r.h),0,0),du(i,{repeat:t,linear:e})}function du(r,{repeat:t=!0,linear:e=!1}={}){let i=new Kn(r);return i.magFilter=e?We:he,i.minFilter=e?We:he,i.generateMipmaps=!1,i.colorSpace=e?Bi:hi,t&&(i.wrapS=i.wrapT=Is),i}var ti=(r,t)=>[r[0]*t,r[1]*t,r[2]*t],Ie=(r,t)=>[r[0]+t,r[1]+t,r[2]+t],gy=(r,t,e)=>[r[0]+(t[0]-r[0])*e,r[1]+(t[1]-r[1])*e,r[2]+(t[2]-r[2])*e],Zc=new Map;function Ue(r,t){return Zc.has(r)||Zc.set(r,t()),Zc.get(r)}function $c(r=7,t=[176,168,148],e=15){return Ue("floor"+r+t+e,()=>{let n=ke(64,64),s=Me(r),o=[],a=Math.round(Math.sqrt(e));for(let h=0;h<a;h++)for(let u=0;u<a;u++){let d=(s()-.5)*30,f=(s()-.5)*12;o.push({x:(h+.2+s()*.6)/a*64,y:(u+.2+s()*.6)/a*64,sx:.75+s()*.6,sy:.75+s()*.6,c:[t[0]+d+f,t[1]+d,t[2]+d-f],moss:s()<.15})}let l=(h,u,d)=>{let f=Math.abs(u-h.x),p=Math.abs(d-h.y);return f=Math.min(f,64-f)*h.sx,p=Math.min(p,64-p)*h.sy,Math.max(f,p)*.75+(f+p)*.25},c=(h,u)=>{let d=null,f=1e9,p=1e9;for(let x of o){let g=l(x,h,u);g<f?(p=f,f=g,d=x):g<p&&(p=g)}return{b:d,gap:p-f}};for(let h=0;h<64;h++)for(let u=0;u<64;u++){let{b:d,gap:f}=c(h,u),p=d.c,x=s();x<.07?p=Ie(p,-12):x<.12&&(p=Ie(p,8)),f<1.1?(p=ti(d.c,.66),d.moss&&s()<.5&&(p=[112,124,86])):f<2.2&&(p=c(h,u-2).b!==d||c(h-2,u).b!==d?Ie(d.c,12):ti(d.c,.88)),n.set(h,u,p)}return ze(n)})}function uu(){return Ue("path",()=>{let r=ke(64,64),t=Me(31),e=[158,156,148];for(let i=0;i<4;i++){let n=i%2?8:0;for(let s=0;s<4;s++){let o=(t()-.5)*20,a=Ie(e,o);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=a,u=t();u<.06?h=Ie(a,-12):u<.1&&(h=Ie(a,8)),l===15||c===15?h=ti(a,.7):(l===0||c===0)&&(h=Ie(a,10)),r.set(s*16+l+n,i*16+c,h)}}}return ze(r)})}function Jc(r=[168,160,142]){return Ue("block"+r,()=>{let t=ke(32,32),e=Me(5);for(let i=0;i<4;i++){let n=i%2?8:0;for(let s=0;s<2;s++){let o=Ie(r,(e()-.5)*22);for(let a=0;a<16;a++)for(let l=0;l<8;l++){let c=o;e()<.08&&(c=Ie(o,-10)),a===15||l===7?c=ti(o,.55):l===0&&(c=Ie(o,16)),t.set(s*16+a+n,i*8+l,c)}}}return ze(t)})}function Kc(r=[92,132,64]){return Ue("grass"+r,()=>{let t=ke(32,32),e=Me(11);for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=e(),o=Ie(r,(e()-.5)*14);s<.12?o=ti(r,.78):s<.2&&(o=ti(r,1.14)),t.set(i,n,o)}for(let i=0;i<7;i++){let n=Math.floor(e()*32),s=Math.floor(e()*32),o=e()<.5?[236,230,200]:[232,200,92];t.set(n,s,o)}return ze(t)})}function fu(){return Ue("dirt",()=>{let r=ke(32,32),t=Me(13),e=[96,104,70];for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=t(),o=Ie(e,(t()-.5)*12);s<.15?o=[88,86,66]:s<.22&&(o=ti(e,1.15)),r.set(i,n,o)}return ze(r)})}function jc(r=[150,44,34]){return Ue("wood"+r,()=>{let t=ke(16,16),e=Me(17);for(let i=0;i<16;i++){let n=(e()-.5)*16;for(let s=0;s<16;s++){let o=Ie(r,n+(e()-.5)*6);i%5===0&&e()<.6&&(o=ti(r,.84)),t.set(i,s,o)}}return ze(t)})}function pu(){return jc([92,60,40])}function mu(r=[84,90,98]){return Ue("roof"+r,()=>{let t=ke(32,32),e=Me(19);for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=i%4,o;s===0?o=ti(r,.62):s===1?o=ti(r,1):s===2?o=ti(r,1.22):o=ti(r,1.06),n%8===7?o=ti(o,.78):n%8===0&&s!==0&&(o=ti(o,1.08)),o=Ie(o,(e()-.5)*6),t.set(i,n,o)}return ze(t)})}function sl(){return Ue("dancheong",()=>{let r=ke(64,16),t=[46,122,98],e=[34,92,76],i=[44,82,150],n=[176,52,44],s=[236,228,206],o=[226,182,64];for(let a=0;a<64;a++)for(let l=0;l<16;l++){let c=t;l===0||l===15?c=n:l===1||l===14?c=s:(l===2||l===13)&&(c=e),r.set(a,l,c)}for(let a=0;a<4;a++){let l=a*16+8,c=8;for(let h=-5;h<=5;h++)for(let u=-4;u<=4;u++){let d=Math.abs(h)/5+Math.abs(u)/4;d<=1&&r.set(l+h,c+u,d>.75?s:d>.5?i:d>.25?n:o)}for(let h=3;h<=12;h++)r.set(a*16,h,s),r.set(a*16+1,h,i)}return ze(r)})}function Qc(r=!1){return Ue("lattice"+r,()=>{let t=ke(32,48),e=r?[0,0,0]:[44,104,84],i=r?[0,0,0]:[30,70,58],n=r?[255,214,150]:[226,216,186],s=r?[220,170,110]:[204,192,160];for(let o=0;o<32;o++)for(let a=0;a<48;a++){let l=n;a>36&&(l=r?[0,0,0]:[120,60,44]),a===36&&(l=i);let c=o%5,h=a%6;a<36&&(c===0||h===0)&&(l=e),a<36&&c===4&&(l=gy(l,s,r?.3:.5)),(o<2||o>29||a<2||a>45)&&(l=i),t.set(o,a,l)}return ze(t,{repeat:!1})})}function gu(){return Ue("plaster",()=>{let r=ke(32,32),t=Me(23);for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=Ie([226,220,204],(t()-.5)*8);i>24&&(n=Ie([150,140,124],(t()-.5)*12)),(i===24||i===2||e===0||e===31)&&(n=[156,52,40]),r.set(e,i,n)}return ze(r)})}function xu(r){return Ue("banner"+r,()=>{let i=document.createElement("canvas");i.width=32,i.height=40;let n=i.getContext("2d"),s,o,a,l,c;if(r==="red"?(s="#b8302a",o="#e8b030",a="#f0c040",l="\u4EE4",c="#7a1c18"):r==="white"?(s="#ece6d4",o="#e0a828",a="#1a1a1a",l="\u9F8D",c="#ece6d4"):(s="#23305e",o="#c8342c",a="#e8e0d0",l="\u6B66",c="#23305e"),n.fillStyle=o,n.fillRect(0,0,32,40),n.fillStyle=s,n.fillRect(3,3,26,34),r==="white"){n.fillStyle="#c03028";for(let h=0;h<40;h+=4)n.fillRect(29,h,3,2),n.fillRect(0,h+2,2,2);for(let h=0;h<32;h+=4)n.fillRect(h,37,2,3)}else r==="red"&&(n.fillStyle=c,n.fillRect(6,6,20,28),n.fillStyle=o,n.fillRect(6,6,20,1),n.fillRect(6,33,20,1),n.fillRect(6,6,1,28),n.fillRect(25,6,1,28));return n.fillStyle=a,n.font='bold 20px "Noto Serif CJK KR","Noto Sans CJK KR","Malgun Gothic","Apple SD Gothic Neo",serif',n.textAlign="center",n.textBaseline="middle",n.fillText(l,32/2,40/2+1),xy(n,32,40,[s,o,a,c,"#c03028"]),du(i,{repeat:!1})})}function xy(r,t,e,i){let n=i.map(a=>[parseInt(a.slice(1,3),16),parseInt(a.slice(3,5),16),parseInt(a.slice(5,7),16)]),s=r.getImageData(0,0,t,e),o=s.data;for(let a=0;a<o.length;a+=4){let l=n[0],c=1e9;for(let h of n){let u=(o[a]-h[0])**2+(o[a+1]-h[1])**2+(o[a+2]-h[2])**2;u<c&&(c=u,l=h)}o[a]=l[0],o[a+1]=l[1],o[a+2]=l[2],o[a+3]=255}r.putImageData(s,0,0)}function yu(){return Ue("drumside",()=>{let r=ke(64,32),t=Me(29),e=[40,92,150];for(let i=0;i<64;i++)for(let n=0;n<32;n++){let s=Ie(e,(t()-.5)*8),o=Math.sin(i*.4+Math.sin(n*.35)*2.2)+Math.sin(n*.5+i*.12);o>1.35?s=[196,62,50]:o>1.1?s=[236,220,180]:o<-1.45&&(s=[70,150,110]),(n<3||n>28)&&(s=[180,48,40]),(n===3||n===28)&&(s=[226,186,70]),r.set(i,n,s)}return ze(r)})}function vu(){return Ue("drumface",()=>{let r=ke(32,32),t=[[196,52,44],[40,80,160],[228,186,60]];for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=e-15.5,s=i-15.5,o=Math.hypot(n,s),a=[222,206,170];if(o>14.5)a=[120,70,40];else if(o>13.5)a=[226,186,70];else if(o<8){let l=Math.atan2(s,n)+o*.22,c=Math.floor((l/(Math.PI*2)%1+1)%1*3);a=t[c]}r.set(e,i,a)}return ze(r,{repeat:!1})})}function _u(){return Ue("medallion",()=>{let r=ke(64,64),t=Me(37),e=[170,164,148];for(let i=0;i<64;i++)for(let n=0;n<64;n++){let s=i-31.5,o=n-31.5,a=Ie(e,(t()-.5)*10),l=Math.abs(s)+Math.abs(o),c=Math.max(Math.abs(s),Math.abs(o)),h=Math.hypot(s,o),u=Math.atan2(o,s),d=ti(e,.68),f=Ie(e,18);c>30?a=d:c>29&&(a=f),Math.abs(l-29)<.8&&(a=d),Math.abs(l-27)<.8&&(a=f);let p=9+5*Math.abs(Math.cos(u*4));Math.abs(h-p)<.8&&(a=d),h<p-.8&&h>p-2&&(a=f),h<4&&(a=Math.abs(h-3)<.8?d:Ie(e,8)),Math.abs(h-19)<.7&&Math.abs(Math.sin(u*8))>.4&&(a=d),r.set(i,n,a)}return ze(r,{repeat:!1})})}function Mu(){return Ue("carving",()=>{let r=ke(16,32),t=[178,170,152];for(let e=0;e<16;e++)for(let i=0;i<32;i++){let n=t;e===0||e===15||i===0||i===31?n=ti(t,.65):(e===1||i===1)&&(n=Ie(t,16));let s=e-7.5,o=i-15.5,a=Math.sin(s*.9)*3+Math.cos(o*.5)*2;Math.abs(s)<5&&Math.abs(o)<12&&Math.abs(a)<.6&&(n=ti(t,.7)),r.set(e,i,n)}return ze(r,{repeat:!1})})}function bu(){return Ue("bark",()=>{let r=ke(16,16),t=Me(41);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let n=Ie([104,78,62],(t()-.5)*16);(i+Math.floor(e/4)*3)%5===0&&(n=[70,52,42]),t()<.08&&(n=[132,102,80]),r.set(e,i,n)}return ze(r)})}function wu(){return Ue("tiger",()=>{let r=ke(16,16);for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=[226,142,48];Math.sin(t*1.1+Math.sin(e*.7)*1.5)>.55&&(i=[40,28,24]),r.set(t,e,i)}return ze(r)})}function Eu(){return Ue("cloud",()=>{let t=ke(128,128),e=Me(53),i=[[4,.5],[8,.27],[16,.15],[32,.08]],n=i.map(([o])=>Array.from({length:o*o},()=>e())),s=o=>o*o*(3-2*o);for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=0;i.forEach(([h,u],d)=>{let f=o/128*h,p=a/128*h,x=Math.floor(f),g=Math.floor(p),m=s(f-x),_=s(p-g),S=n[d],v=(C,y)=>S[y%h*h+C%h],b=v(x,g)+(v(x+1,g)-v(x,g))*m,w=v(x,g+1)+(v(x+1,g+1)-v(x,g+1))*m;l+=(b+(w-b)*_)*u});let c=Math.max(0,Math.min(255,l*255));t.set(o,a,[c,c,c])}return ze(t,{linear:!0})})}function Su(){return Ue("bamboo",()=>{let r=ke(16,32),t=Me(61);for(let e=0;e<16;e++)for(let i=0;i<32;i++){let n=e%8,s=n<2?[92,140,66]:n<5?[120,168,78]:[104,152,70];s=Ie(s,(t()-.5)*8),i%16===0?s=[186,196,120]:(i%16===1||i%16===15)&&(s=[70,104,50]),r.set(e,i,s)}return ze(r)})}function Tu(){return Ue("snow",()=>{let r=ke(32,32),t=Me(67);for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=Ie([226,234,244],(t()-.5)*8),s=t();s<.08?n=[196,210,232]:s<.11&&(n=[250,252,255]),r.set(e,i,n)}for(let e=0;e<6;e++){let i=Math.floor(t()*32),n=Math.floor(t()*32);for(let s=0;s<8;s++)r.set(n+s,i+(s>4?1:0),[204,216,236])}return ze(r)})}function Au(){return Ue("fpath",()=>{let r=ke(32,32),t=Me(71);for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=Ie([138,112,82],(t()-.5)*14),s=t();s<.06?n=[176,120,60]:s<.1?n=[110,88,64]:s<.13&&(n=[150,160,90]),r.set(e,i,n)}return ze(r)})}function Ru(){return Kc([70,112,58])}var nl=r=>{let t=parseInt(r.slice(1),16);return[t>>16&255,t>>8&255,t&255]};function Cu(r,t,e,i){return Ue(`cloth-${r}-${t}-${e}-${i}`,()=>{let n=ke(32,32),s=nl(t),o=nl(e),a=nl(i),l=s.map(c=>Math.round(c*.86));n.rect(0,0,32,32,s);for(let c=0;c<32;c+=2)for(let h=c/2%4;h<32;h+=4)n.set(h,c,l);if(r==="saekdong"){let c=["#e8423a","#f4c43a","#4aa84e","#3a6ad8","#e86aa8","#f4f0e4"].map(nl);for(let h=0;h<32;h++)for(let u=0;u<32;u++)n.set(u,h,c[Math.floor(h/4)%6]);for(let h=0;h<32;h++)for(let u=3;u<32;u+=4)n.set(h,u,c[Math.floor(u/4)%6].map(d=>Math.round(d*.8)))}else if(r==="flower"){for(let[c,h]of[[6,7],[22,4],[14,19],[29,22],[4,28]]){for(let[u,d]of[[0,-2],[2,-1],[1,2],[-1,2],[-2,-1]])n.set(c+u,h+d,o),n.set(c+u*.5,h+d*.5,o);n.set(c,h,a)}for(let[c,h]of[[12,9],[26,13],[8,16],[20,28]])n.set(c,h,o)}else if(r==="plum"){let c=s.map(h=>Math.round(h*.55));for(let h=0;h<32;h++)n.set(h,24-Math.round(h*.5)+Math.round(Math.sin(h*.7)),c);for(let h=0;h<10;h++)n.set(12+h,16-h,c);for(let[h,u]of[[5,21],[14,15],[20,8],[27,11],[30,3]]){for(let[d,f]of[[0,-1],[1,0],[0,1],[-1,0]])n.set(h+d,u+f,o);n.set(h,u,a)}}else if(r==="cloud"){for(let[c,h]of[[8,8],[24,22]]){for(let u=0;u<14;u++){let d=1+u*.32,f=u*.75;n.set(c+Math.cos(f)*d,h+Math.sin(f)*d*.7,o)}for(let u=-6;u<=6;u++)n.set(c+u,h+4,o);n.set(c,h,a)}for(let[c,h]of[[20,6],[4,22],[28,30]])n.set(c,h,o),n.set(c+1,h,o)}else if(r==="star"){for(let[c,h]of[[6,5],[21,12],[11,25],[28,27]]){n.set(c,h,a);for(let[u,d]of[[1,0],[-1,0],[0,1],[0,-1]])n.set(c+u,h+d,o)}for(let[c,h]of[[15,3],[2,15],[26,4],[18,20],[6,30],[30,17]])n.set(c,h,o)}else if(r==="dragon"){for(let[c,h]of[[9,10],[25,26]]){for(let u=0;u<24;u++){let d=u/24*Math.PI*2;n.set(c+Math.cos(d)*5,h+Math.sin(d)*5,o)}n.rect(c-1,h-1,3,3,a),n.set(c-3,h,o),n.set(c+3,h,o),n.set(c,h-3,o),n.set(c,h+3,o)}for(let c=0;c<32;c++)n.set(c,18+Math.round(Math.sin(c*.6)*1.5),o)}else if(r==="wave"){for(let c=0;c<32;c+=8)for(let h=0;h<32;h++)n.set(h,c+3+Math.round(Math.sin(h/32*Math.PI*4)*2),o);for(let c=0;c<32;c+=8)n.set(c+4,1,a)}return ze(n)})}var wi={time:{value:0},player:{value:new A(0,-100,0)},night:{value:0}},Js=null;function yy(){if(!Js){let r=new Uint8Array([78,78,78,255,150,150,150,255,212,212,212,255,255,255,255,255]);Js=new $n(r,4,1,gi),Js.magFilter=Js.minFilter=he,Js.needsUpdate=!0}return Js}function Pt(r={}){return new ts({gradientMap:yy(),...r})}function th(r,{local:t="",world:e=""},i){r.onBeforeCompile=n=>{n.uniforms.uTime=wi.time,n.uniforms.uPlayer=wi.player;let s=`uniform float uTime;
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
        gl_Position = projectionMatrix * mvPosition;`)),n.vertexShader=s},r.customProgramCacheKey=()=>i}var eh=new Map;function pn(r,t,{shadow:e=!0}={}){let i="anim:"+(t.local||"")+"|"+(t.world||"");if(th(r.material,t,i),e){let o=new ks({depthPacking:yc});th(o,t,i+":depth"),r.customDepthMaterial=o}let n=r.material.side,s=i+n;if(!eh.has(s)){let o=new Rn({side:n});th(o,t,i+":normal"),eh.set(s,o)}return r.userData.nmat=eh.get(s),r}var mn={flag:{local:`
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
      wPos.y -= push * h * 0.5;`}};var Or=16,vy=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,_y=`
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
}`,rl=class{constructor(t){this.container=t,this.canvas=document.createElement("canvas"),this.canvas.className="view",t.appendChild(this.canvas);let e=this.renderer=new tl({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.shadowMap.enabled=!0,e.shadowMap.type=is,e.shadowMap.autoUpdate=!1,e.outputColorSpace=Zn,this.pixelSize=3,this.userZoom=0,this.colorTarget=null,this.normalTarget=null,this.normalFront=new Rn,this.normalDouble=new Rn({side:de}),this.compMat=new Ne({vertexShader:vy,fragmentShader:_y,uniforms:{tColor:{value:null},tNormal:{value:null},tDepth:{value:null},tCloud:{value:Eu()},res:{value:new wt(1,1)},cNear:{value:1},cFar:{value:100},invViewProj:{value:new Jt},time:wi.time,night:wi.night,outline:{value:1},flash:{value:0},flashColor:{value:new ct(1,1,1)},vignette:{value:.55}},depthTest:!1,depthWrite:!1}),this.compScene=new hn,this.compCam=new Ui(-1,1,1,-1,0,1);let i=new at(new ve(2,2),this.compMat);i.frustumCulled=!1,this.compScene.add(i),this.camera=new Ui(-1,1,1,-1,1,160),this.pitch=bc.degToRad(45),this.camDist=70,this.shift={x:0,y:0},this.resize(),window.addEventListener("resize",()=>this.resize())}basePixelSize(){return Math.max(2,Math.round(Math.sqrt(window.innerWidth*window.innerHeight)/330))}autoPixelSize(){return this.basePixelSize()+this.userZoom}zoom(t){let e=this.basePixelSize(),i=Math.min(Math.max(e+this.userZoom+t,2),e+3);this.userZoom=i-e,this.resize()}resize(){let t=this.pixelSize=Math.max(2,this.autoPixelSize()),e=this.W=Math.ceil(window.innerWidth/t),i=this.H=Math.ceil(window.innerHeight/t),n=this.RW=e+2,s=this.RH=i+2;this.renderer.setSize(n,s,!1),Object.assign(this.canvas.style,{width:n*t+"px",height:s*t+"px"});let o={minFilter:he,magFilter:he,type:bi};this.colorTarget?.dispose(),this.normalTarget?.dispose(),this.colorTarget=new Ye(n,s,o),this.normalTarget=new Ye(n,s,{minFilter:he,magFilter:he}),this.normalTarget.depthTexture=new Zi(n,s),this.normalTarget.depthTexture.type=Mi,this.compMat.uniforms.res.value.set(n,s);let a=this.camera;a.left=-n/Or/2,a.right=n/Or/2,a.top=s/Or/2,a.bottom=-s/Or/2,a.updateProjectionMatrix()}project(t,e={x:0,y:0}){let i=ih.copy(t).project(this.camera),n=this.pixelSize;return e.x=(i.x*.5+.5)*this.RW*n-n+this.shift.x,e.y=(-i.y*.5+.5)*this.RH*n-n+this.shift.y,e.z=i.z,e}unproject(t,e,i=0){let n=this.pixelSize,s=(t+n-this.shift.x)/(this.RW*n)*2-1,o=-((e+n-this.shift.y)/(this.RH*n)*2-1),a=ih.set(s,o,-1).unproject(this.camera),c=My.set(s,o,1).unproject(this.camera).sub(a),h=(i-a.y)/c.y;return new A(a.x+c.x*h,i,a.z+c.z*h)}setFocus(t){let e=this.camera,i=this.pitch,n=ih.set(0,Math.sin(i),Math.cos(i)).multiplyScalar(this.camDist);e.position.copy(t).add(n),e.up.set(0,1,0),e.lookAt(t),e.updateMatrixWorld();let s=by.setFromMatrixColumn(e.matrixWorld,0),o=wy.setFromMatrixColumn(e.matrixWorld,1),a=1/Or,l=e.position.dot(s),c=e.position.dot(o),h=Math.round(l/a)*a,u=Math.round(c/a)*a;e.position.addScaledVector(s,h-l).addScaledVector(o,u-c),e.updateMatrixWorld();let d=(l-h)/a,f=(c-u)/a,p=this.pixelSize;this.shift.x=-d*p,this.shift.y=f*p,this.canvas.style.transform=`translate(${(-p+this.shift.x).toFixed(2)}px, ${(-p+this.shift.y).toFixed(2)}px)`}render(t){let e=this.renderer,i=this.camera,n=[],s=[];t.traverseVisible(l=>{if(l.isMesh||l.isPoints||l.isLine||l.isSprite)if(l.userData.noOutline||l.isPoints||l.isSprite||l.isLine||l.material&&l.material.transparent)s.push(l);else{n.push(l,l.material);let c=l.userData.nmat||(Array.isArray(l.material)?l.material[0].side===de?this.normalDouble:this.normalFront:l.material.side===de?this.normalDouble:this.normalFront);l.material=c}});for(let l of s)l.visible=!1;let o=t.background;t.background=null,e.setRenderTarget(this.normalTarget),e.setClearColor(8421631,1),e.clear(),e.render(t,i);for(let l=0;l<n.length;l+=2)n[l].material=n[l+1];for(let l of s)l.visible=!0;t.background=o,e.shadowMap.needsUpdate=!0,e.setRenderTarget(this.colorTarget),e.render(t,i);let a=this.compMat.uniforms;a.tColor.value=this.colorTarget.texture,a.tNormal.value=this.normalTarget.texture,a.tDepth.value=this.normalTarget.depthTexture,a.cNear.value=i.near,a.cFar.value=i.far,a.invViewProj.value.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).invert(),e.setRenderTarget(null),e.render(this.compScene,this.compCam)}},ih=new A,My=new A,by=new A,wy=new A;function Lu(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new xe,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Pu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let p=Pu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Pu(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new Ve(o,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);a.setComponent(d+u,p,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}function gt(r,t,e,i=4){let n=new dt(r,t,e),s=n.attributes.uv,o=[[e,t],[e,t],[r,e],[r,e],[r,t],[r,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;s.setXY(c,s.getX(c)*o[a][0]/i,s.getY(c)*o[a][1]/i)}return n}function Xe(r,t,e,i=12,n=0,s=0){let o=new Ht(r,t,e,i);if(n){let a=o.attributes.uv;for(let l=0;l<a.count;l++)a.setXY(l,a.getX(l)*n,a.getY(l)*s)}return o}var Qi=class{constructor(){this.groups=new Map}add(t,e,i){let n=t.index?t.toNonIndexed():t.clone();n.attributes.uv||n.setAttribute("uv",new Ot(new Float32Array(n.attributes.position.count*2),2));for(let s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);n.applyMatrix4(i),this.groups.has(e)||this.groups.set(e,[]),this.groups.get(e).push(n)}put(t,e,i,n,s,o=0,a=0,l=0,c=1){Du.compose(Ey.set(i,n,s),Sy.setFromEuler(Ty.set(a,o,l,"YXZ")),Ay.set(c,c,c)),this.add(t,e,Du)}build(t,{cast:e=!0,receive:i=!0}={}){let n=[];for(let[s,o]of this.groups){let a=Lu(o,!1),l=new at(a,s);l.castShadow=e,l.receiveShadow=i,t.add(l),n.push(l)}return this.groups.clear(),n}},Du=new Jt,Ey=new A,Sy=new we,Ty=new je,Ay=new A;function Nu({w:r,d:t,h:e,overhang:i=2,lift:n=.7,power:s=1.7,seg:o=28,thick:a=.28,tile:l=2}){let c=r+i*2,h=t+i*2,u=Math.min(c,h)/2,d=(Y,O)=>{let K=c/2-Math.abs(Y),tt=h/2-Math.abs(O),bt=Math.max(0,Math.min(K,tt)),At=Math.min(1,bt/u),Zt=e*Math.pow(At,s),Xt=Math.min(1,Math.abs(Y)/(c/2)),Qt=Math.min(1,Math.abs(O)/(h/2));return Zt+=n*Math.pow(Xt*Qt,2.2),Zt},f=o,p=Math.max(6,Math.round(o*h/c)),x=[],g=[],m=[],_=[],S=[],v=[],b=.05,w=(Y,O)=>{let K=(d(Y+b,O)-d(Y-b,O))/(2*b),tt=(d(Y,O+b)-d(Y,O-b))/(2*b);return new A(-K,1,-tt).normalize()},C=Y=>-c/2+c*Y/f,y=Y=>-h/2+h*Y/p,T=(Y,O,K)=>{let tt=(Y[0]+O[0]+K[0])/3,bt=(Y[1]+O[1]+K[1])/3,At=c/2-Math.abs(tt)>h/2-Math.abs(bt);for(let[Zt,Xt]of[Y,O,K]){let Qt=d(Zt,Xt),J=w(Zt,Xt);x.push(Zt,Qt,Xt),g.push(J.x,J.y,J.z),At?m.push(Zt/l,(h/2-Math.abs(Xt))/l):m.push(Xt/l,(c/2-Math.abs(Zt))/l)}for(let[Zt,Xt]of[Y,K,O]){let Qt=d(Zt,Xt)-a;_.push(Zt,Qt,Xt),S.push(0,-1,0),v.push(Zt/2,Xt/2)}};for(let Y=0;Y<f;Y++)for(let O=0;O<p;O++){let K=[C(Y),y(O)],tt=[C(Y+1),y(O)],bt=[C(Y+1),y(O+1)],At=[C(Y),y(O+1)];(C(Y)+C(Y+1))*(y(O)+y(O+1))>0?(T(K,At,tt),T(tt,At,bt)):(T(K,At,bt),T(K,bt,tt))}let P=new xe;P.setAttribute("position",new Ot(x,3)),P.setAttribute("normal",new Ot(g,3)),P.setAttribute("uv",new Ot(m,2));let N=new xe;N.setAttribute("position",new Ot(_,3)),N.setAttribute("normal",new Ot(S,3)),N.setAttribute("uv",new Ot(v,2));let L=[],B=[],D=[],U=[];for(let Y=0;Y<=f;Y++)U.push([C(Y),-h/2,0,0,-1]);for(let Y=1;Y<=p;Y++)U.push([c/2,y(Y),1,0,0]);for(let Y=f-1;Y>=0;Y--)U.push([C(Y),h/2,0,0,1]);for(let Y=p-1;Y>=0;Y--)U.push([-c/2,y(Y),-1,0,0]);let H=0;for(let Y=0;Y<U.length-1;Y++){let[O,K]=U[Y],[tt,bt,At,,Zt]=U[Y+1],Xt=d(O,K),Qt=d(tt,bt),J=Math.hypot(tt-O,bt-K),st=[[O,Xt,K,H,1],[tt,Qt,bt,H+J,1],[tt,Qt-a,bt,H+J,0],[O,Xt-a,K,H,0]];for(let Rt of[0,2,1,0,3,2]){let Wt=st[Rt];L.push(Wt[0],Wt[1],Wt[2]),B.push(At,0,Zt),D.push(Wt[3]/4,Wt[4]*.25)}H+=J}let X=new xe;return X.setAttribute("position",new Ot(L,3)),X.setAttribute("normal",new Ot(B,3)),X.setAttribute("uv",new Ot(D,2)),{top:P,under:N,fascia:X,height:d,W:c,D:h}}function ls(r,t=12){return new Mr(r.map(([e,i])=>new wt(e,i)),t)}var gn=r=>new ct(r),Hr=(r,t,e,i)=>(r.position.set(t,e,i),r);function Uu(r){let t=r.M;t.bamboo=Pt({map:Su()}),t.snow=Pt({map:Tu()}),t.fpath=Pt({map:Au()}),t.fgrass=Pt({map:Ru()}),t.bambooLeaf=Pt({color:gn("#6aa84a")}),t.bambooLeaf2=Pt({color:gn("#4a8a3e")}),t.snowLeaf=Pt({color:gn("#eef4fa")}),t.cloth=["#c8302c","#2f5aa8","#e0b040","#f0ece0","#3a8a4a"].map(e=>Pt({color:gn(e),side:de})),t.wood2=Pt({color:gn("#8a6a4a")}),t.ice=Pt({color:gn("#bfe8ff"),emissive:gn("#000000")}),t.rock=Pt({color:gn("#8a8478")}),t.rockDark=Pt({color:gn("#6a665e")}),r.glowMats.push({mat:t.ice,color:new ct("#4ab0ff"),k:.7})}function Fu(r,t,e=120,i=60){let n=new at(new ve(e,e),t);n.geometry.attributes.uv.array.forEach((s,o,a)=>a[o]=s*i),n.rotation.x=-Math.PI/2,n.receiveShadow=!0,r.root.add(n)}function Bu(r,t,e,i){for(let n=0;n<e.length-1;n++){let[s,o]=e[n],[a,l]=e[n+1],c=Math.hypot(a-s,l-o)+i*.6,h=new ve(i,c);h.attributes.uv.array.forEach((d,f,p)=>p[f]=d*(f%2===0?i/2:c/2));let u=new at(h,t);u.rotation.order="YXZ",u.rotation.y=Math.atan2(a-s,l-o),u.rotation.x=-Math.PI/2,u.position.set((s+a)/2,.012+n%2*.002,(o+l)/2),u.receiveShadow=!0,r.root.add(u)}}function nh(r,t,e,i,n){let s=new vi(n,24);s.attributes.uv.array.forEach((a,l,c)=>c[l]=a*n);let o=new at(s,t);o.rotation.x=-Math.PI/2,o.position.set(e,.01,i),o.receiveShadow=!0,r.root.add(o)}function ku(r,t,e,i,n,s,o,a,l=1.1){t.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),r.root.add(t),r.circles.push({x:i,z:n,r:l,y:0}),r.drums.push({group:t,body:e,pos:new A(i,0,n),shake:0,label:s,sound:o,reach:2.6,promptY:a})}function cs(r,t,e,i=1,n=1){let s=Me(n),o=0;for(let a=0;a<6;a++){let l=(.42-a*.055)*i,c=l*.6;r.batch.add(new Ae(1,0),a%2?r.M.rock:r.M.rockDark,ot(t+(s()-.5)*.06,o+c*.5,e+(s()-.5)*.06,s()*6,0,0,[l,c,l])),o+=c*.85}r.circles.push({x:t,z:e,r:.45*i,y:0})}function zu(r){Uu(r);let t=r.M,e=r.batch=new Qi;r.foliage=new Qi;let i=Me(303);Fu(r,t.fgrass);let n=_=>Math.sin(_*.12)*2.2,s=[];for(let _=24;_>=-28;_-=4)s.push([n(_),_]);Bu(r,t.fpath,s,3.6),nh(r,t.fpath,0,1,8.5),nh(r,t.fpath,0,-15,4.2);let o=[];for(let _=-19;_<=19;_+=4.2)for(let S=-25;S<=21;S+=4.2){let v=_+(i()-.5)*2.4,b=S+(i()-.5)*2.4;if(Math.hypot(v,b-1)<11.5||Math.abs(v-n(b))<4.2||Math.hypot(v,b+15)<7)continue;let w=1.4+i()*1.4,C=Math.floor(w*6);for(let y=0;y<C;y++){let T=i()*Math.PI*2,P=Math.sqrt(i())*w;o.push([v+Math.cos(T)*P,b+Math.sin(T)*P,3.2+i()*2.6])}r.circles.push({x:v,z:b,r:w*.85,y:0})}for(let _=0;_<160;_++){let S=Math.floor(i()*4),v=S<2?(S?1:-1)*(21+i()*6):(i()-.5)*50,b=S>=2?S===2?-28-i()*5:23+i()*5:(i()-.5)*56;S===3&&Math.abs(v-n(b))<3||o.push([v,b,3.5+i()*2.8])}let a=new Ht(.085,.1,1,6);a.translate(0,.5,0);let l=new Jn(a,t.bamboo,o.length),c=new Jt,h=new we,u=new je;o.forEach(([_,S,v],b)=>{u.set((i()-.5)*.08,i()*6,(i()-.5)*.08),c.compose(new A(_,0,S),h.setFromEuler(u),new A(1,v,1)),l.setMatrixAt(b,c);for(let w=0;w<3;w++){let C=v*(.62+w*.14),y=i()*Math.PI*2;r.foliage.add(new Ae(1,0),w%2?t.bambooLeaf:t.bambooLeaf2,new Jt().compose(new A(_+Math.cos(y)*.35,C,S+Math.sin(y)*.35),new we().setFromEuler(new je(0,y,.3)),new A(.55,.12,.28)))}}),l.castShadow=!0,l.receiveShadow=!0,pn(l,mn.foliage),r.root.add(l),r.pine(-1.8,0,-16.5,1.35,77);let d=Me(5);for(let _=0;_<14;_++){let S=d()*Math.PI*2,v=1+d()*1.6,b=new at(new ve(.16,.9,1,3),t.cloth[_%5]);b.position.set(-1.8+Math.cos(S)*v,2.2+d()*1.2,-16.5+Math.sin(S)*v),b.rotation.y=d()*6,b.castShadow=!0,pn(b,mn.flag),r.root.add(b)}cs(r,2.2,-16.8,1.4,3),cs(r,-4.8,-13.8,1,4);let f=new Nt;f.position.set(2.4,0,-13.2),f.add(Hr(new at(gt(.14,2.4,.14,1),t.wood2),-.7,1.2,0)),f.add(Hr(new at(gt(.14,2.4,.14,1),t.wood2),.7,1.2,0)),f.add(Hr(new at(gt(1.7,.14,.18,1),t.wood2),0,2.38,0));let p=new Nt;p.position.set(0,2.3,0);let x=new at(ls([[.02,0],[.18,-.08],[.3,-.42],[.34,-.55],[0,-.55]],10),t.gold),g=new at(new jt(.08,6,4),t.bronzeDark);g.position.y=-.6;let m=new at(gt(.03,.9,.03,1),t.cloth[0]);m.position.y=-1.05,p.add(x,g,m),f.add(p),ku(r,f,p,2.4,-13.2,"\uBC29\uC6B8","bell",3.2,.9);for(let _ of[-1,1])Ry(r,_*3.2,17.5,_);cs(r,-8,6,1.1,7),cs(r,8.4,-4,1,8),cs(r,7,8.5,.8,9);for(let[_,S]of[[-7.5,-5],[7.6,3],[-6,9],[5.6,-8.5]])r.stoneLantern(_,0,S);r.grassAreas=[];for(let _=0;_<10;_++){let S=i()*Math.PI*2,v=9+i()*3,b=Math.cos(S)*v,w=1+Math.sin(S)*v;r.grassAreas.push({x0:b-1.2,x1:b+1.2,z0:w-1,z1:w+1,y:0})}r.scatterGrass(),e.build(r.root);for(let _ of r.foliage.build(r.root))pn(_,mn.foliage)}function Ry(r,t,e,i){let n=r.M,s=r.batch,o=r.M.wood2;s.add(Xe(.26,.3,2.6,8),o,ot(t,1.3,e)),s.add(Xe(i>0?.3:.24,.3,.4,8),n.black,ot(t,2.75,e));for(let a of[-1,1])s.add(new jt(.08,6,4),n.mortar,ot(t+a*.11,2.25,e+.24)),s.add(new jt(.035,4,3),n.black,ot(t+a*.11,2.25,e+.31));s.add(new jt(.09,6,4),o,ot(t,2.1,e+.28)),s.add(gt(.3,.06,.06,1),n.mortar,ot(t,1.93,e+.27)),s.add(gt(.12,1.1,.03,1),n.red,ot(t,1.1,e+.28)),r.circles.push({x:t,z:e,r:.4,y:0})}function Ou(r){Uu(r);let t=r.M,e=r.batch=new Qi;r.foliage=new Qi;let i=Me(505);Fu(r,t.snow),Bu(r,t.path,[[0,24],[0,10],[0,-5]],3.6),nh(r,t.slab,0,3,7.5),r.terrace(-11,11,-22,-7,.8),r.stairs(-7,-4.6,.8,0),r.balustrade(-11,-7,-2.9,-7,.8),r.balustrade(2.9,-7,11,-7,.8);for(let u=0;u<7;u++){let d=-9+u*3,f=[3.2,1.4,2.6,.9,3.2,2,1.1][u];e.add(Xe(.26,.29,f,10),t.wood,ot(d,.8+f/2,-19.5)),e.add(Xe(.36,.38,.14,10),t.stoneLight,ot(d,.87,-19.5)),r.circles.push({x:d,z:-19.5,r:.4,y:.8}),f>2.5&&e.add(gt(.7,.2,.7,1),t.snow,ot(d,.8+f+.05,-19.5))}let n=r.roof({cx:4,cy:.9,cz:-15.5,w:7,d:3,h:1.2,overhang:1,lift:.4,ridge:!0,rot:.25});n.group.rotation.z=.18,r.blockRects.push({x0:-.5,x1:8.6,z0:-18.2,z1:-13.2}),Cy(r,-5,.8,-13.5),r.circles.push({x:-5,z:-13.5,r:1.3,y:.8});let s=new Nt;s.position.set(-11.5,0,4);for(let[u,d]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])s.add(Hr(new at(Xe(.14,.16,3.2,8),t.wood),u,1.6,d));s.add(Hr(new at(gt(3,.2,3,2),t.dancheong),0,3.25,0));let o=new Nt;o.position.set(0,3.1,0);let a=ls([[.05,0],[.42,-.08],[.55,-.5],[.62,-1.3],[.7,-1.5],[0,-1.5]],14);o.add(new at(a,t.bronze));let l=new at(Xe(.6,.6,.06,14),t.gold);l.position.y=-.7,o.add(l),s.add(o);let c=new Nt;s.add(c),ku(r,s,o,-11.5,4,"\uBC94\uC885","bigbell",4.6,1.9),r.roof({cx:-11.5,cy:3.35,cz:4,w:3,d:3,h:1.1,overhang:.9,lift:.5,ridge:!0}).group.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),e.add(gt(2.4,.12,2.4,2),t.snow,ot(-11.5,4.5,4));for(let[u,d,f]of[[-19,-8,18],[8,19,18],[-19,-12,-24],[6,19,-24]])for(let p=u;p<d;p+=2.2){if(i()<.25)continue;let x=.6+i()*1.2;e.add(gt(2.1,x,.6,2),t.blockDark,ot(p+1.1,x/2,f)),e.add(gt(2.1,.1,.7,2),t.snow,ot(p+1.1,x+.04,f)),r.blockRects.push({x0:p,x1:p+2.2,z0:f-.35,z1:f+.35})}for(let[u,d,f,p]of[[-16,-6,1.2,1],[15.5,-9,1.3,2],[16,8,1.1,3],[-16,12,1,4],[13,-20,1,5],[-15,-20,1.2,6],[-22,2,1.3,7],[22,-2,1.2,8],[-8,22,1.1,9],[9,23,1.2,10]])r.pine(u,0,d,f,p,Math.abs(u)<19.5,!0);for(let u=0;u<14;u++){let d=i()*Math.PI*2,f=9.5+i()*6,p=Math.cos(d)*f,x=3+Math.sin(d)*f*.9;if(!(x<-6||Math.abs(p)>18)){for(let g=0;g<3;g++){let m=.6+i()*1.1;e.add(new ne(.16+i()*.1,m,5),t.ice,ot(p+(i()-.5)*.6,m/2,x+(i()-.5)*.6,i()*6,(i()-.5)*.4,(i()-.5)*.4))}r.circles.push({x:p,z:x,r:.5,y:0})}}for(let[u,d]of[[-6.5,9],[6.5,9],[6.5,-3],[-6,-3.5]])r.stoneLantern(u,0,d);r.stoneLantern(9.5,.8,-9),r.stoneLantern(-9.5,.8,-9),cs(r,12,6,1,11),cs(r,-14,-10,.9,12),e.build(r.root);for(let u of r.foliage.build(r.root))pn(u,mn.foliage)}function Cy(r,t,e,i){let n=r.M,s=r.batch;s.add(gt(2.2,.5,2.2,2),n.stoneGrey,ot(t,e+.25,i));let o=e+.5;for(let a=0;a<5;a++){let l=1.3-a*.16;s.add(gt(l*.7,.55,l*.7,2),n.stoneLight,ot(t,o+.27,i)),o+=.55,s.add(gt(l+.3,.14,l+.3,2),n.stoneGrey,ot(t,o+.07,i)),s.add(gt(l+.2,.06,l+.2,2),n.snow,ot(t,o+.17,i)),o+=.2}s.add(Xe(.05,.08,.7,6),n.bronze,ot(t,o+.35,i))}var Gr=class{constructor(t,e="palace"){this.scene=t,this.mapId=e,this.bounds=e==="palace"?{x0:-21.6,x1:21.6,z0:-33.3,z1:30,gate:{z:21.2,x0:-3.2,x1:3.2}}:{x0:-19.6,x1:19.6,z0:-25.6,z1:21.6},this.spawn=e==="palace"?new A(0,.12,16):new A(0,0,15),this.root=new Nt,t.add(this.root),this.rects=[],this.ramps=[],this.blockRects=[],this.circles=[],this.lanterns=[],this.glowMats=[],this.drums=[],this.windows=[],this.spawnPoints=[],this.makeMaterials(),e==="palace"?this.build():e==="bamboo"?zu(this):Ou(this)}dispose(){this.scene.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose()})}makeMaterials(){let t=e=>new ct(e);this.M={floor:Pt({map:$c()}),slab:Pt({map:$c(9,[186,178,160],25)}),path:Pt({map:uu()}),block:Pt({map:Jc()}),blockDark:Pt({map:Jc([140,134,120])}),grass:Pt({map:Kc()}),dirt:Pt({map:fu()}),wood:Pt({map:jc()}),darkWood:Pt({map:pu()}),roof:Pt({map:mu()}),roofUnder:Pt({map:sl()}),fascia:Pt({map:sl(),side:de}),ridge:Pt({color:t("#3b4048")}),mortar:Pt({color:t("#e2dccb")}),dancheong:Pt({map:sl()}),plaster:Pt({map:gu()}),bark:Pt({map:bu()}),leaf:Pt({color:t("#3f6e3e")}),leaf2:Pt({color:t("#5f924a")}),bronze:Pt({color:t("#6e5a3e")}),bronzeDark:Pt({color:t("#3c3226")}),gold:Pt({color:t("#d9a83a")}),black:Pt({color:t("#2a2624")}),stoneLight:Pt({color:t("#bdb5a2")}),stoneGrey:Pt({color:t("#a29c8e")}),pot:Pt({color:t("#c9b48e")}),lotus:Pt({color:t("#4e8a4a")}),pink:Pt({color:t("#e889a6")}),orange:Pt({color:t("#e88a3a")}),blue:Pt({color:t("#2f5aa8")}),red:Pt({color:t("#b23a2e")}),drumSide:Pt({map:yu()}),drumFace:Pt({map:vu()}),medallion:Pt({map:_u(),polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),carving:Pt({map:Mu()}),lattice:Pt({map:Qc(),emissiveMap:Qc(!0),emissive:t("#000000")}),lampGlow:Pt({color:t("#f3e2b8"),emissive:t("#000000")})},this.glowMats.push({mat:this.M.lattice,color:new ct("#ffb060"),k:1.1}),this.glowMats.push({mat:this.M.lampGlow,color:new ct("#ffc070"),k:1.6})}heightAt(t,e){let i=0;for(let n of this.rects)t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1&&n.h>i&&(i=n.h);for(let n of this.ramps)if(t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1){let s=(e-n.z0)/(n.z1-n.z0),o=n.h0+(n.h1-n.h0)*s;o>i&&(i=o)}return i}isBlocked(t,e,i,n){let s=this.bounds;if(t<s.x0+i||t>s.x1-i||e<s.z0+i||e>s.z1||s.gate&&e>s.gate.z-i&&(t<s.gate.x0+i||t>s.gate.x1-i))return!0;for(let l of this.blockRects)if(t>l.x0-i&&t<l.x1+i&&e>l.z0-i&&e<l.z1+i)return!0;for(let l of this.circles){let c=t-l.x,h=e-l.z,u=l.r+i;if(c*c+h*h<u*u&&Math.abs((l.y||0)-n)<1.5)return!0}let o=this.heightAt(t,e);if(Math.abs(o-n)>.45)return!0;let a=i*.8;for(let[l,c]of Iy)if(Math.abs(this.heightAt(t+l*a,e+c*a)-o)>.45)return!0;return!1}move(t,e,i,n){let s=Math.hypot(e,i),o=Math.max(1,Math.ceil(s/.15)),a=e/o,l=i/o,c=!1,h=this.heightAt(t.x,t.z);if(this.isBlocked(t.x,t.z,n,h)){let u=t.x+e,d=t.z+i;if(Math.abs(this.heightAt(u,d)-h)<=.45&&u>-21.6&&u<21.6&&d>-33.3&&d<30)return t.x=u,t.z=d,!0}for(let u=0;u<o;u++){let d=this.heightAt(t.x,t.z);if(!this.isBlocked(t.x+a,t.z+l,n,d))t.x+=a,t.z+=l,c=!0;else if(a&&!this.isBlocked(t.x+a,t.z,n,d))t.x+=a,c=!0;else if(l&&!this.isBlocked(t.x,t.z+l,n,d))t.z+=l,c=!0;else break}return c}randomWalkable(t,e,i,n,s=30){for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,l=i+Math.random()*(n-i),c=t+Math.cos(a)*l,h=e+Math.sin(a)*l,u=this.heightAt(c,h);if(!this.isBlocked(c,h,.5,u)&&h<this.bounds.z1-2&&(!this.bounds.gate||h<20))return new A(c,u,h)}return null}build(){let t=this.M,e=this.batch=new Qi,i=Me(77);this.foliage=new Qi;let n=new at(new ve(160,160),t.dirt);n.geometry.attributes.uv.array.forEach((l,c,h)=>h[c]=l*80),n.rotation.x=-Math.PI/2,n.position.y=-.02,n.receiveShadow=!0,this.root.add(n);let s=new ve(48,58);s.attributes.uv.array.forEach((l,c,h)=>h[c]=l*(c%2===0?12:14.5));let o=new at(s,t.floor);o.rotation.x=-Math.PI/2,o.position.set(0,0,-6),o.receiveShadow=!0,this.root.add(o),e.add(gt(5.2,.12,24.6,4),t.path,ot(0,.06,8.7)),this.rects.push({x0:-2.6,x1:2.6,z0:-3.6,z1:21,h:.12}),e.add(gt(5.2,.08,10,4),t.path,ot(0,.04,27)),this.rects.push({x0:-2.6,x1:2.6,z0:21,z1:32,h:.08}),this.terrace(-15,15,-14,-6,.9),this.terrace(-12,12,-22,-13,1.8),this.stairs(-6,-3.6,.9,0),this.stairs(-13,-10.6,1.8,.9),this.balustrade(-15,-6,-2.9,-6,.9),this.balustrade(2.9,-6,15,-6,.9),this.balustrade(-15,-14,-15,-6,.9),this.balustrade(15,-14,15,-6,.9),this.balustrade(-12,-13,-2.9,-13,1.8),this.balustrade(2.9,-13,12,-13,1.8),this.balustrade(-12,-22,-12,-13,1.8),this.balustrade(12,-22,12,-13,1.8);for(let l of[-1,1])this.haetae(l*3.3,.9,-6.5,l),this.haetae(l*3.3,1.8,-13.5,l);this.hall();for(let l of[-1,1])this.cauldron(l*6.2,.9,-8.2);for(let l of[-1,1])this.cauldron(l*10.5,1.8,-15.2);for(let l of[-1,1])this.flag(l*5.4,1.8,-13.45,"red",l),this.flag(l*4.6,.9,-8.6,"white",l),this.flag(l*4.8,0,1.2,"red",l),this.flag(l*4.8,0,9.5,"white",l),this.flag(l*19.5,0,-24,"navy",l),this.flag(l*20,0,-11,"navy",l),this.flag(l*20,0,18,"navy",l);for(let l of[-1,1])this.drum(l*10.5,4.2,l);for(let l of[-1,1]){let c=new at(new ve(6,6),t.medallion);c.rotation.x=-Math.PI/2,c.position.set(l*17,.012,4.2),c.receiveShadow=!0,this.root.add(c)}this.planter(-14.6,-6,-6,-1.4),this.planter(6,14.6,-6,-1.4),this.planter(-14,-7.4,9.2,14.2),this.planter(7.4,14,9.2,14.2),this.pine(-11.2,.3,-3.6,1.15,3),this.pine(11.4,.3,-3.4,1.1,4),this.pine(-10.6,.3,11.8,.85,5),this.pine(10.8,.3,11.6,.8,6),this.shrub(-7.4,.3,-2.6),this.shrub(7.6,.3,-2.4),this.shrub(-13.2,.3,-2.2),this.shrub(13,.3,-4.6),this.shrub(-8.4,.3,13.1),this.shrub(8.6,.3,10.2);for(let[l,c,h,u]of[[-16,-28,1.2,11],[15,-27,1.3,12],[-5,-30,1,13],[6,-31,.95,14],[17.5,-18.5,.9,15],[-17.5,-18,.95,16]])this.pine(l,0,c,h,u);for(let[l,c,h,u]of[[-12,27,1.2,21],[11,28,1.3,22],[-22,30,1,23],[24,31,1.1,24],[-7,33,.9,25],[7,35,1,26],[-30,10,1.3,27],[31,-5,1.2,28],[-31,-20,1.2,29],[30,15,1.1,30]])this.pine(l,0,c,h,u,!1);for(let l of[-1,1])this.flowerPot(l*3.7,4.6),this.flowerPot(l*3.7,13.4),this.flowerPot(l*3.7,-1.6);for(let l of[-1,1])this.stoneLantern(l*7.6,0,17.2),this.stoneLantern(l*16.5,0,-2.2),this.stoneLantern(l*16.5,0,12),this.stoneLantern(l*10.9,1.8,-21),this.stoneLantern(l*13.6,.9,-7);this.stoneLantern(-11,0,-26),this.stoneLantern(11,0,-24),this.pond(-21,-15,-31.2,-24.6),this.corridor(-1),this.corridor(1),this.northWall(),this.southWall(),this.scatterGrass(),e.build(this.root);let a=this.foliage.build(this.root);for(let l of a)pn(l,mn.foliage);this.spawnPoints.push(new A(0,0,25),new A(-1.5,0,26),new A(1.5,0,26))}terrace(t,e,i,n,s){let o=this.M,a=this.batch,l=e-t,c=n-i,h=gt(l,s,c,2),u=gt(l,.001,c,4);a.add(h,o.block,ot((t+e)/2,s/2,(i+n)/2)),a.add(u,o.slab,ot((t+e)/2,s+.001,(i+n)/2)),a.add(gt(l+.3,.14,.4,2),o.stoneLight,ot((t+e)/2,s-.05,n+.05)),this.rects.push({x0:t,x1:e,z0:i,z1:n,h:s})}stairs(t,e,i,n){let s=this.M,o=this.batch,a=6,l=(e-t)/a,c=(i-n)/a;for(let g=0;g<a;g++){let m=i-c*(g+1)+c,_=t+l*(g+.5),S=n-.2,v=gt(5.2,m-S,l,2);o.add(v,g%2?s.stoneLight:s.stoneGrey,ot(0,(m+S)/2,_))}let h=Math.hypot(e-t,i-n),u=Math.atan2(i-n,e-t),d=(t+e)/2,f=(i+n)/2,p=gt(1.4,.12,h,2),x=p.attributes.uv;for(let g=8;g<12;g++)x.setXY(g,g%2,g<10?1:0);o.add(p,s.carving,ot(0,f+.06,d,0,u));for(let g of[-1,1])o.add(gt(.45,.4,h+.2,2),s.stoneLight,ot(g*2.82,f+.12,d,0,u));this.ramps.push({x0:-2.6,x1:2.6,z0:t,z1:e,h0:i,h1:n})}balustrade(t,e,i,n,s){let o=this.M,a=this.batch,l=Math.hypot(i-t,n-e),c=Math.atan2(-(n-e),i-t),h=Math.max(1,Math.round(l/1.6));for(let f=0;f<=h;f++){let p=f/h,x=t+(i-t)*p,g=e+(n-e)*p;a.add(gt(.24,.62,.24,2),o.stoneLight,ot(x,s+.31,g)),a.add(gt(.3,.1,.3,2),o.stoneGrey,ot(x,s+.65,g))}let u=(t+i)/2,d=(e+n)/2;a.add(gt(l,.08,.12,2),o.stoneLight,ot(u,s+.5,d,c)),a.add(gt(l,.18,.08,2),o.stoneGrey,ot(u,s+.14,d,c))}haetae(t,e,i,n){let s=this.M,o=this.batch;o.add(gt(.7,.3,.9,2),s.stoneGrey,ot(t,e+.15,i)),o.add(new jt(.32,8,6),s.stoneLight,ot(t,e+.6,i,0,0,0,[1,.9,1.25])),o.add(new jt(.27,8,6),s.stoneLight,ot(t,e+.95,i+.25)),o.add(new jt(.12,6,4),s.stoneGrey,ot(t-.12,e+1.15,i+.2)),o.add(new jt(.12,6,4),s.stoneGrey,ot(t+.12,e+1.15,i+.2)),o.add(gt(.12,.3,.12,2),s.stoneLight,ot(t-.15,e+.45,i+.3)),o.add(gt(.12,.3,.12,2),s.stoneLight,ot(t+.15,e+.45,i+.3)),this.circles.push({x:t,z:i,r:.45,y:e})}hall(){let t=this.M,e=this.batch,i=2.1,n=-18.5;e.add(gt(19.4,.3,6.2,2),t.block,ot(0,1.95,n)),e.add(gt(19.6,.06,6.4,2),t.stoneLight,ot(0,2.1,n)),this.blockRects.push({x0:-9.7,x1:9.7,z0:-21.6,z1:-15.4}),e.add(gt(17.6,3.5,4.6,2),t.darkWood,ot(0,i+1.75,n));let s=Xe(.24,.27,3.6,10,1,1);for(let o=0;o<=6;o++){let a=-9+o*3;e.add(s,t.wood,ot(a,i+1.8,-16)),e.add(s,t.wood,ot(a,i+1.8,-21)),e.add(Xe(.36,.38,.14,10),t.stoneLight,ot(a,i+.07,-16))}for(let o of[-1,1])e.add(s,t.wood,ot(o*9,i+1.8,-18.5));for(let o=0;o<6;o++){let a=-7.5+o*3;for(let l of[-.62,.62])e.add(new dt(1.22,3.3,.08),t.lattice,ot(a+l,i+1.68,-16.18));e.add(gt(2.76,.12,.14,2),t.wood,ot(a,i+3.38,-16.15)),e.add(gt(2.76,.1,.14,2),t.wood,ot(a,i+.05,-16.15))}for(let o of[-1,1])for(let a of[-17.25,-19.75])e.add(new dt(.08,3.3,2.3),t.lattice,ot(o*8.85,i+1.68,a));this.hallLightPos=[new A(-4.5,3.8,-15),new A(4.5,3.8,-15)],e.add(gt(18.8,.42,5.8,4),t.dancheong,ot(0,5.9,n)),e.add(gt(19.6,.4,6.6,4),t.dancheong,ot(0,6.3,n));for(let o=0;o<=24;o++){let a=-9.6+o*.8;for(let l of[-15.1,-21.9])e.add(gt(.3,.26,.6,1),o%2?t.dancheong:t.red,ot(a,6.58,l))}for(let o=0;o<=8;o++)for(let a of[-1,1])e.add(gt(.6,.26,.3,1),o%2?t.dancheong:t.red,ot(a*9.95,6.58,-21.7+o*.8));this.roof({cx:0,cy:6.72,cz:n,w:19.6,d:6.4,h:1.5,overhang:1.5,lift:.7,ridge:!1}),e.add(gt(13.2,2.1,2.9,2),t.darkWood,ot(0,8.35,n));for(let o=0;o<6;o++){let a=-5.5+o*2.2;e.add(new dt(1.7,1.25,.06),t.lattice,ot(a,8.55,n+1.48))}for(let o=0;o<=6;o++)e.add(Xe(.17,.17,2.1,8),t.wood,ot(-6.6+o*2.2,8.35,n+1.5));e.add(gt(14,.4,3.6,4),t.dancheong,ot(0,9.55,n)),this.roof({cx:0,cy:9.8,cz:n,w:14,d:3.6,h:2.4,overhang:1.9,lift:.85,ridge:!0})}roof({cx:t,cy:e,cz:i,w:n,d:s,h:o,overhang:a,lift:l,ridge:c,power:h=1.7,tile:u=2,rot:d=0}){let f=this.M,p=Nu({w:n,d:s,h:o,overhang:a,lift:l,power:h,tile:u}),x=new Nt;x.position.set(t,e,i),x.rotation.y=d;let g=new at(p.top,f.roof),m=new at(p.under,f.roofUnder),_=new at(p.fascia,f.fascia);for(let w of[g,m,_])w.castShadow=!0,w.receiveShadow=!0,x.add(w);let S=p.W,v=p.D,b=Math.max(.5,S-v);if(c){let w=new at(gt(b+.6,.5,.5,2),f.ridge);w.position.set(0,o+.2,0);let C=new at(gt(b+.3,.2,.56,2),f.mortar);C.position.set(0,o+.05,0),x.add(w,C);for(let y of[-1,1]){let T=new at(gt(.5,.8,.6,1),f.ridge);T.position.set(y*(b/2+.3),o+.45,0),T.rotation.z=y*.15,x.add(T)}}for(let w of[-1,1])for(let C of[-1,1]){let y=new A(w*b/2,0,0),T=new A(w*S/2,0,C*v/2),P=7,N=null;for(let L=0;L<=P;L++){let B=.02+L/P*.96,D=y.x+(T.x-y.x)*B,U=y.z+(T.z-y.z)*B,H=new A(D,p.height(D,U)+.12,U);if(N){let X=N.clone().add(H).multiplyScalar(.5),Y=N.distanceTo(H),O=new at(gt(.32,.26,Y+.08,1),f.ridge);O.position.copy(X),O.quaternion.setFromUnitVectors(new A(0,0,1),H.clone().sub(N).normalize()),O.castShadow=!0,x.add(O)}N=H}for(let L=0;L<3;L++){let B=.62+L*.1,D=y.x+(T.x-y.x)*B,U=y.z+(T.z-y.z)*B,H=new at(new dt(.16,.24,.16),f.ridge);H.position.set(D,p.height(D,U)+.36,U),x.add(H)}}return this.root.add(x),{group:x,r:p}}cauldron(t,e,i){let n=this.M,s=this.batch;s.add(gt(1.2,.2,1.2,2),n.stoneGrey,ot(t,e+.1,i));let o=ls([[0,0],[.42,.02],[.58,.25],[.62,.55],[.56,.72],[.62,.78],[.5,.78]],12);s.add(o,n.bronze,ot(t,e+.2,i)),s.add(new vi(.5,12),n.bronzeDark,ot(t,e+.9,i,0,-Math.PI/2));for(let a of[-1,1])s.add(new oi(.12,.035,4,8),n.bronzeDark,ot(t+a*.6,e+.6,i,Math.PI/2));this.circles.push({x:t,z:i,r:.7,y:e})}flag(t,e,i,n,s){let o=this.M,a=this.batch,l=4.4;a.add(gt(.7,.28,.7,1),o.black,ot(t,e+.14,i)),a.add(gt(.4,.4,.4,1),o.darkWood,ot(t,e+.48,i)),a.add(Xe(.055,.07,l,6),o.black,ot(t,e+l/2,i)),a.add(new ne(.1,.35,6),o.gold,ot(t,e+l+.15,i));let c=new ve(1.1,1.4,8,4),h=Pt({map:xu(n),side:de}),u=new at(c,h);u.position.set(t+s*.6,e+l-.9,i),s<0&&(u.scale.x=-1),u.rotation.y=s<0?.25:-.25,u.castShadow=!0,u.receiveShadow=!0,pn(u,mn.flag),this.root.add(u),this.circles.push({x:t,z:i,r:.4,y:e})}drum(t,e,i){let n=this.M,s=this.batch,o=new Nt;o.position.set(t,0,e),o.rotation.y=i*.5;let a=gt(.18,2.2,.18,1);for(let u of[-1,1])for(let d of[-1,1]){let f=new at(a,n.wood);f.position.set(u*.75,1,d*.75),f.rotation.set(d*.12,0,-u*.12),o.add(f)}for(let u of[-1,1]){let d=new at(gt(1.7,.14,.14,1),n.wood);d.position.set(0,.35,u*.8),o.add(d)}let l=new Nt;l.position.y=2.15;let c=new at(ls([[.95,-.75],[1.08,-.4],[1.12,0],[1.08,.4],[.95,.75]],18),n.drumSide);c.rotation.x=Math.PI/2,l.add(c);for(let u of[-1,1]){let d=new at(new vi(.95,18),n.drumFace);d.position.z=u*.76,d.rotation.y=u>0?0:Math.PI,l.add(d);for(let f=0;f<14;f++){let p=f/14*Math.PI*2,x=new at(new jt(.05,4,3),n.gold);x.position.set(Math.cos(p)*.97,Math.sin(p)*.97,u*.66),l.add(x)}}let h=new at(new ne(.25,.6,6),n.gold);h.position.y=1.35,l.add(h),o.add(l),o.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),this.root.add(o),this.circles.push({x:t,z:e,r:1.25,y:0}),this.drums.push({group:o,body:l,pos:new A(t,0,e),shake:0,label:"\uBD81",sound:"drum",reach:2.9,promptY:4})}planter(t,e,i,n){let s=this.M,o=this.batch,a=e-t,l=n-i,c=(t+e)/2,h=(i+n)/2,u=.32,d=.3;o.add(gt(a,u,d,2),s.stoneLight,ot(c,u/2,i+d/2)),o.add(gt(a,u,d,2),s.stoneLight,ot(c,u/2,n-d/2)),o.add(gt(d,u,l-d*2,2),s.stoneLight,ot(t+d/2,u/2,h)),o.add(gt(d,u,l-d*2,2),s.stoneLight,ot(e-d/2,u/2,h));for(let[f,p]of[[t,i],[e,i],[t,n],[e,n]])o.add(gt(.42,.46,.42,1),s.stoneGrey,ot(f+(f===t?.15:-.15),.23,p+(p===i?.15:-.15)));o.add(gt(a-d*2,.26,l-d*2,2),s.grass,ot(c,.13,h)),this.rects.push({x0:t,x1:e,z0:i,z1:n,h:.3}),this.grassAreas=this.grassAreas||[],this.grassAreas.push({x0:t+d,x1:e-d,z0:i+d,z1:n-d,y:.26})}pine(t,e,i,n,s,o=!0,a=!1){let l=this.batch,c=this.foliage,h=this.M,u=Me(s*97+3),d=new A(0,1,0),f=new A(t,e,i),p=new A((u()-.5)*.5,1,(u()-.5)*.5).normalize(),x=5,g=.9*n,m=.3*n,_=[];for(let b=0;b<x;b++){let w=m*.8,C=f.clone().addScaledVector(p,g),y=new Ht(w,m,g*1.05,7),T=new we().setFromUnitVectors(d,p);l.add(y,h.bark,new Jt().compose(f.clone().add(C).multiplyScalar(.5),T,new A(1,1,1))),_.push(C.clone()),f=C,m=w,p.x+=(u()-.5)*.7,p.z+=(u()-.5)*.5,p.y=1,p.normalize()}let S=(b,w,C,y,T)=>{let P=new Ae(1,1);c.add(P,T,new Jt().compose(b,new we().setFromEuler(new je(0,u()*6,0)),new A(w,C,y)))};for(let b=2;b<x;b++){let w=_[b-1],C=2;for(let y=0;y<C;y++){let T=u()*Math.PI*2,P=(1.2+u()*1)*n*(1-(b-2)*.18),N=new A(Math.cos(T),.25+u()*.3,Math.sin(T)).normalize(),L=w.clone().addScaledVector(N,P),B=new Ht(.06*n,.11*n,P,5),D=new we().setFromUnitVectors(d,N);l.add(B,h.bark,new Jt().compose(w.clone().add(L).multiplyScalar(.5),D,new A(1,1,1)));let U=(.8+u()*.4)*n;S(L.clone().add(new A(0,.15*n,0)),1.25*U,.42*U,1.05*U,h.leaf),S(L.clone().add(new A(.1,.42*n,.05)),.85*U,.3*U,.75*U,a?h.snowLeaf:h.leaf2)}}let v=_[x-1];S(v.clone().add(new A(0,.2*n,0)),1.5*n,.5*n,1.3*n,h.leaf),S(v.clone().add(new A(.1,.55*n,0)),1*n,.35*n,.9*n,a?h.snowLeaf:h.leaf2),o&&this.circles.push({x:t,z:i,r:.45*n,y:e})}shrub(t,e,i){let n=this.foliage,s=this.M,o=Me(Math.floor(t*31+i*7));for(let a=0;a<3;a++)n.add(new Ae(1,1),a?s.leaf2:s.leaf,new Jt().compose(new A(t+(o()-.5)*.6,e+.3+a*.12,i+(o()-.5)*.6),new we,new A(.55,.42,.5)))}flowerPot(t,e){let i=this.M,n=this.batch;n.add(gt(.7,.5,.7,2),i.stoneLight,ot(t,.25,e)),n.add(gt(.8,.08,.8,2),i.stoneGrey,ot(t,.52,e)),n.add(ls([[.18,0],[.3,.1],[.34,.3],[.3,.38]],10),i.pot,ot(t,.56,e));let s=Me(Math.floor(t*13+e*5+99));for(let o=0;o<6;o++){let a=s()*Math.PI*2,l=s()*.2;n.add(new Ae(.09,0),o%3?i.pink:i.orange,ot(t+Math.cos(a)*l,.98+s()*.1,e+Math.sin(a)*l))}n.add(new Ae(.22,0),i.leaf2,ot(t,.9,e)),this.circles.push({x:t,z:e,r:.45,y:0})}stoneLantern(t,e,i){let n=this.M,s=this.batch;s.add(Xe(.42,.46,.2,8),n.stoneGrey,ot(t,e+.1,i)),s.add(Xe(.3,.38,.16,8),n.stoneLight,ot(t,e+.28,i)),s.add(Xe(.13,.15,.9,8),n.stoneLight,ot(t,e+.8,i)),s.add(Xe(.36,.2,.2,8),n.stoneLight,ot(t,e+1.32,i)),s.add(Xe(.22,.22,.42,8),n.lampGlow,ot(t,e+1.63,i));for(let o=0;o<4;o++){let a=o/4*Math.PI*2+Math.PI/4;s.add(gt(.1,.44,.1,1),n.stoneLight,ot(t+Math.cos(a)*.24,e+1.63,i+Math.sin(a)*.24))}s.add(new ne(.52,.32,8),n.stoneGrey,ot(t,e+2,i)),s.add(new jt(.1,6,4),n.stoneGrey,ot(t,e+2.22,i)),this.lanterns.push(new A(t,e+1.65,i)),this.circles.push({x:t,z:i,r:.45,y:e})}pond(t,e,i,n){let s=this.M,o=this.batch,a=e-t,l=n-i,c=(t+e)/2,h=(i+n)/2,u=.4,d=.35;o.add(gt(a,d,u,2),s.blockDark,ot(c,d/2,i+u/2)),o.add(gt(a,d,u,2),s.blockDark,ot(c,d/2,n-u/2)),o.add(gt(u,d,l-2*u,2),s.blockDark,ot(t+u/2,d/2,h)),o.add(gt(u,d,l-2*u,2),s.blockDark,ot(e-u/2,d/2,h));let f=new at(new ve(a-2*u,l-2*u),Py());f.rotation.x=-Math.PI/2,f.position.set(c,.2,h),this.root.add(f),this.water=f;let p=Me(5);for(let x=0;x<9;x++){let g=t+.9+p()*(a-1.8),m=i+.9+p()*(l-1.8),_=.3+p()*.25;o.add(Xe(_,_,.03,9),s.lotus,ot(g,.23,m)),p()<.45&&o.add(new ne(.12,.22,5),s.pink,ot(g+.1,.36,m))}this.blockRects.push({x0:t-.1,x1:e+.1,z0:i-.1,z1:n+.1})}corridor(t){let e=this.M,i=this.batch,n=t*22,s=t*26.2,o=(n+s)/2,a=-34,l=22,c=l-a,h=(a+l)/2;i.add(gt(4.4,.5,c,2),e.block,ot(o,.25,h)),i.add(gt(4.4,.02,c,4),e.slab,ot(o,.51,h)),i.add(gt(.4,3.6,c,2),e.plaster,ot(t*25.9,2.3,h));let u=Xe(.17,.19,3.3,8);for(let d=a+1;d<=l-1;d+=3)i.add(u,e.wood,ot(t*22.5,2.15,d)),i.add(gt(.4,.14,.4,1),e.stoneLight,ot(t*22.5,.56,d));i.add(gt(.3,.36,c,4),e.dancheong,ot(t*22.5,3.85,h)),this.roof({cx:t*24.2,cy:4.05,cz:h,w:3.8,d:c,h:1.25,overhang:1,lift:0,ridge:!0,power:1.5})}northWall(){let t=this.M;this.batch.add(gt(44,3.2,.6,2),t.plaster,ot(0,1.6,-33.9)),this.roof({cx:0,cy:3.2,cz:-33.9,w:44,d:.5,h:.5,overhang:.55,lift:0,ridge:!0,power:1.2})}southWall(){let t=this.M,e=this.batch;for(let i of[-1,1]){let n=i*3.9,s=i*22,o=(n+s)/2,a=Math.abs(s-n);e.add(gt(a,1.2,.7,2),t.block,ot(o,.6,21.9)),e.add(gt(a+.1,.12,.85,2),t.stoneLight,ot(o,1.26,21.9)),this.blockRects.push({x0:Math.min(n,s),x1:Math.max(n,s),z0:21.4,z1:22.4}),e.add(gt(.7,3.4,.7,1),t.wood,ot(i*3.6,1.7,21.9)),e.add(gt(1,.3,1,1),t.stoneLight,ot(i*3.6,.15,21.9)),this.circles.push({x:i*3.6,z:21.9,r:.5,y:0})}e.add(gt(7.9,.5,.8,4),t.dancheong,ot(0,3.5,21.9)),this.roof({cx:0,cy:3.75,cz:21.9,w:8,d:1.1,h:.9,overhang:.8,lift:.3,ridge:!0})}scatterGrass(){let t=this.grassAreas,e=0;for(let f of t)e+=Math.floor((f.x1-f.x0)*(f.z1-f.z0)*26);let i=new xe;i.setAttribute("position",new Ot([-.05,0,0,.05,0,0,0,.38,0],3)),i.setAttribute("normal",new Ot([0,1,0,0,1,0,0,1,0],3)),i.setAttribute("color",new Ot([.55,.62,.5,.55,.62,.5,1.15,1.12,.95],3));let n=Pt({color:16777215,vertexColors:!0,side:de}),s=new Jn(i,n,e),o=new Jt,a=new we,l=new je,c=new ct,h=Me(99),u=["#6f9c48","#5d8c3e","#86ad52","#7aa04a"].map(f=>new ct(f)),d=0;for(let f of t){let p=Math.floor((f.x1-f.x0)*(f.z1-f.z0)*26);for(let x=0;x<p;x++){let g=f.x0+h()*(f.x1-f.x0),m=f.z0+h()*(f.z1-f.z0);l.set(0,h()*Math.PI,0);let _=.7+h()*.7;o.compose(new A(g,f.y,m),a.setFromEuler(l),new A(_,_*(.8+h()*.6),_)),s.setMatrixAt(d,o);let S=Math.sin(g*.7)*Math.cos(m*.9)*.5+.5;c.copy(u[Math.floor(h()*u.length)]).lerp(new ct("#a8b85a"),S*.35),h()<.015&&c.set(h()<.5?"#f2eee0":"#f0c850"),s.setColorAt(d,c),d++}}s.receiveShadow=!0,s.castShadow=!1,s.userData.noOutline=!0,pn(s,mn.grass,{shadow:!1}),this.root.add(s)}buildNav(){let t=this.bounds,e=.5,i=Math.floor(t.x0)-.5,n=Math.floor(t.z0)-.5,s=Math.ceil((t.x1-i+.5)/e),o=Math.ceil((t.z1-n+.5)/e),a=s*o,l=new Float32Array(a),c=[new Uint8Array(a),new Uint8Array(a)];for(let h=0;h<o;h++)for(let u=0;u<s;u++){let d=i+(u+.5)*e,f=n+(h+.5)*e,p=h*s+u,x=l[p]=this.heightAt(d,f);c[0][p]=this.isBlocked(d,f,Ks[0],x)?0:1,c[1][p]=this.isBlocked(d,f,Ks[1],x)?0:1}this.nav={cs:e,x0:i,z0:n,nx:s,nz:o,h:l,ok:c,dist:[new Float32Array(a),new Float32Array(a)],target:[-1,-1],heap:new Int32Array(a*8),hd:new Float32Array(a*8)}}navCell(t,e){let i=this.nav,n=Math.floor((t-i.x0)/i.cs),s=Math.floor((e-i.z0)/i.cs);return n<0||s<0||n>=i.nx||s>=i.nz?-1:s*i.nx+n}navLink(t,e,i){let n=this.nav;return n.ok[i][e]&&Math.abs(n.h[t]-n.h[e])<=.35}updateFlow(t,e,i){let n=this.nav;if(!n)return;let s=this.navCell(t,e);if(s<0)return;if(!n.ok[i][s]){let f=-1,p=1e9,x=s%n.nx,g=Math.floor(s/n.nx);for(let m=-4;m<=4;m++)for(let _=-4;_<=4;_++){let S=x+_,v=g+m;if(S<0||v<0||S>=n.nx||v>=n.nz)continue;let b=v*n.nx+S;n.ok[i][b]&&Math.abs(n.h[b]-n.h[s])<.5&&_*_+m*m<p&&(p=_*_+m*m,f=b)}if(f<0)return;s=f}if(n.target[i]===s)return;n.target[i]=s;let o=n.dist[i];o.fill(1/0),o[s]=0;let a=n.heap,l=n.hd,c=0,h=(f,p)=>{let x=c++;for(;x>0;){let g=x-1>>1;if(l[g]<=p)break;a[x]=a[g],l[x]=l[g],x=g}a[x]=f,l[x]=p},u=()=>{let f=a[0],p=a[--c],x=l[c],g=0;for(;;){let m=2*g+1;if(m>=c||(m+1<c&&l[m+1]<l[m]&&m++,l[m]>=x))break;a[g]=a[m],l[g]=l[m],g=m}return a[g]=p,l[g]=x,f};h(s,0);let d=n.nx;for(;c>0;){let f=l[0],p=u();if(f>o[p])continue;let x=p%d,g=(p-x)/d;for(let m=0;m<8;m++){let _=sh[m],S=rh[m],v=x+_,b=g+S;if(v<0||b<0||v>=d||b>=n.nz)continue;let w=b*d+v;if(!this.navLink(p,w,i)||_&&S&&(!this.navLink(p,g*d+v,i)||!this.navLink(p,b*d+x,i)))continue;let C=f+(_&&S?1.4142:1);C<o[w]&&(o[w]=C,h(w,C))}}}navDir(t,e){let i=this.nav;if(!i)return null;let n=this.navCell(t.x,t.z);if(n<0)return null;let s=i.dist[e];if(!isFinite(s[n])){let p=-1,x=1/0,g=n%i.nx,m=Math.floor(n/i.nx);for(let _=0;_<8;_++){let S=g+sh[_],v=m+rh[_];if(S<0||v<0||S>=i.nx||v>=i.nz)continue;let b=v*i.nx+S;s[b]<x&&Math.abs(i.h[b]-i.h[n])<=.5&&(x=s[b],p=b)}if(p<0)return null;n=p}let o=[],a=n;for(let p=0;p<6;p++){let x=a%i.nx,g=(a-x)/i.nx,m=a,_=s[a];for(let S=0;S<8;S++){let v=x+sh[S],b=g+rh[S];if(v<0||b<0||v>=i.nx||b>=i.nz)continue;let w=b*i.nx+v;s[w]<_&&this.navLink(a,w,e)&&(_=s[w],m=w)}if(m===a)break;a=m,o.push(a)}if(!o.length)return null;let l=p=>{let x=p%i.nx,g=(p-x)/i.nx;return[i.x0+(x+.5)*i.cs,i.z0+(g+.5)*i.cs]},c,h;for(let p=o.length-1;p>=0&&([c,h]=l(o[p]),!(p===0||this.clearLine(t.x,t.z,c,h,Ks[e])));p--);let u=c-t.x,d=h-t.z,f=Math.hypot(u,d);return f<.05?null:{x:u/f,z:d/f,dist:s[n]*i.cs}}clearLine(t,e,i,n,s){let o=Math.hypot(i-t,n-e),a=Math.ceil(o/.35),l=this.heightAt(t,e);for(let c=1;c<=a;c++){let h=c/a,u=t+(i-t)*h,d=e+(n-e)*h;if(this.isBlocked(u,d,s,l))return!1;l=this.heightAt(u,d)}return!0}setNight(t){for(let e of this.glowMats)e.mat.emissive.copy(e.color).multiplyScalar(t*e.k)}update(t,e){for(let i of this.drums)if(i.shake>0){i.shake=Math.max(0,i.shake-t*2.5);let n=i.shake;i.body.scale.set(1+Math.sin(e*60)*.05*n,1+Math.sin(e*60+1)*.05*n,1),i.body.rotation.z=Math.sin(e*40)*.04*n}this.water&&(this.water.material.uniforms.uNight.value=wi.night.value)}},Iy=[[1,0],[-1,0],[0,1],[0,-1]],Ks=[.36,.7],sh=[1,-1,0,0,1,1,-1,-1],rh=[0,0,1,-1,1,-1,1,-1];function ot(r,t,e,i=0,n=0,s=0,o=null){let a=new Jt,l=Array.isArray(o)?new A(...o):new A(1,1,1);return a.compose(new A(r,t,e),new we().setFromEuler(new je(n,i,s,"YXZ")),l),a}function Py(){return new Ne({uniforms:{uTime:wi.time,uNight:{value:0}},vertexShader:`
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
      }`})}var hs=null;function Ly(){if(hs)return hs;let r=128,t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d");e.imageSmoothingEnabled=!1,e.strokeStyle=e.fillStyle="#fff";let i=r/2,n=(o,a)=>{e.lineWidth=a,e.beginPath(),e.arc(i,i,o,0,Math.PI*2),e.stroke()};n(61,2),n(56,1),n(40,2),n(18,1);for(let o=0;o<8;o++){let a=o/8*Math.PI*2;e.save(),e.translate(i,i),e.rotate(a);for(let l=0;l<3;l++){let c=-50+l*4;o>>l&1?(e.fillRect(-7,c,6,2),e.fillRect(1,c,6,2)):e.fillRect(-7,c,14,2)}e.restore()}e.lineWidth=1,e.beginPath();for(let o=0;o<=8;o++){let a=o*3/8*Math.PI*2,l=i+Math.cos(a)*40,c=i+Math.sin(a)*40;o?e.lineTo(l,c):e.moveTo(l,c)}e.stroke();for(let o=0;o<24;o++){let a=o/24*Math.PI*2;e.fillRect(i+Math.cos(a)*30-1,i+Math.sin(a)*30-1,2,2)}e.beginPath(),e.arc(i,i,12,0,Math.PI),e.fill(),e.globalCompositeOperation="destination-out",e.beginPath(),e.arc(i-6,i,6,0,Math.PI*2),e.fill(),e.globalCompositeOperation="source-over",e.beginPath(),e.arc(i+6,i,6,Math.PI,Math.PI*2),e.fill();let s=e.getImageData(0,0,r,r);for(let o=3;o<s.data.length;o+=4)s.data[o]=s.data[o]>90?255:0;return e.putImageData(s,0,0),hs=new Kn(t),hs.magFilter=hs.minFilter=he,hs.generateMipmaps=!1,hs}var Dy=`
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
}`,Ny=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  if (vAlpha <= 0.01) discard;
  gl_FragColor = vec4(vColor * vAlpha, vAlpha);
}`,al=class{constructor(t,e,i){this.cap=e,this.list=[];let n=this.geo=new xe;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),n.setAttribute("position",new Ve(this.pos,3).setUsage(Ws)),n.setAttribute("aColor",new Ve(this.col,3).setUsage(Ws)),n.setAttribute("aSize",new Ve(this.size,1).setUsage(Ws)),n.setAttribute("aAlpha",new Ve(this.alpha,1).setUsage(Ws));let s=new Ne({vertexShader:Dy,fragmentShader:Ny,transparent:!0,depthWrite:!1,blending:i?Be:oa,blendSrc:aa,blendDst:Ar});this.points=new xr(n,s),this.points.frustumCulled=!1,this.points.renderOrder=i?20:10,t.add(this.points)}emit(t){this.list.length>=this.cap&&this.list.shift();let e=t.color instanceof ct?t.color:new ct(t.color??16777215);this.list.push({x:t.x,y:t.y,z:t.z,vx:t.vx||0,vy:t.vy||0,vz:t.vz||0,g:t.g??0,drag:t.drag??0,life:t.life??1,max:t.life??1,size:t.size??2,endSize:t.endSize??t.size??2,r:e.r,gg:e.g,b:e.b,c2:t.color2?new ct(t.color2):null,alpha:t.alpha??1,flicker:t.flicker||0,floor:t.floor??-100,wob:t.wob||0,seed:Math.random()*100})}update(t,e){let i=this.list,n=0;for(let s=i.length-1;s>=0;s--){let o=i[s];if(o.life-=t,o.life<=0){i.splice(s,1);continue}o.vy-=o.g*t;let a=Math.exp(-o.drag*t);o.vx*=a,o.vy*=a,o.vz*=a,o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.wob&&(o.x+=Math.sin(e*2+o.seed)*o.wob*t,o.z+=Math.cos(e*1.7+o.seed)*o.wob*t),o.y<o.floor&&(o.y=o.floor,o.vy*=-.3,o.vx*=.6,o.vz*=.6)}for(let s of i){if(n>=this.cap)break;let o=s.life/s.max;this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z;let a=s.r,l=s.gg,c=s.b;s.c2&&(a=s.c2.r+(a-s.c2.r)*o,l=s.c2.g+(l-s.c2.g)*o,c=s.c2.b+(c-s.c2.b)*o),this.col[n*3]=a,this.col[n*3+1]=l,this.col[n*3+2]=c,this.size[n]=Math.max(1,Math.round(s.endSize+(s.size-s.endSize)*o));let h=s.alpha*Math.min(1,o*3);s.flicker&&(h*=1-s.flicker*(Math.sin(e*30+s.seed*10)*.5+.5)),this.alpha[n]=h,n++}this.geo.setDrawRange(0,n);for(let s of["position","aColor","aSize","aAlpha"])this.geo.attributes[s].needsUpdate=!0}},ol=`
varying vec2 vL;
void main(){ vL = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,Uy=`
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
}`,Fy=`
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
}`,Hu=`
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
}`,ll=class{constructor(t,e){this.scene=t,this.pixel=e,this.add=new al(t,2500,!0),this.norm=new al(t,1500,!1),this.arcs=[],this.rings=[],this.numbers=[],this.flashes=[],this.ghosts=[],this.bolts=[],this.circles=[],this.scorches=[],this.streaks=[],this.spikes=[],this.numLayer=document.getElementById("numbers"),this.time=0}spark(t,e,i,n=10,s="#fff6c8",o=6){for(let a=0;a<n;a++){let l=Math.random()*Math.PI*2,c=R(-.2,1),h=o*R(.4,1);this.add.emit({x:t,y:e,z:i,vx:Math.cos(l)*h,vy:c*h*.8,vz:Math.sin(l)*h,g:12,drag:4,life:R(.15,.35),size:3,endSize:1,color:s,color2:"#ff8a30"})}}dust(t,e,i,n=4,s="#c8bca0"){for(let o=0;o<n;o++){let a=Math.random()*Math.PI*2;this.norm.emit({x:t+R(-.15,.15),y:e+.05,z:i+R(-.15,.15),vx:Math.cos(a)*.8,vy:R(.3,.9),vz:Math.sin(a)*.8,drag:3,life:R(.3,.55),size:3,endSize:1,color:s,alpha:.75})}}colorFire(t,e,i,n=20,s=.5,o="#9ff0ff",a="#2050ff"){for(let l=0;l<n;l++)this.add.emit({x:t+R(-s,s),y:e+R(0,.4),z:i+R(-s,s),vx:R(-.4,.4),vy:R(1.2,3.2),vz:R(-.4,.4),drag:1.5,life:R(.35,.8),size:R(2,4),endSize:1,color:o,color2:a,flicker:.3})}blueFire(t,e,i,n=20,s=.5){for(let o=0;o<n;o++)this.add.emit({x:t+R(-s,s),y:e+R(0,.4),z:i+R(-s,s),vx:R(-.4,.4),vy:R(1.2,3.2),vz:R(-.4,.4),drag:1.5,life:R(.35,.8),size:R(2,4),endSize:1,color:"#9ff0ff",color2:"#2050ff",flicker:.3})}smoke(t,e,i,n=8){for(let s=0;s<n;s++)this.norm.emit({x:t+R(-.4,.4),y:e+R(0,.5),z:i+R(-.4,.4),vx:R(-.6,.6),vy:R(.5,1.4),vz:R(-.6,.6),drag:2,life:R(.5,.9),size:5,endSize:2,color:"#d8d4e8",alpha:.7})}coins(t,e,i,n=6){for(let s=0;s<n;s++){let o=Math.random()*Math.PI*2;this.add.emit({x:t,y:e+.4,z:i,vx:Math.cos(o)*R(1,2.5),vy:R(3,5),vz:Math.sin(o)*R(1,2.5),g:14,life:R(.7,1.1),size:2,color:"#ffe070",floor:e+.02,flicker:.5})}}slash(t,e,i=0,n={}){let s=n.inner??.45,o=n.outer??1.9,a=n.len??2.8,l=-Math.PI/2-a/2,c=new Qn(s,o,24,1,l,a),h=new Ne({vertexShader:ol,fragmentShader:Uy,uniforms:{uProg:{value:0},uStart:{value:l},uLen:{value:a},uInner:{value:s},uOuter:{value:o},uColor:{value:new ct(n.color||"#e8fbff")},uFade:{value:1},uTail:{value:n.static?1.2:.55}},transparent:!0,depthWrite:!1,blending:Be,side:de}),u=new at(c,h),d=new Nt;return d.add(u),d.position.copy(t),d.rotation.y=e,u.rotation.x=-Math.PI/2,i===1&&(u.scale.x=-1),i===2&&(u.rotation.set(0,0,0),u.rotation.y=Math.PI/2,u.rotation.z=-Math.PI/2+0,d.position.y+=.2),u.renderOrder=30,this.scene.add(d),n.scale&&d.scale.setScalar(n.scale),this.arcs.push({g:d,mat:h,t:0,dur:n.dur??.2,move:n.move||null,static:!!n.static,fadeAll:!!n.fadeAll,kill:!1}),d}cross(t,e="#bff4ff",i=2.2,n=.38){let s=new Nt;s.position.copy(t),s.rotation.x=-Math.PI/4;let o=[];for(let[a,l]of[[.75,1],[-.75,.8]]){let c=new Ne({vertexShader:ol,fragmentShader:Hu,uniforms:{uColor:{value:new ct(e)},uAlpha:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:Be,side:de}),h=new at(new ve(2,2),c);h.rotation.z=a,h.scale.set(i*.5*l,.14,1),h.renderOrder=40,s.add(h),o.push(c)}this.scene.add(s),this.flashes.push({g:s,mats:o,t:0,dur:n,size:i})}circle(t,e,i="#b89aff",n=1,s=1.2){let o=new Kt({map:Ly(),color:new ct(i),transparent:!0,blending:Be,depthWrite:!1}),a=new at(new ve(2,2),o);a.rotation.x=-Math.PI/2,a.position.set(t.x,t.y+.05,t.z),a.renderOrder=22,this.scene.add(a);let l={m:a,mat:o,t:0,dur:n,radius:e,spin:s};return this.circles.push(l),l}scorch(t,e,i="#1a1220",n=2.5){let s=new Kt({color:new ct(i),transparent:!0,opacity:.55,depthWrite:!1}),o=new at(new vi(e,12),s);o.rotation.x=-Math.PI/2,o.position.set(t.x,t.y+.03,t.z),o.renderOrder=5,this.scene.add(o),this.scorches.push({m:o,mat:s,t:0,dur:n})}arc(t,e,i="#d8c8ff",n=.6){let s=new Nt,o=new Kt({color:"#ffffff",transparent:!0,blending:Be,depthWrite:!1}),a=new Kt({color:new ct(i),transparent:!0,opacity:.6,blending:Be,depthWrite:!1}),l=6,c=t.clone();for(let h=1;h<=l;h++){let u=h/l,d=t.clone().lerp(e,u);h<l&&d.add(new A(R(-.35,.35),R(-.3,.3),R(-.35,.35)));let f=c.distanceTo(d),p=d.clone().sub(c).normalize(),x=new we().setFromUnitVectors(new A(0,1,0),p);for(let[g,m]of[[a,.3*n],[o,.1*n]]){let _=new at(new dt(m,f+.04,m),g);_.position.copy(c).lerp(d,.5),_.quaternion.copy(x),_.renderOrder=45,s.add(_)}c=d}this.scene.add(s),this.bolts.push({g:s,mats:[o,a],t:0,dur:.25})}streak(t,e,i="#ffffff",n=.45,s=.35){let o=t.distanceTo(e),a=new Ne({vertexShader:ol,fragmentShader:Hu,uniforms:{uColor:{value:new ct(i)},uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:Be,side:de}),l=new at(new ve(2,2),a);l.position.copy(t).lerp(e,.5),l.rotation.order="YXZ",l.rotation.y=Math.atan2(e.x-t.x,e.z-t.z)+Math.PI/2,l.rotation.x=-Math.PI/2,l.scale.set(o/2,s/2,1),l.renderOrder=42,this.scene.add(l),this.streaks.push({m:l,mat:a,t:0,dur:n,w:s})}iceSpike(t,e=1.2,i=1.3){this.iceMat||(this.iceMat=new ts({color:new ct("#bfe8ff"),emissive:new ct("#2a5a8a")}));let n=new at(new ne(.22+Math.random()*.1,e,5),this.iceMat);n.position.set(t.x,t.y-e/2,t.z),n.rotation.set(R(-.25,.25),R(0,6),R(-.25,.25)),n.castShadow=!0,this.scene.add(n),this.spikes.push({m:n,t:0,life:i,h:e,y0:t.y})}bolt(t,e=1){let i=new Nt,n=new Kt({color:"#ffffff",transparent:!0,blending:Be,depthWrite:!1}),s=new Kt({color:"#8a6aff",transparent:!0,opacity:.55,blending:Be,depthWrite:!1}),o=new A(t.x+R(-1.5,1.5),t.y+13,t.z+R(-1.5,1.5)),a=9;for(let l=1;l<=a;l++){let c=l/a,h=new A(t.x+(o.x-t.x)*0+(l<a?R(-.7,.7)*(1-c):0),t.y+13*(1-c),t.z+(l<a?R(-.7,.7)*(1-c):0)),u=o.clone().add(h).multiplyScalar(.5),d=o.distanceTo(h),f=h.clone().sub(o).normalize(),p=new we().setFromUnitVectors(new A(0,1,0),f);for(let[x,g]of[[s,.42*e],[n,.16*e]]){let m=new at(new dt(g,d+.05,g),x);m.position.copy(u),m.quaternion.copy(p),m.renderOrder=45,i.add(m)}if(l>2&&l<a-1&&Math.random()<.45){let x=R(.6,1.4),g=new A(R(-1,1),-R(.3,1),R(-1,1)).normalize(),m=new at(new dt(.1*e,x,.1*e),n);m.position.copy(h).addScaledVector(g,x/2),m.quaternion.setFromUnitVectors(new A(0,1,0),g),i.add(m)}o=h}this.scene.add(i),this.bolts.push({g:i,mats:[n,s],t:0,dur:.32}),this.ring(t,1.2*e,"#ffffff",.25)}ghost(t,e="#5ab8ff",i=.28){let n=new Kt({color:new ct(e),transparent:!0,opacity:.55,blending:Be,depthWrite:!1}),s=t.root.clone(!0);s.traverse(o=>{o.isMesh&&(o.material=n,o.castShadow=!1,o.receiveShadow=!1)}),this.scene.add(s),this.ghosts.push({c:s,mat:n,t:0,dur:i})}ring(t,e,i="#ffffff",n=.35,s=0){let o=new vi(1,32),a=new Ne({vertexShader:ol,fragmentShader:Fy,uniforms:{uColor:{value:new ct(i)},uAlpha:{value:1},uProg:{value:0},uMode:{value:s}},transparent:!0,depthWrite:!1,blending:Be}),l=new at(o,a);l.rotation.x=-Math.PI/2,l.position.copy(t),l.position.y+=.04,l.renderOrder=25,this.scene.add(l);let c={m:l,mat:a,t:0,dur:n,radius:e,mode:s,manual:s===1};return l.scale.setScalar(s===1?e:.01),this.rings.push(c),c}removeRing(t){t.dead=!0}number(t,e,i="normal"){let n=document.createElement("div");n.className="dmg "+i,n.textContent=e,this.numLayer.appendChild(n),this.numbers.push({el:n,p:t.clone(),vy:2.6,vx:R(-.6,.6),t:0,life:i==="heal"?1:.85})}update(t){this.time+=t,this.add.update(t,this.time),this.norm.update(t,this.time);for(let e=this.arcs.length-1;e>=0;e--){let i=this.arcs[e];i.t+=t;let n=i.t/i.dur;i.mat.uniforms.uProg.value=i.static?1:Math.min(1.55,n*1.55),i.mat.uniforms.uFade.value=i.fadeAll?Math.max(0,1-n)*(i.alpha??1):n>.7?Math.max(0,1-(n-.7)/.3):1,i.move&&i.move(i,t),(n>=1||i.kill)&&(this.scene.remove(i.g),i.mat.dispose(),i.g.children[0].geometry.dispose(),this.arcs.splice(e,1))}for(let e=this.rings.length-1;e>=0;e--){let i=this.rings[e];if(i.t+=t,!i.manual){let n=i.t/i.dur;i.m.scale.setScalar(.2+i.radius*Math.sqrt(n)),i.mat.uniforms.uAlpha.value=1-n,n>=1&&(i.dead=!0)}i.dead&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.rings.splice(e,1))}for(let e=this.flashes.length-1;e>=0;e--){let i=this.flashes[e];i.t+=t;let n=i.t/i.dur,s=Math.min(1,i.t/.06);i.g.children.forEach((o,a)=>{o.scale.x=i.size*.5*(a?.8:1)*(.3+.7*s),o.scale.y=.14*(1-n*.7)});for(let o of i.mats)o.uniforms.uAlpha.value=Math.max(0,1-n*n);if(n>=1){this.scene.remove(i.g);for(let o of i.mats)o.dispose();i.g.children.forEach(o=>o.geometry.dispose()),this.flashes.splice(e,1)}}for(let e=this.circles.length-1;e>=0;e--){let i=this.circles[e];i.t+=t;let n=i.t/i.dur,s=Math.min(1,i.t/.18);i.m.scale.setScalar(i.radius*(.4+.6*(1-Math.pow(1-s,3)))),i.m.rotation.z+=t*i.spin,i.mat.opacity=n>.75?Math.max(0,1-(n-.75)/.25):1,(n>=1||i.dead)&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.circles.splice(e,1))}for(let e=this.scorches.length-1;e>=0;e--){let i=this.scorches[e];i.t+=t,i.mat.opacity=.55*Math.max(0,1-i.t/i.dur),i.t>=i.dur&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.scorches.splice(e,1))}for(let e=this.streaks.length-1;e>=0;e--){let i=this.streaks[e];i.t+=t;let n=i.t/i.dur;i.mat.uniforms.uAlpha.value=Math.max(0,1-n*n),i.m.scale.y=i.w/2*(1-n*.8),n>=1&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.streaks.splice(e,1))}for(let e=this.spikes.length-1;e>=0;e--){let i=this.spikes[e];i.t+=t;let n=Math.min(1,i.t/.12);if(i.m.position.y=i.y0-i.h/2+i.h*(1-Math.pow(1-n,3))*.95,i.t>=i.life){for(let s=0;s<6;s++)this.add.emit({x:i.m.position.x,y:i.y0+R(.2,i.h),z:i.m.position.z,vx:R(-2,2),vy:R(1,4),vz:R(-2,2),g:12,life:R(.3,.6),size:3,endSize:1,color:"#e8f8ff",color2:"#5aa8ff"});this.scene.remove(i.m),i.m.geometry.dispose(),this.spikes.splice(e,1)}}for(let e=this.bolts.length-1;e>=0;e--){let i=this.bolts[e];i.t+=t;let n=i.t/i.dur;i.g.visible=n<.35||Math.floor(i.t*40)%2===0,i.mats[0].opacity=Math.max(0,1-n),i.mats[1].opacity=.55*Math.max(0,1-n),n>=1&&(this.scene.remove(i.g),i.g.traverse(s=>s.geometry&&s.geometry.dispose()),i.mats.forEach(s=>s.dispose()),this.bolts.splice(e,1))}for(let e=this.ghosts.length-1;e>=0;e--){let i=this.ghosts[e];i.t+=t;let n=i.t/i.dur;i.mat.opacity=.55*Math.max(0,1-n),n>=1&&(this.scene.remove(i.c),i.mat.dispose(),this.ghosts.splice(e,1))}for(let e=this.numbers.length-1;e>=0;e--){let i=this.numbers[e];i.t+=t,i.vy-=7*t,i.p.y+=i.vy*t,i.p.x+=i.vx*t;let n=this.pixel.project(i.p),s=this.pixel.pixelSize,o=Math.round(n.x/s)*s,a=Math.round(n.y/s)*s,l=i.t<.08?1.6-i.t*7:1;i.el.style.transform=`translate(${o}px, ${a}px) translate(-50%, -50%) scale(${l.toFixed(2)})`,i.el.style.opacity=i.t>i.life*.6?String(1-(i.t-i.life*.6)/(i.life*.4)):"1",i.t>=i.life&&(i.el.remove(),this.numbers.splice(e,1))}}};var cl=class{constructor(){this.ctx=null,this.musicOn=!0,this.mood="day",this.nextNote=0,this.step=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.55,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=.32;let i=e.createDelay();i.delayTime.value=.28;let n=e.createGain();n.gain.value=.3;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this.music.connect(this.master),this.music.connect(i),i.connect(s),s.connect(n),n.connect(i),s.connect(this.master);let o=e.sampleRate;this.noiseBuf=e.createBuffer(1,o,e.sampleRate);let a=this.noiseBuf.getChannelData(0);for(let l=0;l<o;l++)a[l]=Math.random()*2-1;this.nextNote=e.currentTime+.3}noise(t,{type:e="bandpass",f0:i=1e3,f1:n=1e3,q:s=1,gain:o=.3,attack:a=.005,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime,u=c.createBufferSource();u.buffer=this.noiseBuf,u.playbackRate.value=.7+Math.random()*.6;let d=c.createBiquadFilter();d.type=e,d.Q.value=s,d.frequency.setValueAtTime(i,h),d.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+t);let f=c.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(o,h+a),f.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(d),d.connect(f),f.connect(l||this.sfx),u.start(h,Math.random()*.5),u.stop(h+t+.05)}tone(t,{type:e="sine",f0:i=440,f1:n=null,gain:s=.3,attack:o=.005,at:a=0,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+a,u=c.createOscillator();u.type=e,u.frequency.setValueAtTime(i,h),n&&u.frequency.exponentialRampToValueAtTime(n,h+t);let d=c.createGain();d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(s,h+o),d.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(d),d.connect(l||this.sfx),u.start(h),u.stop(h+t+.05)}play(t){if(this.ctx)switch(t){case"swing":this.noise(.16,{f0:700,f1:3200,q:2.5,gain:.22});break;case"swing3":this.noise(.22,{f0:500,f1:3800,q:2.2,gain:.3}),this.tone(.2,{type:"triangle",f0:900,f1:1800,gain:.05});break;case"hit":this.tone(.14,{f0:160,f1:50,gain:.5}),this.noise(.08,{type:"highpass",f0:2500,f1:1500,gain:.25});break;case"crit":this.tone(.2,{f0:200,f1:45,gain:.6}),this.noise(.12,{type:"highpass",f0:3e3,f1:1200,gain:.3}),this.tone(.18,{type:"square",f0:1320,f1:1760,gain:.04,at:.02});break;case"drum":this.tone(1.1,{f0:95,f1:38,gain:.95,attack:.004}),this.tone(.6,{f0:180,f1:70,gain:.3}),this.noise(.35,{type:"lowpass",f0:900,f1:120,gain:.5});break;case"draw":this.noise(.22,{type:"highpass",f0:2500,f1:6e3,gain:.22,attack:.01}),this.tone(.25,{type:"triangle",f0:2600,f1:3400,gain:.05}),this.noise(.18,{f0:900,f1:3500,q:2.5,gain:.25,attack:.02});break;case"sheathe":this.tone(.05,{type:"square",f0:2200,f1:1400,gain:.06}),this.noise(.06,{type:"highpass",f0:3e3,f1:2e3,gain:.2}),this.tone(.08,{type:"square",f0:1300,f1:900,gain:.04,at:.04});break;case"bowdraw":this.noise(.22,{f0:300,f1:900,q:6,gain:.08,attack:.08});break;case"bow":this.tone(.18,{type:"triangle",f0:420,f1:180,gain:.18}),this.noise(.12,{f0:2500,f1:800,q:1.5,gain:.2});break;case"bowskill":for(let e=0;e<4;e++)this.tone(.16,{type:"triangle",f0:460-e*30,f1:200,gain:.12,at:e*.04});this.noise(.6,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.03});break;case"arrowhit":this.noise(.06,{type:"highpass",f0:3e3,f1:1500,gain:.18}),this.tone(.07,{f0:260,f1:120,gain:.25});break;case"cast":this.noise(.18,{f0:800,f1:2400,q:2,gain:.15}),this.tone(.25,{type:"sine",f0:880,f1:1320,gain:.06});break;case"fire":this.noise(.4,{type:"lowpass",f0:2400,f1:200,gain:.35,attack:.005}),this.tone(.2,{f0:140,f1:60,gain:.3});break;case"chant":[523,659,784].forEach((e,i)=>this.tone(.35,{type:"sine",f0:e,gain:.06,at:i*.08}));break;case"charge":this.noise(.4,{f0:200,f1:3e3,q:4,gain:.12,attack:.3});break;case"thunder":this.noise(.12,{type:"highpass",f0:5e3,f1:2e3,gain:.4,attack:.002}),this.noise(1.2,{type:"lowpass",f0:900,f1:60,gain:.6,attack:.01}),this.tone(.9,{f0:80,f1:30,gain:.5});break;case"blink":this.tone(.25,{type:"sine",f0:1600,f1:400,gain:.08}),this.noise(.25,{f0:3e3,f1:600,q:3,gain:.15});break;case"freeze":[1568,2093,2637,3136].forEach((e,i)=>this.tone(.4,{type:"triangle",f0:e,f1:e*.98,gain:.05,at:i*.05})),this.noise(.5,{type:"highpass",f0:4e3,f1:6e3,gain:.18,attack:.01}),this.tone(.4,{f0:160,f1:60,gain:.3});break;case"tornado":this.noise(1.6,{f0:300,f1:1600,q:2.5,gain:.3,attack:.2}),this.noise(1.4,{type:"lowpass",f0:600,f1:200,gain:.25,attack:.3});break;case"levelup":[523,659,784,1046,1318].forEach((e,i)=>this.tone(.45,{type:"triangle",f0:e,gain:.1,at:i*.07})),this.noise(.8,{f0:2e3,f1:6e3,q:1,gain:.12,attack:.1});break;case"howl":this.tone(.7,{type:"sawtooth",f0:500,f1:1100,gain:.04,attack:.15}),this.tone(.6,{type:"triangle",f0:900,f1:600,gain:.05,at:.3});break;case"wail":this.tone(1,{type:"sine",f0:620,f1:380,gain:.07,attack:.25}),this.tone(1,{type:"sine",f0:640,f1:395,gain:.05,attack:.3}),this.noise(.9,{f0:600,f1:300,q:6,gain:.08,attack:.3});break;case"bell":[1760,2217,2637].forEach((e,i)=>this.tone(.9,{type:"sine",f0:e,gain:.08,at:i*.05})),[1760,2217].forEach((e,i)=>this.tone(.6,{type:"sine",f0:e*1.01,gain:.05,at:.25+i*.05}));break;case"bigbell":this.tone(3.2,{type:"sine",f0:98,gain:.7,attack:.01}),this.tone(3,{type:"sine",f0:196.5,gain:.25,attack:.01}),this.tone(2.4,{type:"sine",f0:263,gain:.12,attack:.02}),this.noise(.25,{type:"lowpass",f0:800,f1:150,gain:.4});break;case"portal":this.tone(1,{type:"sine",f0:300,f1:1200,gain:.1,attack:.2}),this.noise(1,{f0:400,f1:3e3,q:2,gain:.15,attack:.3});break;case"denied":this.tone(.07,{type:"square",f0:180,gain:.05}),this.tone(.07,{type:"square",f0:140,gain:.05,at:.07});break;case"skill":this.noise(.5,{f0:300,f1:5e3,q:1.8,gain:.32,attack:.02}),this.tone(.45,{type:"sawtooth",f0:220,f1:1760,gain:.05,attack:.02}),this.tone(.6,{type:"triangle",f0:1320,f1:2640,gain:.07,at:.05}),this.tone(.3,{f0:120,f1:50,gain:.4});break;case"skillhit":this.tone(.25,{type:"square",f0:1800,f1:600,gain:.05}),this.noise(.18,{type:"highpass",f0:4e3,f1:1500,gain:.25});break;case"burst":this.noise(.5,{type:"lowpass",f0:3e3,f1:200,gain:.25}),this.tone(.4,{type:"triangle",f0:1760,f1:440,gain:.05});break;case"impact":this.tone(.3,{f0:110,f1:40,gain:.45}),this.noise(.2,{type:"lowpass",f0:1200,f1:150,gain:.3});break;case"dash":this.noise(.25,{type:"lowpass",f0:2400,f1:300,gain:.25,attack:.03});break;case"wave":this.noise(.45,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.05}),this.tone(.4,{type:"triangle",f0:600,f1:1400,gain:.08});break;case"hurt":this.tone(.2,{type:"square",f0:260,f1:90,gain:.12}),this.noise(.12,{f0:1200,f1:400,gain:.25});break;case"poof":this.noise(.4,{type:"lowpass",f0:1800,f1:200,gain:.35,attack:.01}),this.tone(.25,{type:"triangle",f0:500,f1:1500,gain:.08});break;case"spawn":this.tone(.5,{type:"sine",f0:300,f1:900,gain:.08,attack:.1}),this.noise(.5,{f0:300,f1:1500,q:3,gain:.12,attack:.15});break;case"laugh":for(let e=0;e<3;e++)this.tone(.09,{type:"square",f0:760-e*40,f1:620-e*40,gain:.04,at:e*.11});break;case"slam":this.tone(.8,{f0:70,f1:28,gain:.9}),this.noise(.6,{type:"lowpass",f0:600,f1:80,gain:.6});break;case"orb":this.tone(.25,{type:"sine",f0:900,f1:400,gain:.08});break;case"talk":this.tone(.04,{type:"square",f0:520+Math.random()*80,gain:.025});break;case"coin":this.tone(.08,{type:"square",f0:1320,gain:.04}),this.tone(.15,{type:"square",f0:1760,gain:.04,at:.07});break;case"victory":[523,659,784,1046].forEach((e,i)=>this.tone(.5,{type:"triangle",f0:e,gain:.12,at:i*.12,dest:this.sfx}));break;case"block":this.tone(.06,{type:"square",f0:1800,f1:1200,gain:.05});break}}pluck(t,e,i=.18){let n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(t*1.01,e),s.frequency.exponentialRampToValueAtTime(t,e+.08),Math.random()<.3&&(s.frequency.setValueAtTime(t,e+.25),s.frequency.linearRampToValueAtTime(t*1.06,e+.4),s.frequency.linearRampToValueAtTime(t,e+.6));let o=n.createOscillator();o.type="sine",o.frequency.value=t*2;let a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(i,e+.004),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let l=n.createGain();l.gain.value=.25,s.connect(a),o.connect(l),l.connect(a),a.connect(this.music),s.start(e),o.start(e),s.stop(e+1.2),o.stop(e+1.2)}janggu(t,e){let i=this.ctx;if(e==="deong"){let a=i.createOscillator();a.frequency.setValueAtTime(110,t),a.frequency.exponentialRampToValueAtTime(55,t+.2);let l=i.createGain();l.gain.setValueAtTime(.35,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.3),a.connect(l),l.connect(this.music),a.start(t),a.stop(t+.35)}let n=i.createBufferSource();n.buffer=this.noiseBuf;let s=i.createBiquadFilter();s.type="bandpass",s.frequency.value=e==="kung"?400:2400,s.Q.value=1.5;let o=i.createGain();o.gain.setValueAtTime(e==="kung"?.3:.18,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.08),n.connect(s),s.connect(o),o.connect(this.music),n.start(t,Math.random()),n.stop(t+.1)}update(){let t=this.ctx;if(!t||!this.musicOn)return;let e=this.mood==="battle"?146.83:196,i=[0,2,5,7,9,12,14,17,19],n=this.mood==="battle"?.22:.42;for(;this.nextNote<t.currentTime+.25;){let s=this.nextNote,o=this.step,a=this.mood==="battle"?["deong",0,"tta","kung","deong",0,"tta","tta"]:["deong",0,0,"kung",0,"tta",0,0,"kung",0,"tta",0],l=a[o%a.length];l&&this.janggu(s,l);let c=this.mood==="battle"?1:2;if(o%c===0&&Math.random()<(this.mood==="battle"?.75:.6)){this.melIdx=Math.max(0,Math.min(i.length-1,(this.melIdx??4)+Math.floor(Math.random()*5)-2));let h=e*Math.pow(2,i[this.melIdx]/12);this.pluck(h,s,this.mood==="battle"?.13:.16),Math.random()<.25&&this.pluck(h/2,s,.1)}o%16===0&&this.pluck(e/2,s,.12),this.step++,this.nextNote+=n}}toggleMusic(){return this.musicOn=!this.musicOn,this.music&&(this.music.gain.value=this.musicOn?.32:0),this.musicOn}};var tn=[{name:"\uC77C\uBC18",color:"#d8d0c0"},{name:"\uACE0\uAE09",color:"#6ad06a"},{name:"\uD76C\uADC0",color:"#5ab0ff"},{name:"\uC601\uC6C5",color:"#c87aff"},{name:"\uC804\uC124",color:"#ffc040"},{name:"\uBCF4\uC2A4",color:"#ff5a4a"}],Gu={boss:{boss:"\uB450\uC5B5\uC2DC\uB2C8",set:"\uB450\uC5B5\uC2DC\uB2C8"},gumiho:{boss:"\uCC9C\uB144 \uAD6C\uBBF8\uD638",set:"\uAD6C\uBBF8\uD638"},reaper:{boss:"\uC800\uC2B9\uC0AC\uC790",set:"\uC800\uC2B9"}},By={quake:"\uB3C4\uAE68\uBE44 \uBCBC\uB77D: \uB9DE\uD790 \uB54C 20% \uD655\uB960\uB85C \uC8FC\uBCC0\uC5D0 \uBCBC\uB77D \uCDA9\uACA9\uD30C",drain:"\uC5EC\uC6B0\uAD6C\uC2AC: \uC900 \uD53C\uD574\uC758 6%\uB9CC\uD07C \uCCB4\uB825 \uD68C\uBCF5",execute:"\uC800\uC2B9 \uC2EC\uD310: \uCCB4\uB825 35% \uC544\uB798\uC778 \uC801\uC5D0\uAC8C \uD53C\uD574 +60%",rage:"\uB3C4\uAE68\uBE44 \uB69D\uC2EC: \uCCB4\uB825\uC774 40% \uC544\uB798\uBA74 \uACF5\uACA9\uB825 +35%",swift:"\uC5EC\uC6B0 \uAC78\uC74C: \uC774\uB3D9 \uC18D\uB3C4 +15%, \uC774\uB3D9\uAE30 \uB300\uAE30\uC2DC\uAC04 -30%",soul:"\uD63C \uAC70\uB450\uAE30: \uC801\uC744 \uC4F0\uB7EC\uB728\uB9B4 \uB54C\uB9C8\uB2E4 \uCD5C\uB300 \uCCB4\uB825\uC758 4% \uD68C\uBCF5"},zn={sword:[{id:"sw0",name:"\uC218\uB828\uC6A9 \uD658\uB3C4",tier:0,atk:0,style:{}},{id:"sw1",name:"\uAC15\uCCA0 \uD658\uB3C4",tier:1,atk:.15,style:{blade:"#aeb8c4",guard:"#2a2830",wrap:"#3a2a20"}},{id:"sw2",name:"\uCCAD\uAC15 \uC6D4\uAD11\uAC80",tier:2,atk:.32,style:{blade:"#bfe4ff",edge:"#ffffff",guard:"#c8d4e0",wrap:"#2a3a6a",glow:"#3a9aff"}},{id:"sw3",name:"\uC790\uC6B4 \uBE44\uB3C4",tier:3,atk:.5,style:{blade:"#d8c8ff",edge:"#ffffff",guard:"#8a5ad8",wrap:"#3a1a5a",glow:"#9a5aff",long:1.12}},{id:"sw4",name:"\uD751\uB8E1\uB3C4",tier:4,atk:.75,style:{blade:"#2a2830",edge:"#ff6a3a",guard:"#e0b040",wrap:"#8a1a1a",glow:"#ff3010",long:1.2}},{id:"swB1",name:"\uB450\uC5B5\uC2DC\uB2C8 \uCC38\uB9C8\uB3C4",tier:5,atk:.85,from:"boss",perk:"quake",style:{blade:"#3a4a8a",edge:"#9ad8ff",guard:"#ffd040",wrap:"#c8302c",glow:"#3ac8ff",long:1.28}},{id:"swB2",name:"\uAD6C\uBBF8\uD638 \uC5EC\uC6B0\uAC80",tier:5,atk:.9,from:"gumiho",perk:"drain",style:{blade:"#fff4ec",edge:"#ffb070",guard:"#ff6a2a",wrap:"#f0f0f0",glow:"#ff7a2a",long:1.22}},{id:"swB3",name:"\uC800\uC2B9 \uBA85\uBD80\uAC80",tier:5,atk:1,from:"reaper",perk:"execute",style:{blade:"#14101c",edge:"#c890ff",guard:"#5a3a8a",wrap:"#1a1420",glow:"#9a4aff",long:1.32}}],mage:[{id:"mg0",name:"\uBCF5\uC22D\uC544\uB098\uBB34 \uC9C0\uD321\uC774",tier:0,atk:0,style:{}},{id:"mg1",name:"\uCCAD\uB3D9 \uC9C0\uD321\uC774",tier:1,atk:.15,style:{wood:"#3a2a1a",moon:"#b07a3a",orb:"#8affc8",orbGlow:"#2aff9a"}},{id:"mg2",name:"\uC6D4\uC7A5\uC11D \uC9C0\uD321\uC774",tier:2,atk:.32,style:{wood:"#e0e0f0",moon:"#c8d4e0",orb:"#bfe8ff",orbGlow:"#4ab0ff"}},{id:"mg3",name:"\uB1CC\uC804 \uC9C0\uD321\uC774",tier:3,atk:.5,style:{wood:"#2a2a40",moon:"#ffe060",orb:"#fff6a0",orbGlow:"#ffd020",big:1.3}},{id:"mg4",name:"\uD654\uB8E1 \uC9C0\uD321\uC774",tier:4,atk:.75,style:{wood:"#2a1414",moon:"#e0b040",orb:"#ff8a4a",orbGlow:"#ff3a00",big:1.5}},{id:"mgB1",name:"\uB450\uC5B5\uC2DC\uB2C8 \uAE08\uBC29\uB9DD\uC774",tier:5,atk:.85,from:"boss",perk:"quake",style:{wood:"#c8302c",moon:"#ffd040",orb:"#9ad8ff",orbGlow:"#3ac8ff",big:1.6}},{id:"mgB2",name:"\uC5EC\uC6B0\uAD6C\uC2AC \uC9C0\uD321\uC774",tier:5,atk:.9,from:"gumiho",perk:"drain",style:{wood:"#f4ece4",moon:"#ff8a3a",orb:"#ffe6c8",orbGlow:"#ff7a2a",big:1.55}},{id:"mgB3",name:"\uBA85\uBD80 \uC9C0\uD321\uC774",tier:5,atk:1,from:"reaper",perk:"execute",style:{wood:"#14101c",moon:"#8a5ad8",orb:"#e0c8ff",orbGlow:"#9a4aff",big:1.7}}],elf:[{id:"bw0",name:"\uBC84\uB4E4 \uD65C",tier:0,atk:0,style:{}},{id:"bw1",name:"\uBB3C\uC18C\uBFD4 \uAC01\uAD81",tier:1,atk:.15,style:{wood:"#3a2a2a",grip:"#c8302c",tips:"#f0ead8"}},{id:"bw2",name:"\uBC14\uB78C\uACB0 \uD65C",tier:2,atk:.32,style:{wood:"#5ac85a",grip:"#e8f0a0",tips:"#ffffff",glow:"#3aff6a"}},{id:"bw3",name:"\uC11C\uB9AC \uD65C",tier:3,atk:.5,style:{wood:"#bfe8ff",grip:"#3a6aaa",tips:"#ffffff",glow:"#4ab0ff",big:1.15}},{id:"bw4",name:"\uC6D4\uAD81",tier:4,atk:.75,style:{wood:"#f0e8ff",grip:"#e0b040",tips:"#ffe080",glow:"#ffd040",big:1.25}},{id:"bwB1",name:"\uB450\uC5B5\uC2DC\uB2C8 \uBFD4\uD65C",tier:5,atk:.85,from:"boss",perk:"quake",style:{wood:"#c8302c",grip:"#ffd040",tips:"#f0ead8",glow:"#3ac8ff",big:1.3}},{id:"bwB2",name:"\uAD6C\uBBF8 \uAF2C\uB9AC\uD65C",tier:5,atk:.9,from:"gumiho",perk:"drain",style:{wood:"#fff4ec",grip:"#ff6a2a",tips:"#ffb070",glow:"#ff7a2a",big:1.3}},{id:"bwB3",name:"\uB9DD\uB839 \uD65C",tier:5,atk:1,from:"reaper",perk:"execute",style:{wood:"#1a1420",grip:"#8a5ad8",tips:"#e0c8ff",glow:"#9a4aff",big:1.38}}]},hl=[{id:"ot0",name:"\uD3C9\uC0C1\uBCF5",tier:0,hp:0,def:0,pal:null},{id:"ot1",name:"\uCCAD\uB8E1 \uBB34\uAD00\uBCF5",tier:1,hp:20,def:.05,pal:{main:"#2b4374",accent:"#c8302c",trim:"#e0b040",dark:"#1f2438"}},{id:"ot2",name:"\uC790\uC6B4 \uBE44\uB2E8\uC637",tier:2,hp:35,def:.08,pal:{main:"#6a3a8a",accent:"#e0b040",trim:"#f0e0a0",dark:"#2a1a3a"}},{id:"ot3",name:"\uBC31\uD638 \uC804\uD3EC",tier:3,hp:55,def:.12,pal:{main:"#eeeae2",accent:"#e08a2a",trim:"#2a2a2a",dark:"#4a4a52"},armor:"light"},{id:"ot4",name:"\uD751\uC6D4 \uAC11\uC8FC",tier:4,hp:80,def:.18,pal:{main:"#2a2a34",accent:"#b02a2a",trim:"#d9a83a",dark:"#18181e"},armor:"heavy"},{id:"ot5",name:"\uC0C9\uB3D9 \uC800\uACE0\uB9AC",tier:1,hp:18,def:.04,sleevePat:"saekdong",deco:["sash"],pal:{main:"#f4f0e4",accent:"#c8302c",trim:"#3a6ad8",dark:"#3a2a4a",decoA:"#c8302c",decoB:"#f4c43a"}},{id:"ot6",name:"\uBC9A\uAF43 \uD55C\uBCF5",tier:2,hp:32,def:.07,pattern:"flower",deco:["flowerPin","sash"],pal:{main:"#f8c8d8",accent:"#e86aa8",trim:"#fff4f8",dark:"#8a3a5a",patA:"#ffffff",patB:"#e8427a",decoA:"#ff7aa8",decoB:"#ffffff"}},{id:"ot7",name:"\uAD6C\uB984\uD559 \uCC3D\uC758",tier:2,hp:34,def:.08,pattern:"cloud",deco:["cape"],pal:{main:"#f4f4ee",accent:"#1a1a24",trim:"#1a1a24",dark:"#2a2a34",patA:"#9aa8c8",patB:"#1a1a24",decoA:"#22222c",decoB:"#e8e8f0"}},{id:"ot8",name:"\uCABD\uBE5B \uBB3C\uACB0 \uBB34\uC0AC\uBCF5",tier:3,hp:50,def:.11,pattern:"wave",deco:["scarf","bracers"],pal:{main:"#2a3a7a",accent:"#e0b040",trim:"#e0b040",dark:"#1a2040",patA:"#6a8ae8",patB:"#e0b040",decoA:"#eee6d6",decoB:"#e0b040"}},{id:"ot9",name:"\uD64D\uB9E4 \uAD81\uC911\uC608\uBCF5",tier:3,hp:52,def:.1,pattern:"plum",deco:["badge","crown","sash"],pal:{main:"#b0283a",accent:"#2a6a4a",trim:"#ffd040",dark:"#3a1a2a",patA:"#ffb0c0",patB:"#ffe080",decoA:"#2a7a5a",decoB:"#ffd040"}},{id:"ot10",name:"\uD751\uB9E4 \uC790\uAC1D\uBCF5",tier:3,hp:45,def:.12,pattern:"plum",deco:["scarf","bracers"],pal:{main:"#221e28",accent:"#c8302c",trim:"#c8302c",dark:"#121016",patA:"#e8405a",patB:"#ffb0c0",decoA:"#c8302c",decoB:"#4a4450"}},{id:"ot11",name:"\uC6D4\uD558 \uC120\uB140\uC637",tier:4,hp:75,def:.16,pattern:"star",deco:["ribbon","crown","flowerPin"],pal:{main:"#e8e0ff",accent:"#9a7ad8",trim:"#fff6c0",dark:"#6a5aa8",patA:"#ffffff",patB:"#ffe080",decoA:"#f4e8ff",decoB:"#ffe080",decoGlow:"#5a4aa8"}},{id:"ot12",name:"\uCCAD\uB8E1 \uACE4\uB8E1\uD3EC",tier:4,hp:85,def:.17,pattern:"dragon",deco:["badge","cape","crown"],pal:{main:"#1e6a5a",accent:"#ffd040",trim:"#ffd040",dark:"#123a34",patA:"#ffd040",patB:"#ff6a3a",decoA:"#a82030",decoB:"#ffd040"}},{id:"otB1",name:"\uB450\uC5B5\uC2DC\uB2C8 \uBFD4\uAC11\uC8FC",tier:5,hp:110,def:.2,from:"boss",perk:"rage",acc:"horns",pal:{main:"#8a2a24",accent:"#2a3a7a",trim:"#ffd040",dark:"#2a1a18"},armor:"heavy"},{id:"otB2",name:"\uAD6C\uBBF8\uD638 \uD138\uC637",tier:5,hp:95,def:.16,from:"gumiho",perk:"swift",acc:"fox",pal:{main:"#f4ece4",accent:"#ff7a2a",trim:"#ffb070",dark:"#c8a890"},armor:"light"},{id:"otB3",name:"\uC800\uC2B9\uC0AC\uC790 \uB3C4\uD3EC",tier:5,hp:120,def:.22,from:"reaper",perk:"soul",acc:"gat",pal:{main:"#18141e",accent:"#5a3a8a",trim:"#c8b0ff",dark:"#0c0a10"}}],Vr=new Map;for(let r of Object.keys(zn))for(let t of zn[r])Vr.set(t.id,{...t,kind:"weapon",cls:r});for(let r of hl)Vr.set(r.id,{...r,kind:"outfit"});function ei(r){return Vr.get(r)}function Vu(r,t=!0){if(!r)return"";let e=r.kind==="weapon"?`\uACF5\uACA9\uB825 +${Math.round(r.atk*100)}%`:`\uCCB4\uB825 +${r.hp} \xB7 \uBC1B\uB294 \uD53C\uD574 -${Math.round(r.def*100)}%`;return r.perk?t?`${e}<br><em>${By[r.perk]}</em>`:`${Gu[r.from].boss} \uCC98\uCE58 \uC2DC \uD68D\uB4DD`:e}function Wu(...r){let t=new Set;for(let e of r){let i=Vr.get(e);i&&i.perk&&t.add(i.perk)}return t}function Xu(r,t,e){if(!Gu[r])return null;let i=[...Vr.values()].filter(o=>o.from===r),n=[...i.filter(o=>o.kind==="weapon"&&o.cls===t),...i.filter(o=>o.kind==="outfit"),...i.filter(o=>o.kind==="weapon"&&o.cls!==t)];return(n.find(o=>!e.has(o.id))||n[Math.floor(Math.random()*2)]).id}function qu(r,t,e){let i={blue:.07,red:.12,wisp:.1,fox:.09,foxfire:.1,jiangshi:.11,ghost:.11,boss:1,gumiho:1,reaper:1}[r]??0;if(Math.random()>i)return null;let n=1,s={boss:.55,gumiho:.6,reaper:.7,red:.1,jiangshi:.15,ghost:.15,fox:.08,foxfire:.08}[r]||0,o=Math.random()+t*.12+s;if(o>1.35?n=4:o>1.05?n=3:o>.7&&(n=2),Math.random()<.55){let l=Math.random()<.8?e:["sword","mage","elf"][Math.floor(Math.random()*3)];return zn[l][n].id}let a=hl.filter(l=>l.tier===n&&!l.from);return a[Math.floor(Math.random()*a.length)].id}function Yu(r,t){let e=ei(t),i=r.getContext("2d");if(i.clearRect(0,0,16,16),!e)return;let n=tn[e.tier].color;i.fillStyle="#14101c",i.fillRect(0,0,16,16),i.fillStyle=n,i.globalAlpha=.25,i.fillRect(0,0,16,16),i.globalAlpha=1;let s=(a,l,c)=>{i.fillStyle=c,i.fillRect(a,l,1,1)},o=e.style||{};if(e.kind==="weapon"&&e.cls==="sword"){let a=o.blade||"#c9d4e0";for(let l=0;l<9;l++)s(4+l,11-l,a),s(5+l,11-l,o.edge||"#ffffff");s(3,12,o.guard||"#d9a83a"),s(4,13,o.guard||"#d9a83a"),s(2,11,o.guard||"#d9a83a"),s(5,12,o.guard||"#d9a83a"),s(2,13,o.wrap||"#1c1824"),s(1,14,o.wrap||"#1c1824")}else if(e.kind==="weapon"&&e.cls==="mage"){for(let a=0;a<11;a++)s(3+a*.8,14-a,o.wood||"#5a3e2a");i.fillStyle=o.moon||"#e0b040",i.fillRect(10,2,4,1),i.fillRect(13,3,1,2),i.fillStyle=o.orb||"#b8a8ff",i.fillRect(11,3,2,2)}else if(e.kind==="weapon"){let a=o.wood||"#8a5a32";for(let l=0;l<12;l++){let c=9-Math.round(Math.sin(l/11*Math.PI)*5);s(c,2+l,a)}for(let l=0;l<12;l++)s(10,2+l,"#f0ece0");s(4,7,o.grip||"#3a7a3a"),s(4,8,o.grip||"#3a7a3a")}else{let a=e.pal||{main:"#eeeae0",accent:"#2e4f8f",trim:"#2e4f8f",dark:"#3a3f5a"};if(i.fillStyle=a.main,i.fillRect(4,3,8,10),i.fillRect(2,4,2,6),i.fillRect(12,4,2,6),i.fillStyle=a.accent,i.fillRect(4,8,8,1),i.fillRect(7,3,2,5),i.fillStyle=a.trim,i.fillRect(2,9,2,1),i.fillRect(12,9,2,1),e.armor&&(i.fillStyle=a.trim,i.fillRect(3,3,3,2),i.fillRect(10,3,3,2)),e.pattern){i.fillStyle=a.patA||a.trim;for(let[l,c]of[[5,5],[9,7],[6,10],[10,11]])i.fillRect(l,c,1,1)}if(e.sleevePat){let l=["#e8423a","#f4c43a","#4aa84e","#3a6ad8","#e86aa8","#f4f0e4"];for(let c=0;c<6;c++)i.fillStyle=l[c],i.fillRect(2,4+c,2,1),i.fillRect(12,4+c,2,1)}e.deco?.includes("cape")&&(i.fillStyle=a.decoA||a.accent,i.fillRect(1,3,1,11),i.fillRect(14,3,1,11)),(e.deco?.includes("crown")||e.deco?.includes("flowerPin"))&&(i.fillStyle=e.deco.includes("crown")?"#ffd040":a.decoA||"#ff9ac0",i.fillRect(6,0,1,2),i.fillRect(8,0,1,2),i.fillRect(10,0,1,2)),e.acc==="horns"&&(i.fillStyle="#ffd040",i.fillRect(5,0,1,3),i.fillRect(10,0,1,3)),e.acc==="fox"&&(i.fillStyle="#ff7a2a",i.fillRect(12,11,3,2),i.fillRect(14,9,1,2),i.fillStyle="#f4ece4",i.fillRect(5,1,2,2),i.fillRect(9,1,2,2)),e.acc==="gat"&&(i.fillStyle="#0c0a10",i.fillRect(3,2,10,1),i.fillRect(6,0,4,2),i.fillStyle="#c8b0ff",i.fillRect(4,3,1,3),i.fillRect(11,3,1,3))}e.perk&&(s(1,1,"#ffffff"),s(2,1,n),s(1,2,n),s(14,14,"#ffffff")),i.strokeStyle=n,i.strokeRect(.5,.5,15,15)}var nt=r=>new ct(r),oh=new A(0,.17,0),ky=new A(0,.8,0),zy=new A(0,0,0),Oy=new we,Wr=r=>1-Math.pow(1-r,3),On=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function Z(r,t,e=0,i=0,n=0){let s=new at(r,t);return s.position.set(e,i,n),s.castShadow=!0,s.receiveShadow=!0,s}var zi=class{constructor(t){this.cfg=t,this.mats=[];let e=d=>{let f=Pt(d);return f.userData.baseEmissive=(d.emissive||nt("#000")).clone?.()||nt("#000"),this.mats.push(f),f};this.mat=e;let i=t.scale||1;this.root=new Nt,this.body=new Nt,this.body.scale.setScalar(i),this.root.add(this.body);let n=(d,f=.4,p=t.pattern)=>{if(!p)return e({color:nt(d)});let x=Cu(p,d,t.patA||"#ffffff",t.patB||"#ffd040").clone();return x.needsUpdate=!0,x.repeat.set(1,p==="saekdong"?Math.max(.25,f*.7):Math.max(.2,f*.45)),e({map:x})};this.cloth=n;let s=e({color:nt(t.skin)}),o=t.legLen??.36;this.legLen=o;let a=e({color:nt(t.pants)}),l=e({color:nt(t.shoes||"#26211f")});this.legs=[];for(let d of t.noLegs?[]:[-1,1]){let f=new Nt;f.position.set(d*.1*(t.wide||1),o,0),f.add(Z(new un(.075*(t.limb||1),o-.15,3,6),a,0,-o/2+.02,0)),f.add(Z(new dt(.14,.08,.2),l,0,-o+.04,.03)),this.body.add(f),this.legs.push(f)}if(this.hips=new Nt,this.hips.position.y=o,this.body.add(this.hips),this.chest=new Nt,this.chest.position.y=t.torsoH??.4,this.hips.add(this.chest),t.type==="ghost"){let d=e({color:nt(t.robe),transparent:!0,opacity:.88});this.hips.add(Z(new Ht(.16,.24,.46,10),d,0,.2,0)),this.hips.add(Z(new Ht(.24,.42,.9,12),d,0,-.45,0))}else if(t.type==="mage"||t.type==="jiangshi"||t.type==="reaper"){let d=n(t.robe,.46),f=n(t.robe,.4),p=e({color:nt(t.belt)});this.hips.add(Z(new Ht(.17,.25,.46,10),d,0,.2,0)),this.hips.add(Z(new Ht(.25,.36,.4,12),f,0,-.14,0)),this.hips.add(Z(new Ht(.362,.37,.04,12),p,0,-.33,0)),this.hips.add(Z(new Ht(.228,.235,.06,10),p,0,.1,0));let x=e({color:nt("#f0ead8")});for(let g of[-1,1]){let m=Z(new dt(.06,.3,.04),x,g*.05,.28,.19);m.rotation.z=g*.5,this.hips.add(m)}t.type==="mage"&&this.hips.add(Z(new dt(.1,.13,.06),e({color:nt("#c8302c")}),-.2,0,.12)),t.type==="jiangshi"&&this.hips.add(Z(new dt(.2,.18,.04),e({color:nt("#e0b040")}),0,.26,.2))}else if(t.type==="elf"){let d=n(t.robe,.42),f=n(t.skirt,.2),p=e({color:nt(t.belt)});this.hips.add(Z(new Ht(.15,.21,.42,10),d,0,.2,0)),this.hips.add(Z(new Ht(.21,.3,.2,10),f,0,-.04,0)),this.hips.add(Z(new Ht(.212,.215,.05,10),p,0,.08,0));let x=e({color:nt("#bfe07a")});for(let _ of[-1,1]){let S=Z(new dt(.12,.05,.08),x,_*.09,.4,.12);S.rotation.z=_*.4,this.hips.add(S)}let g=new Nt;g.position.set(-.1,.25,-.2),g.rotation.set(-.25,0,.45),g.add(Z(new Ht(.07,.06,.42,8),p,0,0,0));let m=e({color:nt("#f4f0e4")});for(let _=0;_<4;_++)g.add(Z(new dt(.03,.12,.05),m,(_-1.5)*.03,.27,_%2*.03));this.hips.add(g)}else if(t.type==="hero"||t.type==="guard"){let d=n(t.robe,.44),f=n(t.robe,.24),p=e({color:nt(t.belt)});this.hips.add(Z(new Ht(.17,.235,.44,10),d,0,.2,0)),this.hips.add(Z(new Ht(.24,.31,.24,10),f,0,-.04,0)),this.hips.add(Z(new Ht(.215,.225,.07,10),p,0,.1,0));let x=e({color:nt(t.collar||"#2a2a36")}),g=Z(new dt(.05,.26,.04),x,.05,.3,.19);g.rotation.z=.5,this.hips.add(g);let m=Z(new dt(.05,.26,.04),x,-.05,.3,.19);m.rotation.z=-.5,this.hips.add(m);let _=Z(new dt(.04,.16,.02),p,.06,.04,.24);_.rotation.z=.2,this.hips.add(_),this.tie=_}else if(t.type==="lady"){let d=e({color:nt(t.robe)}),f=e({color:nt(t.skirt)});this.hips.add(Z(new Ht(.15,.2,.22,10),d,0,.3,0)),this.hips.add(Z(new Ht(.17,.42,.62,12),f,0,-.06,0));let p=e({color:nt("#c23a4a")});this.hips.add(Z(new dt(.06,.2,.03),p,.04,.18,.18))}else if(t.type==="dokkaebi"){this.hips.add(Z(new jt(.27,10,8),s,0,.25,.02));let d=e({map:wu()});this.hips.add(Z(new Ht(.25,.29,.2,10),d,0,0,0));let f=e({color:nt("#2b2220")});this.hips.add(Z(new Ht(.262,.262,.05,10),f,0,.1,0))}this.head=new Nt,this.head.position.y=t.neck??.27,this.chest.add(this.head);let c=t.headR??.27,h=Z(new jt(c,14,10),s);h.scale.set(1,.93,.95),this.head.add(h),this.buildFace(c,t),this.buildHair(c,t),this.arms=[];let u=t.sleevePat?n(t.sleeve||t.robe,.5,t.sleevePat):t.pattern&&t.sleeve===t.robe?n(t.robe,.3):e({color:nt(t.sleeve||t.robe||t.skin)});for(let d of[-1,1]){let f=new Nt;f.position.set(d*(t.shoulder??.21),-.03,0);let p=Z(new un(.068*(t.limb||1),.2,3,6),u,0,-.14,0);f.add(p),t.cuff&&f.add(Z(new Ht(.08,.085,.05,8),e({color:nt(t.cuff)}),0,-.26,0));let x=new Nt;x.position.y=-.31,x.add(Z(new jt(.065*(t.limb||1),6,5),s)),f.add(x),f.userData.hand=x,this.chest.add(f),this.arms.push(f)}if(this.armR=this.arms[0],this.armL=this.arms[1],this.handR=this.armR.userData.hand,this.handL=this.armL.userData.hand,t.armor&&this.buildArmor(t),t.acc&&this.buildAccessory(t.acc,c,t),this.flutter=[],t.deco)for(let d of t.deco)this.buildDeco(d,c,t);t.weapon&&this.buildWeapon(t.weapon),this.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),this.phase=0,this.idleT=Math.random()*10,this.flash=0,this.lean=0,this.deadT=0}buildFace(t,e){let i=this.mat({color:nt(e.eye||"#1b1416")}),n=t*.93;if(e.type==="dokkaebi"){let s=Pt({color:nt("#f4e86a"),emissive:nt("#7a6410")});for(let h of[-1,1]){let u=Z(new jt(.075,6,5),s,h*.11,.03,n-.04);u.scale.z=.5,this.head.add(u),this.head.add(Z(new dt(.045,.06,.02),i,h*.11,.03,n+0));let d=Z(new dt(.12,.035,.03),this.mat({color:nt(e.hair)}),h*.11,.13,n-.02);d.rotation.z=h*.35,this.head.add(d)}let o=Z(new dt(.26,.07,.04),this.mat({color:nt("#5a1820")}),0,-.11,n-.05);this.head.add(o);let a=this.mat({color:nt("#fbf6e8")});for(let h of[-1,1])this.head.add(Z(new ne(.025,.07,4),a,h*.08,-.06,n-.03));let l=this.mat({color:nt(e.horn||"#efe2b0")}),c=e.horns??1;for(let h=0;h<c;h++){let u=c===1?0:h?.13:-.13,d=Z(new ne(.06,.24,6),l,u,t+.06,.02);d.rotation.z=-u*1.5,this.head.add(d)}this.head.add(Z(new jt(.05,5,4),this.mat({color:new ct(e.skin).multiplyScalar(.8)}),0,-.02,n))}else{for(let o of[-1,1])this.head.add(Z(new dt(.05,.085,.03),i,o*.095,-.02,n-.01)),this.head.add(Z(new dt(.02,.025,.01),this.mat({color:nt("#ffffff")}),o*.095+.01,.005,n+.008));let s=this.mat({color:nt("#f0a0a0")});for(let o of[-1,1])this.head.add(Z(new dt(.06,.025,.02),s,o*.16,-.085,n-.06))}}buildHair(t,e){let i=this.mat({color:nt(e.hair||"#231c1e")});if(e.type==="dokkaebi"){for(let s=0;s<9;s++){let o=s/9*Math.PI*2,a=Z(new ne(.07,.22,4),i),l=new A(Math.cos(o)*.8,.55,Math.sin(o)*.8-.25).normalize();a.position.copy(l).multiplyScalar(t*.95),a.quaternion.setFromUnitVectors(new A(0,1,0),l),this.head.add(a)}return}let n=Z(new jt(t*1.06,14,8,0,Math.PI*2,0,Math.PI*.5),i);n.rotation.x=-.35,n.position.set(0,.02,-.02),this.head.add(n);for(let s=-2;s<=2;s++){let o=Z(new dt(.09,.12,.06),i,s*.07,t*.62,t*.68);o.rotation.x=.5,o.rotation.z=s*.15,this.head.add(o)}if(e.type==="hero"){this.head.add(Z(new jt(.09,8,6),i,0,t+.04,-.06));let s=Z(new oi(t*.98,.025,4,16),this.mat({color:nt("#c8302c")}),0,.09,0);s.rotation.x=Math.PI/2-.3,this.head.add(s);let o=new Nt;o.position.set(0,.06,-t*.95);let a=Z(new dt(.07,.36,.02),this.mat({color:nt("#c8302c")}),0,-.18,0);o.add(a),this.head.add(o),this.tail=o}else if(e.type==="mage"){let s=this.mat({color:nt("#16141c")}),o=t*.66;this.head.add(Z(new Ht(.4,.4,.022,18),s,0,o,0)),this.head.add(Z(new Ht(.13,.15,.26,12),s,0,o+.13,0)),this.head.add(Z(new Ht(.152,.152,.03,12),this.mat({color:nt("#6a5ad8")}),0,o+.03,0));let a=this.mat({color:nt("#e0a84a")});for(let l of[-1,1])for(let c=0;c<4;c++)this.head.add(Z(new jt(.022,4,3),a,l*(.22-c*.015),o-.06-c*.07,.06))}else if(e.type==="elf"){this.head.add(Z(new dt(.46,.55,.14),i,0,-.2,-.2));for(let a of[-1,1]){this.head.add(Z(new dt(.08,.38,.1),i,a*.25,-.12,.06));let l=Z(new ne(.045,.2,4),this.mat({color:nt(e.skin)}),a*.3,.04,-.02);l.rotation.z=-a*1.15,this.head.add(l)}let s=this.mat({color:nt("#ff9ac0")});this.head.add(Z(new Ae(.06,0),s,.2,.18,.1)),this.head.add(Z(new Ae(.035,0),this.mat({color:nt("#fff0a0")}),.22,.2,.14));let o=new Nt;o.position.set(0,-.3,-.24),o.add(Z(new dt(.3,.32,.06),i,0,-.16,0)),this.head.add(o),this.tail=o}else if(e.type==="jiangshi"){let s=this.mat({color:nt("#1a1a20")});this.head.add(Z(new Ht(.3,.32,.16,12),s,0,t*.7,0)),this.head.add(Z(new Ht(.34,.34,.03,12),this.mat({color:nt("#6a1a1a")}),0,t*.62,0)),this.head.add(Z(new jt(.06,6,4),this.mat({color:nt("#c8302c")}),0,t*.7+.12,0));let o=new at(new ve(.14,.34),new Kt({color:"#f2d36b",side:de}));o.position.set(0,0,t*.98),o.rotation.x=-.15;let a=new at(new ve(.04,.26),new Kt({color:"#c8302c",side:de}));a.position.z=.003,o.add(a),this.head.add(o),this.talisman=o}else if(e.type==="ghost"){let s=this.mat({color:nt(e.hair),transparent:!0,opacity:.92});this.head.add(Z(new dt(.5,.95,.16),s,0,-.32,-.18));for(let o of[-1,1])this.head.add(Z(new dt(.15,.85,.08),s,o*.15,-.25,t*.92));this.head.add(Z(new dt(.5,.1,.5),s,0,t*.85,0))}else if(e.type==="reaper"){let s=this.mat({color:nt("#0e0c12")}),o=t*.66;this.head.add(Z(new Ht(.55,.55,.025,18),s,0,o,0)),this.head.add(Z(new Ht(.15,.17,.32,12),s,0,o+.16,0)),this.head.add(Z(new dt(.1,.035,.03),this.mat({color:nt("#a01a2a")}),0,-.12,t*.92));for(let a of[-1,1])for(let l=0;l<5;l++)this.head.add(Z(new jt(.022,4,3),this.mat({color:nt("#2a2a30")}),a*(.24-l*.015),o-.06-l*.07,.06))}else if(e.type==="guard"){let s=this.mat({color:nt("#1d1b22")});this.head.add(Z(new Ht(.44,.44,.03,16),s,0,t*.62,0)),this.head.add(Z(new jt(.2,10,6,0,Math.PI*2,0,Math.PI/2),s,0,t*.62,0)),this.head.add(Z(new jt(.05,5,4),this.mat({color:nt("#d0a030")}),0,t*.62+.22,0)),this.head.add(Z(new ne(.05,.15,5),this.mat({color:nt("#c8302c")}),0,t*.62+.3,0))}else e.type==="lady"&&(this.head.add(Z(new jt(.13,8,6),i,0,-.05,-t*.95)),this.head.add(Z(new dt(.3,.025,.025),this.mat({color:nt("#e0b040")}),0,-.04,-t*1.1)))}buildArmor(t){let e=t.armor==="heavy",i=this.mat({color:nt(t.trim||"#d9a83a")}),n=this.mat({color:nt(t.pants||"#2a2a34")});for(let s of[-1,1]){let o=Z(new dt(e?.2:.16,.08,e?.24:.2),i,s*(e?.25:.23),0,0);if(o.rotation.z=s*-.35,this.chest.add(o),e){let a=Z(new dt(.17,.06,.22),n,s*.28,-.07,0);a.rotation.z=s*-.5,this.chest.add(a)}}this.hips.add(Z(new dt(.26,e?.26:.18,.06),i,0,.24,.17)),e&&(this.hips.add(Z(new dt(.42,.14,.06),n,0,-.06,.24)),this.head.add(Z(new dt(.06,.12,.03),i,0,.2,.28)))}buildDeco(t,e,i){let n=this.mat({color:nt(i.decoA||i.trim||"#c8302c")}),s=this.mat({color:nt(i.decoB||i.belt||"#e0b040")}),o=i.type==="elf"?.175:i.type==="mage"?.205:.2,a=(l,c,h,u,d,f,p,x,g,m,_=0)=>{let S=new Nt;return S.position.set(c,h,u),S.rotation.z=_,S.add(Z(new dt(d,f,.02),p,0,-f/2,0)),l.add(S),this.flutter.push({g:S,base:x,amp:g,run:m,ph:Math.random()*6}),S};if(t==="cape"){let l=a(this.chest,0,0,-.17,.44,.62,n,.12,.06,.6);l.add(Z(new dt(.46,.04,.024),s,0,-.6,0)),l.add(Z(new dt(.46,.05,.05),s,0,0,.01));for(let c of[-1,1])this.chest.add(Z(new jt(.035,5,4),s,c*.13,-.02,.15))}else if(t==="scarf"){let l=Z(new oi(.13,.045,5,12),n,0,.01,0);l.rotation.x=Math.PI/2,this.chest.add(l),a(this.chest,.07,0,-.13,.08,.42,n,.35,.12,1,.15),a(this.chest,.12,-.01,-.11,.07,.3,n,.3,.14,.9,.3)}else if(t==="sash")this.hips.add(Z(new oi(.06,.025,4,8),n,.06,.12,-.22)),a(this.hips,.04,.1,-.22,.06,.46,n,.2,.1,.8,.1),a(this.hips,.1,.1,-.21,.06,.38,s,.18,.12,.8,.25);else if(t==="ribbon"){let l=this.mat({color:nt(i.decoA||"#e8d0ff"),emissive:nt(i.decoGlow||"#3a2a6a")}),c=Z(new oi(.4,.024,4,20,Math.PI),l,0,-.02,-.2);c.rotation.x=-.35,this.chest.add(c),this.ribbonArc=c,a(this.chest,.4,-.02,-.2,.05,.55,l,.25,.15,.9),a(this.chest,-.4,-.02,-.2,.05,.55,l,.25,.15,.9)}else if(t==="badge")this.hips.add(Z(new dt(.17,.16,.02),s,0,.27,o)),this.hips.add(Z(new dt(.1,.09,.02),n,0,.27,o+.008)),this.hips.add(Z(new dt(.04,.04,.02),s,0,.27,o+.014));else if(t==="bracers")for(let l of this.arms)l.add(Z(new Ht(.084,.09,.11,8),s,0,-.2,0)),l.add(Z(new Ht(.092,.092,.02,8),n,0,-.17,0));else if(t==="crown"){if(i.type==="mage")return;let l=this.mat({color:nt("#ffd040"),emissive:nt("#3a2600")}),c=e*.88;for(let u=0;u<7;u++){let d=u/7*Math.PI*2,f=Z(new ne(.03,u%2?.07:.11,4),l,Math.cos(d)*.13,c+.04,Math.sin(d)*.13);this.head.add(f)}let h=Z(new oi(.13,.022,4,14),l,0,c,0);h.rotation.x=Math.PI/2,this.head.add(h),this.head.add(Z(new Ae(.035,0),this.mat({color:nt(i.decoA||"#ff4a6a"),emissive:nt("#4a0a1a")}),0,c+.03,.13))}else if(t==="flowerPin"){let l=this.mat({color:nt(i.decoA||"#ff9ac0")}),c=this.mat({color:nt("#fff0a0")});for(let[h,u,d,f]of[[-.22,.12,.02,.06],[-.2,.2,-.08,.045],[-.26,.04,-.06,.04]])this.head.add(Z(new Ae(f,0),l,h,u,d)),this.head.add(Z(new Ae(f*.45,0),c,h-.02,u+.01,d+f*.6));a(this.head,-.24,.02,0,.015,.16,s,0,.2,.3)}}buildAccessory(t,e,i){if(t==="horns"){let n=this.mat({color:nt("#ffd040"),emissive:nt("#3a2000")}),s=this.mat({color:nt("#c8302c")});for(let o of[-1,1]){let a=new Nt;a.position.set(o*.16,e*.85,.05),a.rotation.z=-o*.4,a.add(Z(new ne(.07,.26,5),n,0,.11,0)),a.add(Z(new ne(.035,.1,5),s,0,.27,0)),this.head.add(a)}this.head.add(Z(new Ae(.035,0),this.mat({color:nt("#9ad8ff"),emissive:nt("#1a6aaa")}),0,e*.45,e*.92))}else if(t==="fox"){let n=this.mat({color:nt("#f4ece4")}),s=this.mat({color:nt("#ff9a6a")});for(let a of[-1,1]){let l=new Nt;l.position.set(a*.17,e*.95,0),l.rotation.z=-a*.3,l.add(Z(new ne(.095,.26,4),n,0,.11,0)),l.add(Z(new ne(.05,.16,4),s,0,.08,.04)),this.head.add(l)}this.foxTails=[];let o=this.mat({color:nt("#ff7a2a"),emissive:nt("#4a1400")});for(let a=-1;a<=1;a++){let l=new Nt;l.position.set(a*.08,.1,-.2),l.rotation.set(1,a*.5,0);let c=Z(new un(.085,.36,3,6),n,0,-.24,0);l.add(c),l.add(Z(new jt(.09,6,5),o,0,-.48,0)),this.hips.add(l),this.foxTails.push(l)}}else if(t==="gat"){let n=this.mat({color:nt("#0c0a10")}),s=this.mat({color:nt("#8a5ad8"),emissive:nt("#2a0a4a")}),o=e*.66;i.type!=="mage"&&(this.head.add(Z(new Ht(.44,.44,.022,18),n,0,o,0)),this.head.add(Z(new Ht(.13,.15,.3,12),n,0,o+.15,0))),this.head.add(Z(new Ht(.156,.156,.04,12),s,0,o+.04,0));let a=this.mat({color:nt("#e0c8ff"),emissive:nt("#4a2a8a")});for(let l of[-1,1])for(let c=0;c<6;c++)this.head.add(Z(new jt(.024,4,3),a,l*(.24-c*.012),o-.05-c*.065,.07))}}buildWeapon(t){let e=this.handR,i=new Nt,n=(s,o,a)=>(s.rotation[o]=a,s);if(t==="sword"){let s=this.cfg.wstyle||{},o=this.mat({color:nt(s.blade||"#c9d4e0"),emissive:nt("#000000")}),a=this.mat({color:nt(s.edge||"#ffffff"),emissive:nt("#000000")}),l=this.mat({color:nt(s.wrap||"#1c1824")}),c=this.mat({color:nt("#d8d0e8")}),h=this.mat({color:nt(s.guard||"#d9a83a")});this.glowColor=s.glow?nt(s.glow):null;let u=this.mat({color:nt("#141218")});for(let S=0;S<6;S++)i.add(Z(new Ht(.023,.023,.045,6),S%2?c:l,0,.12-S*.045,0));i.add(Z(new Ht(.026,.026,.03,6),h,0,.16,0));let d=Z(new Ht(.075,.075,.022,10),u,0,-.13,0);i.add(d),i.add(n(Z(new oi(.072,.008,4,12),h,0,-.13,0),"x",Math.PI/2)),i.add(Z(new dt(.03,.05,.045),h,0,-.165,0));let f=7,p=1.08*(s.long||1),x=-.19,g=0,m=0;for(let S=0;S<f;S++){let v=p/f,b=1-S/f*.35,w=new Nt;w.position.set(0,x,g),w.rotation.x=m;let C=Z(new dt(.03,v+.012,.068*b),o,0,-v/2,-.004),y=Z(new dt(.034,v+.012,.02),a,0,-v/2,.032*b);w.add(C,y),i.add(w),x-=Math.cos(m)*v,g-=Math.sin(m)*v,m-=.035}let _=Z(new ne(.036,.14,4),a,0,x-.06,g-.002);if(_.rotation.x=Math.PI+m,_.scale.set(.55,1,1),i.add(_),this.bladeMat=o,this.edgeMat=a,this.cfg.type==="hero"){let S=new Nt;S.position.set(.21,.1,.12),S.rotation.set(1.22,0,.18);let v=this.mat({color:nt("#1a1420")}),b=1.2*(s.long||1);S.add(Z(new dt(.046,b,.088),v,0,-b/2,.004)),S.add(Z(new dt(.052,.045,.094),h,0,-b+.02,.004)),S.add(Z(new dt(.052,.05,.096),this.mat({color:nt("#c8302c")}),0,-.12,.004)),S.add(Z(new dt(.052,.03,.096),h,0,-.015,.004)),this.hips.add(S),this.saya=S}}else if(t==="club"){let s=this.mat({color:nt("#7a4a2a")}),o=this.mat({color:nt("#c8c0b0")}),a=Z(new Ht(.11,.045,.75,7),s,0,-.32,0);a.rotation.x=Math.PI,i.add(a);for(let l=0;l<6;l++){let c=l/6*Math.PI*2;i.add(n(Z(new ne(.03,.07,4),o,Math.cos(c)*.1,-.55+l%2*.1,Math.sin(c)*.1),"z",-Math.cos(c)*1.5))}}else if(t==="goldclub"){let s=this.mat({color:nt("#e0b040"),emissive:nt("#000")}),o=Z(new Ht(.14,.05,.85,8),s,0,-.36,0);o.rotation.x=Math.PI,i.add(o);for(let a=0;a<8;a++){let l=a/8*Math.PI*2;i.add(n(Z(new ne(.035,.09,4),s,Math.cos(l)*.13,-.62+a%2*.12,Math.sin(l)*.13),"z",-Math.cos(l)*1.5))}}else if(t==="staff"){let s=this.cfg.wstyle||{},o=s.big||1,a=this.mat({color:nt(s.wood||"#5a3e2a")}),l=this.mat({color:nt(s.moon||"#e0b040")});if(i.add(Z(new Ht(.028,.034,1.55,6),a,0,.35,0)),i.add(n(Z(new oi(.14*o,.022*o,4,12,Math.PI*1.4),l,0,1.2,0),"z",-Math.PI*.2)),o>1.2)for(let d of[-1,1])i.add(n(Z(new ne(.03,.18,4),l,d*.14,1.05,0),"z",d*.6));let c=this.mat({color:nt(s.orb||"#b8a8ff"),emissive:nt("#000000")});this.orbMat=c,this.glowColor=nt(s.orbGlow||"#6a4aff"),i.add(Z(new Ae(.075*o,1),c,0,1.2,0));let h=new Kt({color:new ct("#f2d36b"),side:de}),u=new at(new ve(.08,.2),h);u.position.set(.05,1,0),i.add(u)}else if(t==="bow"){let s=this.cfg.wstyle||{},o=s.big||1,a=this.mat({color:nt(s.wood||"#8a5a32"),emissive:nt("#000000")});this.glowColor=s.glow?nt(s.glow):null,this.bowMat=a;let l=new jn(new A(0,.1,.5*o),new A(0,-.22*o,0),new A(0,.1,-.5*o));if(i.add(Z(new br(l,10,.024,4),a)),i.add(Z(new dt(.05,.05,.12),this.mat({color:nt(s.grip||"#3a7a3a")}),0,-.1,0)),s.tips)for(let u of[-1,1])i.add(Z(new dt(.05,.05,.1),this.mat({color:nt(s.tips)}),0,.1,u*.5*o));let c=new Kt({color:new ct("#f0ece0")});this.bowEnds=[new A(0,.1,.5*o),new A(0,.1,-.5*o)],this.bowStrings=[0,1].map(()=>{let u=new at(new dt(.012,1,.012),c);return i.add(u),u});let h=new Nt;h.add(Z(new dt(.02,.72,.02),this.mat({color:nt("#9a7a52")}),0,-.36,0)),h.add(n(Z(new ne(.03,.09,4),this.mat({color:nt("#d8dde4")}),0,-.76,0),"x",Math.PI)),this.nockArrow=h,i.add(h),this.setBowDraw(0),i.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.handL.add(i),this.weapon=i;return}else if(t==="spear"){let s=this.mat({color:nt("#6a4a32")}),o=this.mat({color:nt("#cfd6de")}),a=Z(new Ht(.025,.025,2,5),s,0,.2,0);i.add(a),i.add(Z(new ne(.05,.25,4),o,0,1.3,0)),i.add(n(Z(new ne(.06,.1,6),this.mat({color:nt("#c8302c")}),0,1.13,0),"x",Math.PI))}i.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(i),this.weapon=i,this.saya&&(this.saya.add(i),i.position.copy(oh),i.quaternion.identity(),this.sheathed=!0,this.wStage="in")}setBowDraw(t){if(!this.bowStrings)return;let e=new A(0,.1+.42*t,0);this.bowStrings.forEach((i,n)=>{let s=this.bowEnds[n],o=new A().subVectors(e,s),a=o.length();i.position.copy(s).addScaledVector(o,.5),i.scale.set(1,a,1),i.quaternion.setFromUnitVectors(new A(0,1,0),o.normalize())}),this.nockArrow.position.copy(e),this.nockArrow.visible=t>.15}unsheathe(){!this.saya||!this.sheathed||(this.handR.attach(this.weapon),this.sheathed=!1,this.wStage="hand")}sheathe(){!this.saya||this.sheathed||(this.saya.attach(this.weapon),this.sheathed=!0,this.wStage="align",this.wStageT=0)}updateWeapon(t){if(!this.saya)return;let e=this.weapon,i,n;this.wStage==="hand"?(i=zy,n=26):this.wStage==="align"?(i=ky,n=22,this.wStageT+=t,this.wStageT>.16&&(this.wStage="slide",this.wStageT=0)):this.wStage==="slide"?(i=oh,n=16,this.wStageT+=t,this.wStageT>.22&&(this.wStage="in",this.justSheathed=!0)):(i=oh,n=30);let s=1-Math.exp(-n*t);e.position.lerp(i,s),e.quaternion.slerp(Oy,s)}setFlash(t){if(t!==this._lastFlash){this._lastFlash=t;for(let e of this.mats)t>0?e.emissive.setRGB(t,t*.95,t*.9):e.emissive.set(0,0,0)}}animate(t,e){let i=e.speed||0,n=fe(i/4,0,1);this.idleT+=t,n>.05&&(this.phase+=t*(6+i*1.6));let s=this.phase,o=Math.sin(s)*n,a=o*.9,l=-o*.9,c=-o*.7-.25,h=.12,u=0,d=o*.7,f=-.12,p=0,x=.08*n,g=Math.abs(Math.cos(s))*.06*n,m=Math.sin(this.idleT*2.4)*.012*(1-n);this.chest.position.y=(this.cfg.torsoH??.4)+m;let _=0,S=0,v=0;this.cfg.weapon==="spear"&&(c=-.35,h=.25,v=-1.2);let b=this.cfg.weapon==="sword";b&&!this.sheathed&&(c=-o*.18-.2,v=-1.2),b&&this.saya&&(d=-.5+o*.12,f=.18);let w=this.cfg.weapon==="staff",C=.22;w&&(c=-.3-o*.15,h=.18);let y=this.cfg.weapon==="bow",T=0;if(y&&(d=-.3+o*.3,f=-.08),e.attack&&e.attack.kind>=20){let L=e.attack.t,B=e.attack.kind,D=Wr(fe(L/.45,0,1)),U=L>.45?Wr(fe((L-.45)/.2,0,1)):0,H=1-On(fe((L-.7)/.3,0,1)),X=Math.min(1,D*1.6)*H;T=D*(1-U),d=Et(d,B===23?-2.45:-1.55,X),f=Et(f,.06,X),B===23&&(x=-.3*X),c=Et(c,(B===23?-2.2:-1.42)+.35*U,X),h=Et(h,-.62+.5*U,X),p=(B===21?Et(-.7,.5,U):-.4)*H,a=.3*H,l=-.2*H}else if(e.attack&&e.attack.kind>=10){let L=e.attack.t,B=e.attack.kind;if(B===11){let D=On(fe(L/.45,0,1)),U=Wr(fe((L-.45)/.15,0,1)),H=1-On(fe((L-.7)/.3,0,1));c=Et(-.3,Et(-2.7,-1.25,U),Math.max(D,U)*H),C=Et(.22,Et(.35,1.75,U),Math.max(D,U)*H),d=Et(d,Et(-2.2,-1.1,U),D*H),x=Et(-.2*D,.35,U)*H,g-=.05*U*H,a=.35*U*H,l=-.3*U*H}else{let D=On(fe(L/.35,0,1)),U=Wr(fe((L-.35)/.2,0,1)),H=1-On(fe((L-.65)/.35,0,1));d=Et(d,Et(.6,-1.75,U),H*Math.max(D,U)),f=Et(f,-.1,H),p=Et(-.45*D,.3,U)*H,B===12&&(c=Et(c,-1.3,U*H),C=Et(.22,1.3,U*H)),a=.25*U*H,l=-.2*U*H}}else if(e.attack){v=0;let L=e.attack.t,B=e.attack.kind,D=B===3?.3:.26,U=B===3?.56:.5,H=On(fe(L/D,0,1)),X=Wr(fe((L-D)/(U-D),0,1)),Y=On(fe((L-U-.08)/(1-U-.08),0,1)),O=1-Y;if(B===0||B===1){let K=B===0?1:-1,tt=-1.2*K,bt=1.5*K;p=Et(Et(0,tt,H),bt,X)*O,c=Et(c,Et(-1.4,-1.58,X),O*Math.max(H,X)),h=Et(.12,B===0?.45:.15,H)*O,d=Et(d,.35,O),a=.35*O,l=-.25*O,g-=.04*X*O}else B===3?(p=Et(Et(0,.95,H),-1.55,X)*O,c=Et(Et(c,-.75,H),-1.58,X),c=Et(-.2,c,O),h=Et(Et(.12,-.95,H),.4,X)*O,d=Et(Et(d,-.6,H),.55,X),d=Et(-.5,d,O),a=Et(.2*H,.55,X)*O,l=Et(-.1*H,-.35,X)*O,g-=(.06*H+.05*X)*O,x=Et(.15*H,.2,X)*O):(c=Et(Et(c,-2.9,H),-.45,X),c=Et(c,-.25,Y),u=0,x=Et(Et(0,-.25,H),.38,X)*O,d=c*.9,f=-.05,g-=.06*X*O,a=.4*X*O,l=-.4*X*O)}else if(e.sheathing>0){let L=e.sheathing,B=Math.sin(Math.min(1,L*1.3)*Math.PI*.5)*(1-On(fe((L-.75)/.25,0,1)));c=Et(c,-1.15,B),h=Et(h,-.7,B),v=Et(-1.2,0,Math.min(1,L*3)),p=.35*B,d=Et(d,-.7,B)}e.dash&&(x=.45,a=.9,l=-.7,c=b&&!this.sheathed?1.3:.9,d=b?-.5:.9,v=0,g=.02),w&&(v=C-c),this.cfg.type==="jiangshi"&&!e.dead&&(c=e.attack?c-1:-1.55,d=e.attack?d-1:-1.55,h=.05,f=-.05,a=0,l=0,g=(e.hop||0)*.45,x=-.05),this.cfg.type==="ghost"&&!e.dead&&(g=.35+Math.sin(this.idleT*2.2)*.1,e.attack||(c=-.5,d=-.5),x=.15),e.hurt>0&&(x=-.35*e.hurt,_=-.2*e.hurt),e.cast&&(d=-1.5,f=-.2);let P=1-Math.exp(-(e.attack?34:16)*t),N=(L,B,D)=>L[B]+=(D-L[B])*P;if(this.legs.length&&(N(this.legs[0].rotation,"x",l),N(this.legs[1].rotation,"x",a)),N(this.armR.rotation,"x",c),N(this.armR.rotation,"z",-h),N(this.armR.rotation,"y",u),N(this.armL.rotation,"x",d),N(this.armL.rotation,"z",-f),N(this.chest.rotation,"y",p),N(this.hips.rotation,"x",x),N(this.head.rotation,"x",_),this.handR&&N(this.handR.rotation,"x",v),this.body.position.y=g,this.updateWeapon(t),y&&(this.bowCur=(this.bowCur||0)+(T-(this.bowCur||0))*(1-Math.exp(-(T<(this.bowCur||0)?60:20)*t)),this.setBowDraw(this.bowCur)),this.orbMat){let L=.45+Math.sin(this.idleT*4)*.15+(e.attack?.5:0);this.orbMat.emissive.copy(this.glowColor).multiplyScalar(L)}this.body.rotation.z=S,this.tail&&(this.tail.rotation.x=.25+n*.6+Math.sin(this.idleT*7)*.08*n);for(let L of this.flutter)L.g.rotation.x=L.base+n*L.run+Math.sin(this.idleT*(2.4+n*4)+L.ph)*L.amp*(.6+n);if(this.ribbonArc&&(this.ribbonArc.position.y=-.02+Math.sin(this.idleT*1.8)*.025),this.foxTails&&this.foxTails.forEach((L,B)=>{L.rotation.x=1+n*.5+Math.sin(this.idleT*3+B)*.12,L.rotation.y=(B-1)*.5+Math.sin(this.idleT*2.2+B*1.7)*.25}),e.dead){this.deadT+=t;let L=ji(fe(this.deadT/.45,0,1));this.body.rotation.x=-L*Math.PI/2,this.body.position.y=L*.15}else this.deadT=0,this.body.rotation.x=0}};function Zu(r={}){return new zi({type:"hero",scale:1.15,skin:"#f6d6b6",robe:"#eeeae0",sleeve:"#eeeae0",cuff:"#2e4f8f",belt:"#2e4f8f",collar:"#2e4f8f",pants:"#3a3f5a",hair:"#2a2024",weapon:"sword",...r})}function dl(r,t){if(!t||!t.pal)return{};let e=$u(r,t.pal,t.armor,t.acc);return t.pattern&&(e.pattern=t.pattern,e.patA=t.pal.patA||t.pal.trim,e.patB=t.pal.patB||t.pal.accent),t.sleevePat&&(e.sleevePat=t.sleevePat),t.deco&&(e.deco=t.deco,e.decoA=t.pal.decoA||t.pal.accent,e.decoB=t.pal.decoB||t.pal.trim,e.decoGlow=t.pal.decoGlow),t.pal.hair&&(e.hair=t.pal.hair),e}function $u(r,t,e,i){return t?i?{...$u(r,t,e),acc:i}:r==="hero"?{robe:t.main,sleeve:t.main,cuff:t.accent,belt:t.accent,collar:t.accent,pants:t.dark,armor:e,trim:t.trim}:r==="mage"?{robe:t.main,sleeve:t.main,cuff:t.trim,belt:t.trim,pants:t.dark,armor:e,trim:t.trim}:{robe:t.main,sleeve:t.main,cuff:t.trim,skirt:t.accent,belt:t.dark,pants:t.trim,armor:e,trim:t.trim}:{}}function Ju(){return new zi({type:"guard",scale:1.15,skin:"#eac8a6",robe:"#2b4374",sleeve:"#2b4374",cuff:"#c8302c",belt:"#c8302c",collar:"#c8302c",pants:"#1f2438",hair:"#1c1a1e",weapon:"spear"})}function Ku(r={}){return new zi({type:"mage",scale:1.15,skin:"#f4d4b2",robe:"#3a3a7a",sleeve:"#3a3a7a",cuff:"#e0b040",belt:"#e0b040",pants:"#24244a",hair:"#1e1a24",weapon:"staff",...r})}function ju(r={}){return new zi({type:"elf",scale:1.12,skin:"#fbe2cc",robe:"#5aa84e",sleeve:"#5aa84e",cuff:"#e8d8a0",skirt:"#3f7a3a",belt:"#7a4e2e",pants:"#f0e8d0",shoes:"#6a4428",hair:"#e8e4c8",eye:"#2a6a4a",weapon:"bow",...r})}function Qu(){return new zi({type:"lady",scale:1.15,skin:"#f6d8bc",robe:"#9cc46a",sleeve:"#9cc46a",cuff:"#d84a6a",skirt:"#d8486a",pants:"#d8486a",hair:"#2a2024"})}function tf(){return new zi({type:"jiangshi",scale:1.12,skin:"#b8d0ae",robe:"#2a5a5a",sleeve:"#2a5a5a",cuff:"#e0b040",belt:"#e0b040",pants:"#1a2a2a",hair:"#1a1a20",eye:"#c8302c"})}function ef(){return new zi({type:"ghost",scale:1.15,skin:"#e8eef4",robe:"#f4f4f0",sleeve:"#f4f4f0",hair:"#0a0a10",eye:"#ff2030",noLegs:!0})}function nf(){return new zi({type:"reaper",scale:2.05,skin:"#eef0f2",robe:"#141218",sleeve:"#141218",cuff:"#3a2a4a",belt:"#5a1a2a",pants:"#0c0a10",hair:"#0a0a10",eye:"#1a0a0a"})}var ah=class{constructor(t="fox"){let e=t==="gumiho",i=e?{fur:"#f4ecdc",belly:"#ffffff",tip:"#7fd8ff",dark:"#3a3040",mark:"#c8302c"}:{fur:"#d8742a",belly:"#f6eedc",tip:"#ffffff",dark:"#3a2a20",mark:"#2a1a14"};this.mats=[];let n=d=>{let f=Pt(d);return this.mats.push(f),f},s=n({color:nt(i.fur)}),o=n({color:nt(i.belly)}),a=n({color:nt(i.dark)}),l=e?Pt({color:nt(i.tip),emissive:nt("#2a7aff")}):n({color:nt(i.tip)});this.root=new Nt,this.body=new Nt,this.body.scale.setScalar(e?2.1:1.1),this.root.add(this.body),this.torso=new Nt,this.torso.position.y=.42,this.body.add(this.torso);let c=Z(new un(.17,.42,4,8),s);c.rotation.x=Math.PI/2,this.torso.add(c),this.torso.add(Z(new jt(.15,8,6),o,0,-.05,.22)),this.head=new Nt,this.head.position.set(0,.16,.38),this.torso.add(this.head),this.head.add(Z(new jt(.17,10,8),s));let h=Z(new ne(.09,.24,6),o,0,-.04,.2);h.rotation.x=Math.PI/2,this.head.add(h),this.head.add(Z(new jt(.035,5,4),a,0,-.03,.32));for(let d of[-1,1]){let f=Z(new ne(.07,.2,4),s,d*.1,.17,-.02);f.rotation.z=-d*.25,this.head.add(f),this.head.add(Z(new ne(.035,.1,4),a,d*.1,.2,.01)).rotation.z=0,this.head.add(Z(new dt(.06,.035,.02),Pt({color:nt(e?"#ff4a6a":"#ffd040"),emissive:nt(e?"#8a0a2a":"#5a3a00")}),d*.08,.04,.15)),e&&this.head.add(Z(new dt(.03,.09,.02),n({color:nt(i.mark)}),d*.05,.1,.15))}this.tails=[];let u=e?9:1;for(let d=0;d<u;d++){let f=new Nt;f.position.set(0,.05,-.3);let p=u>1?(d/(u-1)-.5)*2.4:0;f.rotation.set(-.7-(u>1?Math.cos(p)*.2:0),p*.6,0);let x=Z(new jt(1,8,6),s,0,0,-.32);x.scale.set(.12,.12,.36),f.add(x);let g=Z(new jt(1,6,5),l,0,0,-.62);g.scale.set(.09,.09,.12),f.add(g),this.torso.add(f),this.tails.push({g:f,base:f.rotation.clone(),ph:d*.7})}this.legs=[];for(let[d,f]of[[-.1,.2],[.1,.2],[-.1,-.2],[.1,-.2]]){let p=new Nt;p.position.set(d,.32,f),p.add(Z(new un(.045,.22,3,5),s,0,-.15,0)),p.add(Z(new jt(.05,5,4),a,0,-.29,.02)),this.body.add(p),this.legs.push(p)}this.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),this.phase=0,this.idleT=Math.random()*10,this.deadT=0}setFlash(t){if(t!==this._lastFlash){this._lastFlash=t;for(let e of this.mats)t>0?e.emissive.setRGB(t,t*.95,t*.9):e.emissive.set(0,0,0)}}animate(t,e){let i=e.speed||0,n=fe(i/4,0,1);this.idleT+=t,this.phase+=t*(4+i*3);let s=this.phase,o=Math.sin(s)*n,a=[o*.9,o*.9,-o*.9,-o*.9],l=Math.cos(s)*.08*n,c=Math.abs(Math.sin(s))*.08*n,h=0;if(e.attack){let d=e.attack.t,f=ji(fe(d/.3,0,1)),p=ji(fe((d-.3)/.25,0,1)),x=ji(fe((d-.62)/.38,0,1));l=Et(Et(0,-.35,f),.35,p)*(1-x),c=Et(-.08*f,.06,p)*(1-x),h=Et(-.3*f,.4,p)*(1-x),a[0]=a[1]=Et(.3*f,-.9,p)*(1-x),a[2]=a[3]=Et(-.4*f,.7,p)*(1-x)}e.hurt>0&&(l=-.3*e.hurt,h=-.3*e.hurt);let u=1-Math.exp(-24*t);this.legs.forEach((d,f)=>d.rotation.x+=(a[f]-d.rotation.x)*u),this.torso.rotation.x+=(l-this.torso.rotation.x)*u,this.head.rotation.x+=(h-this.head.rotation.x)*u,this.body.position.y=c;for(let d of this.tails)d.g.rotation.y=d.base.y+Math.sin(this.idleT*3+d.ph)*.18,d.g.rotation.x=d.base.x+Math.sin(this.idleT*2.3+d.ph)*.1-n*.3;if(e.dead){this.deadT+=t;let d=ji(fe(this.deadT/.4,0,1));this.body.rotation.z=d*Math.PI/2}else this.deadT=0,this.body.rotation.z=0}};function lh(r="fox"){return new ah(r)}function ul(r="blue"){let t={blue:{skin:"#5d8fd8",hair:"#e2522e",horns:1,scale:1.12},red:{skin:"#d8574a",hair:"#2a2430",horns:2,scale:1.18},boss:{skin:"#b03a5a",hair:"#f0e8d8",horns:2,scale:2.3,horn:"#f0c040"}}[r];return new zi({type:"dokkaebi",skin:t.skin,hair:t.hair,horns:t.horns,horn:t.horn,scale:t.scale,pants:t.skin,sleeve:t.skin,legLen:.3,torsoH:.42,headR:.32,neck:.3,shoulder:.27,limb:1.35,wide:1.3,weapon:r==="boss"?"goldclub":"club",eye:"#1b1416"})}var en={sword:{id:"sword",title:"\uAC80\uAC1D",name:"\uC774\uB791",make:Zu,hp:120,skillCd:2.6,dashCd:.5,skill2Cd:6,skill3Cd:8,role:"\uBC1C\uB3C4\uC220 \xB7 \uADFC\uC811",desc:"\uBC1C\uB3C4\uC220, \uAC80\uAE30, \uC21C\uAC04 \uB3CC\uC9C4 \uC77C\uC12C, \uD68C\uC624\uB9AC\uBCA0\uAE30",labels:{atk:"\uBCA0\uAE30",dash:"\uD68C\uD53C",skill:"\uAC80\uAE30",skill2:"\uC77C\uC12C",skill3:"\uD68C\uC624\uB9AC"},hitWord:"\uC5F0\uC18D \uBCA0\uAE30"},mage:{id:"mage",title:"\uB3C4\uC0AC",name:"\uCCAD\uC6B4",make:Ku,hp:90,skillCd:4.2,dashCd:.8,skill2Cd:6.5,skill3Cd:9,role:"\uBD80\uC801\uC220 \xB7 \uC6D0\uAC70\uB9AC \uAD11\uC5ED",desc:"\uBD88\uBD80\uC801, \uB099\uB8B0, \uBD88\uBC40\uC744 \uBD80\uB974\uB294 \uD654\uB8E1\uBD80, \uC5BC\uC74C \uAC00\uC2DC \uBE59\uACB0\uC9C4",labels:{atk:"\uBD88\uBD80\uC801",dash:"\uCD95\uC9C0",skill:"\uB099\uB8B0",skill2:"\uD654\uB8E1\uBD80",skill3:"\uBE59\uACB0\uC9C4"},hitWord:"\uC5F0\uC18D \uD0C0\uACA9"},elf:{id:"elf",title:"\uC694\uC815",name:"\uD558\uB2AC",make:ju,hp:100,skillCd:3.2,dashCd:.45,skill2Cd:6,skill3Cd:9,role:"\uD65C \xB7 \uC6D0\uAC70\uB9AC \uC5F0\uC0AC",desc:"\uBC14\uB78C\uD654\uC0B4, \uD558\uB298\uC5D0\uC11C \uC3DF\uC544\uC9C0\uB294 \uD654\uC0B4\uBE44, \uC801\uC744 \uBE68\uC544\uB4E4\uC774\uB294 \uD68C\uC624\uB9AC \uC815\uB839",labels:{atk:"\uC0AC\uACA9",dash:"\uAD6C\uB974\uAE30",skill:"\uBC14\uB78C\uD654\uC0B4",skill2:"\uD654\uC0B4\uBE44",skill3:"\uD68C\uC624\uB9AC \uC815\uB839"},hitWord:"\uC5F0\uC18D \uBA85\uC911"}},Xr=["sword","mage","elf"];var xn={2:3,3:5},qr=r=>40+r*30,js=new A,Hy={4:3,5:0,13:12,14:11,24:21},fl=class{constructor(t,e="sword"){this.game=t,this.pos=new A(0,.12,16),this.yaw=Math.PI,this.vel=new A,this.radius=.32,this.maxHp=120,this.hp=this.maxHp,this.attack=null,this.combo=0,this.comboTimer=0,this.buffered=!1,this.dashT=0,this.dashCd=0,this.dashDir=new A,this.skillCd=0,this.skillMax=2.6,this.invuln=0,this.hurtT=0,this.dead=!1,this.stepAcc=0,this.y=this.pos.y,this.lastCombat=0,this.moveR=this.radius,this.setClass(e)}setClass(t){let e=en[t]||en.sword;this.cls=e.id,this.cfg=e;let i=this.game.progressOf(e.id);this.level=i.level,this.exp=i.exp,this.skillMax=e.skillCd,this.cd2=0,this.cd3=0,this.cd2Max=e.skill2Cd,this.cd3Max=e.skill3Cd,this.dashMax=e.dashCd,this.attack=null,this.combo=0,this.sheatheT=0,this.buildRig(),this.recalc(!0)}buildRig(){let t=this.game.progressOf(this.cls),e=ei(t.weapon),i=ei(t.outfit),n={sword:"hero",mage:"mage",elf:"elf"}[this.cls],s=this.rig;this.rig=this.cfg.make({wstyle:e?.style,...dl(n,i)}),s&&(this.game.scene.remove(s.root),this.rig.root.position.copy(s.root.position),this.rig.root.rotation.y=s.root.rotation.y),this.game.scene.add(this.rig.root)}recalc(t=!1){let e=this.game.progressOf(this.cls),i=ei(e.weapon),n=ei(e.outfit),s=this.maxHp?this.hp/this.maxHp:1;this.maxHp=Math.round(this.cfg.hp+(this.level-1)*12+(n?.hp||0)),this.atkMul=(1+(this.level-1)*.08)*(1+(i?.atk||0)),this.def=n?.def||0,this.perks=Wu(e.weapon,e.outfit),this.dashMax=this.cfg.dashCd*(this.perks.has("swift")?.7:1),this.hp=t?this.maxHp:Math.max(1,Math.round(this.maxHp*s))}equip(t){let e=ei(t);if(!e||e.kind==="weapon"&&e.cls!==this.cls)return!1;let i=this.game.progressOf(this.cls);return e.kind==="weapon"?i.weapon=t:i.outfit=t,this.buildRig(),this.recalc(),!0}addExp(t){this.exp+=t;let e=0;for(;this.exp>=qr(this.level);)this.exp-=qr(this.level),this.level++,e++;let i=this.game.progressOf(this.cls);i.level=this.level,i.exp=this.exp,e&&(this.recalc(!0),this.game.onLevelUp(this,e))}reset(){this.hp=this.maxHp,this.dead=!1,this.attack=null,this.invuln=1.5,this.rig.deadT=0}aimYaw(t,e=this.cls==="sword"?3.6:11){let i=this.game,n=i.target;if(n&&!n.dead&&!n.spawning&&Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)<i.targetRange()+2)return Math.atan2(n.pos.x-this.pos.x,n.pos.z-this.pos.z);let s=null,o=1e9,a=t.moveLen>.1?Math.atan2(t.mx,t.mz):this.yaw;for(let l of i.enemies){if(l.dead||l.spawning)continue;let c=l.pos.x-this.pos.x,h=l.pos.z-this.pos.z,u=Math.hypot(c,h);if(u>e)continue;let d=Math.abs(kn(a,Math.atan2(c,h))),f=u+d*(e>4?4:1.5);d<(e>4?.9:1.7)&&f<o&&(o=f,s=Math.atan2(c,h))}return s!==null?s:t.mouseRecent&&t.mouseWorld?Math.atan2(t.mouseWorld.x-this.pos.x,t.mouseWorld.z-this.pos.z):a}startAttack(t){if(this.dead||this.dashT>0)return;if(this.attack){this.attack.t>.4&&(this.buffered=!0);return}if(this.cls!=="sword"){let a=(this.cls==="mage"?10:20)+[0,0,2][this.combo%3];this.combo++,this.yaw=this.aimYaw(t);let l=a%10===2;this.attack={t:0,kind:a,dur:this.cls==="mage"?l?.46:.36:l?.42:.32,hit:!1,hitAt:this.cls==="mage"?.42:.47},this.cls==="elf"&&this.game.audio.play("bowdraw"),this.lastCombat=this.game.time;return}this.rig.sheathed?(this.combo=0,this.drawCut()):this.combo===0&&(this.comboFromSheath=!1);let s=(this.comboFromSheath?[3,0,2]:[1,0,2])[this.combo%3];this.combo++,this.yaw=this.aimYaw(t),this.attack={t:0,kind:s,dur:s===2?.48:s===3?.42:.36,hit:!1,hitAt:s===3?.44:.38},s!==3&&this.game.audio.play(s===2?"swing3":"swing"),this.lastCombat=this.game.time,this.sinceAttack=0}drawCut(){this.rig.unsheathe(),this.sheatheT=0,this.comboFromSheath=!0,this.game.audio.play("draw");let t=this.rig.saya;if(t){let e=new A;t.getWorldPosition(e),this.game.fx.spark(e.x,e.y,e.z,6,"#ffffff",3)}}startDash(t){if(this.dead||this.dashCd>0)return;let e=t.moveLen>.1?js.set(t.mx,0,t.mz).normalize():js.set(Math.sin(this.yaw),0,Math.cos(this.yaw));if(this.dashDir.copy(e),this.yaw=Math.atan2(e.x,e.z),this.cls==="mage"){this.blink(e);return}this.dashT=.2,this.dashCd=this.dashMax??.5,this.invuln=Math.max(this.invuln,.3),this.attack=null,this.buffered=!1,this.game.audio.play("dash"),this.game.fx.dust(this.pos.x,this.pos.y,this.pos.z,8)}blink(t){let e=this.game,i=this.pos.clone();e.fx.ghost(this.rig,"#9a7aff",.4),e.fx.smoke(i.x,i.y+.2,i.z,10),e.world.move(this.pos,t.x*3.6,t.z*3.6,this.moveR),this.vel.set(0,0,0),this.dashCd=this.dashMax,this.invuln=Math.max(this.invuln,.35),this.attack=null,this.buffered=!1,e.audio.play("blink");let n=this.pos;for(let s=0;s<14;s++){let o=s/13;e.fx.add.emit({x:i.x+(n.x-i.x)*o,y:i.y+.8+R(-.4,.4),z:i.z+(n.z-i.z)*o,vx:R(-.5,.5),vy:R(0,1),vz:R(-.5,.5),life:R(.25,.5),size:3,endSize:1,color:"#d8c8ff",color2:"#5a3aff"})}e.fx.ring(new A(n.x,e.world.heightAt(n.x,n.z),n.z),1.6,"#b8a0ff",.35),e.fx.smoke(n.x,n.y+.2,n.z,8)}startExtraSkill(t,e){if(this.dead||this.dashT>0)return;let i=e===2?"cd2":"cd3";if(this.level<xn[e]||this[i]>0||this.attack&&this.attack.t<.6)return;this[i]=e===2?this.cd2Max:this.cd3Max,this.yaw=this.aimYaw(t),this.combo=0,this.buffered=!1;let n=this.game,s={sword:{2:{kind:4,dur:.5,hitAt:.3},3:{kind:5,dur:.9,hitAt:.05}},mage:{2:{kind:13,dur:.5,hitAt:.45},3:{kind:14,dur:.62,hitAt:.5}},elf:{2:{kind:23,dur:.55,hitAt:.5},3:{kind:24,dur:.5,hitAt:.47}}}[this.cls][e];this.cls==="sword"&&this.rig.sheathed&&this.drawCut(),this.attack={t:0,kind:s.kind,dur:s.dur,hit:!1,hitAt:s.hitAt,skill:!0,slot:e},this.cls==="mage"?n.audio.play("chant"):this.cls==="elf"&&n.audio.play("bowdraw"),this.sinceAttack=0,this.lastCombat=n.time}startSkill(t){if(this.dead||this.skillCd>0||this.dashT>0)return;if(this.cls!=="sword"){this.skillCd=this.skillMax,this.yaw=this.aimYaw(t),this.combo=0,this.cls==="mage"?(this.attack={t:0,kind:11,dur:.62,hit:!1,hitAt:.5,skill:!0},this.game.audio.play("chant")):(this.attack={t:0,kind:21,dur:.5,hit:!1,hitAt:.47,skill:!0},this.game.audio.play("bowdraw")),this.lastCombat=this.game.time;return}this.skillCd=this.skillMax,this.yaw=this.aimYaw(t);let e=this.rig.sheathed;e&&this.drawCut(),this.attack={t:0,kind:e?3:1,dur:e?.4:.36,hit:!0,skill:!0},this.combo=0,this.sinceAttack=0,e||this.game.audio.play("swing3"),this.game.spawnSwordWave(this),this.lastCombat=this.game.time}damage(t,e){if(this.invuln>0||this.dead||this.game.godMode)return!1;t=Math.max(1,Math.round(t*(1-(this.def||0)))),this.hp-=t,this.invuln=.7,this.blinkT=.7,this.hurtT=.3,this.lastCombat=this.game.time;let i=this.game;return i.fx.number(this.pos.clone().add(new A(0,1.7,0)),t,"player"),i.audio.play("hurt"),i.shake(.25),i.screenFlash(.25,"#ff3030"),e&&(js.subVectors(this.pos,e).setY(0).normalize(),this.vel.addScaledVector(js,7)),this.hp<=0&&(this.hp=0,this.dead=!0,i.onPlayerDeath()),!0}update(t,e){let i=this.game;this.dashCd=Math.max(0,this.dashCd-t),this.skillCd=Math.max(0,this.skillCd-t),this.cd2=Math.max(0,(this.cd2||0)-t),this.cd3=Math.max(0,(this.cd3||0)-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.comboTimer-=t;let n=0;if(!this.dead){let l=0;if(this.dashT>0){this.dashT-=t;let h=14*(.4+.6*(this.dashT/.2));i.world.move(this.pos,this.dashDir.x*h*t,this.dashDir.z*h*t,this.radius),n=h,Math.random()<.8&&i.fx.add.emit({x:this.pos.x+R(-.2,.2),y:this.pos.y+R(.3,1.1),z:this.pos.z+R(-.2,.2),life:.25,size:2,color:"#bfe8ff"}),this.ghostT=(this.ghostT??0)-t,this.ghostT<=0&&(this.ghostT=.045,i.fx.ghost(this.rig,this.cls==="elf"?"#7ad86a":"#5ab8ff")),this.cls==="elf"&&Math.random()<.6&&i.fx.norm.emit({x:this.pos.x+R(-.3,.3),y:this.pos.y+R(.2,.9),z:this.pos.z+R(-.3,.3),vx:R(-1,1),vy:R(.5,1.5),vz:R(-1,1),wob:1.5,life:R(.5,.9),size:2,color:Math.random()<.5?"#8ad06a":"#c8e88a"})}else{let u=4.6*(this.attack?this.attack.kind===5?.7:this.attack.skill?this.cls==="sword"?.1:.25:this.cls==="sword"?.22:.45:1)*(this.perks?.has("swift")?1.15:1);if(e.moveLen>.1){l=1;let d=e.mx*u,f=e.mz*u;this.vel.x=Et(this.vel.x,d,1-Math.exp(-18*t)),this.vel.z=Et(this.vel.z,f,1-Math.exp(-18*t)),this.attack||(this.yaw=fn(this.yaw,Math.atan2(e.mx,e.mz),16,t))}else this.vel.x=Et(this.vel.x,0,1-Math.exp(-14*t)),this.vel.z=Et(this.vel.z,0,1-Math.exp(-14*t));if(this.attack&&!this.attack.skill&&this.cls==="sword"){let d=this.attack;if(d.t>.25&&d.t<.5){let f=d.kind===2?3.5:2.6;this.vel.x+=Math.sin(this.yaw)*f*t*10*(1-Math.exp(-t*5)),this.vel.z+=Math.cos(this.yaw)*f*t*10*(1-Math.exp(-t*5))}}i.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),n=Math.hypot(this.vel.x,this.vel.z)}if(this.stepAcc+=n*t,this.stepAcc>1.1&&this.dashT<=0&&(this.stepAcc=0,i.fx.dust(this.pos.x,this.pos.y,this.pos.z,2)),this.attack){let h=this.attack;h.t+=t/h.dur,!h.hit&&h.t>=(h.hitAt??.38)&&(h.hit=!0,h.slot?i.castSkill(this,h.slot):h.skill?i.playerSkillHit(this,h):this.cls==="sword"?i.playerSwingHit(this,h.kind):i.playerShoot(this,h.kind)),h.t>=1&&(this.attack=null,this.buffered?(this.buffered=!1,this.startAttack(e)):this.comboTimer=.35)}else this.comboTimer<=0&&(this.combo=0);let c=this.rig;!this.attack&&c.saya&&(this.sinceAttack=(this.sinceAttack??9)+t,!c.sheathed&&this.sinceAttack>.9&&this.dashT<=0&&(c.sheathe(),this.sheatheT=1e-4)),this.sheatheT>0&&(this.sheatheT+=t/.42,c.justSheathed&&(c.justSheathed=!1,i.audio.play("sheathe")),this.sheatheT>=1&&(this.sheatheT=0))}let s=i.world.heightAt(this.pos.x,this.pos.z);this.y=Et(this.y,s,1-Math.exp(-20*t)),this.pos.y=s,!this.dead&&i.time-this.lastCombat>4&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+t*6));let o=this.rig;o.root.position.set(this.pos.x,this.y,this.pos.z);let a=this.attack&&this.attack.kind===5?Math.min(1,this.attack.t/.85)*Math.PI*6:0;if(o.root.rotation.y=this.yaw+a,o.animate(t,{speed:this.dead?0:n,attack:this.attack?{t:Math.min(1,this.attack.t),kind:Hy[this.attack.kind]??this.attack.kind}:null,sheathing:this.sheatheT>0?Math.min(1,this.sheatheT):0,dash:this.dashT>0,hurt:this.hurtT/.3,dead:this.dead}),this.blinkT=Math.max(0,(this.blinkT||0)-t),o.root.visible=this.dead||this.blinkT<=0||Math.floor(i.time*18)%2===0,o.setFlash(this.hurtT>.2?.6:0),o.bladeMat){let l=this.attack?.5:o.sheathed?0:i.night>.5?.16:.08;if(o.glowColor){let c=o.sheathed?0:l+.22+Math.sin(i.time*5)*.06;o.bladeMat.emissive.copy(o.glowColor).multiplyScalar(c*.8),o.edgeMat.emissive.copy(o.glowColor).multiplyScalar(c*1.4)}else o.bladeMat.emissive.setRGB(l*.6,l*.9,l),o.edgeMat.emissive.setRGB(l*1.2,l*1.4,l*1.6)}if(o.bowMat&&o.glowColor&&o.bowMat.emissive.copy(o.glowColor).multiplyScalar(.3+Math.sin(i.time*4)*.08+(this.attack?.3:0)),o.glowColor&&!o.sheathed&&Math.random()<t*14){let l=o.weapon.getWorldPosition(js);i.fx.add.emit({x:l.x+R(-.3,.3),y:l.y+R(-.3,.5),z:l.z+R(-.3,.3),vy:R(.2,.8),life:R(.3,.6),size:2,color:"#ffffff",color2:"#"+o.glowColor.getHexString()})}}},Ri={blue:{core:"#bff4ff",hi:"#e8ffff",idle:"#9feaff",shell:"#3a8cff",trail:"#7fe0ff",trail2:"#1a40ff",orb:"#d8fbff",eye:659504,fire:["#9ff0ff","#2050ff"]},fox:{core:"#ffe0c0",hi:"#fff4e0",idle:"#ffc89a",shell:"#ff6a2a",trail:"#ffb070",trail2:"#ff2a00",orb:"#ffe8c8",eye:3803648,fire:["#ffd08a","#ff3a00"]},ghost:{core:"#f0e0ff",hi:"#ffffff",idle:"#d8c0ff",shell:"#8a4aff",trail:"#c8a0ff",trail2:"#4a1a9a",orb:"#ecdcff",eye:1706538,fire:["#d8c0ff","#5a1aaa"]}},Gy={blue:{hp:46,speed:2.7,dmg:10,range:1.5,windup:.5,recover:.6,radius:.46,exp:10,ai:"melee",make:()=>ul("blue"),pal:Ri.blue},red:{hp:72,speed:3.1,dmg:15,range:1.6,windup:.42,recover:.5,radius:.48,exp:16,ai:"melee",make:()=>ul("red"),pal:Ri.blue},wisp:{hp:28,speed:3.2,dmg:9,range:7,windup:.6,recover:1.6,radius:.35,exp:12,ai:"wisp",pal:Ri.blue},boss:{hp:900,speed:2.35,dmg:24,range:2.7,windup:.85,recover:.8,radius:.95,exp:200,ai:"boss",boss:"dokkaebi",make:()=>ul("boss"),pal:Ri.blue,name:"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8",summon:["red","blue"]},fox:{hp:44,speed:4.4,dmg:10,range:1.5,windup:.34,recover:.5,radius:.42,exp:14,ai:"melee",lunge:!0,make:()=>lh("fox"),pal:Ri.fox},foxfire:{hp:32,speed:3.6,dmg:10,range:7,windup:.5,recover:1.4,radius:.35,exp:14,ai:"wisp",pal:Ri.fox},gumiho:{hp:1150,speed:3.1,dmg:22,range:2.4,windup:.6,recover:.7,radius:.95,exp:320,ai:"boss",boss:"gumiho",make:()=>lh("gumiho"),pal:Ri.fox,name:"\uCC9C\uB144 \uAD6C\uBBF8\uD638",summon:["fox","foxfire"]},jiangshi:{hp:92,speed:3.2,dmg:15,range:1.5,windup:.45,recover:.6,radius:.45,exp:20,ai:"melee",hop:!0,make:tf,pal:Ri.ghost},ghost:{hp:48,speed:3,dmg:12,range:6.5,windup:.6,recover:1.6,radius:.4,exp:20,ai:"wisp",teleport:!0,make:ef,pal:Ri.ghost},reaper:{hp:1500,speed:2.7,dmg:26,range:2.8,windup:.7,recover:.8,radius:1,exp:450,ai:"boss",boss:"reaper",make:nf,pal:Ri.ghost,name:"\uC800\uC2B9\uC0AC\uC790",summon:["ghost","jiangshi"]}},Yr=class{constructor(t,e,i,n=1){this.game=t,this.type=e;let s=this.T=Gy[e],o=1+(n-1)*.25;this.maxHp=Math.round(s.hp*o),this.hp=this.maxHp,this.dmg=Math.round(s.dmg*(1+(n-1)*.15)),this.radius=s.radius,this.isBoss=s.ai==="boss",this.isWisp=s.ai==="wisp",this.name=s.name,this.moveR=this.isBoss?Ks[1]:Math.min(s.radius,Ks[0]),this.pos=i.clone(),this.vel=new A,this.yaw=0,this.state="spawn",this.st=0,this.attackCd=R(.4,1.2),this.hurtT=0,this.flashT=0,this.dead=!1,this.deadT=0,this.spawning=!0,this.y=i.y,this.strafe=Math.random()<.5?1:-1,this.leapCd=6,this.patCd=3,this.tpCd=R(3,6),this.hopPh=Math.random(),this.summoned=0,s.make?(this.rig=s.make(),t.scene.add(this.rig.root)):this.buildWisp(),this.root=this.rig?this.rig.root:this.wisp,this.root.position.copy(this.pos),this.root.scale.setScalar(.01);let[a,l]=s.pal.fire;t.fx.colorFire(i.x,i.y,i.z,this.isBoss?80:30,this.isBoss?1.2:.5,a,l),t.fx.ring(i,this.isBoss?3:1.4,a,.5),t.audio.play("spawn")}buildWisp(){let t=new Nt,e=this.T.pal,i=new Kt({color:new ct(e.core)}),n=new at(new Ae(.28,1),i);t.add(n);let s=new at(new Ae(.36,1),new Kt({color:new ct(e.shell),transparent:!0,opacity:.45,depthWrite:!1}));s.userData.noOutline=!0,t.add(s);let o=new Kt({color:e.eye});for(let a of[-1,1]){let l=new at(new dt(.06,.1,.04),o);l.position.set(a*.09,.03,.27),t.add(l)}this.game.scene.add(t),this.wisp=t,this.coreMat=i}get alive(){return!this.dead}center(){return js.set(this.pos.x,this.y+(this.isBoss?2:this.isWisp?this.rig?1.2:1.3:.8),this.pos.z)}hit(t,e,i=5,n=.25){if(this.dead||this.spawning)return!1;if(this.hp-=t,this.flashT=.12,!this.isBoss||this.state==="chase"){let s=this.isBoss?i*.15:i;this.vel.addScaledVector(e,s),this.isBoss||(this.hurtT=n,this.state==="windup"&&n>=.25&&(this.state="chase",this.attackCd=.6,this.clearTele()))}return this.hp<=0&&this.die(),!0}freeze(t){if(!(this.dead||this.isBoss)&&(this.frozenT=Math.max(this.frozenT||0,t),this.hurtT=Math.max(this.hurtT,t),(this.state==="windup"||this.state==="strike")&&(this.state="chase",this.attackCd=.8,this.clearTele()),!this.ice)){let e=this.isWisp?.9:1.15*(this.T.radius/.46),i=new Kt({color:"#a8e4ff",transparent:!0,opacity:.42,depthWrite:!1});this.ice=new at(new Ae(.75*e,0),i),this.ice.scale.set(1,1.35,1),this.game.scene.add(this.ice)}}updateIce(t){if(!this.ice)return;this.frozenT-=t;let e=this.isWisp?this.y+1.2:this.y+.75;if(this.ice.position.set(this.pos.x,e,this.pos.z),this.frozenT<=0||this.dead){let i=this.game;for(let n=0;n<14;n++)i.fx.add.emit({x:this.pos.x,y:e+R(-.4,.4),z:this.pos.z,vx:R(-3,3),vy:R(1,4),vz:R(-3,3),g:12,life:R(.3,.6),size:3,endSize:1,color:"#e8f8ff",color2:"#5aa8ff"});i.audio.play("block"),i.scene.remove(this.ice),this.ice.geometry.dispose(),this.ice.material.dispose(),this.ice=null,this.frozenT=0}}die(){this.dead=!0,this.hp=0,this.deadT=0,this.clearTele();let t=this.game;if(t.audio.play("poof"),this.isWisp&&!this.rig){let[e,i]=this.T.pal.fire;t.fx.colorFire(this.pos.x,this.y+1,this.pos.z,40,.4,e,i),t.fx.ring(new A(this.pos.x,this.y,this.pos.z),1.5,e,.4)}t.onEnemyKilled(this)}clearTele(){this.tele&&(this.game.fx.removeRing(this.tele),this.tele=null)}update(t){let e=this.game,i=e.player;if(this.updateIce(t),this.st+=t,this.flashT=Math.max(0,this.flashT-t),this.hurtT=Math.max(0,this.hurtT-t),this.attackCd-=t,this.leapCd-=t,this.dead){if(this.deadT+=t,this.isWisp&&!this.rig)this.root.scale.setScalar(Math.max(.01,1-this.deadT*4));else if(this.rig.animate(t,{speed:0,dead:!0}),this.rig.setFlash(Math.max(0,.8-this.deadT*2)),this.deadT>.55&&!this.poofed){this.poofed=!0;let u=this.isBoss,[d,f]=this.T.pal.fire;e.fx.smoke(this.pos.x,this.y+.3,this.pos.z,u?30:12),e.fx.colorFire(this.pos.x,this.y+.2,this.pos.z,u?60:24,u?1.4:.6,d,f),e.fx.coins(this.pos.x,this.y,this.pos.z,u?30:6),e.audio.play("coin"),this.root.visible=!1}return this.deadT<1.2}if(this.spawning){let u=ji(fe(this.st/.7,0,1));return this.root.scale.setScalar(Math.max(.01,u)),Math.random()<.6&&e.fx.colorFire(this.pos.x,this.pos.y,this.pos.z,2,this.isBoss?1:.4,...this.T.pal.fire),this.st>=.7&&(this.spawning=!1,this.state="chase",this.st=0,this.root.scale.setScalar(1),(Math.random()<.4||this.isBoss)&&e.audio.play(this.T.pal===Ri.blue?"laugh":this.T.pal===Ri.fox?"howl":"wail")),this.isWisp&&!this.rig?this.root.position.set(this.pos.x,this.pos.y+1.3*u,this.pos.z):this.place(t,0),!0}let n=i.pos.x-this.pos.x,s=i.pos.z-this.pos.z,o=Math.hypot(n,s),a=Math.atan2(n,s),l=0,c=null,h=this.T;if(this.isWisp)return this.updateWisp(t,o,a);if(this.vel.lengthSq()>.001&&(e.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-9*t))),!(this.hurtT>0)){if(this.state==="chase"){let u=Math.abs(i.pos.y-this.pos.y)<.5;if(i.dead)l=0,this.yaw=fn(this.yaw,a,8,t);else if(h.boss==="dokkaebi"&&this.leapCd<=0&&o>4.5&&o<14)this.state="leapPrep",this.st=0,this.leapTarget=i.pos.clone(),this.tele=e.fx.ring(this.leapTarget,3.6,"#ff4a3a",1,1);else if(!(this.isBoss&&h.boss!=="dokkaebi"&&this.bossPattern(t,o,a))){if(o>h.range*.85||!u){let d=h.speed*(this.isBoss&&this.hp<this.maxHp*.4?1.25:1);if(h.hop){this.hopPh=(this.hopPh+t*1.8)%1;let f=this.hopPh<.62;this.hop=f?Math.sin(this.hopPh/.62*Math.PI):0,d=f?d*1.6:0,!f&&!this.landed&&(this.landed=!0,e.fx.dust(this.pos.x,this.pos.y,this.pos.z,3)),f&&(this.landed=!1)}l=this.chaseMove(t,d,n,s,o),this.yaw=fn(this.yaw,this.los?a:Math.atan2(this.moveX,this.moveZ),8,t)}else if(this.yaw=fn(this.yaw,a,8,t),this.attackCd<=0&&(this.state="windup",this.st=0,this.isBoss)){let d=new A(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6);this.tele=e.fx.ring(d,2.6,"#ff4a3a",1,1),this.smashAt=d}}}else if(this.state==="windup")this.st<h.windup*.6&&(this.yaw=fn(this.yaw,a,5,t)),c={t:.28*fe(this.st/h.windup,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/h.windup),this.isBoss&&this.smashAt&&(this.smashAt.set(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6),this.tele&&this.tele.m.position.set(this.smashAt.x,this.smashAt.y+.04,this.smashAt.z)),this.st>=h.windup&&(this.state="strike",this.st=0,e.audio.play("swing"));else if(this.state==="strike"){if(c={t:.28+.34*fe(this.st/.12,0,1),kind:2},h.lunge&&this.st<.12&&e.world.move(this.pos,Math.sin(this.yaw)*9*t,Math.cos(this.yaw)*9*t,this.moveR),!this.struck&&this.st>=.08)if(this.struck=!0,this.isBoss)this.clearTele(),e.bossSlam(this,this.smashAt,2.6,this.dmg);else{let u=Math.sin(this.yaw),d=Math.cos(this.yaw),f=this.pos.x+u*.9,p=this.pos.z+d*.9;e.fx.dust(f,this.pos.y,p,5),Math.hypot(i.pos.x-f,i.pos.z-p)<1.05+i.radius&&Math.abs(i.pos.y-this.pos.y)<1&&i.damage(this.dmg,this.pos)}this.st>=.12&&(this.state="recover",this.st=0,this.struck=!1)}else if(this.state==="recover")c={t:.62+.38*fe(this.st/h.recover,0,1),kind:2},this.st>=h.recover&&(this.state="chase",this.st=0,this.attackCd=R(.6,1.4));else if(this.state==="cast"){if(this.yaw=fn(this.yaw,a,6,t),c={t:.28*fe(this.st/.7,0,1),kind:2},Math.random()<.9){let[u,d]=h.pal.fire;e.fx.add.emit({x:this.pos.x+R(-1.5,1.5),y:this.y+R(.5,3),z:this.pos.z+R(-1.5,1.5),vx:this.pos.x-this.pos.x,vy:.5,life:.35,size:3,endSize:1,color:u,color2:d})}if(this.st>=.7){if(h.boss==="gumiho")for(let u=-3;u<=3;u++)e.spawnOrb(this,u*.2);else e.spawnDarkWaves(this);this.state="recover",this.st=0}}else if(this.state==="chargePrep")c={t:.2*fe(this.st/.6,0,1),kind:2},this.st>=.65&&(this.state="charge",this.st=0,e.audio.play("dash"),this.chargeHit=!1);else if(this.state==="charge"){let d=e.world.move(this.pos,Math.sin(this.yaw)*16*t,Math.cos(this.yaw)*16*t,this.moveR);l=16,Math.random()<.9&&e.fx.colorFire(this.pos.x,this.pos.y+.5,this.pos.z,2,.8,...h.pal.fire),!this.chargeHit&&Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)<1.6+i.radius&&(this.chargeHit=!0,i.damage(Math.round(this.dmg*1.1),this.pos)),(this.st>=.55||!d)&&(this.state="recover",this.st=0,e.fx.dust(this.pos.x,this.pos.y,this.pos.z,12),e.shake(.3))}else if(this.state==="vanish"){let u=fe(this.st/.5,0,1);if(this.root.scale.setScalar(Math.max(.01,1-u)),this.st>=.5&&!this.reappeared){this.reappeared=!0;let d=i.yaw+Math.PI,f=i.pos.x+Math.sin(d)*2.6,p=i.pos.z+Math.cos(d)*2.6,x=e.world.heightAt(f,p);e.world.isBlocked(f,p,this.moveR,x)||(this.pos.set(f,x,p),this.y=x),e.fx.smoke(this.pos.x,this.y+.5,this.pos.z,20),e.fx.colorFire(this.pos.x,this.y,this.pos.z,40,1,...h.pal.fire),e.audio.play("blink")}if(this.st>=.85){this.root.scale.setScalar(1),this.yaw=a,this.state="windup",this.st=h.windup*.35;let d=new A(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6);this.tele=e.fx.ring(d,2.6,"#c84aff",1,1),this.smashAt=d}}else if(this.state==="leapPrep")c={t:.2*fe(this.st/.6,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/1.5),this.st>=.6&&(this.state="leap",this.st=0,this.leapFrom=this.pos.clone(),e.audio.play("dash"),e.fx.dust(this.pos.x,this.pos.y,this.pos.z,14));else if(this.state==="leap"){let u=fe(this.st/.9,0,1);if(this.tele&&(this.tele.mat.uniforms.uProg.value=.4+u*.6),this.pos.x=Et(this.leapFrom.x,this.leapTarget.x,ji(u)),this.pos.z=Et(this.leapFrom.z,this.leapTarget.z,ji(u)),this.jumpY=Math.sin(u*Math.PI)*4.5,c={t:.28,kind:2},u>=1){this.jumpY=0,this.clearTele();let d=e.world.heightAt(this.pos.x,this.pos.z);e.world.isBlocked(this.pos.x,this.pos.z,this.moveR*.7,d)&&this.pos.copy(this.leapFrom),e.bossSlam(this,this.pos.clone(),3.6,Math.round(this.dmg*1.2),!0),this.state="recover",this.st=0,this.leapCd=R(6,9)}}}return this.place(t,l,c),!0}bossPattern(t,e,i){let n=this.game,s=this.T;if(this.patCd-=t,this.patCd>0||n.player.dead)return!1;if(this.patCd=R(3.2,4.6)*(this.hp<this.maxHp*.4?.7:1),this.yaw=i,s.boss==="gumiho"){if(e>4&&Math.random()<.5){this.state="chargePrep",this.st=0;let o=new A(this.pos.x,this.y+.1,this.pos.z),a=o.clone().add(new A(Math.sin(i)*9,0,Math.cos(i)*9));n.fx.streak(o,a,"#ff4a3a",.7,1.6),n.audio.play("howl")}else this.state="cast",this.st=0,n.audio.play("charge");return!0}return s.boss==="reaper"?(e>3&&Math.random()<.45?(this.state="vanish",this.st=0,this.reappeared=!1,n.fx.smoke(this.pos.x,this.y+.6,this.pos.z,20),n.audio.play("wail")):(this.state="cast",this.st=0,n.audio.play("charge")),!0):!1}updateWisp(t,e,i){let n=this.game,s=n.player;if(this.frozenT>0)return!0;this.yaw=fn(this.yaw,i,6,t),this.vel.lengthSq()>.001&&(n.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-6*t)));let o=s.pos.x-this.pos.x,a=s.pos.z-this.pos.z,l=o/(e||1),c=a/(e||1),h=0,u=0;if(this.state==="chase"){if(e>7.5){let m=n.world.clearLine(this.pos.x,this.pos.z,s.pos.x,s.pos.z,this.moveR)?null:n.world.navDir(this.pos,0);m?(h=m.x,u=m.z):(h=l,u=c)}else e<4.5&&(h=-l,u=-c);h+=-c*this.strafe*.6,u+=l*this.strafe*.6,Math.random()<t*.3&&(this.strafe*=-1),this.attackCd<=0&&e<10&&!s.dead&&(this.state="windup",this.st=0,n.audio.play("orb"))}else this.state==="windup"&&(Math.random()<.8&&n.fx.add.emit({x:this.pos.x+R(-.6,.6),y:this.y+1.3+R(-.6,.6),z:this.pos.z+R(-.6,.6),vx:0,vy:0,vz:0,life:.3,size:2,color:this.T.pal.trail}),this.st>=this.T.windup&&(n.spawnOrb(this),this.state="chase",this.st=0,this.attackCd=R(2,3)));let d=Math.hypot(h,u);if(d>.01&&n.world.move(this.pos,h/d*this.T.speed*t,u/d*this.T.speed*t,this.moveR),this.T.teleport&&this.state==="chase"&&(this.tpCd-=t,this.tpCd<=0&&!s.dead)){this.tpCd=R(5,8);let m=Math.random()*Math.PI*2,_=s.pos.x+Math.cos(m)*3.5,S=s.pos.z+Math.sin(m)*3.5,v=n.world.heightAt(_,S);n.world.isBlocked(_,S,this.moveR,v)||(n.fx.smoke(this.pos.x,this.y+.8,this.pos.z,10),this.pos.set(_,v,S),this.y=v,n.fx.colorFire(_,v+.5,S,20,.5,...this.T.pal.fire),n.audio.play("wail"),this.attackCd=Math.min(this.attackCd,.5))}let f=n.world.heightAt(this.pos.x,this.pos.z);this.y=Et(this.y,f,1-Math.exp(-6*t));let p=Math.sin(n.time*3+this.strafe)*.15;if(this.rig)return this.root.position.set(this.pos.x,this.y,this.pos.z),this.root.rotation.y=this.yaw,this.rig.animate(t,{speed:d>.01?1:0,attack:this.state==="windup"?{t:.28*fe(this.st/this.T.windup,0,1),kind:2}:null,hurt:this.hurtT>0?Math.min(1,this.hurtT/.25):0}),this.rig.setFlash(this.flashT>0?.9:this.state==="windup"&&Math.floor(this.st*12)%2?.3:0),Math.random()<.4&&n.fx.add.emit({x:this.pos.x+R(-.3,.3),y:this.y+R(.2,1.4),z:this.pos.z+R(-.3,.3),vy:R(.2,.6),life:.6,size:2,color:this.T.pal.trail,color2:this.T.pal.trail2,alpha:.7}),!0;this.root.position.set(this.pos.x,this.y+1.3+p,this.pos.z),this.root.rotation.y=this.yaw;let x=this.state==="windup"?1+Math.sin(this.st*40)*.12+this.st*.4:1;this.root.scale.setScalar(x);let g=this.T.pal;return this.coreMat.color.set(this.flashT>0?"#ffffff":this.state==="windup"?g.hi:g.idle),Math.random()<.7&&n.fx.add.emit({x:this.pos.x+R(-.15,.15),y:this.y+1.45+p,z:this.pos.z+R(-.15,.15),vx:R(-.3,.3),vy:R(.8,1.6),vz:R(-.3,.3),life:R(.3,.6),size:R(2,4),endSize:1,color:g.trail,color2:g.trail2}),!0}chaseMove(t,e,i,n,s){let o=this.game.world,a=this.game.player,l=this.isBoss?1:0;this.losT=(this.losT??0)-t,this.losT<=0&&(this.losT=.2+Math.random()*.1,this.los=Math.abs(a.pos.y-this.pos.y)<.5&&o.clearLine(this.pos.x,this.pos.z,a.pos.x,a.pos.z,this.moveR));let c,h;if(this.los||s<1.2){let x=s>3?.35*this.strafe:0,g=i/s,m=n/s;c=g-m*x,h=m+g*x;let _=Math.hypot(c,h);c/=_,h/=_}else{let x=o.navDir(this.pos,l);x?(c=x.x,h=x.z):(c=i/s,h=n/s)}this.unstuckT>0&&(this.unstuckT-=t,c=this.unstuckX,h=this.unstuckZ),this.moveX=this.moveX===void 0?c:this.moveX+(c-this.moveX)*Math.min(1,t*12),this.moveZ=this.moveZ===void 0?h:this.moveZ+(h-this.moveZ)*Math.min(1,t*12);let u=Math.hypot(this.moveX,this.moveZ)||1,d=this.pos.x,f=this.pos.z;o.move(this.pos,this.moveX/u*e*t,this.moveZ/u*e*t,this.moveR);let p=Math.hypot(this.pos.x-d,this.pos.z-f);if(this.stuckAcc=p<e*t*.35?(this.stuckAcc||0)+t:0,this.stuckAcc>.35){this.stuckAcc=0,this.los=!1,this.losT=.8,this.strafe*=-1;let x=Math.atan2(h,c)+(Math.random()<.5?1:-1)*(Math.PI/2+Math.random()*.5);this.unstuckX=Math.cos(x),this.unstuckZ=Math.sin(x),this.unstuckT=.3}return t>0?p/t:0}place(t,e,i=null){let s=this.game.world.heightAt(this.pos.x,this.pos.z);this.y=Et(this.y,s,1-Math.exp(-18*t)),this.pos.y=s;let o=this.rig;o.root.position.set(this.pos.x,this.y+(this.jumpY||0),this.pos.z),o.root.rotation.y=this.yaw,o.animate(t,{speed:e,hop:this.hop||0,attack:i,hurt:this.frozenT>0?.3:this.hurtT>0?Math.min(1,this.hurtT/.25):0}),this.flashT>0?o.setFlash(.9):this.state==="windup"&&!this.isBoss?o.setFlash(Math.floor(this.st*14)%2?.35:0):this.state==="windup"||this.state==="leapPrep"?o.setFlash(Math.floor(this.st*10)%2?.25:0):o.setFlash(0)}dispose(){this.clearTele(),this.ice&&(this.game.scene.remove(this.ice),this.ice=null),this.game.scene.remove(this.root)}},Zr=class{constructor(t,e,i,n,s,o,a){this.game=t,this.rig=e==="guard"?Ju():Qu(),this.pos=new A(i,t.world.heightAt(i,n),n),this.baseYaw=s,this.yaw=s,this.name=o,this.lines=a,this.radius=.4,t.scene.add(this.rig.root),t.world.circles.push({x:i,z:n,r:.4,y:this.pos.y})}update(t){let e=this.game.player,n=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<4?Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z):this.baseYaw;this.yaw=fn(this.yaw,n,4,t),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.yaw,this.rig.animate(t,{speed:0})}},pl=class{constructor(t,e){this.game=t;let i=this.root=new Nt,n=Pt({color:new ct("#8a5a3a")}),s=Pt({color:new ct("#e8d8b8")}),o=Pt({color:new ct("#2a2020")}),a=new at(new jt(.1,6,5),n);a.scale.set(.9,.8,1.2),a.position.y=.1;let l=new at(new jt(.075,6,4),s);l.position.set(0,.07,.03);let c=new at(new jt(.065,6,5),n);c.position.set(0,.19,.08);let h=new at(new ne(.02,.05,4),o);h.rotation.x=Math.PI/2,h.position.set(0,.18,.15);let u=new at(new dt(.06,.015,.1),o);u.position.set(0,.12,-.13),u.rotation.x=-.4,this.wings=[];for(let d of[-1,1]){let f=new Nt;f.position.set(d*.07,.13,0);let p=new at(new dt(.14,.015,.1),n);p.position.x=d*.06,f.add(p),i.add(f),this.wings.push(f)}this.head=c,i.add(a,l,c,h,u),i.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),t.scene.add(i),this.pos=e.clone(),this.yaw=R(0,Math.PI*2),this.state="idle",this.t=R(0,2),this.hopY=0,this.vel=new A}update(t){let e=this.game,i=e.player;this.t-=t;let n=Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z);if(this.state!=="fly"&&this.state!=="gone"&&(n<2.6||e.alarm>0)){this.state="fly";let s=this.pos.x-i.pos.x,o=this.pos.z-i.pos.z,a=Math.hypot(s,o)||1;this.vel.set(s/a*4+R(-1,1),4.5,o/a*4+R(-1,1)),this.yaw=Math.atan2(this.vel.x,this.vel.z)}if(this.state==="idle")this.head.position.y=.19-(Math.sin(e.time*9+this.yaw*10)>.6?.05:0),this.t<=0&&(this.t=R(.4,1.6),Math.random()<.6&&(this.state="hop",this.hopT=0,this.yaw+=R(-1.2,1.2)));else if(this.state==="hop"){this.hopT+=t;let s=this.hopT/.2;this.hopY=Math.sin(Math.min(1,s)*Math.PI)*.12;let o=this.pos.x+Math.sin(this.yaw)*t*1.2,a=this.pos.z+Math.cos(this.yaw)*t*1.2;e.world.isBlocked(o,a,.1,this.pos.y)||(this.pos.x=o,this.pos.z=a),s>=1&&(this.state="idle",this.hopY=0)}else if(this.state==="fly"){this.pos.addScaledVector(this.vel,t),this.vel.y+=t*1.5;for(let s of this.wings)s.rotation.z=Math.sin(e.time*50)*1.1*(s.position.x>0?1:-1);this.pos.y>14&&(this.state="gone",this.root.visible=!1,this.t=R(8,16))}else if(this.state==="gone"&&this.t<=0&&e.alarm<=0){let s=e.world.randomWalkable(i.pos.x,i.pos.z,8,15);if(s){this.pos.copy(s),this.state="idle",this.root.visible=!0;for(let o of this.wings)o.rotation.z=0}else this.t=2}(this.state==="idle"||this.state==="hop")&&(this.pos.y=e.world.heightAt(this.pos.x,this.pos.z)),this.root.position.set(this.pos.x,this.pos.y+this.hopY,this.pos.z),this.root.rotation.y=this.yaw}};var ml=class{constructor(t){this.game=t;let e=i=>document.getElementById(i);this.el={hud:e("hud"),hpFill:e("hp-fill"),hpLag:e("hp-lag"),hpText:e("hp-text"),quest:e("quest-text"),questTitle:e("quest-title"),banner:e("banner"),bannerMain:e("banner-main"),bannerSub:e("banner-sub"),dialog:e("dialog"),dName:e("dialog-name"),dText:e("dialog-text"),prompt:e("prompt"),boss:e("boss"),bossFill:e("boss-fill"),bossLag:e("boss-lag"),bossName:e("boss-name"),bars:e("hpbars"),title:e("title"),over:e("gameover"),combo:e("combo"),comboN:e("combo-n"),kills:e("kills"),best:e("best"),toast:e("toast"),flash:e("flash")},this.hpLag=1,this.bossLag=1,this.dialogState=null,this.bars=new Map,this.bannerT=0,this.toastT=0}showHud(t){this.el.hud.classList.toggle("hidden",!t)}setClass(t,e=this.game.player){Vy(document.getElementById("portrait-cv"),t.id),document.getElementById("hero-name").innerHTML=`${t.title} <b>${t.name}</b><span class="lv">Lv.${e?.level??1}</span>`,this.refreshBag();for(let i of["atk","dash","skill","skill2","skill3"]){let n=t.labels[i];document.getElementById("sk-"+i).textContent=n,document.querySelectorAll(".lbl-"+i).forEach(s=>s.textContent=n)}document.querySelector("#combo span").textContent=t.hitWord}setQuest(t,e){let i=t+"|"+e;if(i===this.questKey)return;let n=!this.questKey||this.questKey.split("|")[0]!==t;if(this.questKey=i,this.el.questTitle.textContent=t,!n){this.el.quest.innerHTML=e;return}this.el.quest.innerHTML=e,this.el.quest.parentElement.classList.remove("pulse"),this.el.quest.parentElement.offsetWidth,this.el.quest.parentElement.classList.add("pulse")}banner(t,e="",i=2.6,n=""){this.el.bannerMain.textContent=t,this.el.bannerSub.textContent=e,this.el.banner.className="show "+n,this.bannerT=i}slots(t){return this.slotCache=this.slotCache||{},this.slotCache[t]||(this.slotCache[t]=[...document.querySelectorAll(`[data-slot="${t}"]`)].map(e=>({el:e,cd:e.querySelector(".cd"),t:e.querySelector(".cdt")}))),this.slotCache[t]}setCd(t,e,i){this.cdState=this.cdState||{};let n=e>.02,s=n?e>=1?String(Math.ceil(e)):e.toFixed(1):"",o=n?(e/i*100).toFixed(1)+"%":"0%",a=this.cdState[t];for(let l of this.slots(t))l.cd.style.setProperty("--p",o),l.t.textContent!==s&&(l.t.textContent=s),l.el.classList.toggle("cooling",n),a&&!n&&(l.el.classList.remove("ready"),l.el.offsetWidth,l.el.classList.add("ready"));this.cdState[t]=n}setLock(t,e){for(let i of this.slots(t))if(i.el.classList.toggle("locked",!!e),e){i.cd.style.setProperty("--p","0%");let n=`Lv${e}`;i.t.textContent!==n&&(i.t.textContent=n),i.el.classList.remove("cooling")}else i.t.textContent.startsWith("Lv")&&(i.t.textContent="")}showBag(t){document.getElementById("bag").classList.toggle("show",t),t&&this.refreshBag()}itemRow(t,e,i){let n=ei(t),s=document.createElement("div");s.className="it "+e;let o=document.createElement("canvas");o.width=o.height=16,Yu(o,t);let a=document.createElement("div");return a.innerHTML=`<span style="color:${tn[n.tier].color}">${n.name}</span><small>${tn[n.tier].name} \xB7 ${Vu(n,!e.includes("locked-it"))}</small>`,s.append(o,a),i&&s.addEventListener("click",l=>{l.stopPropagation(),i()}),s}refreshBag(){let t=this.game;if(!t||!t.player||!document.getElementById("bag").classList.contains("show"))return;let e=t.player,i=t.progressOf(e.cls);document.getElementById("bag-stats").innerHTML=`${e.cfg.title} ${e.cfg.name} <b>Lv.${e.level}</b><br>\uACBD\uD5D8\uCE58 <b>${Math.floor(e.exp)}</b> / ${qr(e.level)}<br>\uCD5C\uB300 \uCCB4\uB825 <b>${e.maxHp}</b><br>\uACF5\uACA9\uB825 <b>\xD7${e.atkMul.toFixed(2)}</b><br>\uBC1B\uB294 \uD53C\uD574 <b>-${Math.round(e.def*100)}%</b>`;for(let[o,a]of[["eq-weapon",i.weapon],["eq-outfit",i.outfit]]){let l=document.getElementById(o);l.innerHTML="";let c=this.itemRow(a,"on");l.append(...c.childNodes)}let n=document.getElementById("bag-weapons"),s=document.getElementById("bag-outfits");n.innerHTML="",s.innerHTML="";for(let o of[e.cls,...Object.keys(zn).filter(a=>a!==e.cls)])for(let a of zn[o]){if(!t.inv.has(a.id)){o===e.cls&&n.append(this.itemRow(a.id,"locked-it"));continue}let l=o===e.cls;n.append(this.itemRow(a.id,(i.weapon===a.id?"on":"")+(l?"":" other"),l?()=>t.equipItem(a.id):null))}for(let o of[...hl].sort((a,l)=>a.tier-l.tier)){if(!t.inv.has(o.id)){s.append(this.itemRow(o.id,"locked-it"));continue}s.append(this.itemRow(o.id,i.outfit===o.id?"on":"",()=>t.equipItem(o.id)))}}denied(t){for(let e of this.slots(t))e.el.classList.remove("denied"),e.el.offsetWidth,e.el.classList.add("denied")}saveMark(){let t=document.getElementById("savemark");t&&(t.classList.remove("show"),t.offsetWidth,t.classList.add("show"))}toast(t,e=2.2){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e}flash(t,e){let i=this.el.flash;i.style.transition="none",i.style.background=t,i.style.opacity=String(e),requestAnimationFrame(()=>{i.style.transition="opacity 0.35s",i.style.opacity="0"})}dialog(t,e,i){this.dialogState={name:t,lines:e,i:0,shown:0,onDone:i,acc:0},this.el.dialog.classList.add("show"),this.el.dName.textContent=t,this.el.dText.textContent=""}get inDialog(){return!!this.dialogState}advance(){let t=this.dialogState;if(!t)return;let e=t.lines[t.i];if(t.shown<e.length){t.shown=e.length,this.el.dText.textContent=e;return}t.i++,t.shown=0,t.acc=0,t.i>=t.lines.length&&(this.el.dialog.classList.remove("show"),this.dialogState=null,t.onDone&&t.onDone())}setBoss(t){this.bossEnemy=t,this.el.boss.classList.toggle("show",!!t),t&&(this.el.bossName.textContent=t.name||"\uB3C4\uAE68\uBE44 \uB300\uC655",this.bossLag=1)}update(t){let e=this.game,i=e.player,n=this.el,s=i.hp/i.maxHp;this.hpLag=Math.max(s,this.hpLag-t*.5),n.hpFill.style.width=(s*100).toFixed(1)+"%",n.hpLag.style.width=(this.hpLag*100).toFixed(1)+"%",n.hpText.textContent=`${Math.ceil(i.hp)} / ${i.maxHp}`,n.hpFill.classList.toggle("low",s<.3);let o=qr(i.level);document.getElementById("exp-fill").style.width=(i.exp/o*100).toFixed(1)+"%";let a=`EXP ${Math.floor(i.exp)} / ${o}`,l=document.getElementById("exp-text");l.textContent!==a&&(l.textContent=a),document.getElementById("bag-dot").classList.toggle("hidden",!this.newItem),this.setCd("dash",i.dashCd,i.dashMax||.5),this.setCd("skill",i.skillCd,i.skillMax);for(let f of[2,3]){let p="skill"+f;i.level<xn[f]?this.setLock(p,xn[f]):(this.setLock(p,0),this.setCd(p,(f===2?i.cd2:i.cd3)||0,f===2?i.cd2Max:i.cd3Max))}if(n.kills.textContent=e.kills,n.best&&(n.best.textContent=e.bestCombo),this.bossEnemy){let f=this.bossEnemy,p=Math.max(0,f.hp/f.maxHp);this.bossLag=Math.max(p,this.bossLag-t*.4),n.bossFill.style.width=(p*100).toFixed(1)+"%",n.bossLag.style.width=(this.bossLag*100).toFixed(1)+"%",f.dead&&this.bossLag<=.001&&this.setBoss(null)}this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&n.banner.classList.remove("show")),this.toastT>0&&(this.toastT-=t,this.toastT<=0&&n.toast.classList.remove("show")),e.hitCombo>=2&&e.time-e.lastHitTime<2?(n.combo.classList.add("show"),n.comboN.textContent=e.hitCombo):n.combo.classList.remove("show");let c=this.dialogState;if(c){let f=c.lines[c.i];if(c.shown<f.length){c.acc+=t*38;let p=c.shown;c.shown=Math.min(f.length,Math.floor(c.acc)),c.shown>p&&c.shown%2===0&&e.audio.play("talk"),n.dText.textContent=f.slice(0,c.shown)}n.dialog.classList.toggle("done",c.shown>=f.length)}let h=e.pixel.pixelSize,u=new Set;for(let f of e.enemies){if(f.type==="boss"||f.dead||f.spawning||f.hp>=f.maxHp)continue;u.add(f);let p=this.bars.get(f);p||(p=document.createElement("div"),p.className="ebar",p.innerHTML="<i></i>",n.bars.appendChild(p),this.bars.set(f,p));let x=f.type==="wisp"?2:1.75,g=e.pixel.project({x:f.pos.x,y:f.y+x,z:f.pos.z,isVector3:!0,clone(){return this}});p.style.transform=`translate(${Math.round(g.x/h)*h}px, ${Math.round(g.y/h)*h}px)`,p.firstChild.style.width=f.hp/f.maxHp*100+"%"}for(let[f,p]of this.bars)u.has(f)||(p.remove(),this.bars.delete(f));let d=e.nearInteract;if(d&&!this.inDialog&&e.state==="play"){let f=e.pixel.project(d.promptPos);n.prompt.style.transform=`translate(${Math.round(f.x/h)*h}px, ${Math.round(f.y/h)*h}px)`,n.prompt.innerHTML=`<b>E</b>${d.label}`,n.prompt.classList.add("show")}else n.prompt.classList.remove("show")}},sf={sword:{bg:"#3a4878",rows:["....................",".......hhhhhh.......",".....hhhhhhhhhh.....","....hhhhhhhhhhhh....","...hhhhhhhhhhhhhh...","...rrrrrrrrrrrrrr...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","...hsseessssseessh..","...hsseWsssseeWsh...","...hsseessssseessh..","...hspssssssssspsh..","....ssssssmmsssss...",".....ssssssssssss...","......ssssssssss....",".......cwwwwwwc.....",".....wwwcwwwwcwww...","....wwwwwcwwcwwwwww.","...wwwwwwwccwwwwwwww"],col:{h:"#2a2024",r:"#c8302c",s:"#f6d6b6",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",w:"#eeeae0",c:"#2e4f8f"}},mage:{bg:"#4a3a78",rows:[".......kkkkkk.......",".......kkkkkk.......",".......kkkkkk.......",".......vvvvvv.......","kkkkkkkkkkkkkkkkkkkk","...hhhhhhhhhhhhhh...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","..bhsseessssseesshb.","...hsseWsssseeWsh...","..bhsseessssseesshb.","...hspssssssssspsh..","..b.ssssssmmsssss.b.",".....ssssssssssss...","......ssssssssss....",".......gnnnnnng.....",".....nnngnnnngnnn...","....nnnnngnngnnnnnn.","...nnnnnnnggnnnnnnnn"],col:{k:"#16141c",v:"#6a5ad8",h:"#1e1a24",s:"#f4d4b2",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",n:"#3a3a7a",g:"#e0b040",b:"#e0a84a"}},elf:{bg:"#2e5a3a",rows:["....................",".......hhhhhh.......",".....hhhhhhhhhhff...","....hhhhhhhhhhhfFf..","...hhhhhhhhhhhhhf...","...hhhhhhhhhhhhhh...","...hhhhsssshhhhhh...","..hhhsssssssssshhh..","s.hhssssssssssssh.s.","sshhsseessssseesshss","..hhsseWsssseeWshh..","..hhsseessssseesshh.","..hhspssssssssspshh.","..hh.ssssssmmssss.hh","..hh..ssssssssss..hh","..hh...ssssssss...hh","..hh...lgggggl....hh","..h..gggglgglggg...h","....ggggggllgggggg..","...gggggggggggggggg."],col:{h:"#e8e4c8",s:"#fbe2cc",e:"#2a6a4a",W:"#ffffff",p:"#f8a8b8",m:"#c86a60",g:"#5aa84e",l:"#bfe07a",f:"#ff9ac0",F:"#fff0a0"}}};function Vy(r,t="sword"){if(!r)return;let e=sf[t]||sf.sword,i=r.getContext("2d");i.fillStyle=e.bg,i.fillRect(0,0,20,20),e.rows.forEach((n,s)=>[...n].forEach((o,a)=>{e.col[o]&&(i.fillStyle=e.col[o],i.fillRect(a,s,1,1))}))}var ch="dot3d-palace-save-v1";function rf(){try{let r=localStorage.getItem(ch);if(!r)return null;let t=JSON.parse(r);return t&&t.v===1?t:null}catch{return null}}function of(r){try{return localStorage.setItem(ch,JSON.stringify({v:1,savedAt:Date.now(),...r})),!0}catch{return!1}}function af(){try{localStorage.removeItem(ch)}catch{}}var nn=48,yn=72,Wy={sword:"hero",mage:"mage",elf:"elf"},gl=new Uint8ClampedArray(256);for(let r=0;r<256;r++){let t=r/255;gl[r]=Math.round(255*(t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055))}var xl=class{constructor(t){this.game=t,this.renderer=t.pixel.renderer,this.target=new Ye(nn,yn,{magFilter:he,minFilter:he}),this.buf=new Uint8Array(nn*yn*4),this.scene=new hn;let e=this.camera=new Ui(-.78,.78,1.17,-1.17,.1,20);e.position.set(0,1.02+6*.18,6),e.lookAt(0,1.02,0);let i=new Ln("#fff0d6",2.6);i.position.set(2,4,3),this.scene.add(i,new es("#dfe9ff","#5a4a3a",1.2));let n=new Ln("#8ab0ff",1.2);n.position.set(-3,2,-3),this.scene.add(n),this.cards=[...document.querySelectorAll("#classes .cls")].map(s=>{let o=s.querySelector("canvas");return o.width=nn,o.height=yn,o.classList.add("full"),{el:s,cls:s.dataset.cls,ctx:o.getContext("2d"),img:o.getContext("2d").createImageData(nn,yn),rig:null,yaw:.5,t:Math.random()*5}}),this.rebuild()}rebuild(){for(let t of this.cards){t.rig&&this.scene.remove(t.rig.root);let e=this.game.progressOf(t.cls),i=ei(e.weapon),n=ei(e.outfit);t.rig=en[t.cls].make({wstyle:i?.style,...dl(Wy[t.cls],n)}),t.rig.root.visible=!1,this.scene.add(t.rig.root)}}update(t){let e=this.renderer,i=e.getRenderTarget(),n=e.getClearColor(new ct),s=e.getClearAlpha();e.setClearColor(0,0);for(let o of this.cards){let a=o.el.classList.contains("sel");o.t+=t,o.yaw=a?o.yaw+t*.9:o.yaw+(.5-o.yaw)*Math.min(1,t*3);let l=o.rig;l.root.visible=!0,l.root.rotation.y=o.yaw;let c=o.t%4,h=a&&c>3?{t:c-3,kind:o.cls==="sword"?0:o.cls==="mage"?10:20}:null;l.animate(t,{speed:0,attack:h,sheathing:0,dash:!1,hurt:0,dead:!1}),e.setRenderTarget(this.target),e.clear(),e.render(this.scene,this.camera),e.readRenderTargetPixels(this.target,0,0,nn,yn,this.buf),l.root.visible=!1,this.blit(o,a)}e.setRenderTarget(i),e.setClearColor(n,s)}blit(t,e){let i=this.buf,n=t.img.data,s=(a,l)=>a<0||l<0||a>=nn||l>=yn?0:i[((yn-1-l)*nn+a)*4+3],o=e?[26,18,10]:[10,8,16];for(let a=0;a<yn;a++)for(let l=0;l<nn;l++){let c=(a*nn+l)*4,h=((yn-1-a)*nn+l)*4;i[h+3]>0?(n[c]=gl[i[h]],n[c+1]=gl[i[h+1]],n[c+2]=gl[i[h+2]],n[c+3]=255):s(l-1,a)||s(l+1,a)||s(l,a-1)||s(l,a+1)?(n[c]=o[0],n[c+1]=o[1],n[c+2]=o[2],n[c+3]=255):n[c+3]=0}t.ctx.putImageData(t.img,0,0)}};var Hn={palace:{id:"palace",han:"\u6708\u4E0B\u5BAE",name:"\uC6D4\uD558\uAD81",sub:"\uB3C4\uAE68\uBE44 \uC57C\uD589",next:"bamboo",prev:null,lvl:0,foe:"\uB3C4\uAE68\uBE44",night:["\uB3C4\uAE68\uBE44 \uC57C\uD589","\uBD81\uC18C\uB9AC\uC5D0 \uB3C4\uAE68\uBE44\uB4E4\uC774 \uAE68\uC5B4\uB09C\uB2E4\u2026"],exit:{x:0,z:26.5},entry:null,summonLine:'\uB450\uC5B5\uC2DC\uB2C8: "\uC598\uB4E4\uC544, \uB098\uC640\uB77C \uB69D\uB531!"',waves(r,t){return r===1?[["blue",4+t],["red",t]]:r===2?[["blue",3+t],["red",2+t],["wisp",2+Math.floor(t/2)]]:[["boss",1],["red",2+t],["wisp",t]]},theme:{sun:["#fff0d6","#8ea6ff"],sunI:[2.5,.9],sky:["#dfe9ff","#55669e"],ground:["#8a7c62","#262438"],hemiI:[1.15,.95],bg:["#3b4a3a","#0e1220"],ambient:"petal"}},bamboo:{id:"bamboo",han:"\u7AF9\u6797",name:"\uC8FD\uB9BC",sub:"\uC5EC\uC6B0 \uC6B8\uC74C",next:"temple",prev:"palace",lvl:2,foe:"\uC5EC\uC6B0",night:["\uC5EC\uC6B0 \uC6B8\uC74C","\uBC29\uC6B8 \uC18C\uB9AC\uC5D0 \uC5EC\uC6B0\uB4E4\uC774 \uBAB0\uB824\uC628\uB2E4\u2026"],exit:{x:0,z:-22.5},entry:{x:0,z:19.5},summonLine:'\uAD6C\uBBF8\uD638: "\uC544\uAC00\uB4E4\uC544, \uC800 \uC0AC\uB78C\uC758 \uAC04\uC744 \uBE7C \uC624\uB108\uB77C!"',waves(r,t){return r===1?[["fox",4+t],["foxfire",t]]:r===2?[["fox",3+t],["foxfire",2+t]]:[["gumiho",1],["fox",2+t],["foxfire",1+Math.floor(t/2)]]},theme:{sun:["#ffd8a0","#7ab0b0"],sunI:[2.2,.8],sky:["#d8ecc8","#3a5e58"],ground:["#5a6a3a","#1a2420"],hemiI:[1.1,.95],bg:["#2e3e26","#08120e"],ambient:"leaf"}},temple:{id:"temple",han:"\u96EA\u5BFA",name:"\uC124\uC6D0 \uD3D0\uC0AC\uCC30",sub:"\uC800\uC2B9\uC758 \uBB38",next:"palace",prev:"bamboo",lvl:4,foe:"\uB9DD\uC790",night:["\uC800\uC2B9\uC758 \uBB38","\uBC94\uC885 \uC18C\uB9AC\uC5D0 \uB9DD\uC790\uB4E4\uC774 \uAE68\uC5B4\uB09C\uB2E4\u2026"],exit:{x:15,z:13},entry:{x:0,z:19.5},summonLine:'\uC800\uC2B9\uC0AC\uC790: "\uBA85\uBD80\uC5D0 \uC774\uB984\uC774 \uC624\uB978 \uC790\uB4E4\uC544, \uC77C\uC5B4\uB098\uB77C\u2026"',waves(r,t){return r===1?[["jiangshi",4+t]]:r===2?[["jiangshi",2+t],["ghost",3+t]]:[["reaper",1],["ghost",2+t],["jiangshi",1+t]]},theme:{sun:["#f4f8ff","#8ea6ff"],sunI:[2.4,1],sky:["#e8f0ff","#5a6a9e"],ground:["#c8d4e8","#2a3050"],hemiI:[1.2,1],bg:["#b8c4d4","#0c1020"],ambient:"snow"}}},hh=new Set(["boss","gumiho","reaper"]);var St=(r,t,e)=>new A(r,t,e),dh=class{constructor(){this.pixel=new rl(document.getElementById("stage"));let t=this.scene=new hn;t.background=new ct("#3b4a3a"),this.time=0,this.state="title",this.night=0,this.nightTarget=0,this.hitstop=0,this.shakeAmt=0,this.kills=0,this.hitCombo=0,this.lastHitTime=-10,this.alarm=0,this.enemies=[],this.projectiles=[],this.timers=[],this.rains=[],this.tornados=[],this.spawnQueue=[],this.wave=0,this.round=0,this.stage=0,this.waveActive=!1,this.focus=St(0,0,10),this.lead=St(),this.setupLights(),this.world=new Gr(t),this.fx=new ll(t,this.pixel),this.audio=new cl,this.ui=new ml(this),this.progress={},this.inv=new Set(["sw0","mg0","bw0","ot0"]),this.drops=[],this.target=null,this.paused=!1,this.player=new fl(this),this.buildTargetMarker(),this.mapId="palace",this.map=Hn.palace,this.cleared={},this.portals=[],this.npcs=[],this.birds=[],this.createPalaceActors(),this.buildPortals(),this.world.buildNav(),this.flowT=0,this.setupInput(),this.bestCombo=0,this.saveT=15,this.selectedCls="sword",this.setupClassSelect(),this.applySave(rf()),this.preview=new xl(this),this.ui.setClass(this.player.cfg),this.updateQuest(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.save(!1)}),window.addEventListener("pagehide",()=>this.save(!1)),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}setupLights(){let t=this.scene;this.hemi=new es("#dfe9ff","#8a7c62",1.15),t.add(this.hemi);let e=this.sun=new Ln("#fff0d6",2.5);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let i=e.shadow.camera;i.left=-30,i.right=30,i.top=30,i.bottom=-30,i.near=1,i.far=140,e.shadow.bias=-6e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sunOffset=St(-16,30,14),this.points=[];for(let n=0;n<8;n++){let s=new Tr("#ffb35c",0,9,1.4);t.add(s),this.points.push(s)}this.lightTimer=0}updateLights(t){let e=this.night;wi.night.value=e;let i=(p,x)=>new ct(p).lerp(new ct(x),e),n=this.map.theme;this.sun.color.copy(i(...n.sun)),this.sun.intensity=Et(n.sunI[0],n.sunI[1],e),this.hemi.color.copy(i(...n.sky)),this.hemi.groundColor.copy(i(...n.ground)),this.hemi.intensity=Et(n.hemiI[0],n.hemiI[1],e),this.scene.background.copy(i(...n.bg)),this.world.setNight(e);let s=this.focus,o=Xy.copy(this.sunOffset).normalize(),a=qy.crossVectors(lf.set(0,1,0),o).normalize(),l=lf.crossVectors(o,a).normalize(),c=60/2048,h=Math.round(s.dot(a)/c)*c,u=Math.round(s.dot(l)/c)*c,d=s.dot(o),f=Yy.copy(a).multiplyScalar(h).addScaledVector(l,u).addScaledVector(o,d);if(this.sun.target.position.copy(f),this.sun.position.copy(f).add(this.sunOffset),this.sun.target.updateMatrixWorld(),this.lightTimer-=t,this.lightTimer<=0){this.lightTimer=.25;let p=[...this.world.lanterns].sort((g,m)=>g.distanceToSquared(s)-m.distanceToSquared(s)),x=this.world.hallLightPos;for(let g=0;g<8;g++){let m=x&&g>=6?x[g-6]:p[g];m?this.points[g].position.copy(m):this.points[g].position.set(0,-50,0)}}for(let p=0;p<8;p++){let x=1+Math.sin(this.time*9+p*1.7)*.06+Math.sin(this.time*23+p)*.04;this.points[p].intensity=e*(p<6?22:30)*x,this.points[p].distance=p<6?8:11}}setupInput(){this.keys=new Set,this.input={mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null},this.mouse={x:0,y:0,t:-10},window.addEventListener("keydown",e=>{if(e.code==="Tab"&&e.preventDefault(),e.repeat){this.keys.add(e.code);return}this.keys.add(e.code),this.onKey(e.code,e)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear());let t=document.getElementById("app");t.addEventListener("mousemove",e=>{this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time}),t.addEventListener("mousedown",e=>{if(this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time,this.state==="title"){let i=e.target.closest&&e.target.closest(".cls");i&&this.selectClass(i.dataset.cls),this.start();return}if(this.audio.unlock(),this.paused){(code==="KeyB"||code==="Escape"||code==="Tab")&&this.toggleBag(!1);return}if(this.ui.inDialog){this.ui.advance();return}this.state==="play"&&(e.button===0&&this.player.startAttack(this.readInput()),e.button===2&&!this.cdCheck("skill",this.player.skillCd)&&this.player.startSkill(this.readInput()))}),t.addEventListener("contextmenu",e=>e.preventDefault());for(let e of["bag-btn","bag"]){let i=document.getElementById(e);i.addEventListener("mousedown",n=>n.stopPropagation()),i.addEventListener("touchstart",n=>n.stopPropagation(),{passive:!0})}document.getElementById("bag-btn").addEventListener("click",()=>{this.state==="play"&&this.toggleBag()}),document.getElementById("bag-close").addEventListener("click",()=>this.toggleBag(!1)),t.addEventListener("wheel",e=>{this.pixel.zoom(e.deltaY>0?-1:1),this.saveT=Math.min(this.saveT,2)},{passive:!0}),this.setupTouch()}setupTouch(){let t=document.getElementById("touch");if(!("ontouchstart"in window))return;t.classList.add("on"),document.body.classList.add("touch"),document.getElementById("dialog").addEventListener("touchstart",c=>{c.preventDefault(),this.ui.advance()},{passive:!1}),document.getElementById("gameover").addEventListener("touchstart",c=>{c.preventDefault(),this.state==="dead"&&this.retry()},{passive:!1});let e=document.getElementById("stick"),i=e.firstElementChild;this.touchMove={x:0,z:0};let n=null,s=0,o=0,a=document.getElementById("stick-area");a.addEventListener("touchstart",c=>{this.state==="title"&&this.start();let h=c.changedTouches[0];n=h.identifier,s=h.clientX,o=h.clientY,e.style.left=s+"px",e.style.top=o+"px",e.classList.add("show"),c.preventDefault()},{passive:!1}),a.addEventListener("touchmove",c=>{for(let h of c.changedTouches)if(h.identifier===n){let u=h.clientX-s,d=h.clientY-o,f=Math.hypot(u,d),p=50;f>p&&(u*=p/f,d*=p/f),i.style.transform=`translate(${u}px, ${d}px)`,this.touchMove.x=u/p,this.touchMove.z=d/p}c.preventDefault()},{passive:!1});let l=c=>{for(let h of c.changedTouches)h.identifier===n&&(n=null,this.touchMove.x=0,this.touchMove.z=0,i.style.transform="",e.classList.remove("show"))};a.addEventListener("touchend",l),a.addEventListener("touchcancel",l);for(let c of document.querySelectorAll("#touch [data-k]"))c.addEventListener("touchstart",h=>{h.preventDefault(),this.state==="title"?this.start():this.onKey(c.dataset.k)},{passive:!1})}readInput(){let t=this.keys,e=0,i=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(i-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i+=1),this.touchMove&&(this.touchMove.x||this.touchMove.z)&&(e=this.touchMove.x,i=this.touchMove.z);let n=Math.hypot(e,i),s=this.input;return s.moveLen=Math.min(1,n),s.mx=n>0?e/Math.max(1,n):0,s.mz=n>0?i/Math.max(1,n):0,n>1&&(s.mx=e/n,s.mz=i/n),s.mouseRecent=this.time-this.mouse.t<3,s.mouseWorld=s.mouseRecent?this.pixel.unproject(this.mouse.x,this.mouse.y,this.player.pos.y+.6):null,(this.ui.inDialog||this.state!=="play")&&(s.moveLen=0,s.mx=s.mz=0),s}setupClassSelect(){for(let t of document.querySelectorAll("#classes .cls")){let e=en[t.dataset.cls];t.querySelector(".role").textContent=e.role,t.querySelector(".desc").textContent=e.desc}this.selectClass(this.selectedCls)}selectClass(t){if(en[t]){this.selectedCls=t;for(let e of document.querySelectorAll("#classes .cls"))e.classList.toggle("sel",e.dataset.cls===t);this.player.cls!==t&&(this.player.setClass(t),this.ui.setClass(this.player.cfg))}}createPalaceActors(){this.npcs=[new Zr(this,"guard",-12.4,6.4,.6,"\uC218\uBB38\uC7A5 \uBC15\uB3CC\uC1E0",[]),new Zr(this,"lady",19.2,7.5,-.9,"\uB098\uC778 \uC5F0\uC774",["\uC5B4\uBA38, \uAC80\uAC1D\uB2D8. \uC774 \uAD81\uC740 \uBC24\uB9CC \uB418\uBA74 \uB3C4\uAE68\uBE44\uBD88\uC774 \uB5A0\uB2E4\uB140\uC694.","\uB3C4\uAE68\uBE44\uB4E4\uC740 \uC7A5\uB09C\uC774 \uC2EC\uD558\uC9C0\uB9CC, \uD63C\uCB50\uC744 \uB0B4\uC8FC\uBA74 \uAE08\uBC29 \uB2EC\uC544\uB09C\uB2F5\uB2C8\uB2E4.","\uD478\uB978 \uBD88\uB369\uC774\uB97C \uC3D8\uB294 \uB140\uC11D\uC740 \uAC80\uC73C\uB85C \uCCD0\uB0B4\uBA74 \uD295\uACA8\uB0BC \uC218 \uC788\uB300\uC694!","(N \uD0A4\uB85C \uB0AE\uACFC \uBC24\uC744 \uBC14\uAFD4 \uBCFC \uC218 \uC788\uC5B4\uC694. \uC2F8\uC6B0\uB294 \uC911\uC5D4 \uC548 \uB3FC\uC694.)"])],this.birds=[];for(let[t,e]of[[-6,6],[-5.4,6.6],[6.5,15],[7,14.3],[-15,9],[14,-.5],[.5,-9.5]])this.birds.push(new pl(this,St(t,this.world.heightAt(t,e),e)))}removeActors(){for(let t of this.npcs)this.scene.remove(t.rig.root);for(let t of this.birds)this.scene.remove(t.root);this.npcs=[],this.birds=[]}buildPortals(){for(let i of this.portals)this.scene.remove(i.g);this.portals=[];let t=this.map,e=(i,n,s)=>{if(!i||!n)return;let o=this.world.heightAt(i.x,i.z),a=new Nt;a.position.set(i.x,o,i.z);let l=new at(new oi(1.25,.13,6,24),new Kt({color:s}));l.position.y=1.45;let c=new at(new vi(1.15,24),new Kt({color:s,transparent:!0,opacity:.35,blending:Be,depthWrite:!1,side:de}));c.position.y=1.45;let h=new at(new Ht(1.4,1.5,.12,16),this.world.M.stoneGrey);h.position.y=.06,h.receiveShadow=!0,a.add(l,c,h),this.scene.add(a),this.portals.push({g:a,ring:l,inner:c,to:n,pos:St(i.x,o,i.z),color:s})};e(t.entry,t.prev,"#9ad0ff"),this.cleared[t.id]&&e(t.exit,t.next,t.next==="palace"?"#ffd76a":"#c890ff")}updatePortals(t){let e=this.player;for(let i of this.portals){if(i.ring.rotation.z+=t*1.5,i.inner.rotation.z-=t*2,i.inner.material.opacity=.3+Math.sin(this.time*4)*.08,i.g.rotation.y=0,Math.random()<t*30){let n=Math.random()*Math.PI*2;this.fx.add.emit({x:i.pos.x+Math.cos(n)*1.2,y:i.pos.y+1.45+Math.sin(n)*1.2,z:i.pos.z,vx:-Math.cos(n)*1.2,vy:-Math.sin(n)*1.2,life:.8,size:2,color:"#ffffff",color2:i.color})}this.state==="play"&&!this.traveling&&!this.waveActive&&Math.hypot(e.pos.x-i.pos.x,e.pos.z-i.pos.z)<1&&this.travel(i.to)}}travel(t){if(this.traveling)return;this.traveling=!0,this.audio.play("portal");let e=document.getElementById("fade");e.classList.add("on"),setTimeout(()=>{this.switchMap(t,this.mapId),setTimeout(()=>{e.classList.remove("on"),this.traveling=!1},120)},450)}switchMap(t,e=null){for(let a of this.enemies)a.dispose();this.enemies=[],this.spawnQueue=[];for(let a of this.projectiles)a.mesh&&this.scene.remove(a.mesh);this.projectiles=[],this.timers=[];for(let a of this.rains)this.fx.removeRing(a.tele);this.rains=[];for(let a of this.tornados)for(let l of a.rings)this.scene.remove(l);this.tornados=[];for(let a of this.drops)this.scene.remove(a.g);this.drops=[],this.target=null,this.ui.setBoss(null),this.waveActive=!1,this.waveClearing=!1,this.wave=0,this.removeActors(),this.world.dispose(),this.mapId=t,this.map=Hn[t],this.world=new Gr(this.scene,t),t==="palace"&&this.createPalaceActors(),this.world.buildNav(),this.flowT=0,this.lightTimer=0,this.buildPortals();let i=this.player,n=e&&Hn[t].next===e&&this.map.exit,s=n?St(this.map.exit.x,0,this.map.exit.z+(this.map.exit.z>0?-2.5:2.5)):this.world.spawn.clone();t==="temple"&&n&&s.set(this.map.exit.x-2.5,0,this.map.exit.z),i.pos.set(s.x,this.world.heightAt(s.x,s.z),s.z),i.y=i.pos.y,i.vel.set(0,0,0),i.yaw=n?0:Math.PI,this.focus.copy(i.pos),this.nightTarget=0,this.night=0,this.audio.mood="day",this.stage=t==="palace"?this.round>0||this.cleared.palace?3:Math.max(this.stage===0?0:1,0):this.cleared[t]?3:1,t==="palace"&&this.stage!==0&&!this.cleared.palace&&(this.stage=1);let o=document.getElementById("logo");o&&(o.innerHTML=`<span class="han">${this.map.han}</span><span class="sub">${this.map.sub}</span>`),this.ui.banner(this.map.name,this.map.sub,2.6,"title-banner"),this.updateQuest(),this.save(!1)}progressOf(t){return this.progress[t]||(this.progress[t]={level:1,exp:0,weapon:zn[t][0].id,outfit:"ot0"}),this.progress[t]}buildTargetMarker(){let t=new Nt,e=new Kt({color:"#ff5a3a",transparent:!0,opacity:.85,blending:Be,depthWrite:!1}),i=new at(new Qn(.85,1,24,1),e);i.rotation.x=-Math.PI/2;let n=new Kt({color:"#ffe0a0",transparent:!0,blending:Be,depthWrite:!1}),s=new Nt;for(let a=0;a<4;a++){let l=new at(new ve(.34,.1),n),c=a/4*Math.PI*2;l.position.set(Math.cos(c)*1.15,0,Math.sin(c)*1.15),l.rotation.set(-Math.PI/2,0,-c+Math.PI/2),s.add(l)}let o=new at(new ne(.24,.48,4),new Kt({color:"#ff6a3a"}));o.rotation.x=Math.PI,o.userData.noOutline=!0,t.add(i,s,o),t.visible=!1,this.scene.add(t),this.marker={g:t,ring:i,ticks:s,arrow:o}}targetRange(){return this.player.cls==="sword"?7:12}validTarget(t){if(!t||t.dead||t.spawning)return!1;let e=this.player.pos;return Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<this.targetRange()+2}updateTarget(t=!1){let e=this.player.pos,i=this.enemies.filter(n=>!n.dead&&!n.spawning).map(n=>({e:n,d:Math.hypot(n.pos.x-e.x,n.pos.z-e.z)})).filter(n=>n.d<this.targetRange()).sort((n,s)=>n.d-s.d);if(t&&i.length){let n=i.findIndex(s=>s.e===this.target);this.target=i[(n+1)%i.length].e,this.audio.play("talk");return}if(this.validTarget(this.target)){let n=Math.hypot(this.target.pos.x-e.x,this.target.pos.z-e.z);i.length&&i[0].e!==this.target&&i[0].d<n-2.5&&(this.target=i[0].e);return}this.target=i.length?i[0].e:null}updateMarker(t){let e=this.marker,i=this.target;if(e.g.visible=!!i&&this.state==="play",!e.g.visible)return;let n=i.isBoss?1.6:i.isWisp?.7:.8;e.g.position.set(i.pos.x,i.y+.05,i.pos.z);let s=1+Math.sin(this.time*8)*.06;e.ring.scale.setScalar(n*s),e.ticks.scale.setScalar(n*(1.05+Math.sin(this.time*8)*.1)),e.ticks.rotation.y+=t*1.5;let o=i.isBoss?4.4:i.isWisp?2.3:2.2;e.arrow.position.set(0,o+Math.abs(Math.sin(this.time*5))*.25,0)}onLevelUp(t,e){let i=St(t.pos.x,t.y,t.pos.z);this.audio.play("levelup"),this.ui.flash("#ffd060",.35),this.ui.banner("LEVEL UP",`${t.cfg.title} ${t.cfg.name} \xB7 Lv.${t.level}`,2.4,"win-banner"),this.fx.circle(i,2.2,"#ffd060",1.4,2),this.fx.ring(i,3,"#fff2c0",.5);for(let n=0;n<70;n++){let s=Math.random()*Math.PI*2,o=R(.2,.9);this.fx.add.emit({x:i.x+Math.cos(s)*o,y:i.y+R(0,.5),z:i.z+Math.sin(s)*o,vy:R(2,7),drag:1,life:R(.6,1.3),size:R(2,4),endSize:1,color:"#fff6c0",color2:"#ffa020"})}for(let n of[2,3])if(t.level-e<xn[n]&&t.level>=xn[n]){let s=t.cfg.labels["skill"+n];setTimeout(()=>this.ui.toast(`\uC0C8 \uC2A4\uD0AC \uD574\uAE08: ${s} (${n===2?"L":"I"})`,3),900)}this.ui.setClass(t.cfg,t),this.save(!1)}spawnDrop(t,e){let i=ei(e),n=new ct(tn[i.tier].color),s=new Nt,o=new at(new dt(.34,.34,.34),new Kt({color:n})),a=new at(new dt(.2,.2,.2),new Kt({color:"#ffffff"}));a.userData.noOutline=!0,o.add(a);let l=new at(new Ht(.16,.3,4,8,1,!0),new Kt({color:n,transparent:!0,opacity:.35,blending:Be,depthWrite:!1,side:de}));l.position.y=2,s.add(o,l),s.position.set(t.x,this.world.heightAt(t.x,t.z),t.z),this.scene.add(s);let c=St(R(-2,2),5,R(-2,2));this.drops.push({id:e,g:s,box:o,beam:l,vel:c,y:.6,t:0,col:n}),this.fx.ring(s.position,1.2,tn[i.tier].color,.4)}updateDrops(t){let e=this.player;for(let i=this.drops.length-1;i>=0;i--){let n=this.drops[i];n.t+=t;let s=this.world.heightAt(n.g.position.x,n.g.position.z);n.t<.8?(n.vel.y-=14*t,this.world.move(n.g.position,n.vel.x*t,n.vel.z*t,.1),n.y=Math.max(.35,n.y+n.vel.y*t)):n.y=.45+Math.sin(n.t*3)*.08,n.box.rotation.y+=t*2.5,n.box.position.y=n.y,n.g.position.y=s,n.beam.material.opacity=.25+Math.sin(n.t*5)*.08,Math.random()<t*8&&this.fx.add.emit({x:n.g.position.x+R(-.3,.3),y:s+R(.2,1.5),z:n.g.position.z+R(-.3,.3),vy:.8,life:.6,size:2,color:"#ffffff",color2:"#"+n.col.getHexString()});let o=Math.hypot(e.pos.x-n.g.position.x,e.pos.z-n.g.position.z);if(n.t>.8&&o<3.5&&!e.dead){let a=Math.min(1,t*8);n.g.position.x+=(e.pos.x-n.g.position.x)*a,n.g.position.z+=(e.pos.z-n.g.position.z)*a}n.t>.8&&o<.7&&(this.scene.remove(n.g),this.drops.splice(i,1),this.pickup(n.id))}}pickup(t){let e=ei(t),i=tn[e.tier],n=this.player;this.audio.play("coin"),this.fx.spark(n.pos.x,n.y+1,n.pos.z,14,i.color,4),this.inv.has(t)?(n.addExp(15+e.tier*15),this.ui.toast(`\uC774\uBBF8 \uAC00\uC9C4 ${e.name} \u2192 \uACBD\uD5D8\uCE58 +${15+e.tier*15}`,2.2)):(this.inv.add(t),e.perk?(this.ui.banner(e.name,"\uBCF4\uC2A4 \uC804\uC6A9 \uC7A5\uBE44 \uD68D\uB4DD! \u2014 B \uD0A4\uB85C \uCC29\uC6A9",2.6,"win-banner"),this.audio.play("levelup"),this.fx.ring(n.pos,2.4,i.color,.5),this.fx.colorFire(n.pos.x,n.y+.5,n.pos.z,40,.6,"#ffe0a0",i.color)):this.ui.toast(`\uD68D\uB4DD! [${i.name}] ${e.name} \u2014 B \uD0A4\uB85C \uAC00\uBC29 \uC5F4\uAE30`,3),this.ui.newItem=!0,this.ui.refreshBag()),this.save(!1)}toggleBag(t=!this.paused){this.paused=t,this.ui.showBag(t),t&&(this.ui.newItem=!1)}equipItem(t){let e=this.player,i=ei(t);if(!i||!this.inv.has(t))return;if(i.kind==="weapon"&&i.cls!==e.cls){this.ui.toast("\uB2E4\uB978 \uC9C1\uC5C5\uC758 \uBB34\uAE30\uC608\uC694"),this.audio.play("denied");return}e.equip(t),this.audio.play(i.kind==="weapon"?"draw":"coin");let n=St(e.pos.x,e.y,e.pos.z);this.fx.ring(n,1.6,tn[i.tier].color,.4);for(let s=0;s<30;s++)this.fx.add.emit({x:n.x+R(-.4,.4),y:n.y+R(0,1.6),z:n.z+R(-.4,.4),vy:R(.5,2),life:R(.4,.8),size:2,color:"#ffffff",color2:tn[i.tier].color});this.ui.setClass(e.cfg,e),this.ui.refreshBag(),this.save(!1)}applySave(t){let e=document.getElementById("title-save");if(!t){e&&(e.textContent="");return}if(this.kills=t.kills|0,this.round=t.round|0,this.bestCombo=t.bestCombo|0,this.stage=this.round>0?3:Math.min(1,t.stage|0),t.music===!1&&this.audio.musicOn&&this.audio.toggleMusic(),t.outline===0&&(this.pixel.compMat.uniforms.outline.value=0),typeof t.zoom=="number"&&t.zoom!==this.pixel.userZoom&&(this.pixel.userZoom=t.zoom,this.pixel.resize()),t.night&&(this.nightTarget=1,this.night=1),t.progress)for(let n of Object.keys(en))t.progress[n]&&Object.assign(this.progressOf(n),t.progress[n]);if(Array.isArray(t.inv))for(let n of t.inv)ei(n)&&this.inv.add(n);t.cleared?this.cleared={...t.cleared}:t.round>0&&(this.cleared={palace:!0}),t.mapId&&Hn[t.mapId]&&t.mapId!==this.mapId?this.switchMap(t.mapId):this.buildPortals();let i=t.cls&&en[t.cls]?t.cls:this.player.cls;if(this.player.cls=null,this.selectClass(i),e){let n=new Date(t.savedAt||Date.now()),s=o=>String(o).padStart(2,"0");e.innerHTML=`\uC774\uC5B4\uD558\uAE30 \xB7 ${this.player.cfg.title} <b>Lv.${this.player.level}</b> \xB7 <b>${this.round+1}\uD68C\uCC28</b> \xB7 \uD1F4\uCE58 <b>${this.kills}</b> \xB7 \uCD5C\uACE0 \uC5F0\uC18D <b>${this.bestCombo}</b><small>${n.getMonth()+1}/${n.getDate()} ${s(n.getHours())}:${s(n.getMinutes())} \uC790\uB3D9 \uC800\uC7A5 \xB7 Delete \uD0A4: \uAE30\uB85D \uC9C0\uC6B0\uAE30</small>`}}save(t=!0){of({kills:this.kills,round:this.round,stage:this.stage===2?this.round>0?3:1:this.stage,bestCombo:this.bestCombo,cls:this.player.cls,progress:this.progress,mapId:this.mapId,cleared:this.cleared,inv:[...this.inv],music:this.audio.musicOn,outline:this.pixel.compMat.uniforms.outline.value,zoom:this.pixel.userZoom,night:!this.waveActive&&this.nightTarget>.5})&&t&&this.ui.saveMark(),this.saveT=15}onKey(t){if(this.state==="title"){if(t==="Delete"||t==="Backspace"){af(),this.kills=0,this.round=0,this.stage=0,this.bestCombo=0,this.progress={},this.inv=new Set(["sw0","mg0","bw0","ot0"]),this.cleared={},this.mapId!=="palace"?this.switchMap("palace"):this.buildPortals(),this.stage=0;let n=this.player.cls;this.player.cls=null,this.selectClass(n),this.applySave(null),this.updateQuest(),this.preview.rebuild();let s=document.getElementById("title-save");s&&(s.textContent="\uAE30\uB85D\uC744 \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uC2DC\uC791\uD569\uB2C8\uB2E4.");return}let i=Xr.indexOf(this.selectedCls);if(t==="ArrowLeft"||t==="KeyA"){this.selectClass(Xr[(i+2)%3]),this.audio.unlock(),this.audio.play("talk");return}if(t==="ArrowRight"||t==="KeyD"){this.selectClass(Xr[(i+1)%3]),this.audio.unlock(),this.audio.play("talk");return}if(t==="Digit1"||t==="Digit2"||t==="Digit3"){this.selectClass(Xr[+t.slice(-1)-1]);return}this.start();return}if(this.audio.unlock(),t==="KeyM"){let i=this.audio.toggleMusic();this.ui.toast(i?"\uC74C\uC545 \uCF1C\uC9D0":"\uC74C\uC545 \uAEBC\uC9D0"),this.save(!1);return}if(t==="Equal"||t==="NumpadAdd"){this.pixel.zoom(1);return}if(t==="Minus"||t==="NumpadSubtract"){this.pixel.zoom(-1);return}if(t==="KeyO"){this.pixel.compMat.uniforms.outline.value=this.pixel.compMat.uniforms.outline.value?0:1,this.ui.toast(this.pixel.compMat.uniforms.outline.value?"\uC678\uACFD\uC120 \uCF1C\uC9D0":"\uC678\uACFD\uC120 \uAEBC\uC9D0"),this.save(!1);return}if(this.state==="dead"){(t==="KeyR"||t==="Enter"||t==="act")&&this.retry();return}if(this.ui.inDialog){["KeyE","Space","Enter","KeyJ","KeyZ","act","atk"].includes(t)&&this.ui.advance();return}let e=this.readInput();switch(t){case"KeyJ":case"KeyZ":case"atk":this.player.startAttack(e);break;case"Space":case"ShiftLeft":case"ShiftRight":case"dash":this.cdCheck("dash",this.player.dashCd)||this.player.startDash(e);break;case"KeyL":case"KeyQ":case"skill2":!this.lockCheck(2)&&!this.cdCheck("skill2",this.player.cd2)&&this.player.startExtraSkill(e,2);break;case"KeyI":case"KeyR":case"skill3":!this.lockCheck(3)&&!this.cdCheck("skill3",this.player.cd3)&&this.player.startExtraSkill(e,3);break;case"bag":this.toggleBag();break;case"KeyK":case"KeyX":case"skill":this.cdCheck("skill",this.player.skillCd)||this.player.startSkill(e);break;case"KeyE":case"Enter":case"act":this.interact();break;case"KeyN":if(this.waveActive){this.ui.toast("\uB3C4\uAE68\uBE44\uAC00 \uB0A0\uB6F0\uB294 \uC911\uC5D4 \uC2DC\uAC04\uC744 \uBC14\uAFC0 \uC218 \uC5C6\uC5B4\uC694");break}this.nightTarget=this.nightTarget>.5?0:1,this.ui.toast(this.nightTarget?"\uBC24\uC774 \uCC3E\uC544\uC635\uB2C8\uB2E4\u2026":"\uB0A0\uC774 \uBC1D\uC544\uC635\uB2C8\uB2E4");break;case"Tab":this.updateTarget(!0);break;case"KeyB":this.toggleBag();break;case"KeyG":this.godMode=!this.godMode,this.ui.toast(this.godMode?"\uBB34\uC801 (\uB514\uBC84\uADF8)":"\uBB34\uC801 \uD574\uC81C");break}}lockCheck(t){return this.player.level>=xn[t]?!1:(this.ui.denied("skill"+t),this.audio.play("denied"),this.ui.toast(`${this.player.cfg.labels["skill"+t]}: Lv.${xn[t]}\uC5D0 \uC5F4\uB9BD\uB2C8\uB2E4`,1.6),!0)}cdCheck(t,e){return!(e>.05)||this.player.dead?!1:(this.ui.denied(t),this.audio.play("denied"),!0)}start(){this.audio.unlock(),this.state="play",this.player.cls!==this.selectedCls&&this.player.setClass(this.selectedCls),this.ui.setClass(this.player.cfg),this.player.hp=this.player.maxHp,this.save(!1),document.getElementById("title").classList.add("hide"),this.ui.showHud(!0),this.ui.banner("\u6708\u4E0B\u5BAE","\uB3C4\uAE68\uBE44 \uC57C\uD589",2.8,"title-banner")}findInteract(){let t=this.player.pos,e=null,i=2.4;for(let n of this.npcs){let s=Math.hypot(n.pos.x-t.x,n.pos.z-t.z);s<i&&(i=s,e={kind:"npc",npc:n,label:"\uB300\uD654",promptPos:n.pos.clone().add(St(0,2.1,0))})}for(let n of this.world.drums){let s=Math.hypot(n.pos.x-t.x,n.pos.z-t.z);s<(n.reach||2.9)&&s-.5<i&&(i=s-.5,e={kind:"drum",drum:n,label:`${n.label||"\uBD81"} \uC6B8\uB9AC\uAE30`,promptPos:n.pos.clone().add(St(0,n.promptY||4,0))})}for(let n of this.portals){let s=Math.hypot(n.pos.x-t.x,n.pos.z-t.z);s<3.2&&s-1<i&&(i=s-1,e={kind:"portal",label:this.waveActive?"\uC2F8\uC6B0\uB294 \uC911\uC5D4 \uBABB \uAC00\uC694":`${Hn[n.to].name}(\uC73C)\uB85C \xB7 \uB4E4\uC5B4\uAC00\uAE30`,promptPos:n.pos.clone().add(St(0,3.2,0))})}return e}interact(){let t=this.nearInteract;if(t)if(t.kind==="npc"){let e=t.npc,i=e.lines;e.name.startsWith("\uC218\uBB38\uC7A5")&&(i=this.guardLines()),this.ui.dialog(e.name,i,()=>{e.name.startsWith("\uC218\uBB38\uC7A5")&&this.stage===0&&(this.stage=1,this.updateQuest(),this.save())})}else t.kind==="portal"||t.kind==="drum"&&(this.player.yaw=Math.atan2(t.drum.pos.x-this.player.pos.x,t.drum.pos.z-this.player.pos.z),this.player.startAttack({moveLen:0,mx:0,mz:0}),this.player.cls!=="sword"&&this.drumHit(t.drum))}guardLines(){return this.stage===0?[`\uC5B4\uC774, \uAC70\uAE30 \uC80A\uC740 ${this.player.cfg.title}! \uB9C8\uCE68 \uC798 \uC654\uC18C.`,"\uD574\uB9CC \uC9C0\uBA74 \uC774 \uAD81\uAD90 \uB9C8\uB2F9\uC5D0 \uB3C4\uAE68\uBE44 \uB188\uB4E4\uC774 \uB5BC\uB85C \uBAB0\uB824\uC640 \uB09C\uC7A5\uD310\uC744 \uCE5C\uB2E4\uC624.","\uC800\uAE30 \uC800 \uD070 \uBD81\uC774 \uBCF4\uC774\uC2DC\uC624? \uBD81\uC744 \uB465\u2014 \uD558\uACE0 \uC6B8\uB9AC\uBA74 \uC228\uC5B4 \uC788\uB358 \uB188\uB4E4\uC774 \uC8C4\uB2E4 \uD280\uC5B4\uB098\uC62C \uAC8C\uC694.","\uB188\uB4E4\uC744 \uBAA8\uC870\uB9AC \uD63C\uCB50\uB0B4 \uC8FC\uC2DC\uC624! \uB9C8\uC9C0\uB9C9\uC5D4 \uB3C4\uAE68\uBE44 \uB300\uC655\uC774 \uB098\uC628\uB2E4\uB294 \uC18C\uBB38\uC774 \uC788\uC73C\uB2C8 \uC870\uC2EC\uD558\uACE0.","(\uBD81 \uC55E\uC5D0\uC11C E \uD0A4, \uD639\uC740 \uAC80\uC73C\uB85C \uBD81\uC744 \uBCA0\uC5B4 \uC6B8\uB9AC\uC138\uC694)"]:this.waveActive?["\uC9C0\uAE08 \uD55C\uAC00\uD558\uAC8C \uC774\uC57C\uAE30\uD560 \uB54C\uAC00 \uC544\uB2C8\uC624! \uB3C4\uAE68\uBE44\uB4E4\uC774 \uBAB0\uB824\uC624\uACE0 \uC788\uC18C!"]:this.round>=1?[`\uD5C8\uD5C8, \uB300\uC655\uAE4C\uC9C0 \uCAD3\uC544\uB0B4\uB2E4\uB2C8! \uBC8C\uC368 ${this.kills}\uB9C8\uB9AC\uB098 \uD63C\uCB50\uC744 \uB0C8\uAD6C\uB824.`,"\uBD81\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC62C \uAC70\uC694. \uAC01\uC624\uAC00 \uB418\uC5C8\uB2E4\uBA74 \uC5B8\uC81C\uB4E0.","\uCC38, \uC815\uBB38 \uBC16\uC5D0 \uBCF4\uB78F\uBE5B \uBB38\uC774 \uC5F4\uB838\uC18C. \uB300\uC232 \uB108\uBA38 \uC5EC\uC6B0\uB4E4\uC774 \uB4E4\uB053\uB294\uB2E4\uB2C8 \uAC00 \uBCF4\uC2DC\uACA0\uC18C?"]:["\uBD81\uC740 \uC800\uAE30 \uC788\uC18C. \uB465\u2014 \uD558\uACE0 \uC6B8\uB824 \uBCF4\uC2DC\uC624!"]}updateQuest(){let t=this.ui,e=this.map,i={palace:"\uD070 \uBD81",bamboo:"\uC11C\uB0AD\uB2F9 \uBC29\uC6B8",temple:"\uC885\uAC01\uC758 \uBC94\uC885"}[this.mapId];if(this.stage===0)t.setQuest("\uC784\uBB34","\uC67C\uCABD \uBD81 \uC606\uC758 <b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uB9D0\uC744 \uAC78\uC790");else if(this.stage===1)t.setQuest(`${e.name} \xB7 \uC784\uBB34`,`<b>${i}</b>\uC744 \uC6B8\uB824 ${e.foe}\uB4E4\uC744 \uBD88\uB7EC\uB0B4\uC790`);else if(this.stage===2){let n=this.enemies.filter(s=>!s.dead).length+this.spawnQueue.length;t.setQuest(`${e.night[0]} \xB7 \uC81C ${this.wave} \uD30C`,`\uB0A8\uC740 ${e.foe} <b>${n}</b>`)}else if(this.cleared[e.id]&&e.next){let n=Hn[e.next];t.setQuest(`${e.name} \uD3C9\uC815`,e.next==="palace"?`\uBAA8\uB4E0 \uC9C0\uC5ED \uD3C9\uC815! <b>\uAE08\uBE5B \uD3EC\uD0C8</b>\uB85C \uC6D4\uD558\uAD81\uC5D0 \uB3CC\uC544\uAC00\uAC70\uB098 ${i}\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uC790`:`<b>\uBCF4\uB78F\uBE5B \uD3EC\uD0C8</b>\uB85C <b>${n.name}</b>\uC5D0 \uAC00\uC790 \xB7 ${i}\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 ${this.round+1}\uD68C\uCC28`)}else t.setQuest("\uC790\uC720 \uD0D0\uBC29",`${i}\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 <b>${this.round+1}\uD68C\uCC28</b> ${e.foe}\uB4E4\uC774 \uBAB0\uB824\uC628\uB2E4`)}drumHit(t){t.shake=1,this.audio.play(t.sound||"drum"),this.shake(.35),this.alarm=3,this.fx.ring(St(t.pos.x,0,t.pos.z),5,"#fff2c0",.6),this.fx.spark(t.pos.x,2.2,t.pos.z,14,"#fff2c0",5),!this.waveActive&&(this.stage===1||this.stage===3||this.stage===0)&&this.startNight()}startNight(){this.waveActive=!0,this.stage=2,this.wave=0,this.nightTarget=1,this.audio.mood="battle";let[t,e]=this.map.night;this.ui.banner(t,this.round>0?`${this.round+1}\uD68C\uCC28 \u2014 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC628\uB2E4`:e,3,"night-banner"),this.after(3.2,()=>this.nextWave())}waveDef(t){let e=[];for(let[i,n]of this.map.waves(t,this.round))for(let s=0;s<n;s++)e.push(i);return e}nextWave(){if(this.state==="dead")return;this.wave>0&&this.save(),this.wave++;let t=this.waveDef(this.wave),e=this.wave===3,i={palace:"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8",bamboo:"\uCC9C\uB144 \uAD6C\uBBF8\uD638",temple:"\uC800\uC2B9\uC0AC\uC790"}[this.mapId];this.ui.banner(`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C`,e?`${i} \uCD9C\uD604!`:`${this.map.foe} ${t.length}\uB9C8\uB9AC`,2.4,e?"boss-banner":""),this.audio.play(e?"drum":"wave");let n=.6;for(let s of t)this.spawnQueue.push({type:s,at:this.time+n}),n+=hh.has(s)?1.2:R(.3,.6);this.updateQuest()}spawnEnemy(t){let e=this.player.pos,i=hh.has(t),n=i?this.world.randomWalkable(e.x,e.z,6,9):this.world.randomWalkable(e.x,e.z,5,10);n||(n=this.world.randomWalkable(e.x,e.z,2,14)||St(this.world.spawn.x,0,this.world.spawn.z-6));let s=new Yr(this,t,n,1+this.round+this.map.lvl+Math.floor((this.player.level-1)/3));i&&(s.name=this.round>0?`${s.T.name} +${this.round}`:s.T.name,this.ui.setBoss(s),this.shake(.5)),this.enemies.push(s)}playerSwingHit(t,e){let i=e===2?2.45:2.2,n=e===2?.95:1.35,s=e===3?1:e,o=t.yaw,a=St(t.pos.x,t.y+.72,t.pos.z);if(this.fx.slash(a,o,s,{dur:e===3?.2:.16,outer:i+(e===3?.25:0),len:e===3?3.2:2.8,color:e===2?"#fff6d0":e===3?"#d8f4ff":"#a8e4ff"}),this.fx.slash(a,o,s,{dur:e===3?.2:.16,inner:i-.32,outer:i-.05+(e===3?.25:0),len:e===3?3.2:2.8,color:"#ffffff"}),e===2){let c=St(t.pos.x+Math.sin(o)*1.4,t.y,t.pos.z+Math.cos(o)*1.4);this.fx.ring(c,1.9,"#fff2c0",.3),this.fx.dust(c.x,c.y,c.z,10);for(let h=0;h<14;h++)this.fx.norm.emit({x:c.x+R(-.4,.4),y:c.y+.1,z:c.z+R(-.4,.4),vx:R(-2,2),vy:R(3,6),vz:R(-2,2),g:18,life:.8,size:2,color:"#9a9284",floor:c.y});this.audio.play("impact")}let l=!1;for(let c of this.enemies){if(c.dead||c.spawning)continue;let h=c.pos.x-t.pos.x,u=c.pos.z-t.pos.z,d=Math.hypot(h,u),f=c.isWisp?c.y+1.3:c.y;if(Math.abs(f-t.y)>2.2||d>i+c.radius||d>.6&&Math.abs(kn(o,Math.atan2(h,u)))>n)continue;let p=Math.random()<.15,x=Math.round((e===2?R(24,30):e===3?R(18,23):R(13,17))*(p?1.8:1));this.damageEnemy(c,x,p,e===2?9:5.5,e===2?.4:.25),l=!0}for(let c of this.projectiles){if(c.owner!=="enemy"||c.dead||c.kind!=="orb")continue;let h=c.pos.x-t.pos.x,u=c.pos.z-t.pos.z;Math.hypot(h,u)<i+.3&&Math.abs(kn(o,Math.atan2(h,u)))<n+.3&&(c.owner="player",c.dir.set(Math.sin(o),0,Math.cos(o)),c.speed*=1.6,c.dmg=30,c.life=1.2,c.hitSet=new Set,this.audio.play("block"),this.fx.spark(c.pos.x,c.pos.y,c.pos.z,10,"#bff4ff",5),this.ui.toast("\uD295\uACA8\uB0B4\uAE30!",.8),this.hitstop=Math.max(this.hitstop,.06))}for(let c of this.world.drums){let h=c.pos.x-t.pos.x,u=c.pos.z-t.pos.z;Math.hypot(h,u)<i+1.3&&Math.abs(kn(o,Math.atan2(h,u)))<n&&(this.drumHit(c),l=!0)}l&&this.shake(e===2?.22:.12)}damageEnemy(t,e,i,n,s){let o=this.player,a=o.perks,l=e,c=o.atkMul||1;a?.has("rage")&&o.hp<o.maxHp*.4&&(c*=1.35);let h=a?.has("execute")&&t.hp<t.maxHp*.35;h&&(c*=1.6),e=Math.max(1,Math.round(e*c));let u=St(t.pos.x-o.pos.x,0,t.pos.z-o.pos.z).normalize();if(!t.hit(e,u,n,s))return;let d=t.center().clone();if(a?.size&&this.weaponPerks(t,d,l,e,h),this.fx.spark(d.x,d.y,d.z,i?18:10,i?"#fff07a":"#ffffff",i?8:6),this.fx.number(d.clone().add(St(0,.5*(t.isBoss?2:1),0)),e,i?"crit":"normal"),this.audio.play(i?"crit":"hit"),this.hitstop=Math.max(this.hitstop,i?.085:.05),this.hitCombo=this.time-this.lastHitTime<2?this.hitCombo+1:1,this.lastHitTime=this.time,this.hitCombo>this.bestCombo&&(this.bestCombo=this.hitCombo),o.lastCombat=this.time,t.isBoss&&!t.dead){let f=t.hp/t.maxHp;if(f<.6&&t.summoned===0||f<.3&&t.summoned===1){t.summoned++,this.audio.play(t.T.boss==="dokkaebi"?"laugh":t.T.boss==="gumiho"?"howl":"wail"),this.ui.toast(this.map.summonLine,2.4);let[p,x]=t.T.summon;for(let g=0;g<2+this.round;g++)this.spawnQueue.push({type:g===0?p:x,at:this.time+.3+g*.3})}}}spawnSwordWave(t){let e=St(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=St(t.pos.x,t.y,t.pos.z),n=St(t.pos.x,t.y+.75,t.pos.z).addScaledVector(e,.6),s={owner:"player",kind:"wave",pos:n,dir:e,yaw:t.yaw,speed:16,life:.6,dmg:34,hitSet:new Set,radius:1.3,trailT:0},o=a=>a.g.position.copy(s.pos);s.vis=[this.fx.slash(n,t.yaw,0,{inner:.25,outer:2,len:2.4,dur:.6,color:"#2f7dff",static:!0,move:o}),this.fx.slash(n,t.yaw,0,{inner:.9,outer:1.85,len:2.2,dur:.6,color:"#8fe4ff",static:!0,move:o}),this.fx.slash(n,t.yaw,0,{inner:1.55,outer:1.8,len:2,dur:.6,color:"#ffffff",static:!0,move:o})],this.projectiles.push(s),this.audio.play("skill"),this.fx.ring(i,2.6,"#7fd8ff",.4),this.fx.ring(i,1.3,"#ffffff",.22),this.fx.spark(n.x,n.y,n.z,18,"#d8f6ff",7);for(let a=0;a<24;a++){let l=a/24*Math.PI*2;this.fx.add.emit({x:i.x+Math.cos(l)*.4,y:i.y+.08,z:i.z+Math.sin(l)*.4,vx:Math.cos(l)*5,vy:R(.2,1.2),vz:Math.sin(l)*5,drag:4,life:R(.25,.45),size:3,endSize:1,color:"#bff4ff",color2:"#2050ff"})}this.ui.flash("#3a8cff",.18),this.hitstop=Math.max(this.hitstop,.05),this.shake(.22)}swordWaveTrail(t,e){let i=this.fx;t.trailT-=e,t.trailT<=0&&(t.trailT=.03,i.slash(t.pos.clone(),t.yaw,0,{inner:.6,outer:1.95,len:2.3,dur:.18,color:"#2a5cff",static:!0,fadeAll:!0}));let n=St(t.dir.z,0,-t.dir.x);for(let o=0;o<5;o++){let a=R(-1.1,1.1),l=R(1.2,1.9),c=t.pos.x+(t.dir.x*Math.cos(a)+n.x*Math.sin(a))*l,h=t.pos.z+(t.dir.z*Math.cos(a)+n.z*Math.sin(a))*l;i.add.emit({x:c,y:t.pos.y+R(-.15,.25),z:h,vx:-t.dir.x*R(2,5),vy:R(0,1.2),vz:-t.dir.z*R(2,5),drag:3,life:R(.25,.5),size:R(2,4),endSize:1,color:"#e0faff",color2:"#2050ff"})}let s=this.world.heightAt(t.pos.x,t.pos.z);for(let o=0;o<3;o++){let a=R(-1.3,1.3);i.add.emit({x:t.pos.x+n.x*a,y:s+.06,z:t.pos.z+n.z*a,life:R(.5,.9),size:2,color:"#7fd8ff",alpha:.8})}}swordWaveEnd(t){let e=this.fx;for(let i of t.vis)i.kill=!0;this.audio.play("burst"),e.ring(St(t.pos.x,this.world.heightAt(t.pos.x,t.pos.z),t.pos.z),2.2,"#7fd8ff",.35);for(let i=0;i<36;i++){let n=Math.random()*Math.PI*2,s=R(-.3,1);e.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,vx:Math.cos(n)*R(2,6),vy:s*4,vz:Math.sin(n)*R(2,6),g:6,drag:2.5,life:R(.3,.7),size:R(2,4),endSize:1,color:"#e0faff",color2:"#1a40ff"})}}playerShoot(t,e){let i=e%10===2;if(t.cls==="mage"){let n=i?[-.28,0,.28]:[0];for(let s of n)this.spawnTalisman(t,t.yaw+s,i?15:19);this.audio.play("cast")}else{let n=i?[-.14,0,.14]:[0];for(let s of n)this.spawnArrow(t,t.yaw+s,{dmg:i?14:16});this.audio.play("bow")}}playerSkillHit(t,e){t.cls==="mage"?this.castLightning(t):t.cls==="elf"&&this.windArrows(t)}handPos(t,e=St()){return e.set(t.pos.x+Math.sin(t.yaw)*.5,t.y+.95,t.pos.z+Math.cos(t.yaw)*.5)}spawnTalisman(t,e,i){let n=St(Math.sin(e),0,Math.cos(e)),s=this.handPos(t),o=new Nt,a=new at(new ve(.24,.36),new Kt({color:"#f6d870",side:de})),l=new at(new ve(.06,.26),new Kt({color:"#c8302c",side:de}));l.position.z=.002,a.add(l),o.add(a),o.position.copy(s),this.scene.add(o),this.projectiles.push({owner:"player",kind:"talisman",pos:s,dir:n,yaw:e,speed:13,life:.8,dmg:i,mesh:o,paper:a,radius:.5,hitSet:new Set,knock:4,stun:.3})}talismanBurst(t){let e=this.fx,i=t.pos;this.audio.play("fire"),e.ring(St(i.x,this.world.heightAt(i.x,i.z),i.z),1.7,"#ffb050",.3);for(let n=0;n<26;n++){let s=Math.random()*Math.PI*2,o=R(1.5,4.5);e.add.emit({x:i.x,y:i.y,z:i.z,vx:Math.cos(s)*o,vy:R(.5,3.5),vz:Math.sin(s)*o,g:3,drag:3,life:R(.25,.55),size:R(2,5),endSize:1,color:"#fff2a0",color2:"#ff3a10",flicker:.3})}e.smoke(i.x,i.y-.2,i.z,5);for(let n of this.enemies)n.dead||n.spawning||n===t.hitEnemy||Math.hypot(n.pos.x-i.x,n.pos.z-i.z)<1.5+n.radius&&this.damageEnemy(n,Math.round(t.dmg*.6),!1,3,.2)}spawnArrow(t,e,{dmg:i=16,pierce:n=!1,glow:s=!1,speed:o=26,life:a=.55}={}){let l=St(Math.sin(e),0,Math.cos(e)),c=this.handPos(t),h=this.makeArrowMesh(s);h.position.copy(c),h.rotation.y=e,this.scene.add(h),this.projectiles.push({owner:"player",kind:"arrow",pos:c,dir:l,yaw:e,speed:o,life:a,dmg:i,mesh:h,radius:.4,hitSet:new Set,pierce:n,glow:s,knock:n?5:3,stun:n?.3:.18})}makeArrowMesh(t){let e=new Nt,i=new Kt({color:t?"#c8ff9a":"#9a7a52"}),n=new at(new dt(.04,.04,.78),i),s=new at(new ne(.05,.14,4),new Kt({color:t?"#ffffff":"#d8dde4"}));s.rotation.x=Math.PI/2,s.position.z=.44;let o=new at(new dt(.1,.02,.14),new Kt({color:t?"#8aff6a":"#f0ece0"}));return o.position.z=-.32,e.add(n,s,o),e}missileTrail(t,e){let i=this.fx;if(t.kind==="talisman"){t.paper.rotation.z+=e*18,t.paper.rotation.y=Math.sin(this.time*20)*.5,t.mesh.position.copy(t.pos);for(let s=0;s<2;s++)i.add.emit({x:t.pos.x+R(-.1,.1),y:t.pos.y+R(-.1,.1),z:t.pos.z+R(-.1,.1),vx:-t.dir.x*2+R(-.4,.4),vy:R(.4,1.4),vz:-t.dir.z*2+R(-.4,.4),life:R(.2,.4),size:R(2,4),endSize:1,color:"#ffe080",color2:"#ff3010",flicker:.3})}else if(t.mesh.position.copy(t.pos),t.glow)for(let s=0;s<2;s++)i.add.emit({x:t.pos.x+R(-.08,.08),y:t.pos.y+R(-.08,.08),z:t.pos.z+R(-.08,.08),vx:-t.dir.x*3,vy:R(0,.6),vz:-t.dir.z*3,life:R(.2,.4),size:R(2,3),endSize:1,color:"#e8ffc8",color2:"#3aa83a"});else Math.random()<.6&&i.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,life:.12,size:2,color:"#fff8e0",alpha:.6});this.world.heightAt(t.pos.x,t.pos.z)>t.pos.y-.3&&(t.life=0)}aimPoint(t,e=5,i=11){if(this.validTarget(this.target)){let a=this.target;return St(a.pos.x,this.world.heightAt(a.pos.x,a.pos.z),a.pos.z)}let n=null,s=i;for(let a of this.enemies){if(a.dead||a.spawning)continue;let l=a.pos.x-t.pos.x,c=a.pos.z-t.pos.z,h=Math.hypot(l,c);h<s&&Math.abs(kn(t.yaw,Math.atan2(l,c)))<1&&(s=h,n=a)}let o=n?St(n.pos.x,0,n.pos.z):St(t.pos.x+Math.sin(t.yaw)*e,0,t.pos.z+Math.cos(t.yaw)*e);return o.y=this.world.heightAt(o.x,o.z),o}enemiesIn(t,e){return this.enemies.filter(i=>!i.dead&&!i.spawning&&Math.hypot(i.pos.x-t.x,i.pos.z-t.z)<e+i.radius)}castLightning(t){let e=this.aimPoint(t),i=2.9;this.fx.circle(e,i*1.15,"#b89aff",1.3,2.2),this.fx.circle(St(t.pos.x,t.y,t.pos.z),1.3,"#d8c8ff",.7,-3);let n=this.fx.ring(e,i,"#b89aff",1,1);for(let s=0;s<46;s++){let o=Math.random()*Math.PI*2,a=i*R(.8,1.1);this.fx.add.emit({x:e.x+Math.cos(o)*a,y:e.y+R(.1,1.6),z:e.z+Math.sin(o)*a,vx:-Math.cos(o)*a/.42,vy:R(-.5,1),vz:-Math.sin(o)*a/.42,life:.42,size:R(2,3),color:"#e8e0ff",color2:"#6a4aff"})}this.audio.play("charge"),this.shake(.12),this.timers.push({at:this.time+.42,fn:()=>{this.fx.removeRing(n),this.fx.bolt(e,1.7),this.audio.play("thunder"),this.ui.flash("#e8e0ff",.6),this.shake(.7),this.hitstop=Math.max(this.hitstop,.09),this.fx.ring(e,i*1.3,"#d8c8ff",.45),this.fx.ring(e,i*.6,"#ffffff",.25),this.fx.scorch(e,i*.75,"#1c1230",3);for(let a=0;a<60;a++){let l=Math.random()*Math.PI*2,c=R(2,9);this.fx.add.emit({x:e.x,y:e.y+.3,z:e.z,vx:Math.cos(l)*c,vy:R(1,7),vz:Math.sin(l)*c,g:10,drag:2,life:R(.3,.8),size:R(2,4),endSize:1,color:"#ffffff",color2:"#7a5aff"})}for(let a=0;a<30;a++){let l=Math.random()*Math.PI*2,c=R(.3,i);this.fx.add.emit({x:e.x+Math.cos(l)*c,y:e.y+.06,z:e.z+Math.sin(l)*c,vy:R(0,.4),life:R(.8,1.6),size:2,color:"#d8c8ff",alpha:.8,flicker:.7})}let s=this.enemiesIn(e,i),o=St(e.x,e.y+1.2,e.z);for(let a of s){let l=Math.random()<.2;this.damageEnemy(a,Math.round(R(44,54)*(l?1.8:1)),l,3,.7);let c=a.center().clone();this.fx.arc(o,c,"#c8b0ff",.8),this.fx.spark(c.x,c.y,c.z,10,"#e8e0ff",6),o=c}for(let a=1;a<=3;a++)this.timers.push({at:this.time+a*.07,fn:()=>{let l=St(e.x+R(-2,2),e.y,e.z+R(-2,2));this.fx.bolt(l,.9),this.fx.spark(l.x,l.y+.2,l.z,8,"#e8e0ff",5),this.shake(.25)}})}})}windArrows(t){for(let n=0;n<9;n++)this.spawnArrow(t,t.yaw+(n-4)*.13,{dmg:22,pierce:!0,glow:!0,speed:24,life:.6});this.audio.play("bowskill");let e=St(t.pos.x,t.y,t.pos.z);this.fx.circle(e,2.2,"#8aff7a",.7,3);let i=this.handPos(t);for(let n=0;n<3;n++)this.timers.push({at:this.time+n*.05,fn:()=>{let s=i.clone().add(St(Math.sin(t.yaw)*n*.6,0,Math.cos(t.yaw)*n*.6));this.fx.ring(s,.8+n*.4,n?"#c8ffb0":"#ffffff",.25)}});for(let n=0;n<36;n++){let s=t.yaw+R(-.8,.8);this.fx.norm.emit({x:e.x,y:e.y+R(.3,1.2),z:e.z,vx:Math.sin(s)*R(3,9),vy:R(0,1.5),vz:Math.cos(s)*R(3,9),drag:2,wob:1.5,life:R(.5,1.1),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"})}for(let n=0;n<30;n++){let s=n/30*Math.PI*4,o=.3+n*.03;this.fx.add.emit({x:e.x+Math.cos(s)*o,y:e.y+n*.05,z:e.z+Math.sin(s)*o,vx:-Math.sin(s)*3,vy:1,vz:Math.cos(s)*3,life:.4,size:2,color:"#e8ffd8",color2:"#3aa83a"})}this.ui.flash("#6aff7a",.18),this.shake(.2)}castSkill(t,e){let i=t.cls+e;i==="sword2"?this.skillIssen(t):i==="sword3"?this.skillWhirl(t):i==="mage2"?this.skillDragon(t):i==="mage3"?this.skillFrost(t):i==="elf2"?this.skillArrowRain(t):i==="elf3"&&this.skillTornado(t)}skillIssen(t){let e=St(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=t.pos.clone();this.fx.ghost(t.rig,"#ffffff",.4),this.world.move(t.pos,e.x*7,e.z*7,t.moveR),t.vel.set(0,0,0),t.invuln=Math.max(t.invuln,.6);let n=t.pos.clone(),s=t.y+.8;this.fx.streak(St(i.x,s,i.z),St(n.x,s,n.z),"#ffffff",.55,.5),this.fx.streak(St(i.x,s,i.z),St(n.x,s,n.z),"#7fd8ff",.7,1.2);for(let c=1;c<5;c++){let h=c/5,u=i.clone().lerp(n,h);this.fx.add.emit({x:u.x,y:s,z:u.z,vx:R(-1,1),vy:R(0,1),vz:R(-1,1),life:.4,size:3,endSize:1,color:"#ffffff",color2:"#7fd8ff"})}this.fx.dust(i.x,i.y,i.z,12),this.fx.ring(St(n.x,t.y,n.z),1.6,"#ffffff",.25),this.audio.play("dash"),this.audio.play("swing3"),this.shake(.2);let o=n.clone().sub(i),a=o.lengthSq()||1,l=this.enemies.filter(c=>{if(c.dead||c.spawning)return!1;let h=Math.max(0,Math.min(1,((c.pos.x-i.x)*o.x+(c.pos.z-i.z)*o.z)/a)),u=i.x+o.x*h,d=i.z+o.z*h;return Math.hypot(c.pos.x-u,c.pos.z-d)<1.3+c.radius});t.sinceAttack=5,this.timers.push({at:this.time+.62,fn:()=>{if(this.audio.play("sheathe"),!!l.length){this.audio.play("crit"),this.ui.flash("#ffffff",.35),this.shake(.5),this.hitstop=Math.max(this.hitstop,.1);for(let c of l){if(c.dead)continue;let h=Math.random()<.3;this.damageEnemy(c,Math.round(R(40,48)*(h?1.8:1)),h,5,.6);let u=c.center().clone();this.fx.cross(u,"#fff6d0",c.isBoss?6:4.2,.45),this.fx.spark(u.x,u.y,u.z,16,"#fff6d0",8)}}}})}skillWhirl(t){for(let e=0;e<3;e++)this.timers.push({at:this.time+e*.27,fn:()=>{if(t.dead)return;let i=e===2,n=i?2.9:2.5,s=St(t.pos.x,t.y+.7,t.pos.z);this.fx.slash(s,t.yaw+e*2.1,0,{inner:.4,outer:n,len:6.25,dur:.24,color:i?"#fff6d0":"#a8e4ff"}),this.fx.slash(s,t.yaw+e*2.1,0,{inner:n-.3,outer:n-.05,len:6.25,dur:.24,color:"#ffffff"}),this.fx.ring(St(t.pos.x,t.y,t.pos.z),n,i?"#fff2c0":"#bfe8ff",.3);for(let a=0;a<16;a++){let l=a/16*Math.PI*2;this.fx.norm.emit({x:t.pos.x+Math.cos(l)*.6,y:t.y+.1,z:t.pos.z+Math.sin(l)*.6,vx:Math.cos(l)*4-Math.sin(l)*3,vy:R(.3,1),vz:Math.sin(l)*4+Math.cos(l)*3,drag:3,life:.5,size:3,endSize:1,color:"#c8bca0",alpha:.7})}this.audio.play(i?"swing3":"swing");let o=!1;for(let a of this.enemiesIn(t.pos,n)){let l=Math.random()<.15;this.damageEnemy(a,Math.round((i?R(22,28):R(13,17))*(l?1.8:1)),l,i?8:2.5,.3),o=!0}o&&this.shake(i?.35:.15)}})}skillDragon(t){let e=St(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=this.handPos(t),n=new Nt,s=[],o=12;for(let c=0;c<o;c++){let h=c/(o-1),u=new ct("#fff2a0").lerp(new ct("#e8401a"),h),d=new at(new Ae(.46*(1-h*.6),1),new Kt({color:u}));n.add(d),s.push(d)}let a=s[0];for(let c of[-1,1]){let h=new at(new ne(.06,.35,4),new Kt({color:"#ffd040"}));h.position.set(c*.16,.22,-.12),h.rotation.x=-.8,a.add(h);let u=new at(new dt(.07,.07,.05),new Kt({color:"#2a0a0a"}));u.position.set(c*.13,.08,.27),a.add(u)}this.scene.add(n);let l={owner:"fx",kind:"dragon",pos:i.clone(),base:i.clone(),dir:e,yaw:t.yaw,speed:10,life:1.6,t:0,dmg:20,mesh:n,segs:s,hist:[],hitAt:new Map};for(let c=0;c<o*3;c++)l.hist.push(i.clone());this.projectiles.push(l),this.audio.play("fire"),this.audio.play("cast"),this.fx.circle(St(t.pos.x,t.y,t.pos.z),1.6,"#ffa040",.6,3),this.fx.ring(i,1.4,"#ffd080",.3),this.ui.flash("#ff8a30",.18),this.shake(.2)}dragonUpdate(t,e){t.t+=e,t.base.addScaledVector(t.dir,t.speed*e);let i=St(t.dir.z,0,-t.dir.x),n=Math.sin(t.t*9)*.9;t.pos.copy(t.base).addScaledVector(i,n),t.pos.y=t.base.y+Math.sin(t.t*6)*.25,t.hist.unshift(t.pos.clone()),t.hist.length=t.segs.length*3,t.segs.forEach((a,l)=>{let c=t.hist[Math.min(t.hist.length-1,l*3)];a.position.copy(c)});let s=t.segs[0],o=t.hist[2]||t.pos;s.lookAt(t.pos.clone().add(t.pos.clone().sub(o)));for(let a=0;a<4;a++){let l=t.hist[Math.floor(Math.random()*t.hist.length)];this.fx.add.emit({x:l.x+R(-.15,.15),y:l.y+R(-.1,.2),z:l.z+R(-.15,.15),vx:R(-.6,.6),vy:R(.8,2),vz:R(-.6,.6),life:R(.25,.5),size:R(2,5),endSize:1,color:"#fff0a0",color2:"#ff2a00",flicker:.3})}for(let a of this.enemies){if(a.dead||a.spawning||Math.hypot(a.pos.x-t.pos.x,a.pos.z-t.pos.z)>.9+a.radius)continue;let l=t.hitAt.get(a)??-9;if(this.time-l<.35)continue;t.hitAt.set(a,this.time);let c=Math.random()<.2;this.damageEnemy(a,Math.round(t.dmg*(c?1.8:1)*R(.9,1.1)),c,3,.3);let h=a.center();for(let u=0;u<12;u++)this.fx.add.emit({x:h.x,y:h.y,z:h.z,vx:R(-3,3),vy:R(1,4),vz:R(-3,3),drag:2,life:R(.3,.5),size:3,endSize:1,color:"#ffe080",color2:"#ff3010"})}if(t.life<=0&&!t.exploded){t.exploded=!0;let a=t.pos,l=this.world.heightAt(a.x,a.z);this.audio.play("fire"),this.fx.ring(St(a.x,l,a.z),2.4,"#ffb050",.35),this.fx.scorch(St(a.x,l,a.z),1.6,"#2a140a",2.5);for(let c=0;c<40;c++){let h=Math.random()*Math.PI*2,u=R(2,6);this.fx.add.emit({x:a.x,y:a.y,z:a.z,vx:Math.cos(h)*u,vy:R(.5,5),vz:Math.sin(h)*u,g:4,drag:2.5,life:R(.3,.7),size:R(2,5),endSize:1,color:"#fff2a0",color2:"#ff2a00",flicker:.3})}for(let c of this.enemiesIn(a,2.2))this.damageEnemy(c,Math.round(R(24,30)),!1,6,.35);this.shake(.35)}}skillFrost(t){let e=St(t.pos.x,t.y,t.pos.z),i=4.6;this.fx.circle(e,i,"#8ad8ff",1.6,1.4),this.fx.scorch(e,i*.9,"#cfefff",2.6),this.audio.play("freeze"),this.ui.flash("#8ad8ff",.25),this.shake(.35),[1.4,2.8,4.2].forEach((n,s)=>{this.timers.push({at:this.time+s*.09,fn:()=>{let o=Math.round(n*5);for(let a=0;a<o;a++){let l=a/o*Math.PI*2+s*.3,c=e.x+Math.cos(l)*n,h=e.z+Math.sin(l)*n,u=this.world.heightAt(c,h);Math.abs(u-e.y)>1||this.fx.iceSpike(St(c,u,h),R(.8,1.5)*(1-s*.15),1.4-s*.1)}this.fx.ring(e,n+.3,"#d8f4ff",.25);for(let a=0;a<20;a++){let l=Math.random()*Math.PI*2;this.fx.add.emit({x:e.x+Math.cos(l)*n,y:e.y+.2,z:e.z+Math.sin(l)*n,vx:Math.cos(l)*2,vy:R(1,3),vz:Math.sin(l)*2,g:6,life:R(.4,.8),size:2,color:"#ffffff",color2:"#7ac8ff"})}this.shake(.15)}})});for(let n of this.enemiesIn(e,i)){let s=Math.random()<.15;this.damageEnemy(n,Math.round(R(26,32)*(s?1.8:1)),s,1,.2),n.freeze(1.8)}}skillArrowRain(t){let e=this.aimPoint(t,6),i=3;this.fx.circle(e,i*1.1,"#9aff8a",1.7,1.6);let n=this.fx.ring(e,i,"#9aff8a",1,1);this.audio.play("bow"),this.audio.play("bowskill");for(let s=0;s<5;s++)this.fx.add.emit({x:t.pos.x+R(-.2,.2),y:t.y+1.4,z:t.pos.z+R(-.2,.2),vx:R(-.5,.5),vy:18,vz:R(-.5,.5),life:.4,size:3,color:"#e8ffd8",color2:"#3aa83a"});this.rains.push({c:e,R:i,t:-.35,dur:1.2,acc:0,tele:n})}skillTornado(t){let e=St(Math.sin(t.yaw),0,Math.cos(t.yaw)),i=St(t.pos.x+e.x*1.5,t.y,t.pos.z+e.z*1.5),n=[];for(let s=0;s<4;s++){let o=new Kt({color:s%2?"#c8ffb0":"#ffffff",transparent:!0,opacity:.5,blending:Be,depthWrite:!1}),a=new at(new oi(1,.05,4,20),o);a.rotation.x=Math.PI/2,this.scene.add(a),n.push(a)}this.tornados.push({pos:i,dir:e,t:0,dur:3.2,tick:0,rings:n}),this.audio.play("tornado"),this.fx.circle(i,2,"#9aff8a",.8,4),this.ui.flash("#9aff8a",.15)}updateSkills(t){for(let e=this.rains.length-1;e>=0;e--){let i=this.rains[e];if(i.t+=t,!(i.t<0)){for(i.acc+=t*34;i.acc>=1;){i.acc-=1;let n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*i.R,o=i.c.x+Math.cos(n)*s,a=i.c.z+Math.sin(n)*s,l=this.world.heightAt(o,a),c=St(o+R(-1,1),l+9,a+R(-1,1)-1.5),h=St(o,l,a).sub(c).normalize(),u=this.makeArrowMesh(!0);u.position.copy(c),u.lookAt(c.clone().add(h)),this.scene.add(u),this.projectiles.push({owner:"fx",kind:"rainArrow",pos:c,dir:h,speed:30,life:1,mesh:u,groundY:l})}i.t>=i.dur&&(this.fx.removeRing(i.tele),this.rains.splice(e,1))}}for(let e=this.tornados.length-1;e>=0;e--){let i=this.tornados[e];i.t+=t,this.world.move(i.pos,i.dir.x*3*t,i.dir.z*3*t,.4),i.pos.y=this.world.heightAt(i.pos.x,i.pos.z);let n=Math.min(1,i.t/.25)*Math.min(1,(i.dur-i.t)/.4);i.rings.forEach((s,o)=>{let a=.3+o*.8;s.position.set(i.pos.x+Math.sin(i.t*7+o)*.12,i.pos.y+a,i.pos.z+Math.cos(i.t*7+o)*.12),s.scale.setScalar((.5+o*.45)*n),s.rotation.z+=t*(8+o*2),s.material.opacity=.45*n});for(let s=0;s<10;s++){let o=Math.random()*3.2,a=i.t*9+o*2.2+Math.random()*6.28,l=(.25+o*.4)*n;this.fx.add.emit({x:i.pos.x+Math.cos(a)*l,y:i.pos.y+o,z:i.pos.z+Math.sin(a)*l,vx:-Math.sin(a)*4,vy:1.2,vz:Math.cos(a)*4,life:.25,size:2,color:"#f0ffe8",color2:"#5ac84a",alpha:.9})}Math.random()<.5&&this.fx.norm.emit({x:i.pos.x+R(-1,1),y:i.pos.y+R(.2,2.5),z:i.pos.z+R(-1,1),vx:R(-3,3),vy:R(1,3),vz:R(-3,3),wob:2,life:.8,size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"}),Math.random()<.3&&this.fx.dust(i.pos.x,i.pos.y,i.pos.z,1);for(let s of this.enemiesIn(i.pos,3)){let o=i.pos.x-s.pos.x,a=i.pos.z-s.pos.z,l=Math.hypot(o,a)||1,c=(s.isBoss?.8:3.4)*t;l>.4&&this.world.move(s.pos,o/l*c,a/l*c,s.moveR??s.radius)}if(i.tick-=t,i.tick<=0){i.tick=.25;for(let s of this.enemiesIn(i.pos,1.7)){this.damageEnemy(s,Math.round(R(7,10)),!1,.5,.25);let o=s.center();this.fx.spark(o.x,o.y,o.z,4,"#e8ffd8",3)}}if(i.t>=i.dur){for(let s of i.rings)this.scene.remove(s),s.geometry.dispose(),s.material.dispose();for(let s=0;s<30;s++)this.fx.norm.emit({x:i.pos.x,y:i.pos.y+R(.3,2.5),z:i.pos.z,vx:R(-5,5),vy:R(0,3),vz:R(-5,5),wob:2,drag:2,life:R(.6,1.1),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"});this.fx.ring(i.pos,2.2,"#c8ffb0",.35),this.tornados.splice(e,1)}}}rainArrowUpdate(t){if(t.mesh.position.copy(t.pos),t.pos.y<=t.groundY+.05){t.life=0,this.fx.dust(t.pos.x,t.groundY,t.pos.z,2),this.fx.add.emit({x:t.pos.x,y:t.groundY+.1,z:t.pos.z,life:.2,size:4,endSize:1,color:"#e8ffd8"});for(let e of this.enemiesIn(t.pos,.8)){let i=Math.random()<.15;this.damageEnemy(e,Math.round(R(9,12)*(i?1.8:1)),i,1,.15)}Math.random()<.3&&this.audio.play("arrowhit")}}spawnOrb(t,e=0){let i=this.player,n=t.T.pal,s=St(t.pos.x,t.y+(t.isBoss?2:t.rig?1.1:1.3),t.pos.z),a=St(i.pos.x+i.vel.x*.3,i.y+.7,i.pos.z+i.vel.z*.3).sub(s).setY(0).normalize();e&&a.applyAxisAngle(St(0,1,0),e);let l=new at(new Ae(t.isBoss?.28:.2,1),new Kt({color:n.orb}));l.position.copy(s),this.scene.add(l),this.projectiles.push({owner:"enemy",kind:"orb",pos:s,dir:a,speed:t.isBoss?8:7,life:3,dmg:t.isBoss?Math.round(t.dmg*.6):t.dmg,mesh:l,radius:.45,hitSet:new Set,y:s.y,pal:n})}spawnDarkWaves(t){let e=this.player,i=Math.atan2(e.pos.x-t.pos.x,e.pos.z-t.pos.z);for(let n of[-.35,0,.35]){let s=i+n,o=St(Math.sin(s),0,Math.cos(s)),a=St(t.pos.x,t.y+.8,t.pos.z).addScaledVector(o,1.2),l={owner:"enemy",kind:"darkwave",pos:a,dir:o,speed:9,life:1.3,dmg:Math.round(t.dmg*.8),radius:1,hitSet:new Set};l.vis=[this.fx.slash(a,s,0,{inner:.3,outer:1.6,len:2.2,dur:1.3,color:"#6a1aaa",static:!0,move:c=>c.g.position.copy(l.pos)}),this.fx.slash(a,s,0,{inner:1.25,outer:1.55,len:2,dur:1.3,color:"#e0c8ff",static:!0,move:c=>c.g.position.copy(l.pos)})],this.projectiles.push(l)}this.audio.play("swing3"),this.shake(.2)}bossSlam(t,e,i,n,s=!1){this.audio.play("slam"),this.shake(s?.9:.6),this.alarm=2,this.fx.ring(e,i*1.15,"#ffd6a0",.45),this.fx.ring(e,i*.7,"#ffffff",.3);for(let a=0;a<40;a++){let l=a/40*Math.PI*2;this.fx.norm.emit({x:e.x+Math.cos(l)*i*.6,y:e.y+.1,z:e.z+Math.sin(l)*i*.6,vx:Math.cos(l)*4,vy:R(1,3),vz:Math.sin(l)*4,g:6,drag:3,life:R(.4,.8),size:4,endSize:1,color:"#c8bca0"})}for(let a=0;a<18;a++)this.fx.norm.emit({x:e.x+R(-1,1),y:e.y+.2,z:e.z+R(-1,1),vx:R(-3,3),vy:R(4,8),vz:R(-3,3),g:20,life:1,size:3,color:"#8a8478",floor:e.y});let o=this.player;Math.hypot(o.pos.x-e.x,o.pos.z-e.z)<i+o.radius&&Math.abs(o.pos.y-e.y)<1.2&&o.damage(n,e)}weaponPerks(t,e,i,n,s){let o=this.player;if(s&&(this.fx.colorFire(e.x,e.y,e.z,10,.3,"#e0c8ff","#6a2aff"),Math.random()<.3&&this.fx.cross(e,"#c890ff",2.2,.3)),o.perks.has("drain")&&!o.dead&&(o.drainAcc=(o.drainAcc||0)+n*.06,o.drainAcc>=1&&o.hp<o.maxHp)){let a=Math.min(Math.floor(o.drainAcc),o.maxHp-o.hp);o.hp+=a,o.drainAcc-=Math.floor(o.drainAcc),this.time-(o.drainShown||0)>.5&&(o.drainShown=this.time,this.fx.number(o.pos.clone().add(St(0,1.9,0)),`+${a}`,"heal")),this.fx.norm.emit({x:e.x,y:e.y,z:e.z,vx:(o.pos.x-e.x)*2,vy:2,vz:(o.pos.z-e.z)*2,drag:1,life:.5,size:3,color:"#ffb070"})}if(o.perks.has("quake")&&!this.inQuake&&Math.random()<.2){this.inQuake=!0;let a=St(t.pos.x,t.y,t.pos.z);this.fx.bolt(a,.8),this.fx.ring(a,2.6,"#9ad8ff",.35),this.fx.spark(a.x,a.y+.5,a.z,16,"#bfe8ff",7),this.audio.play("thunder");for(let l of this.enemies)l.dead||l.spawning||Math.hypot(l.pos.x-a.x,l.pos.z-a.z)<2.6&&this.damageEnemy(l,Math.max(4,Math.round(i*.6)),!1,3,.25);this.inQuake=!1}}onEnemyKilled(t){this.kills++;let e=Math.round(t.T.exp*(1+this.round*.25));this.player.addExp(e),this.fx.number(St(t.pos.x,t.y+(t.isBoss?4:2.2),t.pos.z),`+${e} EXP`,"exp");let i=qu(t.type,this.round,this.player.cls);i&&this.spawnDrop(t.pos,i);let n=t.isBoss&&Xu(t.type,this.player.cls,this.inv);n&&this.spawnDrop(t.pos,n);let s=this.player;if(s.perks?.has("soul")&&!s.dead&&s.hp<s.maxHp){let o=Math.min(Math.ceil(s.maxHp*.04),s.maxHp-s.hp);s.hp+=o,this.fx.number(s.pos.clone().add(St(0,2.1,0)),`+${o}`,"heal");let a=t.center();for(let l=0;l<8;l++)this.fx.add.emit({x:a.x+R(-.3,.3),y:a.y+R(0,.5),z:a.z+R(-.3,.3),vx:(s.pos.x-a.x)*1.6,vy:R(1,2.5),vz:(s.pos.z-a.z)*1.6,drag:1,life:.6,size:3,color:"#e0c8ff",color2:"#6a2aff"})}this.target===t&&(this.target=null),this.updateQuest(),t.isBoss&&(this.hitstop=.25,this.shake(1),this.ui.flash("#ffffff",.6))}checkWave(){!this.waveActive||this.wave===0||this.spawnQueue.length||this.enemies.some(t=>!t.dead)||this.waveClearing||(this.waveClearing=!0,this.wave>=3?this.after(1.5,()=>this.victory()):(this.ui.banner("\uACA9\uD1F4!",`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C \uC644\uB8CC \xB7 \uACBD\uD5D8\uCE58 +${20+this.round*10}`,1.8),this.player.addExp(20+this.round*10),this.after(2.6,()=>{this.waveClearing=!1,this.nextWave()})))}victory(){this.waveClearing=!1,this.waveActive=!1,this.round++,this.stage=3,this.nightTarget=0,this.audio.mood="day",this.audio.play("victory"),this.player.hp=this.player.maxHp;let t=!this.cleared[this.mapId];if(this.cleared[this.mapId]=!0,this.ui.banner("\uC2B9\uB9AC",{palace:"\uB3C4\uAE68\uBE44\uB4E4\uC774 \uB2EC\uC544\uB098\uACE0 \uB3D9\uC774 \uD2BC\uB2E4",bamboo:"\uC5EC\uC6B0\uB4E4\uC774 \uC232 \uAE4A\uC774 \uC0AC\uB77C\uC9C4\uB2E4",temple:"\uB9DD\uC790\uB4E4\uC774 \uC800\uC2B9\uC73C\uB85C \uB3CC\uC544\uAC04\uB2E4"}[this.mapId],4,"win-banner"),t&&this.map.next){this.buildPortals();let e=Hn[this.map.next];setTimeout(()=>this.ui.toast(this.map.next==="palace"?"\uBAA8\uB4E0 \uC9C0\uC5ED\uC744 \uD3C9\uC815\uD588\uB2E4! \uAE08\uBE5B \uD3EC\uD0C8\uC774 \uC5F4\uB838\uB2E4":`${e.name}(\uC73C)\uB85C \uAC00\uB294 \uD3EC\uD0C8\uC774 \uC5F4\uB838\uB2E4!`,3.5),2500)}this.updateQuest(),this.save()}onPlayerDeath(){this.state="dead",setTimeout(()=>document.getElementById("gameover").classList.add("show"),900)}retry(){document.getElementById("gameover").classList.remove("show"),this.state="play",this.player.reset();for(let t of this.enemies)t.dispose();this.enemies=[],this.spawnQueue=[];for(let t of this.projectiles)t.mesh&&this.scene.remove(t.mesh);this.projectiles=[],this.timers=[];for(let t of this.rains)this.fx.removeRing(t.tele);this.rains=[];for(let t of this.tornados)for(let e of t.rings)this.scene.remove(e);this.tornados=[],this.ui.setBoss(null),this.waveClearing=!1,this.waveActive&&(this.wave=Math.max(0,this.wave-1),this.after(1.2,()=>this.nextWave()))}shake(t){this.shakeAmt=Math.min(1.2,Math.max(this.shakeAmt,t))}screenFlash(t,e){this.ui.flash(e,.35)}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){let i=this.projectiles[e];if(i.life-=t,i.pos.addScaledVector(i.dir,i.speed*t),i.kind==="orb"){i.mesh.position.copy(i.pos);let n=i.pal||{orb:"#d8fbff",trail:"#8ff0ff",trail2:"#1a40ff"};i.mesh.material.color.set(i.owner==="player"?"#ffffff":n.orb),Math.random()<.9&&this.fx.add.emit({x:i.pos.x+R(-.1,.1),y:i.pos.y+R(-.1,.1),z:i.pos.z+R(-.1,.1),vx:R(-.3,.3),vy:R(.2,.8),vz:R(-.3,.3),life:R(.2,.45),size:3,endSize:1,color:n.trail,color2:n.trail2});let s=this.world.heightAt(i.pos.x,i.pos.z);(s>i.pos.y-.4||this.world.isBlocked(i.pos.x,i.pos.z,.05,s)&&s>i.pos.y-1)&&(i.life=0)}else i.kind==="wave"?this.swordWaveTrail(i,t):i.kind==="talisman"||i.kind==="arrow"?this.missileTrail(i,t):i.kind==="darkwave"?Math.random()<.8&&this.fx.add.emit({x:i.pos.x+R(-.8,.8),y:i.pos.y+R(-.2,.3),z:i.pos.z+R(-.8,.8),vy:.4,life:.4,size:3,endSize:1,color:"#c8a0ff",color2:"#2a0a4a"}):i.kind==="dragon"?this.dragonUpdate(i,t):i.kind==="rainArrow"&&this.rainArrowUpdate(i);if(i.owner==="player"&&(i.kind==="talisman"||i.kind==="arrow"))for(let n of this.world.drums)Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<1.25&&(this.drumHit(n),i.life=0);if(i.owner==="player")for(let n of this.enemies){if(n.dead||n.spawning||i.hitSet.has(n))continue;if(Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<i.radius+n.radius){i.hitSet.add(n);let o=Math.random()<(i.kind==="arrow"?.25:.2);if(this.damageEnemy(n,Math.round(i.dmg*(o?1.8:1)*R(.9,1.1)),o,i.knock??7,i.stun??.35),i.kind==="wave"){let a=n.center().clone();this.fx.cross(a,"#9fe8ff",n.isBoss?5.5:3.8),this.fx.ring(St(n.pos.x,n.y,n.pos.z),n.isBoss?3:1.8,"#9fe8ff",.3),this.fx.spark(a.x,a.y,a.z,14,"#d8f6ff",7),this.audio.play("skillhit"),this.hitstop=Math.max(this.hitstop,.07)}if(i.kind==="orb"&&(i.life=0),i.kind==="talisman"&&(i.hitEnemy=n,i.life=0),i.kind==="arrow"){this.audio.play("arrowhit");let a=n.center();if(this.fx.spark(a.x,a.y,a.z,i.pierce?10:6,i.pierce?"#c8ff9a":"#ffffff",5),i.pierce){this.fx.cross(a.clone(),"#a8ff8a",n.isBoss?3.5:2.4,.25);for(let l=0;l<6;l++)this.fx.norm.emit({x:a.x,y:a.y,z:a.z,vx:R(-3,3),vy:R(1,3),vz:R(-3,3),wob:1.5,drag:2,life:R(.4,.8),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"})}i.pierce||(i.life=0,i.stuck=!0)}if(i.life<=0)break}}else if(i.owner==="enemy"){let n=this.player;Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<i.radius+n.radius*.5&&n.dashT<=0&&n.damage(i.dmg,i.pos)&&(i.life=0)}if(i.life<=0){if(i.kind==="wave"&&this.swordWaveEnd(i),i.kind==="darkwave")for(let n of i.vis)n.kill=!0;i.kind==="talisman"&&this.talismanBurst(i),i.mesh&&(this.scene.remove(i.mesh),i.kind==="orb"&&this.fx.blueFire(i.pos.x,i.pos.y-.2,i.pos.z,10,.2),i.kind==="arrow"&&this.fx.spark(i.pos.x,i.pos.y,i.pos.z,3,"#e8dcc0",2)),this.projectiles.splice(e,1)}}}separate(){let t=[this.player,...this.enemies.filter(e=>!e.dead&&!e.isWisp)];for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let n=t[e],s=t[i],o=s.pos.x-n.pos.x,a=s.pos.z-n.pos.z,l=Math.hypot(o,a),c=n.radius+s.radius;if(l<c&&l>1e-4){let h=(c-l)*.5,u=o/l,d=a/l,f=n===this.player?.3:n.isBoss?.1:1,p=s.isBoss?.1:1;this.world.move(n.pos,-u*h*f,-d*h*f,n.moveR??n.radius),this.world.move(s.pos,u*h*p,d*h*p,s.moveR??s.radius)}}}ambient(t){let e=this.focus,i=this.night,n=this.map.theme.ambient;if(n==="snow"){for(let s=0;s<2;s++)Math.random()<t*30&&this.fx.norm.emit({x:e.x+R(-20,20),y:R(6,10),z:e.z+R(-18,12),vx:R(-.3,.6),vy:-1.2,vz:R(-.2,.2),wob:.8,life:8,size:Math.random()<.3?3:2,color:"#ffffff",floor:.02,alpha:.95});return}n==="leaf"&&Math.random()<t*7*(1-i)&&this.fx.norm.emit({x:e.x+R(-18,18),y:R(4,7),z:e.z+R(-16,10),vx:R(.2,.8),vy:-.7,vz:R(-.2,.3),wob:1.6,life:7,size:2,color:Math.random()<.5?"#8ad06a":"#c8e08a",floor:.02}),n==="petal"&&Math.random()<t*6*(1-i)&&this.fx.norm.emit({x:e.x+R(-18,18),y:R(4,8),z:e.z+R(-16,10),vx:R(.4,1),vy:-.6,vz:R(-.2,.3),wob:1.2,life:7,size:2,color:Math.random()<.6?"#f6c8d4":"#fff4f0",floor:.02,alpha:.95}),Math.random()<t*14*i&&this.fx.add.emit({x:e.x+R(-18,18),y:R(.4,2.5),z:e.z+R(-14,10),vx:R(-.3,.3),vy:R(-.1,.2),vz:R(-.3,.3),wob:.8,life:R(2.5,5),size:2,color:Math.random()<.3?"#9ff0ff":"#d8ff8a",flicker:.8})}simulate(t,e){if(this.updateTarget(),this.player.update(t,e),this.updateDrops(t),this.updatePortals(t),this.flowT-=t,this.enemies.length&&this.flowT<=0){this.flowT=.15;let i=this.player.pos;this.world.updateFlow(i.x,i.z,0),this.enemies.some(n=>n.isBoss&&!n.dead)&&this.world.updateFlow(i.x,i.z,1)}for(let i=this.enemies.length-1;i>=0;i--){let n=this.enemies[i];n.update(t)||(n.dispose(),this.enemies.splice(i,1))}if(this.separate(),this.updateProjectiles(t),this.updateSkills(t),this.timers.length){let i=this.timers.filter(n=>n.at<=this.time);if(i.length){this.timers=this.timers.filter(n=>n.at>this.time);for(let n of i)n.fn()}}for(;this.spawnQueue.length&&this.spawnQueue[0].at<=this.time;)this.spawnEnemy(this.spawnQueue.shift().type);this.spawnQueue.sort((i,n)=>i.at-n.at),this.checkWave(),(this.enemies.length||this.spawnQueue.length)&&this.updateQuest()}after(t,e){this.timers.push({at:this.time+t,fn:e})}stepSim(t){this.time+=t,wi.time.value+=t,this.simulate(t,{mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null})}spawnEnemyAt(t,e,i){let n=new Yr(this,t,St(e,this.world.heightAt(e,i),i),1+this.round);return this.enemies.push(n),n}loop(t){requestAnimationFrame(this.loop);let e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.audio.update(),this.state==="play"&&(this.saveT-=e,this.saveT<=0&&this.save());let i=e;this.hitstop>0&&(this.hitstop-=e,i=e*.05),this.time+=i,wi.time.value+=i,this.night=as(this.night,this.nightTarget,1.2,e),Math.abs(this.night-this.nightTarget)<.002&&(this.night=this.nightTarget),this.alarm=Math.max(0,this.alarm-e);let n=this.readInput();this.state!=="title"&&!this.paused?this.simulate(i,n):this.player.update(i,n);for(let l of this.npcs)l.update(i);for(let l of this.birds)l.update(i);this.world.update(i,this.time),this.ambient(i),this.fx.update(i),wi.player.value.copy(this.player.pos),this.nearInteract=this.state==="play"?this.findInteract():null,this.updateMarker(e);let s;if(this.state==="title"){this.preview.update(e);let l=Math.sin(this.time*.12)*.5+.5;s=St(Math.sin(this.time*.07)*4,.5,Et(10,-6,l)),this.focus.copy(s)}else{let l=this.player;this.lead.x=as(this.lead.x,l.vel.x*.28,3,e),this.lead.z=as(this.lead.z,l.vel.z*.28,3,e),s=St(l.pos.x+this.lead.x,l.y+.6,l.pos.z+this.lead.z-.8),this.focus.x=as(this.focus.x,s.x,7,e),this.focus.y=as(this.focus.y,s.y,5,e),this.focus.z=as(this.focus.z,s.z,7,e)}this.shakeAmt=Math.max(0,this.shakeAmt-e*2.2);let o=this.shakeAmt*this.shakeAmt*.45,a=this.focus.clone().add(St(R(-o,o),0,R(-o,o)*.6));this.pixel.setFocus(a),this.updateLights(e),this.ui.update(e),this.pixel.render(this.scene)}},Xy=new A,qy=new A,lf=new A,Yy=new A;window.addEventListener("DOMContentLoaded",()=>{try{window.game=new dh}catch(r){console.error(r),document.getElementById("title").innerHTML=`<div class="err">WebGL\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.<br><small>${r.message}</small></div>`}});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
