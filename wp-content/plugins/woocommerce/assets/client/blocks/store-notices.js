(()=>{var e,t,o,n={7235:(e,t,o)=>{"use strict";o.r(t);var n=o(1609);const r=window.wp.blocks;var s=o(7104),c=o(5573);const a=(0,n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",fill:"none"},(0,n.createElement)("path",{stroke:"currentColor",strokeWidth:"1.5",fill:"none",d:"M6 3.75h12c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25z"}),(0,n.createElement)("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.9 7.5A1.1 1.1 0 018 6.4h8a1.1 1.1 0 011.1 1.1v2a1.1 1.1 0 01-1.1 1.1H8a1.1 1.1 0 01-1.1-1.1v-2zm1.2.1v1.8h7.8V7.6H8.1z",clipRule:"evenodd"}),(0,n.createElement)("path",{fill:"currentColor",d:"M8.5 12h1v1h-1v-1zM8.5 14h1v1h-1v-1zM8.5 16h1v1h-1v-1zM11.5 12h1v1h-1v-1zM11.5 14h1v1h-1v-1zM11.5 16h1v1h-1v-1zM14.5 12h1v1h-1v-1zM14.5 14h1v1h-1v-1zM14.5 16h1v1h-1v-1z"})),i=JSON.parse('{"name":"woocommerce/store-notices","version":"1.0.0","title":"Store Notices","description":"Display shopper-facing notifications generated by WooCommerce or extensions.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"]},"attributes":{"align":{"type":"string","default":"wide"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}'),l=window.wp.blockEditor;var p=o(7723),m=o(9019),u=o.n(m),d=o(1208),v=(o(9345),o(2900)),f=o(2478),w=o(8306);const h=e=>{switch(e){case"success":case"warning":case"info":case"default":return"polite";default:return"assertive"}},b=e=>{switch(e){case"success":return v.A;case"warning":case"info":case"error":return f.A;default:return w.A}};var k=o(1777),y=o(6087),g=o(4040),E=o.n(g);o(2080),o(7791);const _=()=>(0,n.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"}),O=(0,y.forwardRef)(((e,t)=>{"showSpinner"in e&&E()("showSpinner prop",{version:"8.9.0",alternative:"Render a spinner in the button children instead.",plugin:"WooCommerce"});const{className:o,showSpinner:r=!1,children:s,variant:c="contained",removeTextWrap:a=!1,...i}=e,l=u()("wc-block-components-button","wp-element-button",o,c,{"wc-block-components-button--loading":r});if("href"in e)return(0,n.createElement)(k.$,{render:(0,n.createElement)("a",{ref:t,href:e.href},r&&(0,n.createElement)(_,null),(0,n.createElement)("span",{className:"wc-block-components-button__text"},s)),className:l,...i});const p=a?e.children:(0,n.createElement)("span",{className:"wc-block-components-button__text"},e.children);return(0,n.createElement)(k.$,{ref:t,className:l,...i},r&&(0,n.createElement)(_,null),p)}));var x=o(195);const M=({className:e,status:t="default",children:o,spokenMessage:r=o,onRemove:c=(()=>{}),isDismissible:a=!0,politeness:i=h(t),summary:l})=>(((e,t)=>{const o="string"==typeof e?e:(0,y.renderToString)(e);(0,y.useEffect)((()=>{o&&(0,x.speak)(o,t)}),[o,t])})(r,i),(0,n.createElement)("div",{className:u()(e,"wc-block-components-notice-banner","is-"+t,{"is-dismissible":a})},(0,n.createElement)(s.A,{icon:b(t)}),(0,n.createElement)("div",{className:"wc-block-components-notice-banner__content"},l&&(0,n.createElement)("p",{className:"wc-block-components-notice-banner__summary"},l),o),!!a&&(0,n.createElement)(O,{className:"wc-block-components-notice-banner__dismiss","aria-label":(0,p.__)("Dismiss this notice","woocommerce"),onClick:e=>{"function"==typeof(null==e?void 0:e.preventDefault)&&e.preventDefault&&e.preventDefault(),c()},removeTextWrap:!0},(0,n.createElement)(s.A,{icon:d.A}))));o(6363);(0,r.registerBlockType)(i,{icon:{src:(0,n.createElement)(s.A,{icon:a,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes},edit:()=>{const e=(0,l.useBlockProps)({className:"wc-block-store-notices"});return(0,n.createElement)("div",{...e},(0,n.createElement)(M,{status:"info",isDismissible:!1},(0,p.__)("Notices added by WooCommerce or extensions will show up here.","woocommerce")))},save:()=>null})},2080:()=>{},9345:()=>{},6363:()=>{},7791:()=>{},1609:e=>{"use strict";e.exports=window.React},195:e=>{"use strict";e.exports=window.wp.a11y},4040:e=>{"use strict";e.exports=window.wp.deprecated},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e].call(o.exports,o,o.exports,s),o.exports}s.m=n,e=[],s.O=(t,o,n,r)=>{if(!o){var c=1/0;for(p=0;p<e.length;p++){for(var[o,n,r]=e[p],a=!0,i=0;i<o.length;i++)(!1&r||c>=r)&&Object.keys(s.O).every((e=>s.O[e](o[i])))?o.splice(i--,1):(a=!1,r<c&&(c=r));if(a){e.splice(p--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[o,n,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);s.r(r);var c={};t=t||[null,o({}),o([]),o(o)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=o(a))Object.getOwnPropertyNames(a).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,s.d(r,c),r},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.j=4950,(()=>{var e={4950:0};s.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,[c,a,i]=o,l=0;if(c.some((t=>0!==e[t]))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(i)var p=i(s)}for(t&&t(o);l<c.length;l++)r=c[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(p)},o=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=s.O(void 0,[94],(()=>s(7235)));c=s.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["store-notices"]=c})();