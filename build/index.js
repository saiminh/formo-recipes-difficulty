(()=>{"use strict";var e,t={21:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,r=window.wp.blockEditor,i=window.wp.components,n=window.wp.element,o=JSON.parse('{"UU":"create-block/formo-recipes-difficulty"}');(0,e.registerBlockType)(o.UU,{edit:function({attributes:e,setAttributes:o}){const[c,a]=(0,n.useState)(e.difficulty);return(0,t.createElement)("div",{...(0,r.useBlockProps)({className:"difficulty-level"})},(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)("p",null,(0,l.__)("How long will each slide be visible?")),(0,t.createElement)(i.PanelBody,null,(0,t.createElement)(i.RangeControl,{label:(0,l.__)("Difficulty Level"),value:c,onChange:e=>{a(e),o({difficulty:e})},min:1,max:5}))),[1,2,3,4,5].map((e=>(0,t.createElement)("span",{key:e,className:e<=c?"circle-full":"circle-empty"}))))},save:function({attributes:e}){return(0,t.createElement)("div",{...r.useBlockProps.save({className:"difficulty-level"})},[1,2,3,4,5].map((l=>(0,t.createElement)("span",{key:l,className:l<=e.difficulty?"circle-full":"circle-empty"}))))}})}},l={};function r(e){var i=l[e];if(void 0!==i)return i.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,l,i,n)=>{if(!l){var o=1/0;for(f=0;f<e.length;f++){for(var[l,i,n]=e[f],c=!0,a=0;a<l.length;a++)(!1&n||o>=n)&&Object.keys(r.O).every((e=>r.O[e](l[a])))?l.splice(a--,1):(c=!1,n<o&&(o=n));if(c){e.splice(f--,1);var s=i();void 0!==s&&(t=s)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[l,i,n]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var i,n,[o,c,a]=l,s=0;if(o.some((t=>0!==e[t]))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(a)var f=a(r)}for(t&&t(l);s<o.length;s++)n=o[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(f)},l=globalThis.webpackChunkformo_recipes_difficulty=globalThis.webpackChunkformo_recipes_difficulty||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var i=r.O(void 0,[350],(()=>r(21)));i=r.O(i)})();