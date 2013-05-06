// https://www.netcu.de/jquery-touchwipe-iphone-ipad-library
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);

// stats.js r9 - https://github.com/mrdoob/stats.js
var Stats=function(){var h,a,r=0,s=0,i=Date.now(),u=i,t=i,l=0,n=1E3,o=0,e,j,f,b=[[16,16,48],[0,255,255]],m=0,p=1E3,q=0,d,k,g,c=[[16,48,16],[0,255,0]];h=document.createElement("div");h.style.cursor="pointer";h.style.width="80px";h.style.opacity="0.9";h.style.zIndex="10001";h.addEventListener("mousedown",function(a){a.preventDefault();r=(r+1)%2;0==r?(e.style.display="block",d.style.display="none"):(e.style.display="none",d.style.display="block")},!1);e=document.createElement("div");e.style.textAlign=
"left";e.style.lineHeight="1.2em";e.style.backgroundColor="rgb("+Math.floor(b[0][0]/2)+","+Math.floor(b[0][1]/2)+","+Math.floor(b[0][2]/2)+")";e.style.padding="0 0 3px 3px";h.appendChild(e);j=document.createElement("div");j.style.fontFamily="Helvetica, Arial, sans-serif";j.style.fontSize="9px";j.style.color="rgb("+b[1][0]+","+b[1][1]+","+b[1][2]+")";j.style.fontWeight="bold";j.innerHTML="FPS";e.appendChild(j);f=document.createElement("div");f.style.position="relative";f.style.width="74px";f.style.height=
"30px";f.style.backgroundColor="rgb("+b[1][0]+","+b[1][1]+","+b[1][2]+")";for(e.appendChild(f);74>f.children.length;)a=document.createElement("span"),a.style.width="1px",a.style.height="30px",a.style.cssFloat="left",a.style.backgroundColor="rgb("+b[0][0]+","+b[0][1]+","+b[0][2]+")",f.appendChild(a);d=document.createElement("div");d.style.textAlign="left";d.style.lineHeight="1.2em";d.style.backgroundColor="rgb("+Math.floor(c[0][0]/2)+","+Math.floor(c[0][1]/2)+","+Math.floor(c[0][2]/2)+")";d.style.padding=
"0 0 3px 3px";d.style.display="none";h.appendChild(d);k=document.createElement("div");k.style.fontFamily="Helvetica, Arial, sans-serif";k.style.fontSize="9px";k.style.color="rgb("+c[1][0]+","+c[1][1]+","+c[1][2]+")";k.style.fontWeight="bold";k.innerHTML="MS";d.appendChild(k);g=document.createElement("div");g.style.position="relative";g.style.width="74px";g.style.height="30px";g.style.backgroundColor="rgb("+c[1][0]+","+c[1][1]+","+c[1][2]+")";for(d.appendChild(g);74>g.children.length;)a=document.createElement("span"),
a.style.width="1px",a.style.height=30*Math.random()+"px",a.style.cssFloat="left",a.style.backgroundColor="rgb("+c[0][0]+","+c[0][1]+","+c[0][2]+")",g.appendChild(a);return{getDomElement:function(){return h},getFps:function(){return l},getFpsMin:function(){return n},getFpsMax:function(){return o},getMs:function(){return m},getMsMin:function(){return p},getMsMax:function(){return q},update:function(){i=Date.now();m=i-u;p=Math.min(p,m);q=Math.max(q,m);k.textContent=m+" MS ("+p+"-"+q+")";var a=Math.min(30,
30-30*(m/200));g.appendChild(g.firstChild).style.height=a+"px";u=i;s++;if(i>t+1E3)l=Math.round(1E3*s/(i-t)),n=Math.min(n,l),o=Math.max(o,l),j.textContent=l+" FPS ("+n+"-"+o+")",a=Math.min(30,30-30*(l/100)),f.appendChild(f.firstChild).style.height=a+"px",t=i,s=0}}};

/* Touch, background size, yepnope, media queries */
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: https://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-touch-shiv-mq-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){i.cssText=a}function B(a,b){return A(l.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a)if(i[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),k.appendChild(j);return h=["&#173;","<style>",a,"</style>"].join(""),k.id=g,m.innerHTML+=h,m.appendChild(k),l||(m.style.background="",f.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},w=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return v("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e});var H=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",l.join("touch-enabled),("),g,")","{#touch{top:9px;position:absolute}}"].join("")],["fontface","touch"]);p.touch=function(){return e.touch},p.backgroundsize=function(){return G("backgroundSize")},p.borderimage=function(){return G("borderImage")},p.fontface=function(){return e.fontface};for(var I in p)z(p,I)&&(u=I.toLowerCase(),e[u]=p[I](),s.push((e[u]?"":"no-")+u));return A(""),h=j=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.mq=w,e.hasEvent=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=v,e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

// https://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})

var touchSupport  = Modernizr.touch;
var ielt8         = ($.browser.msie && $.browser.version < 8);
var ielte8         = ($.browser.msie && $.browser.version <= 8);
var iee8         = ($.browser.msie && $.browser.version == 8);
var bgSizeSupport = Modernizr.backgroundsize;
var DEBUG = false;
var handheld = false;

if( $.browser.safari ) {
    $.browser.safari = ( $.browser.safari && /chrome/.test(navigator.userAgent.toLowerCase())) ? false : true;
    $.browser.safari = ( $.browser.safari && !touchSupport ) ? true : false;
}


forceUpdateSafari = true;

if(touchSupport) {
    $('body').addClass("touchSupport");
}else{
    $('body').addClass("noTouchSupport");
    $('body').addClass("loading");
}

$('body').addClass("no-fullscreen");


if($.browser.safari) {
    $('body').addClass("safari");
    var safari = true;
}else{
    $('body').addClass("notSafari");
    var safari = false;
}

if( $.browser.mozilla ) {
    var firefox = true;
    $('body').addClass("firefox")
    $('body').addClass("no-fullscreen");
}else{
    $('body').addClass("notFirefox")
}

if(iee8) {
    $('body').addClass("iee8");
}else{
    $('body').addClass("not-iee8");
}

if($.browser.msie) {
    $('body').addClass("is-ie");
}else{
    $('body').addClass("not-ie");
}

if(bgSizeSupport) {
    $('body').addClass("bgSizeSupport");
}

if(ielte8) {
    $('body').addClass("ielte8");
}else{
    $('body').addClass("not-ielte8");
}

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $('body').addClass("ios");
}

if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || navigator.userAgent.toLowerCase().indexOf("android") > -1) {
    handheld = true;
}

var android = false;


if(navigator.userAgent.toLowerCase().indexOf("android") > -1) {
    $('body').addClass("android");
     android = true;
}

if( $.browser.msie && $.browser.version < 9) {
    $('body').addClass("ie-lt9");
}else{
    $('body').addClass("not-ie-8");
}

if( $.browser.msie && $.browser.version < 8) {
    $('body').addClass("ielt8");
    ie7 = true;
}else{
    ie7 = false;
    $('body').addClass("not-ie-7");
}

// Global variables regarding scroll and resize
var prevPos                 = 0;
var DIRECTION_DOWN          = 1;
var DIRECTION_UP            = 2;
var DIRECTIONS              = {1: "DOWN", 2: "UP"}
var $container              = $('#container') 
var original_width          = $container.width();
var original_height         = $container.height();
var oldCurrentFramePercent  = 0.01;
var oldCurrentFramePhonePercent = 0.01;
var window_height;
var window_width;
var container_width;
var container_height;
var animloopPrev            = 0; 
var forceUpdate             = false;
var header_height           = $('#header').height();
var $updateFrameWindow;
var SITE_WAS_DISABLED_WIDTH = false;
var SITE_WAS_DISABLED_HEIGHT = false;


var EVENT_STARTED_SCROLLING  = false;
var EVENT_SCROLLEDTO_INTRO   = false;
var EVENT_SCROLLEDTO_STUFF   = false;
var EVENT_SCROLLEDTO_FRIENDS = false;
var EVENT_SCROLLEDTO_FAMILY  = false;
var EVENT_SCROLLEDTO_SIGNUP  = false;
var EVENT_SCROLLEDTO_ABOUT   = false;


var previousOrientation = -1;

if(touchSupport) {
    $updateFrameWindow = $('#fullheight');
}else{
    $updateFrameWindow = $(window)
}

var bgsize                  = {width: 2700, height: 1800};
var bgsizeMargin            = 350;

var currentFramePercent      = 0;
var currentFramePhonePercent = 0;
 
/*
 * All animations are contained within an animation grid (940x700 with fixed position)
 * All positions (left/top) are calculated from the animation grid. 
 */
var ANIMATION_FRAMES        = 1;
var ANIMATION_POSITION      = 2;
var ANIMATION_OPACITY       = 3;
var ANIMATION_ROTATE        = 4;
var ANIMATION_MOVEBG        = 5;
var ANIMATION_BLANK         = 6;

var animations_types = {1: 'ANIMATION_FRAMES', 2: 'ANIMATION_POSITION', 3: 'ANIMATION_OPACITY', 4: 'ANIMATION_ROTATE', 5: 'ANIMATION_MOVEBG', 6: 'ANIMATION_BLANK'}

var animationSizeFolder = 'hi/';

// iPad
if( Modernizr.mq('only all and (min-device-width: 768px) and (max-device-width: 1024px)') ) {
    animationSizeFolder = 'hi/';
}

// iPhone
if( Modernizr.mq('only all and (max-device-width: 480px)') ) {
    animationSizeFolder = 'me/';
}

if( Modernizr.mq('only all and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 1.5)') ) {
    animationSizeFolder = 'me/';
}

// iPhone retina
if( Modernizr.mq('only all and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2.0)') ) {
    animationSizeFolder = 'hi/';
}

if( $.browser.msie && $.browser.version < 8) {
   // animationSizeFolder = 'me/';
}

if ( $(window).height()/(700+$('#logo').height()) > 1 && $(window).width() < 940) {
    
}

var IPHONE_CENTER = 200;
var IPHONE_RIGHT  = 520;
var IPHONE_LEFT   = -95;

var ROUND_FRAME_MARGIN_TOP = -253;

function setAnimationPositions() {

    IPHONE_CENTER = ($('#container').width()-$('#phone').width())/2;
    IPHONE_RIGHT  = $('#container').width()-(($('#phone').width()/2)+(260*currentFramePhonePercent/2))+(20*currentFramePhonePercent);
    IPHONE_LEFT   = (($('#phone').width()-(290*currentFramePhonePercent))/2)*-1+30;
    IPHONE_RIGHT_FIRST = 'IPHONE_RIGHT';
    IPHONE_RIGHT_SECOND = 'IPHONE_RIGHT';
    
    $('.round img.frame').css('margin-top', ROUND_FRAME_MARGIN_TOP);
    $('#magnifier').css('left',  $('#magnifier').data('left'));
    $('#magnifier2').css('left',  $('#magnifier2').data('left'));
    
    if ( $(window).width() <= 1024 ) {
        IPHONE_RIGHT  = $('#container').width()-(($('#phone').width()/2)+(260*currentFramePhonePercent/2))-(80*currentFramePhonePercent);
        IPHONE_LEFT = IPHONE_LEFT+50;
        
        $('#magnifier').css('left', -(IPHONE_LEFT/2));
        $('#magnifier2').css('left', IPHONE_RIGHT-50);
        
        $('.round img.frame').each(function() {
            $(this).css('margin-top', -333); // -343px
        });
        
    }
    
    if ( $(window).width() < 768 && $(window).width() > 700 && touchSupport ) {
         IPHONE_RIGHT  = $('#container').width()-(($('#phone').width()/2)+(260*currentFramePhonePercent/2))-(-10*currentFramePhonePercent);
         IPHONE_LEFT = IPHONE_LEFT-50;
         $('#magnifier').css('left', -(IPHONE_LEFT/2)-80);
         $('#magnifier2').css('left', IPHONE_RIGHT-50);
    }
    
    if ( $(window).width() <= 700 && touchSupport ) {
         IPHONE_RIGHT  = 300;
         IPHONE_LEFT = -180;
         IPHONE_CENTER = IPHONE_CENTER+30
         $('#magnifier').css('left', -20);
         $('#magnifier').css('margin-top', -25);

         $('#magnifier2').css('left', IPHONE_RIGHT-200);
         $('#magnifier2').css('margin-top', -25);

    }

}

// FÃ¶rsta: 375px
// Sista: 297px

var firstRemoved = false;

