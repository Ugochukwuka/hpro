!function(t,e){if("function"==typeof define&&define.amd)define(["jquery"],e);else if("undefined"!=typeof exports)e(require("jquery"));else{e(t.jQuery),t.jqueryAsPieProgressEs={}}}(this,(function(t){"use strict";var e,i=(e=t)&&e.__esModule?e:{default:e};var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);if(!e)return i;for(var n in e)Object.hasOwnProperty.call(e,n)&&i.setAttribute(n,e[n]);return i};Date.now||(Date.now=function(){return(new Date).getTime()});for(var a=["webkit","moz"],r=0;r<a.length&&!window.requestAnimationFrame;++r){var o=a[r];window.requestAnimationFrame=window[o+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS (6|7|8)/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var h=0;window.requestAnimationFrame=function(t){var e=u(),i=Math.max(h+16,e);return setTimeout((function(){t(h=i)}),i-e)},window.cancelAnimationFrame=clearTimeout}var u=function(){return void 0!==window.performance&&window.performance.now?window.performance.now():Date.now()},l="createElementNS"in document&&new s("svg",{}).createSVGRect,f=function(t,e,i,n){var s=function(t,e){return 1-3*e+3*t},a=function(t,e){return 3*e-6*t},r=function(t){return 3*t},o=function(t,e,i){return((s(e,i)*t+a(e,i))*t+r(e))*t};return t===e&&i===n?{css:"linear",fn:function(t){return t}}:{css:"cubic-bezier("+t+","+e+","+i+","+n+")",fn:function(h){return o(function(e){for(var n,h,u,l=e,f=0;f<4;++f){var c=(n=l,3*s(h=t,u=i)*n*n+2*a(h,u)*n+r(h));if(0===c)return l;l-=(o(l,t,i)-e)/c}return l}(h),e,n)}}},c={ease:f(.25,.1,.25,1),linear:f(0,0,1,1),"ease-in":f(.42,0,1,1),"ease-out":f(0,0,.58,1),"ease-in-out":f(.42,0,.58,1)},m={namespace:"asPieProgress",classes:{svg:"pie_progress__svg",element:"pie_progress",number:"pie_progress__number",content:"pie_progress__content"},min:0,max:100,goal:100,size:160,speed:15,barcolor:"#ef1e25",barsize:"4",trackcolor:"#f2f2f2",fillcolor:"none",easing:"ease",numberCallback:function(t){return Math.round(this.getPercentage(t))+"%"},contentCallback:null},d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,this.$element=(0,i.default)(e),this.options=i.default.extend(!0,{},m,n,this.$element.data()),this.namespace=this.options.namespace,this.classes=this.options.classes,this.easing=c[this.options.easing]||c.ease,this.$element.addClass(this.classes.element),this.min=this.$element.attr("aria-valuemin"),this.max=this.$element.attr("aria-valuemax"),this.min=this.min?parseInt(this.min,10):this.options.min,this.max=this.max?parseInt(this.max,10):this.options.max,this.first=this.$element.attr("aria-valuenow"),this.first=this.first?parseInt(this.first,10):this.options.first?this.options.first:this.min,this.now=this.first,this.goal=this.options.goal,this._frameId=null,this.initialized=!1,this._trigger("init"),this.init()}return n(t,[{key:"init",value:function(){this.$number=this.$element.find("."+this.classes.number),this.$content=this.$element.find("."+this.classes.content),this.size=this.options.size,this.width=this.size,this.height=this.size,this.prepare(),this.initialized=!0,this._trigger("ready")}},{key:"prepare",value:function(){l&&(this.svg=new s("svg",{version:"1.1",preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 "+this.width+" "+this.height}),this.buildTrack(),this.buildBar(),(0,i.default)('<div class="'+this.classes.svg+'"></div>').append(this.svg).appendTo(this.$element))}},{key:"buildTrack",value:function(){var t=this.size,e=this.size/2,i=t/2,n=this.options.barsize,a=new s("ellipse",{rx:e-n/2,ry:i-n/2,cx:e,cy:i,stroke:this.options.trackcolor,fill:this.options.fillcolor,"stroke-width":n});this.svg.appendChild(a)}},{key:"buildBar",value:function(){if(l){var t=new s("path",{fill:"none","stroke-width":this.options.barsize,stroke:this.options.barcolor});this.bar=t,this.svg.appendChild(t),this._drawBar(this.first),this._updateBar()}}},{key:"_drawBar",value:function(t){if(l){this.barGoal=t;var e=this.size,i=this.size/2,n=e/2,s=this.options.barsize,a=Math.min(i,n)-s/2;this.r=a;var r=this.getPercentage(t);100===r&&(r-=1e-4);var o=0+r*Math.PI*2/100,h=i+a*Math.sin(0),u=i+a*Math.sin(o),f=n-a*Math.cos(0),c=n-a*Math.cos(o),m=0;o-0>Math.PI&&(m=1);var d="M"+h+","+f+" A"+a+","+a+" 0 "+m+" 1 "+u+","+c;this.bar.setAttribute("d",d)}}},{key:"_updateBar",value:function(){if(l){var t=this.getPercentage(this.now),e=this.bar.getTotalLength(),i=e*(1-t/this.getPercentage(this.barGoal));this.bar.style.strokeDasharray=e+" "+e,this.bar.style.strokeDashoffset=i}}},{key:"_trigger",value:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var s=[this].concat(i);this.$element.trigger("asPieProgress::"+t,s);var a="on"+(t=t.replace(/\b\w+\b/g,(function(t){return t.substring(0,1).toUpperCase()+t.substring(1)})));"function"==typeof this.options[a]&&this.options[a].apply(this,i)}},{key:"getPercentage",value:function(t){return 100*(t-this.min)/(this.max-this.min)}},{key:"go",value:function(t){var e,i=this;this._clear(),"string"==typeof(e=t)&&-1!==e.indexOf("%")&&(t=parseInt(t.replace("%",""),10),t=Math.round(this.min+t/100*(this.max-this.min))),void 0===t&&(t=this.goal),t>this.max?t=this.max:t<this.min&&(t=this.min),this.barGoal<t&&this._drawBar(t);var n=i.now,s=u(),a=s+100*Math.abs(n-t)*i.options.speed/(i.max-i.min);i._frameId=window.requestAnimationFrame((function e(r){var o=void 0;if(r>a)o=t;else{var h=(r-s)/i.options.speed;o=Math.round(i.easing.fn(h/100)*(i.max-i.min)),t>n?(o=n+o)>t&&(o=t):(o=n-o)<t&&(o=t)}i._update(o),o===t?(window.cancelAnimationFrame(i._frameId),i._frameId=null,i.now===i.goal&&i._trigger("finish")):i._frameId=window.requestAnimationFrame(e)}))}},{key:"_update",value:function(t){this.now=t,this._updateBar(),this.$element.attr("aria-valuenow",this.now),this.$number.length>0&&"function"==typeof this.options.numberCallback&&this.$number.html(this.options.numberCallback.call(this,[this.now])),this.$content.length>0&&"function"==typeof this.options.contentCallback&&this.$content.html(this.options.contentCallback.call(this,[this.now])),this._trigger("update",t)}},{key:"_clear",value:function(){this._frameId&&(window.cancelAnimationFrame(this._frameId),this._frameId=null)}},{key:"get",value:function(){return this.now}},{key:"start",value:function(){this._clear(),this._trigger("start"),this.go(this.goal)}},{key:"reset",value:function(){this._clear(),this._drawBar(this.first),this._update(this.first),this._trigger("reset")}},{key:"stop",value:function(){this._clear(),this._trigger("stop")}},{key:"finish",value:function(){this._clear(),this._update(this.goal),this._trigger("finish")}},{key:"destroy",value:function(){this.$element.data("asPieProgress",null),this._trigger("destroy")}}],[{key:"registerEasing",value:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];c[t]=f.apply(void 0,i)}},{key:"getEasing",value:function(t){return c[t]}},{key:"setDefaults",value:function(t){i.default.extend(!0,m,i.default.isPlainObject(t)&&t)}}]),t}(),g="asPieProgress",p=i.default.fn.asPieProgress,v=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];if("string"==typeof t){var a=t;if(/^_/.test(a))return!1;if(!/^(get)/.test(a))return this.each((function(){var t=i.default.data(this,g);t&&"function"==typeof t[a]&&t[a].apply(t,n)}));var r=this.first().data(g);if(r&&"function"==typeof r[a])return r[a].apply(r,n)}return this.each((function(){(0,i.default)(this).data(g)||(0,i.default)(this).data(g,new d(this,t))}))};i.default.fn.asPieProgress=v,i.default.asPieProgress=i.default.extend({setDefaults:d.setDefaults,registerEasing:d.registerEasing,getEasing:d.getEasing,noConflict:function(){return i.default.fn.asPieProgress=p,v}},{version:"0.4.7"})}));