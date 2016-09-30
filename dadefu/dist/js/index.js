/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
/**
 * Created by Administrator on 2016/8/8.
 */

;(function () {
    window.mmc = (function () {
        var mmc = {
            v: '1.0.0-dev', json: {
                encode: function (data) {
                    if ("" == data) {
                        return {};
                    }
                    return JSON.stringify(data).replace(/"/g, '\'');
                }, decode: function (data) {
                    if ("" == data) {
                        return "{}";
                    }
                    return JSON.parse(data.replace(/\'/ig, '\"'));
                }
            }, debug: false, user: {
                info: {}, getInfo: function () {
                    return this.info;
                }, getId: function () {
                    return this.getInfo().userid;
                }, getUsername: function () {
                    return this.getInfo().username;
                }, getNickname: function () {
                    return this.getInfo().nickname;
                }, getCountry: function () {
                    return this.getInfo().country;
                }, getEmail: function () {
                    return this.getInfo().email;
                }, getAvatar: function () {
                    return this.getInfo().avatar;
                }, isMarry: function () {
                    return true == this.getInfo().marriagestatus;
                }, getPhone: function () {
                    return this.getInfo().mobilephone;
                }, getScore: function () {
                    return this.getInfo().score;
                }, isMan: function () {
                    return 1 == this.getInfo().sex;
                }, getGender: function () {
                    return this.getInfo().sex;
                }, getWork: function () {
                    return this.getInfo().workstatus;
                }, getBirthday: function () {
                    return this.getInfo().birthday;
                }, login: function (callback) {
                    if (mmc.client.isAndroid()) {
                        return window.lingjiWebApp.MMCLogin(null == callback ? "" : callback);
                    }
                    return MMCLogin(callback);
                }, register: function (callback) {
                    if (mmc.client.isAndroid()) {
                        return window.lingjiWebApp.MMCRegist(null == callback ? "" : callback);
                    }
                    return MMCRegist(callback);
                }, isLogin: function () {
                    return typeof this.getInfo().userid != 'undefined';
                }
            }, client: {
                info: {}, ua: window.navigator.userAgent.toLowerCase(), is: function (name) {
                    return (new RegExp(name)).test(this.ua);
                }, isIOS: function () {
                    if (this.ua.match(/android/i) == "android") {
                        return false;
                    }
                    return true;
                }, isAndroid: function () {
                    if (this.ua.match(/android/i) == "android") {
                        return true;
                    }
                    return false;
                }, getInfo: function () {
                    return this.info;
                }, getLanguage: function () {
                    return this.getInfo().language;
                }, getCountry: function () {
                    return this.getInfo().area;
                }, getName: function () {
                    return client.info.module;
                }, getAppId: function () {
                    return this.getInfo().pluginid;
                }, getUDID: function () {
                    return this.getInfo().udid;
                }, getDeviceId: function () {
                    return this.getInfo().deviceid;
                }, getSystemVersion: function () {
                    return this.getInfo().systemversion;
                }, getPlatform: function () {
                    return this.getInfo().platform;
                }, notify: function (params, callback) {
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCLocalNotification(mmc.json.encode(params), null == callback ? "" : callback);
                    }
                    return MMCLocalNotification(params, null == callback ? "" : callback);
                }, goto: function (controller, params, type, callback) {
                    var data = {"controller": controller, "gotoType": type ? type : 0, "gotoParams": params};
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCGoto(mmc.json.encode(data), null == callback ? "" : callback);
                    }
                    return MMCGoto(data, callback);
                }, share: function (config, callback) {
                    var data = {
                        "thumb": config.icon,
                        "title": config.title,
                        "description": config.desc,
                        "shareLink": config.link
                    };
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCShare(mmc.json.encode(data), null == callback ? "" : callback);
                    }
                    return MMCShare(data, callback);
                }, comment: function () {
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCComment();
                    }
                    return MMCComment();
                }, getTenYearsGift: function () {
                    lingjiWebApp.MMCGetTenYearsGift();
                }, daily: function (data) {
                    if (mmc.client.isAndroid()) {
                        return lingjiWebApp.MMCDailySign(mmc.json.encode(data));
                    }
                    return MMCDailySign(data);
                }, openWindow: function (title, url, callback) {
                    var data = {gotourl: url, title: title};
                    MMCOpenWindow(data, callback);
                }
            }, alertDebug: function (data) {
                if (this.debug == true) {
                    alert(data.join(' # '));
                }
            }, ready_callback: function () {
            }
        };
        mmc.init = function () {
            if (this.client.isAndroid()) {
                this.user.info = this.json.decode(lingjiWebApp.getUserInfo());
                this.client.info = this.json.decode(lingjiWebApp.getDeviceInfo());
            } else {
                this.user.info = getUserInfo();
                this.client.info = getDeviceInfo();
            }
            this.alertDebug(['mmc ready']);
            this.ready_callback();
        };
        mmc.ready = function (callback) {
            this.ready_callback = callback;
        };
        return mmc;
    })();
    MMCReady = function () {
        mmc.init();
    };
})();
/*
 *提示插件
 *调用 VA.show('提示内容');
 *
 */
;(function(){

var VerificationAlertWrap = document.createElement('div');
VerificationAlertWrap.class = VerificationAlertWrap.className = 'verification-alert';
var topHeight = $(window).height()/2-$(VerificationAlertWrap).height();

var  VerificationAlert={
	timer:null,
    init:function(text){
        $('body').append(VerificationAlertWrap);
        $(VerificationAlertWrap).html(text);
        $(VerificationAlertWrap).css({'top':topHeight,'visibility':'hidden'});
    },
    show:function(text,time){
        time = time || 1000;
        this.init(text);
        this.setStyle();
		clearTimeout(this.timer);
       	this.timer = setTimeout(function(){
            VerificationAlert.hide(); 
        },time);
        $(VerificationAlertWrap).on('click',function(){
			clearTimeout(this.timer);
            VerificationAlert.hide(); 
        }); 
    },
    hide:function(){
        $(VerificationAlertWrap).css('visibility','hidden');
    },
    setStyle:function(){
        $(VerificationAlertWrap).css({
            'visibility':'visible',
            'width': '10.25rem',
            'position': 'fixed',
            'left': '50%',
            'top': '50%',
            'margin-left': '-6.125rem',
            'padding': '1rem',
            'line-height': '1.5rem',
            'background': 'rgba(0, 0, 0, 0.7)',
            'text-align': 'center',
            'border-radius': '0.25rem',
            '-o-border-radius': '0.25rem',
            '-ms-border-radius': '0.25rem',
            '-moz-border-radius': '0.25rem',
            '-webkit-border-radius': '0.25rem',
            'color': '#fff',
            'z-index':'1002'
        });
		var vaHeight = $(VerificationAlertWrap).height();
		$(VerificationAlertWrap).css('margin-top','-'+parseInt(vaHeight/2)+'px');
    }
    
};

window.VA = VerificationAlert;

})();
;(function($){
    /*
     *	n.see
     *	2015.7.29
     *  用法：$('.area').selectAlert({
     *			elWrap:$('#activity-wrapper'), //
     *			defautlArea:{curId:2,curText:"台湾"},
     *			data:[{id:1,text:"中国大陆"},{id:1,text:"中国大陆"}]
     *		});
     *  html:<div class="auto area">
     *			<span class="right icon-go"></span><span class="auto text"></span>
     *			<input type="hidden" name="area" />
     *		</div>
     *
     *	    elWrap:$('#wrapper'),储存容器
     *
     * 必须: .area | .text | input  | #wrapper
     */

    var selectAlert = function(opt){
        this.appWrap = $('body');
        var defautl = {
            elWrap : this.appWrap
        };
        this.opt = $.extend(defautl, opt || {});
        this.$body = $('body');
        this.appWrap = this.opt.elWrap;
        this.init();
    };
    selectAlert.prototype ={
        init:function(){
            this.$selectWrap = $('<div />',{class:"select-wrap"});
            this.$selectAlert = $('<div />',{class:"select-alert"});
            this.$style = $('<style />',{type:"text/css"});
        },
        show:function(){

            if(!this.$body.attr('current-scroll-top')){
                this.$body.attr('current-scroll-top',$(window).scrollTop());
            }

            this.$body.css('position','fixed');

            var el = this.opt.el;
            var curId = el.attr('data-id');

            var listHtml = [];
            var data = this.opt.data;

            for(var i in data){
                if(curId == null && i == 0){
                    listHtml.push('<li class="current" data-id="'+data[i].id+'"><span>'+data[i].text+'</span><i></i></li>');
                }else{
                    if(curId == data[i].id){
                        listHtml.push('<li class="current" data-id="'+data[i].id+'"><span>'+data[i].text+'</span><i></i></li>');
                    }else{
                        listHtml.push('<li data-id="'+data[i].id+'"><span>'+data[i].text+'</span><i></i></li>');
                    }
                }
            }


            this.tpl(listHtml.join(''));

            this.$btnCancel = this.$selectWrap.find('.btn-cancel');
            this.$btnConfirml = this.$selectWrap.find('.btn-confirm');

            this.setStyle();
            this.selectRadio();

            this.btnCancel();
            this.btnConfirm(el);
        },
        tpl:function(dataList){
            var html ='<div class="list">'
                +			'<ul id="list-data">'+dataList+'</ul>'
                +		'</div>'
                +		'<div class="bottom">'
                +			'<span class="btn btn-cancel">取消</span>'
                +			'<span class="btn btn-confirm">确定</span>'
                +		'</div>';

            var alertHtml = this.$selectAlert.html(html);
            this.style();
            var wrapHtml = this.$selectWrap.append(alertHtml);
            this.appWrap.append(wrapHtml);
        },
        /*v1.2.0新增*/
        style:function(){
            var styleStr = '.select-wrap{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);overflow:hidden;z-index:1000}.select-alert{width:80%;left:50%;margin-left:-40%;background-color:#fff;position:absolute;top:50%;border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px}.select-alert .list{margin:0 1rem;overflow:auto;overflow-y:auto;overflow-x:hidden}.select-alert .list li{padding:0 .5rem;height:2.5rem;line-height:2.5rem;border-bottom:1px solid #eee}.select-alert .list li span{float:left}.select-alert .list li i{float:right;display:block;border:.25rem solid #eee;width:.5rem;height:.5rem;background-color:#eee;border-radius:1rem;-o-border-radius:1rem;-ms-border-radius:1rem;-moz-border-radius:1rem;-webkit-border-radius:1rem;margin-top:.75rem}.select-alert .list li.current i{border:.25rem solid #ca9f75;background-color:#fff}.select-alert .bottom{margin:0 1rem;padding:1rem 0;clear:both}.select-alert .bottom:after{display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:"."}.select-alert .btn{height:2rem;line-height:2rem;text-align:center;width:46%;border:1px solid #eee;border-radius:2px;-o-border-radius:2px;-ms-border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px}.select-alert .btn-cancel{float:left}.select-alert .btn-confirm{float:right}';
            var styleHtml = this.$style.html(styleStr);
            this.$selectWrap.append(styleHtml);
        },
        setStyle:function(){
            var $selectAlert = this.$selectAlert,
                selectAlertHeight = $selectAlert.height(),
                selectHeight = parseInt(selectAlertHeight*0.9),
                winHeight = parseInt($(window).height()*0.9),
                wrapperWidth = this.appWrap.width(),
                $list = $selectAlert.find('.list'),
                $bottom = $selectAlert.find('.bottom');

            this.$selectWrap.css({
                'width': wrapperWidth,
                'margin-left': -wrapperWidth/2,
                'left':'50%'
            });

            if(!$selectAlert.attr('default-height')){
                $selectAlert.attr('default-height',selectAlertHeight);
            }
            var defaultAelectAlertHeight = $selectAlert.attr('default-height');

            if(defaultAelectAlertHeight > winHeight){
                $list.height(winHeight-$bottom.height());
                $selectAlert.css({
                    'height':winHeight,
                    'margin-top':'-'+parseInt(winHeight/2)+'px'
                });

            }else{
                $selectAlert.css({
                    'margin-top':'-'+parseInt(selectAlertHeight/2)+'px'
                });
            }
        },
        btnCancel:function(){
            var self = this;
            this.$btnCancel.on('click',function(){
                self.$body.css('position','static');

                $(window).scrollTop(self.$body.attr('current-scroll-top'));
                self.$body.removeAttr('current-scroll-top');

                self.$selectWrap.remove();
            });
        },
        btnConfirm:function(el){
            var self = this;
            this.$btnConfirml.on('click',function(){
                var listData = self.$selectWrap.find('#list-data'),
                    area = {};
                area.curId = listData.find('li.current').attr('data-id');
                area.curText = listData.find('li.current span').text();

                self.setArea(el,area);
                self.$body.css('position','static');

                $(window).scrollTop(self.$body.attr('current-scroll-top'));
                self.$body.removeAttr('current-scroll-top');

                self.$selectWrap.remove();
            });
        },
        setArea:function(el,area){
            el.attr('data-id',area.curId);
            el.find('.text').text(area.curText);
            el.find('input').val(area.curId);
            el.css({'color':'#333'});
        },
        selectRadio:function(){
            var listData = this.$selectWrap.find('#list-data'),
                cur = 'current';

            listData.find('li').on('click',function(){
                $(this).addClass(cur).siblings('li').removeClass(cur);
            });
        }

    };

    $.fn.selectAlert = function(opt){
        var $this = $(this);
        var mySelectAlert = new selectAlert({
            el:$this,
            elWrap:opt.elWrap,
            defautlArea:opt.defautlArea ? opt.defautlArea : {curId:1,curText:" "},
            data:opt.data
        });
        mySelectAlert.setArea($this,mySelectAlert.opt.defautlArea);
        $this.on('click',function(){
            mySelectAlert.show();
        });
    }

})(Zepto);
/**
 * Created by Administrator on 2016/5/18.
 */
