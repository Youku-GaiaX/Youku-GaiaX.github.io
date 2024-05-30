import{_ as n,o as s,c as a,f as t}from"./app.151a5cdc.js";const e={},p=t(`<h1 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h1><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li>Android\uFF1ARecyclerView</li><li>iOS\uFF1AUICollectionView</li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><ul><li>\u4E00\u4E2A\u591A\u5217\u6A2A\u6ED1\u5BB9\u5668\u6216\u8005\u7AD6\u6ED1\u5BB9\u5668\uFF0C\u53EF\u627F\u8F7D\u5355\u7C7B\u578B\u5B50\u6A21\u677F\u3002\u5177\u5907\u884C\u6570\u3001\u5217\u6570\u3001\u8FB9\u8DDD\u3001\u95F4\u8DDD\u7B49\u5C5E\u6027\u3002</li></ul></li><li><p>\u5C5E\u6027\u503C\uFF1A</p><ul><li>edge-insets: \u5185\u8FB9\u8DDD <ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>{0,0,0,0}</code></li></ul></li><li>item-spacing: \u5751\u4F4D\u95F4\u8DDD <ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul></li><li>row-spacing: \u4E0E\u5751\u4F4D\u95F4\u8DDD\u5782\u76F4\u7684\u95F4\u8DDD\uFF08\u4E0A\u4E0B\uFF09 <ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul></li><li>direction: \u5BB9\u5668\u65B9\u5411 <ul><li>\u53EF\u53D6\u503C\uFF1A<code>horizontal</code> <code>vertical</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>vertical</code></li></ul></li></ul></li><li><p>\u57FA\u7840\u7528\u6CD5\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;edge-insets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{0,18,0,18}&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gx-content-uper-grid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;item-spacing&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token property">&quot;row-spacing&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token property">&quot;column&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sub-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;grid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia-template&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;layers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia-template&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gx-content-uper-grid-item&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sub-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
#gx-content-uper-grid</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\u7ED1\u5B9A\uFF1A</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;gx-content-uper-grid&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$nodes&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// Mock\u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://t7.baidu.com/it/u=376303577,3502948048&amp;fm=193&amp;f=GIF&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;subtitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u526F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://t7.baidu.com/it/u=376303577,3502948048&amp;fm=193&amp;f=GIF&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;subtitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u526F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","grid.html.vue"]]);export{r as default};
