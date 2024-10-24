import{_ as t,r as o,o as i,c as l,b as s,d as a,e as p,f as c}from"./app.a9cb9a51.js";const u={},r={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"};function d(v,n){const e=o("ExternalLinkIcon");return i(),l("div",null,[n[6]||(n[6]=s("h1",{id:"iconfont",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#iconfont","aria-hidden":"true"},"#"),a(" iconfont")],-1)),s("ul",null,[n[4]||(n[4]=s("li",null,[s("p",null,"\u5B9E\u73B0\uFF1A"),s("ul",null,[s("li",null,"Android\uFF1ATextView"),s("li",null,"iOS\uFF1AUILabel")])],-1)),s("li",null,[n[3]||(n[3]=s("p",null,"\u8BE6\u60C5\uFF1A",-1)),s("ul",null,[s("li",null,[n[1]||(n[1]=a("\u4E00\u4E2A\u6587\u5B57\u56FE\u7247\u5BB9\u5668\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u56FE\u7247\uFF0C\u4F8B\u5982\uFF1A")),s("a",r,[n[0]||(n[0]=a("iconfont.cn")),p(e)]),n[2]||(n[2]=a("\u7F51\u7AD9\u4E0B\u7684\u8D44\u6E90\u3002"))])])]),n[5]||(n[5]=c(`<li><p>\u65E0\u969C\u788D\uFF1A</p><ul><li>accessibilityEnable\uFF1A <ul><li>\u53D6\u503C\uFF1A<code>true</code>/<code>false</code></li><li>\u63CF\u8FF0\uFF1A\u5426\u652F\u6301\u65E0\u969C\u788D</li></ul></li><li>accessibilityTraits\uFF1A <ul><li>\u53D6\u503C\uFF1A<code>&#39;button&#39;</code>/<code>&#39;image&#39;</code>/<code>&#39;text&#39;</code>/<code>&#39;none&#39;/&#39;header&#39;</code></li><li>\u63CF\u8FF0\uFF1A\u65E0\u969C\u788D\u63A7\u4EF6\u5C5E\u6027</li></ul></li><li>accessibilityDesc\uFF1A <ul><li>\u53D6\u503C\uFF1Astring</li><li>\u63CF\u8FF0\uFF1A\u65E0\u969C\u788D\u5185\u5BB9</li></ul></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u65E0\u969C\u788D</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;viewId&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// \u65E0\u969C\u788D\u6717\u8BFB\u6587\u6848</span>
        <span class="token property">&quot;accessibilityDesc&quot;</span><span class="token operator">:</span><span class="token string">&quot;&#39;\u65E0\u969C\u788D\u6587\u6848&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u662F\u5426\u53EF\u4EE5\u6717\u8BFB</span>
        <span class="token comment">// \u4F18\u5148\u7EA7\u9AD8\u4E8EaccessibilityDesc\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue</span>
        <span class="token property">&quot;accessibilityEnable&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>/<span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u65E0\u969C\u788D\u63A7\u4EF6\u5C5E\u6027</span>
        <span class="token property">&quot;accessibilityTraits&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;button&#39;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u57FA\u7840\u7528\u6CD5\uFF1A</p><ul><li>\u4F7F\u7528\u524D\u7F6E\u6761\u4EF6 <ul><li>Android\u7AEF\uFF0C\u5728\u9879\u76EE\u5DE5\u7A0B\u4E2D\u5B9E\u73B0iconfont\u5B57\u4F53\u7684\u52A0\u8F7D\u903B\u8F91\u3002</li></ul><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>GXRegisterCenter<span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">registerExtensionFontFamily</span><span class="token punctuation">(</span><span class="token keyword">object</span> <span class="token operator">:</span>
    GXRegisterCenter<span class="token punctuation">.</span><span class="token function">GXIExtensionFontFamily</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">fontFamily</span><span class="token punctuation">(</span>fontFamilyName<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> Typeface<span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5B9E\u73B0IconFont\u7684\u52A0\u8F7D\u903B\u8F91</span>
        <span class="token keyword">return</span> Typeface<span class="token punctuation">.</span><span class="token function">createFromAsset</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">fontFamilyName</span></span><span class="token string">.ttf&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>iOS\u7AEF\uFF0C\u5728\u9879\u76EE\u5DE5\u7A0B\u4E2D\u5B9E\u73B0iconfont\u5B57\u4F53\u7684\u52A0\u8F7D\u903B\u8F91\u3002</li></ul><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token number">1.</span> \u521B\u5EFA\u7C7B\uFF0C\u5B9E\u73B0GXBizServiceProtocol\u4E2D\u7684\u534F\u8BAE
<span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>loadIconFont<span class="token punctuation">{</span>
    <span class="token comment">//\u52A0\u8F7Diconfont\uFF0C\u786E\u8BA4\u53EA\u8C03\u7528\u4E00\u6B21</span>
<span class="token punctuation">}</span>

<span class="token number">2.</span> \u6CE8\u518C\u5230GaiaX\u4E2D
<span class="token punctuation">[</span><span class="token punctuation">[</span>GXRegisterCenter defaultCenter<span class="token punctuation">]</span> registerBizServiceImpl<span class="token punctuation">:</span>xxx<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u4F7F\u7528</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont_normal&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
#iconfont</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>15px<span class="token punctuation">;</span>
  ......
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u4E8B\u4EF6</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;iconfont&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;iconfont&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$data.iconfont&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2))])])}const m=t(u,[["render",d],["__file","iconfont.html.vue"]]);export{m as default};
