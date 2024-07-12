(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{getSectionSlugFromPattern:()=>ae,initFirebaseData:()=>R,initializeGutentagPatterns:()=>ne,normalizeCategorySlug:()=>se,registerBlockVariationFromPreset:()=>O,registerPattern:()=>H,registerPatternCategory:()=>W,registerVariation:()=>j,sectionCategoryToLabel:()=>le,useInitializeCloudPatterns:()=>ie});const o=window.kubio.constants,n=window.kubio.editorData,i=window.kubio.utils,r=window.wp.data,s=window.wp.element,a=window.wp.hooks,l=window.lodash;var c=e.n(l);const u=window.kubio.adminPanel,d=window.kubio.blockLibrary,b=window.kubio.core,f=window.kubio.pro,p=window.wp.i18n,g=window.wp.blocks,k=(0,d.getNamesOfBlocks)(),m=(0,d.getBlocksByName)(),y=(()=>{const e={};return c().each(m,((t,o)=>{const n=c().get(t,"settings.inheritBlock");n&&(Array.isArray(e[n])||(e[n]=[]),e[n].push(o))})),e})(),h=e=>c().get(m,e+".settings.title",""),S=e=>h(e),w=e=>h(e)+"(from default preset)",P={};top.kubioDefaultPresetByBlockName=P;const B=(e,t)=>o=>{const{value:n}=o;j(t,(0,i.refreshBlockStyleRefs)({name:t,isDefault:!0,title:S(t),description:w(t),attributes:{},innerBlocks:[n]}));const[,r,s]=n;P[e]=n,j(e,(0,i.refreshBlockStyleRefs)({name:e,isDefault:!0,title:S(e),description:w(e),attributes:r,innerBlocks:s}))},E={[k.BUTTON]:B(k.BUTTON,k.BUTTON_GROUP),[k.LINK]:B(k.LINK,k.LINK_GROUP)},v=[k.SECTION,k.HERO,k.NAVIGATION],O=(e,t,o=!0)=>{P[e]=t;const n=(0,g.getBlockVariations)(e);if(o&&n){const t=n.find((e=>e.isDefault));t&&(0,g.unregisterBlockVariation)(e,t.name)}j(e,(0,i.refreshBlockStyleRefs)({name:e,isDefault:o,title:S(e),description:S(e),attributes:t[1],innerBlocks:t[2]}))},_=(...e)=>{setTimeout(((e,t)=>{const{value:o}=e;if(c().has(E,t))return E[t](e);O(t,o),y[t]&&y[t].forEach((e=>{O(e,o)}))}),1,...e)};function T(e){const t=c().get(m,e,{}),{template:o}=t;o&&(A(o[0]),j(e,(0,i.refreshBlockStyleRefs)({name:e,isDefault:!0,title:S(e),description:S(e),attributes:{},innerBlocks:o})))}function A(e){const t=c().get(e,"2",[]);t.forEach(((e,o)=>{"function"==typeof e?c().set(t,o,e()):A(e)}))}const I=e=>(null==e?void 0:e.internalTags)||[],N=window.kubioUtilsData.showShopContent,C=["kubio-content/woocommerce","kubio-content/products"],R=(e=!1)=>{(0,u.initAdminStore)((async(t,o=[],n=[])=>{const{sections:i,headers:r,footers:s,presets:u,cloudDefaults:d}=t;if((e=>{if(!e)return;(e=c().cloneDeep(e)).forEach((e=>{e.value=JSON.parse(e.value)}));const t={};e.forEach((e=>{t[e.component]=e})),c().each(t,_)})(d),setTimeout((()=>{v.forEach(T),J()}),200),e)return;const g=[].concat(i,r,s).filter((e=>{const t=e.categorySlug;return!(!N&&C.includes(t))})),m={},y=c().keyBy(o,"slug"),h=[],S=g.map((e=>{const t=e.categorySlug;m[t]=!0;const o=c().isString(e.value)?JSON.parse(e.value):e.value;let n;n=(e=>(0,f.isFreeVersion)()&&e.isPro)(e);const i={};null!=e&&e.context&&(i.context=e.context),null!=e&&e.filters&&(i.filters=e.filters);let r=c().get(e,"collections",[]);r=c().difference(r,["default"]);const s=(e=>(null==e?void 0:e.publicTags)||[])(e);s.forEach((e=>{h.includes(e)||h.push(e)}));let l={name:`${t}/${e.slug}/${e.id}`,title:e.name,categories:[t],slug:e.slug,collections:r,index:null==e?void 0:e.index,description:"Placeholder",screenshot:e.screenshot,fromFirebase:!0,isProPattern:null==e?void 0:e.isPro,isProOnFree:n,isGutentagPattern:!0,publicTags:s,internalTags:I(e),cloudPresetId:null==e?void 0:e.id,categoryCloudId:null==e?void 0:e.categoryId,fromColibri:!0,pairCloudPresetId:e.snippetPairId,content:o,...i};return l=(0,a.applyFilters)("kubio.firebasePatterns.beforeRegisterPattern",l),l}));let w=[];o.forEach((e=>{const t=e.slug,o=e.label;if(!m[t])return;let n={};const i=y[t];i&&(n={cloudId:null==i?void 0:i.id}),w.push({label:o,name:t,...n})})),w=(e=>{const t={label:(0,p.__)("Custom sections","kubio"),name:"kubio-content/custom"};return e.unshift(t),e})(w),((e,t)=>{const o=(0,b.composeBlockWithStyle)(k.SECTION,{},[]),n="kubio-content/blank",i={label:(0,p.__)("Blank","kubio"),name:n},r={name:`${n}/blank-section/9999`,slug:"blank-section",index:99999,title:(0,p.__)("Blank section","kubio"),categories:[n],description:(0,p.__)("Blank section","kubio"),screenshot:"https://content.colibriwp.com/screenshots/blank.png",fromColibri:!0,fromFirebase:!0,isProOnFree:!1,isGutentagPattern:!0,content:o,internalTags:[],publicTags:[]};e.push(r),t.push(i)})(S,w),W(w),H(S);const P=u.map((e=>{const t=(0,l.isString)(e.value)?JSON.parse(e.value):e.value;let o={...e,name:`${e.component}/${e.id}`,content:t,title:e.name,cloudPresetId:e.id};return o=(0,a.applyFilters)("kubio.firebasePatterns.beforeRegisterPreset",o),o}));Q(P);const B=n.filter((e=>!!e.is_public&&h.includes(e.slug)));X(B),J()}))};let D=null,F=null,V=null,L=null;const G="__experimentalBlockPatterns",K="__experimentalBlockPatternCategories",q="kubioBlockTags",x="kubioBlockPresets";let $=[],Y=[],z=[],U=[];const j=(e,t)=>{const o=(0,r.select)("core/blocks").getBlockType(e),n=(null==o?void 0:o.variationsFilter)||c().identity;if(o&&o.isPro)return;const s=(0,a.applyFilters)("kubio.register-variation",n(t),o),{addBlockVariations:l}=(0,r.dispatch)("core/blocks");l(e,(0,i.normalizeVariation)(s)),(0,a.doAction)("kubio.variation-added",e,s,((e,t)=>{l(e,(0,i.normalizeVariation)(t))}))},M=new Event("kubioVariationLoaded",{bubbles:!0}),J=()=>{(0,r.dispatch)(o.SESSION_STORE_KEY).setProp(o.GLOBAL_SESSION_ID,"variations-loaded",!0),document.body.dispatchEvent(M),setTimeout((()=>{(0,a.doAction)("kubio.blockPatterns.variationsRegistered")}),5e3)},H=e=>{Array.isArray(e)||(e=[e]),D?D(e):e.forEach((e=>{$.push(e)}))},Q=e=>{Array.isArray(e)||(e=[e]),L?L(e):e.forEach((e=>{U.push(e)}))},W=e=>{Array.isArray(e)||(e=[e]),F?F(e):e.forEach((e=>{Y.push(e)}))},X=e=>{Array.isArray(e)||(e=[e]),V?V(e):e.forEach((e=>{z.push(e)}))},Z=(e,t,o=null,n=[])=>{var i,r;if(!t)return t;if((0,l.isEmpty)(n)&&"imagesData"===o&&"kubio/image-gallery"===e)return t.map((({caption:e,alt:t,url:o})=>({caption:e,alt:t,url:o,id:0})));if((0,l.isEmpty)(n)&&"kubioAI"===o&&null!==(i=t)&&void 0!==i&&null!==(r=i.meta)&&void 0!==r&&r.initialValues&&delete t.meta.initialValues,(0,l.isEmpty)(n)&&"id"===o&&"kubio/image"===e)return 0;if((0,l.isString)(t))return"content"===o&&(t=t.replaceAll('<meta charset="utf-8"></meta>',"")),t;if((0,l.isArray)(t)){for(let i=0;i<t.length;i++)t[i]=Z(e,t[i],i,[...n,o].filter(Boolean));return t}if((0,l.isObject)(t)){for(const i in t)t[i]=Z(e,t[i],i,[...n,o].filter(Boolean));return t}return t},ee=e=>{const[t,o={},n=[]]=e,i=n.map(ee);return[t,Z(t,o),i]},te=()=>{const{updateSettings:e}=(0,r.dispatch)(o.STORE_KEY);D=(0,i.queueCall)((t=>{const n=(0,r.select)(o.STORE_KEY).getSettings(),i=n[G]||[],s=(0,l.flatten)((0,l.flatten)(t)).map((e=>({...e,content:ee(e.content)})));e({...n,[G]:c().uniqBy([...i,...s],"name")})}),500),F=(0,i.queueCall)(((t=[])=>{const n=(0,r.select)(o.STORE_KEY).getSettings(),i=n[K]||[],s=(0,l.flatten)((0,l.flatten)(t)),a=c().uniqBy([...s,...i],"name");e({...n,[K]:a})}),500),L=(0,i.queueCall)(((t=[])=>{const n=(0,r.select)(o.STORE_KEY).getSettings(),i=n[x]||[],s=(0,l.flatten)((0,l.flatten)(t));e({...n,[x]:c().uniqBy([...i,...s],"name")})}),500),V=(0,i.queueCall)(((t=[])=>{const n=(0,r.select)(o.STORE_KEY).getSettings(),i=n[q]||[],s=(0,l.flatten)((0,l.flatten)(t));e({...n,[q]:c().uniqBy([...i,...s],"slug")})}),500),D($),F(Y),V(z),L(U),$=[],Y=[],z=[],U=[],window.kubioPatternsRegistered=!0},oe=c().debounce(te,2e3),ne=()=>{const e=(0,r.subscribe)((()=>{const{getProp:t}=(0,r.select)(o.SESSION_STORE_KEY);t(o.GLOBAL_SESSION_ID,"ready",!1)&&(e(),oe())}))},ie=()=>{(0,s.useEffect)((()=>{R()}),[]);const[e]=(0,n.useGlobalSessionProp)("variations-loaded");(0,s.useEffect)((()=>{e&&te()}),[e])};var re;(0,a.addFilter)("kubio.firebasePatterns.beforeRegisterPattern","kubioMetadata",(e=>{const t=e.content,o=e.categories[0]||"",n=t[1]||[],i="kubioAI.meta";return c().get(n,i)||c().set(n,i,{}),c().set(n,`${i}.category`,o.split("/")[1]),c().set(n,`${i}.cloudPresetId`,e.cloudPresetId),c().unset(n,"kubio.props.aiData.category"),e})),null!==(re=window.kubioBlockPatterns)&&void 0!==re&&re.inGutenbergEditor&&R(!0);const se=(e="",t=!1)=>(e=e.replace(/\s\s+/,"-").replaceAll(" ","-"),t&&(e=e.replace(/[^a-z0-9\-]/gi,"")),e),ae=e=>{const t=((null==e?void 0:e.name)||"").split("/");return(0,l.get)(t,"2")},le=e=>{switch(e.toLowerCase()){case"hero-accent":e="Hero Accent";break;case"cta":e="Call to Action";break;case"f.a.q.":e="F.A.Q."}return(0,l.upperFirst)(e.replace(/-/gim," "))};(window.kubio=window.kubio||{}).blockPatterns=t})();
