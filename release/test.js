/**
 * Jeeliz Glasses VTO Widget - https://github.com/jeeliz/jeelizGlassesVTOWidget
 *
 * Copyright 2018 Jeeliz ( https://jeeliz.com )
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";
"use strict";
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function (bb) {
  var Db = 0;
  return function () {
    return Db < bb.length
      ? {
          done: !1,
          value: bb[Db++],
        }
      : {
          done: !0,
        };
  };
};
$jscomp.arrayIterator = function (bb) {
  return {
    next: $jscomp.arrayIteratorImpl(bb),
  };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (bb, Db, Fb) {
        if (bb == Array.prototype || bb == Object.prototype) return bb;
        bb[Db] = Fb.value;
        return bb;
      };
$jscomp.getGlobal = function (bb) {
  bb = [
    "object" == typeof globalThis && globalThis,
    bb,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var Db = 0; Db < bb.length; ++Db) {
    var Fb = bb[Db];
    if (Fb && Fb.Math == Math) return Fb;
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE =
  "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (bb, Db) {
  var Fb = $jscomp.propertyToPolyfillSymbol[Db];
  if (null == Fb) return bb[Db];
  Fb = bb[Fb];
  return void 0 !== Fb ? Fb : bb[Db];
};
$jscomp.polyfill = function (bb, Db, Fb, Eb) {
  Db &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(bb, Db, Fb, Eb)
      : $jscomp.polyfillUnisolated(bb, Db, Fb, Eb));
};
$jscomp.polyfillUnisolated = function (bb, Db, Fb, Eb) {
  Fb = $jscomp.global;
  bb = bb.split(".");
  for (Eb = 0; Eb < bb.length - 1; Eb++) {
    var Xb = bb[Eb];
    if (!(Xb in Fb)) return;
    Fb = Fb[Xb];
  }
  bb = bb[bb.length - 1];
  Eb = Fb[bb];
  Db = Db(Eb);
  Db != Eb &&
    null != Db &&
    $jscomp.defineProperty(Fb, bb, {
      configurable: !0,
      writable: !0,
      value: Db,
    });
};
$jscomp.polyfillIsolated = function (bb, Db, Fb, Eb) {
  var Xb = bb.split(".");
  bb = 1 === Xb.length;
  Eb = Xb[0];
  Eb = !bb && Eb in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var ed = 0; ed < Xb.length - 1; ed++) {
    var nd = Xb[ed];
    if (!(nd in Eb)) return;
    Eb = Eb[nd];
  }
  Xb = Xb[Xb.length - 1];
  Fb = $jscomp.IS_SYMBOL_NATIVE && "es6" === Fb ? Eb[Xb] : null;
  Db = Db(Fb);
  null != Db &&
    (bb
      ? $jscomp.defineProperty($jscomp.polyfills, Xb, {
          configurable: !0,
          writable: !0,
          value: Db,
        })
      : Db !== Fb &&
        (($jscomp.propertyToPolyfillSymbol[Xb] = $jscomp.IS_SYMBOL_NATIVE
          ? $jscomp.global.Symbol(Xb)
          : $jscomp.POLYFILL_PREFIX + Xb),
        (Xb = $jscomp.propertyToPolyfillSymbol[Xb]),
        $jscomp.defineProperty(Eb, Xb, {
          configurable: !0,
          writable: !0,
          value: Db,
        })));
};
$jscomp.initSymbol = function () {};
$jscomp.polyfill(
  "Symbol",
  function (bb) {
    if (bb) return bb;
    var Db = function (Xb, ed) {
      this.$jscomp$symbol$id_ = Xb;
      $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: ed,
      });
    };
    Db.prototype.toString = function () {
      return this.$jscomp$symbol$id_;
    };
    var Fb = 0,
      Eb = function (Xb) {
        if (this instanceof Eb)
          throw new TypeError("Symbol is not a constructor");
        return new Db("jscomp_symbol_" + (Xb || "") + "_" + Fb++, Xb);
      };
    return Eb;
  },
  "es6",
  "es3"
);
$jscomp.initSymbolIterator = function () {};
$jscomp.polyfill(
  "Symbol.iterator",
  function (bb) {
    if (bb) return bb;
    bb = Symbol("Symbol.iterator");
    for (
      var Db = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        Fb = 0;
      Fb < Db.length;
      Fb++
    ) {
      var Eb = $jscomp.global[Db[Fb]];
      "function" === typeof Eb &&
        "function" != typeof Eb.prototype[bb] &&
        $jscomp.defineProperty(Eb.prototype, bb, {
          configurable: !0,
          writable: !0,
          value: function () {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
          },
        });
    }
    return bb;
  },
  "es6",
  "es3"
);
$jscomp.initSymbolAsyncIterator = function () {};
$jscomp.iteratorPrototype = function (bb) {
  bb = {
    next: bb,
  };
  bb[Symbol.iterator] = function () {
    return this;
  };
  return bb;
};
var JeeWidget = (function () {
  function bb() {
    pb.mode = vc.realtime;
    pb.canRT = !0;
    pb.isRT = !0;
    ed();
    nd();
    jd.enabled && Tb.do_instantDetection(jd.interval, jd.callback);
    fd && (fd(!0), (fd = null));
  }

  function Db() {
    pb.canRT = !1;
    pb.isRT = !1;
    if (Yc.disableFallback) Eb("FALLBACK_UNAVAILABLE");
    else if (
      ((Ia.uploadNotice = document.getElementById("JeeWidgetUploadNotice")),
      kc.toggle_loading(!1),
      Ia.uploadNotice)
    ) {
      $(Ia.uploadNotice).show();
      var la = document.getElementById("JeeWidgetFileInputNotice"),
        La = document.getElementById("JeeWidgetFileInputButtonNotice");
      la && La
        ? ($(La).click(function (hb) {
            $(la.click());
          }),
          $(la).change(function (hb) {
            kc.toggle_loading(!0);
            Od.read(
              la,
              function (Sa) {
                JeefitFallback.switch_toFallbackMode(
                  function () {
                    console.log(
                      "INFO in JeeWidget - switch_toFallbackMode(): success callback launched"
                    );
                    JeefitFallback.set_serverURL(Yc.fallbackURL);
                    $(Ia.uploadNotice).hide();
                    nd();
                    $(Ia.inputFileButton).show();
                    Fd(Sa, function () {
                      pb.sku && kc.load_fallback(pb.sku, !1);
                    });
                    fd && (fd(!1), (fd = null));
                  },
                  function () {
                    Eb("FATAL");
                  }
                );
              },
              function (Sa) {
                kc.toggle_loading(!1);
                Eb(Sa);
              }
            );
          }))
        : Eb("NOFILEINPUTNOTICE");
    }
  }

  function Fb() {
    Eb("INVALID_SKU");
  }

  function Eb(la) {
    Gd.error ? Gd.error(la) : console.log("ERROR:", la);
  }

  function Xb() {
    Hd = $(Ia.container).width();
    Id = $(Ia.container).height();
    ud = Math.round(1 * Hd);
    vd = Math.round(1 * Id);
    $(Ia.cv).css({
      width: Hd.toString() + "px",
      height: Id.toString() + "px",
    });
    Ia.cv.width = ud;
    Ia.cv.height = vd;
    Tb && (pb.mode === vc.notLoaded ? Tb.set_size(ud, vd) : Tb.resize(ud, vd));
  }

  function ed() {
    Ia.adjust = document.getElementById("JeeWidgetAdjust");
    Ia.adjust &&
      ((Ia.adjustNotice = document.getElementById("JeeWidgetAdjustNotice")),
      (Ia.adjustExit = document.getElementById("JeeWidgetAdjustExit")),
      (Ia.changeModelContainer = document.getElementById(
        "JeeWidgetChangeModelContainer"
      )),
      (Ia.buttonResizeCanvas = document.getElementById("buttonResizeCanvas")),
      $(Ia.adjust).click(function () {
        $(Ia.adjust).hide();
        $(Ia.inputFileButton).hide();
        $(Ia.backToRTButton).hide();
        Ia.changeModelContainer && $(Ia.changeModelContainer).hide();
        Ia.buttonResizeCanvas && $(Ia.buttonResizeCanvas).hide();
        pb.mode = vc.adjust;
        Ia.adjustNotice.style.display = "block";
        $(Ia.adjustExit).show();
        Ia.cv.style.cursor = "move";
        Tb.switch_modeInteractor("movePinch");
      }),
      $(Ia.adjustExit).click(function () {
        $(Ia.adjust).show();
        $(Ia.adjustNotice).hide();
        $(Ia.adjustExit).hide();
        $(Ia.inputFileButton).show();
        pb.canRT && !pb.isRT && $(Ia.backToRTButton).show();
        Ia.changeModelContainer &&
          (Ia.changeModelContainer.style.display = "block");
        Ia.buttonResizeCanvas && $(Ia.buttonResizeCanvas).show();
        Ia.cv.style.cursor = "auto";
        pb.mode = pb.isRT ? pb.realtime : pb.fallback;
        Tb.switch_modeInteractor("idle");
      }),
      $(Ia.adjust).show(),
      $(Ia.changeModelContainer).show(),
      $(Ia.buttonResizeCanvas).show());
  }

  function nd() {
    Ia.inputFile = document.getElementById("JeeWidgetFileInput");
    Ia.inputFileButton = document.getElementById("JeeWidgetFileInputButton");
    Ia.inputFile &&
      Ia.inputFileButton &&
      ($(Ia.inputFileButton).click(function (la) {
        $(Ia.inputFile.click());
      }),
      $(Ia.inputFile).change(function (la) {
        kc.toggle_loading(!0);
        Od.read(
          Ia.inputFile,
          function (La) {
            pb.isRT
              ? Vd(La, function () {
                  pb.sku && kc.load_fallback(pb.sku, !1);
                })
              : Fd(La, function () {
                  pb.sku && kc.load_fallback(pb.sku, !1);
                });
          },
          function (La) {
            kc.toggle_loading(!1);
            Eb(La);
          }
        );
      }),
      $(Ia.inputFileButton).show());
  }

  function Fd(la, La) {
    JeefitFallback.reset_adjust();
    JeefitFallback.detect(la, !1, function () {
      console.log(
        "INFO in JeeWidget - detect_fallback(): detection done successfully"
      );
      La && La();
    });
  }

  function Vd(la, La) {
    if (!pb.isRT) return !1;
    Yc.disableFallback
      ? Eb("FALLBACK_UNAVAILABLE")
      : JeefitFallback.switch_toFallbackMode(
          function () {
            console.log(
              "INFO in JeeWidget - switch_toFallbackMode(): success callback launched"
            );
            pb.isRT = !1;
            JeefitFallback.set_serverURL(Yc.fallbackURL);
            Fd(la, function () {
              pb.canRT && Ia.backToRTButton && $(Ia.backToRTButton).show();
              La();
            });
          },
          function () {
            Eb("FALLBACK_UNAVAILABLE");
          }
        );
  }

  function Wd() {
    Ia.backToRTButton = document.getElementById(
      "JeeWidgetBackToRealtimeButton"
    );
    $(Ia.backToRTButton).click(function () {
      $(Ia.backToRTButton).hide();
      JeefitFallback.switch_toFullMode(function () {
        pb.isRT = !0;
        pb.mode = vc.realtime;
      });
    });
  }

  // TODO : Replace with our tracking function
  function Xd() {
    if (!Ia.trackIframe) {
      var la = Yc.appstaticURL + "jeewidget/";
      Ia.trackIframe = document.createElement("iframe");
      Ia.trackIframe.width = "10";
      Ia.trackIframe.height = "10";
      Ia.trackIframe.src = la + "trackIframe.html";
      $(Ia.trackIframe)
        .css({
          position: "absolute",
          zIndex: -1,
          bottom: "0px",
          right: "0px",
        })
        .appendTo(Ia.container);
    }
  }

  function Pd(la) {
    if (Ia.trackIframe) {
      var La = location.href.split("?").shift().split("://").pop();
      La = La.split("/").shift();
      La = La.split("www.").pop();
      try {
        Ia.trackIframe.contentWindow.postMessage(
          {
            action: "COUNTTRYONSESSION",
            domain: La,
            sku: la,
          },
          "*"
        );
      } catch (hb) {}
    }
  }

  function Qd(la, La, hb) {
    Tb.load_model(
      La.mod + ".json",
      La.mats,
      function () {
        pb.mode = vc.realtime;
        hb && hb();
        kc.toggle_loading(!1);
        Pd(la);
      },
      la
    );
  }
  var Tb = (function () {
    function la(b, f) {
      var n = new XMLHttpRequest();
      n.open("GET", b, !0);
      n.withCredentials = !1;
      n.onreadystatechange = function () {
        4 !== n.readyState ||
          (200 !== n.status && 0 !== n.status) ||
          f(n.responseText);
      };
      n.send();
    }

    function La(b) {
      return 0.5 > b ? 4 * b * b * b : (b - 1) * (2 * b - 2) * (2 * b - 2) + 1;
    }

    function hb(b) {
      switch (b) {
        case "relu":
          return "gl_FragColor=max(vec4(0.,0.,0.,0.),gl_FragColor);";
        case "elu":
          return "gl_FragColor=mix(exp(-abs(gl_FragColor))-vec4(1.,1.,1.,1.),gl_FragColor,step(0.,gl_FragColor));";
        case "elu01":
          return "gl_FragColor=mix(0.1*exp(-abs(gl_FragColor))-vec4(0.1,0.1,0.1,0.1),gl_FragColor,step(0.,gl_FragColor));";
        case "arctan":
          return "gl_FragColor=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;";
        case "copy":
          return "";
        default:
          return !1;
      }
    }

    function Sa(b, f) {
      var n = f % 8;
      return (b[(f - n) / 8] >> (7 - n)) & 1;
    }

    function qb(b, f, n) {
      var l = 1,
        t = 0;
      for (n = f + n - 1; n >= f; --n) (t += l * Sa(b, n)), (l *= 2);
      return t;
    }

    function ib(b) {
      b =
        "undefined" === typeof btoa
          ? Buffer.from(b.data, "base64").toString("latin1")
          : atob(b.data);
      for (var f = b.length, n = new Uint8Array(f), l = 0; l < f; ++l)
        n[l] = b.charCodeAt(l);
      return n;
    }

    function Gb(b) {
      var f = JSON.parse(b);
      b = f.nb;
      var n = f.n;
      f = ib(f);
      for (var l = new Uint32Array(n), t = 0; t < n; ++t)
        l[t] = qb(f, t * b, b);
      return l;
    }

    function Ta(b) {
      var f = JSON.parse(b);
      b = f.ne;
      var n = f.nf,
        l = f.n;
      f = ib(f);
      for (
        var t = new Float32Array(l),
          w = new Float32Array(n),
          G = b + n + 1,
          B = 0;
        B < l;
        ++B
      ) {
        var x = G * B,
          E = 0 === Sa(f, x) ? 1 : -1,
          O = qb(f, x + 1, b);
        x = x + 1 + b;
        for (var C = w.length, P = 0, z = x; z < x + C; ++z)
          (w[P] = Sa(f, z)), ++P;
        for (C = x = 0; C < n; ++C) x += w[C] * Math.pow(2, -C - 1);
        t[B] =
          0 === x && 0 === O
            ? 0
            : E * (1 + x) * Math.pow(2, 1 + O - Math.pow(2, b - 1));
      }
      return t;
    }

    function tb(b) {
      var f = null,
        n = null,
        l = 0;
      this.h = function (t) {
        this.Il(t.Qc);
        n.$i({
          Me: t.Me,
          Je: t.Je,
        });
      };
      this.Qj = function (t) {
        return f[t];
      };
      this.Il = function (t) {
        var w = null;
        l = t.length;
        f = t.map(function (G, B) {
          G = Object.assign({}, G, {
            index: B,
            parent: this,
            $c: w,
            vk: B === l - 1,
          });
          return (w = 0 === B ? xa.instance(G) : nb.instance(G));
        });
        n = f[l - 1];
        f.forEach(function (G, B) {
          0 !== B && G.fl();
        });
      };
      this.ta = function (t, w) {
        var G = w;
        f.forEach(function (B) {
          G = B.ta(G, t);
        });
        return G;
      };
      this.rg = function () {
        return n.Tj();
      };
      this.kg = function () {
        return n.kg();
      };
      this.J = function () {
        f &&
          (f.forEach(function (t) {
            t.J();
          }),
          (n = f = null),
          (l = 0));
      };
      "undefined" !== typeof b && this.h(b);
    }

    function yb(b, f) {
      b[f] = !0;
      b.setAttribute(f, "true");
    }

    function ob() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }

    function dc() {
      var b = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      return 2 < b.length
        ? [parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3] || 0, 10)]
        : [0, 0, 0];
    }

    function xc() {
      var b = navigator.userAgent.toLowerCase();
      return -1 !== b.indexOf("safari") && -1 === b.indexOf("chrome") ? !0 : !1;
    }

    function Cc(b) {
      if (!b) return b;
      var f = !1;
      if (b.video) {
        var n = function (l) {
          var t = {};
          "undefined" !== typeof l.min && (t.min = l.min);
          "undefined" !== typeof l.max && (t.max = l.max);
          "undefined" !== typeof l.ideal && (t.ideal = l.ideal);
          return t;
        };
        f = {};
        "undefined" !== typeof b.video.width && (f.width = n(b.video.width));
        "undefined" !== typeof b.video.height && (f.height = n(b.video.height));
        "undefined" !== typeof b.video.facingMode &&
          (f.facingMode = b.video.facingMode);
      }
      f = {
        audio: b.audio,
        video: f,
      };
      "undefined" !== typeof b.deviceId && (f.deviceId = b.deviceId);
      return f;
    }

    function zc(b) {
      var f = b.video.width;
      b.video.width = b.video.height;
      b.video.height = f;
      return b;
    }

    function ec(b) {
      function f(C) {
        return [
          480,
          576,
          640,
          648,
          720,
          768,
          800,
          960,
          1080,
          1152,
          1280,
          1366,
          1920,
        ].sort(function (P, z) {
          return Math.abs(P - C) - Math.abs(z - C);
        });
      }

      function n(C) {
        var P = Cc(b);
        l.push(C(P));
      }
      var l = [];
      if (!b || !b.video) return l;
      if (b.video.width && b.video.height) {
        if (b.video.width.ideal && b.video.height.ideal) {
          var t = f(b.video.width.ideal).slice(0, 3),
            w = f(b.video.height.ideal).slice(0, 3),
            G = {},
            B = 0;
          for (
            G.Wa = void 0;
            B < t.length;
            G = {
              Wa: G.Wa,
            },
              ++B
          ) {
            G.Wa = t[B];
            var x = {},
              E = 0;
            for (
              x.Va = void 0;
              E < w.length;
              x = {
                Va: x.Va,
              },
                ++E
            )
              if (
                ((x.Va = w[E]),
                G.Wa !== b.video.width.ideal || x.Va !== b.video.height.ideal)
              ) {
                var O = Math.max(G.Wa, x.Va) / Math.min(G.Wa, x.Va);
                O < 4 / 3 - 0.1 ||
                  O > 16 / 9 + 0.1 ||
                  n(
                    (function (C, P) {
                      return function (z) {
                        z.video.width.ideal = C.Wa;
                        z.video.height.ideal = P.Va;
                        return z;
                      };
                    })(G, x)
                  );
              }
          }
        }
        n(function (C) {
          return zc(C);
        });
      }
      b.video.width &&
        b.video.height &&
        (b.video.width.ideal &&
          b.video.height.ideal &&
          n(function (C) {
            delete C.video.width.ideal;
            delete C.video.height.ideal;
            return C;
          }),
        n(function (C) {
          delete C.video.width;
          delete C.video.height;
          return C;
        }));
      b.video.facingMode &&
        (n(function (C) {
          delete C.video.facingMode;
          return C;
        }),
        b.video.width &&
          b.video.height &&
          n(function (C) {
            zc(C);
            delete C.video.facingMode;
            return C;
          }));
      l.push({
        audio: b.audio,
        video: !0,
      });
      return l;
    }

    function Zb(b) {
      try {
        var f = window.matchMedia("(orientation: portrait)").matches ? !0 : !1;
      } catch (l) {
        f = window.innerHeight > window.innerWidth;
      }
      if (f && b && b.video) {
        f = b.video.width;
        var n = b.video.height;
        f &&
          n &&
          f.ideal &&
          n.ideal &&
          f.ideal > n.ideal &&
          ((b.video.height = f), (b.video.width = n));
      }
    }

    function da(b) {
      b.volume = 0;
      yb(b, "muted");
      if (xc()) {
        if (1 === b.volume) {
          var f = function () {
            b.volume = 0;
            window.removeEventListener("mousemove", f, !1);
            window.removeEventListener("touchstart", f, !1);
          };
          window.addEventListener("mousemove", f, !1);
          window.addEventListener("touchstart", f, !1);
        }
        setTimeout(function () {
          b.volume = 0;
          yb(b, "muted");
        }, 5);
      }
    }

    function na(b, f, n, l) {
      function t(G) {
        w || ((w = !0), n(G));
      }
      var w = !1;
      navigator.mediaDevices
        .getUserMedia(l)
        .then(function (G) {
          function B() {
            setTimeout(function () {
              if (b.currentTime) {
                var x = b.videoWidth,
                  E = b.videoHeight;
                if (0 === x || 0 === E) t("VIDEO_NULLSIZE");
                else {
                  x && (b.style.width = x.toString() + "px");
                  E && (b.style.height = E.toString() + "px");
                  x = {
                    Xi: null,
                    $e: null,
                    Sk: null,
                  };
                  try {
                    var O = G.getVideoTracks()[0];
                    O &&
                      ((x.Sk = O),
                      (x.Xi = O.getCapabilities()),
                      (x.$e = O.getSettings()));
                  } catch (C) {}
                  xc() || ob()
                    ? b.parentNode && null !== b.parentNode
                      ? (w || f(b, G, x),
                        setTimeout(function () {
                          b.play();
                        }, 100))
                      : (document.body.appendChild(b),
                        da(b),
                        w || f(b, G, x),
                        setTimeout(function () {
                          b.style.transform = "scale(0.0001,0.0001)";
                          b.style.position = "fixed";
                          b.style.bottom = "0px";
                          b.style.right = "0px";
                          da(b);
                          setTimeout(function () {
                            b.play();
                          }, 100);
                        }, 80))
                    : w || f(b, G, x);
                }
              } else t("VIDEO_NOTSTARTED");
            }, 700);
          }
          "undefined" !== typeof b.srcObject
            ? (b.srcObject = G)
            : ((b.src = window.URL.createObjectURL(G)), (b.videoStream = G));
          da(b);
          b.addEventListener(
            "loadeddata",
            function () {
              var x = b.play();
              da(b);
              "undefined" === typeof x
                ? B()
                : x
                    .then(function () {
                      B();
                    })
                    .catch(function () {
                      t("VIDEO_PLAYPROMISEREJECTED");
                    });
            },
            !1
          );
        })
        .catch(function (G) {
          t(G);
        });
    }

    function ua(b, f, n) {
      var l =
        navigator.mediaDevices && navigator.mediaDevices.getUserMedia
          ? document.createElement("video")
          : !1;
      if (l)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          if (n && n.video) {
            if (ob()) {
              var t = dc();
              (12 > t[0] || (12 === t[0] && 2 > t[1])) && Zb(n);
            }
            n.video.width &&
              n.video.width.ideal &&
              (l.style.width = n.video.width.ideal + "px");
            n.video.height &&
              n.video.height.ideal &&
              (l.style.height = n.video.height.ideal + "px");
          }
          yb(l, "autoplay");
          yb(l, "playsinline");
          n && n.audio ? (l.volume = 0) : yb(l, "muted");
          na(
            l,
            b,
            function () {
              function w(B) {
                if (0 === B.length) f("INVALID_FALLBACKCONSTRAINTS");
                else {
                  var x = B.shift();
                  na(
                    l,
                    b,
                    function () {
                      w(B);
                    },
                    x
                  );
                }
              }
              var G = ec(n);
              w(G);
            },
            n
          );
        } else f && f("MEDIASTREAMAPI_NOTFOUND");
      else f && f("VIDEO_NOTPROVIDED");
    }

    function Ma(b) {
      navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
        ? navigator.mediaDevices
            .enumerateDevices()
            .then(function (f) {
              (f = f.filter(function (n) {
                return (
                  n.kind &&
                  -1 !== n.kind.toLowerCase().indexOf("video") &&
                  n.label &&
                  n.deviceId
                );
              })) &&
              f.length &&
              0 < f.length
                ? b(f, !1)
                : b(!1, "NODEVICESFOUND");
            })
            .catch(function () {
              b(!1, "PROMISEREJECTED");
            })
        : b(!1, "NOTSUPPORTED");
    }

    function Oa() {
      function b() {
        var ea = lb.ae;
        Zc = ea * K.width;
        Tc = ea * K.height;
      }

      function f() {
        ++Qa;
        3 === Qa &&
          (ab.ef(),
          K.Db && (Za.reset(), fb.ib.Qi($c), fb.ib.Pi()),
          K.Cj || Wa.mj(),
          (ma.ready = !0),
          (ba = 0),
          l(),
          (Qa = 0));
      }

      function n(ea) {
        lc = setTimeout(t.bind(null, ea), v);
      }

      function l() {
        d.timestamp = Date.now();
        A && window.cancelAnimationFrame(A);
        t(0);
      }

      function t(ea) {
        J
          ? (d.Fb = ca)
          : va.isEnabled
          ? (d.Fb = va.Xg)
          : a
          ? (B(), (d.Fb = h === e.Y ? d.Wc : 1))
          : ((d.Fb = K.qc), B());
        Za.fa();
        for (var ta = 0; ta < d.Fb; ++ta)
          Ea.set("s50"),
            R.N(),
            aa.b(0),
            ya.raw.b(1),
            pa.g(!1, !1),
            R.b(0),
            M.ta(!1, R);
        if (J) T(), (J = !1), g.flush(), (A = window.requestAnimationFrame(t));
        else if ((Wa.animate(ea), !va.isEnabled)) {
          if (a) {
            ta = Date.now();
            var Ga = ta - d.timestamp,
              cb = 0.2 * K.Ed;
            d.timestamp = ta;
            d.Vg = d.Fb / Ga;
            d.Xc = d.Vg * cb + d.Xc * (1 - cb);
            d.Wg = 1e3 / Ga;
            d.Gb = d.Wg * K.Ed + d.Gb * (1 - K.Ed);
            d.Gb > K.rb[1]
              ? (++d.Wc, (d.Gb = (K.rb[0] + K.rb[1]) / 2))
              : d.Gb < K.rb[0] &&
                ((d.Wc = Math.max(d.Wc - 1, K.qc)),
                (d.Gb = (K.rb[0] + K.rb[1]) / 2));
            d.$b = K.Ii / Math.max(d.Xc, 0.001);
            c = Math.min(Math.max(d.$b, K.Af[0]), K.Af[1]);
            K.Db &&
              h === e.Y &&
              ((sa = K.Lg + (K.Mg - K.Lg) * d.$b),
              (wa = K.Kg + (K.Hk - K.Kg) * d.$b),
              (wa = Math.min(wa, 0.5)));
          }
          ba = ea;
          h !== e.ua && (A = window.requestAnimationFrame(n));
        }
      }

      function w() {
        ba = Date.now();
        a = !0;
      }

      function G() {
        lc && (clearTimeout(lc), (lc = !1));
        A && (window.cancelAnimationFrame(A), (A = !1));
      }

      function B() {
        var ea = mc.currentTime - zb;
        0 > ea && (zb = mc.currentTime);
        1e3 * ea < K.tm ||
          ($c.refresh(),
          (zb += ea),
          Ea.set("s49"),
          Za.fa(),
          aa.N(),
          $c.b(0),
          pa.g(!1, !0));
      }
      var x,
        E,
        O = null,
        C = null,
        P = -1,
        z = -1,
        F = null,
        H = null,
        r = !1,
        X = !1,
        D = [],
        p = [0, K.Ha[1], K.Ha[2]],
        v = K.Yb,
        y = null,
        M = null,
        V = null,
        Y = [0.5, 0, 0, 0.5];
      b();
      var ia = [0, 0, 0],
        S = 1,
        Z = 0,
        aa = null,
        R = null,
        qa = null,
        ya = {
          raw: null,
          oc: null,
          hc: null,
          Vd: null,
        },
        Ka = null,
        Aa = null,
        ba = 0,
        A = !1,
        ka = (E = x = null),
        Q = 0,
        sa = K.Mg,
        wa = 0.1,
        za = null,
        Qa = 0,
        Mb = !1,
        a = !0,
        c = 1,
        d = {
          timestamp: 0,
          Vg: 0,
          Xc: 0,
          Wc: K.qc,
          Fb: K.qc,
          Wg: 0,
          Gb: 0,
          $b: 1,
        },
        e = {
          ua: -1,
          Y: 0,
          Aa: 1,
          Sb: 2,
          Tb: 3,
        },
        h = e.Y,
        m = null,
        q = e.Y,
        I = !1,
        J = !1,
        ca = 1,
        T = !1,
        va = {
          isEnabled: !1,
          Td: null,
          Oa: null,
          Xg: 0,
        },
        Ra = null,
        rb = -1,
        Ua = !1,
        ub = !1,
        Pa = !1,
        wc = [0, 0, 0],
        ra = 1,
        Ba,
        vb,
        $a,
        Na = {
          Ha: [0, 0, 0],
          Ib: 1,
          ad: 0,
          Ca: 0,
          sa: 0,
          na: K.na,
        },
        Yb = [0, 0, 0],
        sb = {
          scale: 1,
          offsetX: 0,
          offsetY: 0,
        },
        lc = null,
        zb = 0,
        ab = {
          zg: function () {
            b();
            var ea = Zc / K.Oc;
            P = K.minScale * ea;
            z = K.maxScale * ea;
            O = {
              dm: (1 - 2 * K.borderWidth) / K.nStepsX,
              em: (1 - 2 * K.borderHeight) / K.nStepsY,
              cm: (z - P) / K.nStepsScale,
              Tk: K.borderWidth,
              Uk: K.borderHeight,
              Qk: 1 - K.borderWidth,
              Rk: 1 - K.borderHeight,
            };
            C = [K.Oc / Zc, K.Oc / Tc];
            F = {
              n: 0,
              x: K.borderWidth,
              y: K.borderHeight,
              scale: P,
            };
            rb =
              K.width > K.height
                ? [K.width / K.height, 1]
                : [1, K.height / K.width];
            X = !0;
          },
          h: function () {
            function ea(cb) {
              Ea.set("s56");
              Ka.N();
              ya.raw.b(1);
              Aa.b(2);
              Ea.A("u53", d.$b);
              Ea.A("u54", 1 / d.Xc);
              pa.g(!1, !1);
              Ea.set("s57");
              Aa.i();
              Ka.b(0);
              pa.g(!1, !1);
              cb.b(0);
              ya.raw.i();
              g.viewport(0, 0, 1, 1);
              Ea.set("s51");
              Ea.gd("u37", F.x, F.y, F.scale);
              ya.hc.b(1);
              pa.g(!1, !1);
              Ea.set("s52");
              g.viewport(1, 0, 1, 1);
              pa.g(!1, !1);
              1 !== ++F.n % 2 &&
                ((F.scale += O.cm),
                F.scale > z &&
                  ((F.x += O.dm),
                  (F.scale = P),
                  F.x > O.Qk &&
                    ((F.x = O.Tk), (F.y += O.em), F.y > O.Rk && (F.y = O.Uk))));
              ya.Vd.N();
              Ea.set("s53");
              Ea.A("u47", K.Cd * c);
              ya.raw.b(0);
              ya.hc.b(1);
              pa.g(!1, !1);
              Ea.set("s54");
              ya.hc.Ol(1);
              ya.Vd.b(0);
              Aa.b(2);
              pa.g(!1, !1);
              Ea.set("s55");
              ya.hc.b(0);
              ya.oc.i();
              pa.g(!1, !1);
              ba - Q > sa &&
                K.Db &&
                h === e.Y &&
                ((Q = ba),
                za.i(),
                Ea.set("s58"),
                cb.b(0),
                pa.g(!1, !1),
                fb.ib.Xh($c, za, wa));
            }
            Ea.yf([
              {
                id: "s49",
                name: "_",
                j:
                  "attribute vec2 a0;uniform mat2 u32;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u32*a0;}",
                D: ["a0"],
                K: [2],
                a:
                  "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                c: ["u1", "u32"],
                precision: "lowp",
              },
              {
                id: "s50",
                name: "_",
                a:
                  "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                j:
                  "attribute vec2 a0;uniform sampler2D u33;uniform vec2 u34;uniform float u35;const vec2 f=vec2(.25,.5),g=vec2(.75,.5),e=vec2(.5,.5);varying vec2 vv0;void main(){vec4 a=texture2D(u33,f);vec2 d=a.gb,b=a.a*u34;vec4 c=texture2D(u33,g);float l=c.a,i=c.y;vec2 j=vec2(mix(1.,1./cos(i),u35),1.);b*=j;vec2 k=a0*.5+e;vv0=d+(k-e)*b,gl_Position=vec4(a0,0.,1.);}",
                D: ["a0"],
                K: [2],
                c: ["u1", "u33", "u34", "u35"],
                precision: "lowp",
              },
              {
                id: "s51",
                name: "_",
                j: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                a:
                  "uniform sampler2D u36,u33;uniform vec3 u37,u38;uniform float u39,u40,u41;const vec4 e=vec4(.25,.25,.25,.25);void main(){vec4 c=texture2D(u36,vec2(.625,.625)),d=texture2D(u36,vec2(.875,.625)),a=texture2D(u33,vec2(.25,.5));float b=dot(c,e),f=dot(d,e);bool g=b>u40&&b>f+u41;g?a.r=2.:a.r>u39?a.r=0.:a.r>1.9?a.r+=1.:0.;if(a.r<.9)a=vec4(1.,u37);else{float h=dot(e,texture2D(u36,vec2(.875,.875))),i=dot(e,texture2D(u36,vec2(.125,.625))),j=dot(e,texture2D(u36,vec2(.375,.625)));a.r*=step(1.9,a.r),a.gba+=vec3(h,i,j)*u38*a.a;}gl_FragColor=a;}",
                c: "u36 u33 u37 u39 u38 u40 u41".split(" "),
              },
              {
                id: "s52",
                name: "_",
                j: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                a:
                  "uniform sampler2D u36,u33;uniform vec3 u42,u43;uniform vec2 u44;const vec4 l=vec4(1.,1.,1.,1.),f=vec4(0.,0.,0.,0.),e=vec4(.25,.25,.25,.25);void main(){vec4 m=texture2D(u36,vec2(.5,.5)),n=texture2D(u36,vec2(.75,.5));float b=dot(texture2D(u36,vec2(0.,0.)),e),a=smoothstep(u44.x,u44.y,b);vec4 c=texture2D(u33,vec2(.25,.5)),d=texture2D(u33,vec2(.75,.5));float g=d.a;a=mix(a,g,.3);if(c.r<1.9){gl_FragColor=f;return;}float h=dot(e,texture2D(u36,vec2(0.,.75))),i=dot(e,texture2D(u36,vec2(.25,.75))),j=dot(e,texture2D(u36,vec2(.5,.75)));vec3 k=u43+vec3(h,i,j)*u42;gl_FragColor=vec4(k,a);}",
                c: "u36 u33 u44 u42 u43 u45".split(" "),
              },
              {
                id: "s53",
                name: "_",
                a:
                  "uniform sampler2D u33,u46;uniform float u47,u48,u49,u50;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(1.,0.,0.,0.),h=vec4(0.,0.,0.,1.);varying vec2 vv0;void main(){vec4 c=texture2D(u33,vv0),d=texture2D(u46,vv0),i=texture2D(u33,vec2(.75,.5));float j=pow(i.a,u50),k=(1.-j)*(u48-u47)+u47,a=step(.5,vv0.x);vec4 l=mix(g,h,a),b=max(k*f,l);b*=mix(f,u49*vec4(1.,1.,1.,0.)+vec4(0.,0.,0.,1.),a);vec4 m=c-d;gl_FragColor=m*b;}",
                c: "u33 u46 u47 u48 u49 u50".split(" "),
                precision: "highp",
              },
              {
                id: "s54",
                name: "_",
                a:
                  "uniform sampler2D u46,u51,u45;const vec4 g=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 c=texture2D(u46,vv0),d=texture2D(u51,vv0),a=c+d;float f=step(.5,vv0.x),b=a.a;b*=texture2D(u45,vec2(.25,.5)).a,b*=texture2D(u45,vec2(.75,.5)).a,a.a=mix(a.a,b,f),gl_FragColor=a;}",
                c: ["u46", "u51", "u45"],
                precision: "highp",
              },
              {
                id: "s55",
                name: "_",
                a:
                  "uniform sampler2D u33;uniform float u52;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u33,vv0);float b=step(.5,vv0.x),c=texture2D(u33,vec2(.75,.5)).g;a.a+=(1.-b)*u52*abs(sin(c)),gl_FragColor=a;}",
                c: ["u33", "u52"],
                precision: "highp",
              },
              {
                id: "s56",
                name: "_",
                a:
                  "uniform sampler2D u33,u45,u36;uniform vec3 u42,u43;uniform float u53,u54;const vec3 g=vec3(.02,.02,.02),h=vec3(.3,.3,.3);const vec4 e=vec4(.25,.25,.25,.25);varying vec2 vv0;void main(){float a=step(.5,vv0.x);vec4 c=texture2D(u45,vv0);float d=texture2D(u33,vec2(.75,.5)).a;vec2 i=mix(vec2(.75,.75),vec2(0.,.75),a),j=mix(vec2(0.,.5),vec2(.25,.75),a),k=mix(vec2(.25,.5),vec2(.5,.75),a);float l=dot(e,texture2D(u36,i)),m=dot(e,texture2D(u36,j)),n=dot(e,texture2D(u36,k));vec3 o=mix(vec3(1.,1.,.2),u42,a),b=o*vec3(l,m,n);if(a>.5){vec3 p=texture2D(u33,vec2(.75,.5)).rgb;b=u43+b-p;}b*=d/u54;vec3 q=min(g*u53,h);vec4 r=mix(c,vec4(b,0.),vec4(q,0.));gl_FragColor=r;}",
                c: "u33 u45 u36 u53 u54 u42 u43".split(" "),
                precision: "highp",
              },
              {
                id: "s57",
                name: "_",
                a:
                  "uniform sampler2D u45;const vec4 h=vec4(.25,.25,.25,.25);varying vec2 vv0;void main(){float a=step(.5,vv0.x),c=mix(.02,5e-4,a),d=mix(.05,1e-3,a);vec3 b=texture2D(u45,vv0).rgb;float f=length(b),g=1.-smoothstep(c,d,f);gl_FragColor=vec4(b,g);}",
                c: ["u45"],
                precision: "highp",
              },
              {
                id: "s58",
                name: "_",
                j: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                a:
                  "uniform sampler2D u36;const vec4 g=vec4(1.,1.,1.,1.),h=vec4(0.,0.,0.,0.),e=vec4(.25,.25,.25,.25);const float f=3.1415;void main(){float a=dot(texture2D(u36,vec2(.25,.25)),e),b=dot(texture2D(u36,vec2(.5,.25)),e),c=f/2.*dot(texture2D(u36,vec2(.75,.25)),e),d=4.18*dot(texture2D(u36,vec2(0.,.25)),e);gl_FragColor=vec4(d,a,b,c);}",
                c: ["u36"],
              },
            ]);
            ab.Ag();
            qa = ha.instance({
              isPot: !0,
              Ik: !0,
              isFloat: !1,
              url: K.X + K.qa + K.um,
            });
            aa = ha.instance({
              isPot: !1,
              Ik: !0,
              isFloat: !1,
              width: Zc,
              height: Tc,
            });
            D.push(aa);
            R = ha.instance({
              isPot: !0,
              isFloat: !1,
              width: K.Oc,
            });
            K.Sc &&
              (Ra = ha.instance({
                isPot: !1,
                isFloat: !1,
                isLinear: !0,
                url: (-1 === K.De.indexOf("//") ? K.X + K.qa : "") + K.De,
              }));
            var ta = {
                width: 2,
                height: 1,
                isFloat: !0,
                isPot: !1,
                array: new Float32Array([
                  0,
                  K.borderWidth,
                  K.borderHeight,
                  0,
                  0,
                  0,
                  0,
                  0,
                ]),
              },
              Ga = {
                width: 2,
                height: 1,
                isFloat: !0,
                isPot: !1,
                array: new Float32Array([0, 0, 0, 0, 0, 0, 0, 0]),
              };
            ya.raw = ha.instance(ta);
            ya.oc = ha.instance(ta);
            ya.hc = Uc.instance(ta);
            ya.Vd = ha.instance(Ga);
            Ka = ha.instance(Ga);
            Aa = ha.instance(Ga);
            za = ha.instance({
              width: 1,
              height: 1,
              isFloat: !0,
              isPot: !1,
              array: new Float32Array([0, 0, 0, 0]),
            });
            la(K.X + K.xd + K.neuralNetworkPath, function (cb) {
              cb = JSON.parse(cb);
              M = new tb({
                Qc: cb.layers,
                Me: "gpuRawAvg",
                Je: ea,
              });
              f();
            });
            ma.set_videoRotation = function (cb) {
              Jb.rotate = cb;
              ma.ready && (Ob.Ze(mc.videoWidth, mc.videoHeight), Ob.ff());
            };
            ma.set_viewRotation = function () {};
            ma.resize = function (cb, wb) {
              function jb() {
                G();
                H && (clearTimeout(H), (H = null));
                if (!r)
                  if (K.width === Hb && K.height === Ab) l();
                  else if (h !== e.Y && h !== e.Aa) H = setTimeout(jb, K.qh);
                  else {
                    var ad = "undefined" === typeof $b ? !1 : $b.get_mode(),
                      Dc = h;
                    h = e.ua;
                    J = r = !0;
                    T = function () {
                      r = J = !1;
                      w();
                      v = K.Yb;
                      y && clearTimeout(y);
                      y = !1;
                      h = Dc;
                    };
                    K.width = Hb;
                    K.height = Ab;
                    ab.zg();
                    ab.Ag();
                    D.forEach(function (rc) {
                      rc.resize(Hb, Ab);
                    });
                    Ca.resize(Zc, Tc);
                    ab.ef();
                    Ob.Ze(
                      mc.videoWidth ? mc.videoWidth : mc.width,
                      mc.videoHeight ? mc.videoHeight : mc.height
                    );
                    Ob.ff();
                    Ob.Oh();
                    l();
                    h === e.Aa && ((h = e.Y), ma.switch_viewer3D(!0, !1));
                    ad && $b.switch_mode(ad);
                  }
              }
              if (ma.ready) {
                H && (clearTimeout(H), (H = null));
                G();
                var Hb = cb * lb.ae,
                  Ab = wb * lb.ae;
                H = setTimeout(jb, K.qh);
              }
            };
          },
          Ag: function () {
            Ea.f("s50", [
              {
                type: "1i",
                name: "u1",
                value: 0,
              },
              {
                type: "1i",
                name: "u33",
                value: 1,
              },
              {
                type: "2f",
                name: "u34",
                value: C,
              },
              {
                type: "1f",
                name: "u35",
                value: K.Rf,
              },
            ]);
            Ea.f("s51", [
              {
                type: "1i",
                name: "u36",
                value: 0,
              },
              {
                type: "1i",
                name: "u33",
                value: 1,
              },
              {
                type: "1f",
                name: "u39",
                value: K.gm,
              },
              {
                type: "1f",
                name: "u40",
                value: K.fi,
              },
              {
                type: "1f",
                name: "u41",
                value: K.bi,
              },
              {
                type: "3f",
                name: "u38",
                value: [K.hf[0] * C[0], K.hf[1] * C[1], K.hf[2]],
              },
            ]);
            Ea.f("s52", [
              {
                type: "1i",
                name: "u36",
                value: 0,
              },
              {
                type: "1i",
                name: "u33",
                value: 1,
              },
              {
                type: "1i",
                name: "u45",
                value: 2,
              },
              {
                type: "2f",
                name: "u44",
                value: K.lh,
              },
              {
                type: "3f",
                name: "u42",
                value: [-K.ka[0], -K.ka[1], K.ka[2]],
              },
              {
                type: "3f",
                name: "u43",
                value: K.Qh,
              },
            ]);
            Ea.f("s53", [
              {
                type: "1i",
                name: "u33",
                value: 0,
              },
              {
                type: "1i",
                name: "u46",
                value: 1,
              },
              {
                type: "1f",
                name: "u48",
                value: K.zf,
              },
              {
                type: "1f",
                name: "u47",
                value: K.Cd,
              },
              {
                type: "1f",
                name: "u49",
                value: K.sh,
              },
              {
                type: "1f",
                name: "u50",
                value: K.kh,
              },
            ]);
            Ea.f("s54", [
              {
                type: "1i",
                name: "u46",
                value: 1,
              },
              {
                type: "1i",
                name: "u51",
                value: 0,
              },
              {
                type: "1i",
                name: "u45",
                value: 2,
              },
            ]);
            Ea.f("s55", [
              {
                type: "1i",
                name: "u33",
                value: 0,
              },
              {
                type: "1f",
                name: "u52",
                value: K.sl,
              },
            ]);
            Ea.f("s56", [
              {
                type: "1i",
                name: "u36",
                value: 0,
              },
              {
                type: "1i",
                name: "u33",
                value: 1,
              },
              {
                type: "1i",
                name: "u45",
                value: 2,
              },
              {
                type: "3f",
                name: "u42",
                value: [-K.ka[0], -K.ka[1], K.ka[2]],
              },
              {
                type: "3f",
                name: "u43",
                value: K.Qh,
              },
            ]);
            Ea.f("s57", [
              {
                type: "1i",
                name: "u45",
                value: 0,
              },
            ]);
            Ea.f("s58", [
              {
                type: "1i",
                name: "u36",
                value: 0,
              },
            ]);
          },
          ef: function () {
            Wa.xh(ya.oc, aa, za, qa);
          },
          Sj: function () {
            return sb;
          },
          Dh: function (ea) {
            sb = ea;
          },
          pd: function () {
            Yb[0] = ia[0] - sb.offsetX;
            Yb[1] = ia[1] + sb.offsetY;
            Yb[2] = ia[2];
            Wa.Al(p, Na.Ha, Yb);
          },
          qd: function () {
            Wa.Bl(S * K.Ib, Na.Ib, sb.scale);
          },
          Vh: function () {
            Wa.Cl(Z + Na.ad);
          },
          jm: function () {
            Wa.yl(K.Ca + Na.Ca, K.sa + Na.sa);
          },
          lm: function () {
            Wa.zl((0 === Na.na[0] && 0 === Na.na[1] ? K : Na).na);
          },
          mf: function () {
            ab.pd();
            ab.qd();
            ab.Vh();
            ab.jm();
            ab.lm();
          },
          rl: function () {
            G();
            m && (clearInterval(m), (m = !1));
            va.isEnabled = !0;
            va.Xg = 0;
            Ua = Wa.Rj();
            ub = Nb.qg();
            Pa = Nb.og();
            ra = Na.Ib;
            wc = Na.Ha;
            Ba = Na.na;
            vb = Na.Ca;
            $a = Na.sa;
            J = !1;
            Wa.ld(!1);
          },
          ql: function (ea) {
            var ta = null,
              Ga = 0;
            ta = function () {
              2 === ++Ga &&
                ((va.isEnabled = !1),
                (Na.Ib = ra),
                (Na.Ha = wc),
                (Na.na = Ba),
                (Na.Ca = vb),
                (Na.sa = $a),
                ab.mf(),
                Wa.ja(Ua),
                l(),
                ea && ea());
            };
            h === e.Sb ? (h = e.Aa) : h === e.Tb && (h = e.Y);
            Wa.Qa(h === e.Y ? 0 : 1);
            Nb.replace(ub, ta);
            Nb.We(Pa, ta);
            ab.ef();
            Wa.ld(!0);
          },
          Oh: function () {
            var ea = Math.tan(od / 2);
            Wa.wh({
              ce: K.ce / ea,
              tl: ea,
              gl: wd,
              ya: K.ya,
              Uc: K.Uc,
              ai: C,
              ei: K.xm,
              bc: K.bc,
              qe: K.qe,
              oe: K.oe,
              pe: K.pe,
              na: K.na,
              Dd: K.Dd,
              Od: K.Od,
              Pe: K.Pe,
              Pb: K.Pb,
              Vl: K.Ih,
              Wl: K.Jh,
              kd: K.kd,
              Qb: K.Qb,
              Bc: K.Bc,
              Sd: K.Sd,
              Rd: K.Rd,
              Qd: K.Qd,
              Id: K.Id,
              Hd: K.X + K.qa + K.Hd,
              Ca: K.Ca,
              sa: K.sa,
              le: K.le,
              uf: K.uf,
              tf: K.tf,
              sd: K.sd,
              Em: K.Dm,
              Bm: xd,
              Sc: K.Sc,
              Kk: Ra,
              Rc: K.Rc,
              Ee: K.Ee,
              Ce: K.Ce,
              Jk: rb,
              gf: K.gf,
            });
          },
          Yi: function () {
            var ea = Jb.wd,
              ta = Jb.vd,
              Ga = 1 / Math.tan(od / 2),
              cb = Ub.U() / Ub.I();
            wd = [
              Ga,
              0,
              0,
              0,
              0,
              Ga / cb,
              0,
              0,
              0,
              0,
              -(ta + ea) / (ta - ea),
              -1,
              0,
              0,
              (-2 * ea * ta) / (ta - ea),
              0,
            ];
            xd = 1 / Math.tan((K.Am * Math.PI) / 360) / Ga;
          },
          Ze: function (ea, ta) {
            V = [0.5, 0.5];
            ea = ta / ea;
            ta = Ub.U() / Ub.I();
            90 === Math.abs(Jb.rotate) && (ea = 1 / ea);
            ea > ta ? (V[1] *= ta / ea) : (V[0] *= ea / ta);
            Y[0] = 0;
            Y[1] = 0;
            Y[2] = 0;
            Y[3] = 0;
            switch (Jb.rotate) {
              case 0:
                Y[0] = V[0];
                Y[3] = V[1];
                break;
              case 180:
                Y[0] = -V[0];
                Y[3] = -V[1];
                break;
              case 90:
                Y[1] = V[0];
                Y[2] = -V[1];
                break;
              case -90:
                (Y[1] = -V[0]), (Y[2] = V[1]);
            }
            od =
              2 *
              Math.atan(
                2 *
                  V[0] *
                  Math.tan(
                    ((1 < ea ? Jb.di : Jb.FOVdesktop) * Math.PI) / 180 / 2
                  )
              );
            ab.Yi();
          },
          ff: function () {
            Ea.f("s49", [
              {
                type: "1i",
                name: "u1",
                value: 0,
              },
              {
                type: "mat2",
                name: "u32",
                value: Y,
              },
            ]);
          },
          te: function (ea, ta) {
            X || ab.zg();
            ab.nk(ea, ta);
            ab.h();
            if (!ab.kk())
              return (
                ma.Ya && ma.Ya("GL_INCOMPATIBLE", "Cannot init JEEFITAPI"), !1
              );
            ab.xg();
            return !0;
          },
          nk: function (ea, ta) {
            ma.kb = document.createElement("canvas");
            ma.jb = document.createElement("canvas");
            ma.jb.width = K.width;
            ma.jb.height = K.height;
            ma.gi = ma.jb.getContext("2d");
            ma.replace_video = function (Ga) {
              mc = Ga;
              pd.ga_ = mc;
              return !0;
            };
            ma.Xb = ma.kb.getContext("2d");
            ma.capture_background = function (Ga, cb) {
              Ga = "undefined" === typeof Ga ? ea : Ga;
              cb = "undefined" === typeof cb ? ta : cb;
              ma.kb.width = Ga;
              ma.kb.height = cb;
              var wb = Ga / cb,
                jb = 0,
                Hb = 0;
              if (ea / ta > wb) {
                var Ab = ta * wb;
                wb = ta;
                jb = Math.round((ea - Ab) / 2);
              } else
                (Ab = ea), (wb = ea / wb), (Hb = Math.round((ta - wb) / 2));
              ma.Xb.save();
              ma.Xb.translate(Ga, 0);
              ma.Xb.scale(-1, 1);
              ma.Xb.drawImage(mc, jb, Hb, Ab, wb, 0, 0, Ga, cb);
              ma.Xb.restore();
              Ga = document.createElement("canvas");
              Ga.width = ma.kb.width;
              Ga.height = ma.kb.height;
              Ga.getContext("2d").drawImage(ma.kb, 0, 0);
              return Ga;
            };
          },
          xg: function () {
            window.CanvasListeners &&
              ($b.init({
                ma: Ub.bb(),
              }),
              (ma.init_listeners = ab.xg),
              (ma.add_listener = $b.add_listener),
              (ma.remove_listener = $b.remove_listener),
              (ma.animate_swipe = $b.animate_swipe),
              (ma.switch_modeInteractor = $b.switch_mode),
              (ma.get_modeInteractor = $b.get_mode),
              $b
                .add_listener(
                  "move",
                  function (ea, ta) {
                    h === e.Y &&
                      (K.Lk &&
                        ((sb.offsetX -= ta[0] * K.Pg),
                        (sb.offsetX = Math.min(
                          Math.max(sb.offsetX, -K.Tc),
                          K.Tc
                        ))),
                      (sb.offsetY -= ta[1] * K.Pg),
                      (sb.offsetY = Math.min(
                        Math.max(sb.offsetY, -K.Tc),
                        K.Tc
                      )),
                      ab.pd());
                  },
                  !0
                )
                .add_listener(
                  "pinch",
                  function (ea, ta) {
                    h === e.Y &&
                      ((sb.scale += ta * K.Mk),
                      (sb.scale = Math.min(
                        Math.max(sb.scale, K.Qg[0]),
                        K.Qg[1]
                      )),
                      ab.qd());
                  },
                  !0
                ));
          },
          kk: function () {
            return Ca.h({
              Pc: !1,
              Wi: !1,
              expand: !1,
              ma: Ub.bb(),
              zb: Ub,
              onload: function () {
                E = sc.instance({
                  Za: K.X + K.qa + Sb.vm,
                  pb: K.X + K.qa + Sb.wm,
                  ob: Sb.Zh,
                  qb: Sb.$h,
                });
                K.Db ? ((x = sc.instance({})), fb.ib.ja(x)) : (x = E);
                Wa.ja(x);
                ka = K.Db
                  ? Jd.instance({
                      Gk: x,
                      Ek: E,
                    })
                  : E;
                ab.Oh();
                fa.model && ab.Ng(fa.model);
                ab.xl();
                f();
                ma.sc.forEach(function (ea) {
                  ea();
                });
                ma.sc.splice(0);
              },
            });
          },
          xl: function () {
            ma.load_model = function (ea, ta, Ga) {
              if (ma.isBusy) return !1;
              ma.isBusy = !0;
              if (fa.model)
                ma.set_model(
                  ea,
                  function () {
                    ma.set_materials(ta, function () {
                      ma.isBusy = !1;
                      Ga && Ga();
                    });
                  },
                  function () {
                    ma.isBusy = !1;
                  }
                );
              else {
                var cb = K.X + K.qa + K.Ge + "/",
                  wb = ta.map(function (jb) {
                    return cb + jb;
                  });
                fa.model = {
                  url: K.X + K.qa + K.Ie + "/" + ea,
                  fc: wb,
                  mb: !1,
                  lb: !1,
                };
                ab.Ng(fa.model, function () {
                  ma.isBusy = !1;
                  Ga && Ga();
                });
              }
              return !0;
            };
            ma.set_offset = function (ea) {
              ia = ea;
              ab.pd();
            };
            ma.set_scale = function (ea) {
              S = ea;
              ab.qd();
            };
            ma.set_rx = function (ea) {
              Z = ea;
              ab.Vh();
            };
            ma.switch_shadow = Wa.df;
            ma.switch_bgBlur = Wa.cf;
            ma.set_zoom = Wa.Ue;
            ma.is_viewer3D = function () {
              return h === e.Aa;
            };
            ma.switch_viewer3D = function (ea, ta) {
              if (
                h === e.Sb ||
                h === e.Tb ||
                (h === e.Y && !ea) ||
                (h === e.Aa && ea) ||
                J
              )
                return !1;
              if (h === e.ua)
                return q !== e.Aa || ea
                  ? q === e.Y && ea
                    ? ((q = e.Aa), Wa.ja(E), Wa.Qa(1), ta && ta(), !0)
                    : !1
                  : ((q = e.Y), Wa.ja(x), Wa.Qa(0), ta && ta(), !0);
              var Ga = 0,
                cb = -1,
                wb = 0;
              h === e.Y
                ? ((h = e.Sb), (cb = K.Cm))
                : h === e.Aa && ((h = e.Tb), (cb = K.Fm));
              var jb = Date.now();
              m = setInterval(function () {
                var Hb = Date.now();
                Ga += (Hb - jb) / cb;
                1 <= Ga &&
                  ((Ga = 1),
                  h === e.Sb ? ((h = e.Aa), Wa.ja(E)) : ((h = e.Y), Wa.ja(x)),
                  ta && ta(),
                  clearInterval(m),
                  (m = !1));
                var Ab = h === e.Tb || h === e.Y ? 1 - K.zm(Ga) : K.ym(Ga);
                Wa.Qa(Ab);
                (h !== e.Tb && h !== e.Sb) ||
                  0 !== wb++ % 2 ||
                  (Wa.ja(ka), ka.Ql(Ab));
                jb = Hb;
              }, 0.016);
              return !0;
            };
            ma.capture_image = function (ea, ta, Ga, cb) {
              ca = ea;
              J = !0;
              "undefined" === typeof isAllocate && (Ga = !1);
              (cb = "undefined" === typeof cb ? !1 : cb) && Wa.ld(!1);
              B();
              T = function () {
                Wa.nh(0);
                g.flush();
                var wb = Ub.lg(Ga);
                ta(wb);
                cb && Wa.ld(!0);
              };
            };
            ma.capture_detection = function (ea, ta) {
              ca = ea;
              J = !0;
              T = function () {
                var Ga = yd.instance({
                  Pd: ya.oc.clone(),
                  Tg: Nb.qg(),
                  Sg: Nb.og(),
                  background: aa.clone(),
                  Oa: fb.ib.dk().clone(),
                  Fe: sb,
                });
                ta(Ga);
              };
            };
            ma.process_offlineRendering = function (ea, ta, Ga, cb, wb) {
              function jb() {
                if (2 === ++Hb) {
                  va.Oa || (va.Oa = sc.instance({}));
                  ea.ng() &&
                    (va.Oa.Ch(ea.ng()), K.en ? Wa.ja(E) : Wa.ja(va.Oa));
                  va.Td.set();
                  l();
                  va.Td = !1;
                  ab.ql(
                    cb
                      ? function () {
                          Ub.bb().parentNode.removeChild(ma.jb);
                        }
                      : !1
                  );
                  var Ab = Ub.lg(!1);
                  setTimeout(function () {
                    wb(Ab);
                  }, 1);
                }
              }
              ab.rl();
              cb &&
                (ma.gi.drawImage(Ub.bb(), 0, 0),
                Ub.bb().parentNode.insertBefore(ma.jb, Ub.bb()),
                ma.jb.setAttribute("class", "jeefitMask"));
              va.Td = ea;
              var Hb = 0;
              ma.set_model(ta, function () {
                jb();
                ma.set_materials(Ga, function () {
                  setTimeout(jb, 1);
                });
              });
            };
            ma.serialize_detection = function (ea) {
              return ea.jc();
            };
            ma.unserialize_detection = function (ea, ta, Ga) {
              return yd.pc(ea, ta, Ga);
            };
            ma.do_instantDetection = function (ea, ta) {
              zd.h(ya.oc);
              zd.start(ea, ta);
            };
            ma.relieve_DOM = function (ea) {
              if (r) return !1;
              v = 160;
              a = !1;
              y && clearTimeout(y);
              y = setTimeout(function () {
                v = K.Yb;
                y = !1;
                w();
              }, ea);
              return !0;
            };
            ma.switch_slow = function (ea, ta) {
              if (r) return !1;
              "undefined" === typeof ta && (ta = K.hj);
              y && ((v = K.Yb), w(), clearTimeout(y), (y = !1));
              ea ? (a = !1) : w();
              v = ea ? ta : K.Yb;
              return !0;
            };
            ma.switch_deepSleep = function (ea) {
              if (I === ea) return !1;
              I = !1;
              ma.switch_sleep(ea);
              I = ea;
              return !0;
            };
            ma.switch_sleep = function (ea) {
              if (!r && !I) {
                if ((ea && h === e.ua) || (!ea && h !== e.ua)) return !1;
                m && (clearInterval(m), (m = !1));
                h === e.Tb
                  ? ((h = e.Y), Wa.ja(x), Wa.Qa(0))
                  : h === e.Sb && ((h = e.Aa), Wa.ja(E), Wa.Qa(1));
                G();
                ea ? ((A = !1), (q = h), (h = e.ua)) : ((h = q), l());
                return !0;
              }
            };
            ma.set_modelStandalone = function (ea, ta) {
              Wa.md(!1);
              qd.instance({
                url: ea.model,
                fc: ea.materials,
                mb: !1,
                lb: !1,
                M: function (Ga) {
                  ta && ta();
                  Wa.xf(Ga);
                  Nb && (Wa.ml(Nb), Nb.remove());
                  Nb = Ga;
                  ab.af();
                  Wa.md(!0);
                },
              });
            };
            ma.start_rendering = ab.af;
            ma.update_material = function (ea, ta) {
              Nb && Nb.mm(ea, ta);
            };
            ma.set_model = function (ea, ta, Ga) {
              Nb &&
                Nb.replace(
                  "http" === ea.substring(0, 4).toLowerCase()
                    ? ea
                    : K.X + K.qa + K.Ie + "/" + ea,
                  function () {
                    ta && ta(Nb.Zi());
                  },
                  Ga
                );
            };
            ma.set_tweaker = function (ea, ta) {
              function Ga(cb) {
                ma.wf(cb);
                ta && ta();
              }
              "string" === typeof ea
                ? la(K.X + K.qa + K.hm + "/" + ea, Ga)
                : Ga(ea);
            };
            ma.wf = function (ea) {
              ea &&
                (ea.preOffset && (Na.Ha = ea.preOffset),
                ea.preScale && (Na.Ib = ea.preScale),
                ea.rx && (Na.ad = ea.rx),
                ea.beginBendZ && (Na.Ca = ea.beginBendZ),
                ea.bendStrength && (Na.sa = ea.bendStrength),
                ea.maskBranchStartEnd && (Na.na = ea.maskBranchStartEnd),
                ma.ready && ab.mf());
            };
            ma.set_materials = function (ea, ta) {
              if (Nb) {
                var Ga = K.X + K.qa + K.Ge + "/";
                ea = ea.map(function (cb) {
                  var wb = cb;
                  "string" === typeof cb &&
                    ((wb = Ga + cb), (wb = wb.replace(/([^:])\/\//, "$1/")));
                  return wb;
                });
                Nb.We(ea, ta);
              }
            };
          },
          af: function () {
            Mb ||
              ((Mb = !0),
              Ca.lf(lb.Ej),
              ab.mf(),
              Wa.am(),
              ma.tc.forEach(function (ea) {
                ea();
              }),
              ma.tc.splice(0),
              f());
          },
          Ng: function (ea, ta) {
            Nb = qd.instance({
              M: function () {
                ab.af();
                ta && ta();
              },
              url: ea.url,
              fc: ea.fc,
              mb: ea.mb,
              lb: ea.lb,
            });
            Wa.xf(Nb);
          },
          fm: function () {
            K.Db && fb.ib.Xe(Sb);
          },
        };
      return ab;
    }

    function Da(b) {
      return 3 === arguments.length ? this.$a(arguments) : this.set(b);
    }

    function Ha(b, f) {
      f = Math.floor(f);
      b.r = ((f >> 16) & 255) / 255;
      b.S = ((f >> 8) & 255) / 255;
      b.F = (f & 255) / 255;
    }

    function Va(b, f) {
      function n(B) {
        void 0 !== B &&
          1 > parseFloat(B) &&
          console.warn(
            "JETHREE.Color: Alpha component of " + f + " will be ignored."
          );
      }
      var l;
      if ((l = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(f))) {
        var t = l[2];
        switch (l[1]) {
          case "rgb":
          case "rgba":
            if (
              (l = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                t
              ))
            ) {
              b.r = Math.min(255, parseInt(l[1], 10)) / 255;
              b.S = Math.min(255, parseInt(l[2], 10)) / 255;
              b.F = Math.min(255, parseInt(l[3], 10)) / 255;
              n(l[5]);
              return;
            }
            if (
              (l = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                t
              ))
            ) {
              b.r = Math.min(100, parseInt(l[1], 10)) / 100;
              b.S = Math.min(100, parseInt(l[2], 10)) / 100;
              b.F = Math.min(100, parseInt(l[3], 10)) / 100;
              n(l[5]);
              return;
            }
            break;
          case "hsl":
          case "hsla":
            if (
              (l = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
                t
              ))
            ) {
              t = parseFloat(l[1]) / 360;
              var w = parseInt(l[2], 10) / 100,
                G = parseInt(l[3], 10) / 100;
              n(l[5]);
              b.wl(t, w, G);
              return;
            }
        }
      } else if ((l = /^#([A-Fa-f0-9]+)$/.exec(f))) {
        l = l[1];
        t = l.length;
        if (3 === t) {
          b.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255;
          b.S = parseInt(l.charAt(1) + l.charAt(1), 16) / 255;
          b.F = parseInt(l.charAt(2) + l.charAt(2), 16) / 255;
          return;
        }
        if (6 === t) {
          b.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255;
          b.S = parseInt(l.charAt(2) + l.charAt(3), 16) / 255;
          b.F = parseInt(l.charAt(4) + l.charAt(5), 16) / 255;
          return;
        }
      }
      f &&
        0 < f.length &&
        ((l = Ad[f]),
        void 0 !== l
          ? Ha(b, l)
          : console.warn("JETHREE.Color: Unknown color " + f));
    }

    function xb(b, f, n, l) {
      this.l = b || 0;
      this.m = f || 0;
      this.o = n || 0;
      this.C = void 0 !== l ? l : 1;
    }

    function Vb(b, f, n) {
      var l = f.l,
        t = f.m,
        w = f.o;
      f = f.C;
      var G = n.l,
        B = n.m,
        x = n.o;
      n = n.C;
      b.l = l * n + f * G + t * x - w * B;
      b.m = t * n + f * B + w * G - l * x;
      b.o = w * n + f * x + l * B - t * G;
      b.C = f * n - l * G - t * B - w * x;
      return b;
    }

    function Cb(b, f) {
      this.x = b || 0;
      this.y = f || 0;
    }

    function Xa(b, f, n) {
      this.x = b || 0;
      this.y = f || 0;
      this.z = n || 0;
    }

    function Rb(b, f) {
      var n = b.x,
        l = b.y,
        t = b.z;
      b.x = l * f.z - t * f.y;
      b.y = t * f.x - n * f.z;
      b.z = n * f.y - l * f.x;
    }

    function bc(b, f, n, l) {
      this.l = b || 0;
      this.m = f || 0;
      this.o = n || 0;
      this.Ka = l || bc.ci;
    }

    function qc(b, f) {
      this.min = void 0 !== b ? b : new Xa(Infinity, Infinity, Infinity);
      this.max = void 0 !== f ? f : new Xa(-Infinity, -Infinity, -Infinity);
    }

    function Kb(b) {
      return new Xa().uc(b.min, b.max).xa(0.5);
    }

    function nc(b, f) {
      b.min.min(f);
      b.max.max(f);
    }

    function tc() {
      this.elements = new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
      ]);
      0 < arguments.length &&
        console.error(
          "JETHREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
    }

    function cc(b, f, n) {
      var l = f.elements,
        t = n.elements;
      n = b.elements;
      f = l[0];
      var w = l[4],
        G = l[8],
        B = l[12],
        x = l[1],
        E = l[5],
        O = l[9],
        C = l[13],
        P = l[2],
        z = l[6],
        F = l[10],
        H = l[14],
        r = l[3],
        X = l[7],
        D = l[11];
      l = l[15];
      var p = t[0],
        v = t[4],
        y = t[8],
        M = t[12],
        V = t[1],
        Y = t[5],
        ia = t[9],
        S = t[13],
        Z = t[2],
        aa = t[6],
        R = t[10],
        qa = t[14],
        ya = t[3],
        Ka = t[7],
        Aa = t[11];
      t = t[15];
      n[0] = f * p + w * V + G * Z + B * ya;
      n[4] = f * v + w * Y + G * aa + B * Ka;
      n[8] = f * y + w * ia + G * R + B * Aa;
      n[12] = f * M + w * S + G * qa + B * t;
      n[1] = x * p + E * V + O * Z + C * ya;
      n[5] = x * v + E * Y + O * aa + C * Ka;
      n[9] = x * y + E * ia + O * R + C * Aa;
      n[13] = x * M + E * S + O * qa + C * t;
      n[2] = P * p + z * V + F * Z + H * ya;
      n[6] = P * v + z * Y + F * aa + H * Ka;
      n[10] = P * y + z * ia + F * R + H * Aa;
      n[14] = P * M + z * S + F * qa + H * t;
      n[3] = r * p + X * V + D * Z + l * ya;
      n[7] = r * v + X * Y + D * aa + l * Ka;
      n[11] = r * y + X * ia + D * R + l * Aa;
      n[15] = r * M + X * S + D * qa + l * t;
      return b;
    }

    function Ec(b, f, n, l, t, w) {
      this.va = b;
      this.F = f;
      this.wa = n;
      this.Fa = l instanceof Xa ? l : new Xa();
      this.rd = Array.isArray(l) ? l : [];
      this.color = t instanceof Da ? t : new Da();
      this.qf = Array.isArray(t) ? t : [];
      this.Eb = void 0 !== w ? w : 0;
    }

    function Rc(b, f, n) {
      var l = new XMLHttpRequest();
      l.open("GET", b, !0);
      var t = (l.withCredentials = !1);
      l.onreadystatechange = function () {
        404 !== l.status || t || ((t = !0), n && n(404));
        if (4 === l.readyState && 200 === l.status) {
          var w = null;
          try {
            w = JSON.parse(l.responseText);
          } catch (G) {
            n && n(-1);
          }
          f && w && f(w);
        }
      };
      l.onerror = function () {
        n && n(0);
      };
      l.send();
    }

    function fc(b, f, n) {
      "object" === typeof b ? f(b) : Rc(b, f, n);
    }

    function Hc(b, f) {
      for (var n = new Xa(), l = new Xa(), t = 0, w = f.length; t < w; t++) {
        var G = f[t],
          B = b[G.va],
          x = b[G.F];
        n.Ta(b[G.wa], x);
        l.Ta(B, x);
        Rb(n, l);
        0 !== n.ve() && (n.normalize(), G.Fa.B(n));
      }
    }

    function Oc(b, f) {
      for (var n = Array(b.length), l = 0, t = b.length; l < t; ++l)
        n[l] = new Xa();
      l = new Xa();
      t = new Xa();
      for (var w = 0, G = f.length; w < G; ++w) {
        var B = f[w],
          x = b[B.va],
          E = b[B.F];
        l.Ta(b[B.wa], E);
        t.Ta(x, E);
        Rb(l, t);
        n[B.va].add(l);
        n[B.F].add(l);
        n[B.wa].add(l);
      }
      l = 0;
      for (b = b.length; l < b; ++l) n[l].normalize();
      b = 0;
      for (l = f.length; b < l; ++b)
        (t = f[b]),
          (w = t.rd),
          3 === w.length
            ? (w[0].B(n[t.va]), w[1].B(n[t.F]), w[2].B(n[t.wa]))
            : ((w[0] = n[t.va].clone()),
              (w[1] = n[t.F].clone()),
              (w[2] = n[t.wa].clone()));
      return n;
    }

    function oc(b, f, n, l) {
      function t(M) {
        v.B(f[M]);
        y.B(v);
        var V = B[M];
        D.B(V);
        D.sub(v.xa(v.Dc(V))).normalize();
        var Y = y.x,
          ia = y.y,
          S = y.z,
          Z = V.x,
          aa = V.y;
        V = V.z;
        p.x = ia * V - S * aa;
        p.y = S * Z - Y * V;
        p.z = Y * aa - ia * Z;
        Y = 0 > p.Dc(x[M]) ? -1 : 1;
        G[4 * M] = D.x;
        G[4 * M + 1] = D.y;
        G[4 * M + 2] = D.z;
        G[4 * M + 3] = Y;
      }
      for (
        var w = b.length,
          G = new Float32Array(4 * w),
          B = Array(w),
          x = Array(w),
          E = 0;
        E < w;
        E++
      )
        (B[E] = new Xa()), (x[E] = new Xa());
      var O = new Xa(),
        C = new Xa(),
        P = new Xa(),
        z = new Cb(),
        F = new Cb(),
        H = new Cb(),
        r = new Xa(),
        X = new Xa();
      l.forEach(function (M) {
        var V = M.va,
          Y = M.F;
        M = M.wa;
        O.B(b[V]);
        C.B(b[Y]);
        P.B(b[M]);
        z.B(n[V]);
        F.B(n[Y]);
        H.B(n[M]);
        var ia = C.x - O.x,
          S = P.x - O.x,
          Z = C.y - O.y,
          aa = P.y - O.y,
          R = C.z - O.z,
          qa = P.z - O.z,
          ya = F.x - z.x,
          Ka = H.x - z.x,
          Aa = F.y - z.y,
          ba = H.y - z.y,
          A = 1 / (ya * ba - Ka * Aa);
        r.set(
          (ba * ia - Aa * S) * A,
          (ba * Z - Aa * aa) * A,
          (ba * R - Aa * qa) * A
        );
        X.set(
          (ya * S - Ka * ia) * A,
          (ya * aa - Ka * Z) * A,
          (ya * qa - Ka * R) * A
        );
        B[V].add(r);
        B[Y].add(r);
        B[M].add(r);
        x[V].add(X);
        x[Y].add(X);
        x[M].add(X);
      });
      var D = new Xa(),
        p = new Xa(),
        v = new Xa(),
        y = new Xa();
      l.forEach(function (M) {
        t(M.va);
        t(M.F);
        t(M.wa);
      });
      return G;
    }

    function Ac(b, f, n, l) {
      return Math.sqrt((b - n) * (b - n) + (f - l) * (f - l));
    }
    var fa = {
        Qf: !0,
        cn: !1,
        dn: !1,
        gj: !1,
        Pf: !1,
        bn: !1,
        Ea: !1,
        hl: !1,
        Pc: !1,
        Dn: !1,
        X: "",
        Pk: "",
        Fi: 700,
        Ei: 200,
        Sf: !1,
        pm: !1,
        qm: !1,
        om: !1,
        li: 3,
        vb: !1,
        Bf: !0,
        Za: "images/backgrounds/interior2.jpg",
        pb: "images/backgrounds/interior_light.jpg",
        Hi: [256, 256, 512, 512],
        ob: 2.1,
        qb: 8,
        Gi: [64, 128, 256, 256],
        rk: [60, 96, 160, 250],
        qk: [8, 12, 18, 40],
        Hb: 2.2,
        Zc: 1,
        Jd: 300,
        Ff: 500,
        Kd: 50,
        Ri: 0,
        Si: 0,
        Tm: 45,
        Vm: 1,
        Um: 1e3,
        Gf: 20,
        Gm: 10,
        Hm: 10,
        Im: 5,
        dl: 0.1,
        dh: 20,
        gh: 100,
        hh: 100,
        cl: -Math.PI / 3,
        bl: Math.PI / 3,
        fh: 0,
        Ph: 0,
        Aj: [40, 32, 16, 16],
        ki: [0, 0.87, 0.92, 0.9],
        $k: 2,
        Xk: 100,
        Z: !1,
        mi: 16,
        ni: 0.4,
        pi: [0.72, 0.73, 0.72, 0.74],
        Ai: 1.2,
        xi: [0.5, 0.5, 0.5, 1],
        Ci: 140,
        Bi: 280,
        Di: 1.2,
        ri: 20,
        si: 40,
        zi: [6, 9, 9, 12],
        wi: [0.03, 0.02, 0.02, 0.018],
        vi: [0.35, 0.35, 0.4, 0.5],
        ti: [0.2, 0.2, 0.2, 0.2],
        oi: [0.1, 0.15, 0.15, 0.15],
        yi: [200, 200, 150, 120],
        ui: [1, 2, 3, 5],
        Xl: 1.1,
        Un: [0.25, 0.5, 1, 2],
        Vn: 256,
        Tn: 256,
        Sn: 200,
        Yl: [40, 80, 200, 500],
        Zl: [35, 45, 80, 120],
        aj: !0,
        bj: "CCW",
      },
      Ic = {},
      Ea = (function () {
        function b(y, M, V) {
          M = y.createShader(M);
          y.shaderSource(M, V);
          y.compileShader(M);
          return y.getShaderParameter(M, y.COMPILE_STATUS) ? M : !1;
        }

        function f(y, M, V) {
          M = b(y, y.VERTEX_SHADER, M);
          V = b(y, y.FRAGMENT_SHADER, V);
          y === g && G.push(M, V);
          var Y = y.createProgram();
          y.attachShader(Y, M);
          y.attachShader(Y, V);
          y.linkProgram(Y);
          return Y;
        }

        function n(y, M) {
          void 0 === M.j &&
            (M.j =
              "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}");
          void 0 === M.D && (M.D = ["a0"]);
          void 0 === M.K && (M.K = [2]);
          if (void 0 === M.precision || "highp" === M.precision)
            M.precision = C;
          M.id = E++;
          void 0 !== M.ul &&
            M.ul.forEach(function (Y, ia) {
              M.a = M.a.replace(Y, M.za[ia]);
            });
          M.rf = 0;
          M.K.forEach(function (Y) {
            M.rf += 4 * Y;
          });
          M.ha = f(y, M.j, "precision " + M.precision + " float;\n" + M.a);
          M.u = {};
          M.c.forEach(function (Y) {
            M.u[Y] = y.getUniformLocation(M.ha, Y);
          });
          M.attributes = {};
          M.ra = [];
          M.D.forEach(function (Y) {
            var ia = y.getAttribLocation(M.ha, Y);
            M.attributes[Y] = ia;
            M.ra.push(ia);
          });
          if (M.s) {
            y.useProgram(M.ha);
            x = M;
            B = M.id;
            for (var V in M.s) y.uniform1i(M.u[V], M.s[V]);
          }
          M.Ab = !0;
        }

        function l(y) {
          ac.Fh(v);
          B !== y.id &&
            (v.G(),
            (B = y.id),
            (x = y),
            g.useProgram(y.ha),
            y.ra.forEach(function (M) {
              0 !== M && g.enableVertexAttribArray(M);
            }));
        }

        function t(y, M, V) {
          n(y, M, V);
          y.useProgram(M.ha);
          y.enableVertexAttribArray(0);
          B = -1;
          return (x = M);
        }

        function w() {
          return {
            a:
              "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
            c: ["u1"],
            s: {
              u1: 0,
            },
          };
        }
        var G = [],
          B = -1,
          x = null,
          E = 0,
          O = !1,
          C = "highp",
          P = ["u1"],
          z = ["u0"],
          F = {
            u1: 0,
          },
          H = {
            u0: 0,
          },
          r = {
            u1: 0,
            u2: 1,
          },
          X = {
            u3: 0,
          },
          D = {
            s0: w(),
            s1: {
              a:
                "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
              c: P,
              s: F,
              precision: "lowp",
            },
            s2: {
              a:
                "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}",
              c: ["u1", "u2"],
              s: r,
            },
            s3: {
              a:
                "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}",
              c: P,
              s: F,
            },
            s4: {
              a:
                "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}",
              c: ["u1", "u2"],
              s: r,
            },
            s5: {
              a:
                "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}",
              c: P,
              s: F,
            },
            s6: {
              a:
                "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}",
              c: P,
              s: F,
            },
            s7: {
              a:
                "uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}",
              c: ["u0", "u4"],
              s: H,
            },
            s8: {
              a:
                "uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}",
              c: ["u0", "u4"],
              s: H,
            },
            s9: {
              a:
                "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}",
              c: P,
              s: F,
            },
            s10: {
              a:
                "uniform sampler2D u1,u5;uniform float u6;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u5,vv0);gl_FragColor=mix(b,a,u6*f);}",
              c: ["u1", "u5", "u6"],
              s: {
                u1: 0,
                u5: 1,
              },
            },
            s11: {
              a:
                "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u7)+texture2D(u1,vv0+u7*vec2(1.,-1.))+texture2D(u1,vv0+u7*vec2(-1.,-1.))+texture2D(u1,vv0+u7*vec2(-1.,1.)));}",
              c: ["u1", "u7"],
              s: F,
            },
            s12: {
              a:
                "uniform sampler2D u1;uniform vec4 u8;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u8);gl_FragColor=j(a);}",
              c: ["u1", "u8"],
              s: F,
            },
            s13: {
              a:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}",
              c: z,
              s: H,
            },
            s14: {
              a:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}",
              c: z,
              s: H,
            },
            s15: {
              a:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}",
              c: z,
              s: H,
            },
            s16: {
              a:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}",
              c: z,
              s: H,
            },
            s17: {
              a:
                "uniform sampler2D u0,u6,u9;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u6,vv0),d=texture2D(u9,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}",
              c: ["u0", "u6", "u9"],
              s: {
                u0: 0,
                u6: 1,
                u9: 2,
              },
            },
            s18: {
              a:
                "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}",
              c: z,
              s: H,
            },
            s19: {
              a:
                "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}",
              c: z,
              s: H,
            },
            s20: {
              a:
                "uniform sampler2D u0,u10;uniform float u11;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u10,e);float b=u11*u11;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}",
              c: ["u0", "u10", "u11"],
              s: {
                u0: 0,
                u10: 1,
              },
            },
            s21: {
              a:
                "uniform sampler2D u1;uniform vec2 u12;varying vec2 vv0;void main(){float a=u12.x*u12.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u12.y),f=floor(u12.x*fract(b*u12.y)),g=(f*u12.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",
              c: ["u1", "u12"],
              s: F,
            },
            s22: {
              a:
                "uniform sampler2D u13,u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u15,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u13,b),f=texture2D(u14,c);gl_FragColor=d*f;}",
              c: ["u13", "u14", "u15"],
              s: {
                u14: 0,
                u13: 1,
                u15: 2,
              },
            },
            s23: {
              a:
                "uniform float u16;uniform sampler2D u13,u14;varying vec2 vv0;void main(){vec2 a=fract(vv0*u16);vec4 b=texture2D(u13,vv0),c=texture2D(u14,a);gl_FragColor=b*c;}",
              c: ["u14", "u13", "u16"],
              s: {
                u14: 0,
                u13: 1,
              },
            },
            s24: {
              a:
                "uniform float u16;uniform sampler2D u13,u14,u17,u18,u19,u20;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 h=vv0*u16,l=floor(h),c=h-l;vec4 m=texture2D(u13,vv0),d=texture2D(u14,c),a=texture2D(u20,vv0);a=a*255.;vec4 n=texture2D(u17,c),o=texture2D(u18,c),p=texture2D(u19,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b;d=i*d+j*n+k*o+q*p,gl_FragColor=m*d;}",
              c: "u13 u14 u16 u20 u17 u18 u19".split(" "),
              s: {
                u14: 0,
                u13: 1,
                u20: 3,
                u17: 4,
                u18: 5,
                u19: 6,
              },
            },
            s25: {
              a:
                "uniform sampler2D u13,u14,u21;uniform float u16,u22,u23,u24;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u22*vv0),b=u22*vv0-a;float c=u16/u22;vec2 d=floor(b*c),f=b*c-d,g=(a+f)/u22;float k=u22*u24/u16;vec2 l=k*d,h=(l+f*u23)/u24,i=step(h,j);vec4 m=texture2D(u13,g),n=texture2D(u14,h),o=m*n*i.x*i.y,p=texture2D(u21,g);gl_FragColor=o*u23*u23+p;}",
              c: "u13 u14 u16 u22 u23 u24 u21".split(" "),
              s: {
                u14: 0,
                u13: 1,
                u21: 2,
              },
            },
            s26: {
              a:
                "uniform sampler2D u13,u14;varying vec2 vv0;void main(){vec4 a=texture2D(u13,vv0),b=texture2D(u14,vv0);gl_FragColor=a*b;}",
              c: ["u13", "u14"],
              s: {
                u14: 0,
                u13: 1,
              },
            },
            s27: {
              a:
                "uniform sampler2D u1,u21;uniform float u25;varying vec2 vv0;void main(){gl_FragColor=texture2D(u21,vv0)+u25*texture2D(u1,vv0);}",
              c: ["u1", "u21", "u25"],
              s: {
                u1: 0,
                u21: 1,
              },
            },
            s28: {
              a:
                "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",
              c: P,
              s: F,
              precision: "lowp",
            },
            s29: {
              a:
                "varying vec2 vv0;uniform sampler2D u1;uniform float u26;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u26)).rgb,c=texture2D(u1,vv0+vec2(u26,u26)).rgb,d=texture2D(u1,vv0+vec2(u26,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}",
              c: ["u1", "u26"],
              s: F,
              precision: "lowp",
            },
            s30: {
              a:
                "varying vec2 vv0;uniform sampler2D u1;uniform float u26;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u26)).rgb,c=texture2D(u1,vv0+vec2(u26,u26)).rgb,d=texture2D(u1,vv0+vec2(u26,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
              c: ["u1", "u26"],
              s: F,
              precision: "lowp",
            },
            s31: {
              a:
                "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u27;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u27,vv0.y-u27))*1.,a-=texture2D(u1,vec2(vv0.x-u27,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u27,vv0.y+u27))*1.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y-u27))*1.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y+u27))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u27,vv0.y-u27))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u27))*2.,b-=texture2D(u1,vec2(vv0.x+u27,vv0.y-u27))*1.,b+=texture2D(u1,vec2(vv0.x-u27,vv0.y+u27))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u27))*2.,b+=texture2D(u1,vec2(vv0.x+u27,vv0.y+u27))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",
              c: ["u1", "u2", "u27"],
              s: r,
            },
            s32: {
              a:
                "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u27;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u27,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}",
              c: ["u1", "u2", "u27"],
              s: r,
            },
            s33: {
              a:
                "uniform sampler2D u3;uniform vec2 u7;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u7*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u7*h),d=texture2D(u3,a+u7*i),j=texture2D(u3,a+u7),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}",
              c: ["u3", "u7"],
              s: X,
            },
            s34: {
              a:
                "uniform sampler2D u3;uniform vec2 u7;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u7*k),d=texture2D(u3,a+u7*l),g=texture2D(u3,a+u7),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u7*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u7*m),d=f(a+u7*2.),g=f(a+u7*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}",
              c: ["u3", "u7"],
              s: X,
            },
            s35: {
              a:
                "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}",
              c: ["u1"],
              s: F,
              precision: "lowp",
            },
            s36: {
              a:
                "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u7)+2002./e*texture2D(u1,vv0-2.*u7)+3003./e*texture2D(u1,vv0-u7)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u7)+2002./e*texture2D(u1,vv0+2.*u7)+1001./e*texture2D(u1,vv0+3.*u7);gl_FragColor=a;}",
              c: ["u7", "u1"],
              s: F,
              precision: "lowp",
            },
            s37: {
              a:
                "uniform sampler2D u1,u28,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u28,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}",
              c: ["u1", "u28", "u29"],
              s: {
                u1: 0,
                u28: 1,
                u29: 2,
              },
            },
          },
          p = {
            s38: {
              a:
                "uniform float u16,u30;uniform sampler2D u13,u14,u21;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u21,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u16,xyTo=floor(vv0*u16+eps2);float weightSize=toSparsity*u16;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u16,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u13,uvWeight)*texture2D(u14,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
              c: ["u16", "u13", "u14", "u21", "u30"],
              za: ["1.1111", "gl_FragColor\\*=2.2222;"],
            },
            s39: {
              a:
                "uniform float u16,u30,u24;uniform sampler2D u13,u14,u21;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u21,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u24,xyTo=floor(vv0*u16+eps2);float weightSize=fromSparsity*u24;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u16;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u24,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u13,uvWeight)*texture2D(u14,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
              c: "u16 u24 u13 u14 u21 u30".split(" "),
              za: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"],
            },
          },
          v = {
            Cb: function () {
              return O;
            },
            h: function () {
              if (!O) {
                C = "highp";
                for (var y in D) n(g, D[y], y);
                Ea.set("s0");
                g.enableVertexAttribArray(0);
                O = !0;
              }
            },
            yf: function (y) {
              y.forEach(function (M) {
                v.ia(M);
              });
            },
            ia: function (y) {
              D[y.id] = y;
              n(g, y, y.id);
            },
            yg: function (y, M, V) {
              M || (M = y);
              D[M] = Object.create(p[y]);
              D[M].uk = !0;
              p[y].za &&
                p[y].za.forEach(function (Y, ia) {
                  D[M].a = D[M].a.replace(new RegExp(Y, "g"), V[ia]);
                });
              n(g, D[M], M);
            },
            set: function (y) {
              l(D[y]);
            },
            Lb: function (y) {
              return t(y, w(), "s40");
            },
            ed: function (y) {
              return t(
                y,
                {
                  a: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}",
                  c: [],
                  precision: "highp",
                },
                "s41"
              );
            },
            Dj: function (y) {
              return "undefined" === typeof D[y] ? !1 : D[y].Ab;
            },
            G: function () {
              -1 !== B &&
                ((B = -1),
                x.ra.forEach(function (y) {
                  0 !== y && g.disableVertexAttribArray(y);
                }));
            },
            hd: function () {
              var y = 0;
              x.ra.forEach(function (M, V) {
                V = x.K[V];
                g.vertexAttribPointer(M, V, g.FLOAT, !1, x.rf, y);
                y += 4 * V;
              });
            },
            gn: function () {
              g.enableVertexAttribArray(0);
            },
            mc: function () {
              v.Nb(g);
            },
            Nb: function (y) {
              y.vertexAttribPointer(x.ra[0], 2, y.FLOAT, !1, 8, 0);
            },
            fd: function (y, M) {
              g.uniform1i(x.u[y], M);
            },
            A: function (y, M) {
              g.uniform1f(x.u[y], M);
            },
            P: function (y, M, V) {
              g.uniform2f(x.u[y], M, V);
            },
            Gh: function (y, M) {
              g.uniform2fv(x.u[y], M);
            },
            Hh: function (y, M) {
              g.uniform3fv(x.u[y], M);
            },
            gd: function (y, M, V, Y) {
              g.uniform3f(x.u[y], M, V, Y);
            },
            Rn: function (y, M, V, Y, ia) {
              g.uniform4f(x.u[y], M, V, Y, ia);
            },
            oa: function (y, M) {
              g.uniform4fv(x.u[y], M);
            },
            Sl: function (y, M) {
              g.uniformMatrix2fv(x.u[y], !1, M);
            },
            Tl: function (y, M) {
              g.uniformMatrix3fv(x.u[y], !1, M);
            },
            lc: function (y, M) {
              g.uniformMatrix4fv(x.u[y], !1, M);
            },
            f: function (y, M) {
              v.set(y);
              M.forEach(function (V) {
                switch (V.type) {
                  case "4f":
                    g.uniform4fv(x.u[V.name], V.value);
                    break;
                  case "3f":
                    g.uniform3fv(x.u[V.name], V.value);
                    break;
                  case "2f":
                    g.uniform2fv(x.u[V.name], V.value);
                    break;
                  case "1f":
                    g.uniform1f(x.u[V.name], V.value);
                    break;
                  case "1i":
                    g.uniform1i(x.u[V.name], V.value);
                    break;
                  case "mat2":
                    g.uniformMatrix2fv(x.u[V.name], !1, V.value);
                    break;
                  case "mat3":
                    g.uniformMatrix3fv(x.u[V.name], !1, V.value);
                    break;
                  case "mat4":
                    g.uniformMatrix4fv(x.u[V.name], !1, V.value);
                }
              });
            },
            qn: function () {
              return "lowp";
            },
            J: function () {
              g.disableVertexAttribArray(0);
              v.G();
              for (var y in D) {
                var M = D[y];
                M.Ab && ((M.Ab = !1), g.deleteProgram(M.ha));
                M.uk && delete D[y];
              }
              G.forEach(function (V) {
                g.deleteShader(V);
              });
              G.splice(0);
              E = 0;
              O = !1;
            },
          };
        return v;
      })(),
      g = null,
      Ub = (function () {
        function b(C) {
          console.log("ERROR in ContextFF: ", C);
          return !1;
        }

        function f(C) {
          function P() {
            ic.J();
            F.getExtension("WEBGL_lose_context").loseContext();
          }
          if (
            navigator.userAgent &&
            -1 !== navigator.userAgent.indexOf("forceWebGL1")
          )
            return !1;
          var z = document.createElement("canvas");
          z.setAttribute("width", 1);
          z.setAttribute("height", 1);
          var F = null;
          try {
            F = z.getContext("webgl2", C);
          } catch (H) {
            return !1;
          }
          if (!F) return !1;
          n(F);
          eb.Zf(F);
          C = eb.Ud(F);
          if (!C.Ma && !C.Na) return P(), !1;
          C = ic.Hf(F, C);
          P();
          return C ? !0 : !1;
        }

        function n(C) {
          C.clearColor(0, 0, 0, 0);
          C.disable(C.DEPTH_TEST);
          C.disable(C.BLEND);
          C.disable(C.DITHER);
          C.disable(C.STENCIL_TEST);
          C.disable(C.CULL_FACE);
          C.GENERATE_MIPMAP_HINT && C.hint(C.GENERATE_MIPMAP_HINT, C.FASTEST);
          C.disable(C.SAMPLE_ALPHA_TO_COVERAGE);
          C.disable(C.SAMPLE_COVERAGE);
          C.depthFunc(C.LEQUAL);
          C.clearDepth(1);
        }
        var l = null,
          t = null,
          w = null,
          G = null,
          B = !0,
          x = null,
          E = null,
          O = {
            I: function () {
              return l.width;
            },
            U: function () {
              return l.height;
            },
            bb: function () {
              return l;
            },
            Gj: function () {
              return g;
            },
            ea: function () {
              return B;
            },
            flush: function () {
              g.flush();
            },
            Mj: function () {
              x || (x = new Uint8Array(l.width * l.height * 4));
              g.readPixels(0, 0, l.width, l.height, g.RGBA, g.UNSIGNED_BYTE, x);
              return x;
            },
            mn: function () {
              return l.toDataURL("image/jpeg");
            },
            nn: function () {
              Za.W();
              t ||
                ((t = document.createElement("canvas")),
                (w = t.getContext("2d")));
              t.width = l.width;
              t.height = l.height;
              for (
                var C = O.Mj(),
                  P = w.createImageData(t.width, t.height),
                  z = t.width,
                  F = t.height,
                  H = P.data,
                  r = 0;
                r < F;
                ++r
              )
                for (var X = F - r - 1, D = 0; D < z; ++D) {
                  var p = 4 * (r * z + D),
                    v = 4 * (X * z + D);
                  H[p] = C[v];
                  H[p + 1] = C[v + 1];
                  H[p + 2] = C[v + 2];
                  H[p + 3] = C[v + 3];
                }
              w.putImageData(P, 0, 0);
              return t.toDataURL("image/png");
            },
            lg: function (C) {
              !t &&
                C &&
                ((t = document.createElement("canvas")),
                (w = t.getContext("2d")));
              var P = C ? t : document.createElement("canvas");
              P.width = l.width;
              P.height = l.height;
              (C ? w : P.getContext("2d")).drawImage(l, 0, 0);
              return P;
            },
            h: function (C) {
              C.Of && !C.ma
                ? (l = document.getElementById(C.Of))
                : C.ma && (l = C.ma);
              l || (l = document.createElement("canvas"));
              l.width = C && void 0 !== C.width ? C.width : 512;
              l.height = C && void 0 !== C.height ? C.height : 512;
              "undefined" === typeof C && (C = {});
              void 0 === C.premultipliedAlpha && (C.premultipliedAlpha = !1);
              void 0 === C.Eg && (C.Eg = !0);
              void 0 === C.antialias && (C.antialias = !1);
              if (!g) {
                var P = {
                  antialias: C.antialias,
                  alpha: !0,
                  preserveDrawingBuffer: !0,
                  premultipliedAlpha: C.premultipliedAlpha,
                  stencil: !1,
                  depth: C.Eg,
                };
                navigator &&
                  navigator.userAgent &&
                  -1 !== navigator.userAgent.indexOf("noAntialiasing") &&
                  (P.antialias = !1);
                var z = f(P);
                !z && P.antialias && ((P.antialias = !1), (z = f(P)));
                z && (g = l.getContext("webgl2", P));
                g
                  ? (B = !0)
                  : ((g = l.getContext("webgl", P)) ||
                      (g = l.getContext("experimental-webgl", P)),
                    (B = !1));
              }
              if (!g) return b("WebGL1 and 2 are not enabled");
              (G = g.getExtension("WEBGL_lose_context")) &&
                C.$g &&
                ((E = C.$g), l.addEventListener("webglcontextlost", E, !1));
              if (!eb.h()) return b("Not enough GL capabilities");
              n(g);
              Ea.h();
              pa.h();
              return ic.Hf(g, eb.Jj()) ? !0 : b("Cannot filter float textures");
            },
            J: function () {
              g && eb.J();
              G &&
                E &&
                (l.removeEventListener("webglcontextlost", E, !1), (E = null));
              x = w = t = l = null;
            },
          };
        return O;
      })(),
      ac = (function () {
        function b() {
          null === f &&
            ("undefined" !== typeof Ea
              ? (f = Ea)
              : "undefined" !== typeof L && (f = L));
        }
        var f = null;
        b();
        return {
          Fh: function (n) {
            f !== n && (f && f.G(), (f = n));
          },
          Cb: function () {
            return f.Cb();
          },
          mc: function () {
            return f.mc();
          },
          Nb: function (n) {
            return f.Nb(n);
          },
          hd: function () {
            return f.hd();
          },
          G: function () {
            return f.G();
          },
          set: function (n) {
            return f.set(n);
          },
          Lb: function (n) {
            b();
            return f.Lb(n);
          },
          ed: function (n) {
            b();
            return f.ed(n);
          },
          J: function () {
            return f.J();
          },
        };
      })(),
      ha = (function () {
        function b(S) {
          g.bindTexture(g.TEXTURE_2D, S);
        }

        function f(S) {
          var Z = new Uint16Array(S.length);
          S.forEach(function (aa, R) {
            M[0] = aa;
            var qa = V[0];
            var ya = (qa >> 16) & 32768;
            aa = (qa >> 12) & 2047;
            var Ka = (qa >> 23) & 255;
            qa =
              103 > Ka
                ? ya
                : 142 < Ka
                ? ya | 31744 | ((255 == Ka ? 0 : 1) && qa & 8388607)
                : 113 > Ka
                ? ((aa |= 2048),
                  ya | ((aa >> (114 - Ka)) + ((aa >> (113 - Ka)) & 1)))
                : (ya | ((Ka - 112) << 10) | (aa >> 1)) + (aa & 1);
            Z[R] = qa;
          });
          return Z;
        }

        function n() {
          if (null !== Y.re) return Y.re;
          var S = l(f([1, 1, 1, 1]));
          return null === S ? !0 : (Y.re = S);
        }

        function l(S) {
          if (!ac.Cb() || !z) return null;
          var Z = null;
          try {
            var aa = g.getError();
            if ("FUCKING_BIG_ERROR" === aa) return !1;
            Z = ia.instance({
              isFloat: !1,
              L: !0,
              array: S,
              width: 1,
            });
            aa = g.getError();
            if (aa !== g.NO_ERROR) return !1;
          } catch (R) {
            return !1;
          }
          Za.W();
          g.viewport(0, 0, 1, 1);
          g.clearColor(0, 0, 0, 0);
          g.clear(g.COLOR_BUFFER_BIT);
          ac.set("s0");
          Z.sb(0);
          pa.g(!0, !0);
          S = new Uint8Array(4);
          g.readPixels(0, 0, 1, 1, g.RGBA, g.UNSIGNED_BYTE, S);
          S = 0.9 < S[0];
          Z.remove();
          Za.fa();
          return S;
        }
        var t = 0,
          w = null,
          G = 0,
          B = null,
          x = null,
          E = null,
          O = null,
          C = null,
          P = null,
          z = !1,
          F = [],
          H = {
            isFloat: !1,
            isPot: !0,
            isLinear: !1,
            isMipmap: !1,
            isAnisotropicFiltering: !1,
            isMirrorX: !1,
            isMirrorY: !1,
            isSrgb: !1,
            isKeepArray: !1,
            isFlipY: null,
            width: 0,
            height: 0,
            url: null,
            array: null,
            data: null,
            ga_: null,
            sk: !1,
            L: !1,
            M: null,
            v: 4,
            He: 0,
          },
          r = !1,
          X = null,
          D = null,
          p = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
          ],
          v = !1,
          y = !1,
          M = new Float32Array(1),
          V = new Int32Array(M.buffer),
          Y = {
            re: null,
            se: null,
          },
          ia = {
            h: function () {
              z ||
                ((C = [g.RGB, null, g.RGB, g.RGBA]),
                (P = [g.RGB, null, g.RGB, g.RGBA]),
                (w = [
                  g.TEXTURE0,
                  g.TEXTURE1,
                  g.TEXTURE2,
                  g.TEXTURE3,
                  g.TEXTURE4,
                  g.TEXTURE5,
                  g.TEXTURE6,
                  g.TEXTURE7,
                ]),
                (v = "undefined" !== typeof Ca),
                (y = "undefined" !== typeof eb),
                (B = [-1, -1, -1, -1, -1, -1, -1, -1]),
                (O = [g.UNSIGNED_BYTE, g.FLOAT, g.FLOAT]),
                (z = !0));
            },
            lk: function () {
              if (!x) {
                for (var S = new Float32Array(16384), Z = 0; 16384 > Z; ++Z)
                  S[Z] = 2 * Math.random() - 1;
                x = {
                  random: ia.instance({
                    isFloat: !0,
                    isPot: !0,
                    array: S,
                    width: 64,
                  }),
                  Rh: ia.instance({
                    isFloat: !1,
                    isPot: !0,
                    width: 1,
                    array: new Uint8Array([0, 0, 0, 0]),
                  }),
                };
              }
              ia.km();
            },
            sg: function () {
              return x.Rh;
            },
            km: function () {
              O[1] = eb.he(g);
            },
            Ml: function () {
              P = C = [g.RGBA, g.RGBA, g.RGBA, g.RGBA];
            },
            Fn: function (S, Z) {
              Ea.set("s1");
              Za.W();
              var aa = S.I(),
                R = S.U();
              g.viewport(0, 0, aa, R);
              S.b(0);
              pa.g(!1, !1);
              g.readPixels(0, 0, aa, R, g.RGBA, g.UNSIGNED_BYTE, Z);
            },
            fg: function (S, Z, aa, R, qa, ya, Ka) {
              S.activeTexture(S.TEXTURE0);
              var Aa = S.createTexture();
              S.bindTexture(S.TEXTURE_2D, Aa);
              qa = qa instanceof Float32Array ? qa : new Float32Array(qa);
              0 !== Math.log2(qa.length) % 1 &&
                (S.texParameteri(
                  S.TEXTURE_2D,
                  S.TEXTURE_WRAP_S,
                  S.CLAMP_TO_EDGE
                ),
                S.texParameteri(
                  S.TEXTURE_2D,
                  S.TEXTURE_WRAP_T,
                  S.CLAMP_TO_EDGE
                ));
              S.texParameteri(S.TEXTURE_2D, S.TEXTURE_MAG_FILTER, S.NEAREST);
              S.texParameteri(S.TEXTURE_2D, S.TEXTURE_MIN_FILTER, S.NEAREST);
              S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL, ya);
              S.texImage2D(
                S.TEXTURE_2D,
                0,
                S.RGBA,
                aa,
                R,
                0,
                S.RGBA,
                S.FLOAT,
                qa
              );
              S.bindTexture(S.TEXTURE_2D, null);
              S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL, !1);
              Ka && (Za.fa(), Ea.set("s0"));
              S.viewport(0, 0, aa, R);
              S.framebufferTexture2D(
                S.FRAMEBUFFER,
                S.COLOR_ATTACHMENT0,
                S.TEXTURE_2D,
                Z,
                0
              );
              S.bindTexture(S.TEXTURE_2D, Aa);
              Ka ? pa.g(!0, !0) : pa.wb(S);
              S.deleteTexture(Aa);
              z && ((B[0] = -1), (E = null), (t = 0));
            },
            instance: function (S) {
              function Z(ra) {
                var Ba = g.getError();
                if ("FUCKING_BIG_ERROR" === Ba) return !1;
                g.texImage2D(g.TEXTURE_2D, 0, q, I, J, ra);
                Ba = g.getError();
                Ba !== g.NO_ERROR &&
                  I !== g.RGBA &&
                  ((I = g.RGBA), g.texImage2D(g.TEXTURE_2D, 0, q, I, J, ra));
                return !0;
              }

              function aa() {
                if (!a) {
                  b(Q);
                  ca && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, ca);
                  R.isPot
                    ? (g.texParameteri(
                        g.TEXTURE_2D,
                        g.TEXTURE_WRAP_S,
                        R.isMirrorX ? g.MIRRORED_REPEAT : g.REPEAT
                      ),
                      g.texParameteri(
                        g.TEXTURE_2D,
                        g.TEXTURE_WRAP_T,
                        R.isMirrorY ? g.MIRRORED_REPEAT : g.REPEAT
                      ))
                    : (g.texParameteri(
                        g.TEXTURE_2D,
                        g.TEXTURE_WRAP_S,
                        g.CLAMP_TO_EDGE
                      ),
                      g.texParameteri(
                        g.TEXTURE_2D,
                        g.TEXTURE_WRAP_T,
                        g.CLAMP_TO_EDGE
                      ));
                  R.isAnisotropicFiltering &&
                    "undefined" !== typeof fa &&
                    g.texParameterf(
                      g.TEXTURE_2D,
                      Ca.Nj().TEXTURE_MAX_ANISOTROPY_EXT,
                      fa.li
                    );
                  g.texParameteri(
                    g.TEXTURE_2D,
                    g.TEXTURE_MAG_FILTER,
                    R.isLinear ? g.LINEAR : g.NEAREST
                  );
                  R.isLinear
                    ? g.texParameteri(
                        g.TEXTURE_2D,
                        g.TEXTURE_MIN_FILTER,
                        R.isMipmap && !va ? g.NEAREST_MIPMAP_LINEAR : g.LINEAR
                      )
                    : g.texParameteri(
                        g.TEXTURE_2D,
                        g.TEXTURE_MIN_FILTER,
                        R.isMipmap && !va ? g.NEAREST_MIPMAP_NEAREST : g.NEAREST
                      );
                  I = C[R.v - 1];
                  q = P[R.v - 1];
                  J = O[ya];
                  if (eb.ea()) {
                    var ra = g.RGBA32F;
                    I === g.RGBA && J === g.FLOAT
                      ? R.isMipmap || R.isLinear
                        ? (q = ic.Pj(g))
                        : eb.$()
                        ? ra && (q = ra)
                        : (q = g.RGBA16F || g.RGBA)
                      : I === g.RGB &&
                        J === g.FLOAT &&
                        ra &&
                        ((q = ra), (I = g.RGBA));
                  }
                  if (
                    (R.L && !R.isFloat) ||
                    (R.isFloat && R.isMipmap && ic.zk())
                  )
                    (ra = g.RGBA16F) && (q = ra), (J = eb.he(g));
                  R.He && (rb = R.He);
                  R.isSrgb && 4 === R.v && (I = Ca.ck());
                  if (R.ga_) Z(R.ga_);
                  else if (R.url) Z(sa);
                  else if (wa) {
                    ra = wa;
                    try {
                      "FUCKING_BIG_ERROR" !== g.getError() &&
                        (g.texImage2D(g.TEXTURE_2D, 0, q, za, Qa, 0, I, J, ra),
                        g.getError() !== g.NO_ERROR &&
                          (g.texImage2D(
                            g.TEXTURE_2D,
                            0,
                            q,
                            za,
                            Qa,
                            0,
                            I,
                            J,
                            null
                          ),
                          g.getError() !== g.NO_ERROR &&
                            g.texImage2D(
                              g.TEXTURE_2D,
                              0,
                              g.RGBA,
                              za,
                              Qa,
                              0,
                              g.RGBA,
                              g.UNSIGNED_BYTE,
                              null
                            )));
                    } catch (Yb) {
                      g.texImage2D(g.TEXTURE_2D, 0, q, za, Qa, 0, I, J, null);
                    }
                    R.isKeepArray || (wa = null);
                  } else
                    (ra = g.getError()),
                      "FUCKING_BIG_ERROR" !== ra &&
                        (g.texImage2D(
                          g.TEXTURE_2D,
                          0,
                          q,
                          za,
                          Qa,
                          0,
                          I,
                          J,
                          null
                        ),
                        (ra = g.getError()),
                        ra !== g.NO_ERROR &&
                          ((I = g.RGBA),
                          R.L &&
                            J !== g.FLOAT &&
                            ((J = g.FLOAT),
                            g.texImage2D(
                              g.TEXTURE_2D,
                              0,
                              q,
                              za,
                              Qa,
                              0,
                              I,
                              J,
                              null
                            ))));
                  if (R.isMipmap)
                    if (!va && Pa) Pa.Ic(), (Ua = !0);
                    else if (va) {
                      ra = Math.log2(Math.min(za, Qa));
                      Ra = Array(1 + ra);
                      Ra[0] = Q;
                      for (var Ba = 1; Ba <= ra; ++Ba) {
                        var vb = Math.pow(2, Ba),
                          $a = za / vb;
                        vb = Qa / vb;
                        var Na = g.createTexture();
                        b(Na);
                        g.texParameteri(
                          g.TEXTURE_2D,
                          g.TEXTURE_MIN_FILTER,
                          g.NEAREST
                        );
                        g.texParameteri(
                          g.TEXTURE_2D,
                          g.TEXTURE_MAG_FILTER,
                          g.NEAREST
                        );
                        g.texImage2D(g.TEXTURE_2D, 0, q, $a, vb, 0, I, J, null);
                        b(null);
                        Ra[Ba] = Na;
                      }
                      Ua = !0;
                    }
                  b(null);
                  B[t] = -1;
                  ca && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !1);
                  Mb = !0;
                  R.M && Pa && (R.M(Pa), (R.M = null));
                }
              }
              var R = Object.assign({}, H, S),
                qa = G++;
              null === R.isFlipY && (R.isFlipY = R.url || R.array ? !0 : !1);
              R.data &&
                ((R.array =
                  "string" === typeof R.data
                    ? Ta(R.data)
                    : R.isFloat
                    ? new Float32Array(R.data)
                    : new Uint8Array(R.data)),
                (R.isFlipY = !1));
              var ya = 0,
                Ka = R.ga_ ? !0 : !1,
                Aa = null,
                ba = null,
                A = !1,
                ka = null;
              R.L = R.L || R.isFloat;
              R.L && (ya = 1);
              R.sk || eb.ea() || !R.isFloat || !y || eb.$() || (R.isFloat = !1);
              R.isFloat && (ya = 2);
              R.isAnisotropicFiltering &&
                v &&
                !Ca.yk() &&
                (R.isAnisotropicFiltering = !1);
              var Q = g.createTexture(),
                sa = null,
                wa = !1,
                za = 0,
                Qa = 0,
                Mb = !1,
                a = !1,
                c = !1,
                d = null,
                e = null,
                h = null,
                m = null,
                q = null,
                I = null,
                J = null,
                ca = R.isFlipY,
                T = (S = R.L && R.isMipmap) && ic.Ui(),
                va = S && T ? !0 : !1,
                Ra = null,
                rb = -1,
                Ua = !1,
                ub = {
                  Fg: !1,
                  Df: null,
                  gg: null,
                };
              R.width && ((za = R.width), (Qa = R.height ? R.height : za));
              var Pa = {
                get: function () {
                  return Q;
                },
                I: function () {
                  return za;
                },
                U: function () {
                  return Qa;
                },
                ek: function () {
                  return R.url;
                },
                Ig: function () {
                  return R.isFloat;
                },
                Jg: function () {
                  return R.L;
                },
                zn: function () {
                  return R.isLinear;
                },
                Ic: function () {
                  g.generateMipmap(g.TEXTURE_2D);
                },
                Ni: function (ra, Ba) {
                  va
                    ? (ra || (ra = Pa.pg()), Pa.Bd(Ba), b(Ra[ra]), (B[Ba] = -1))
                    : Pa.b(Ba);
                },
                pg: function () {
                  -1 === rb && (rb = Math.log(za) / Math.log(2));
                  return rb;
                },
                Fj: function (ra) {
                  if (va) {
                    ra || (ra = Pa.pg());
                    Ea.set("s11");
                    Pa.Bd(0);
                    for (var Ba = za, vb = Qa, $a = 1; $a <= ra; ++$a)
                      (Ba /= 2),
                        (vb /= 2),
                        Ea.P("u7", 0.25 / Ba, 0.25 / vb),
                        g.viewport(0, 0, Ba, vb),
                        b(Ra[$a - 1]),
                        g.framebufferTexture2D(
                          Za.Mc(),
                          g.COLOR_ATTACHMENT0,
                          g.TEXTURE_2D,
                          Ra[$a],
                          0
                        ),
                        pa.g(!1, 1 === $a);
                    B[0] = -1;
                  } else Pa.Ic();
                },
                Bd: function (ra) {
                  ra !== t && (g.activeTexture(w[ra]), (t = ra));
                },
                b: function (ra) {
                  if (!Mb) return !1;
                  Pa.Bd(ra);
                  if (B[ra] === qa) return !1;
                  b(Q);
                  B[ra] = qa;
                  return !0;
                },
                sb: function (ra) {
                  g.activeTexture(w[ra]);
                  t = ra;
                  b(Q);
                  B[ra] = qa;
                },
                i: function () {
                  E = Pa;
                  g.framebufferTexture2D(
                    Za.Mc(),
                    g.COLOR_ATTACHMENT0,
                    g.TEXTURE_2D,
                    Q,
                    0
                  );
                },
                N: function () {
                  E = Pa;
                  g.viewport(0, 0, za, Qa);
                  g.framebufferTexture2D(
                    Za.Mc(),
                    g.COLOR_ATTACHMENT0,
                    g.TEXTURE_2D,
                    Q,
                    0
                  );
                },
                od: ia.od,
                resize: function (ra, Ba) {
                  za = ra;
                  Qa = Ba;
                  aa();
                },
                clone: function (ra) {
                  ra = ia.instance({
                    width: za,
                    height: Qa,
                    L: R.L,
                    isFloat: R.isFloat,
                    isLinear: R.isLinear,
                    isMirrorY: R.isMirrorY,
                    isFlipY: ra ? !ca : ca,
                    isPot: R.isPot,
                  });
                  ac.set("s0");
                  Za.fa();
                  ra.i();
                  g.viewport(0, 0, za, Qa);
                  Pa.b(0);
                  pa.g(!0, !0);
                  return ra;
                },
                nc: function () {
                  g.viewport(0, 0, za, Qa);
                },
                remove: function () {
                  g.deleteTexture(Q);
                  a = !0;
                  F.splice(F.indexOf(Pa), 1);
                  Pa = null;
                },
                refresh: function () {
                  Pa.sb(0);
                  ca && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !0);
                  Ka
                    ? g.texImage2D(
                        g.TEXTURE_2D,
                        0,
                        q,
                        I,
                        g.UNSIGNED_BYTE,
                        R.ga_
                      )
                    : g.texImage2D(g.TEXTURE_2D, 0, q, za, Qa, 0, I, J, wa);
                  ca && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !1);
                },
                Mf: function () {
                  var ra = za * Qa * 4;
                  e = [
                    new Uint8Array(ra),
                    new Uint8Array(ra),
                    new Uint8Array(ra),
                    new Uint8Array(ra),
                  ];
                  d = [
                    new Float32Array(e[0].buffer),
                    new Float32Array(e[1].buffer),
                    new Float32Array(e[2].buffer),
                    new Float32Array(e[3].buffer),
                  ];
                  h = new Uint8Array(4 * ra);
                  m = new Float32Array(h.buffer);
                  c = !0;
                },
                mh: function () {
                  c || Pa.Mf();
                  g.readPixels(0, 0, za, 4 * Qa, g.RGBA, g.UNSIGNED_BYTE, h);
                  for (
                    var ra = za * Qa, Ba = 2 * ra, vb = 3 * ra, $a = 0;
                    $a < ra;
                    ++$a
                  )
                    (d[0][$a] = m[$a]),
                      (d[1][$a] = m[$a + ra]),
                      (d[2][$a] = m[$a + Ba]),
                      (d[3][$a] = m[$a + vb]);
                  return d;
                },
                jl: function () {
                  ub.Fg ||
                    ((ub.Df = new Uint8Array(za * Qa * 4)),
                    (ub.gg = new Float32Array(ub.buffer)),
                    (ub.Fg = !0));
                  g.readPixels(0, 0, za, Qa, g.RGBA, g.UNSIGNED_BYTE, ub.Df);
                  return ub.gg;
                },
                Wf: function (ra) {
                  Za.W();
                  Ea.set("s12");
                  Pa.b(0);
                  if (ra)
                    g.viewport(0, 0, za, Qa),
                      Ea.oa("u8", 0.25, 0.25, 0.25, 0.25),
                      pa.g(!1, !0);
                  else
                    for (ra = 0; 4 > ra; ++ra)
                      g.viewport(0, Qa * ra, za, Qa),
                        Ea.oa("u8", p[ra]),
                        pa.g(!1, 0 === ra);
                },
                bo: function (ra) {
                  var Ba;
                  if ((Ba = J === O[0]))
                    null !== Y.se
                      ? (Ba = Y.se)
                      : ((Ba = l(new Uint8Array([255, 255, 255, 255]))),
                        (Ba = null === Ba ? !0 : (Y.se = Ba))),
                      (Ba = !Ba);
                  b(Q);
                  ca && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !0);
                  Ba
                    ? (A ||
                        ((Aa = document.createElement("canvas")),
                        (Aa.width = za),
                        (Aa.height = Qa),
                        (ba = Aa.getContext("2d")),
                        (ka = ba.createImageData(za, Qa)),
                        (A = !0)),
                      ka.data.set(ra),
                      ba.putImageData(ka, 0, 0),
                      g.texImage2D(g.TEXTURE_2D, 0, q, I, J, Aa))
                    : g.texImage2D(g.TEXTURE_2D, 0, q, za, Qa, 0, I, J, ra);
                  B[t] = qa;
                  ca && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !1);
                },
                co: function (ra, Ba) {
                  b(Q);
                  Ba && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !0);
                  g.texImage2D(g.TEXTURE_2D, 0, q, I, J, ra);
                  B[t] = qa;
                  Ba && g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !1);
                },
                jc: function (ra, Ba) {
                  var vb = za * Qa,
                    $a = 4 * vb;
                  ra = R.L ? (ra ? "RGBE" : "JSON") : "RGBA";
                  Ba && (ra = Ba);
                  Ba = eb.ea() && !1;
                  var Na = null;
                  switch (ra) {
                    case "RGBE":
                      Na = "s42";
                      break;
                    case "JSON":
                      Na = Ba ? "s0" : "s12";
                      break;
                    case "RGBA":
                    case "RGBAARRAY":
                      Na = "s6";
                  }
                  c ||
                    ("RGBA" === ra || "RGBE" === ra || "RGBAARRAY" === ra
                      ? ((e = new Uint8Array($a)), (c = !0))
                      : "JSON" !== ra || Ba || Pa.Mf());
                  Za.W();
                  Ea.set(Na);
                  Pa.b(0);
                  $a = null;
                  if ("RGBA" === ra || "RGBE" === ra || "RGBAARRAY" === ra) {
                    g.viewport(0, 0, za, Qa);
                    pa.g(!0, !0);
                    g.readPixels(0, 0, za, Qa, g.RGBA, g.UNSIGNED_BYTE, e);
                    if ("RGBAARRAY" === ra)
                      return {
                        data: e,
                      };
                    r ||
                      ((X = document.createElement("canvas")),
                      (D = X.getContext("2d")),
                      (r = !0));
                    X.width = za;
                    X.height = Qa;
                    vb = D.createImageData(za, Qa);
                    vb.data.set(e);
                    D.putImageData(vb, 0, 0);
                    $a = X.toDataURL("image/png");
                  } else if ("JSON" === ra)
                    if (Ba)
                      ($a = new Float32Array(vb)),
                        g.viewport(0, 0, za, Qa),
                        pa.g(!0, !0),
                        g.readPixels(0, 0, za, Qa, g.RGBA, g.FLOAT, $a);
                    else {
                      for ($a = 0; 4 > $a; ++$a)
                        g.viewport(0, Qa * $a, za, Qa),
                          Ea.oa("u8", p[$a]),
                          pa.g(!$a, !$a);
                      Pa.mh();
                      $a = Array(vb);
                      for (Ba = 0; Ba < vb; ++Ba)
                        ($a[4 * Ba] = d[0][Ba]),
                          ($a[4 * Ba + 1] = d[1][Ba]),
                          ($a[4 * Ba + 2] = d[2][Ba]),
                          ($a[4 * Ba + 3] = d[3][Ba]);
                    }
                  return {
                    format: ra,
                    data: $a,
                    width: za,
                    height: Qa,
                    isMirrorY: R.isMirrorY,
                    isFlipY: "RGBA" === ra ? R.isFlipY : !R.isFlipY,
                  };
                },
              };
              R.isMipmap && !va && Mb && !Ua && (Pa.Ic(), (Ua = !0));
              if (R.url)
                b(Q),
                  g.texImage2D(
                    g.TEXTURE_2D,
                    0,
                    g.RGBA,
                    1,
                    1,
                    0,
                    g.RGBA,
                    g.UNSIGNED_BYTE,
                    null
                  ),
                  (sa = new Image()),
                  (sa.an = "Anonymous"),
                  (sa.crossOrigin = "Anonymous"),
                  (sa.src = R.url),
                  (sa.onload = function () {
                    za = sa.width;
                    Qa = sa.height;
                    aa();
                  });
              else if (R.ga_) {
                var wc = function () {
                  za =
                    void 0 !== R.ga_.videoWidth
                      ? R.ga_.videoWidth
                      : R.ga_.width;
                  Qa =
                    void 0 !== R.ga_.videoHeight
                      ? R.ga_.videoHeight
                      : R.ga_.height;
                  za ? aa() : setTimeout(wc, 1);
                };
                wc();
              } else
                R.array
                  ? (R.L && !R.isFloat
                      ? R.array instanceof Uint16Array
                        ? ((wa = R.array), aa())
                        : n()
                        ? ((wa = f(R.array)), aa())
                        : (aa(), ia.fg(g, Q, Pa.I(), Pa.U(), R.array, ca, !0))
                      : ((wa = R.isFloat
                          ? R.array instanceof Float32Array
                            ? R.array
                            : new Float32Array(R.array)
                          : R.array instanceof Uint8Array
                          ? R.array
                          : new Uint8Array(R.array)),
                        aa()),
                    R.isKeepArray ||
                      (wa && wa !== R.array && (wa = null), delete R.array))
                  : aa();
              Pa.tn = Pa.I;
              R.M && Mb && (R.M(Pa), (R.M = null));
              F.push(Pa);
              return Pa;
            },
            W: function (S) {
              S !== t && (g.activeTexture(w[S]), (t = S));
              B[S] = -1;
              b(null);
            },
            Oi: function (S) {
              x.random.b(S);
            },
            od: function () {
              E = null;
              g.framebufferTexture2D(
                Za.Mc(),
                g.COLOR_ATTACHMENT0,
                g.TEXTURE_2D,
                null,
                0
              );
            },
            reset: function () {
              for (var S = 0; S < w.length; ++S) B[S] = -1;
              t = -1;
            },
            In: function () {
              t = -1;
            },
            Sh: function () {
              for (var S = 0; S < w.length; ++S) ia.W(S);
            },
            H: function () {
              x && (x.random.remove(), x.Rh.remove());
            },
            pc: function (S, Z) {
              if ("RGBA" === S.format || "RGBE" === S.format) {
                var aa = new Image();
                aa.src = S.data;
                aa.onload = function () {
                  ia.instance({
                    isMirrorY: S.isMirrorY,
                    isFlipY: S.isFlipY,
                    isFloat: !1,
                    ga_: aa,
                    M: function (R) {
                      if ("RGBA" === S.format) Z(R);
                      else {
                        var qa = S.width,
                          ya = S.height,
                          Ka = ia.instance({
                            isMirrorY: S.isMirrorY,
                            isFloat: !0,
                            width: qa,
                            height: ya,
                            isFlipY: S.isFlipY,
                          });
                        Za.fa();
                        g.viewport(0, 0, qa, ya);
                        Ea.set("s43");
                        Ka.i();
                        R.b(0);
                        pa.g(!0, !0);
                        ia.W(0);
                        Z(Ka);
                        g.flush();
                        setTimeout(R.remove, 50);
                      }
                    },
                  });
                };
              } else
                "JSON" === S.format
                  ? Z(
                      ia.instance({
                        isFloat: !0,
                        isFlipY: S.isFlipY,
                        width: S.width,
                        height: S.height,
                        array: new Float32Array(S.data),
                      })
                    )
                  : Z(!1);
            },
            J: function () {
              E && (Za.fa(), ia.od(), Za.W());
              ia.Sh();
              F.slice(0).forEach(function (S) {
                S.remove();
              });
              F.splice(0);
              z = !1;
              G = 0;
              "undefined" !== typeof ic && ic.J();
            },
          };
        return ia;
      })(),
      Uc = {
        instance: function (b) {
          var f = [ha.instance(b), ha.instance(b)],
            n = [f[1], f[0]],
            l = n,
            t = {
              Ol: function (w) {
                l[1].i();
                l[0].b(w);
                t.Lh();
              },
              Qn: function (w) {
                l[1].N();
                l[0].b(w);
                t.Lh();
              },
              Lh: function () {
                l = l === f ? n : f;
              },
              refresh: function () {
                l[0].refresh();
                l[1].refresh();
              },
              b: function (w) {
                l[0].b(w);
              },
              Rm: function (w) {
                l[1].b(w);
              },
              pn: function () {
                return l[0];
              },
              remove: function () {
                l[0].remove();
                l[1].remove();
                l = null;
              },
            };
          return t;
        },
      },
      pa = (function () {
        function b(x) {
          var E = {
            ba: null,
            O: null,
          };
          E.ba = x.createBuffer();
          x.bindBuffer(x.ARRAY_BUFFER, E.ba);
          x.bufferData(
            x.ARRAY_BUFFER,
            new Float32Array([-1, -1, 3, -1, -1, 3]),
            x.STATIC_DRAW
          );
          E.O = x.createBuffer();
          x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, E.O);
          x.bufferData(
            x.ELEMENT_ARRAY_BUFFER,
            new Uint16Array([0, 1, 2]),
            x.STATIC_DRAW
          );
          return E;
        }
        var f = null,
          n = 0,
          l = !1,
          t = [],
          w = -2,
          G = -2,
          B = {
            reset: function () {
              G = w = -2;
            },
            h: function () {
              l || ((f = b(g)), B.Fd(), (l = !0));
            },
            instance: function (x) {
              var E = n++,
                O = x.O ? x.O.length : 0,
                C = "undefined" === typeof x.mode ? g.STATIC_DRAW : x.mode,
                P = g.createBuffer();
              g.bindBuffer(g.ARRAY_BUFFER, P);
              g.bufferData(
                g.ARRAY_BUFFER,
                x.ba instanceof Float32Array ? x.ba : new Float32Array(x.ba),
                C
              );
              w = E;
              var z = null,
                F = null,
                H = null;
              if (x.O) {
                z = g.createBuffer();
                g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, z);
                var r = null;
                65536 > x.O.length
                  ? ((r = Uint16Array), (F = g.UNSIGNED_SHORT), (H = 2))
                  : ((r = Uint32Array), (F = g.UNSIGNED_INT), (H = 4));
                r = x.O instanceof r ? x.O : new r(x.O);
                g.bufferData(g.ELEMENT_ARRAY_BUFFER, r, C);
                G = E;
              }
              var X = {
                Zb: function (D) {
                  w !== E && (g.bindBuffer(g.ARRAY_BUFFER, P), (w = E));
                  D && ac.hd();
                },
                Li: function () {
                  G !== E && (g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, z), (G = E));
                },
                bind: function (D) {
                  X.Zb(D);
                  X.Li();
                },
                R: function () {
                  g.drawElements(g.TRIANGLES, O, F, 0);
                },
                Da: function (D, p) {
                  g.drawElements(g.TRIANGLES, D, F, p * H);
                },
                remove: function () {
                  g.deleteBuffer(P);
                  x.O && g.deleteBuffer(z);
                  X = null;
                },
              };
              t.push(X);
              return X;
            },
            Fd: function () {
              -1 !== w && (g.bindBuffer(g.ARRAY_BUFFER, f.ba), (w = -1));
              -1 !== G && (g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, f.O), (G = -1));
            },
            g: function (x, E) {
              x && pa.Fd();
              E && ac.mc();
              g.drawElements(g.TRIANGLES, 3, g.UNSIGNED_SHORT, 0);
            },
            wb: function (x) {
              x = x || g;
              var E = b(x);
              x.bindBuffer(x.ARRAY_BUFFER, E.ba);
              x.bindBuffer(x.ELEMENT_ARRAY_BUFFER, E.O);
              ac.Nb(x);
              x.drawElements(x.TRIANGLES, 3, x.UNSIGNED_SHORT, 0);
              x.deleteBuffer(E.ba);
              x.deleteBuffer(E.O);
              B.reset();
              l && (B.Fd(), ac.mc());
            },
            H: function () {
              var x = g,
                E = f;
              x.deleteBuffer(E.ba);
              x.deleteBuffer(E.O);
            },
            J: function () {
              B.H();
              t.forEach(function (x) {
                x.remove();
              });
              g.bindBuffer(g.ARRAY_BUFFER, null);
              g.bindBuffer(g.ELEMENT_ARRAY_BUFFER, null);
              B.reset();
              l = !1;
              t.splice(0);
              n = 0;
            },
          };
        return B;
      })(),
      Za = (function () {
        var b = null,
          f = null,
          n = null,
          l = !1,
          t = [],
          w = {
            da: -2,
            eg: 1,
          },
          G = {
            Cb: function () {
              return l;
            },
            h: function () {
              if (!l) {
                b = g.createFramebuffer();
                var B = eb.ea();
                f =
                  B && g.DRAW_FRAMEBUFFER ? g.DRAW_FRAMEBUFFER : g.FRAMEBUFFER;
                n =
                  B && g.READ_FRAMEBUFFER ? g.READ_FRAMEBUFFER : g.FRAMEBUFFER;
                l = !0;
              }
            },
            Oj: function () {
              return f;
            },
            mg: function () {
              return n;
            },
            Mc: function () {
              return g.FRAMEBUFFER;
            },
            sn: function () {
              return w;
            },
            kn: function () {
              return b;
            },
            instance: function (B) {
              void 0 === B.cc && (B.cc = !1);
              var x = B.Ja ? B.Ja : null,
                E = B.width,
                O = void 0 !== B.height ? B.height : B.width,
                C = b,
                P = null,
                z = !1,
                F = !1,
                H = 0;
              x && ((E = E ? E : x.I()), (O = O ? O : x.U()));
              var r = {
                th: function () {
                  z || ((C = g.createFramebuffer()), (z = !0), (H = w.eg++));
                },
                vc: function () {
                  r.th();
                  r.i();
                  P = g.createRenderbuffer();
                  g.bindRenderbuffer(g.RENDERBUFFER, P);
                  g.renderbufferStorage(
                    g.RENDERBUFFER,
                    g.DEPTH_COMPONENT16,
                    E,
                    O
                  );
                  g.framebufferRenderbuffer(
                    f,
                    g.DEPTH_ATTACHMENT,
                    g.RENDERBUFFER,
                    P
                  );
                  g.clearDepth(1);
                },
                bind: function (X, D) {
                  H !== w.da && (g.bindFramebuffer(f, C), (w.da = H));
                  x && x.i();
                  D && g.viewport(0, 0, E, O);
                  X && g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
                },
                Cf: function () {
                  H !== w.da && (g.bindFramebuffer(f, C), (w.da = H));
                },
                clear: function () {
                  g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
                },
                Md: function () {
                  g.clear(g.COLOR_BUFFER_BIT);
                },
                Jf: function () {
                  g.clear(g.DEPTH_BUFFER_BIT);
                },
                nc: function () {
                  g.viewport(0, 0, E, O);
                },
                i: function () {
                  H !== w.da && (g.bindFramebuffer(f, C), (w.da = H));
                },
                rtt: function (X) {
                  x = X;
                  w.da !== H &&
                    (g.bindFramebuffer(g.FRAMEBUFFER, C), (w.da = H));
                  X.i();
                },
                W: function () {
                  g.bindFramebuffer(f, null);
                  w.da = -1;
                },
                resize: function (X, D) {
                  E = X;
                  O = D;
                  P &&
                    (g.bindRenderbuffer(g.RENDERBUFFER, P),
                    g.renderbufferStorage(
                      g.RENDERBUFFER,
                      g.DEPTH_COMPONENT16,
                      E,
                      O
                    ));
                },
                remove: function () {
                  C === b ||
                    F ||
                    (g.bindFramebuffer(f, C),
                    g.framebufferTexture2D(
                      f,
                      g.COLOR_ATTACHMENT0,
                      g.TEXTURE_2D,
                      null,
                      0
                    ),
                    P &&
                      g.framebufferRenderbuffer(
                        f,
                        g.DEPTH_ATTACHMENT,
                        g.RENDERBUFFER,
                        null
                      ),
                    g.bindFramebuffer(f, null),
                    g.deleteFramebuffer(C),
                    P && g.deleteRenderbuffer(P));
                  F = !0;
                },
              };
              B.cc && r.vc();
              t.push(r);
              return r;
            },
            W: function () {
              g.bindFramebuffer(f, null);
              w.da = -1;
            },
            ao: function () {
              g.bindFramebuffer(f, null);
              g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
              g.viewport(0, 0, eb.I(), eb.U());
              w.da = -1;
            },
            reset: function () {
              w.da = -2;
            },
            fa: function () {
              0 !== w.da && (g.bindFramebuffer(f, b), (w.da = 0));
            },
            clear: function () {
              g.viewport(0, 0, eb.I(), eb.U());
              g.clear(g.COLOR_BUFFER_BIT);
            },
            J: function () {
              G.W();
              t.forEach(function (B) {
                B.remove();
              });
              g.deleteFramebuffer(b);
              G.reset();
              l = !1;
              t.splice(0);
              w.da = -2;
              w.eg = 1;
            },
          };
        return G;
      })(),
      eb = (function () {
        function b() {
          n = "undefined" === typeof Ub ? Ca : Ub;
          l = !0;
        }

        function f(r, X) {
          for (var D = 0; D < r.length; ++D) {
            var p = X.getExtension(r[D]);
            if (p) return p;
          }
          return null;
        }
        var n = null,
          l = !1,
          t = !1,
          w = null,
          G = null,
          B = null,
          x = !1,
          E = null,
          O = !1,
          C = null,
          P = null,
          z = {
            Ma: !0,
            Na: !0,
            be: !0,
          },
          F = "undefined" === typeof window ? {} : window,
          H = {
            h: function () {
              if (l) return !0;
              b();
              var r = g;
              if (!t) {
                w = H.bg(r);
                if ((F.GL_EXT_FLOAT = w) || H.ea())
                  (G = H.cg(r)), (F.GL_EXT_FLOATLINEAR = G);
                t = !0;
              }
              if (!O) {
                if ((B = H.Hc(r))) (x = !0), (F.GL_EXT_HALFFLOAT = B);
                if (x || H.ea()) (E = H.dg(r)), (F.GL_EXT_HALFFLOATLINEAR = E);
                O = !0;
              }
              C = H.$f(r);
              F.GL_EXT_COLORBUFFERFLOAT = C;
              P = H.ag(r);
              F.GL_EXT_COLORBUFFERHALFFLOAT = P;
              Za.h();
              ha.h();
              if (!H.jj()) return !1;
              pa.h();
              ha.lk();
              return !0;
            },
            I: function () {
              l || b();
              return n.I();
            },
            U: function () {
              l || b();
              return n.U();
            },
            ea: function () {
              l || b();
              return n.ea();
            },
            Zf: function (r) {
              H.$f(r);
              H.ag(r);
              H.bg(r);
              H.cg(r);
              H.Hc(r);
              H.dg(r);
            },
            $f: f.bind(null, [
              "EXT_color_buffer_float",
              "WEBGL_color_buffer_float",
              "OES_color_buffer_float",
            ]),
            ag: f.bind(null, [
              "EXT_color_buffer_half_float",
              "WEBGL_color_buffer_half_float",
              "OES_color_buffer_half_float",
            ]),
            bg: f.bind(null, [
              "OES_texture_float",
              "MOZ_OES_texture_float",
              "WEBKIT_OES_texture_float",
            ]),
            cg: f.bind(null, [
              "OES_texture_float_linear",
              "MOZ_OES_texture_float_linear",
              "WEBKIT_OES_texture_float_linear",
            ]),
            Hc: f.bind(null, [
              "OES_texture_half_float",
              "MOZ_OES_texture_half_float",
              "WEBKIT_OES_texture_half_float",
            ]),
            dg: f.bind(null, [
              "OES_texture_half_float_linear",
              "MOZ_OES_texture_half_float_linear",
              "WEBKIT_OES_texture_half_float_linear",
            ]),
            he: function (r) {
              var X = H.Hc(r);
              return X && X.HALF_FLOAT_OES
                ? X.HALF_FLOAT_OES
                : r.HALF_FLOAT || r.FLOAT;
            },
            Jj: function () {
              return z;
            },
            $: function () {
              return z.Ma;
            },
            Wm: function () {
              return z.Na;
            },
            Ti: function () {
              return z.be;
            },
            nd: function (r, X, D) {
              function p() {
                r.bindTexture(r.TEXTURE_2D, null);
                r.bindFramebuffer(v, null);
                r.deleteTexture(V);
                r.deleteFramebuffer(M);
              }
              var v = r.FRAMEBUFFER,
                y = r.NEAREST,
                M = r.createFramebuffer();
              r.bindFramebuffer(v, M);
              var V = r.createTexture();
              r.bindTexture(r.TEXTURE_2D, V);
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, y);
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, y);
              r.texImage2D(r.TEXTURE_2D, 0, X, 1, 1, 0, r.RGBA, D, null);
              r.framebufferTexture2D(
                r.FRAMEBUFFER,
                r.COLOR_ATTACHMENT0,
                r.TEXTURE_2D,
                V,
                0
              );
              if (
                r.checkFramebufferStatus(
                  r.READ_FRAMEBUFFER || r.FRAMEBUFFER
                ) !== r.FRAMEBUFFER_COMPLETE
              )
                return p(), !1;
              ac.ed(r);
              r.clearColor(0, 0, 0, 0);
              r.viewport(0, 0, 1, 1);
              r.disable(r.DEPTH_TEST);
              r.clear(r.COLOR_BUFFER_BIT);
              pa.wb(r);
              r.bindFramebuffer(v, null);
              ac.Lb(r);
              r.activeTexture(r.TEXTURE0);
              r.bindTexture(r.TEXTURE_2D, V);
              pa.wb(r);
              X = new Uint8Array(4);
              r.readPixels(0, 0, 1, 1, r.RGBA, r.UNSIGNED_BYTE, X);
              p();
              return 3 < Math.abs(X[0] - 127) ? !1 : !0;
            },
            Ud: function (r) {
              var X = {
                Ma: !1,
                Na: !1,
              };
              r.disable(r.BLEND);
              r.clearColor(0, 0, 0, 0);
              r.clear(r.COLOR_BUFFER_BIT);
              r.RGBA32F && H.nd(r, r.RGBA32F, r.FLOAT) && (X.Ma = !0);
              !X.Ma && H.nd(r, r.RGBA, r.FLOAT) && (X.Ma = !0);
              var D = H.he(r);
              r.RGBA16F && H.nd(r, r.RGBA16F, D) && (X.Na = !0);
              !X.Na && H.nd(r, r.RGBA, D) && (X.Na = !0);
              return X;
            },
            lj: function () {
              var r = Za.instance({
                width: 1,
              });
              r.th();
              var X = ha.instance({
                width: 1,
                isFloat: !0,
                v: 3,
              });
              r.i();
              X.i();
              g.flush();
              g.checkFramebufferStatus(Za.mg()) !== g.FRAMEBUFFER_COMPLETE
                ? (ha.Ml(), (z.be = !1))
                : (z.be = !0);
              r.remove();
              X.remove();
            },
            jj: function () {
              var r = H.Ud(g);
              Object.assign(z, r);
              if (!z.Ma && !z.Na) return !1;
              H.lj();
              return !0;
            },
            J: function () {
              ha.J();
              ac.J();
              Za.J();
              pa.J();
              l = !1;
            },
          };
        return H;
      })(),
      ic = (function () {
        function b(D, p, v, y) {
          z.texParameteri(
            z.TEXTURE_2D,
            z.TEXTURE_MIN_FILTER,
            y ? z.NEAREST_MIPMAP_NEAREST : z.LINEAR
          );
          var M = null;
          if (null !== v)
            try {
              M = z.getError();
              if ("FUCKING_BIG_ERROR" === M) return !1;
              z.texImage2D(z.TEXTURE_2D, 0, D, 2, 2, 0, z.RGBA, p, v);
              M = z.getError();
              if (M !== z.NO_ERROR) return !1;
            } catch (V) {
              return !1;
            }
          y && z.generateMipmap(z.TEXTURE_2D);
          z.clear(z.COLOR_BUFFER_BIT);
          pa.wb(z);
          M = z.getError();
          if ("FUCKING_BIG_ERROR" === M) return !1;
          z.readPixels(0, 0, 1, 1, z.RGBA, z.UNSIGNED_BYTE, O);
          M = z.getError();
          M === z.INVALID_OPERATION &&
            "undefined" !== typeof z.PIXEL_PACK_BUFFER &&
            (z.bindBuffer(z.PIXEL_PACK_BUFFER, null),
            z.readPixels(0, 0, 1, 1, z.RGBA, z.UNSIGNED_BYTE, O),
            (M = z.getError()));
          if (M !== z.NO_ERROR) return !1;
          if ((v = 0 !== O[0])) (x.ih = p), (x.Cg = D);
          return v;
        }

        function f(D, p) {
          return F.Ma && b(D, z.FLOAT, new Float32Array(P), p)
            ? ((B = G.vf), !0)
            : !1;
        }

        function n(D, p, v) {
          if (!F.Na) return !1;
          var y = eb.Hc(z);
          if (
            (y &&
              y.HALF_FLOAT_OES &&
              b(D, y.HALF_FLOAT_OES, new Uint16Array(P), p)) ||
            (z.HALF_FLOAT && b(D, z.HALF_FLOAT, new Uint16Array(P), p)) ||
            b(D, z.FLOAT, new Float32Array(P), p)
          )
            return (B = G.Wb), !0;
          z.bindTexture(z.TEXTURE_2D, v);
          z.texImage2D(
            z.TEXTURE_2D,
            0,
            z.RGBA,
            1,
            1,
            0,
            z.RGBA,
            z.UNSIGNED_BYTE,
            null
          );
          z.bindFramebuffer(x.Ec, X);
          ha.fg(z, v, 1, 1, new Float32Array(P), !1, !1);
          z.bindFramebuffer(x.Ec, null);
          z.bindTexture(z.TEXTURE_2D, v);
          return b(D, null, null, p) ? ((B = G.Wb), !0) : !1;
        }

        function l(D, p, v) {
          E = !0;
          if (n(D, !0, v) || f(p, !0)) return !0;
          E = !1;
          return n(D, !1, v) || f(p, !1) ? !0 : !1;
        }

        function t(D) {
          if (B === G.G) {
            z = D || g;
            B = G.RGBA8;
            E = !0;
            eb.Zf(z);
            F || (F = eb.Ud(z));
            Za.reset();
            X = z.createFramebuffer();
            x.Ec = z.DRAW_FRAMEBUFFER || z.FRAMEBUFFER;
            z.bindFramebuffer(x.Ec, null);
            z.clearColor(0, 0, 0, 0);
            z.viewport(0, 0, 1, 1);
            Ea.G();
            H = Ea.Lb(z);
            D = z.createTexture();
            z.activeTexture(z.TEXTURE0);
            z.bindTexture(z.TEXTURE_2D, D);
            z.texParameteri(z.TEXTURE_2D, z.TEXTURE_WRAP_S, z.REPEAT);
            z.texParameteri(z.TEXTURE_2D, z.TEXTURE_WRAP_T, z.REPEAT);
            z.texParameteri(z.TEXTURE_2D, z.TEXTURE_MAG_FILTER, z.NEAREST);
            r = D;
            var p = (D = z.RGBA),
              v = z.RGBA16F,
              y = z.RGBA32F;
            y && (D = y);
            v && (p = v);
            if ((v || y) && l(p, D, r)) return w(), !0;
            D = p = z.RGBA;
            if (l(p, D, r)) return w(), !0;
            B = G.RGBA8;
            w();
            return !1;
          }
        }

        function w() {
          z.deleteProgram(H.ha);
          z.deleteTexture(r);
          r = H = null;
        }
        var G = {
            G: -1,
            vf: 3,
            Wb: 2,
            RGBA8: 0,
          },
          B = G.G,
          x = {
            ih: null,
            Cg: null,
            Ec: null,
          },
          E = !0,
          O = new Uint8Array(4),
          C = [0.8, 1, 0.8, 1],
          P = C.concat(C, C, C),
          z = null,
          F = null,
          H = null,
          r = null,
          X = null;
        return {
          Ui: function (D) {
            t(D);
            return E;
          },
          Hf: function (D, p) {
            B === G.G && (typeof ("undefined" !== p) && (F = p), t(D));
            return B !== G.RGBA8;
          },
          yn: function (D) {
            t(D);
            return B === G.vf;
          },
          zk: function (D) {
            t(D);
            return B === G.Wb;
          },
          on: function (D) {
            t(D);
            return x.ih;
          },
          Pj: function (D) {
            t(D);
            return x.Cg;
          },
          J: function () {
            z = null;
            E = !0;
            B = G.G;
            F = null;
          },
        };
      })(),
      Pb = {
        instance: function (b) {
          var f = ha.instance(b.alpha),
            n = ha.instance(b.beta);
          return {
            tj: function () {
              f.b(1);
              n.b(2);
            },
          };
        },
      },
      xa = {
        instance: function (b) {
          var f = null,
            n = !1,
            l = !1,
            t = null,
            w = !1,
            G = !1,
            B = null,
            x = "undefined" === typeof b.preprocessing ? !1 : b.preprocessing,
            E =
              "undefined" === typeof b.preprocessingSize
                ? b.size
                : b.preprocessingSize;
          b.mask &&
            ((n = !0),
            K && void 0 !== K.X && (b.mask = K.X + b.mask),
            (f = ha.instance({
              isFloat: !1,
              url: b.mask,
            })));
          var O = !1;
          b.customInputShader &&
            ((O = "s44"),
            Ea.ia({
              name: "_",
              id: O,
              a: b.customInputShader,
              c: ["uSource"],
              precision: "lowp",
            }),
            Ea.f(O, [
              {
                type: "1i",
                name: "_",
                value: 0,
              },
            ]));
          switch (x) {
            case "sobel":
              B = "s31";
              w = !0;
              break;
            case "meanNormalization":
              B = "s32";
              w = !0;
              break;
            case "grayScale":
              B = "s28";
              w = !1;
              break;
            case "grayScaleTilt":
              B = "s29";
              G = !0;
              w = !1;
              break;
            case "rgbGrayTilt":
              B = "s30";
              G = !0;
              w = !1;
              break;
            case "copy":
              B = O ? O : "s0";
              break;
            case "inputLightRegulation":
              B = O ? O : "s28";
              t = Gc.instance({
                Bg: E,
                bh: b.size,
                Ug: b.nBlurPass,
                xk: !1,
              });
              l = !0;
              break;
            case "direct":
            case "none":
              B = !1;
              break;
            default:
              B = "s3";
          }
          G &&
            Ea.f(B, [
              {
                name: "u26",
                type: "1f",
                value: b.tilt,
              },
            ]);
          n && (B += "Mask");
          var C = ha.instance({
              isFloat: !1,
              isPot: !1,
              width: b.size,
            }),
            P = {
              I: function () {
                return E;
              },
              ie: function () {
                return P.I();
              },
              Tj: function () {
                return l ? t.rg() : C;
              },
              ta: function () {
                Za.fa();
                B &&
                  (Ea.set(B),
                  w && Ea.A("u27", 1 / b.size),
                  C.N(),
                  n && f.b(1),
                  pa.g(!1, !1),
                  C.b(0),
                  l && t.process(C));
              },
              J: function () {
                C.remove();
                n && f.remove();
              },
            };
          return P;
        },
      },
      nb = {
        instance: function (b) {
          "undefined" === typeof b.disableNormalize &&
            (b.disableNormalize = !1);
          var f = {
              input: null,
              wc: null,
              ue: null,
              Ga: null,
              Yc: null,
              Ke: null,
              Le: null,
            },
            n = null,
            l = [],
            t = [],
            w = !1,
            G = null,
            B = !0,
            x = -1,
            E = b.isReorganize ? b.isReorganize : !1,
            O = b.kernelsNumber ? !0 : !1,
            C = b.dynPelu ? Pb.instance(b.dynPelu) : !1,
            P = C ? !0 : !1,
            z = {
              isEnabled: !1,
            };
          b.vk
            ? ((b.sparsity =
                "undefined" !== typeof b.sparsity ? b.sparsity : b.$c.ie()),
              (B = !1))
            : "full" === b.connectivityUp && (b.sparsity = b.$c.ie());
          var F = {
              elu: "s15",
              elu01: "s16",
              relu: "s14",
              arctan: "s18",
              sigmoid: "s13",
              copy: "s0",
              softplus: "s19",
              dynPelu: "s17",
            }[b.activation],
            H = b.sparsity * b.sparsity,
            r = !1,
            X = b.size,
            D = "";
          if (b.maxPooling) {
            switch (b.maxPooling.size) {
              case 2:
                D = "s33";
                break;
              case 4:
                D = "s34";
            }
            r = !0;
            X /= b.maxPooling.size;
            f.Ke = ha.instance({
              isFloat: !0,
              isPot: !1,
              width: X,
            });
          }
          var p = void 0 !== b.Yk && b.Yk ? !0 : !1,
            v = null,
            y = null,
            M = null;
          if (p) {
            v = "s45" + b.index.toString();
            Ea.yg("s45", v, [((b.normalization.n - 1) / 2).toFixed(1)]);
            Ea.f(v, [
              {
                type: "1i",
                name: "u1",
                value: 0,
              },
              {
                type: "2f",
                name: "u7",
                value: [1 / b.size, 1 / b.size],
              },
              {
                type: "1f",
                name: "u6",
                value: b.normalization.alpha,
              },
              {
                type: "1f",
                name: "u9",
                value: b.normalization.beta,
              },
              {
                type: "1f",
                name: "u31",
                value: b.normalization.k,
              },
            ]);
            var V = {
              isFloat: !0,
              isPot: !0,
              width: b.size,
            };
            y = ha.instance(V);
            M = ha.instance(V);
          }
          var Y = -1,
            ia = null;
          B &&
            (f.Ga = ha.instance({
              isFloat: !0,
              isPot: !1,
              width: b.size,
            }));
          f.wc = ha.instance(b.bias);
          var S = {
            I: function () {
              return b.size;
            },
            ie: function () {
              return X;
            },
            kg: function () {
              return b.classesCount;
            },
            Mi: function (Z) {
              n.b(Z);
            },
            fl: function () {
              b.remap &&
                b.remap.isEnabled &&
                (z = {
                  isEnabled: !0,
                  Ok: ha.instance({
                    isFloat: !1,
                    isFlipY: !1,
                    array: new Uint8Array(b.remap.maskTexture.data),
                    width: b.remap.maskTexture.width,
                    isPot: !1,
                  }),
                  Qc: b.remap.layers.map(function (Z) {
                    return b.parent.Qj(Z);
                  }),
                  depth: b.remap.depth,
                });
            },
            Nl: function () {
              switch (b.connectivityUp) {
                case "direct":
                  ia = Qb.instance(b.connectivity);
                  break;
                case "square":
                  ia = Ya.instance(b.connectivity);
                  break;
                case "squareFast":
                  ia = Fc.instance(b.connectivity, b.activation);
                  break;
                case "full":
                  ia = pc.instance(b.connectivity);
                  break;
                case "conv":
                  (x = b.kernelsNumber),
                    (ia = k.instance(b.connectivity)),
                    E &&
                      (f.Yc = ha.instance({
                        width: X,
                        isFloat: !0,
                        isFlipY: !1,
                        isPot: !1,
                      }));
              }
              if (ia.Rb) {
                var Z = b.size * b.sparsity;
                Y = Math.log(Z / b.size) / Math.log(2);
                f.input = ha.instance({
                  isMipmap: !0,
                  isFloat: !0,
                  isPot: !0,
                  width: Z,
                  He: Y,
                });
                f.ue = ha.instance({
                  isFloat: !0,
                  isPot: !0,
                  width: b.size,
                });
              }
            },
            ta: function (Z) {
              n = Z;
              ia.Rb
                ? (f.input.N(),
                  O && f.wc.b(2),
                  ia.ta(z),
                  f.input.b(0),
                  f.input.Fj(Y),
                  f.ue.N(),
                  O ? Ea.set("s0") : (Ea.set("s27"), Ea.A("u25", H), f.wc.b(1)),
                  f.input.Ni(Y, 0),
                  pa.g(!1, !1),
                  Ea.set(F),
                  p ? y.i() : f.Ga.i(),
                  f.ue.b(0),
                  P && C.tj(),
                  pa.g(!1, !1))
                : (f.Ga.N(), f.wc.b(1), ia.ta());
              p &&
                (Ea.set(v),
                M.i(),
                y.b(0),
                pa.g(!1, !1),
                Ea.set("s46"),
                Ea.A("u6", 1),
                f.Ga.i(),
                M.b(1),
                pa.g(!1, !1));
              if (B)
                return (
                  r
                    ? (f.Ke.N(),
                      f.Ga.b(0),
                      Ea.set(D),
                      Ea.P("u7", 1 / b.size, 1 / b.size),
                      pa.g(!1, !1),
                      (Z = f.Ke))
                    : (Z = f.Ga),
                  Z.b(0),
                  E &&
                    (f.Yc.i(),
                    Ea.set("s21"),
                    Ea.P("u12", x, X / x),
                    pa.g(!1, !1),
                    (Z = f.Yc),
                    f.Yc.b(0)),
                  Z
                );
              Z = f.Ga;
              b.disableNormalize ||
                (Ea.set("gpuRawAvg" === w ? "s8" : "s7"),
                Ea.A("u4", 1 / b.size),
                f.Le.N(),
                f.Ga.b(0),
                pa.g(!1, !1),
                (Z = f.Le));
              switch (w) {
                case "cpuRGBA2Float":
                  Z.Wf(!1);
                  Z = S.il(Z);
                  G(Z);
                  break;
                case "cpuMeanFloat":
                  Z.Wf(!0);
                  Z = Z.jl();
                  G(Z);
                  break;
                case "gpuRawAvg":
                case "gpuRaw":
                  Z.b(0);
                case "none":
                  null !== G && G(Z);
              }
              return !1;
            },
            $i: function (Z) {
              Z && ((w = Z.Me || "none"), (G = Z.Je || null));
              f.Ga = ha.instance({
                isFloat: !0,
                isPot: !0,
                isMipmap: !1,
                width: b.size,
              });
              Z =
                "undefined" !== typeof b.classesCount && b.classesCount
                  ? b.classesCount
                  : b.size * b.size;
              for (var aa = 0, R = 0, qa = 0; aa < Z; ++aa)
                l.push(R + (b.size - 1 - qa) * b.size),
                  t.push([-1, -1, -1, -1]),
                  ++R,
                  R === b.size && ((R = 0), ++qa);
              b.disableNormalize ||
                (f.Le = ha.instance({
                  isFloat: !0,
                  isPot: !0,
                  width: b.size,
                }));
            },
            il: function (Z) {
              var aa = Z.mh();
              l.forEach(function (R, qa) {
                t[qa][0] = aa[0][R];
                t[qa][1] = aa[1][R];
                t[qa][2] = aa[2][R];
                t[qa][3] = aa[3][R];
              });
              return t;
            },
            J: function () {
              for (var Z in f) {
                var aa = f[Z];
                aa && aa.remove();
              }
              ia && (ia.J(), (ia = null));
            },
          };
          b.$c && S.Nl(b.$c);
          return S;
        },
      },
      Qb = {
        instance: function (b) {
          var f = ha.instance(b.weights);
          delete b.weights.data;
          return {
            Rb: !0,
            Lc: function () {
              return 1;
            },
            J: function () {
              f.remove();
            },
            fk: function () {
              return f;
            },
            ta: function () {
              Ea.set("s26");
              f.b(1);
              pa.g(!1, !1);
            },
          };
        },
      },
      pc = {
        instance: function (b) {
          var f = b.fromLayerSize,
            n = ha.instance(b.weights);
          delete b.weights.data;
          return {
            Rb: !0,
            Lc: function () {
              return f;
            },
            J: function () {
              n.remove();
            },
            ta: function (l) {
              if (l.isEnabled) {
                Ea.set("s24");
                l.Ok.b(3);
                var t,
                  w = Math.min(l.Qc.length, l.depth);
                for (t = 0; t < w; ++t) l.Qc[t].Mi(4 + t);
              } else Ea.set("s23");
              Ea.A("u16", b.toLayerSize);
              n.b(1);
              pa.g(!1, !1);
            },
          };
        },
      },
      Ya = {
        instance: function (b) {
          for (
            var f = b.fromLayerSize,
              n = b.toLayerSize,
              l = b.toSparsity,
              t = l * n,
              w = t / f,
              G = f / n,
              B = 0,
              x = 0,
              E = 0,
              O = Array(l * n * l * n * 4),
              C = Array(l * n * l * n * 4),
              P = Array(f * f),
              z = 0;
            z < P.length;
            ++z
          )
            P[z] = 0;
          z = Math.floor(l / 2);
          for (var F = 0.5 / n, H = 0.5 / f, r = 0.5 / t, X = 0; X < n; ++X)
            for (var D = Math.round(X * G), p = 0; p < n; ++p) {
              var v = Math.round(p * G),
                y = X / n,
                M = p / n;
              y += F;
              M += F;
              for (var V = 0; V < l; ++V) {
                var Y = D + V - z;
                0 > Y && (Y += f);
                Y >= f && (Y -= f);
                for (var ia = 0; ia < l; ++ia) {
                  var S = B / t,
                    Z = x / t,
                    aa = v + ia - z;
                  0 > aa && (aa += f);
                  aa >= f && (aa -= f);
                  var R = Y / f,
                    qa = aa / f;
                  Z = 1 - Z - 1 / t;
                  R += H;
                  qa += H;
                  S += r;
                  Z += r;
                  var ya = X * l + V,
                    Ka = p * l + ia;
                  Ka = n * l - Ka - 1;
                  ya = Ka * n * l + ya;
                  O[4 * ya] = S;
                  O[4 * ya + 1] = Z;
                  O[4 * ya + 2] = R;
                  O[4 * ya + 3] = qa;
                  qa = P[aa * f + Y]++;
                  ya = qa % w;
                  R = Y * w + ya;
                  aa = aa * w + (qa - ya) / w;
                  aa = f * w - 1 - aa;
                  aa = aa * f * w + R;
                  C[4 * aa] = S;
                  C[4 * aa + 1] = Z;
                  C[4 * aa + 2] = y;
                  C[4 * aa + 3] = M;
                  ++B >= t && ((B = 0), ++x);
                  ++E;
                }
              }
            }
          P = null;
          var Aa = ha.instance(b.weights);
          delete b.weights.data;
          var ba = ha.instance({
            width: t,
            isFloat: !0,
            array: new Float32Array(C),
            isPot: !0,
          });
          C = null;
          var A = ha.instance({
            width: t,
            isFloat: !0,
            array: new Float32Array(O),
            isPot: !0,
          });
          O = null;
          return {
            Rb: !0,
            Lc: function () {
              return w;
            },
            J: function () {
              ba.remove();
              A.remove();
              Aa.remove();
            },
            ta: function () {
              Ea.set("s22");
              Aa.b(1);
              A.b(2);
              pa.g(!1, !1);
            },
          };
        },
      },
      k = {
        instance: function (b) {
          var f = b.kernelsNumber,
            n = b.toSparsity,
            l = (n * b.toLayerSize) / b.fromLayerSize,
            t = ha.instance(b.weights);
          delete b.weights.data;
          return {
            Rb: !0,
            Lc: function () {
              return l;
            },
            vn: function () {
              return n;
            },
            fk: function () {
              return t;
            },
            J: function () {
              t.remove();
            },
            ta: function () {
              Ea.set("s25");
              Ea.A("u22", f);
              Ea.A("u23", n);
              Ea.A("u16", b.toLayerSize);
              Ea.A("u24", b.fromLayerSize);
              t.b(1);
              pa.g(!1, !1);
            },
          };
        },
      },
      Fc = {
        instance: function (b, f) {
          var n = b.fromLayerSize,
            l = b.toLayerSize,
            t = b.toSparsity,
            w = b.stride ? b.stride : 1,
            G = (t * l) / n,
            B = l < n,
            x = n / l,
            E = ha.instance(b.weights);
          delete b.weights.data;
          var O =
            "s47" +
            [n.toString(), l.toString(), t.toString(), w.toString(), f].join(
              "_"
            );
          Ea.Dj(O) ||
            ((b = hb(f)),
            (l = [
              {
                type: "1f",
                name: "u16",
                value: l,
              },
              {
                type: "1f",
                name: "u30",
                value: w,
              },
            ]),
            B &&
              l.push({
                type: "1f",
                name: "u24",
                value: n,
              }),
            (n = [(B ? G : t).toFixed(1), b]),
            B && n.push(x.toFixed(1)),
            Ea.yg(B ? "s39" : "s38", O, n),
            Ea.f(
              O,
              l.concat([
                {
                  type: "1i",
                  name: "u14",
                  value: 0,
                },
                {
                  type: "1i",
                  name: "u21",
                  value: 1,
                },
                {
                  type: "1i",
                  name: "u13",
                  value: 3,
                },
              ])
            ));
          return {
            Rb: !1,
            Lc: function () {
              return G;
            },
            J: function () {
              E.remove();
            },
            ta: function () {
              Ea.set(O);
              E.b(3);
              pa.g(!1, !1);
            },
          };
        },
      },
      Gc = {
        instance: function (b) {
          var f = b.Ug ? b.Ug : 3,
            n = b.Bg ? b.Bg : 64,
            l = b.bh ? b.bh : 64,
            t = b.xk ? !0 : !1;
          b = {
            isFloat: !1,
            width: n,
            isPot: !1,
            isFlipY: !1,
          };
          var w = ha.instance(b),
            G = ha.instance(b),
            B = ha.instance(b),
            x = ha.instance(b),
            E = ha.instance({
              isFloat: !0,
              width: l,
              isPot: !1,
              isFlipY: !1,
            }),
            O = 1 / n;
          return {
            process: function (C) {
              Ea.set("s35");
              x.i();
              pa.g(t, !1);
              Ea.set("s36");
              for (var P = 0; P < f; ++P)
                w.i(),
                  Ea.P("u7", O, 0),
                  pa.g(t, !1),
                  B.i(),
                  x.b(0),
                  pa.g(t, !1),
                  G.i(),
                  w.b(0),
                  Ea.P("u7", 0, O),
                  pa.g(t, !1),
                  x.i(),
                  B.b(0),
                  pa.g(t, !1),
                  P !== f - 1 && G.b(0);
              Ea.set("s37");
              E.i();
              C.b(0);
              G.b(1);
              x.b(2);
              pa.g(t, !1);
              E.b(0);
            },
            rg: function () {
              return E;
            },
          };
        },
      },
      $b = (function () {
        function b(h) {
          switch (M) {
            case y.movePinch:
              var m = -h.deltaY;
              0 === V && H("pinch", -1, 0.001 * m, null);
          }
          h.deltaY;
          h.preventDefault();
        }

        function f(h) {
          if (-1 !== V)
            switch (M) {
              case y.swipe:
                if (1 !== V) break;
                x();
                O(h, ia);
                var m = ia[0] - Y[0];
                t(m);
                h = m / ((20 * D.offsetWidth) / 100);
                H("swipeMove", Math.min(Math.max(h, -1), 1), h, null);
                break;
              case y.movePinch:
                if (2 === V || 3 === V) {
                  O(h, ia);
                  m = ia[0] - Y[0];
                  var q = ia[1] - Y[1];
                  2 === V
                    ? ((wa += Math.sqrt(m * m + q * q)),
                      10 > wa
                        ? ((Y[0] = ia[0]), (Y[1] = ia[1]))
                        : (Mb || ((Mb = !0), H("moveStart", null, null, null)),
                          (za[0] = m),
                          (za[1] = q),
                          (Z[0] = m - S[0]),
                          (Z[1] = q - S[1]),
                          H("move", za, Z, null),
                          (S[0] = za[0]),
                          (S[1] = za[1])))
                    : 3 === V &&
                      ((h = E(h) / Qa), H("pinch", h, h - a, null), (a = h));
                }
            }
        }

        function n(h) {
          if (-1 !== V)
            switch (M) {
              case y.swipe:
                if (1 !== V) break;
                x();
                O(h, ia);
                h = ia[0] - Y[0];
                var m = 0 > h;
                (h = 20 < (100 * Math.abs(h)) / D.offsetWidth) && m
                  ? H("swipeLeft", aa, null, null)
                  : h && !m && H("swipeRight", aa, null, null);
                var q = function () {
                  setTimeout(function () {
                    B();
                    V = 0;
                    H("swipeEnd", null, null, null);
                  }, 202);
                };
                h
                  ? ((h = function () {
                      var I = (m ? -1 : 1) * D.width,
                        J = ((m ? 1 : -1) * I) / D.width;
                      aa.style.transitionDuration = (400).toString() + "ms";
                      aa.style.left = (Aa[0] + I).toString() + "px";
                      aa.style.top = Aa[1].toString() + "px";
                      aa.style.transform = "rotate( " + J.toString() + "rad )";
                      q();
                    }),
                    Ka ? h() : (ba = h))
                  : ((aa.style.transitionDuration = (200).toString() + "ms"),
                    (aa.style.opacity = "0"),
                    (aa.style.left = Aa[0].toString() + "px"),
                    (aa.style.top = Aa[1].toString() + "px"),
                    (aa.style.transform = ""),
                    q());
                V = -1;
                break;
              case y.movePinch:
                if (2 === V || 3 === V)
                  V === V.move
                    ? H("moveEnd", null, null, null)
                    : 3 === V && H("pinchEnd", null, null, null),
                    (V = 0);
            }
        }

        function l(h) {
          h.preventDefault();
          if (-1 !== V)
            switch (M) {
              case y.swipe:
                if (0 !== V) break;
                x();
                V = 1;
                A = setTimeout(function () {
                  B();
                  A = null;
                  1 === V && ((V = 0), H("swipeEnd", null, null, null));
                }, 1e3);
                w();
                H("swipeStart", null, null, null);
                H("swipeGetCanvas", aa, qa, R);
                O(h, Y);
                break;
              case y.movePinch:
                0 !== V
                  ? 2 !== V ||
                    Mb ||
                    (void 0 === h.changedTouches && void 0 === h.touches) ||
                    ((Qa = E(h)),
                    20 < Qa &&
                      ((V = 3), (a = 1), H("pinchStart", null, null, null)))
                  : 3 !== V &&
                    ((Mb = !1),
                    O(h, Y),
                    (S[0] = 0),
                    (S[1] = 0),
                    (V = 2),
                    (wa = 0));
            }
        }

        function t(h) {
          var m = 0 > h;
          aa.style.left = Aa[0] + h + "px";
          aa.style.transformOrigin = m ? Q : ka;
          aa.style.transform =
            "rotate( " + (((m ? 1 : -1) * h) / D.width).toString() + "rad )";
        }

        function w() {
          Ka = !1;
          var h = D.getBoundingClientRect();
          Aa[0] = h.left;
          Aa[1] = h.top;
          aa.width = Math.round(D.width / 4);
          aa.height = Math.round(D.height / 4);
          R.width = aa.width;
          R.height = aa.height;
          aa.style.width = D.offsetWidth + "px";
          aa.style.height = D.offsetHeight + "px";
          aa.style.left = Aa[0] + "px";
          aa.style.top = Aa[1] + "px";
          setTimeout(G, 0);
        }

        function G() {
          qa.drawImage(D, 0, 0, aa.width, aa.height);
          ya.drawImage(aa, 0, 0);
          Ka = !0;
          document.body.appendChild(aa);
          ba && (ba(), (ba = !1));
        }

        function B() {
          aa.style.transitionDuration = "0ms";
          aa.style.opacity = "1";
          aa.style.transform = "";
          Ka && (document.body.removeChild(aa), (Ka = !1));
        }

        function x() {
          A && (window.clearTimeout(A), (A = null));
        }

        function E(h) {
          C(h, c, 0);
          C(h, d, 1);
          return Math.sqrt(c[0] * c[0] + d[0] * d[0]);
        }

        function O(h, m) {
          void 0 !== h.changedTouches || void 0 !== h.touches
            ? C(h, m, 0)
            : ((m[0] = h.pageX), (m[1] = h.pageY));
        }

        function C(h, m, q) {
          h.touches.length > q
            ? ((m[0] = h.touches[q].pageX), (m[1] = h.touches[q].pageY))
            : ((m[0] = h.changedTouches[q].pageX),
              (m[1] = h.changedTouches[q].pageY));
        }

        function P() {
          v.forEach(function (h) {
            D.removeEventListener(h.type, h.ab, !1);
          });
          return v.splice(0, v.length);
        }

        function z(h) {
          h.forEach(function (m) {
            F(m.type, m.ab);
          });
        }

        function F(h, m) {
          D.removeEventListener(h, m, !1);
          aa.removeEventListener(h, m, !1);
          D.addEventListener(h, m, !1);
          aa.addEventListener(h, m, !1);
          0 ===
            v.filter(function (q) {
              return q.type === h && q.ab === m;
            }).length &&
            v.push({
              type: h,
              ab: m,
            });
        }

        function H(h, m, q, I) {
          p[h].forEach(function (J) {
            J.ab(m, q, I);
          });
        }

        function r(h) {
          return h[0] + "% " + (100 - h[1]).toString() + "%";
        }
        var X = !1,
          D = null,
          p = {
            swipeStart: [],
            swipeEnd: [],
            swipeLeft: [],
            swipeRight: [],
            swipeMove: [],
            swipeGetCanvas: [],
            pinch: [],
            pinchStart: [],
            pinchEnd: [],
            move: [],
            moveStart: [],
            moveEnd: [],
          },
          v = [],
          y = {
            idle: 0,
            swipe: 1,
            movePinch: 2,
          },
          M = y.idle,
          V = 0,
          Y = [0, 0],
          ia = [0, 0],
          S = [0, 0],
          Z = [0, 0],
          aa = document.createElement("canvas"),
          R = document.createElement("canvas"),
          qa = aa.getContext("2d"),
          ya = R.getContext("2d");
        aa.style.position = "fixed";
        aa.style.zIndex = "800";
        aa.style.cursor = "move";
        aa.style.pointerEvents = "none";
        aa.className = "swipeImage";
        aa.setAttribute("draggable", !1);
        var Ka = !1,
          Aa = [0, 0],
          ba = null,
          A = null,
          ka = r([50, 100]),
          Q = r([50, 0]),
          sa = null,
          wa = 0,
          za = [0, 0],
          Qa = 0,
          Mb = !1,
          a = 1,
          c = [0, 0],
          d = [0, 0],
          e = {
            init: function (h) {
              if (X) e.switch_canvas(h.ma);
              else
                return (
                  (D = h.ma),
                  F("mousedown", l),
                  F("mouseup", n),
                  F("mouseout", n),
                  F("mousemove", f),
                  F("mousemove", f),
                  F("wheel", b),
                  F("touchstart", l),
                  F("touchend", n),
                  F("touchmove", f),
                  (X = !0),
                  e
                );
            },
            switch_canvas: function (h) {
              if (!X)
                e.init({
                  ma: h,
                });
              else if (D !== h) {
                var m = P();
                D = h;
                z(m);
                for (var q in p)
                  for (h = p[q], m = h.length - 1; 0 <= m; --m)
                    h[m].ll && h.splice(m, 1);
              }
            },
            get_mode: function () {
              for (var h in y) if (y[h] === M) return h;
              return !1;
            },
            switch_mode: function (h) {
              X &&
                "undefined" !== typeof y[h] &&
                ((h = y[h]), M !== h && (x(), (M = h), (V = 0)));
            },
            add_listener: function (h, m, q) {
              p[h].push({
                ab: m,
                ll: "undefined" === typeof q ? !1 : q,
              });
              return e;
            },
            remove_listener: function (h) {
              p[h].splice(0, p[h].length);
              return e;
            },
            animate_swipe: function (h, m) {
              sa && (clearInterval(sa), (sa = null));
              w();
              var q = (D.width / (m / 1e3)) * ("left" === h ? -1 : 1),
                I = 0,
                J,
                ca = Date.now();
              sa = setInterval(function () {
                sa &&
                  ((J = Date.now()),
                  (I += ((J - ca) / 1e3) * q),
                  t(I),
                  (ca = J),
                  Math.abs(I) > 0.75 * D.width &&
                    sa &&
                    (clearInterval(sa), (sa = null), B()));
              }, 16);
            },
          };
        return e;
      })();
    window.CanvasListeners = $b;
    var ma = {
        tc: [],
        sc: [],
        zd: !1,
        yd: !1,
        Ad: !1,
        isFallback: !1,
        ready: !1,
        isBusy: !1,
      },
      Jb = {
        idealWidth: 800,
        idealHeight: 600,
        minWidth: 480,
        maxWidth: 1280,
        minHeight: 480,
        maxHeight: 1280,
        FOVdesktop: 60,
        rotate: 0,
        di: 23,
        wd: 10,
        vd: 8e3,
      },
      K = {
        Ie: "models3D",
        Ge: "materials",
        hm: "tweakers",
        neuralNetworkPath: "built/jeefitNNC.json",
        X: "",
        qa: "",
        xd: "",
        Yb: 0,
        hj: 20,
        Oc: 64,
        width: 1024,
        height: 1024,
        al: [1.7, 3],
        qh: 500,
        Ed: 0.25,
        rb: [29, 53],
        Ii: 1 / 3.5,
        qc: 2,
        minScale: 0.2,
        maxScale: 0.75,
        borderWidth: 0.4,
        borderHeight: 0.35,
        nStepsX: 5,
        nStepsY: 3,
        nStepsScale: 3,
        hf: [0.09, 0.09, 0.3],
        gm: 55,
        fi: 0.7,
        bi: 1,
        lh: [0.2, 0.6],
        kh: 2,
        gf: [0, 0.6],
        ka: [0.73, 1.16, 0.28],
        Qh: [0, 0, 0],
        Ha: [0, -66, 18],
        Ib: 1,
        ya: [0, -60, 0],
        Uc: 10,
        Rf: 1,
        ce: 73,
        Cd: 0.08,
        zf: 0.9,
        sl: 1.2,
        sh: 0.5,
        tm: 20,
        Cj: !1,
        bc: 145,
        qe: -18,
        oe: 20,
        pe: 3,
        na: [-110, 0],
        Pb: 1,
        Ih: 0.4,
        Jh: 3,
        kd: [0, 0, 0],
        Qb: [1.1, 1],
        Bc: 0,
        Sd: 0.95,
        Rd: 90,
        Qd: 50,
        Ca: 30,
        sa: 0,
        le: !0,
        Sc: !0,
        De: "images/masks/target.jpg",
        Rc: [1 / 255, 175 / 255, 236 / 255, 0],
        Ee: 0.001,
        Ce: 3.14,
        Id: 0,
        Hd: "images/masks/burka.png",
        Dd: Math.PI - Math.PI / 4,
        Od: Math.PI / 4,
        Pe: [0.3, 0.2, 0.1],
        Db: 1,
        Mg: 700,
        Lg: 90,
        Hk: 0.2,
        Kg: 0.04,
        um: "images/backgrounds/viewer3D.png",
        uf: [0, 0, 0],
        tf: [0, 15, 60],
        sd: 0.3,
        Dm: 50,
        ym: Ic ? La : !1,
        zm: Ic ? La : !1,
        Cm: 1e3,
        Fm: 1e3,
        Am: 40,
        xm: [0, 0, -400],
        Pg: 0.1,
        Mk: 0.5,
        Qg: [0.5, 1.5],
        Tc: 30,
        Lk: !0,
      };
    fa.model = !1;
    fa.Hb = 1;
    fa.Zc = 1;
    fa.Qf = !0;
    fa.Sf = !0;
    fa.Pf = !1;
    fa.Ea = !0;
    var Sb = {
      Re: 3.5,
      Jb: "images/debug/picsou.png",
      bd: 45,
      ze: 0.785,
      Ae: 0.3925,
      Be: 5,
      xe: 2,
      ye: 0,
      we: 0,
      vm: "images/backgrounds/bg1.jpg",
      wm: "images/backgrounds/bg1_light.jpg",
      Zh: 1,
      $h: 2,
    };
    "undefined" === typeof K && (K = {});
    "undefined" === typeof fa && (fa = {});
    "undefined" === typeof Sb && (Sb = {});
    K.ka = [0.7, 1.13, 0.262];
    K.jn = [4, 50];
    K.na = [-110, 0];
    K.Ih = 0.3473;
    K.Jh = 3;
    K.kd = [0, -3.6287, 25];
    K.Qb = [0.95, 1];
    fa.Hb = 2.1289;
    fa.Zc = 1;
    Sb.Re = 2.5858;
    Sb.ze = 0.4388;
    Sb.Ae = 0.118;
    Sb.Jb = "images/debug/hdri2.png";
    Sb.bd = 180;
    Sb.Qe = 0.8065;
    Sb.Be = 5.3887;
    Sb.xe = 0.5351;
    Sb.ye = -0.3019;
    Sb.we = 0;
    Sb.Zh = 3.5288;
    Sb.$h = 6.2168;
    K.Rf = 0.4;
    K.Uc = 42;
    K.Cd = 0.02;
    K.Af = [0, 20];
    K.zf = 0.9;
    K.ka[0] *= 0.75;
    K.ka[1] *= 0.6;
    K.ka[2] *= 1;
    K.lh = [0.3, 0.65];
    K.kh = 1.3;
    K.sh = 1;
    var mc = null,
      $c = null,
      pd = null,
      rd = -1,
      od = -1,
      wd = null,
      xd = -1,
      Nb = null,
      Zc = -1,
      Tc = -1,
      Jc = K.al,
      bd = window.devicePixelRatio ? window.devicePixelRatio : 1;
    var lb = {
      Ej: Math.max(Jc[0], bd) / bd,
      ae: Math.min(bd, Jc[1]),
    };
    var Ob = null;
    ma.onLoad = function (b) {
      ma.ready ? b() : ma.tc.push(b);
    };
    ma.onHalfLoad = function (b) {
      ma.load_model ? b() : ma.sc.push(b);
    };
    ma.onWebcamAsk = function (b) {
      ma.zd = b;
    };
    ma.onContextLost = function (b) {
      ma.yd = b;
    };
    ma.onWebcamGet = function (b) {
      ma.Ad = b;
    };
    ma.get_onHalfLoadCallstack = function () {
      return ma.sc;
    };
    ma.set_size = function (b, f) {
      K.width = b;
      K.height = f;
    };
    ma.get_videoDevices = function (b) {
      Ma(b);
    };
    ma.set_videoDevice = function (b) {
      rd = b;
    };
    ma.set_videoSizes = function (b, f, n, l, t, w) {
      Jb.idealWidth = b;
      Jb.idealHeight = f;
      Jb.minWidth = n;
      Jb.maxWidth = l;
      Jb.minHeight = t;
      Jb.maxHeight = w;
    };
    ma.set_loading = function (b, f) {
      b && (K.De = b);
      "number" === typeof f && ((b = new Da(f)), (K.Rc = [b.r, b.S, b.F, 0]));
    };
    ma.set_settings = function (b, f, n) {
      b &&
        Object.keys(b).forEach(function (l) {
          K[l] = b[l];
        });
      f &&
        Object.keys(f).forEach(function (l) {
          Jb[l] = f[l];
        });
      n &&
        Object.keys(n).forEach(function (l) {
          Sb[l] = n[l];
        });
    };
    ma.get_size = function () {
      return {
        width: K.width,
        height: K.height,
      };
    };
    ma.get_cv = function () {
      return Ub.bb();
    };
    ma.set_NNCPath = function (b) {
      K.xd = b;
    };
    ma.set_NNCPath = function (b) {
      K.xd = b;
    };
    ma.set_materialsPath = function (b) {
      K.Ge = b;
    };
    ma.set_modelsPath = function (b) {
      K.Ie = b;
    };
    ma.init = function (b, f, n, l) {
      Ob = Oa();
      ma.Ya = n
        ? function (t, w) {
            n(t, w);
            ma.Ya = !1;
          }
        : function () {};
      ma.Mm = Ob;
      b && (K.X = b);
      f && ma.tc.push(f);
      Sb.Jb = K.X + K.qa + Sb.Jb;
      Ob.fm();
      if (
        !Ub.h({
          Of: "jeefitCanvas",
          ma: l,
          width: Zc,
          height: Tc,
          debug: !1,
          $g: function () {
            ma.yd && ma.yd();
          },
          premultipliedAlpha: !0,
        })
      )
        return ma.Ya && ma.Ya("GL_INCOMPATIBLE", "Cannot init Context"), !1;
      ma.zd && ma.zd();
      ((b = {
        width: {
          min: Jb.minWidth,
          max: Jb.maxWidth,
          ideal: Jb.idealWidth,
        },
        height: {
          min: Jb.minHeight,
          max: Jb.maxHeight,
          ideal: Jb.idealHeight,
        },
      }),
      -1 !== rd)
        ? (b.deviceId = rd)
        : (b.facingMode = {
            ideal: "user",
          });
      ua(
        function (t) {
          ma.Ad && ma.Ad(t);
          mc = t;
          t = mc.videoWidth;
          var w = mc.videoHeight;
          pd = {
            ga_: mc,
            isPot: !1,
            isFloat: !1,
            isFlipY: !0,
          };
          $c = ha.instance(pd);
          Ob.Ze(t, w);
          Ob.te(t, w) && Ob.ff();
        },
        function (t) {
          ma.Ya && ma.Ya("WEBCAM_UNAVAILABLE", t);
        },
        {
          video: b,
          audio: !1,
        }
      );
      return !0;
    };
    window.JEEFITAPI = ma;
    var zd = (function () {
        function b() {
          Za.W();
          g.viewport(0, 0, 1, 1);
          Ea.set("s59");
          l.b(0);
          pa.g(!1);
          g.readPixels(0, 0, 1, 1, g.RGBA, g.UNSIGNED_BYTE, w);
          f(0 < w[0]);
        }
        var f = null,
          n = !1,
          l = null,
          t = !1,
          w = null,
          G = {
            h: function (B) {
              if (t) return !1;
              l = B;
              Ea.yf([
                {
                  id: "s59",
                  name: "_",
                  a:
                    "uniform sampler2D u33;void main(){vec4 a=texture2D(u33,vec2(.25,.5));float b=step(1.99,a.r);gl_FragColor=vec4(b,0.,0.,1.);}",
                  c: ["u33"],
                  precision: "lowp",
                },
              ]);
              Ea.f("s59", [
                {
                  type: "1i",
                  name: "u33",
                  value: 0,
                },
              ]);
              w = new Uint8Array(4);
              return (t = !0);
            },
            start: function (B, x) {
              G.stop();
              f = x;
              n = window.setInterval(b, B);
            },
            stop: function () {
              n && (window.clearInterval(b), (n = !1));
            },
          };
        return G;
      })(),
      kd = kd || {};
    Da.prototype = {
      constructor: Da,
      r: 1,
      S: 1,
      F: 1,
      set: function (b) {
        b instanceof Da
          ? this.B(b)
          : "number" === typeof b
          ? Ha(this, b)
          : "string" === typeof b && Va(this, b);
        return this;
      },
      wl: (function () {
        function b(f, n, l) {
          0 > l && (l += 1);
          1 < l && --l;
          return l < 1 / 6
            ? f + 6 * (n - f) * l
            : 0.5 > l
            ? n
            : l < 2 / 3
            ? f + 6 * (n - f) * (2 / 3 - l)
            : f;
        }
        return function (f, n, l) {
          f = kd.Math.hn(f, 1);
          n = kd.Math.Ld(n, 0, 1);
          l = kd.Math.Ld(l, 0, 1);
          0 === n
            ? (this.r = this.S = this.F = l)
            : ((n = 0.5 >= l ? l * (1 + n) : l + n - l * n),
              (l = 2 * l - n),
              (this.r = b(l, n, f + 1 / 3)),
              (this.S = b(l, n, f)),
              (this.F = b(l, n, f - 1 / 3)));
          return this;
        };
      })(),
      clone: function () {
        return new this.constructor(this.r, this.S, this.F);
      },
      B: function (b) {
        this.r = b.r;
        this.S = b.S;
        this.F = b.F;
        return this;
      },
      add: function (b) {
        this.r += b.r;
        this.S += b.S;
        this.F += b.F;
        return this;
      },
      multiply: function (b) {
        this.r *= b.r;
        this.S *= b.S;
        this.F *= b.F;
        return this;
      },
      xa: function (b) {
        this.r *= b;
        this.S *= b;
        this.F *= b;
        return this;
      },
      $a: function (b, f) {
        void 0 === f && (f = 0);
        this.r = b[f];
        this.S = b[f + 1];
        this.F = b[f + 2];
        return this;
      },
    };
    var Ad = {};
    xb.prototype = {
      constructor: xb,
      get x() {
        return this.l;
      },
      set x(b) {
        this.l = b;
      },
      get y() {
        return this.m;
      },
      set y(b) {
        this.m = b;
      },
      get z() {
        return this.o;
      },
      set z(b) {
        this.o = b;
      },
      get w() {
        return this.C;
      },
      set w(b) {
        this.C = b;
      },
      set: function (b, f, n, l) {
        this.l = b;
        this.m = f;
        this.o = n;
        this.C = l;
        return this;
      },
      clone: function () {
        return new this.constructor(this.l, this.m, this.o, this.C);
      },
      B: function (b) {
        this.l = b.x;
        this.m = b.y;
        this.o = b.z;
        this.C = b.w;
        return this;
      },
      inverse: function () {
        this.l *= -1;
        this.m *= -1;
        this.o *= -1;
        this.normalize();
        return this;
      },
      Dc: function (b) {
        return this.l * b.l + this.m * b.m + this.o * b.o + this.C * b.C;
      },
      ve: function () {
        return (
          this.l * this.l + this.m * this.m + this.o * this.o + this.C * this.C
        );
      },
      length: function () {
        return Math.sqrt(
          this.l * this.l + this.m * this.m + this.o * this.o + this.C * this.C
        );
      },
      normalize: function () {
        var b = this.length();
        0 === b
          ? ((this.o = this.m = this.l = 0), (this.C = 1))
          : ((b = 1 / b),
            (this.l *= b),
            (this.m *= b),
            (this.o *= b),
            (this.C *= b));
        return this;
      },
      multiply: function (b, f) {
        return void 0 !== f
          ? (console.warn(
              "JETHREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
            ),
            Vb(this, b, f))
          : Vb(this, this, b);
      },
      Kh: function (b, f) {
        if (0 === f) return this;
        if (1 === f) return this.B(b);
        var n = this.l,
          l = this.m,
          t = this.o,
          w = this.C,
          G = w * b.C + n * b.l + l * b.m + t * b.o;
        0 > G
          ? ((this.C = -b.C),
            (this.l = -b.l),
            (this.m = -b.m),
            (this.o = -b.o),
            (G = -G))
          : this.B(b);
        if (1 <= G)
          return (this.C = w), (this.l = n), (this.m = l), (this.o = t), this;
        b = Math.acos(G);
        var B = Math.sqrt(1 - G * G);
        if (0.001 > Math.abs(B))
          return (
            (this.C = 0.5 * (w + this.C)),
            (this.l = 0.5 * (n + this.l)),
            (this.m = 0.5 * (l + this.m)),
            (this.o = 0.5 * (t + this.o)),
            this
          );
        G = Math.sin((1 - f) * b) / B;
        f = Math.sin(f * b) / B;
        this.C = w * G + this.C * f;
        this.l = n * G + this.l * f;
        this.m = l * G + this.m * f;
        this.o = t * G + this.o * f;
        return this;
      },
      $a: function (b, f) {
        void 0 === f && (f = 0);
        this.l = b[f];
        this.m = b[f + 1];
        this.o = b[f + 2];
        this.C = b[f + 3];
        return this;
      },
    };
    xb.Kh = function (b, f, n, l) {
      return n.B(b).Kh(f, l);
    };
    Cb.prototype = {
      constructor: Cb,
      get width() {
        return this.x;
      },
      set width(b) {
        this.x = b;
      },
      get height() {
        return this.y;
      },
      set height(b) {
        this.y = b;
      },
      set: function (b, f) {
        this.x = b;
        this.y = f;
        return this;
      },
      uh: function (b) {
        this.x = b;
        return this;
      },
      vh: function (b) {
        this.y = b;
        return this;
      },
      clone: function () {
        return new this.constructor(this.x, this.y);
      },
      B: function (b) {
        this.x = b.x;
        this.y = b.y;
        return this;
      },
      add: function (b, f) {
        if (void 0 !== f)
          return (
            console.warn(
              "JETHREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
            ),
            this.uc(b, f)
          );
        this.x += b.x;
        this.y += b.y;
        return this;
      },
      uc: function (b, f) {
        this.x = b.x + f.x;
        this.y = b.y + f.y;
        return this;
      },
      sub: function (b, f) {
        if (void 0 !== f)
          return (
            console.warn(
              "JETHREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
            ),
            this.Ta(b, f)
          );
        this.x -= b.x;
        this.y -= b.y;
        return this;
      },
      Ta: function (b, f) {
        this.x = b.x - f.x;
        this.y = b.y - f.y;
        return this;
      },
      multiply: function (b) {
        this.x *= b.x;
        this.y *= b.y;
        return this;
      },
      xa: function (b) {
        isFinite(b) ? ((this.x *= b), (this.y *= b)) : (this.y = this.x = 0);
        return this;
      },
      Wd: function (b) {
        return this.xa(1 / b);
      },
      min: function (b) {
        this.x = Math.min(this.x, b.x);
        this.y = Math.min(this.y, b.y);
        return this;
      },
      max: function (b) {
        this.x = Math.max(this.x, b.x);
        this.y = Math.max(this.y, b.y);
        return this;
      },
      Ld: function (b, f) {
        this.x = Math.max(b.x, Math.min(f.x, this.x));
        this.y = Math.max(b.y, Math.min(f.y, this.y));
        return this;
      },
      floor: function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
      },
      ceil: function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
      },
      round: function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
      },
      Dc: function (b) {
        return this.x * b.x + this.y * b.y;
      },
      ve: function () {
        return this.x * this.x + this.y * this.y;
      },
      length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      normalize: function () {
        return this.Wd(this.length());
      },
      $a: function (b, f) {
        void 0 === f && (f = 0);
        this.x = b[f];
        this.y = b[f + 1];
        return this;
      },
    };
    Xa.prototype = {
      constructor: Xa,
      set: function (b, f, n) {
        this.x = b;
        this.y = f;
        this.z = n;
        return this;
      },
      uh: function (b) {
        this.x = b;
        return this;
      },
      vh: function (b) {
        this.y = b;
        return this;
      },
      clone: function () {
        return new this.constructor(this.x, this.y, this.z);
      },
      B: function (b) {
        this.x = b.x;
        this.y = b.y;
        this.z = b.z;
        return this;
      },
      add: function (b, f) {
        if (void 0 !== f)
          return (
            console.warn(
              "JETHREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
            ),
            this.uc(b, f)
          );
        this.x += b.x;
        this.y += b.y;
        this.z += b.z;
        return this;
      },
      uc: function (b, f) {
        this.x = b.x + f.x;
        this.y = b.y + f.y;
        this.z = b.z + f.z;
        return this;
      },
      sub: function (b, f) {
        if (void 0 !== f)
          return (
            console.warn(
              "JETHREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
            ),
            this.Ta(b, f)
          );
        this.x -= b.x;
        this.y -= b.y;
        this.z -= b.z;
        return this;
      },
      Ta: function (b, f) {
        this.x = b.x - f.x;
        this.y = b.y - f.y;
        this.z = b.z - f.z;
        return this;
      },
      multiply: function (b, f) {
        if (void 0 !== f)
          return (
            console.warn(
              "JETHREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
            ),
            (this.x = b.x * f.x),
            (this.y = b.y * f.y),
            (this.z = b.z * f.z),
            this
          );
        this.x *= b.x;
        this.y *= b.y;
        this.z *= b.z;
        return this;
      },
      xa: function (b) {
        isFinite(b)
          ? ((this.x *= b), (this.y *= b), (this.z *= b))
          : (this.z = this.y = this.x = 0);
        return this;
      },
      Wd: function (b) {
        return this.xa(1 / b);
      },
      min: function (b) {
        this.x = Math.min(this.x, b.x);
        this.y = Math.min(this.y, b.y);
        this.z = Math.min(this.z, b.z);
        return this;
      },
      max: function (b) {
        this.x = Math.max(this.x, b.x);
        this.y = Math.max(this.y, b.y);
        this.z = Math.max(this.z, b.z);
        return this;
      },
      Ld: function (b, f) {
        this.x = Math.max(b.x, Math.min(f.x, this.x));
        this.y = Math.max(b.y, Math.min(f.y, this.y));
        this.z = Math.max(b.z, Math.min(f.z, this.z));
        return this;
      },
      floor: function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
      },
      ceil: function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
      },
      round: function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
      },
      Dc: function (b) {
        return this.x * b.x + this.y * b.y + this.z * b.z;
      },
      ve: function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      },
      length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      },
      normalize: function () {
        return this.Wd(this.length());
      },
      $a: function (b, f) {
        void 0 === f && (f = 0);
        this.x = b[f];
        this.y = b[f + 1];
        this.z = b[f + 2];
        return this;
      },
    };
    bc.Lm = "XYZ YZX ZXY XZY YXZ ZYX".split(" ");
    bc.ci = "XYZ";
    bc.prototype = {
      constructor: bc,
      get x() {
        return this.l;
      },
      set x(b) {
        this.l = b;
      },
      get y() {
        return this.m;
      },
      set y(b) {
        this.m = b;
      },
      get z() {
        return this.o;
      },
      set z(b) {
        this.o = b;
      },
      get order() {
        return this.Ka;
      },
      set order(b) {
        this.Ka = b;
      },
      set: function (b, f, n, l) {
        this.l = b;
        this.m = f;
        this.o = n;
        this.Ka = l || this.Ka;
        return this;
      },
      clone: function () {
        return new this.constructor(this.l, this.m, this.o, this.Ka);
      },
      B: function (b) {
        this.l = b.l;
        this.m = b.m;
        this.o = b.o;
        this.Ka = b.Ka;
        return this;
      },
      $a: function (b) {
        this.l = b[0];
        this.m = b[1];
        this.o = b[2];
        void 0 !== b[3] && (this.Ka = b[3]);
        return this;
      },
    };
    qc.prototype = {
      constructor: qc,
      set: function (b, f) {
        this.min.B(b);
        this.max.B(f);
        return this;
      },
      clone: function () {
        return new this.constructor().B(this);
      },
      B: function (b) {
        this.min.B(b.min);
        this.max.B(b.max);
        return this;
      },
      empty: function () {
        return (
          this.max.x < this.min.x ||
          this.max.y < this.min.y ||
          this.max.z < this.min.z
        );
      },
      size: function (b) {
        return (b || new Xa()).Ta(this.max, this.min);
      },
      getParameter: function (b, f) {
        return (f || new Xa()).set(
          (b.x - this.min.x) / (this.max.x - this.min.x),
          (b.y - this.min.y) / (this.max.y - this.min.y),
          (b.z - this.min.z) / (this.max.z - this.min.z)
        );
      },
      translate: function (b) {
        this.min.add(b);
        this.max.add(b);
        return this;
      },
    };
    tc.prototype = {
      constructor: tc,
      set: function (b, f, n, l, t, w, G, B, x, E, O, C, P, z, F, H) {
        var r = this.elements;
        r[0] = b;
        r[4] = f;
        r[8] = n;
        r[12] = l;
        r[1] = t;
        r[5] = w;
        r[9] = G;
        r[13] = B;
        r[2] = x;
        r[6] = E;
        r[10] = O;
        r[14] = C;
        r[3] = P;
        r[7] = z;
        r[11] = F;
        r[15] = H;
        return this;
      },
      clone: function () {
        return new tc().$a(this.elements);
      },
      B: function (b) {
        this.elements.set(b.elements);
        return this;
      },
      multiply: function (b, f) {
        return void 0 !== f
          ? (console.warn(
              "JETHREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
            ),
            cc(this, b, f))
          : cc(this, this, b);
      },
      xa: function (b) {
        var f = this.elements;
        f[0] *= b;
        f[4] *= b;
        f[8] *= b;
        f[12] *= b;
        f[1] *= b;
        f[5] *= b;
        f[9] *= b;
        f[13] *= b;
        f[2] *= b;
        f[6] *= b;
        f[10] *= b;
        f[14] *= b;
        f[3] *= b;
        f[7] *= b;
        f[11] *= b;
        f[15] *= b;
        return this;
      },
      setPosition: function (b) {
        var f = this.elements;
        f[12] = b.x;
        f[13] = b.y;
        f[14] = b.z;
        return this;
      },
      translate: function () {
        console.error("JETHREE.Matrix4: .translate() has been removed.");
      },
      scale: function (b) {
        var f = this.elements,
          n = b.x,
          l = b.y;
        b = b.z;
        f[0] *= n;
        f[4] *= l;
        f[8] *= b;
        f[1] *= n;
        f[5] *= l;
        f[9] *= b;
        f[2] *= n;
        f[6] *= l;
        f[10] *= b;
        f[3] *= n;
        f[7] *= l;
        f[11] *= b;
        return this;
      },
      $a: function (b) {
        this.elements.set(b);
        return this;
      },
    };
    Ec.prototype = {
      constructor: Ec,
      clone: function () {
        return new this.constructor().B(this);
      },
      B: function (b) {
        this.va = b.va;
        this.F = b.F;
        this.wa = b.wa;
        this.Fa.B(b.Fa);
        this.color.B(b.color);
        this.Eb = b.Eb;
        for (var f = 0, n = b.rd.length; f < n; f++)
          this.rd[f] = b.rd[f].clone();
        f = 0;
        for (n = b.qf.length; f < n; f++) this.qf[f] = b.qf[f].clone();
        return this;
      },
    };
    var L = (function () {
        function b(p, v, y) {
          v = p.createShader(v);
          p.shaderSource(v, y);
          p.compileShader(v);
          return p.getShaderParameter(v, p.COMPILE_STATUS) ? v : !1;
        }

        function f(p, v) {
          Ca.ea() && (v.a = v.a.replace(/gl_FragData\[([0-3])\]/g, "gbuf$1"));
          v.sf = b(p, p.VERTEX_SHADER, v.j, v.name + " VERTEX");
          v.ee = b(p, p.FRAGMENT_SHADER, v.a, v.name + " FRAGMENT");
          var y = p.createProgram();
          p.attachShader(y, v.sf);
          p.attachShader(y, v.ee);
          p.linkProgram(y);
          return y;
        }

        function n(p) {
          p.j = "#version 300 es\n" + p.j.replace(/varying/g, "out");
          p.a = "#version 300 es\n" + p.a.replace(/varying/g, "in");
          p.j = p.j.replace(/texture2D\(/g, "texture(");
          p.a = p.a.replace(/texture2D\(/g, "texture(");
          p.aa ||
            ((p.a = p.a.replace(
              /void main/g,
              "out vec4 FragColor;\nvoid main"
            )),
            (p.a = p.a.replace(/gl_FragColor/g, "FragColor")));
          var v = 0,
            y = [];
          p.j = p.j.replace(
            /attribute ([a-z]+[0-4]*) ([_a-zA-Z,0-9\s]+);/g,
            function (M, V, Y) {
              var ia = "";
              Y.split(",").forEach(function (S) {
                S = S.trim();
                ia += "layout(location = " + v + ") in " + V + " " + S + ";\n";
                y.push(S);
                ++v;
              });
              return ia;
            }
          );
          p.hi = y;
        }

        function l(p, v) {
          if (v.Ab) return !1;
          var y = Ca.ea();
          fa.xn || y || p.enableVertexAttribArray(0);
          void 0 === v.aa && (v.aa = !1);
          v.aa &&
            ((v.de = D.Hj()),
            (v.rc = y ? 3 : 2),
            (v.En = y ? "none" : "highp"));
          v.id = X++;
          void 0 === v.rc && (v.rc = 2);
          void 0 === v.de && (v.de = "");
          void 0 === v.Yh && (v.Yh = "");
          void 0 === v.precision && (v.precision = "highp");
          "none" !== v.precision &&
            (v.a = "precision " + v.precision + " float;\n" + v.a);
          v.a = v.de + v.a;
          void 0 === v.j &&
            (v.j =
              "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}");
          v.j = v.Yh + v.j;
          y && 3 <= v.rc && n(v);
          v.za &&
            v.za.forEach(function (M) {
              v.j = v.j.replace(M.search, M.replace);
              v.a = v.a.replace(M.search, M.replace);
            });
          v.ha = f(p, v);
          v.u = {};
          v.c.forEach(function (M) {
            v.u[M] = p.getUniformLocation(v.ha, M);
          });
          v.attributes = {};
          v.ra = [];
          v.pf = 0;
          void 0 === v.D && (v.D = ["a0"]);
          void 0 === v.K && (v.K = [2]);
          v.D.forEach(function (M, V) {
            var Y =
              y && 3 <= v.rc ? v.hi.indexOf(M) : p.getAttribLocation(v.ha, M);
            v.attributes[M] = Y;
            v.ra.push(Y);
            v.pf += 4 * v.K[V];
          });
          v.set = function () {
            H !== v.id &&
              (-1 !== H && r.G(),
              (H = v.id),
              (r = v),
              p.useProgram(v.ha),
              v.ra.forEach(function (M) {
                0 !== M && p.enableVertexAttribArray(M);
              }));
          };
          v.G = function () {
            H = -1;
            v.ra.forEach(function (M) {
              0 !== M && p.disableVertexAttribArray(M);
            });
          };
          v.Ab = !0;
        }

        function t(p, v) {
          l(p, v);
          v.set();
          H = -1;
          return v;
        }

        function w() {
          return {
            name: "_",
            a:
              "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
            c: ["u1"],
            precision: "highp",
          };
        }

        function G() {
          D.f("s88", [
            {
              type: "1i",
              name: "u1",
              value: 0,
            },
          ]);
          D.f("s89", [
            {
              type: "1i",
              name: "u132",
              value: 0,
            },
          ]);
          D.f("s90", [
            {
              type: "1i",
              name: "u56",
              value: 0,
            },
          ]);
        }

        function B() {
          var p = "u33 u122 u123 u124 u125 u34 u60".split(" ").concat(P, z);
          F.s91 = {
            name: "_",
            a:
              "varying vec3 vv0;varying float vv1;void main(){gl_FragColor=vec4(vv0,vv1);}",
            j:
              "attribute vec3 a0;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u128,u129,u124,u125,u131;varying vec3 vv0;varying float vv1;const vec2 e=vec2(1.,1.);const vec3 l=vec3(1.,1.,1.);const vec2 w=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 m(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u33,vec2(.25,.5));vec2 d=u67*e;vec3 a=u67*l;vec2 n=mix(c.a*u34,e,d),f=(2.*c.gb-e)*(1.-d);f.x*=-1.;vec3 g=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 o=m(g);vec3 p=mix(u122,u65,a);float q=mix(u123,u68,u67);vec3 r=mix(u60,u66,a);float s=mix(u63,1.,u67);vec2 h=u62/n;vec3 i=a0;float t=max(0.,-a0.z-u124)*u125;i.x+=t*sign(a0.x)*(1.-u67);vec3 b=o*(i+p)*q+r;b.x+=u59*sin(g.y);vec2 u=h*s;vec3 v=vec3(f*u,-h)+b*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(v,1.)),vv0=b,vv1=smoothstep(u128,u129,a0.z);}",
            c: ["u128", "u129"].concat(p),
            D: ["a0"],
            precision: "highp",
          };
          F.s92 = {
            name: "_",
            a:
              "uniform sampler2D u1;uniform vec3 u126;uniform float u55;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);vec3 b=mix(u126,a.rgb,a.a);vec4 c=vec4(mix(a.rgb*u126,b,u55),a.a);gl_FragColor=c;}",
            j:
              "attribute vec3 a0;attribute vec2 a1;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u124,u125,u131;varying vec2 vv0;const vec2 e=vec2(1.,1.);const vec3 k=vec3(1.,1.,1.);const vec2 v=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 l(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*k;vec2 m=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 n=l(f);vec3 o=mix(u122,u65,a);float p=mix(u123,u68,u67);vec3 q=mix(u60,u66,a);float r=mix(u63,1.,u67);vec2 g=u62/m;vec3 h=a0;float s=max(0.,-a0.z-u124)*u125;h.x+=s*sign(a0.x)*(1.-u67);vec3 i=n*(h+o)*p+q;i.x+=u59*sin(f.y);vec2 t=g*r;vec3 u=vec3(d*t,-g)+i*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(u,1.)),vv0=a1;}",
            c: ["u126"].concat(O, p),
            D: ["a0", "a1"],
            K: [3, 2],
            precision: "lowp",
          };
          F.s93 = {
            name: "_",
            a: "uniform vec3 u126;void main(){gl_FragColor=vec4(u126,0.);}",
            j:
              "attribute vec3 a0;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u124,u125,u131;const vec2 e=vec2(1.,1.);const vec3 j=vec3(1.,1.,1.);const vec2 u=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 k(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*j;vec2 l=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 m=k(f);vec3 n=mix(u122,u65,a);float o=mix(u123,u68,u67);vec3 p=mix(u60,u66,a);float q=mix(u63,1.,u67);vec2 g=u62/l;vec3 h=a0;float r=max(0.,-a0.z-u124)*u125;h.x+=r*sign(a0.x)*(1.-u67);vec3 i=m*(h+n)*o+p;i.x+=u59*sin(f.y);vec2 s=g*q;vec3 t=vec3(d*s,-g)+i*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(t,1.));}",
            c: ["u126"].concat(p),
            K: [3],
            precision: "lowp",
          };
          F.s94 = {
            name: "_",
            a:
              "uniform vec4 u6;varying vec3 vv0;varying float vv1;void main(){float a=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv1);gl_FragColor=vec4(normalize(vv0),a);}",
            j:
              "attribute vec3 a0,a2;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u124,u125,u131;varying vec3 vv0;varying float vv1;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 w=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 n(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*m;vec2 o=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 g=n(f);vec3 p=mix(u122,u65,a);float q=mix(u123,u68,u67);vec3 r=mix(u60,u66,a);float s=mix(u63,1.,u67);vec2 h=u62/o;vec3 i=a0;float t=max(0.,-a0.z-u124)*u125;i.x+=t*sign(a0.x)*(1.-u67);vec3 j=g*(i+p)*q+r;j.x+=u59*sin(f.y);vec2 u=h*s;vec3 v=vec3(d*u,-h)+j*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(v,1.)),vv0=g*a2*vec3(1.,-1.,-1.),vv1=a0.y;}",
            c: ["u6", "u60"].concat(p),
            D: ["a0", "a2"],
            precision: "highp",
          };
          F.s95 = {
            name: "_",
            a:
              "uniform sampler2D u132;uniform vec4 u6;varying vec4 vv0;varying vec3 vv1;varying vec2 vv2;varying float vv3;const vec3 i=vec3(1.,1.,1.);void main(){vec3 j=vec3(0.,0.,-1.),c=normalize(vv1),b=texture2D(u132,vv2).xyz;b=normalize(b*255./127.-1.007874*i);vec3 d=vv0.xyz,k=cross(c,d)*vv0.w;mat3 l=mat3(d,k,c);vec3 a=l*b;a=dot(a,j)>0.?vv1:a;float m=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv3);gl_FragColor=vec4(a,m);}",
            j:
              "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u124,u125,u131;varying vec4 vv0;varying vec3 vv1;varying vec2 vv2;varying float vv3;const vec2 e=vec2(1.,1.);const vec3 o=vec3(1.,1.,1.);const vec2 y=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 p(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*o;vec2 q=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 g=p(f);vec3 r=mix(u122,u65,a);float s=mix(u123,u68,u67);vec3 t=mix(u60,u66,a);float u=mix(u63,1.,u67);vec2 h=u62/q;vec3 i=a0;float v=max(0.,-a0.z-u124)*u125;i.x+=v*sign(a0.x)*(1.-u67);vec3 j=g*(i+r)*s+t;j.x+=u59*sin(f.y);vec2 w=h*u;vec3 x=vec3(d*w,-h)+j*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(x,1.)),vv1=g*a2*vec3(1.,-1.,-1.),vv0=a3,vv2=a1,vv3=a0.y;}",
            c: ["u6", "u60", "u132"].concat(p),
            D: ["a3", "a0", "a2", "a1"],
            K: [4, 3, 3, 2],
            precision: "highp",
          };
          F.s96 = {
            name: "_",
            a:
              "uniform vec4 u91;uniform float u127;void main(){float b=u127;vec4 a=u91;float c=floor(15.99*b),d=floor(15.99*a.b);a.b=(c+16.*d)/255.,gl_FragColor=a;}",
            j:
              "attribute vec3 a0;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u124,u125,u131;const vec2 e=vec2(1.,1.);const vec3 j=vec3(1.,1.,1.);const vec2 u=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 k(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*j;vec2 l=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 m=k(f);vec3 n=mix(u122,u65,a);float o=mix(u123,u68,u67);vec3 p=mix(u60,u66,a);float q=mix(u63,1.,u67);vec2 g=u62/l;vec3 h=a0;float r=max(0.,-a0.z-u124)*u125;h.x+=r*sign(a0.x)*(1.-u67);vec3 i=m*(h+n)*o+p;i.x+=u59*sin(f.y);vec2 s=g*q;vec3 t=vec3(d*s,-g)+i*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(t,1.));}",
            c: ["u91", "u127"].concat(p),
            precision: "lowp",
          };
          F.s97 = {
            name: "_",
            a:
              "uniform sampler2D u56;uniform vec4 u91,u57;uniform float u127;varying vec2 vv0;vec2 i(float d,float e){float f=floor(d*255.+.01),a=pow(2.,e),g=256./a,b=f/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float c=u127;vec4 a=u91,d=texture2D(u56,vv0);vec2 b=i(d.b,4.);float f=1.-b.x,g=b.y;b=i(d.a,1.);float h=b.x,e=b.y;vec4 k=vec4(d.rg,g,h);float l=f;a=mix(a,k,u57*e),c=mix(c,l,u57.b*e);float m=floor(15.99*c),n=floor(15.99*a.b);a.b=(m+16.*n)/255.,gl_FragColor=a;}",
            j:
              "attribute vec3 a0;attribute vec2 a1;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u124,u125,u131;varying vec2 vv0;const vec2 e=vec2(1.,1.);const vec3 k=vec3(1.,1.,1.);const vec2 v=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 l(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*k;vec2 m=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 n=l(f);vec3 o=mix(u122,u65,a);float p=mix(u123,u68,u67);vec3 q=mix(u60,u66,a);float r=mix(u63,1.,u67);vec2 g=u62/m;vec3 h=a0;float s=max(0.,-a0.z-u124)*u125;h.x+=s*sign(a0.x)*(1.-u67);vec3 i=n*(h+o)*p+q;i.x+=u59*sin(f.y);vec2 t=g*r;vec3 u=vec3(d*t,-g)+i*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(u,1.)),vv0=a1;}",
            c: ["u91", "u127"].concat(C, p),
            D: ["a0", "a1"],
            K: [3, 2],
            precision: "lowp",
          };
          p = ["u115", "u103", "u116"];
          F.s98 = {
            name: "_",
            a:
              "varying vec3 vv0;varying float vv1;void main(){gl_FragColor=vec4(vv0,vv1);}",
            j:
              "attribute vec3 a0;uniform mat4 u115,u103,u116;varying vec3 vv0;varying float vv1;void main(){vec4 a=u116*vec4(a0,1.);gl_Position=u115*u103*a,vv0=a.xyz,vv1=1.;}",
            c: p,
            precision: "highp",
          };
          F.s99 = {
            name: "_",
            a:
              "varying vec3 vv0;void main(){gl_FragColor=vec4(normalize(vv0),1.);}",
            j:
              "attribute vec3 a0,a2;uniform mat4 u115,u103,u116;varying vec3 vv0;varying float vv1;void main(){vec4 a=u116*vec4(a2,0.);gl_Position=u115*u103*u116*vec4(a0,1.),vv0=a.xyz,vv1=a0.y;}",
            c: p,
            D: ["a0", "a2"],
            precision: "highp",
          };
          F.s89 = {
            name: "_",
            a:
              "uniform sampler2D u132;uniform vec3 u133;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;const vec3 i=vec3(1.,1.,1.);void main(){vec3 j=normalize(vv1+u133),c=normalize(vv2),b=texture2D(u132,vv3).xyz;b=normalize(b*255./127.-1.007874*i);vec3 d=vv0.xyz,k=cross(c,d)*vv0.w;mat3 l=mat3(d,k,c);vec3 a=l*b;a=dot(a,j)>0.?vv2:a,gl_FragColor=vec4(a,1.);}",
            j:
              "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u115,u103,u116;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;void main(){vec4 b=u116*vec4(a2,0.),a=u116*vec4(a0,1.);gl_Position=u115*u103*a,vv0=a3,vv2=b.xyz,vv3=a1,vv1=a.xyz;}",
            c: ["u132", "u133"].concat(p),
            D: ["a0", "a2", "a1", "a3"],
            precision: "highp",
          };
          F.s88 = {
            name: "_",
            a:
              "uniform sampler2D u1;uniform vec3 u126;uniform float u55;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);vec3 b=mix(u126,a.rgb,a.a);vec4 c=vec4(mix(a.rgb*u126,b,u55),a.a);gl_FragColor=c;}",
            j:
              "attribute vec3 a0;attribute vec2 a1;uniform mat4 u115,u103,u116;varying vec2 vv0;const vec4 f=vec4(0.,0.,5e-4,0.);void main(){gl_Position=u115*u103*u116*vec4(a0,1.)+f,vv0=a1;}",
            c: ["u126"].concat(O, p),
            D: ["a0", "a1"],
            za: [
              {
                search: "0.0005",
                replace: eb.$() ? "0.0005" : "0.0",
              },
            ],
            precision: "lowp",
          };
          F.s100 = {
            name: "_",
            a:
              "uniform vec4 u91;uniform float u127;void main(){float b=u127;vec4 a=u91;float c=floor(15.99*b),d=floor(15.99*a.b);a.b=(c+16.*d)/255.,gl_FragColor=a;}",
            j:
              "attribute vec3 a0;uniform mat4 u115,u103,u116;void main(){gl_Position=u115*u103*u116*vec4(a0,1.);}",
            c: ["u91"].concat(p),
            precision: "highp",
          };
          F.s90 = {
            name: "_",
            a:
              "uniform sampler2D u56;uniform vec4 u91,u57;uniform float u127;varying vec2 vv0;vec2 i(float d,float e){float f=floor(d*255.+.01),a=pow(2.,e),g=256./a,b=f/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float c=u127;vec4 a=u91,d=texture2D(u56,vv0);vec2 b=i(d.b,4.);float f=1.-b.x,g=b.y;b=i(d.a,1.);float h=b.x,e=b.y;vec4 k=vec4(d.rg,g,h);float l=f;a=mix(a,k,u57*e),c=mix(c,l,u57.b*e);float m=floor(15.99*c),n=floor(15.99*a.b);a.b=(m+16.*n)/255.,gl_FragColor=a;}",
            j:
              "attribute vec3 a0;attribute vec2 a1;uniform mat4 u115,u103,u116;varying vec2 vv0;void main(){gl_Position=u115*u103*u116*vec4(a0,1.),vv0=a1;}",
            c: ["u91"].concat(C, p),
            D: ["a0", "a1"],
            K: [3, 2],
            precision: "highp",
          };
        }

        function x() {
          for (var p in F) l(g, F[p]);
        }
        var E = !1,
          O = ["u1", "u55"],
          C = ["u56", "u57"],
          P = "u58 u59 u60 u61 u62 u63".split(" "),
          z = "u64 u65 u66 u67 u68 u69".split(" "),
          F = {},
          H = -1,
          r = null,
          X = 0,
          D = {
            Hj: function () {
              return Ca.ea()
                ? "precision highp float;\n            layout(location = 0) out vec4 gbuf0;\n            layout(location = 1) out vec4 gbuf1;\n            layout(location = 2) out vec4 gbuf2;\n            layout(location = 3) out vec4 gbuf3;\n"
                : "#extension GL_EXT_draw_buffers : require\n";
            },
            ia: function (p, v) {
              F[p] = v;
              E && l(g, F[p]);
            },
            Hn: function (p, v) {
              F[p] = v;
              v.Ab = !1;
              l(g, F[p]);
            },
            Cb: function () {
              return E;
            },
            h: function () {
              F.s0 = w();
              F.s1 = {
                name: "_",
                a:
                  "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                c: ["u1"],
                precision: "lowp",
              };
              F.s60 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u5;uniform float u6;varying vec2 vv0;const vec3 f=vec3(1.,1.,1.);void main(){gl_FragColor=vec4(mix(texture2D(u5,vv0).rgb,texture2D(u1,vv0).rgb,u6*f),1.);}",
                c: ["u1", "u5", "u6"],
                precision: "highp",
              };
              F.s61 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u5;uniform float u6;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){gl_FragColor=mix(texture2D(u5,vv0),texture2D(u1,vv0),u6*f);}",
                c: ["u1", "u5", "u6"],
                precision: "highp",
              };
              F.s11 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u28;uniform vec2 u70;uniform float u71,u72;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 b=texture2D(u28,vv0*u70),c=texture2D(u1,vv0*u70);float a=smoothstep(u71,0.,vv0.y);a+=smoothstep(1.-u71,1.,vv0.y),gl_FragColor=pow(mix(c,b,a*f),u72*f);}",
                c: ["u1", "u70", "u28", "u71", "u72"],
              };
              F.s62 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u28;uniform vec2 u70;uniform float u71,u72;varying vec2 vv0;const vec3 h=vec3(1.,1.,1.);vec4 i(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),f=exp2(c);vec3 g=clamp(b/f,0.,1.);return vec4(g,(c+128.)/256.);}void main(){vec2 a=vv0*u70;float c=floor(a.x),d=mod(c,2.);a.x=mod(a.x,1.),a.x=mix(a.x,1.-a.x,d);vec3 f=texture2D(u28,a).rgb,g=texture2D(u1,a).rgb;float b=smoothstep(u71,0.,vv0.y);b+=smoothstep(1.-u71,1.,vv0.y);vec3 j=mix(g,f,b*h);vec4 k=i(pow(j,u72*h));gl_FragColor=k;}",
                c: ["u1", "u70", "u28", "u71", "u72"],
                precision: "highp",
              };
              F.s63 = {
                name: "_",
                a:
                  "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);if(a.a<.5)discard;gl_FragColor=a;}",
                c: ["u1"],
                precision: "lowp",
              };
              F.s64 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u73;uniform vec2 u7;varying vec2 vv0;const vec2 f=vec2(-.9,.4),g=vec2(.4,.9),h=vec2(-.4,-.9),i=vec2(.9,-.4);void main(){vec2 a=vv0;vec3 b=texture2D(u1,a).rgb+texture2D(u1,a+u7*f).rgb+texture2D(u1,a+u7*g).rgb+texture2D(u1,a+u7*h).rgb+texture2D(u1,a+u7*i).rgb;gl_FragColor=vec4(b/5.,1.);}",
                c: ["u1", "u7"],
                precision: "lowp",
              };
              F.s65 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u73,u33;uniform vec2 u7,u74;varying vec2 vv0;const vec3 k=vec3(1.,1.,1.);const vec2 f=vec2(-.9,.4),g=vec2(.4,.9),h=vec2(-.4,-.9),i=vec2(.9,-.4);void main(){vec2 a=vv0;vec3 b=texture2D(u1,a).rgb+texture2D(u1,a+u7*f).rgb+texture2D(u1,a+u7*g).rgb+texture2D(u1,a+u7*h).rgb+texture2D(u1,a+u7*i).rgb;float c=texture2D(u33,vec2(.75,.5)).a,d=u74.x+pow(c,2.)*(u74.y-u74.x);vec3 j=mix(b/5.,texture2D(u73,a).rgb,d);gl_FragColor=vec4(j,1.);}",
                c: ["u1", "u73", "u7", "u33", "u74"],
                precision: "lowp",
              };
              F.s66 = {
                name: "_",
                a:
                  "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;const vec3 f=vec3(.299,.587,.114);const float m=.007813,n=.125,h=8.;void main(){vec2 x=vv0;vec3 o=texture2D(u1,vv0+vec2(-1.,-1.)*u7).xyz,p=texture2D(u1,vv0+vec2(1.,-1.)*u7).xyz,q=texture2D(u1,vv0+vec2(-1.,1.)*u7).xyz,r=texture2D(u1,vv0+vec2(1.,1.)*u7).xyz,s=texture2D(u1,vv0).xyz;float b=dot(o,f),c=dot(p,f),e=dot(q,f),g=dot(r,f),i=dot(s,f),t=min(i,min(min(b,c),min(e,g))),u=max(i,max(max(b,c),max(e,g)));vec2 a;a.x=-(b+c-(e+g)),a.y=b+e-(c+g);float v=max((b+c+e+g)*(.25*n),m),w=1./(min(abs(a.x),abs(a.y))+v);a=min(vec2(h,h),max(vec2(-h,-h),a*w))*u7;vec3 j=.5*(texture2D(u1,vv0+a*-.166667).rgb+texture2D(u1,vv0+a*.166667).rgb),k=j*.5+.25*(texture2D(u1,vv0+a*-.5).rgb+texture2D(u1,vv0+a*.5).rgb);float l=dot(k,f);gl_FragColor=l<t||l>u?vec4(j,1.):vec4(k,1.);}",
                c: ["u1", "u7"],
                precision: "lowp",
              };
              F.s42 = {
                name: "_",
                a:
                  "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(0.,0.,0.);vec4 g(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),h=exp2(c);vec3 i=clamp(b/h,0.,1.);return vec4(i,(c+128.)/256.);}void main(){vec3 a=texture2D(u1,vv0).rgb;gl_FragColor=g(max(a,f));}",
                c: ["u1"],
                precision: "highp",
              };
              F.s67 = {
                name: "_",
                a:
                  "uniform sampler2D u75,u76;uniform float u77,u78;varying vec2 vv0;void main(){vec3 a=texture2D(u76,vv0).rgb,b=texture2D(u75,vv0).rgb;gl_FragColor=vec4(b*u78+u77*a,1.);}",
                c: ["u75", "u76", "u77", "u78"],
                precision: "highp",
              };
              F.s68 = {
                name: "_",
                a:
                  "uniform sampler2D u79,u80;uniform float u72;varying vec2 vv0;const int j=8888;const float e=3.141592;const vec2 k=vec2(0.,0.);const vec3 n=vec3(1.,1.,1.),o=vec3(0.,0.,0.);void main(){float p=e*(vv0.x*2.-1.),q=e/2.*(vv0.y*2.-1.),b,c,r,l,m;vec4 d;vec3 f=o;vec2 g=k,a=k;for(int h=0;h<j;h+=1)a.x=float(h),a.y=floor(a.x/64.),d=texture2D(u80,a/64.),b=e*d.r,c=2.*asin(sqrt(.25+d.g*.25)),l=p+c*cos(b),m=q+c*sin(b),g.x=.5+.5*l/e,g.y=.5+m/e,f+=pow(texture2D(u79,g).rgb,u72*n);f/=float(j),gl_FragColor=vec4(f,1.);}",
                c: ["u79", "u80", "u72"],
                precision: "lowp",
                za: [
                  {
                    search: "8888",
                    replace: fa.rk[Ca.V()],
                  },
                ],
              };
              F.s69 = {
                name: "_",
                a:
                  "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);float b=.031496*texture2D(u1,vv0-3.*u7).a+.110236*texture2D(u1,vv0-2.*u7).a+.220472*texture2D(u1,vv0-u7).a+.275591*a.a+.220472*texture2D(u1,vv0+u7).a+.110236*texture2D(u1,vv0+2.*u7).a+.031496*texture2D(u1,vv0+3.*u7).a;gl_FragColor=vec4(a.rgb,4.*b);}",
                c: ["u1", "u7"],
                precision: "lowp",
              };
              F.s70 = {
                name: "_",
                a:
                  "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);float b=.3*pow(a.a,2.);gl_FragColor=vec4(a.rgb+b*f,1.);}",
                c: ["u1"],
                precision: "lowp",
              };
              F.s71 = {
                name: "_",
                a:
                  "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){vec4 a=.031496*texture2D(u1,vv0-3.*u7)+.110236*texture2D(u1,vv0-2.*u7)+.220472*texture2D(u1,vv0-u7)+.275591*texture2D(u1,vv0)+.220472*texture2D(u1,vv0+u7)+.110236*texture2D(u1,vv0+2.*u7)+.031496*texture2D(u1,vv0+3.*u7);gl_FragColor=a;}",
                c: ["u1", "u7"],
                precision: "lowp",
              };
              F.s72 = {
                name: "_",
                a:
                  "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0-3.*u7)+texture2D(u1,vv0-2.*u7)+texture2D(u1,vv0-u7)+texture2D(u1,vv0)+texture2D(u1,vv0+u7)+texture2D(u1,vv0+2.*u7)+texture2D(u1,vv0+3.*u7);gl_FragColor=a/7.;}",
                c: ["u1", "u7"],
                precision: "lowp",
              };
              F.s73 = {
                name: "_",
                a:
                  "uniform sampler2D u1;varying vec2 vv0;const vec4 g=vec4(0.,0.,0.,0.);const float e=256.;void main(){vec4 b=g;float c=0.;vec2 d;for(float a=0.;a<e;a+=1.)d=vec2((a+.5)/e,vv0.y),b+=texture2D(u1,d),c+=1.;gl_FragColor=b/c;}",
                c: ["u1"],
                precision: "highp",
              };
              F.s74 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u28;varying vec2 vv0;const vec4 h=vec4(1.,1.,1.,1.);const float f=0.,g=.3;void main(){vec4 b=texture2D(u28,vv0),c=texture2D(u1,vv0);float a=smoothstep(g,f,vv0.y);a+=smoothstep(1.-g,1.-f,vv0.y),gl_FragColor=mix(c,b,a*h);}",
                c: ["u1", "u28"],
                precision: "highp",
              };
              F.s75 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u28;varying vec2 vv0;const vec3 h=vec3(1.,1.,1.);const float f=0.,g=.3;vec4 i(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),j=exp2(c);vec3 k=clamp(b/j,0.,1.);return vec4(k,(c+128.)/256.);}void main(){vec3 b=texture2D(u28,vv0).rgb,c=texture2D(u1,vv0).rgb;float a=smoothstep(g,f,vv0.y);a+=smoothstep(1.-g,1.-f,vv0.y),gl_FragColor=i(mix(c,b,a*h));}",
                c: ["u1", "u28"],
                precision: "highp",
              };
              F.s76 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u81,u2,u82;uniform vec4 u83;uniform vec2 u84;uniform float u85,u86,u87;varying vec2 vv0;const vec2 g=vec2(1.,1.),h=vec2(.5,.5);const float e=3.141592;void main(){vec4 d=texture2D(u1,vv0),i=texture2D(u81,vec2(1.-vv0.x,vv0.y));float j=step(texture2D(u82,vec2(.25,.5)).r,1.);vec2 a=vv0*2.-g;float k=texture2D(u2,a*u84*.5+h).r,l=atan(a.x,a.y),m=-(mod(u85,2.*e)-e),b=mod(l-m+e,2.*e)-e,c=1.-smoothstep(0.,u86,b);c*=(sign(b)+1.)/2.;vec4 n=i+c*u83*k;gl_FragColor=mix(d,n,j*u87);}",
                c: "u1 u2 u82 u81 u83 u85 u86 u87 u84".split(" "),
                precision: "lowp",
              };
              var p = "u88 u89 u90 u91 u79 u92 u21 u93 u81 u94 u95 u96 u97 u98".split(
                " "
              );
              fa.Z &&
                (F.s77 = {
                  name: "_",
                  a:
                    "uniform sampler2D u88,u89,u90,u91,u79,u92,u99,u81;uniform vec3 u93,u96;uniform float u21,u100,u95,u97,u94;varying vec2 vv0;const float j=3.141592;const vec3 u=vec3(0.,0.,0.),v=vec3(.299,.587,.114);const float w=2.;vec3 l(vec4 a){float b=a.a*256.-128.;vec3 c=a.rgb;return exp2(b)*c*65536.;}vec2 x(vec3 a){float b=atan(a.x,a.z),c=acos(-a.y);return vec2(.5-.5*b/j,1.-c/j);}vec2 y(vec3 a,float b){vec2 d=vec2(1.,.5)/pow(2.,b),f=vec2(0.,1.-pow(.5,b));float g=atan(a.x,a.z),h=acos(-a.y),c=.5+.5*g/j,i=h/j,k=pow(2.,b)/u94;c=(1.-k)*c;return f+vec2(c,i)*d;}void main(){vec4 c=texture2D(u88,vv0);vec3 k=texture2D(u81,vec2(1.-vv0.x,vv0.y)).rgb;if(c.a<.01){gl_FragColor=vec4(k,0.);return;}float z=c.a;vec3 A=c.rgb,B=A+u93;vec4 b=texture2D(u91,vv0),m=texture2D(u89,vv0);vec3 d=m.rgb;float f=m.a;vec4 n=texture2D(u90,vv0);vec3 C=n.rgb;float o=b.r,D=b.g,p=floor(b.b*255.),g=floor(p/16.),E=(p-16.*g)/16.;g/=16.;float F=b.a;f=1.-(1.-f)*(1.-n.a);vec2 G=x(-d);vec3 q=(1.-F)*l(texture2D(u92,G)),r=normalize(B),h=u,s=reflect(-r,d);vec2 H=y(s,floor(D*u21));float I=acos(-s.z),J=smoothstep(u95-u97,u95+u97,I);h=mix(l(texture2D(u79,H)),u96,J);float a=o+(E-o)*pow(1.-dot(d,-r),g*16.);a=clamp(a,0.,1.);float t=1.-u100*texture2D(u99,vv0).r;h*=pow(t,2.),q*=t;vec3 i=C*mix(q,h,a),M=mix(k,i,z*(f*(1.-a)+a));float K=dot(i,v),L=max(0.,(K-1.)/(w-1.));gl_FragColor=vec4(i,L);}",
                  c: p.concat(["u99", "u100"]),
                  precision: "highp",
                });
              F.s78 = {
                name: "_",
                a:
                  "uniform sampler2D u88,u89,u90,u91,u79,u92,u81;uniform vec3 u93,u96;uniform float u21,u95,u97,u98,u101,u102,u94;varying vec2 vv0;const float l=3.141592;const vec3 x=vec3(0.,0.,0.),m=vec3(1.,1.,1.),y=vec3(.299,.587,.114);const float z=2.;vec3 n(vec4 a){float b=a.a*256.-128.;vec3 c=a.rgb;return exp2(b)*c*65536.;}vec2 A(vec3 a){float b=atan(a.x,-a.z),c=acos(-a.y);return vec2(.5-.5*b/l,1.-c/l);}vec2 B(vec3 a,float d){float b=pow(2.,d);vec2 f=vec2(1.,.5)/b,g=vec2(0.,1.-1./b);float h=atan(a.x,a.z),i=acos(-a.y),c=.5+.5*h/l,j=i/l,k=.5*b/u94;c=(1.-k)*c;return g+vec2(c,j)*f;}void main(){vec4 f=texture2D(u88,vv0),g=texture2D(u81,vec2(1.-vv0.x,vv0.y));if(f.a<.01){gl_FragColor=vec4(g.rgb,0.);return;}float o=f.a;vec3 C=f.rgb,D=C+u93;vec4 b=texture2D(u91,vv0),p=texture2D(u89,vv0);vec3 h=p.rgb;float i=p.a;vec4 j=texture2D(u90,vv0);vec3 c=j.rgb;if(o>1.){gl_FragColor=vec4(mix(g.rgb,c,j.a),1.);return;}c=pow(c,u101*m);float q=b.r,E=b.g,F=b.a,r=floor(b.b*255.),k=floor(r/16.),G=(r-16.*k)/16.;k/=16.,i=1.-(1.-i)*(1.-j.a);vec2 H=A(h);vec3 I=n(texture2D(u92,H)),J=(1.-F)*I,s=normalize(D),t=x,u=reflect(-s,h);float K=floor(E*u21);vec2 L=B(u,K);float M=acos(-u.z),N=smoothstep(u95-u97,u95+u97,M);vec3 O=n(texture2D(u79,L));t=mix(O,u96,N*u98);float a=q+(G-q)*pow(1.+dot(h,s),k*15.);a=clamp(a,0.,1.);vec3 P=c*mix(J,t,a);float v=o*(i*(1.-a)+a);vec3 d=mix(g.rgb,pow(P,m/u101),v);float w=dot(d,y),Q=max(0.,(w-1.)/(z-1.));d=mix(w*m,d,mix(1.,u102,v)*m),gl_FragColor=vec4(d,Q);}",
                c: p.concat(["u101", "u102"]),
                precision: "highp",
              };
              fa.Z &&
                ((F.s79 = {
                  name: "_",
                  a:
                    "uniform sampler2D u88,u89;uniform mat4 u103;uniform vec2 u104,u7,u105;uniform float u106,u107,u108,u109,u110,u111,u112,u113,u100;varying vec2 vv0;const float PI=3.141593,HALFPI=1.570796,N=8888.8;void main(){vec2 uvt=vv0+u105;vec4 pos=texture2D(u88,uvt);if(pos.a<.01){gl_FragColor=vec4(0.,0.,0.,1.);return;}vec3 co0=pos.rgb;float c=cos(u106),s=sin(u106);vec3 no0=texture2D(u89,uvt).rgb;float zv=(u103*vec4(co0,1.)).z;vec3 co;vec2 scale=u104/abs(zv),uv,duv=u7*vec2(c,s)*scale;vec3 dp,dpn;float dzMax=0.,angleMin=0.,angle;for(float i=0.;i<N;i+=1.)uv=uvt+i*duv,co=texture2D(u88,uv).rgb,dp=co-co0,dpn=normalize(dp),angle=atan(dot(no0,dpn),length(cross(no0,dpn))),angle*=1.-smoothstep(u112,u113,length(dp)),angleMin=max(angleMin,angle),dzMax=max(dzMax,sin(angle)*length(dp));float angleMinInv=0.;for(float i=0.;i<N;i+=1.)uv=uvt-i*duv,co=texture2D(u88,uv).rgb,dp=co-co0,dpn=normalize(dp),angle=atan(dot(no0,dpn),length(cross(no0,dpn))),angle*=1.-smoothstep(u112,u113,length(dp)),dzMax=max(dzMax,sin(angle)*length(dp)),angleMinInv=max(angleMinInv,angle);duv=u7*vec2(s,c)*scale;float angleMin2=0.;for(float i=0.;i<N;i+=1.)uv=uvt+i*duv,co=texture2D(u88,uv).rgb,dp=co-co0,dpn=normalize(dp),angle=atan(dot(no0,dpn),length(cross(no0,dpn))),angle*=1.-smoothstep(u112,u113,length(dp)),dzMax=max(dzMax,sin(angle)*length(dp)),angleMin2=max(angleMin2,angle);float angleMin2Inv=0.;for(float i=0.;i<N;i+=1.)uv=uvt-i*duv,co=texture2D(u88,uv).rgb,dp=co-co0,dpn=normalize(dp),angle=atan(dot(no0,dpn),length(cross(no0,dpn))),angle*=1.-smoothstep(u112,u113,length(dp)),dzMax=max(dzMax,sin(angle)*length(dp)),angleMin2Inv=max(angleMin2Inv,angle);float omegaMin=PI/4.*(angleMin+angleMinInv)*(angleMin2+angleMin2Inv),dzFactor=clamp(dzMax/u109,u110,1.),ao=dzFactor*clamp(u108*omegaMin*u111,0.,u100);gl_FragColor=vec4(ao,ao,ao,u107);}",
                  c: "u88 u89 u108 u107 u106 u7 u114 u109 u110 u111 u112 u113 u103 u104 u100".split(
                    " "
                  ),
                  za: [
                    {
                      search: "8888.8",
                      replace: fa.zi[Ca.V()].toFixed(1),
                    },
                  ],
                  precision: "lowp",
                }),
                (F.s80 = {
                  name: "_",
                  a:
                    "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;const vec2 f=vec2(-.9,.4),g=vec2(.4,.9),h=vec2(-.4,-.9),i=vec2(.9,-.4),j=vec2(-1.9,.9),k=vec2(.9,1.9),l=vec2(-.9,-1.9),m=vec2(1.9,-.9);void main(){vec2 a=vv0;vec4 b=texture2D(u1,a)+texture2D(u1,a+u7*f)+texture2D(u1,a+u7*g)+texture2D(u1,a+u7*h)+texture2D(u1,a+u7*i);b+=texture2D(u1,a+u7*j)+texture2D(u1,a+u7*k)+texture2D(u1,a+u7*l)+texture2D(u1,a+u7*m),gl_FragColor=b/9.;}",
                  c: ["u1", "u7"],
                  precision: "lowp",
                }));
              F.s81 = {
                name: "_",
                a: "varying vec3 vv0;void main(){gl_FragColor=vec4(vv0,1.);}",
                j:
                  "attribute vec3 a0;uniform mat4 u115,u103,u116;varying vec3 vv0;void main(){vec4 a=u115*u103*u116*vec4(a0,1.);gl_Position=a,vv0=a.xyz/a.w;}",
                c: ["u115", "u103", "u116"],
                precision: "lowp",
              };
              F.s82 = {
                name: "_",
                a:
                  "uniform sampler2D u117,u92,u80;uniform mat4 u115,u118;uniform vec2 u119;uniform float u120;varying vec2 vv0;const float n=8888.8,o=9999.9,p=25.,v=50.,w=1.2,e=3.141592;const vec4 x=vec4(0.,0.,0.,0.),A=vec4(1.,1.,1.,1.);const vec2 f=vec2(.5,.5);vec2 y(vec3 a){float b=atan(a.x,a.z),c=acos(a.y);return vec2(.5-.5*b/e,1.-c/e);}void main(){float d,a,q;vec2 z=vec2(vv0.x,1.-vv0.y),b;vec3 r=vec3(u119*(z-f),0.),B=vec3(u118*vec4(r,1.)),g,s;vec4 t=x,h,c,u;vec3 i;int j;for(float k=0.;k<n;k+=1.){b.x=k,b.y=floor(b.x/64.),c=texture2D(u80,b/64.),d=e*c.r,a=2.*asin(sqrt(.25+c.g*.25)),g=vec3(cos(d)*sin(a),sin(d)*sin(a),-cos(a)),q=p+(.5+.5*c.b)*(v-p),j=0;for(float l=0.;l<=o;l+=1.){u=vec4(r+g*q*pow(l/o,w),1.),h=u115*u,i=h.xyz/h.w;if(texture2D(u117,f+f*i.xy).z<i.z){j=1;break;}}if(j==1)continue;s=vec3(u118*vec4(g,0.)),t+=texture2D(u92,y(s));}gl_FragColor=vec4(u120*t.rgb/n,1.);}",
                c: "u117 u92 u80 u115 u118 u119 u120".split(" "),
                za: [
                  {
                    search: "8888.8",
                    replace: fa.Yl[Ca.V()].toFixed(1),
                  },
                  {
                    search: "9999.9",
                    replace: fa.Zl[Ca.V()].toFixed(1),
                  },
                ],
                precision: "lowp",
              };
              F.s83 = {
                name: "_",
                a:
                  "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){vec4 a=.285714*texture2D(u1,vv0-u7)+.428571*texture2D(u1,vv0)+.285714*texture2D(u1,vv0+u7);gl_FragColor=a;}",
                c: ["u1", "u7"],
                precision: "lowp",
              };
              F.s84 = {
                name: "_",
                a:
                  "uniform sampler2D u1,u121;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                j:
                  "attribute vec3 a0;attribute vec2 a1;uniform mat4 u115,u103;varying vec2 vv0;void main(){vec4 a=u115*u103*vec4(a0,1.);gl_Position=a,vv0=a1;}",
                c: ["u115", "u103", "u1"],
                D: ["a0", "a1"],
                precision: "lowp",
              };
              if (Ca.T()) {
                p = "u33 u122 u123 u124 u125 u34 u91 u126 u127 u6 u128 u129 u60"
                  .split(" ")
                  .concat(P, z);
                Ca.Hg() ||
                  (F.s85 = {
                    name: "_",
                    j:
                      "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                    a:
                      "void main(){gl_FragData[0]=vec4(0.,0.,0.,0.),gl_FragData[1]=vec4(0.,0.,0.,0.),gl_FragData[2]=vec4(0.,0.,0.,0.),gl_FragData[3]=vec4(0.,0.,0.,0.);}",
                    c: [],
                    precision: "lowp",
                    aa: !0,
                  });
                F.s86 = {
                  name: "_",
                  j:
                    "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                  a:
                    "uniform vec4 color;void main(){gl_FragData[0]=color,gl_FragData[1]=color,gl_FragData[2]=color,gl_FragData[3]=color;}",
                  c: ["color"],
                  aa: !0,
                };
                F.s87NNGLcolor = {
                  name: "_",
                  a:
                    "uniform vec4 u91,u6;uniform vec3 u126;uniform float u127;varying vec3 vv0,vv1;varying float vv2,vv3;void main(){float b=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv3),c=u127;vec4 a=u91;float d=floor(15.99*c),i=floor(15.99*a.b);a.b=(d+16.*i)/255.,gl_FragData[0]=vec4(vv0,vv2),gl_FragData[1]=vec4(normalize(vv1),b),gl_FragData[2]=vec4(u126,0.),gl_FragData[3]=a;}",
                  j:
                    "attribute vec3 a0,a2;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u128,u129,u124,u125,u131;varying vec3 vv0,vv1;varying float vv2,vv3;const vec2 e=vec2(1.,1.);const vec3 o=vec3(1.,1.,1.);const vec2 y=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 p(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u33,vec2(.25,.5));vec2 d=u67*e;vec3 a=u67*o;vec2 q=mix(c.a*u34,e,d),f=(2.*c.gb-e)*(1.-d);f.x*=-1.;vec3 g=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 h=p(g);vec3 r=mix(u122,u65,a);float s=mix(u123,u68,u67);vec3 t=mix(u60,u66,a);float u=mix(u63,1.,u67);vec2 i=u62/q;vec3 j=a0;float v=max(0.,-a0.z-u124)*u125;j.x+=v*sign(a0.x)*(1.-u67);vec3 b=h*(j+r)*s+t;b.x+=u59*sin(g.y);vec2 w=i*u;vec3 x=vec3(f*w,-i)+b*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(x,1.)),vv1=h*a2*vec3(1.,-1.,-1.),vv2=smoothstep(u128,u129,a0.z),vv0=b,vv3=a0.y;}",
                  c: p,
                  D: ["a0", "a2"],
                  K: [3, 3],
                  aa: !0,
                };
                F.s87NNGLtexture = {
                  name: "_",
                  a:
                    "uniform sampler2D u1;uniform vec4 u91,u6;uniform vec3 u126;uniform float u127,u55;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;void main(){float c=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv4),d=u127;vec4 b=u91;float j=floor(15.99*d),k=floor(15.99*b.b);b.b=(j+16.*k)/255.;vec4 a=texture2D(u1,vv2);vec3 l=mix(u126,a.rgb,a.a);vec4 m=vec4(mix(a.rgb*u126,l,u55),a.a);gl_FragData[0]=vec4(vv0,vv3),gl_FragData[1]=vec4(normalize(vv1),c),gl_FragData[2]=m,gl_FragData[3]=b;}",
                  j:
                    "attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u128,u129,u124,u125,u131;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;const vec2 e=vec2(1.,1.);const vec3 p=vec3(1.,1.,1.);const vec2 z=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 q(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u33,vec2(.25,.5));vec2 d=u67*e;vec3 a=u67*p;vec2 r=mix(c.a*u34,e,d),f=(2.*c.gb-e)*(1.-d);f.x*=-1.;vec3 g=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 h=q(g);vec3 s=mix(u122,u65,a);float t=mix(u123,u68,u67);vec3 u=mix(u60,u66,a);float v=mix(u63,1.,u67);vec2 i=u62/r;vec3 j=a0;float w=max(0.,-a0.z-u124)*u125;j.x+=w*sign(a0.x)*(1.-u67);vec3 b=h*(j+s)*t+u;b.x+=u59*sin(g.y);vec2 x=i*v;vec3 y=vec3(f*x,-i)+b*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(y,1.)),vv1=h*a2*vec3(1.,-1.,-1.),vv3=smoothstep(u128,u129,a0.z),vv2=a1,vv0=b,vv4=a0.y;}",
                  c: p.concat(O),
                  D: ["a0", "a2", "a1"],
                  K: [3, 3, 2],
                  aa: !0,
                };
                F.s87NNGLtextureNormalMap = {
                  name: "_",
                  a:
                    "uniform vec4 u91,u6;uniform vec3 u126;uniform sampler2D u1,u132;uniform float u127,u55;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec3 l=vec3(1.,1.,1.);void main(){float m=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv5);vec3 v=vec3(0.,0.,-1.),d=normalize(vv2),b=texture2D(u132,vv3).xyz;b=normalize(b*255./127.-1.007874*l);vec3 g=vv0.xyz,n=cross(d,g)*vv0.w;mat3 o=mat3(g,n,d);vec3 p=o*b;float q=u127;vec4 c=u91;float r=floor(15.99*q),s=floor(15.99*c.b);c.b=(r+16.*s)/255.;vec4 a=texture2D(u1,vv3);vec3 t=mix(u126,a.rgb,a.a);vec4 u=vec4(mix(a.rgb*u126,t,u55),a.a);gl_FragData[0]=vec4(vv1,vv4),gl_FragData[1]=vec4(p,m),gl_FragData[2]=u,gl_FragData[3]=c;}",
                  j:
                    "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u128,u129,u124,u125,u131;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec2 e=vec2(1.,1.);const vec3 q=vec3(1.,1.,1.);const vec2 A=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 r(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u33,vec2(.25,.5));vec2 d=u67*e;vec3 a=u67*q;vec2 s=mix(c.a*u34,e,d),f=(2.*c.gb-e)*(1.-d);f.x*=-1.;vec3 g=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 h=r(g);vec3 t=mix(u122,u65,a);float u=mix(u123,u68,u67);vec3 v=mix(u60,u66,a);float w=mix(u63,1.,u67);vec2 i=u62/s;vec3 j=a0;float x=max(0.,-a0.z-u124)*u125;j.x+=x*sign(a0.x)*(1.-u67);vec3 b=h*(j+t)*u+v;b.x+=u59*sin(g.y);vec2 y=i*w;vec3 z=vec3(f*y,-i)+b*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(z,1.)),vv2=h*a2*vec3(1.,-1.,-1.),vv0=a3,vv4=smoothstep(u128,u129,a0.z),vv3=a1,vv1=b,vv5=a0.y;}",
                  c: p.concat(O, ["u132"]),
                  D: ["a3", "a0", "a2", "a1"],
                  K: [4, 3, 3, 2],
                  aa: !0,
                };
                F.s87NNGLtextureParamsMap = {
                  name: "_",
                  a:
                    "uniform sampler2D u1,u56;uniform vec4 u91,u6,u57;uniform vec3 u126;uniform float u127,u55;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;vec2 j(float d,float e){float f=floor(d*255.+.01),a=pow(2.,e),g=256./a,b=f/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float g=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv4),d=u127;vec4 a=u91,e=texture2D(u56,vv2);vec2 b=j(e.b,4.);float h=1.-b.x,o=b.y;b=j(e.a,1.);float p=b.x,f=b.y;vec4 q=vec4(e.rg,o,p);float r=h;a=mix(a,q,u57*f),d=mix(d,r,u57.b*f);float s=floor(15.99*d),t=floor(15.99*a.b);a.b=(s+16.*t)/255.;vec4 c=texture2D(u1,vv2);vec3 u=mix(u126,c.rgb,c.a);vec4 v=vec4(mix(c.rgb*u126,u,u55),c.a);gl_FragData[0]=vec4(vv0,vv3),gl_FragData[1]=vec4(normalize(vv1),g),gl_FragData[2]=v,gl_FragData[3]=a;}",
                  j:
                    "attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u128,u129,u124,u125,u131;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;const vec2 e=vec2(1.,1.);const vec3 p=vec3(1.,1.,1.);const vec2 z=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 q(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u33,vec2(.25,.5));vec2 d=u67*e;vec3 a=u67*p;vec2 r=mix(c.a*u34,e,d),f=(2.*c.gb-e)*(1.-d);f.x*=-1.;vec3 g=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 h=q(g);vec3 s=mix(u122,u65,a);float t=mix(u123,u68,u67);vec3 u=mix(u60,u66,a);float v=mix(u63,1.,u67);vec2 i=u62/r;vec3 j=a0;float w=max(0.,-a0.z-u124)*u125;j.x+=w*sign(a0.x)*(1.-u67);vec3 b=h*(j+s)*t+u;b.x+=u59*sin(g.y);vec2 x=i*v;vec3 y=vec3(f*x,-i)+b*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(y,1.)),vv1=h*a2*vec3(1.,-1.,-1.),vv3=smoothstep(u128,u129,a0.z),vv2=a1,vv0=b,vv4=a0.y;}",
                  c: p.concat(O, C),
                  D: ["a0", "a2", "a1"],
                  K: [3, 3, 2],
                  aa: !0,
                };
                F.s87NNGLtextureNormalParamsMap = {
                  name: "_",
                  a:
                    "uniform sampler2D u1,u132,u56;uniform vec4 u91,u6,u57;uniform vec3 u126;uniform float u127,u55;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec3 q=vec3(1.,1.,1.);vec2 k(float d,float e){float f=floor(d*255.+.01),a=pow(2.,e),g=256./a,b=f/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float r=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv5);vec3 E=vec3(0.,0.,-1.),g=normalize(vv2),d=texture2D(u132,vv3).xyz;d=normalize(d*255./127.-1.007874*q);vec3 h=vv0.xyz,s=cross(g,h)*vv0.w;mat3 t=mat3(h,s,g);vec3 u=t*d;float e=u127;vec4 a=u91,f=texture2D(u56,vv3);vec2 b=k(f.b,4.);float v=1.-b.x,w=b.y;b=k(f.a,1.);float x=b.x,l=b.y;vec4 y=vec4(f.rg,w,x);float z=v;a=mix(a,y,u57*l),e=mix(e,z,u57.b*l);float A=floor(15.99*e),B=floor(15.99*a.b);a.b=(A+16.*B)/255.;vec4 c=texture2D(u1,vv3);vec3 C=mix(u126,c.rgb,c.a);vec4 D=vec4(mix(c.rgb*u126,C,u55),c.a);gl_FragData[0]=vec4(vv1,vv4),gl_FragData[1]=vec4(u,r),gl_FragData[2]=D,gl_FragData[3]=a;}",
                  j:
                    "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u130;uniform float u123,u128,u129,u124,u125,u131;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec2 e=vec2(1.,1.);const vec3 q=vec3(1.,1.,1.);const vec2 A=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 r(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 c=texture2D(u33,vec2(.25,.5));vec2 d=u67*e;vec3 a=u67*q;vec2 s=mix(c.a*u34,e,d),f=(2.*c.gb-e)*(1.-d);f.x*=-1.;vec3 g=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 h=r(g);vec3 t=mix(u122,u65,a);float u=mix(u123,u68,u67);vec3 v=mix(u60,u66,a);float w=mix(u63,1.,u67);vec2 i=u62/s;vec3 j=a0;float x=max(0.,-a0.z-u124)*u125;j.x+=x*sign(a0.x)*(1.-u67);vec3 b=h*(j+t)*u+v;b.x+=u59*sin(g.y);vec2 y=i*w;vec3 z=vec3(f*y,-i)+b*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(z,1.)),vv2=h*a2*vec3(1.,-1.,-1.),vv0=a3,vv4=smoothstep(u128,u129,a0.z),vv3=a1,vv1=b,vv5=a0.y;}",
                  c: p.concat(O, ["u132"], C),
                  D: ["a3", "a0", "a2", "a1"],
                  K: [4, 3, 3, 2],
                  aa: !0,
                };
                p = "u115 u103 u116 u91 u126 u127 u6".split(" ");
                F.s87color = {
                  name: "_",
                  a:
                    "uniform vec4 u91,u6;uniform vec3 u126;uniform float u127;varying vec3 vv0,vv1;varying float vv2,vv3;void main(){float b=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv3),c=u127;vec4 a=u91;float d=floor(15.99*c),i=floor(15.99*a.b);a.b=(d+16.*i)/255.,gl_FragData[0]=vec4(vv0,vv2),gl_FragData[1]=vec4(normalize(vv1),b),gl_FragData[2]=vec4(u126,0.),gl_FragData[3]=a;}",
                  j:
                    "attribute vec3 a0,a2;uniform mat4 u115,u103,u116;varying vec3 vv0,vv1;varying float vv2,vv3;void main(){vec4 a=u116*vec4(a0,1.),b=u116*vec4(a2,0.);gl_Position=u115*u103*a,vv0=a.xyz,vv1=b.xyz,vv2=1.,vv3=a0.y;}",
                  c: p,
                  D: ["a0", "a2"],
                  aa: !0,
                };
                F.s87 = {
                  name: "_",
                  a:
                    "uniform sampler2D u1;uniform vec4 u91,u6;uniform vec3 u126;uniform float u127,u55;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;void main(){float c=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv4),d=u127;vec4 b=u91;float j=floor(15.99*d),k=floor(15.99*b.b);b.b=(j+16.*k)/255.;vec4 a=texture2D(u1,vv2);vec3 l=mix(u126,a.rgb,a.a);vec4 m=vec4(mix(a.rgb*u126,l,u55),a.a);gl_FragData[0]=vec4(vv0,vv3),gl_FragData[1]=vec4(normalize(vv1),c),gl_FragData[2]=m,gl_FragData[3]=b;}",
                  j:
                    "attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u115,u103,u116;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;void main(){vec4 a=u116*vec4(a0,1.),b=u116*vec4(a2,0.);gl_Position=u115*u103*a,vv2=a1,vv0=a.xyz,vv1=b.xyz,vv3=1.,vv4=a0.y;}",
                  c: p.concat(O),
                  D: ["a0", "a2", "a1"],
                  aa: !0,
                };
                var v = ["u132", "u133"];
                F.s87NormalMap = {
                  name: "_",
                  a:
                    "uniform sampler2D u1,u132;uniform vec4 u91,u6;uniform vec3 u133,u126;uniform float u127,u55;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec3 l=vec3(1.,1.,1.);void main(){float m=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv5);vec3 v=vec3(0.,0.,-1.),d=normalize(vv2),b=texture2D(u132,vv3).xyz;b=normalize(b*255./127.-1.007874*l);vec3 g=vv0.xyz,n=cross(d,g)*vv0.w;mat3 o=mat3(g,n,d);vec3 p=o*b;float q=u127;vec4 c=u91;float r=floor(15.99*q),s=floor(15.99*c.b);c.b=(r+16.*s)/255.;vec4 a=texture2D(u1,vv3);vec3 t=mix(u126,a.rgb,a.a);vec4 u=vec4(mix(a.rgb*u126,t,u55),a.a);gl_FragData[0]=vec4(vv1,vv4),gl_FragData[1]=vec4(p,m),gl_FragData[2]=u,gl_FragData[3]=c;}",
                  j:
                    "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u115,u103,u116;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;void main(){vec4 a=u116*vec4(a0,1.),b=u116*vec4(a2,0.);gl_Position=u115*u103*a,vv0=a3,vv3=a1,vv1=a.xyz,vv2=b.xyz,vv4=1.,vv5=a0.y;}",
                  c: p.concat(O, v),
                  D: ["a0", "a2", "a1", "a3"],
                  aa: !0,
                };
                F.s87ParamsMap = {
                  name: "_",
                  a:
                    "uniform sampler2D u1,u56;uniform vec4 u91,u6,u57;uniform vec3 u126;uniform float u127,u55;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;vec2 j(float d,float e){float f=floor(d*255.+.01),a=pow(2.,e),g=256./a,b=f/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float g=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv4),d=u127;vec4 a=u91,e=texture2D(u56,vv2);vec2 b=j(e.b,4.);float h=1.-b.x,o=b.y;b=j(e.a,1.);float p=b.x,f=b.y;vec4 q=vec4(e.rg,o,p);float r=h;a=mix(a,q,u57*f),d=mix(d,r,u57.b*f);float s=floor(15.99*d),t=floor(15.99*a.b);a.b=(s+16.*t)/255.;vec4 c=texture2D(u1,vv2);vec3 u=mix(u126,c.rgb,c.a);vec4 v=vec4(mix(c.rgb*u126,u,u55),c.a);gl_FragData[0]=vec4(vv0,vv3),gl_FragData[1]=vec4(normalize(vv1),g),gl_FragData[2]=v,gl_FragData[3]=a;}",
                  j:
                    "attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u115,u103,u116;varying vec3 vv0,vv1;varying vec2 vv2;varying float vv3,vv4;void main(){vec4 a=u116*vec4(a0,1.),b=u116*vec4(a2,0.);gl_Position=u115*u103*a,vv2=a1,vv0=a.xyz,vv1=b.xyz,vv3=1.,vv4=a0.y;}",
                  c: p.concat(O, C),
                  D: ["a0", "a2", "a1"],
                  aa: !0,
                };
                F.s87NormalParamsMap = {
                  name: "_",
                  a:
                    "uniform sampler2D u1,u132,u56;uniform vec4 u91,u6,u57;uniform vec3 u133,u126;uniform float u127,u55;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;const vec3 q=vec3(1.,1.,1.);vec2 k(float d,float e){float f=floor(d*255.+.01),a=pow(2.,e),g=256./a,b=f/a,c=floor(b),h=(b-c)*a;return vec2(c/(g-1.),h/(a-1.));}void main(){float r=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv5);vec3 E=vec3(0.,0.,-1.),g=normalize(vv2),d=texture2D(u132,vv3).xyz;d=normalize(d*255./127.-1.007874*q);vec3 h=vv0.xyz,s=cross(g,h)*vv0.w;mat3 t=mat3(h,s,g);vec3 u=t*d;float e=u127;vec4 a=u91,f=texture2D(u56,vv3);vec2 b=k(f.b,4.);float v=1.-b.x,w=b.y;b=k(f.a,1.);float x=b.x,l=b.y;vec4 y=vec4(f.rg,w,x);float z=v;a=mix(a,y,u57*l),e=mix(e,z,u57.b*l);float A=floor(15.99*e),B=floor(15.99*a.b);a.b=(A+16.*B)/255.;vec4 c=texture2D(u1,vv3);vec3 C=mix(u126,c.rgb,c.a);vec4 D=vec4(mix(c.rgb*u126,C,u55),c.a);gl_FragData[0]=vec4(vv1,vv4),gl_FragData[1]=vec4(u,r),gl_FragData[2]=D,gl_FragData[3]=a;}",
                  j:
                    "attribute vec4 a3;attribute vec3 a0,a2;attribute vec2 a1;uniform mat4 u115,u103,u116;varying vec4 vv0;varying vec3 vv1,vv2;varying vec2 vv3;varying float vv4,vv5;void main(){vec4 a=u116*vec4(a0,1.),b=u116*vec4(a2,0.);gl_Position=u115*u103*a,vv0=a3,vv3=a1,vv1=a.xyz,vv2=b.xyz,vv4=1.,vv5=a0.y;}",
                  c: p.concat(O, v, C),
                  D: ["a0", "a2", "a1", "a3"],
                  aa: !0,
                };
              } else B();
              x();
              p = [
                {
                  type: "1i",
                  name: "u1",
                  value: 0,
                },
              ];
              D.f("s0", p);
              D.f("s1", p);
              D.f(
                "s60",
                [
                  {
                    type: "1i",
                    name: "u5",
                    value: 1,
                  },
                ].concat(p)
              );
              D.f(
                "s61",
                [
                  {
                    type: "1i",
                    name: "u5",
                    value: 1,
                  },
                ].concat(p)
              );
              D.f(
                "s11",
                [
                  {
                    type: "1i",
                    name: "u28",
                    value: 1,
                  },
                ].concat(p)
              );
              D.f(
                "s62",
                [
                  {
                    type: "1i",
                    name: "u28",
                    value: 1,
                  },
                ].concat(p)
              );
              D.f("s63", p);
              D.f("s64", p);
              D.f(
                "s65",
                [
                  {
                    type: "1i",
                    name: "u73",
                    value: 1,
                  },
                  {
                    type: "1i",
                    name: "u33",
                    value: 2,
                  },
                ].concat(p)
              );
              D.f("s66", p);
              D.f("s42", p);
              D.f("s67", [
                {
                  type: "1i",
                  name: "u75",
                  value: 0,
                },
                {
                  type: "1i",
                  name: "u76",
                  value: 1,
                },
              ]);
              D.f("s68", [
                {
                  type: "1i",
                  name: "u79",
                  value: 0,
                },
                {
                  type: "1i",
                  name: "u80",
                  value: 1,
                },
              ]);
              D.f("s69", p);
              D.f("s70", p);
              D.f("s71", p);
              D.f("s72", p);
              D.f("s73", p);
              D.f(
                "s74",
                [
                  {
                    type: "1i",
                    name: "u28",
                    value: 1,
                  },
                ].concat(p)
              );
              D.f(
                "s75",
                [
                  {
                    type: "1i",
                    name: "u28",
                    value: 1,
                  },
                ].concat(p)
              );
              fa.Z &&
                (D.f("s79", [
                  {
                    type: "1i",
                    name: "u88",
                    value: 0,
                  },
                  {
                    type: "1i",
                    name: "u89",
                    value: 1,
                  },
                  {
                    type: "1f",
                    name: "u109",
                    value: fa.mi,
                  },
                  {
                    type: "1f",
                    name: "u110",
                    value: fa.ni,
                  },
                  {
                    type: "1f",
                    name: "u111",
                    value: fa.Ai,
                  },
                  {
                    type: "1f",
                    name: "u112",
                    value: fa.ri,
                  },
                  {
                    type: "1f",
                    name: "u113",
                    value: fa.si,
                  },
                  {
                    type: "1f",
                    name: "u108",
                    value: 1,
                  },
                  {
                    type: "1f",
                    name: "u100",
                    value: 1,
                  },
                ]),
                D.f("s80", p));
              v = [
                {
                  type: "1i",
                  name: "u88",
                  value: 0,
                },
                {
                  type: "1i",
                  name: "u89",
                  value: 1,
                },
                {
                  type: "1i",
                  name: "u90",
                  value: 2,
                },
                {
                  type: "1i",
                  name: "u79",
                  value: 3,
                },
                {
                  type: "1i",
                  name: "u92",
                  value: 4,
                },
                {
                  type: "1i",
                  name: "u91",
                  value: 6,
                },
                {
                  type: "1i",
                  name: "u81",
                  value: 7,
                },
                {
                  type: "1f",
                  name: "u98",
                  value: 0,
                },
                {
                  type: "1f",
                  name: "u95",
                  value: 0,
                },
                {
                  type: "1f",
                  name: "u97",
                  value: 0,
                },
              ];
              fa.Z &&
                D.f(
                  "s77",
                  v.concat([
                    {
                      type: "1f",
                      name: "u100",
                      value: fa.pi[Ca.V()],
                    },
                    {
                      type: "1i",
                      name: "u99",
                      value: 5,
                    },
                  ])
                );
              D.f(
                "s78",
                v.concat([
                  {
                    type: "1f",
                    name: "u101",
                    value: fa.Hb,
                  },
                  {
                    type: "1f",
                    name: "u102",
                    value: fa.Zc,
                  },
                ])
              );
              D.f("s82", [
                {
                  type: "1i",
                  name: "u117",
                  value: 0,
                },
                {
                  type: "1i",
                  name: "u92",
                  value: 1,
                },
                {
                  type: "1i",
                  name: "u80",
                  value: 2,
                },
                {
                  type: "1f",
                  name: "u120",
                  value: fa.Xl,
                },
              ]);
              D.f("s83", p);
              D.f("s84", p);
              D.f(
                "s76",
                [
                  {
                    type: "1i",
                    name: "u2",
                    value: 1,
                  },
                  {
                    type: "1i",
                    name: "u82",
                    value: 2,
                  },
                  {
                    type: "1i",
                    name: "u81",
                    value: 3,
                  },
                  {
                    type: "1f",
                    name: "u87",
                    value: 1,
                  },
                  {
                    type: "2f",
                    name: "u84",
                    value: [0, 0],
                  },
                ].concat(p)
              );
              Ca.T()
                ? (D.f("s87", p),
                  D.f(
                    "s87NormalMap",
                    [
                      {
                        type: "1i",
                        name: "u132",
                        value: 1,
                      },
                    ].concat(p)
                  ),
                  D.f(
                    "s87ParamsMap",
                    [
                      {
                        type: "1i",
                        name: "u56",
                        value: 1,
                      },
                    ].concat(p)
                  ),
                  D.f(
                    "s87NormalParamsMap",
                    [
                      {
                        type: "1i",
                        name: "u132",
                        value: 1,
                      },
                      {
                        type: "1i",
                        name: "u56",
                        value: 2,
                      },
                    ].concat(p)
                  ))
                : G();
              E = !0;
            },
            Ll: function () {
              B();
              x();
              G();
            },
            Kc: function () {
              return r.id;
            },
            je: function () {
              return P;
            },
            ke: function () {
              return z;
            },
            set: function (p) {
              ac.Fh(D);
              F[p].set();
            },
            Lb: function (p) {
              return t(p, w());
            },
            ed: function (p) {
              return t(p, {
                name: "_",
                a: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}",
                c: [],
                precision: "highp",
              });
            },
            Pl: function (p) {
              return t(p, {
                name: "_",
                a:
                  "const vec4 d=vec4(.5,.5,.5,.5);void main(){gl_FragData[0]=d,gl_FragData[1]=d,gl_FragData[2]=d,gl_FragData[3]=d;}",
                c: [],
                precision: "highp",
                aa: !0,
              });
            },
            G: function () {
              -1 !== H && r.G();
            },
            hd: function () {
              var p = 0;
              r.ra.forEach(function (v, y) {
                y = r.K[y];
                g.vertexAttribPointer(v, y, g.FLOAT, !1, r.pf, p);
                p += 4 * y;
              });
            },
            mc: function () {
              D.Nb(g);
            },
            Nb: function (p) {
              p.vertexAttribPointer(r.ra[0], 2, p.FLOAT, !1, 8, 0);
            },
            Ln: function () {
              g.vertexAttribPointer(r.attributes.a0, 3, g.FLOAT, !1, 12, 0);
            },
            Ia: function () {
              g.vertexAttribPointer(r.attributes.a0, 3, g.FLOAT, !1, 32, 0);
            },
            Pa: function () {
              g.vertexAttribPointer(r.attributes.a0, 3, g.FLOAT, !1, 24, 0);
            },
            zh: function () {
              g.vertexAttribPointer(r.attributes.a2, 3, g.FLOAT, !1, 32, 12);
            },
            Ah: function () {
              g.vertexAttribPointer(r.attributes.a2, 3, g.FLOAT, !1, 24, 12);
            },
            kc: function () {
              g.vertexAttribPointer(r.attributes.a1, 2, g.FLOAT, !1, 32, 24);
            },
            Mn: function () {
              g.vertexAttribPointer(r.attributes.a0, 3, g.FLOAT, !1, 20, 0);
              g.vertexAttribPointer(r.attributes.a1, 2, g.FLOAT, !1, 20, 12);
            },
            Dl: function () {
              g.vertexAttribPointer(r.attributes.a0, 3, g.FLOAT, !1, 32, 0);
              g.vertexAttribPointer(r.attributes.a2, 3, g.FLOAT, !1, 32, 12);
              g.vertexAttribPointer(r.attributes.a1, 2, g.FLOAT, !1, 32, 24);
            },
            El: function () {
              g.vertexAttribPointer(r.attributes.a0, 3, g.FLOAT, !1, 32, 0);
              g.vertexAttribPointer(r.attributes.a2, 3, g.FLOAT, !1, 32, 12);
            },
            Fl: function () {
              g.vertexAttribPointer(r.attributes.a0, 3, g.FLOAT, !1, 24, 0);
              g.vertexAttribPointer(r.attributes.a2, 3, g.FLOAT, !1, 24, 12);
            },
            cd: function () {
              g.vertexAttribPointer(r.attributes.a3, 4, g.FLOAT, !1, 16, 0);
            },
            fd: function (p, v) {
              g.uniform1i(r.u[p], v);
            },
            A: function (p, v) {
              g.uniform1f(r.u[p], v);
            },
            P: function (p, v, y) {
              g.uniform2f(r.u[p], v, y);
            },
            Gh: function (p, v) {
              g.uniform2fv(r.u[p], v);
            },
            gd: function (p, v, y, M) {
              g.uniform3f(r.u[p], v, y, M);
            },
            Hh: function (p, v) {
              g.uniform3fv(r.u[p], v);
            },
            oa: function (p, v) {
              g.uniform4fv(r.u[p], v);
            },
            Sl: function (p, v) {
              g.uniformMatrix2fv(r.u[p], !1, v);
            },
            Tl: function (p, v) {
              g.uniformMatrix3fv(r.u[p], !1, v);
            },
            lc: function (p, v) {
              g.uniformMatrix4fv(r.u[p], !1, v);
            },
            f: function (p, v) {
              D.set(p);
              v.forEach(function (y) {
                switch (y.type) {
                  case "4f":
                    g.uniform4fv(r.u[y.name], y.value);
                    break;
                  case "3f":
                    g.uniform3fv(r.u[y.name], y.value);
                    break;
                  case "2f":
                    g.uniform2fv(r.u[y.name], y.value);
                    break;
                  case "1f":
                    g.uniform1f(r.u[y.name], y.value);
                    break;
                  case "1i":
                    g.uniform1i(r.u[y.name], y.value);
                    break;
                  case "mat2":
                    g.uniformMatrix2fv(r.u[y.name], !1, y.value);
                    break;
                  case "mat4":
                    g.uniformMatrix4fv(r.u[y.name], !1, y.value);
                }
              });
            },
            H: function () {
              for (var p in F) {
                var v = F[p];
                g.detachShader(v.ha, v.sf);
                g.detachShader(v.ha, v.ee);
                g.deleteShader(v.sf);
                g.deleteShader(v.ee);
                g.deleteProgram(v.ha);
              }
            },
            J: function () {},
          };
        return D;
      })(),
      Ib = (function () {
        var b = {},
          f = [],
          n = !1,
          l = 0,
          t = 0,
          w = -1,
          G = -1,
          B = -1,
          x = 1,
          E = null,
          O = !1,
          C = null,
          P = !1,
          z = !1,
          F = !1,
          H = !1,
          r = !1,
          X = !1,
          D = !1,
          p = null,
          v = null,
          y = -1,
          M = -1,
          V = !1,
          Y = null,
          ia = -1,
          S = null,
          Z = null,
          aa = null,
          R = null,
          qa = null,
          ya = null,
          Ka = null,
          Aa = [
            {
              type: "1f",
              name: "u67",
              value: 0,
            },
            {
              type: "1f",
              name: "u128",
              value: 0,
            },
            {
              type: "1f",
              name: "u129",
              value: 0,
            },
            {
              type: "1f",
              name: "u62",
              value: 1,
            },
            {
              type: "1f",
              name: "u59",
              value: 0,
            },
            {
              type: "1f",
              name: "u69",
              value: 1,
            },
          ],
          ba = {
            h: function (A, ka) {
              b.$e = A;
              Ca.kf();
              sd.$d();
              Kc.$d(A.sd);
              w = A.ce;
              G = A.Em;
              B = A.Uc;
              x = A.Bm;
              var Q = [
                {
                  type: "1f",
                  name: "u62",
                  value: w,
                },
                {
                  type: "1f",
                  name: "u59",
                  value: B,
                },
                {
                  type: "1f",
                  name: "u63",
                  value: A.tl,
                },
                {
                  type: "mat4",
                  name: "u58",
                  value: A.gl,
                },
                {
                  type: "2f",
                  name: "u34",
                  value: A.ai,
                },
              ];
              A.jf = Q;
              var sa = [
                {
                  type: "3f",
                  name: "u64",
                  value: [0, 0, 0],
                },
                {
                  type: "3f",
                  name: "u65",
                  value: A.uf,
                },
                {
                  type: "3f",
                  name: "u66",
                  value: A.tf,
                },
                {
                  type: "1f",
                  name: "u67",
                  value: 0,
                },
                {
                  type: "1f",
                  name: "u68",
                  value: A.sd,
                },
                {
                  type: "1f",
                  name: "u69",
                  value: 1,
                },
              ];
              A.Th = sa;
              ba.mk(A, ka);
              n || void 0 !== A.ya || (A.ya = [0, 0, 120]);
              D = X = K.le;
              if (!n && X) {
                ka = 1 * Ca.yb();
                var wa = 1 * Ca.xb(),
                  za = {
                    isLinear: !0,
                    isPot: !1,
                    width: ka,
                    height: wa,
                  };
                p = ha.instance(za);
                v = ha.instance(za);
                y = 1 / ka;
                M = 1 / wa;
              }
              Q = [
                {
                  type: "1i",
                  name: "u33",
                  value: 1,
                },
                {
                  type: "3f",
                  name: "u60",
                  value: A.ya,
                },
                {
                  type: "1f",
                  name: "u124",
                  value: A.Ca,
                },
                {
                  type: "1f",
                  name: "u125",
                  value: A.sa,
                },
              ].concat(Q, sa);
              E = A.na;
              sa = [
                {
                  type: "1f",
                  name: "u128",
                  value: E[0],
                },
                {
                  type: "1f",
                  name: "u129",
                  value: E[1],
                },
              ];
              Ca.T()
                ? ((ka = [
                    {
                      type: "1i",
                      name: "u1",
                      value: 0,
                    },
                  ]),
                  (wa = [
                    {
                      type: "1i",
                      name: "u132",
                      value: 2,
                    },
                  ]),
                  L.f("s87NNGLcolor", Q.concat(sa)),
                  L.f("s87NNGLtexture", [].concat(ka, Q, sa)),
                  L.f("s87NNGLtextureNormalMap", [].concat(ka, wa, Q, sa)),
                  L.f(
                    "s87NNGLtextureParamsMap",
                    [
                      {
                        type: "1i",
                        name: "u56",
                        value: 2,
                      },
                    ].concat(ka, Q, sa)
                  ),
                  L.f(
                    "s87NNGLtextureNormalParamsMap",
                    [
                      {
                        type: "1i",
                        name: "u56",
                        value: 3,
                      },
                    ].concat(ka, wa, Q, sa)
                  ))
                : (L.f("s91", Q.concat(sa)),
                  L.f(
                    "s92",
                    [
                      {
                        type: "1i",
                        name: "u1",
                        value: 0,
                      },
                    ].concat(Q)
                  ),
                  L.f("s93", Q),
                  L.f("s94", Q),
                  L.f(
                    "s95",
                    Q.concat([
                      {
                        type: "1i",
                        name: "u132",
                        value: 0,
                      },
                    ])
                  ),
                  L.f("s96", Q),
                  L.f(
                    "s97",
                    Q.concat([
                      {
                        type: "1i",
                        name: "u56",
                        value: 0,
                      },
                    ])
                  ));
              L.f("s65", [
                {
                  type: "2f",
                  name: "u74",
                  value: A.gf,
                },
              ]);
              L.f(fa.Z ? "s77" : "s78", [
                {
                  type: "1f",
                  name: "u95",
                  value: A.Dd,
                },
                {
                  type: "3f",
                  name: "u96",
                  value: A.Pe,
                },
                {
                  type: "1f",
                  name: "u97",
                  value: A.Od,
                },
                {
                  type: "1f",
                  name: "u98",
                  value: 1,
                },
                {
                  type: "3f",
                  name: "u93",
                  value: A.ei,
                },
              ]);
              if ((V = A.Sc))
                (Y = A.Kk),
                  L.f("s76", [
                    {
                      type: "4f",
                      name: "u83",
                      value: A.Rc,
                    },
                    {
                      type: "1f",
                      name: "u86",
                      value: A.Ce,
                    },
                    {
                      type: "2f",
                      name: "u84",
                      value: A.Jk,
                    },
                  ]),
                  (ia = A.Ee);
              f.forEach(function (Qa) {
                Qa.wh(A);
              });
              n = !0;
            },
            mk: function (A, ka) {
              void 0 !== fb.la &&
                A.Pb &&
                Ca.T() &&
                (fb.la.h(A),
                ka.push(function (Q) {
                  fb.la.Ve(Q);
                  z = P = !0;
                }),
                void 0 !== fb.pa &&
                  A.Bc &&
                  (fb.pa.h(A),
                  ka.push(function (Q) {
                    fb.pa.Ve(Q);
                    F = !0;
                  })),
                void 0 !== fb.Vb && A.Id && (fb.Vb.h(A), (r = H = !0)));
              void 0 !== fb.Xa &&
                (fb.Xa.h(A),
                (C = fb.Xa.pk({
                  width: A.bc,
                  height: 2 * A.bc,
                  depth: 1.5 * A.bc,
                  Bj: -A.qe,
                  La: A.oe,
                  cj: A.pe,
                })),
                (O = !0));
            },
            Rl: function (A, ka, Q, sa) {
              A &&
                ((Ka = A),
                P && fb.la.Mb(A),
                F && fb.pa.Mb(A),
                H && fb.Vb.Mb(A),
                f.forEach(function (wa) {
                  wa.Mb(A);
                }));
              Q && (R = Q);
              sa && (qa = sa);
            },
            gb: function (A) {
              Ca.T()
                ? (L.f("s87NNGLcolor", A),
                  L.f("s87NNGLtexture", A),
                  L.f("s87NNGLtextureNormalMap", A),
                  L.f("s87NNGLtextureParamsMap", A),
                  L.f("s87NNGLtextureNormalParamsMap", A))
                : (L.f("s91", A),
                  L.f("s92", A),
                  L.f("s93", A),
                  L.f("s94", A),
                  L.f("s95", A),
                  L.f("s96", A),
                  L.f("s97", A));
            },
            Ra: function (A, ka, Q) {
              var sa = [A[0] + ka[0], A[1] + ka[1], A[2] + ka[2]];
              sa = [sa[0] + Q[0], sa[1] + Q[1], sa[2] + Q[2]];
              b.Ha = sa;
              b.Vk = ka;
              b.rm = Q;
              ba.gb([
                {
                  type: "3f",
                  name: "u122",
                  value: sa,
                },
              ]);
              Ca.T() && (P && fb.la.Ra(A, ka, Q), F && fb.pa.Ra(sa));
              O && fb.Xa.Ra(A);
            },
            Sa: function (A, ka, Q) {
              var sa = A * ka * Q;
              b.Wk = ka;
              b.sm = Q;
              b.gk = A;
              ba.gb([
                {
                  type: "1f",
                  name: "u123",
                  value: sa,
                },
              ]);
              Ca.T() && (P && fb.la.Sa(A * ka, Q), F && fb.pa.Sa(sa));
              O && fb.Xa.Sa(A);
            },
            rh: function () {
              ba.Ra(b.Ha, b.Vk, b.rm);
              ba.Sa(b.gk, b.Wk, b.sm);
              ba.Kb(b.ad);
              ba.h(b.$e);
              ba.Bh(b.Ji, b.sa);
            },
            Kb: function (A) {
              b.ad = A;
              ba.gb([
                {
                  type: "1f",
                  name: "u61",
                  value: A,
                },
              ]);
              Ca.T() && (P && fb.la.Kb(A), F && fb.pa.Kb(A));
            },
            Bh: function (A, ka) {
              b.Ji = A;
              b.sa = ka;
              ba.gb([
                {
                  type: "1f",
                  name: "u124",
                  value: A,
                },
                {
                  type: "1f",
                  name: "u125",
                  value: ka,
                },
              ]);
            },
            Jl: function (A) {
              E = A;
              0 === l &&
                ba.gb([
                  {
                    type: "1f",
                    name: "u128",
                    value: E[0],
                  },
                  {
                    type: "1f",
                    name: "u129",
                    value: E[1],
                  },
                ]);
            },
            Qa: function (A) {
              function ka() {
                O && fb.Xa.toggle(!1);
                V &&
                  L.f("s76", [
                    {
                      type: "1f",
                      name: "u87",
                      value: 0,
                    },
                  ]);
              }
              0 >= A
                ? ((t = 0),
                  0 !== l &&
                    ((l = 0),
                    Kc.pl(),
                    O && fb.Xa.toggle(!0),
                    V &&
                      L.f("s76", [
                        {
                          type: "1f",
                          name: "u87",
                          value: 1,
                        },
                      ])))
                : 1 <= A
                ? ((t = 1), 1 !== l && ((l = 1), Kc.Nh(!0)), ka())
                : ((t = A), 2 !== l && (Kc.Nh(!1), (l = 2), ka()));
              L.f("s78", [
                {
                  type: "1f",
                  name: "u98",
                  value: 1 - A,
                },
              ]);
              Aa[0].value = t;
              Aa[1].value = E[0] * (1 - A) + -300 * A;
              Aa[2].value = E[1] * (1 - A) + -300 * A;
              Aa[3].value = w * (1 - A) + A * G;
              Aa[4].value = B * (1 - A);
              Aa[5].value = 1 - A + A * x;
              z && fb.la.Ye(t, Aa);
              F && fb.pa.Ye(t, Aa);
              ba.gb(Aa);
            },
            xj: function (A) {
              Ka.b(1);
              A.forEach(function (ka) {
                ka.rj();
              });
              O && C.R();
            },
            Ck: function () {
              return 1 === l;
            },
            Gd: function (A) {
              Ka.sb(A);
            },
            ji: function (A) {
              f.push(A);
            },
            df: function (A) {
              z = A && P;
            },
            cf: function (A) {
              r = A && H;
            },
            Ue: function (A) {
              F && Ca.T() && fb.pa.Ul(A);
            },
            hb: function () {
              Ca.T() && (P && fb.la.hb(), F && fb.pa.hb());
            },
            uj: function (A, ka) {
              if (!D) return !1;
              p.N();
              A.b(0);
              L.set("s69");
              L.P("u7", 0, M);
              pa.g(!1, !1);
              v.i();
              p.b(0);
              L.P("u7", y, 0);
              pa.g(!1, !1);
              L.set("s70");
              ka.N();
              v.b(0);
              pa.g(!1, !1);
              return !0;
            },
            Mh: function (A) {
              D = A && X;
            },
            resize: function (A, ka, Q) {
              X &&
                ((A *= Q),
                (ka *= Q),
                p.resize(A, ka),
                v.resize(A, ka),
                (y = 1 / A),
                (M = 1 / ka));
            },
            Se: function (A, ka) {
              var Q = A.I(),
                sa = A.U(),
                wa = {
                  width: Q,
                  height: sa,
                  isPot: !1,
                };
              P && (aa && aa.remove(), (aa = ha.instance(wa)));
              S = Za.instance({
                width: Q,
                height: sa,
              });
              H || F
                ? (fb.Vb.Te(Q, sa), Z && Z.remove(), (Z = ha.instance(wa)))
                : (Z = A);
              z && fb.la.Te(Q, sa);
              ka && (ya && ya.remove(), (ya = ha.instance(wa)));
            },
            pj: function (A) {
              var ka = null;
              switch (l) {
                case 0:
                  ka = A;
                  break;
                case 2:
                  S.bind(!1, !0);
                  ya.i();
                  L.set("s60");
                  L.A("u6", t);
                  A.b(1);
                  qa.b(0);
                  pa.g(!0, !0);
                  ka = ya;
                  break;
                case 1:
                  ka = qa;
              }
              if (!z || 1 === l || !Ca.T()) return ka;
              ka.sb(0);
              r && fb.Vb.R(ka, Z);
              S.bind(!1, !r);
              F &&
                (r ? ka.b(0) : (Z.i(), L.set("s1"), pa.g(!0, !0)), fb.pa.R());
              Z.b(0);
              R.sb(2);
              fb.la.R();
              aa.i();
              L.set("s1");
              r || F ? Z.b(0) : ka.b(0);
              pa.g(!0, !fa.Z);
              fb.la.add();
              return aa;
            },
            vj: function (A, ka) {
              if (!V) return !1;
              L.set("s76");
              L.A("u85", A * ia);
              Y.b(1);
              Ib.Gd(2);
              Z ? Z.b(3) : ka.b(3);
              return !0;
            },
          };
        return ba;
      })(),
      Wa = (function () {
        function b() {
          B.forEach(function (Q) {
            Q.yj(qa);
          });
        }

        function f() {
          B.forEach(function (Q) {
            Q.Fc(qa);
          });
        }

        function n() {
          B.forEach(function (Q) {
            Q.wj(qa);
          });
        }

        function l() {
          B.forEach(function (Q) {
            Q.Gc(qa);
          });
        }

        function t() {
          qa
            ? Ib.xj(B)
            : B.forEach(function (Q) {
                Q.sj();
              });
        }

        function w() {
          Z && clearTimeout(Z);
          Z = setTimeout(function () {
            Z = M = !1;
          }, 16);
        }

        function G(Q) {
          Q();
        }
        var B = [],
          x = [],
          E = {
            ca: !1,
            position: !1,
            eb: !1,
          },
          O = [],
          C = [],
          P = null,
          z = 0,
          F = !1,
          H = null,
          r = null,
          X = null,
          D = null,
          p = !1,
          v = !1,
          y = !1,
          M = !1,
          V = !1,
          Y = !1,
          ia = !1,
          S = !1,
          Z = !1,
          aa = null,
          R = !1,
          qa = !1,
          ya = !1,
          Ka = !1,
          Aa = !1,
          ba = !1,
          A = !1,
          ka = {
            h: function () {
              g.enable(g.DEPTH_TEST);
              g.depthFunc(g.LEQUAL);
              g.clearDepth(1);
              fa.aj
                ? (g.enable(g.CULL_FACE),
                  g.frontFace("CCW" === fa.bj ? g.CCW : g.CW),
                  g.cullFace(g.BACK))
                : g.disable(g.CULL_FACE);
              ka.Nf();
              var Q = {
                isPot: !1,
                isLinear: !1,
                width: Ca.yb(),
                height: Ca.xb(),
                v: 4,
                isFloat: !1,
              };
              H = ha.instance(Q);
              Q = Object.assign({}, Q, {
                isLinear: !0,
                width: Ca.I(),
                height: Ca.U(),
              });
              r = ha.instance(Q);
              X = ha.instance(Q);
              fa.Ea &&
                ((Q = Object.assign({}, Q, {
                  isLinear: !1,
                })),
                (D = ha.instance(Q)));
              Y = eb.$();
              fa.Ea ||
                (P = sc.instance({
                  Za: fa.Za,
                  pb: fa.pb,
                  qb: fa.qb,
                  ob: fa.ob,
                }));
              p = !0;
            },
            Nf: function () {
              Ca.T()
                ? (E = gd.instance({}))
                : ((E.ca = Lc.instance({
                    Ob: fa.Ea ? !1 : "s88",
                    isFloat: !1,
                    Bb: !0,
                    clearColor: [0, 0, 0, 0],
                    v: 4,
                  })),
                  (E.position = Lc.instance({
                    Ob: fa.Ea ? !1 : "s98",
                    isFloat: !0,
                    Bb: !0,
                    clearColor: [0, 0, 0, 0],
                    v: 4,
                  })),
                  (E.eb = Lc.instance({
                    Ob: !1,
                    isFloat: !0,
                    Bb: !0,
                    clearColor: [0, 0, 0, 0],
                    v: 4,
                  })),
                  (E.ec = Lc.instance({
                    Ob: !1,
                    isFloat: !1,
                    Bb: !0,
                    clearColor: [0, 0, 0, 0],
                    v: 4,
                  })));
            },
            Rj: function () {
              return P;
            },
            ja: function (Q) {
              P = Q;
            },
            Zn: function () {},
            hb: function () {
              Ib.hb();
            },
            wh: function (Q) {
              Ib.h(Q, O);
              Ca.T() || (E.ca.Eh(!1), E.position.Eh("s91"));
              qa = Ka = !0;
            },
            Jn: function () {
              Ib.rh();
            },
            Nm: function (Q) {
              Ib.ji(Q);
            },
            Al: function (Q, sa, wa) {
              Ib.Ra(Q, sa, wa);
            },
            Bl: function (Q, sa, wa) {
              Ib.Sa(Q, sa, wa);
            },
            yl: function (Q, sa) {
              Ib.Bh(Q, sa);
            },
            zl: function (Q) {
              Ib.Jl(Q);
            },
            Cl: function (Q) {
              Ib.Kb(Q);
            },
            Qa: function (Q) {
              Ib.Qa(Q);
            },
            xh: function (Q, sa, wa, za) {
              Ib.Rl(Q, sa, wa, za);
              sa && ka.Se(sa, za ? !0 : !1);
              ya = !0;
            },
            df: function (Q) {
              Ib.df(Q);
            },
            Ue: function (Q) {
              Ib.Ue(Q);
            },
            cf: function (Q) {
              Ib.cf(Q);
            },
            Mh: function (Q) {
              Ib.Mh(Q);
            },
            Om: function (Q) {
              R &&
                ((Aa = !0),
                (ba = ha.instance({
                  width: aa.I(),
                  height: aa.U(),
                  isPot: !1,
                })),
                (A = Q));
            },
            Se: function (Q, sa) {
              aa =
                "string" === typeof Q
                  ? ha.instance({
                      url: Q,
                      isFloat: !1,
                    })
                  : Q;
              qa && Ib.Se(aa, sa);
              R = !0;
            },
            xf: function (Q) {
              B.push(Q);
              0 !== O.length &&
                (O.forEach(function (sa) {
                  sa(Q);
                }),
                O.splice(0, O.length));
            },
            ml: function (Q) {
              Q = B.indexOf(Q);
              -1 !== Q && B.splice(Q, 1);
            },
            Pm: function (Q) {
              x.push(Q);
            },
            Gn: function (Q) {
              Q = x.indexOf(Q);
              -1 !== Q && x.splice(Q, 1);
            },
            md: function (Q) {
              qa && (v = Q);
            },
            animate: function (Q) {
              !fa.Ea || (qa && ya)
                ? v &&
                  (M || (z > fa.Xk && V)
                    ? (ia && clearTimeout(ia),
                      ++z,
                      window.cancelAnimationFrame(ka.animate),
                      (ia = setTimeout(function () {
                        window.requestAnimationFrame(ka.animate);
                      }, 16)))
                    : (F && FPSCounter.$n(),
                      ka.nh(Q),
                      ++z,
                      qa || (v && window.requestAnimationFrame(ka.animate))))
                : setTimeout(ka.animate, 100);
            },
            Sm: function (Q) {
              C.push(Q);
            },
            nh: function (Q) {
              if ((!fa.Ea || (qa && ya)) && p) {
                C.forEach(G);
                if (Ca.T()) {
                  if (!E.set() && !Ca.ea()) {
                    Ca.im();
                    ka.Nf();
                    Lc.vc();
                    L.Ll();
                    fa.Ea && Ib.rh();
                    g.flush();
                    window.requestAnimationFrame(ka.animate);
                    return;
                  }
                  qa || qd.ol();
                  t();
                  E.G();
                  Y && g.depthMask(!1);
                } else
                  qa && Ib.Gd(1),
                    E.ca.set(!0, !0, !0),
                    f(),
                    E.ca.G(),
                    Y && g.depthMask(!1),
                    E.ec.set(!1, !Y, !1),
                    n(),
                    E.ec.G(),
                    E.position.set(!0, !Y, !1),
                    yc.R(),
                    b(),
                    E.position.G(),
                    E.eb.set(!1, !Y, !1),
                    l(),
                    E.eb.G();
                g.disable(g.DEPTH_TEST);
                Y || g.depthMask(!1);
                fa.Z && Mc.R();
                var sa = ka.ig();
                sa.b(7);
                L.set(fa.Z ? "s77" : "s78");
                Lc.Ki();
                H.N();
                fa.hl
                  ? (g.enable(g.BLEND),
                    g.clearColor(0, 0, 0, 0),
                    g.clear(g.COLOR_BUFFER_BIT),
                    g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA))
                  : g.disable(g.BLEND);
                qa || yc.Zd();
                E.position.b(0);
                E.eb.b(1);
                E.ca.b(2);
                P.xc(3);
                E.ec.b(6);
                P.yc(4);
                P.Tf();
                fa.Z && Mc.b(5);
                pa.g(!0, !0);
                Za.fa();
                Ib.uj(H, r) || (L.set("s1"), r.N(), H.b(0), pa.g(!1, !1));
                L.set("s66");
                X.N();
                r.b(0);
                pa.g(!1, !1);
                r.i();
                X.b(0);
                Ka && qa
                  ? (L.set("s65"),
                    D.b(1),
                    Ib.Gd(2),
                    pa.g(!1, !1),
                    L.set("s1"),
                    D.N(),
                    r.b(0),
                    pa.g(!1, !1))
                  : (L.set("s64"), pa.g(!1, !1), r.b(0));
                Za.W();
                g.viewport(0, 0, Ca.I(), Ca.U());
                (qa && Ib.vj(Q, sa)) || L.set("s1");
                pa.g(!1, !1);
                g.enable(g.DEPTH_TEST);
                g.depthMask(!0);
                g.flush();
              }
            },
            ig: function () {
              if (!R) return ha.sg();
              if (!qa) return aa;
              if (Aa && !Ib.Ck()) {
                L.set(A);
                Za.fa();
                ba.nc();
                ba.i();
                aa.b(0);
                var Q = ba;
                pa.g(!0, !0);
              } else Q = aa;
              return Ib.pj(Q);
            },
            am: function () {
              fa.gj ||
                v ||
                ((v = !0),
                ka.animate(Date.now()),
                y || ld.bm(),
                y || Kc.Ub(!1),
                S && clearTimeout(S),
                fa.Z && Mc.dd(),
                (S = setTimeout(ka.ua, fa.Fi)),
                y || Ca.jk(),
                (y = !0));
            },
            Xn: function () {
              v && ((V = v = !1), cancelAnimationFrame(ka.animate));
            },
            ua: function () {
              V ||
                !y ||
                M ||
                fa.Qf ||
                ((V = M = !0),
                S && clearTimeout(S),
                Z && clearTimeout(Z),
                yc.ge().oh(),
                (S = setTimeout(function () {
                  Ca.lf(fa.$k);
                  fa.Z && Mc.Uh();
                  z = 0;
                  w();
                }, 24)));
            },
            wake: function () {
              V &&
                y &&
                !M &&
                ((M = !0),
                (V = !1),
                (z = 0),
                yc.ge().oh(),
                S && clearTimeout(S),
                Z && clearTimeout(Z),
                (S = setTimeout(function () {
                  Ca.lf(1);
                  fa.Z && Mc.dd();
                  w();
                }, 16)));
            },
            wn: function () {
              F = !0;
            },
            mj: function () {
              F && FPSCounter.remove();
              F = !1;
            },
            ld: function (Q) {
              Ka = Q;
            },
            eo: function () {
              L.f("s78", [
                {
                  type: "1f",
                  name: "u101",
                  value: fa.Hb,
                },
                {
                  type: "1f",
                  name: "u102",
                  value: fa.Zc,
                },
              ]);
            },
            resize: function (Q, sa, wa) {
              H.resize(Q * wa, sa * wa);
              r.resize(Q, sa);
              X.resize(Q, sa);
              fa.Ea && D.resize(Q, sa);
              Ib.resize(Q, sa, wa);
              Q = [
                {
                  type: "2f",
                  name: "u7",
                  value: [1 / Q, 1 / sa],
                },
              ];
              L.f("s66", Q);
              L.f("s64", Q);
            },
            H: function () {
              B.concat(x).forEach(function (Q) {
                Q.H();
              });
              B.splice(0, B.length);
              x.splice(0, x.length);
              E.ca.remove();
              E.eb.remove();
              E.ec.remove();
              E.position.remove();
              H.remove();
              r.remove();
              X.remove();
              D && D.remove();
              M = !0;
            },
          };
        return ka;
      })(),
      fb = {},
      Ca = (function () {
        function b() {
          Lc.resize(n * P, l * P);
          D.T() && gd.resize(n * P, l * P);
          Wa.resize(n, l, P);
          fa.Z && Mc.resize(n * P, l * P, P);
          D.kf();
        }
        var f = null,
          n = 0,
          l = 0,
          t = -1,
          w = !1,
          G = !1,
          B = !1,
          x = !1,
          E = !1,
          O = !1,
          C = !1,
          P = 1,
          z = !1,
          F = !1,
          H = !1,
          r = !1,
          X = !1,
          D = {
            h: function (p) {
              void 0 !== p.onload && p.onload && (F = p.onload);
              void 0 === p.expand && (p.expand = !1);
              void 0 === p.Pc && (p.Pc = !1);
              void 0 === p.ma && (p.ma = !1);
              void 0 === p.zb && (p.zb = !1);
              void 0 === p.alpha && (p.alpha = !1);
              void 0 === p.preserveDrawingBuffer &&
                (p.preserveDrawingBuffer = !1);
              p.Pc && (w = !0);
              f = p.ma ? p.ma : document.getElementById(p.Wi);
              p.expand && D.expand();
              try {
                window.Jm = p.zb
                  ? p.zb.Gj()
                  : f.getContext("webgl", {
                      antialias: !1,
                      alpha: p.alpha,
                      depth: !0,
                      premultipliedAlpha: !1,
                      stencil: !1,
                      preserveDrawingBuffer: p.preserveDrawingBuffer,
                    });
                r = p.zb ? p.zb.ea() : !1;
                H = !r;
                8 > g.getParameter(g.MAX_TEXTURE_IMAGE_UNITS) &&
                  D.Cc("too few texture image units");
                if (!eb.h()) return D.Cc("invalid config");
                fa.om &&
                  (G = g.getExtension("EXT_texture_filter_anisotropic")) &&
                  (E = !0);
                fa.pm && g.getExtension("WEBGL_compressed_texture_s3tc");
                H &&
                  (g.getExtension("OES_element_index_uint") ||
                    g.getExtension("MOZ_OES_element_index_uint") ||
                    g.getExtension("WEBKIT_OES_element_index_uint"));
                !r && fa.qm && (B = g.getExtension("EXT_sRGB")) && (O = !0);
                H
                  ? (x = g.getExtension("WEBGL_draw_buffers")) &&
                    !fa.Pf &&
                    (C = !0)
                  : (C = 4 <= g.getParameter(g.MAX_DRAW_BUFFERS));
                if (C) {
                  var v = D.ij();
                  C = C && v;
                }
              } catch (y) {
                return D.Cc(y);
              }
              if (null === g || !g) return D.Cc("NO_GL");
              p.expand && window.addEventListener("resize", D.expand, !1);
              f.addEventListener(
                "contextmenu",
                function (y) {
                  y.preventDefault();
                  return !1;
                },
                !1
              );
              n = f.width;
              l = f.height;
              D.te();
              return !0;
            },
            te: function () {
              t = w ? 3 : 2;
              eb.$() || (t = Math.min(t, 1));
              eb.Ti() || (t = Math.min(t, 0));
              sd.h();
              Lc.h();
              for (var p in fb) fb[p].ic();
              L.h();
              yc.h();
              Kc.h();
              Wa.h();
              ld.h();
              fa.Z && Mc.h();
              "undefined" !== typeof FPSCounter && FPSCounter.h();
              D.kf();
              D.kj();
              z = !0;
              F && F();
              return !0;
            },
            kj: function () {
              if (C) {
                var p = gd.instance({
                  width: 256,
                  height: 1,
                });
                p.bind();
                g.viewport(0, 0, 256, 1);
                L.set("s86");
                L.oa("color", [1, 0, 0, 1]);
                pa.g(!0, !0);
                g.clearColor(0, 0, 0, 0);
                g.clear(g.COLOR_BUFFER_BIT || g.DEPTH_BUFFER_BIT);
                Za.W();
                L.set("s1");
                p.eb.b(0);
                pa.g(!1, !1);
                p = new Uint8Array(1024);
                g.readPixels(0, 0, 256, 1, g.RGBA, g.UNSIGNED_BYTE, p);
                X = 1 >= p[1020];
              }
            },
            ij: function () {
              var p = gd.instance({
                width: 1,
                height: 1,
              });
              if (!p.set()) return p.remove(), !1;
              L.Pl(g);
              pa.wb(g);
              g.bindFramebuffer(g.FRAMEBUFFER, null);
              L.Lb(g);
              p.ca.sb(0);
              pa.wb(g);
              var v = new Uint8Array(4);
              g.readPixels(0, 0, 1, 1, g.RGBA, g.UNSIGNED_BYTE, v);
              p.remove();
              return 3 < Math.abs(v[0] - 127) ? !1 : !0;
            },
            ea: function () {
              return r;
            },
            I: function () {
              return n;
            },
            U: function () {
              return l;
            },
            yb: function () {
              return P * D.I();
            },
            xb: function () {
              return P * D.U();
            },
            Ij: function () {
              return n / l;
            },
            V: function () {
              return t;
            },
            Ak: function () {
              return 3 === t;
            },
            Hg: function () {
              return X;
            },
            T: function () {
              return C;
            },
            im: function () {
              C = !1;
            },
            An: function () {
              return !1;
            },
            Vi: function () {
              return 0 < D.V();
            },
            Xm: function () {
              return D.T() && 0 < D.V();
            },
            fe: function (p) {
              var v = g,
                y = "";
              r || ((v = x), (y = "_WEBGL"));
              return [
                v["COLOR_ATTACHMENT0" + y],
                v["COLOR_ATTACHMENT1" + y],
                v["COLOR_ATTACHMENT2" + y],
                v["COLOR_ATTACHMENT3" + y],
              ].splice(0, p);
            },
            Jc: function (p) {
              return D.fe(4)[p];
            },
            ck: function () {
              return r
                ? g.SRGB
                  ? g.SRGB
                  : g.RGBA
                : O
                ? B.SRGB_ALPHA_EXT
                : g.RGBA;
            },
            yk: function () {
              return E;
            },
            Nj: function () {
              return G;
            },
            Nk: function (p) {
              D.ea() ? g.drawBuffers(D.fe(p)) : x.drawBuffersWEBGL(D.fe(p));
            },
            expand: function () {
              Wa.wake();
              D.resize(window.innerWidth, window.innerHeight);
              Wa.ua();
            },
            resize: function (p, v) {
              !f ||
                (p === n && v === l) ||
                ((n = p),
                (l = v),
                (f.width = n),
                (f.height = l),
                z && (yc.resize(), b()));
            },
            kf: function () {
              var p = [
                {
                  type: "2f",
                  name: "u7",
                  value: [1 / Ca.yb(), 1 / Ca.xb()],
                },
              ];
              L.f("s66", p);
              L.f("s64", p);
            },
            lf: function (p) {
              P = p;
              b();
            },
            Ba: function (p, v) {
              f.addEventListener(p, v, !1);
            },
            Cc: function () {
              t = -1;
              return !1;
            },
            If: function () {
              return 0 <= t;
            },
            Cn: function () {},
            Kn: function () {},
            Wn: function () {
              var p = document.getElementById("loading");
              p && (p.style.display = "block");
            },
            jk: function () {
              var p = document.getElementById("loading");
              p && (p.style.display = "none");
            },
            H: function () {
              D.If() &&
                (ha.Sh(),
                Wa.H(),
                pa.H(),
                Lc.H(),
                fa.Z && Mc.H(),
                sc.H(),
                ld.H(),
                L.H(),
                ha.H(),
                g.flush(),
                (g = null));
            },
          };
        return D;
      })(),
      yc = (function () {
        var b = !1,
          f = !1,
          n = [];
        return {
          h: function () {},
          instance: function (l) {
            void 0 === l.ph && (l.ph = !0);
            void 0 === l.wd && (l.wd = 0.1);
            void 0 === l.vd && (l.vd = 100);
            void 0 === l.direction && (l.direction = [0, 0, -1]);
            void 0 === l.hg && (l.hg = 45);
            var t = new tc(),
              w = new Xa(50, -50, -400),
              G = null;
            t.setPosition(w);
            var B = new Int8Array(20),
              x = new Int8Array(20),
              E = 0,
              O = 0,
              C = 0,
              P = 0,
              z = {
                R: function () {
                  x[L.Kc()] || (L.lc("u103", t.elements), (x[L.Kc()] = 1));
                  B[L.Kc()] || (L.lc("u115", G), (B[L.Kc()] = 1));
                },
                Yd: function () {
                  O || (L.lc("u103", t.elements), (O = 1));
                  E || (L.P("u104", G[0], G[5]), (E = 1));
                },
                Zd: function () {
                  C || (L.gd("u93", w.x, w.y, w.z), (C = 1));
                },
                ub: function () {
                  P || (L.gd("u133", w.x, w.y, w.z), (P = 1));
                },
                Kf: function () {
                  var F = l.wd,
                    H = l.vd,
                    r = Math.tan((0.5 * l.hg * Math.PI) / 180);
                  G = [
                    0.5 / r,
                    0,
                    0,
                    0,
                    0,
                    (0.5 * Ca.Ij()) / r,
                    0,
                    0,
                    0,
                    0,
                    -(H + F) / (H - F),
                    -1,
                    0,
                    0,
                    (-2 * H * F) / (H - F),
                    0,
                  ];
                  for (F = 0; 20 > F; ++F) B[F] = 0;
                  E = 0;
                },
                Kl: function (F, H) {
                  w.uh(H[0]).vh(H[1]).z = H[2];
                  t.elements.set(F);
                  for (F = 0; 20 > F; ++F) x[F] = 0;
                  P = C = O = 0;
                },
                oh: function () {
                  for (var F = (P = C = 0); 20 > F; ++F) x[F] = 0;
                },
              };
            z.Kf();
            b = z;
            f = !0;
            l.ph && n.push(z);
            return z;
          },
          R: function () {
            f && b.R();
          },
          Yd: function () {
            f && b.Yd();
          },
          Zd: function () {
            f && b.Zd();
          },
          ub: function () {
            f && b.ub();
          },
          resize: function () {
            n.forEach(function (l) {
              l.Kf();
            });
          },
          ge: function () {
            return b;
          },
        };
      })(),
      Lc = (function () {
        var b = [],
          f = null;
        return {
          h: function () {
            f = Za.instance({
              width: Ca.yb(),
              height: Ca.xb(),
              cc: !Ca.T(),
            });
          },
          instance: function (n) {
            void 0 === n.width && (n.width = Ca.yb());
            void 0 === n.height && (n.height = Ca.xb());
            void 0 === n.isFloat && (n.isFloat = !1);
            void 0 === n.Bb && (n.Bb = !1);
            void 0 === n.clearColor && (n.clearColor = [0, 0, 0, 0]);
            void 0 === n.v && (n.v = 4);
            var l = ha.instance({
                isFloat: n.isFloat && eb.$(),
                L: n.isFloat,
                width: n.width,
                height: n.height,
                isPot: !1,
                isLinear: !1,
                v: n.v,
              }),
              t = void 0 !== n.Ob && n.Ob ? !0 : !1,
              w = n.Ob,
              G = {
                set: function (B, x, E) {
                  E && f.bind(!1, E);
                  l.i();
                  B &&
                    (g.clearColor(
                      n.clearColor[0],
                      n.clearColor[1],
                      n.clearColor[2],
                      n.clearColor[3]
                    ),
                    f.Md());
                  x && f.Jf();
                  t && L.set(w);
                },
                Eh: function (B) {
                  t = (w = B) ? !0 : !1;
                },
                G: function () {
                  l.od();
                },
                b: function (B) {
                  l.b(B);
                },
                resize: function (B, x) {
                  l.resize(B, x);
                },
                debug: function () {
                  l.debug();
                },
                remove: function () {
                  l.remove();
                },
              };
            n.Bb && b.push(G);
            return G;
          },
          resize: function (n, l) {
            f.resize(n, l);
            b.forEach(function (t) {
              t.resize(n, l);
            });
          },
          Ki: function () {
            f.Cf();
          },
          vc: function () {
            f.vc();
          },
          nc: function () {
            f.nc();
          },
          $m: function () {
            f.Jf();
          },
          Zm: function () {
            f.Md();
          },
          Ym: function () {
            f.clear();
          },
          H: function () {
            f.remove();
          },
        };
      })(),
      gd = (function () {
        var b = [];
        return {
          instance: function (f) {
            void 0 === f.width && (f.width = Ca.yb());
            void 0 === f.height && (f.height = Ca.xb());
            var n = g.createFramebuffer(),
              l = f.width,
              t = f.height,
              w = !0;
            f = {
              isFloat: eb.$(),
              L: !0,
              width: l,
              height: t,
              isPot: !1,
              isLinear: !1,
              v: 4,
            };
            var G = ha.instance(f),
              B = ha.instance(f),
              x = ha.instance(f),
              E = ha.instance(f),
              O = Za.Oj(),
              C = Za.mg();
            g.bindFramebuffer(O, n);
            var P = g.createRenderbuffer();
            g.bindRenderbuffer(g.RENDERBUFFER, P);
            g.renderbufferStorage(g.RENDERBUFFER, g.DEPTH_COMPONENT16, l, t);
            g.framebufferRenderbuffer(O, g.DEPTH_ATTACHMENT, g.RENDERBUFFER, P);
            g.clearDepth(1);
            g.framebufferTexture2D(O, Ca.Jc(0), g.TEXTURE_2D, G.get(), 0);
            g.framebufferTexture2D(O, Ca.Jc(1), g.TEXTURE_2D, B.get(), 0);
            g.framebufferTexture2D(O, Ca.Jc(2), g.TEXTURE_2D, E.get(), 0);
            g.framebufferTexture2D(O, Ca.Jc(3), g.TEXTURE_2D, x.get(), 0);
            Ca.Nk(4);
            g.bindFramebuffer(O, null);
            Za.reset();
            var z = {
              position: G,
              eb: B,
              ec: x,
              ca: E,
              bind: function () {
                g.bindFramebuffer(O, n);
                Za.reset();
              },
              set: function () {
                g.checkFramebufferStatus(C);
                g.bindFramebuffer(O, n);
                Za.reset();
                if (w) {
                  if (g.checkFramebufferStatus(C) !== g.FRAMEBUFFER_COMPLETE)
                    return !1;
                  w = !1;
                }
                g.viewport(0, 0, l, t);
                g.clearColor(0, 0, 0, 0);
                L.Cb() && !Ca.Hg() && (L.set("s85"), pa.g(!1, !1));
                g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
                return !0;
              },
              G: function () {},
              resize: function (F, H) {
                l = F;
                t = H;
                G.resize(F, H);
                B.resize(F, H);
                E.resize(F, H);
                x.resize(F, H);
                g.bindRenderbuffer(g.RENDERBUFFER, P);
                g.renderbufferStorage(
                  g.RENDERBUFFER,
                  g.DEPTH_COMPONENT16,
                  l,
                  t
                );
                g.bindRenderbuffer(g.RENDERBUFFER, null);
              },
              remove: function () {
                G.remove();
                B.remove();
                E.remove();
                x.remove();
                g.deleteRenderbuffer(P);
                g.deleteFramebuffer(n);
                var F = b.indexOf(z);
                -1 !== F && b.splice(F, 1);
              },
            };
            b.push(z);
            return z;
          },
          resize: function (f, n) {
            b.forEach(function (l) {
              l.resize(f, n);
            });
          },
        };
      })(),
      sc = (function () {
        var b = [],
          f = fa.Bf;
        return {
          instance: function (n) {
            function l() {
              B
                ? t()
                : ((H = Kd.instance({
                    Ja: O,
                    wk: f,
                  })),
                  (G = fa.Gi[Ca.V()]),
                  (C = ha.instance({
                    isFloat: eb.$(),
                    L: !0,
                    isPot: !0,
                    isLinear: !1,
                    cb: !0,
                    width: G,
                    height: G / 2,
                    v: 3,
                  })),
                  (P = ha.instance({
                    isFloat: eb.$(),
                    L: !0,
                    isPot: !0,
                    isLinear: !1,
                    cb: !0,
                    width: G,
                    height: G / 2,
                    v: 3,
                  })),
                  (z = ha.instance({
                    isFloat: eb.$(),
                    L: !0,
                    isPot: !0,
                    width: 1,
                    height: G / 2,
                    v: 3,
                  })),
                  (F = ha.instance({
                    isFloat: eb.$() && !f,
                    L: !f,
                    isPot: !1,
                    isLinear: !0,
                    cb: !0,
                    isMipmap: !1,
                    width: G,
                    height: G / 2,
                    v: f ? 4 : 3,
                  })),
                  (B = !0),
                  t(),
                  X.forEach(function (p) {
                    p();
                  }),
                  X.splice(0, X.length));
            }

            function t() {
              if (B) {
                Za.fa();
                H.kl();
                C.N();
                L.set("s68");
                O.b(0);
                L.A("u72", fa.Hb);
                ha.Oi(1);
                pa.g(!0, !0);
                for (var p = fa.qk[Ca.V()], v = 0; v < p; ++v)
                  P.i(),
                    L.set("s71"),
                    L.P("u7", 1 / G, 0),
                    C.b(0),
                    pa.g(!1, !1),
                    C.i(),
                    L.P("u7", 0, 2 / G),
                    P.b(0),
                    pa.g(!1, !1);
                z.N();
                L.set("s73");
                C.b(0);
                pa.g(!1, !1);
                L.set(f ? "s75" : "s74");
                F.N();
                C.b(0);
                z.b(1);
                pa.g(!1, !1);
                ha.W(0);
                ha.W(1);
              }
            }
            n.Za || (n.Za = !1);
            n.pb || (n.pb = !1);
            n.qb || (n.qb = 0);
            n.ob || (n.ob = 0);
            var w = 0,
              G = 0,
              B = !1,
              x = null,
              E = null,
              O = null,
              C = null,
              P = null,
              z = null,
              F = null,
              H = null,
              r = 0,
              X = [],
              D = {
                h: function () {
                  function p() {
                    2 === ++v &&
                      ((O = ha.instance({
                        isFloat: eb.$(),
                        L: !0,
                        isPot: !1,
                        isMipmap: !1,
                        isLinear: !1,
                        cb: !0,
                        width: w,
                        height: w / 2,
                        v: 3,
                      })),
                      Za.fa(),
                      O.N(),
                      L.set("s67"),
                      L.A("u77", n.qb),
                      L.A("u78", n.ob),
                      x.b(0),
                      E.b(1),
                      pa.g(!0, !0),
                      l());
                  }
                  var v = 0;
                  w = fa.Hi[Ca.V()];
                  r = Math.log2(w) - 1;
                  n.Za &&
                    ((x = ha.instance({
                      isPot: !1,
                      url: n.Za,
                      M: p,
                      v: 3,
                      isFlipY: !1,
                    })),
                    (E = ha.instance({
                      isPot: !1,
                      url: n.pb,
                      M: p,
                      v: 3,
                      isFlipY: !1,
                    })));
                },
                Ch: function (p) {
                  O = p;
                  l();
                },
                xc: function (p) {
                  B && (H.b(p), L.A("u94", H.I()));
                },
                yc: function (p) {
                  B && F.b(p);
                },
                Tf: function () {
                  L.A("u21", r);
                },
                jg: function () {
                  return r;
                },
                I: function () {
                  return w;
                },
                tb: function (p) {
                  B ? p() : X.push(p);
                },
                H: function () {
                  x && x.remove();
                  E && E.remove();
                  C.remove();
                  z.remove();
                  P.remove();
                  H.remove();
                  F.remove();
                  O.remove();
                },
              };
            b.push(D);
            D.h();
            return D;
          },
          H: function () {
            b.forEach(function (n) {
              n.H();
            });
          },
        };
      })(),
      Jd = {
        instance: function (b) {
          var f = b.Gk,
            n = b.Ek,
            l = 0,
            t = f.I();
          b = fa.Bf;
          var w = ha.instance({
              isFloat: eb.$() && !b,
              L: !b,
              isLinear: !0,
              isMipmap: !1,
              isPot: !1,
              width: t,
              v: b ? 4 : 3,
              isFlipY: !1,
            }),
            G = ha.instance({
              isFloat: eb.$() && !b,
              L: !b,
              isPot: !1,
              isLinear: !0,
              cb: !0,
              isMipmap: !1,
              width: t,
              height: t / 2,
              v: b ? 4 : 3,
            }),
            B = Za.instance({
              width: t,
              height: t,
            }),
            x = b ? "s61" : "s60";
          return {
            Ql: function (E) {
              l = E;
              L.set(x);
              g.viewport(0, 0, t, t);
              B.i();
              w.i();
              L.A("u6", l);
              f.xc(1);
              n.xc(0);
              pa.g(!0, !0);
              g.viewport(0, 0, t, t / 2);
              G.i();
              f.yc(1);
              n.yc(0);
              pa.g(!1, !1);
              g.flush();
            },
            xc: function (E) {
              w.b(E);
            },
            yc: function (E) {
              G.b(E);
            },
            Tf: function () {
              L.A("u21", f.jg() * (1 - l) + n.jg() * l);
            },
          };
        },
      },
      Kc = (function () {
        function b(Z) {
          var aa = (y - fa.Kd) / (fa.Ff - fa.Kd);
          aa = 1 - Math.pow(1 - aa, fa.Hm);
          y += Z * (1 + aa * fa.Im);
          y = Math.min(Math.max(y, fa.Kd), fa.Ff);
          S.Ub();
        }

        function f(Z) {
          -1 !== B &&
            ((X = r = 0),
            G(),
            b((fa.Gm * Z.deltaY) / window.innerHeight),
            Z.preventDefault());
        }

        function n() {
          p += r;
          v += X;
          v = Math.min(Math.max(v, fa.cl), fa.bl);
          S.Ub();
        }

        function l(Z) {
          if (0 === B || -1 === B) return !1;
          var aa = void 0 !== Z.touches && Z.touches.length;
          Z.preventDefault();
          if (2 === B) {
            var R = Ac(
              Z.touches[0].pageX,
              Z.touches[0].pageY,
              Z.touches[1].pageX,
              Z.touches[1].pageY
            );
            b(-(F - R) * fa.dl);
            F = R;
          } else
            (R = aa ? Z.touches[0].clientX : Z.clientX),
              (Z = aa ? Z.touches[0].clientY : Z.clientY),
              (r = (2 * (R - P) * Math.PI) / Ca.I()),
              (X = (2 * (Z - z) * Math.PI) / Ca.U()),
              4 === B
                ? ((ia[0] += r * fa.dh),
                  (ia[1] -= X * fa.dh),
                  (ia[0] = Math.min(Math.max(ia[0], -fa.gh), fa.gh)),
                  (ia[1] = Math.min(Math.max(ia[1], -fa.hh), fa.hh)),
                  S.Ub())
                : n(),
              (P = R),
              (z = Z);
        }

        function t() {
          0 !== B &&
            -1 !== B &&
            ((0 === r && 0 === X) || 1 !== B || !V
              ? Wa.ua()
              : (G(), (H = Date.now()), (M = setInterval(S.Dk, D))),
            (B = 0));
        }

        function w(Z) {
          if (2 !== B && -1 !== B) {
            X = r = 0;
            G();
            Wa.wake();
            var aa = void 0 !== Z.changedTouches && Z.touches.length;
            Z.preventDefault();
            aa && 2 === Z.touches.length
              ? ((B = 2),
                (F = Ac(
                  Z.touches[0].pageX,
                  Z.touches[0].pageY,
                  Z.touches[1].pageX,
                  Z.touches[1].pageY
                )))
              : ((B = aa || 2 !== Z.button ? 1 : 4),
                (P = aa ? Z.touches[0].clientX : Z.clientX),
                (z = aa ? Z.touches[0].clientY : Z.clientY));
            return !1;
          }
        }

        function G() {
          M && (clearInterval(M), (M = !1));
        }
        var B = 0,
          x = !1,
          E = !1,
          O = !1,
          C = 1,
          P = 0,
          z = 0,
          F = 0,
          H = 0,
          r = 0,
          X = 0,
          D = 16,
          p = fa.Ph,
          v = fa.fh,
          y = fa.Jd,
          M = !1,
          V = 0,
          Y = new Float32Array([0, 0, 0, 0, 0]),
          ia = [fa.Ri, fa.Si],
          S = {
            h: function () {
              V = fa.ki[Ca.V()];
              D = fa.Aj[Ca.V()];
              Ca.Ba("mousedown", w);
              Ca.Ba("mouseup", t);
              Ca.Ba("mouseout", t);
              Ca.Ba("mousemove", l);
              Ca.Ba("mousemove", l);
              Ca.Ba("wheel", f);
              Ca.Ba("touchstart", w);
              Ca.Ba("touchend", t);
              Ca.Ba("touchmove", l);
            },
            Ub: function (Z) {
              x
                ? ((E[0] = -v),
                  (E[1] = p),
                  (O[1].value = (C / fa.Jd) * y),
                  Ib.gb(O))
                : ((Y[0] = p),
                  (Y[1] = v),
                  (Y[2] = y),
                  (Y[3] = ia[0]),
                  (Y[4] = ia[1]),
                  ld.vl(Y, Z));
            },
            Dk: function () {
              if ((1e-4 > r && 1e-4 > X) || -1 === B)
                G(), (X = r = 0), 0 === B && Wa.ua();
              var Z = Date.now(),
                aa = Z - H;
              H = Z;
              Z = Math.pow(V, aa / D);
              r *= Z;
              X *= Z;
              n();
            },
            $d: function (Z) {
              x ||
                ((x = !0),
                (B = -1),
                (E = [0, 0, 0]),
                (O = [
                  {
                    name: "u64",
                    type: "3f",
                    value: E,
                  },
                  {
                    name: "u68",
                    type: "1f",
                    value: 1,
                  },
                ]),
                (C = Z));
            },
            Nh: function (Z) {
              -1 === B && Z && (B = 0);
              Z || (B = -1);
            },
            pl: function () {
              X = r = 0;
              p = fa.Ph;
              v = fa.fh;
              y = fa.Jd;
              S.Ub();
            },
            On: function (Z) {
              y = Z;
            },
            Pn: function (Z) {
              ia[0] = Z[0];
              ia[1] = Z[1];
              fa.Gf = Z[2];
            },
            Nn: function (Z, aa) {
              p = Z;
              v = aa;
            },
          };
        return S;
      })(),
      qd = (function () {
        var b = {
          s87: !1,
          s87color: !1,
          s87NormalMap: !1,
          s87ParamsMap: !1,
          s87NormalParamsMap: !1,
        };
        return {
          instance: function (f) {
            function n(ba) {
              if (Aa) {
                ba.tweaker && window.JEEFITAPI && ma.wf(ba.tweaker);
                Y.splice(0, Y.length);
                Y.push({
                  n: 0,
                  offset: 0,
                });
                y.min.set(Infinity, Infinity, Infinity);
                y.max.set(-Infinity, -Infinity, -Infinity);
                "undefined" !== typeof Gb &&
                  "string" === typeof ba.faces &&
                  (ba.faces = Gb(ba.faces));
                "undefined" !== typeof Ta &&
                  ("string" === typeof ba.vertices &&
                    (ba.vertices = Ta(ba.vertices)),
                  ba.uvs &&
                    ba.uvs.length &&
                    ba.uvs.forEach(function (h, m) {
                      "string" === typeof h && (ba.uvs[m] = Ta(h));
                    }));
                ya = 0 < ba.uvs.length && 0 < ba.uvs[0].length;
                var A = ba.metadata.faces,
                  ka = 1 + (ya ? 1 : 0);
                A = (ba.faces.length - A) / (ba.metadata.faces * ka);
                (6 !== A && 8 !== A) || ya || ((ya = !0), ++ka, (A /= 2));
                if (4 === A) {
                  A = 6 * ka + 2;
                  for (
                    var Q = 4 * ka + 1,
                      sa = Array(ba.metadata.faces * A),
                      wa = 0;
                    wa < ba.metadata.faces;
                    ++wa
                  )
                    for (var za = 0; za < ka; ++za)
                      (sa[wa * A + 4 * za] = ba.faces[wa * Q + 5 * za]),
                        (sa[wa * A + 4 * za + 1] =
                          ba.faces[wa * Q + 5 * za + 1]),
                        (sa[wa * A + 4 * za + 2] =
                          ba.faces[wa * Q + 5 * za + 2]),
                        0 === za && (sa[wa * A + 3] = ba.faces[wa * Q + 4]),
                        (sa[wa * A + 4 * za + 3 * ka + 1] =
                          ba.faces[wa * Q + 5 * za]),
                        (sa[wa * A + 4 * za + 3 * ka + 2] =
                          ba.faces[wa * Q + 5 * za + 2]),
                        (sa[wa * A + 4 * za + 3 * ka + 3] =
                          ba.faces[wa * Q + 5 * za + 3]),
                        0 === za &&
                          (sa[wa * A + 3 * ka + 4] = ba.faces[wa * Q + 4]);
                  ba.faces = sa;
                  ba.metadata.faces *= 2;
                }
                P = Array(ba.metadata.vertices);
                for (A = 0; A < ba.metadata.vertices; ++A)
                  (P[A] = new Xa(
                    ba.vertices[3 * A],
                    ba.vertices[3 * A + 1],
                    ba.vertices[3 * A + 2]
                  )),
                    nc(y, P[A]);
                z = Array(ba.metadata.faces);
                ka = 3 * ka + 1;
                for (A = 0; A < ba.metadata.faces; ++A)
                  (z[A] = new Ec(
                    ba.faces[ka * A],
                    ba.faces[ka * A + 1],
                    ba.faces[ka * A + 2]
                  )),
                    (z[A].Eb = ba.faces[ka * A + 3]);
                S = 3 < P.length;
                Aa && (Aa.visible = S);
                Hc(P, z);
                F = Oc(P, z);
                if (ya) {
                  ka = Array(P.length);
                  A = ["a", "b", "c"];
                  for (Q = 0; Q < ba.metadata.faces; ++Q)
                    for (sa = 0; 3 > sa; ++sa)
                      if (
                        ((wa = ba.faces[7 * Q + sa]),
                        (za = ba.faces[7 * Q + 1 + sa + 3]),
                        "undefined" === typeof ka[wa])
                      )
                        ka[wa] = [[wa, za]];
                      else if (ka[wa][0][1] !== za) {
                        for (var Qa = -1, Mb = 1; Mb < ka[wa].length; ++Mb)
                          if (ka[wa][Mb][1] === za) {
                            Qa = ka[wa][Mb][0];
                            break;
                          }
                        Mb = -1;
                        -1 === Qa
                          ? ((Mb = P.length),
                            P.push(P[wa].clone()),
                            F.push(F[wa].clone()),
                            ka[wa].push([Mb, za]),
                            (ka[Mb] = [[Mb, za]]))
                          : (Mb = Qa);
                        ba.faces[7 * Q + sa] = Mb;
                        z[Q][A[sa]] = Mb;
                      }
                  H = Array(P.length);
                  for (A = 0; A < P.length; ++A)
                    (Q = ka[A][0][1]),
                      (H[A] = new Cb(ba.uvs[0][2 * Q], ba.uvs[0][2 * Q + 1]));
                }
                var a = Kb(y);
                f.lb &&
                  (P.forEach(function (h) {
                    h.x -= a.x;
                    h.z -= a.z;
                    h.y -= y.min.y;
                  }),
                  (y.min.x -= a.x),
                  (y.max.x -= a.x),
                  (y.min.z -= a.z),
                  (y.max.z -= a.z),
                  (y.max.y -= y.min.y),
                  (y.min.y = 0));
                if (f.mb) {
                  var c =
                    fa.Ei /
                    Math.max(
                      y.max.x - y.min.x,
                      y.max.y - y.min.y,
                      y.max.z - y.min.z
                    );
                  P.forEach(function (h) {
                    h.xa(c);
                  });
                  y.min.xa(c);
                  y.max.xa(c);
                }
                ka = ya ? 8 : 6;
                A = new Float32Array(P.length * ka);
                for (Q = 0; Q < P.length; ++Q)
                  (A[ka * Q] = P[Q].x),
                    (A[ka * Q + 1] = P[Q].y),
                    (A[ka * Q + 2] = P[Q].z),
                    (A[ka * Q + 3] = F[Q].x),
                    (A[ka * Q + 4] = F[Q].y),
                    (A[ka * Q + 5] = F[Q].z),
                    ya && ((A[ka * Q + 6] = H[Q].x), (A[ka * Q + 7] = H[Q].y));
                z.sort(function (h, m) {
                  return h.Eb - m.Eb;
                });
                var d = new (65536 > 3 * z.length ? Uint16Array : Uint32Array)(
                    3 * z.length
                  ),
                  e = 0;
                z.forEach(function (h, m) {
                  h.Eb === e
                    ? (Y[e].n += 3)
                    : (Y.push({
                        n: 3,
                        offset: 3 * m,
                      }),
                      ++e);
                  d[3 * m] = h.va;
                  d[3 * m + 1] = h.F;
                  d[3 * m + 2] = h.wa;
                });
                r && r.remove();
                r = pa.instance({
                  ba: A,
                  O: d,
                });
                p = D = !1;
                qa && Aa.Lf();
                Z = !0;
                Aa.Xd();
                f.M && (f.M(Aa), (f.M = null));
              }
            }

            function l(ba) {
              r.Da(ba.n, ba.offset);
            }

            function t(ba, A) {
              R[A] &&
                (L.set(R[A].Yj()),
                r.bind(!1),
                ya ? (L.Ia(), L.zh()) : (L.Pa(), L.Ah()),
                R[A].dc() && (L.kc(), D.Zb(!1), L.cd(), yc.ub()),
                R[A].nj(),
                R[A].Gc(),
                r.Da(ba.n, ba.offset));
            }

            function w(ba, A) {
              R[A] &&
                (L.set(R[A].Zj()),
                r.bind(!1),
                ya ? (L.Ia(), L.zh()) : (L.Pa(), L.Ah()),
                R[A].dc() && (L.kc(), D.Zb(!1), L.cd(), yc.ub()),
                Aa.ac(),
                R[A].Gc(),
                r.Da(ba.n, ba.offset));
            }

            function G(ba, A) {
              Ka && R[A] && (R[A].oj(), r.Da(ba.n, ba.offset));
            }

            function B(ba, A) {
              Ka && R[A] && (R[A].qj(ya), r.Da(ba.n, ba.offset));
            }

            function x(ba, A) {
              R[A] && (L.set(R[A].Uj()), R[A].Yf(), r.Da(ba.n, ba.offset));
            }

            function E(ba, A) {
              R[A] &&
                (L.set(R[A].Vj()), Aa.ac(), R[A].Yf(), r.Da(ba.n, ba.offset));
            }

            function O(ba, A) {
              R[A] &&
                (L.set(R[A].Wj()),
                R[A].dc() && (D.Zb(!1), L.cd(), yc.ub()),
                r.bind(!1),
                R[A].Vf(ya),
                r.Da(ba.n, ba.offset));
            }

            function C(ba, A) {
              if (R[A]) {
                var ka = R[A].Xj();
                L.set(ka);
                R[A].dc() && (D.Zb(!1), L.cd(), yc.ub(), r.bind(!1));
                b[ka] || (Aa.ac(), r.bind(!1), (b[ka] = !0));
                R[A].Vf(ya);
                r.Da(ba.n, ba.offset);
              }
            }
            if (!Ca.If()) return !1;
            void 0 === f.lb && (f.lb = !1);
            void 0 === f.mb && (f.mb = !1);
            void 0 === f.Ef && (f.Ef = !1);
            var P = null,
              z = null,
              F = null,
              H = null,
              r = null,
              X = null,
              D = null,
              p = !1,
              v = new tc(),
              y = new qc(),
              M = [],
              V = null,
              Y = [
                {
                  n: 0,
                  offset: 0,
                },
              ],
              ia = [],
              S = !1,
              Z = !1,
              aa = [],
              R = [],
              qa = !1,
              ya = !1,
              Ka = !1,
              Aa = {
                visible: S,
                Zi: function () {
                  return Y.length;
                },
                Lf: function () {
                  !p &&
                    ya &&
                    ((z = z.filter(function (ba) {
                      return null !== ba;
                    })),
                    (X = oc(P, F, H, z)),
                    (D = pa.instance({
                      ba: X,
                      O: !1,
                    })),
                    (H = F = z = P = X = null),
                    (p = !0));
                },
                ac: function () {
                  yc.R();
                  Aa.Xf();
                },
                Xf: function () {
                  L.lc("u116", v.elements);
                },
                fn: function () {
                  S && (Aa.Xf(), r.bind(!1), ya ? L.Ia() : L.Pa(), r.R());
                },
                yj: function (ba) {
                  S && (ba || Aa.ac(), r.bind(!1), ya ? L.Ia() : L.Pa(), r.R());
                },
                zj: function () {
                  S && (r.bind(!1), ya ? L.Ia() : L.Pa(), Y.forEach(G));
                },
                Uf: function () {
                  S && (r.bind(!1), ya ? L.Ia() : L.Pa(), ia.forEach(l));
                },
                wj: function (ba) {
                  Ka &&
                    S &&
                    (r.bind(!1),
                    ya ? L.Ia() : L.Pa(),
                    ba ? Y.forEach(x) : Y.forEach(E));
                },
                Fc: function (ba) {
                  S &&
                    (ba || Aa.ac(),
                    r.bind(!1),
                    ba || (L.Ia(), L.kc()),
                    Ka && Y.forEach(B));
                },
                Gc: function (ba) {
                  Ka && S && (ba ? Y.forEach(t) : Y.forEach(w));
                },
                sj: function () {
                  Ka && S && Y.forEach(C);
                },
                rj: function () {
                  Ka && S && Y.forEach(O);
                },
                qg: function () {
                  return V;
                },
                og: function () {
                  return aa;
                },
                mm: function (ba, A) {
                  R[ba].update(A);
                  Aa.Wh();
                },
                We: function (ba, A) {
                  function ka(wa, za) {
                    wa &&
                      ((wa.M = function () {
                        Aa &&
                          ++sa === Q &&
                          ((Ka = !0),
                          qa && Aa.tb(Aa.Lf, 5),
                          Aa.Xd(),
                          A &&
                            Aa.tb(function () {
                              A(Aa);
                            }, 10));
                      }),
                      (wa = sd.instance(wa)),
                      R[za] && R[za].H(),
                      (R[za] = wa),
                      (qa = qa || wa.dc()));
                  }
                  aa = ba;
                  Ka = !1;
                  var Q = ba.length,
                    sa = 0;
                  R = Array(Q);
                  qa = !1;
                  ba.forEach(function (wa, za) {
                    "string" === typeof wa
                      ? fc(
                          -1 === wa.indexOf(".json") ? wa + ".json" : wa,
                          function (Qa) {
                            Qa.name = wa;
                            ka(Qa, za, wa);
                          }
                        )
                      : ka(wa, za, !1);
                  });
                  Aa.tb(function () {
                    Aa.Wh();
                    Wa.hb();
                    Wa.md(!0);
                  }, 4);
                },
                Wh: function () {
                  ia.splice(0, ia.length);
                  Y.forEach(function (ba, A) {
                    R[A] && R[A].Bk() && ia.push(ba);
                  });
                },
                tb: function (ba, A) {
                  Z && Ka
                    ? ba(Aa)
                    : M.push({
                        ab: ba,
                        order: A ? A : 0,
                      });
                },
                Xd: function () {
                  Z &&
                    Ka &&
                    (M.sort(function (ba, A) {
                      return 0 > ba.order - A.order ? 1 : -1;
                    }),
                    M.forEach(function (ba) {
                      ba.ab(Aa);
                    }),
                    M.splice(0, M.length));
                },
                remove: function () {
                  Aa.H();
                  Aa = null;
                },
                H: function () {
                  r && r.remove();
                  R.forEach(function (ba) {
                    ba.H();
                  });
                  p && D.remove();
                },
                ak: function () {
                  return y.size().x;
                },
                bk: function () {
                  return y.size().y;
                },
                un: function () {
                  return y.size().z;
                },
                Kj: function () {
                  return Kb(y).x;
                },
                Lj: function () {
                  return Kb(y).y;
                },
                ln: function () {
                  return Kb(y).z;
                },
                rn: function () {
                  return y.min.y;
                },
                replace: function (ba, A, ka) {
                  if (ba === V) return A && Aa && (Aa.Xd(), A(Aa)), !1;
                  V = ba;
                  Wa.md(!1);
                  fc(
                    ba,
                    function (Q) {
                      n(Q);
                      A && A(Aa);
                    },
                    ka
                  );
                  return !0;
                },
              };
            f.fc && Aa.We(f.fc, f.Ef);
            V = f.url;
            fc(f.url, n);
            return Aa;
          },
          ol: function () {
            b.s87 = !1;
            b.s87color = !1;
            b.s87NormalMap = !1;
            b.s87ParamsMap = !1;
            b.s87NormalParamsMap = !1;
          },
        };
      })(),
      ld = (function () {
        var b = null,
          f = !1,
          n = !1,
          l = null,
          t = new Float32Array(16),
          w = new Float32Array(3),
          G = {
            data: 0,
          },
          B = {
            h: function () {
              b = fa.vb
                ? new Worker("js/worker.php")
                : {
                    postMessage: function (x) {
                      G.data = x;
                      md.ah(G);
                    },
                    terminate: function () {},
                  };
              b.onmessage = function (x) {
                switch (x.data[0]) {
                  case 3:
                    for (var E = 0; 16 > E; ++E) t[E] = x.data[E + 1];
                    for (E = 0; 3 > E; ++E) w[E] = x.data[E + 17];
                    yc.ge().Kl(t, w);
                    break;
                  case 6:
                    B.Gl(), (f = !0), Kc.Ub(!1), fa.Z && (Mc.enable(), Mc.dd());
                }
              };
              l = new Float32Array(6);
              l[0] = 2;
              fa.vb || md.Hl(b);
            },
            bm: function () {
              fa.Sf || (n = !0);
            },
            Yn: function () {
              n = !1;
            },
            vl: function (x, E) {
              if (E || (f && n))
                (l[1] = x[0]),
                  (l[2] = x[1]),
                  (l[3] = x[2]),
                  (l[4] = x[3]),
                  (l[5] = x[4]),
                  b.postMessage(l);
            },
            Gl: function () {
              b.postMessage([5, fa.Gf]);
            },
            H: function () {
              fa.vb && b.terminate();
            },
          };
        return B;
      })(),
      md = (function () {
        var b = 0,
          f = 0,
          n = 0,
          l = [0, 0],
          t = new tc(),
          w = new xb(),
          G = new xb(),
          B = new Xa(),
          x = new Xa(),
          E = new bc(),
          O = 0,
          C = new Float32Array(20);
        C[0] = 3;
        var P = !1,
          z = {
            data: !1,
          },
          F = {
            h: function () {
              "undefined" === typeof fa &&
                (self.Km = {
                  vb: !0,
                });
              fa.vb && ((onmessage = F.ah), F.Ne([6]));
            },
            ah: function (H) {
              switch (H.data[0]) {
                case 2:
                  F.Xe(H.data);
                  break;
                case 5:
                  O = H.data[1];
              }
            },
            Ne: function (H) {
              fa.vb ? postMessage(H) : ((z.data = H), P.onmessage(z));
            },
            Xe: function (H) {
              b = H[1];
              f = H[2];
              n = H[3];
              l[0] = H[4];
              l[1] = H[5];
              B.set(l[0], l[1], -n);
              E.set(f, b, 0, "XYZ");
              if (!1 === E instanceof bc)
                throw Error(
                  "JETHREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order."
                );
              H = Math.cos(E.l / 2);
              var r = Math.cos(E.m / 2),
                X = Math.cos(E.o / 2),
                D = Math.sin(E.l / 2),
                p = Math.sin(E.m / 2),
                v = Math.sin(E.o / 2),
                y = E.order;
              "XYZ" === y
                ? ((w.l = D * r * X + H * p * v),
                  (w.m = H * p * X - D * r * v),
                  (w.o = H * r * v + D * p * X),
                  (w.C = H * r * X - D * p * v))
                : "YXZ" === y
                ? ((w.l = D * r * X + H * p * v),
                  (w.m = H * p * X - D * r * v),
                  (w.o = H * r * v - D * p * X),
                  (w.C = H * r * X + D * p * v))
                : "ZXY" === y
                ? ((w.l = D * r * X - H * p * v),
                  (w.m = H * p * X + D * r * v),
                  (w.o = H * r * v + D * p * X),
                  (w.C = H * r * X - D * p * v))
                : "ZYX" === y
                ? ((w.l = D * r * X - H * p * v),
                  (w.m = H * p * X + D * r * v),
                  (w.o = H * r * v - D * p * X),
                  (w.C = H * r * X + D * p * v))
                : "YZX" === y
                ? ((w.l = D * r * X + H * p * v),
                  (w.m = H * p * X + D * r * v),
                  (w.o = H * r * v - D * p * X),
                  (w.C = H * r * X - D * p * v))
                : "XZY" === y &&
                  ((w.l = D * r * X - H * p * v),
                  (w.m = H * p * X - D * r * v),
                  (w.o = H * r * v + D * p * X),
                  (w.C = H * r * X + D * p * v));
              B.y -= O;
              H = t.elements;
              v = w.x;
              var M = w.y,
                V = w.z;
              D = w.w;
              var Y = v + v,
                ia = M + M;
              p = V + V;
              r = v * Y;
              X = v * ia;
              v *= p;
              y = M * ia;
              M *= p;
              V *= p;
              Y *= D;
              ia *= D;
              D *= p;
              H[0] = 1 - (y + V);
              H[4] = X - D;
              H[8] = v + ia;
              H[1] = X + D;
              H[5] = 1 - (r + V);
              H[9] = M - Y;
              H[2] = v - ia;
              H[6] = M + Y;
              H[10] = 1 - (r + y);
              H[3] = 0;
              H[7] = 0;
              H[11] = 0;
              H[12] = 0;
              H[13] = 0;
              H[14] = 0;
              H[15] = 1;
              t.setPosition(B);
              G.B(w).inverse();
              H = x.B(B);
              M = H.x;
              Y = H.y;
              V = H.z;
              r = G.x;
              X = G.y;
              D = G.z;
              p = G.w;
              v = p * M + X * V - D * Y;
              y = p * Y + D * M - r * V;
              ia = p * V + r * Y - X * M;
              M = -r * M - X * Y - D * V;
              H.x = v * p + M * -r + y * -D - ia * -X;
              H.y = y * p + M * -X + ia * -r - v * -D;
              H.z = ia * p + M * -D + v * -X - y * -r;
              for (H = 1; 17 > H; ++H) C[H] = t.elements[H - 1];
              C[17] = x.x;
              C[18] = x.y;
              C[19] = x.z;
              F.Ne(C);
            },
            Hl: function (H) {
              P = H;
              F.Ne([6]);
            },
          };
        return F;
      })();
    md.h();
    var sd = (function () {
        function b(G) {
          return "data:" === G.substring(0, 5)
            ? G
            : ("undefined" !== typeof K && K.X ? K : fa).X + fa.Pk + G;
        }

        function f(G, B) {
          return Math.min(B + G + B * G, 1);
        }
        var n = !1,
          l = null,
          t = 1,
          w = {
            diffuseTexture: null,
            normalTexture: null,
            paramsTexture: null,
            colorTextureUsage: 0,
            metalness: 0.5,
            roughness: 0.5,
            fresnelMin: 0,
            fresnelMax: 1,
            fresnelPow: 5,
            alpha: 1,
            diffuseColor: [255, 255, 255],
            paramsMapMask: [0, 0, 0, 0],
            M: null,
          };
        return {
          h: function () {
            l = ha.instance({
              width: 1,
              height: 1,
              isMipmap: !1,
              v: 4,
              array: new Uint8Array([255, 255, 255, 255]),
              Gg: !1,
            });
          },
          $d: function () {
            n = !0;
            t = 2;
          },
          instance: function (G) {
            function B(S) {
              function Z() {
                ++R === aa && S && S();
              }
              var aa = 1,
                R = 0;
              (E = z.normalTexture && Ca.Vi() ? !0 : !1) &&
                !r.Fa &&
                (++aa,
                (r.Fa = ha.instance({
                  url: b(z.normalTexture),
                  isLinear: !0,
                  isMipmap: !0,
                  Dg: Ca.Ak(),
                  isPot: !0,
                  v: 3,
                  M: Z,
                })));
              (O = z.diffuseTexture && "" !== z.diffuseTexture ? !0 : !1) &&
              !r.ca
                ? (++aa,
                  (r.ca = ha.instance({
                    url: b(z.diffuseTexture),
                    isMipmap: !0,
                    isLinear: !0,
                    isPot: !0,
                    Dg: !0,
                    Gg: !1,
                    cb: !1,
                    tk: !1,
                    v: 4,
                    M: Z,
                  })),
                  (H = "s92"))
                : ((H = "s93"), (r.ca = l));
              F = [
                z.diffuseColor[0] / 255,
                z.diffuseColor[1] / 255,
                z.diffuseColor[2] / 255,
              ];
              (X = z.paramsTexture ? !0 : !1) &&
                !r.fb &&
                (z.paramsTexture === z.diffuseTexture
                  ? (r.fb = r.ca)
                  : (++aa,
                    (r.fb = ha.instance({
                      url: b(z.paramsTexture),
                      isMipmap: !0,
                      isLinear: !0,
                      isPot: !0,
                      Dg: !0,
                      Gg: !1,
                      cb: !1,
                      tk: !1,
                      v: 4,
                      M: Z,
                    }))));
              Z();
            }

            function x(S) {
              "number" === typeof z.alpha
                ? ((C[0] = z.alpha), (C[1] = 0), (C[2] = 0), (C[3] = 0))
                : ((C[0] = z.alpha[0]),
                  (C[1] = z.alpha[1] - z.alpha[0]),
                  (C[2] = z.alpha[2]),
                  (C[3] = z.alpha[3]));
              var Z = 1 <= z.fresnelPow ? z.fresnelMin : z.fresnelMax;
              P[0] = f(C[0], Z);
              P[1] = f(C[1], Z);
              P[2] = C[2];
              P[3] = C[3];
              D = {
                eh: z.fresnelMax,
                Og: [z.fresnelMin, z.roughness, z.fresnelPow / 15, z.metalness],
                Rg: z.paramsMapMask,
              };
              S = z.M ? z.M.bind(null, S) : null;
              B(S);
              E || X || O
                ? E || X
                  ? E && !X
                    ? ((p = "s87NormalMap"), (v = "s87NNGLtextureNormalMap"))
                    : !E && X
                    ? ((p = "s87ParamsMap"), (v = "s87NNGLtextureParamsMap"))
                    : ((p = "s87NormalParamsMap"),
                      (v = "s87NNGLtextureNormalParamsMap"))
                  : ((p = "s87"), (v = "s87NNGLtexture"))
                : ((p = "s87color"), (v = "s87NNGLcolor"));
              y = E ? "s95" : "s94";
              M = E ? "s89" : "s99";
              V = X ? "s97" : "s96";
              Y = X ? "s90" : "s100";
            }
            var E,
              O,
              C = [1, 0, 0, 0],
              P = [0, 0, 0, 0],
              z = Object.assign({}, w, G),
              F = null,
              H = null,
              r = {
                ca: null,
                Fa: null,
                fb: null,
              },
              X = (E = O = !1),
              D = null,
              p = null,
              v = null,
              y = null,
              M = null,
              V = null,
              Y = null,
              ia = {
                update: function (S) {
                  Object.assign(z, S);
                  x();
                },
                dc: function () {
                  return E;
                },
                Bk: function () {
                  return 0.99 > C[0];
                },
                Zj: function () {
                  return M;
                },
                Yj: function () {
                  return y;
                },
                Vj: function () {
                  return Y;
                },
                Uj: function () {
                  return V;
                },
                Xj: function () {
                  return p;
                },
                Wj: function () {
                  return v;
                },
                Gc: function () {
                  E && r.Fa.b(0);
                },
                qj: function (S) {
                  n && L.set(H);
                  S ? L.Ia() : L.Pa();
                  O && L.kc();
                  ia.Fc();
                },
                Fc: function () {
                  O && (L.A("u55", z.colorTextureUsage), r.ca.b(0));
                  L.Hh("u126", F);
                },
                Yf: function () {
                  X && (r.fb.b(0), L.oa("u57", D.Rg), L.kc());
                  L.oa("u91", D.Og);
                  L.A("u127", D.eh);
                },
                Vf: function (S) {
                  X && !E
                    ? r.fb.b(t)
                    : E && (O || l.b(0), r.Fa.b(t), X && r.fb.b(t + 1));
                  X && L.oa("u57", D.Rg);
                  O || E ? L.Dl() : S ? L.El() : L.Fl();
                  ia.Fc();
                  L.oa("u6", C);
                  L.oa("u91", D.Og);
                  L.A("u127", D.eh);
                },
                nj: function () {
                  L.oa("u6", C);
                },
                oj: function () {
                  L.oa("u6", P);
                },
                H: function () {
                  O && r.ca.remove();
                  E && r.Fa.remove();
                  X && z.paramsTexture !== z.diffuseTexture && r.fb.remove();
                },
              };
            x(ia);
            return ia;
          },
        };
      })(),
      Mc = (function () {
        var b = 0,
          f = 0,
          n = 0,
          l = 0,
          t = 0,
          w = 0,
          G = fa.Ci,
          B = fa.Bi,
          x = fa.Di,
          E = 0,
          O = 0,
          C = null,
          P = null,
          z = 0,
          F = 0,
          H = 0,
          r = 0,
          X = 0,
          D = null,
          p = 0,
          v = 0,
          y = 0,
          M = Date.now(),
          V = !1,
          Y = !1,
          ia = !1,
          S = !1,
          Z = 1,
          aa = !1,
          R = {
            h: function () {
              b = fa.xi[Ca.V()];
              f = fa.wi[Ca.V()];
              n = fa.vi[Ca.V()];
              v = fa.yi[Ca.V()];
              l = fa.oi[Ca.V()];
              t = fa.ti[Ca.V()];
              H = fa.ui[Ca.V()];
              r = Ca.I();
              X = Ca.U();
              E = Math.round(r * b);
              O = Math.round(X * b);
              P = Za.instance({
                width: E,
                height: O,
                cc: !1,
              });
              C = ha.instance({
                width: E,
                height: O,
                isPot: !1,
                isLinear: !0,
              });
              D = ha.instance({
                width: E,
                height: O,
                isPot: !1,
                isLinear: !0,
                v: 1,
              });
              Y = !0;
            },
            resize: function (qa, ya, Ka) {
              Z = Ka;
              r = qa;
              X = ya;
              E = Math.round(qa * b);
              O = Math.round(ya * b);
              P.resize(E, O);
              ia = !0;
            },
            R: function () {
              var qa = Math.exp(-(Date.now() - M) / v);
              p = S ? y + (1 - qa) * (1 - y) : y * qa;
              z = f + p * (n - f);
              F = l + (1 - p) * (1 - l);
              w = t + (1 - p) * (1 - t);
              ha.W(5);
              if (ia && Y)
                ha.W(6),
                  D.resize(E, O),
                  L.set("s0"),
                  L.fd("u1", 6),
                  P.bind(!1, !0),
                  D.i(),
                  P.Md(),
                  C.b(6),
                  pa.g(!0, !0),
                  C.resize(E, O),
                  C.i(),
                  D.b(6),
                  pa.g(!1, !1),
                  L.fd("u1", 0),
                  (ia = !1);
              else {
                g.enable(g.BLEND);
                g.blendFunc(g.CONSTANT_ALPHA, g.ONE_MINUS_SRC_ALPHA);
                qa = z / H;
                g.blendColor(qa, qa, qa, qa);
                g.colorMask(!0, !1, !1, !0);
                L.set("s79");
                yc.Yd();
                L.A("u107", z);
                v && (L.A("u108", F), L.A("u100", w));
                var ya = Z * (G + Math.pow(Math.random(), x) * (B - G));
                L.P("u7", ya / r, ya / X);
                P.Cf();
                P.nc();
                C.i();
                ya = 2 * Math.PI * Math.random();
                for (var Ka = !0, Aa = 0; Aa < H; ++Aa)
                  1 === Aa &&
                    (g.blendFunc(g.SRC_ALPHA, g.ONE), L.A("u107", qa)),
                    L.A("u106", ya + (Aa / H) * (Math.PI / 2)),
                    L.P(
                      "u105",
                      (Math.random() - 0.5) / r,
                      (Math.random() - 0.5) / X
                    ),
                    pa.g(Ka, Ka),
                    (Ka = !1);
                g.disable(g.BLEND);
                L.set("s80");
                L.P("u7", 1 / E, 1 / O);
                D.i();
                C.b(7);
                pa.g(!1, !1);
                g.colorMask(!0, !0, !0, !0);
              }
            },
            b: function (qa) {
              D.b(qa);
            },
            enable: function () {
              aa = !0;
            },
            el: function () {
              if (S || !aa) return !1;
              V && clearTimeout(V);
              R.dd();
              V = setTimeout(R.Uh, 400);
            },
            dd: function () {
              V && (clearTimeout(V), (V = !1));
              !S &&
                aa &&
                (JESSMP.disable(), (S = !0), (M = Date.now()), (y = p));
            },
            Uh: function () {
              S &&
                aa &&
                (V && (clearTimeout(V), (V = !1)),
                JESSMP.enable(),
                (S = !1),
                (M = Date.now()),
                (y = p));
            },
            H: function () {
              C.remove();
              D.remove();
              P.remove();
            },
          };
        R.el();
        return R;
      })(),
      Kd = {
        instance: function (b) {
          var f = b.Ja.I(),
            n = b.wk ? !0 : !1,
            l = n ? "s62" : "s11",
            t = ha.instance({
              isFloat: b.Ja.Ig() && eb.$() && !n,
              L: b.Ja.Jg() && !n,
              isLinear: !0,
              isMipmap: !1,
              isPot: !1,
              width: f,
              height: f,
              v: n ? 4 : 3,
            }),
            w = ha.instance({
              isFloat: b.Ja.Ig() && eb.$(),
              L: b.Ja.Jg(),
              isPot: !0,
              width: 1,
              height: f / 2,
              v: 3,
            });
          w.i();
          L.set("s73");
          b.Ja.b(0);
          pa.g(!0, !0);
          var G = Math.round(Math.log(f) / Math.log(2));
          t.kl = function () {
            t.i();
            L.set(l);
            L.A("u72", fa.Hb);
            b.Ja.b(0);
            w.b(1);
            for (var B = 0, x = 0; x <= G; ++x) {
              var E = Math.pow(2, G - x),
                O = E / 2;
              g.viewport(0, B, f, O);
              L.P("u70", f / E, 1);
              L.A("u71", Math.min(6 / O, 0.6));
              B += E / 2;
              pa.g(0 === x, 0 === x);
            }
          };
          t.nl = t.remove;
          t.remove = function () {
            t.nl();
            w.remove();
          };
          return t;
        },
      };
    fb.ib = (function () {
      var b = {
          bd: 45,
          Qe: 1,
          Jb: "../../images/debug/picsou.png",
          Re: 0.8,
          ze: 3.14 / 6,
          Ae: 0.314,
          Be: 4,
          xe: 0.5,
          ye: -0.25,
          Fk: 1,
          ud: 256,
          we: 0.15,
        },
        f = null,
        n = null,
        l = null,
        t = !1,
        w = !1,
        G = -1,
        B = null,
        x = null,
        E = null,
        O = Math.PI / 180,
        C = {
          h: function (P) {
            G = P.width;
            P = {
              isFloat: eb.$(),
              L: !0,
              isPot: !1,
              isMipmap: !1,
              isLinear: !1,
              cb: !0,
              width: G,
              height: G / 2,
              v: 3,
            };
            f = ha.instance(P);
            n = ha.instance(P);
            L.f("s101", [
              {
                type: "1i",
                name: "u134",
                value: 0,
              },
            ]);
            L.f("s102", [
              {
                type: "1i",
                name: "u139",
                value: 0,
              },
            ]);
            C.nm();
          },
          nm: function () {
            L.f("s102", [
              {
                type: "1f",
                name: "u140",
                value: b.ze,
              },
              {
                type: "1f",
                name: "u141",
                value: b.Ae,
              },
              {
                type: "1f",
                name: "u142",
                value: b.Be,
              },
              {
                type: "1f",
                name: "u143",
                value: b.xe,
              },
              {
                type: "1f",
                name: "u144",
                value: b.ye,
              },
            ]);
          },
          Bn: function () {
            return w;
          },
          ja: function (P) {
            B = P;
          },
          ic: function () {
            x =
              "uniform sampler2D u134;uniform vec2 u135,u136,u4;uniform int u137;uniform float u138,u120;varying vec2 vv0;const float h=3.141593;const vec2 i=vec2(.5,.5);const float e=1.2;const vec3 g=vec3(1.,1.,1.);void main(){vec2 c=vec2(vv0.x*2.,-vv0.y+.5)*h,a=i+u4*(c-u135)/u136;float b=1.;if(u137==0){if(a.x<0.||a.x>1.||a.y<0.||a.y>1.)discard;}else b*=smoothstep(-e,0.,a.x),b*=1.-smoothstep(1.,1.+e,a.x),b*=smoothstep(-e,0.,a.y),b*=1.-smoothstep(1.,1.+e,a.y);vec3 d=mix(u138*g,texture2D(u134,a).rgb*u120,b*g);gl_FragColor=vec4(d,1.);}";
            E =
              "uniform sampler2D u139;uniform float u140,u141,u142,u143,u144;varying vec2 vv0;const float f=3.141593;const vec2 o=vec2(.5,.5);const vec3 h=vec3(1.,1.,1.);void main(){float i=(vv0.x*2.-1.)*f,c=(-vv0.y+.5)*f;vec4 a=texture2D(u139,vec2(.5,.5));float d=a.r,j=u142*a.g,k=u143*(a.b+u144),b=a.a,g=asin(cos(b)*cos(d)),l=atan(cos(b)*sin(d),-sin(b)),m=acos(sin(c)*sin(g)+cos(c)*cos(g)*cos(i-l)),n=1.-smoothstep(u140-u141,u140+u141,m);gl_FragColor=vec4(h*(max(k,0.)+max(j,0.)*n),1.);}";
            L.ia("s101", {
              name: "_",
              a: x,
              c: "u134 u135 u137 u136 u138 u120 u4".split(" "),
              precision: "highp",
            });
            L.ia("s102", {
              name: "_",
              a: E,
              c: "u139 u140 u141 u142 u143 u144".split(" "),
              precision: "highp",
            });
          },
          bf: function (P, z, F, H, r, X, D, p) {
            L.P("u135", z, F);
            L.fd("u137", H ? 1 : 0);
            L.P("u136", r, r / X);
            L.Gh("u4", p);
            D && P.b(0);
            pa.g(!1, !1);
          },
          ii: function (P) {
            g.viewport(0, 0, b.ud, b.ud / 2);
            L.set("s102");
            P.b(0);
            pa.g(!1, !1);
          },
          dk: function () {
            return f;
          },
          Qi: function (P) {
            C.h({
              width: b.ud,
            });
            C.Xh(P, !1, 1);
            w = !0;
          },
          Pi: function () {
            (t && l.ek() === b.Jb) ||
              ((t = !1),
              (l = ha.instance({
                url: b.Jb,
                isFloat: !1,
                M: function () {
                  t = !0;
                },
              })));
          },
          Xe: function (P) {
            for (var z in P) b[z] = P[z];
          },
          Xh: function (P, z, F) {
            var H = b.ud;
            Za.fa();
            n.N();
            L.set("s0");
            f.b(0);
            pa.g(!0, !0);
            ha.W(0);
            f.i();
            L.set("s101");
            L.A("u138", b.we);
            L.A("u120", b.Fk);
            C.bf(P, Math.PI, 0, !0, 90 * O, P.I() / P.U(), !0, [1, 1]);
            t &&
              (L.A("u120", b.Re),
              g.viewport(0, 0, H / 2, H / 2),
              C.bf(l, 0, 0, !1, 2 * b.bd * O, 2 * b.Qe, !0, [1, 1]),
              g.viewport(H / 2, 0, H / 2, H / 2),
              C.bf(l, 2 * Math.PI, 0, !1, 2 * b.bd * O, 2 * b.Qe, !1, [1, 1]));
            g.enable(g.BLEND);
            g.blendFunc(g.ONE, g.ONE);
            z && C.ii(z);
            L.set("s0");
            g.blendColor(0, 0, 0, 1 - F);
            g.blendFunc(g.CONSTANT_ALPHA, g.ONE_MINUS_CONSTANT_ALPHA);
            n.b(0);
            pa.g(!1, !1);
            g.disable(g.BLEND);
            B.Ch(f);
          },
        };
      return C;
    })();
    fb.Xa = (function () {
      var b = !1,
        f = !0,
        n = !1,
        l = !1,
        t = {
          ic: function () {
            Ca.T() &&
              (L.ia("s103", {
                name: "_",
                j:
                  "attribute vec3 a0;uniform sampler2D u33;uniform vec2 u34;uniform vec3 u122;const float j=1.,k=0.,l=0.,x=1.;const vec2 e=vec2(1.,1.);const vec3 m=vec3(1.,1.,1.);const vec2 y=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 n(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*m;vec2 o=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 p=n(f);vec3 q=mix(u122,u65,a);float r=mix(j,u68,u67);vec3 s=mix(u60,u66,a);float t=mix(u63,1.,u67);vec2 g=u62/o;vec3 h=a0;float u=max(0.,-a0.z-k)*l;h.x+=u*sign(a0.x)*(1.-u67);vec3 i=p*(h+q)*r+s;i.x+=u59*sin(f.y);vec2 v=g*t;vec3 w=vec3(d*v,-g)+i*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(w,1.));}",
                a:
                  "void main(){gl_FragData[0]=vec4(0.,0.,0.,0.),gl_FragData[1]=vec4(0.,0.,1.,1.),gl_FragData[2]=vec4(1.,0.,0.,0.),gl_FragData[3]=vec4(0.,.5,1.,0.);}",
                c: ["u33", "u34", "u60", "u122"].concat(L.je(), L.ke()),
                D: ["a0"],
                K: [3],
                aa: !0,
              }),
              (b = !0));
          },
          h: function (w) {
            b &&
              L.f(
                "s103",
                [
                  {
                    type: "1i",
                    name: "u33",
                    value: 1,
                  },
                  {
                    type: "3f",
                    name: "u60",
                    value: w.ya,
                  },
                  {
                    type: "1f",
                    name: "u61",
                    value: 0,
                  },
                  {
                    type: "1f",
                    name: "u69",
                    value: 1,
                  },
                ].concat(w.jf)
              );
          },
          Sa: function (w) {
            l = w;
            n && t.wg();
          },
          Ra: function (w) {
            n = w;
            l && t.wg();
          },
          wg: function () {
            Ca.T() &&
              (L.f("s103", [
                {
                  type: "3f",
                  name: "u122",
                  value: [n[0] * l, n[1] * l, n[2] * l],
                },
              ]),
              L.G());
          },
          pk: function (w) {
            for (
              var G = w.width / 2,
                B = w.height / 2,
                x = w.depth,
                E = w.Bj,
                O = w.height / 4,
                C = w.cj,
                P = 2 * C + 4,
                z = [],
                F = [],
                H = -G + w.La,
                r = -E - w.La,
                X = G - w.La,
                D = -E - w.La,
                p = 0;
              p < P;
              ++p
            ) {
              var v = 0,
                y = 0;
              0 === p
                ? ((v = -G), (y = -E - x))
                : 1 <= p && p <= 1 + C
                ? ((y = (((p - 1) / C) * Math.PI) / 2),
                  (v = H - Math.cos(y) * w.La),
                  (y = r + Math.sin(y) * w.La))
                : p >= 2 + C && p <= 2 + 2 * C
                ? ((y = (((p - 2 - C) / C) * Math.PI) / 2),
                  (v = X + Math.sin(y) * w.La),
                  (y = D + Math.cos(y) * w.La))
                : p === P - 1 && ((v = G), (y = -E - x));
              z.push(v, B + O, y, v, -B + O, y);
              0 !== p &&
                F.push(
                  2 * p,
                  2 * p - 2,
                  2 * p - 1,
                  2 * p,
                  2 * p - 1,
                  2 * p + 1
                );
            }
            return t.instance({
              ba: z,
              O: F,
            });
          },
          toggle: function (w) {
            f = w;
          },
          instance: function (w) {
            var G = pa.instance({
              ba: w.ba,
              O: w.O,
            });
            return {
              R: function () {
                b && f && (L.set("s103"), G.bind(!0), G.R());
              },
            };
          },
        };
      return t;
    })();
    fb.la = (function () {
      var b = {
        me: -87,
        ik: [85, 95],
        vg: [90, 90],
        ug: [85, 70],
        Ac: 24,
        dj: 12,
        ej: 2,
        Oe: [-80, 10],
        tg: [40, 140],
        Nc: [1, 8],
        hk: 80,
        Zg: [-120, -10],
        Zk: 2,
        jd: [0, -15],
        td: 1024,
        Ua: 256,
        Vc: 4,
        $l: [6, 30],
        Yg: 1.2,
      };
      b.jh = b.Oe;
      var f = !1,
        n = !1,
        l = !1,
        t = null,
        w = null,
        G = null,
        B = null,
        x = null,
        E = null,
        O = !1,
        C = !1,
        P = null,
        z = null,
        F = null,
        H = null,
        r = 0.5,
        X = [
          {
            type: "1f",
            name: "u146",
            value: 1,
          },
        ],
        D = null,
        p = null,
        v = null,
        y = null,
        M = null,
        V = {
          $j: function () {
            return {
              name: "_",
              j:
                "attribute vec3 a0,a2;attribute vec2 a1;varying vec2 vv0;varying float vv1;uniform sampler2D u33;uniform vec2 u34;uniform float u123;uniform vec3 u122;const float m=0.,n=0.;const vec2 e=vec2(1.,1.);const vec3 o=vec3(1.,1.,1.);const vec2 z=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 p(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*o;vec2 q=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 g=p(f);vec3 r=mix(u122,u65,a);float s=mix(u123,u68,u67);vec3 t=mix(u60,u66,a);float u=mix(u63,1.,u67);vec2 h=u62/q;vec3 i=a0;float v=max(0.,-a0.z-m)*n;i.x+=v*sign(a0.x)*(1.-u67);vec3 j=g*(i+r)*s+t;j.x+=u59*sin(f.y);vec2 w=h*u;vec3 x=vec3(d*w,-h)+j*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(x,1.)),vv0=a1,gl_Position*=vec4(-1.,1.,1.,1.);vec3 y=g*a2;vv1=-y.z;}",
              a:
                "uniform sampler2D u153,u139;uniform vec2 u70,u154;uniform float u155,u146;varying vec2 vv0;varying float vv1;void main(){vec2 b=u154*u155+u70*vv0;vec4 a=u146*texture2D(u153,b);a.r*=step(0.,vv0.y),gl_FragColor=vec4(0.,0.,0.,a.r*vv1);}",
              c: "u33 u153 u139 u34 u60 u155 u154 u123 u122 u70 u146"
                .split(" ")
                .concat(L.je())
                .concat(L.ke()),
              D: ["a0", "a2", "a1"],
              K: [3, 3, 2],
              precision: "lowp",
            };
          },
          ic: function () {
            L.ia("s104", {
              name: "_",
              j:
                "attribute vec3 a0;uniform vec3 u122;uniform vec2 u147,u148;uniform float u123,u149,u150,u151;varying float vv0,vv1;void main(){vec3 a=(a0+u122)*u123;float b=atan(a.x,a.z-u149),d=2.*(a.y-u150)/(u151-u150)-1.;vv0=a0.y;float g=1.-u147.x*u147.x/(u147.y*u147.y),c=u147.x/sqrt(1.-g*pow(cos(b),2.));vec3 h=vec3(c*sin(b),a.y,c*cos(b)+u149);vv1=smoothstep(u148.x,u148.y,length(h-a)),gl_Position=vec4(b,d,0.,1.);}",
              a:
                "uniform float u152;uniform vec4 u6;varying float vv0,vv1;void main(){float a=u6.x+u6.y*smoothstep(-u6.w,-u6.z,vv0),b=min(a,1.)*u152;gl_FragColor=vec4(b,vv1,1.,1.);}",
              c: "u123 u122 u147 u148 u149 u150 u151 u6 u152".split(" "),
              D: ["a0"],
              K: [3],
              precision: "highp",
            });
            L.ia("s105", V.$j());
            L.ia("s106", {
              name: "_",
              a:
                "uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u1,vv0-3.*u7),c=texture2D(u1,vv0-2.*u7),d=texture2D(u1,vv0-u7),f=texture2D(u1,vv0+u7),g=texture2D(u1,vv0+2.*u7),h=texture2D(u1,vv0+3.*u7);float j=.031496*b.r+.110236*c.r+.220472*d.r+.275591*a.r+.220472*f.r+.110236*g.r+.031496*h.r;vec2 i=b.gb*b.b+c.gb*c.b+d.gb*d.b+a.gb*a.b+f.gb*f.b+g.gb*g.b+h.gb*h.b;i/=b.b+c.b+d.b+a.b+f.b+g.b+h.b,gl_FragColor=vec4(mix(j,a.r,1.-i.x),i,1);}",
              c: ["u1", "u7"],
              precision: "lowp",
            });
            f = !0;
          },
          h: function (Y) {
            if (f) {
              if (void 0 === Y.Pb || !Y.Pb) return !1;
              if (n) V.yh(Y);
              else {
                B = ha.instance({
                  isFloat: !1,
                  isPot: !1,
                  isMipmap: !1,
                  isLinear: !0,
                  width: b.td,
                  height: b.td / 4,
                  v: 4,
                });
                var ia = b.Ua / 4,
                  S = {
                    isFloat: !1,
                    isPot: !1,
                    isMipmap: !1,
                    isLinear: !1,
                    width: b.Ua,
                    height: ia,
                    v: 4,
                  };
                G = ha.instance(S);
                E = ha.instance(S);
                x = ha.instance({
                  isFloat: !1,
                  isPot: !1,
                  isMipmap: !1,
                  isLinear: !0,
                  width: b.Ua,
                  height: ia * b.Vc,
                  v: 4,
                });
                ia = 0.5 - 0.5 / Y.Qb[1];
                S = 0.5 + 0.5 / Y.Qb[1];
                for (
                  var Z = b.dj + 1,
                    aa = [],
                    R = [],
                    qa = new Float32Array(16 * b.Ac),
                    ya = new Uint16Array(6 * (b.Ac - 1)),
                    Ka = 0,
                    Aa = 0,
                    ba = 0,
                    A = 0;
                  A < b.Ac;
                  ++A
                ) {
                  var ka = (2 * A) / (b.Ac - 1) - 1;
                  ka = Math.sign(ka) * Math.pow(Math.abs(ka), b.ej);
                  ka = (Math.PI * (ka + 1)) / 2 - Math.PI / 2;
                  var Q = Math.sin(ka),
                    sa = Math.cos(ka),
                    wa = Math.sin(ka * b.Yg),
                    za = Math.cos(ka * b.Yg),
                    Qa = ka / (Math.PI * Y.Qb[0]) + 0.5,
                    Mb = b.ug[0] * Q,
                    a = b.jh[0],
                    c = b.ug[1] * sa + b.me,
                    d = Qa,
                    e = ia,
                    h = b.vg[0] * Q,
                    m = b.jh[1],
                    q = b.vg[1] * sa + b.me,
                    I = S,
                    J = 16 * A;
                  qa[J] = h;
                  qa[J + 1] = m;
                  qa[J + 2] = q;
                  qa[J + 3] = wa;
                  qa[J + 4] = 0;
                  qa[J + 5] = za;
                  qa[J + 6] = Qa;
                  qa[J + 7] = I;
                  qa[J + 8] = Mb;
                  qa[J + 9] = a;
                  qa[J + 10] = c;
                  qa[J + 11] = wa;
                  qa[J + 12] = 0;
                  qa[J + 13] = za;
                  qa[J + 14] = d;
                  qa[J + 15] = e;
                  0 !== A &&
                    ((d = 2 * A),
                    (e = 6 * (A - 1)),
                    (ya[e] = d),
                    (ya[e + 1] = d - 1),
                    (ya[e + 2] = d - 2),
                    (ya[e + 3] = d),
                    (ya[e + 4] = d + 1),
                    (ya[e + 5] = d - 1));
                  e = Math.pow(
                    0.5 *
                      (1 +
                        Math.cos(
                          Math.min(
                            Math.max((Math.PI / b.tg[0]) * Mb, -Math.PI),
                            Math.PI
                          )
                        )),
                    b.Zk
                  );
                  a -= b.hk * e;
                  d = b.tg[1] * e;
                  Mb -= Q * b.Nc[0];
                  c -= sa * b.Nc[1];
                  h -= Q * b.Nc[0];
                  q -= sa * b.Nc[1];
                  Q = 0.001 > e ? 2 : Z;
                  for (sa = 0; sa < Q; ++sa)
                    (e = sa / (Q - 1)),
                      (Qa = a * (1 - e) + m * e),
                      (I = b.Zg[0]),
                      (I = Math.min(Math.max((Qa - I) / (b.Zg[1] - I), 0), 1)),
                      (I = I * I * (3 - 2 * I)),
                      aa.push(
                        Mb * (1 - e) + h * e,
                        Qa,
                        (c +
                          d * Math.exp(400 * -Math.abs(ka) * Math.pow(e, 4))) *
                          (1 - I) +
                          q * I,
                        wa,
                        0,
                        za,
                        0,
                        0
                      );
                  ka = 0 === A ? 0 : 2 < Q && 2 < Aa ? Q - 1 : 1;
                  for (wa = 1; wa <= ka; ++wa)
                    (za = Q > Aa ? Q - 2 : 0),
                      R.push(
                        Ka + wa + za,
                        Ka + wa - 1,
                        ba + wa - 1,
                        ba + wa - 1,
                        ba + wa + (Q < Aa ? Aa - 2 : 0),
                        Ka + wa + za
                      );
                  Aa = Q;
                  ba = Ka;
                  Ka += Q;
                }
                y = pa.instance({
                  ba: new Float32Array(aa),
                  O: new Uint16Array(R),
                });
                M = pa.instance({
                  ba: qa,
                  O: ya,
                });
                V.yh(Y);
                L.f("s106", [
                  {
                    type: "1i",
                    name: "u1",
                    value: 0,
                  },
                ]);
                n = !0;
              }
            }
          },
          yh: function (Y) {
            r = Y.Vl;
            H = Y.kd;
            D = [
              {
                type: "1i",
                name: "u33",
                value: 1,
              },
              {
                type: "1i",
                name: "u153",
                value: 0,
              },
              {
                type: "1i",
                name: "u139",
                value: 2,
              },
              {
                type: "3f",
                name: "u60",
                value: [Y.ya[0], Y.ya[1] - b.jd[0], Y.ya[2] + b.jd[1]],
              },
              {
                type: "1f",
                name: "u155",
                value: Y.Wl,
              },
              {
                type: "2f",
                name: "u70",
                value: [1, 1 / b.Vc],
              },
              {
                type: "2f",
                name: "u154",
                value: [0, 1 / b.Vc],
              },
              {
                type: "1f",
                name: "u146",
                value: 1,
              },
            ].concat(Y.jf, Y.Th);
            L.f("s105", D);
          },
          Mb: function (Y) {
            t = Y;
          },
          Ve: function (Y) {
            p = Y;
            p.tb(V.zc);
          },
          zc: function () {
            if (!(l || (C && O))) return !1;
            g.viewport(0, 0, b.td, b.td / 4);
            Za.fa();
            B.i();
            g.clearColor(0, 0, 0, 0);
            g.clear(g.COLOR_BUFFER_BIT);
            L.f("s104", [
              {
                type: "1f",
                name: "u149",
                value: b.me,
              },
              {
                type: "1f",
                name: "u150",
                value: b.Oe[0],
              },
              {
                type: "1f",
                name: "u151",
                value: b.Oe[1],
              },
              {
                type: "3f",
                name: "u122",
                value: [P[0] + z[0], P[1] + z[1], P[2] + z[2]],
              },
              {
                type: "1f",
                name: "u152",
                value: r,
              },
              {
                type: "2f",
                name: "u147",
                value: b.ik,
              },
              {
                type: "2f",
                name: "u148",
                value: b.$l,
              },
            ]);
            p.zj();
            L.set("s1");
            var Y = b.Ua / 4;
            g.viewport(0, 0, b.Ua, Y);
            G.i();
            B.b(0);
            B.Ic();
            pa.g(!0, !0);
            for (var ia = 0; ia < b.Vc; ++ia)
              L.set("s106"),
                0 !== ia && g.viewport(0, 0, b.Ua, Y),
                E.i(),
                G.b(0),
                L.P("u7", 1 / b.Ua, 0),
                pa.g(!1, !1),
                G.i(),
                E.b(0),
                L.P("u7", 0, 1 / Y),
                pa.g(!1, !1),
                b.fj && g.colorMask(0 === ia, 1 === ia, 2 === ia, !0),
                L.set("s1"),
                x.i(),
                G.b(0),
                g.viewport(0, ia * Y, b.Ua, Y),
                pa.g(!1, !1),
                b.fj && g.colorMask(!0, !0, !0, !0);
            return (l = !0);
          },
          R: function () {
            v.bind(!1, !1);
            w.i();
            g.clearColor(0, 0, 0, 0);
            g.enable(g.DEPTH_TEST);
            g.depthMask(!0);
            g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT);
            L.set("s105");
            t.b(1);
            x.b(0);
            y.bind(!0);
            y.R();
            M.bind(!0);
            M.R();
            g.disable(g.DEPTH_TEST);
            g.depthMask(!1);
          },
          add: function () {
            g.enable(g.BLEND);
            g.blendFunc(g.ONE, g.ONE_MINUS_SRC_ALPHA);
            w.b(0);
            pa.g(!1, !1);
            g.disable(g.BLEND);
          },
          Te: function (Y, ia) {
            v = Za.instance({
              width: Y,
              height: ia,
              cc: !0,
            });
            w = ha.instance({
              width: Y,
              height: ia,
              isFloat: !1,
              isPot: !1,
            });
          },
          Ra: function (Y, ia, S) {
            Y || ((Y = P), (ia = z), (S = F));
            L.f("s105", [
              {
                type: "3f",
                name: "u122",
                value: [
                  S[0] + H[0],
                  S[1] + H[1] - b.jd[0],
                  S[2] + H[2] + b.jd[1],
                ],
              },
            ]);
            P = Y;
            z = ia;
            F = S;
            C = !0;
            !l && O && V.zc();
            L.G();
          },
          Sa: function (Y, ia) {
            L.f("s104", [
              {
                type: "1f",
                name: "u123",
                value: Y,
              },
            ]);
            L.f("s105", [
              {
                type: "1f",
                name: "u123",
                value: ia,
              },
            ]);
            O = !0;
            !l && C && V.zc();
            L.G();
          },
          Kb: function (Y) {
            L.f("s105", [
              {
                type: "1f",
                name: "u61",
                value: Y,
              },
            ]);
            L.G();
          },
          hb: function () {
            V.zc();
          },
          Ye: function (Y, ia) {
            X[0].value = 1 - Y;
            L.f("s105", X);
            L.f("s105", ia);
          },
          H: function () {},
        };
      return V;
    })();
    fb.pa = (function () {
      var b = !1,
        f = null,
        n = 0,
        l = 0,
        t = 0,
        w = [
          {
            type: "1f",
            name: "u146",
            value: 1,
          },
        ],
        G = null,
        B = null,
        x = null,
        E = {
          ic: function () {
            L.ia("s107", {
              name: "_",
              j:
                "attribute vec3 a0;uniform vec2 u156,u157;varying vec2 vv0;void main(){vec2 a=2.*(a0.xy-u157)/u156;gl_Position=vec4(a,0.,1.),vv0=a0.xy;}",
              a:
                "uniform vec2 u158;uniform float u159,u160,u161;varying vec2 vv0;void main(){vec2 b=vec2(sign(vv0.x)*.5*u159,u160),a=vv0-b,c=u161*a,d=(c-a)*u158;gl_FragColor=vec4(d,0.,1.);}",
              c: "u156 u157 u159 u160 u161 u158".split(" "),
              D: ["a0"],
              K: [3],
              precision: "highp",
            });
            L.ia("s108", {
              name: "_",
              j:
                "attribute vec3 a0;varying vec2 vv0,vv1;uniform sampler2D u33;uniform vec3 u122;uniform vec2 u34,u156,u157;uniform float u123;const float l=0.,m=0.;const vec2 e=vec2(1.,1.);const vec3 n=vec3(1.,1.,1.);const vec2 y=vec2(-1.,1.);uniform mat4 u58;uniform vec3 u60,u64,u65,u66;uniform float u59,u67,u68,u61,u62,u63,u69;mat3 o(vec3 c){vec3 b=cos(c),a=sin(c);return mat3(b.y*b.z,a.z,a.y*b.z,b.y*a.z*b.x-a.x*a.y,-b.z*b.x,a.y*a.z*b.x+b.y*a.x,b.y*a.z*a.x+a.y*b.x,-a.x*b.z,a.y*a.z*a.x-b.y*b.x);}void main(){vec4 b=texture2D(u33,vec2(.25,.5));vec2 c=u67*e;vec3 a=u67*n;vec2 p=mix(b.a*u34,e,c),d=(2.*b.gb-e)*(1.-c);d.x*=-1.;vec3 f=mix(texture2D(u33,vec2(.75,.5)).rgb+vec3(u61,0.,0.),u64,a);mat3 q=o(f);vec3 r=mix(u122,u65,a);float s=mix(u123,u68,u67);vec3 t=mix(u60,u66,a);float u=mix(u63,1.,u67);vec2 g=u62/p;vec3 h=a0;float v=max(0.,-a0.z-l)*m;h.x+=v*sign(a0.x)*(1.-u67);vec3 i=q*(h+r)*s+t;i.x+=u59*sin(f.y);vec2 w=g*u;vec3 x=vec3(d*w,-g)+i*vec3(1.,-1.,-1.);gl_Position=u58*(vec4(u69*e,e)*vec4(x,1.)),gl_Position*=vec4(-1.,1.,1.,1.),vv0=vec2(.5,.5)+(a0.xy-u157)/u156,vv1=vec2(.5,.5)+.5*gl_Position.xy/gl_Position.w;}",
              a:
                "uniform sampler2D u162,u163;uniform float u146;varying vec2 vv0,vv1;void main(){vec2 a=u146*texture2D(u162,vv0).rg;gl_FragColor=texture2D(u163,a+vv1);}",
              c: "u146 u33 u162 u163 u156 u157 u34 u60 u123 u122"
                .split(" ")
                .concat(L.je(), L.ke()),
              D: ["a0"],
              K: [3],
              precision: "lowp",
            });
            b = !0;
          },
          h: function (O) {
            if (b) {
              if (void 0 === O.Pb || !O.Bc) return !1;
              B = ha.instance({
                isFloat: !0,
                isPot: !1,
                isMipmap: !1,
                isLinear: !1,
                width: 256,
                height: 128,
                v: 4,
              });
              x = Za.instance({
                width: 256,
                height: 128,
              });
              L.f(
                "s108",
                [
                  {
                    type: "1i",
                    name: "u33",
                    value: 1,
                  },
                  {
                    type: "1i",
                    name: "u162",
                    value: 2,
                  },
                  {
                    type: "1i",
                    name: "u163",
                    value: 0,
                  },
                  {
                    type: "3f",
                    name: "u60",
                    value: O.ya,
                  },
                  {
                    type: "1f",
                    name: "u146",
                    value: 1,
                  },
                ].concat(O.Th, O.jf)
              );
              l = O.Rd;
              t = O.Qd;
              n = O.Sd;
            }
          },
          Mb: function (O) {
            f = O;
          },
          Ve: function (O) {
            G = O;
            G.tb(E.Nd);
          },
          Nd: function () {
            g.viewport(0, 0, 256, 128);
            x.i();
            B.i();
            var O = G.ak(),
              C = G.bk(),
              P = [
                {
                  type: "2f",
                  name: "u156",
                  value: [O, C],
                },
                {
                  type: "2f",
                  name: "u157",
                  value: [G.Kj(), G.Lj()],
                },
              ];
            L.f(
              "s107",
              P.concat([
                {
                  type: "1f",
                  name: "u159",
                  value: l,
                },
                {
                  type: "1f",
                  name: "u160",
                  value: t,
                },
                {
                  type: "1f",
                  name: "u161",
                  value: n,
                },
                {
                  type: "2f",
                  name: "u158",
                  value: [1 / O, -1 / C],
                },
              ])
            );
            G.Uf();
            L.f("s108", P);
          },
          R: function () {
            L.set("s108");
            f.b(1);
            B.b(2);
            G.Uf();
          },
          Ra: function (O) {
            L.f("s108", [
              {
                type: "3f",
                name: "u122",
                value: O,
              },
            ]);
            L.G();
          },
          Sa: function (O) {
            L.f("s108", [
              {
                type: "1f",
                name: "u123",
                value: O,
              },
            ]);
            L.G();
          },
          Kb: function (O) {
            L.f("s108", [
              {
                type: "1f",
                name: "u61",
                value: O,
              },
            ]);
            L.G();
          },
          Ul: function (O) {
            n = O;
            E.Nd();
            L.G();
            Wa.animate(Date.now());
          },
          hb: function () {
            E.Nd();
          },
          Ye: function (O, C) {
            w.u146 = 1 - O;
            L.f("s108", w);
            L.f("s108", C);
          },
          H: function () {},
        };
      return E;
    })();
    fb.Vb = (function () {
      var b = [0, -0.5],
        f = !1,
        n = !1,
        l = null,
        t = null,
        w = null,
        G = null,
        B = null,
        x = -1,
        E = -1;
      return {
        ic: function () {
          L.ia("s109", {
            name: "_",
            j:
              "attribute vec2 a0;uniform sampler2D u33;uniform vec2 u34,u164;uniform float u4;varying vec2 vv0;const vec2 f=vec2(1.,1.);void main(){vec4 a=texture2D(u33,vec2(.25,.5));vec2 b=a.a*u34,c=2.*a.gb-f,d=u164+a0*u4;gl_Position=vec4(c+b*d,0.,1.),vv0=vec2(.5,.5)+.5*a0;}",
            a:
              "uniform sampler2D u165;varying vec2 vv0;void main(){gl_FragColor=texture2D(u165,vv0);}",
            c: ["u33", "u165", "u34", "u164", "u4"],
            precision: "lowp",
          });
          L.ia("s110", {
            name: "_",
            a:
              "uniform sampler2D u2,u166,u167;varying vec2 vv0;const vec3 f=vec3(1.,1.,1.);void main(){float a=texture2D(u2,vv0).r;vec3 b=texture2D(u167,vv0).rgb,c=texture2D(u166,vv0).rgb;gl_FragColor=vec4(mix(b,c,a*f),1.);}",
            c: ["u2", "u167", "u166"],
            precision: "lowp",
          });
          f = !0;
        },
        h: function (O) {
          f &&
            ((B = ha.instance({
              isFloat: !1,
              isPot: !0,
              url: O.Hd,
              M: function () {
                n = !0;
              },
            })),
            L.f("s109", [
              {
                type: "1i",
                name: "u33",
                value: 1,
              },
              {
                type: "1i",
                name: "u165",
                value: 0,
              },
              {
                type: "2f",
                name: "u34",
                value: O.ai,
              },
              {
                type: "2f",
                name: "u164",
                value: b,
              },
              {
                type: "1f",
                name: "u4",
                value: 3.8,
              },
            ]),
            L.f("s110", [
              {
                type: "1i",
                name: "u166",
                value: 0,
              },
              {
                type: "1i",
                name: "u2",
                value: 1,
              },
              {
                type: "1i",
                name: "u167",
                value: 2,
              },
            ]));
        },
        Mb: function (O) {
          t = O;
        },
        Te: function (O, C) {
          var P = {
            isFloat: !1,
            isPot: !1,
            isMipmap: !1,
            isLinear: !1,
            width: O,
            height: C,
            v: 4,
          };
          x = 2 / O;
          E = 2 / C;
          w = ha.instance(P);
          G = ha.instance(P);
          l = Za.instance({
            width: O,
            height: C,
          });
        },
        R: function (O, C) {
          if (n) {
            l.bind(!1, !0);
            L.set("s72");
            for (var P = 0; 2 > P; ++P) {
              L.P("u7", x, 0);
              w.i();
              0 !== P && G.b(0);
              var z = 0 === P && !fa.Z;
              pa.g(z, z);
              L.P("u7", 0, E);
              G.i();
              w.b(0);
              pa.g(!1, !1);
            }
            L.set("s109");
            t.b(1);
            B.b(0);
            w.i();
            g.clearColor(1, 0, 0, 1);
            g.clear(g.COLOR_BUFFER_BIT);
            pa.g(!1, !1);
            L.set("s110");
            C.i();
            G.b(0);
            w.b(1);
            O.b(2);
            pa.g(!1, !1);
          }
        },
        H: function () {},
      };
    })();
    var yd = (function () {
      var b = {
        instance: function (f) {
          var n = f.Tg,
            l = f.Sg,
            t = f.Pd,
            w = f.background ? f.background : ha.sg(),
            G = f.Oa,
            B = {
              scale: 1,
              offsetX: 0,
              offsetY: 0,
            },
            x = null;
          f.Fe && ((B.scale = f.Fe.scale), (B.offsetY = f.Fe.offsetY));
          return {
            ng: function () {
              return G;
            },
            ig: function () {
              return w;
            },
            set: function () {
              x = Ob.Sj();
              Ob.Dh(B);
              Ob.pd();
              Ob.qd();
              Wa.xh(t, w, !1, !1);
            },
            G: function () {
              Ob.Dh(x);
            },
            jc: function () {
              return {
                modelURL: n,
                materialsURLs: l,
                background: w.jc(!1),
                Pd: t.jc(!1),
                Oa: G.jc(!0),
              };
            },
            Qm: function (E) {
              w.b(E);
            },
          };
        },
        pc: function (f, n, l) {
          function t() {
            if (3 === ++x && n) {
              var E = b.instance({
                Tg: f.modelURL,
                Sg: f.materialsURLs,
                background: w,
                Pd: G,
                Oa: B,
              });
              n(E);
            }
          }
          var w = null,
            G = null,
            B = null,
            x = 0;
          ha.pc(f.background, function (E) {
            !E && l ? l() : ((w = E), t());
          });
          ha.pc(f.dataState, function (E) {
            !E && l ? l() : ((G = E), t());
          });
          ha.pc(f.light, function (E) {
            !E && l ? l() : ((B = E), t());
          });
        },
      };
      return b;
    })();
    return Tb || window.JEEFITAPI;
  })();
  window.JeefitFallback = (function () {
    function la() {
      window.CanvasListeners &&
        (CanvasListeners.switch_canvas(Kb),
        (Pb.add_listener = CanvasListeners.add_listener),
        (Pb.remove_listener = CanvasListeners.remove_listener),
        (Pb.animate_swipe = CanvasListeners.animate_swipe),
        (Pb.switch_modeInteractor = CanvasListeners.switch_mode),
        (Pb.get_modeInteractor = CanvasListeners.get_mode),
        CanvasListeners.add_listener(
          "move",
          function (xa, nb) {
            tc &&
              ((Hc += nb[0] * Sa.f),
              (Hc = Math.min(Math.max(Hc, -Sa.a), Sa.a)),
              (Oc += nb[1] * Sa.f),
              (Oc = Math.min(Math.max(Oc, -Sa.a), Sa.a)),
              La());
          },
          !0
        ).add_listener(
          "pinch",
          function (xa, nb) {
            tc &&
              ((fc += nb * Sa.o),
              (fc = Math.min(Math.max(fc, Sa.g[0]), Sa.g[1])),
              La());
          },
          !0
        ));
    }

    function La() {
      if (!tc || !Za) return !1;
      nc.save();
      nc.translate(Vb.width, 0);
      nc.scale(-1, 1);
      nc.drawImage(Vb, 0, 0);
      nc.restore();
      nc.save();
      nc.translate(fa[0], fa[1]);
      nc.scale(fc, fc);
      nc.drawImage(
        Za,
        0,
        0,
        Za.width,
        Za.height,
        -fa[0] + Hc + Uc,
        -fa[1] + Oc + pa,
        ac,
        ha
      );
      nc.restore();
      return !0;
    }

    function hb(xa, nb) {
      ua = xa;
      Ma = nb;
      Kb.width = ua;
      Kb.height = Ma;
      Vb.width = ua;
      Vb.height = Ma;
    }
    var Sa = {
        b: "https://fallback.jeeliz.com",
        H: "jpeg",
        D: 800,
        C: 800,
        f: 0.3,
        o: 0.5,
        g: [0.5, 1.5],
        a: 40,
        h: 500,
      },
      qb = !1,
      ib = !1,
      Gb = !1,
      Ta = !1,
      tb = !1,
      yb = !1,
      ob = !1,
      dc = null,
      xc = null,
      Cc = !1,
      zc = !1,
      ec = !1,
      Zb = !1,
      da = !1,
      na = [],
      ua = 0,
      Ma = 0,
      Oa = {},
      Da = !1,
      Ha = !1,
      Va = 0,
      xb = 0,
      Vb = null,
      Cb = null,
      Xa = null,
      Rb = !1,
      bc = !1,
      qc = [],
      Kb = null,
      nc = null,
      tc = !1,
      cc = !1,
      Ec = !1,
      Rc = !1,
      fc = 1,
      Hc = 0,
      Oc = 0,
      oc = null,
      Ac = null,
      fa = null,
      Ic = 0,
      Ea = 0,
      g = 0,
      Ub = 0,
      ac = 0,
      ha = 0,
      Uc = 0,
      pa = 0,
      Za = null,
      eb = null,
      ic = null,
      Pb = {
        switch_toFallbackMode: function (xa, nb) {
          if (Gb || yb) return !1;
          yb = Gb = !0;
          if (Xa)
            return (
              Xa.switch_deepSleep(!0),
              (Rb.style.display = "none"),
              (Kb.style.display = "block"),
              (Rb.id = bc + "_old"),
              (Kb.id = bc),
              la(),
              (window.JEEFITAPI = Pb),
              (ec = Ta = qb = yb = !1),
              (Oa = {}),
              xa && xa(),
              !0
            );
          Xa = Tb;
          var Qb = Xa.get_size();
          Xa.switch_deepSleep && Xa.switch_deepSleep(!0);
          cc = nb;
          Pb.init(
            {},
            function () {
              Pb.set_size(Qb.width, Qb.height);
              Rb = Tb.get_cv();
              Rb.style.display = "none";
              Rb.parentNode.insertBefore(Kb, Rb);
              Kb.style.position = "absolute";
              Kb.className = Rb.className;
              bc = Rb.id;
              Kb.id = bc;
              Rb.id = bc + "_old";
              qc = qc.concat(Xa.get_onHalfLoadCallstack());
              yb = !1;
              xa && xa();
              la();
            },
            function () {
              yb = !1;
              nb && nb();
            }
          );
          window.JEEFITAPI = Pb;
          return !0;
        },
        switch_toFullMode: function (xa) {
          if (!Gb || yb || !Xa || !Xa.ready) return !1;
          Gb = !1;
          yb = !0;
          Rb.style.display = "block";
          Kb.style.display = "none";
          Rb.id = bc;
          Kb.id = bc + "_old";
          window.JEEFITAPI = Xa;
          Tb.init_listeners();
          Xa.switch_deepSleep(!1);
          xa && ((yb = !1), xa());
          return !0;
        },
        set_serverURL: function (xa) {
          Sa.b = xa;
        },
        call_onDetect: function (xa) {
          qb ? xa() : qc.push(xa);
        },
        reset_adjust: function () {
          fc = 1;
          Oc = Hc = 0;
        },
        get_cv: function () {
          return Kb;
        },
        get_displayedCv: function () {
          return Kb;
        },
        set_size: function (xa, nb) {
          hb(xa, nb);
          nc = Kb.getContext("2d");
          nc.globalCompositeOperation = "source-over";
          Cb = Vb.getContext("2d");
          Oa = {};
        },
        resize: function (xa, nb) {
          function Qb() {
            ob && (clearTimeout(ob), (ob = !1));
            if (yb) ob = setTimeout(Qb, Sa.h);
            else if (xa !== ua || nb !== Ma) {
              var pc = CanvasListeners.get_mode();
              hb(xa, nb);
              qb &&
                Ta &&
                Pb.detect(Ta, tb, function () {
                  CanvasListeners.switch_mode(pc);
                });
            }
          }
          ob && (clearTimeout(ob), (ob = !1));
          ob = setTimeout(Qb, Sa.h);
        },
        ready: !1,
        isFallback: !0,
        init: function (xa, nb) {
          for (var Qb in Sa) "undefined" !== typeof xa[Qb] && (Sa[Qb] = xa[Qb]);
          dc = document.createElement("canvas");
          dc.width = Sa.D;
          dc.height = Sa.C;
          xc = dc.getContext("2d");
          Kb = document.createElement("canvas");
          Da = document.createElement("canvas");
          Vb = document.createElement("canvas");
          Ha = Da.getContext("2d");
          oc = document.createElement("canvas");
          Ac = oc.getContext("2d");
          ib = !0;
          nb && nb();
          na.forEach(function (pc) {
            pc();
          });
          na.splice(0, na.length);
          Pb.ready = !0;
        },
        onLoad: function (xa) {
          ib ? xa() : na.push(xa);
        },
        is_viewer3D: function () {
          return !1;
        },
        switch_viewer3D: function (xa, nb) {
          nb && nb();
          return !1;
        },
        switch_sleep: function () {},
        relieve_DOM: function () {},
        switch_slow: function () {},
        capture_image: function (xa, nb) {
          var Qb = new Image();
          Qb.src = Kb.toDataURL("image/jpeg");
          Qb.onload = function () {
            nb(Qb);
          };
        },
        load_model: function (xa, nb, Qb, pc) {
          da = Qb;
          if (pc in Oa)
            (tc = !0),
              (xa = Oa[pc]),
              (Za = xa.u),
              (Ic = xa.F),
              (Ea = xa.G),
              (g = xa.B),
              (Ub = xa.A),
              (Uc = xa.l),
              (pa = xa.m),
              (ac = xa.j),
              (ha = xa.i),
              (Va = xa.w),
              (xb = xa.v),
              (fa = xa.s),
              La(),
              Qb && Qb();
          else
            Pb["try"](pc, function (Ya) {
              var k = ua / Ma;
              Ya.width / Ya.height > k
                ? ((Ub = Ya.height),
                  (g = Ya.height * k),
                  (Ic = Math.round((Ya.width - g) / 2)),
                  (Ea = 0))
                : ((g = Ya.width),
                  (Ub = Ya.width / k),
                  (Ic = 0),
                  (Ea = Math.round((Ya.height - Ub) / 2)));
              1 > Da.width / Da.height
                ? ((ha = ac = k = Va),
                  (Uc = Math.round((ua - k) / 2)),
                  (pa = Math.round((Ma - k) / 2)))
                : ((ha = ac = k = xb),
                  (Uc = Math.round((ua - k) / 2)),
                  (pa = Math.round((Ma - k) / 2)));
              Za = Ya;
              tc = !0;
              oc.width = Kb.width;
              oc.height = Kb.height;
              Ac.clearRect(0, 0, Kb.width, Kb.height);
              Ac.drawImage(Ya, Ic, Ea, g, Ub, 0, 0, ua, Ma);
              k = oc.width;
              for (
                var Fc = oc.height,
                  Gc = Ac.getImageData(0, 0, k, Fc).data,
                  $b = 0,
                  ma = [0, 0],
                  Jb = 0;
                Jb < k;
                ++Jb
              )
                for (var K = 0; K < Fc; ++K) {
                  var Sb = Gc[4 * (Jb + K * k) + 3] / 255;
                  ma[0] += Sb * Jb;
                  ma[1] += Sb * K;
                  $b += Sb;
                }
              ma[0] /= $b;
              ma[1] /= $b;
              fa = ma;
              La();
              Oa[pc] = {
                u: Ya,
                s: fa,
                F: Ic,
                G: Ea,
                B: g,
                A: Ub,
                l: Uc,
                m: pa,
                j: ac,
                i: ha,
                w: Va,
                v: xb,
              };
              Qb && Qb();
            });
        },
        detect: function (xa, nb, Qb, pc) {
          if (yb)
            setTimeout(function () {
              Pb.detect(xa, nb, Qb, pc);
            }, 1e3);
          else if ("IMG" !== xa.tagName || xa.complete) {
            yb = !0;
            qb = !1;
            Ta = xa;
            tb = nb;
            Qb && (Rc = Qb);
            pc && (Ec = pc);
            nb
              ? (eb = xa)
              : ((eb && ic) ||
                  ((eb = document.createElement("canvas")),
                  (ic = eb.getContext("2d"))),
                (eb.width = xa.width),
                (eb.height = xa.height),
                ic.save(),
                ic.translate(xa.width, 0),
                ic.scale(-1, 1),
                ic.drawImage(xa, 0, 0),
                ic.restore());
            ua || Pb.set_size(xa.width, xa.height);
            Za = !1;
            Oa = {};
            var Ya = 0,
              k = 0,
              Fc = 0,
              Gc = 0;
            xa.width >= xa.height
              ? ((k = 0),
                (Fc = Gc = xa.height),
                (Ya = Math.round((xa.width - xa.height) / 2)))
              : ((Ya = 0),
                (Fc = Gc = xa.width),
                (k = Math.round((xa.height - xa.width) / 2)));
            xc.drawImage(eb, Ya, k, Fc, Gc, 0, 0, dc.width, dc.height);
            Pb.c(
              Sa.b,
              {
                action: "detect",
                imageData: dc.toDataURL("image/" + Sa.H),
              },
              Pb.on_detect,
              function () {
                yb = !1;
              }
            );
            Ya = ua / Ma;
            var $b = -1;
            xa.width / xa.height > Ya
              ? ((Gc = xa.height),
                (Fc = Math.round(xa.height * Ya)),
                (Ya = Math.round((xa.width - Fc) / 2)),
                (k = 0),
                ($b = Ma / xa.height))
              : ((Fc = xa.width),
                (Gc = Math.round(xa.width / Ya)),
                (Ya = 0),
                (k = Math.round((xa.height - Gc) / 2)),
                ($b = ua / xa.width));
            Va = Math.round($b * xa.width);
            xb = Math.round($b * xa.height);
            $b = Math.min($b, 1);
            Da.width = Math.round($b * xa.width);
            Da.height = Math.round($b * xa.height);
            Ha.drawImage(
              eb,
              0,
              0,
              xa.width,
              xa.height,
              0,
              0,
              Da.width,
              Da.height
            );
            Cb.drawImage(eb, Ya, k, Fc, Gc, 0, 0, ua, Ma);
          } else
            xa.onload = function () {
              Pb.detect(xa, nb, Qb, pc);
            };
        },
        get_reducedImage: function () {
          return Da;
        },
        on_detect: function (xa) {
          yb = !1;
          xa = JSON.parse(xa);
          xa.detectionId
            ? ((Cc = xa.detectionId),
              (qb = !0),
              qc.forEach(function (nb) {
                Pb.onLoad(nb);
              }),
              qc.splice(0, qc.length),
              Rc && Rc(Cc),
              Zb && ec && Pb.load_model(!1, !1, da, ec))
            : Ec && Ec();
        },
        try: function (xa, nb) {
          if (yb || !qb) return !1;
          yb = !0;
          Zb = !1;
          ec = xa;
          zc = nb;
          Pb.c(
            Sa.b,
            {
              action: "try",
              sku: xa,
              detectionId: Cc,
            },
            Pb.on_try,
            function () {
              yb = !1;
            }
          );
          return !0;
        },
        on_try: function (xa) {
          yb = !1;
          if ((xa = JSON.parse(xa)) && xa.imageData) {
            var nb = new Image();
            nb.src = xa.imageData;
            Zb = !0;
            zc &&
              (nb.onload = function () {
                zc(nb);
              });
          } else cc && cc();
        },
        c: function (xa, nb, Qb, pc) {
          var Ya = new XMLHttpRequest();
          Ya.open("POST", xa, !0);
          Ya.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
          );
          pc && (Ya.onerror = pc);
          Ya.onreadystatechange = function () {
            4 === Ya.readyState && 200 === Ya.status && Qb(Ya.responseText);
          };
          Ya.send(JSON.stringify(nb));
        },
      };
    Pb.onHalfLoad = Pb.onLoad;
    return Pb;
  })();
  !(function (la, La) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = la.document
          ? La(la, !0)
          : function (hb) {
              if (!hb.document)
                throw Error("jQuery requires a window with a document");
              return La(hb);
            })
      : La(la);
  })("undefined" != typeof window ? window : this, function (la, La) {
    function hb(a, c) {
      c = c || ha;
      var d = c.createElement("script");
      d.text = a;
      c.head.appendChild(d).parentNode.removeChild(d);
    }

    function Sa(a) {
      var c = !!a && "length" in a && a.length,
        d = k.type(a);
      return (
        "function" !== d &&
        !k.isWindow(a) &&
        ("array" === d ||
          0 === c ||
          ("number" == typeof c && 0 < c && c - 1 in a))
      );
    }

    function qb(a, c) {
      return a.nodeName && a.nodeName.toLowerCase() === c.toLowerCase();
    }

    function ib(a, c, d) {
      return k.isFunction(c)
        ? k.grep(a, function (e, h) {
            return !!c.call(e, h, e) !== d;
          })
        : c.nodeType
        ? k.grep(a, function (e) {
            return (e === c) !== d;
          })
        : "string" != typeof c
        ? k.grep(a, function (e) {
            return -1 < ic.call(c, e) !== d;
          })
        : pd.test(c)
        ? k.filter(c, a, d)
        : ((c = k.filter(c, a)),
          k.grep(a, function (e) {
            return -1 < ic.call(c, e) !== d && 1 === e.nodeType;
          }));
    }

    function Gb(a, c) {
      for (; (a = a[c]) && 1 !== a.nodeType; );
      return a;
    }

    function Ta(a) {
      var c = {};
      return (
        k.each(a.match(Nb) || [], function (d, e) {
          c[e] = !0;
        }),
        c
      );
    }

    function tb(a) {
      return a;
    }

    function yb(a) {
      throw a;
    }

    function ob(a, c, d, e) {
      var h;
      try {
        a && k.isFunction((h = a.promise))
          ? h.call(a).done(c).fail(d)
          : a && k.isFunction((h = a.then))
          ? h.call(a, c, d)
          : c.apply(void 0, [a].slice(e));
      } catch (m) {
        d.apply(void 0, [m]);
      }
    }

    function dc() {
      ha.removeEventListener("DOMContentLoaded", dc);
      la.removeEventListener("load", dc);
      k.ready();
    }

    function xc() {
      this.expando = k.expando + xc.uid++;
    }

    function Cc(a, c, d) {
      var e;
      if (void 0 === d && 1 === a.nodeType)
        if (
          ((e = "data-" + c.replace(kd, "-$&").toLowerCase()),
          (d = a.getAttribute(e)),
          "string" == typeof d)
        ) {
          try {
            (e = d),
              (d =
                "true" === e ||
                ("false" !== e &&
                  ("null" === e
                    ? null
                    : e === +e + ""
                    ? +e
                    : zd.test(e)
                    ? JSON.parse(e)
                    : e)));
          } catch (h) {}
          Ob.set(a, c, d);
        } else d = void 0;
      return d;
    }

    function zc(a, c, d, e) {
      var h,
        m = 1,
        q = 20,
        I = e
          ? function () {
              return e.cur();
            }
          : function () {
              return k.css(a, c, "");
            },
        J = I(),
        ca = (d && d[3]) || (k.cssNumber[c] ? "" : "px"),
        T = (k.cssNumber[c] || ("px" !== ca && +J)) && L.exec(k.css(a, c));
      if (T && T[3] !== ca) {
        ca = ca || T[3];
        d = d || [];
        T = +J || 1;
        do (m = m || ".5"), (T /= m), k.style(a, c, T + ca);
        while (m !== (m = I() / J) && 1 !== m && --q);
      }
      return (
        d &&
          ((T = +T || +J || 0),
          (h = d[1] ? T + (d[1] + 1) * d[2] : +d[2]),
          e && ((e.unit = ca), (e.start = T), (e.end = h))),
        h
      );
    }

    function ec(a, c) {
      for (var d, e, h = [], m = 0, q = a.length; m < q; m++)
        if (((e = a[m]), e.style))
          if (((d = e.style.display), c)) {
            if (
              ("none" === d &&
                ((h[m] = lb.get(e, "display") || null),
                h[m] || (e.style.display = "")),
              "" === e.style.display && Wa(e))
            ) {
              d = m;
              var I = void 0;
              var J = e.ownerDocument;
              var ca = e.nodeName;
              J = (e = Ca[ca])
                ? e
                : ((I = J.body.appendChild(J.createElement(ca))),
                  (e = k.css(I, "display")),
                  I.parentNode.removeChild(I),
                  "none" === e && (e = "block"),
                  (Ca[ca] = e),
                  e);
              h[d] = J;
            }
          } else "none" !== d && ((h[m] = "none"), lb.set(e, "display", d));
      for (m = 0; m < q; m++) null != h[m] && (a[m].style.display = h[m]);
      return a;
    }

    function Zb(a, c) {
      var d;
      return (
        (d =
          "undefined" != typeof a.getElementsByTagName
            ? a.getElementsByTagName(c || "*")
            : "undefined" != typeof a.querySelectorAll
            ? a.querySelectorAll(c || "*")
            : []),
        void 0 === c || (c && qb(a, c)) ? k.merge([a], d) : d
      );
    }

    function da(a, c) {
      for (var d = 0, e = a.length; d < e; d++)
        lb.set(a[d], "globalEval", !c || lb.get(c[d], "globalEval"));
    }

    function na(a, c, d, e, h) {
      for (
        var m,
          q,
          I,
          J,
          ca = c.createDocumentFragment(),
          T = [],
          va = 0,
          Ra = a.length;
        va < Ra;
        va++
      )
        if (((m = a[va]), m || 0 === m))
          if ("object" === k.type(m)) k.merge(T, m.nodeType ? [m] : m);
          else if (Jd.test(m)) {
            q = q || ca.appendChild(c.createElement("div"));
            I = (Lc.exec(m) || ["", ""])[1].toLowerCase();
            I = sc[I] || sc._default;
            q.innerHTML = I[1] + k.htmlPrefilter(m) + I[2];
            for (I = I[0]; I--; ) q = q.lastChild;
            k.merge(T, q.childNodes);
            q = ca.firstChild;
            q.textContent = "";
          } else T.push(c.createTextNode(m));
      ca.textContent = "";
      for (va = 0; (m = T[va++]); )
        if (e && -1 < k.inArray(m, e)) h && h.push(m);
        else if (
          ((J = k.contains(m.ownerDocument, m)),
          (q = Zb(ca.appendChild(m), "script")),
          J && da(q),
          d)
        )
          for (I = 0; (m = q[I++]); ) gd.test(m.type || "") && d.push(m);
      return ca;
    }

    function ua() {
      return !0;
    }

    function Ma() {
      return !1;
    }

    function Oa() {
      try {
        return ha.activeElement;
      } catch (a) {}
    }

    function Da(a, c, d, e, h, m) {
      var q, I;
      if ("object" == typeof c) {
        "string" != typeof d && ((e = e || d), (d = void 0));
        for (I in c) Da(a, I, d, e, c[I], m);
        return a;
      }
      if (
        (null == e && null == h
          ? ((h = d), (e = d = void 0))
          : null == h &&
            ("string" == typeof d
              ? ((h = e), (e = void 0))
              : ((h = e), (e = d), (d = void 0))),
        !1 === h)
      )
        h = Ma;
      else if (!h) return a;
      return (
        1 === m &&
          ((q = h),
          (h = function (J) {
            return k().off(J), q.apply(this, arguments);
          }),
          (h.guid = q.guid || (q.guid = k.guid++))),
        a.each(function () {
          k.event.add(this, c, h, e, d);
        })
      );
    }

    function Ha(a, c) {
      return qb(a, "table") && qb(11 !== c.nodeType ? c : c.firstChild, "tr")
        ? k(">tbody", a)[0] || a
        : a;
    }

    function Va(a) {
      return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
    }

    function xb(a) {
      var c = yd.exec(a.type);
      return c ? (a.type = c[1]) : a.removeAttribute("type"), a;
    }

    function Vb(a, c) {
      var d, e, h, m, q, I;
      if (1 === c.nodeType) {
        if (
          lb.hasData(a) &&
          ((d = lb.access(a)), (e = lb.set(c, d)), (I = d.events))
        )
          for (h in (delete e.handle, (e.events = {}), I))
            for (d = 0, e = I[h].length; d < e; d++) k.event.add(c, h, I[h][d]);
        Ob.hasData(a) &&
          ((m = Ob.access(a)), (q = k.extend({}, m)), Ob.set(c, q));
      }
    }

    function Cb(a, c, d, e) {
      c = Za.apply([], c);
      var h,
        m,
        q,
        I = 0,
        J = a.length,
        ca = J - 1,
        T = c[0],
        va = k.isFunction(T);
      if (va || (1 < J && "string" == typeof T && !Ya.checkClone && Kd.test(T)))
        return a.each(function (rb) {
          var Ua = a.eq(rb);
          va && (c[0] = T.call(this, rb, Ua.html()));
          Cb(Ua, c, d, e);
        });
      if (
        J &&
        ((h = na(c, a[0].ownerDocument, !1, a, e)),
        (m = h.firstChild),
        1 === h.childNodes.length && (h = m),
        m || e)
      ) {
        m = k.map(Zb(h, "script"), Va);
        for (q = m.length; I < J; I++) {
          var Ra = h;
          I !== ca &&
            ((Ra = k.clone(Ra, !0, !0)), q && k.merge(m, Zb(Ra, "script")));
          d.call(a[I], Ra, I);
        }
        if (q)
          for (
            h = m[m.length - 1].ownerDocument, k.map(m, xb), I = 0;
            I < q;
            I++
          )
            (Ra = m[I]),
              gd.test(Ra.type || "") &&
                !lb.access(Ra, "globalEval") &&
                k.contains(h, Ra) &&
                (Ra.src
                  ? k._evalUrl && k._evalUrl(Ra.src)
                  : hb(Ra.textContent.replace(b, ""), h));
      }
      return a;
    }

    function Xa(a, c, d) {
      for (var e = c ? k.filter(c, a) : a, h = 0; null != (c = e[h]); h++)
        d || 1 !== c.nodeType || k.cleanData(Zb(c)),
          c.parentNode &&
            (d && k.contains(c.ownerDocument, c) && da(Zb(c, "script")),
            c.parentNode.removeChild(c));
      return a;
    }

    function Rb(a, c, d) {
      var e,
        h,
        m,
        q,
        I = a.style;
      return (
        (d = d || l(a)),
        d &&
          ((q = d.getPropertyValue(c) || d[c]),
          "" !== q || k.contains(a.ownerDocument, a) || (q = k.style(a, c)),
          !Ya.pixelMarginRight() &&
            n.test(q) &&
            f.test(c) &&
            ((e = I.width),
            (h = I.minWidth),
            (m = I.maxWidth),
            (I.minWidth = I.maxWidth = I.width = q),
            (q = d.width),
            (I.width = e),
            (I.minWidth = h),
            (I.maxWidth = m))),
        void 0 !== q ? q + "" : q
      );
    }

    function bc(a, c) {
      return {
        get: function () {
          return a()
            ? void delete this.get
            : (this.get = c).apply(this, arguments);
        },
      };
    }

    function qc(a) {
      var c = k.cssProps[a];
      if (!c) {
        c = k.cssProps;
        a: {
          var d = a;
          if (!(d in E)) {
            for (var e = d[0].toUpperCase() + d.slice(1), h = x.length; h--; )
              if (((d = x[h] + e), d in E)) break a;
            d = void 0;
          }
        }
        c = c[a] = d || a;
      }
      return c;
    }

    function Kb(a, c, d) {
      return (a = L.exec(c))
        ? Math.max(0, a[2] - (d || 0)) + (a[3] || "px")
        : c;
    }

    function nc(a, c, d, e, h) {
      var m = 0;
      for (
        c = d === (e ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        4 > c;
        c += 2
      )
        "margin" === d && (m += k.css(a, d + Ib[c], !0, h)),
          e
            ? ("content" === d && (m -= k.css(a, "padding" + Ib[c], !0, h)),
              "margin" !== d &&
                (m -= k.css(a, "border" + Ib[c] + "Width", !0, h)))
            : ((m += k.css(a, "padding" + Ib[c], !0, h)),
              "padding" !== d &&
                (m += k.css(a, "border" + Ib[c] + "Width", !0, h)));
      return m;
    }

    function tc(a, c, d) {
      var e,
        h = l(a),
        m = Rb(a, c, h),
        q = "border-box" === k.css(a, "boxSizing", !1, h);
      return n.test(m)
        ? m
        : ((e = q && (Ya.boxSizingReliable() || m === a.style[c])),
          "auto" === m && (m = a["offset" + c[0].toUpperCase() + c.slice(1)]),
          (m = parseFloat(m) || 0),
          m + nc(a, c, d || (q ? "border" : "content"), e, h) + "px");
    }

    function cc(a, c, d, e, h) {
      return new cc.prototype.init(a, c, d, e, h);
    }

    function Ec() {
      C &&
        (!1 === ha.hidden && la.requestAnimationFrame
          ? la.requestAnimationFrame(Ec)
          : la.setTimeout(Ec, k.fx.interval),
        k.fx.tick());
    }

    function Rc() {
      return (
        la.setTimeout(function () {
          O = void 0;
        }),
        (O = k.now())
      );
    }

    function fc(a, c) {
      var d = 0,
        e = {
          height: a,
        };
      for (c = c ? 1 : 0; 4 > d; d += 2 - c) {
        var h = Ib[d];
        e["margin" + h] = e["padding" + h] = a;
      }
      return c && (e.opacity = e.width = a), e;
    }

    function Hc(a, c, d) {
      for (
        var e,
          h = (oc.tweeners[c] || []).concat(oc.tweeners["*"]),
          m = 0,
          q = h.length;
        m < q;
        m++
      )
        if ((e = h[m].call(d, c, a))) return e;
    }

    function Oc(a, c) {
      var d, e, h, m, q;
      for (d in a)
        if (
          ((e = k.camelCase(d)),
          (h = c[e]),
          (m = a[d]),
          Array.isArray(m) && ((h = m[1]), (m = a[d] = m[0])),
          d !== e && ((a[e] = m), delete a[d]),
          (q = k.cssHooks[e]),
          q && "expand" in q)
        )
          for (d in ((m = q.expand(m)), delete a[e], m))
            d in a || ((a[d] = m[d]), (c[d] = h));
        else c[e] = h;
    }

    function oc(a, c, d) {
      var e,
        h = 0,
        m = oc.prefilters.length,
        q = k.Deferred().always(function () {
          delete I.elem;
        }),
        I = function () {
          if (e) return !1;
          var ca = O || Rc();
          ca = Math.max(0, J.startTime + J.duration - ca);
          for (
            var T = 1 - (ca / J.duration || 0), va = 0, Ra = J.tweens.length;
            va < Ra;
            va++
          )
            J.tweens[va].run(T);
          return (
            q.notifyWith(a, [J, T, ca]),
            1 > T && Ra
              ? ca
              : (Ra || q.notifyWith(a, [J, 1, 0]), q.resolveWith(a, [J]), !1)
          );
        },
        J = q.promise({
          elem: a,
          props: k.extend({}, c),
          opts: k.extend(
            !0,
            {
              specialEasing: {},
              easing: k.easing._default,
            },
            d
          ),
          originalProperties: c,
          originalOptions: d,
          startTime: O || Rc(),
          duration: d.duration,
          tweens: [],
          createTween: function (ca, T) {
            ca = k.Tween(
              a,
              J.opts,
              ca,
              T,
              J.opts.specialEasing[ca] || J.opts.easing
            );
            return J.tweens.push(ca), ca;
          },
          stop: function (ca) {
            var T = 0,
              va = ca ? J.tweens.length : 0;
            if (e) return this;
            for (e = !0; T < va; T++) J.tweens[T].run(1);
            return (
              ca
                ? (q.notifyWith(a, [J, 1, 0]), q.resolveWith(a, [J, ca]))
                : q.rejectWith(a, [J, ca]),
              this
            );
          },
        });
      d = J.props;
      for (Oc(d, J.opts.specialEasing); h < m; h++)
        if ((c = oc.prefilters[h].call(J, a, d, J.opts)))
          return (
            k.isFunction(c.stop) &&
              (k._queueHooks(J.elem, J.opts.queue).stop = k.proxy(c.stop, c)),
            c
          );
      return (
        k.map(d, Hc, J),
        k.isFunction(J.opts.start) && J.opts.start.call(a, J),
        J.progress(J.opts.progress)
          .done(J.opts.done, J.opts.complete)
          .fail(J.opts.fail)
          .always(J.opts.always),
        k.fx.timer(
          k.extend(I, {
            elem: a,
            anim: J,
            queue: J.opts.queue,
          })
        ),
        J
      );
    }

    function Ac(a) {
      return (a.match(Nb) || []).join(" ");
    }

    function fa(a) {
      return (a.getAttribute && a.getAttribute("class")) || "";
    }

    function Ic(a, c, d, e) {
      var h;
      if (Array.isArray(c))
        k.each(c, function (m, q) {
          d || V.test(a)
            ? e(a, q)
            : Ic(
                a + "[" + ("object" == typeof q && null != q ? m : "") + "]",
                q,
                d,
                e
              );
        });
      else if (d || "object" !== k.type(c)) e(a, c);
      else for (h in c) Ic(a + "[" + h + "]", c[h], d, e);
    }

    function Ea(a) {
      return function (c, d) {
        "string" != typeof c && ((d = c), (c = "*"));
        var e = 0,
          h = c.toLowerCase().match(Nb) || [];
        if (k.isFunction(d))
          for (; (c = h[e++]); )
            "+" === c[0]
              ? ((c = c.slice(1) || "*"), (a[c] = a[c] || []).unshift(d))
              : (a[c] = a[c] || []).push(d);
      };
    }

    function g(a, c, d, e) {
      function h(I) {
        var J;
        return (
          (m[I] = !0),
          k.each(a[I] || [], function (ca, T) {
            ca = T(c, d, e);
            return "string" != typeof ca || q || m[ca]
              ? q
                ? !(J = ca)
                : void 0
              : (c.dataTypes.unshift(ca), h(ca), !1);
          }),
          J
        );
      }
      var m = {},
        q = a === ba;
      return h(c.dataTypes[0]) || (!m["*"] && h("*"));
    }

    function Ub(a, c) {
      var d,
        e,
        h = k.ajaxSettings.flatOptions || {};
      for (d in c) void 0 !== c[d] && ((h[d] ? a : e || (e = {}))[d] = c[d]);
      return e && k.extend(!0, a, e), a;
    }
    var ac = [],
      ha = la.document,
      Uc = Object.getPrototypeOf,
      pa = ac.slice,
      Za = ac.concat,
      eb = ac.push,
      ic = ac.indexOf,
      Pb = {},
      xa = Pb.toString,
      nb = Pb.hasOwnProperty,
      Qb = nb.toString,
      pc = Qb.call(Object),
      Ya = {},
      k = function (a, c) {
        return new k.fn.init(a, c);
      },
      Fc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      Gc = /^-ms-/,
      $b = /-([a-z])/g,
      ma = function (a, c) {
        return c.toUpperCase();
      };
    k.fn = k.prototype = {
      jquery: "3.2.1",
      constructor: k,
      length: 0,
      toArray: function () {
        return pa.call(this);
      },
      get: function (a) {
        return null == a
          ? pa.call(this)
          : 0 > a
          ? this[a + this.length]
          : this[a];
      },
      pushStack: function (a) {
        a = k.merge(this.constructor(), a);
        return (a.prevObject = this), a;
      },
      each: function (a) {
        return k.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          k.map(this, function (c, d) {
            return a.call(c, d, c);
          })
        );
      },
      slice: function () {
        return this.pushStack(pa.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var c = this.length;
        a = +a + (0 > a ? c : 0);
        return this.pushStack(0 <= a && a < c ? [this[a]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: eb,
      sort: ac.sort,
      splice: ac.splice,
    };
    k.extend = k.fn.extend = function () {
      var a,
        c,
        d,
        e,
        h = arguments[0] || {},
        m = 1,
        q = arguments.length,
        I = !1;
      "boolean" == typeof h && ((I = h), (h = arguments[m] || {}), m++);
      "object" == typeof h || k.isFunction(h) || (h = {});
      for (m === q && ((h = this), m--); m < q; m++)
        if (null != (a = arguments[m]))
          for (c in a) {
            var J = h[c];
            var ca = a[c];
            h !== ca &&
              (I && ca && (k.isPlainObject(ca) || (d = Array.isArray(ca)))
                ? (d
                    ? ((d = !1), (e = J && Array.isArray(J) ? J : []))
                    : (e = J && k.isPlainObject(J) ? J : {}),
                  (h[c] = k.extend(I, e, ca)))
                : void 0 !== ca && (h[c] = ca));
          }
      return h;
    };
    k.extend({
      expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === k.type(a);
      },
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var c = k.type(a);
        return ("number" === c || "string" === c) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function (a) {
        var c, d;
        return (
          !(!a || "[object Object]" !== xa.call(a)) &&
          (!(c = Uc(a)) ||
            ((d = nb.call(c, "constructor") && c.constructor),
            "function" == typeof d && Qb.call(d) === pc))
        );
      },
      isEmptyObject: function (a) {
        for (var c in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? Pb[xa.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        hb(a);
      },
      camelCase: function (a) {
        return a.replace(Gc, "ms-").replace($b, ma);
      },
      each: function (a, c) {
        var d,
          e = 0;
        if (Sa(a))
          for (d = a.length; e < d && !1 !== c.call(a[e], e, a[e]); e++);
        else for (e in a) if (!1 === c.call(a[e], e, a[e])) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(Fc, "");
      },
      makeArray: function (a, c) {
        c = c || [];
        return (
          null != a &&
            (Sa(Object(a))
              ? k.merge(c, "string" == typeof a ? [a] : a)
              : eb.call(c, a)),
          c
        );
      },
      inArray: function (a, c, d) {
        return null == c ? -1 : ic.call(c, a, d);
      },
      merge: function (a, c) {
        for (var d = +c.length, e = 0, h = a.length; e < d; e++) a[h++] = c[e];
        return (a.length = h), a;
      },
      grep: function (a, c, d) {
        for (var e = [], h = 0, m = a.length, q = !d; h < m; h++)
          (d = !c(a[h], h)), d !== q && e.push(a[h]);
        return e;
      },
      map: function (a, c, d) {
        var e,
          h = 0,
          m = [];
        if (Sa(a))
          for (e = a.length; h < e; h++) {
            var q = c(a[h], h, d);
            null != q && m.push(q);
          }
        else for (h in a) (q = c(a[h], h, d)), null != q && m.push(q);
        return Za.apply([], m);
      },
      guid: 1,
      proxy: function (a, c) {
        var d, e, h;
        if (
          ("string" == typeof c && ((d = a[c]), (c = a), (a = d)),
          k.isFunction(a))
        )
          return (
            (e = pa.call(arguments, 2)),
            (h = function () {
              return a.apply(c || this, e.concat(pa.call(arguments)));
            }),
            (h.guid = a.guid = a.guid || k.guid++),
            h
          );
      },
      now: Date.now,
      support: Ya,
    });
    "function" == typeof Symbol &&
      (k.fn[Symbol.iterator] = ac[Symbol.iterator]);
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, c) {
        Pb["[object " + c + "]"] = c.toLowerCase();
      }
    );
    var Jb = (function (a) {
      function c(u, N, U, W) {
        var ja,
          oa,
          Ja,
          db,
          Fa = N && N.ownerDocument,
          kb = N ? N.nodeType : 9;
        if (
          ((U = U || []),
          "string" != typeof u || !u || (1 !== kb && 9 !== kb && 11 !== kb))
        )
          return U;
        if (
          !W &&
          ((N ? N.ownerDocument || N : Hb) !== zb && hd(N), (N = N || zb), ea)
        ) {
          if (11 !== kb && (db = Yd.exec(u)))
            if ((ja = db[1]))
              if (9 === kb) {
                if (!(oa = N.getElementById(ja))) return U;
                if (oa.id === ja) return U.push(oa), U;
              } else {
                if (
                  Fa &&
                  (oa = Fa.getElementById(ja)) &&
                  wb(N, oa) &&
                  oa.id === ja
                )
                  return U.push(oa), U;
              }
            else {
              if (db[2]) return cd.apply(U, N.getElementsByTagName(u)), U;
              if (
                (ja = db[3]) &&
                gc.getElementsByClassName &&
                N.getElementsByClassName
              )
                return cd.apply(U, N.getElementsByClassName(ja)), U;
            }
          if (!(!gc.qsa || Pc[u + " "] || (ta && ta.test(u)))) {
            if (1 !== kb) {
              Fa = N;
              var mb = u;
            } else if ("object" !== N.nodeName.toLowerCase()) {
              (Ja = N.getAttribute("id"))
                ? (Ja = Ja.replace(Rd, Sd))
                : N.setAttribute("id", (Ja = jb));
              oa = Bd(u);
              for (ja = oa.length; ja--; ) oa[ja] = "#" + Ja + " " + rb(oa[ja]);
              mb = oa.join(",");
              Fa = (Ld.test(u) && va(N.parentNode)) || N;
            }
            if (mb)
              try {
                return cd.apply(U, Fa.querySelectorAll(mb)), U;
              } catch (gb) {
              } finally {
                Ja === jb && N.removeAttribute("id");
              }
          }
        }
        return Na(u.replace(Cd, "$1"), N, U, W);
      }

      function d() {
        function u(U, W) {
          return (
            N.push(U + " ") > Lb.cacheLength && delete u[N.shift()],
            (u[U + " "] = W)
          );
        }
        var N = [];
        return u;
      }

      function e(u) {
        return (u[jb] = !0), u;
      }

      function h(u) {
        var N = zb.createElement("fieldset");
        try {
          return !!u(N);
        } catch (U) {
          return !1;
        } finally {
          N.parentNode && N.parentNode.removeChild(N);
        }
      }

      function m(u, N) {
        u = u.split("|");
        for (var U = u.length; U--; ) Lb.attrHandle[u[U]] = N;
      }

      function q(u, N) {
        var U = N && u,
          W =
            U &&
            1 === u.nodeType &&
            1 === N.nodeType &&
            u.sourceIndex - N.sourceIndex;
        if (W) return W;
        if (U) for (; (U = U.nextSibling); ) if (U === N) return -1;
        return u ? 1 : -1;
      }

      function I(u) {
        return function (N) {
          return "input" === N.nodeName.toLowerCase() && N.type === u;
        };
      }

      function J(u) {
        return function (N) {
          var U = N.nodeName.toLowerCase();
          return ("input" === U || "button" === U) && N.type === u;
        };
      }

      function ca(u) {
        return function (N) {
          return "form" in N
            ? N.parentNode && !1 === N.disabled
              ? "label" in N
                ? "label" in N.parentNode
                  ? N.parentNode.disabled === u
                  : N.disabled === u
                : N.isDisabled === u || (N.isDisabled !== !u && Zd(N) === u)
              : N.disabled === u
            : "label" in N && N.disabled === u;
        };
      }

      function T(u) {
        return e(function (N) {
          return (
            (N = +N),
            e(function (U, W) {
              for (var ja, oa = u([], U.length, N), Ja = oa.length; Ja--; )
                U[(ja = oa[Ja])] && (U[ja] = !(W[ja] = U[ja]));
            })
          );
        });
      }

      function va(u) {
        return u && "undefined" != typeof u.getElementsByTagName && u;
      }

      function Ra() {}

      function rb(u) {
        for (var N = 0, U = u.length, W = ""; N < U; N++) W += u[N].value;
        return W;
      }

      function Ua(u, N, U) {
        var W = N.dir,
          ja = N.next,
          oa = ja || W,
          Ja = U && "parentNode" === oa,
          db = ad++;
        return N.first
          ? function (Fa, kb, mb) {
              for (; (Fa = Fa[W]); )
                if (1 === Fa.nodeType || Ja) return u(Fa, kb, mb);
              return !1;
            }
          : function (Fa, kb, mb) {
              var gb,
                Wb,
                jc,
                hc = [Ab, db];
              if (mb)
                for (; (Fa = Fa[W]); ) {
                  if ((1 === Fa.nodeType || Ja) && u(Fa, kb, mb)) return !0;
                }
              else
                for (; (Fa = Fa[W]); )
                  if (1 === Fa.nodeType || Ja)
                    if (
                      ((jc = Fa[jb] || (Fa[jb] = {})),
                      (Wb = jc[Fa.uniqueID] || (jc[Fa.uniqueID] = {})),
                      ja && ja === Fa.nodeName.toLowerCase())
                    )
                      Fa = Fa[W] || Fa;
                    else {
                      if ((gb = Wb[oa]) && gb[0] === Ab && gb[1] === db)
                        return (hc[2] = gb[2]);
                      if (((Wb[oa] = hc), (hc[2] = u(Fa, kb, mb)))) return !0;
                    }
              return !1;
            };
      }

      function ub(u) {
        return 1 < u.length
          ? function (N, U, W) {
              for (var ja = u.length; ja--; ) if (!u[ja](N, U, W)) return !1;
              return !0;
            }
          : u[0];
      }

      function Pa(u, N, U, W, ja) {
        for (
          var oa, Ja = [], db = 0, Fa = u.length, kb = null != N;
          db < Fa;
          db++
        )
          (oa = u[db]) &&
            ((U && !U(oa, W, ja)) || (Ja.push(oa), kb && N.push(db)));
        return Ja;
      }

      function wc(u, N, U, W, ja, oa) {
        return (
          W && !W[jb] && (W = wc(W)),
          ja && !ja[jb] && (ja = wc(ja, oa)),
          e(function (Ja, db, Fa, kb) {
            var mb,
              gb = [],
              Wb = [],
              jc = db.length,
              hc;
            if (!(hc = Ja)) {
              hc = N || "*";
              for (
                var Bb = Fa.nodeType ? [Fa] : Fa,
                  Sc = [],
                  Bc = 0,
                  Qc = Bb.length;
                Bc < Qc;
                Bc++
              )
                c(hc, Bb[Bc], Sc);
              hc = Sc;
            }
            hc = !u || (!Ja && N) ? hc : Pa(hc, gb, u, Fa, kb);
            Bb = U ? (ja || (Ja ? u : jc || W) ? [] : db) : hc;
            if ((U && U(hc, Bb, Fa, kb), W)) {
              var uc = Pa(Bb, Wb);
              W(uc, [], Fa, kb);
              for (Fa = uc.length; Fa--; )
                (mb = uc[Fa]) && (Bb[Wb[Fa]] = !(hc[Wb[Fa]] = mb));
            }
            if (Ja) {
              if (ja || u) {
                if (ja) {
                  uc = [];
                  for (Fa = Bb.length; Fa--; )
                    (mb = Bb[Fa]) && uc.push((hc[Fa] = mb));
                  ja(null, (Bb = []), uc, kb);
                }
                for (Fa = Bb.length; Fa--; )
                  (mb = Bb[Fa]) &&
                    -1 < (uc = ja ? id(Ja, mb) : gb[Fa]) &&
                    (Ja[uc] = !(db[uc] = mb));
              }
            } else (Bb = Pa(Bb === db ? Bb.splice(jc, Bb.length) : Bb)), ja ? ja(null, db, Bb, kb) : cd.apply(db, Bb);
          })
        );
      }

      function ra(u) {
        var N,
          U,
          W = u.length,
          ja = Lb.relative[u[0].type];
        var oa = ja || Lb.relative[" "];
        for (
          var Ja = ja ? 1 : 0,
            db = Ua(
              function (mb) {
                return mb === N;
              },
              oa,
              !0
            ),
            Fa = Ua(
              function (mb) {
                return -1 < id(N, mb);
              },
              oa,
              !0
            ),
            kb = [
              function (mb, gb, Wb) {
                mb =
                  (!ja && (Wb || gb !== Yb)) ||
                  ((N = gb).nodeType ? db(mb, gb, Wb) : Fa(mb, gb, Wb));
                return (N = null), mb;
              },
            ];
          Ja < W;
          Ja++
        )
          if ((oa = Lb.relative[u[Ja].type])) kb = [Ua(ub(kb), oa)];
          else {
            if (
              ((oa = Lb.filter[u[Ja].type].apply(null, u[Ja].matches)), oa[jb])
            ) {
              for (U = ++Ja; U < W && !Lb.relative[u[U].type]; U++);
              return wc(
                1 < Ja && ub(kb),
                1 < Ja &&
                  rb(
                    u.slice(0, Ja - 1).concat({
                      value: " " === u[Ja - 2].type ? "*" : "",
                    })
                  ).replace(Cd, "$1"),
                oa,
                Ja < U && ra(u.slice(Ja, U)),
                U < W && ra((u = u.slice(U))),
                U < W && rb(u)
              );
            }
            kb.push(oa);
          }
        return ub(kb);
      }

      function Ba(u, N) {
        var U = 0 < N.length,
          W = 0 < u.length,
          ja = function (oa, Ja, db, Fa, kb) {
            var mb,
              gb,
              Wb = 0,
              jc = "0",
              hc = oa && [],
              Bb = [],
              Sc = Yb,
              Bc = oa || (W && Lb.find.TAG("*", kb)),
              Qc = (Ab += null == Sc ? 1 : Math.random() || 0.1),
              uc = Bc.length;
            for (
              kb && (Yb = Ja === zb || Ja || kb);
              jc !== uc && null != (mb = Bc[jc]);
              jc++
            ) {
              if (W && mb) {
                var Md = 0;
                for (
                  Ja || mb.ownerDocument === zb || (hd(mb), (db = !ea));
                  (gb = u[Md++]);

                )
                  if (gb(mb, Ja || zb, db)) {
                    Fa.push(mb);
                    break;
                  }
                kb && (Ab = Qc);
              }
              U && ((mb = !gb && mb) && Wb--, oa && hc.push(mb));
            }
            if (((Wb += jc), U && jc !== Wb)) {
              for (Md = 0; (gb = N[Md++]); ) gb(hc, Bb, Ja, db);
              if (oa) {
                if (0 < Wb)
                  for (; jc--; ) hc[jc] || Bb[jc] || (Bb[jc] = $d.call(Fa));
                Bb = Pa(Bb);
              }
              cd.apply(Fa, Bb);
              kb &&
                !oa &&
                0 < Bb.length &&
                1 < Wb + N.length &&
                c.uniqueSort(Fa);
            }
            return kb && ((Ab = Qc), (Yb = Sc)), hc;
          };
        return U ? e(ja) : ja;
      }
      var vb,
        $a,
        Na,
        Yb,
        sb,
        lc,
        zb,
        ab,
        ea,
        ta,
        Ga,
        cb,
        wb,
        jb = "sizzle" + 1 * new Date(),
        Hb = a.document,
        Ab = 0,
        ad = 0,
        Dc = d(),
        rc = d(),
        Pc = d(),
        Nc = function (u, N) {
          return u === N && (lc = !0), 0;
        },
        dd = {}.hasOwnProperty,
        Vc = [],
        $d = Vc.pop,
        ae = Vc.push,
        cd = Vc.push,
        Td = Vc.slice,
        id = function (u, N) {
          for (var U = 0, W = u.length; U < W; U++) if (u[U] === N) return U;
          return -1;
        },
        be = /[\x20\t\r\n\f]+/g,
        Cd = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        ce = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        de = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        ee = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        fe = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
        ge = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        Dd = {
          ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
          CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
          TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
          ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
          PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
          CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
          bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
          needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
        },
        he = /^(?:input|select|textarea|button)$/i,
        ie = /^h\d$/i,
        td = /^[^{]+\{\s*\[native \w/,
        Yd = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Ld = /[+~]/,
        Wc = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
        Xc = function (u, N, U) {
          u = "0x" + N - 65536;
          return u !== u || U
            ? N
            : 0 > u
            ? String.fromCharCode(u + 65536)
            : String.fromCharCode((u >> 10) | 55296, (1023 & u) | 56320);
        },
        Rd = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Sd = function (u, N) {
          return N
            ? "\x00" === u
              ? "\ufffd"
              : u.slice(0, -1) +
                "\\" +
                u.charCodeAt(u.length - 1).toString(16) +
                " "
            : "\\" + u;
        },
        Ud = function () {
          hd();
        },
        Zd = Ua(
          function (u) {
            return !0 === u.disabled && ("form" in u || "label" in u);
          },
          {
            dir: "parentNode",
            next: "legend",
          }
        );
      try {
        cd.apply((Vc = Td.call(Hb.childNodes)), Hb.childNodes),
          Vc[Hb.childNodes.length].nodeType;
      } catch (u) {
        cd = {
          apply: Vc.length
            ? function (N, U) {
                ae.apply(N, Td.call(U));
              }
            : function (N, U) {
                for (var W = N.length, ja = 0; (N[W++] = U[ja++]); );
                N.length = W - 1;
              },
        };
      }
      var gc = (c.support = {});
      var je = (c.isXML = function (u) {
        u = u && (u.ownerDocument || u).documentElement;
        return !!u && "HTML" !== u.nodeName;
      });
      var hd = (c.setDocument = function (u) {
        var N, U;
        u = u ? u.ownerDocument || u : Hb;
        return u !== zb && 9 === u.nodeType && u.documentElement
          ? ((zb = u),
            (ab = zb.documentElement),
            (ea = !je(zb)),
            Hb !== zb &&
              (U = zb.defaultView) &&
              U.top !== U &&
              (U.addEventListener
                ? U.addEventListener("unload", Ud, !1)
                : U.attachEvent && U.attachEvent("onunload", Ud)),
            (gc.attributes = h(function (W) {
              return (W.className = "i"), !W.getAttribute("className");
            })),
            (gc.getElementsByTagName = h(function (W) {
              return (
                W.appendChild(zb.createComment("")),
                !W.getElementsByTagName("*").length
              );
            })),
            (gc.getElementsByClassName = td.test(zb.getElementsByClassName)),
            (gc.getById = h(function (W) {
              return (
                (ab.appendChild(W).id = jb),
                !zb.getElementsByName || !zb.getElementsByName(jb).length
              );
            })),
            gc.getById
              ? ((Lb.filter.ID = function (W) {
                  var ja = W.replace(Wc, Xc);
                  return function (oa) {
                    return oa.getAttribute("id") === ja;
                  };
                }),
                (Lb.find.ID = function (W, ja) {
                  if ("undefined" != typeof ja.getElementById && ea)
                    return (W = ja.getElementById(W)) ? [W] : [];
                }))
              : ((Lb.filter.ID = function (W) {
                  var ja = W.replace(Wc, Xc);
                  return function (oa) {
                    return (
                      (oa =
                        "undefined" != typeof oa.getAttributeNode &&
                        oa.getAttributeNode("id")) && oa.value === ja
                    );
                  };
                }),
                (Lb.find.ID = function (W, ja) {
                  if ("undefined" != typeof ja.getElementById && ea) {
                    var oa,
                      Ja = ja.getElementById(W);
                    if (Ja) {
                      if (
                        ((oa = Ja.getAttributeNode("id")), oa && oa.value === W)
                      )
                        return [Ja];
                      var db = ja.getElementsByName(W);
                      for (ja = 0; (Ja = db[ja++]); )
                        if (
                          ((oa = Ja.getAttributeNode("id")),
                          oa && oa.value === W)
                        )
                          return [Ja];
                    }
                    return [];
                  }
                })),
            (Lb.find.TAG = gc.getElementsByTagName
              ? function (W, ja) {
                  return "undefined" != typeof ja.getElementsByTagName
                    ? ja.getElementsByTagName(W)
                    : gc.qsa
                    ? ja.querySelectorAll(W)
                    : void 0;
                }
              : function (W, ja) {
                  var oa = [],
                    Ja = 0;
                  ja = ja.getElementsByTagName(W);
                  if ("*" === W) {
                    for (; (W = ja[Ja++]); ) 1 === W.nodeType && oa.push(W);
                    return oa;
                  }
                  return ja;
                }),
            (Lb.find.CLASS =
              gc.getElementsByClassName &&
              function (W, ja) {
                if ("undefined" != typeof ja.getElementsByClassName && ea)
                  return ja.getElementsByClassName(W);
              }),
            (Ga = []),
            (ta = []),
            (gc.qsa = td.test(zb.querySelectorAll)) &&
              (h(function (W) {
                ab.appendChild(W).innerHTML =
                  "<a id='" +
                  jb +
                  "'></a><select id='" +
                  jb +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>";
                W.querySelectorAll("[msallowcapture^='']").length &&
                  ta.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                W.querySelectorAll("[selected]").length ||
                  ta.push(
                    "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
                  );
                W.querySelectorAll("[id~=" + jb + "-]").length || ta.push("~=");
                W.querySelectorAll(":checked").length || ta.push(":checked");
                W.querySelectorAll("a#" + jb + "+*").length ||
                  ta.push(".#.+[+~]");
              }),
              h(function (W) {
                W.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var ja = zb.createElement("input");
                ja.setAttribute("type", "hidden");
                W.appendChild(ja).setAttribute("name", "D");
                W.querySelectorAll("[name=d]").length &&
                  ta.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                2 !== W.querySelectorAll(":enabled").length &&
                  ta.push(":enabled", ":disabled");
                ab.appendChild(W).disabled = !0;
                2 !== W.querySelectorAll(":disabled").length &&
                  ta.push(":enabled", ":disabled");
                W.querySelectorAll("*,:x");
                ta.push(",.*:");
              })),
            (gc.matchesSelector = td.test(
              (cb =
                ab.matches ||
                ab.webkitMatchesSelector ||
                ab.mozMatchesSelector ||
                ab.oMatchesSelector ||
                ab.msMatchesSelector)
            )) &&
              h(function (W) {
                gc.disconnectedMatch = cb.call(W, "*");
                cb.call(W, "[s!='']:x");
                Ga.push(
                  "!=",
                  ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
                );
              }),
            (ta = ta.length && new RegExp(ta.join("|"))),
            (Ga = Ga.length && new RegExp(Ga.join("|"))),
            (N = td.test(ab.compareDocumentPosition)),
            (wb =
              N || td.test(ab.contains)
                ? function (W, ja) {
                    var oa = 9 === W.nodeType ? W.documentElement : W;
                    ja = ja && ja.parentNode;
                    return (
                      W === ja ||
                      !(
                        !ja ||
                        1 !== ja.nodeType ||
                        !(oa.contains
                          ? oa.contains(ja)
                          : W.compareDocumentPosition &&
                            16 & W.compareDocumentPosition(ja))
                      )
                    );
                  }
                : function (W, ja) {
                    if (ja)
                      for (; (ja = ja.parentNode); ) if (ja === W) return !0;
                    return !1;
                  }),
            (Nc = N
              ? function (W, ja) {
                  if (W === ja) return (lc = !0), 0;
                  var oa =
                    !W.compareDocumentPosition - !ja.compareDocumentPosition;
                  return oa
                    ? oa
                    : ((oa =
                        (W.ownerDocument || W) === (ja.ownerDocument || ja)
                          ? W.compareDocumentPosition(ja)
                          : 1),
                      1 & oa ||
                      (!gc.sortDetached && ja.compareDocumentPosition(W) === oa)
                        ? W === zb || (W.ownerDocument === Hb && wb(Hb, W))
                          ? -1
                          : ja === zb || (ja.ownerDocument === Hb && wb(Hb, ja))
                          ? 1
                          : sb
                          ? id(sb, W) - id(sb, ja)
                          : 0
                        : 4 & oa
                        ? -1
                        : 1);
                }
              : function (W, ja) {
                  if (W === ja) return (lc = !0), 0;
                  var oa = 0,
                    Ja = W.parentNode,
                    db = ja.parentNode,
                    Fa = [W],
                    kb = [ja];
                  if (!Ja || !db)
                    return W === zb
                      ? -1
                      : ja === zb
                      ? 1
                      : Ja
                      ? -1
                      : db
                      ? 1
                      : sb
                      ? id(sb, W) - id(sb, ja)
                      : 0;
                  if (Ja === db) return q(W, ja);
                  for (; (W = W.parentNode); ) Fa.unshift(W);
                  for (W = ja; (W = W.parentNode); ) kb.unshift(W);
                  for (; Fa[oa] === kb[oa]; ) oa++;
                  return oa
                    ? q(Fa[oa], kb[oa])
                    : Fa[oa] === Hb
                    ? -1
                    : kb[oa] === Hb
                    ? 1
                    : 0;
                }),
            zb)
          : zb;
      });
      c.matches = function (u, N) {
        return c(u, null, null, N);
      };
      c.matchesSelector = function (u, N) {
        if (
          ((u.ownerDocument || u) !== zb && hd(u),
          (N = N.replace(ee, "='$1']")),
          !(
            !gc.matchesSelector ||
            !ea ||
            Pc[N + " "] ||
            (Ga && Ga.test(N)) ||
            (ta && ta.test(N))
          ))
        )
          try {
            var U = cb.call(u, N);
            if (
              U ||
              gc.disconnectedMatch ||
              (u.document && 11 !== u.document.nodeType)
            )
              return U;
          } catch (W) {}
        return 0 < c(N, zb, null, [u]).length;
      };
      c.contains = function (u, N) {
        return (u.ownerDocument || u) !== zb && hd(u), wb(u, N);
      };
      c.attr = function (u, N) {
        (u.ownerDocument || u) !== zb && hd(u);
        var U = Lb.attrHandle[N.toLowerCase()];
        U =
          U && dd.call(Lb.attrHandle, N.toLowerCase()) ? U(u, N, !ea) : void 0;
        return void 0 !== U
          ? U
          : gc.attributes || !ea
          ? u.getAttribute(N)
          : (U = u.getAttributeNode(N)) && U.specified
          ? U.value
          : null;
      };
      c.escape = function (u) {
        return (u + "").replace(Rd, Sd);
      };
      c.error = function (u) {
        throw Error("Syntax error, unrecognized expression: " + u);
      };
      c.uniqueSort = function (u) {
        var N,
          U = [],
          W = 0,
          ja = 0;
        if (
          ((lc = !gc.detectDuplicates),
          (sb = !gc.sortStable && u.slice(0)),
          u.sort(Nc),
          lc)
        ) {
          for (; (N = u[ja++]); ) N === u[ja] && (W = U.push(ja));
          for (; W--; ) u.splice(U[W], 1);
        }
        return (sb = null), u;
      };
      var Nd = (c.getText = function (u) {
        var N,
          U = "",
          W = 0;
        if ((N = u.nodeType))
          if (1 === N || 9 === N || 11 === N) {
            if ("string" == typeof u.textContent) return u.textContent;
            for (u = u.firstChild; u; u = u.nextSibling) U += Nd(u);
          } else {
            if (3 === N || 4 === N) return u.nodeValue;
          }
        else for (; (N = u[W++]); ) U += Nd(N);
        return U;
      });
      var Lb = (c.selectors = {
        cacheLength: 50,
        createPseudo: e,
        match: Dd,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0,
          },
          " ": {
            dir: "parentNode",
          },
          "+": {
            dir: "previousSibling",
            first: !0,
          },
          "~": {
            dir: "previousSibling",
          },
        },
        preFilter: {
          ATTR: function (u) {
            return (
              (u[1] = u[1].replace(Wc, Xc)),
              (u[3] = (u[3] || u[4] || u[5] || "").replace(Wc, Xc)),
              "~=" === u[2] && (u[3] = " " + u[3] + " "),
              u.slice(0, 4)
            );
          },
          CHILD: function (u) {
            return (
              (u[1] = u[1].toLowerCase()),
              "nth" === u[1].slice(0, 3)
                ? (u[3] || c.error(u[0]),
                  (u[4] = +(u[4]
                    ? u[5] + (u[6] || 1)
                    : 2 * ("even" === u[3] || "odd" === u[3]))),
                  (u[5] = +(u[7] + u[8] || "odd" === u[3])))
                : u[3] && c.error(u[0]),
              u
            );
          },
          PSEUDO: function (u) {
            var N,
              U = !u[6] && u[2];
            return Dd.CHILD.test(u[0])
              ? null
              : (u[3]
                  ? (u[2] = u[4] || u[5] || "")
                  : U &&
                    fe.test(U) &&
                    (N = Bd(U, !0)) &&
                    (N = U.indexOf(")", U.length - N) - U.length) &&
                    ((u[0] = u[0].slice(0, N)), (u[2] = U.slice(0, N))),
                u.slice(0, 3));
          },
        },
        filter: {
          TAG: function (u) {
            var N = u.replace(Wc, Xc).toLowerCase();
            return "*" === u
              ? function () {
                  return !0;
                }
              : function (U) {
                  return U.nodeName && U.nodeName.toLowerCase() === N;
                };
          },
          CLASS: function (u) {
            var N = Dc[u + " "];
            return (
              N ||
              ((N = new RegExp(
                "(^|[\\x20\\t\\r\\n\\f])" + u + "([\\x20\\t\\r\\n\\f]|$)"
              )),
              Dc(u, function (U) {
                return N.test(
                  ("string" == typeof U.className && U.className) ||
                    ("undefined" != typeof U.getAttribute &&
                      U.getAttribute("class")) ||
                    ""
                );
              }))
            );
          },
          ATTR: function (u, N, U) {
            return function (W) {
              W = c.attr(W, u);
              return null == W
                ? "!=" === N
                : !N ||
                    ((W += ""),
                    "=" === N
                      ? W === U
                      : "!=" === N
                      ? W !== U
                      : "^=" === N
                      ? U && 0 === W.indexOf(U)
                      : "*=" === N
                      ? U && -1 < W.indexOf(U)
                      : "$=" === N
                      ? U && W.slice(-U.length) === U
                      : "~=" === N
                      ? -1 < (" " + W.replace(be, " ") + " ").indexOf(U)
                      : "|=" === N &&
                        (W === U || W.slice(0, U.length + 1) === U + "-"));
            };
          },
          CHILD: function (u, N, U, W, ja) {
            var oa = "nth" !== u.slice(0, 3),
              Ja = "last" !== u.slice(-4),
              db = "of-type" === N;
            return 1 === W && 0 === ja
              ? function (Fa) {
                  return !!Fa.parentNode;
                }
              : function (Fa, kb, mb) {
                  var gb, Wb;
                  kb = oa !== Ja ? "nextSibling" : "previousSibling";
                  var jc = Fa.parentNode,
                    hc = db && Fa.nodeName.toLowerCase();
                  mb = !mb && !db;
                  var Bb = !1;
                  if (jc) {
                    if (oa) {
                      for (; kb; ) {
                        for (gb = Fa; (gb = gb[kb]); )
                          if (
                            db
                              ? gb.nodeName.toLowerCase() === hc
                              : 1 === gb.nodeType
                          )
                            return !1;
                        var Sc = (kb = "only" === u && !Sc && "nextSibling");
                      }
                      return !0;
                    }
                    if (
                      ((Sc = [Ja ? jc.firstChild : jc.lastChild]), Ja && mb)
                    ) {
                      gb = jc;
                      var Bc = gb[jb] || (gb[jb] = {});
                      var Qc = Bc[gb.uniqueID] || (Bc[gb.uniqueID] = {});
                      var uc = Qc[u] || [];
                      Bb = (Wb = uc[0] === Ab && uc[1]) && uc[2];
                      for (
                        gb = Wb && jc.childNodes[Wb];
                        (gb =
                          (++Wb && gb && gb[kb]) || (Bb = Wb = 0) || Sc.pop());

                      )
                        if (1 === gb.nodeType && ++Bb && gb === Fa) {
                          Qc[u] = [Ab, Wb, Bb];
                          break;
                        }
                    } else if (
                      (mb &&
                        ((gb = Fa),
                        (Bc = gb[jb] || (gb[jb] = {})),
                        (Qc = Bc[gb.uniqueID] || (Bc[gb.uniqueID] = {})),
                        (uc = Qc[u] || []),
                        (Wb = uc[0] === Ab && uc[1]),
                        (Bb = Wb)),
                      !1 === Bb)
                    )
                      for (
                        ;
                        (gb =
                          (++Wb && gb && gb[kb]) ||
                          (Bb = Wb = 0) ||
                          Sc.pop()) &&
                        ((db
                          ? gb.nodeName.toLowerCase() !== hc
                          : 1 !== gb.nodeType) ||
                          !++Bb ||
                          (mb &&
                            ((Bc = gb[jb] || (gb[jb] = {})),
                            (Qc = Bc[gb.uniqueID] || (Bc[gb.uniqueID] = {})),
                            (Qc[u] = [Ab, Bb])),
                          gb !== Fa));

                      );
                    return (
                      (Bb -= ja), Bb === W || (0 === Bb % W && 0 <= Bb / W)
                    );
                  }
                };
          },
          PSEUDO: function (u, N) {
            var U,
              W =
                Lb.pseudos[u] ||
                Lb.setFilters[u.toLowerCase()] ||
                c.error("unsupported pseudo: " + u);
            return W[jb]
              ? W(N)
              : 1 < W.length
              ? ((U = [u, u, "", N]),
                Lb.setFilters.hasOwnProperty(u.toLowerCase())
                  ? e(function (ja, oa) {
                      for (var Ja, db = W(ja, N), Fa = db.length; Fa--; )
                        (Ja = id(ja, db[Fa])), (ja[Ja] = !(oa[Ja] = db[Fa]));
                    })
                  : function (ja) {
                      return W(ja, 0, U);
                    })
              : W;
          },
        },
        pseudos: {
          not: e(function (u) {
            var N = [],
              U = [],
              W = $a(u.replace(Cd, "$1"));
            return W[jb]
              ? e(function (ja, oa, Ja, db) {
                  var Fa;
                  Ja = W(ja, null, db, []);
                  for (db = ja.length; db--; )
                    (Fa = Ja[db]) && (ja[db] = !(oa[db] = Fa));
                })
              : function (ja, oa, Ja) {
                  return (
                    (N[0] = ja), W(N, null, Ja, U), (N[0] = null), !U.pop()
                  );
                };
          }),
          has: e(function (u) {
            return function (N) {
              return 0 < c(u, N).length;
            };
          }),
          contains: e(function (u) {
            return (
              (u = u.replace(Wc, Xc)),
              function (N) {
                return -1 < (N.textContent || N.innerText || Nd(N)).indexOf(u);
              }
            );
          }),
          lang: e(function (u) {
            return (
              ge.test(u || "") || c.error("unsupported lang: " + u),
              (u = u.replace(Wc, Xc).toLowerCase()),
              function (N) {
                var U;
                do
                  if (
                    (U = ea
                      ? N.lang
                      : N.getAttribute("xml:lang") || N.getAttribute("lang"))
                  )
                    return (
                      (U = U.toLowerCase()), U === u || 0 === U.indexOf(u + "-")
                    );
                while ((N = N.parentNode) && 1 === N.nodeType);
                return !1;
              }
            );
          }),
          target: function (u) {
            var N = a.location && a.location.hash;
            return N && N.slice(1) === u.id;
          },
          root: function (u) {
            return u === ab;
          },
          focus: function (u) {
            return (
              u === zb.activeElement &&
              (!zb.hasFocus || zb.hasFocus()) &&
              !!(u.type || u.href || ~u.tabIndex)
            );
          },
          enabled: ca(!1),
          disabled: ca(!0),
          checked: function (u) {
            var N = u.nodeName.toLowerCase();
            return (
              ("input" === N && !!u.checked) || ("option" === N && !!u.selected)
            );
          },
          selected: function (u) {
            return (
              u.parentNode && u.parentNode.selectedIndex, !0 === u.selected
            );
          },
          empty: function (u) {
            for (u = u.firstChild; u; u = u.nextSibling)
              if (6 > u.nodeType) return !1;
            return !0;
          },
          parent: function (u) {
            return !Lb.pseudos.empty(u);
          },
          header: function (u) {
            return ie.test(u.nodeName);
          },
          input: function (u) {
            return he.test(u.nodeName);
          },
          button: function (u) {
            var N = u.nodeName.toLowerCase();
            return ("input" === N && "button" === u.type) || "button" === N;
          },
          text: function (u) {
            var N;
            return (
              "input" === u.nodeName.toLowerCase() &&
              "text" === u.type &&
              (null == (N = u.getAttribute("type")) ||
                "text" === N.toLowerCase())
            );
          },
          first: T(function () {
            return [0];
          }),
          last: T(function (u, N) {
            return [N - 1];
          }),
          eq: T(function (u, N, U) {
            return [0 > U ? U + N : U];
          }),
          even: T(function (u, N) {
            for (var U = 0; U < N; U += 2) u.push(U);
            return u;
          }),
          odd: T(function (u, N) {
            for (var U = 1; U < N; U += 2) u.push(U);
            return u;
          }),
          lt: T(function (u, N, U) {
            for (N = 0 > U ? U + N : U; 0 <= --N; ) u.push(N);
            return u;
          }),
          gt: T(function (u, N, U) {
            for (U = 0 > U ? U + N : U; ++U < N; ) u.push(U);
            return u;
          }),
        },
      });
      Lb.pseudos.nth = Lb.pseudos.eq;
      for (vb in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      })
        Lb.pseudos[vb] = I(vb);
      for (vb in {
        submit: !0,
        reset: !0,
      })
        Lb.pseudos[vb] = J(vb);
      Ra.prototype = Lb.filters = Lb.pseudos;
      Lb.setFilters = new Ra();
      var Bd = (c.tokenize = function (u, N) {
        var U, W, ja, oa, Ja;
        if ((oa = rc[u + " "])) return N ? 0 : oa.slice(0);
        oa = u;
        var db = [];
        for (Ja = Lb.preFilter; oa; ) {
          (Fa && !(U = ce.exec(oa))) ||
            (U && (oa = oa.slice(U[0].length) || oa), db.push((W = [])));
          var Fa = !1;
          (U = de.exec(oa)) &&
            ((Fa = U.shift()),
            W.push({
              value: Fa,
              type: U[0].replace(Cd, " "),
            }),
            (oa = oa.slice(Fa.length)));
          for (ja in Lb.filter)
            !(U = Dd[ja].exec(oa)) ||
              (Ja[ja] && !(U = Ja[ja](U))) ||
              ((Fa = U.shift()),
              W.push({
                value: Fa,
                type: ja,
                matches: U,
              }),
              (oa = oa.slice(Fa.length)));
          if (!Fa) break;
        }
        return N ? oa.length : oa ? c.error(u) : rc(u, db).slice(0);
      });
      return (
        ($a = c.compile = function (u, N) {
          var U,
            W = [],
            ja = [],
            oa = Pc[u + " "];
          if (!oa) {
            N || (N = Bd(u));
            for (U = N.length; U--; )
              (oa = ra(N[U])), oa[jb] ? W.push(oa) : ja.push(oa);
            oa = Pc(u, Ba(ja, W));
            oa.selector = u;
          }
          return oa;
        }),
        (Na = c.select = function (u, N, U, W) {
          var ja,
            oa,
            Ja,
            db,
            Fa,
            kb = "function" == typeof u && u,
            mb = !W && Bd((u = kb.selector || u));
          if (((U = U || []), 1 === mb.length)) {
            if (
              ((oa = mb[0] = mb[0].slice(0)),
              2 < oa.length &&
                "ID" === (Ja = oa[0]).type &&
                9 === N.nodeType &&
                ea &&
                Lb.relative[oa[1].type])
            ) {
              if (
                ((N = (Lb.find.ID(Ja.matches[0].replace(Wc, Xc), N) || [])[0]),
                !N)
              )
                return U;
              kb && (N = N.parentNode);
              u = u.slice(oa.shift().value.length);
            }
            for (
              ja = Dd.needsContext.test(u) ? 0 : oa.length;
              ja-- && ((Ja = oa[ja]), !Lb.relative[(db = Ja.type)]);

            )
              if (
                (Fa = Lb.find[db]) &&
                (W = Fa(
                  Ja.matches[0].replace(Wc, Xc),
                  (Ld.test(oa[0].type) && va(N.parentNode)) || N
                ))
              ) {
                if ((oa.splice(ja, 1), (u = W.length && rb(oa)), !u))
                  return cd.apply(U, W), U;
                break;
              }
          }
          return (
            (kb || $a(u, mb))(
              W,
              N,
              !ea,
              U,
              !N || (Ld.test(u) && va(N.parentNode)) || N
            ),
            U
          );
        }),
        (gc.sortStable = jb.split("").sort(Nc).join("") === jb),
        (gc.detectDuplicates = !!lc),
        hd(),
        (gc.sortDetached = h(function (u) {
          return 1 & u.compareDocumentPosition(zb.createElement("fieldset"));
        })),
        h(function (u) {
          return (
            (u.innerHTML = "<a href='#'></a>"),
            "#" === u.firstChild.getAttribute("href")
          );
        }) ||
          m("type|href|height|width", function (u, N, U) {
            if (!U)
              return u.getAttribute(N, "type" === N.toLowerCase() ? 1 : 2);
          }),
        (gc.attributes &&
          h(function (u) {
            return (
              (u.innerHTML = "<input/>"),
              u.firstChild.setAttribute("value", ""),
              "" === u.firstChild.getAttribute("value")
            );
          })) ||
          m("value", function (u, N, U) {
            if (!U && "input" === u.nodeName.toLowerCase())
              return u.defaultValue;
          }),
        h(function (u) {
          return null == u.getAttribute("disabled");
        }) ||
          m(
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            function (u, N, U) {
              var W;
              if (!U)
                return !0 === u[N]
                  ? N.toLowerCase()
                  : (W = u.getAttributeNode(N)) && W.specified
                  ? W.value
                  : null;
            }
          ),
        c
      );
    })(la);
    k.find = Jb;
    k.expr = Jb.selectors;
    k.expr[":"] = k.expr.pseudos;
    k.uniqueSort = k.unique = Jb.uniqueSort;
    k.text = Jb.getText;
    k.isXMLDoc = Jb.isXML;
    k.contains = Jb.contains;
    k.escapeSelector = Jb.escape;
    var K = function (a, c, d) {
        for (var e = [], h = void 0 !== d; (a = a[c]) && 9 !== a.nodeType; )
          if (1 === a.nodeType) {
            if (h && k(a).is(d)) break;
            e.push(a);
          }
        return e;
      },
      Sb = function (a, c) {
        for (var d = []; a; a = a.nextSibling)
          1 === a.nodeType && a !== c && d.push(a);
        return d;
      },
      mc = k.expr.match.needsContext,
      $c = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      pd = /^.[^:#\[\.,]*$/;
    k.filter = function (a, c, d) {
      var e = c[0];
      return (
        d && (a = ":not(" + a + ")"),
        1 === c.length && 1 === e.nodeType
          ? k.find.matchesSelector(e, a)
            ? [e]
            : []
          : k.find.matches(
              a,
              k.grep(c, function (h) {
                return 1 === h.nodeType;
              })
            )
      );
    };
    k.fn.extend({
      find: function (a) {
        var c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            k(a).filter(function () {
              for (c = 0; c < d; c++) if (k.contains(e[c], this)) return !0;
            })
          );
        var h = this.pushStack([]);
        for (c = 0; c < d; c++) k.find(a, e[c], h);
        return 1 < d ? k.uniqueSort(h) : h;
      },
      filter: function (a) {
        return this.pushStack(ib(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(ib(this, a || [], !0));
      },
      is: function (a) {
        return !!ib(
          this,
          "string" == typeof a && mc.test(a) ? k(a) : a || [],
          !1
        ).length;
      },
    });
    var rd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function (a, c, d) {
      var e, h;
      if (!a) return this;
      if (((d = d || od), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length
              ? [null, a, null]
              : rd.exec(a)),
          !e || (!e[1] && c))
        )
          return !c || c.jquery
            ? (c || d).find(a)
            : this.constructor(c).find(a);
        if (e[1]) {
          if (
            ((c = c instanceof k ? c[0] : c),
            k.merge(
              this,
              k.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : ha, !0)
            ),
            $c.test(e[1]) && k.isPlainObject(c))
          )
            for (e in c)
              k.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
          return this;
        }
        return (
          (h = ha.getElementById(e[2])),
          h && ((this[0] = h), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : k.isFunction(a)
        ? void 0 !== d.ready
          ? d.ready(a)
          : a(k)
        : k.makeArray(a, this);
    }).prototype = k.fn;
    var od = k(ha);
    var wd = /^(?:parents|prev(?:Until|All))/,
      xd = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0,
      };
    k.fn.extend({
      has: function (a) {
        var c = k(a, this),
          d = c.length;
        return this.filter(function () {
          for (var e = 0; e < d; e++) if (k.contains(this, c[e])) return !0;
        });
      },
      closest: function (a, c) {
        var d,
          e = 0,
          h = this.length,
          m = [],
          q = "string" != typeof a && k(a);
        if (!mc.test(a))
          for (; e < h; e++)
            for (d = this[e]; d && d !== c; d = d.parentNode)
              if (
                11 > d.nodeType &&
                (q
                  ? -1 < q.index(d)
                  : 1 === d.nodeType && k.find.matchesSelector(d, a))
              ) {
                m.push(d);
                break;
              }
        return this.pushStack(1 < m.length ? k.uniqueSort(m) : m);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? ic.call(k(a), this[0])
            : ic.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, c) {
        return this.pushStack(k.uniqueSort(k.merge(this.get(), k(a, c))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
    k.each(
      {
        parent: function (a) {
          return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        parents: function (a) {
          return K(a, "parentNode");
        },
        parentsUntil: function (a, c, d) {
          return K(a, "parentNode", d);
        },
        next: function (a) {
          return Gb(a, "nextSibling");
        },
        prev: function (a) {
          return Gb(a, "previousSibling");
        },
        nextAll: function (a) {
          return K(a, "nextSibling");
        },
        prevAll: function (a) {
          return K(a, "previousSibling");
        },
        nextUntil: function (a, c, d) {
          return K(a, "nextSibling", d);
        },
        prevUntil: function (a, c, d) {
          return K(a, "previousSibling", d);
        },
        siblings: function (a) {
          return Sb((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return Sb(a.firstChild);
        },
        contents: function (a) {
          return qb(a, "iframe")
            ? a.contentDocument
            : (qb(a, "template") && (a = a.content || a),
              k.merge([], a.childNodes));
        },
      },
      function (a, c) {
        k.fn[a] = function (d, e) {
          var h = k.map(this, c, d);
          return (
            "Until" !== a.slice(-5) && (e = d),
            e && "string" == typeof e && (h = k.filter(e, h)),
            1 < this.length &&
              (xd[a] || k.uniqueSort(h), wd.test(a) && h.reverse()),
            this.pushStack(h)
          );
        };
      }
    );
    var Nb = /[^\x20\t\r\n\f]+/g;
    k.Callbacks = function (a) {
      a = "string" == typeof a ? Ta(a) : k.extend({}, a);
      var c,
        d,
        e,
        h,
        m = [],
        q = [],
        I = -1,
        J = function () {
          h = h || a.once;
          for (e = c = !0; q.length; I = -1)
            for (d = q.shift(); ++I < m.length; )
              !1 === m[I].apply(d[0], d[1]) &&
                a.stopOnFalse &&
                ((I = m.length), (d = !1));
          a.memory || (d = !1);
          c = !1;
          h && (m = d ? [] : "");
        },
        ca = {
          add: function () {
            return (
              m &&
                (d && !c && ((I = m.length - 1), q.push(d)),
                (function Ra(va) {
                  k.each(va, function (rb, Ua) {
                    k.isFunction(Ua)
                      ? (a.unique && ca.has(Ua)) || m.push(Ua)
                      : Ua && Ua.length && "string" !== k.type(Ua) && Ra(Ua);
                  });
                })(arguments),
                d && !c && J()),
              this
            );
          },
          remove: function () {
            return (
              k.each(arguments, function (T, va) {
                for (var Ra; -1 < (Ra = k.inArray(va, m, Ra)); )
                  m.splice(Ra, 1), Ra <= I && I--;
              }),
              this
            );
          },
          has: function (T) {
            return T ? -1 < k.inArray(T, m) : 0 < m.length;
          },
          empty: function () {
            return m && (m = []), this;
          },
          disable: function () {
            return (h = q = []), (m = d = ""), this;
          },
          disabled: function () {
            return !m;
          },
          lock: function () {
            return (h = q = []), d || c || (m = d = ""), this;
          },
          locked: function () {
            return !!h;
          },
          fireWith: function (T, va) {
            return (
              h ||
                ((va = va || []),
                (va = [T, va.slice ? va.slice() : va]),
                q.push(va),
                c || J()),
              this
            );
          },
          fire: function () {
            return ca.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!e;
          },
        };
      return ca;
    };
    k.extend({
      Deferred: function (a) {
        var c = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          d = "pending",
          e = {
            state: function () {
              return d;
            },
            always: function () {
              return h.done(arguments).fail(arguments), this;
            },
            catch: function (m) {
              return e.then(null, m);
            },
            pipe: function () {
              var m = arguments;
              return k
                .Deferred(function (q) {
                  k.each(c, function (I, J) {
                    var ca = k.isFunction(m[J[4]]) && m[J[4]];
                    h[J[1]](function () {
                      var T = ca && ca.apply(this, arguments);
                      T && k.isFunction(T.promise)
                        ? T.promise()
                            .progress(q.notify)
                            .done(q.resolve)
                            .fail(q.reject)
                        : q[J[0] + "With"](this, ca ? [T] : arguments);
                    });
                  });
                  m = null;
                })
                .promise();
            },
            then: function (m, q, I) {
              function J(T, va, Ra, rb) {
                return function () {
                  var Ua = this,
                    ub = arguments,
                    Pa = function () {
                      var ra;
                      if (!(T < ca)) {
                        if (((ra = Ra.apply(Ua, ub)), ra === va.promise()))
                          throw new TypeError("Thenable self-resolution");
                        var Ba =
                          ra &&
                          ("object" == typeof ra || "function" == typeof ra) &&
                          ra.then;
                        k.isFunction(Ba)
                          ? rb
                            ? Ba.call(ra, J(ca, va, tb, rb), J(ca, va, yb, rb))
                            : (ca++,
                              Ba.call(
                                ra,
                                J(ca, va, tb, rb),
                                J(ca, va, yb, rb),
                                J(ca, va, tb, va.notifyWith)
                              ))
                          : (Ra !== tb && ((Ua = void 0), (ub = [ra])),
                            (rb || va.resolveWith)(Ua, ub));
                      }
                    },
                    wc = rb
                      ? Pa
                      : function () {
                          try {
                            Pa();
                          } catch (ra) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(ra, wc.stackTrace),
                              T + 1 >= ca &&
                                (Ra !== yb && ((Ua = void 0), (ub = [ra])),
                                va.rejectWith(Ua, ub));
                          }
                        };
                  T
                    ? wc()
                    : (k.Deferred.getStackHook &&
                        (wc.stackTrace = k.Deferred.getStackHook()),
                      la.setTimeout(wc));
                };
              }
              var ca = 0;
              return k
                .Deferred(function (T) {
                  c[0][3].add(J(0, T, k.isFunction(I) ? I : tb, T.notifyWith));
                  c[1][3].add(J(0, T, k.isFunction(m) ? m : tb));
                  c[2][3].add(J(0, T, k.isFunction(q) ? q : yb));
                })
                .promise();
            },
            promise: function (m) {
              return null != m ? k.extend(m, e) : e;
            },
          },
          h = {};
        return (
          k.each(c, function (m, q) {
            var I = q[2],
              J = q[5];
            e[q[1]] = I.add;
            J &&
              I.add(
                function () {
                  d = J;
                },
                c[3 - m][2].disable,
                c[0][2].lock
              );
            I.add(q[3].fire);
            h[q[0]] = function () {
              return (
                h[q[0] + "With"](this === h ? void 0 : this, arguments), this
              );
            };
            h[q[0] + "With"] = I.fireWith;
          }),
          e.promise(h),
          a && a.call(h, h),
          h
        );
      },
      when: function (a) {
        var c = arguments.length,
          d = c,
          e = Array(d),
          h = pa.call(arguments),
          m = k.Deferred(),
          q = function (I) {
            return function (J) {
              e[I] = this;
              h[I] = 1 < arguments.length ? pa.call(arguments) : J;
              --c || m.resolveWith(e, h);
            };
          };
        if (
          1 >= c &&
          (ob(a, m.done(q(d)).resolve, m.reject, !c),
          "pending" === m.state() || k.isFunction(h[d] && h[d].then))
        )
          return m.then();
        for (; d--; ) ob(h[d], q(d), m.reject);
        return m.promise();
      },
    });
    var Zc = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function (a, c) {
      la.console &&
        la.console.warn &&
        a &&
        Zc.test(a.name) &&
        la.console.warn("jQuery.Deferred exception: " + a.message, a.stack, c);
    };
    k.readyException = function (a) {
      la.setTimeout(function () {
        throw a;
      });
    };
    var Tc = k.Deferred();
    k.fn.ready = function (a) {
      return (
        Tc.then(a)["catch"](function (c) {
          k.readyException(c);
        }),
        this
      );
    };
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (a) {
        (!0 === a ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0),
          (!0 !== a && 0 < --k.readyWait) || Tc.resolveWith(ha, [k]));
      },
    });
    k.ready.then = Tc.then;
    "complete" === ha.readyState ||
    ("loading" !== ha.readyState && !ha.documentElement.doScroll)
      ? la.setTimeout(k.ready)
      : (ha.addEventListener("DOMContentLoaded", dc),
        la.addEventListener("load", dc));
    var Jc = function (a, c, d, e, h, m, q) {
        var I = 0,
          J = a.length,
          ca = null == d;
        if ("object" === k.type(d))
          for (I in ((h = !0), d)) Jc(a, c, I, d[I], !0, m, q);
        else if (
          void 0 !== e &&
          ((h = !0),
          k.isFunction(e) || (q = !0),
          ca &&
            (q
              ? (c.call(a, e), (c = null))
              : ((ca = c),
                (c = function (T, va, Ra) {
                  return ca.call(k(T), Ra);
                }))),
          c)
        )
          for (; I < J; I++) c(a[I], d, q ? e : e.call(a[I], I, c(a[I], d)));
        return h ? a : ca ? c.call(a) : J ? c(a[0], d) : m;
      },
      bd = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
      };
    xc.uid = 1;
    xc.prototype = {
      cache: function (a) {
        var c = a[this.expando];
        return (
          c ||
            ((c = {}),
            bd(a) &&
              (a.nodeType
                ? (a[this.expando] = c)
                : Object.defineProperty(a, this.expando, {
                    value: c,
                    configurable: !0,
                  }))),
          c
        );
      },
      set: function (a, c, d) {
        var e;
        a = this.cache(a);
        if ("string" == typeof c) a[k.camelCase(c)] = d;
        else for (e in c) a[k.camelCase(e)] = c[e];
        return a;
      },
      get: function (a, c) {
        return void 0 === c
          ? this.cache(a)
          : a[this.expando] && a[this.expando][k.camelCase(c)];
      },
      access: function (a, c, d) {
        return void 0 === c || (c && "string" == typeof c && void 0 === d)
          ? this.get(a, c)
          : (this.set(a, c, d), void 0 !== d ? d : c);
      },
      remove: function (a, c) {
        var d,
          e = a[this.expando];
        if (void 0 !== e) {
          if (void 0 !== c)
            for (
              Array.isArray(c)
                ? (c = c.map(k.camelCase))
                : ((c = k.camelCase(c)),
                  (c = (c in e) ? [c] : c.match(Nb) || [])),
                d = c.length;
              d--;

            )
              delete e[c[d]];
          (void 0 === c || k.isEmptyObject(e)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        a = a[this.expando];
        return void 0 !== a && !k.isEmptyObject(a);
      },
    };
    var lb = new xc(),
      Ob = new xc(),
      zd = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      kd = /[A-Z]/g;
    k.extend({
      hasData: function (a) {
        return Ob.hasData(a) || lb.hasData(a);
      },
      data: function (a, c, d) {
        return Ob.access(a, c, d);
      },
      removeData: function (a, c) {
        Ob.remove(a, c);
      },
      _data: function (a, c, d) {
        return lb.access(a, c, d);
      },
      _removeData: function (a, c) {
        lb.remove(a, c);
      },
    });
    k.fn.extend({
      data: function (a, c) {
        var d,
          e,
          h,
          m = this[0],
          q = m && m.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((h = Ob.get(m)), 1 === m.nodeType && !lb.get(m, "hasDataAttrs"))
          ) {
            for (d = q.length; d--; )
              q[d] &&
                ((e = q[d].name),
                0 === e.indexOf("data-") &&
                  ((e = k.camelCase(e.slice(5))), Cc(m, e, h[e])));
            lb.set(m, "hasDataAttrs", !0);
          }
          return h;
        }
        return "object" == typeof a
          ? this.each(function () {
              Ob.set(this, a);
            })
          : Jc(
              this,
              function (I) {
                var J;
                if (m && void 0 === I) {
                  if (
                    ((J = Ob.get(m, a)), void 0 !== J) ||
                    ((J = Cc(m, a)), void 0 !== J)
                  )
                    return J;
                } else
                  this.each(function () {
                    Ob.set(this, a, I);
                  });
              },
              null,
              c,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          Ob.remove(this, a);
        });
      },
    });
    k.extend({
      queue: function (a, c, d) {
        var e;
        if (a)
          return (
            (c = (c || "fx") + "queue"),
            (e = lb.get(a, c)),
            d &&
              (!e || Array.isArray(d)
                ? (e = lb.access(a, c, k.makeArray(d)))
                : e.push(d)),
            e || []
          );
      },
      dequeue: function (a, c) {
        c = c || "fx";
        var d = k.queue(a, c),
          e = d.length,
          h = d.shift(),
          m = k._queueHooks(a, c),
          q = function () {
            k.dequeue(a, c);
          };
        "inprogress" === h && ((h = d.shift()), e--);
        h &&
          ("fx" === c && d.unshift("inprogress"),
          delete m.stop,
          h.call(a, q, m));
        !e && m && m.empty.fire();
      },
      _queueHooks: function (a, c) {
        var d = c + "queueHooks";
        return (
          lb.get(a, d) ||
          lb.access(a, d, {
            empty: k.Callbacks("once memory").add(function () {
              lb.remove(a, [c + "queue", d]);
            }),
          })
        );
      },
    });
    k.fn.extend({
      queue: function (a, c) {
        var d = 2;
        return (
          "string" != typeof a && ((c = a), (a = "fx"), d--),
          arguments.length < d
            ? k.queue(this[0], a)
            : void 0 === c
            ? this
            : this.each(function () {
                var e = k.queue(this, a, c);
                k._queueHooks(this, a);
                "fx" === a && "inprogress" !== e[0] && k.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          k.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, c) {
        var d,
          e = 1,
          h = k.Deferred(),
          m = this,
          q = this.length,
          I = function () {
            --e || h.resolveWith(m, [m]);
          };
        "string" != typeof a && ((c = a), (a = void 0));
        for (a = a || "fx"; q--; )
          (d = lb.get(m[q], a + "queueHooks")) &&
            d.empty &&
            (e++, d.empty.add(I));
        return I(), h.promise(c);
      },
    });
    var Ad = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      L = new RegExp("^(?:([+-])=|)(" + Ad + ")([a-z%]*)$", "i"),
      Ib = ["Top", "Right", "Bottom", "Left"],
      Wa = function (a, c) {
        return (
          (a = c || a),
          "none" === a.style.display ||
            ("" === a.style.display &&
              k.contains(a.ownerDocument, a) &&
              "none" === k.css(a, "display"))
        );
      },
      fb = function (a, c, d, e) {
        var h,
          m = {};
        for (h in c) (m[h] = a.style[h]), (a.style[h] = c[h]);
        d = d.apply(a, e || []);
        for (h in c) a.style[h] = m[h];
        return d;
      },
      Ca = {};
    k.fn.extend({
      show: function () {
        return ec(this, !0);
      },
      hide: function () {
        return ec(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              Wa(this) ? k(this).show() : k(this).hide();
            });
      },
    });
    var yc = /^(?:checkbox|radio)$/i,
      Lc = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      gd = /^$|\/(?:java|ecma)script/i,
      sc = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    sc.optgroup = sc.option;
    sc.tbody = sc.tfoot = sc.colgroup = sc.caption = sc.thead;
    sc.th = sc.td;
    var Jd = /<|&#?\w+;/;
    !(function () {
      var a = ha.createDocumentFragment().appendChild(ha.createElement("div")),
        c = ha.createElement("input");
      c.setAttribute("type", "radio");
      c.setAttribute("checked", "checked");
      c.setAttribute("name", "t");
      a.appendChild(c);
      Ya.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
      a.innerHTML = "<textarea>x</textarea>";
      Ya.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
    })();
    var Kc = ha.documentElement,
      qd = /^key/,
      ld = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      md = /^([^.]*)(?:\.(.+)|)/;
    k.event = {
      global: {},
      add: function (a, c, d, e, h) {
        var m, q, I, J, ca, T, va, Ra;
        if ((J = lb.get(a)))
          for (
            d.handler && ((m = d), (d = m.handler), (h = m.selector)),
              h && k.find.matchesSelector(Kc, h),
              d.guid || (d.guid = k.guid++),
              (I = J.events) || (I = J.events = {}),
              (q = J.handle) ||
                (q = J.handle = function (ub) {
                  return "undefined" != typeof k &&
                    k.event.triggered !== ub.type
                    ? k.event.dispatch.apply(a, arguments)
                    : void 0;
                }),
              c = (c || "").match(Nb) || [""],
              J = c.length;
            J--;

          ) {
            var rb = md.exec(c[J]) || [];
            var Ua = (Ra = rb[1]);
            rb = (rb[2] || "").split(".").sort();
            Ua &&
              ((T = k.event.special[Ua] || {}),
              (Ua = (h ? T.delegateType : T.bindType) || Ua),
              (T = k.event.special[Ua] || {}),
              (ca = k.extend(
                {
                  type: Ua,
                  origType: Ra,
                  data: e,
                  handler: d,
                  guid: d.guid,
                  selector: h,
                  needsContext: h && k.expr.match.needsContext.test(h),
                  namespace: rb.join("."),
                },
                m
              )),
              (va = I[Ua]) ||
                ((va = I[Ua] = []),
                (va.delegateCount = 0),
                (T.setup && !1 !== T.setup.call(a, e, rb, q)) ||
                  (a.addEventListener && a.addEventListener(Ua, q))),
              T.add &&
                (T.add.call(a, ca),
                ca.handler.guid || (ca.handler.guid = d.guid)),
              h ? va.splice(va.delegateCount++, 0, ca) : va.push(ca),
              (k.event.global[Ua] = !0));
          }
      },
      remove: function (a, c, d, e, h) {
        var m,
          q,
          I,
          J,
          ca,
          T,
          va,
          Ra,
          rb = lb.hasData(a) && lb.get(a);
        if (rb && (J = rb.events)) {
          c = (c || "").match(Nb) || [""];
          for (ca = c.length; ca--; )
            if (
              ((I = md.exec(c[ca]) || []),
              (T = Ra = I[1]),
              (va = (I[2] || "").split(".").sort()),
              T)
            ) {
              var Ua = k.event.special[T] || {};
              T = (e ? Ua.delegateType : Ua.bindType) || T;
              var ub = J[T] || [];
              I =
                I[2] &&
                new RegExp("(^|\\.)" + va.join("\\.(?:.*\\.|)") + "(\\.|$)");
              for (q = m = ub.length; m--; ) {
                var Pa = ub[m];
                (!h && Ra !== Pa.origType) ||
                  (d && d.guid !== Pa.guid) ||
                  (I && !I.test(Pa.namespace)) ||
                  (e && e !== Pa.selector && ("**" !== e || !Pa.selector)) ||
                  (ub.splice(m, 1),
                  Pa.selector && ub.delegateCount--,
                  Ua.remove && Ua.remove.call(a, Pa));
              }
              q &&
                !ub.length &&
                ((Ua.teardown && !1 !== Ua.teardown.call(a, va, rb.handle)) ||
                  k.removeEvent(a, T, rb.handle),
                delete J[T]);
            } else for (T in J) k.event.remove(a, T + c[ca], d, e, !0);
          k.isEmptyObject(J) && lb.remove(a, "handle events");
        }
      },
      dispatch: function (a) {
        var c = k.event.fix(a),
          d,
          e,
          h,
          m,
          q = Array(arguments.length);
        var I = (lb.get(this, "events") || {})[c.type] || [];
        var J = k.event.special[c.type] || {};
        q[0] = c;
        for (d = 1; d < arguments.length; d++) q[d] = arguments[d];
        if (
          ((c.delegateTarget = this),
          !J.preDispatch || !1 !== J.preDispatch.call(this, c))
        ) {
          var ca = k.event.handlers.call(this, c, I);
          for (d = 0; (h = ca[d++]) && !c.isPropagationStopped(); )
            for (
              c.currentTarget = h.elem, I = 0;
              (m = h.handlers[I++]) && !c.isImmediatePropagationStopped();

            )
              (c.rnamespace && !c.rnamespace.test(m.namespace)) ||
                ((c.handleObj = m),
                (c.data = m.data),
                (e = (
                  (k.event.special[m.origType] || {}).handle || m.handler
                ).apply(h.elem, q)),
                void 0 !== e &&
                  !1 === (c.result = e) &&
                  (c.preventDefault(), c.stopPropagation()));
          return J.postDispatch && J.postDispatch.call(this, c), c.result;
        }
      },
      handlers: function (a, c) {
        var d,
          e = [],
          h = c.delegateCount,
          m = a.target;
        if (h && m.nodeType && !("click" === a.type && 1 <= a.button))
          for (; m !== this; m = m.parentNode || this)
            if (1 === m.nodeType && ("click" !== a.type || !0 !== m.disabled)) {
              var q = [];
              var I = {};
              for (d = 0; d < h; d++) {
                var J = c[d];
                var ca = J.selector + " ";
                void 0 === I[ca] &&
                  (I[ca] = J.needsContext
                    ? -1 < k(ca, this).index(m)
                    : k.find(ca, this, null, [m]).length);
                I[ca] && q.push(J);
              }
              q.length &&
                e.push({
                  elem: m,
                  handlers: q,
                });
            }
        return (
          (m = this),
          h < c.length &&
            e.push({
              elem: m,
              handlers: c.slice(h),
            }),
          e
        );
      },
      addProp: function (a, c) {
        Object.defineProperty(k.Event.prototype, a, {
          enumerable: !0,
          configurable: !0,
          get: k.isFunction(c)
            ? function () {
                if (this.originalEvent) return c(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[a];
              },
          set: function (d) {
            Object.defineProperty(this, a, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: d,
            });
          },
        });
      },
      fix: function (a) {
        return a[k.expando] ? a : new k.Event(a);
      },
      special: {
        load: {
          noBubble: !0,
        },
        focus: {
          trigger: function () {
            if (this !== Oa() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === Oa() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && qb(this, "input"))
              return this.click(), !1;
          },
          _default: function (a) {
            return qb(a.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (a) {
            void 0 !== a.result &&
              a.originalEvent &&
              (a.originalEvent.returnValue = a.result);
          },
        },
      },
    };
    k.removeEvent = function (a, c, d) {
      a.removeEventListener && a.removeEventListener(c, d);
    };
    k.Event = function (a, c) {
      return this instanceof k.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && !1 === a.returnValue)
                  ? ua
                  : Ma),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          c && k.extend(this, c),
          (this.timeStamp = (a && a.timeStamp) || k.now()),
          void (this[k.expando] = !0))
        : new k.Event(a, c);
    };
    k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Ma,
      isPropagationStopped: Ma,
      isImmediatePropagationStopped: Ma,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        this.isDefaultPrevented = ua;
        a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        this.isPropagationStopped = ua;
        a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = ua;
        a && !this.isSimulated && a.stopImmediatePropagation();
        this.stopPropagation();
      },
    };
    k.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var c = a.button;
          return null == a.which && qd.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== c && ld.test(a.type)
            ? 1 & c
              ? 1
              : 2 & c
              ? 3
              : 4 & c
              ? 2
              : 0
            : a.which;
        },
      },
      k.event.addProp
    );
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, c) {
        k.event.special[a] = {
          delegateType: c,
          bindType: c,
          handle: function (d) {
            var e,
              h = d.relatedTarget,
              m = d.handleObj;
            return (
              (h && (h === this || k.contains(this, h))) ||
                ((d.type = m.origType),
                (e = m.handler.apply(this, arguments)),
                (d.type = c)),
              e
            );
          },
        };
      }
    );
    k.fn.extend({
      on: function (a, c, d, e) {
        return Da(this, a, c, d, e);
      },
      one: function (a, c, d, e) {
        return Da(this, a, c, d, e, 1);
      },
      off: function (a, c, d) {
        var e, h;
        if (a && a.preventDefault && a.handleObj)
          return (
            (e = a.handleObj),
            k(a.delegateTarget).off(
              e.namespace ? e.origType + "." + e.namespace : e.origType,
              e.selector,
              e.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (h in a) this.off(h, c, a[h]);
          return this;
        }
        return (
          (!1 !== c && "function" != typeof c) || ((d = c), (c = void 0)),
          !1 === d && (d = Ma),
          this.each(function () {
            k.event.remove(this, a, d, c);
          })
        );
      },
    });
    var sd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Mc = /<script|<style|<link/i,
      Kd = /checked\s*(?:[^=]|=\s*.checked.)/i,
      yd = /^true\/(.*)/,
      b = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    k.extend({
      htmlPrefilter: function (a) {
        return a.replace(sd, "<$1></$2>");
      },
      clone: function (a, c, d) {
        var e,
          h = a.cloneNode(!0),
          m = k.contains(a.ownerDocument, a);
        if (
          !(
            Ya.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            k.isXMLDoc(a)
          )
        ) {
          var q = Zb(h);
          var I = Zb(a);
          var J = 0;
          for (e = I.length; J < e; J++) {
            var ca = I[J],
              T = q[J],
              va = T.nodeName.toLowerCase();
            "input" === va && yc.test(ca.type)
              ? (T.checked = ca.checked)
              : ("input" !== va && "textarea" !== va) ||
                (T.defaultValue = ca.defaultValue);
          }
        }
        if (c)
          if (d)
            for (
              I = I || Zb(a), q = q || Zb(h), J = 0, e = I.length;
              J < e;
              J++
            )
              Vb(I[J], q[J]);
          else Vb(a, h);
        return (
          (q = Zb(h, "script")), 0 < q.length && da(q, !m && Zb(a, "script")), h
        );
      },
      cleanData: function (a) {
        for (
          var c, d, e, h = k.event.special, m = 0;
          void 0 !== (d = a[m]);
          m++
        )
          if (bd(d)) {
            if ((c = d[lb.expando])) {
              if (c.events)
                for (e in c.events)
                  h[e] ? k.event.remove(d, e) : k.removeEvent(d, e, c.handle);
              d[lb.expando] = void 0;
            }
            d[Ob.expando] && (d[Ob.expando] = void 0);
          }
      },
    });
    k.fn.extend({
      detach: function (a) {
        return Xa(this, a, !0);
      },
      remove: function (a) {
        return Xa(this, a);
      },
      text: function (a) {
        return Jc(
          this,
          function (c) {
            return void 0 === c
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = c);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Cb(this, arguments, function (a) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Ha(this, a).appendChild(a);
        });
      },
      prepend: function () {
        return Cb(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var c = Ha(this, a);
            c.insertBefore(a, c.firstChild);
          }
        });
      },
      before: function () {
        return Cb(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Cb(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, c = 0; null != (a = this[c]); c++)
          1 === a.nodeType && (k.cleanData(Zb(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, c) {
        return (
          (a = null != a && a),
          (c = null == c ? a : c),
          this.map(function () {
            return k.clone(this, a, c);
          })
        );
      },
      html: function (a) {
        return Jc(
          this,
          function (c) {
            var d = this[0] || {},
              e = 0,
              h = this.length;
            if (void 0 === c && 1 === d.nodeType) return d.innerHTML;
            if (
              "string" == typeof c &&
              !Mc.test(c) &&
              !sc[(Lc.exec(c) || ["", ""])[1].toLowerCase()]
            ) {
              c = k.htmlPrefilter(c);
              try {
                for (; e < h; e++)
                  (d = this[e] || {}),
                    1 === d.nodeType &&
                      (k.cleanData(Zb(d, !1)), (d.innerHTML = c));
                d = 0;
              } catch (m) {}
            }
            d && this.empty().append(c);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Cb(
          this,
          arguments,
          function (c) {
            var d = this.parentNode;
            0 > k.inArray(this, a) &&
              (k.cleanData(Zb(this)), d && d.replaceChild(c, this));
          },
          a
        );
      },
    });
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, c) {
        k.fn[a] = function (d) {
          for (var e = [], h = k(d), m = h.length - 1, q = 0; q <= m; q++)
            (d = q === m ? this : this.clone(!0)),
              k(h[q])[c](d),
              eb.apply(e, d.get());
          return this.pushStack(e);
        };
      }
    );
    var f = /^margin/,
      n = new RegExp("^(" + Ad + ")(?!px)[a-z%]+$", "i"),
      l = function (a) {
        var c = a.ownerDocument.defaultView;
        return (c && c.opener) || (c = la), c.getComputedStyle(a);
      };
    !(function () {
      function a() {
        if (q) {
          q.style.cssText =
            "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
          q.innerHTML = "";
          Kc.appendChild(m);
          var I = la.getComputedStyle(q);
          c = "1%" !== I.top;
          h = "2px" === I.marginLeft;
          d = "4px" === I.width;
          q.style.marginRight = "50%";
          e = "4px" === I.marginRight;
          Kc.removeChild(m);
          q = null;
        }
      }
      var c,
        d,
        e,
        h,
        m = ha.createElement("div"),
        q = ha.createElement("div");
      q.style &&
        ((q.style.backgroundClip = "content-box"),
        (q.cloneNode(!0).style.backgroundClip = ""),
        (Ya.clearCloneStyle = "content-box" === q.style.backgroundClip),
        (m.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        m.appendChild(q),
        k.extend(Ya, {
          pixelPosition: function () {
            return a(), c;
          },
          boxSizingReliable: function () {
            return a(), d;
          },
          pixelMarginRight: function () {
            return a(), e;
          },
          reliableMarginLeft: function () {
            return a(), h;
          },
        }));
    })();
    var t = /^(none|table(?!-c[ea]).+)/,
      w = /^--/,
      G = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
      },
      B = {
        letterSpacing: "0",
        fontWeight: "400",
      },
      x = ["Webkit", "Moz", "ms"],
      E = ha.createElement("div").style;
    k.extend({
      cssHooks: {
        opacity: {
          get: function (a, c) {
            if (c) return (a = Rb(a, "opacity")), "" === a ? "1" : a;
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: "cssFloat",
      },
      style: function (a, c, d, e) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var h,
            m,
            q,
            I = k.camelCase(c),
            J = w.test(c),
            ca = a.style;
          return (
            J || (c = qc(I)),
            (q = k.cssHooks[c] || k.cssHooks[I]),
            void 0 === d
              ? q && "get" in q && void 0 !== (h = q.get(a, !1, e))
                ? h
                : ca[c]
              : ((m = typeof d),
                "string" === m &&
                  (h = L.exec(d)) &&
                  h[1] &&
                  ((d = zc(a, c, h)), (m = "number")),
                null != d &&
                  d === d &&
                  ("number" === m &&
                    (d += (h && h[3]) || (k.cssNumber[I] ? "" : "px")),
                  Ya.clearCloneStyle ||
                    "" !== d ||
                    0 !== c.indexOf("background") ||
                    (ca[c] = "inherit"),
                  (q && "set" in q && void 0 === (d = q.set(a, d, e))) ||
                    (J ? ca.setProperty(c, d) : (ca[c] = d))),
                void 0)
          );
        }
      },
      css: function (a, c, d, e) {
        var h,
          m,
          q,
          I = k.camelCase(c);
        return (
          w.test(c) || (c = qc(I)),
          (q = k.cssHooks[c] || k.cssHooks[I]),
          q && "get" in q && (h = q.get(a, !0, d)),
          void 0 === h && (h = Rb(a, c, e)),
          "normal" === h && c in B && (h = B[c]),
          "" === d || d
            ? ((m = parseFloat(h)), !0 === d || isFinite(m) ? m || 0 : h)
            : h
        );
      },
    });
    k.each(["height", "width"], function (a, c) {
      k.cssHooks[c] = {
        get: function (d, e, h) {
          if (e)
            return !t.test(k.css(d, "display")) ||
              (d.getClientRects().length && d.getBoundingClientRect().width)
              ? tc(d, c, h)
              : fb(d, G, function () {
                  return tc(d, c, h);
                });
        },
        set: function (d, e, h) {
          var m,
            q = h && l(d);
          h =
            h && nc(d, c, h, "border-box" === k.css(d, "boxSizing", !1, q), q);
          return (
            h &&
              (m = L.exec(e)) &&
              "px" !== (m[3] || "px") &&
              ((d.style[c] = e), (e = k.css(d, c))),
            Kb(d, e, h)
          );
        },
      };
    });
    k.cssHooks.marginLeft = bc(Ya.reliableMarginLeft, function (a, c) {
      if (c)
        return (
          (parseFloat(Rb(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              fb(
                a,
                {
                  marginLeft: 0,
                },
                function () {
                  return a.getBoundingClientRect().left;
                }
              )) + "px"
        );
    });
    k.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (a, c) {
        k.cssHooks[a + c] = {
          expand: function (d) {
            var e = 0,
              h = {};
            for (d = "string" == typeof d ? d.split(" ") : [d]; 4 > e; e++)
              h[a + Ib[e] + c] = d[e] || d[e - 2] || d[0];
            return h;
          },
        };
        f.test(a) || (k.cssHooks[a + c].set = Kb);
      }
    );
    k.fn.extend({
      css: function (a, c) {
        return Jc(
          this,
          function (d, e, h) {
            var m,
              q = {},
              I = 0;
            if (Array.isArray(e)) {
              h = l(d);
              for (m = e.length; I < m; I++) q[e[I]] = k.css(d, e[I], !1, h);
              return q;
            }
            return void 0 !== h ? k.style(d, e, h) : k.css(d, e);
          },
          a,
          c,
          1 < arguments.length
        );
      },
    });
    k.Tween = cc;
    cc.prototype = {
      constructor: cc,
      init: function (a, c, d, e, h, m) {
        this.elem = a;
        this.prop = d;
        this.easing = h || k.easing._default;
        this.options = c;
        this.start = this.now = this.cur();
        this.end = e;
        this.unit = m || (k.cssNumber[d] ? "" : "px");
      },
      cur: function () {
        var a = cc.propHooks[this.prop];
        return a && a.get ? a.get(this) : cc.propHooks._default.get(this);
      },
      run: function (a) {
        var c,
          d = cc.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = c = k.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = c = a),
          (this.now = (this.end - this.start) * c + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          d && d.set ? d.set(this) : cc.propHooks._default.set(this),
          this
        );
      },
    };
    cc.prototype.init.prototype = cc.prototype;
    cc.propHooks = {
      _default: {
        get: function (a) {
          var c;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((c = k.css(a.elem, a.prop, "")), c && "auto" !== c ? c : 0);
        },
        set: function (a) {
          k.fx.step[a.prop]
            ? k.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[k.cssProps[a.prop]] && !k.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : k.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    };
    cc.propHooks.scrollTop = cc.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      },
    };
    k.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    };
    k.fx = cc.prototype.init;
    k.fx.step = {};
    var O,
      C,
      P = /^(?:toggle|show|hide)$/,
      z = /queueHooks$/;
    k.Animation = k.extend(oc, {
      tweeners: {
        "*": [
          function (a, c) {
            var d = this.createTween(a, c);
            return zc(d.elem, a, L.exec(c), d), d;
          },
        ],
      },
      tweener: function (a, c) {
        k.isFunction(a) ? ((c = a), (a = ["*"])) : (a = a.match(Nb));
        for (var d, e = 0, h = a.length; e < h; e++)
          (d = a[e]),
            (oc.tweeners[d] = oc.tweeners[d] || []),
            oc.tweeners[d].unshift(c);
      },
      prefilters: [
        function (a, c, d) {
          var e,
            h,
            m,
            q,
            I,
            J,
            ca,
            T,
            va = "width" in c || "height" in c,
            Ra = this,
            rb = {},
            Ua = a.style,
            ub = a.nodeType && Wa(a),
            Pa = lb.get(a, "fxshow");
          d.queue ||
            ((q = k._queueHooks(a, "fx")),
            null == q.unqueued &&
              ((q.unqueued = 0),
              (I = q.empty.fire),
              (q.empty.fire = function () {
                q.unqueued || I();
              })),
            q.unqueued++,
            Ra.always(function () {
              Ra.always(function () {
                q.unqueued--;
                k.queue(a, "fx").length || q.empty.fire();
              });
            }));
          for (e in c)
            if (((h = c[e]), P.test(h))) {
              if (
                (delete c[e],
                (m = m || "toggle" === h),
                h === (ub ? "hide" : "show"))
              ) {
                if ("show" !== h || !Pa || void 0 === Pa[e]) continue;
                ub = !0;
              }
              rb[e] = (Pa && Pa[e]) || k.style(a, e);
            }
          if (((J = !k.isEmptyObject(c)), J || !k.isEmptyObject(rb)))
            for (e in (va &&
              1 === a.nodeType &&
              ((d.overflow = [Ua.overflow, Ua.overflowX, Ua.overflowY]),
              (ca = Pa && Pa.display),
              null == ca && (ca = lb.get(a, "display")),
              (T = k.css(a, "display")),
              "none" === T &&
                (ca
                  ? (T = ca)
                  : (ec([a], !0),
                    (ca = a.style.display || ca),
                    (T = k.css(a, "display")),
                    ec([a]))),
              ("inline" === T || ("inline-block" === T && null != ca)) &&
                "none" === k.css(a, "float") &&
                (J ||
                  (Ra.done(function () {
                    Ua.display = ca;
                  }),
                  null == ca &&
                    ((T = Ua.display), (ca = "none" === T ? "" : T))),
                (Ua.display = "inline-block"))),
            d.overflow &&
              ((Ua.overflow = "hidden"),
              Ra.always(function () {
                Ua.overflow = d.overflow[0];
                Ua.overflowX = d.overflow[1];
                Ua.overflowY = d.overflow[2];
              })),
            (J = !1),
            rb))
              J ||
                (Pa
                  ? "hidden" in Pa && (ub = Pa.hidden)
                  : (Pa = lb.access(a, "fxshow", {
                      display: ca,
                    })),
                m && (Pa.hidden = !ub),
                ub && ec([a], !0),
                Ra.done(function () {
                  ub || ec([a]);
                  lb.remove(a, "fxshow");
                  for (e in rb) k.style(a, e, rb[e]);
                })),
                (J = Hc(ub ? Pa[e] : 0, e, Ra)),
                e in Pa ||
                  ((Pa[e] = J.start), ub && ((J.end = J.start), (J.start = 0)));
        },
      ],
      prefilter: function (a, c) {
        c ? oc.prefilters.unshift(a) : oc.prefilters.push(a);
      },
    });
    k.speed = function (a, c, d) {
      var e =
        a && "object" == typeof a
          ? k.extend({}, a)
          : {
              complete: d || (!d && c) || (k.isFunction(a) && a),
              duration: a,
              easing: (d && c) || (c && !k.isFunction(c) && c),
            };
      return (
        k.fx.off
          ? (e.duration = 0)
          : "number" != typeof e.duration &&
            (e.duration in k.fx.speeds
              ? (e.duration = k.fx.speeds[e.duration])
              : (e.duration = k.fx.speeds._default)),
        (null != e.queue && !0 !== e.queue) || (e.queue = "fx"),
        (e.old = e.complete),
        (e.complete = function () {
          k.isFunction(e.old) && e.old.call(this);
          e.queue && k.dequeue(this, e.queue);
        }),
        e
      );
    };
    k.fn.extend({
      fadeTo: function (a, c, d, e) {
        return this.filter(Wa).css("opacity", 0).show().end().animate(
          {
            opacity: c,
          },
          a,
          d,
          e
        );
      },
      animate: function (a, c, d, e) {
        var h = k.isEmptyObject(a),
          m = k.speed(c, d, e);
        c = function () {
          var q = oc(this, k.extend({}, a), m);
          (h || lb.get(this, "finish")) && q.stop(!0);
        };
        return (
          (c.finish = c),
          h || !1 === m.queue ? this.each(c) : this.queue(m.queue, c)
        );
      },
      stop: function (a, c, d) {
        var e = function (h) {
          var m = h.stop;
          delete h.stop;
          m(d);
        };
        return (
          "string" != typeof a && ((d = c), (c = a), (a = void 0)),
          c && !1 !== a && this.queue(a || "fx", []),
          this.each(function () {
            var h = !0,
              m = null != a && a + "queueHooks",
              q = k.timers,
              I = lb.get(this);
            if (m) I[m] && I[m].stop && e(I[m]);
            else for (m in I) I[m] && I[m].stop && z.test(m) && e(I[m]);
            for (m = q.length; m--; )
              q[m].elem !== this ||
                (null != a && q[m].queue !== a) ||
                (q[m].anim.stop(d), (h = !1), q.splice(m, 1));
            (!h && d) || k.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var c = lb.get(this),
              d = c[a + "queue"];
            var e = c[a + "queueHooks"];
            var h = k.timers,
              m = d ? d.length : 0;
            c.finish = !0;
            k.queue(this, a, []);
            e && e.stop && e.stop.call(this, !0);
            for (e = h.length; e--; )
              h[e].elem === this &&
                h[e].queue === a &&
                (h[e].anim.stop(!0), h.splice(e, 1));
            for (e = 0; e < m; e++)
              d[e] && d[e].finish && d[e].finish.call(this);
            delete c.finish;
          })
        );
      },
    });
    k.each(["toggle", "show", "hide"], function (a, c) {
      var d = k.fn[c];
      k.fn[c] = function (e, h, m) {
        return null == e || "boolean" == typeof e
          ? d.apply(this, arguments)
          : this.animate(fc(c, !0), e, h, m);
      };
    });
    k.each(
      {
        slideDown: fc("show"),
        slideUp: fc("hide"),
        slideToggle: fc("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (a, c) {
        k.fn[a] = function (d, e, h) {
          return this.animate(c, d, e, h);
        };
      }
    );
    k.timers = [];
    k.fx.tick = function () {
      var a = 0,
        c = k.timers;
      for (O = k.now(); a < c.length; a++) {
        var d = c[a];
        d() || c[a] !== d || c.splice(a--, 1);
      }
      c.length || k.fx.stop();
      O = void 0;
    };
    k.fx.timer = function (a) {
      k.timers.push(a);
      k.fx.start();
    };
    k.fx.interval = 13;
    k.fx.start = function () {
      C || ((C = !0), Ec());
    };
    k.fx.stop = function () {
      C = null;
    };
    k.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    };
    k.fn.delay = function (a, c) {
      return (
        (a = k.fx ? k.fx.speeds[a] || a : a),
        (c = c || "fx"),
        this.queue(c, function (d, e) {
          var h = la.setTimeout(d, a);
          e.stop = function () {
            la.clearTimeout(h);
          };
        })
      );
    };
    (function () {
      var a = ha.createElement("input"),
        c = ha.createElement("select").appendChild(ha.createElement("option"));
      a.type = "checkbox";
      Ya.checkOn = "" !== a.value;
      Ya.optSelected = c.selected;
      a = ha.createElement("input");
      a.value = "t";
      a.type = "radio";
      Ya.radioValue = "t" === a.value;
    })();
    var F = k.expr.attrHandle;
    k.fn.extend({
      attr: function (a, c) {
        return Jc(this, k.attr, a, c, 1 < arguments.length);
      },
      removeAttr: function (a) {
        return this.each(function () {
          k.removeAttr(this, a);
        });
      },
    });
    k.extend({
      attr: function (a, c, d) {
        var e,
          h,
          m = a.nodeType;
        if (3 !== m && 8 !== m && 2 !== m)
          return "undefined" == typeof a.getAttribute
            ? k.prop(a, c, d)
            : ((1 === m && k.isXMLDoc(a)) ||
                (h =
                  k.attrHooks[c.toLowerCase()] ||
                  (k.expr.match.bool.test(c) ? H : void 0)),
              void 0 !== d
                ? null === d
                  ? void k.removeAttr(a, c)
                  : h && "set" in h && void 0 !== (e = h.set(a, d, c))
                  ? e
                  : (a.setAttribute(c, d + ""), d)
                : h && "get" in h && null !== (e = h.get(a, c))
                ? e
                : ((e = k.find.attr(a, c)), null == e ? void 0 : e));
      },
      attrHooks: {
        type: {
          set: function (a, c) {
            if (!Ya.radioValue && "radio" === c && qb(a, "input")) {
              var d = a.value;
              return a.setAttribute("type", c), d && (a.value = d), c;
            }
          },
        },
      },
      removeAttr: function (a, c) {
        var d = 0,
          e = c && c.match(Nb);
        if (e && 1 === a.nodeType) for (; (c = e[d++]); ) a.removeAttribute(c);
      },
    });
    var H = {
      set: function (a, c, d) {
        return !1 === c ? k.removeAttr(a, d) : a.setAttribute(d, d), d;
      },
    };
    k.each(k.expr.match.bool.source.match(/\w+/g), function (a, c) {
      var d = F[c] || k.find.attr;
      F[c] = function (e, h, m) {
        var q,
          I,
          J = h.toLowerCase();
        return (
          m ||
            ((I = F[J]),
            (F[J] = q),
            (q = null != d(e, h, m) ? J : null),
            (F[J] = I)),
          q
        );
      };
    });
    var r = /^(?:input|select|textarea|button)$/i,
      X = /^(?:a|area)$/i;
    k.fn.extend({
      prop: function (a, c) {
        return Jc(this, k.prop, a, c, 1 < arguments.length);
      },
      removeProp: function (a) {
        return this.each(function () {
          delete this[k.propFix[a] || a];
        });
      },
    });
    k.extend({
      prop: function (a, c, d) {
        var e,
          h,
          m = a.nodeType;
        if (3 !== m && 8 !== m && 2 !== m)
          return (
            (1 === m && k.isXMLDoc(a)) ||
              ((c = k.propFix[c] || c), (h = k.propHooks[c])),
            void 0 !== d
              ? h && "set" in h && void 0 !== (e = h.set(a, d, c))
                ? e
                : (a[c] = d)
              : h && "get" in h && null !== (e = h.get(a, c))
              ? e
              : a[c]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = k.find.attr(a, "tabindex");
            return c
              ? parseInt(c, 10)
              : r.test(a.nodeName) || (X.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    });
    Ya.optSelected ||
      (k.propHooks.selected = {
        get: function (a) {
          a = a.parentNode;
          return a && a.parentNode && a.parentNode.selectedIndex, null;
        },
        set: function (a) {
          a = a.parentNode;
          a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
        },
      });
    k.each(
      "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(
        " "
      ),
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    );
    k.fn.extend({
      addClass: function (a) {
        var c,
          d,
          e,
          h,
          m,
          q,
          I = 0;
        if (k.isFunction(a))
          return this.each(function (J) {
            k(this).addClass(a.call(this, J, fa(this)));
          });
        if ("string" == typeof a && a)
          for (c = a.match(Nb) || []; (d = this[I++]); )
            if (((h = fa(d)), (e = 1 === d.nodeType && " " + Ac(h) + " "))) {
              for (q = 0; (m = c[q++]); )
                0 > e.indexOf(" " + m + " ") && (e += m + " ");
              e = Ac(e);
              h !== e && d.setAttribute("class", e);
            }
        return this;
      },
      removeClass: function (a) {
        var c,
          d,
          e,
          h,
          m,
          q,
          I = 0;
        if (k.isFunction(a))
          return this.each(function (J) {
            k(this).removeClass(a.call(this, J, fa(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a && a)
          for (c = a.match(Nb) || []; (d = this[I++]); )
            if (((h = fa(d)), (e = 1 === d.nodeType && " " + Ac(h) + " "))) {
              for (q = 0; (m = c[q++]); )
                for (; -1 < e.indexOf(" " + m + " "); )
                  e = e.replace(" " + m + " ", " ");
              e = Ac(e);
              h !== e && d.setAttribute("class", e);
            }
        return this;
      },
      toggleClass: function (a, c) {
        var d = typeof a;
        return "boolean" == typeof c && "string" === d
          ? c
            ? this.addClass(a)
            : this.removeClass(a)
          : k.isFunction(a)
          ? this.each(function (e) {
              k(this).toggleClass(a.call(this, e, fa(this), c), c);
            })
          : this.each(function () {
              var e, h;
              if ("string" === d) {
                var m = 0;
                var q = k(this);
                for (h = a.match(Nb) || []; (e = h[m++]); )
                  q.hasClass(e) ? q.removeClass(e) : q.addClass(e);
              } else (void 0 !== a && "boolean" !== d) || ((e = fa(this)), e && lb.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === a ? "" : lb.get(this, "__className__") || ""));
            });
      },
      hasClass: function (a) {
        var c,
          d = 0;
        for (a = " " + a + " "; (c = this[d++]); )
          if (1 === c.nodeType && -1 < (" " + Ac(fa(c)) + " ").indexOf(a))
            return !0;
        return !1;
      },
    });
    var D = /\r/g;
    k.fn.extend({
      val: function (a) {
        var c,
          d,
          e,
          h = this[0];
        if (arguments.length)
          return (
            (e = k.isFunction(a)),
            this.each(function (m) {
              var q;
              1 === this.nodeType &&
                ((q = e ? a.call(this, m, k(this).val()) : a),
                null == q
                  ? (q = "")
                  : "number" == typeof q
                  ? (q += "")
                  : Array.isArray(q) &&
                    (q = k.map(q, function (I) {
                      return null == I ? "" : I + "";
                    })),
                (c =
                  k.valHooks[this.type] ||
                  k.valHooks[this.nodeName.toLowerCase()]),
                (c && "set" in c && void 0 !== c.set(this, q, "value")) ||
                  (this.value = q));
            })
          );
        if (h)
          return (
            (c = k.valHooks[h.type] || k.valHooks[h.nodeName.toLowerCase()]),
            c && "get" in c && void 0 !== (d = c.get(h, "value"))
              ? d
              : ((d = h.value),
                "string" == typeof d ? d.replace(D, "") : null == d ? "" : d)
          );
      },
    });
    k.extend({
      valHooks: {
        option: {
          get: function (a) {
            var c = k.find.attr(a, "value");
            return null != c ? c : Ac(k.text(a));
          },
        },
        select: {
          get: function (a) {
            var c,
              d,
              e = a.options,
              h = a.selectedIndex,
              m = "select-one" === a.type,
              q = m ? null : [],
              I = m ? h + 1 : e.length;
            for (d = 0 > h ? I : m ? h : 0; d < I; d++)
              if (
                ((c = e[d]),
                !(
                  (!c.selected && d !== h) ||
                  c.disabled ||
                  (c.parentNode.disabled && qb(c.parentNode, "optgroup"))
                ))
              ) {
                if (((a = k(c).val()), m)) return a;
                q.push(a);
              }
            return q;
          },
          set: function (a, c) {
            for (var d, e = a.options, h = k.makeArray(c), m = e.length; m--; )
              (c = e[m]),
                (c.selected = -1 < k.inArray(k.valHooks.option.get(c), h)) &&
                  (d = !0);
            return d || (a.selectedIndex = -1), h;
          },
        },
      },
    });
    k.each(["radio", "checkbox"], function () {
      k.valHooks[this] = {
        set: function (a, c) {
          if (Array.isArray(c))
            return (a.checked = -1 < k.inArray(k(a).val(), c));
        },
      };
      Ya.checkOn ||
        (k.valHooks[this].get = function (a) {
          return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var p = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
      trigger: function (a, c, d, e) {
        var h,
          m,
          q,
          I,
          J,
          ca = [d || ha],
          T = nb.call(a, "type") ? a.type : a;
        var va = nb.call(a, "namespace") ? a.namespace.split(".") : [];
        if (
          ((h = m = d = d || ha),
          3 !== d.nodeType &&
            8 !== d.nodeType &&
            !p.test(T + k.event.triggered) &&
            (-1 < T.indexOf(".") &&
              ((va = T.split(".")), (T = va.shift()), va.sort()),
            (q = 0 > T.indexOf(":") && "on" + T),
            (a = a[k.expando] ? a : new k.Event(T, "object" == typeof a && a)),
            (a.isTrigger = e ? 2 : 3),
            (a.namespace = va.join(".")),
            (a.rnamespace = a.namespace
              ? new RegExp("(^|\\.)" + va.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (a.result = void 0),
            a.target || (a.target = d),
            (c = null == c ? [a] : k.makeArray(c, [a])),
            (J = k.event.special[T] || {}),
            e || !J.trigger || !1 !== J.trigger.apply(d, c)))
        ) {
          if (!e && !J.noBubble && !k.isWindow(d)) {
            var Ra = J.delegateType || T;
            for (p.test(Ra + T) || (h = h.parentNode); h; h = h.parentNode)
              ca.push(h), (m = h);
            m === (d.ownerDocument || ha) &&
              ca.push(m.defaultView || m.parentWindow || la);
          }
          for (va = 0; (h = ca[va++]) && !a.isPropagationStopped(); )
            (a.type = 1 < va ? Ra : J.bindType || T),
              (I =
                (lb.get(h, "events") || {})[a.type] && lb.get(h, "handle")) &&
                I.apply(h, c),
              (I = q && h[q]) &&
                I.apply &&
                bd(h) &&
                ((a.result = I.apply(h, c)),
                !1 === a.result && a.preventDefault());
          return (
            (a.type = T),
            e ||
              a.isDefaultPrevented() ||
              (J._default && !1 !== J._default.apply(ca.pop(), c)) ||
              !bd(d) ||
              (q &&
                k.isFunction(d[T]) &&
                !k.isWindow(d) &&
                ((m = d[q]),
                m && (d[q] = null),
                (k.event.triggered = T),
                d[T](),
                (k.event.triggered = void 0),
                m && (d[q] = m))),
            a.result
          );
        }
      },
      simulate: function (a, c, d) {
        a = k.extend(new k.Event(), d, {
          type: a,
          isSimulated: !0,
        });
        k.event.trigger(a, null, c);
      },
    });
    k.fn.extend({
      trigger: function (a, c) {
        return this.each(function () {
          k.event.trigger(a, c, this);
        });
      },
      triggerHandler: function (a, c) {
        var d = this[0];
        if (d) return k.event.trigger(a, c, d, !0);
      },
    });
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, c) {
        k.fn[c] = function (d, e) {
          return 0 < arguments.length
            ? this.on(c, null, d, e)
            : this.trigger(c);
        };
      }
    );
    k.fn.extend({
      hover: function (a, c) {
        return this.mouseenter(a).mouseleave(c || a);
      },
    });
    Ya.focusin = "onfocusin" in la;
    Ya.focusin ||
      k.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (a, c) {
          var d = function (e) {
            k.event.simulate(c, e.target, k.event.fix(e));
          };
          k.event.special[c] = {
            setup: function () {
              var e = this.ownerDocument || this,
                h = lb.access(e, c);
              h || e.addEventListener(a, d, !0);
              lb.access(e, c, (h || 0) + 1);
            },
            teardown: function () {
              var e = this.ownerDocument || this,
                h = lb.access(e, c) - 1;
              h
                ? lb.access(e, c, h)
                : (e.removeEventListener(a, d, !0), lb.remove(e, c));
            },
          };
        }
      );
    var v = la.location,
      y = k.now(),
      M = /\?/;
    k.parseXML = function (a) {
      if (!a || "string" != typeof a) return null;
      try {
        var c = new la.DOMParser().parseFromString(a, "text/xml");
      } catch (d) {
        c = void 0;
      }
      return (
        (c && !c.getElementsByTagName("parsererror").length) ||
          k.error("Invalid XML: " + a),
        c
      );
    };
    var V = /\[\]$/,
      Y = /\r?\n/g,
      ia = /^(?:submit|button|image|reset|file)$/i,
      S = /^(?:input|select|textarea|keygen)/i;
    k.param = function (a, c) {
      var d,
        e = [],
        h = function (m, q) {
          q = k.isFunction(q) ? q() : q;
          e[e.length] =
            encodeURIComponent(m) +
            "=" +
            encodeURIComponent(null == q ? "" : q);
        };
      if (Array.isArray(a) || (a.jquery && !k.isPlainObject(a)))
        k.each(a, function () {
          h(this.name, this.value);
        });
      else for (d in a) Ic(d, a[d], c, h);
      return e.join("&");
    };
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = k.prop(this, "elements");
          return a ? k.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              S.test(this.nodeName) &&
              !ia.test(a) &&
              (this.checked || !yc.test(a))
            );
          })
          .map(function (a, c) {
            a = k(this).val();
            return null == a
              ? null
              : Array.isArray(a)
              ? k.map(a, function (d) {
                  return {
                    name: c.name,
                    value: d.replace(Y, "\r\n"),
                  };
                })
              : {
                  name: c.name,
                  value: a.replace(Y, "\r\n"),
                };
          })
          .get();
      },
    });
    var Z = /%20/g,
      aa = /#.*$/,
      R = /([?&])_=[^&]*/,
      qa = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ya = /^(?:GET|HEAD)$/,
      Ka = /^\/\//,
      Aa = {},
      ba = {},
      A = "*/".concat("*"),
      ka = ha.createElement("a");
    ka.href = v.href;
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: v.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          v.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": A,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (a, c) {
        return c ? Ub(Ub(a, k.ajaxSettings), c) : Ub(k.ajaxSettings, a);
      },
      ajaxPrefilter: Ea(Aa),
      ajaxTransport: Ea(ba),
      ajax: function (a, c) {
        function d(Na, Yb, sb, lc) {
          var zb,
            ab,
            ea,
            ta = Yb;
          if (!$a) {
            $a = !0;
            q && la.clearTimeout(q);
            e = void 0;
            h = lc || "";
            Ba.readyState = 0 < Na ? 4 : 0;
            lc = (200 <= Na && 300 > Na) || 304 === Na;
            if (sb) {
              var Ga = T;
              for (
                var cb = Ba,
                  wb,
                  jb,
                  Hb,
                  Ab,
                  ad = Ga.contents,
                  Dc = Ga.dataTypes;
                "*" === Dc[0];

              )
                Dc.shift(),
                  void 0 === wb &&
                    (wb = Ga.mimeType || cb.getResponseHeader("Content-Type"));
              if (wb)
                for (jb in ad)
                  if (ad[jb] && ad[jb].test(wb)) {
                    Dc.unshift(jb);
                    break;
                  }
              if (Dc[0] in sb) Hb = Dc[0];
              else {
                for (jb in sb) {
                  if (!Dc[0] || Ga.converters[jb + " " + Dc[0]]) {
                    Hb = jb;
                    break;
                  }
                  Ab || (Ab = jb);
                }
                Hb = Hb || Ab;
              }
              sb = Hb ? (Hb !== Dc[0] && Dc.unshift(Hb), sb[Hb]) : void 0;
              Ga = sb;
            }
            a: {
              sb = T;
              wb = Ga;
              jb = Ba;
              Hb = lc;
              var rc, Pc, Nc;
              Ga = {};
              cb = sb.dataTypes.slice();
              if (cb[1])
                for (rc in sb.converters)
                  Ga[rc.toLowerCase()] = sb.converters[rc];
              for (Ab = cb.shift(); Ab; )
                if (
                  (sb.responseFields[Ab] && (jb[sb.responseFields[Ab]] = wb),
                  !Nc &&
                    Hb &&
                    sb.dataFilter &&
                    (wb = sb.dataFilter(wb, sb.dataType)),
                  (Nc = Ab),
                  (Ab = cb.shift()))
                )
                  if ("*" === Ab) Ab = Nc;
                  else if ("*" !== Nc && Nc !== Ab) {
                    if (((rc = Ga[Nc + " " + Ab] || Ga["* " + Ab]), !rc))
                      for (dd in Ga)
                        if (
                          ((Pc = dd.split(" ")),
                          Pc[1] === Ab &&
                            (rc = Ga[Nc + " " + Pc[0]] || Ga["* " + Pc[0]]))
                        ) {
                          !0 === rc
                            ? (rc = Ga[dd])
                            : !0 !== Ga[dd] &&
                              ((Ab = Pc[0]), cb.unshift(Pc[1]));
                          break;
                        }
                    if (!0 !== rc)
                      if (rc && sb["throws"]) wb = rc(wb);
                      else
                        try {
                          wb = rc(wb);
                        } catch (Vc) {
                          var dd = {
                            state: "parsererror",
                            error: rc
                              ? Vc
                              : "No conversion from " + Nc + " to " + Ab,
                          };
                          break a;
                        }
                  }
              dd = {
                state: "success",
                data: wb,
              };
            }
            Ga = dd;
            lc
              ? (T.ifModified &&
                  ((ea = Ba.getResponseHeader("Last-Modified")),
                  ea && (k.lastModified[vb] = ea),
                  (ea = Ba.getResponseHeader("etag")),
                  ea && (k.etag[vb] = ea)),
                204 === Na || "HEAD" === T.type
                  ? (ta = "nocontent")
                  : 304 === Na
                  ? (ta = "notmodified")
                  : ((ta = Ga.state),
                    (zb = Ga.data),
                    (ab = Ga.error),
                    (lc = !ab)))
              : ((ab = ta),
                (!Na && ta) || ((ta = "error"), 0 > Na && (Na = 0)));
            Ba.status = Na;
            Ba.statusText = (Yb || ta) + "";
            lc
              ? rb.resolveWith(va, [zb, ta, Ba])
              : rb.rejectWith(va, [Ba, ta, ab]);
            Ba.statusCode(ub);
            ub = void 0;
            I &&
              Ra.trigger(lc ? "ajaxSuccess" : "ajaxError", [
                Ba,
                T,
                lc ? zb : ab,
              ]);
            Ua.fireWith(va, [Ba, ta]);
            I &&
              (Ra.trigger("ajaxComplete", [Ba, T]),
              --k.active || k.event.trigger("ajaxStop"));
          }
        }
        "object" == typeof a && ((c = a), (a = void 0));
        c = c || {};
        var e,
          h,
          m,
          q,
          I,
          J,
          ca,
          T = k.ajaxSetup({}, c),
          va = T.context || T,
          Ra = T.context && (va.nodeType || va.jquery) ? k(va) : k.event,
          rb = k.Deferred(),
          Ua = k.Callbacks("once memory"),
          ub = T.statusCode || {},
          Pa = {},
          wc = {},
          ra = "canceled",
          Ba = {
            readyState: 0,
            getResponseHeader: function (Na) {
              var Yb;
              if ($a) {
                if (!m)
                  for (m = {}; (Yb = qa.exec(h)); )
                    m[Yb[1].toLowerCase()] = Yb[2];
                Yb = m[Na.toLowerCase()];
              }
              return null == Yb ? null : Yb;
            },
            getAllResponseHeaders: function () {
              return $a ? h : null;
            },
            setRequestHeader: function (Na, Yb) {
              return (
                null == $a &&
                  ((Na = wc[Na.toLowerCase()] = wc[Na.toLowerCase()] || Na),
                  (Pa[Na] = Yb)),
                this
              );
            },
            overrideMimeType: function (Na) {
              return null == $a && (T.mimeType = Na), this;
            },
            statusCode: function (Na) {
              var Yb;
              if (Na)
                if ($a) Ba.always(Na[Ba.status]);
                else for (Yb in Na) ub[Yb] = [ub[Yb], Na[Yb]];
              return this;
            },
            abort: function (Na) {
              Na = Na || ra;
              return e && e.abort(Na), d(0, Na), this;
            },
          };
        if (
          (rb.promise(Ba),
          (T.url = ((a || T.url || v.href) + "").replace(
            Ka,
            v.protocol + "//"
          )),
          (T.type = c.method || c.type || T.method || T.type),
          (T.dataTypes = (T.dataType || "*").toLowerCase().match(Nb) || [""]),
          null == T.crossDomain)
        ) {
          a = ha.createElement("a");
          try {
            (a.href = T.url),
              (a.href = a.href),
              (T.crossDomain =
                ka.protocol + "//" + ka.host != a.protocol + "//" + a.host);
          } catch (Na) {
            T.crossDomain = !0;
          }
        }
        if (
          (T.data &&
            T.processData &&
            "string" != typeof T.data &&
            (T.data = k.param(T.data, T.traditional)),
          g(Aa, T, c, Ba),
          $a)
        )
          return Ba;
        (I = k.event && T.global) &&
          0 === k.active++ &&
          k.event.trigger("ajaxStart");
        T.type = T.type.toUpperCase();
        T.hasContent = !ya.test(T.type);
        var vb = T.url.replace(aa, "");
        T.hasContent
          ? T.data &&
            T.processData &&
            0 ===
              (T.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (T.data = T.data.replace(Z, "+"))
          : ((ca = T.url.slice(vb.length)),
            T.data &&
              ((vb += (M.test(vb) ? "&" : "?") + T.data), delete T.data),
            !1 === T.cache &&
              ((vb = vb.replace(R, "$1")),
              (ca = (M.test(vb) ? "&" : "?") + "_=" + y++ + ca)),
            (T.url = vb + ca));
        T.ifModified &&
          (k.lastModified[vb] &&
            Ba.setRequestHeader("If-Modified-Since", k.lastModified[vb]),
          k.etag[vb] && Ba.setRequestHeader("If-None-Match", k.etag[vb]));
        ((T.data && T.hasContent && !1 !== T.contentType) || c.contentType) &&
          Ba.setRequestHeader("Content-Type", T.contentType);
        Ba.setRequestHeader(
          "Accept",
          T.dataTypes[0] && T.accepts[T.dataTypes[0]]
            ? T.accepts[T.dataTypes[0]] +
                ("*" !== T.dataTypes[0] ? ", " + A + "; q=0.01" : "")
            : T.accepts["*"]
        );
        for (J in T.headers) Ba.setRequestHeader(J, T.headers[J]);
        if (T.beforeSend && (!1 === T.beforeSend.call(va, Ba, T) || $a))
          return Ba.abort();
        if (
          ((ra = "abort"),
          Ua.add(T.complete),
          Ba.done(T.success),
          Ba.fail(T.error),
          (e = g(ba, T, c, Ba)))
        ) {
          if (((Ba.readyState = 1), I && Ra.trigger("ajaxSend", [Ba, T]), $a))
            return Ba;
          T.async &&
            0 < T.timeout &&
            (q = la.setTimeout(function () {
              Ba.abort("timeout");
            }, T.timeout));
          try {
            var $a = !1;
            e.send(Pa, d);
          } catch (Na) {
            if ($a) throw Na;
            d(-1, Na);
          }
        } else d(-1, "No Transport");
        return Ba;
      },
      getJSON: function (a, c, d) {
        return k.get(a, c, d, "json");
      },
      getScript: function (a, c) {
        return k.get(a, void 0, c, "script");
      },
    });
    k.each(["get", "post"], function (a, c) {
      k[c] = function (d, e, h, m) {
        return (
          k.isFunction(e) && ((m = m || h), (h = e), (e = void 0)),
          k.ajax(
            k.extend(
              {
                url: d,
                type: c,
                dataType: m,
                data: e,
                success: h,
              },
              k.isPlainObject(d) && d
            )
          )
        );
      };
    });
    k._evalUrl = function (a) {
      return k.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    };
    k.fn.extend({
      wrapAll: function (a) {
        var c;
        return (
          this[0] &&
            (k.isFunction(a) && (a = a.call(this[0])),
            (c = k(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && c.insertBefore(this[0]),
            c
              .map(function () {
                for (var d = this; d.firstElementChild; )
                  d = d.firstElementChild;
                return d;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return k.isFunction(a)
          ? this.each(function (c) {
              k(this).wrapInner(a.call(this, c));
            })
          : this.each(function () {
              var c = k(this),
                d = c.contents();
              d.length ? d.wrapAll(a) : c.append(a);
            });
      },
      wrap: function (a) {
        var c = k.isFunction(a);
        return this.each(function (d) {
          k(this).wrapAll(c ? a.call(this, d) : a);
        });
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    });
    k.expr.pseudos.hidden = function (a) {
      return !k.expr.pseudos.visible(a);
    };
    k.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    };
    k.ajaxSettings.xhr = function () {
      try {
        return new la.XMLHttpRequest();
      } catch (a) {}
    };
    var Q = {
        0: 200,
        1223: 204,
      },
      sa = k.ajaxSettings.xhr();
    Ya.cors = !!sa && "withCredentials" in sa;
    Ya.ajax = sa = !!sa;
    k.ajaxTransport(function (a) {
      var c, d;
      if (Ya.cors || (sa && !a.crossDomain))
        return {
          send: function (e, h) {
            var m,
              q = a.xhr();
            if (
              (q.open(a.type, a.url, a.async, a.username, a.password),
              a.xhrFields)
            )
              for (m in a.xhrFields) q[m] = a.xhrFields[m];
            a.mimeType && q.overrideMimeType && q.overrideMimeType(a.mimeType);
            a.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest");
            for (m in e) q.setRequestHeader(m, e[m]);
            c = function (I) {
              return function () {
                c &&
                  ((c = d = q.onload = q.onerror = q.onabort = q.onreadystatechange = null),
                  "abort" === I
                    ? q.abort()
                    : "error" === I
                    ? "number" != typeof q.status
                      ? h(0, "error")
                      : h(q.status, q.statusText)
                    : h(
                        Q[q.status] || q.status,
                        q.statusText,
                        "text" !== (q.responseType || "text") ||
                          "string" != typeof q.responseText
                          ? {
                              binary: q.response,
                            }
                          : {
                              text: q.responseText,
                            },
                        q.getAllResponseHeaders()
                      ));
              };
            };
            q.onload = c();
            d = q.onerror = c("error");
            void 0 !== q.onabort
              ? (q.onabort = d)
              : (q.onreadystatechange = function () {
                  4 === q.readyState &&
                    la.setTimeout(function () {
                      c && d();
                    });
                });
            c = c("abort");
            try {
              q.send((a.hasContent && a.data) || null);
            } catch (I) {
              if (c) throw I;
            }
          },
          abort: function () {
            c && c();
          },
        };
    });
    k.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    });
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (a) {
          return k.globalEval(a), a;
        },
      },
    });
    k.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1);
      a.crossDomain && (a.type = "GET");
    });
    k.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var c, d;
        return {
          send: function (e, h) {
            c = k("<script>")
              .prop({
                charset: a.scriptCharset,
                src: a.url,
              })
              .on(
                "load error",
                (d = function (m) {
                  c.remove();
                  d = null;
                  m && h("error" === m.type ? 404 : 200, m.type);
                })
              );
            ha.head.appendChild(c[0]);
          },
          abort: function () {
            d && d();
          },
        };
      }
    });
    var wa = [],
      za = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var a = wa.pop() || k.expando + "_" + y++;
        return (this[a] = !0), a;
      },
    });
    k.ajaxPrefilter("json jsonp", function (a, c, d) {
      var e,
        h,
        m,
        q =
          !1 !== a.jsonp &&
          (za.test(a.url)
            ? "url"
            : "string" == typeof a.data &&
              0 ===
                (a.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              za.test(a.data) &&
              "data");
      if (q || "jsonp" === a.dataTypes[0])
        return (
          (e = a.jsonpCallback = k.isFunction(a.jsonpCallback)
            ? a.jsonpCallback()
            : a.jsonpCallback),
          q
            ? (a[q] = a[q].replace(za, "$1" + e))
            : !1 !== a.jsonp &&
              (a.url += (M.test(a.url) ? "&" : "?") + a.jsonp + "=" + e),
          (a.converters["script json"] = function () {
            return m || k.error(e + " was not called"), m[0];
          }),
          (a.dataTypes[0] = "json"),
          (h = la[e]),
          (la[e] = function () {
            m = arguments;
          }),
          d.always(function () {
            void 0 === h ? k(la).removeProp(e) : (la[e] = h);
            a[e] && ((a.jsonpCallback = c.jsonpCallback), wa.push(e));
            m && k.isFunction(h) && h(m[0]);
            m = h = void 0;
          }),
          "script"
        );
    });
    Ya.createHTMLDocument = (function () {
      var a = ha.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })();
    k.parseHTML = function (a, c, d) {
      if ("string" != typeof a) return [];
      "boolean" == typeof c && ((d = c), (c = !1));
      var e, h, m;
      return (
        c ||
          (Ya.createHTMLDocument
            ? ((c = ha.implementation.createHTMLDocument("")),
              (e = c.createElement("base")),
              (e.href = ha.location.href),
              c.head.appendChild(e))
            : (c = ha)),
        (h = $c.exec(a)),
        (m = !d && []),
        h
          ? [c.createElement(h[1])]
          : ((h = na([a], c, m)),
            m && m.length && k(m).remove(),
            k.merge([], h.childNodes))
      );
    };
    k.fn.load = function (a, c, d) {
      var e,
        h,
        m,
        q = this,
        I = a.indexOf(" ");
      return (
        -1 < I && ((e = Ac(a.slice(I))), (a = a.slice(0, I))),
        k.isFunction(c)
          ? ((d = c), (c = void 0))
          : c && "object" == typeof c && (h = "POST"),
        0 < q.length &&
          k
            .ajax({
              url: a,
              type: h || "GET",
              dataType: "html",
              data: c,
            })
            .done(function (J) {
              m = arguments;
              q.html(e ? k("<div>").append(k.parseHTML(J)).find(e) : J);
            })
            .always(
              d &&
                function (J, ca) {
                  q.each(function () {
                    d.apply(this, m || [J.responseText, ca, J]);
                  });
                }
            ),
        this
      );
    };
    k.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (a, c) {
        k.fn[c] = function (d) {
          return this.on(c, d);
        };
      }
    );
    k.expr.pseudos.animated = function (a) {
      return k.grep(k.timers, function (c) {
        return a === c.elem;
      }).length;
    };
    k.offset = {
      setOffset: function (a, c, d) {
        var e,
          h,
          m,
          q = k.css(a, "position"),
          I = k(a),
          J = {};
        "static" === q && (a.style.position = "relative");
        var ca = I.offset();
        var T = k.css(a, "top");
        var va = k.css(a, "left");
        ("absolute" === q || "fixed" === q) && -1 < (T + va).indexOf("auto")
          ? ((e = I.position()), (m = e.top), (h = e.left))
          : ((m = parseFloat(T) || 0), (h = parseFloat(va) || 0));
        k.isFunction(c) && (c = c.call(a, d, k.extend({}, ca)));
        null != c.top && (J.top = c.top - ca.top + m);
        null != c.left && (J.left = c.left - ca.left + h);
        "using" in c ? c.using.call(a, J) : I.css(J);
      },
    };
    k.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (q) {
                k.offset.setOffset(this, a, q);
              });
        var c,
          d,
          e,
          h,
          m = this[0];
        if (m)
          return m.getClientRects().length
            ? ((e = m.getBoundingClientRect()),
              (c = m.ownerDocument),
              (d = c.documentElement),
              (h = c.defaultView),
              {
                top: e.top + h.pageYOffset - d.clientTop,
                left: e.left + h.pageXOffset - d.clientLeft,
              })
            : {
                top: 0,
                left: 0,
              };
      },
      position: function () {
        if (this[0]) {
          var a,
            c,
            d = this[0],
            e = {
              top: 0,
              left: 0,
            };
          return (
            "fixed" === k.css(d, "position")
              ? (c = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (c = this.offset()),
                qb(a[0], "html") || (e = a.offset()),
                (e = {
                  top: e.top + k.css(a[0], "borderTopWidth", !0),
                  left: e.left + k.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: c.top - e.top - k.css(d, "marginTop", !0),
              left: c.left - e.left - k.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent;
            a && "static" === k.css(a, "position");

          )
            a = a.offsetParent;
          return a || Kc;
        });
      },
    });
    k.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (a, c) {
        var d = "pageYOffset" === c;
        k.fn[a] = function (e) {
          return Jc(
            this,
            function (h, m, q) {
              var I;
              return (
                k.isWindow(h)
                  ? (I = h)
                  : 9 === h.nodeType && (I = h.defaultView),
                void 0 === q
                  ? I
                    ? I[c]
                    : h[m]
                  : void (I
                      ? I.scrollTo(d ? I.pageXOffset : q, d ? q : I.pageYOffset)
                      : (h[m] = q))
              );
            },
            a,
            e,
            arguments.length
          );
        };
      }
    );
    k.each(["top", "left"], function (a, c) {
      k.cssHooks[c] = bc(Ya.pixelPosition, function (d, e) {
        if (e) return (e = Rb(d, c)), n.test(e) ? k(d).position()[c] + "px" : e;
      });
    });
    k.each(
      {
        Height: "height",
        Width: "width",
      },
      function (a, c) {
        k.each(
          {
            padding: "inner" + a,
            content: c,
            "": "outer" + a,
          },
          function (d, e) {
            k.fn[e] = function (h, m) {
              var q = arguments.length && (d || "boolean" != typeof h),
                I = d || (!0 === h || !0 === m ? "margin" : "border");
              return Jc(
                this,
                function (J, ca, T) {
                  var va;
                  return k.isWindow(J)
                    ? 0 === e.indexOf("outer")
                      ? J["inner" + a]
                      : J.document.documentElement["client" + a]
                    : 9 === J.nodeType
                    ? ((va = J.documentElement),
                      Math.max(
                        J.body["scroll" + a],
                        va["scroll" + a],
                        J.body["offset" + a],
                        va["offset" + a],
                        va["client" + a]
                      ))
                    : void 0 === T
                    ? k.css(J, ca, I)
                    : k.style(J, ca, T, I);
                },
                c,
                q ? h : void 0,
                q
              );
            };
          }
        );
      }
    );
    k.fn.extend({
      bind: function (a, c, d) {
        return this.on(a, null, c, d);
      },
      unbind: function (a, c) {
        return this.off(a, null, c);
      },
      delegate: function (a, c, d, e) {
        return this.on(c, a, d, e);
      },
      undelegate: function (a, c, d) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(c, a || "**", d);
      },
    });
    k.holdReady = function (a) {
      a ? k.readyWait++ : k.ready(!0);
    };
    k.isArray = Array.isArray;
    k.parseJSON = JSON.parse;
    k.nodeName = qb;
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
    var Qa = la.jQuery,
      Mb = la.$;
    return (
      (k.noConflict = function (a) {
        return (
          la.$ === k && (la.$ = Mb), a && la.jQuery === k && (la.jQuery = Qa), k
        );
      }),
      La || (la.jQuery = la.$ = k),
      k
    );
  });
  (function (la, La) {
    "function" === typeof define && define.amd
      ? define(La)
      : "object" === typeof exports
      ? (module.exports = La())
      : (la.ResizeSensor = La());
  })("undefined" !== typeof window ? window : this, function () {
    function la(Sa, qb) {
      var ib = Object.prototype.toString.call(Sa),
        Gb = 0,
        Ta = Sa.length;
      if (
        "[object Array]" === ib ||
        "[object NodeList]" === ib ||
        "[object HTMLCollection]" === ib ||
        "[object Object]" === ib ||
        ("undefined" !== typeof jQuery && Sa instanceof jQuery) ||
        ("undefined" !== typeof Elements && Sa instanceof Elements)
      )
        for (; Gb < Ta; Gb++) qb(Sa[Gb]);
      else qb(Sa);
    }
    if ("undefined" === typeof window) return null;
    var La =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (Sa) {
          return window.setTimeout(Sa, 20);
        },
      hb = function (Sa, qb) {
        function ib() {
          var Ta = [];
          this.add = function (ob) {
            Ta.push(ob);
          };
          var tb, yb;
          this.call = function () {
            tb = 0;
            for (yb = Ta.length; tb < yb; tb++) Ta[tb].call();
          };
          this.remove = function (ob) {
            var dc = [];
            tb = 0;
            for (yb = Ta.length; tb < yb; tb++)
              Ta[tb] !== ob && dc.push(Ta[tb]);
            Ta = dc;
          };
          this.length = function () {
            return Ta.length;
          };
        }

        function Gb(Ta, tb) {
          if (Ta)
            if (Ta.resizedAttached) Ta.resizedAttached.add(tb);
            else {
              Ta.resizedAttached = new ib();
              Ta.resizedAttached.add(tb);
              Ta.resizeSensor = document.createElement("div");
              Ta.resizeSensor.className = "resize-sensor";
              Ta.resizeSensor.style.cssText =
                "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;";
              Ta.resizeSensor.innerHTML =
                '<div class="resize-sensor-expand" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s;"></div></div><div class="resize-sensor-shrink" style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0; top: 0; transition: 0s; width: 200%; height: 200%"></div></div>';
              Ta.appendChild(Ta.resizeSensor);
              Ta.resizeSensor.offsetParent !== Ta &&
                (Ta.style.position = "relative");
              var yb = Ta.resizeSensor.childNodes[0],
                ob = yb.childNodes[0],
                dc = Ta.resizeSensor.childNodes[1],
                xc,
                Cc,
                zc,
                ec,
                Zb = Ta.offsetWidth,
                da = Ta.offsetHeight,
                na = function () {
                  ob.style.width = "100000px";
                  ob.style.height = "100000px";
                  yb.scrollLeft = 1e5;
                  yb.scrollTop = 1e5;
                  dc.scrollLeft = 1e5;
                  dc.scrollTop = 1e5;
                };
              na();
              var ua = function () {
                Cc = 0;
                xc &&
                  ((Zb = zc),
                  (da = ec),
                  Ta.resizedAttached && Ta.resizedAttached.call());
              };
              tb = function () {
                zc = Ta.offsetWidth;
                ec = Ta.offsetHeight;
                (xc = zc != Zb || ec != da) && !Cc && (Cc = La(ua));
                na();
              };
              var Ma = function (Oa, Da, Ha) {
                Oa.attachEvent
                  ? Oa.attachEvent("on" + Da, Ha)
                  : Oa.addEventListener(Da, Ha);
              };
              Ma(yb, "scroll", tb);
              Ma(dc, "scroll", tb);
            }
        }
        la(Sa, function (Ta) {
          Gb(Ta, qb);
        });
        this.detach = function (Ta) {
          hb.detach(Sa, Ta);
        };
      };
    hb.detach = function (Sa, qb) {
      la(Sa, function (ib) {
        if (ib) {
          if (
            ib.resizedAttached &&
            "function" == typeof qb &&
            (ib.resizedAttached.remove(qb), ib.resizedAttached.length())
          )
            return;
          ib.resizeSensor &&
            (ib.contains(ib.resizeSensor) && ib.removeChild(ib.resizeSensor),
            delete ib.resizeSensor,
            delete ib.resizedAttached);
        }
      });
    };
    return hb;
  });
  (function () {
    function la(da, na) {
      na || da.match(/^data:([^;]+);base64,/im);
      da = da.replace(/^data:([^;]+);base64,/gim, "");
      da = atob(da);
      na = da.length;
      for (
        var ua = new ArrayBuffer(na), Ma = new Uint8Array(ua), Oa = 0;
        Oa < na;
        Oa++
      )
        Ma[Oa] = da.charCodeAt(Oa);
      return ua;
    }

    function La(da, na) {
      var ua = new XMLHttpRequest();
      ua.open("GET", da, !0);
      ua.responseType = "blob";
      ua.onload = function (Ma) {
        (200 != this.status && 0 !== this.status) || na(this.response);
      };
      ua.send();
    }

    function hb(da, na) {
      function ua(Ha) {
        var Va = Sa(Ha);
        da.exifdata = Va || {};
        a: if (
          ((Va = new DataView(Ha)),
          255 != Va.getUint8(0) || 216 != Va.getUint8(1))
        )
          Va = !1;
        else {
          for (var xb = 2, Vb = Ha.byteLength; xb < Vb; ) {
            var Cb = Va,
              Xa = xb;
            if (
              56 === Cb.getUint8(Xa) &&
              66 === Cb.getUint8(Xa + 1) &&
              73 === Cb.getUint8(Xa + 2) &&
              77 === Cb.getUint8(Xa + 3) &&
              4 === Cb.getUint8(Xa + 4) &&
              4 === Cb.getUint8(Xa + 5)
            ) {
              Cb = Va.getUint8(xb + 7);
              0 !== Cb % 2 && (Cb += 1);
              0 === Cb && (Cb = 4);
              Vb = xb + 8 + Cb;
              xb = Va.getUint16(xb + 6 + Cb);
              Va = Vb;
              Vb = new DataView(Ha);
              Cb = {};
              for (Xa = Va; Xa < Va + xb; ) {
                if (28 === Vb.getUint8(Xa) && 2 === Vb.getUint8(Xa + 1)) {
                  var Rb = Vb.getUint8(Xa + 2);
                  if (Rb in Zb) {
                    var bc = Vb.getInt16(Xa + 3);
                    Rb = Zb[Rb];
                    bc = Gb(Vb, Xa + 5, bc);
                    Cb.hasOwnProperty(Rb)
                      ? Cb[Rb] instanceof Array
                        ? Cb[Rb].push(bc)
                        : (Cb[Rb] = [Cb[Rb], bc])
                      : (Cb[Rb] = bc);
                  }
                }
                Xa++;
              }
              Va = Cb;
              break a;
            }
            xb++;
          }
          Va = void 0;
        }
        da.iptcdata = Va || {};
        if (ob.isXmpEnabled) {
          a: if ("DOMParser" in self)
            if (
              ((Va = new DataView(Ha)),
              255 != Va.getUint8(0) || 216 != Va.getUint8(1))
            )
              var qc = !1;
            else {
              xb = 2;
              Vb = Ha.byteLength;
              for (Ha = new DOMParser(); xb < Vb - 4; )
                if ("http" == Gb(Va, xb, 4)) {
                  Vb = xb - 1;
                  xb = Va.getUint16(xb - 2) - 1;
                  Va = Gb(Va, Vb, xb);
                  xb = Va.indexOf("xmpmeta>") + 8;
                  Va = Va.substring(Va.indexOf("<x:xmpmeta"), xb);
                  xb = Va.indexOf("x:xmpmeta") + 10;
                  Va =
                    Va.slice(0, xb) +
                    'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
                    Va.slice(xb);
                  b: {
                    Ha = Ha.parseFromString(Va, "text/xml");
                    try {
                      Va = {};
                      if (0 < Ha.children.length)
                        for (xb = 0; xb < Ha.children.length; xb++) {
                          var Kb = Ha.children.item(xb),
                            nc = Kb.attributes,
                            tc;
                          for (tc in nc) {
                            var cc = nc[tc],
                              Ec = cc.nodeName,
                              Rc = cc.nodeValue;
                            void 0 !== Ec && (Va[Ec] = Rc);
                          }
                          var fc = Kb.nodeName;
                          if ("undefined" == typeof Va[fc]) Va[fc] = tb(Kb);
                          else {
                            if ("undefined" == typeof Va[fc].push) {
                              var Hc = Va[fc];
                              Va[fc] = [];
                              Va[fc].push(Hc);
                            }
                            Va[fc].push(tb(Kb));
                          }
                        }
                      else Va = Ha.textContent;
                      qc = Va;
                      break b;
                    } catch (Oc) {
                      console.log(Oc.message);
                    }
                    qc = void 0;
                  }
                  break a;
                } else xb++;
              qc = void 0;
            }
          else qc = void 0;
          da.xmpdata = qc || {};
        }
        na && na.call(da);
      }
      if (da.src)
        if (/^data:/i.test(da.src)) {
          var Ma = la(da.src);
          ua(Ma);
        } else if (/^blob:/i.test(da.src)) {
          var Oa = new FileReader();
          Oa.onload = function (Ha) {
            ua(Ha.target.result);
          };
          La(da.src, function (Ha) {
            Oa.readAsArrayBuffer(Ha);
          });
        } else {
          var Da = new XMLHttpRequest();
          Da.onload = function () {
            if (200 == this.status || 0 === this.status) ua(Da.response);
            else throw "Could not load image";
            Da = null;
          };
          Da.open("GET", da.src, !0);
          Da.responseType = "arraybuffer";
          Da.send(null);
        }
      else
        self.FileReader &&
          (da instanceof self.Blob || da instanceof self.File) &&
          ((Oa = new FileReader()),
          (Oa.onload = function (Ha) {
            ua(Ha.target.result);
          }),
          Oa.readAsArrayBuffer(da));
    }

    function Sa(da) {
      var na = new DataView(da);
      if (255 != na.getUint8(0) || 216 != na.getUint8(1)) return !1;
      var ua = 2;
      da = da.byteLength;
      for (var Ma; ua < da; ) {
        if (255 != na.getUint8(ua)) return !1;
        Ma = na.getUint8(ua + 1);
        if (225 == Ma) return Ta(na, ua + 4, na.getUint16(ua + 2) - 2);
        ua += 2 + na.getUint16(ua + 2);
      }
    }

    function qb(da, na, ua, Ma, Oa) {
      var Da = da.getUint16(ua, !Oa),
        Ha = {},
        Va;
      for (Va = 0; Va < Da; Va++) {
        var xb = ua + 12 * Va + 2;
        var Vb = Ma[da.getUint16(xb, !Oa)];
        Ha[Vb] = ib(da, xb, na, ua, Oa);
      }
      return Ha;
    }

    function ib(da, na, ua, Ma, Oa) {
      var Da = da.getUint16(na + 2, !Oa);
      Ma = da.getUint32(na + 4, !Oa);
      ua = da.getUint32(na + 8, !Oa) + ua;
      switch (Da) {
        case 1:
        case 7:
          if (1 == Ma) return da.getUint8(na + 8, !Oa);
          ua = 4 < Ma ? ua : na + 8;
          na = [];
          for (Da = 0; Da < Ma; Da++) na[Da] = da.getUint8(ua + Da);
          return na;
        case 2:
          return Gb(da, 4 < Ma ? ua : na + 8, Ma - 1);
        case 3:
          if (1 == Ma) return da.getUint16(na + 8, !Oa);
          ua = 2 < Ma ? ua : na + 8;
          na = [];
          for (Da = 0; Da < Ma; Da++) na[Da] = da.getUint16(ua + 2 * Da, !Oa);
          return na;
        case 4:
          if (1 == Ma) return da.getUint32(na + 8, !Oa);
          na = [];
          for (Da = 0; Da < Ma; Da++) na[Da] = da.getUint32(ua + 4 * Da, !Oa);
          return na;
        case 5:
          if (1 == Ma) {
            var Ha = da.getUint32(ua, !Oa);
            var Va = da.getUint32(ua + 4, !Oa);
            da = new Number(Ha / Va);
            da.numerator = Ha;
            da.denominator = Va;
            return da;
          }
          na = [];
          for (Da = 0; Da < Ma; Da++)
            (Ha = da.getUint32(ua + 8 * Da, !Oa)),
              (Va = da.getUint32(ua + 4 + 8 * Da, !Oa)),
              (na[Da] = new Number(Ha / Va)),
              (na[Da].numerator = Ha),
              (na[Da].denominator = Va);
          return na;
        case 9:
          if (1 == Ma) return da.getInt32(na + 8, !Oa);
          na = [];
          for (Da = 0; Da < Ma; Da++) na[Da] = da.getInt32(ua + 4 * Da, !Oa);
          return na;
        case 10:
          if (1 == Ma) return da.getInt32(ua, !Oa) / da.getInt32(ua + 4, !Oa);
          na = [];
          for (Da = 0; Da < Ma; Da++)
            na[Da] =
              da.getInt32(ua + 8 * Da, !Oa) / da.getInt32(ua + 4 + 8 * Da, !Oa);
          return na;
      }
    }

    function Gb(da, na, ua) {
      var Ma = "";
      for (ua = na + ua; na < ua; ++na)
        Ma += String.fromCharCode(da.getUint8(na));
      return Ma;
    }

    function Ta(da, na) {
      if ("Exif" != Gb(da, na, 4)) return !1;
      var ua = na + 6;
      if (18761 == da.getUint16(ua)) var Ma = !1;
      else if (19789 == da.getUint16(ua)) Ma = !0;
      else return !1;
      if (42 != da.getUint16(ua + 2, !Ma)) return !1;
      var Oa = da.getUint32(ua + 4, !Ma);
      if (8 > Oa) return !1;
      na = qb(da, ua, ua + Oa, xc, Ma);
      if (na.ExifIFDPointer) {
        var Da = qb(da, ua, ua + na.ExifIFDPointer, dc, Ma);
        for (Ha in Da) {
          switch (Ha) {
            case "LightSource":
            case "Flash":
            case "MeteringMode":
            case "ExposureProgram":
            case "SensingMethod":
            case "SceneCaptureType":
            case "SceneType":
            case "CustomRendered":
            case "WhiteBalance":
            case "GainControl":
            case "Contrast":
            case "Saturation":
            case "Sharpness":
            case "SubjectDistanceRange":
            case "FileSource":
              Da[Ha] = ec[Ha][Da[Ha]];
              break;
            case "ExifVersion":
            case "FlashpixVersion":
              Da[Ha] = String.fromCharCode(
                Da[Ha][0],
                Da[Ha][1],
                Da[Ha][2],
                Da[Ha][3]
              );
              break;
            case "ComponentsConfiguration":
              Da[Ha] =
                ec.Components[Da[Ha][0]] +
                ec.Components[Da[Ha][1]] +
                ec.Components[Da[Ha][2]] +
                ec.Components[Da[Ha][3]];
          }
          na[Ha] = Da[Ha];
        }
      }
      if (na.GPSInfoIFDPointer)
        for (Ha in ((Da = qb(da, ua, ua + na.GPSInfoIFDPointer, Cc, Ma)), Da)) {
          switch (Ha) {
            case "GPSVersionID":
              Da[Ha] =
                Da[Ha][0] + "." + Da[Ha][1] + "." + Da[Ha][2] + "." + Da[Ha][3];
          }
          na[Ha] = Da[Ha];
        }
      var Ha = Ma;
      Oa = ua + Oa;
      Ma = da.getUint16(Oa, !Ha);
      if ((Oa = da.getUint32(Oa + 2 + 12 * Ma, !Ha)))
        if (Oa > da.byteLength) da = {};
        else {
          Ha = qb(da, ua, ua + Oa, zc, Ha);
          if (Ha.Compression)
            switch (Ha.Compression) {
              case 6:
                Ha.JpegIFOffset &&
                  Ha.JpegIFByteCount &&
                  (Ha.blob = new Blob(
                    [
                      new Uint8Array(
                        da.buffer,
                        ua + Ha.JpegIFOffset,
                        Ha.JpegIFByteCount
                      ),
                    ],
                    {
                      type: "image/jpeg",
                    }
                  ));
                break;
              case 1:
                console.log(
                  "Thumbnail image format is TIFF, which is not implemented."
                );
                break;
              default:
                console.log(
                  "Unknown thumbnail image format '%s'",
                  Ha.Compression
                );
            }
          else
            2 == Ha.PhotometricInterpretation &&
              console.log(
                "Thumbnail image format is RGB, which is not implemented."
              );
          da = Ha;
        }
      else da = {};
      na.thumbnail = da;
      return na;
    }

    function tb(da) {
      var na = {};
      if (1 == da.nodeType) {
        if (0 < da.attributes.length) {
          na["@attributes"] = {};
          for (var ua = 0; ua < da.attributes.length; ua++) {
            var Ma = da.attributes.item(ua);
            na["@attributes"][Ma.nodeName] = Ma.nodeValue;
          }
        }
      } else if (3 == da.nodeType) return da.nodeValue;
      if (da.hasChildNodes())
        for (ua = 0; ua < da.childNodes.length; ua++) {
          Ma = da.childNodes.item(ua);
          var Oa = Ma.nodeName;
          if (null == na[Oa]) na[Oa] = tb(Ma);
          else {
            if (null == na[Oa].push) {
              var Da = na[Oa];
              na[Oa] = [];
              na[Oa].push(Da);
            }
            na[Oa].push(tb(Ma));
          }
        }
      return na;
    }
    var yb = this || window,
      ob = function (da) {
        if (da instanceof ob) return da;
        if (!(this instanceof ob)) return new ob(da);
        this.EXIFwrapped = da;
      };
    "undefined" !== typeof exports
      ? ("undefined" !== typeof module &&
          module.exports &&
          (exports = module.exports = ob),
        (exports.EXIF = ob))
      : (yb.EXIF = ob);
    var dc = (ob.Tags = {
        36864: "ExifVersion",
        40960: "FlashpixVersion",
        40961: "ColorSpace",
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        37121: "ComponentsConfiguration",
        37122: "CompressedBitsPerPixel",
        37500: "MakerNote",
        37510: "UserComment",
        40964: "RelatedSoundFile",
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        37520: "SubsecTime",
        37521: "SubsecTimeOriginal",
        37522: "SubsecTimeDigitized",
        33434: "ExposureTime",
        33437: "FNumber",
        34850: "ExposureProgram",
        34852: "SpectralSensitivity",
        34855: "ISOSpeedRatings",
        34856: "OECF",
        37377: "ShutterSpeedValue",
        37378: "ApertureValue",
        37379: "BrightnessValue",
        37380: "ExposureBias",
        37381: "MaxApertureValue",
        37382: "SubjectDistance",
        37383: "MeteringMode",
        37384: "LightSource",
        37385: "Flash",
        37396: "SubjectArea",
        37386: "FocalLength",
        41483: "FlashEnergy",
        41484: "SpatialFrequencyResponse",
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: "FocalPlaneResolutionUnit",
        41492: "SubjectLocation",
        41493: "ExposureIndex",
        41495: "SensingMethod",
        41728: "FileSource",
        41729: "SceneType",
        41730: "CFAPattern",
        41985: "CustomRendered",
        41986: "ExposureMode",
        41987: "WhiteBalance",
        41988: "DigitalZoomRation",
        41989: "FocalLengthIn35mmFilm",
        41990: "SceneCaptureType",
        41991: "GainControl",
        41992: "Contrast",
        41993: "Saturation",
        41994: "Sharpness",
        41995: "DeviceSettingDescription",
        41996: "SubjectDistanceRange",
        40965: "InteroperabilityIFDPointer",
        42016: "ImageUniqueID",
      }),
      xc = (ob.TiffTags = {
        256: "ImageWidth",
        257: "ImageHeight",
        34665: "ExifIFDPointer",
        34853: "GPSInfoIFDPointer",
        40965: "InteroperabilityIFDPointer",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        274: "Orientation",
        277: "SamplesPerPixel",
        284: "PlanarConfiguration",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        282: "XResolution",
        283: "YResolution",
        296: "ResolutionUnit",
        273: "StripOffsets",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        301: "TransferFunction",
        318: "WhitePoint",
        319: "PrimaryChromaticities",
        529: "YCbCrCoefficients",
        532: "ReferenceBlackWhite",
        306: "DateTime",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        305: "Software",
        315: "Artist",
        33432: "Copyright",
      }),
      Cc = (ob.GPSTags = {
        0: "GPSVersionID",
        1: "GPSLatitudeRef",
        2: "GPSLatitude",
        3: "GPSLongitudeRef",
        4: "GPSLongitude",
        5: "GPSAltitudeRef",
        6: "GPSAltitude",
        7: "GPSTimeStamp",
        8: "GPSSatellites",
        9: "GPSStatus",
        10: "GPSMeasureMode",
        11: "GPSDOP",
        12: "GPSSpeedRef",
        13: "GPSSpeed",
        14: "GPSTrackRef",
        15: "GPSTrack",
        16: "GPSImgDirectionRef",
        17: "GPSImgDirection",
        18: "GPSMapDatum",
        19: "GPSDestLatitudeRef",
        20: "GPSDestLatitude",
        21: "GPSDestLongitudeRef",
        22: "GPSDestLongitude",
        23: "GPSDestBearingRef",
        24: "GPSDestBearing",
        25: "GPSDestDistanceRef",
        26: "GPSDestDistance",
        27: "GPSProcessingMethod",
        28: "GPSAreaInformation",
        29: "GPSDateStamp",
        30: "GPSDifferential",
      }),
      zc = (ob.IFD1Tags = {
        256: "ImageWidth",
        257: "ImageHeight",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        273: "StripOffsets",
        274: "Orientation",
        277: "SamplesPerPixel",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        282: "XResolution",
        283: "YResolution",
        284: "PlanarConfiguration",
        296: "ResolutionUnit",
        513: "JpegIFOffset",
        514: "JpegIFByteCount",
        529: "YCbCrCoefficients",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        532: "ReferenceBlackWhite",
      }),
      ec = (ob.StringValues = {
        ExposureProgram: {
          0: "Not defined",
          1: "Manual",
          2: "Normal program",
          3: "Aperture priority",
          4: "Shutter priority",
          5: "Creative program",
          6: "Action program",
          7: "Portrait mode",
          8: "Landscape mode",
        },
        MeteringMode: {
          0: "Unknown",
          1: "Average",
          2: "CenterWeightedAverage",
          3: "Spot",
          4: "MultiSpot",
          5: "Pattern",
          6: "Partial",
          255: "Other",
        },
        LightSource: {
          0: "Unknown",
          1: "Daylight",
          2: "Fluorescent",
          3: "Tungsten (incandescent light)",
          4: "Flash",
          9: "Fine weather",
          10: "Cloudy weather",
          11: "Shade",
          12: "Daylight fluorescent (D 5700 - 7100K)",
          13: "Day white fluorescent (N 4600 - 5400K)",
          14: "Cool white fluorescent (W 3900 - 4500K)",
          15: "White fluorescent (WW 3200 - 3700K)",
          17: "Standard light A",
          18: "Standard light B",
          19: "Standard light C",
          20: "D55",
          21: "D65",
          22: "D75",
          23: "D50",
          24: "ISO studio tungsten",
          255: "Other",
        },
        Flash: {
          0: "Flash did not fire",
          1: "Flash fired",
          5: "Strobe return light not detected",
          7: "Strobe return light detected",
          9: "Flash fired, compulsory flash mode",
          13: "Flash fired, compulsory flash mode, return light not detected",
          15: "Flash fired, compulsory flash mode, return light detected",
          16: "Flash did not fire, compulsory flash mode",
          24: "Flash did not fire, auto mode",
          25: "Flash fired, auto mode",
          29: "Flash fired, auto mode, return light not detected",
          31: "Flash fired, auto mode, return light detected",
          32: "No flash function",
          65: "Flash fired, red-eye reduction mode",
          69: "Flash fired, red-eye reduction mode, return light not detected",
          71: "Flash fired, red-eye reduction mode, return light detected",
          73: "Flash fired, compulsory flash mode, red-eye reduction mode",
          77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
          79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
          89: "Flash fired, auto mode, red-eye reduction mode",
          93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
          95: "Flash fired, auto mode, return light detected, red-eye reduction mode",
        },
        SensingMethod: {
          1: "Not defined",
          2: "One-chip color area sensor",
          3: "Two-chip color area sensor",
          4: "Three-chip color area sensor",
          5: "Color sequential area sensor",
          7: "Trilinear sensor",
          8: "Color sequential linear sensor",
        },
        SceneCaptureType: {
          0: "Standard",
          1: "Landscape",
          2: "Portrait",
          3: "Night scene",
        },
        SceneType: {
          1: "Directly photographed",
        },
        CustomRendered: {
          0: "Normal process",
          1: "Custom process",
        },
        WhiteBalance: {
          0: "Auto white balance",
          1: "Manual white balance",
        },
        GainControl: {
          0: "None",
          1: "Low gain up",
          2: "High gain up",
          3: "Low gain down",
          4: "High gain down",
        },
        Contrast: {
          0: "Normal",
          1: "Soft",
          2: "Hard",
        },
        Saturation: {
          0: "Normal",
          1: "Low saturation",
          2: "High saturation",
        },
        Sharpness: {
          0: "Normal",
          1: "Soft",
          2: "Hard",
        },
        SubjectDistanceRange: {
          0: "Unknown",
          1: "Macro",
          2: "Close view",
          3: "Distant view",
        },
        FileSource: {
          3: "DSC",
        },
        Components: {
          0: "",
          1: "Y",
          2: "Cb",
          3: "Cr",
          4: "R",
          5: "G",
          6: "B",
        },
      }),
      Zb = {
        120: "caption",
        110: "credit",
        25: "keywords",
        55: "dateCreated",
        80: "byline",
        85: "bylineTitle",
        122: "captionWriter",
        105: "headline",
        116: "copyright",
        15: "category",
      };
    ob.enableXmp = function () {
      ob.isXmpEnabled = !0;
    };
    ob.disableXmp = function () {
      ob.isXmpEnabled = !1;
    };
    ob.getData = function (da, na) {
      if (
        ((self.Image && da instanceof self.Image) ||
          (self.HTMLImageElement && da instanceof self.HTMLImageElement)) &&
        !da.complete
      )
        return !1;
      da.exifdata ? na && na.call(da) : hb(da, na);
      return !0;
    };
    ob.getTag = function (da, na) {
      if (da.exifdata) return da.exifdata[na];
    };
    ob.getIptcTag = function (da, na) {
      if (da.exifdata) return da.iptcdata[na];
    };
    ob.getAllTags = function (da) {
      if (!da.exifdata) return {};
      var na;
      da = da.exifdata;
      var ua = {};
      for (na in da) da.hasOwnProperty(na) && (ua[na] = da[na]);
      return ua;
    };
    ob.getAllIptcTags = function (da) {
      if (!da.exifdata) return {};
      var na;
      da = da.iptcdata;
      var ua = {};
      for (na in da) da.hasOwnProperty(na) && (ua[na] = da[na]);
      return ua;
    };
    ob.pretty = function (da) {
      if (!da.exifdata) return "";
      var na;
      da = da.exifdata;
      var ua = "";
      for (na in da)
        da.hasOwnProperty(na) &&
          (ua =
            "object" == typeof da[na]
              ? da[na] instanceof Number
                ? ua +
                  (na +
                    " : " +
                    da[na] +
                    " [" +
                    da[na].numerator +
                    "/" +
                    da[na].denominator +
                    "]\r\n")
                : ua + (na + " : [" + da[na].length + " values]\r\n")
              : ua + (na + " : " + da[na] + "\r\n"));
      return ua;
    };
    ob.readFromBinaryFile = function (da) {
      return Sa(da);
    };
    "function" === typeof define &&
      define.amd &&
      define("exif-js", [], function () {
        return ob;
      });
  }.call(this));
  var Od = (function () {
      function la(hb, Sa, qb, ib) {
        var Gb = new FileReader();
        Gb.onload = function () {
          var Ta = new Image();
          Ta.src = Gb.result;
          Ta.onload = La.process.bind(La, hb, Ta, qb, ib);
        };
        Gb.onerror = function () {
          ib("WRONGFILEFORMAT");
        };
        Gb.readAsDataURL(Sa);
      }
      var La = {
        read: function (hb, Sa, qb) {
          if (hb.files && hb.files.length) {
            var ib = hb.files[0];
            hb = ib.name.split(".").pop().toLowerCase();
            -1 === ["jpg", "jpeg", "png"].indexOf(hb)
              ? qb("WRONGFILEFORMAT")
              : EXIF.getData(ib, function () {
                  console.log(
                    "INFO in ImageProcess - read() - EXIF data =",
                    EXIF.pretty(ib)
                  );
                  var Gb = EXIF.getTag(ib, "Orientation");
                  la(Gb, ib, Sa, qb);
                }) || la(-1, ib, Sa, qb);
          } else qb("NOFILE");
        },
        process: function (hb, Sa, qb, ib) {
          if ("number" === typeof hb && 2 <= hb && 8 >= hb) {
            console.log(
              "INFO in ImageProcess - process(): image needs to be reoriented. orientation =",
              hb
            );
            ib = Sa.width;
            var Gb = Sa.height,
              Ta = document.createElement("canvas");
            -1 < [5, 6, 7, 8].indexOf(hb)
              ? (console.log(
                  "INFO in ImageProcess - process(): the image needs to be 90\u00b0 rotated"
                ),
                (Ta.width = Gb),
                (Ta.height = ib))
              : ((Ta.width = ib), (Ta.height = Gb));
            var tb = Ta.getContext("2d");
            switch (hb) {
              case 2:
                tb.transform(-1, 0, 0, 1, ib, 0);
                break;
              case 3:
                tb.transform(-1, 0, 0, -1, ib, Gb);
                break;
              case 4:
                tb.transform(1, 0, 0, -1, 0, Gb);
                break;
              case 5:
                tb.transform(0, 1, 1, 0, 0, 0);
                break;
              case 6:
                tb.transform(0, 1, -1, 0, Gb, 0);
                break;
              case 7:
                tb.transform(0, -1, -1, 0, Gb, ib);
                break;
              case 8:
                tb.transform(0, -1, 1, 0, 0, ib);
                break;
              default:
                tb.transform(1, 0, 0, 1, 0, 0);
            }
            tb.drawImage(Sa, 0, 0);
            hb = Ta;
          } else hb = Sa;
          qb(hb);
        },
      };
      return La;
    })(),
    Yc = {
      disableFallback: !0,
      glassesDBURL: "http://localhost:5500/sku/",
      appstaticURL: "http://localhost:5500/",
      fallbackURL: "https://fallbackglassesdb.jeeliz.com",
    },
    vc = {
      notLoaded: -1,
      init: 0,
      fallback: 1,
      realtime: 2,
      loadingModel: 3,
      paused: 4,
    },
    pb = {
      canRT: !0,
      isRT: !0,
      sku: void 0,
      mode: vc.notLoaded,
    },
    Hd = -1,
    Id = -1,
    ud = -1,
    vd = -1,
    Ia = {
      cv: null,
      container: null,
      adjust: null,
      adjustNotice: null,
      adjustExit: null,
      inputFile: null,
      inputFileButton: null,
      inputFileButtonFallbackMessage: null,
      uploadNotice: null,
      backToRTButton: null,
      loading: null,
      trackIframe: null,
    },
    jd = {
      enabled: !1,
      callback: null,
      interval: 1e3,
    },
    Gd = {
      error: !1,
    },
    Ed = null,
    fd = null,
    kc = {
      start: function (la) {
        console.log("INFO in JeeWidget.js: start()");
        if (pb.mode !== vc.notLoaded) kc.resume();
        else {
          if (la.settings) for (var La in la.settings) Yc[La] = la.settings[La];
          la.NNCPath && Tb.set_NNCPath(la.NNCPath);
          la.faceDetectionCallback &&
            ((jd.enabled = !0),
            (jd.callback = la.faceDetectionCallback),
            (jd.interval =
              "undefined" === typeof la.faceDetectionInterval
                ? 1e3
                : la.faceDetectionInterval));
          Ia.container = document.getElementById("JeeWidget");
          if (!Ia.container)
            throw Error(
              "Cannot find a <div> element with id=JeeWidget to append the VTO widget."
            );
          Ia.cv = document.getElementById("JeeWidgetCanvas");
          Ia.cv ||
            ((Ia.cv = document.createElement("canvas")),
            Ia.container.appendChild(Ia.cv));
          Ia.loading = document.getElementById("JeeWidgetLoading");
          Wd();
          la.onError && (Gd.error = la.onError);
          Xd();
          if (!$(Ia.container).width()) return Eb("PLACEHOLDER_NULL_WIDTH"), !1;
          if (!$(Ia.container).height())
            return Eb("PLACEHOLDER_NULL_HEIGHT"), !1;
          Xb();
          new ResizeSensor($(Ia.container), function (hb) {
            Xb();
          });
          (la.searchImageMask || la.searchImageColor) &&
            Tb.set_loading(la.searchImageMask, la.searchImageColor);
          la.callbackReady && (fd = la.callbackReady);
          pb.mode = vc.init;
          La =
            "undefined" === typeof la.assetsPath
              ? Yc.appstaticURL + "jeefit/"
              : la.assetsPath;
          "undefined" !== typeof la.catalog && (Ed = la.catalog);
          if (la.onWebcamGet) Tb.onWebcamGet(la.onWebcamGet);
          Tb.init(La, bb, Db, Ia.cv);
          Tb.onHalfLoad(kc.load.bind(kc, la.sku ? la.sku : null));
          return !0;
        }
      },
      pause: function () {
        pb.isRT && (Tb.switch_sleep(!0), (pb.mode = vc.paused));
      },
      resume: function () {
        pb.isRT && (Tb.switch_sleep(!1), (pb.mode = vc.realtime));
      },
      set_videoRotation: function (la) {
        pb.isRT && Tb.set_videoRotation(la);
      },
      set_videoSizes: function (la, La, hb, Sa, qb, ib) {
        pb.isRT && Tb.set_videoSizes(la, La, hb, Sa, qb, ib);
      },
      resize: function () {
        Xb();
      },
      set_scale: function (la) {
        Tb.set_scale(la);
      },
      capture_image: function (la, La, hb) {
        Tb && Tb.ready ? Tb.capture_image(la, La, hb, !1) : La(!1);
      },
      toggle_loading: function (la) {
        Ia.loading && (la ? $(Ia.loading).show() : $(Ia.loading).hide());
      },
      load_modelStandalone: function (la, La) {
        if (!pb.isRT)
          throw Error("Loading standalone models is only available in RT mode");
        pb.mode === vc.paused && kc.resume();
        pb.mode = vc.loadingModel;
        if ("string" === typeof la)
          $.ajax({
            method: "GET",
            url: la,
            dataType: "json",
          })
            .then(function (Sa) {
              Tb.set_modelStandalone(Sa, La, la);
            })
            .fail(Fb);
        else {
          var hb = "RANDOM_SKU_" + Date.now().toString();
          Tb.set_modelStandalone(la, La, hb);
        }
      },
      load: function (la, La) {
        kc.toggle_loading(!0);
        pb.isRT ? kc.load_RT(la, La) : kc.load_fallback(la, La);
      },
      load_fallback: function (la, La) {
        la &&
          ((pb.mode = vc.loadingModel),
          Tb.load_model(
            null,
            null,
            function () {
              pb.mode = vc.fallback;
              kc.toggle_loading(!1);
              La && La();
              Pd(la);
            },
            la
          ));
      },
      load_RT: function (la, La) {
        la === pb.sku
          ? kc.toggle_loading(!1)
          : ((pb.sku = la),
            (pb.mode = vc.loadingModel),
            pb.mode === vc.paused && kc.resume(),
            la
              ? Ed && Ed[la]
                ? Qd(la, Ed[la], La)
                : $.ajax({
                    method: "GET",
                    url: Yc.glassesDBURL + la,
                    dataType: "json",
                  })
                    .then(function (hb) {
                      console.log(hb)
                      if (hb.error) return Fb();
                      Qd(la, hb.intrinsic, La);
                    })
                    .fail(Fb)
              : ((pb.mode = vc.realtime),
                kc.toggle_loading(!1),
                Tb.start_rendering(),
                La && La()));
      },
    };
  return kc;
})();
window.JEEFITAPI = JEEFITAPI;
window.JeefitFallback = JeefitFallback;
window.JEEWIDGET = {
  start: JeeWidget.start,
  pause: JeeWidget.pause,
  resume: JeeWidget.resume,
  load: JeeWidget.load,
  load_modelStandalone: JeeWidget.load_modelStandalone,
  capture_image: JeeWidget.capture_image,
  set_videoRotation: JeeWidget.set_videoRotation,
  resize: JeeWidget.resize,
  set_scale: JeeWidget.set_scale,
  set_videoSizes: JeeWidget.set_videoSizes,
};
