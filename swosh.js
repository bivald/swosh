/* Touch, background size, yepnope, media queries */
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: https://www.modernizr.com/download/#-fontface-backgroundsize-borderimage-touch-shiv-mq-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){i.cssText=a}function B(a,b){return A(l.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a)if(i[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),e=(a+" "+n.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.5.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),k.appendChild(j);return h=["&#173;","<style>",a,"</style>"].join(""),k.id=g,m.innerHTML+=h,m.appendChild(k),l||(m.style.background="",f.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},w=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return v("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e});var H=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch||(j.touch&&j.touch.offsetTop)===9,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",l.join("touch-enabled),("),g,")","{#touch{top:9px;position:absolute}}"].join("")],["fontface","touch"]);p.touch=function(){return e.touch},p.backgroundsize=function(){return G("backgroundSize")},p.borderimage=function(){return G("borderImage")},p.fontface=function(){return e.fontface};for(var I in p)z(p,I)&&(u=I.toLowerCase(),e[u]=p[I](),s.push((e[u]?"":"no-")+u));return A(""),h=j=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.mq=w,e.hasEvent=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=v,e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

var touchSupport  = Modernizr.touch;
var ielt8         = ($.browser.msie && $.browser.version < 8);
var ielte8        = ($.browser.msie && $.browser.version <= 8);
var iee8          = ($.browser.msie && $.browser.version == 8);
var bgSizeSupport = Modernizr.backgroundsize;

var DEBUG = false;
var handheld = false;

if( $.browser.safari ) {
    $.browser.safari = ( $.browser.safari && /chrome/.test(navigator.userAgent.toLowerCase())) ? false : true;
    $.browser.safari = ( $.browser.safari && !touchSupport ) ? true : false;
}

if(touchSupport) {
    $('body').addClass("touchSupport");
}else{
    $('body').addClass("noTouchSupport");
    $('body').addClass("loading");
}

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

if($.browser.msie) {
    $('body').addClass("is-ie");
}else{
    $('body').addClass("not-ie");
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
}

// Global variables regarding scroll and resize
var prevPos                 = 0;
var DIRECTION_DOWN          = 1;
var DIRECTION_UP            = 2;
var DIRECTIONS              = {1: "DOWN", 2: "UP"}
var $container              = $('#container') 
var oldCurrentFramePercent  = 0.01;
var oldCurrentFramePhonePercent = 0.01;
var window_height;
var window_width;
var container_width;
var container_height;
var animloopPrev            = 0; 
var forceUpdate             = false;
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
var ANIMATION_FIXED_START   = 7;
var ANIMATION_FIXED_END     = 8;
var ANIMATION_SIZE          = 9;

var animations_types = {1: 'ANIMATION_FRAMES', 2: 'ANIMATION_POSITION', 3: 'ANIMATION_OPACITY', 4: 'ANIMATION_ROTATE', 5: 'ANIMATION_MOVEBG', 6: 'ANIMATION_BLANK', 7: 'ANIMATION_FIXED_START', 8: 'ANIMATION_FIXED_END', 9: 'ANIMATION_SIZE'}

