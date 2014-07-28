/*!
* Microsoft grants you the right to use these script files for the sole 
* purpose of either: (i) interacting through your browser with the Microsoft 
* website, subject to the website�s terms of use; or (ii) using the files as 
* included with a Microsoft product subject to that product�s license terms. 
* Microsoft reserves all other rights to the files not expressly granted by 
* Microsoft, whether by implication, estoppel or otherwise. The notices and 
* licenses below are for informational purposes only.
* 
* Copyright 2006 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http:*www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
document.createElement("canvas").getContext||function(){function dt(){return this.context_||(this.context_=new ut(this))}function gt(n,t){var r=st.call(arguments,2);return function(){return n.apply(t,r.concat(st.call(arguments)))}}function ht(n){return String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function ct(n){if(n.namespaces.g_vml_||n.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),n.namespaces.g_o_||n.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!n.styleSheets.ex_canvas_){var t=n.createStyleSheet();t.owningElement.id="ex_canvas_",t.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}function ni(n){var t=n.srcElement;switch(n.propertyName){case"width":t.getContext().clearRect(),t.style.width=t.attributes.width.nodeValue+"px",t.firstChild.style.width=t.clientWidth+"px";break;case"height":t.getContext().clearRect(),t.style.height=t.attributes.height.nodeValue+"px",t.firstChild.style.height=t.clientHeight+"px"}}function ti(n){var t=n.srcElement;t.firstChild&&(t.firstChild.style.width=t.clientWidth+"px",t.firstChild.style.height=t.clientHeight+"px")}function g(){return[[1,0,0],[0,1,0],[0,0,1]]}function v(n,t){for(var e=g(),r,f,u,i=0;i<3;i++)for(r=0;r<3;r++){for(f=0,u=0;u<3;u++)f+=n[i][u]*t[u][r];e[i][r]=f}return e}function lt(n,t){t.fillStyle=n.fillStyle,t.lineCap=n.lineCap,t.lineJoin=n.lineJoin,t.lineWidth=n.lineWidth,t.miterLimit=n.miterLimit,t.shadowBlur=n.shadowBlur,t.shadowColor=n.shadowColor,t.shadowOffsetX=n.shadowOffsetX,t.shadowOffsetY=n.shadowOffsetY,t.strokeStyle=n.strokeStyle,t.globalAlpha=n.globalAlpha,t.font=n.font,t.textAlign=n.textAlign,t.textBaseline=n.textBaseline,t.arcScaleX_=n.arcScaleX_,t.arcScaleY_=n.arcScaleY_,t.lineScale_=n.lineScale_}function vt(n){var i=n.indexOf("(",3),r=n.indexOf(")",i+1),t=n.substring(i+1,r).split(",");return t.length==4&&n.substr(3,1)=="a"?alpha=Number(t[3]):t[3]=1,t}function nt(n){return parseFloat(n)/100}function tt(n,t,i){return Math.min(i,Math.max(t,n))}function ii(n){var r,u,f,t,i;return h=parseFloat(n[0])/360%360,h<0&&h++,s=tt(nt(n[1]),0,1),l=tt(nt(n[2]),0,1),s==0?r=u=f=l:(t=l<.5?l*(1+s):l+s-l*s,i=2*l-t,r=it(i,t,h+1/3),u=it(i,t,h),f=it(i,t,h-1/3)),"#"+e[Math.floor(r*255)]+e[Math.floor(u*255)]+e[Math.floor(f*255)]}function it(n,t,i){return i<0&&i++,i>1&&i--,6*i<1?n+(t-n)*6*i:2*i<1?t:3*i<2?n+(t-n)*(2/3-i)*6:n}function rt(n){var u=1,i,f,r,t;if(n=String(n),n.charAt(0)=="#")i=n;else if(/^rgb/.test(n)){for(t=vt(n),i="#",r=0;r<3;r++)f=t[r].indexOf("%")!=-1?Math.floor(nt(t[r])*255):Number(t[r]),i+=e[tt(f,0,255)];u=t[3]}else/^hsl/.test(n)?(t=vt(n),i=ii(t),u=t[3]):i=at[n]||n;return{color:i,alpha:u}}function ri(n){if(w[n])return w[n];var i=document.createElement("div"),t=i.style;try{t.font=n}catch(r){}return w[n]={style:t.fontStyle||o.style,variant:t.fontVariant||o.variant,weight:t.fontWeight||o.weight,size:t.fontSize||o.size,family:t.fontFamily||o.family}}function ui(n,t){var i={},f,u,r;for(f in n)i[f]=n[f];return u=parseFloat(t.currentStyle.fontSize),r=parseFloat(n.size),i.size=typeof n.size=="number"?n.size:n.size.indexOf("px")!=-1?r:n.size.indexOf("em")!=-1?u*r:n.size.indexOf("%")!=-1?u/100*r:n.size.indexOf("pt")!=-1?r/.75:u,i.size*=.981,i}function fi(n){return n.style+" "+n.variant+" "+n.weight+" "+n.size+"px "+n.family}function ei(n){switch(n){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function ut(n){this.m_=g(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=i*1,this.globalAlpha=1,this.font="10px sans-serif",this.textAlign="left",this.textBaseline="alphabetic",this.canvas=n;var t=n.ownerDocument.createElement("div");t.style.width=n.clientWidth+"px",t.style.height=n.clientHeight+"px",t.style.overflow="hidden",t.style.position="absolute",n.appendChild(t),this.element_=t,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function yt(n,t,i,r){n.currentPath_.push({type:"bezierCurveTo",cp1x:t.x,cp1y:t.y,cp2x:i.x,cp2y:i.y,x:r.x,y:r.y}),n.currentX_=r.x,n.currentY_=r.y}function pt(n,t){var r=rt(n.strokeStyle),f=r.color,u=r.alpha*n.globalAlpha,i=n.lineScale_*n.lineWidth;i<1&&(u*=i),t.push("<g_vml_:stroke",' opacity="',u,'"',' joinstyle="',n.lineJoin,'"',' miterlimit="',n.miterLimit,'"',' endcap="',ei(n.lineCap),'"',' weight="',i,'px"',' color="',f,'" />')}function wt(n,t,r,f){var e=n.fillStyle,h=n.arcScaleX_,c=n.arcScaleY_,l=f.x-r.x,a=f.y-r.y,v,k,o,y,g,ut,et;if(e instanceof p){var s=0,w={x:0,y:0},b=0,nt=1;if(e.type_=="gradient"){var st=e.x0_/h,ht=e.y0_/c,ct=e.x1_/h,lt=e.y1_/c,v=n.getCoords_(st,ht),tt=n.getCoords_(ct,lt),at=tt.x-v.x,vt=tt.y-v.y;s=Math.atan2(at,vt)*180/Math.PI,s<0&&(s+=360),s<1e-6&&(s=0)}else v=n.getCoords_(e.x0_,e.y0_),w={x:(v.x-r.x)/l,y:(v.y-r.y)/a},l/=h*i,a/=c*i,k=u.max(l,a),b=2*e.r0_/k,nt=2*e.r1_/k-b;o=e.colors_,o.sort(function(n,t){return n.offset-t.offset});var d=o.length,yt=o[0].color,pt=o[d-1].color,wt=o[0].alpha*n.globalAlpha,bt=o[d-1].alpha*n.globalAlpha,it=[];for(y=0;y<d;y++)g=o[y],it.push(g.offset*nt+b+" "+g.color);t.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',yt,'"',' color2="',pt,'"',' colors="',it.join(","),'"',' opacity="',bt,'"',' g_o_:opacity2="',wt,'"',' angle="',s,'"',' focusposition="',w.x,",",w.y,'" />')}else if(e instanceof ft)l&&a&&(ut=-r.x,et=-r.y,t.push("<g_vml_:fill",' position="',ut/l*h*h,",",et/a*c*c,'"',' type="tile"',' src="',e.src_,'" />'));else{var ot=rt(n.fillStyle),kt=ot.color,dt=ot.alpha*n.globalAlpha;t.push('<g_vml_:fill color="',kt,'" opacity="',dt,'" />')}}function oi(n){return isFinite(n[0][0])&&isFinite(n[0][1])&&isFinite(n[1][0])&&isFinite(n[1][1])&&isFinite(n[2][0])&&isFinite(n[2][1])}function y(n,t,i){if(oi(t)&&(n.m_=t,i)){var r=t[0][0]*t[1][1]-t[0][1]*t[1][0];n.lineScale_=kt(bt(r))}}function p(n){this.type_=n,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function ft(n,t){si(n);switch(t){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=t;break;default:et("SYNTAX_ERR")}this.src_=n.src,this.width_=n.width,this.height_=n.height}function et(n){throw new ot(n);}function si(n){n&&n.nodeType==1&&n.tagName=="IMG"||et("TYPE_MISMATCH_ERR"),n.readyState!="complete"&&et("INVALID_STATE_ERR")}function ot(n){this.code=this[n],this.message=n+": DOM Exception "+this.code}var u=Math,t=u.round,b=u.sin,k=u.cos,bt=u.abs,kt=u.sqrt,i=10,f=i/2,st=Array.prototype.slice,d,e,c,a,at,o,w,n,r;for(ct(document),d={init:function(n){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var t=n||document;t.createElement("canvas"),t.attachEvent("onreadystatechange",gt(this.init_,this,t))}},init_:function(n){for(var i=n.getElementsByTagName("canvas"),t=0;t<i.length;t++)this.initElement(i[t])},initElement:function(n){if(!n.getContext){n.getContext=dt,ct(n.ownerDocument),n.innerHTML="",n.attachEvent("onpropertychange",ni),n.attachEvent("onresize",ti);var t=n.attributes;t.width&&t.width.specified?n.style.width=t.width.nodeValue+"px":n.width=n.clientWidth,t.height&&t.height.specified?n.style.height=t.height.nodeValue+"px":n.height=n.clientHeight}return n}},d.init(),e=[],c=0;c<16;c++)for(a=0;a<16;a++)e[c*16+a]=c.toString(16)+a.toString(16);at={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},o={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"},w={},n=ut.prototype,n.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null),this.element_.innerHTML=""},n.beginPath=function(){this.currentPath_=[]},n.moveTo=function(n,t){var i=this.getCoords_(n,t);this.currentPath_.push({type:"moveTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},n.lineTo=function(n,t){var i=this.getCoords_(n,t);this.currentPath_.push({type:"lineTo",x:i.x,y:i.y}),this.currentX_=i.x,this.currentY_=i.y},n.bezierCurveTo=function(n,t,i,r,u,f){var e=this.getCoords_(u,f),o=this.getCoords_(n,t),s=this.getCoords_(i,r);yt(this,o,s,e)},n.quadraticCurveTo=function(n,t,i,r){var e=this.getCoords_(n,t),u=this.getCoords_(i,r),f={x:this.currentX_+2/3*(e.x-this.currentX_),y:this.currentY_+2/3*(e.y-this.currentY_)},o={x:f.x+(u.x-this.currentX_)/3,y:f.y+(u.y-this.currentY_)/3};yt(this,f,o,u)},n.arc=function(n,t,r,u,e,o){r*=i;var v=o?"at":"wa",s=n+k(u)*r-f,y=t+b(u)*r-f,h=n+k(e)*r-f,p=t+b(e)*r-f;s!=h||o||(s+=.125);var c=this.getCoords_(n,t),l=this.getCoords_(s,y),a=this.getCoords_(h,p);this.currentPath_.push({type:v,x:c.x,y:c.y,radius:r,xStart:l.x,yStart:l.y,xEnd:a.x,yEnd:a.y})},n.rect=function(n,t,i,r){this.moveTo(n,t),this.lineTo(n+i,t),this.lineTo(n+i,t+r),this.lineTo(n,t+r),this.closePath()},n.strokeRect=function(n,t,i,r){var u=this.currentPath_;this.beginPath(),this.moveTo(n,t),this.lineTo(n+i,t),this.lineTo(n+i,t+r),this.lineTo(n,t+r),this.closePath(),this.stroke(),this.currentPath_=u},n.fillRect=function(n,t,i,r){var u=this.currentPath_;this.beginPath(),this.moveTo(n,t),this.lineTo(n+i,t),this.lineTo(n+i,t+r),this.lineTo(n,t+r),this.closePath(),this.fill(),this.currentPath_=u},n.createLinearGradient=function(n,t,i,r){var u=new p("gradient");return u.x0_=n,u.y0_=t,u.x1_=i,u.y1_=r,u},n.createRadialGradient=function(n,t,i,r,u,f){var e=new p("gradientradial");return e.x0_=n,e.y0_=t,e.r0_=i,e.x1_=r,e.y1_=u,e.r1_=f,e},n.drawImage=function(n){var f,e,o,s,a,v,y,p,rt=n.runtimeStyle.width,ut=n.runtimeStyle.height,h,c,k;if(n.runtimeStyle.width="auto",n.runtimeStyle.height="auto",h=n.width,c=n.height,n.runtimeStyle.width=rt,n.runtimeStyle.height=ut,arguments.length==3)f=arguments[1],e=arguments[2],a=v=0,y=o=h,p=s=c;else if(arguments.length==5)f=arguments[1],e=arguments[2],o=arguments[3],s=arguments[4],a=v=0,y=h,p=c;else if(arguments.length==9)a=arguments[1],v=arguments[2],y=arguments[3],p=arguments[4],f=arguments[5],e=arguments[6],o=arguments[7],s=arguments[8];else throw Error("Invalid number of arguments");var w=this.getCoords_(f,e),ft=y/2,et=p/2,b=[],d=10,g=10;if(b.push(" <g_vml_:group",' coordsize="',i*d,",",i*g,'"',' coordorigin="0,0"',' style="width:',d,"px;height:",g,"px;position:absolute;"),this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){k=[],k.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",t(w.x/i),",","Dy=",t(w.y/i),"");var l=w,nt=this.getCoords_(f+o,e),tt=this.getCoords_(f,e+s),it=this.getCoords_(f+o,e+s);l.x=u.max(l.x,nt.x,tt.x,it.x),l.y=u.max(l.y,nt.y,tt.y,it.y),b.push("padding:0 ",t(l.x/i),"px ",t(l.y/i),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",k.join(""),", sizingmethod='clip');")}else b.push("top:",t(w.y/i),"px;left:",t(w.x/i),"px;");b.push(' ">','<g_vml_:image src="',n.src,'"',' style="width:',i*o,"px;"," height:",i*s,'px"',' cropleft="',a/h,'"',' croptop="',v/c,'"',' cropright="',(h-a-y)/h,'"',' cropbottom="',(c-v-p)/c,'"'," />","<\/g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",b.join(""))},n.stroke=function(n){for(var c=10,l=10,h=5e3,e={x:null,y:null},o={x:null,y:null},u,a,v,f,r,y,s=0;s<this.currentPath_.length;s+=h){for(u=[],a=!1,u.push("<g_vml_:shape",' filled="',!!n,'"',' style="position:absolute;width:',c,"px;height:",l,'px;"',' coordorigin="0,0"',' coordsize="',i*c,",",i*l,'"',' stroked="',!n,'"',' path="'),v=!1,f=s;f<Math.min(s+h,this.currentPath_.length);f++){f%h==0&&f>0&&u.push(" m ",t(this.currentPath_[f-1].x),",",t(this.currentPath_[f-1].y)),r=this.currentPath_[f];switch(r.type){case"moveTo":y=r,u.push(" m ",t(r.x),",",t(r.y));break;case"lineTo":u.push(" l ",t(r.x),",",t(r.y));break;case"close":u.push(" x "),r=null;break;case"bezierCurveTo":u.push(" c ",t(r.cp1x),",",t(r.cp1y),",",t(r.cp2x),",",t(r.cp2y),",",t(r.x),",",t(r.y));break;case"at":case"wa":u.push(" ",r.type," ",t(r.x-this.arcScaleX_*r.radius),",",t(r.y-this.arcScaleY_*r.radius)," ",t(r.x+this.arcScaleX_*r.radius),",",t(r.y+this.arcScaleY_*r.radius)," ",t(r.xStart),",",t(r.yStart)," ",t(r.xEnd),",",t(r.yEnd))}r&&((e.x==null||r.x<e.x)&&(e.x=r.x),(o.x==null||r.x>o.x)&&(o.x=r.x),(e.y==null||r.y<e.y)&&(e.y=r.y),(o.y==null||r.y>o.y)&&(o.y=r.y))}u.push(' ">'),n?wt(this,u,e,o):pt(this,u),u.push("<\/g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",u.join(""))}},n.fill=function(){this.stroke(!0)},n.closePath=function(){this.currentPath_.push({type:"close"})},n.getCoords_=function(n,t){var r=this.m_;return{x:i*(n*r[0][0]+t*r[1][0]+r[2][0])-f,y:i*(n*r[0][1]+t*r[1][1]+r[2][1])-f}},n.save=function(){var n={};lt(this,n),this.aStack_.push(n),this.mStack_.push(this.m_),this.m_=v(g(),this.m_)},n.restore=function(){this.aStack_.length&&(lt(this.aStack_.pop(),this),this.m_=this.mStack_.pop())},n.translate=function(n,t){var i=[[1,0,0],[0,1,0],[n,t,1]];y(this,v(i,this.m_),!1)},n.rotate=function(n){var t=k(n),i=b(n),r=[[t,i,0],[-i,t,0],[0,0,1]];y(this,v(r,this.m_),!1)},n.scale=function(n,t){this.arcScaleX_*=n,this.arcScaleY_*=t;var i=[[n,0,0],[0,t,0],[0,0,1]];y(this,v(i,this.m_),!0)},n.transform=function(n,t,i,r,u,f){var e=[[n,t,0],[i,r,0],[u,f,1]];y(this,v(e,this.m_),!0)},n.setTransform=function(n,t,i,r,u,f){var e=[[n,t,0],[i,r,0],[u,f,1]];y(this,e,!0)},n.drawText_=function(n,r,u,f,e){var c=this.m_,y=1e3,s=0,l=y,a={x:0,y:0},h=[],v=ui(ri(this.font),this.element_),d=fi(v),w=this.element_.currentStyle,o=this.textAlign.toLowerCase(),p,b,k;switch(o){case"left":case"center":case"right":break;case"end":o=w.direction=="ltr"?"right":"left";break;case"start":o=w.direction=="rtl"?"right":"left";break;default:o="left"}switch(this.textBaseline){case"hanging":case"top":a.y=v.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":a.y=-v.size/2.25}switch(o){case"right":s=y,l=.05;break;case"center":s=l=y/2}p=this.getCoords_(r+a.x,u+a.y),h.push('<g_vml_:line from="',-s,' 0" to="',l,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">'),e?pt(this,h):wt(this,h,{x:-s,y:0},{x:l,y:v.size}),b=c[0][0].toFixed(3)+","+c[1][0].toFixed(3)+","+c[0][1].toFixed(3)+","+c[1][1].toFixed(3)+",0,0",k=t(p.x/i)+","+t(p.y/i),h.push('<g_vml_:skew on="t" matrix="',b,'" ',' offset="',k,'" origin="',s,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',ht(n),'" style="v-text-align:',o,";font:",ht(d),'" /><\/g_vml_:line>'),this.element_.insertAdjacentHTML("beforeEnd",h.join(""))},n.fillText=function(n,t,i,r){this.drawText_(n,t,i,r,!1)},n.strokeText=function(n,t,i,r){this.drawText_(n,t,i,r,!0)},n.measureText=function(n){var t,i;return this.textMeasureEl_||(t='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"><\/span>',this.element_.insertAdjacentHTML("beforeEnd",t),this.textMeasureEl_=this.element_.lastChild),i=this.element_.ownerDocument,this.textMeasureEl_.innerHTML="",this.textMeasureEl_.style.font=this.font,this.textMeasureEl_.appendChild(i.createTextNode(n)),{width:this.textMeasureEl_.offsetWidth}},n.clip=function(){},n.arcTo=function(){},n.createPattern=function(n,t){return new ft(n,t)},p.prototype.addColorStop=function(n,t){t=rt(t),this.colors_.push({offset:n,color:t.color,alpha:t.alpha})},r=ot.prototype=new Error,r.INDEX_SIZE_ERR=1,r.DOMSTRING_SIZE_ERR=2,r.HIERARCHY_REQUEST_ERR=3,r.WRONG_DOCUMENT_ERR=4,r.INVALID_CHARACTER_ERR=5,r.NO_DATA_ALLOWED_ERR=6,r.NO_MODIFICATION_ALLOWED_ERR=7,r.NOT_FOUND_ERR=8,r.NOT_SUPPORTED_ERR=9,r.INUSE_ATTRIBUTE_ERR=10,r.INVALID_STATE_ERR=11,r.SYNTAX_ERR=12,r.INVALID_MODIFICATION_ERR=13,r.NAMESPACE_ERR=14,r.INVALID_ACCESS_ERR=15,r.VALIDATION_ERR=16,r.TYPE_MISMATCH_ERR=17,G_vmlCanvasManager=d,CanvasRenderingContext2D=ut,CanvasGradient=p,CanvasPattern=ft,DOMException=ot}();/*!
Third Party Notices

jquery.flot.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement. 

*/
(function(n){n.color={},n.color.make=function(t,i,r,u){var f={};return f.r=t||0,f.g=i||0,f.b=r||0,f.a=u!=null?u:1,f.add=function(n,t){for(var i=0;i<n.length;++i)f[n.charAt(i)]+=t;return f.normalize()},f.scale=function(n,t){for(var i=0;i<n.length;++i)f[n.charAt(i)]*=t;return f.normalize()},f.toString=function(){return f.a>=1?"rgb("+[f.r,f.g,f.b].join(",")+")":"rgba("+[f.r,f.g,f.b,f.a].join(",")+")"},f.normalize=function(){function n(n,t,i){return t<n?n:t>i?i:t}return f.r=n(0,parseInt(f.r),255),f.g=n(0,parseInt(f.g),255),f.b=n(0,parseInt(f.b),255),f.a=n(0,f.a,1),f},f.clone=function(){return n.color.make(f.r,f.b,f.g,f.a)},f.normalize()},n.color.extract=function(t,i){var r;do{if(r=t.css(i).toLowerCase(),r!=""&&r!="transparent")break;t=t.parent()}while(!n.nodeName(t.get(0),"body"));return r=="rgba(0, 0, 0, 0)"&&(r="transparent"),n.color.parse(r)},n.color.parse=function(i){var r,u=n.color.make,f;return(r=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i))?u(parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10)):(r=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))?u(parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),parseFloat(r[4])):(r=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i))?u(parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55):(r=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))?u(parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55,parseFloat(r[4])):(r=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i))?u(parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)):(r=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i))?u(parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)):(f=n.trim(i).toLowerCase(),f=="transparent"?u(255,255,255,0):(r=t[f]||[0,0,0],u(r[0],r[1],r[2])))};var t={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery),function(n){function r(r,u,f,e){function tt(n,t){t=[l].concat(t);for(var i=0;i<n.length;++i)n[i].apply(this,t)}function oi(){for(var i,t=0;t<e.length;++t)i=e[t],i.init(l),i.options&&n.extend(!0,o,i.options)}function si(t){var i,r;for(n.extend(!0,o,t),o.xaxis.color==null&&(o.xaxis.color=o.grid.color),o.yaxis.color==null&&(o.yaxis.color=o.grid.color),o.xaxis.tickColor==null&&(o.xaxis.tickColor=o.grid.tickColor),o.yaxis.tickColor==null&&(o.yaxis.tickColor=o.grid.tickColor),o.grid.borderColor==null&&(o.grid.borderColor=o.grid.color),o.grid.tickColor==null&&(o.grid.tickColor=n.color.parse(o.grid.color).scale("a",.22).toString()),i=0;i<Math.max(1,o.xaxes.length);++i)o.xaxes[i]=n.extend(!0,{},o.xaxis,o.xaxes[i]);for(i=0;i<Math.max(1,o.yaxes.length);++i)o.yaxes[i]=n.extend(!0,{},o.yaxis,o.yaxes[i]);for(o.xaxis.noTicks&&o.xaxis.ticks==null&&(o.xaxis.ticks=o.xaxis.noTicks),o.yaxis.noTicks&&o.yaxis.ticks==null&&(o.yaxis.ticks=o.yaxis.noTicks),o.x2axis&&(o.xaxes[1]=n.extend(!0,{},o.xaxis,o.x2axis),o.xaxes[1].position="top"),o.y2axis&&(o.yaxes[1]=n.extend(!0,{},o.yaxis,o.y2axis),o.yaxes[1].position="right"),o.grid.coloredAreas&&(o.grid.markings=o.grid.coloredAreas),o.grid.coloredAreasColor&&(o.grid.markingsColor=o.grid.coloredAreasColor),o.lines&&n.extend(!0,o.series.lines,o.lines),o.points&&n.extend(!0,o.series.points,o.points),o.bars&&n.extend(!0,o.series.bars,o.bars),o.shadowSize!=null&&(o.series.shadowSize=o.shadowSize),o.highlightColor!=null&&(o.series.highlightColor=o.highlightColor),i=0;i<o.xaxes.length;++i)ot(v,i+1).options=o.xaxes[i];for(i=0;i<o.yaxes.length;++i)ot(p,i+1).options=o.yaxes[i];for(r in k)o.hooks[r]&&o.hooks[r].length&&(k[r]=k[r].concat(o.hooks[r]));tt(k.processOptions,[o])}function lt(n){c=hi(n),li(),ai()}function hi(t){for(var u=[],r,i=0;i<t.length;++i)r=n.extend(!0,{},o.series),t[i].data!=null?(r.data=t[i].data,delete t[i].data,n.extend(!0,r,t[i]),t[i].data=r.data):r.data=t[i],u.push(r);return u}function et(n,t){var i=n[t+"axis"];return typeof i=="object"&&(i=i.n),typeof i!="number"&&(i=1),i}function ut(){return n.grep(v.concat(p),function(n){return n})}function at(n){for(var i={},t,r=0;r<v.length;++r)t=v[r],t&&t.used&&(i["x"+t.n]=t.c2p(n.left));for(r=0;r<p.length;++r)t=p[r],t&&t.used&&(i["y"+t.n]=t.c2p(n.top));return i.x1!==undefined&&(i.x=i.x1),i.y1!==undefined&&(i.y=i.y1),i}function ci(n){for(var u={},t,i,r=0;r<v.length;++r)if(t=v[r],t&&t.used&&(i="x"+t.n,n[i]==null&&t.n==1&&(i="x"),n[i]!=null)){u.left=t.p2c(n[i]);break}for(r=0;r<p.length;++r)if(t=p[r],t&&t.used&&(i="y"+t.n,n[i]==null&&t.n==1&&(i="y"),n[i]!=null)){u.top=t.p2c(n[i]);break}return u}function ot(t,i){return t[i-1]||(t[i-1]={n:i,direction:t==v?"x":"y",options:n.extend(!0,{},t==v?o.xaxis:o.yaxis)}),t[i-1]}function li(){for(var u=c.length,b=[],h=[],f,r,e,s,w,l,i,a,y,t=0;t<c.length;++t)f=c[t].color,f!=null&&(--u,typeof f=="number"?h.push(f):b.push(n.color.parse(c[t].color)));for(t=0;t<h.length;++t)u=Math.max(u,h[t]+1);for(r=[],e=0,t=0;r.length<u;)s=o.colors.length==t?n.color.make(100,100,100):n.color.parse(o.colors[t]),w=e%2==1?-1:1,s.scale("rgb",1+w*Math.ceil(e/2)*.2),r.push(s),++t,t>=o.colors.length&&(t=0,++e);for(l=0,t=0;t<c.length;++t){if(i=c[t],i.color==null?(i.color=r[l].toString(),++l):typeof i.color=="number"&&(i.color=r[i.color].toString()),i.lines.show==null){y=!0;for(a in i)if(i[a]&&i[a].show){y=!1;break}y&&(i.lines.show=!0)}i.xaxis=ot(v,et(i,"x")),i.yaxis=ot(p,et(i,"y"))}}function ai(){function w(n,t,i){t<n.datamin&&t!=-a&&(n.datamin=t),i>n.datamax&&i!=a&&(n.datamax=i)}var y=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY,a=Number.MAX_VALUE,f,l,e,r,et,t,u,s,ot,st,ht,i,h,rt,ft,o,b,v;for(n.each(ut(),function(n,t){t.datamin=y,t.datamax=p,t.used=!1}),f=0;f<c.length;++f)t=c[f],t.datapoints={points:[]},tt(k.processRawData,[t,t.data,t.datapoints]);for(f=0;f<c.length;++f)if(t=c[f],ft=t.data,o=t.datapoints.format,o||(o=[],o.push({x:!0,number:!0,required:!0}),o.push({y:!0,number:!0,required:!0}),(t.bars.show||t.lines.show&&t.lines.fill)&&(o.push({y:!0,number:!0,required:!1,defaultValue:0}),t.bars.horizontal&&(delete o[o.length-1].y,o[o.length-1].x=!0)),t.datapoints.format=o),t.datapoints.pointsize==null)for(t.datapoints.pointsize=o.length,s=t.datapoints.pointsize,u=t.datapoints.points,insertSteps=t.lines.show&&t.lines.steps,t.xaxis.used=t.yaxis.used=!0,l=e=0;l<ft.length;++l,e+=s){if(rt=ft[l],b=rt==null,!b)for(r=0;r<s;++r)i=rt[r],h=o[r],h&&(h.number&&i!=null&&(i=+i,isNaN(i)?i=null:i==Infinity?i=a:i==-Infinity&&(i=-a)),i==null&&(h.required&&(b=!0),h.defaultValue!=null&&(i=h.defaultValue))),u[e+r]=i;if(b)for(r=0;r<s;++r)i=u[e+r],i!=null&&(h=o[r],h.x&&w(t.xaxis,i,i),h.y&&w(t.yaxis,i,i)),u[e+r]=null;else if(insertSteps&&e>0&&u[e-s]!=null&&u[e-s]!=u[e]&&u[e-s+1]!=u[e+1]){for(r=0;r<s;++r)u[e+s+r]=u[e+r];u[e+1]=u[e-s+1],e+=s}}for(f=0;f<c.length;++f)t=c[f],tt(k.processDatapoints,[t,t.datapoints]);for(f=0;f<c.length;++f){t=c[f],u=t.datapoints.points,s=t.datapoints.pointsize;var d=y,g=y,nt=p,it=p;for(l=0;l<u.length;l+=s)if(u[l]!=null)for(r=0;r<s;++r)(i=u[l+r],h=o[r],h&&i!=a&&i!=-a)&&(h.x&&(i<d&&(d=i),i>nt&&(nt=i)),h.y&&(i<g&&(g=i),i>it&&(it=i)));t.bars.show&&(v=t.bars.align=="left"?0:-t.bars.barWidth/2,t.bars.horizontal?(g+=v,it+=v+t.bars.barWidth):(d+=v,nt+=v+t.bars.barWidth)),w(t.xaxis,d,nt),w(t.yaxis,g,it)}n.each(ut(),function(n,t){t.datamin==y&&(t.datamin=null),t.datamax==p&&(t.datamax=null)})}function vt(t,i){var u=document.createElement("canvas");return u.className=i,u.width=y,u.height=w,t||n(u).css({position:"absolute",left:0,top:0}),n(u).appendTo(r),u.getContext||(u=window.G_vmlCanvasManager.initElement(u)),u.getContext("2d").save(),u}function yt(){if(y=r.width(),w=r.height(),y<=0||w<=0)throw"Invalid dimensions for plot, width = "+y+", height = "+w;}function pt(n){n.width!=y&&(n.width=y),n.height!=w&&(n.height=w);var t=n.getContext("2d");t.restore(),t.save()}function vi(){var t,i=r.children("canvas.base"),u=r.children("canvas.overlay");i.length==0||u==0?(r.html(""),r.css({padding:0}),r.css("position")=="static"&&r.css("position","relative"),yt(),it=vt(!0,"base"),rt=vt(!1,"overlay"),t=!1):(it=i.get(0),rt=u.get(0),t=!0),s=it.getContext("2d"),a=rt.getContext("2d"),b=n([rt,it]),t&&(r.data("plot").shutdown(),l.resize(),a.clearRect(0,0,y,w),b.unbind(),r.children().not([it,rt]).remove()),r.data("plot",l)}function yi(){o.grid.hoverable&&(b.mousemove(ni),b.mouseleave(ti)),o.grid.clickable&&b.click(ii),tt(k.bindEvents,[b])}function pi(){ft&&clearTimeout(ft),b.unbind("mousemove",ni),b.unbind("mouseleave",ti),b.unbind("click",ii),tt(k.shutdown,[b])}function wi(n){function u(n){return n}var i,r,t=n.options.transform||u,f=n.options.inverseTransform;n.direction=="x"?(i=n.scale=nt/Math.abs(t(n.max)-t(n.min)),r=Math.min(t(n.max),t(n.min))):(i=n.scale=d/Math.abs(t(n.max)-t(n.min)),i=-i,r=Math.max(t(n.max),t(n.min))),n.p2c=t==u?function(n){return(n-r)*i}:function(n){return(t(n)-r)*i},n.c2p=f?function(n){return f(r+n/i)}:function(n){return r+n/i}}function bi(t){function l(i,u){return n('<div style="position:absolute;top:-10000px;'+u+'font-size:smaller"><div class="'+t.direction+"Axis "+t.direction+t.n+'Axis">'+i.join("")+"<\/div><\/div>").appendTo(r)}var c=t.options,u,s=t.ticks||[],f=[],h,i=c.labelWidth,e=c.labelHeight,o;if(t.direction=="x"){if(i==null&&(i=Math.floor(y/(s.length>0?s.length:1))),e==null){for(f=[],u=0;u<s.length;++u)h=s[u].label,h&&f.push('<div class="tickLabel" style="float:left;width:'+i+'px">'+h+"<\/div>");f.length>0&&(f.push('<div style="clear:left"><\/div>'),o=l(f,"width:10000px;"),e=o.height(),o.remove())}}else if(i==null||e==null){for(u=0;u<s.length;++u)h=s[u].label,h&&f.push('<div class="tickLabel">'+h+"<\/div>");f.length>0&&(o=l(f,""),i==null&&(i=o.children().width()),e==null&&(e=o.find("div.tickLabel").height()),o.remove())}i==null&&(i=0),e==null&&(e=0),t.labelWidth=i,t.labelHeight=e}function ki(t){var u=t.labelWidth,f=t.labelHeight,e=t.options.position,i=t.options.tickLength,r=o.grid.axisMargin,s=o.grid.labelMargin,l=t.direction=="x"?v:p,k,a=n.grep(l,function(n){return n&&n.options.position==e&&n.reserveSpace}),b,c;n.inArray(t,a)==a.length-1&&(r=0),i==null&&(i="full"),b=n.grep(l,function(n){return n&&n.reserveSpace}),c=n.inArray(t,b)==0,c||i!="full"||(i=5),isNaN(+i)||(s+=+i),t.direction=="x"?(f+=s,e=="bottom"?(h.bottom+=f+r,t.box={top:w-h.bottom,height:f}):(t.box={top:h.top+r,height:f},h.top+=f+r)):(u+=s,e=="left"?(t.box={left:h.left+r,width:u},h.left+=u+r):(h.right+=u+r,t.box={left:y-h.right,width:u})),t.position=e,t.tickLength=i,t.box.padding=s,t.innermost=c}function di(n){n.direction=="x"?(n.box.left=h.left,n.box.width=nt):(n.box.top=h.top,n.box.height=d)}function wt(){var t,u=ut(),i,r;if(n.each(u,function(n,t){t.show=t.options.show,t.show==null&&(t.show=t.used),t.reserveSpace=t.show||t.options.reserveSpace,gi(t)}),allocatedAxes=n.grep(u,function(n){return n.reserveSpace}),h.left=h.right=h.top=h.bottom=0,o.grid.show){for(n.each(allocatedAxes,function(n,t){nr(t),tr(t),ir(t,t.ticks),bi(t)}),t=allocatedAxes.length-1;t>=0;--t)ki(allocatedAxes[t]);if(i=o.grid.minBorderMargin,i==null)for(i=0,t=0;t<c.length;++t)i=Math.max(i,c[t].points.radius+c[t].points.lineWidth/2);for(r in h)h[r]+=o.grid.borderWidth,h[r]=Math.max(i,h[r])}nt=y-h.left-h.right,d=w-h.bottom-h.top,n.each(u,function(n,t){wi(t)}),o.grid.show&&(n.each(allocatedAxes,function(n,t){di(t)}),ur()),hr()}function gi(n){var t=n.options,r=+(t.min!=null?t.min:n.datamin),i=+(t.max!=null?t.max:n.datamax),f=i-r,e,u;f==0?(e=i==0?1:.01,t.min==null&&(r-=e),(t.max==null||t.min!=null)&&(i+=e)):(u=t.autoscaleMargin,u!=null&&(t.min==null&&(r-=f*u,r<0&&n.datamin!=null&&n.datamin>=0&&(r=0)),t.max==null&&(i+=f*u,i>0&&n.datamax!=null&&n.datamax<=0&&(i=0)))),n.min=r,n.max=i}function nr(i){var r=i.options,nt,l,f,b,tt,it,k,o,e,c,a,h,d,ut,g;if(nt=typeof r.ticks=="number"&&r.ticks>0?r.ticks:.3*Math.sqrt(i.direction=="x"?y:w),l=(i.max-i.min)/nt,r.mode=="time"){var u={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,year:365.2425*864e5},s=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]],rt=0;for(r.minTickSize!=null&&(rt=typeof r.tickSize=="number"?r.tickSize:r.minTickSize[0]*u[r.minTickSize[1]]),e=0;e<s.length-1;++e)if(l<(s[e][0]*u[s[e][1]]+s[e+1][0]*u[s[e+1][1]])/2&&s[e][0]*u[s[e][1]]>=rt)break;f=s[e][0],tt=s[e][1],tt=="year"&&(k=Math.pow(10,Math.floor(Math.log(l/u.year)/Math.LN10)),o=l/u.year/k,f=o<1.5?1:o<3?2:o<7.5?5:10,f*=k),i.tickSize=r.tickSize||[f,tt],b=function(n){var h=[],r=n.tickSize[0],f=n.tickSize[1],i=new Date(n.min),o=r*u[f],s,e,c,l,a;f=="second"&&i.setUTCSeconds(t(i.getUTCSeconds(),r)),f=="minute"&&i.setUTCMinutes(t(i.getUTCMinutes(),r)),f=="hour"&&i.setUTCHours(t(i.getUTCHours(),r)),f=="month"&&i.setUTCMonth(t(i.getUTCMonth(),r)),f=="year"&&i.setUTCFullYear(t(i.getUTCFullYear(),r)),i.setUTCMilliseconds(0),o>=u.minute&&i.setUTCSeconds(0),o>=u.hour&&i.setUTCMinutes(0),o>=u.day&&i.setUTCHours(0),o>=u.day*4&&i.setUTCDate(1),o>=u.year&&i.setUTCMonth(0),s=0,e=Number.NaN;do c=e,e=i.getTime(),h.push(e),f=="month"?r<1?(i.setUTCDate(1),l=i.getTime(),i.setUTCMonth(i.getUTCMonth()+1),a=i.getTime(),i.setTime(e+s*u.hour+(a-l)*r),s=i.getUTCHours(),i.setUTCHours(0)):i.setUTCMonth(i.getUTCMonth()+r):f=="year"?i.setUTCFullYear(i.getUTCFullYear()+r):i.setTime(e+o);while(e<n.max&&e!=c);return h},it=function(t,i){var o=new Date(t);if(r.timeformat!=null)return n.plot.formatDate(o,r.timeformat,r.monthNames);var f=i.tickSize[0]*u[i.tickSize[1]],s=i.max-i.min,e=r.twelveHourClock?" %p":"";return fmt=f<u.minute?"%h:%M:%S"+e:f<u.day?s<2*u.day?"%h:%M"+e:"%b %d %h:%M"+e:f<u.month?"%b %d":f<u.year?s<u.year?"%b":"%b %y":"%y",n.plot.formatDate(o,fmt,r.monthNames)}}else c=r.tickDecimals,a=-Math.floor(Math.log(l)/Math.LN10),c!=null&&a>c&&(a=c),k=Math.pow(10,-a),o=l/k,o<1.5?f=1:o<3?(f=2,o>2.25&&(c==null||a+1<=c)&&(f=2.5,++a)):f=o<7.5?5:10,f*=k,r.minTickSize!=null&&f<r.minTickSize&&(f=r.minTickSize),i.tickDecimals=Math.max(0,c!=null?c:a),i.tickSize=r.tickSize||f,b=function(n){var r=[],e=t(n.min,n.tickSize),u=0,i=Number.NaN,f;do f=i,i=e+u*n.tickSize,r.push(i),++u;while(i<n.max&&i!=f);return r},it=function(n,t){return n.toFixed(t.tickDecimals)};r.alignTicksWithAxis!=null&&(h=(i.direction=="x"?v:p)[r.alignTicksWithAxis-1],h&&h.used&&h!=i&&(d=b(i),d.length>0&&(r.min==null&&(i.min=Math.min(i.min,d[0])),r.max==null&&d.length>1&&(i.max=Math.max(i.max,d[d.length-1]))),b=function(n){for(var r=[],t,i=0;i<h.ticks.length;++i)t=(h.ticks[i].v-h.min)/(h.max-h.min),t=n.min+t*(n.max-n.min),r.push(t);return r},i.mode!="time"&&r.tickDecimals==null&&(ut=Math.max(0,-Math.floor(Math.log(l)/Math.LN10)+1),g=b(i),g.length>1&&/\..*0$/.test((g[1]-g[0]).toFixed(ut))||(i.tickDecimals=ut)))),i.tickGenerator=b,i.tickFormatter=n.isFunction(r.tickFormatter)?function(n,t){return""+r.tickFormatter(n,t)}:it}function tr(t){var i=t.options.ticks,u=[],o,f,e,r;for(i==null||typeof i=="number"&&i>0?u=t.tickGenerator(t):i&&(u=n.isFunction(i)?i({min:t.min,max:t.max}):i),t.ticks=[],o=0;o<u.length;++o)e=null,r=u[o],typeof r=="object"?(f=+r[0],r.length>1&&(e=r[1])):f=+r,e==null&&(e=t.tickFormatter(f,t)),isNaN(f)||t.ticks.push({v:f,label:e})}function ir(n,t){n.options.autoscaleMargin&&t.length>0&&(n.options.min==null&&(n.min=Math.min(n.min,t[0].v)),n.options.max==null&&t.length>1&&(n.max=Math.max(n.max,t[t.length-1].v)))}function bt(){var n,t;for(s.clearRect(0,0,y,w),n=o.grid,n.show&&n.backgroundColor&&rr(),n.show&&!n.aboveData&&dt(),t=0;t<c.length;++t)tt(k.drawSeries,[s,c[t]]),fr(c[t]);tt(k.draw,[s]),n.show&&n.aboveData&&dt()}function kt(n,t){var e,r,u,f,o=ut(),s;for(i=0;i<o.length;++i)if(e=o[i],e.direction==t&&(f=t+e.n+"axis",n[f]||e.n!=1||(f=t+"axis"),n[f])){r=n[f].from,u=n[f].to;break}return n[f]||(e=t=="x"?v[0]:p[0],r=n[t+"1"],u=n[t+"2"]),r!=null&&u!=null&&r>u&&(s=r,r=u,u=s),{from:r,to:u,axis:e}}function rr(){s.save(),s.translate(h.left,h.top),s.fillStyle=ei(o.grid.backgroundColor,d,0,"rgba(255, 255, 255, 0)"),s.fillRect(0,0,nt,d),s.restore()}function dt(){var c,p,u,a,g,b;if(s.save(),s.translate(h.left,h.top),p=o.grid.markings,p)for(n.isFunction(p)&&(u=l.getAxes(),u.xmin=u.xaxis.min,u.xmax=u.xaxis.max,u.ymin=u.yaxis.min,u.ymax=u.yaxis.max,p=p(u)),c=0;c<p.length;++c){var k=p[c],t=kt(k,"x"),i=kt(k,"y");(t.from==null&&(t.from=t.axis.min),t.to==null&&(t.to=t.axis.max),i.from==null&&(i.from=i.axis.min),i.to==null&&(i.to=i.axis.max),t.to<t.axis.min||t.from>t.axis.max||i.to<i.axis.min||i.from>i.axis.max)||(t.from=Math.max(t.from,t.axis.min),t.to=Math.min(t.to,t.axis.max),i.from=Math.max(i.from,i.axis.min),i.to=Math.min(i.to,i.axis.max),t.from!=t.to||i.from!=i.to)&&(t.from=t.axis.p2c(t.from),t.to=t.axis.p2c(t.to),i.from=i.axis.p2c(i.from),i.to=i.axis.p2c(i.to),t.from==t.to||i.from==i.to?(s.beginPath(),s.strokeStyle=k.color||o.grid.markingsColor,s.lineWidth=k.lineWidth||o.grid.markingsLineWidth,s.moveTo(t.from,i.from),s.lineTo(t.to,i.to),s.stroke()):(s.fillStyle=k.color||o.grid.markingsColor,s.fillRect(t.from,i.to,t.to-t.from,i.from-i.to)))}for(u=ut(),a=o.grid.borderWidth,g=0;g<u.length;++g){var r=u[g],tt=r.box,w=r.tickLength,f,e,v,y;if(r.show&&r.ticks.length!=0){for(s.strokeStyle=r.options.tickColor||n.color.parse(r.options.color).scale("a",.22).toString(),s.lineWidth=1,r.direction=="x"?(f=0,e=w=="full"?r.position=="top"?0:d:tt.top-h.top+(r.position=="top"?tt.height:0)):(e=0,f=w=="full"?r.position=="left"?0:nt:tt.left-h.left+(r.position=="left"?tt.width:0)),r.innermost||(s.beginPath(),v=y=0,r.direction=="x"?v=nt:y=d,s.lineWidth==1&&(f=Math.floor(f)+.5,e=Math.floor(e)+.5),s.moveTo(f,e),s.lineTo(f+v,e+y),s.stroke()),s.beginPath(),c=0;c<r.ticks.length;++c)(b=r.ticks[c].v,v=y=0,b<r.min||b>r.max||w=="full"&&a>0&&(b==r.min||b==r.max))||(r.direction=="x"?(f=r.p2c(b),y=w=="full"?-d:w,r.position=="top"&&(y=-y)):(e=r.p2c(b),v=w=="full"?-nt:w,r.position=="left"&&(v=-v)),s.lineWidth==1&&(r.direction=="x"?f=Math.floor(f)+.5:e=Math.floor(e)+.5),s.moveTo(f,e),s.lineTo(f+v,e+y));s.stroke()}}a&&(s.lineWidth=a,s.strokeStyle=o.grid.borderColor,s.strokeRect(-a/2,-a/2,nt+a,d+a)),s.restore()}function ur(){var f,c,e,n,t,o,u,i,s,l,a;for(r.find(".tickLabels").remove(),f=['<div class="tickLabels" style="font-size:smaller">'],c=ut(),e=0;e<c.length;++e)if(n=c[e],t=n.box,n.show){for(f.push('<div class="'+n.direction+"Axis "+n.direction+n.n+'Axis" style="color:'+n.options.color+'">'),o=0;o<n.ticks.length;++o)if(u=n.ticks[o],u.label&&!(u.v<n.min)&&!(u.v>n.max)){i={},n.direction=="x"?(s="center",i.left=Math.round(h.left+n.p2c(u.v)-n.labelWidth/2),n.position=="bottom"?i.top=t.top+t.padding:i.bottom=w-(t.top+t.height-t.padding)):(i.top=Math.round(h.top+n.p2c(u.v)-n.labelHeight/2),n.position=="left"?(i.right=y-(t.left+t.width-t.padding),s="right"):(i.left=t.left+t.padding,s="left")),i.width=n.labelWidth,l=["position:absolute","text-align:"+s];for(a in i)l.push(a+":"+i[a]+"px");f.push('<div class="tickLabel" style="'+l.join(";")+'">'+u.label+"<\/div>")}f.push("<\/div>")}f.push("<\/div>"),r.append(f.join(""))}function fr(n){n.lines.show&&er(n),n.bars.show&&sr(n),n.points.show&&or(n)}function er(n){function u(n,t,i,r,u){var l=n.points,a=n.pointsize,v=null,y=null,c;for(s.beginPath(),c=a;c<l.length;c+=a){var f=l[c-a],e=l[c-a+1],o=l[c],h=l[c+1];if(f!=null&&o!=null){if(e<=h&&e<u.min){if(h<u.min)continue;f=(u.min-e)/(h-e)*(o-f)+f,e=u.min}else if(h<=e&&h<u.min){if(e<u.min)continue;o=(u.min-e)/(h-e)*(o-f)+f,h=u.min}if(e>=h&&e>u.max){if(h>u.max)continue;f=(u.max-e)/(h-e)*(o-f)+f,e=u.max}else if(h>=e&&h>u.max){if(e>u.max)continue;o=(u.max-e)/(h-e)*(o-f)+f,h=u.max}if(f<=o&&f<r.min){if(o<r.min)continue;e=(r.min-f)/(o-f)*(h-e)+e,f=r.min}else if(o<=f&&o<r.min){if(f<r.min)continue;h=(r.min-f)/(o-f)*(h-e)+e,o=r.min}if(f>=o&&f>r.max){if(o>r.max)continue;e=(r.max-f)/(o-f)*(h-e)+e,f=r.max}else if(o>=f&&o>r.max){if(f>r.max)continue;h=(r.max-f)/(o-f)*(h-e)+e,o=r.max}(f!=v||e!=y)&&s.moveTo(r.p2c(f)+t,u.p2c(e)+i),v=o,y=h,s.lineTo(r.p2c(o)+t,u.p2c(h)+i)}}s.stroke()}function e(n,t,i){for(var c=n.points,o=n.pointsize,b=Math.min(Math.max(0,i.min),i.max),h=0,k,l=!1,a=1,p=0,w=0,v,y;;){if(o>0&&h>c.length+o)break;h+=o;var r=c[h-o],u=c[h-o+a],f=c[h],e=c[h+a];if(l){if(o>0&&r!=null&&f==null){w=h,o=-o,a=2;continue}if(o<0&&h==p+o){s.fill(),l=!1,o=-o,a=1,h=p=w+o;continue}}if(r!=null&&f!=null){if(r<=f&&r<t.min){if(f<t.min)continue;u=(t.min-r)/(f-r)*(e-u)+u,r=t.min}else if(f<=r&&f<t.min){if(r<t.min)continue;e=(t.min-r)/(f-r)*(e-u)+u,f=t.min}if(r>=f&&r>t.max){if(f>t.max)continue;u=(t.max-r)/(f-r)*(e-u)+u,r=t.max}else if(f>=r&&f>t.max){if(r>t.max)continue;e=(t.max-r)/(f-r)*(e-u)+u,f=t.max}if(l||(s.beginPath(),s.moveTo(t.p2c(r),i.p2c(b)),l=!0),u>=i.max&&e>=i.max){s.lineTo(t.p2c(r),i.p2c(i.max)),s.lineTo(t.p2c(f),i.p2c(i.max));continue}else if(u<=i.min&&e<=i.min){s.lineTo(t.p2c(r),i.p2c(i.min)),s.lineTo(t.p2c(f),i.p2c(i.min));continue}v=r,y=f,u<=e&&u<i.min&&e>=i.min?(r=(i.min-u)/(e-u)*(f-r)+r,u=i.min):e<=u&&e<i.min&&u>=i.min&&(f=(i.min-u)/(e-u)*(f-r)+r,e=i.min),u>=e&&u>i.max&&e<=i.max?(r=(i.max-u)/(e-u)*(f-r)+r,u=i.max):e>=u&&e>i.max&&u<=i.max&&(f=(i.max-u)/(e-u)*(f-r)+r,e=i.max),r!=v&&s.lineTo(t.p2c(v),i.p2c(u)),s.lineTo(t.p2c(r),i.p2c(u)),s.lineTo(t.p2c(f),i.p2c(e)),f!=y&&(s.lineTo(t.p2c(f),i.p2c(e)),s.lineTo(t.p2c(y),i.p2c(e)))}}}var t,i,r,f;s.save(),s.translate(h.left,h.top),s.lineJoin="round",t=n.lines.lineWidth,i=n.shadowSize,t>0&&i>0&&(s.lineWidth=i,s.strokeStyle="rgba(0,0,0,0.1)",r=Math.PI/18,u(n.datapoints,Math.sin(r)*(t/2+i/2),Math.cos(r)*(t/2+i/2),n.xaxis,n.yaxis),s.lineWidth=i/2,u(n.datapoints,Math.sin(r)*(t/2+i/4),Math.cos(r)*(t/2+i/4),n.xaxis,n.yaxis)),s.lineWidth=t,s.strokeStyle=n.color,f=ht(n.lines,n.color,0,d),f&&(s.fillStyle=f,e(n.datapoints,n.xaxis,n.yaxis)),t>0&&u(n.datapoints,0,0,n.xaxis,n.yaxis),s.restore()}function or(n){function i(n,t,i,r,u,f,e,o){for(var a=n.points,v=n.pointsize,h,c,l=0;l<a.length;l+=v)(h=a[l],c=a[l+1],h==null||h<f.min||h>f.max||c<e.min||c>e.max)||(s.beginPath(),h=f.p2c(h),c=e.p2c(c)+r,o=="circle"?s.arc(h,c,t,0,u?Math.PI:Math.PI*2,!1):o(s,h,c,t,u),s.closePath(),i&&(s.fillStyle=i,s.fill()),s.stroke())}var t;s.save(),s.translate(h.left,h.top);var f=n.points.lineWidth,e=n.shadowSize,r=n.points.radius,u=n.points.symbol;f>0&&e>0&&(t=e/2,s.lineWidth=t,s.strokeStyle="rgba(0,0,0,0.1)",i(n.datapoints,r,null,t+t/2,!0,n.xaxis,n.yaxis,u),s.strokeStyle="rgba(0,0,0,0.2)",i(n.datapoints,r,null,t/2,!0,n.xaxis,n.yaxis,u)),s.lineWidth=f,s.strokeStyle=n.color,i(n.datapoints,r,ht(n.points,n.color),0,!1,n.xaxis,n.yaxis,u),s.restore()}function gt(n,t,i,r,u,f,e,o,s,h,c,l){var v,p,a,y,w,b,k,d,g;(c?(d=b=k=!0,w=!1,v=i,p=n,y=t+r,a=t+u,p<v&&(g=p,p=v,v=g,w=!0,b=!1)):(w=b=k=!0,d=!1,v=n+r,p=n+u,a=i,y=t,y<a&&(g=y,y=a,a=g,d=!0,k=!1)),p<o.min||v>o.max||y<s.min||a>s.max)||(v<o.min&&(v=o.min,w=!1),p>o.max&&(p=o.max,b=!1),a<s.min&&(a=s.min,d=!1),y>s.max&&(y=s.max,k=!1),v=o.p2c(v),a=s.p2c(a),p=o.p2c(p),y=s.p2c(y),e&&(h.beginPath(),h.moveTo(v,a),h.lineTo(v,y),h.lineTo(p,y),h.lineTo(p,a),h.fillStyle=e(a,y),h.fill()),l>0&&(w||b||k||d)&&(h.beginPath(),h.moveTo(v,a+f),w?h.lineTo(v,y+f):h.moveTo(v,y+f),k?h.lineTo(p,y+f):h.moveTo(p,y+f),b?h.lineTo(p,a+f):h.moveTo(p,a+f),d?h.lineTo(v,a+f):h.moveTo(v,a+f),h.stroke()))}function sr(n){function i(t,i,r,u,f,e,o){for(var c=t.points,l=t.pointsize,h=0;h<c.length;h+=l)c[h]!=null&&gt(c[h],c[h+1],c[h+2],i,r,u,f,e,o,s,n.bars.horizontal,n.bars.lineWidth)}s.save(),s.translate(h.left,h.top),s.lineWidth=n.bars.lineWidth,s.strokeStyle=n.color;var t=n.bars.align=="left"?0:-n.bars.barWidth/2,r=n.bars.fill?function(t,i){return ht(n.bars,n.color,t,i)}:null;i(n.datapoints,t,t+n.bars.barWidth,0,r,n.xaxis,n.yaxis),s.restore()}function ht(t,i,r,u){var e=t.fill,f;return e?t.fillColor?ei(t.fillColor,r,u,i):(f=n.color.parse(i),f.a=typeof e=="number"?e:.4,f.normalize(),f.toString()):null}function hr(){var s,p,v,t,w;if(r.find(".legend").remove(),o.legend.show){var u=[],y=!1,b=o.legend.labelFormatter,l,e;for(s=0;s<c.length;++s)(l=c[s],e=l.label,e)&&(s%o.legend.noColumns==0&&(y&&u.push("<\/tr>"),u.push("<tr>"),y=!0),b&&(e=b(e,l)),u.push('<td class="legendColorBox"><div style="border:1px solid '+o.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+l.color+';overflow:hidden"><\/div><\/div><\/td><td class="legendLabel">'+e+"<\/td>"));if(y&&u.push("<\/tr>"),u.length!=0)if(p='<table style="font-size:smaller;color:'+o.grid.color+'">'+u.join("")+"<\/table>",o.legend.container!=null)n(o.legend.container).html(p);else{var f="",a=o.legend.position,i=o.legend.margin;i[0]==null&&(i=[i,i]),a.charAt(0)=="n"?f+="top:"+(i[1]+h.top)+"px;":a.charAt(0)=="s"&&(f+="bottom:"+(i[1]+h.bottom)+"px;"),a.charAt(1)=="e"?f+="right:"+(i[0]+h.right)+"px;":a.charAt(1)=="w"&&(f+="left:"+(i[0]+h.left)+"px;"),v=n('<div class="legend">'+p.replace('style="','style="position:absolute;'+f+";")+"<\/div>").appendTo(r),o.legend.backgroundOpacity!=0&&(t=o.legend.backgroundColor,t==null&&(t=o.grid.backgroundColor,t=t&&typeof t=="string"?n.color.parse(t):n.color.extract(v,"background-color"),t.a=1,t=t.toString()),w=v.children(),n('<div style="position:absolute;width:'+w.width()+"px;height:"+w.height()+"px;"+f+"background-color:"+t+';"> <\/div>').prependTo(v).css("opacity",o.legend.backgroundOpacity))}}}function cr(n,t,i){for(var p=o.grid.mouseActiveRadius,it=p*p+1,a=null,et=!1,r,e,s,k,tt,u=c.length-1;u>=0;--u)if(i(c[u])){var f=c[u],w=f.xaxis,b=f.yaxis,h=f.datapoints.points,l=f.datapoints.pointsize,v=w.c2p(n),y=b.c2p(t),g=p/w.scale,nt=p/b.scale;if(w.options.inverseTransform&&(g=Number.MAX_VALUE),b.options.inverseTransform&&(nt=Number.MAX_VALUE),f.lines.show||f.points.show)for(r=0;r<h.length;r+=l)if((e=h[r],s=h[r+1],e!=null)&&!(e-v>g)&&!(e-v<-g)&&!(s-y>nt)&&!(s-y<-nt)){var rt=Math.abs(w.p2c(e)-n),ut=Math.abs(b.p2c(s)-t),ft=rt*rt+ut*ut;ft<it&&(it=ft,a=[u,r/l])}if(f.bars.show&&!a)for(k=f.bars.align=="left"?0:-f.bars.barWidth/2,tt=k+f.bars.barWidth,r=0;r<h.length;r+=l){var e=h[r],s=h[r+1],d=h[r+2];e!=null&&(c[u].bars.horizontal?v<=Math.max(d,e)&&v>=Math.min(d,e)&&y>=s+k&&y<=s+tt:v>=e+k&&v<=e+tt&&y>=Math.min(d,s)&&y<=Math.max(d,s))&&(a=[u,r/l])}}return a?(u=a[0],r=a[1],l=c[u].datapoints.pointsize,{datapoint:c[u].datapoints.points.slice(r*l,(r+1)*l),dataIndex:r,series:c[u],seriesIndex:u}):null}function ni(n){o.grid.hoverable&&ct("plothover",n,function(n){return n.hoverable!=!1})}function ti(n){o.grid.hoverable&&ct("plothover",n,function(){return!1})}function ii(n){ct("plotclick",n,function(n){return n.clickable!=!1})}function ct(n,t,i){var e=b.offset(),l=t.pageX-e.left-h.left,a=t.pageY-e.top-h.top,c=at({left:l,top:a}),u,s,f;if(c.pageX=t.pageX,c.pageY=t.pageY,u=cr(l,a,i),u&&(u.pageX=parseInt(u.series.xaxis.p2c(u.datapoint[0])+e.left+h.left),u.pageY=parseInt(u.series.yaxis.p2c(u.datapoint[1])+e.top+h.top)),o.grid.autoHighlight){for(s=0;s<g.length;++s)f=g[s],f.auto!=n||u&&f.series==u.series&&f.point[0]==u.datapoint[0]&&f.point[1]==u.datapoint[1]||ui(f.series,f.point);u&&ri(u.series,u.datapoint,n)}r.trigger(n,[c,u])}function st(){ft||(ft=setTimeout(lr,30))}function lr(){ft=null,a.save(),a.clearRect(0,0,y,w),a.translate(h.left,h.top);for(var n,t=0;t<g.length;++t)n=g[t],n.series.bars.show?vr(n.series,n.point):ar(n.series,n.point);a.restore(),tt(k.drawOverlay,[a])}function ri(n,t,i){var r,u;typeof n=="number"&&(n=c[n]),typeof t=="number"&&(r=n.datapoints.pointsize,t=n.datapoints.points.slice(r*t,r*(t+1))),u=fi(n,t),u==-1?(g.push({series:n,point:t,auto:i}),st()):i||(g[u].auto=!1)}function ui(n,t){n==null&&t==null&&(g=[],st()),typeof n=="number"&&(n=c[n]),typeof t=="number"&&(t=n.data[t]);var i=fi(n,t);i!=-1&&(g.splice(i,1),st())}function fi(n,t){for(var r,i=0;i<g.length;++i)if(r=g[i],r.series==n&&r.point[0]==t[0]&&r.point[1]==t[1])return i;return-1}function ar(t,i){var r=i[0],u=i[1],f=t.xaxis,e=t.yaxis,h=typeof t.highlightColor=="string"?t.highlightColor:n.color.parse(t.color).scale("a",.5).toString(),o;if(!(r<f.min)&&!(r>f.max)&&!(u<e.min)&&!(u>e.max)){o=t.points.radius+t.points.lineWidth/2,a.lineWidth=o,a.strokeStyle=h;var s=1.5*o,r=f.p2c(r),u=e.p2c(u);a.beginPath(),t.points.symbol=="circle"?a.arc(r,u,s,0,2*Math.PI,!1):t.points.symbol(a,r,u,s,!1),a.closePath(),a.stroke()}}function vr(t,i){var u=typeof t.highlightColor=="string"?t.highlightColor:n.color.parse(t.color).scale("a",.5).toString(),f,r;a.lineWidth=t.bars.lineWidth,a.strokeStyle=u,f=u,r=t.bars.align=="left"?0:-t.bars.barWidth/2,gt(i[0],i[1],i[2]||0,r,r+t.bars.barWidth,0,function(){return f},t.xaxis,t.yaxis,a,t.bars.horizontal,t.bars.lineWidth)}function ei(t,i,r,u){var h,e,c,f,o;if(typeof t=="string")return t;for(h=s.createLinearGradient(0,r,0,i),e=0,c=t.colors.length;e<c;++e)f=t.colors[e],typeof f!="string"&&(o=n.color.parse(u),f.brightness!=null&&(o=o.scale("rgb",f.brightness)),f.opacity!=null&&(o.a*=f.opacity),f=o.toString()),h.addColorStop(e/(c-1),f);return h}var c=[],o={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:!0,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:.85},xaxis:{show:null,position:"bottom",mode:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null,twelveHourClock:!1},yaxis:{autoscaleMargin:.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:!1,radius:3,lineWidth:2,fill:!0,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:!1,fillColor:null,steps:!1},bars:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,align:"left",horizontal:!1},shadowSize:3,highlightColor:null},grid:{show:!0,aboveData:!1,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:!1,hoverable:!1,autoHighlight:!0,mouseActiveRadius:10},hooks:{}},it=null,rt=null,b=null,s=null,a=null,v=[],p=[],h={left:0,right:0,top:0,bottom:0},y=0,w=0,nt=0,d=0,k={processOptions:[],processRawData:[],processDatapoints:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},l=this,g,ft;l.setData=lt,l.setupGrid=wt,l.draw=bt,l.getPlaceholder=function(){return r},l.getCanvas=function(){return it},l.getPlotOffset=function(){return h},l.width=function(){return nt},l.height=function(){return d},l.offset=function(){var n=b.offset();return n.left+=h.left,n.top+=h.top,n},l.getData=function(){return c},l.getAxes=function(){var t={},i;return n.each(v.concat(p),function(n,i){i&&(t[i.direction+(i.n!=1?i.n:"")+"axis"]=i)}),t},l.getXAxes=function(){return v},l.getYAxes=function(){return p},l.c2p=at,l.p2c=ci,l.getOptions=function(){return o},l.highlight=ri,l.unhighlight=ui,l.triggerRedrawOverlay=st,l.pointOffset=function(n){return{left:parseInt(v[et(n,"x")-1].p2c(+n.x)+h.left),top:parseInt(p[et(n,"y")-1].p2c(+n.y)+h.top)}},l.shutdown=pi,l.resize=function(){yt(),pt(it),pt(rt)},l.hooks=k,oi(l),si(f),vi(),lt(u),wt(),bt(),yi(),g=[],ft=null}function t(n,t){return t*Math.floor(n/t)}n.plot=function(t,i,u){return new r(n(t),i,u,n.plot.plugins)},n.plot.version="0.7",n.plot.plugins=[],n.plot.formatDate=function(n,t,i){var f=function(n){return n=""+n,n.length==1?"0"+n:n},s=[],h=!1,e=!1,u=n.getUTCHours(),c=u<12,o,r;for(i==null&&(i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),t.search(/%p|%P/)!=-1&&(u>12?u=u-12:u==0&&(u=12)),o=0;o<t.length;++o)if(r=t.charAt(o),h){switch(r){case"h":r=""+u;break;case"H":r=f(u);break;case"M":r=f(n.getUTCMinutes());break;case"S":r=f(n.getUTCSeconds());break;case"d":r=""+n.getUTCDate();break;case"m":r=""+(n.getUTCMonth()+1);break;case"y":r=""+n.getUTCFullYear();break;case"b":r=""+i[n.getUTCMonth()];break;case"p":r=c?"am":"pm";break;case"P":r=c?"AM":"PM";break;case"0":r="",e=!0}r&&e&&(r=f(r),e=!1),s.push(r),e||(h=!1)}else r=="%"?h=!0:s.push(r);return s.join("")}}(jQuery);/*!
Third Party Notices

jquery.colorhelpers.js   Version 1.1

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


* Plugin for jQuery for working with colors.
* 
* Inspiration from jQuery color animation plugin by John Resig.
*
* Examples:
*
*   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
*   var c = $.color.extract($("#mydiv"), 'background-color');
*   console.log(c.r, c.g, c.b, c.a);
*   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
*
* Note that .scale() and .add() return the same modified object
* instead of making a new one.
*
* V. 1.1: Fix error handling so e.g. parsing an empty string does
* produce a color rather than just crashing.
*/
(function(n){n.color={},n.color.make=function(t,i,r,u){var f={};return f.r=t||0,f.g=i||0,f.b=r||0,f.a=u!=null?u:1,f.add=function(n,t){for(var i=0;i<n.length;++i)f[n.charAt(i)]+=t;return f.normalize()},f.scale=function(n,t){for(var i=0;i<n.length;++i)f[n.charAt(i)]*=t;return f.normalize()},f.toString=function(){return f.a>=1?"rgb("+[f.r,f.g,f.b].join(",")+")":"rgba("+[f.r,f.g,f.b,f.a].join(",")+")"},f.normalize=function(){function n(n,t,i){return t<n?n:t>i?i:t}return f.r=n(0,parseInt(f.r),255),f.g=n(0,parseInt(f.g),255),f.b=n(0,parseInt(f.b),255),f.a=n(0,f.a,1),f},f.clone=function(){return n.color.make(f.r,f.b,f.g,f.a)},f.normalize()},n.color.extract=function(t,i){var r;do{if(r=t.css(i).toLowerCase(),r!=""&&r!="transparent")break;t=t.parent()}while(!n.nodeName(t.get(0),"body"));return r=="rgba(0, 0, 0, 0)"&&(r="transparent"),n.color.parse(r)},n.color.parse=function(i){var r,u=n.color.make,f;return(r=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i))?u(parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10)):(r=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))?u(parseInt(r[1],10),parseInt(r[2],10),parseInt(r[3],10),parseFloat(r[4])):(r=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i))?u(parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55):(r=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i))?u(parseFloat(r[1])*2.55,parseFloat(r[2])*2.55,parseFloat(r[3])*2.55,parseFloat(r[4])):(r=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i))?u(parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)):(r=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i))?u(parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)):(f=n.trim(i).toLowerCase(),f=="transparent"?u(255,255,255,0):(r=t[f]||[0,0,0],u(r[0],r[1],r[2])))};var t={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);/*!
Third Party Notices

jquery.flot.crosshair.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement. 


Flot plugin for showing crosshairs, thin lines, when the mouse hovers
over the plot.

crosshair: {
mode: null or "x" or "y" or "xy"
color: color
lineWidth: number
}

Set the mode to one of "x", "y" or "xy". The "x" mode enables a
vertical crosshair that lets you trace the values on the x axis, "y"
enables a horizontal crosshair and "xy" enables them both. "color" is
the color of the crosshair (default is "rgba(170, 0, 0, 0.80)"),
"lineWidth" is the width of the drawn lines (default is 1).

The plugin also adds four public methods:

- setCrosshair(pos)

Set the position of the crosshair. Note that this is cleared if
the user moves the mouse. "pos" is in coordinates of the plot and
should be on the form { x: xpos, y: ypos } (you can use x2/x3/...
if you're using multiple axes), which is coincidentally the same
format as what you get from a "plothover" event. If "pos" is null,
the crosshair is cleared.

- clearCrosshair()

Clear the crosshair.

- lockCrosshair(pos)

Cause the crosshair to lock to the current location, no longer
updating if the user moves the mouse. Optionally supply a position
(passed on to setCrosshair()) to move it to.

Example usage:
var myFlot = $.plot( $("#graph"), ..., { crosshair: { mode: "x" } } };
$("#graph").bind("plothover", function (evt, position, item) {
if (item) {
// Lock the crosshair to the data point being hovered
myFlot.lockCrosshair({ x: item.datapoint[0], y: item.datapoint[1] });
}
else {
// Return normal crosshair operation
myFlot.unlockCrosshair();
}
});

- unlockCrosshair()

Free the crosshair to move again after locking it.
*/
(function(n){function i(n){function i(){t.locked||t.x!=-1&&(t.x=-1,n.triggerRedrawOverlay())}function r(i){if(!t.locked){if(n.getSelection&&n.getSelection()){t.x=-1;return}var r=n.offset();t.x=Math.max(0,Math.min(i.pageX-r.left,n.width())),t.y=Math.max(0,Math.min(i.pageY-r.top,n.height())),n.triggerRedrawOverlay()}}var t={x:-1,y:-1,locked:!1};n.setCrosshair=function(i){if(i){var r=n.p2c(i);t.x=Math.max(0,Math.min(r.left,n.width())),t.y=Math.max(0,Math.min(r.top,n.height()))}else t.x=-1;n.triggerRedrawOverlay()},n.clearCrosshair=n.setCrosshair,n.lockCrosshair=function(i){i&&n.setCrosshair(i),t.locked=!0},n.unlockCrosshair=function(){t.locked=!1},n.hooks.bindEvents.push(function(n,t){n.getOptions().crosshair.mode&&(t.mouseout(i),t.mousemove(r))}),n.hooks.drawOverlay.push(function(n,i){var r=n.getOptions().crosshair,u;r.mode&&(u=n.getPlotOffset(),i.save(),i.translate(u.left,u.top),t.x!=-1&&(i.strokeStyle=r.color,i.lineWidth=r.lineWidth,i.lineJoin="round",i.beginPath(),r.mode.indexOf("x")!=-1&&(i.moveTo(t.x,0),i.lineTo(t.x,n.height())),r.mode.indexOf("y")!=-1&&(i.moveTo(0,t.y),i.lineTo(n.width(),t.y)),i.stroke()),i.restore())}),n.hooks.shutdown.push(function(n,t){t.unbind("mouseout",i),t.unbind("mousemove",r)})}var t={crosshair:{mode:null,color:"rgba(170, 0, 0, 0.80)",lineWidth:1}};n.plot.plugins.push({init:i,options:t,name:"crosshair",version:"1.0"})})(jQuery);/*!
Third Party Notices

jquery.flot.fillbetween.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement. 


Flot plugin for computing bottoms for filled line and bar charts.

The case: you've got two series that you want to fill the area
between. In Flot terms, you need to use one as the fill bottom of the
other. You can specify the bottom of each data point as the third
coordinate manually, or you can use this plugin to compute it for you.

In order to name the other series, you need to give it an id, like this

var dataset = [
{ data: [ ... ], id: "foo" } ,         // use default bottom
{ data: [ ... ], fillBetween: "foo" }, // use first dataset as bottom
];

$.plot($("#placeholder"), dataset, { line: { show: true, fill: true }});

As a convenience, if the id given is a number that doesn't appear as
an id in the series, it is interpreted as the index in the array
instead (so fillBetween: 0 can also mean the first series).
  
Internally, the plugin modifies the datapoints in each series. For
line series, extra data points might be inserted through
interpolation. Note that at points where the bottom line is not
defined (due to a null point or start/end of line), the current line
will show a gap too. The algorithm comes from the jquery.flot.stack.js
plugin, possibly some code could be shared.
*/
(function(n){function i(n){function t(n,t){for(var i=0;i<t.length;++i)if(t[i].id==n.fillBetween)return t[i];return typeof n.fillBetween=="number"?(i=n.fillBetween,i<0||i>=t.length)?null:t[i]:null}function i(n,i,r){var b;if(i.fillBetween!=null&&(b=t(i,n.getData()),b)){for(var f=r.pointsize,s=r.points,a=b.datapoints.pointsize,c=b.datapoints.points,u=[],v,k,g,l,y,p,w=i.lines.show,nt=f>2&&r.format[2].y,tt=w&&i.lines.steps,d=!0,e=0,h=0,o;;){if(e>=s.length)break;if(o=u.length,s[e]==null){for(m=0;m<f;++m)u.push(s[e+m]);e+=f}else if(h>=c.length){if(!w)for(m=0;m<f;++m)u.push(s[e+m]);e+=f}else if(c[h]==null){for(m=0;m<f;++m)u.push(null);d=!0,h+=a}else{if(v=s[e],k=s[e+1],l=c[h],y=c[h+1],p=0,v==l){for(m=0;m<f;++m)u.push(s[e+m]);p=y,e+=f,h+=a}else if(v>l){if(w&&e>0&&s[e-f]!=null){for(g=k+(s[e-f+1]-k)*(l-v)/(s[e-f]-v),u.push(l),u.push(g),m=2;m<f;++m)u.push(s[e+m]);p=y}h+=a}else{if(d&&w){e+=f;continue}for(m=0;m<f;++m)u.push(s[e+m]);w&&h>0&&c[h-a]!=null&&(p=y+(c[h-a+1]-y)*(v-l)/(c[h-a]-l)),e+=f}d=!1,o!=u.length&&nt&&(u[o+2]=p)}if(tt&&o!=u.length&&o>0&&u[o]!=null&&u[o]!=u[o-f]&&u[o+1]!=u[o-f+1]){for(m=0;m<f;++m)u[o+f+m]=u[o+m];u[o+1]=u[o-f+1]}}r.points=u}}n.hooks.processDatapoints.push(i)}var t={series:{fillBetween:null}};n.plot.plugins.push({init:i,options:t,name:"fillbetween",version:"1.0"})})(jQuery);/*!
Third Party Notices

jquery.flot.image.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement. 


Flot plugin for plotting images, e.g. useful for putting ticks on a
prerendered complex visualization.

The data syntax is [[image, x1, y1, x2, y2], ...] where (x1, y1) and
(x2, y2) are where you intend the two opposite corners of the image to
end up in the plot. Image must be a fully loaded Javascript image (you
can make one with new Image()). If the image is not complete, it's
skipped when plotting.

There are two helpers included for retrieving images. The easiest work
the way that you put in URLs instead of images in the data (like
["myimage.png", 0, 0, 10, 10]), then call $.plot.image.loadData(data,
options, callback) where data and options are the same as you pass in
to $.plot. This loads the images, replaces the URLs in the data with
the corresponding images and calls "callback" when all images are
loaded (or failed loading). In the callback, you can then call $.plot
with the data set. See the included example.

A more low-level helper, $.plot.image.load(urls, callback) is also
included. Given a list of URLs, it calls callback with an object
mapping from URL to Image object when all images are loaded or have
failed loading.

Options for the plugin are

series: {
images: {
show: boolean
anchor: "corner" or "center"
alpha: [0,1]
}
}

which can be specified for a specific series

$.plot($("#placeholder"), [{ data: [ ... ], images: { ... } ])

Note that because the data format is different from usual data points,
you can't use images with anything else in a specific data series.

Setting "anchor" to "center" causes the pixels in the image to be
anchored at the corner pixel centers inside of at the pixel corners,
effectively letting half a pixel stick out to each side in the plot.


A possible future direction could be support for tiling for large
images (like Google Maps).

*/
(function(n){function i(n,t,i){var b=n.getPlotOffset(),a,k,c;if(i.images&&i.images.show)for(a=i.datapoints.points,k=i.datapoints.pointsize,c=0;c<a.length;c+=k){var l=a[c],r=a[c+1],u=a[c+2],f=a[c+3],e=a[c+4],s=i.xaxis,h=i.yaxis,o;if(l&&!(l.width<=0)&&!(l.height<=0)&&(r>f&&(o=f,f=r,r=o),u>e&&(o=e,e=u,u=o),i.images.anchor=="center"&&(o=.5*(f-r)/(l.width-1),r-=o,f+=o,o=.5*(e-u)/(l.height-1),u-=o,e+=o),r!=f&&u!=e&&!(r>=s.max)&&!(f<=s.min)&&!(u>=h.max)&&!(e<=h.min))){var v=0,y=0,p=l.width,w=l.height;r<s.min&&(v+=(p-v)*(s.min-r)/(f-r),r=s.min),f>s.max&&(p+=(p-v)*(s.max-f)/(f-r),f=s.max),u<h.min&&(w+=(y-w)*(h.min-u)/(e-u),u=h.min),e>h.max&&(y+=(y-w)*(h.max-e)/(e-u),e=h.max),r=s.p2c(r),f=s.p2c(f),u=h.p2c(u),e=h.p2c(e),r>f&&(o=f,f=r,r=o),u>e&&(o=e,e=u,u=o),o=t.globalAlpha,t.globalAlpha*=i.images.alpha,t.drawImage(l,v,y,p-v,w-y,r+b.left,u+b.top,f-r,e-u),t.globalAlpha=o}}}function r(n,t,i,r){t.images.show&&(r.format=[{required:!0},{x:!0,number:!0,required:!0},{y:!0,number:!0,required:!0},{x:!0,number:!0,required:!0},{y:!0,number:!0,required:!0}])}function u(n){n.hooks.processRawData.push(r),n.hooks.drawSeries.push(i)}var t={series:{images:{show:!1,alpha:1,anchor:"corner"}}};n.plot.image={},n.plot.image.loadDataImages=function(t,i,r){var u=[],f=[],e=i.series.images.show;n.each(t,function(t,i){(e||i.images.show)&&(i.data&&(i=i.data),n.each(i,function(n,t){typeof t[0]=="string"&&(u.push(t[0]),f.push(t))}))}),n.plot.image.load(u,function(t){n.each(f,function(n,i){var r=i[0];t[r]&&(i[0]=t[r])}),r()})},n.plot.image.load=function(t,i){var r=t.length,u={};r==0&&i({}),n.each(t,function(t,f){var e=function(){--r,u[f]=this,r==0&&i(u)};n("<img />").load(e).error(e).attr("src",f)})},n.plot.plugins.push({init:u,options:t,name:"image",version:"1.1"})})(jQuery);/*!
Third Party Notices

jquery.flot.navigate.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement. 


Flot plugin for adding panning and zooming capabilities to a plot.

The default behaviour is double click and scrollwheel up/down to zoom
in, drag to pan. The plugin defines plot.zoom({ center }),
plot.zoomOut() and plot.pan(offset) so you easily can add custom
controls. It also fires a "plotpan" and "plotzoom" event when
something happens, useful for synchronizing plots.

Options:

zoom: {
interactive: false
trigger: "dblclick" // or "click" for single click
amount: 1.5         // 2 = 200% (zoom in), 0.5 = 50% (zoom out)
}
  
pan: {
interactive: false
cursor: "move"      // CSS mouse cursor value used when dragging, e.g. "pointer"
frameRate: 20
}

xaxis, yaxis, x2axis, y2axis: {
zoomRange: null  // or [number, number] (min range, max range) or false
panRange: null   // or [number, number] (min, max) or false
}
  
"interactive" enables the built-in drag/click behaviour. If you enable
interactive for pan, then you'll have a basic plot that supports
moving around; the same for zoom.

"amount" specifies the default amount to zoom in (so 1.5 = 150%)
relative to the current viewport.

"cursor" is a standard CSS mouse cursor string used for visual
feedback to the user when dragging.

"frameRate" specifies the maximum number of times per second the plot
will update itself while the user is panning around on it (set to null
to disable intermediate pans, the plot will then not update until the
mouse button is released).

"zoomRange" is the interval in which zooming can happen, e.g. with
zoomRange: [1, 100] the zoom will never scale the axis so that the
difference between min and max is smaller than 1 or larger than 100.
You can set either end to null to ignore, e.g. [1, null]. If you set
zoomRange to false, zooming on that axis will be disabled.

"panRange" confines the panning to stay within a range, e.g. with
panRange: [-10, 20] panning stops at -10 in one end and at 20 in the
other. Either can be null, e.g. [-10, null]. If you set
panRange to false, panning on that axis will be disabled.

Example API usage:

plot = $.plot(...);
  
// zoom default amount in on the pixel (10, 20) 
plot.zoom({ center: { left: 10, top: 20 } });

// zoom out again
plot.zoomOut({ center: { left: 10, top: 20 } });

// zoom 200% in on the pixel (10, 20) 
plot.zoom({ amount: 2, center: { left: 10, top: 20 } });
  
// pan 100 pixels to the left and 20 down
plot.pan({ left: -100, top: 20 })

Here, "center" specifies where the center of the zooming should
happen. Note that this is defined in pixel space, not the space of the
data points (you can use the p2c helpers on the axes in Flot to help
you convert between these).

"amount" is the amount to zoom the viewport relative to the current
range, so 1 is 100% (i.e. no change), 1.5 is 150% (zoom in), 0.7 is
70% (zoom out). You can set the default in the options.
  
*/
(function(n){function u(s){var c=this,l,h=s.data||{};if(h.elem)c=s.dragTarget=h.elem,s.dragProxy=t.proxy||c,s.cursorOffsetX=h.pageX-h.left,s.cursorOffsetY=h.pageY-h.top,s.offsetX=s.pageX-s.cursorOffsetX,s.offsetY=s.pageY-s.cursorOffsetY;else if(t.dragging||h.which>0&&s.which!=h.which||n(s.target).is(h.not))return;switch(s.type){case"mousedown":return n.extend(h,n(c).offset(),{elem:c,target:s.target,pageX:s.pageX,pageY:s.pageY}),r.add(document,"mousemove mouseup",u,h),o(c,!1),t.dragging=null,!1;case!t.dragging&&"mousemove":if(e(s.pageX-h.pageX)+e(s.pageY-h.pageY)<h.distance)break;s.target=h.target,l=f(s,"dragstart",c),l!==!1&&(t.dragging=c,t.proxy=s.dragProxy=n(l||c)[0]);case"mousemove":if(t.dragging){if(l=f(s,"drag",c),i.drop&&(i.drop.allowed=l!==!1,i.drop.handler(s)),l!==!1)break;s.type="mouseup"}case"mouseup":r.remove(document,"mousemove mouseup",u),t.dragging&&(i.drop&&i.drop.handler(s),f(s,"dragend",c)),o(c,!0),t.dragging=t.proxy=h.elem=!1}return!0}function f(t,i,r){t.type=i;var u=n.event.handle.call(r,t);return u===!1?!1:u||t.result}function e(n){return Math.pow(n,2)}function s(){return t.dragging===!1}function o(n,t){n&&(n.unselectable=t?"off":"on",n.onselectstart=function(){return t},n.style&&(n.style.MozUserSelect=t?"":"none"))}n.fn.drag=function(n,t,i){return t&&this.bind("dragstart",n),i&&this.bind("dragend",i),n?this.bind("drag",t?t:n):this.trigger("drag")};var r=n.event,i=r.special,t=i.drag={not:":input",distance:0,which:1,dragging:!1,setup:function(i){i=n.extend({distance:t.distance,which:t.which,not:t.not},i||{}),i.distance=e(i.distance),r.add(this,"mousedown",u,i),this.attachEvent&&this.attachEvent("ondragstart",s)},teardown:function(){r.remove(this,"mousedown",u),this===t.dragging&&(t.dragging=t.proxy=!1),o(this,!0),this.detachEvent&&this.detachEvent("ondragstart",s)}};i.dragstart=i.dragend={setup:function(){},teardown:function(){}}})(jQuery),function(n){function i(t){var r=[].slice.call(arguments,1),i=0,u=!0;return t=n.event.fix(t||window.event),t.type="mousewheel",t.wheelDelta&&(i=t.wheelDelta/120),t.detail&&(i=-t.detail/3),r.unshift(t,i),n.event.handle.apply(this,r)}var t=["DOMMouseScroll","mousewheel"];n.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var n=t.length;n;)this.addEventListener(t[--n],i,!1);else this.onmousewheel=i},teardown:function(){if(this.removeEventListener)for(var n=t.length;n;)this.removeEventListener(t[--n],i,!1);else this.onmousewheel=null}},n.fn.extend({mousewheel:function(n){return n?this.bind("mousewheel",n):this.trigger("mousewheel")},unmousewheel:function(n){return this.unbind("mousewheel",n)}})}(jQuery),function(n){function i(t){function f(n,i){var r=t.offset();r.left=n.pageX-r.left,r.top=n.pageY-r.top,i?t.zoomOut({center:r}):t.zoom({center:r})}function e(n,t){return f(n,t<0),!1}function s(n){if(n.which!=1)return!1;var i=t.getPlaceholder().css("cursor");i&&(o=i),t.getPlaceholder().css("cursor",t.getOptions().pan.cursor),r=n.pageX,u=n.pageY}function h(n){var f=t.getOptions().pan.frameRate;!i&&f&&(i=setTimeout(function(){t.pan({left:r-n.pageX,top:u-n.pageY}),r=n.pageX,u=n.pageY,i=null},1e3/f))}function c(n){i&&(clearTimeout(i),i=null),t.getPlaceholder().css("cursor",o),t.pan({left:r-n.pageX,top:u-n.pageY})}function l(n,t){var i=n.getOptions();i.zoom.interactive&&(t[i.zoom.trigger](f),t.mousewheel(e)),i.pan.interactive&&(t.bind("dragstart",{distance:10},s),t.bind("drag",h),t.bind("dragend",c))}function a(n,t){t.unbind(n.getOptions().zoom.trigger,f),t.unbind("mousewheel",e),t.unbind("dragstart",s),t.unbind("drag",h),t.unbind("dragend",c),i&&clearTimeout(i)}var o="default",r=0,u=0,i=null;t.zoomOut=function(n){n||(n={}),n.amount||(n.amount=t.getOptions().zoom.amount),n.amount=1/n.amount,t.zoom(n)},t.zoom=function(i){i||(i={});var r=i.center,u=i.amount||t.getOptions().zoom.amount,f=t.width(),e=t.height();r||(r={left:f/2,top:e/2});var o=r.left/f,s=r.top/e,h={x:{min:r.left-o*f/u,max:r.left+(1-o)*f/u},y:{min:r.top-s*e/u,max:r.top+(1-s)*e/u}};n.each(t.getAxes(),function(n,t){var f=t.options,i=h[t.direction].min,r=h[t.direction].max,u=f.zoomRange,o,e;u!==!1&&((i=t.c2p(i),r=t.c2p(r),i>r&&(o=i,i=r,r=o),e=r-i,u&&(u[0]!=null&&e<u[0]||u[1]!=null&&e>u[1]))||(f.min=i,f.max=r))}),t.setupGrid(),t.draw(),i.preventEvent||t.getPlaceholder().trigger("plotzoom",[t])},t.pan=function(i){var r={x:+i.left,y:+i.top};isNaN(r.x)&&(r.x=0),isNaN(r.y)&&(r.y=0),n.each(t.getAxes(),function(n,t){var o=t.options,f,e,u=r[t.direction],i;(f=t.c2p(t.p2c(t.min)+u),e=t.c2p(t.p2c(t.max)+u),i=o.panRange,i!==!1)&&(i&&(i[0]!=null&&i[0]>f&&(u=i[0]-f,f+=u,e+=u),i[1]!=null&&i[1]<e&&(u=i[1]-e,f+=u,e+=u)),o.min=f,o.max=e)}),t.setupGrid(),t.draw(),i.preventEvent||t.getPlaceholder().trigger("plotpan",[t])},t.hooks.bindEvents.push(l),t.hooks.shutdown.push(a)}var t={xaxis:{zoomRange:null,panRange:null},zoom:{interactive:!1,trigger:"dblclick",amount:1.5},pan:{interactive:!1,cursor:"move",frameRate:20}};n.plot.plugins.push({init:i,options:t,name:"navigate",version:"1.3"})}(jQuery);/*!
Third Party Notices

jquery.flot.pie.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement. 


Flot plugin for rendering pie charts. The plugin assumes the data is 
coming is as a single data value for each series, and each of those 
values is a positive value or zero (negative numbers don't make 
any sense and will cause strange effects). The data values do 
NOT need to be passed in as percentage values because it 
internally calculates the total and percentages.

* Created by Brian Medendorp, June 2009
* Updated November 2009 with contributions from: btburnett3, Anthony Aragues and Xavi Ivars

* Changes:
2009-10-22: lineJoin set to round
2009-10-23: IE full circle fix, donut
2009-11-11: Added basic hover from btburnett3 - does not work in IE, and center is off in Chrome and Opera
2009-11-17: Added IE hover capability submitted by Anthony Aragues
2009-11-18: Added bug fix submitted by Xavi Ivars (issues with arrays when other JS libraries are included as well)
		

Available options are:
series: {
pie: {
show: true/false
radius: 0-1 for percentage of fullsize, or a specified pixel length, or 'auto'
innerRadius: 0-1 for percentage of fullsize or a specified pixel length, for creating a donut effect
startAngle: 0-2 factor of PI used for starting angle (in radians) i.e 3/2 starts at the top, 0 and 2 have the same result
tilt: 0-1 for percentage to tilt the pie, where 1 is no tilt, and 0 is completely flat (nothing will show)
offset: {
top: integer value to move the pie up or down
left: integer value to move the pie left or right, or 'auto'
},
stroke: {
color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#FFF')
width: integer pixel width of the stroke
},
label: {
show: true/false, or 'auto'
formatter:  a user-defined function that modifies the text/style of the label text
radius: 0-1 for percentage of fullsize, or a specified pixel length
background: {
color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#000')
opacity: 0-1
},
threshold: 0-1 for the percentage value at which to hide labels (if they're too small)
},
combine: {
threshold: 0-1 for the percentage value at which to combine slices (if they're too small)
color: any hexidecimal color value (other formats may or may not work, so best to stick with something like '#CCC'), if null, the plugin will automatically use the color of the first slice to be combined
label: any text value of what the combined slice should be labeled
}
highlight: {
opacity: 0-1
}
}
}

More detail and specific examples can be found in the included HTML file.

*/
(function(n){function r(r){function g(n,t){t.series.pie.show&&(t.grid.show=!1,t.series.pie.label.show=="auto"&&(t.series.pie.label.show=t.legend.show?!1:!0),t.series.pie.radius=="auto"&&(t.series.pie.radius=t.series.pie.label.show?3/4:1),t.series.pie.tilt>1&&(t.series.pie.tilt=1),t.series.pie.tilt<0&&(t.series.pie.tilt=0),n.hooks.processDatapoints.push(it),n.hooks.drawOverlay.push(vt),n.hooks.draw.push(et))}function nt(n,t){var i=n.getOptions();i.series.pie.show&&i.grid.hoverable&&t.unbind("mousemove").mousemove(ht),i.series.pie.show&&i.grid.clickable&&t.unbind("click").click(ct)}function tt(n){for(var i,t=0;t<n.length;++t)i=parseFloat(n[t].data[0][1]),i&&(c+=i)}function it(i){p||(p=!0,u=i.getCanvas(),s=n(u).parent(),t=i.getOptions(),i.setData(ft(i.getData())))}function rt(){a=s.children().filter(".legend").children().width(),e=Math.min(u.width,u.height/t.series.pie.tilt)/2,h=u.height/2+t.series.pie.offset.top,f=u.width/2,t.series.pie.offset.left=="auto"?t.legend.position.match("w")?f+=a/2:f-=a/2:f+=t.series.pie.offset.left,f<e?f=e:f>u.width-e&&(f=u.width-e)}function ut(n){for(var t=0;t<n.length;++t)typeof n[t].data=="number"?n[t].data=[[1,n[t].data]]:(typeof n[t].data=="undefined"||typeof n[t].data[0]=="undefined")&&(typeof n[t].data!="undefined"&&typeof n[t].data.label!="undefined"&&(n[t].label=n[t].data.label),n[t].data=[[1,0]]);return n}function ft(n){var i;n=ut(n),tt(n);var r=0,e=0,u=t.series.pie.combine.color,f=[];for(i=0;i<n.length;++i)n[i].data[0][1]=parseFloat(n[i].data[0][1]),n[i].data[0][1]||(n[i].data[0][1]=0),n[i].data[0][1]/c<=t.series.pie.combine.threshold?(r+=n[i].data[0][1],e++,u||(u=n[i].color)):f.push({data:[[1,n[i].data[0][1]]],color:n[i].color,label:n[i].label,angle:n[i].data[0][1]*Math.PI*2/c,percent:n[i].data[0][1]/c*100});return e>0&&f.push({data:[[1,r]],color:u,label:t.series.pie.combine.label,angle:r*Math.PI*2/c,percent:r/c*100}),f}function et(i,r){function a(){ctx.clearRect(0,0,u.width,u.height),s.children().filter(".pieLabel, .pieLabelBackground").remove()}function y(){var r=5,o=15,s=10,c=.02,n,i;if(n=t.series.pie.radius>1?t.series.pie.radius:e*t.series.pie.radius,!(n>=u.width/2-r)&&!(n*t.series.pie.tilt>=u.height/2-o)&&!(n<=s)){for(ctx.save(),ctx.translate(r,o),ctx.globalAlpha=c,ctx.fillStyle="#000",ctx.translate(f,h),ctx.scale(1,t.series.pie.tilt),i=1;i<=s;i++)ctx.beginPath(),ctx.arc(0,0,n,0,Math.PI*2,!1),ctx.fill(),n-=i;ctx.restore()}}function p(){function a(t,i,u){t<=0||(u?ctx.fillStyle=i:(ctx.strokeStyle=i,ctx.lineJoin="round"),ctx.beginPath(),Math.abs(t-Math.PI*2)>1e-9?ctx.moveTo(0,0):n.browser.msie&&(t-=.0001),ctx.arc(0,0,c,r,r+t,!1),ctx.closePath(),r+=t,u?ctx.fill():ctx.stroke())}function v(){function a(i,e,o){var w,a,b,p,nt;if(i.data[0][1]!=0){w=t.legend.labelFormatter,b=t.series.pie.label.formatter,a=w?w(i.label,i):i.label,b&&(a=b(a,i));var k=(e+i.angle+e)/2,d=f+Math.round(Math.cos(k)*r),g=h+Math.round(Math.sin(k)*r)*t.series.pie.tilt,tt='<span class="pieLabel" id="pieLabel'+o+'" style="position:absolute;top:'+g+"px;left:"+d+'px;">'+a+"<\/span>";s.append(tt);var c=s.children("#pieLabel"+o),v=g-c.height()/2,y=d-c.width()/2;c.css("top",v),c.css("left",y),(0-v>0||0-y>0||u.height-(v+c.height())<0||u.width-(y+c.width())<0)&&(l=!0),t.series.pie.label.background.opacity!=0&&(p=t.series.pie.label.background.color,p==null&&(p=i.color),nt="top:"+v+"px;left:"+y+"px;",n('<div class="pieLabelBackground" style="position:absolute;width:'+c.width()+"px;height:"+c.height()+"px;"+nt+"background-color:"+p+';"> <\/div>').insertBefore(c).css("opacity",t.series.pie.label.background.opacity))}}for(var c=startAngle,r=t.series.pie.label.radius>1?t.series.pie.label.radius:e*t.series.pie.label.radius,i=0;i<o.length;++i)o[i].percent>=t.series.pie.label.threshold*100&&a(o[i],c,i),c+=o[i].angle}var c,r,i;for(startAngle=Math.PI*t.series.pie.startAngle,c=t.series.pie.radius>1?t.series.pie.radius:e*t.series.pie.radius,ctx.save(),ctx.translate(f,h),ctx.scale(1,t.series.pie.tilt),ctx.save(),r=startAngle,i=0;i<o.length;++i)o[i].startAngle=r,a(o[i].angle,o[i].color,!0);for(ctx.restore(),ctx.save(),ctx.lineWidth=t.series.pie.stroke.width,r=startAngle,i=0;i<o.length;++i)a(o[i].angle,t.series.pie.stroke.color,!1);ctx.restore(),w(ctx),t.series.pie.label.show&&v(),ctx.restore()}if(s){ctx=r,rt();for(var o=i.getData(),c=0;l&&c<v;)l=!1,c>0&&(e*=d),c+=1,a(),t.series.pie.tilt<=.8&&y(),p();c>=v&&(a(),s.prepend('<div class="error">Could not draw pie with labels contained inside canvas<\/div>')),i.setSeries&&i.insertLegend&&(i.setSeries(o),i.insertLegend())}}function w(n){t.series.pie.innerRadius>0&&(n.save(),innerRadius=t.series.pie.innerRadius>1?t.series.pie.innerRadius:e*t.series.pie.innerRadius,n.globalCompositeOperation="destination-out",n.beginPath(),n.fillStyle=t.series.pie.stroke.color,n.arc(0,0,innerRadius,0,Math.PI*2,!1),n.fill(),n.closePath(),n.restore(),n.save(),n.beginPath(),n.strokeStyle=t.series.pie.stroke.color,n.arc(0,0,innerRadius,0,Math.PI*2,!1),n.stroke(),n.closePath(),n.restore())}function ot(n,t){for(var u=!1,i=-1,f=n.length,r=f-1;++i<f;r=i)(n[i][1]<=t[1]&&t[1]<n[r][1]||n[r][1]<=t[1]&&t[1]<n[i][1])&&t[0]<(n[r][0]-n[i][0])*(t[1]-n[i][1])/(n[r][1]-n[i][1])+n[i][0]&&(u=!u);return u}function st(n,t){for(var c=r.getData(),s=r.getOptions(),u=s.series.pie.radius>1?s.series.pie.radius:e*s.series.pie.radius,i,o=0;o<c.length;++o)if(i=c[o],i.pie.show){if(ctx.save(),ctx.beginPath(),ctx.moveTo(0,0),ctx.arc(0,0,u,i.startAngle,i.startAngle+i.angle,!1),ctx.closePath(),x=n-f,y=t-h,ctx.isPointInPath){if(ctx.isPointInPath(n-f,t-h))return ctx.restore(),{datapoint:[i.percent,i.data],dataIndex:0,series:i,seriesIndex:o}}else if(p1X=u*Math.cos(i.startAngle),p1Y=u*Math.sin(i.startAngle),p2X=u*Math.cos(i.startAngle+i.angle/4),p2Y=u*Math.sin(i.startAngle+i.angle/4),p3X=u*Math.cos(i.startAngle+i.angle/2),p3Y=u*Math.sin(i.startAngle+i.angle/2),p4X=u*Math.cos(i.startAngle+i.angle/1.5),p4Y=u*Math.sin(i.startAngle+i.angle/1.5),p5X=u*Math.cos(i.startAngle+i.angle),p5Y=u*Math.sin(i.startAngle+i.angle),arrPoly=[[0,0],[p1X,p1Y],[p2X,p2Y],[p3X,p3Y],[p4X,p4Y],[p5X,p5Y]],arrPoint=[x,y],ot(arrPoly,arrPoint))return ctx.restore(),{datapoint:[i.percent,i.data],dataIndex:0,series:i,seriesIndex:o};ctx.restore()}return null}function ht(n){b("plothover",n)}function ct(n){b("plotclick",n)}function b(n,i){var h=r.offset(),l=parseInt(i.pageX-h.left),a=parseInt(i.pageY-h.top),u=st(l,a),f,e,c;if(t.grid.autoHighlight)for(f=0;f<o.length;++f)e=o[f],e.auto!=n||u&&e.series==u.series||at(e.series);u&&lt(u.series,n),c={pageX:i.pageX,pageY:i.pageY},s.trigger(n,[c,u])}function lt(n,t){typeof n=="number"&&(n=series[n]);var i=k(n);i==-1?(o.push({series:n,auto:t}),r.triggerRedrawOverlay()):t||(o[i].auto=!1)}function at(n){n==null&&(o=[],r.triggerRedrawOverlay()),typeof n=="number"&&(n=series[n]);var t=k(n);t!=-1&&(o.splice(t,1),r.triggerRedrawOverlay())}function k(n){for(var i,t=0;t<o.length;++t)if(i=o[t],i.series==n)return t;return-1}function vt(n,t){function s(n){n.angle<0||(t.fillStyle="rgba(255, 255, 255, "+r.series.pie.highlight.opacity+")",t.beginPath(),Math.abs(n.angle-Math.PI*2)>1e-9&&t.moveTo(0,0),t.arc(0,0,u,n.startAngle,n.startAngle+n.angle,!1),t.closePath(),t.fill())}var r=n.getOptions(),u=r.series.pie.radius>1?r.series.pie.radius:e*r.series.pie.radius;for(t.save(),t.translate(f,h),t.scale(1,r.series.pie.tilt),i=0;i<o.length;++i)s(o[i].series);w(t),t.restore()}var u=null,s=null,e=null,f=null,h=null,c=0,l=!0,v=10,d=.95,a=0,p=!1,yt=!1,o=[];r.hooks.processOptions.push(g),r.hooks.bindEvents.push(nt)}var t={series:{pie:{show:!1,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,offset:{top:0,left:"auto"},stroke:{color:"#FFF",width:1},label:{show:"auto",formatter:function(n,t){return'<div style="font-size:x-small;text-align:center;padding:2px;color:'+t.color+';">'+n+"<br/>"+Math.round(t.percent)+"%<\/div>"},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:.5}}}};n.plot.plugins.push({init:r,options:t,name:"pie",version:"1.0"})})(jQuery);/*!
Third Party Notices

jquery.flot.resize.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement. 


Flot plugin for automatically redrawing plots when the placeholder
size changes, e.g. on window resizes.

It works by listening for changes on the placeholder div (through the
jQuery resize event plugin) - if the size changes, it will redraw the
plot.

There are no options. If you need to disable the plugin for some
plots, you can just fix the size of their placeholders.
*/
(function(n,t,i){function l(){h=t[f](function(){r.each(function(){var i=n(this),r=i.width(),u=i.height(),t=n.data(this,e);(r!==t.w||u!==t.h)&&i.trigger(s,[t.w=r,t.h=u])}),l()},u[c])}var r=n([]),u=n.resize=n.extend(n.resize,{}),h,f="setTimeout",s="resize",e=s+"-special-event",c="delay",o="throttleWindow";u[c]=250,u[o]=!0,n.event.special[s]={setup:function(){if(!u[o]&&this[f])return!1;var t=n(this);r=r.add(t),n.data(this,e,{w:t.width(),h:t.height()}),r.length===1&&l()},teardown:function(){if(!u[o]&&this[f])return!1;var t=n(this);r=r.not(t),t.removeData(e),r.length||clearTimeout(h)},add:function(t){function s(t,u,f){var o=n(this),s=n.data(this,e);s.w=u!==i?u:o.width(),s.h=f!==i?f:o.height(),r.apply(this,arguments)}if(!u[o]&&this[f])return!1;var r;if(n.isFunction(t))return r=t,s;r=t.handler,t.handler=s}}})(jQuery,this),function(n){function i(n){function t(){var t=n.getPlaceholder();t.width()!=0&&t.height()!=0&&(n.resize(),n.setupGrid(),n.draw())}function i(n){n.getPlaceholder().resize(t)}function r(n){n.getPlaceholder().unbind("resize",t)}n.hooks.bindEvents.push(i),n.hooks.shutdown.push(r)}var t={};n.plot.plugins.push({init:i,options:t,name:"resize",version:"1.0"})}(jQuery);/*!
Third Party Notices

jquery.flot.selection.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement. 


Flot plugin for selecting regions.

The plugin defines the following options:

selection: {
mode: null or "x" or "y" or "xy",
color: color
}

Selection support is enabled by setting the mode to one of "x", "y" or
"xy". In "x" mode, the user will only be able to specify the x range,
similarly for "y" mode. For "xy", the selection becomes a rectangle
where both ranges can be specified. "color" is color of the selection
(if you need to change the color later on, you can get to it with
plot.getOptions().selection.color).

When selection support is enabled, a "plotselected" event will be
emitted on the DOM element you passed into the plot function. The
event handler gets a parameter with the ranges selected on the axes,
like this:

placeholder.bind("plotselected", function(event, ranges) {
alert("You selected " + ranges.xaxis.from + " to " + ranges.xaxis.to)
// similar for yaxis - with multiple axes, the extra ones are in
// x2axis, x3axis, ...
});

The "plotselected" event is only fired when the user has finished
making the selection. A "plotselecting" event is fired during the
process with the same parameters as the "plotselected" event, in case
you want to know what's happening while it's happening,

A "plotunselected" event with no arguments is emitted when the user
clicks the mouse to remove the selection.

The plugin allso adds the following methods to the plot object:

- setSelection(ranges, preventEvent)

Set the selection rectangle. The passed in ranges is on the same
form as returned in the "plotselected" event. If the selection mode
is "x", you should put in either an xaxis range, if the mode is "y"
you need to put in an yaxis range and both xaxis and yaxis if the
selection mode is "xy", like this:

setSelection({ xaxis: { from: 0, to: 10 }, yaxis: { from: 40, to: 60 } });

setSelection will trigger the "plotselected" event when called. If
you don't want that to happen, e.g. if you're inside a
"plotselected" handler, pass true as the second parameter. If you
are using multiple axes, you can specify the ranges on any of those,
e.g. as x2axis/x3axis/... instead of xaxis, the plugin picks the
first one it sees.
  
- clearSelection(preventEvent)

Clear the selection rectangle. Pass in true to avoid getting a
"plotunselected" event.

- getSelection()

Returns the current selection in the same format as the
"plotselected" event. If there's currently no selection, the
function returns null.

*/
(function(n){function t(t){function o(n){i.active&&(a(n),t.getPlaceholder().trigger("plotselecting",[e()]))}function s(t){if(t.which==1){document.body.focus(),document.onselectstart!==undefined&&r.onselectstart==null&&(r.onselectstart=document.onselectstart,document.onselectstart=function(){return!1}),document.ondrag!==undefined&&r.ondrag==null&&(r.ondrag=document.ondrag,document.ondrag=function(){return!1}),l(i.first,t),i.active=!0,u=function(n){p(n)};n(document).one("mouseup",u)}}function p(n){return u=null,document.onselectstart!==undefined&&(document.onselectstart=r.onselectstart),document.ondrag!==undefined&&(document.ondrag=r.ondrag),i.active=!1,a(n),f()?h():(t.getPlaceholder().trigger("plotunselected",[]),t.getPlaceholder().trigger("plotselecting",[null])),!1}function e(){if(!f())return null;var r={},u=i.first,e=i.second;return n.each(t.getAxes(),function(n,t){if(t.used){var i=t.c2p(u[t.direction]),f=t.c2p(e[t.direction]);r[n]={from:Math.min(i,f),to:Math.max(i,f)}}}),r}function h(){var n=e();t.getPlaceholder().trigger("plotselected",[n]),n.xaxis&&n.yaxis&&t.getPlaceholder().trigger("selected",[{x1:n.xaxis.from,y1:n.yaxis.from,x2:n.xaxis.to,y2:n.yaxis.to}])}function c(n,t,i){return t<n?n:t>i?i:t}function l(n,r){var u=t.getOptions(),f=t.getPlaceholder().offset(),e=t.getPlotOffset();n.x=c(0,r.pageX-f.left-e.left,t.width()),n.y=c(0,r.pageY-f.top-e.top,t.height()),u.selection.mode=="y"&&(n.x=n==i.first?0:t.width()),u.selection.mode=="x"&&(n.y=n==i.first?0:t.height())}function a(n){n.pageX!=null&&(l(i.second,n),f()?(i.show=!0,t.triggerRedrawOverlay()):v(!0))}function v(n){i.show&&(i.show=!1,t.triggerRedrawOverlay(),n||t.getPlaceholder().trigger("plotunselected",[]))}function y(n,i){var e,r,u,f,o=t.getAxes(),s,h;for(s in o)if(e=o[s],e.direction==i&&(f=i+e.n+"axis",n[f]||e.n!=1||(f=i+"axis"),n[f])){r=n[f].from,u=n[f].to;break}return n[f]||(e=i=="x"?t.getXAxes()[0]:t.getYAxes()[0],r=n[i+"1"],u=n[i+"2"]),r!=null&&u!=null&&r>u&&(h=r,r=u,u=h),{from:r,to:u,axis:e}}function w(n,r){var o,u,e=t.getOptions();e.selection.mode=="y"?(i.first.x=0,i.second.x=t.width()):(u=y(n,"x"),i.first.x=u.axis.p2c(u.from),i.second.x=u.axis.p2c(u.to)),e.selection.mode=="x"?(i.first.y=0,i.second.y=t.height()):(u=y(n,"y"),i.first.y=u.axis.p2c(u.from),i.second.y=u.axis.p2c(u.to)),i.show=!0,t.triggerRedrawOverlay(),!r&&f()&&h()}function f(){var n=5;return Math.abs(i.second.x-i.first.x)>=n&&Math.abs(i.second.y-i.first.y)>=n}var i={first:{x:-1,y:-1},second:{x:-1,y:-1},show:!1,active:!1},r={},u=null;t.clearSelection=v,t.setSelection=w,t.getSelection=e,t.hooks.bindEvents.push(function(n,t){var i=n.getOptions();i.selection.mode!=null&&(t.mousemove(o),t.mousedown(s))}),t.hooks.drawOverlay.push(function(t,r){var u,o,e;if(i.show&&f()){u=t.getPlotOffset(),o=t.getOptions(),r.save(),r.translate(u.left,u.top),e=n.color.parse(o.selection.color),r.strokeStyle=e.scale("a",.8).toString(),r.lineWidth=1,r.lineJoin="round",r.fillStyle=e.scale("a",.4).toString();var s=Math.min(i.first.x,i.second.x),h=Math.min(i.first.y,i.second.y),c=Math.abs(i.second.x-i.first.x),l=Math.abs(i.second.y-i.first.y);r.fillRect(s,h,c,l),r.strokeRect(s,h,c,l),r.restore()}}),t.hooks.shutdown.push(function(t,i){i.unbind("mousemove",o),i.unbind("mousedown",s),u&&n(document).unbind("mouseup",u)})}n.plot.plugins.push({init:t,options:{selection:{mode:null,color:"#e8cfac"}},name:"selection",version:"1.1"})})(jQuery);/*!
Third Party Notices

jquery.flot.stack.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement.


Flot plugin for stacking data sets, i.e. putting them on top of each
other, for accumulative graphs.

The plugin assumes the data is sorted on x (or y if stacking
horizontally). For line charts, it is assumed that if a line has an
undefined gap (from a null point), then the line above it should have
the same gap - insert zeros instead of "null" if you want another
behaviour. This also holds for the start and end of the chart. Note
that stacking a mix of positive and negative values in most instances
doesn't make sense (so it looks weird).

Two or more series are stacked when their "stack" attribute is set to
the same key (which can be any number or string or just "true"). To
specify the default stack, you can set

series: {
stack: null or true or key (number/string)
}

or specify it for a specific series

$.plot($("#placeholder"), [{ data: [ ... ], stack: true }])
  
The stacking order is determined by the order of the data series in
the array (later series end up on top of the previous).

Internally, the plugin modifies the datapoints in each series, adding
an offset to the y value. For line series, extra data points are
inserted through interpolation. If there's a second y value, it's also
adjusted (e.g for bar charts or filled areas).
*/
(function(n){function i(n){function t(n,t){for(var r=null,i=0;i<t.length;++i){if(n==t[i])break;t[i].stack==n.stack&&(r=t[i])}return r}function i(n,i,r){var k;if(i.stack!=null&&(k=t(i,n.getData()),k)){for(var f=r.pointsize,s=r.points,v=k.datapoints.pointsize,c=k.datapoints.points,u=[],y,g,it,l,a,p,b=i.lines.show,nt=i.bars.horizontal,rt=f>2&&(nt?r.format[2].x:r.format[2].y),ut=b&&i.lines.steps,tt=!0,d=nt?1:0,w=nt?0:1,e=0,h=0,o;;){if(e>=s.length)break;if(o=u.length,s[e]==null){for(m=0;m<f;++m)u.push(s[e+m]);e+=f}else if(h>=c.length){if(!b)for(m=0;m<f;++m)u.push(s[e+m]);e+=f}else if(c[h]==null){for(m=0;m<f;++m)u.push(null);tt=!0,h+=v}else{if(y=s[e+d],g=s[e+w],l=c[h+d],a=c[h+w],p=0,y==l){for(m=0;m<f;++m)u.push(s[e+m]);u[o+w]+=a,p=a,e+=f,h+=v}else if(y>l){if(b&&e>0&&s[e-f]!=null){for(it=g+(s[e-f+w]-g)*(l-y)/(s[e-f+d]-y),u.push(l),u.push(it+a),m=2;m<f;++m)u.push(s[e+m]);p=a}h+=v}else{if(tt&&b){e+=f;continue}for(m=0;m<f;++m)u.push(s[e+m]);b&&h>0&&c[h-v]!=null&&(p=a+(c[h-v+w]-a)*(y-l)/(c[h-v+d]-l)),u[o+w]+=p,e+=f}tt=!1,o!=u.length&&rt&&(u[o+2]+=p)}if(ut&&o!=u.length&&o>0&&u[o]!=null&&u[o]!=u[o-f]&&u[o+1]!=u[o-f+1]){for(m=0;m<f;++m)u[o+f+m]=u[o+m];u[o+1]=u[o-f+1]}}r.points=u}}n.hooks.processDatapoints.push(i)}var t={series:{stack:null}};n.plot.plugins.push({init:i,options:t,name:"stack",version:"1.2"})})(jQuery);/*!
Third Party Notices

jquery.flot.symbol.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement.


Flot plugin that adds some extra symbols for plotting points.

The symbols are accessed as strings through the standard symbol
choice:

series: {
points: {
symbol: "square" // or "diamond", "triangle", "cross"
}
}

*/
(function(n){function t(n,t){var r={square:function(n,t,i,r){var f=r*Math.sqrt(Math.PI)/2;n.rect(t-f,i-f,f+f,f+f)},diamond:function(n,t,i,r){var f=r*Math.sqrt(Math.PI/2);n.moveTo(t-f,i),n.lineTo(t,i-f),n.lineTo(t+f,i),n.lineTo(t,i+f),n.lineTo(t-f,i)},triangle:function(n,t,i,r,u){var f=r*Math.sqrt(2*Math.PI/Math.sin(Math.PI/3)),e=f*Math.sin(Math.PI/3);n.moveTo(t-f/2,i+e/2),n.lineTo(t+f/2,i+e/2),u||(n.lineTo(t,i-e/2),n.lineTo(t-f/2,i+e/2))},cross:function(n,t,i,r){var f=r*Math.sqrt(Math.PI)/2;n.moveTo(t-f,i-f),n.lineTo(t+f,i+f),n.moveTo(t-f,i+f),n.lineTo(t+f,i-f)}},u=t.points.symbol;r[u]&&(t.points.symbol=r[u])}function i(n){n.hooks.processDatapoints.push(t)}n.plot.plugins.push({init:i,name:"symbols",version:"1.0"})})(jQuery);/*!
Third Party Notices

jquery.flot.threshold.js

Microsoft grants you the right to use these script files for the sole 
purpose of interacting through your browser with the Microsoft web site 
hosting the files, subject to the web site�s terms of use. The software 
may include third party code that Microsoft, not the third party, 
licenses to you under this agreement. Notices, if any, for the third 
party code are included for your information only. Microsoft reserves 
all other rights to the files not expressly granted by Microsoft, 
whether by implication, estoppel or otherwise. The notices and licenses 
below are for informational purposes only.

Copyright (c) 2007-2009 IOLA and Ole Laursen

Provided for Informational Purposes Only
MIT License 

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

The software is licensed, not sold. Microsoft reserves all 
rights not expressly granted by this agreement.


Flot plugin for thresholding data. Controlled through the option
"threshold" in either the global series options

series: {
threshold: {
below: number
color: colorspec
}
}

or in a specific series

$.plot($("#placeholder"), [{ data: [ ... ], threshold: { ... }}])

The data points below "below" are drawn with the specified color. This
makes it easy to mark points below 0, e.g. for budget data.

Internally, the plugin works by splitting the data into two series,
above and below the threshold. The extra series below the threshold
will have its label cleared and the special "originSeries" attribute
set to the original series. You may need to check for this in hover
events.
*/
(function(n){function i(t){function i(t,i,r){var o,u,h,c,f,l,e,v;if(i.threshold){o=r.pointsize,e=n.extend({},i),e.datapoints={points:[],pointsize:o},e.label=null,e.color=i.threshold.color,e.threshold=null,e.originSeries=i,e.data=[];var a=i.threshold.below,s=r.points,y=i.lines.show;for(threspoints=[],newpoints=[],u=0;u<s.length;u+=o){if(h=s[u],c=s[u+1],l=f,f=c<a?threspoints:newpoints,y&&l!=f&&h!=null&&u>0&&s[u-o]!=null){for(v=(h-s[u-o])/(c-s[u-o+1])*(a-c)+h,l.push(v),l.push(a),m=2;m<o;++m)l.push(s[u+m]);for(f.push(null),f.push(null),m=2;m<o;++m)f.push(s[u+m]);for(f.push(v),f.push(a),m=2;m<o;++m)f.push(s[u+m])}f.push(h),f.push(c)}r.points=newpoints,e.datapoints.points=threspoints,e.datapoints.points.length>0&&t.getData().push(e)}}t.hooks.processDatapoints.push(i)}var t={series:{threshold:null}};n.plot.plugins.push({init:i,options:t,name:"threshold",version:"1.0"})})(jQuery);