import{_ as n,o as s,c as a,f as t}from"./app.7366de5e.js";const e={},p=t(`<h1 id="scroll" tabindex="-1"><a class="header-anchor" href="#scroll" aria-hidden="true">#</a> scroll</h1><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li>Android\uFF1ARecyclerView</li><li>iOS\uFF1AUICollectionView</li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><ul><li>\u4E00\u4E2A\u5355\u5217\u6A2A\u6ED1\u5BB9\u5668\uFF0C\u53EF\u627F\u8F7D\u5355\u7C7B\u578B\u5B50\u6A21\u677F\u3002\u5177\u5907\u8FB9\u8DDD\u3001\u95F4\u8DDD\u7B49\u5C5E\u6027\u3002</li></ul></li><li><p>\u5C5E\u6027\u503C\uFF1A</p><ul><li>edge-insets: \u5185\u8FB9\u8DDD <ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>{0,0,0,0}</code></li></ul></li><li>item-spacing: \u5751\u4F4D\u95F4\u8DDD <ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul></li><li>direction: \u5BB9\u5668\u65B9\u5411 <ul><li>\u53EF\u53D6\u503C\uFF1A<code>horizontal</code> <code>vertical</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>horizontal</code></li></ul></li><li>item-type: \u6307\u5B9A\u6570\u636E\u4F7F\u7528\u7684\u5751\u4F4D\u7C7B\u578B</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;gaia_template_scroll&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token comment">// \u7ED1\u5B9A\u5BB9\u5668\u6570\u636E\u6E90</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$nodes&quot;</span><span class="token punctuation">,</span>

          <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
              <span class="token comment">// \u6307\u5B9A\u6570\u636E\u4F7F\u7528\u7684\u5751\u4F4D\u7C7B\u578B</span>
              <span class="token property">&quot;item-type&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span> <span class="token comment">// type = h or v</span>
                  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                      <span class="token property">&quot;h&quot;</span><span class="token operator">:</span><span class="token string">&quot;&#39;gx-mutable-scroll-item1&#39;&quot;</span><span class="token punctuation">,</span>
                      <span class="token property">&quot;v&quot;</span><span class="token operator">:</span><span class="token string">&quot;&#39;gx-mutable-scroll-item2&#39;&quot;</span>
                  <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>item-footer-type: \u6307\u5B9A\u52A0\u8F7D\u66F4\u591A\u4F7F\u7528\u7684\u5751\u4F4D\u7C7B\u578B</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;template_scroll_load_more&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$nodes&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;item-footer-type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;template_scroll_load_more_item_load_more&#39;&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;hasMore&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$isHasMore&quot;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u57FA\u7840\u7528\u6CD5\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia_template_scroll&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia-template&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sub-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;direction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;horizontal&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;edge-insets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{0,18,0,18}&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;item-spacing&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">&quot;row-spacing&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;layers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia_template_scroll_item1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia-template&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sub-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia_template_scroll_item2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia-template&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sub-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
#gaia_template_scroll</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>primaryBackground<span class="token punctuation">;</span>
  ......
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;gaia_template_scroll&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$nodes&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// mock\u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://t7.baidu.com/it/u=376303577,3502948048&amp;fm=193&amp;f=GIF&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;subtitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u526F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;img&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://t7.baidu.com/it/u=376303577,3502948048&amp;fm=193&amp;f=GIF&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;subtitle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u662F\u526F\u6807\u9898&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;h&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2),o=[p];function l(i,c){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","scroll.html.vue"]]);export{r as default};
