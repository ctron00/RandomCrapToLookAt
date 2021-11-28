new((function a(e) {
  var t = {};

  function r(a) {
    if (t[a]) return t[a].exports;
    var i = t[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(i.exports, i, i.exports, r), i.l = !0, i.exports
  }
  r.m = e, r.c = t, r.i = function(e) {
    return e
  }, r.d = function(e, t, a) {
    r.o(e, t) || Object.defineProperty(e, t, {
      configurable: !1,
      enumerable: !0,
      get: a
    })
  }, r.r = function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, r.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return r.d(t, "a", t), t
  }, r.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "/", r.oe = function(e) {
    throw console.error(e), e
  };
  var a = r(r.s = 12);
  return a.default || a
})({
  12: function(e, t, r) {
    "use strict";
    r.r(t);
    var a = r(9),
      i = r(1),
      n = r(0),
      s = r(8);
    t.default = function(e) {
      var t = new s.EventEmitter;
      t.trigger = function(e) {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 :
            0), i = 1; i < r; i++) a[i - 1] = arguments[i];
        t.emit.apply(t, [e, e].concat(a))
      }, t.off = function(e) {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 :
            0), i = 1; i < r; i++) a[i - 1] = arguments[i];
        t.removeListener.apply(t, [e].concat(a))
      };
      var r = function(t, r) {
        e.postMessage({
          event: t,
          data: r
        })
      };
      e.addEventListener("message", (function(i) {
        var s = i.data;
        switch (s.cmd) {
          case "init":
            var o = JSON.parse(s.config);
            e.demuxer = new a.a(t, s.typeSupported, o, s.vendor),
              Object(n.a)(o.debug), r("init", null);
            break;
          case "demux":
            e.demuxer.push(s.data, s.decryptdata, s.initSegment,
              s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity,
              s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset,
              s.defaultInitPTS)
        }
      })), t.on(i.a.FRAG_DECRYPTED, r), t.on(i.a.FRAG_PARSING_INIT_SEGMENT,
        r), t.on(i.a.FRAG_PARSED, r), t.on(i.a.ERROR, r), t.on(i.a.FRAG_PARSING_METADATA,
        r), t.on(i.a.FRAG_PARSING_USERDATA, r), t.on(i.a.INIT_PTS_FOUND,
        r), t.on(i.a.FRAG_PARSING_DATA, (function(t, r) {
        var a = [],
          i = {
            event: t,
            data: r
          };
        r.data1 && (i.data1 = r.data1.buffer, a.push(r.data1.buffer),
          delete r.data1), r.data2 && (i.data2 = r.data2.buffer,
          a.push(r.data2.buffer), delete r.data2), e.postMessage(
          i, a)
      }))
    }
  },
  8: function(e, t, r) {
    "use strict";
    var a = Object.prototype.hasOwnProperty,
      i = "~";

    function n() {}

    function s(e, t, r) {
      this.fn = e, this.context = t, this.once = r || !1
    }

    function o(e, t, r, a, n) {
      if ("function" != typeof r) throw new TypeError(
        "The listener must be a function");
      var o = new s(r, a || e, n),
        l = i ? i + t : t;
      return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l],
          o
        ] : e._events[l].push(o) : (e._events[l] = o, e._eventsCount++),
        e
    }

    function l(e, t) {
      0 == --e._eventsCount ? e._events = new n : delete e._events[t]
    }

    function d() {
      this._events = new n, this._eventsCount = 0
    }
    Object.create && (n.prototype = Object.create(null), (new n).__proto__ ||
        (i = !1)), d.prototype.eventNames = function() {
        var e, t, r = [];
        if (0 === this._eventsCount) return r;
        for (t in e = this._events) a.call(e, t) && r.push(i ? t.slice(1) :
          t);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(
          e)) : r
      }, d.prototype.listeners = function(e) {
        var t = i ? i + e : e,
          r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var a = 0, n = r.length, s = new Array(n); a < n; a++) s[a] =
          r[a].fn;
        return s
      }, d.prototype.listenerCount = function(e) {
        var t = i ? i + e : e,
          r = this._events[t];
        return r ? r.fn ? 1 : r.length : 0
      }, d.prototype.emit = function(e, t, r, a, n, s) {
        var o = i ? i + e : e;
        if (!this._events[o]) return !1;
        var l, d, u = this._events[o],
          f = arguments.length;
        if (u.fn) {
          switch (u.once && this.removeListener(e, u.fn, void 0, !0), f) {
            case 1:
              return u.fn.call(u.context), !0;
            case 2:
              return u.fn.call(u.context, t), !0;
            case 3:
              return u.fn.call(u.context, t, r), !0;
            case 4:
              return u.fn.call(u.context, t, r, a), !0;
            case 5:
              return u.fn.call(u.context, t, r, a, n), !0;
            case 6:
              return u.fn.call(u.context, t, r, a, n, s), !0
          }
          for (d = 1, l = new Array(f - 1); d < f; d++) l[d - 1] =
            arguments[d];
          u.fn.apply(u.context, l)
        } else {
          var h, c = u.length;
          for (d = 0; d < c; d++) switch (u[d].once && this.removeListener(
            e, u[d].fn, void 0, !0), f) {
            case 1:
              u[d].fn.call(u[d].context);
              break;
            case 2:
              u[d].fn.call(u[d].context, t);
              break;
            case 3:
              u[d].fn.call(u[d].context, t, r);
              break;
            case 4:
              u[d].fn.call(u[d].context, t, r, a);
              break;
            default:
              if (!l)
                for (h = 1, l = new Array(f - 1); h < f; h++) l[h - 1] =
                  arguments[h];
              u[d].fn.apply(u[d].context, l)
          }
        }
        return !0
      }, d.prototype.on = function(e, t, r) {
        return o(this, e, t, r, !1)
      }, d.prototype.once = function(e, t, r) {
        return o(this, e, t, r, !0)
      }, d.prototype.removeListener = function(e, t, r, a) {
        var n = i ? i + e : e;
        if (!this._events[n]) return this;
        if (!t) return l(this, n), this;
        var s = this._events[n];
        if (s.fn) s.fn !== t || a && !s.once || r && s.context !== r || l(
          this, n);
        else {
          for (var o = 0, d = [], u = s.length; o < u; o++)(s[o].fn !== t ||
            a && !s[o].once || r && s[o].context !== r) && d.push(s[o]);
          d.length ? this._events[n] = 1 === d.length ? d[0] : d : l(this,
            n)
        }
        return this
      }, d.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = i ? i + e : e, this._events[t] && l(this, t)) : (
          this._events = new n, this._eventsCount = 0), this
      }, d.prototype.off = d.prototype.removeListener, d.prototype.addListener =
      d.prototype.on, d.prefixed = i, d.EventEmitter = d, e.exports = d
  },
  0: function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
      return u
    })), r.d(t, "b", (function() {
      return f
    }));
    var a = r(5);

    function i() {}
    var n = {
        trace: i,
        debug: i,
        log: i,
        warn: i,
        info: i,
        error: i
      },
      s = n;

    function o(e, t) {
      return t = "[" + e + "] > " + t
    }
    var l = Object(a.a)();

    function d(e) {
      var t = l.console[e];
      return t ? function() {
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
          a[i] = arguments[i];
        a[0] && (a[0] = o(e, a[0])), t.apply(l.console, a)
      } : i
    }
    var u = function(e) {
        if (l.console && !0 === e || "object" == typeof e) {
          ! function(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 :
                0), a = 1; a < t; a++) r[a - 1] = arguments[a];
            r.forEach((function(t) {
              s[t] = e[t] ? e[t].bind(e) : d(t)
            }))
          }(e, "debug", "log", "info", "warn", "error");
          try {
            s.log()
          } catch (e) {
            s = n
          }
        } else s = n
      },
      f = s
  },
  5: function(e, t, r) {
    "use strict";

    function a() {
      return "undefined" == typeof window ? self : window
    }
    r.d(t, "a", (function() {
      return a
    }))
  },
  1: function(e, t, r) {
    "use strict";
    t.a = {
      MEDIA_ATTACHING: "hlsMediaAttaching",
      MEDIA_ATTACHED: "hlsMediaAttached",
      MEDIA_DETACHING: "hlsMediaDetaching",
      MEDIA_DETACHED: "hlsMediaDetached",
      BUFFER_RESET: "hlsBufferReset",
      BUFFER_CODECS: "hlsBufferCodecs",
      BUFFER_CREATED: "hlsBufferCreated",
      BUFFER_APPENDING: "hlsBufferAppending",
      BUFFER_APPENDED: "hlsBufferAppended",
      BUFFER_EOS: "hlsBufferEos",
      BUFFER_FLUSHING: "hlsBufferFlushing",
      BUFFER_FLUSHED: "hlsBufferFlushed",
      MANIFEST_LOADING: "hlsManifestLoading",
      MANIFEST_LOADED: "hlsManifestLoaded",
      MANIFEST_PARSED: "hlsManifestParsed",
      LEVEL_SWITCHING: "hlsLevelSwitching",
      LEVEL_SWITCHED: "hlsLevelSwitched",
      LEVEL_LOADING: "hlsLevelLoading",
      LEVEL_LOADED: "hlsLevelLoaded",
      LEVEL_UPDATED: "hlsLevelUpdated",
      LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
      LEVELS_UPDATED: "hlsLevelsUpdated",
      AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
      AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
      AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
      AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
      AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
      SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
      SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
      SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
      SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
      SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
      CUES_PARSED: "hlsCuesParsed",
      NON_NATIVE_TEXT_TRACKS_FOUND: "hlsNonNativeTextTracksFound",
      INIT_PTS_FOUND: "hlsInitPtsFound",
      FRAG_LOADING: "hlsFragLoading",
      FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
      FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
      FRAG_LOADED: "hlsFragLoaded",
      FRAG_DECRYPTED: "hlsFragDecrypted",
      FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
      FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
      FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
      FRAG_PARSING_DATA: "hlsFragParsingData",
      FRAG_PARSED: "hlsFragParsed",
      FRAG_BUFFERED: "hlsFragBuffered",
      FRAG_CHANGED: "hlsFragChanged",
      FPS_DROP: "hlsFpsDrop",
      FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
      ERROR: "hlsError",
      DESTROYING: "hlsDestroying",
      KEY_LOADING: "hlsKeyLoading",
      KEY_LOADED: "hlsKeyLoaded",
      STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
      LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
    }
  },
  9: function(e, t, r) {
    "use strict";
    var a = r(1),
      i = r(2),
      n = function() {
        function e(e, t) {
          this.subtle = e, this.aesIV = t
        }
        return e.prototype.decrypt = function(e, t) {
          return this.subtle.decrypt({
            name: "AES-CBC",
            iv: this.aesIV
          }, t, e)
        }, e
      }(),
      s = function() {
        function e(e, t) {
          this.subtle = e, this.key = t
        }
        return e.prototype.expandKey = function() {
          return this.subtle.importKey("raw", this.key, {
            name: "AES-CBC"
          }, !1, ["encrypt", "decrypt"])
        }, e
      }();
    var o = function() {
        function e() {
          this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [
              new Uint32Array(256), new Uint32Array(256), new Uint32Array(
                256), new Uint32Array(256)
            ], this.invSubMix = [new Uint32Array(256), new Uint32Array(
              256), new Uint32Array(256), new Uint32Array(256)], this.sBox =
            new Uint32Array(256), this.invSBox = new Uint32Array(256),
            this.key = new Uint32Array(0), this.initTable()
        }
        var t = e.prototype;
        return t.uint8ArrayToUint32Array_ = function(e) {
          for (var t = new DataView(e), r = new Uint32Array(4), a = 0; a <
            4; a++) r[a] = t.getUint32(4 * a);
          return r
        }, t.initTable = function() {
          var e = this.sBox,
            t = this.invSBox,
            r = this.subMix,
            a = r[0],
            i = r[1],
            n = r[2],
            s = r[3],
            o = this.invSubMix,
            l = o[0],
            d = o[1],
            u = o[2],
            f = o[3],
            h = new Uint32Array(256),
            c = 0,
            v = 0,
            p = 0;
          for (p = 0; p < 256; p++) h[p] = p < 128 ? p << 1 : p << 1 ^
            283;
          for (p = 0; p < 256; p++) {
            var g = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
            g = g >>> 8 ^ 255 & g ^ 99, e[c] = g, t[g] = c;
            var m = h[c],
              y = h[m],
              b = h[y],
              E = 257 * h[g] ^ 16843008 * g;
            a[c] = E << 24 | E >>> 8, i[c] = E << 16 | E >>> 16, n[c] =
              E << 8 | E >>> 24, s[c] = E, E = 16843009 * b ^ 65537 * y ^
              257 * m ^ 16843008 * c, l[g] = E << 24 | E >>> 8, d[g] =
              E << 16 | E >>> 16, u[g] = E << 8 | E >>> 24, f[g] = E, c ?
              (c = m ^ h[h[h[b ^ m]]], v ^= h[h[v]]) : c = v = 1
          }
        }, t.expandKey = function(e) {
          for (var t = this.uint8ArrayToUint32Array_(e), r = !0, a = 0; a <
            t.length && r;) r = t[a] === this.key[a], a++;
          if (!r) {
            this.key = t;
            var i = this.keySize = t.length;
            if (4 !== i && 6 !== i && 8 !== i) throw new Error(
              "Invalid aes key size=" + i);
            var n, s, o, l, d = this.ksRows = 4 * (i + 6 + 1),
              u = this.keySchedule = new Uint32Array(d),
              f = this.invKeySchedule = new Uint32Array(d),
              h = this.sBox,
              c = this.rcon,
              v = this.invSubMix,
              p = v[0],
              g = v[1],
              m = v[2],
              y = v[3];
            for (n = 0; n < d; n++) n < i ? o = u[n] = t[n] : (l = o, n %
              i == 0 ? (l = h[(l = l << 8 | l >>> 24) >>> 24] << 24 |
                h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[
                  255 & l], l ^= c[n / i | 0] << 24) : i > 6 && n % i ==
              4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 |
                h[l >>> 8 & 255] << 8 | h[255 & l]), u[n] = o = (u[n -
                i] ^ l) >>> 0);
            for (s = 0; s < d; s++) n = d - s, l = 3 & s ? u[n] : u[n -
                4], f[s] = s < 4 || n <= 4 ? l : p[h[l >>> 24]] ^ g[h[l >>>
                16 & 255]] ^ m[h[l >>> 8 & 255]] ^ y[h[255 & l]], f[s] =
              f[s] >>> 0
          }
        }, t.networkToHostOrderSwap = function(e) {
          return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>>
            24
        }, t.decrypt = function(e, t, r, a) {
          for (var i, n, s, o, l, d, u, f, h, c, v, p, g, m, y, b, E, T =
              this.keySize + 6, S = this.invKeySchedule, _ = this.invSBox,
              A = this.invSubMix, R = A[0], L = A[1], w = A[2], D = A[3],
              k = this.uint8ArrayToUint32Array_(r), O = k[0], x = k[1],
              I = k[2], P = k[3], C = new Int32Array(e), F = new Int32Array(
                C.length), M = this.networkToHostOrderSwap; t < C.length;) {
            for (h = M(C[t]), c = M(C[t + 1]), v = M(C[t + 2]), p = M(C[
                t + 3]), l = h ^ S[0], d = p ^ S[1], u = v ^ S[2], f =
              c ^ S[3], g = 4, m = 1; m < T; m++) i = R[l >>> 24] ^ L[d >>
                16 & 255] ^ w[u >> 8 & 255] ^ D[255 & f] ^ S[g], n = R[
                d >>> 24] ^ L[u >> 16 & 255] ^ w[f >> 8 & 255] ^ D[255 &
                l] ^ S[g + 1], s = R[u >>> 24] ^ L[f >> 16 & 255] ^ w[l >>
                8 & 255] ^ D[255 & d] ^ S[g + 2], o = R[f >>> 24] ^ L[l >>
                16 & 255] ^ w[d >> 8 & 255] ^ D[255 & u] ^ S[g + 3], l =
              i, d = n, u = s, f = o, g += 4;
            i = _[l >>> 24] << 24 ^ _[d >> 16 & 255] << 16 ^ _[u >> 8 &
                255] << 8 ^ _[255 & f] ^ S[g], n = _[d >>> 24] << 24 ^
              _[u >> 16 & 255] << 16 ^ _[f >> 8 & 255] << 8 ^ _[255 & l] ^
              S[g + 1], s = _[u >>> 24] << 24 ^ _[f >> 16 & 255] << 16 ^
              _[l >> 8 & 255] << 8 ^ _[255 & d] ^ S[g + 2], o = _[f >>>
                24] << 24 ^ _[l >> 16 & 255] << 16 ^ _[d >> 8 & 255] <<
              8 ^ _[255 & u] ^ S[g + 3], g += 3, F[t] = M(i ^ O), F[t +
                1] = M(o ^ x), F[t + 2] = M(s ^ I), F[t + 3] = M(n ^ P),
              O = h, x = c, I = v, P = p, t += 4
          }
          return a ? (y = F.buffer, b = y.byteLength, (E = b && new DataView(
            y).getUint8(b - 1)) ? y.slice(0, b - E) : y) : F.buffer
        }, t.destroy = function() {
          this.key = void 0, this.keySize = void 0, this.ksRows = void 0,
            this.sBox = void 0, this.invSBox = void 0, this.subMix =
            void 0, this.invSubMix = void 0, this.keySchedule = void 0,
            this.invKeySchedule = void 0, this.rcon = void 0
        }, e
      }(),
      l = r(0),
      d = r(5),
      u = Object(d.a)(),
      f = function() {
        function e(e, t, r) {
          var a = (void 0 === r ? {} : r).removePKCS7Padding,
            i = void 0 === a || a;
          if (this.logEnabled = !0, this.observer = e, this.config = t,
            this.removePKCS7Padding = i, i) try {
            var n = u.crypto;
            n && (this.subtle = n.subtle || n.webkitSubtle)
          } catch (e) {}
          this.disableWebCrypto = !this.subtle
        }
        var t = e.prototype;
        return t.isSync = function() {
          return this.disableWebCrypto && this.config.enableSoftwareAES
        }, t.decrypt = function(e, t, r, a) {
          var i = this;
          if (this.disableWebCrypto && this.config.enableSoftwareAES) {
            this.logEnabled && (l.b.log("JS AES decrypt"), this.logEnabled = !
              1);
            var d = this.decryptor;
            d || (this.decryptor = d = new o), d.expandKey(t), a(d.decrypt(
              e, 0, r, this.removePKCS7Padding))
          } else {
            this.logEnabled && (l.b.log("WebCrypto AES decrypt"), this.logEnabled = !
              1);
            var u = this.subtle;
            this.key !== t && (this.key = t, this.fastAesKey = new s(u,
              t)), this.fastAesKey.expandKey().then((function(s) {
              new n(u, r).decrypt(e, s).catch((function(n) {
                i.onWebCryptoError(n, e, t, r, a)
              })).then((function(e) {
                a(e)
              }))
            })).catch((function(n) {
              i.onWebCryptoError(n, e, t, r, a)
            }))
          }
        }, t.onWebCryptoError = function(e, t, r, n, s) {
          this.config.enableSoftwareAES ? (l.b.log(
              "WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !
            0, this.logEnabled = !0, this.decrypt(t, r, n, s)) : (l.b
            .error("decrypting error : " + e.message), this.observer.trigger(
              a.a.ERROR, {
                type: i.b.MEDIA_ERROR,
                details: i.a.FRAG_DECRYPT_ERROR,
                fatal: !0,
                reason: e.message
              }))
        }, t.destroy = function() {
          var e = this.decryptor;
          e && (e.destroy(), this.decryptor = void 0)
        }, e
      }(),
      h = r(3);

    function c(e, t) {
      return 255 === e[t] && 240 == (246 & e[t + 1])
    }

    function v(e, t) {
      return 1 & e[t + 1] ? 7 : 9
    }

    function p(e, t) {
      return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>>
        5
    }

    function g(e, t) {
      return !!(t + 1 < e.length && c(e, t))
    }

    function m(e, t) {
      if (g(e, t)) {
        var r = v(e, t);
        if (t + r >= e.length) return !1;
        var a = p(e, t);
        if (a <= r) return !1;
        var i = t + a;
        if (i === e.length || i + 1 < e.length && c(e, i)) return !0
      }
      return !1
    }

    function y(e, t, r, n, s) {
      if (!e.samplerate) {
        var o = function(e, t, r, n) {
          var s, o, d, u, f, h = navigator.userAgent.toLowerCase(),
            c = n,
            v = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050,
              16e3, 12e3, 11025, 8e3, 7350
            ];
          if (s = 1 + ((192 & t[r + 2]) >>> 6), !((o = (60 & t[r + 2]) >>>
              2) > v.length - 1)) return u = (1 & t[r + 2]) << 2, u |=
            (192 & t[r + 3]) >>> 6, l.b.log("manifest codec:" + n +
              ",ADTS data:type:" + s + ",sampleingIndex:" + o + "[" +
              v[o] + "Hz],channelConfig:" + u), /firefox/i.test(h) ?
            o >= 6 ? (s = 5, f = new Array(4), d = o - 3) : (s = 2, f =
              new Array(2), d = o) : -1 !== h.indexOf("android") ? (s =
              2, f = new Array(2), d = o) : (s = 5, f = new Array(4),
              n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf(
                "mp4a.40.5")) || !n && o >= 6 ? d = o - 3 : ((n && -1 !==
                n.indexOf("mp4a.40.2") && (o >= 6 && 1 === u ||
                  /vivaldi/i.test(h)) || !n && 1 === u) && (s = 2,
                f = new Array(2)), d = o)), f[0] = s << 3, f[0] |= (
              14 & o) >> 1, f[1] |= (1 & o) << 7, f[1] |= u << 3, 5 ===
            s && (f[1] |= (14 & d) >> 1, f[2] = (1 & d) << 7, f[2] |=
              8, f[3] = 0), {
              config: f,
              samplerate: v[o],
              channelCount: u,
              codec: "mp4a.40." + s,
              manifestCodec: c
            };
          e.trigger(a.a.ERROR, {
            type: i.b.MEDIA_ERROR,
            details: i.a.FRAG_PARSING_ERROR,
            fatal: !0,
            reason: "invalid ADTS sampling index:" + o
          })
        }(t, r, n, s);
        e.config = o.config, e.samplerate = o.samplerate, e.channelCount =
          o.channelCount, e.codec = o.codec, e.manifestCodec = o.manifestCodec,
          l.b.log("parsed codec:" + e.codec + ",rate:" + o.samplerate +
            ",nb channel:" + o.channelCount)
      }
    }

    function b(e) {
      return 9216e4 / e
    }

    function E(e, t, r, a, i) {
      var n = function(e, t, r, a, i) {
        var n, s, o = e.length;
        if (n = v(e, t), s = p(e, t), (s -= n) > 0 && t + n + s <= o)
          return {
            headerLength: n,
            frameLength: s,
            stamp: r + a * i
          }
      }(t, r, a, i, b(e.samplerate));
      if (n) {
        var s = n.stamp,
          o = n.headerLength,
          l = n.frameLength,
          d = {
            unit: t.subarray(r + o, r + o + l),
            pts: s,
            dts: s
          };
        return e.samples.push(d), {
          sample: d,
          length: l + o
        }
      }
    }
    var T = r(4),
      S = function() {
        function e(e, t, r) {
          this.observer = e, this.config = r, this.remuxer = t
        }
        var t = e.prototype;
        return t.resetInitSegment = function(e, t, r, a) {
          this._audioTrack = {
            container: "audio/adts",
            type: "audio",
            id: 0,
            sequenceNumber: 0,
            isAAC: !0,
            samples: [],
            len: 0,
            manifestCodec: t,
            duration: a,
            inputTimeScale: 9e4
          }
        }, t.resetTimeStamp = function() {}, e.probe = function(e) {
          if (!e) return !1;
          for (var t = (T.a.getID3Data(e, 0) || []).length, r = e.length; t <
            r; t++)
            if (m(e, t)) return l.b.log("ADTS sync word found !"), !0;
          return !1
        }, t.append = function(e, t, r, a) {
          for (var i = this._audioTrack, n = T.a.getID3Data(e, 0) || [],
              s = T.a.getTimeStamp(n), o = Object(h.a)(s) ? 90 * s :
              9e4 * t, d = 0, u = o, f = e.length, c = n.length, v = [{
                pts: u,
                dts: u,
                data: n
              }]; c < f - 1;)
            if (g(e, c) && c + 5 < f) {
              y(i, this.observer, e, c, i.manifestCodec);
              var p = E(i, e, c, o, d);
              if (!p) {
                l.b.log("Unable to parse AAC frame");
                break
              }
              c += p.length, u = p.sample.pts, d++
            } else T.a.isHeader(e, c) ? (n = T.a.getID3Data(e, c), v.push({
              pts: u,
              dts: u,
              data: n
            }), c += n.length) : c++;
          this.remuxer.remux(i, {
            samples: []
          }, {
            samples: v,
            inputTimeScale: 9e4
          }, {
            samples: []
          }, t, r, a)
        }, t.destroy = function() {}, e
      }(),
      _ = r(10),
      A = {
        BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352,
          384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192,
          224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160,
          192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144,
          160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80,
          96, 112, 128, 144, 160
        ],
        SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025,
          12e3, 8e3
        ],
        SamplesCoefficients: [
          [0, 72, 144, 12],
          [0, 0, 0, 0],
          [0, 72, 144, 12],
          [0, 144, 144, 12]
        ],
        BytesInSlot: [0, 1, 1, 4],
        appendFrame: function(e, t, r, a, i) {
          if (!(r + 24 > t.length)) {
            var n = this.parseHeader(t, r);
            if (n && r + n.frameLength <= t.length) {
              var s = a + i * (9e4 * n.samplesPerFrame / n.sampleRate),
                o = {
                  unit: t.subarray(r, r + n.frameLength),
                  pts: s,
                  dts: s
                };
              return e.config = [], e.channelCount = n.channelCount, e.samplerate =
                n.sampleRate, e.samples.push(o), {
                  sample: o,
                  length: n.frameLength
                }
            }
          }
        },
        parseHeader: function(e, t) {
          var r = e[t + 1] >> 3 & 3,
            a = e[t + 1] >> 1 & 3,
            i = e[t + 2] >> 4 & 15,
            n = e[t + 2] >> 2 & 3,
            s = e[t + 2] >> 1 & 1;
          if (1 !== r && 0 !== i && 15 !== i && 3 !== n) {
            var o = 3 === r ? 3 - a : 3 === a ? 3 : 4,
              l = 1e3 * A.BitratesMap[14 * o + i - 1],
              d = 3 === r ? 0 : 2 === r ? 1 : 2,
              u = A.SamplingRateMap[3 * d + n],
              f = e[t + 3] >> 6 == 3 ? 1 : 2,
              h = A.SamplesCoefficients[r][a],
              c = A.BytesInSlot[a],
              v = 8 * h * c;
            return {
              sampleRate: u,
              channelCount: f,
              frameLength: parseInt(h * l / u + s, 10) * c,
              samplesPerFrame: v
            }
          }
        },
        isHeaderPattern: function(e, t) {
          return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[
            t + 1])
        },
        isHeader: function(e, t) {
          return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
        },
        probe: function(e, t) {
          if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
            var r = this.parseHeader(e, t),
              a = 4;
            r && r.frameLength && (a = r.frameLength);
            var i = t + a;
            if (i === e.length || i + 1 < e.length && this.isHeaderPattern(
                e, i)) return !0
          }
          return !1
        }
      },
      R = A,
      L = function() {
        function e(e) {
          this.data = e, this.bytesAvailable = e.byteLength, this.word =
            0, this.bitsAvailable = 0
        }
        var t = e.prototype;
        return t.loadWord = function() {
          var e = this.data,
            t = this.bytesAvailable,
            r = e.byteLength - t,
            a = new Uint8Array(4),
            i = Math.min(4, t);
          if (0 === i) throw new Error("no bytes available");
          a.set(e.subarray(r, r + i)), this.word = new DataView(a.buffer)
            .getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -=
            i
        }, t.skipBits = function(e) {
          var t;
          this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -=
            e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3,
            this.bytesAvailable -= t, this.loadWord(), this.word <<=
            e, this.bitsAvailable -= e)
        }, t.readBits = function(e) {
          var t = Math.min(this.bitsAvailable, e),
            r = this.word >>> 32 - t;
          return e > 32 && l.b.error(
              "Cannot read more than 32 bits at a time"), this.bitsAvailable -=
            t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable >
            0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ?
            r << t | this.readBits(t) : r
        }, t.skipLZ = function() {
          var e;
          for (e = 0; e < this.bitsAvailable; ++e)
            if (0 != (this.word & 2147483648 >>> e)) return this.word <<=
              e, this.bitsAvailable -= e, e;
          return this.loadWord(), e + this.skipLZ()
        }, t.skipUEG = function() {
          this.skipBits(1 + this.skipLZ())
        }, t.skipEG = function() {
          this.skipBits(1 + this.skipLZ())
        }, t.readUEG = function() {
          var e = this.skipLZ();
          return this.readBits(e + 1) - 1
        }, t.readEG = function() {
          var e = this.readUEG();
          return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
        }, t.readBoolean = function() {
          return 1 === this.readBits(1)
        }, t.readUByte = function() {
          return this.readBits(8)
        }, t.readUShort = function() {
          return this.readBits(16)
        }, t.readUInt = function() {
          return this.readBits(32)
        }, t.skipScalingList = function(e) {
          var t, r = 8,
            a = 8;
          for (t = 0; t < e; t++) 0 !== a && (a = (r + this.readEG() +
            256) % 256), r = 0 === a ? r : a
        }, t.readSPS = function() {
          var e, t, r, a, i, n, s, o = 0,
            l = 0,
            d = 0,
            u = 0,
            f = this.readUByte.bind(this),
            h = this.readBits.bind(this),
            c = this.readUEG.bind(this),
            v = this.readBoolean.bind(this),
            p = this.skipBits.bind(this),
            g = this.skipEG.bind(this),
            m = this.skipUEG.bind(this),
            y = this.skipScalingList.bind(this);
          if (f(), e = f(), h(5), p(3), f(), m(), 100 === e || 110 ===
            e || 122 === e || 244 === e || 44 === e || 83 === e || 86 ===
            e || 118 === e || 128 === e) {
            var b = c();
            if (3 === b && p(1), m(), m(), p(1), v())
              for (n = 3 !== b ? 8 : 12, s = 0; s < n; s++) v() && y(s <
                6 ? 16 : 64)
          }
          m();
          var E = c();
          if (0 === E) c();
          else if (1 === E)
            for (p(1), g(), g(), t = c(), s = 0; s < t; s++) g();
          m(), p(1), r = c(), a = c(), 0 === (i = h(1)) && p(1), p(1),
            v() && (o = c(), l = c(), d = c(), u = c());
          var T = [1, 1];
          if (v() && v()) switch (f()) {
            case 1:
              T = [1, 1];
              break;
            case 2:
              T = [12, 11];
              break;
            case 3:
              T = [10, 11];
              break;
            case 4:
              T = [16, 11];
              break;
            case 5:
              T = [40, 33];
              break;
            case 6:
              T = [24, 11];
              break;
            case 7:
              T = [20, 11];
              break;
            case 8:
              T = [32, 11];
              break;
            case 9:
              T = [80, 33];
              break;
            case 10:
              T = [18, 11];
              break;
            case 11:
              T = [15, 11];
              break;
            case 12:
              T = [64, 33];
              break;
            case 13:
              T = [160, 99];
              break;
            case 14:
              T = [4, 3];
              break;
            case 15:
              T = [3, 2];
              break;
            case 16:
              T = [2, 1];
              break;
            case 255:
              T = [f() << 8 | f(), f() << 8 | f()]
          }
          return {
            width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l),
            height: (2 - i) * (a + 1) * 16 - (i ? 2 : 4) * (d + u),
            pixelRatio: T
          }
        }, t.readSliceType = function() {
          return this.readUByte(), this.readUEG(), this.readUEG()
        }, e
      }(),
      w = function() {
        function e(e, t, r, a) {
          this.decryptdata = r, this.discardEPB = a, this.decrypter = new f(
            e, t, {
              removePKCS7Padding: !1
            })
        }
        var t = e.prototype;
        return t.decryptBuffer = function(e, t) {
          this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata
            .iv.buffer, t)
        }, t.decryptAacSample = function(e, t, r, a) {
          var i = e[t].unit,
            n = i.subarray(16, i.length - i.length % 16),
            s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
            o = this;
          this.decryptBuffer(s, (function(n) {
            n = new Uint8Array(n), i.set(n, 16), a || o.decryptAacSamples(
              e, t + 1, r)
          }))
        }, t.decryptAacSamples = function(e, t, r) {
          for (;; t++) {
            if (t >= e.length) return void r();
            if (!(e[t].unit.length < 32)) {
              var a = this.decrypter.isSync();
              if (this.decryptAacSample(e, t, r, a), !a) return
            }
          }
        }, t.getAvcEncryptedData = function(e) {
          for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r =
              new Int8Array(t), a = 0, i = 32; i <= e.length - 16; i +=
            160, a += 16) r.set(e.subarray(i, i + 16), a);
          return r
        }, t.getAvcDecryptedUnit = function(e, t) {
          t = new Uint8Array(t);
          for (var r = 0, a = 32; a <= e.length - 16; a += 160, r += 16)
            e.set(t.subarray(r, r + 16), a);
          return e
        }, t.decryptAvcSample = function(e, t, r, a, i, n) {
          var s = this.discardEPB(i.data),
            o = this.getAvcEncryptedData(s),
            l = this;
          this.decryptBuffer(o.buffer, (function(o) {
            i.data = l.getAvcDecryptedUnit(s, o), n || l.decryptAvcSamples(
              e, t, r + 1, a)
          }))
        }, t.decryptAvcSamples = function(e, t, r, a) {
          for (;; t++, r = 0) {
            if (t >= e.length) return void a();
            for (var i = e[t].units; !(r >= i.length); r++) {
              var n = i[r];
              if (!(n.data.length <= 48 || 1 !== n.type && 5 !== n.type)) {
                var s = this.decrypter.isSync();
                if (this.decryptAvcSample(e, t, r, a, n, s), !s) return
              }
            }
          }
        }, e
      }(),
      D = {
        video: 1,
        audio: 2,
        id3: 3,
        text: 4
      },
      k = function() {
        function e(e, t, r, a) {
          this.observer = e, this.config = r, this.typeSupported = a,
            this.remuxer = t, this.sampleAes = null, this.pmtUnknownTypes = {}
        }
        var t = e.prototype;
        return t.setDecryptData = function(e) {
          null != e && null != e.key && "SAMPLE-AES" === e.method ?
            this.sampleAes = new w(this.observer, this.config, e, this.discardEPB) :
            this.sampleAes = null
        }, e.probe = function(t) {
          var r = e._syncOffset(t);
          return !(r < 0) && (r && l.b.warn(
            "MPEG2-TS detected but first sync word found @ offset " +
            r + ", junk ahead ?"), !0)
        }, e._syncOffset = function(e) {
          for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
            if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376])
              return r;
            r++
          }
          return -1
        }, e.createTrack = function(e, t) {
          return {
            container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
            type: e,
            id: D[e],
            pid: -1,
            inputTimeScale: 9e4,
            sequenceNumber: 0,
            samples: [],
            dropped: "video" === e ? 0 : void 0,
            isAAC: "audio" === e || void 0,
            duration: "audio" === e ? t : void 0
          }
        }, t.resetInitSegment = function(t, r, a, i) {
          this.pmtParsed = !1, this._pmtId = -1, this.pmtUnknownTypes = {},
            this._avcTrack = e.createTrack("video", i), this._audioTrack =
            e.createTrack("audio", i), this._id3Track = e.createTrack(
              "id3", i), this._txtTrack = e.createTrack("text", i),
            this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample =
            null, this.audioCodec = r, this.videoCodec = a, this._duration =
            i
        }, t.resetTimeStamp = function() {}, t.append = function(t, r,
          n, s) {
          var o, d, u, f, h, c = t.length,
            v = !1;
          this.pmtUnknownTypes = {}, this.contiguous = n;
          var p = this.pmtParsed,
            g = this._avcTrack,
            m = this._audioTrack,
            y = this._id3Track,
            b = g.pid,
            E = m.pid,
            T = y.pid,
            S = this._pmtId,
            _ = g.pesData,
            A = m.pesData,
            R = y.pesData,
            L = this._parsePAT,
            w = this._parsePMT.bind(this),
            D = this._parsePES,
            k = this._parseAVCPES.bind(this),
            O = this._parseAACPES.bind(this),
            x = this._parseMPEGPES.bind(this),
            I = this._parseID3PES.bind(this),
            P = e._syncOffset(t);
          for (c -= (c + P) % 188, o = P; o < c; o += 188)
            if (71 === t[o]) {
              if (d = !!(64 & t[o + 1]), u = ((31 & t[o + 1]) << 8) + t[
                  o + 2], (48 & t[o + 3]) >> 4 > 1) {
                if ((f = o + 5 + t[o + 4]) === o + 188) continue
              } else f = o + 4;
              switch (u) {
                case b:
                  d && (_ && (h = D(_)) && k(h, !1), _ = {
                    data: [],
                    size: 0
                  }), _ && (_.data.push(t.subarray(f, o + 188)), _.size +=
                    o + 188 - f);
                  break;
                case E:
                  d && (A && (h = D(A)) && (m.isAAC ? O(h) : x(h)), A = {
                    data: [],
                    size: 0
                  }), A && (A.data.push(t.subarray(f, o + 188)), A.size +=
                    o + 188 - f);
                  break;
                case T:
                  d && (R && (h = D(R)) && I(h), R = {
                    data: [],
                    size: 0
                  }), R && (R.data.push(t.subarray(f, o + 188)), R.size +=
                    o + 188 - f);
                  break;
                case 0:
                  d && (f += t[f] + 1), S = this._pmtId = L(t, f);
                  break;
                case S:
                  d && (f += t[f] + 1);
                  var C = w(t, f, !0 === this.typeSupported.mpeg || !0 ===
                    this.typeSupported.mp3, null != this.sampleAes);
                  (b = C.avc) > 0 && (g.pid = b), (E = C.audio) > 0 &&
                    (m.pid = E, m.isAAC = C.isAAC), (T = C.id3) > 0 &&
                    (y.pid = T), v && !p && (l.b.log(
                      "reparse from beginning"), v = !1, o = P - 188),
                    p = this.pmtParsed = !0;
                  break;
                case 17:
                case 8191:
                  break;
                default:
                  v = !0
              }
            } else this.observer.trigger(a.a.ERROR, {
              type: i.b.MEDIA_ERROR,
              details: i.a.FRAG_PARSING_ERROR,
              fatal: !1,
              reason: "TS packet did not start with 0x47"
            });
          _ && (h = D(_)) ? (k(h, !0), g.pesData = null) : g.pesData =
            _, A && (h = D(A)) ? (m.isAAC ? O(h) : x(h), m.pesData =
              null) : (A && A.size && l.b.log(
              "last AAC PES packet truncated,might overlap between fragments"
            ), m.pesData = A), R && (h = D(R)) ? (I(h), y.pesData =
              null) : y.pesData = R, null == this.sampleAes ? this.remuxer
            .remux(m, g, y, this._txtTrack, r, n, s) : this.decryptAndRemux(
              m, g, y, this._txtTrack, r, n, s)
        }, t.decryptAndRemux = function(e, t, r, a, i, n, s) {
          if (e.samples && e.isAAC) {
            var o = this;
            this.sampleAes.decryptAacSamples(e.samples, 0, (function() {
              o.decryptAndRemuxAvc(e, t, r, a, i, n, s)
            }))
          } else this.decryptAndRemuxAvc(e, t, r, a, i, n, s)
        }, t.decryptAndRemuxAvc = function(e, t, r, a, i, n, s) {
          if (t.samples) {
            var o = this;
            this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function() {
              o.remuxer.remux(e, t, r, a, i, n, s)
            }))
          } else this.remuxer.remux(e, t, r, a, i, n, s)
        }, t.destroy = function() {
          this._initPTS = this._initDTS = void 0, this._duration = 0
        }, t._parsePAT = function(e, t) {
          return (31 & e[t + 10]) << 8 | e[t + 11]
        }, t._trackUnknownPmt = function(e, t, r) {
          var a = this.pmtUnknownTypes[e] || 0;
          return 0 === a && (this.pmtUnknownTypes[e] = 0, t.call(l.b, r)),
            this.pmtUnknownTypes[e]++, a
        }, t._parsePMT = function(e, t, r, a) {
          var i, n, s = {
            audio: -1,
            avc: -1,
            id3: -1,
            isAAC: !0
          };
          for (i = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t +=
            12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < i;) {
            switch (n = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
              case 207:
                if (!a) {
                  this._trackUnknownPmt(e[t], l.b.warn,
                    "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream"
                  );
                  break
                }
              case 15:
                -1 === s.audio && (s.audio = n);
                break;
              case 21:
                -1 === s.id3 && (s.id3 = n);
                break;
              case 219:
                if (!a) {
                  this._trackUnknownPmt(e[t], l.b.warn,
                    "H.264 with AES-128-CBC slice encryption found in unencrypted stream"
                  );
                  break
                }
              case 27:
                -1 === s.avc && (s.avc = n);
                break;
              case 3:
              case 4:
                r ? -1 === s.audio && (s.audio = n, s.isAAC = !1) :
                  this._trackUnknownPmt(e[t], l.b.warn,
                    "MPEG audio found, not supported in this browser");
                break;
              case 36:
                this._trackUnknownPmt(e[t], l.b.warn,
                  "Unsupported HEVC stream type found");
                break;
              default:
                this._trackUnknownPmt(e[t], l.b.log,
                  "Unknown stream type:" + e[t])
            }
            t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
          }
          return s
        }, t._parsePES = function(e) {
          var t, r, a, i, n, s, o, d, u = 0,
            f = e.data;
          if (!e || 0 === e.size) return null;
          for (; f[0].length < 19 && f.length > 1;) {
            var h = new Uint8Array(f[0].length + f[1].length);
            h.set(f[0]), h.set(f[1], f[0].length), f[0] = h, f.splice(1,
              1)
          }
          if (1 === ((t = f[0])[0] << 16) + (t[1] << 8) + t[2]) {
            if ((a = (t[4] << 8) + t[5]) && a > e.size - 6) return null;
            if (192 & (r = t[7]) && (s = 536870912 * (14 & t[9]) +
                4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 *
                (255 & t[12]) + (254 & t[13]) / 2, 64 & r ? s - (o =
                  536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) +
                  16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 &
                    t[18]) / 2) > 54e5 && (l.b.warn(Math.round((s - o) /
                    9e4) + "s delta between PTS and DTS, align them"),
                  s = o) : o = s), d = (i = t[8]) + 9, e.size <= d)
              return null;
            e.size -= d, n = new Uint8Array(e.size);
            for (var c = 0, v = f.length; c < v; c++) {
              var p = (t = f[c]).byteLength;
              if (d) {
                if (d > p) {
                  d -= p;
                  continue
                }
                t = t.subarray(d), p -= d, d = 0
              }
              n.set(t, u), u += p
            }
            return a && (a -= i + 3), {
              data: n,
              pts: s,
              dts: o,
              len: a
            }
          }
          return null
        }, t.pushAccesUnit = function(e, t) {
          if (e.units.length && e.frame) {
            var r = t.samples,
              a = r.length;
            if (isNaN(e.pts)) {
              if (!a) return void t.dropped++;
              var i = r[a - 1];
              e.pts = i.pts, e.dts = i.dts
            }!this.config.forceKeyFrameOnDiscontinuity || !0 === e.key ||
              t.sps && (a || this.contiguous) ? (e.id = a, r.push(e)) :
              t.dropped++
          }
          e.debug.length && l.b.log(e.pts + "/" + e.dts + ":" + e.debug)
        }, t._parseAVCPES = function(e, t) {
          var r, a, i, n = this,
            s = this._avcTrack,
            o = this._parseAVCNALu(e.data),
            l = this.avcSample,
            d = !1,
            u = this.pushAccesUnit.bind(this),
            f = function(e, t, r, a) {
              return {
                key: e,
                pts: t,
                dts: r,
                units: [],
                debug: a
              }
            };
          e.data = null, l && o.length && !s.audFound && (u(l, s), l =
            this.avcSample = f(!1, e.pts, e.dts, "")), o.forEach((
            function(t) {
              switch (t.type) {
                case 1:
                  a = !0, l || (l = n.avcSample = f(!0, e.pts, e.dts,
                    "")), l.frame = !0;
                  var o = t.data;
                  if (d && o.length > 4) {
                    var h = new L(o).readSliceType();
                    2 !== h && 4 !== h && 7 !== h && 9 !== h || (l.key = !
                      0)
                  }
                  break;
                case 5:
                  a = !0, l || (l = n.avcSample = f(!0, e.pts, e.dts,
                    "")), l.key = !0, l.frame = !0;
                  break;
                case 6:
                  a = !0, (r = new L(n.discardEPB(t.data))).readUByte();
                  for (var c = 0, v = 0, p = !1, g = 0; !p && r.bytesAvailable >
                    1;) {
                    c = 0;
                    do {
                      c += g = r.readUByte()
                    } while (255 === g);
                    v = 0;
                    do {
                      v += g = r.readUByte()
                    } while (255 === g);
                    if (4 === c && 0 !== r.bytesAvailable) {
                      if (p = !0, 181 === r.readUByte())
                        if (49 === r.readUShort())
                          if (1195456820 === r.readUInt())
                            if (3 === r.readUByte()) {
                              var m = r.readUByte(),
                                y = 31 & m,
                                b = [m, r.readUByte()];
                              for (i = 0; i < y; i++) b.push(r.readUByte()),
                                b.push(r.readUByte()), b.push(r.readUByte());
                              n._insertSampleInOrder(n._txtTrack.samples, {
                                type: 3,
                                pts: e.pts,
                                bytes: b
                              })
                            }
                    } else if (5 === c && 0 !== r.bytesAvailable) {
                      if (p = !0, v > 16) {
                        var E = [];
                        for (i = 0; i < 16; i++) E.push(r.readUByte()
                            .toString(16)), 3 !== i && 5 !== i && 7 !==
                          i && 9 !== i || E.push("-");
                        var S = v - 16,
                          _ = new Uint8Array(S);
                        for (i = 0; i < S; i++) _[i] = r.readUByte();
                        n._insertSampleInOrder(n._txtTrack.samples, {
                          pts: e.pts,
                          payloadType: c,
                          uuid: E.join(""),
                          userDataBytes: _,
                          userData: Object(T.b)(_.buffer)
                        })
                      }
                    } else if (v < r.bytesAvailable)
                      for (i = 0; i < v; i++) r.readUByte()
                  }
                  break;
                case 7:
                  if (a = !0, d = !0, !s.sps) {
                    var A = (r = new L(t.data)).readSPS();
                    s.width = A.width, s.height = A.height, s.pixelRatio =
                      A.pixelRatio, s.sps = [t.data], s.duration =
                      n._duration;
                    var R = t.data.subarray(1, 4),
                      w = "avc1.";
                    for (i = 0; i < 3; i++) {
                      var D = R[i].toString(16);
                      D.length < 2 && (D = "0" + D), w += D
                    }
                    s.codec = w
                  }
                  break;
                case 8:
                  a = !0, s.pps || (s.pps = [t.data]);
                  break;
                case 9:
                  a = !1, s.audFound = !0, l && u(l, s), l = n.avcSample =
                    f(!1, e.pts, e.dts, "");
                  break;
                case 12:
                  a = !1;
                  break;
                default:
                  a = !1, l && (l.debug += "unknown NAL " + t.type +
                    " ")
              }
              l && a && l.units.push(t)
            })), t && l && (u(l, s), this.avcSample = null)
        }, t._insertSampleInOrder = function(e, t) {
          var r = e.length;
          if (r > 0) {
            if (t.pts >= e[r - 1].pts) e.push(t);
            else
              for (var a = r - 1; a >= 0; a--)
                if (t.pts < e[a].pts) {
                  e.splice(a, 0, t);
                  break
                }
          } else e.push(t)
        }, t._getLastNalUnit = function() {
          var e, t = this.avcSample;
          if (!t || 0 === t.units.length) {
            var r = this._avcTrack.samples;
            t = r[r.length - 1]
          }
          if (t) {
            var a = t.units;
            e = a[a.length - 1]
          }
          return e
        }, t._parseAVCNALu = function(e) {
          var t, r, a, i, n = 0,
            s = e.byteLength,
            o = this._avcTrack,
            l = o.naluState || 0,
            d = l,
            u = [],
            f = -1;
          for (-1 === l && (f = 0, i = 31 & e[0], l = 0, n = 1); n < s;)
            if (t = e[n++], l)
              if (1 !== l)
                if (t)
                  if (1 === t) {
                    if (f >= 0) a = {
                      data: e.subarray(f, n - l - 1),
                      type: i
                    }, u.push(a);
                    else {
                      var h = this._getLastNalUnit();
                      if (h && (d && n <= 4 - d && h.state && (h.data =
                          h.data.subarray(0, h.data.byteLength - d)), (
                          r = n - l - 1) > 0)) {
                        var c = new Uint8Array(h.data.byteLength + r);
                        c.set(h.data, 0), c.set(e.subarray(0, r), h.data
                          .byteLength), h.data = c
                      }
                    }
                    n < s ? (f = n, i = 31 & e[n], l = 0) : l = -1
                  } else l = 0;
          else l = 3;
          else l = t ? 0 : 2;
          else l = t ? 0 : 1;
          if (f >= 0 && l >= 0 && (a = {
              data: e.subarray(f, s),
              type: i,
              state: l
            }, u.push(a)), 0 === u.length) {
            var v = this._getLastNalUnit();
            if (v) {
              var p = new Uint8Array(v.data.byteLength + e.byteLength);
              p.set(v.data, 0), p.set(e, v.data.byteLength), v.data = p
            }
          }
          return o.naluState = l, u
        }, t.discardEPB = function(e) {
          for (var t, r, a = e.byteLength, i = [], n = 1; n < a - 2;) 0 ===
            e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (i.push(n + 2),
              n += 2) : n++;
          if (0 === i.length) return e;
          t = a - i.length, r = new Uint8Array(t);
          var s = 0;
          for (n = 0; n < t; s++, n++) s === i[0] && (s++, i.shift()),
            r[n] = e[s];
          return r
        }, t._parseAACPES = function(e) {
          var t, r, n, s, o, d, u, f = this._audioTrack,
            h = e.data,
            c = e.pts,
            v = this.aacOverFlow,
            p = this.aacLastPTS;
          if (v) {
            var m = new Uint8Array(v.byteLength + h.byteLength);
            m.set(v, 0), m.set(h, v.byteLength), h = m
          }
          for (n = 0, o = h.length; n < o - 1 && !g(h, n); n++);
          if (n && (n < o - 1 ? (d =
                "AAC PES did not start with ADTS header,offset:" + n, u = !
                1) : (d = "no ADTS header found in AAC PES", u = !0), l
              .b.warn("parsing error:" + d), this.observer.trigger(a.a.ERROR, {
                type: i.b.MEDIA_ERROR,
                details: i.a.FRAG_PARSING_ERROR,
                fatal: u,
                reason: d
              }), u)) return;
          if (y(f, this.observer, h, n, this.audioCodec), r = 0, t = b(
              f.samplerate), v && p) {
            var T = p + t;
            Math.abs(T - c) > 1 && (l.b.log(
              "AAC: align PTS for overlapping frames by " + Math.round(
                (T - c) / 90)), c = T)
          }
          for (; n < o;) {
            if (g(h, n)) {
              if (n + 5 < o) {
                var S = E(f, h, n, c, r);
                if (S) {
                  n += S.length, s = S.sample.pts, r++;
                  continue
                }
              }
              break
            }
            n++
          }
          v = n < o ? h.subarray(n, o) : null, this.aacOverFlow = v,
            this.aacLastPTS = s
        }, t._parseMPEGPES = function(e) {
          for (var t = e.data, r = t.length, a = 0, i = 0, n = e.pts; i <
            r;)
            if (R.isHeader(t, i)) {
              var s = R.appendFrame(this._audioTrack, t, i, n, a);
              if (!s) break;
              i += s.length, a++
            } else i++
        }, t._parseID3PES = function(e) {
          this._id3Track.samples.push(e)
        }, e
      }(),
      O = function() {
        function e(e, t, r) {
          this.observer = e, this.config = r, this.remuxer = t
        }
        var t = e.prototype;
        return t.resetInitSegment = function(e, t, r, a) {
          this._audioTrack = {
            container: "audio/mpeg",
            type: "audio",
            id: -1,
            sequenceNumber: 0,
            isAAC: !1,
            samples: [],
            len: 0,
            manifestCodec: t,
            duration: a,
            inputTimeScale: 9e4
          }
        }, t.resetTimeStamp = function() {}, e.probe = function(e) {
          var t, r, a = T.a.getID3Data(e, 0);
          if (a && void 0 !== T.a.getTimeStamp(a))
            for (t = a.length, r = Math.min(e.length - 1, t + 100); t <
              r; t++)
              if (R.probe(e, t)) return l.b.log(
                "MPEG Audio sync word found !"), !0;
          return !1
        }, t.append = function(e, t, r, a) {
          for (var i = T.a.getID3Data(e, 0) || [], n = T.a.getTimeStamp(
                i), s = void 0 !== n ? 90 * n : 9e4 * t, o = i.length,
              l = e.length, d = 0, u = 0, f = this._audioTrack, h = [{
                pts: s,
                dts: s,
                data: i
              }]; o < l;)
            if (R.isHeader(e, o)) {
              var c = R.appendFrame(f, e, o, s, d);
              if (!c) break;
              o += c.length, u = c.sample.pts, d++
            } else T.a.isHeader(e, o) ? (i = T.a.getID3Data(e, o), h.push({
              pts: u,
              dts: u,
              data: i
            }), o += i.length) : o++;
          this.remuxer.remux(f, {
            samples: []
          }, {
            samples: h,
            inputTimeScale: 9e4
          }, {
            samples: []
          }, t, r, a)
        }, t.destroy = function() {}, e
      }(),
      x = function() {
        function e() {}
        return e.getSilentFrame = function(e, t) {
          switch (e) {
            case "mp4a.40.2":
              if (1 === t) return new Uint8Array([0, 200, 0, 128, 35,
                128
              ]);
              if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25,
                0, 35, 128
              ]);
              if (3 === t) return new Uint8Array([0, 200, 0, 128, 32,
                132, 1, 38, 64, 8, 100, 0, 142
              ]);
              if (4 === t) return new Uint8Array([0, 200, 0, 128, 32,
                132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56
              ]);
              if (5 === t) return new Uint8Array([0, 200, 0, 128, 32,
                132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33,
                144, 2, 56
              ]);
              if (6 === t) return new Uint8Array([0, 200, 0, 128, 32,
                132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33,
                144, 2, 0, 178, 0, 32, 8, 224
              ]);
              break;
            default:
              if (1 === t) return new Uint8Array([1, 64, 34, 128, 163,
                78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193,
                10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 94
              ]);
              if (2 === t) return new Uint8Array([1, 64, 34, 128, 163,
                94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241,
                161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 94
              ]);
              if (3 === t) return new Uint8Array([1, 64, 34, 128, 163,
                94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241,
                161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                90, 90, 90, 90, 94
              ])
          }
          return null
        }, e
      }(),
      I = Math.pow(2, 32) - 1,
      P = function() {
        function e() {}
        return e.init = function() {
          var t;
          for (t in e.types = {
              avc1: [],
              avcC: [],
              btrt: [],
              dinf: [],
              dref: [],
              esds: [],
              ftyp: [],
              hdlr: [],
              mdat: [],
              mdhd: [],
              mdia: [],
              mfhd: [],
              minf: [],
              moof: [],
              moov: [],
              mp4a: [],
              ".mp3": [],
              mvex: [],
              mvhd: [],
              pasp: [],
              sdtp: [],
              stbl: [],
              stco: [],
              stsc: [],
              stsd: [],
              stsz: [],
              stts: [],
              tfdt: [],
              tfhd: [],
              traf: [],
              trak: [],
              trun: [],
              trex: [],
              tkhd: [],
              vmhd: [],
              smhd: []
            }, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(
            0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
          var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100,
              101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100,
              101, 111, 72, 97, 110, 100, 108, 101, 114, 0
            ]),
            a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117,
              110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117,
              110, 100, 72, 97, 110, 100, 108, 101, 114, 0
            ]);
          e.HDLR_TYPES = {
            video: r,
            audio: a
          };
          var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12,
              117, 114, 108, 32, 0, 0, 0, 1
            ]),
            n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
          e.STTS = e.STSC = e.STCO = n, e.STSZ = new Uint8Array([0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
              0, 0
            ]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD =
            new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
          var s = new Uint8Array([105, 115, 111, 109]),
            o = new Uint8Array([97, 118, 99, 49]),
            l = new Uint8Array([0, 0, 0, 1]);
          e.FTYP = e.box(e.types.ftyp, s, l, s, o), e.DINF = e.box(e.types
            .dinf, e.box(e.types.dref, i))
        }, e.box = function(e) {
          for (var t, r = Array.prototype.slice.call(arguments, 1), a =
              8, i = r.length, n = i; i--;) a += r[i].byteLength;
          for ((t = new Uint8Array(a))[0] = a >> 24 & 255, t[1] = a >>
            16 & 255, t[2] = a >> 8 & 255, t[3] = 255 & a, t.set(e, 4),
            i = 0, a = 8; i < n; i++) t.set(r[i], a), a += r[i].byteLength;
          return t
        }, e.hdlr = function(t) {
          return e.box(e.types.hdlr, e.HDLR_TYPES[t])
        }, e.mdat = function(t) {
          return e.box(e.types.mdat, t)
        }, e.mdhd = function(t, r) {
          r *= t;
          var a = Math.floor(r / (I + 1)),
            i = Math.floor(r % (I + 1));
          return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 &
            255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >>
            16 & 255, a >> 8 & 255, 255 & a, i >> 24, i >> 16 &
            255, i >> 8 & 255, 255 & i, 85, 196, 0, 0
          ]))
        }, e.mdia = function(t) {
          return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e
            .hdlr(t.type), e.minf(t))
        }, e.mfhd = function(t) {
          return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >>
            24, t >> 16 & 255, t >> 8 & 255, 255 & t
          ]))
        }, e.minf = function(t) {
          return "audio" === t.type ? e.box(e.types.minf, e.box(e.types
            .smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf,
            e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
        }, e.moof = function(t, r, a) {
          return e.box(e.types.moof, e.mfhd(t), e.traf(a, r))
        }, e.moov = function(t) {
          for (var r = t.length, a = []; r--;) a[r] = e.trak(t[r]);
          return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale,
            t[0].duration)].concat(a).concat(e.mvex(t)))
        }, e.mvex = function(t) {
          for (var r = t.length, a = []; r--;) a[r] = e.trex(t[r]);
          return e.box.apply(null, [e.types.mvex].concat(a))
        }, e.mvhd = function(t, r) {
          r *= t;
          var a = Math.floor(r / (I + 1)),
            i = Math.floor(r % (I + 1)),
            n = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0,
              0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >>
              8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255,
              255 & a, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i,
              0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 255, 255, 255, 255
            ]);
          return e.box(e.types.mvhd, n)
        }, e.sdtp = function(t) {
          var r, a, i = t.samples || [],
            n = new Uint8Array(4 + i.length);
          for (a = 0; a < i.length; a++) r = i[a].flags, n[a + 4] = r.dependsOn <<
            4 | r.isDependedOn << 2 | r.hasRedundancy;
          return e.box(e.types.sdtp, n)
        }, e.stbl = function(t) {
          return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS),
            e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ),
            e.box(e.types.stco, e.STCO))
        }, e.avc1 = function(t) {
          var r, a, i, n = [],
            s = [];
          for (r = 0; r < t.sps.length; r++) i = (a = t.sps[r]).byteLength,
            n.push(i >>> 8 & 255), n.push(255 & i), n = n.concat(Array.prototype
              .slice.call(a));
          for (r = 0; r < t.pps.length; r++) i = (a = t.pps[r]).byteLength,
            s.push(i >>> 8 & 255), s.push(255 & i), s = s.concat(Array.prototype
              .slice.call(a));
          var o = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[
                5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length])
              .concat(s))),
            l = t.width,
            d = t.height,
            u = t.pixelRatio[0],
            f = t.pixelRatio[1];
          return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0,
            0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72,
            0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105,
            108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108,
            115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 24, 17, 17
          ]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156,
            128, 0, 45, 198, 192, 0, 45, 198, 192
          ])), e.box(e.types.pasp, new Uint8Array([u >> 24, u >> 16 &
            255, u >> 8 & 255, 255 & u, f >> 24, f >> 16 & 255,
            f >> 8 & 255, 255 & f
          ])))
        }, e.esds = function(e) {
          var t = e.config.length;
          return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 +
            t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5
          ].concat([t]).concat(e.config).concat([6, 1, 2]))
        }, e.mp4a = function(t) {
          var r = t.samplerate;
          return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0,
            0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0,
            16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0
          ]), e.box(e.types.esds, e.esds(t)))
        }, e.mp3 = function(t) {
          var r = t.samplerate;
          return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0,
            0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0,
            16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0
          ]))
        }, e.stsd = function(t) {
          return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(
            e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD,
            e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
        }, e.tkhd = function(t) {
          var r = t.id,
            a = t.duration * t.timescale,
            i = t.width,
            n = t.height,
            s = Math.floor(a / (I + 1)),
            o = Math.floor(a % (I + 1));
          return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0,
            0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 &
            255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0,
            s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >>
            24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255,
            255 & i, 0, 0, n >> 8 & 255, 255 & n, 0, 0
          ]))
        }, e.traf = function(t, r) {
          var a = e.sdtp(t),
            i = t.id,
            n = Math.floor(r / (I + 1)),
            s = Math.floor(r % (I + 1));
          return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array(
            [0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255,
              255 & i
            ])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, n >>
            24, n >> 16 & 255, n >> 8 & 255, 255 & n, s >> 24,
            s >> 16 & 255, s >> 8 & 255, 255 & s
          ])), e.trun(t, a.length + 16 + 20 + 8 + 16 + 8 + 8), a)
        }, e.trak = function(t) {
          return t.duration = t.duration || 4294967295, e.box(e.types.trak,
            e.tkhd(t), e.mdia(t))
        }, e.trex = function(t) {
          var r = t.id;
          return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >>
            24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1
          ]))
        }, e.trun = function(t, r) {
          var a, i, n, s, o, l, d = t.samples || [],
            u = d.length,
            f = 12 + 16 * u,
            h = new Uint8Array(f);
          for (r += 8 + f, h.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 &
              255, u >>> 8 & 255, 255 & u, r >>> 24 & 255, r >>> 16 &
              255, r >>> 8 & 255, 255 & r
            ], 0), a = 0; a < u; a++) n = (i = d[a]).duration, s = i.size,
            o = i.flags, l = i.cts, h.set([n >>> 24 & 255, n >>> 16 &
              255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 &
              255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn,
              o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue <<
              1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio,
              l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l
            ], 12 + 16 * a);
          return e.box(e.types.trun, h)
        }, e.initSegment = function(t) {
          e.types || e.init();
          var r, a = e.moov(t);
          return (r = new Uint8Array(e.FTYP.byteLength + a.byteLength))
            .set(e.FTYP), r.set(a, e.FTYP.byteLength), r
        }, e
      }();

    function C(e, t, r, a) {
      void 0 === r && (r = 1), void 0 === a && (a = !1);
      var i = e * t * r;
      return a ? Math.round(i) : i
    }

    function F(e, t) {
      return void 0 === t && (t = !1), C(e, 1e3, 1 / 9e4, t)
    }

    function M(e, t) {
      return void 0 === t && (t = 1), C(e, 9e4, 1 / t)
    }
    var U = M(10),
      B = M(.2),
      N = null;

    function G(e, t) {
      var r;
      if (void 0 === t) return e;
      for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) >
        4294967296;) e += r;
      return e
    }
    var j, K = function() {
        function e(e, t, r, a) {
          if (this.observer = e, this.config = t, this.typeSupported = r,
            this.ISGenerated = !1, null === N) {
            var i = navigator.userAgent.match(/Chrome\/(\d+)/i);
            N = i ? parseInt(i[1]) : 0
          }
        }
        var t = e.prototype;
        return t.destroy = function() {}, t.resetTimeStamp = function(e) {
          this._initPTS = this._initDTS = e
        }, t.resetInitSegment = function() {
          this.ISGenerated = !1
        }, t.getVideoStartPts = function(e) {
          var t = !1,
            r = e.reduce((function(e, r) {
              var a = r.pts - e;
              return a < -4294967296 ? (t = !0, G(e, r.pts)) : a >
                0 ? e : r.pts
            }), e[0].pts);
          return t && l.b.debug("PTS rollover detected"), r
        }, t.remux = function(e, t, r, i, n, s, o) {
          if (this.ISGenerated || this.generateIS(e, t, n), this.ISGenerated) {
            var d = e.samples.length,
              u = t.samples.length,
              f = n,
              h = n;
            if (d && u) {
              var c = this.getVideoStartPts(t.samples),
                v = (G(e.samples[0].pts, c) - c) / t.inputTimeScale;
              f += Math.max(0, v), h += Math.max(0, -v)
            }
            if (d) {
              e.timescale || (l.b.warn(
                "regenerate InitSegment as audio detected"), this.generateIS(
                e, t, n));
              var p, g = this.remuxAudio(e, f, s, o);
              if (u) g && (p = g.endPTS - g.startPTS), t.timescale || (
                l.b.warn("regenerate InitSegment as video detected"),
                this.generateIS(e, t, n)), this.remuxVideo(t, h, s, p)
            } else if (u) {
              var m = this.remuxVideo(t, h, s, 0, o);
              m && e.codec && this.remuxEmptyAudio(e, f, s, m)
            }
          }
          r.samples.length && this.remuxID3(r, n), i.samples.length &&
            this.remuxText(i, n), this.observer.trigger(a.a.FRAG_PARSED)
        }, t.generateIS = function(e, t, r) {
          var n, s, o = this.observer,
            d = e.samples,
            u = t.samples,
            f = this.typeSupported,
            h = "audio/mp4",
            c = {},
            v = {
              tracks: c
            },
            p = void 0 === this._initPTS;
          if (p && (n = s = 1 / 0), e.config && d.length && (e.timescale =
              e.samplerate, l.b.log("audio sampling rate : " + e.samplerate),
              e.isAAC || (f.mpeg ? (h = "audio/mpeg", e.codec = "") : f
                .mp3 && (e.codec = "mp3")), c.audio = {
                container: h,
                codec: e.codec,
                initSegment: !e.isAAC && f.mpeg ? new Uint8Array : P.initSegment(
                  [e]),
                metadata: {
                  channelCount: e.channelCount
                }
              }, p && (n = s = d[0].pts - Math.round(e.inputTimeScale *
                r))), t.sps && t.pps && u.length) {
            var g = t.inputTimeScale;
            if (t.timescale = g, c.video = {
                container: "video/mp4",
                codec: t.codec,
                initSegment: P.initSegment([t]),
                metadata: {
                  width: t.width,
                  height: t.height
                }
              }, p) {
              var m = this.getVideoStartPts(u),
                y = Math.round(g * r);
              s = Math.min(s, G(u[0].dts, m) - y), n = Math.min(n, m -
                y), this.observer.trigger(a.a.INIT_PTS_FOUND, {
                initPTS: n
              })
            }
          } else p && c.audio && this.observer.trigger(a.a.INIT_PTS_FOUND, {
            initPTS: n
          });
          Object.keys(c).length ? (o.trigger(a.a.FRAG_PARSING_INIT_SEGMENT,
            v), this.ISGenerated = !0, p && (this._initPTS = n,
            this._initDTS = s)) : o.trigger(a.a.ERROR, {
            type: i.b.MEDIA_ERROR,
            details: i.a.FRAG_PARSING_ERROR,
            fatal: !1,
            reason: "no audio/video samples found"
          })
        }, t.remuxVideo = function(e, t, r, n) {
          var s, o, d, u, f, h = e.timescale,
            c = e.samples,
            v = [],
            p = c.length,
            g = this._initPTS,
            m = 8,
            y = Number.POSITIVE_INFINITY,
            b = Number.NEGATIVE_INFINITY,
            E = 0,
            T = !1,
            S = this.nextAvcDts;
          if (0 !== p) {
            if (!r) S = t * h - (c[0].pts - G(c[0].dts, c[0].pts));
            for (var _ = 0; _ < p; _++) {
              var A = c[_];
              A.pts = G(A.pts - g, S), A.dts = G(A.dts - g, S), A.dts >
                A.pts && (E = Math.max(Math.min(E, A.pts - A.dts), -1 *
                  B)), A.dts < c[_ > 0 ? _ - 1 : _].dts && (T = !0)
            }
            T && c.sort((function(e, t) {
              var r = e.dts - t.dts,
                a = e.pts - t.pts;
              return r || a || e.id - t.id
            })), u = c[0].dts, f = c[p - 1].dts;
            var R = Math.round((f - u) / (p - 1));
            if (E < 0) {
              if (E < -2 * R) {
                l.b.warn(
                  "PTS < DTS detected in video samples, offsetting DTS from PTS by " +
                  F(-R, !0) + " ms");
                for (var L = E, w = 0; w < p; w++) c[w].dts = L = Math.max(
                  L, c[w].pts - R), c[w].pts = Math.max(L, c[w].pts)
              } else {
                l.b.warn(
                  "PTS < DTS detected in video samples, shifting DTS by " +
                  F(E, !0) + " ms to overcome this issue");
                for (var D = 0; D < p; D++) c[D].dts = c[D].dts + E
              }
              u = c[0].dts, f = c[p - 1].dts
            }
            if (r) {
              var k = u - S,
                O = k > R;
              if (O || k < -1) {
                O ? l.b.warn("AVC: " + F(k, !0) + " ms (" + k +
                    "dts) hole between fragments detected, filling it") :
                  l.b.warn("AVC: " + F(-k, !0) + " ms (" + k +
                    "dts) overlapping between fragments detected"), u =
                  S;
                var x = c[0].pts - k;
                c[0].dts = u, c[0].pts = x, l.b.log(
                  "Video: First PTS/DTS adjusted: " + F(x, !0) + "/" +
                  F(u, !0) + ", delta: " + F(k, !0) + " ms")
              }
            }
            N && N < 75 && (u = Math.max(0, u));
            for (var I = 0, C = 0, M = 0; M < p; M++) {
              for (var U = c[M], j = U.units, K = j.length, H = 0, V =
                  0; V < K; V++) H += j[V].data.length;
              C += H, I += K, U.length = H, U.dts = Math.max(U.dts, u),
                U.pts = Math.max(U.pts, U.dts, 0), y = Math.min(U.pts,
                  y), b = Math.max(U.pts, b)
            }
            f = c[p - 1].dts;
            var Y = C + 4 * I + 8;
            try {
              o = new Uint8Array(Y)
            } catch (e) {
              return void this.observer.trigger(a.a.ERROR, {
                type: i.b.MUX_ERROR,
                details: i.a.REMUX_ALLOC_ERROR,
                fatal: !1,
                bytes: Y,
                reason: "fail allocating video mdat " + Y
              })
            }
            var W = new DataView(o.buffer);
            W.setUint32(0, Y), o.set(P.types.mdat, 4);
            for (var z = 0; z < p; z++) {
              for (var X, q = c[z], Q = q.units, Z = 0, J = 0, $ = Q.length; J <
                $; J++) {
                var ee = Q[J],
                  te = ee.data,
                  re = ee.data.byteLength;
                W.setUint32(m, re), m += 4, o.set(te, m), m += re, Z +=
                  4 + re
              }
              if (z < p - 1) s = c[z + 1].dts - q.dts;
              else {
                var ae = this.config,
                  ie = q.dts - c[z > 0 ? z - 1 : z].dts;
                if (ae.stretchShortVideoTrack) {
                  var ne = ae.maxBufferHole,
                    se = Math.floor(ne * h),
                    oe = (n ? y + n * h : this.nextAudioPts) - q.pts;
                  oe > se ? ((s = oe - ie) < 0 && (s = ie), l.b.log(
                      "It is approximately " + F(oe, !1) +
                      " ms to the next segment; using duration " + F(
                        s, !1) + " ms for the last video frame.")) : s =
                    ie
                } else s = ie
              }
              X = Math.round(q.pts - q.dts), v.push({
                size: Z,
                duration: s,
                cts: X,
                flags: {
                  isLeading: 0,
                  isDependedOn: 0,
                  hasRedundancy: 0,
                  degradPrio: 0,
                  dependsOn: q.key ? 2 : 1,
                  isNonSync: q.key ? 0 : 1
                }
              })
            }
            this.nextAvcDts = f + s;
            var le = e.dropped;
            if (e.nbNalu = 0, e.dropped = 0, v.length && navigator.userAgent
              .toLowerCase().indexOf("chrome") > -1) {
              var de = v[0].flags;
              de.dependsOn = 2, de.isNonSync = 0
            }
            e.samples = v, d = P.moof(e.sequenceNumber++, u, e), e.samples = [];
            var ue = {
              data1: d,
              data2: o,
              startPTS: y / h,
              endPTS: (b + s) / h,
              startDTS: u / h,
              endDTS: this.nextAvcDts / h,
              type: "video",
              hasAudio: !1,
              hasVideo: !0,
              nb: v.length,
              dropped: le
            };
            return this.observer.trigger(a.a.FRAG_PARSING_DATA, ue), ue
          }
        }, t.remuxAudio = function(e, t, r, n) {
          var s, o, d, u, f, h, c = e.inputTimeScale,
            v = e.timescale,
            p = c / v,
            g = (e.isAAC ? 1024 : 1152) * p,
            m = this._initPTS,
            y = !e.isAAC && this.typeSupported.mpeg,
            b = y ? 0 : 8,
            E = e.samples,
            T = [],
            S = this.nextAudioPts;
          if (r |= E.length && S && (n && Math.abs(t - S / c) < .1 ||
              Math.abs(E[0].pts - S - m) < 20 * g), E.forEach((function(
              e) {
              e.pts = e.dts = G(e.pts - m, t * c)
            })), 0 !== (E = E.filter((function(e) {
              return e.pts >= 0
            }))).length) {
            if (r || (S = n ? Math.max(0, t * c) : E[0].pts), e.isAAC)
              for (var _ = this.config.maxAudioFramesDrift, A = 0, R =
                  S; A < E.length;) {
                var L = E[A],
                  w = L.pts,
                  D = w - R;
                if (D <= -_ * g) r || A > 0 ? (l.b.warn(
                  "Dropping 1 audio frame @ " + F(R, !0) / 1e3 +
                  "s due to " + F(D, !0) + " ms overlap."), E.splice(
                  A, 1)) : (l.b.warn("Audio frame @ " + F(w, !0) /
                  1e3 + "s overlaps nextAudioPts by " + F(D, !0) +
                  " ms."), R = w + g, A++);
                else if (D >= _ * g && D < U && R) {
                  var k = Math.round(D / g);
                  l.b.warn("Injecting " + k + " audio frames @ " + F(R, !
                    0) / 1e3 + "s due to " + F(D, !0) + " ms gap.");
                  for (var O = 0; O < k; O++) {
                    var I = Math.max(R, 0);
                    (o = x.getSilentFrame(e.manifestCodec || e.codec, e
                      .channelCount)) || (l.b.log(
                      "Unable to get silent frame for given audio codec; duplicating last frame instead."
                    ), o = L.unit.subarray()), E.splice(A, 0, {
                      unit: o,
                      pts: I,
                      dts: I
                    }), R += g, A++
                  }
                  L.pts = L.dts = R, R += g, A++
                } else Math.abs(D), L.pts = L.dts = R, R += g, A++
              }
            for (var C = E.length, M = 0; C--;) M += E[C].unit.byteLength;
            for (var B = 0, N = E.length; B < N; B++) {
              var j = E[B],
                K = j.unit,
                H = j.pts;
              if (void 0 !== h && s) s.duration = Math.round((H - h) /
                p);
              else {
                var V = H - S,
                  Y = 0;
                if (r && e.isAAC && V) {
                  if (V > 0 && V < U) Y = Math.round((H - S) / g), l.b.log(
                    F(V, !0) +
                    " ms hole between AAC samples detected,filling it"
                  ), Y > 0 && ((o = x.getSilentFrame(e.manifestCodec ||
                      e.codec, e.channelCount)) || (o = K.subarray()),
                    M += Y * o.length);
                  else if (V < -12) {
                    l.b.log(
                      "drop overlapping AAC sample, expected/parsed/delta: " +
                      F(S, !0) + " ms / " + F(H, !0) + " ms / " + F(-
                        V, !0) + " ms"), M -= K.byteLength;
                    continue
                  }
                  H = S
                }
                if (f = H, !(M > 0)) return;
                M += b;
                try {
                  d = new Uint8Array(M)
                } catch (e) {
                  return void this.observer.trigger(a.a.ERROR, {
                    type: i.b.MUX_ERROR,
                    details: i.a.REMUX_ALLOC_ERROR,
                    fatal: !1,
                    bytes: M,
                    reason: "fail allocating audio mdat " + M
                  })
                }
                y || (new DataView(d.buffer).setUint32(0, M), d.set(P.types
                  .mdat, 4));
                for (var W = 0; W < Y; W++)(o = x.getSilentFrame(e.manifestCodec ||
                    e.codec, e.channelCount)) || (l.b.log(
                    "Unable to get silent frame for given audio codec; duplicating this frame instead."
                  ), o = K.subarray()), d.set(o, b), b += o.byteLength,
                  s = {
                    size: o.byteLength,
                    cts: 0,
                    duration: 1024,
                    flags: {
                      isLeading: 0,
                      isDependedOn: 0,
                      hasRedundancy: 0,
                      degradPrio: 0,
                      dependsOn: 1
                    }
                  }, T.push(s)
              }
              d.set(K, b);
              var z = K.byteLength;
              b += z, s = {
                size: z,
                cts: 0,
                duration: 0,
                flags: {
                  isLeading: 0,
                  isDependedOn: 0,
                  hasRedundancy: 0,
                  degradPrio: 0,
                  dependsOn: 1
                }
              }, T.push(s), h = H
            }
            var X = 0;
            if ((C = T.length) >= 2 && (X = T[C - 2].duration, s.duration =
                X), C) {
              this.nextAudioPts = S = h + p * X, e.samples = T, u = y ?
                new Uint8Array : P.moof(e.sequenceNumber++, f / p, e),
                e.samples = [];
              var q = f / c,
                Q = S / c,
                Z = {
                  data1: u,
                  data2: d,
                  startPTS: q,
                  endPTS: Q,
                  startDTS: q,
                  endDTS: Q,
                  type: "audio",
                  hasAudio: !0,
                  hasVideo: !1,
                  nb: C
                };
              return this.observer.trigger(a.a.FRAG_PARSING_DATA, Z), Z
            }
            return null
          }
        }, t.remuxEmptyAudio = function(e, t, r, a) {
          var i = e.inputTimeScale,
            n = i / (e.samplerate ? e.samplerate : i),
            s = this.nextAudioPts,
            o = (void 0 !== s ? s : a.startDTS * i) + this._initDTS,
            d = a.endDTS * i + this._initDTS,
            u = 1024 * n,
            f = Math.ceil((d - o) / u),
            h = x.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
          if (l.b.warn("remux empty Audio"), h) {
            for (var c = [], v = 0; v < f; v++) {
              var p = o + v * u;
              c.push({
                unit: h,
                pts: p,
                dts: p
              })
            }
            e.samples = c, this.remuxAudio(e, t, r)
          } else l.b.trace(
            "Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!"
          )
        }, t.remuxID3 = function(e, t) {
          var r = e.samples.length;
          if (r) {
            for (var i = e.inputTimeScale, n = this._initPTS, s = this._initDTS,
                o = 0; o < r; o++) {
              var l = e.samples[o];
              l.pts = G(l.pts - n, t * i) / i, l.dts = G(l.dts - s, t *
                i) / i
            }
            this.observer.trigger(a.a.FRAG_PARSING_METADATA, {
              samples: e.samples
            }), e.samples = []
          }
        }, t.remuxText = function(e, t) {
          var r = e.samples.length,
            i = e.inputTimeScale,
            n = this._initPTS;
          if (r) {
            for (var s = 0; s < r; s++) {
              var o = e.samples[s];
              o.pts = G(o.pts - n, t * i) / i
            }
            e.samples.sort((function(e, t) {
              return e.pts - t.pts
            })), this.observer.trigger(a.a.FRAG_PARSING_USERDATA, {
              samples: e.samples
            })
          }
          e.samples = []
        }, e
      }(),
      H = function() {
        function e(e) {
          this.observer = e
        }
        var t = e.prototype;
        return t.destroy = function() {}, t.resetTimeStamp = function() {},
          t.resetInitSegment = function() {}, t.remux = function(e, t, r,
            i, n, s, o, l) {
            var d = this.observer,
              u = "";
            e && (u += "audio"), t && (u += "video"), d.trigger(a.a.FRAG_PARSING_DATA, {
              data1: l,
              startPTS: n,
              startDTS: n,
              type: u,
              hasAudio: !!e,
              hasVideo: !!t,
              nb: 1,
              dropped: 0
            }), d.trigger(a.a.FRAG_PARSED)
          }, e
      }(),
      V = Object(d.a)();
    try {
      j = V.performance.now.bind(V.performance)
    } catch (e) {
      l.b.debug("Unable to use Performance API on this environment"), j =
        V.Date.now
    }
    var Y = function() {
      function e(e, t, r, a) {
        this.observer = e, this.typeSupported = t, this.config = r,
          this.vendor = a
      }
      var t = e.prototype;
      return t.destroy = function() {
        var e = this.demuxer;
        e && e.destroy()
      }, t.push = function(e, t, r, i, n, s, o, l, d, u, h, c) {
        var v = this;
        if (e.byteLength > 0 && null != t && null != t.key &&
          "AES-128" === t.method) {
          var p = this.decrypter;
          null == p && (p = this.decrypter = new f(this.observer,
            this.config));
          var g = j();
          p.decrypt(e, t.key.buffer, t.iv.buffer, (function(e) {
            var f = j();
            v.observer.trigger(a.a.FRAG_DECRYPTED, {
              stats: {
                tstart: g,
                tdecrypt: f
              }
            }), v.pushDecrypted(new Uint8Array(e), t, new Uint8Array(
              r), i, n, s, o, l, d, u, h, c)
          }))
        } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(
          r), i, n, s, o, l, d, u, h, c)
      }, t.pushDecrypted = function(e, t, r, n, s, o, l, d, u, f, h,
        c) {
        var v = this.demuxer,
          p = this.remuxer;
        if (!v || l || d) {
          for (var g, m = this.observer, y = this.typeSupported, b =
              this.config, E = [{
                demux: k,
                remux: K
              }, {
                demux: _.a,
                remux: H
              }, {
                demux: S,
                remux: K
              }, {
                demux: O,
                remux: K
              }], T = 0, A = E.length; T < A && !(g = E[T]).demux.probe(
              e); T++);
          if (!g) return void m.trigger(a.a.ERROR, {
            type: i.b.MEDIA_ERROR,
            details: i.a.FRAG_PARSING_ERROR,
            fatal: !0,
            reason: "no demux matching with content found"
          });
          p && p instanceof g.remux || (p = new g.remux(m, b, y, this
              .vendor)), v && v instanceof g.demux || (v = new g.demux(
              m, p, b, y), this.probe = g.demux.probe), this.demuxer =
            v, this.remuxer = p
        }(l || d) && (v.resetInitSegment(r, n, s, f), p.resetInitSegment()),
        l && (v.resetTimeStamp(c), p.resetTimeStamp(c)), "function" ==
          typeof v.setDecryptData && v.setDecryptData(t), v.append(e,
            o, u, h)
      }, e
    }();
    t.a = Y
  },
  10: function(e, t, r) {
    "use strict";
    var a = r(0),
      i = r(1),
      n = Math.pow(2, 32) - 1,
      s = function() {
        function e(e, t) {
          this.observer = e, this.remuxer = t
        }
        var t = e.prototype;
        return t.resetTimeStamp = function(e) {
          this.initPTS = e
        }, t.resetInitSegment = function(t, r, a, n) {
          if (t && t.byteLength) {
            var s = this.initData = e.parseInitSegment(t);
            null == r && (r = "mp4a.40.5"), null == a && (a =
              "avc1.42e01e");
            var o = {};
            s.audio && s.video ? o.audiovideo = {
              container: "video/mp4",
              codec: r + "," + a,
              initSegment: n ? t : null
            } : (s.audio && (o.audio = {
              container: "audio/mp4",
              codec: r,
              initSegment: n ? t : null
            }), s.video && (o.video = {
              container: "video/mp4",
              codec: a,
              initSegment: n ? t : null
            })), this.observer.trigger(i.a.FRAG_PARSING_INIT_SEGMENT, {
              tracks: o
            })
          } else r && (this.audioCodec = r), a && (this.videoCodec = a)
        }, e.probe = function(t) {
          return e.findBox({
            data: t,
            start: 0,
            end: Math.min(t.length, 16384)
          }, ["moof"]).length > 0
        }, e.bin2str = function(e) {
          return String.fromCharCode.apply(null, e)
        }, e.readUint16 = function(e, t) {
          e.data && (t += e.start, e = e.data);
          var r = e[t] << 8 | e[t + 1];
          return r < 0 ? 65536 + r : r
        }, e.readUint32 = function(e, t) {
          e.data && (t += e.start, e = e.data);
          var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
          return r < 0 ? 4294967296 + r : r
        }, e.writeUint32 = function(e, t, r) {
          e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] =
            r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
        }, e.findBox = function(t, r) {
          var a, i, n, s, o, l, d = [];
          if (t.data ? (o = t.start, n = t.end, t = t.data) : (o = 0, n =
              t.byteLength), !r.length) return null;
          for (a = o; a < n;) l = (i = e.readUint32(t, a)) > 1 ? a + i :
            n, e.bin2str(t.subarray(a + 4, a + 8)) === r[0] && (1 === r
              .length ? d.push({
                data: t,
                start: a + 8,
                end: l
              }) : (s = e.findBox({
                data: t,
                start: a + 8,
                end: l
              }, r.slice(1))).length && (d = d.concat(s))), a = l;
          return d
        }, e.parseSegmentIndex = function(t) {
          var r, a = e.findBox(t, ["moov"])[0],
            i = a ? a.end : null,
            n = 0,
            s = e.findBox(t, ["sidx"]);
          if (!s || !s[0]) return null;
          r = [];
          var o = (s = s[0]).data[0];
          n = 0 === o ? 8 : 16;
          var l = e.readUint32(s, n);
          n += 4;
          n += 0 === o ? 8 : 16, n += 2;
          var d = s.end + 0,
            u = e.readUint16(s, n);
          n += 2;
          for (var f = 0; f < u; f++) {
            var h = n,
              c = e.readUint32(s, h);
            h += 4;
            var v = 2147483647 & c;
            if (1 === (2147483648 & c) >>> 31) return void console.warn(
              "SIDX has hierarchical references (not supported)");
            var p = e.readUint32(s, h);
            h += 4, r.push({
              referenceSize: v,
              subsegmentDuration: p,
              info: {
                duration: p / l,
                start: d,
                end: d + v - 1
              }
            }), d += v, n = h += 4
          }
          return {
            earliestPresentationTime: 0,
            timescale: l,
            version: o,
            referencesCount: u,
            references: r,
            moovEndOffset: i
          }
        }, e.parseInitSegment = function(t) {
          var r = [];
          return e.findBox(t, ["moov", "trak"]).forEach((function(t) {
            var i = e.findBox(t, ["tkhd"])[0];
            if (i) {
              var n = i.data[i.start],
                s = 0 === n ? 12 : 20,
                o = e.readUint32(i, s),
                l = e.findBox(t, ["mdia", "mdhd"])[0];
              if (l) {
                s = 0 === (n = l.data[l.start]) ? 12 : 20;
                var d = e.readUint32(l, s),
                  u = e.findBox(t, ["mdia", "hdlr"])[0];
                if (u) {
                  var f = {
                    soun: "audio",
                    vide: "video"
                  }[e.bin2str(u.data.subarray(u.start + 8, u.start +
                    12))];
                  if (f) {
                    var h = e.findBox(t, ["mdia", "minf", "stbl",
                      "stsd"
                    ]);
                    if (h.length) {
                      h = h[0];
                      var c = e.bin2str(h.data.subarray(h.start +
                        12, h.start + 16));
                      a.b.log("MP4Demuxer:" + f + ":" + c +
                        " found")
                    }
                    r[o] = {
                      timescale: d,
                      type: f
                    }, r[f] = {
                      timescale: d,
                      id: o
                    }
                  }
                }
              }
            }
          })), r
        }, e.getStartDTS = function(t, r) {
          var a, i, n;
          return a = e.findBox(r, ["moof", "traf"]), i = [].concat.apply(
            [], a.map((function(r) {
              return e.findBox(r, ["tfhd"]).map((function(a) {
                var i, n;
                return i = e.readUint32(a, 4), n = t[i].timescale ||
                  9e4, e.findBox(r, ["tfdt"]).map((function(
                    t) {
                    var r, a;
                    return r = t.data[t.start], a = e.readUint32(
                      t, 4), 1 === r && (a *= Math.pow(
                      2, 32), a += e.readUint32(t,
                      8)), a
                  }))[0] / n
              }))
            }))), n = Math.min.apply(null, i), isFinite(n) ? n : 0
        }, e.offsetStartDTS = function(t, r, a) {
          e.findBox(r, ["moof", "traf"]).map((function(r) {
            return e.findBox(r, ["tfhd"]).map((function(i) {
              var s = e.readUint32(i, 4),
                o = t[s].timescale || 9e4;
              e.findBox(r, ["tfdt"]).map((function(t) {
                var r = t.data[t.start],
                  i = e.readUint32(t, 4);
                if (0 === r) e.writeUint32(t, 4, i -
                  a * o);
                else {
                  i *= Math.pow(2, 32), i += e.readUint32(
                    t, 8), i -= a * o, i = Math.max(
                    i, 0);
                  var s = Math.floor(i / (n + 1)),
                    l = Math.floor(i % (n + 1));
                  e.writeUint32(t, 4, s), e.writeUint32(
                    t, 8, l)
                }
              }))
            }))
          }))
        }, t.append = function(t, r, a, n) {
          var s = this.initData;
          s || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !
            1), s = this.initData);
          var o, l = this.initPTS;
          if (void 0 === l) {
            var d = e.getStartDTS(s, t);
            this.initPTS = l = d - r, this.observer.trigger(i.a.INIT_PTS_FOUND, {
              initPTS: l
            })
          }
          e.offsetStartDTS(s, t, l), o = e.getStartDTS(s, t), this.remuxer
            .remux(s.audio, s.video, null, null, o, a, n, t)
        }, t.destroy = function() {}, e
      }();
    t.a = s
  },
  4: function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
      return o
    }));
    var a, i = r(5),
      n = function() {
        function e() {}
        return e.isHeader = function(e, t) {
          return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] &&
            51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t +
              6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] <
            128
        }, e.isFooter = function(e, t) {
          return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] &&
            73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t +
              6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] <
            128
        }, e.getID3Data = function(t, r) {
          for (var a = r, i = 0; e.isHeader(t, r);) {
            i += 10, i += e._readSize(t, r + 6), e.isFooter(t, r + 10) &&
              (i += 10), r += i
          }
          if (i > 0) return t.subarray(a, a + i)
        }, e._readSize = function(e, t) {
          var r = 0;
          return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |=
            (127 & e[t + 2]) << 7, r |= 127 & e[t + 3]
        }, e.getTimeStamp = function(t) {
          for (var r = e.getID3Frames(t), a = 0; a < r.length; a++) {
            var i = r[a];
            if (e.isTimeStampFrame(i)) return e._readTimeStamp(i)
          }
        }, e.isTimeStampFrame = function(e) {
          return e && "PRIV" === e.key &&
            "com.apple.streaming.transportStreamTimestamp" === e.info
        }, e._getFrameData = function(t) {
          var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
            a = e._readSize(t, 4);
          return {
            type: r,
            size: a,
            data: t.subarray(10, 10 + a)
          }
        }, e.getID3Frames = function(t) {
          for (var r = 0, a = []; e.isHeader(t, r);) {
            for (var i = e._readSize(t, r + 6), n = (r += 10) + i; r +
              8 < n;) {
              var s = e._getFrameData(t.subarray(r)),
                o = e._decodeFrame(s);
              o && a.push(o), r += s.size + 10
            }
            e.isFooter(t, r) && (r += 10)
          }
          return a
        }, e._decodeFrame = function(t) {
          return "PRIV" === t.type ? e._decodePrivFrame(t) : "W" === t.type[
            0] ? e._decodeURLFrame(t) : e._decodeTextFrame(t)
        }, e._readTimeStamp = function(e) {
          if (8 === e.data.byteLength) {
            var t = new Uint8Array(e.data),
              r = 1 & t[3],
              a = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
            return a /= 45, r && (a += 47721858.84), Math.round(a)
          }
        }, e._decodePrivFrame = function(t) {
          if (!(t.size < 2)) {
            var r = e._utf8ArrayToStr(t.data, !0),
              a = new Uint8Array(t.data.subarray(r.length + 1));
            return {
              key: t.type,
              info: r,
              data: a.buffer
            }
          }
        }, e._decodeTextFrame = function(t) {
          if (!(t.size < 2)) {
            if ("TXXX" === t.type) {
              var r = 1,
                a = e._utf8ArrayToStr(t.data.subarray(r), !0);
              r += a.length + 1;
              var i = e._utf8ArrayToStr(t.data.subarray(r));
              return {
                key: t.type,
                info: a,
                data: i
              }
            }
            var n = e._utf8ArrayToStr(t.data.subarray(1));
            return {
              key: t.type,
              data: n
            }
          }
        }, e._decodeURLFrame = function(t) {
          if ("WXXX" === t.type) {
            if (t.size < 2) return;
            var r = 1,
              a = e._utf8ArrayToStr(t.data.subarray(r), !0);
            r += a.length + 1;
            var i = e._utf8ArrayToStr(t.data.subarray(r));
            return {
              key: t.type,
              info: a,
              data: i
            }
          }
          var n = e._utf8ArrayToStr(t.data);
          return {
            key: t.type,
            data: n
          }
        }, e._utf8ArrayToStr = function(e, t) {
          void 0 === t && (t = !1);
          var r = s();
          if (r) {
            var a = r.decode(e);
            if (t) {
              var i = a.indexOf("\0");
              return -1 !== i ? a.substring(0, i) : a
            }
            return a.replace(/\0/g, "")
          }
          for (var n, o, l, d = e.length, u = "", f = 0; f < d;) {
            if (0 === (n = e[f++]) && t) return u;
            if (0 !== n && 3 !== n) switch (n >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                u += String.fromCharCode(n);
                break;
              case 12:
              case 13:
                o = e[f++], u += String.fromCharCode((31 & n) << 6 |
                  63 & o);
                break;
              case 14:
                o = e[f++], l = e[f++], u += String.fromCharCode((15 &
                  n) << 12 | (63 & o) << 6 | (63 & l) << 0)
            }
          }
          return u
        }, e
      }();

    function s() {
      var e = Object(i.a)();
      return a || void 0 === e.TextDecoder || (a = new e.TextDecoder(
        "utf-8")), a
    }
    var o = n._utf8ArrayToStr;
    t.a = n
  },
  3: function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
      return a
    }));
    var a = Number.isFinite || function(e) {
      return "number" == typeof e && isFinite(e)
    };
    Number.MAX_SAFE_INTEGER
  },
  2: function(e, t, r) {
    "use strict";
    var a, i;
    r.d(t, "b", (function() {
        return a
      })), r.d(t, "a", (function() {
        return i
      })),
      function(e) {
        e.NETWORK_ERROR = "networkError", e.MEDIA_ERROR = "mediaError", e
          .KEY_SYSTEM_ERROR = "keySystemError", e.MUX_ERROR = "muxError",
          e.OTHER_ERROR = "otherError"
      }(a || (a = {})),
      function(e) {
        e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e.KEY_SYSTEM_NO_ACCESS =
          "keySystemNoAccess", e.KEY_SYSTEM_NO_SESSION =
          "keySystemNoSession", e.KEY_SYSTEM_LICENSE_REQUEST_FAILED =
          "keySystemLicenseRequestFailed", e.KEY_SYSTEM_NO_INIT_DATA =
          "keySystemNoInitData", e.MANIFEST_LOAD_ERROR =
          "manifestLoadError", e.MANIFEST_LOAD_TIMEOUT =
          "manifestLoadTimeOut", e.MANIFEST_PARSING_ERROR =
          "manifestParsingError", e.MANIFEST_INCOMPATIBLE_CODECS_ERROR =
          "manifestIncompatibleCodecsError", e.LEVEL_EMPTY_ERROR =
          "levelEmptyError", e.LEVEL_LOAD_ERROR = "levelLoadError", e.LEVEL_LOAD_TIMEOUT =
          "levelLoadTimeOut", e.LEVEL_SWITCH_ERROR = "levelSwitchError",
          e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e.AUDIO_TRACK_LOAD_TIMEOUT =
          "audioTrackLoadTimeOut", e.FRAG_LOAD_ERROR = "fragLoadError", e
          .FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e.FRAG_DECRYPT_ERROR =
          "fragDecryptError", e.FRAG_PARSING_ERROR = "fragParsingError",
          e.REMUX_ALLOC_ERROR = "remuxAllocError", e.KEY_LOAD_ERROR =
          "keyLoadError", e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e.BUFFER_ADD_CODEC_ERROR =
          "bufferAddCodecError", e.BUFFER_APPEND_ERROR =
          "bufferAppendError", e.BUFFER_APPENDING_ERROR =
          "bufferAppendingError", e.BUFFER_STALLED_ERROR =
          "bufferStalledError", e.BUFFER_FULL_ERROR = "bufferFullError",
          e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e.BUFFER_NUDGE_ON_STALL =
          "bufferNudgeOnStall", e.INTERNAL_EXCEPTION =
          "internalException"
      }(i || (i = {}))
  }
}))(self);
