/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document)throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}
("undefined" != typeof window ? window : this, function (a, b) {
  var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function (a, b) {
    return new n.fn.init(a, b)
  }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
    return b.toUpperCase()
  };
  n.fn = n.prototype = {
    jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
      return d.call(this)
    }, get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    }, pushStack: function (a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    }, each: function (a, b) {
      return n.each(this, a, b)
    }, map: function (a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    }, slice: function () {
      return this.pushStack(d.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (a) {
      var b = this.length, c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    }, end: function () {
      return this.prevObject || this.constructor(null)
    }, push: f, sort: c.sort, splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
    return g
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
      throw new Error(a)
    }, noop: function () {
    }, isFunction: function (a) {
      return "function" === n.type(a)
    }, isArray: Array.isArray, isWindow: function (a) {
      return null != a && a === a.window
    }, isNumeric: function (a) {
      return !n.isArray(a) && a - parseFloat(a) >= 0
    }, isPlainObject: function (a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
    }, isEmptyObject: function (a) {
      var b;
      for (b in a)return !1;
      return !0
    }, type: function (a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    }, globalEval: function (a) {
      var b, c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
    }, camelCase: function (a) {
      return a.replace(p, "ms-").replace(q, r)
    }, nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (a, b, c) {
      var d, e = 0, f = a.length, g = s(a);
      if (c) {
        if (g) {
          for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
        } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
      } else if (g) {
        for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
      } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
      return a
    }, trim: function (a) {
      return null == a ? "" : (a + "").replace(o, "")
    }, makeArray: function (a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    }, inArray: function (a, b, c) {
      return null == b ? -1 : g.call(b, a, c)
    }, merge: function (a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
      return a.length = e, a
    }, grep: function (a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    }, map: function (a, b, c) {
      var d, f = 0, g = a.length, h = s(a), i = [];
      if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
      return e.apply([], i)
    }, guid: 1, proxy: function (a, b) {
      var c, e, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
        return a.apply(b || this, e.concat(d.call(arguments)))
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
    }, now: Date.now, support: k
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase()
  });
  function s(a) {
    var b = a.length, c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
  }

  var t = function (a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
      return a === b && (l = !0), 0
    }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
          for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
          return -1
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
      ID: new RegExp("^#(" + N + ")"),
      CLASS: new RegExp("^\\.(" + N + ")"),
      TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + P),
      PSEUDO: new RegExp("^" + Q),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + L + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
    };
    try {
      I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
    } catch (eb) {
      I = {
        apply: F.length ? function (a, b) {
          H.apply(a, J.call(b))
        } : function (a, b) {
          var c = a.length, d = 0;
          while (a[c++] = b[d++]);
          a.length = c - 1
        }
      }
    }
    function fb(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)return d;
      if (1 !== (k = b.nodeType) && 9 !== k)return [];
      if (p && !e) {
        if (f = _.exec(a))if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode)return d;
            if (h.id === j)return d.push(h), d
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
        } else {
          if (f[2])return I.apply(d, b.getElementsByTagName(a)), d;
          if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return I.apply(d, b.getElementsByClassName(j)), d
        }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
            while (l--)o[l] = s + qb(o[l]);
            w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
          }
          if (x)try {
            return I.apply(d, w.querySelectorAll(x)), d
          } catch (y) {
          } finally {
            r || b.removeAttribute("id")
          }
        }
      }
      return i(a.replace(R, "$1"), b, d, e)
    }

    function gb() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
      }

      return b
    }

    function hb(a) {
      return a[u] = !0, a
    }

    function ib(a) {
      var b = n.createElement("div");
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function jb(a, b) {
      var c = a.split("|"), e = a.length;
      while (e--)d.attrHandle[c[e]] = b
    }

    function kb(a, b) {
      var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
      if (d)return d;
      if (c)while (c = c.nextSibling)if (c === b)return -1;
      return a ? 1 : -1
    }

    function lb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function mb(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function nb(a) {
      return hb(function (b) {
        return b = +b, hb(function (c, d) {
          var e, f = a([], c.length, b), g = f.length;
          while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function ob(a) {
      return a && typeof a.getElementsByTagName !== C && a
    }

    c = fb.support = {}, f = fb.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1
    }, m = fb.setDocument = function (a) {
      var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
      return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
        m()
      }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
        m()
      })), c.attributes = ib(function (a) {
        return a.className = "i", !a.getAttribute("className")
      }), c.getElementsByTagName = ib(function (a) {
        return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
      }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
      }), c.getById = ib(function (a) {
        return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function (a, b) {
        if (typeof b.getElementById !== C && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          return a.getAttribute("id") === b
        }
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(cb, db);
        return function (a) {
          var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
      } : function (a, b) {
        var c, d = [], e = 0, f = b.getElementsByTagName(a);
        if ("*" === a) {
          while (c = f[e++])1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
      }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
      }), ib(function (a) {
        var b = e.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function (a, b) {
        if (b)while (b = b.parentNode)if (b === a)return !0;
        return !1
      }, B = b ? function (a, b) {
        if (a === b)return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
      } : function (a, b) {
        if (a === b)return l = !0, 0;
        var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
        if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
        if (f === g)return kb(a, b);
        c = a;
        while (c = c.parentNode)h.unshift(c);
        c = b;
        while (c = c.parentNode)i.unshift(c);
        while (h[d] === i[d])d++;
        return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
      }, e) : n
    }, fb.matches = function (a, b) {
      return fb(a, null, null, b)
    }, fb.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
      } catch (e) {
      }
      return fb(b, n, null, [a]).length > 0
    }, fb.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b)
    }, fb.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    }, fb.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, fb.uniqueSort = function (a) {
      var b, d = [], e = 0, f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++])b === a[f] && (e = d.push(f));
        while (e--)a.splice(d[e], 1)
      }
      return k = null, a
    }, e = fb.getText = function (a) {
      var b, c = "", d = 0, f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent)return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
        } else if (3 === f || 4 === f)return a.nodeValue
      } else while (b = a[d++])c += e(b);
      return c
    }, d = fb.selectors = {
      cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD: function (a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
        }, PSEUDO: function (a) {
          var b, c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      }, filter: {
        TAG: function (a) {
          var b = a.replace(cb, db).toLowerCase();
          return "*" === a ? function () {
            return !0
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        }, CLASS: function (a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
              })
        }, ATTR: function (a, b, c) {
          return function (d) {
            var e = fb.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
          }
        }, CHILD: function (a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          } : function (b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                  k[a] = [w, n, m];
                  break
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        }, PSEUDO: function (a, b) {
          var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
            var d, f = e(a, b), g = f.length;
            while (g--)d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
          }) : function (a) {
            return e(a, 0, c)
          }) : e
        }
      }, pseudos: {
        not: hb(function (a) {
          var b = [], c = [], d = h(a.replace(R, "$1"));
          return d[u] ? hb(function (a, b, c, e) {
            var f, g = d(a, null, e, []), h = a.length;
            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), !c.pop()
          }
        }), has: hb(function (a) {
          return function (b) {
            return fb(a, b).length > 0
          }
        }), contains: hb(function (a) {
          return function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
          }
        }), lang: hb(function (a) {
          return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
            var c;
            do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
            return !1
          }
        }), target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        }, root: function (a) {
          return a === o
        }, focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        }, enabled: function (a) {
          return a.disabled === !1
        }, disabled: function (a) {
          return a.disabled === !0
        }, checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        }, selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
          return !0
        }, parent: function (a) {
          return !d.pseudos.empty(a)
        }, header: function (a) {
          return Z.test(a.nodeName)
        }, input: function (a) {
          return Y.test(a.nodeName)
        }, button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        }, text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        }, first: nb(function () {
          return [0]
        }), last: nb(function (a, b) {
          return [b - 1]
        }), eq: nb(function (a, b, c) {
          return [0 > c ? c + b : c]
        }), even: nb(function (a, b) {
          for (var c = 0; b > c; c += 2)a.push(c);
          return a
        }), odd: nb(function (a, b) {
          for (var c = 1; b > c; c += 2)a.push(c);
          return a
        }), lt: nb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
          return a
        }), gt: nb(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
          return a
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;
    for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = lb(b);
    for (b in{submit: !0, reset: !0})d.pseudos[b] = mb(b);
    function pb() {
    }

    pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
      var c, e, f, g, h, i, j, k = z[a + " "];
      if (k)return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({value: c, type: e[0].replace(R, " ")}), h = h.slice(c.length));
        for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
        if (!c)break
      }
      return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
    };
    function qb(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
      return d
    }

    function rb(a, b, c) {
      var d = b.dir, e = c && "parentNode" === d, f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
      } : function (b, c, g) {
        var h, i, j = [w, f];
        if (g) {
          while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
        } else while (b = b[d])if (1 === b.nodeType || e) {
          if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
          if (i[d] = j, j[2] = a(b, c, g))return !0
        }
      }
    }

    function sb(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--)if (!a[e](b, c, d))return !1;
        return !0
      } : a[0]
    }

    function tb(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c);
      return c
    }

    function ub(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function vb(a, b, c, d, e, f) {
      return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
        var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
        if (c && c(q, r, h, i), d) {
          j = ub(r, n), d(j, [], h, i), k = j.length;
          while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;
              while (k--)(l = r[k]) && j.push(q[k] = l);
              e(null, r = [], j, i)
            }
            k = r.length;
            while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
          }
        } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
      })
    }

    function wb(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
        return a === b
      }, h, !0), l = rb(function (a) {
        return K.call(b, a) > -1
      }, h, !0), m = [function (a, c, d) {
        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
      }]; f > i; i++)if (c = d.relative[a[i].type])m = [rb(sb(m), c)]; else {
        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
          for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
          return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
        }
        m.push(c)
      }
      return sb(m)
    }

    function xb(a, b) {
      var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
        var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;
            while (o = a[m++])if (o(l, g, h)) {
              i.push(l);
              break
            }
            k && (w = v)
          }
          c && ((l = !o && l) && p--, f && r.push(l))
        }
        if (p += q, c && q !== p) {
          m = 0;
          while (o = b[m++])o(r, s, g, h);
          if (f) {
            if (p > 0)while (q--)r[q] || s[q] || (s[q] = G.call(i));
            s = ub(s)
          }
          I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
        }
        return k && (w = v, j = t), r
      };
      return c ? hb(f) : f
    }

    return h = fb.compile = function (a, b) {
      var c, d = [], e = [], f = A[a + " "];
      if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--)f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, xb(e, d)), f.selector = a
      }
      return f
    }, i = fb.select = function (a, b, e, f) {
      var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length)
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type])break;
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qb(j), !a)return I.apply(e, f), e;
            break
          }
        }
      }
      return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"))
    }), ib(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || jb("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), c.attributes && ib(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || jb("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), ib(function (a) {
      return null == a.getAttribute("disabled")
    }) || jb(L, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), fb
  }(a);
  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
  var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

  function x(a, b, c) {
    if (n.isFunction(b))return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType)return n.grep(a, function (a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (w.test(b))return n.filter(b, a, c);
      b = n.filter(b, a)
    }
    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c
    })
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  }, n.fn.extend({
    find: function (a) {
      var b, c = this.length, d = [], e = this;
      if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
      }));
      for (b = 0; c > b; b++)n.find(a, e[b], d);
      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
    }, filter: function (a) {
      return this.pushStack(x(this, a || [], !1))
    }, not: function (a) {
      return this.pushStack(x(this, a || [], !0))
    }, is: function (a) {
      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
    }
  });
  var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
    var c, d;
    if (!a)return this;
    if ("string" == typeof a) {
      if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
      if (c[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this
      }
      return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
    }
    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
  };
  A.prototype = n.fn, y = n(l);
  var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
  n.extend({
    dir: function (a, b, c) {
      var d = [], e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
        if (e && n(a).is(c))break;
        d.push(a)
      }
      return d
    }, sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), n.fn.extend({
    has: function (a) {
      var b = n(a, this), c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
      })
    }, closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
        f.push(c);
        break
      }
      return this.pushStack(f.length > 1 ? n.unique(f) : f)
    }, index: function (a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
    }, addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });
  function D(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }

  n.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    }, parents: function (a) {
      return n.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
      return n.dir(a, "parentNode", c)
    }, next: function (a) {
      return D(a, "nextSibling")
    }, prev: function (a) {
      return D(a, "previousSibling")
    }, nextAll: function (a) {
      return n.dir(a, "nextSibling")
    }, prevAll: function (a) {
      return n.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
      return n.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
      return n.dir(a, "previousSibling", c)
    }, siblings: function (a) {
      return n.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
      return n.sibling(a.firstChild)
    }, contents: function (a) {
      return a.contentDocument || n.merge([], a.childNodes)
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
    }
  });
  var E = /\S+/g, F = {};

  function G(a) {
    var b = F[a] = {};
    return n.each(a.match(E) || [], function (a, c) {
      b[c] = !0
    }), b
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
    var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
        b = !1;
        break
      }
      d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
    }, k = {
      add: function () {
        if (h) {
          var c = h.length;
          !function g(b) {
            n.each(b, function (b, c) {
              var d = n.type(c);
              "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
            })
          }(arguments), d ? f = h.length : b && (e = c, j(b))
        }
        return this
      }, remove: function () {
        return h && n.each(arguments, function (a, b) {
          var c;
          while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
        }), this
      }, has: function (a) {
        return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
      }, empty: function () {
        return h = [], f = 0, this
      }, disable: function () {
        return h = i = b = void 0, this
      }, disabled: function () {
        return !h
      }, lock: function () {
        return i = void 0, b || k.disable(), this
      }, locked: function () {
        return !i
      }, fireWith: function (a, b) {
        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
      }, fire: function () {
        return k.fireWith(this, arguments), this
      }, fired: function () {
        return !!c
      }
    };
    return k
  }, n.extend({
    Deferred: function (a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
        state: function () {
          return c
        }, always: function () {
          return e.done(arguments).fail(arguments), this
        }, then: function () {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
              })
            }), a = null
          }).promise()
        }, promise: function (a) {
          return null != a ? n.extend(a, d) : d
        }
      }, e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2], h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    }, when: function (a) {
      var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
        }
      }, i, j, k;
      if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      return f || g.resolveWith(k, c), g.promise()
    }
  });
  var H;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this
  }, n.extend({
    isReady: !1, readyWait: 1, holdReady: function (a) {
      a ? n.readyWait++ : n.ready(!0)
    }, ready: function (a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
    }
  });
  function I() {
    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
  }

  n.ready.promise = function (b) {
    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
  }, n.ready.promise();
  var J = n.access = function (a, b, c, d, e, f, g) {
    var h = 0, i = a.length, j = null == c;
    if ("object" === n.type(c)) {
      e = !0;
      for (h in c)n.access(a, b, h, c[h], !0, f, g)
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
          return j.call(n(a), c)
        })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
  };
  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
  };
  function K() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function () {
        return {}
      }
    }), this.expando = n.expando + Math.random()
  }

  K.uid = 1, K.accepts = n.acceptData, K.prototype = {
    key: function (a) {
      if (!K.accepts(a))return 0;
      var b = {}, c = a[this.expando];
      if (!c) {
        c = K.uid++;
        try {
          b[this.expando] = {value: c}, Object.defineProperties(a, b)
        } catch (d) {
          b[this.expando] = c, n.extend(a, b)
        }
      }
      return this.cache[c] || (this.cache[c] = {}), c
    }, set: function (a, b, c) {
      var d, e = this.key(a), f = this.cache[e];
      if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
      return f
    }, get: function (a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b]
    }, access: function (a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
    }, remove: function (a, b) {
      var c, d, e, f = this.key(a), g = this.cache[f];
      if (void 0 === b)this.cache[f] = {}; else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
        while (c--)delete g[d[c]]
      }
    }, hasData: function (a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {})
    }, discard: function (a) {
      a[this.expando] && delete this.cache[a[this.expando]]
    }
  };
  var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
      } catch (e) {
      }
      M.set(a, b, c)
    } else c = void 0;
    return c
  }

  n.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a)
    }, data: function (a, b, c) {
      return M.access(a, b, c)
    }, removeData: function (a, b) {
      M.remove(a, b)
    }, _data: function (a, b, c) {
      return L.access(a, b, c)
    }, _removeData: function (a, b) {
      L.remove(a, b)
    }
  }), n.fn.extend({
    data: function (a, b) {
      var c, d, e, f = this[0], g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
          c = g.length;
          while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          L.set(f, "hasDataAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function () {
        M.set(this, a)
      }) : J(this, function (b) {
        var c, d = n.camelCase(a);
        if (f && void 0 === b) {
          if (c = M.get(f, a), void 0 !== c)return c;
          if (c = M.get(f, d), void 0 !== c)return c;
          if (c = P(f, d, void 0), void 0 !== c)return c
        } else this.each(function () {
          var c = M.get(this, d);
          M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
        })
      }, null, b, arguments.length > 1, null, !0)
    }, removeData: function (a) {
      return this.each(function () {
        M.remove(this, a)
      })
    }
  }), n.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue: function (a, b) {
      b = b || "fx";
      var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
        n.dequeue(a, b)
      };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks: function (a, b) {
      var c = b + "queueHooks";
      return L.get(a, c) || L.access(a, c, {
            empty: n.Callbacks("once memory").add(function () {
              L.remove(a, [b + "queue", c])
            })
          })
    }
  }), n.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
      })
    }, dequeue: function (a) {
      return this.each(function () {
        n.dequeue(this, a)
      })
    }, clearQueue: function (a) {
      return this.queue(a || "fx", [])
    }, promise: function (a, b) {
      var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
        --d || e.resolveWith(f, [f])
      };
      "string" != typeof a && (b = a, a = void 0), a = a || "fx";
      while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
  }, T = /^(?:checkbox|radio)$/i;
  !function () {
    var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
  }();
  var U = "undefined";
  k.focusinBubbles = "onfocusin"in a;
  var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

  function Z() {
    return !0
  }

  function $() {
    return !1
  }

  function _() {
    try {
      return l.activeElement
    } catch (a) {
    }
  }

  n.event = {
    global: {}, add: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
        }), b = (b || "").match(E) || [""], j = b.length;
        while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
          type: o,
          origType: q,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && n.expr.match.needsContext.test(e),
          namespace: p.join(".")
        }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
      }
    }, remove: function (a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
      if (r && (i = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;
        while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
          while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
          g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
        } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
        n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
      }
    }, trigger: function (b, c, d, e) {
      var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
        }
        f = 0;
        while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
      }
    }, dispatch: function (a) {
      a = n.event.fix(a);
      var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;
          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result
      }
    }, handlers: function (a, b) {
      var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
        for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
        d.length && g.push({elem: i, handlers: d})
      }
      return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {
      props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    }, mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
        var c, d, e, f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    }, fix: function (a) {
      if (a[n.expando])return a;
      var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
      while (b--)c = d[b], a[c] = f[c];
      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
    }, special: {
      load: {noBubble: !0}, focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
        }, _default: function (a) {
          return n.nodeName(a.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    }, simulate: function (a, b, c, d) {
      var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
  }, n.Event.prototype = {
    isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
    }, stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
    }, stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, n.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) {
    n.event.special[a] = {
      delegateType: b, bindType: b, handle: function (a) {
        var c, d = this, e = a.relatedTarget, f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
    var c = function (a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0)
    };
    n.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this, e = L.access(d, b);
        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
      }, teardown: function () {
        var d = this.ownerDocument || this, e = L.access(d, b) - 1;
        e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
      }
    }
  }), n.fn.extend({
    on: function (a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (g in a)this.on(g, b, c, a[g], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
      return 1 === e && (f = d, d = function (a) {
        return n().off(a), f.apply(this, arguments)
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b)
      })
    }, one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1)
    }, off: function (a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a)this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
        n.event.remove(this, a, c, b)
      })
    }, trigger: function (a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this)
      })
    }, triggerHandler: function (a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0
    }
  });
  var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
  function jb(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function kb(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
  }

  function lb(a) {
    var b = gb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function mb(a, b) {
    for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
  }

  function nb(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};
        for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
      }
      M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
    }
  }

  function ob(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
  }

  function pb(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
  }

  n.extend({
    clone: function (a, b, c) {
      var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]);
      if (b)if (c)for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h);
      return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
    }, buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
        f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
        while (j--)f = f.lastChild;
        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
      } else l.push(b.createTextNode(e));
      k.textContent = "", m = 0;
      while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
        j = 0;
        while (e = f[j++])fb.test(e.type || "") && c.push(e)
      }
      return k
    }, cleanData: function (a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
          if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          L.cache[e] && delete L.cache[e]
        }
        delete M.cache[c[M.expando]]
      }
    }
  }), n.fn.extend({
    text: function (a) {
      return J(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
        })
      }, null, a, arguments.length)
    }, append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = jb(this, a);
          b.appendChild(a)
        }
      })
    }, prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = jb(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    }, before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    }, after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    }, remove: function (a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
      return this
    }, empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
      return this
    }, clone: function (a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b)
      })
    }, html: function (a) {
      return J(this, function (a) {
        var b = this[0] || {}, c = 0, d = this.length;
        if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
        if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(ab, "<$1></$2>");
          try {
            for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
            b = 0
          } catch (e) {
          }
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    }, replaceWith: function () {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    }, detach: function (a) {
      return this.remove(a, !0)
    }, domManip: function (a, b) {
      a = e.apply([], a);
      var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))return this.each(function (c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
      });
      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
        if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
      }
      return this
    }
  }), n.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      return this.pushStack(d)
    }
  });
  var qb, rb = {};

  function sb(b, c) {
    var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
    return e.detach(), f
  }

  function tb(a) {
    var b = l, c = rb[a];
    return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
  }

  var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null)
  };

  function xb(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
  }

  function yb(a, b) {
    return {
      get: function () {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  !function () {
    var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
    if (f.style) {
      f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
      function g() {
        f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
        var g = a.getComputedStyle(f, null);
        b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
      }

      a.getComputedStyle && n.extend(k, {
        pixelPosition: function () {
          return g(), b
        }, boxSizingReliable: function () {
          return null == c && g(), c
        }, reliableMarginRight: function () {
          var b, c = f.appendChild(l.createElement("div"));
          return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
        }
      })
    }
  }(), n.swap = function (a, b, c, d) {
    var e, f, g = {};
    for (f in b)g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b)a.style[f] = g[f];
    return e
  };
  var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {position: "absolute", visibility: "hidden", display: "block"}, Db = {letterSpacing: "0", fontWeight: "400"}, Eb = ["Webkit", "O", "Moz", "ms"];

  function Fb(a, b) {
    if (b in a)return b;
    var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
    while (e--)if (b = Eb[e] + c, b in a)return b;
    return d
  }

  function Gb(a, b, c) {
    var d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function Hb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
    return g
  }

  function Ib(a, b, c) {
    var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))return e;
      d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = xb(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    }, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": "cssFloat"}, style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = n.camelCase(b), i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
      }
    }, css: function (a, b, c, d) {
      var e, f, g, h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get"in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
          return Ib(a, b, d)
        }) : Ib(a, b, d) : void 0
      }, set: function (a, c, d) {
        var e = d && wb(a);
        return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
    return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0
  }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
  }), n.fn.extend({
    css: function (a, b) {
      return J(this, function (a, b, c) {
        var d, e, f = {}, g = 0;
        if (n.isArray(b)) {
          for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
      }, a, b, arguments.length > 1)
    }, show: function () {
      return Jb(this, !0)
    }, hide: function () {
      return Jb(this)
    }, toggle: function (a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        S(this) ? n(this).show() : n(this).hide()
      })
    }
  });
  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e)
  }

  n.Tween = Kb, Kb.prototype = {
    constructor: Kb, init: function (a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
    }, cur: function () {
      var a = Kb.propHooks[this.prop];
      return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
    }, run: function (a) {
      var b, c = Kb.propHooks[this.prop];
      return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
    }
  }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      }, set: function (a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, n.easing = {
    linear: function (a) {
      return a
    }, swing: function (a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, n.fx = Kb.prototype.init, n.fx.step = {};
  var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
    "*": [function (a, b) {
      var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
      if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;
        do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
      }
      return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
    }]
  };

  function Sb() {
    return setTimeout(function () {
      Lb = void 0
    }), Lb = n.now()
  }

  function Tb(a, b) {
    var c, d = 0, e = {height: a};
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e
  }

  function Ub(a, b, c) {
    for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
  }

  function Vb(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i()
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
    }));
    for (d in b)if (e = b[d], Nb.exec(e)) {
      if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
        if ("show" !== e || !q || void 0 === q[d])continue;
        p = !0
      }
      m[d] = q && q[d] || n.style(a, d)
    } else j = void 0;
    if (n.isEmptyObject(m))"inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
      q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide()
      }), l.done(function () {
        var b;
        L.remove(a, "fxshow");
        for (b in m)n.style(a, b, m[b])
      });
      for (d in m)g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function Wb(a, b) {
    var c, d, e, f, g;
    for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand"in g) {
      f = g.expand(f), delete a[d];
      for (c in f)c in a || (a[c] = f[c], b[c] = e)
    } else b[d] = e
  }

  function Xb(a, b, c) {
    var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
      delete i.elem
    }), i = function () {
      if (e)return !1;
      for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
    }, j = h.promise({
      elem: a, props: n.extend({}, b), opts: n.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: Lb || Sb(), duration: c.duration, tweens: [], createTween: function (b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d
      }, stop: function (b) {
        var c = 0, d = b ? j.tweens.length : 0;
        if (e)return this;
        for (e = !0; d > c; c++)j.tweens[c].run(1);
        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
      }
    }), k = j.props;
    for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts))return d;
    return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  n.Animation = n.extend(Xb, {
    tweener: function (a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
      for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
    }, prefilter: function (a, b) {
      b ? Qb.unshift(a) : Qb.push(a)
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == typeof a ? n.extend({}, a) : {complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b};
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
    }, d
  }, n.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
      var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
        var b = Xb(this, n.extend({}, a), f);
        (e || L.get(this, "finish")) && b.stop(!0)
      };
      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop, b(c)
      };
      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
        if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pb.test(e) && d(g[e]);
        for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        (b || !c) && n.dequeue(this, a)
      })
    }, finish: function (a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
        delete c.finish
      })
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];
    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
    }
  }), n.each({slideDown: Tb("show"), slideUp: Tb("hide"), slideToggle: Tb("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d)
    }
  }), n.timers = [], n.fx.tick = function () {
    var a, b = 0, c = n.timers;
    for (Lb = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    c.length || n.fx.stop(), Lb = void 0
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
  }, n.fx.interval = 13, n.fx.start = function () {
    Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
  }, n.fx.stop = function () {
    clearInterval(Mb), Mb = null
  }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);
      c.stop = function () {
        clearTimeout(d)
      }
    })
  }, function () {
    var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
    a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
  }();
  var Yb, Zb, $b = n.expr.attrHandle;
  n.fn.extend({
    attr: function (a, b) {
      return J(this, n.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
      return this.each(function () {
        n.removeAttr(this, a)
      })
    }
  }), n.extend({
    attr: function (a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
    }, removeAttr: function (a, b) {
      var c, d, e = 0, f = b && b.match(E);
      if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
    }, attrHooks: {
      type: {
        set: function (a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), Zb = {
    set: function (a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = $b[b] || n.find.attr;
    $b[b] = function (a, b, d) {
      var e, f;
      return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
    }
  });
  var _b = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function (a, b) {
      return J(this, n.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
      return this.each(function () {
        delete this[n.propFix[a] || a]
      })
    }
  }), n.extend({
    propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
    }, propHooks: {
      tabIndex: {
        get: function (a) {
          return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this
  });
  var ac = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function (a) {
      var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
      if (n.isFunction(a))return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className))
      });
      if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
        f = 0;
        while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
        g = n.trim(d), c.className !== g && (c.className = g)
      }
      return this
    }, removeClass: function (a) {
      var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
      if (n.isFunction(a))return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className))
      });
      if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
        f = 0;
        while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
      }
      return this
    }, toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function () {
        if ("string" === c) {
          var b, d = 0, e = n(this), f = a.match(E) || [];
          while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
        } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
      })
    }, hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)return !0;
      return !1
    }
  });
  var bc = /\r/g;
  n.fn.extend({
    val: function (a) {
      var b, c, d, e = this[0];
      {
        if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + ""
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
        });
        if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a))
        }
      }, select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
            if (b = n(c).val(), f)return b;
            g.push(b)
          }
          return g
        }, set: function (a, b) {
          var c, d, e = a.options, f = n.makeArray(b), g = e.length;
          while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          return c || (a.selectedIndex = -1), f
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function (a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
      }
    }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), n.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    }, bind: function (a, b, c) {
      return this.on(a, null, b, c)
    }, unbind: function (a, b) {
      return this.off(a, null, b)
    }, delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var cc = n.now(), dc = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + "")
  }, n.parseXML = function (a) {
    var b, c;
    if (!a || "string" != typeof a)return null;
    try {
      c = new DOMParser, b = c.parseFromString(a, "text/xml")
    } catch (d) {
      b = void 0
    }
    return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
  };
  var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
  try {
    fc = location.href
  } catch (qc) {
    fc = l.createElement("a"), fc.href = "", fc = fc.href
  }
  ec = mc.exec(fc.toLowerCase()) || [];
  function rc(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0, f = b.toLowerCase().match(E) || [];
      if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function sc(a, b, c, d) {
    var e = {}, f = a === oc;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }), i
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*")
  }

  function tc(a, b) {
    var c, d, e = n.ajaxSettings.flatOptions || {};
    for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && n.extend(!0, a, d), a
  }

  function uc(a, b, c) {
    var d, e, f, g, h = a.contents, i = a.dataTypes;
    while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)for (e in h)if (h[e] && h[e].test(d)) {
      i.unshift(e);
      break
    }
    if (i[0]in c)f = i[0]; else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function vc(a, b, c, d) {
    var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
    if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
        break
      }
      if (g !== !0)if (g && a["throws"])b = g(b); else try {
        b = g(b)
      } catch (l) {
        return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
      }
    }
    return {state: "success", data: b}
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: fc,
      type: "GET",
      isLocal: jc.test(ec[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {"*": pc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
      contents: {xml: /xml/, html: /html/, json: /json/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (a, b) {
      return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
    },
    ajaxPrefilter: rc(nc),
    ajaxTransport: rc(oc),
    ajax: function (a, b) {
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
        readyState: 0, getResponseHeader: function (a) {
          var b;
          if (2 === t) {
            if (!f) {
              f = {};
              while (b = ic.exec(e))f[b[1].toLowerCase()] = b[2]
            }
            b = f[a.toLowerCase()]
          }
          return null == b ? null : b
        }, getAllResponseHeaders: function () {
          return 2 === t ? e : null
        }, setRequestHeader: function (a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b), this
        }, overrideMimeType: function (a) {
          return t || (k.mimeType = a), this
        }, statusCode: function (a) {
          var b;
          if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
          return this
        }, abort: function (a) {
          var b = a || u;
          return c && c.abort(b), x(0, b), this
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)return v;
      i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
      for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
      u = "abort";
      for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
      if (c = sc(oc, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout")
        }, k.timeout));
        try {
          t = 1, c.send(r, x)
        } catch (w) {
          if (!(2 > t))throw w;
          x(-1, w)
        }
      } else x(-1, "No Transport");
      function x(a, b, f, h) {
        var j, r, s, u, w, x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
      }

      return v
    },
    getJSON: function (a, b, c) {
      return n.get(a, b, c, "json")
    },
    getScript: function (a, b) {
      return n.get(a, void 0, b, "script")
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({url: a, type: b, dataType: e, data: c, success: d})
    }
  }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a)
    }
  }), n._evalUrl = function (a) {
    return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
  }, n.fn.extend({
    wrapAll: function (a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b))
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;
        while (a.firstElementChild)a = a.firstElementChild;
        return a
      }).append(this)), this)
    }, wrapInner: function (a) {
      return this.each(n.isFunction(a) ? function (b) {
        n(this).wrapInner(a.call(this, b))
      } : function () {
        var b = n(this), c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    }, wrap: function (a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a)
      })
    }, unwrap: function () {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
      }).end()
    }
  }), n.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a)
  };
  var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;

  function Bc(a, b, c, d) {
    var e;
    if (n.isArray(b))n.each(b, function (b, e) {
      c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Bc(a + "[" + e + "]", b[e], c, d)
  }

  n.param = function (a, b) {
    var c, d = [], e = function (a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
    };
    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
      e(this.name, this.value)
    }); else for (c in a)Bc(c, a[c], b, e);
    return d.join("&").replace(wc, "+")
  }, n.fn.extend({
    serialize: function () {
      return n.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {name: b.name, value: a.replace(yc, "\r\n")}
        }) : {name: b.name, value: c.replace(yc, "\r\n")}
      }).get()
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest
    } catch (a) {
    }
  };
  var Cc = 0, Dc = {}, Ec = {0: 200, 1223: 204}, Fc = n.ajaxSettings.xhr();
  a.ActiveXObject && n(a).on("unload", function () {
    for (var a in Dc)Dc[a]()
  }), k.cors = !!Fc && "withCredentials"in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
    var b;
    return k.cors || Fc && !a.crossDomain ? {
      send: function (c, d) {
        var e, f = a.xhr(), g = ++Cc;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
        for (e in c)f.setRequestHeader(e, c[e]);
        b = function (a) {
          return function () {
            b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
          }
        }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
        try {
          f.send(a.hasContent && a.data || null)
        } catch (h) {
          if (b)throw h
        }
      }, abort: function () {
        b && b()
      }
    } : void 0
  }), n.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {
      "text script": function (a) {
        return n.globalEval(a), a
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, c;
      return {
        send: function (d, e) {
          b = n("<script>").prop({async: !0, charset: a.scriptCharset, src: a.url}).on("load error", c = function (a) {
            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
          }), l.head.appendChild(b[0])
        }, abort: function () {
          c && c()
        }
      }
    }
  });
  var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var a = Gc.pop() || n.expando + "_" + cc++;
      return this[a] = !0, a
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a)return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || l;
    var d = v.exec(a), e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
  };
  var Ic = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Ic)return Ic.apply(this, arguments);
    var d, e, f, g = this, h = a.indexOf(" ");
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({url: a, type: e, dataType: "html", data: b}).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a])
    }), this
  }, n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem
    }).length
  };
  var Jc = a.document.documentElement;

  function Kc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }

  n.offset = {
    setOffset: function (a, b, c) {
      var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using"in b ? b.using.call(a, m) : l.css(m)
    }
  }, n.fn.extend({
    offset: function (a) {
      if (arguments.length)return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b)
      });
      var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
      if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft}) : e
    }, position: function () {
      if (this[0]) {
        var a, b, c = this[0], d = {top: 0, left: 0};
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        }
      }
    }, offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || Jc;
        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
        return a || Jc
      })
    }
  }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
    var d = "pageYOffset" === c;
    n.fn[b] = function (e) {
      return J(this, function (b, e, f) {
        var g = Kc(b);
        return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
      }, b, e, arguments.length, null)
    }
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
      return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
    })
  }), n.each({Height: "height", Width: "width"}, function (a, b) {
    n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
        return J(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), n.fn.size = function () {
    return this.length
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n
  });
  var Lc = a.jQuery, Mc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
  }, typeof b === U && (a.jQuery = a.$ = n), n
});
//# sourceMappingURL=jquery.min.map
;
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (W, X, t) {
  'use strict';
  function C(b) {
    return function () {
      var a = arguments[0], c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.26/" + (b ? b + "/" : "") + a;
      for (c = 1; c < arguments.length; c++)a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
      return Error(a)
    }
  }

  function Pa(b) {
    if (null == b || Ga(b))return !1;
    var a = b.length;
    return 1 === b.nodeType && a ? !0 : v(b) || J(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
  }

  function r(b, a, c) {
    var d;
    if (b)if (P(b))for (d in b)"prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d); else if (J(b) || Pa(b))for (d = 0; d < b.length; d++)a.call(c, b[d], d); else if (b.forEach && b.forEach !== r)b.forEach(a, c); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d);
    return b
  }

  function Zb(b) {
    var a = [], c;
    for (c in b)b.hasOwnProperty(c) && a.push(c);
    return a.sort()
  }

  function Tc(b,
              a, c) {
    for (var d = Zb(b), e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
    return d
  }

  function $b(b) {
    return function (a, c) {
      b(c, a)
    }
  }

  function hb() {
    for (var b = ma.length, a; b;) {
      b--;
      a = ma[b].charCodeAt(0);
      if (57 == a)return ma[b] = "A", ma.join("");
      if (90 == a)ma[b] = "0"; else return ma[b] = String.fromCharCode(a + 1), ma.join("")
    }
    ma.unshift("0");
    return ma.join("")
  }

  function ac(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey
  }

  function D(b) {
    var a = b.$$hashKey;
    r(arguments, function (a) {
      a !== b && r(a, function (a, c) {
        b[c] = a
      })
    });
    ac(b, a);
    return b
  }

  function U(b) {
    return parseInt(b,
        10)
  }

  function bc(b, a) {
    return D(new (D(function () {
    }, {prototype: b})), a)
  }

  function E() {
  }

  function Qa(b) {
    return b
  }

  function ba(b) {
    return function () {
      return b
    }
  }

  function x(b) {
    return "undefined" === typeof b
  }

  function y(b) {
    return "undefined" !== typeof b
  }

  function T(b) {
    return null != b && "object" === typeof b
  }

  function v(b) {
    return "string" === typeof b
  }

  function ib(b) {
    return "number" === typeof b
  }

  function ta(b) {
    return "[object Date]" === za.call(b)
  }

  function P(b) {
    return "function" === typeof b
  }

  function jb(b) {
    return "[object RegExp]" === za.call(b)
  }

  function Ga(b) {
    return b && b.document && b.location && b.alert && b.setInterval
  }

  function Uc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
  }

  function Vc(b, a, c) {
    var d = [];
    r(b, function (b, f, g) {
      d.push(a.call(c, b, f, g))
    });
    return d
  }

  function Ra(b, a) {
    if (b.indexOf)return b.indexOf(a);
    for (var c = 0; c < b.length; c++)if (a === b[c])return c;
    return -1
  }

  function Sa(b, a) {
    var c = Ra(b, a);
    0 <= c && b.splice(c, 1);
    return a
  }

  function Ha(b, a, c, d) {
    if (Ga(b) || b && b.$evalAsync && b.$watch)throw Ta("cpws");
    if (a) {
      if (b === a)throw Ta("cpi");
      c = c || [];
      d = d || [];
      if (T(b)) {
        var e = Ra(c, b);
        if (-1 !== e)return d[e];
        c.push(b);
        d.push(a)
      }
      if (J(b))for (var f = a.length = 0; f < b.length; f++)e = Ha(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a.push(e); else {
        var g = a.$$hashKey;
        J(a) ? a.length = 0 : r(a, function (b, c) {
          delete a[c]
        });
        for (f in b)e = Ha(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e;
        ac(a, g)
      }
    } else if (a = b)J(b) ? a = Ha(b, [], c, d) : ta(b) ? a = new Date(b.getTime()) : jb(b) ? (a = RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : T(b) && (a = Ha(b, {}, c, d));
    return a
  }

  function ha(b, a) {
    if (J(b)) {
      a = a || [];
      for (var c = 0; c < b.length; c++)a[c] = b[c]
    } else if (T(b))for (c in a = a || {}, b)!kb.call(b, c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c]);
    return a || b
  }

  function Aa(b, a) {
    if (b === a)return !0;
    if (null === b || null === a)return !1;
    if (b !== b && a !== a)return !0;
    var c = typeof b, d;
    if (c == typeof a && "object" == c)if (J(b)) {
      if (!J(a))return !1;
      if ((c = b.length) == a.length) {
        for (d = 0; d < c; d++)if (!Aa(b[d], a[d]))return !1;
        return !0
      }
    } else {
      if (ta(b))return ta(a) ? isNaN(b.getTime()) && isNaN(a.getTime()) || b.getTime() ===
      a.getTime() : !1;
      if (jb(b) && jb(a))return b.toString() == a.toString();
      if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ga(b) || Ga(a) || J(a))return !1;
      c = {};
      for (d in b)if ("$" !== d.charAt(0) && !P(b[d])) {
        if (!Aa(b[d], a[d]))return !1;
        c[d] = !0
      }
      for (d in a)if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== t && !P(a[d]))return !1;
      return !0
    }
    return !1
  }

  function Bb(b, a) {
    var c = 2 < arguments.length ? Ba.call(arguments, 2) : [];
    return !P(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, c.concat(Ba.call(arguments,
          0))) : a.apply(b, c)
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b)
    }
  }

  function Wc(b, a) {
    var c = a;
    "string" === typeof b && "$" === b.charAt(0) ? c = t : Ga(a) ? c = "$WINDOW" : a && X === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
    return c
  }

  function na(b, a) {
    return "undefined" === typeof b ? t : JSON.stringify(b, Wc, a ? "  " : null)
  }

  function cc(b) {
    return v(b) ? JSON.parse(b) : b
  }

  function Ua(b) {
    "function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = K("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
    return b
  }

  function ia(b) {
    b = w(b).clone();
    try {
      b.empty()
    } catch (a) {
    }
    var c = w("<div>").append(b).html();
    try {
      return 3 === b[0].nodeType ? K(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + K(b)
      })
    } catch (d) {
      return K(c)
    }
  }

  function dc(b) {
    try {
      return decodeURIComponent(b)
    } catch (a) {
    }
  }

  function ec(b) {
    var a = {}, c, d;
    r((b || "").split("&"), function (b) {
      b && (c = b.replace(/\+/g, "%20").split("="), d = dc(c[0]), y(d) && (b = y(c[1]) ? dc(c[1]) : !0, kb.call(a, d) ? J(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
    });
    return a
  }

  function Cb(b) {
    var a =
        [];
    r(b, function (b, d) {
      J(b) ? r(b, function (b) {
        a.push(Ca(d, !0) + (!0 === b ? "" : "=" + Ca(b, !0)))
      }) : a.push(Ca(d, !0) + (!0 === b ? "" : "=" + Ca(b, !0)))
    });
    return a.length ? a.join("&") : ""
  }

  function lb(b) {
    return Ca(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
  }

  function Ca(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
  }

  function Xc(b, a) {
    function c(a) {
      a && d.push(a)
    }

    var d = [b], e, f, g = ["ng:app", "ng-app", "x-ng-app",
      "data-ng-app"], k = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    r(g, function (a) {
      g[a] = !0;
      c(X.getElementById(a));
      a = a.replace(":", "\\:");
      b.querySelectorAll && (r(b.querySelectorAll("." + a), c), r(b.querySelectorAll("." + a + "\\:"), c), r(b.querySelectorAll("[" + a + "]"), c))
    });
    r(d, function (a) {
      if (!e) {
        var b = k.exec(" " + a.className + " ");
        b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : r(a.attributes, function (b) {
          !e && g[b.name] && (e = a, f = b.value)
        })
      }
    });
    e && a(e, f ? [f] : [])
  }

  function fc(b, a) {
    var c = function () {
      b = w(b);
      if (b.injector()) {
        var c = b[0] === X ?
            "document" : ia(b);
        throw Ta("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }
      a = a || [];
      a.unshift(["$provide", function (a) {
        a.value("$rootElement", b)
      }]);
      a.unshift("ng");
      c = gc(a);
      c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (a, b, c, d, e) {
        a.$apply(function () {
          b.data("$injector", d);
          c(b)(a)
        })
      }]);
      return c
    }, d = /^NG_DEFER_BOOTSTRAP!/;
    if (W && !d.test(W.name))return c();
    W.name = W.name.replace(d, "");
    Va.resumeBootstrap = function (b) {
      r(b, function (b) {
        a.push(b)
      });
      c()
    }
  }

  function mb(b, a) {
    a =
        a || "_";
    return b.replace(Yc, function (b, d) {
      return (d ? a : "") + b.toLowerCase()
    })
  }

  function Db(b, a, c) {
    if (!b)throw Ta("areq", a || "?", c || "required");
    return b
  }

  function Wa(b, a, c) {
    c && J(b) && (b = b[b.length - 1]);
    Db(P(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
    return b
  }

  function Da(b, a) {
    if ("hasOwnProperty" === b)throw Ta("badname", a);
  }

  function hc(b, a, c) {
    if (!a)return b;
    a = a.split(".");
    for (var d, e = b, f = a.length, g = 0; g < f; g++)d = a[g], b && (b = (e = b)[d]);
    return !c && P(b) ? Bb(e, b) : b
  }

  function Eb(b) {
    var a =
        b[0];
    b = b[b.length - 1];
    if (a === b)return w(a);
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)break;
      c.push(a)
    } while (a !== b);
    return w(c)
  }

  function Zc(b) {
    var a = C("$injector"), c = C("ng");
    b = b.angular || (b.angular = {});
    b.$$minErr = b.$$minErr || C;
    return b.module || (b.module = function () {
          var b = {};
          return function (e, f, g) {
            if ("hasOwnProperty" === e)throw c("badname", "module");
            f && b.hasOwnProperty(e) && (b[e] = null);
            return b[e] || (b[e] = function () {
                  function b(a, d, e) {
                    return function () {
                      c[e || "push"]([a, d, arguments]);
                      return n
                    }
                  }

                  if (!f)throw a("nomod",
                      e);
                  var c = [], d = [], l = b("$injector", "invoke"), n = {
                    _invokeQueue: c,
                    _runBlocks: d,
                    requires: f,
                    name: e,
                    provider: b("$provide", "provider"),
                    factory: b("$provide", "factory"),
                    service: b("$provide", "service"),
                    value: b("$provide", "value"),
                    constant: b("$provide", "constant", "unshift"),
                    animation: b("$animateProvider", "register"),
                    filter: b("$filterProvider", "register"),
                    controller: b("$controllerProvider", "register"),
                    directive: b("$compileProvider", "directive"),
                    config: l,
                    run: function (a) {
                      d.push(a);
                      return this
                    }
                  };
                  g && l(g);
                  return n
                }())
          }
        }())
  }

  function $c(b) {
    D(b, {
      bootstrap: fc,
      copy: Ha,
      extend: D,
      equals: Aa,
      element: w,
      forEach: r,
      injector: gc,
      noop: E,
      bind: Bb,
      toJson: na,
      fromJson: cc,
      identity: Qa,
      isUndefined: x,
      isDefined: y,
      isString: v,
      isFunction: P,
      isObject: T,
      isNumber: ib,
      isElement: Uc,
      isArray: J,
      version: ad,
      isDate: ta,
      lowercase: K,
      uppercase: Ia,
      callbacks: {counter: 0},
      $$minErr: C,
      $$csp: Xa
    });
    Ya = Zc(W);
    try {
      Ya("ngLocale")
    } catch (a) {
      Ya("ngLocale", []).provider("$locale", bd)
    }
    Ya("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({$$sanitizeUri: cd});
      a.provider("$compile",
          ic).directive({
            a: dd,
            input: jc,
            textarea: jc,
            form: ed,
            script: fd,
            select: gd,
            style: hd,
            option: id,
            ngBind: jd,
            ngBindHtml: kd,
            ngBindTemplate: ld,
            ngClass: md,
            ngClassEven: nd,
            ngClassOdd: od,
            ngCloak: pd,
            ngController: qd,
            ngForm: rd,
            ngHide: sd,
            ngIf: td,
            ngInclude: ud,
            ngInit: vd,
            ngNonBindable: wd,
            ngPluralize: xd,
            ngRepeat: yd,
            ngShow: zd,
            ngStyle: Ad,
            ngSwitch: Bd,
            ngSwitchWhen: Cd,
            ngSwitchDefault: Dd,
            ngOptions: Ed,
            ngTransclude: Fd,
            ngModel: Gd,
            ngList: Hd,
            ngChange: Id,
            required: kc,
            ngRequired: kc,
            ngValue: Jd
          }).directive({ngInclude: Kd}).directive(Fb).directive(lc);
      a.provider({
        $anchorScroll: Ld,
        $animate: Md,
        $browser: Nd,
        $cacheFactory: Od,
        $controller: Pd,
        $document: Qd,
        $exceptionHandler: Rd,
        $filter: mc,
        $interpolate: Sd,
        $interval: Td,
        $http: Ud,
        $httpBackend: Vd,
        $location: Wd,
        $log: Xd,
        $parse: Yd,
        $rootScope: Zd,
        $q: $d,
        $sce: ae,
        $sceDelegate: be,
        $sniffer: ce,
        $templateCache: de,
        $timeout: ee,
        $window: fe,
        $$rAF: ge,
        $$asyncCallback: he
      })
    }])
  }

  function Za(b) {
    return b.replace(ie, function (a, b, d, e) {
      return e ? d.toUpperCase() : d
    }).replace(je, "Moz$1")
  }

  function Gb(b, a, c, d) {
    function e(b) {
      var e = c && b ? [this.filter(b)] :
          [this], m = a, h, l, n, p, q, s;
      if (!d || null != b)for (; e.length;)for (h = e.shift(), l = 0, n = h.length; l < n; l++)for (p = w(h[l]), m ? p.triggerHandler("$destroy") : m = !m, q = 0, p = (s = p.children()).length; q < p; q++)e.push(Ea(s[q]));
      return f.apply(this, arguments)
    }

    var f = Ea.fn[b], f = f.$original || f;
    e.$original = f;
    Ea.fn[b] = e
  }

  function S(b) {
    if (b instanceof S)return b;
    v(b) && (b = aa(b));
    if (!(this instanceof S)) {
      if (v(b) && "<" != b.charAt(0))throw Hb("nosel");
      return new S(b)
    }
    if (v(b)) {
      var a = b;
      b = X;
      var c;
      if (c = ke.exec(a))b = [b.createElement(c[1])]; else {
        var d =
            b, e;
        b = d.createDocumentFragment();
        c = [];
        if (Ib.test(a)) {
          d = b.appendChild(d.createElement("div"));
          e = (le.exec(a) || ["", ""])[1].toLowerCase();
          e = ea[e] || ea._default;
          d.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(me, "<$1></$2>") + e[2];
          d.removeChild(d.firstChild);
          for (a = e[0]; a--;)d = d.lastChild;
          a = 0;
          for (e = d.childNodes.length; a < e; ++a)c.push(d.childNodes[a]);
          d = b.firstChild;
          d.textContent = ""
        } else c.push(d.createTextNode(a));
        b.textContent = "";
        b.innerHTML = "";
        b = c
      }
      Jb(this, b);
      w(X.createDocumentFragment()).append(this)
    } else Jb(this,
        b)
  }

  function Kb(b) {
    return b.cloneNode(!0)
  }

  function Ja(b) {
    Lb(b);
    var a = 0;
    for (b = b.childNodes || []; a < b.length; a++)Ja(b[a])
  }

  function nc(b, a, c, d) {
    if (y(d))throw Hb("offargs");
    var e = oa(b, "events");
    oa(b, "handle") && (x(a) ? r(e, function (a, c) {
      $a(b, c, a);
      delete e[c]
    }) : r(a.split(" "), function (a) {
      x(c) ? ($a(b, a, e[a]), delete e[a]) : Sa(e[a] || [], c)
    }))
  }

  function Lb(b, a) {
    var c = b.ng339, d = ab[c];
    d && (a ? delete ab[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), nc(b)), delete ab[c], b.ng339 = t))
  }

  function oa(b, a, c) {
    var d =
        b.ng339, d = ab[d || -1];
    if (y(c))d || (b.ng339 = d = ++ne, d = ab[d] = {}), d[a] = c; else return d && d[a]
  }

  function Mb(b, a, c) {
    var d = oa(b, "data"), e = y(c), f = !e && y(a), g = f && !T(a);
    d || g || oa(b, "data", d = {});
    if (e)d[a] = c; else if (f) {
      if (g)return d && d[a];
      D(d, a)
    } else return d
  }

  function Nb(b, a) {
    return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
  }

  function nb(b, a) {
    a && b.setAttribute && r(a.split(" "), function (a) {
      b.setAttribute("class", aa((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g,
          " ").replace(" " + aa(a) + " ", " ")))
    })
  }

  function ob(b, a) {
    if (a && b.setAttribute) {
      var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      r(a.split(" "), function (a) {
        a = aa(a);
        -1 === c.indexOf(" " + a + " ") && (c += a + " ")
      });
      b.setAttribute("class", aa(c))
    }
  }

  function Jb(b, a) {
    if (a) {
      a = a.nodeName || !y(a.length) || Ga(a) ? [a] : a;
      for (var c = 0; c < a.length; c++)b.push(a[c])
    }
  }

  function oc(b, a) {
    return pb(b, "$" + (a || "ngController") + "Controller")
  }

  function pb(b, a, c) {
    9 == b.nodeType && (b = b.documentElement);
    for (a = J(a) ? a : [a]; b;) {
      for (var d =
          0, e = a.length; d < e; d++)if ((c = w.data(b, a[d])) !== t)return c;
      b = b.parentNode || 11 === b.nodeType && b.host
    }
  }

  function pc(b) {
    for (var a = 0, c = b.childNodes; a < c.length; a++)Ja(c[a]);
    for (; b.firstChild;)b.removeChild(b.firstChild)
  }

  function qc(b, a) {
    var c = qb[a.toLowerCase()];
    return c && rc[b.nodeName] && c
  }

  function oe(b, a) {
    var c = function (c, e) {
      c.preventDefault || (c.preventDefault = function () {
        c.returnValue = !1
      });
      c.stopPropagation || (c.stopPropagation = function () {
        c.cancelBubble = !0
      });
      c.target || (c.target = c.srcElement || X);
      if (x(c.defaultPrevented)) {
        var f =
            c.preventDefault;
        c.preventDefault = function () {
          c.defaultPrevented = !0;
          f.call(c)
        };
        c.defaultPrevented = !1
      }
      c.isDefaultPrevented = function () {
        return c.defaultPrevented || !1 === c.returnValue
      };
      var g = ha(a[e || c.type] || []);
      r(g, function (a) {
        a.call(b, c)
      });
      8 >= Q ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
    };
    c.elem = b;
    return c
  }

  function Ka(b, a) {
    var c = typeof b, d;
    "function" == c || "object" == c && null !== b ? "function" == typeof(d =
        b.$$hashKey) ? d = b.$$hashKey() : d === t && (d = b.$$hashKey = (a || hb)()) : d = b;
    return c + ":" + d
  }

  function bb(b, a) {
    if (a) {
      var c = 0;
      this.nextUid = function () {
        return ++c
      }
    }
    r(b, this.put, this)
  }

  function sc(b) {
    var a, c;
    "function" === typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(pe, ""), c = c.match(qe), r(c[1].split(re), function (b) {
      b.replace(se, function (b, c, d) {
        a.push(d)
      })
    })), b.$inject = a) : J(b) ? (c = b.length - 1, Wa(b[c], "fn"), a = b.slice(0, c)) : Wa(b, "fn", !0);
    return a
  }

  function gc(b) {
    function a(a) {
      return function (b, c) {
        if (T(b))r(b,
            $b(a)); else return a(b, c)
      }
    }

    function c(a, b) {
      Da(a, "service");
      if (P(b) || J(b))b = n.instantiate(b);
      if (!b.$get)throw cb("pget", a);
      return l[a + k] = b
    }

    function d(a, b) {
      return c(a, {$get: b})
    }

    function e(a) {
      var b = [], c, d, f, k;
      r(a, function (a) {
        if (!h.get(a)) {
          h.put(a, !0);
          try {
            if (v(a))for (c = Ya(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, f = 0, k = d.length; f < k; f++) {
              var g = d[f], m = n.get(g[0]);
              m[g[1]].apply(m, g[2])
            } else P(a) ? b.push(n.invoke(a)) : J(a) ? b.push(n.invoke(a)) : Wa(a, "module")
          } catch (l) {
            throw J(a) && (a =
                a[a.length - 1]), l.message && (l.stack && -1 == l.stack.indexOf(l.message)) && (l = l.message + "\n" + l.stack), cb("modulerr", a, l.stack || l.message || l);
          }
        }
      });
      return b
    }

    function f(a, b) {
      function c(d) {
        if (a.hasOwnProperty(d)) {
          if (a[d] === g)throw cb("cdep", d + " <- " + m.join(" <- "));
          return a[d]
        }
        try {
          return m.unshift(d), a[d] = g, a[d] = b(d)
        } catch (e) {
          throw a[d] === g && delete a[d], e;
        } finally {
          m.shift()
        }
      }

      function d(a, b, e) {
        var f = [], k = sc(a), g, m, h;
        m = 0;
        for (g = k.length; m < g; m++) {
          h = k[m];
          if ("string" !== typeof h)throw cb("itkn", h);
          f.push(e && e.hasOwnProperty(h) ?
              e[h] : c(h))
        }
        J(a) && (a = a[g]);
        return a.apply(b, f)
      }

      return {
        invoke: d, instantiate: function (a, b) {
          var c = function () {
          }, e;
          c.prototype = (J(a) ? a[a.length - 1] : a).prototype;
          c = new c;
          e = d(a, c, b);
          return T(e) || P(e) ? e : c
        }, get: c, annotate: sc, has: function (b) {
          return l.hasOwnProperty(b + k) || a.hasOwnProperty(b)
        }
      }
    }

    var g = {}, k = "Provider", m = [], h = new bb([], !0), l = {
      $provide: {
        provider: a(c), factory: a(d), service: a(function (a, b) {
          return d(a, ["$injector", function (a) {
            return a.instantiate(b)
          }])
        }), value: a(function (a, b) {
          return d(a, ba(b))
        }), constant: a(function (a,
                                  b) {
          Da(a, "constant");
          l[a] = b;
          p[a] = b
        }), decorator: function (a, b) {
          var c = n.get(a + k), d = c.$get;
          c.$get = function () {
            var a = q.invoke(d, c);
            return q.invoke(b, null, {$delegate: a})
          }
        }
      }
    }, n = l.$injector = f(l, function () {
      throw cb("unpr", m.join(" <- "));
    }), p = {}, q = p.$injector = f(p, function (a) {
      a = n.get(a + k);
      return q.invoke(a.$get, a)
    });
    r(e(b), function (a) {
      q.invoke(a || E)
    });
    return q
  }

  function Ld() {
    var b = !0;
    this.disableAutoScrolling = function () {
      b = !1
    };
    this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
      function e(a) {
        var b = null;
        r(a, function (a) {
          b || "a" !== K(a.nodeName) || (b = a)
        });
        return b
      }

      function f() {
        var b = c.hash(), d;
        b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
      }

      var g = a.document;
      b && d.$watch(function () {
        return c.hash()
      }, function () {
        d.$evalAsync(f)
      });
      return f
    }]
  }

  function he() {
    this.$get = ["$$rAF", "$timeout", function (b, a) {
      return b.supported ? function (a) {
        return b(a)
      } : function (b) {
        return a(b, 0, !1)
      }
    }]
  }

  function te(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null,
            Ba.call(arguments, 1))
      } finally {
        if (s--, 0 === s)for (; F.length;)try {
          F.pop()()
        } catch (b) {
          c.error(b)
        }
      }
    }

    function f(a, b) {
      (function fa() {
        r(u, function (a) {
          a()
        });
        A = b(fa, a)
      })()
    }

    function g() {
      z = null;
      N != k.url() && (N = k.url(), r(ca, function (a) {
        a(k.url())
      }))
    }

    var k = this, m = a[0], h = b.location, l = b.history, n = b.setTimeout, p = b.clearTimeout, q = {};
    k.isMock = !1;
    var s = 0, F = [];
    k.$$completeOutstandingRequest = e;
    k.$$incOutstandingRequestCount = function () {
      s++
    };
    k.notifyWhenNoOutstandingRequests = function (a) {
      r(u, function (a) {
        a()
      });
      0 === s ? a() : F.push(a)
    };
    var u = [], A;
    k.addPollFn = function (a) {
      x(A) && f(100, n);
      u.push(a);
      return a
    };
    var N = h.href, R = a.find("base"), z = null;
    k.url = function (a, c) {
      h !== b.location && (h = b.location);
      l !== b.history && (l = b.history);
      if (a) {
        if (N != a)return N = a, d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), R.attr("href", R.attr("href"))) : (z = a, c ? h.replace(a) : h.href = a), k
      } else return z || h.href.replace(/%27/g, "'")
    };
    var ca = [], L = !1;
    k.onUrlChange = function (a) {
      if (!L) {
        if (d.history)w(b).on("popstate", g);
        if (d.hashchange)w(b).on("hashchange", g);
        else k.addPollFn(g);
        L = !0
      }
      ca.push(a);
      return a
    };
    k.$$checkUrlChange = g;
    k.baseHref = function () {
      var a = R.attr("href");
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
    };
    var O = {}, da = "", B = k.baseHref();
    k.cookies = function (a, b) {
      var d, e, f, k;
      if (a)b === t ? m.cookie = escape(a) + "=;path=" + B + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : v(b) && (d = (m.cookie = escape(a) + "=" + escape(b) + ";path=" + B).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
        if (m.cookie !==
            da)for (da = m.cookie, d = da.split("; "), O = {}, f = 0; f < d.length; f++)e = d[f], k = e.indexOf("="), 0 < k && (a = unescape(e.substring(0, k)), O[a] === t && (O[a] = unescape(e.substring(k + 1))));
        return O
      }
    };
    k.defer = function (a, b) {
      var c;
      s++;
      c = n(function () {
        delete q[c];
        e(a)
      }, b || 0);
      q[c] = !0;
      return c
    };
    k.defer.cancel = function (a) {
      return q[a] ? (delete q[a], p(a), e(E), !0) : !1
    }
  }

  function Nd() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
      return new te(b, d, a, c)
    }]
  }

  function Od() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a !=
          n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
        }

        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a))
        }

        if (b in a)throw C("$cacheFactory")("iid", b);
        var g = 0, k = D({}, d, {id: b}), m = {}, h = d && d.capacity || Number.MAX_VALUE, l = {}, n = null, p = null;
        return a[b] = {
          put: function (a, b) {
            if (h < Number.MAX_VALUE) {
              var c = l[a] || (l[a] = {key: a});
              e(c)
            }
            if (!x(b))return a in m || g++, m[a] = b, g > h && this.remove(p.key), b
          }, get: function (a) {
            if (h < Number.MAX_VALUE) {
              var b = l[a];
              if (!b)return;
              e(b)
            }
            return m[a]
          }, remove: function (a) {
            if (h < Number.MAX_VALUE) {
              var b =
                  l[a];
              if (!b)return;
              b == n && (n = b.p);
              b == p && (p = b.n);
              f(b.n, b.p);
              delete l[a]
            }
            delete m[a];
            g--
          }, removeAll: function () {
            m = {};
            g = 0;
            l = {};
            n = p = null
          }, destroy: function () {
            l = k = m = null;
            delete a[b]
          }, info: function () {
            return D({}, k, {size: g})
          }
        }
      }

      var a = {};
      b.info = function () {
        var b = {};
        r(a, function (a, e) {
          b[e] = a.info()
        });
        return b
      };
      b.get = function (b) {
        return a[b]
      };
      return b
    }
  }

  function de() {
    this.$get = ["$cacheFactory", function (b) {
      return b("templates")
    }]
  }

  function ic(b, a) {
    var c = {}, d = "Directive", e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, f = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
        g = /^(on[a-z]+|formaction)$/;
    this.directive = function m(a, e) {
      Da(a, "directive");
      v(a) ? (Db(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, ["$injector", "$exceptionHandler", function (b, d) {
        var e = [];
        r(c[a], function (c, f) {
          try {
            var g = b.invoke(c);
            P(g) ? g = {compile: ba(g)} : !g.compile && g.link && (g.compile = ba(g.link));
            g.priority = g.priority || 0;
            g.index = f;
            g.name = g.name || a;
            g.require = g.require || g.controller && g.name;
            g.restrict = g.restrict || "A";
            e.push(g)
          } catch (m) {
            d(m)
          }
        });
        return e
      }])), c[a].push(e)) : r(a, $b(m));
      return this
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
    };
    this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, l, n, p, q, s, F, u, A, N, R) {
      function z(a, b, c, d, e) {
        a instanceof
        w || (a = w(a));
        r(a, function (b, c) {
          3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = w(b).wrap("<span></span>").parent()[0])
        });
        var f = L(a, b, a, c, d, e);
        ca(a, "ng-scope");
        return function (b, c, d, e) {
          Db(b, "scope");
          var g = c ? La.clone.call(a) : a;
          r(d, function (a, b) {
            g.data("$" + b + "Controller", a)
          });
          d = 0;
          for (var m = g.length; d < m; d++) {
            var h = g[d].nodeType;
            1 !== h && 9 !== h || g.eq(d).data("$scope", b)
          }
          c && c(g, b);
          f && f(b, g, g, e);
          return g
        }
      }

      function ca(a, b) {
        try {
          a.addClass(b)
        } catch (c) {
        }
      }

      function L(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, h, l, q, n,
              p, s;
          f = c.length;
          var M = Array(f);
          for (q = 0; q < f; q++)M[q] = c[q];
          p = q = 0;
          for (n = m.length; q < n; p++)h = M[p], c = m[q++], f = m[q++], c ? (c.scope ? (l = a.$new(), w.data(h, "$scope", l)) : l = a, s = c.transcludeOnThisElement ? O(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? O(a, b) : null, c(f, l, h, d, s)) : f && f(a, h.childNodes, t, e)
        }

        for (var m = [], h, l, q, n, p = 0; p < a.length; p++)h = new Ob, l = da(a[p], [], h, 0 === p ? d : t, e), (f = l.length ? H(l, a[p], h, b, c, null, [], [], f) : null) && f.scope && ca(h.$$element, "ng-scope"), h = f && f.terminal || !(q = a[p].childNodes) || !q.length ?
            null : L(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), m.push(f, h), n = n || f || h, f = null;
        return n ? g : null
      }

      function O(a, b, c) {
        return function (d, e, f) {
          var g = !1;
          d || (d = a.$new(), g = d.$$transcluded = !0);
          e = b(d, e, f, c);
          if (g)e.on("$destroy", function () {
            d.$destroy()
          });
          return e
        }
      }

      function da(a, b, c, d, g) {
        var m = c.$attr, h;
        switch (a.nodeType) {
          case 1:
            fa(b, pa(Ma(a).toLowerCase()), "E", d, g);
            for (var l, q, n, p = a.attributes, s = 0, F = p && p.length; s < F; s++) {
              var A = !1, N = !1;
              l = p[s];
              if (!Q || 8 <= Q || l.specified) {
                h = l.name;
                q =
                    aa(l.value);
                l = pa(h);
                if (n = U.test(l))h = mb(l.substr(6), "-");
                var u = l.replace(/(Start|End)$/, "");
                l === u + "Start" && (A = h, N = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6));
                l = pa(h.toLowerCase());
                m[l] = h;
                if (n || !c.hasOwnProperty(l))c[l] = q, qc(a, l) && (c[l] = !0);
                S(a, b, q, l);
                fa(b, l, "A", d, g, A, N)
              }
            }
            a = a.className;
            if (v(a) && "" !== a)for (; h = f.exec(a);)l = pa(h[2]), fa(b, l, "C", d, g) && (c[l] = aa(h[3])), a = a.substr(h.index + h[0].length);
            break;
          case 3:
            K(b, a.nodeValue);
            break;
          case 8:
            try {
              if (h = e.exec(a.nodeValue))l = pa(h[1]), fa(b, l, "M",
                  d, g) && (c[l] = aa(h[2]))
            } catch (z) {
            }
        }
        b.sort(x);
        return b
      }

      function B(a, b, c) {
        var d = [], e = 0;
        if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a)throw ja("uterdir", b, c);
            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
            d.push(a);
            a = a.nextSibling
          } while (0 < e)
        } else d.push(a);
        return w(d)
      }

      function I(a, b, c) {
        return function (d, e, f, g, h) {
          e = B(e[0], b, c);
          return a(d, e, f, g, h)
        }
      }

      function H(a, c, d, e, f, g, m, n, p) {
        function F(a, b, c, d) {
          if (a) {
            c && (a = I(a, c, d));
            a.require = G.require;
            a.directiveName = C;
            if (L === G || G.$$isolateScope)a =
                tc(a, {isolateScope: !0});
            m.push(a)
          }
          if (b) {
            c && (b = I(b, c, d));
            b.require = G.require;
            b.directiveName = C;
            if (L === G || G.$$isolateScope)b = tc(b, {isolateScope: !0});
            n.push(b)
          }
        }

        function A(a, b, c, d) {
          var e, f = "data", g = !1;
          if (v(b)) {
            for (; "^" == (e = b.charAt(0)) || "?" == e;)b = b.substr(1), "^" == e && (f = "inheritedData"), g = g || "?" == e;
            e = null;
            d && "data" === f && (e = d[b]);
            e = e || c[f]("$" + b + "Controller");
            if (!e && !g)throw ja("ctreq", b, a);
          } else J(b) && (e = [], r(b, function (b) {
            e.push(A(a, b, c, d))
          }));
          return e
        }

        function N(a, e, f, g, p) {
          function F(a, b) {
            var c;
            2 > arguments.length &&
            (b = a, a = t);
            K && (c = da);
            return p(a, b, c)
          }

          var u, M, z, O, I, B, da = {}, rb;
          u = c === f ? d : ha(d, new Ob(w(f), d.$attr));
          M = u.$$element;
          if (L) {
            var Na = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
            B = e.$new(!0);
            !H || H !== L && H !== L.$$originalDirective ? M.data("$isolateScopeNoTemplate", B) : M.data("$isolateScope", B);
            ca(M, "ng-isolate-scope");
            r(L.scope, function (a, c) {
              var d = a.match(Na) || [], f = d[3] || c, g = "?" == d[2], d = d[1], m, l, n, p;
              B.$$isolateBindings[c] = d + f;
              switch (d) {
                case "@":
                  u.$observe(f, function (a) {
                    B[c] = a
                  });
                  u.$$observers[f].$$scope = e;
                  u[f] && (B[c] = b(u[f])(e));
                  break;
                case "=":
                  if (g && !u[f])break;
                  l = q(u[f]);
                  p = l.literal ? Aa : function (a, b) {
                    return a === b || a !== a && b !== b
                  };
                  n = l.assign || function () {
                    m = B[c] = l(e);
                    throw ja("nonassign", u[f], L.name);
                  };
                  m = B[c] = l(e);
                  B.$watch(function () {
                    var a = l(e);
                    p(a, B[c]) || (p(a, m) ? n(e, a = B[c]) : B[c] = a);
                    return m = a
                  }, null, l.literal);
                  break;
                case "&":
                  l = q(u[f]);
                  B[c] = function (a) {
                    return l(e, a)
                  };
                  break;
                default:
                  throw ja("iscp", L.name, c, a);
              }
            })
          }
          rb = p && F;
          R && r(R, function (a) {
            var b = {$scope: a === L || a.$$isolateScope ? B : e, $element: M, $attrs: u, $transclude: rb}, c;
            I = a.controller;
            "@" == I && (I = u[a.name]);
            c = s(I, b);
            da[a.name] = c;
            K || M.data("$" + a.name + "Controller", c);
            a.controllerAs && (b.$scope[a.controllerAs] = c)
          });
          g = 0;
          for (z = m.length; g < z; g++)try {
            O = m[g], O(O.isolateScope ? B : e, M, u, O.require && A(O.directiveName, O.require, M, da), rb)
          } catch (G) {
            l(G, ia(M))
          }
          g = e;
          L && (L.template || null === L.templateUrl) && (g = B);
          a && a(g, f.childNodes, t, p);
          for (g = n.length - 1; 0 <= g; g--)try {
            O = n[g], O(O.isolateScope ? B : e, M, u, O.require && A(O.directiveName, O.require, M, da), rb)
          } catch (y) {
            l(y, ia(M))
          }
        }

        p = p || {};
        for (var u = -Number.MAX_VALUE,
                 O, R = p.controllerDirectives, L = p.newIsolateScopeDirective, H = p.templateDirective, fa = p.nonTlbTranscludeDirective, x = !1, D = !1, K = p.hasElementTranscludeDirective, Z = d.$$element = w(c), G, C, V, S = e, Q, Fa = 0, qa = a.length; Fa < qa; Fa++) {
          G = a[Fa];
          var U = G.$$start, Y = G.$$end;
          U && (Z = B(c, U, Y));
          V = t;
          if (u > G.priority)break;
          if (V = G.scope)O = O || G, G.templateUrl || (db("new/isolated scope", L, G, Z), T(V) && (L = G));
          C = G.name;
          !G.templateUrl && G.controller && (V = G.controller, R = R || {}, db("'" + C + "' controller", R[C], G, Z), R[C] = G);
          if (V = G.transclude)x = !0, G.$$tlb ||
          (db("transclusion", fa, G, Z), fa = G), "element" == V ? (K = !0, u = G.priority, V = Z, Z = d.$$element = w(X.createComment(" " + C + ": " + d[C] + " ")), c = Z[0], Na(f, Ba.call(V, 0), c), S = z(V, e, u, g && g.name, {nonTlbTranscludeDirective: fa})) : (V = w(Kb(c)).contents(), Z.empty(), S = z(V, e));
          if (G.template)if (D = !0, db("template", H, G, Z), H = G, V = P(G.template) ? G.template(Z, d) : G.template, V = W(V), G.replace) {
            g = G;
            V = Ib.test(V) ? w(aa(V)) : [];
            c = V[0];
            if (1 != V.length || 1 !== c.nodeType)throw ja("tplrt", C, "");
            Na(f, Z, c);
            qa = {$attr: {}};
            V = da(c, [], qa);
            var $ = a.splice(Fa +
            1, a.length - (Fa + 1));
            L && y(V);
            a = a.concat(V).concat($);
            E(d, qa);
            qa = a.length
          } else Z.html(V);
          if (G.templateUrl)D = !0, db("template", H, G, Z), H = G, G.replace && (g = G), N = ue(a.splice(Fa, a.length - Fa), Z, d, f, x && S, m, n, {controllerDirectives: R, newIsolateScopeDirective: L, templateDirective: H, nonTlbTranscludeDirective: fa}), qa = a.length; else if (G.compile)try {
            Q = G.compile(Z, d, S), P(Q) ? F(null, Q, U, Y) : Q && F(Q.pre, Q.post, U, Y)
          } catch (ve) {
            l(ve, ia(Z))
          }
          G.terminal && (N.terminal = !0, u = Math.max(u, G.priority))
        }
        N.scope = O && !0 === O.scope;
        N.transcludeOnThisElement =
            x;
        N.templateOnThisElement = D;
        N.transclude = S;
        p.hasElementTranscludeDirective = K;
        return N
      }

      function y(a) {
        for (var b = 0, c = a.length; b < c; b++)a[b] = bc(a[b], {$$isolateScope: !0})
      }

      function fa(b, e, f, g, h, q, n) {
        if (e === h)return null;
        h = null;
        if (c.hasOwnProperty(e)) {
          var p;
          e = a.get(e + d);
          for (var s = 0, u = e.length; s < u; s++)try {
            p = e[s], (g === t || g > p.priority) && -1 != p.restrict.indexOf(f) && (q && (p = bc(p, {$$start: q, $$end: n})), b.push(p), h = p)
          } catch (F) {
            l(F)
          }
        }
        return h
      }

      function E(a, b) {
        var c = b.$attr, d = a.$attr, e = a.$$element;
        r(a, function (d, e) {
          "$" !=
          e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
        });
        r(b, function (b, f) {
          "class" == f ? (ca(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
        })
      }

      function ue(a, b, c, d, e, f, g, h) {
        var m = [], l, q, s = b[0], u = a.shift(), F = D({}, u, {templateUrl: null, transclude: null, replace: null, $$originalDirective: u}), N = P(u.templateUrl) ? u.templateUrl(b, c) : u.templateUrl;
        b.empty();
        n.get(A.getTrustedResourceUrl(N), {cache: p}).success(function (n) {
          var p, A;
          n = W(n);
          if (u.replace) {
            n = Ib.test(n) ? w(aa(n)) : [];
            p = n[0];
            if (1 != n.length || 1 !== p.nodeType)throw ja("tplrt", u.name, N);
            n = {$attr: {}};
            Na(d, b, p);
            var z = da(p, [], n);
            T(u.scope) && y(z);
            a = z.concat(a);
            E(c, n)
          } else p = s, b.html(n);
          a.unshift(F);
          l = H(a, p, c, e, b, u, f, g, h);
          r(d, function (a, c) {
            a == p && (d[c] = b[0])
          });
          for (q = L(b[0].childNodes, e); m.length;) {
            n = m.shift();
            A = m.shift();
            var R = m.shift(), I = m.shift(), z = b[0];
            if (A !== s) {
              var B = A.className;
              h.hasElementTranscludeDirective &&
              u.replace || (z = Kb(p));
              Na(R, w(A), z);
              ca(w(z), B)
            }
            A = l.transcludeOnThisElement ? O(n, l.transclude, I) : I;
            l(q, n, z, d, A)
          }
          m = null
        }).error(function (a, b, c, d) {
          throw ja("tpload", d.url);
        });
        return function (a, b, c, d, e) {
          a = e;
          m ? (m.push(b), m.push(c), m.push(d), m.push(a)) : (l.transcludeOnThisElement && (a = O(b, l.transclude, e)), l(q, b, c, d, a))
        }
      }

      function x(a, b) {
        var c = b.priority - a.priority;
        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
      }

      function db(a, b, c, d) {
        if (b)throw ja("multidir", b.name, c.name, a, ia(d));
      }

      function K(a,
                 c) {
        var d = b(c, !0);
        d && a.push({
          priority: 0, compile: function (a) {
            var b = a.parent().length;
            b && ca(a.parent(), "ng-binding");
            return function (a, c) {
              var e = c.parent(), f = e.data("$binding") || [];
              f.push(d);
              e.data("$binding", f);
              b || ca(e, "ng-binding");
              a.$watch(d, function (a) {
                c[0].nodeValue = a
              })
            }
          }
        })
      }

      function C(a, b) {
        if ("srcdoc" == b)return A.HTML;
        var c = Ma(a);
        if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b))return A.RESOURCE_URL
      }

      function S(a, c, d, e) {
        var f = b(d, !0);
        if (f) {
          if ("multiple" === e && "SELECT" ===
              Ma(a))throw ja("selmulti", ia(a));
          c.push({
            priority: 100, compile: function () {
              return {
                pre: function (c, d, m) {
                  d = m.$$observers || (m.$$observers = {});
                  if (g.test(e))throw ja("nodomevents");
                  if (f = b(m[e], !0, C(a, e)))m[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (m.$$observers && m.$$observers[e].$$scope || c).$watch(f, function (a, b) {
                    "class" === e && a != b ? m.$updateClass(a, b) : m.$set(e, a)
                  })
                }
              }
            }
          })
        }
      }

      function Na(a, b, c) {
        var d = b[0], e = b.length, f = d.parentNode, g, m;
        if (a)for (g = 0, m = a.length; g < m; g++)if (a[g] == d) {
          a[g++] = c;
          m = g + e - 1;
          for (var h = a.length; g <
          h; g++, m++)m < h ? a[g] = a[m] : delete a[g];
          a.length -= e - 1;
          break
        }
        f && f.replaceChild(c, d);
        a = X.createDocumentFragment();
        a.appendChild(d);
        c[w.expando] = d[w.expando];
        d = 1;
        for (e = b.length; d < e; d++)f = b[d], w(f).remove(), a.appendChild(f), delete b[d];
        b[0] = c;
        b.length = 1
      }

      function tc(a, b) {
        return D(function () {
          return a.apply(null, arguments)
        }, a, b)
      }

      var Ob = function (a, b) {
        this.$$element = a;
        this.$attr = b || {}
      };
      Ob.prototype = {
        $normalize: pa, $addClass: function (a) {
          a && 0 < a.length && N.addClass(this.$$element, a)
        }, $removeClass: function (a) {
          a && 0 <
          a.length && N.removeClass(this.$$element, a)
        }, $updateClass: function (a, b) {
          var c = uc(a, b), d = uc(b, a);
          0 === c.length ? N.removeClass(this.$$element, d) : 0 === d.length ? N.addClass(this.$$element, c) : N.setClass(this.$$element, c, d)
        }, $set: function (a, b, c, d) {
          var e = qc(this.$$element[0], a);
          e && (this.$$element.prop(a, b), d = e);
          this[a] = b;
          d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = mb(a, "-"));
          e = Ma(this.$$element);
          if ("A" === e && "href" === a || "IMG" === e && "src" === a)this[a] = b = R(b, "src" === a);
          !1 !== c && (null === b || b === t ? this.$$element.removeAttr(d) :
              this.$$element.attr(d, b));
          (c = this.$$observers) && r(c[a], function (a) {
            try {
              a(b)
            } catch (c) {
              l(c)
            }
          })
        }, $observe: function (a, b) {
          var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
          e.push(b);
          F.$evalAsync(function () {
            e.$$inter || b(c[a])
          });
          return b
        }
      };
      var qa = b.startSymbol(), Z = b.endSymbol(), W = "{{" == qa || "}}" == Z ? Qa : function (a) {
        return a.replace(/\{\{/g, qa).replace(/}}/g, Z)
      }, U = /^ngAttr[A-Z]/;
      return z
    }]
  }

  function pa(b) {
    return Za(b.replace(we, ""))
  }

  function uc(b, a) {
    var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f =
        0;
    a:for (; f < d.length; f++) {
      for (var g = d[f], k = 0; k < e.length; k++)if (g == e[k])continue a;
      c += (0 < c.length ? " " : "") + g
    }
    return c
  }

  function Pd() {
    var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, d) {
      Da(a, "controller");
      T(a) ? D(b, a) : b[a] = d
    };
    this.$get = ["$injector", "$window", function (c, d) {
      return function (e, f) {
        var g, k, m;
        v(e) && (g = e.match(a), k = g[1], m = g[3], e = b.hasOwnProperty(k) ? b[k] : hc(f.$scope, k, !0) || hc(d, k, !0), Wa(e, k, !0));
        g = c.instantiate(e, f);
        if (m) {
          if (!f || "object" !== typeof f.$scope)throw C("$controller")("noscp",
              k || e.name, m);
          f.$scope[m] = g
        }
        return g
      }
    }]
  }

  function Qd() {
    this.$get = ["$window", function (b) {
      return w(b.document)
    }]
  }

  function Rd() {
    this.$get = ["$log", function (b) {
      return function (a, c) {
        b.error.apply(b, arguments)
      }
    }]
  }

  function vc(b) {
    var a = {}, c, d, e;
    if (!b)return a;
    r(b.split("\n"), function (b) {
      e = b.indexOf(":");
      c = K(aa(b.substr(0, e)));
      d = aa(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + ", " + d : d)
    });
    return a
  }

  function wc(b) {
    var a = T(b) ? b : t;
    return function (c) {
      a || (a = vc(b));
      return c ? a[K(c)] || null : a
    }
  }

  function xc(b, a, c) {
    if (P(c))return c(b,
        a);
    r(c, function (c) {
      b = c(b, a)
    });
    return b
  }

  function Ud() {
    var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = {"Content-Type": "application/json;charset=utf-8"}, e = this.defaults = {
      transformResponse: [function (d) {
        v(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = cc(d)));
        return d
      }], transformRequest: [function (a) {
        return T(a) && "[object File]" !== za.call(a) && "[object Blob]" !== za.call(a) ? na(a) : a
      }], headers: {common: {Accept: "application/json, text/plain, */*"}, post: ha(d), put: ha(d), patch: ha(d)}, xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN"
    }, f = this.interceptors = [], g = this.responseInterceptors = [];
    this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, c, d, n, p) {
      function q(a) {
        function b(a) {
          var d = D({}, a, {data: xc(a.data, a.headers, c.transformResponse)});
          return 200 <= a.status && 300 > a.status ? d : n.reject(d)
        }

        var c = {method: "get", transformRequest: e.transformRequest, transformResponse: e.transformResponse}, d = function (a) {
          var b = e.headers, c = D({}, a.headers), d, f, b = D({}, b.common, b[K(a.method)]);
          a:for (d in b) {
            a = K(d);
            for (f in c)if (K(f) === a)continue a;
            c[d] = b[d]
          }
          (function (a) {
            var b;
            r(a, function (c, d) {
              P(c) && (b = c(), null != b ? a[d] = b : delete a[d])
            })
          })(c);
          return c
        }(a);
        D(c, a);
        c.headers = d;
        c.method = Ia(c.method);
        var f = [function (a) {
          d = a.headers;
          var c = xc(a.data, wc(d), a.transformRequest);
          x(c) && r(d, function (a, b) {
            "content-type" === K(b) && delete d[b]
          });
          x(a.withCredentials) && !x(e.withCredentials) && (a.withCredentials = e.withCredentials);
          return s(a, c, d).then(b, b)
        }, t], g = n.when(c);
        for (r(A, function (a) {
          (a.request || a.requestError) &&
          f.unshift(a.request, a.requestError);
          (a.response || a.responseError) && f.push(a.response, a.responseError)
        }); f.length;) {
          a = f.shift();
          var m = f.shift(), g = g.then(a, m)
        }
        g.success = function (a) {
          g.then(function (b) {
            a(b.data, b.status, b.headers, c)
          });
          return g
        };
        g.error = function (a) {
          g.then(null, function (b) {
            a(b.data, b.status, b.headers, c)
          });
          return g
        };
        return g
      }

      function s(c, f, g) {
        function h(a, b, c, e) {
          I && (200 <= a && 300 > a ? I.put(w, [a, b, vc(c), e]) : I.remove(w));
          p(b, a, c, e);
          d.$$phase || d.$apply()
        }

        function p(a, b, d, e) {
          b = Math.max(b, 0);
          (200 <=
          b && 300 > b ? A.resolve : A.reject)({data: a, status: b, headers: wc(d), config: c, statusText: e})
        }

        function s() {
          var a = Ra(q.pendingRequests, c);
          -1 !== a && q.pendingRequests.splice(a, 1)
        }

        var A = n.defer(), r = A.promise, I, H, w = F(c.url, c.params);
        q.pendingRequests.push(c);
        r.then(s, s);
        !c.cache && !e.cache || (!1 === c.cache || "GET" !== c.method && "JSONP" !== c.method) || (I = T(c.cache) ? c.cache : T(e.cache) ? e.cache : u);
        if (I)if (H = I.get(w), y(H)) {
          if (H && P(H.then))return H.then(s, s), H;
          J(H) ? p(H[1], H[0], ha(H[2]), H[3]) : p(H, 200, {}, "OK")
        } else I.put(w, r);
        x(H) &&
        ((H = Pb(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : t) && (g[c.xsrfHeaderName || e.xsrfHeaderName] = H), a(c.method, w, f, h, g, c.timeout, c.withCredentials, c.responseType));
        return r
      }

      function F(a, b) {
        if (!b)return a;
        var c = [];
        Tc(b, function (a, b) {
          null === a || x(a) || (J(a) || (a = [a]), r(a, function (a) {
            T(a) && (a = ta(a) ? a.toISOString() : na(a));
            c.push(Ca(b) + "=" + Ca(a))
          }))
        });
        0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
        return a
      }

      var u = c("$http"), A = [];
      r(f, function (a) {
        A.unshift(v(a) ? p.get(a) : p.invoke(a))
      });
      r(g,
          function (a, b) {
            var c = v(a) ? p.get(a) : p.invoke(a);
            A.splice(b, 0, {
              response: function (a) {
                return c(n.when(a))
              }, responseError: function (a) {
                return c(n.reject(a))
              }
            })
          });
      q.pendingRequests = [];
      (function (a) {
        r(arguments, function (a) {
          q[a] = function (b, c) {
            return q(D(c || {}, {method: a, url: b}))
          }
        })
      })("get", "delete", "head", "jsonp");
      (function (a) {
        r(arguments, function (a) {
          q[a] = function (b, c, d) {
            return q(D(d || {}, {method: a, url: b, data: c}))
          }
        })
      })("post", "put");
      q.defaults = e;
      return q
    }]
  }

  function xe(b) {
    if (8 >= Q && (!b.match(/^(get|post|head|put|delete|options)$/i) || !W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");
    if (W.XMLHttpRequest)return new W.XMLHttpRequest;
    throw C("$httpBackend")("noxhr");
  }

  function Vd() {
    this.$get = ["$browser", "$window", "$document", function (b, a, c) {
      return ye(b, xe, b.defer, a.angular.callbacks, c[0])
    }]
  }

  function ye(b, a, c, d, e) {
    function f(a, b, c) {
      var f = e.createElement("script"), g = null;
      f.type = "text/javascript";
      f.src = a;
      f.async = !0;
      g = function (a) {
        $a(f, "load", g);
        $a(f, "error", g);
        e.body.removeChild(f);
        f = null;
        var k = -1, s = "unknown";
        a && ("load" !==
        a.type || d[b].called || (a = {type: "error"}), s = a.type, k = "error" === a.type ? 404 : 200);
        c && c(k, s)
      };
      sb(f, "load", g);
      sb(f, "error", g);
      8 >= Q && (f.onreadystatechange = function () {
        v(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({type: "load"}))
      });
      e.body.appendChild(f);
      return g
    }

    var g = -1;
    return function (e, m, h, l, n, p, q, s) {
      function F() {
        A = g;
        R && R();
        z && z.abort()
      }

      function u(a, d, e, f, g) {
        L && c.cancel(L);
        R = z = null;
        0 === d && (d = e ? 200 : "file" == ua(m).protocol ? 404 : 0);
        a(1223 === d ? 204 : d, e, f, g || "");
        b.$$completeOutstandingRequest(E)
      }

      var A;
      b.$$incOutstandingRequestCount();
      m = m || b.url();
      if ("jsonp" == K(e)) {
        var N = "_" + (d.counter++).toString(36);
        d[N] = function (a) {
          d[N].data = a;
          d[N].called = !0
        };
        var R = f(m.replace("JSON_CALLBACK", "angular.callbacks." + N), N, function (a, b) {
          u(l, a, d[N].data, "", b);
          d[N] = E
        })
      } else {
        var z = a(e);
        z.open(e, m, !0);
        r(n, function (a, b) {
          y(a) && z.setRequestHeader(b, a)
        });
        z.onreadystatechange = function () {
          if (z && 4 == z.readyState) {
            var a = null, b = null, c = "";
            A !== g && (a = z.getAllResponseHeaders(), b = "response"in z ? z.response : z.responseText);
            A === g &&
            10 > Q || (c = z.statusText);
            u(l, A || z.status, b, a, c)
          }
        };
        q && (z.withCredentials = !0);
        if (s)try {
          z.responseType = s
        } catch (ca) {
          if ("json" !== s)throw ca;
        }
        z.send(h || null)
      }
      if (0 < p)var L = c(F, p); else p && P(p.then) && p.then(F)
    }
  }

  function Sd() {
    var b = "{{", a = "}}";
    this.startSymbol = function (a) {
      return a ? (b = a, this) : b
    };
    this.endSymbol = function (b) {
      return b ? (a = b, this) : a
    };
    this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
      function f(f, h, l) {
        for (var n, p, q = 0, s = [], F = f.length, u = !1, A = []; q < F;)-1 != (n = f.indexOf(b, q)) && -1 != (p = f.indexOf(a,
            n + g)) ? (q != n && s.push(f.substring(q, n)), s.push(q = c(u = f.substring(n + g, p))), q.exp = u, q = p + k, u = !0) : (q != F && s.push(f.substring(q)), q = F);
        (F = s.length) || (s.push(""), F = 1);
        if (l && 1 < s.length)throw yc("noconcat", f);
        if (!h || u)return A.length = F, q = function (a) {
          try {
            for (var b = 0, c = F, g; b < c; b++) {
              if ("function" == typeof(g = s[b]))if (g = g(a), g = l ? e.getTrusted(l, g) : e.valueOf(g), null == g)g = ""; else switch (typeof g) {
                case "string":
                  break;
                case "number":
                  g = "" + g;
                  break;
                default:
                  g = na(g)
              }
              A[b] = g
            }
            return A.join("")
          } catch (k) {
            a = yc("interr", f, k.toString()),
                d(a)
          }
        }, q.exp = f, q.parts = s, q
      }

      var g = b.length, k = a.length;
      f.startSymbol = function () {
        return b
      };
      f.endSymbol = function () {
        return a
      };
      return f
    }]
  }

  function Td() {
    this.$get = ["$rootScope", "$window", "$q", function (b, a, c) {
      function d(d, g, k, m) {
        var h = a.setInterval, l = a.clearInterval, n = c.defer(), p = n.promise, q = 0, s = y(m) && !m;
        k = y(k) ? k : 0;
        p.then(null, null, d);
        p.$$intervalId = h(function () {
          n.notify(q++);
          0 < k && q >= k && (n.resolve(q), l(p.$$intervalId), delete e[p.$$intervalId]);
          s || b.$apply()
        }, g);
        e[p.$$intervalId] = n;
        return p
      }

      var e = {};
      d.cancel =
          function (b) {
            return b && b.$$intervalId in e ? (e[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete e[b.$$intervalId], !0) : !1
          };
      return d
    }]
  }

  function bd() {
    this.$get = function () {
      return {
        id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3}, {minInt: 1, minFrac: 2, maxFrac: 2, posPre: "\u00a4", posSuf: "", negPre: "(\u00a4", negSuf: ")", gSize: 3, lgSize: 3}], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {
          MONTH: "January February March April May June July August September October November December".split(" "),
          SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          AMPMS: ["AM", "PM"],
          medium: "MMM d, y h:mm:ss a",
          "short": "M/d/yy h:mm a",
          fullDate: "EEEE, MMMM d, y",
          longDate: "MMMM d, y",
          mediumDate: "MMM d, y",
          shortDate: "M/d/yy",
          mediumTime: "h:mm:ss a",
          shortTime: "h:mm a"
        }, pluralCat: function (b) {
          return 1 === b ? "one" : "other"
        }
      }
    }
  }

  function Qb(b) {
    b = b.split("/");
    for (var a = b.length; a--;)b[a] =
        lb(b[a]);
    return b.join("/")
  }

  function zc(b, a, c) {
    b = ua(b, c);
    a.$$protocol = b.protocol;
    a.$$host = b.hostname;
    a.$$port = U(b.port) || ze[b.protocol] || null
  }

  function Ac(b, a, c) {
    var d = "/" !== b.charAt(0);
    d && (b = "/" + b);
    b = ua(b, c);
    a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
    a.$$search = ec(b.search);
    a.$$hash = decodeURIComponent(b.hash);
    a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
  }

  function ra(b, a) {
    if (0 === a.indexOf(b))return a.substr(b.length)
  }

  function eb(b) {
    var a =
        b.indexOf("#");
    return -1 == a ? b : b.substr(0, a)
  }

  function Rb(b) {
    return b.substr(0, eb(b).lastIndexOf("/") + 1)
  }

  function Bc(b, a) {
    this.$$html5 = !0;
    a = a || "";
    var c = Rb(b);
    zc(b, this, b);
    this.$$parse = function (a) {
      var e = ra(c, a);
      if (!v(e))throw Sb("ipthprfx", a, c);
      Ac(e, this, b);
      this.$$path || (this.$$path = "/");
      this.$$compose()
    };
    this.$$compose = function () {
      var a = Cb(this.$$search), b = this.$$hash ? "#" + lb(this.$$hash) : "";
      this.$$url = Qb(this.$$path) + (a ? "?" + a : "") + b;
      this.$$absUrl = c + this.$$url.substr(1)
    };
    this.$$rewrite = function (d) {
      var e;
      if ((e = ra(b, d)) !== t)return d = e, (e = ra(a, e)) !== t ? c + (ra("/", e) || e) : b + d;
      if ((e = ra(c, d)) !== t)return c + e;
      if (c == d + "/")return c
    }
  }

  function Tb(b, a) {
    var c = Rb(b);
    zc(b, this, b);
    this.$$parse = function (d) {
      var e = ra(b, d) || ra(c, d), e = "#" == e.charAt(0) ? ra(a, e) : this.$$html5 ? e : "";
      if (!v(e))throw Sb("ihshprfx", d, a);
      Ac(e, this, b);
      d = this.$$path;
      var f = /^\/[A-Z]:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ""));
      f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose()
    };
    this.$$compose = function () {
      var c = Cb(this.$$search), e = this.$$hash ?
      "#" + lb(this.$$hash) : "";
      this.$$url = Qb(this.$$path) + (c ? "?" + c : "") + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
    };
    this.$$rewrite = function (a) {
      if (eb(b) == eb(a))return a
    }
  }

  function Ub(b, a) {
    this.$$html5 = !0;
    Tb.apply(this, arguments);
    var c = Rb(b);
    this.$$rewrite = function (d) {
      var e;
      if (b == eb(d))return d;
      if (e = ra(c, d))return b + a + e;
      if (c === d + "/")return c
    };
    this.$$compose = function () {
      var c = Cb(this.$$search), e = this.$$hash ? "#" + lb(this.$$hash) : "";
      this.$$url = Qb(this.$$path) + (c ? "?" + c : "") + e;
      this.$$absUrl = b + a + this.$$url
    }
  }

  function tb(b) {
    return function () {
      return this[b]
    }
  }

  function Cc(b, a) {
    return function (c) {
      if (x(c))return this[b];
      this[b] = a(c);
      this.$$compose();
      return this
    }
  }

  function Wd() {
    var b = "", a = !1;
    this.hashPrefix = function (a) {
      return y(a) ? (b = a, this) : b
    };
    this.html5Mode = function (b) {
      return y(b) ? (a = b, this) : a
    };
    this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, f) {
      function g(a) {
        c.$broadcast("$locationChangeSuccess", k.absUrl(), a)
      }

      var k, m, h = d.baseHref(), l = d.url(), n;
      a ? (n = l.substring(0, l.indexOf("/", l.indexOf("//") + 2)) + (h || "/"), m = e.history ? Bc : Ub) : (n =
          eb(l), m = Tb);
      k = new m(n, "#" + b);
      k.$$parse(k.$$rewrite(l));
      var p = /^\s*(javascript|mailto):/i;
      f.on("click", function (a) {
        if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
          for (var e = w(a.target); "a" !== K(e[0].nodeName);)if (e[0] === f[0] || !(e = e.parent())[0])return;
          var g = e.prop("href");
          T(g) && "[object SVGAnimatedString]" === g.toString() && (g = ua(g.animVal).href);
          if (!p.test(g)) {
            if (m === Ub) {
              var h = e.attr("href") || e.attr("xlink:href");
              if (h && 0 > h.indexOf("://"))if (g = "#" + b, "/" == h[0])g = n + g + h; else if ("#" == h[0])g = n + g + (k.path() || "/") + h;
              else {
                var l = k.path().split("/"), h = h.split("/");
                2 !== l.length || l[1] || (l.length = 1);
                for (var q = 0; q < h.length; q++)"." != h[q] && (".." == h[q] ? l.pop() : h[q].length && l.push(h[q]));
                g = n + g + l.join("/")
              }
            }
            l = k.$$rewrite(g);
            g && (!e.attr("target") && l && !a.isDefaultPrevented()) && (a.preventDefault(), l != d.url() && (k.$$parse(l), c.$apply(), W.angular["ff-684208-preventDefault"] = !0))
          }
        }
      });
      k.absUrl() != l && d.url(k.absUrl(), !0);
      d.onUrlChange(function (a) {
        k.absUrl() != a && (c.$evalAsync(function () {
          var b = k.absUrl();
          k.$$parse(a);
          c.$broadcast("$locationChangeStart",
              a, b).defaultPrevented ? (k.$$parse(b), d.url(b)) : g(b)
        }), c.$$phase || c.$digest())
      });
      var q = 0;
      c.$watch(function () {
        var a = d.url(), b = k.$$replace;
        q && a == k.absUrl() || (q++, c.$evalAsync(function () {
          c.$broadcast("$locationChangeStart", k.absUrl(), a).defaultPrevented ? k.$$parse(a) : (d.url(k.absUrl(), b), g(a))
        }));
        k.$$replace = !1;
        return q
      });
      return k
    }]
  }

  function Xd() {
    var b = !0, a = this;
    this.debugEnabled = function (a) {
      return y(a) ? (b = a, this) : b
    };
    this.$get = ["$window", function (c) {
      function d(a) {
        a instanceof Error && (a.stack ? a = a.message &&
        -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
        return a
      }

      function e(a) {
        var b = c.console || {}, e = b[a] || b.log || E;
        a = !1;
        try {
          a = !!e.apply
        } catch (m) {
        }
        return a ? function () {
          var a = [];
          r(arguments, function (b) {
            a.push(d(b))
          });
          return e.apply(b, a)
        } : function (a, b) {
          e(a, null == b ? "" : b)
        }
      }

      return {
        log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
          var c = e("debug");
          return function () {
            b && c.apply(a, arguments)
          }
        }()
      }
    }]
  }

  function ka(b,
              a) {
    if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)throw la("isecfld", a);
    return b
  }

  function va(b, a) {
    if (b) {
      if (b.constructor === b)throw la("isecfn", a);
      if (b.document && b.location && b.alert && b.setInterval)throw la("isecwindow", a);
      if (b.children && (b.nodeName || b.prop && b.attr && b.find))throw la("isecdom", a);
      if (b === Object)throw la("isecobj", a);
    }
    return b
  }

  function ub(b, a, c, d, e) {
    va(b, d);
    e = e || {};
    a = a.split(".");
    for (var f, g = 0; 1 < a.length; g++) {
      f = ka(a.shift(),
          d);
      var k = va(b[f], d);
      k || (k = {}, b[f] = k);
      b = k;
      b.then && e.unwrapPromises && (wa(d), "$$v"in b || function (a) {
        a.then(function (b) {
          a.$$v = b
        })
      }(b), b.$$v === t && (b.$$v = {}), b = b.$$v)
    }
    f = ka(a.shift(), d);
    va(b[f], d);
    return b[f] = c
  }

  function Dc(b, a, c, d, e, f, g) {
    ka(b, f);
    ka(a, f);
    ka(c, f);
    ka(d, f);
    ka(e, f);
    return g.unwrapPromises ? function (g, m) {
      var h = m && m.hasOwnProperty(b) ? m : g, l;
      if (null == h)return h;
      (h = h[b]) && h.then && (wa(f), "$$v"in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a
      })), h = h.$$v);
      if (!a)return h;
      if (null == h)return t;
      (h = h[a]) && h.then &&
      (wa(f), "$$v"in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a
      })), h = h.$$v);
      if (!c)return h;
      if (null == h)return t;
      (h = h[c]) && h.then && (wa(f), "$$v"in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a
      })), h = h.$$v);
      if (!d)return h;
      if (null == h)return t;
      (h = h[d]) && h.then && (wa(f), "$$v"in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a
      })), h = h.$$v);
      if (!e)return h;
      if (null == h)return t;
      (h = h[e]) && h.then && (wa(f), "$$v"in h || (l = h, l.$$v = t, l.then(function (a) {
        l.$$v = a
      })), h = h.$$v);
      return h
    } : function (f, g) {
      var h = g && g.hasOwnProperty(b) ? g : f;
      if (null ==
          h)return h;
      h = h[b];
      if (!a)return h;
      if (null == h)return t;
      h = h[a];
      if (!c)return h;
      if (null == h)return t;
      h = h[c];
      if (!d)return h;
      if (null == h)return t;
      h = h[d];
      return e ? null == h ? t : h = h[e] : h
    }
  }

  function Ec(b, a, c) {
    if (Vb.hasOwnProperty(b))return Vb[b];
    var d = b.split("."), e = d.length, f;
    if (a.csp)f = 6 > e ? Dc(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, f) {
      var g = 0, k;
      do k = Dc(d[g++], d[g++], d[g++], d[g++], d[g++], c, a)(b, f), f = t, b = k; while (g < e);
      return k
    }; else {
      var g = "var p;\n";
      r(d, function (b, d) {
        ka(b, c);
        g += "if(s == null) return undefined;\ns=" +
        (d ? "s" : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
      });
      var g = g + "return s;", k = new Function("s", "k", "pw", g);
      k.toString = ba(g);
      f = a.unwrapPromises ? function (a, b) {
        return k(a, b, wa)
      } : k
    }
    "hasOwnProperty" !== b && (Vb[b] = f);
    return f
  }

  function Yd() {
    var b = {}, a = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0};
    this.unwrapPromises =
        function (b) {
          return y(b) ? (a.unwrapPromises = !!b, this) : a.unwrapPromises
        };
    this.logPromiseWarnings = function (b) {
      return y(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings
    };
    this.$get = ["$filter", "$sniffer", "$log", function (c, d, e) {
      a.csp = d.csp;
      wa = function (b) {
        a.logPromiseWarnings && !Fc.hasOwnProperty(b) && (Fc[b] = !0, e.warn("[$parse] Promise found in the expression `" + b + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
      };
      return function (d) {
        var e;
        switch (typeof d) {
          case "string":
            if (b.hasOwnProperty(d))return b[d];
            e = new Wb(a);
            e = (new fb(e, c, a)).parse(d);
            "hasOwnProperty" !== d && (b[d] = e);
            return e;
          case "function":
            return d;
          default:
            return E
        }
      }
    }]
  }

  function $d() {
    this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
      return Ae(function (a) {
        b.$evalAsync(a)
      }, a)
    }]
  }

  function Ae(b, a) {
    function c(a) {
      return a
    }

    function d(a) {
      return g(a)
    }

    var e = function () {
      var g = [], h, l;
      return l = {
        resolve: function (a) {
          if (g) {
            var c = g;
            g = t;
            h = f(a);
            c.length && b(function () {
              for (var a, b = 0, d = c.length; b < d; b++)a = c[b], h.then(a[0], a[1], a[2])
            })
          }
        }, reject: function (a) {
          l.resolve(k(a))
        },
        notify: function (a) {
          if (g) {
            var c = g;
            g.length && b(function () {
              for (var b, d = 0, e = c.length; d < e; d++)b = c[d], b[2](a)
            })
          }
        }, promise: {
          then: function (b, f, k) {
            var l = e(), F = function (d) {
              try {
                l.resolve((P(b) ? b : c)(d))
              } catch (e) {
                l.reject(e), a(e)
              }
            }, u = function (b) {
              try {
                l.resolve((P(f) ? f : d)(b))
              } catch (c) {
                l.reject(c), a(c)
              }
            }, A = function (b) {
              try {
                l.notify((P(k) ? k : c)(b))
              } catch (d) {
                a(d)
              }
            };
            g ? g.push([F, u, A]) : h.then(F, u, A);
            return l.promise
          }, "catch": function (a) {
            return this.then(null, a)
          }, "finally": function (a) {
            function b(a, c) {
              var d = e();
              c ? d.resolve(a) :
                  d.reject(a);
              return d.promise
            }

            function d(e, f) {
              var g = null;
              try {
                g = (a || c)()
              } catch (k) {
                return b(k, !1)
              }
              return g && P(g.then) ? g.then(function () {
                return b(e, f)
              }, function (a) {
                return b(a, !1)
              }) : b(e, f)
            }

            return this.then(function (a) {
              return d(a, !0)
            }, function (a) {
              return d(a, !1)
            })
          }
        }
      }
    }, f = function (a) {
      return a && P(a.then) ? a : {
        then: function (c) {
          var d = e();
          b(function () {
            d.resolve(c(a))
          });
          return d.promise
        }
      }
    }, g = function (a) {
      var b = e();
      b.reject(a);
      return b.promise
    }, k = function (c) {
      return {
        then: function (f, g) {
          var k = e();
          b(function () {
            try {
              k.resolve((P(g) ?
                  g : d)(c))
            } catch (b) {
              k.reject(b), a(b)
            }
          });
          return k.promise
        }
      }
    };
    return {
      defer: e, reject: g, when: function (k, h, l, n) {
        var p = e(), q, s = function (b) {
          try {
            return (P(h) ? h : c)(b)
          } catch (d) {
            return a(d), g(d)
          }
        }, F = function (b) {
          try {
            return (P(l) ? l : d)(b)
          } catch (c) {
            return a(c), g(c)
          }
        }, u = function (b) {
          try {
            return (P(n) ? n : c)(b)
          } catch (d) {
            a(d)
          }
        };
        b(function () {
          f(k).then(function (a) {
            q || (q = !0, p.resolve(f(a).then(s, F, u)))
          }, function (a) {
            q || (q = !0, p.resolve(F(a)))
          }, function (a) {
            q || p.notify(u(a))
          })
        });
        return p.promise
      }, all: function (a) {
        var b = e(), c = 0, d = J(a) ?
            [] : {};
        r(a, function (a, e) {
          c++;
          f(a).then(function (a) {
            d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
          }, function (a) {
            d.hasOwnProperty(e) || b.reject(a)
          })
        });
        0 === c && b.resolve(d);
        return b.promise
      }
    }
  }

  function ge() {
    this.$get = ["$window", "$timeout", function (b, a) {
      var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
        var b = c(a);
        return function () {
          d(b)
        }
      } :
          function (b) {
            var c = a(b, 16.66, !1);
            return function () {
              a.cancel(c)
            }
          };
      f.supported = e;
      return f
    }]
  }

  function Zd() {
    var b = 10, a = C("$rootScope"), c = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b
    };
    this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, e, f, g) {
      function k() {
        this.$id = hb();
        this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
        this["this"] = this.$root = this;
        this.$$destroyed = !1;
        this.$$asyncQueue = [];
        this.$$postDigestQueue =
            [];
        this.$$listeners = {};
        this.$$listenerCount = {};
        this.$$isolateBindings = {}
      }

      function m(b) {
        if (p.$$phase)throw a("inprog", p.$$phase);
        p.$$phase = b
      }

      function h(a, b) {
        var c = f(a);
        Wa(c, b);
        return c
      }

      function l(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
      }

      function n() {
      }

      k.prototype = {
        constructor: k, $new: function (a) {
          a ? (a = new k, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass =
              function () {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$id = hb();
                this.$$childScopeClass = null
              }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass);
          a["this"] = a;
          a.$parent = this;
          a.$$prevSibling = this.$$childTail;
          this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
          return a
        }, $watch: function (a, b, d) {
          var e = h(a, "watch"), f = this.$$watchers, g = {
            fn: b, last: n, get: e, exp: a,
            eq: !!d
          };
          c = null;
          if (!P(b)) {
            var k = h(b || E, "listener");
            g.fn = function (a, b, c) {
              k(c)
            }
          }
          if ("string" == typeof a && e.constant) {
            var l = g.fn;
            g.fn = function (a, b, c) {
              l.call(this, a, b, c);
              Sa(f, g)
            }
          }
          f || (f = this.$$watchers = []);
          f.unshift(g);
          return function () {
            Sa(f, g);
            c = null
          }
        }, $watchCollection: function (a, b) {
          var c = this, d, e, g, k = 1 < b.length, h = 0, l = f(a), m = [], p = {}, n = !0, r = 0;
          return this.$watch(function () {
            d = l(c);
            var a, b, f;
            if (T(d))if (Pa(d))for (e !== m && (e = m, r = e.length = 0, h++), a = d.length, r !== a && (h++, e.length = r = a), b = 0; b < a; b++)f = e[b] !== e[b] && d[b] !==
            d[b], f || e[b] === d[b] || (h++, e[b] = d[b]); else {
              e !== p && (e = p = {}, r = 0, h++);
              a = 0;
              for (b in d)d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? (f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (h++, e[b] = d[b])) : (r++, e[b] = d[b], h++));
              if (r > a)for (b in h++, e)e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (r--, delete e[b])
            } else e !== d && (e = d, h++);
            return h
          }, function () {
            n ? (n = !1, b(d, d, c)) : b(d, g, c);
            if (k)if (T(d))if (Pa(d)) {
              g = Array(d.length);
              for (var a = 0; a < d.length; a++)g[a] = d[a]
            } else for (a in g = {}, d)kb.call(d, a) && (g[a] = d[a]); else g = d
          })
        }, $digest: function () {
          var d,
              f, k, h, l = this.$$asyncQueue, r = this.$$postDigestQueue, R, z, t = b, L, O = [], w, B, I;
          m("$digest");
          g.$$checkUrlChange();
          c = null;
          do {
            z = !1;
            for (L = this; l.length;) {
              try {
                I = l.shift(), I.scope.$eval(I.expression)
              } catch (H) {
                p.$$phase = null, e(H)
              }
              c = null
            }
            a:do {
              if (h = L.$$watchers)for (R = h.length; R--;)try {
                if (d = h[R])if ((f = d.get(L)) !== (k = d.last) && !(d.eq ? Aa(f, k) : "number" === typeof f && "number" === typeof k && isNaN(f) && isNaN(k)))z = !0, c = d, d.last = d.eq ? Ha(f, null) : f, d.fn(f, k === n ? f : k, L), 5 > t && (w = 4 - t, O[w] || (O[w] = []), B = P(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) :
                    d.exp, B += "; newVal: " + na(f) + "; oldVal: " + na(k), O[w].push(B)); else if (d === c) {
                  z = !1;
                  break a
                }
              } catch (y) {
                p.$$phase = null, e(y)
              }
              if (!(h = L.$$childHead || L !== this && L.$$nextSibling))for (; L !== this && !(h = L.$$nextSibling);)L = L.$parent
            } while (L = h);
            if ((z || l.length) && !t--)throw p.$$phase = null, a("infdig", b, na(O));
          } while (z || l.length);
          for (p.$$phase = null; r.length;)try {
            r.shift()()
          } catch (v) {
            e(v)
          }
        }, $destroy: function () {
          if (!this.$$destroyed) {
            var a = this.$parent;
            this.$broadcast("$destroy");
            this.$$destroyed = !0;
            this !== p && (r(this.$$listenerCount,
                Bb(null, l, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = E, this.$on =
                this.$watch = function () {
                  return E
                })
          }
        }, $eval: function (a, b) {
          return f(a)(this, b)
        }, $evalAsync: function (a) {
          p.$$phase || p.$$asyncQueue.length || g.defer(function () {
            p.$$asyncQueue.length && p.$digest()
          });
          this.$$asyncQueue.push({scope: this, expression: a})
        }, $$postDigest: function (a) {
          this.$$postDigestQueue.push(a)
        }, $apply: function (a) {
          try {
            return m("$apply"), this.$eval(a)
          } catch (b) {
            e(b)
          } finally {
            p.$$phase = null;
            try {
              p.$digest()
            } catch (c) {
              throw e(c), c;
            }
          }
        }, $on: function (a, b) {
          var c = this.$$listeners[a];
          c || (this.$$listeners[a] =
              c = []);
          c.push(b);
          var d = this;
          do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
          var e = this;
          return function () {
            c[Ra(c, b)] = null;
            l(e, 1, a)
          }
        }, $emit: function (a, b) {
          var c = [], d, f = this, g = !1, k = {
            name: a, targetScope: f, stopPropagation: function () {
              g = !0
            }, preventDefault: function () {
              k.defaultPrevented = !0
            }, defaultPrevented: !1
          }, h = [k].concat(Ba.call(arguments, 1)), l, m;
          do {
            d = f.$$listeners[a] || c;
            k.currentScope = f;
            l = 0;
            for (m = d.length; l < m; l++)if (d[l])try {
              d[l].apply(null, h)
            } catch (p) {
              e(p)
            } else d.splice(l,
                1), l--, m--;
            if (g)break;
            f = f.$parent
          } while (f);
          return k
        }, $broadcast: function (a, b) {
          for (var c = this, d = this, f = {
            name: a, targetScope: this, preventDefault: function () {
              f.defaultPrevented = !0
            }, defaultPrevented: !1
          }, g = [f].concat(Ba.call(arguments, 1)), k, h; c = d;) {
            f.currentScope = c;
            d = c.$$listeners[a] || [];
            k = 0;
            for (h = d.length; k < h; k++)if (d[k])try {
              d[k].apply(null, g)
            } catch (l) {
              e(l)
            } else d.splice(k, 1), k--, h--;
            if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
          }
          return f
        }
      };
      var p = new k;
      return p
    }]
  }

  function cd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (a) {
      return y(a) ? (b = a, this) : b
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a = b, this) : a
    };
    this.$get = function () {
      return function (c, d) {
        var e = d ? a : b, f;
        if (!Q || 8 <= Q)if (f = ua(c).href, "" !== f && !f.match(e))return "unsafe:" + f;
        return c
      }
    }
  }

  function Be(b) {
    if ("self" === b)return b;
    if (v(b)) {
      if (-1 < b.indexOf("***"))throw xa("iwcard", b);
      b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
          "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
      return RegExp("^" + b + "$")
    }
    if (jb(b))return RegExp("^" + b.source + "$");
    throw xa("imatcher");
  }

  function Gc(b) {
    var a = [];
    y(b) && r(b, function (b) {
      a.push(Be(b))
    });
    return a
  }

  function be() {
    this.SCE_CONTEXTS = ga;
    var b = ["self"], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = Gc(a));
      return b
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = Gc(b));
      return a
    };
    this.$get = ["$injector", function (c) {
      function d(a) {
        var b =
            function (a) {
              this.$$unwrapTrustedValue = function () {
                return a
              }
            };
        a && (b.prototype = new a);
        b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue()
        };
        b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString()
        };
        return b
      }

      var e = function (a) {
        throw xa("unsafe");
      };
      c.has("$sanitize") && (e = c.get("$sanitize"));
      var f = d(), g = {};
      g[ga.HTML] = d(f);
      g[ga.CSS] = d(f);
      g[ga.URL] = d(f);
      g[ga.JS] = d(f);
      g[ga.RESOURCE_URL] = d(g[ga.URL]);
      return {
        trustAs: function (a, b) {
          var c = g.hasOwnProperty(a) ? g[a] : null;
          if (!c)throw xa("icontext",
              a, b);
          if (null === b || b === t || "" === b)return b;
          if ("string" !== typeof b)throw xa("itype", a);
          return new c(b)
        }, getTrusted: function (c, d) {
          if (null === d || d === t || "" === d)return d;
          var f = g.hasOwnProperty(c) ? g[c] : null;
          if (f && d instanceof f)return d.$$unwrapTrustedValue();
          if (c === ga.RESOURCE_URL) {
            var f = ua(d.toString()), l, n, p = !1;
            l = 0;
            for (n = b.length; l < n; l++)if ("self" === b[l] ? Pb(f) : b[l].exec(f.href)) {
              p = !0;
              break
            }
            if (p)for (l = 0, n = a.length; l < n; l++)if ("self" === a[l] ? Pb(f) : a[l].exec(f.href)) {
              p = !1;
              break
            }
            if (p)return d;
            throw xa("insecurl",
                d.toString());
          }
          if (c === ga.HTML)return e(d);
          throw xa("unsafe");
        }, valueOf: function (a) {
          return a instanceof f ? a.$$unwrapTrustedValue() : a
        }
      }
    }]
  }

  function ae() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b
    };
    this.$get = ["$parse", "$sniffer", "$sceDelegate", function (a, c, d) {
      if (b && c.msie && 8 > c.msieDocumentMode)throw xa("iequirks");
      var e = ha(ga);
      e.isEnabled = function () {
        return b
      };
      e.trustAs = d.trustAs;
      e.getTrusted = d.getTrusted;
      e.valueOf = d.valueOf;
      b || (e.trustAs = e.getTrusted = function (a, b) {
        return b
      },
          e.valueOf = Qa);
      e.parseAs = function (b, c) {
        var d = a(c);
        return d.literal && d.constant ? d : function (a, c) {
          return e.getTrusted(b, d(a, c))
        }
      };
      var f = e.parseAs, g = e.getTrusted, k = e.trustAs;
      r(ga, function (a, b) {
        var c = K(b);
        e[Za("parse_as_" + c)] = function (b) {
          return f(a, b)
        };
        e[Za("get_trusted_" + c)] = function (b) {
          return g(a, b)
        };
        e[Za("trust_as_" + c)] = function (b) {
          return k(a, b)
        }
      });
      return e
    }]
  }

  function ce() {
    this.$get = ["$window", "$document", function (b, a) {
      var c = {}, d = U((/android (\d+)/.exec(K((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator ||
      {}).userAgent), f = a[0] || {}, g = f.documentMode, k, m = /^(Moz|webkit|O|ms)(?=[A-Z])/, h = f.body && f.body.style, l = !1, n = !1;
      if (h) {
        for (var p in h)if (l = m.exec(p)) {
          k = l[0];
          k = k.substr(0, 1).toUpperCase() + k.substr(1);
          break
        }
        k || (k = "WebkitOpacity"in h && "webkit");
        l = !!("transition"in h || k + "Transition"in h);
        n = !!("animation"in h || k + "Animation"in h);
        !d || l && n || (l = v(f.body.style.webkitTransition), n = v(f.body.style.webkitAnimation))
      }
      return {
        history: !(!b.history || !b.history.pushState || 4 > d || e), hashchange: "onhashchange"in b && (!g || 7 <
        g), hasEvent: function (a) {
          if ("input" == a && 9 == Q)return !1;
          if (x(c[a])) {
            var b = f.createElement("div");
            c[a] = "on" + a in b
          }
          return c[a]
        }, csp: Xa(), vendorPrefix: k, transitions: l, animations: n, android: d, msie: Q, msieDocumentMode: g
      }
    }]
  }

  function ee() {
    this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (b, a, c, d) {
      function e(e, k, m) {
        var h = c.defer(), l = h.promise, n = y(m) && !m;
        k = a.defer(function () {
          try {
            h.resolve(e())
          } catch (a) {
            h.reject(a), d(a)
          } finally {
            delete f[l.$$timeoutId]
          }
          n || b.$apply()
        }, k);
        l.$$timeoutId = k;
        f[k] = h;
        return l
      }

      var f = {};
      e.cancel = function (b) {
        return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
      };
      return e
    }]
  }

  function ua(b, a) {
    var c = b;
    Q && (Y.setAttribute("href", c), c = Y.href);
    Y.setAttribute("href", c);
    return {
      href: Y.href, protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "", host: Y.host, search: Y.search ? Y.search.replace(/^\?/, "") : "", hash: Y.hash ? Y.hash.replace(/^#/, "") : "", hostname: Y.hostname, port: Y.port, pathname: "/" === Y.pathname.charAt(0) ? Y.pathname :
      "/" + Y.pathname
    }
  }

  function Pb(b) {
    b = v(b) ? ua(b) : b;
    return b.protocol === Hc.protocol && b.host === Hc.host
  }

  function fe() {
    this.$get = ba(W)
  }

  function mc(b) {
    function a(d, e) {
      if (T(d)) {
        var f = {};
        r(d, function (b, c) {
          f[c] = a(c, b)
        });
        return f
      }
      return b.factory(d + c, e)
    }

    var c = "Filter";
    this.register = a;
    this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + c)
      }
    }];
    a("currency", Ic);
    a("date", Jc);
    a("filter", Ce);
    a("json", De);
    a("limitTo", Ee);
    a("lowercase", Fe);
    a("number", Kc);
    a("orderBy", Lc);
    a("uppercase", Ge)
  }

  function Ce() {
    return function (b,
                     a, c) {
      if (!J(b))return b;
      var d = typeof c, e = [];
      e.check = function (a) {
        for (var b = 0; b < e.length; b++)if (!e[b](a))return !1;
        return !0
      };
      "function" !== d && (c = "boolean" === d && c ? function (a, b) {
        return Va.equals(a, b)
      } : function (a, b) {
        if (a && b && "object" === typeof a && "object" === typeof b) {
          for (var d in a)if ("$" !== d.charAt(0) && kb.call(a, d) && c(a[d], b[d]))return !0;
          return !1
        }
        b = ("" + b).toLowerCase();
        return -1 < ("" + a).toLowerCase().indexOf(b)
      });
      var f = function (a, b) {
        if ("string" == typeof b && "!" === b.charAt(0))return !f(a, b.substr(1));
        switch (typeof a) {
          case "boolean":
          case "number":
          case "string":
            return c(a,
                b);
          case "object":
            switch (typeof b) {
              case "object":
                return c(a, b);
              default:
                for (var d in a)if ("$" !== d.charAt(0) && f(a[d], b))return !0
            }
            return !1;
          case "array":
            for (d = 0; d < a.length; d++)if (f(a[d], b))return !0;
            return !1;
          default:
            return !1
        }
      };
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
          a = {$: a};
        case "object":
          for (var g in a)(function (b) {
            "undefined" !== typeof a[b] && e.push(function (c) {
              return f("$" == b ? c : c && c[b], a[b])
            })
          })(g);
          break;
        case "function":
          e.push(a);
          break;
        default:
          return b
      }
      d = [];
      for (g = 0; g < b.length; g++) {
        var k =
            b[g];
        e.check(k) && d.push(k)
      }
      return d
    }
  }

  function Ic(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      x(d) && (d = a.CURRENCY_SYM);
      return Mc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
    }
  }

  function Kc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return Mc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
    }
  }

  function Mc(b, a, c, d, e) {
    if (null == b || !isFinite(b) || T(b))return "";
    var f = 0 > b;
    b = Math.abs(b);
    var g = b + "", k = "", m = [], h = !1;
    if (-1 !== g.indexOf("e")) {
      var l = g.match(/([\d\.]+)e(-?)(\d+)/);
      l && "-" == l[2] &&
      l[3] > e + 1 ? (g = "0", b = 0) : (k = g, h = !0)
    }
    if (h)0 < e && (-1 < b && 1 > b) && (k = b.toFixed(e)); else {
      g = (g.split(Nc)[1] || "").length;
      x(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
      b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
      0 === b && (f = !1);
      b = ("" + b).split(Nc);
      g = b[0];
      b = b[1] || "";
      var l = 0, n = a.lgSize, p = a.gSize;
      if (g.length >= n + p)for (l = g.length - n, h = 0; h < l; h++)0 === (l - h) % p && 0 !== h && (k += c), k += g.charAt(h);
      for (h = l; h < g.length; h++)0 === (g.length - h) % n && 0 !== h && (k += c), k += g.charAt(h);
      for (; b.length < e;)b += "0";
      e && "0" !== e && (k += d + b.substr(0,
          e))
    }
    m.push(f ? a.negPre : a.posPre);
    m.push(k);
    m.push(f ? a.negSuf : a.posSuf);
    return m.join("")
  }

  function Xb(b, a, c) {
    var d = "";
    0 > b && (d = "-", b = -b);
    for (b = "" + b; b.length < a;)b = "0" + b;
    c && (b = b.substr(b.length - a));
    return d + b
  }

  function $(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e["get" + b]();
      if (0 < c || e > -c)e += c;
      0 === e && -12 == c && (e = 12);
      return Xb(e, a, d)
    }
  }

  function vb(b, a) {
    return function (c, d) {
      var e = c["get" + b](), f = Ia(a ? "SHORT" + b : b);
      return d[f][e]
    }
  }

  function Jc(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var f = 0, g = 0, k = b[8] ?
            a.setUTCFullYear : a.setFullYear, m = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = U(b[9] + b[10]), g = U(b[9] + b[11]));
        k.call(a, U(b[1]), U(b[2]) - 1, U(b[3]));
        f = U(b[4] || 0) - f;
        g = U(b[5] || 0) - g;
        k = U(b[6] || 0);
        b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
        m.call(a, f, g, k, b)
      }
      return a
    }

    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e) {
      var f = "", g = [], k, m;
      e = e || "mediumDate";
      e = b.DATETIME_FORMATS[e] || e;
      v(c) && (c = He.test(c) ? U(c) : a(c));
      ib(c) && (c = new Date(c));
      if (!ta(c))return c;
      for (; e;)(m = Ie.exec(e)) ? (g = g.concat(Ba.call(m, 1)), e = g.pop()) : (g.push(e), e = null);
      r(g, function (a) {
        k = Je[a];
        f += k ? k(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
      });
      return f
    }
  }

  function De() {
    return function (b) {
      return na(b, !0)
    }
  }

  function Ee() {
    return function (b, a) {
      if (!J(b) && !v(b))return b;
      a = Infinity === Math.abs(Number(a)) ? Number(a) : U(a);
      if (v(b))return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
      var c = [], d, e;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      0 < a ? (d = 0, e = a) : (d =
          b.length + a, e = b.length);
      for (; d < e; d++)c.push(b[d]);
      return c
    }
  }

  function Lc(b) {
    return function (a, c, d) {
      function e(a, b) {
        return Ua(b) ? function (b, c) {
          return a(c, b)
        } : a
      }

      function f(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? (ta(a) && ta(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
      }

      if (!Pa(a) || !c)return a;
      c = J(c) ? c : [c];
      c = Vc(c, function (a) {
        var c = !1, d = a || Qa;
        if (v(a)) {
          if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
          d = b(a);
          if (d.constant) {
            var g =
                d();
            return e(function (a, b) {
              return f(a[g], b[g])
            }, c)
          }
        }
        return e(function (a, b) {
          return f(d(a), d(b))
        }, c)
      });
      for (var g = [], k = 0; k < a.length; k++)g.push(a[k]);
      return g.sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)return e
        }
        return 0
      }, d))
    }
  }

  function ya(b) {
    P(b) && (b = {link: b});
    b.restrict = b.restrict || "AC";
    return ba(b)
  }

  function Oc(b, a, c, d) {
    function e(a, c) {
      c = c ? "-" + mb(c, "-") : "";
      d.setClass(b, (a ? wb : xb) + c, (a ? xb : wb) + c)
    }

    var f = this, g = b.parent().controller("form") || yb, k = 0, m = f.$error = {}, h = [];
    f.$name =
        a.name || a.ngForm;
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    g.$addControl(f);
    b.addClass(Oa);
    e(!0);
    f.$addControl = function (a) {
      Da(a.$name, "input");
      h.push(a);
      a.$name && (f[a.$name] = a)
    };
    f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];
      r(m, function (b, c) {
        f.$setValidity(c, !0, a)
      });
      Sa(h, a)
    };
    f.$setValidity = function (a, b, c) {
      var d = m[a];
      if (b)d && (Sa(d, c), d.length || (k--, k || (e(b), f.$valid = !0, f.$invalid = !1), m[a] = !1, e(!0, a), g.$setValidity(a, !0, f))); else {
        k || e(b);
        if (d) {
          if (-1 != Ra(d, c))return
        } else m[a] =
            d = [], k++, e(!1, a), g.$setValidity(a, !1, f);
        d.push(c);
        f.$valid = !1;
        f.$invalid = !0
      }
    };
    f.$setDirty = function () {
      d.removeClass(b, Oa);
      d.addClass(b, zb);
      f.$dirty = !0;
      f.$pristine = !1;
      g.$setDirty()
    };
    f.$setPristine = function () {
      d.removeClass(b, zb);
      d.addClass(b, Oa);
      f.$dirty = !1;
      f.$pristine = !0;
      r(h, function (a) {
        a.$setPristine()
      })
    }
  }

  function sa(b, a, c, d) {
    b.$setValidity(a, c);
    return c ? d : t
  }

  function Pc(b, a) {
    var c, d;
    if (a)for (c = 0; c < a.length; ++c)if (d = a[c], b[d])return !0;
    return !1
  }

  function Ke(b, a, c, d, e) {
    T(e) && (b.$$hasNativeValidators = !0,
        b.$parsers.push(function (f) {
          if (b.$error[a] || Pc(e, d) || !Pc(e, c))return f;
          b.$setValidity(a, !1)
        }))
  }

  function Ab(b, a, c, d, e, f) {
    var g = a.prop(Le), k = a[0].placeholder, m = {}, h = K(a[0].type);
    d.$$validityState = g;
    if (!e.android) {
      var l = !1;
      a.on("compositionstart", function (a) {
        l = !0
      });
      a.on("compositionend", function () {
        l = !1;
        n()
      })
    }
    var n = function (e) {
      if (!l) {
        var f = a.val();
        if (Q && "input" === (e || m).type && a[0].placeholder !== k)k = a[0].placeholder; else if ("password" !== h && Ua(c.ngTrim || "T") && (f = aa(f)), e = g && d.$$hasNativeValidators, d.$viewValue !==
            f || "" === f && e)b.$root.$$phase ? d.$setViewValue(f) : b.$apply(function () {
          d.$setViewValue(f)
        })
      }
    };
    if (e.hasEvent("input"))a.on("input", n); else {
      var p, q = function () {
        p || (p = f.defer(function () {
          n();
          p = null
        }))
      };
      a.on("keydown", function (a) {
        a = a.keyCode;
        91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || q()
      });
      if (e.hasEvent("paste"))a.on("paste cut", q)
    }
    a.on("change", n);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
    };
    var s = c.ngPattern;
    s && ((e = s.match(/^\/(.*)\/([gim]*)$/)) ? (s = RegExp(e[1], e[2]), e = function (a) {
      return sa(d,
          "pattern", d.$isEmpty(a) || s.test(a), a)
    }) : e = function (c) {
      var e = b.$eval(s);
      if (!e || !e.test)throw C("ngPattern")("noregexp", s, e, ia(a));
      return sa(d, "pattern", d.$isEmpty(c) || e.test(c), c)
    }, d.$formatters.push(e), d.$parsers.push(e));
    if (c.ngMinlength) {
      var r = U(c.ngMinlength);
      e = function (a) {
        return sa(d, "minlength", d.$isEmpty(a) || a.length >= r, a)
      };
      d.$parsers.push(e);
      d.$formatters.push(e)
    }
    if (c.ngMaxlength) {
      var u = U(c.ngMaxlength);
      e = function (a) {
        return sa(d, "maxlength", d.$isEmpty(a) || a.length <= u, a)
      };
      d.$parsers.push(e);
      d.$formatters.push(e)
    }
  }

  function Yb(b, a) {
    b = "ngClass" + b;
    return ["$animate", function (c) {
      function d(a, b) {
        var c = [], d = 0;
        a:for (; d < a.length; d++) {
          for (var e = a[d], l = 0; l < b.length; l++)if (e == b[l])continue a;
          c.push(e)
        }
        return c
      }

      function e(a) {
        if (!J(a)) {
          if (v(a))return a.split(" ");
          if (T(a)) {
            var b = [];
            r(a, function (a, c) {
              a && (b = b.concat(c.split(" ")))
            });
            return b
          }
        }
        return a
      }

      return {
        restrict: "AC", link: function (f, g, k) {
          function m(a, b) {
            var c = g.data("$classCounts") || {}, d = [];
            r(a, function (a) {
              if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 <
              b) && d.push(a)
            });
            g.data("$classCounts", c);
            return d.join(" ")
          }

          function h(b) {
            if (!0 === a || f.$index % 2 === a) {
              var h = e(b || []);
              if (!l) {
                var q = m(h, 1);
                k.$addClass(q)
              } else if (!Aa(b, l)) {
                var s = e(l), q = d(h, s), h = d(s, h), h = m(h, -1), q = m(q, 1);
                0 === q.length ? c.removeClass(g, h) : 0 === h.length ? c.addClass(g, q) : c.setClass(g, q, h)
              }
            }
            l = ha(b)
          }

          var l;
          f.$watch(k[b], h, !0);
          k.$observe("class", function (a) {
            h(f.$eval(k[b]))
          });
          "ngClass" !== b && f.$watch("$index", function (c, d) {
            var g = c & 1;
            if (g !== (d & 1)) {
              var h = e(f.$eval(k[b]));
              g === a ? (g = m(h, 1), k.$addClass(g)) :
                  (g = m(h, -1), k.$removeClass(g))
            }
          })
        }
      }
    }]
  }

  var Le = "validity", K = function (b) {
    return v(b) ? b.toLowerCase() : b
  }, kb = Object.prototype.hasOwnProperty, Ia = function (b) {
    return v(b) ? b.toUpperCase() : b
  }, Q, w, Ea, Ba = [].slice, Me = [].push, za = Object.prototype.toString, Ta = C("ng"), Va = W.angular || (W.angular = {}), Ya, Ma, ma = ["0", "0", "0"];
  Q = U((/msie (\d+)/.exec(K(navigator.userAgent)) || [])[1]);
  isNaN(Q) && (Q = U((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent)) || [])[1]));
  E.$inject = [];
  Qa.$inject = [];
  var J = function () {
    return P(Array.isArray) ?
        Array.isArray : function (b) {
      return "[object Array]" === za.call(b)
    }
  }(), aa = function () {
    return String.prototype.trim ? function (b) {
      return v(b) ? b.trim() : b
    } : function (b) {
      return v(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : b
    }
  }();
  Ma = 9 > Q ? function (b) {
    b = b.nodeName ? b : b[0];
    return b.scopeName && "HTML" != b.scopeName ? Ia(b.scopeName + ":" + b.nodeName) : b.nodeName
  } : function (b) {
    return b.nodeName ? b.nodeName : b[0].nodeName
  };
  var Xa = function () {
    if (y(Xa.isActive_))return Xa.isActive_;
    var b = !(!X.querySelector("[ng-csp]") && !X.querySelector("[data-ng-csp]"));
    if (!b)try {
      new Function("")
    } catch (a) {
      b = !0
    }
    return Xa.isActive_ = b
  }, Yc = /[A-Z]/g, ad = {full: "1.2.26", major: 1, minor: 2, dot: 26, codeName: "captivating-disinterest"};
  S.expando = "ng339";
  var ab = S.cache = {}, ne = 1, sb = W.document.addEventListener ? function (b, a, c) {
    b.addEventListener(a, c, !1)
  } : function (b, a, c) {
    b.attachEvent("on" + a, c)
  }, $a = W.document.removeEventListener ? function (b, a, c) {
    b.removeEventListener(a, c, !1)
  } : function (b, a, c) {
    b.detachEvent("on" + a, c)
  };
  S._data = function (b) {
    return this.cache[b[this.expando]] || {}
  };
  var ie = /([\:\-\_]+(.))/g,
      je = /^moz([A-Z])/, Hb = C("jqLite"), ke = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ib = /<|&#?\w+;/, le = /<([\w:]+)/, me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ea = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
  ea.optgroup = ea.option;
  ea.tbody = ea.tfoot = ea.colgroup = ea.caption = ea.thead;
  ea.th =
      ea.td;
  var La = S.prototype = {
    ready: function (b) {
      function a() {
        c || (c = !0, b())
      }

      var c = !1;
      "complete" === X.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), S(W).on("load", a))
    }, toString: function () {
      var b = [];
      r(this, function (a) {
        b.push("" + a)
      });
      return "[" + b.join(", ") + "]"
    }, eq: function (b) {
      return 0 <= b ? w(this[b]) : w(this[this.length + b])
    }, length: 0, push: Me, sort: [].sort, splice: [].splice
  }, qb = {};
  r("multiple selected checked disabled readOnly required open".split(" "), function (b) {
    qb[K(b)] = b
  });
  var rc = {};
  r("input select option textarea button form details".split(" "),
      function (b) {
        rc[Ia(b)] = !0
      });
  r({data: Mb, removeData: Lb}, function (b, a) {
    S[a] = b
  });
  r({
    data: Mb, inheritedData: pb, scope: function (b) {
      return w.data(b, "$scope") || pb(b.parentNode || b, ["$isolateScope", "$scope"])
    }, isolateScope: function (b) {
      return w.data(b, "$isolateScope") || w.data(b, "$isolateScopeNoTemplate")
    }, controller: oc, injector: function (b) {
      return pb(b, "$injector")
    }, removeAttr: function (b, a) {
      b.removeAttribute(a)
    }, hasClass: Nb, css: function (b, a, c) {
      a = Za(a);
      if (y(c))b.style[a] = c; else {
        var d;
        8 >= Q && (d = b.currentStyle && b.currentStyle[a],
        "" === d && (d = "auto"));
        d = d || b.style[a];
        8 >= Q && (d = "" === d ? t : d);
        return d
      }
    }, attr: function (b, a, c) {
      var d = K(a);
      if (qb[d])if (y(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || E).specified ? d : t; else if (y(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), null === b ? t : b
    }, prop: function (b, a, c) {
      if (y(c))b[a] = c; else return b[a]
    }, text: function () {
      function b(b, d) {
        var e = a[b.nodeType];
        if (x(d))return e ? b[e] : "";
        b[e] = d
      }

      var a = [];
      9 > Q ? (a[1] =
          "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
      b.$dv = "";
      return b
    }(), val: function (b, a) {
      if (x(a)) {
        if ("SELECT" === Ma(b) && b.multiple) {
          var c = [];
          r(b.options, function (a) {
            a.selected && c.push(a.value || a.text)
          });
          return 0 === c.length ? null : c
        }
        return b.value
      }
      b.value = a
    }, html: function (b, a) {
      if (x(a))return b.innerHTML;
      for (var c = 0, d = b.childNodes; c < d.length; c++)Ja(d[c]);
      b.innerHTML = a
    }, empty: pc
  }, function (b, a) {
    S.prototype[a] = function (a, d) {
      var e, f, g = this.length;
      if (b !== pc && (2 == b.length && b !== Nb && b !== oc ? a : d) === t) {
        if (T(a)) {
          for (e =
                   0; e < g; e++)if (b === Mb)b(this[e], a); else for (f in a)b(this[e], f, a[f]);
          return this
        }
        e = b.$dv;
        g = e === t ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var k = b(this[f], a, d);
          e = e ? e + k : k
        }
        return e
      }
      for (e = 0; e < g; e++)b(this[e], a, d);
      return this
    }
  });
  r({
    removeData: Lb, dealoc: Ja, on: function a(c, d, e, f) {
      if (y(f))throw Hb("onargs");
      var g = oa(c, "events"), k = oa(c, "handle");
      g || oa(c, "events", g = {});
      k || oa(c, "handle", k = oe(c, g));
      r(d.split(" "), function (d) {
        var f = g[d];
        if (!f) {
          if ("mouseenter" == d || "mouseleave" == d) {
            var l = X.body.contains || X.body.compareDocumentPosition ?
                function (a, c) {
                  var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                  return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
                } : function (a, c) {
              if (c)for (; c = c.parentNode;)if (c === a)return !0;
              return !1
            };
            g[d] = [];
            a(c, {mouseleave: "mouseout", mouseenter: "mouseover"}[d], function (a) {
              var c = a.relatedTarget;
              c && (c === this || l(this, c)) || k(a, d)
            })
          } else sb(c, d, k), g[d] = [];
          f = g[d]
        }
        f.push(e)
      })
    }, off: nc, one: function (a, c, d) {
      a = w(a);
      a.on(c, function f() {
        a.off(c,
            d);
        a.off(c, f)
      });
      a.on(c, d)
    }, replaceWith: function (a, c) {
      var d, e = a.parentNode;
      Ja(a);
      r(new S(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c
      })
    }, children: function (a) {
      var c = [];
      r(a.childNodes, function (a) {
        1 === a.nodeType && c.push(a)
      });
      return c
    }, contents: function (a) {
      return a.contentDocument || a.childNodes || []
    }, append: function (a, c) {
      r(new S(c), function (c) {
        1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
      })
    }, prepend: function (a, c) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        r(new S(c), function (c) {
          a.insertBefore(c,
              d)
        })
      }
    }, wrap: function (a, c) {
      c = w(c)[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a)
    }, remove: function (a) {
      Ja(a);
      var c = a.parentNode;
      c && c.removeChild(a)
    }, after: function (a, c) {
      var d = a, e = a.parentNode;
      r(new S(c), function (a) {
        e.insertBefore(a, d.nextSibling);
        d = a
      })
    }, addClass: ob, removeClass: nb, toggleClass: function (a, c, d) {
      c && r(c.split(" "), function (c) {
        var f = d;
        x(f) && (f = !Nb(a, c));
        (f ? ob : nb)(a, c)
      })
    }, parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null
    }, next: function (a) {
      if (a.nextElementSibling)return a.nextElementSibling;
      for (a = a.nextSibling; null != a && 1 !== a.nodeType;)a = a.nextSibling;
      return a
    }, find: function (a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : []
    }, clone: Kb, triggerHandler: function (a, c, d) {
      var e, f;
      e = c.type || c;
      var g = (oa(a, "events") || {})[e];
      g && (e = {
        preventDefault: function () {
          this.defaultPrevented = !0
        }, isDefaultPrevented: function () {
          return !0 === this.defaultPrevented
        }, stopPropagation: E, type: e, target: a
      }, c.type && (e = D(e, c)), c = ha(g), f = d ? [e].concat(d) : [e], r(c, function (c) {
        c.apply(a, f)
      }))
    }
  }, function (a, c) {
    S.prototype[c] =
        function (c, e, f) {
          for (var g, k = 0; k < this.length; k++)x(g) ? (g = a(this[k], c, e, f), y(g) && (g = w(g))) : Jb(g, a(this[k], c, e, f));
          return y(g) ? g : this
        };
    S.prototype.bind = S.prototype.on;
    S.prototype.unbind = S.prototype.off
  });
  bb.prototype = {
    put: function (a, c) {
      this[Ka(a, this.nextUid)] = c
    }, get: function (a) {
      return this[Ka(a, this.nextUid)]
    }, remove: function (a) {
      var c = this[a = Ka(a, this.nextUid)];
      delete this[a];
      return c
    }
  };
  var qe = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, re = /,/, se = /^\s*(_?)(\S+?)\1\s*$/, pe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      cb = C("$injector"), Ne = C("$animate"), Md = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
          var e = c + "-animation";
          if (c && "." != c.charAt(0))throw Ne("notcsel", c);
          this.$$selectors[c.substr(1)] = e;
          a.factory(e, d)
        };
        this.classNameFilter = function (a) {
          1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
          return this.$$classNameFilter
        };
        this.$get = ["$timeout", "$$asyncCallback", function (a, d) {
          return {
            enter: function (a, c, g, k) {
              g ? g.after(a) : (c && c[0] || (c = g.parent()), c.append(a));
              k &&
              d(k)
            }, leave: function (a, c) {
              a.remove();
              c && d(c)
            }, move: function (a, c, d, k) {
              this.enter(a, c, d, k)
            }, addClass: function (a, c, g) {
              c = v(c) ? c : J(c) ? c.join(" ") : "";
              r(a, function (a) {
                ob(a, c)
              });
              g && d(g)
            }, removeClass: function (a, c, g) {
              c = v(c) ? c : J(c) ? c.join(" ") : "";
              r(a, function (a) {
                nb(a, c)
              });
              g && d(g)
            }, setClass: function (a, c, g, k) {
              r(a, function (a) {
                ob(a, c);
                nb(a, g)
              });
              k && d(k)
            }, enabled: E
          }
        }]
      }], ja = C("$compile");
  ic.$inject = ["$provide", "$$sanitizeUriProvider"];
  var we = /^(x[\:\-_]|data[\:\-_])/i, yc = C("$interpolate"), Oe = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      ze = {http: 80, https: 443, ftp: 21}, Sb = C("$location");
  Ub.prototype = Tb.prototype = Bc.prototype = {
    $$html5: !1, $$replace: !1, absUrl: tb("$$absUrl"), url: function (a) {
      if (x(a))return this.$$url;
      a = Oe.exec(a);
      a[1] && this.path(decodeURIComponent(a[1]));
      (a[2] || a[1]) && this.search(a[3] || "");
      this.hash(a[5] || "");
      return this
    }, protocol: tb("$$protocol"), host: tb("$$host"), port: tb("$$port"), path: Cc("$$path", function (a) {
      a = a ? a.toString() : "";
      return "/" == a.charAt(0) ? a : "/" + a
    }), search: function (a, c) {
      switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (v(a) || ib(a))a = a.toString(), this.$$search = ec(a); else if (T(a))r(a, function (c, e) {
            null == c && delete a[e]
          }), this.$$search = a; else throw Sb("isrcharg");
          break;
        default:
          x(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
      }
      this.$$compose();
      return this
    }, hash: Cc("$$hash", function (a) {
      return a ? a.toString() : ""
    }), replace: function () {
      this.$$replace = !0;
      return this
    }
  };
  var la = C("$parse"), Fc = {}, wa, Pe = Function.prototype.call, Qe = Function.prototype.apply, Qc = Function.prototype.bind, gb = {
    "null": function () {
      return null
    },
    "true": function () {
      return !0
    }, "false": function () {
      return !1
    }, undefined: E, "+": function (a, c, d, e) {
      d = d(a, c);
      e = e(a, c);
      return y(d) ? y(e) ? d + e : d : y(e) ? e : t
    }, "-": function (a, c, d, e) {
      d = d(a, c);
      e = e(a, c);
      return (y(d) ? d : 0) - (y(e) ? e : 0)
    }, "*": function (a, c, d, e) {
      return d(a, c) * e(a, c)
    }, "/": function (a, c, d, e) {
      return d(a, c) / e(a, c)
    }, "%": function (a, c, d, e) {
      return d(a, c) % e(a, c)
    }, "^": function (a, c, d, e) {
      return d(a, c) ^ e(a, c)
    }, "=": E, "===": function (a, c, d, e) {
      return d(a, c) === e(a, c)
    }, "!==": function (a, c, d, e) {
      return d(a, c) !== e(a, c)
    }, "==": function (a,
                       c, d, e) {
      return d(a, c) == e(a, c)
    }, "!=": function (a, c, d, e) {
      return d(a, c) != e(a, c)
    }, "<": function (a, c, d, e) {
      return d(a, c) < e(a, c)
    }, ">": function (a, c, d, e) {
      return d(a, c) > e(a, c)
    }, "<=": function (a, c, d, e) {
      return d(a, c) <= e(a, c)
    }, ">=": function (a, c, d, e) {
      return d(a, c) >= e(a, c)
    }, "&&": function (a, c, d, e) {
      return d(a, c) && e(a, c)
    }, "||": function (a, c, d, e) {
      return d(a, c) || e(a, c)
    }, "&": function (a, c, d, e) {
      return d(a, c) & e(a, c)
    }, "|": function (a, c, d, e) {
      return e(a, c)(a, c, d(a, c))
    }, "!": function (a, c, d) {
      return !d(a, c)
    }
  }, Re = {
    n: "\n", f: "\f", r: "\r",
    t: "\t", v: "\v", "'": "'", '"': '"'
  }, Wb = function (a) {
    this.options = a
  };
  Wb.prototype = {
    constructor: Wb, lex: function (a) {
      this.text = a;
      this.index = 0;
      this.ch = t;
      this.lastCh = ":";
      for (this.tokens = []; this.index < this.text.length;) {
        this.ch = this.text.charAt(this.index);
        if (this.is("\"'"))this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(this.ch))this.readIdent(); else if (this.is("(){}[].,;:?"))this.tokens.push({index: this.index, text: this.ch}),
            this.index++; else if (this.isWhitespace(this.ch)) {
          this.index++;
          continue
        } else {
          a = this.ch + this.peek();
          var c = a + this.peek(2), d = gb[this.ch], e = gb[a], f = gb[c];
          f ? (this.tokens.push({index: this.index, text: c, fn: f}), this.index += 3) : e ? (this.tokens.push({index: this.index, text: a, fn: e}), this.index += 2) : d ? (this.tokens.push({index: this.index, text: this.ch, fn: d}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
        }
        this.lastCh = this.ch
      }
      return this.tokens
    }, is: function (a) {
      return -1 !== a.indexOf(this.ch)
    },
    was: function (a) {
      return -1 !== a.indexOf(this.lastCh)
    }, peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
    }, isNumber: function (a) {
      return "0" <= a && "9" >= a
    }, isWhitespace: function (a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
    }, isIdent: function (a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
    }, isExpOperator: function (a) {
      return "-" === a || "+" === a || this.isNumber(a)
    }, throwError: function (a, c, d) {
      d = d || this.index;
      c = y(c) ? "s " + c + "-" + this.index + " [" +
      this.text.substring(c, d) + "]" : " " + d;
      throw la("lexerr", a, c, this.text);
    }, readNumber: function () {
      for (var a = "", c = this.index; this.index < this.text.length;) {
        var d = K(this.text.charAt(this.index));
        if ("." == d || this.isNumber(d))a += d; else {
          var e = this.peek();
          if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
        }
        this.index++
      }
      a *=
          1;
      this.tokens.push({
        index: c, text: a, literal: !0, constant: !0, fn: function () {
          return a
        }
      })
    }, readIdent: function () {
      for (var a = this, c = "", d = this.index, e, f, g, k; this.index < this.text.length;) {
        k = this.text.charAt(this.index);
        if ("." === k || this.isIdent(k) || this.isNumber(k))"." === k && (e = this.index), c += k; else break;
        this.index++
      }
      if (e)for (f = this.index; f < this.text.length;) {
        k = this.text.charAt(f);
        if ("(" === k) {
          g = c.substr(e - d + 1);
          c = c.substr(0, e - d);
          this.index = f;
          break
        }
        if (this.isWhitespace(k))f++; else break
      }
      d = {index: d, text: c};
      if (gb.hasOwnProperty(c))d.fn =
          gb[c], d.literal = !0, d.constant = !0; else {
        var m = Ec(c, this.options, this.text);
        d.fn = D(function (a, c) {
          return m(a, c)
        }, {
          assign: function (d, e) {
            return ub(d, c, e, a.text, a.options)
          }
        })
      }
      this.tokens.push(d);
      g && (this.tokens.push({index: e, text: "."}), this.tokens.push({index: e + 1, text: g}))
    }, readString: function (a) {
      var c = this.index;
      this.index++;
      for (var d = "", e = a, f = !1; this.index < this.text.length;) {
        var g = this.text.charAt(this.index), e = e + g;
        if (f)"u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) ||
        this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Re[g] || g, f = !1; else if ("\\" === g)f = !0; else {
          if (g === a) {
            this.index++;
            this.tokens.push({
              index: c, text: e, string: d, literal: !0, constant: !0, fn: function () {
                return d
              }
            });
            return
          }
          d += g
        }
        this.index++
      }
      this.throwError("Unterminated quote", c)
    }
  };
  var fb = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d
  };
  fb.ZERO = D(function () {
    return 0
  }, {constant: !0});
  fb.prototype = {
    constructor: fb, parse: function (a) {
      this.text =
          a;
      this.tokens = this.lexer.lex(a);
      a = this.statements();
      0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
      a.literal = !!a.literal;
      a.constant = !!a.constant;
      return a
    }, primary: function () {
      var a;
      if (this.expect("("))a = this.filterChain(), this.consume(")"); else if (this.expect("["))a = this.arrayDeclaration(); else if (this.expect("{"))a = this.object(); else {
        var c = this.expect();
        (a = c.fn) || this.throwError("not a primary expression", c);
        a.literal = !!c.literal;
        a.constant = !!c.constant
      }
      for (var d; c =
          this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
      return a
    }, throwError: function (a, c) {
      throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    }, peekToken: function () {
      if (0 === this.tokens.length)throw la("ueoe", this.text);
      return this.tokens[0]
    }, peek: function (a, c, d, e) {
      if (0 < this.tokens.length) {
        var f = this.tokens[0], g = f.text;
        if (g === a || g === c || g === d || g ===
            e || !(a || c || d || e))return f
      }
      return !1
    }, expect: function (a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
    }, consume: function (a) {
      this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
    }, unaryFn: function (a, c) {
      return D(function (d, e) {
        return a(d, e, c)
      }, {constant: c.constant})
    }, ternaryFn: function (a, c, d) {
      return D(function (e, f) {
        return a(e, f) ? c(e, f) : d(e, f)
      }, {constant: a.constant && c.constant && d.constant})
    }, binaryFn: function (a, c, d) {
      return D(function (e, f) {
        return c(e, f, a, d)
      }, {
        constant: a.constant &&
        d.constant
      })
    }, statements: function () {
      for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (c, d) {
        for (var e, f = 0; f < a.length; f++) {
          var g = a[f];
          g && (e = g(c, d))
        }
        return e
      }
    }, filterChain: function () {
      for (var a = this.expression(), c; ;)if (c = this.expect("|"))a = this.binaryFn(a, c.fn, this.filter()); else return a
    }, filter: function () {
      for (var a = this.expect(), c = this.$filter(a.text), d = []; ;)if (a = this.expect(":"))d.push(this.expression());
      else {
        var e = function (a, e, k) {
          k = [k];
          for (var m = 0; m < d.length; m++)k.push(d[m](a, e));
          return c.apply(a, k)
        };
        return function () {
          return e
        }
      }
    }, expression: function () {
      return this.assignment()
    }, assignment: function () {
      var a = this.ternary(), c, d;
      return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), function (d, f) {
        return a.assign(d, c(d, f), f)
      }) : a
    }, ternary: function () {
      var a = this.logicalOR(), c, d;
      if (this.expect("?")) {
        c = this.assignment();
        if (d = this.expect(":"))return this.ternaryFn(a, c, this.assignment());
        this.throwError("expected :", d)
      } else return a
    }, logicalOR: function () {
      for (var a = this.logicalAND(), c; ;)if (c = this.expect("||"))a = this.binaryFn(a, c.fn, this.logicalAND()); else return a
    }, logicalAND: function () {
      var a = this.equality(), c;
      if (c = this.expect("&&"))a = this.binaryFn(a, c.fn, this.logicalAND());
      return a
    }, equality: function () {
      var a = this.relational(), c;
      if (c = this.expect("==", "!=", "===", "!=="))a = this.binaryFn(a, c.fn, this.equality());
      return a
    },
    relational: function () {
      var a = this.additive(), c;
      if (c = this.expect("<", ">", "<=", ">="))a = this.binaryFn(a, c.fn, this.relational());
      return a
    }, additive: function () {
      for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = this.binaryFn(a, c.fn, this.multiplicative());
      return a
    }, multiplicative: function () {
      for (var a = this.unary(), c; c = this.expect("*", "/", "%");)a = this.binaryFn(a, c.fn, this.unary());
      return a
    }, unary: function () {
      var a;
      return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(fb.ZERO, a.fn,
          this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
    }, fieldAccess: function (a) {
      var c = this, d = this.expect().text, e = Ec(d, this.options, this.text);
      return D(function (c, d, k) {
        return e(k || a(c, d))
      }, {
        assign: function (e, g, k) {
          (k = a(e, k)) || a.assign(e, k = {});
          return ub(k, d, g, c.text, c.options)
        }
      })
    }, objectIndex: function (a) {
      var c = this, d = this.expression();
      this.consume("]");
      return D(function (e, f) {
        var g = a(e, f), k = d(e, f), m;
        ka(k, c.text);
        if (!g)return t;
        (g = va(g[k], c.text)) && (g.then && c.options.unwrapPromises) &&
        (m = g, "$$v"in g || (m.$$v = t, m.then(function (a) {
          m.$$v = a
        })), g = g.$$v);
        return g
      }, {
        assign: function (e, f, g) {
          var k = ka(d(e, g), c.text);
          (g = va(a(e, g), c.text)) || a.assign(e, g = {});
          return g[k] = f
        }
      })
    }, functionCall: function (a, c) {
      var d = [];
      if (")" !== this.peekToken().text) {
        do d.push(this.expression()); while (this.expect(","))
      }
      this.consume(")");
      var e = this;
      return function (f, g) {
        for (var k = [], m = c ? c(f, g) : f, h = 0; h < d.length; h++)k.push(va(d[h](f, g), e.text));
        h = a(f, g, m) || E;
        va(m, e.text);
        var l = e.text;
        if (h) {
          if (h.constructor === h)throw la("isecfn",
              l);
          if (h === Pe || h === Qe || Qc && h === Qc)throw la("isecff", l);
        }
        k = h.apply ? h.apply(m, k) : h(k[0], k[1], k[2], k[3], k[4]);
        return va(k, e.text)
      }
    }, arrayDeclaration: function () {
      var a = [], c = !0;
      if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]"))break;
          var d = this.expression();
          a.push(d);
          d.constant || (c = !1)
        } while (this.expect(","))
      }
      this.consume("]");
      return D(function (c, d) {
        for (var g = [], k = 0; k < a.length; k++)g.push(a[k](c, d));
        return g
      }, {literal: !0, constant: c})
    }, object: function () {
      var a = [], c = !0;
      if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}"))break;
          var d = this.expect(), d = d.string || d.text;
          this.consume(":");
          var e = this.expression();
          a.push({key: d, value: e});
          e.constant || (c = !1)
        } while (this.expect(","))
      }
      this.consume("}");
      return D(function (c, d) {
        for (var e = {}, m = 0; m < a.length; m++) {
          var h = a[m];
          e[h.key] = h.value(c, d)
        }
        return e
      }, {literal: !0, constant: c})
    }
  };
  var Vb = {}, xa = C("$sce"), ga = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, Y = X.createElement("a"), Hc = ua(W.location.href, !0);
  mc.$inject = ["$provide"];
  Ic.$inject = ["$locale"];
  Kc.$inject = ["$locale"];
  var Nc = ".", Je = {
    yyyy: $("FullYear", 4),
    yy: $("FullYear", 2, 0, !0),
    y: $("FullYear", 1),
    MMMM: vb("Month"),
    MMM: vb("Month", !0),
    MM: $("Month", 2, 1),
    M: $("Month", 1, 1),
    dd: $("Date", 2),
    d: $("Date", 1),
    HH: $("Hours", 2),
    H: $("Hours", 1),
    hh: $("Hours", 2, -12),
    h: $("Hours", 1, -12),
    mm: $("Minutes", 2),
    m: $("Minutes", 1),
    ss: $("Seconds", 2),
    s: $("Seconds", 1),
    sss: $("Milliseconds", 3),
    EEEE: vb("Day"),
    EEE: vb("Day", !0),
    a: function (a, c) {
      return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
    },
    Z: function (a) {
      a = -1 * a.getTimezoneOffset();
      return a = (0 <= a ? "+" : "") + (Xb(Math[0 <
      a ? "floor" : "ceil"](a / 60), 2) + Xb(Math.abs(a % 60), 2))
    }
  }, Ie = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, He = /^\-?\d+$/;
  Jc.$inject = ["$locale"];
  var Fe = ba(K), Ge = ba(Ia);
  Lc.$inject = ["$parse"];
  var dd = ba({
    restrict: "E", compile: function (a, c) {
      8 >= Q && (c.href || c.name || c.$set("href", ""), a.append(X.createComment("IE fix")));
      if (!c.href && !c.xlinkHref && !c.name)return function (a, c) {
        var f = "[object SVGAnimatedString]" === za.call(c.prop("href")) ? "xlink:href" : "href";
        c.on("click", function (a) {
          c.attr(f) ||
          a.preventDefault()
        })
      }
    }
  }), Fb = {};
  r(qb, function (a, c) {
    if ("multiple" != a) {
      var d = pa("ng-" + c);
      Fb[d] = function () {
        return {
          priority: 100, link: function (a, f, g) {
            a.$watch(g[d], function (a) {
              g.$set(c, !!a)
            })
          }
        }
      }
    }
  });
  r(["src", "srcset", "href"], function (a) {
    var c = pa("ng-" + a);
    Fb[c] = function () {
      return {
        priority: 99, link: function (d, e, f) {
          var g = a, k = a;
          "href" === a && "[object SVGAnimatedString]" === za.call(e.prop("href")) && (k = "xlinkHref", f.$attr[k] = "xlink:href", g = null);
          f.$observe(c, function (c) {
            c ? (f.$set(k, c), Q && g && e.prop(g, f[k])) : "href" ===
            a && f.$set(k, null)
          })
        }
      }
    }
  });
  var yb = {$addControl: E, $removeControl: E, $setValidity: E, $setDirty: E, $setPristine: E};
  Oc.$inject = ["$element", "$attrs", "$scope", "$animate"];
  var Rc = function (a) {
        return ["$timeout", function (c) {
          return {
            name: "form", restrict: a ? "EAC" : "E", controller: Oc, compile: function () {
              return {
                pre: function (a, e, f, g) {
                  if (!f.action) {
                    var k = function (a) {
                      a.preventDefault ? a.preventDefault() : a.returnValue = !1
                    };
                    sb(e[0], "submit", k);
                    e.on("$destroy", function () {
                      c(function () {
                        $a(e[0], "submit", k)
                      }, 0, !1)
                    })
                  }
                  var m = e.parent().controller("form"),
                      h = f.name || f.ngForm;
                  h && ub(a, h, g, h);
                  if (m)e.on("$destroy", function () {
                    m.$removeControl(g);
                    h && ub(a, h, t, h);
                    D(g, yb)
                  })
                }
              }
            }
          }
        }]
      }, ed = Rc(), rd = Rc(!0), Se = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Te = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Ue = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Sc = {
        text: Ab, number: function (a, c, d, e, f, g) {
          Ab(a, c, d, e, f, g);
          e.$parsers.push(function (a) {
            var c = e.$isEmpty(a);
            if (c || Ue.test(a))return e.$setValidity("number",
                !0), "" === a ? null : c ? a : parseFloat(a);
            e.$setValidity("number", !1);
            return t
          });
          Ke(e, "number", Ve, null, e.$$validityState);
          e.$formatters.push(function (a) {
            return e.$isEmpty(a) ? "" : "" + a
          });
          d.min && (a = function (a) {
            var c = parseFloat(d.min);
            return sa(e, "min", e.$isEmpty(a) || a >= c, a)
          }, e.$parsers.push(a), e.$formatters.push(a));
          d.max && (a = function (a) {
            var c = parseFloat(d.max);
            return sa(e, "max", e.$isEmpty(a) || a <= c, a)
          }, e.$parsers.push(a), e.$formatters.push(a));
          e.$formatters.push(function (a) {
            return sa(e, "number", e.$isEmpty(a) ||
            ib(a), a)
          })
        }, url: function (a, c, d, e, f, g) {
          Ab(a, c, d, e, f, g);
          a = function (a) {
            return sa(e, "url", e.$isEmpty(a) || Se.test(a), a)
          };
          e.$formatters.push(a);
          e.$parsers.push(a)
        }, email: function (a, c, d, e, f, g) {
          Ab(a, c, d, e, f, g);
          a = function (a) {
            return sa(e, "email", e.$isEmpty(a) || Te.test(a), a)
          };
          e.$formatters.push(a);
          e.$parsers.push(a)
        }, radio: function (a, c, d, e) {
          x(d.name) && c.attr("name", hb());
          c.on("click", function () {
            c[0].checked && a.$apply(function () {
              e.$setViewValue(d.value)
            })
          });
          e.$render = function () {
            c[0].checked = d.value == e.$viewValue
          };
          d.$observe("value", e.$render)
        }, checkbox: function (a, c, d, e) {
          var f = d.ngTrueValue, g = d.ngFalseValue;
          v(f) || (f = !0);
          v(g) || (g = !1);
          c.on("click", function () {
            a.$apply(function () {
              e.$setViewValue(c[0].checked)
            })
          });
          e.$render = function () {
            c[0].checked = e.$viewValue
          };
          e.$isEmpty = function (a) {
            return a !== f
          };
          e.$formatters.push(function (a) {
            return a === f
          });
          e.$parsers.push(function (a) {
            return a ? f : g
          })
        }, hidden: E, button: E, submit: E, reset: E, file: E
      }, Ve = ["badInput"], jc = ["$browser", "$sniffer", function (a, c) {
        return {
          restrict: "E", require: "?ngModel",
          link: function (d, e, f, g) {
            g && (Sc[K(f.type)] || Sc.text)(d, e, f, g, c, a)
          }
        }
      }], wb = "ng-valid", xb = "ng-invalid", Oa = "ng-pristine", zb = "ng-dirty", We = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (a, c, d, e, f, g) {
        function k(a, c) {
          c = c ? "-" + mb(c, "-") : "";
          g.removeClass(e, (a ? xb : wb) + c);
          g.addClass(e, (a ? wb : xb) + c)
        }

        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name =
            d.name;
        var m = f(d.ngModel), h = m.assign;
        if (!h)throw C("ngModel")("nonassign", d.ngModel, ia(e));
        this.$render = E;
        this.$isEmpty = function (a) {
          return x(a) || "" === a || null === a || a !== a
        };
        var l = e.inheritedData("$formController") || yb, n = 0, p = this.$error = {};
        e.addClass(Oa);
        k(!0);
        this.$setValidity = function (a, c) {
          p[a] !== !c && (c ? (p[a] && n--, n || (k(!0), this.$valid = !0, this.$invalid = !1)) : (k(!1), this.$invalid = !0, this.$valid = !1, n++), p[a] = !c, k(c, a), l.$setValidity(a, c, this))
        };
        this.$setPristine = function () {
          this.$dirty = !1;
          this.$pristine = !0;
          g.removeClass(e, zb);
          g.addClass(e, Oa)
        };
        this.$setViewValue = function (d) {
          this.$viewValue = d;
          this.$pristine && (this.$dirty = !0, this.$pristine = !1, g.removeClass(e, Oa), g.addClass(e, zb), l.$setDirty());
          r(this.$parsers, function (a) {
            d = a(d)
          });
          this.$modelValue !== d && (this.$modelValue = d, h(a, d), r(this.$viewChangeListeners, function (a) {
            try {
              a()
            } catch (d) {
              c(d)
            }
          }))
        };
        var q = this;
        a.$watch(function () {
          var c = m(a);
          if (q.$modelValue !== c) {
            var d = q.$formatters, e = d.length;
            for (q.$modelValue = c; e--;)c = d[e](c);
            q.$viewValue !== c && (q.$viewValue =
                c, q.$render())
          }
          return c
        })
      }], Gd = function () {
        return {
          require: ["ngModel", "^?form"], controller: We, link: function (a, c, d, e) {
            var f = e[0], g = e[1] || yb;
            g.$addControl(f);
            a.$on("$destroy", function () {
              g.$removeControl(f)
            })
          }
        }
      }, Id = ba({
        require: "ngModel", link: function (a, c, d, e) {
          e.$viewChangeListeners.push(function () {
            a.$eval(d.ngChange)
          })
        }
      }), kc = function () {
        return {
          require: "?ngModel", link: function (a, c, d, e) {
            if (e) {
              d.required = !0;
              var f = function (a) {
                if (d.required && e.$isEmpty(a))e.$setValidity("required", !1); else return e.$setValidity("required",
                    !0), a
              };
              e.$formatters.push(f);
              e.$parsers.unshift(f);
              d.$observe("required", function () {
                f(e.$viewValue)
              })
            }
          }
        }
      }, Hd = function () {
        return {
          require: "ngModel", link: function (a, c, d, e) {
            var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
            e.$parsers.push(function (a) {
              if (!x(a)) {
                var c = [];
                a && r(a.split(f), function (a) {
                  a && c.push(aa(a))
                });
                return c
              }
            });
            e.$formatters.push(function (a) {
              return J(a) ? a.join(", ") : t
            });
            e.$isEmpty = function (a) {
              return !a || !a.length
            }
          }
        }
      }, Xe = /^(true|false|\d+)$/, Jd = function () {
        return {
          priority: 100,
          compile: function (a, c) {
            return Xe.test(c.ngValue) ? function (a, c, f) {
              f.$set("value", a.$eval(f.ngValue))
            } : function (a, c, f) {
              a.$watch(f.ngValue, function (a) {
                f.$set("value", a)
              })
            }
          }
        }
      }, jd = ya({
        compile: function (a) {
          a.addClass("ng-binding");
          return function (a, d, e) {
            d.data("$binding", e.ngBind);
            a.$watch(e.ngBind, function (a) {
              d.text(a == t ? "" : a)
            })
          }
        }
      }), ld = ["$interpolate", function (a) {
        return function (c, d, e) {
          c = a(d.attr(e.$attr.ngBindTemplate));
          d.addClass("ng-binding").data("$binding", c);
          e.$observe("ngBindTemplate", function (a) {
            d.text(a)
          })
        }
      }],
      kd = ["$sce", "$parse", function (a, c) {
        return {
          compile: function (d) {
            d.addClass("ng-binding");
            return function (d, f, g) {
              f.data("$binding", g.ngBindHtml);
              var k = c(g.ngBindHtml);
              d.$watch(function () {
                return (k(d) || "").toString()
              }, function (c) {
                f.html(a.getTrustedHtml(k(d)) || "")
              })
            }
          }
        }
      }], md = Yb("", !0), od = Yb("Odd", 0), nd = Yb("Even", 1), pd = ya({
        compile: function (a, c) {
          c.$set("ngCloak", t);
          a.removeClass("ng-cloak")
        }
      }), qd = [function () {
        return {scope: !0, controller: "@", priority: 500}
      }], lc = {}, Ye = {blur: !0, focus: !0};
  r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
      function (a) {
        var c = pa("ng-" + a);
        lc[c] = ["$parse", "$rootScope", function (d, e) {
          return {
            compile: function (f, g) {
              var k = d(g[c]);
              return function (c, d) {
                d.on(a, function (d) {
                  var f = function () {
                    k(c, {$event: d})
                  };
                  Ye[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                })
              }
            }
          }
        }]
      });
  var td = ["$animate", function (a) {
    return {
      transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function (c, d, e, f, g) {
        var k, m, h;
        c.$watch(e.ngIf, function (f) {
          Ua(f) ? m || (m = c.$new(), g(m, function (c) {
            c[c.length++] = X.createComment(" end ngIf: " + e.ngIf +
            " ");
            k = {clone: c};
            a.enter(c, d.parent(), d)
          })) : (h && (h.remove(), h = null), m && (m.$destroy(), m = null), k && (h = Eb(k.clone), a.leave(h, function () {
            h = null
          }), k = null))
        })
      }
    }
  }], ud = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (a, c, d, e, f) {
    return {
      restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: Va.noop, compile: function (g, k) {
        var m = k.ngInclude || k.src, h = k.onload || "", l = k.autoscroll;
        return function (g, k, q, r, F) {
          var u = 0, t, w, R, z = function () {
            w && (w.remove(), w = null);
            t && (t.$destroy(), t = null);
            R && (e.leave(R, function () {
              w = null
            }), w = R, R = null)
          };
          g.$watch(f.parseAsResourceUrl(m), function (f) {
            var m = function () {
              !y(l) || l && !g.$eval(l) || d()
            }, q = ++u;
            f ? (a.get(f, {cache: c}).success(function (a) {
              if (q === u) {
                var c = g.$new();
                r.template = a;
                a = F(c, function (a) {
                  z();
                  e.enter(a, null, k, m)
                });
                t = c;
                R = a;
                t.$emit("$includeContentLoaded");
                g.$eval(h)
              }
            }).error(function () {
              q === u && z()
            }), g.$emit("$includeContentRequested")) : (z(), r.template = null)
          })
        }
      }
    }
  }], Kd = ["$compile", function (a) {
    return {
      restrict: "ECA", priority: -400, require: "ngInclude",
      link: function (c, d, e, f) {
        d.html(f.template);
        a(d.contents())(c)
      }
    }
  }], vd = ya({
    priority: 450, compile: function () {
      return {
        pre: function (a, c, d) {
          a.$eval(d.ngInit)
        }
      }
    }
  }), wd = ya({terminal: !0, priority: 1E3}), xd = ["$locale", "$interpolate", function (a, c) {
    var d = /{}/g;
    return {
      restrict: "EA", link: function (e, f, g) {
        var k = g.count, m = g.$attr.when && f.attr(g.$attr.when), h = g.offset || 0, l = e.$eval(m) || {}, n = {}, p = c.startSymbol(), q = c.endSymbol(), s = /^when(Minus)?(.+)$/;
        r(g, function (a, c) {
          s.test(c) && (l[K(c.replace("when", "").replace("Minus", "-"))] =
              f.attr(g.$attr[c]))
        });
        r(l, function (a, e) {
          n[e] = c(a.replace(d, p + k + "-" + h + q))
        });
        e.$watch(function () {
          var c = parseFloat(e.$eval(k));
          if (isNaN(c))return "";
          c in l || (c = a.pluralCat(c - h));
          return n[c](e, f, !0)
        }, function (a) {
          f.text(a)
        })
      }
    }
  }], yd = ["$parse", "$animate", function (a, c) {
    var d = C("ngRepeat");
    return {
      transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, link: function (e, f, g, k, m) {
        var h = g.ngRepeat, l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, p, q, s, t, u, A = {$id: Ka};
        if (!l)throw d("iexp",
            h);
        g = l[1];
        k = l[2];
        (l = l[3]) ? (n = a(l), p = function (a, c, d) {
          u && (A[u] = a);
          A[t] = c;
          A.$index = d;
          return n(e, A)
        }) : (q = function (a, c) {
          return Ka(c)
        }, s = function (a) {
          return a
        });
        l = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
        if (!l)throw d("iidexp", g);
        t = l[3] || l[1];
        u = l[2];
        var y = {};
        e.$watchCollection(k, function (a) {
          var g, k, l = f[0], n, A = {}, B, I, H, v, E, C, x, J = [];
          if (Pa(a))C = a, E = p || q; else {
            E = p || s;
            C = [];
            for (H in a)a.hasOwnProperty(H) && "$" != H.charAt(0) && C.push(H);
            C.sort()
          }
          B = C.length;
          k = J.length = C.length;
          for (g = 0; g < k; g++)if (H = a ===
              C ? g : C[g], v = a[H], n = E(H, v, g), Da(n, "`track by` id"), y.hasOwnProperty(n))x = y[n], delete y[n], A[n] = x, J[g] = x; else {
            if (A.hasOwnProperty(n))throw r(J, function (a) {
              a && a.scope && (y[a.id] = a)
            }), d("dupes", h, n, na(v));
            J[g] = {id: n};
            A[n] = !1
          }
          for (H in y)y.hasOwnProperty(H) && (x = y[H], g = Eb(x.clone), c.leave(g), r(g, function (a) {
            a.$$NG_REMOVED = !0
          }), x.scope.$destroy());
          g = 0;
          for (k = C.length; g < k; g++) {
            H = a === C ? g : C[g];
            v = a[H];
            x = J[g];
            J[g - 1] && (l = J[g - 1].clone[J[g - 1].clone.length - 1]);
            if (x.scope) {
              I = x.scope;
              n = l;
              do n = n.nextSibling; while (n && n.$$NG_REMOVED);
              x.clone[0] != n && c.move(Eb(x.clone), null, w(l));
              l = x.clone[x.clone.length - 1]
            } else I = e.$new();
            I[t] = v;
            u && (I[u] = H);
            I.$index = g;
            I.$first = 0 === g;
            I.$last = g === B - 1;
            I.$middle = !(I.$first || I.$last);
            I.$odd = !(I.$even = 0 === (g & 1));
            x.scope || m(I, function (a) {
              a[a.length++] = X.createComment(" end ngRepeat: " + h + " ");
              c.enter(a, null, w(l));
              l = a;
              x.scope = I;
              x.clone = a;
              A[x.id] = x
            })
          }
          y = A
        })
      }
    }
  }], zd = ["$animate", function (a) {
    return function (c, d, e) {
      c.$watch(e.ngShow, function (c) {
        a[Ua(c) ? "removeClass" : "addClass"](d, "ng-hide")
      })
    }
  }], sd = ["$animate",
    function (a) {
      return function (c, d, e) {
        c.$watch(e.ngHide, function (c) {
          a[Ua(c) ? "addClass" : "removeClass"](d, "ng-hide")
        })
      }
    }], Ad = ya(function (a, c, d) {
    a.$watch(d.ngStyle, function (a, d) {
      d && a !== d && r(d, function (a, d) {
        c.css(d, "")
      });
      a && c.css(a)
    }, !0)
  }), Bd = ["$animate", function (a) {
    return {
      restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {}
      }], link: function (c, d, e, f) {
        var g = [], k = [], m = [], h = [];
        c.$watch(e.ngSwitch || e.on, function (d) {
          var n, p;
          n = 0;
          for (p = m.length; n < p; ++n)m[n].remove();
          n = m.length = 0;
          for (p =
                   h.length; n < p; ++n) {
            var q = k[n];
            h[n].$destroy();
            m[n] = q;
            a.leave(q, function () {
              m.splice(n, 1)
            })
          }
          k.length = 0;
          h.length = 0;
          if (g = f.cases["!" + d] || f.cases["?"])c.$eval(e.change), r(g, function (d) {
            var e = c.$new();
            h.push(e);
            d.transclude(e, function (c) {
              var e = d.element;
              k.push(c);
              a.enter(c, e.parent(), e)
            })
          })
        })
      }
    }
  }], Cd = ya({
    transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, c, d, e, f) {
      e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
      e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
    }
  }), Dd =
      ya({
        transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, c, d, e, f) {
          e.cases["?"] = e.cases["?"] || [];
          e.cases["?"].push({transclude: f, element: c})
        }
      }), Fd = ya({
    link: function (a, c, d, e, f) {
      if (!f)throw C("ngTransclude")("orphan", ia(c));
      f(function (a) {
        c.empty();
        c.append(a)
      })
    }
  }), fd = ["$templateCache", function (a) {
    return {
      restrict: "E", terminal: !0, compile: function (c, d) {
        "text/ng-template" == d.type && a.put(d.id, c[0].text)
      }
    }
  }], Ze = C("ngOptions"), Ed = ba({terminal: !0}), gd = ["$compile", "$parse", function (a, c) {
    var d =
        /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = {$setViewValue: E};
    return {
      restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
        var m = this, h = {}, l = e, n;
        m.databound = d.ngModel;
        m.init = function (a, c, d) {
          l = a;
          n = d
        };
        m.addOption = function (c) {
          Da(c, '"option value"');
          h[c] = !0;
          l.$viewValue == c && (a.val(c), n.parent() && n.remove())
        };
        m.removeOption = function (a) {
          this.hasOption(a) && (delete h[a], l.$viewValue == a && this.renderUnknownOption(a))
        };
        m.renderUnknownOption = function (c) {
          c = "? " + Ka(c) + " ?";
          n.val(c);
          a.prepend(n);
          a.val(c);
          n.prop("selected", !0)
        };
        m.hasOption = function (a) {
          return h.hasOwnProperty(a)
        };
        c.$on("$destroy", function () {
          m.renderUnknownOption = E
        })
      }], link: function (e, g, k, m) {
        function h(a, c, d, e) {
          d.$render = function () {
            var a = d.$viewValue;
            e.hasOption(a) ? (v.parent() && v.remove(), c.val(a), "" === a && u.prop("selected", !0)) : x(a) && u ? c.val("") : e.renderUnknownOption(a)
          };
          c.on("change", function () {
            a.$apply(function () {
              v.parent() && v.remove();
              d.$setViewValue(c.val())
            })
          })
        }

        function l(a, c, d) {
          var e;
          d.$render = function () {
            var a = new bb(d.$viewValue);
            r(c.find("option"), function (c) {
              c.selected = y(a.get(c.value))
            })
          };
          a.$watch(function () {
            Aa(e, d.$viewValue) || (e = ha(d.$viewValue), d.$render())
          });
          c.on("change", function () {
            a.$apply(function () {
              var a = [];
              r(c.find("option"), function (c) {
                c.selected && a.push(c.value)
              });
              d.$setViewValue(a)
            })
          })
        }

        function n(e, f, g) {
          function k() {
            var a = {"": []}, c = [""], d, h,
                s, t, v;
            s = g.$modelValue;
            t = w(e) || [];
            var E = n ? Zb(t) : t, I, M, B;
            M = {};
            B = !1;
            if (q)if (h = g.$modelValue, x && J(h))for (B = new bb([]), d = {}, v = 0; v < h.length; v++)d[m] = h[v], B.put(x(e, d), h[v]); else B = new bb(h);
            v = B;
            var D, K;
            for (B = 0; I = E.length, B < I; B++) {
              h = B;
              if (n) {
                h = E[B];
                if ("$" === h.charAt(0))continue;
                M[n] = h
              }
              M[m] = t[h];
              d = r(e, M) || "";
              (h = a[d]) || (h = a[d] = [], c.push(d));
              q ? d = y(v.remove(x ? x(e, M) : u(e, M))) : (x ? (d = {}, d[m] = s, d = x(e, d) === x(e, M)) : d = s === u(e, M), v = v || d);
              D = l(e, M);
              D = y(D) ? D : "";
              h.push({id: x ? x(e, M) : n ? E[B] : B, label: D, selected: d})
            }
            q || (F || null ===
            s ? a[""].unshift({id: "", label: "", selected: !v}) : v || a[""].unshift({id: "?", label: "", selected: !0}));
            M = 0;
            for (E = c.length; M < E; M++) {
              d = c[M];
              h = a[d];
              z.length <= M ? (s = {element: C.clone().attr("label", d), label: h.label}, t = [s], z.push(t), f.append(s.element)) : (t = z[M], s = t[0], s.label != d && s.element.attr("label", s.label = d));
              D = null;
              B = 0;
              for (I = h.length; B < I; B++)d = h[B], (v = t[B + 1]) ? (D = v.element, v.label !== d.label && D.text(v.label = d.label), v.id !== d.id && D.val(v.id = d.id), D[0].selected !== d.selected && (D.prop("selected", v.selected = d.selected),
              Q && D.prop("selected", v.selected))) : ("" === d.id && F ? K = F : (K = A.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).text(d.label), t.push({element: K, label: d.label, id: d.id, selected: d.selected}), p.addOption(d.label, K), D ? D.after(K) : s.element.append(K), D = K);
              for (B++; t.length > B;)d = t.pop(), p.removeOption(d.label), d.element.remove()
            }
            for (; z.length > M;)z.pop()[0].element.remove()
          }

          var h;
          if (!(h = s.match(d)))throw Ze("iexp", s, ia(f));
          var l = c(h[2] || h[1]), m = h[4] || h[6], n = h[5], r = c(h[3] || ""), u = c(h[2] ?
              h[1] : m), w = c(h[7]), x = h[8] ? c(h[8]) : null, z = [[{element: f, label: ""}]];
          F && (a(F)(e), F.removeClass("ng-scope"), F.remove());
          f.empty();
          f.on("change", function () {
            e.$apply(function () {
              var a, c = w(e) || [], d = {}, h, l, p, r, s, v, y;
              if (q)for (l = [], r = 0, v = z.length; r < v; r++)for (a = z[r], p = 1, s = a.length; p < s; p++) {
                if ((h = a[p].element)[0].selected) {
                  h = h.val();
                  n && (d[n] = h);
                  if (x)for (y = 0; y < c.length && (d[m] = c[y], x(e, d) != h); y++); else d[m] = c[h];
                  l.push(u(e, d))
                }
              } else if (h = f.val(), "?" == h)l = t; else if ("" === h)l = null; else if (x)for (y = 0; y < c.length; y++) {
                if (d[m] =
                        c[y], x(e, d) == h) {
                  l = u(e, d);
                  break
                }
              } else d[m] = c[h], n && (d[n] = h), l = u(e, d);
              g.$setViewValue(l);
              k()
            })
          });
          g.$render = k;
          e.$watchCollection(w, k);
          e.$watchCollection(function () {
            var a = {}, c = w(e);
            if (c) {
              for (var d = Array(c.length), f = 0, g = c.length; f < g; f++)a[m] = c[f], d[f] = l(e, a);
              return d
            }
          }, k);
          q && e.$watchCollection(function () {
            return g.$modelValue
          }, k)
        }

        if (m[1]) {
          var p = m[0];
          m = m[1];
          var q = k.multiple, s = k.ngOptions, F = !1, u, A = w(X.createElement("option")), C = w(X.createElement("optgroup")), v = A.clone();
          k = 0;
          for (var z = g.children(), E = z.length; k <
          E; k++)if ("" === z[k].value) {
            u = F = z.eq(k);
            break
          }
          p.init(m, F, v);
          q && (m.$isEmpty = function (a) {
            return !a || 0 === a.length
          });
          s ? n(e, g, m) : q ? l(e, g, m) : h(e, g, m, p)
        }
      }
    }
  }], id = ["$interpolate", function (a) {
    var c = {addOption: E, removeOption: E};
    return {
      restrict: "E", priority: 100, compile: function (d, e) {
        if (x(e.value)) {
          var f = a(d.text(), !0);
          f || e.$set("value", d.text())
        }
        return function (a, d, e) {
          var h = d.parent(), l = h.data("$selectController") || h.parent().data("$selectController");
          l && l.databound ? d.prop("selected", !1) : l = c;
          f ? a.$watch(f, function (a,
                                    c) {
            e.$set("value", a);
            a !== c && l.removeOption(c);
            l.addOption(a)
          }) : l.addOption(e.value);
          d.on("$destroy", function () {
            l.removeOption(e.value)
          })
        }
      }
    }
  }], hd = ba({restrict: "E", terminal: !0});
  W.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Ea = W.jQuery) && Ea.fn.on ? (w = Ea, D(Ea.fn, {
    scope: La.scope,
    isolateScope: La.isolateScope,
    controller: La.controller,
    injector: La.injector,
    inheritedData: La.inheritedData
  }), Gb("remove", !0, !0, !1), Gb("empty", !1, !1, !1), Gb("html", !1, !1, !0)) : w = S, Va.element = w,
      $c(Va), w(X).ready(function () {
    Xc(X, fc)
  }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

;
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (n, e, A) {
  'use strict';
  function x(s, g, h) {
    return {
      restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (a, c, b, f, w) {
        function y() {
          p && (p.remove(), p = null);
          k && (k.$destroy(), k = null);
          l && (h.leave(l, function () {
            p = null
          }), p = l, l = null)
        }

        function v() {
          var b = s.current && s.current.locals;
          if (e.isDefined(b && b.$template)) {
            var b = a.$new(), d = s.current;
            l = w(b, function (d) {
              h.enter(d, null, l || c, function () {
                !e.isDefined(t) || t && !a.$eval(t) || g()
              });
              y()
            });
            k = d.scope = b;
            k.$emit("$viewContentLoaded");
            k.$eval(u)
          } else y()
        }

        var k, l, p, t = b.autoscroll, u = b.onload || "";
        a.$on("$routeChangeSuccess", v);
        v()
      }
    }
  }

  function z(e, g, h) {
    return {
      restrict: "ECA", priority: -400, link: function (a, c) {
        var b = h.current, f = b.locals;
        c.html(f.$template);
        var w = e(c.contents());
        b.controller && (f.$scope = a, f = g(b.controller, f), b.controllerAs && (a[b.controllerAs] = f), c.data("$ngControllerController", f), c.children().data("$ngControllerController", f));
        w(a)
      }
    }
  }

  n = e.module("ngRoute", ["ng"]).provider("$route", function () {
    function s(a, c) {
      return e.extend(new (e.extend(function () {
          },
          {prototype: a})), c)
    }

    function g(a, e) {
      var b = e.caseInsensitiveMatch, f = {originalPath: a, regexp: a}, h = f.keys = [];
      a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (a, e, b, c) {
        a = "?" === c ? c : null;
        c = "*" === c ? c : null;
        h.push({name: b, optional: !!a});
        e = e || "";
        return "" + (a ? "" : e) + "(?:" + (a ? e : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
      }).replace(/([\/$\*])/g, "\\$1");
      f.regexp = RegExp("^" + a + "$", b ? "i" : "");
      return f
    }

    var h = {};
    this.when = function (a, c) {
      h[a] = e.extend({reloadOnSearch: !0}, c, a && g(a, c));
      if (a) {
        var b =
            "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
        h[b] = e.extend({redirectTo: a}, g(b, c))
      }
      return this
    };
    this.otherwise = function (a) {
      this.when(null, a);
      return this
    };
    this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function (a, c, b, f, g, n, v, k) {
      function l() {
        var d = p(), m = r.current;
        if (d && m && d.$$route === m.$$route && e.equals(d.pathParams, m.pathParams) && !d.reloadOnSearch && !u)m.params = d.params, e.copy(m.params, b), a.$broadcast("$routeUpdate", m); else if (d || m)u = !1, a.$broadcast("$routeChangeStart",
            d, m), (r.current = d) && d.redirectTo && (e.isString(d.redirectTo) ? c.path(t(d.redirectTo, d.params)).search(d.params).replace() : c.url(d.redirectTo(d.pathParams, c.path(), c.search())).replace()), f.when(d).then(function () {
          if (d) {
            var a = e.extend({}, d.resolve), c, b;
            e.forEach(a, function (d, c) {
              a[c] = e.isString(d) ? g.get(d) : g.invoke(d)
            });
            e.isDefined(c = d.template) ? e.isFunction(c) && (c = c(d.params)) : e.isDefined(b = d.templateUrl) && (e.isFunction(b) && (b = b(d.params)), b = k.getTrustedResourceUrl(b), e.isDefined(b) && (d.loadedTemplateUrl =
                b, c = n.get(b, {cache: v}).then(function (a) {
              return a.data
            })));
            e.isDefined(c) && (a.$template = c);
            return f.all(a)
          }
        }).then(function (c) {
          d == r.current && (d && (d.locals = c, e.copy(d.params, b)), a.$broadcast("$routeChangeSuccess", d, m))
        }, function (c) {
          d == r.current && a.$broadcast("$routeChangeError", d, m, c)
        })
      }

      function p() {
        var a, b;
        e.forEach(h, function (f, h) {
          var q;
          if (q = !b) {
            var g = c.path();
            q = f.keys;
            var l = {};
            if (f.regexp)if (g = f.regexp.exec(g)) {
              for (var k = 1, p = g.length; k < p; ++k) {
                var n = q[k - 1], r = g[k];
                n && r && (l[n.name] = r)
              }
              q = l
            } else q = null;
            else q = null;
            q = a = q
          }
          q && (b = s(f, {params: e.extend({}, c.search(), a), pathParams: a}), b.$$route = f)
        });
        return b || h[null] && s(h[null], {params: {}, pathParams: {}})
      }

      function t(a, c) {
        var b = [];
        e.forEach((a || "").split(":"), function (a, d) {
          if (0 === d)b.push(a); else {
            var e = a.match(/(\w+)(.*)/), f = e[1];
            b.push(c[f]);
            b.push(e[2] || "");
            delete c[f]
          }
        });
        return b.join("")
      }

      var u = !1, r = {
        routes: h, reload: function () {
          u = !0;
          a.$evalAsync(l)
        }
      };
      a.$on("$locationChangeSuccess", l);
      return r
    }]
  });
  n.provider("$routeParams", function () {
    this.$get = function () {
      return {}
    }
  });
  n.directive("ngView", x);
  n.directive("ngView", z);
  x.$inject = ["$route", "$anchorScroll", "$animate"];
  z.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map

;
/*
 AngularJS v1.2.26
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (F, e, O) {
  'use strict';
  e.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
    return function (G, s, g) {
      g = g.ngAnimateChildren;
      e.isString(g) && 0 === g.length ? s.data("$$ngAnimateChildren", !0) : G.$watch(g, function (e) {
        s.data("$$ngAnimateChildren", !!e)
      })
    }
  }).factory("$$animateReflow", ["$$rAF", "$document", function (e, s) {
    return function (g) {
      return e(function () {
        g()
      })
    }
  }]).config(["$provide", "$animateProvider", function (G, s) {
    function g(e) {
      for (var g = 0; g < e.length; g++) {
        var l = e[g];
        if (l.nodeType == aa)return l
      }
    }

    function B(l) {
      return e.element(g(l))
    }

    var m = e.noop, u = e.forEach, P = s.$$selectors, aa = 1, l = "$$ngAnimateState", V = "$$ngAnimateChildren", J = "ng-animate", n = {running: !0};
    G.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function (z, F, $, R, E, H, O) {
      function K(a) {
        var b = a.data(l) || {};
        b.running = !0;
        a.data(l, b)
      }

      function L(a) {
        if (a) {
          var b = [], c = {};
          a = a.substr(1).split(".");
          ($.transitions || $.animations) && b.push(F.get(P[""]));
          for (var d = 0; d < a.length; d++) {
            var f =
                a[d], e = P[f];
            e && !c[f] && (b.push(F.get(e)), c[f] = !0)
          }
          return b
        }
      }

      function G(a, b, c) {
        function d(a, b) {
          var c = a[b], d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
          if (c || d)return "leave" == b && (d = c, c = null), n.push({event: b, fn: c}), h.push({event: b, fn: d}), !0
        }

        function f(b, d, e) {
          var f = [];
          u(b, function (a) {
            a.fn && f.push(a)
          });
          var g = 0;
          u(f, function (b, l) {
            var C = function () {
              a:{
                if (d) {
                  (d[l] || m)();
                  if (++g < f.length)break a;
                  d = null
                }
                e()
              }
            };
            switch (b.event) {
              case "setClass":
                d.push(b.fn(a, A, k, C));
                break;
              case "addClass":
                d.push(b.fn(a, A || c,
                    C));
                break;
              case "removeClass":
                d.push(b.fn(a, k || c, C));
                break;
              default:
                d.push(b.fn(a, C))
            }
          });
          d && 0 === d.length && e()
        }

        var g = a[0];
        if (g) {
          var l = "setClass" == b, p = l || "addClass" == b || "removeClass" == b, A, k;
          e.isArray(c) && (A = c[0], k = c[1], c = A + " " + k);
          var x = a.attr("class") + " " + c;
          if (M(x)) {
            var t = m, w = [], h = [], q = m, y = [], n = [], x = (" " + x).replace(/\s+/g, ".");
            u(L(x), function (a) {
              !d(a, b) && l && (d(a, "addClass"), d(a, "removeClass"))
            });
            return {
              node: g, event: b, className: c, isClassBased: p, isSetClassOperation: l, before: function (a) {
                t = a;
                f(h, w, function () {
                  t =
                      m;
                  a()
                })
              }, after: function (a) {
                q = a;
                f(n, y, function () {
                  q = m;
                  a()
                })
              }, cancel: function () {
                w && (u(w, function (a) {
                  (a || m)(!0)
                }), t(!0));
                y && (u(y, function (a) {
                  (a || m)(!0)
                }), q(!0))
              }
            }
          }
        }
      }

      function r(a, b, c, d, f, g, n) {
        function p(d) {
          var e = "$animate:" + d;
          q && (q[e] && 0 < q[e].length) && E(function () {
            c.triggerHandler(e, {event: a, className: b})
          })
        }

        function A() {
          p("before")
        }

        function m() {
          p("after")
        }

        function x() {
          p("close");
          n && E(function () {
            n()
          })
        }

        function t() {
          t.hasBeenRun || (t.hasBeenRun = !0, g())
        }

        function w() {
          if (!w.hasBeenRun) {
            w.hasBeenRun = !0;
            var d =
                c.data(l);
            d && (h && h.isClassBased ? k(c, b) : (E(function () {
              var d = c.data(l) || {};
              r == d.index && k(c, b, a)
            }), c.data(l, d)));
            x()
          }
        }

        var h = G(c, a, b);
        if (h) {
          b = h.className;
          var q = e.element._data(h.node), q = q && q.events;
          d || (d = f ? f.parent() : c.parent());
          var y = c.data(l) || {};
          f = y.active || {};
          var z = y.totalActive || 0, C = y.last, D;
          h.isClassBased && (D = y.running || y.disabled || C && !C.isClassBased);
          if (D || N(c, d))t(), A(), m(), w(); else {
            d = !1;
            if (0 < z) {
              D = [];
              if (h.isClassBased)"setClass" == C.event ? (D.push(C), k(c, b)) : f[b] && (v = f[b], v.event == a ? d = !0 : (D.push(v),
                  k(c, b))); else if ("leave" == a && f["ng-leave"])d = !0; else {
                for (var v in f)D.push(f[v]), k(c, v);
                f = {};
                z = 0
              }
              0 < D.length && u(D, function (a) {
                a.cancel()
              })
            }
            !h.isClassBased || (h.isSetClassOperation || d) || (d = "addClass" == a == c.hasClass(b));
            if (d)t(), A(), m(), x(); else {
              if ("leave" == a)c.one("$destroy", function (a) {
                a = e.element(this);
                var b = a.data(l);
                b && (b = b.active["ng-leave"]) && (b.cancel(), k(a, "ng-leave"))
              });
              c.addClass(J);
              var r = Y++;
              z++;
              f[b] = h;
              c.data(l, {last: h, active: f, index: r, totalActive: z});
              A();
              h.before(function (d) {
                var e = c.data(l);
                d = d || !e || !e.active[b] || h.isClassBased && e.active[b].event != a;
                t();
                !0 === d ? w() : (m(), h.after(w))
              })
            }
          }
        } else t(), A(), m(), w()
      }

      function T(a) {
        if (a = g(a))a = e.isFunction(a.getElementsByClassName) ? a.getElementsByClassName(J) : a.querySelectorAll("." + J), u(a, function (a) {
          a = e.element(a);
          (a = a.data(l)) && a.active && u(a.active, function (a) {
            a.cancel()
          })
        })
      }

      function k(a, b) {
        if (g(a) == g(R))n.disabled || (n.running = !1, n.structural = !1); else if (b) {
          var c = a.data(l) || {}, d = !0 === b;
          !d && (c.active && c.active[b]) && (c.totalActive--, delete c.active[b]);
          if (d || !c.totalActive)a.removeClass(J), a.removeData(l)
        }
      }

      function N(a, b) {
        if (n.disabled)return !0;
        if (g(a) == g(R))return n.running;
        var c, d, f;
        do {
          if (0 === b.length)break;
          var m = g(b) == g(R), k = m ? n : b.data(l) || {};
          if (k.disabled)return !0;
          m && (f = !0);
          !1 !== c && (m = b.data(V), e.isDefined(m) && (c = m));
          d = d || k.running || k.last && !k.last.isClassBased
        } while (b = b.parent());
        return !f || !c && d
      }

      var Y = 0;
      R.data(l, n);
      H.$$postDigest(function () {
        H.$$postDigest(function () {
          n.running = !1
        })
      });
      var Q = s.classNameFilter(), M = Q ? function (a) {
        return Q.test(a)
      } :
          function () {
            return !0
          };
      return {
        enter: function (a, b, c, d) {
          a = e.element(a);
          b = b && e.element(b);
          c = c && e.element(c);
          K(a);
          z.enter(a, b, c);
          H.$$postDigest(function () {
            a = B(a);
            r("enter", "ng-enter", a, b, c, m, d)
          })
        }, leave: function (a, b) {
          a = e.element(a);
          T(a);
          K(a);
          H.$$postDigest(function () {
            r("leave", "ng-leave", B(a), null, null, function () {
              z.leave(a)
            }, b)
          })
        }, move: function (a, b, c, d) {
          a = e.element(a);
          b = b && e.element(b);
          c = c && e.element(c);
          T(a);
          K(a);
          z.move(a, b, c);
          H.$$postDigest(function () {
            a = B(a);
            r("move", "ng-move", a, b, c, m, d)
          })
        }, addClass: function (a,
                               b, c) {
          a = e.element(a);
          a = B(a);
          r("addClass", b, a, null, null, function () {
            z.addClass(a, b)
          }, c)
        }, removeClass: function (a, b, c) {
          a = e.element(a);
          a = B(a);
          r("removeClass", b, a, null, null, function () {
            z.removeClass(a, b)
          }, c)
        }, setClass: function (a, b, c, d) {
          a = e.element(a);
          a = B(a);
          r("setClass", [b, c], a, null, null, function () {
            z.setClass(a, b, c)
          }, d)
        }, enabled: function (a, b) {
          switch (arguments.length) {
            case 2:
              if (a)k(b); else {
                var c = b.data(l) || {};
                c.disabled = !0;
                b.data(l, c)
              }
              break;
            case 1:
              n.disabled = !a;
              break;
            default:
              a = !n.disabled
          }
          return !!a
        }
      }
    }]);
    s.register("",
        ["$window", "$sniffer", "$timeout", "$$animateReflow", function (l, n, s, B) {
          function E(a, U) {
            S && S();
            W.push(U);
            S = B(function () {
              u(W, function (a) {
                a()
              });
              W = [];
              S = null;
              v = {}
            })
          }

          function H(a, U) {
            var b = g(a);
            a = e.element(b);
            Z.push(a);
            b = Date.now() + U;
            b <= da || (s.cancel(ca), da = b, ca = s(function () {
              G(Z);
              Z = []
            }, U, !1))
          }

          function G(a) {
            u(a, function (a) {
              (a = a.data(q)) && (a.closeAnimationFn || m)()
            })
          }

          function K(a, b) {
            var c = b ? v[b] : null;
            if (!c) {
              var d = 0, e = 0, f = 0, g = 0, m, k, h, q;
              u(a, function (a) {
                if (a.nodeType == aa) {
                  a = l.getComputedStyle(a) || {};
                  h = a[I + P];
                  d =
                      Math.max(L(h), d);
                  q = a[I + x];
                  m = a[I + t];
                  e = Math.max(L(m), e);
                  k = a[p + t];
                  g = Math.max(L(k), g);
                  var b = L(a[p + P]);
                  0 < b && (b *= parseInt(a[p + w], 10) || 1);
                  f = Math.max(b, f)
                }
              });
              c = {total: 0, transitionPropertyStyle: q, transitionDurationStyle: h, transitionDelayStyle: m, transitionDelay: e, transitionDuration: d, animationDelayStyle: k, animationDelay: g, animationDuration: f};
              b && (v[b] = c)
            }
            return c
          }

          function L(a) {
            var b = 0;
            a = e.isString(a) ? a.split(/\s*,\s*/) : [];
            u(a, function (a) {
              b = Math.max(parseFloat(a) || 0, b)
            });
            return b
          }

          function J(a) {
            var b = a.parent(),
                c = b.data(h);
            c || (b.data(h, ++ba), c = ba);
            return c + "-" + g(a).getAttribute("class")
          }

          function r(a, b, c, d) {
            var e = J(b), f = e + " " + c, l = v[f] ? ++v[f].total : 0, k = {};
            if (0 < l) {
              var h = c + "-stagger", k = e + " " + h;
              (e = !v[k]) && b.addClass(h);
              k = K(b, k);
              e && b.removeClass(h)
            }
            d = d || function (a) {
              return a()
            };
            b.addClass(c);
            var h = b.data(q) || {}, n = d(function () {
              return K(b, f)
            });
            d = n.transitionDuration;
            e = n.animationDuration;
            if (0 === d && 0 === e)return b.removeClass(c), !1;
            b.data(q, {running: h.running || 0, itemIndex: l, stagger: k, timings: n, closeAnimationFn: m});
            a = 0 < h.running || "setClass" == a;
            0 < d && T(b, c, a);
            0 < e && (0 < k.animationDelay && 0 === k.animationDuration) && (g(b).style[p] = "none 0s");
            return !0
          }

          function T(a, b, c) {
            "ng-enter" != b && ("ng-move" != b && "ng-leave" != b) && c ? a.addClass(y) : g(a).style[I + x] = "none"
          }

          function k(a, b) {
            var c = I + x, d = g(a);
            d.style[c] && 0 < d.style[c].length && (d.style[c] = "");
            a.removeClass(y)
          }

          function N(a) {
            var b = p;
            a = g(a);
            a.style[b] && 0 < a.style[b].length && (a.style[b] = "")
          }

          function Y(a, b, d, e) {
            function k(a) {
              b.off(x, l);
              b.removeClass(m);
              c(b, d);
              a = g(b);
              for (var e in s)a.style.removeProperty(s[e])
            }

            function l(a) {
              a.stopPropagation();
              var b = a.originalEvent || a;
              a = b.$manualTimeStamp || b.timeStamp || Date.now();
              b = parseFloat(b.elapsedTime.toFixed(V));
              Math.max(a - z, 0) >= y && b >= v && e()
            }

            var h = g(b);
            a = b.data(q);
            if (-1 != h.getAttribute("class").indexOf(d) && a) {
              var m = "";
              u(d.split(" "), function (a, b) {
                m += (0 < b ? " " : "") + a + "-active"
              });
              var n = a.stagger, p = a.timings, t = a.itemIndex, v = Math.max(p.transitionDuration, p.animationDuration), w = Math.max(p.transitionDelay, p.animationDelay), y = w * D, z = Date.now(), x = A + " " + X, r = "", s = [];
              if (0 < p.transitionDuration) {
                var B =
                    p.transitionPropertyStyle;
                -1 == B.indexOf("all") && (r += f + "transition-property: " + B + ";", r += f + "transition-duration: " + p.transitionDurationStyle + ";", s.push(f + "transition-property"), s.push(f + "transition-duration"))
              }
              0 < t && (0 < n.transitionDelay && 0 === n.transitionDuration && (r += f + "transition-delay: " + Q(p.transitionDelayStyle, n.transitionDelay, t) + "; ", s.push(f + "transition-delay")), 0 < n.animationDelay && 0 === n.animationDuration && (r += f + "animation-delay: " + Q(p.animationDelayStyle, n.animationDelay, t) + "; ", s.push(f + "animation-delay")));
              0 < s.length && (p = h.getAttribute("style") || "", h.setAttribute("style", p + "; " + r));
              b.on(x, l);
              b.addClass(m);
              a.closeAnimationFn = function () {
                k();
                e()
              };
              h = (t * (Math.max(n.animationDelay, n.transitionDelay) || 0) + (w + v) * C) * D;
              a.running++;
              H(b, h);
              return k
            }
            e()
          }

          function Q(a, b, c) {
            var d = "";
            u(a.split(","), function (a, e) {
              d += (0 < e ? "," : "") + (c * b + parseInt(a, 10)) + "s"
            });
            return d
          }

          function M(a, b, d, e) {
            if (r(a, b, d, e))return function (a) {
              a && c(b, d)
            }
          }

          function a(a, b, d, e) {
            if (b.data(q))return Y(a, b, d, e);
            c(b, d);
            e()
          }

          function b(b, c, d, e) {
            var f = M(b,
                c, d);
            if (f) {
              var g = f;
              E(c, function () {
                k(c, d);
                N(c);
                g = a(b, c, d, e)
              });
              return function (a) {
                (g || m)(a)
              }
            }
            e()
          }

          function c(a, b) {
            a.removeClass(b);
            var c = a.data(q);
            c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(q))
          }

          function d(a, b) {
            var c = "";
            a = e.isArray(a) ? a : a.split(/\s+/);
            u(a, function (a, d) {
              a && 0 < a.length && (c += (0 < d ? " " : "") + a + b)
            });
            return c
          }

          var f = "", I, X, p, A;
          F.ontransitionend === O && F.onwebkittransitionend !== O ? (f = "-webkit-", I = "WebkitTransition", X = "webkitTransitionEnd transitionend") : (I = "transition", X = "transitionend");
          F.onanimationend === O && F.onwebkitanimationend !== O ? (f = "-webkit-", p = "WebkitAnimation", A = "webkitAnimationEnd animationend") : (p = "animation", A = "animationend");
          var P = "Duration", x = "Property", t = "Delay", w = "IterationCount", h = "$$ngAnimateKey", q = "$$ngAnimateCSS3Data", y = "ng-animate-block-transitions", V = 3, C = 1.5, D = 1E3, v = {}, ba = 0, W = [], S, ca = null, da = 0, Z = [];
          return {
            enter: function (a, c) {
              return b("enter", a, "ng-enter", c)
            }, leave: function (a, c) {
              return b("leave", a, "ng-leave", c)
            }, move: function (a, c) {
              return b("move", a, "ng-move",
                  c)
            }, beforeSetClass: function (a, b, c, e) {
              var f = d(c, "-remove") + " " + d(b, "-add"), g = M("setClass", a, f, function (d) {
                var e = a.attr("class");
                a.removeClass(c);
                a.addClass(b);
                d = d();
                a.attr("class", e);
                return d
              });
              if (g)return E(a, function () {
                k(a, f);
                N(a);
                e()
              }), g;
              e()
            }, beforeAddClass: function (a, b, c) {
              var e = M("addClass", a, d(b, "-add"), function (c) {
                a.addClass(b);
                c = c();
                a.removeClass(b);
                return c
              });
              if (e)return E(a, function () {
                k(a, b);
                N(a);
                c()
              }), e;
              c()
            }, setClass: function (b, c, e, f) {
              e = d(e, "-remove");
              c = d(c, "-add");
              return a("setClass", b,
                  e + " " + c, f)
            }, addClass: function (b, c, e) {
              return a("addClass", b, d(c, "-add"), e)
            }, beforeRemoveClass: function (a, b, c) {
              var e = M("removeClass", a, d(b, "-remove"), function (c) {
                var d = a.attr("class");
                a.removeClass(b);
                c = c();
                a.attr("class", d);
                return c
              });
              if (e)return E(a, function () {
                k(a, b);
                N(a);
                c()
              }), e;
              c()
            }, removeClass: function (b, c, e) {
              return a("removeClass", b, d(c, "-remove"), e)
            }
          }
        }])
  }])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map
