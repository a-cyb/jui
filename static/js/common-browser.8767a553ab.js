!function(t,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():t.Headroom=e()}(this,function(){"use strict";var t={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};function e(t){this.callback=t,this.ticking=!1}function n(t,e){var i;e=function t(e){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var i,n,o,r=e||{};for(n=1;n<arguments.length;n++){var s=arguments[n]||{};for(i in s)"object"!=typeof r[i]||(o=r[i])&&"undefined"!=typeof window&&(o===window||o.nodeType)?r[i]=r[i]||s[i]:r[i]=t(r[i],s[i])}return r}(e,n.options),this.lastKnownScrollY=0,this.elem=t,this.tolerance=(i=e.tolerance)===Object(i)?i:{down:i,up:i},this.classes=e.classes,this.offset=e.offset,this.scroller=e.scroller,this.initialised=!1,this.onPin=e.onPin,this.onUnpin=e.onUnpin,this.onTop=e.onTop,this.onNotTop=e.onNotTop,this.onBottom=e.onBottom,this.onNotBottom=e.onNotBottom}return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,e.prototype={constructor:e,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},n.prototype={constructor:n,init:function(){if(n.cutsTheMustard)return this.debouncer=new e(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var t=this.classes;for(var e in this.initialised=!1,t)t.hasOwnProperty(e)&&this.elem.classList.remove(t[e]);this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var t=this.elem.classList,e=this.classes;!t.contains(e.pinned)&&t.contains(e.unpinned)||(t.add(e.unpinned),t.remove(e.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var t=this.elem.classList,e=this.classes;t.contains(e.unpinned)&&(t.remove(e.unpinned),t.add(e.pinned),this.onPin&&this.onPin.call(this))},top:function(){var t=this.elem.classList,e=this.classes;t.contains(e.top)||(t.add(e.top),t.remove(e.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notTop)||(t.add(e.notTop),t.remove(e.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.bottom)||(t.add(e.bottom),t.remove(e.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var t=this.elem.classList,e=this.classes;t.contains(e.notBottom)||(t.add(e.notBottom),t.remove(e.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(t){return Math.max(t.offsetHeight,t.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,e.scrollHeight,t.offsetHeight,e.offsetHeight,t.clientHeight,e.clientHeight)},getElementHeight:function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(t){var e=t<0,i=t+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return e||i},toleranceExceeded:function(t,e){return Math.abs(t-this.lastKnownScrollY)>=this.tolerance[e]},shouldUnpin:function(t,e){var i=t>this.lastKnownScrollY,n=t>=this.offset;return i&&n&&e},shouldPin:function(t,e){var i=t<this.lastKnownScrollY,n=t<=this.offset;return i&&e||n},update:function(){var t=this.getScrollY(),e=t>this.lastKnownScrollY?"down":"up",i=this.toleranceExceeded(t,e);this.isOutOfBounds(t)||(t<=this.offset?this.top():this.notTop(),t+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(t,i)?this.unpin():this.shouldPin(t,i)&&this.pin(),this.lastKnownScrollY=t)}},n.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},n.cutsTheMustard=void 0!==t&&t.rAF&&t.bind&&t.classList,n}),function(){"use strict";function e(t){if(!t)throw new Error("No options passed to Waypoint constructor");if(!t.element)throw new Error("No element option passed to Waypoint constructor");if(!t.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+i,this.options=e.Adapter.extend({},e.defaults,t),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,i+=1}var i=0,r={};e.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},e.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(t){var e=[];for(var i in r)e.push(r[i]);for(var n=0,o=e.length;n<o;n++)e[n][t]()},e.destroyAll=function(){e.invokeAll("destroy")},e.disableAll=function(){e.invokeAll("disable")},e.enableAll=function(){e.invokeAll("enable")},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},e.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){"use strict";function e(t){window.setTimeout(t,1e3/60)}function i(t){this.element=t,this.Adapter=g.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+n,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,n+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var n=0,o={},g=window.Waypoint,t=window.onload;i.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},i.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},i.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,g.requestAnimationFrame(t))})},i.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||g.isTouch)&&(e.didScroll=!0,g.requestAnimationFrame(t))})},i.prototype.handleResize=function(){g.Context.refreshAll()},i.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var n=e[i],o=n.newScroll>n.oldScroll?n.forward:n.backward;for(var r in this.waypoints[i]){var s=this.waypoints[i][r],a=n.oldScroll<s.triggerPoint,l=n.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(o),t[s.group.id]=s.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},i.prototype.innerHeight=function(){return this.element==this.element.window?g.viewportHeight():this.adapter.innerHeight()},i.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},i.prototype.innerWidth=function(){return this.element==this.element.window?g.viewportWidth():this.adapter.innerWidth()},i.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var n=0,o=t.length;n<o;n++)t[n].destroy()},i.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),n={};for(var o in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var r=t[o];for(var s in this.waypoints[o]){var a,l,c,u,h=this.waypoints[o][s],d=h.options.offset,f=h.triggerPoint,p=0,m=null==f;h.element!==h.element.window&&(p=h.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(h):"string"==typeof d&&(d=parseFloat(d),-1<h.options.offset.indexOf("%")&&(d=Math.ceil(r.contextDimension*d/100))),a=r.contextScroll-r.contextOffset,h.triggerPoint=p+a-d,l=f<r.oldScroll,c=h.triggerPoint>=r.oldScroll,u=!l&&!c,!m&&(l&&c)?(h.queueTrigger(r.backward),n[h.group.id]=h.group):!m&&u?(h.queueTrigger(r.forward),n[h.group.id]=h.group):m&&r.oldScroll>=h.triggerPoint&&(h.queueTrigger(r.forward),n[h.group.id]=h.group)}}return g.requestAnimationFrame(function(){for(var t in n)n[t].flushTriggers()}),this},i.findOrCreateByElement=function(t){return i.findByElement(t)||new i(t)},i.refreshAll=function(){for(var t in o)o[t].refresh()},i.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){t&&t(),i.refreshAll()},g.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},g.Context=i}(),function(){"use strict";function s(t,e){return t.triggerPoint-e.triggerPoint}function a(t,e){return e.triggerPoint-t.triggerPoint}function e(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}var i={vertical:{},horizontal:{}},n=window.Waypoint;e.prototype.add=function(t){this.waypoints.push(t)},e.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},e.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],i="up"===t||"left"===t;e.sort(i?a:s);for(var n=0,o=e.length;n<o;n+=1){var r=e[n];(r.options.continuous||n===e.length-1)&&r.trigger([t])}}this.clearTriggerQueues()},e.prototype.next=function(t){this.waypoints.sort(s);var e=n.Adapter.inArray(t,this.waypoints);return e===this.waypoints.length-1?null:this.waypoints[e+1]},e.prototype.previous=function(t){this.waypoints.sort(s);var e=n.Adapter.inArray(t,this.waypoints);return e?this.waypoints[e-1]:null},e.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},e.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);-1<e&&this.waypoints.splice(e,1)},e.prototype.first=function(){return this.waypoints[0]},e.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},e.findOrCreate=function(t){return i[t.axis][t.name]||new e(t)},n.Group=e}(),function(){"use strict";function i(t){this.$element=n(t)}var n=window.jQuery,t=window.Waypoint;n.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(t,e){i.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),n.each(["extend","inArray","isEmptyObject"],function(t,e){i[e]=n[e]}),t.adapters.push({name:"jquery",Adapter:i}),t.Adapter=i}(),function(){"use strict";function t(n){return function(){var e=[],i=arguments[0];return n.isFunction(arguments[0])&&((i=n.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var t=n.extend({},i,{element:this});"string"==typeof t.context&&(t.context=n(this).closest(t.context)[0]),e.push(new o(t))}),e}}var o=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),window.Modernizr=function(n,h,s){function i(t){m.cssText=t}function r(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var i in t){var n=t[i];if(!o(n,"-")&&m[n]!==s)return"pfx"!=e||n}return!1}function l(t,e,i){var n=t.charAt(0).toUpperCase()+t.slice(1),o=(t+" "+x.join(n+" ")+n).split(" ");return r(e,"string")||r(e,"undefined")?a(o,e):function(t,e,i){for(var n in t){var o=e[t[n]];if(o!==s)return!1===i?t[n]:r(o,"function")?o.bind(i||e):o}return!1}(o=(t+" "+S.join(n+" ")+n).split(" "),e,i)}var t,c,u,d={},f=h.documentElement,p="modernizr",e=h.createElement(p),m=e.style,g=h.createElement("input"),y=":)",v={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),b="Webkit Moz O ms",x=b.split(" "),S=b.toLowerCase().split(" "),E="http://www.w3.org/2000/svg",k={},T={},A={},P=[],j=P.slice,C=function(t,e,i,n){var o,r,s,a,l=h.createElement("div"),c=h.body,u=c||h.createElement("body");if(parseInt(i,10))for(;i--;)(s=h.createElement("div")).id=n?n[i]:p+(i+1),l.appendChild(s);return o=["&#173;",'<style id="s',p,'">',t,"</style>"].join(""),l.id=p,(c?l:u).innerHTML+=o,u.appendChild(l),c||(u.style.background="",u.style.overflow="hidden",a=f.style.overflow,f.style.overflow="hidden",f.appendChild(u)),r=e(l,t),c?l.parentNode.removeChild(l):(u.parentNode.removeChild(u),f.style.overflow=a),!!r},H=(u={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"},function(t,e){e=e||h.createElement(u[t]||"div");var i=(t="on"+t)in e;return i||(e.setAttribute||(e=h.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(t,""),i=r(e[t],"function"),r(e[t],"undefined")||(e[t]=s),e.removeAttribute(t))),e=null,i}),W={}.hasOwnProperty;for(var B in c=r(W,"undefined")||r(W.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return W.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(n){var o=this;if("function"!=typeof o)throw new TypeError;var r=j.call(arguments,1),s=function(){if(this instanceof s){var t=function(){};t.prototype=o.prototype;var e=new t,i=o.apply(e,r.concat(j.call(arguments)));return Object(i)===i?i:e}return o.apply(n,r.concat(j.call(arguments)))};return s}),k.flexbox=function(){return l("flexWrap")},k.canvas=function(){var t=h.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},k.canvastext=function(){return!!d.canvas&&!!r(h.createElement("canvas").getContext("2d").fillText,"function")},k.webgl=function(){return!!n.WebGLRenderingContext},k.touch=function(){var e;return"ontouchstart"in n||n.DocumentTouch&&h instanceof DocumentTouch?e=!0:C(["@media (",w.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){e=9===t.offsetTop}),e},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!n.postMessage},k.websqldatabase=function(){return!!n.openDatabase},k.indexedDB=function(){return!!l("indexedDB",n)},k.hashchange=function(){return H("hashchange",n)&&(h.documentMode===s||7<h.documentMode)},k.history=function(){return!!n.history&&!!history.pushState},k.draganddrop=function(){var t=h.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},k.websockets=function(){return"WebSocket"in n||"MozWebSocket"in n},k.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),o(m.backgroundColor,"rgba")},k.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),o(m.backgroundColor,"rgba")||o(m.backgroundColor,"hsla")},k.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(m.background)},k.backgroundsize=function(){return l("backgroundSize")},k.borderimage=function(){return l("borderImage")},k.borderradius=function(){return l("borderRadius")},k.boxshadow=function(){return l("boxShadow")},k.textshadow=function(){return""===h.createElement("div").style.textShadow},k.opacity=function(){return t="opacity:.55",i(w.join(t+";")+(e||"")),/^0.55$/.test(m.opacity);var t,e},k.cssanimations=function(){return l("animationName")},k.csscolumns=function(){return l("columnCount")},k.cssgradients=function(){var t="background-image:";return i((t+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+t)+w.join("linear-gradient(left top,#9f9, white);"+t)).slice(0,-t.length)),o(m.backgroundImage,"gradient")},k.cssreflections=function(){return l("boxReflect")},k.csstransforms=function(){return!!l("transform")},k.csstransforms3d=function(){var i=!!l("perspective");return i&&"webkitPerspective"in f.style&&C("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,e){i=9===t.offsetLeft&&3===t.offsetHeight}),i},k.csstransitions=function(){return l("transition")},k.fontface=function(){var r;return C('@font-face {font-family:"font";src:url("https://")}',function(t,e){var i=h.getElementById("smodernizr"),n=i.sheet||i.styleSheet,o=n?n.cssRules&&n.cssRules[0]?n.cssRules[0].cssText:n.cssText||"":"";r=/src/i.test(o)&&0===o.indexOf(e.split(" ")[0])}),r},k.generatedcontent=function(){var e;return C(["#",p,"{font:0/0 a}#",p,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=3<=t.offsetHeight}),e},k.video=function(){var t=h.createElement("video"),e=!1;try{(e=!!t.canPlayType)&&((e=new Boolean(e)).ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(t){}return e},k.audio=function(){var t=h.createElement("audio"),e=!1;try{(e=!!t.canPlayType)&&((e=new Boolean(e)).ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),e.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),e.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),e.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return e},k.localstorage=function(){try{return localStorage.setItem(p,p),localStorage.removeItem(p),!0}catch(t){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(p,p),sessionStorage.removeItem(p),!0}catch(t){return!1}},k.webworkers=function(){return!!n.Worker},k.applicationcache=function(){return!!n.applicationCache},k.svg=function(){return!!h.createElementNS&&!!h.createElementNS(E,"svg").createSVGRect},k.inlinesvg=function(){var t=h.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==E},k.smil=function(){return!!h.createElementNS&&/SVGAnimate/.test(v.call(h.createElementNS(E,"animate")))},k.svgclippaths=function(){return!!h.createElementNS&&/SVGClipPath/.test(v.call(h.createElementNS(E,"clipPath")))},k)c(k,B)&&(t=B.toLowerCase(),d[t]=k[B](),P.push((d[t]?"":"no-")+t));return d.input||(d.input=function(t){for(var e=0,i=t.length;e<i;e++)A[t[e]]=t[e]in g;return A.list&&(A.list=!!h.createElement("datalist")&&!!n.HTMLDataListElement),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(t){for(var e,i,n,o=0,r=t.length;o<r;o++)g.setAttribute("type",i=t[o]),(e="text"!==g.type)&&(g.value=y,g.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&g.style.WebkitAppearance!==s?(f.appendChild(g),e=(n=h.defaultView).getComputedStyle&&"textfield"!==n.getComputedStyle(g,null).WebkitAppearance&&0!==g.offsetHeight,f.removeChild(g)):/^(search|tel)$/.test(i)||(e=/^(url|email)$/.test(i)?g.checkValidity&&!1===g.checkValidity():g.value!=y)),T[t[o]]=!!e;return T}("search tel url email datetime date month week time datetime-local number range color".split(" "))),d.addTest=function(t,e){if("object"==typeof t)for(var i in t)c(t,i)&&d.addTest(i,t[i]);else{if(t=t.toLowerCase(),d[t]!==s)return d;e="function"==typeof e?e():e,f.className+=" "+(e?"":"no-")+t,d[t]=e}return d},i(""),e=g=null,function(t,l){function c(){var t=p.elements;return"string"==typeof t?t.split(" "):t}function u(t){var e=a[t[n]];return e||(e={},s++,t[n]=s,a[s]=e),e}function h(t,e,i){return e||(e=l),f?e.createElement(t):(i||(i=u(e)),(n=i.cache[t]?i.cache[t].cloneNode():r.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t)).canHaveChildren&&!o.test(t)?i.frag.appendChild(n):n);var n}function e(t){t||(t=l);var e,i,n,o,r,s,a=u(t);return p.shivCSS&&!d&&!a.hasCSS&&(a.hasCSS=(o="article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}",r=(n=t).createElement("p"),s=n.getElementsByTagName("head")[0]||n.documentElement,r.innerHTML="x<style>"+o+"</style>",!!s.insertBefore(r.lastChild,s.firstChild))),f||(e=t,(i=a).cache||(i.cache={},i.createElem=e.createElement,i.createFrag=e.createDocumentFragment,i.frag=i.createFrag()),e.createElement=function(t){return p.shivMethods?h(t,e,i):i.createElem(t)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(t){return i.createElem(t),i.frag.createElement(t),'c("'+t+'")'})+");return n}")(p,i.frag)),t}var d,f,i=t.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",s=0,a={};!function(){try{var t=l.createElement("a");t.innerHTML="<xyz></xyz>",d="hidden"in t,f=1==t.childNodes.length||function(){l.createElement("a");var t=l.createDocumentFragment();return void 0===t.cloneNode||void 0===t.createDocumentFragment||void 0===t.createElement}()}catch(t){f=d=!0}}();var p={elements:i.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==i.shivCSS,supportsUnknownElements:f,shivMethods:!1!==i.shivMethods,type:"default",shivDocument:e,createElement:h,createDocumentFragment:function(t,e){if(t||(t=l),f)return t.createDocumentFragment();for(var i=(e=e||u(t)).frag.cloneNode(),n=0,o=c(),r=o.length;n<r;n++)i.createElement(o[n]);return i}};t.html5=p,e(l)}(this,h),d._version="2.6.2",d._prefixes=w,d._domPrefixes=S,d._cssomPrefixes=x,d.mq=function(t){var e,i=n.matchMedia||n.msMatchMedia;return i?i(t).matches:(C("@media "+t+" { #"+p+" { position: absolute; } }",function(t){e="absolute"==(n.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),e)},d.hasEvent=H,d.testProp=function(t){return a([t])},d.testAllProps=l,d.testStyles=C,d.prefixed=function(t,e,i){return e?l(t,e,i):l(t,"pfx")},f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+P.join(" "),d}(this,this.document),function(t,d,e){function h(t){return"[object Function]"==r.call(t)}function f(t){return"string"==typeof t}function p(){}function m(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function g(){var t=b.shift();x=1,t?t.t?v(function(){("c"==t.t?y.injectCss:y.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),g()):x=0}function i(t,e,i,n,o){return x=0,e=e||"j",f(t)?function(i,n,t,e,o,r,s){function a(t){if(!c&&m(l.readyState)&&(h.r=c=1,!x&&g(),l.onload=l.onreadystatechange=null,t))for(var e in"img"!=i&&v(function(){E.removeChild(l)},50),A[n])A[n].hasOwnProperty(e)&&A[n][e].onload()}s=s||y.errorTimeout;var l=d.createElement(i),c=0,u=0,h={t:t,s:n,e:o,a:r,x:s};1===A[n]&&(u=1,A[n]=[]),"object"==i?l.data=n:(l.src=n,l.type=i),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){a.call(this,u)},b.splice(e,0,h),"img"!=i&&(u||2===A[n]?(E.insertBefore(l,S?null:w),v(a,s)):A[n].push(l))}("c"==e?c:l,t,e,this.i++,i,n,o):(b.splice(this.i++,0,t),1==b.length&&g()),this}function a(){var t=y;return t.loader={load:i,i:0},t}var n,y,o=d.documentElement,v=t.setTimeout,w=d.getElementsByTagName("script")[0],r={}.toString,b=[],x=0,s="MozAppearance"in o.style,S=s&&!!d.createRange().compareNode,E=S?o:w.parentNode,l=(o=t.opera&&"[object Opera]"==r.call(t.opera),o=!!d.attachEvent&&!o,s?"object":o?"script":"img"),c=o?"script":l,k=Array.isArray||function(t){return"[object Array]"==r.call(t)},T=[],A={},P={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};(y=function(t){function u(t,e,i,n,o){var r=function(t){t=t.split("!");var e,i,n,o=T.length,r=t.pop(),s=t.length;for(r={url:r,origUrl:r,prefixes:t},i=0;i<s;i++)n=t[i].split("="),(e=P[n.shift()])&&(r=e(r,n));for(i=0;i<o;i++)r=T[i](r);return r}(t),s=r.autoCallback;r.url.split(".").pop().split("?").shift(),r.bypass||(e&&(e=h(e)?e:e[t]||e[n]||e[t.split("/").pop().split("?")[0]]),r.instead?r.instead(t,e,i,n,o):(A[r.url]?r.noexec=!0:A[r.url]=1,i.load(r.url,r.forceCSS||!r.forceJS&&"css"==r.url.split(".").pop().split("?").shift()?"c":void 0,r.noexec,r.attrs,r.timeout),(h(e)||h(s))&&i.load(function(){a(),e&&e(r.origUrl,o,n),s&&s(r.origUrl,o,n),A[r.url]=2})))}function e(t,e){function i(i,t){if(i){if(f(i))t||(a=function(){var t=[].slice.call(arguments);l.apply(this,t),c()}),u(i,a,e,0,r);else if(Object(i)===i)for(o in n=function(){var t,e=0;for(t in i)i.hasOwnProperty(t)&&e++;return e}(),i)i.hasOwnProperty(o)&&(!t&&!--n&&(h(a)?a=function(){var t=[].slice.call(arguments);l.apply(this,t),c()}:a[o]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[o])),u(i[o],a,e,o,r))}else!t&&c()}var n,o,r=!!t.test,s=t.load||t.both,a=t.callback||p,l=a,c=t.complete||p;i(r?t.yep:t.nope,!!s),s&&i(s)}var i,n,o=this.yepnope.loader;if(f(t))u(t,0,o,0);else if(k(t))for(i=0;i<t.length;i++)f(n=t[i])?u(n,0,o,0):k(n)?y(n):Object(n)===n&&e(n,o);else Object(t)===t&&e(t,o)}).addPrefix=function(t,e){P[t]=e},y.addFilter=function(t){T.push(t)},y.errorTimeout=1e4,null==d.readyState&&d.addEventListener&&(d.readyState="loading",d.addEventListener("DOMContentLoaded",n=function(){d.removeEventListener("DOMContentLoaded",n,0),d.readyState="complete"},0)),t.yepnope=a(),t.yepnope.executeStack=g,t.yepnope.injectJs=function(t,e,i,n,o,r){var s,a,l=d.createElement("script");n=n||y.errorTimeout;for(a in l.src=t,i)l.setAttribute(a,i[a]);e=r?g:e||p,l.onreadystatechange=l.onload=function(){!s&&m(l.readyState)&&(s=1,e(),l.onload=l.onreadystatechange=null)},v(function(){s||e(s=1)},n),o?l.onload():w.parentNode.insertBefore(l,w)},t.yepnope.injectCss=function(t,e,i,n,o,r){var s;n=d.createElement("link"),e=r?g:e||p;for(s in n.href=t,n.rel="stylesheet",n.type="text/css",i)n.setAttribute(s,i[s]);o||(w.parentNode.insertBefore(n,w),v(e,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=function(t,e){return void 0===e&&(e="undefined"!=typeof window?require("jquery"):require("jquery")(t)),i(e),e}:i(jQuery)}(function(u){return u.fn.tilt=function(e){var i=function(){this.ticking||(requestAnimationFrame(t.bind(this)),this.ticking=!0)},n=function(){var t=this;void 0!==this.timeout&&clearTimeout(this.timeout),u(this).css({transition:this.settings.speed+"ms "+this.settings.easing}),this.settings.glare&&this.glareElement.css({transition:"opacity "+this.settings.speed+"ms "+this.settings.easing}),this.timeout=setTimeout(function(){u(t).css({transition:""}),t.settings.glare&&t.glareElement.css({transition:""})},this.settings.speed)},o=function(t){this.ticking=!1,u(this).css({"will-change":"transform"}),n.call(this),u(this).trigger("tilt.mouseEnter")},r=function(t){return void 0===t&&(t={pageX:u(this).offset().left+u(this).outerWidth()/2,pageY:u(this).offset().top+u(this).outerHeight()/2}),{x:t.pageX,y:t.pageY}},s=function(t){this.mousePositions=r(t),i.call(this)},a=function(){n.call(this),this.reset=!0,i.call(this),u(this).trigger("tilt.mouseLeave")},l=function(){var t=u(this).outerWidth(),e=u(this).outerHeight(),i=u(this).offset().left,n=u(this).offset().top,o=(this.mousePositions.x-i)/t,r=(this.mousePositions.y-n)/e;return{tiltX:(this.settings.maxTilt/2-o*this.settings.maxTilt).toFixed(2),tiltY:(r*this.settings.maxTilt-this.settings.maxTilt/2).toFixed(2),percentageX:100*o,percentageY:100*r,angle:Math.atan2(this.mousePositions.x-(i+t/2),-(this.mousePositions.y-(n+e/2)))*(180/Math.PI)}},t=function(){return this.transforms=l.call(this),this.reset?(this.reset=!1,u(this).css("transform","perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg)"),void(this.settings.glare&&(this.glareElement.css("transform","rotate(180deg) translate(-50%, -50%)"),this.glareElement.css("opacity","0")))):(u(this).css("transform","perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.disableAxis?0:this.transforms.tiltY)+"deg) rotateY("+("y"===this.settings.disableAxis?0:this.transforms.tiltX)+"deg) scale3d("+this.settings.scale+","+this.settings.scale+","+this.settings.scale+")"),this.settings.glare&&(this.glareElement.css("transform","rotate("+this.transforms.angle+"deg) translate(-50%, -50%)"),this.glareElement.css("opacity",""+this.transforms.percentageY*this.settings.maxGlare/100)),u(this).trigger("change",[this.transforms]),void(this.ticking=!1))},c=function(){this.glareElement.css({width:""+2*u(this).outerWidth(),height:""+2*u(this).outerWidth()})};return u.fn.tilt.destroy=function(){u(this).each(function(){u(this).find(".js-tilt-glare").remove(),u(this).css({"will-change":"",transform:""}),u(this).off("mousemove mouseenter mouseleave")})},u.fn.tilt.getValues=function(){var t=[];return u(this).each(function(){this.mousePositions=r.call(this),t.push(l.call(this))}),t},u.fn.tilt.reset=function(){u(this).each(function(){var t=this;this.mousePositions=r.call(this),this.settings=u(this).data("settings"),a.call(this),setTimeout(function(){t.reset=!1},this.settings.transition)})},this.each(function(){var t=this;this.settings=u.extend({maxTilt:u(this).is("[data-tilt-max]")?u(this).data("tilt-max"):20,perspective:u(this).is("[data-tilt-perspective]")?u(this).data("tilt-perspective"):300,easing:u(this).is("[data-tilt-easing]")?u(this).data("tilt-easing"):"cubic-bezier(.03,.98,.52,.99)",scale:u(this).is("[data-tilt-scale]")?u(this).data("tilt-scale"):"1",speed:u(this).is("[data-tilt-speed]")?u(this).data("tilt-speed"):"400",transition:!u(this).is("[data-tilt-transition]")||u(this).data("tilt-transition"),disableAxis:u(this).is("[data-tilt-disable-axis]")?u(this).data("tilt-disable-axis"):null,axis:u(this).is("[data-tilt-axis]")?u(this).data("tilt-axis"):null,reset:!u(this).is("[data-tilt-reset]")||u(this).data("tilt-reset"),glare:!!u(this).is("[data-tilt-glare]")&&u(this).data("tilt-glare"),maxGlare:u(this).is("[data-tilt-maxglare]")?u(this).data("tilt-maxglare"):1},e),null!==this.settings.axis&&(console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),this.settings.disableAxis=this.settings.axis),this.init=function(){u(t).data("settings",t.settings),t.settings.glare&&function(){var t=this.settings.glarePrerender;t||u(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),this.glareElementWrapper=u(this).find(".js-tilt-glare"),this.glareElement=u(this).find(".js-tilt-glare-inner"),t||(this.glareElementWrapper.css({position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}).css({overflow:"hidden","pointer-events":"none"}),this.glareElement.css({position:"absolute",top:"50%",left:"50%","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:""+2*u(this).outerWidth(),height:""+2*u(this).outerWidth(),transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}))}.call(t),function(){u(this).on("mousemove",s),u(this).on("mouseenter",o),this.settings.reset&&u(this).on("mouseleave",a),this.settings.glare&&u(window).on("resize",c.bind(this))}.call(t)},this.init()})},u("[data-tilt]").tilt(),!0}),function(t,e){if("object"==typeof exports&&exports)e(exports);else{var i={};e(i),"function"==typeof define&&define.amd?define(i):t.share=i}}(this,function(t){var i={img:"",url:location.href,desc:"",title:""};function n(t){return"function"==typeof t}function o(){try{WeixinJSBridge.on("menu:share:timeline",function(){WeixinJSBridge.invoke("shareTimeline",{img_url:i.img,img_width:55,img_height:55,link:n(i.url)?i.url(1):i.url,desc:i.desc,title:i.timeline_title?i.timeline_title:i.title},function(){try{n(i.callback)&&i.callback()}catch(t){}})}),/android/i.test(navigator.userAgent)?WeixinJSBridge.on("menu:share:weibo",function(){WeixinJSBridge.invoke("shareWeibo",{url:n(i.url)?i.url(2):i.url,content:i.title+":"+i.desc},function(){try{n(i.callback)&&i.callback()}catch(t){}})}):WeixinJSBridge.on("menu:share:weibo",function(){WeixinJSBridge.invoke("shareWeibo",{img_url:i.img,img_width:55,img_height:55,link:n(i.url)?i.url(2):i.url,desc:i.desc,title:i.title},function(){try{n(i.callback)&&i.callback()}catch(t){}})}),WeixinJSBridge.on("menu:share:appmessage",function(){WeixinJSBridge.invoke("sendAppMessage",{img_url:i.img,img_width:55,img_height:55,link:n(i.url)?i.url(3):i.url,desc:i.desc,title:i.title},function(){try{n(i.callback)&&i.callback()}catch(t){}})}),n(i.readycallback)&&i.readycallback()}catch(t){}}return t.init=function(t){if("object"==typeof t)for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);"object"==typeof window.WeixinJSBridge&&n(window.WeixinJSBridge.invoke)?o():document.addEventListener?document.addEventListener("WeixinJSBridgeReady",o,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",o),document.attachEvent("onWeixinJSBridgeReady",o))},t});