// ==UserScript==
// @name         RoX Ultimate
// @namespace    https://www.rophim.mx/
// @version      2.0
// @description  Ultimate patch for RoPhim: works in VPN App and in-browser userscript
// @author       anhwaivo, hth4nh, dabeecao, hscavn, hiepkimcdtk55
// @match        https://www.rophim.mx/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

/* ---------------------------
   SHADOWROCKET / SURGE / ... PATCH
   --------------------------- */
if (typeof $response !== 'undefined' && typeof $done === 'function') {
  let b = $response.body;
  if (b) {
    try {
      JSON.parse(b);
      b = b
        .replace(/("is_vip"|"is_verified")\s*:\s*false/g, '$1:true')
        .replace(/("vip_expires_at")\s*:\s*0/g, '$1:253394586000')
        .replace(/("coin_balance")\s*:\s*\d+/g, '"coin_balance":999999999');
    } catch (e) {}
  }
  $done({ body: b });
}

/* ---------------------------
   BROWSER USERSCRIPT PATCH
   (XHR + fetch) - short replace
   --------------------------- */
(function () {
  if (typeof window === 'undefined') return;
  'use strict';

  // Only target relevant path fragment
  function isTargetUrl(url) {
    try {
      return typeof url === 'string' && url.indexOf('/v1/user/info') !== -1;
    } catch {
      return false;
    }
  }

  function tryJsonReplace(text) {
    if (typeof text !== 'string' || text.length === 0) return text;
    try {
      JSON.parse(text); // check valid JSON
      return text
        .replace(/("is_vip"|"is_verified")\s*:\s*false/g, '$1:true')
        .replace(/("vip_expires_at")\s*:\s*0/g, '$1:253394586000')
        .replace(/("coin_balance")\s*:\s*\d+/g, '"coin_balance":999999999');
    } catch {
      return text;
    }
  }

  /* ---------- Hook XMLHttpRequest ---------- */
  (function hookXHR() {
    if (!window.XMLHttpRequest) return;
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
      try {
        this._roxUrl = typeof url === 'string' ? url : '';
      } catch {
        this._roxUrl = '';
      }
      return originalOpen.call(this, method, url, async, user, pass);
    };

    XMLHttpRequest.prototype.send = function (...args) {
      this.addEventListener('load', function () {
        try {
          const url = this._roxUrl || '';
          if (!isTargetUrl(url)) return;
          const isTextResponse =
            !this.responseType || this.responseType === '' || this.responseType === 'text';
          if (!isTextResponse) return;

          const origText = typeof this.responseText === 'string' ? this.responseText : '';
          const newText = tryJsonReplace(origText);
          if (newText === origText) return;

          // override getters to serve modified text
          try {
            Object.defineProperty(this, 'responseText', {
              configurable: true,
              enumerable: true,
              get: function () {
                return newText;
              }
            });
          } catch (e) {
            console.warn('[RoX] responseText override failed:', e);
          }
          try {
            Object.defineProperty(this, 'response', {
              configurable: true,
              enumerable: true,
              get: function () {
                return newText;
              }
            });
          } catch (e) {
            console.warn('[RoX] response override failed:', e);
          }
        } catch (err) {
          console.error('[RoX XHR Hook Error]', err);
        }
      });
      return originalSend.apply(this, args);
    };
  })();

  /* ---------- Hook fetch ---------- */
  (function hookFetch() {
    if (!window.fetch) return;
    const originalFetch = window.fetch;
    window.fetch = function (input, init) {
      // Resolve URL string from input (Request or string)
      const reqUrl = (function () {
        try {
          if (typeof input === 'string') return input;
          if (input && input.url) return input.url;
        } catch {}
        return '';
      })();

      // If not a target URL, call original fetch
      if (!isTargetUrl(reqUrl)) {
        return originalFetch.apply(this, arguments);
      }

      // For target URLs, call original fetch then replace response body text if JSON
      return originalFetch.apply(this, arguments).then(async (resp) => {
        try {
          // clone so we can read body
          const clone = resp.clone();
          // check content-type header quickly (may be null)
          const contentType = clone.headers.get('content-type') || '';
          // only attempt replace for JSON/text-like responses
          if (!contentType.includes('application/json') && !contentType.includes('text/')) {
            return resp;
          }
          const origText = await clone.text();
          const newText = tryJsonReplace(origText);
          if (newText === origText) return resp;

          // build new Response with same status, statusText, headers
          const newResp = new Response(newText, {
            status: resp.status,
            statusText: resp.statusText,
            headers: resp.headers
          });
          return newResp;
        } catch (e) {
          console.error('[RoX Fetch Hook Error]', e);
          return resp;
        }
      });
    };
  })();
})();