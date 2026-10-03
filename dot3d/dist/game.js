(()=>{var hd=0,th=1,fd=2;var ds=1,dd=2,ar=3,Wn=0,gi=1,fe=2,nn=0,lr=1,He=2,eh=3,ih=4,Xa=5;var us=100,ud=101,pd=102,md=103,gd=104,xd=200,qa=201,yd=202,vd=203,nh=204,ho=205,_d=206,Md=207,bd=208,wd=209,Ed=210,Sd=211,Td=212,Ad=213,Rd=214,ha=0,fa=1,da=2,qs=3,ua=4,pa=5,ma=6,ga=7,sh=0,Cd=1,Id=2,Vi=0,rh=1,oh=2,ah=3,lh=4,ch=5,hh=6,fh=7;var dh=300,Xn=301,ps=302,Ya=303,$a=304,fo=306,bn=1e3,Ji=1001,xa=1002,ae=1003,Pd=1004;var uo=1005;var Ye=1006,Za=1007;var qn=1008;var vi=1009,uh=1010,ph=1011,cr=1012,Ja=1013,Si=1014,Ii=1015,Ti=1016,Ka=1017,ja=1018,hr=1020,mh=35902,gh=35899,xh=1021,yh=1022,_i=1023,ji=1026,Yn=1027,Qa=1028,tl=1029,$n=1030,el=1031;var il=1033,po=33776,mo=33777,go=33778,xo=33779,nl=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37488,fl=37489,yo=37490,dl=37491,ul=37808,pl=37809,ml=37810,gl=37811,xl=37812,yl=37813,vl=37814,_l=37815,Ml=37816,bl=37817,wl=37818,El=37819,Sl=37820,Tl=37821,Al=36492,Rl=36494,Cl=36495,Il=36283,Pl=36284,vo=36285,Ll=36286;var Nr=2300,ya=2301,la=2302,Hc=2303,Gc=2400,Vc=2401,Wc=2402;var Ld=3200,vh=3201;var _o=0,Dd=1,Wi="",ni="srgb",rs="srgb-linear",Ur="linear",ye="srgb";var ca=7680;var kd=519,Nd=512,Ud=513,zd=514,Dl=515,Fd=516,Bd=517,kl=518,Od=519,_h=35044,fr=35048;var Mh="300 es",Fi=2e3,Ys=2001;function Hp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Gp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hd(){let r=zr("canvas");return r.style.display="block",r}var If={},$s=null;function Fr(...r){let t="THREE."+r.shift();$s?$s("log",t,...r):console.log(t,...r)}function Gd(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Vt(...r){r=Gd(r);let t="THREE."+r.shift();if($s)$s("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function qt(...r){r=Gd(r);let t="THREE."+r.shift();if($s)$s("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ss(...r){let t=r.join(" ");t in If||(If[t]=!0,Vt(...r))}function Vd(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Wd={[ha]:fa,[da]:ma,[ua]:ga,[qs]:pa,[fa]:ha,[ma]:da,[ga]:ua,[pa]:qs},Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pf=1234567,Pr=Math.PI/180,Zs=180/Math.PI;function Ki(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[r&255]+li[r>>8&255]+li[r>>16&255]+li[r>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[e&63|128]+li[e>>8&255]+"-"+li[e>>16&255]+li[e>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function ie(r,t,e){return Math.max(t,Math.min(e,r))}function bh(r,t){return(r%t+t)%t}function Vp(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function Wp(r,t,e){return r!==t?(e-r)/(t-r):0}function Lr(r,t,e){return(1-e)*r+e*t}function Xp(r,t,e,i){return Lr(r,t,1-Math.exp(-e*i))}function qp(r,t=1){return t-Math.abs(bh(r,t*2)-t)}function Yp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function $p(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Zp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Jp(r,t){return r+Math.random()*(t-r)}function Kp(r){return r*(.5-Math.random())}function jp(r){r!==void 0&&(Pf=r);let t=Pf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qp(r){return r*Pr}function t0(r){return r*Zs}function e0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function i0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function n0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function s0(r,t,e,i,n){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),d=s((t-i)/2),f=o((t-i)/2),u=s((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":r.set(a*h,l*d,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*u,a*c);break;case"YXY":r.set(l*u,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*u,a*h,a*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function zi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _e(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wh={DEG2RAD:Pr,RAD2DEG:Zs,generateUUID:Ki,clamp:ie,euclideanModulo:bh,mapLinear:Vp,inverseLerp:Wp,lerp:Lr,damp:Xp,pingpong:qp,smoothstep:Yp,smootherstep:$p,randInt:Zp,randFloat:Jp,randFloatSpread:Kp,seededRandom:jp,degToRad:Qp,radToDeg:t0,isPowerOfTwo:e0,ceilPowerOfTwo:i0,floorPowerOfTwo:n0,setQuaternionFromProperEuler:s0,normalize:_e,denormalize:zi},Ch=class Ch{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;var ft=Ch,Ee=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],f=s[o+0],u=s[o+1],p=s[o+2],x=s[o+3];if(d!==x||l!==f||c!==u||h!==p){let m=l*f+c*u+h*p+d*x;m<0&&(f=-f,u=-u,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,a=Math.sin(a*v)/b,l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+f*a,c=c*g+u*a,h=h*g+p*a,d=d*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[o],f=s[o+1],u=s[o+2],p=s[o+3];return t[e]=a*p+h*d+l*u-c*f,t[e+1]=l*p+h*f+c*d-a*u,t[e+2]=c*p+h*u+a*f-l*d,t[e+3]=h*p-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(s/2),f=l(i/2),u=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-n)*u}else if(i>a&&i>d){let u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(n+o)/u,this._z=(s+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-i-d);this._w=(s-c)/u,this._x=(n+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-a);this._w=(o-n)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),d=2*(s*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=n+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return gc.copy(this).projectOnVector(t),this.sub(gc)}reflect(t){return this.sub(gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;var R=Ih,gc=new R,Lf=new Ee,Ph=class Ph{constructor(t,e,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],p=i[8],x=n[0],m=n[3],g=n[6],v=n[1],b=n[4],y=n[7],w=n[2],E=n[5],C=n[8];return s[0]=o*x+a*v+l*w,s[3]=o*m+a*b+l*E,s[6]=o*g+a*y+l*C,s[1]=c*x+h*v+d*w,s[4]=c*m+h*b+d*E,s[7]=c*g+h*y+d*C,s[2]=f*x+u*v+p*w,s[5]=f*m+u*b+p*E,s[8]=f*g+u*y+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*s,u=c*s-o*l,p=e*d+i*f+n*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=f*x,t[4]=(h*e-n*l)*x,t[5]=(n*s-a*e)*x,t[6]=u*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(t,e)),this}rotate(t){return ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-t)),this}translate(t,e){return ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;var Yt=Ph,xc=new Yt,Df=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kf=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r0(){let r={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(n.r=Mn(n.r),n.g=Mn(n.g),n.b=Mn(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(n.r=Ws(n.r),n.g=Ws(n.g),n.b=Ws(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wi?Ur:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[rs]:{primaries:t,whitePoint:i,transfer:Ur,toXYZ:Df,fromXYZ:kf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:Df,fromXYZ:kf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}var ce=r0();function Mn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ts,va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ts===void 0&&(Ts=zr("canvas")),Ts.width=t.width,Ts.height=t.height;let n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Mn(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mn(e[i]/255)*255):e[i]=Mn(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},o0=0,Js=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(yc(n[o].image)):s.push(yc(n[o]))}else s=yc(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function yc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?va.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var a0=0,vc=new R,pi=class r extends Qi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Ji,n=Ji,s=Ye,o=qn,a=_i,l=vi,c=r.DEFAULT_ANISOTROPY,h=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Ki(),this.name="",this.source=new Js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bn:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bn:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=dh;pi.DEFAULT_ANISOTROPY=1;var Lh=class Lh{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(u+1)/2,w=(g+1)/2,E=(h+f)/4,C=(d+x)/4,_=(p+m)/4;return b>y&&b>w?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=E/i,s=C/i):y>w?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=E/n,s=_/n):w<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(w),i=C/s,n=_/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;var De=Lh,_a=class extends Qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},s=new pi(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Js(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends _a{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Br=class extends pi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ae,this.minFilter=ae,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ma=class extends pi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ae,this.minFilter=ae,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Wa=class Wa{constructor(t,e,i,n,s,o,a,l,c,h,d,f,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,d,f,u,p,x,m)}set(t,e,i,n,s,o,a,l,c,h,d,f,u,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wa().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/As.setFromMatrixColumn(t,0).length(),s=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f+x*a,e[4]=p*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,p=c*h,x=c*d;e[0]=f-x*a,e[4]=-o*d,e[8]=p+u*a,e[1]=u+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-u,e[8]=f*c+x,e[1]=l*d,e[5]=x*c+f,e[9]=u*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*d,e[8]=p*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+p,e[10]=f-x*d}else if(t.order==="XZY"){let f=o*l,u=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+x,e[5]=o*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=a*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l0,t,c0)}lookAt(t,e,i){let n=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Dn.crossVectors(i,Mi),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Dn.crossVectors(i,Mi)),Dn.normalize(),No.crossVectors(Mi,Dn),n[0]=Dn.x,n[4]=No.x,n[8]=Mi.x,n[1]=Dn.y,n[5]=No.y,n[9]=Mi.y,n[2]=Dn.z,n[6]=No.z,n[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],v=i[3],b=i[7],y=i[11],w=i[15],E=n[0],C=n[4],_=n[8],A=n[12],P=n[1],k=n[5],L=n[9],z=n[13],D=n[2],N=n[6],H=n[10],X=n[14],Y=n[3],O=n[7],K=n[11],tt=n[15];return s[0]=o*E+a*P+l*D+c*Y,s[4]=o*C+a*k+l*N+c*O,s[8]=o*_+a*L+l*H+c*K,s[12]=o*A+a*z+l*X+c*tt,s[1]=h*E+d*P+f*D+u*Y,s[5]=h*C+d*k+f*N+u*O,s[9]=h*_+d*L+f*H+u*K,s[13]=h*A+d*z+f*X+u*tt,s[2]=p*E+x*P+m*D+g*Y,s[6]=p*C+x*k+m*N+g*O,s[10]=p*_+x*L+m*H+g*K,s[14]=p*A+x*z+m*X+g*tt,s[3]=v*E+b*P+y*D+w*Y,s[7]=v*C+b*k+y*N+w*O,s[11]=v*_+b*L+y*H+w*K,s[15]=v*A+b*z+y*X+w*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*u-c*f,b=a*u-c*d,y=a*f-l*d,w=o*u-c*h,E=o*f-l*h,C=o*d-a*h;return e*(x*v-m*b+g*y)-i*(p*v-m*w+g*E)+n*(p*b-x*w+g*C)-s*(p*y-x*E+m*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(s*h-a*l)+n*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*a-i*o,b=e*l-n*o,y=e*c-s*o,w=i*l-n*a,E=i*c-s*a,C=n*c-s*l,_=h*x-d*p,A=h*m-f*p,P=h*g-u*p,k=d*m-f*x,L=d*g-u*x,z=f*g-u*m,D=v*z-b*L+y*k+w*P-E*A+C*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/D;return t[0]=(a*z-l*L+c*k)*N,t[1]=(n*L-i*z-s*k)*N,t[2]=(x*C-m*E+g*w)*N,t[3]=(f*E-d*C-u*w)*N,t[4]=(l*P-o*z-c*A)*N,t[5]=(e*z-n*P+s*A)*N,t[6]=(m*y-p*C-g*b)*N,t[7]=(h*C-f*y+u*b)*N,t[8]=(o*L-a*P+c*_)*N,t[9]=(i*P-e*L-s*_)*N,t[10]=(p*E-x*y+g*v)*N,t[11]=(d*y-h*E-u*v)*N,t[12]=(a*A-o*k-l*_)*N,t[13]=(e*k-i*A+n*_)*N,t[14]=(x*b-p*w-m*v)*N,t[15]=(h*w-d*b+f*v)*N,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,f=s*c,u=s*h,p=s*d,x=o*h,m=o*d,g=a*d,v=l*c,b=l*h,y=l*d,w=i.x,E=i.y,C=i.z;return n[0]=(1-(x+g))*w,n[1]=(u+y)*w,n[2]=(p-b)*w,n[3]=0,n[4]=(u-y)*E,n[5]=(1-(f+g))*E,n[6]=(m+v)*E,n[7]=0,n[8]=(p+b)*C,n[9]=(m-v)*C,n[10]=(1-(f+x))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=As.set(n[0],n[1],n[2]).length(),a=As.set(n[4],n[5],n[6]).length(),l=As.set(n[8],n[9],n[10]).length();s<0&&(o=-o),Di.copy(this);let c=1/o,h=1/a,d=1/l;return Di.elements[0]*=c,Di.elements[1]*=c,Di.elements[2]*=c,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=d,Di.elements[9]*=d,Di.elements[10]*=d,e.setFromRotationMatrix(Di),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,s,o,a=Fi,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(i-n),f=(e+t)/(e-t),u=(i+n)/(i-n),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Fi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ys)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Fi,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),f=-(e+t)/(e-t),u=-(i+n)/(i-n),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Fi)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ys)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Wa.prototype.isMatrix4=!0;var Zt=Wa,As=new R,Di=new Zt,l0=new R(0,0,0),c0=new R(1,1,1),Dn=new R,No=new R,Mi=new R,Nf=new Zt,Uf=new Ee,si=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],f=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uf.setFromEuler(this),this.setFromQuaternion(Uf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};si.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},h0=0,zf=new R,Rs=new Ee,mn=new Zt,Uo=new R,Mr=new R,f0=new R,d0=new Ee,Ff=new R(1,0,0),Bf=new R(0,1,0),Of=new R(0,0,1),Hf={type:"added"},u0={type:"removed"},Cs={type:"childadded",child:null},_c={type:"childremoved",child:null},ei=class r extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new R,e=new si,i=new Ee,n=new R(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Yt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Ff,t)}rotateY(t){return this.rotateOnAxis(Bf,t)}rotateZ(t){return this.rotateOnAxis(Of,t)}translateOnAxis(t,e){return zf.copy(t).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ff,t)}translateY(t){return this.translateOnAxis(Bf,t)}translateZ(t){return this.translateOnAxis(Of,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Uo.copy(t):Uo.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Mr,Uo,this.up):mn.lookAt(Uo,Mr,this.up),this.quaternion.setFromRotationMatrix(mn),n&&(mn.extractRotation(n.matrixWorld),Rs.setFromRotationMatrix(mn),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hf),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u0),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hf),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,f0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,d0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ei.DEFAULT_UP=new R(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Lt=class extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},p0={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},zo={h:0,s:0,l:0};function Mc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ce.workingColorSpace){if(t=bh(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Mc(o,s,t+1/3),this.g=Mc(o,s,t),this.b=Mc(o,s,t-1/3)}return ce.colorSpaceToWorking(this,n),this}setStyle(t,e=ni){function i(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){let i=Xd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=Ws(t.r),this.g=Ws(t.g),this.b=Ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return ce.workingToColorSpace(ci.copy(this),t),Math.round(ie(ci.r*255,0,255))*65536+Math.round(ie(ci.g*255,0,255))*256+Math.round(ie(ci.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(ci.copy(this),e);let i=ci.r,n=ci.g,s=ci.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(ci.copy(this),e),t.r=ci.r,t.g=ci.g,t.b=ci.b,t}getStyle(t=ni){ce.workingToColorSpace(ci.copy(this),t);let e=ci.r,i=ci.g,n=ci.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(zo);let i=Lr(kn.h,zo.h,e),n=Lr(kn.s,zo.s,e),s=Lr(kn.l,zo.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new ct;ct.NAMES=Xd;var wn=class extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ki=new R,gn=new R,bc=new R,xn=new R,Is=new R,Ps=new R,Gf=new R,wc=new R,Ec=new R,Sc=new R,Tc=new De,Ac=new De,Rc=new De,_n=class r{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),ki.subVectors(t,e),n.cross(ki);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){ki.subVectors(n,e),gn.subVectors(i,e),bc.subVectors(t,e);let o=ki.dot(ki),a=ki.dot(gn),l=ki.dot(bc),c=gn.dot(gn),h=gn.dot(bc),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-u-p,p,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return Tc.setScalar(0),Ac.setScalar(0),Rc.setScalar(0),Tc.fromBufferAttribute(t,e),Ac.fromBufferAttribute(t,i),Rc.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Tc,s.x),o.addScaledVector(Ac,s.y),o.addScaledVector(Rc,s.z),o}static isFrontFacing(t,e,i,n){return ki.subVectors(i,e),gn.subVectors(t,e),ki.cross(gn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),ki.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;Is.subVectors(n,i),Ps.subVectors(s,i),wc.subVectors(t,i);let l=Is.dot(wc),c=Ps.dot(wc);if(l<=0&&c<=0)return e.copy(i);Ec.subVectors(t,n);let h=Is.dot(Ec),d=Ps.dot(Ec);if(h>=0&&d<=h)return e.copy(n);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Is,o);Sc.subVectors(t,s);let u=Is.dot(Sc),p=Ps.dot(Sc);if(p>=0&&u<=p)return e.copy(s);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(Ps,a);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return Gf.subVectors(s,n),a=(d-h)/(d-h+(u-p)),e.copy(n).addScaledVector(Gf,a);let g=1/(m+x+f);return o=x*g,a=f*g,e.copy(i).addScaledVector(Is,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ni):Ni.fromBufferAttribute(s,o),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(t.matrixWorld),this.union(Fo)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Bo.subVectors(this.max,br),Ls.subVectors(t.a,br),Ds.subVectors(t.b,br),ks.subVectors(t.c,br),Nn.subVectors(Ds,Ls),Un.subVectors(ks,Ds),ts.subVectors(Ls,ks);let e=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-ts.z,ts.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,ts.z,0,-ts.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-ts.y,ts.x,0];return!Cc(e,Ls,Ds,ks,Bo)||(e=[1,0,0,0,1,0,0,0,1],!Cc(e,Ls,Ds,ks,Bo))?!1:(Oo.crossVectors(Nn,Un),e=[Oo.x,Oo.y,Oo.z],Cc(e,Ls,Ds,ks,Bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yn=[new R,new R,new R,new R,new R,new R,new R,new R],Ni=new R,Fo=new tn,Ls=new R,Ds=new R,ks=new R,Nn=new R,Un=new R,ts=new R,br=new R,Bo=new R,Oo=new R,es=new R;function Cc(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){es.fromArray(r,s);let a=n.x*Math.abs(es.x)+n.y*Math.abs(es.y)+n.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=i.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qe=new R,Ho=new ft,m0=0,Oe=class extends Qi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ho.fromBufferAttribute(this,e),Ho.applyMatrix3(t),this.setXY(e,Ho.x,Ho.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hr=class extends Oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Gr=class extends Oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var zt=class extends Oe{constructor(t,e,i){super(new Float32Array(t),e,i)}},g0=new tn,wr=new R,Ic=new R,En=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):g0.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);let e=wr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(wr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Ic)),this.expandByPoint(wr.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},x0=0,Ci=new Zt,Pc=new ei,Ns=new R,bi=new tn,Er=new tn,ti=new R,ue=class r extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hp(t)?Gr:Hr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,e,i){return Ci.makeTranslation(t,e,i),this.applyMatrix4(Ci),this}scale(t,e,i){return Ci.makeScale(t,e,i),this.applyMatrix4(Ci),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];bi.setFromBufferAttribute(s),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(ti.addVectors(bi.min,Er.min),bi.expandByPoint(ti),ti.addVectors(bi.max,Er.max),bi.expandByPoint(ti)):(bi.expandByPoint(Er.min),bi.expandByPoint(Er.max))}bi.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)ti.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(ti));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ti.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),ti.add(Ns)),n=Math.max(n,i.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Oe(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new R,l[_]=new R;let c=new R,h=new R,d=new R,f=new ft,u=new ft,p=new ft,x=new R,m=new R;function g(_,A,P){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,_),u.fromBufferAttribute(s,A),p.fromBufferAttribute(s,P),h.sub(c),d.sub(c),u.sub(f),p.sub(f);let k=1/(u.x*p.y-p.x*u.y);isFinite(k)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-u.y).multiplyScalar(k),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(k),a[_].add(x),a[A].add(x),a[P].add(x),l[_].add(m),l[A].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,A=v.length;_<A;++_){let P=v[_],k=P.start,L=P.count;for(let z=k,D=k+L;z<D;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new R,y=new R,w=new R,E=new R;function C(_){w.fromBufferAttribute(n,_),E.copy(w);let A=a[_];b.copy(A),b.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(E,A);let k=y.dot(l[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,k)}for(let _=0,A=v.length;_<A;++_){let P=v[_],k=P.start,L=P.count;for(let z=k,D=k+L;z<D;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let n=new R,s=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let f=0,u=t.count;f<u;f+=3){let p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ti.fromBufferAttribute(t,e),ti.normalize(),t.setXYZ(e,ti.x,ti.y,ti.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?u=l[x]*a.data.stride+a.offset:u=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[u++]}return new Oe(f,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,i);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},di=new R,js=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyMatrix4(t),this.setXYZ(e,di.x,di.y,di.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyNormalMatrix(t),this.setXYZ(e,di.x,di.y,di.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.transformDirection(t),this.setXYZ(e,di.x,di.y,di.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lc=new R,y0=new R,v0=new Yt,Ui=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Lc.subVectors(i,e).cross(y0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Lc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||v0.getNormalMatrix(t),n=this.coplanarPoint(Lc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_0=0,Bi=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=lr,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ho,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qs=class extends Bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Us,Sr=new R,zs=new R,Fs=new R,Bs=new ft,Tr=new ft,qd=new Zt,Go=new R,Ar=new R,Vo=new R,Vf=new ft,Dc=new ft,Wf=new ft,Wr=class extends ei{constructor(t=new Qs){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new ue;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Vr(e,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new js(i,3,0,!1)),Us.setAttribute("uv",new js(i,2,3,!1))}this.geometry=Us,this.material=t,this.center=new ft(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),qd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Fs.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let o=this.center;Wo(Go.set(-.5,-.5,0),Fs,o,zs,n,s),Wo(Ar.set(.5,-.5,0),Fs,o,zs,n,s),Wo(Vo.set(.5,.5,0),Fs,o,zs,n,s),Vf.set(0,0),Dc.set(1,0),Wf.set(1,1);let a=t.ray.intersectTriangle(Go,Ar,Vo,!1,Sr);if(a===null&&(Wo(Ar.set(-.5,.5,0),Fs,o,zs,n,s),Dc.set(0,1),a=t.ray.intersectTriangle(Go,Vo,Ar,!1,Sr),a===null))return;let l=t.ray.origin.distanceTo(Sr);l<t.near||l>t.far||e.push({distance:l,point:Sr.clone(),uv:_n.getInterpolation(Sr,Go,Ar,Vo,Vf,Dc,Wf,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Wo(r,t,e,i,n,s){Bs.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(Tr.x=s*Bs.x-n*Bs.y,Tr.y=n*Bs.x+s*Bs.y):Tr.copy(Bs),r.copy(t),r.x+=Tr.x,r.y+=Tr.y,r.applyMatrix4(qd)}var vn=new R,kc=new R,Xo=new R,qo=new R,Xr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){kc.copy(t).add(e).multiplyScalar(.5),Xo.copy(e).sub(t).normalize(),qo.copy(this.origin).sub(kc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Xo),a=qo.dot(this.direction),l=-qo.dot(Xo),c=qo.lengthSq(),h=Math.abs(1-o*o),d,f,u,p;if(h>0)if(d=o*l-a,f=o*a-l,p=s*h,d>=0)if(f>=-p)if(f<=p){let x=1/h;d*=x,f*=x,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-s,-l),s),u=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),u=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(kc).addScaledVector(Xo,f),u}intersectSphere(t,e){if(t.radius<0)return null;vn.subVectors(t.center,this.origin);let i=vn.dot(this.direction),n=vn.dot(vn)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,u=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=i.x-o.x,v=i.y-o.y,b=i.z-o.z,y=Math.abs(l),w=Math.abs(c),E=Math.abs(h),C,_,A,P,k,L,z,D,N,H,X,Y;if(y>=w&&y>=E?(A=l,L=d,N=p,Y=g,l>=0?(C=c,_=h,P=f,k=u,z=x,D=m,H=v,X=b):(C=h,_=c,P=u,k=f,z=m,D=x,H=b,X=v)):w>=E?(A=c,L=f,N=x,Y=v,c>=0?(C=h,_=l,P=u,k=d,z=m,D=p,H=b,X=g):(C=l,_=h,P=d,k=u,z=p,D=m,H=g,X=b)):(A=h,L=u,N=m,Y=b,h>=0?(C=l,_=c,P=d,k=f,z=p,D=x,H=g,X=v):(C=c,_=l,P=f,k=d,z=x,D=p,H=v,X=g)),A===0)return null;let O=C/A,K=_/A,tt=1/A,St=P-O*L,At=k-K*L,Kt=z-O*N,Xt=D-K*N,Qt=H-O*Y,J=X-K*Y,st=Qt*Xt-J*Kt,Rt=St*J-At*Qt,Wt=Kt*At-Xt*St;if(n){if(st<0||Rt<0||Wt<0)return null}else if((st<0||Rt<0||Wt<0)&&(st>0||Rt>0||Wt>0))return null;let Ct=st+Rt+Wt;if(Ct===0)return null;let se=tt*(st*L+Rt*N+Wt*Y);return(Ct>0?se<0:se>0)?null:this.at(se/Ct,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xf=new Zt,is=new Xr,Yo=new En,qf=new R,$o=new R,Zo=new R,Jo=new R,Nc=new R,Ko=new R,Yf=new R,jo=new R,ot=class extends ei{constructor(t=new ue,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){Ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Nc.fromBufferAttribute(d,t),o?Ko.addScaledVector(Nc,h):Ko.addScaledVector(Nc.sub(e),h))}e.add(Ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),is.copy(t.ray).recast(t.near),!(Yo.containsPoint(is.origin)===!1&&(is.intersectSphere(Yo,qf)===null||is.origin.distanceToSquared(qf)>(t.far-t.near)**2))&&(Xf.copy(s).invert(),is.copy(t.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,w=b;y<w;y+=3){let E=a.getX(y),C=a.getX(y+1),_=a.getX(y+2);n=Qo(this,g,t,i,c,h,d,E,C,_),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);n=Qo(this,o,t,i,c,h,d,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,w=b;y<w;y+=3){let E=y,C=y+1,_=y+2;n=Qo(this,g,t,i,c,h,d,E,C,_),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=m,b=m+1,y=m+2;n=Qo(this,o,t,i,c,h,d,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function M0(r,t,e,i,n,s,o,a){let l;if(t.side===gi?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===Wn,a),l===null)return null;jo.copy(a),jo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(jo);return c<e.near||c>e.far?null:{distance:c,point:jo.clone(),object:r}}function Qo(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,$o),r.getVertexPosition(l,Zo),r.getVertexPosition(c,Jo);let h=M0(r,t,e,i,$o,Zo,Jo,Yf);if(h){let d=new R;_n.getBarycoord(Yf,$o,Zo,Jo,d),n&&(h.uv=_n.getInterpolatedAttribute(n,a,l,c,d,new ft)),s&&(h.uv1=_n.getInterpolatedAttribute(s,a,l,c,d,new ft)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};_n.getNormal($o,Zo,Jo,f.normal),h.face=f,h.barycoord=d}return h}var os=class extends pi{constructor(t=null,e=1,i=1,n,s,o,a,l,c=ae,h=ae,d,f){super(null,o,a,l,c,h,n,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class extends Oe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Os=new Zt,$f=new Zt,ta=[],Zf=new tn,b0=new Zt,Rr=new ot,Cr=new En,as=class extends ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,b0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),Zf.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(Zf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Os),Cr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),t.ray.intersectsSphere(Cr)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Os),$f.multiplyMatrices(i,Os),Rr.matrixWorld=$f,Rr.raycast(t,ta);for(let o=0,a=ta.length;o<a;o++){let l=ta[o];l.instanceId=s,l.object=this,e.push(l)}ta.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new os(new Float32Array(n*this.count),n,this.count,Qa,Ii));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ns=new En,w0=new ft(.5,.5),ea=new R,er=class{constructor(t=new Ui,e=new Ui,i=new Ui,n=new Ui,s=new Ui,o=new Ui){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Fi,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],u=s[7],p=s[8],x=s[9],m=s[10],g=s[11],v=s[12],b=s[13],y=s[14],w=s[15];if(n[0].setComponents(c-o,u-h,g-p,w-v).normalize(),n[1].setComponents(c+o,u+h,g+p,w+v).normalize(),n[2].setComponents(c+a,u+d,g+x,w+b).normalize(),n[3].setComponents(c-a,u-d,g-x,w-b).normalize(),i)n[4].setComponents(l,f,m,y).normalize(),n[5].setComponents(c-l,u-f,g-m,w-y).normalize();else if(n[4].setComponents(c-l,u-f,g-m,w-y).normalize(),e===Fi)n[5].setComponents(c+l,u+f,g+m,w+y).normalize();else if(e===Ys)n[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){ns.center.set(0,0,0);let e=w0.distanceTo(t.center);return ns.radius=.7071067811865476+e,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(ea.x=n.normal.x>0?t.max.x:t.min.x,ea.y=n.normal.y>0?t.max.y:t.min.y,ea.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ba=class extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jf=new Zt,Xc=new Xr,ia=new En,na=new R,qr=class extends ei{constructor(t=new ue,e=new ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ia.copy(i.boundingSphere),ia.applyMatrix4(n),ia.radius+=s,t.ray.intersectsSphere(ia)===!1)return;Jf.copy(n).invert(),Xc.copy(t.ray).applyMatrix4(Jf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let p=f,x=u;p<x;p++){let m=c.getX(p);na.fromBufferAttribute(d,m),Kf(na,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let p=f,x=u;p<x;p++)na.fromBufferAttribute(d,p),Kf(na,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Kf(r,t,e,i,n,s,o){let a=Xc.distanceSqToPoint(r);if(a<e){let l=new R;Xc.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Yr=class extends pi{constructor(t=[],e=Xn,i,n,s,o,a,l,c,h){super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oi=class extends pi{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var en=class extends pi{constructor(t,e,i=Si,n,s,o,a=ae,l=ae,c,h=ji,d=1){if(h!==ji&&h!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},wa=class extends en{constructor(t,e=Si,i=Xn,n,s,o=ae,a=ae,l,c=ji){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$r=class extends pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ut=class r extends ue{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,i,e,t,o,s,0),p("z","y","x",1,-1,i,e,-t,o,s,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function p(x,m,g,v,b,y,w,E,C,_,A){let P=y/C,k=w/_,L=y/2,z=w/2,D=E/2,N=C+1,H=_+1,X=0,Y=0,O=new R;for(let K=0;K<H;K++){let tt=K*k-z;for(let St=0;St<N;St++){let At=St*P-L;O[x]=At*v,O[m]=tt*b,O[g]=D,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[g]=E>0?1:-1,h.push(O.x,O.y,O.z),d.push(St/C),d.push(1-K/_),X+=1}}for(let K=0;K<_;K++)for(let tt=0;tt<C;tt++){let St=f+tt+N*K,At=f+tt+N*(K+1),Kt=f+(tt+1)+N*(K+1),Xt=f+(tt+1)+N*K;l.push(St,At,Xt),l.push(At,Kt,Xt),Y+=6}a.addGroup(u,Y,A),u+=Y,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Sn=class r extends ue{constructor(t=1,e=1,i=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,p=i*2+s,x=n+1,m=new R,g=new R;for(let v=0;v<=p;v++){let b=0,y=0,w=0,E=0;if(v<=i){let A=v/i,P=A*Math.PI/2;y=-h-t*Math.cos(P),w=t*Math.sin(P),E=-t*Math.cos(P),b=A*d}else if(v<=i+s){let A=(v-i)/s;y=-h+A*e,w=t,E=0,b=d+A*f}else{let A=(v-i-s)/i,P=A*Math.PI/2;y=h+t*Math.sin(P),w=t*Math.cos(P),E=t*Math.sin(P),b=d+f+A*d}let C=Math.max(0,Math.min(1,b/u)),_=0;v===0?_=.5/n:v===p&&(_=-.5/n);for(let A=0;A<=n;A++){let P=A/n,k=P*Math.PI*2,L=Math.sin(k),z=Math.cos(k);g.x=-w*z,g.y=y,g.z=w*L,a.push(g.x,g.y,g.z),m.set(-w*z,E,w*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+_,C)}if(v>0){let A=(v-1)*x;for(let P=0;P<n;P++){let k=A+P,L=A+P+1,z=v*x+P,D=v*x+P+1;o.push(k,L,z),o.push(L,D,z)}}}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Hi=class r extends ue{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new R,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=i+d/e*n;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(a,3)),this.setAttribute("uv",new zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ht=class r extends ue{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],f=[],u=[],p=0,x=[],m=i/2,g=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(u,2));function v(){let y=new R,w=new R,E=0,C=(e-t)/i;for(let _=0;_<=s;_++){let A=[],P=_/s,k=P*(e-t)+t;for(let L=0;L<=n;L++){let z=L/n,D=z*l+a,N=Math.sin(D),H=Math.cos(D);w.x=k*N,w.y=-P*i+m,w.z=k*H,d.push(w.x,w.y,w.z),y.set(N,C,H).normalize(),f.push(y.x,y.y,y.z),u.push(z,1-P),A.push(p++)}x.push(A)}for(let _=0;_<n;_++)for(let A=0;A<s;A++){let P=x[A][_],k=x[A+1][_],L=x[A+1][_+1],z=x[A][_+1];(t>0||A!==0)&&(h.push(P,k,z),E+=3),(e>0||A!==s-1)&&(h.push(k,L,z),E+=3)}c.addGroup(g,E,0),g+=E}function b(y){let w=p,E=new ft,C=new R,_=0,A=y===!0?t:e,P=y===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,m*P,0),f.push(0,P,0),u.push(.5,.5),p++;let k=p;for(let L=0;L<=n;L++){let D=L/n*l+a,N=Math.cos(D),H=Math.sin(D);C.x=A*H,C.y=m*P,C.z=A*N,d.push(C.x,C.y,C.z),f.push(0,P,0),E.x=N*.5+.5,E.y=H*.5*P+.5,u.push(E.x,E.y),p++}for(let L=0;L<n;L++){let z=w+L,D=k+L;y===!0?h.push(D,D+1,z):h.push(D+1,D,z),_+=3}c.addGroup(g,_,y===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ne=class r extends Ht{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ea=class r extends ue{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],o=[];a(n),c(i),h(),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(s.slice(),3)),this.setAttribute("uv",new zt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new R,y=new R,w=new R;for(let E=0;E<e.length;E+=3)u(e[E+0],b),u(e[E+1],y),u(e[E+2],w),l(b,y,w,v)}function l(v,b,y,w){let E=w+1,C=[];for(let _=0;_<=E;_++){C[_]=[];let A=v.clone().lerp(y,_/E),P=b.clone().lerp(y,_/E),k=E-_;for(let L=0;L<=k;L++)L===0&&_===E?C[_][L]=A:C[_][L]=A.clone().lerp(P,L/k)}for(let _=0;_<E;_++)for(let A=0;A<2*(E-_)-1;A++){let P=Math.floor(A/2);A%2===0?(f(C[_][P+1]),f(C[_+1][P]),f(C[_][P])):(f(C[_][P+1]),f(C[_+1][P+1]),f(C[_+1][P]))}}function c(v){let b=new R;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(v),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function h(){let v=new R;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];let y=m(v)/2/Math.PI+.5,w=g(v)/Math.PI+.5;o.push(y,1-w)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){let b=o[v+0],y=o[v+2],w=o[v+4],E=Math.max(b,y,w),C=Math.min(b,y,w);E>.9&&C<.1&&(b<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function u(v,b){let y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let v=new R,b=new R,y=new R,w=new R,E=new ft,C=new ft,_=new ft;for(let A=0,P=0;A<s.length;A+=9,P+=6){v.set(s[A+0],s[A+1],s[A+2]),b.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),E.set(o[P+0],o[P+1]),C.set(o[P+2],o[P+3]),_.set(o[P+4],o[P+5]),w.copy(v).add(b).add(y).divideScalar(3);let k=m(w);x(E,P+0,v,k),x(C,P+2,b,k),x(_,P+4,y,k)}}function x(v,b,y,w){w<0&&v.x===1&&(o[b]=v.x-1),y.x===0&&y.z===0&&(o[b]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let h=i[n],f=i[n+1]-h,u=(o-h)/f;return(n+u)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new ft:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new R,n=[],s=[],o=[],a=new R,l=new Zt;for(let u=0;u<=t;u++){let p=u/t;n[u]=this.getTangentAt(p,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(n[u-1],n[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ie(n[u-1].dot(n[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,p))}o[u].crossVectors(n[u],s[u])}if(e===!0){let u=Math.acos(ie(s[0].dot(s[t]),-1,1));u/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(u=-u);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],u*p)),o[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends wi{constructor(t=0,e=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){let i=e,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Sa=class extends ir{constructor(t,e,i,n,s,o){super(t,e,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eh(){let r=0,t=0,e=0,i=0;function n(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,n(o,a,f,u)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+i*a}}}var jf=new R,Qf=new R,Uc=new Eh,zc=new Eh,Fc=new Eh,Ta=class extends wi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%s]:(Qf.subVectors(n[0],n[1]).add(n[0]),c=Qf);let d=n[a%s],f=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(jf.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=jf),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Uc.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,x,m),zc.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,x,m),Fc.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),zc.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Fc.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(Uc.calc(l),zc.calc(l),Fc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function td(r,t,e,i,n){let s=(i-t)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*r+e}function E0(r,t){let e=1-r;return e*e*t}function S0(r,t){return 2*(1-r)*r*t}function T0(r,t){return r*r*t}function Dr(r,t,e,i){return E0(r,t)+S0(r,e)+T0(r,i)}function A0(r,t){let e=1-r;return e*e*e*t}function R0(r,t){let e=1-r;return 3*e*e*r*t}function C0(r,t){return 3*(1-r)*r*r*t}function I0(r,t){return r*r*r*t}function kr(r,t,e,i,n){return A0(r,t)+R0(r,e)+C0(r,i)+I0(r,n)}var Zr=class extends wi{constructor(t=new ft,e=new ft,i=new ft,n=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ft){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(kr(t,n.x,s.x,o.x,a.x),kr(t,n.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Aa=class extends wi{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(kr(t,n.x,s.x,o.x,a.x),kr(t,n.y,s.y,o.y,a.y),kr(t,n.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Jr=class extends wi{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends wi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends wi{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(Dr(t,n.x,s.x,o.x),Dr(t,n.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ls=class extends wi{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(Dr(t,n.x,s.x,o.x),Dr(t,n.y,s.y,o.y),Dr(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let i=e,n=this.points,s=(n.length-1)*t,o=Math.floor(s),a=s-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(td(a,l.x,c.x,h.x,d.x),td(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ft().fromArray(n))}return this}},qc=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:Ta,CubicBezierCurve:Zr,CubicBezierCurve3:Aa,EllipseCurve:ir,LineCurve:Jr,LineCurve3:Ra,QuadraticBezierCurve:Kr,QuadraticBezierCurve3:ls,SplineCurve:jr}),Ca=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let o=n[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let o=s[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new qc[n.type]().fromJSON(n))}return this}},Qr=class extends Ca{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Jr(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Kr(this.currentPoint.clone(),new ft(t,e),new ft(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,o){let a=new Zr(this.currentPoint.clone(),new ft(t,e),new ft(i,n),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new jr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,s,o),this}absarc(t,e,i,n,s,o){return this.absellipse(t,e,i,i,n,s,o),this}ellipse(t,e,i,n,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,s,o,a,l),this}absellipse(t,e,i,n,s,o,a,l){let c=new ir(t,e,i,n,s,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},nr=class extends Qr{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new Qr().fromJSON(n))}return this}};function P0(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=Yd(r,0,n,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=U0(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,d=l;for(let f=e;f<n;f+=e){let u=r[f],p=r[f+1];u<a&&(a=u),p<l&&(l=p),u>h&&(h=u),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return to(s,o,e,a,l,c,0),o}function Yd(r,t,e,i,n){let s;if(n===Y0(r,t,e,i)>0)for(let o=t;o<e;o+=i)s=ed(o/i|0,r[o],r[o+1],s);else for(let o=e-i;o>=t;o-=i)s=ed(o/i|0,r[o],r[o+1],s);return s&&sr(s,s.next)&&(io(s),s=s.next),s}function cs(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(sr(e,e.next)||Ne(e.prev,e,e.next)===0)){if(io(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function to(r,t,e,i,n,s,o){if(!r)return;!o&&s&&H0(r,i,n,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?D0(r,i,n,s):L0(r)){t.push(l.i,r.i,c.i),io(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=k0(cs(r),t),to(r,t,e,i,n,s,2)):o===2&&N0(r,t,e,i,n,s):to(cs(r),t,e,i,n,s,1);break}}}function L0(r){let t=r.prev,e=r,i=r.next;if(Ne(t,e,i)>=0)return!1;let n=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(n,s,o),d=Math.min(a,l,c),f=Math.max(n,s,o),u=Math.max(a,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&Ir(n,a,s,l,o,c,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function D0(r,t,e,i){let n=r.prev,s=r,o=r.next;if(Ne(n,s,o)>=0)return!1;let a=n.x,l=s.x,c=o.x,h=n.y,d=s.y,f=o.y,u=Math.min(a,l,c),p=Math.min(h,d,f),x=Math.max(a,l,c),m=Math.max(h,d,f),g=Yc(u,p,t,e,i),v=Yc(x,m,t,e,i),b=r.prevZ,y=r.nextZ;for(;b&&b.z>=g&&y&&y.z<=v;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=m&&b!==n&&b!==o&&Ir(a,h,l,d,c,f,b.x,b.y)&&Ne(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=u&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==o&&Ir(a,h,l,d,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=m&&b!==n&&b!==o&&Ir(a,h,l,d,c,f,b.x,b.y)&&Ne(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==o&&Ir(a,h,l,d,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function k0(r,t){let e=r;do{let i=e.prev,n=e.next.next;!sr(i,n)&&Zd(i,e,e.next,n)&&eo(i,n)&&eo(n,i)&&(t.push(i.i,e.i,n.i),io(e),io(e.next),e=r=n),e=e.next}while(e!==r);return cs(e)}function N0(r,t,e,i,n,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W0(o,a)){let l=Jd(o,a);o=cs(o,o.next),l=cs(l,l.next),to(o,t,e,i,n,s,0),to(l,t,e,i,n,s,0);return}a=a.next}o=o.next}while(o!==r)}function U0(r,t,e,i){let n=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*i,l=s<o-1?t[s+1]*i:r.length,c=Yd(r,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(V0(c))}n.sort(z0);for(let s=0;s<n.length;s++)e=F0(n[s],e);return e}function z0(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let i=(r.next.y-r.y)/(r.next.x-r.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function F0(r,t){let e=B0(r,t);if(!e)return t;let i=Jd(e,r);return cs(i,i.next),cs(e,e.next)}function B0(r,t){let e=t,i=r.x,n=r.y,s=-1/0,o;if(sr(r,e))return e;do{if(sr(r,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&$d(n<c?i:s,n,l,c,n<c?s:i,n,e.x,e.y)){let d=Math.abs(n-e.y)/(i-e.x);eo(e,r)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&O0(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function O0(r,t){return Ne(r.prev,r,t.prev)<0&&Ne(t.next,r,r.next)<0}function H0(r,t,e,i){let n=r;do n.z===0&&(n.z=Yc(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,G0(n)}function G0(r){let t,e=1;do{let i=r,n;r=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;i=o}s.nextZ=null,e*=2}while(t>1);return r}function Yc(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function V0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function $d(r,t,e,i,n,s,o,a){return(n-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(n-o)*(i-a)}function Ir(r,t,e,i,n,s,o,a){return!(r===o&&t===a)&&$d(r,t,e,i,n,s,o,a)}function W0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!X0(r,t)&&(eo(r,t)&&eo(t,r)&&q0(r,t)&&(Ne(r.prev,r,t.prev)||Ne(r,t.prev,t))||sr(r,t)&&Ne(r.prev,r,r.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function sr(r,t){return r.x===t.x&&r.y===t.y}function Zd(r,t,e,i){let n=ra(Ne(r,t,e)),s=ra(Ne(r,t,i)),o=ra(Ne(e,i,r)),a=ra(Ne(e,i,t));return!!(n!==s&&o!==a||n===0&&sa(r,e,t)||s===0&&sa(r,i,t)||o===0&&sa(e,r,i)||a===0&&sa(e,t,i))}function sa(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function ra(r){return r>0?1:r<0?-1:0}function X0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Zd(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function eo(r,t){return Ne(r.prev,r,r.next)<0?Ne(r,t,r.next)>=0&&Ne(r,r.prev,t)>=0:Ne(r,t,r.prev)<0||Ne(r,r.next,t)<0}function q0(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function Jd(r,t){let e=$c(r.i,r.x,r.y),i=$c(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function ed(r,t,e,i){let n=$c(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function io(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $c(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Y0(r,t,e,i){let n=0;for(let s=t,o=e-i;s<e;s+=i)n+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return n}var Zc=class{static triangulate(t,e,i=2){return P0(t,e,i)}},Xs=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];id(t),nd(i,t);let o=t.length;e.forEach(id);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,nd(i,e[l]);let a=Zc.triangulate(i,n);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function id(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function nd(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Se=class r extends Ea{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},no=class r extends ue{constructor(t=[new ft(0,-.5),new ft(.5,0),new ft(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=ie(n,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,d=new R,f=new ft,u=new R,p=new R,x=new R,m=0,g=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,u.x=g*1,u.y=-m,u.z=g*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(p)}for(let v=0;v<=e;v++){let b=i+v*h*n,y=Math.sin(b),w=Math.cos(b);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*w,o.push(d.x,d.y,d.z),f.x=v/e,f.y=E/(t.length-1),a.push(f.x,f.y);let C=l[3*E+0]*y,_=l[3*E+1],A=l[3*E+0]*w;c.push(C,_,A)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){let y=b+v*t.length,w=y,E=y+t.length,C=y+t.length+1,_=y+1;s.push(w,E,_),s.push(C,_,E)}this.setIndex(s),this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.setAttribute("normal",new zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var me=class r extends ue{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,f=e/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*f-o;for(let b=0;b<c;b++){let y=b*d-s;p.push(y,-v,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let b=v+c*g,y=v+c*(g+1),w=v+1+c*(g+1),E=v+1+c*g;u.push(b,y,E),u.push(y,w,E)}this.setIndex(u),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Fn=class r extends ue{constructor(t=.5,e=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],d=t,f=(e-t)/n,u=new R,p=new ft;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let g=s+m/i*o;u.x=d*Math.cos(g),u.y=d*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}d+=f}for(let x=0;x<n;x++){let m=x*(i+1);for(let g=0;g<i;g++){let v=g+m,b=v,y=v+i+1,w=v+i+2,E=v+1;a.push(b,y,E),a.push(y,w,E)}}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},so=class r extends ue{constructor(t=new nr([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new zt(n,3)),this.setAttribute("normal",new zt(s,3)),this.setAttribute("uv",new zt(o,2));function c(h){let d=n.length/3,f=h.extractPoints(e),u=f.shape,p=f.holes;Xs.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];Xs.isClockWise(v)===!0&&(p[m]=v.reverse())}let x=Xs.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];u=u.concat(v)}for(let m=0,g=u.length;m<g;m++){let v=u[m];n.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){let v=x[m],b=v[0]+d,y=v[1]+d,w=v[2]+d;i.push(b,y,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return $0(e,t)}static fromJSON(t,e){let i=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=e[t.shapes[n]];i.push(o)}return new r(i,t.curveSegments)}};function $0(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,i=r.length;e<i;e++){let n=r[e];t.shapes.push(n.uuid)}else t.shapes.push(r.uuid);return t}var Jt=class r extends ue{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,f=new R,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let v=[],b=g/i,y=o+b*a,w=t*Math.cos(y),E=Math.sqrt(t*t-w*w),C=0;g===0&&o===0?C=.5/e:g===i&&l===Math.PI&&(C=-.5/e);for(let _=0;_<=e;_++){let A=_/e,P=n+A*s;d.x=-E*Math.cos(P),d.y=w,d.z=E*Math.sin(P),p.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+C,1-b),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let b=h[g][v+1],y=h[g][v],w=h[g+1][v],E=h[g+1][v+1];(g!==0||o>0)&&u.push(b,y,E),(g!==i-1||l<Math.PI)&&u.push(y,w,E)}this.setIndex(u),this.setAttribute("position",new zt(p,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mi=class r extends ue{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],f=new R,u=new R,p=new R;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let g=0;g<=n;g++){let v=g/n*s;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,v=(n+1)*(x-1)+m-1,b=(n+1)*(x-1)+m,y=(n+1)*x+m;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ro=class r extends ue{constructor(t=new ls(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new ft,h=new R,d=[],f=[],u=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(u,2));function x(){for(let b=0;b<e;b++)m(b);m(s===!1?e:0),v(),g()}function m(b){h=t.getPointAt(b/e,h);let y=o.normals[b],w=o.binormals[b];for(let E=0;E<=n;E++){let C=E/n*Math.PI*2,_=Math.sin(C),A=-Math.cos(C);l.x=A*y.x+_*w.x,l.y=A*y.y+_*w.y,l.z=A*y.z+_*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=e;b++)for(let y=1;y<=n;y++){let w=(n+1)*(b-1)+(y-1),E=(n+1)*b+(y-1),C=(n+1)*b+y,_=(n+1)*(b-1)+y;p.push(w,E,_),p.push(E,C,_)}}function v(){for(let b=0;b<=e;b++)for(let y=0;y<=n;y++)c.x=b/e,c.y=y/n,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new qc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ms(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(sd(n))n.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(sd(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function hi(r){let t={};for(let e=0;e<r.length;e++){let i=ms(r[e]);for(let n in i)t[n]=i[n]}return t}function sd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Z0(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Sh(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Kd={clone:ms,merge:hi},J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ue=class extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Z0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(n.value);break;case"v2":this.uniforms[i].value=new ft().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new De().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Zt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ia=class extends Ue{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var hs=class extends Bi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bn=class extends Bi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};var rr=class extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hs(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Bc(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var On=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},La=class extends On{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vc:s=t,a=2*e-i;break;case Wc:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:o=t,l=2*i-e;break;case Wc:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,b=(-1-u)*m+(1.5+u)*x+.5*p,y=u*m-u*x;for(let w=0;w!==a;++w)s[w]=g*o[h+w]+v*o[c+w]+b*o[l+w]+y*o[d+w];return s}},Da=class extends On{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*h;return s}},ka=class extends On{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Na=class extends On{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(n-e),x=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*p;return s}let f=a*2,u=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=u*f+p*2,v=d[g],b=d[g+1],y=t*f+p*2,w=h[y],E=h[y+1],C=Q0(i,e,v,w,n);s[p]=jd(C,x,b,E,m)}return s}};function jd(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function j0(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function Q0(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=jd(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let l=j0(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Ei=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hs(e,this.TimeBufferType),this.values=Hs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Hs(t.times,Array),values:Hs(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Bc(t.settings)&&(i.settings={inTangents:Hs(t.settings.inTangents,Array),outTangents:Hs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Na(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case ya:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break;case Hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Vt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Bc(this.settings)&&(rd(this.settings.inTangents,t),rd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Gp(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===la,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,f=d-i,u=d+i;for(let p=0;p!==i;++p){let x=e[d+p];if(x!==e[f+p]||x!==e[u+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let u=0;u!==i;++u)e[f+u]=e[d+u]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Bc(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function rd(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=ya;var Hn=class extends Ei{constructor(t,e,i){super(t,e,i)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=Nr;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Ei{constructor(t,e,i,n){super(t,e,i,n)}};Ua.prototype.ValueTypeName="color";var za=class extends Ei{constructor(t,e,i,n){super(t,e,i,n)}};za.prototype.ValueTypeName="number";var Fa=class extends On{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ee.slerpFlat(s,0,o,c-a,o,c,l);return s}},oo=class extends Ei{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}};oo.prototype.ValueTypeName="quaternion";oo.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Ei{constructor(t,e,i){super(t,e,i)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Nr;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends Ei{constructor(t,e,i,n){super(t,e,i,n)}};Ba.prototype.ValueTypeName="vector";var Oa=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qd=new Oa,Ha=class{constructor(t){this.manager=t!==void 0?t:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends ei{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},fs=class extends or{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Oc=new Zt,od=new R,ad=new R,ao=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;od.setFromMatrixPosition(t.matrixWorld),e.position.copy(od),ad.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ad),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Oc,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=n?n.z/s.x:1,a=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oa=new R,aa=new Ee,Zi=new R,lo=class extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oa,aa,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Zi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(oa,aa,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oa,aa,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zn=new R,ld=new ft,cd=new ft,ui=class extends lo{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zn.x,zn.y).multiplyScalar(-t/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zn.x,zn.y).multiplyScalar(-t/zn.z)}getViewSize(t,e){return this.getViewBounds(t,ld,cd),e.subVectors(cd,ld)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jc=class extends ao{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0}},co=class extends or{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gi=class extends lo{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kc=class extends ao{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vn=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new Kc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Gs=-90,Vs=1,Ga=class extends ei{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ui(Gs,Vs,t,e);n.layers=this.layers,this.add(n);let s=new ui(Gs,Vs,t,e);s.layers=this.layers,this.add(s);let o=new ui(Gs,Vs,t,e);o.layers=this.layers,this.add(o);let a=new ui(Gs,Vs,t,e);a.layers=this.layers,this.add(a);let l=new ui(Gs,Vs,t,e);l.layers=this.layers,this.add(l);let c=new ui(Gs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Va=class extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Th="\\[\\]\\.:\\/",tm=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",em="[^"+Th.replace("\\.","")+"]",im=/((?:WC+[\/:])*)/.source.replace("WC",Ah),nm=/(WCOD+)?/.source.replace("WCOD",em),sm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),om=new RegExp("^"+im+nm+sm+rm+"$"),am=["material","materials","bones","map"],jc=class{constructor(t,e,i){let n=i||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ie=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(t){let e=om.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);am.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=jc;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fv=new Float32Array(1);var Dh=class Dh{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};Dh.prototype.isMatrix2=!0;var Qc=Dh;function Rh(r,t,e,i){let n=lm(i);switch(e){case xh:return r*t;case Qa:return r*t/n.components*n.byteLength;case tl:return r*t/n.components*n.byteLength;case $n:return r*t*2/n.components*n.byteLength;case el:return r*t*2/n.components*n.byteLength;case yh:return r*t*3/n.components*n.byteLength;case _i:return r*t*4/n.components*n.byteLength;case il:return r*t*4/n.components*n.byteLength;case po:case mo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case go:case xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sl:case ol:return Math.max(r,16)*Math.max(t,8)/4;case nl:case rl:return Math.max(r,8)*Math.max(t,8)/2;case al:case ll:case hl:case fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cl:case yo:case dl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case vl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case bl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case wl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Il:case Pl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case vo:case Ll:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lm(r){switch(r){case vi:case uh:return{byteLength:1,components:1};case cr:case ph:case Ti:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case Si:case Ja:case Ii:return{byteLength:4,components:1};case mh:case gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mu(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function um(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],x=d[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,d[f]=x)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let x=d[u];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bm=`#ifdef USE_BATCHING
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
#endif`,wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zm=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eg=`#ifdef USE_GRADIENTMAP
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
}`,ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
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
#endif`,dg=`uniform sampler2D dfgLUT;
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
}`,ug=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Pg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
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
#endif`,Fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qg=`float getShadowMask() {
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
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
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
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nx=`#ifdef USE_SKINNING
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
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
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
#endif`,cx=`#ifdef USE_TRANSMISSION
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
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
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
}`,Mx=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,wx=`#define DISTANCE
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Ix=`#define LAMBERT
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
}`,Px=`#define LAMBERT
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
}`,Lx=`#define MATCAP
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
}`,Dx=`#define MATCAP
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
}`,kx=`#define NORMAL
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
}`,Nx=`#define NORMAL
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
}`,Ux=`#define PHONG
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
}`,zx=`#define PHONG
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
}`,Fx=`#define STANDARD
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
}`,Bx=`#define STANDARD
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
}`,Ox=`#define TOON
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
}`,Hx=`#define TOON
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
}`,Gx=`uniform float size;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 color;
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
}`,qx=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:xm,alphatest_fragment:ym,alphatest_pars_fragment:vm,aomap_fragment:_m,aomap_pars_fragment:Mm,batching_pars_vertex:bm,batching_vertex:wm,begin_vertex:Em,beginnormal_vertex:Sm,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:km,color_pars_vertex:Nm,color_vertex:Um,common:zm,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:Om,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Vm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:$m,envmap_pars_vertex:Zm,envmap_physical_pars_fragment:og,envmap_vertex:Jm,fog_vertex:Km,fog_pars_vertex:jm,fog_fragment:Qm,fog_pars_fragment:tg,gradientmap_pars_fragment:eg,lightmap_pars_fragment:ig,lights_lambert_fragment:ng,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:hg,lights_physical_fragment:fg,lights_physical_pars_fragment:dg,lights_fragment_begin:ug,lights_fragment_maps:pg,lights_fragment_end:mg,lightprobes_pars_fragment:gg,logdepthbuf_fragment:xg,logdepthbuf_pars_fragment:yg,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:_g,map_fragment:Mg,map_pars_fragment:bg,map_particle_fragment:wg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:Tg,morphinstance_vertex:Ag,morphcolor_vertex:Rg,morphnormal_vertex:Cg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Pg,normal_fragment_begin:Lg,normal_fragment_maps:Dg,normal_pars_fragment:kg,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:Fg,clearcoat_normal_fragment_maps:Bg,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Hg,opaque_fragment:Gg,packing:Vg,premultiplied_alpha_fragment:Wg,project_vertex:Xg,dithering_fragment:qg,dithering_pars_fragment:Yg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Zg,shadowmap_pars_fragment:Jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:jg,shadowmask_pars_fragment:Qg,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:ix,skinnormal_vertex:nx,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:hx,uv_pars_vertex:fx,uv_vertex:dx,worldpos_vertex:ux,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:xx,cube_vert:yx,cube_frag:vx,depth_vert:_x,depth_frag:Mx,distance_vert:bx,distance_frag:wx,equirect_vert:Ex,equirect_frag:Sx,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Ix,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:kx,meshnormal_frag:Nx,meshphong_vert:Ux,meshphong_frag:zx,meshphysical_vert:Fx,meshphysical_frag:Bx,meshtoon_vert:Ox,meshtoon_frag:Hx,points_vert:Gx,points_frag:Vx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:qx,sprite_frag:Yx},_t={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},rn={basic:{uniforms:hi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:hi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:hi([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:hi([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:hi([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ct(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:hi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:hi([_t.points,_t.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:hi([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:hi([_t.common,_t.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:hi([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:hi([_t.sprite,_t.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:hi([_t.common,_t.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:hi([_t.lights,_t.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};rn.physical={uniforms:hi([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Nl={r:0,b:0,g:0},$x=new Zt,bu=new Yt;bu.set(-1,0,0,0,1,0,0,0,1);function Zx(r,t,e,i,n,s){let o=new ct(0),a=n===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(v){let b=!1,y=u(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(v,b){let y=u(b);y&&(y.isCubeTexture||y.mapping===fo)?(c===void 0&&(c=new ot(new ut(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:ms(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bu),c.material.toneMapped=ce.getTransfer(y.colorSpace)!==ye,(h!==y||d!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ot(new me(2,2),new Ue({name:"BackgroundMaterial",uniforms:ms(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ce.getTransfer(y.colorSpace)!==ye,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(Nl,Sh(r)),e.buffers.color.setClear(Nl.r,Nl.g,Nl.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Jx(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null),s=n,o=!1;function a(k,L,z,D,N){let H=!1,X=d(k,D,z,L);s!==X&&(s=X,c(s.object)),H=u(k,D,z,N),H&&p(k,D,z,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(k,L,z,D),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(k){return r.bindVertexArray(k)}function h(k){return r.deleteVertexArray(k)}function d(k,L,z,D){let N=D.wireframe===!0,H=i[L.id];H===void 0&&(H={},i[L.id]=H);let X=k.isInstancedMesh===!0?k.id:0,Y=H[X];Y===void 0&&(Y={},H[X]=Y);let O=Y[z.id];O===void 0&&(O={},Y[z.id]=O);let K=O[N];return K===void 0&&(K=f(l()),O[N]=K),K}function f(k){let L=[],z=[],D=[];for(let N=0;N<e;N++)L[N]=0,z[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:D,object:k,attributes:{},index:null}}function u(k,L,z,D){let N=s.attributes,H=L.attributes,X=0,Y=z.getAttributes();for(let O in Y)if(Y[O].location>=0){let tt=N[O],St=H[O];if(St===void 0&&(O==="instanceMatrix"&&k.instanceMatrix&&(St=k.instanceMatrix),O==="instanceColor"&&k.instanceColor&&(St=k.instanceColor)),tt===void 0||tt.attribute!==St||St&&tt.data!==St.data)return!0;X++}return s.attributesNum!==X||s.index!==D}function p(k,L,z,D){let N={},H=L.attributes,X=0,Y=z.getAttributes();for(let O in Y)if(Y[O].location>=0){let tt=H[O];tt===void 0&&(O==="instanceMatrix"&&k.instanceMatrix&&(tt=k.instanceMatrix),O==="instanceColor"&&k.instanceColor&&(tt=k.instanceColor));let St={};St.attribute=tt,tt&&tt.data&&(St.data=tt.data),N[O]=St,X++}s.attributes=N,s.attributesNum=X,s.index=D}function x(){let k=s.newAttributes;for(let L=0,z=k.length;L<z;L++)k[L]=0}function m(k){g(k,0)}function g(k,L){let z=s.newAttributes,D=s.enabledAttributes,N=s.attributeDivisors;z[k]=1,D[k]===0&&(r.enableVertexAttribArray(k),D[k]=1),N[k]!==L&&(r.vertexAttribDivisor(k,L),N[k]=L)}function v(){let k=s.newAttributes,L=s.enabledAttributes;for(let z=0,D=L.length;z<D;z++)L[z]!==k[z]&&(r.disableVertexAttribArray(z),L[z]=0)}function b(k,L,z,D,N,H,X){X===!0?r.vertexAttribIPointer(k,L,z,N,H):r.vertexAttribPointer(k,L,z,D,N,H)}function y(k,L,z,D){x();let N=D.attributes,H=z.getAttributes(),X=L.defaultAttributeValues;for(let Y in H){let O=H[Y];if(O.location>=0){let K=N[Y];if(K===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),K!==void 0){let tt=K.normalized,St=K.itemSize,At=t.get(K);if(At===void 0)continue;let Kt=At.buffer,Xt=At.type,Qt=At.bytesPerElement,J=Xt===r.INT||Xt===r.UNSIGNED_INT||K.gpuType===Ja;if(K.isInterleavedBufferAttribute){let st=K.data,Rt=st.stride,Wt=K.offset;if(st.isInstancedInterleavedBuffer){for(let Ct=0;Ct<O.locationSize;Ct++)g(O.location+Ct,st.meshPerAttribute);k.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ct=0;Ct<O.locationSize;Ct++)m(O.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let Ct=0;Ct<O.locationSize;Ct++)b(O.location+Ct,St/O.locationSize,Xt,tt,Rt*Qt,(Wt+St/O.locationSize*Ct)*Qt,J)}else{if(K.isInstancedBufferAttribute){for(let st=0;st<O.locationSize;st++)g(O.location+st,K.meshPerAttribute);k.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let st=0;st<O.locationSize;st++)m(O.location+st);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let st=0;st<O.locationSize;st++)b(O.location+st,St/O.locationSize,Xt,tt,St*Qt,St/O.locationSize*st*Qt,J)}}else if(X!==void 0){let tt=X[Y];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(O.location,tt);break;case 3:r.vertexAttrib3fv(O.location,tt);break;case 4:r.vertexAttrib4fv(O.location,tt);break;default:r.vertexAttrib1fv(O.location,tt)}}}}v()}function w(){A();for(let k in i){let L=i[k];for(let z in L){let D=L[z];for(let N in D){let H=D[N];for(let X in H)h(H[X].object),delete H[X];delete D[N]}}delete i[k]}}function E(k){if(i[k.id]===void 0)return;let L=i[k.id];for(let z in L){let D=L[z];for(let N in D){let H=D[N];for(let X in H)h(H[X].object),delete H[X];delete D[N]}}delete i[k.id]}function C(k){for(let L in i){let z=i[L];for(let D in z){let N=z[D];if(N[k.id]===void 0)continue;let H=N[k.id];for(let X in H)h(H[X].object),delete H[X];delete N[k.id]}}}function _(k){for(let L in i){let z=i[L],D=k.isInstancedMesh===!0?k.id:0,N=z[D];if(N!==void 0){for(let H in N){let X=N[H];for(let Y in X)h(X[Y].object),delete X[Y];delete N[H]}delete z[D],Object.keys(z).length===0&&delete i[L]}}}function A(){P(),o=!0,s!==n&&(s=n,c(s.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Kx(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];e.update(f,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function jx(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(C){return!(C!==_i&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let _=C===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==vi&&C!==Ii&&!_&&i.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:E}}function Qx(r){let t=this,e=null,i=0,n=!1,s=!1,o=new Ui,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||n;return n=f,i=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=r.get(d);if(!n||p===null||p.length===0||s&&!m)s?h(null):c();else{let v=s?0:i,b=v*4,y=g.clippingState||null;l.value=y,y=h(p,f,b,u);for(let w=0;w!==b;++w)y[w]=e[w];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=u;b!==x;++b,y+=4)o.copy(d[b]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ur=4,ty=6,ey=20,iy=256,Mo=new Gi,tu=new ct,kh=null,Nh=0,Uh=0,zh=!1,ny=new R,gs=new R,zl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=ny}=s;kh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Nh,Uh),this._renderer.xr.enabled=zh,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Uh=this._renderer.getActiveMipmapLevel(),zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Ti,format:_i,colorSpace:rs,depthBuffer:!1},n=eu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sy(s)),this._blurMaterial=oy(s,t,e),this._ggxMaterial=ry(s,t,e)}return n}_compileMaterial(t){let e=new ot(new ue,t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,i,n,s){let l=new ui(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(tu),d.toneMapping=Vi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new ut,new $t({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,g=!0):(m.color.copy(tu),g=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let w=this._cubeSize;dr(n,y*w,b>2?w:0,w,w),d.setRenderTarget(n),g&&d.render(x,l),d.render(t,l)}d.toneMapping=u,d.autoClear=f,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Xn||t.mapping===ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());let s=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;dr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Mo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,u=d*f,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-ur?i-p+ur:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=p-e,dr(s,m,g,3*x,2*x),n.setRenderTarget(s),n.render(a,Mo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,dr(t,m,g,3*x,2*x),n.setRenderTarget(t),n.render(a,Mo)}_blur(t,e,i,n){let s=this._pingPongRenderTarget,o=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,n,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],d=3*h*(n>this._lodMax-ur?n-this._lodMax+ur:0),f=4*(this._cubeSize-h);dr(e,d,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Mo)}};function sy(r){let t=[],e=[],i=r,n=r-ur+1+ty;for(let s=0;s<n;s++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,u=3,p=new Float32Array(u*f*d),x=new Float32Array(u*f*d);for(let g=0;g<d;g++){let v=g%3*2/3-1,b=g>2?0:-1,y=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];p.set(y,u*f*g);for(let w=0;w<f;w++){let E=h[w*2]*2-1,C=h[w*2+1]*2-1;g===0?gs.set(1,C,E):g===1?gs.set(-E,1,-C):g===2?gs.set(-E,C,1):g===3?gs.set(-1,C,-E):g===4?gs.set(-E,-1,C):gs.set(E,C,-1),gs.toArray(x,(g*f+w)*u)}}let m=new ue;m.setAttribute("position",new Oe(p,u)),m.setAttribute("outputDirection",new Oe(x,u)),e.push(new ot(m,null)),i>ur&&i--}return{lodMeshes:e,sizeLods:t}}function eu(r,t,e){let i=new Je(r,t,e);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function ry(r,t,e){return new Ue({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function oy(r,t,e){return new Ue({name:"SphericalGaussianBlur",defines:{SAMPLES:ey,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function iu(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function nu(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fl=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Yr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ut(5,5,5),s=new Ue({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gi,blending:nn});s.uniforms.tEquirect.value=e;let o=new ot(n,s),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=Ye),new Ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}};function ay(r){let t=new WeakMap,e=new WeakMap,i=null;function n(f,u=!1){return f==null?null:u?o(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===Ya||u===$a)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Fl(p.height);return x.fromEquirectangularTexture(r,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let u=f.mapping,p=u===Ya||u===$a,x=u===Xn||u===ps;if(p||x){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new zl(r)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new zl(r)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===Ya?f.mapping=Xn:u===$a&&(f.mapping=ps),f}function l(f){let u=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&u++;return u===p}function c(f){let u=f.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function ly(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&ss("WebGLRenderer: "+i+" extension not supported."),n}}}function cy(r,t,e,i){let n={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete n[f.id];let u=s.get(f);u&&(t.remove(u),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let u in f)t.update(f[u],r.ARRAY_BUFFER)}function c(d){let f=[],u=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(u!==null){let v=u.array;x=u.version;for(let b=0,y=v.length;b<y;b+=3){let w=v[b+0],E=v[b+1],C=v[b+2];f.push(w,E,E,C,C,w)}}else{let v=p.array;x=p.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let w=b+0,E=b+1,C=b+2;f.push(w,E,E,C,C,w)}}let m=new(p.count>=65535?Gr:Hr)(f,1);m.version=x;let g=s.get(d);g&&t.remove(g),s.set(d,m)}function h(d){let f=s.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function hy(r,t,e){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*o),e.update(f,i,1)}function c(d,f,u){u!==0&&(r.drawElementsInstanced(i,f,s,d*o,u),e.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,u);let x=0;for(let m=0;m<u;m++)x+=f[m];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fy(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:qt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function dy(r,t,e){let i=new WeakMap,n=new De;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let A=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;u===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*w*4*d),C=new Br(E,y,w,d);C.type=Ii,C.needsUpdate=!0;let _=b*4;for(let P=0;P<d;P++){let k=m[P],L=g[P],z=v[P],D=y*w*4*P;for(let N=0;N<k.count;N++){let H=N*_;u===!0&&(n.fromBufferAttribute(k,N),E[D+H+0]=n.x,E[D+H+1]=n.y,E[D+H+2]=n.z,E[D+H+3]=0),p===!0&&(n.fromBufferAttribute(L,N),E[D+H+4]=n.x,E[D+H+5]=n.y,E[D+H+6]=n.z,E[D+H+7]=0),x===!0&&(n.fromBufferAttribute(z,N),E[D+H+8]=n.x,E[D+H+9]=n.y,E[D+H+10]=n.z,E[D+H+11]=z.itemSize===4?n.w:1)}}f={count:d,texture:C,size:new ft(y,w)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function uy(r,t,e,i,n){let s=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,f=t.get(c,d);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var py={[rh]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[lh]:"ACES_FILMIC_TONE_MAPPING",[hh]:"AGX_TONE_MAPPING",[fh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function my(r,t,e,i,n,s){let o=new Je(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ue;c.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zt([0,2,0,0,2,0],2));let h=new Ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ot(c,h),f=new Gi(-1,1,1,-1,0,1),u=null,p=null,x=!1,m,g=null,v=[],b=!1;this.setSize=function(y,w){o.setSize(y,w),a!==null&&a.setSize(y,w),l!==null&&l.setSize(y,w);for(let E=0;E<v.length;E++){let C=v[E];C.setSize&&C.setSize(y,w)}},this.setEffects=function(y){v=y,b=v.length>0&&v[0].isRenderPass===!0;let w=o.width,E=o.height;v.length>0&&a===null&&(a=new Je(w,E,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new Je(w,E,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){let _=v[C];_.setSize&&_.setSize(w,E)}},this.begin=function(y,w){if(x||y.toneMapping===Vi&&v.length===0)return!1;if(g=w,w!==null){let E=w.width,C=w.height;(o.width!==E||o.height!==C)&&this.setSize(E,C)}return b===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Vi,!0},this.hasRenderPass=function(){return b},this.end=function(y,w){y.toneMapping=m,x=!0;let E=o,C=a;for(let _=0;_<v.length;_++){let A=v[_];A.enabled!==!1&&(A.render(y,C,E,w),A.needsSwap!==!1&&(E=C,C=C===a?l:a))}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,h.defines={},ce.getTransfer(u)===ye&&(h.defines.SRGB_TRANSFER="");let _=py[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(d,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var wu=new pi,Oh=new en(1,1),Eu=new Br,Su=new Ma,Tu=new Yr,su=[],ru=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function mr(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=su[n];if(s===void 0&&(s=new Float32Array(n),su[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ke(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function je(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Hl(r,t){let e=ru[t];e===void 0&&(e=new Int32Array(t),ru[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function gy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function xy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2fv(this.addr,t),je(e,t)}}function yy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;r.uniform3fv(this.addr,t),je(e,t)}}function vy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4fv(this.addr,t),je(e,t)}}function _y(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;lu.set(i),r.uniformMatrix2fv(this.addr,!1,lu),je(e,i)}}function My(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;au.set(i),r.uniformMatrix3fv(this.addr,!1,au),je(e,i)}}function by(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;ou.set(i),r.uniformMatrix4fv(this.addr,!1,ou),je(e,i)}}function wy(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Ey(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2iv(this.addr,t),je(e,t)}}function Sy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3iv(this.addr,t),je(e,t)}}function Ty(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4iv(this.addr,t),je(e,t)}}function Ay(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Ry(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;r.uniform2uiv(this.addr,t),je(e,t)}}function Cy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;r.uniform3uiv(this.addr,t),je(e,t)}}function Iy(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;r.uniform4uiv(this.addr,t),je(e,t)}}function Py(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Oh.compareFunction=e.isReversedDepthBuffer()?kl:Dl,s=Oh):s=wu,e.setTexture2D(t||s,n)}function Ly(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Su,n)}function Dy(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Tu,n)}function ky(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Eu,n)}function Ny(r){switch(r){case 5126:return gy;case 35664:return xy;case 35665:return yy;case 35666:return vy;case 35674:return _y;case 35675:return My;case 35676:return by;case 5124:case 35670:return wy;case 35667:case 35671:return Ey;case 35668:case 35672:return Sy;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Ry;case 36295:return Cy;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return ky}}function Uy(r,t){r.uniform1fv(this.addr,t)}function zy(r,t){let e=mr(t,this.size,2);r.uniform2fv(this.addr,e)}function Fy(r,t){let e=mr(t,this.size,3);r.uniform3fv(this.addr,e)}function By(r,t){let e=mr(t,this.size,4);r.uniform4fv(this.addr,e)}function Oy(r,t){let e=mr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Hy(r,t){let e=mr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Gy(r,t){let e=mr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Vy(r,t){r.uniform1iv(this.addr,t)}function Wy(r,t){r.uniform2iv(this.addr,t)}function Xy(r,t){r.uniform3iv(this.addr,t)}function qy(r,t){r.uniform4iv(this.addr,t)}function Yy(r,t){r.uniform1uiv(this.addr,t)}function $y(r,t){r.uniform2uiv(this.addr,t)}function Zy(r,t){r.uniform3uiv(this.addr,t)}function Jy(r,t){r.uniform4uiv(this.addr,t)}function Ky(r,t,e){let i=this.cache,n=t.length,s=Hl(e,n);Ke(i,s)||(r.uniform1iv(this.addr,s),je(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Oh:o=wu;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function jy(r,t,e){let i=this.cache,n=t.length,s=Hl(e,n);Ke(i,s)||(r.uniform1iv(this.addr,s),je(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Su,s[o])}function Qy(r,t,e){let i=this.cache,n=t.length,s=Hl(e,n);Ke(i,s)||(r.uniform1iv(this.addr,s),je(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Tu,s[o])}function t1(r,t,e){let i=this.cache,n=t.length,s=Hl(e,n);Ke(i,s)||(r.uniform1iv(this.addr,s),je(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Eu,s[o])}function e1(r){switch(r){case 5126:return Uy;case 35664:return zy;case 35665:return Fy;case 35666:return By;case 35674:return Oy;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return Vy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return $y;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return t1}}var Hh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ny(e.type)}},Gh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e1(e.type)}},Vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},Fh=/(\w+)(\])?(\[|\.)?/g;function cu(r,t){r.seq.push(t),r.map[t.id]=t}function i1(r,t,e){let i=r.name,n=i.length;for(Fh.lastIndex=0;;){let s=Fh.exec(i),o=Fh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){cu(e,c===void 0?new Hh(a,r,t):new Gh(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Vh(a),cu(e,d)),e=d}}}var pr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);i1(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function hu(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var n1=37297,s1=0;function r1(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var fu=new Yt;function o1(r){ce._getMatrix(fu,ce.workingColorSpace,r);let t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(r)){case Ur:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function du(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+r1(r.getShaderSource(t),a)}else return s}function a1(r,t){let e=o1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var l1={[rh]:"Linear",[oh]:"Reinhard",[ah]:"Cineon",[lh]:"ACESFilmic",[hh]:"AgX",[fh]:"Neutral",[ch]:"Custom"};function c1(r,t){let e=l1[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new R;function h1(){ce.getLuminanceCoefficients(Ul);let r=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function d1(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function u1(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function wo(r){return r!==""}function uu(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(r){return r.replace(p1,g1)}var m1=new Map;function g1(r,t){let e=ee[t];if(e===void 0){let i=m1.get(t);if(i!==void 0)e=ee[i],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Wh(e)}var x1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(r){return r.replace(x1,y1)}function y1(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function gu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var v1={[ds]:"SHADOWMAP_TYPE_PCF",[ar]:"SHADOWMAP_TYPE_VSM"};function _1(r){return v1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M1={[Xn]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function b1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":M1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var w1={[ps]:"ENVMAP_MODE_REFRACTION"};function E1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":w1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var S1={[sh]:"ENVMAP_BLENDING_MULTIPLY",[Cd]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};function T1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":S1[r.combine]||"ENVMAP_BLENDING_NONE"}function A1(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function R1(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=_1(e),c=b1(e),h=E1(e),d=T1(e),f=A1(e),u=f1(e),p=d1(s),x=n.createProgram(),m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(wo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(wo).join(`
`),g.length>0&&(g+=`
`)):(m=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),g=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Vi?c1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,a1("linearToOutputTexel",e.outputColorSpace),h1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),o=Wh(o),o=uu(o,e),o=pu(o,e),a=Wh(a),a=uu(a,e),a=pu(a,e),o=mu(o),a=mu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=v+m+o,y=v+g+a,w=hu(n,n.VERTEX_SHADER,b),E=hu(n,n.FRAGMENT_SHADER,y);n.attachShader(x,w),n.attachShader(x,E),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(k){if(r.debug.checkShaderErrors){let L=n.getProgramInfoLog(x)||"",z=n.getShaderInfoLog(w)||"",D=n.getShaderInfoLog(E)||"",N=L.trim(),H=z.trim(),X=D.trim(),Y=!0,O=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,x,w,E);else{let K=du(n,w,"vertex"),tt=du(n,E,"fragment");qt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+N+`
`+K+`
`+tt)}else N!==""?Vt("WebGLProgram: Program Info Log:",N):(H===""||X==="")&&(O=!1);O&&(k.diagnostics={runnable:Y,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:g}})}n.deleteShader(w),n.deleteShader(E),_=new pr(n,x),A=u1(n,x)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,n1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var C1=0,Xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new qh(t),e.set(t,i)),i}},qh=class{constructor(t){this.id=C1++,this.code=t,this.usedTimes=0}};function I1(r){return r===$n||r===yo||r===vo}function P1(r,t,e,i,n,s){let o=new Or,a=new Xh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,A,P,k,L,z){let D=k.fog,N=L.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?k.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=t.get(_.envMap||H,X),O=Y&&Y.mapping===fo?Y.image.height:null,K=u[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,St=tt!==void 0?tt.length:0,At=0;N.morphAttributes.position!==void 0&&(At=1),N.morphAttributes.normal!==void 0&&(At=2),N.morphAttributes.color!==void 0&&(At=3);let Kt,Xt,Qt,J;if(K){let Ae=rn[K];Kt=Ae.vertexShader,Xt=Ae.fragmentShader}else{Kt=_.vertexShader,Xt=_.fragmentShader;let Ae=a.getVertexShaderStage(_),ge=a.getFragmentShaderStage(_);a.update(_,Ae,ge),Qt=Ae.id,J=ge.id}let st=r.getRenderTarget(),Rt=r.state.buffers.depth.getReversed(),Wt=L.isInstancedMesh===!0,Ct=L.isBatchedMesh===!0,se=!!_.map,Ze=!!_.matcap,re=!!Y,de=!!_.aoMap,Te=!!_.lightMap,le=!!_.bumpMap&&_.wireframe===!1,Le=!!_.normalMap,Qe=!!_.displacementMap,yi=!!_.emissiveMap,ke=!!_.metalnessMap,We=!!_.roughnessMap,B=_.anisotropy>0,oi=_.clearcoat>0,ve=_.dispersion>0,I=_.retroreflectivity>0,M=_.iridescence>0,G=_.sheen>0,q=_.transmission>0,j=B&&!!_.anisotropyMap,ht=oi&&!!_.clearcoatMap,pt=oi&&!!_.clearcoatNormalMap,Q=oi&&!!_.clearcoatRoughnessMap,it=M&&!!_.iridescenceMap,mt=M&&!!_.iridescenceThicknessMap,Ft=G&&!!_.sheenColorMap,vt=G&&!!_.sheenRoughnessMap,gt=!!_.specularMap,Bt=!!_.specularColorMap,Gt=!!_.specularIntensityMap,jt=q&&!!_.transmissionMap,F=q&&!!_.thicknessMap,xt=!!_.gradientMap,et=!!_.alphaMap,yt=_.alphaTest>0,wt=!!_.alphaHash,at=!!_.extensions,Ot=Vi;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ot=r.toneMapping);let Nt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Kt,fragmentShader:Xt,defines:_.defines,customVertexShaderID:Qt,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&L._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&L.instanceColor!==null,instancingMorph:Wt&&L.morphTexture!==null,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:se,matcap:Ze,envMap:re,envMapMode:re&&Y.mapping,envMapCubeUVHeight:O,aoMap:de,lightMap:Te,bumpMap:le,normalMap:Le,displacementMap:Qe,emissiveMap:yi,normalMapObjectSpace:Le&&_.normalMapType===Dd,normalMapTangentSpace:Le&&_.normalMapType===_o,packedNormalMap:Le&&_.normalMapType===_o&&I1(_.normalMap.format),metalnessMap:ke,roughnessMap:We,anisotropy:B,anisotropyMap:j,clearcoat:oi,clearcoatMap:ht,clearcoatNormalMap:pt,clearcoatRoughnessMap:Q,dispersion:ve,retroreflection:I,iridescence:M,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:G,sheenColorMap:Ft,sheenRoughnessMap:vt,specularMap:gt,specularColorMap:Bt,specularIntensityMap:Gt,transmission:q,transmissionMap:jt,thicknessMap:F,gradientMap:xt,opaque:_.transparent===!1&&_.blending===lr&&_.alphaToCoverage===!1,alphaMap:et,alphaTest:yt,alphaHash:wt,combine:_.combine,mapUv:se&&p(_.map.channel),aoMapUv:de&&p(_.aoMap.channel),lightMapUv:Te&&p(_.lightMap.channel),bumpMapUv:le&&p(_.bumpMap.channel),normalMapUv:Le&&p(_.normalMap.channel),displacementMapUv:Qe&&p(_.displacementMap.channel),emissiveMapUv:yi&&p(_.emissiveMap.channel),metalnessMapUv:ke&&p(_.metalnessMap.channel),roughnessMapUv:We&&p(_.roughnessMap.channel),anisotropyMapUv:j&&p(_.anisotropyMap.channel),clearcoatMapUv:ht&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:pt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&p(_.sheenRoughnessMap.channel),specularMapUv:gt&&p(_.specularMap.channel),specularColorMapUv:Bt&&p(_.specularColorMap.channel),specularIntensityMapUv:Gt&&p(_.specularIntensityMap.channel),transmissionMapUv:jt&&p(_.transmissionMap.channel),thicknessMapUv:F&&p(_.thicknessMap.channel),alphaMapUv:et&&p(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Le||B),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(se||et),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:At,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,decodeVideoTexture:se&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===ye,decodeVideoTextureEmissive:yi&&_.emissiveMap.isVideoTexture===!0&&ce.getTransfer(_.emissiveMap.colorSpace)===ye,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fe,flipSided:_.side===gi,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:at&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&_.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(A,_),v(A,_),A.push(r.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function g(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let A=u[_.type],P;if(A){let k=rn[A];P=Kd.clone(k.uniforms)}else P=_.uniforms;return P}function y(_,A){let P=h.get(A);return P!==void 0?++P.usedTimes:(P=new R1(r,A,_,n),c.push(P),h.set(A,P)),P}function w(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function L1(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function D1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function xu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function yu(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,p,x,m,g){let v=r[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},r[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=p,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=g),t++,v}function l(f,u,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let b=a(f,u,p,x,m,g);p.transmission>0?i.push(b):p.transparent===!0?n.push(b):e.push(b)}function c(f,u,p,x,m,g){let v=a(f,u,p,x,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(f,u){e.length>1&&e.sort(f||D1),i.length>1&&i.sort(u||xu),n.length>1&&n.sort(u||xu)}function d(){for(let f=t,u=r.length;f<u;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function k1(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new yu,r.set(i,[o])):n>=s.length?(o=new yu,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function N1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new ct};break;case"SpotLight":e={position:new R,direction:new R,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function U1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var z1=0;function F1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function B1(r){let t=new N1,e=U1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,s=new Zt,o=new Zt;function a(c){let h=0,d=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,v=0,b=0,y=0,w=0,E=0,C=0,_=0,A=0,P=0;c.sort(F1);for(let L=0,z=c.length;L<z;L++){let D=c[L],N=D.color,H=D.intensity,X=D.distance,Y=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$n?Y=D.shadow.map.texture:Y=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=N.r*H,d+=N.g*H,f+=N.b*H;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],H);P++}else if(D.isSunLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,tt=e.get(D);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[p]=tt,i.sunShadowMap[p]=Y;let St=K.getViewportCount();for(let At=0;At<St;At++)i.sunShadowMatrix[x+At]=K.getMatrix(At),i.sunShadowCascade[x+At]=K._cascadeData[At];x+=St,p++}i.sun[u]=O,u++}else if(D.isDirectionalLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let K=D.shadow,tt=e.get(D);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=D.shadow.matrix,w++}i.directional[m]=O,m++}else if(D.isSpotLight){let O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(N).multiplyScalar(H),O.distance=X,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[v]=O;let K=D.shadow;if(D.map&&(i.spotLightMap[_]=D.map,_++,K.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[v]=K.matrix,D.castShadow){let tt=e.get(D);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,i.spotShadow[v]=tt,i.spotShadowMap[v]=Y,C++}v++}else if(D.isRectAreaLight){let O=t.get(D);O.color.copy(N).multiplyScalar(H),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=O,b++}else if(D.isPointLight){let O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){let K=D.shadow,tt=e.get(D);tt.shadowIntensity=K.intensity,tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,i.pointShadow[g]=tt,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=O,g++}else if(D.isHemisphereLight){let O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(H),O.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[y]=O,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let k=i.hash;(k.sunLength!==u||k.directionalLength!==m||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==b||k.hemiLength!==y||k.numSunShadows!==p||k.numDirectionalShadows!==w||k.numPointShadows!==E||k.numSpotShadows!==C||k.numSpotMaps!==_||k.numLightProbes!==P)&&(i.sun.length=u,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+_-A,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,k.sunLength=u,k.directionalLength=m,k.pointLength=g,k.spotLength=v,k.rectAreaLength=b,k.hemiLength=y,k.numSunShadows=p,k.numDirectionalShadows=w,k.numPointShadows=E,k.numSpotShadows=C,k.numSpotMaps=_,k.numLightProbes=P,i.version=z1++)}function l(c,h){let d=0,f=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),f++}else if(y.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let w=i.point[u];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function vu(r){let t=new B1(r),e=[],i=[],n=[];function s(f){d.camera=f,e.length=0,i.length=0,n.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){n.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function O1(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new vu(r),t.set(n,[a])):s>=o.length?(a=new vu(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
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
}`,V1=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],W1=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],_u=new Zt,bo=new R,Bh=new R;function X1(r,t,e){let i=new er,n=new ft,s=new ft,o=new De,a=new rr,l=new Pa,c={},h=e.maxTextureSize,d={[Wn]:gi,[gi]:Wn,[fe]:fe},f=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:H1,fragmentShader:G1}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new ue;p.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let g=this.type;this.render=function(E,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===dd&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);let A=r.getRenderTarget(),P=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),L=r.state;L.setBlending(nn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let z=g!==this.type;z&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(N=>N.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,N=E.length;D<N;D++){let H=E[D],X=H.shadow;if(X===void 0){Vt("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let Y=X.getFrameExtents();n.multiply(Y),s.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Y.x),n.x=s.x*Y.x,X.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Y.y),n.y=s.y*Y.y,X.mapSize.y=s.y));let O=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=O,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ar){if(H.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Je(n.x,n.y,{format:$n,type:Ti,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new en(n.x,n.y,Ii),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=ji,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ae,X.map.depthTexture.magFilter=ae}else H.isPointLight?(X.map=new Fl(n.x),X.map.depthTexture=new wa(n.x,Si)):(X.map=new Je(n.x,n.y),X.map.depthTexture=new en(n.x,n.y,Si)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=ji,this.type===ds?(X.map.depthTexture.compareFunction=O?kl:Dl,X.map.depthTexture.minFilter=Ye,X.map.depthTexture.magFilter=Ye):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ae,X.map.depthTexture.magFilter=ae);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==n.x||X.map.height!==n.y)&&X.map.setSize(n.x,n.y);let K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,_);for(let tt=0;tt<K;tt++){let St=X.getCamera(tt);if(H.isPointLight){let At=X.camera,Kt=X.matrix,Xt=H.distance||At.far;Xt!==At.far&&(At.far=Xt,At.updateProjectionMatrix()),bo.setFromMatrixPosition(H.matrixWorld),At.position.copy(bo),Bh.copy(At.position),Bh.add(V1[tt]),At.up.copy(W1[tt]),At.lookAt(Bh),At.updateMatrixWorld(),Kt.makeTranslation(-bo.x,-bo.y,-bo.z),_u.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),X._frustum.setFromProjectionMatrix(_u,At.coordinateSystem,At.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,tt),r.clear();else{tt===0&&(r.setRenderTarget(X.map),r.clear());let At=X.getViewport(tt);o.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),L.viewport(o)}i=X.getFrustum(tt),y(C,_,St,H,this.type)}X.isPointLightShadow!==!0&&this.type===ar&&v(X,_),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(A,P,k)};function v(E,C){let _=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new Je(n.x,n.y,{format:$n,type:Ti}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,_,f,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,_,u,x,null)}function b(E,C,_,A){let P=null,k=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)P=k;else if(P=_.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=P.uuid,z=C.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let N=D[z];N===void 0&&(N=P.clone(),D[z]=N,C.addEventListener("dispose",w)),P=N}if(P.visible=C.visible,P.wireframe=C.wireframe,A===ar?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=r.properties.get(P);L.light=_}return P}function y(E,C,_,A,P){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===ar)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let z=t.update(E),D=E.material;if(Array.isArray(D)){let N=z.groups;for(let H=0,X=N.length;H<X;H++){let Y=N[H],O=D[Y.materialIndex];if(O&&O.visible){let K=b(E,O,A,P);E.onBeforeShadow(r,E,C,_,z,K,Y),r.renderBufferDirect(_,null,z,K,E,Y),E.onAfterShadow(r,E,C,_,z,K,Y)}}}else if(D.visible){let N=b(E,D,A,P);E.onBeforeShadow(r,E,C,_,z,N,null),r.renderBufferDirect(_,null,z,N,E,null),E.onAfterShadow(r,E,C,_,z,N,null)}}let L=E.children;for(let z=0,D=L.length;z<D;z++)y(L[z],C,_,A,P)}function w(E){E.target.removeEventListener("dispose",w);for(let _ in c){let A=c[_],P=E.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function q1(r,t){function e(){let F=!1,xt=new De,et=null,yt=new De(0,0,0,0);return{setMask:function(wt){et!==wt&&!F&&(r.colorMask(wt,wt,wt,wt),et=wt)},setLocked:function(wt){F=wt},setClear:function(wt,at,Ot,Nt,Ae){Ae===!0&&(wt*=Nt,at*=Nt,Ot*=Nt),xt.set(wt,at,Ot,Nt),yt.equals(xt)===!1&&(r.clearColor(wt,at,Ot,Nt),yt.copy(xt))},reset:function(){F=!1,et=null,yt.set(-1,0,0,0)}}}function i(){let F=!1,xt=!1,et=null,yt=null,wt=null;return{setReversed:function(at){if(xt!==at){let Ot=t.get("EXT_clip_control");at?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),xt=at;let Nt=wt;wt=null,this.setClear(Nt)}},getReversed:function(){return xt},setTest:function(at){at?st(r.DEPTH_TEST):Rt(r.DEPTH_TEST)},setMask:function(at){et!==at&&!F&&(r.depthMask(at),et=at)},setFunc:function(at){if(xt&&(at=Wd[at]),yt!==at){switch(at){case ha:r.depthFunc(r.NEVER);break;case fa:r.depthFunc(r.ALWAYS);break;case da:r.depthFunc(r.LESS);break;case qs:r.depthFunc(r.LEQUAL);break;case ua:r.depthFunc(r.EQUAL);break;case pa:r.depthFunc(r.GEQUAL);break;case ma:r.depthFunc(r.GREATER);break;case ga:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}yt=at}},setLocked:function(at){F=at},setClear:function(at){wt!==at&&(wt=at,xt&&(at=1-at),r.clearDepth(at))},reset:function(){F=!1,et=null,yt=null,wt=null,xt=!1}}}function n(){let F=!1,xt=null,et=null,yt=null,wt=null,at=null,Ot=null,Nt=null,Ae=null;return{setTest:function(ge){F||(ge?st(r.STENCIL_TEST):Rt(r.STENCIL_TEST))},setMask:function(ge){xt!==ge&&!F&&(r.stencilMask(ge),xt=ge)},setFunc:function(ge,Li,Yi){(et!==ge||yt!==Li||wt!==Yi)&&(r.stencilFunc(ge,Li,Yi),et=ge,yt=Li,wt=Yi)},setOp:function(ge,Li,Yi){(at!==ge||Ot!==Li||Nt!==Yi)&&(r.stencilOp(ge,Li,Yi),at=ge,Ot=Li,Nt=Yi)},setLocked:function(ge){F=ge},setClear:function(ge){Ae!==ge&&(r.clearStencil(ge),Ae=ge)},reset:function(){F=!1,xt=null,et=null,yt=null,wt=null,at=null,Ot=null,Nt=null,Ae=null}}}let s=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,y=null,w=null,E=null,C=null,_=new ct(0,0,0),A=0,P=!1,k=null,L=null,z=null,D=null,N=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=Y>=2);let K=null,tt={},St=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),Kt=new De().fromArray(St),Xt=new De().fromArray(At);function Qt(F,xt,et,yt){let wt=new Uint8Array(4),at=r.createTexture();r.bindTexture(F,at),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<et;Ot++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,yt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(xt+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return at}let J={};J[r.TEXTURE_2D]=Qt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(qs),le(!1),Le(th),st(r.CULL_FACE),de(nn);function st(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function Rt(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Wt(F,xt){return f[F]!==xt?(r.bindFramebuffer(F,xt),f[F]=xt,F===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=xt),F===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function Ct(F,xt){let et=p,yt=!1;if(F){et=u.get(xt),et===void 0&&(et=[],u.set(xt,et));let wt=F.textures;if(et.length!==wt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let at=0,Ot=wt.length;at<Ot;at++)et[at]=r.COLOR_ATTACHMENT0+at;et.length=wt.length,yt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,yt=!0);yt&&r.drawBuffers(et)}function se(F){return x!==F?(r.useProgram(F),x=F,!0):!1}let Ze={[us]:r.FUNC_ADD,[ud]:r.FUNC_SUBTRACT,[pd]:r.FUNC_REVERSE_SUBTRACT};Ze[md]=r.MIN,Ze[gd]=r.MAX;let re={[xd]:r.ZERO,[qa]:r.ONE,[yd]:r.SRC_COLOR,[nh]:r.SRC_ALPHA,[Ed]:r.SRC_ALPHA_SATURATE,[bd]:r.DST_COLOR,[_d]:r.DST_ALPHA,[vd]:r.ONE_MINUS_SRC_COLOR,[ho]:r.ONE_MINUS_SRC_ALPHA,[wd]:r.ONE_MINUS_DST_COLOR,[Md]:r.ONE_MINUS_DST_ALPHA,[Sd]:r.CONSTANT_COLOR,[Td]:r.ONE_MINUS_CONSTANT_COLOR,[Ad]:r.CONSTANT_ALPHA,[Rd]:r.ONE_MINUS_CONSTANT_ALPHA};function de(F,xt,et,yt,wt,at,Ot,Nt,Ae,ge){if(F===nn){m===!0&&(Rt(r.BLEND),m=!1);return}if(m===!1&&(st(r.BLEND),m=!0),F!==Xa){if(F!==g||ge!==P){if((v!==us||w!==us)&&(r.blendEquation(r.FUNC_ADD),v=us,w=us),ge)switch(F){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case He:r.blendFunc(r.ONE,r.ONE);break;case eh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ih:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qt("WebGLState: Invalid blending: ",F);break}else switch(F){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case He:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case eh:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",F);break}b=null,y=null,E=null,C=null,_.set(0,0,0),A=0,g=F,P=ge}return}wt=wt||xt,at=at||et,Ot=Ot||yt,(xt!==v||wt!==w)&&(r.blendEquationSeparate(Ze[xt],Ze[wt]),v=xt,w=wt),(et!==b||yt!==y||at!==E||Ot!==C)&&(r.blendFuncSeparate(re[et],re[yt],re[at],re[Ot]),b=et,y=yt,E=at,C=Ot),(Nt.equals(_)===!1||Ae!==A)&&(r.blendColor(Nt.r,Nt.g,Nt.b,Ae),_.copy(Nt),A=Ae),g=F,P=!1}function Te(F,xt){F.side===fe?Rt(r.CULL_FACE):st(r.CULL_FACE);let et=F.side===gi;xt&&(et=!et),le(et),F.blending===lr&&F.transparent===!1?de(nn):de(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let yt=F.stencilWrite;a.setTest(yt),yt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),yi(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):Rt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(F){k!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),k=F)}function Le(F){F!==hd?(st(r.CULL_FACE),F!==L&&(F===th?r.cullFace(r.BACK):F===fd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Rt(r.CULL_FACE),L=F}function Qe(F){F!==z&&(X&&r.lineWidth(F),z=F)}function yi(F,xt,et){F?(st(r.POLYGON_OFFSET_FILL),(D!==xt||N!==et)&&(D=xt,N=et,o.getReversed()&&(xt=-xt),r.polygonOffset(xt,et))):Rt(r.POLYGON_OFFSET_FILL)}function ke(F){F?st(r.SCISSOR_TEST):Rt(r.SCISSOR_TEST)}function We(F){F===void 0&&(F=r.TEXTURE0+H-1),K!==F&&(r.activeTexture(F),K=F)}function B(F,xt,et){et===void 0&&(K===null?et=r.TEXTURE0+H-1:et=K);let yt=tt[et];yt===void 0&&(yt={type:void 0,texture:void 0},tt[et]=yt),(yt.type!==F||yt.texture!==xt)&&(K!==et&&(r.activeTexture(et),K=et),r.bindTexture(F,xt||J[F]),yt.type=F,yt.texture=xt)}function oi(){let F=tt[K];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ve(){try{r.compressedTexImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function M(){try{r.texSubImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function G(){try{r.texSubImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function j(){try{r.compressedTexSubImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function ht(){try{r.texStorage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function pt(){try{r.texStorage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function Q(){try{r.texImage2D(...arguments)}catch(F){qt("WebGLState:",F)}}function it(){try{r.texImage3D(...arguments)}catch(F){qt("WebGLState:",F)}}function mt(F){return d[F]!==void 0?d[F]:r.getParameter(F)}function Ft(F,xt){d[F]!==xt&&(r.pixelStorei(F,xt),d[F]=xt)}function vt(F){Kt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Kt.copy(F))}function gt(F){Xt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Xt.copy(F))}function Bt(F,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let yt=et.get(F);yt===void 0&&(yt=r.getUniformBlockIndex(xt,F.name),et.set(F,yt))}function Gt(F,xt){let yt=c.get(xt).get(F);l.get(xt)!==yt&&(r.uniformBlockBinding(xt,yt,F.__bindingPointIndex),l.set(xt,yt))}function jt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,tt={},f={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,y=null,w=null,E=null,C=null,_=new ct(0,0,0),A=0,P=!1,k=null,L=null,z=null,D=null,N=null,Kt.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:Rt,bindFramebuffer:Wt,drawBuffers:Ct,useProgram:se,setBlending:de,setMaterial:Te,setFlipSided:le,setCullFace:Le,setLineWidth:Qe,setPolygonOffset:yi,setScissorTest:ke,activeTexture:We,bindTexture:B,unbindTexture:oi,compressedTexImage2D:ve,compressedTexImage3D:I,texImage2D:Q,texImage3D:it,pixelStorei:Ft,getParameter:mt,updateUBOMapping:Bt,uniformBlockBinding:Gt,texStorage2D:ht,texStorage3D:pt,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:j,scissor:vt,viewport:gt,reset:jt}}function Y1(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,d=new Set,f,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,M){return p?new OffscreenCanvas(I,M):zr("canvas")}function m(I,M,G){let q=1,j=ve(I);if((j.width>G||j.height>G)&&(q=G/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ht=Math.floor(q*j.width),pt=Math.floor(q*j.height);f===void 0&&(f=x(ht,pt));let Q=M?x(ht,pt):f;return Q.width=ht,Q.height=pt,Q.getContext("2d").drawImage(I,0,0,ht,pt),Vt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ht+"x"+pt+")."),Q}else return"data"in I&&Vt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function g(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,M,G,q,j,ht=!1){if(I!==null){if(r[I]!==void 0)return r[I];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pt;q&&(pt=t.get("EXT_texture_norm16"),pt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===r.RED&&(G===r.FLOAT&&(Q=r.R32F),G===r.HALF_FLOAT&&(Q=r.R16F),G===r.UNSIGNED_BYTE&&(Q=r.R8),G===r.UNSIGNED_SHORT&&pt&&(Q=pt.R16_EXT),G===r.SHORT&&pt&&(Q=pt.R16_SNORM_EXT)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.R8UI),G===r.UNSIGNED_SHORT&&(Q=r.R16UI),G===r.UNSIGNED_INT&&(Q=r.R32UI),G===r.BYTE&&(Q=r.R8I),G===r.SHORT&&(Q=r.R16I),G===r.INT&&(Q=r.R32I)),M===r.RG&&(G===r.FLOAT&&(Q=r.RG32F),G===r.HALF_FLOAT&&(Q=r.RG16F),G===r.UNSIGNED_BYTE&&(Q=r.RG8),G===r.UNSIGNED_SHORT&&pt&&(Q=pt.RG16_EXT),G===r.SHORT&&pt&&(Q=pt.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RG8UI),G===r.UNSIGNED_SHORT&&(Q=r.RG16UI),G===r.UNSIGNED_INT&&(Q=r.RG32UI),G===r.BYTE&&(Q=r.RG8I),G===r.SHORT&&(Q=r.RG16I),G===r.INT&&(Q=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),G===r.UNSIGNED_INT&&(Q=r.RGB32UI),G===r.BYTE&&(Q=r.RGB8I),G===r.SHORT&&(Q=r.RGB16I),G===r.INT&&(Q=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),G===r.UNSIGNED_INT&&(Q=r.RGBA32UI),G===r.BYTE&&(Q=r.RGBA8I),G===r.SHORT&&(Q=r.RGBA16I),G===r.INT&&(Q=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_SHORT&&pt&&(Q=pt.RGB16_EXT),G===r.SHORT&&pt&&(Q=pt.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),M===r.RGBA){let it=ht?Ur:ce.getTransfer(j);G===r.FLOAT&&(Q=r.RGBA32F),G===r.HALF_FLOAT&&(Q=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Q=it===ye?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&pt&&(Q=pt.RGBA16_EXT),G===r.SHORT&&pt&&(Q=pt.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function w(I,M){let G;return I?M===null||M===Si||M===hr?G=r.DEPTH24_STENCIL8:M===Ii?G=r.DEPTH32F_STENCIL8:M===cr&&(G=r.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Si||M===hr?G=r.DEPTH_COMPONENT24:M===Ii?G=r.DEPTH_COMPONENT32F:M===cr&&(G=r.DEPTH_COMPONENT16),G}function E(I,M){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==ae&&I.minFilter!==Ye?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function C(I){let M=I.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&d.delete(M)}function _(I){let M=I.target;M.removeEventListener("dispose",_),k(M)}function A(I){let M=i.get(I);if(M.__webglInit===void 0)return;let G=I.source,q=u.get(G);if(q){let j=q[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(I),Object.keys(q).length===0&&u.delete(G)}i.remove(I)}function P(I){let M=i.get(I);r.deleteTexture(M.__webglTexture);let G=I.source,q=u.get(G);delete q[M.__cacheKey],o.memory.textures--}function k(I){let M=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let j=0;j<M.__webglFramebuffer[q].length;j++)r.deleteFramebuffer(M.__webglFramebuffer[q][j]);else r.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)r.deleteFramebuffer(M.__webglFramebuffer[q]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=I.textures;for(let q=0,j=G.length;q<j;q++){let ht=i.get(G[q]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(G[q])}i.remove(I)}let L=0;function z(){L=0}function D(){return L}function N(I){L=I}function H(){let I=L;return I>=n.maxTextures&&Vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),L+=1,I}function X(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function Y(I,M){let G=i.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let q=I.image;if(q===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(G,I,M);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function O(I,M){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Rt(G,I,M);return}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function K(I,M){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Rt(G,I,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function tt(I,M){let G=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&G.__version!==I.version){Wt(G,I,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}let St={[bn]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[xa]:r.MIRRORED_REPEAT},At={[ae]:r.NEAREST,[Pd]:r.NEAREST_MIPMAP_NEAREST,[uo]:r.NEAREST_MIPMAP_LINEAR,[Ye]:r.LINEAR,[Za]:r.LINEAR_MIPMAP_NEAREST,[qn]:r.LINEAR_MIPMAP_LINEAR},Kt={[Nd]:r.NEVER,[Od]:r.ALWAYS,[Ud]:r.LESS,[Dl]:r.LEQUAL,[zd]:r.EQUAL,[kl]:r.GEQUAL,[Fd]:r.GREATER,[Bd]:r.NOTEQUAL};function Xt(I,M){if(M.type===Ii&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ye||M.magFilter===Za||M.magFilter===uo||M.magFilter===qn||M.minFilter===Ye||M.minFilter===Za||M.minFilter===uo||M.minFilter===qn)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,St[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,St[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,St[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,At[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,At[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Kt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ae||M.minFilter!==uo&&M.minFilter!==qn||M.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(I,M){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",C));let q=M.source,j=u.get(q);j===void 0&&(j={},u.set(q,j));let ht=X(M);if(ht!==I.__cacheKey){j[ht]===void 0&&(j[ht]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[ht].usedTimes++;let pt=j[I.__cacheKey];pt!==void 0&&(j[I.__cacheKey].usedTimes--,pt.usedTimes===0&&P(M)),I.__cacheKey=ht,I.__webglTexture=j[ht].texture}return G}function J(I,M,G){return Math.floor(Math.floor(I/G)/M)}function st(I,M,G,q){let ht=I.updateRanges;if(ht.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,q,M.data);else{ht.sort((Ft,vt)=>Ft.start-vt.start);let pt=0;for(let Ft=1;Ft<ht.length;Ft++){let vt=ht[pt],gt=ht[Ft],Bt=vt.start+vt.count,Gt=J(gt.start,M.width,4),jt=J(vt.start,M.width,4);gt.start<=Bt+1&&Gt===jt&&J(gt.start+gt.count-1,M.width,4)===Gt?vt.count=Math.max(vt.count,gt.start+gt.count-vt.start):(++pt,ht[pt]=gt)}ht.length=pt+1;let Q=e.getParameter(r.UNPACK_ROW_LENGTH),it=e.getParameter(r.UNPACK_SKIP_PIXELS),mt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ft=0,vt=ht.length;Ft<vt;Ft++){let gt=ht[Ft],Bt=Math.floor(gt.start/4),Gt=Math.ceil(gt.count/4),jt=Bt%M.width,F=Math.floor(Bt/M.width),xt=Gt,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(r.UNPACK_SKIP_ROWS,F),e.texSubImage2D(r.TEXTURE_2D,0,jt,F,xt,et,G,q,M.data)}I.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,it),e.pixelStorei(r.UNPACK_SKIP_ROWS,mt)}}function Rt(I,M,G){let q=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=r.TEXTURE_3D);let j=Qt(I,M),ht=M.source;e.bindTexture(q,I.__webglTexture,r.TEXTURE0+G);let pt=i.get(ht);if(ht.version!==pt.__version||j===!0){if(e.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let et=ce.getPrimaries(ce.workingColorSpace),yt=M.colorSpace===Wi?null:ce.getPrimaries(M.colorSpace),wt=M.colorSpace===Wi||et===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let it=m(M.image,!1,n.maxTextureSize);it=oi(M,it);let mt=s.convert(M.format,M.colorSpace),Ft=s.convert(M.type),vt=y(M.internalFormat,mt,Ft,M.normalized,M.colorSpace,M.isVideoTexture);Xt(q,M);let gt,Bt=M.mipmaps,Gt=M.isVideoTexture!==!0,jt=pt.__version===void 0||j===!0,F=ht.dataReady,xt=E(M,it);if(M.isDepthTexture)vt=w(M.format===Yn,M.type),jt&&(Gt?e.texStorage2D(r.TEXTURE_2D,1,vt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,vt,it.width,it.height,0,mt,Ft,null));else if(M.isDataTexture)if(Bt.length>0){Gt&&jt&&e.texStorage2D(r.TEXTURE_2D,xt,vt,Bt[0].width,Bt[0].height);for(let et=0,yt=Bt.length;et<yt;et++)gt=Bt[et],Gt?F&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,Ft,gt.data):e.texImage2D(r.TEXTURE_2D,et,vt,gt.width,gt.height,0,mt,Ft,gt.data);M.generateMipmaps=!1}else Gt?(jt&&e.texStorage2D(r.TEXTURE_2D,xt,vt,it.width,it.height),F&&st(M,it,mt,Ft)):e.texImage2D(r.TEXTURE_2D,0,vt,it.width,it.height,0,mt,Ft,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,vt,Bt[0].width,Bt[0].height,it.depth);for(let et=0,yt=Bt.length;et<yt;et++)if(gt=Bt[et],M.format!==_i)if(mt!==null)if(Gt){if(F)if(M.layerUpdates.size>0){let wt=Rh(gt.width,gt.height,M.format,M.type);for(let at of M.layerUpdates){let Ot=gt.data.subarray(at*wt/gt.data.BYTES_PER_ELEMENT,(at+1)*wt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,at,gt.width,gt.height,1,mt,Ot)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,it.depth,mt,gt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,vt,gt.width,gt.height,it.depth,0,gt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,it.depth,mt,Ft,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,vt,gt.width,gt.height,it.depth,0,mt,Ft,gt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Gt&&jt&&e.texStorage2D(r.TEXTURE_2D,xt,vt,Bt[0].width,Bt[0].height);for(let et=0,yt=Bt.length;et<yt;et++)gt=Bt[et],M.format!==_i?mt!==null?Gt?F&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,vt,gt.width,gt.height,0,gt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,Ft,gt.data):e.texImage2D(r.TEXTURE_2D,et,vt,gt.width,gt.height,0,mt,Ft,gt.data)}else if(M.isDataArrayTexture)if(Gt){if(jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,vt,it.width,it.height,it.depth),F)if(M.layerUpdates.size>0){let et=Rh(it.width,it.height,M.format,M.type);for(let yt of M.layerUpdates){let wt=it.data.subarray(yt*et/it.data.BYTES_PER_ELEMENT,(yt+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,yt,it.width,it.height,1,mt,Ft,wt)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Ft,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,vt,it.width,it.height,it.depth,0,mt,Ft,it.data);else if(M.isData3DTexture)Gt?(jt&&e.texStorage3D(r.TEXTURE_3D,xt,vt,it.width,it.height,it.depth),F&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Ft,it.data)):e.texImage3D(r.TEXTURE_3D,0,vt,it.width,it.height,it.depth,0,mt,Ft,it.data);else if(M.isFramebufferTexture){if(jt)if(Gt)e.texStorage2D(r.TEXTURE_2D,xt,vt,it.width,it.height);else{let et=it.width,yt=it.height;for(let wt=0;wt<xt;wt++)e.texImage2D(r.TEXTURE_2D,wt,vt,et,yt,0,mt,Ft,null),et>>=1,yt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),it.parentNode!==et){et.appendChild(it),d.add(M),et.onpaint=yt=>{let wt=yt.changedElements;for(let at of d)wt.includes(at.image)&&(at.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,it);else{let wt=r.RGBA,at=r.RGBA,Ot=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,wt,at,Ot,it)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Gt&&jt){let et=ve(Bt[0]);e.texStorage2D(r.TEXTURE_2D,xt,vt,et.width,et.height)}for(let et=0,yt=Bt.length;et<yt;et++)gt=Bt[et],Gt?F&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,mt,Ft,gt):e.texImage2D(r.TEXTURE_2D,et,vt,mt,Ft,gt);M.generateMipmaps=!1}else if(Gt){if(jt){let et=ve(it);e.texStorage2D(r.TEXTURE_2D,xt,vt,et.width,et.height)}F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt,Ft,it)}else e.texImage2D(r.TEXTURE_2D,0,vt,mt,Ft,it);g(M)&&v(q),pt.__version=ht.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Wt(I,M,G){if(M.image.length!==6)return;let q=Qt(I,M),j=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+G);let ht=i.get(j);if(j.version!==ht.__version||q===!0){e.activeTexture(r.TEXTURE0+G);let pt=ce.getPrimaries(ce.workingColorSpace),Q=M.colorSpace===Wi?null:ce.getPrimaries(M.colorSpace),it=M.colorSpace===Wi||pt===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let mt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,vt=[];for(let at=0;at<6;at++)!mt&&!Ft?vt[at]=m(M.image[at],!0,n.maxCubemapSize):vt[at]=Ft?M.image[at].image:M.image[at],vt[at]=oi(M,vt[at]);let gt=vt[0],Bt=s.convert(M.format,M.colorSpace),Gt=s.convert(M.type),jt=y(M.internalFormat,Bt,Gt,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,xt=ht.__version===void 0||q===!0,et=j.dataReady,yt=E(M,gt);Xt(r.TEXTURE_CUBE_MAP,M);let wt;if(mt){F&&xt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,jt,gt.width,gt.height);for(let at=0;at<6;at++){wt=vt[at].mipmaps;for(let Ot=0;Ot<wt.length;Ot++){let Nt=wt[Ot];M.format!==_i?Bt!==null?F?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,Nt.width,Nt.height,Bt,Nt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,jt,Nt.width,Nt.height,0,Nt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,Nt.width,Nt.height,Bt,Gt,Nt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,jt,Nt.width,Nt.height,0,Bt,Gt,Nt.data)}}}else{if(wt=M.mipmaps,F&&xt){wt.length>0&&yt++;let at=ve(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,jt,at.width,at.height)}for(let at=0;at<6;at++)if(Ft){F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,vt[at].width,vt[at].height,Bt,Gt,vt[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,jt,vt[at].width,vt[at].height,0,Bt,Gt,vt[at].data);for(let Ot=0;Ot<wt.length;Ot++){let Ae=wt[Ot].image[at].image;F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,Ae.width,Ae.height,Bt,Gt,Ae.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,jt,Ae.width,Ae.height,0,Bt,Gt,Ae.data)}}else{F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,Gt,vt[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,jt,Bt,Gt,vt[at]);for(let Ot=0;Ot<wt.length;Ot++){let Nt=wt[Ot];F?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,Bt,Gt,Nt.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,jt,Bt,Gt,Nt.image[at])}}}g(M)&&v(r.TEXTURE_CUBE_MAP),ht.__version=j.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Ct(I,M,G,q,j,ht){let pt=s.convert(G.format,G.colorSpace),Q=s.convert(G.type),it=y(G.internalFormat,pt,Q,G.normalized,G.colorSpace),mt=i.get(M),Ft=i.get(G);if(Ft.__renderTarget=M,!mt.__hasExternalTextures){let vt=Math.max(1,M.width>>ht),gt=Math.max(1,M.height>>ht);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,ht,it,vt,gt,M.depth,0,pt,Q,null):e.texImage2D(j,ht,it,vt,gt,0,pt,Q,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),We(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,j,Ft.__webglTexture,0,ke(M)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,j,Ft.__webglTexture,ht),e.bindFramebuffer(r.FRAMEBUFFER,null)}function se(I,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){let q=M.depthTexture,j=q&&q.isDepthTexture?q.type:null,ht=w(M.stencilBuffer,j),pt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;We(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke(M),ht,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke(M),ht,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ht,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pt,r.RENDERBUFFER,I)}else{let q=M.textures;for(let j=0;j<q.length;j++){let ht=q[j],pt=s.convert(ht.format,ht.colorSpace),Q=s.convert(ht.type),it=y(ht.internalFormat,pt,Q,ht.normalized,ht.colorSpace);We(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ke(M),it,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ke(M),it,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,it,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ze(I,M,G){let q=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(M.depthTexture);if(j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,M.depthTexture);let mt=s.convert(M.depthTexture.format),Ft=s.convert(M.depthTexture.type),vt;M.depthTexture.format===ji?vt=r.DEPTH_COMPONENT24:M.depthTexture.format===Yn&&(vt=r.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,vt,M.width,M.height,0,mt,Ft,null)}}else Y(M.depthTexture,0);let ht=j.__webglTexture,pt=ke(M),Q=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,it=M.depthTexture.format===Yn?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===ji)We(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,Q,ht,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,it,Q,ht,0);else if(M.depthTexture.format===Yn)We(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,Q,ht,0,pt):r.framebufferTexture2D(r.FRAMEBUFFER,it,Q,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(I){let M=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let q=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=q}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)Ze(M.__webglFramebuffer[q],I,q);else{let q=I.texture.mipmaps;q&&q.length>0?Ze(M.__webglFramebuffer[0],I,0):Ze(M.__webglFramebuffer,I,0)}else if(G){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=r.createRenderbuffer(),se(M.__webglDepthbuffer[q],I,!1);else{let j=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,ht)}}else{let q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),se(M.__webglDepthbuffer,I,!1);else{let j=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,ht)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function de(I,M,G){let q=i.get(I);M!==void 0&&Ct(q.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&re(I)}function Te(I){let M=I.texture,G=i.get(I),q=i.get(M);I.addEventListener("dispose",_);let j=I.textures,ht=I.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=M.version,o.memory.textures++),ht){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let it=0;it<M.mipmaps.length;it++)G.__webglFramebuffer[Q][it]=r.createFramebuffer()}else G.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)G.__webglFramebuffer[Q]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(pt)for(let Q=0,it=j.length;Q<it;Q++){let mt=i.get(j[Q]);mt.__webglTexture===void 0&&(mt.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&We(I)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){let it=j[Q];G.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);let mt=s.convert(it.format,it.colorSpace),Ft=s.convert(it.type),vt=y(it.internalFormat,mt,Ft,it.normalized,it.colorSpace,I.isXRRenderTarget===!0),gt=ke(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,vt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),se(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)Ct(G.__webglFramebuffer[Q][it],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else Ct(G.__webglFramebuffer[Q],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(M)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let Q=0,it=j.length;Q<it;Q++){let mt=j[Q],Ft=i.get(mt),vt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ft.__webglTexture),Xt(vt,mt),Ct(G.__webglFramebuffer,I,mt,r.COLOR_ATTACHMENT0+Q,vt,0),g(mt)&&v(vt)}e.unbindTexture()}else{let Q=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,q.__webglTexture),Xt(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)Ct(G.__webglFramebuffer[it],I,M,r.COLOR_ATTACHMENT0,Q,it);else Ct(G.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,Q,0);g(M)&&v(Q),e.unbindTexture()}I.depthBuffer&&re(I)}function le(I){let M=I.textures;for(let G=0,q=M.length;G<q;G++){let j=M[G];if(g(j)){let ht=b(I),pt=i.get(j).__webglTexture;e.bindTexture(ht,pt),v(ht),e.unbindTexture()}}}let Le=[],Qe=[];function yi(I){if(I.samples>0){if(We(I)===!1){let M=I.textures,G=I.width,q=I.height,j=r.COLOR_BUFFER_BIT,ht=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pt=i.get(I),Q=M.length>1;if(Q)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let it=I.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Ft=i.get(M[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ft,0)}r.blitFramebuffer(0,0,G,q,0,0,G,q,j,r.NEAREST),l===!0&&(Le.length=0,Qe.length=0,Le.push(r.COLOR_ATTACHMENT0+mt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Le.push(ht),Qe.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Ft=i.get(M[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Ft,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ke(I){return Math.min(n.maxSamples,I.samples)}function We(I){let M=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function B(I){let M=o.render.frame;h.get(I)!==M&&(h.set(I,M),I.update())}function oi(I,M){let G=I.colorSpace,q=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==rs&&G!==Wi&&(ce.getTransfer(G)===ye?(q!==_i||j!==vi)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",G)),M}function ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.getTextureUnits=D,this.setTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=tt,this.rebindTextures=de,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=yi,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $1(r,t){function e(i,n=Wi){let s,o=ce.getTransfer(n);if(i===vi)return r.UNSIGNED_BYTE;if(i===Ka)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return r.UNSIGNED_SHORT_5_5_5_1;if(i===mh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===gh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===uh)return r.BYTE;if(i===ph)return r.SHORT;if(i===cr)return r.UNSIGNED_SHORT;if(i===Ja)return r.INT;if(i===Si)return r.UNSIGNED_INT;if(i===Ii)return r.FLOAT;if(i===Ti)return r.HALF_FLOAT;if(i===xh)return r.ALPHA;if(i===yh)return r.RGB;if(i===_i)return r.RGBA;if(i===ji)return r.DEPTH_COMPONENT;if(i===Yn)return r.DEPTH_STENCIL;if(i===Qa)return r.RED;if(i===tl)return r.RED_INTEGER;if(i===$n)return r.RG;if(i===el)return r.RG_INTEGER;if(i===il)return r.RGBA_INTEGER;if(i===po||i===mo||i===go||i===xo)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nl||i===sl||i===rl||i===ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===al||i===ll||i===cl||i===hl||i===fl||i===yo||i===dl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===al||i===ll)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===hl)return s.COMPRESSED_R11_EAC;if(i===fl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===yo)return s.COMPRESSED_RG11_EAC;if(i===dl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ul||i===pl||i===ml||i===gl||i===xl||i===yl||i===vl||i===_l||i===Ml||i===bl||i===wl||i===El||i===Sl||i===Tl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ul)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ml)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ml)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tl)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Al||i===Rl||i===Cl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Al)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Il||i===Pl||i===vo||i===Ll)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Il)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var Z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`,Yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new $r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ue({vertexShader:Z1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new me(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$h=class extends Qi{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new Yh,g={},v=e.getContextAttributes(),b=null,y=null,w=[],E=[],C=new ft,_=null,A=null,P=new ui;P.viewport=new De;let k=new ui;k.viewport=new De;let L=[P,k],z=new Va,D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=w[J];return st===void 0&&(st=new Ks,w[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=w[J];return st===void 0&&(st=new Ks,w[J]=st),st.getGripSpace()},this.getHand=function(J){let st=w[J];return st===void 0&&(st=new Ks,w[J]=st),st.getHandSpace()};function H(J){let st=E.indexOf(J.inputSource);if(st===-1)return;let Rt=w[st];Rt!==void 0&&(Rt.update(J.inputSource,J.frame,c||o),Rt.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",Y);for(let J=0;J<w.length;J++){let st=E[J];st!==null&&(E[J]=null,w[J].disconnect(st))}D=null,N=null,m.reset();for(let J in g)delete g[J];if(t.setRenderTarget(b),u=null,f=null,d=null,n=null,y=null,Qt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(C.width,C.height,!1),A!==null){let J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",X),n.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Wt=null,Ct=null;v.depth&&(Ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=v.stencil?Yn:ji,Wt=v.stencil?hr:Si);let se={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(se),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Je(f.textureWidth,f.textureHeight,{format:_i,type:vi,depthTexture:new en(f.textureWidth,f.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(n,e,Rt),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Je(u.framebufferWidth,u.framebufferHeight,{format:_i,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Qt.setContext(n),Qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(J){for(let st=0;st<J.removed.length;st++){let Rt=J.removed[st],Wt=E.indexOf(Rt);Wt>=0&&(E[Wt]=null,w[Wt].disconnect(Rt))}for(let st=0;st<J.added.length;st++){let Rt=J.added[st],Wt=E.indexOf(Rt);if(Wt===-1){for(let se=0;se<w.length;se++)if(se>=E.length){E.push(Rt),Wt=se;break}else if(E[se]===null){E[se]=Rt,Wt=se;break}if(Wt===-1)break}let Ct=w[Wt];Ct&&Ct.connect(Rt)}}let O=new R,K=new R;function tt(J,st,Rt){O.setFromMatrixPosition(st.matrixWorld),K.setFromMatrixPosition(Rt.matrixWorld);let Wt=O.distanceTo(K),Ct=st.projectionMatrix.elements,se=Rt.projectionMatrix.elements,Ze=Ct[14]/(Ct[10]-1),re=Ct[14]/(Ct[10]+1),de=(Ct[9]+1)/Ct[5],Te=(Ct[9]-1)/Ct[5],le=(Ct[8]-1)/Ct[0],Le=(se[8]+1)/se[0],Qe=Ze*le,yi=Ze*Le,ke=Wt/(-le+Le),We=ke*-le;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(We),J.translateZ(ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let B=Ze+ke,oi=re+ke,ve=Qe-We,I=yi+(Wt-We),M=de*re/oi*B,G=Te*re/oi*B;J.projectionMatrix.makePerspective(ve,I,M,G,B,oi),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function St(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let st=J.near,Rt=J.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),z.near=k.near=P.near=st,z.far=k.far=P.far=Rt,(D!==z.near||N!==z.far)&&(n.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,N=z.far),z.layers.mask=J.layers.mask|6,P.layers.mask=z.layers.mask&-5,k.layers.mask=z.layers.mask&-3;let Wt=J.parent,Ct=z.cameras;St(z,Wt);for(let se=0;se<Ct.length;se++)St(Ct[se],Wt);Ct.length===2?tt(z,P,k):z.projectionMatrix.copy(P.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),At(J,z,Wt)};function At(J,st,Rt){Rt===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(Rt.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Zs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(J){return g[J]};let Kt=null;function Xt(J,st){if(h=st.getViewerPose(c||o),p=st,h!==null){let Rt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Wt=!1;Rt.length!==z.cameras.length&&(z.cameras.length=0,Wt=!0);for(let re=0;re<Rt.length;re++){let de=Rt[re],Te=null;if(u!==null)Te=u.getViewport(de);else{let Le=d.getViewSubImage(f,de);Te=Le.viewport,re===0&&(t.setRenderTargetTextures(y,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(y))}let le=L[re];le===void 0&&(le=new ui,le.layers.enable(re),le.viewport=new De,L[re]=le),le.matrix.fromArray(de.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(de.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Te.x,Te.y,Te.width,Te.height),re===0&&(z.matrix.copy(le.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Wt===!0&&z.cameras.push(le)}let Ct=n.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let re=d.getDepthInformation(Rt[0]);re&&re.isValid&&re.texture&&m.init(re,n.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let re=0;re<Rt.length;re++){let de=Rt[re].camera;if(de){let Te=g[de];Te||(Te=new $r,g[de]=Te);let le=d.getCameraImage(de);Te.sourceTexture=le}}}}for(let Rt=0;Rt<w.length;Rt++){let Wt=E[Rt],Ct=w[Rt];Wt!==null&&Ct!==void 0&&Ct.update(Wt,st,c||o)}Kt&&Kt(J,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),p=null}let Qt=new Mu;Qt.setAnimationLoop(Xt),this.setAnimationLoop=function(J){Kt=J},this.dispose=function(){}}},K1=new Zt,Au=new Yt;Au.set(-1,0,0,0,1,0,0,0,1);function j1(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Sh(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),x(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===gi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===gi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Au),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Q1(r,t,e,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let E=w.program;i.uniformBlockBinding(y,E)}function c(y,w){let E=n[y.id];E===void 0&&(m(y),E=h(y),n[y.id]=E,y.addEventListener("dispose",v));let C=w.program;i.updateUBOMapping(y,C);let _=t.render.frame;s[y.id]!==_&&(f(y),s[y.id]=_)}function h(y){let w=d();y.__bindingPointIndex=w;let E=r.createBuffer(),C=y.__size,_=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,C,_),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,E),E}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let w=n[y.id],E=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let _=0,A=E.length;_<A;_++){let P=E[_];if(Array.isArray(P))for(let k=0,L=P.length;k<L;k++)u(P[k],_,k,C);else u(P,_,0,C)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,w,E,C){if(x(y,w,E,C)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let k=0;k<A.length;k++){let L=A[k],z=g(L);p(L,y.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,_,y.__data)}}function p(y,w,E){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,E)}function x(y,w,E,C){let _=y.value,A=w+"_"+E;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{let P=C[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(y){let w=y.uniforms,E=0,C=16;for(let A=0,P=w.length;A<P;A++){let k=Array.isArray(w[A])?w[A]:[w[A]];for(let L=0,z=k.length;L<z;L++){let D=k[L],N=Array.isArray(D.value)?D.value:[D.value];for(let H=0,X=N.length;H<X;H++){let Y=N[H],O=g(Y),K=E%C,tt=K%O.boundary,St=K+tt;E+=tt,St!==0&&C-St<O.storage&&(E+=C-St),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=O.storage}}}let _=E%C;return _>0&&(E+=C-_),y.__size=E,y.__cache={},this}function g(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),w}function v(y){let w=y.target;w.removeEventListener("dispose",v);let E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(n[w.id]),delete n[w.id],delete s[w.id]}function b(){for(let y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:l,update:c,dispose:b}}var tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sn=null;function ev(){return sn===null&&(sn=new os(tv,16,16,$n,Ti),sn.name="DFG_LUT",sn.minFilter=Ye,sn.magFilter=Ye,sn.wrapS=Ji,sn.wrapT=Ji,sn.generateMipmaps=!1,sn.needsUpdate=!0),sn}var Bl=class{constructor(t={}){let{canvas:e=Hd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=vi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let x=u,m=new Set([il,el,tl]),g=new Set([vi,Si,cr,hr,Ka,ja]),v=new Uint32Array(4),b=new Int32Array(4),y=new R,w=null,E=null,C=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,k=!1,L=null,z=null,D=null,N=null;this._outputColorSpace=ni;let H=0,X=0,Y=null,O=-1,K=null,tt=new De,St=new De,At=null,Kt=new ct(0),Xt=0,Qt=e.width,J=e.height,st=1,Rt=null,Wt=null,Ct=new De(0,0,Qt,J),se=new De(0,0,Qt,J),Ze=!1,re=new er,de=!1,Te=!1,le=new Zt,Le=new R,Qe=new De,yi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function We(){return Y===null?st:1}let B=i;function oi(S,U){return e.getContext(S,U)}let ve,I,M,G,q,j,ht,pt,Q,it,mt,Ft,vt,gt,Bt,Gt,jt,F,xt,et,yt,wt,at;try{let S={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Li,!1),B===null){let U="webgl2";if(B=oi(U,S),B===null)throw oi(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(S){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Li,!1),qt("WebGLRenderer: "+S.message),S}function Ot(){ve=new ly(B),ve.init(),yt=new $1(B,ve),I=new jx(B,ve,t,yt),M=new q1(B,ve),I.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),z=B.createFramebuffer(),D=B.createFramebuffer(),N=B.createFramebuffer(),G=new fy(B),q=new L1,j=new Y1(B,ve,M,q,I,yt,G),ht=new ay(P),pt=new um(B),wt=new Jx(B,pt),Q=new cy(B,pt,G,wt),it=new uy(B,Q,pt,wt,G),F=new dy(B,I,j),Bt=new Qx(q),mt=new P1(P,ht,ve,I,wt,Bt),Ft=new j1(P,q),vt=new k1,gt=new O1(ve),jt=new Zx(P,ht,M,it,p,l),Gt=new X1(P,it,I),at=new Q1(B,G,I,M),xt=new Kx(B,ve,G),et=new hy(B,ve,G),G.programs=mt.programs,P.capabilities=I,P.extensions=ve,P.properties=q,P.renderLists=vt,P.shadowMap=Gt,P.state=M,P.info=G}x!==vi&&(A=new my(x,e.width,e.height,a,n,s));let Nt=new $h(P,B);this.xr=Nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=ve.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ve.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(S){S!==void 0&&(st=S,this.setSize(Qt,J,!1))},this.getSize=function(S){return S.set(Qt,J)},this.setSize=function(S,U,Z=!0){if(Nt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=S,J=U,e.width=Math.floor(S*st),e.height=Math.floor(U*st),Z===!0&&(e.style.width=S+"px",e.style.height=U+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Qt*st,J*st).floor()},this.setDrawingBufferSize=function(S,U,Z){Qt=S,J=U,st=Z,e.width=Math.floor(S*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(x===vi){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(Ct)},this.setViewport=function(S,U,Z,V){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,U,Z,V),M.viewport(tt.copy(Ct).multiplyScalar(st).round())},this.getScissor=function(S){return S.copy(se)},this.setScissor=function(S,U,Z,V){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,U,Z,V),M.scissor(St.copy(se).multiplyScalar(st).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){M.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){Rt=S},this.setTransparentSort=function(S){Wt=S},this.getClearColor=function(S){return S.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,Z=!0){let V=0;if(S){let W=!1;if(Y!==null){let bt=Y.texture.format;W=m.has(bt)}if(W){let bt=Y.texture.type,It=g.has(bt),Mt=jt.getClearColor(),Dt=jt.getClearAlpha(),Ut=Mt.r,te=Mt.g,oe=Mt.b;It?(v[0]=Ut,v[1]=te,v[2]=oe,v[3]=Dt,B.clearBufferuiv(B.COLOR,0,v)):(b[0]=Ut,b[1]=te,b[2]=oe,b[3]=Dt,B.clearBufferiv(B.COLOR,0,b))}else V|=B.COLOR_BUFFER_BIT}U&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Li,!1),jt.dispose(),vt.dispose(),gt.dispose(),q.dispose(),ht.dispose(),it.dispose(),wt.dispose(),at.dispose(),mt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Mf),Nt.removeEventListener("sessionend",bf),Qn.stop()};function Ae(S){S.preventDefault(),Fr("WebGLRenderer: Context Lost."),k=!0}function ge(){Fr("WebGLRenderer: Context Restored."),k=!1;let S=G.autoReset,U=Gt.enabled,Z=Gt.autoUpdate,V=Gt.needsUpdate,W=Gt.type;Ot(),G.autoReset=S,Gt.enabled=U,Gt.autoUpdate=Z,Gt.needsUpdate=V,Gt.type=W}function Li(S){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Yi(S){let U=S.target;U.removeEventListener("dispose",Yi),kp(U)}function kp(S){Np(S),q.remove(S)}function Np(S){let U=q.get(S).programs;U!==void 0&&(U.forEach(function(Z){mt.releaseProgram(Z)}),S.isShaderMaterial&&mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,Z,V,W,bt){U===null&&(U=yi);let It=W.isMesh&&W.matrixWorld.determinantAffine()<0,Mt=Fp(S,U,Z,V,W);M.setMaterial(V,It);let Dt=Z.index,Ut=1;if(V.wireframe===!0){if(Dt=Q.getWireframeAttribute(Z),Dt===void 0)return;Ut=2}let te=Z.drawRange,oe=Z.attributes.position,kt=te.start*Ut,xe=(te.start+te.count)*Ut;bt!==null&&(kt=Math.max(kt,bt.start*Ut),xe=Math.min(xe,(bt.start+bt.count)*Ut)),Dt!==null?(kt=Math.max(kt,0),xe=Math.min(xe,Dt.count)):oe!=null&&(kt=Math.max(kt,0),xe=Math.min(xe,oe.count));let Xe=xe-kt;if(Xe<0||Xe===1/0)return;wt.setup(W,V,Mt,Z,Dt);let Ce,we=xt;if(Dt!==null&&(Ce=pt.get(Dt),we=et,we.setIndex(Ce)),W.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*We()),we.setMode(B.LINES)):we.setMode(B.TRIANGLES);else if(W.isLine){let ai=V.linewidth;ai===void 0&&(ai=1),M.setLineWidth(ai*We()),W.isLineSegments?we.setMode(B.LINES):W.isLineLoop?we.setMode(B.LINE_LOOP):we.setMode(B.LINE_STRIP)}else W.isPoints?we.setMode(B.POINTS):W.isSprite&&we.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))we.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ai=W._multiDrawStarts,Tt=W._multiDrawCounts,fi=W._multiDrawCount,he=Dt?pt.get(Dt).bytesPerElement:1,Ri=q.get(V).currentProgram.getUniforms();for(let $i=0;$i<fi;$i++)Ri.setValue(B,"_gl_DrawID",$i),we.render(ai[$i]/he,Tt[$i])}else if(W.isInstancedMesh)we.renderInstances(kt,Xe,W.count);else if(Z.isInstancedBufferGeometry){let ai=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Tt=Math.min(Z.instanceCount,ai);we.renderInstances(kt,Xe,Tt)}else we.render(kt,Xe)};function _f(S,U,Z,V){L!==null&&S.isNodeMaterial&&L.setObject(V,S),de===!0&&Bt.setState(S,Z,!1),S.transparent===!0&&S.side===fe&&S.forceSinglePass===!1?(S.side=gi,S.needsUpdate=!0,ko(S,U,V),S.side=Wn,S.needsUpdate=!0,ko(S,U,V),S.side=fe):ko(S,U,V)}this.compile=function(S,U,Z=null){Z===null&&(Z=S),L!==null&&L.renderStart(S,U,Z),E=gt.get(Z),E.init(U),_.push(E),Z.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),S!==Z&&S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),Te=this.localClippingEnabled,de=Bt.init(this.clippingPlanes,Te),de===!0&&Bt.setGlobalState(this.clippingPlanes,U),L!==null&&Gt.render(E.state.shadowsArray,Z,U);let V=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let bt=W.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){let Mt=bt[It];_f(Mt,Z,U,W),V.add(Mt)}else _f(bt,Z,U,W),V.add(bt)}),E=_.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(S,U,Z=null){let V=this.compile(S,U,Z);return new Promise(W=>{function bt(){if(V.forEach(function(It){let Dt=q.get(It).currentProgram;(Dt===void 0||Dt.isReady())&&V.delete(It)}),V.size===0){W(S);return}setTimeout(bt,10)}ve.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let pc=null;function Up(S){pc&&pc(S)}function Mf(){Qn.stop()}function bf(){Qn.start()}let Qn=new Mu;Qn.setAnimationLoop(Up),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(S){pc=S,Nt.setAnimationLoop(S),S===null?Qn.stop():Qn.start()},Nt.addEventListener("sessionstart",Mf),Nt.addEventListener("sessionend",bf),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;L!==null&&L.renderStart(S,U);let Z=Nt.enabled===!0&&Nt.isPresenting===!0,V=A!==null&&(Y===null||Z)&&A.begin(P,Y);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(U),U=Nt.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,Y),E=gt.get(S,_.length),E.init(U),E.state.textureUnits=j.getTextureUnits(),_.push(E),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),re.setFromProjectionMatrix(le,Fi,U.reversedDepth),Te=this.localClippingEnabled,de=Bt.init(this.clippingPlanes,Te),w=vt.get(S,C.length),w.init(),C.push(w),Nt.enabled===!0&&Nt.isPresenting===!0){let It=P.xr.getDepthSensingMesh();It!==null&&mc(It,U,-1/0,P.sortObjects)}mc(S,U,0,P.sortObjects),w.finish(),L!==null&&L.updateLights(E.state.lightsArray),P.sortObjects===!0&&w.sort(Rt,Wt),ke=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,ke&&jt.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&Bt.beginShadows();let W=E.state.shadowsArray;if(Gt.render(W,S,U),de===!0&&Bt.endShadows(),(V&&A.hasRenderPass())===!1){let It=w.opaque,Mt=w.transmissive;if(E.setupLights(),U.isArrayCamera){let Dt=U.cameras;if(Mt.length>0)for(let Ut=0,te=Dt.length;Ut<te;Ut++){let oe=Dt[Ut];Ef(It,Mt,S,oe)}ke&&jt.render(S);for(let Ut=0,te=Dt.length;Ut<te;Ut++){let oe=Dt[Ut];wf(w,S,oe,oe.viewport)}}else Mt.length>0&&Ef(It,Mt,S,U),ke&&jt.render(S),wf(w,S,U)}Y!==null&&X===0&&(j.updateMultisampleRenderTarget(Y),j.updateRenderTargetMipmap(Y)),V&&A.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),wt.resetDefaultState(),O=-1,K=null,_.pop(),_.length>0?(E=_[_.length-1],j.setTextureUnits(E.state.textureUnits),de===!0&&Bt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,L!==null&&L.renderEnd()};function mc(S,U,Z,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(re)){V&&Qe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(le);let It=it.update(S),Mt=S.material;Mt.visible&&w.push(S,It,Mt,Z,Qe.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(re))){let It=it.update(S),Mt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Qe.copy(S.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Qe.copy(It.boundingSphere.center)),Qe.applyMatrix4(S.matrixWorld).applyMatrix4(le)),Array.isArray(Mt)){let Dt=It.groups;for(let Ut=0,te=Dt.length;Ut<te;Ut++){let oe=Dt[Ut],kt=Mt[oe.materialIndex];kt&&kt.visible&&w.push(S,It,kt,Z,Qe.z,oe,U)}}else Mt.visible&&w.push(S,It,Mt,Z,Qe.z,null,U)}}let bt=S.children;for(let It=0,Mt=bt.length;It<Mt;It++)mc(bt[It],U,Z,V)}function wf(S,U,Z,V){let{opaque:W,transmissive:bt,transparent:It}=S;E.setupLightsView(Z),de===!0&&Bt.setGlobalState(P.clippingPlanes,Z),V&&M.viewport(tt.copy(V)),W.length>0&&Do(W,U,Z),bt.length>0&&Do(bt,U,Z),It.length>0&&Do(It,U,Z),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ef(S,U,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let kt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Je(1,1,{generateMipmaps:!0,type:kt?Ti:vi,minFilter:qn,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let bt=E.state.transmissionRenderTarget[V.id],It=V.viewport||tt;bt.setSize(It.z*P.transmissionResolutionScale,It.w*P.transmissionResolutionScale);let Mt=P.getRenderTarget(),Dt=P.getActiveCubeFace(),Ut=P.getActiveMipmapLevel();P.setRenderTarget(bt),P.getClearColor(Kt),Xt=P.getClearAlpha(),Xt<1&&P.setClearColor(16777215,.5),P.clear(),ke&&jt.render(Z);let te=P.toneMapping;P.toneMapping=Vi;let oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),de===!0&&Bt.setGlobalState(P.clippingPlanes,V),Do(S,Z,V),j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let xe=0,Xe=U.length;xe<Xe;xe++){let Ce=U[xe],{object:we,geometry:ai,material:Tt,group:fi}=Ce;if(Tt.side===fe&&we.layers.test(V.layers)){let he=Tt.side;Tt.side=gi,Tt.needsUpdate=!0,Sf(we,Z,V,ai,Tt,fi),Tt.side=he,Tt.needsUpdate=!0,kt=!0}}kt===!0&&(j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt))}P.setRenderTarget(Mt,Dt,Ut),P.setClearColor(Kt,Xt),oe!==void 0&&(V.viewport=oe),P.toneMapping=te}function Do(S,U,Z){let V=U.isScene===!0?U.overrideMaterial:null;for(let W=0,bt=S.length;W<bt;W++){let It=S[W],{object:Mt,geometry:Dt,group:Ut}=It,te=It.material;te.allowOverride===!0&&V!==null&&(te=V),Mt.layers.test(Z.layers)&&Sf(Mt,U,Z,Dt,te,Ut)}}function Sf(S,U,Z,V,W,bt){L!==null&&W.isNodeMaterial&&L.setObject(S,W),S.onBeforeRender(P,U,Z,V,W,bt),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,U,Z,V,S,bt),W.transparent===!0&&W.side===fe&&W.forceSinglePass===!1?(W.side=gi,W.needsUpdate=!0,P.renderBufferDirect(Z,U,V,W,S,bt),W.side=Wn,W.needsUpdate=!0,P.renderBufferDirect(Z,U,V,W,S,bt),W.side=fe):P.renderBufferDirect(Z,U,V,W,S,bt),S.onAfterRender(P,U,Z,V,W,bt)}function ko(S,U,Z){U.isScene!==!0&&(U=yi);let V=q.get(S),W=E.state.lights,bt=E.state.shadowsArray,It=W.state.version,Mt=mt.getParameters(S,W.state,bt,U,Z,E.state.lightProbeGridArray),Dt=mt.getProgramCacheKey(Mt),Ut=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let te=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=ht.get(S.envMap||V.environment,te),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",Yi),Ut=new Map,V.programs=Ut);let oe=Ut.get(Dt);if(oe!==void 0){if(V.currentProgram===oe&&V.lightsStateVersion===It)return Af(S,Mt),oe}else Mt.uniforms=mt.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,Z,Mt),S.onBeforeCompile(Mt,P),oe=mt.acquireProgram(Mt,Dt),Ut.set(Dt,oe),V.uniforms=Mt.uniforms;let kt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(kt.clippingPlanes=Bt.uniform),Af(S,Mt),V.needsLights=Op(S),V.lightsStateVersion=It,V.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.sunLights.value=W.state.sun,kt.sunLightShadows.value=W.state.sunShadow,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.sunShadowMatrix.value=W.state.sunShadowMatrix,kt.sunShadowCascade.value=W.state.sunShadowCascade,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=oe,V.uniformsList=null,oe}function Tf(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=pr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Af(S,U){let Z=q.get(S);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function zp(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let Z=0,V=S.length;Z<V;Z++){let W=S[Z];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Fp(S,U,Z,V,W){U.isScene!==!0&&(U=yi),j.resetTextureUnits();let bt=U.fog,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,Mt=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ce.workingColorSpace,Dt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ut=ht.get(V.envMap||It,Dt),te=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,oe=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!Z.morphAttributes.position,xe=!!Z.morphAttributes.normal,Xe=!!Z.morphAttributes.color,Ce=Vi;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ce=P.toneMapping);let we=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ai=we!==void 0?we.length:0,Tt=q.get(V),fi=E.state.lights;if(de===!0&&(Te===!0||S!==K)){let Re=S===K&&V.id===O;Bt.setState(V,S,Re)}let he=!1;V.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==fi.state.version||Tt.outputColorSpace!==Mt||W.isBatchedMesh&&Tt.batching===!1||!W.isBatchedMesh&&Tt.batching===!0||W.isBatchedMesh&&Tt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Tt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Tt.instancing===!1||!W.isInstancedMesh&&Tt.instancing===!0||W.isSkinnedMesh&&Tt.skinning===!1||!W.isSkinnedMesh&&Tt.skinning===!0||W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null||Tt.envMap!==Ut||V.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Bt.numPlanes||Tt.numIntersection!==Bt.numIntersection)||Tt.vertexAlphas!==te||Tt.vertexTangents!==oe||Tt.morphTargets!==kt||Tt.morphNormals!==xe||Tt.morphColors!==Xe||Tt.toneMapping!==Ce||Tt.morphTargetsCount!==ai||!!Tt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Tt.__version=V.version);let Ri=Tt.currentProgram;he===!0&&(Ri=ko(V,U,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Ri,Tt));let $i=!1,In=!1,Es=!1,be=Ri.getUniforms(),Be=Tt.uniforms;if(M.useProgram(Ri.program)&&($i=!0,In=!0,Es=!0),V.id!==O&&(O=V.id,In=!0),Tt.needsLights){let Re=zp(E.state.lightProbeGridArray,W);Tt.lightProbeGrid!==Re&&(Tt.lightProbeGrid=Re,In=!0)}if($i||K!==S){M.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),be.setValue(B,"projectionMatrix",S.projectionMatrix),be.setValue(B,"viewMatrix",S.matrixWorldInverse);let Ln=be.map.cameraPosition;Ln!==void 0&&Ln.setValue(B,Le.setFromMatrixPosition(S.matrixWorld)),I.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&be.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),K!==S&&(K=S,In=!0,Es=!0)}if(Tt.needsLights&&(fi.state.sunShadowMap.length>0&&be.setValue(B,"sunShadowMap",fi.state.sunShadowMap,j),fi.state.directionalShadowMap.length>0&&be.setValue(B,"directionalShadowMap",fi.state.directionalShadowMap,j),fi.state.spotShadowMap.length>0&&be.setValue(B,"spotShadowMap",fi.state.spotShadowMap,j),fi.state.pointShadowMap.length>0&&be.setValue(B,"pointShadowMap",fi.state.pointShadowMap,j)),W.isSkinnedMesh){be.setOptional(B,W,"bindMatrix"),be.setOptional(B,W,"bindMatrixInverse");let Re=W.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),be.setValue(B,"boneTexture",Re.boneTexture,j))}W.isBatchedMesh&&(be.setOptional(B,W,"batchingTexture"),be.setValue(B,"batchingTexture",W._matricesTexture,j),be.setOptional(B,W,"batchingIdTexture"),be.setValue(B,"batchingIdTexture",W._indirectTexture,j),be.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&be.setValue(B,"batchingColorTexture",W._colorsTexture,j));let Pn=Z.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&F.update(W,Z,Ri),(In||Tt.receiveShadow!==W.receiveShadow)&&(Tt.receiveShadow=W.receiveShadow,be.setValue(B,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Be.envMapIntensity.value=U.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=ev()),In){if(be.setValue(B,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&Bp(Be,Es),bt&&V.fog===!0&&Ft.refreshFogUniforms(Be,bt),Ft.refreshMaterialUniforms(Be,V,st,J,E.state.transmissionRenderTarget[S.id]),Tt.needsLights&&Tt.lightProbeGrid){let Re=Tt.lightProbeGrid;Be.probesSH.value=Re.texture,Be.probesMin.value.copy(Re.boundingBox.min),Be.probesMax.value.copy(Re.boundingBox.max),Be.probesResolution.value.copy(Re.resolution)}pr.upload(B,Tf(Tt),Be,j)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pr.upload(B,Tf(Tt),Be,j),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&be.setValue(B,"center",W.center),be.setValue(B,"modelViewMatrix",W.modelViewMatrix),be.setValue(B,"normalMatrix",W.normalMatrix),be.setValue(B,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Re=V.uniformsGroups;for(let Ln=0,Ss=Re.length;Ln<Ss;Ln++){let Cf=Re[Ln];at.update(Cf,Ri),at.bind(Cf,Ri)}}return Ri}function Bp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Op(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(S,U,Z){let V=q.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(S.texture).__webglTexture=U,q.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let Z=q.get(S);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,Z=0){Y=S,H=U,X=Z;let V=null,W=!1,bt=!1;if(S){let Mt=q.get(S);if(Mt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(B.FRAMEBUFFER,Mt.__webglFramebuffer),tt.copy(S.viewport),St.copy(S.scissor),At=S.scissorTest,M.viewport(tt),M.scissor(St),M.setScissorTest(At),O=-1;return}else if(Mt.__webglFramebuffer===void 0)j.setupRenderTarget(S);else if(Mt.__hasExternalTextures)j.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let te=S.depthTexture;if(Mt.__boundDepthTexture!==te){if(te!==null&&q.has(te)&&(S.width!==te.image.width||S.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(S)}}let Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(bt=!0);let Ut=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?V=Ut[U][Z]:V=Ut[U],W=!0):S.samples>0&&j.useMultisampledRTT(S)===!1?V=q.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?V=Ut[Z]:V=Ut,tt.copy(S.viewport),St.copy(S.scissor),At=S.scissorTest}else tt.copy(Ct).multiplyScalar(st).floor(),St.copy(se).multiplyScalar(st).floor(),At=Ze;if(Z!==0&&(V=z),M.bindFramebuffer(B.FRAMEBUFFER,V)&&M.drawBuffers(S,V),M.viewport(tt),M.scissor(St),M.setScissorTest(At),W){let Mt=q.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,Z)}else if(bt){let Mt=U;for(let Dt=0;Dt<S.textures.length;Dt++){let Ut=q.get(S.textures[Dt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Dt,Ut.__webglTexture,Z,Mt)}}else if(S!==null&&Z!==0){let Mt=q.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mt.__webglTexture,Z)}O=-1};function Rf(S){let U=q.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=I.textureFormatReadable(S.format),U.__typeReadable=I.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,Z,V,W,bt,It,Mt=0){if(!(S&&S.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){M.bindFramebuffer(B.FRAMEBUFFER,Dt);try{let Ut=S.textures[Mt],te=Ut.format,oe=Ut.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt);let kt=Rf(Ut);if(kt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&Z>=0&&Z<=S.height-W&&B.readPixels(U,Z,V,W,yt.convert(te),yt.convert(oe),bt)}finally{let Ut=Y!==null?q.get(Y).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(S,U,Z,V,W,bt,It,Mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if(U>=0&&U<=S.width-V&&Z>=0&&Z<=S.height-W){M.bindFramebuffer(B.FRAMEBUFFER,Dt);let Ut=S.textures[Mt],te=Ut.format,oe=Ut.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Mt);let kt=Rf(Ut);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xe),B.bufferData(B.PIXEL_PACK_BUFFER,bt.byteLength,B.STREAM_READ),B.readPixels(U,Z,V,W,yt.convert(te),yt.convert(oe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Xe=Y!==null?q.get(Y).__webglFramebuffer:null;M.bindFramebuffer(B.FRAMEBUFFER,Xe);let Ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Vd(B,Ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,bt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(xe),B.deleteSync(Ce),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,Z=0){let V=Math.pow(2,-Z),W=Math.floor(S.image.width*V),bt=Math.floor(S.image.height*V),It=U!==null?U.x:0,Mt=U!==null?U.y:0;j.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,It,Mt,W,bt),M.unbindTexture()},this.copyTextureToTexture=function(S,U,Z=null,V=null,W=0,bt=0){let It,Mt,Dt,Ut,te,oe,kt,xe,Xe,Ce=S.isCompressedTexture?S.mipmaps[bt]:S.image;if(Z!==null)It=Z.max.x-Z.min.x,Mt=Z.max.y-Z.min.y,Dt=Z.isBox3?Z.max.z-Z.min.z:1,Ut=Z.min.x,te=Z.min.y,oe=Z.isBox3?Z.min.z:0;else{let Be=Math.pow(2,-W);It=Math.floor(Ce.width*Be),Mt=Math.floor(Ce.height*Be),S.isDataArrayTexture?Dt=Ce.depth:S.isData3DTexture?Dt=Math.floor(Ce.depth*Be):Dt=1,Ut=0,te=0,oe=0}V!==null?(kt=V.x,xe=V.y,Xe=V.z):(kt=0,xe=0,Xe=0);let we=yt.convert(U.format),ai=yt.convert(U.type),Tt;U.isData3DTexture?(j.setTexture3D(U,0),Tt=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(j.setTexture2DArray(U,0),Tt=B.TEXTURE_2D_ARRAY):(j.setTexture2D(U,0),Tt=B.TEXTURE_2D),M.activeTexture(B.TEXTURE0),M.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let fi=M.getParameter(B.UNPACK_ROW_LENGTH),he=M.getParameter(B.UNPACK_IMAGE_HEIGHT),Ri=M.getParameter(B.UNPACK_SKIP_PIXELS),$i=M.getParameter(B.UNPACK_SKIP_ROWS),In=M.getParameter(B.UNPACK_SKIP_IMAGES);M.pixelStorei(B.UNPACK_ROW_LENGTH,Ce.width),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ce.height),M.pixelStorei(B.UNPACK_SKIP_PIXELS,Ut),M.pixelStorei(B.UNPACK_SKIP_ROWS,te),M.pixelStorei(B.UNPACK_SKIP_IMAGES,oe);let Es=S.isDataArrayTexture||S.isData3DTexture,be=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let Be=q.get(S),Pn=q.get(U),Re=q.get(Be.__renderTarget),Ln=q.get(Pn.__renderTarget);M.bindFramebuffer(B.READ_FRAMEBUFFER,Re.__webglFramebuffer),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Ss=0;Ss<Dt;Ss++)Es&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(S).__webglTexture,W,oe+Ss),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,q.get(U).__webglTexture,bt,Xe+Ss)),B.blitFramebuffer(Ut,te,It,Mt,kt,xe,It,Mt,B.DEPTH_BUFFER_BIT,B.NEAREST);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||q.has(S)){let Be=q.get(S),Pn=q.get(U);M.bindFramebuffer(B.READ_FRAMEBUFFER,D),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,N);for(let Re=0;Re<Dt;Re++)Es?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,W,oe+Re):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,W),be?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pn.__webglTexture,bt,Xe+Re):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pn.__webglTexture,bt),W!==0?B.blitFramebuffer(Ut,te,It,Mt,kt,xe,It,Mt,B.COLOR_BUFFER_BIT,B.NEAREST):be?B.copyTexSubImage3D(Tt,bt,kt,xe,Xe+Re,Ut,te,It,Mt):B.copyTexSubImage2D(Tt,bt,kt,xe,Ut,te,It,Mt);M.bindFramebuffer(B.READ_FRAMEBUFFER,null),M.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else be?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(Tt,bt,kt,xe,Xe,It,Mt,Dt,we,ai,Ce.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Tt,bt,kt,xe,Xe,It,Mt,Dt,we,Ce.data):B.texSubImage3D(Tt,bt,kt,xe,Xe,It,Mt,Dt,we,ai,Ce):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,bt,kt,xe,It,Mt,we,ai,Ce.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,bt,kt,xe,Ce.width,Ce.height,we,Ce.data):B.texSubImage2D(B.TEXTURE_2D,bt,kt,xe,It,Mt,we,ai,Ce);M.pixelStorei(B.UNPACK_ROW_LENGTH,fi),M.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he),M.pixelStorei(B.UNPACK_SKIP_PIXELS,Ri),M.pixelStorei(B.UNPACK_SKIP_ROWS,$i),M.pixelStorei(B.UNPACK_SKIP_IMAGES,In),bt===0&&U.generateMipmaps&&B.generateMipmap(Tt),M.unbindTexture()},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?j.setTextureCube(S,0):S.isData3DTexture?j.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?j.setTexture2DArray(S,0):j.setTexture2D(S,0),M.unbindTexture()},this.resetState=function(){H=0,X=0,Y=null,M.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var pe=(r,t,e)=>r<t?t:r>e?e:r,Et=(r,t,e)=>r+(t-r)*e,xs=(r,t,e,i)=>Et(r,t,1-Math.exp(-e*i)),on=r=>r*r*(3-2*r),T=(r=0,t=1)=>r+Math.random()*(t-r);function Me(r){return function(){r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Zn(r,t){let e=t-r;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function an(r,t,e,i){return r+Zn(r,t)*(1-Math.exp(-e*i))}function Ge(r,t){let e=new Uint8ClampedArray(r*t*4),i=(n,s)=>(n%s+s)%s;return{w:r,h:t,data:e,set(n,s,o,a=255){n=i(Math.round(n),r),s=i(Math.round(s),t);let l=(s*r+n)*4;e[l]=o[0],e[l+1]=o[1],e[l+2]=o[2],e[l+3]=a},get(n,s){n=i(Math.round(n),r),s=i(Math.round(s),t);let o=(s*r+n)*4;return[e[o],e[o+1],e[o+2]]},rect(n,s,o,a,l){for(let c=0;c<o;c++)for(let h=0;h<a;h++)this.set(n+c,s+h,l)}}}function Ve(r,{repeat:t=!0,linear:e=!1}={}){let i=document.createElement("canvas");return i.width=r.w,i.height=r.h,i.getContext("2d").putImageData(new ImageData(r.data,r.w,r.h),0,0),Ru(i,{repeat:t,linear:e})}function Ru(r,{repeat:t=!0,linear:e=!1}={}){let i=new Oi(r);return i.magFilter=e?Ye:ae,i.minFilter=e?Ye:ae,i.generateMipmaps=!1,i.colorSpace=e?Wi:ni,t&&(i.wrapS=i.wrapT=bn),i}var ri=(r,t)=>[r[0]*t,r[1]*t,r[2]*t],Pe=(r,t)=>[r[0]+t,r[1]+t,r[2]+t],iv=(r,t,e)=>[r[0]+(t[0]-r[0])*e,r[1]+(t[1]-r[1])*e,r[2]+(t[2]-r[2])*e],Zh=new Map;function ze(r,t){return Zh.has(r)||Zh.set(r,t()),Zh.get(r)}function Jh(r=7,t=[176,168,148],e=15){return ze("floor"+r+t+e,()=>{let n=Ge(64,64),s=Me(r),o=[],a=Math.round(Math.sqrt(e));for(let h=0;h<a;h++)for(let d=0;d<a;d++){let f=(s()-.5)*30,u=(s()-.5)*12;o.push({x:(h+.2+s()*.6)/a*64,y:(d+.2+s()*.6)/a*64,sx:.75+s()*.6,sy:.75+s()*.6,c:[t[0]+f+u,t[1]+f,t[2]+f-u],moss:s()<.15})}let l=(h,d,f)=>{let u=Math.abs(d-h.x),p=Math.abs(f-h.y);return u=Math.min(u,64-u)*h.sx,p=Math.min(p,64-p)*h.sy,Math.max(u,p)*.75+(u+p)*.25},c=(h,d)=>{let f=null,u=1e9,p=1e9;for(let x of o){let m=l(x,h,d);m<u?(p=u,u=m,f=x):m<p&&(p=m)}return{b:f,gap:p-u}};for(let h=0;h<64;h++)for(let d=0;d<64;d++){let{b:f,gap:u}=c(h,d),p=f.c,x=s();x<.07?p=Pe(p,-12):x<.12&&(p=Pe(p,8)),u<1.1?(p=ri(f.c,.66),f.moss&&s()<.5&&(p=[112,124,86])):u<2.2&&(p=c(h,d-2).b!==f||c(h-2,d).b!==f?Pe(f.c,12):ri(f.c,.88)),n.set(h,d,p)}return Ve(n)})}function Cu(){return ze("path",()=>{let r=Ge(64,64),t=Me(31),e=[158,156,148];for(let i=0;i<4;i++){let n=i%2?8:0;for(let s=0;s<4;s++){let o=(t()-.5)*20,a=Pe(e,o);for(let l=0;l<16;l++)for(let c=0;c<16;c++){let h=a,d=t();d<.06?h=Pe(a,-12):d<.1&&(h=Pe(a,8)),l===15||c===15?h=ri(a,.7):(l===0||c===0)&&(h=Pe(a,10)),r.set(s*16+l+n,i*16+c,h)}}}return Ve(r)})}function Kh(r=[168,160,142]){return ze("block"+r,()=>{let t=Ge(32,32),e=Me(5);for(let i=0;i<4;i++){let n=i%2?8:0;for(let s=0;s<2;s++){let o=Pe(r,(e()-.5)*22);for(let a=0;a<16;a++)for(let l=0;l<8;l++){let c=o;e()<.08&&(c=Pe(o,-10)),a===15||l===7?c=ri(o,.55):l===0&&(c=Pe(o,16)),t.set(s*16+a+n,i*8+l,c)}}}return Ve(t)})}function jh(r=[92,132,64]){return ze("grass"+r,()=>{let t=Ge(32,32),e=Me(11);for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=e(),o=Pe(r,(e()-.5)*14);s<.12?o=ri(r,.78):s<.2&&(o=ri(r,1.14)),t.set(i,n,o)}for(let i=0;i<7;i++){let n=Math.floor(e()*32),s=Math.floor(e()*32),o=e()<.5?[236,230,200]:[232,200,92];t.set(n,s,o)}return Ve(t)})}function Iu(){return ze("dirt",()=>{let r=Ge(32,32),t=Me(13),e=[96,104,70];for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=t(),o=Pe(e,(t()-.5)*12);s<.15?o=[88,86,66]:s<.22&&(o=ri(e,1.15)),r.set(i,n,o)}return Ve(r)})}function Qh(r=[150,44,34]){return ze("wood"+r,()=>{let t=Ge(16,16),e=Me(17);for(let i=0;i<16;i++){let n=(e()-.5)*16;for(let s=0;s<16;s++){let o=Pe(r,n+(e()-.5)*6);i%5===0&&e()<.6&&(o=ri(r,.84)),t.set(i,s,o)}}return Ve(t)})}function Pu(){return Qh([92,60,40])}function Lu(r=[84,90,98]){return ze("roof"+r,()=>{let t=Ge(32,32),e=Me(19);for(let i=0;i<32;i++)for(let n=0;n<32;n++){let s=i%4,o;s===0?o=ri(r,.62):s===1?o=ri(r,1):s===2?o=ri(r,1.22):o=ri(r,1.06),n%8===7?o=ri(o,.78):n%8===0&&s!==0&&(o=ri(o,1.08)),o=Pe(o,(e()-.5)*6),t.set(i,n,o)}return Ve(t)})}function Vl(){return ze("dancheong",()=>{let r=Ge(64,16),t=[46,122,98],e=[34,92,76],i=[44,82,150],n=[176,52,44],s=[236,228,206],o=[226,182,64];for(let a=0;a<64;a++)for(let l=0;l<16;l++){let c=t;l===0||l===15?c=n:l===1||l===14?c=s:(l===2||l===13)&&(c=e),r.set(a,l,c)}for(let a=0;a<4;a++){let l=a*16+8,c=8;for(let h=-5;h<=5;h++)for(let d=-4;d<=4;d++){let f=Math.abs(h)/5+Math.abs(d)/4;f<=1&&r.set(l+h,c+d,f>.75?s:f>.5?i:f>.25?n:o)}for(let h=3;h<=12;h++)r.set(a*16,h,s),r.set(a*16+1,h,i)}return Ve(r)})}function tf(r=!1){return ze("lattice"+r,()=>{let t=Ge(32,48),e=r?[0,0,0]:[44,104,84],i=r?[0,0,0]:[30,70,58],n=r?[255,214,150]:[226,216,186],s=r?[220,170,110]:[204,192,160];for(let o=0;o<32;o++)for(let a=0;a<48;a++){let l=n;a>36&&(l=r?[0,0,0]:[120,60,44]),a===36&&(l=i);let c=o%5,h=a%6;a<36&&(c===0||h===0)&&(l=e),a<36&&c===4&&(l=iv(l,s,r?.3:.5)),(o<2||o>29||a<2||a>45)&&(l=i),t.set(o,a,l)}return Ve(t,{repeat:!1})})}function Du(){return ze("plaster",()=>{let r=Ge(32,32),t=Me(23);for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=Pe([226,220,204],(t()-.5)*8);i>24&&(n=Pe([150,140,124],(t()-.5)*12)),(i===24||i===2||e===0||e===31)&&(n=[156,52,40]),r.set(e,i,n)}return Ve(r)})}function ku(r){return ze("banner"+r,()=>{let i=document.createElement("canvas");i.width=32,i.height=40;let n=i.getContext("2d"),s,o,a,l,c;if(r==="red"?(s="#b8302a",o="#e8b030",a="#f0c040",l="\u4EE4",c="#7a1c18"):r==="white"?(s="#ece6d4",o="#e0a828",a="#1a1a1a",l="\u9F8D",c="#ece6d4"):(s="#23305e",o="#c8342c",a="#e8e0d0",l="\u6B66",c="#23305e"),n.fillStyle=o,n.fillRect(0,0,32,40),n.fillStyle=s,n.fillRect(3,3,26,34),r==="white"){n.fillStyle="#c03028";for(let h=0;h<40;h+=4)n.fillRect(29,h,3,2),n.fillRect(0,h+2,2,2);for(let h=0;h<32;h+=4)n.fillRect(h,37,2,3)}else r==="red"&&(n.fillStyle=c,n.fillRect(6,6,20,28),n.fillStyle=o,n.fillRect(6,6,20,1),n.fillRect(6,33,20,1),n.fillRect(6,6,1,28),n.fillRect(25,6,1,28));return n.fillStyle=a,n.font='bold 20px "Noto Serif CJK KR","Noto Sans CJK KR","Malgun Gothic","Apple SD Gothic Neo",serif',n.textAlign="center",n.textBaseline="middle",n.fillText(l,32/2,40/2+1),nv(n,32,40,[s,o,a,c,"#c03028"]),Ru(i,{repeat:!1})})}function nv(r,t,e,i){let n=i.map(a=>[parseInt(a.slice(1,3),16),parseInt(a.slice(3,5),16),parseInt(a.slice(5,7),16)]),s=r.getImageData(0,0,t,e),o=s.data;for(let a=0;a<o.length;a+=4){let l=n[0],c=1e9;for(let h of n){let d=(o[a]-h[0])**2+(o[a+1]-h[1])**2+(o[a+2]-h[2])**2;d<c&&(c=d,l=h)}o[a]=l[0],o[a+1]=l[1],o[a+2]=l[2],o[a+3]=255}r.putImageData(s,0,0)}function Nu(){return ze("drumside",()=>{let r=Ge(64,32),t=Me(29),e=[40,92,150];for(let i=0;i<64;i++)for(let n=0;n<32;n++){let s=Pe(e,(t()-.5)*8),o=Math.sin(i*.4+Math.sin(n*.35)*2.2)+Math.sin(n*.5+i*.12);o>1.35?s=[196,62,50]:o>1.1?s=[236,220,180]:o<-1.45&&(s=[70,150,110]),(n<3||n>28)&&(s=[180,48,40]),(n===3||n===28)&&(s=[226,186,70]),r.set(i,n,s)}return Ve(r)})}function Uu(){return ze("drumface",()=>{let r=Ge(32,32),t=[[196,52,44],[40,80,160],[228,186,60]];for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=e-15.5,s=i-15.5,o=Math.hypot(n,s),a=[222,206,170];if(o>14.5)a=[120,70,40];else if(o>13.5)a=[226,186,70];else if(o<8){let l=Math.atan2(s,n)+o*.22,c=Math.floor((l/(Math.PI*2)%1+1)%1*3);a=t[c]}r.set(e,i,a)}return Ve(r,{repeat:!1})})}function zu(){return ze("medallion",()=>{let r=Ge(64,64),t=Me(37),e=[170,164,148];for(let i=0;i<64;i++)for(let n=0;n<64;n++){let s=i-31.5,o=n-31.5,a=Pe(e,(t()-.5)*10),l=Math.abs(s)+Math.abs(o),c=Math.max(Math.abs(s),Math.abs(o)),h=Math.hypot(s,o),d=Math.atan2(o,s),f=ri(e,.68),u=Pe(e,18);c>30?a=f:c>29&&(a=u),Math.abs(l-29)<.8&&(a=f),Math.abs(l-27)<.8&&(a=u);let p=9+5*Math.abs(Math.cos(d*4));Math.abs(h-p)<.8&&(a=f),h<p-.8&&h>p-2&&(a=u),h<4&&(a=Math.abs(h-3)<.8?f:Pe(e,8)),Math.abs(h-19)<.7&&Math.abs(Math.sin(d*8))>.4&&(a=f),r.set(i,n,a)}return Ve(r,{repeat:!1})})}function Fu(){return ze("carving",()=>{let r=Ge(16,32),t=[178,170,152];for(let e=0;e<16;e++)for(let i=0;i<32;i++){let n=t;e===0||e===15||i===0||i===31?n=ri(t,.65):(e===1||i===1)&&(n=Pe(t,16));let s=e-7.5,o=i-15.5,a=Math.sin(s*.9)*3+Math.cos(o*.5)*2;Math.abs(s)<5&&Math.abs(o)<12&&Math.abs(a)<.6&&(n=ri(t,.7)),r.set(e,i,n)}return Ve(r,{repeat:!1})})}function Bu(){return ze("bark",()=>{let r=Ge(16,16),t=Me(41);for(let e=0;e<16;e++)for(let i=0;i<16;i++){let n=Pe([104,78,62],(t()-.5)*16);(i+Math.floor(e/4)*3)%5===0&&(n=[70,52,42]),t()<.08&&(n=[132,102,80]),r.set(e,i,n)}return Ve(r)})}function Ou(){return ze("tiger",()=>{let r=Ge(16,16);for(let t=0;t<16;t++)for(let e=0;e<16;e++){let i=[226,142,48];Math.sin(t*1.1+Math.sin(e*.7)*1.5)>.55&&(i=[40,28,24]),r.set(t,e,i)}return Ve(r)})}function Hu(){return ze("cloud",()=>{let t=Ge(128,128),e=Me(53),i=[[4,.5],[8,.27],[16,.15],[32,.08]],n=i.map(([o])=>Array.from({length:o*o},()=>e())),s=o=>o*o*(3-2*o);for(let o=0;o<128;o++)for(let a=0;a<128;a++){let l=0;i.forEach(([h,d],f)=>{let u=o/128*h,p=a/128*h,x=Math.floor(u),m=Math.floor(p),g=s(u-x),v=s(p-m),b=n[f],y=(C,_)=>b[_%h*h+C%h],w=y(x,m)+(y(x+1,m)-y(x,m))*g,E=y(x,m+1)+(y(x+1,m+1)-y(x,m+1))*g;l+=(w+(E-w)*v)*d});let c=Math.max(0,Math.min(255,l*255));t.set(o,a,[c,c,c])}return Ve(t,{linear:!0})})}function Gu(){return ze("bamboo",()=>{let r=Ge(16,32),t=Me(61);for(let e=0;e<16;e++)for(let i=0;i<32;i++){let n=e%8,s=n<2?[92,140,66]:n<5?[120,168,78]:[104,152,70];s=Pe(s,(t()-.5)*8),i%16===0?s=[186,196,120]:(i%16===1||i%16===15)&&(s=[70,104,50]),r.set(e,i,s)}return Ve(r)})}function Vu(){return ze("snow",()=>{let r=Ge(32,32),t=Me(67);for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=Pe([226,234,244],(t()-.5)*8),s=t();s<.08?n=[196,210,232]:s<.11&&(n=[250,252,255]),r.set(e,i,n)}for(let e=0;e<6;e++){let i=Math.floor(t()*32),n=Math.floor(t()*32);for(let s=0;s<8;s++)r.set(n+s,i+(s>4?1:0),[204,216,236])}return Ve(r)})}function Wu(){return ze("fpath",()=>{let r=Ge(32,32),t=Me(71);for(let e=0;e<32;e++)for(let i=0;i<32;i++){let n=Pe([138,112,82],(t()-.5)*14),s=t();s<.06?n=[176,120,60]:s<.1?n=[110,88,64]:s<.13&&(n=[150,160,90]),r.set(e,i,n)}return Ve(r)})}function Xu(){return jh([70,112,58])}var Gl=r=>{let t=parseInt(r.slice(1),16);return[t>>16&255,t>>8&255,t&255]};function qu(r,t,e,i){return ze(`cloth-${r}-${t}-${e}-${i}`,()=>{let n=Ge(32,32),s=Gl(t),o=Gl(e),a=Gl(i),l=s.map(c=>Math.round(c*.86));n.rect(0,0,32,32,s);for(let c=0;c<32;c+=2)for(let h=c/2%4;h<32;h+=4)n.set(h,c,l);if(r==="saekdong"){let c=["#e8423a","#f4c43a","#4aa84e","#3a6ad8","#e86aa8","#f4f0e4"].map(Gl);for(let h=0;h<32;h++)for(let d=0;d<32;d++)n.set(d,h,c[Math.floor(h/4)%6]);for(let h=0;h<32;h++)for(let d=3;d<32;d+=4)n.set(h,d,c[Math.floor(d/4)%6].map(f=>Math.round(f*.8)))}else if(r==="flower"){for(let[c,h]of[[6,7],[22,4],[14,19],[29,22],[4,28]]){for(let[d,f]of[[0,-2],[2,-1],[1,2],[-1,2],[-2,-1]])n.set(c+d,h+f,o),n.set(c+d*.5,h+f*.5,o);n.set(c,h,a)}for(let[c,h]of[[12,9],[26,13],[8,16],[20,28]])n.set(c,h,o)}else if(r==="plum"){let c=s.map(h=>Math.round(h*.55));for(let h=0;h<32;h++)n.set(h,24-Math.round(h*.5)+Math.round(Math.sin(h*.7)),c);for(let h=0;h<10;h++)n.set(12+h,16-h,c);for(let[h,d]of[[5,21],[14,15],[20,8],[27,11],[30,3]]){for(let[f,u]of[[0,-1],[1,0],[0,1],[-1,0]])n.set(h+f,d+u,o);n.set(h,d,a)}}else if(r==="cloud"){for(let[c,h]of[[8,8],[24,22]]){for(let d=0;d<14;d++){let f=1+d*.32,u=d*.75;n.set(c+Math.cos(u)*f,h+Math.sin(u)*f*.7,o)}for(let d=-6;d<=6;d++)n.set(c+d,h+4,o);n.set(c,h,a)}for(let[c,h]of[[20,6],[4,22],[28,30]])n.set(c,h,o),n.set(c+1,h,o)}else if(r==="star"){for(let[c,h]of[[6,5],[21,12],[11,25],[28,27]]){n.set(c,h,a);for(let[d,f]of[[1,0],[-1,0],[0,1],[0,-1]])n.set(c+d,h+f,o)}for(let[c,h]of[[15,3],[2,15],[26,4],[18,20],[6,30],[30,17]])n.set(c,h,o)}else if(r==="dragon"){for(let[c,h]of[[9,10],[25,26]]){for(let d=0;d<24;d++){let f=d/24*Math.PI*2;n.set(c+Math.cos(f)*5,h+Math.sin(f)*5,o)}n.rect(c-1,h-1,3,3,a),n.set(c-3,h,o),n.set(c+3,h,o),n.set(c,h-3,o),n.set(c,h+3,o)}for(let c=0;c<32;c++)n.set(c,18+Math.round(Math.sin(c*.6)*1.5),o)}else if(r==="wave"){for(let c=0;c<32;c+=8)for(let h=0;h<32;h++)n.set(h,c+3+Math.round(Math.sin(h/32*Math.PI*4)*2),o);for(let c=0;c<32;c+=8)n.set(c+4,1,a)}return Ve(n)})}var Ai={time:{value:0},player:{value:new R(0,-100,0)},night:{value:0}},gr=null;function sv(){if(!gr){let r=new Uint8Array([78,78,78,255,150,150,150,255,212,212,212,255,255,255,255,255]);gr=new os(r,4,1,_i),gr.magFilter=gr.minFilter=ae,gr.needsUpdate=!0}return gr}function Pt(r={}){return new hs({gradientMap:sv(),...r})}function ef(r,{local:t="",world:e=""},i){r.onBeforeCompile=n=>{n.uniforms.uTime=Ai.time,n.uniforms.uPlayer=Ai.player;let s=`uniform float uTime;
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
        gl_Position = projectionMatrix * mvPosition;`)),n.vertexShader=s},r.customProgramCacheKey=()=>i}var nf=new Map;function ln(r,t,{shadow:e=!0}={}){let i="anim:"+(t.local||"")+"|"+(t.world||"");if(ef(r.material,t,i),e){let o=new rr({depthPacking:vh});ef(o,t,i+":depth"),r.customDepthMaterial=o}let n=r.material.side,s=i+n;if(!nf.has(s)){let o=new Bn({side:n});ef(o,t,i+":normal"),nf.set(s,o)}return r.userData.nmat=nf.get(s),r}var cn={flag:{local:`
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
      wPos.y -= push * h * 0.5;`}};var Eo=16,rv=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,ov=`
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
}`,Wl=class{constructor(t){this.container=t,this.canvas=document.createElement("canvas"),this.canvas.className="view",t.appendChild(this.canvas);let e=this.renderer=new Bl({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(1),e.shadowMap.enabled=!0,e.shadowMap.type=ds,e.shadowMap.autoUpdate=!1,e.outputColorSpace=rs,this.pixelSize=3,this.userZoom=0,this.colorTarget=null,this.normalTarget=null,this.normalFront=new Bn,this.normalDouble=new Bn({side:fe}),this.compMat=new Ue({vertexShader:rv,fragmentShader:ov,uniforms:{tColor:{value:null},tNormal:{value:null},tDepth:{value:null},tCloud:{value:Hu()},res:{value:new ft(1,1)},cNear:{value:1},cFar:{value:100},invViewProj:{value:new Zt},time:Ai.time,night:Ai.night,outline:{value:1},flash:{value:0},flashColor:{value:new ct(1,1,1)},vignette:{value:.55}},depthTest:!1,depthWrite:!1}),this.compScene=new wn,this.compCam=new Gi(-1,1,1,-1,0,1);let i=new ot(new me(2,2),this.compMat);i.frustumCulled=!1,this.compScene.add(i),this.camera=new Gi(-1,1,1,-1,1,160),this.pitch=wh.degToRad(45),this.camDist=70,this.shift={x:0,y:0},this.resize(),window.addEventListener("resize",()=>this.resize())}basePixelSize(){return Math.max(2,Math.round(Math.sqrt(window.innerWidth*window.innerHeight)/330))}autoPixelSize(){return this.basePixelSize()+this.userZoom}zoom(t){let e=this.basePixelSize(),i=Math.min(Math.max(e+this.userZoom+t,2),e+3);this.userZoom=i-e,this.resize()}resize(){let t=this.pixelSize=Math.max(2,this.autoPixelSize()),e=this.W=Math.ceil(window.innerWidth/t),i=this.H=Math.ceil(window.innerHeight/t),n=this.RW=e+2,s=this.RH=i+2;this.renderer.setSize(n,s,!1),Object.assign(this.canvas.style,{width:n*t+"px",height:s*t+"px"});let o={minFilter:ae,magFilter:ae,type:Ti};this.colorTarget?.dispose(),this.normalTarget?.dispose(),this.colorTarget=new Je(n,s,o),this.normalTarget=new Je(n,s,{minFilter:ae,magFilter:ae}),this.normalTarget.depthTexture=new en(n,s),this.normalTarget.depthTexture.type=Si,this.compMat.uniforms.res.value.set(n,s);let a=this.camera;a.left=-n/Eo/2,a.right=n/Eo/2,a.top=s/Eo/2,a.bottom=-s/Eo/2,a.updateProjectionMatrix()}project(t,e={x:0,y:0}){let i=sf.copy(t).project(this.camera),n=this.pixelSize;return e.x=(i.x*.5+.5)*this.RW*n-n+this.shift.x,e.y=(-i.y*.5+.5)*this.RH*n-n+this.shift.y,e.z=i.z,e}unproject(t,e,i=0){let n=this.pixelSize,s=(t+n-this.shift.x)/(this.RW*n)*2-1,o=-((e+n-this.shift.y)/(this.RH*n)*2-1),a=sf.set(s,o,-1).unproject(this.camera),c=av.set(s,o,1).unproject(this.camera).sub(a),h=(i-a.y)/c.y;return new R(a.x+c.x*h,i,a.z+c.z*h)}setFocus(t){let e=this.camera,i=this.pitch,n=sf.set(0,Math.sin(i),Math.cos(i)).multiplyScalar(this.camDist);e.position.copy(t).add(n),e.up.set(0,1,0),e.lookAt(t),e.updateMatrixWorld();let s=lv.setFromMatrixColumn(e.matrixWorld,0),o=cv.setFromMatrixColumn(e.matrixWorld,1),a=1/Eo,l=e.position.dot(s),c=e.position.dot(o),h=Math.round(l/a)*a,d=Math.round(c/a)*a;e.position.addScaledVector(s,h-l).addScaledVector(o,d-c),e.updateMatrixWorld();let f=(l-h)/a,u=(c-d)/a,p=this.pixelSize;this.shift.x=-f*p,this.shift.y=u*p,this.canvas.style.transform=`translate(${(-p+this.shift.x).toFixed(2)}px, ${(-p+this.shift.y).toFixed(2)}px)`}render(t){let e=this.renderer,i=this.camera,n=[],s=[];t.traverseVisible(l=>{if(l.isMesh||l.isPoints||l.isLine||l.isSprite)if(l.userData.noOutline||l.isPoints||l.isSprite||l.isLine||l.material&&l.material.transparent)s.push(l);else{n.push(l,l.material);let c=l.userData.nmat||(Array.isArray(l.material)?l.material[0].side===fe?this.normalDouble:this.normalFront:l.material.side===fe?this.normalDouble:this.normalFront);l.material=c}});for(let l of s)l.visible=!1;let o=t.background;t.background=null,e.setRenderTarget(this.normalTarget),e.setClearColor(8421631,1),e.clear(),e.render(t,i);for(let l=0;l<n.length;l+=2)n[l].material=n[l+1];for(let l of s)l.visible=!0;t.background=o,e.shadowMap.needsUpdate=!0,e.setRenderTarget(this.colorTarget),e.render(t,i);let a=this.compMat.uniforms;a.tColor.value=this.colorTarget.texture,a.tNormal.value=this.normalTarget.texture,a.tDepth.value=this.normalTarget.depthTexture,a.cNear.value=i.near,a.cFar.value=i.far,a.invViewProj.value.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).invert(),e.setRenderTarget(null),e.render(this.compScene,this.compCam)}},sf=new R,av=new R,lv=new R,cv=new R;function Zu(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ue,c=0;for(let h=0;h<r.length;++h){let d=r[h],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in d.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;s[u]===void 0&&(s[u]=[]),s[u].push(d.attributes[u]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in d.morphAttributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(d.morphAttributes[u])}if(t){let u;if(e)u=d.index.count;else if(d.attributes.position!==void 0)u=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,d=[];for(let f=0;f<r.length;++f){let u=r[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=r[f].attributes.position.count}l.setIndex(d)}for(let h in s){let d=$u(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][f]);let p=$u(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function $u(r){let t,e,i,n=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new Oe(o,e,i),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){let x=h.getComponent(f,p);a.setComponent(f+d,p,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}function dt(r,t,e,i=4){let n=new ut(r,t,e),s=n.attributes.uv,o=[[e,t],[e,t],[r,e],[r,e],[r,t],[r,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;s.setXY(c,s.getX(c)*o[a][0]/i,s.getY(c)*o[a][1]/i)}return n}function Fe(r,t,e,i=12,n=0,s=0){let o=new Ht(r,t,e,i);if(n){let a=o.attributes.uv;for(let l=0;l<a.count;l++)a.setXY(l,a.getX(l)*n,a.getY(l)*s)}return o}var hn=class{constructor(){this.groups=new Map}add(t,e,i){let n=t.index?t.toNonIndexed():t.clone();n.attributes.uv||n.setAttribute("uv",new zt(new Float32Array(n.attributes.position.count*2),2));for(let s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);n.applyMatrix4(i),this.groups.has(e)||this.groups.set(e,[]),this.groups.get(e).push(n)}put(t,e,i,n,s,o=0,a=0,l=0,c=1){Ju.compose(hv.set(i,n,s),fv.setFromEuler(dv.set(a,o,l,"YXZ")),uv.set(c,c,c)),this.add(t,e,Ju)}build(t,{cast:e=!0,receive:i=!0}={}){let n=[];for(let[s,o]of this.groups){let a=Zu(o,!1),l=new ot(a,s);l.castShadow=e,l.receiveShadow=i,t.add(l),n.push(l)}return this.groups.clear(),n}},Ju=new Zt,hv=new R,fv=new Ee,dv=new si,uv=new R;function Ku({w:r,d:t,h:e,overhang:i=2,lift:n=.7,power:s=1.7,seg:o=28,thick:a=.28,tile:l=2}){let c=r+i*2,h=t+i*2,d=Math.min(c,h)/2,f=(Y,O)=>{let K=c/2-Math.abs(Y),tt=h/2-Math.abs(O),St=Math.max(0,Math.min(K,tt)),At=Math.min(1,St/d),Kt=e*Math.pow(At,s),Xt=Math.min(1,Math.abs(Y)/(c/2)),Qt=Math.min(1,Math.abs(O)/(h/2));return Kt+=n*Math.pow(Xt*Qt,2.2),Kt},u=o,p=Math.max(6,Math.round(o*h/c)),x=[],m=[],g=[],v=[],b=[],y=[],w=.05,E=(Y,O)=>{let K=(f(Y+w,O)-f(Y-w,O))/(2*w),tt=(f(Y,O+w)-f(Y,O-w))/(2*w);return new R(-K,1,-tt).normalize()},C=Y=>-c/2+c*Y/u,_=Y=>-h/2+h*Y/p,A=(Y,O,K)=>{let tt=(Y[0]+O[0]+K[0])/3,St=(Y[1]+O[1]+K[1])/3,At=c/2-Math.abs(tt)>h/2-Math.abs(St);for(let[Kt,Xt]of[Y,O,K]){let Qt=f(Kt,Xt),J=E(Kt,Xt);x.push(Kt,Qt,Xt),m.push(J.x,J.y,J.z),At?g.push(Kt/l,(h/2-Math.abs(Xt))/l):g.push(Xt/l,(c/2-Math.abs(Kt))/l)}for(let[Kt,Xt]of[Y,K,O]){let Qt=f(Kt,Xt)-a;v.push(Kt,Qt,Xt),b.push(0,-1,0),y.push(Kt/2,Xt/2)}};for(let Y=0;Y<u;Y++)for(let O=0;O<p;O++){let K=[C(Y),_(O)],tt=[C(Y+1),_(O)],St=[C(Y+1),_(O+1)],At=[C(Y),_(O+1)];(C(Y)+C(Y+1))*(_(O)+_(O+1))>0?(A(K,At,tt),A(tt,At,St)):(A(K,At,St),A(K,St,tt))}let P=new ue;P.setAttribute("position",new zt(x,3)),P.setAttribute("normal",new zt(m,3)),P.setAttribute("uv",new zt(g,2));let k=new ue;k.setAttribute("position",new zt(v,3)),k.setAttribute("normal",new zt(b,3)),k.setAttribute("uv",new zt(y,2));let L=[],z=[],D=[],N=[];for(let Y=0;Y<=u;Y++)N.push([C(Y),-h/2,0,0,-1]);for(let Y=1;Y<=p;Y++)N.push([c/2,_(Y),1,0,0]);for(let Y=u-1;Y>=0;Y--)N.push([C(Y),h/2,0,0,1]);for(let Y=p-1;Y>=0;Y--)N.push([-c/2,_(Y),-1,0,0]);let H=0;for(let Y=0;Y<N.length-1;Y++){let[O,K]=N[Y],[tt,St,At,,Kt]=N[Y+1],Xt=f(O,K),Qt=f(tt,St),J=Math.hypot(tt-O,St-K),st=[[O,Xt,K,H,1],[tt,Qt,St,H+J,1],[tt,Qt-a,St,H+J,0],[O,Xt-a,K,H,0]];for(let Rt of[0,2,1,0,3,2]){let Wt=st[Rt];L.push(Wt[0],Wt[1],Wt[2]),z.push(At,0,Kt),D.push(Wt[3]/4,Wt[4]*.25)}H+=J}let X=new ue;return X.setAttribute("position",new zt(L,3)),X.setAttribute("normal",new zt(z,3)),X.setAttribute("uv",new zt(D,2)),{top:P,under:k,fascia:X,height:f,W:c,D:h}}function ys(r,t=12){return new no(r.map(([e,i])=>new ft(e,i)),t)}var fn=r=>new ct(r),xr=(r,t,e,i)=>(r.position.set(t,e,i),r);function Qu(r){let t=r.M;t.bamboo=Pt({map:Gu()}),t.snow=Pt({map:Vu()}),t.fpath=Pt({map:Wu()}),t.fgrass=Pt({map:Xu()}),t.bambooLeaf=Pt({color:fn("#6aa84a")}),t.bambooLeaf2=Pt({color:fn("#4a8a3e")}),t.snowLeaf=Pt({color:fn("#eef4fa")}),t.cloth=["#c8302c","#2f5aa8","#e0b040","#f0ece0","#3a8a4a"].map(e=>Pt({color:fn(e),side:fe})),t.wood2=Pt({color:fn("#8a6a4a")}),t.ice=Pt({color:fn("#bfe8ff"),emissive:fn("#000000")}),t.rock=Pt({color:fn("#8a8478")}),t.rockDark=Pt({color:fn("#6a665e")}),r.glowMats.push({mat:t.ice,color:new ct("#4ab0ff"),k:.7})}function tp(r,t,e=0){let i=new ot(new me(120,48.2),t);i.geometry.attributes.uv.array.forEach((n,s,o)=>o[s]=n*(s%2===0?60:24.1)),i.rotation.x=-Math.PI/2,i.position.set(0,e,-2),i.receiveShadow=!0,r.root.add(i)}function ep(r,t,e,i,n=.012){for(let s=0;s<e.length-1;s++){let[o,a]=e[s],[l,c]=e[s+1],h=Math.hypot(l-o,c-a)+i*.6,d=new me(i,h);d.attributes.uv.array.forEach((u,p,x)=>x[p]=u*(p%2===0?i/2:h/2));let f=new ot(d,t);f.rotation.order="YXZ",f.rotation.y=Math.atan2(l-o,c-a),f.rotation.x=-Math.PI/2,f.position.set((o+l)/2,n+s%2*.002,(a+c)/2),f.receiveShadow=!0,r.root.add(f)}}function Xl(r,t,e,i,n){let s=new Hi(n,24);s.attributes.uv.array.forEach((a,l,c)=>c[l]=a*n);let o=new ot(s,t);return o.rotation.x=-Math.PI/2,o.position.set(e,.01,i),o.receiveShadow=!0,r.root.add(o),o}function ip(r,t,e,i,n,s,o,a,l=1.1){t.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0)}),r.root.add(t),r.circles.push({x:i,z:n,r:l,y:0}),r.drums.push({group:t,body:e,pos:new R(i,0,n),shake:0,label:s,sound:o,reach:2.6,promptY:a})}function vs(r,t,e,i=1,n=1){let s=Me(n),o=0;for(let a=0;a<6;a++){let l=(.42-a*.055)*i,c=l*.6;r.batch.add(new Se(1,0),a%2?r.M.rock:r.M.rockDark,rt(t+(s()-.5)*.06,o+c*.5,e+(s()-.5)*.06,s()*6,0,0,[l,c,l])),o+=c*.85}r.circles.push({x:t,z:e,r:.45*i,y:0})}function np(r){Qu(r);let t=r.M,e=r.batch=new hn;r.foliage=new hn;let i=Me(303);tp(r,t.fgrass);let n=b=>Math.sin(b*.12)*2.2,s=[];for(let b=24;b>=-28;b-=4)s.push([n(b),b]);ep(r,t.fpath,s,3.6),Xl(r,t.fpath,0,1,8.5),Xl(r,t.fpath,0,-15,4.2),rf(r,t.fgrass,-60,60,-25.6,-31.6,-.012),rf(r,t.snow,-60,60,22.6,12,.004);let o=Me(17);for(let b=0;b<18;b++){let y=6+o()*14,w=(o()-.5)*36;Math.abs(w-n(y))<2.5||(Xl(r,t.snow,w,y,.6+o()*1.2*(y-4)/16).position.y=.006)}let a=[];for(let b=-19;b<=19;b+=4.2)for(let y=-25;y<=21;y+=4.2){let w=b+(i()-.5)*2.4,E=y+(i()-.5)*2.4;if(Math.hypot(w,E-1)<11.5||Math.abs(w-n(E))<4.2||Math.hypot(w,E+15)<7||E<-18.5&&Math.abs(w)<10)continue;let C=1.4+i()*1.4,_=Math.floor(C*6);for(let A=0;A<_;A++){let P=i()*Math.PI*2,k=Math.sqrt(i())*C;a.push([w+Math.cos(P)*k,E+Math.sin(P)*k,3.2+i()*2.6])}r.circles.push({x:w,z:E,r:C*.85,y:0})}for(let b=0;b<160;b++){let y=Math.floor(i()*4),w=y<2?(y?1:-1)*(21+i()*6):(i()-.5)*50,E=y>=2?y===2?-27-i()*3:20+i()*2.5:(i()-.5)*56;y>=2&&Math.abs(w)<12||a.push([w,E,3.5+i()*2.8])}let l=new Ht(.085,.1,1,6);l.translate(0,.5,0);let c=new as(l,t.bamboo,a.length),h=new Zt,d=new Ee,f=new si;a.forEach(([b,y,w],E)=>{f.set((i()-.5)*.08,i()*6,(i()-.5)*.08),h.compose(new R(b,0,y),d.setFromEuler(f),new R(1,w,1)),c.setMatrixAt(E,h);for(let C=0;C<3;C++){let _=w*(.62+C*.14),A=i()*Math.PI*2;r.foliage.add(new Se(1,0),y>12&&C%2?t.snowLeaf:C%2?t.bambooLeaf:t.bambooLeaf2,new Zt().compose(new R(b+Math.cos(A)*.35,_,y+Math.sin(A)*.35),new Ee().setFromEuler(new si(0,A,.3)),new R(.55,.12,.28)))}}),c.castShadow=!0,c.receiveShadow=!0,ln(c,cn.foliage),r.root.add(c),r.pine(-1.8,0,-16.5,1.35,77);let u=Me(5);for(let b=0;b<14;b++){let y=u()*Math.PI*2,w=1+u()*1.6,E=new ot(new me(.16,.9,1,3),t.cloth[b%5]);E.position.set(-1.8+Math.cos(y)*w,2.2+u()*1.2,-16.5+Math.sin(y)*w),E.rotation.y=u()*6,E.castShadow=!0,ln(E,cn.flag),r.root.add(E)}vs(r,2.2,-16.8,1.4,3),vs(r,-4.8,-13.8,1,4);let p=new Lt;p.position.set(2.4,0,-13.2),p.add(xr(new ot(dt(.14,2.4,.14,1),t.wood2),-.7,1.2,0)),p.add(xr(new ot(dt(.14,2.4,.14,1),t.wood2),.7,1.2,0)),p.add(xr(new ot(dt(1.7,.14,.18,1),t.wood2),0,2.38,0));let x=new Lt;x.position.set(0,2.3,0);let m=new ot(ys([[.02,0],[.18,-.08],[.3,-.42],[.34,-.55],[0,-.55]],10),t.gold),g=new ot(new Jt(.08,6,4),t.bronzeDark);g.position.y=-.6;let v=new ot(dt(.03,.9,.03,1),t.cloth[0]);v.position.y=-1.05,x.add(m,g,v),p.add(x),ip(r,p,x,2.4,-13.2,"\uBC29\uC6B8","bell",3.2,.9);for(let b of[-1,1])ju(r,b*3.2,17.5,b);for(let b of[-1,1])ju(r,n(-21)+b*3,-21,b);for(let[b,y,w,E]of[[-7.5,-23,1,41],[8,-22.5,1.1,42],[-11,-19.5,.9,43],[12,-20,.95,44]])r.pine(b,0,y,w,E);vs(r,-8,6,1.1,7),vs(r,8.4,-4,1,8),vs(r,7,8.5,.8,9);for(let[b,y]of[[-7.5,-5],[7.6,3],[-6,9],[5.6,-8.5]])r.stoneLantern(b,0,y);r.grassAreas=[{x0:-9,x1:-4,z0:-25,z1:-20,y:0},{x0:4.5,x1:9.5,z0:-24.5,z1:-19.5,y:0}];for(let b=0;b<10;b++){let y=i()*Math.PI*2,w=9+i()*3,E=Math.cos(y)*w,C=1+Math.sin(y)*w;r.grassAreas.push({x0:E-1.2,x1:E+1.2,z0:C-1,z1:C+1,y:0})}r.scatterGrass(),e.build(r.root);for(let b of r.foliage.build(r.root))ln(b,cn.foliage)}function ju(r,t,e,i){let n=r.M,s=r.batch,o=r.M.wood2;s.add(Fe(.26,.3,2.6,8),o,rt(t,1.3,e)),s.add(Fe(i>0?.3:.24,.3,.4,8),n.black,rt(t,2.75,e));for(let a of[-1,1])s.add(new Jt(.08,6,4),n.mortar,rt(t+a*.11,2.25,e+.24)),s.add(new Jt(.035,4,3),n.black,rt(t+a*.11,2.25,e+.31));s.add(new Jt(.09,6,4),o,rt(t,2.1,e+.28)),s.add(dt(.3,.06,.06,1),n.mortar,rt(t,1.93,e+.27)),s.add(dt(.12,1.1,.03,1),n.red,rt(t,1.1,e+.28)),r.circles.push({x:t,z:e,r:.4,y:0})}function sp(r){Qu(r);let t=r.M,e=r.batch=new hn;r.foliage=new hn;let i=Me(505);tp(r,t.snow,-.004),ep(r,t.path,[[0,24],[0,10],[0,-5]],3.6,.02),Xl(r,t.slab,0,3,7.5),r.terrace(-11,11,-22,-7,.8),r.stairs(-7,-4.6,.8,0),r.balustrade(-11,-7,-2.9,-7,.8),r.balustrade(2.9,-7,11,-7,.8);for(let p=0;p<7;p++){let x=-9+p*3,m=[3.2,1.4,2.6,.9,3.2,2,1.1][p];e.add(Fe(.26,.29,m,10),t.wood,rt(x,.8+m/2,-19.5)),e.add(Fe(.36,.38,.14,10),t.stoneLight,rt(x,.87,-19.5)),r.circles.push({x,z:-19.5,r:.4,y:.8}),m>2.5&&e.add(dt(.7,.2,.7,1),t.snow,rt(x,.8+m+.05,-19.5))}let n=r.roof({cx:4,cy:.9,cz:-15.5,w:7,d:3,h:1.2,overhang:1,lift:.4,ridge:!0,rot:.25});n.group.rotation.z=.18,r.blockRects.push({x0:-.5,x1:8.6,z0:-18.2,z1:-13.2}),pv(r,-5,.8,-13.5),r.circles.push({x:-5,z:-13.5,r:1.3,y:.8});let s=new Lt;s.position.set(-11.5,0,4);for(let[p,x]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])s.add(xr(new ot(Fe(.14,.16,3.2,8),t.wood),p,1.6,x));s.add(xr(new ot(dt(3,.2,3,2),t.dancheong),0,3.25,0));let o=new Lt;o.position.set(0,3.1,0);let a=ys([[.05,0],[.42,-.08],[.55,-.5],[.62,-1.3],[.7,-1.5],[0,-1.5]],14);o.add(new ot(a,t.bronze));let l=new ot(Fe(.6,.6,.06,14),t.gold);l.position.y=-.7,o.add(l),s.add(o);let c=new Lt;s.add(c),ip(r,s,o,-11.5,4,"\uBC94\uC885","bigbell",4.6,1.9),r.roof({cx:-11.5,cy:3.35,cz:4,w:3,d:3,h:1.1,overhang:.9,lift:.5,ridge:!0}).group.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),e.add(dt(2.4,.12,2.4,2),t.snow,rt(-11.5,4.5,4));for(let p of[-1,1]){for(let x=2.9;x<19.6;x+=2.2){let m=p*(x+1.1),g=1.25+i()*.45;e.add(dt(2.2,g,.7,2),t.blockDark,rt(m,g/2,20.5)),e.add(dt(2.3,.14,.85,2),t.stoneLight,rt(m,g+.05,20.5)),e.add(dt(2.2,.12,.8,2),t.snow,rt(m,g+.18,20.5))}r.blockRects.push({x0:p>0?2.75:-19.8,x1:p>0?19.8:-2.75,z0:20.1,z1:20.9}),e.add(Fe(.3,.32,3.6,10),t.wood,rt(p*2.4,1.8,20.5)),e.add(Fe(.5,.55,.3,10),t.stoneLight,rt(p*2.4,.15,20.5)),r.circles.push({x:p*2.4,z:20.5,r:.45,y:0})}e.add(dt(5.6,.45,.7,4),t.dancheong,rt(0,3.55,20.5)),e.add(dt(1.6,.7,.1,1),t.darkWood,rt(0,3.1,20.88)),r.roof({cx:0,cy:3.8,cz:20.5,w:6.2,d:1.6,h:1,overhang:.9,lift:.45,ridge:!0}).group.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),e.add(dt(5.4,.12,1.4,2),t.snow,rt(0,4.75,20.5));let f=new Lt,u=Pt({color:fn("#c8a868")});f.add(xr(new ot(dt(4.4,.07,.07,1),u),0,1.9,20.5));for(let p=0;p<9;p++){let x=new ot(new me(.14,.32),t.cloth[3]);x.position.set(-1.9+p*.48,1.7,20.55),x.rotation.z=p%2?.2:-.2,ln(x,cn.flag),f.add(x)}r.root.add(f),r.addGate("temple",{x0:-2.2,x1:2.2,z0:20.2,z1:20.8},p=>{f.visible=p<.99,f.position.y=-p*1.6,f.rotation.x=p*.6});for(let[p,x,m]of[[-19,-12,-24],[6,19,-24]])for(let g=p;g<x;g+=2.2){if(i()<.25)continue;let v=.6+i()*1.2;e.add(dt(2.1,v,.6,2),t.blockDark,rt(g+1.1,v/2,m)),e.add(dt(2.1,.1,.7,2),t.snow,rt(g+1.1,v+.04,m)),r.blockRects.push({x0:g,x1:g+2.2,z0:m-.35,z1:m+.35})}for(let[p,x,m,g]of[[-16,-6,1.2,1],[15.5,-9,1.3,2],[16,8,1.1,3],[-16,12,1,4],[13,-20,1,5],[-15,-20,1.2,6],[-22,2,1.3,7],[22,-2,1.2,8],[-8,22,1.1,9],[9,23,1.2,10]])r.pine(p,0,x,m,g,Math.abs(p)<19.5,!0);for(let p=0;p<14;p++){let x=i()*Math.PI*2,m=9.5+i()*6,g=Math.cos(x)*m,v=3+Math.sin(x)*m*.9;if(!(v<-6||Math.abs(g)>18)){for(let b=0;b<3;b++){let y=.6+i()*1.1;e.add(new ne(.16+i()*.1,y,5),t.ice,rt(g+(i()-.5)*.6,y/2,v+(i()-.5)*.6,i()*6,(i()-.5)*.4,(i()-.5)*.4))}r.circles.push({x:g,z:v,r:.5,y:0})}}for(let[p,x]of[[-6.5,9],[6.5,9],[6.5,-3],[-6,-3.5]])r.stoneLantern(p,0,x);r.stoneLantern(9.5,.8,-9),r.stoneLantern(-9.5,.8,-9),vs(r,12,6,1,11),vs(r,-14,-10,.9,12),e.build(r.root);for(let p of r.foliage.build(r.root))ln(p,cn.foliage)}function pv(r,t,e,i){let n=r.M,s=r.batch;s.add(dt(2.2,.5,2.2,2),n.stoneGrey,rt(t,e+.25,i));let o=e+.5;for(let a=0;a<5;a++){let l=1.3-a*.16;s.add(dt(l*.7,.55,l*.7,2),n.stoneLight,rt(t,o+.27,i)),o+=.55,s.add(dt(l+.3,.14,l+.3,2),n.stoneGrey,rt(t,o+.07,i)),s.add(dt(l+.2,.06,l+.2,2),n.snow,rt(t,o+.17,i)),o+=.2}s.add(Fe(.05,.08,.7,6),n.bronze,rt(t,o+.35,i))}var So=[{id:"palace",ox:0,oz:0,flip:!1,x0:-21.6,x1:21.6,z0:-33.3,z1:30,gate:{z:21.2,x0:-3.2,x1:3.2},from:-1e9,to:29.5,spawn:[0,.12,16]},{id:"bamboo",ox:0,oz:55.6,flip:!1,x0:-19.6,x1:19.6,z0:29,z1:78,from:29.5,to:77.2,spawn:[0,0,36]},{id:"temple",ox:0,oz:98.8,flip:!0,x0:-19.6,x1:19.6,z0:76.2,z1:124.4,from:77.2,to:1e9,spawn:[0,0,84]}],ql=class{constructor(t){this.scene=t,this.regions=So,this.bounds={x0:-21.6,x1:21.6,z0:-33.3,z1:124.4},this.spawn=new R(0,.12,16),this.top=new Lt,t.add(this.top),this.rects=[],this.ramps=[],this.blockRects=[],this.circles=[],this.lanterns=[],this.glowMats=[],this.drums=[],this.windows=[],this.spawnPoints=[],this.gates={},this.makeMaterials();for(let e of So)this.buildRegion(e);this.root=this.top}buildRegion(t){let e=new Lt;e.position.set(t.ox,0,t.oz),t.flip&&(e.rotation.y=Math.PI),this.top.add(e),this.root=e;let i={rects:this.rects.length,ramps:this.ramps.length,blockRects:this.blockRects.length,circles:this.circles.length,drums:this.drums.length,lanterns:this.lanterns.length,spawnPoints:this.spawnPoints.length};t.id==="palace"?this.build():t.id==="bamboo"?np(this):sp(this);let n=(a,l)=>t.flip?[t.ox-a,t.oz-l]:[t.ox+a,t.oz+l],s=a=>{let[l,c]=n(a.x0,a.z0),[h,d]=n(a.x1,a.z1);a.x0=Math.min(l,h),a.x1=Math.max(l,h),a.z0=Math.min(c,d),a.z1=Math.max(c,d)};for(let a of this.rects.slice(i.rects))s(a);for(let a of this.blockRects.slice(i.blockRects))s(a);for(let a of this.ramps.slice(i.ramps))s(a),t.flip&&([a.h0,a.h1]=[a.h1,a.h0]);for(let a of this.circles.slice(i.circles))[a.x,a.z]=n(a.x,a.z);let o=a=>{let[l,c]=n(a.x,a.z);a.x=l,a.z=c};for(let a of this.drums.slice(i.drums))o(a.pos),a.region=t.id;for(let a of this.lanterns.slice(i.lanterns))o(a),a.region=t.id;for(let a of this.spawnPoints.slice(i.spawnPoints))o(a)}addGate(t,e,i){this.blockRects.push(e),this.gates[t]={rect:e,anim:i,open:!1,k:0},i(0)}setGate(t,e,i=!1){let n=this.gates[t];return!n||n.open===e?!1:(n.open=e,n.rect.off=e,i&&(n.k=e?1:0,n.anim(n.k)),this.nav&&this.buildNav(),!0)}regionAt(t,e){for(let i of So)if(e>=i.from&&e<i.to)return i;return So[0]}inside(t,e,i=0){for(let n of So)if(!(t<n.x0+i||t>n.x1-i||e<n.z0+i||e>n.z1)&&!(n.gate&&e>n.gate.z-i&&(t<n.gate.x0+i||t>n.gate.x1-i)))return!0;return!1}dispose(){this.scene.remove(this.top),this.top.traverse(t=>{t.geometry&&t.geometry.dispose()})}makeMaterials(){let t=e=>new ct(e);this.M={floor:Pt({map:Jh()}),slab:Pt({map:Jh(9,[186,178,160],25)}),path:Pt({map:Cu()}),block:Pt({map:Kh()}),blockDark:Pt({map:Kh([140,134,120])}),grass:Pt({map:jh()}),dirt:Pt({map:Iu()}),wood:Pt({map:Qh()}),darkWood:Pt({map:Pu()}),roof:Pt({map:Lu()}),roofUnder:Pt({map:Vl()}),fascia:Pt({map:Vl(),side:fe}),ridge:Pt({color:t("#3b4048")}),mortar:Pt({color:t("#e2dccb")}),dancheong:Pt({map:Vl()}),plaster:Pt({map:Du()}),bark:Pt({map:Bu()}),leaf:Pt({color:t("#3f6e3e")}),leaf2:Pt({color:t("#5f924a")}),bronze:Pt({color:t("#6e5a3e")}),bronzeDark:Pt({color:t("#3c3226")}),gold:Pt({color:t("#d9a83a")}),black:Pt({color:t("#2a2624")}),stoneLight:Pt({color:t("#bdb5a2")}),stoneGrey:Pt({color:t("#a29c8e")}),pot:Pt({color:t("#c9b48e")}),lotus:Pt({color:t("#4e8a4a")}),pink:Pt({color:t("#e889a6")}),orange:Pt({color:t("#e88a3a")}),blue:Pt({color:t("#2f5aa8")}),red:Pt({color:t("#b23a2e")}),drumSide:Pt({map:Nu()}),drumFace:Pt({map:Uu()}),medallion:Pt({map:zu(),polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),carving:Pt({map:Fu()}),lattice:Pt({map:tf(),emissiveMap:tf(!0),emissive:t("#000000")}),lampGlow:Pt({color:t("#f3e2b8"),emissive:t("#000000")})},this.glowMats.push({mat:this.M.lattice,color:new ct("#ffb060"),k:1.1}),this.glowMats.push({mat:this.M.lampGlow,color:new ct("#ffc070"),k:1.6})}heightAt(t,e){let i=0;for(let n of this.rects)t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1&&n.h>i&&(i=n.h);for(let n of this.ramps)if(t>=n.x0&&t<=n.x1&&e>=n.z0&&e<=n.z1){let s=(e-n.z0)/(n.z1-n.z0),o=n.h0+(n.h1-n.h0)*s;o>i&&(i=o)}return i}isBlocked(t,e,i,n){if(!this.inside(t,e,i))return!0;for(let a of this.blockRects)if(!a.off&&t>a.x0-i&&t<a.x1+i&&e>a.z0-i&&e<a.z1+i)return!0;for(let a of this.circles){let l=t-a.x,c=e-a.z,h=a.r+i;if(l*l+c*c<h*h&&Math.abs((a.y||0)-n)<1.5)return!0}let s=this.heightAt(t,e);if(Math.abs(s-n)>.45)return!0;let o=i*.8;for(let[a,l]of mv)if(Math.abs(this.heightAt(t+a*o,e+l*o)-s)>.45)return!0;return!1}move(t,e,i,n){let s=Math.hypot(e,i),o=Math.max(1,Math.ceil(s/.15)),a=e/o,l=i/o,c=!1,h=this.heightAt(t.x,t.z);if(this.isBlocked(t.x,t.z,n,h)){let d=t.x+e,f=t.z+i;if(Math.abs(this.heightAt(d,f)-h)<=.45&&this.inside(d,f))return t.x=d,t.z=f,!0}for(let d=0;d<o;d++){let f=this.heightAt(t.x,t.z);if(!this.isBlocked(t.x+a,t.z+l,n,f))t.x+=a,t.z+=l,c=!0;else if(a&&!this.isBlocked(t.x+a,t.z,n,f))t.x+=a,c=!0;else if(l&&!this.isBlocked(t.x,t.z+l,n,f))t.z+=l,c=!0;else break}return c}randomWalkable(t,e,i,n,s=30){for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,l=i+Math.random()*(n-i),c=t+Math.cos(a)*l,h=e+Math.sin(a)*l,d=this.heightAt(c,h);if(!this.isBlocked(c,h,.5,d)&&this.inside(c,h,1.5)&&!(h>20&&h<30))return new R(c,d,h)}return null}build(){let t=this.M,e=this.batch=new hn,i=Me(77);this.foliage=new hn;let n=new ot(new me(160,110),t.dirt);n.geometry.attributes.uv.array.forEach((l,c,h)=>h[c]=l*(c%2===0?80:55)),n.rotation.x=-Math.PI/2,n.position.set(0,-.02,-25),n.receiveShadow=!0,this.root.add(n);let s=new me(48,58);s.attributes.uv.array.forEach((l,c,h)=>h[c]=l*(c%2===0?12:14.5));let o=new ot(s,t.floor);o.rotation.x=-Math.PI/2,o.position.set(0,0,-6),o.receiveShadow=!0,this.root.add(o),e.add(dt(5.2,.12,24.6,4),t.path,rt(0,.06,8.7)),this.rects.push({x0:-2.6,x1:2.6,z0:-3.6,z1:21,h:.12}),e.add(dt(5.2,.08,10,4),t.path,rt(0,.04,27)),this.rects.push({x0:-2.6,x1:2.6,z0:21,z1:32,h:.08}),this.terrace(-15,15,-14,-6,.9),this.terrace(-12,12,-22,-13,1.8),this.stairs(-6,-3.6,.9,0),this.stairs(-13,-10.6,1.8,.9),this.balustrade(-15,-6,-2.9,-6,.9),this.balustrade(2.9,-6,15,-6,.9),this.balustrade(-15,-14,-15,-6,.9),this.balustrade(15,-14,15,-6,.9),this.balustrade(-12,-13,-2.9,-13,1.8),this.balustrade(2.9,-13,12,-13,1.8),this.balustrade(-12,-22,-12,-13,1.8),this.balustrade(12,-22,12,-13,1.8);for(let l of[-1,1])this.haetae(l*3.3,.9,-6.5,l),this.haetae(l*3.3,1.8,-13.5,l);this.hall();for(let l of[-1,1])this.cauldron(l*6.2,.9,-8.2);for(let l of[-1,1])this.cauldron(l*10.5,1.8,-15.2);for(let l of[-1,1])this.flag(l*5.4,1.8,-13.45,"red",l),this.flag(l*4.6,.9,-8.6,"white",l),this.flag(l*4.8,0,1.2,"red",l),this.flag(l*4.8,0,9.5,"white",l),this.flag(l*19.5,0,-24,"navy",l),this.flag(l*20,0,-11,"navy",l),this.flag(l*20,0,18,"navy",l);for(let l of[-1,1])this.drum(l*10.5,4.2,l);for(let l of[-1,1]){let c=new ot(new me(6,6),t.medallion);c.rotation.x=-Math.PI/2,c.position.set(l*17,.012,4.2),c.receiveShadow=!0,this.root.add(c)}this.planter(-14.6,-6,-6,-1.4),this.planter(6,14.6,-6,-1.4),this.planter(-14,-7.4,9.2,14.2),this.planter(7.4,14,9.2,14.2),this.pine(-11.2,.3,-3.6,1.15,3),this.pine(11.4,.3,-3.4,1.1,4),this.pine(-10.6,.3,11.8,.85,5),this.pine(10.8,.3,11.6,.8,6),this.shrub(-7.4,.3,-2.6),this.shrub(7.6,.3,-2.4),this.shrub(-13.2,.3,-2.2),this.shrub(13,.3,-4.6),this.shrub(-8.4,.3,13.1),this.shrub(8.6,.3,10.2);for(let[l,c,h,d]of[[-16,-28,1.2,11],[15,-27,1.3,12],[-5,-30,1,13],[6,-31,.95,14],[17.5,-18.5,.9,15],[-17.5,-18,.95,16]])this.pine(l,0,c,h,d);for(let[l,c,h,d]of[[-12,27,1.2,21],[11,28,1.3,22],[-30,10,1.3,27],[31,-5,1.2,28],[-31,-20,1.2,29],[30,15,1.1,30]])this.pine(l,0,c,h,d,!1);for(let l of[-1,1])this.flowerPot(l*3.7,4.6),this.flowerPot(l*3.7,13.4),this.flowerPot(l*3.7,-1.6);for(let l of[-1,1])this.stoneLantern(l*7.6,0,17.2),this.stoneLantern(l*16.5,0,-2.2),this.stoneLantern(l*16.5,0,12),this.stoneLantern(l*10.9,1.8,-21),this.stoneLantern(l*13.6,.9,-7);this.stoneLantern(-11,0,-26),this.stoneLantern(11,0,-24),this.pond(-21,-15,-31.2,-24.6),this.corridor(-1),this.corridor(1),this.northWall(),this.southWall(),this.scatterGrass(),e.build(this.root);let a=this.foliage.build(this.root);for(let l of a)ln(l,cn.foliage);this.spawnPoints.push(new R(0,0,25),new R(-1.5,0,26),new R(1.5,0,26))}terrace(t,e,i,n,s){let o=this.M,a=this.batch,l=e-t,c=n-i,h=dt(l,s,c,2),d=dt(l,.001,c,4);a.add(h,o.block,rt((t+e)/2,s/2,(i+n)/2)),a.add(d,o.slab,rt((t+e)/2,s+.001,(i+n)/2)),a.add(dt(l+.3,.14,.4,2),o.stoneLight,rt((t+e)/2,s-.05,n+.05)),this.rects.push({x0:t,x1:e,z0:i,z1:n,h:s})}stairs(t,e,i,n){let s=this.M,o=this.batch,a=6,l=(e-t)/a,c=(i-n)/a;for(let m=0;m<a;m++){let g=i-c*(m+1)+c,v=t+l*(m+.5),b=n-.2,y=dt(5.2,g-b,l,2);o.add(y,m%2?s.stoneLight:s.stoneGrey,rt(0,(g+b)/2,v))}let h=Math.hypot(e-t,i-n),d=Math.atan2(i-n,e-t),f=(t+e)/2,u=(i+n)/2,p=dt(1.4,.12,h,2),x=p.attributes.uv;for(let m=8;m<12;m++)x.setXY(m,m%2,m<10?1:0);o.add(p,s.carving,rt(0,u+.06,f,0,d));for(let m of[-1,1])o.add(dt(.45,.4,h+.2,2),s.stoneLight,rt(m*2.82,u+.12,f,0,d));this.ramps.push({x0:-2.6,x1:2.6,z0:t,z1:e,h0:i,h1:n})}balustrade(t,e,i,n,s){let o=this.M,a=this.batch,l=Math.hypot(i-t,n-e),c=Math.atan2(-(n-e),i-t),h=Math.max(1,Math.round(l/1.6));for(let u=0;u<=h;u++){let p=u/h,x=t+(i-t)*p,m=e+(n-e)*p;a.add(dt(.24,.62,.24,2),o.stoneLight,rt(x,s+.31,m)),a.add(dt(.3,.1,.3,2),o.stoneGrey,rt(x,s+.65,m))}let d=(t+i)/2,f=(e+n)/2;a.add(dt(l,.08,.12,2),o.stoneLight,rt(d,s+.5,f,c)),a.add(dt(l,.18,.08,2),o.stoneGrey,rt(d,s+.14,f,c))}haetae(t,e,i,n){let s=this.M,o=this.batch;o.add(dt(.7,.3,.9,2),s.stoneGrey,rt(t,e+.15,i)),o.add(new Jt(.32,8,6),s.stoneLight,rt(t,e+.6,i,0,0,0,[1,.9,1.25])),o.add(new Jt(.27,8,6),s.stoneLight,rt(t,e+.95,i+.25)),o.add(new Jt(.12,6,4),s.stoneGrey,rt(t-.12,e+1.15,i+.2)),o.add(new Jt(.12,6,4),s.stoneGrey,rt(t+.12,e+1.15,i+.2)),o.add(dt(.12,.3,.12,2),s.stoneLight,rt(t-.15,e+.45,i+.3)),o.add(dt(.12,.3,.12,2),s.stoneLight,rt(t+.15,e+.45,i+.3)),this.circles.push({x:t,z:i,r:.45,y:e})}hall(){let t=this.M,e=this.batch,i=2.1,n=-18.5;e.add(dt(19.4,.3,6.2,2),t.block,rt(0,1.95,n)),e.add(dt(19.6,.06,6.4,2),t.stoneLight,rt(0,2.1,n)),this.blockRects.push({x0:-9.7,x1:9.7,z0:-21.6,z1:-15.4}),e.add(dt(17.6,3.5,4.6,2),t.darkWood,rt(0,i+1.75,n));let s=Fe(.24,.27,3.6,10,1,1);for(let o=0;o<=6;o++){let a=-9+o*3;e.add(s,t.wood,rt(a,i+1.8,-16)),e.add(s,t.wood,rt(a,i+1.8,-21)),e.add(Fe(.36,.38,.14,10),t.stoneLight,rt(a,i+.07,-16))}for(let o of[-1,1])e.add(s,t.wood,rt(o*9,i+1.8,-18.5));for(let o=0;o<6;o++){let a=-7.5+o*3;for(let l of[-.62,.62])e.add(new ut(1.22,3.3,.08),t.lattice,rt(a+l,i+1.68,-16.18));e.add(dt(2.76,.12,.14,2),t.wood,rt(a,i+3.38,-16.15)),e.add(dt(2.76,.1,.14,2),t.wood,rt(a,i+.05,-16.15))}for(let o of[-1,1])for(let a of[-17.25,-19.75])e.add(new ut(.08,3.3,2.3),t.lattice,rt(o*8.85,i+1.68,a));this.hallLightPos=[new R(-4.5,3.8,-15),new R(4.5,3.8,-15)],e.add(dt(18.8,.42,5.8,4),t.dancheong,rt(0,5.9,n)),e.add(dt(19.6,.4,6.6,4),t.dancheong,rt(0,6.3,n));for(let o=0;o<=24;o++){let a=-9.6+o*.8;for(let l of[-15.1,-21.9])e.add(dt(.3,.26,.6,1),o%2?t.dancheong:t.red,rt(a,6.58,l))}for(let o=0;o<=8;o++)for(let a of[-1,1])e.add(dt(.6,.26,.3,1),o%2?t.dancheong:t.red,rt(a*9.95,6.58,-21.7+o*.8));this.roof({cx:0,cy:6.72,cz:n,w:19.6,d:6.4,h:1.5,overhang:1.5,lift:.7,ridge:!1}),e.add(dt(13.2,2.1,2.9,2),t.darkWood,rt(0,8.35,n));for(let o=0;o<6;o++){let a=-5.5+o*2.2;e.add(new ut(1.7,1.25,.06),t.lattice,rt(a,8.55,n+1.48))}for(let o=0;o<=6;o++)e.add(Fe(.17,.17,2.1,8),t.wood,rt(-6.6+o*2.2,8.35,n+1.5));e.add(dt(14,.4,3.6,4),t.dancheong,rt(0,9.55,n)),this.roof({cx:0,cy:9.8,cz:n,w:14,d:3.6,h:2.4,overhang:1.9,lift:.85,ridge:!0})}roof({cx:t,cy:e,cz:i,w:n,d:s,h:o,overhang:a,lift:l,ridge:c,power:h=1.7,tile:d=2,rot:f=0}){let u=this.M,p=Ku({w:n,d:s,h:o,overhang:a,lift:l,power:h,tile:d}),x=new Lt;x.position.set(t,e,i),x.rotation.y=f;let m=new ot(p.top,u.roof),g=new ot(p.under,u.roofUnder),v=new ot(p.fascia,u.fascia);for(let E of[m,g,v])E.castShadow=!0,E.receiveShadow=!0,x.add(E);let b=p.W,y=p.D,w=Math.max(.5,b-y);if(c){let E=new ot(dt(w+.6,.5,.5,2),u.ridge);E.position.set(0,o+.2,0);let C=new ot(dt(w+.3,.2,.56,2),u.mortar);C.position.set(0,o+.05,0),x.add(E,C);for(let _ of[-1,1]){let A=new ot(dt(.5,.8,.6,1),u.ridge);A.position.set(_*(w/2+.3),o+.45,0),A.rotation.z=_*.15,x.add(A)}}for(let E of[-1,1])for(let C of[-1,1]){let _=new R(E*w/2,0,0),A=new R(E*b/2,0,C*y/2),P=7,k=null;for(let L=0;L<=P;L++){let z=.02+L/P*.96,D=_.x+(A.x-_.x)*z,N=_.z+(A.z-_.z)*z,H=new R(D,p.height(D,N)+.12,N);if(k){let X=k.clone().add(H).multiplyScalar(.5),Y=k.distanceTo(H),O=new ot(dt(.32,.26,Y+.08,1),u.ridge);O.position.copy(X),O.quaternion.setFromUnitVectors(new R(0,0,1),H.clone().sub(k).normalize()),O.castShadow=!0,x.add(O)}k=H}for(let L=0;L<3;L++){let z=.62+L*.1,D=_.x+(A.x-_.x)*z,N=_.z+(A.z-_.z)*z,H=new ot(new ut(.16,.24,.16),u.ridge);H.position.set(D,p.height(D,N)+.36,N),x.add(H)}}return this.root.add(x),{group:x,r:p}}cauldron(t,e,i){let n=this.M,s=this.batch;s.add(dt(1.2,.2,1.2,2),n.stoneGrey,rt(t,e+.1,i));let o=ys([[0,0],[.42,.02],[.58,.25],[.62,.55],[.56,.72],[.62,.78],[.5,.78]],12);s.add(o,n.bronze,rt(t,e+.2,i)),s.add(new Hi(.5,12),n.bronzeDark,rt(t,e+.9,i,0,-Math.PI/2));for(let a of[-1,1])s.add(new mi(.12,.035,4,8),n.bronzeDark,rt(t+a*.6,e+.6,i,Math.PI/2));this.circles.push({x:t,z:i,r:.7,y:e})}flag(t,e,i,n,s){let o=this.M,a=this.batch,l=4.4;a.add(dt(.7,.28,.7,1),o.black,rt(t,e+.14,i)),a.add(dt(.4,.4,.4,1),o.darkWood,rt(t,e+.48,i)),a.add(Fe(.055,.07,l,6),o.black,rt(t,e+l/2,i)),a.add(new ne(.1,.35,6),o.gold,rt(t,e+l+.15,i));let c=new me(1.1,1.4,8,4),h=Pt({map:ku(n),side:fe}),d=new ot(c,h);d.position.set(t+s*.6,e+l-.9,i),s<0&&(d.scale.x=-1),d.rotation.y=s<0?.25:-.25,d.castShadow=!0,d.receiveShadow=!0,ln(d,cn.flag),this.root.add(d),this.circles.push({x:t,z:i,r:.4,y:e})}drum(t,e,i){let n=this.M,s=this.batch,o=new Lt;o.position.set(t,0,e),o.rotation.y=i*.5;let a=dt(.18,2.2,.18,1);for(let d of[-1,1])for(let f of[-1,1]){let u=new ot(a,n.wood);u.position.set(d*.75,1,f*.75),u.rotation.set(f*.12,0,-d*.12),o.add(u)}for(let d of[-1,1]){let f=new ot(dt(1.7,.14,.14,1),n.wood);f.position.set(0,.35,d*.8),o.add(f)}let l=new Lt;l.position.y=2.15;let c=new ot(ys([[.95,-.75],[1.08,-.4],[1.12,0],[1.08,.4],[.95,.75]],18),n.drumSide);c.rotation.x=Math.PI/2,l.add(c);for(let d of[-1,1]){let f=new ot(new Hi(.95,18),n.drumFace);f.position.z=d*.76,f.rotation.y=d>0?0:Math.PI,l.add(f);for(let u=0;u<14;u++){let p=u/14*Math.PI*2,x=new ot(new Jt(.05,4,3),n.gold);x.position.set(Math.cos(p)*.97,Math.sin(p)*.97,d*.66),l.add(x)}}let h=new ot(new ne(.25,.6,6),n.gold);h.position.y=1.35,l.add(h),o.add(l),o.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0)}),this.root.add(o),this.circles.push({x:t,z:e,r:1.25,y:0}),this.drums.push({group:o,body:l,pos:new R(t,0,e),shake:0,label:"\uBD81",sound:"drum",reach:2.9,promptY:4})}planter(t,e,i,n){let s=this.M,o=this.batch,a=e-t,l=n-i,c=(t+e)/2,h=(i+n)/2,d=.32,f=.3;o.add(dt(a,d,f,2),s.stoneLight,rt(c,d/2,i+f/2)),o.add(dt(a,d,f,2),s.stoneLight,rt(c,d/2,n-f/2)),o.add(dt(f,d,l-f*2,2),s.stoneLight,rt(t+f/2,d/2,h)),o.add(dt(f,d,l-f*2,2),s.stoneLight,rt(e-f/2,d/2,h));for(let[u,p]of[[t,i],[e,i],[t,n],[e,n]])o.add(dt(.42,.46,.42,1),s.stoneGrey,rt(u+(u===t?.15:-.15),.23,p+(p===i?.15:-.15)));o.add(dt(a-f*2,.26,l-f*2,2),s.grass,rt(c,.13,h)),this.rects.push({x0:t,x1:e,z0:i,z1:n,h:.3}),this.grassAreas=this.grassAreas||[],this.grassAreas.push({x0:t+f,x1:e-f,z0:i+f,z1:n-f,y:.26})}pine(t,e,i,n,s,o=!0,a=!1){let l=this.batch,c=this.foliage,h=this.M,d=Me(s*97+3),f=new R(0,1,0),u=new R(t,e,i),p=new R((d()-.5)*.5,1,(d()-.5)*.5).normalize(),x=5,m=.9*n,g=.3*n,v=[];for(let w=0;w<x;w++){let E=g*.8,C=u.clone().addScaledVector(p,m),_=new Ht(E,g,m*1.05,7),A=new Ee().setFromUnitVectors(f,p);l.add(_,h.bark,new Zt().compose(u.clone().add(C).multiplyScalar(.5),A,new R(1,1,1))),v.push(C.clone()),u=C,g=E,p.x+=(d()-.5)*.7,p.z+=(d()-.5)*.5,p.y=1,p.normalize()}let b=(w,E,C,_,A)=>{let P=new Se(1,1);c.add(P,A,new Zt().compose(w,new Ee().setFromEuler(new si(0,d()*6,0)),new R(E,C,_)))};for(let w=2;w<x;w++){let E=v[w-1],C=2;for(let _=0;_<C;_++){let A=d()*Math.PI*2,P=(1.2+d()*1)*n*(1-(w-2)*.18),k=new R(Math.cos(A),.25+d()*.3,Math.sin(A)).normalize(),L=E.clone().addScaledVector(k,P),z=new Ht(.06*n,.11*n,P,5),D=new Ee().setFromUnitVectors(f,k);l.add(z,h.bark,new Zt().compose(E.clone().add(L).multiplyScalar(.5),D,new R(1,1,1)));let N=(.8+d()*.4)*n;b(L.clone().add(new R(0,.15*n,0)),1.25*N,.42*N,1.05*N,h.leaf),b(L.clone().add(new R(.1,.42*n,.05)),.85*N,.3*N,.75*N,a?h.snowLeaf:h.leaf2)}}let y=v[x-1];b(y.clone().add(new R(0,.2*n,0)),1.5*n,.5*n,1.3*n,h.leaf),b(y.clone().add(new R(.1,.55*n,0)),1*n,.35*n,.9*n,a?h.snowLeaf:h.leaf2),o&&this.circles.push({x:t,z:i,r:.45*n,y:e})}shrub(t,e,i){let n=this.foliage,s=this.M,o=Me(Math.floor(t*31+i*7));for(let a=0;a<3;a++)n.add(new Se(1,1),a?s.leaf2:s.leaf,new Zt().compose(new R(t+(o()-.5)*.6,e+.3+a*.12,i+(o()-.5)*.6),new Ee,new R(.55,.42,.5)))}flowerPot(t,e){let i=this.M,n=this.batch;n.add(dt(.7,.5,.7,2),i.stoneLight,rt(t,.25,e)),n.add(dt(.8,.08,.8,2),i.stoneGrey,rt(t,.52,e)),n.add(ys([[.18,0],[.3,.1],[.34,.3],[.3,.38]],10),i.pot,rt(t,.56,e));let s=Me(Math.floor(t*13+e*5+99));for(let o=0;o<6;o++){let a=s()*Math.PI*2,l=s()*.2;n.add(new Se(.09,0),o%3?i.pink:i.orange,rt(t+Math.cos(a)*l,.98+s()*.1,e+Math.sin(a)*l))}n.add(new Se(.22,0),i.leaf2,rt(t,.9,e)),this.circles.push({x:t,z:e,r:.45,y:0})}stoneLantern(t,e,i){let n=this.M,s=this.batch;s.add(Fe(.42,.46,.2,8),n.stoneGrey,rt(t,e+.1,i)),s.add(Fe(.3,.38,.16,8),n.stoneLight,rt(t,e+.28,i)),s.add(Fe(.13,.15,.9,8),n.stoneLight,rt(t,e+.8,i)),s.add(Fe(.36,.2,.2,8),n.stoneLight,rt(t,e+1.32,i)),s.add(Fe(.22,.22,.42,8),n.lampGlow,rt(t,e+1.63,i));for(let o=0;o<4;o++){let a=o/4*Math.PI*2+Math.PI/4;s.add(dt(.1,.44,.1,1),n.stoneLight,rt(t+Math.cos(a)*.24,e+1.63,i+Math.sin(a)*.24))}s.add(new ne(.52,.32,8),n.stoneGrey,rt(t,e+2,i)),s.add(new Jt(.1,6,4),n.stoneGrey,rt(t,e+2.22,i)),this.lanterns.push(new R(t,e+1.65,i)),this.circles.push({x:t,z:i,r:.45,y:e})}pond(t,e,i,n){let s=this.M,o=this.batch,a=e-t,l=n-i,c=(t+e)/2,h=(i+n)/2,d=.4,f=.35;o.add(dt(a,f,d,2),s.blockDark,rt(c,f/2,i+d/2)),o.add(dt(a,f,d,2),s.blockDark,rt(c,f/2,n-d/2)),o.add(dt(d,f,l-2*d,2),s.blockDark,rt(t+d/2,f/2,h)),o.add(dt(d,f,l-2*d,2),s.blockDark,rt(e-d/2,f/2,h));let u=new ot(new me(a-2*d,l-2*d),xv());u.rotation.x=-Math.PI/2,u.position.set(c,.2,h),this.root.add(u),this.water=u;let p=Me(5);for(let x=0;x<9;x++){let m=t+.9+p()*(a-1.8),g=i+.9+p()*(l-1.8),v=.3+p()*.25;o.add(Fe(v,v,.03,9),s.lotus,rt(m,.23,g)),p()<.45&&o.add(new ne(.12,.22,5),s.pink,rt(m+.1,.36,g))}this.blockRects.push({x0:t-.1,x1:e+.1,z0:i-.1,z1:n+.1})}corridor(t){let e=this.M,i=this.batch,n=t*22,s=t*26.2,o=(n+s)/2,a=-34,l=22,c=l-a,h=(a+l)/2;i.add(dt(4.4,.5,c,2),e.block,rt(o,.25,h)),i.add(dt(4.4,.02,c,4),e.slab,rt(o,.51,h)),i.add(dt(.4,3.6,c,2),e.plaster,rt(t*25.9,2.3,h));let d=Fe(.17,.19,3.3,8);for(let f=a+1;f<=l-1;f+=3)i.add(d,e.wood,rt(t*22.5,2.15,f)),i.add(dt(.4,.14,.4,1),e.stoneLight,rt(t*22.5,.56,f));i.add(dt(.3,.36,c,4),e.dancheong,rt(t*22.5,3.85,h)),this.roof({cx:t*24.2,cy:4.05,cz:h,w:3.8,d:c,h:1.25,overhang:1,lift:0,ridge:!0,power:1.5})}northWall(){let t=this.M;this.batch.add(dt(44,3.2,.6,2),t.plaster,rt(0,1.6,-33.9)),this.roof({cx:0,cy:3.2,cz:-33.9,w:44,d:.5,h:.5,overhang:.55,lift:0,ridge:!0,power:1.2})}southWall(){let t=this.M,e=this.batch;for(let n of[-1,1]){let s=n*3.9,o=n*22,a=(s+o)/2,l=Math.abs(o-s);e.add(dt(l,1.2,.7,2),t.block,rt(a,.6,21.9)),e.add(dt(l+.1,.12,.85,2),t.stoneLight,rt(a,1.26,21.9)),this.blockRects.push({x0:Math.min(s,o),x1:Math.max(s,o),z0:21.4,z1:22.4}),e.add(dt(.7,3.4,.7,1),t.wood,rt(n*3.6,1.7,21.9)),e.add(dt(1,.3,1,1),t.stoneLight,rt(n*3.6,.15,21.9)),this.circles.push({x:n*3.6,z:21.9,r:.5,y:0})}e.add(dt(7.9,.5,.8,4),t.dancheong,rt(0,3.5,21.9)),this.roof({cx:0,cy:3.75,cz:21.9,w:8,d:1.1,h:.9,overhang:.8,lift:.3,ridge:!0});let i=[];for(let n of[-1,1]){let s=new Lt;s.position.set(n*3.25,0,21.9);let o=new ot(dt(3.2,3.1,.14,2),t.darkWood);o.position.set(-n*1.6,1.6,0);let a=new ot(dt(3.2,.12,.17,1),t.bronzeDark);a.position.set(-n*1.6,2.3,0);let l=a.clone();l.position.y=.9;let c=new ot(new Jt(.1,6,4),t.gold);c.position.set(-n*3,1.6,.12),s.add(o,a,l,c),s.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),this.root.add(s),i.push([s,n])}this.addGate("south",{x0:-3.25,x1:3.25,z0:21.6,z1:22.2},n=>{for(let[s,o]of i)s.rotation.y=o*n*1.75})}scatterGrass(){let t=this.grassAreas,e=0;for(let u of t)e+=Math.floor((u.x1-u.x0)*(u.z1-u.z0)*26);let i=new ue;i.setAttribute("position",new zt([-.05,0,0,.05,0,0,0,.38,0],3)),i.setAttribute("normal",new zt([0,1,0,0,1,0,0,1,0],3)),i.setAttribute("color",new zt([.55,.62,.5,.55,.62,.5,1.15,1.12,.95],3));let n=Pt({color:16777215,vertexColors:!0,side:fe}),s=new as(i,n,e),o=new Zt,a=new Ee,l=new si,c=new ct,h=Me(99),d=["#6f9c48","#5d8c3e","#86ad52","#7aa04a"].map(u=>new ct(u)),f=0;for(let u of t){let p=Math.floor((u.x1-u.x0)*(u.z1-u.z0)*26);for(let x=0;x<p;x++){let m=u.x0+h()*(u.x1-u.x0),g=u.z0+h()*(u.z1-u.z0);l.set(0,h()*Math.PI,0);let v=.7+h()*.7;o.compose(new R(m,u.y,g),a.setFromEuler(l),new R(v,v*(.8+h()*.6),v)),s.setMatrixAt(f,o);let b=Math.sin(m*.7)*Math.cos(g*.9)*.5+.5;c.copy(d[Math.floor(h()*d.length)]).lerp(new ct("#a8b85a"),b*.35),h()<.015&&c.set(h()<.5?"#f2eee0":"#f0c850"),s.setColorAt(f,c),f++}}s.receiveShadow=!0,s.castShadow=!1,s.userData.noOutline=!0,ln(s,cn.grass,{shadow:!1}),this.root.add(s)}buildNav(){let t=this.bounds,e=.5,i=Math.floor(t.x0)-.5,n=Math.floor(t.z0)-.5,s=Math.ceil((t.x1-i+.5)/e),o=Math.ceil((t.z1-n+.5)/e),a=s*o,l=new Float32Array(a),c=[new Uint8Array(a),new Uint8Array(a)];for(let h=0;h<o;h++)for(let d=0;d<s;d++){let f=i+(d+.5)*e,u=n+(h+.5)*e,p=h*s+d,x=l[p]=this.heightAt(f,u);c[0][p]=this.isBlocked(f,u,yr[0],x)?0:1,c[1][p]=this.isBlocked(f,u,yr[1],x)?0:1}this.nav={cs:e,x0:i,z0:n,nx:s,nz:o,h:l,ok:c,dist:[new Float32Array(a),new Float32Array(a)],target:[-1,-1],heap:new Int32Array(a*8),hd:new Float32Array(a*8)}}navCell(t,e){let i=this.nav,n=Math.floor((t-i.x0)/i.cs),s=Math.floor((e-i.z0)/i.cs);return n<0||s<0||n>=i.nx||s>=i.nz?-1:s*i.nx+n}navLink(t,e,i){let n=this.nav;return n.ok[i][e]&&Math.abs(n.h[t]-n.h[e])<=.35}updateFlow(t,e,i){let n=this.nav;if(!n)return;let s=this.navCell(t,e);if(s<0)return;if(!n.ok[i][s]){let u=-1,p=1e9,x=s%n.nx,m=Math.floor(s/n.nx);for(let g=-4;g<=4;g++)for(let v=-4;v<=4;v++){let b=x+v,y=m+g;if(b<0||y<0||b>=n.nx||y>=n.nz)continue;let w=y*n.nx+b;n.ok[i][w]&&Math.abs(n.h[w]-n.h[s])<.5&&v*v+g*g<p&&(p=v*v+g*g,u=w)}if(u<0)return;s=u}if(n.target[i]===s)return;n.target[i]=s;let o=n.dist[i];o.fill(1/0),o[s]=0;let a=n.heap,l=n.hd,c=0,h=(u,p)=>{let x=c++;for(;x>0;){let m=x-1>>1;if(l[m]<=p)break;a[x]=a[m],l[x]=l[m],x=m}a[x]=u,l[x]=p},d=()=>{let u=a[0],p=a[--c],x=l[c],m=0;for(;;){let g=2*m+1;if(g>=c||(g+1<c&&l[g+1]<l[g]&&g++,l[g]>=x))break;a[m]=a[g],l[m]=l[g],m=g}return a[m]=p,l[m]=x,u};h(s,0);let f=n.nx;for(;c>0;){let u=l[0],p=d();if(u>o[p])continue;if(u>140)break;let x=p%f,m=(p-x)/f;for(let g=0;g<8;g++){let v=of[g],b=af[g],y=x+v,w=m+b;if(y<0||w<0||y>=f||w>=n.nz)continue;let E=w*f+y;if(!this.navLink(p,E,i)||v&&b&&(!this.navLink(p,m*f+y,i)||!this.navLink(p,w*f+x,i)))continue;let C=u+(v&&b?1.4142:1);C<o[E]&&(o[E]=C,h(E,C))}}}navDir(t,e){let i=this.nav;if(!i)return null;let n=this.navCell(t.x,t.z);if(n<0)return null;let s=i.dist[e];if(!isFinite(s[n])){let p=-1,x=1/0,m=n%i.nx,g=Math.floor(n/i.nx);for(let v=0;v<8;v++){let b=m+of[v],y=g+af[v];if(b<0||y<0||b>=i.nx||y>=i.nz)continue;let w=y*i.nx+b;s[w]<x&&Math.abs(i.h[w]-i.h[n])<=.5&&(x=s[w],p=w)}if(p<0)return null;n=p}let o=[],a=n;for(let p=0;p<6;p++){let x=a%i.nx,m=(a-x)/i.nx,g=a,v=s[a];for(let b=0;b<8;b++){let y=x+of[b],w=m+af[b];if(y<0||w<0||y>=i.nx||w>=i.nz)continue;let E=w*i.nx+y;s[E]<v&&this.navLink(a,E,e)&&(v=s[E],g=E)}if(g===a)break;a=g,o.push(a)}if(!o.length)return null;let l=p=>{let x=p%i.nx,m=(p-x)/i.nx;return[i.x0+(x+.5)*i.cs,i.z0+(m+.5)*i.cs]},c,h;for(let p=o.length-1;p>=0&&([c,h]=l(o[p]),!(p===0||this.clearLine(t.x,t.z,c,h,yr[e])));p--);let d=c-t.x,f=h-t.z,u=Math.hypot(d,f);return u<.05?null:{x:d/u,z:f/u,dist:s[n]*i.cs}}clearLine(t,e,i,n,s){let o=Math.hypot(i-t,n-e),a=Math.ceil(o/.35),l=this.heightAt(t,e);for(let c=1;c<=a;c++){let h=c/a,d=t+(i-t)*h,f=e+(n-e)*h;if(this.isBlocked(d,f,s,l))return!1;l=this.heightAt(d,f)}return!0}setNight(t){for(let e of this.glowMats)e.mat.emissive.copy(e.color).multiplyScalar(t*e.k)}update(t,e){for(let i of Object.values(this.gates)){let n=i.open?1:0;i.k!==n&&(i.k=n>i.k?Math.min(1,i.k+t*.8):Math.max(0,i.k-t*.8),i.anim(i.k))}for(let i of this.drums)if(i.shake>0){i.shake=Math.max(0,i.shake-t*2.5);let n=i.shake;i.body.scale.set(1+Math.sin(e*60)*.05*n,1+Math.sin(e*60+1)*.05*n,1),i.body.rotation.z=Math.sin(e*40)*.04*n}this.water&&(this.water.material.uniforms.uNight.value=Ai.night.value)}},mv=[[1,0],[-1,0],[0,1],[0,-1]],yr=[.36,.7],of=[1,-1,0,0,1,1,-1,-1],af=[0,0,1,-1,1,-1,1,-1],lf=null;function gv(){if(lf)return lf;let r=16,t=96,e=document.createElement("canvas");e.width=r,e.height=t;let i=e.getContext("2d"),n=i.createImageData(r,t),s=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(let a=0;a<t;a++)for(let l=0;l<r;l++){let c=a/(t-1),h=Math.sin(l*12.9+a*78.2)*43758.5%1,d=(s[a%4*4+l%4]+.5)/16*.7+Math.abs(h)*.3,f=c>d?255:0,u=(a*r+l)*4;n.data[u]=n.data[u+1]=n.data[u+2]=f,n.data[u+3]=255}i.putImageData(n,0,0);let o=new Oi(e);return o.magFilter=o.minFilter=ae,o.generateMipmaps=!1,o.wrapS=bn,lf=o,o}function rf(r,t,e,i,n,s,o=-.01){let a=i-e,l=Math.abs(n-s),c=t.map.clone();c.needsUpdate=!0,c.wrapS=c.wrapT=bn,c.repeat.set(a/2,l/2);let h=gv().clone();h.needsUpdate=!0,h.repeat.set(a,1);let d=new ot(new me(a,l),Pt({map:c,alphaMap:h,alphaTest:.5}));return d.rotation.x=-Math.PI/2,n<s&&(d.rotation.z=Math.PI),d.position.set((e+i)/2,o,(n+s)/2),d.receiveShadow=!0,r.root.add(d),d}function rt(r,t,e,i=0,n=0,s=0,o=null){let a=new Zt,l=Array.isArray(o)?new R(...o):new R(1,1,1);return a.compose(new R(r,t,e),new Ee().setFromEuler(new si(n,i,s,"YXZ")),l),a}function xv(){return new Ue({uniforms:{uTime:Ai.time,uNight:{value:0}},vertexShader:`
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
      }`})}var _s=null;function yv(){if(_s)return _s;let r=128,t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d");e.imageSmoothingEnabled=!1,e.strokeStyle=e.fillStyle="#fff";let i=r/2,n=(o,a)=>{e.lineWidth=a,e.beginPath(),e.arc(i,i,o,0,Math.PI*2),e.stroke()};n(61,2),n(56,1),n(40,2),n(18,1);for(let o=0;o<8;o++){let a=o/8*Math.PI*2;e.save(),e.translate(i,i),e.rotate(a);for(let l=0;l<3;l++){let c=-50+l*4;o>>l&1?(e.fillRect(-7,c,6,2),e.fillRect(1,c,6,2)):e.fillRect(-7,c,14,2)}e.restore()}e.lineWidth=1,e.beginPath();for(let o=0;o<=8;o++){let a=o*3/8*Math.PI*2,l=i+Math.cos(a)*40,c=i+Math.sin(a)*40;o?e.lineTo(l,c):e.moveTo(l,c)}e.stroke();for(let o=0;o<24;o++){let a=o/24*Math.PI*2;e.fillRect(i+Math.cos(a)*30-1,i+Math.sin(a)*30-1,2,2)}e.beginPath(),e.arc(i,i,12,0,Math.PI),e.fill(),e.globalCompositeOperation="destination-out",e.beginPath(),e.arc(i-6,i,6,0,Math.PI*2),e.fill(),e.globalCompositeOperation="source-over",e.beginPath(),e.arc(i+6,i,6,Math.PI,Math.PI*2),e.fill();let s=e.getImageData(0,0,r,r);for(let o=3;o<s.data.length;o+=4)s.data[o]=s.data[o]>90?255:0;return e.putImageData(s,0,0),_s=new Oi(t),_s.magFilter=_s.minFilter=ae,_s.generateMipmaps=!1,_s}var vv=`
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
}`,_v=`
varying vec3 vColor;
varying float vAlpha;
void main() {
  if (vAlpha <= 0.01) discard;
  gl_FragColor = vec4(vColor * vAlpha, vAlpha);
}`,$l=class{constructor(t,e,i){this.cap=e,this.list=[];let n=this.geo=new ue;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),n.setAttribute("position",new Oe(this.pos,3).setUsage(fr)),n.setAttribute("aColor",new Oe(this.col,3).setUsage(fr)),n.setAttribute("aSize",new Oe(this.size,1).setUsage(fr)),n.setAttribute("aAlpha",new Oe(this.alpha,1).setUsage(fr));let s=new Ue({vertexShader:vv,fragmentShader:_v,transparent:!0,depthWrite:!1,blending:i?He:Xa,blendSrc:qa,blendDst:ho});this.points=new qr(n,s),this.points.frustumCulled=!1,this.points.renderOrder=i?20:10,t.add(this.points)}emit(t){this.list.length>=this.cap&&this.list.shift();let e=t.color instanceof ct?t.color:new ct(t.color??16777215);this.list.push({x:t.x,y:t.y,z:t.z,vx:t.vx||0,vy:t.vy||0,vz:t.vz||0,g:t.g??0,drag:t.drag??0,life:t.life??1,max:t.life??1,size:t.size??2,endSize:t.endSize??t.size??2,r:e.r,gg:e.g,b:e.b,c2:t.color2?new ct(t.color2):null,alpha:t.alpha??1,flicker:t.flicker||0,floor:t.floor??-100,wob:t.wob||0,seed:Math.random()*100})}update(t,e){let i=this.list,n=0;for(let s=i.length-1;s>=0;s--){let o=i[s];if(o.life-=t,o.life<=0){i.splice(s,1);continue}o.vy-=o.g*t;let a=Math.exp(-o.drag*t);o.vx*=a,o.vy*=a,o.vz*=a,o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.wob&&(o.x+=Math.sin(e*2+o.seed)*o.wob*t,o.z+=Math.cos(e*1.7+o.seed)*o.wob*t),o.y<o.floor&&(o.y=o.floor,o.vy*=-.3,o.vx*=.6,o.vz*=.6)}for(let s of i){if(n>=this.cap)break;let o=s.life/s.max;this.pos[n*3]=s.x,this.pos[n*3+1]=s.y,this.pos[n*3+2]=s.z;let a=s.r,l=s.gg,c=s.b;s.c2&&(a=s.c2.r+(a-s.c2.r)*o,l=s.c2.g+(l-s.c2.g)*o,c=s.c2.b+(c-s.c2.b)*o),this.col[n*3]=a,this.col[n*3+1]=l,this.col[n*3+2]=c,this.size[n]=Math.max(1,Math.round(s.endSize+(s.size-s.endSize)*o));let h=s.alpha*Math.min(1,o*3);s.flicker&&(h*=1-s.flicker*(Math.sin(e*30+s.seed*10)*.5+.5)),this.alpha[n]=h,n++}this.geo.setDrawRange(0,n);for(let s of["position","aColor","aSize","aAlpha"])this.geo.attributes[s].needsUpdate=!0}},Yl=`
varying vec2 vL;
void main(){ vL = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,Mv=`
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
}`,bv=`
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
}`,rp=`
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
}`,Zl=class{constructor(t,e){this.scene=t,this.pixel=e,this.add=new $l(t,2500,!0),this.norm=new $l(t,1500,!1),this.arcs=[],this.rings=[],this.numbers=[],this.flashes=[],this.ghosts=[],this.bolts=[],this.circles=[],this.scorches=[],this.streaks=[],this.spikes=[],this.numLayer=document.getElementById("numbers"),this.time=0}spark(t,e,i,n=10,s="#fff6c8",o=6){for(let a=0;a<n;a++){let l=Math.random()*Math.PI*2,c=T(-.2,1),h=o*T(.4,1);this.add.emit({x:t,y:e,z:i,vx:Math.cos(l)*h,vy:c*h*.8,vz:Math.sin(l)*h,g:12,drag:4,life:T(.15,.35),size:3,endSize:1,color:s,color2:"#ff8a30"})}}dust(t,e,i,n=4,s="#c8bca0"){for(let o=0;o<n;o++){let a=Math.random()*Math.PI*2;this.norm.emit({x:t+T(-.15,.15),y:e+.05,z:i+T(-.15,.15),vx:Math.cos(a)*.8,vy:T(.3,.9),vz:Math.sin(a)*.8,drag:3,life:T(.3,.55),size:3,endSize:1,color:s,alpha:.75})}}colorFire(t,e,i,n=20,s=.5,o="#9ff0ff",a="#2050ff"){for(let l=0;l<n;l++)this.add.emit({x:t+T(-s,s),y:e+T(0,.4),z:i+T(-s,s),vx:T(-.4,.4),vy:T(1.2,3.2),vz:T(-.4,.4),drag:1.5,life:T(.35,.8),size:T(2,4),endSize:1,color:o,color2:a,flicker:.3})}blueFire(t,e,i,n=20,s=.5){for(let o=0;o<n;o++)this.add.emit({x:t+T(-s,s),y:e+T(0,.4),z:i+T(-s,s),vx:T(-.4,.4),vy:T(1.2,3.2),vz:T(-.4,.4),drag:1.5,life:T(.35,.8),size:T(2,4),endSize:1,color:"#9ff0ff",color2:"#2050ff",flicker:.3})}smoke(t,e,i,n=8){for(let s=0;s<n;s++)this.norm.emit({x:t+T(-.4,.4),y:e+T(0,.5),z:i+T(-.4,.4),vx:T(-.6,.6),vy:T(.5,1.4),vz:T(-.6,.6),drag:2,life:T(.5,.9),size:5,endSize:2,color:"#d8d4e8",alpha:.7})}coins(t,e,i,n=6){for(let s=0;s<n;s++){let o=Math.random()*Math.PI*2;this.add.emit({x:t,y:e+.4,z:i,vx:Math.cos(o)*T(1,2.5),vy:T(3,5),vz:Math.sin(o)*T(1,2.5),g:14,life:T(.7,1.1),size:2,color:"#ffe070",floor:e+.02,flicker:.5})}}slash(t,e,i=0,n={}){let s=n.inner??.45,o=n.outer??1.9,a=n.len??2.8,l=-Math.PI/2-a/2,c=new Fn(s,o,24,1,l,a),h=new Ue({vertexShader:Yl,fragmentShader:Mv,uniforms:{uProg:{value:0},uStart:{value:l},uLen:{value:a},uInner:{value:s},uOuter:{value:o},uColor:{value:new ct(n.color||"#e8fbff")},uFade:{value:1},uTail:{value:n.static?1.2:.55}},transparent:!0,depthWrite:!1,blending:He,side:fe}),d=new ot(c,h),f=new Lt;return f.add(d),f.position.copy(t),f.rotation.y=e,d.rotation.x=-Math.PI/2,i===1&&(d.scale.x=-1),i===2&&(d.rotation.set(0,0,0),d.rotation.y=Math.PI/2,d.rotation.z=-Math.PI/2+0,f.position.y+=.2),d.renderOrder=30,this.scene.add(f),n.scale&&f.scale.setScalar(n.scale),this.arcs.push({g:f,mat:h,t:0,dur:n.dur??.2,move:n.move||null,static:!!n.static,fadeAll:!!n.fadeAll,kill:!1}),f}cross(t,e="#bff4ff",i=2.2,n=.38){let s=new Lt;s.position.copy(t),s.rotation.x=-Math.PI/4;let o=[];for(let[a,l]of[[.75,1],[-.75,.8]]){let c=new Ue({vertexShader:Yl,fragmentShader:rp,uniforms:{uColor:{value:new ct(e)},uAlpha:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:He,side:fe}),h=new ot(new me(2,2),c);h.rotation.z=a,h.scale.set(i*.5*l,.14,1),h.renderOrder=40,s.add(h),o.push(c)}this.scene.add(s),this.flashes.push({g:s,mats:o,t:0,dur:n,size:i})}circle(t,e,i="#b89aff",n=1,s=1.2){let o=new $t({map:yv(),color:new ct(i),transparent:!0,blending:He,depthWrite:!1}),a=new ot(new me(2,2),o);a.rotation.x=-Math.PI/2,a.position.set(t.x,t.y+.05,t.z),a.renderOrder=22,this.scene.add(a);let l={m:a,mat:o,t:0,dur:n,radius:e,spin:s};return this.circles.push(l),l}scorch(t,e,i="#1a1220",n=2.5){let s=new $t({color:new ct(i),transparent:!0,opacity:.55,depthWrite:!1}),o=new ot(new Hi(e,12),s);o.rotation.x=-Math.PI/2,o.position.set(t.x,t.y+.03,t.z),o.renderOrder=5,this.scene.add(o),this.scorches.push({m:o,mat:s,t:0,dur:n})}arc(t,e,i="#d8c8ff",n=.6){let s=new Lt,o=new $t({color:"#ffffff",transparent:!0,blending:He,depthWrite:!1}),a=new $t({color:new ct(i),transparent:!0,opacity:.6,blending:He,depthWrite:!1}),l=6,c=t.clone();for(let h=1;h<=l;h++){let d=h/l,f=t.clone().lerp(e,d);h<l&&f.add(new R(T(-.35,.35),T(-.3,.3),T(-.35,.35)));let u=c.distanceTo(f),p=f.clone().sub(c).normalize(),x=new Ee().setFromUnitVectors(new R(0,1,0),p);for(let[m,g]of[[a,.3*n],[o,.1*n]]){let v=new ot(new ut(g,u+.04,g),m);v.position.copy(c).lerp(f,.5),v.quaternion.copy(x),v.renderOrder=45,s.add(v)}c=f}this.scene.add(s),this.bolts.push({g:s,mats:[o,a],t:0,dur:.25})}streak(t,e,i="#ffffff",n=.45,s=.35){let o=t.distanceTo(e),a=new Ue({vertexShader:Yl,fragmentShader:rp,uniforms:{uColor:{value:new ct(i)},uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:He,side:fe}),l=new ot(new me(2,2),a);l.position.copy(t).lerp(e,.5),l.rotation.order="YXZ",l.rotation.y=Math.atan2(e.x-t.x,e.z-t.z)+Math.PI/2,l.rotation.x=-Math.PI/2,l.scale.set(o/2,s/2,1),l.renderOrder=42,this.scene.add(l),this.streaks.push({m:l,mat:a,t:0,dur:n,w:s})}iceSpike(t,e=1.2,i=1.3){this.iceMat||(this.iceMat=new hs({color:new ct("#bfe8ff"),emissive:new ct("#2a5a8a")}));let n=new ot(new ne(.22+Math.random()*.1,e,5),this.iceMat);n.position.set(t.x,t.y-e/2,t.z),n.rotation.set(T(-.25,.25),T(0,6),T(-.25,.25)),n.castShadow=!0,this.scene.add(n),this.spikes.push({m:n,t:0,life:i,h:e,y0:t.y})}bolt(t,e=1){let i=new Lt,n=new $t({color:"#ffffff",transparent:!0,blending:He,depthWrite:!1}),s=new $t({color:"#8a6aff",transparent:!0,opacity:.55,blending:He,depthWrite:!1}),o=new R(t.x+T(-1.5,1.5),t.y+13,t.z+T(-1.5,1.5)),a=9;for(let l=1;l<=a;l++){let c=l/a,h=new R(t.x+(o.x-t.x)*0+(l<a?T(-.7,.7)*(1-c):0),t.y+13*(1-c),t.z+(l<a?T(-.7,.7)*(1-c):0)),d=o.clone().add(h).multiplyScalar(.5),f=o.distanceTo(h),u=h.clone().sub(o).normalize(),p=new Ee().setFromUnitVectors(new R(0,1,0),u);for(let[x,m]of[[s,.42*e],[n,.16*e]]){let g=new ot(new ut(m,f+.05,m),x);g.position.copy(d),g.quaternion.copy(p),g.renderOrder=45,i.add(g)}if(l>2&&l<a-1&&Math.random()<.45){let x=T(.6,1.4),m=new R(T(-1,1),-T(.3,1),T(-1,1)).normalize(),g=new ot(new ut(.1*e,x,.1*e),n);g.position.copy(h).addScaledVector(m,x/2),g.quaternion.setFromUnitVectors(new R(0,1,0),m),i.add(g)}o=h}this.scene.add(i),this.bolts.push({g:i,mats:[n,s],t:0,dur:.32}),this.ring(t,1.2*e,"#ffffff",.25)}ghost(t,e="#5ab8ff",i=.28){let n=new $t({color:new ct(e),transparent:!0,opacity:.55,blending:He,depthWrite:!1}),s=t.root.clone(!0);s.traverse(o=>{o.isMesh&&(o.material=n,o.castShadow=!1,o.receiveShadow=!1)}),this.scene.add(s),this.ghosts.push({c:s,mat:n,t:0,dur:i})}ring(t,e,i="#ffffff",n=.35,s=0){let o=new Hi(1,32),a=new Ue({vertexShader:Yl,fragmentShader:bv,uniforms:{uColor:{value:new ct(i)},uAlpha:{value:1},uProg:{value:0},uMode:{value:s}},transparent:!0,depthWrite:!1,blending:He}),l=new ot(o,a);l.rotation.x=-Math.PI/2,l.position.copy(t),l.position.y+=.04,l.renderOrder=25,this.scene.add(l);let c={m:l,mat:a,t:0,dur:n,radius:e,mode:s,manual:s===1};return l.scale.setScalar(s===1?e:.01),this.rings.push(c),c}removeRing(t){t.dead=!0}number(t,e,i="normal"){let n=document.createElement("div");n.className="dmg "+i,n.textContent=e,this.numLayer.appendChild(n),this.numbers.push({el:n,p:t.clone(),vy:2.6,vx:T(-.6,.6),t:0,life:i==="heal"?1:.85})}update(t){this.time+=t,this.add.update(t,this.time),this.norm.update(t,this.time);for(let e=this.arcs.length-1;e>=0;e--){let i=this.arcs[e];i.t+=t;let n=i.t/i.dur;i.mat.uniforms.uProg.value=i.static?1:Math.min(1.55,n*1.55),i.mat.uniforms.uFade.value=i.fadeAll?Math.max(0,1-n)*(i.alpha??1):n>.7?Math.max(0,1-(n-.7)/.3):1,i.move&&i.move(i,t),(n>=1||i.kill)&&(this.scene.remove(i.g),i.mat.dispose(),i.g.children[0].geometry.dispose(),this.arcs.splice(e,1))}for(let e=this.rings.length-1;e>=0;e--){let i=this.rings[e];if(i.t+=t,!i.manual){let n=i.t/i.dur;i.m.scale.setScalar(.2+i.radius*Math.sqrt(n)),i.mat.uniforms.uAlpha.value=1-n,n>=1&&(i.dead=!0)}i.dead&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.rings.splice(e,1))}for(let e=this.flashes.length-1;e>=0;e--){let i=this.flashes[e];i.t+=t;let n=i.t/i.dur,s=Math.min(1,i.t/.06);i.g.children.forEach((o,a)=>{o.scale.x=i.size*.5*(a?.8:1)*(.3+.7*s),o.scale.y=.14*(1-n*.7)});for(let o of i.mats)o.uniforms.uAlpha.value=Math.max(0,1-n*n);if(n>=1){this.scene.remove(i.g);for(let o of i.mats)o.dispose();i.g.children.forEach(o=>o.geometry.dispose()),this.flashes.splice(e,1)}}for(let e=this.circles.length-1;e>=0;e--){let i=this.circles[e];i.t+=t;let n=i.t/i.dur,s=Math.min(1,i.t/.18);i.m.scale.setScalar(i.radius*(.4+.6*(1-Math.pow(1-s,3)))),i.m.rotation.z+=t*i.spin,i.mat.opacity=n>.75?Math.max(0,1-(n-.75)/.25):1,(n>=1||i.dead)&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.circles.splice(e,1))}for(let e=this.scorches.length-1;e>=0;e--){let i=this.scorches[e];i.t+=t,i.mat.opacity=.55*Math.max(0,1-i.t/i.dur),i.t>=i.dur&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.scorches.splice(e,1))}for(let e=this.streaks.length-1;e>=0;e--){let i=this.streaks[e];i.t+=t;let n=i.t/i.dur;i.mat.uniforms.uAlpha.value=Math.max(0,1-n*n),i.m.scale.y=i.w/2*(1-n*.8),n>=1&&(this.scene.remove(i.m),i.mat.dispose(),i.m.geometry.dispose(),this.streaks.splice(e,1))}for(let e=this.spikes.length-1;e>=0;e--){let i=this.spikes[e];i.t+=t;let n=Math.min(1,i.t/.12);if(i.m.position.y=i.y0-i.h/2+i.h*(1-Math.pow(1-n,3))*.95,i.t>=i.life){for(let s=0;s<6;s++)this.add.emit({x:i.m.position.x,y:i.y0+T(.2,i.h),z:i.m.position.z,vx:T(-2,2),vy:T(1,4),vz:T(-2,2),g:12,life:T(.3,.6),size:3,endSize:1,color:"#e8f8ff",color2:"#5aa8ff"});this.scene.remove(i.m),i.m.geometry.dispose(),this.spikes.splice(e,1)}}for(let e=this.bolts.length-1;e>=0;e--){let i=this.bolts[e];i.t+=t;let n=i.t/i.dur;i.g.visible=n<.35||Math.floor(i.t*40)%2===0,i.mats[0].opacity=Math.max(0,1-n),i.mats[1].opacity=.55*Math.max(0,1-n),n>=1&&(this.scene.remove(i.g),i.g.traverse(s=>s.geometry&&s.geometry.dispose()),i.mats.forEach(s=>s.dispose()),this.bolts.splice(e,1))}for(let e=this.ghosts.length-1;e>=0;e--){let i=this.ghosts[e];i.t+=t;let n=i.t/i.dur;i.mat.opacity=.55*Math.max(0,1-n),n>=1&&(this.scene.remove(i.c),i.mat.dispose(),this.ghosts.splice(e,1))}for(let e=this.numbers.length-1;e>=0;e--){let i=this.numbers[e];i.t+=t,i.vy-=7*t,i.p.y+=i.vy*t,i.p.x+=i.vx*t;let n=this.pixel.project(i.p),s=this.pixel.pixelSize,o=Math.round(n.x/s)*s,a=Math.round(n.y/s)*s,l=i.t<.08?1.6-i.t*7:1;i.el.style.transform=`translate(${o}px, ${a}px) translate(-50%, -50%) scale(${l.toFixed(2)})`,i.el.style.opacity=i.t>i.life*.6?String(1-(i.t-i.life*.6)/(i.life*.4)):"1",i.t>=i.life&&(i.el.remove(),this.numbers.splice(e,1))}}};var Jl=class{constructor(){this.ctx=null,this.musicOn=!0,this.mood="day",this.nextNote=0,this.step=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=.55,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=.32;let i=e.createDelay();i.delayTime.value=.28;let n=e.createGain();n.gain.value=.3;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=2200,this.music.connect(this.master),this.music.connect(i),i.connect(s),s.connect(n),n.connect(i),s.connect(this.master);let o=e.sampleRate;this.noiseBuf=e.createBuffer(1,o,e.sampleRate);let a=this.noiseBuf.getChannelData(0);for(let l=0;l<o;l++)a[l]=Math.random()*2-1;this.nextNote=e.currentTime+.3}noise(t,{type:e="bandpass",f0:i=1e3,f1:n=1e3,q:s=1,gain:o=.3,attack:a=.005,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime,d=c.createBufferSource();d.buffer=this.noiseBuf,d.playbackRate.value=.7+Math.random()*.6;let f=c.createBiquadFilter();f.type=e,f.Q.value=s,f.frequency.setValueAtTime(i,h),f.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+t);let u=c.createGain();u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(o,h+a),u.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(f),f.connect(u),u.connect(l||this.sfx),d.start(h,Math.random()*.5),d.stop(h+t+.05)}tone(t,{type:e="sine",f0:i=440,f1:n=null,gain:s=.3,attack:o=.005,at:a=0,dest:l}={}){let c=this.ctx;if(!c)return;let h=c.currentTime+a,d=c.createOscillator();d.type=e,d.frequency.setValueAtTime(i,h),n&&d.frequency.exponentialRampToValueAtTime(n,h+t);let f=c.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(s,h+o),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(f),f.connect(l||this.sfx),d.start(h),d.stop(h+t+.05)}play(t){if(this.ctx)switch(t){case"swing":this.noise(.16,{f0:700,f1:3200,q:2.5,gain:.22});break;case"swing3":this.noise(.22,{f0:500,f1:3800,q:2.2,gain:.3}),this.tone(.2,{type:"triangle",f0:900,f1:1800,gain:.05});break;case"hit":this.tone(.14,{f0:160,f1:50,gain:.5}),this.noise(.08,{type:"highpass",f0:2500,f1:1500,gain:.25});break;case"crit":this.tone(.2,{f0:200,f1:45,gain:.6}),this.noise(.12,{type:"highpass",f0:3e3,f1:1200,gain:.3}),this.tone(.18,{type:"square",f0:1320,f1:1760,gain:.04,at:.02});break;case"drum":this.tone(1.1,{f0:95,f1:38,gain:.95,attack:.004}),this.tone(.6,{f0:180,f1:70,gain:.3}),this.noise(.35,{type:"lowpass",f0:900,f1:120,gain:.5});break;case"draw":this.noise(.22,{type:"highpass",f0:2500,f1:6e3,gain:.22,attack:.01}),this.tone(.25,{type:"triangle",f0:2600,f1:3400,gain:.05}),this.noise(.18,{f0:900,f1:3500,q:2.5,gain:.25,attack:.02});break;case"sheathe":this.tone(.05,{type:"square",f0:2200,f1:1400,gain:.06}),this.noise(.06,{type:"highpass",f0:3e3,f1:2e3,gain:.2}),this.tone(.08,{type:"square",f0:1300,f1:900,gain:.04,at:.04});break;case"bowdraw":this.noise(.22,{f0:300,f1:900,q:6,gain:.08,attack:.08});break;case"bow":this.tone(.18,{type:"triangle",f0:420,f1:180,gain:.18}),this.noise(.12,{f0:2500,f1:800,q:1.5,gain:.2});break;case"bowskill":for(let e=0;e<4;e++)this.tone(.16,{type:"triangle",f0:460-e*30,f1:200,gain:.12,at:e*.04});this.noise(.6,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.03});break;case"arrowhit":this.noise(.06,{type:"highpass",f0:3e3,f1:1500,gain:.18}),this.tone(.07,{f0:260,f1:120,gain:.25});break;case"cast":this.noise(.18,{f0:800,f1:2400,q:2,gain:.15}),this.tone(.25,{type:"sine",f0:880,f1:1320,gain:.06});break;case"fire":this.noise(.4,{type:"lowpass",f0:2400,f1:200,gain:.35,attack:.005}),this.tone(.2,{f0:140,f1:60,gain:.3});break;case"chant":[523,659,784].forEach((e,i)=>this.tone(.35,{type:"sine",f0:e,gain:.06,at:i*.08}));break;case"charge":this.noise(.4,{f0:200,f1:3e3,q:4,gain:.12,attack:.3});break;case"thunder":this.noise(.12,{type:"highpass",f0:5e3,f1:2e3,gain:.4,attack:.002}),this.noise(1.2,{type:"lowpass",f0:900,f1:60,gain:.6,attack:.01}),this.tone(.9,{f0:80,f1:30,gain:.5});break;case"blink":this.tone(.25,{type:"sine",f0:1600,f1:400,gain:.08}),this.noise(.25,{f0:3e3,f1:600,q:3,gain:.15});break;case"freeze":[1568,2093,2637,3136].forEach((e,i)=>this.tone(.4,{type:"triangle",f0:e,f1:e*.98,gain:.05,at:i*.05})),this.noise(.5,{type:"highpass",f0:4e3,f1:6e3,gain:.18,attack:.01}),this.tone(.4,{f0:160,f1:60,gain:.3});break;case"tornado":this.noise(1.6,{f0:300,f1:1600,q:2.5,gain:.3,attack:.2}),this.noise(1.4,{type:"lowpass",f0:600,f1:200,gain:.25,attack:.3});break;case"levelup":[523,659,784,1046,1318].forEach((e,i)=>this.tone(.45,{type:"triangle",f0:e,gain:.1,at:i*.07})),this.noise(.8,{f0:2e3,f1:6e3,q:1,gain:.12,attack:.1});break;case"howl":this.tone(.7,{type:"sawtooth",f0:500,f1:1100,gain:.04,attack:.15}),this.tone(.6,{type:"triangle",f0:900,f1:600,gain:.05,at:.3});break;case"wail":this.tone(1,{type:"sine",f0:620,f1:380,gain:.07,attack:.25}),this.tone(1,{type:"sine",f0:640,f1:395,gain:.05,attack:.3}),this.noise(.9,{f0:600,f1:300,q:6,gain:.08,attack:.3});break;case"bell":[1760,2217,2637].forEach((e,i)=>this.tone(.9,{type:"sine",f0:e,gain:.08,at:i*.05})),[1760,2217].forEach((e,i)=>this.tone(.6,{type:"sine",f0:e*1.01,gain:.05,at:.25+i*.05}));break;case"bigbell":this.tone(3.2,{type:"sine",f0:98,gain:.7,attack:.01}),this.tone(3,{type:"sine",f0:196.5,gain:.25,attack:.01}),this.tone(2.4,{type:"sine",f0:263,gain:.12,attack:.02}),this.noise(.25,{type:"lowpass",f0:800,f1:150,gain:.4});break;case"portal":this.tone(1,{type:"sine",f0:300,f1:1200,gain:.1,attack:.2}),this.noise(1,{f0:400,f1:3e3,q:2,gain:.15,attack:.3});break;case"denied":this.tone(.07,{type:"square",f0:180,gain:.05}),this.tone(.07,{type:"square",f0:140,gain:.05,at:.07});break;case"skill":this.noise(.5,{f0:300,f1:5e3,q:1.8,gain:.32,attack:.02}),this.tone(.45,{type:"sawtooth",f0:220,f1:1760,gain:.05,attack:.02}),this.tone(.6,{type:"triangle",f0:1320,f1:2640,gain:.07,at:.05}),this.tone(.3,{f0:120,f1:50,gain:.4});break;case"skillhit":this.tone(.25,{type:"square",f0:1800,f1:600,gain:.05}),this.noise(.18,{type:"highpass",f0:4e3,f1:1500,gain:.25});break;case"burst":this.noise(.5,{type:"lowpass",f0:3e3,f1:200,gain:.25}),this.tone(.4,{type:"triangle",f0:1760,f1:440,gain:.05});break;case"impact":this.tone(.3,{f0:110,f1:40,gain:.45}),this.noise(.2,{type:"lowpass",f0:1200,f1:150,gain:.3});break;case"dash":this.noise(.25,{type:"lowpass",f0:2400,f1:300,gain:.25,attack:.03});break;case"wave":this.noise(.45,{f0:400,f1:4e3,q:1.2,gain:.25,attack:.05}),this.tone(.4,{type:"triangle",f0:600,f1:1400,gain:.08});break;case"hurt":this.tone(.2,{type:"square",f0:260,f1:90,gain:.12}),this.noise(.12,{f0:1200,f1:400,gain:.25});break;case"poof":this.noise(.4,{type:"lowpass",f0:1800,f1:200,gain:.35,attack:.01}),this.tone(.25,{type:"triangle",f0:500,f1:1500,gain:.08});break;case"spawn":this.tone(.5,{type:"sine",f0:300,f1:900,gain:.08,attack:.1}),this.noise(.5,{f0:300,f1:1500,q:3,gain:.12,attack:.15});break;case"laugh":for(let e=0;e<3;e++)this.tone(.09,{type:"square",f0:760-e*40,f1:620-e*40,gain:.04,at:e*.11});break;case"slam":this.tone(.8,{f0:70,f1:28,gain:.9}),this.noise(.6,{type:"lowpass",f0:600,f1:80,gain:.6});break;case"orb":this.tone(.25,{type:"sine",f0:900,f1:400,gain:.08});break;case"talk":this.tone(.04,{type:"square",f0:520+Math.random()*80,gain:.025});break;case"coin":this.tone(.08,{type:"square",f0:1320,gain:.04}),this.tone(.15,{type:"square",f0:1760,gain:.04,at:.07});break;case"victory":[523,659,784,1046].forEach((e,i)=>this.tone(.5,{type:"triangle",f0:e,gain:.12,at:i*.12,dest:this.sfx}));break;case"block":this.tone(.06,{type:"square",f0:1800,f1:1200,gain:.05});break}}pluck(t,e,i=.18){let n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(t*1.01,e),s.frequency.exponentialRampToValueAtTime(t,e+.08),Math.random()<.3&&(s.frequency.setValueAtTime(t,e+.25),s.frequency.linearRampToValueAtTime(t*1.06,e+.4),s.frequency.linearRampToValueAtTime(t,e+.6));let o=n.createOscillator();o.type="sine",o.frequency.value=t*2;let a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(i,e+.004),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1);let l=n.createGain();l.gain.value=.25,s.connect(a),o.connect(l),l.connect(a),a.connect(this.music),s.start(e),o.start(e),s.stop(e+1.2),o.stop(e+1.2)}janggu(t,e){let i=this.ctx;if(e==="deong"){let a=i.createOscillator();a.frequency.setValueAtTime(110,t),a.frequency.exponentialRampToValueAtTime(55,t+.2);let l=i.createGain();l.gain.setValueAtTime(.35,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.3),a.connect(l),l.connect(this.music),a.start(t),a.stop(t+.35)}let n=i.createBufferSource();n.buffer=this.noiseBuf;let s=i.createBiquadFilter();s.type="bandpass",s.frequency.value=e==="kung"?400:2400,s.Q.value=1.5;let o=i.createGain();o.gain.setValueAtTime(e==="kung"?.3:.18,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.08),n.connect(s),s.connect(o),o.connect(this.music),n.start(t,Math.random()),n.stop(t+.1)}update(){let t=this.ctx;if(!t||!this.musicOn)return;let e=this.mood==="battle"?146.83:196,i=[0,2,5,7,9,12,14,17,19],n=this.mood==="battle"?.22:.42;for(;this.nextNote<t.currentTime+.25;){let s=this.nextNote,o=this.step,a=this.mood==="battle"?["deong",0,"tta","kung","deong",0,"tta","tta"]:["deong",0,0,"kung",0,"tta",0,0,"kung",0,"tta",0],l=a[o%a.length];l&&this.janggu(s,l);let c=this.mood==="battle"?1:2;if(o%c===0&&Math.random()<(this.mood==="battle"?.75:.6)){this.melIdx=Math.max(0,Math.min(i.length-1,(this.melIdx??4)+Math.floor(Math.random()*5)-2));let h=e*Math.pow(2,i[this.melIdx]/12);this.pluck(h,s,this.mood==="battle"?.13:.16),Math.random()<.25&&this.pluck(h/2,s,.1)}o%16===0&&this.pluck(e/2,s,.12),this.step++,this.nextNote+=n}}toggleMusic(){return this.musicOn=!this.musicOn,this.music&&(this.music.gain.value=this.musicOn?.32:0),this.musicOn}};var $e=[{name:"\uC77C\uBC18",color:"#d8d0c0"},{name:"\uACE0\uAE09",color:"#6ad06a"},{name:"\uD76C\uADC0",color:"#5ab0ff"},{name:"\uC601\uC6C5",color:"#c87aff"},{name:"\uC804\uC124",color:"#ffc040"},{name:"\uBCF4\uC2A4",color:"#ff5a4a"}],op={boss:{boss:"\uB450\uC5B5\uC2DC\uB2C8",set:"\uB450\uC5B5\uC2DC\uB2C8"},gumiho:{boss:"\uCC9C\uB144 \uAD6C\uBBF8\uD638",set:"\uAD6C\uBBF8\uD638"},reaper:{boss:"\uC800\uC2B9\uC0AC\uC790",set:"\uC800\uC2B9"}},cf={quake:"\uB3C4\uAE68\uBE44 \uBCBC\uB77D: \uB9DE\uD790 \uB54C 20% \uD655\uB960\uB85C \uC8FC\uBCC0\uC5D0 \uBCBC\uB77D \uCDA9\uACA9\uD30C",drain:"\uC5EC\uC6B0\uAD6C\uC2AC: \uC900 \uD53C\uD574\uC758 6%\uB9CC\uD07C \uCCB4\uB825 \uD68C\uBCF5",execute:"\uC800\uC2B9 \uC2EC\uD310: \uCCB4\uB825 35% \uC544\uB798\uC778 \uC801\uC5D0\uAC8C \uD53C\uD574 +60%",rage:"\uB3C4\uAE68\uBE44 \uB69D\uC2EC: \uCCB4\uB825\uC774 40% \uC544\uB798\uBA74 \uACF5\uACA9\uB825 +35%",swift:"\uC5EC\uC6B0 \uAC78\uC74C: \uC774\uB3D9 \uC18D\uB3C4 +15%, \uC774\uB3D9\uAE30 \uB300\uAE30\uC2DC\uAC04 -30%",soul:"\uD63C \uAC70\uB450\uAE30: \uC801\uC744 \uC4F0\uB7EC\uB728\uB9B4 \uB54C\uB9C8\uB2E4 \uCD5C\uB300 \uCCB4\uB825\uC758 4% \uD68C\uBCF5"},Tn={sword:[{id:"sw0",name:"\uC218\uB828\uC6A9 \uD658\uB3C4",tier:0,atk:0,style:{}},{id:"sw1",name:"\uAC15\uCCA0 \uD658\uB3C4",tier:1,atk:.15,style:{blade:"#aeb8c4",guard:"#2a2830",wrap:"#3a2a20"}},{id:"sw2",name:"\uCCAD\uAC15 \uC6D4\uAD11\uAC80",tier:2,atk:.32,style:{blade:"#bfe4ff",edge:"#ffffff",guard:"#c8d4e0",wrap:"#2a3a6a",glow:"#3a9aff"}},{id:"sw3",name:"\uC790\uC6B4 \uBE44\uB3C4",tier:3,atk:.5,style:{blade:"#d8c8ff",edge:"#ffffff",guard:"#8a5ad8",wrap:"#3a1a5a",glow:"#9a5aff",long:1.12}},{id:"sw4",name:"\uD751\uB8E1\uB3C4",tier:4,atk:.75,style:{blade:"#2a2830",edge:"#ff6a3a",guard:"#e0b040",wrap:"#8a1a1a",glow:"#ff3010",long:1.2}},{id:"swB1",name:"\uB450\uC5B5\uC2DC\uB2C8 \uCC38\uB9C8\uB3C4",tier:5,atk:.85,from:"boss",perk:"quake",style:{blade:"#3a4a8a",edge:"#9ad8ff",guard:"#ffd040",wrap:"#c8302c",glow:"#3ac8ff",long:1.28}},{id:"swB2",name:"\uAD6C\uBBF8\uD638 \uC5EC\uC6B0\uAC80",tier:5,atk:.9,from:"gumiho",perk:"drain",style:{blade:"#fff4ec",edge:"#ffb070",guard:"#ff6a2a",wrap:"#f0f0f0",glow:"#ff7a2a",long:1.22}},{id:"swB3",name:"\uC800\uC2B9 \uBA85\uBD80\uAC80",tier:5,atk:1,from:"reaper",perk:"execute",style:{blade:"#14101c",edge:"#c890ff",guard:"#5a3a8a",wrap:"#1a1420",glow:"#9a4aff",long:1.32}}],mage:[{id:"mg0",name:"\uBCF5\uC22D\uC544\uB098\uBB34 \uC9C0\uD321\uC774",tier:0,atk:0,style:{}},{id:"mg1",name:"\uCCAD\uB3D9 \uC9C0\uD321\uC774",tier:1,atk:.15,style:{wood:"#3a2a1a",moon:"#b07a3a",orb:"#8affc8",orbGlow:"#2aff9a"}},{id:"mg2",name:"\uC6D4\uC7A5\uC11D \uC9C0\uD321\uC774",tier:2,atk:.32,style:{wood:"#e0e0f0",moon:"#c8d4e0",orb:"#bfe8ff",orbGlow:"#4ab0ff"}},{id:"mg3",name:"\uB1CC\uC804 \uC9C0\uD321\uC774",tier:3,atk:.5,style:{wood:"#2a2a40",moon:"#ffe060",orb:"#fff6a0",orbGlow:"#ffd020",big:1.3}},{id:"mg4",name:"\uD654\uB8E1 \uC9C0\uD321\uC774",tier:4,atk:.75,style:{wood:"#2a1414",moon:"#e0b040",orb:"#ff8a4a",orbGlow:"#ff3a00",big:1.5}},{id:"mgB1",name:"\uB450\uC5B5\uC2DC\uB2C8 \uAE08\uBC29\uB9DD\uC774",tier:5,atk:.85,from:"boss",perk:"quake",style:{wood:"#c8302c",moon:"#ffd040",orb:"#9ad8ff",orbGlow:"#3ac8ff",big:1.6}},{id:"mgB2",name:"\uC5EC\uC6B0\uAD6C\uC2AC \uC9C0\uD321\uC774",tier:5,atk:.9,from:"gumiho",perk:"drain",style:{wood:"#f4ece4",moon:"#ff8a3a",orb:"#ffe6c8",orbGlow:"#ff7a2a",big:1.55}},{id:"mgB3",name:"\uBA85\uBD80 \uC9C0\uD321\uC774",tier:5,atk:1,from:"reaper",perk:"execute",style:{wood:"#14101c",moon:"#8a5ad8",orb:"#e0c8ff",orbGlow:"#9a4aff",big:1.7}}],elf:[{id:"bw0",name:"\uBC84\uB4E4 \uD65C",tier:0,atk:0,style:{}},{id:"bw1",name:"\uBB3C\uC18C\uBFD4 \uAC01\uAD81",tier:1,atk:.15,style:{wood:"#3a2a2a",grip:"#c8302c",tips:"#f0ead8"}},{id:"bw2",name:"\uBC14\uB78C\uACB0 \uD65C",tier:2,atk:.32,style:{wood:"#5ac85a",grip:"#e8f0a0",tips:"#ffffff",glow:"#3aff6a"}},{id:"bw3",name:"\uC11C\uB9AC \uD65C",tier:3,atk:.5,style:{wood:"#bfe8ff",grip:"#3a6aaa",tips:"#ffffff",glow:"#4ab0ff",big:1.15}},{id:"bw4",name:"\uC6D4\uAD81",tier:4,atk:.75,style:{wood:"#f0e8ff",grip:"#e0b040",tips:"#ffe080",glow:"#ffd040",big:1.25}},{id:"bwB1",name:"\uB450\uC5B5\uC2DC\uB2C8 \uBFD4\uD65C",tier:5,atk:.85,from:"boss",perk:"quake",style:{wood:"#c8302c",grip:"#ffd040",tips:"#f0ead8",glow:"#3ac8ff",big:1.3}},{id:"bwB2",name:"\uAD6C\uBBF8 \uAF2C\uB9AC\uD65C",tier:5,atk:.9,from:"gumiho",perk:"drain",style:{wood:"#fff4ec",grip:"#ff6a2a",tips:"#ffb070",glow:"#ff7a2a",big:1.3}},{id:"bwB3",name:"\uB9DD\uB839 \uD65C",tier:5,atk:1,from:"reaper",perk:"execute",style:{wood:"#1a1420",grip:"#8a5ad8",tips:"#e0c8ff",glow:"#9a4aff",big:1.38}}]},Kl=[{id:"ot0",name:"\uD3C9\uC0C1\uBCF5",tier:0,hp:0,def:0,pal:null},{id:"ot1",name:"\uCCAD\uB8E1 \uBB34\uAD00\uBCF5",tier:1,hp:20,def:.05,pal:{main:"#2b4374",accent:"#c8302c",trim:"#e0b040",dark:"#1f2438"}},{id:"ot2",name:"\uC790\uC6B4 \uBE44\uB2E8\uC637",tier:2,hp:35,def:.08,pal:{main:"#6a3a8a",accent:"#e0b040",trim:"#f0e0a0",dark:"#2a1a3a"}},{id:"ot3",name:"\uBC31\uD638 \uC804\uD3EC",tier:3,hp:55,def:.12,pal:{main:"#eeeae2",accent:"#e08a2a",trim:"#2a2a2a",dark:"#4a4a52"},armor:"light"},{id:"ot4",name:"\uD751\uC6D4 \uAC11\uC8FC",tier:4,hp:80,def:.18,pal:{main:"#2a2a34",accent:"#b02a2a",trim:"#d9a83a",dark:"#18181e"},armor:"heavy"},{id:"ot5",name:"\uC0C9\uB3D9 \uC800\uACE0\uB9AC",tier:1,hp:18,def:.04,sleevePat:"saekdong",deco:["sash"],pal:{main:"#f4f0e4",accent:"#c8302c",trim:"#3a6ad8",dark:"#3a2a4a",decoA:"#c8302c",decoB:"#f4c43a"}},{id:"ot6",name:"\uBC9A\uAF43 \uD55C\uBCF5",tier:2,hp:32,def:.07,pattern:"flower",deco:["flowerPin","sash"],pal:{main:"#f8c8d8",accent:"#e86aa8",trim:"#fff4f8",dark:"#8a3a5a",patA:"#ffffff",patB:"#e8427a",decoA:"#ff7aa8",decoB:"#ffffff"}},{id:"ot7",name:"\uAD6C\uB984\uD559 \uCC3D\uC758",tier:2,hp:34,def:.08,pattern:"cloud",deco:["cape"],pal:{main:"#f4f4ee",accent:"#1a1a24",trim:"#1a1a24",dark:"#2a2a34",patA:"#9aa8c8",patB:"#1a1a24",decoA:"#22222c",decoB:"#e8e8f0"}},{id:"ot8",name:"\uCABD\uBE5B \uBB3C\uACB0 \uBB34\uC0AC\uBCF5",tier:3,hp:50,def:.11,pattern:"wave",deco:["scarf","bracers"],pal:{main:"#2a3a7a",accent:"#e0b040",trim:"#e0b040",dark:"#1a2040",patA:"#6a8ae8",patB:"#e0b040",decoA:"#eee6d6",decoB:"#e0b040"}},{id:"ot9",name:"\uD64D\uB9E4 \uAD81\uC911\uC608\uBCF5",tier:3,hp:52,def:.1,pattern:"plum",deco:["badge","crown","sash"],pal:{main:"#b0283a",accent:"#2a6a4a",trim:"#ffd040",dark:"#3a1a2a",patA:"#ffb0c0",patB:"#ffe080",decoA:"#2a7a5a",decoB:"#ffd040"}},{id:"ot10",name:"\uD751\uB9E4 \uC790\uAC1D\uBCF5",tier:3,hp:45,def:.12,pattern:"plum",deco:["scarf","bracers"],pal:{main:"#221e28",accent:"#c8302c",trim:"#c8302c",dark:"#121016",patA:"#e8405a",patB:"#ffb0c0",decoA:"#c8302c",decoB:"#4a4450"}},{id:"ot11",name:"\uC6D4\uD558 \uC120\uB140\uC637",tier:4,hp:75,def:.16,pattern:"star",deco:["ribbon","crown","flowerPin"],pal:{main:"#e8e0ff",accent:"#9a7ad8",trim:"#fff6c0",dark:"#6a5aa8",patA:"#ffffff",patB:"#ffe080",decoA:"#f4e8ff",decoB:"#ffe080",decoGlow:"#5a4aa8"}},{id:"ot12",name:"\uCCAD\uB8E1 \uACE4\uB8E1\uD3EC",tier:4,hp:85,def:.17,pattern:"dragon",deco:["badge","cape","crown"],pal:{main:"#1e6a5a",accent:"#ffd040",trim:"#ffd040",dark:"#123a34",patA:"#ffd040",patB:"#ff6a3a",decoA:"#a82030",decoB:"#ffd040"}},{id:"otB1",name:"\uB450\uC5B5\uC2DC\uB2C8 \uBFD4\uAC11\uC8FC",tier:5,hp:110,def:.2,from:"boss",perk:"rage",acc:"horns",pal:{main:"#8a2a24",accent:"#2a3a7a",trim:"#ffd040",dark:"#2a1a18"},armor:"heavy"},{id:"otB2",name:"\uAD6C\uBBF8\uD638 \uD138\uC637",tier:5,hp:95,def:.16,from:"gumiho",perk:"swift",acc:"fox",pal:{main:"#f4ece4",accent:"#ff7a2a",trim:"#ffb070",dark:"#c8a890"},armor:"light"},{id:"otB3",name:"\uC800\uC2B9\uC0AC\uC790 \uB3C4\uD3EC",tier:5,hp:120,def:.22,from:"reaper",perk:"soul",acc:"gat",pal:{main:"#18141e",accent:"#5a3a8a",trim:"#c8b0ff",dark:"#0c0a10"}}],To=new Map;for(let r of Object.keys(Tn))for(let t of Tn[r])To.set(t.id,{...t,kind:"weapon",cls:r});for(let r of Kl)To.set(r.id,{...r,kind:"outfit"});function ii(r){return To.get(r)}function ap(r,t=!0){if(!r)return"";let e=r.kind==="weapon"?`\uACF5\uACA9\uB825 +${Math.round(r.atk*100)}%`:`\uCCB4\uB825 +${r.hp} \xB7 \uBC1B\uB294 \uD53C\uD574 -${Math.round(r.def*100)}%`;return r.perk?t?`${e}<br><em>${cf[r.perk]}</em>`:`${op[r.from].boss} \uCC98\uCE58 \uC2DC \uD68D\uB4DD`:e}function lp(...r){let t=new Set;for(let e of r){let i=To.get(e);i&&i.perk&&t.add(i.perk)}return t}function cp(r,t,e){if(!op[r])return null;let i=[...To.values()].filter(o=>o.from===r),n=[...i.filter(o=>o.kind==="weapon"&&o.cls===t),...i.filter(o=>o.kind==="outfit"),...i.filter(o=>o.kind==="weapon"&&o.cls!==t)];return(n.find(o=>!e.has(o.id))||n[Math.floor(Math.random()*2)]).id}function hf(r,t,e){let i={blue:.07,red:.12,wisp:.1,fox:.09,foxfire:.1,jiangshi:.11,ghost:.11,boss:1,gumiho:1,reaper:1}[r]??0;if(Math.random()>i)return null;let n=1,s={boss:.55,gumiho:.6,reaper:.7,red:.1,jiangshi:.15,ghost:.15,fox:.08,foxfire:.08}[r]||0,o=Math.random()+t*.12+s;if(o>1.35?n=4:o>1.05?n=3:o>.7&&(n=2),Math.random()<.55){let l=Math.random()<.8?e:["sword","mage","elf"][Math.floor(Math.random()*3)];return Tn[l][n].id}let a=Kl.filter(l=>l.tier===n&&!l.from);return a[Math.floor(Math.random()*a.length)].id}function ff(r,t){let e=ii(t),i=r.getContext("2d");if(i.clearRect(0,0,16,16),!e)return;let n=$e[e.tier].color;i.fillStyle="#14101c",i.fillRect(0,0,16,16),i.fillStyle=n,i.globalAlpha=.25,i.fillRect(0,0,16,16),i.globalAlpha=1;let s=(a,l,c)=>{i.fillStyle=c,i.fillRect(a,l,1,1)},o=e.style||{};if(e.kind==="weapon"&&e.cls==="sword"){let a=o.blade||"#c9d4e0";for(let l=0;l<9;l++)s(4+l,11-l,a),s(5+l,11-l,o.edge||"#ffffff");s(3,12,o.guard||"#d9a83a"),s(4,13,o.guard||"#d9a83a"),s(2,11,o.guard||"#d9a83a"),s(5,12,o.guard||"#d9a83a"),s(2,13,o.wrap||"#1c1824"),s(1,14,o.wrap||"#1c1824")}else if(e.kind==="weapon"&&e.cls==="mage"){for(let a=0;a<11;a++)s(3+a*.8,14-a,o.wood||"#5a3e2a");i.fillStyle=o.moon||"#e0b040",i.fillRect(10,2,4,1),i.fillRect(13,3,1,2),i.fillStyle=o.orb||"#b8a8ff",i.fillRect(11,3,2,2)}else if(e.kind==="weapon"){let a=o.wood||"#8a5a32";for(let l=0;l<12;l++){let c=9-Math.round(Math.sin(l/11*Math.PI)*5);s(c,2+l,a)}for(let l=0;l<12;l++)s(10,2+l,"#f0ece0");s(4,7,o.grip||"#3a7a3a"),s(4,8,o.grip||"#3a7a3a")}else{let a=e.pal||{main:"#eeeae0",accent:"#2e4f8f",trim:"#2e4f8f",dark:"#3a3f5a"};if(i.fillStyle=a.main,i.fillRect(4,3,8,10),i.fillRect(2,4,2,6),i.fillRect(12,4,2,6),i.fillStyle=a.accent,i.fillRect(4,8,8,1),i.fillRect(7,3,2,5),i.fillStyle=a.trim,i.fillRect(2,9,2,1),i.fillRect(12,9,2,1),e.armor&&(i.fillStyle=a.trim,i.fillRect(3,3,3,2),i.fillRect(10,3,3,2)),e.pattern){i.fillStyle=a.patA||a.trim;for(let[l,c]of[[5,5],[9,7],[6,10],[10,11]])i.fillRect(l,c,1,1)}if(e.sleevePat){let l=["#e8423a","#f4c43a","#4aa84e","#3a6ad8","#e86aa8","#f4f0e4"];for(let c=0;c<6;c++)i.fillStyle=l[c],i.fillRect(2,4+c,2,1),i.fillRect(12,4+c,2,1)}e.deco?.includes("cape")&&(i.fillStyle=a.decoA||a.accent,i.fillRect(1,3,1,11),i.fillRect(14,3,1,11)),(e.deco?.includes("crown")||e.deco?.includes("flowerPin"))&&(i.fillStyle=e.deco.includes("crown")?"#ffd040":a.decoA||"#ff9ac0",i.fillRect(6,0,1,2),i.fillRect(8,0,1,2),i.fillRect(10,0,1,2)),e.acc==="horns"&&(i.fillStyle="#ffd040",i.fillRect(5,0,1,3),i.fillRect(10,0,1,3)),e.acc==="fox"&&(i.fillStyle="#ff7a2a",i.fillRect(12,11,3,2),i.fillRect(14,9,1,2),i.fillStyle="#f4ece4",i.fillRect(5,1,2,2),i.fillRect(9,1,2,2)),e.acc==="gat"&&(i.fillStyle="#0c0a10",i.fillRect(3,2,10,1),i.fillRect(6,0,4,2),i.fillStyle="#c8b0ff",i.fillRect(4,3,1,3),i.fillRect(11,3,1,3))}e.perk&&(s(1,1,"#ffffff"),s(2,1,n),s(1,2,n),s(14,14,"#ffffff")),i.strokeStyle=n,i.strokeRect(.5,.5,15,15)}var An=["","\u2160","\u2161","\u2162","\u2163","\u2164"];var Jn={sword:{1:{base:"\uAC80\uAE30",lv:[4,7,10,13,16],a:{name:"\uC0BC\uC5F0 \uAC80\uAE30",short:"\uC0BC\uC5F0\uAC80",desc:"\uAC80\uAE30 \uC138 \uC904\uAE30\uB97C \uBD80\uCC44\uAF34\uB85C \uB0A0\uB9BC.",r3:"\uAC80\uAE30\uAC00 \uB2E4\uC12F \uC904\uAE30\uB85C",r5:"\uAC01\uC131: \uAE08\uBE5B \uAC80\uAE30 \uC77C\uACF1 \uC904\uAE30"},b:{name:"\uCC9C\uC5F4\uCC38",short:"\uCC9C\uC5F4\uCC38",desc:"\uAC70\uB300\uD55C \uAC80\uAE30 \uD558\uB098. \uB290\uB9AC\uC9C0\uB9CC \uB450 \uBC30 \uD53C\uD574\uB85C \uD06C\uAC8C \uBC00\uC5B4\uB0C4.",r3:"\uC9C0\uB098\uAC04 \uB545\uC774 \uAC08\uB77C\uC9C0\uBA70 \uBD88\uAE38\uC774 \uB0A8\uC74C",r5:"\uAC01\uC131: \uAC70\uB300\uD55C \uAC80\uAE30 \uC138 \uC904\uAE30"}},2:{base:"\uC77C\uC12C",lv:[6,9,12,15,18],a:{name:"\uC5F0\uC12C",short:"\uC5F0\uC12C",desc:"\uAFF0\uB6AB\uC740 \uB4A4 \uACE7\uBC14\uB85C \uB3CC\uC544\uC11C\uBA70 \uD55C \uBC88 \uB354 \uBCB0.",r3:"\uC138 \uBC88 \uC5F0\uB2EC\uC544 \uBCB0",r5:"\uAC01\uC131: \uB124 \uBC88 \uBCA4 \uB4A4 \uB9C8\uC9C0\uB9C9 \uC790\uB9AC\uC5D0\uC11C \uC2ED\uC790 \uC12C\uAD11\uC774 \uD130\uC9D0"},b:{name:"\uB099\uC778\uC12C",short:"\uB099\uC778\uC12C",desc:"\uBCA4 \uC801\uC5D0 \uBD89\uC740 \uB099\uC778. 1\uCD08 \uB4A4 \uD130\uC9C0\uBA70 \uC8FC\uBCC0\uAE4C\uC9C0 \uD729\uC500.",r3:"\uD3ED\uBC1C\uC774 \uB113\uC5B4\uC9C0\uACE0 \uC8FC\uBCC0 \uC801\uC5D0\uAC8C \uB099\uC778\uC774 \uC62E\uACA8 \uBD99\uC74C",r5:"\uAC01\uC131: \uB099\uC778\uC774 \uB450 \uBC88 \uD130\uC9D0"}},3:{base:"\uD68C\uC624\uB9AC\uBCA0\uAE30",lv:[8,11,14,17,20],a:{name:"\uD0DC\uD48D\uCC38",short:"\uD0DC\uD48D\uCC38",desc:"\uB2E4\uC12F \uBC14\uD034\uB97C \uB113\uAC8C \uB3CC\uBA70 \uC801\uC744 \uB04C\uC5B4\uB2F9\uAE40.",r3:"\uC77C\uACF1 \uBC14\uD034, \uB354 \uB113\uAC8C",r5:"\uAC01\uC131: \uB9C8\uC9C0\uB9C9\uC5D0 \uD070 \uCDA9\uACA9\uD30C"},b:{name:"\uAC80\uBB34 \uACB0\uACC4",short:"\uAC80\uBB34",desc:"\uBE5B\uB098\uB294 \uCE7C\uB0A0 \uC14B\uC774 5\uCD08 \uB3D9\uC548 \uBAB8 \uC8FC\uC704\uB97C \uB3CC\uBA70 \uBCB0.",r3:"\uCE7C\uB0A0 \uB2E4\uC12F, \uB354 \uB113\uAC8C",r5:"\uAC01\uC131: \uCE7C\uB0A0 \uC77C\uACF1\uC774 8\uCD08 \uB3D9\uC548, \uAC00\uB054 \uAC80\uAE30\uB97C \uC3E8"}}},mage:{1:{base:"\uB099\uB8B0",lv:[4,7,10,13,16],a:{name:"\uB1CC\uC6B4",short:"\uB1CC\uC6B4",desc:"\uBA39\uAD6C\uB984\uC774 \uB0A8\uC544 4\uCD08 \uB3D9\uC548 \uC8FC\uBCC0 \uC801\uC5D0\uAC8C \uBC88\uAC1C.",r3:"6\uCD08 \uB3D9\uC548, \uB354 \uC790\uC8FC",r5:"\uAC01\uC131: \uD55C \uBC88\uC5D0 \uB450 \uC801\uC744 \uCE58\uACE0 \uAD6C\uB984\uC774 \uB113\uC5B4\uC9D0"},b:{name:"\uCC9C\uB8B0",short:"\uCC9C\uB8B0",desc:"\uB113\uC740 \uB9C8\uBC95\uC9C4\uC5D0 \uD558\uB298\uC758 \uBCBC\uB77D. \uAC70\uC758 \uB450 \uBC30 \uD53C\uD574\uC640 \uAE34 \uAE30\uC808.",r3:"\uB4A4\uB530\uB974\uB294 \uBC88\uAC1C \uC138 \uC904\uAE30\uB3C4 \uD53C\uD574\uB97C \uC90C",r5:"\uAC01\uC131: \uC8FC\uBCC0 \uC801 \uB458\uC5D0\uAC8C\uB3C4 \uCC9C\uB8B0\uAC00 \uB5A8\uC5B4\uC9D0"}},2:{base:"\uD654\uB8E1\uBD80",lv:[6,9,12,15,18],a:{name:"\uC30D\uB8E1\uBD80",short:"\uC30D\uB8E1",desc:"\uBD88\uBC40 \uB450 \uB9C8\uB9AC\uAC00 \uC5BD\uD788\uBA70 \uB0A0\uC544\uAC10.",r3:"\uBD88\uBC40 \uC14B",r5:"\uAC01\uC131: \uAE08\uBE5B \uBD88\uBC40 \uB137"},b:{name:"\uD3ED\uC5FC\uB8E1",short:"\uD3ED\uC5FC\uB8E1",desc:"\uC9C0\uB098\uAC04 \uC790\uB9AC\uC5D0 \uBD88\uAE38, \uB05D\uC758 \uD3ED\uBC1C\uC774 \uD07C.",r3:"\uBD88\uAE38\uC774 \uB354 \uC624\uB798, \uB354 \uB728\uAC81\uAC8C",r5:"\uAC01\uC131: \uD3ED\uBC1C \uC790\uB9AC\uC5D0 \uBD88\uAE30\uB465 \uC5EC\uC12F\uC774 \uC19F\uC74C"}},3:{base:"\uBE59\uACB0\uC9C4",lv:[8,11,14,17,20],a:{name:"\uBE59\uD3ED\uC9C4",short:"\uBE59\uD3ED",desc:"\uC5BC\uC5B4\uBD99\uC740 \uC801\uC774 \uC7A0\uC2DC \uB4A4 \uC0B0\uC0B0\uC774 \uBD80\uC11C\uC9D0.",r3:"\uBD80\uC11C\uC9C8 \uB54C \uD30C\uD3B8\uC774 \uC8FC\uBCC0 \uC801\uAE4C\uC9C0 \uB2E4\uCE58\uAC8C \uD568",r5:"\uAC01\uC131: \uBD80\uC11C\uC9C4 \uB4A4 \uB2E4\uC2DC \uD55C \uBC88 \uBE59\uACB0\uC9C4"},b:{name:"\uC601\uAD6C\uB3D9\uD1A0",short:"\uB3D9\uD1A0",desc:"\uD6E8\uC52C \uB113\uAC8C, \uAC70\uC758 \uB450 \uBC30 \uC624\uB798 \uC5BC\uB9BC.",r3:"\uB354 \uB113\uAC8C, 4\uCD08 \uC5BC\uB9BC",r5:"\uAC01\uC131: \uC544\uC8FC \uB113\uAC8C, 5\uCD08 \uC5BC\uB9BC, \uD53C\uD574 1.5\uBC30"}}},elf:{1:{base:"\uBC14\uB78C\uD654\uC0B4",lv:[4,7,10,13,16],a:{name:"\uD3ED\uD48D \uC5F0\uC0AC",short:"\uC5F0\uC0AC",desc:"\uBC14\uB78C\uD654\uC0B4\uC744 \uC138 \uBC88 \uC5F0\uB2EC\uC544.",r3:"\uB124 \uBC88 \uC5F0\uB2EC\uC544",r5:"\uAC01\uC131: \uB2E4\uC12F \uBC88, \uD55C \uBC88\uC5D0 \uC544\uD649 \uBC1C"},b:{name:"\uAD00\uD1B5 \uADF9\uAD81",short:"\uADF9\uAD81",desc:"\uAC70\uB300\uD55C \uBE5B\uC758 \uD654\uC0B4\uC774 \uC77C\uC9C1\uC120\uC744 \uAFF0\uB6AB\uC74C.",r3:"\uC138 \uB300\uB97C \uBD80\uCC44\uAF34\uB85C",r5:"\uAC01\uC131: \uC138 \uB300\uAC00 \uB0A0\uC544\uAC04 \uB05D\uC5D0\uC11C \uD3ED\uBC1C"}},2:{base:"\uD654\uC0B4\uBE44",lv:[6,9,12,15,18],a:{name:"\uBD88\uD654\uC0B4\uBE44",short:"\uBD88\uD654\uC0B4",desc:"\uB5A8\uC5B4\uC9C0\uB294 \uACF3\uB9C8\uB2E4 \uC791\uAC8C \uD130\uC9C0\uB294 \uBD88\uD654\uC0B4.",r3:"\uB354 \uB113\uAC8C, \uB354 \uC624\uB798",r5:"\uAC01\uC131: \uB5A8\uC5B4\uC9C4 \uC790\uB9AC\uC5D0 \uBD88\uAE38\uC774 \uB0A8\uC74C"},b:{name:"\uC720\uC131\uC2DC",short:"\uC720\uC131\uC2DC",desc:"\uAC70\uB300\uD55C \uD654\uC0B4 \uB2E4\uC12F \uB300\uAC00 \uCC28\uB840\uB85C \uB0B4\uB9AC\uAF42\uD600 \uD3ED\uBC1C.",r3:"\uC77C\uACF1 \uB300",r5:"\uAC01\uC131: \uC544\uD649 \uB300, \uD3ED\uBC1C\uC774 \uCEE4\uC9D0"}},3:{base:"\uD68C\uC624\uB9AC \uC815\uB839",lv:[8,11,14,17,20],a:{name:"\uC30D\uB465\uC774 \uC815\uB839",short:"\uC30D\uC815\uB839",desc:"\uC815\uB839 \uB458\uC774 \uC591\uCABD\uC73C\uB85C \uAC08\uB77C\uC838 \uB098\uC544\uAC10.",r3:"\uC815\uB839 \uC14B",r5:"\uAC01\uC131: \uC815\uB839 \uB137\uC774 \uB354 \uC624\uB798"},b:{name:"\uD0DC\uD48D\uC758 \uB208",short:"\uD0DC\uD48D\uB208",desc:"\uC815\uB839\uC774 \uB0B4 \uC8FC\uC704\uB97C \uB9F4\uB3CC\uBA70 \uC801\uC744 \uB04C\uC5B4\uBAA8\uC74C.",r3:"\uC815\uB839 \uB458\uC774 \uB9F4\uB3CE",r5:"\uAC01\uC131: \uC815\uB839 \uC14B\uC774 6\uCD08 \uB3D9\uC548"}}}};function Ao(r,t,e,i){let n=Jn[t]?.[i],s=r?.rank?.[i]||(r?.evo?.[i]?1:0);if(!n||!s||!r.evo?.[i])return 0;let o=0;for(;o<s&&e>=n.lv[o];)o++;return o}function jl(r,t,e,i){return Ao(r,t,e,i)?r.evo[i]:null}function Ro(r,t){let e=Object.values(r?.rank||{}).reduce((i,n)=>i+n,0);return Math.max(0,t-1-e)}var Ql=r=>1+.12*Math.max(0,r-1),hp=r=>1-.06*Math.max(0,r-1);var tc=["gloves","legs","belt","ring1","ring2"],ec={weapon:"\uBB34\uAE30",outfit:"\uAC11\uC637",gloves:"\uC7A5\uAC11",legs:"\uAC01\uBC18",belt:"\uD5C8\uB9AC\uB760",ring1:"\uBC18\uC9C0",ring2:"\uBC18\uC9C0",ring:"\uBC18\uC9C0"},ic=40,pp={gloves:[["\uBB34\uBA85 \uC7A5\uAC11","#c8bca0"],["\uAC00\uC8FD \uD1A0\uC2DC","#8a5a32"],["\uC1E0\uBBF8\uB298 \uC7A5\uAC11","#8a96a4"],["\uBE44\uB2E8 \uC218\uAC11","#6a3a9a"],["\uC6A9\uB9B0 \uC7A5\uAC11","#c8302c"]],legs:[["\uBB34\uBA85 \uBC14\uC9C0","#b8ae98"],["\uAC00\uC8FD \uAC01\uBC18","#7a4e2e"],["\uC1E0\uBBF8\uB298 \uAC01\uBC18","#6a7684"],["\uBE44\uB2E8 \uBC14\uC9C0","#3a3a8a"],["\uC6A9\uB9B0 \uAC01\uBC18","#8a1a1a"]],belt:[["\uC0C8\uB07C \uB760","#c8a868"],["\uAC00\uC8FD \uB760","#6a4428"],["\uC740\uC7A5 \uB760","#c8d0d8"],["\uC625\uB300","#3aa87a"],["\uAE08\uAD00 \uC694\uB300","#ffc840"]],ring:[["\uAD6C\uB9AC \uAC00\uB77D\uC9C0","#c87a4a"],["\uC740 \uAC00\uB77D\uC9C0","#d8dde4"],["\uC625 \uAC00\uB77D\uC9C0","#5ac88a"],["\uBE44\uCDE8 \uAC00\uB77D\uC9C0","#3ab0a0"],["\uAE08\uAC15 \uAC00\uB77D\uC9C0","#ffe080"]]},Ms={atk:{name:"\uACF5\uACA9\uB825",pre:"\uB9F9\uB82C\uD55C",fmt:r=>`+${(r*100).toFixed(1)}%`,lo:.02,hi:.04},hp:{name:"\uCD5C\uB300 \uCCB4\uB825",pre:"\uD2BC\uD2BC\uD55C",fmt:r=>`+${Math.round(r)}`,lo:6,hi:12,lv:!0},def:{name:"\uBC1B\uB294 \uD53C\uD574",pre:"\uB2E8\uB2E8\uD55C",fmt:r=>`-${(r*100).toFixed(1)}%`,lo:.01,hi:.02},crit:{name:"\uCE58\uBA85\uD0C0 \uD655\uB960",pre:"\uB0A0\uCE74\uB85C\uC6B4",fmt:r=>`+${(r*100).toFixed(1)}%`,lo:.01,hi:.025},critDmg:{name:"\uCE58\uBA85\uD0C0 \uD53C\uD574",pre:"\uC794\uD639\uD55C",fmt:r=>`+${Math.round(r*100)}%`,lo:.05,hi:.1},spd:{name:"\uC774\uB3D9 \uC18D\uB3C4",pre:"\uB0A0\uB79C",fmt:r=>`+${(r*100).toFixed(1)}%`,lo:.012,hi:.025},cdr:{name:"\uC2A4\uD0AC \uC7AC\uC0AC\uC6A9",pre:"\uC9C0\uD61C\uB85C\uC6B4",fmt:r=>`-${(r*100).toFixed(1)}%`,lo:.01,hi:.022},ls:{name:"\uD761\uD608",pre:"\uD53C\uC5D0 \uAD76\uC8FC\uB9B0",fmt:r=>`${(r*100).toFixed(1)}%`,lo:.004,hi:.01},exp:{name:"\uACBD\uD5D8\uCE58",pre:"\uBC30\uC6C0\uC758",fmt:r=>`+${Math.round(r*100)}%`,lo:.03,hi:.06},regen:{name:"\uCD08\uB2F9 \uCCB4\uB825 \uD68C\uBCF5",pre:"\uD478\uB978",fmt:r=>`+${r.toFixed(1)}`,lo:.25,hi:.6,lv:!0}},wv={def:.6,crit:.6,cdr:.4,spd:.4,ls:.1},fp={gloves:["crit"],legs:["spd","hp"],belt:["hp"],ring:["atk","critDmg","cdr","ls"]},Ev={gloves:["atk","crit","critDmg","ls","hp"],legs:["hp","def","spd","regen","exp"],belt:["hp","def","regen","exp","atk"],ring:["atk","crit","critDmg","cdr","ls","exp","regen"]},Sv=[1,1.4,1.9,2.5,3.2],dp=["quake","drain","execute","rage","swift","soul"],Tv=Date.now()%1e5,Av=()=>"g"+(Tv++).toString(36)+Math.floor(Math.random()*1296).toString(36);function up(r,t,e){let i=Ms[r],n=(i.lo+Math.random()*(i.hi-i.lo))*Sv[t];return i.lv&&(n*=1+e*.05),r==="hp"?Math.round(n):+n.toFixed(4)}function df(r,t,e){e=e||["gloves","legs","belt","ring","ring"][Math.floor(Math.random()*5)];let i={},n=fp[e][Math.floor(Math.random()*fp[e].length)];i[n]=up(n,t,r);let s=Math.min(t,3),o=Ev[e].filter(c=>c!==n);for(let c=0;c<s&&o.length;c++){let h=o.splice(Math.floor(Math.random()*o.length),1)[0];i[h]=up(h,t,r)}let a={uid:Av(),kind:e,tier:t,lv:r,stats:i};t>=4&&(a.perk=dp[Math.floor(Math.random()*dp.length)]);let l=Object.keys(i).filter(c=>c!==n)[0]||n;return a.name=`${Ms[l].pre} ${pp[e][t][0]}`,a}function mp(r,t){let e=Math.random()+t*.1+r;return e>1.45?4:e>1.15?3:e>.82?2:e>.5?1:0}var Co=r=>pp[r.kind][r.tier][1];function gp(r){let t={};for(let e of r)if(e)for(let[i,n]of Object.entries(e.stats))t[i]=(t[i]||0)+n;for(let[e,i]of Object.entries(wv))t[e]>i&&(t[e]=i);return t}function dn(r){if(!r)return 0;let t={atk:260,hp:.8,def:300,crit:240,critDmg:70,spd:160,cdr:260,ls:900,exp:40,regen:12},e=0;for(let[i,n]of Object.entries(r.stats))e+=n*(t[i]||1);return e+(r.perk?20:0)}function xp(r){let t=Object.entries(r.stats).map(([e,i])=>`${Ms[e].name} ${Ms[e].fmt(i)}`);return r.perk&&t.push(`<em>${cf[r.perk]}</em>`),t}var Io=r=>8+r.tier*r.tier*10+r.lv*2;function nc(r,t){let e=r.getContext("2d");e.clearRect(0,0,16,16);let i=$e[t.tier].color,n=Co(t);e.fillStyle="#14101c",e.fillRect(0,0,16,16),e.globalAlpha=.25,e.fillStyle=i,e.fillRect(0,0,16,16),e.globalAlpha=1;let s=(o,a,l,c,h)=>{e.fillStyle=h,e.fillRect(o,a,l,c)};if(t.kind==="gloves")s(4,4,7,7,n),s(4,2,2,3,n),s(6,1,2,4,n),s(8,1,2,4,n),s(10,3,2,3,n),s(11,6,2,3,n),s(4,11,7,3,"#2a2028"),s(4,11,7,1,i);else if(t.kind==="legs")s(4,2,8,3,n),s(4,5,3,8,n),s(9,5,3,8,n),s(3,12,4,2,"#2a2028"),s(9,12,4,2,"#2a2028"),s(4,2,8,1,i);else if(t.kind==="belt")s(1,6,14,4,n),s(6,5,4,6,"#ffd040"),s(7,6,2,4,"#2a2028"),s(1,6,14,1,i);else{for(let o=0;o<16;o++){let a=o/16*Math.PI*2;s(Math.round(8+Math.cos(a)*4),Math.round(9+Math.sin(a)*4),1,1,"#ffd890")}s(6,2,4,4,n),s(7,3,1,1,"#ffffff")}t.perk&&(s(1,1,1,1,"#ffffff"),s(14,14,1,1,"#ffffff")),e.strokeStyle=i,e.strokeRect(.5,.5,15,15)}var nt=r=>new ct(r),uf=new R(0,.17,0),Rv=new R(0,.8,0),Cv=new R(0,0,0),Iv=new Ee,Po=r=>1-Math.pow(1-r,3),Kn=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function $(r,t,e=0,i=0,n=0){let s=new ot(r,t);return s.position.set(e,i,n),s.castShadow=!0,s.receiveShadow=!0,s}var qi=class{constructor(t){this.cfg=t,this.mats=[];let e=f=>{let u=Pt(f);return u.userData.baseEmissive=(f.emissive||nt("#000")).clone?.()||nt("#000"),this.mats.push(u),u};this.mat=e;let i=t.scale||1;this.root=new Lt,this.body=new Lt,this.body.scale.setScalar(i),this.root.add(this.body);let n=(f,u=.4,p=t.pattern)=>{if(!p)return e({color:nt(f)});let x=qu(p,f,t.patA||"#ffffff",t.patB||"#ffd040").clone();return x.needsUpdate=!0,x.repeat.set(1,p==="saekdong"?Math.max(.25,u*.7):Math.max(.2,u*.45)),e({map:x})};this.cloth=n;let s=e({color:nt(t.skin)}),o=t.legLen??.36;this.legLen=o;let a=e({color:nt(t.pants)}),l=e({color:nt(t.shoes||"#26211f")});this.legs=[];for(let f of t.noLegs?[]:[-1,1]){let u=new Lt;u.position.set(f*.1*(t.wide||1),o,0),u.add($(new Sn(.075*(t.limb||1),o-.15,3,6),a,0,-o/2+.02,0)),u.add($(new ut(.14,.08,.2),l,0,-o+.04,.03)),this.body.add(u),this.legs.push(u)}if(this.hips=new Lt,this.hips.position.y=o,this.body.add(this.hips),this.chest=new Lt,this.chest.position.y=t.torsoH??.4,this.hips.add(this.chest),t.type==="ghost"){let f=e({color:nt(t.robe),transparent:!0,opacity:.88});this.hips.add($(new Ht(.16,.24,.46,10),f,0,.2,0)),this.hips.add($(new Ht(.24,.42,.9,12),f,0,-.45,0))}else if(t.type==="mage"||t.type==="jiangshi"||t.type==="reaper"){let f=n(t.robe,.46),u=n(t.robe,.4),p=e({color:nt(t.belt)});this.hips.add($(new Ht(.17,.25,.46,10),f,0,.2,0)),this.hips.add($(new Ht(.25,.36,.4,12),u,0,-.14,0)),this.hips.add($(new Ht(.362,.37,.04,12),p,0,-.33,0)),this.hips.add($(new Ht(.228,.235,.06,10),p,0,.1,0));let x=e({color:nt("#f0ead8")});for(let m of[-1,1]){let g=$(new ut(.06,.3,.04),x,m*.05,.28,.19);g.rotation.z=m*.5,this.hips.add(g)}t.type==="mage"&&this.hips.add($(new ut(.1,.13,.06),e({color:nt("#c8302c")}),-.2,0,.12)),t.type==="jiangshi"&&this.hips.add($(new ut(.2,.18,.04),e({color:nt("#e0b040")}),0,.26,.2))}else if(t.type==="elf"){let f=n(t.robe,.42),u=n(t.skirt,.2),p=e({color:nt(t.belt)});this.hips.add($(new Ht(.15,.21,.42,10),f,0,.2,0)),this.hips.add($(new Ht(.21,.3,.2,10),u,0,-.04,0)),this.hips.add($(new Ht(.212,.215,.05,10),p,0,.08,0));let x=e({color:nt("#bfe07a")});for(let v of[-1,1]){let b=$(new ut(.12,.05,.08),x,v*.09,.4,.12);b.rotation.z=v*.4,this.hips.add(b)}let m=new Lt;m.position.set(-.1,.25,-.2),m.rotation.set(-.25,0,.45),m.add($(new Ht(.07,.06,.42,8),p,0,0,0));let g=e({color:nt("#f4f0e4")});for(let v=0;v<4;v++)m.add($(new ut(.03,.12,.05),g,(v-1.5)*.03,.27,v%2*.03));this.hips.add(m)}else if(t.type==="hero"||t.type==="guard"){let f=n(t.robe,.44),u=n(t.robe,.24),p=e({color:nt(t.belt)});this.hips.add($(new Ht(.17,.235,.44,10),f,0,.2,0)),this.hips.add($(new Ht(.24,.31,.24,10),u,0,-.04,0)),this.hips.add($(new Ht(.215,.225,.07,10),p,0,.1,0));let x=e({color:nt(t.collar||"#2a2a36")}),m=$(new ut(.05,.26,.04),x,.05,.3,.19);m.rotation.z=.5,this.hips.add(m);let g=$(new ut(.05,.26,.04),x,-.05,.3,.19);g.rotation.z=-.5,this.hips.add(g);let v=$(new ut(.04,.16,.02),p,.06,.04,.24);v.rotation.z=.2,this.hips.add(v),this.tie=v}else if(t.type==="lady"){let f=e({color:nt(t.robe)}),u=e({color:nt(t.skirt)});this.hips.add($(new Ht(.15,.2,.22,10),f,0,.3,0)),this.hips.add($(new Ht(.17,.42,.62,12),u,0,-.06,0));let p=e({color:nt("#c23a4a")});this.hips.add($(new ut(.06,.2,.03),p,.04,.18,.18))}else if(t.type==="dokkaebi"){this.hips.add($(new Jt(.27,10,8),s,0,.25,.02));let f=e({map:Ou()});this.hips.add($(new Ht(.25,.29,.2,10),f,0,0,0));let u=e({color:nt("#2b2220")});this.hips.add($(new Ht(.262,.262,.05,10),u,0,.1,0))}this.head=new Lt,this.head.position.y=t.neck??.27,this.chest.add(this.head);let c=t.headR??.27,h=$(new Jt(c,14,10),s);h.scale.set(1,.93,.95),this.head.add(h),this.buildFace(c,t),this.buildHair(c,t),this.arms=[];let d=t.sleevePat?n(t.sleeve||t.robe,.5,t.sleevePat):t.pattern&&t.sleeve===t.robe?n(t.robe,.3):e({color:nt(t.sleeve||t.robe||t.skin)});for(let f of[-1,1]){let u=new Lt;u.position.set(f*(t.shoulder??.21),-.03,0);let p=$(new Sn(.068*(t.limb||1),.2,3,6),d,0,-.14,0);u.add(p),t.cuff&&u.add($(new Ht(.08,.085,.05,8),e({color:nt(t.cuff)}),0,-.26,0));let x=new Lt;x.position.y=-.31,x.add($(new Jt(.065*(t.limb||1)*(t.gloves?1.12:1),6,5),t.gloves?this.gloveMat||(this.gloveMat=e({color:nt(t.gloves)})):s)),t.gloves&&u.add($(new Ht(.078,.082,.08,8),this.gloveMat,0,-.25,0)),u.add(x),u.userData.hand=x,this.chest.add(u),this.arms.push(u)}if(this.armR=this.arms[0],this.armL=this.arms[1],this.handR=this.armR.userData.hand,this.handL=this.armL.userData.hand,t.armor&&this.buildArmor(t),t.acc&&this.buildAccessory(t.acc,c,t),this.flutter=[],t.deco)for(let f of t.deco)this.buildDeco(f,c,t);t.weapon&&this.buildWeapon(t.weapon),this.root.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),this.phase=0,this.idleT=Math.random()*10,this.flash=0,this.lean=0,this.deadT=0}buildFace(t,e){let i=this.mat({color:nt(e.eye||"#1b1416")}),n=t*.93;if(e.type==="dokkaebi"){let s=Pt({color:nt("#f4e86a"),emissive:nt("#7a6410")});for(let h of[-1,1]){let d=$(new Jt(.075,6,5),s,h*.11,.03,n-.04);d.scale.z=.5,this.head.add(d),this.head.add($(new ut(.045,.06,.02),i,h*.11,.03,n+0));let f=$(new ut(.12,.035,.03),this.mat({color:nt(e.hair)}),h*.11,.13,n-.02);f.rotation.z=h*.35,this.head.add(f)}let o=$(new ut(.26,.07,.04),this.mat({color:nt("#5a1820")}),0,-.11,n-.05);this.head.add(o);let a=this.mat({color:nt("#fbf6e8")});for(let h of[-1,1])this.head.add($(new ne(.025,.07,4),a,h*.08,-.06,n-.03));let l=this.mat({color:nt(e.horn||"#efe2b0")}),c=e.horns??1;for(let h=0;h<c;h++){let d=c===1?0:h?.13:-.13,f=$(new ne(.06,.24,6),l,d,t+.06,.02);f.rotation.z=-d*1.5,this.head.add(f)}this.head.add($(new Jt(.05,5,4),this.mat({color:new ct(e.skin).multiplyScalar(.8)}),0,-.02,n))}else{for(let o of[-1,1])this.head.add($(new ut(.05,.085,.03),i,o*.095,-.02,n-.01)),this.head.add($(new ut(.02,.025,.01),this.mat({color:nt("#ffffff")}),o*.095+.01,.005,n+.008));let s=this.mat({color:nt("#f0a0a0")});for(let o of[-1,1])this.head.add($(new ut(.06,.025,.02),s,o*.16,-.085,n-.06))}}buildHair(t,e){let i=this.mat({color:nt(e.hair||"#231c1e")});if(e.type==="dokkaebi"){for(let s=0;s<9;s++){let o=s/9*Math.PI*2,a=$(new ne(.07,.22,4),i),l=new R(Math.cos(o)*.8,.55,Math.sin(o)*.8-.25).normalize();a.position.copy(l).multiplyScalar(t*.95),a.quaternion.setFromUnitVectors(new R(0,1,0),l),this.head.add(a)}return}let n=$(new Jt(t*1.06,14,8,0,Math.PI*2,0,Math.PI*.5),i);n.rotation.x=-.35,n.position.set(0,.02,-.02),this.head.add(n);for(let s=-2;s<=2;s++){let o=$(new ut(.09,.12,.06),i,s*.07,t*.62,t*.68);o.rotation.x=.5,o.rotation.z=s*.15,this.head.add(o)}if(e.type==="hero"){this.head.add($(new Jt(.09,8,6),i,0,t+.04,-.06));let s=$(new mi(t*.98,.025,4,16),this.mat({color:nt("#c8302c")}),0,.09,0);s.rotation.x=Math.PI/2-.3,this.head.add(s);let o=new Lt;o.position.set(0,.06,-t*.95);let a=$(new ut(.07,.36,.02),this.mat({color:nt("#c8302c")}),0,-.18,0);o.add(a),this.head.add(o),this.tail=o}else if(e.type==="mage"){let s=this.mat({color:nt("#16141c")}),o=t*.66;this.head.add($(new Ht(.4,.4,.022,18),s,0,o,0)),this.head.add($(new Ht(.13,.15,.26,12),s,0,o+.13,0)),this.head.add($(new Ht(.152,.152,.03,12),this.mat({color:nt("#6a5ad8")}),0,o+.03,0));let a=this.mat({color:nt("#e0a84a")});for(let l of[-1,1])for(let c=0;c<4;c++)this.head.add($(new Jt(.022,4,3),a,l*(.22-c*.015),o-.06-c*.07,.06))}else if(e.type==="elf"){this.head.add($(new ut(.46,.55,.14),i,0,-.2,-.2));for(let a of[-1,1]){this.head.add($(new ut(.08,.38,.1),i,a*.25,-.12,.06));let l=$(new ne(.045,.2,4),this.mat({color:nt(e.skin)}),a*.3,.04,-.02);l.rotation.z=-a*1.15,this.head.add(l)}let s=this.mat({color:nt("#ff9ac0")});this.head.add($(new Se(.06,0),s,.2,.18,.1)),this.head.add($(new Se(.035,0),this.mat({color:nt("#fff0a0")}),.22,.2,.14));let o=new Lt;o.position.set(0,-.3,-.24),o.add($(new ut(.3,.32,.06),i,0,-.16,0)),this.head.add(o),this.tail=o}else if(e.type==="jiangshi"){let s=this.mat({color:nt("#1a1a20")});this.head.add($(new Ht(.3,.32,.16,12),s,0,t*.7,0)),this.head.add($(new Ht(.34,.34,.03,12),this.mat({color:nt("#6a1a1a")}),0,t*.62,0)),this.head.add($(new Jt(.06,6,4),this.mat({color:nt("#c8302c")}),0,t*.7+.12,0));let o=new ot(new me(.14,.34),new $t({color:"#f2d36b",side:fe}));o.position.set(0,0,t*.98),o.rotation.x=-.15;let a=new ot(new me(.04,.26),new $t({color:"#c8302c",side:fe}));a.position.z=.003,o.add(a),this.head.add(o),this.talisman=o}else if(e.type==="ghost"){let s=this.mat({color:nt(e.hair),transparent:!0,opacity:.92});this.head.add($(new ut(.5,.95,.16),s,0,-.32,-.18));for(let o of[-1,1])this.head.add($(new ut(.15,.85,.08),s,o*.15,-.25,t*.92));this.head.add($(new ut(.5,.1,.5),s,0,t*.85,0))}else if(e.type==="reaper"){let s=this.mat({color:nt("#0e0c12")}),o=t*.66;this.head.add($(new Ht(.55,.55,.025,18),s,0,o,0)),this.head.add($(new Ht(.15,.17,.32,12),s,0,o+.16,0)),this.head.add($(new ut(.1,.035,.03),this.mat({color:nt("#a01a2a")}),0,-.12,t*.92));for(let a of[-1,1])for(let l=0;l<5;l++)this.head.add($(new Jt(.022,4,3),this.mat({color:nt("#2a2a30")}),a*(.24-l*.015),o-.06-l*.07,.06))}else if(e.type==="guard"){let s=this.mat({color:nt("#1d1b22")});this.head.add($(new Ht(.44,.44,.03,16),s,0,t*.62,0)),this.head.add($(new Jt(.2,10,6,0,Math.PI*2,0,Math.PI/2),s,0,t*.62,0)),this.head.add($(new Jt(.05,5,4),this.mat({color:nt("#d0a030")}),0,t*.62+.22,0)),this.head.add($(new ne(.05,.15,5),this.mat({color:nt("#c8302c")}),0,t*.62+.3,0))}else e.type==="lady"&&(this.head.add($(new Jt(.13,8,6),i,0,-.05,-t*.95)),this.head.add($(new ut(.3,.025,.025),this.mat({color:nt("#e0b040")}),0,-.04,-t*1.1)))}buildArmor(t){let e=t.armor==="heavy",i=this.mat({color:nt(t.trim||"#d9a83a")}),n=this.mat({color:nt(t.pants||"#2a2a34")});for(let s of[-1,1]){let o=$(new ut(e?.2:.16,.08,e?.24:.2),i,s*(e?.25:.23),0,0);if(o.rotation.z=s*-.35,this.chest.add(o),e){let a=$(new ut(.17,.06,.22),n,s*.28,-.07,0);a.rotation.z=s*-.5,this.chest.add(a)}}this.hips.add($(new ut(.26,e?.26:.18,.06),i,0,.24,.17)),e&&(this.hips.add($(new ut(.42,.14,.06),n,0,-.06,.24)),this.head.add($(new ut(.06,.12,.03),i,0,.2,.28)))}buildDeco(t,e,i){let n=this.mat({color:nt(i.decoA||i.trim||"#c8302c")}),s=this.mat({color:nt(i.decoB||i.belt||"#e0b040")}),o=i.type==="elf"?.175:i.type==="mage"?.205:.2,a=(l,c,h,d,f,u,p,x,m,g,v=0)=>{let b=new Lt;return b.position.set(c,h,d),b.rotation.z=v,b.add($(new ut(f,u,.02),p,0,-u/2,0)),l.add(b),this.flutter.push({g:b,base:x,amp:m,run:g,ph:Math.random()*6}),b};if(t==="cape"){let l=a(this.chest,0,0,-.17,.44,.62,n,.12,.06,.6);l.add($(new ut(.46,.04,.024),s,0,-.6,0)),l.add($(new ut(.46,.05,.05),s,0,0,.01));for(let c of[-1,1])this.chest.add($(new Jt(.035,5,4),s,c*.13,-.02,.15))}else if(t==="scarf"){let l=$(new mi(.13,.045,5,12),n,0,.01,0);l.rotation.x=Math.PI/2,this.chest.add(l),a(this.chest,.07,0,-.13,.08,.42,n,.35,.12,1,.15),a(this.chest,.12,-.01,-.11,.07,.3,n,.3,.14,.9,.3)}else if(t==="sash")this.hips.add($(new mi(.06,.025,4,8),n,.06,.12,-.22)),a(this.hips,.04,.1,-.22,.06,.46,n,.2,.1,.8,.1),a(this.hips,.1,.1,-.21,.06,.38,s,.18,.12,.8,.25);else if(t==="ribbon"){let l=this.mat({color:nt(i.decoA||"#e8d0ff"),emissive:nt(i.decoGlow||"#3a2a6a")}),c=$(new mi(.4,.024,4,20,Math.PI),l,0,-.02,-.2);c.rotation.x=-.35,this.chest.add(c),this.ribbonArc=c,a(this.chest,.4,-.02,-.2,.05,.55,l,.25,.15,.9),a(this.chest,-.4,-.02,-.2,.05,.55,l,.25,.15,.9)}else if(t==="badge")this.hips.add($(new ut(.17,.16,.02),s,0,.27,o)),this.hips.add($(new ut(.1,.09,.02),n,0,.27,o+.008)),this.hips.add($(new ut(.04,.04,.02),s,0,.27,o+.014));else if(t==="bracers")for(let l of this.arms)l.add($(new Ht(.084,.09,.11,8),s,0,-.2,0)),l.add($(new Ht(.092,.092,.02,8),n,0,-.17,0));else if(t==="crown"){if(i.type==="mage")return;let l=this.mat({color:nt("#ffd040"),emissive:nt("#3a2600")}),c=e*.88;for(let d=0;d<7;d++){let f=d/7*Math.PI*2,u=$(new ne(.03,d%2?.07:.11,4),l,Math.cos(f)*.13,c+.04,Math.sin(f)*.13);this.head.add(u)}let h=$(new mi(.13,.022,4,14),l,0,c,0);h.rotation.x=Math.PI/2,this.head.add(h),this.head.add($(new Se(.035,0),this.mat({color:nt(i.decoA||"#ff4a6a"),emissive:nt("#4a0a1a")}),0,c+.03,.13))}else if(t==="flowerPin"){let l=this.mat({color:nt(i.decoA||"#ff9ac0")}),c=this.mat({color:nt("#fff0a0")});for(let[h,d,f,u]of[[-.22,.12,.02,.06],[-.2,.2,-.08,.045],[-.26,.04,-.06,.04]])this.head.add($(new Se(u,0),l,h,d,f)),this.head.add($(new Se(u*.45,0),c,h-.02,d+.01,f+u*.6));a(this.head,-.24,.02,0,.015,.16,s,0,.2,.3)}}buildAccessory(t,e,i){if(t==="horns"){let n=this.mat({color:nt("#ffd040"),emissive:nt("#3a2000")}),s=this.mat({color:nt("#c8302c")});for(let o of[-1,1]){let a=new Lt;a.position.set(o*.16,e*.85,.05),a.rotation.z=-o*.4,a.add($(new ne(.07,.26,5),n,0,.11,0)),a.add($(new ne(.035,.1,5),s,0,.27,0)),this.head.add(a)}this.head.add($(new Se(.035,0),this.mat({color:nt("#9ad8ff"),emissive:nt("#1a6aaa")}),0,e*.45,e*.92))}else if(t==="fox"){let n=this.mat({color:nt("#f4ece4")}),s=this.mat({color:nt("#ff9a6a")});for(let a of[-1,1]){let l=new Lt;l.position.set(a*.17,e*.95,0),l.rotation.z=-a*.3,l.add($(new ne(.095,.26,4),n,0,.11,0)),l.add($(new ne(.05,.16,4),s,0,.08,.04)),this.head.add(l)}this.foxTails=[];let o=this.mat({color:nt("#ff7a2a"),emissive:nt("#4a1400")});for(let a=-1;a<=1;a++){let l=new Lt;l.position.set(a*.08,.1,-.2),l.rotation.set(1,a*.5,0);let c=$(new Sn(.085,.36,3,6),n,0,-.24,0);l.add(c),l.add($(new Jt(.09,6,5),o,0,-.48,0)),this.hips.add(l),this.foxTails.push(l)}}else if(t==="gat"){let n=this.mat({color:nt("#0c0a10")}),s=this.mat({color:nt("#8a5ad8"),emissive:nt("#2a0a4a")}),o=e*.66;i.type!=="mage"&&(this.head.add($(new Ht(.44,.44,.022,18),n,0,o,0)),this.head.add($(new Ht(.13,.15,.3,12),n,0,o+.15,0))),this.head.add($(new Ht(.156,.156,.04,12),s,0,o+.04,0));let a=this.mat({color:nt("#e0c8ff"),emissive:nt("#4a2a8a")});for(let l of[-1,1])for(let c=0;c<6;c++)this.head.add($(new Jt(.024,4,3),a,l*(.24-c*.012),o-.05-c*.065,.07))}}buildWeapon(t){let e=this.handR,i=new Lt,n=(s,o,a)=>(s.rotation[o]=a,s);if(t==="sword"){let s=this.cfg.wstyle||{},o=this.mat({color:nt(s.blade||"#c9d4e0"),emissive:nt("#000000")}),a=this.mat({color:nt(s.edge||"#ffffff"),emissive:nt("#000000")}),l=this.mat({color:nt(s.wrap||"#1c1824")}),c=this.mat({color:nt("#d8d0e8")}),h=this.mat({color:nt(s.guard||"#d9a83a")});this.glowColor=s.glow?nt(s.glow):null;let d=this.mat({color:nt("#141218")});for(let b=0;b<6;b++)i.add($(new Ht(.023,.023,.045,6),b%2?c:l,0,.12-b*.045,0));i.add($(new Ht(.026,.026,.03,6),h,0,.16,0));let f=$(new Ht(.075,.075,.022,10),d,0,-.13,0);i.add(f),i.add(n($(new mi(.072,.008,4,12),h,0,-.13,0),"x",Math.PI/2)),i.add($(new ut(.03,.05,.045),h,0,-.165,0));let u=7,p=1.08*(s.long||1),x=-.19,m=0,g=0;for(let b=0;b<u;b++){let y=p/u,w=1-b/u*.35,E=new Lt;E.position.set(0,x,m),E.rotation.x=g;let C=$(new ut(.03,y+.012,.068*w),o,0,-y/2,-.004),_=$(new ut(.034,y+.012,.02),a,0,-y/2,.032*w);E.add(C,_),i.add(E),x-=Math.cos(g)*y,m-=Math.sin(g)*y,g-=.035}let v=$(new ne(.036,.14,4),a,0,x-.06,m-.002);if(v.rotation.x=Math.PI+g,v.scale.set(.55,1,1),i.add(v),this.bladeMat=o,this.edgeMat=a,this.cfg.type==="hero"){let b=new Lt;b.position.set(.21,.1,.12),b.rotation.set(1.22,0,.18);let y=this.mat({color:nt("#1a1420")}),w=1.2*(s.long||1);b.add($(new ut(.046,w,.088),y,0,-w/2,.004)),b.add($(new ut(.052,.045,.094),h,0,-w+.02,.004)),b.add($(new ut(.052,.05,.096),this.mat({color:nt("#c8302c")}),0,-.12,.004)),b.add($(new ut(.052,.03,.096),h,0,-.015,.004)),this.hips.add(b),this.saya=b}}else if(t==="club"){let s=this.mat({color:nt("#7a4a2a")}),o=this.mat({color:nt("#c8c0b0")}),a=$(new Ht(.11,.045,.75,7),s,0,-.32,0);a.rotation.x=Math.PI,i.add(a);for(let l=0;l<6;l++){let c=l/6*Math.PI*2;i.add(n($(new ne(.03,.07,4),o,Math.cos(c)*.1,-.55+l%2*.1,Math.sin(c)*.1),"z",-Math.cos(c)*1.5))}}else if(t==="goldclub"){let s=this.mat({color:nt("#e0b040"),emissive:nt("#000")}),o=$(new Ht(.14,.05,.85,8),s,0,-.36,0);o.rotation.x=Math.PI,i.add(o);for(let a=0;a<8;a++){let l=a/8*Math.PI*2;i.add(n($(new ne(.035,.09,4),s,Math.cos(l)*.13,-.62+a%2*.12,Math.sin(l)*.13),"z",-Math.cos(l)*1.5))}}else if(t==="staff"){let s=this.cfg.wstyle||{},o=s.big||1,a=this.mat({color:nt(s.wood||"#5a3e2a")}),l=this.mat({color:nt(s.moon||"#e0b040")});if(i.add($(new Ht(.028,.034,1.55,6),a,0,.35,0)),i.add(n($(new mi(.14*o,.022*o,4,12,Math.PI*1.4),l,0,1.2,0),"z",-Math.PI*.2)),o>1.2)for(let f of[-1,1])i.add(n($(new ne(.03,.18,4),l,f*.14,1.05,0),"z",f*.6));let c=this.mat({color:nt(s.orb||"#b8a8ff"),emissive:nt("#000000")});this.orbMat=c,this.glowColor=nt(s.orbGlow||"#6a4aff"),i.add($(new Se(.075*o,1),c,0,1.2,0));let h=new $t({color:new ct("#f2d36b"),side:fe}),d=new ot(new me(.08,.2),h);d.position.set(.05,1,0),i.add(d)}else if(t==="bow"){let s=this.cfg.wstyle||{},o=s.big||1,a=this.mat({color:nt(s.wood||"#8a5a32"),emissive:nt("#000000")});this.glowColor=s.glow?nt(s.glow):null,this.bowMat=a;let l=new ls(new R(0,.1,.5*o),new R(0,-.22*o,0),new R(0,.1,-.5*o));if(i.add($(new ro(l,10,.024,4),a)),i.add($(new ut(.05,.05,.12),this.mat({color:nt(s.grip||"#3a7a3a")}),0,-.1,0)),s.tips)for(let d of[-1,1])i.add($(new ut(.05,.05,.1),this.mat({color:nt(s.tips)}),0,.1,d*.5*o));let c=new $t({color:new ct("#f0ece0")});this.bowEnds=[new R(0,.1,.5*o),new R(0,.1,-.5*o)],this.bowStrings=[0,1].map(()=>{let d=new ot(new ut(.012,1,.012),c);return i.add(d),d});let h=new Lt;h.add($(new ut(.02,.72,.02),this.mat({color:nt("#9a7a52")}),0,-.36,0)),h.add(n($(new ne(.03,.09,4),this.mat({color:nt("#d8dde4")}),0,-.76,0),"x",Math.PI)),this.nockArrow=h,i.add(h),this.setBowDraw(0),i.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),this.handL.add(i),this.weapon=i;return}else if(t==="spear"){let s=this.mat({color:nt("#6a4a32")}),o=this.mat({color:nt("#cfd6de")}),a=$(new Ht(.025,.025,2,5),s,0,.2,0);i.add(a),i.add($(new ne(.05,.25,4),o,0,1.3,0)),i.add(n($(new ne(.06,.1,6),this.mat({color:nt("#c8302c")}),0,1.13,0),"x",Math.PI))}i.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e.add(i),this.weapon=i,this.saya&&(this.saya.add(i),i.position.copy(uf),i.quaternion.identity(),this.sheathed=!0,this.wStage="in")}setBowDraw(t){if(!this.bowStrings)return;let e=new R(0,.1+.42*t,0);this.bowStrings.forEach((i,n)=>{let s=this.bowEnds[n],o=new R().subVectors(e,s),a=o.length();i.position.copy(s).addScaledVector(o,.5),i.scale.set(1,a,1),i.quaternion.setFromUnitVectors(new R(0,1,0),o.normalize())}),this.nockArrow.position.copy(e),this.nockArrow.visible=t>.15}unsheathe(){!this.saya||!this.sheathed||(this.handR.attach(this.weapon),this.sheathed=!1,this.wStage="hand")}sheathe(){!this.saya||this.sheathed||(this.saya.attach(this.weapon),this.sheathed=!0,this.wStage="align",this.wStageT=0)}updateWeapon(t){if(!this.saya)return;let e=this.weapon,i,n;this.wStage==="hand"?(i=Cv,n=26):this.wStage==="align"?(i=Rv,n=22,this.wStageT+=t,this.wStageT>.16&&(this.wStage="slide",this.wStageT=0)):this.wStage==="slide"?(i=uf,n=16,this.wStageT+=t,this.wStageT>.22&&(this.wStage="in",this.justSheathed=!0)):(i=uf,n=30);let s=1-Math.exp(-n*t);e.position.lerp(i,s),e.quaternion.slerp(Iv,s)}setFlash(t){if(t!==this._lastFlash){this._lastFlash=t;for(let e of this.mats)t>0?e.emissive.setRGB(t,t*.95,t*.9):e.emissive.set(0,0,0)}}animate(t,e){let i=e.speed||0,n=pe(i/4,0,1);this.idleT+=t,n>.05&&(this.phase+=t*(6+i*1.6));let s=this.phase,o=Math.sin(s)*n,a=o*.9,l=-o*.9,c=-o*.7-.25,h=.12,d=0,f=o*.7,u=-.12,p=0,x=.08*n,m=Math.abs(Math.cos(s))*.06*n,g=Math.sin(this.idleT*2.4)*.012*(1-n);this.chest.position.y=(this.cfg.torsoH??.4)+g;let v=0,b=0,y=0;this.cfg.weapon==="spear"&&(c=-.35,h=.25,y=-1.2);let w=this.cfg.weapon==="sword";w&&!this.sheathed&&(c=-o*.18-.2,y=-1.2),w&&this.saya&&(f=-.5+o*.12,u=.18);let E=this.cfg.weapon==="staff",C=.22;E&&(c=-.3-o*.15,h=.18);let _=this.cfg.weapon==="bow",A=0;if(_&&(f=-.3+o*.3,u=-.08),e.attack&&e.attack.kind>=20){let L=e.attack.t,z=e.attack.kind,D=Po(pe(L/.45,0,1)),N=L>.45?Po(pe((L-.45)/.2,0,1)):0,H=1-Kn(pe((L-.7)/.3,0,1)),X=Math.min(1,D*1.6)*H;A=D*(1-N),f=Et(f,z===23?-2.45:-1.55,X),u=Et(u,.06,X),z===23&&(x=-.3*X),c=Et(c,(z===23?-2.2:-1.42)+.35*N,X),h=Et(h,-.62+.5*N,X),p=(z===21?Et(-.7,.5,N):-.4)*H,a=.3*H,l=-.2*H}else if(e.attack&&e.attack.kind>=10){let L=e.attack.t,z=e.attack.kind;if(z===11){let D=Kn(pe(L/.45,0,1)),N=Po(pe((L-.45)/.15,0,1)),H=1-Kn(pe((L-.7)/.3,0,1));c=Et(-.3,Et(-2.7,-1.25,N),Math.max(D,N)*H),C=Et(.22,Et(.35,1.75,N),Math.max(D,N)*H),f=Et(f,Et(-2.2,-1.1,N),D*H),x=Et(-.2*D,.35,N)*H,m-=.05*N*H,a=.35*N*H,l=-.3*N*H}else{let D=Kn(pe(L/.35,0,1)),N=Po(pe((L-.35)/.2,0,1)),H=1-Kn(pe((L-.65)/.35,0,1));f=Et(f,Et(.6,-1.75,N),H*Math.max(D,N)),u=Et(u,-.1,H),p=Et(-.45*D,.3,N)*H,z===12&&(c=Et(c,-1.3,N*H),C=Et(.22,1.3,N*H)),a=.25*N*H,l=-.2*N*H}}else if(e.attack){y=0;let L=e.attack.t,z=e.attack.kind,D=z===3?.3:.26,N=z===3?.56:.5,H=Kn(pe(L/D,0,1)),X=Po(pe((L-D)/(N-D),0,1)),Y=Kn(pe((L-N-.08)/(1-N-.08),0,1)),O=1-Y;if(z===0||z===1){let K=z===0?1:-1,tt=-1.2*K,St=1.5*K;p=Et(Et(0,tt,H),St,X)*O,c=Et(c,Et(-1.4,-1.58,X),O*Math.max(H,X)),h=Et(.12,z===0?.45:.15,H)*O,f=Et(f,.35,O),a=.35*O,l=-.25*O,m-=.04*X*O}else z===3?(p=Et(Et(0,.95,H),-1.55,X)*O,c=Et(Et(c,-.75,H),-1.58,X),c=Et(-.2,c,O),h=Et(Et(.12,-.95,H),.4,X)*O,f=Et(Et(f,-.6,H),.55,X),f=Et(-.5,f,O),a=Et(.2*H,.55,X)*O,l=Et(-.1*H,-.35,X)*O,m-=(.06*H+.05*X)*O,x=Et(.15*H,.2,X)*O):(c=Et(Et(c,-2.9,H),-.45,X),c=Et(c,-.25,Y),d=0,x=Et(Et(0,-.25,H),.38,X)*O,f=c*.9,u=-.05,m-=.06*X*O,a=.4*X*O,l=-.4*X*O)}else if(e.sheathing>0){let L=e.sheathing,z=Math.sin(Math.min(1,L*1.3)*Math.PI*.5)*(1-Kn(pe((L-.75)/.25,0,1)));c=Et(c,-1.15,z),h=Et(h,-.7,z),y=Et(-1.2,0,Math.min(1,L*3)),p=.35*z,f=Et(f,-.7,z)}e.dash&&(x=.45,a=.9,l=-.7,c=w&&!this.sheathed?1.3:.9,f=w?-.5:.9,y=0,m=.02),E&&(y=C-c),this.cfg.type==="jiangshi"&&!e.dead&&(c=e.attack?c-1:-1.55,f=e.attack?f-1:-1.55,h=.05,u=-.05,a=0,l=0,m=(e.hop||0)*.45,x=-.05),this.cfg.type==="ghost"&&!e.dead&&(m=.35+Math.sin(this.idleT*2.2)*.1,e.attack||(c=-.5,f=-.5),x=.15),e.hurt>0&&(x=-.35*e.hurt,v=-.2*e.hurt),e.cast&&(f=-1.5,u=-.2);let P=1-Math.exp(-(e.attack?34:16)*t),k=(L,z,D)=>L[z]+=(D-L[z])*P;if(this.legs.length&&(k(this.legs[0].rotation,"x",l),k(this.legs[1].rotation,"x",a)),k(this.armR.rotation,"x",c),k(this.armR.rotation,"z",-h),k(this.armR.rotation,"y",d),k(this.armL.rotation,"x",f),k(this.armL.rotation,"z",-u),k(this.chest.rotation,"y",p),k(this.hips.rotation,"x",x),k(this.head.rotation,"x",v),this.handR&&k(this.handR.rotation,"x",y),this.body.position.y=m,this.updateWeapon(t),_&&(this.bowCur=(this.bowCur||0)+(A-(this.bowCur||0))*(1-Math.exp(-(A<(this.bowCur||0)?60:20)*t)),this.setBowDraw(this.bowCur)),this.orbMat){let L=.45+Math.sin(this.idleT*4)*.15+(e.attack?.5:0);this.orbMat.emissive.copy(this.glowColor).multiplyScalar(L)}this.body.rotation.z=b,this.tail&&(this.tail.rotation.x=.25+n*.6+Math.sin(this.idleT*7)*.08*n);for(let L of this.flutter)L.g.rotation.x=L.base+n*L.run+Math.sin(this.idleT*(2.4+n*4)+L.ph)*L.amp*(.6+n);if(this.ribbonArc&&(this.ribbonArc.position.y=-.02+Math.sin(this.idleT*1.8)*.025),this.foxTails&&this.foxTails.forEach((L,z)=>{L.rotation.x=1+n*.5+Math.sin(this.idleT*3+z)*.12,L.rotation.y=(z-1)*.5+Math.sin(this.idleT*2.2+z*1.7)*.25}),e.dead){this.deadT+=t;let L=on(pe(this.deadT/.45,0,1));this.body.rotation.x=-L*Math.PI/2,this.body.position.y=L*.15}else this.deadT=0,this.body.rotation.x=0}};function yp(r={}){return new qi({type:"hero",scale:1.15,skin:"#f6d6b6",robe:"#eeeae0",sleeve:"#eeeae0",cuff:"#2e4f8f",belt:"#2e4f8f",collar:"#2e4f8f",pants:"#3a3f5a",hair:"#2a2024",weapon:"sword",...r})}function sc(r){let t={};return r.gloves&&(t.gloves=r.gloves),r.legs&&(t.pants=r.legs,t.shoes="#1e1a1c"),r.belt&&(t.belt=r.belt),t}function rc(r,t){if(!t||!t.pal)return{};let e=vp(r,t.pal,t.armor,t.acc);return t.pattern&&(e.pattern=t.pattern,e.patA=t.pal.patA||t.pal.trim,e.patB=t.pal.patB||t.pal.accent),t.sleevePat&&(e.sleevePat=t.sleevePat),t.deco&&(e.deco=t.deco,e.decoA=t.pal.decoA||t.pal.accent,e.decoB=t.pal.decoB||t.pal.trim,e.decoGlow=t.pal.decoGlow),t.pal.hair&&(e.hair=t.pal.hair),e}function vp(r,t,e,i){return t?i?{...vp(r,t,e),acc:i}:r==="hero"?{robe:t.main,sleeve:t.main,cuff:t.accent,belt:t.accent,collar:t.accent,pants:t.dark,armor:e,trim:t.trim}:r==="mage"?{robe:t.main,sleeve:t.main,cuff:t.trim,belt:t.trim,pants:t.dark,armor:e,trim:t.trim}:{robe:t.main,sleeve:t.main,cuff:t.trim,skirt:t.accent,belt:t.dark,pants:t.trim,armor:e,trim:t.trim}:{}}function _p(){return new qi({type:"guard",scale:1.15,skin:"#eac8a6",robe:"#2b4374",sleeve:"#2b4374",cuff:"#c8302c",belt:"#c8302c",collar:"#c8302c",pants:"#1f2438",hair:"#1c1a1e",weapon:"spear"})}function oc(r={}){return new qi({type:"mage",scale:1.15,skin:"#f4d4b2",robe:"#3a3a7a",sleeve:"#3a3a7a",cuff:"#e0b040",belt:"#e0b040",pants:"#24244a",hair:"#1e1a24",weapon:"staff",...r})}function Mp(r={}){return new qi({type:"elf",scale:1.12,skin:"#fbe2cc",robe:"#5aa84e",sleeve:"#5aa84e",cuff:"#e8d8a0",skirt:"#3f7a3a",belt:"#7a4e2e",pants:"#f0e8d0",shoes:"#6a4428",hair:"#e8e4c8",eye:"#2a6a4a",weapon:"bow",...r})}function mf(r={}){return new qi({type:"lady",scale:1.15,skin:"#f6d8bc",robe:"#9cc46a",sleeve:"#9cc46a",cuff:"#d84a6a",skirt:"#d8486a",pants:"#d8486a",hair:"#2a2024",...r})}function bp(){return new qi({type:"jiangshi",scale:1.12,skin:"#b8d0ae",robe:"#2a5a5a",sleeve:"#2a5a5a",cuff:"#e0b040",belt:"#e0b040",pants:"#1a2a2a",hair:"#1a1a20",eye:"#c8302c"})}function wp(){return new qi({type:"ghost",scale:1.15,skin:"#e8eef4",robe:"#f4f4f0",sleeve:"#f4f4f0",hair:"#0a0a10",eye:"#ff2030",noLegs:!0})}function Ep(){return new qi({type:"reaper",scale:2.05,skin:"#eef0f2",robe:"#141218",sleeve:"#141218",cuff:"#3a2a4a",belt:"#5a1a2a",pants:"#0c0a10",hair:"#0a0a10",eye:"#1a0a0a"})}var pf=class{constructor(t="fox"){let e=t==="gumiho",i=e?{fur:"#f4ecdc",belly:"#ffffff",tip:"#7fd8ff",dark:"#3a3040",mark:"#c8302c"}:{fur:"#d8742a",belly:"#f6eedc",tip:"#ffffff",dark:"#3a2a20",mark:"#2a1a14"};this.mats=[];let n=f=>{let u=Pt(f);return this.mats.push(u),u},s=n({color:nt(i.fur)}),o=n({color:nt(i.belly)}),a=n({color:nt(i.dark)}),l=e?Pt({color:nt(i.tip),emissive:nt("#2a7aff")}):n({color:nt(i.tip)});this.root=new Lt,this.body=new Lt,this.body.scale.setScalar(e?2.1:1.1),this.root.add(this.body),this.torso=new Lt,this.torso.position.y=.42,this.body.add(this.torso);let c=$(new Sn(.17,.42,4,8),s);c.rotation.x=Math.PI/2,this.torso.add(c),this.torso.add($(new Jt(.15,8,6),o,0,-.05,.22)),this.head=new Lt,this.head.position.set(0,.16,.38),this.torso.add(this.head),this.head.add($(new Jt(.17,10,8),s));let h=$(new ne(.09,.24,6),o,0,-.04,.2);h.rotation.x=Math.PI/2,this.head.add(h),this.head.add($(new Jt(.035,5,4),a,0,-.03,.32));for(let f of[-1,1]){let u=$(new ne(.07,.2,4),s,f*.1,.17,-.02);u.rotation.z=-f*.25,this.head.add(u),this.head.add($(new ne(.035,.1,4),a,f*.1,.2,.01)).rotation.z=0,this.head.add($(new ut(.06,.035,.02),Pt({color:nt(e?"#ff4a6a":"#ffd040"),emissive:nt(e?"#8a0a2a":"#5a3a00")}),f*.08,.04,.15)),e&&this.head.add($(new ut(.03,.09,.02),n({color:nt(i.mark)}),f*.05,.1,.15))}this.tails=[];let d=e?9:1;for(let f=0;f<d;f++){let u=new Lt;u.position.set(0,.05,-.3);let p=d>1?(f/(d-1)-.5)*2.4:0;u.rotation.set(-.7-(d>1?Math.cos(p)*.2:0),p*.6,0);let x=$(new Jt(1,8,6),s,0,0,-.32);x.scale.set(.12,.12,.36),u.add(x);let m=$(new Jt(1,6,5),l,0,0,-.62);m.scale.set(.09,.09,.12),u.add(m),this.torso.add(u),this.tails.push({g:u,base:u.rotation.clone(),ph:f*.7})}this.legs=[];for(let[f,u]of[[-.1,.2],[.1,.2],[-.1,-.2],[.1,-.2]]){let p=new Lt;p.position.set(f,.32,u),p.add($(new Sn(.045,.22,3,5),s,0,-.15,0)),p.add($(new Jt(.05,5,4),a,0,-.29,.02)),this.body.add(p),this.legs.push(p)}this.root.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),this.phase=0,this.idleT=Math.random()*10,this.deadT=0}setFlash(t){if(t!==this._lastFlash){this._lastFlash=t;for(let e of this.mats)t>0?e.emissive.setRGB(t,t*.95,t*.9):e.emissive.set(0,0,0)}}animate(t,e){let i=e.speed||0,n=pe(i/4,0,1);this.idleT+=t,this.phase+=t*(4+i*3);let s=this.phase,o=Math.sin(s)*n,a=[o*.9,o*.9,-o*.9,-o*.9],l=Math.cos(s)*.08*n,c=Math.abs(Math.sin(s))*.08*n,h=0;if(e.attack){let f=e.attack.t,u=on(pe(f/.3,0,1)),p=on(pe((f-.3)/.25,0,1)),x=on(pe((f-.62)/.38,0,1));l=Et(Et(0,-.35,u),.35,p)*(1-x),c=Et(-.08*u,.06,p)*(1-x),h=Et(-.3*u,.4,p)*(1-x),a[0]=a[1]=Et(.3*u,-.9,p)*(1-x),a[2]=a[3]=Et(-.4*u,.7,p)*(1-x)}e.hurt>0&&(l=-.3*e.hurt,h=-.3*e.hurt);let d=1-Math.exp(-24*t);this.legs.forEach((f,u)=>f.rotation.x+=(a[u]-f.rotation.x)*d),this.torso.rotation.x+=(l-this.torso.rotation.x)*d,this.head.rotation.x+=(h-this.head.rotation.x)*d,this.body.position.y=c;for(let f of this.tails)f.g.rotation.y=f.base.y+Math.sin(this.idleT*3+f.ph)*.18,f.g.rotation.x=f.base.x+Math.sin(this.idleT*2.3+f.ph)*.1-n*.3;if(e.dead){this.deadT+=t;let f=on(pe(this.deadT/.4,0,1));this.body.rotation.z=f*Math.PI/2}else this.deadT=0,this.body.rotation.z=0}};function gf(r="fox"){return new pf(r)}function ac(r="blue"){let t={blue:{skin:"#5d8fd8",hair:"#e2522e",horns:1,scale:1.12},red:{skin:"#d8574a",hair:"#2a2430",horns:2,scale:1.18},boss:{skin:"#b03a5a",hair:"#f0e8d8",horns:2,scale:2.3,horn:"#f0c040"}}[r];return new qi({type:"dokkaebi",skin:t.skin,hair:t.hair,horns:t.horns,horn:t.horn,scale:t.scale,pants:t.skin,sleeve:t.skin,legLen:.3,torsoH:.42,headR:.32,neck:.3,shoulder:.27,limb:1.35,wide:1.3,weapon:r==="boss"?"goldclub":"club",eye:"#1b1416"})}var un={sword:{id:"sword",title:"\uAC80\uAC1D",name:"\uC774\uB791",make:yp,hp:120,skillCd:2.6,dashCd:.5,skill2Cd:6,skill3Cd:8,role:"\uBC1C\uB3C4\uC220 \xB7 \uADFC\uC811",desc:"\uBC1C\uB3C4\uC220, \uAC80\uAE30, \uC21C\uAC04 \uB3CC\uC9C4 \uC77C\uC12C, \uD68C\uC624\uB9AC\uBCA0\uAE30",labels:{atk:"\uBCA0\uAE30",dash:"\uD68C\uD53C",skill:"\uAC80\uAE30",skill2:"\uC77C\uC12C",skill3:"\uD68C\uC624\uB9AC"},hitWord:"\uC5F0\uC18D \uBCA0\uAE30"},mage:{id:"mage",title:"\uB3C4\uC0AC",name:"\uCCAD\uC6B4",make:oc,hp:90,skillCd:4.2,dashCd:.8,skill2Cd:6.5,skill3Cd:9,role:"\uBD80\uC801\uC220 \xB7 \uC6D0\uAC70\uB9AC \uAD11\uC5ED",desc:"\uBD88\uBD80\uC801, \uB099\uB8B0, \uBD88\uBC40\uC744 \uBD80\uB974\uB294 \uD654\uB8E1\uBD80, \uC5BC\uC74C \uAC00\uC2DC \uBE59\uACB0\uC9C4",labels:{atk:"\uBD88\uBD80\uC801",dash:"\uCD95\uC9C0",skill:"\uB099\uB8B0",skill2:"\uD654\uB8E1\uBD80",skill3:"\uBE59\uACB0\uC9C4"},hitWord:"\uC5F0\uC18D \uD0C0\uACA9"},elf:{id:"elf",title:"\uC694\uC815",name:"\uD558\uB2AC",make:Mp,hp:100,skillCd:3.2,dashCd:.45,skill2Cd:6,skill3Cd:9,role:"\uD65C \xB7 \uC6D0\uAC70\uB9AC \uC5F0\uC0AC",desc:"\uBC14\uB78C\uD654\uC0B4, \uD558\uB298\uC5D0\uC11C \uC3DF\uC544\uC9C0\uB294 \uD654\uC0B4\uBE44, \uC801\uC744 \uBE68\uC544\uB4E4\uC774\uB294 \uD68C\uC624\uB9AC \uC815\uB839",labels:{atk:"\uC0AC\uACA9",dash:"\uAD6C\uB974\uAE30",skill:"\uBC14\uB78C\uD654\uC0B4",skill2:"\uD654\uC0B4\uBE44",skill3:"\uD68C\uC624\uB9AC \uC815\uB839"},hitWord:"\uC5F0\uC18D \uBA85\uC911"}},bs=["sword","mage","elf"];var Rn={2:3,3:5},Lo=r=>40+r*30,vr=new R,Pv={4:3,5:0,13:12,14:11,24:21},lc=class{constructor(t,e="sword"){this.game=t,this.pos=new R(0,.12,16),this.yaw=Math.PI,this.vel=new R,this.radius=.32,this.maxHp=120,this.hp=this.maxHp,this.attack=null,this.combo=0,this.comboTimer=0,this.buffered=!1,this.dashT=0,this.dashCd=0,this.dashDir=new R,this.skillCd=0,this.skillMax=2.6,this.invuln=0,this.hurtT=0,this.dead=!1,this.stepAcc=0,this.y=this.pos.y,this.lastCombat=0,this.moveR=this.radius,this.setClass(e)}setClass(t){let e=un[t]||un.sword;this.cls=e.id,this.cfg=e;let i=this.game.progressOf(e.id);this.level=i.level,this.exp=i.exp,this.skillMax=e.skillCd,this.cd2=0,this.cd3=0,this.cd2Max=e.skill2Cd,this.cd3Max=e.skill3Cd,this.dashMax=e.dashCd,this.attack=null,this.combo=0,this.sheatheT=0,this.buildRig(),this.recalc(!0)}buildRig(){let t=this.game.progressOf(this.cls),e=ii(t.weapon),i=ii(t.outfit),n={sword:"hero",mage:"mage",elf:"elf"}[this.cls],s=this.rig,o={};for(let a of this.game.equippedGear(this.cls))a.kind!=="ring"&&(o[a.kind]=Co(a));this.rig=this.cfg.make({wstyle:e?.style,...rc(n,i),...sc(o)}),s&&(this.game.scene.remove(s.root),this.rig.root.position.copy(s.root.position),this.rig.root.rotation.y=s.root.rotation.y),this.game.scene.add(this.rig.root)}recalc(t=!1){let e=this.game.progressOf(this.cls),i=ii(e.weapon),n=ii(e.outfit),s=this.maxHp?this.hp/this.maxHp:1,o=this.gear=gp(this.game.equippedGear(this.cls));this.maxHp=Math.round(this.cfg.hp+(this.level-1)*12+(n?.hp||0)+(o.hp||0)),this.atkMul=(1+(this.level-1)*.08)*(1+(i?.atk||0))*(1+(o.atk||0)),this.def=Math.min(.7,1-(1-(n?.def||0))*(1-(o.def||0))),this.perks=lp(e.weapon,e.outfit);for(let a of this.game.equippedGear(this.cls))a.perk&&this.perks.add(a.perk);this.dashMax=this.cfg.dashCd*(this.perks.has("swift")?.7:1),this.hp=t?this.maxHp:Math.max(1,Math.round(this.maxHp*s))}equip(t){let e=ii(t);if(!e||e.kind==="weapon"&&e.cls!==this.cls)return!1;let i=this.game.progressOf(this.cls);return e.kind==="weapon"?i.weapon=t:i.outfit=t,this.buildRig(),this.recalc(),!0}addExp(t){this.exp+=Math.round(t*(1+(this.gear?.exp||0)));let e=0;for(;this.exp>=Lo(this.level);)this.exp-=Lo(this.level),this.level++,e++;let i=this.game.progressOf(this.cls);i.level=this.level,i.exp=this.exp,e&&(this.recalc(!0),this.game.onLevelUp(this,e))}reset(){this.hp=this.maxHp,this.dead=!1,this.attack=null,this.invuln=1.5,this.rig.deadT=0}aimYaw(t,e=this.cls==="sword"?3.6:11){let i=this.game,n=i.target;if(n&&!n.dead&&!n.spawning&&Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z)<i.targetRange()+2)return Math.atan2(n.pos.x-this.pos.x,n.pos.z-this.pos.z);let s=null,o=1e9,a=t.moveLen>.1?Math.atan2(t.mx,t.mz):this.yaw;for(let l of i.enemies){if(l.dead||l.spawning)continue;let c=l.pos.x-this.pos.x,h=l.pos.z-this.pos.z,d=Math.hypot(c,h);if(d>e)continue;let f=Math.abs(Zn(a,Math.atan2(c,h))),u=d+f*(e>4?4:1.5);f<(e>4?.9:1.7)&&u<o&&(o=u,s=Math.atan2(c,h))}return s!==null?s:t.mouseRecent&&t.mouseWorld?Math.atan2(t.mouseWorld.x-this.pos.x,t.mouseWorld.z-this.pos.z):a}startAttack(t){if(this.dead||this.dashT>0)return;if(this.attack){this.attack.t>.4&&(this.buffered=!0);return}if(this.cls!=="sword"){let a=(this.cls==="mage"?10:20)+[0,0,2][this.combo%3];this.combo++,this.yaw=this.aimYaw(t);let l=a%10===2;this.attack={t:0,kind:a,dur:this.cls==="mage"?l?.46:.36:l?.42:.32,hit:!1,hitAt:this.cls==="mage"?.42:.47},this.cls==="elf"&&this.game.audio.play("bowdraw"),this.lastCombat=this.game.time;return}this.rig.sheathed?(this.combo=0,this.drawCut()):this.combo===0&&(this.comboFromSheath=!1);let s=(this.comboFromSheath?[3,0,2]:[1,0,2])[this.combo%3];this.combo++,this.yaw=this.aimYaw(t),this.attack={t:0,kind:s,dur:s===2?.48:s===3?.42:.36,hit:!1,hitAt:s===3?.44:.38},s!==3&&this.game.audio.play(s===2?"swing3":"swing"),this.lastCombat=this.game.time,this.sinceAttack=0}drawCut(){this.rig.unsheathe(),this.sheatheT=0,this.comboFromSheath=!0,this.game.audio.play("draw");let t=this.rig.saya;if(t){let e=new R;t.getWorldPosition(e),this.game.fx.spark(e.x,e.y,e.z,6,"#ffffff",3)}}startDash(t){if(this.dead||this.dashCd>0)return;let e=t.moveLen>.1?vr.set(t.mx,0,t.mz).normalize():vr.set(Math.sin(this.yaw),0,Math.cos(this.yaw));if(this.dashDir.copy(e),this.yaw=Math.atan2(e.x,e.z),this.cls==="mage"){this.blink(e);return}this.dashT=.2,this.dashCd=this.dashMax??.5,this.invuln=Math.max(this.invuln,.3),this.attack=null,this.buffered=!1,this.game.audio.play("dash"),this.game.fx.dust(this.pos.x,this.pos.y,this.pos.z,8)}blink(t){let e=this.game,i=this.pos.clone();e.fx.ghost(this.rig,"#9a7aff",.4),e.fx.smoke(i.x,i.y+.2,i.z,10),e.world.move(this.pos,t.x*3.6,t.z*3.6,this.moveR),this.vel.set(0,0,0),this.dashCd=this.dashMax,this.invuln=Math.max(this.invuln,.35),this.attack=null,this.buffered=!1,e.audio.play("blink");let n=this.pos;for(let s=0;s<14;s++){let o=s/13;e.fx.add.emit({x:i.x+(n.x-i.x)*o,y:i.y+.8+T(-.4,.4),z:i.z+(n.z-i.z)*o,vx:T(-.5,.5),vy:T(0,1),vz:T(-.5,.5),life:T(.25,.5),size:3,endSize:1,color:"#d8c8ff",color2:"#5a3aff"})}e.fx.ring(new R(n.x,e.world.heightAt(n.x,n.z),n.z),1.6,"#b8a0ff",.35),e.fx.smoke(n.x,n.y+.2,n.z,8)}startExtraSkill(t,e){if(this.dead||this.dashT>0)return;let i=e===2?"cd2":"cd3";if(this.level<Rn[e]||this[i]>0||this.attack&&this.attack.t<.6)return;this[i]=(e===2?this.cd2Max:this.cd3Max)*this.game.skillCdMul(this,e),this.yaw=this.aimYaw(t),this.combo=0,this.buffered=!1;let n=this.game,s={sword:{2:{kind:4,dur:.5,hitAt:.3},3:{kind:5,dur:.9,hitAt:.05}},mage:{2:{kind:13,dur:.5,hitAt:.45},3:{kind:14,dur:.62,hitAt:.5}},elf:{2:{kind:23,dur:.55,hitAt:.5},3:{kind:24,dur:.5,hitAt:.47}}}[this.cls][e];this.cls==="sword"&&this.rig.sheathed&&this.drawCut(),this.attack={t:0,kind:s.kind,dur:s.dur,hit:!1,hitAt:s.hitAt,skill:!0,slot:e},this.cls==="mage"?n.audio.play("chant"):this.cls==="elf"&&n.audio.play("bowdraw"),this.sinceAttack=0,this.lastCombat=n.time}startSkill(t){if(this.dead||this.skillCd>0||this.dashT>0)return;if(this.cls!=="sword"){this.skillCd=this.skillMax*this.game.skillCdMul(this,1),this.yaw=this.aimYaw(t),this.combo=0,this.cls==="mage"?(this.attack={t:0,kind:11,dur:.62,hit:!1,hitAt:.5,skill:!0},this.game.audio.play("chant")):(this.attack={t:0,kind:21,dur:.5,hit:!1,hitAt:.47,skill:!0},this.game.audio.play("bowdraw")),this.lastCombat=this.game.time;return}this.skillCd=this.skillMax*this.game.skillCdMul(this,1),this.yaw=this.aimYaw(t);let e=this.rig.sheathed;e&&this.drawCut(),this.attack={t:0,kind:e?3:1,dur:e?.4:.36,hit:!0,skill:!0},this.combo=0,this.sinceAttack=0,e||this.game.audio.play("swing3"),this.game.skillSword1(this),this.lastCombat=this.game.time}damage(t,e){if(this.invuln>0||this.dead||this.game.godMode)return!1;t=Math.max(1,Math.round(t*(1-(this.def||0)))),this.hp-=t,this.invuln=.7,this.blinkT=.7,this.hurtT=.3,this.lastCombat=this.game.time;let i=this.game;return i.fx.number(this.pos.clone().add(new R(0,1.7,0)),t,"player"),i.audio.play("hurt"),i.shake(.25),i.screenFlash(.25,"#ff3030"),e&&(vr.subVectors(this.pos,e).setY(0).normalize(),this.vel.addScaledVector(vr,7)),this.hp<=0&&(this.hp=0,this.dead=!0,i.onPlayerDeath()),!0}update(t,e){let i=this.game;this.dashCd=Math.max(0,this.dashCd-t),this.skillCd=Math.max(0,this.skillCd-t),this.cd2=Math.max(0,(this.cd2||0)-t),this.cd3=Math.max(0,(this.cd3||0)-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.comboTimer-=t;let n=0;if(!this.dead){let l=0;if(this.dashT>0){this.dashT-=t;let h=14*(.4+.6*(this.dashT/.2));i.world.move(this.pos,this.dashDir.x*h*t,this.dashDir.z*h*t,this.radius),n=h,Math.random()<.8&&i.fx.add.emit({x:this.pos.x+T(-.2,.2),y:this.pos.y+T(.3,1.1),z:this.pos.z+T(-.2,.2),life:.25,size:2,color:"#bfe8ff"}),this.ghostT=(this.ghostT??0)-t,this.ghostT<=0&&(this.ghostT=.045,i.fx.ghost(this.rig,this.cls==="elf"?"#7ad86a":"#5ab8ff")),this.cls==="elf"&&Math.random()<.6&&i.fx.norm.emit({x:this.pos.x+T(-.3,.3),y:this.pos.y+T(.2,.9),z:this.pos.z+T(-.3,.3),vx:T(-1,1),vy:T(.5,1.5),vz:T(-1,1),wob:1.5,life:T(.5,.9),size:2,color:Math.random()<.5?"#8ad06a":"#c8e88a"})}else{let d=4.6*(this.attack?this.attack.kind===5?.7:this.attack.skill?this.cls==="sword"?.1:.25:this.cls==="sword"?.22:.45:1)*(this.perks?.has("swift")?1.15:1)*(1+(this.gear?.spd||0));if(e.moveLen>.1){l=1;let f=e.mx*d,u=e.mz*d;this.vel.x=Et(this.vel.x,f,1-Math.exp(-18*t)),this.vel.z=Et(this.vel.z,u,1-Math.exp(-18*t)),this.attack||(this.yaw=an(this.yaw,Math.atan2(e.mx,e.mz),16,t))}else this.vel.x=Et(this.vel.x,0,1-Math.exp(-14*t)),this.vel.z=Et(this.vel.z,0,1-Math.exp(-14*t));if(this.attack&&!this.attack.skill&&this.cls==="sword"){let f=this.attack;if(f.t>.25&&f.t<.5){let u=f.kind===2?3.5:2.6;this.vel.x+=Math.sin(this.yaw)*u*t*10*(1-Math.exp(-t*5)),this.vel.z+=Math.cos(this.yaw)*u*t*10*(1-Math.exp(-t*5))}}i.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),n=Math.hypot(this.vel.x,this.vel.z)}if(this.stepAcc+=n*t,this.stepAcc>1.1&&this.dashT<=0&&(this.stepAcc=0,i.fx.dust(this.pos.x,this.pos.y,this.pos.z,2)),this.attack){let h=this.attack;h.t+=t/h.dur,!h.hit&&h.t>=(h.hitAt??.38)&&(h.hit=!0,h.slot?i.castSkill(this,h.slot):h.skill?i.playerSkillHit(this,h):this.cls==="sword"?i.playerSwingHit(this,h.kind):i.playerShoot(this,h.kind)),h.t>=1&&(this.attack=null,this.buffered?(this.buffered=!1,this.startAttack(e)):this.comboTimer=.35)}else this.comboTimer<=0&&(this.combo=0);let c=this.rig;!this.attack&&c.saya&&(this.sinceAttack=(this.sinceAttack??9)+t,!c.sheathed&&this.sinceAttack>.9&&this.dashT<=0&&(c.sheathe(),this.sheatheT=1e-4)),this.sheatheT>0&&(this.sheatheT+=t/.42,c.justSheathed&&(c.justSheathed=!1,i.audio.play("sheathe")),this.sheatheT>=1&&(this.sheatheT=0))}let s=i.world.heightAt(this.pos.x,this.pos.z);this.y=Et(this.y,s,1-Math.exp(-20*t)),this.pos.y=s,!this.dead&&i.time-this.lastCombat>4&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+t*6)),!this.dead&&this.gear?.regen&&this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+t*this.gear.regen));let o=this.rig;o.root.position.set(this.pos.x,this.y,this.pos.z);let a=this.attack&&this.attack.kind===5?Math.min(1,this.attack.t/.85)*Math.PI*6:0;if(o.root.rotation.y=this.yaw+a,o.animate(t,{speed:this.dead?0:n,attack:this.attack?{t:Math.min(1,this.attack.t),kind:Pv[this.attack.kind]??this.attack.kind}:null,sheathing:this.sheatheT>0?Math.min(1,this.sheatheT):0,dash:this.dashT>0,hurt:this.hurtT/.3,dead:this.dead}),this.blinkT=Math.max(0,(this.blinkT||0)-t),o.root.visible=this.dead||this.blinkT<=0||Math.floor(i.time*18)%2===0,o.setFlash(this.hurtT>.2?.6:0),o.bladeMat){let l=this.attack?.5:o.sheathed?0:i.night>.5?.16:.08;if(o.glowColor){let c=o.sheathed?0:l+.22+Math.sin(i.time*5)*.06;o.bladeMat.emissive.copy(o.glowColor).multiplyScalar(c*.8),o.edgeMat.emissive.copy(o.glowColor).multiplyScalar(c*1.4)}else o.bladeMat.emissive.setRGB(l*.6,l*.9,l),o.edgeMat.emissive.setRGB(l*1.2,l*1.4,l*1.6)}if(o.bowMat&&o.glowColor&&o.bowMat.emissive.copy(o.glowColor).multiplyScalar(.3+Math.sin(i.time*4)*.08+(this.attack?.3:0)),o.glowColor&&!o.sheathed&&Math.random()<t*14){let l=o.weapon.getWorldPosition(vr);i.fx.add.emit({x:l.x+T(-.3,.3),y:l.y+T(-.3,.5),z:l.z+T(-.3,.3),vy:T(.2,.8),life:T(.3,.6),size:2,color:"#ffffff",color2:"#"+o.glowColor.getHexString()})}}},Pi={blue:{core:"#bff4ff",hi:"#e8ffff",idle:"#9feaff",shell:"#3a8cff",trail:"#7fe0ff",trail2:"#1a40ff",orb:"#d8fbff",eye:659504,fire:["#9ff0ff","#2050ff"]},fox:{core:"#ffe0c0",hi:"#fff4e0",idle:"#ffc89a",shell:"#ff6a2a",trail:"#ffb070",trail2:"#ff2a00",orb:"#ffe8c8",eye:3803648,fire:["#ffd08a","#ff3a00"]},ghost:{core:"#f0e0ff",hi:"#ffffff",idle:"#d8c0ff",shell:"#8a4aff",trail:"#c8a0ff",trail2:"#4a1a9a",orb:"#ecdcff",eye:1706538,fire:["#d8c0ff","#5a1aaa"]}},Lv={blue:{hp:46,speed:2.7,dmg:10,range:1.5,windup:.5,recover:.6,radius:.46,exp:10,ai:"melee",make:()=>ac("blue"),pal:Pi.blue},red:{hp:72,speed:3.1,dmg:15,range:1.6,windup:.42,recover:.5,radius:.48,exp:16,ai:"melee",make:()=>ac("red"),pal:Pi.blue},wisp:{hp:28,speed:1.9,dmg:9,range:7,windup:.6,recover:1.6,radius:.35,exp:12,ai:"wisp",pal:Pi.blue},boss:{hp:900,speed:2.35,dmg:24,range:2.7,windup:.85,recover:.8,radius:.95,exp:200,ai:"boss",boss:"dokkaebi",make:()=>ac("boss"),pal:Pi.blue,name:"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8",summon:["red","blue"]},fox:{hp:44,speed:4.4,dmg:10,range:1.5,windup:.34,recover:.5,radius:.42,exp:14,ai:"melee",lunge:!0,make:()=>gf("fox"),pal:Pi.fox},foxfire:{hp:32,speed:2.1,dmg:10,range:7,windup:.5,recover:1.4,radius:.35,exp:14,ai:"wisp",pal:Pi.fox},gumiho:{hp:1150,speed:3.1,dmg:22,range:2.4,windup:.6,recover:.7,radius:.95,exp:320,ai:"boss",boss:"gumiho",make:()=>gf("gumiho"),pal:Pi.fox,name:"\uCC9C\uB144 \uAD6C\uBBF8\uD638",summon:["fox","foxfire"]},jiangshi:{hp:92,speed:3.2,dmg:15,range:1.5,windup:.45,recover:.6,radius:.45,exp:20,ai:"melee",hop:!0,make:bp,pal:Pi.ghost},ghost:{hp:48,speed:1.8,dmg:12,range:6.5,windup:.6,recover:1.6,radius:.4,exp:20,ai:"wisp",teleport:!0,make:wp,pal:Pi.ghost},reaper:{hp:1500,speed:2.7,dmg:26,range:2.8,windup:.7,recover:.8,radius:1,exp:450,ai:"boss",boss:"reaper",make:Ep,pal:Pi.ghost,name:"\uC800\uC2B9\uC0AC\uC790",summon:["ghost","jiangshi"]}},_r=class{constructor(t,e,i,n=1,s={}){this.game=t,this.type=e,this.lvl=n;let o=this.T=Lv[e],a=1+(n-1)*.25;this.maxHp=Math.round(o.hp*a),this.hp=this.maxHp,this.dmg=Math.round(o.dmg*(1+(n-1)*.15)),this.radius=o.radius,this.isBoss=o.ai==="boss",this.isWisp=o.ai==="wisp",this.name=o.name,this.moveR=this.isBoss?yr[1]:Math.min(o.radius,yr[0]),this.pos=i.clone(),this.vel=new R,this.yaw=0,this.state="spawn",this.st=0,this.attackCd=T(.4,1.2),this.hurtT=0,this.flashT=0,this.dead=!1,this.deadT=0,this.spawning=!0,this.y=i.y,this.strafe=Math.random()<.5?1:-1,this.leapCd=6,this.patCd=3,this.tpCd=T(6,9),this.hopPh=Math.random(),this.summoned=0,o.make?(this.rig=o.make(),t.scene.add(this.rig.root)):this.buildWisp(),this.root=this.rig?this.rig.root:this.wisp,this.root.position.copy(this.pos),this.root.scale.setScalar(.01);let[l,c]=o.pal.fire;t.fx.colorFire(i.x,i.y,i.z,this.isBoss?80:30,this.isBoss?1.2:.5,l,c),t.fx.ring(i,this.isBoss?3:1.4,l,.5),this.field=!!s.field,this.aggro=!this.field,this.field||t.audio.play("spawn")}buildWisp(){let t=new Lt,e=this.T.pal,i=new $t({color:new ct(e.core)}),n=new ot(new Se(.28,1),i);t.add(n);let s=new ot(new Se(.36,1),new $t({color:new ct(e.shell),transparent:!0,opacity:.45,depthWrite:!1}));s.userData.noOutline=!0,t.add(s);let o=new $t({color:e.eye});for(let a of[-1,1]){let l=new ot(new ut(.06,.1,.04),o);l.position.set(a*.09,.03,.27),t.add(l)}this.game.scene.add(t),this.wisp=t,this.coreMat=i}get alive(){return!this.dead}center(){return vr.set(this.pos.x,this.y+(this.isBoss?2:this.isWisp?this.rig?1.2:1.3:.8),this.pos.z)}hit(t,e,i=5,n=.25){if(this.dead||this.spawning)return!1;if(this.hp-=t,this.flashT=.12,!this.isBoss||this.state==="chase"){let s=this.isBoss?i*.15:i;this.vel.addScaledVector(e,s),this.isBoss||(this.hurtT=n,this.state==="windup"&&n>=.25&&(this.state="chase",this.attackCd=.6,this.clearTele()))}return this.hp<=0&&this.die(),!0}freeze(t){if(!(this.dead||this.isBoss)&&(this.frozenT=Math.max(this.frozenT||0,t),this.hurtT=Math.max(this.hurtT,t),(this.state==="windup"||this.state==="strike")&&(this.state="chase",this.attackCd=.8,this.clearTele()),!this.ice)){let e=this.isWisp?.9:1.15*(this.T.radius/.46),i=new $t({color:"#a8e4ff",transparent:!0,opacity:.42,depthWrite:!1});this.ice=new ot(new Se(.75*e,0),i),this.ice.scale.set(1,1.35,1),this.game.scene.add(this.ice)}}updateIce(t){if(!this.ice)return;this.frozenT-=t;let e=this.isWisp?this.y+1.2:this.y+.75;if(this.ice.position.set(this.pos.x,e,this.pos.z),this.frozenT<=0||this.dead){let i=this.game;for(let n=0;n<14;n++)i.fx.add.emit({x:this.pos.x,y:e+T(-.4,.4),z:this.pos.z,vx:T(-3,3),vy:T(1,4),vz:T(-3,3),g:12,life:T(.3,.6),size:3,endSize:1,color:"#e8f8ff",color2:"#5aa8ff"});i.audio.play("block"),i.scene.remove(this.ice),this.ice.geometry.dispose(),this.ice.material.dispose(),this.ice=null,this.frozenT=0}}die(){this.dead=!0,this.hp=0,this.deadT=0,this.clearTele();let t=this.game;if(t.audio.play("poof"),this.isWisp&&!this.rig){let[e,i]=this.T.pal.fire;t.fx.colorFire(this.pos.x,this.y+1,this.pos.z,40,.4,e,i),t.fx.ring(new R(this.pos.x,this.y,this.pos.z),1.5,e,.4)}t.onEnemyKilled(this)}clearTele(){this.tele&&(this.game.fx.removeRing(this.tele),this.tele=null)}update(t){let e=this.game,i=e.player;if(this.updateIce(t),this.st+=t,this.flashT=Math.max(0,this.flashT-t),this.hurtT=Math.max(0,this.hurtT-t),this.attackCd-=t,this.leapCd-=t,this.dead){if(this.deadT+=t,this.isWisp&&!this.rig)this.root.scale.setScalar(Math.max(.01,1-this.deadT*4));else if(this.rig.animate(t,{speed:0,dead:!0}),this.rig.setFlash(Math.max(0,.8-this.deadT*2)),this.deadT>.55&&!this.poofed){this.poofed=!0;let d=this.isBoss,[f,u]=this.T.pal.fire;e.fx.smoke(this.pos.x,this.y+.3,this.pos.z,d?30:12),e.fx.colorFire(this.pos.x,this.y+.2,this.pos.z,d?60:24,d?1.4:.6,f,u),e.fx.coins(this.pos.x,this.y,this.pos.z,d?30:6),e.audio.play("coin"),this.root.visible=!1}return this.deadT<1.2}if(this.spawning){let d=on(pe(this.st/.7,0,1));return this.root.scale.setScalar(Math.max(.01,d)),Math.random()<.6&&e.fx.colorFire(this.pos.x,this.pos.y,this.pos.z,2,this.isBoss?1:.4,...this.T.pal.fire),this.st>=.7&&(this.spawning=!1,this.state="chase",this.st=0,this.root.scale.setScalar(1),!this.field&&(Math.random()<.4||this.isBoss)&&e.audio.play(this.T.pal===Pi.blue?"laugh":this.T.pal===Pi.fox?"howl":"wail")),this.isWisp&&!this.rig?this.root.position.set(this.pos.x,this.pos.y+1.3*d,this.pos.z):this.place(t,0),!0}let n=i.pos.x-this.pos.x,s=i.pos.z-this.pos.z,o=Math.hypot(n,s),a=Math.atan2(n,s),l=0,c=null,h=this.T;if(this.field&&(this.aggro&&(o>24||i.dead)&&(this.aggro=!1,this.home=this.pos.clone(),this.state="chase",this.clearTele()),!this.aggro))return this.updateIdle(t,o,a);if(this.isWisp)return this.updateWisp(t,o,a);if(this.vel.lengthSq()>.001&&(e.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-9*t))),!(this.hurtT>0)){if(this.state==="chase"){let d=Math.abs(i.pos.y-this.pos.y)<.5;if(i.dead)l=0,this.yaw=an(this.yaw,a,8,t);else if(h.boss==="dokkaebi"&&this.leapCd<=0&&o>4.5&&o<14)this.state="leapPrep",this.st=0,this.leapTarget=i.pos.clone(),this.tele=e.fx.ring(this.leapTarget,3.6,"#ff4a3a",1,1);else if(!(this.isBoss&&h.boss!=="dokkaebi"&&this.bossPattern(t,o,a))){if(o>h.range*.85||!d){let f=h.speed*(this.isBoss&&this.hp<this.maxHp*.4?1.25:1);if(h.hop){this.hopPh=(this.hopPh+t*1.8)%1;let u=this.hopPh<.62;this.hop=u?Math.sin(this.hopPh/.62*Math.PI):0,f=u?f*1.6:0,!u&&!this.landed&&(this.landed=!0,e.fx.dust(this.pos.x,this.pos.y,this.pos.z,3)),u&&(this.landed=!1)}l=this.chaseMove(t,f,n,s,o),this.yaw=an(this.yaw,this.los?a:Math.atan2(this.moveX,this.moveZ),8,t)}else if(this.yaw=an(this.yaw,a,8,t),this.attackCd<=0&&(this.state="windup",this.st=0,this.isBoss)){let f=new R(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6);this.tele=e.fx.ring(f,2.6,"#ff4a3a",1,1),this.smashAt=f}}}else if(this.state==="windup")this.st<h.windup*.6&&(this.yaw=an(this.yaw,a,5,t)),c={t:.28*pe(this.st/h.windup,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/h.windup),this.isBoss&&this.smashAt&&(this.smashAt.set(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6),this.tele&&this.tele.m.position.set(this.smashAt.x,this.smashAt.y+.04,this.smashAt.z)),this.st>=h.windup&&(this.state="strike",this.st=0,e.audio.play("swing"));else if(this.state==="strike"){if(c={t:.28+.34*pe(this.st/.12,0,1),kind:2},h.lunge&&this.st<.12&&e.world.move(this.pos,Math.sin(this.yaw)*9*t,Math.cos(this.yaw)*9*t,this.moveR),!this.struck&&this.st>=.08)if(this.struck=!0,this.isBoss)this.clearTele(),e.bossSlam(this,this.smashAt,2.6,this.dmg);else{let d=Math.sin(this.yaw),f=Math.cos(this.yaw),u=this.pos.x+d*.9,p=this.pos.z+f*.9;e.fx.dust(u,this.pos.y,p,5),Math.hypot(i.pos.x-u,i.pos.z-p)<1.05+i.radius&&Math.abs(i.pos.y-this.pos.y)<1&&i.damage(this.dmg,this.pos)}this.st>=.12&&(this.state="recover",this.st=0,this.struck=!1)}else if(this.state==="recover")c={t:.62+.38*pe(this.st/h.recover,0,1),kind:2},this.st>=h.recover&&(this.state="chase",this.st=0,this.attackCd=T(.6,1.4));else if(this.state==="cast"){if(this.yaw=an(this.yaw,a,6,t),c={t:.28*pe(this.st/.7,0,1),kind:2},Math.random()<.9){let[d,f]=h.pal.fire;e.fx.add.emit({x:this.pos.x+T(-1.5,1.5),y:this.y+T(.5,3),z:this.pos.z+T(-1.5,1.5),vx:this.pos.x-this.pos.x,vy:.5,life:.35,size:3,endSize:1,color:d,color2:f})}if(this.st>=.7){if(h.boss==="gumiho")for(let d=-3;d<=3;d++)e.spawnOrb(this,d*.2);else e.spawnDarkWaves(this);this.state="recover",this.st=0}}else if(this.state==="chargePrep")c={t:.2*pe(this.st/.6,0,1),kind:2},this.st>=.65&&(this.state="charge",this.st=0,e.audio.play("dash"),this.chargeHit=!1);else if(this.state==="charge"){let f=e.world.move(this.pos,Math.sin(this.yaw)*16*t,Math.cos(this.yaw)*16*t,this.moveR);l=16,Math.random()<.9&&e.fx.colorFire(this.pos.x,this.pos.y+.5,this.pos.z,2,.8,...h.pal.fire),!this.chargeHit&&Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z)<1.6+i.radius&&(this.chargeHit=!0,i.damage(Math.round(this.dmg*1.1),this.pos)),(this.st>=.55||!f)&&(this.state="recover",this.st=0,e.fx.dust(this.pos.x,this.pos.y,this.pos.z,12),e.shake(.3))}else if(this.state==="vanish"){let d=pe(this.st/.5,0,1);if(this.root.scale.setScalar(Math.max(.01,1-d)),this.st>=.5&&!this.reappeared){this.reappeared=!0;let f=i.yaw+Math.PI,u=i.pos.x+Math.sin(f)*2.6,p=i.pos.z+Math.cos(f)*2.6,x=e.world.heightAt(u,p);e.world.isBlocked(u,p,this.moveR,x)||(this.pos.set(u,x,p),this.y=x),e.fx.smoke(this.pos.x,this.y+.5,this.pos.z,20),e.fx.colorFire(this.pos.x,this.y,this.pos.z,40,1,...h.pal.fire),e.audio.play("blink")}if(this.st>=.85){this.root.scale.setScalar(1),this.yaw=a,this.state="windup",this.st=h.windup*.35;let f=new R(this.pos.x+Math.sin(this.yaw)*1.6,this.pos.y,this.pos.z+Math.cos(this.yaw)*1.6);this.tele=e.fx.ring(f,2.6,"#c84aff",1,1),this.smashAt=f}}else if(this.state==="leapPrep")c={t:.2*pe(this.st/.6,0,1),kind:2},this.tele&&(this.tele.mat.uniforms.uProg.value=this.st/1.5),this.st>=.6&&(this.state="leap",this.st=0,this.leapFrom=this.pos.clone(),e.audio.play("dash"),e.fx.dust(this.pos.x,this.pos.y,this.pos.z,14));else if(this.state==="leap"){let d=pe(this.st/.9,0,1);if(this.tele&&(this.tele.mat.uniforms.uProg.value=.4+d*.6),this.pos.x=Et(this.leapFrom.x,this.leapTarget.x,on(d)),this.pos.z=Et(this.leapFrom.z,this.leapTarget.z,on(d)),this.jumpY=Math.sin(d*Math.PI)*4.5,c={t:.28,kind:2},d>=1){this.jumpY=0,this.clearTele();let f=e.world.heightAt(this.pos.x,this.pos.z);e.world.isBlocked(this.pos.x,this.pos.z,this.moveR*.7,f)&&this.pos.copy(this.leapFrom),e.bossSlam(this,this.pos.clone(),3.6,Math.round(this.dmg*1.2),!0),this.state="recover",this.st=0,this.leapCd=T(6,9)}}}return this.place(t,l,c),!0}bossPattern(t,e,i){let n=this.game,s=this.T;if(this.patCd-=t,this.patCd>0||n.player.dead)return!1;if(this.patCd=T(3.2,4.6)*(this.hp<this.maxHp*.4?.7:1),this.yaw=i,s.boss==="gumiho"){if(e>4&&Math.random()<.5){this.state="chargePrep",this.st=0;let o=new R(this.pos.x,this.y+.1,this.pos.z),a=o.clone().add(new R(Math.sin(i)*9,0,Math.cos(i)*9));n.fx.streak(o,a,"#ff4a3a",.7,1.6),n.audio.play("howl")}else this.state="cast",this.st=0,n.audio.play("charge");return!0}return s.boss==="reaper"?(e>3&&Math.random()<.45?(this.state="vanish",this.st=0,this.reappeared=!1,n.fx.smoke(this.pos.x,this.y+.6,this.pos.z,20),n.audio.play("wail")):(this.state="cast",this.st=0,n.audio.play("charge")),!0):!1}updateWisp(t,e,i){let n=this.game,s=n.player;if(this.frozenT>0)return!0;this.yaw=an(this.yaw,i,6,t),this.vel.lengthSq()>.001&&(n.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-6*t)));let o=s.pos.x-this.pos.x,a=s.pos.z-this.pos.z,l=o/(e||1),c=a/(e||1),h=0,d=0;if(this.state==="chase"){if(e>7.5){let g=n.world.clearLine(this.pos.x,this.pos.z,s.pos.x,s.pos.z,this.moveR)?null:n.world.navDir(this.pos,0);g?(h=g.x,d=g.z):(h=l,d=c)}else e<3.5&&(h=-l*.6,d=-c*.6);h+=-c*this.strafe*.3,d+=l*this.strafe*.3,Math.random()<t*.3&&(this.strafe*=-1),this.attackCd<=0&&e<10&&!s.dead&&(this.state="windup",this.st=0,n.audio.play("orb"))}else this.state==="windup"&&(Math.random()<.8&&n.fx.add.emit({x:this.pos.x+T(-.6,.6),y:this.y+1.3+T(-.6,.6),z:this.pos.z+T(-.6,.6),vx:0,vy:0,vz:0,life:.3,size:2,color:this.T.pal.trail}),this.st>=this.T.windup&&(n.spawnOrb(this),this.state="chase",this.st=0,this.attackCd=T(2.6,3.6)));let f=Math.hypot(h,d);if(f>.01){let g=Math.min(1,f)/f;n.world.move(this.pos,h*g*this.T.speed*t,d*g*this.T.speed*t,this.moveR)}if(this.T.teleport&&this.state==="chase"&&(this.tpCd-=t,this.tpCd<=0&&!s.dead)){this.tpCd=T(8,12);let g=Math.random()*Math.PI*2,v=s.pos.x+Math.cos(g)*3.5,b=s.pos.z+Math.sin(g)*3.5,y=n.world.heightAt(v,b);n.world.isBlocked(v,b,this.moveR,y)||(n.fx.smoke(this.pos.x,this.y+.8,this.pos.z,10),this.pos.set(v,y,b),this.y=y,n.fx.colorFire(v,y+.5,b,20,.5,...this.T.pal.fire),n.audio.play("wail"),this.attackCd=Math.min(this.attackCd,.5))}let u=n.world.heightAt(this.pos.x,this.pos.z);this.y=Et(this.y,u,1-Math.exp(-6*t));let p=Math.sin(n.time*3+this.strafe)*.15;if(this.rig)return this.root.position.set(this.pos.x,this.y,this.pos.z),this.root.rotation.y=this.yaw,this.rig.animate(t,{speed:f>.01?1:0,attack:this.state==="windup"?{t:.28*pe(this.st/this.T.windup,0,1),kind:2}:null,hurt:this.hurtT>0?Math.min(1,this.hurtT/.25):0}),this.rig.setFlash(this.flashT>0?.9:this.state==="windup"&&Math.floor(this.st*12)%2?.3:0),Math.random()<.4&&n.fx.add.emit({x:this.pos.x+T(-.3,.3),y:this.y+T(.2,1.4),z:this.pos.z+T(-.3,.3),vy:T(.2,.6),life:.6,size:2,color:this.T.pal.trail,color2:this.T.pal.trail2,alpha:.7}),!0;this.root.position.set(this.pos.x,this.y+1.3+p,this.pos.z),this.root.rotation.y=this.yaw;let x=this.state==="windup"?1+Math.sin(this.st*40)*.12+this.st*.4:1;this.root.scale.setScalar(x);let m=this.T.pal;return this.coreMat.color.set(this.flashT>0?"#ffffff":this.state==="windup"?m.hi:m.idle),Math.random()<.7&&n.fx.add.emit({x:this.pos.x+T(-.15,.15),y:this.y+1.45+p,z:this.pos.z+T(-.15,.15),vx:T(-.3,.3),vy:T(.8,1.6),vz:T(-.3,.3),life:T(.3,.6),size:T(2,4),endSize:1,color:m.trail,color2:m.trail2}),!0}updateIdle(t,e,i){let n=this.game,s=n.player;if(!s.dead&&(e<8.5&&Math.abs(s.pos.y-this.pos.y)<1.5||this.hp<this.maxHp)){this.aggro=!0,this.attackCd=Math.max(this.attackCd,.5),n.fx.number(new R(this.pos.x,this.y+(this.isWisp?2.2:2),this.pos.z),"!","alert");for(let a of n.enemies)a!==this&&a.field&&!a.aggro&&!a.dead&&Math.hypot(a.pos.x-this.pos.x,a.pos.z-this.pos.z)<6&&(a.aggro=!0);return!0}if(this.vel.lengthSq()>.001&&(n.world.move(this.pos,this.vel.x*t,this.vel.z*t,this.moveR),this.vel.multiplyScalar(Math.exp(-9*t))),this.home||(this.home=this.pos.clone()),this.wanderT=(this.wanderT??T(.5,2))-t,this.wanderT<=0){this.wanderT=T(2,5);let a=Math.random()*Math.PI*2,l=Math.random()*4;this.wanderTo=Math.random()<.35?null:{x:this.home.x+Math.cos(a)*l,z:this.home.z+Math.sin(a)*l}}let o=0;if(this.wanderTo){let a=this.wanderTo.x-this.pos.x,l=this.wanderTo.z-this.pos.z,c=Math.hypot(a,l);if(c>.3){let h=this.T.speed*.35;n.world.move(this.pos,a/c*h*t,l/c*h*t,this.moveR)||(this.wanderTo=null),this.yaw=an(this.yaw,Math.atan2(a,l),5,t),o=h}else this.wanderTo=null}if(this.isWisp&&!this.rig){let a=n.world.heightAt(this.pos.x,this.pos.z);this.y=Et(this.y,a,1-Math.exp(-6*t)),this.root.position.set(this.pos.x,this.y+1.3+Math.sin(n.time*3+this.strafe)*.15,this.pos.z),this.root.rotation.y=this.yaw,this.root.scale.setScalar(1),this.coreMat.color.set(this.flashT>0?"#ffffff":this.T.pal.idle)}else if(this.isWisp){let a=n.world.heightAt(this.pos.x,this.pos.z);this.y=Et(this.y,a,1-Math.exp(-6*t)),this.root.position.set(this.pos.x,this.y,this.pos.z),this.root.rotation.y=this.yaw,this.rig.animate(t,{speed:o>0?1:0}),this.rig.setFlash(this.flashT>0?.9:0)}else this.T.hop&&(this.hop=0),this.place(t,o);return!0}chaseMove(t,e,i,n,s){let o=this.game.world,a=this.game.player,l=this.isBoss?1:0;this.losT=(this.losT??0)-t,this.losT<=0&&(this.losT=.2+Math.random()*.1,this.los=Math.abs(a.pos.y-this.pos.y)<.5&&o.clearLine(this.pos.x,this.pos.z,a.pos.x,a.pos.z,this.moveR));let c,h;if(this.los||s<1.2){let x=s>3?.35*this.strafe:0,m=i/s,g=n/s;c=m-g*x,h=g+m*x;let v=Math.hypot(c,h);c/=v,h/=v}else{let x=o.navDir(this.pos,l);x?(c=x.x,h=x.z):(c=i/s,h=n/s)}this.unstuckT>0&&(this.unstuckT-=t,c=this.unstuckX,h=this.unstuckZ),this.moveX=this.moveX===void 0?c:this.moveX+(c-this.moveX)*Math.min(1,t*12),this.moveZ=this.moveZ===void 0?h:this.moveZ+(h-this.moveZ)*Math.min(1,t*12);let d=Math.hypot(this.moveX,this.moveZ)||1,f=this.pos.x,u=this.pos.z;o.move(this.pos,this.moveX/d*e*t,this.moveZ/d*e*t,this.moveR);let p=Math.hypot(this.pos.x-f,this.pos.z-u);if(this.stuckAcc=p<e*t*.35?(this.stuckAcc||0)+t:0,this.stuckAcc>.35){this.stuckAcc=0,this.los=!1,this.losT=.8,this.strafe*=-1;let x=Math.atan2(h,c)+(Math.random()<.5?1:-1)*(Math.PI/2+Math.random()*.5);this.unstuckX=Math.cos(x),this.unstuckZ=Math.sin(x),this.unstuckT=.3}return t>0?p/t:0}place(t,e,i=null){let s=this.game.world.heightAt(this.pos.x,this.pos.z);this.y=Et(this.y,s,1-Math.exp(-18*t)),this.pos.y=s;let o=this.rig;o.root.position.set(this.pos.x,this.y+(this.jumpY||0),this.pos.z),o.root.rotation.y=this.yaw,o.animate(t,{speed:e,hop:this.hop||0,attack:i,hurt:this.frozenT>0?.3:this.hurtT>0?Math.min(1,this.hurtT/.25):0}),this.flashT>0?o.setFlash(.9):this.state==="windup"&&!this.isBoss?o.setFlash(Math.floor(this.st*14)%2?.35:0):this.state==="windup"||this.state==="leapPrep"?o.setFlash(Math.floor(this.st*10)%2?.25:0):o.setFlash(0)}dispose(){this.clearTele(),this.ice&&(this.game.scene.remove(this.ice),this.ice=null),this.game.scene.remove(this.root)}},ws=class{constructor(t,e,i,n,s,o,a){this.game=t,this.kind=e,this.rig=e==="guard"?_p():e==="herb"?mf({robe:"#c8b890",sleeve:"#c8b890",cuff:"#5a7a3a",skirt:"#6a5a3a",pants:"#6a5a3a",hair:"#3a2a20"}):e==="hermit"?oc({robe:"#c8c8c0",sleeve:"#c8c8c0",cuff:"#4a4a5a",belt:"#4a4a5a",pants:"#5a5a62",hair:"#e8e8e8"}):mf(),this.pos=new R(i,t.world.heightAt(i,n),n),this.baseYaw=s,this.yaw=s,this.name=o,this.lines=a,this.radius=.4,t.scene.add(this.rig.root),t.world.circles.push({x:i,z:n,r:.4,y:this.pos.y})}update(t){let e=this.game.player,n=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<4?Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z):this.baseYaw;this.yaw=an(this.yaw,n,4,t),this.rig.root.position.copy(this.pos),this.rig.root.rotation.y=this.yaw,this.rig.animate(t,{speed:0})}},cc=class{constructor(t,e){this.game=t;let i=this.root=new Lt,n=Pt({color:new ct("#8a5a3a")}),s=Pt({color:new ct("#e8d8b8")}),o=Pt({color:new ct("#2a2020")}),a=new ot(new Jt(.1,6,5),n);a.scale.set(.9,.8,1.2),a.position.y=.1;let l=new ot(new Jt(.075,6,4),s);l.position.set(0,.07,.03);let c=new ot(new Jt(.065,6,5),n);c.position.set(0,.19,.08);let h=new ot(new ne(.02,.05,4),o);h.rotation.x=Math.PI/2,h.position.set(0,.18,.15);let d=new ot(new ut(.06,.015,.1),o);d.position.set(0,.12,-.13),d.rotation.x=-.4,this.wings=[];for(let f of[-1,1]){let u=new Lt;u.position.set(f*.07,.13,0);let p=new ot(new ut(.14,.015,.1),n);p.position.x=f*.06,u.add(p),i.add(u),this.wings.push(u)}this.head=c,i.add(a,l,c,h,d),i.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),t.scene.add(i),this.pos=e.clone(),this.yaw=T(0,Math.PI*2),this.state="idle",this.t=T(0,2),this.hopY=0,this.vel=new R}update(t){let e=this.game,i=e.player;this.t-=t;let n=Math.hypot(i.pos.x-this.pos.x,i.pos.z-this.pos.z);if(this.state!=="fly"&&this.state!=="gone"&&(n<2.6||e.alarm>0)){this.state="fly";let s=this.pos.x-i.pos.x,o=this.pos.z-i.pos.z,a=Math.hypot(s,o)||1;this.vel.set(s/a*4+T(-1,1),4.5,o/a*4+T(-1,1)),this.yaw=Math.atan2(this.vel.x,this.vel.z)}if(this.state==="idle")this.head.position.y=.19-(Math.sin(e.time*9+this.yaw*10)>.6?.05:0),this.t<=0&&(this.t=T(.4,1.6),Math.random()<.6&&(this.state="hop",this.hopT=0,this.yaw+=T(-1.2,1.2)));else if(this.state==="hop"){this.hopT+=t;let s=this.hopT/.2;this.hopY=Math.sin(Math.min(1,s)*Math.PI)*.12;let o=this.pos.x+Math.sin(this.yaw)*t*1.2,a=this.pos.z+Math.cos(this.yaw)*t*1.2;e.world.isBlocked(o,a,.1,this.pos.y)||(this.pos.x=o,this.pos.z=a),s>=1&&(this.state="idle",this.hopY=0)}else if(this.state==="fly"){this.pos.addScaledVector(this.vel,t),this.vel.y+=t*1.5;for(let s of this.wings)s.rotation.z=Math.sin(e.time*50)*1.1*(s.position.x>0?1:-1);this.pos.y>14&&(this.state="gone",this.root.visible=!1,this.t=T(8,16))}else if(this.state==="gone"&&this.t<=0&&e.alarm<=0){let s=e.world.randomWalkable(i.pos.x,i.pos.z,8,15);if(s){this.pos.copy(s),this.state="idle",this.root.visible=!0;for(let o of this.wings)o.rotation.z=0}else this.t=2}(this.state==="idle"||this.state==="hop")&&(this.pos.y=e.world.heightAt(this.pos.x,this.pos.z)),this.root.position.set(this.pos.x,this.pos.y+this.hopY,this.pos.z),this.root.rotation.y=this.yaw}};var hc=class{constructor(t){this.game=t;let e=i=>document.getElementById(i);this.el={hud:e("hud"),hpFill:e("hp-fill"),hpLag:e("hp-lag"),hpText:e("hp-text"),quest:e("quest-text"),questTitle:e("quest-title"),banner:e("banner"),bannerMain:e("banner-main"),bannerSub:e("banner-sub"),dialog:e("dialog"),dName:e("dialog-name"),dText:e("dialog-text"),prompt:e("prompt"),boss:e("boss"),bossFill:e("boss-fill"),bossLag:e("boss-lag"),bossName:e("boss-name"),bars:e("hpbars"),title:e("title"),over:e("gameover"),combo:e("combo"),comboN:e("combo-n"),kills:e("kills"),best:e("best"),toast:e("toast"),flash:e("flash")},this.hpLag=1,this.bossLag=1,this.dialogState=null,this.bars=new Map,this.bannerT=0,this.toastT=0}showHud(t){this.el.hud.classList.toggle("hidden",!t)}setClass(t,e=this.game.player){Dv(document.getElementById("portrait-cv"),t.id),document.getElementById("hero-name").innerHTML=`${t.title} <b>${t.name}</b><span class="lv">Lv.${e?.level??1}</span>`,this.refreshBag();let i=this.game.progressOf?this.game.progressOf(t.id):null;for(let n of["atk","dash","skill","skill2","skill3"]){let s={skill:1,skill2:2,skill3:3}[n],o=s&&i?jl(i,t.id,e?.level??1,s):null,a=o?Jn[t.id][s][o].short+An[Ao(i,t.id,e?.level??1,s)]:t.labels[n];document.getElementById("sk-"+n).textContent=a,document.querySelectorAll(".lbl-"+n).forEach(l=>l.textContent=a)}document.querySelector("#combo span").textContent=t.hitWord}setQuest(t,e){let i=t+"|"+e;if(i===this.questKey)return;let n=!this.questKey||this.questKey.split("|")[0]!==t;if(this.questKey=i,this.el.questTitle.textContent=t,!n){this.el.quest.innerHTML=e;return}this.el.quest.innerHTML=e,this.el.quest.parentElement.classList.remove("pulse"),this.el.quest.parentElement.offsetWidth,this.el.quest.parentElement.classList.add("pulse")}banner(t,e="",i=2.6,n=""){this.el.bannerMain.textContent=t,this.el.bannerSub.textContent=e,this.el.banner.className="show "+n,this.bannerT=i}slots(t){return this.slotCache=this.slotCache||{},this.slotCache[t]||(this.slotCache[t]=[...document.querySelectorAll(`[data-slot="${t}"]`)].map(e=>({el:e,cd:e.querySelector(".cd"),t:e.querySelector(".cdt")}))),this.slotCache[t]}setCd(t,e,i){this.cdState=this.cdState||{};let n=e>.02,s=n?e>=1?String(Math.ceil(e)):e.toFixed(1):"",o=n?(e/i*100).toFixed(1)+"%":"0%",a=this.cdState[t];for(let l of this.slots(t))l.cd.style.setProperty("--p",o),l.t.textContent!==s&&(l.t.textContent=s),l.el.classList.toggle("cooling",n),a&&!n&&(l.el.classList.remove("ready"),l.el.offsetWidth,l.el.classList.add("ready"));this.cdState[t]=n}setLock(t,e){for(let i of this.slots(t))if(i.el.classList.toggle("locked",!!e),e){i.cd.style.setProperty("--p","0%");let n=`Lv${e}`;i.t.textContent!==n&&(i.t.textContent=n),i.el.classList.remove("cooling")}else i.t.textContent.startsWith("Lv")&&(i.t.textContent="")}showSkills(t){document.getElementById("skills").classList.toggle("show",t),t&&this.refreshSkills()}refreshSkills(){let t=this.game,e=t.player,i=document.getElementById("skills-body");if(!i||!document.getElementById("skills").classList.contains("show"))return;let n=t.progressOf(e.cls),s=Ro(n,e.level);i.innerHTML=`<div class="evo-pts">\uC218\uB828\uC810 <b>${s}</b> <small>\uB808\uBCA8\uC774 \uC624\uB97C \uB54C\uB9C8\uB2E4 1\uC810 \xB7 \uB2E8\uACC4\uB9C8\uB2E4 1\uC810</small></div>`;let o={1:"K",2:"L",3:"I"};for(let a of[1,2,3]){let l=Jn[e.cls][a],c=n.rank?.[a]||(n.evo?.[a]?1:0),h=n.evo?.[a],d=c<5?l.lv[c]:null,f=h&&d&&e.level>=d&&s>0,u=document.createElement("div");u.className="evo-row"+(e.level<l.lv[0]?" locked":"");let p=Array.from({length:5},(g,v)=>`<i class="${v<c?"on":""}">${An[v+1]}</i>`).join(""),x;e.level<l.lv[0]?x=`Lv.${l.lv[0]}\uC5D0 \uC218\uB828 \uAC00\uB2A5 (\uC9C0\uAE08 Lv.${e.level})`:h?d?x=`\uB2E4\uC74C \uB2E8\uACC4 ${An[c+1]}: Lv.${d}`:x='<b style="color:#ffd76a">\uAC01\uC131 \uC644\uB8CC</b>':x=s>0?'<b style="color:#ffd76a">\uC218\uB828 \uAC00\uB2A5!</b> \uAC08\uB798\uB97C \uACE0\uB974\uC138\uC694':"\uC218\uB828\uC810\uC774 \uC5C6\uC5B4\uC694",u.innerHTML=`<div class="evo-head"><span class="key">${o[a]}</span>${l.base}<span class="pips">${p}</span><small>${x}</small></div>`;let m=document.createElement("div");m.className="evo-opts";for(let g of["a","b"]){let v=l[g],b=document.createElement("div"),y=h===g;b.className="evo-opt"+(y?" on":"");let w=[[1,v.desc],[2,"\uD53C\uD574 \uC99D\uAC00 \xB7 \uC7AC\uC0AC\uC6A9 \uB2E8\uCD95"],[3,"\uAC15\uD654: "+v.r3],[4,"\uD53C\uD574 \uC99D\uAC00 \xB7 \uC7AC\uC0AC\uC6A9 \uB2E8\uCD95"],[5,v.r5]].map(([E,C])=>`<li class="${y&&c>=E?"got":""}"><em>${An[E]}</em> ${C}</li>`).join("");b.innerHTML=`<b>${v.name}</b><ul>${w}</ul>`,e.level>=l.lv[0]&&b.addEventListener("click",E=>{E.stopPropagation(),t.chooseEvo(a,g)}),m.append(b)}if(u.append(m),h&&d){let g=document.createElement("button");g.className="evo-train"+(f?"":" off"),g.textContent=f?`${l[h].name} ${An[c+1]}\uB2E8\uACC4 \uC218\uB828 (\uC218\uB828\uC810 1)`:e.level<d?`${An[c+1]}\uB2E8\uACC4\uB294 Lv.${d}\uBD80\uD130`:"\uC218\uB828\uC810\uC774 \uBD80\uC871\uD574\uC694",f&&g.addEventListener("click",v=>{v.stopPropagation(),t.trainEvo(a)}),u.append(g)}i.append(u)}}showBag(t){document.getElementById("bag").classList.toggle("show",t),t&&this.refreshBag()}itemRow(t,e,i){let n=ii(t),s=document.createElement("div");s.className="it "+e;let o=document.createElement("canvas");o.width=o.height=16,ff(o,t);let a=document.createElement("div");return a.innerHTML=`<span style="color:${$e[n.tier].color}">${n.name}</span><small>${$e[n.tier].name} \xB7 ${ap(n,!e.includes("locked-it"))}</small>`,s.append(o,a),i&&s.addEventListener("click",l=>{l.stopPropagation(),i()}),s}refreshBag(){let t=this.game;if(!t||!t.player||!document.getElementById("bag").classList.contains("show"))return;let e=t.player,i=t.progressOf(e.cls),n=e.gear||{},s=p=>`${((p||0)*100).toFixed(1)}%`,o=[["\uB808\uBCA8",`Lv.${e.level} (${Math.floor(e.exp)}/${Lo(e.level)})`],["\uCD5C\uB300 \uCCB4\uB825",e.maxHp],["\uACF5\uACA9\uB825",`\xD7${e.atkMul.toFixed(2)}`],["\uBC1B\uB294 \uD53C\uD574",`-${Math.round(e.def*100)}%`],["\uCE58\uBA85\uD0C0 \uD655\uB960",`+${s(n.crit)}`],["\uCE58\uBA85\uD0C0 \uD53C\uD574",`+${Math.round((n.critDmg||0)*100)}%`],["\uC774\uB3D9 \uC18D\uB3C4",`+${s(n.spd)}`],["\uC2A4\uD0AC \uC7AC\uC0AC\uC6A9",`-${s(n.cdr)}`],["\uD761\uD608",s(n.ls)],["\uCCB4\uB825 \uD68C\uBCF5",`+${(n.regen||0).toFixed(1)}/\uCD08`],["\uACBD\uD5D8\uCE58",`+${Math.round((n.exp||0)*100)}%`]];document.getElementById("bag-stats").innerHTML=`<div style="color:#ffd76a;margin-bottom:2px">${e.cfg.title} ${e.cfg.name}</div>`+o.map(([p,x])=>`<div class="st"><span>${p}</span><b>${x}</b></div>`).join("");let a=document.getElementById("bag-eq");a.innerHTML="";let l=(p,x,m,g,v,b)=>{let y=document.createElement("div");y.className="eqs"+(b?" sel":"");let w=document.createElement("canvas");w.width=w.height=16,x&&x(w),y.append(w),y.insertAdjacentHTML("beforeend",`<span class="sl">${p}</span>`+(m?`<span style="color:${g}">${m}</span>`:'<span class="empty">\uBE44\uC5B4 \uC788\uC74C</span>')),v&&y.addEventListener("click",E=>{E.stopPropagation(),v()}),a.append(y)};for(let[p,x]of[["\uBB34\uAE30",i.weapon],["\uAC11\uC637",i.outfit]]){let m=ii(x);l(p,g=>ff(g,x),m?.name,$e[m?.tier??0].color,()=>{this.tab("main")})}for(let p of tc){let x=t.gearInSlot(p);l(ec[p],x?m=>nc(m,x):null,x?.name,x?$e[x.tier].color:"",x?()=>{this.pick=x.uid,this.pickSlot=p,this.tab("gear"),this.refreshBag()}:null,x&&this.pick===x.uid)}let c=t.gear.filter(p=>!Ap(t,p));document.getElementById("gear-count").textContent=`${c.length}/${ic}`;let h=document.getElementById("bag-gear");h.innerHTML="";let d=[...t.gear].sort((p,x)=>t.isEquipped(x)-t.isEquipped(p)||x.tier-p.tier||dn(x)-dn(p));for(let p of d){let x=document.createElement("div"),m=t.isEquipped(p),g=!m&&Ap(t,p);x.className="it"+(m?" worn":"")+(this.pick===p.uid?" pick":"");let v=document.createElement("canvas");v.width=v.height=16,nc(v,p);let b=t.gearInSlot(p.kind==="ring"?t.worseRingSlot():p.kind),y=!m&&dn(p)>dn(b),w=document.createElement("div");w.innerHTML=`<span style="color:${$e[p.tier].color}">${p.name}</span><small>${$e[p.tier].name} ${ec[p.kind]}${g?" \xB7 \uB2E4\uB978 \uC9C1\uC5C5 \uCC29\uC6A9":""}</small>`,x.append(v,w),y&&x.insertAdjacentHTML("beforeend",'<span class="better">\u25B2</span>'),x.addEventListener("click",E=>{E.stopPropagation(),this.pick=p.uid,this.pickSlot=null,this.refreshBag()}),h.append(x)}this.gearDetail();let f=document.getElementById("bag-weapons"),u=document.getElementById("bag-outfits");f.innerHTML="",u.innerHTML="";for(let p of[e.cls,...Object.keys(Tn).filter(x=>x!==e.cls)])for(let x of Tn[p]){if(!t.inv.has(x.id)){p===e.cls&&f.append(this.itemRow(x.id,"locked-it"));continue}let m=p===e.cls;f.append(this.itemRow(x.id,(i.weapon===x.id?"on":"")+(m?"":" other"),m?()=>t.equipItem(x.id):null))}for(let p of[...Kl].sort((x,m)=>x.tier-m.tier)){if(!t.inv.has(p.id)){u.append(this.itemRow(p.id,"locked-it"));continue}u.append(this.itemRow(p.id,i.outfit===p.id?"on":"",()=>t.equipItem(p.id)))}}tab(t){document.querySelectorAll(".bag-tabs button").forEach(e=>e.classList.toggle("on",e.dataset.tab===t)),document.getElementById("tab-gear").classList.toggle("hidden",t!=="gear"),document.getElementById("tab-main").classList.toggle("hidden",t!=="main"),document.getElementById("gear-detail").classList.toggle("hidden",t!=="gear")}gearDetail(){let t=this.game,e=document.getElementById("gear-detail"),i=this.pick&&t.gearByUid(this.pick);if(!i){e.innerHTML="";return}let n=t.isEquipped(i),s=n?Object.entries(t.eqOf()).find(([,c])=>c===i.uid)[0]:i.kind==="ring"?t.worseRingSlot():i.kind,o=n?null:t.gearInSlot(s),a=c=>xp(c).join("<br>"),l="";o&&(l=[...new Set([...Object.keys(i.stats),...Object.keys(o.stats)])].map(h=>{let d=(i.stats[h]||0)-(o.stats[h]||0);return Math.abs(d)<1e-6?"":`<span class="${d>0?"up":"down"}">${Ms[h].name} ${d>0?"\u25B2":"\u25BC"} ${Ms[h].fmt(Math.abs(d)).replace(/^[+-]/,"")}</span>`}).filter(Boolean).join("<br>")),e.innerHTML=`<div class="gd"><div class="gd-top"><canvas width="16" height="16"></canvas><div><div class="gd-name" style="color:${$e[i.tier].color}">${i.name}</div><small>${$e[i.tier].name} ${ec[i.kind]} \xB7 \uC544\uC774\uD15C \uB808\uBCA8 ${i.lv}${n?" \xB7 \uCC29\uC6A9 \uC911":""}</small></div></div><div class="cmp"><div>${a(i)}</div>${o?`<div><small>\uC9C0\uAE08 \uB080 ${o.name}\uACFC \uBE44\uAD50</small><br>${l||"<small>\uCC28\uC774 \uC5C6\uC74C</small>"}</div>`:""}</div><div class="btns">${n?'<button data-a="off" class="sub">\uBC97\uAE30</button>':`<button data-a="on">${o?"\uBC14\uAFD4 \uB07C\uAE30":"\uCC29\uC6A9"}</button>`}${n?"":`<button data-a="salvage" class="sub">\uBD84\uD574 (\uACBD\uD5D8\uCE58 +${Io(i)})</button>`}</div></div>`,nc(e.querySelector("canvas"),i),e.querySelectorAll("button").forEach(c=>c.addEventListener("click",h=>{h.stopPropagation();let d=c.dataset.a;d==="on"?t.equipGear(i.uid,i.kind==="ring"?s:null):d==="off"?t.unequipGear(s):d==="salvage"&&(this.pick=null,t.salvageGear([i.uid]))}))}denied(t){for(let e of this.slots(t))e.el.classList.remove("denied"),e.el.offsetWidth,e.el.classList.add("denied")}saveMark(){let t=document.getElementById("savemark");t&&(t.classList.remove("show"),t.offsetWidth,t.classList.add("show"))}toast(t,e=2.2){this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e}flash(t,e){let i=this.el.flash;i.style.transition="none",i.style.background=t,i.style.opacity=String(e),requestAnimationFrame(()=>{i.style.transition="opacity 0.35s",i.style.opacity="0"})}dialog(t,e,i){this.dialogState={name:t,lines:e,i:0,shown:0,onDone:i,acc:0},this.el.dialog.classList.add("show"),this.el.dName.textContent=t,this.el.dText.textContent=""}get inDialog(){return!!this.dialogState}advance(){let t=this.dialogState;if(!t)return;let e=t.lines[t.i];if(t.shown<e.length){t.shown=e.length,this.el.dText.textContent=e;return}t.i++,t.shown=0,t.acc=0,t.i>=t.lines.length&&(this.el.dialog.classList.remove("show"),this.dialogState=null,t.onDone&&t.onDone())}setBoss(t){this.bossEnemy=t,this.el.boss.classList.toggle("show",!!t),t&&(this.el.bossName.textContent=t.name||"\uB3C4\uAE68\uBE44 \uB300\uC655",this.bossLag=1)}update(t){let e=this.game,i=e.player,n=this.el,s=i.hp/i.maxHp;this.hpLag=Math.max(s,this.hpLag-t*.5),n.hpFill.style.width=(s*100).toFixed(1)+"%",n.hpLag.style.width=(this.hpLag*100).toFixed(1)+"%",n.hpText.textContent=`${Math.ceil(i.hp)} / ${i.maxHp}`,n.hpFill.classList.toggle("low",s<.3);let o=Lo(i.level);document.getElementById("exp-fill").style.width=(i.exp/o*100).toFixed(1)+"%";let a=`EXP ${Math.floor(i.exp)} / ${o}`,l=document.getElementById("exp-text");l.textContent!==a&&(l.textContent=a),document.getElementById("bag-dot").classList.toggle("hidden",!this.newItem),this.setCd("dash",i.dashCd,i.dashMax||.5),this.setCd("skill",i.skillCd,i.skillMax*e.skillCdMul(i,1));for(let u of[2,3]){let p="skill"+u;i.level<Rn[u]?this.setLock(p,Rn[u]):(this.setLock(p,0),this.setCd(p,(u===2?i.cd2:i.cd3)||0,(u===2?i.cd2Max:i.cd3Max)*e.skillCdMul(i,u)))}if(n.kills.textContent=e.kills,n.best&&(n.best.textContent=e.bestCombo),this.bossEnemy){let u=this.bossEnemy,p=Math.max(0,u.hp/u.maxHp);this.bossLag=Math.max(p,this.bossLag-t*.4),n.bossFill.style.width=(p*100).toFixed(1)+"%",n.bossLag.style.width=(this.bossLag*100).toFixed(1)+"%",u.dead&&this.bossLag<=.001&&this.setBoss(null)}this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&n.banner.classList.remove("show")),this.toastT>0&&(this.toastT-=t,this.toastT<=0&&n.toast.classList.remove("show")),e.hitCombo>=2&&e.time-e.lastHitTime<2?(n.combo.classList.add("show"),n.comboN.textContent=e.hitCombo):n.combo.classList.remove("show");let c=this.dialogState;if(c){let u=c.lines[c.i];if(c.shown<u.length){c.acc+=t*38;let p=c.shown;c.shown=Math.min(u.length,Math.floor(c.acc)),c.shown>p&&c.shown%2===0&&e.audio.play("talk"),n.dText.textContent=u.slice(0,c.shown)}n.dialog.classList.toggle("done",c.shown>=u.length)}let h=e.pixel.pixelSize,d=new Set;for(let u of e.enemies){if(u.type==="boss"||u.dead||u.spawning||u.hp>=u.maxHp)continue;d.add(u);let p=this.bars.get(u);p||(p=document.createElement("div"),p.className="ebar",p.innerHTML="<i></i>",n.bars.appendChild(p),this.bars.set(u,p));let x=u.type==="wisp"?2:1.75,m=e.pixel.project({x:u.pos.x,y:u.y+x,z:u.pos.z,isVector3:!0,clone(){return this}});p.style.transform=`translate(${Math.round(m.x/h)*h}px, ${Math.round(m.y/h)*h}px)`,p.firstChild.style.width=u.hp/u.maxHp*100+"%"}for(let[u,p]of this.bars)d.has(u)||(p.remove(),this.bars.delete(u));let f=e.nearInteract;if(f&&!this.inDialog&&e.state==="play"){let u=e.pixel.project(f.promptPos);n.prompt.style.transform=`translate(${Math.round(u.x/h)*h}px, ${Math.round(u.y/h)*h}px)`,n.prompt.innerHTML=`<b>E</b>${f.label}`,n.prompt.classList.add("show")}else n.prompt.classList.remove("show")}},Tp={sword:{bg:"#3a4878",rows:["....................",".......hhhhhh.......",".....hhhhhhhhhh.....","....hhhhhhhhhhhh....","...hhhhhhhhhhhhhh...","...rrrrrrrrrrrrrr...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","...hsseessssseessh..","...hsseWsssseeWsh...","...hsseessssseessh..","...hspssssssssspsh..","....ssssssmmsssss...",".....ssssssssssss...","......ssssssssss....",".......cwwwwwwc.....",".....wwwcwwwwcwww...","....wwwwwcwwcwwwwww.","...wwwwwwwccwwwwwwww"],col:{h:"#2a2024",r:"#c8302c",s:"#f6d6b6",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",w:"#eeeae0",c:"#2e4f8f"}},mage:{bg:"#4a3a78",rows:[".......kkkkkk.......",".......kkkkkk.......",".......kkkkkk.......",".......vvvvvv.......","kkkkkkkkkkkkkkkkkkkk","...hhhhhhhhhhhhhh...","...hhhhsssshhhhhh...","...hhsssssssssshh...","...hssssssssssssh...","..bhsseessssseesshb.","...hsseWsssseeWsh...","..bhsseessssseesshb.","...hspssssssssspsh..","..b.ssssssmmsssss.b.",".....ssssssssssss...","......ssssssssss....",".......gnnnnnng.....",".....nnngnnnngnnn...","....nnnnngnngnnnnnn.","...nnnnnnnggnnnnnnnn"],col:{k:"#16141c",v:"#6a5ad8",h:"#1e1a24",s:"#f4d4b2",e:"#1b1416",W:"#ffffff",p:"#f0a0a0",m:"#b85a50",n:"#3a3a7a",g:"#e0b040",b:"#e0a84a"}},elf:{bg:"#2e5a3a",rows:["....................",".......hhhhhh.......",".....hhhhhhhhhhff...","....hhhhhhhhhhhfFf..","...hhhhhhhhhhhhhf...","...hhhhhhhhhhhhhh...","...hhhhsssshhhhhh...","..hhhsssssssssshhh..","s.hhssssssssssssh.s.","sshhsseessssseesshss","..hhsseWsssseeWshh..","..hhsseessssseesshh.","..hhspssssssssspshh.","..hh.ssssssmmssss.hh","..hh..ssssssssss..hh","..hh...ssssssss...hh","..hh...lgggggl....hh","..h..gggglgglggg...h","....ggggggllgggggg..","...gggggggggggggggg."],col:{h:"#e8e4c8",s:"#fbe2cc",e:"#2a6a4a",W:"#ffffff",p:"#f8a8b8",m:"#c86a60",g:"#5aa84e",l:"#bfe07a",f:"#ff9ac0",F:"#fff0a0"}}};function Ap(r,t){return["sword","mage","elf"].some(e=>r.isEquipped(t,e))}function Dv(r,t="sword"){if(!r)return;let e=Tp[t]||Tp.sword,i=r.getContext("2d");i.fillStyle=e.bg,i.fillRect(0,0,20,20),e.rows.forEach((n,s)=>[...n].forEach((o,a)=>{e.col[o]&&(i.fillStyle=e.col[o],i.fillRect(a,s,1,1))}))}var xf="dot3d-palace-save-v1";function Rp(){try{let r=localStorage.getItem(xf);if(!r)return null;let t=JSON.parse(r);return t&&t.v===1?t:null}catch{return null}}function Cp(r){try{return localStorage.setItem(xf,JSON.stringify({v:1,savedAt:Date.now(),...r})),!0}catch{return!1}}function Ip(){try{localStorage.removeItem(xf)}catch{}}var pn=48,Cn=72,kv={sword:"hero",mage:"mage",elf:"elf"},fc=new Uint8ClampedArray(256);for(let r=0;r<256;r++){let t=r/255;fc[r]=Math.round(255*(t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055))}var dc=class{constructor(t){this.game=t,this.renderer=t.pixel.renderer,this.target=new Je(pn,Cn,{magFilter:ae,minFilter:ae}),this.buf=new Uint8Array(pn*Cn*4),this.scene=new wn;let e=this.camera=new Gi(-.78,.78,1.17,-1.17,.1,20);e.position.set(0,1.02+6*.18,6),e.lookAt(0,1.02,0);let i=new Vn("#fff0d6",2.6);i.position.set(2,4,3),this.scene.add(i,new fs("#dfe9ff","#5a4a3a",1.2));let n=new Vn("#8ab0ff",1.2);n.position.set(-3,2,-3),this.scene.add(n),this.cards=[...document.querySelectorAll("#classes .cls")].map(s=>{let o=s.querySelector("canvas");return o.width=pn,o.height=Cn,o.classList.add("full"),{el:s,cls:s.dataset.cls,ctx:o.getContext("2d"),img:o.getContext("2d").createImageData(pn,Cn),rig:null,yaw:.5,t:Math.random()*5}}),this.rebuild()}rebuild(){for(let t of this.cards){t.rig&&this.scene.remove(t.rig.root);let e=this.game.progressOf(t.cls),i=ii(e.weapon),n=ii(e.outfit),s={};for(let o of this.game.equippedGear(t.cls))o.kind!=="ring"&&(s[o.kind]=Co(o));t.rig=un[t.cls].make({wstyle:i?.style,...rc(kv[t.cls],n),...sc(s)}),t.rig.root.visible=!1,this.scene.add(t.rig.root)}}update(t){let e=this.renderer,i=e.getRenderTarget(),n=e.getClearColor(new ct),s=e.getClearAlpha();e.setClearColor(0,0);for(let o of this.cards){let a=o.el.classList.contains("sel");o.t+=t,o.yaw=a?o.yaw+t*.9:o.yaw+(.5-o.yaw)*Math.min(1,t*3);let l=o.rig;l.root.visible=!0,l.root.rotation.y=o.yaw;let c=o.t%4,h=a&&c>3?{t:c-3,kind:o.cls==="sword"?0:o.cls==="mage"?10:20}:null;l.animate(t,{speed:0,attack:h,sheathing:0,dash:!1,hurt:0,dead:!1}),e.setRenderTarget(this.target),e.clear(),e.render(this.scene,this.camera),e.readRenderTargetPixels(this.target,0,0,pn,Cn,this.buf),l.root.visible=!1,this.blit(o,a)}e.setRenderTarget(i),e.setClearColor(n,s)}blit(t,e){let i=this.buf,n=t.img.data,s=(a,l)=>a<0||l<0||a>=pn||l>=Cn?0:i[((Cn-1-l)*pn+a)*4+3],o=e?[26,18,10]:[10,8,16];for(let a=0;a<Cn;a++)for(let l=0;l<pn;l++){let c=(a*pn+l)*4,h=((Cn-1-a)*pn+l)*4;i[h+3]>0?(n[c]=fc[i[h]],n[c+1]=fc[i[h+1]],n[c+2]=fc[i[h+2]],n[c+3]=255):s(l-1,a)||s(l+1,a)||s(l,a-1)||s(l,a+1)?(n[c]=o[0],n[c+1]=o[1],n[c+2]=o[2],n[c+3]=255):n[c+3]=0}t.ctx.putImageData(t.img,0,0)}};var Pp=[{title:"\uC218\uBB38\uC7A5\uC744 \uCC3E\uC544\uC11C",type:"talk",npc:"guard",desc:"\uC67C\uCABD \uBD81 \uC606\uC758 <b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uB9D0\uC744 \uAC78\uC790",lines:r=>[`\uC5B4\uC774, \uAC70\uAE30 \uC80A\uC740 ${r.player.cfg.title}! \uB9C8\uCE68 \uC798 \uC654\uC18C.`,"\uD574\uB9CC \uC9C0\uBA74 \uC774 \uAD81\uAD90 \uB9C8\uB2F9\uC5D0 \uB3C4\uAE68\uBE44 \uB188\uB4E4\uC774 \uB5BC\uB85C \uBAB0\uB824\uC640 \uB09C\uC7A5\uD310\uC744 \uCE5C\uB2E4\uC624.","\uC800\uAE30 \uC800 \uD070 \uBD81\uC774 \uBCF4\uC774\uC2DC\uC624? \uBD81\uC744 \uB465\u2014 \uD558\uACE0 \uC6B8\uB9AC\uBA74 \uC228\uC5B4 \uC788\uB358 \uB188\uB4E4\uC774 \uC8C4\uB2E4 \uD280\uC5B4\uB098\uC62C \uAC8C\uC694.","\uB188\uB4E4\uC744 \uBAA8\uC870\uB9AC \uD63C\uCB50\uB0B4 \uC8FC\uC2DC\uC624! \uB9C8\uC9C0\uB9C9\uC5D4 \uB3C4\uAE68\uBE44 \uB300\uC655\uC774 \uB098\uC628\uB2E4\uB294 \uC18C\uBB38\uC774 \uC788\uC73C\uB2C8 \uC870\uC2EC\uD558\uACE0.","(\uBD81 \uC55E\uC5D0\uC11C E \uD0A4, \uD639\uC740 \uAC80\uC73C\uB85C \uBD81\uC744 \uBCA0\uC5B4 \uC6B8\uB9AC\uC138\uC694)"]},{title:"\uB3C4\uAE68\uBE44 \uC57C\uD589",type:"wave",region:"palace",desc:"<b>\uD070 \uBD81</b>\uC744 \uC6B8\uB824 \uB3C4\uAE68\uBE44\uB4E4\uC744 \uBB3C\uB9AC\uCE58\uC790",reward:{exp:60}},{title:"\uB0A8\uBB38\uC774 \uC5F4\uB9AC\uB2E4",type:"talk",npc:"guard",desc:"<b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uB3CC\uC544\uAC00 \uC54C\uB9AC\uC790",lines:()=>["\uD5C8\uD5C8, \uB300\uC655\uAE4C\uC9C0 \uCAD3\uC544\uB0B4\uB2E4\uB2C8! \uC774 \uAD81\uC758 \uC740\uC778\uC774\uC2DC\uAD6C\uB824.","\uC2E4\uC740 \uBD80\uD0C1\uC774 \uD558\uB098 \uB354 \uC788\uC18C. \uB0A8\uBB38 \uBC16 \uB300\uC232\uC5D0\uC11C \uC694\uC998 \uC5EC\uC6B0\uB4E4\uC774 \uC0AC\uB78C\uC744 \uD640\uB9B0\uB2E4 \uD558\uC624.","\uB0A8\uBB38\uC744 \uC5F4\uC5B4 \uB4DC\uB9AC\uB9AC\uB2E4. \uC8FD\uB9BC \uC5B4\uADC0\uC5D0 \uC57D\uCD08\uAFBC \uBD84\uC774\uAC00 \uC788\uC73C\uB2C8 \uC0AC\uC815\uC744 \uB4E4\uC5B4 \uBCF4\uC2DC\uC624.","\uC774\uAC74 \uACE0\uB9C8\uC6C0\uC758 \uD45C\uC2DC\uC694. \uC0C9\uB3D9 \uC800\uACE0\uB9AC\uC778\uB370, \uC785\uC73C\uBA74 \uBAB8\uC774 \uD55C\uACB0 \uAC00\uBCBC\uC6B8 \uAC8C\uC694."],gateAfter:"south",reward:{exp:40,item:"ot5"}},{title:"\uC8FD\uB9BC \uC5B4\uADC0",type:"talk",npc:"herb",desc:"\uB0A8\uBB38 \uBC16 <b>\uC8FD\uB9BC \uC5B4\uADC0</b>\uC758 \uC57D\uCD08\uAFBC <b>\uBD84\uC774</b>\uB97C \uCC3E\uC544\uAC00\uC790",lines:()=>["\uC5B4\uBA38\uB098, \uAD81\uC5D0\uC11C \uC624\uC168\uC5B4\uC694? \uC218\uBB38\uC7A5 \uC5B4\uB974\uC2E0\uC774 \uBCF4\uB0B4\uC168\uAD6C\uB098!","\uC694\uC998 \uC232\uC5D0 \uC5EC\uC6B0\uB4E4\uC774 \uB4E4\uB053\uC5B4\uC11C \uC57D\uCD08\uB97C \uCE98 \uC218\uAC00 \uC5C6\uC5B4\uC694.","\uC232\uC744 \uC5B4\uC2AC\uB801\uAC70\uB9AC\uB294 \uC5EC\uC6B0\uB4E4\uC744 \uC880 \uCAD3\uC544 \uC8FC\uC2E4\uB798\uC694? \uAC00\uAE4C\uC774 \uAC00\uBA74 \uB2EC\uB824\uB4DC\uB2C8 \uC870\uC2EC\uD558\uC138\uC694."]},{title:"\uC5EC\uC6B0 \uC0AC\uB0E5",type:"kill",need:{fox:6},desc:"\uC8FD\uB9BC\uC744 \uB3CC\uC544\uB2E4\uB2C8\uB294 <b>\uC5EC\uC6B0</b>\uB97C \uC0AC\uB0E5\uD558\uC790",reward:{exp:90}},{title:"\uC5EC\uC6B0\uBD88 \uAD6C\uC2AC",type:"collect",item:"\uC5EC\uC6B0\uAD6C\uC2AC",from:["foxfire"],chance:.6,n:4,desc:"<b>\uC5EC\uC6B0\uBD88</b>\uC744 \uC4F0\uB7EC\uB728\uB824 <b>\uC5EC\uC6B0\uAD6C\uC2AC</b>\uC744 \uBAA8\uC73C\uC790",reward:{exp:90,item:"cls:2"},startLines:["\uBD84\uC774: \uC5EC\uC6B0\uBD88\uC774 \uD488\uC740 \uAD6C\uC2AC\uC774 \uC788\uC73C\uBA74 \uC11C\uB0AD\uB2F9\uC758 \uBD80\uC815\uC744 \uC53B\uC744 \uC218 \uC788\uB300\uC694.","\uBD84\uC774: \uC232\uC18D \uC8FC\uD669 \uBD88\uB369\uC774\uB4E4\uC744 \uC4F0\uB7EC\uB728\uB824 \uAD6C\uC2AC\uC744 \uB124 \uAC1C\uB9CC \uBAA8\uC544 \uC8FC\uC138\uC694!"]},{title:"\uC11C\uB0AD\uB2F9\uC758 \uBC29\uC6B8",type:"wave",region:"bamboo",desc:"\uC232 \uD55C\uAC00\uC6B4\uB370 <b>\uC11C\uB0AD\uB2F9 \uBC29\uC6B8</b>\uC744 \uC6B8\uB824 <b>\uAD6C\uBBF8\uD638</b>\uB97C \uBD88\uB7EC\uB0B4\uC790",reward:{exp:180},startLines:["\uBD84\uC774: \uAD6C\uC2AC\uC744 \uC11C\uB0AD\uB2F9\uC5D0 \uBC14\uCCE4\uB354\uB2C8 \uBC29\uC6B8\uC774 \uC6B8\uB9B4 \uC900\uBE44\uAC00 \uB410\uC5B4\uC694.","\uBD84\uC774: \uBC29\uC6B8\uC744 \uD754\uB4E4\uBA74 \uCC9C\uB144 \uBB35\uC740 \uAD6C\uBBF8\uD638\uAC00 \uB098\uD0C0\uB0A0 \uAC70\uC608\uC694\u2026 \uBD80\uB514 \uC870\uC2EC\uD558\uC138\uC694!"]},{title:"\uB300\uC232 \uB108\uBA38",type:"talk",npc:"hermit",desc:"\uC8FD\uB9BC \uB0A8\uCABD \uB05D, \uD3D0\uC0AC\uCC30 \uC77C\uC8FC\uBB38 \uC55E\uC758 <b>\uB5A0\uB3CC\uC774 \uB3C4\uC0AC</b>\uB97C \uCC3E\uC544\uAC00\uC790",lines:()=>["\uD5C8\uD5C8, \uAD6C\uBBF8\uD638\uB97C \uBB3C\uB9AC\uCE5C \uC774\uAC00 \uC790\uB124\uB85C\uAD70. \uAE30\uB2E4\uB9AC\uACE0 \uC788\uC5C8\uB124.","\uC774 \uC77C\uC8FC\uBB38 \uB108\uBA38\uB294 \uBC84\uB824\uC9C4 \uC61B \uC808\uD130\uC77C\uC138. \uC800\uC2B9\uC0AC\uC790\uAC00 \uB9DD\uC790\uB4E4\uC744 \uD480\uC5B4\uB193\uACE0 \uC788\uC9C0.","\uAE08\uC904\uC744 \uAC77\uC5B4 \uC8FC\uACA0\uB124. \uB4E4\uC5B4\uAC00\uAC70\uB4E0 \uB5A0\uB3C4\uB294 \uB9DD\uC790\uB4E4\uBD80\uD130 \uC7A0\uC7AC\uC6B0\uAC8C."],gateAfter:"temple",reward:{exp:60}},{title:"\uB5A0\uB3C4\uB294 \uB9DD\uC790",type:"kill",need:{jiangshi:5,ghost:3},desc:"\uB208\uBC2D\uC758 <b>\uAC15\uC2DC</b>\uC640 <b>\uC6D0\uADC0</b>\uB97C \uC7A0\uC7AC\uC6B0\uC790",reward:{exp:160}},{title:"\uAEBC\uC9C4 \uC11D\uB4F1",type:"light",n:4,desc:"\uD3D0\uC0AC\uCC30\uC758 \uAEBC\uC9C4 <b>\uC11D\uB4F1</b>\uC5D0 \uBD88\uC744 \uBC1D\uD788\uC790 (\uC11D\uB4F1 \uC55E\uC5D0\uC11C E)",reward:{exp:120,item:"ot8"},startLines:["\uCCAD\uD5C8: \uB9DD\uC790\uB4E4\uC774 \uC7A0\uC7A0\uD574\uC84C\uAD70. \uC774\uC81C \uAEBC\uC9C4 \uC11D\uB4F1\uC5D0 \uBD88\uC744 \uBC1D\uD600 \uAE38\uC744 \uBE44\uCD94\uAC8C.","\uCCAD\uD5C8: \uBD88\uC774 \uB137 \uCF1C\uC9C0\uBA74 \uC800\uC2B9\uC758 \uBB38\uC774 \uB4DC\uB7EC\uB0A0 \uAC78\uC138."]},{title:"\uC800\uC2B9\uC758 \uBB38",type:"wave",region:"temple",desc:"\uC885\uAC01\uC758 <b>\uBC94\uC885</b>\uC744 \uC6B8\uB824 <b>\uC800\uC2B9\uC0AC\uC790</b>\uC640 \uB9DE\uC11C\uC790",reward:{exp:300},startLines:["\uCCAD\uD5C8: \uC11D\uB4F1\uC774 \uBAA8\uB450 \uBC1D\uC558\uB124. \uC885\uAC01\uC758 \uBC94\uC885\uC744 \uC6B8\uB9AC\uBA74 \uC800\uC2B9\uC0AC\uC790\uAC00 \uBA85\uBD80\uB97C \uB4E4\uACE0 \uC62C \uAC78\uC138."]},{title:"\uADC0\uD658",type:"talk",npc:"guard",desc:"\uC6D4\uD558\uAD81\uC758 <b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uB3CC\uC544\uAC00 \uC18C\uC2DD\uC744 \uC804\uD558\uC790",lines:r=>[`${r.player.cfg.title} \uB098\uB9AC! \uC800\uC2B9\uC0AC\uC790\uAE4C\uC9C0 \uBB3C\uB9AC\uCE58\uC168\uB2E4\uACE0\uC694? \uC18C\uBB38\uC774 \uAD81 \uC548\uAE4C\uC9C0 \uD37C\uC84C\uC18C!`,"\uC774\uC81C \uAD81\uB3C4, \uB300\uC232\uB3C4, \uC61B \uC808\uD130\uB3C4 \uBAA8\uB450 \uD3C9\uC548\uD558\uC624. \uCC38\uC73C\uB85C \uACE0\uB9D9\uC18C.","\uC55E\uC73C\uB85C\uB3C4 \uC774 \uB545\uC744 \uC9C0\uCF1C \uC8FC\uC2DC\uC624. \uD604\uC0C1\uC218\uBC30\uAC00 \uBD99\uC73C\uBA74 \uB0B4\uAC8C \uC624\uC2DC\uC624.","(\uBA54\uC778 \uD018\uC2A4\uD2B8 \uC644\uB8CC! \uC218\uBB38\uC7A5\uC5D0\uAC8C \uD604\uC0C1\uC218\uBC30\uB97C \uBC1B\uAC70\uB098, \uBD81\xB7\uBC29\uC6B8\xB7\uBC94\uC885\uC744 \uB2E4\uC2DC \uC6B8\uB824 \uD68C\uCC28\uB97C \uC62C\uB9B4 \uC218 \uC788\uC2B5\uB2C8\uB2E4)"],reward:{exp:400,item:"cls:3"}}],xi=[{region:"bamboo",title:"\uD604\uC0C1\uC218\uBC30: \uC8FD\uB9BC \uC5EC\uC6B0 \uB5BC",need:{fox:8,foxfire:3}},{region:"temple",title:"\uD604\uC0C1\uC218\uBC30: \uC124\uC6D0\uC758 \uB9DD\uC790",need:{jiangshi:6,ghost:4}},{region:"bamboo",title:"\uD604\uC0C1\uC218\uBC30: \uC5EC\uC6B0\uBD88 \uC18C\uD0D5",need:{foxfire:6}},{region:"temple",title:"\uD604\uC0C1\uC218\uBC30: \uAC15\uC2DC \uBB34\uB9AC",need:{jiangshi:10}}],uc={fox:"\uC5EC\uC6B0",foxfire:"\uC5EC\uC6B0\uBD88",jiangshi:"\uAC15\uC2DC",ghost:"\uC6D0\uADC0",blue:"\uAF2C\uB9C8 \uB3C4\uAE68\uBE44",red:"\uBD89\uC740 \uB3C4\uAE68\uBE44",wisp:"\uB3C4\uAE68\uBE44\uBD88"};var jn={palace:{id:"palace",han:"\u6708\u4E0B\u5BAE",name:"\uC6D4\uD558\uAD81",sub:"\uB3C4\uAE68\uBE44 \uC57C\uD589",next:"bamboo",prev:null,lvl:0,foe:"\uB3C4\uAE68\uBE44",night:["\uB3C4\uAE68\uBE44 \uC57C\uD589","\uBD81\uC18C\uB9AC\uC5D0 \uB3C4\uAE68\uBE44\uB4E4\uC774 \uAE68\uC5B4\uB09C\uB2E4\u2026"],summonLine:'\uB450\uC5B5\uC2DC\uB2C8: "\uC598\uB4E4\uC544, \uB098\uC640\uB77C \uB69D\uB531!"',waves(r,t){return r===1?[["blue",4+t],["red",t]]:r===2?[["blue",3+t],["red",2+t],["wisp",2+Math.floor(t/2)]]:[["boss",1],["red",2+t],["wisp",t]]},theme:{sun:["#fff0d6","#8ea6ff"],sunI:[2.5,.9],sky:["#dfe9ff","#55669e"],ground:["#8a7c62","#262438"],hemiI:[1.15,.95],bg:["#3b4a3a","#0e1220"],ambient:"petal"}},bamboo:{id:"bamboo",han:"\u7AF9\u6797",name:"\uC8FD\uB9BC",sub:"\uC5EC\uC6B0 \uC6B8\uC74C",next:"temple",prev:"palace",lvl:2,foe:"\uC5EC\uC6B0",night:["\uC5EC\uC6B0 \uC6B8\uC74C","\uBC29\uC6B8 \uC18C\uB9AC\uC5D0 \uC5EC\uC6B0\uB4E4\uC774 \uBAB0\uB824\uC628\uB2E4\u2026"],summonLine:'\uAD6C\uBBF8\uD638: "\uC544\uAC00\uB4E4\uC544, \uC800 \uC0AC\uB78C\uC758 \uAC04\uC744 \uBE7C \uC624\uB108\uB77C!"',field:{cap:6,pack:3,types:[["fox",3],["foxfire",1]]},waves(r,t){return r===1?[["fox",4+t],["foxfire",t]]:r===2?[["fox",3+t],["foxfire",2+t]]:[["gumiho",1],["fox",2+t],["foxfire",1+Math.floor(t/2)]]},theme:{sun:["#ffd8a0","#7ab0b0"],sunI:[2.2,.8],sky:["#d8ecc8","#3a5e58"],ground:["#5a6a3a","#1a2420"],hemiI:[1.1,.95],bg:["#2e3e26","#08120e"],ambient:"leaf"}},temple:{id:"temple",han:"\u96EA\u5BFA",name:"\uC124\uC6D0 \uD3D0\uC0AC\uCC30",sub:"\uC800\uC2B9\uC758 \uBB38",next:"palace",prev:"bamboo",lvl:4,foe:"\uB9DD\uC790",night:["\uC800\uC2B9\uC758 \uBB38","\uBC94\uC885 \uC18C\uB9AC\uC5D0 \uB9DD\uC790\uB4E4\uC774 \uAE68\uC5B4\uB09C\uB2E4\u2026"],summonLine:'\uC800\uC2B9\uC0AC\uC790: "\uBA85\uBD80\uC5D0 \uC774\uB984\uC774 \uC624\uB978 \uC790\uB4E4\uC544, \uC77C\uC5B4\uB098\uB77C\u2026"',field:{cap:6,pack:3,types:[["jiangshi",2],["ghost",1]]},waves(r,t){return r===1?[["jiangshi",4+t]]:r===2?[["jiangshi",2+t],["ghost",3+t]]:[["reaper",1],["ghost",2+t],["jiangshi",1+t]]},theme:{sun:["#f4f8ff","#8ea6ff"],sunI:[2.4,1],sky:["#e8f0ff","#5a6a9e"],ground:["#c8d4e8","#2a3050"],hemiI:[1.2,1],bg:["#b8c4d4","#0c1020"],ambient:"snow"}}},yf=new Set(["boss","gumiho","reaper"]);var lt=(r,t,e)=>new R(r,t,e),vf=class{constructor(){this.pixel=new Wl(document.getElementById("stage"));let t=this.scene=new wn;t.background=new ct("#3b4a3a"),this.time=0,this.state="title",this.night=0,this.nightTarget=0,this.hitstop=0,this.shakeAmt=0,this.kills=0,this.hitCombo=0,this.lastHitTime=-10,this.alarm=0,this.enemies=[],this.projectiles=[],this.timers=[],this.rains=[],this.tornados=[],this.storms=[],this.fires=[],this.orbits=[],this.marks=[],this.spawnQueue=[],this.wave=0,this.round=0,this.stage=0,this.waveActive=!1,this.focus=lt(0,0,10),this.lead=lt(),this.setupLights(),this.world=new ql(t),this.fx=new Zl(t,this.pixel),this.audio=new Jl,this.ui=new hc(this),this.progress={},this.inv=new Set(["sw0","mg0","bw0","ot0"]),this.gear=[],this.drops=[],this.target=null,this.paused=!1,this.player=new lc(this),this.buildTargetMarker(),this.mapId="palace",this.map=jn.palace,this.cleared={},this.regionBanner={},this.quest={step:0,prog:{},lit:[],bounty:null},this.flames=[],this.fieldT=0,this.themeCur=this.cloneTheme(jn.palace.theme),this.npcs=[],this.birds=[],this.createActors(),this.buildQuestMarkers(),this.world.buildNav(),this.flowT=0,this.setupInput(),this.bestCombo=0,this.saveT=15,this.selectedCls="sword",this.setupClassSelect(),this.applySave(Rp()),this.preview=new dc(this),this.ui.setClass(this.player.cfg),this.updateQuest(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.save(!1)}),window.addEventListener("pagehide",()=>this.save(!1)),this.last=performance.now(),this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}setupLights(){let t=this.scene;this.hemi=new fs("#dfe9ff","#8a7c62",1.15),t.add(this.hemi);let e=this.sun=new Vn("#fff0d6",2.5);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let i=e.shadow.camera;i.left=-30,i.right=30,i.top=30,i.bottom=-30,i.near=1,i.far=140,e.shadow.bias=-6e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sunOffset=lt(-16,30,14),this.points=[];for(let n=0;n<8;n++){let s=new co("#ffb35c",0,9,1.4);t.add(s),this.points.push(s)}this.lightTimer=0}updateLights(t){let e=this.night;Ai.night.value=e,this.blendTheme(t);let i=this.themeCur,n=p=>Dp.copy(p[0]).lerp(p[1],e);this.sun.color.copy(n(i.sun)),this.sun.intensity=Et(i.sunI[0],i.sunI[1],e),this.hemi.color.copy(n(i.sky)),this.hemi.groundColor.copy(n(i.ground)),this.hemi.intensity=Et(i.hemiI[0],i.hemiI[1],e),this.scene.background.copy(n(i.bg)),this.world.setNight(e);let s=this.focus,o=Nv.copy(this.sunOffset).normalize(),a=Uv.crossVectors(Lp.set(0,1,0),o).normalize(),l=Lp.crossVectors(o,a).normalize(),c=60/2048,h=Math.round(s.dot(a)/c)*c,d=Math.round(s.dot(l)/c)*c,f=s.dot(o),u=zv.copy(a).multiplyScalar(h).addScaledVector(l,d).addScaledVector(o,f);if(this.sun.target.position.copy(u),this.sun.position.copy(u).add(this.sunOffset),this.sun.target.updateMatrixWorld(),this.lightTimer-=t,this.lightTimer<=0){this.lightTimer=.25;let p=[...this.world.lanterns].sort((m,g)=>m.distanceToSquared(s)-g.distanceToSquared(s)),x=s.z<12?this.world.hallLightPos:null;for(let m=0;m<8;m++){let g=x&&m>=6?x[m-6]:p[m];g?this.points[m].position.copy(g):this.points[m].position.set(0,-50,0)}}for(let p=0;p<8;p++){let x=1+Math.sin(this.time*9+p*1.7)*.06+Math.sin(this.time*23+p)*.04;this.points[p].intensity=e*(p<6?22:30)*x,this.points[p].distance=p<6?8:11}}setupInput(){this.keys=new Set,this.input={mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null},this.mouse={x:0,y:0,t:-10},window.addEventListener("keydown",e=>{if(e.code==="Tab"&&e.preventDefault(),e.repeat){this.keys.add(e.code);return}this.keys.add(e.code),this.onKey(e.code,e)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear());let t=document.getElementById("app");t.addEventListener("mousemove",e=>{this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time}),t.addEventListener("mousedown",e=>{if(this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.mouse.t=this.time,this.state==="title"){let i=e.target.closest&&e.target.closest(".cls");i&&this.selectClass(i.dataset.cls),this.start();return}if(this.audio.unlock(),!this.paused){if(this.ui.inDialog){this.ui.advance();return}this.state==="play"&&(e.button===0&&this.player.startAttack(this.readInput()),e.button===2&&!this.cdCheck("skill",this.player.skillCd)&&this.player.startSkill(this.readInput()))}}),t.addEventListener("contextmenu",e=>e.preventDefault());for(let e of["bag-btn","bag","evo-btn","skills"]){let i=document.getElementById(e);i.addEventListener("mousedown",n=>n.stopPropagation()),i.addEventListener("touchstart",n=>n.stopPropagation(),{passive:!0})}document.getElementById("bag-btn").addEventListener("click",()=>{this.state==="play"&&this.toggleBag()}),document.getElementById("bag-close").addEventListener("click",()=>this.toggleBag(!1)),document.querySelectorAll(".bag-tabs button").forEach(e=>e.addEventListener("click",i=>{i.stopPropagation(),this.ui.tab(e.dataset.tab)})),document.getElementById("salvage-low").addEventListener("click",e=>{e.stopPropagation(),this.salvageGear(this.gear.filter(i=>i.tier<=1).map(i=>i.uid))}),document.getElementById("evo-btn").addEventListener("click",()=>{this.state==="play"&&this.toggleSkills()}),document.getElementById("skills-close").addEventListener("click",()=>this.toggleSkills(!1)),t.addEventListener("wheel",e=>{this.pixel.zoom(e.deltaY>0?-1:1),this.saveT=Math.min(this.saveT,2)},{passive:!0}),this.setupTouch()}setupTouch(){let t=document.getElementById("touch");if(!("ontouchstart"in window))return;t.classList.add("on"),document.body.classList.add("touch"),document.getElementById("dialog").addEventListener("touchstart",c=>{c.preventDefault(),this.ui.advance()},{passive:!1}),document.getElementById("gameover").addEventListener("touchstart",c=>{c.preventDefault(),this.state==="dead"&&this.retry()},{passive:!1});let e=document.getElementById("stick"),i=e.firstElementChild;this.touchMove={x:0,z:0};let n=null,s=0,o=0,a=document.getElementById("stick-area");a.addEventListener("touchstart",c=>{this.state==="title"&&this.start();let h=c.changedTouches[0];n=h.identifier,s=h.clientX,o=h.clientY,e.style.left=s+"px",e.style.top=o+"px",e.classList.add("show"),c.preventDefault()},{passive:!1}),a.addEventListener("touchmove",c=>{for(let h of c.changedTouches)if(h.identifier===n){let d=h.clientX-s,f=h.clientY-o,u=Math.hypot(d,f),p=50;u>p&&(d*=p/u,f*=p/u),i.style.transform=`translate(${d}px, ${f}px)`,this.touchMove.x=d/p,this.touchMove.z=f/p}c.preventDefault()},{passive:!1});let l=c=>{for(let h of c.changedTouches)h.identifier===n&&(n=null,this.touchMove.x=0,this.touchMove.z=0,i.style.transform="",e.classList.remove("show"))};a.addEventListener("touchend",l),a.addEventListener("touchcancel",l);for(let c of document.querySelectorAll("#touch [data-k]"))c.addEventListener("touchstart",h=>{h.preventDefault(),this.state==="title"?this.start():this.onKey(c.dataset.k)},{passive:!1})}readInput(){let t=this.keys,e=0,i=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(i-=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i+=1),this.touchMove&&(this.touchMove.x||this.touchMove.z)&&(e=this.touchMove.x,i=this.touchMove.z);let n=Math.hypot(e,i),s=this.input;return s.moveLen=Math.min(1,n),s.mx=n>0?e/Math.max(1,n):0,s.mz=n>0?i/Math.max(1,n):0,n>1&&(s.mx=e/n,s.mz=i/n),s.mouseRecent=this.time-this.mouse.t<3,s.mouseWorld=s.mouseRecent?this.pixel.unproject(this.mouse.x,this.mouse.y,this.player.pos.y+.6):null,(this.ui.inDialog||this.state!=="play")&&(s.moveLen=0,s.mx=s.mz=0),s}setupClassSelect(){for(let t of document.querySelectorAll("#classes .cls")){let e=un[t.dataset.cls];t.querySelector(".role").textContent=e.role,t.querySelector(".desc").textContent=e.desc}this.selectClass(this.selectedCls)}selectClass(t){if(un[t]){this.selectedCls=t;for(let e of document.querySelectorAll("#classes .cls"))e.classList.toggle("sel",e.dataset.cls===t);this.player.cls!==t&&(this.player.setClass(t),this.ui.setClass(this.player.cfg))}}cloneTheme(t){let e=i=>[new ct(i[0]),new ct(i[1])];return{sun:e(t.sun),sky:e(t.sky),ground:e(t.ground),bg:e(t.bg),sunI:[...t.sunI],hemiI:[...t.hemiI],ambient:t.ambient}}blendTheme(t,e=!1){let i=jn[this.world.regionAt(this.focus.x,this.focus.z).id].theme,n=this.themeCur,s=e?1:1-Math.exp(-t*1.4);for(let o of["sun","sky","ground","bg"])for(let a=0;a<2;a++)n[o][a].lerp(Dp.set(i[o][a]),s);for(let o of["sunI","hemiI"])for(let a=0;a<2;a++)n[o][a]=Et(n[o][a],i[o][a],s);n.ambient=i.ambient}createActors(){this.npcs=[new ws(this,"guard",-12.4,6.4,.6,"\uC218\uBB38\uC7A5 \uBC15\uB3CC\uC1E0",[]),new ws(this,"lady",19.2,7.5,-.9,"\uB098\uC778 \uC5F0\uC774",["\uC5B4\uBA38, \uAC80\uAC1D\uB2D8. \uC774 \uAD81\uC740 \uBC24\uB9CC \uB418\uBA74 \uB3C4\uAE68\uBE44\uBD88\uC774 \uB5A0\uB2E4\uB140\uC694.","\uB3C4\uAE68\uBE44\uB4E4\uC740 \uC7A5\uB09C\uC774 \uC2EC\uD558\uC9C0\uB9CC, \uD63C\uCB50\uC744 \uB0B4\uC8FC\uBA74 \uAE08\uBC29 \uB2EC\uC544\uB09C\uB2F5\uB2C8\uB2E4.","\uD478\uB978 \uBD88\uB369\uC774\uB97C \uC3D8\uB294 \uB140\uC11D\uC740 \uAC80\uC73C\uB85C \uCCD0\uB0B4\uBA74 \uD295\uACA8\uB0BC \uC218 \uC788\uB300\uC694!","\uB0A8\uBB38 \uBC16\uC73C\uB85C \uCB49 \uB0B4\uB824\uAC00\uBA74 \uB300\uC232\uC774\uC5D0\uC694. \uB354 \uAC00\uBA74 \uB208 \uB36E\uC778 \uC61B \uC808\uD130\uAC00 \uC788\uACE0\uC694.","(N \uD0A4\uB85C \uB0AE\uACFC \uBC24\uC744 \uBC14\uAFD4 \uBCFC \uC218 \uC788\uC5B4\uC694. \uC2F8\uC6B0\uB294 \uC911\uC5D4 \uC548 \uB3FC\uC694.)"]),new ws(this,"herb",4.2,35.5,-2.4,"\uC57D\uCD08\uAFBC \uBD84\uC774",["\uC5B4\uBA38\uB098, \uAD81\uC5D0\uC11C \uB0B4\uB824\uC624\uC168\uC5B4\uC694? \uC5EC\uAE30\uC11C\uBD80\uD134 \uC8FD\uB9BC\uC774\uC5D0\uC694.","\uC232\uC18D\uC5D4 \uC5EC\uC6B0\uB4E4\uC774 \uC5B4\uC2AC\uB801\uAC70\uB824\uC694. \uAC00\uAE4C\uC774 \uAC00\uBA74 \uB2EC\uB824\uB4DC\uB2C8 \uC870\uC2EC\uD558\uC138\uC694.","\uC232 \uD55C\uAC00\uC6B4\uB370 \uC11C\uB0AD\uB2F9 \uB098\uBB34\uAC00 \uC788\uB294\uB370, \uAC70\uAE30 \uBC29\uC6B8\uC744 \uD754\uB4E4\uBA74 \uC5EC\uC6B0 \uB5BC\uAC00 \uBAB0\uB824\uC628\uB300\uC694.","\uADF8 \uB05D\uC5D4 \uCC9C\uB144 \uBB35\uC740 \uAD6C\uBBF8\uD638\uAC00\u2026 \uC544\uC774\uACE0, \uC0DD\uAC01\uB9CC \uD574\uB3C4 \uBB34\uC11C\uC6CC\uB77C."]),new ws(this,"hermit",-4.4,75.4,2.6,"\uB5A0\uB3CC\uC774 \uB3C4\uC0AC \uCCAD\uD5C8",["\uD5C8\uD5C8, \uB300\uC232\uC744 \uC9C0\uB098 \uC5EC\uAE30\uAE4C\uC9C0 \uC654\uB294\uAC00. \uC774\uACF3\uC740 \uBC84\uB824\uC9C4 \uC61B \uC808\uD130\uC77C\uC138.","\uB208\uBC2D\uC5D4 \uAC15\uC2DC\uC640 \uC6D0\uADC0\uAC00 \uB5A0\uB3C8\uB2E4\uB124. \uAC15\uC2DC\uB294 \uB6F0\uC5B4\uC624\uB97C \uB54C \uD53C\uD558\uAC8C.","\uC808 \uC548\uCABD \uC885\uAC01\uC758 \uBC94\uC885\uC744 \uC6B8\uB9AC\uBA74 \uB9DD\uC790\uB4E4\uC774 \uAE68\uC5B4\uB098\uACE0, \uC800\uC2B9\uC0AC\uC790\uAC00 \uBA85\uBD80\uB97C \uB4E4\uACE0 \uC624\uC9C0.","\uC790\uB124\uB77C\uBA74 \uD574\uB0BC \uAC78\uC138. \uAE30\uC220\uC744 \uAC08\uACE0\uB2E6\uAC8C\uB098 \u2014 \uC218\uB828\uC774 \uC313\uC774\uBA74 \uAE30\uC220\uC774 \uB2EC\uB77C\uC9C4\uB2E4\uB124."])],this.birds=[];for(let[t,e]of[[-6,6],[-5.4,6.6],[6.5,15],[7,14.3],[-15,9],[14,-.5],[.5,-9.5],[-6,40],[5.5,47],[-3,70]])this.birds.push(new cc(this,lt(t,this.world.heightAt(t,e),e)))}updateRegion(t=!1){if(this.waveActive&&!t)return;let e=this.world.regionAt(this.player.pos.x,this.player.pos.z);if(e.id===this.mapId&&!t)return;this.mapId=e.id,this.map=jn[e.id];let i=document.getElementById("logo");i&&(i.innerHTML=`<span class="han">${this.map.han}</span><span class="sub">${this.map.sub}</span>`),!t&&this.state==="play"&&this.time-(this.regionBanner[e.id]??-99)>10&&(this.regionBanner[e.id]=this.time,this.ui.banner(this.map.name,this.map.sub,2.4,"title-banner")),this.updateQuest()}updateField(t){if(this.fieldT-=t,this.fieldT>0)return;this.fieldT=1.2;let e=this.player,i=!1;for(let d of this.enemies)d.field&&!d.dead&&Math.hypot(d.pos.x-e.pos.x,d.pos.z-e.pos.z)>40&&(d.dispose(),d.removed=!0,i=!0,this.target===d&&(this.target=null));if(i&&(this.enemies=this.enemies.filter(d=>!d.removed)),this.state!=="play"||e.dead||this.waveActive)return;let n=this.world.regionAt(e.pos.x,e.pos.z),s=jn[n.id].field;if(!s||this.enemies.filter(d=>d.field&&!d.dead).length>=s.cap)return;let o=this.world.randomWalkable(e.pos.x,e.pos.z,13,22);if(!o||this.world.regionAt(o.x,o.z)!==n)return;let a=Math.random()*s.types.reduce((d,f)=>d+f[1],0),l=s.types[0][0];for(let[d,f]of s.types)if(a-=f,a<=0){l=d;break}let c=Math.min(1+Math.floor(Math.random()*s.pack),s.cap-this.enemies.filter(d=>d.field&&!d.dead).length),h=1+jn[n.id].lvl+Math.floor((e.level-1)/3);for(let d=0;d<c;d++){let f=d&&this.world.randomWalkable(o.x,o.z,.8,2.5)||o;this.enemies.push(new _r(this,l,f,h,{field:!0}))}}progressOf(t){return this.progress[t]||(this.progress[t]={level:1,exp:0,weapon:Tn[t][0].id,outfit:"ot0"}),this.progress[t]}buildTargetMarker(){let t=new Lt,e=new $t({color:"#ff5a3a",transparent:!0,opacity:.85,blending:He,depthWrite:!1}),i=new ot(new Fn(.85,1,24,1),e);i.rotation.x=-Math.PI/2;let n=new $t({color:"#ffe0a0",transparent:!0,blending:He,depthWrite:!1}),s=new Lt;for(let a=0;a<4;a++){let l=new ot(new me(.34,.1),n),c=a/4*Math.PI*2;l.position.set(Math.cos(c)*1.15,0,Math.sin(c)*1.15),l.rotation.set(-Math.PI/2,0,-c+Math.PI/2),s.add(l)}let o=new ot(new ne(.24,.48,4),new $t({color:"#ff6a3a"}));o.rotation.x=Math.PI,o.userData.noOutline=!0,t.add(i,s,o),t.visible=!1,this.scene.add(t),this.marker={g:t,ring:i,ticks:s,arrow:o}}targetRange(){return this.player.cls==="sword"?7:12}validTarget(t){if(!t||t.dead||t.spawning)return!1;let e=this.player.pos;return Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<this.targetRange()+2}updateTarget(t=!1){let e=this.player.pos,i=this.enemies.filter(n=>!n.dead&&!n.spawning).map(n=>({e:n,d:Math.hypot(n.pos.x-e.x,n.pos.z-e.z)})).filter(n=>n.d<this.targetRange()).sort((n,s)=>n.d-s.d);if(t&&i.length){let n=i.findIndex(s=>s.e===this.target);this.target=i[(n+1)%i.length].e,this.audio.play("talk");return}if(this.validTarget(this.target)){let n=Math.hypot(this.target.pos.x-e.x,this.target.pos.z-e.z);i.length&&i[0].e!==this.target&&i[0].d<n-2.5&&(this.target=i[0].e);return}this.target=i.length?i[0].e:null}updateMarker(t){let e=this.marker,i=this.target;if(e.g.visible=!!i&&this.state==="play",!e.g.visible)return;let n=i.isBoss?1.6:i.isWisp?.7:.8;e.g.position.set(i.pos.x,i.y+.05,i.pos.z);let s=1+Math.sin(this.time*8)*.06;e.ring.scale.setScalar(n*s),e.ticks.scale.setScalar(n*(1.05+Math.sin(this.time*8)*.1)),e.ticks.rotation.y+=t*1.5;let o=i.isBoss?4.4:i.isWisp?2.3:2.2;e.arrow.position.set(0,o+Math.abs(Math.sin(this.time*5))*.25,0)}onLevelUp(t,e){let i=lt(t.pos.x,t.y,t.pos.z);this.audio.play("levelup"),this.ui.flash("#ffd060",.35),this.ui.banner("LEVEL UP",`${t.cfg.title} ${t.cfg.name} \xB7 Lv.${t.level}`,2.4,"win-banner"),this.fx.circle(i,2.2,"#ffd060",1.4,2),this.fx.ring(i,3,"#fff2c0",.5);for(let s=0;s<70;s++){let o=Math.random()*Math.PI*2,a=T(.2,.9);this.fx.add.emit({x:i.x+Math.cos(o)*a,y:i.y+T(0,.5),z:i.z+Math.sin(o)*a,vy:T(2,7),drag:1,life:T(.6,1.3),size:T(2,4),endSize:1,color:"#fff6c0",color2:"#ffa020"})}for(let s of[2,3])if(t.level-e<Rn[s]&&t.level>=Rn[s]){let o=t.cfg.labels["skill"+s];setTimeout(()=>this.ui.toast(`\uC0C8 \uC2A4\uD0AC \uD574\uAE08: ${o} (${s===2?"L":"I"})`,3),900)}let n=Object.values(Jn[t.cls]).filter(s=>s.lv.some(o=>t.level-e<o&&t.level>=o));n.length&&setTimeout(()=>this.ui.toast(`\uC0C8 \uC218\uB828 \uB2E8\uACC4: ${n.map(s=>s.base).join(", ")} (T \uD0A4)`,4),1800),document.getElementById("evo-dot").classList.remove("hidden"),this.ui.setClass(t.cfg,t),this.save(!1)}spawnDrop(t,e){let i=typeof e=="object"?e:ii(e),n=new ct($e[i.tier].color),s=new Lt,o=new ot(new ut(.34,.34,.34),new $t({color:n})),a=new ot(new ut(.2,.2,.2),new $t({color:"#ffffff"}));a.userData.noOutline=!0,o.add(a);let l=new ot(new Ht(.16,.3,4,8,1,!0),new $t({color:n,transparent:!0,opacity:.35,blending:He,depthWrite:!1,side:fe}));l.position.y=2,s.add(o,l),s.position.set(t.x,this.world.heightAt(t.x,t.z),t.z),this.scene.add(s);let c=lt(T(-2,2),5,T(-2,2));this.drops.push({id:e,g:s,box:o,beam:l,vel:c,y:.6,t:0,col:n}),this.fx.ring(s.position,1.2,$e[i.tier].color,.4)}updateDrops(t){let e=this.player;for(let i=this.drops.length-1;i>=0;i--){let n=this.drops[i];n.t+=t;let s=this.world.heightAt(n.g.position.x,n.g.position.z);n.t<.8?(n.vel.y-=14*t,this.world.move(n.g.position,n.vel.x*t,n.vel.z*t,.1),n.y=Math.max(.35,n.y+n.vel.y*t)):n.y=.45+Math.sin(n.t*3)*.08,n.box.rotation.y+=t*2.5,n.box.position.y=n.y,n.g.position.y=s,n.beam.material.opacity=.25+Math.sin(n.t*5)*.08,Math.random()<t*8&&this.fx.add.emit({x:n.g.position.x+T(-.3,.3),y:s+T(.2,1.5),z:n.g.position.z+T(-.3,.3),vy:.8,life:.6,size:2,color:"#ffffff",color2:"#"+n.col.getHexString()});let o=Math.hypot(e.pos.x-n.g.position.x,e.pos.z-n.g.position.z);if(n.t>.8&&o<3.5&&!e.dead){let a=Math.min(1,t*8);n.g.position.x+=(e.pos.x-n.g.position.x)*a,n.g.position.z+=(e.pos.z-n.g.position.z)*a}n.t>.8&&o<.7&&(this.scene.remove(n.g),this.drops.splice(i,1),this.pickup(n.id))}}pickup(t){if(typeof t=="object"){this.pickupGear(t);return}let e=ii(t),i=$e[e.tier],n=this.player;this.audio.play("coin"),this.fx.spark(n.pos.x,n.y+1,n.pos.z,14,i.color,4),this.inv.has(t)?(n.addExp(15+e.tier*15),this.ui.toast(`\uC774\uBBF8 \uAC00\uC9C4 ${e.name} \u2192 \uACBD\uD5D8\uCE58 +${15+e.tier*15}`,2.2)):(this.inv.add(t),e.perk?(this.ui.banner(e.name,"\uBCF4\uC2A4 \uC804\uC6A9 \uC7A5\uBE44 \uD68D\uB4DD! \u2014 B \uD0A4\uB85C \uCC29\uC6A9",2.6,"win-banner"),this.audio.play("levelup"),this.fx.ring(n.pos,2.4,i.color,.5),this.fx.colorFire(n.pos.x,n.y+.5,n.pos.z,40,.6,"#ffe0a0",i.color)):this.ui.toast(`\uD68D\uB4DD! [${i.name}] ${e.name} \u2014 B \uD0A4\uB85C \uAC00\uBC29 \uC5F4\uAE30`,3),this.ui.newItem=!0,this.ui.refreshBag()),this.save(!1)}pickupGear(t){let e=$e[t.tier],i=this.player;if(this.audio.play("coin"),this.fx.spark(i.pos.x,i.y+1,i.pos.z,14,e.color,4),this.gear.filter(o=>!this.isEquipped(o)).length>=ic){let o=Io(t);i.addExp(o),this.ui.toast(`\uAC00\uBC29\uC774 \uAC00\uB4DD \uCC28\uC11C ${t.name}\uC744(\uB97C) \uBD84\uD574 \u2192 \uACBD\uD5D8\uCE58 +${o}`,2.4);return}this.gear.push(t);let n=this.gearInSlot(t.kind==="ring"?this.worseRingSlot():t.kind),s=dn(t)>dn(n);this.ui.toast(`\uD68D\uB4DD! [${e.name}] ${t.name}${s?" \u25B2 \uC9C0\uAE08 \uAC83\uBCF4\uB2E4 \uC88B\uC544\uC694":""}`,2.6),t.tier>=3&&(this.audio.play("levelup"),this.fx.ring(i.pos,2,e.color,.5)),this.ui.newItem=!0,this.ui.refreshBag(),this.save(!1)}eqOf(t=this.player.cls){let e=this.progressOf(t);return e.eq||(e.eq={})}gearByUid(t){return this.gear.find(e=>e.uid===t)||null}gearInSlot(t,e){return this.gearByUid(this.eqOf(e)[t])}equippedGear(t){let e=this.eqOf(t);return tc.map(i=>this.gearByUid(e[i])).filter(Boolean)}isEquipped(t,e=this.player.cls){return Object.values(this.eqOf(e)).includes(t.uid)}worseRingSlot(){let t=this.gearInSlot("ring1"),e=this.gearInSlot("ring2");return t?e&&dn(t)<=dn(e)?"ring1":"ring2":"ring1"}equipGear(t,e){let i=this.gearByUid(t);if(!i)return;let n=this.player,s=this.eqOf();if(!this.isEquipped(i)){for(let o of bs)if(o!==n.cls){let a=this.eqOf(o);for(let l of Object.keys(a))a[l]===t&&delete a[l]}e=e||(i.kind==="ring"?this.worseRingSlot():i.kind),s[e]=t,this.afterGearChange($e[i.tier].color),this.audio.play("coin")}}unequipGear(t){let e=this.eqOf();e[t]&&(delete e[t],this.afterGearChange("#a89e8a"))}salvageGear(t){let e=0,i=0;for(let n of t){let s=this.gearByUid(n);!s||this.isEquipped(s)||bs.some(o=>this.isEquipped(s,o))||(e+=Io(s),i++,this.gear.splice(this.gear.indexOf(s),1))}i&&(this.player.addExp(e),this.audio.play("crit"),this.ui.toast(`${i}\uAC1C \uBD84\uD574 \u2192 \uACBD\uD5D8\uCE58 +${e}`,2),this.ui.refreshBag(),this.ui.setClass(this.player.cfg,this.player),this.save(!1))}afterGearChange(t){let e=this.player;e.buildRig(),e.recalc();let i=lt(e.pos.x,e.y,e.pos.z);this.fx.ring(i,1.6,t,.4);for(let n=0;n<20;n++)this.fx.add.emit({x:i.x+T(-.4,.4),y:i.y+T(0,1.6),z:i.z+T(-.4,.4),vy:T(.5,2),life:T(.4,.8),size:2,color:"#ffffff",color2:t});this.ui.setClass(e.cfg,e),this.ui.refreshBag(),this.save(!1)}toggleBag(t=!this.ui.bagOpen){t&&this.toggleSkills(!1),this.ui.bagOpen=t,this.paused=t||!!this.ui.skillsOpen,this.ui.showBag(t),t&&(this.ui.newItem=!1)}toggleSkills(t=!this.ui.skillsOpen){t&&this.ui.bagOpen&&this.toggleBag(!1),this.ui.skillsOpen=t,this.paused=t||!!this.ui.bagOpen,this.ui.showSkills(t),t&&document.getElementById("evo-dot").classList.add("hidden")}chooseEvo(t,e){let i=this.player,n=Jn[i.cls][t];if(i.level<n.lv[0])return;let s=this.progressOf(i.cls),o=s.rank?.[t]||(s.evo?.[t]?1:0);if(!o&&Ro(s,i.level)<=0){this.ui.toast("\uC218\uB828\uC810\uC774 \uBD80\uC871\uD574\uC694",1.6),this.audio.play("denied");return}s.evo?.[t]!==e&&(s.evo={...s.evo||{},[t]:e},s.rank={...s.rank||{},[t]:Math.max(1,o)},this.audio.play("levelup"),this.ui.toast(o?`${n.base} \uAC08\uB798\uB97C ${n[e].name}(\uC73C)\uB85C \uBC14\uAFC8`:`${n.base} \u2192 ${n[e].name} \uC218\uB828!`,2),this.ui.setClass(i.cfg,i),this.ui.refreshSkills(),this.save(!1))}trainEvo(t){let e=this.player,i=Jn[e.cls][t],n=this.progressOf(e.cls),s=n.rank?.[t]||(n.evo?.[t]?1:0);if(!n.evo?.[t]||s>=5||e.level<i.lv[s]||Ro(n,e.level)<=0)return;n.rank={...n.rank||{},[t]:s+1};let o=i[n.evo[t]].name;this.audio.play("levelup"),this.ui.banner(s+1===5?"\uAC01\uC131!":"\uC218\uB828",`${o} ${An[s+1]}\uB2E8\uACC4`,2,"win-banner");let a=lt(e.pos.x,e.y,e.pos.z);this.fx.circle(a,2,s+1===5?"#ffd040":"#bfe8ff",1.2,3),this.ui.setClass(e.cfg,e),this.ui.refreshSkills(),this.save(!1)}branch(t,e){return jl(this.progressOf(t.cls),t.cls,t.level,e)}rank(t,e){return Ao(this.progressOf(t.cls),t.cls,t.level,e)}skillCdMul(t,e){return hp(this.rank(t,e))*(1-(t.gear?.cdr||0))}equipItem(t){let e=this.player,i=ii(t);if(!i||!this.inv.has(t))return;if(i.kind==="weapon"&&i.cls!==e.cls){this.ui.toast("\uB2E4\uB978 \uC9C1\uC5C5\uC758 \uBB34\uAE30\uC608\uC694"),this.audio.play("denied");return}e.equip(t),this.audio.play(i.kind==="weapon"?"draw":"coin");let n=lt(e.pos.x,e.y,e.pos.z);this.fx.ring(n,1.6,$e[i.tier].color,.4);for(let s=0;s<30;s++)this.fx.add.emit({x:n.x+T(-.4,.4),y:n.y+T(0,1.6),z:n.z+T(-.4,.4),vy:T(.5,2),life:T(.4,.8),size:2,color:"#ffffff",color2:$e[i.tier].color});this.ui.setClass(e.cfg,e),this.ui.refreshBag(),this.save(!1)}applySave(t){let e=document.getElementById("title-save");if(!t){e&&(e.textContent="");return}if(this.kills=t.kills|0,this.round=t.round|0,this.bestCombo=t.bestCombo|0,this.stage=this.round>0?3:Math.min(1,t.stage|0),t.music===!1&&this.audio.musicOn&&this.audio.toggleMusic(),t.outline===0&&(this.pixel.compMat.uniforms.outline.value=0),typeof t.zoom=="number"&&t.zoom!==this.pixel.userZoom&&(this.pixel.userZoom=t.zoom,this.pixel.resize()),t.night&&(this.nightTarget=1,this.night=1),t.progress)for(let s of Object.keys(un))t.progress[s]&&Object.assign(this.progressOf(s),t.progress[s]);if(Array.isArray(t.inv))for(let s of t.inv)ii(s)&&this.inv.add(s);if(Array.isArray(t.gear)&&(this.gear=t.gear.filter(s=>s&&s.uid&&s.stats)),t.cleared?this.cleared={...t.cleared}:t.round>0&&(this.cleared={palace:!0}),t.quest&&typeof t.quest.step=="number")this.quest={step:t.quest.step,prog:t.quest.prog||{},lit:t.quest.lit||[],bounty:t.quest.bounty||null};else{let s=this.cleared;this.quest.step=s.temple?11:s.bamboo?7:s.palace?2:(t.stage|0)>=1?1:0}this.quest.lit.forEach(s=>this.world.lanterns[s]&&this.addFlame(this.world.lanterns[s])),this.updateGates(!0);let i=null;if(Array.isArray(t.pos)&&this.world.inside(t.pos[0],t.pos[1],.4)&&!this.world.isBlocked(t.pos[0],t.pos[1],.4,this.world.heightAt(t.pos[0],t.pos[1])))i=t.pos;else if(t.mapId&&t.mapId!=="palace"){let s=this.world.regions.find(o=>o.id===t.mapId);s&&(i=[s.spawn[0],s.spawn[2]])}i&&(this.player.pos.set(i[0],this.world.heightAt(i[0],i[1]),i[1]),this.player.y=this.player.pos.y,this.startPos=this.player.pos.clone());let n=t.cls&&un[t.cls]?t.cls:this.player.cls;if(this.player.cls=null,this.selectClass(n),e){let s=new Date(t.savedAt||Date.now()),o=a=>String(a).padStart(2,"0");e.innerHTML=`\uC774\uC5B4\uD558\uAE30 \xB7 ${this.player.cfg.title} <b>Lv.${this.player.level}</b> \xB7 <b>${this.round+1}\uD68C\uCC28</b> \xB7 \uD1F4\uCE58 <b>${this.kills}</b> \xB7 \uCD5C\uACE0 \uC5F0\uC18D <b>${this.bestCombo}</b><small>${s.getMonth()+1}/${s.getDate()} ${o(s.getHours())}:${o(s.getMinutes())} \uC790\uB3D9 \uC800\uC7A5 \xB7 Delete \uD0A4: \uAE30\uB85D \uC9C0\uC6B0\uAE30</small>`}}save(t=!0){Cp({kills:this.kills,round:this.round,stage:this.stage===2?this.round>0?3:1:this.stage,bestCombo:this.bestCombo,cls:this.player.cls,progress:this.progress,mapId:this.mapId,pos:[+this.player.pos.x.toFixed(2),+this.player.pos.z.toFixed(2)],quest:this.quest,cleared:this.cleared,inv:[...this.inv],gear:this.gear,music:this.audio.musicOn,outline:this.pixel.compMat.uniforms.outline.value,zoom:this.pixel.userZoom,night:!this.waveActive&&this.nightTarget>.5})&&t&&this.ui.saveMark(),this.saveT=15}onKey(t){if(this.state==="title"){if(t==="Delete"||t==="Backspace"){Ip(),this.kills=0,this.round=0,this.stage=0,this.bestCombo=0,this.progress={},this.inv=new Set(["sw0","mg0","bw0","ot0"]),this.gear=[],this.cleared={},this.quest={step:0,prog:{},lit:[],bounty:null};for(let o of this.flames)this.scene.remove(o);this.flames=[],this.updateGates(!0),this.player.pos.copy(this.world.spawn),this.player.y=this.player.pos.y,this.startPos=null;for(let o of this.enemies)o.dispose();this.enemies=[],this.updateRegion(!0),this.stage=0;let n=this.player.cls;this.player.cls=null,this.selectClass(n),this.applySave(null),this.updateQuest(),this.preview.rebuild();let s=document.getElementById("title-save");s&&(s.textContent="\uAE30\uB85D\uC744 \uC9C0\uC6E0\uC2B5\uB2C8\uB2E4. \uCC98\uC74C\uBD80\uD130 \uC2DC\uC791\uD569\uB2C8\uB2E4.");return}let i=bs.indexOf(this.selectedCls);if(t==="ArrowLeft"||t==="KeyA"){this.selectClass(bs[(i+2)%3]),this.audio.unlock(),this.audio.play("talk");return}if(t==="ArrowRight"||t==="KeyD"){this.selectClass(bs[(i+1)%3]),this.audio.unlock(),this.audio.play("talk");return}if(t==="Digit1"||t==="Digit2"||t==="Digit3"){this.selectClass(bs[+t.slice(-1)-1]);return}this.start();return}if(this.audio.unlock(),t==="KeyM"){let i=this.audio.toggleMusic();this.ui.toast(i?"\uC74C\uC545 \uCF1C\uC9D0":"\uC74C\uC545 \uAEBC\uC9D0"),this.save(!1);return}if(t==="Equal"||t==="NumpadAdd"){this.pixel.zoom(1);return}if(t==="Minus"||t==="NumpadSubtract"){this.pixel.zoom(-1);return}if(t==="KeyO"){this.pixel.compMat.uniforms.outline.value=this.pixel.compMat.uniforms.outline.value?0:1,this.ui.toast(this.pixel.compMat.uniforms.outline.value?"\uC678\uACFD\uC120 \uCF1C\uC9D0":"\uC678\uACFD\uC120 \uAEBC\uC9D0"),this.save(!1);return}if(this.paused){t==="KeyB"||t==="bag"?this.toggleBag():t==="KeyT"||t==="skills"?this.toggleSkills():(t==="Escape"||t==="Tab")&&(this.toggleBag(!1),this.toggleSkills(!1));return}if(this.state==="dead"){(t==="KeyR"||t==="Enter"||t==="act")&&this.retry();return}if(this.ui.inDialog){["KeyE","Space","Enter","KeyJ","KeyZ","act","atk"].includes(t)&&this.ui.advance();return}let e=this.readInput();switch(t){case"KeyJ":case"KeyZ":case"atk":this.player.startAttack(e);break;case"Space":case"ShiftLeft":case"ShiftRight":case"dash":this.cdCheck("dash",this.player.dashCd)||this.player.startDash(e);break;case"KeyL":case"KeyQ":case"skill2":!this.lockCheck(2)&&!this.cdCheck("skill2",this.player.cd2)&&this.player.startExtraSkill(e,2);break;case"KeyI":case"KeyR":case"skill3":!this.lockCheck(3)&&!this.cdCheck("skill3",this.player.cd3)&&this.player.startExtraSkill(e,3);break;case"bag":this.toggleBag();break;case"KeyK":case"KeyX":case"skill":this.cdCheck("skill",this.player.skillCd)||this.player.startSkill(e);break;case"KeyE":case"Enter":case"act":this.interact();break;case"KeyN":if(this.waveActive){this.ui.toast("\uB3C4\uAE68\uBE44\uAC00 \uB0A0\uB6F0\uB294 \uC911\uC5D4 \uC2DC\uAC04\uC744 \uBC14\uAFC0 \uC218 \uC5C6\uC5B4\uC694");break}this.nightTarget=this.nightTarget>.5?0:1,this.ui.toast(this.nightTarget?"\uBC24\uC774 \uCC3E\uC544\uC635\uB2C8\uB2E4\u2026":"\uB0A0\uC774 \uBC1D\uC544\uC635\uB2C8\uB2E4");break;case"Tab":this.updateTarget(!0);break;case"KeyB":this.toggleBag();break;case"KeyT":case"skills":this.toggleSkills();break;case"KeyG":this.godMode=!this.godMode,this.ui.toast(this.godMode?"\uBB34\uC801 (\uB514\uBC84\uADF8)":"\uBB34\uC801 \uD574\uC81C");break}}lockCheck(t){return this.player.level>=Rn[t]?!1:(this.ui.denied("skill"+t),this.audio.play("denied"),this.ui.toast(`${this.player.cfg.labels["skill"+t]}: Lv.${Rn[t]}\uC5D0 \uC5F4\uB9BD\uB2C8\uB2E4`,1.6),!0)}cdCheck(t,e){return!(e>.05)||this.player.dead?!1:(this.ui.denied(t),this.audio.play("denied"),!0)}start(){this.audio.unlock(),this.state="play",this.player.cls!==this.selectedCls&&this.player.setClass(this.selectedCls),this.ui.setClass(this.player.cfg),this.player.hp=this.player.maxHp,this.save(!1),document.getElementById("title").classList.add("hide"),this.ui.showHud(!0),this.ui.banner("\u6708\u4E0B\u5BAE","\uB3C4\uAE68\uBE44 \uC57C\uD589",2.8,"title-banner")}findInteract(){let t=this.player.pos,e=null,i=2.4;for(let s of this.npcs){let o=Math.hypot(s.pos.x-t.x,s.pos.z-t.z);o<i&&(i=o,e={kind:"npc",npc:s,label:"\uB300\uD654",promptPos:s.pos.clone().add(lt(0,2.1,0))})}let n=this.curQuest();n&&n.type==="light"&&this.world.lanterns.forEach((s,o)=>{if(s.region!=="temple"||this.quest.lit.includes(o))return;let a=Math.hypot(s.x-t.x,s.z-t.z);a<2.2&&a<i&&(i=a,e={kind:"lantern",idx:o,label:"\uC11D\uB4F1 \uBC1D\uD788\uAE30",promptPos:s.clone().add(lt(0,1.2,0))})});for(let s of this.world.drums){let o=Math.hypot(s.pos.x-t.x,s.pos.z-t.z);o<(s.reach||2.9)&&o-.5<i&&(i=o-.5,e={kind:"drum",drum:s,label:`${s.label||"\uBD81"} \uC6B8\uB9AC\uAE30`,promptPos:s.pos.clone().add(lt(0,s.promptY||4,0))})}return e}interact(){let t=this.nearInteract;if(t)if(t.kind==="npc"){let e=t.npc,i=this.curQuest();if(i&&i.type==="talk"&&i.npc===e.kind){this.ui.dialog(e.name,i.lines(this),()=>{e.kind==="guard"&&this.stage===0&&(this.stage=1),this.completeStep()});return}if(e.kind==="guard"&&!i){this.bountyTalk(e);return}let n=e.lines;e.kind==="guard"?n=this.guardLines():i&&(n=[...e.lines.slice(0,2),`(\uC9C0\uAE08 \uD560 \uC77C: ${i.title} \u2014 ${i.desc.replace(/<[^>]+>/g,"")})`]),this.ui.dialog(e.name,n)}else t.kind==="lantern"?this.lightLantern(t.idx):t.kind==="drum"&&(this.player.yaw=Math.atan2(t.drum.pos.x-this.player.pos.x,t.drum.pos.z-this.player.pos.z),this.player.startAttack({moveLen:0,mx:0,mz:0}),this.drumHit(t.drum,!0))}guardLines(){if(this.quest.step===0)return[`\uC5B4\uC774, \uAC70\uAE30 \uC80A\uC740 ${this.player.cfg.title}! \uB9C8\uCE68 \uC798 \uC654\uC18C.`,"\uD574\uB9CC \uC9C0\uBA74 \uC774 \uAD81\uAD90 \uB9C8\uB2F9\uC5D0 \uB3C4\uAE68\uBE44 \uB188\uB4E4\uC774 \uB5BC\uB85C \uBAB0\uB824\uC640 \uB09C\uC7A5\uD310\uC744 \uCE5C\uB2E4\uC624.","\uC800\uAE30 \uC800 \uD070 \uBD81\uC774 \uBCF4\uC774\uC2DC\uC624? \uBD81\uC744 \uB465\u2014 \uD558\uACE0 \uC6B8\uB9AC\uBA74 \uC228\uC5B4 \uC788\uB358 \uB188\uB4E4\uC774 \uC8C4\uB2E4 \uD280\uC5B4\uB098\uC62C \uAC8C\uC694.","\uB188\uB4E4\uC744 \uBAA8\uC870\uB9AC \uD63C\uCB50\uB0B4 \uC8FC\uC2DC\uC624! \uB9C8\uC9C0\uB9C9\uC5D4 \uB3C4\uAE68\uBE44 \uB300\uC655\uC774 \uB098\uC628\uB2E4\uB294 \uC18C\uBB38\uC774 \uC788\uC73C\uB2C8 \uC870\uC2EC\uD558\uACE0.","(\uBD81 \uC55E\uC5D0\uC11C E \uD0A4, \uD639\uC740 \uAC80\uC73C\uB85C \uBD81\uC744 \uBCA0\uC5B4 \uC6B8\uB9AC\uC138\uC694)"];if(this.waveActive)return["\uC9C0\uAE08 \uD55C\uAC00\uD558\uAC8C \uC774\uC57C\uAE30\uD560 \uB54C\uAC00 \uC544\uB2C8\uC624! \uB3C4\uAE68\uBE44\uB4E4\uC774 \uBAB0\uB824\uC624\uACE0 \uC788\uC18C!"];let t=this.curQuest();return t&&t.type!=="talk"?[`${t.title} \uC77C\uC740 \uC5B4\uCC0C \uB418\uC5B4 \uAC00\uC624? ${t.desc.replace(/<[^>]+>/g,"")}.`]:this.round>=1?[`\uD5C8\uD5C8, \uB300\uC655\uAE4C\uC9C0 \uCAD3\uC544\uB0B4\uB2E4\uB2C8! \uBC8C\uC368 ${this.kills}\uB9C8\uB9AC\uB098 \uD63C\uCB50\uC744 \uB0C8\uAD6C\uB824.`,"\uBD81\uC744 \uB2E4\uC2DC \uC6B8\uB9AC\uBA74 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC62C \uAC70\uC694. \uAC01\uC624\uAC00 \uB418\uC5C8\uB2E4\uBA74 \uC5B8\uC81C\uB4E0.","\uCC38, \uB0A8\uBB38 \uBC16\uC73C\uB85C \uCB49 \uB0B4\uB824\uAC00\uBA74 \uB300\uC232\uC774\uC624. \uC5EC\uC6B0\uB4E4\uC774 \uB4E4\uB053\uB294\uB2E4\uB2C8 \uAC00 \uBCF4\uC2DC\uACA0\uC18C?"]:["\uBD81\uC740 \uC800\uAE30 \uC788\uC18C. \uB465\u2014 \uD558\uACE0 \uC6B8\uB824 \uBCF4\uC2DC\uC624!"]}updateQuest(){let t=this.ui,e=this.map;if(this.stage===2){let s=this.enemies.filter(o=>!o.dead&&!o.field).length+this.spawnQueue.length;t.setQuest(`${e.night[0]} \xB7 \uC81C ${this.wave} \uD30C`,`\uB0A8\uC740 ${e.foe} <b>${s}</b>`);return}let i=this.curQuest(),n=this.quest.bounty;if(i)t.setQuest(`${this.quest.step+1}. ${i.title}`,i.desc+this.progText(i,this.quest.prog));else if(n){let s=this.needMet(xi[n.i].need,n.prog);t.setQuest(xi[n.i].title,s?"<b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uB3CC\uC544\uAC00 \uBCF4\uC0C1\uC744 \uBC1B\uC790":this.progText({type:"kill",need:xi[n.i].need},n.prog))}else t.setQuest("\uBAA8\uB4E0 \uC9C0\uC5ED \uD3C9\uC815","<b>\uC218\uBB38\uC7A5</b>\uC5D0\uAC8C \uD604\uC0C1\uC218\uBC30\uB97C \uBC1B\uAC70\uB098, \uBD81\xB7\uBC29\uC6B8\xB7\uBC94\uC885\uC744 \uB2E4\uC2DC \uC6B8\uB824 <b>"+(this.round+1)+"\uD68C\uCC28</b>\uC5D0 \uB3C4\uC804\uD558\uC790")}curQuest(){return Pp[this.quest.step]||null}needMet(t,e){return Object.entries(t).every(([i,n])=>(e[i]||0)>=n)}progText(t,e){return t.type==="kill"?"<br>"+Object.entries(t.need).map(([i,n])=>`${uc[i]} <b>${Math.min(n,e[i]||0)}</b>/${n}`).join(" \xB7 "):t.type==="collect"?`<br>${t.item} <b>${e.n||0}</b>/${t.n}`:t.type==="light"?`<br>\uC11D\uB4F1 <b>${this.quest.lit.length}</b>/${t.n}`:""}sayLines(t){let e=t[0].match(/^([^:]{1,8}):\s*/),i=e?{\uBD84\uC774:"\uC57D\uCD08\uAFBC \uBD84\uC774",\uCCAD\uD5C8:"\uB5A0\uB3CC\uC774 \uB3C4\uC0AC \uCCAD\uD5C8"}[e[1]]||e[1]:"";this.ui.dialog(i,t.map(n=>n.replace(/^[^:]{1,8}:\s*/,"")))}startStep(){this.quest.prog={},this.updateGates();let t=this.curQuest();this.updateQuest(),t&&(this.ui.banner("\uC0C8 \uC784\uBB34",t.title,2.2,""),this.audio.play("wave"),t.startLines&&this.state==="play"&&this.after(.6,()=>{this.ui.inDialog||this.sayLines(t.startLines)}),this.save(!1))}completeStep(){let t=this.curQuest();t&&(this.quest.step++,this.giveReward(t.reward),this.ui.banner("\uC784\uBB34 \uC644\uB8CC",t.title,2.2,"win-banner"),this.audio.play("victory"),this.after(t.type==="wave"?4.2:2.4,()=>this.startStep()),this.updateGates(),this.updateQuest(),this.save(!1))}giveReward(t){if(t&&(t.exp&&(this.player.addExp(t.exp),this.fx.number(this.player.pos.clone().add(lt(0,2.4,0)),`+${t.exp} EXP`,"exp")),t.item)){let e=t.item.startsWith("cls:")?Tn[this.player.cls][+t.item.slice(4)].id:t.item;this.after(1.2,()=>this.pickup(e))}}updateGates(t=!1){if(this.world.setGate("south",this.quest.step>=3,t),this.world.setGate("temple",this.quest.step>=8,t),!t)for(let[e,i]of[["south",3],["temple",8]])this.quest.step===i&&!this.gateNotice?.[e]&&(this.gateNotice={...this.gateNotice||{},[e]:!0},this.audio.play(e==="south"?"drum":"bell"),this.after(.8,()=>this.ui.toast(e==="south"?"\uB0A8\uBB38\uC774 \uC5F4\uB838\uB2E4! \uB0A8\uCABD\uC73C\uB85C \uB0B4\uB824\uAC00\uBA74 \uC8FD\uB9BC\uC774\uB2E4":"\uAE08\uC904\uC774 \uAC77\uD614\uB2E4! \uC77C\uC8FC\uBB38 \uB108\uBA38 \uD3D0\uC0AC\uCC30\uB85C \uB4E4\uC5B4\uAC08 \uC218 \uC788\uB2E4",3.5)))}questOnKill(t){let e=this.curQuest(),i=this.quest.prog;if(e&&e.type==="kill"&&e.need[t.type]&&(i[t.type]||0)<e.need[t.type]&&(i[t.type]=(i[t.type]||0)+1,this.fx.number(lt(t.pos.x,t.y+2.6,t.pos.z),`${uc[t.type]} ${i[t.type]}/${e.need[t.type]}`,"exp"),this.needMet(e.need,i)?this.completeStep():this.updateQuest()),e&&e.type==="collect"&&e.from.includes(t.type)&&Math.random()<e.chance){i.n=(i.n||0)+1;let s=t.center();this.fx.colorFire(s.x,s.y,s.z,20,.4,"#ffe0a0","#ff7a2a"),this.fx.number(lt(t.pos.x,t.y+2.6,t.pos.z),`+${e.item} ${i.n}/${e.n}`,"exp"),this.audio.play("coin"),i.n>=e.n?this.completeStep():this.updateQuest()}let n=this.quest.bounty;if(n){let s=xi[n.i].need;s[t.type]&&(n.prog[t.type]||0)<s[t.type]&&(n.prog[t.type]=(n.prog[t.type]||0)+1,this.needMet(s,n.prog)&&(this.ui.toast("\uD604\uC0C1\uC218\uBC30 \uC644\uB8CC! \uC218\uBB38\uC7A5\uC5D0\uAC8C \uB3CC\uC544\uAC00\uC790",3),this.audio.play("levelup")),this.updateQuest())}}bountyTalk(t){let e=this.quest.bounty;if(e&&this.needMet(xi[e.i].need,e.prog))this.ui.dialog(t.name,["\uC218\uACE0\uD558\uC168\uC18C! \uC57D\uC18D\uD55C \uD604\uC0C1\uAE08\uC774\uC624.","\uB610 \uC218\uBC30\uAC00 \uBD99\uC73C\uBA74 \uC54C\uB824 \uB4DC\uB9AC\uB9AC\uB2E4."],()=>{this.quest.bounty=null,this.giveReward({exp:150+this.round*30,item:hf("boss",this.round,this.player.cls)}),this.ui.banner("\uD604\uC0C1\uC218\uBC30 \uC644\uB8CC",xi[e.i].title,2.2,"win-banner"),this.updateQuest(),this.save(!1)});else if(e)this.ui.dialog(t.name,[`${xi[e.i].title.replace("\uD604\uC0C1\uC218\uBC30: ","")} \uC77C\uC740 \uC5B4\uCC0C \uB418\uC5C8\uC18C? \uC544\uC9C1 \uB35C \uC7A1\uC740 \uAC83 \uAC19\uAD6C\uB824.`]);else{let i=Math.floor(Math.random()*xi.length),n=Object.entries(xi[i].need).map(([s,o])=>`${uc[s]} ${o}\uB9C8\uB9AC`).join(", ");this.ui.dialog(t.name,[`\uB9C8\uCE68 \uC798 \uC624\uC168\uC18C. ${xi[i].title}\uC774 \uBD99\uC5C8\uC18C.`,`${n}\uC744(\uB97C) \uCC98\uCE58\uD574 \uC8FC\uC2DC\uC624. \uD604\uC0C1\uAE08\uC740 \uB450\uB451\uC774 \uB4DC\uB9AC\uB9AC\uB2E4.`],()=>{this.quest.bounty={i,prog:{}},this.ui.banner("\uD604\uC0C1\uC218\uBC30",xi[i].title,2,""),this.updateQuest(),this.save(!1)})}}lightLantern(t){let e=this.curQuest();if(!e||e.type!=="light"||this.quest.lit.includes(t))return;this.quest.lit.push(t);let i=this.world.lanterns[t];this.addFlame(i),this.fx.colorFire(i.x,i.y,i.z,30,.3,"#fff0c0","#ff8a2a"),this.fx.ring(lt(i.x,this.world.heightAt(i.x,i.z),i.z),2,"#ffd080",.4),this.audio.play("fire"),this.quest.lit.length>=e.n?this.completeStep():this.updateQuest(),this.save(!1)}addFlame(t){let e=new ot(new Se(.14,0),new $t({color:"#ffd070"}));e.position.copy(t),e.userData.noOutline=!0,this.scene.add(e),this.flames.push(e)}buildQuestMarkers(){let t=document.createElement("canvas");t.width=8,t.height=16;let e=t.getContext("2d"),i=(a,l,c,h,d)=>{e.fillStyle=d,e.fillRect(a,l,c,h)};i(2,0,4,11,"#1a1208"),i(2,12,4,4,"#1a1208"),i(3,1,2,9,"#ffd040"),i(3,13,2,2,"#ffd040");let n=new Oi(t);n.magFilter=n.minFilter=ae,n.colorSpace=ni,this.markers=[];for(let a=0;a<6;a++){let l=new Wr(new Qs({map:n,transparent:!0,depthWrite:!1}));l.scale.set(.42,.84,1),l.userData.noOutline=!0,l.renderOrder=40,l.visible=!1,this.scene.add(l),this.markers.push(l)}let s=new nr;s.moveTo(0,.55),s.lineTo(.42,0),s.lineTo(.2,0),s.lineTo(.2,-.45),s.lineTo(-.2,-.45),s.lineTo(-.2,0),s.lineTo(-.42,0),s.closePath();let o=new ot(new so(s),new $t({color:"#ffd040",transparent:!0,opacity:.85,depthWrite:!1}));o.rotation.order="YXZ",o.userData.noOutline=!0,o.renderOrder=26,o.visible=!1,o.scale.setScalar(1.5),this.scene.add(o),this.questArrow=o}questTargets(){let t=this.curQuest(),e=[],i=s=>this.npcs.find(o=>o.kind===s),n=s=>{let o=this.world.regions.find(a=>a.id===s);return lt(o.spawn[0],0,o.spawn[2]+(s==="temple"?8:6))};if(!t){let s=this.quest.bounty,o=i("guard");return!s||this.needMet(xi[s.i].need,s.prog)?e.push({pos:o.pos.clone().add(lt(0,2.5,0)),mark:!0}):e.push({pos:n(xi[s.i].region),area:xi[s.i].region}),e}if(t.type==="talk"){let s=i(t.npc);e.push({pos:s.pos.clone().add(lt(0,2.5,0)),mark:!0})}else if(t.type==="wave"){let s=this.world.drums.find(o=>o.region===t.region);e.push({pos:s.pos.clone().add(lt(0,(s.promptY||4)+.6,0)),mark:!this.waveActive})}else if(t.type==="light")this.world.lanterns.forEach((s,o)=>{s.region==="temple"&&!this.quest.lit.includes(o)&&e.push({pos:s.clone().add(lt(0,1.1,0)),mark:!0})});else if(t.type==="kill"||t.type==="collect"){let s=t.type==="collect"||t.need.fox?"bamboo":"temple";e.push({pos:n(s),area:s})}return e}updateQuestMarkers(t){let e=this.state==="play"?this.questTargets():[],i=this.player.pos,n=0;for(let l of e){if(!l.mark||n>=this.markers.length)continue;let c=this.markers[n++];c.visible=!0,c.position.copy(l.pos),c.position.y+=Math.abs(Math.sin(this.time*3))*.25}for(;n<this.markers.length;n++)this.markers[n].visible=!1;let s=null,o=1/0;for(let l of e){if(l.area&&this.world.regionAt(i.x,i.z).id===l.area)continue;let c=Math.hypot(l.pos.x-i.x,l.pos.z-i.z);c<o&&(o=c,s=l)}let a=this.questArrow;if(a.visible=!!s&&o>9&&!this.waveActive&&!this.player.dead,a.visible){let l=Math.atan2(s.pos.x-i.x,s.pos.z-i.z);a.position.set(i.x+Math.sin(l)*2.1,this.player.y+.06,i.z+Math.cos(l)*2.1),a.rotation.set(-Math.PI/2,l+Math.PI,0),a.material.opacity=.55+Math.sin(this.time*5)*.25}}drumHit(t,e=!1){t.shake=1,this.audio.play(t.sound||"drum"),this.shake(.35),this.alarm=3,this.fx.ring(lt(t.pos.x,0,t.pos.z),5,"#fff2c0",.6),this.fx.spark(t.pos.x,2.2,t.pos.z,14,"#fff2c0",5);let i=this.curQuest(),n=t.region||"palace";if(!this.waveActive&&this.stage!==2&&!this.cleared[n]&&!(i&&i.type==="wave"&&i.region===n)){this.time-(this.drumDenyT||-9)>3&&(this.drumDenyT=this.time,this.ui.toast(i?`\uC544\uC9C1 \uC6B8\uB9B4 \uB54C\uAC00 \uC544\uB2C8\uB2E4 \u2014 ${i.title}: ${i.desc.replace(/<[^>]+>/g,"")}`:"\uC544\uC9C1 \uC6B8\uB9B4 \uB54C\uAC00 \uC544\uB2C8\uB2E4",3));return}!e&&this.cleared[n]&&!(i&&i.type==="wave"&&i.region===n)||!this.waveActive&&this.stage!==2&&(t.region&&t.region!==this.mapId&&(this.mapId=t.region,this.map=jn[t.region]),this.startNight())}startNight(){this.waveActive=!0,this.stage=2,this.wave=0,this.nightTarget=1,this.audio.mood="battle";let[t,e]=this.map.night;this.ui.banner(t,this.round>0?`${this.round+1}\uD68C\uCC28 \u2014 \uB354 \uC0AC\uB098\uC6B4 \uB188\uB4E4\uC774 \uC628\uB2E4`:e,3,"night-banner"),this.after(3.2,()=>this.nextWave())}waveDef(t){let e=[];for(let[i,n]of this.map.waves(t,this.round))for(let s=0;s<n;s++)e.push(i);return e}nextWave(){if(this.state==="dead")return;this.wave>0&&this.save(),this.wave++;let t=this.waveDef(this.wave),e=this.wave===3,i={palace:"\uB3C4\uAE68\uBE44 \uB300\uC655 \uB450\uC5B5\uC2DC\uB2C8",bamboo:"\uCC9C\uB144 \uAD6C\uBBF8\uD638",temple:"\uC800\uC2B9\uC0AC\uC790"}[this.mapId];this.ui.banner(`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C`,e?`${i} \uCD9C\uD604!`:`${this.map.foe} ${t.length}\uB9C8\uB9AC`,2.4,e?"boss-banner":""),this.audio.play(e?"drum":"wave");let n=.6;for(let s of t)this.spawnQueue.push({type:s,at:this.time+n}),n+=yf.has(s)?1.2:T(.3,.6);this.updateQuest()}spawnEnemy(t){let e=this.player.pos,i=yf.has(t),n=i?this.world.randomWalkable(e.x,e.z,6,9):this.world.randomWalkable(e.x,e.z,5,10);n||(n=this.world.randomWalkable(e.x,e.z,2,14)||lt(this.world.spawn.x,0,this.world.spawn.z-6));let s=new _r(this,t,n,1+this.round+this.map.lvl+Math.floor((this.player.level-1)/3));i&&(s.name=this.round>0?`${s.T.name} +${this.round}`:s.T.name,this.ui.setBoss(s),this.shake(.5)),this.enemies.push(s)}playerSwingHit(t,e){let i=e===2?2.45:2.2,n=e===2?.95:1.35,s=e===3?1:e,o=t.yaw,a=lt(t.pos.x,t.y+.72,t.pos.z);if(this.fx.slash(a,o,s,{dur:e===3?.2:.16,outer:i+(e===3?.25:0),len:e===3?3.2:2.8,color:e===2?"#fff6d0":e===3?"#d8f4ff":"#a8e4ff"}),this.fx.slash(a,o,s,{dur:e===3?.2:.16,inner:i-.32,outer:i-.05+(e===3?.25:0),len:e===3?3.2:2.8,color:"#ffffff"}),e===2){let c=lt(t.pos.x+Math.sin(o)*1.4,t.y,t.pos.z+Math.cos(o)*1.4);this.fx.ring(c,1.9,"#fff2c0",.3),this.fx.dust(c.x,c.y,c.z,10);for(let h=0;h<14;h++)this.fx.norm.emit({x:c.x+T(-.4,.4),y:c.y+.1,z:c.z+T(-.4,.4),vx:T(-2,2),vy:T(3,6),vz:T(-2,2),g:18,life:.8,size:2,color:"#9a9284",floor:c.y});this.audio.play("impact")}let l=!1;for(let c of this.enemies){if(c.dead||c.spawning)continue;let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z,f=Math.hypot(h,d),u=c.isWisp?c.y+1.3:c.y;if(Math.abs(u-t.y)>2.2||f>i+c.radius||f>.6&&Math.abs(Zn(o,Math.atan2(h,d)))>n)continue;let p=Math.random()<.15,x=Math.round((e===2?T(24,30):e===3?T(18,23):T(13,17))*(p?1.8:1));this.damageEnemy(c,x,p,e===2?9:5.5,e===2?.4:.25),l=!0}for(let c of this.projectiles){if(c.owner!=="enemy"||c.dead||c.kind!=="orb")continue;let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z;Math.hypot(h,d)<i+.3&&Math.abs(Zn(o,Math.atan2(h,d)))<n+.3&&(c.owner="player",c.dir.set(Math.sin(o),0,Math.cos(o)),c.speed*=1.6,c.dmg=30,c.life=1.2,c.hitSet=new Set,this.audio.play("block"),this.fx.spark(c.pos.x,c.pos.y,c.pos.z,10,"#bff4ff",5),this.ui.toast("\uD295\uACA8\uB0B4\uAE30!",.8),this.hitstop=Math.max(this.hitstop,.06))}for(let c of this.world.drums){let h=c.pos.x-t.pos.x,d=c.pos.z-t.pos.z;Math.hypot(h,d)<i+1.3&&Math.abs(Zn(o,Math.atan2(h,d)))<n&&(this.drumHit(c),l=!0)}l&&this.shake(e===2?.22:.12)}damageEnemy(t,e,i,n,s){let o=this.player,a=o.perks,l=e,c=o.atkMul||1;a?.has("rage")&&o.hp<o.maxHp*.4&&(c*=1.35);let h=a?.has("execute")&&t.hp<t.maxHp*.35;h&&(c*=1.6);let d=o.gear||{};!i&&d.crit&&Math.random()<d.crit&&(i=!0,c*=1.8),i&&d.critDmg&&(c*=1+d.critDmg),e=Math.max(1,Math.round(e*c));let f=lt(t.pos.x-o.pos.x,0,t.pos.z-o.pos.z).normalize();if(!t.hit(e,f,n,s))return;let u=t.center().clone();if(a?.size&&this.weaponPerks(t,u,l,e,h),d.ls&&!o.dead&&o.hp<o.maxHp&&(o.lsAcc=(o.lsAcc||0)+e*d.ls,o.lsAcc>=1)){let p=Math.floor(o.lsAcc);o.lsAcc-=p,o.hp=Math.min(o.maxHp,o.hp+p)}if(this.fx.spark(u.x,u.y,u.z,i?18:10,i?"#fff07a":"#ffffff",i?8:6),this.fx.number(u.clone().add(lt(0,.5*(t.isBoss?2:1),0)),e,i?"crit":"normal"),this.audio.play(i?"crit":"hit"),this.hitstop=Math.max(this.hitstop,i?.085:.05),this.hitCombo=this.time-this.lastHitTime<2?this.hitCombo+1:1,this.lastHitTime=this.time,this.hitCombo>this.bestCombo&&(this.bestCombo=this.hitCombo),o.lastCombat=this.time,t.isBoss&&!t.dead){let p=t.hp/t.maxHp;if(p<.6&&t.summoned===0||p<.3&&t.summoned===1){t.summoned++,this.audio.play(t.T.boss==="dokkaebi"?"laugh":t.T.boss==="gumiho"?"howl":"wail"),this.ui.toast(this.map.summonLine,2.4);let[x,m]=t.T.summon;for(let g=0;g<2+this.round;g++)this.spawnQueue.push({type:g===0?x:m,at:this.time+.3+g*.3})}}}skillSword1(t){let e=this.branch(t,1),i=this.rank(t,1),n=Ql(i);if(e==="a"){let s=i>=5?7:i>=3?5:3,o=s===3?.34:s===5?.26:.2,a=i>=5?["#ffa020","#ffe8a0","#ffffff"]:void 0;for(let l=0;l<s;l++)this.spawnSwordWave(t,{yawOff:(l-(s-1)/2)*o,dmgMul:.72*n,scale:.85,quiet:l!==(s-1)/2,color:a})}else if(e==="b"){for(let o of i>=5?[-.45,0,.45]:[0])this.spawnSwordWave(t,{yawOff:o,scale:1.75,dmgMul:2*n,speed:11,life:.9,knock:13,stun:.6,color:["#ff7a2a","#ffd08a","#ffffff"],burn:i>=3,quiet:o!==0});let s=lt(t.pos.x,t.y,t.pos.z);this.fx.ring(s,4.2,"#ffb060",.5),this.fx.scorch(s.clone().add(lt(Math.sin(t.yaw)*1.5,0,Math.cos(t.yaw)*1.5)),1.4,"#2a1a10",2),this.ui.flash("#ffa040",.3),this.shake(.45)}else this.spawnSwordWave(t)}boomAt(t,e,i,n="#ffffff"){this.fx.ring(t,e,n,.4),this.fx.ring(t,e*.5,"#ffffff",.25),this.fx.scorch(t,e*.6,"#1a1420",2),this.fx.spark(t.x,t.y+.4,t.z,26,n,8);for(let s=0;s<30;s++){let o=Math.random()*Math.PI*2,a=T(2,7);this.fx.add.emit({x:t.x,y:t.y+.3,z:t.z,vx:Math.cos(o)*a,vy:T(1,5),vz:Math.sin(o)*a,g:6,drag:2,life:T(.3,.7),size:T(2,4),endSize:1,color:"#ffffff",color2:n})}for(let s of this.enemiesIn(t,e)){let o=Math.random()<.2;this.damageEnemy(s,Math.round(i*(o?1.8:1)),o,7,.4)}this.audio.play("crit"),this.shake(.45),this.hitstop=Math.max(this.hitstop,.06)}spawnSwordWave(t,e={}){let i=t.yaw+(e.yawOff||0),n=e.scale||1,s=lt(Math.sin(i),0,Math.cos(i)),o=lt(t.pos.x,t.y,t.pos.z),a=lt(t.pos.x,t.y+.75,t.pos.z).addScaledVector(s,.6),l={owner:"player",kind:"wave",pos:a,dir:s,yaw:i,speed:e.speed||16,life:e.life||.6,dmg:Math.round(34*(e.dmgMul||1)),hitSet:new Set,radius:1.3*n,trailT:0,scale:n,knock:e.knock,stun:e.stun,cols:e.color,burn:e.burn,burnT:0,mul:e.dmgMul||1},c=p=>p.g.position.copy(l.pos),[h,d,f]=e.color||["#2f7dff","#8fe4ff","#ffffff"],u=l.life;if(l.vis=[this.fx.slash(a,i,0,{inner:.25,outer:2,len:2.4,dur:u,color:h,static:!0,move:c,scale:n}),this.fx.slash(a,i,0,{inner:.9,outer:1.85,len:2.2,dur:u,color:d,static:!0,move:c,scale:n}),this.fx.slash(a,i,0,{inner:1.55,outer:1.8,len:2,dur:u,color:f,static:!0,move:c,scale:n})],this.projectiles.push(l),!e.quiet){this.audio.play("skill"),this.fx.ring(o,2.6,"#7fd8ff",.4),this.fx.ring(o,1.3,"#ffffff",.22),this.fx.spark(a.x,a.y,a.z,18,"#d8f6ff",7);for(let p=0;p<24;p++){let x=p/24*Math.PI*2;this.fx.add.emit({x:o.x+Math.cos(x)*.4,y:o.y+.08,z:o.z+Math.sin(x)*.4,vx:Math.cos(x)*5,vy:T(.2,1.2),vz:Math.sin(x)*5,drag:4,life:T(.25,.45),size:3,endSize:1,color:"#bff4ff",color2:"#2050ff"})}this.ui.flash("#3a8cff",.18),this.hitstop=Math.max(this.hitstop,.05),this.shake(.22)}}swordWaveTrail(t,e){let i=this.fx;t.burn&&(t.burnT-=e,t.burnT<=0&&(t.burnT=.09,this.fires.push({pos:lt(t.pos.x,this.world.heightAt(t.pos.x,t.pos.z),t.pos.z),t:0,dur:2.6,tick:0,mul:t.mul*.6}))),t.trailT-=e,t.trailT<=0&&(t.trailT=.03,i.slash(t.pos.clone(),t.yaw,0,{inner:.6,outer:1.95,len:2.3,dur:.18,color:t.cols?t.cols[0]:"#2a5cff",static:!0,fadeAll:!0,scale:t.scale||1}));let n=lt(t.dir.z,0,-t.dir.x);for(let o=0;o<5;o++){let a=T(-1.1,1.1),l=T(1.2,1.9),c=t.pos.x+(t.dir.x*Math.cos(a)+n.x*Math.sin(a))*l,h=t.pos.z+(t.dir.z*Math.cos(a)+n.z*Math.sin(a))*l;i.add.emit({x:c,y:t.pos.y+T(-.15,.25),z:h,vx:-t.dir.x*T(2,5),vy:T(0,1.2),vz:-t.dir.z*T(2,5),drag:3,life:T(.25,.5),size:T(2,4),endSize:1,color:"#e0faff",color2:"#2050ff"})}let s=this.world.heightAt(t.pos.x,t.pos.z);for(let o=0;o<3;o++){let a=T(-1.3,1.3);i.add.emit({x:t.pos.x+n.x*a,y:s+.06,z:t.pos.z+n.z*a,life:T(.5,.9),size:2,color:"#7fd8ff",alpha:.8})}}swordWaveEnd(t){let e=this.fx;for(let i of t.vis)i.kill=!0;this.audio.play("burst"),e.ring(lt(t.pos.x,this.world.heightAt(t.pos.x,t.pos.z),t.pos.z),2.2,"#7fd8ff",.35);for(let i=0;i<36;i++){let n=Math.random()*Math.PI*2,s=T(-.3,1);e.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,vx:Math.cos(n)*T(2,6),vy:s*4,vz:Math.sin(n)*T(2,6),g:6,drag:2.5,life:T(.3,.7),size:T(2,4),endSize:1,color:"#e0faff",color2:"#1a40ff"})}}playerShoot(t,e){let i=e%10===2;if(t.cls==="mage"){let n=i?[-.28,0,.28]:[0];for(let s of n)this.spawnTalisman(t,t.yaw+s,i?15:19);this.audio.play("cast")}else{let n=i?[-.14,0,.14]:[0];for(let s of n)this.spawnArrow(t,t.yaw+s,{dmg:i?14:16});this.audio.play("bow")}}playerSkillHit(t,e){let i=this.branch(t,1),n=this.rank(t,1),s=Ql(n);if(t.cls==="mage")i==="a"?this.castLightning(t,{mul:s,storm:{dur:n>=3?6:4.2,tick:n>=3?.38:.55,hits:n>=5?2:1,R:n>=5?6:4.6}}):i==="b"?this.castLightning(t,{R:3.9,mult:1.9,mul:s,stun:1.3,big:!0,after:n>=3,chain:n>=5}):this.castLightning(t);else if(t.cls==="elf")if(i==="a"){let o=n>=5?5:n>=3?4:3,a=n>=5?9:7;for(let l=0;l<o;l++)this.after(l*.16,()=>{t.dead||this.windArrows(t,{n:a,spread:.11,dmg:17*s,quiet:l>0})})}else i==="b"?this.bigArrow(t,{n:n>=3?3:1,boom:n>=5,mul:s}):this.windArrows(t)}bigArrow(t,e={}){let i=e.n===3?[-.22,0,.22]:[0];for(let o of i){this.spawnArrow(t,t.yaw+o,{dmg:Math.round(140*(e.mul||1)),pierce:!0,glow:!0,speed:30,life:.95,big:!0});let a=this.projectiles[this.projectiles.length-1];a.boom=e.boom,a.mul=e.mul||1}let n=lt(t.pos.x,t.y,t.pos.z),s=this.handPos(t);this.fx.circle(n,2.4,"#d8ffb0",.8,-3);for(let o=0;o<4;o++)this.after(o*.05,()=>this.fx.ring(s.clone().add(lt(Math.sin(t.yaw)*o*.9,0,Math.cos(t.yaw)*o*.9)),1+o*.5,o?"#e8ffc8":"#ffffff",.3));this.fx.spark(s.x,s.y,s.z,24,"#f0ffd8",8),this.audio.play("bowskill"),this.audio.play("thunder"),this.ui.flash("#c8ff9a",.3),this.shake(.45),this.hitstop=Math.max(this.hitstop,.06)}handPos(t,e=lt()){return e.set(t.pos.x+Math.sin(t.yaw)*.5,t.y+.95,t.pos.z+Math.cos(t.yaw)*.5)}spawnTalisman(t,e,i){let n=lt(Math.sin(e),0,Math.cos(e)),s=this.handPos(t),o=new Lt,a=new ot(new me(.24,.36),new $t({color:"#f6d870",side:fe})),l=new ot(new me(.06,.26),new $t({color:"#c8302c",side:fe}));l.position.z=.002,a.add(l),o.add(a),o.position.copy(s),this.scene.add(o),this.projectiles.push({owner:"player",kind:"talisman",pos:s,dir:n,yaw:e,speed:13,life:.8,dmg:i,mesh:o,paper:a,radius:.5,hitSet:new Set,knock:4,stun:.3})}talismanBurst(t){let e=this.fx,i=t.pos;this.audio.play("fire"),e.ring(lt(i.x,this.world.heightAt(i.x,i.z),i.z),1.7,"#ffb050",.3);for(let n=0;n<26;n++){let s=Math.random()*Math.PI*2,o=T(1.5,4.5);e.add.emit({x:i.x,y:i.y,z:i.z,vx:Math.cos(s)*o,vy:T(.5,3.5),vz:Math.sin(s)*o,g:3,drag:3,life:T(.25,.55),size:T(2,5),endSize:1,color:"#fff2a0",color2:"#ff3a10",flicker:.3})}e.smoke(i.x,i.y-.2,i.z,5);for(let n of this.enemies)n.dead||n.spawning||n===t.hitEnemy||Math.hypot(n.pos.x-i.x,n.pos.z-i.z)<1.5+n.radius&&this.damageEnemy(n,Math.round(t.dmg*.6),!1,3,.2)}spawnArrow(t,e,{dmg:i=16,pierce:n=!1,glow:s=!1,speed:o=26,life:a=.55,big:l=!1}={}){let c=lt(Math.sin(e),0,Math.cos(e)),h=this.handPos(t),d=this.makeArrowMesh(s);d.position.copy(h),d.rotation.y=e,l&&d.scale.set(3,3,2.6),this.scene.add(d),this.projectiles.push({owner:"player",kind:"arrow",pos:h,dir:c,yaw:e,speed:o,life:a,dmg:i,mesh:d,radius:l?1.2:.4,hitSet:new Set,pierce:n,glow:s,big:l,knock:l?10:n?5:3,stun:l?.6:n?.3:.18})}makeArrowMesh(t){let e=new Lt,i=new $t({color:t?"#c8ff9a":"#9a7a52"}),n=new ot(new ut(.04,.04,.78),i),s=new ot(new ne(.05,.14,4),new $t({color:t?"#ffffff":"#d8dde4"}));s.rotation.x=Math.PI/2,s.position.z=.44;let o=new ot(new ut(.1,.02,.14),new $t({color:t?"#8aff6a":"#f0ece0"}));return o.position.z=-.32,e.add(n,s,o),e}missileTrail(t,e){let i=this.fx;if(t.kind==="talisman"){t.paper.rotation.z+=e*18,t.paper.rotation.y=Math.sin(this.time*20)*.5,t.mesh.position.copy(t.pos);for(let s=0;s<2;s++)i.add.emit({x:t.pos.x+T(-.1,.1),y:t.pos.y+T(-.1,.1),z:t.pos.z+T(-.1,.1),vx:-t.dir.x*2+T(-.4,.4),vy:T(.4,1.4),vz:-t.dir.z*2+T(-.4,.4),life:T(.2,.4),size:T(2,4),endSize:1,color:"#ffe080",color2:"#ff3010",flicker:.3})}else if(t.mesh.position.copy(t.pos),t.big)for(let s=0;s<8;s++)i.add.emit({x:t.pos.x+T(-.3,.3),y:t.pos.y+T(-.3,.3),z:t.pos.z+T(-.3,.3),vx:-t.dir.x*4+T(-1,1),vy:T(-.5,1),vz:-t.dir.z*4+T(-1,1),life:T(.3,.6),size:T(3,5),endSize:1,color:"#ffffff",color2:"#7aff5a"});else if(t.glow)for(let s=0;s<2;s++)i.add.emit({x:t.pos.x+T(-.08,.08),y:t.pos.y+T(-.08,.08),z:t.pos.z+T(-.08,.08),vx:-t.dir.x*3,vy:T(0,.6),vz:-t.dir.z*3,life:T(.2,.4),size:T(2,3),endSize:1,color:"#e8ffc8",color2:"#3aa83a"});else Math.random()<.6&&i.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,life:.12,size:2,color:"#fff8e0",alpha:.6});this.world.heightAt(t.pos.x,t.pos.z)>t.pos.y-.3&&(t.life=0)}aimPoint(t,e=5,i=11){if(this.validTarget(this.target)){let a=this.target;return lt(a.pos.x,this.world.heightAt(a.pos.x,a.pos.z),a.pos.z)}let n=null,s=i;for(let a of this.enemies){if(a.dead||a.spawning)continue;let l=a.pos.x-t.pos.x,c=a.pos.z-t.pos.z,h=Math.hypot(l,c);h<s&&Math.abs(Zn(t.yaw,Math.atan2(l,c)))<1&&(s=h,n=a)}let o=n?lt(n.pos.x,0,n.pos.z):lt(t.pos.x+Math.sin(t.yaw)*e,0,t.pos.z+Math.cos(t.yaw)*e);return o.y=this.world.heightAt(o.x,o.z),o}enemiesIn(t,e){return this.enemies.filter(i=>!i.dead&&!i.spawning&&Math.hypot(i.pos.x-t.x,i.pos.z-t.z)<e+i.radius)}castLightning(t,e={}){let i=this.aimPoint(t),n=e.R||2.9;this.fx.circle(i,n*1.15,"#b89aff",1.3,2.2),this.fx.circle(lt(t.pos.x,t.y,t.pos.z),1.3,"#d8c8ff",.7,-3);let s=this.fx.ring(i,n,"#b89aff",1,1);for(let o=0;o<46;o++){let a=Math.random()*Math.PI*2,l=n*T(.8,1.1);this.fx.add.emit({x:i.x+Math.cos(a)*l,y:i.y+T(.1,1.6),z:i.z+Math.sin(a)*l,vx:-Math.cos(a)*l/.42,vy:T(-.5,1),vz:-Math.sin(a)*l/.42,life:.42,size:T(2,3),color:"#e8e0ff",color2:"#6a4aff"})}this.audio.play("charge"),this.shake(.12),this.timers.push({at:this.time+.42,fn:()=>{this.fx.removeRing(s),this.fx.bolt(i,e.big?3.2:1.7),e.big&&(this.fx.bolt(lt(i.x+.4,i.y,i.z-.3),1.6),this.fx.ring(i,n*1.7,"#ffffff",.6),this.ui.flash("#ffffff",.8),this.shake(1)),e.storm&&this.storms.push({c:i.clone(),R:e.storm.R,t:0,dur:e.storm.dur,every:e.storm.tick,tick:.3,hits:e.storm.hits,mul:e.mul||1}),this.audio.play("thunder"),this.ui.flash("#e8e0ff",.6),this.shake(.7),this.hitstop=Math.max(this.hitstop,.09),this.fx.ring(i,n*1.3,"#d8c8ff",.45),this.fx.ring(i,n*.6,"#ffffff",.25),this.fx.scorch(i,n*.75,"#1c1230",3);for(let l=0;l<60;l++){let c=Math.random()*Math.PI*2,h=T(2,9);this.fx.add.emit({x:i.x,y:i.y+.3,z:i.z,vx:Math.cos(c)*h,vy:T(1,7),vz:Math.sin(c)*h,g:10,drag:2,life:T(.3,.8),size:T(2,4),endSize:1,color:"#ffffff",color2:"#7a5aff"})}for(let l=0;l<30;l++){let c=Math.random()*Math.PI*2,h=T(.3,n);this.fx.add.emit({x:i.x+Math.cos(c)*h,y:i.y+.06,z:i.z+Math.sin(c)*h,vy:T(0,.4),life:T(.8,1.6),size:2,color:"#d8c8ff",alpha:.8,flicker:.7})}let o=this.enemiesIn(i,n),a=lt(i.x,i.y+1.2,i.z);for(let l of o){let c=Math.random()<.2;this.damageEnemy(l,Math.round(T(44,54)*(e.mult||1)*(e.mul||1)*(c?1.8:1)),c,e.big?6:3,e.stun||.7);let h=l.center().clone();this.fx.arc(a,h,"#c8b0ff",.8),this.fx.spark(h.x,h.y,h.z,10,"#e8e0ff",6),a=h}e.chain&&this.enemies.filter(c=>!c.dead&&!c.spawning&&!o.includes(c)&&Math.hypot(c.pos.x-i.x,c.pos.z-i.z)<12).sort((c,h)=>Math.hypot(c.pos.x-i.x,c.pos.z-i.z)-Math.hypot(h.pos.x-i.x,h.pos.z-i.z)).slice(0,2).forEach((c,h)=>this.after(.25+h*.2,()=>{if(c.dead)return;let d=lt(c.pos.x,c.y,c.pos.z);this.fx.bolt(d,2.6),this.fx.ring(d,3,"#ffffff",.4),this.audio.play("thunder"),this.shake(.6);for(let f of this.enemiesIn(d,2.6))this.damageEnemy(f,Math.round(T(44,54)*1.5*(e.mul||1)),!0,5,1)}));for(let l=1;l<=3;l++)this.timers.push({at:this.time+l*.07,fn:()=>{let c=lt(i.x+T(-2,2),i.y,i.z+T(-2,2));if(this.fx.bolt(c,e.after?1.3:.9),this.fx.spark(c.x,c.y+.2,c.z,8,"#e8e0ff",5),this.shake(.25),e.after)for(let h of this.enemiesIn(c,1.6))this.damageEnemy(h,Math.round(22*(e.mul||1)),!1,2,.3)}})}})}windArrows(t,e={}){let i=e.n||9,n=e.spread||.13;for(let a=0;a<i;a++)this.spawnArrow(t,t.yaw+(a-(i-1)/2)*n,{dmg:e.dmg||22,pierce:!0,glow:!0,speed:24,life:.6});if(this.audio.play("bowskill"),e.quiet){this.fx.ring(this.handPos(t),1.2,"#c8ffb0",.22);return}let s=lt(t.pos.x,t.y,t.pos.z);this.fx.circle(s,2.2,"#8aff7a",.7,3);let o=this.handPos(t);for(let a=0;a<3;a++)this.timers.push({at:this.time+a*.05,fn:()=>{let l=o.clone().add(lt(Math.sin(t.yaw)*a*.6,0,Math.cos(t.yaw)*a*.6));this.fx.ring(l,.8+a*.4,a?"#c8ffb0":"#ffffff",.25)}});for(let a=0;a<36;a++){let l=t.yaw+T(-.8,.8);this.fx.norm.emit({x:s.x,y:s.y+T(.3,1.2),z:s.z,vx:Math.sin(l)*T(3,9),vy:T(0,1.5),vz:Math.cos(l)*T(3,9),drag:2,wob:1.5,life:T(.5,1.1),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"})}for(let a=0;a<30;a++){let l=a/30*Math.PI*4,c=.3+a*.03;this.fx.add.emit({x:s.x+Math.cos(l)*c,y:s.y+a*.05,z:s.z+Math.sin(l)*c,vx:-Math.sin(l)*3,vy:1,vz:Math.cos(l)*3,life:.4,size:2,color:"#e8ffd8",color2:"#3aa83a"})}this.ui.flash("#6aff7a",.18),this.shake(.2)}castSkill(t,e){let i=t.cls+e,n=this.branch(t,e),s=this.rank(t,e),o=Ql(s);if(i==="sword2")if(n==="a"){let a=s>=5?4:s>=3?3:2;this.skillIssen(t,{mult:o});for(let l=1;l<a;l++)this.after(.72*l,()=>{t.dead||(t.yaw+=Math.PI,this.skillIssen(t,{mult:.9*o,tint:"#ffd890"}))});s>=5&&this.after(.72*(a-1)+.7,()=>{if(t.dead)return;let l=lt(t.pos.x,t.y,t.pos.z);this.fx.cross(l.clone().add(lt(0,1,0)),"#fff2c0",7,.5),this.ui.flash("#ffffff",.5),this.boomAt(l,3.2,Math.round(70*o),"#ffe8a0")})}else n==="b"?this.skillIssen(t,{mark:!0,mult:o,markR:s>=3?3:2,spread:s>=3,twice:s>=5,mul:o}):this.skillIssen(t);else if(i==="sword3")n==="a"?this.skillWhirl(t,{spins:s>=3?7:5,R:s>=3?1.2:.8,pull:!0,mul:o,quake:s>=5}):(this.skillWhirl(t,{mul:n?o:1}),n==="b"&&this.after(.8,()=>this.startBladeRing(t,{n:s>=5?7:s>=3?5:3,R:s>=3?2.4:2,dur:s>=5?8:5,shoot:s>=5,mul:o})));else if(i==="mage2")if(n==="a"){let a=s>=5?4:s>=3?3:2;for(let l=0;l<a;l++)this.skillDragon(t,{phase:l/a*Math.PI*2,dmg:(a>2?13:15)*o,gold:s>=5||l%2===1})}else this.skillDragon(t,n==="b"?{trail:!0,boom:1.6,mul:o,hot:s>=3,pillars:s>=5}:{});else if(i==="mage3")n==="a"?this.skillFrost(t,{shatter:!0,mul:o,splash:s>=3,renova:s>=5}):n==="b"?this.skillFrost(t,s>=5?{R:8.8,freeze:5,mult:1.5*o}:s>=3?{R:7.6,freeze:4,mult:1.25*o}:{R:6.4,freeze:3.4,mult:1.25*o}):this.skillFrost(t);else if(i==="elf2")n==="a"?this.skillArrowRain(t,{fire:!0,mul:o,R:s>=3?3.8:3,dur:s>=3?2:1.4,burn:s>=5}):n==="b"?this.skillMeteor(t,{n:s>=5?9:s>=3?7:5,big:s>=5,mul:o}):this.skillArrowRain(t);else if(i==="elf3")if(n==="a"){let a=s>=5?4:s>=3?3:2;for(let l=0;l<a;l++)this.skillTornado(t,{yawOff:(l-(a-1)/2)*(.8/Math.max(1,a-1))*1.4,quiet:l>0,dur:s>=5?4.5:3.2,mul:o})}else if(n==="b"){let a=s>=5?3:s>=3?2:1;for(let l=0;l<a;l++)this.skillTornado(t,{orbit:!0,angOff:l/a*Math.PI*2,quiet:l>0,dur:s>=5?6:4.6,mul:o})}else this.skillTornado(t)}skillIssen(t,e={}){let i=lt(Math.sin(t.yaw),0,Math.cos(t.yaw)),n=t.pos.clone();this.fx.ghost(t.rig,"#ffffff",.4),this.world.move(t.pos,i.x*7,i.z*7,t.moveR),t.vel.set(0,0,0),t.invuln=Math.max(t.invuln,.6);let s=t.pos.clone(),o=t.y+.8;this.fx.streak(lt(n.x,o,n.z),lt(s.x,o,s.z),"#ffffff",.55,.5),this.fx.streak(lt(n.x,o,n.z),lt(s.x,o,s.z),e.mark?"#ff4a3a":e.tint||"#7fd8ff",.7,1.2);for(let h=1;h<5;h++){let d=h/5,f=n.clone().lerp(s,d);this.fx.add.emit({x:f.x,y:o,z:f.z,vx:T(-1,1),vy:T(0,1),vz:T(-1,1),life:.4,size:3,endSize:1,color:"#ffffff",color2:"#7fd8ff"})}this.fx.dust(n.x,n.y,n.z,12),this.fx.ring(lt(s.x,t.y,s.z),1.6,"#ffffff",.25),this.audio.play("dash"),this.audio.play("swing3"),this.shake(.2);let a=s.clone().sub(n),l=a.lengthSq()||1,c=this.enemies.filter(h=>{if(h.dead||h.spawning)return!1;let d=Math.max(0,Math.min(1,((h.pos.x-n.x)*a.x+(h.pos.z-n.z)*a.z)/l)),f=n.x+a.x*d,u=n.z+a.z*d;return Math.hypot(h.pos.x-f,h.pos.z-u)<1.3+h.radius});t.sinceAttack=5,this.timers.push({at:this.time+.62,fn:()=>{if(this.audio.play("sheathe"),!!c.length){this.audio.play("crit"),this.ui.flash("#ffffff",.35),this.shake(.5),this.hitstop=Math.max(this.hitstop,.1);for(let h of c){if(h.dead)continue;let d=Math.random()<.3;this.damageEnemy(h,Math.round(T(40,48)*(e.mult||1)*(d?1.8:1)),d,5,.6);let f=h.center().clone();this.fx.cross(f,e.mark?"#ff8a6a":"#fff6d0",h.isBoss?6:4.2,.45),this.fx.spark(f.x,f.y,f.z,16,"#fff6d0",8),e.mark&&!h.dead&&this.markEnemy(h,e)}}}})}skillWhirl(t,e={}){let i=e.spins||3;i>3&&t.attack&&(t.attack.dur=.27*i+.1);for(let n=0;n<i;n++)this.timers.push({at:this.time+n*.27,fn:()=>{if(t.dead)return;let s=n===i-1,o=(s?2.9:2.5)+(e.R||0);if(e.pull){for(let c of this.enemiesIn(t.pos,o+2.5)){let h=t.pos.x-c.pos.x,d=t.pos.z-c.pos.z,f=Math.hypot(h,d)||1;f>1.2&&this.world.move(c.pos,h/f*Math.min(1.1,f-1.1)*(c.isBoss?.25:1),d/f*Math.min(1.1,f-1.1)*(c.isBoss?.25:1),c.moveR??c.radius)}for(let c=0;c<14;c++){let h=Math.random()*Math.PI*2,d=o+1.5;this.fx.add.emit({x:t.pos.x+Math.cos(h)*d,y:t.y+T(.2,1.5),z:t.pos.z+Math.sin(h)*d,vx:-Math.cos(h)*7-Math.sin(h)*4,vy:.5,vz:-Math.sin(h)*7+Math.cos(h)*4,life:.3,size:2,color:"#e0f4ff",color2:"#5aa8ff"})}}let a=lt(t.pos.x,t.y+.7,t.pos.z);this.fx.slash(a,t.yaw+n*2.1,0,{inner:.4,outer:o,len:6.25,dur:.24,color:s?"#fff6d0":"#a8e4ff"}),this.fx.slash(a,t.yaw+n*2.1,0,{inner:o-.3,outer:o-.05,len:6.25,dur:.24,color:"#ffffff"}),this.fx.ring(lt(t.pos.x,t.y,t.pos.z),o,s?"#fff2c0":"#bfe8ff",.3);for(let c=0;c<16;c++){let h=c/16*Math.PI*2;this.fx.norm.emit({x:t.pos.x+Math.cos(h)*.6,y:t.y+.1,z:t.pos.z+Math.sin(h)*.6,vx:Math.cos(h)*4-Math.sin(h)*3,vy:T(.3,1),vz:Math.sin(h)*4+Math.cos(h)*3,drag:3,life:.5,size:3,endSize:1,color:"#c8bca0",alpha:.7})}this.audio.play(s?"swing3":"swing");let l=!1;for(let c of this.enemiesIn(t.pos,o)){let h=Math.random()<.15;this.damageEnemy(c,Math.round((s?T(22,28):T(13,17))*(e.mul||1)*(h?1.8:1)),h,s?8:2.5,.3),l=!0}l&&this.shake(s?.35:.15),s&&e.quake&&(this.ui.flash("#bfe8ff",.4),this.boomAt(lt(t.pos.x,t.y,t.pos.z),o+3.5,Math.round(60*(e.mul||1)),"#bfe8ff"))}})}skillDragon(t,e={}){let i=lt(Math.sin(t.yaw),0,Math.cos(t.yaw)),n=this.handPos(t),s=new Lt,o=[],a=12;for(let h=0;h<a;h++){let d=h/(a-1),f=new ct(e.gold?"#ffffff":"#fff2a0").lerp(new ct(e.gold?"#ffb020":e.trail?"#c81a0a":"#e8401a"),d),u=new ot(new Se(.46*(1-d*.6),1),new $t({color:f}));s.add(u),o.push(u)}let l=o[0];for(let h of[-1,1]){let d=new ot(new ne(.06,.35,4),new $t({color:"#ffd040"}));d.position.set(h*.16,.22,-.12),d.rotation.x=-.8,l.add(d);let f=new ot(new ut(.07,.07,.05),new $t({color:"#2a0a0a"}));f.position.set(h*.13,.08,.27),l.add(f)}this.scene.add(s);let c={owner:"fx",kind:"dragon",pos:n.clone(),base:n.clone(),dir:i,yaw:t.yaw,speed:10,life:1.6,t:0,dmg:(e.dmg||20)*(e.mul||1),mesh:s,segs:o,hist:[],hitAt:new Map,phase:e.phase||0,trail:!!e.trail,boom:e.boom||1,trailT:0,mul:e.mul||1,hot:e.hot,pillars:e.pillars};for(let h=0;h<a*3;h++)c.hist.push(n.clone());this.projectiles.push(c),this.audio.play("fire"),this.audio.play("cast"),this.fx.circle(lt(t.pos.x,t.y,t.pos.z),1.6,"#ffa040",.6,3),this.fx.ring(n,1.4,"#ffd080",.3),this.ui.flash("#ff8a30",.18),this.shake(.2)}dragonUpdate(t,e){t.t+=e,t.base.addScaledVector(t.dir,t.speed*e);let i=lt(t.dir.z,0,-t.dir.x),n=Math.sin(t.t*9+t.phase)*.9;if(t.trail&&(t.trailT-=e,t.trailT<=0)){t.trailT=.12;let a=this.world.heightAt(t.pos.x,t.pos.z);this.fires.push({pos:lt(t.pos.x,a,t.pos.z),t:0,dur:t.hot?4:2.6,tick:0,mul:t.mul*(t.hot?1.5:1)})}t.pos.copy(t.base).addScaledVector(i,n),t.pos.y=t.base.y+Math.sin(t.t*6)*.25,t.hist.unshift(t.pos.clone()),t.hist.length=t.segs.length*3,t.segs.forEach((a,l)=>{let c=t.hist[Math.min(t.hist.length-1,l*3)];a.position.copy(c)});let s=t.segs[0],o=t.hist[2]||t.pos;s.lookAt(t.pos.clone().add(t.pos.clone().sub(o)));for(let a=0;a<4;a++){let l=t.hist[Math.floor(Math.random()*t.hist.length)];this.fx.add.emit({x:l.x+T(-.15,.15),y:l.y+T(-.1,.2),z:l.z+T(-.15,.15),vx:T(-.6,.6),vy:T(.8,2),vz:T(-.6,.6),life:T(.25,.5),size:T(2,5),endSize:1,color:"#fff0a0",color2:"#ff2a00",flicker:.3})}for(let a of this.enemies){if(a.dead||a.spawning||Math.hypot(a.pos.x-t.pos.x,a.pos.z-t.pos.z)>.9+a.radius)continue;let l=t.hitAt.get(a)??-9;if(this.time-l<.35)continue;t.hitAt.set(a,this.time);let c=Math.random()<.2;this.damageEnemy(a,Math.round(t.dmg*(c?1.8:1)*T(.9,1.1)),c,3,.3);let h=a.center();for(let d=0;d<12;d++)this.fx.add.emit({x:h.x,y:h.y,z:h.z,vx:T(-3,3),vy:T(1,4),vz:T(-3,3),drag:2,life:T(.3,.5),size:3,endSize:1,color:"#ffe080",color2:"#ff3010"})}if(t.life<=0&&!t.exploded){t.exploded=!0;let a=t.pos,l=this.world.heightAt(a.x,a.z);this.audio.play("fire");let c=t.boom;this.fx.ring(lt(a.x,l,a.z),2.4*c,"#ffb050",.35),c>1&&(this.fx.ring(lt(a.x,l,a.z),1.4*c,"#ffffff",.25),this.fx.circle(lt(a.x,l,a.z),2*c,"#ff6a2a",.8,3),this.ui.flash("#ff7a30",.3)),this.fx.scorch(lt(a.x,l,a.z),1.6*c,"#2a140a",2.5);for(let h=0;h<40;h++){let d=Math.random()*Math.PI*2,f=T(2,6);this.fx.add.emit({x:a.x,y:a.y,z:a.z,vx:Math.cos(d)*f,vy:T(.5,5),vz:Math.sin(d)*f,g:4,drag:2.5,life:T(.3,.7),size:T(2,5),endSize:1,color:"#fff2a0",color2:"#ff2a00",flicker:.3})}for(let h of this.enemiesIn(a,2.2*c))this.damageEnemy(h,Math.round(T(24,30)*c*t.mul),!1,6,.35);if(t.pillars)for(let h=0;h<6;h++)this.after(.1+h*.08,()=>{let d=h/6*Math.PI*2,f=lt(a.x+Math.cos(d)*2.6,0,a.z+Math.sin(d)*2.6);f.y=this.world.heightAt(f.x,f.z);for(let u=0;u<26;u++)this.fx.add.emit({x:f.x+T(-.3,.3),y:f.y+T(0,.5),z:f.z+T(-.3,.3),vx:T(-.4,.4),vy:T(5,10),vz:T(-.4,.4),life:T(.4,.7),size:T(3,6),endSize:1,color:"#fff0a0",color2:"#ff2a00",flicker:.3});this.fx.ring(f,1.3,"#ffb050",.3);for(let u of this.enemiesIn(f,1.4))this.damageEnemy(u,Math.round(30*t.mul),!1,4,.3);this.fires.push({pos:f,t:0,dur:3,tick:0,mul:t.mul,big:!0})});this.shake(.35*c)}}skillFrost(t,e={}){let i=e.at?e.at.clone():lt(t.pos.x,t.y,t.pos.z),n=e.R||4.6,s=n/4.6;this.fx.circle(i,n,"#8ad8ff",1.6,1.4),this.fx.scorch(i,n*.9,"#cfefff",2.6),this.audio.play("freeze"),this.ui.flash("#8ad8ff",.25),this.shake(.35),[1.4*s,2.8*s,4.2*s].forEach((a,l)=>{this.timers.push({at:this.time+l*.09,fn:()=>{let c=Math.round(a*5);for(let h=0;h<c;h++){let d=h/c*Math.PI*2+l*.3,f=i.x+Math.cos(d)*a,u=i.z+Math.sin(d)*a,p=this.world.heightAt(f,u);Math.abs(p-i.y)>1||this.fx.iceSpike(lt(f,p,u),T(.8,1.5)*(1-l*.15),1.4-l*.1)}this.fx.ring(i,a+.3,"#d8f4ff",.25);for(let h=0;h<20;h++){let d=Math.random()*Math.PI*2;this.fx.add.emit({x:i.x+Math.cos(d)*a,y:i.y+.2,z:i.z+Math.sin(d)*a,vx:Math.cos(d)*2,vy:T(1,3),vz:Math.sin(d)*2,g:6,life:T(.4,.8),size:2,color:"#ffffff",color2:"#7ac8ff"})}this.shake(.15)}})});let o=[];for(let a of this.enemiesIn(i,n)){let l=Math.random()<.15;this.damageEnemy(a,Math.round(T(26,32)*(e.mult||1)*(e.mul||1)*(l?1.8:1)),l,1,.2),a.freeze(e.freeze||1.8),o.push(a)}e.shatter&&this.after(1.5,()=>{let a=!1;for(let l of o){if(l.dead)continue;a=!0;let c=l.center().clone();if(this.damageEnemy(l,Math.round(T(40,48)*(e.mul||1)),!0,4,.4),e.splash)for(let h of this.enemiesIn(l.pos,2.2))h!==l&&this.damageEnemy(h,Math.round(20*(e.mul||1)),!1,3,.2);this.fx.cross(c,"#e8f8ff",l.isBoss?5:3.4,.4);for(let h=0;h<24;h++){let d=Math.random()*Math.PI*2,f=T(2,6);this.fx.add.emit({x:c.x,y:c.y,z:c.z,vx:Math.cos(d)*f,vy:T(1,5),vz:Math.sin(d)*f,g:12,life:T(.4,.8),size:T(2,4),endSize:1,color:"#ffffff",color2:"#6ac8ff"})}this.fx.ring(lt(l.pos.x,l.y,l.pos.z),1.6,"#bfe8ff",.3)}a&&(this.audio.play("freeze"),this.audio.play("crit"),this.shake(.4),this.hitstop=Math.max(this.hitstop,.07)),e.renova&&this.after(.35,()=>this.skillFrost(t,{at:i,mul:(e.mul||1)*.8,freeze:1.5}))})}skillArrowRain(t,e={}){let i=this.aimPoint(t,6),n=e.R||3,s=e.fire?"#ffb060":"#9aff8a";this.fx.circle(i,n*1.1,s,1.7,1.6);let o=this.fx.ring(i,n,s,1,1);this.audio.play("bow"),this.audio.play("bowskill");for(let a=0;a<5;a++)this.fx.add.emit({x:t.pos.x+T(-.2,.2),y:t.y+1.4,z:t.pos.z+T(-.2,.2),vx:T(-.5,.5),vy:18,vz:T(-.5,.5),life:.4,size:3,color:"#e8ffd8",color2:"#3aa83a"});this.rains.push({c:i,R:n,t:-.35,dur:e.dur||(e.fire?1.4:1.2),acc:0,tele:o,fire:!!e.fire,mul:e.mul||1,burn:e.burn})}skillTornado(t,e={}){let i=t.yaw+(e.yawOff||0),n=lt(Math.sin(i),0,Math.cos(i)),s=lt(t.pos.x+n.x*1.5,t.y,t.pos.z+n.z*1.5),o=[];for(let a=0;a<4;a++){let l=new $t({color:a%2?"#c8ffb0":"#ffffff",transparent:!0,opacity:.5,blending:He,depthWrite:!1}),c=new ot(new mi(1,.05,4,20),l);c.rotation.x=Math.PI/2,this.scene.add(c),o.push(c)}this.tornados.push({pos:s,dir:n,t:0,dur:e.dur||(e.orbit?4.6:3.2),tick:0,rings:o,orbit:e.orbit?t:null,ang:i+(e.angOff||0),mul:e.mul||1}),!e.quiet&&(this.audio.play("tornado"),this.fx.circle(s,2,"#9aff8a",.8,4),this.ui.flash("#9aff8a",.15))}updateSkills(t){this.updateSkillFx(t);for(let e=this.rains.length-1;e>=0;e--){let i=this.rains[e];if(i.t+=t,!(i.t<0)){for(i.acc+=t*34;i.acc>=1;){i.acc-=1;let n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*i.R,o=i.c.x+Math.cos(n)*s,a=i.c.z+Math.sin(n)*s,l=this.world.heightAt(o,a),c=lt(o+T(-1,1),l+9,a+T(-1,1)-1.5),h=lt(o,l,a).sub(c).normalize(),d=i.fire?this.makeFireArrow():this.makeArrowMesh(!0);d.position.copy(c),d.lookAt(c.clone().add(h)),this.scene.add(d),this.projectiles.push({owner:"fx",kind:"rainArrow",pos:c,dir:h,speed:30,life:1,mesh:d,groundY:l,fire:i.fire,mul:i.mul,burn:i.burn})}i.t>=i.dur&&(this.fx.removeRing(i.tele),this.rains.splice(e,1))}}for(let e=this.tornados.length-1;e>=0;e--){let i=this.tornados[e];if(i.t+=t,i.orbit){i.ang+=t*2.3;let s=i.orbit.pos,o=Math.min(2.6,.8+i.t*4);i.pos.set(s.x+Math.sin(i.ang)*o,s.y,s.z+Math.cos(i.ang)*o)}else this.world.move(i.pos,i.dir.x*3*t,i.dir.z*3*t,.4);i.pos.y=this.world.heightAt(i.pos.x,i.pos.z);let n=Math.min(1,i.t/.25)*Math.min(1,(i.dur-i.t)/.4);i.rings.forEach((s,o)=>{let a=.3+o*.8;s.position.set(i.pos.x+Math.sin(i.t*7+o)*.12,i.pos.y+a,i.pos.z+Math.cos(i.t*7+o)*.12),s.scale.setScalar((.5+o*.45)*n),s.rotation.z+=t*(8+o*2),s.material.opacity=.45*n});for(let s=0;s<10;s++){let o=Math.random()*3.2,a=i.t*9+o*2.2+Math.random()*6.28,l=(.25+o*.4)*n;this.fx.add.emit({x:i.pos.x+Math.cos(a)*l,y:i.pos.y+o,z:i.pos.z+Math.sin(a)*l,vx:-Math.sin(a)*4,vy:1.2,vz:Math.cos(a)*4,life:.25,size:2,color:"#f0ffe8",color2:"#5ac84a",alpha:.9})}Math.random()<.5&&this.fx.norm.emit({x:i.pos.x+T(-1,1),y:i.pos.y+T(.2,2.5),z:i.pos.z+T(-1,1),vx:T(-3,3),vy:T(1,3),vz:T(-3,3),wob:2,life:.8,size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"}),Math.random()<.3&&this.fx.dust(i.pos.x,i.pos.y,i.pos.z,1);for(let s of this.enemiesIn(i.pos,3)){let o=i.pos.x-s.pos.x,a=i.pos.z-s.pos.z,l=Math.hypot(o,a)||1,c=(s.isBoss?.8:3.4)*t;l>.4&&this.world.move(s.pos,o/l*c,a/l*c,s.moveR??s.radius)}if(i.tick-=t,i.tick<=0){i.tick=.25;for(let s of this.enemiesIn(i.pos,1.7)){this.damageEnemy(s,Math.round(T(7,10)*(i.mul||1)),!1,.5,.25);let o=s.center();this.fx.spark(o.x,o.y,o.z,4,"#e8ffd8",3)}}if(i.t>=i.dur){for(let s of i.rings)this.scene.remove(s),s.geometry.dispose(),s.material.dispose();for(let s=0;s<30;s++)this.fx.norm.emit({x:i.pos.x,y:i.pos.y+T(.3,2.5),z:i.pos.z,vx:T(-5,5),vy:T(0,3),vz:T(-5,5),wob:2,drag:2,life:T(.6,1.1),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"});this.fx.ring(i.pos,2.2,"#c8ffb0",.35),this.tornados.splice(e,1)}}}clearSkillFx(){for(let t of this.orbits)for(let e of t.blades)this.scene.remove(e);for(let t of this.marks)this.scene.remove(t.mesh);this.storms=[],this.fires=[],this.orbits=[],this.marks=[]}markEnemy(t,e={}){if(this.marks.some(n=>n.e===t))return;let i=new ot(new Fn(.28,.4,4),new $t({color:"#ff3a2a",transparent:!0,blending:He,depthWrite:!1,side:fe}));i.userData.noOutline=!0,this.scene.add(i),this.marks.push({e:t,mesh:i,t:0,dur:1,R:e.markR||2,mul:e.mul||1,spread:e.spread&&!e.child,twice:e.twice})}startBladeRing(t,e={}){if(t.dead)return;let i=[];for(let n=0;n<(e.n||3);n++){let s=new Lt,o=new ot(new ut(.06,.05,1.1),new $t({color:"#e8f8ff"})),a=new ot(new ut(.02,.06,1),new $t({color:"#7fd8ff"}));a.position.x=.04,s.add(o,a),this.scene.add(s),i.push(s)}this.orbits.push({pl:t,blades:i,t:0,dur:e.dur||5,tick:0,ang:0,R:e.R||2,mul:e.mul||1,shoot:e.shoot,shootT:1}),this.audio.play("draw"),this.fx.ring(lt(t.pos.x,t.y,t.pos.z),2.4,"#bfe8ff",.35)}skillMeteor(t,e={}){let i=e.n||5,n=this.aimPoint(t,6);this.fx.circle(n,3.4,"#d8ffb0",2,1.2);let s=this.fx.ring(n,3,"#d8ffb0",1,1);this.audio.play("bow"),this.audio.play("bowskill");for(let o=0;o<4;o++)this.fx.add.emit({x:t.pos.x,y:t.y+1.4,z:t.pos.z,vx:T(-.4,.4),vy:20,vz:T(-.4,.4),life:.4,size:4,color:"#ffffff",color2:"#7aff5a"});for(let o=0;o<i;o++)this.after(.45+o*.2,()=>{let a=Math.random()*Math.PI*2,l=o===0?0:T(.8,2.4),c=n.x+Math.cos(a)*l,h=n.z+Math.sin(a)*l,d=this.world.heightAt(c,h),f=lt(c+1.2,d+12,h-2.5),u=lt(c,d,h).sub(f).normalize(),p=this.makeArrowMesh(!0);p.scale.set(3.2,3.2,3),p.position.copy(f),p.lookAt(f.clone().add(u)),this.scene.add(p),e.big&&p.scale.set(4.2,4.2,3.8),this.projectiles.push({owner:"fx",kind:"rainArrow",pos:f,dir:u,speed:34,life:1.2,mesh:p,groundY:d,big:!0,mul:e.mul||1,huge:e.big}),o===i-1&&this.after(.4,()=>this.fx.removeRing(s))})}makeFireArrow(){let t=this.makeArrowMesh(!1);return t.children[0].material.color.set("#ff8a3a"),t.children[1].material.color.set("#fff0a0"),t}updateSkillFx(t){for(let e=this.storms.length-1;e>=0;e--){let i=this.storms[e];i.t+=t;for(let n=0;n<3;n++){let s=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*i.R;this.fx.norm.emit({x:i.c.x+Math.cos(s)*o,y:i.c.y+5+T(-.4,.4),z:i.c.z+Math.sin(s)*o,vx:T(-.3,.3),vz:T(-.3,.3),life:.6,size:T(4,7),endSize:3,color:Math.random()<.3?"#4a4060":"#2a2438",alpha:.85})}if(Math.random()<t*8&&this.fx.add.emit({x:i.c.x+T(-i.R,i.R)*.8,y:i.c.y+4.8,z:i.c.z+T(-i.R,i.R)*.8,life:.08,size:6,color:"#e8e0ff"}),i.tick-=t,i.tick<=0){i.tick=i.every||.55;let n=this.enemiesIn(i.c,i.R).sort(()=>Math.random()-.5);for(let s of n.slice(0,i.hits||1)){let o=lt(s.pos.x,s.y,s.pos.z);this.fx.bolt(o,1),this.fx.ring(o,1.4,"#d8c8ff",.25),this.damageEnemy(s,Math.round(T(24,30)*(i.mul||1)),!1,2,.5),this.audio.play("thunder"),this.shake(.2)}}i.t>=i.dur&&this.storms.splice(e,1)}for(let e=this.fires.length-1;e>=0;e--){let i=this.fires[e];i.t+=t;let n=1-i.t/i.dur;if(Math.random()<.8&&this.fx.add.emit({x:i.pos.x+T(-.35,.35),y:i.pos.y+.05,z:i.pos.z+T(-.35,.35),vx:T(-.2,.2),vy:T(1,2.4)*n*(i.big?2.2:1),vz:T(-.2,.2),life:T(.25,.5),size:T(2,4)*(.5+n*.5),endSize:1,color:"#ffe080",color2:"#ff2a00",flicker:.3}),i.tick-=t,i.tick<=0){i.tick=.3;for(let s of this.enemiesIn(i.pos,i.big?1.3:.9))this.damageEnemy(s,Math.round(T(5,7)*(i.mul||1)),!1,.2,.05)}i.t>=i.dur&&this.fires.splice(e,1)}for(let e=this.orbits.length-1;e>=0;e--){let i=this.orbits[e],n=i.pl;i.t+=t,i.ang+=t*6.5;let s=Math.min(1,i.t/.2)*Math.min(1,(i.dur-i.t)/.3);if(i.blades.forEach((o,a)=>{let l=i.ang+a/i.blades.length*Math.PI*2,c=i.R*s;o.position.set(n.pos.x+Math.sin(l)*c,n.y+.8+Math.sin(i.t*5+a)*.1,n.pos.z+Math.cos(l)*c),o.rotation.y=l+Math.PI/2,o.scale.setScalar(Math.max(.01,s)),Math.random()<.6&&this.fx.add.emit({x:o.position.x,y:o.position.y,z:o.position.z,life:.18,size:3,endSize:1,color:"#ffffff",color2:"#5ab8ff"})}),i.tick-=t,i.tick<=0){i.tick=.3;for(let o of this.enemiesIn(n.pos,i.R+.7)){this.damageEnemy(o,Math.round(T(9,12)*i.mul),!1,1.5,.15);let a=o.center();this.fx.spark(a.x,a.y,a.z,5,"#e8f8ff",4)}}if(i.shoot&&!n.dead){i.shootT-=t;let o=this.enemies.find(a=>!a.dead&&!a.spawning&&Math.hypot(a.pos.x-n.pos.x,a.pos.z-n.pos.z)<9);if(i.shootT<=0&&o){i.shootT=1;let a=n.yaw;n.yaw=Math.atan2(o.pos.x-n.pos.x,o.pos.z-n.pos.z),this.spawnSwordWave(n,{scale:.6,dmgMul:.55*i.mul,quiet:!0}),n.yaw=a,this.audio.play("swing")}}if(i.t>=i.dur||n.dead){for(let o of i.blades)this.scene.remove(o);this.orbits.splice(e,1)}}for(let e=this.marks.length-1;e>=0;e--){let i=this.marks[e],n=i.e;i.t+=t;let s=n.center();if(i.mesh.position.set(s.x,s.y+(n.isBoss?2.4:1.2),s.z),i.mesh.rotation.z+=t*5,i.mesh.lookAt(this.pixel.camera.position),i.mesh.scale.setScalar(1+i.t*.6+Math.sin(i.t*30)*.08),i.t>=i.dur||n.dead){if(this.scene.remove(i.mesh),this.marks.splice(e,1),n.dead&&i.t<i.dur*.5)continue;let o=lt(n.pos.x,n.y,n.pos.z);this.fx.ring(o,2.2,"#ff5a3a",.35),this.fx.cross(s.clone(),"#ff6a4a",n.isBoss?5.5:4,.4),this.fx.colorFire(o.x,o.y+.6,o.z,30,.6,"#ffd0a0","#ff2a10"),n.dead||this.damageEnemy(n,Math.round(T(52,60)*i.mul),!0,6,.5);for(let a of this.enemiesIn(o,i.R))a!==n&&(this.damageEnemy(a,Math.round(T(24,30)*i.mul),!1,5,.3),i.spread&&!a.dead&&this.markEnemy(a,{markR:i.R,mul:i.mul*.7,child:!0}));i.twice&&!n.dead&&this.markEnemy(n,{markR:i.R,mul:i.mul*.8,child:!0}),this.audio.play("crit"),this.shake(.35)}}}rainArrowUpdate(t){if(t.mesh.position.copy(t.pos),t.fire&&Math.random()<.7&&this.fx.add.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,vy:1,life:.2,size:3,endSize:1,color:"#ffe080",color2:"#ff3010"}),t.big){for(let e=0;e<6;e++)this.fx.add.emit({x:t.pos.x+T(-.3,.3),y:t.pos.y+T(0,1),z:t.pos.z+T(-.3,.3),vx:T(-.5,.5),vy:2,vz:T(-.5,.5),life:T(.3,.6),size:T(3,5),endSize:1,color:"#ffffff",color2:"#7aff5a"});if(t.pos.y<=t.groundY+.05){t.life=0;let e=lt(t.pos.x,t.groundY,t.pos.z);this.fx.ring(e,2.6,"#e8ffc8",.4),this.fx.ring(e,1.3,"#ffffff",.25),this.fx.scorch(e,1.4,"#1a2a12",2.2),this.fx.spark(e.x,e.y+.3,e.z,24,"#f0ffd8",9);for(let n=0;n<30;n++){let s=Math.random()*Math.PI*2,o=T(2,7);this.fx.norm.emit({x:e.x,y:e.y+.2,z:e.z,vx:Math.cos(s)*o,vy:T(2,6),vz:Math.sin(s)*o,g:14,life:T(.4,.8),size:3,color:"#a89878",floor:e.y})}let i=t.huge?3.1:2.3;t.huge&&this.fx.ring(e,i+.6,"#ffffff",.4);for(let n of this.enemiesIn(e,i)){let s=Math.random()<.2;this.damageEnemy(n,Math.round(T(40,48)*(t.mul||1)*(s?1.8:1)),s,7,.5)}this.audio.play("thunder"),this.shake(.5),this.hitstop=Math.max(this.hitstop,.05)}return}if(t.pos.y<=t.groundY+.05){if(t.life=0,t.fire){this.fx.ring(lt(t.pos.x,t.groundY,t.pos.z),1.2,"#ffb050",.25);for(let e=0;e<8;e++)this.fx.add.emit({x:t.pos.x,y:t.groundY+.1,z:t.pos.z,vx:T(-2,2),vy:T(1,3),vz:T(-2,2),life:T(.3,.5),size:T(2,4),endSize:1,color:"#ffe080",color2:"#ff3010"});for(let e of this.enemiesIn(t.pos,1.3))this.damageEnemy(e,Math.round(T(6,8)*(t.mul||1)),!1,.5,.1);t.burn&&Math.random()<.25&&this.fires.push({pos:lt(t.pos.x,t.groundY,t.pos.z),t:0,dur:2.5,tick:0,mul:t.mul||1})}this.fx.dust(t.pos.x,t.groundY,t.pos.z,2),this.fx.add.emit({x:t.pos.x,y:t.groundY+.1,z:t.pos.z,life:.2,size:4,endSize:1,color:"#e8ffd8"});for(let e of this.enemiesIn(t.pos,.8)){let i=Math.random()<.15;this.damageEnemy(e,Math.round(T(9,12)*(t.mul||1)*(i?1.8:1)),i,1,.15)}Math.random()<.3&&this.audio.play("arrowhit")}}spawnOrb(t,e=0){let i=this.player,n=t.T.pal,s=lt(t.pos.x,t.y+(t.isBoss?2:t.rig?1.1:1.3),t.pos.z),a=lt(i.pos.x+i.vel.x*.3,i.y+.7,i.pos.z+i.vel.z*.3).sub(s).setY(0).normalize();e&&a.applyAxisAngle(lt(0,1,0),e);let l=new ot(new Se(t.isBoss?.28:.2,1),new $t({color:n.orb}));l.position.copy(s),this.scene.add(l),this.projectiles.push({owner:"enemy",kind:"orb",pos:s,dir:a,speed:t.isBoss?7.5:5.5,life:3.6,dmg:t.isBoss?Math.round(t.dmg*.6):t.dmg,mesh:l,radius:.45,hitSet:new Set,y:s.y,pal:n})}spawnDarkWaves(t){let e=this.player,i=Math.atan2(e.pos.x-t.pos.x,e.pos.z-t.pos.z);for(let n of[-.35,0,.35]){let s=i+n,o=lt(Math.sin(s),0,Math.cos(s)),a=lt(t.pos.x,t.y+.8,t.pos.z).addScaledVector(o,1.2),l={owner:"enemy",kind:"darkwave",pos:a,dir:o,speed:9,life:1.3,dmg:Math.round(t.dmg*.8),radius:1,hitSet:new Set};l.vis=[this.fx.slash(a,s,0,{inner:.3,outer:1.6,len:2.2,dur:1.3,color:"#6a1aaa",static:!0,move:c=>c.g.position.copy(l.pos)}),this.fx.slash(a,s,0,{inner:1.25,outer:1.55,len:2,dur:1.3,color:"#e0c8ff",static:!0,move:c=>c.g.position.copy(l.pos)})],this.projectiles.push(l)}this.audio.play("swing3"),this.shake(.2)}bossSlam(t,e,i,n,s=!1){this.audio.play("slam"),this.shake(s?.9:.6),this.alarm=2,this.fx.ring(e,i*1.15,"#ffd6a0",.45),this.fx.ring(e,i*.7,"#ffffff",.3);for(let a=0;a<40;a++){let l=a/40*Math.PI*2;this.fx.norm.emit({x:e.x+Math.cos(l)*i*.6,y:e.y+.1,z:e.z+Math.sin(l)*i*.6,vx:Math.cos(l)*4,vy:T(1,3),vz:Math.sin(l)*4,g:6,drag:3,life:T(.4,.8),size:4,endSize:1,color:"#c8bca0"})}for(let a=0;a<18;a++)this.fx.norm.emit({x:e.x+T(-1,1),y:e.y+.2,z:e.z+T(-1,1),vx:T(-3,3),vy:T(4,8),vz:T(-3,3),g:20,life:1,size:3,color:"#8a8478",floor:e.y});let o=this.player;Math.hypot(o.pos.x-e.x,o.pos.z-e.z)<i+o.radius&&Math.abs(o.pos.y-e.y)<1.2&&o.damage(n,e)}weaponPerks(t,e,i,n,s){let o=this.player;if(s&&(this.fx.colorFire(e.x,e.y,e.z,10,.3,"#e0c8ff","#6a2aff"),Math.random()<.3&&this.fx.cross(e,"#c890ff",2.2,.3)),o.perks.has("drain")&&!o.dead&&(o.drainAcc=(o.drainAcc||0)+n*.06,o.drainAcc>=1&&o.hp<o.maxHp)){let a=Math.min(Math.floor(o.drainAcc),o.maxHp-o.hp);o.hp+=a,o.drainAcc-=Math.floor(o.drainAcc),this.time-(o.drainShown||0)>.5&&(o.drainShown=this.time,this.fx.number(o.pos.clone().add(lt(0,1.9,0)),`+${a}`,"heal")),this.fx.norm.emit({x:e.x,y:e.y,z:e.z,vx:(o.pos.x-e.x)*2,vy:2,vz:(o.pos.z-e.z)*2,drag:1,life:.5,size:3,color:"#ffb070"})}if(o.perks.has("quake")&&!this.inQuake&&Math.random()<.2){this.inQuake=!0;let a=lt(t.pos.x,t.y,t.pos.z);this.fx.bolt(a,.8),this.fx.ring(a,2.6,"#9ad8ff",.35),this.fx.spark(a.x,a.y+.5,a.z,16,"#bfe8ff",7),this.audio.play("thunder");for(let l of this.enemies)l.dead||l.spawning||Math.hypot(l.pos.x-a.x,l.pos.z-a.z)<2.6&&this.damageEnemy(l,Math.max(4,Math.round(i*.6)),!1,3,.25);this.inQuake=!1}}onEnemyKilled(t){this.kills++;let e=Math.round(t.T.exp*(1+this.round*.25));this.player.addExp(e),this.fx.number(lt(t.pos.x,t.y+(t.isBoss?4:2.2),t.pos.z),`+${e} EXP`,"exp");let i=hf(t.type,this.round,this.player.cls);i&&this.spawnDrop(t.pos,i);let n=t.isBoss&&cp(t.type,this.player.cls,this.inv);n&&this.spawnDrop(t.pos,n);let s=t.isBoss?2+(Math.random()<.5?1:0):Math.random()<(t.field?.16:.12)?1:0;for(let a=0;a<s;a++){let l=t.isBoss?.6:t.T.hp>60?.12:0;this.spawnDrop(t.pos,df(Math.max(1,t.lvl||1)+this.round,mp(l,this.round)))}let o=this.player;if(o.perks?.has("soul")&&!o.dead&&o.hp<o.maxHp){let a=Math.min(Math.ceil(o.maxHp*.04),o.maxHp-o.hp);o.hp+=a,this.fx.number(o.pos.clone().add(lt(0,2.1,0)),`+${a}`,"heal");let l=t.center();for(let c=0;c<8;c++)this.fx.add.emit({x:l.x+T(-.3,.3),y:l.y+T(0,.5),z:l.z+T(-.3,.3),vx:(o.pos.x-l.x)*1.6,vy:T(1,2.5),vz:(o.pos.z-l.z)*1.6,drag:1,life:.6,size:3,color:"#e0c8ff",color2:"#6a2aff"})}this.target===t&&(this.target=null),this.questOnKill(t),this.updateQuest(),t.isBoss&&(this.hitstop=.25,this.shake(1),this.ui.flash("#ffffff",.6))}checkWave(){!this.waveActive||this.wave===0||this.spawnQueue.length||this.enemies.some(t=>!t.dead&&!t.field)||this.waveClearing||(this.waveClearing=!0,this.wave>=3?this.after(1.5,()=>this.victory()):(this.ui.banner("\uACA9\uD1F4!",`\uC81C ${["","\u4E00","\u4E8C","\u4E09"][this.wave]} \uD30C \uC644\uB8CC \xB7 \uACBD\uD5D8\uCE58 +${20+this.round*10}`,1.8),this.player.addExp(20+this.round*10),this.after(2.6,()=>{this.waveClearing=!1,this.nextWave()})))}victory(){this.waveClearing=!1,this.waveActive=!1,this.round++,this.stage=3,this.nightTarget=0,this.audio.mood="day",this.audio.play("victory"),this.player.hp=this.player.maxHp;let t=!this.cleared[this.mapId];this.cleared[this.mapId]=!0;let e=this.curQuest();e&&e.type==="wave"&&e.region===this.mapId&&this.after(2,()=>this.completeStep()),this.after(.1,()=>this.updateRegion(!0)),this.ui.banner("\uC2B9\uB9AC",{palace:"\uB3C4\uAE68\uBE44\uB4E4\uC774 \uB2EC\uC544\uB098\uACE0 \uB3D9\uC774 \uD2BC\uB2E4",bamboo:"\uC5EC\uC6B0\uB4E4\uC774 \uC232 \uAE4A\uC774 \uC0AC\uB77C\uC9C4\uB2E4",temple:"\uB9DD\uC790\uB4E4\uC774 \uC800\uC2B9\uC73C\uB85C \uB3CC\uC544\uAC04\uB2E4"}[this.mapId],4,"win-banner"),this.updateQuest(),this.save()}onPlayerDeath(){this.state="dead",setTimeout(()=>document.getElementById("gameover").classList.add("show"),900)}retry(){document.getElementById("gameover").classList.remove("show"),this.state="play",this.player.reset();for(let t of this.enemies)t.dispose();this.enemies=[],this.spawnQueue=[];for(let t of this.projectiles)t.mesh&&this.scene.remove(t.mesh);this.projectiles=[],this.timers=[];for(let t of this.rains)this.fx.removeRing(t.tele);this.rains=[];for(let t of this.tornados)for(let e of t.rings)this.scene.remove(e);this.tornados=[],this.clearSkillFx(),this.ui.setBoss(null),this.waveClearing=!1,this.waveActive&&(this.wave=Math.max(0,this.wave-1),this.after(1.2,()=>this.nextWave()))}shake(t){this.shakeAmt=Math.min(1.2,Math.max(this.shakeAmt,t))}screenFlash(t,e){this.ui.flash(e,.35)}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){let i=this.projectiles[e];if(i.life-=t,i.pos.addScaledVector(i.dir,i.speed*t),i.kind==="orb"){i.mesh.position.copy(i.pos);let n=i.pal||{orb:"#d8fbff",trail:"#8ff0ff",trail2:"#1a40ff"};i.mesh.material.color.set(i.owner==="player"?"#ffffff":n.orb),Math.random()<.9&&this.fx.add.emit({x:i.pos.x+T(-.1,.1),y:i.pos.y+T(-.1,.1),z:i.pos.z+T(-.1,.1),vx:T(-.3,.3),vy:T(.2,.8),vz:T(-.3,.3),life:T(.2,.45),size:3,endSize:1,color:n.trail,color2:n.trail2});let s=this.world.heightAt(i.pos.x,i.pos.z);(s>i.pos.y-.4||this.world.isBlocked(i.pos.x,i.pos.z,.05,s)&&s>i.pos.y-1)&&(i.life=0)}else i.kind==="wave"?this.swordWaveTrail(i,t):i.kind==="talisman"||i.kind==="arrow"?this.missileTrail(i,t):i.kind==="darkwave"?Math.random()<.8&&this.fx.add.emit({x:i.pos.x+T(-.8,.8),y:i.pos.y+T(-.2,.3),z:i.pos.z+T(-.8,.8),vy:.4,life:.4,size:3,endSize:1,color:"#c8a0ff",color2:"#2a0a4a"}):i.kind==="dragon"?this.dragonUpdate(i,t):i.kind==="rainArrow"&&this.rainArrowUpdate(i);if(i.owner==="player"&&(i.kind==="talisman"||i.kind==="arrow"))for(let n of this.world.drums)Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<1.25&&(this.drumHit(n),i.life=0);if(i.owner==="player")for(let n of this.enemies){if(n.dead||n.spawning||i.hitSet.has(n))continue;if(Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<i.radius+n.radius){i.hitSet.add(n);let o=Math.random()<(i.kind==="arrow"?.25:.2);if(this.damageEnemy(n,Math.round(i.dmg*(o?1.8:1)*T(.9,1.1)),o,i.knock??7,i.stun??.35),i.kind==="wave"){let a=n.center().clone();this.fx.cross(a,"#9fe8ff",n.isBoss?5.5:3.8),this.fx.ring(lt(n.pos.x,n.y,n.pos.z),n.isBoss?3:1.8,"#9fe8ff",.3),this.fx.spark(a.x,a.y,a.z,14,"#d8f6ff",7),this.audio.play("skillhit"),this.hitstop=Math.max(this.hitstop,.07)}if(i.kind==="orb"&&(i.life=0),i.kind==="talisman"&&(i.hitEnemy=n,i.life=0),i.kind==="arrow"){this.audio.play("arrowhit");let a=n.center();if(this.fx.spark(a.x,a.y,a.z,i.pierce?10:6,i.pierce?"#c8ff9a":"#ffffff",5),i.pierce){this.fx.cross(a.clone(),"#a8ff8a",n.isBoss?3.5:2.4,.25);for(let l=0;l<6;l++)this.fx.norm.emit({x:a.x,y:a.y,z:a.z,vx:T(-3,3),vy:T(1,3),vz:T(-3,3),wob:1.5,drag:2,life:T(.4,.8),size:2,color:Math.random()<.5?"#8ad06a":"#d8f0a0"})}i.pierce||(i.life=0,i.stuck=!0)}if(i.life<=0)break}}else if(i.owner==="enemy"){let n=this.player;Math.hypot(n.pos.x-i.pos.x,n.pos.z-i.pos.z)<i.radius+n.radius*.5&&n.dashT<=0&&n.damage(i.dmg,i.pos)&&(i.life=0)}if(i.life<=0){if(i.kind==="wave"&&this.swordWaveEnd(i),i.kind==="darkwave")for(let n of i.vis)n.kill=!0;i.kind==="talisman"&&this.talismanBurst(i),i.kind==="arrow"&&i.boom&&this.boomAt(lt(i.pos.x,this.world.heightAt(i.pos.x,i.pos.z),i.pos.z),2.6,Math.round(60*(i.mul||1)),"#e8ffc8"),i.mesh&&(this.scene.remove(i.mesh),i.kind==="orb"&&this.fx.blueFire(i.pos.x,i.pos.y-.2,i.pos.z,10,.2),i.kind==="arrow"&&this.fx.spark(i.pos.x,i.pos.y,i.pos.z,3,"#e8dcc0",2)),this.projectiles.splice(e,1)}}}separate(){let t=[this.player,...this.enemies.filter(e=>!e.dead&&!e.isWisp)];for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let n=t[e],s=t[i],o=s.pos.x-n.pos.x,a=s.pos.z-n.pos.z,l=Math.hypot(o,a),c=n.radius+s.radius;if(l<c&&l>1e-4){let h=(c-l)*.5,d=o/l,f=a/l,u=n===this.player?.3:n.isBoss?.1:1,p=s.isBoss?.1:1;this.world.move(n.pos,-d*h*u,-f*h*u,n.moveR??n.radius),this.world.move(s.pos,d*h*p,f*h*p,s.moveR??s.radius)}}}ambient(t){let e=this.focus,i=this.night,n=this.themeCur.ambient;if(n==="snow"){for(let s=0;s<2;s++)Math.random()<t*30&&this.fx.norm.emit({x:e.x+T(-20,20),y:T(6,10),z:e.z+T(-18,12),vx:T(-.3,.6),vy:-1.2,vz:T(-.2,.2),wob:.8,life:8,size:Math.random()<.3?3:2,color:"#ffffff",floor:.02,alpha:.95});return}n==="leaf"&&Math.random()<t*7*(1-i)&&this.fx.norm.emit({x:e.x+T(-18,18),y:T(4,7),z:e.z+T(-16,10),vx:T(.2,.8),vy:-.7,vz:T(-.2,.3),wob:1.6,life:7,size:2,color:Math.random()<.5?"#8ad06a":"#c8e08a",floor:.02}),n==="petal"&&Math.random()<t*6*(1-i)&&this.fx.norm.emit({x:e.x+T(-18,18),y:T(4,8),z:e.z+T(-16,10),vx:T(.4,1),vy:-.6,vz:T(-.2,.3),wob:1.2,life:7,size:2,color:Math.random()<.6?"#f6c8d4":"#fff4f0",floor:.02,alpha:.95}),Math.random()<t*14*i&&this.fx.add.emit({x:e.x+T(-18,18),y:T(.4,2.5),z:e.z+T(-14,10),vx:T(-.3,.3),vy:T(-.1,.2),vz:T(-.3,.3),wob:.8,life:T(2.5,5),size:2,color:Math.random()<.3?"#9ff0ff":"#d8ff8a",flicker:.8})}simulate(t,e){if(this.updateTarget(),this.player.update(t,e),this.updateDrops(t),this.updateRegion(),this.updateField(t),this.updateQuestMarkers(t),this.flowT-=t,this.enemies.length&&this.flowT<=0){this.flowT=.15;let i=this.player.pos;this.world.updateFlow(i.x,i.z,0),this.enemies.some(n=>n.isBoss&&!n.dead)&&this.world.updateFlow(i.x,i.z,1)}for(let i=this.enemies.length-1;i>=0;i--){let n=this.enemies[i];n.update(t)||(n.dispose(),this.enemies.splice(i,1))}if(this.separate(),this.updateProjectiles(t),this.updateSkills(t),this.timers.length){let i=this.timers.filter(n=>n.at<=this.time);if(i.length){this.timers=this.timers.filter(n=>n.at>this.time);for(let n of i)n.fn()}}for(;this.spawnQueue.length&&this.spawnQueue[0].at<=this.time;)this.spawnEnemy(this.spawnQueue.shift().type);this.spawnQueue.sort((i,n)=>i.at-n.at),this.checkWave(),(this.enemies.length||this.spawnQueue.length)&&this.updateQuest()}after(t,e){this.timers.push({at:this.time+t,fn:e})}stepSim(t){this.time+=t,Ai.time.value+=t,this.simulate(t,{mx:0,mz:0,moveLen:0,mouseRecent:!1,mouseWorld:null})}testGear(t,e,i=5){return df(i,e,t)}spawnEnemyAt(t,e,i){let n=new _r(this,t,lt(e,this.world.heightAt(e,i),i),1+this.round);return this.enemies.push(n),n}loop(t){requestAnimationFrame(this.loop);let e=Math.min(.05,(t-this.last)/1e3);this.last=t,this.audio.update(),this.state==="play"&&(this.saveT-=e,this.saveT<=0&&this.save());let i=e;this.hitstop>0&&(this.hitstop-=e,i=e*.05),this.time+=i,Ai.time.value+=i,this.night=xs(this.night,this.nightTarget,1.2,e),Math.abs(this.night-this.nightTarget)<.002&&(this.night=this.nightTarget),this.alarm=Math.max(0,this.alarm-e);let n=this.readInput();this.state!=="title"&&!this.paused?this.simulate(i,n):this.player.update(i,n);for(let l of this.npcs)l.update(i);for(let l of this.birds)l.update(i);this.world.update(i,this.time),this.ambient(i),this.fx.update(i),Ai.player.value.copy(this.player.pos),this.nearInteract=this.state==="play"?this.findInteract():null,this.updateMarker(e);let s;if(this.state==="title"){this.preview.update(e);let l=Math.sin(this.time*.12)*.5+.5;s=lt(Math.sin(this.time*.07)*4,.5,Et(10,-6,l)),this.focus.copy(s)}else{let l=this.player;this.lead.x=xs(this.lead.x,l.vel.x*.28,3,e),this.lead.z=xs(this.lead.z,l.vel.z*.28,3,e),s=lt(l.pos.x+this.lead.x,l.y+.6,l.pos.z+this.lead.z-.8),this.focus.x=xs(this.focus.x,s.x,7,e),this.focus.y=xs(this.focus.y,s.y,5,e),this.focus.z=xs(this.focus.z,s.z,7,e)}this.shakeAmt=Math.max(0,this.shakeAmt-e*2.2);let o=this.shakeAmt*this.shakeAmt*.45,a=this.focus.clone().add(lt(T(-o,o),0,T(-o,o)*.6));this.pixel.setFocus(a),this.updateLights(e),this.ui.update(e),this.pixel.render(this.scene)}},Nv=new R,Uv=new R,Lp=new R,zv=new R,Dp=new ct;window.addEventListener("DOMContentLoaded",()=>{try{window.game=new vf}catch(r){console.error(r),document.getElementById("title").innerHTML=`<div class="err">WebGL\uC744 \uC2DC\uC791\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.<br><small>${r.message}</small></div>`}});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
