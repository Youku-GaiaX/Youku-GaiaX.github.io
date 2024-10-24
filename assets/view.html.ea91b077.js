import{_ as s,o as a,c as e,f as i}from"./app.a9cb9a51.js";const l={};function t(o,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> view</h1><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li>Android\uFF1AAbsoluteLayout</li><li>iOS\uFF1AUIView</li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><ul><li>\u4E00\u4E2A\u5BB9\u5668\uFF0C\u53EF\u4EE5\u5305\u542B\u96F6\u4E2A\u6216\u8005\u591A\u4E2A\u5B50\u89C6\u56FE\uFF0C\u4F8B\u5982\uFF1Atext\u3001image\u3001scroll\u3001grid\u7B49\u3002\u5176\u81EA\u8EAB\u4E5F\u53EF\u4EE5\u62E5\u6709\u80CC\u666F\u3001\u5706\u89D2\u7B49\u5C5E\u6027\u3002</li></ul></li><li><p>\u65E0\u969C\u788D\uFF1A</p><ul><li>accessibilityEnable\uFF1A <ul><li>\u53D6\u503C\uFF1A<code>true</code>/<code>false</code></li><li>\u63CF\u8FF0\uFF1A\u5426\u652F\u6301\u65E0\u969C\u788D</li></ul></li><li>accessibilityTraits\uFF1A <ul><li>\u53D6\u503C\uFF1A<code>&#39;button&#39;</code>/<code>&#39;image&#39;</code>/<code>&#39;text&#39;</code>/<code>&#39;none&#39;/&#39;header&#39;</code></li><li>\u63CF\u8FF0\uFF1A\u65E0\u969C\u788D\u63A7\u4EF6\u5C5E\u6027</li></ul></li><li>accessibilityDesc\uFF1A <ul><li>\u53D6\u503C\uFF1Astring</li><li>\u63CF\u8FF0\uFF1A\u65E0\u969C\u788D\u5185\u5BB9</li></ul></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u65E0\u969C\u788D</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;viewId&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// \u65E0\u969C\u788D\u6717\u8BFB\u6587\u6848</span>
        <span class="token property">&quot;accessibilityDesc&quot;</span><span class="token operator">:</span><span class="token string">&quot;&#39;\u65E0\u969C\u788D\u6587\u6848&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u662F\u5426\u53EF\u4EE5\u6717\u8BFB</span>
        <span class="token comment">// \u4F18\u5148\u7EA7\u9AD8\u4E8EaccessibilityDesc\uFF0C\u9ED8\u8BA4\u503C\u662Ftrue</span>
        <span class="token property">&quot;accessibilityEnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>/<span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//\u65E0\u969C\u788D\u63A7\u4EF6\u5C5E\u6027</span>
        <span class="token property">&quot;accessibilityTraits&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;button&#39;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u9634\u5F71\uFF1A</p><ul><li>\u5728\u975E<strong>\u6839</strong>\u8282\u70B9\u4E0A\u8BBE\u7F6E\u9634\u5F71</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 5px 5px 5px #ff0000<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u8BBE\u7F6E\u6EA2\u51FA\u88C1\u526A\u903B\u8F91\u4E3A\u4E0D\u88C1\u526A (\u53EF\u5728Studio\u4E0A\u8BBE\u7F6E\u89C6\u56FE\u7684\u6837\u5F0F\u4E2D\u8BBE\u7F6E\uFF1A\u6EA2\u51FA\u88C1\u526A - \u4E0D\u88C1\u526A)</li></ul><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u57FA\u7840\u7528\u6CD5\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view_normal&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;view&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
#view_normal</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span>#e4e4e4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u4E8B\u4EF6\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;view_normal&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u8868\u8FBE\u5F0F\u52A8\u6001\u66F4\u65B0\u5C5E\u6027\u503C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// \u6570\u636E\u57DF</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u8282\u70B9ID</span>
    <span class="token property">&quot;view_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

       <span class="token comment">// \u6269\u5C55\u5C5E\u6027</span>
       <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>

          <span class="token comment">// \u52A8\u6001\u66F4\u65B0display\u503C\uFF0Cdisplay\u503C\u53EF\u4E3Aflex\u548Cnone</span>
          <span class="token comment">// display\u7684value\u57DF\u662F\u8868\u8FBE\u5F0F\u903B\u8F91\uFF0C\u5176\u7F16\u5199\u65B9\u5F0F\u9700\u8981\u7B26\u5408\u8868\u8FBE\u5F0F\u8BED\u6CD5</span>
          <span class="token comment">// \u5B57\u7B26\u4E32\u8981\u52A0&#39;&#39;</span>

          <span class="token comment">// \u8BBE\u7F6E\u8282\u70B9\u662F\u5426\u663E\u793A</span>
          <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot; $type == 0 ? &#39;flex&#39; : &#39;none&#39; &quot;</span><span class="token punctuation">,</span>

          <span class="token comment">// \u8BBE\u7F6E\u8282\u70B9\u7684\u80CC\u666F\u8272</span>
          <span class="token property">&quot;background-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot; $type == 1 ? &#39;#00ff00&#39; : &#39;#ff00ff&#39; &quot;</span>

       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,2)]))}const c=s(l,[["render",t],["__file","view.html.vue"]]);export{c as default};
