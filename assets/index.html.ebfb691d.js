import{_ as p,r as i,o as u,c as r,a as c,b as n,d as s,e as t,w as e}from"./app.a9cb9a51.js";const m={};function k(d,a){const o=i("CodeGroupItem"),l=i("CodeGroup");return u(),r("div",null,[c(` 
--- 
<div style="display:flex">
<img src='https://img0.baidu.com/it/u=3392411519,3391281673&fm=253&fmt=auto&app=138&f=JPEG?w=833&h=500' 
style='width:10rem;height:10rem;'/>

<img src='https://img0.baidu.com/it/u=3392411519,3391281673&fm=253&fmt=auto&app=138&f=JPEG?w=833&h=500' 
style='width:10rem;height:10rem;'/>

<img src='https://img0.baidu.com/it/u=3392411519,3391281673&fm=253&fmt=auto&app=138&f=JPEG?w=833&h=500' 
style='width:10rem;height:10rem;'/>
</div> 

`),a[2]||(a[2]=n("h3",{id:"\u7B80\u5355\u3001\u8DE8\u7AEF\u3001\u9AD8\u6027\u80FD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B80\u5355\u3001\u8DE8\u7AEF\u3001\u9AD8\u6027\u80FD","aria-hidden":"true"},"#"),s(" \u7B80\u5355\u3001\u8DE8\u7AEF\u3001\u9AD8\u6027\u80FD\uFF01")],-1)),t(l,null,{default:e(()=>[t(o,{title:"Android",active:""},{default:e(()=>a[0]||(a[0]=[n("div",{class:"language-kotlin ext-kt line-numbers-mode"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token comment"},"// Initialization - Initializes the SDK"),s(`
GXTemplateEngine`),n("span",{class:"token punctuation"},"."),s("instance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),s("activity"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Template information"),s(`
`),n("span",{class:"token keyword"},"val"),s(" item "),n("span",{class:"token operator"},"="),s(" GXTemplateEngine"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GXTemplateItem"),n("span",{class:"token punctuation"},"("),s("activity"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"templateBiz"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"templateId"')]),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"val"),s(" size "),n("span",{class:"token operator"},"="),s(" GXTemplateEngine"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GXMeasureSize"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100F"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"dpToPx"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Template data"),s(`
`),n("span",{class:"token keyword"},"val"),s(" dataJson "),n("span",{class:"token operator"},"="),s(" AssetsUtils"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"parseAssets"),n("span",{class:"token punctuation"},"("),s("activity"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"template-data.json"')]),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"val"),s(),n("span",{class:"token keyword"},"data"),s(),n("span",{class:"token operator"},"="),s(" GXTemplateEngine"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"GXTemplateData"),n("span",{class:"token punctuation"},"("),s("dataJson"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Create template View"),s(`
`),n("span",{class:"token keyword"},"val"),s(" view "),n("span",{class:"token operator"},"="),s(" GXTemplateEngine"),n("span",{class:"token punctuation"},"."),s("instance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createView"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},","),s(" size"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Bind the view data"),s(`
GXTemplateEngine`),n("span",{class:"token punctuation"},"."),s("instance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"bindData"),n("span",{class:"token punctuation"},"("),s("view"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"data"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// Insert the template into the container for rendering"),s(`
findViewById`),n("span",{class:"token operator"},"<"),s("ViewGroup"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("R"),n("span",{class:"token punctuation"},"."),s("id"),n("span",{class:"token punctuation"},"."),s("template_container"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addView"),n("span",{class:"token punctuation"},"("),s("view"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1}),t(o,{title:"iOS"},{default:e(()=>a[1]||(a[1]=[n("div",{class:"language-objc ext-objc line-numbers-mode"},[n("pre",{class:"language-objc"},[n("code",null,[n("span",{class:"token comment"},"// register template service"),s(`
`),n("span",{class:"token punctuation"},"["),s("TheGXRegisterCenter registerTemplateServiceWithBizId"),n("span",{class:"token punctuation"},":"),s("bizId templateBundle"),n("span",{class:"token punctuation"},":"),n("span",{class:"token string"},'@"xxx.bundle"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Build template parameters - Template information"),s(`
GXTemplateItem `),n("span",{class:"token operator"},"*"),s("item "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s("GXTemplateItem alloc"),n("span",{class:"token punctuation"},"]"),s(" init"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
item`),n("span",{class:"token punctuation"},"."),s("templateId "),n("span",{class:"token operator"},"="),s(" templateId"),n("span",{class:"token punctuation"},";"),s(`
item`),n("span",{class:"token punctuation"},"."),s("bizId "),n("span",{class:"token operator"},"="),s(" templateBiz"),n("span",{class:"token punctuation"},";"),s(`

CGSize size `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"CGSizeMake"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1080"),n("span",{class:"token punctuation"},","),s(" NAN"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Template data"),s(`
GXTemplateData `),n("span",{class:"token operator"},"*"),s("data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),s("GXTemplateData alloc"),n("span",{class:"token punctuation"},"]"),s(" init"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
data`),n("span",{class:"token punctuation"},"."),s("data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"@"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'@"xxx"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'@"xxx"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Creates a native View based on template parameters"),s(`
UIView `),n("span",{class:"token operator"},"*"),s("view "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("TheGXTemplateEngine creatViewByTemplateItem"),n("span",{class:"token punctuation"},":"),s("item measureSize"),n("span",{class:"token punctuation"},":"),s("size"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Bind the view data"),s(`
`),n("span",{class:"token punctuation"},"["),s("TheGXTemplateEngine bindData"),n("span",{class:"token punctuation"},":"),s("data onView"),n("span",{class:"token punctuation"},":"),s("view"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Insert the template into the container for rendering"),s(`
`),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"self"),n("span",{class:"token punctuation"},"."),s("view addSubview"),n("span",{class:"token punctuation"},":"),s("view"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),_:1})]),_:1}),c(` ### \u70ED\u66F4\u65B0

![](https://gw.alicdn.com/imgextra/i3/O1CN01SQ3V8c1z6cZUPx1gb_!!6000000006665-1-tps-1287-872.gif)

### \u53EF\u89C6\u5316\u642D\u5EFA
![](https://gw.alicdn.com/imgextra/i4/O1CN01i9o3Bi1MTjXmupyEQ_!!6000000001436-49-tps-1287-872.webp)
 `)])}const b=p(m,[["render",k],["__file","index.html.vue"]]);export{b as default};
