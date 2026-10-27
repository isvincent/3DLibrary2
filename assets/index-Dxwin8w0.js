(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="169",xr={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a0=0,Hu=1,l0=2,Yf=1,Zf=2,_i=3,ji=0,un=1,Wn=2,Vi=0,yr=1,Gu=2,Vu=3,Wu=4,c0=5,vs=100,h0=101,u0=102,d0=103,f0=104,p0=200,m0=201,_0=202,g0=203,Ac=204,Cc=205,v0=206,x0=207,y0=208,M0=209,S0=210,b0=211,E0=212,w0=213,T0=214,Rc=0,Pc=1,Lc=2,Rr=3,Dc=4,Ic=5,Uc=6,Nc=7,jf=0,A0=1,C0=2,Wi=0,R0=1,P0=2,L0=3,Kf=4,D0=5,I0=6,U0=7,Jf=300,Pr=301,Lr=302,Oc=303,Fc=304,ul=306,zc=1e3,Ss=1001,kc=1002,hn=1003,N0=1004,$o=1005,qn=1006,Tl=1007,bs=1008,Mi=1009,Qf=1010,tp=1011,yo=1012,Xh=1013,Ls=1014,ii=1015,ko=1016,$h=1017,Yh=1018,Dr=1020,ep=35902,np=1021,ip=1022,$n=1023,sp=1024,rp=1025,Mr=1026,Ir=1027,Zh=1028,jh=1029,op=1030,Kh=1031,Jh=1033,Da=33776,Ia=33777,Ua=33778,Na=33779,Bc=35840,Hc=35841,Gc=35842,Vc=35843,Wc=36196,qc=37492,Xc=37496,$c=37808,Yc=37809,Zc=37810,jc=37811,Kc=37812,Jc=37813,Qc=37814,th=37815,eh=37816,nh=37817,ih=37818,sh=37819,rh=37820,oh=37821,Oa=36492,ah=36494,lh=36495,ap=36283,ch=36284,hh=36285,uh=36286,O0=3200,F0=3201,lp=0,z0=1,Oi="",Mn="srgb",es="srgb-linear",Qh="display-p3",dl="display-p3-linear",qa="linear",_e="srgb",Xa="rec709",$a="p3",qs=7680,qu=519,k0=512,B0=513,H0=514,cp=515,G0=516,V0=517,W0=518,q0=519,Xu=35044,$u="300 es",yi=2e3,Ya=2001;class zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yu=1234567;const Sr=Math.PI/180,Mo=180/Math.PI;function ks(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function tu(i,t){return(i%t+t)%t}function X0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $0(i,t,e){return i!==t?(e-i)/(t-i):0}function lo(i,t,e){return(1-e)*i+e*t}function Y0(i,t,e,n){return lo(i,t,1-Math.exp(-e*n))}function Z0(i,t=1){return t-Math.abs(tu(i,t*2)-t)}function j0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function K0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function J0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Q0(i,t){return i+Math.random()*(t-i)}function t_(i){return i*(.5-Math.random())}function e_(i){i!==void 0&&(Yu=i);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function n_(i){return i*Sr}function i_(i){return i*Mo}function s_(i){return(i&i-1)===0&&i!==0}function r_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function o_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function a_(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function lr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fa={DEG2RAD:Sr,RAD2DEG:Mo,generateUUID:ks,clamp:He,euclideanModulo:tu,mapLinear:X0,inverseLerp:$0,lerp:lo,damp:Y0,pingpong:Z0,smoothstep:j0,smootherstep:K0,randInt:J0,randFloat:Q0,randFloatSpread:t_,seededRandom:e_,degToRad:n_,radToDeg:i_,isPowerOfTwo:s_,ceilPowerOfTwo:r_,floorPowerOfTwo:o_,setQuaternionFromProperEuler:a_,normalize:Je,denormalize:lr};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=s[0],p=s[3],m=s[6],y=s[1],x=s[4],M=s[7],C=s[2],T=s[5],E=s[8];return r[0]=o*g+a*y+l*C,r[3]=o*p+a*x+l*T,r[6]=o*m+a*M+l*E,r[1]=c*g+h*y+u*C,r[4]=c*p+h*x+u*T,r[7]=c*m+h*M+u*E,r[2]=d*g+f*y+_*C,r[5]=d*p+f*x+_*T,r[8]=d*m+f*M+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=e*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Al.makeScale(t,e)),this}rotate(t){return this.premultiply(Al.makeRotation(-t)),this}translate(t,e){return this.premultiply(Al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new Wt;function hp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function So(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function l_(){const i=So("canvas");return i.style.display="block",i}const Zu={};function za(i){i in Zu||(Zu[i]=!0,console.warn(i))}function c_(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function h_(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function u_(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ju=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ku=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[es]:{transfer:qa,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Mn]:{transfer:_e,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[dl]:{transfer:qa,primaries:$a,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ku),fromReference:i=>i.applyMatrix3(ju)},[Qh]:{transfer:_e,primaries:$a,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ku),fromReference:i=>i.applyMatrix3(ju).convertLinearToSRGB()}},d_=new Set([es,dl]),oe={enabled:!0,_workingColorSpace:es,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!d_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Wr[t].toReference,s=Wr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Wr[i].primaries},getTransfer:function(i){return i===Oi?qa:Wr[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Wr[t].luminanceCoefficients)}};function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xs;class f_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xs===void 0&&(Xs=So("canvas")),Xs.width=t.width,Xs.height=t.height;const n=Xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=So("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=br(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(br(e[n]/255)*255):e[n]=br(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let p_=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=ks(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Rl(s[o].image)):r.push(Rl(s[o]))}else r=Rl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?f_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let m_=0;class qe extends zs{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Ss,s=Ss,r=qn,o=bs,a=$n,l=Mi,c=qe.DEFAULT_ANISOTROPY,h=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=ks(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zc:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zc:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Jf;qe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(f+1)/2,C=(m+1)/2,T=(h+d)/4,E=(u+g)/4,A=(_+p)/4;return x>M&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=A/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=E/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class __ extends zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new up(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends __{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dp extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class g_ extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let p=1-a;const m=l*d+c*f+h*_+u*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,m*y);p=Math.sin(p*T)/C,a=Math.sin(a*T)/C}const M=a*y;if(l=l*p+d*M,c=c*p+f*M,h=h*p+_*M,u=u*p+g*M,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-a*f,t[e+2]=c*_+h*f+a*d-l*u,t[e+3]=h*_-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ju.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ju.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pl.copy(this).projectOnVector(t),this.sub(Pl)}reflect(t){return this.sub(Pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new D,Ju=new Is;class ns{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(t.matrixWorld),this.union(Yo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Zo.subVectors(this.max,qr),$s.subVectors(t.a,qr),Ys.subVectors(t.b,qr),Zs.subVectors(t.c,qr),Ti.subVectors(Ys,$s),Ai.subVectors(Zs,Ys),os.subVectors($s,Zs);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-os.z,os.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,os.z,0,-os.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-os.y,os.x,0];return!Ll(e,$s,Ys,Zs,Zo)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,$s,Ys,Zs,Zo))?!1:(jo.crossVectors(Ti,Ai),e=[jo.x,jo.y,jo.z],Ll(e,$s,Ys,Zs,Zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const hi=[new D,new D,new D,new D,new D,new D,new D,new D],kn=new D,Yo=new ns,$s=new D,Ys=new D,Zs=new D,Ti=new D,Ai=new D,os=new D,qr=new D,Zo=new D,jo=new D,as=new D;function Ll(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){as.fromArray(i,r);const a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),h=n.dot(as);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const v_=new ns,Xr=new D,Dl=new D;class Bs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):v_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);const e=Xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(Dl)),this.expandByPoint(Xr.copy(t.center).sub(Dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new D,Il=new D,Ko=new D,Ci=new D,Ul=new D,Jo=new D,Nl=new D;class Bo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Il.copy(t).add(e).multiplyScalar(.5),Ko.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(Il);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ko),a=Ci.dot(this.direction),l=-Ci.dot(Ko),c=Ci.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Il).addScaledVector(Ko,d),f}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,n,s,r){Ul.subVectors(e,t),Jo.subVectors(n,t),Nl.crossVectors(Ul,Jo);let o=this.direction.dot(Nl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(Jo.crossVectors(Ci,Jo));if(l<0)return null;const c=a*this.direction.dot(Ul.cross(Ci));if(c<0||l+c>o)return null;const h=-a*Ci.dot(Nl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,_,g,p){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,_,g,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/js.setFromMatrixColumn(t,0).length(),r=1/js.setFromMatrixColumn(t,1).length(),o=1/js.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(x_,t,y_)}lookAt(t,e,n){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ri.crossVectors(n,xn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ri.crossVectors(n,xn)),Ri.normalize(),Qo.crossVectors(xn,Ri),s[0]=Ri.x,s[4]=Qo.x,s[8]=xn.x,s[1]=Ri.y,s[5]=Qo.y,s[9]=xn.y,s[2]=Ri.z,s[6]=Qo.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],x=n[7],M=n[11],C=n[15],T=s[0],E=s[4],A=s[8],L=s[12],v=s[1],S=s[5],N=s[9],F=s[13],B=s[2],W=s[6],z=s[10],$=s[14],V=s[3],ht=s[7],ut=s[11],ft=s[15];return r[0]=o*T+a*v+l*B+c*V,r[4]=o*E+a*S+l*W+c*ht,r[8]=o*A+a*N+l*z+c*ut,r[12]=o*L+a*F+l*$+c*ft,r[1]=h*T+u*v+d*B+f*V,r[5]=h*E+u*S+d*W+f*ht,r[9]=h*A+u*N+d*z+f*ut,r[13]=h*L+u*F+d*$+f*ft,r[2]=_*T+g*v+p*B+m*V,r[6]=_*E+g*S+p*W+m*ht,r[10]=_*A+g*N+p*z+m*ut,r[14]=_*L+g*F+p*$+m*ft,r[3]=y*T+x*v+M*B+C*V,r[7]=y*E+x*S+M*W+C*ht,r[11]=y*A+x*N+M*z+C*ut,r[15]=y*L+x*F+M*$+C*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+g*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+p*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=u*p*c-g*d*c+g*l*f-a*p*f-u*l*m+a*d*m,x=_*d*c-h*p*c-_*l*f+o*p*f+h*l*m-o*d*m,M=h*g*c-_*u*c+_*a*f-o*g*f-h*a*m+o*u*m,C=_*u*l-h*g*l-_*a*d+o*g*d+h*a*p-o*u*p,T=e*y+n*x+s*M+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(g*d*r-u*p*r-g*s*f+n*p*f+u*s*m-n*d*m)*E,t[2]=(a*p*r-g*l*r+g*s*c-n*p*c-a*s*m+n*l*m)*E,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*E,t[4]=x*E,t[5]=(h*p*r-_*d*r+_*s*f-e*p*f-h*s*m+e*d*m)*E,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*m-e*l*m)*E,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*E,t[8]=M*E,t[9]=(_*u*r-h*g*r-_*n*f+e*g*f+h*n*m-e*u*m)*E,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*m+e*a*m)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*E,t[12]=C*E,t[13]=(h*g*s-_*u*s+_*n*d-e*g*d-h*n*p+e*u*p)*E,t[14]=(_*a*s-o*g*s-_*n*l+e*g*l+o*n*p-e*a*p)*E,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,g=o*h,p=o*u,m=a*u,y=l*c,x=l*h,M=l*u,C=n.x,T=n.y,E=n.z;return s[0]=(1-(g+m))*C,s[1]=(f+M)*C,s[2]=(_-x)*C,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(d+m))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(_+x)*E,s[9]=(p-y)*E,s[10]=(1-(d+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=js.set(s[0],s[1],s[2]).length();const o=js.set(s[4],s[5],s[6]).length(),a=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Bn.copy(this);const c=1/r,h=1/o,u=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=yi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,_;if(a===yi)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ya)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=yi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let _,g;if(a===yi)_=(o+r)*u,g=-2*u;else if(a===Ya)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const js=new D,Bn=new ee,x_=new D(0,0,0),y_=new D(1,1,1),Ri=new D,Qo=new D,xn=new D,Qu=new ee,td=new Is;class oi{constructor(t=0,e=0,n=0,s=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return td.setFromEuler(this),this.setFromQuaternion(td,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let M_=0;const ed=new D,Ks=new Is,di=new ee,ta=new D,$r=new D,S_=new D,b_=new Is,nd=new D(1,0,0),id=new D(0,1,0),sd=new D(0,0,1),rd={type:"added"},E_={type:"removed"},Js={type:"childadded",child:null},Ol={type:"childremoved",child:null};class Ce extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new D,e=new oi,n=new Is,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Wt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(nd,t)}rotateY(t){return this.rotateOnAxis(id,t)}rotateZ(t){return this.rotateOnAxis(sd,t)}translateOnAxis(t,e){return ed.copy(t).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nd,t)}translateY(t){return this.translateOnAxis(id,t)}translateZ(t){return this.translateOnAxis(sd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt($r,ta,this.up):di.lookAt(ta,$r,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(di),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rd),Js.child=t,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E_),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rd),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,S_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,b_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new D(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new D,fi=new D,Fl=new D,pi=new D,Qs=new D,tr=new D,od=new D,zl=new D,kl=new D,Bl=new D,Hl=new he,Gl=new he,Vl=new he;class In{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),fi.subVectors(n,e),Fl.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(fi),l=Hn.dot(Fl),c=fi.dot(fi),h=fi.dot(Fl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Hl.setScalar(0),Gl.setScalar(0),Vl.setScalar(0),Hl.fromBufferAttribute(t,e),Gl.fromBufferAttribute(t,n),Vl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Hl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Vl,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),fi.subVectors(t,e),Hn.cross(fi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Hn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return In.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return In.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return In.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return In.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return In.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Qs.subVectors(s,n),tr.subVectors(r,n),zl.subVectors(t,n);const l=Qs.dot(zl),c=tr.dot(zl);if(l<=0&&c<=0)return e.copy(n);kl.subVectors(t,s);const h=Qs.dot(kl),u=tr.dot(kl);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Qs,o);Bl.subVectors(t,r);const f=Qs.dot(Bl),_=tr.dot(Bl);if(_>=0&&f<=_)return e.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(tr,a);const p=h*_-f*u;if(p<=0&&u-h>=0&&f-_>=0)return od.subVectors(r,s),a=(u-h)/(u-h+(f-_)),e.copy(s).addScaledVector(od,a);const m=1/(p+g+d);return o=g*m,a=d*m,e.copy(n).addScaledVector(Qs,o).addScaledVector(tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=tu(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wl(o,r,t+1/3),this.g=Wl(o,r,t),this.b=Wl(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=fp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}copyLinearToSRGB(t){return this.r=Cl(t.r),this.g=Cl(t.g),this.b=Cl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return oe.fromWorkingColorSpace($e.copy(this),t),Math.round(He($e.r*255,0,255))*65536+Math.round(He($e.g*255,0,255))*256+Math.round(He($e.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Mn){oe.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(ea);const n=lo(Pi.h,ea.h,e),s=lo(Pi.s,ea.s,e),r=lo(Pi.l,ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new jt;jt.NAMES=fp;let w_=0;class is extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=yr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Cc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ei extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new D,na=new nt;class On{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=lr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xu&&(t.usage=this.usage),t}}class pp extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mp extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}}let T_=0;const Rn=new ee,ql=new Ce,er=new D,yn=new ns,Yr=new ns,ke=new D;class Ne extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?mp:pp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return ql.lookAt(t),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(yn.min,Yr.min),yn.expandByPoint(ke),ke.addVectors(yn.max,Yr.max),yn.expandByPoint(ke)):(yn.expandByPoint(Yr.min),yn.expandByPoint(Yr.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(t,c),ke.add(er)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new D,l[A]=new D;const c=new D,h=new D,u=new D,d=new nt,f=new nt,_=new nt,g=new D,p=new D;function m(A,L,v){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,L),_.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const S=1/(f.x*_.y-_.x*f.y);isFinite(S)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(S),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(S),a[A].add(g),a[L].add(g),a[v].add(g),l[A].add(p),l[L].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,L=y.length;A<L;++A){const v=y[A],S=v.start,N=v.count;for(let F=S,B=S+N;F<B;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new D,M=new D,C=new D,T=new D;function E(A){C.fromBufferAttribute(s,A),T.copy(C);const L=a[A];x.copy(L),x.sub(C.multiplyScalar(C.dot(L))).normalize(),M.crossVectors(T,L);const S=M.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,S)}for(let A=0,L=y.length;A<L;++A){const v=y[A],S=v.start,N=v.count;for(let F=S,B=S+N;F<B;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let m=0;m<h;m++)d[_++]=c[f++]}return new On(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ad=new ee,ls=new Bo,ia=new Bs,ld=new D,sa=new D,ra=new D,oa=new D,Xl=new D,aa=new D,cd=new D,la=new D;class Zt extends Ce{constructor(t=new Ne,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Xl.fromBufferAttribute(u,t),o?aa.addScaledVector(Xl,h):aa.addScaledVector(Xl.sub(e),h))}e.add(aa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(ia.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ia,ld)===null||ls.origin.distanceToSquared(ld)>(t.far-t.near)**2))&&(ad.copy(r).invert(),ls.copy(t.ray).applyMatrix4(ad),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,C=x;M<C;M+=3){const T=a.getX(M),E=a.getX(M+1),A=a.getX(M+2);s=ca(this,m,t,n,c,h,u,T,E,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const y=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);s=ca(this,o,t,n,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],y=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,C=x;M<C;M+=3){const T=M,E=M+1,A=M+2;s=ca(this,m,t,n,c,h,u,T,E,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const y=p,x=p+1,M=p+2;s=ca(this,o,t,n,c,h,u,y,x,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function A_(i,t,e,n,s,r,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ji,a),l===null)return null;la.copy(a),la.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(la);return c<e.near||c>e.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,sa),i.getVertexPosition(l,ra),i.getVertexPosition(c,oa);const h=A_(i,t,e,n,sa,ra,oa,cd);if(h){const u=new D;In.getBarycoord(cd,sa,ra,oa,u),s&&(h.uv=In.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(h.uv1=In.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=In.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};In.getNormal(sa,ra,oa,d.normal),h.face=d,h.barycoord=u}return h}class Ei extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function _(g,p,m,y,x,M,C,T,E,A,L){const v=M/E,S=C/A,N=M/2,F=C/2,B=T/2,W=E+1,z=A+1;let $=0,V=0;const ht=new D;for(let ut=0;ut<z;ut++){const ft=ut*S-F;for(let Ft=0;Ft<W;Ft++){const $t=Ft*v-N;ht[g]=$t*y,ht[p]=ft*x,ht[m]=B,c.push(ht.x,ht.y,ht.z),ht[g]=0,ht[p]=0,ht[m]=T>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(Ft/E),u.push(1-ut/A),$+=1}}for(let ut=0;ut<A;ut++)for(let ft=0;ft<E;ft++){const Ft=d+ft+W*ut,$t=d+ft+W*(ut+1),X=d+(ft+1)+W*(ut+1),tt=d+(ft+1)+W*ut;l.push(Ft,$t,tt),l.push($t,X,tt),V+=6}a.addGroup(f,V,L),f+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ur(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=Ur(i[e]);for(const s in n)t[s]=n[s]}return t}function C_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _p(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const R_={clone:Ur,merge:Qe};var P_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P_,this.fragmentShader=L_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ur(t.uniforms),this.uniformsGroups=C_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gp extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new D,hd=new nt,ud=new nt;class bn extends gp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,hd,ud),e.subVectors(ud,hd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const nr=-90,ir=1;class D_ extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(nr,ir,t,e);s.layers=this.layers,this.add(s);const r=new bn(nr,ir,t,e);r.layers=this.layers,this.add(r);const o=new bn(nr,ir,t,e);o.layers=this.layers,this.add(o);const a=new bn(nr,ir,t,e);a.layers=this.layers,this.add(a);const l=new bn(nr,ir,t,e);l.layers=this.layers,this.add(l);const c=new bn(nr,ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class vp extends qe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class I_ extends Ds{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Vi});r.uniforms.tEquirect.value=e;const o=new Zt(s,r),a=e.minFilter;return e.minFilter===bs&&(e.minFilter=qn),new D_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const $l=new D,U_=new D,N_=new Wt;class Ii{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=$l.subVectors(n,e).cross(U_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($l),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||N_.getNormalMatrix(t),s=this.coplanarPoint($l).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Bs,ha=new D;class nu{constructor(t=new Ii,e=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],_=s[9],g=s[10],p=s[11],m=s[12],y=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,p-f,M-m).normalize(),n[1].setComponents(l+r,d+c,p+f,M+m).normalize(),n[2].setComponents(l+o,d+h,p+_,M+y).normalize(),n[3].setComponents(l-o,d-h,p-_,M-y).normalize(),n[4].setComponents(l-a,d-u,p-g,M-x).normalize(),e===yi)n[5].setComponents(l+a,d+u,p+g,M+x).normalize();else if(e===Ya)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ha.x=s.normal.x>0?t.max.x:t.min.x,ha.y=s.normal.y>0?t.max.y:t.min.y,ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function O_(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Hs extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const y=m*d-o;for(let x=0;x<c;x++){const M=x*u-r;_.push(M,-y,0),g.push(0,0,1),p.push(x/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const x=y+c*m,M=y+c*(m+1),C=y+1+c*(m+1),T=y+1+c*m;f.push(x,M,T),f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(g,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var F_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z_=`#ifdef USE_ALPHAHASH
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
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,G_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V_=`#ifdef USE_AOMAP
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
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,X_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,j_=`#ifdef USE_IRIDESCENCE
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
#endif`,K_=`#ifdef USE_BUMPMAP
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
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,og=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,vg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
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
}`,wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ug=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ng=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Og=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xg=`#if defined( USE_POINTS_UV )
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
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
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
#endif`,ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Mv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,Ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wv=`#ifdef USE_SKINNING
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
#endif`,Tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pv=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Lv=`#ifdef USE_TRANSMISSION
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fv=`uniform sampler2D t2D;
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
}`,zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`#include <common>
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
}`,Vv=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wv=`#define DISTANCE
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
}`,qv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,jv=`#include <common>
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,Qv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,tx=`#define MATCAP
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
}`,ex=`#define MATCAP
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
}`,nx=`#define NORMAL
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
}`,ix=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sx=`#define PHONG
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
}`,rx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ox=`#define STANDARD
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
}`,ax=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,lx=`#define TOON
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
}`,cx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hx=`uniform float size;
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,px=`uniform float rotation;
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
}`,mx=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:F_,alphahash_pars_fragment:z_,alphamap_fragment:k_,alphamap_pars_fragment:B_,alphatest_fragment:H_,alphatest_pars_fragment:G_,aomap_fragment:V_,aomap_pars_fragment:W_,batching_pars_vertex:q_,batching_vertex:X_,begin_vertex:$_,beginnormal_vertex:Y_,bsdfs:Z_,iridescence_fragment:j_,bumpmap_pars_fragment:K_,clipping_planes_fragment:J_,clipping_planes_pars_fragment:Q_,clipping_planes_pars_vertex:tg,clipping_planes_vertex:eg,color_fragment:ng,color_pars_fragment:ig,color_pars_vertex:sg,color_vertex:rg,common:og,cube_uv_reflection_fragment:ag,defaultnormal_vertex:lg,displacementmap_pars_vertex:cg,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:dg,colorspace_fragment:fg,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:_g,envmap_pars_fragment:gg,envmap_pars_vertex:vg,envmap_physical_pars_fragment:Rg,envmap_vertex:xg,fog_vertex:yg,fog_pars_vertex:Mg,fog_fragment:Sg,fog_pars_fragment:bg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:wg,lights_lambert_fragment:Tg,lights_lambert_pars_fragment:Ag,lights_pars_begin:Cg,lights_toon_fragment:Pg,lights_toon_pars_fragment:Lg,lights_phong_fragment:Dg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Ug,lights_physical_pars_fragment:Ng,lights_fragment_begin:Og,lights_fragment_maps:Fg,lights_fragment_end:zg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:Gg,map_fragment:Vg,map_pars_fragment:Wg,map_particle_fragment:qg,map_particle_pars_fragment:Xg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:Yg,morphinstance_vertex:Zg,morphcolor_vertex:jg,morphnormal_vertex:Kg,morphtarget_pars_vertex:Jg,morphtarget_vertex:Qg,normal_fragment_begin:tv,normal_fragment_maps:ev,normal_pars_fragment:nv,normal_pars_vertex:iv,normal_vertex:sv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:ov,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:lv,iridescence_pars_fragment:cv,opaque_fragment:hv,packing:uv,premultiplied_alpha_fragment:dv,project_vertex:fv,dithering_fragment:pv,dithering_pars_fragment:mv,roughnessmap_fragment:_v,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:vv,shadowmap_pars_vertex:xv,shadowmap_vertex:yv,shadowmask_pars_fragment:Mv,skinbase_vertex:Sv,skinning_pars_vertex:bv,skinning_vertex:Ev,skinnormal_vertex:wv,specularmap_fragment:Tv,specularmap_pars_fragment:Av,tonemapping_fragment:Cv,tonemapping_pars_fragment:Rv,transmission_fragment:Pv,transmission_pars_fragment:Lv,uv_pars_fragment:Dv,uv_pars_vertex:Iv,uv_vertex:Uv,worldpos_vertex:Nv,background_vert:Ov,background_frag:Fv,backgroundCube_vert:zv,backgroundCube_frag:kv,cube_vert:Bv,cube_frag:Hv,depth_vert:Gv,depth_frag:Vv,distanceRGBA_vert:Wv,distanceRGBA_frag:qv,equirect_vert:Xv,equirect_frag:$v,linedashed_vert:Yv,linedashed_frag:Zv,meshbasic_vert:jv,meshbasic_frag:Kv,meshlambert_vert:Jv,meshlambert_frag:Qv,meshmatcap_vert:tx,meshmatcap_frag:ex,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:sx,meshphong_frag:rx,meshphysical_vert:ox,meshphysical_frag:ax,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:hx,points_frag:ux,shadow_vert:dx,shadow_frag:fx,sprite_vert:px,sprite_frag:mx},ct={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},ti={basic:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Qe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Qe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new jt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Qe([ct.points,ct.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Qe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Qe([ct.common,ct.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Qe([ct.sprite,ct.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Qe([ct.common,ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Qe([ct.lights,ct.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ti.physical={uniforms:Qe([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ua={r:0,b:0,g:0},hs=new oi,_x=new ee;function gx(i,t,e,n,s,r,o){const a=new jt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const M=_(y);M===null?m(a,l):M&&M.isColor&&(m(M,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===ul)?(h===void 0&&(h=new Zt(new Ei(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ur(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hs.copy(x.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(hs)),h.material.toneMapped=oe.getTransfer(M.colorSpace)!==_e,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Zt(new Hs(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ur(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=oe.getTransfer(M.colorSpace)!==_e,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(ua,_p(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:g,addToRenderList:p}}function vx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,S,N,F,B){let W=!1;const z=u(F,N,S);r!==z&&(r=z,c(r.object)),W=f(v,F,N,B),W&&_(v,F,N,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(v,S,N,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,S,N){const F=N.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let W=B[S.id];W===void 0&&(W={},B[S.id]=W);let z=W[F];return z===void 0&&(z=d(l()),W[F]=z),z}function d(v){const S=[],N=[],F=[];for(let B=0;B<e;B++)S[B]=0,N[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,S,N,F){const B=r.attributes,W=S.attributes;let z=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){const ut=B[V];let ft=W[V];if(ft===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor)),ut===void 0||ut.attribute!==ft||ft&&ut.data!==ft.data)return!0;z++}return r.attributesNum!==z||r.index!==F}function _(v,S,N,F){const B={},W=S.attributes;let z=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){let ut=W[V];ut===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));const ft={};ft.attribute=ut,ut&&ut.data&&(ft.data=ut.data),B[V]=ft,z++}r.attributes=B,r.attributesNum=z,r.index=F}function g(){const v=r.newAttributes;for(let S=0,N=v.length;S<N;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){const N=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;N[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),B[v]!==S&&(i.vertexAttribDivisor(v,S),B[v]=S)}function y(){const v=r.newAttributes,S=r.enabledAttributes;for(let N=0,F=S.length;N<F;N++)S[N]!==v[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function x(v,S,N,F,B,W,z){z===!0?i.vertexAttribIPointer(v,S,N,B,W):i.vertexAttribPointer(v,S,N,F,B,W)}function M(v,S,N,F){g();const B=F.attributes,W=N.getAttributes(),z=S.defaultAttributeValues;for(const $ in W){const V=W[$];if(V.location>=0){let ht=B[$];if(ht===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const ut=ht.normalized,ft=ht.itemSize,Ft=t.get(ht);if(Ft===void 0)continue;const $t=Ft.buffer,X=Ft.type,tt=Ft.bytesPerElement,St=X===i.INT||X===i.UNSIGNED_INT||ht.gpuType===Xh;if(ht.isInterleavedBufferAttribute){const dt=ht.data,Dt=dt.stride,Lt=ht.offset;if(dt.isInstancedInterleavedBuffer){for(let kt=0;kt<V.locationSize;kt++)m(V.location+kt,dt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let kt=0;kt<V.locationSize;kt++)p(V.location+kt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let kt=0;kt<V.locationSize;kt++)x(V.location+kt,ft/V.locationSize,X,ut,Dt*tt,(Lt+ft/V.locationSize*kt)*tt,St)}else{if(ht.isInstancedBufferAttribute){for(let dt=0;dt<V.locationSize;dt++)m(V.location+dt,ht.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let dt=0;dt<V.locationSize;dt++)p(V.location+dt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let dt=0;dt<V.locationSize;dt++)x(V.location+dt,ft/V.locationSize,X,ut,ft*tt,ft/V.locationSize*dt*tt,St)}}else if(z!==void 0){const ut=z[$];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(V.location,ut);break;case 3:i.vertexAttrib3fv(V.location,ut);break;case 4:i.vertexAttrib4fv(V.location,ut);break;default:i.vertexAttrib1fv(V.location,ut)}}}}y()}function C(){A();for(const v in n){const S=n[v];for(const N in S){const F=S[N];for(const B in F)h(F[B].object),delete F[B];delete S[N]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const N in S){const F=S[N];for(const B in F)h(F[B].object),delete F[B];delete S[N]}delete n[v.id]}function E(v){for(const S in n){const N=n[S];if(N[v.id]===void 0)continue;const F=N[v.id];for(const B in F)h(F[B].object),delete F[B];delete N[v.id]}}function A(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function xx(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g];for(let g=0;g<d.length;g++)e.update(_,n,d[g])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==$n&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const A=E===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Mi&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ii&&!A)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function Mx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ii,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=h(_,d,x,f);for(let C=0;C!==x;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=f;x!==g;++x,M+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function Sx(i){let t=new WeakMap;function e(o,a){return a===Oc?o.mapping=Pr:a===Fc&&(o.mapping=Lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oc||a===Fc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new I_(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class yp extends gp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hr=4,dd=[.125,.215,.35,.446,.526,.582],xs=20,Yl=new yp,fd=new jt;let Zl=null,jl=0,Kl=0,Jl=!1;const ps=(1+Math.sqrt(5))/2,sr=1/ps,pd=[new D(-ps,sr,0),new D(ps,sr,0),new D(-sr,0,ps),new D(sr,0,ps),new D(0,ps,-sr),new D(0,ps,sr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class md{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,jl,Kl),this._renderer.xr.enabled=Jl,t.scissorTest=!1,da(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pr||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ko,format:$n,colorSpace:es,depthBuffer:!1},s=_d(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bx(r)),this._blurMaterial=Ex(r,t,e)}return s}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,Yl)}_sceneToCubeUV(t,e,n,s){const a=new bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fd),h.toneMapping=Wi,h.autoClear=!1;const f=new ei({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new Zt(new Ei,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(fd),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;da(s,y*x,m>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Pr||t.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;da(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Yl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pd[(s-r-1)%pd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Zt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xs-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):xs;p>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xs}`);const m=[];let y=0;for(let E=0;E<xs;++E){const A=E/g,L=Math.exp(-A*A/2);m.push(L),E===0?y+=L:E<p&&(y+=2*L)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const M=this._sizeLods[s],C=3*M*(s>x-hr?s-x+hr:0),T=4*(this._cubeSize-M);da(e,C,T,3*M,2*M),l.setRenderTarget(e),l.render(u,Yl)}}function bx(i){const t=[],e=[],n=[];let s=i;const r=i-hr+1+dd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-hr?l=dd[o-i+hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*f),x=new Float32Array(p*_*f),M=new Float32Array(m*_*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,A=T>2?0:-1,L=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];y.set(L,g*_*T),x.set(d,p*_*T);const v=[T,T,T,T,T,T];M.set(v,m*_*T)}const C=new Ne;C.setAttribute("position",new On(y,g)),C.setAttribute("uv",new On(x,p)),C.setAttribute("faceIndex",new On(M,m)),t.push(C),s>hr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _d(i,t,e){const n=new Ds(i,t,e);return n.texture.mapping=ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ex(i,t,e){const n=new Float32Array(xs),s=new D(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function gd(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function vd(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Oc||l===Fc,h=l===Pr||l===Lr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new md(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new md(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&za("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ax(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)t.update(d[_],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let x=0,M=y.length;x<M;x+=3){const C=y[x+0],T=y[x+1],E=y[x+2];d.push(C,T,T,E,E,C)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const C=x+0,T=x+1,E=x+2;d.push(C,T,T,E,E,C)}}else return;const p=new(hp(d)?mp:pp)(d,1);p.version=g;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*o,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,n,1)}function u(d,f,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=f[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Px(i,t,e){const n=new WeakMap,s=new he;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let C=a.attributes.position.count*M,T=1;C>t.maxTextureSize&&(T=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*T*4*u),A=new dp(E,C,T,u);A.type=ii,A.needsUpdate=!0;const L=M*4;for(let S=0;S<u;S++){const N=m[S],F=y[S],B=x[S],W=C*T*4*S;for(let z=0;z<N.count;z++){const $=z*L;_===!0&&(s.fromBufferAttribute(N,z),E[W+$+0]=s.x,E[W+$+1]=s.y,E[W+$+2]=s.z,E[W+$+3]=0),g===!0&&(s.fromBufferAttribute(F,z),E[W+$+4]=s.x,E[W+$+5]=s.y,E[W+$+6]=s.z,E[W+$+7]=0),p===!0&&(s.fromBufferAttribute(B,z),E[W+$+8]=s.x,E[W+$+9]=s.y,E[W+$+10]=s.z,E[W+$+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new nt(C,T)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Lx(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Mp extends qe{constructor(t,e,n,s,r,o,a,l,c,h=Mr){if(h!==Mr&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mr&&(n=Ls),n===void 0&&h===Ir&&(n=Dr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sp=new qe,xd=new Mp(1,1),bp=new dp,Ep=new g_,wp=new vp,yd=[],Md=[],Sd=new Float32Array(16),bd=new Float32Array(9),Ed=new Float32Array(4);function Vr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=yd[s];if(r===void 0&&(r=new Float32Array(s),yd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fl(i,t){let e=Md[t];e===void 0&&(e=new Int32Array(t),Md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Ox(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Ed.set(n),i.uniformMatrix2fv(this.addr,!1,Ed),ze(e,n)}}function Fx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),ze(e,n)}}function zx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Sd.set(n),i.uniformMatrix4fv(this.addr,!1,Sd),ze(e,n)}}function kx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function Hx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function Gx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function Vx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function qx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Xx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function $x(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=cp,r=xd):r=Sp,e.setTexture2D(t||r,s)}function Yx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ep,s)}function Zx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wp,s)}function jx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bp,s)}function Kx(i){switch(i){case 5126:return Dx;case 35664:return Ix;case 35665:return Ux;case 35666:return Nx;case 35674:return Ox;case 35675:return Fx;case 35676:return zx;case 5124:case 35670:return kx;case 35667:case 35671:return Bx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return qx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return jx}}function Jx(i,t){i.uniform1fv(this.addr,t)}function Qx(i,t){const e=Vr(t,this.size,2);i.uniform2fv(this.addr,e)}function ty(i,t){const e=Vr(t,this.size,3);i.uniform3fv(this.addr,e)}function ey(i,t){const e=Vr(t,this.size,4);i.uniform4fv(this.addr,e)}function ny(i,t){const e=Vr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iy(i,t){const e=Vr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sy(i,t){const e=Vr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ry(i,t){i.uniform1iv(this.addr,t)}function oy(i,t){i.uniform2iv(this.addr,t)}function ay(i,t){i.uniform3iv(this.addr,t)}function ly(i,t){i.uniform4iv(this.addr,t)}function cy(i,t){i.uniform1uiv(this.addr,t)}function hy(i,t){i.uniform2uiv(this.addr,t)}function uy(i,t){i.uniform3uiv(this.addr,t)}function dy(i,t){i.uniform4uiv(this.addr,t)}function fy(i,t,e){const n=this.cache,s=t.length,r=fl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sp,r[o])}function py(i,t,e){const n=this.cache,s=t.length,r=fl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ep,r[o])}function my(i,t,e){const n=this.cache,s=t.length,r=fl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wp,r[o])}function _y(i,t,e){const n=this.cache,s=t.length,r=fl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bp,r[o])}function gy(i){switch(i){case 5126:return Jx;case 35664:return Qx;case 35665:return ty;case 35666:return ey;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return oy;case 35668:case 35672:return ay;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return hy;case 36295:return uy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return _y}}class vy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kx(e.type)}}class xy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gy(e.type)}}class yy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function wd(i,t){i.seq.push(t),i.map[t.id]=t}function My(i,t,e){const n=i.name,s=n.length;for(Ql.lastIndex=0;;){const r=Ql.exec(n),o=Ql.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wd(e,c===void 0?new vy(a,i,t):new xy(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new yy(a),wd(e,u)),e=u}}}class ka{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);My(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Td(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Sy=37297;let by=0;function Ey(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function wy(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===$a&&e===Xa?n="LinearDisplayP3ToLinearSRGB":t===Xa&&e===$a&&(n="LinearSRGBToLinearDisplayP3"),i){case es:case dl:return[n,"LinearTransferOETF"];case Mn:case Qh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ad(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ey(i.getShaderSource(t),o)}else return s}function Ty(i,t){const e=wy(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ay(i,t){let e;switch(t){case R0:e="Linear";break;case P0:e="Reinhard";break;case L0:e="Cineon";break;case Kf:e="ACESFilmic";break;case I0:e="AgX";break;case U0:e="Neutral";break;case D0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fa=new D;function Cy(){oe.getLuminanceCoefficients(fa);const i=fa.x.toFixed(4),t=fa.y.toFixed(4),e=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Py(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ly(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function io(i){return i!==""}function Cd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(Dy,Uy)}const Iy=new Map;function Uy(i,t){let e=Vt[t];if(e===void 0){const n=Iy.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dh(e)}const Ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(i){return i.replace(Ny,Oy)}function Oy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ld(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function zy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pr:case Lr:t="ENVMAP_TYPE_CUBE";break;case ul:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ky(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function By(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jf:t="ENVMAP_BLENDING_MULTIPLY";break;case A0:t="ENVMAP_BLENDING_MIX";break;case C0:t="ENVMAP_BLENDING_ADD";break}return t}function Hy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gy(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Fy(e),c=zy(e),h=ky(e),u=By(e),d=Hy(e),f=Ry(e),_=Py(r),g=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(io).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(io).join(`
`),m.length>0&&(m+=`
`)):(p=[Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),m=[Ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Wi?Ay("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Ty("linearToOutputTexel",e.outputColorSpace),Cy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=dh(o),o=Cd(o,e),o=Rd(o,e),a=dh(a),a=Cd(a,e),a=Rd(a,e),o=Pd(o),a=Pd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+o,M=y+m+a,C=Td(s,s.VERTEX_SHADER,x),T=Td(s,s.FRAGMENT_SHADER,M);s.attachShader(g,C),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(S){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g).trim(),F=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(T).trim();let W=!0,z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,C,T);else{const $=Ad(s,C,"vertex"),V=Ad(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+$+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||B==="")&&(z=!1);z&&(S.diagnostics={runnable:W,programLog:N,vertexShader:{log:F,prefix:p},fragmentShader:{log:B,prefix:m}})}s.deleteShader(C),s.deleteShader(T),A=new ka(s,g),L=Ly(s,g)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let L;this.getAttributes=function(){return L===void 0&&E(this),L};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Sy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=by++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}let Vy=0;class Wy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new qy(t),e.set(t,n)),n}}class qy{constructor(t){this.id=Vy++,this.code=t,this.usedTimes=0}}function Xy(i,t,e,n,s,r,o){const a=new eu,l=new Wy,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let _=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,N,F,B){const W=F.fog,z=B.geometry,$=v.isMeshStandardMaterial?F.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),ht=V&&V.mapping===ul?V.image.height:null,ut=g[v.type];v.precision!==null&&(_=s.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ft=ft!==void 0?ft.length:0;let $t=0;z.morphAttributes.position!==void 0&&($t=1),z.morphAttributes.normal!==void 0&&($t=2),z.morphAttributes.color!==void 0&&($t=3);let X,tt,St,dt;if(ut){const rn=ti[ut];X=rn.vertexShader,tt=rn.fragmentShader}else X=v.vertexShader,tt=v.fragmentShader,l.update(v),St=l.getVertexShaderID(v),dt=l.getFragmentShaderID(v);const Dt=i.getRenderTarget(),Lt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,Xt=!!v.map,K=!!v.matcap,P=!!V,ot=!!v.aoMap,rt=!!v.lightMap,et=!!v.bumpMap,at=!!v.normalMap,Rt=!!v.displacementMap,_t=!!v.emissiveMap,R=!!v.metalnessMap,b=!!v.roughnessMap,k=v.anisotropy>0,Y=v.clearcoat>0,J=v.dispersion>0,Z=v.iridescence>0,wt=v.sheen>0,lt=v.transmission>0,xt=k&&!!v.anisotropyMap,Jt=Y&&!!v.clearcoatMap,it=Y&&!!v.clearcoatNormalMap,yt=Y&&!!v.clearcoatRoughnessMap,Nt=Z&&!!v.iridescenceMap,Ot=Z&&!!v.iridescenceThicknessMap,bt=wt&&!!v.sheenColorMap,Qt=wt&&!!v.sheenRoughnessMap,Ht=!!v.specularMap,de=!!v.specularColorMap,I=!!v.specularIntensityMap,gt=lt&&!!v.transmissionMap,q=lt&&!!v.thicknessMap,Q=!!v.gradientMap,pt=!!v.alphaMap,vt=v.alphaTest>0,te=!!v.alphaHash,Re=!!v.extensions;let sn=Wi;v.toneMapped&&(Dt===null||Dt.isXRRenderTarget===!0)&&(sn=i.toneMapping);const ne={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:tt,defines:v.defines,customVertexShaderID:St,customFragmentShaderID:dt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Dt===null?i.outputColorSpace:Dt.isXRRenderTarget===!0?Dt.texture.colorSpace:es,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:K,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:ht,aoMap:ot,lightMap:rt,bumpMap:et,normalMap:at,displacementMap:f&&Rt,emissiveMap:_t,normalMapObjectSpace:at&&v.normalMapType===z0,normalMapTangentSpace:at&&v.normalMapType===lp,metalnessMap:R,roughnessMap:b,anisotropy:k,anisotropyMap:xt,clearcoat:Y,clearcoatMap:Jt,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,dispersion:J,iridescence:Z,iridescenceMap:Nt,iridescenceThicknessMap:Ot,sheen:wt,sheenColorMap:bt,sheenRoughnessMap:Qt,specularMap:Ht,specularColorMap:de,specularIntensityMap:I,transmission:lt,transmissionMap:gt,thicknessMap:q,gradientMap:Q,opaque:v.transparent===!1&&v.blending===yr&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:vt,alphaHash:te,combine:v.combine,mapUv:Xt&&p(v.map.channel),aoMapUv:ot&&p(v.aoMap.channel),lightMapUv:rt&&p(v.lightMap.channel),bumpMapUv:et&&p(v.bumpMap.channel),normalMapUv:at&&p(v.normalMap.channel),displacementMapUv:Rt&&p(v.displacementMap.channel),emissiveMapUv:_t&&p(v.emissiveMap.channel),metalnessMapUv:R&&p(v.metalnessMap.channel),roughnessMapUv:b&&p(v.roughnessMap.channel),anisotropyMapUv:xt&&p(v.anisotropyMap.channel),clearcoatMapUv:Jt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&p(v.sheenRoughnessMap.channel),specularMapUv:Ht&&p(v.specularMap.channel),specularColorMapUv:de&&p(v.specularColorMap.channel),specularIntensityMapUv:I&&p(v.specularIntensityMap.channel),transmissionMapUv:gt&&p(v.transmissionMap.channel),thicknessMapUv:q&&p(v.thicknessMap.channel),alphaMapUv:pt&&p(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(at||k),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Xt||pt),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:$t,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:sn,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&oe.getTransfer(v.map.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wn,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function y(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(S,v),M(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){const S=g[v.type];let N;if(S){const F=ti[S];N=R_.clone(F.uniforms)}else N=v.uniforms;return N}function T(v,S){let N;for(let F=0,B=h.length;F<B;F++){const W=h[F];if(W.cacheKey===S){N=W,++N.usedTimes;break}}return N===void 0&&(N=new Gy(i,S,v,r),h.push(N)),N}function E(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function A(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:L}}function $y(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Id(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,_,g,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=p),t++,m}function a(u,d,f,_,g,p){const m=o(u,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,_,g,p){const m=o(u,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||Yy),n.length>1&&n.sort(d||Dd),s.length>1&&s.sort(d||Dd)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Zy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Id,i.set(n,[o])):s>=r.length?(o=new Id,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new jt};break;case"SpotLight":e={position:new D,direction:new D,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Ky(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Jy=0;function Qy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tM(i){const t=new jy,e=Ky(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ee,o=new ee;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,y=0,x=0,M=0,C=0,T=0,E=0;c.sort(Qy);for(let L=0,v=c.length;L<v;L++){const S=c[L],N=S.color,F=S.intensity,B=S.distance,W=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],F);E++}else if(S.isDirectionalLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,V=e.get(S);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=S.shadow.matrix,y++}n.directional[f]=z,f++}else if(S.isSpotLight){const z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(N).multiplyScalar(F),z.distance=B,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[g]=z;const $=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,$.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[g]=$.matrix,S.castShadow){const V=e.get(S);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=W,M++}g++}else if(S.isRectAreaLight){const z=t.get(S);z.color.copy(N).multiplyScalar(F),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=z,p++}else if(S.isPointLight){const z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){const $=S.shadow,V=e.get(S);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=S.shadow.matrix,x++}n.point[_]=z,_++}else if(S.isHemisphereLight){const z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(F),z.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[m]=z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==y||A.numPointShadows!==x||A.numSpotShadows!==M||A.numSpotMaps!==C||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,A.directionalLength=f,A.pointLength=_,A.spotLength=g,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=y,A.numPointShadows=x,A.numSpotShadows=M,A.numSpotMaps=C,A.numLightProbes=E,n.version=Jy++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ud(i){const t=new tM(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function eM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ud(i),t.set(s,[a])):r>=o.length?(a=new Ud(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class nM extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iM extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const sM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oM(i,t,e){let n=new nu;const s=new nt,r=new nt,o=new he,a=new nM({depthPacking:F0}),l=new iM,c={},h=e.maxTextureSize,u={[ji]:un,[un]:ji,[Wn]:Wn},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:sM,fragmentShader:rM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ne;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Zt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let m=this.type;this.render=function(T,E,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const L=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Vi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=m!==_i&&this.type===_i,B=m===_i&&this.type!==_i;for(let W=0,z=T.length;W<z;W++){const $=T[W],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ht=V.getFrameExtents();if(s.multiply(ht),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,V.mapSize.y=r.y)),V.map===null||F===!0||B===!0){const ft=this.type!==_i?{minFilter:hn,magFilter:hn}:{};V.map!==null&&V.map.dispose(),V.map=new Ds(s.x,s.y,ft),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ut=V.getViewportCount();for(let ft=0;ft<ut;ft++){const Ft=V.getViewport(ft);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),N.viewport(o),V.updateMatrices($,ft),n=V.getFrustum(),M(E,A,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===_i&&y(V,A),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(L,v,S)};function y(T,E){const A=t.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ds(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,A,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,A,f,g,null)}function x(T,E,A,L){let v=null;const S=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)v=S;else if(v=A.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,F=E.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let W=B[F];W===void 0&&(W=v.clone(),B[F]=W,E.addEventListener("dispose",C)),v=W}if(v.visible=E.visible,v.wireframe=E.wireframe,L===_i?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=i.properties.get(v);N.light=A}return v}function M(T,E,A,L,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===_i)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const F=t.update(T),B=T.material;if(Array.isArray(B)){const W=F.groups;for(let z=0,$=W.length;z<$;z++){const V=W[z],ht=B[V.materialIndex];if(ht&&ht.visible){const ut=x(T,ht,L,v);T.onBeforeShadow(i,T,E,A,F,ut,V),i.renderBufferDirect(A,null,F,ut,T,V),T.onAfterShadow(i,T,E,A,F,ut,V)}}}else if(B.visible){const W=x(T,B,L,v);T.onBeforeShadow(i,T,E,A,F,W,null),i.renderBufferDirect(A,null,F,W,T,null),T.onAfterShadow(i,T,E,A,F,W,null)}}const N=T.children;for(let F=0,B=N.length;F<B;F++)M(N[F],E,A,L,v)}function C(T){T.target.removeEventListener("dispose",C);for(const A in c){const L=c[A],v=T.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const aM={[Rc]:Pc,[Lc]:Uc,[Dc]:Nc,[Rr]:Ic,[Pc]:Rc,[Uc]:Lc,[Nc]:Dc,[Ic]:Rr};function lM(i){function t(){let I=!1;const gt=new he;let q=null;const Q=new he(0,0,0,0);return{setMask:function(pt){q!==pt&&!I&&(i.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){I=pt},setClear:function(pt,vt,te,Re,sn){sn===!0&&(pt*=Re,vt*=Re,te*=Re),gt.set(pt,vt,te,Re),Q.equals(gt)===!1&&(i.clearColor(pt,vt,te,Re),Q.copy(gt))},reset:function(){I=!1,q=null,Q.set(-1,0,0,0)}}}function e(){let I=!1,gt=!1,q=null,Q=null,pt=null;return{setReversed:function(vt){gt=vt},setTest:function(vt){vt?St(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(vt){q!==vt&&!I&&(i.depthMask(vt),q=vt)},setFunc:function(vt){if(gt&&(vt=aM[vt]),Q!==vt){switch(vt){case Rc:i.depthFunc(i.NEVER);break;case Pc:i.depthFunc(i.ALWAYS);break;case Lc:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case Dc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=vt}},setLocked:function(vt){I=vt},setClear:function(vt){pt!==vt&&(i.clearDepth(vt),pt=vt)},reset:function(){I=!1,q=null,Q=null,pt=null}}}function n(){let I=!1,gt=null,q=null,Q=null,pt=null,vt=null,te=null,Re=null,sn=null;return{setTest:function(ne){I||(ne?St(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(ne){gt!==ne&&!I&&(i.stencilMask(ne),gt=ne)},setFunc:function(ne,rn,ci){(q!==ne||Q!==rn||pt!==ci)&&(i.stencilFunc(ne,rn,ci),q=ne,Q=rn,pt=ci)},setOp:function(ne,rn,ci){(vt!==ne||te!==rn||Re!==ci)&&(i.stencilOp(ne,rn,ci),vt=ne,te=rn,Re=ci)},setLocked:function(ne){I=ne},setClear:function(ne){sn!==ne&&(i.clearStencil(ne),sn=ne)},reset:function(){I=!1,gt=null,q=null,Q=null,pt=null,vt=null,te=null,Re=null,sn=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,y=null,x=null,M=null,C=null,T=new jt(0,0,0),E=0,A=!1,L=null,v=null,S=null,N=null,F=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),W=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=z>=2);let V=null,ht={};const ut=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),Ft=new he().fromArray(ut),$t=new he().fromArray(ft);function X(I,gt,q,Q){const pt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(I,vt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<q;te++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(gt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return vt}const tt={};tt[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),St(i.DEPTH_TEST),r.setFunc(Rr),rt(!1),et(Hu),St(i.CULL_FACE),P(Vi);function St(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function dt(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function Dt(I,gt){return h[I]!==gt?(i.bindFramebuffer(I,gt),h[I]=gt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=gt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Lt(I,gt){let q=d,Q=!1;if(I){q=u.get(gt),q===void 0&&(q=[],u.set(gt,q));const pt=I.textures;if(q.length!==pt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,te=pt.length;vt<te;vt++)q[vt]=i.COLOR_ATTACHMENT0+vt;q.length=pt.length,Q=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Q=!0);Q&&i.drawBuffers(q)}function kt(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const Xt={[vs]:i.FUNC_ADD,[h0]:i.FUNC_SUBTRACT,[u0]:i.FUNC_REVERSE_SUBTRACT};Xt[d0]=i.MIN,Xt[f0]=i.MAX;const K={[p0]:i.ZERO,[m0]:i.ONE,[_0]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[S0]:i.SRC_ALPHA_SATURATE,[y0]:i.DST_COLOR,[v0]:i.DST_ALPHA,[g0]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[M0]:i.ONE_MINUS_DST_COLOR,[x0]:i.ONE_MINUS_DST_ALPHA,[b0]:i.CONSTANT_COLOR,[E0]:i.ONE_MINUS_CONSTANT_COLOR,[w0]:i.CONSTANT_ALPHA,[T0]:i.ONE_MINUS_CONSTANT_ALPHA};function P(I,gt,q,Q,pt,vt,te,Re,sn,ne){if(I===Vi){_===!0&&(dt(i.BLEND),_=!1);return}if(_===!1&&(St(i.BLEND),_=!0),I!==c0){if(I!==g||ne!==A){if((p!==vs||x!==vs)&&(i.blendEquation(i.FUNC_ADD),p=vs,x=vs),ne)switch(I){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gu:i.blendFunc(i.ONE,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,y=null,M=null,C=null,T.set(0,0,0),E=0,g=I,A=ne}return}pt=pt||gt,vt=vt||q,te=te||Q,(gt!==p||pt!==x)&&(i.blendEquationSeparate(Xt[gt],Xt[pt]),p=gt,x=pt),(q!==m||Q!==y||vt!==M||te!==C)&&(i.blendFuncSeparate(K[q],K[Q],K[vt],K[te]),m=q,y=Q,M=vt,C=te),(Re.equals(T)===!1||sn!==E)&&(i.blendColor(Re.r,Re.g,Re.b,sn),T.copy(Re),E=sn),g=I,A=!1}function ot(I,gt){I.side===Wn?dt(i.CULL_FACE):St(i.CULL_FACE);let q=I.side===un;gt&&(q=!q),rt(q),I.blending===yr&&I.transparent===!1?P(Vi):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function et(I){I!==a0?(St(i.CULL_FACE),I!==v&&(I===Hu?i.cullFace(i.BACK):I===l0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),v=I}function at(I){I!==S&&(W&&i.lineWidth(I),S=I)}function Rt(I,gt,q){I?(St(i.POLYGON_OFFSET_FILL),(N!==gt||F!==q)&&(i.polygonOffset(gt,q),N=gt,F=q)):dt(i.POLYGON_OFFSET_FILL)}function _t(I){I?St(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+B-1),V!==I&&(i.activeTexture(I),V=I)}function b(I,gt,q){q===void 0&&(V===null?q=i.TEXTURE0+B-1:q=V);let Q=ht[q];Q===void 0&&(Q={type:void 0,texture:void 0},ht[q]=Q),(Q.type!==I||Q.texture!==gt)&&(V!==q&&(i.activeTexture(q),V=q),i.bindTexture(I,gt||tt[I]),Q.type=I,Q.texture=gt)}function k(){const I=ht[V];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(I){Ft.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ft.copy(I))}function bt(I){$t.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$t.copy(I))}function Qt(I,gt){let q=l.get(gt);q===void 0&&(q=new WeakMap,l.set(gt,q));let Q=q.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(gt,I.name),q.set(I,Q))}function Ht(I,gt){const Q=l.get(gt).get(I);a.get(gt)!==Q&&(i.uniformBlockBinding(gt,Q,I.__bindingPointIndex),a.set(gt,Q))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,ht={},h={},u=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,y=null,x=null,M=null,C=null,T=new jt(0,0,0),E=0,A=!1,L=null,v=null,S=null,N=null,F=null,Ft.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:St,disable:dt,bindFramebuffer:Dt,drawBuffers:Lt,useProgram:kt,setBlending:P,setMaterial:ot,setFlipSided:rt,setCullFace:et,setLineWidth:at,setPolygonOffset:Rt,setScissorTest:_t,activeTexture:R,bindTexture:b,unbindTexture:k,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:yt,texImage3D:Nt,updateUBOMapping:Qt,uniformBlockBinding:Ht,texStorage2D:Jt,texStorage3D:it,texSubImage2D:Z,texSubImage3D:wt,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:Ot,viewport:bt,reset:de}}function Nd(i,t,e,n){const s=cM(n);switch(e){case np:return i*t;case sp:return i*t;case rp:return i*t*2;case Zh:return i*t/s.components*s.byteLength;case jh:return i*t/s.components*s.byteLength;case op:return i*t*2/s.components*s.byteLength;case Kh:return i*t*2/s.components*s.byteLength;case ip:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case Jh:return i*t*4/s.components*s.byteLength;case Da:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hc:case Vc:return Math.max(i,16)*Math.max(t,8)/4;case Bc:case Gc:return Math.max(i,8)*Math.max(t,8)/2;case Wc:case qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case eh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ih:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Oa:case ah:case lh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ap:case ch:return Math.ceil(i/4)*Math.ceil(t/4)*8;case hh:case uh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cM(i){switch(i){case Mi:case Qf:return{byteLength:1,components:1};case yo:case tp:case ko:return{byteLength:2,components:1};case $h:case Yh:return{byteLength:2,components:4};case Ls:case Xh:case ii:return{byteLength:4,components:1};case ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return f?new OffscreenCanvas(R,b):So("canvas")}function g(R,b,k){let Y=1;const J=_t(R);if((J.width>k||J.height>k)&&(Y=k/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Y*J.width),wt=Math.floor(Y*J.height);u===void 0&&(u=_(Z,wt));const lt=b?_(Z,wt):u;return lt.width=Z,lt.height=wt,lt.getContext("2d").drawImage(R,0,0,Z,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Z+"x"+wt+")."),lt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==hn&&R.minFilter!==qn}function m(R){i.generateMipmap(R)}function y(R,b,k,Y,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),b===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),b===i.RGBA){const wt=J?qa:oe.getTransfer(Y);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=wt===_e?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,b){let k;return R?b===null||b===Ls||b===Dr?k=i.DEPTH24_STENCIL8:b===ii?k=i.DEPTH32F_STENCIL8:b===yo&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ls||b===Dr?k=i.DEPTH_COMPONENT24:b===ii?k=i.DEPTH_COMPONENT32F:b===yo&&(k=i.DEPTH_COMPONENT16),k}function M(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==qn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),E(b),b.isVideoTexture&&h.delete(b)}function T(R){const b=R.target;b.removeEventListener("dispose",T),L(b)}function E(R){const b=n.get(R);if(b.__webglInit===void 0)return;const k=R.source,Y=d.get(k);if(Y){const J=Y[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(R),Object.keys(Y).length===0&&d.delete(k)}n.remove(R)}function A(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const k=R.source,Y=d.get(k);delete Y[b.__cacheKey],o.memory.textures--}function L(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let J=0;J<b.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(b.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=R.textures;for(let Y=0,J=k.length;Y<J;Y++){const Z=n.get(k[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[Y])}n.remove(R)}let v=0;function S(){v=0}function N(){const R=v;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),v+=1,R}function F(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function B(R,b){const k=n.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(k,R,b);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+b)}function W(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){$t(k,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+b)}function z(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){$t(k,R,b);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+b)}function $(R,b){const k=n.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+b)}const V={[zc]:i.REPEAT,[Ss]:i.CLAMP_TO_EDGE,[kc]:i.MIRRORED_REPEAT},ht={[hn]:i.NEAREST,[N0]:i.NEAREST_MIPMAP_NEAREST,[$o]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Tl]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},ut={[k0]:i.NEVER,[q0]:i.ALWAYS,[B0]:i.LESS,[cp]:i.LEQUAL,[H0]:i.EQUAL,[W0]:i.GEQUAL,[G0]:i.GREATER,[V0]:i.NOTEQUAL};function ft(R,b){if(b.type===ii&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===qn||b.magFilter===Tl||b.magFilter===$o||b.magFilter===bs||b.minFilter===qn||b.minFilter===Tl||b.minFilter===$o||b.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,V[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,V[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,V[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ht[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ut[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===hn||b.minFilter!==$o&&b.minFilter!==bs||b.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ft(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const Y=b.source;let J=d.get(Y);J===void 0&&(J={},d.set(Y,J));const Z=F(b);if(Z!==R.__cacheKey){J[Z]===void 0&&(J[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[Z].usedTimes++;const wt=J[R.__cacheKey];wt!==void 0&&(J[R.__cacheKey].usedTimes--,wt.usedTimes===0&&A(b)),R.__cacheKey=Z,R.__webglTexture=J[Z].texture}return k}function $t(R,b,k){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Ft(R,b),Z=b.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+k);const wt=n.get(Z);if(Z.version!==wt.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const lt=oe.getPrimaries(oe.workingColorSpace),xt=b.colorSpace===Oi?null:oe.getPrimaries(b.colorSpace),Jt=b.colorSpace===Oi||lt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let it=g(b.image,!1,s.maxTextureSize);it=Rt(b,it);const yt=r.convert(b.format,b.colorSpace),Nt=r.convert(b.type);let Ot=y(b.internalFormat,yt,Nt,b.colorSpace,b.isVideoTexture);ft(Y,b);let bt;const Qt=b.mipmaps,Ht=b.isVideoTexture!==!0,de=wt.__version===void 0||J===!0,I=Z.dataReady,gt=M(b,it);if(b.isDepthTexture)Ot=x(b.format===Ir,b.type),de&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Ot,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Ot,it.width,it.height,0,yt,Nt,null));else if(b.isDataTexture)if(Qt.length>0){Ht&&de&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let q=0,Q=Qt.length;q<Q;q++)bt=Qt[q],Ht?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,yt,Nt,bt.data):e.texImage2D(i.TEXTURE_2D,q,Ot,bt.width,bt.height,0,yt,Nt,bt.data);b.generateMipmaps=!1}else Ht?(de&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,it.width,it.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,yt,Nt,it.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,it.width,it.height,0,yt,Nt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ot,Qt[0].width,Qt[0].height,it.depth);for(let q=0,Q=Qt.length;q<Q;q++)if(bt=Qt[q],b.format!==$n)if(yt!==null)if(Ht){if(I)if(b.layerUpdates.size>0){const pt=Nd(bt.width,bt.height,b.format,b.type);for(const vt of b.layerUpdates){const te=bt.data.subarray(vt*pt/bt.data.BYTES_PER_ELEMENT,(vt+1)*pt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,vt,bt.width,bt.height,1,yt,te,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,it.depth,yt,bt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ot,bt.width,bt.height,it.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,it.depth,yt,Nt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Ot,bt.width,bt.height,it.depth,0,yt,Nt,bt.data)}else{Ht&&de&&e.texStorage2D(i.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let q=0,Q=Qt.length;q<Q;q++)bt=Qt[q],b.format!==$n?yt!==null?Ht?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,yt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Ot,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,yt,Nt,bt.data):e.texImage2D(i.TEXTURE_2D,q,Ot,bt.width,bt.height,0,yt,Nt,bt.data)}else if(b.isDataArrayTexture)if(Ht){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ot,it.width,it.height,it.depth),I)if(b.layerUpdates.size>0){const q=Nd(it.width,it.height,b.format,b.type);for(const Q of b.layerUpdates){const pt=it.data.subarray(Q*q/it.data.BYTES_PER_ELEMENT,(Q+1)*q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,it.width,it.height,1,yt,Nt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Nt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,it.width,it.height,it.depth,0,yt,Nt,it.data);else if(b.isData3DTexture)Ht?(de&&e.texStorage3D(i.TEXTURE_3D,gt,Ot,it.width,it.height,it.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Nt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,it.width,it.height,it.depth,0,yt,Nt,it.data);else if(b.isFramebufferTexture){if(de)if(Ht)e.texStorage2D(i.TEXTURE_2D,gt,Ot,it.width,it.height);else{let q=it.width,Q=it.height;for(let pt=0;pt<gt;pt++)e.texImage2D(i.TEXTURE_2D,pt,Ot,q,Q,0,yt,Nt,null),q>>=1,Q>>=1}}else if(Qt.length>0){if(Ht&&de){const q=_t(Qt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Ot,q.width,q.height)}for(let q=0,Q=Qt.length;q<Q;q++)bt=Qt[q],Ht?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,yt,Nt,bt):e.texImage2D(i.TEXTURE_2D,q,Ot,yt,Nt,bt);b.generateMipmaps=!1}else if(Ht){if(de){const q=_t(it);e.texStorage2D(i.TEXTURE_2D,gt,Ot,q.width,q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Nt,it)}else e.texImage2D(i.TEXTURE_2D,0,Ot,yt,Nt,it);p(b)&&m(Y),wt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function X(R,b,k){if(b.image.length!==6)return;const Y=Ft(R,b),J=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);const Z=n.get(J);if(J.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+k);const wt=oe.getPrimaries(oe.workingColorSpace),lt=b.colorSpace===Oi?null:oe.getPrimaries(b.colorSpace),xt=b.colorSpace===Oi||wt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let Q=0;Q<6;Q++)!Jt&&!it?yt[Q]=g(b.image[Q],!0,s.maxCubemapSize):yt[Q]=it?b.image[Q].image:b.image[Q],yt[Q]=Rt(b,yt[Q]);const Nt=yt[0],Ot=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),Qt=y(b.internalFormat,Ot,bt,b.colorSpace),Ht=b.isVideoTexture!==!0,de=Z.__version===void 0||Y===!0,I=J.dataReady;let gt=M(b,Nt);ft(i.TEXTURE_CUBE_MAP,b);let q;if(Jt){Ht&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Qt,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){q=yt[Q].mipmaps;for(let pt=0;pt<q.length;pt++){const vt=q[pt];b.format!==$n?Ot!==null?Ht?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,vt.width,vt.height,Ot,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Qt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,vt.width,vt.height,Ot,bt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Qt,vt.width,vt.height,0,Ot,bt,vt.data)}}}else{if(q=b.mipmaps,Ht&&de){q.length>0&&gt++;const Q=_t(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Qt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(it){Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,yt[Q].width,yt[Q].height,Ot,bt,yt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qt,yt[Q].width,yt[Q].height,0,Ot,bt,yt[Q].data);for(let pt=0;pt<q.length;pt++){const te=q[pt].image[Q].image;Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,te.width,te.height,Ot,bt,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Qt,te.width,te.height,0,Ot,bt,te.data)}}else{Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ot,bt,yt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Qt,Ot,bt,yt[Q]);for(let pt=0;pt<q.length;pt++){const vt=q[pt];Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Ot,bt,vt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Qt,Ot,bt,vt.image[Q])}}}p(b)&&m(i.TEXTURE_CUBE_MAP),Z.__version=J.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function tt(R,b,k,Y,J,Z){const wt=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),xt=y(k.internalFormat,wt,lt,k.colorSpace);if(!n.get(b).__hasExternalTextures){const it=Math.max(1,b.width>>Z),yt=Math.max(1,b.height>>Z);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Z,xt,it,yt,b.depth,0,wt,lt,null):e.texImage2D(J,Z,xt,it,yt,0,wt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,n.get(k).__webglTexture,0,rt(b)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,n.get(k).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(R,b,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const Y=b.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,Z=x(b.stencilBuffer,J),wt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=rt(b);et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Z,b.width,b.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,R)}else{const Y=b.textures;for(let J=0;J<Y.length;J++){const Z=Y[J],wt=r.convert(Z.format,Z.colorSpace),lt=r.convert(Z.type),xt=y(Z.internalFormat,wt,lt,Z.colorSpace),Jt=rt(b);k&&et(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,xt,b.width,b.height):et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,xt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,xt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const Y=n.get(b.depthTexture).__webglTexture,J=rt(b);if(b.depthTexture.format===Mr)et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(b.depthTexture.format===Ir)et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Dt(R){const b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");dt(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),St(b.__webglDepthbuffer[Y],R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),St(b.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,b,k){const Y=n.get(R);b!==void 0&&tt(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Dt(R)}function kt(R){const b=R.texture,k=n.get(R),Y=n.get(b);R.addEventListener("dispose",T);const J=R.textures,Z=R.isWebGLCubeRenderTarget===!0,wt=J.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let xt=0;xt<b.mipmaps.length;xt++)k.__webglFramebuffer[lt][xt]=i.createFramebuffer()}else k.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<b.mipmaps.length;lt++)k.__webglFramebuffer[lt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(wt)for(let lt=0,xt=J.length;lt<xt;lt++){const Jt=n.get(J[lt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&et(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<J.length;lt++){const xt=J[lt];k.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const Jt=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),yt=y(xt.internalFormat,Jt,it,xt.colorSpace,R.isXRRenderTarget===!0),Nt=rt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),St(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ft(i.TEXTURE_CUBE_MAP,b);for(let lt=0;lt<6;lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)tt(k.__webglFramebuffer[lt][xt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,xt);else tt(k.__webglFramebuffer[lt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let lt=0,xt=J.length;lt<xt;lt++){const Jt=J[lt],it=n.get(Jt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),ft(i.TEXTURE_2D,Jt),tt(k.__webglFramebuffer,R,Jt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),p(Jt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(lt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Y.__webglTexture),ft(lt,b),b.mipmaps&&b.mipmaps.length>0)for(let xt=0;xt<b.mipmaps.length;xt++)tt(k.__webglFramebuffer[xt],R,b,i.COLOR_ATTACHMENT0,lt,xt);else tt(k.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,lt,0);p(b)&&m(lt),e.unbindTexture()}R.depthBuffer&&Dt(R)}function Xt(R){const b=R.textures;for(let k=0,Y=b.length;k<Y;k++){const J=b[k];if(p(J)){const Z=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,wt=n.get(J).__webglTexture;e.bindTexture(Z,wt),m(Z),e.unbindTexture()}}}const K=[],P=[];function ot(R){if(R.samples>0){if(et(R)===!1){const b=R.textures,k=R.width,Y=R.height;let J=i.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(R),lt=b.length>1;if(lt)for(let xt=0;xt<b.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let xt=0;xt<b.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);const Jt=n.get(b[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,k,Y,0,0,k,Y,J,i.NEAREST),l===!0&&(K.length=0,P.length=0,K.push(i.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(K.push(Z),P.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let xt=0;xt<b.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[xt]);const Jt=n.get(b[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function rt(R){return Math.min(s.maxSamples,R.samples)}function et(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Rt(R,b){const k=R.colorSpace,Y=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==es&&k!==Oi&&(oe.getTransfer(k)===_e?(Y!==$n||J!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=B,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Lt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=et}function uM(i,t){function e(n,s=Oi){let r;const o=oe.getTransfer(s);if(n===Mi)return i.UNSIGNED_BYTE;if(n===$h)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ep)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qf)return i.BYTE;if(n===tp)return i.SHORT;if(n===yo)return i.UNSIGNED_SHORT;if(n===Xh)return i.INT;if(n===Ls)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===ko)return i.HALF_FLOAT;if(n===np)return i.ALPHA;if(n===ip)return i.RGB;if(n===$n)return i.RGBA;if(n===sp)return i.LUMINANCE;if(n===rp)return i.LUMINANCE_ALPHA;if(n===Mr)return i.DEPTH_COMPONENT;if(n===Ir)return i.DEPTH_STENCIL;if(n===Zh)return i.RED;if(n===jh)return i.RED_INTEGER;if(n===op)return i.RG;if(n===Kh)return i.RG_INTEGER;if(n===Jh)return i.RGBA_INTEGER;if(n===Da||n===Ia||n===Ua||n===Na)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===Hc||n===Gc||n===Vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wc||n===qc||n===Xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wc||n===qc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$c||n===Yc||n===Zc||n===jc||n===Kc||n===Jc||n===Qc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$c)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===th)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ih)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===ah||n===lh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ap||n===ch||n===hh||n===uh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class dM extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pe extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const pM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mM=`
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

}`;class _M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ki({vertexShader:pM,fragmentShader:mM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gM extends zs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new _M,p=e.getContextAttributes();let m=null,y=null;const x=[],M=[],C=new nt;let T=null;const E=new bn;E.layers.enable(1),E.viewport=new he;const A=new bn;A.layers.enable(2),A.viewport=new he;const L=[E,A],v=new dM;v.layers.enable(1),v.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=x[X];return tt===void 0&&(tt=new tc,x[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=x[X];return tt===void 0&&(tt=new tc,x[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=x[X];return tt===void 0&&(tt=new tc,x[X]=tt),tt.getHandSpace()};function F(X){const tt=M.indexOf(X.inputSource);if(tt===-1)return;const St=x[tt];St!==void 0&&(St.update(X.inputSource,X.frame,c||o),St.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",W);for(let X=0;X<x.length;X++){const tt=M[X];tt!==null&&(M[X]=null,x[X].disconnect(tt))}S=null,N=null,g.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ds(f.framebufferWidth,f.framebufferHeight,{format:$n,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,St=null,dt=null;p.depth&&(dt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?Ir:Mr,St=p.stencil?Dr:Ls);const Dt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Ds(d.textureWidth,d.textureHeight,{format:$n,type:Mi,depthTexture:new Mp(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(X){for(let tt=0;tt<X.removed.length;tt++){const St=X.removed[tt],dt=M.indexOf(St);dt>=0&&(M[dt]=null,x[dt].disconnect(St))}for(let tt=0;tt<X.added.length;tt++){const St=X.added[tt];let dt=M.indexOf(St);if(dt===-1){for(let Lt=0;Lt<x.length;Lt++)if(Lt>=M.length){M.push(St),dt=Lt;break}else if(M[Lt]===null){M[Lt]=St,dt=Lt;break}if(dt===-1)break}const Dt=x[dt];Dt&&Dt.connect(St)}}const z=new D,$=new D;function V(X,tt,St){z.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);const dt=z.distanceTo($),Dt=tt.projectionMatrix.elements,Lt=St.projectionMatrix.elements,kt=Dt[14]/(Dt[10]-1),Xt=Dt[14]/(Dt[10]+1),K=(Dt[9]+1)/Dt[5],P=(Dt[9]-1)/Dt[5],ot=(Dt[8]-1)/Dt[0],rt=(Lt[8]+1)/Lt[0],et=kt*ot,at=kt*rt,Rt=dt/(-ot+rt),_t=Rt*-ot;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_t),X.translateZ(Rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Dt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const R=kt+Rt,b=Xt+Rt,k=et-_t,Y=at+(dt-_t),J=K*Xt/b*R,Z=P*Xt/b*R;X.projectionMatrix.makePerspective(k,Y,J,Z,R,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ht(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,St=X.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(St=g.depthFar)),v.near=A.near=E.near=tt,v.far=A.far=E.far=St,(S!==v.near||N!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,N=v.far);const dt=X.parent,Dt=v.cameras;ht(v,dt);for(let Lt=0;Lt<Dt.length;Lt++)ht(Dt[Lt],dt);Dt.length===2?V(v,E,A):v.projectionMatrix.copy(E.projectionMatrix),ut(X,v,dt)};function ut(X,tt,St){St===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Mo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ft=null;function Ft(X,tt){if(h=tt.getViewerPose(c||o),_=tt,h!==null){const St=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let dt=!1;St.length!==v.cameras.length&&(v.cameras.length=0,dt=!0);for(let Lt=0;Lt<St.length;Lt++){const kt=St[Lt];let Xt=null;if(f!==null)Xt=f.getViewport(kt);else{const P=u.getViewSubImage(d,kt);Xt=P.viewport,Lt===0&&(t.setRenderTargetTextures(y,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(y))}let K=L[Lt];K===void 0&&(K=new bn,K.layers.enable(Lt),K.viewport=new he,L[Lt]=K),K.matrix.fromArray(kt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(kt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Lt===0&&(v.matrix.copy(K.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),dt===!0&&v.cameras.push(K)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Lt=u.getDepthInformation(St[0]);Lt&&Lt.isValid&&Lt.texture&&g.init(t,Lt,s.renderState)}}for(let St=0;St<x.length;St++){const dt=M[St],Dt=x[St];dt!==null&&Dt!==void 0&&Dt.update(dt,tt,c||o)}ft&&ft(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const $t=new xp;$t.setAnimationLoop(Ft),this.setAnimationLoop=function(X){ft=X},this.dispose=function(){}}}const us=new oi,vM=new ee;function xM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_p(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,M=y.envMapRotation;x&&(p.envMap.value=x,us.copy(M),us.x*=-1,us.y*=-1,us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(us)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=s[y.id];M===void 0&&(_(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(y,C);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const x=u();y.__bindingPointIndex=x;const M=i.createBuffer(),C=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],M=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,E=M.length;T<E;T++){const A=Array.isArray(M[T])?M[T]:[M[T]];for(let L=0,v=A.length;L<v;L++){const S=A[L];if(f(S,T,L,C)===!0){const N=S.__offset,F=Array.isArray(S.value)?S.value:[S.value];let B=0;for(let W=0;W<F.length;W++){const z=F[W],$=g(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,N+B,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,M,C){const T=y.value,E=x+"_"+M;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{const A=C[E];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return C[E]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function _(y){const x=y.uniforms;let M=0;const C=16;for(let E=0,A=x.length;E<A;E++){const L=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,S=L.length;v<S;v++){const N=L[v],F=Array.isArray(N.value)?N.value:[N.value];for(let B=0,W=F.length;B<W;B++){const z=F[B],$=g(z),V=M%C,ht=V%$.boundary,ut=V+ht;M+=ht,ut!==0&&C-ut<$.storage&&(M+=C-ut),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=$.storage}}}const T=M%C;return T>0&&(M+=C-T),y.__size=M,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class MM{constructor(t={}){const{canvas:e=l_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Wi,this.toneMappingExposure=1;const x=this;let M=!1,C=0,T=0,E=null,A=-1,L=null;const v=new he,S=new he;let N=null;const F=new jt(0);let B=0,W=e.width,z=e.height,$=1,V=null,ht=null;const ut=new he(0,0,W,z),ft=new he(0,0,W,z);let Ft=!1;const $t=new nu;let X=!1,tt=!1;const St=new ee,dt=new ee,Dt=new D,Lt=new he,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function K(){return E===null?$:1}let P=n;function ot(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qh}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),P===null){const U="webgl2";if(P=ot(U,w),P===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let rt,et,at,Rt,_t,R,b,k,Y,J,Z,wt,lt,xt,Jt,it,yt,Nt,Ot,bt,Qt,Ht,de,I;function gt(){rt=new Tx(P),rt.init(),Ht=new uM(P,rt),et=new yx(P,rt,t,Ht),at=new lM(P),et.reverseDepthBuffer&&at.buffers.depth.setReversed(!0),Rt=new Rx(P),_t=new $y,R=new hM(P,rt,at,_t,et,Ht,Rt),b=new Sx(x),k=new wx(x),Y=new O_(P),de=new vx(P,Y),J=new Ax(P,Y,Rt,de),Z=new Lx(P,J,Y,Rt),Ot=new Px(P,et,R),it=new Mx(_t),wt=new Xy(x,b,k,rt,et,de,it),lt=new xM(x,_t),xt=new Zy,Jt=new eM(rt),Nt=new gx(x,b,k,at,Z,d,l),yt=new oM(x,Z,et),I=new yM(P,Rt,et,at),bt=new xx(P,rt,Rt),Qt=new Cx(P,rt,Rt),Rt.programs=wt.programs,x.capabilities=et,x.extensions=rt,x.properties=_t,x.renderLists=xt,x.shadowMap=yt,x.state=at,x.info=Rt}gt();const q=new gM(x,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(W,z,!1))},this.getSize=function(w){return w.set(W,z)},this.setSize=function(w,U,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,z=U,e.width=Math.floor(w*$),e.height=Math.floor(U*$),H===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*$,z*$).floor()},this.setDrawingBufferSize=function(w,U,H){W=w,z=U,$=H,e.width=Math.floor(w*H),e.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(ut)},this.setViewport=function(w,U,H,G){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,U,H,G),at.viewport(v.copy(ut).multiplyScalar($).round())},this.getScissor=function(w){return w.copy(ft)},this.setScissor=function(w,U,H,G){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,U,H,G),at.scissor(S.copy(ft).multiplyScalar($).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(w){at.setScissorTest(Ft=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(w=!0,U=!0,H=!0){let G=0;if(w){let O=!1;if(E!==null){const st=E.texture.format;O=st===Jh||st===Kh||st===jh}if(O){const st=E.texture.type,mt=st===Mi||st===Ls||st===yo||st===Dr||st===$h||st===Yh,Et=Nt.getClearColor(),Tt=Nt.getClearAlpha(),It=Et.r,Ut=Et.g,Ct=Et.b;mt?(f[0]=It,f[1]=Ut,f[2]=Ct,f[3]=Tt,P.clearBufferuiv(P.COLOR,0,f)):(_[0]=It,_[1]=Ut,_[2]=Ct,_[3]=Tt,P.clearBufferiv(P.COLOR,0,_))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),xt.dispose(),Jt.dispose(),_t.dispose(),b.dispose(),k.dispose(),Z.dispose(),de.dispose(),I.dispose(),wt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Iu),q.removeEventListener("sessionend",Uu),rs.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Rt.autoReset,U=yt.enabled,H=yt.autoUpdate,G=yt.needsUpdate,O=yt.type;gt(),Rt.autoReset=w,yt.enabled=U,yt.autoUpdate=H,yt.needsUpdate=G,yt.type=O}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){const U=w.target;U.removeEventListener("dispose",te),Re(U)}function Re(w){sn(w),_t.remove(w)}function sn(w){const U=_t.get(w).programs;U!==void 0&&(U.forEach(function(H){wt.releaseProgram(H)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,G,O,st){U===null&&(U=kt);const mt=O.isMesh&&O.matrixWorld.determinant()<0,Et=i0(w,U,H,G,O);at.setMaterial(G,mt);let Tt=H.index,It=1;if(G.wireframe===!0){if(Tt=J.getWireframeAttribute(H),Tt===void 0)return;It=2}const Ut=H.drawRange,Ct=H.attributes.position;let ae=Ut.start*It,me=(Ut.start+Ut.count)*It;st!==null&&(ae=Math.max(ae,st.start*It),me=Math.min(me,(st.start+st.count)*It)),Tt!==null?(ae=Math.max(ae,0),me=Math.min(me,Tt.count)):Ct!=null&&(ae=Math.max(ae,0),me=Math.min(me,Ct.count));const be=me-ae;if(be<0||be===1/0)return;de.setup(O,G,Et,H,Tt);let gn,ie=bt;if(Tt!==null&&(gn=Y.get(Tt),ie=Qt,ie.setIndex(gn)),O.isMesh)G.wireframe===!0?(at.setLineWidth(G.wireframeLinewidth*K()),ie.setMode(P.LINES)):ie.setMode(P.TRIANGLES);else if(O.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),at.setLineWidth(Pt*K()),O.isLineSegments?ie.setMode(P.LINES):O.isLineLoop?ie.setMode(P.LINE_LOOP):ie.setMode(P.LINE_STRIP)}else O.isPoints?ie.setMode(P.POINTS):O.isSprite&&ie.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ie.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ie.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Pt=O._multiDrawStarts,We=O._multiDrawCounts,se=O._multiDrawCount,zn=Tt?Y.get(Tt).bytesPerElement:1,Ws=_t.get(G).currentProgram.getUniforms();for(let vn=0;vn<se;vn++)Ws.setValue(P,"_gl_DrawID",vn),ie.render(Pt[vn]/zn,We[vn])}else if(O.isInstancedMesh)ie.renderInstances(ae,be,O.count);else if(H.isInstancedBufferGeometry){const Pt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,We=Math.min(H.instanceCount,Pt);ie.renderInstances(ae,be,We)}else ie.render(ae,be)};function ne(w,U,H){w.transparent===!0&&w.side===Wn&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Xo(w,U,H),w.side=ji,w.needsUpdate=!0,Xo(w,U,H),w.side=Wn):Xo(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),p=Jt.get(H),p.init(U),y.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let mt=0;mt<st.length;mt++){const Et=st[mt];ne(Et,H,O),G.add(Et)}else ne(st,H,O),G.add(st)}),y.pop(),p=null,G},this.compileAsync=function(w,U,H=null){const G=this.compile(w,U,H);return new Promise(O=>{function st(){if(G.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){O(w);return}setTimeout(st,10)}rt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let rn=null;function ci(w){rn&&rn(w)}function Iu(){rs.stop()}function Uu(){rs.start()}const rs=new xp;rs.setAnimationLoop(ci),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(w){rn=w,q.setAnimationLoop(w),w===null?rs.stop():rs.start()},q.addEventListener("sessionstart",Iu),q.addEventListener("sessionend",Uu),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,E),p=Jt.get(w,y.length),p.init(U),y.push(p),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$t.setFromProjectionMatrix(dt),tt=this.localClippingEnabled,X=it.init(this.clippingPlanes,tt),g=xt.get(w,m.length),g.init(),m.push(g),q.enabled===!0&&q.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Sl(st,U,-1/0,x.sortObjects)}Sl(w,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,ht),Xt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Xt&&Nt.addToRenderList(g,w),this.info.render.frame++,X===!0&&it.beginShadows();const H=p.state.shadowsArray;yt.render(H,w,U),X===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,O=g.transmissive;if(p.setupLights(),U.isArrayCamera){const st=U.cameras;if(O.length>0)for(let mt=0,Et=st.length;mt<Et;mt++){const Tt=st[mt];Ou(G,O,w,Tt)}Xt&&Nt.render(w);for(let mt=0,Et=st.length;mt<Et;mt++){const Tt=st[mt];Nu(g,w,Tt,Tt.viewport)}}else O.length>0&&Ou(G,O,w,U),Xt&&Nt.render(w),Nu(g,w,U);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(x,w,U),de.resetDefaultState(),A=-1,L=null,y.pop(),y.length>0?(p=y[y.length-1],X===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Sl(w,U,H,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$t.intersectsSprite(w)){G&&Lt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(dt);const mt=Z.update(w),Et=w.material;Et.visible&&g.push(w,mt,Et,H,Lt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$t.intersectsObject(w))){const mt=Z.update(w),Et=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Lt.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Lt.copy(mt.boundingSphere.center)),Lt.applyMatrix4(w.matrixWorld).applyMatrix4(dt)),Array.isArray(Et)){const Tt=mt.groups;for(let It=0,Ut=Tt.length;It<Ut;It++){const Ct=Tt[It],ae=Et[Ct.materialIndex];ae&&ae.visible&&g.push(w,mt,ae,H,Lt.z,Ct)}}else Et.visible&&g.push(w,mt,Et,H,Lt.z,null)}}const st=w.children;for(let mt=0,Et=st.length;mt<Et;mt++)Sl(st[mt],U,H,G)}function Nu(w,U,H,G){const O=w.opaque,st=w.transmissive,mt=w.transparent;p.setupLightsView(H),X===!0&&it.setGlobalState(x.clippingPlanes,H),G&&at.viewport(v.copy(G)),O.length>0&&qo(O,U,H),st.length>0&&qo(st,U,H),mt.length>0&&qo(mt,U,H),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Ou(w,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Ds(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?ko:Mi,minFilter:bs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const st=p.state.transmissionRenderTarget[G.id],mt=G.viewport||v;st.setSize(mt.z,mt.w);const Et=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(F),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&Nt.render(H);const Tt=x.toneMapping;x.toneMapping=Wi;const It=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),X===!0&&it.setGlobalState(x.clippingPlanes,G),qo(w,H,G),R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Ct=0,ae=U.length;Ct<ae;Ct++){const me=U[Ct],be=me.object,gn=me.geometry,ie=me.material,Pt=me.group;if(ie.side===Wn&&be.layers.test(G.layers)){const We=ie.side;ie.side=un,ie.needsUpdate=!0,Fu(be,H,G,gn,ie,Pt),ie.side=We,ie.needsUpdate=!0,Ut=!0}}Ut===!0&&(R.updateMultisampleRenderTarget(st),R.updateRenderTargetMipmap(st))}x.setRenderTarget(Et),x.setClearColor(F,B),It!==void 0&&(G.viewport=It),x.toneMapping=Tt}function qo(w,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,st=w.length;O<st;O++){const mt=w[O],Et=mt.object,Tt=mt.geometry,It=G===null?mt.material:G,Ut=mt.group;Et.layers.test(H.layers)&&Fu(Et,U,H,Tt,It,Ut)}}function Fu(w,U,H,G,O,st){w.onBeforeRender(x,U,H,G,O,st),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,U,H,G,w,st),O.transparent===!0&&O.side===Wn&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,x.renderBufferDirect(H,U,G,O,w,st),O.side=ji,O.needsUpdate=!0,x.renderBufferDirect(H,U,G,O,w,st),O.side=Wn):x.renderBufferDirect(H,U,G,O,w,st),w.onAfterRender(x,U,H,G,O,st)}function Xo(w,U,H){U.isScene!==!0&&(U=kt);const G=_t.get(w),O=p.state.lights,st=p.state.shadowsArray,mt=O.state.version,Et=wt.getParameters(w,O.state,st,U,H),Tt=wt.getProgramCacheKey(Et);let It=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?k:b).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",te),It=new Map,G.programs=It);let Ut=It.get(Tt);if(Ut!==void 0){if(G.currentProgram===Ut&&G.lightsStateVersion===mt)return ku(w,Et),Ut}else Et.uniforms=wt.getUniforms(w),w.onBeforeCompile(Et,x),Ut=wt.acquireProgram(Et,Tt),It.set(Tt,Ut),G.uniforms=Et.uniforms;const Ct=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=it.uniform),ku(w,Et),G.needsLights=r0(w),G.lightsStateVersion=mt,G.needsLights&&(Ct.ambientLightColor.value=O.state.ambient,Ct.lightProbe.value=O.state.probe,Ct.directionalLights.value=O.state.directional,Ct.directionalLightShadows.value=O.state.directionalShadow,Ct.spotLights.value=O.state.spot,Ct.spotLightShadows.value=O.state.spotShadow,Ct.rectAreaLights.value=O.state.rectArea,Ct.ltc_1.value=O.state.rectAreaLTC1,Ct.ltc_2.value=O.state.rectAreaLTC2,Ct.pointLights.value=O.state.point,Ct.pointLightShadows.value=O.state.pointShadow,Ct.hemisphereLights.value=O.state.hemi,Ct.directionalShadowMap.value=O.state.directionalShadowMap,Ct.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ct.spotShadowMap.value=O.state.spotShadowMap,Ct.spotLightMatrix.value=O.state.spotLightMatrix,Ct.spotLightMap.value=O.state.spotLightMap,Ct.pointShadowMap.value=O.state.pointShadowMap,Ct.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=Ut,G.uniformsList=null,Ut}function zu(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=ka.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ku(w,U){const H=_t.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function i0(w,U,H,G,O){U.isScene!==!0&&(U=kt),R.resetTextureUnits();const st=U.fog,mt=G.isMeshStandardMaterial?U.environment:null,Et=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:es,Tt=(G.isMeshStandardMaterial?k:b).get(G.envMap||mt),It=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!H.morphAttributes.position,ae=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let be=Wi;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(be=x.toneMapping);const gn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=gn!==void 0?gn.length:0,Pt=_t.get(G),We=p.state.lights;if(X===!0&&(tt===!0||w!==L)){const Cn=w===L&&G.id===A;it.setState(G,w,Cn)}let se=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==We.state.version||Pt.outputColorSpace!==Et||O.isBatchedMesh&&Pt.batching===!1||!O.isBatchedMesh&&Pt.batching===!0||O.isBatchedMesh&&Pt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pt.instancing===!1||!O.isInstancedMesh&&Pt.instancing===!0||O.isSkinnedMesh&&Pt.skinning===!1||!O.isSkinnedMesh&&Pt.skinning===!0||O.isInstancedMesh&&Pt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pt.instancingMorph===!1&&O.morphTexture!==null||Pt.envMap!==Tt||G.fog===!0&&Pt.fog!==st||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==It||Pt.vertexTangents!==Ut||Pt.morphTargets!==Ct||Pt.morphNormals!==ae||Pt.morphColors!==me||Pt.toneMapping!==be||Pt.morphTargetsCount!==ie)&&(se=!0):(se=!0,Pt.__version=G.version);let zn=Pt.currentProgram;se===!0&&(zn=Xo(G,U,O));let Ws=!1,vn=!1,bl=!1;const we=zn.getUniforms(),wi=Pt.uniforms;if(at.useProgram(zn.program)&&(Ws=!0,vn=!0,bl=!0),G.id!==A&&(A=G.id,vn=!0),Ws||L!==w){et.reverseDepthBuffer?(St.copy(w.projectionMatrix),h_(St),u_(St),we.setValue(P,"projectionMatrix",St)):we.setValue(P,"projectionMatrix",w.projectionMatrix),we.setValue(P,"viewMatrix",w.matrixWorldInverse);const Cn=we.map.cameraPosition;Cn!==void 0&&Cn.setValue(P,Dt.setFromMatrixPosition(w.matrixWorld)),et.logarithmicDepthBuffer&&we.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&we.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),L!==w&&(L=w,vn=!0,bl=!0)}if(O.isSkinnedMesh){we.setOptional(P,O,"bindMatrix"),we.setOptional(P,O,"bindMatrixInverse");const Cn=O.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),we.setValue(P,"boneTexture",Cn.boneTexture,R))}O.isBatchedMesh&&(we.setOptional(P,O,"batchingTexture"),we.setValue(P,"batchingTexture",O._matricesTexture,R),we.setOptional(P,O,"batchingIdTexture"),we.setValue(P,"batchingIdTexture",O._indirectTexture,R),we.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&we.setValue(P,"batchingColorTexture",O._colorsTexture,R));const El=H.morphAttributes;if((El.position!==void 0||El.normal!==void 0||El.color!==void 0)&&Ot.update(O,H,zn),(vn||Pt.receiveShadow!==O.receiveShadow)&&(Pt.receiveShadow=O.receiveShadow,we.setValue(P,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wi.envMap.value=Tt,wi.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(wi.envMapIntensity.value=U.environmentIntensity),vn&&(we.setValue(P,"toneMappingExposure",x.toneMappingExposure),Pt.needsLights&&s0(wi,bl),st&&G.fog===!0&&lt.refreshFogUniforms(wi,st),lt.refreshMaterialUniforms(wi,G,$,z,p.state.transmissionRenderTarget[w.id]),ka.upload(P,zu(Pt),wi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ka.upload(P,zu(Pt),wi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&we.setValue(P,"center",O.center),we.setValue(P,"modelViewMatrix",O.modelViewMatrix),we.setValue(P,"normalMatrix",O.normalMatrix),we.setValue(P,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Cn=G.uniformsGroups;for(let wl=0,o0=Cn.length;wl<o0;wl++){const Bu=Cn[wl];I.update(Bu,zn),I.bind(Bu,zn)}}return zn}function s0(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function r0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,U,H){_t.get(w.texture).__webglTexture=U,_t.get(w.depthTexture).__webglTexture=H;const G=_t.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const H=_t.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,H=0){E=w,C=U,T=H;let G=!0,O=null,st=!1,mt=!1;if(w){const Tt=_t.get(w);if(Tt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Tt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Tt.__hasExternalTextures)R.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ct=w.depthTexture;if(Tt.__boundDepthTexture!==Ct){if(Ct!==null&&_t.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(mt=!0);const Ut=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?O=Ut[U][H]:O=Ut[U],st=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?O=Ut[H]:O=Ut,v.copy(w.viewport),S.copy(w.scissor),N=w.scissorTest}else v.copy(ut).multiplyScalar($).floor(),S.copy(ft).multiplyScalar($).floor(),N=Ft;if(at.bindFramebuffer(P.FRAMEBUFFER,O)&&G&&at.drawBuffers(w,O),at.viewport(v),at.scissor(S),at.setScissorTest(N),st){const Tt=_t.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,H)}else if(mt){const Tt=_t.get(w.texture),It=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,It)}A=-1},this.readRenderTargetPixels=function(w,U,H,G,O,st,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){at.bindFramebuffer(P.FRAMEBUFFER,Et);try{const Tt=w.texture,It=Tt.format,Ut=Tt.type;if(!et.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&H>=0&&H<=w.height-O&&P.readPixels(U,H,G,O,Ht.convert(It),Ht.convert(Ut),st)}finally{const Tt=E!==null?_t.get(E).__webglFramebuffer:null;at.bindFramebuffer(P.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,G,O,st,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){const Tt=w.texture,It=Tt.format,Ut=Tt.type;if(!et.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&H>=0&&H<=w.height-O){at.bindFramebuffer(P.FRAMEBUFFER,Et);const Ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.bufferData(P.PIXEL_PACK_BUFFER,st.byteLength,P.STREAM_READ),P.readPixels(U,H,G,O,Ht.convert(It),Ht.convert(Ut),0);const ae=E!==null?_t.get(E).__webglFramebuffer:null;at.bindFramebuffer(P.FRAMEBUFFER,ae);const me=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await c_(P,me,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,st),P.deleteBuffer(Ct),P.deleteSync(me),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(w.image.width*G),st=Math.floor(w.image.height*G),mt=U!==null?U.x:0,Et=U!==null?U.y:0;R.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,mt,Et,O,st),at.unbindTexture()},this.copyTextureToTexture=function(w,U,H=null,G=null,O=0){w.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],O=arguments[3]||0,H=null);let st,mt,Et,Tt,It,Ut;H!==null?(st=H.max.x-H.min.x,mt=H.max.y-H.min.y,Et=H.min.x,Tt=H.min.y):(st=w.image.width,mt=w.image.height,Et=0,Tt=0),G!==null?(It=G.x,Ut=G.y):(It=0,Ut=0);const Ct=Ht.convert(U.format),ae=Ht.convert(U.type);R.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const me=P.getParameter(P.UNPACK_ROW_LENGTH),be=P.getParameter(P.UNPACK_IMAGE_HEIGHT),gn=P.getParameter(P.UNPACK_SKIP_PIXELS),ie=P.getParameter(P.UNPACK_SKIP_ROWS),Pt=P.getParameter(P.UNPACK_SKIP_IMAGES),We=w.isCompressedTexture?w.mipmaps[O]:w.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,We.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,We.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Et),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tt),w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,It,Ut,st,mt,Ct,ae,We.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,It,Ut,We.width,We.height,Ct,We.data):P.texSubImage2D(P.TEXTURE_2D,O,It,Ut,st,mt,Ct,ae,We),P.pixelStorei(P.UNPACK_ROW_LENGTH,me),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pt),O===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,G=null,O=0){w.isTexture!==!0&&(za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],O=arguments[4]||0);let st,mt,Et,Tt,It,Ut,Ct,ae,me;const be=w.isCompressedTexture?w.mipmaps[O]:w.image;H!==null?(st=H.max.x-H.min.x,mt=H.max.y-H.min.y,Et=H.max.z-H.min.z,Tt=H.min.x,It=H.min.y,Ut=H.min.z):(st=be.width,mt=be.height,Et=be.depth,Tt=0,It=0,Ut=0),G!==null?(Ct=G.x,ae=G.y,me=G.z):(Ct=0,ae=0,me=0);const gn=Ht.convert(U.format),ie=Ht.convert(U.type);let Pt;if(U.isData3DTexture)R.setTexture3D(U,0),Pt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Pt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const We=P.getParameter(P.UNPACK_ROW_LENGTH),se=P.getParameter(P.UNPACK_IMAGE_HEIGHT),zn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ws=P.getParameter(P.UNPACK_SKIP_ROWS),vn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,be.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,be.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,It),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut),w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Pt,O,Ct,ae,me,st,mt,Et,gn,ie,be.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Pt,O,Ct,ae,me,st,mt,Et,gn,be.data):P.texSubImage3D(Pt,O,Ct,ae,me,st,mt,Et,gn,ie,be),P.pixelStorei(P.UNPACK_ROW_LENGTH,We),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ws),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vn),O===0&&U.generateMipmaps&&P.generateMipmap(Pt),at.unbindTexture()},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),at.unbindTexture()},this.resetState=function(){C=0,T=0,E=null,at.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qh?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===dl?"display-p3":"srgb"}}class SM extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bM extends qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=hn,h=hn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Od extends On{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const rr=new ee,Fd=new ee,pa=[],zd=new ns,EM=new ee,Zr=new Zt,jr=new Bs;class wM extends Zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Od(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,EM)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ns),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rr),zd.copy(t.boundingBox).applyMatrix4(rr),this.boundingBox.union(zd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,rr),jr.copy(t.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),t.ray.intersectsSphere(jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),Fd.multiplyMatrices(n,rr),Zr.matrixWorld=Fd,Zr.raycast(t,pa);for(let o=0,a=pa.length;o<a;o++){const l=pa[o];l.instanceId=r,l.object=this,e.push(l)}pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Od(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bM(new Float32Array(s*this.count),s,this.count,Zh,ii));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pl extends is{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Za=new D,ja=new D,kd=new ee,Kr=new Bo,ma=new Bs,ec=new D,Bd=new D;class Tp extends Ce{constructor(t=new Ne,e=new pl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Za.fromBufferAttribute(e,s-1),ja.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Za.distanceTo(ja);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;kd.copy(s).invert(),Kr.copy(t.ray).applyMatrix4(kd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,p=_-1;g<p;g+=c){const m=h.getX(g),y=h.getX(g+1),x=_a(this,t,Kr,l,m,y);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(f),m=_a(this,t,Kr,l,g,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,p=_-1;g<p;g+=c){const m=_a(this,t,Kr,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=_a(this,t,Kr,l,_-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _a(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Za.fromBufferAttribute(o,s),ja.fromBufferAttribute(o,r),e.distanceSqToSegment(Za,ja,ec,Bd)>n)return;ec.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ec);if(!(l<t.near||l>t.far))return{distance:l,point:Bd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Hd=new D,Gd=new D;class Vd extends Tp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Hd.fromBufferAttribute(e,s),Gd.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hd.distanceTo(Gd);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ap extends is{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wd=new ee,fh=new Bo,ga=new Bs,va=new D;class TM extends Ce{constructor(t=new Ne,e=new Ap){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;Wd.copy(s).invert(),fh.copy(t.ray).applyMatrix4(Wd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const p=c.getX(_);va.fromBufferAttribute(u,p),qd(va,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)va.fromBufferAttribute(u,_),qd(va,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qd(i,t,e,n,s,r,o){const a=fh.distanceSqToPoint(i);if(a<e){const l=new D;fh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class AM extends qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,l=new ee;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(He(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(He(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class su extends li{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class CM extends su{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ru(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const xa=new D,nc=new ru,ic=new ru,sc=new ru;class RM extends li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xa.subVectors(s[0],s[1]).add(s[0]),c=xa);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),nc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,p),ic.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,p),sc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(nc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ic.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(nc.calc(l),ic.calc(l),sc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xd(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function PM(i,t){const e=1-i;return e*e*t}function LM(i,t){return 2*(1-i)*i*t}function DM(i,t){return i*i*t}function co(i,t,e,n){return PM(i,t)+LM(i,e)+DM(i,n)}function IM(i,t){const e=1-i;return e*e*e*t}function UM(i,t){const e=1-i;return 3*e*e*i*t}function NM(i,t){return 3*(1-i)*i*i*t}function OM(i,t){return i*i*i*t}function ho(i,t,e,n,s){return IM(i,t)+UM(i,e)+NM(i,n)+OM(i,s)}class Cp extends li{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(t,s.x,r.x,o.x,a.x),ho(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class FM extends li{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(t,s.x,r.x,o.x,a.x),ho(t,s.y,r.y,o.y,a.y),ho(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rp extends li{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ph extends li{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends li{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(co(t,s.x,r.x,o.x),co(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends li{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(co(t,s.x,r.x,o.x),co(t,s.y,r.y,o.y),co(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dp extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Xd(a,l.x,c.x,h.x,u.x),Xd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Ka=Object.freeze({__proto__:null,ArcCurve:CM,CatmullRomCurve3:RM,CubicBezierCurve:Cp,CubicBezierCurve3:FM,EllipseCurve:su,LineCurve:Rp,LineCurve3:ph,QuadraticBezierCurve:Pp,QuadraticBezierCurve3:Lp,SplineCurve:Dp});class mh extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ka[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ka[s.type]().fromJSON(s))}return this}}class _h extends mh{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Rp(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Pp(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Cp(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new su(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class bo extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const g=[],p=n/2;let m=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function y(){const M=new D,C=new D;let T=0;const E=(e-t)/n;for(let A=0;A<=r;A++){const L=[],v=A/r,S=v*(e-t)+t;for(let N=0;N<=s;N++){const F=N/s,B=F*l+a,W=Math.sin(B),z=Math.cos(B);C.x=S*W,C.y=-v*n+p,C.z=S*z,u.push(C.x,C.y,C.z),M.set(W,E,z).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-v),L.push(_++)}g.push(L)}for(let A=0;A<s;A++)for(let L=0;L<r;L++){const v=g[L][A],S=g[L+1][A],N=g[L+1][A+1],F=g[L][A+1];t>0&&(h.push(v,S,F),T+=3),e>0&&(h.push(S,N,F),T+=3)}c.addGroup(m,T,0),m+=T}function x(M){const C=_,T=new nt,E=new D;let A=0;const L=M===!0?t:e,v=M===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,p*v,0),d.push(0,v,0),f.push(.5,.5),_++;const S=_;for(let N=0;N<=s;N++){const B=N/s*l+a,W=Math.cos(B),z=Math.sin(B);E.x=L*z,E.y=p*v,E.z=L*W,u.push(E.x,E.y,E.z),d.push(0,v,0),T.x=W*.5+.5,T.y=z*.5*v+.5,f.push(T.x,T.y),_++}for(let N=0;N<s;N++){const F=C+N,B=S+N;M===!0?h.push(B,B+1,F):h.push(B+1,B,F),A+=3}c.addGroup(m,A,M===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nr extends bo{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Nr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ou extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new D,M=new D,C=new D;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],M),f(e[T+2],C),l(x,M,C,y)}function l(y,x,M,C){const T=C+1,E=[];for(let A=0;A<=T;A++){E[A]=[];const L=y.clone().lerp(M,A/T),v=x.clone().lerp(M,A/T),S=T-A;for(let N=0;N<=S;N++)N===0&&A===T?E[A][N]=L:E[A][N]=L.clone().lerp(v,N/S)}for(let A=0;A<T;A++)for(let L=0;L<2*(T-A)-1;L++){const v=Math.floor(L/2);L%2===0?(d(E[A][v+1]),d(E[A+1][v]),d(E[A][v])):(d(E[A][v+1]),d(E[A+1][v+1]),d(E[A+1][v]))}}function c(y){const x=new D;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const M=p(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;o.push(M,1-C)}_(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],M=o[y+2],C=o[y+4],T=Math.max(x,M,C),E=Math.min(x,M,C);T>.9&&E<.1&&(x<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function _(){const y=new D,x=new D,M=new D,C=new D,T=new nt,E=new nt,A=new nt;for(let L=0,v=0;L<r.length;L+=9,v+=6){y.set(r[L+0],r[L+1],r[L+2]),x.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),T.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),C.copy(y).add(x).add(M).divideScalar(3);const S=p(C);g(T,v+0,y,S),g(E,v+2,x,S),g(A,v+4,M,S)}}function g(y,x,M,C){C<0&&y.x===1&&(o[x]=y.x-1),M.x===0&&M.z===0&&(o[x]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.vertices,t.indices,t.radius,t.details)}}const ya=new D,Ma=new D,rc=new D,Sa=new In;class zM extends Ne{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Sr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:m}=Sa;if(g.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Sa.getNormal(rc),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,M=u[y],C=u[x],T=Sa[h[y]],E=Sa[h[x]],A=`${M}_${C}`,L=`${C}_${M}`;L in d&&d[L]?(rc.dot(d[L].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(E.x,E.y,E.z)),d[L]=null):A in d||(d[A]={index0:c[y],index1:c[x],normal:rc.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:p}=d[_];ya.fromBufferAttribute(a,g),Ma.fromBufferAttribute(a,p),f.push(ya.x,ya.y,ya.z),f.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new le(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ip extends _h{constructor(t){super(t),this.uuid=ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new _h().fromJSON(s))}return this}}const kM={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Up(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=WM(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let _=e;_<s;_+=e)u=i[_],d=i[_+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Eo(r,o,e,a,l,f,0),o}};function Up(i,t,e,n,s){let r,o;if(s===eS(i,t,e,n)>0)for(r=t;r<e;r+=n)o=$d(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=$d(r,i[r],i[r+1],o);return o&&ml(o,o.next)&&(To(o),o=o.next),o}function Us(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ml(e,e.next)||Me(e.prev,e,e.next)===0)){if(To(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Eo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ZM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?HM(i,n,s,r):BM(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),To(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=GM(Us(i),t,e),Eo(i,t,e,n,s,r,2)):o===2&&VM(i,t,e,n,s,r):Eo(Us(i),t,e,n,s,r,1);break}}}function BM(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=f&&ur(s,a,r,l,o,c,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function HM(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Me(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,_=h<u?h<d?h:d:u<d?u:d,g=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,m=gh(f,_,t,e,n),y=gh(g,p,t,e,n);let x=i.prevZ,M=i.nextZ;for(;x&&x.z>=m&&M&&M.z<=y;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&ur(a,h,l,u,c,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=g&&M.y>=_&&M.y<=p&&M!==s&&M!==o&&ur(a,h,l,u,c,d,M.x,M.y)&&Me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=g&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&ur(a,h,l,u,c,d,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=p&&M!==s&&M!==o&&ur(a,h,l,u,c,d,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function GM(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ml(s,r)&&Np(s,n,n.next,r)&&wo(s,r)&&wo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),To(n),To(n.next),n=i=r),n=n.next}while(n!==i);return Us(n)}function VM(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&JM(o,a)){let l=Op(o,a);o=Us(o,o.next),l=Us(l,l.next),Eo(o,t,e,n,s,r,0),Eo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function WM(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Up(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(KM(c));for(s.sort(qM),r=0;r<s.length;r++)e=XM(s[r],e);return e}function qM(i,t){return i.x-t.x}function XM(i,t){const e=$M(i,t);if(!e)return t;const n=Op(e,i);return Us(n,n.next),Us(e,e.next)}function $M(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ur(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),wo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&YM(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function YM(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function ZM(i,t,e,n){let s=i;do s.z===0&&(s.z=gh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jM(s)}function jM(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function gh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function KM(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ur(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function JM(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!QM(i,t)&&(wo(i,t)&&wo(t,i)&&tS(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||ml(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ml(i,t){return i.x===t.x&&i.y===t.y}function Np(i,t,e,n){const s=Ea(Me(i,t,e)),r=Ea(Me(i,t,n)),o=Ea(Me(e,n,i)),a=Ea(Me(e,n,t));return!!(s!==r&&o!==a||s===0&&ba(i,e,t)||r===0&&ba(i,n,t)||o===0&&ba(e,i,n)||a===0&&ba(e,t,n))}function ba(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ea(i){return i>0?1:i<0?-1:0}function QM(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Np(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function wo(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function tS(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Op(i,t){const e=new vh(i.i,i.x,i.y),n=new vh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $d(i,t,e,n){const s=new vh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function To(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eS(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class uo{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return uo.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Yd(t),Zd(n,t);let o=t.length;e.forEach(Yd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Zd(n,e[l]);const a=kM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Yd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class au extends Ne{constructor(t=new Ip([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:nS;let x,M=!1,C,T,E,A;m&&(x=m.getSpacedPoints(h),M=!0,d=!1,C=m.computeFrenetFrames(h,!1),T=new D,E=new D,A=new D),d||(p=0,f=0,_=0,g=0);const L=a.extractPoints(c);let v=L.shape;const S=L.holes;if(!uo.isClockWise(v)){v=v.reverse();for(let K=0,P=S.length;K<P;K++){const ot=S[K];uo.isClockWise(ot)&&(S[K]=ot.reverse())}}const F=uo.triangulateShape(v,S),B=v;for(let K=0,P=S.length;K<P;K++){const ot=S[K];v=v.concat(ot)}function W(K,P,ot){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(P,ot)}const z=v.length,$=F.length;function V(K,P,ot){let rt,et,at;const Rt=K.x-P.x,_t=K.y-P.y,R=ot.x-K.x,b=ot.y-K.y,k=Rt*Rt+_t*_t,Y=Rt*b-_t*R;if(Math.abs(Y)>Number.EPSILON){const J=Math.sqrt(k),Z=Math.sqrt(R*R+b*b),wt=P.x-_t/J,lt=P.y+Rt/J,xt=ot.x-b/Z,Jt=ot.y+R/Z,it=((xt-wt)*b-(Jt-lt)*R)/(Rt*b-_t*R);rt=wt+Rt*it-K.x,et=lt+_t*it-K.y;const yt=rt*rt+et*et;if(yt<=2)return new nt(rt,et);at=Math.sqrt(yt/2)}else{let J=!1;Rt>Number.EPSILON?R>Number.EPSILON&&(J=!0):Rt<-Number.EPSILON?R<-Number.EPSILON&&(J=!0):Math.sign(_t)===Math.sign(b)&&(J=!0),J?(rt=-_t,et=Rt,at=Math.sqrt(k)):(rt=Rt,et=_t,at=Math.sqrt(k/2))}return new nt(rt/at,et/at)}const ht=[];for(let K=0,P=B.length,ot=P-1,rt=K+1;K<P;K++,ot++,rt++)ot===P&&(ot=0),rt===P&&(rt=0),ht[K]=V(B[K],B[ot],B[rt]);const ut=[];let ft,Ft=ht.concat();for(let K=0,P=S.length;K<P;K++){const ot=S[K];ft=[];for(let rt=0,et=ot.length,at=et-1,Rt=rt+1;rt<et;rt++,at++,Rt++)at===et&&(at=0),Rt===et&&(Rt=0),ft[rt]=V(ot[rt],ot[at],ot[Rt]);ut.push(ft),Ft=Ft.concat(ft)}for(let K=0;K<p;K++){const P=K/p,ot=f*Math.cos(P*Math.PI/2),rt=_*Math.sin(P*Math.PI/2)+g;for(let et=0,at=B.length;et<at;et++){const Rt=W(B[et],ht[et],rt);dt(Rt.x,Rt.y,-ot)}for(let et=0,at=S.length;et<at;et++){const Rt=S[et];ft=ut[et];for(let _t=0,R=Rt.length;_t<R;_t++){const b=W(Rt[_t],ft[_t],rt);dt(b.x,b.y,-ot)}}}const $t=_+g;for(let K=0;K<z;K++){const P=d?W(v[K],Ft[K],$t):v[K];M?(E.copy(C.normals[0]).multiplyScalar(P.x),T.copy(C.binormals[0]).multiplyScalar(P.y),A.copy(x[0]).add(E).add(T),dt(A.x,A.y,A.z)):dt(P.x,P.y,0)}for(let K=1;K<=h;K++)for(let P=0;P<z;P++){const ot=d?W(v[P],Ft[P],$t):v[P];M?(E.copy(C.normals[K]).multiplyScalar(ot.x),T.copy(C.binormals[K]).multiplyScalar(ot.y),A.copy(x[K]).add(E).add(T),dt(A.x,A.y,A.z)):dt(ot.x,ot.y,u/h*K)}for(let K=p-1;K>=0;K--){const P=K/p,ot=f*Math.cos(P*Math.PI/2),rt=_*Math.sin(P*Math.PI/2)+g;for(let et=0,at=B.length;et<at;et++){const Rt=W(B[et],ht[et],rt);dt(Rt.x,Rt.y,u+ot)}for(let et=0,at=S.length;et<at;et++){const Rt=S[et];ft=ut[et];for(let _t=0,R=Rt.length;_t<R;_t++){const b=W(Rt[_t],ft[_t],rt);M?dt(b.x,b.y+x[h-1].y,x[h-1].x+ot):dt(b.x,b.y,u+ot)}}}X(),tt();function X(){const K=s.length/3;if(d){let P=0,ot=z*P;for(let rt=0;rt<$;rt++){const et=F[rt];Dt(et[2]+ot,et[1]+ot,et[0]+ot)}P=h+p*2,ot=z*P;for(let rt=0;rt<$;rt++){const et=F[rt];Dt(et[0]+ot,et[1]+ot,et[2]+ot)}}else{for(let P=0;P<$;P++){const ot=F[P];Dt(ot[2],ot[1],ot[0])}for(let P=0;P<$;P++){const ot=F[P];Dt(ot[0]+z*h,ot[1]+z*h,ot[2]+z*h)}}n.addGroup(K,s.length/3-K,0)}function tt(){const K=s.length/3;let P=0;St(B,P),P+=B.length;for(let ot=0,rt=S.length;ot<rt;ot++){const et=S[ot];St(et,P),P+=et.length}n.addGroup(K,s.length/3-K,1)}function St(K,P){let ot=K.length;for(;--ot>=0;){const rt=ot;let et=ot-1;et<0&&(et=K.length-1);for(let at=0,Rt=h+p*2;at<Rt;at++){const _t=z*at,R=z*(at+1),b=P+rt+_t,k=P+et+_t,Y=P+et+R,J=P+rt+R;Lt(b,k,Y,J)}}}function dt(K,P,ot){l.push(K),l.push(P),l.push(ot)}function Dt(K,P,ot){kt(K),kt(P),kt(ot);const rt=s.length/3,et=y.generateTopUV(n,s,rt-3,rt-2,rt-1);Xt(et[0]),Xt(et[1]),Xt(et[2])}function Lt(K,P,ot,rt){kt(K),kt(P),kt(rt),kt(P),kt(ot),kt(rt);const et=s.length/3,at=y.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Xt(at[0]),Xt(at[1]),Xt(at[3]),Xt(at[1]),Xt(at[2]),Xt(at[3])}function kt(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Xt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return iS(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ka[s.type]().fromJSON(s)),new au(n,t.options)}}const nS={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],_=t[s*3+2],g=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(d,1-_),new nt(g,1-m)]:[new nt(a,1-l),new nt(h,1-u),new nt(f,1-_),new nt(p,1-m)]}};function iS(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Er extends ou{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Er(t.radius,t.detail)}}class Ho extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(T+M,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=h[m][y+1],M=h[m][y],C=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&f.push(x,M,T),(m!==n-1||l<Math.PI)&&f.push(M,C,T)}this.setIndex(f),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(g,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lu extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){const g=_/s*r,p=f/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(g),u.y=(t+e*Math.cos(p))*Math.sin(g),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){const g=(s+1)*f+_-1,p=(s+1)*(f-1)+_-1,m=(s+1)*(f-1)+_,y=(s+1)*f+_;o.push(g,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cu extends Ne{constructor(t=new Lp(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new nt;let h=new D;const u=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function g(){for(let x=0;x<e;x++)p(x);p(r===!1?e:0),y(),m()}function p(x){h=t.getPointAt(x/e,h);const M=o.normals[x],C=o.binormals[x];for(let T=0;T<=s;T++){const E=T/s*Math.PI*2,A=Math.sin(E),L=-Math.cos(E);l.x=L*M.x+A*C.x,l.y=L*M.y+A*C.y,l.z=L*M.z+A*C.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let M=1;M<=s;M++){const C=(s+1)*(x-1)+(M-1),T=(s+1)*x+(M-1),E=(s+1)*x+M,A=(s+1)*(x-1)+M;_.push(C,T,A),_.push(T,E,A)}}function y(){for(let x=0;x<=e;x++)for(let M=0;M<=s;M++)c.x=x/e,c.y=M/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new cu(new Ka[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Fp extends is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lp,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zp extends pl{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const jd={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sS{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const rS=new sS;class hu{constructor(t){this.manager=t!==void 0?t:rS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}hu.DEFAULT_MATERIAL_NAME="__DEFAULT";class oS extends hu{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=jd.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=So("img");function l(){h(),jd.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class aS extends hu{constructor(t){super(t)}load(t,e,n,s){const r=new qe,o=new oS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class _l extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lS extends _l{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oc=new ee,Kd=new D,Jd=new D;class kp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kd),Jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jd),e.updateMatrixWorld(),oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Qd=new ee,Jr=new D,ac=new D;class cS extends kp{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Jr),ac.copy(n.position),ac.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ac),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}}class hS extends _l{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class uS extends kp{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dS extends _l{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new uS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fS extends _l{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class pS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function tf(){return performance.now()}const ef=new ee;class mS{constructor(t,e,n=0,s=1/0){this.ray=new Bo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ef.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(t,e=!0,n=[]){return xh(t,this,n,e),n.sort(nf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xh(t[s],this,n,e);return n.sort(nf),n}}function nf(i,t){return i.distance-t.distance}function xh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)xh(r[o],t,e,!0)}}class sf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(He(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _S extends zs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);const rf={type:"change"},uu={type:"start"},Bp={type:"end"},wa=new Bo,of=new Ii,gS=Math.cos(70*Fa.DEG2RAD),Oe=new D,on=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lc=1e-6;class vS extends _S{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Is,this._lastTargetPosition=new D,this._quat=new Is().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sf,this._sphericalDelta=new sf,this._scale=1,this._panOffset=new D,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new D,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yS.bind(this),this._onPointerDown=xS.bind(this),this._onPointerUp=MS.bind(this),this._onContextMenu=CS.bind(this),this._onMouseWheel=ES.bind(this),this._onKeyDown=wS.bind(this),this._onTouchStart=TS.bind(this),this._onTouchMove=AS.bind(this),this._onMouseDown=SS.bind(this),this._onMouseMove=bS.bind(this),this._interceptControlDown=RS.bind(this),this._interceptControlUp=PS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rf),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Oe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wa.origin.copy(this.object.position),wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wa.direction))<gS?this.object.lookAt(this.target):(of.setFromNormalAndCoplanarPoint(this.object.up,this.target),wa.intersectPlane(of,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lc||this._lastTargetPosition.distanceToSquared(this.target)>lc?(this.dispatchEvent(rf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Oe.copy(s).sub(this.target);let r=Oe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function xS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function yS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function MS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bp),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function SS(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case xr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case xr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(uu)}function bS(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ES(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Bp))}function wS(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function TS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(uu)}function AS(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function CS(i){this.enabled!==!1&&i.preventDefault()}function RS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class LS extends Ce{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new nt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const or=new D,af=new ee,lf=new ee,cf=new D,hf=new D;class DS{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(_,g){_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),af.copy(g.matrixWorldInverse),lf.multiplyMatrices(g.projectionMatrix,af),h(_,_,g),f(_)},this.setSize=function(_,g){n=_,s=g,r=n/2,o=s/2,l.style.width=_+"px",l.style.height=g+"px"};function c(_){_.isCSS2DObject&&(_.element.style.display="none");for(let g=0,p=_.children.length;g<p;g++)c(_.children[g])}function h(_,g,p){if(_.visible===!1){c(_);return}if(_.isCSS2DObject){or.setFromMatrixPosition(_.matrixWorld),or.applyMatrix4(lf);const m=or.z>=-1&&or.z<=1&&_.layers.test(p.layers)===!0,y=_.element;y.style.display=m===!0?"":"none",m===!0&&(_.onBeforeRender(e,g,p),y.style.transform="translate("+-100*_.center.x+"%,"+-100*_.center.y+"%)translate("+(or.x*r+r)+"px,"+(-or.y*o+o)+"px)",y.parentNode!==l&&l.appendChild(y),_.onAfterRender(e,g,p));const x={distanceToCameraSquared:u(p,_)};a.objects.set(_,x)}for(let m=0,y=_.children.length;m<y;m++)h(_.children[m],g,p)}function u(_,g){return cf.setFromMatrixPosition(_.matrixWorld),hf.setFromMatrixPosition(g.matrixWorld),cf.distanceToSquared(hf)}function d(_){const g=[];return _.traverseVisible(function(p){p.isCSS2DObject&&g.push(p)}),g}function f(_){const g=d(_).sort(function(m,y){if(m.renderOrder!==y.renderOrder)return y.renderOrder-m.renderOrder;const x=a.objects.get(m).distanceToCameraSquared,M=a.objects.get(y).distanceToCameraSquared;return x-M}),p=g.length;for(let m=0,y=g.length;m<y;m++)g[m].element.style.zIndex=p-m}}}function vi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Hp(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Or={duration:.5,overwrite:!1,delay:0},du,je,xe,Un=1e8,fe=1/Un,yh=Math.PI*2,IS=yh/4,US=0,Gp=Math.sqrt,NS=Math.cos,OS=Math.sin,Ve=function(t){return typeof t=="string"},Ee=function(t){return typeof t=="function"},Si=function(t){return typeof t=="number"},fu=function(t){return typeof t>"u"},ai=function(t){return typeof t=="object"},dn=function(t){return t!==!1},pu=function(){return typeof window<"u"},Ta=function(t){return Ee(t)||Ve(t)},Vp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ke=Array.isArray,Mh=/(?:-?\.?\d|\.)+/gi,Wp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,dr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qp=/[+-]=-?[.\d]+/,Xp=/[^,'"\[\]\s]+/gi,FS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ye,Jn,Sh,mu,An={},Ja={},$p,Yp=function(t){return(Ja=Ns(t,An))&&_n},_u=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ao=function(t,e){return!e&&console.warn(t)},Zp=function(t,e){return t&&(An[t]=e)&&Ja&&(Ja[t]=e)||An},Co=function(){return 0},zS={suppressEvents:!0,isStart:!0,kill:!1},Ba={suppressEvents:!0,kill:!1},kS={suppressEvents:!0},gu={},qi=[],bh={},jp,Sn={},hc={},uf=30,Ha=[],vu="",xu=function(t){var e=t[0],n,s;if(ai(e)||Ee(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(s=Ha.length;s--&&!Ha[s].targetTest(e););n=Ha[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new ym(t[s],n)))||t.splice(s,1);return t},Ts=function(t){return t._gsap||xu(Nn(t))[0]._gsap},Kp=function(t,e,n){return(n=t[e])&&Ee(n)?t[e]():fu(n)&&t.getAttribute&&t.getAttribute(e)||n},fn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ae=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},wr=function(t,e){var n=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+s:n==="-"?t-s:n==="*"?t*s:t/s},BS=function(t,e){for(var n=e.length,s=0;t.indexOf(e[s])<0&&++s<n;);return s<n},Qa=function(){var t=qi.length,e=qi.slice(0),n,s;for(bh={},qi.length=0,n=0;n<t;n++)s=e[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Jp=function(t,e,n,s){qi.length&&!je&&Qa(),t.render(e,n,je&&e<0&&(t._initted||t._startAt)),qi.length&&!je&&Qa()},Qp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Xp).length<2?e:Ve(t)?t.trim():t},tm=function(t){return t},Fn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},HS=function(t){return function(e,n){for(var s in n)s in e||s==="duration"&&t||s==="ease"||(e[s]=n[s])}},Ns=function(t,e){for(var n in e)t[n]=e[n];return t},df=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ai(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},tl=function(t,e){var n={},s;for(s in t)s in e||(n[s]=t[s]);return n},fo=function(t){var e=t.parent||ye,n=t.keyframes?HS(Ke(t.keyframes)):Fn;if(dn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},GS=function(t,e){for(var n=t.length,s=n===e.length;s&&n--&&t[n]===e[n];);return n<0},em=function(t,e,n,s,r){var o=t[s],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[s]=e,e._prev=o,e.parent=e._dp=t,e},gl=function(t,e,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},Ji=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},As=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},VS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Eh=function(t,e,n,s){return t._startAt&&(je?t._startAt.revert(Ba):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},WS=function i(t){return!t||t._ts&&i(t.parent)},ff=function(t){return t._repeat?Fr(t._tTime,t=t.duration()+t._rDelay)*t:0},Fr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},el=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},vl=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||fe)||0))},xl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),vl(t),n._dirty||As(n,t)),t},nm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=el(t.rawTime(),e),(!e._dur||Go(0,e.totalDuration(),n)-e._tTime>fe)&&e.render(n,!0)),As(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-fe}},ni=function(t,e,n,s){return e.parent&&Ji(e),e._start=Ge((Si(n)?n:n||t!==ye?Ln(t,n,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),em(t,e,"_first","_last",t._sort?"_start":0),wh(e)||(t._recent=e),s||nm(t,e),t._ts<0&&xl(t,t._tTime),t},im=function(t,e){return(An.ScrollTrigger||_u("scrollTrigger",e))&&An.ScrollTrigger.create(e,t)},sm=function(t,e,n,s,r){if(Mu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&jp!==En.frame)return qi.push(t),t._lazy=[r,s],1},qS=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},wh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},XS=function(t,e,n,s){var r=t.ratio,o=e<0||!e&&(!t._start&&qS(t)&&!(!t._initted&&wh(t))||(t._ts<0||t._dp._ts<0)&&!wh(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Go(0,t._tDur,e),h=Fr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Fr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||je||s||t._zTime===fe||!e&&t._zTime){if(!t._initted&&sm(t,e,s,n,l))return;for(u=t._zTime,t._zTime=e||(n?fe:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Eh(t,e,n,!0),t._onUpdate&&!n&&wn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ji(t,1),!n&&!je&&(wn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},$S=function(t,e,n){var s;if(n>e)for(s=t._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},zr=function(t,e,n,s){var r=t._repeat,o=Ge(e)||0,a=t._tTime/t._tDur;return a&&!s&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ge(o*(r+1)+t._rDelay*r):o,a>0&&!s&&xl(t,t._tTime=t._tDur*a),t.parent&&vl(t),n||As(t.parent,t),t},pf=function(t){return t instanceof en?As(t):zr(t,t._dur)},YS={_start:0,endTime:Co,totalDuration:Co},Ln=function i(t,e,n){var s=t.labels,r=t._recent||YS,o=t.duration()>=Un?r.endTime(!1):t._dur,a,l,c;return Ve(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in s||(s[e]=o),s[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ke(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},po=function(t,e,n){var s=Si(e[1]),r=(s?2:1)+(t<2?0:1),o=e[r],a,l;if(s&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=dn(l.vars.inherit)&&l.parent;o.immediateRender=dn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new De(e[0],o,e[r+1])},ss=function(t,e){return t||t===0?e(t):e},Go=function(t,e,n){return n<t?t:n>e?e:n},Ze=function(t,e){return!Ve(t)||!(e=FS.exec(t))?"":e[1]},ZS=function(t,e,n){return ss(n,function(s){return Go(t,e,s)})},Th=[].slice,rm=function(t,e){return t&&ai(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ai(t[0]))&&!t.nodeType&&t!==Jn},jS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(s){var r;return Ve(s)&&!e||rm(s,1)?(r=n).push.apply(r,Nn(s)):n.push(s)})||n},Nn=function(t,e,n){return xe&&!e&&xe.selector?xe.selector(t):Ve(t)&&!n&&(Sh||!kr())?Th.call((e||mu).querySelectorAll(t),0):Ke(t)?jS(t,n):rm(t)?Th.call(t,0):t?[t]:[]},Ah=function(t){return t=Nn(t)[0]||Ao("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Nn(e,n.querySelectorAll?n:n===t?Ao("Invalid scope")||mu.createElement("div"):t)}},om=function(t){return t.sort(function(){return .5-Math.random()})},am=function(t){if(Ee(t))return t;var e=ai(t)?t:{each:t},n=Cs(e.ease),s=e.from||0,r=parseFloat(e.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=e.axis,h=s,u=s;return Ve(s)?h=u={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(h=s[0],u=s[1]),function(d,f,_){var g=(_||e).length,p=o[g],m,y,x,M,C,T,E,A,L;if(!p){if(L=e.grid==="auto"?0:(e.grid||[1,Un])[1],!L){for(E=-Un;E<(E=_[L++].getBoundingClientRect().left)&&L<g;);L<g&&L--}for(p=o[g]=[],m=l?Math.min(L,g)*h-.5:s%L,y=L===Un?0:l?g*u/L-.5:s/L|0,E=0,A=Un,T=0;T<g;T++)x=T%L-m,M=y-(T/L|0),p[T]=C=c?Math.abs(c==="y"?M:x):Gp(x*x+M*M),C>E&&(E=C),C<A&&(A=C);s==="random"&&om(p),p.max=E-A,p.min=A,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(L>g?g-1:c?c==="y"?g/L:L:Math.max(L,g/L))||0)*(s==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Ze(e.amount||e.each)||0,n=n&&g<0?gm(n):n}return g=(p[d]-p.min)/p.max||0,Ge(p.b+(n?n(g):g)*p.v)+p.u}},Ch=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var s=Ge(Math.round(parseFloat(n)/t)*t*e);return(s-s%1)/e+(Si(n)?0:Ze(n))}},lm=function(t,e){var n=Ke(t),s,r;return!n&&ai(t)&&(s=n=t.radius||Un,t.values?(t=Nn(t.values),(r=!Si(t[0]))&&(s*=s)):t=Ch(t.increment)),ss(e,n?Ee(t)?function(o){return r=t(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Un,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!s||c<=s?t[h]:o,r||h===o||Si(o)?h:h+Ze(o)}:Ch(t))},cm=function(t,e,n,s){return ss(Ke(t)?!e:n===!0?!!(n=0):!s,function(){return Ke(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*s)/s})},KS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(s){return e.reduce(function(r,o){return o(r)},s)}},JS=function(t,e){return function(n){return t(parseFloat(n))+(e||Ze(n))}},QS=function(t,e,n){return um(t,e,0,1,n)},hm=function(t,e,n){return ss(n,function(s){return t[~~e(s)]})},t1=function i(t,e,n){var s=e-t;return Ke(t)?hm(t,i(0,t.length),e):ss(n,function(r){return(s+(r-t)%s)%s+t})},e1=function i(t,e,n){var s=e-t,r=s*2;return Ke(t)?hm(t,i(0,t.length-1),e):ss(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>s?r-o:o)})},Ro=function(t){for(var e=0,n="",s,r,o,a;~(s=t.indexOf("random(",e));)o=t.indexOf(")",s),a=t.charAt(s+7)==="[",r=t.substr(s+7,o-s-7).match(a?Xp:Mh),n+=t.substr(e,s-e)+cm(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},um=function(t,e,n,s,r){var o=e-t,a=s-n;return ss(r,function(l){return n+((l-t)/o*a||0)})},n1=function i(t,e,n,s){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Ve(t),a={},l,c,h,u,d;if(n===!0&&(s=1)&&(n=null),o)t={p:t},e={p:e};else if(Ke(t)&&!Ke(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(i(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else s||(t=Ns(Ke(t)?[]:{},t));if(!h){for(l in e)yu.call(a,t,l,"get",e[l]);r=function(_){return Eu(_,a)||(o?t.p:t)}}}return ss(n,r)},mf=function(t,e,n){var s=t.labels,r=Un,o,a,l;for(o in s)a=s[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},wn=function(t,e,n){var s=t.vars,r=s[e],o=xe,a=t._ctx,l,c,h;if(r)return l=s[e+"Params"],c=s.callbackScope||t,n&&qi.length&&Qa(),a&&(xe=a),h=l?r.apply(c,l):r.call(c),xe=o,h},so=function(t){return Ji(t),t.scrollTrigger&&t.scrollTrigger.kill(!!je),t.progress()<1&&wn(t,"onInterrupt"),t},fr,dm=[],fm=function(t){if(t)if(t=!t.name&&t.default||t,pu()||t.headless){var e=t.name,n=Ee(t),s=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Co,render:Eu,add:yu,kill:v1,modifier:g1,rawVars:0},o={targetTest:0,get:0,getSetter:bu,aliases:{},register:0};if(kr(),t!==s){if(Sn[e])return;Fn(s,Fn(tl(t,r),o)),Ns(s.prototype,Ns(r,tl(t,o))),Sn[s.prop=e]=s,t.targetTest&&(Ha.push(s),gu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zp(e,s),t.register&&t.register(_n,s,pn)}else dm.push(t)},ue=255,ro={aqua:[0,ue,ue],lime:[0,ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ue],navy:[0,0,128],white:[ue,ue,ue],olive:[128,128,0],yellow:[ue,ue,0],orange:[ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ue,0,0],pink:[ue,192,203],cyan:[0,ue,ue],transparent:[ue,ue,ue,0]},uc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ue+.5|0},pm=function(t,e,n){var s=t?Si(t)?[t>>16,t>>8&ue,t&ue]:0:ro.black,r,o,a,l,c,h,u,d,f,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ro[t])s=ro[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ue,s&ue,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ue,t&ue]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(Mh),!e)l=+s[0]%360/360,c=+s[1]/100,h=+s[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,s.length>3&&(s[3]*=1),s[0]=uc(l+1/3,r,o),s[1]=uc(l,r,o),s[2]=uc(l-1/3,r,o);else if(~t.indexOf("="))return s=t.match(Wp),n&&s.length<4&&(s[3]=1),s}else s=t.match(Mh)||ro.transparent;s=s.map(Number)}return e&&!_&&(r=s[0]/ue,o=s[1]/ue,a=s[2]/ue,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(h*100+.5)),n&&s.length<4&&(s[3]=1),s},mm=function(t){var e=[],n=[],s=-1;return t.split(Xi).forEach(function(r){var o=r.match(dr)||[];e.push.apply(e,o),n.push(s+=o.length+1)}),e.c=n,e},_f=function(t,e,n){var s="",r=(t+s).match(Xi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=pm(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=mm(t),l=n.c,l.join(s)!==h.c.join(s)))for(c=t.replace(Xi,"1").split(dr),u=c.length-1;a<u;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Xi),u=c.length-1;a<u;a++)s+=c[a]+r[a];return s+c[u]},Xi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ro)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),i1=/hsl[a]?\(/,_m=function(t){var e=t.join(" "),n;if(Xi.lastIndex=0,Xi.test(e))return n=i1.test(e),t[1]=_f(t[1],n),t[0]=_f(t[0],n,mm(t[1])),!0},Po,En=function(){var i=Date.now,t=500,e=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,_=function g(p){var m=i()-s,y=p===!0,x,M,C,T;if((m>t||m<0)&&(n+=m-e),s+=m,C=s-n,x=C-o,(x>0||y)&&(T=++u.frame,d=C-u.time*1e3,u.time=C=C/1e3,o+=x+(x>=r?4:r-x),M=1),y||(l=c(g)),M)for(f=0;f<a.length;f++)a[f](C,d,T,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){$p&&(!Sh&&pu()&&(Jn=Sh=window,mu=Jn.document||{},An.gsap=_n,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(_n.version),Yp(Ja||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),dm.forEach(fm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(p){return setTimeout(p,o-u.time*1e3+1|0)},Po=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Po=0,c=Co},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){r=1e3/(p||240),o=u.time*1e3+r},add:function(p,m,y){var x=m?function(M,C,T,E){p(M,C,T,E),u.remove(x)}:p;return u.remove(p),a[y?"unshift":"push"](x),kr(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},u}(),kr=function(){return!Po&&En.wake()},Kt={},s1=/^[\d.\-M][\d.\-,\s]/,r1=/["']/g,o1=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[s]=isNaN(c)?c.replace(r1,"").trim():+c,s=l.substr(a+1).trim();return e},a1=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<n?t.indexOf(")",n+1):n)},l1=function(t){var e=(t+"").split("("),n=Kt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[o1(e[1])]:a1(t).split(",").map(Qp)):Kt._CE&&s1.test(t)?Kt._CE("",t):n},gm=function(t){return function(e){return 1-t(1-e)}},vm=function i(t,e){for(var n=t._first,s;n;)n instanceof en?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=e)),n=n._next},Cs=function(t,e){return t&&(Ee(t)?t:Kt[t]||l1(t))||e},Gs=function(t,e,n,s){n===void 0&&(n=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:s},o;return fn(t,function(a){Kt[a]=An[a]=r,Kt[o=a.toLowerCase()]=n;for(var l in r)Kt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Kt[a+"."+l]=r[l]}),r},xm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},dc=function i(t,e,n){var s=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/yh*(Math.asin(1/s)||0),a=function(h){return h===1?1:s*Math.pow(2,-10*h)*OS((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:xm(a);return r=yh/r,l.config=function(c,h){return i(t,c,h)},l},fc=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},s=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:xm(n);return s.config=function(r){return i(t,r)},s};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Gs(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Kt.Linear.easeNone=Kt.none=Kt.Linear.easeIn;Gs("Elastic",dc("in"),dc("out"),dc());(function(i,t){var e=1/t,n=2*e,s=2.5*e,r=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<s?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Gs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Gs("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Gs("Circ",function(i){return-(Gp(1-i*i)-1)});Gs("Sine",function(i){return i===1?1:-NS(i*IS)+1});Gs("Back",fc("in"),fc("out"),fc());Kt.SteppedEase=Kt.steps=An.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,s=t+(e?0:1),r=e?1:0,o=1-fe;return function(a){return((s*Go(0,o,a)|0)+r)*n}}};Or.ease=Kt["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return vu+=i+","+i+"Params,"});var ym=function(t,e){this.id=US++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Kp,this.set=e?e.getSetter:bu},Lo=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,zr(this,+e.duration,1,1),this.data=e.data,xe&&(this._ctx=xe,xe.data.push(this)),Po||En.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,s){if(kr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(xl(this,n),!r._dp||r.parent||nm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===fe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jp(this,n,s)),this},t.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ff(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},t.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ff(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?Fr(this._tTime,r)+1:1},t.timeScale=function(n,s){if(!arguments.length)return this._rts===-fe?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?el(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-fe?0:this._rts,this.totalTime(Go(-Math.abs(this._delay),this._tDur,r),s!==!1),vl(this),VS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(kr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==fe&&(this._tTime-=fe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ni(s,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?el(s.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=kS);var s=je;return je=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),je=s,this},t.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,pf(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,s){return this.totalTime(Ln(this,n),dn(s))},t.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,dn(s))},t.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},t.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-fe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-fe,this},t.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-fe)},t.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},t.then=function(n){var s=this;return new Promise(function(r){var o=Ee(n)?n:tm,a=function(){var c=s.then;s.then=null,Ee(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=c),r(o),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},t.kill=function(){so(this)},i}();Fn(Lo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-fe,_prom:0,_ps:!1,_rts:1});var en=function(i){Hp(t,i);function t(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=dn(n.sortChildren),ye&&ni(n.parent||ye,vi(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&im(vi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,o){return po(0,arguments,this),this},e.from=function(s,r,o){return po(1,arguments,this),this},e.fromTo=function(s,r,o,a){return po(2,arguments,this),this},e.set=function(s,r,o){return r.duration=0,r.parent=this,fo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new De(s,r,Ln(this,o),1),this},e.call=function(s,r,o){return ni(this,De.delayedCall(0,s,r),o)},e.staggerTo=function(s,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new De(s,o,Ln(this,l)),this},e.staggerFrom=function(s,r,o,a,l,c,h){return o.runBackwards=1,fo(o).immediateRender=dn(o.immediateRender),this.staggerTo(s,r,o,a,l,c,h)},e.staggerFromTo=function(s,r,o,a,l,c,h,u){return a.startAt=o,fo(a).immediateRender=dn(a.immediateRender),this.staggerTo(s,r,a,l,c,h,u)},e.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=s<=0?0:Ge(s),u=this._zTime<0!=s<0&&(this._initted||!c),d,f,_,g,p,m,y,x,M,C,T,E;if(this!==ye&&h>l&&s>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,s+=this._time-a),d=h,M=this._start,x=this._ts,m=!x,u&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(p*100+s,r,o);if(d=Ge(h%p),h===l?(g=this._repeat,d=c):(g=~~(h/p),g&&g===h/p&&(d=c,g--),d>c&&(d=c)),C=Fr(this._tTime,p),!a&&this._tTime&&C!==g&&this._tTime-C*p-this._dur<=0&&(C=g),T&&g&1&&(d=c-d,E=1),g!==C&&!this._lock){var A=T&&C&1,L=A===(T&&g&1);if(g<C&&(A=!A),a=A?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Ge(g*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;vm(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=$S(this,Ge(a),Ge(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&d&&!r&&!g&&(wn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&s>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(s,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=-fe);break}}f=_}else{f=this._last;for(var v=s<0?s:d;f;){if(_=f._prev,(f._act||v<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(s,r,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,r,o||je&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=v?-fe:fe);break}}f=_}}if(y&&!r&&(this.pause(),y.render(d>=a?0:-fe)._zTime=d>=a?1:-1,this._ts))return this._start=M,vl(this),this.render(s,r,o);this._onUpdate&&!r&&wn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ji(this,1),!r&&!(s<0&&!a)&&(h||a||!l)&&(wn(this,h===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var o=this;if(Si(r)||(r=Ln(this,r,s)),!(s instanceof Lo)){if(Ke(s))return s.forEach(function(a){return o.add(a,r)}),this;if(Ve(s))return this.addLabel(s,r);if(Ee(s))s=De.delayedCall(0,s);else return this}return this!==s?ni(this,s,r):this},e.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Un);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof De?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},e.remove=function(s){return Ve(s)?this.removeLabel(s):Ee(s)?this.killTweensOf(s):(gl(this,s),s===this._recent&&(this._recent=this._last),As(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(En.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=Ln(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,o){var a=De.delayedCall(0,r||Co,o);return a.data="isPause",this._hasPause=1,ni(this,a,Ln(this,s))},e.removePause=function(s){var r=this._first;for(s=Ln(this,s);r;)r._start===s&&r.data==="isPause"&&Ji(r),r=r._next},e.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)ki!==a[l]&&a[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var o=[],a=Nn(s),l=this._first,c=Si(r),h;l;)l instanceof De?BS(l._targets,a)&&(c?(!ki||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(s,r){r=r||{};var o=this,a=Ln(o,s),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=De.to(o,Fn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||fe,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&zr(_,p,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(s,r,o){return this.tweenTo(r,Fn({startAt:{time:Ln(this,s)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),mf(this,Ln(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),mf(this,Ln(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+fe)},e.shiftChildren=function(s,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return As(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),As(this)},e.totalDuration=function(s){var r=0,o=this,a=o._last,l=Un,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ni(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;zr(o,o===ye&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(s){if(ye._ts&&(Jp(ye,el(s,ye)),jp=En.frame),En.frame>=uf){uf+=Tn.autoSleep||120;var r=ye._first;if((!r||!r._ts)&&Tn.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},t}(Lo);Fn(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var c1=function(t,e,n,s,r,o,a){var l=new pn(this._pt,t,e,0,1,Tm,null,r),c=0,h=0,u,d,f,_,g,p,m,y;for(l.b=n,l.e=s,n+="",s+="",(m=~s.indexOf("random("))&&(s=Ro(s)),o&&(y=[n,s],o(y,t,e),n=y[0],s=y[1]),d=n.match(cc)||[];u=cc.exec(s);)_=u[0],g=s.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(p=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?wr(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=cc.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(qp.test(s)||m)&&(l.e=0),this._pt=l,l},yu=function(t,e,n,s,r,o,a,l,c,h){Ee(s)&&(s=s(r||0,t,o));var u=t[e],d=n!=="get"?n:Ee(u)?c?t[e.indexOf("set")||!Ee(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ee(u)?c?p1:Em:Su,_;if(Ve(s)&&(~s.indexOf("random(")&&(s=Ro(s)),s.charAt(1)==="="&&(_=wr(d,s)+(Ze(d)||0),(_||_===0)&&(s=_))),!h||d!==s||Rh)return!isNaN(d*s)&&s!==""?(_=new pn(this._pt,t,e,+d||0,s-(d||0),typeof u=="boolean"?_1:wm,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&_u(e,s),c1.call(this,t,e,d,s,f,l||Tn.stringFilter,c))},h1=function(t,e,n,s,r){if(Ee(t)&&(t=mo(t,r,e,n,s)),!ai(t)||t.style&&t.nodeType||Ke(t)||Vp(t))return Ve(t)?mo(t,r,e,n,s):t;var o={},a;for(a in t)o[a]=mo(t[a],r,e,n,s);return o},Mm=function(t,e,n,s,r,o){var a,l,c,h;if(Sn[t]&&(a=new Sn[t]).init(r,a.rawVars?e[t]:h1(e[t],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new pn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==fr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ki,Rh,Mu=function i(t,e,n){var s=t.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,h=s.runBackwards,u=s.yoyoEase,d=s.keyframes,f=s.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!du,M=t.timeline,C,T,E,A,L,v,S,N,F,B,W,z,$;if(M&&(!d||!r)&&(r="none"),t._ease=Cs(r,Or.ease),t._yEase=u?gm(Cs(u===!0?r:u,Or.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!M&&!!s.runBackwards,!M||d&&!s.stagger){if(N=p[0]?Ts(p[0]).harness:0,z=N&&s[N.prop],C=tl(s,gu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Ba:zS),g._lazy=0),o){if(Ji(t._startAt=De.set(p,Fn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&dn(l),startAt:null,delay:0,onUpdate:c&&function(){return wn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je||!a&&!f)&&t._startAt.revert(Ba),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),E=Fn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&dn(l),immediateRender:a,stagger:0,parent:m},C),z&&(E[N.prop]=z),Ji(t._startAt=De.set(p,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je?t._startAt.revert(Ba):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,fe,fe);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&dn(l)||l&&!_,T=0;T<p.length;T++){if(L=p[T],S=L._gsap||xu(p)[T]._gsap,t._ptLookup[T]=B={},bh[S.id]&&qi.length&&Qa(),W=y===p?T:y.indexOf(L),N&&(F=new N).init(L,z||C,t,W,y)!==!1&&(t._pt=A=new pn(t._pt,L,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(V){B[V]=A}),F.priority&&(v=1)),!N||z)for(E in C)Sn[E]&&(F=Mm(E,C,t,W,L,y))?F.priority&&(v=1):B[E]=A=yu.call(t,L,E,"get",C[E],W,y,0,s.stringFilter);t._op&&t._op[T]&&t.kill(L,t._op[T]),x&&t._pt&&(ki=t,ye.killTweensOf(L,B,t.globalTime(e)),$=!t.parent,ki=0),t._pt&&l&&(bh[S.id]=1)}v&&Am(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,d&&e<=0&&M.render(Un,!0,!0)},u1=function(t,e,n,s,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Rh=1,t.vars[e]="+=0",Mu(t,a),Rh=0,l?Ao(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(s||s===0)&&!r?s:h.s+(s||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ae(n)+Ze(u.e)),u.b&&(u.b=h.s+Ze(u.b))},d1=function(t,e){var n=t[0]?Ts(t[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return e;r=Ns({},e);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},f1=function(t,e,n,s){var r=e.ease||s||"power1.inOut",o,a;if(Ke(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},mo=function(t,e,n,s,r){return Ee(t)?t.call(e,n,s,r):Ve(t)&&~t.indexOf("random(")?Ro(t):t},Sm=vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",bm={};fn(Sm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return bm[i]=1});var De=function(i){Hp(t,i);function t(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:fo(s))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=s.parent||ye,x=(Ke(n)||Vp(n)?Si(n[0]):"length"in s)?[n]:Nn(n),M,C,T,E,A,L,v,S;if(a._targets=x.length?xu(x):Ao("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Ta(c)||Ta(h)){if(s=a.vars,M=a.timeline=new en({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),M.kill(),M.parent=M._dp=vi(a),M._start=0,d||Ta(c)||Ta(h)){if(E=x.length,v=d&&am(d),ai(d))for(A in d)~Sm.indexOf(A)&&(S||(S={}),S[A]=d[A]);for(C=0;C<E;C++)T=tl(s,bm),T.stagger=0,m&&(T.yoyoEase=m),S&&Ns(T,S),L=x[C],T.duration=+mo(c,vi(a),C,L,x),T.delay=(+mo(h,vi(a),C,L,x)||0)-a._delay,!d&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),M.to(L,T,v?v(C,L,x):0),M._ease=Kt.none;M.duration()?c=h=0:a.timeline=0}else if(_){fo(Fn(M.vars.defaults,{ease:"none"})),M._ease=Cs(_.ease||s.ease||"none");var N=0,F,B,W;if(Ke(_))_.forEach(function(z){return M.to(x,z,">")}),M.duration();else{T={};for(A in _)A==="ease"||A==="easeEach"||f1(A,_[A],T,_.easeEach);for(A in T)for(F=T[A].sort(function(z,$){return z.t-$.t}),N=0,C=0;C<F.length;C++)B=F[C],W={ease:B.e,duration:(B.t-(C?F[C-1].t:0))/100*c},W[A]=B.v,M.to(x,W,N),N+=W.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return f===!0&&!du&&(ki=vi(a),ye.killTweensOf(x),ki=0),ni(y,vi(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(u||!c&&!_&&a._start===Ge(y._time)&&dn(u)&&WS(vi(a))&&y.data!=="nested")&&(a._tTime=-fe,a.render(Math.max(0,-h)||0)),p&&im(vi(a),p),a}var e=t.prototype;return e.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,h=s<0,u=s>l-fe&&!h?l:s<fe?0:s,d,f,_,g,p,m,y,x,M;if(!c)XS(this,s,r,o);else if(u!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+s,r,o);if(d=Ge(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===Ge(u/g)&&(d=c,_--),d>c&&(d=c)),m=this._yoyo&&_&1,m&&(M=this._yEase,d=c-d),p=Fr(this._tTime,g),d===a&&!o&&this._initted&&_===p)return this._tTime=u,this;_!==p&&(x&&this._yEase&&vm(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(Ge(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(sm(this,h?s:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(d/c),this._from&&(this.ratio=y=1-y),d&&!a&&!r&&!_&&(wn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;x&&x.render(s<0?s:x._dur*x._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(h&&Eh(this,s,r,o),wn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&wn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Eh(this,s,!0,!0),(s||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ji(this,1),!r&&!(h&&!a)&&(u||a||m)&&(wn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,o,a,l){Po||En.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Mu(this,c),h=this._ease(c/this._dur),u1(this,s,r,o,a,h,c,l)?this.resetTo(s,r,o,a,1):(xl(this,0),this.parent||em(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?so(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,ki&&ki.vars.overwrite!==!0)._first||so(this),this.parent&&o!==this.timeline.totalDuration()&&zr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?Nn(s):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,p,m;if((!r||r==="all")&&GS(a,l))return r==="all"&&(this._pt=0),so(this);for(u=this._op=this._op||[],r!=="all"&&(Ve(r)&&(g={},fn(r,function(y){return g[y]=1}),r=g),r=d1(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],r==="all"?(u[m]=r,_=d,f={}):(f=u[m]=u[m]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&gl(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&so(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return po(1,arguments)},t.delayedCall=function(s,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(s,r,o){return po(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,o){return ye.killTweensOf(s,r,o)},t}(Lo);Fn(De.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(i){De[i]=function(){var t=new en,e=Th.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Su=function(t,e,n){return t[e]=n},Em=function(t,e,n){return t[e](n)},p1=function(t,e,n,s){return t[e](s.fp,n)},m1=function(t,e,n){return t.setAttribute(e,n)},bu=function(t,e){return Ee(t[e])?Em:fu(t[e])&&t.setAttribute?m1:Su},wm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_1=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Tm=function(t,e){var n=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+s,n=n._next;s+=e.c}e.set(e.t,e.p,s,e)},Eu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},g1=function(t,e,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(t,e,n),r=o},v1=function(t){for(var e=this._pt,n,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?gl(this,e,"_pt"):e.dep||(n=1),e=s;return!n},x1=function(t,e,n,s){s.mSet(t,e,s.m.call(s.tween,n,s.mt),s)},Am=function(t){for(var e=t._pt,n,s,r,o;e;){for(n=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:o)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:o=e,e=n}t._pt=r},pn=function(){function i(e,n,s,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||wm,this.d=l||this,this.set=c||Su,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=x1,this.m=n,this.mt=r,this.tween=s},i}();fn(vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return gu[i]=1});An.TweenMax=An.TweenLite=De;An.TimelineLite=An.TimelineMax=en;ye=new en({sortChildren:!1,defaults:Or,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=_m;var Rs=[],Ga={},y1=[],gf=0,M1=0,pc=function(t){return(Ga[t]||y1).map(function(e){return e()})},Ph=function(){var t=Date.now(),e=[];t-gf>2&&(pc("matchMediaInit"),Rs.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=Jn.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),pc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),gf=t,pc("matchMedia"))},Cm=function(){function i(e,n){this.selector=n&&Ah(n),this.data=[],this._r=[],this.isReverted=!1,this.id=M1++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,s,r){Ee(n)&&(r=s,s=n,n=Ee);var o=this,a=function(){var c=xe,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ah(r)),xe=o,u=s.apply(o,arguments),Ee(u)&&o._r.push(u),xe=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ee?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var s=xe;xe=null,n(this),xe=s},t.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof De&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,s){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof en?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof De)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=Rs.length;o--;)Rs[o].id===this.id&&Rs.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),S1=function(){function i(e){this.contexts=[],this.scope=e,xe&&xe.data.push(this)}var t=i.prototype;return t.add=function(n,s,r){ai(n)||(n={matches:n});var o=new Cm(0,r||this.scope),a=o.conditions={},l,c,h;xe&&!o.selector&&(o.selector=xe.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?h=1:(l=Jn.matchMedia(n[c]),l&&(Rs.indexOf(o)<0&&Rs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ph):l.addEventListener("change",Ph)));return h&&s(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i}(),nl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(s){return fm(s)})},timeline:function(t){return new en(t)},getTweensOf:function(t,e){return ye.getTweensOf(t,e)},getProperty:function(t,e,n,s){Ve(t)&&(t=Nn(t)[0]);var r=Ts(t||{}).get,o=n?tm:Qp;return n==="native"&&(n=""),t&&(e?o((Sn[e]&&Sn[e].get||r)(t,e,n,s)):function(a,l,c){return o((Sn[a]&&Sn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Nn(t),t.length>1){var s=t.map(function(h){return _n.quickSetter(h,e,n)}),r=s.length;return function(h){for(var u=r;u--;)s[u](h)}}t=t[0]||{};var o=Sn[e],a=Ts(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;fr._pt=0,u.init(t,n?h+n:h,fr,0,[t]),u.render(1,u),fr._pt&&Eu(1,fr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var s,r=_n.to(t,Ns((s={},s[e]="+=0.1",s.paused=!0,s),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return ye.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Cs(t.ease,Or.ease)),df(Or,t||{})},config:function(t){return df(Tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,s=t.plugins,r=t.defaults,o=t.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!Sn[a]&&!An[a]&&Ao(e+" effect requires "+a+" plugin.")}),hc[e]=function(a,l,c){return n(Nn(a),Fn(l||{},r),c)},o&&(en.prototype[e]=function(a,l,c){return this.add(hc[e](a,ai(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Kt[t]=Cs(e)},parseEase:function(t,e){return arguments.length?Cs(t,e):Kt},getById:function(t){return ye.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new en(t),s,r;for(n.smoothChildTiming=dn(t.smoothChildTiming),ye.remove(n),n._dp=0,n._time=n._tTime=ye._time,s=ye._first;s;)r=s._next,(e||!(!s._dur&&s instanceof De&&s.vars.onComplete===s._targets[0]))&&ni(n,s,s._start-s._delay),s=r;return ni(ye,n,0),n},context:function(t,e){return t?new Cm(t,e):xe},matchMedia:function(t){return new S1(t)},matchMediaRefresh:function(){return Rs.forEach(function(t){var e=t.conditions,n,s;for(s in e)e[s]&&(e[s]=!1,n=1);n&&t.revert()})||Ph()},addEventListener:function(t,e){var n=Ga[t]||(Ga[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ga[t],s=n&&n.indexOf(e);s>=0&&n.splice(s,1)},utils:{wrap:t1,wrapYoyo:e1,distribute:am,random:cm,snap:lm,normalize:QS,getUnit:Ze,clamp:ZS,splitColor:pm,toArray:Nn,selector:Ah,mapRange:um,pipe:KS,unitize:JS,interpolate:n1,shuffle:om},install:Yp,effects:hc,ticker:En,updateRoot:en.updateRoot,plugins:Sn,globalTimeline:ye,core:{PropTween:pn,globals:Zp,Tween:De,Timeline:en,Animation:Lo,getCache:Ts,_removeLinkedListItem:gl,reverting:function(){return je},context:function(t){return t&&xe&&(xe.data.push(t),t._ctx=xe),xe},suppressOverwrites:function(t){return du=t}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return nl[i]=De[i]});En.add(en.updateRoot);fr=nl.to({},{duration:0});var b1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},E1=function(t,e){var n=t._targets,s,r,o;for(s in e)for(r=n.length;r--;)o=t._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=b1(o,s)),o&&o.modifier&&o.modifier(e[s],t,n[r],s))},mc=function(t,e){return{name:t,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(Ve(r)&&(l={},fn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}E1(a,r)}}}},_n=nl.registerPlugin({name:"attr",init:function(t,e,n,s,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)je?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},mc("roundProps",Ch),mc("modifiers"),mc("snap",lm))||nl;De.version=en.version=_n.version="3.12.5";$p=1;pu()&&kr();Kt.Power0;Kt.Power1;Kt.Power2;Kt.Power3;Kt.Power4;Kt.Linear;Kt.Quad;Kt.Cubic;Kt.Quart;Kt.Quint;Kt.Strong;Kt.Elastic;Kt.Back;Kt.SteppedEase;Kt.Bounce;Kt.Sine;Kt.Expo;Kt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vf,Bi,Tr,wu,Es,xf,Tu,w1=function(){return typeof window<"u"},bi={},ms=180/Math.PI,Ar=Math.PI/180,ar=Math.atan2,yf=1e8,Au=/([A-Z])/g,T1=/(left|right|width|margin|padding|x)/i,A1=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},C1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},R1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},P1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Rm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Pm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},L1=function(t,e,n){return t.style[e]=n},D1=function(t,e,n){return t.style.setProperty(e,n)},I1=function(t,e,n){return t._gsap[e]=n},U1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},N1=function(t,e,n,s,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},O1=function(t,e,n,s,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Se="transform",mn=Se+"Origin",F1=function i(t,e){var n=this,s=this.target,r=s.style,o=s._gsap;if(t in bi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=si[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=xi(s,a)}):this.tfm[t]=o.x?o[t]:xi(s,t),t===mn&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Se)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(mn,e,"")),t=Se}(r||e)&&this.props.push(t,e,r[t])},Lm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},z1=function(){var t=this.props,e=this.target,n=e.style,s=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Au,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Tu(),(!r||!r.isStart)&&!n[Se]&&(Lm(n),s.zOrigin&&n[mn]&&(n[mn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Dm=function(t,e){var n={target:t,props:[],revert:z1,save:F1};return t._gsap||_n.core.getCache(t),e&&e.split(",").forEach(function(s){return n.save(s)}),n},Im,Dh=function(t,e){var n=Bi.createElementNS?Bi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Bi.createElement(t);return n&&n.style?n:Bi.createElement(t)},ri=function i(t,e,n){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(Au,"-$1").toLowerCase())||s.getPropertyValue(e)||!n&&i(t,Br(e)||e,1)||""},Mf="O,Moz,ms,Ms,Webkit".split(","),Br=function(t,e,n){var s=e||Es,r=s.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Mf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Mf[o]:"")+t},Ih=function(){w1()&&window.document&&(vf=window,Bi=vf.document,Tr=Bi.documentElement,Es=Dh("div")||{style:{}},Dh("div"),Se=Br(Se),mn=Se+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Im=!!Br("perspective"),Tu=_n.core.reverting,wu=1)},_c=function i(t){var e=Dh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,s=this.nextSibling,r=this.style.cssText,o;if(Tr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(s?n.insertBefore(this,s):n.appendChild(this)),Tr.removeChild(e),this.style.cssText=r,o},Sf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Um=function(t){var e;try{e=t.getBBox()}catch{e=_c.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===_c||(e=_c.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Sf(t,["x","cx","x1"])||0,y:+Sf(t,["y","cy","y1"])||0,width:0,height:0}:e},Nm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Um(t))},Os=function(t,e){if(e){var n=t.style,s;e in bi&&e!==mn&&(e=Se),n.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(s==="--"?e:e.replace(Au,"-$1").toLowerCase())):n.removeAttribute(e)}},Hi=function(t,e,n,s,r,o){var a=new pn(t._pt,e,n,0,1,o?Pm:Rm);return t._pt=a,a.b=s,a.e=r,t._props.push(n),a},bf={deg:1,rad:1,turn:1},k1={grid:1,flex:1},Qi=function i(t,e,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Es.style,l=T1.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=s==="px",f=s==="%",_,g,p,m;if(s===o||!r||bf[s]||bf[o])return r;if(o!=="px"&&!d&&(r=i(t,e,n,"px")),m=t.getCTM&&Nm(t),(f||o==="%")&&(bi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],Ae(f?r/_*u:r/100*_);if(a[l?"width":"height"]=u+(d?o:s),g=~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Bi||!g.appendChild)&&(g=Bi.body),p=g._gsap,p&&f&&p.width&&l&&p.time===En.time&&!p.uncache)return Ae(r/p.width*u);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+s,_=t[h],y?t.style[e]=y:Os(t,e)}else(f||o==="%")&&!k1[ri(g,"display")]&&(a.position=ri(t,"position")),g===t&&(a.position="static"),g.appendChild(Es),_=Es[h],g.removeChild(Es),a.position="absolute";return l&&f&&(p=Ts(g),p.time=En.time,p.width=g[h]),Ae(d?_*r/u:_&&r?u/_*r:0)},xi=function(t,e,n,s){var r;return wu||Ih(),e in si&&e!=="transform"&&(e=si[e],~e.indexOf(",")&&(e=e.split(",")[0])),bi[e]&&e!=="transform"?(r=Io(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:sl(ri(t,mn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=il[e]&&il[e](t,e,n)||ri(t,e)||Kp(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Qi(t,e,r,n)+n:r},B1=function(t,e,n,s){if(!n||n==="none"){var r=Br(e,t,1),o=r&&ri(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=ri(t,"borderTopColor"))}var a=new pn(this._pt,t.style,e,0,1,Tm),l=0,c=0,h,u,d,f,_,g,p,m,y,x,M,C;if(a.b=n,a.e=s,n+="",s+="",s==="auto"&&(g=t.style[e],t.style[e]=s,s=ri(t,e)||s,g?t.style[e]=g:Os(t,e)),h=[n,s],_m(h),n=h[0],s=h[1],d=n.match(dr)||[],C=s.match(dr)||[],C.length){for(;u=dr.exec(s);)p=u[0],y=s.substring(l,u.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),p.charAt(1)==="="&&(p=wr(f,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=dr.lastIndex-x.length,x||(x=x||Tn.units[e]||M,l===s.length&&(s+=x,a.e+=x)),M!==x&&(f=Qi(t,e,g,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=e==="display"&&s==="none"?Pm:Rm;return qp.test(s)&&(a.e=0),this._pt=a,a},Ef={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},H1=function(t){var e=t.split(" "),n=e[0],s=e[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(t=n,n=s,s=t),e[0]=Ef[n]||n,e[1]=Ef[s]||s,e.join(" ")},G1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,s=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],bi[a]&&(l=1,a=a==="transformOrigin"?mn:Se),Os(n,a);l&&(Os(n,Se),o&&(o.svg&&n.removeAttribute("transform"),Io(n,1),o.uncache=1,Lm(s)))}},il={clearProps:function(t,e,n,s,r){if(r.data!=="isFromStart"){var o=t._pt=new pn(t._pt,e,n,0,0,G1);return o.u=s,o.pr=-10,o.tween=r,t._props.push(n),1}}},Do=[1,0,0,1,0,0],Om={},Fm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wf=function(t){var e=ri(t,Se);return Fm(e)?Do:e.substr(7).match(Wp).map(Ae)},Cu=function(t,e){var n=t._gsap||Ts(t),s=t.style,r=wf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Do:r):(r===Do&&!t.offsetParent&&t!==Tr&&!n.svg&&(l=s.display,s.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Tr.appendChild(t)),r=wf(t),l?s.display=l:Os(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Tr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Uh=function(t,e,n,s,r,o){var a=t._gsap,l=r||Cu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],x=e.split(" "),M=parseFloat(x[0])||0,C=parseFloat(x[1])||0,T,E,A,L;n?l!==Do&&(E=f*p-_*g)&&(A=M*(p/E)+C*(-g/E)+(g*y-p*m)/E,L=M*(-_/E)+C*(f/E)-(f*y-_*m)/E,M=A,C=L):(T=Um(t),M=T.x+(~x[0].indexOf("%")?M/100*T.width:M),C=T.y+(~(x[1]||x[0]).indexOf("%")?C/100*T.height:C)),s||s!==!1&&a.smooth?(m=M-c,y=C-h,a.xOffset=u+(m*f+y*g)-m,a.yOffset=d+(m*_+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=C,a.smooth=!!s,a.origin=e,a.originIsAbsolute=!!n,t.style[mn]="0px 0px",o&&(Hi(o,a,"xOrigin",c,M),Hi(o,a,"yOrigin",h,C),Hi(o,a,"xOffset",u,a.xOffset),Hi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+C)},Io=function(t,e){var n=t._gsap||new ym(t);if("x"in n&&!e&&!n.uncache)return n;var s=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ri(t,mn)||"0",h,u,d,f,_,g,p,m,y,x,M,C,T,E,A,L,v,S,N,F,B,W,z,$,V,ht,ut,ft,Ft,$t,X,tt;return h=u=d=g=p=m=y=x=M=0,f=_=1,n.svg=!!(t.getCTM&&Nm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[Se]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Se]!=="none"?l[Se]:"")),s.scale=s.rotate=s.translate="none"),E=Cu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),Uh(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,T=n.yOrigin||0,E!==Do&&(S=E[0],N=E[1],F=E[2],B=E[3],h=W=E[4],u=z=E[5],E.length===6?(f=Math.sqrt(S*S+N*N),_=Math.sqrt(B*B+F*F),g=S||N?ar(N,S)*ms:0,y=F||B?ar(F,B)*ms+g:0,y&&(_*=Math.abs(Math.cos(y*Ar))),n.svg&&(h-=C-(C*S+T*F),u-=T-(C*N+T*B))):(tt=E[6],$t=E[7],ut=E[8],ft=E[9],Ft=E[10],X=E[11],h=E[12],u=E[13],d=E[14],A=ar(tt,Ft),p=A*ms,A&&(L=Math.cos(-A),v=Math.sin(-A),$=W*L+ut*v,V=z*L+ft*v,ht=tt*L+Ft*v,ut=W*-v+ut*L,ft=z*-v+ft*L,Ft=tt*-v+Ft*L,X=$t*-v+X*L,W=$,z=V,tt=ht),A=ar(-F,Ft),m=A*ms,A&&(L=Math.cos(-A),v=Math.sin(-A),$=S*L-ut*v,V=N*L-ft*v,ht=F*L-Ft*v,X=B*v+X*L,S=$,N=V,F=ht),A=ar(N,S),g=A*ms,A&&(L=Math.cos(A),v=Math.sin(A),$=S*L+N*v,V=W*L+z*v,N=N*L-S*v,z=z*L-W*v,S=$,W=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Ae(Math.sqrt(S*S+N*N+F*F)),_=Ae(Math.sqrt(z*z+tt*tt)),A=ar(W,z),y=Math.abs(A)>2e-4?A*ms:0,M=X?1/(X<0?-X:X):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Fm(ri(t,Se)),$&&t.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ae(f),n.scaleY=Ae(_),n.rotation=Ae(g)+a,n.rotationX=Ae(p)+a,n.rotationY=Ae(m)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(s[mn]=sl(c)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?W1:Im?zm:V1,n.uncache=0,n},sl=function(t){return(t=t.split(" "))[0]+" "+t[1]},gc=function(t,e,n){var s=Ze(e);return Ae(parseFloat(e)+parseFloat(Qi(t,"x",n+"px",s)))+s},V1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,zm(t,e)},ds="0deg",Qr="0px",fs=") ",zm=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,M="",C=m==="auto"&&t&&t!==1||m===!0;if(x&&(u!==ds||h!==ds)){var T=parseFloat(h)*Ar,E=Math.sin(T),A=Math.cos(T),L;T=parseFloat(u)*Ar,L=Math.cos(T),o=gc(y,o,E*L*-x),a=gc(y,a,-Math.sin(T)*-x),l=gc(y,l,A*L*-x+x)}p!==Qr&&(M+="perspective("+p+fs),(s||r)&&(M+="translate("+s+"%, "+r+"%) "),(C||o!==Qr||a!==Qr||l!==Qr)&&(M+=l!==Qr||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),c!==ds&&(M+="rotate("+c+fs),h!==ds&&(M+="rotateY("+h+fs),u!==ds&&(M+="rotateX("+u+fs),(d!==ds||f!==ds)&&(M+="skew("+d+", "+f+fs),(_!==1||g!==1)&&(M+="scale("+_+", "+g+fs),y.style[Se]=M||"translate(0, 0)"},W1=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(o),M=parseFloat(a),C,T,E,A,L;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ar,c*=Ar,C=Math.cos(l)*u,T=Math.sin(l)*u,E=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(h*=Ar,L=Math.tan(c-h),L=Math.sqrt(1+L*L),E*=L,A*=L,h&&(L=Math.tan(h),L=Math.sqrt(1+L*L),C*=L,T*=L)),C=Ae(C),T=Ae(T),E=Ae(E),A=Ae(A)):(C=u,A=d,T=E=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=Qi(f,"x",o,"px"),M=Qi(f,"y",a,"px")),(_||g||p||m)&&(x=Ae(x+_-(_*C+g*E)+p),M=Ae(M+g-(_*T+g*A)+m)),(s||r)&&(L=f.getBBox(),x=Ae(x+s/100*L.width),M=Ae(M+r/100*L.height)),L="matrix("+C+","+T+","+E+","+A+","+x+","+M+")",f.setAttribute("transform",L),y&&(f.style[Se]=L)},q1=function(t,e,n,s,r){var o=360,a=Ve(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ms:1),c=l-s,h=s+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*yf)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*yf)%o-~~(c/o)*o)),t._pt=d=new pn(t._pt,e,n,s,c,C1),d.e=h,d.u="deg",t._props.push(n),d},Tf=function(t,e){for(var n in e)t[n]=e[n];return t},X1=function(t,e,n){var s=Tf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Se]=e,a=Io(n,1),Os(n,Se),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Se],o[Se]=e,a=Io(n,1),o[Se]=c);for(l in bi)c=s[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=Ze(c),_=Ze(h),u=f!==_?Qi(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new pn(t._pt,a,l,u,d-u,Lh),t._pt.u=_||0,t._props.push(l));Tf(a,s)};fn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",s="Bottom",r="Left",o=(t<3?[e,n,s,r]:[e+r,e+n,s+n,s+r]).map(function(a){return t<2?i+a:"border"+a+i});il[t>1?"border"+i:i]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return xi(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var km={name:"css",register:Ih,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,s,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,p,m,y,x,M,C,T,E,A;wu||Ih(),this.styles=this.styles||Dm(t),A=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Sn[g]&&Mm(g,e,n,s,t,r)))){if(f=typeof h,_=il[g],f==="function"&&(h=h.call(n,s,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ro(h)),_)_(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Xi.lastIndex=0,Xi.test(c)||(p=Ze(c),m=Ze(h)),m?p!==m&&(c=Qi(t,g,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,s,r,0,0,g),o.push(g),A.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,s,t,r):l[g],Ve(c)&&~c.indexOf("random(")&&(c=Ro(c)),Ze(c+"")||c==="auto"||(c+=Tn.units[g]||Ze(xi(t,g))||""),(c+"").charAt(1)==="="&&(c=xi(t,g))):c=xi(t,g),d=parseFloat(c),y=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),g in si&&(g==="autoAlpha"&&(d===1&&xi(t,"visibility")==="hidden"&&u&&(d=0),A.push("visibility",0,a.visibility),Hi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=si[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in bi,x){if(this.styles.save(g),M||(C=t._gsap,C.renderTransform&&!e.parseTransform||Io(t,e.parseTransform),T=e.smoothOrigin!==!1&&C.smooth,M=this._pt=new pn(this._pt,a,Se,0,1,C.renderTransform,C,0,-1),M.dep=1),g==="scale")this._pt=new pn(this._pt,C,"scaleY",C.scaleY,(y?wr(C.scaleY,y+u):u)-C.scaleY||0,Lh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(mn,0,a[mn]),h=H1(h),C.svg?Uh(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==C.zOrigin&&Hi(this,C,"zOrigin",C.zOrigin,m),Hi(this,a,g,sl(c),sl(h)));continue}else if(g==="svgOrigin"){Uh(t,h,1,T,0,this);continue}else if(g in Om){q1(this,C,g,d,y?wr(d,y+h):h);continue}else if(g==="smoothOrigin"){Hi(this,C,"smooth",C.smooth,h);continue}else if(g==="force3D"){C[g]=h;continue}else if(g==="transform"){X1(this,h,t);continue}}else g in a||(g=Br(g)||g);if(x||(u||u===0)&&(d||d===0)&&!A1.test(h)&&g in a)p=(c+"").substr((d+"").length),u||(u=0),m=Ze(h)||(g in Tn.units?Tn.units[g]:p),p!==m&&(d=Qi(t,g,c,m)),this._pt=new pn(this._pt,x?C:a,g,d,(y?wr(d,y+u):u)-d,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?P1:Lh),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=R1);else if(g in a)B1.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,s,r);else if(g!=="parseTransform"){_u(g,h);continue}x||(g in a?A.push(g,0,a[g]):A.push(g,1,c||t[g])),o.push(g)}}E&&Am(this)},render:function(t,e){if(e.tween._time||!Tu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:xi,aliases:si,getSetter:function(t,e,n){var s=si[e];return s&&s.indexOf(",")<0&&(e=s),e in bi&&e!==mn&&(t._gsap.x||xi(t,"x"))?n&&xf===n?e==="scale"?U1:I1:(xf=n||{})&&(e==="scale"?N1:O1):t.style&&!fu(t.style[e])?L1:~e.indexOf("-")?D1:bu(t,e)},core:{_removeProperty:Os,_getMatrix:Cu}};_n.utils.checkPrefix=Br;_n.core.getStyleSaver=Dm;(function(i,t,e,n){var s=fn(i+","+t+","+e,function(r){bi[r]=1});fn(t,function(r){Tn.units[r]="deg",Om[r]=1}),si[s[13]]=i+","+t,fn(n,function(r){var o=r.split(":");si[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Tn.units[i]="px"});_n.registerPlugin(km);var Be=_n.registerPlugin(km)||_n;Be.core.Tween;function $1(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ne;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let _=0;_<f.count;++_)u.push(f.getX(_)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Af(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<o[h].length;++g)f.push(o[h][g][d]);const _=Af(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function Af(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new On(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let _=0;_<e;_++){const g=h.getComponent(d,_);a.setComponent(d+u,_,g)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Ue={width:2e3,height:1125,images:{1:"plans/floor1.png",2:"plans/floor2.png"},outline:[16,16,1984,1110]},qt={width:40,depth:22.5,floorHeight:4.2,wallHeight:3.6,slabThickness:.3,cutawayWallScale:.32,explodeDefault:7,explodeMax:16},Y1="本模型依 1F／2F 空間配置圖之相對位置與比例重建，尺寸為示意比例（1 px ≈ 0.02 m），不等同真實建築尺寸。",Z1=[{side:"south",from:875,to:1072,label:"大門"},{side:"north",from:1677,to:1748,label:"北側門"}],j1=[{id:"f1-entrance",name:"大門",category:"entrance",kind:"door",px:[875,1084,1072,1114],description:"圖書館主要出入口，位於一樓南側（圖面下方中央）。借書請由一樓進入圖書館。",interactionType:"info",quizIds:["qz-borrow-flow"],keywords:["入口","門","進館"]},{id:"f1-north-door",name:"北側門",category:"entrance",kind:"sideDoor",px:[1677,14,1748,24],description:"圖面上方深色標示之開口（位於展示螢幕與梅高特藏區之間），平面圖未標註名稱，此處以「北側門」示意。",interactionType:"info",quizIds:[],keywords:["門","開口"]},{id:"f1-discussion",name:"討論室",category:"room",kind:"room",px:[30,25,1071,205],description:"一樓西北側大型討論室，設有螢幕與討論桌，適合小組討論。",interactionType:"info",quizIds:[],keywords:["討論","小組","會議"],options:{doors:[{side:"east",from:25,to:83}],furniture:"discussion"}},{id:"f1-discussion-screen",name:"討論室螢幕",category:"facility",kind:"screen",px:[41,30,83,166],description:"討論室西側牆面的螢幕，可供簡報及影片播放。",interactionType:"info",quizIds:[],keywords:["螢幕","投影"],options:{facing:"east"}},{id:"f1-desk-nw",name:"閱讀桌（西側北段）",category:"reading",kind:"tables",px:[30,219,140,486],description:"一樓西側靠牆的長形閱讀桌。",interactionType:"info",quizIds:[],keywords:["閱讀","座位","自習"]},{id:"f1-tablet-cart",name:"平板車",category:"facility",kind:"cart",px:[151,218,242,277],description:"存放教學用平板電腦的充電車，位於 SDGs 專區西側。",interactionType:"info",quizIds:[],keywords:["平板","充電"]},{id:"f1-sdgs",name:"SDGs 專區",category:"display",kind:"sdgs",px:[252,218,1071,277],description:"聯合國永續發展目標（SDGs）主題書展專區，位於討論室南側、主要閱讀空間北側。",interactionType:"info",quizIds:[],keywords:["永續","主題書展","SDGs"]},{id:"f1-newspaper",name:"報架",category:"collection",kind:"newsRack",px:[28,497,55,590],description:"一樓陳列當日報紙，圖書館至少保存最近二週內之報紙，以供查閱使用。",interactionType:"info",quizIds:["qz-newspaper"],keywords:["報紙","新聞"]},{id:"f1-desk-sw",name:"閱讀桌（西側南段）",category:"reading",kind:"tables",px:[30,601,140,869],description:"一樓西側報架南方的長形閱讀桌。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"]},{id:"f1-lockers",name:"置物櫃",category:"facility",kind:"lockers",px:[30,884,140,1102],description:"一樓西南角置物櫃。依規定不可攜帶書包、飲食（含礦泉水）等私人物品入館。",interactionType:"info",quizIds:["qz-bag"],keywords:["書包","寄物"]},{id:"f1-carpet-reading",name:"閱讀區底座",category:"reading",kind:"carpet",px:[250,310,875,463],description:"中央閱讀區範圍。",interactionType:"none",quizIds:[],keywords:[],hidden:!0},{id:"f1-reading-a",name:"閱讀區 A",category:"reading",kind:"tables",px:[275,330,541,443],description:"一樓中西側主要閱讀區（西）。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"]},{id:"f1-reading-b",name:"閱讀區 B",category:"reading",kind:"tables",px:[584,330,850,443],description:"一樓中西側主要閱讀區（東）。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"]},{id:"f1-carpet-magazine",name:"雜誌區底座",category:"collection",kind:"carpet",px:[250,475,875,621],description:"雜誌區範圍。",interactionType:"none",quizIds:[],keywords:[],hidden:!0},{id:"f1-magazine-1",name:"雜誌區（北排）",category:"collection",kind:"magazine",px:[250,492,875,539],description:"一樓置放當月期刊雜誌，不外借；過期雜誌移置於二樓書庫供讀者外借。",interactionType:"info",quizIds:["qz-magazine"],keywords:["期刊","雜誌"]},{id:"f1-magazine-2",name:"雜誌區（南排）",category:"collection",kind:"magazine",px:[250,557,875,604],description:"一樓置放當月期刊雜誌，不外借；過期雜誌移置於二樓書庫供讀者外借。",interactionType:"info",quizIds:["qz-magazine"],keywords:["期刊","雜誌"]},{id:"f1-sunning-1",name:"曬書桌 1",category:"display",kind:"flatDisplay",px:[252,639,874,685],description:"平放展示書籍的「曬書桌」，方便瀏覽封面。",interactionType:"info",quizIds:[],keywords:["展示","曬書"]},{id:"f1-sunning-2",name:"曬書桌 2",category:"display",kind:"flatDisplay",px:[252,705,874,751],description:"平放展示書籍的「曬書桌」，方便瀏覽封面。",interactionType:"info",quizIds:[],keywords:["展示","曬書"]},{id:"f1-sunning-3",name:"曬書桌 3",category:"display",kind:"flatDisplay",px:[252,771,874,818],description:"平放展示書籍的「曬書桌」，方便瀏覽封面。",interactionType:"info",quizIds:[],keywords:["展示","曬書"]},{id:"f1-board-w",name:"公佈欄（西）",category:"facility",kind:"board",px:[175,884,489,900],description:"一樓西南側公佈欄，張貼圖書館活動與公告。",interactionType:"info",quizIds:[],keywords:["公告","活動"]},{id:"f1-newbooks",name:"新書展示區",category:"display",kind:"newBooks",px:[502,886,874,976],description:"位於圖面下方偏左的中央，展示新進圖書。點擊可查看新書介紹（範例資料）與新書推薦流程。",interactionType:"newbooks",quizIds:["qz-recommend"],keywords:["新書","推薦"]},{id:"f1-display-screen",name:"展示螢幕",category:"facility",kind:"screen",px:[1277,23,1667,74],description:"一樓東北側展示螢幕，播放圖書館公告與活動資訊。",interactionType:"info",quizIds:[],keywords:["螢幕","公告"],options:{facing:"south",wide:!0}},{id:"f1-reading-ne",name:"東北閱讀區",category:"reading",kind:"tableGrid",px:[1277,97,1667,511],description:"一樓東北側閱讀區，共 6 組閱讀桌（圖面標示「閱讀區」）。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"],options:{tables:[[1326,112,1450,229],[1494,112,1618,229],[1326,246,1450,362],[1494,246,1618,362],[1326,379,1450,496],[1494,379,1618,496]]}},{id:"f1-meigao",name:"梅高特藏區",category:"collection",kind:"special",px:[1759,25,1966,409],description:"位於一樓東北角，陳列梅岡風、最近幾屆畢業紀念冊、梅高青年等刊物，不開放外借。",interactionType:"special",quizIds:["qz-meigao"],keywords:["特藏","畢業紀念冊","梅岡風","梅高青年"],options:{shelves:[[1765,32,1959,92],[1885,92,1959,402]]}},{id:"f1-machines",name:"事務機器",category:"service",kind:"copier",px:[1861,423,1967,513],description:"影印、列印與掃描設備。須自備悠遊卡（餘額 10 元以上）；黑白每頁 2 元、彩色每頁 6 元，掃描只需過卡不收費。",interactionType:"copier",quizIds:["qz-copy","qz-scan"],keywords:["影印","列印","掃描","悠遊卡"]},{id:"f1-opac",name:"資訊檢索區",category:"service",kind:"computers",px:[1277,550,1970,634],description:"一樓東側、行政辦公室北方的電腦檢索區，可查詢館藏。電腦不可連線任何不當網頁，違者將受校規警告以上處分。",interactionType:"opac",quizIds:["qz-opac","qz-search"],keywords:["電腦","查詢","館藏","OPAC"],options:{computers:[[1292,565,1373,619],[1425,565,1506,619],[1516,565,1597,619],[1650,565,1731,619],[1741,565,1822,619],[1874,565,1955,619]]}},{id:"f1-counter",name:"借還書櫃台",category:"service",kind:"counter",px:[1074,637,1276,978],description:"讀者服務櫃台，位於行政辦公室西側。借書請攜學生證，每人最多 4 本、借期 2 週，請於開放日 16:00 前完成借書程序。",interactionType:"counter",quizIds:["qz-limit","qz-card"],keywords:["借書","還書","櫃台","學生證"],options:{legs:[[1074,637,1129,908],[1074,908,1276,978]]}},{id:"f1-office",name:"行政辦公室",category:"room",kind:"room",px:[1279,637,1969,978],description:"圖書館行政辦公區，位於一樓東南側。",interactionType:"info",quizIds:[],keywords:["辦公室","館員"],options:{doors:[{side:"west",from:640,to:725}],furniture:"office"}},{id:"f1-board-se",name:"公佈欄（東南）",category:"facility",kind:"boardPair",px:[1277,983,1627,1106],description:"通往樓梯走道兩側的公佈欄。",interactionType:"info",quizIds:[],keywords:["公告"],options:{boards:[[1277,983,1627,993],[1277,1096,1627,1106]]}},{id:"f1-stairs",name:"往 2F 樓梯",category:"circulation",kind:"stairs",px:[1637,983,1970,1106],description:"位於一樓東南角，通往二樓書庫與閱讀區。點擊可切換至二樓。",interactionType:"stairs",quizIds:["qz-borrow-flow"],keywords:["樓梯","二樓","上樓"],options:{target:2}}],K1=[[232,148,356,484],[389,148,512,484],[546,148,669,484],[703,148,826,484],[860,148,983,484],[1017,148,1140,484],[1174,148,1297,484],[1331,148,1454,484],[1488,148,1611,484],[1644,148,1768,484]],vc=["000 總類","100 哲學類","200 宗教類","300 科學類","400 應用科學類","500 社會科學類","600-700 史地類","800 語文類","900 藝術類","漫畫・過期期刊"],J1=[],Q1=[1712,985,1837,1102],tb=[{id:"f2-seats-north",name:"閱讀座位（北側）",category:"reading",kind:"tables",px:[190,25,1812,82],description:"二樓最北側、橫向延伸的閱讀座位區。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"]},{id:"f2-stacks",name:"二樓書庫",category:"collection",kind:"carpet",px:[188,121,1813,510],description:"二樓書庫共 10 排書架，借書請至二樓書庫找書／取書，再至一樓櫃台完成借書程序。過期雜誌亦移置於此供外借。",interactionType:"shelf",quizIds:["qz-borrow-flow"],keywords:["書庫","書架","找書","借書"]},...K1.map((i,t)=>({id:`f2-shelf-${String(t+1).padStart(2,"0")}`,name:`書架 ${t+1}`,category:"collection",kind:"bookshelf",px:i,description:`二樓書庫第 ${t+1} 排書架（由西向東編號）。示範分類：${vc[t]}。`,interactionType:"shelf",quizIds:[],keywords:["書架","書庫",vc[t]],options:{index:t+1,className:vc[t]}})),{id:"f2-discussion-w",name:"討論室（西）",category:"room",kind:"room",px:[26,25,126,197],description:"二樓西北角討論室。",interactionType:"info",quizIds:[],keywords:["討論"],options:{doors:[{side:"south",from:50,to:100}],furniture:"smallDiscussion"}},{id:"f2-discussion-e",name:"討論室（東）",category:"room",kind:"room",px:[1869,25,1970,197],description:"二樓東北角討論室。",interactionType:"info",quizIds:[],keywords:["討論"],options:{doors:[{side:"south",from:1895,to:1945}],furniture:"smallDiscussion"}},{id:"f2-desk-w",name:"閱讀桌（西側）",category:"reading",kind:"tables",px:[28,210,128,1100],description:"二樓西側沿牆長形閱讀桌（圖面為一整列，北接討論室）。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"]},{id:"f2-desk-e",name:"閱讀桌（東側）",category:"reading",kind:"tables",px:[1868,210,1968,729],description:"二樓東側沿牆閱讀桌，北接東側討論室。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"]},{id:"f2-reading-center",name:"中央閱讀區",category:"reading",kind:"tableGrid",px:[187,548,1665,1010],description:"二樓中央閱讀區，圖面標示為「閱讀區」的 6 組長形配置，此處以閱讀桌椅示意（保留設定供日後依現場照片修正）。",interactionType:"info",quizIds:[],keywords:["閱讀","座位","自習"],options:{tables:[[250,580,834,701],[927,580,1510,701],[250,718,834,840],[927,718,1510,840],[250,857,834,979],[927,857,1510,979]]}},{id:"f2-screen",name:"螢幕（二樓）",category:"facility",kind:"screen",px:[1571,646,1633,912],description:"二樓中央閱讀區東側的螢幕。",interactionType:"info",quizIds:[],keywords:["螢幕"],options:{facing:"west"}},{id:"f2-stairs",name:"往 1F 樓梯",category:"circulation",kind:"stairwell",px:[1712,728,1837,1102],description:"二樓東南側樓梯，通往一樓。點擊可切換至一樓。",interactionType:"stairs",quizIds:[],keywords:["樓梯","一樓","下樓"],options:{target:1}},{id:"f2-storage",name:"儲物室",category:"room",kind:"room",px:[1850,827,1973,1101],description:"二樓最東側靠南的儲物室（非開放空間）。",interactionType:"info",quizIds:[],keywords:["儲藏"],options:{doors:[{side:"west",from:860,to:920}],furniture:"storage"}},{id:"f2-desk-sw",name:"閱讀桌（南側西段）",category:"reading",kind:"tables",px:[140,1044,863,1101],description:"二樓最南側中央偏西的閱讀桌。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"]},{id:"f2-desk-se",name:"閱讀桌（南側東段）",category:"reading",kind:"tables",px:[1081,1044,1700,1101],description:"二樓最南側中央偏東的閱讀桌。",interactionType:"info",quizIds:[],keywords:["閱讀","座位"]},{id:"f2-south-mark",name:"南側深色標示",category:"facility",kind:"marker",px:[886,1084,1061,1111],description:"二樓圖面下方中央的深色標示（位於一樓大門正上方），平面圖未註記用途，此處僅以示意方塊呈現。",interactionType:"info",quizIds:[],keywords:[]}];function eb(i,t){return{u:i/Ue.width,v:t/Ue.height}}function nb(i,t,e,n){return{x:i/Ue.width,y:t/Ue.height,w:(e-i)/Ue.width,h:(n-t)/Ue.height}}function Bm(i,t){return{x:(i-.5)*qt.width,z:(t-.5)*qt.depth}}function Cf(i,t){return{u:i/qt.width+.5,v:t/qt.depth+.5}}function Ye(i,t){const e=eb(i,t);return Bm(e.u,e.v)}function ib(i){const t=Bm(i.x+i.w/2,i.y+i.h/2);return{x:t.x,z:t.z,w:i.w*qt.width,d:i.h*qt.depth}}function sb(i,t,e,n){const s=Cf(i,t),r=Cf(e,n);return{x:s.u,y:s.v,w:r.u-s.u,h:r.v-s.v}}const Ru="ymsh-lib-layout-overrides",Uo={entrance:{label:"出入口",color:"#ef6c4a"},service:{label:"服務設施",color:"#f2a900"},reading:{label:"閱讀空間",color:"#3fa36b"},collection:{label:"館藏區",color:"#3b7ddd"},display:{label:"展示區",color:"#b05cc8"},facility:{label:"設備",color:"#6b7a8f"},room:{label:"獨立空間",color:"#d9577f"},circulation:{label:"樓層動線",color:"#00a3a3"}};function Hm(){try{return JSON.parse(localStorage.getItem(Ru)||"{}")}catch{return{}}}let No=Hm();function Rf(i,t){const e=No[i.id]||i.px,n=nb(...e),s=ib(n);return{...i,floor:t,px:e,originalPx:i.px,mapBounds:n,position:{x:s.x,z:s.z},size:{w:s.w,d:s.d},rotation:0,quizIds:i.quizIds||[],keywords:i.keywords||[],options:i.options||{}}}let Yn=[];const Nh=new Map;function Pu(){return No=Hm(),Yn=[...j1.map(i=>Rf(i,1)),...tb.map(i=>Rf(i,2))],Nh.clear(),Yn.forEach(i=>Nh.set(i.id,i)),Yn}Pu();function $i(i){return Nh.get(i)}function Pf(i,t){No[i]=t.map(e=>Math.round(Math.max(0,Math.min(e,Math.max(Ue.width,Ue.height))))),localStorage.setItem(Ru,JSON.stringify(No)),Pu()}function rb(){localStorage.removeItem(Ru),Pu()}function Lf(){return{...No}}const xc=new Map;function ve(i,t={}){const e=i+JSON.stringify(t);return xc.has(e)||xc.set(e,new Fp({color:i,roughness:.82,metalness:.02,flatShading:!0,...t})),xc.get(e)}const ob=new Ei(1,1,1);function j(i,t,e,n,s,r,o,a){const l=new Zt(ob,n instanceof is?n:ve(n,a));return l.scale.set(i,t,e),l.position.set(s,r+t/2,o),l.castShadow=!0,l.receiveShadow=!0,l}function Yt(i){const t=Ye(i[0],i[1]),e=Ye(i[2],i[3]);return{minX:t.x,maxX:e.x,minZ:t.z,maxZ:e.z,x:(t.x+e.x)/2,z:(t.z+e.z)/2,w:e.x-t.x,d:e.z-t.z}}function gi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Di(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0}function ab(i,{bg:t="#ffffff",fg:e="#1d3557",w:n=512,h:s=128,font:r='bold 64px "Noto Sans TC", "Microsoft JhengHei", sans-serif',border:o}={}){const a=document.createElement("canvas");a.width=n,a.height=s;const l=a.getContext("2d");l.fillStyle=t,l.fillRect(0,0,n,s),o&&(l.strokeStyle=o,l.lineWidth=Math.max(4,s*.06),l.strokeRect(l.lineWidth/2,l.lineWidth/2,n-l.lineWidth,s-l.lineWidth)),l.fillStyle=e,l.font=r,l.textAlign="center",l.textBaseline="middle";const c=String(i).split(`
`),h=s/(c.length+.4);c.forEach((d,f)=>l.fillText(d,n/2,h*(f+.7)));const u=new AM(a);return u.colorSpace=Mn,u.anisotropy=4,u}function Dn(i,t,e,n={}){const s=ab(i,{w:512,h:Math.round(512*e/t),...n});return new Zt(new Hs(t,e),new ei({map:s,side:Wn}))}const Ui=["#d1495b","#edae49","#00798c","#30638e","#003d5b","#8d6a9f","#5b8e7d","#f4a259","#bc4b51","#3d5a80","#e07a5f","#81b29a","#f2cc8f","#6d597a"],Gm={flightA:{y1:1050,y2:1100,xStart:1645,xEnd:1900,levelStart:0,levelEnd:.5},landing:{x1:1900,x2:1966,y1:990,y2:1100,level:.5},flightB:{y1:990,y2:1045,xStart:1900,xEnd:1712,levelStart:.5,levelEnd:1}},Df=[{px:[1645,1075],level:0},{px:[1900,1075],level:.5},{px:[1935,1045],level:.5},{px:[1900,1017],level:.5},{px:[1712,1017],level:1}],If=[{id:"enter",title:"由一樓大門進館",targetZone:"f1-entrance",hint:"找到一樓南側的「大門」並點擊它。",floor:1,path:[]},{id:"to-stairs",title:"走到往 2F 樓梯",targetZone:"f1-stairs",hint:"沿著地面箭頭，經過公佈欄走道到東南角的樓梯，點擊樓梯。",floor:1,path:[{px:[973,1100],level:0},{px:[973,1040],level:0},{px:[1300,1040],level:0},{px:[1630,1040],level:0},{px:[1645,1075],level:0}]},{id:"to-stacks",title:"上樓到二樓書庫",targetZone:"f2-shelf-06",hint:"上樓後往北走到書庫，點擊第 6 排書架（箭頭終點）。也可點任一書架。",floor:2,anyShelf:!0,path:[...Df,{px:[1690,1017],level:1},{px:[1690,529],level:1},{px:[1157,529],level:1},{px:[1157,300],level:1}]},{id:"pick-books",title:"選書（最多 4 本）",targetZone:null,action:"pickBooks",hint:"從書架上選擇想借的書，每人最多可借 4 本。",floor:2,path:[]},{id:"back-down",title:"返回一樓",targetZone:"f2-stairs",hint:"帶著書回到二樓樓梯，點擊樓梯下樓。",floor:2,path:[{px:[1157,300],level:1},{px:[1157,529],level:1},{px:[1690,529],level:1},{px:[1690,1017],level:1},{px:[1712,1017],level:1}]},{id:"to-counter",title:"到借還書櫃台",targetZone:"f1-counter",hint:"下樓後沿箭頭到行政辦公室西側的借還書櫃台，點擊櫃台。",floor:1,path:[...[...Df].reverse(),{px:[1630,1040],level:0},{px:[1040,1040],level:0},{px:[1040,800],level:0}]},{id:"show-card",title:"出示學生證",targetZone:null,action:"showCard",hint:"借書請攜學生證，於開放日 16:00 前完成借書程序。",floor:1,path:[]}],yc=[{zoneId:"f1-entrance",say:"歡迎來到楊梅高中圖書館！這裡是一樓南側的大門。圖書館開放時間為早上八點到下午四點。"},{zoneId:"f1-newbooks",say:"進門左前方是新書展示區，可以看到最新的館藏。想推薦新書，可以透過新書推薦系統。"},{zoneId:"f1-sdgs",say:"北側是 SDGs 永續發展專區，旁邊有平板車。"},{zoneId:"f1-magazine-1",say:"這裡是雜誌區。一樓的當月期刊雜誌不外借，過期雜誌會移到二樓書庫供外借。"},{zoneId:"f1-discussion",say:"西北側是大型討論室，設有螢幕，適合小組討論。"},{zoneId:"f1-meigao",say:"東北角是梅高特藏區，陳列梅岡風、畢業紀念冊、梅高青年等刊物，不開放外借。"},{zoneId:"f1-machines",say:"這是事務機器，影印列印要自備悠遊卡，餘額十元以上。黑白每頁兩元，彩色每頁六元，掃描不收費。"},{zoneId:"f1-opac",say:"資訊檢索區可以查詢館藏，請勿連線任何不當網頁。"},{zoneId:"f1-counter",say:"行政辦公室西側是借還書櫃台。借書請攜學生證，每人最多四本，借期兩週。"},{zoneId:"f1-stairs",say:"東南角的樓梯通往二樓。"},{zoneId:"f2-stacks",say:"二樓書庫共有十排書架，借書時請到這裡找書、取書，再回一樓櫃台辦理。"},{zoneId:"f2-reading-center",say:"二樓中央是閱讀區，四周還有沿牆的閱讀桌與兩間討論室。導覽結束，祝你閱讀愉快！"}],lb="#c99a6b",Vm="#8a5a3b",cb="#e8d3b0",hb="#4f7cac",Gi="#9aa5b1",Aa="#16213e";function pr(i,t,e,n,s=hb){const r=new pe;r.add(j(.44,.06,.42,s,0,.42,0)),r.add(j(.44,.45,.06,s,0,.48,.19)),r.add(j(.05,.42,.05,Gi,-.18,0,-.16)),r.add(j(.05,.42,.05,Gi,.18,0,-.16)),r.add(j(.05,.42,.05,Gi,-.18,0,.16)),r.add(j(.05,.42,.05,Gi,.18,0,.16)),r.position.set(t,0,e),r.rotation.y=n,i.add(r)}function cr(i,t,e,n,s,r=cb,o=.74){i.add(j(n,.05,s,r,t,o-.05,e));const a=n/2-.08,l=s/2-.08;[[-a,-l],[a,-l],[-a,l],[a,l]].forEach(([c,h])=>i.add(j(.06,o-.05,.06,Vm,t+c,0,e+h)))}function _s(i,t,e,n,s=.85){const r=n==="x"?t.w:t.d,o=Math.max(1,Math.floor((r-.3)/s)),a=-((o-1)*s)/2;for(let l=0;l<o;l++){const c=a+l*s;n==="x"?pr(i,t.x+c,t.z+e*(t.d/2+.32),e>0?0:Math.PI):pr(i,t.x+e*(t.w/2+.32),t.z+c,e>0?Math.PI/2:-Math.PI/2)}}function ub(i,t,e={}){const n=t.w>=t.d,s=n?t.d:t.w,r=Math.min(s*(e.fill?.55:.42),1.3),o=(s-r)/2<.45,a=e.side||1,l=o?-a*Math.max(0,s/2-r/2-.05):0,c=n?{x:t.x,z:t.z+l,w:t.w*.94,d:r}:{x:t.x+l,z:t.z,w:r,d:t.d*.94},h=n?c.w:c.d,u=Math.max(1,Math.round(h/3.6)),d=h/u;for(let f=0;f<u;f++){const _=-h/2+d*(f+.5),g=n?{x:c.x+_,z:c.z,w:d-.25,d:c.d}:{x:c.x,z:c.z+_,w:c.w,d:d-.25};cr(i,g.x,g.z,g.w,g.d),(o?[a]:[-1,1]).forEach(m=>_s(i,g,m,n?"x":"z"))}}function an(i,t,e,n=1,s=.012){const r=new Zt(new Hs(t.w,t.d),ve(e,{transparent:n<1,opacity:n,flatShading:!1}));return r.rotation.x=-Math.PI/2,r.position.set(t.x,s,t.z),r.receiveShadow=!0,r.userData.footprint=!0,i.add(r),r}function Ca(i,t,{x0:e,x1:n,z:s,y:r,depth:o,maxH:a=.3,axis:l="x",lean:c=0}){let h=e;for(;h<n-.03;){const u=.025+t()*.035,d=a*(.62+t()*.38),f=Ui[Math.floor(t()*Ui.length)],_=h+u/2;l==="x"?i.books.push({x:_,y:r+d/2,z:s,sx:u,sy:d,sz:o,color:f,rz:c}):i.books.push({x:s,y:r+d/2,z:_,sx:o,sy:d,sz:u,color:f,rx:c}),h+=u+(t()<.08?.05:.004)}}const Wm={door(i,t){const e=Yt(i.px),n=Ye(0,1110).z,s=e.w;t.add(j(s,.25,.3,"#264653",e.x,2.6,n-.1)),t.add(j(.15,2.6,.3,"#264653",e.minX+.08,0,n-.1)),t.add(j(.15,2.6,.3,"#264653",e.maxX-.08,0,n-.1));const r=ve("#9ed8f5",{transparent:!0,opacity:.45,roughness:.1});t.add(j(s/2-.1,2.5,.06,r,e.x-s/4-.05,0,n-.05)),t.add(j(s/2-.1,2.5,.06,r,e.x+s/4+.05,0,n-.05));const o=j(s+1.2,.04,1.6,"#e76f51",e.x,0,n+1.1);o.userData.footprint=!0,t.add(o);const a=Dn("圖書館 LIBRARY",3.6,.6,{bg:"#264653",fg:"#ffffff",font:'bold 60px "Noto Sans TC", sans-serif'});a.position.set(e.x,3.15,n+.06),t.add(a)},sideDoor(i,t){const e=Yt(i.px),n=e.z;t.add(j(e.w*.9,2.3,.08,"#6c584c",e.x,0,n)),t.add(j(e.w,.15,.18,"#264653",e.x,2.3,n))},room(i,t,e){const n=Yt(i.px);an(t,n,i.floor===1?"#f6e7d3":"#f1e4d2");const s=.12,r=2.7,o=ve("#fdf6ec"),a=i.options.doors||[],l={north:{a:n.minX,b:n.maxX,fixed:n.minZ,axis:"x"},south:{a:n.minX,b:n.maxX,fixed:n.maxZ,axis:"x"},west:{a:n.minZ,b:n.maxZ,fixed:n.minX,axis:"z"},east:{a:n.minZ,b:n.maxZ,fixed:n.maxX,axis:"z"}};Object.entries(l).forEach(([u,d])=>{const f=a.filter(p=>p.side===u).map(p=>{const m=Ye(p.from,p.from),y=Ye(p.to,p.to);return d.axis==="x"?[m.x,y.x]:[m.z,y.z]}).sort((p,m)=>p[0]-m[0]);let _=d.a;const g=[];f.forEach(([p,m])=>{p>_&&g.push([_,p]),_=Math.max(_,m)}),_<d.b&&g.push([_,d.b]),g.forEach(([p,m])=>{const y=m-p;if(y<.05)return;const x=d.axis==="x"?j(y,r,s,o,(p+m)/2,0,d.fixed):j(s,r,y,o,d.fixed,0,(p+m)/2);x.userData.roomWall=!0,t.add(x)}),f.forEach(([p,m])=>{const y=d.axis==="x"?j(m-p,.3,s,"#d9c3a5",(p+m)/2,r-.3,d.fixed):j(s,.3,m-p,"#d9c3a5",d.fixed,r-.3,(p+m)/2);y.userData.roomWall=!0,t.add(y)})});const c=i.options.furniture,h={...n,w:n.w-.6,d:n.d-.6};if(c==="discussion"){const u={x:n.x-n.w*.18,z:n.z,w:n.w*.3,d:1.4},d={x:n.x+n.w*.22,z:n.z,w:n.w*.3,d:1.4};[u,d].forEach(f=>{cr(t,f.x,f.z,f.w,f.d,"#f0e2c8"),_s(t,f,-1,"x",.9),_s(t,f,1,"x",.9)}),t.add(j(3,1.2,.05,"#ffffff",n.x+n.w*.05,.9,n.minZ+.1))}else if(c==="smallDiscussion"){const u={x:n.x,z:n.z+.2,w:Math.min(h.w*.45,.8),d:Math.min(h.d*.5,1.6)};cr(t,u.x,u.z,u.w,u.d,"#f0e2c8"),_s(t,u,-1,"z",.7),_s(t,u,1,"z",.7)}else if(c==="office"){const u=gi(Di(i.id));for(let d=0;d<4;d++){const f=n.minX+2.2+d*(n.w-4)/3;cr(t,f,n.z-1.2,1.6,.8,"#ddc7a4"),t.add(j(.5,.35,.05,Aa,f,.74,n.z-1.45)),pr(t,f,n.z-.5,0,"#7b6d8d")}for(let d=0;d<6;d++)t.add(j(.9,1.8,.45,u()>.5?"#b8c4d0":"#c9b79c",n.minX+1+d*1.05,0,n.maxZ-.4));t.add(j(2.4,.74,1.1,"#ddc7a4",n.maxX-2,0,n.z+1.5))}else if(c==="storage"){for(let u=0;u<3;u++)t.add(j(.5,2,h.d*.8,"#a1866f",n.minX+.6+u*.75,0,n.z));t.add(j(.5,.5,.5,"#d4a373",n.maxX-.5,0,n.maxZ-.6))}},screen(i,t){const e=Yt(i.px),n=i.options.facing||"south",s=ve(Aa,{emissive:"#1f6feb",emissiveIntensity:.35});if(n==="south"||n==="north"){const r=e.w*.9;t.add(j(r,.08,e.d*.6,"#555",e.x,0,e.z)),t.add(j(.12,1.1,.12,Gi,e.x,0,e.z)),t.add(j(r,r*.18,.1,s,e.x,1.1,e.z))}else{const r=e.d*.9;t.add(j(e.w*.6,.08,r,"#555",e.x,0,e.z)),t.add(j(.12,1.1,.12,Gi,e.x,0,e.z)),t.add(j(.1,Math.min(r*.55,1.6),r,s,e.x,1.1,e.z))}},tables(i,t){const e=Yt(i.px);an(t,e,"#e9f3e4",.9),ub(t,e)},tableGrid(i,t){const e=Yt(i.px);an(t,e,"#e3eefb",.9),(i.options.tables||[]).forEach(n=>{const s=Yt(n),r=s.w>=s.d,o=r?{x:s.x,z:s.z,w:s.w*.92,d:Math.min(s.d*.5,1.3)}:{x:s.x,z:s.z,w:Math.min(s.w*.5,1.3),d:s.d*.92};cr(t,o.x,o.z,o.w,o.d),_s(t,o,-1,r?"x":"z"),_s(t,o,1,r?"x":"z")})},carpet(i,t){const e=Yt(i.px);an(t,e,i.floor===2?"#dbe7f5":"#e6eef8",1,.006)},cart(i,t){const e=Yt(i.px);t.add(j(e.w*.7,.95,e.d*.6,"#5c677d",e.x,.08,e.z));for(let n=0;n<8;n++)t.add(j(.03,.28,e.d*.45,"#222",e.x-e.w*.3+n*(e.w*.6)/7,1.03,e.z));[-1,1].forEach(n=>[-1,1].forEach(s=>t.add(j(.08,.08,.08,"#111",e.x+n*e.w*.3,0,e.z+s*e.d*.25))))},sdgs(i,t,e){const n=Yt(i.px);an(t,n,"#e8f6ee");const s=["#e5243b","#dda63a","#4c9f38","#c5192d","#ff3a21","#26bde2","#fcc30b","#a21942","#fd6925","#dd1367","#fd9d24","#bf8b2e","#3f7e44","#0a97d9","#56c02b","#00689d","#19486a"];t.add(j(n.w*.96,.9,.5,"#f4f1de",n.x,0,n.z+.15));const r=n.w*.92/s.length;s.forEach((l,c)=>{const h=n.minX+n.w*.04+r*(c+.5);t.add(j(r*.82,r*.82,.08,l,h,1.3,n.z-.1))}),t.add(j(n.w*.96,.06,.2,"#666",n.x,1.25+r*.82,n.z-.1));const o=gi(Di(i.id));Ca(e,o,{x0:n.minX+.4,x1:n.maxX-.4,z:n.z+.15,y:.9,depth:.22,maxH:.28});const a=Dn("SDGs 專區",2.4,.5,{bg:"#19486a",fg:"#fff"});a.position.set(n.x,2.45,n.z-.1),t.add(a)},newsRack(i,t){const e=Yt(i.px);t.add(j(e.w*.8,1.4,e.d*.9,"#7f5539",e.x,0,e.z));for(let n=0;n<5;n++)t.add(j(.06,.55,e.d*.75,n%2?"#f1f1f1":"#e0e0e0",e.x+e.w*.45,.4+n*.15,e.z))},lockers(i,t){const e=Yt(i.px),n=Math.floor(e.d/.5),s=Math.min(e.w*.45,.6),r=e.minX+s/2+.05;for(let o=0;o<n;o++){const a=e.minZ+.25+o*(e.d-.5)/Math.max(1,n-1);for(let l=0;l<4;l++)t.add(j(s,.45,.46,l%2?"#8ecae6":"#219ebc",r,l*.47,a)),t.add(j(.02,.05,.12,"#333",r+s/2+.01,l*.47+.2,a+.12))}},magazine(i,t,e){const n=Yt(i.px),s=gi(Di(i.id));t.add(j(n.w*.96,1.25,n.d*.45,"#b08968",n.x,0,n.z)),[-1,1].forEach(r=>{for(let o=0;o<3;o++){const a=.25+o*.35;for(let l=n.minX+.4;l<n.maxX-.4;l+=.32){const c=Ui[Math.floor(s()*Ui.length)];e.books.push({x:l,y:a+.14,z:n.z+r*(n.d*.24),sx:.24,sy:.3,sz:.02,color:c,rx:r*-.25})}}})},flatDisplay(i,t,e){const n=Yt(i.px),s=gi(Di(i.id));cr(t,n.x,n.z,n.w*.96,n.d*.7,"#deb887",.8);for(let r=n.minX+.4;r<n.maxX-.3;r+=.42){const o=Ui[Math.floor(s()*Ui.length)];e.books.push({x:r,y:.82,z:n.z+(s()-.5)*.2,sx:.22,sy:.04,sz:.3,color:o})}},board(i,t){const e=Yt(i.px),n=gi(Di(i.id));t.add(j(e.w,1.3,.08,"#2a9d8f",e.x,.6,e.z)),t.add(j(.06,.6,.06,Gi,e.minX+.2,0,e.z)),t.add(j(.06,.6,.06,Gi,e.maxX-.2,0,e.z));for(let s=0;s<Math.floor(e.w/.6);s++)t.add(j(.36,.45,.02,["#fefae0","#ffd6a5","#caffbf","#bde0fe"][Math.floor(n()*4)],e.minX+.4+s*.6,.9+n()*.3,e.z+.05*(n()>.5?1:-1)))},boardPair(i,t){(i.options.boards||[]).forEach((e,n)=>Wm.board({...i,id:i.id+n,px:e},t)),an(t,Yt(i.px),"#f6f1e7",.6)},newBooks(i,t,e){const n=Yt(i.px),s=gi(Di(i.id));an(t,n,"#fde2e4"),t.add(j(n.w*.9,.4,n.d*.7,"#ffffff",n.x,0,n.z)),t.add(j(n.w*.8,.4,n.d*.45,"#f8edeb",n.x,.4,n.z)),t.add(j(n.w*.6,.4,n.d*.22,"#fec5bb",n.x,.8,n.z)),[.4,.8,1.2].forEach((o,a)=>{const l=n.w*(.43-a*.1);for(let c=n.x-l+.2;c<n.x+l-.2;c+=.45)e.books.push({x:c,y:o+.17,z:n.z+.05-a*.02,sx:.26,sy:.34,sz:.04,color:Ui[Math.floor(s()*Ui.length)],rx:-.2})});const r=Dn("新書展示 NEW",2.4,.45,{bg:"#e63946",fg:"#fff"});r.position.set(n.x,1.95,n.z),t.add(r)},special(i,t,e){const n=Yt(i.px);an(t,n,"#fff1d6");const s=ve("#cfe8f7",{transparent:!0,opacity:.35});t.add(j(n.w,2.4,.06,s,n.x,0,n.maxZ)),t.add(j(.06,2.4,n.d,s,n.minX,0,n.z)),t.add(j(n.w,2.4,.08,"#fdf6ec",n.x,0,n.minZ)),t.add(j(.08,2.4,n.d,"#fdf6ec",n.maxX,0,n.z));const r=gi(Di(i.id));(i.options.shelves||[]).forEach(a=>{const l=Yt(a),c=l.w>=l.d,h=Math.min(c?l.d:l.w,.55),u=c?l.x:l.maxX-h/2,d=c?l.minZ+h/2:l.z,f=c?l.w:l.d;t.add(j(c?f:h,2.1,c?h:f,"#6f4e37",u,0,d));for(let _=0;_<5;_++){const g=.12+_*.4,p=h/2+.01;c?Ca(e,r,{x0:l.minX+.1,x1:l.maxX-.1,z:d+p-.12,y:g,depth:.22,maxH:.33,axis:"x"}):Ca(e,r,{x0:l.minZ+.1,x1:l.maxZ-.1,z:u-p+.12,y:g,depth:.22,maxH:.33,axis:"z"})}}),t.add(j(1.4,.9,.7,"#c9a227",n.x-.6,0,n.z+1.5)),t.add(j(1.3,.35,.6,ve("#e6f2ff",{transparent:!0,opacity:.4}),n.x-.6,.9,n.z+1.5));const o=Dn("梅高特藏區",2.2,.45,{bg:"#7b2cbf",fg:"#fff"});o.position.set(n.x-.6,2.3,n.maxZ+.05),t.add(o)},copier(i,t){const e=Yt(i.px);an(t,e,"#fff3c4"),t.add(j(.9,1,.75,"#e9ecef",e.x-.45,0,e.z)),t.add(j(.9,.12,.75,"#adb5bd",e.x-.45,1,e.z)),t.add(j(.3,.05,.2,"#2ec4b6",e.x-.2,1.12,e.z+.25)),t.add(j(.6,.75,.55,"#dee2e6",e.x+.55,0,e.z)),t.add(j(.55,.3,.5,"#495057",e.x+.55,.75,e.z));const n=Dn(`事務機器
影印・列印・掃描`,1.4,.55,{bg:"#ffb703",fg:"#023047",font:'bold 52px "Noto Sans TC", sans-serif'});n.position.set(e.x,1.75,e.z-.2),t.add(n)},computers(i,t){const e=Yt(i.px);an(t,e,"#e0f4f4"),t.add(j(e.w*.98,.05,.9,"#d4b483",e.x,.7,e.z+.2)),t.add(j(e.w*.98,.7,.05,"#b08968",e.x,0,e.z+.6));const n=ve(Aa,{emissive:"#4cc9f0",emissiveIntensity:.45});(i.options.computers||[]).forEach(s=>{const r=Yt(s);t.add(j(.08,.18,.08,"#333",r.x,.75,r.z+.25)),t.add(j(.62,.4,.05,n,r.x,.9,r.z+.25)),t.add(j(.45,.02,.15,"#222",r.x,.75,r.z-.05)),pr(t,r.x,e.minZ+.25,0,"#2a9d8f")})},counter(i,t){const e=Yt(i.px);an(t,e,"#fff0d9"),(i.options.legs||[]).forEach(r=>{const o=Yt(r);t.add(j(o.w*.85,1.05,o.d*.85,"#e09f3e",o.x,0,o.z)),t.add(j(o.w*.95,.06,o.d*.95,"#f4f1de",o.x,1.05,o.z))});const n=Yt(i.options.legs[0]);t.add(j(.5,.35,.05,Aa,n.x+.1,1.11,n.z-1.5)),t.add(j(.3,.08,.25,"#264653",n.x,1.11,n.z)),pr(t,n.maxX+.6,n.z-1.5,-Math.PI/2,"#9c6644"),pr(t,n.maxX+.6,n.z+1.2,-Math.PI/2,"#9c6644");const s=Dn("借還書櫃台",2.2,.5,{bg:"#e09f3e",fg:"#fff"});s.rotation.y=-Math.PI/2,s.position.set(n.minX-.02,1.7,n.z),t.add(s)},stairs(i,t){const e=Yt(i.px);an(t,e,"#d8f3f0");const n=qt.floorHeight,s=Gm,r=ve("#c8d5e0"),o=h=>{const u=Ye(h.xStart,h.y1),d=Ye(h.xEnd,h.y2),f=14,_=(d.x-u.x)/f,g=Math.abs(d.z-u.z),p=(u.z+d.z)/2;for(let C=0;C<f;C++){const T=(h.levelStart+(h.levelEnd-h.levelStart)*(C+1)/f)*n;t.add(j(Math.abs(_),T,g,r,u.x+_*(C+.5),0,p))}const m=h.levelStart*n+.95,y=h.levelEnd*n+.95,x=Math.hypot(d.x-u.x,y-m),M=j(x,.06,.06,"#e76f51",(u.x+d.x)/2,(m+y)/2-.03,Math.min(u.z,d.z));M.rotation.z=Math.atan2(y-m,d.x-u.x),t.add(M)};o(s.flightA),o(s.flightB);const a=Ye(s.landing.x1,s.landing.y1),l=Ye(s.landing.x2,s.landing.y2);t.add(j(l.x-a.x,s.landing.level*n,l.z-a.z,r,(a.x+l.x)/2,0,(a.z+l.z)/2));const c=Dn("往 2F ↑",1.4,.4,{bg:"#00a3a3",fg:"#fff"});c.position.set(e.minX+.6,1.9,e.maxZ-.3),t.add(c)},stairwell(i,t){const e=Yt(i.px);an(t,e,"#d8f3f0");const n="#e76f51",s=Yt([1712,985,1837,1102]);t.add(j(s.w,1,.06,n,s.x,0,s.minZ)),t.add(j(.06,1,s.d,n,s.maxX,0,s.z));const r=Dn("往 1F ↓",1.4,.4,{bg:"#00a3a3",fg:"#fff"});r.position.set(e.x,1.9,e.minZ+.4),t.add(r)},bookshelf(i,t,e){const n=Yt(i.px),s=gi(Di(i.id));an(t,n,"#dce9f7");const r=.9,o=2.1,a=n.d*.96;t.add(j(r,o,a,"#a47148",n.x,0,n.z)),t.add(j(r+.1,.08,a+.1,Vm,n.x,o,n.z));for(let c=0;c<6;c++){const h=.1+c*.34;[-1,1].forEach(u=>{t.add(j(.06,.03,a,lb,n.x+u*(r/2+.01),h-.03,n.z)),Ca(e,s,{x0:n.minZ+.1,x1:n.maxZ-.1,z:n.x+u*(r/2-.1),y:h,depth:.2,maxH:.3,axis:"z"})})}const l=Dn(`書架 ${i.options.index}`,.9,.32,{bg:"#1d3557",fg:"#fff"});l.position.set(n.x,o+.32,n.maxZ+.02),t.add(l)},marker(i,t){const e=Yt(i.px);t.add(j(e.w,.25,e.d,"#264653",e.x,0,e.z))}};function db(i,t){const e=new pe;e.name=i.id;const n=Wm[i.kind];return n&&n(i,e,t),e}const Gt=Yt(Ue.outline);function fb(i){i.updateMatrixWorld(!0);const t=new Map,e=[];i.traverse(s=>{if(!s.isMesh)return;if(s.material.map||s.userData.noMerge){e.push(s);return}const r=s.geometry.clone().applyMatrix4(s.matrixWorld);t.has(s.material)||t.set(s.material,[]),t.get(s.material).push(r)});const n=new pe;return n.name=i.name,t.forEach((s,r)=>{const o=$1(s,!1);if(s.forEach(l=>l.dispose()),!o)return;const a=new Zt(o,r);a.castShadow=!r.transparent,a.receiveShadow=!0,n.add(a)}),e.forEach(s=>{s.updateMatrixWorld(!0);const r=s.clone();s.matrixWorld.decompose(r.position,r.quaternion,r.scale),n.add(r)}),n}function pb(i){const t=new ns;return i.updateMatrixWorld(!0),i.traverse(e=>{e.isMesh&&!e.userData.footprint&&t.expandByObject(e)}),t}function mb(i){if(!i.length)return null;const t=new Ei(1,1,1),e=new wM(t,new Fp({roughness:.7,flatShading:!0}),i.length),n=new Ce,s=new jt;return i.forEach((r,o)=>{n.position.set(r.x,r.y,r.z),n.rotation.set(r.rx||0,0,r.rz||0),n.scale.set(r.sx,r.sy,r.sz),n.updateMatrix(),e.setMatrixAt(o,n.matrix),e.setColorAt(o,s.set(r.color))}),e.castShadow=!1,e.receiveShadow=!0,e}function _b(i,t){const e=new pe,n=.3,s=qt.wallHeight,r=ve(i===1?"#f4efe6":"#f7f2ea"),o=ve("#8ecae6",{transparent:!0,opacity:.55,roughness:.15,emissive:"#000000"});o.userData.isWindow=!0;const a={north:{a:Gt.minX,b:Gt.maxX,fixed:Gt.minZ,axis:"x"},south:{a:Gt.minX,b:Gt.maxX,fixed:Gt.maxZ,axis:"x"},west:{a:Gt.minZ,b:Gt.maxZ,fixed:Gt.minX,axis:"z"},east:{a:Gt.minZ,b:Gt.maxZ,fixed:Gt.maxX,axis:"z"}};return Object.entries(a).forEach(([l,c])=>{const h=t.filter(f=>f.side===l).map(f=>c.axis==="x"?[Ye(f.from,0).x,Ye(f.to,0).x]:[Ye(0,f.from).z,Ye(0,f.to).z]);let u=c.a;const d=[];h.forEach(([f,_])=>{d.push([u,f]),u=_}),d.push([u,c.b]),d.forEach(([f,_])=>{const g=_-f;if(g<=.05)return;const p=(f+_)/2;c.axis==="x"?e.add(j(g+n,s,n,r,p,0,c.fixed)):e.add(j(n,s,g,r,c.fixed,0,p));const m=Math.floor(g/4);for(let y=0;y<m;y++){const x=f+g/m*(y+.5),M=Math.min(2.6,g/m-.8),C=l==="north"||l==="west"?-n/2-.02:n/2+.02,T=c.axis==="x"?j(M,1.5,.06,o,x,1.1,c.fixed+C):j(.06,1.5,M,o,c.fixed+C,1.1,x);T.castShadow=!1,e.add(T)}})}),e}function gb(i){const t=new pe,e=new Ip,n=.15;if(e.moveTo(Gt.minX-n,-(Gt.minZ-n)),e.lineTo(Gt.maxX+n,-(Gt.minZ-n)),e.lineTo(Gt.maxX+n,-(Gt.maxZ+n)),e.lineTo(Gt.minX-n,-(Gt.maxZ+n)),e.closePath(),i===2){const o=Yt(Q1),a=new _h;a.moveTo(o.minX,-o.minZ),a.lineTo(o.minX,-o.maxZ),a.lineTo(o.maxX,-o.maxZ),a.lineTo(o.maxX,-o.minZ),a.closePath(),e.holes.push(a)}const s=new au(e,{depth:qt.slabThickness,bevelEnabled:!1});s.rotateX(-Math.PI/2),s.translate(0,-.3,0);const r=new Zt(s,[ve(i===1?"#efe3cf":"#ece0cc",{flatShading:!1}),ve("#c9b99f")]);return r.receiveShadow=!0,r.castShadow=i===2,t.add(r),t}function vb(){const i=new pe;i.add(j(Gt.w+1.2,.35,Gt.d+1.2,"#5c7c8a",Gt.x,qt.wallHeight,Gt.z)),i.add(j(Gt.w+1.3,.5,.25,"#e9c46a",Gt.x,qt.wallHeight+.35,Gt.minZ-.5)),i.add(j(Gt.w+1.3,.5,.25,"#e9c46a",Gt.x,qt.wallHeight+.35,Gt.maxZ+.5)),i.add(j(.25,.5,Gt.d+1.2,"#e9c46a",Gt.minX-.5,qt.wallHeight+.35,Gt.z)),i.add(j(.25,.5,Gt.d+1.2,"#e9c46a",Gt.maxX+.5,qt.wallHeight+.35,Gt.z)),i.add(j(3,1,2,"#adb5bd",Gt.minX+6,qt.wallHeight+.35,Gt.minZ+4)),i.add(j(10,.15,5,"#7cb518",Gt.x+4,qt.wallHeight+.35,Gt.z));const t=Dn("楊梅高中圖書館",9,1.4,{bg:"#ffffff",fg:"#1d3557",border:"#e9c46a"});return t.position.set(Gt.x-2,qt.wallHeight+.95,Gt.maxZ+.66),i.add(t),i}const xb=new Set(["f1-entrance","f1-counter","f1-opac","f1-meigao","f1-machines","f1-newbooks","f1-sdgs","f1-discussion","f1-stairs","f1-office","f1-magazine-1","f2-stacks","f2-reading-center","f2-stairs","f2-discussion-w","f2-discussion-e"]);function yb(i){var n;const t=document.createElement("button");t.className=xb.has(i.id)?"zone-label major":"zone-label",t.type="button",t.dataset.zone=i.id,t.style.setProperty("--c",((n=Uo[i.category])==null?void 0:n.color)||"#333"),t.textContent=i.name;const e=new LS(t);return e.userData.zoneId=i.id,e}const Mb=new ei({visible:!1});class Sb{constructor(){this.root=new pe,this.root.name="library",this.floors={},this.zoneObjects=new Map,this.pickables=[],[1,2].forEach(t=>{const e=new pe;e.name=`floor-${t}`,e.position.y=t===1?0:qt.floorHeight;const n=_b(t,t===1?Z1:J1),s=gb(t),r=new pe;e.add(s,n,r);const o={group:e,walls:n,slab:s,zonesGroup:r,labels:new pe};e.add(o.labels),t===2&&(o.roof=vb(),e.add(o.roof)),this.floors[t]=o,this.root.add(e),this.buildZones(t)})}buildZones(t){const e=this.floors[t];[...e.zonesGroup.children].forEach(r=>{e.zonesGroup.remove(r),r.traverse(o=>o.isInstancedMesh&&o.geometry.dispose())}),[...e.labels.children].forEach(r=>{var o;(o=r.element)==null||o.remove(),e.labels.remove(r)});for(const[r,o]of this.zoneObjects)o.zone.floor===t&&this.zoneObjects.delete(r);this.pickables=this.pickables.filter(r=>r.userData.floor!==t);const n={books:[]};Yn.filter(r=>r.floor===t).forEach(r=>{const o=db(r,n),a=pb(o),l=fb(o);l.userData.zoneId=r.id,e.zonesGroup.add(l);const c=Yt(r.px),h=a.isEmpty()?.2:Math.max(.15,a.max.y),u=new Zt(new Ei(c.w,h,c.d),Mb);u.position.set(c.x,h/2,c.z),u.userData={zoneId:r.id,floor:t,area:c.w*c.d},r.interactionType!=="none"&&(e.zonesGroup.add(u),this.pickables.push(u));let d=null;!r.hidden&&r.interactionType!=="none"&&(d=yb(r),d.position.set(c.x,h+.5,c.z),e.labels.add(d)),this.zoneObjects.set(r.id,{zone:r,group:l,pick:u,label:d,contentBox:a,top:h,rect:c})});const s=mb(n.books);s&&e.zonesGroup.add(s)}rebuildAll(){[1,2].forEach(t=>this.buildZones(t))}}const Te=Yt(Ue.outline),jn=Ye(973,0).x;function bb(i){const t=new pe,e=1.6+i()*1.4;t.add(j(.35,e,.35,"#7f5539",0,0,0));const n=ve(["#4caf50","#43a047","#66bb6a","#2e7d32"][Math.floor(i()*4)]);if(i()<.5){const r=new Zt(new Nr(1.5+i(),3+i()*1.5,6),n);r.position.y=e+1.4,r.castShadow=!0,t.add(r)}else{const r=new Zt(new Er(1.5+i()*.8,0),n);r.position.y=e+1.1,r.castShadow=!0,t.add(r)}return t}function Eb(i){const t=new pe;t.add(j(.36,.7,.24,"#2b2d42",0,0,0)),t.add(j(.44,.6,.28,i,0,.7,0));const e=new Zt(new Ho(.2,8,6),ve("#f1c27d"));return e.position.y=1.5,e.castShadow=!0,t.add(e),t.add(j(.42,.12,.42,"#3d2c1e",0,1.62,0)),t}function wb(){const i=new pe;i.name="island";const t=gi(20251026),e=33,n=25,s=new Zt(new bo(1,1,1.2,14),ve("#8bc34a"));s.scale.set(e,1,n),s.position.y=-.95,s.receiveShadow=!0,i.add(s);const r=new Zt(new bo(1,.96,1.4,14),ve("#a1887f"));r.scale.set(e,1,n),r.position.y=-2.2,i.add(r);const o=new Nr(1,1,14,3),a=o.attributes.position;for(let A=0;A<a.count;A++)a.getY(A)<.49&&(a.setX(A,a.getX(A)*(.85+t()*.3)),a.setZ(A,a.getZ(A)*(.85+t()*.3)));o.computeVertexNormals();const l=new Zt(o,ve("#795548"));l.rotation.x=Math.PI,l.scale.set(e*.96,14,n*.96),l.position.y=-2.9-7,i.add(l),i.add(j(Te.w+4,.06,Te.d+4,"#d6ccc2",Te.x,-.36,Te.z));const c=n-Te.maxZ-1;i.add(j(4,.08,c,"#e9d8a6",jn,-.34,Te.maxZ+c/2+1));for(let A=0;A<c/1.2;A++)i.add(j(4.1,.02,.08,"#cdb47b",jn,-.25,Te.maxZ+2+A*1.2));i.add(j(9,.07,5,"#e9d8a6",jn,-.34,Te.maxZ+6));const h=new pe;h.add(j(.15,2.2,.15,"#5d4037",-1.4,0,0)),h.add(j(.15,2.2,.15,"#5d4037",1.4,0,0));const u=Dn(`楊梅高中
圖書館 3D 探索島`,3,1.4,{bg:"#fefae0",fg:"#283618",border:"#bc6c25",font:'bold 56px "Noto Sans TC", sans-serif'});u.position.y=2,h.add(u),h.position.set(jn+6,-.3,Te.maxZ+6.5),h.rotation.y=-.35,i.add(h);const d=new pe;d.add(j(.12,1.8,.12,"#6d4c41",0,0,0));const f=Dn("← 圖書館大門",1.8,.45,{bg:"#e76f51",fg:"#fff",font:'bold 56px "Noto Sans TC", sans-serif'});f.position.y=1.6,d.add(f),d.position.set(jn-3.2,-.3,Te.maxZ+9),i.add(d);const _=(A,L)=>A>Te.minX-3&&A<Te.maxX+3&&L>Te.minZ-3&&L<Te.maxZ+3||Math.abs(A-jn)<6&&L>Te.maxZ||(A/e)**2+(L/n)**2>.82;let g=0;for(let A=0;A<400&&g<46;A++){const L=(t()*2-1)*e,v=(t()*2-1)*n;if(_(L,v))continue;const S=bb(t);S.position.set(L,-.35,v),S.scale.setScalar(.8+t()*.5),i.add(S),g++}const p=["#ff6b6b","#ffd93d","#f78fb3","#c084fc","#ffffff"];[[-1,1],[1,1]].forEach(([A])=>{const L=jn+A*4.2;i.add(j(2.4,.35,5,"#6d4c41",L,-.35,Te.maxZ+3.5));for(let v=0;v<26;v++){const S=new Zt(new Er(.16,0),ve(p[v%p.length]));S.position.set(L+(t()-.5)*2.1,.12,Te.maxZ+1.2+t()*4.6),i.add(S)}});for(let A=0;A<18;A++){const L=t()*Math.PI*2,v=.88+t()*.07,S=new Zt(new Er(.6+t()*.5,0),ve("#558b2f"));S.position.set(Math.cos(L)*e*v,-.1,Math.sin(L)*n*v),S.castShadow=!0,i.add(S)}const m=[];["#e63946","#457b9d","#f4a261","#2a9d8f"].forEach((A,L)=>{const v=Eb(A);v.scale.setScalar(.85),v.position.set(jn+(L%2?1:-1),-.3,Te.maxZ+3+L*3),i.add(v),m.push({obj:v,phase:L*1.7,lane:L%2?1:-1})});const y=new pe;for(let A=0;A<7;A++){const L=new pe;for(let v=0;v<3;v++){const S=new Zt(new Er(1.6+t()*1.2,0),ve("#ffffff",{transparent:!0,opacity:.92}));S.position.set(v*2-2,t()*.6,t()),L.add(S)}L.position.set((t()*2-1)*60,18+t()*10,(t()*2-1)*45),L.userData.speed=.4+t()*.6,y.add(L)}i.add(y);const x=new Ne,M=[];for(let A=0;A<500;A++){const L=t()*Math.PI*2,v=t()*Math.PI*.45,S=160;M.push(S*Math.sin(v)*Math.cos(L),S*Math.cos(v),S*Math.sin(v)*Math.sin(L))}x.setAttribute("position",new le(M,3));const C=new TM(x,new Ap({color:"#ffffff",size:.8,sizeAttenuation:!0}));C.visible=!1,i.add(C);const T=[];return[-1,1].forEach(A=>{[6,13].forEach(L=>{const v=new pe;v.add(j(.12,3,.12,"#37474f",0,0,0));const S=new Zt(new Ho(.25,8,6),ve("#fff3b0",{emissive:"#ffd166",emissiveIntensity:.2}));S.position.y=3.1,v.add(S),v.position.set(jn+A*2.6,-.3,Te.maxZ+L),i.add(v),T.push(S)})}),{group:i,update:(A,L)=>{m.forEach(v=>{const S=(Math.sin(A*.25+v.phase)+1)/2,N=Te.maxZ+2.5+S*(n-Te.maxZ-5),F=Math.cos(A*.25+v.phase);v.obj.position.z=N,v.obj.position.x=jn+v.lane*1.1,v.obj.rotation.y=F>0?0:Math.PI,v.obj.position.y=-.3+Math.abs(Math.sin(A*6+v.phase))*.06}),y.children.forEach(v=>{v.position.x+=v.userData.speed*L,v.position.x>70&&(v.position.x=-70)})},stars:C,lamps:T}}const oo=new Map;function Ie(i,t){return oo.has(i)||oo.set(i,new Set),oo.get(i).add(t),()=>oo.get(i).delete(t)}function ge(i,t){(oo.get(i)||[]).forEach(e=>{try{e(t)}catch(n){console.error(`[event ${i}]`,n)}})}const qm="ymsh-lib-settings",yl="ymsh-lib-progress",Tb={sound:!0,device:"auto",layout:"standard",lang:"zh-TW",fontSize:"standard",performance:"standard",labels:!0,voice:!1,animSpeed:1,night:!1,autoRotate:!1};function Xm(i,t){try{const e=JSON.parse(localStorage.getItem(i));return e&&typeof e=="object"?e:t}catch{return t}}function Ml(i,t){try{localStorage.setItem(i,JSON.stringify(t))}catch{}}const Bt={...Tb,...Xm(qm,{})};function gs(i,t){Bt[i]=t,Ml(qm,Bt),ge("settings",{key:i,value:t})}function $m(){const i=new Date().toISOString();return{nickname:"",explored:[],quests:{},points:0,quiz:{best:null,last:null,attempts:0,wrong:[]},findFound:[],rulesAnswered:{},borrowCompleted:0,badge:!1,timeSec:0,startedAt:i,lastStudy:i}}const At={...$m(),...Xm(yl,{})};function ts(){At.lastStudy=new Date().toISOString(),Ml(yl,At),ge("progress",At)}function Ab(i){At.explored.includes(i)||(At.explored.push(i),ts())}function Uf(i=!1){const t=At.nickname;Object.keys(At).forEach(e=>delete At[e]),Object.assign(At,$m()),i&&(At.nickname=t),ts()}let Nf=0;setInterval(()=>{document.visibilityState==="visible"&&(At.timeSec+=5,Nf+=1,Nf%6===0&&Ml(yl,At))},5e3);window.addEventListener("beforeunload",()=>Ml(yl,At));const Kn=qt.floorHeight,mi=Yt(Ue.outline);Be.ticker.lagSmoothing(0);const Cb=["full","explode","f1","f2","interior","compare","validate"];class Rb{constructor(t){this.container=t,this.mode="explode",this.floor=1,this.explode=qt.explodeDefault,this.selected=null,this.clock=new pS,this.lastFrame=0,this.overlays={1:new pe,2:new pe};const e=Bt.performance;this.renderer=new MM({antialias:e!=="saver",alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zf,this.renderer.outputColorSpace=Mn,this.renderer.toneMapping=Kf,this.renderer.toneMappingExposure=1.05,t.appendChild(this.renderer.domElement),this.renderer.domElement.className="scene-canvas",this.labelRenderer=new DS,this.labelRenderer.domElement.className="label-layer",t.appendChild(this.labelRenderer.domElement),this.scene=new SM,this.camera=new bn(40,1,.1,600),this.camera.position.set(34,36,48),this.controls=new vS(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.maxPolarAngle=Math.PI*.47,this.controls.minDistance=4,this.controls.maxDistance=140,this.controls.screenSpacePanning=!0,this.controls.autoRotateSpeed=.6,this.controls.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.controls.addEventListener("start",()=>{Be.killTweensOf(this.camera.position),Be.killTweensOf(this.controls.target)}),this.setupLights(),this.island=wb(),this.scene.add(this.island.group),this.model=new Sb,this.scene.add(this.model.root),this.model.floors[1].group.add(this.overlays[1]),this.model.floors[2].group.add(this.overlays[2]),this.setupConnectors(),this.setupHighlight(),this.pathGroup=new pe,this.scene.add(this.pathGroup),this.arrows=[],this.setupAvatar(),this.raycaster=new mS,this.pointer=new nt,this.bindPointer(),this.labelRenderer.domElement.addEventListener("click",n=>{var r,o,a;const s=(a=(o=(r=n.target).closest)==null?void 0:o.call(r,".zone-label"))==null?void 0:a.dataset.zone;s&&this.handleZoneClick(s)}),new ResizeObserver(()=>this.resize()).observe(t),this.resize(),this.applyPerformance(Bt.performance),this.setNight(Bt.night,!0),this.setLabels(Bt.labels),this.setAutoRotate(Bt.autoRotate),this.setMode("explode",{instant:!0}),this.renderer.setAnimationLoop(()=>this.loop())}dur(t){return t/(Bt.animSpeed||1)}setupLights(){this.hemi=new lS("#e8f4ff","#7a8b5a",1.1),this.scene.add(this.hemi),this.sun=new dS("#fff4e0",2.3),this.sun.position.set(-30,50,30),this.sun.castShadow=!0;const t=this.sun.shadow;t.mapSize.set(2048,2048),t.camera.left=-45,t.camera.right=45,t.camera.top=35,t.camera.bottom=-35,t.camera.near=1,t.camera.far=140,t.bias=-6e-4,t.normalBias=.03,this.scene.add(this.sun),this.ambient=new fS("#ffffff",.25),this.scene.add(this.ambient),this.interiorLights=[],[1,2].forEach(e=>{[[-12,-4],[0,-4],[12,-4],[-8,5],[8,5]].forEach(([n,s])=>{const r=new hS("#ffd8a8",0,16,1.6);r.position.set(n,3,s),r.userData.floor=e,this.interiorLights.push(r)})})}setupConnectors(){const t=[[mi.minX,mi.minZ],[mi.maxX,mi.minZ],[mi.minX,mi.maxZ],[mi.maxX,mi.maxZ]],e=Ye(1775,1017),n=[...t,[e.x,e.z]],s=new Ne;s.setAttribute("position",new le(new Array(n.length*6).fill(0),3)),this.connectorPts=n,this.connectors=new Vd(s,new zp({color:"#4895ef",dashSize:.5,gapSize:.35,transparent:!0,opacity:.8})),this.scene.add(this.connectors),this.interiorLights.forEach(r=>this.model.floors[r.userData.floor].group.add(r))}updateConnectors(){const t=this.connectors.geometry.attributes.position,e=this.model.floors[2].group.position.y-qt.slabThickness;this.connectorPts.forEach(([n,s],r)=>{t.setXYZ(r*2,n,qt.wallHeight*this.model.floors[1].walls.scale.y,s),t.setXYZ(r*2+1,n,e,s)}),t.needsUpdate=!0,this.connectors.computeLineDistances()}setMode(t,{instant:e=!1,floor:n}={}){if(!Cb.includes(t))return;n&&(this.floor=n),this.mode=t;const s=this.model.floors[1],r=this.model.floors[2],o=e?0:this.dur(1.1),a=t==="full"?1:qt.cutawayWallScale,l=t==="explode",c=!(["f1","interior","compare","validate"].includes(t)&&this.floor===1),h=["compare","validate"].includes(t)&&this.floor===2;[s,r].forEach(d=>Be.to(d.walls.scale,{y:a,duration:o,ease:"power2.inOut"})),r.roof.visible=t==="full",r.group.visible=c,s.group.visible=!h;const u=l?Kn+this.explode:Kn;Be.to(r.group.position,{y:u,duration:o,ease:"power2.inOut",onUpdate:()=>this.updateConnectors(),onComplete:()=>this.updateConnectors()}),this.connectors.visible=l,this.controls.maxPolarAngle=["f1","f2","compare","validate"].includes(t)?Math.PI*.32:Math.PI*.47,this.refreshLabels(),this.flyTo(this.presetFor(t),o),ge("mode",{mode:t,floor:this.floor})}setFloor(t){this.floor=t,["full","explode"].includes(this.mode)?this.setMode(t===1?"f1":"f2"):["f1","f2"].includes(this.mode)?this.setMode(t===1?"f1":"f2"):this.setMode(this.mode),ge("floor",t)}floorY(t){return this.model.floors[t].group.position.y}targetFloorY(t){return t===1?0:this.mode==="explode"?Kn+this.explode:Kn}fitDistance(t,e,n=1.12){const s=Math.tan(Fa.degToRad(this.camera.fov/2)),r=Math.max(.3,this.camera.aspect);return Math.max(e/2/s,t/2/(s*r))*n}presetFor(t){const e=this.explode,n=(s,r,o,a)=>{const l=Math.hypot(r,o,a);return[r/l*s,o/l*s,a/l*s]};switch(t){case"full":{const s=n(this.fitDistance(this.camera.aspect<.8?42:50,34),.55,.55,.75);return{pos:[s[0],s[1]+3.5,s[2]],target:[0,3.5,0]}}case"explode":{const s=(Kn+e)/2+1,r=n(this.fitDistance(this.camera.aspect<.8?44:52,38+e*1.2),.5,.6,.75);return{pos:[r[0],r[1]+s,r[2]],target:[0,s,0]}}case"f1":case"f2":case"compare":case"validate":{const s=t==="f1"?1:t==="f2"?2:this.floor,r=t==="f2"?Kn:this.targetFloorY(s),o=this.fitDistance(qt.width+1,qt.depth+1,t==="compare"||t==="validate"?1.05:1.12),a=t==="f1"||t==="f2"?.3:.06;if(t==="validate"){const l=window.innerWidth>860,c=l?this.fitDistance(qt.width*2.15,qt.depth+1,1):this.fitDistance(qt.width+1,qt.depth*2.2,1.02),h=l?qt.width*.5:0,u=l?.4:qt.depth*.5;return{pos:[h,r+c,u+c*.04],target:[h,r,u]}}return{pos:[0,r+o,o*a],target:[0,r,.4]}}case"interior":{const s=this.targetFloorY(this.floor),r=n(this.fitDistance(30,20),-.15,.75,.75);return{pos:[r[0],r[1]+s,r[2]],target:[0,s,0]}}default:return{pos:[30,30,44],target:[0,2,0]}}}flyTo({pos:t,target:e},n=this.dur(1.1)){if(Be.killTweensOf(this.camera.position),Be.killTweensOf(this.controls.target),!n){this.camera.position.set(...t),this.controls.target.set(...e),this.controls.update();return}Be.to(this.camera.position,{x:t[0],y:t[1],z:t[2],duration:n,ease:"power2.inOut"}),Be.to(this.controls.target,{x:e[0],y:e[1],z:e[2],duration:n,ease:"power2.inOut"})}home(){this.clearSelection(),this.flyTo(this.presetFor(this.mode))}birdView(){const t=this.mode==="explode"?(Kn+this.explode)/2:2;this.flyTo({pos:[.01,78,18],target:[0,t,0]})}setExplode(t){this.explode=t,this.mode==="explode"&&(Be.to(this.model.floors[2].group.position,{y:Kn+t,duration:this.dur(.4),onUpdate:()=>this.updateConnectors()}),this.refreshPath())}bindPointer(){const t=this.renderer.domElement;let e=null;t.addEventListener("pointerdown",s=>{e={x:s.clientX,y:s.clientY,t:performance.now()}}),t.addEventListener("pointerup",s=>{if(!e)return;const r=Math.hypot(s.clientX-e.x,s.clientY-e.y);if(e=null,r>8)return;const o=this.pick(s);o?this.handleZoneClick(o):ge("zone:miss")});let n=0;t.addEventListener("pointermove",s=>{s.pointerType!=="mouse"||n||(n=requestAnimationFrame(()=>{n=0;const r=this.pick(s);this.setHover(r),t.style.cursor=r?"pointer":"grab"}))}),t.addEventListener("pointerleave",()=>this.setHover(null))}pick(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera);const n=this.model.pickables.filter(a=>this.model.floors[a.userData.floor].group.visible),s=this.raycaster.intersectObjects(n,!1);if(!s.length)return null;const r=s[0].object.userData.floor,o=s.filter(a=>a.object.userData.floor===r);return o.sort((a,l)=>a.object.userData.area-l.object.userData.area),o[0].object.userData.zoneId}handleZoneClick(t){const e=$i(t);e&&(this.mode==="full"&&(this.floor=e.floor,this.setMode("interior")),this.select(t),ge("zone:click",e))}setupHighlight(){const t=new Ei(1,1,1);this.selBox=new Zt(t,new ei({color:"#ffb703",transparent:!0,opacity:.28,depthWrite:!1})),this.selEdges=new Vd(new zM(t),new pl({color:"#fb8500"})),this.selBox.add(this.selEdges),this.selBox.visible=!1,this.selBox.renderOrder=5,this.hoverBox=new Zt(t,new ei({color:"#8ecae6",transparent:!0,opacity:.22,depthWrite:!1})),this.hoverBox.visible=!1,this.scene.add(this.selBox,this.hoverBox)}placeBox(t,e){const n=this.model.zoneObjects.get(e);if(!n)return!1;const s=n.rect,r=Math.max(.3,n.top)+.15,o=this.model.floors[n.zone.floor].group;return t.parent!==o&&o.add(t),t.position.set(s.x,r/2,s.z),t.scale.set(s.w+.2,r,s.d+.2),t.visible=!0,!0}setHover(t){if(!t||t===this.selected){this.hoverBox.visible=!1,ge("zone:hover",null);return}this.placeBox(this.hoverBox,t),ge("zone:hover",$i(t))}select(t,{fly:e=!0}={}){var s;const n=$i(t);n&&(this.selected=t,this.placeBox(this.selBox,t),Be.killTweensOf(this.selBox.material),this.selBox.material.opacity=.45,Be.to(this.selBox.material,{opacity:.15,duration:.8,repeat:-1,yoyo:!0,ease:"sine.inOut"}),document.querySelectorAll(".zone-label.selected").forEach(r=>r.classList.remove("selected")),(s=document.querySelector(`.zone-label[data-zone="${t}"]`))==null||s.classList.add("selected"),e&&this.focusZone(t),ge("zone:select",n))}clearSelection(){this.selected=null,this.selBox.visible=!1,Be.killTweensOf(this.selBox.material),document.querySelectorAll(".zone-label.selected").forEach(t=>t.classList.remove("selected")),ge("zone:select",null)}focusZone(t){const e=this.model.zoneObjects.get(t);if(!e)return;const n=e.zone,s=n.floor!==this.floor||n.floor===1&&this.model.floors[2].group.visible&&!["explode"].includes(this.mode);["full","f1","f2","interior"].includes(this.mode)&&s?(this.floor=n.floor,this.setMode(this.mode==="full"||this.mode==="interior"?"interior":n.floor===1?"f1":"f2")):["compare","validate"].includes(this.mode)&&n.floor!==this.floor&&(this.floor=n.floor,this.setMode(this.mode));const r=this.targetFloorY(n.floor),o=e.rect,a=Math.max(o.w,o.d),l=Math.min(28,Math.max(10,a*1.1));let c;if(["compare","validate"].includes(this.mode))c=[o.x,r+30,o.z+2];else if(this.mode==="explode"&&n.floor===1){const h=Kn+this.explode-qt.slabThickness-1.2;c=[o.x+l*.2,Math.max(3.5,Math.min(h,l*.6)),Math.max(o.z+l*1.2,mi.maxZ+4)]}else c=[o.x+l*.25,r+Math.max(8,l*.9),o.z+l*.8];c[0]=Fa.clamp(c[0],-32,32),c[2]=Fa.clamp(c[2],-26,34),this.flyTo({pos:c,target:[o.x,r+.5,o.z]})}setLabels(t){this.labelsOn=t,this.labelRenderer.domElement.style.display=t?"":"none",this.refreshLabels()}refreshLabels(){[1,2].forEach(n=>{this.model.floors[n].labels.visible=!!this.labelsOn});const t=this.container.clientWidth<700,e=["full","explode"].includes(this.mode)||t&&this.mode!=="interior";this.labelRenderer.domElement.classList.toggle("dense",e)}setupAvatar(){const t=new pe;t.add(j(.4,.7,.26,"#1d3557",0,0,0)),t.add(j(.48,.62,.3,"#e63946",0,.7,0));const e=new Zt(new Ho(.22,10,8),ve("#f1c27d"));e.position.y=1.55,t.add(e);const n=new Zt(new Nr(.3,.6,4),ve("#ffb703",{emissive:"#ffb703",emissiveIntensity:.6}));n.rotation.x=Math.PI,n.position.y=2.4,t.add(n),t.visible=!1,this.avatar=t,this.avatarMarker=n,this.scene.add(t)}pathPointWorld(t){const e=Ye(t.px[0],t.px[1]);let n;return t.level>=1?n=this.floorY(2):n=t.level*Kn,new D(e.x,n+.06,e.z)}showPath(t){this.currentPath=t,this.refreshPath()}refreshPath(){this.pathGroup.clear(),this.arrows=[];const t=this.currentPath;if(!t||t.length<2)return;const e=t.map(h=>this.pathPointWorld(h));this.pathPts=e;const n=new mh;for(let h=0;h<e.length-1;h++)n.add(new ph(e[h],e[h+1]));this.pathCurve=n;const s=n.getLength(),r=new Zt(new cu(n,Math.max(8,e.length*12),.09,6,!1),new ei({color:"#ffb703"}));this.pathGroup.add(r);const o=new Nr(.32,.7,3);o.rotateX(Math.PI/2);const a=new ei({color:"#fb5607"}),l=Math.max(3,Math.floor(s/1.4));for(let h=0;h<l;h++){const u=new Zt(o,a);this.pathGroup.add(u),this.arrows.push(u)}this.pathLen=s;const c=new Zt(new lu(.6,.1,6,20),new ei({color:"#fb5607"}));c.rotation.x=Math.PI/2,c.position.copy(e[e.length-1]).add(new D(0,.05,0)),this.pathGroup.add(c)}clearPath(){this.currentPath=null,this.pathGroup.clear(),this.arrows=[]}placeAvatar(t){this.avatar.visible=!0,this.avatar.position.copy(this.pathPointWorld(t))}hideAvatar(){this.avatar.visible=!1}walkAvatar(t){return new Promise(e=>{if(!t||t.length<2)return e();const n=t.map(o=>this.pathPointWorld(o)),s=new mh;for(let o=0;o<n.length-1;o++)s.add(new ph(n[o],n[o+1]));const r={t:0};this.avatar.visible=!0,Be.to(r,{t:1,duration:this.dur(Math.min(7,s.getLength()/5)),ease:"none",onUpdate:()=>{const o=s.getPointAt(r.t),a=s.getPointAt(Math.min(1,r.t+.01));this.avatar.position.copy(o),a.distanceToSquared(o)>1e-6&&(this.avatar.rotation.y=Math.atan2(a.x-o.x,a.z-o.z))},onComplete:e})})}setNight(t,e=!1){this.night=t,document.body.classList.toggle("night",t);const n=e?0:this.dur(1.2);Be.to(this.hemi,{intensity:t?.28:1.1,duration:n}),Be.to(this.sun,{intensity:t?.35:2.3,duration:n}),this.sun.color.set(t?"#9db4ff":"#fff4e0"),this.hemi.color.set(t?"#5c6f9c":"#e8f4ff"),this.interiorLights.forEach((s,r)=>{const o=Bt.performance!=="saver"||r%5===0;Be.to(s,{intensity:t&&o?22:0,duration:n})}),this.island.stars.visible=t,this.island.lamps.forEach(s=>s.material.emissiveIntensity=t?2.2:.2),this.scene.traverse(s=>{var r,o;s.isMesh&&((o=(r=s.material)==null?void 0:r.userData)!=null&&o.isWindow)&&(s.material.emissive.set(t?"#ffcf70":"#000000"),s.material.emissiveIntensity=t?.7:0)})}setAutoRotate(t){this.controls.autoRotate=t}applyPerformance(t){this.performance=t;const e=window.devicePixelRatio||1;this.renderer.setPixelRatio(t==="high"?Math.min(e,2):t==="standard"?Math.min(e,1.5):1);const n=t!=="saver";this.sun.castShadow=n,this.renderer.shadowMap.enabled=n,this.sun.shadow.mapSize.set(t==="high"?4096:2048,t==="high"?4096:2048),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.scene.traverse(s=>{s.material&&!Array.isArray(s.material)&&(s.material.needsUpdate=!0)}),this.night&&this.setNight(!0,!0),this.resize()}resize(){const t=this.container.clientWidth||1,e=this.container.clientHeight||1;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.labelRenderer.setSize(t,e),this.model&&this.refreshLabels()}loop(){const t=performance.now();if(this.performance==="saver"&&t-this.lastFrame<1e3/30)return;this.lastFrame=t;const e=Math.min(.1,this.clock.getDelta()),n=this.clock.elapsedTime;if(this.performance!=="saver"&&this.island.update(n,e),this.arrows.length&&this.pathCurve){const s=this.arrows.length,r=n*.35%(1/s);this.arrows.forEach((o,a)=>{const l=Math.min(.999,(a/s+r)%1),c=this.pathCurve.getPointAt(l),h=this.pathCurve.getPointAt(Math.min(1,l+.002));o.position.copy(c).add(new D(0,.12,0)),o.lookAt(h.x,h.y+.12,h.z)})}this.avatar.visible&&(this.avatarMarker.position.y=2.4+Math.sin(n*4)*.12),this.controls.update(),this.renderer.render(this.scene,this.camera),this.labelsOn&&this.labelRenderer.render(this.scene,this.camera)}rebuildModel(){this.model.rebuildAll(),this.refreshLabels(),this.selected&&this.select(this.selected,{fly:!1})}}const Mc={"zh-TW":{title:"楊梅高中圖書館 3D 互動探索島","mode.full":"完整建築","mode.explode":"樓層展開","mode.f1":"一樓俯視","mode.f2":"二樓俯視","mode.interior":"室內探索","mode.compare":"2D／3D 對照","mode.validate":"配置驗證",learn:"學習中心",quest:"探險任務",record:"學習歷程",settings:"設定",home:"返回全景",bird:"鳥瞰",rotate:"自動旋轉",day:"日夜",labels:"標籤",tour:"自動導覽",voice:"語音",fullscreen:"全螢幕",speed:"速度",saver:"省電",directory:"空間目錄",search:"搜尋空間…",floorAll:"全部",floor1:"1F",floor2:"2F",explode:"分離距離"},en:{title:"YMSH Library 3D Explorer Island","mode.full":"Building","mode.explode":"Exploded","mode.f1":"1F Top","mode.f2":"2F Top","mode.interior":"Interior","mode.compare":"2D / 3D","mode.validate":"Validate",learn:"Learn",quest:"Quests",record:"Record",settings:"Settings",home:"Home",bird:"Bird view",rotate:"Rotate",day:"Day/Night",labels:"Labels",tour:"Tour",voice:"Voice",fullscreen:"Fullscreen",speed:"Speed",saver:"Saver",directory:"Spaces",search:"Search…",floorAll:"All",floor1:"1F",floor2:"2F",explode:"Gap"}};function _o(i){const t=Mc[Bt.lang]?Bt.lang:"zh-TW";return Mc[t][i]??Mc["zh-TW"][i]??i}function Pb(i=document){i.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=_o(t.dataset.i18n)}),i.querySelectorAll("[data-i18n-placeholder]").forEach(t=>{t.placeholder=_o(t.dataset.i18nPlaceholder)}),i.querySelectorAll("[data-i18n-title]").forEach(t=>{t.title=_o(t.dataset.i18nTitle),t.setAttribute("aria-label",t.title)}),document.documentElement.lang=Bt.lang}let to=null;function Lb(){if(!to){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;to=new i}return to.state==="suspended"&&to.resume(),to}const Of={click:[[660,.05]],ok:[[660,.08],[880,.12]],bad:[[300,.12],[220,.16]],win:[[523,.1],[659,.1],[784,.1],[1046,.22]]};function Xn(i="click"){if(!Bt.sound)return;const t=Lb();if(!t)return;let e=t.currentTime;(Of[i]||Of.click).forEach(([n,s])=>{const r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.value=n,o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.12,e+.01),o.gain.exponentialRampToValueAtTime(1e-4,e+s),r.connect(o).connect(t.destination),r.start(e),r.stop(e+s+.02),e+=s*.9})}const Hr="speechSynthesis"in window;function Db(){const i=speechSynthesis.getVoices();return i.find(t=>t.lang==="zh-TW")||i.find(t=>t.lang.startsWith("zh"))||null}function Gr(i,{force:t=!1,onend:e}={}){if(!Hr||!Bt.voice&&!t)return e==null||e(),!1;speechSynthesis.cancel();const n=new SpeechSynthesisUtterance(i);n.lang="zh-TW";const s=Db();return s&&(n.voice=s),n.rate=Math.min(1.6,.85+(Bt.animSpeed-1)*.3),e&&(n.onend=e),speechSynthesis.speak(n),!0}function Ym(){Hr&&speechSynthesis.cancel()}const zt=(i,t=document)=>t.querySelector(i),ys=(i,t=document)=>[...t.querySelectorAll(i)];function Mt(i){return String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function nn(i,t="",e=2600){const n=document.createElement("div");n.className=`toast ${t}`,n.textContent=i,zt("#toast-root").appendChild(n),setTimeout(()=>n.remove(),e)}let Oh=null;function Vs(i,t,{onClose:e,wide:n}={}){Zn(!0),zt("#modal-title").textContent=i;const s=zt("#modal-content");return typeof t=="string"?s.innerHTML=t:(s.innerHTML="",s.appendChild(t)),zt("#modal .modal-box").style.width=n?"min(1100px, 100%)":"",zt("#modal").hidden=!1,Oh=e||null,zt("#modal .modal-close").focus(),ge("modal",!0),s}function Zn(i=!1){if(zt("#modal").hidden)return;zt("#modal").hidden=!0;const t=Oh;Oh=null,i||t==null||t(),ge("modal",!1)}function Ib(){zt("#modal .modal-close").addEventListener("click",()=>Zn()),zt("#modal").addEventListener("click",i=>{i.target.id==="modal"&&Zn()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&Zn()})}function Vo(i,{sound:t="win"}={}){Xn(t);const e=["#ffb703","#fb8500","#2f6fdf","#00a3a3","#e5484d","#8338ec","#3fa36b"],s=document.body.classList.contains("perf-saver")?0:70;for(let r=0;r<s;r++){const o=document.createElement("div");o.className="confetti",o.style.left=`${Math.random()*100}vw`,o.style.background=e[r%e.length],o.style.animationDuration=`${1.6+Math.random()*1.6}s`,o.style.animationDelay=`${Math.random()*.4}s`,document.body.appendChild(o),setTimeout(()=>o.remove(),3800)}if(i){const r=document.createElement("div");r.className="celebrate",r.innerHTML=`<div>${Mt(i)}</div>`,document.body.appendChild(r),setTimeout(()=>r.remove(),1900)}}function Fh(i,t,e="application/json"){const n=new Blob([t],{type:e}),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=i,document.body.appendChild(s),s.click(),setTimeout(()=>{URL.revokeObjectURL(s.href),s.remove()},500)}let Yi="all",Va="",Zm=null;function Ub(i,t){var n;if(!t)return!0;const e=[i.name,i.description,...i.keywords||[],(n=Uo[i.category])==null?void 0:n.label,`${i.floor}f`,`${i.floor}樓`].join(" ").toLowerCase();return t.toLowerCase().split(/\s+/).filter(Boolean).every(s=>e.includes(s))}function Nb(i){return Yn.filter(t=>!t.hidden&&t.interactionType!=="none"&&Ub(t,i))}function eo(){const i=zt("#zone-list"),t=Nb(Va).filter(n=>Va||Yi==="all"||n.floor===+Yi);if(!t.length){i.innerHTML=`<p class="zl-empty">找不到「${Mt(Va)}」相關的空間，試試「借書」、「影印」、「書架」。</p>`;return}const e={};t.forEach(n=>{var s;return(e[s=n.category]||(e[s]=[])).push(n)}),i.innerHTML=Object.entries(e).map(([n,s])=>{var r,o;return`
      <div class="zl-group" style="--c:${(r=Uo[n])==null?void 0:r.color}">
        <h3><span class="dot"></span>${Mt(((o=Uo[n])==null?void 0:o.label)||n)}</h3>
        ${s.map(a=>`<button class="zl-item ${a.id===Zm?"active":""}" data-zone="${a.id}">
              <span class="fl">${a.floor}F</span><span>${Mt(a.name)}</span>
              ${At.explored.includes(a.id)?'<span class="seen" title="已探索">✔</span>':""}
            </button>`).join("")}
      </div>`}).join("")}function Ob(i){zt("#disclaimer").textContent=Y1,zt("#zone-list").addEventListener("click",e=>{var s;const n=(s=e.target.closest(".zl-item"))==null?void 0:s.dataset.zone;n&&(i.handleZoneClick(n),document.body.classList.remove("side-open"))});const t=zt("#zone-search");t.addEventListener("input",()=>{Va=t.value.trim(),eo()}),t.addEventListener("keydown",e=>{if(e.key==="Enter"){const n=zt("#zone-list .zl-item");n&&n.click()}}),ys(".floor-switch button").forEach(e=>e.addEventListener("click",()=>{Yi=e.dataset.floor,Yi==="all"?["f1","f2","interior"].includes(i.mode)&&i.setMode("explode"):i.setFloor(+Yi),Sc(i),eo()})),zt("#sidebar-toggle").addEventListener("click",()=>document.body.classList.toggle("side-open")),document.addEventListener("pointerdown",e=>{document.body.classList.contains("side-open")&&!e.target.closest("#sidebar")&&!e.target.closest("#sidebar-toggle")&&document.body.classList.remove("side-open")}),Ie("zone:select",e=>{Zm=(e==null?void 0:e.id)||null,eo()}),Ie("progress",eo),Ie("mode",()=>Sc(i)),Sc(i),eo()}function Sc(i){const t=["full","explode"].includes(i.mode),e=t&&Yi==="all"?"all":String(i.floor);t||(Yi=String(i.floor)),ys(".floor-switch button").forEach(n=>n.classList.toggle("active",n.dataset.floor===(t?Yi:e)))}const Ff={borrow:"借閱與續借",search:"查詢與推薦",space:"空間使用",service:"影印與數位服務",media:"影音資料"},zh=[{id:"Q01",category:"borrow",zoneId:"f1-counter",q:"請問每個學生一次可以借幾本書？每本書可以借多久？",a:"每人最多可借４本，每一本書可借２週。若同學想延長借書的時間，請於到期日前到圖書館或是上圖書館網頁線上辦理續借，最長續借期為２週。"},{id:"Q02",category:"search",zoneId:"f1-opac",q:"如果我要找書，怎麼找？",a:"你可以自行上本校的圖書查詢系統，步驟如下：楊梅高中圖書館網頁 → 館藏圖書查詢 → 選擇關鍵字、ISBN 等 → 開始查詢。"},{id:"Q03",category:"borrow",zoneId:"f1-counter",q:"我借的書逾期了，怎麼辦？",a:"為避免權益受損，建議盡快將書歸還，逾期歸還天數即為暫停借閱權限之天數。"},{id:"Q04",category:"borrow",zoneId:"f2-shelf-10",q:"請問漫畫區的漫畫可以借回家看嗎？",a:"一樓當月期刊及二樓漫畫都只限館內閱讀！"},{id:"Q05",category:"space",zoneId:"f1-counter",q:"如何申請借用圖書館?",a:`個人借用：學生於上課時間進入圖書館，須攜帶學生證登記，並經導師或任課老師簽署洽公證明後方可使用。
班級借用：需經導師同意，請各班長或圖書股長提前至圖書館預約使用時間，同一時段以一個班級使用為原則。（教師借用優先於班級借用）`},{id:"Q06",category:"service",zoneId:"f1-machines",q:"我想要影印、列印資料，圖書館可以借我影印卡嗎？",a:"自備悠遊卡作為影印、列印使用，黑白影印每頁 2 元，彩色影印每頁 6 元。"},{id:"Q07",category:"service",zoneId:"f1-machines",q:"圖書館可以掃描資料嗎？",a:"圖書館設有事務機器可以進行掃描。需使用悠遊卡，只需過卡，不收費。"},{id:"Q08",category:"space",zoneId:"f1-lockers",q:"我可以帶自己的書籍進入圖書館閱讀嗎?",a:"可以的，但不得帶書包以及任何食物、飲料進入圖書館。"},{id:"Q09",category:"media",zoneId:"f1-counter",q:"我可以借學校的影音光碟(DVD)回家欣賞嗎？",a:"學生可借用家用版影片，請勿公播使用；公播版影片限教職同仁借於公播使用。"},{id:"Q10",category:"space",zoneId:"f1-entrance",q:"中午午休時間我不想睡午覺，可以到圖書館使用嗎？",a:`若無特殊原因，午休時間還是請同學回教室休息。
若有特殊事件急需處理，則須經導師同意(備有同意文件)才能留館使用。
圖書館不會發給學生到館和消除缺曠紀錄之任何證明！`},{id:"Q11",category:"search",zoneId:"f1-newbooks",q:"如何推薦圖書館購買新書？",a:"你可以進入本校新書推薦系統，步驟如下：楊梅高中圖書館網頁 → 登入個人帳號 → 填寫推薦內容 → 圖書館審核。"}],Fb="其餘問題可向圖書館人員洽詢或至圖書館網站查詢！",jm=[{id:"qz-limit",q:"每位學生最多可以借幾本書？",options:["2 本","3 本","4 本","5 本"],answer:2,explain:"借書請攜學生證，每人最多可借 4 本。",zoneId:"f1-counter"},{id:"qz-loan",q:"圖書的借期是多久？",options:["1 週","2 週","3 週","1 個月"],answer:1,explain:"借期 2 週；續借期亦為二週。",zoneId:"f1-counter"},{id:"qz-renew",q:"想要續借，應在什麼時候辦理？",options:["到期日前 1～2 日","到期後 3 天內","借書當天","任何時間都可以"],answer:0,explain:"於到期日前 1～2 日到圖書館或圖書查詢系統辦理，續借期為二週。",zoneId:"f1-counter"},{id:"qz-overdue",q:"小華有 2 本書各逾期 3 天，會被暫停借閱權限幾天？",options:["3 天","5 天","6 天","不會暫停"],answer:2,explain:"累計每本書逾期天數為暫停借閱權限天數：3 + 3 = 6 天。",zoneId:"f1-counter"},{id:"qz-borrow-flow",q:"借書的正確流程是？",options:["由二樓進館，在二樓櫃台借書","由一樓進入，至二樓書庫取書，再到一樓櫃台完成借書","在一樓櫃台請館員代為取書","在資訊檢索區自助借書"],answer:1,explain:"借書請由一樓進入圖書館，至二樓書庫找書／取書，至一樓櫃台完成借書程序。",zoneId:"f2-stacks"},{id:"qz-card",q:"辦理借書時必須攜帶什麼？",options:["悠遊卡","學生證","身分證","借書單"],answer:1,explain:"借書請攜學生證。",zoneId:"f1-counter"},{id:"qz-hours",q:"圖書館館舍開放時間為？",options:["07:30～17:00","08:00～16:00","08:00～17:30","09:00～16:00"],answer:1,explain:"開放時間：08:00～16:00。",zoneId:"f1-entrance"},{id:"qz-copy",q:"彩色影印每頁收費多少？",options:["2 元","4 元","6 元","10 元"],answer:2,explain:"影印黑白文件每頁 2 元、彩色文件每頁 6 元。",zoneId:"f1-machines"},{id:"qz-scan",q:"使用事務機器掃描，下列敘述何者正確？",options:["每頁 1 元","需向館員借影印卡","自備悠遊卡，只需過卡，無需付費","不提供掃描服務"],answer:2,explain:"掃描請自備悠遊卡（餘額 10 元以上），掃描只需過卡，無需付費。",zoneId:"f1-machines"},{id:"qz-magazine",q:"一樓的當月期刊雜誌可以外借嗎？",options:["可以，借期 2 週","不外借，過期雜誌移至二樓書庫後可外借","只有教師可借","可以，借期 1 週"],answer:1,explain:"一樓置放當月期刊雜誌不外借，過期雜誌則移置於二樓書庫供讀者外借。",zoneId:"f1-magazine-1"},{id:"qz-meigao",q:"梅高特藏區陳列的刊物（如畢業紀念冊）可以外借嗎？",options:["可以","不開放外借","只限高三","需導師同意"],answer:1,explain:"梅高特藏區陳列梅岡風、最近幾屆畢業紀念冊、梅高青年等刊物，不開放外借。",zoneId:"f1-meigao"},{id:"qz-bag",q:"下列哪一項可以帶進圖書館？",options:["礦泉水","書包","自己的書籍","便當"],answer:2,explain:"可以帶自己的書籍，但不可攜帶飲食（含礦泉水）、書包等私人物品入館。",zoneId:"f1-lockers"},{id:"qz-opac",q:"資訊檢索電腦若連線不當網頁，會受到什麼處分？",options:["口頭提醒","經查證、記錄後受校規警告以上處分","停用一天電腦","沒有處分"],answer:1,explain:"資訊檢索電腦不可連線任何不當網頁，違者經查證、記錄後將受校規警告以上處分。",zoneId:"f1-opac"},{id:"qz-search",q:"圖書查詢系統的正確步驟順序是？",options:["館藏圖書查詢 → 圖書館網頁 → 開始查詢","圖書館網頁 → 館藏圖書查詢 → 選擇關鍵字、ISBN 等 → 開始查詢","登入個人帳號 → 填寫推薦內容","直接詢問館員"],answer:1,explain:"楊梅高中圖書館網頁 → 館藏圖書查詢 → 選擇關鍵字、ISBN 等 → 開始查詢。",zoneId:"f1-opac"},{id:"qz-newspaper",q:"圖書館至少保存最近多久的報紙？",options:["三天","一週","二週","一個月"],answer:2,explain:"圖書館至少保存最近二週內之報紙，以供查閱使用。",zoneId:"f1-newspaper"},{id:"qz-recommend",q:"推薦圖書館購買新書的流程，「登入個人帳號」之後是？",options:["圖書館審核","填寫推薦內容","館藏圖書查詢","至櫃台登記"],answer:1,explain:"楊梅高中圖書館網頁 → 登入個人帳號 → 填寫推薦內容 → 圖書館審核。",zoneId:"f1-newbooks"}],zb=10,Ra=70,Oo="示範資料，非真實館藏",Fo=[{id:"b01",title:"星空下的資料科學",author:"示範作者 A",isbn:"9789990000011",shelf:4,callNo:"312 D01",topic:"資訊 程式 資料"},{id:"b02",title:"十七歲的哲學筆記",author:"示範作者 B",isbn:"9789990000028",shelf:2,callNo:"100 D02",topic:"哲學 思考"},{id:"b03",title:"海島生態觀察誌",author:"示範作者 C",isbn:"9789990000035",shelf:4,callNo:"367 D03",topic:"生態 自然 SDGs"},{id:"b04",title:"城市與永續：給高中生的 SDGs 入門",author:"示範作者 D",isbn:"9789990000042",shelf:6,callNo:"542 D04",topic:"永續 SDGs 社會"},{id:"b05",title:"台灣老街散步地圖",author:"示範作者 E",isbn:"9789990000059",shelf:7,callNo:"733 D05",topic:"台灣 歷史 地理"},{id:"b06",title:"詩的十二種讀法",author:"示範作者 F",isbn:"9789990000066",shelf:8,callNo:"812 D06",topic:"文學 詩 語文"},{id:"b07",title:"速寫日常：零基礎繪畫課",author:"示範作者 G",isbn:"9789990000073",shelf:9,callNo:"947 D07",topic:"藝術 繪畫"},{id:"b08",title:"圖書館的祕密地圖",author:"示範作者 H",isbn:"9789990000080",shelf:1,callNo:"020 D08",topic:"圖書館 資訊素養"},{id:"b09",title:"從零開始的機器人製作",author:"示範作者 I",isbn:"9789990000097",shelf:5,callNo:"448 D09",topic:"科技 機器人 自造"},{id:"b10",title:"世界神話故事集",author:"示範作者 J",isbn:"9789990000103",shelf:3,callNo:"280 D10",topic:"宗教 神話 故事"},{id:"b11",title:"高中生的理財第一課",author:"示範作者 K",isbn:"9789990000110",shelf:6,callNo:"563 D11",topic:"理財 經濟"},{id:"b12",title:"漫畫：熱血社團物語（館內閱讀）",author:"示範作者 L",isbn:"9789990000127",shelf:10,callNo:"947.41 D12",topic:"漫畫",inLibraryOnly:!0},{id:"b13",title:"英語閱讀素養 30 天",author:"示範作者 M",isbn:"9789990000134",shelf:8,callNo:"805 D13",topic:"英語 語文"},{id:"b14",title:"微積分的故事",author:"示範作者 N",isbn:"9789990000141",shelf:4,callNo:"314 D14",topic:"數學 科學"},{id:"b15",title:"料理中的化學",author:"示範作者 O",isbn:"9789990000158",shelf:5,callNo:"427 D15",topic:"化學 料理 生活"},{id:"b16",title:"桃園地方誌入門",author:"示範作者 P",isbn:"9789990000165",shelf:7,callNo:"733.9 D16",topic:"桃園 地方 歷史"}],kb=[{title:"城市與永續：給高中生的 SDGs 入門",blurb:"用 17 個校園情境認識永續發展目標。",color:"#3fa36b"},{title:"星空下的資料科學",blurb:"從天文觀測資料學會基本的資料分析。",color:"#3b7ddd"},{title:"速寫日常：零基礎繪畫課",blurb:"每天 10 分鐘，畫下生活中的小風景。",color:"#e0803d"},{title:"詩的十二種讀法",blurb:"用 12 個角度重新閱讀現代詩。",color:"#b05cc8"}],Bb="資料來源：楊梅高中圖書館〈圖書館新生利用教育〉說明資料（115 學年）。",rl=[{id:"env",title:"一、環境導覽",items:["圖書館一樓設有辦公區、讀者服務櫃台、期刊區、資訊檢索區、梅高特藏區、討論室和閱讀區，二樓為書庫和閱讀區。啟明樓一樓為喜閱學堂、四樓為紅土藝術空間。","圖書館館舍開放時間：08:00～16:00，第 8 堂為館務處理時間，未上輔導課的同學可以入館自習。打掃時間不得入館使用（例外者需獲導師同意）。"]},{id:"borrow",title:"二、圖書館圖書、借還及續借規則",items:["借書請由一樓進入圖書館，至二樓書庫找書／取書，至一樓櫃台完成借書程序。","由本校的圖書查詢系統：點選「學校首頁／圖書館圖書查詢」。查詢步驟：楊梅高中圖書館網頁 → 館藏圖書查詢 → 選擇關鍵字、ISBN 等 → 開始查詢。","借書：請攜學生證，每人最多可借 4 本，借期 2 週；請於開放日 16:00 前完成借書程序。","續借：若想延長借期，於到期日前 1～2 日到圖書館或圖書查詢系統辦理，續借期為二週。","還書：出借之圖書須於到期前至圖書館讀者服務櫃台辦理歸還。","逾期：圖書逾期歸還者將暫停圖書借閱權利。累計每本書逾期天數為暫停借閱權限天數。"]},{id:"notice",title:"三、圖書館使用注意事項",items:["館內不得使用手機（教師授課所需除外）。","一樓置放當月期刊雜誌不外借，過期雜誌則移置於二樓書庫供讀者外借。","線上資源、電子書請由學校首頁點選進入閱讀和借用。（部分資源限校內閱讀）","一樓陳列當日報紙，圖書館至少保存最近二週內之報紙，以供查閱使用。","資訊檢索電腦不可連線任何不當網頁，違者經查證、記錄後將受校規警告以上處分。","影印請自備悠遊卡（餘額 10 元以上），影印黑白文件每頁 2 元、彩色文件每頁 6 元。","列印請自備悠遊卡（餘額 10 元以上），列印黑白文件每頁 2 元、彩色文件每頁 6 元。","掃描請自備悠遊卡（餘額 10 元以上），掃描只需過卡，無需付費。","梅高特藏區陳列梅岡風、最近幾屆畢業紀念冊、梅高青年等刊物，不開放外借。","漫畫書籍僅供在館閱讀，不開放外借。","一樓播放公播音樂，中午播放 25 分鐘新聞，每天播放不同頻道。","公播版影音光碟限教職員工同仁借用。讀者借用家用版影音光碟，應注意不得公播使用。"]},{id:"enter",title:"四、進入圖書館後所需注意事項",items:["不可攜帶飲食（含礦泉水）、書包等私人物品入館。","不可大聲喧嘩、製造髒亂，並且避免奔跑，嚴禁將椅子當作玩樂工具，不得破壞任何公物。","學生於上課時間進入圖書館須攜帶學生證登記並獲教師同意，未帶學生證者不得留館。","圖書館空間的所有區域，不外借製作海報、製作畢業紀念冊等相關非閱讀之活動。","提醒同學，圖書館全區設有監控系統和圖書 RFID 安全系統，請配合圖書館相關規定。學生若有不當使用行為，圖書館有權暫時停止同學使用權利。"]}],Cr={open:"08:00",close:"16:00",notes:["第 8 堂為館務處理時間，未上輔導課的同學可以入館自習。","打掃時間不得入館使用（例外者需獲導師同意）。"]},ws={maxBooks:4,loanDays:14},bc=[{id:"copy-bw",name:"黑白影印",price:2},{id:"copy-color",name:"彩色影印",price:6},{id:"print-bw",name:"黑白列印",price:2},{id:"print-color",name:"彩色列印",price:6},{id:"scan",name:"掃描",price:0}],Ec=10,Hb=["楊梅高中圖書館網頁","館藏圖書查詢","選擇關鍵字、ISBN 等","開始查詢"],Gb=["楊梅高中圖書館網頁","登入個人帳號","填寫推薦內容","圖書館審核"],zf=[{id:"rs-drink",q:"小明帶了一瓶礦泉水，可以帶進圖書館嗎？",answer:!1,explain:"不可攜帶飲食（含礦泉水）、書包等私人物品入館。"},{id:"rs-comic",q:"可以把二樓的漫畫借回家看嗎？",answer:!1,explain:"漫畫書籍僅供在館閱讀，不開放外借。"},{id:"rs-class",q:"上課時間沒帶學生證，可以自行留在圖書館嗎？",answer:!1,explain:"學生於上課時間進入圖書館須攜帶學生證登記並獲教師同意，未帶學生證者不得留館。"},{id:"rs-poster",q:"班上要做海報，可以借用閱讀桌來製作嗎？",answer:!1,explain:"圖書館空間的所有區域，不外借製作海報、製作畢業紀念冊等相關非閱讀之活動。"},{id:"rs-phone",q:"在館內可以用手機看影片嗎？",answer:!1,explain:"館內不得使用手機（教師授課所需除外）。"},{id:"rs-ownbook",q:"可以帶自己的書進圖書館閱讀嗎？",answer:!0,explain:"可以的，但不得帶書包以及任何食物、飲料進入圖書館。（FAQ Q08）"},{id:"rs-oldmag",q:"過期的雜誌可以外借嗎？",answer:!0,explain:"一樓置放當月期刊雜誌不外借，過期雜誌則移置於二樓書庫供讀者外借。"},{id:"rs-yearbook",q:"可以把梅高特藏區的畢業紀念冊借回家嗎？",answer:!1,explain:"梅高特藏區陳列梅岡風、最近幾屆畢業紀念冊、梅高青年等刊物，不開放外借。"},{id:"rs-scan",q:"用事務機器掃描資料需要付費嗎？",answer:!1,explain:"掃描請自備悠遊卡（餘額 10 元以上），掃描只需過卡，無需付費。"},{id:"rs-clean",q:"打掃時間可以進圖書館自習嗎？",answer:!1,explain:"打掃時間不得入館使用（例外者需獲導師同意）。"}],Gn=[{zoneIds:["f1-entrance"],prompt:"圖書館大門"},{zoneIds:["f1-counter"],prompt:"一樓借還書櫃台"},{zoneIds:["f2-stacks","f2-shelf-01","f2-shelf-02","f2-shelf-03","f2-shelf-04","f2-shelf-05","f2-shelf-06","f2-shelf-07","f2-shelf-08","f2-shelf-09","f2-shelf-10"],prompt:"二樓書庫"},{zoneIds:["f1-opac"],prompt:"一樓資訊檢索區"},{zoneIds:["f1-meigao"],prompt:"梅高特藏區"},{zoneIds:["f1-newbooks"],prompt:"新書展示區"},{zoneIds:["f1-magazine-1","f1-magazine-2"],prompt:"雜誌區"},{zoneIds:["f1-discussion","f2-discussion-w","f2-discussion-e"],prompt:"討論室"},{zoneIds:["f1-machines"],prompt:"事務機器"},{zoneIds:["f1-stairs"],prompt:"一樓通往二樓的樓梯"}],Vb=i=>`<div class="steps">${i.map((t,e)=>`${e?"<i>➜</i>":""}<span>${Mt(t)}</span>`).join("")}</div>`;function Wb(i){switch(i.interactionType){case"opac":return`<div class="card-section"><h4>🔎 館藏查詢</h4><p>點擊電腦螢幕即可開啟模擬查詢介面（示範資料）。</p>
        <button class="btn primary" data-card="opac">開啟模擬查詢</button></div>`;case"copier":return`<div class="card-section"><h4>🖨️ 事務機器價目</h4>
        <ul class="rule-list"><li>黑白影印／列印：每頁 2 元</li><li>彩色影印／列印：每頁 6 元</li><li>掃描：只需過卡，不收費</li><li>請自備悠遊卡（餘額 10 元以上）</li></ul>
        <button class="btn primary" data-card="copier">費用試算</button></div>`;case"newbooks":return`<div class="card-section"><h4>📗 新書介紹 <span class="demo-tag">${Oo}</span></h4>
        ${kb.map(t=>`<div class="book-row"><span class="spine" style="background:${t.color}"></span><div class="bi"><b>${Mt(t.title)}</b><small>${Mt(t.blurb)}</small></div></div>`).join("")}
        <h4 style="margin-top:10px">✍️ 新書推薦流程（FAQ Q11）</h4>${Vb(Gb)}</div>`;case"stairs":return`<div class="card-section"><h4>🪜 樓層移動</h4><p>借書請由一樓進入圖書館，至二樓書庫找書／取書，至一樓櫃台完成借書程序。</p>
        <button class="btn primary" data-card="floor" data-floor="${i.options.target}">前往 ${i.options.target}F</button></div>`;case"shelf":{const t=i.options.index,e=t?Fo.filter(n=>n.shelf===t):[];return`<div class="card-section"><h4>📚 書庫說明</h4><p>借書：每人最多 ${ws.maxBooks} 本、借期 2 週。過期雜誌移置於二樓書庫供讀者外借；漫畫僅供在館閱讀。</p>
        ${t?`<p><b>示範分類：</b>${Mt(i.options.className)} <span class="demo-tag">${Oo}</span></p>
        ${e.map(n=>`<div class="book-row"><span class="spine" style="background:#3b7ddd"></span><div class="bi"><b>${Mt(n.title)}</b><small>${Mt(n.callNo)}｜${Mt(n.author)}${n.inLibraryOnly?"｜限館內閱讀":""}</small></div></div>`).join("")||"<p>（此書架無示範書目）</p>"}`:""}
        <button class="btn accent" data-card="borrow">模擬借書</button></div>`}case"special":return'<div class="card-section"><h4>🏛️ 特藏資料</h4><ul class="rule-list"><li>梅岡風</li><li>最近幾屆畢業紀念冊</li><li>梅高青年</li></ul><p><b>不開放外借</b>，請在館內閱覽。</p></div>';case"counter":return`<div class="card-section"><h4>📋 借還規則</h4>
        <ul class="rule-list">${rl[1].items.slice(2).map(t=>`<li>${Mt(t)}</li>`).join("")}</ul>
        <button class="btn accent" data-card="borrow">模擬借書流程</button></div>`;default:return i.id==="f1-entrance"?`<div class="card-section"><h4>🕗 開放時間</h4><p><b>${Cr.open}～${Cr.close}</b></p><ul class="rule-list">${Cr.notes.map(t=>`<li>${Mt(t)}</li>`).join("")}</ul>
          <ul class="rule-list">${rl[3].items.slice(0,1).map(t=>`<li>${Mt(t)}</li>`).join("")}</ul></div>`:""}}function kf(i){const t=zt("#card-body");if(!i){t.innerHTML=`
      <span class="card-cat" style="--c:#2f6fdf">開始探索</span>
      <h2 class="card-title">歡迎來到圖書館探索島！</h2>
      <p class="card-desc">拖曳旋轉、滾輪或雙指縮放；點擊建築中的任何區域查看介紹。</p>
      <div class="card-section"><h4>🧭 建議路線</h4>
        <ol class="rule-list"><li>上方切換「一樓俯視」「二樓俯視」看配置</li><li>打開「探險任務」完成 6 個關卡</li><li>到「學習中心」學借書規則與 FAQ</li><li>用「2D／3D 對照」比對平面圖</li></ol></div>
      <div class="card-section"><h4>🕗 開放時間</h4><p>${Cr.open}～${Cr.close}；${Mt(Cr.notes[0])}</p></div>`;return}const e=Uo[i.category]||{},n=zh.filter(o=>o.zoneId===i.id),s=jm.filter(o=>i.quizIds.includes(o.id)||o.zoneId===i.id),r=i.mapBounds;t.innerHTML=`
    <span class="card-cat" style="--c:${e.color}">${Mt(e.label||"")}</span>
    <h2 class="card-title">${Mt(i.name)}</h2>
    <div class="card-meta">${i.floor}F｜ID：${i.id}</div>
    <p class="card-desc">${Mt(i.description)}</p>
    <div class="card-actions">
      <button class="btn primary" data-card="focus">🎯 聚焦</button>
      ${Hr?'<button class="btn" data-card="speak">🔊 朗讀</button>':""}
      <button class="btn" data-card="compare">🗺️ 平面圖位置</button>
    </div>
    ${Wb(i)}
    ${n.length?`<div class="card-section"><h4>❓ 相關 FAQ</h4>${n.map(o=>`<details class="qa"><summary><span class="qid">${o.id}</span>${Mt(o.q)}</summary><div class="ans">${Mt(o.a)}</div></details>`).join("")}</div>`:""}
    ${s.length?`<div class="card-section"><h4>✏️ 相關測驗</h4><p>${s.length} 題與此空間相關。</p><button class="btn" data-card="quiz">去測驗</button></div>`:""}
    <div class="card-section"><h4>📍 平面圖位置（${i.floor}F）</h4>
      <div class="mini-plan"><img src="${Ue.images[i.floor]}" alt="${i.floor}F 平面圖" />
        <div class="mp-box" style="left:${r.x*100}%;top:${r.y*100}%;width:${r.w*100}%;height:${r.h*100}%"></div></div>
      <small style="color:var(--ink-2)">標準化座標 x=${r.x.toFixed(3)}, y=${r.y.toFixed(3)}, w=${r.w.toFixed(3)}, h=${r.h.toFixed(3)}</small>
    </div>`}function qb(i){let t=null;const e=()=>document.body.classList.add("card-closed"),n=()=>document.body.classList.remove("card-closed");zt("#card-close").addEventListener("click",()=>{e(),setTimeout(()=>i.resize(),50)}),Ie("zone:select",s=>{t=s,kf(s),s&&(n(),Ab(s.id),Gr(`${s.name}。${s.description}`)),setTimeout(()=>i.resize(),50)}),zt("#card-body").addEventListener("click",s=>{const r=s.target.closest("[data-card]");if(!r)return;const o=r.dataset.card;o==="focus"&&t&&i.focusZone(t.id),o==="speak"&&t&&Gr(`${t.name}。${t.description}`,{force:!0}),o==="compare"&&t&&(i.floor=t.floor,i.setMode("compare"),i.select(t.id)),o==="opac"&&ge("open:learn",{tab:"opac"}),o==="copier"&&ge("open:learn",{tab:"copier"}),o==="quiz"&&ge("open:learn",{tab:"quiz"}),o==="borrow"&&ge("borrow:start"),o==="floor"&&i.setFloor(+r.dataset.floor)}),window.matchMedia("(max-width: 860px)").matches&&e(),kf(null)}let Pn,kh=null;function Bf(){const i=Pn.floor;zt("#compare-title").textContent=`${i}F 原始平面配置圖`;const t=zt("#plan-img");t.getAttribute("src")!==Ue.images[i]&&(t.src=Ue.images[i]);const e=zt("#plan-svg");e.innerHTML=Yn.filter(n=>n.floor===i&&!n.hidden&&n.interactionType!=="none").sort((n,s)=>s.mapBounds.w*s.mapBounds.h-n.mapBounds.w*n.mapBounds.h).map(n=>{const[s,r,o,a]=n.px;return`<rect class="plan-zone ${n.id===kh?"active":""}" data-zone="${n.id}" x="${s}" y="${r}" width="${o-s}" height="${a-r}" rx="6"><title>${Mt(n.name)}</title></rect>`}).join("")}function Hf(){const i=zt("#compare-pane"),t=zt("#plan-wrap"),e=i.querySelector(".compare-head"),n=i.clientHeight-e.offsetHeight-8,s=i.clientWidth-8,r=Ue.width/Ue.height,o=Math.min(s,n*r);t.style.width=`${Math.max(120,o)}px`}function Xb(i){Pn=i,zt("#plan-svg").addEventListener("click",t=>{var n;const e=(n=t.target.closest(".plan-zone"))==null?void 0:n.dataset.zone;e&&Pn.handleZoneClick(e)}),Ie("mode",({mode:t})=>{const e=t==="compare";zt("#compare-pane").hidden=!e,document.body.classList.toggle("split",e),e?(Bf(),requestAnimationFrame(()=>{Hf(),Pn.resize(),Pn.selected?Pn.focusZone(Pn.selected):Pn.flyTo(Pn.presetFor("compare"))})):requestAnimationFrame(()=>Pn.resize())}),Ie("zone:select",t=>{var e;if(kh=(t==null?void 0:t.id)||null,Pn.mode==="compare"){Bf();const n=document.querySelector(`.plan-zone[data-zone="${kh}"]`);(e=n==null?void 0:n.scrollIntoView)==null||e.call(n,{block:"nearest"})}}),new ResizeObserver(()=>Pn.mode==="compare"&&Hf()).observe(zt("#compare-pane"))}const ln=i=>({u:i.x+i.w/2,v:i.y+i.h/2}),Le=i=>{var t;return(t=$i(i))==null?void 0:t.mapBounds},no=.01,$b=[{floor:1,text:"大門位於圖面下方中央",test:()=>{const i=ln(Le("f1-entrance"));return i.u>.4&&i.u<.6&&i.v>.9}},{floor:1,text:"樓梯位於右下角",test:()=>{const i=ln(Le("f1-stairs"));return i.u>.75&&i.v>.8}},{floor:1,text:"討論室位於左上角",test:()=>{const i=Le("f1-discussion");return i.x<.05&&i.y<.05&&ln(i).u<.5}},{floor:1,text:"梅高特藏區位於右上角",test:()=>{const i=ln(Le("f1-meigao"));return i.u>.85&&i.v<.4}},{floor:1,text:"行政辦公室位於右下區域",test:()=>{const i=ln(Le("f1-office"));return i.u>.6&&i.v>.5}},{floor:1,text:"借還書櫃台位於行政辦公室左側",test:()=>{const i=Le("f1-counter"),t=Le("f1-office");return i.x+i.w<=t.x+no&&i.y<t.y+t.h&&i.y+i.h>t.y}},{floor:1,text:"資訊檢索區位於行政辦公室上方",test:()=>{const i=Le("f1-opac"),t=Le("f1-office");return i.y+i.h<=t.y+no&&i.x<t.x+t.w&&i.x+i.w>t.x}},{floor:1,text:"新書展示區位於圖面下方偏左的中央",test:()=>{const i=ln(Le("f1-newbooks"));return i.u>.2&&i.u<.5&&i.v>.75}},{floor:1,text:"SDGs 專區位於討論室下方、閱讀區上方",test:()=>{const i=Le("f1-sdgs"),t=Le("f1-discussion"),e=Le("f1-reading-a");return i.y>=t.y+t.h-no&&i.y+i.h<=e.y+no}},{floor:2,text:"十排書架位於圖面上半部且為縱向排列",test:()=>{const i=Yn.filter(t=>t.kind==="bookshelf");return i.length===10&&i.every(t=>ln(t.mapBounds).v<.5&&t.mapBounds.h*Ue.height>t.mapBounds.w*Ue.width)}},{floor:2,text:"書架由西向東依序排列、間距一致",test:()=>{const i=Yn.filter(e=>e.kind==="bookshelf").map(e=>ln(e.mapBounds).u),t=i.slice(1).map((e,n)=>e-i[n]);return t.every(e=>e>0&&Math.abs(e-t[0])<.01)}},{floor:2,text:"左右兩側討論室位於圖面上方",test:()=>{const i=ln(Le("f2-discussion-w")),t=ln(Le("f2-discussion-e"));return i.u<.1&&i.v<.2&&t.u>.9&&t.v<.2}},{floor:2,text:"中央閱讀區保留 3 列 × 2 組配置",test:()=>{const i=$i("f2-reading-center"),t=ln(i.mapBounds);return i.options.tables.length===6&&t.u>.3&&t.u<.7&&t.v>.5}},{floor:2,text:"樓梯位於圖面右下側",test:()=>{const i=ln(Le("f2-stairs"));return i.u>.8&&i.v>.6}},{floor:2,text:"儲物室位於最右側靠下",test:()=>{const i=Le("f2-storage");return i.x+i.w>.97&&ln(i).v>.7}},{floor:2,text:"南側閱讀桌位於圖面下方",test:()=>[Le("f2-desk-sw"),Le("f2-desk-se")].every(i=>ln(i).v>.9)},{floor:0,text:"1F 樓梯上端與 2F 樓梯井垂直對齊",test:()=>{const i=Le("f2-stairs"),e=Gm.flightB.xEnd/Ue.width;return e>=i.x-no&&e<=i.x+i.w}}];let cn,Wa=.55,ol=!0,Ni=null;const Pa={},Yb=i=>({u:i.x+i.w/2,v:i.y+i.h/2});function Km(i){const t=cn.model.zoneObjects.get(i);if(!t||t.contentBox.isEmpty())return{level:"ok",inside:1};const e=t.contentBox,n=sb(e.min.x,e.min.z,e.max.x,e.max.z),s=t.zone.mapBounds,r=Math.max(0,Math.min(n.x+n.w,s.x+s.w)-Math.max(n.x,s.x)),o=Math.max(0,Math.min(n.y+n.h,s.y+s.h)-Math.max(n.y,s.y)),a=r*o/Math.max(1e-9,n.w*n.h),l=Yb(n);return{level:l.u>=s.x&&l.u<=s.x+s.w&&l.v>=s.y&&l.v<=s.y+s.h?a>=.9?"ok":"warn":"bad",inside:a,g:n}}const mr={ok:"#2e9e5b",warn:"#f2a900",bad:"#e5484d",map:"#2f6fdf"};function Gf(i,t,e,n){const s=(i.x-.5)*qt.width,r=(i.x+i.w-.5)*qt.width,o=(i.y-.5)*qt.depth,a=(i.y+i.h-.5)*qt.depth,l=new Ne().setFromPoints([new D(s,e,o),new D(r,e,o),new D(r,e,a),new D(s,e,a),new D(s,e,o)]),c=n?new zp({color:t,dashSize:.3,gapSize:.2}):new pl({color:t}),h=new Tp(l,c);return n&&h.computeLineDistances(),h.renderOrder=10,h}function Jm(){[1,2].forEach(i=>cn.overlays[i].clear())}function al(){if(Jm(),cn.mode!=="validate")return;const i=cn.floor,t=cn.overlays[i];Pa[i]||(Pa[i]=new aS().load(Ue.images[i]),Pa[i].colorSpace=Mn);const e=new Zt(new Hs(qt.width,qt.depth),new ei({map:Pa[i],transparent:!0,opacity:Wa,depthWrite:!1,side:Wn}));e.rotation.x=-Math.PI/2,e.position.y=ol?2.95:.03,e.renderOrder=9,t.add(e);const n=ol?3:.08;Yn.filter(s=>s.floor===i&&s.kind!=="carpet").forEach(s=>{t.add(Gf(s.mapBounds,s.id===Ni?"#ff00aa":mr.map,n+.01));const r=Km(s.id);r.g&&t.add(Gf(r.g,mr[r.level],n+.02,!0))})}function Bh(){var a,l;const i=zt("#validate-panel");if(cn.mode!=="validate"){i.hidden=!0;return}i.hidden=!1;const t=cn.floor,e=$b.filter(c=>c.floor===t||c.floor===0).map(c=>({...c,ok:Zb(c.test)})),n=Yn.filter(c=>c.floor===t&&c.kind!=="carpet").map(c=>({z:c,st:Km(c.id)})),s=n.filter(c=>c.st.level!=="ok"),r=Ni&&$i(Ni),o=Lf();i.innerHTML=`
    <h3>🧪 空間配置驗證｜${t}F</h3>
    <div class="vp-row">
      <div class="seg" role="group" aria-label="樓層"><button data-vf="1" class="${t===1?"active":""}">1F</button><button data-vf="2" class="${t===2?"active":""}">2F</button></div>
      <label style="font-size:.85rem">平面圖透明度 <input type="range" id="vp-op" min="0" max="1" step="0.05" value="${Wa}"></label>
    </div>
    <div class="vp-row"><label style="font-size:.85rem"><input type="checkbox" id="vp-high" ${ol?"checked":""}> 疊合圖置於家具上方（取消＝貼地）</label></div>
    <div class="legend"><span><i style="background:${mr.map}"></i>配置圖範圍（mapBounds）</span><span><i style="background:${mr.ok}"></i>模型吻合</span><span><i style="background:${mr.warn}"></i>部分超出</span><span><i style="background:${mr.bad}"></i>位置偏移</span></div>
    <h3 style="margin-top:12px">方位規則檢查（${e.filter(c=>c.ok).length}/${e.length} 通過）</h3>
    ${e.map(c=>`<div class="check"><span class="st ${c.ok?"ok":"bad"}">${c.ok?"✔":"✘"}</span><span>${Mt(c.text)}</span></div>`).join("")}
    <h3 style="margin-top:12px">模型 ↔ 配置圖差異</h3>
    <p style="font-size:.88rem;margin:0 0 6px">共 ${n.length} 個物件，${n.length-s.length} 個吻合${s.length?`，需注意：${s.map(c=>Mt(c.z.name)).join("、")}`:"。"}</p>
    <h3 style="margin-top:12px">座標校正</h3>
    ${r?`<p style="margin:0 0 6px"><b>${Mt(r.name)}</b>（${r.id}）${o[r.id]?' <span class="demo-tag">已校正</span>':""}</p>
      <div class="adj-grid">
        ${["左 x1","上 y1","右 x2","下 y2"].map((c,h)=>`<label>${c}<input type="number" data-adj="${h}" value="${r.px[h]}"></label>`).join("")}
      </div>
      <div class="vp-row" style="margin-top:8px">
        <button class="btn sm primary" id="vp-apply">套用</button>
        <button class="btn sm" id="vp-revert">還原此區</button>
      </div>`:'<p style="font-size:.9rem;color:var(--ink-2)">點擊 3D 中的區域即可調整其像素座標（以原始 2000×1125 平面圖為準）。</p>'}
    <div class="vp-row" style="margin-top:8px">
      <button class="btn sm" id="vp-export">匯出校正 JSON</button>
      <button class="btn sm danger" id="vp-reset">清除全部校正</button>
    </div>`,i.querySelectorAll("[data-vf]").forEach(c=>c.addEventListener("click",()=>{cn.floor=+c.dataset.vf,Ni=null,cn.setMode("validate")})),i.querySelector("#vp-op").addEventListener("input",c=>{Wa=+c.target.value,cn.overlays[cn.floor].children.forEach(h=>h.isMesh&&(h.material.opacity=Wa))}),i.querySelector("#vp-high").addEventListener("change",c=>{ol=c.target.checked,al()}),(a=i.querySelector("#vp-apply"))==null||a.addEventListener("click",()=>{const c=[...i.querySelectorAll("[data-adj]")].map(h=>+h.value);if(c.some(h=>!Number.isFinite(h))||c[2]<=c[0]||c[3]<=c[1]){nn("座標不正確：右需大於左、下需大於上","bad");return}Pf(Ni,c),wc(),nn("已套用並重建模型","ok")}),(l=i.querySelector("#vp-revert"))==null||l.addEventListener("click",()=>{const c=$i(Ni);Pf(Ni,c.originalPx),wc()}),i.querySelector("#vp-export").addEventListener("click",()=>{const c={generatedAt:new Date().toISOString(),note:"px 為原始平面圖像素座標 [x1,y1,x2,y2]",overrides:Lf()};Fh("layout-overrides.json",JSON.stringify(c,null,2))}),i.querySelector("#vp-reset").addEventListener("click",()=>{confirm("確定清除全部座標校正？")&&(rb(),wc())})}function Zb(i){try{return!!i()}catch{return!1}}function wc(){cn.rebuildModel(),al(),Bh()}function jb(i){cn=i,Ie("mode",({mode:t})=>{t!=="validate"&&Jm(),al(),Bh()}),Ie("zone:select",t=>{cn.mode==="validate"&&(Ni=(t==null?void 0:t.id)||null,al(),Bh())})}let _r;function go(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}async function Qm(i){var e,n,s,r;const t=i??!go();try{if(t&&!go()){const o=document.documentElement;await(((e=o.requestFullscreen)==null?void 0:e.call(o))||((n=o.webkitRequestFullscreen)==null?void 0:n.call(o)))}else!t&&go()&&await(((s=document.exitFullscreen)==null?void 0:s.call(document))||((r=document.webkitExitFullscreen)==null?void 0:r.call(document)))}catch{nn("此瀏覽器不支援全螢幕","warn")}}function Vf(){const i=document.body,t=Bt.device==="touch"||Bt.device==="auto"&&matchMedia("(pointer: coarse)").matches;i.classList.toggle("touch",t),["standard","focus","simple"].forEach(e=>i.classList.toggle(`layout-${e}`,Bt.layout===e)),document.documentElement.classList.toggle("fs-large",Bt.fontSize==="large"),document.documentElement.classList.toggle("fs-xlarge",Bt.fontSize==="xlarge"),i.classList.toggle("perf-saver",Bt.performance==="saver"),Pb(),_r&&(_r.controls.rotateSpeed=t?.7:1,_r.controls.zoomSpeed=t?.8:1,requestAnimationFrame(()=>_r.resize()))}const Kb=[{key:"fullscreen",label:"全螢幕",desc:"進入或離開全螢幕",opts:[[!0,"開"],[!1,"關"]]},{key:"sound",label:"音效",desc:"點擊與答題回饋音效",opts:[[!0,"開"],[!1,"關"]]},{key:"device",label:"裝置模式",desc:"觸控模式會放大按鈕",opts:[["auto","自動"],["desktop","電腦"],["touch","觸控"]]},{key:"layout",label:"版面",desc:"專注＝隱藏目錄；簡潔＝隱藏目錄與資訊卡",opts:[["standard","標準"],["focus","專注"],["simple","簡潔"]]},{key:"lang",label:"語言",desc:"英文為預留版本（僅介面文字）",opts:[["zh-TW","繁體中文"],["en","English"]]},{key:"fontSize",label:"字體",desc:"調整全站文字大小",opts:[["standard","標準"],["large","大"],["xlarge","特大"]]},{key:"performance",label:"動畫效能",desc:"省電：關閉陰影、30 FPS、停止背景動畫",opts:[["high","高"],["standard","標準"],["saver","省電"]]}];function Jb(){const i=e=>e==="fullscreen"?go():Bt[e],t=Vs("⚙️ 顯示與操作設定",`
    ${Kb.map(e=>`<div class="set-row"><div class="sl">${e.label}<small>${e.desc}</small></div>
      <div class="seg" role="group" aria-label="${e.label}">${e.opts.map(([n,s])=>`<button data-k="${e.key}" data-v='${JSON.stringify(n)}' class="${i(e.key)===n?"active":""}">${s}</button>`).join("")}</div></div>`).join("")}
    <p style="font-size:.85rem;color:var(--ink-2)">設定會自動儲存在此瀏覽器。</p>`);t.addEventListener("click",async e=>{const n=e.target.closest("[data-k]");if(!n)return;const s=n.dataset.k,r=JSON.parse(n.dataset.v);s==="fullscreen"?await Qm(r):gs(s,r),t.querySelectorAll(`[data-k="${s}"]`).forEach(o=>o.classList.toggle("active",o===n)),s==="lang"&&r==="en"&&nn("English UI is a preview; learning content remains in Traditional Chinese.","",3500)})}function Qb(i){_r=i,Ie("settings",({key:t,value:e})=>{t==="performance"&&_r.applyPerformance(e),Vf()}),Vf()}let re=null;function ll(){const i=zt("#task-hud");if(document.querySelectorAll(".zone-label.target").forEach(t=>t.classList.remove("target")),!re){i.hidden=!0,i.innerHTML="";return}i.hidden=!1,i.innerHTML=`
    <div class="th-title">${Mt(re.title)}</div>
    <div class="th-text">${Mt(re.text)}</div>
    <div class="th-row">
      ${(re.buttons||[]).map((t,e)=>`<button class="btn sm ${t.cls||""}" data-tb="${e}">${Mt(t.label)}</button>`).join("")}
      <button class="btn sm" data-tb="cancel">結束</button>
      ${re.feedback?`<span class="th-fb" style="font-weight:700;color:${re.feedback.ok?"var(--good)":"var(--bad)"}">${Mt(re.feedback.msg)}</span>`:""}
    </div>`,i.querySelectorAll("[data-tb]").forEach(t=>t.addEventListener("click",()=>{var n,s,r;const e=t.dataset.tb;if(e==="cancel"){const o=re;Fs(),(n=o==null?void 0:o.onCancel)==null||n.call(o)}else(r=(s=re.buttons[+e]).onClick)==null||r.call(s)})),re.hintZones&&re.showHint&&re.hintZones.forEach(t=>{var e;return(e=document.querySelector(`.zone-label[data-zone="${t}"]`))==null?void 0:e.classList.add("target")})}function Ps(i){re={...i,feedback:null},ll()}function Fs(){re=null,ll()}function t0(){return re}Ie("zone:click",i=>{var e,n;if(!(re!=null&&re.accept))return;const t=re.accept(i);if(t===!0){Xn("ok");const s=re;re.feedback={ok:!0,msg:`✔ 正確！這是「${i.name}」`},ll(),(e=s.onSuccess)==null||e.call(s,i)}else t===!1&&(Xn("bad"),re.feedback={ok:!1,msg:`✘ 這是「${i.name}」，再找找看！`},re.misses=(re.misses||0)+1,re.misses>=2&&re.hintZones&&(re.showHint=!0),ll(),(n=re.onWrong)==null||n.call(re,i))});let cl,Wo=!1,vo=0,gr=null;function e0(){if(!Wo)return;if(vo>=yc.length)return xo();const i=yc[vo];cl.handleZoneClick(i.zoneId),Ps({title:`🧭 自動導覽 ${vo+1}/${yc.length}`,text:i.say,buttons:[{label:"⏭ 下一站",onClick:Wf},{label:"⏹ 停止",onClick:xo}],isTour:!0,onCancel:xo});const t=Math.max(4500,i.say.length*230)/(Bt.animSpeed||1);let e=!1;const n=()=>{e||(e=!0,clearTimeout(gr),gr=setTimeout(Wf,600))};Gr(i.say,{force:Bt.voice,onend:n})?gr=setTimeout(n,t+8e3):gr=setTimeout(n,t)}function Wf(){clearTimeout(gr),vo++,e0()}function tE(){Wo=!0,vo=0,cl.mode==="full"&&cl.setMode("interior"),ge("tour",!0),e0()}function xo(){var i;Wo=!1,clearTimeout(gr),Ym(),(i=t0())!=null&&i.isTour&&Fs(),ge("tour",!1)}function eE(){Wo?xo():tE()}function nE(i){cl=i,Ie("modal",t=>t&&Wo&&xo())}let Fi;const iE=[{id:"guide",label:"📖 圖書館導覽"},{id:"find",label:"1 認識空間"},{id:"borrow",label:"2 模擬借書"},{id:"opac",label:"3 圖書查詢"},{id:"copier",label:"4 數位服務"},{id:"rules",label:"5 使用規範"},{id:"faq",label:"6 FAQ"},{id:"quiz",label:"✏️ 測驗"}],qf=i=>`<div class="steps">${i.map((t,e)=>`${e?"<i>➜</i>":""}<span>${Mt(t)}</span>`).join("")}</div>`;function Hh(i="guide"){const t=document.createElement("div");t.innerHTML=`<div class="tabs" role="tablist">${iE.map(n=>`<button role="tab" data-tab="${n.id}">${n.label}</button>`).join("")}</div><div id="unit-body"></div>`,Vs("🎓 學習中心｜圖書館利用教育",t,{wide:!0});const e=n=>{t.querySelectorAll("[data-tab]").forEach(r=>{r.classList.toggle("active",r.dataset.tab===n),r.setAttribute("aria-selected",r.dataset.tab===n)});const s=t.querySelector("#unit-body");s.innerHTML="",n0[n](s)};t.querySelectorAll("[data-tab]").forEach(n=>n.addEventListener("click",()=>e(n.dataset.tab))),e(i)}const n0={guide(i){i.innerHTML=`<p class="unit-intro">${Bb} <a href="docs/library-guide.pdf" target="_blank" rel="noopener">開啟原始 PDF</a></p>
      ${rl.map(t=>`<div class="card-section"><h4>${Mt(t.title)}</h4><ul class="rule-list">${t.items.map(e=>`<li>${Mt(e)}</li>`).join("")}</ul>
      ${Hr?`<button class="btn sm" data-say="${t.id}">🔊 朗讀本節</button>`:""}</div>`).join("")}`,i.querySelectorAll("[data-say]").forEach(t=>t.addEventListener("click",()=>{const e=rl.find(n=>n.id===t.dataset.say);Gr(`${e.title}。${e.items.join("。")}`,{force:!0})}))},find(i){const t=new Set(At.findFound);i.innerHTML=`<p class="unit-intro">在 3D 模型中找出下列 ${Gn.length} 個地點。點「開始找」後關閉視窗，在模型上點擊正確區域。答錯 2 次會顯示提示。</p>
      <div class="progress-bar"><i style="width:${t.size/Gn.length*100}%"></i></div>
      <p style="font-size:.9rem">已找到 ${t.size} / ${Gn.length}</p>
      <div class="grid-cards">${Gn.map((e,n)=>`<div class="mcard ${t.has(n)?"done":""}"><h4>${t.has(n)?"✔ ":""}${Mt(e.prompt)}</h4><button class="btn sm primary" data-find="${n}">開始找</button></div>`).join("")}</div>
      <div class="row" style="margin-top:12px"><button class="btn accent" id="find-all">依序挑戰全部</button></div>`,i.querySelectorAll("[data-find]").forEach(e=>e.addEventListener("click",()=>Gh(+e.dataset.find,!1))),i.querySelector("#find-all").addEventListener("click",()=>Gh(Gn.findIndex((e,n)=>!t.has(n))>=0?Gn.findIndex((e,n)=>!t.has(n)):0,!0))},borrow(i){i.innerHTML=`<p class="unit-intro">跟著 3D 地面箭頭走一次完整借書流程：</p>
      ${qf(["一樓大門","往 2F 樓梯","二樓書庫","選書","返回一樓","借還書櫃台","出示學生證","完成借書"])}
      <div class="grid-cards" style="margin:12px 0">
        <div class="mcard"><h4>📚 最多 ${ws.maxBooks} 本</h4>請攜學生證</div>
        <div class="mcard"><h4>📅 借期 2 週</h4>請於開放日 16:00 前完成借書程序</div>
        <div class="mcard"><h4>🔁 續借 2 週</h4>於到期日前 1～2 日到圖書館或圖書查詢系統辦理</div>
        <div class="mcard"><h4>⏰ 逾期</h4>暫停借閱權利；累計每本書逾期天數為暫停借閱權限天數</div>
      </div>
      <h4>逾期停權試算</h4>
      <div class="row"><div class="field"><label for="od-books">逾期書本數</label><input id="od-books" type="number" min="1" max="4" value="2"></div>
      <div class="field"><label for="od-days">每本逾期天數</label><input id="od-days" type="number" min="1" value="3"></div>
      <button class="btn" id="od-calc">計算</button></div><div id="od-out"></div>
      <p>已完成模擬借書：<b>${At.borrowCompleted}</b> 次</p>
      <button class="btn accent" id="borrow-go">🚶 開始 3D 模擬借書</button>`,i.querySelector("#borrow-go").addEventListener("click",()=>ge("borrow:start")),i.querySelector("#od-calc").addEventListener("click",()=>{const t=Math.max(1,Math.min(4,+i.querySelector("#od-books").value||1)),e=Math.max(1,+i.querySelector("#od-days").value||1);i.querySelector("#od-out").innerHTML=`<div class="result-box bad">${t} 本 × ${e} 天 ＝ 暫停借閱權限 <b>${t*e} 天</b>（累計每本書逾期天數）</div>`})},opac(i){i.innerHTML=`<p class="unit-intro">查詢步驟：</p>${qf(Hb)}
      <div class="card-section" style="background:#f2f7ff">
        <div class="row"><strong>🔎 館藏圖書查詢（模擬）</strong><span class="demo-tag">${Oo}</span></div>
        <div class="row" style="margin-top:8px">
          <div class="field"><label for="op-type">查詢欄位</label><select id="op-type"><option value="keyword">關鍵字</option><option value="title">書名</option><option value="isbn">ISBN</option></select></div>
          <div class="field" style="flex:1;min-width:180px"><label for="op-q">查詢內容</label><input id="op-q" type="search" placeholder="例：SDGs、哲學、9789990000011"></div>
          <button class="btn primary" id="op-go">開始查詢</button>
        </div>
        <div id="op-out"></div>
      </div>
      <p style="font-size:.88rem;color:var(--ink-2)">提醒：資訊檢索電腦不可連線任何不當網頁，違者經查證、記錄後將受校規警告以上處分。</p>`;const t=()=>{const e=i.querySelector("#op-type").value,n=i.querySelector("#op-q").value.trim().toLowerCase(),s=i.querySelector("#op-out");if(!n){s.innerHTML='<div class="result-box bad">請輸入查詢內容。</div>';return}const r=Fo.filter(o=>e==="isbn"?o.isbn.includes(n.replace(/-/g,"")):e==="title"?o.title.toLowerCase().includes(n):[o.title,o.author,o.topic,o.callNo].join(" ").toLowerCase().includes(n));s.innerHTML=r.length?`<p>找到 ${r.length} 筆（示範資料）：</p>${r.map(o=>`<div class="book-row"><span class="spine" style="background:#3b7ddd"></span><div class="bi"><b>${Mt(o.title)}</b><small>${Mt(o.author)}｜ISBN ${o.isbn}｜索書號 ${Mt(o.callNo)}｜位置：2F 書架 ${o.shelf}${o.inLibraryOnly?"｜限館內閱讀":"｜可外借"}</small></div><button class="btn sm" data-shelf="${o.shelf}">在 3D 中顯示</button></div>`).join("")}`:'<div class="result-box">查無資料，試試其他關鍵字（例：永續、藝術、科學）。</div>',s.querySelectorAll("[data-shelf]").forEach(o=>o.addEventListener("click",()=>{Zn(!0);const a=`f2-shelf-${String(o.dataset.shelf).padStart(2,"0")}`;Fi.floor=2,Fi.setMode("interior"),setTimeout(()=>Fi.select(a),300)}))};i.querySelector("#op-go").addEventListener("click",t),i.querySelector("#op-q").addEventListener("keydown",e=>e.key==="Enter"&&t())},copier(i){i.innerHTML=`<p class="unit-intro">事務機器（一樓東北側）提供影印、列印與掃描。請自備悠遊卡（餘額 ${Ec} 元以上）。</p>
      <table style="width:100%;border-collapse:collapse;margin-bottom:12px">${bc.map(t=>`<tr><td style="padding:6px;border-bottom:1px solid var(--line)">${t.name}</td><td style="padding:6px;border-bottom:1px solid var(--line);text-align:right"><b>${t.price?`每頁 ${t.price} 元`:"過卡，不收費"}</b></td></tr>`).join("")}</table>
      <div class="row">
        <div class="field"><label for="cp-svc">服務</label><select id="cp-svc">${bc.map(t=>`<option value="${t.id}">${t.name}</option>`).join("")}</select></div>
        <div class="field"><label for="cp-pages">頁數</label><input id="cp-pages" type="number" min="1" value="10"></div>
        <div class="field"><label for="cp-bal">悠遊卡餘額（元）</label><input id="cp-bal" type="number" min="0" value="50"></div>
        <button class="btn primary" id="cp-calc">計算費用</button>
      </div><div id="cp-out"></div>
      <button class="btn" id="cp-3d" style="margin-top:10px">在 3D 中找到事務機器</button>`,i.querySelector("#cp-calc").addEventListener("click",()=>{const t=bc.find(o=>o.id===i.querySelector("#cp-svc").value),e=Math.floor(+i.querySelector("#cp-pages").value),n=+i.querySelector("#cp-bal").value,s=i.querySelector("#cp-out");if(!(e>=1)){s.innerHTML='<div class="result-box bad">請輸入正確頁數（1 頁以上）。</div>';return}const r=t.price*e;if(!(n>=Ec)){Xn("bad"),s.innerHTML=`<div class="result-box bad">悠遊卡餘額 ${n} 元，未達 ${Ec} 元以上，<b>無法使用</b>事務機器，請先加值。</div>`;return}if(r>n){Xn("bad"),s.innerHTML=`<div class="result-box bad">${t.name} ${e} 頁需 <b>${r} 元</b>，餘額 ${n} 元不足，請先加值。</div>`;return}Xn("ok"),s.innerHTML=`<div class="result-box ok">${t.name} ${e} 頁 × ${t.price} 元 ＝ <b>${r} 元</b>${t.price===0?"（掃描只需過卡，無需付費）":""}；扣款後餘額 <b>${n-r} 元</b>。</div>`}),i.querySelector("#cp-3d").addEventListener("click",()=>{Zn(!0),Fi.handleZoneClick("f1-machines")})},rules(i){i.innerHTML='<p class="unit-intro">判斷下列情境是否符合圖書館規定（答案依說明資料）。</p><div id="rs-list"></div>';const t=i.querySelector("#rs-list");t.innerHTML=zf.map(n=>{const s=At.rulesAnswered[n.id];return`<div class="card-section" data-rs="${n.id}"><b>${Mt(n.q)}</b>
        <div class="row" style="margin-top:6px"><button class="btn sm" data-a="1">⭕ 可以</button><button class="btn sm" data-a="0">❌ 不可以</button></div>
        <div class="rs-fb">${s?e(n,s.correct):""}</div></div>`}).join(""),t.querySelectorAll("[data-rs]").forEach(n=>n.querySelectorAll("[data-a]").forEach(s=>s.addEventListener("click",()=>{const r=zf.find(a=>a.id===n.dataset.rs),o=s.dataset.a==="1"===r.answer;Xn(o?"ok":"bad"),At.rulesAnswered[r.id]={correct:o,at:new Date().toISOString()},ts(),n.querySelector(".rs-fb").innerHTML=e(r,o)})));function e(n,s){return`<div class="result-box ${s?"ok":"bad"}">${s?"✔ 答對了！":"✘ 再想想。"}正確答案：<b>${n.answer?"可以":"不可以"}</b>。${Mt(n.explain)}</div>`}},faq(i){i.innerHTML=`<div class="row"><div class="field" style="flex:1;min-width:200px"><label for="faq-q">搜尋 FAQ</label><input id="faq-q" type="search" placeholder="例：續借、影印、漫畫"></div>
      <div class="field"><label for="faq-cat">分類</label><select id="faq-cat"><option value="">全部分類</option>${Object.entries(Ff).map(([e,n])=>`<option value="${e}">${n}</option>`).join("")}</select></div></div>
      <div id="faq-list"></div><p style="font-weight:700;color:#c2185b">${Fb}</p>`;const t=()=>{const e=i.querySelector("#faq-q").value.trim(),n=i.querySelector("#faq-cat").value,s=zh.filter(r=>(!n||r.category===n)&&(!e||(r.q+r.a).includes(e)));i.querySelector("#faq-list").innerHTML=s.length?s.map(r=>`<details class="qa"><summary><span class="qid">${r.id}</span><span>${Mt(r.q)}</span></summary><div class="ans">A${r.id.slice(1)}：${Mt(r.a)}</div>
          <div class="ans-actions">${Hr?`<button class="btn sm" data-say="${r.id}">🔊 朗讀</button>`:""}<button class="btn sm" data-goto="${r.zoneId}">📍 相關位置</button><span class="demo-tag" style="background:#eef4ff;border-color:var(--line);color:var(--ink-2)">${Ff[r.category]}</span></div></details>`).join(""):"<p>沒有符合的問題。</p>",i.querySelectorAll("[data-say]").forEach(r=>r.addEventListener("click",()=>{const o=zh.find(a=>a.id===r.dataset.say);Gr(`${o.q}。${o.a}`,{force:!0})})),i.querySelectorAll("[data-goto]").forEach(r=>r.addEventListener("click",()=>{Zn(!0),Fi.handleZoneClick(r.dataset.goto)}))};i.querySelector("#faq-q").addEventListener("input",t),i.querySelector("#faq-cat").addEventListener("change",t),t()},quiz(i){const t=jm.slice().sort(()=>Math.random()-.5).slice(0,zb);let e=0,n=0;const s=[],r=At.quiz.best,o=()=>{if(e>=t.length)return a();const l=t[e];i.innerHTML=`<p class="unit-intro">第 ${e+1} / ${t.length} 題｜目前答對 ${n} 題${r!=null?`｜最佳成績 ${r} 分`:""}</p>
        <div class="progress-bar"><i style="width:${e/t.length*100}%"></i></div>
        <div class="quiz-q">${Mt(l.q)}</div>
        <div class="quiz-opts">${l.options.map((c,h)=>`<button data-o="${h}">${"ABCD"[h]}. ${Mt(c)}</button>`).join("")}</div>
        <div id="qz-fb"></div>`,i.querySelectorAll("[data-o]").forEach(c=>c.addEventListener("click",()=>{const h=+c.dataset.o,u=h===l.answer;i.querySelectorAll("[data-o]").forEach(d=>{d.disabled=!0,+d.dataset.o===l.answer&&d.classList.add("right")}),u?n++:(c.classList.add("wrong"),s.push({id:l.id,q:l.q,your:l.options[h],answer:l.options[l.answer]})),Xn(u?"ok":"bad"),i.querySelector("#qz-fb").innerHTML=`<div class="result-box ${u?"ok":"bad"}">${u?"✔ 答對！":"✘ 答錯了。"}${Mt(l.explain)}</div>
            <div class="row" style="margin-top:8px"><button class="btn primary" id="qz-next">${e+1<t.length?"下一題":"看成績"}</button></div>`,i.querySelector("#qz-next").addEventListener("click",()=>{e++,o()})}))},a=()=>{const l=Math.round(n/t.length*100);At.quiz.last=l,At.quiz.best=Math.max(At.quiz.best??0,l),At.quiz.attempts+=1,At.quiz.wrong=s,At.quiz.lastAt=new Date().toISOString(),ts(),l>=Ra&&Vo(`測驗 ${l} 分！`),i.innerHTML=`<div class="result-box ${l>=Ra?"ok":"bad"}" style="font-size:1.1rem">答對 <b>${n}</b> / ${t.length} 題，得分 <b>${l}</b> 分（${l>=Ra?"通過":`未達 ${Ra} 分`}）</div>
        ${s.length?`<h4>錯誤題目</h4>${s.map(c=>`<div class="card-section"><b>${Mt(c.q)}</b><br>你的答案：${Mt(c.your)}<br>正確答案：<b style="color:var(--good)">${Mt(c.answer)}</b></div>`).join("")}`:"<p>全部答對，太厲害了！</p>"}
        <div class="row" style="margin-top:10px"><button class="btn primary" id="qz-again">再測一次</button></div>`,i.querySelector("#qz-again").addEventListener("click",()=>n0.quiz(i)),ge("quiz:done",{percent:l,score:n,total:t.length})};o()}};function Gh(i,t){Zn(!0);const e=Gn[i];e&&(Fi.setMode("explode"),Ps({title:`認識空間 ${i+1}/${Gn.length}`,text:`請在 3D 模型中找出：「${e.prompt}」`,hintZones:e.zoneIds.slice(0,3),accept:n=>e.zoneIds.includes(n.id),onSuccess:()=>{At.findFound.includes(i)||At.findFound.push(i),ts(),At.findFound.length===Gn.length&&Vo("認識空間全部完成！");const n=Gn.findIndex((s,r)=>!At.findFound.includes(r));setTimeout(()=>{t&&n>=0?Gh(n,!0):(Fs(),nn(n>=0?"找到了！可到學習中心挑戰下一個":"全部找到了！","ok"))},1200)},buttons:[{label:"💡 提示",onClick:()=>Fi.focusZone(e.zoneIds[0])}]}))}function sE(i){Fi=i,Ie("open:learn",({tab:t})=>Hh(t))}let tn,Vh=0,Qn=[],vr=6;function rE(i){tn=i}function Xf(i){return`${i.getFullYear()}/${String(i.getMonth()+1).padStart(2,"0")}/${String(i.getDate()).padStart(2,"0")}`}function Lu(i){Vh=i;const t=If[i];if(!t)return aE();(t.floor!==tn.floor||!["interior","explode"].includes(tn.mode))&&(tn.floor=t.floor,tn.setMode("interior")),tn.showPath(t.path.length?t.path:null),t.path.length&&tn.placeAvatar(t.path[0]);const e=`模擬借書 ${i+1}/${If.length}：${t.title}`;if(Gr(t.hint),t.action==="pickBooks"){Ps({title:e,text:t.hint,buttons:[{label:"📚 開啟書架選書",cls:"primary",onClick:$f}],onCancel:Tc}),$f();return}if(t.action==="showCard"){Ps({title:e,text:`${t.hint}（已選 ${Qn.length} 本）`,buttons:[{label:"🪪 出示學生證",cls:"accent",onClick:oE}],onCancel:Tc});return}const n=t.anyShelf?null:[t.targetZone];Ps({title:e,text:t.hint,hintZones:[t.targetZone],showHint:!0,accept:s=>t.anyShelf?s.kind==="bookshelf"||s.id==="f2-stacks":n.includes(s.id),onSuccess:async s=>{s.kind==="bookshelf"&&(vr=s.options.index),t.path.length&&await tn.walkAvatar(t.path),(t.id==="to-stairs"||t.id==="back-down")&&(tn.floor=t.id==="to-stairs"?2:1,tn.setMode("interior")),setTimeout(()=>Lu(Vh+1),400)},onCancel:Tc}),t.targetZone&&tn.focusZone(t.targetZone)}function $f(){const i=Fo.slice().sort((n,s)=>(n.shelf===vr?-1:0)-(s.shelf===vr?-1:0)),t=Vs(`選書（第 ${vr} 排書架附近）`,`
    <p><span class="demo-tag">${Oo}</span> 每人最多可借 <b>${ws.maxBooks}</b> 本，借期 2 週。標示「限館內閱讀」的書不能外借。</p>
    <div id="pick-list">${i.map(n=>`
      <label class="book-row"><input type="checkbox" value="${n.id}" ${Qn.includes(n.id)?"checked":""}>
        <span class="spine" style="background:${n.shelf===vr?"#fb8500":"#3b7ddd"}"></span>
        <span class="bi"><b>${Mt(n.title)}</b><small>書架 ${n.shelf}｜${Mt(n.callNo)}${n.inLibraryOnly?'｜<b style="color:var(--bad)">限館內閱讀</b>':""}</small></span></label>`).join("")}</div>
    <div class="row" style="margin-top:10px"><b id="pick-count"></b><button class="btn primary" id="pick-done">完成選書</button></div>`),e=()=>{t.querySelector("#pick-count").textContent=`已選 ${Qn.length} / ${ws.maxBooks} 本`};e(),t.querySelectorAll("input[type=checkbox]").forEach(n=>n.addEventListener("change",()=>{const s=Fo.find(r=>r.id===n.value);if(n.checked){if(s.inLibraryOnly){n.checked=!1,nn("漫畫書籍僅供在館閱讀，不開放外借！","warn");return}if(Qn.length>=ws.maxBooks){n.checked=!1,nn(`每人最多可借 ${ws.maxBooks} 本喔！`,"warn");return}Qn.push(s.id)}else Qn=Qn.filter(r=>r!==s.id);e()})),t.querySelector("#pick-done").addEventListener("click",()=>{if(!Qn.length){nn("請至少選 1 本書","warn");return}Zn(!0),Lu(Vh+1)})}function oE(){const i=new Date(Date.now()+ws.loanDays*864e5),t=new Date(i.getTime()-2*864e5),e=Qn.map(n=>Fo.find(s=>s.id===n));At.borrowCompleted+=1,ts(),Fs(),tn.clearPath(),tn.hideAvatar(),Vo("🎉 借書完成！"),ge("borrow:done"),Vs("借書完成（模擬）",`
    <div class="result-box ok"><b>✔ 已出示學生證，完成借書程序</b></div>
    <h4>借閱書目 <span class="demo-tag">${Oo}</span></h4>
    ${e.map(n=>`<div class="book-row"><span class="spine" style="background:#2e9e5b"></span><div class="bi"><b>${Mt(n.title)}</b><small>${Mt(n.callNo)}</small></div></div>`).join("")}
    <div class="stat-grid">
      <div class="stat">到期日<b>${Xf(i)}</b></div>
      <div class="stat">可辦續借<b>${Xf(t)} 起</b></div>
      <div class="stat">續借期<b>2 週</b></div>
    </div>
    <ul class="rule-list">
      <li>續借：於到期日前 1～2 日到圖書館或圖書查詢系統辦理，續借期為二週。</li>
      <li>還書：出借之圖書須於到期前至圖書館讀者服務櫃台辦理歸還。</li>
      <li>逾期：累計每本書逾期天數為暫停借閱權限天數。</li>
    </ul>`)}function aE(){Fs()}function Tc(){tn.clearPath(),tn.hideAvatar()}function lE(){Qn=[],vr=6,Zn(!0),nn("開始模擬借書：依地面箭頭前進！","ok"),Lu(0)}let ao;const Vn=[{id:"q1",name:"找到圖書館大門",desc:"在 3D 模型中找到一樓南側的大門並點擊它。",target:["f1-entrance"],points:20,floor:1,op:"旋轉／縮放，點擊大門"},{id:"q2",name:"找出一樓資訊檢索區",desc:"找到可以查詢館藏的電腦區（提示：在行政辦公室上方）。",target:["f1-opac"],points:20,floor:1,op:"點擊電腦區域"},{id:"q3",name:"從一樓走到二樓書庫",desc:"先點擊一樓「往 2F 樓梯」，再點擊二樓任一書架。",target:["f1-stairs"],then:"shelf",points:30,floor:1,op:"點樓梯 → 點書架"},{id:"q4",name:"選書並完成借書模擬",desc:"依地面箭頭完成：大門 → 樓梯 → 書庫選書 → 一樓櫃台 → 出示學生證。",borrow:!0,points:40,op:"跟著導覽線操作"},{id:"q5",name:"找到梅高特藏區",desc:"找到陳列畢業紀念冊、梅岡風的特藏區。",target:["f1-meigao"],points:20,floor:1,op:"點擊東北角區域"},{id:"q6",name:"完成圖書館利用教育測驗",desc:"完成 10 題測驗，答對 70% 以上即過關。",quiz:!0,points:50,op:"在學習中心作答"}],zo="楊梅高中圖書館探索達人";function Ms(i){var t;return!!((t=At.quests[i])!=null&&t.done)}function hl(i){const t=Vn.find(n=>n.id===i);if(!t||Ms(i))return;At.quests[i]={done:!0,at:new Date().toISOString(),points:t.points},At.points=Object.values(At.quests).reduce((n,s)=>n+(s.points||0),0);const e=Vn.every(n=>Ms(n.id));e&&(At.badge=!0),ts(),Vo(`🏅 關卡完成：${t.name}（+${t.points} 分）`),e&&setTimeout(()=>hE(),2e3),ge("quest:done",t)}function cE(i){if(Zn(!0),i.borrow){ge("borrow:start");return}if(i.quiz){ge("open:learn",{tab:"quiz"});return}ao.floor=i.floor,ao.setMode("interior");const t=()=>{ao.floor=2,ao.setMode("interior"),Ps({title:`探險任務：${i.name}（2/2）`,text:"上樓了！現在點擊二樓任一排書架。",hintZones:["f2-shelf-01","f2-shelf-05","f2-shelf-10"],accept:e=>e.kind==="bookshelf"||e.id==="f2-stacks",onSuccess:()=>{setTimeout(Fs,1200),hl(i.id)}})};Ps({title:`探險任務：${i.name}${i.then?"（1/2）":""}`,text:i.desc,hintZones:i.target,accept:e=>i.target.includes(e.id),onSuccess:()=>{i.then?setTimeout(t,700):(setTimeout(Fs,1200),hl(i.id))}})}function hE(){Vs("🏅 恭喜獲得徽章！",`
    <div class="badge-big"><div class="medal">🏅</div><h2>${zo}</h2>
    <p>${Mt(At.nickname||"同學")}，你已完成全部 ${Vn.length} 個探險關卡，累積 ${At.points} 分！</p></div>`),Vo(zo)}function uE(){const i=Vn.filter(e=>Ms(e.id)).length;Vs("🗺️ 圖書館新生探險",`
    <p class="unit-intro">完成 ${Vn.length} 個關卡即可獲得「${zo}」徽章。目前積分 <b>${At.points}</b> 分。</p>
    <div class="progress-bar" aria-label="任務進度"><i style="width:${i/Vn.length*100}%"></i></div>
    <p style="font-size:.9rem;color:var(--ink-2)">進度 ${i} / ${Vn.length}</p>
    ${Vn.map((e,n)=>`
      <div class="quest ${Ms(e.id)?"done":""}">
        <div class="qn">${Ms(e.id)?"✔":n+1}</div>
        <div class="qb"><h4>${Mt(e.name)} <small style="color:var(--accent)">+${e.points} 分</small></h4>
          <p>${Mt(e.desc)}<br><small>3D 操作：${Mt(e.op)}</small></p>
          <button class="btn sm ${Ms(e.id)?"":"primary"}" data-q="${e.id}">${Ms(e.id)?"再玩一次":"開始任務"}</button></div>
      </div>`).join("")}
    ${At.badge?`<div class="badge-big" style="margin-top:10px"><div class="medal">🏅</div><b>${zo}</b></div>`:""}`).querySelectorAll("[data-q]").forEach(e=>e.addEventListener("click",()=>cE(Vn.find(n=>n.id===e.dataset.q))))}function dE(i){ao=i,Ie("borrow:done",()=>hl("q4")),Ie("quiz:done",({percent:t})=>{t>=70?hl("q6"):nn("測驗需達 70% 才能完成第 6 關，再挑戰一次！","warn")})}const Du=i=>`${Math.floor(i/3600)} 時 ${Math.floor(i%3600/60)} 分 ${i%60} 秒`,Zi=i=>i?new Date(i).toLocaleString("zh-TW",{hour12:!1}):"—";function La(){const i=Yn.filter(t=>!t.hidden&&t.interactionType!=="none");return{nickname:At.nickname||"（未設定）",exploredCount:At.explored.length,explorableCount:i.length,explored:At.explored.map(t=>{var e;return((e=$i(t))==null?void 0:e.name)||t}),quests:Vn.map(t=>{var e,n;return{id:t.id,name:t.name,done:!!((e=At.quests[t.id])!=null&&e.done),at:((n=At.quests[t.id])==null?void 0:n.at)||""}}),points:At.points,badge:At.badge?zo:"",quizBest:At.quiz.best,quizLast:At.quiz.last,quizAttempts:At.quiz.attempts,wrong:At.quiz.wrong,findFound:At.findFound.map(t=>{var e;return(e=Gn[t])==null?void 0:e.prompt}),borrowCompleted:At.borrowCompleted,timeSec:At.timeSec,startedAt:At.startedAt,lastStudy:At.lastStudy}}function fE(i){return"\uFEFF"+[["項目","內容"],["暱稱",i.nickname],["探索區域數",`${i.exploredCount}/${i.explorableCount}`],["探索過的區域",i.explored.join("、")],["積分",i.points],["徽章",i.badge],...i.quests.map(e=>[`關卡：${e.name}`,e.done?`完成 ${Zi(e.at)}`:"未完成"]),["測驗最佳分數",i.quizBest??""],["測驗最近分數",i.quizLast??""],["測驗次數",i.quizAttempts],...i.wrong.map((e,n)=>[`錯誤題目 ${n+1}`,`${e.q}（正解：${e.answer}）`]),["認識空間已找到",i.findFound.join("、")],["完成模擬借書次數",i.borrowCompleted],["探索時間",Du(i.timeSec)],["開始時間",Zi(i.startedAt)],["最近學習時間",Zi(i.lastStudy)]].map(e=>e.map(n=>`"${String(n??"").replace(/"/g,'""')}"`).join(",")).join(`\r
`)}function pE(i){const t=document.getElementById("print-root");t.innerHTML=`<h1>楊梅高中圖書館 3D 探索島｜學習成果</h1>
    <p>列印時間：${Zi(new Date().toISOString())}</p>
    <table>
      <tr><th>暱稱</th><td>${Mt(i.nickname)}</td></tr>
      <tr><th>積分／徽章</th><td>${i.points} 分 ${Mt(i.badge)}</td></tr>
      <tr><th>探索區域</th><td>${i.exploredCount}/${i.explorableCount}：${Mt(i.explored.join("、"))}</td></tr>
      <tr><th>完成關卡</th><td>${i.quests.filter(e=>e.done).map(e=>Mt(e.name)).join("、")||"—"}</td></tr>
      <tr><th>測驗</th><td>最佳 ${i.quizBest??"—"} 分、最近 ${i.quizLast??"—"} 分、共 ${i.quizAttempts} 次</td></tr>
      <tr><th>錯誤題目</th><td>${i.wrong.map(e=>`${Mt(e.q)}（正解：${Mt(e.answer)}）`).join("<br>")||"—"}</td></tr>
      <tr><th>模擬借書</th><td>${i.borrowCompleted} 次</td></tr>
      <tr><th>探索時間</th><td>${Du(i.timeSec)}</td></tr>
      <tr><th>最近學習</th><td>${Zi(i.lastStudy)}</td></tr>
    </table>`,window.print()}function Wh(){const i=La(),t=i.quests.filter(s=>s.done).length,e=Vs("📒 學習歷程",`
    <div class="row"><div class="field" style="flex:1;min-width:200px"><label for="rec-nick">暱稱</label><input id="rec-nick" maxlength="20" value="${Mt(At.nickname)}" placeholder="輸入暱稱（僅存於本機）"></div>
      <button class="btn primary" id="rec-save">儲存暱稱</button></div>
    <div class="stat-grid">
      <div class="stat">積分<b>${i.points}</b></div>
      <div class="stat">完成關卡<b>${t}/${Vn.length}</b></div>
      <div class="stat">探索區域<b>${i.exploredCount}/${i.explorableCount}</b></div>
      <div class="stat">測驗最佳<b>${i.quizBest??"—"}</b></div>
      <div class="stat">模擬借書<b>${i.borrowCompleted} 次</b></div>
      <div class="stat">探索時間<b style="font-size:1rem">${Du(i.timeSec)}</b></div>
    </div>
    ${i.badge?`<div class="badge-big"><div class="medal">🏅</div><b>${Mt(i.badge)}</b></div>`:""}
    <div class="card-section"><h4>完成的關卡</h4>${i.quests.map(s=>`<div>${s.done?"✅":"⬜"} ${Mt(s.name)} ${s.done?`<small>（${Zi(s.at)}）</small>`:""}</div>`).join("")}</div>
    <div class="card-section"><h4>探索過的區域</h4><p>${Mt(i.explored.join("、"))||"尚未探索，點擊 3D 模型中的區域試試！"}</p></div>
    <div class="card-section"><h4>錯誤題目</h4>${i.wrong.length?i.wrong.map(s=>`<div>• ${Mt(s.q)} <small>（正解：${Mt(s.answer)}）</small></div>`).join(""):"<p>沒有錯題紀錄。</p>"}</div>
    <p style="font-size:.88rem;color:var(--ink-2)">開始時間：${Zi(i.startedAt)}｜最近學習：${Zi(i.lastStudy)}｜資料僅儲存在此瀏覽器（localStorage），不會上傳。</p>
    <div class="row">
      <button class="btn" id="rec-json">⬇ 匯出 JSON</button>
      <button class="btn" id="rec-csv">⬇ 匯出 CSV</button>
      <button class="btn" id="rec-print">🖨 列印學習成果</button>
      <button class="btn" id="rec-restart">🔁 重新開始（保留暱稱）</button>
      <button class="btn danger" id="rec-clear">🗑 清除紀錄</button>
    </div>`);e.querySelector("#rec-save").addEventListener("click",()=>{At.nickname=e.querySelector("#rec-nick").value.trim().slice(0,20),ts(),nn("暱稱已儲存","ok")});const n=new Date().toISOString().slice(0,10);e.querySelector("#rec-json").addEventListener("click",()=>Fh(`library-record-${n}.json`,JSON.stringify({summary:La(),raw:At},null,2))),e.querySelector("#rec-csv").addEventListener("click",()=>Fh(`library-record-${n}.csv`,fE(La()),"text/csv;charset=utf-8")),e.querySelector("#rec-print").addEventListener("click",()=>pE(La())),e.querySelector("#rec-restart").addEventListener("click",()=>{confirm("重新開始會清除關卡、測驗與探索紀錄（保留暱稱），確定嗎？")&&(Uf(!0),Wh())}),e.querySelector("#rec-clear").addEventListener("click",()=>{confirm("確定清除全部學習紀錄（含暱稱）？此動作無法復原。")&&(Uf(!1),Wh())})}const mE={full:"完整建築：拖曳旋轉、滾輪縮放，點擊建築進入室內",explode:"樓層展開：上層 2F、下層 1F，可調整分離距離",f1:"一樓俯視：點擊各區域查看介紹",f2:"二樓俯視：10 排書架與閱讀區",interior:"室內探索：點擊空間，鏡頭自動移到安全視角",compare:"2D／3D 對照：點平面圖或 3D 區域互相同步",validate:"配置驗證：平面圖疊合與方位檢查"};function _E(){Ib();const i=new Rb(zt("#canvas-host"));window.__library=i,Qb(i),Ob(i),qb(i),Xb(i),jb(i),sE(i),rE(i),dE(i),nE(i),ys("#mode-tabs [data-mode]").forEach(c=>c.addEventListener("click",()=>{Xn();const h=c.dataset.mode;(h==="f1"||h==="f2")&&(i.floor=h==="f1"?1:2),i.setMode(h)}));const t=zt("#explode-range");t.max=qt.explodeMax,t.value=i.explode,t.addEventListener("input",()=>i.setExplode(+t.value)),Ie("mode",({mode:c,floor:h})=>{ys("#mode-tabs [data-mode]").forEach(d=>d.classList.toggle("active",d.dataset.mode===c));const u=["interior","compare","validate"].includes(c)?`｜${h}F`:"";zt("#mode-badge").textContent=`${_o(`mode.${c}`)}${u}`,zt("#mode-badge").title=mE[c],zt("#explode-ctrl").hidden=c!=="explode"}),ys("#mode-tabs [data-mode]").forEach(c=>c.classList.toggle("active",c.dataset.mode===i.mode)),zt("#mode-badge").textContent=_o(`mode.${i.mode}`),zt("#explode-ctrl").hidden=i.mode!=="explode",ys("[data-open]").forEach(c=>c.addEventListener("click",()=>{Xn(),{learn:()=>Hh(),quest:uE,record:Wh,settings:Jb}[c.dataset.open]()})),Ie("borrow:start",lE);const e=[.5,1,1.5,2],n=(c,h)=>{var u;return(u=zt(`#toolbar [data-act="${c}"]`))==null?void 0:u.setAttribute("aria-pressed",String(!!h))},s=()=>{n("rotate",Bt.autoRotate),n("night",Bt.night),n("labels",Bt.labels),n("voice",Bt.voice),n("saver",Bt.performance==="saver"),n("fullscreen",go()),zt("#speed-val").textContent=`${Bt.animSpeed}×`},r={home:()=>i.home(),bird:()=>i.birdView(),rotate:()=>{gs("autoRotate",!Bt.autoRotate),i.setAutoRotate(Bt.autoRotate)},night:()=>{gs("night",!Bt.night),i.setNight(Bt.night)},labels:()=>{gs("labels",!Bt.labels),i.setLabels(Bt.labels)},tour:()=>eE(),voice:()=>{if(!Hr)return nn("此瀏覽器不支援語音解說","warn");gs("voice",!Bt.voice),Bt.voice||Ym(),nn(Bt.voice?"語音解說已開啟：點擊區域會朗讀介紹":"語音解說已關閉")},speed:()=>{const c=e.indexOf(Bt.animSpeed);gs("animSpeed",e[(c+1)%e.length]),nn(`動畫速度 ${Bt.animSpeed}×`)},saver:()=>{gs("performance",Bt.performance==="saver"?"standard":"saver"),nn(Bt.performance==="saver"?"手機省電模式：已關閉陰影並降低畫面更新率":"已恢復標準效能")},fullscreen:()=>Qm()};ys("#toolbar [data-act]").forEach(c=>c.addEventListener("click",()=>{Xn(),r[c.dataset.act](),s()})),Ie("tour",c=>n("tour",c)),Ie("settings",s),document.addEventListener("fullscreenchange",s),s();const o=zt("#hover-tip"),a=zt("#viewport");let l=[0,0];a.addEventListener("pointermove",c=>{const h=a.getBoundingClientRect();l=[c.clientX-h.left,c.clientY-h.top],o.style.left=`${l[0]}px`,o.style.top=`${l[1]}px`}),Ie("zone:hover",c=>{o.hidden=!c,c&&(o.textContent=`${c.floor}F｜${c.name}`)}),Ie("zone:click",c=>{c.id==="f1-opac"&&!t0()&&setTimeout(()=>Hh("opac"),650)}),document.addEventListener("keydown",c=>{if(c.target.closest("input, textarea, select")||!zt("#modal").hidden)return;const h={1:"full",2:"explode",3:"f1",4:"f2",5:"interior",6:"compare",7:"validate"};h[c.key]&&((c.key==="3"||c.key==="4")&&(i.floor=c.key==="3"?1:2),i.setMode(h[c.key])),(c.key==="h"||c.key==="H")&&i.home(),c.key==="/"&&(c.preventDefault(),zt("#zone-search").focus())}),requestAnimationFrame(()=>zt("#loading").classList.add("done")),setTimeout(()=>zt("#loading").hidden=!0,600)}try{_E()}catch(i){console.error(i);const t=document.getElementById("loading");t.textContent=`3D 場景載入失敗：${i.message}（請確認瀏覽器支援 WebGL）`}