var options =    {  
                    grid: '#container',
                    animations: [/*
                                {
                                    name: 'Rotate',
                                    element: '#phone',
                                    countFromElement: '#intro',
                                    startAtPercent: 1.01,  // to make sure resetDone is triggered, never start at the absolute top
                                    endAtPercent: 1.3,
                                    rotateTo: 90, 
                                    start: {rotateTo: 0},
                                    type: ANIMATION_ROTATE,
                                    afterDone: false,   // After done, change image etc. 
                                    resetDone: false,   // How to reset the animation when you scroll back
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },*/
                                
                                {
                                    name: 'Move first shape down continuing',
                                    element: '#movie .shape',
                                    countFromElement: '#movie',
                                    startAtPercent: 0.0,
                                    endAtPercent: 1.20,
                                    top: 65,
                                    start: {top: 45},
                                    type: ANIMATION_POSITION,
                                    disabled: (touchSupport),
                                    data: {}            // This contains meta-data such as if the afterDone has been fired,
                                    
                                },
                                
                                {
                                    name: 'Fade out stuff shape',
                                    element: '#stuff .shape',
                                    countFromElement: '#stuff',
                                    startAtPercent: 1.0,
                                    endAtPercent: 1.20,
                                    opacity: 0,
                                    disabled: ielte8,
                                    start: {opacity: 1},
                                    type: ANIMATION_OPACITY,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                {
                                    name: 'fade out the first shape',
                                    element: '#movie .shape',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.01,
                                    endAtPercent: 0.2,
                                    opacity: 0,
                                    start: {  opacity: 1 },
                                    type: ANIMATION_OPACITY,
                                    disabled: ielte8,
                                    after: function changeMenu() { 
                                        helper.setActiveMenu('.stuff'); 
                                        
                                    },
                                    before: function changeMenu() { helper.setActiveMenu('.intro'); },
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                
                                  {
                                        name: 'Fade out scroll down',
                                        element: '#scrolldown',
                                        countFromElement: '#intro',
                                        startAtPercent: 0.01,
                                        endAtPercent: 0.2,
                                        opacity: 0,
                                        start: { opacity: 1},
                                        type: ANIMATION_OPACITY,
                                        data: {},            // This contains meta-data such as if the afterDone has been fired
                                        after: function() {

                                        }
                                    },
                                
                                
                                
                                 {
                                        name: 'fade out the first shape ie8 style',
                                        element: '#movie .shape',
                                        countFromElement: '#intro',
                                        startAtPercent: 0.01,
                                        endAtPercent: 0.4,
                                        
                                        top: -400,
                                        start: {  top: 35 },
                                        type: ANIMATION_POSITION,
                                        disabled: !ielte8,
                                        after: function changeMenu() { 
                                            helper.setActiveMenu('.stuff'); 
                                            
                                            if(!EVENT_SCROLLEDTO_STUFF) {
                                                try {  analytics.track('Scroll','Scrolled to stuff');  }catch(e) {}
                                                EVENT_SCROLLEDTO_STUFF = true;
                                            }
                                        },
                                        before: function changeMenu() { helper.setActiveMenu('.intro'); },
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                
                                
                                {
                                    name: 'Move out footer',
                                    element: '#footer',
                                    countFromElement: '#movie',
                                    startAtPercent: 1.13,
                                    endAtPercent: 1.33,
                                    bottom: -75,
                                    start: { bottom: 0},
                                    type: ANIMATION_POSITION,
                                    translateCoordinates: false,
                                    data: {},            // This contains meta-data such as if the afterDone has been fired
                                    after: function() {
                                        $('#footer').css('opacity', 1);
                                        
                                        if(!EVENT_STARTED_SCROLLING) {
                                            try {  analytics.track('Scroll','Started scrolling');  }catch(e) {}
                                            EVENT_STARTED_SCROLLING = true;
                                        }
                                        
                                        
                                        if ( ie7 && !firstRemoved) {
                                            firstRemoved = true;
                                            $('#phone img:nth(0)').remove();
                                        }
                                    }
                                },
                                
                                
                                 {
                                        name: 'show the phone for ie7 and safari',
                                        element: '#container',
                                        countFromElement: '#intro',
                                        startAtPercent: 0.25,
                                        endAtPercent: 0.26,
                                        disabled: (!ielt8 && !safari),
                                        type: ANIMATION_BLANK,
                                        data: {},
                                        after: function() {
                                            $('#container').show();
                                            $('#phone, .safari #phone').show();
                                        },
                                        before: function() {
                                            $('#container').hide();
                                            $('#phone, .safari #phone').hide();
                                        }
                                    },
                                
                                {
                                    name: 'move in the phone',
                                    element: '#phone',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.2,
                                    endAtPercent: 0.6,
                                    top: 95,
                                    start: { top: -200 },
                                    type: ANIMATION_POSITION,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                

                                 {
                                        name: 'Flip up phone to laying',
                                        element: '#phone',
                                        countFromElement: '#intro',
                                        startAtPercent: (ielt8 ? 0.10 : 0.4),
                                        endAtPercent: 0.7,
                                        startFrame: 1,
                                        endFrame: 46,
                                        type: ANIMATION_FRAMES,
                                        after: function() {
                                            if(!EVENT_SCROLLEDTO_INTRO) {
                                                try {  analytics.track('Scroll','Scrolled to intro');  }catch(e) {}
                                                EVENT_SCROLLEDTO_INTRO = true;
                                            }  
                                        },
                                        folder: '/oldsite/elements/phone/',
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    {
                                        name: 'Move intro text in first',
                                        element: '#introh2',
                                        countFromElement: '#intro',
                                        startAtPercent: 0.01,
                                        endAtPercent: 0.29,
                                        top: 600,
                                        start: { top: (ielt8 ? 900: 700) },
                                        type: ANIMATION_POSITION,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                   }, 
                                {
                                    name: 'Fade in intro text',
                                    element: '#introh2',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.01,
                                    endAtPercent: 0.6,
                                    opacity: 1,
                                    start: {opacity: 0},
                                    type: ANIMATION_OPACITY,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                {
                                    name: 'Animation dumy for touchSupport to set z-index of container',
                                    element: '#introh2',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.6,
                                    endAtPercent: 0.61,
                                    disabled: (!ie7 && !safari),
                                    data: {},            // This contains meta-data such as if the afterDone has been fired
                                    after: function() {
                                      if(touchSupport) $('#container').css('opacity', 1);                                          
                                      if(touchSupport) $('#container').css('z-index', 500);  
                                    },
                                    before: function() {
                                        if(touchSupport) $('#container').css('opacity', 0);                                          
                                        if(touchSupport) $('#container').css('z-index', 0);                                          
                                    }
                                },
                                {
                                    name: 'Animation dumy for touchSupport to set z-index of container',
                                    element: '#introh2',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.2,
                                    endAtPercent: 0.21,
                                    disabled: (!touchSupport),
                                    data: {},            // This contains meta-data such as if the afterDone has been fired
                                    after: function() {
                                      if(touchSupport) $('#container').css('z-index', 500);  
                                    },
                                    before: function() {
                                        if(touchSupport) $('#container').css('z-index', 0);                                          
                                    }
                                },
                                {
                                    name: 'Animation dumy for touchSupport to set z-index of container',
                                    element: '#container',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.2,
                                    endAtPercent: 0.4,
                                    disabled: (!touchSupport),
                                    data: {},            // This contains meta-data such as if the afterDone has been fired
                                    start: {opacity: 0},
                                    opacity: 1,
                                    type: ANIMATION_OPACITY
                                    
                                },
                                {
                                    name: 'Move intro text in',
                                    element: '#introh2',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.30,
                                    endAtPercent: 0.6,
                                    top: 125,
                                    start: { top: 600 },
                                    type: ANIMATION_POSITION,
                                    after: function() {
                                      if(videoplayer) {
                                          videoplayer.pause();
                                          if(safari) {
                                            $('#moviecontainer').hide(); 
                                            $('#movie .shape').fadeIn();
                                           // $('#playbutton').show();
                                            $('#moviecontainer-wrapper').hide(); 
                                          }
                                      }  
                                    },
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                
                                  {
                                        name: 'Move intro bg continuing',
                                        element: '#intro',
                                        countFromElement: '#intro',
                                        moveElement: '#intro',
                                        startAtPercent: 0.01,
                                        endAtPercent: 2.01,
                                        y: -250,
                                        start: {y: -200},
                                        disabled: (touchSupport||safari),
                                        type: ANIMATION_MOVEBG,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                
                                    {
                                            name: 'Move in buttons',
                                            element: '#buttons',
                                            countFromElement: '#intro',
                                            startAtPercent: 0.70,
                                            endAtPercent: 0.8,
                                            right: 0,
                                            start: {right: -150},
                                            translateCoordinates: false,
                                            type: ANIMATION_POSITION,
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                        },
                                
                                  {
                                        name: 'Move constantely intro text',
                                        element: '#introh2',
                                        countFromElement: '#intro',
                                        startAtPercent: 0.70,
                                        endAtPercent: 1.0,
                                        top: 150,
                                        start: {top: 125},
                                        type: ANIMATION_POSITION,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    
                                    
                                {
                                    name: 'Opacity fade in icon',
                                    element: '#icon',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.70,
                                    endAtPercent: 0.8,
                                    opacity: 1,
                                    start: { opacity: 0 },
                                    type: ANIMATION_OPACITY,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                                                
                              
                                
                                {
                                    name: 'Fade out intro text',
                                    element: '#introh2',
                                    countFromElement: '#intro',
                                    startAtPercent: 1.00,
                                    endAtPercent: 1.2,
                                    opacity: 0,
                                    start: {opacity: 1},
                                    type: ANIMATION_OPACITY,
                                    after: function() {
                                      $('#introh2').hide();  
                                    },
                                    before: function() {
                                      $('#introh2').show();  
                                    },
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                {
                                    name: 'Opacity fade out icon',
                                    element: '#icon',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.90,
                                    endAtPercent: 1.0,
                                    opacity: 0,
                                    start: { opacity: 1 },
                                    type: ANIMATION_OPACITY,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                {
                                    name: 'Move intro text out',
                                    element: '#introh2',
                                    countFromElement: '#intro',
                                    startAtPercent: 1.00,
                                    endAtPercent: 1.5,
                                    top: -200,
                                    disabled: safari,
                                    start: { top: 150 },
                                    type: ANIMATION_POSITION,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                  {
                                        name: 'Fade intro text out safari',
                                        element: '#introh2',
                                        countFromElement: '#intro',
                                        startAtPercent: 1.00,
                                        endAtPercent: 1.1,
                                        opacity: 0,
                                        disabled: !safari,
                                        start: { opacity: 1 },
                                        type: ANIMATION_POSITION,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                              
                                
                                {
                                    name: 'Wallet water down into glas',
                                    element: '#phone',
                                    countFromElement: '#intro',
                                    startAtPercent: 0.85,
                                    endAtPercent: 1.05,
                                    startFrame: 47,
                                    endFrame: 64,
                                    type: ANIMATION_FRAMES,
                                    folder: '/oldsite/elements/phone/',
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                   {
                                        name: 'Fade in shape for safari',
                                        element: '#stuff .shape',
                                        countFromElement: '#stuff',
                                        startAtPercent: 0.30,
                                        endAtPercent: 0.50,
                                        opacity: 1,
                                        disabled: (!safari),
                                        start: {opacity: 0},
                                        type: ANIMATION_OPACITY,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                               
                                  {
                                    name: 'Flip up',
                                    element: '#phone',
                                    countFromElement: '#stuff',
                                    startAtPercent: 0.10,
                                    endAtPercent: 0.50,
                                    startFrame: 64,
                                    endFrame: touchSupport ? 109 : 110,
                                    type: ANIMATION_FRAMES,
                                    folder: '/oldsite/elements/phone/',
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                               {
                                        name: 'Flip up move phone',
                                        element: '#phone',
                                        countFromElement: '#stuff',
                                        startAtPercent: 0.10,
                                        endAtPercent: 0.5,
                                        left: 'IPHONE_RIGHT',
                                        start: {left: 'IPHONE_CENTER'},
                                        type: ANIMATION_POSITION,
                                        after: function() {
                                            if(!EVENT_SCROLLEDTO_STUFF) {
                                                try {  analytics.track('Scroll','Scrolled to stuff');  }catch(e) {}
                                                EVENT_SCROLLEDTO_STUFF = true;
                                            }  
                                        },
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                        
                                },
                                {
                                            name: 'Flip up move phone up',
                                            element: '#phone',
                                            countFromElement: '#stuff',
                                            startAtPercent: 0.25,
                                            endAtPercent: 0.5,
                                            top: 75,
                                            start: {top: 95},
                                            type: ANIMATION_POSITION,
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },    
                                        
                                {
                                    name: 'Move stuff bg continuing',
                                    element: '#phone',
                                    countFromElement: '#stuff',
                                    moveElement: '#stuff',
                                    startAtPercent: 0.01,
                                    endAtPercent: 2.01,
                                    y: -300,
                                    start: {y: 0},
                                    disabled: (touchSupport||safari),
                                    type: ANIMATION_MOVEBG,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                {
                                    name: 'Move stuff shape down continuing',
                                    element: '#stuff .shape',
                                    countFromElement: '#stuff',
                                    startAtPercent: 0.3,
                                    endAtPercent: 1.20,
                                    top: 65,
                                    start: {top: 45},
                                    type: ANIMATION_POSITION,
                                    disabled: touchSupport,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                {
                                    name: 'Fade out stuff shape',
                                    element: '#stuff .shape',
                                    countFromElement: '#stuff',
                                    startAtPercent: 1.0,
                                    endAtPercent: 1.20,
                                    opacity: 0,
                                    disabled: ielte8,
                                    start: {opacity: 1},
                                    type: ANIMATION_OPACITY,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                 {
                                        name: 'fade out stuff shape ie8 style',
                                        element: '#stuff .shape',
                                        countFromElement: '#stuff',
                                        startAtPercent: 1.0,
                                        endAtPercent: 1.4,
                                        top: -400,
                                        start: {  top: 35 },
                                        type: ANIMATION_POSITION,
                                        disabled: !ielte8,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                
                                {
                                    name: 'Move phone up continuing stuff',
                                    element: '#phone',
                                    countFromElement: '#stuff',
                                    startAtPercent: 0.3,
                                    endAtPercent: 1.20,
                                    top: 80,
                                    start: {top: 95},
                                    disabled: safari,
                                    type: ANIMATION_POSITION,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                 {
                                    name: 'Flip to galaxy',
                                    element: '#phone',
                                    countFromElement: '#stuff',
                                    startAtPercent: 1.00,
                                    endAtPercent: 1.35,
                                    startFrame: 109,
                                    endFrame: 173,
                                    type: ANIMATION_FRAMES,
                                    folder: '/oldsite/elements/phone/',
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                {
                                    name: 'Flip to galaxy',
                                    element: '#phone',
                                    countFromElement: '#stuff',
                                    startAtPercent: 1.4,
                                    endAtPercent: 1.45,
                                    startFrame: 173,
                                    endFrame: 176, // this was 175 before
                                    type: ANIMATION_FRAMES,
                                    folder: '/oldsite/elements/phone/',
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                {
                                    name: 'Flip up move phone',
                                    element: '#phone',
                                    countFromElement: '#stuff',
                                    startAtPercent: 1.00,
                                    endAtPercent: 1.35,
                                    left: 'IPHONE_LEFT',
                                    start: {left: 'IPHONE_RIGHT'},
                                    type: ANIMATION_POSITION,
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                  
                                 {
                                        name: 'Move friend bg continuing',
                                        countFromElement: '#friend',
                                        moveElement: '#friend',
                                        startAtPercent: 0.01,
                                        endAtPercent: 2.01,
                                        y: -300,
                                        start: {y: 0},
                                        type: ANIMATION_MOVEBG,
                                        disabled: (touchSupport||safari),
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    {
                                            name: 'Fade in shape for safari',
                                            element: '#friend .shape',
                                            countFromElement: '#friend',
                                            startAtPercent: 0.10,
                                            endAtPercent: 0.50,
                                            opacity: 1,
                                            disabled: !safari,
                                            start: {opacity: 0},
                                            type: ANIMATION_OPACITY,
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                        },
                                  {
                                        name: 'Move friend shape down continuing',
                                        element: '#friend .shape',
                                        countFromElement: '#friend',
                                        startAtPercent: 0.2,
                                        endAtPercent: 1.20,
                                        top: 65,
                                        start: {top: 45},
                                        type: ANIMATION_POSITION,
                                        disabled: touchSupport,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                     {
                                        name: 'Fade out friend shape',
                                        element: '#friend .shape',
                                        countFromElement: '#friend',
                                        startAtPercent: 1.0,
                                        endAtPercent: 1.20,
                                        opacity: 0,
                                        start: {opacity: 1},
                                        disabled: ielte8,
                                        type: ANIMATION_OPACITY,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    {
                                            name: 'Fade in shape for safari',
                                            element: '#friend .shape',
                                            countFromElement: '#friend',
                                            startAtPercent: 0.10,
                                            endAtPercent: 0.50,
                                            opacity: 1,
                                            disabled: !safari,
                                            start: {opacity: 0},
                                            type: ANIMATION_OPACITY,
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                        },
                                     {
                                            name: 'fade out friend shape ie8 style',
                                            element: '#friend .shape',
                                            countFromElement: '#friend',
                                            startAtPercent: 1.0,
                                            endAtPercent: 1.4,
                                            top: -400,
                                            start: {  top: 35 },
                                            type: ANIMATION_POSITION,
                                            disabled: !ielte8,
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                        },
                                   
                                    {
                                        name: 'Fade In Maginifier',
                                        element: '#magnifier',
                                        countFromElement: '#friend',
                                        startAtPercent: 0.35,  // to make sure resetDone is triggered, never start at the absolute top
                                        endAtPercent: 0.5,
                                        opacity: 1,
                                        start: {opacity: 0},
                                        type: ANIMATION_OPACITY,
                                        after: function() {
                                            if(!EVENT_SCROLLEDTO_FRIENDS) {
                                                try {  analytics.track('Scroll','Scrolled to friends');  }catch(e) {}
                                                EVENT_SCROLLEDTO_FRIENDS = true;
                                            }  
                                        },
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    
                                    {
                                       name: 'Animate text in mag',
                                       element: '#magnifier .round ',
                                       countFromElement: '#friend',
                                       startAtPercent: 0.4,
                                       endAtPercent: 0.8,
                                       startFrame: 175,
                                       endFrame: 190,
                                       type: ANIMATION_FRAMES,
                                       //disabled: ielte8,
                                       after: function() {
                                           //if(touchSupport) {
                                               animator.showFrame($('#phone'), 190);
                                           //}
                                       },
                                       folder: !ielte8? '/oldsite/elements/phone-magnified/':'/oldsite/elements/phone-magnified/ie/',
                                       data: {}            // This contains meta-data such as if the afterDone has been fired
                                   },
                                   {
                                       name: 'Fade out magnifier',
                                       element: '#magnifier',
                                       countFromElement: '#friend',
                                       startAtPercent: 0.9,
                                       endAtPercent: 0.95,
                                       opacity: 0,
                                       start: {opacity: 1},
                                       type: ANIMATION_OPACITY,
                                       
                                       data: {}            // This contains meta-data such as if the afterDone has been fired
                                       
                                   },
                                        
                                     {
                                        name: 'Flip to iphone',
                                        element: '#phone',
                                        countFromElement: '#family',
                                        startAtPercent: 0.01,
                                        endAtPercent: 0.5,
                                        startFrame: 190,
                                        endFrame: 253,
                                        type: ANIMATION_FRAMES,
                                        folder: '/oldsite/elements/phone/',
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    {
                                            name: 'Fade in shape for safari',
                                            element: '#family .shape',
                                            countFromElement: '#family',
                                            startAtPercent: 0.10,
                                            endAtPercent: 0.50,
                                            opacity: 1,
                                            disabled: !safari,
                                            start: {opacity: 0},
                                            type: ANIMATION_OPACITY,
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                        },
                                     {
                                        name: 'Move when flip to iphone',
                                        element: '#phone',
                                        countFromElement: '#family',
                                        startAtPercent: 0.1,
                                        endAtPercent: 0.5,
                                        left: 'IPHONE_RIGHT', 
                                        top: 50,
                                        start: {left: 'IPHONE_LEFT',top: 80},
                                        type: ANIMATION_POSITION,
                                        folder: '/oldsite/elements/phone/',
                                        after: function() {
                                            if(!EVENT_SCROLLEDTO_FAMILY) {
                                                try {  analytics.track('Scroll','Scrolled to family');  }catch(e) {}
                                                EVENT_SCROLLEDTO_FAMILY = true;
                                            }  
                                        },
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    {
                                            name: 'Move family bg continuing',
                                            
                                            countFromElement: '#family',
                                            moveElement: '#family',
                                            startAtPercent: 0.01,
                                            endAtPercent: 2.01,
                                            y: -300,
                                            start: {y: 0},
                                            type: ANIMATION_MOVEBG,
                                            disabled: (touchSupport||safari),
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                        },

                                      {
                                            name: 'Move family shape down continuing',
                                            element: '#family .shape',
                                            countFromElement: '#family',
                                            startAtPercent: 0.2,
                                            endAtPercent: 1.20,
                                            top: 65,
                                            start: {top: 35},
                                            type: ANIMATION_POSITION,
                                            disabled: touchSupport,
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                        },
                                         {
                                                name: 'Fade out family shape',
                                                element: '#family .shape',
                                                countFromElement: '#family',
                                                startAtPercent: 1.0,
                                                endAtPercent: 1.20,
                                                opacity: 0,
                                                start: {opacity: 1},
                                                disabled: ielte8,
                                                type: ANIMATION_OPACITY,
                                                data: {}            // This contains meta-data such as if the afterDone has been fired
                                            },
                                              {
                                                        name: 'fade out family shape ie8 style',
                                                        element: '#family .shape',
                                                        countFromElement: '#family',
                                                        startAtPercent: 1.0,
                                                        endAtPercent: 1.4,
                                                        top: -400,
                                                        start: {  top: 35 },
                                                        type: ANIMATION_POSITION,
                                                        disabled: !ielte8,
                                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                                    },
                                         {
                                            name: 'Move iphone  down continuing',
                                            element: '#phone',
                                            countFromElement: '#family',
                                            startAtPercent: 0.6,
                                            endAtPercent: 1.20,
                                            top: 80,
                                            start: {top: 50},
                                            type: ANIMATION_POSITION,
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                        },
                                        
                                    {
                                        name: 'Fade In Maginifier',
                                        element: '#magnifier2',
                                        countFromElement: '#family',
                                        startAtPercent: 0.4,  // to make sure resetDone is triggered, never start at the absolute top
                                        endAtPercent: 0.6,
                                        opacity: 1,
                                        start: {opacity: 0},
                                        type: ANIMATION_OPACITY,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    
                                    {
                                        name: 'Move In Maginifier',
                                        element: '#magnifier2',
                                        countFromElement: '#family',
                                        startAtPercent: 0.4,  // to make sure resetDone is triggered, never start at the absolute top
                                        endAtPercent: 0.7,
                                        top: 150,
                                        start: {top: 400},
                                        type: ANIMATION_POSITION,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    
                                    
                                    {
                                        name: 'Move up Maginifier BG',
                                        element: '#magnifier2',
                                        moveElement: '#magnifier2 .round .largePhone',
                                        countFromElement: '#family',
                                        startAtPercent: 0.5,  // to make sure resetDone is triggered, never start at the absolute top
                                        endAtPercent: 0.7,
                                        y: -300,
                                        start: {y: -500},
                                        type: ANIMATION_MOVEBG,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    {
                                        name: 'Move up Maginifier BG',
                                        element: '#magnifier2',
                                        moveElement: '#magnifier2 .round .largePhone',
                                        countFromElement: '#family',
                                        startAtPercent: 0.7,  // to make sure resetDone is triggered, never start at the absolute top
                                        endAtPercent: 1.2,
                                        y: -340,
                                        start: {y: -300},
                                        type: ANIMATION_MOVEBG,
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                    },
                                    /*
                                    
                                    {
                                            name: 'Set footer fixed',
                                            element: '#footer',
                                            countFromElement: '#signupform',
                                            startAtPercent: 0.75,
                                            endAtPercent: 0.76,
                                            after: function() { 
                                                if(!touchSupport) {
                                                    $('.form').css({
                                                       position: 'fixed',
                                                       top: '50%', 
                                                       left: '50%',
                                                       'padding-top': $('#header').height(),
                                                    });
                                                }
                                                helper.setActiveMenu('.signup');
                                            },
                                            before: function() {
                                                if(!touchSupport) {
                                                    $('.form').css({
                                                       position: 'absolute',
                                                       'padding-top':0
                                                    });
                                                }
                                                
                                                helper.setActiveMenu('.stuff');
                                            },
                                            data: {}            // This contains meta-data such as if the afterDone has been fired
                                      },
                                      
                                     */
                                     
                                  
                                        {
                                                  name: 'Move out buttons',
                                                  element: '#buttons',
                                                  countFromElement: '#signupform',
                                                  startAtPercent: 0.20,
                                                  endAtPercent: 0.3,
                                                  right: -150,
                                                  start: {right: 0},
                                                  translateCoordinates: false,
                                                  type: ANIMATION_POSITION,
                                                  data: {}            // This contains meta-data such as if the afterDone has been fired
                                              },
                                     
                                     
                                              {
                                                      name: 'Change menu',
                                                      countFromElement: '#signupform',
                                                      startAtPercent: 1.30,
                                                      endAtPercent: 1.35,
                                                      after: function changeMenu() { 
                                                          helper.setActiveMenu('.about'); 
                                                          if(!EVENT_SCROLLEDTO_ABOUT) {
                                                              try {  analytics.track('Scroll','Scrolled to about');  }catch(e) {}
                                                              EVENT_SCROLLEDTO_ABOUT = true;
                                                          }
                                                      },
                                                      before: function changeMenu() { helper.setActiveMenu('.signup'); },
                                                      data: {}            // This contains meta-data such as if the afterDone has been fired
                                                },


                                    {
                                    name: 'Move entire animation layer',
                                    element: '#container',
                                    countFromElement: '#signupform',
                                    startAtPercent: 0.05,  // to make sure resetDone is triggered, never start at the absolute top
                                    endAtPercent: 0.9,
                                    top: -900,
                                    start: {top: (parseInt(($(window).height()-$('#container').height())/2) < 0 ? 0 : parseInt(($(window).height()-$('#container').height())/2)) },
                                    type: ANIMATION_POSITION,
                                    translateCoordinates: false,
                                    after: function changeMenu() { 
                                        helper.setActiveMenu('.signup'); 
                                        if(!EVENT_SCROLLEDTO_SIGNUP) {
                                            try {  analytics.track('Scroll','Scrolled to signup');  }catch(e) {}
                                            EVENT_SCROLLEDTO_SIGNUP = true;
                                        }
                                    },
                                    before: function changeMenu() { helper.setActiveMenu('.stuff'); },
                                    data: {}            // This contains meta-data such as if the afterDone has been fired
                                },
                                
                                {
                                        name: 'Move in footer',
                                        element: '#footer',
                                        countFromElement: '#signupform',
                                        startAtPercent: 1.00,
                                        endAtPercent: 1.05,
                                        bottom: 0,
                                        start: { bottom: -68},
                                        type: ANIMATION_POSITION,
                                        translateCoordinates: false,
                                        after: function changeMenu() { },
                                        before: function changeMenu() {  },
                                        data: {}            // This contains meta-data such as if the afterDone has been fired
                                  }
                                  
                                  
                                ]
                 };


 if ( $(window).width() < 540 && !touchSupport) {
      options.animations[options.animations.length-2]['start'].top = (($(window).height()-$('#container').height())/2)*-1;
     
 }
 
 

var animator  = new animatorHandler();
var signup    = new signupHandler();
var helper    = new helperHandler();
var about     = new aboutHandler();
var resizer   = new resizeHandler();
var analytics = new analyticsHandler();

resizer.init();
helper.init();
animator.init();
animator.preloadImages();
animator.updateFrame( 1 );

$(document).ready(function() {
    animator.startAnimations();    
})

function analyticsHandler() {
    this.track = function(category, action, opt_label) {
        if(DEBUG) console.log(arguments)
        try {
            if(opt_label == undefined) {
                _gaq.push(['_trackEvent', category, action]);
            }else{
                _gaq.push(['_trackEvent', category, opt_label]);
            }
        }catch(e) {

        }
    }
}

// Certain things can wait a bit
setTimeout(function() {
    if(DEBUG) console.log("Initing none-critical components")
    about.init();
    signup.init();
    
}, 1000);

if( handheld ) {
    var lastAndroidWidth = $(window).width();

    var androidTimer = setInterval(function() {
    
        if( lastAndroidWidth > $(window).width() ) {
            clearInterval(androidTimer)
            setTimeout(function() {
                location.reload(true);
            },1);

            return;
        }
    
        lastAndroidWidth = $(window).width();
    
    }, 250);
}

function resizeHandler() {
    
    var WAS_FULLSCREEN = false;
    var firstResize = true;
    
    
    this.resizeOnOrientation = function(event){
        
        
        if(window.orientation) {
            
            var forceReload = false;
            
            if( Modernizr.mq("only all and (orientation:portrait)") ) {
                forceReload = true;
            }
            
            if(window.orientation == previousOrientation && forceReload == false) {
                return;
            }
            
            if(forceReload == true)  {
                previousOrientation = 0;
            }else{
                previousOrientation = window.orientation;
            }
            
            if ( Modernizr.mq("only all and (orientation:landscape) and (max-device-width: 580px)") ) {

                if(window.orientation == 90 && forceReload == false) {
                    $('#flipit').css('background', 'url(/oldsite/images/flip-right.png)');
                    $('#fullheight, #container, #menu, #introh2, #menu-container, #header,#footer').css('display', 'none !important')
                }else if(window.orientation == -90 && forceReload == false) {
                    $('#flipit').css('background', 'url(/oldsite/images/flip-left.png)');                
                    $('#fullheight, #container, #menu, #introh2, #menu-container, #header,#footer').css('display', 'none !important')
                }else{          
                    location.reload(true)
                    forceReload = true;
                }
            }else{

                location.reload(true);
            }
            
        }
        
        //$(window).resize();
    }; // resizeOnOrentation
    
    this.oldPercent = 0;
    this.oldPhonePercent = 0;
    
    this.resizeFrame = function(percent, phonePercent) {
        
        if( percent == this.oldPercent && phonePercent == this.oldPhonePercent ) {
            if(DEBUG) console.log("Not running resizeframe again")
            return;
        }
        
        this.oldPercent = percent;
        this.oldPhonePercent = phonePercent;

        $container  = $('#container');    
        $container.css('height', Math.floor(original_height*percent) );
        $container.css('width',  Math.floor(original_width*percent)  ); 

        $('#header-container').css('width', Math.floor(original_width*percent) )

        containerLeft = ($(window).width()/2)-($container.width()/2);
        $container.css('left', containerLeft);
        
        if( !ielt8 ) {
            $container.show();
        }

        $('.page-grid').each(function changePageGridSize() {
            $(this).width(  Math.floor(original_width*percent) );
        });

        $('.resize').each(function loopForResize() {
           $this = $(this);

           w = Math.floor($this.data( 'width'  )*percent);
           h = Math.floor($this.data( 'height' )*percent);

           $this.css('width',  w);
           $this.css('height', h);

           if( $this.data('resizechildren') ) {   
               $this.find("img").each(function resizeImg() {
                    $this = $(this);
                    $this.css('width',  w);
                    $this.css('height', h);
               });
           }
        });
        
        $('#phone').css('height', Math.floor($('#phone').data( 'height' )*phonePercent));
        $('#phone').css('width',  Math.floor($('#phone').data( 'width' )*phonePercent));

        $('#phone .frame').css('height', Math.floor($('#phone').data( 'height' )*phonePercent))
        $('#phone .frame').css('width', Math.floor($('#phone').data( 'width' )*phonePercent))

        $('#icon').css('height', Math.floor($('#icon').data( 'height' )*phonePercent));
        $('#icon').css('width',  Math.floor($('#icon').data( 'width' )*phonePercent));

        $('#introh2').css('height', Math.floor($('#introh2').data( 'height' )*phonePercent));
        $('#introh2').css('width',  Math.floor($('#introh2').data( 'width' )*phonePercent));


        $('.resizeText').each(function loopForResize() {
           $this = $(this);

           fs = Math.floor($this.data( 'font-size'  )*percent);

           if ( $this.data('minimum-font-size') ) {
               
               if(touchSupport) {
                   if( !$this.data('minimum-touch-font-size') ) {
                       if ( fs < parseInt($this.data('minimum-font-size')) ) {
                             fs = parseInt($this.data('minimum-font-size'));
                       }
                   }else{
                       if ( fs < parseInt($this.data('minimum-touch-font-size')) ) {
                              fs = parseInt($this.data('minimum-touch-font-size'));
                       }
                   }
               }else{
                   if ( fs < parseInt($this.data('minimum-font-size')) ) {
                          fs = parseInt($this.data('minimum-font-size'));
                   }
               }
           }
           $this.css('font-size',  fs);               

        });

        $('.reposition').each(function repositionForResize() {
            $this = $(this);

           if ( $this.data('left') )
                animator.moveToRelativeLeft($this, $this.data('left'), true)

            if ( $this.data('top') )
                 animator.moveToRelativeTop($this, $this.data('top'), true)
                 
            if ( $this.data('margin-left') )
              animator.moveToRelativeMarginLeft($this, $this.data('margin-left'), true)
        });


        $('#container .magnifiers').each(function fixMagnifierOnResize() {

            $this = $(this)

            var w = Math.floor($this.data( 'width'  )*phonePercent);
            var h = Math.floor($this.data( 'height' )*phonePercent);

            $this.css('width',  w);
            $this.css('height', h);

            var $round = $this.find(".round");

            $round.css( 'width',            parseInt($round.data('width')*phonePercent)  );
            $round.css( 'height',           parseInt($round.data('height')*phonePercent) );
            $round.css( 'margin-left',      parseInt($round.data('margin-left'))*phonePercent  );
            $round.css( 'margin-top',       parseInt($round.data('margin-top'))*phonePercent   );
            $round.css( 'border-radius',    parseInt($round.data('border-radius'))*phonePercent   );
           
            var $magnified = $this.find(".magnified.original");
            
            var $glas = $this.find(".glas");
            $glas.css('width',  w);
            $glas.css('height', h);
            
            $round.find(".frame").each(function() {
                $(this).css({
                    width: 720*currentFramePhonePercent,
                    height: 720*currentFramePhonePercent
                });
    
                if($(this).data('margin-left') !== undefined) {
                    $(this).css('margin-left', $(this).data('margin-left')*currentFramePhonePercent);
                    $(this).css('margin-top', $(this).data('margin-top')*currentFramePhonePercent);
                }
             });

            if(bgSizeSupport) {
                $magnified.css('width',   Math.floor($this.data( 'width'  )*phonePercent));
                $magnified.css('height', Math.floor($this.data( 'height'  )*phonePercent));
                
               // $magnified.css('background-size', Math.floor($magnified.data( 'background-size-width')*phonePercent) + "px "+ Math.floor($magnified.data( 'background-size-width')*phonePercent) + "px" )
                
                
            }else{
                
                // IE < 9 shows a static image instead. 
                $this.find('.original').hide();
                var $replacement = $this.find('.replacement');

                $replacement.css('width',      parseInt($replacement.data('width')*phonePercent));
                $replacement.css('height',     parseInt($replacement.data('height')*phonePercent));

                // css3-container is the object created by PIE.HTC
                // we need to move it after we've resized it
                $('.replacement').parent().find('css3-container').css( 'left',      parseInt($round.data('margin-left'))*phonePercent  );
                $('.replacement').parent().find('css3-container').css( 'top',       parseInt($round.data('margin-top'))*phonePercent   );
            }
            
        });

        $('#footer img').each(function loopForResize() {
           $this = $(this);

           w = Math.floor($this.data( 'width'  )*percent);
           h = Math.floor($this.data( 'height' )*percent);

           if( handheld ) {
               w = "auto";
               h = 24;
           }

           $this.css('width',  w);
           $this.css('height', h);

           var footer = 3;

           if( percent < 0.70 ) {
               footer = 2;
           }

           if( percent < 0.3 ) {
               footer = 1;
           }

           $('#footer .bar').css('height', footer); 
           $('#footer').css('height', h+footer);
        });
        
        $('#footer .contain').css('padding-left', (window_width-$('#footer .contain').width())/2 + "px" );
        
        $('.cover-bg').each(function loopForResize() {
              
              var percent;
              var newWidth;
              var newHeight;
              var newX;
              var newY;
              
              if( window_width < (window_height+bgsizeMargin) ) {
                  percent    = (window_height+bgsizeMargin)/bgsize['height'];
                  newHeight  = window_height+bgsizeMargin;
                  newWidth   = bgsize['width']*percent;                  
                  
                  newX = (((Math.floor(newWidth)-window_width)/2)*-1) + "px ";
                  newY = " 0px";
                  
                  if(touchSupport) {
                    //$(this).css('background-size',     Math.floor(newWidth) + "px "+ Math.floor(newHeight) + "px");
                    //$(this).css('background-position', newX + newY);
                  }
                  
                  $(this).data('newX', newX);
                  $(this).data('newY', newY);
                  
                  $(this).find('.bgimage').css({
                     width: Math.floor(newWidth),
                     height:  Math.floor(newHeight),
                     left: newX,
                     top: newY
                  });

              }else{  
                percent    = window_width/bgsize['width'];
                newHeight  = (bgsize['height']+bgsizeMargin)*percent;
                newWidth   = window_width+(bgsizeMargin*percent);
                    
                if(touchSupport) {  
                    //$(this).css('background-size',     Math.floor(newWidth) + "px "+ Math.floor(newHeight) + "px");
                    //$(this).css('background-position', newX + newY);
                }
                
                newX = "0px ";
                newY = (((Math.floor(newHeight)-window_height)/2)*-1) + "px";
                
                
                $(this).data('newX', newX);
                $(this).data('newY', newY);
                
                $(this).find('.bgimage').css({
                   width: Math.floor(newWidth),
                   height:  Math.floor(newHeight),
                   left: newX,
                   top: newY
                });
                
                if(newHeight <  (window_height+bgsizeMargin)) {
                      percent    = (window_height+bgsizeMargin)/bgsize['height'];
                      newHeight  = window_height+bgsizeMargin;
                      newWidth   = bgsize['width']*percent;         
                      
                      newX = (((Math.floor(newWidth)-window_width)/2)*-1) + "px ";
                      newY = " 0px";
                      
                      if(touchSupport) {         
                        //$(this).css('background-size',     Math.floor(newWidth) + "px "+ Math.floor(newHeight) + "px");
                        //$(this).css('background-position', newX + newY);
                      }
                      
                      $(this).data('newX', newX);
                      $(this).data('newY', newY);
                      
                      $(this).find('.bgimage').css({
                         width: Math.floor(newWidth),
                         height:  Math.floor(newHeight),
                         left: newX,
                         top: newY
                      });
                }
              }
              
            
              
              if(!touchSupport) {
                  var closestBgWidth = Math.ceil(newWidth/10)*10;
                  
                    
                    newY = parseInt(newY);
                    newX = parseInt(newX);
                    
                    switch( $(this).prop("id") ) {
                        case 'movie':
                            /*
                            if (window_width > 2000) {
                                newY = -200;
                            }
                            */
                        break;
                        
                        case 'stuff':
                            
                            if (window_width > 2000) {
                                newX = 0;
                            }else if(window_width > 1400) {
                                newX = -150;
                            }else if(window_width > 1300) {
                                newX = -100;
                            }else if(window_width < 1000) {
                                newX = newX+50;
                            }else if(window_width < 1300) {
                                newX = newX;
                            }
                        break;
                        
                        case 'friend':
                         
                            if (window_width > 2000) {
                                newX = 0;
                            }else if(window_width > 1300) {
                                newX = -210;
                                closestBgWidth = closestBgWidth + 210;
                            }else if(window_width <= 800) {
                                newX = newX-150;
                                closestBgWidth = closestBgWidth + 150;
                            }else if(window_width <= 1024) {
                                newX = newX-120;
                                closestBgWidth = closestBgWidth + 120;
                            }else if(window_width < 1300) {
                                newX = newX-100
                                closestBgWidth = closestBgWidth + 100;
                            }
                            
                        break;
                        
                        case 'family':
                        
                        
                            
                            if (window_width > 2000) {
                                newX = 0;
                            }else if(window_width >= 1400) {
                                 newX = newX;
                            }else if(window_width >= 1300) {
                                 newX = newX-80;
                                 closestBgWidth = closestBgWidth + 80;
                            }else if(window_width <= 800) {
                                newX = newX+100;
                                closestBgWidth = closestBgWidth + 100;
                            }else if(window_width <= 1300) {
                                newX = newX;
                                closestBgWidth = closestBgWidth + 30;
                                
                            }

                        
                            
                        break;
                    }
                  
                    newY = newY + "px ";
                    newX = newX + "px ";
                  
                    if(closestBgWidth > 2700) closestBgWidth = 2700;
                      if(closestBgWidth < 100) closestBgWidth = 100;
                  
                   if($.browser.safari) {
                       $(this).css('background', 'url("/oldsite/images/bg/range/' + $(this).data('bg') + '-' + closestBgWidth + '.jpg") fixed ' + newX + " " + newY);    

                   }else{
                      $(this).css('background-image', 'url(/oldsite/images/bg/range/' + $(this).data('bg') + '-' + closestBgWidth + '.jpg)');                       
                      $(this).css('background-size', 'auto');
                      $(this).css('background-position', newX + newY);
                   }
              }
        });
        
        // form
          if ( currentFramePercent < 1 ) {
              if(touchSupport) {
                  $('#friend .shape').css('margin-left', ($('#container').width()-$('#friend .shape').width()-($('#friend .shape').width()/3))-60);
              }else{
                  $('#friend .shape').css('margin-left', $('#container').width()-$('#friend .shape').width()-($('#friend .shape').width()/3));
              }
          }else{
              $('#friend .shape').css('margin-left', $('#friend .shape').data('marginLeft'));
          }
          
        var form_width = $('#signupform .form .text-content').width();
        
        var logoHeight = $('#logo').data('height');


        //if(touchSupport && logoHeight < 30) logoHeight = 30;

        $('#logo').css('height', logoHeight);
        $('#logo').css('width', 'auto');

        $('#header,#header-container').css('height', headerHeight);

        var headerHeight = logoHeight; // 25 is the size of our dropshadow
        var relativeHeaderHeight = $('#logo').data('height')-$('#logo').height();

        $('#fullheight').css('padding-top', logoHeight+1);

        $('#menu').css('bottom', logoHeight/2-$('#menu').height()/2 );

        // inte thelist
        // inte scroller 

        if(touchSupport) {
            $('#thelist').css('height', $(window).height() - headerHeight);
            
            if(handheld)$('#fullheight').css('height', $(window).height()  + 100 + "px !important");
            if(handheld)$('#fullheight').css('overflow',"hidden");
            if(handheld)$('html,body').css('overflow',"hidden");
            
            // iscroll forces us to set specific height ratios
            // it's easier to calculate 
            var totalHeight = 0;


            $('#thelist > li').each(function() {
                totalHeight = totalHeight + $(this).height();
            });
            
            totalHeight += 50;


            $('#scroller').css('height', totalHeight );

        }
        
        

        
        // recalculate animations positions
        for(var animation in options.animations) { 
            var animation = options.animations[animation];
            
            if( animation == undefined ) {
                continue;
            }
            
            if( animation.disabled ) {
                continue;
            }
            
            if( $(animation.countFromElement).length == 0 ) {
                continue;
            }
            
            animation.countFromElementHeight      = $(animation.countFromElement).height();    
            animation.countFromElementPositionTop = $(animation.countFromElement).position().top;
        }

         options.animations[options.animations.length-2]['start'].top = parseInt(($(window).height()-$('#container').height())/2) < 0 ? 0 : parseInt(($(window).height()-$('#container').height())/2);  

        // 
        var faqHeight = $('#faq-container .box').height();
         $('#faq-container .box').css('margin-top', ($('#faq-container .box').height()/2)*-1);

        var faqPercent = $('#form-value').width()/parseInt($('#form-value').css('max-width'));
        
        /*
        $('#form-value' ).css('height', parseInt($('#form-value').css('max-height'))*faqPercent);
        $('#form-submit').css('height', parseInt($('#form-submit').css('max-height'))*faqPercent);
        $('#form-value' ).css('with',   parseInt($('#form-value').css('max-width'))*faqPercent);
        $('#form-submit').css('width',  parseInt($('#form-submit').css('max-width'))*faqPercent);

        $('#signupform .form').css( 'top', ($('#signupform').height()/2)-$('#signupform .form')/2);
        $('#signupform .form').css( 'margin-top', '0px');
*/

        $logoHeight = $(logoHeight)

        $('.shape').each(function loopForResize() {
            
           $this = $(this);

           w  = Math.floor($this.data( 'width'  )           * percent);
           h  = Math.floor($this.data( 'height' )           * percent);
           pt = Math.floor($this.data( 'padding-top' )      * percent);
           pl = Math.floor($this.data( 'padding-left' )     * percent);
           pr = Math.floor($this.data( 'padding-right' )    * percent);
           pb = Math.floor($this.data( 'padding-bottom' )   * percent);
           ml = Math.floor($this.data( 'margin-left' )      * percent);
           
           if( currentFramePercent < 0.6 ) {
               $this.css('margin-top', 30);
               $this.css('width',           Math.floor($this.data( 'width'  )           * phonePercent));
               $this.css('height',          Math.floor($this.data( 'height'  )           * phonePercent));     
           }
           
           
           $this.css('padding-top',     pt);
           $this.css('padding-left',    pl);
           $this.css('padding-right',   pr);
           $this.css('padding-bottom',  pb);
           
           //$this.css( 'margin-left', ml );
           
           //$this.css('top', $logoHeight[0]);
        });
        
        
           
       $('#comming-soon').css('width', Math.floor($('#comming-soon').data( 'width'  )           * percent));
       $('#comming-soon').css('height', Math.floor($('#comming-soon').data( 'height'  )         * percent));
       $('#comming-soon').css('right', ($('#comming-soon').width()*0.6)*-1)

        if(!firstResize) {
            if ( options.animations.length > 0 ) {
                var animations = options.animations.slice(0)
                animations.reverse()

                for(var animation in animations) {
                    animation = animations[animation];
                
                    if( animation == undefined ) {
                        continue;
                    }

                    if( animation.disabled ) {
                        continue;
                    }
                
                    if( $(animation.countFromElement).length == 0 ) {
                        continue;
                    }
                
                    $animationTarget = $(animation.element);
                
                    if ( animation.type == ANIMATION_FRAMES ) {
                        animator.showFrame($animationTarget, animation.startFrame);
                    }

                    if ( animation.type == ANIMATION_OPACITY ) {

                        animator.setOpacity($animationTarget,animation.start['opacity']);
                    }

                    if ( animation.type == ANIMATION_ROTATE ) {
                        $animationTarget.rotate(animation.start['rotateTo'])
                    }

                    if ( animation.type == ANIMATION_POSITION ) {

                        if( animation.left !== undefined ) {
                            //$animationTarget.css('left', animation.start['left']);
                            animator.moveToRelativeLeft($animationTarget, animation.start['left'], animation.translateCoordinates);
                        }     
                        
                        if( animation.right !== undefined ) {
                            //$animationTarget.css('left', animation.start['left']);
                            animator.moveToRelativeRight($animationTarget, animation.start['right'], animation.translateCoordinates);
                        }    

                        if( animation.top !== undefined ) {
                            //$animationTarget.css('top', animation.start['top']);
                            animator.moveToRelativeTop($animationTarget, animation.start['top'], animation.translateCoordinates);
                        }   

                        if( animation.bottom !== undefined ) {
                            //$animationTarget.css('bottom', animation.start['bottom']);
                            animator.moveToRelativeBottom($animationTarget, animation.start['bottom'], animation.translateCoordinates);
                        }

                    } /* if animation.type == position */

                    if ( animation.type == ANIMATION_MOVEBG ) {
                        $animationTarget = $(animation.moveElement);
                        if( animation.y !== undefined ) {
                            //$animationTarget.css('background-position-y', animator.pixelToPercentPixel(animation.start['y']));
                            animator.setBackgroundPositionY($animationTarget, animator.pixelToPercentPixel(animation.start['y']));
                            $animationTarget.data( 'background-position-y', animation.start['y'] );
                        }    

                        if( animation.x !== undefined ) {
                            //$animationTarget.css('background-position-x', animator.pixelToPercentPixel(animation.start['x']));
                            animator.setBackgroundPositionX($animationTarget, animator.pixelToPercentPixel(animation.start['x']));
                            $animationTarget.data( 'background-position-x', animation.start['x'] );
                        }        
                    } /* if animation.type == position */

                    if ( animation.before ) {
                        if(DEBUG) console.log("Calling before");
                        animation.before.call(this)
                    }
            
                    animation.data['afterDoneFired']  = false;
                    animation.data['afterResetFired'] = false;
                    animation.data['initialized']     = false;
                }
            
                if(safari) {
                    $('.shape').css('opacity', 0);
                    $('.shape:nth(0)').css('opacity', 1);
                    $('#icon').css('opacity',0)
                }
                $('body').scrollTop(0);
            }
            
            firstResize = false;
        }
        
        firstResize = false;
        
        // resize #container
        if( window_height > $('#container').height() ) {
            var top = (window_height-$('#container').height())/2;
            $('#container').css('top', top);
        }
        
            // Chrome bug: chrome messes with overflow on fullscreen
            // You need to manually set them to something else and then set them back for 
            // Chrome to wake up and re-render DOM. 
            //
            // There is no sane reason why this should be needed

            if(!touchSupport && !$.browser.msie) {

                setTimeout(function() {
                
                    $('#fullheight').css('overflow','hidden')
                    $('body').css('overflow','hidden')
                    $('html').css('overflow','hidden')

                    setTimeout(function() {
                        $('#fullheight').css('overflow','visible')
                        $('body').css('overflow','scroll')
                        $('body').css('overflow-x','hidden')
                        $('html').css('overflow','visible')
                    },1);
                },1);
               
               forceUpdateSafari = true;
            }
        
        $('body').scrollTop(0);
        setAnimationPositions();
        
        if(touchSupport) myScroll.refresh();
        forceUpdate = true;
    }; // resizeFrame
    
    this.init = function() {
        
        if ( safari ) {
            $('#intro').append($("#introh2"));
        }
        
        // Mobile browsers should use iScroll
           if(touchSupport) {
               //function loaded() {
               	myScroll = new iScroll('fullheight', {  
               	                                        useTransition: true, 
               	                                        onScrollMove: animator.touchMoveFixedBg,
               	                                        hScroll: false,
               	                                        hScrollbar: false,
               	                                        momentum: false,
               	                                        bounce: false
               	                                     });        
               //}
               document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
               //document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
           }
        
        $('#header #menu').data('font-size', parseInt($('#header #menu').css('font-size')));
        $('#header #menu').data('width',     parseInt($('#header #menu').css('width')));
        $('#logo').data('height', $('#logo').height());
        // We will be scaling every object in the frame, so we make sure to always save the original size.
        $('.resize').each(function initialResize() {
           var $this = $(this);
           $this.data( 'width', $this.width()  )
           $this.data( 'height', $this.height() )
        });
        
        // To avoid flickering (primerily for ios devices)
        $('#footer').show();
        $('.shape').show();
        $('#header-container').show();
        
        $('.shape').each(function initialResize() {
           var $this = $(this);
           $this.data( 'width',       $this.find("img").width());
           $this.data( 'height',      $this.find("img").height());
           $this.data( 'padding-top', parseInt($this.css('padding-top')) );
           $this.data( 'padding-left', parseInt($this.css('padding-left')) );
           $this.data( 'padding-right', parseInt($this.css('padding-right')) );
           $this.data( 'padding-bottom', parseInt($this.css('padding-bottom')) );
           $this.data( 'margin-left', parseInt($this.css('margin-left')) );

        });

        $('#comming-soon').data('width', $('#comming-soon').width())
        $('#comming-soon').data('height', $('#comming-soon').height())

        $('.resizeText').each(function initialResize() {
           var $this = $(this);
           $this.data( 'font-size', parseInt($this.css('font-size'))  );
        });

        $('#footer img').each(function initialResize() {
           var $this = $(this);
           $this.data( 'width', $this.width()  )
           $this.data( 'height', $this.height() )
        });

        $('.reposition').each(function initialResize() {
           var $this = $(this);
           $this.data( 'left', parseInt($this.css('left'))  );
           $this.data( 'top',  parseInt($this.css('top'))   );
           $this.data( 'margin-left', parseInt($this.css('margin-left')) );
        }); 
        

        $('#container .magnifiers').each(function initialResize() {
           var $this = $(this);
           $this.data( 'left', parseInt($this.css('left'))  )
           $this.data( 'top',  parseInt($this.css('top')) )

           $this.data( 'width',  $this.width()  )
           $this.data( 'height', $this.height() )

           var $round = $this.find(".round");

           $round.data( 'width',            $round.width()  );
           $round.data( 'height',           $round.height() );
           $round.data( 'margin-left',      parseInt($round.css('margin-left'))  );
           $round.data( 'margin-top',       parseInt($round.css('margin-top'))   );
           $round.data( 'border-radius',    parseInt($round.css('border-radius'))   );

           var $magnified = $this.find(".magnified.original");

           try{
               var x = parseInt($magnified.css('background-position').split(" ")[0]);
               var y = parseInt($magnified.css('background-position').split(" ")[1]);
           }catch(err) {
               var x = 0;
               var y = 0;
           }
           
           $magnified.data( 'background-position-y', y );
           $magnified.data( 'background-position-x', x );   


           if( bgSizeSupport ) {
                var bgsize = $magnified.css('background-size').split(" ");
                $magnified.data( 'background-size-width', parseInt(bgsize[0]) );   
                $magnified.data( 'background-size-height', parseInt(bgsize[1]) );   
            }else{
                var $replacement = $this.find('.replacement');
                $replacement.data( 'width',   $replacement.width()  );
                $replacement.data( 'height',  $replacement.height() );
            }
        });
        
        $(window).resize(function resizeCallback(e){
           
            
            var header_height = $('#header').height();
            

            $window     = $(window)

            var ww = $window.width();
            var wh = $window.height(); // -$('#footer').height()

            var cw = $container.width();
            var ch = $container.height();

            window_height = $window.height();
            window_width  = ww;
            container_width = ww;
            container_height = wh;

            target_height = wh;
            target_width  = ww;

            im_height = original_height;
            im_width  = original_width;

            v_fact        = target_height/im_height;
            h_fact        = target_width / im_width

            im_fact     = Math.min(v_fact, h_fact)
            new_height  = im_height*im_fact
            new_width   = im_width*im_fact

            currentFramePercent = new_width/im_width;
            currentFramePhonePercent = window_height/(700+$('#logo').height());
            
            if( handheld ) {
                currentFramePhonePercent = window_width/(700);
            }

            if(currentFramePercent > 1) {
                currentFramePercent = 1;
            }
            
            if(currentFramePhonePercent > 1) {
                currentFramePhonePercent = 1;
            }
            
            if(!touchSupport) {
                
               
                if ( SITE_WAS_DISABLED_WIDTH && $(window).width() > 600 &&  $(window).height() > 500 ) {
                    location.reload(true);
                    SITE_WAS_DISABLED = false;
                    return;
                }  
            
                if( $(window).width() <= 600 ) {
                    SITE_WAS_DISABLED_WIDTH = true;
                    resizer.showResizeBrowser();
                }
                
                 if ( SITE_WAS_DISABLED_HEIGHT && $(window).height() > 500 &&  $(window).width() > 600 ) {
                    location.reload(true);
                    SITE_WAS_DISABLED_HEIGHT = false;
                    return;
                }  

                if( $(window).height() <= 500 ) {
                    SITE_WAS_DISABLED_HEIGHT = true;
                    resizer.showResizeBrowser();
                }
            }
            
            if(videoplayer) {
                resizeMovie();
                oldCurrentFramePercent = -1;
            }

            //if( currentFramePercent == oldCurrentFramePercent && currentFramePhonePercent == oldCurrentFramePhonePercent) {
            //    return;
            //}else{
                oldCurrentFramePercent = currentFramePercent;
                oldCurrentFramePhonePercent = currentFramePhonePercent;
            //}
            forceUpdate = true;
            resizer.resizeFrame(currentFramePercent,currentFramePhonePercent);
            $('#fullheight').css('min-width', $window.width());
            $('#fullheight').show();
            if(!ielt8)$('#container').show();
            forceUpdate = true;
        }).resize();
        
        if(touchSupport) {
            setTimeout(function resizeFrameCurrentPercent() {
                //window.addEventListener("orientationchange", resizer.resizeOnOrientation, false);
                //window.addEventListener("resize", resizer.resizeOnOrientation, false);
                
                $(window).bind('orientationchange resize', function(event){
                      resizer.resizeOnOrientation(event);
               });
            }, 1);
          }
          
              $('#phone').css('left', ($('#container').width()-$('#phone').width())/2);
          
          forceUpdate = true;
    }; // init
    
    this.showResizeBrowser = function() {
        if(!touchSupport) {
            $('.noTouchSupport #fullheight,.noTouchSupport #container,.noTouchSupport #header, .noTouchSupport #footer').hide();
            $('#video,#moviecontainer,#moviecontainer-wrapper,#movie,#introh2,#thelist').hide()
            $('#increase').show();
        }
    }
}

var myScroll;



function animatorHandler() {
    
    this.startAnimations = function() {
        
            // Faster animation then to trigger via onScroll,
            // Cross-browser implementation of window.requestAnimationFrame
            (function() {
                var lastTime = 0;
                var vendors = ['ms', 'moz', 'webkit', 'o'];
                for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                               || window[vendors[x]+'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame)
                    window.requestAnimationFrame = function(callback, element) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                          timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };

                if (!window.cancelAnimationFrame)
                    window.cancelAnimationFrame = function(id) {
                        clearTimeout(id);
                    };
            }()); // new requestionAnimationFrame
            
            

            (function animloop(){
                window.requestAnimationFrame(animloop);


                // Different offset for different browsers
                if( touchSupport ) {
                    var curTransform   = new WebKitCSSMatrix(window.getComputedStyle( $('#fullheight #scroller')[0] ).webkitTransform);
                    var offset         = curTransform.m42*-1;
                }else{
                    var offset         = $(window).scrollTop();
                }

                // Don't trigger a animation-recalculation if the value hasn't changed
                if( animloopPrev == offset && forceUpdate == false) 
                return;

                if(forceUpdate) {
                    if (DEBUG) console.log("Forcing update because of resize");
                }

                animloopPrev = offset;
                animator.updateFrame( offset );
                forceUpdate = false;

            })();
    },
    
    this.init = function() {

      
        
        var frameAnimationIndex = 0;
        for(var animation in options.animations) { 
            var animation = options.animations[animation]

            if( animation == undefined ) {
                continue;
            }
            
            if( animation.disabled ) {
                continue;
            }

            animation.countFromElementHeight      = $(animation.countFromElement).height();    
            animation.countFromElementPositionTop = $(animation.countFromElement).position().top;

            animation['JqueryCountFromElement'] = $(animation.countFromElement);
            animation['jQueryMoveElement']      = $(animation.moveElement);

            if ( animation.translateCoordinates == undefined ) {
                animation.translateCoordinates = true;
            }
        }
        
        // This is a IE7 hack so the magnifier doesn't "blink"
        $('.magnifiers').css('display', 'block');


       
        
        $(document).ready(function() {
            // rescale animations  
            //$(window).resize();
            if(touchSupport) myScroll.refresh();
            forceUpdate = true;
        })
        
        forceUpdate = true;
        // Allow the browser to update DOM before preloading more
    } //  init()
    
    this.touchMoveFixedBg = function() {
        // ...
    }
    
    var imagesToPreload = [];
    var buffer          = [];
    var buffer2         = [];
    var buffer3         = [];
    var preloading      = false;
    var preloadingTimer = false;
    
    var bufferdelta     = 0;
    var buffers         = 2;
    
    var $preloadingElement = false;
    var preloadingElementBuffer;
    
    var hostnames = ['https://static.www.getswish.com','https://static2.www.getswish.com','https://static3.www.getswish.com','https://www.getswish.com'];
    var hostnames_length = hostnames.length;
    
    this.preloadImages = function() {
        // Pre-load images

        var frameAnimationIndex = 0;
        for(var animation in options.animations) { 
            var original_i = animation;
            var animation = options.animations[animation]
            
            
            if( animation == undefined ) {
                continue;
            }
            
            if( animation.disabled ) {
                continue;
            }
            
            if ( animation.type == ANIMATION_FRAMES ) {
                var w    = $(animation.element).width();
                var h    = $(animation.element).height();
                
                if(buffer[animation.element] == undefined) {
                    buffer[animation.element]    = new Array();
                    buffer[animation.element][0] = ""
                    buffer[animation.element][1] = ""
                    buffer[animation.element][2] = ""
                } 
                
                var html  = "";
                var delta = 0;
                var deltare = 0;
                
                var html0 = "";
                var html1 = "";
                var html2 = "";
                
                for (var i=animation.startFrame;i<=animation.endFrame;i++)
                {
                    
                    
                    var css = "hidden";
                    
                    if (i == animation.startFrame && frameAnimationIndex == 0) {
                        css = ""
                    }
                    
                    if(delta == 0) {
                        css += " buffer0 ";
                        
                       
                    }else if(delta == 1) {
                        css += " buffer1 ";
                    }else{ 
                        css += " buffer2 ";
                    }
                    
                    if ( delta > 0 ) {
                        css += " not-loaded ";
                    }
                    
                    var temphtml = "<img src='" + hostnames[deltare] + animation.folder + animationSizeFolder + i + ".png" + "' class='frame frame" + i + " " + css + "'>\n";
                    
                     if(delta == 0) {
                            html0 += temphtml;
                             deltare += 1;
                             if(deltare > 3) {
                                    deltare = 0;
                             }
                        }else if(delta == 1) {
                            html1 += temphtml;
                        }else{ 
                            html2 += temphtml;
                        }
                    
                    delta = delta+1;
                    
                    if ( delta == 3 ) {
                        delta = 0;
                    }
                }
                
                buffer[animation.element][0] +=  html0
                buffer[animation.element][1] += html1;
                buffer[animation.element][2] += html2;
                
                frameAnimationIndex += 1;
            }
        }
        
        
        setTimeout(function() {
           animator.checkNewProgress(); 
        },1);

    };
    
    this.initiated = false;
    this.startedCounting = false;
    this.activeBuffer = 0;
    
    this.checkNewProgress = function() {
        for(var b in buffer) {
            bu = buffer[b][animator.activeBuffer]
            $(b).html( $(b).html() + bu);
        }

       

        if( !touchSupport ) {
            
            if( $.browser.msie && $.browser.version < 9) { 
                // ignore IE
                animator.adjustMagnifier();
            }else{  
            
                setTimeout(function() {
                     for(var b in buffer) {
                        bu = buffer[b][1]
                        $(b).html( $(b).html() + bu);
                    }
                }, 250)
            
                setTimeout(function() {
                     for(var b in buffer) {
                        bu = buffer[b][2]
                        $(b).html( $(b).html() + bu);
                        
                    }
                    
                    animator.adjustMagnifier();
                }, 500);
            }
        }

     

        setTimeout(animator.checkForComplete, 750);
    },
    
    this.adjustMagnifier = function() {
        $('#magnifier .round ').find(".frame").each(function() {
              $(this).css({
                  width: 720*currentFramePhonePercent,
                  height: 720*currentFramePhonePercent
              });


              $(this).data('margin-left', parseInt($(this).css('margin-left')) );
              $(this).data('margin-top', parseInt($(this).css('margin-top')) );

              $(this).css('margin-left', $(this).data('margin-left')*currentFramePhonePercent);
              $(this).css('margin-top', $(this).data('margin-top')*currentFramePhonePercent);

           });
    }
    
    this.checkForComplete = function() {
        
        var $completed = $([0]);
        $('.frame.buffer0').each(function() {
        
            if ( $(this)[0].complete ) {
                var i = $completed[0]+1;
            
                $completed = $([i]);
            };
        
        });
        
         var currentLoadingPercent = Math.ceil(($completed[0]/$('.frame.buffer0').length) * 100);
         
         var currentLoadingPercentRounded = Math.ceil(currentLoadingPercent/10)-1;
         if(currentLoadingPercentRounded < 0 ) currentLoadingPercentRounded = 0;
         
         $('#loading-progress').css('background-position', '0px -' + currentLoadingPercentRounded*155 + 'px')
         $('#loading-progress #loading-percent').html( currentLoadingPercent + "%");
         
         if( currentLoadingPercent > 50 ) {
             $('#loading-progress').css('color', 'white');
         }
          
         if( $completed[0] == $('.frame.buffer0').length) {
              if( animator.initiated == false ) {
                  $('body').removeClass('loading');   
                  animator.initiated = true;
                  
                  setTimeout(function() {

                      switch(document.location.hash) {
                          case '#upptack-swish':
                              $('#menu .movie').click()
                          break;

                          case '#hur-fungerar-det':
                              $('#menu .stuff').click();
                          break;

                          case '#signup':
                              $('#menu .signup').click()
                          break;

                          case '#press':
                              $('#menu .about').click()
                          break;
                      }

                  }, 1000);
                  
                  setTimeout(function() {
                      if( $('body').scrollTop() > 170 && $('body').scrollTop() < 190 ) {
                          $('#menu .stuff').click();
                      }
                      animator.removeClassFromLoaded();                      
                  }, 500)
               }
          }else{
              setTimeout(animator.checkForComplete, 250);
          }
          
          
    }
    
    this.removeClassFromLoaded = function() {
        
        if($('.frame.not-loaded').length > 0) {
            $('.frame.not-loaded').each(function() {

                if ( $(this)[0].complete ) {
                    $(this).removeClass("not-loaded");
                };

            });
            
            setTimeout(function() {
                animator.removeClassFromLoaded();
            }, 1000);
        }

    }
    
    
    this.updateFrame = function(scrollTop) {    
        var pos = scrollTop;
        var direction = false;

        if(pos < prevPos) {
            direction = DIRECTION_UP;
        }else{
            direction = DIRECTION_DOWN; // Down is triggered for the initial call
        }
        
        prevPos = pos;
        var animations = options.animations.slice(0)

        if ( direction == DIRECTION_UP ) {
            animations.reverse()
        }
        
        for(var animation in animations) {
            var animationIndex = animation;
            animation = animations[animation];
            
            if( animation == undefined ) {
                continue;
            }
            
            if( animation['countFromElement'] == undefined ) {
                continue;
            }
            
            if( animation.disabled ) {
                continue;
            }
            
            $element  = animation['JqueryCountFromElement'];

            if(!$element) {
                if (DEBUG) console.warn("Fatal: countFromElement "+animation['JqueryCountFromElement']+" " + animation['countFromElement'] + "doesn't exist - animation halted");
                continue;
            }

            if(!$element.length) {
                if (DEBUG) console.warn("Fatal: countFromElement "+animation['JqueryCountFromElement']+" " + animation['countFromElement'] + "doesn't exist - animation halted");
                continue;
            }

            if ($element.length == 0) {
                if (DEBUG) console.warn("Fatal: countFromElement "+animation['JqueryCountFromElement']+"doesn't exist - animation halted");
                continue;
            }

            $animationTarget = $(animation.element);

            if ( touchSupport ) {
                /*
                var visible_area         =  ($window.height()-header_height+scrollTop)-( $element.position().top + ($element.parent().position().top*-1) );
                var percent_visible      =  visible_area/$element.height();
                */
                var visible_area         =  (window_height-header_height+scrollTop)-( animation.countFromElementPositionTop );
                var percent_visible      =  visible_area/animation.countFromElementHeight;
            }else{
                var visible_area         =  (window_height-header_height+scrollTop)-animation.countFromElementPositionTop;
                var percent_visible      =  visible_area/animation.countFromElementHeight;
            }


            if( percent_visible > animation.startAtPercent && percent_visible < animation.endAtPercent) {

                if(direction == DIRECTION_DOWN) {
                    animation.data['afterDoneFired'] = false;
                    animation.data['afterResetFired'] = false;
                }

                animation.data['initialized'] = true;

                var start   = window_height*animation.startAtPercent;
                var end     = window_height*animation.endAtPercent;
                var toTop   = window_height*percent_visible
                var total = end-start;
                var percentOfAnimationDone = (toTop-start)/total;

                        if (DEBUG) console.log(animation.name + "\nType:               " + animations_types[animation.type] + ", \nAnimation done %:   " + (Math.round((percentOfAnimationDone*100)*1000000000)/1000000000).toString().substr(0,10) + "  (percentOfAnimationDone), \nPosition %:         " + (Math.round(percent_visible*1000000000)/1000000000).toString().substr(0,10) + "  (percent_visible) \nTrigger:            " + animation.startAtPercent + "-" + animation.endAtPercent + "(animation.startAtPercent - animation.endAtPercent)")

                if ( animation.type == ANIMATION_OPACITY ) {
                    var opacityToTravel   = animation.start['opacity']-animation.opacity;
                    var newCurrentOpacity = animation.start['opacity'] - (opacityToTravel*percentOfAnimationDone)                   

                    if (DEBUG) console.log(opacityToTravel + " (opacityToTravel) " + newCurrentOpacity + " (newCurrentOpacity)")
                    //$animationTarget.css('opacity', newCurrentOpacity);
                    animator.setOpacity($animationTarget,newCurrentOpacity);
                }

                if ( animation.type == ANIMATION_FRAMES ) {
                    var framesToTravel  = animation.endFrame - animation.startFrame;
                    var newCurrentFrame = animation.startFrame + Math.floor(framesToTravel*percentOfAnimationDone);
                    if (DEBUG) console.log(framesToTravel + " (framesToTravel)\n" + newCurrentFrame + " (newCurrentFrame)")

                    animator.showFrame($animationTarget, newCurrentFrame);
                }

                if ( animation.type == ANIMATION_ROTATE ) {

                    // rotateFrom rotateTo
                    var degreesToTravel    = animation.rotateTo-animation.start['rotateTo'];
                    var newCurrentRotation = animation.start['rotateTo']+(degreesToTravel*percentOfAnimationDone)        

                    if (DEBUG) console.log(degreesToTravel + " (degreesToTravel)\n" + newCurrentRotation + " (newCurrentRotation)")
                    $animationTarget.rotate(newCurrentRotation);

                }

                if ( animation.type == ANIMATION_POSITION ) {

                    if( animation.left !== undefined ) {
                        
                        var start_left = animation.start['left'];
                        
                        switch(start_left) {
                            case 'IPHONE_CENTER':
                                start_left = IPHONE_CENTER;
                            break;
                            case 'IPHONE_RIGHT':
                                start_left = IPHONE_RIGHT;
                            break;
                            case 'IPHONE_LEFT':
                                start_left = IPHONE_LEFT;
                            break;
                        }
                        
                        var animation_left = animation.left;
                        
                        switch(animation_left) {
                            case 'IPHONE_CENTER':
                                animation_left = IPHONE_CENTER;
                            break;
                            case 'IPHONE_RIGHT':
                                animation_left = IPHONE_RIGHT;
                            break;
                            case 'IPHONE_LEFT':
                                animation_left = IPHONE_LEFT;
                            break;
                        }
                        
                        var pixelsToTravel = start_left-animation_left;
                        var newCurrentLeft = start_left-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentLeft + " (newCurrentLeft)" + "\n" +start_left + " (animation.start['left'])\n" + animation_left + " (animation.left)");
                        //$animationTarget.css('left', newCurrentLeft);
                        animator.moveToRelativeLeft($animationTarget, newCurrentLeft, animation.translateCoordinates);



                    }
                    
                    if( animation.right !== undefined ) {
                        
                        var start_right = animation.start['right'];
                        
                        switch(start_right) {
                            case 'IPHONE_CENTER':
                                start_right = IPHONE_CENTER;
                            break;
                            case 'IPHONE_RIGHT':
                                start_right = IPHONE_RIGHT;
                            break;
                            case 'IPHONE_LEFT':
                                start_right = IPHONE_LEFT;
                            break;
                        }
                        
                        var animation_right = animation.right;
                        
                        switch(animation_right) {
                            case 'IPHONE_CENTER':
                                animation_right = IPHONE_CENTER;
                            break;
                            case 'IPHONE_RIGHT':
                                animation_right = IPHONE_RIGHT;
                            break;
                            case 'IPHONE_LEFT':
                                animation_right = IPHONE_LEFT;
                            break;
                        }
                        
                        var pixelsToTravel = start_right-animation_right;
                        var newCurrentLeft = start_right-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentLeft + " (newCurrentLeft)" + "\n" +start_right + " (animation.start['left'])\n" + animation_right + " (animation.left)");
                        //$animationTarget.css('left', newCurrentLeft);
                        animator.moveToRelativeRight($animationTarget, newCurrentLeft, animation.translateCoordinates);



                    }

                    if( animation.top !== undefined ) {
                        var pixelsToTravel = animation.start['top']-animation.top;
                        var newCurrentTop = animation.start['top']-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentTop + " (newCurrentTop)")
                        //$animationTarget.css('top', newCurrentTop);
                        animator.moveToRelativeTop($animationTarget, newCurrentTop, animation.translateCoordinates);
                    }

                    if( animation.bottom !== undefined ) {
                        var pixelsToTravel = animation.start['bottom']-animation.bottom;
                        var newCurrentBottom = animation.start['bottom']-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentBottom + " (newCurrentBottom)")
                        //$animationTarget.css('top', newCurrentTop);
                        animator.moveToRelativeBottom($animationTarget, newCurrentBottom, animation.translateCoordinates);
                    }


                } /* if animation.type == position */

                if ( animation.type == ANIMATION_MOVEBG ) {

                    $animationTarget = animation.jQueryMoveElement;

                   

                    if( animation.y !== undefined ) {
                        
                        
                        var pixelsToTravel = animation.start['y']-animation.y;
                        var newCurrentY = animation.start['y']-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentY + " (newCurrentY)");
                        
                        animator.setBackgroundPositionY($animationTarget, animator.pixelToPercentPixel(newCurrentY));
                        $animationTarget.data( 'background-position-y', newCurrentY);
                    }

                    if( animation.x !== undefined ) {
                        var pixelsToTravel = animation.start['x']-animation.x;
                        var newCurrentX = animation.start['x']-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentX + " (newCurrentX)")
                        animator.setBackgroundPositionX($animationTarget, animator.pixelToPercentPixel(newCurrentX));
                        $animationTarget.data( 'background-position-x', newCurrentX );
                    }

                } /* if animation.type == position */

            }



            // After it has been fired

            if( percent_visible > animation.endAtPercent && (!animation.data['afterDoneFired'] || animation.data['afterDoneFired'] == undefined ) && direction == DIRECTION_DOWN ) {

                if ( animation.type == ANIMATION_FRAMES ) {
                    animator.showFrame($animationTarget, animation.endFrame);
                }

                if ( animation.type == ANIMATION_OPACITY ) {
                    animator.setOpacity($animationTarget,animation.opacity);
                }

                if ( animation.type == ANIMATION_ROTATE ) {
                    $animationTarget.rotate(animation.rotateTo)
                }

                if ( animation.type == ANIMATION_POSITION ) {
                    if( animation.left !== undefined ) {
                        //$animationTarget.css('left', animation.left);
                        animator.moveToRelativeLeft($animationTarget, animation.left, animation.translateCoordinates);
                    }  
                    
                     if( animation.right !== undefined ) {
                            //$animationTarget.css('left', animation.left);
                            animator.moveToRelativeRight($animationTarget, animation.right, animation.translateCoordinates);
                        }    
                      

                    if( animation.top !== undefined ) {
                        //$animationTarget.css('top', animation.top);
                        animator.moveToRelativeTop($animationTarget, animation.top, animation.translateCoordinates);
                    }

                    if( animation.bottom !== undefined ) {
                        //$animationTarget.css('top', animation.top);
                        animator.moveToRelativeBottom($animationTarget, animation.bottom, animation.translateCoordinates);
                    }
                } /* if animation.type == position */

                if ( animation.type == ANIMATION_MOVEBG ) {
                    
                    $animationTarget = animation.jQueryMoveElement;
                    
                    if( animation.y !== undefined ) {
                        animator.setBackgroundPositionY($animationTarget, animator.pixelToPercentPixel(animation.y));
                        $animationTarget.data( 'background-position-y', animation.y );
                    }    

                    if( animation.x !== undefined ) {
                        animator.setBackgroundPositionX($animationTarget, animator.pixelToPercentPixel(animation.x));
                        $animationTarget.data( 'background-position-x', animation.x );
                    }        
                } /* if animation.type == position */

                if ( animation.after ) {
                    if(DEBUG) console.log("Calling after");
                    animation.after.call(this)
                }

                // reset
                if (DEBUG) console.log("afterDoneFired = true for " + animation.name)
                animation.data['afterDoneFired']  = true;
                animation.data['afterResetFired'] = false;
                animation.data['initialized']     = false;
            }




            // After it has been scrolled up fast
            if ( percent_visible < animation.startAtPercent && ( !animation.data['afterResetFired'] || animation.data['afterResetFired'] == undefined ) && direction == DIRECTION_UP && ( (animation.data['initialized'] && animation.data['initialized'] !== undefined ) || (animation.data['afterDoneFired']))) {


                if ( animation.type == ANIMATION_FRAMES ) {
                    animator.showFrame($animationTarget, animation.startFrame);
                }

                if ( animation.type == ANIMATION_OPACITY ) {
                    if (DEBUG) console.log("opacity")
                    animator.setOpacity($animationTarget,animation.start['opacity']);
                }

                if ( animation.type == ANIMATION_ROTATE ) {
                    $animationTarget.rotate(animation.start['rotateTo'])
                }

                if ( animation.type == ANIMATION_POSITION ) {

                    if( animation.right !== undefined ) {
                        //$animationTarget.css('left', animation.start['left']);
                        animator.moveToRelativeRight($animationTarget, animation.start['right'], animation.translateCoordinates);
                    }

                    if( animation.left !== undefined ) {
                        //$animationTarget.css('left', animation.start['left']);
                        animator.moveToRelativeLeft($animationTarget, animation.start['left'], animation.translateCoordinates);
                    }         

                    if( animation.top !== undefined ) {
                        //$animationTarget.css('top', animation.start['top']);
                        animator.moveToRelativeTop($animationTarget, animation.start['top'], animation.translateCoordinates);
                    }   

                    if( animation.bottom !== undefined ) {
                        //$animationTarget.css('bottom', animation.start['bottom']);
                        animator.moveToRelativeBottom($animationTarget, animation.start['bottom'], animation.translateCoordinates);
                    }

                } /* if animation.type == position */

                if ( animation.type == ANIMATION_MOVEBG ) {
                    
                    $animationTarget = animation.jQueryMoveElement;
                    
                    if( animation.y !== undefined ) {
                        //$animationTarget.css('background-position-y', animator.pixelToPercentPixel(animation.start['y']));
                        animator.setBackgroundPositionY($animationTarget, animator.pixelToPercentPixel(animation.start['y']));
                        $animationTarget.data( 'background-position-y', animation.start['y'] );
                    }    

                    if( animation.x !== undefined ) {
                        //$animationTarget.css('background-position-x', animator.pixelToPercentPixel(animation.start['x']));
                        animator.setBackgroundPositionX($animationTarget, animator.pixelToPercentPixel(animation.start['x']));
                        
                        $animationTarget.data( 'background-position-x', animation.start['x'] );
                    }        
                } /* if animation.type == position */

                if ( animation.before ) {
                    animation.before.call(this)
                }

                // reset
                if (DEBUG) console.log("afterResetFired = true for " + animation.name)
                animation.data['afterResetFired'] = true;
                animation.data['afterDoneFired']  = false;
                animation.data['initialized']     = false;

            }




        }

       

        if(!bgSizeSupport) {
            //$updateFrameWindow.resize();
        }


    } /* updateFrame */
    
    this.setBackgroundPositionX = function(target,x) {
        $animationTarget = target;
        var y = " " + parseInt($animationTarget.css('background-position').split(" ")[1]) + "px ";
        $animationTarget.css('background-position', x + "px " + y);
    }
    
    this.setBackgroundPositionY = function(target,y) {
        $animationTarget = target;
        try{
            if( $animationTarget.css('background-position') == "" ) {
                var x = parseInt($animationTarget.css('background-position-x'));
            }
            var x = " " + parseInt($animationTarget.css('background-position').split(" ")[0]);
        }catch(err) {
            var x = 0;
        }
        $animationTarget.css('background-position', x + "px " + y + "px");
    }
    
    this.setOpacity = function(target,opacity) {
        $animationTarget = target;
        
        if($.browser.msie && parseInt($.browser.version,10) < 9) {
             if($animationTarget.is("img") || $animationTarget.is("h2")) { // ie 8 and below don't handle img or h2 opacity well (as in not at all)
                 
             }else{
                 $animationTarget.css('opacity', opacity);
             }   
        }else{
            $animationTarget.css('opacity', opacity);
        }
    }
    
    this.showFrame = function(target, newCurrentFrame) {
        $animationTarget = target

        if(touchSupport || $.browser.msie && $.browser.version < 9 ) {
            $animationTarget.find(":not(.hidden):not(.frame"+ newCurrentFrame + ")").addClass('hidden')
            $animationTarget.find(".frame" + newCurrentFrame + ",.frame" + (parseInt(newCurrentFrame)+1) + ",.frame" + (parseInt(newCurrentFrame)+2)).removeClass("hidden");
            
        }else{
        
            if( !$animationTarget.find(".frame" + newCurrentFrame).hasClass('not-loaded') ) {
                $animationTarget.find(":not(.hidden):not(.frame"+ newCurrentFrame + ")").addClass('hidden')
                $animationTarget.find(".frame" + newCurrentFrame ).removeClass("hidden");
            
            }else if( !$animationTarget.find(".frame" + (parseInt(newCurrentFrame)+1)).hasClass('not-loaded') ) {
                $animationTarget.find(":not(.hidden):not(.frame"+ (parseInt(newCurrentFrame)+1) + ")").addClass('hidden')
                $animationTarget.find(".frame" + (parseInt(newCurrentFrame)+1) ).removeClass("hidden");
            
            }else if( !$animationTarget.find(".frame" + (parseInt(newCurrentFrame)+2)).hasClass('not-loaded') ) {
                $animationTarget.find(":not(.hidden):not(.frame"+ (parseInt(newCurrentFrame)+2) + ")").addClass('hidden')
                $animationTarget.find(".frame" + (parseInt(newCurrentFrame)+2) ).removeClass("hidden");
            }
        }
        
    }

    this.moveToRelativeLeft = function(obj,left, translateCoordinates) {
        $obj = obj;
        
        switch( left) {
            case 'IPHONE_CENTER':
                 left = IPHONE_CENTER;
            break;
            case 'IPHONE_RIGHT':
                 left = IPHONE_RIGHT;
            break;
            case 'IPHONE_LEFT':
                 left = IPHONE_LEFT;
            break;
        }
        
        

        if (!translateCoordinates) {
            $obj.css('left',  left);
        }else{
            $obj.css('left',  Math.floor(left*currentFramePercent));
        }

        $obj.data('left', left);
    }
    
    this.moveToRelativeRight = function(obj,right, translateCoordinates) {
        $obj = obj;
        
        switch( right ) {
            case 'IPHONE_CENTER':
                 right = IPHONE_CENTER;
            break;
            case 'IPHONE_RIGHT':
                 right = IPHONE_RIGHT;
            break;
            case 'IPHONE_LEFT':
                 right = IPHONE_LEFT;
            break;
        }

        if (!translateCoordinates) {
            $obj.css('right',  right);
        }else{
            $obj.css('right',  Math.floor(right*currentFramePercent));
        }

        $obj.data('left', right);
    }

    this.moveToRelativeMarginLeft = function(obj,left,translateCoordinates) {
        $obj = obj;

        if (!translateCoordinates) {
            $obj.css('margin-left',  left);
        }else{
            $obj.css('margin-left',  Math.floor(left*currentFramePercent));
        }

        $obj.data('margin-left', left);
    }
    
    this.moveToRelativeTop = function(obj,top, translateCoordinates) {
        $obj = obj;

        if (!translateCoordinates) {
            $obj.css('top',  top);
        }else{
            $obj.css('top',  Math.floor(top*currentFramePercent));        
        }

        $obj.data('top', top);    
    }


    this.moveToRelativeBottom = function(obj,bottom, translateCoordinates) {
        $obj = obj;

        if (!translateCoordinates) {
            $obj.css('bottom',  bottom);
        }else{
            $obj.css('bottom',  Math.floor(bottom*currentFramePercent));
        }

        $obj.data('bottom', bottom);    
    }

    this.pixelToPercentPixel = function(px) {
        return Math.floor(px*currentFramePercent);
    }
}

function helperHandler() {
    this.init = function() {
        MBP.scaleFix()
        
        $('#button-notifyme').mouseenter(function() {
            $(this).stop(true);
            $(this).animate({
              right: 0
            }, 250);
        }).mouseleave(function() {
            $(this).stop(true);
            $(this).animate({
              right: -94
            }, 250);
        }).click(function() {
            $('#menu .signup').click();
        });
        
        
        $('#button-twitter,#button-facebook').mouseenter(function() {
            $(this).stop(true);
            $(this).animate({
              right: 0
            }, 250);            
        }).mouseleave(function() {
            $(this).stop(true);
            $(this).animate({
              right: -82
            }, 250);
        })
        
        $('#menu li').live('click', function menuClick() {
           var $this = $(this);
           var $el   = $($this.data('scrollto'))
           var top = $el.position().top+($el.height()/2);

           if( $this.data('scrollto') == '#movie' ) {
                  top = $el.position().top;
              }

           if( $this.data('scrollto') == '#about' ) {
               top = $el.position().top;
           }
           
           if(touchSupport) {
               top = $el.position().top;
               
               
           }
           
           if( $this.data('scrollto') == '#signupform' ) {
                  top = $el.position().top + ($('.form').position().top/2) ;
           }

           if(touchSupport) {
               myScroll.scrollTo(0, top*-1, 1000)   
           }else{
               $('html, body').animate({scrollTop: top}, 'slow');
           }
        });
        $('#float').css('top', 50); 
        
        forceUpdate = true;
    }
    
    this.pointerEvents = function(obj, event) {
        $obj = obj;
        $obj.css('pointer-events', event);
    }
    
    this.setActiveMenu = function(menu) {
        $('#menu li').removeClass('active')
        $('#menu').find(menu).addClass('active')
    };
    
    this.enableStats = function() {
        var stats = new Stats();
        stats.getDomElement().style.position = 'fixed';
        stats.getDomElement().style.left = '0px';
        stats.getDomElement().style.top = '0px';
        document.body.appendChild( stats.getDomElement() );
        setInterval( function () {
            stats.update();
        }, 1000 / 60 );
    }
}

function signupHandler() {
    this.init = function() {
        // Signup form
        $('#form-value').focus(function () {
          if( $(this).val() == $('#form-value').data('orig') || $(this).val() == $('#form-value').data('success') || $(this).val() == $('#form-value').data('error') ) {
              $(this).val("");
              $('#form-value').removeClass("success");
              $('#form-value').removeClass("error");
          }  
          
          try {  analytics.track('Signup','Click', 'Input');  }catch(e) {}
          
        });  
        
        if(ielt8) {
            
            $('#form-value').click(function () {
              if( $(this).val() == $('#form-value').data('orig') || $(this).val() == $('#form-value').data('success') || $(this).val() == $('#form-value').data('error') ) {
                  $(this).val("");
                  $('#form-value').removeClass("success");
                  $('#form-value').removeClass("error");
              }  
              
              try {  analytics.track('Signup','Click', 'Input');  }catch(e) {}
              
            });
        }

        $('#form-value').blur(function () {
          if( $(this).val() == "" ) {
              $(this).val( $(this).data('orig') );
              $('#form-value').removeClass("success");
              $('#form-value').removeClass("error");
          }  
        });

        $("#form-value").on('touchstart', function(e) {
            $(this).focus();
            //e.stopPropagation();
        });

        $("#form-submit").on('touchstart', function(e) {
            $(this).focus();
            $(this).click();

            //e.stopPropagation();
        });
        

        $('#form-submit').click(function() {
            $.ajax({
              type: 'POST', 
              url: '/save.php',
              data: { value: $('#form-value').val() },
              success: function(data) {
                  if(data == 'OK') {
                      $('#form-value').val( $('#form-value').data('success') );
                      $('#form-value').addClass("success");
                      try {  analytics.track('Signup','Save', 'Success');  }catch(e) {}
                  }else{
                      signup.formError();
                      try {  analytics.track('Signup','Save', 'Error - data not OK (probably syntax error in email/phone)');  }catch(e) {}
                      
                  }
              },
              error: function() {
                  signup.formError();
                  try {  analytics.track('Signup','Save', 'Error - error in $.ajax call (php responded 500?)');  }catch(e) {}
              }
            });
            
            try {  analytics.track('Signup','Click', 'Submit');  }catch(e) {}
        });
        
    } // init
    
    this.formError = function() {
        $('#form-value').val( $('#form-value').data('error') );
        $('#form-value').removeClass("success");
        $('#form-value').addClass("error");
    }
}

function aboutHandler() {
    this.init = function() {
        
        if(!touchSupport) {
            $('#about').append($('#faq-container')); 
            $('#faq-container').addClass('none-fixed');
        }
        
        // FAQ
        $('#faq-container .prev').live('click', function prevFAQ() {
            about.changeQuestion($('#faq-container').data('current')-1);
            
            try {  analytics.track('FAQ','Click', 'Prev question');  }catch(e) {}
        });

        $('#faq-container .next').live('click', function nextFAQ() {
            about.changeQuestion($('#faq-container').data('current')+1);

            try {  analytics.track('FAQ','Click', 'Next question');  }catch(e) {}
        });

        $('#faq-container #close').live('click', function closeFAQ() {
            $('#faq-container').hide();
        });
        
        $('#faq-container #close,#faq-container .next,#faq-container .prev').on('touchstart', function(e) {
            $(this).click();
        });
        
        $('#faq h3').live('click', function faqClick() {
            
            about.changeQuestion(  $(this).data('index') );
        });
        /*
        $('#faq h3').click(function () {
            
            about.changeQuestion(  $(this).data('index') );
        });
        */
        
        $('.flexslider').flexslider({directionNav:false,slideshow:false, 'animation': 'slide'});

        $('.flexslider').each(function() {
            $(this).parent().append( $(this).find('.flex-control-nav') );    
        });
        
        $('#columns .faq .flex-control-nav a').live('click', function() {
            try {  analytics.track('FAQ','Click', 'Pagination');  }catch(e) {}
        });
        
        $('#columns .press .flex-control-nav a').live('click', function() {
            try {  analytics.track('FAQ','Click', 'Pagination');  }catch(e) {}
        });
        
        $("#faq-container").touchwipe({
             wipeLeft: function() { 
                 if( $('#faq-container').data('current') < $('#faq').data('faqs') ) {
                      about.changeQuestion(  $('#faq-container').data('current')+1 )
                  }
            },
                 
             wipeRight: function() { 
                 if( $('#faq-container').data('current') > 1 ) {
                      about.changeQuestion(  $('#faq-container').data('current')-1 )
                  }
             },
             min_move_x: 20,
             min_move_y: 20
        });
        
    } // call init on start
    
    this.changeQuestion = function(index) {
        
        
        $('#faq-container .header').html(  $('.title-'  + index ).html() );
        $('#faq-container .content').html( $('.answer-' + index ).html() );
        $('#faq-container .current').html(index);
        $('#faq-container').show();
        $('#faq-container').css('display', 'table-cell');
        $('#faq-container').data('current', index);
        
        $('#faq-container').css('top',  $('#header').height());
        $('#faq-container').css('bottom', $('#footer').height());
        
        
        if(index == 1) {
            $('#faq-container .prev').hide();
        }else{
            $('#faq-container .prev').show();        
        }

        if(index == $('#faq').data('faqs')) {
            $('#faq-container .next').hide();
        }else{
            $('#faq-container .next').show();        
        }    
        
        $('#faq-container .box').css('margin-top', ($('#faq-container .box').height()/2)*-1);
        
        try {  analytics.track('FAQ','View', $('.title-'  + index ).html() );  }catch(e) {}

        
    } // changequestion
} // about handler
/*
$('#zoom').click(function() {

    $('#magnifier').animate({
        opacity: 1
    }, 250);
});

$('#zoom').mouseenter(function() {
   $(this).find('.normal').hide(); 
});

$('#zoom').mouseleave(function() {
   $(this).find('.normal').show(); 
});
*/

var videoplayer = false;

function resizeMovie() {
    
    if(videoplayer) {
        
        
        if(touchSupport) {
            $('#moviecontainer,#moviecontainer-wrapper').css({
                  width: $(window).width(),
                  height: $(window).height()-$('#logo').height()-$('#footer').height()
               });
               
              $('#movie').css('background', 'transparent');
        }

        if(!touchSupport) {

            $('#movie').css('height', window_height-$('#footer').height()-$('#logo').height() );


            var top = 0;
            var left = 0;
            var controls_bottom = 0;

            var video_height   = window_width*0.415625;
            var video_width  = window_width;

            if( video_height < $('#movie').height() ) {
            
                video_height = $('#movie').height();
                video_width = video_height*2.406015;
            }
        
            // At least 70% of video must be shown
            if ( 1-(video_width-window_width)/video_width < 0.7 ) {
                video_height   = window_width*0.415625;
                video_width    = window_width;

            } 
            
            top = (($('#movie').height()-video_height))/2;
            
            if(top < 0) {
                controls_bottom = top*-1;
            }
            
            if( video_width > window_width ) {
                left = ((video_width-window_width)/2)*-1
            }
            
            if(ie7) {
                top = (parseInt(top)*-1)/2;
                
                if( top > -1 ) {
                    $('.vjs-default-skin .vjs-controls').css('top', video_height - 180 )
                }else{
                    $('.vjs-default-skin .vjs-controls').css('bottom', (top*-1) + 20)
                }
                
            }

            
            $('#moviecontainer').css({
                                            left:    left,
                                            top: top,
                                            height: video_height,
                                            width:  video_width
                                    });
            
                                                
            $('#moviecontainer-wrapper').css({
                height: $(window).height()-$('#logo').height()-1-$('#footer').height(), // $('#movie').height()
                width: window_width
            })
            
            
        }
    
        //$('.vjs-controls').css('bottom', $('#moviecontainer').height()-parseInt($('#moviecontainer').css('height'))-$('#footer').height()*-1);
       // $('.vjs-controls').css('bottom', controls_bottom);
    }
    
//    $('.vjs-controls').css('left', $('#moviecontainer').width()+left-$('.vjs-controls').width()-30  )    
  //  $('#playbutton').css('margin-top', -56+(-($('#footer').height()/2)));
    
    $('#scrolldown').css('bottom', $('#footer').height()+10);
}

function bounceScrollDown() {
    $('#scrolldown img,#loading-scrolldown img').animate({
        top: 40
      },1500, "easeOutSine", function() {
          setTimeout(function() {
              $('#scrolldown img,#loading-scrolldown img').animate({
                top: 20
              },1500,"easeOutSine", function() {
                  setTimeout(function() {
                      bounceScrollDown();
                  },100);
              });
          }, 100);

      });
}

$('#scrolldown').live('click', function(event) {

   $('#menu li.stuff').click();
   event.preventDefault();
});

bounceScrollDown();


$('#about ul#columns li.column.press a').live('click', function() {
    try {  analytics.track('In-Media','Click', $(this).html());  }catch(e) {}
});

$('#about ul#columns li.column.presskit a').live('click', function() {
    try {  analytics.track('Presskit','Click', $('.title-'  + index ).html());  }catch(e) {}
});

$('#pul').click(function(e) {
    $('#menu .about').click();
    $('.faq h3:contains("Swish fÃ¶ljer PUL")').click();
    e.preventDefault();
});

$("#pul").on('touchstart', function(e) {
        $(this).focus();
        $(this).click();
});

var vid = false;
/*
$( (ielte8 ? '#movie,':'') + '#movie .page-grid,#playbutton').click(function openMovie(e) {
        
        
        // ie8 doesnt handle z-index very well,
        // thus we check x/y pos of click to see if you clicked the scrolldown button
        if ( ielte8 ) {
            var offsetX = e.pageX-$('#scrolldown').position().left;
            var offsetY = e.pageY-$('#scrolldown').position().top;

            if( offsetX > -20 && offsetY > -5) {
                 $('#menu li.stuff').click();
                e.preventDefault();
                return;
            }
        }
        
        $('#moviecontainer').show(); 
        //
        $('#playbutton').hide();
        $('#scrolldown').hide();
         
        if(firefox) {
            $('#movie .page-grid').hide();
            $('#movie .shape').hide();
        }else{
            $('#movie .shape').fadeOut();
            $('#movie .page-grid').fadeOut();
        }
        
        $('#playbutton').click(function() {
           if(videoplayer) videoplayer.play(); 
        });
        
        if(videoplayer && safari) {
            videoplayer.play(); 
            $('#moviecontainer-wrapper').show(); 
          
            return;
        }
        
        var extra = "";
        
        if(touchSupport) {
            extra = ' width="'+parseInt($(window).width())+'" height="'+parseInt($(window).height()-$('#logo').height()-$('#footer').height())+'" '
        }
        
        if(touchSupport) {
            $('#moviecontainer,#moviecontainer-wrapper').css({
                  width: $(window).width(),
                  height: $(window).height()-$('#logo').height()-$('#footer').height()
               });
        }
        
        $('#moviecontainer-wrapper').css({
            background: 'black'
        })
           // Note to self, IE does not support Handbrake ffmpeg-version of mp4, only x264. 
           // ie needs full path
           var mp4string = 'https://www.getswish.com/video/video/Swish_packshot_no_logo-handbrake-x264-1500avg.mp4';

           if(android) {
               
               try{
                    var android_vs = parseInt(navigator.userAgent.split(/Android ([0-9]{1})\./g)[1])
               }catch(e) {
                   var android_vs  = 3;
               }
               if ( android_vs > 3 ) {
                   
                   var html = ' <video id="video" class="video-js vjs-default-skin"  width="731" height="304" autobuffer autplay poster="/oldsite/elements/snapshot.png"  controls onclick="this.play();">\
               	                <source src="/video/video/Swish_packshot_no_logo-handbrake-android-iphone-webopt.mp4">';
                   
                   $('#moviecontainer').html(html);
                   $('#video').css({
                       'z-index': 100000,
                       'height': '100%',
                       'width': '100%'
                   });
                   
                   resizeMovie();
                  
               }else{
                   
               
                   var html = '<video id="video" class="video-js vjs-default-skin" ' + extra+ ' controls poster="/oldsite/elements/snapshot.png" autoplay preload="none" data-setup="{}"> \
                                    <source type="video/mp4" src="' + mp4string + '">\
                                    <source type="video/ogg" src="https://www.getswish.com/video/video/Swish_packshot_no_logo.mov.ff.ogv">\
                                    <source type="video/webm" src="https://www.getswish.com/video/video/Swish_packshot_no_logo.mov.ff.webm">\
                                </video>\
                                <script src="/video/videojs/video.js"></script>';

                       $('#moviecontainer').html(html);
                       videoplayer = _V_("video");

                       videoplayer.src([
                         { src: mp4string },
                         { type: "video/webm", src: "https://www.getswish.com/video/video/Swish_packshot_no_logo.mov.ff.webm" },
                       ]);
                   
                       vid = document.getElementById('video');
                       vid.addEventListener('click',function(){
                         vid.play();
                       },false);
                  
                 }
                 
           
           }else{
               var html = '	<video id="video" class="video-js vjs-default-skin" ' + extra+ ' controls poster="/oldsite/elements/snapshot.png" autoplay preload="none" data-setup="{}"> \
                  <source type="video/ogg" src="https://www.getswish.com/video/video/Swish_packshot_no_logo.mov.ff.ogv">\
                  <source type="video/webm" src="https://www.getswish.com/video/video/Swish_packshot_no_logo.mov.ff.webm">\
                  <source type="video/mp4" src="' + mp4string + '">\
                             </video>\
                               <script src="/video/videojs/video.js"></script>';

                   $('#moviecontainer').html(html);
                   videoplayer = _V_("video");



                   videoplayer.src([
                     { type: "video/ogg", src: "https://www.getswish.com/video/video/Swish_packshot_no_logo.mov.ff.ogv" },
                     { type: "video/webm", src: "https://www.getswish.com/video/video/Swish_packshot_no_logo.mov.ff.webm" },
                     { type: "video/mp4", src: mp4string }
                   ]);
           }

           
            
            
            
            if(touchSupport) {
                $('video')[0].addEventListener('webkitendfullscreen', function() {
                     $('#moviecontainer').hide(); 
                     $('#movie .shape').fadeIn();
                     $('#playbutton').show();
                     
                     $('#moviecontainer-wrapper').css({
                         background: 'transparent'
                     })
                     
                      $('.touchSupport #movie').css({
                          'background-image': 'url(/images/bg/devices/iphone/movie-portrait.jpg)',
                          'background-size': 'cover'
                      })
                     
                     
                });
            }
        
            videoplayer.addEvent("pause", function() {
                if(!touchSupport) $('#playbutton').show();
            });
            
            videoplayer.addEvent("play", function() {
                if(!touchSupport) $('#playbutton').hide();
            });
            
            if(touchSupport) {
               if(safari) $('video')[0].webkitRequestFullScreen();
            }
            
            videoplayer.ready(function(){
                  var myPlayer = this;
                  resizeMovie();
            });

            try {  analytics.track('Movie', 'Play');  }catch(e) {}


            $('#movie,#movie .page-grid').unbind('click');
    
            // IE < 8 has problems with click-through.
            if(ielte8) {
                $('#movie').click(function(e) {
                    
                    
                    
                    var offsetX = e.pageX-$('.vjs-default-skin .vjs-controls').position().left;
                    var offsetY = e.pageY-$('.vjs-default-skin .vjs-controls').position().top;

                    if( offsetX > 0 && offsetY > 0 ) {
                        
                        if(offsetX < 90) {
                            if( $('#movie .video-js').hasClass("vjs-playing") ) {
                                videoplayer.pause();
                            }else{
                                videoplayer.play();
                            }
                        }else{
                            if(videoplayer.volume() < 0.5) {
                                videoplayer.volume(1)
                            }else{
                                videoplayer.volume(0)
                            }
                        }
                        
                        return; // click on movie controls
                    }
                    
                    if( $('#movie .video-js').hasClass("vjs-playing") ) {
                        videoplayer.pause();
                    }else{
                        videoplayer.play();
                    }
                })
            }
});

if(ielte8) {
      $('#movie').mouseenter(function() {
          $('#playbutton').addClass('hover');
      }).mouseleave(function() {
          $('#playbutton').removeClass('hover');          
      })
}  

*/


$('#playbutton').hide();