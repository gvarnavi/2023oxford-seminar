(self.webpackChunk_2023pnm_seminar=self.webpackChunk_2023pnm_seminar||[]).push([[881],{1187:(e,t,a)=>{var n={"./arquero.js":9391,"./arrow.js":7938,"./dependencies.js":7363,"./dependency.js":170,"./dom/canvas.js":6342,"./dom/context2d.js":9733,"./dom/download.js":2938,"./dom/element.js":3380,"./dom/index.js":1820,"./dom/input.js":7585,"./dom/range.js":7170,"./dom/select.js":1106,"./dom/svg.js":5895,"./dom/text.js":281,"./dom/uid.js":1831,"./duckdb.js":3874,"./fileAttachment.js":3277,"./files/buffer.js":3825,"./files/index.js":6155,"./files/text.js":9974,"./files/url.js":2174,"./generators/disposable.js":2238,"./generators/filter.js":7254,"./generators/index.js":6785,"./generators/input.js":8044,"./generators/map.js":3921,"./generators/observe.js":1367,"./generators/queue.js":9042,"./generators/range.js":2707,"./generators/valueAt.js":5890,"./generators/worker.js":8179,"./html.js":6566,"./index.js":7138,"./leaflet.js":3861,"./library.js":4739,"./md.js":1715,"./mermaid.js":8843,"./mutable.js":221,"./now.js":3666,"./promises/delay.js":2984,"./promises/index.js":5898,"./promises/tick.js":2989,"./promises/when.js":7782,"./require.js":9204,"./resolve.js":5545,"./sqlite.js":4054,"./svg.js":4745,"./table.js":4199,"./template.js":9225,"./tex.js":667,"./that.js":5243,"./vegalite.js":423,"./width.js":282,"./xlsx.js":538};function r(e){return Promise.resolve().then((()=>{if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a(n[e])}))}r.keys=()=>Object.keys(n),r.id=1187,e.exports=r},3965:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n,r,i=a(7294);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}const o=e=>{let{title:t,titleId:a,...o}=e;return i.createElement("svg",s({fill:"currentColor",fontFamily:"system-ui, sans-serif",fontSize:10,textAnchor:"middle",width:800,height:200,viewBox:"0 0 800 200",id:"svg6160",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",background:"#fff",height:"intrinsic",maxWidth:"100%"},"aria-labelledby":a},o),t?i.createElement("title",{id:a},t):null,n||(n=i.createElement("style",{id:"style6154"})),r||(r=i.createElement("g",{"aria-label":"raster",id:"g6158",transform:"translate(0 -100.25)"},i.createElement("image",{transform:"matrix(1 0 0 -1 .5 400)",width:799,height:399.5,preserveAspectRatio:"none",xlinkHref:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABACAYAAADS1n9/AAAAAXNSR0IArs4c6QAADwBJREFUeF7tXWeLFUsQ7TXnnEVBjIg5gAp+0Q/+ZgX1g4iImFFMqCjmnPP6OO2e+86trQ4z1+W93b0Xlrsz06G66tQ51TOzOvD7zycMDAwEfnCMT5tzdozOoPILxuUcet3Op3apTezv2ckxvPE5l/bnHDq3rsHOq7YPDg7GdeAcf0p9cZ1jqo3sX7Jbx7d+1HVxPV6bLp/H6JtPCgCek7wAe+dqQVUCUCrAqQBaW3IA8QCfAyiDqc7WAKf6emssJVvOz6UE9nzfSQYPALVBHa/trMNHsx8G/g8AsCSUysSUdPQagFyGpNgxJZH2fMq2FIg8huqFeUu+cQHQqwTU6pilyxr9Li2oRs60jdXhEj3bvgRlSYLs9bb1iwIsx0S1LDUiALDaqIGuRXNJ13KZRSflmMULZKr+qLU5V/t0NFeK7ZKua58UUGsZJsk4lIBaxDTNQOvUVFVasyuw6LdOLTnJZp3XPneuRipsm1pWs+16AV0pRl07mzYAULCUsiwnByVDR/p6CTBWotraU5KHXN2QAoIGsQaYnuzFrWfTIjAVfEWwLeJKi1DjShlT2sY1AVwNANoGvaafxxY5JmwrizlbRgQAOUSXFpFCs8c0NoApNmoCihpdztFzrZR6UlgKfkryepGLxgCwDvJ0NVXx1mRFr23a0GHNthPj1ozdpa9DBV8v+l5jWy7hSv7sCQA1FPq3si9XYddkQKq4swGz9vJYMzsncaX2FgwctwQS73qN//8qAEr07bFDSdNLBpaupyjXs1WdrRmNOSZMmBCnagLYNgGw4OEY3vwW2Llisrbusv5sxAA1AChptY5hf/eKQa96LYEiVVR69qcoVmmVYLGgSUkdziOgOSmsYa1Sm9L1Gj81AkBK/2smqilwajIqp8Me+HIAUnZicFNZxid/BBEDzGIO5/XpoF4nmKw8oG8uiLUBrm3nxWkYAFKUys65rC0BwQtwE8otjd/0ugbEyoOVgxKz2areFmYabOsHL4BNgtqkbWMJsBmXOk4VaTmKtVlXWogNQg1j2CzXwDBjeY5tcV7PqQQQGGjz69evzvsAEydO7KJ9BlwZwmY85/HkwgNMyj+ej3XdFoxdEpm6EVTKTJ3Aot/ra/XTZljK4FwAczZqRnMuD7yW0SyNoy8CjR8GjGvBMX4QQA0iawCAAj/4KKjY1mMCtdEWhhZA6veU/3KSGYGht4Jt4WOPU0hTKvU0V4Of0ticVg+jLeeBijpT5/Oc2JUBQ28nUcMZKIIGgf/582cMIANrne2xCsZD8CdNmjSsIFTAqD9sItlr1ncEhAY5x9Bu/HIASFFOKsO9YqeGDdRoL+M9CrOLTmW8daKygVK+ZigzFoFn5jP4BArpn2DCdZUBMgmCbYHgZTnXqICtAYCXHMpqnjQr+w4MDg7+9qik1DF13dKtsgMzE87jh+dsdqWYQunX2uBV3lZqSNvWLrSj820b6v2PHz/C169fw5cvX8K3b9+G1QBTp04N06dPD9OmTQuTJ0/uAgTXp3PABrIBg5aqJQiQVKxs0FP+GyYVOQBYjbLO9ECghZWCgU71ritzWEdwDBsUS+NdqB7ah2s2YVzVcc1+BgJzIMjIfOo3ziHoHz9+DO/fvw+fPn3qSIKCl3Q8ZcqUMGPGjDBnzpwwe/bsCAZc49yQBIADtqms0H4yBubnmFyHgiDFzspIKTlQEGTvA1gAeMeKPNKjZrdWy6rN2kZ/JzvYyljH1qzRBXMuZpsFBYOgwcU5OhpZ/fnz5xgYBAnfOEbgAQBkPtojiBjDAoDFIuwDEwAAAAIAgTkALFzDMdiC/Zn1uivg+gkIfKvMKSi8RPTqCQuICKjS42CrtXYyGsUA2WPNOvQlA2hG22KGi2NfOsECyFbs6lA6nNmMoBEgHB/ZjjlYqSPTv3//HgOMz9u3b8OLFy8iA+AcxgcDABQAA34wBsCCgCOw/MEcmBsMsHjx4jB37twOE2AstIeN3EWQFVQq6EsCTsGuOwmPDTwAMCG6aoteAGDBoRU0fmf1TMPhbFIsCyzSGr9JkThmG804nOO4BJE6DY4BDTMAaIv++OH8/IYtpH+e4/wI7uPHj8Pr1687ev7q1atw79698OjRo3gerEAAzJo1KyxcuDCsXLkyrFmzJixYsCDOh/nnz58fVqxYEcHB9cNGghJrBSPwHMCAawwii0gGThlOQeHVB54MNAJATvdVEjQ78bsGmMegWGad0qeyBwKnWyfVat2PM3BaZyiI6EA6iPpOVoF9HAPfyHJSNGxEsMEAtB1guHnzZrhz507nPIHJsWErgr1u3bqwYcOGGHTaMW/evLBo0aKOtJA1yAIIMlkAQGAhyTVRtsiW/FYAWHYeVvA52+eiBHha7cmAAoBZSoDgmPSKvlrg0AEMLtqChnGeTkBAkJH4MDsoC+xPNkBb/OC69qe2w7nUb46B+TA+5sb3w4cPw5MnT+JcGOPBgwfh3LlzMfg4Xr58eQw0aBxjwXb0e/PmTXj69Glc69q1a8PevXvD6tWr444BNqHfqlWrIhNQBmAPfcfCkIyA8SlHWCcBp0yg8pmSAq9G6ACnJAElANB4BpvUz2KOVTScAgO5PdLMVemAs0itcAAcxOIMv4NqMQYzw9Iegvnhw4focAQL1Mr+6IfCjHLAvtRyHCPrr1y5EgGAubCOCxcuhLNnz8aA79q1K9I8PhiXLEKbwBRojzH37dsXdu7cGefDmgCAbdu2RfCgH/oADEwIFnpYAz6wHz+sUfR+AuOitYDKaY4ZFBDFXYDSiC0sGETd2lntZ3bBkdQ4LJ43UrRyZzax4qYcIJhoB2fNnDmzU0xZ9KM/2gEAyHj0h5MpO+iPoOKDc/gg6zEf7EFbZPHVq1fD8+fP4zwAwpkzZ+L5rVu3hs2bN8dxUQNgDn4ADug+1nb9+vU4BgK9f//+GHh8lixZEsdAO8wPewFIgFSTA9dYjGJc2IXrFgCsBWwSeHHy2CECJscArEIZ6BoAsPChriPz8QOncaFwuhYyrBfYB5nFmy2skrm/xjeRzlrBbjXRH9U6nMg1MNt0+4X+BAD6YBxU/Xfv3o0Bf/nyZbh48WK4ceNGDN7u3bvjtg5jYz0IJEAFIAAQ6A+AYtsIFgCINm7cGFkD+g9AQBowFotVjIc1cTtKSSC7kAW49dUdAROAzJFiAI2jlYNGNUAOAASJBpOaikBgYdxbU8tJm1g82rBOwDEcgEzGN4LGTKHjqO/UTfZntmMs7Y/AkE5ZH8Am7vXR/t27d+H+/fux+kff27dvhxMnTsTz27dvD+vXr4+AQdDBBJs2bYqMAgYBSJD5AAOChHrh8uXLcft36NCh2BdrQGGIXQLOwx7YBT/AfrIC7MMx5oKNrAW0DuBWVhNpWHAr/gilEQB0At0BUMNV/3EdC7LFF9rAQVg8kUtJQGbBmayqocc4hpPhMNYPlAJqI5yAudAW82E8OBD9MSbvzAFIZCI6Hk4m5SJjr127Fp49exb7IYDHjh2Lyz5w4EBYtmxZHBfBRFCRybyPgL4nT54Mt27dikHDGKdPn459jxw5Enbs2BHtWLp0adiyZUvsi3ZMDBbKaM8tLOzSYpEyoE8ZdTdgaT5F+101AG4Fe9SRCjbPEwD6XQsAVtes4MkeCCAyjzICGsYxMgfbKG6TcAxnEkD4Rh+0ReAIIPTHmAg2AMT7A8gonIMjyVj4RgWPoCOYANL58+fD0aNH47wHDx6M+3zMg2AePnw4ZibHB4McP348XLp0KQYN28hTp05FwAAAe/bs6QAA/QEmajqZkTIEv/C+BNpgrbCd2W53Axo/DwRWAvS4zwDjnQGabAP7NcA4qwH6u4BxvgtoA4D+fYAxdB+gVAiyeNPbwP07gWPoTmANADwQ9J8FjLFnAbrnT4FCWYBP0Pg8gMf9p4Gj8Gkgg5/aAXAPytu4BEj/fYAx8j5ADgD2GYG+oUNA9N8IGsVvBCn1Wwbgsd0p6KNdBQElwsqJHvOWMG+H6l0tZRg+GLH26ZNF3itXAPffCRz+L8BmXwu3DmbG24cOeqyPhrVA5Asb3nWVEQKKL0pyDPb36hF9ZM2xCBK1QdmIfWgPHyqNu7eC+38X8O+//EHWsGAjs4zJvwvo/2XQnzeVKV3KDOPiL4P6fxv4518uZ41haxg+mcR5fQPHyqGVFIw3qv420Op6au/Pdqq7tkD0+up9AvtIWR9natFmz9trORtZS6idXn+viOU5SoK+jezVNaw3OBeBMqr+OjhV2KWcbgsvr7861ysgCQp1XK7AzO0gUi8/5ACgBam+WKFyoLsdzm93N3xRgy9oErgcU9epdnIe7acJ5hW3nn/sbimXULZ//18IGfqHoZQxNNAeW+muRQNmAaqBUYDZ3ZUH3hSgSwDIJZDbt/Z9gFSG105Ys33ztp0pafIclAuAx0CWHSxjafDJFioPNsP1RhizWtlNgcW+uUDXgqC2Xc8ASFG6R0GpzLCam5KSmgDXgM8G2dpasl0139Yx1kaVS4/WawCuayoFtnS9yj9NGKAGADqpDXaNQU3b5LLWBtfSvAbE3jmssaNpQFWbFVj43ZvfBjiXFDlg59ZS/U5gSQJSaPSov8a5NW1sgZrr4wVLM1rp3IKYwVI6V3nwWESBaWsBlSMFpZ5PBV/X3AaA1kc9AcAz2MvIkQRBkxohBeKUDOC86nYN4LSNBUxN/2EBcv43NzLJfwKAFK1bLc8xgufwUn+vwLMO8Np4xV8Nu+QYL6e9KUnyAluyXyUjxWBWVpqurTED1ACgVo88ZkgVhVxY7rpmbI0j/kYG1cyTamMZIWW/rjmXPG1s6fpn4mqrylxxl6qM2xg30n1qAPA35CtXvFlg5yTAq00UNE3iR+ZoBYA2gSkVLzk2SNUaOVaoqZhztOrRb42Ge1ldI0MlCWzj8xrm6f+vYUN3AlOFYK8am6pLSgHN1Qc1mW5rkVRtMiIAyNFmTiJK+l9yWpvCLSUDtfJACi7RfGrduS1iar2pmsBKRA1QGheBbYJQ6pPLkppKuTR+6XoNtXOMXgBTEyAvCWoCWVpjEkxN7gS2nWSs9avd6o2GdY+IBNRScS7zUjKSkokSBecKRq8Sry1KFQylLar1S4lNajPf03uviPXG+wcQIwiCFjBqKwAAAABJRU5ErkJggg==",id:"image6156"}))))}},5162:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),i=a(6010),s=a(2466),o=a(6550),l=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function A(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,c]=p({queryString:a,groupId:n}),[d,A]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=l??d;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),A(e)}),[c,A,i]),tabValues:i}}var g=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(d(t),l(n))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:m},s,{className:(0,i.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=A(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(h,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(_,(0,n.Z)({key:String(t)},e))}},868:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>ue,contentTitle:()=>le,default:()=>pe,frontMatter:()=>oe,metadata:()=>ce,toc:()=>de});var n=a(7462),r=a(7294),i=a(3905),s=a(4866),o=a(5162);const l=a.p+"assets/images/NiO_sphere_animation_one-panel_compressed-f73c5fd4eecc2ad04d08d387fdcff10c.gif",c=a.p+"assets/images/NiO_sphere_animation_two-panels_compressed-b5a5e7dad872b25c652fbf088f2752f7.gif",u=a.p+"assets/images/NiO_sphere_animation_three-panels_compressed-6caee1e1165d9db6177f225ca0c4bddb.gif";var d=a(7940);function m(e){return e`# Interactive visualization of 2D slices in X-, Y-, and Z-plane for multiple synced volumes`}function f(e){return e`Drag the cursor in each view to explore the slices.`}function p(e,t,a,n,r,i,s,o,l,c,u,d,m){return e`<table style="width:100%"> 
      <tr style="border:none; background: none">
        <td style="border:none">${t}</td>
        <td style="border:none">${a}</td>
        <td style="border:none">${n}</td>
        <td style="border:none">${r}</td>
      </tr>
      <tr style="border:none; background: none">
        <td style="border:none">${i}</td>
        <td style="border:none">${s}</td>
        <td style="border:none">${o}</td>
        <td style="border:none">${l}</td>
      </tr>
      <tr style="border:none; background: none">
        <td style="border:none">${c}</td>
        <td style="border:none">${u}</td>
        <td style="border:none">${d}</td>
        <td style="border:none">${m}</td>
      </tr>
    </table>`}function A(){return[192,192,192]}async function g(e){let t=await e("NiO-sphere_OT_reconstruction_110_Ax@2.npy").arrayBuffer();return new Float32Array(t)}async function v(e){let t=await e("NiO-sphere_OT_reconstruction_110_Ay@6.npy").arrayBuffer();return new Float32Array(t)}async function b(e){let t=await e("NiO-sphere_OT_reconstruction_110_Az@3.npy").arrayBuffer();return new Float32Array(t)}async function h(e){let t=await e("NiO-sphere_OT_reconstruction_110_V@1.npy").arrayBuffer();return new Float32Array(t)}function _(){return[1,1,1]}function y(e){return e.map((e=>Math.floor(e/2)))}function w(e,t){return function(a,n,r,i){return{invert:i,cf:r,name:n,width:e[0],height:e[1],slice:{index:t[2],max:e[2]},getPosition(a,n){return[Math.floor(e[0]*a/this.width),Math.floor(e[1]*n/this.height),t[2]]},sampler:(n,r)=>a[e[0]*e[1]*t[2]+e[0]*r+n],getX(){return this.width*t[0]/e[0]},getY(){return this.height*t[1]/e[1]}}}}function x(e,t,a){return function(n,r,i,s){return{invert:s,cf:i,name:r,width:e[2]/t[2],height:e[1],slice:{index:a[0],max:e[0]},getPosition(n,r){return[a[0],Math.floor(e[2]/t[2]*r/this.width),Math.floor(e[1]*t[2]*n/this.height)]},sampler:(r,i)=>n[e[0]*e[1]*Math.floor(r*t[2])+e[0]*i+a[0]],getX(){return this.width*a[2]/e[2]},getY(){return this.height*a[1]/e[1]}}}}function Y(e,t,a){return function(n,r,i,s){return{invert:s,cf:i,name:r,width:e[0],height:e[2]/t[2],slice:{index:a[1],max:e[1]},getPosition(t,n){return[Math.floor(e[0]*t/this.width),a[1],Math.floor(e[2]*n/this.height)]},sampler:(r,i)=>n[e[0]*e[1]*Math.floor(i*t[2])+e[0]*a[1]+r],getX(){return this.width*a[0]/e[0]},getY(){return this.height*a[2]/e[2]}}}}function Z(e,t,a){return e(t,"Electrostatic Potential, V(XY)",a,!0)}function j(e,t,a){return e(t,"Magnetic Potential, Az(XY)",a)}function X(e,t,a){return e(t,"Magnetic Potential, Ay(XY)",a)}function B(e,t,a){return e(t,"Magnetic Potential, Ax(XY)",a)}function N(e,t,a){return e(t,"Electrostatic Potential, V(YZ)",a,!0)}function V(e,t,a){return e(t,"Magnetic Potential, Az(YZ)",a)}function C(e,t,a){return e(t,"Magnetic Potential, Ay(YZ)",a)}function O(e,t,a){return e(t,"Magnetic Potential, Ax(YZ)",a)}function I(e,t,a){return e(t,"Electrostatic Potential, V(XZ)",a,!0)}function z(e,t,a){return e(t,"Magnetic Potential, Az(XZ)",a)}function M(e,t,a){return e(t,"Magnetic Potential, Ay(XZ)",a)}function E(e,t,a){return e(t,"Magnetic Potential, Ax(XZ)",a)}function k(e,t){return e(t)}function P(e,t){return e(t)}function T(e,t){return e(t)}function D(e,t){return e(t)}function S(e,t){return e(t)}function F(e,t){return e(t)}function q(e,t){return e(t)}function G(e,t){return e(t)}function L(e,t){return e(t)}function Q(e,t){return e(t)}function U(e,t){return e(t)}function K(e,t){return e(t)}function H(e,t,a,n,r){return async function*(i){const s=e.context2d(i.width,i.height);s.canvas.onmousemove=e=>{e.buttons&&(t.value=i.getPosition(e.offsetX,e.offsetY))};let o=await a(s,i.width,i.height,i.sampler,i.cf);s.drawImage(o,0,0,i.width,i.height),n(s,i.getX(),i.getY(),i.invert),r(s,i.name,i.invert),yield s.canvas}}function W(){return function(e,t,a){e.font="12px sans-serif",e.fillStyle=a?"white":"black",e.fillText(t,5,20)}}function R(){return function(e,t,a,n,r=10){e.strokeStyle=n?"white":"black",e.beginPath(),e.moveTo(t-r,a),e.lineTo(t+r,a),e.moveTo(t,a-r),e.lineTo(t,a+r),e.stroke()}}function J(e){return async function(t,a,n,r,i){let s=t.createImageData(a,n);for(let e=0;e<n;e++)for(let t=0;t<a;t++){let a=r(t,e),n=4*(s.width*e+t),o=i(a);s.data[n]=o.r,s.data[n+1]=o.g,s.data[n+2]=o.b,s.data[n+3]=255}return e(s)}}function $(e){return function(t){return e.rgb(e.interpolatePuOr(e.scaleLinear([-.001,.001],[0,1])(t)))}}function ee(e){return function(t){return e.rgb(e.interpolateMagma(e.scaleLinear([0,.025],[0,1])(t)))}}function te(e,t){const n=e.module();function r(){return this.url}const i=new Map([["NiO-sphere_OT_reconstruction_110_V@1.npy",{url:new URL(a(9408),a.b),mimeType:"application/octet-stream",toString:r}],["NiO-sphere_OT_reconstruction_110_Ax@2.npy",{url:new URL(a(350),a.b),mimeType:"application/octet-stream",toString:r}],["NiO-sphere_OT_reconstruction_110_Ay@6.npy",{url:new URL(a(191),a.b),mimeType:"application/octet-stream",toString:r}],["NiO-sphere_OT_reconstruction_110_Az@3.npy",{url:new URL(a(2191),a.b),mimeType:"application/octet-stream",toString:r}]]);return n.builtin("FileAttachment",e.fileAttachments((e=>i.get(e)))),n.variable(t()).define(["md"],m),n.variable(t()).define(["md"],f),n.variable(t("sliceViewer")).define("sliceViewer",["html","canvasXY_V","canvasXY_Ax","canvasXY_Ay","canvasXY_Az","canvasYZ_V","canvasYZ_Ax","canvasYZ_Ay","canvasYZ_Az","canvasXZ_V","canvasXZ_Ax","canvasXZ_Ay","canvasXZ_Az"],p),n.variable(t("dimensions")).define("dimensions",A),n.variable(t("data_Ax")).define("data_Ax",["FileAttachment"],g),n.variable(t("data_Ay")).define("data_Ay",["FileAttachment"],v),n.variable(t("data_Az")).define("data_Az",["FileAttachment"],b),n.variable(t("data_V")).define("data_V",["FileAttachment"],h),n.variable(t("dataAspect")).define("dataAspect",_),n.define("initial position",["dimensions"],y),n.variable(t("mutable position")).define("mutable position",["Mutable","initial position"],((e,t)=>new e(t))),n.variable(t("position")).define("position",["mutable position"],(e=>e.generator)),n.variable(t("return_XY_params")).define("return_XY_params",["dimensions","position"],w),n.variable(t("return_YZ_params")).define("return_YZ_params",["dimensions","dataAspect","position"],x),n.variable(t("return_XZ_params")).define("return_XZ_params",["dimensions","dataAspect","position"],Y),n.variable(t("paramsXY_V")).define("paramsXY_V",["return_XY_params","data_V","cf_e"],Z),n.variable(t("paramsXY_Az")).define("paramsXY_Az",["return_XY_params","data_Az","cf_m"],j),n.variable(t("paramsXY_Ay")).define("paramsXY_Ay",["return_XY_params","data_Ay","cf_m"],X),n.variable(t("paramsXY_Ax")).define("paramsXY_Ax",["return_XY_params","data_Ax","cf_m"],B),n.variable(t("paramsYZ_V")).define("paramsYZ_V",["return_YZ_params","data_V","cf_e"],N),n.variable(t("paramsYZ_Az")).define("paramsYZ_Az",["return_YZ_params","data_Az","cf_m"],V),n.variable(t("paramsYZ_Ay")).define("paramsYZ_Ay",["return_YZ_params","data_Ay","cf_m"],C),n.variable(t("paramsYZ_Ax")).define("paramsYZ_Ax",["return_YZ_params","data_Ax","cf_m"],O),n.variable(t("paramsXZ_V")).define("paramsXZ_V",["return_XZ_params","data_V","cf_e"],I),n.variable(t("paramsXZ_Az")).define("paramsXZ_Az",["return_XZ_params","data_Az","cf_m"],z),n.variable(t("paramsXZ_Ay")).define("paramsXZ_Ay",["return_XZ_params","data_Ay","cf_m"],M),n.variable(t("paramsXZ_Ax")).define("paramsXZ_Ax",["return_XZ_params","data_Ax","cf_m"],E),n.variable(t("canvasXY_Ax")).define("canvasXY_Ax",["getCanvas","paramsXY_Ax"],k),n.variable(t("canvasYZ_Ax")).define("canvasYZ_Ax",["getCanvas","paramsYZ_Ax"],P),n.variable(t("canvasXZ_Ax")).define("canvasXZ_Ax",["getCanvas","paramsXZ_Ax"],T),n.variable(t("canvasXY_Ay")).define("canvasXY_Ay",["getCanvas","paramsXY_Ay"],D),n.variable(t("canvasYZ_Ay")).define("canvasYZ_Ay",["getCanvas","paramsYZ_Ay"],S),n.variable(t("canvasXZ_Ay")).define("canvasXZ_Ay",["getCanvas","paramsXZ_Ay"],F),n.variable(t("canvasXY_Az")).define("canvasXY_Az",["getCanvas","paramsXY_Az"],q),n.variable(t("canvasYZ_Az")).define("canvasYZ_Az",["getCanvas","paramsYZ_Az"],G),n.variable(t("canvasXZ_Az")).define("canvasXZ_Az",["getCanvas","paramsXZ_Az"],L),n.variable(t("canvasXY_V")).define("canvasXY_V",["getCanvas","paramsXY_V"],Q),n.variable(t("canvasYZ_V")).define("canvasYZ_V",["getCanvas","paramsYZ_V"],U),n.variable(t("canvasXZ_V")).define("canvasXZ_V",["getCanvas","paramsXZ_V"],K),n.variable(t("getCanvas")).define("getCanvas",["DOM","mutable position","getImage","drawCross","drawInfo"],H),n.variable(t("drawInfo")).define("drawInfo",W),n.variable(t("drawCross")).define("drawCross",R),n.variable(t("getImage")).define("getImage",["createImageBitmap"],J),n.variable(t("cf_m")).define("cf_m",["d3"],$),n.variable(t("cf_e")).define("cf_e",["d3"],ee),n}function ae(e){return e}function ne(e){return e.html`<hr class="hideable-md">`}function re(e,t){const a=e.module();a.variable(t()).define(["sliceViewer"],ae),a.variable(t()).define(["htl"],ne);const n=e.module(te);return a.import("sliceViewer",n),a}const ie=function(){const e=(0,r.useRef)();return(0,r.useEffect)((()=>{const t=new d.r_;return t.module(re,d.lj.into(e.current)),()=>t.dispose()}),[]),r.createElement(r.Fragment,null,r.createElement("div",{ref:e}))};var se=a(3965);const oe={id:"magnetic-vector-potential_sphere",sidebar_position:3,title:"Nanoparticle Antiferromagnets",hide_table_of_contents:!0,hide_title:!0},le=void 0,ce={unversionedId:"magnetic-vector-potential/magnetic-vector-potential_sphere",id:"magnetic-vector-potential/magnetic-vector-potential_sphere",title:"Nanoparticle Antiferromagnets",description:"NiO Sphere Magnetic Vector Potential",source:"@site/slides/magnetic-vector-potential/magnetic-vector-potential_sphere.mdx",sourceDirName:"magnetic-vector-potential",slug:"/magnetic-vector-potential/magnetic-vector-potential_sphere",permalink:"/2023oxford-seminar/slides/magnetic-vector-potential/magnetic-vector-potential_sphere",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"magnetic-vector-potential_sphere",sidebar_position:3,title:"Nanoparticle Antiferromagnets",hide_table_of_contents:!0,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Bulk Antiferromagnets",permalink:"/2023oxford-seminar/slides/magnetic-vector-potential/magnetic-vector-potential_bulk"},next:{title:"SPA workflow",permalink:"/2023oxford-seminar/slides/single-particle-analysis/single-particle-analysis_workflow"}},ue={},de=[{value:"NiO Sphere Magnetic Vector Potential",id:"nio-sphere-magnetic-vector-potential",level:2}],me={toc:de},fe="wrapper";function pe(e){let{components:t,...a}=e;return(0,i.kt)(fe,(0,n.Z)({},me,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(se.Z,{width:"240px",height:"60px",className:"outline-header",mdxType:"OutlineImageLight"}),(0,i.kt)("h2",{id:"nio-sphere-magnetic-vector-potential"},"NiO Sphere Magnetic Vector Potential"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider an antiferromagnetic NiO sphere, ~6,500 atoms",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Two")," orthogonal tilt-series, twelve degree increments"))),(0,i.kt)("li",{parentName:"ul"},"Need to enforce magnetic vector potential is divergence-free")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"electrostatic-animation",label:"Electrostatic Potential",default:!0,mdxType:"TabItem"},(0,i.kt)("img",{src:l,width:"300px",height:"300px"})),(0,i.kt)(o.Z,{value:"magnetic-animation",label:"Az Magnetic Potential",default:!0,mdxType:"TabItem"},(0,i.kt)("img",{src:c,width:"600px",height:"300px"})),(0,i.kt)(o.Z,{value:"both-animation",label:"Combined View",default:!0,mdxType:"TabItem"},(0,i.kt)("img",{src:u,width:"900px",height:"300px"})),(0,i.kt)(o.Z,{value:"magnetic-potential-slices",label:"Interactive Slices Explorer",default:!0,mdxType:"TabItem"},(0,i.kt)(ie,{mdxType:"MagneticVectorPotentialReconstructionWidget"}))))}pe.isMDXComponent=!0},9408:(e,t,a)=>{"use strict";e.exports=a.p+"f866ae2fbd60be7d.bin"},350:(e,t,a)=>{"use strict";e.exports=a.p+"07b097a33f570fda.bin"},2191:(e,t,a)=>{"use strict";e.exports=a.p+"5d72374ab39ae18d.bin"},191:(e,t,a)=>{"use strict";e.exports=a.p+"4046fc3d506df181.bin"}}]);