function animatorHandler() {
    
    this.startAnimations = function() {

            if(is_mobile || touchSupport) {
                return;
            }
        
            if( $.browser.msie && $.browser.version < 9) {
                return;
            }

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
                var offset         = $(window).scrollTop();

                // Don't trigger a animation-recalculation if the value hasn't changed
                if( animloopPrev == offset && forceUpdate == false) 
                return;

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
            /*
            animation.countFromElementHeight      = $(animation.countFromElement).height();

            if( parseInt(animation.countFromElement) ) {
                animation.countFromElementPositionTop = parseInt(animation.countFromElement);
            }else{
                animation.countFromElementPositionTop = $(animation.countFromElement).position().top;
            }

            animation['JqueryCountFromElement'] = $(animation.countFromElement);
            */
            animation['jQueryMoveElement']      = $(animation.moveElement);

            if ( animation.translateCoordinates == undefined ) {
                animation.translateCoordinates = true;
            }

            if ( animation.init ) {
                if(DEBUG) console.log("Calling init");
                animation.init.call(this)
            }

            // Force hardware acceleration when possible
            if( $(animation.element).length > 0 ) {
                $(animation.element).css({
                    'transform': 'translate3d(0, 0, 0)',
                    '-ms-transform': 'translate3d(0, 0, 0)',
                    '-o-transform': 'translate3d(0, 0, 0)',
                    '-webkit-transform': 'translate3d(0, 0, 0)',
                })
            }

            if( $(animation.moveElement).length > 0 ) {
                $(animation.moveElement).css({
                    'transform': 'translate3d(0, 0, 0)',
                    '-ms-transform': 'translate3d(0, 0, 0)',
                    '-o-transform': 'translate3d(0, 0, 0)',
                    '-webkit-transform': 'translate3d(0, 0, 0)',
                })
            }
        }
                
        forceUpdate = true;
        // Allow the browser to update DOM before preloading more
    } //  init()
   
    
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
    
    var hostnames = ['http://www.identityworks.se','http://www.identityworks.se','http://www.identityworks.se','http://www.identityworks.se'];
    var hostnames_length = hostnames.length;
    
    this.preloadImages = function() {

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
                    
                    var temphtml = "<img src='" + hostnames[deltare] + animation.folder + i + "." + animation.fileFormat + "' class='frame frame" + i + " " + css + "'>\n";
                    
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
                
            }, 500);
        }

        setTimeout(animator.checkForComplete, 750);
    },
    
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
         
         if( $completed[0] == $('.frame.buffer0').length) {
              if( animator.initiated == false ) {
                  $('body').removeClass('loading');   
                  animator.initiated = true;
                  
                  setTimeout(function() {
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

        window_height = $(window).height();

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
            
            /*if( animation['countFromElement'] == undefined ) {
                continue;
            }*/
            
            if( animation.disabled ) {
                continue;
            }
            
            $animationTarget = $(animation.element);

            var current_position      =  pos;

            if( current_position > animation.startAtPixel && current_position < animation.endAtPixel) {

                if(direction == DIRECTION_DOWN) {
                    animation.data['afterDoneFired'] = false;
                    animation.data['afterResetFired'] = false;
                }

                animation.data['initialized'] = true;

                var start   = animation.startAtPixel;
                var end     = animation.endAtPixel;

                var percentOfAnimationDone = (current_position-start)/(end-start);

                if (DEBUG) console.log(animation.name + "\nType:               " + animations_types[animation.type] + ", \nAnimation done %:   " + (Math.round((percentOfAnimationDone*100)*1000000000)/1000000000).toString().substr(0,10) + "  (percentOfAnimationDone), \n Trigger:            " + animation.startAtPercent + "-" + animation.endAtPercent + "(animation.startAtPercent - animation.endAtPercent)")

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
                        var animation_left = animation.left;

                        var pixelsToTravel = start_left-animation_left;
                        var newCurrentLeft = start_left-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentLeft + " (newCurrentLeft)" + "\n" +start_left + " (animation.start['left'])\n" + animation_left + " (animation.left)");
                        //$animationTarget.css('left', newCurrentLeft);
                        animator.moveToRelativeLeft($animationTarget, newCurrentLeft, animation.translateCoordinates, animation.isMargin);
                    }
                    
                    if( animation.right !== undefined ) {
                        
                        var start_right = animation.start['right'];
                        var animation_right = animation.right;
                        
                        var pixelsToTravel = start_right-animation_right;
                        var newCurrentLeft = start_right-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentLeft + " (newCurrentLeft)" + "\n" +start_right + " (animation.start['left'])\n" + animation_right + " (animation.left)");
                        //$animationTarget.css('left', newCurrentLeft);
                        animator.moveToRelativeRight($animationTarget, newCurrentLeft, animation.translateCoordinates, animation.isMargin);
                    }

                    if( animation.top !== undefined ) {
                        var pixelsToTravel = animation.start['top']-animation.top;
                        var newCurrentTop = animation.start['top']-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentTop + " (newCurrentTop)")
                        //$animationTarget.css('top', newCurrentTop);
                        animator.moveToRelativeTop($animationTarget, newCurrentTop, animation.translateCoordinates, animation.isMargin);
                    }

                    if( animation.bottom !== undefined ) {
                        var pixelsToTravel = animation.start['bottom']-animation.bottom;
                        var newCurrentBottom = animation.start['bottom']-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentBottom + " (newCurrentBottom)")
                        //$animationTarget.css('top', newCurrentTop);
                        animator.moveToRelativeBottom($animationTarget, newCurrentBottom, animation.translateCoordinates, animation.isMargin);
                    }


                } /* if animation.type == position */

                if ( animation.type == ANIMATION_SIZE ) {

                    if( animation.width !== undefined ) {
                        
                        var start_width = animation.start['width'];
                        var animation_width = animation.width;

                        var pixelsToTravel = start_width-animation_width;
                        var newCurrentWidth = start_width-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentWidth + " (newCurrentWidth)" + "\n" +start_width + " (animation.start['width'])\n" + animation_left + " (animation.left)");
                        //$animationTarget.css('left', newCurrentLeft);
                        $animationTarget.css('width', newCurrentWidth);
                    }
                    
                    if( animation.height !== undefined ) {
                        var start_height = animation.start['height'];
                        var animation_height = animation.height;

                        var pixelsToTravel = start_height-animation_height;
                        var newCurrentHeight = start_height-(pixelsToTravel*percentOfAnimationDone);

                        if (DEBUG) console.log(pixelsToTravel + " (pixelsToTravel)\n" + newCurrentHeight + " (newCurrentHeight)" + "\n" +start_height + " (animation.start['height'])\n" + animation_left + " (animation.left)");
                        //$animationTarget.css('left', newCurrentLeft);
                        $animationTarget.css('height', newCurrentHeight);
                    }


                } /* if animation.type == size */

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
            if( current_position > animation.endAtPixel && (!animation.data['afterDoneFired'] || animation.data['afterDoneFired'] == undefined ) && direction == DIRECTION_DOWN ) {

                if ( animation.type == ANIMATION_FRAMES ) {
                    animator.showFrame($animationTarget, animation.endFrame);
                }

                if ( animation.type == ANIMATION_OPACITY ) {
                    animator.setOpacity($animationTarget,animation.opacity);
                }

                if ( animation.type == ANIMATION_ROTATE ) {
                    $animationTarget.rotate(animation.rotateTo)
                }

                if ( animation.type == ANIMATION_FIXED_START ) {

                    var height = $(animation.element).height();
                    $('body').css('height', height);
                    $('body').css('width', '100%');

                    // save scrolling position for later
                    $(animation.element).data('scrollTop', $(window).scrollTop())

                    // move the entire body upwards to account for position fixed
                    $(animation.element).css('top', -$(window).scrollTop() + "px");
                    $(animation.element).css('position', 'fixed');
                    $(animation.element).css('width', '100%');

                }

                if ( animation.type == ANIMATION_FIXED_END ) {
                    var scroll = $(window).scrollTop(); 
                    var fixScroll = false;
                    // Restore the body elements to the (now fake) position we had before the fixed began
                    // We use this by setting the position to relative and moving the position top
                    // corresponding to the scroll. If we didn't do this we would be at position X again and
                    // the animation would trigger again and again. This tricks the page thinking we've actually 
                    // scrolled down the X pixels of our position fixed animation
                    //
                    // This is tricky, we would like to not do this since it messes with the scrollbar
                    //  
                    var diff = scroll-$(animation.element).data('scrollTop');
                    
                    // The diff should be the start X of the fixed animation
                    // If it isn't (i.e = 0) it means that the user has refreshed after scrolling down
                    // 

                    if ( diff < 100 ) {
                        fixScroll = true; 
                        diff = $(animation.countFromElement).offset().top - $(animation.countFromElement).height();
                    }

                    $('body').css('height', '100%');
                    $(animation.element).css('top', diff);
                    $(animation.element).css('position', 'relative');

                    // We've scrolled down to fast, we need to adjust the scroll
                    // 
                    if( fixScroll ) {
                        $(window).scrollTop( $(window).scrollTop()+diff )
                    }
                }

                if ( animation.type == ANIMATION_SIZE ) {

                    if( animation.width !== undefined ) {
                        $animationTarget.css('width', animation.width);
                    }
                    
                    if( animation.height !== undefined ) {
                        $animationTarget.css('height', animation.height);
                    }
                } /* if animation.type == size */

                if ( animation.type == ANIMATION_POSITION ) {
                    if( animation.left !== undefined ) {
                        //$animationTarget.css('left', animation.left);
                        animator.moveToRelativeLeft($animationTarget, animation.left, animation.translateCoordinates, animation.isMargin);
                    }  
                    
                     if( animation.right !== undefined ) {
                            //$animationTarget.css('left', animation.left);
                            animator.moveToRelativeRight($animationTarget, animation.right, animation.translateCoordinates, animation.isMargin);
                        }    
                      

                    if( animation.top !== undefined ) {
                        //$animationTarget.css('top', animation.top);
                        animator.moveToRelativeTop($animationTarget, animation.top, animation.translateCoordinates, animation.isMargin);
                    }

                    if( animation.bottom !== undefined ) {
                        //$animationTarget.css('top', animation.top);
                        animator.moveToRelativeBottom($animationTarget, animation.bottom, animation.translateCoordinates, animation.isMargin);
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
            // Before..
            if ( current_position < animation.startAtPixel && ( !animation.data['afterResetFired'] || animation.data['afterResetFired'] == undefined ) && direction == DIRECTION_UP && ( (animation.data['initialized'] && animation.data['initialized'] !== undefined ) || (animation.data['afterDoneFired']))) {

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
                        animator.moveToRelativeRight($animationTarget, animation.start['right'], animation.translateCoordinates, animation.isMargin);
                    }

                    if( animation.left !== undefined ) {
                        //$animationTarget.css('left', animation.start['left']);
                        animator.moveToRelativeLeft($animationTarget, animation.start['left'], animation.translateCoordinates, animation.isMargin);
                    }         

                    if( animation.top !== undefined ) {
                        //$animationTarget.css('top', animation.start['top']);
                        animator.moveToRelativeTop($animationTarget, animation.start['top'], animation.translateCoordinates, animation.isMargin);
                    }   

                    if( animation.bottom !== undefined ) {
                        //$animationTarget.css('bottom', animation.start['bottom']);
                        animator.moveToRelativeBottom($animationTarget, animation.start['bottom'], animation.translateCoordinates, animation.isMargin);
                    }

                } /* if animation.type == position */

                if ( animation.type == ANIMATION_SIZE ) {

                    if( animation.width !== undefined ) {
                        $animationTarget.css('width', animation.start['width']);
                    }
                    
                    if( animation.height !== undefined ) {
                        $animationTarget.css('height', animation.start['height']);
                    }
                } /* if animation.type == size */

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

                if ( animation.type == ANIMATION_FIXED_START ) {
                    $('body #fake-body').css('position', 'relative');
                    $('body #fake-body').css('top', '0');
                }

                if ( animation.type == ANIMATION_FIXED_END ) {
                    var height = $(animation.element).height();
                    $('body').css('height', height);
                    $('body').css('width', '100%');
                    $(animation.element).css('top', -( $(window).scrollTop() - parseInt($(animation.element).css('top')) ) + "px");
                    $(animation.element).css('position', 'fixed');
                    $(animation.element).css('width', '100%');
                }

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

    this.moveToRelativeLeft = function(obj,left, translateCoordinates, isMargin) {
        $obj = obj;
        if(isMargin) {
            $obj.css('margin-left',  left);     
        }else{
            $obj.css('left',  left);            
        }
        $obj.data('left', left);
    }
    
    this.moveToRelativeRight = function(obj,right, translateCoordinates, isMargin) {
        $obj = obj;
        if(isMargin) {
            $obj.css('margin-right',  right);     
        }else{
            $obj.css('right',  right);            
        }
        $obj.data('left', right);
    }

    this.moveToRelativeMarginLeft = function(obj,left,translateCoordinates) {
        $obj = obj;
        $obj.css('margin-left',  left);
        $obj.data('margin-left', left);
    }
    
    this.moveToRelativeTop = function(obj,top, translateCoordinates, isMargin) {
        $obj = obj;

        if(isMargin) {
            $obj.css('margin-top',  top);     
        }else{
            $obj.css('top',  top);            
        }

        $obj.data('top', top);    
    }


    this.moveToRelativeBottom = function(obj,bottom, translateCoordinates, isMargin) {
        $obj = obj;

        if(isMargin) {
            $obj.css('margin-bottom',  bottom);     
        }else{
            $obj.css('bottom',  bottom);            
        }

        $obj.data('bottom', bottom);    
    }

    /* legacy */
    this.pixelToPercentPixel = function(px) {
        return px;
    }
}