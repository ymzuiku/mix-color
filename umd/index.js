!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e=e||self).mixColor={})}(this,function(e){"use strict";function s(e){var r={r:0,g:0,b:0,a:1};if(0===e.search(/#/))3===(e=e.replace(/#/,"")).length?(r.r=parseInt(e[0]+e[0],16),r.g=parseInt(e[1]+e[1],16),r.b=parseInt(e[2]+e[2],16)):6===e.length?(r.r=parseInt(e[0]+e[1],16),r.g=parseInt(e[2]+e[3],16),r.b=parseInt(e[4]+e[5],16)):(r.r=parseInt(e[0]+e[1],16),r.g=parseInt(e[2]+e[3],16),r.b=parseInt(e[4]+e[5],16),r.a=parseInt(e[6]+e[7],16)/255);else if(0===e.search(/rgba\(/)){var t=(e=e.replace(/rgba\(|\)|\s+/g,"")).split(",");r.r=Number(t[0]),r.g=Number(t[1]),r.b=Number(t[2]),r.a=Number(t[3])}else if(0===e.search(/rgb\(/)){t=(e=e.replace(/rgb\(|\)|\s+/g,"")).split(",");r.r=Number(t[0]),r.g=Number(t[1]),r.b=Number(t[2])}return r}function o(e,r,t){var n=e!==r?e+(r-e)*t:e;return n=255<n?255:n,Math.floor(n)}e.default=function(e,r,t){void 0===t&&(t=1);var n=s(e),a=s(r);return"rgba("+o(n.r,a.r,t)+", "+o(n.g,a.g,t)+", "+o(n.b,a.b,t)+", "+function(e,r,t){var n;return t=1-t<0?0:1-t,1e4*(n=(n=1<(n=e*r==1?1:0===e?r*t:0===r?e*t:0===t?e*r:e*r*t)?1:n)<0?0:n).toFixed(4)/1e4}(n.a,a.a,t)+")"},e.parseColor=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map