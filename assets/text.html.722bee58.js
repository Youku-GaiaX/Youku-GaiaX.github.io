import{_ as s,o as a,c as t,f as e}from"./app.a9cb9a51.js";const p={};function o(i,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h1 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h1><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li>Android\uFF1ATextView</li><li>iOS\uFF1AUILabel</li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><ul><li>\u4E00\u4E2A\u6587\u5B57\u5BB9\u5668\uFF0C\u53EF\u4EE5\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u5185\u5BB9\uFF0C\u652F\u6301\u5BBD\u9AD8\u81EA\u9002\u5E94\u3001\u7EAF\u8272\u989C\u8272\u3001\u6E10\u53D8\u989C\u8272\u3001\u6587\u5B57\u5927\u5C0F\u3001\u5C45\u4E2D\u5BF9\u9F50\u7B49\u3002</li></ul></li><li><p>\u65E0\u969C\u788D\uFF1A</p><ul><li>accessibilityEnable\uFF1A <ul><li>\u53D6\u503C\uFF1A<code>true</code>/<code>false</code></li><li>\u63CF\u8FF0\uFF1A\u5426\u652F\u6301\u65E0\u969C\u788D</li></ul></li><li>accessibilityTraits\uFF1A <ul><li>\u53D6\u503C\uFF1A<code>&#39;button&#39;</code>/<code>&#39;image&#39;</code>/<code>&#39;text&#39;</code>/<code>&#39;none&#39;/&#39;header&#39;</code></li><li>\u63CF\u8FF0\uFF1A\u65E0\u969C\u788D\u63A7\u4EF6\u5C5E\u6027</li></ul></li><li>accessibilityDesc\uFF1A <ul><li>\u53D6\u503C\uFF1Astring</li><li>\u63CF\u8FF0\uFF1A\u65E0\u969C\u788D\u5185\u5BB9</li></ul></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u65E0\u969C\u788D</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;viewId&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// \u65E0\u969C\u788D\u6717\u8BFB\u6587\u6848</span>
        <span class="token property">&quot;accessibilityDesc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;\u65E0\u969C\u788D\u6587\u6848&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u662F\u5426\u53EF\u4EE5\u6717\u8BFB</span>
        <span class="token comment">// \u4F18\u5148\u7EA7\u9AD8\u4E8EaccessibilityDesc\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue</span>
        <span class="token property">&quot;accessibilityEnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>/<span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u65E0\u969C\u788D\u63A7\u4EF6\u5C5E\u6027</span>
        <span class="token property">&quot;accessibilityTraits&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;button&#39;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u57FA\u7840\u7528\u6CD5\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text_normal&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
#text_normal</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u4E8B\u4EF6\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;text_normal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;text_normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$data.text&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4EC5Android:</p><ul><li>includeFontPadding</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;text_normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$data.text&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;includeFontPadding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6587\u5B57\u6E10\u53D8\u8272\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>  <span class="token selector">#nodeId</span> <span class="token punctuation">{</span>
  ...
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> #000000 0%<span class="token punctuation">,</span> #ffffff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> #000000 0%<span class="token punctuation">,</span> #ffffff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to left<span class="token punctuation">,</span> #000000 0%<span class="token punctuation">,</span> #ffffff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to top<span class="token punctuation">,</span> #000000 0%<span class="token punctuation">,</span> #ffffff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom right<span class="token punctuation">,</span> #000000 0%<span class="token punctuation">,</span> #ffffff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom left<span class="token punctuation">,</span> #000000 0%<span class="token punctuation">,</span> #ffffff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to top right<span class="token punctuation">,</span> #000000 0%<span class="token punctuation">,</span> #ffffff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to top left<span class="token punctuation">,</span> #000000 0%<span class="token punctuation">,</span> #ffffff 100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2)]))}const c=s(p,[["render",o],["__file","text.html.vue"]]);export{c as default};
