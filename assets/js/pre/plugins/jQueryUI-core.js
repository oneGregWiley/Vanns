/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a, b) {
	function d(b) {
		return !a(b).parents().andSelf().filter(function() {
			return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this)
		}).length
	}
	function c(b, c) {
		var e = b.nodeName.toLowerCase();
		if ("area" === e) {
			var f = b.parentNode,
				g = f.name,
				h;
			if (!b.href || !g || f.nodeName.toLowerCase() !== "map") return !1;
			h = a("img[usemap=#" + g + "]")[0];
			return !!h && d(h)
		}
		return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b)
	}
	a.ui = a.ui || {};
	a.ui.version || (a.extend(a.ui, {
		version: "1.8.18",
		keyCode: {
			ALT: 18,
			BACKSPACE: 8,
			CAPS_LOCK: 20,
			COMMA: 188,
			COMMAND: 91,
			COMMAND_LEFT: 91,
			COMMAND_RIGHT: 93,
			CONTROL: 17,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			INSERT: 45,
			LEFT: 37,
			MENU: 93,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SHIFT: 16,
			SPACE: 32,
			TAB: 9,
			UP: 38,
			WINDOWS: 91
		}
	}), a.fn.extend({
		propAttr: a.fn.prop || a.fn.attr,
		_focus: a.fn.focus,
		focus: function(b, c) {
			return typeof b == "number" ? this.each(function() {
				var d = this;
				setTimeout(function() {
					a(d).focus(), c && c.call(d)
				}, b)
			}) : this._focus.apply(this, arguments)
		},
		scrollParent: function() {
			var b;
			a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function() {
				return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
			}).eq(0) : b = this.parents().filter(function() {
				return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1))
			}).eq(0);
			return /fixed/.test(this.css("position")) || !b.length ? a(document) : b
		},
		zIndex: function(c) {
			if (c !== b) return this.css("zIndex", c);
			if (this.length) {
				var d = a(this[0]),
					e, f;
				while (d.length && d[0] !== document) {
					e = d.css("position");
					if (e === "absolute" || e === "relative" || e === "fixed") {
						f = parseInt(d.css("zIndex"), 10);
						if (!isNaN(f) && f !== 0) return f
					}
					d = d.parent()
				}
			}
			return 0
		},
		disableSelection: function() {
			return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
				a.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	}), a.each(["Width", "Height"], function(c, d) {
		function h(b, c, d, f) {
			a.each(e, function() {
				c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0)
			});
			return c
		}
		var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
			f = d.toLowerCase(),
			g = {
				innerWidth: a.fn.innerWidth,
				innerHeight: a.fn.innerHeight,
				outerWidth: a.fn.outerWidth,
				outerHeight: a.fn.outerHeight
			};
		a.fn["inner" + d] = function(c) {
			if (c === b) return g["inner" + d].call(this);
			return this.each(function() {
				a(this).css(f, h(this, c) + "px")
			})
		}, a.fn["outer" + d] = function(b, c) {
			if (typeof b != "number") return g["outer" + d].call(this, b);
			return this.each(function() {
				a(this).css(f, h(this, b, !0, c) + "px")
			})
		}
	}), a.extend(a.expr[":"], {
		data: function(b, c, d) {
			return !!a.data(b, d[3])
		},
		focusable: function(b) {
			return c(b, !isNaN(a.attr(b, "tabindex")))
		},
		tabbable: function(b) {
			var d = a.attr(b, "tabindex"),
				e = isNaN(d);
			return (e || d >= 0) && c(b, !e)
		}
	}), a(function() {
		var b = document.body,
			c = b.appendChild(c = document.createElement("div"));
		c.offsetHeight, a.extend(c.style, {
			minHeight: "100px",
			height: "auto",
			padding: 0,
			borderWidth: 0
		}), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none"
	}), a.extend(a.ui, {
		plugin: {
			add: function(b, c, d) {
				var e = a.ui[b].prototype;
				for (var f in d) e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]])
			},
			call: function(a, b, c) {
				var d = a.plugins[b];
				if ( !! d && !! a.element[0].parentNode) for (var e = 0; e < d.length; e++) a.options[d[e][0]] && d[e][1].apply(a.element, c)
			}
		},
		contains: function(a, b) {
			return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
		},
		hasScroll: function(b, c) {
			if (a(b).css("overflow") === "hidden") return !1;
			var d = c && c === "left" ? "scrollLeft" : "scrollTop",
				e = !1;
			if (b[d] > 0) return !0;
			b[d] = 1, e = b[d] > 0, b[d] = 0;
			return e
		},
		isOverAxis: function(a, b, c) {
			return a > b && a < b + c
		},
		isOver: function(b, c, d, e, f, g) {
			return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
		}
	}))
})(jQuery); /*!
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(a, b) {
	if (a.cleanData) {
		var c = a.cleanData;
		a.cleanData = function(b) {
			for (var d = 0, e;
			(e = b[d]) != null; d++) try {
				a(e).triggerHandler("remove")
			} catch (f) {}
			c(b)
		}
	} else {
		var d = a.fn.remove;
		a.fn.remove = function(b, c) {
			return this.each(function() {
				c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function() {
					try {
						a(this).triggerHandler("remove")
					} catch (b) {}
				});
				return d.call(a(this), b, c)
			})
		}
	}
	a.widget = function(b, c, d) {
		var e = b.split(".")[0],
			f;
		b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function(c) {
			return !!a.data(c, b)
		}, a[e] = a[e] || {}, a[e][b] = function(a, b) {
			arguments.length && this._createWidget(a, b)
		};
		var g = new c;
		g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, {
			namespace: e,
			widgetName: b,
			widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
			widgetBaseClass: f
		}, d), a.widget.bridge(b, a[e][b])
	}, a.widget.bridge = function(c, d) {
		a.fn[c] = function(e) {
			var f = typeof e == "string",
				g = Array.prototype.slice.call(arguments, 1),
				h = this;
			e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e;
			if (f && e.charAt(0) === "_") return h;
			f ? this.each(function() {
				var d = a.data(this, c),
					f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d;
				if (f !== d && f !== b) {
					h = f;
					return !1
				}
			}) : this.each(function() {
				var b = a.data(this, c);
				b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
			});
			return h
		}
	}, a.Widget = function(a, b) {
		arguments.length && this._createWidget(a, b)
	}, a.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		options: {
			disabled: !1
		},
		_createWidget: function(b, c) {
			a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b);
			var d = this;
			this.element.bind("remove." + this.widgetName, function() {
				d.destroy()
			}), this._create(), this._trigger("create"), this._init()
		},
		_getCreateOptions: function() {
			return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
		},
		_create: function() {},
		_init: function() {},
		destroy: function() {
			this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
		},
		widget: function() {
			return this.element
		},
		option: function(c, d) {
			var e = c;
			if (arguments.length === 0) return a.extend({}, this.options);
			if (typeof c == "string") {
				if (d === b) return this.options[c];
				e = {}, e[c] = d
			}
			this._setOptions(e);
			return this
		},
		_setOptions: function(b) {
			var c = this;
			a.each(b, function(a, b) {
				c._setOption(a, b)
			});
			return this
		},
		_setOption: function(a, b) {
			this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b);
			return this
		},
		enable: function() {
			return this._setOption("disabled", !1)
		},
		disable: function() {
			return this._setOption("disabled", !0)
		},
		_trigger: function(b, c, d) {
			var e, f, g = this.options[b];
			d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent;
			if (f) for (e in f) e in c || (c[e] = f[e]);
			this.element.trigger(c, d);
			return !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented())
		}
	}
})(jQuery); /*!
 * jQuery UI Mouse 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(a, b) {
	var c = !1;
	a(document).mouseup(function(a) {
		c = !1
	}), a.widget("ui.mouse", {
		options: {
			cancel: ":input,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var b = this;
			this.element.bind("mousedown." + this.widgetName, function(a) {
				return b._mouseDown(a)
			}).bind("click." + this.widgetName, function(c) {
				if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) {
					a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation();
					return !1
				}
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName)
		},
		_mouseDown: function(b) {
			if (!c) {
				this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
				var d = this,
					e = b.which == 1,
					f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
				if (!e || f || !this._mouseCapture(b)) return !0;
				this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					d.mouseDelayMet = !0
				}, this.options.delay));
				if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
					this._mouseStarted = this._mouseStart(b) !== !1;
					if (!this._mouseStarted) {
						b.preventDefault();
						return !0
					}
				}!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
					return d._mouseMove(a)
				}, this._mouseUpDelegate = function(a) {
					return d._mouseUp(a)
				}, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0;
				return !0
			}
		},
		_mouseMove: function(b) {
			if (a.browser.msie && !(document.documentMode >= 9) && !b.button) return this._mouseUp(b);
			if (this._mouseStarted) {
				this._mouseDrag(b);
				return b.preventDefault()
			}
			this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b));
			return !this._mouseStarted
		},
		_mouseUp: function(b) {
			a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b));
			return !1
		},
		_mouseDistanceMet: function(a) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function(a) {
			return this.mouseDelayMet
		},
		_mouseStart: function(a) {},
		_mouseDrag: function(a) {},
		_mouseStop: function(a) {},
		_mouseCapture: function(a) {
			return !0
		}
	})
})(jQuery);