import{_ as s,o as a,c as t,f as e}from"./app.a9cb9a51.js";const p={};function o(i,n){return a(),t("div",null,n[0]||(n[0]=[e(`<h1 id="\u4E8B\u4EF6\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5904\u7406" aria-hidden="true">#</a> \u4E8B\u4EF6\u5904\u7406</h1><h2 id="\u4E8B\u4EF6\u7ED1\u5B9A\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9A\u89C4\u5219" aria-hidden="true">#</a> \u4E8B\u4EF6\u7ED1\u5B9A\u89C4\u5219</h2><p>\u524D\u9762\u4ECB\u7ECD\u4E86\u6A21\u677F\u7684\u6587\u4EF6\u5305\u542Bindex.databinding\uFF0C\u8D1F\u8D23\u6765\u63CF\u8FF0\u6A21\u677F\u4E2D\u7684\u6570\u636E\u3001\u4E8B\u4EF6\u3001\u52A8\u753B\u7684\u7ED1\u5B9A\u5173\u7CFB\u3002 \u6211\u4EEC\u53EF\u4EE5\u5728databinding\u6587\u4EF6\u4E2D\u7684event\u6570\u636E\u6A21\u5757\uFF0C\u5BF9\u6A21\u677F\u4E2D\u7684\u6240\u6709\u5143\u7D20\u90FD\u53EF\u4EE5\u8FDB\u884C\u7ED1\u5B9A\u4E8B\u4EF6\u3002</p><h2 id="\u4E8B\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u4E8B\u4EF6\u7C7B\u578B</h2><ul><li>\u53EF\u53D6\u503C\uFF1A<code>tap</code> <code>longpress</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>tap</code></li><li>\u8BE6\u60C5\uFF1A\u4E8B\u4EF6\u7C7B\u578B\u7531\u4E8B\u4EF6\u7ED3\u6784\u4E2D\u7684type\u6765\u51B3\u5B9A\uFF0C\u652F\u6301\u540C\u65F6\u7ED1\u5B9A\u591A\u4E2A\u4E8B\u4EF6\uFF0C\u4F46\u5BF9\u4E8E\u540C\u4E00\u8282\u70B9\uFF0C\u4E0D\u652F\u6301\u91CD\u590D\u7ED1\u5B9A\u76F8\u540C\u7C7B\u578B\u4E8B\u4EF6\u3002</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u7ED1\u5B9A\u5355\u4E2A\u4E8B\u4EF6</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;nodeId&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;tap&#39;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$data.action&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED1\u5B9A\u591A\u4E2A\u4E8B\u4EF6</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;nodeId&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;tap&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$data.action&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;longpress&#39;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;params&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$data.action&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u4EF6\u5BA2\u6237\u7AEF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u5BA2\u6237\u7AEF\u5B9E\u73B0" aria-hidden="true">#</a> \u4E8B\u4EF6\u5BA2\u6237\u7AEF\u5B9E\u73B0</h2><p>\u4E8B\u4EF6\u7684\u54CD\u5E94\uFF08\u4FD7\u79F0\u8DEF\u7531\uFF09\u9700\u8981\u5BA2\u6237\u7AEF\u4EE3\u7801\u7684\u5904\u7406\u3002</p><ul><li>Android\u7AEF\u793A\u4F8B</li></ul><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>
<span class="token comment">// \u521D\u59CB\u5316</span>
GXTemplateEngine<span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>activity<span class="token punctuation">)</span>

<span class="token comment">// \u6A21\u677F\u53C2\u6570</span>
<span class="token keyword">val</span> params <span class="token operator">=</span> GXTemplateEngine<span class="token punctuation">.</span><span class="token function">GXTemplateItem</span><span class="token punctuation">(</span>activity<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;biz&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;id&quot;</span></span><span class="token punctuation">)</span>

<span class="token comment">// \u6A21\u677F\u7ED8\u5236\u5C3A\u5BF8</span>
<span class="token keyword">val</span> size <span class="token operator">=</span> GXTemplateEngine<span class="token punctuation">.</span><span class="token function">GXMeasureSize</span><span class="token punctuation">(</span>GXScreenUtils<span class="token punctuation">.</span><span class="token function">getScreenWidthPx</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token comment">// \u6A21\u677F\u6570\u636E</span>
<span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> AssetsUtils<span class="token punctuation">.</span><span class="token function">parseAssets</span><span class="token punctuation">(</span>activity<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;data.json&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">val</span> templateData <span class="token operator">=</span> GXTemplateEngine<span class="token punctuation">.</span><span class="token function">GXTemplateData</span><span class="token punctuation">(</span><span class="token keyword">data</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u6A21\u677FView</span>
<span class="token keyword">val</span> view <span class="token operator">=</span> GXTemplateEngine<span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">createView</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token operator">!!</span>

templateData<span class="token punctuation">.</span>eventListener <span class="token operator">=</span> <span class="token keyword">object</span> <span class="token operator">:</span> GXTemplateEngine<span class="token punctuation">.</span><span class="token function">GXIEventListener</span> <span class="token punctuation">{</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onGestureEvent</span><span class="token punctuation">(</span>gxGesture<span class="token operator">:</span> GXTemplateEngine<span class="token punctuation">.</span>GXGesture<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onGestureEvent</span><span class="token punctuation">(</span>gxGesture<span class="token punctuation">)</span>
        <span class="token comment">// \u5904\u7406\u4E8B\u4EF6</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED1\u5B9A\u6570\u636E</span>
GXTemplateEngine<span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">bindData</span><span class="token punctuation">(</span>view<span class="token punctuation">,</span> templateData<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>iOS\u7AEF\u793A\u4F8B</li></ul><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token comment">//iOS\u7AEF</span>

<span class="token comment">//templateItem</span>
GXTemplateItem <span class="token operator">*</span>templateItem <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>GXTemplateItem alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>
templateItem<span class="token punctuation">.</span>templateId <span class="token operator">=</span> <span class="token string">@&quot;xxx&quot;</span><span class="token punctuation">;</span>
templateItem<span class="token punctuation">.</span>bizId <span class="token operator">=</span> <span class="token string">@&quot;xxx&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//\u521B\u5EFA\u89C6\u56FE</span>
UIView <span class="token operator">*</span>view <span class="token operator">=</span> <span class="token punctuation">[</span>TheGXTemplateEngine creatViewByTemplateItem<span class="token punctuation">:</span>templateItem
                                                measureSize<span class="token punctuation">:</span><span class="token function">CGSizeMake</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> NAN<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token comment">//\u8BBE\u7F6E\u4EE3\u7406</span>
GXTemplateData <span class="token operator">*</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>GXTemplateData alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>
data<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token operator">@</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">//\u8BBE\u7F6E\u6570\u636E\u6E90</span>

<span class="token comment">//\u8BBE\u7F6E\u76F8\u5173\u7684\u4EE3\u7406 &amp; \u76D1\u542C</span>
data<span class="token punctuation">.</span>eventListener <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">;</span>
data<span class="token punctuation">.</span>trackListener <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">;</span>

<span class="token comment">//\u901A\u8FC7bindData\u89E6\u53D1</span>
<span class="token punctuation">[</span>TheGXTemplateEngine bindData<span class="token punctuation">:</span>_data onView<span class="token punctuation">:</span>_view<span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token comment">//\u5B9E\u73B0GXEventProtocal\u4E8B\u4EF6\u534F\u8BAE</span>
<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>gx_onGestureEvent<span class="token punctuation">:</span><span class="token punctuation">(</span>GXEvent <span class="token operator">*</span><span class="token punctuation">)</span>event<span class="token punctuation">{</span>
    NSdictionary <span class="token operator">*</span>params <span class="token operator">=</span> event<span class="token punctuation">.</span>eventParams<span class="token punctuation">;</span>
    <span class="token comment">//to do</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const l=s(p,[["render",o],["__file","event.html.vue"]]);export{l as default};
