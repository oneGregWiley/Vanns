/* =========================================================

// jquery.innerfade.js

// Datum: 2008-02-14
// Firma: Medienfreunde Hofmann & Baldes GbR
// Author: Torsten Baldes
// Mail: t.baldes@medienfreunde.com
// Web: http://medienfreunde.com

// based on the work of Matt Oakes http://portfolio.gizone.co.uk/applications/slideshow/
// and Ralf S. Engelschall http://trainofthoughts.org/

 *
 *  <ul id="news"> 
 *      <li>content 1</li>
 *      <li>content 2</li>
 *      <li>content 3</li>
 *  </ul>
 *  
 *  $('#news').innerfade({ 
 *	  animationtype: Type of animation 'fade' or 'slide' (Default: 'fade'), 
 *	  speed: Fading-/Sliding-Speed in milliseconds or keywords (slow, normal or fast) (Default: 'normal'), 
 *	  timeout: Time between the fades in milliseconds (Default: '2000'), 
 *	  type: Type of slideshow: 'sequence', 'random' or 'random_start' (Default: 'sequence'), 
 * 		containerheight: Height of the containing element in any css-height-value (Default: 'auto'),
 *	  runningclass: CSS-Class which the container get’s applied (Default: 'innerfade'),
 *	  children: optional children selector (Default: null)
 *  }); 
 *

// ========================================================= */function removeFilter(a){a.style.removeAttribute&&a.style.removeAttribute("filter")}(function(a){a.fn.innerfade=function(b){return this.each(function(){a.innerfade(this,b)})};a.innerfade=function(b,c){var d={animationtype:"fade",speed:"normal",type:"sequence",timeout:2e3,containerheight:"auto",runningclass:"innerfade",children:null};c&&a.extend(d,c);if(d.children===null)var e=a(b).children();else var e=a(b).children(d.children);if(e.length>1){a(b).css("position","relative").css("height",d.containerheight).addClass(d.runningclass);for(var f=0;f<e.length;f++)a(e[f]).css("z-index",String(e.length-f)).css("position","absolute").hide();if(d.type=="sequence"){setTimeout(function(){a.innerfade.next(e,d,1,0)},d.timeout);a(e[0]).show()}else if(d.type=="random"){var g=Math.floor(Math.random()*e.length);setTimeout(function(){do h=Math.floor(Math.random()*e.length);while(g==h);a.innerfade.next(e,d,h,g)},d.timeout);a(e[g]).show()}else if(d.type=="random_start"){d.type="sequence";var h=Math.floor(Math.random()*e.length);setTimeout(function(){a.innerfade.next(e,d,(h+1)%e.length,h)},d.timeout);a(e[h]).show()}else alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'")}};a.innerfade.next=function(b,c,d,e){if(c.animationtype=="slide"){a(b[e]).slideUp(c.speed);a(b[d]).slideDown(c.speed)}else if(c.animationtype=="fade"){a(b[e]).fadeOut(c.speed);a(b[d]).fadeIn(c.speed,function(){removeFilter(a(this)[0])})}else alert("Innerfade-animationtype must either be 'slide' or 'fade'");if(c.type=="sequence")if(d+1<b.length){d+=1;e=d-1}else{d=0;e=b.length-1}else if(c.type=="random"){e=d;while(d==e)d=Math.floor(Math.random()*b.length)}else alert("Innerfade-Type must either be 'sequence', 'random' or 'random_start'");setTimeout(function(){a.innerfade.next(b,c,d,e)},c.timeout)}})(jQuery);(function(a){a.fn.hoverIntent=function(b,c){var d={sensitivity:7,interval:100,timeout:0};d=a.extend(d,c?{over:b,out:c}:b);var e,f,g,h,i=function(a){e=a.pageX;f=a.pageY},j=function(b,c){c.hoverIntent_t=clearTimeout(c.hoverIntent_t);if(Math.abs(g-e)+Math.abs(h-f)<d.sensitivity){a(c).unbind("mousemove",i);c.hoverIntent_s=1;return d.over.apply(c,[b])}g=e;h=f;c.hoverIntent_t=setTimeout(function(){j(b,c)},d.interval)},k=function(a,b){b.hoverIntent_t=clearTimeout(b.hoverIntent_t);b.hoverIntent_s=0;return d.out.apply(b,[a])},l=function(b){var c=jQuery.extend({},b),e=this;e.hoverIntent_t&&(e.hoverIntent_t=clearTimeout(e.hoverIntent_t));if(b.type=="mouseenter"){g=c.pageX;h=c.pageY;a(e).bind("mousemove",i);e.hoverIntent_s!=1&&(e.hoverIntent_t=setTimeout(function(){j(c,e)},d.interval))}else{a(e).unbind("mousemove",i);e.hoverIntent_s==1&&(e.hoverIntent_t=setTimeout(function(){k(c,e)},d.timeout))}};return this.bind("mouseenter",l).bind("mouseleave",l)}})(jQuery);$.each($("#submenu .container"),function(){var a=$(this).height();$(this).css("height",a)});$("#submenu").hide();$(".menubar li").click(function(){var a=$(this).attr("class");arr=a.split(" ");navToOpen=arr.shift();containerHeight=$("#"+navToOpen).height();$("#submenu").css("height",containerHeight);$("#submenu").css("visibility","visible");$(".menubar").addClass("open");if(!$(this).hasClass("active")){$("#submenu").is(":hidden")&&$("#submenu").slideDown(150,function(){$(".marketing").fadeIn(1e3);$(this).addClass("open")});$(this).addClass("active")}else if($(this).hasClass("active")){$("#submenu").removeClass("open").slideUp(150,function(){$(".marketing").hide();$(".menubar li").removeClass("active");$(".menubar").removeClass("open")});$(this).removeClass("active")}$(this).siblings().stop(!0,!0).removeClass("active");$("#"+navToOpen).siblings().hide();$("#"+navToOpen).fadeIn()});var mouseIsIn=!1;$("nav").hover(function(){mouseIsIn=!0},function(){mouseIsIn=!1});$("body").mouseup(function(){mouseIsIn||$("#submenu").removeClass("open").slideUp(100,function(){$(".marketing").hide();$(".menubar li").removeClass("active");$(".menubar").removeClass("open")})});!function(a){"use strict";var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b;this.$element=a(c);this.options=this.getOptions(d);this.enabled=!0;if(this.options.trigger!="manual"){e=this.options.trigger=="hover"?"mouseenter":"focus";f=this.options.trigger=="hover"?"mouseleave":"blur";this.$element.on(e,this.options.selector,a.proxy(this.enter,this));this.$element.on(f,this.options.selector,a.proxy(this.leave,this))}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){b=a.extend({},a.fn[this.type].defaults,b,this.$element.data());b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay});return b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)c.show();else{c.hoverState="in";setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)}},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.hide)c.hide();else{c.hoverState="out";setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)}},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip();this.setContent();this.options.animation&&a.addClass("fade");f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement;b=/in/.test(f);a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body);c=this.getPosition(b);d=a[0].offsetWidth;e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.css(g).addClass(f).addClass("in")}},setContent:function(){var a=this.tip();a.find(".tooltip-inner").html(this.getTitle());a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).remove()},500);c.one(a.support.transition.end,function(){clearTimeout(b);c.remove()})}var b=this,c=this.tip();c.removeClass("in");a.support.transition&&this.$tip.hasClass("fade")?d():c.remove()},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title);a=a.toString().replace(/(^\s*|\s*$)/,"");return a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}};a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f));typeof c=="string"&&e[c]()})};a.fn.tooltip.Constructor=b;a.fn.tooltip.defaults={animation:!0,delay:0,selector:!1,placement:"top",trigger:"hover",title:"",template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'}}(window.jQuery);!function(a){a(function(){"use strict";a.support.transition=function(){var b=document.body||document.documentElement,c=b.style,d=c.transition!==undefined||c.WebkitTransition!==undefined||c.MozTransition!==undefined||c.MsTransition!==undefined||c.OTransition!==undefined;return d&&{end:function(){var b="TransitionEnd";a.browser.webkit?b="webkitTransitionEnd":a.browser.mozilla?b="transitionend":a.browser.opera&&(b="oTransitionEnd");return b}()}}()})}(window.jQuery);!function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype={constructor:c,close:function(b){function f(){e.remove();e.trigger("closed")}var c=a(this),d=c.attr("data-target"),e;if(!d){d=c.attr("href");d=d&&d.replace(/.*(?=#[^\s]*$)/,"")}e=a(d);e.trigger("close");b&&b.preventDefault();e.length||(e=c.hasClass("alert")?c:c.parent());e.removeClass("in");a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()}};a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this));typeof b=="string"&&e[b].call(d)})};a.fn.alert.Constructor=c;a(function(){a("body").on("click.alert.data-api",b,c.prototype.close)})}(window.jQuery);!function(a){"use strict";function c(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end);d.call(b)},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c);d.call(b)})}function d(a){this.$element.hide().trigger("hidden");e.call(this)}function e(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body);this.options.backdrop!="static"&&this.$backdrop.click(a.proxy(this.hide,this));e&&this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");e?this.$backdrop.one(a.support.transition.end,b):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,a.proxy(f,this)):f.call(this)}else b&&b()}function f(){this.$backdrop.remove();this.$backdrop=null}function g(){var b=this;this.isShown&&this.options.keyboard?a(document).on("keyup.dismiss.modal",function(a){a.which==27&&b.hide()}):this.isShown||a(document).off("keyup.dismiss.modal")}var b=function(b,c){this.options=c;this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this))};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this;if(this.isShown)return;a("body").addClass("modal-open");this.isShown=!0;this.$element.trigger("show");g.call(this);e.call(this,function(){var c=a.support.transition&&b.$element.hasClass("fade");!b.$element.parent().length&&b.$element.appendTo(document.body);b.$element.show();c&&b.$element[0].offsetWidth;b.$element.addClass("in");c?b.$element.one(a.support.transition.end,function(){b.$element.trigger("shown")}):b.$element.trigger("shown")})},hide:function(b){b&&b.preventDefault();if(!this.isShown)return;var e=this;this.isShown=!1;a("body").removeClass("modal-open");g.call(this);this.$element.trigger("hide").removeClass("in");a.support.transition&&this.$element.hasClass("fade")?c.call(this):d.call(this)}};a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,typeof c=="object"&&c);e||d.data("modal",e=new b(this,f));typeof c=="string"?e[c]():f.show&&e.show()})};a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0};a.fn.modal.Constructor=b;a(function(){a("body").on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({},e.data(),c.data());b.preventDefault();e.modal(f)})})}(window.jQuery);!function(a){"use strict";function d(){a(b).parent().removeClass("open")}var b='[data-toggle="dropdown"]',c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),e=c.attr("data-target"),f,g;if(!e){e=c.attr("href");e=e&&e.replace(/.*(?=#[^\s]*$)/,"")}f=a(e);f.length||(f=c.parent());g=f.hasClass("open");d();!g&&f.toggleClass("open");return!1}};a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this));typeof b=="string"&&e[b].call(d)})};a.fn.dropdown.Constructor=c;a(function(){a("html").on("click.dropdown.data-api",d);a("body").on("click.dropdown.data-api",b,c.prototype.toggle)})}(window.jQuery);!function(a){"use strict";function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c);this.$scrollElement=e.on("scroll.scroll.data-api",d);this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.$body=a("body").on("click.scroll.data-api",this.selector,d);this.refresh();this.process()}b.prototype={constructor:b,refresh:function(){this.targets=this.$body.find(this.selector).map(function(){var b=a(this).attr("href");return/^#\w/.test(b)&&a(b).length?b:null});this.offsets=a.map(this.targets,function(b){return a(b).position().top})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.offsets,c=this.targets,d=this.activeTarget,e;for(e=b.length;e--;)d!=c[e]&&a>=b[e]&&(!b[e+1]||a<=b[e+1])&&this.activate(c[e])},activate:function(a){var b;this.activeTarget=a;this.$body.find(this.selector).parent(".active").removeClass("active");b=this.$body.find(this.selector+'[href="'+a+'"]').parent("li").addClass("active");b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active")}};a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f));typeof c=="string"&&e[c]()})};a.fn.scrollspy.Constructor=b;a.fn.scrollspy.defaults={offset:10};a(function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery);!function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f;if(!d){d=b.attr("href");d=d&&d.replace(/.*(?=#[^\s]*$)/,"")}if(b.parent("li").hasClass("active"))return;e=c.find(".active a").last()[0];b.trigger({type:"show",relatedTarget:e});f=a(d);this.activate(b.parent("li"),c);this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");b.addClass("active");if(f){b[0].offsetWidth;b.addClass("in")}else b.removeClass("fade");b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active");d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g();e.removeClass("in")}};a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this));typeof c=="string"&&e[c]()})};a.fn.tab.Constructor=b;a(function(){a("body").on("mouseenter.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault();a(this).tab("show")})})}(window.jQuery);!function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var b=this.tip(),c=this.getTitle(),d=this.getContent();b.find(".popover-title")[a.type(c)=="object"?"append":"html"](c);b.find(".popover-content > *")[a.type(d)=="object"?"append":"html"](d);b.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;a=b.attr("data-content")||(typeof c.content=="function"?c.content.call(b[0]):c.content);a=a.toString().replace(/(^\s*|\s*$)/,"");return a},tip:function(){this.$tip||(this.$tip=a(this.options.template));return this.$tip}});a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f));typeof c=="string"&&e[c]()})};a.fn.popover.Constructor=b;a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);!function(a){"use strict";var b=function(b,c){this.$element=a(b);this.options=a.extend({},a.fn.button.defaults,c)};b.prototype={constructor:b,setState:function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text";d.resetText||c.data("resetText",c[e]());c[e](d[a]||this.options[a]);setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},toggle:function(){var a=this.$element.parent('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active");this.$element.toggleClass("active")}};a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f));c=="toggle"?e.toggle():c&&e.setState(c)})};a.fn.button.defaults={loadingText:"loading..."};a.fn.button.Constructor=b;a(function(){a("body").on("click.button.data-api","[data-toggle^=button]",function(b){a(b.target).button("toggle")})})}(window.jQuery);!function(a){"use strict";var b=function(b,c){this.$element=a(b);this.options=a.extend({},a.fn.collapse.defaults,c);this.options.parent&&(this.$parent=a(this.options.parent));this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find(".in"),e;if(d&&d.length){e=d.data("collapse");d.collapse("hide");e||d.data("collapse",null)}this.$element[b](0);this.transition("addClass","show","shown");this.$element[b](this.$element[0][c])},hide:function(){var a=this.dimension();this.reset(this.$element[a]());this.transition("removeClass","hide","hidden");this.$element[a](0)},reset:function(a){var b=this.dimension();this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth;this.$element.addClass("collapse")},transition:function(b,c,d){var e=this,f=function(){c=="show"&&e.reset();e.$element.trigger(d)};this.$element.trigger(c)[b]("in");a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=typeof c=="object"&&c;e||d.data("collapse",e=new b(this,f));typeof c=="string"&&e[c]()})};a.fn.collapse.defaults={toggle:!0};a.fn.collapse.Constructor=b;a(function(){a("body").on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();a(e).collapse(f)})})}(window.jQuery);!function(a){"use strict";var b=function(b,c){this.$element=a(b);this.options=a.extend({},a.fn.carousel.defaults,c);this.options.slide&&this.slide(this.options.slide)};b.prototype={cycle:function(){this.interval=setInterval(a.proxy(this.next,this),this.options.interval);return this},to:function(b){var c=this.$element.find(".active"),d=c.parent().children(),e=d.index(c),f=this;if(b>d.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){f.to(b)}):e==b?this.pause().cycle():this.slide(b>e?"next":"prev",a(d[b]))},pause:function(){clearInterval(this.interval);return this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this;this.sliding=!0;f&&this.pause();e=e.length?e:this.$element.find(".item")[h]();if(!a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger("slide");d.removeClass("active");e.addClass("active");this.sliding=!1;this.$element.trigger("slid")}else{e.addClass(b);e[0].offsetWidth;d.addClass(g);e.addClass(g);this.$element.trigger("slide");this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active");d.removeClass(["active",g].join(" "));i.sliding=!1;setTimeout(function(){i.$element.trigger("slid")},0)})}f&&this.cycle();return this}};a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=typeof c=="object"&&c;e||d.data("carousel",e=new b(this,f));typeof c=="number"?e.to(c):typeof c=="string"||(c=f.slide)?e[c]():e.cycle()})};a.fn.carousel.defaults={interval:5e3};a.fn.carousel.Constructor=b;a(function(){a("body").on("click.carousel.data-api","[data-slide]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=!e.data("modal")&&a.extend({},e.data(),c.data());e.carousel(f);b.preventDefault()})})}(window.jQuery);!function(a){"use strict";var b=function(b,c){this.$element=a(b);this.options=a.extend({},a.fn.typeahead.defaults,c);this.matcher=this.options.matcher||this.matcher;this.sorter=this.options.sorter||this.sorter;this.highlighter=this.options.highlighter||this.highlighter;this.$menu=a(this.options.menu).appendTo("body");this.source=this.options.source;this.shown=!1;this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");this.$element.val(a);return this.hide()},show:function(){var b=a.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});this.$menu.css({top:b.top+b.height,left:b.left});this.$menu.show();this.shown=!0;return this},hide:function(){this.$menu.hide();this.shown=!1;return this},lookup:function(b){var c=this,d,e;this.query=this.$element.val();if(!this.query)return this.shown?this.hide():this;d=a.grep(this.source,function(a){if(c.matcher(a))return a});d=this.sorter(d);return d.length?this.render(d.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){return a.replace(new RegExp("("+this.query+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;b=a(b).map(function(b,d){b=a(c.options.item).attr("data-value",d);b.find("a").html(c.highlighter(d));return b[0]});b.first().addClass("active");this.$menu.html(b);return this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0]));d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last());c.addClass("active")},listen:function(){this.$element.on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this));(a.browser.webkit||a.browser.msie)&&this.$element.on("keydown",a.proxy(this.keypress,this));this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this))},keyup:function(a){a.stopPropagation();a.preventDefault();switch(a.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:this.hide();break;default:this.lookup()}},keypress:function(a){a.stopPropagation();if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault();this.prev();break;case 40:a.preventDefault();this.next()}},blur:function(a){var b=this;a.stopPropagation();a.preventDefault();setTimeout(function(){b.hide()},150)},click:function(a){a.stopPropagation();a.preventDefault();this.select()},mouseenter:function(b){this.$menu.find(".active").removeClass("active");a(b.currentTarget).addClass("active")}};a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f));typeof c=="string"&&e[c]()})};a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'};a.fn.typeahead.Constructor=b;a(function(){a("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;b.preventDefault();c.typeahead(c.data())})})}(window.jQuery);