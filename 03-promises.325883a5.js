var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("iQIUW");const r=document.querySelector(".form"),l=r.querySelector("input[name = delay]"),u=r.querySelector("input[name = step]"),a=r.querySelector("input[name = amount]");function d(e,n){return newMuPromise=new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}r.addEventListener("submit",(function(e){e.preventDefault();let n=+l.value,t=+u.value,o=+a.value+1;for(let e=1;e<o;e++)d(e,n).then((({position:e,delay:n})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)})),n+=t}));
//# sourceMappingURL=03-promises.325883a5.js.map