if (!window.jQuery) {
    var jQuery = Zepto;
    !function (t) {
        ["width", "height"].forEach(function (n) {
            t.fn[n] = function (e) {
                var r, o = document.body, i = document.documentElement, f = n.replace(/./, function (t) {
                    return t[0].toUpperCase()
                });
                return void 0 === e ? this[0] == window ? i["client" + f] : this[0] == document ? Math.max(o["scroll" + f], o["offset" + f], i["client" + f], i["scroll" + f], i["offset" + f]) : (r = this.offset()) && r[n] : this.each(function () {
                    t(this).css(n, e)
                })
            }
        }), ["width", "height"].forEach(function (n) {
            var e = n.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            t.fn["outer" + e] = function (t) {
                var r = this;
                if (r) {
                    var o = r[0]["offset" + e], i = {width: ["left", "right"], height: ["top", "bottom"]};
                    return i[n].forEach(function (n) {
                        t && (o += parseInt(r.css("margin-" + n), 10))
                    }), o
                }
                return null
            }
        }), ["width", "height"].forEach(function (n) {
            var e = n.replace(/./, function (t) {
                return t[0].toUpperCase()
            });
            t.fn["inner" + e] = function () {
                var t = this;
                if (t[0]["inner" + e])return t[0]["inner" + e];
                var r = t[0]["offset" + e], o = {width: ["left", "right"], height: ["top", "bottom"]};
                return o[n].forEach(function (n) {
                    r -= parseInt(t.css("border-" + n + "-width"), 10)
                }), r
            }
        }), ["Left", "Top"].forEach(function (n, e) {
            function r(t) {
                return t && "object" == typeof t && "setInterval"in t
            }

            function o(t) {
                return r(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
            }

            var i = "scroll" + n;
            t.fn[i] = function (n) {
                var r, f;
                return void 0 === n ? (r = this[0]) ? (f = o(r), f ? "pageXOffset"in f ? f[e ? "pageYOffset" : "pageXOffset"] : f.document.documentElement[i] || f.document.body[i] : r[i]) : null : void this.each(function () {
                    if (f = o(this)) {
                        var r = e ? t(f).scrollLeft() : n, u = e ? n : t(f).scrollTop();
                        f.scrollTo(r, u)
                    } else this[i] = n
                })
            }
        }), t.fn.prevUntil = function (n) {
            for (var e = this, r = []; e.length && !t(e).filter(n).length;)r.push(e[0]), e = e.prev();
            return t(r)
        }, t.fn.nextUntil = function (n) {
            for (var e = this, r = []; e.length && !e.filter(n).length;)r.push(e[0]), e = e.next();
            return t(r)
        }, t._extend = t.extend, t.extend = function () {
            return arguments[0] = arguments[0] || {}, t._extend.apply(this, arguments)
        }
    }(jQuery)
}
;
!function (e, t) {
    function r(e) {
        var r;
        for (r in e)if (l[e[r]] !== t)return !0;
        return !1
    }

    function n() {
        var e, t = ["Webkit", "Moz", "O", "ms"];
        for (e in t)if (r([t[e] + "Transform"]))return "-" + t[e].toLowerCase() + "-";
        return ""
    }

    function o(r, n, o) {
        var i = r;
        return "object" == typeof n ? r.each(function () {
            c[this.id] && c[this.id].destroy(), new e.mobiscroll.classes[n.component || "Scroller"](this, n)
        }) : ("string" == typeof n && r.each(function () {
            var e, r = c[this.id];
            return r && r[n] && (e = r[n].apply(this, Array.prototype.slice.call(o, 1)), e !== t) ? (i = e, !1) : void 0
        }), i)
    }

    function i(e) {
        return s.tapped && !e.tap ? (e.stopPropagation(), e.preventDefault(), !1) : void 0
    }

    var s, a = +new Date, c = {}, u = e.extend, l = document.createElement("modernizr").style, f = r(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]), p = r(["flex", "msFlex", "WebkitBoxDirection"]), m = n(), h = m.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz");
    e.fn.mobiscroll = function (t) {
        return u(this, e.mobiscroll.components), o(this, t, arguments)
    }, s = e.mobiscroll = e.mobiscroll || {
            version: "2.16.0",
            util: {
                prefix: m, jsPrefix: h, has3d: f, hasFlex: p, testTouch: function (t, r) {
                    if ("touchstart" == t.type)e(r).attr("data-touch", "1"); else if (e(r).attr("data-touch"))return e(r).removeAttr("data-touch"), !1;
                    return !0
                }, objectToArray: function (e) {
                    var t, r = [];
                    for (t in e)r.push(e[t]);
                    return r
                }, arrayToObject: function (e) {
                    var t, r = {};
                    if (e)for (t = 0; t < e.length; t++)r[e[t]] = e[t];
                    return r
                }, isNumeric: function (e) {
                    return e - parseFloat(e) >= 0
                }, isString: function (e) {
                    return "string" == typeof e
                }, getCoord: function (e, t, r) {
                    var n = e.originalEvent || e, o = (r ? "client" : "page") + t;
                    return n.changedTouches ? n.changedTouches[0][o] : e[o]
                }, getPosition: function (r, n) {
                    var o, i, s = window.getComputedStyle ? getComputedStyle(r[0]) : r[0].style;
                    return f ? (e.each(["t", "webkitT", "MozT", "OT", "msT"], function (e, r) {
                        return s[r + "ransform"] !== t ? (o = s[r + "ransform"], !1) : void 0
                    }), o = o.split(")")[0].split(", "), i = n ? o[13] || o[5] : o[12] || o[4]) : i = n ? s.top.replace("px", "") : s.left.replace("px", ""), i
                }, constrain: function (e, t, r) {
                    return Math.max(t, Math.min(e, r))
                }, vibrate: function (e) {
                    "vibrate"in navigator && navigator.vibrate(e || 50)
                }
            },
            tapped: 0,
            autoTheme: "mobiscroll",
            presets: {scroller: {}, numpad: {}, listview: {}, menustrip: {}},
            themes: {form: {}, frame: {}, listview: {}, menustrip: {}},
            i18n: {},
            instances: c,
            classes: {},
            components: {},
            defaults: {context: "body", mousewheel: !0, vibrate: !0},
            setDefaults: function (e) {
                u(this.defaults, e)
            },
            presetShort: function (e, r, n) {
                this.components[e] = function (i) {
                    return o(this, u(i, {component: r, preset: n === !1 ? t : e}), arguments)
                }
            }
        }, e.mobiscroll.classes.Base = function (t, r) {
        var n, o, i, s, l, f, p = e.mobiscroll, m = this;
        m.settings = {}, m._presetLoad = function () {
        }, m._init = function (e) {
            i = m.settings, u(r, e), m._hasDef && (f = p.defaults), u(i, m._defaults, f, r), m._hasTheme && (l = i.theme, "auto" != l && l || (l = p.autoTheme), "default" == l && (l = "mobiscroll"), r.theme = l, s = p.themes[m._class][l]), m._hasLang && (n = p.i18n[i.lang]), m._hasTheme && m.trigger("onThemeLoad", [n, r]), u(i, s, n, f, r), m._hasPreset && (m._presetLoad(i), o = p.presets[m._class][i.preset], o && (o = o.call(t, m), u(i, o, r)))
        }, m._destroy = function () {
            m.trigger("onDestroy", []), delete c[t.id], m = null
        }, m.trigger = function (n, i) {
            var a;
            return i.push(m), e.each([f, s, o, r], function (e, r) {
                r && r[n] && (a = r[n].apply(t, i))
            }), a
        }, m.option = function (e, t) {
            var r = {};
            "object" == typeof e ? r = e : r[e] = t, m.init(r)
        }, m.getInst = function () {
            return m
        }, r = r || {}, t.id || (t.id = "mobiscroll" + ++a), c[t.id] = m
    }, document.addEventListener && e.each(["mouseover", "mousedown", "mouseup", "click"], function (e, t) {
        document.addEventListener(t, i, !0)
    })
}(jQuery);
;
!function (e, t, n, s) {
    var i, o, a = e.mobiscroll, d = a.util, l = d.jsPrefix, c = d.has3d, r = d.getCoord, u = d.constrain, h = d.isString, p = /android [1-3]/i.test(navigator.userAgent), f = /(iphone|ipod|ipad).* os 8_/i.test(navigator.userAgent), w = "webkitAnimationEnd animationend", b = function () {
    }, v = function (e) {
        e.preventDefault()
    };
    a.classes.Frame = function (d, f, m) {
        function y(t) {
            F && F.removeClass("dwb-a"), F = e(this), F.hasClass("dwb-d") || F.hasClass("dwb-nhl") || F.addClass("dwb-a"), "mousedown" === t.type && e(n).on("mouseup", C)
        }

        function C(t) {
            F && (F.removeClass("dwb-a"), F = null), "mouseup" === t.type && e(n).off("mouseup", C)
        }

        function _(e) {
            13 == e.keyCode ? U.select() : 27 == e.keyCode && U.cancel()
        }

        function g(e) {
            e || W.focus(), U.ariaMessage(K.ariaMessage)
        }

        function k(t) {
            var n, a, d, l = K.focusOnClose;
            U._markupRemove(), S.remove(), i && !t && setTimeout(function () {
                if (l === s || l === !0) {
                    o = !0, n = i[0], d = n.type, a = n.value;
                    try {
                        n.type = "button"
                    } catch (t) {
                    }
                    i.focus(), n.type = d, n.value = a
                } else l && e(l).focus()
            }, 200), U._isVisible = !1, R("onHide", [])
        }

        function x(e) {
            clearTimeout(et[e.type]), et[e.type] = setTimeout(function () {
                var t = "scroll" == e.type;
                (!t || N) && U.position(!t)
            }, 200)
        }

        function T(e) {
            e.target.nodeType && !W[0].contains(e.target) && W.focus()
        }

        function V(t, s) {
            t && t(), e(n.activeElement).is("input,textarea") && e(n.activeElement).blur(), i = s, U.show(), setTimeout(function () {
                o = !1
            }, 300)
        }

        var M, O, I, S, D, L, W, q, H, P, F, E, R, A, z, B, j, X, Y, K, N, Q, G, J, U = this, Z = e(d), $ = [], et = {};
        a.classes.Base.call(this, d, f, !0), U.position = function (t) {
            var i, o, a, d, l, c, r, h, p, f, w, b, v, m, y, C, _ = 0, g = 0, k = {}, x = Math.min(q[0].innerWidth || q.innerWidth(), L.width()), T = q[0].innerHeight || q.innerHeight();
            G === x && J === T && t || Y || ((U._isFullScreen || /top|bottom/.test(K.display)) && W.width(x), R("onPosition", [S, x, T]) !== !1 && z && (y = q.scrollLeft(), C = q.scrollTop(), d = K.anchor === s ? Z : e(K.anchor), U._isLiquid && "liquid" !== K.layout && (400 > x ? S.addClass("dw-liq") : S.removeClass("dw-liq")), !U._isFullScreen && /modal|bubble/.test(K.display) && (H.width(""), e(".mbsc-w-p", S).each(function () {
                i = e(this).outerWidth(!0), _ += i, g = i > g ? i : g
            }), i = _ > x ? g : _, H.width(i + 1).css("white-space", _ > x ? "" : "nowrap")), B = W.outerWidth(), j = W.outerHeight(!0), N = T >= j && x >= B, U.scrollLock = N, "modal" == K.display ? (o = Math.max(0, y + (x - B) / 2), a = C + (T - j) / 2) : "bubble" == K.display ? (m = !0, f = e(".dw-arrw-i", S), r = d.offset(), h = Math.abs(O.offset().top - r.top), p = Math.abs(O.offset().left - r.left), l = d.outerWidth(), c = d.outerHeight(), o = u(p - (W.outerWidth(!0) - l) / 2, y + 3, y + x - B - 3), a = h - j, C > a || h > C + T ? (W.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), a = h + c) : W.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), w = f.outerWidth(), b = u(p + l / 2 - (o + (B - w) / 2), 0, w), e(".dw-arr", S).css({left: b})) : (o = y, "top" == K.display ? a = C : "bottom" == K.display && (a = C + T - j)), a = 0 > a ? 0 : a, k.top = a, k.left = o, W.css(k), L.height(0), v = Math.max(a + j, "body" == K.context ? e(n).height() : O[0].scrollHeight), L.css({height: v}), m && (a + j > C + T || h > C + T) && (Y = !0, setTimeout(function () {
                Y = !1
            }, 300), q.scrollTop(Math.min(a + j - T, v - T))), G = x, J = T))
        }, U.attachShow = function (e, t) {
            $.push({
                readOnly: e.prop("readonly"),
                el: e
            }), "inline" !== K.display && (Q && e.is("input") && e.prop("readonly", !0).on("mousedown.dw", function (e) {
                e.preventDefault()
            }), K.showOnFocus && e.on("focus.dw", function () {
                o || V(t, e)
            }), K.showOnTap && (e.on("keydown.dw", function (n) {
                (32 == n.keyCode || 13 == n.keyCode) && (n.preventDefault(), n.stopPropagation(), V(t, e))
            }), U.tap(e, function () {
                V(t, e)
            })))
        }, U.select = function () {
            z && U.hide(!1, "set") === !1 || (U._fillValue(), R("onSelect", [U._value]))
        }, U.cancel = function () {
            z && U.hide(!1, "cancel") === !1 || R("onCancel", [U._value])
        }, U.clear = function () {
            R("onClear", [S]), z && !U.live && U.hide(!1, "clear"), U.setVal(null, !0)
        }, U.enable = function () {
            K.disabled = !1, U._isInput && Z.prop("disabled", !1)
        }, U.disable = function () {
            K.disabled = !0, U._isInput && Z.prop("disabled", !0)
        }, U.show = function (n, i) {
            var o;
            K.disabled || U._isVisible || (U._readValue(), R("onBeforeShow", []), E = p ? !1 : K.animate, E !== !1 && ("top" == K.display && (E = "slidedown"), "bottom" == K.display && (E = "slideup")), o = '<div lang="' + K.lang + '" class="mbsc-' + K.theme + (K.baseTheme ? " mbsc-" + K.baseTheme : "") + " dw-" + K.display + " " + (K.cssClass || "") + (U._isLiquid ? " dw-liq" : "") + (p ? " mbsc-old" : "") + (A ? "" : " dw-nobtn") + '"><div class="dw-persp">' + (z ? '<div class="dwo"></div>' : "") + "<div" + (z ? ' role="dialog" tabindex="-1"' : "") + ' class="dw' + (K.rtl ? " dw-rtl" : " dw-ltr") + '">' + ("bubble" === K.display ? '<div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div>' : "") + '<div class="dwwr"><div aria-live="assertive" class="dw-aria dw-hidden"></div>' + (K.headerText ? '<div class="dwv">' + (h(K.headerText) ? K.headerText : "") + "</div>" : "") + '<div class="dwcc">', o += U._generateContent(), o += "</div>", A && (o += '<div class="dwbc">', e.each(P, function (e, t) {
                t = h(t) ? U.buttons[t] : t, "set" === t.handler && (t.parentClass = "dwb-s"), "cancel" === t.handler && (t.parentClass = "dwb-c"), t.handler = h(t.handler) ? U.handlers[t.handler] : t.handler, o += "<div" + (K.btnWidth ? ' style="width:' + 100 / P.length + '%"' : "") + ' class="dwbw ' + (t.parentClass || "") + '"><div tabindex="0" role="button" class="dwb' + e + " dwb-e " + (t.cssClass === s ? K.btnClass : t.cssClass) + (t.icon ? " mbsc-ic mbsc-ic-" + t.icon : "") + '">' + (t.text || "") + "</div></div>"
            }), o += "</div>"), o += "</div></div></div></div>", S = e(o), L = e(".dw-persp", S), D = e(".dwo", S), H = e(".dwwr", S), I = e(".dwv", S), W = e(".dw", S), M = e(".dw-aria", S), U._markup = S, U._header = I, U._isVisible = !0, X = "orientationchange resize", U._markupReady(S), R("onMarkupReady", [S]), z ? (e(t).on("keydown", _), K.scrollLock && S.on("touchmove mousewheel wheel", function (e) {
                N && e.preventDefault()
            }), "Moz" !== l && e("input,select,button", O).each(function () {
                this.disabled || e(this).addClass("dwtd").prop("disabled", !0)
            }), a.activeInstance && a.activeInstance.hide(), X += " scroll", a.activeInstance = U, S.appendTo(O), q.on("focusin", T), c && E && !n && S.addClass("dw-in dw-trans").on(w, function () {
                S.off(w).removeClass("dw-in dw-trans").find(".dw").removeClass("dw-" + E), g(i)
            }).find(".dw").addClass("dw-" + E)) : Z.is("div") && !U._hasContent ? Z.html(S) : S.insertAfter(Z), U._markupInserted(S), R("onMarkupInserted", [S]), U.position(), q.on(X, x), S.on("selectstart mousedown", v).on("click", ".dwb-e", v).on("keydown", ".dwb-e", function (t) {
                32 == t.keyCode && (t.preventDefault(), t.stopPropagation(), e(this).click())
            }).on("keydown", function (t) {
                if (32 == t.keyCode)t.preventDefault(); else if (9 == t.keyCode && z) {
                    var n = S.find('[tabindex="0"]').filter(function () {
                        return this.offsetWidth > 0 || this.offsetHeight > 0
                    }), s = n.index(e(":focus", S)), i = n.length - 1, o = 0;
                    t.shiftKey && (i = 0, o = -1), s === i && (n.eq(o).focus(), t.preventDefault())
                }
            }), e("input,select,textarea", S).on("selectstart mousedown", function (e) {
                e.stopPropagation()
            }).on("keydown", function (e) {
                32 == e.keyCode && e.stopPropagation()
            }), e.each(P, function (t, n) {
                U.tap(e(".dwb" + t, S), function (e) {
                    n = h(n) ? U.buttons[n] : n, n.handler.call(this, e, U)
                }, !0)
            }), K.closeOnOverlay && U.tap(D, function () {
                U.cancel()
            }), z && !E && g(i), S.on("touchstart mousedown", ".dwb-e", y).on("touchend", ".dwb-e", C), U._attachEvents(S), R("onShow", [S, U._tempValue]))
        }, U.hide = function (n, s, i) {
            return !U._isVisible || !i && !U._isValid && "set" == s || !i && R("onClose", [U._tempValue, s]) === !1 ? !1 : (S && ("Moz" !== l && e(".dwtd", O).each(function () {
                e(this).prop("disabled", !1).removeClass("dwtd")
            }), c && z && E && !n && !S.hasClass("dw-trans") ? S.addClass("dw-out dw-trans").find(".dw").addClass("dw-" + E).on(w, function () {
                k(n)
            }) : k(n), q.off(X, x).off("focusin", T)), void(z && (e(t).off("keydown", _), delete a.activeInstance)))
        }, U.ariaMessage = function (e) {
            M.html(""), setTimeout(function () {
                M.html(e)
            }, 100)
        }, U.isVisible = function () {
            return U._isVisible
        }, U.setVal = b, U._generateContent = b, U._attachEvents = b, U._readValue = b, U._fillValue = b, U._markupReady = b, U._markupInserted = b, U._markupRemove = b, U._processSettings = b, U._presetLoad = function (e) {
            e.buttons = e.buttons || ("inline" !== e.display ? ["set", "cancel"] : []), e.headerText = e.headerText === s ? "inline" !== e.display ? "{value}" : !1 : e.headerText
        }, U.tap = function (e, t, n) {
            var s, i, o;
            K.tap && e.on("touchstart.dw", function (e) {
                n && e.preventDefault(), s = r(e, "X"), i = r(e, "Y"), o = !1
            }).on("touchmove.dw", function (e) {
                (!o && Math.abs(r(e, "X") - s) > 20 || Math.abs(r(e, "Y") - i) > 20) && (o = !0)
            }).on("touchend.dw", function (e) {
                var n = this;
                o || (e.preventDefault(), t.call(n, e)), a.tapped++, setTimeout(function () {
                    a.tapped--
                }, 500)
            }), e.on("click.dw", function (e) {
                e.preventDefault(), t.call(this, e)
            })
        }, U.destroy = function () {
            U.hide(!0, !1, !0), e.each($, function (e, t) {
                t.el.off(".dw").prop("readonly", t.readOnly)
            }), U._destroy()
        }, U.init = function (n) {
            U._init(n), U._isLiquid = "liquid" === (K.layout || (/top|bottom/.test(K.display) ? "liquid" : "")), U._processSettings(), Z.off(".dw"), P = K.buttons || [], z = "inline" !== K.display, Q = K.showOnFocus || K.showOnTap, q = e("body" == K.context ? t : K.context), O = e(K.context), U.context = q, U.live = !0, e.each(P, function (e, t) {
                return "ok" == t || "set" == t || "set" == t.handler ? (U.live = !1, !1) : void 0
            }), U.buttons.set = {
                text: K.setText,
                handler: "set"
            }, U.buttons.cancel = {
                text: U.live ? K.closeText : K.cancelText,
                handler: "cancel"
            }, U.buttons.clear = {
                text: K.clearText,
                handler: "clear"
            }, U._isInput = Z.is("input"), A = P.length > 0, U._isVisible && U.hide(!0, !1, !0), R("onInit", []), z ? (U._readValue(), U._hasContent || U.attachShow(Z)) : U.show(), Z.on("change.dw", function () {
                U._preventChange || U.setVal(Z.val(), !0, !1), U._preventChange = !1
            })
        }, U.buttons = {}, U.handlers = {
            set: U.select,
            cancel: U.cancel,
            clear: U.clear
        }, U._value = null, U._isValid = !0, U._isVisible = !1, K = U.settings, R = U.trigger, m || U.init(f)
    }, a.classes.Frame.prototype._defaults = {
        lang: "en",
        setText: "Set",
        selectedText: "Selected",
        closeText: "Close",
        cancelText: "Cancel",
        clearText: "Clear",
        disabled: !1,
        closeOnOverlay: !0,
        showOnFocus: !1,
        showOnTap: !0,
        display: "modal",
        scrollLock: !0,
        tap: !0,
        btnClass: "dwb",
        btnWidth: !0,
        focusOnClose: !f
    }, a.themes.frame.mobiscroll = {
        rows: 5,
        showLabel: !1,
        headerText: !1,
        btnWidth: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 1,
        dateOrder: "MMddyy",
        weekDays: "min",
        checkIcon: "ion-ios7-checkmark-empty",
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5"
    }, e(t).on("focus", function () {
        i && (o = !0)
    })
}(jQuery, window, document);
;
!function (e, t, l, a) {
    var s, i = e.mobiscroll, n = i.classes, o = i.util, d = o.jsPrefix, r = o.has3d, u = o.hasFlex, h = o.getCoord, c = o.constrain, w = o.testTouch;
    i.presetShort("scroller", "Scroller", !1), n.Scroller = function (t, i, f) {
        function m(t) {
            !w(t, this) || s || H || j || C(this) || (t.preventDefault(), t.stopPropagation(), s = !0, O = "clickpick" != E.mode, $ = e(".dw-ul", this), A($), N = it[et] !== a, K = N ? M($) : nt[et], Q = h(t, "Y"), G = new Date, J = Q, q($, et, K, .001), O && $.closest(".dwwl").addClass("dwa"), "mousedown" === t.type && e(l).on("mousemove", p).on("mouseup", v))
        }

        function p(e) {
            s && O && (e.preventDefault(), e.stopPropagation(), J = h(e, "Y"), (Math.abs(J - Q) > 3 || N) && (q($, et, c(K + (Q - J) / R, X - 1, Z + 1)), N = !0))
        }

        function v(t) {
            if (s) {
                var a, i, n = new Date - G, o = c(Math.round(K + (Q - J) / R), X - 1, Z + 1), d = o, u = $.offset().top;
                if (t.stopPropagation(), s = !1, "mouseup" === t.type && e(l).off("mousemove", p).off("mouseup", v), r && 300 > n ? (a = (J - Q) / n, i = a * a / E.speedUnit, 0 > J - Q && (i = -i)) : i = J - Q, N)d = c(Math.round(K - i / R), X, Z), n = a ? Math.max(.1, Math.abs((d - o) / a) * E.timeUnit) : .1; else {
                    var h = Math.floor((J - u) / R), w = e(e(".dw-li", $)[h]), f = w.hasClass("dw-v"), m = O;
                    if (n = .1, B("onValueTap", [w]) !== !1 && f ? d = h : m = !0, m && f && (w.addClass("dw-hl"), setTimeout(function () {
                            w.removeClass("dw-hl")
                        }, 100)), !Y && (E.confirmOnTap === !0 || E.confirmOnTap[et]) && w.hasClass("dw-sel"))return void at.select()
                }
                O && L($, et, d, 0, n, !0)
            }
        }

        function _(t) {
            j = e(this), w(t, this) && b(t, j.closest(".dwwl"), j.hasClass("dwwbp") ? F : I), "mousedown" === t.type && e(l).on("mouseup", y)
        }

        function y(t) {
            j = null, H && (clearInterval(lt), H = !1), "mouseup" === t.type && e(l).off("mouseup", y)
        }

        function x(t) {
            38 == t.keyCode ? b(t, e(this), I) : 40 == t.keyCode && b(t, e(this), F)
        }

        function V() {
            H && (clearInterval(lt), H = !1)
        }

        function g(t) {
            if (!C(this)) {
                t.preventDefault(), t = t.originalEvent || t;
                var l = t.deltaY || t.wheelDelta || t.detail, a = e(".dw-ul", this);
                A(a), q(a, et, c(((0 > l ? -20 : 20) - ot[et]) / R, X - 1, Z + 1)), clearTimeout(z), z = setTimeout(function () {
                    L(a, et, Math.round(nt[et]), l > 0 ? 1 : 2, .1)
                }, 200)
            }
        }

        function b(e, t, l) {
            if (e.stopPropagation(), e.preventDefault(), !H && !C(t) && !t.hasClass("dwa")) {
                H = !0;
                var a = t.find(".dw-ul");
                A(a), clearInterval(lt), lt = setInterval(function () {
                    l(a)
                }, E.delay), l(a)
            }
        }

        function C(t) {
            if (e.isArray(E.readonly)) {
                var l = e(".dwwl", U).index(t);
                return E.readonly[l]
            }
            return E.readonly
        }

        function W(t) {
            var l = '<div class="dw-bf">', a = dt[t], s = 1, i = a.labels || [], n = a.values || [], o = a.keys || n;
            return e.each(n, function (e, t) {
                s % 20 === 0 && (l += '</div><div class="dw-bf">'), l += '<div role="option" aria-selected="false" class="dw-li dw-v" data-val="' + o[e] + '"' + (i[e] ? ' aria-label="' + i[e] + '"' : "") + ' style="height:' + R + "px;line-height:" + R + 'px;"><div class="dw-i"' + (tt > 1 ? ' style="line-height:' + Math.round(R / tt) + "px;font-size:" + Math.round(R / tt * .8) + 'px;"' : "") + ">" + t + "</div></div>", s++
            }), l += "</div>"
        }

        function A(t) {
            Y = t.closest(".dwwl").hasClass("dwwms"), X = e(".dw-li", t).index(e(Y ? ".dw-li" : ".dw-v", t).eq(0)), Z = Math.max(X, e(".dw-li", t).index(e(Y ? ".dw-li" : ".dw-v", t).eq(-1)) - (Y ? E.rows - ("scroller" == E.mode ? 1 : 3) : 0)), et = e(".dw-ul", U).index(t)
        }

        function T(e) {
            var l = E.headerText;
            return l ? "function" == typeof l ? l.call(t, e) : l.replace(/\{value\}/i, e) : ""
        }

        function M(e) {
            return Math.round(-o.getPosition(e, !0) / R)
        }

        function k(e, t) {
            clearTimeout(it[t]), delete it[t], e.closest(".dwwl").removeClass("dwa")
        }

        function q(e, t, l, a, s) {
            var i = -l * R, n = e[0].style;
            i == ot[t] && it[t] || (ot[t] = i, r ? (n[d + "Transition"] = o.prefix + "transform " + (a ? a.toFixed(3) : 0) + "s ease-out", n[d + "Transform"] = "translate3d(0," + i + "px,0)") : n.top = i + "px", it[t] && k(e, t), a && s && (e.closest(".dwwl").addClass("dwa"), it[t] = setTimeout(function () {
                k(e, t)
            }, 1e3 * a)), nt[t] = l)
        }

        function D(t, l, a, s, i) {
            var n, o = e('.dw-li[data-val="' + t + '"]', l), d = e(".dw-li", l), r = d.index(o), u = d.length;
            if (s)A(l); else if (!o.hasClass("dw-v")) {
                for (var h = o, w = o, f = 0, m = 0; r - f >= 0 && !h.hasClass("dw-v");)f++, h = d.eq(r - f);
                for (; u > r + m && !w.hasClass("dw-v");)m++, w = d.eq(r + m);
                (f > m && m && 2 !== a || !f || 0 > r - f || 1 == a) && w.hasClass("dw-v") ? (o = w, r += m) : (o = h, r -= f)
            }
            return n = o.hasClass("dw-sel"), i && (s || (e(".dw-sel", l).removeAttr("aria-selected"), o.attr("aria-selected", "true")), e(".dw-sel", l).removeClass("dw-sel"), o.addClass("dw-sel")), {
                selected: n,
                v: s ? c(r, X, Z) : r,
                val: o.hasClass("dw-v") ? o.attr("data-val") : null
            }
        }

        function P(t, l, s, i, n) {
            B("validate", [U, l, t, i]) !== !1 && (e(".dw-ul", U).each(function (s) {
                var o = e(this), d = o.closest(".dwwl").hasClass("dwwms"), r = s == l || l === a, u = D(at._tempWheelArray[s], o, i, d, !0), h = u.selected;
                (!h || r) && (at._tempWheelArray[s] = u.val, q(o, s, u.v, r ? t : .1, r ? n : !1))
            }), B("onValidated", []), at._tempValue = E.formatValue(at._tempWheelArray, at), at.live && (at._hasValue = s || at._hasValue, S(s, s, 0, !0)), at._header.html(T(at._tempValue)), s && B("onChange", [at._tempValue]))
        }

        function L(t, l, a, s, i, n) {
            a = c(a, X, Z), at._tempWheelArray[l] = e(".dw-li", t).eq(a).attr("data-val"), q(t, l, a, i, n), setTimeout(function () {
                P(i, l, !0, s, n)
            }, 10)
        }

        function F(e) {
            var t = nt[et] + 1;
            L(e, et, t > Z ? X : t, 1, .1)
        }

        function I(e) {
            var t = nt[et] - 1;
            L(e, et, X > t ? Z : t, 2, .1)
        }

        function S(e, t, l, a, s) {
            at._isVisible && !a && P(l), at._tempValue = E.formatValue(at._tempWheelArray, at), s || (at._wheelArray = at._tempWheelArray.slice(0), at._value = at._hasValue ? at._tempValue : null), e && (B("onValueFill", [at._hasValue ? at._tempValue : "", t]), at._isInput && st.val(at._hasValue ? at._tempValue : ""), t && (at._preventChange = !0, st.change()))
        }

        var U, j, O, R, Y, E, z, B, H, N, Q, G, J, K, X, Z, $, et, tt, lt, at = this, st = e(t), it = {}, nt = {}, ot = {}, dt = [];
        n.Frame.call(this, t, i, !0), at.setVal = at._setVal = function (l, s, i, n, o) {
            at._hasValue = null !== l && l !== a, at._tempWheelArray = e.isArray(l) ? l.slice(0) : E.parseValue.call(t, l, at) || [], S(s, i === a ? s : i, o, !1, n)
        }, at.getVal = at._getVal = function (e) {
            var t = at._hasValue || e ? at[e ? "_tempValue" : "_value"] : null;
            return o.isNumeric(t) ? +t : t
        }, at.setArrayVal = at.setVal, at.getArrayVal = function (e) {
            return e ? at._tempWheelArray : at._wheelArray
        }, at.setValue = function (e, t, l, a, s) {
            at.setVal(e, t, s, a, l)
        }, at.getValue = at.getArrayVal, at.changeWheel = function (t, l, s) {
            if (U) {
                var i = 0, n = t.length;
                e.each(E.wheels, function (o, d) {
                    return e.each(d, function (o, d) {
                        return e.inArray(i, t) > -1 && (dt[i] = d, e(".dw-ul", U).eq(i).html(W(i)), n--, !n) ? (at.position(), P(l, a, s), !1) : void i++
                    }), n ? void 0 : !1
                })
            }
        }, at.getValidCell = D, at.scroll = q, at._generateContent = function () {
            var t, l = "", s = 0;
            return e.each(E.wheels, function (i, n) {
                l += '<div class="mbsc-w-p dwc' + ("scroller" != E.mode ? " dwpm" : " dwsc") + (E.showLabel ? "" : " dwhl") + '"><div class="dwwc"' + (E.maxWidth ? "" : ' style="max-width:600px;"') + ">" + (u ? "" : '<table class="dw-tbl" cellpadding="0" cellspacing="0"><tr>'), e.each(n, function (e, i) {
                    dt[s] = i, t = i.label !== a ? i.label : e, l += "<" + (u ? "div" : "td") + ' class="dwfl" style="' + (E.fixedWidth ? "width:" + (E.fixedWidth[s] || E.fixedWidth) + "px;" : (E.minWidth ? "min-width:" + (E.minWidth[s] || E.minWidth) + "px;" : "min-width:" + E.width + "px;") + (E.maxWidth ? "max-width:" + (E.maxWidth[s] || E.maxWidth) + "px;" : "")) + '"><div class="dwwl dwwl' + s + (i.multiple ? " dwwms" : "") + '">' + ("scroller" != E.mode ? '<div class="dwb-e dwwb dwwbp ' + (E.btnPlusClass || "") + '" style="height:' + R + "px;line-height:" + R + 'px;"><span>+</span></div><div class="dwb-e dwwb dwwbm ' + (E.btnMinusClass || "") + '" style="height:' + R + "px;line-height:" + R + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + t + '</div><div tabindex="0" aria-live="off" aria-label="' + t + '" role="listbox" class="dwww"><div class="dww" style="height:' + E.rows * R + 'px;"><div class="dw-ul" style="margin-top:' + (i.multiple ? "scroller" == E.mode ? 0 : R : E.rows / 2 * R - R / 2) + 'px;">', l += W(s) + '</div></div><div class="dwwo"></div></div><div class="dwwol"' + (E.selectedLineHeight ? ' style="height:' + R + "px;margin-top:-" + (R / 2 + (E.selectedLineBorder || 0)) + 'px;"' : "") + "></div></div>" + (u ? "</div>" : "</td>"), s++
                }), l += (u ? "" : "</tr></table>") + "</div></div>"
            }), l
        }, at._attachEvents = function (e) {
            e.on("keydown", ".dwwl", x).on("keyup", ".dwwl", V).on("touchstart mousedown", ".dwwl", m).on("touchmove", ".dwwl", p).on("touchend", ".dwwl", v).on("touchstart mousedown", ".dwwb", _).on("touchend", ".dwwb", y), E.mousewheel && e.on("wheel mousewheel", ".dwwl", g)
        }, at._markupReady = function (e) {
            U = e, P()
        }, at._fillValue = function () {
            at._hasValue = !0, S(!0, !0, 0, !0)
        }, at._readValue = function () {
            var e = st.val() || "";
            "" !== e && (at._hasValue = !0), at._tempWheelArray = at._hasValue && at._wheelArray ? at._wheelArray.slice(0) : E.parseValue.call(t, e, at) || [], S()
        }, at._processSettings = function () {
            E = at.settings, B = at.trigger, R = E.height, tt = E.multiline, at._isLiquid = "liquid" === (E.layout || (/top|bottom/.test(E.display) && 1 == E.wheels.length ? "liquid" : "")), E.formatResult && (E.formatValue = E.formatResult), tt > 1 && (E.cssClass = (E.cssClass || "") + " dw-ml"), "scroller" != E.mode && (E.rows = Math.max(3, E.rows))
        }, at._selectedValues = {}, f || at.init(i)
    }, n.Scroller.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _hasPreset: !0,
        _class: "scroller",
        _defaults: e.extend({}, n.Frame.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 300,
            readonly: !1,
            showLabel: !0,
            confirmOnTap: !0,
            wheels: [],
            mode: "scroller",
            preset: "",
            speedUnit: .0012,
            timeUnit: .08,
            formatValue: function (e) {
                return e.join(" ")
            },
            parseValue: function (t, l) {
                var s, i, n = [], o = [], d = 0;
                return null !== t && t !== a && (n = (t + "").split(" ")), e.each(l.settings.wheels, function (t, l) {
                    e.each(l, function (t, l) {
                        i = l.keys || l.values, s = i[0], e.each(i, function (e, t) {
                            return n[d] == t ? (s = t, !1) : void 0
                        }), o.push(s), d++
                    })
                }), o
            }
        })
    }, i.themes.scroller = i.themes.frame
}(jQuery, window, document);
;
!function (e) {
    var t = e.mobiscroll;
    t.datetime = {
        defaults: {
            shortYearCutoff: "+10",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            amText: "am",
            pmText: "pm",
            getYear: function (e) {
                return e.getFullYear()
            },
            getMonth: function (e) {
                return e.getMonth()
            },
            getDay: function (e) {
                return e.getDate()
            },
            getDate: function (e, t, a, r, n, s, u) {
                return new Date(e, t, a, r || 0, n || 0, s || 0, u || 0)
            },
            getMaxDayOfMonth: function (e, t) {
                return 32 - new Date(e, t, 32).getDate()
            },
            getWeekNumber: function (e) {
                e = new Date(e), e.setHours(0, 0, 0), e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var t = new Date(e.getFullYear(), 0, 1);
                return Math.ceil(((e - t) / 864e5 + 1) / 7)
            }
        }, formatDate: function (a, r, n) {
            if (!r)return null;
            var s, u, o = e.extend({}, t.datetime.defaults, n), c = function (e) {
                for (var t = 0; s + 1 < a.length && a.charAt(s + 1) == e;)t++, s++;
                return t
            }, m = function (e, t, a) {
                var r = "" + t;
                if (c(e))for (; r.length < a;)r = "0" + r;
                return r
            }, g = function (e, t, a, r) {
                return c(e) ? r[t] : a[t]
            }, h = "", i = !1;
            for (s = 0; s < a.length; s++)if (i)"'" != a.charAt(s) || c("'") ? h += a.charAt(s) : i = !1; else switch (a.charAt(s)) {
                case"d":
                    h += m("d", o.getDay(r), 2);
                    break;
                case"D":
                    h += g("D", r.getDay(), o.dayNamesShort, o.dayNames);
                    break;
                case"o":
                    h += m("o", (r.getTime() - new Date(r.getFullYear(), 0, 0).getTime()) / 864e5, 3);
                    break;
                case"m":
                    h += m("m", o.getMonth(r) + 1, 2);
                    break;
                case"M":
                    h += g("M", o.getMonth(r), o.monthNamesShort, o.monthNames);
                    break;
                case"y":
                    u = o.getYear(r), h += c("y") ? u : (10 > u % 100 ? "0" : "") + u % 100;
                    break;
                case"h":
                    var f = r.getHours();
                    h += m("h", f > 12 ? f - 12 : 0 === f ? 12 : f, 2);
                    break;
                case"H":
                    h += m("H", r.getHours(), 2);
                    break;
                case"i":
                    h += m("i", r.getMinutes(), 2);
                    break;
                case"s":
                    h += m("s", r.getSeconds(), 2);
                    break;
                case"a":
                    h += r.getHours() > 11 ? o.pmText : o.amText;
                    break;
                case"A":
                    h += r.getHours() > 11 ? o.pmText.toUpperCase() : o.amText.toUpperCase();
                    break;
                case"'":
                    c("'") ? h += "'" : i = !0;
                    break;
                default:
                    h += a.charAt(s)
            }
            return h
        }, parseDate: function (a, r, n) {
            var s = e.extend({}, t.datetime.defaults, n), u = s.defaultValue || new Date;
            if (!a || !r)return u;
            if (r.getTime)return r;
            r = "object" == typeof r ? r.toString() : r + "";
            var o, c = s.shortYearCutoff, m = s.getYear(u), g = s.getMonth(u) + 1, h = s.getDay(u), i = -1, f = u.getHours(), b = u.getMinutes(), l = 0, D = -1, d = !1, y = function (e) {
                var t = o + 1 < a.length && a.charAt(o + 1) == e;
                return t && o++, t
            }, k = function (e) {
                y(e);
                var t = "@" == e ? 14 : "!" == e ? 20 : "y" == e ? 4 : "o" == e ? 3 : 2, a = new RegExp("^\\d{1," + t + "}"), n = r.substr(T).match(a);
                return n ? (T += n[0].length, parseInt(n[0], 10)) : 0
            }, p = function (e, t, a) {
                var n, s = y(e) ? a : t;
                for (n = 0; n < s.length; n++)if (r.substr(T, s[n].length).toLowerCase() == s[n].toLowerCase())return T += s[n].length, n + 1;
                return 0
            }, M = function () {
                T++
            }, T = 0;
            for (o = 0; o < a.length; o++)if (d)"'" != a.charAt(o) || y("'") ? M() : d = !1; else switch (a.charAt(o)) {
                case"d":
                    h = k("d");
                    break;
                case"D":
                    p("D", s.dayNamesShort, s.dayNames);
                    break;
                case"o":
                    i = k("o");
                    break;
                case"m":
                    g = k("m");
                    break;
                case"M":
                    g = p("M", s.monthNamesShort, s.monthNames);
                    break;
                case"y":
                    m = k("y");
                    break;
                case"H":
                    f = k("H");
                    break;
                case"h":
                    f = k("h");
                    break;
                case"i":
                    b = k("i");
                    break;
                case"s":
                    l = k("s");
                    break;
                case"a":
                    D = p("a", [s.amText, s.pmText], [s.amText, s.pmText]) - 1;
                    break;
                case"A":
                    D = p("A", [s.amText, s.pmText], [s.amText, s.pmText]) - 1;
                    break;
                case"'":
                    y("'") ? M() : d = !0;
                    break;
                default:
                    M()
            }
            if (100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (m <= ("string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10)) ? 0 : -100)), i > -1)for (g = 1, h = i; ;) {
                var x = 32 - new Date(m, g - 1, 32).getDate();
                if (x >= h)break;
                g++, h -= x
            }
            f = -1 == D ? f : D && 12 > f ? f + 12 : D || 12 != f ? f : 0;
            var N = s.getDate(m, g - 1, h, f, b, l);
            return s.getYear(N) != m || s.getMonth(N) + 1 != g || s.getDay(N) != h ? u : N
        }
    }, t.formatDate = t.datetime.formatDate, t.parseDate = t.datetime.parseDate
}(jQuery);
;
!function (e, t) {
    var a = e.mobiscroll, r = a.datetime, n = new Date, i = {
        startYear: n.getFullYear() - 100,
        endYear: n.getFullYear() + 1,
        separator: " ",
        dateFormat: "mm/dd/yy",
        dateOrder: "mmddy",
        timeWheels: "hhiiA",
        timeFormat: "hh:ii A",
        dayText: "Day",
        monthText: "Month",
        yearText: "Year",
        hourText: "Hours",
        minuteText: "Minutes",
        ampmText: "&nbsp;",
        secText: "Seconds",
        nowText: "Now"
    }, s = function (n) {
        function s(e, a, r) {
            return K[a] !== t ? +e[K[a]] : L[a] !== t ? L[a] : r !== t ? r : P[a](ut)
        }

        function u(e, t, a, r) {
            e.push({values: a, keys: t, label: r})
        }

        function o(e, t, a, r) {
            return Math.min(r, Math.floor(e / t) * t + a)
        }

        function l(e) {
            return Q.getYear(e)
        }

        function f(e) {
            return Q.getMonth(e)
        }

        function h(e) {
            return Q.getDay(e)
        }

        function m(e) {
            var t = e.getHours();
            return t = it && t >= 12 ? t - 12 : t, o(t, lt, pt, wt)
        }

        function c(e) {
            return o(e.getMinutes(), ft, gt, Dt)
        }

        function d(e) {
            return o(e.getSeconds(), ht, yt, vt)
        }

        function p(e) {
            return e.getMilliseconds()
        }

        function g(e) {
            return nt && e.getHours() > 11 ? 1 : 0
        }

        function y(e) {
            if (null === e)return e;
            var t = s(e, "y"), a = s(e, "m"), r = Math.min(s(e, "d", 1), Q.getMaxDayOfMonth(t, a)), n = s(e, "h", 0);
            return Q.getDate(t, a, r, s(e, "a", 0) ? n + 12 : n, s(e, "i", 0), s(e, "s", 0), s(e, "u", 0))
        }

        function w(e, t, a) {
            return Math.floor((a - t) / e) * e + t
        }

        function D(e, t) {
            var a, r, n = !1, i = !1, s = 0, u = 0;
            if (ct = y(S(ct)), dt = y(S(dt)), v(e))return e;
            if (ct > e && (e = ct), e > dt && (e = dt), a = e, r = e, 2 !== t)for (n = v(a); !n && dt > a;)a = new Date(a.getTime() + 864e5), n = v(a), s++;
            if (1 !== t)for (i = v(r); !i && r > ct;)r = new Date(r.getTime() - 864e5), i = v(r), u++;
            return 1 === t && n ? a : 2 === t && i ? r : s >= u && i ? r : a
        }

        function v(e) {
            return ct > e ? !1 : e > dt ? !1 : x(e, $) ? !0 : x(e, X) ? !1 : !0
        }

        function x(e, t) {
            var a, r, n;
            if (t)for (r = 0; r < t.length; r++)if (a = t[r], n = a + "", !a.start)if (a.getTime) {
                if (e.getFullYear() == a.getFullYear() && e.getMonth() == a.getMonth() && e.getDate() == a.getDate())return !0
            } else if (n.match(/w/i)) {
                if (n = +n.replace("w", ""), n == e.getDay())return !0
            } else if (n = n.split("/"), n[1]) {
                if (n[0] - 1 == e.getMonth() && n[1] == e.getDate())return !0
            } else if (n[0] == e.getDate())return !0;
            return !1
        }

        function T(e, t, a, r, n, i, s) {
            var u, o, l;
            if (e)for (u = 0; u < e.length; u++)if (o = e[u], l = o + "", !o.start)if (o.getTime)Q.getYear(o) == t && Q.getMonth(o) == a && (i[Q.getDay(o) - 1] = s); else if (l.match(/w/i))for (l = +l.replace("w", ""), O = l - r; n > O; O += 7)O >= 0 && (i[O] = s); else l = l.split("/"), l[1] ? l[0] - 1 == a && (i[l[1] - 1] = s) : i[l[0] - 1] = s
        }

        function M(a, r, n, i, s, u, l, f, h) {
            var m, c, d, p, g, y, w, D, v, x, T, M, Y, S, H, V, C, b, A = {}, k = {
                h: lt,
                i: ft,
                s: ht,
                a: 1
            }, N = Q.getDate(s, u, l), O = ["a", "h", "i", "s"];
            a && (e.each(a, function (e, t) {
                t.start && (t.apply = !1, m = t.d, c = m + "", d = c.split("/"), m && (m.getTime && s == Q.getYear(m) && u == Q.getMonth(m) && l == Q.getDay(m) || !c.match(/w/i) && (d[1] && l == d[1] && u == d[0] - 1 || !d[1] && l == d[0]) || c.match(/w/i) && N.getDay() == +c.replace("w", "")) && (t.apply = !0, A[N] = !0))
            }), e.each(a, function (a, i) {
                if (Y = 0, S = 0, T = 0, M = t, y = !0, w = !0, H = !1, i.start && (i.apply || !i.d && !A[N])) {
                    for (p = i.start.split(":"), g = i.end.split(":"), x = 0; 3 > x; x++)p[x] === t && (p[x] = 0), g[x] === t && (g[x] = 59), p[x] = +p[x], g[x] = +g[x];
                    for (p.unshift(p[0] > 11 ? 1 : 0), g.unshift(g[0] > 11 ? 1 : 0), it && (p[1] >= 12 && (p[1] = p[1] - 12), g[1] >= 12 && (g[1] = g[1] - 12)), x = 0; r > x; x++)G[x] !== t && (D = o(p[x], k[O[x]], j[O[x]], z[O[x]]), v = o(g[x], k[O[x]], j[O[x]], z[O[x]]), V = 0, C = 0, b = 0, it && 1 == x && (V = p[0] ? 12 : 0, C = g[0] ? 12 : 0, b = G[0] ? 12 : 0), y || (D = 0), w || (v = z[O[x]]), (y || w) && D + V < G[x] + b && G[x] + b < v + C && (H = !0), G[x] != D && (y = !1), G[x] != v && (w = !1));
                    if (!h)for (x = r + 1; 4 > x; x++)p[x] > 0 && (Y = k[n]), g[x] < z[O[x]] && (S = k[n]);
                    H || (D = o(p[r], k[n], j[n], z[n]) + Y, v = o(g[r], k[n], j[n], z[n]) - S, y && (T = F(f, D, z[n], 0)), w && (M = F(f, v, z[n], 1))), (y || w || H) && (h ? e(".dw-li", f).slice(T, M).addClass("dw-v") : e(".dw-li", f).slice(T, M).removeClass("dw-v"))
                }
            }))
        }

        function Y(t, a) {
            return e(".dw-li", t).index(e('.dw-li[data-val="' + a + '"]', t))
        }

        function F(t, a, r, n) {
            return 0 > a ? 0 : a > r ? e(".dw-li", t).length : Y(t, a) + n
        }

        function S(a, r) {
            var n = [];
            return null === a || a === t ? a : (e.each(["y", "m", "d", "a", "h", "i", "s", "u"], function (e, i) {
                K[i] !== t && (n[K[i]] = P[i](a)), r && (L[i] = P[i](a))
            }), n)
        }

        function H(e) {
            var t, a, r, n = [];
            if (e) {
                for (t = 0; t < e.length; t++)if (a = e[t], a.start && a.start.getTime)for (r = new Date(a.start); r <= a.end;)n.push(new Date(r.getFullYear(), r.getMonth(), r.getDate())), r.setDate(r.getDate() + 1); else n.push(a);
                return n
            }
            return e
        }

        var V, C = e(this), b = {};
        if (C.is("input")) {
            switch (C.attr("type")) {
                case"date":
                    V = "yy-mm-dd";
                    break;
                case"datetime":
                    V = "yy-mm-ddTHH:ii:ssZ";
                    break;
                case"datetime-local":
                    V = "yy-mm-ddTHH:ii:ss";
                    break;
                case"month":
                    V = "yy-mm", b.dateOrder = "mmyy";
                    break;
                case"time":
                    V = "HH:ii:ss"
            }
            var A = C.attr("min"), k = C.attr("max");
            A && (b.minDate = r.parseDate(V, A)), k && (b.maxDate = r.parseDate(V, k))
        }
        var N, O, q, W, E, R, U, _, j, z, B = e.extend({}, n.settings), Q = e.extend(n.settings, a.datetime.defaults, i, b, B), Z = 0, G = [], I = [], J = [], K = {}, L = {}, P = {
            y: l,
            m: f,
            d: h,
            h: m,
            i: c,
            s: d,
            u: p,
            a: g
        }, X = Q.invalid, $ = Q.valid, et = Q.preset, tt = Q.dateOrder, at = Q.timeWheels, rt = tt.match(/D/), nt = at.match(/a/i), it = at.match(/h/), st = "datetime" == et ? Q.dateFormat + Q.separator + Q.timeFormat : "time" == et ? Q.timeFormat : Q.dateFormat, ut = new Date, ot = Q.steps || {}, lt = ot.hour || Q.stepHour || 1, ft = ot.minute || Q.stepMinute || 1, ht = ot.second || Q.stepSecond || 1, mt = ot.zeroBased, ct = Q.minDate || new Date(Q.startYear, 0, 1), dt = Q.maxDate || new Date(Q.endYear, 11, 31, 23, 59, 59), pt = mt ? 0 : ct.getHours() % lt, gt = mt ? 0 : ct.getMinutes() % ft, yt = mt ? 0 : ct.getSeconds() % ht, wt = w(lt, pt, it ? 11 : 23), Dt = w(ft, gt, 59), vt = w(ft, gt, 59);
        if (V = V || st, et.match(/date/i)) {
            for (e.each(["y", "m", "d"], function (e, t) {
                N = tt.search(new RegExp(t, "i")), N > -1 && J.push({o: N, v: t})
            }), J.sort(function (e, t) {
                return e.o > t.o ? 1 : -1
            }), e.each(J, function (e, t) {
                K[t.v] = e
            }), E = [], O = 0; 3 > O; O++)if (O == K.y) {
                for (Z++, W = [], q = [], R = Q.getYear(ct), U = Q.getYear(dt), N = R; U >= N; N++)q.push(N), W.push((tt.match(/yy/i) ? N : (N + "").substr(2, 2)) + (Q.yearSuffix || ""));
                u(E, q, W, Q.yearText)
            } else if (O == K.m) {
                for (Z++, W = [], q = [], N = 0; 12 > N; N++) {
                    var xt = tt.replace(/[dy]/gi, "").replace(/mm/, (9 > N ? "0" + (N + 1) : N + 1) + (Q.monthSuffix || "")).replace(/m/, N + 1 + (Q.monthSuffix || ""));
                    q.push(N), W.push(xt.match(/MM/) ? xt.replace(/MM/, '<span class="dw-mon">' + Q.monthNames[N] + "</span>") : xt.replace(/M/, '<span class="dw-mon">' + Q.monthNamesShort[N] + "</span>"))
                }
                u(E, q, W, Q.monthText)
            } else if (O == K.d) {
                for (Z++, W = [], q = [], N = 1; 32 > N; N++)q.push(N), W.push((tt.match(/dd/i) && 10 > N ? "0" + N : N) + (Q.daySuffix || ""));
                u(E, q, W, Q.dayText)
            }
            I.push(E)
        }
        if (et.match(/time/i)) {
            for (_ = !0, J = [], e.each(["h", "i", "s", "a"], function (e, t) {
                e = at.search(new RegExp(t, "i")), e > -1 && J.push({o: e, v: t})
            }), J.sort(function (e, t) {
                return e.o > t.o ? 1 : -1
            }), e.each(J, function (e, t) {
                K[t.v] = Z + e
            }), E = [], O = Z; Z + 4 > O; O++)if (O == K.h) {
                for (Z++, W = [], q = [], N = pt; (it ? 12 : 24) > N; N += lt)q.push(N), W.push(it && 0 === N ? 12 : at.match(/hh/i) && 10 > N ? "0" + N : N);
                u(E, q, W, Q.hourText)
            } else if (O == K.i) {
                for (Z++, W = [], q = [], N = gt; 60 > N; N += ft)q.push(N), W.push(at.match(/ii/) && 10 > N ? "0" + N : N);
                u(E, q, W, Q.minuteText)
            } else if (O == K.s) {
                for (Z++, W = [], q = [], N = yt; 60 > N; N += ht)q.push(N), W.push(at.match(/ss/) && 10 > N ? "0" + N : N);
                u(E, q, W, Q.secText)
            } else if (O == K.a) {
                Z++;
                var Tt = at.match(/A/);
                u(E, [0, 1], Tt ? [Q.amText.toUpperCase(), Q.pmText.toUpperCase()] : [Q.amText, Q.pmText], Q.ampmText)
            }
            I.push(E)
        }
        return n.getVal = function (e) {
            return n._hasValue || e ? y(n.getArrayVal(e)) : null
        }, n.setDate = function (e, t, a, r, i) {
            n.setArrayVal(S(e), t, i, r, a)
        }, n.getDate = n.getVal, n.format = st, n.order = K, n.handlers.now = function () {
            n.setDate(new Date, !1, .3, !0, !0)
        }, n.buttons.now = {text: Q.nowText, handler: "now"}, X = H(X), $ = H($), j = {
            y: ct.getFullYear(),
            m: 0,
            d: 1,
            h: pt,
            i: gt,
            s: yt,
            a: 0
        }, z = {y: dt.getFullYear(), m: 11, d: 31, h: wt, i: Dt, s: vt, a: 1}, {
            wheels: I,
            headerText: Q.headerText ? function () {
                return r.formatDate(st, y(n.getArrayVal(!0)), Q)
            } : !1,
            formatValue: function (e) {
                return r.formatDate(V, y(e), Q)
            },
            parseValue: function (e) {
                return e || (L = {}), S(e ? r.parseDate(V, e, Q) : Q.defaultValue || new Date, !!e && !!e.getTime)
            },
            validate: function (a, r, i, u) {
                var o = D(y(n.getArrayVal(!0)), u), l = S(o), f = s(l, "y"), h = s(l, "m"), m = !0, c = !0;
                e.each(["y", "m", "d", "a", "h", "i", "s"], function (r, n) {
                    if (K[n] !== t) {
                        var i = j[n], u = z[n], o = 31, d = s(l, n), p = e(".dw-ul", a).eq(K[n]);
                        if ("d" == n && (o = Q.getMaxDayOfMonth(f, h), u = o, rt && e(".dw-li", p).each(function () {
                                var t = e(this), a = t.data("val"), r = Q.getDate(f, h, a).getDay(), n = tt.replace(/[my]/gi, "").replace(/dd/, (10 > a ? "0" + a : a) + (Q.daySuffix || "")).replace(/d/, a + (Q.daySuffix || ""));
                                e(".dw-i", t).html(n.match(/DD/) ? n.replace(/DD/, '<span class="dw-day">' + Q.dayNames[r] + "</span>") : n.replace(/D/, '<span class="dw-day">' + Q.dayNamesShort[r] + "</span>"))
                            })), m && ct && (i = P[n](ct)), c && dt && (u = P[n](dt)), "y" != n) {
                            var g = Y(p, i), y = Y(p, u);
                            e(".dw-li", p).removeClass("dw-v").slice(g, y + 1).addClass("dw-v"), "d" == n && e(".dw-li", p).removeClass("dw-h").slice(o).addClass("dw-h")
                        }
                        if (i > d && (d = i), d > u && (d = u), m && (m = d == i), c && (c = d == u), "d" == n) {
                            var w = Q.getDate(f, h, 1).getDay(), D = {};
                            T(X, f, h, w, o, D, 1), T($, f, h, w, o, D, 0), e.each(D, function (t, a) {
                                a && e(".dw-li", p).eq(t).removeClass("dw-v")
                            })
                        }
                    }
                }), _ && e.each(["a", "h", "i", "s"], function (r, i) {
                    var o = s(l, i), m = s(l, "d"), c = e(".dw-ul", a).eq(K[i]);
                    K[i] !== t && (M(X, r, i, l, f, h, m, c, 0), M($, r, i, l, f, h, m, c, 1), G[r] = +n.getValidCell(o, c, u).val)
                }), n._tempWheelArray = l
            }
        }
    };
    e.each(["date", "time", "datetime"], function (e, t) {
        a.presets.scroller[t] = s
    })
}(jQuery);
;
!function (e) {
    e.each(["date", "time", "datetime"], function (t, i) {
        e.mobiscroll.presetShort(i)
    })
}(jQuery);
;
!function (e) {
    e.mobiscroll.themes.frame["android-holo-light"] = {
        baseTheme: "android-holo",
        dateOrder: "Mddyy",
        rows: 5,
        minWidth: 76,
        height: 36,
        showLabel: !1,
        selectedLineHeight: !0,
        selectedLineBorder: 2,
        useShortLabels: !0,
        icon: {filled: "star3", empty: "star"},
        btnPlusClass: "mbsc-ic mbsc-ic-arrow-down6",
        btnMinusClass: "mbsc-ic mbsc-ic-arrow-up6"
    }, e.mobiscroll.themes.listview["android-holo-light"] = {baseTheme: "android-holo"}, e.mobiscroll.themes.menustrip["android-holo-light"] = {baseTheme: "android-holo"}, e.mobiscroll.themes.form["android-holo-light"] = {baseTheme: "android-holo"}
}(jQuery);
;
!function (e) {
    e.mobiscroll.i18n.zh = {
        setText: "确定",
        cancelText: "取消",
        clearText: "明确",
        selectedText: "选",
        dateFormat: "yy/mm/dd",
        dateOrder: "yymmdd",
        dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
        dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
        dayText: "日",
        hourText: "时",
        minuteText: "分",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        monthText: "月",
        secText: "秒",
        timeFormat: "HH:ii",
        timeWheels: "HHii",
        yearText: "年",
        nowText: "当前",
        pmText: "下午",
        amText: "上午",
        dateText: "日",
        timeText: "时间",
        calendarText: "日历",
        closeText: "关闭",
        fromText: "开始时间",
        toText: "结束时间",
        wholeText: "合计",
        fractionText: "分数",
        unitText: "单位",
        labels: ["年", "月", "日", "小时", "分钟", "秒", ""],
        labelsShort: ["年", "月", "日", "点", "分", "秒", ""],
        startText: "开始",
        stopText: "停止",
        resetText: "重置",
        lapText: "圈",
        hideText: "隐藏",
        backText: "背部",
        undoText: "复原",
        offText: "关闭",
        onText: "开启"
    }
}(jQuery);

var index = (function(){

    var O = function(){},
        fn = O.prototype;

    var tool = (function() {
        var ua = navigator.userAgent.toLowerCase(),
            isAndroid = /android/.test(ua),
            isIOS = /iphone|ipad|ipod|itouch/.test(ua),
            getDataAttribute = function( $dom, type ) {
                return $dom.attr(type);
            },
            open = function( url, cb ) {
                var last = Date.now();
                ifr = document.createElement('IFRAME');
                ifr.src = url;
                ifr.style.position = 'absolute';
                ifr.style.left = '-1000px';
                ifr.style.top = '-1000px';
                ifr.style.width = '1px';
                ifr.style.height = '1px';

                //设置一个10秒的动画，用于检查客户端是否被调起。
                ifr.style.webkitTransition = 'all 1s';
                document.body.appendChild(ifr);

                setTimeout(function() {
                    ifr.addEventListener('webkitTransitionEnd', function() {
                        document.body.removeChild(ifr);
                        if( Date.now() - last < 6000 ) {
                            'function' === typeof cb && cb();
                        }
                    }, false);
                    ifr.style.left = '-10px';    //动画使用
                }, 0);

            };

        return {
            isAndroid: isAndroid,
            isIOS: isIOS,
            getDataAttribute: getDataAttribute,
            open: open
        };
    })();

    fn.data = {
        userId:''
    };

    fn.choice = function() {
        var _this = this;

        $('.select li').on('click',function() {
            $(this).addClass('current').siblings().removeClass('current');

            if( $('.choice01').hasClass('current') ){
                $('.intro').text('【五路運財符】請符、開光、加持');
            }
            else if( $('.choice02').hasClass('current') ){
                $('.intro').text('五路招財套餐包含【五路運財符+五路財神招財項鏈】');
            }
        });

        $('.btn-buy').on('click',function(){
            if( $('.choice01').hasClass('current') ){//跳转大德符咒
                _this.communicateWithClient()
            }
            else if( $('.choice02').hasClass('current') ){//判断登录下单
                _this.loginAndGoToShop();
            }

        })
    };

    fn.communicateWithClient = function() {//大德
        if( mmc.client.is('linghit ljms') ){
            VA.show('系统确认中...');
            event.stopPropagation();

            if( tool.isAndroid ) {
                var obj = {
                    "controller":"oms.mmc.fu.HomeActivity",
                    "gotoParams":{"title":"","url":""},
                    "gotoType":0
                };
                lingjiWebApp.MMCGoto( JSON.stringify(obj),"" );
            }
            else if( tool.isIOS ) {
                var obj2 = {controller:"comlyldadefuzhou",gotoType:0};
                MMCGoto( obj2 );
            }
        }
    };

    fn.loginAndGoToShop = function() {//登录 - 下单
        var _this = this;

        if( mmc.client.is('linghit ljms') ) {

            if ( tool.isAndroid ) {
                if ( (mmc.user.info.userid) ) {
                    $('.popup').show();
                    _this.data.userId = mmc.user.info.userid;
                    //_this.submit();
                }
                else {
                    $('.login-popup').show();
                    $('#j-prayer-login').on('click',function(){
                        $('.login-popup').hide();
                        lingjiWebApp.MMCLogin(null);
                    });
                }
            }

            else if (tool.isIOS) {
                mmc.user.info = getUserInfo();

                if ((mmc.user.info.userid)) {
                    $('.popup').show();
                    _this.data.userId = mmc.user.info.userid;
                    //_this.submit();
                }
                else {
                    $('.login-popup').show();
                    $('#j-prayer-login').on('click',function(){
                        $('.login-popup').hide();
                        MMCLogin(null);
                    });
                }
            }
        }
    };

    fn.clickHandleEvent = function() {

        $('.area').selectAlert({
            elWrap:$('#wrapper'),
            defautlArea:{
                curId:1,
                curText:"中国大陆"
            },
            data:[
                {id:1,text:"中国大陆"},
                {id:2,text:"中国香港"},
                {id:3,text:"台湾"},
                {id:4,text:"中国澳门"},
                {id:5,text:"西马来西亚"},
                {id:6,text:"东马来西亚"},
                {id:7,text:"澳大利亚"},
                {id:8,text:"新加坡"},
                {id:9,text:"泰国"},
                {id:10,text:"印尼"},
                {id:11,text:"韩国"},
                {id:12,text:"美国"},
                {id:13,text:"加拿大"},
                {id:14,text:"墨西哥"},
                {id:15,text:"欧洲"},
                {id:16,text:"孟加拉"},
                {id:17,text:"印度"},
                {id:18,text:"其他国家"}
            ]
        });

        $('.cancel a').on('click',function(){
            $('.popup').hide();
        });
    };

    fn.submit = function() {
        var _this = this;

        $('.go a').on('click',function() {
            var username = $('#username').val(),
                phone = $('#phone').val(),
                address = $('#address').val(),
                area = $('#area').val(),
                daDeUserId = _this.data.userId;

            if ( $.trim(username) == '' || username == undefined ){
                VA.show('姓名不能为空！');
                return false;
            }
            if ($.trim(phone) == '' || phone == undefined ){
                VA.show('电话号码不能为空！');
                return false;
            } else if( !isMobile(phone) ){
                VA.show('电话号码格式不正确！');
                return false;
            }
            if ($.trim(address) == '' || address == undefined ){
                VA.show('地址不能为空！');
                return false;
            }

            $.ajax({
                url:"/index.php?s=shop&c=cart&a=paynow",
                type:"POST",
                dataType:"json",
                data:{
                    id: '1989',
                    name: username,
                    phone: phone,
                    address: address,
                    area: area,
                    num: '1',
                    daDeUserId: daDeUserId,
                    channel_mark: 'lingjimiaosuan_dadeAction'
                },
                success: function(data){
                    if(data.status == 1) {
                        window.location = data.url;
                    } else {
                        VA.show(data.msg);
                    }
                },
                error: function(data){
                    VA.show('ajax error!');
                }
            })
        });
    };

    /**
     *判断电话格式
     */
    function isMobile(str) {
        var pattern = /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/;
        return pattern.test(str);
    }

    fn.onLoad = function() {
        this.choice();
        this.clickHandleEvent();
        this.submit();
    };

    return new O;

})();

$(function(){
    index.onLoad();
});