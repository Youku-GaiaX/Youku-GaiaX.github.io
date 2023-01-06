import{_ as t,r as p,o,c as i,d as n,e as s,b as l,f as a}from"./app.7b10b974.js";const c={},u=a(`<h1 id="\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE" aria-hidden="true">#</a> \u89C6\u56FE</h1><h2 id="gaia-template" tabindex="-1"><a class="header-anchor" href="#gaia-template" aria-hidden="true">#</a> gaia-template</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1AAbsoluteLayout</p></li><li><p>iOS\uFF1AUIView/ScrollView</p></li></ul></li><li><p>\u8BE6\u60C5\uFF1A\u4F5C\u4E3A\u6839\u6A21\u677F\u7684\u6807\u8BC6\uFF1B\u5BF9\u4E1A\u52A1\u900F\u660E\u3002</p></li></ul><h2 id="view" tabindex="-1"><a class="header-anchor" href="#view" aria-hidden="true">#</a> view</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1AAbsoluteLayout</p></li><li><p>iOS\uFF1AUIView</p></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2A\u5BB9\u5668\uFF0C\u53EF\u4EE5\u5305\u542B\u96F6\u4E2A\u6216\u8005\u591A\u4E2A\u5B50\u89C6\u56FE\uFF0C\u4F8B\u5982\uFF1Atext\u3001image\u3001scroll\u3001grid\u7B49\u3002\u5176\u81EA\u8EAB\u4E5F\u53EF\u4EE5\u62E5\u6709\u80CC\u666F\u3001\u5706\u89D2\u7B49\u5C5E\u6027\u3002</p></li><li><p>\u4F7F\u7528\uFF1A</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> text</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1ATextView</p></li><li><p>iOS\uFF1AUILabel</p></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2A\u6587\u5B57\u5BB9\u5668\uFF0C\u53EF\u4EE5\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u5185\u5BB9\uFF0C\u652F\u6301\u5BBD\u9AD8\u81EA\u9002\u5E94\u3001\u7EAF\u8272\u989C\u8272\u3001\u6E10\u53D8\u989C\u8272\u3001\u6587\u5B57\u5927\u5C0F\u3001\u5C45\u4E2D\u5BF9\u9F50\u7B49\u3002</p></li><li><p>\u4F7F\u7528\uFF1A</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="richtext" tabindex="-1"><a class="header-anchor" href="#richtext" aria-hidden="true">#</a> richtext</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1ATextView</p></li><li><p>iOS\uFF1AUILabel</p></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2A\u5BCC\u6587\u672C\u6587\u5B57\u5BB9\u5668\uFF0C\u53EF\u4EE5\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u5185\u5BB9\uFF0C\u652F\u6301\u5BBD\u9AD8\u81EA\u9002\u5E94\u3001\u7EAF\u8272\u989C\u8272\u3001\u6E10\u53D8\u989C\u8272\u3001\u6587\u5B57\u5927\u5C0F\u3001\u5C45\u4E2D\u5BF9\u9F50\u7B49\u3002</p></li><li><p>\u5C5E\u6027\uFF1A</p><ul><li>highlight-tag\uFF1A \u9AD8\u4EAE\u6807\u7B7E</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$title&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;highlight-tag&quot;</span><span class="token operator">:</span><span class="token string">&quot;#&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>highlight-color\uFF1A \u9AD8\u4EAE\u989C\u8272</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$title&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;highlight-color&quot;</span><span class="token operator">:</span><span class="token string">&quot;red&quot;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>highlight-font-size\uFF1A\u9AD8\u4EAE\u5B57\u4F53Size</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$title&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;highlight-font-size&quot;</span><span class="token operator">:</span><span class="token string">&quot;12px&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>highlight-font-weight\uFF1A\u9AD8\u4EAE\u5B57\u4F53Weight</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$title&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;highlight-font-weight&quot;</span><span class="token operator">:</span><span class="token string">&quot;600&quot;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li><p>highlight-font-weight\u548Chighlight-font-size\u53EF\u4EE5\u5171\u540C\u4F5C\u7528\u5B57\u4F53\u3002</p></li><li><p>highlight-font-family\u548Chighlight-font-size\u53EF\u4EE5\u5171\u540C\u4F5C\u7528\u5B57\u4F53\u3002</p></li><li><p>highlight-font-weight\u548Chighlight-font-family\u4E0D\u80FD\u5171\u540C\u4F7F\u7528\u3002</p></li><li><p>\u76EE\u524D\u6682\u4E0D\u652F\u6301fit-content\u5C5E\u6027\uFF0C\u4F1A\u5BFC\u81F4\u5BBD\u5EA6\u8BA1\u7B97\u5F02\u5E38\uFF08\u5B57\u4F53\u76F8\u5173\uFF09</p></li></ul></li><li><p>\u4F7F\u7528\uFF1A</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5B9A\u4E49:
{
  &quot;id&quot;: &quot;rich_text_normal&quot;,
  &quot;type&quot;: &quot;richtext&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
.rich_text_normal</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span>15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rich_text_normal&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${data.text}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
         <span class="token property">&quot;highlight-color&quot;</span><span class="token operator">:</span><span class="token string">&quot;#00ff00/design token&quot;</span><span class="token punctuation">,</span>
         <span class="token comment">// \u4F8B\u5982\uFF1A\u4E3B\u6F14: ^\u514B\u91CC\u65AF\u6C40^\xB7#\u8D1D\u5C14/\u4F0A\u8FEA\u5A1C#\xB7$\u95E8\u6CFD\u5C14$/\u4E54\u4EC0\xB7\u76D6\u5FB7/\u4E54\u7EB3\u68EE\xB7\u683C\u7F57\u592B/\u65AF\u7279\u5C14\u6797\xB7K\xB7\u5E03\u6717/\u57C3\u6587\xB7\u857E\u5207\u5C14\xB7\u4F0D\u5FB7/\u963F\u5C14\u5F17\u96F7\u5FB7\xB7\u83AB\u91CC\u7EB3/\u739B\u838E\xB7\u666E\u6797\u987F/\u6770\u68EE\xB7\u96F7\u7279/\u5723\u8482\u8BFA\xB7\u65B9\u5854\u7EB3</span>
         <span class="token property">&quot;highlight-tag&quot;</span><span class="token operator">:</span><span class="token string">&quot;$ / ^ / *\u7B49\u7B49&quot;</span>
       <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1AImageView</p></li><li><p>iOS\uFF1AUIImageGifView</p></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2A\u56FE\u7247\u5BB9\u5668\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u56FE\u7247\u5185\u5BB9\uFF0C\u652F\u6301\u672C\u5730\u8D44\u6E90\u56FE\u7247\u3001\u7F51\u7EDC\u8D44\u6E90\u56FE\u7247\u7B49\u3002</p></li><li><p>\u5C5E\u6027\u503C\uFF1A</p><ul><li><p>value:</p><ul><li><p>\u672C\u5730\u8D44\u6E90\uFF1Alocal:xxxx\uFF08local\u4EE3\u8868\u672C\u5730\u8D44\u6E90\uFF1Bxxx\u4EE3\u8868\u8D44\u6E90\u540D\uFF09</p></li><li><p>\u7F51\u7EDC\u8D44\u6E90\uFF1Ahttp://xxxx.png</p></li><li><p>mode</p><ul><li>\u503C\uFF1A<code>scaleToFill</code> <code>aspectFill</code> <code>aspectFit</code> <code>top</code> <code>bottom</code> <code>left</code> <code>right</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>scaleToFill</code></li><li>\u8BE6\u60C5\uFF1A <ul><li>scaleToFill\uFF1A\u4E0D\u4FDD\u6301\u5BBD\u9AD8\u6BD4\u8FDB\u884C\u7F29\u653E\uFF0C\u4F7F\u56FE\u7247\u7684\u5BBD\u9AD8\u5B8C\u5168\u62C9\u4F38\u81F3\u586B\u6EE1</li><li>aspectFill\uFF1A\u4FDD\u6301\u56FE\u7247\u5BBD\u9AD8\u6BD4\u8FDB\u884C\u7F29\u653E\uFF0C\u4F7F\u56FE\u7247\u7684\u957F\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765</li><li>aspectFit\uFF1A\u4FDD\u6301\u56FE\u7247\u5BBD\u9AD8\u6BD4\u8FDB\u884C\u7F29\u653E\uFF0C\u662F\u56FE\u7247\u7684\u77ED\u8FB9\u5B8C\u5168\u94FA\u6EE1</li></ul></li></ul></li><li><p>mode-type</p><ul><li>\u53EF\u53D6\u503C\uFF1A<code>crop</code> <code>scale</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>null</code></li><li>\u8BE6\u60C5\uFF1A <ul><li>crop\uFF1A\u88C1\u526A\u6A21\u5F0F <ul><li>top: \u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4FDD\u8BC1\u77ED\u8FB9\u663E\u793A\u6EE1\uFF0C\u622A\u53D6\u9876\u90E8\u533A\u57DF\u3002</li><li>bottom: \u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4FDD\u8BC1\u77ED\u8FB9\u663E\u793A\u6EE1\uFF0C\u622A\u53D6\u5E95\u90E8\u533A\u57DF\u3002</li><li>left: \u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4FDD\u8BC1\u77ED\u8FB9\u663E\u793A\u6EE1\uFF0C\u622A\u53D6\u5DE6\u90E8\u533A\u57DF\u3002</li><li>right: \u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4FDD\u8BC1\u77ED\u8FB9\u663E\u793A\u6EE1\uFF0C\u622A\u53D6\u53F3\u90E8\u533A\u57DF\u3002</li></ul></li><li>scale\uFF1A\u7F29\u653E\u6A21\u5F0F <ul><li>top: \u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4FDD\u8BC1\u957F\u8FB9\u663E\u793A\u6EE1\uFF0C\u5C06\u56FE\u7247\u632A\u5230\u89C6\u56FE\u7684\u9876\u90E8\u533A\u57DF\u3002</li><li>bottom: \u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4FDD\u8BC1\u957F\u8FB9\u663E\u793A\u6EE1\uFF0C\u5C06\u56FE\u7247\u632A\u5230\u89C6\u56FE\u7684\u5E95\u90E8\u533A\u57DF\u3002</li><li>left: \u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4FDD\u8BC1\u957F\u8FB9\u663E\u793A\u6EE1\uFF0C\u5C06\u56FE\u7247\u632A\u5230\u89C6\u56FE\u7684\u5DE6\u90E8\u533A\u57DF\u3002</li><li>right: \u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4FDD\u8BC1\u957F\u8FB9\u663E\u793A\u6EE1\uFF0C\u5C06\u56FE\u7247\u632A\u5230\u89C6\u56FE\u7684\u53F3\u90E8\u533A\u57DF\u3002</li></ul></li></ul></li></ul></li></ul></li><li><p>placeholder: \u7F51\u7EDC\u56FE\u7247\u5360\u4F4D\u56FE</p><ul><li>local:xxxx \uFF08local\u4EE3\u8868\u672C\u5730\u8D44\u6E90\uFF1Bxxx\u4EE3\u8868\u8D44\u6E90\u540D\uFF09</li></ul></li></ul></li><li><p>\u4F7F\u7528\uFF1A</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;image_view&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;image&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
#image_view</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span>#e4e4e4<span class="token punctuation">;</span>
  ......
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u4E8B\u4EF6\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_view&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$url&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image_view&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$data.image&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;scaleToFill&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;placeholder&quot;</span><span class="token operator">:</span><span class="token string">&quot;local:img&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// Mock\u6570\u636E:</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://t7.baidu.com/it/u=376303577,3502948048&amp;fm=193&amp;f=GIF&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iconfont" tabindex="-1"><a class="header-anchor" href="#iconfont" aria-hidden="true">#</a> iconfont</h2>`,27),r=n("li",null,[n("p",null,"\u5B9E\u73B0\uFF1A"),n("ul",null,[n("li",null,[n("p",null,"Android\uFF1ATextView")]),n("li",null,[n("p",null,"iOS\uFF1AUILabel")])])],-1),d=n("p",null,"\u8BE6\u60C5\uFF1A",-1),v={href:"https://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"},k=a(`<li><p>\u4F7F\u7528\uFF1A</p><ul><li><p>\u4F7F\u7528\u524D\u7F6E\u6761\u4EF6</p><p>Android\u7AEF\uFF0C\u5728\u9879\u76EE\u5DE5\u7A0B\u4E2D\u5B9E\u73B0iconfont\u5B57\u4F53\u7684\u52A0\u8F7D\u903B\u8F91\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>GXRegisterCenter<span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">registerExtensionFontFamily</span><span class="token punctuation">(</span><span class="token keyword">object</span> <span class="token operator">:</span>
    GXRegisterCenter<span class="token punctuation">.</span><span class="token function">GXIExtensionFontFamily</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">fontFamily</span><span class="token punctuation">(</span>fontFamilyName<span class="token operator">:</span> String<span class="token punctuation">)</span><span class="token operator">:</span> Typeface<span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5B9E\u73B0IconFont\u7684\u52A0\u8F7D\u903B\u8F91</span>
        <span class="token keyword">return</span> Typeface<span class="token punctuation">.</span><span class="token function">createFromAsset</span><span class="token punctuation">(</span>assets<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">fontFamilyName</span></span><span class="token string">.ttf&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>iOS\u7AEF\uFF0C\u5728\u9879\u76EE\u5DE5\u7A0B\u4E2D\u5B9E\u73B0iconfont\u5B57\u4F53\u7684\u52A0\u8F7D\u903B\u8F91\uFF1A</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code><span class="token number">1.</span> \u521B\u5EFA\u7C7B\uFF0C\u5B9E\u73B0GXBizServiceProtocol\u4E2D\u7684\u534F\u8BAE
<span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>loadIconFont<span class="token punctuation">{</span>
    <span class="token comment">//\u52A0\u8F7Diconfont\uFF0C\u786E\u8BA4\u53EA\u8C03\u7528\u4E00\u6B21</span>
<span class="token punctuation">}</span>

<span class="token number">2.</span> \u6CE8\u518C\u5230GaiaX\u4E2D
<span class="token punctuation">[</span><span class="token punctuation">[</span>GXRegisterCenter defaultCenter<span class="token punctuation">]</span> registerBizServiceImpl<span class="token punctuation">:</span>xxx<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u793A\u4F8B\uFF1A</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),m=a(`<h2 id="scroll" tabindex="-1"><a class="header-anchor" href="#scroll" aria-hidden="true">#</a> scroll</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1ARecyclerView</p></li><li><p>iOS\uFF1AUICollectionView</p></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2A\u5355\u5217\u6A2A\u6ED1\u5BB9\u5668\u6216\u8005\u7AD6\u6ED1\u5BB9\u5668\uFF0C\u53EF\u627F\u8F7D\u5355\u7C7B\u578B\u5B50\u6A21\u677F\u3002\u5177\u5907\u8FB9\u8DDD\u3001\u95F4\u8DDD\u7B49\u5C5E\u6027\u3002</p></li><li><p>\u5C5E\u6027\u503C\uFF1A</p><ul><li><p>edge-insets: \u5185\u8FB9\u8DDD</p><ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>{0,0,0,0}</code></li></ul></li><li><p>item-spacing: \u5751\u4F4D\u95F4\u8DDD</p><ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul></li><li><p>direction: \u5BB9\u5668\u65B9\u5411</p><ul><li>\u53EF\u53D6\u503C\uFF1A<code>horizontal</code> <code>vertical</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>horizontal</code></li></ul></li><li><p>item-type: \u6307\u5B9A\u6570\u636E\u4F7F\u7528\u7684\u5751\u4F4D\u7C7B\u578B</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;gaia_template_scroll&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token comment">// \u7ED1\u5B9A\u5BB9\u5668\u6570\u636E\u6E90</span>
          <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$nodes&quot;</span><span class="token punctuation">,</span>

          <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            	<span class="token comment">// \u6307\u5B9A\u6570\u636E\u4F7F\u7528\u7684\u5751\u4F4D\u7C7B\u578B</span>
              <span class="token property">&quot;item-type&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span><span class="token string">&quot;$type&quot;</span><span class="token punctuation">,</span> <span class="token comment">// type = h or v</span>
                  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                      <span class="token property">&quot;h&quot;</span><span class="token operator">:</span><span class="token string">&quot;gx-mutable-scroll-item1&quot;</span><span class="token punctuation">,</span>
                      <span class="token property">&quot;v&quot;</span><span class="token operator">:</span><span class="token string">&quot;gx-mutable-scroll-item2&quot;</span>
                  <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\uFF1A</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> grid</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1ARecyclerView</p></li><li><p>iOS\uFF1AUICollectionView</p></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2A\u591A\u5217\u6A2A\u6ED1\u5BB9\u5668\u6216\u8005\u7AD6\u6ED1\u5BB9\u5668\uFF0C\u53EF\u627F\u8F7D\u5355\u7C7B\u578B\u5B50\u6A21\u677F\u3002\u5177\u5907\u884C\u6570\u3001\u5217\u6570\u3001\u8FB9\u8DDD\u3001\u95F4\u8DDD\u7B49\u5C5E\u6027\u3002</p></li><li><p>\u5C5E\u6027\u503C\uFF1A</p><ul><li><p>edge-insets: \u5185\u8FB9\u8DDD</p><ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>{0,0,0,0}</code></li></ul></li><li><p>item-spacing: \u5751\u4F4D\u95F4\u8DDD</p><ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul></li><li><p>row-spacing: \u4E0E\u5751\u4F4D\u95F4\u8DDD\u5782\u76F4\u7684\u95F4\u8DDD\uFF08\u4E0A\u4E0B\uFF09</p><ul><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul></li><li><p>direction: \u5BB9\u5668\u65B9\u5411</p><ul><li>\u53EF\u53D6\u503C\uFF1A<code>horizontal</code> <code>vertical</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>vertical</code></li></ul></li></ul></li><li><p>\u4F7F\u7528\uFF1A</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49:</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="slider" tabindex="-1"><a class="header-anchor" href="#slider" aria-hidden="true">#</a> slider</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1AViewPager</p></li><li><p>iOS\uFF1A</p></li></ul></li><li><p>\u5C5E\u6027\uFF1A</p><ul><li><p>slider-scroll-time-interval\uFF1A</p><ul><li>\u8BE6\u60C5\uFF1A\u81EA\u52A8\u6EDA\u52A8\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C\u5F53\u503C\u5C0F\u4E8E\u7B49\u4E8E 0 \u65F6\uFF0C\u4E0D\u81EA\u52A8\u6EDA\u52A8</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>3000</code></li></ul></li><li><p>slider-has-indicator\uFF1A</p><ul><li>\u8BE6\u60C5\uFF1A\u662F\u5426\u6709\u6307\u793A\u5668</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>true</code></li></ul></li><li><p>slider-infinity-scroll\uFF1A</p><ul><li>\u8BE6\u60C5\uFF1A\u662F\u5426\u65E0\u9650\u6EDA</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>true</code></li></ul></li><li><p>slider-selected-index:</p><ul><li>\u8BE6\u60C5\uFF1A\u9009\u4E2D\u4F4D\u7F6E</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>0</code></li></ul></li><li><p>slider-indicator-selected-color:</p><ul><li>\u8BE6\u60C5\uFF1A\u6307\u793A\u5668\u9009\u4E2D\u989C\u8272</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>#FFFFFF</code></li></ul></li><li><p>slider-indicator-unselected-color:</p><ul><li>\u8BE6\u60C5\uFF1A\u6307\u793A\u5668\u672A\u9009\u4E2D\u989C\u8272</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>#BBBBBB</code></li></ul></li><li><p>slider-indicator-margin:</p><ul><li>\u8BE6\u60C5\uFF1A\u6307\u793A\u5668 margin</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>{0,0,0,0}</code></li></ul></li><li><p>slider-indicator-position:</p><ul><li>\u8BE6\u60C5\uFF1A\u6307\u793A\u5668\u4F4D\u7F6E</li><li>\u53EF\u9009\u503C\uFF1A<code>top-left</code>, <code>top-center</code>, <code>top-right</code>, <code>bottom-left</code>, <code>bottom-center</code>, <code>bottom-right</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>bottom-right</code></li></ul></li><li><p>slider-indicator-class-android:</p><ul><li>\u8BE6\u60C5\uFF1A\u5B89\u5353\u81EA\u5B9A\u4E49\u6307\u793A\u5668\u7C7B\u540D\uFF0C\u81EA\u5B9A\u4E49\u7C7B\u9700\u8981\u7EE7\u627F <code>com.alibaba.gaiax.render.view.container.slider.GXSliderBaseIndicatorView</code></li><li>\u9ED8\u8BA4\u503C\uFF1A\u65E0\u5B9A\u4E49\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u6307\u793A\u5668\u6837\u5F0F</li></ul></li><li><p>slider-indicator-class-ios:</p><ul><li>\u8BE6\u60C5\uFF1A</li><li>\u9ED8\u8BA4\u503C\uFF1A</li></ul></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2A\u8F6E\u64AD\u5BB9\u5668\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u5176\u4ED6\u5B50\u6A21\u677F\u3002</p></li><li><p>\u4F7F\u7528\uFF1A</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gx-slider&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia-template&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sub-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;slider&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;slider-scroll-time-interval&quot;</span><span class="token operator">:</span> <span class="token number">6000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;slider-has-indicator&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;slider-infinity-scroll&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;slider-indicator-selected-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFFFFF&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;slider-indicator-unselected-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#BBBBBB&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;slider-indicator-margin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{10,10,10,10}&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;slider-indicator-position&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right-bottom&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;slider-indicator-class-android&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.example.customIndicatorView&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;layers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gx-slider-item&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gaia-template&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sub-type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
#gx-slider</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\u7ED1\u5B9A\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;gx-slider&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;$nodes&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;extend&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;slider-scroll-time-interval&quot;</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slider-infinity-scroll&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slider-has-indicator&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slider-selected-index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slider-indicator-selected-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;#FFFFFF&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;slider-indicator-unselected-color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;#BBBBBB&#39;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// Mock\u6570\u636E\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;nodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://t7.baidu.com/it/u=376303577,3502948048&amp;fm=193&amp;f=GIF&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7B2C\u4E00\u4E2A\u6807\u9898&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://t7.baidu.com/it/u=376303577,3502948048&amp;fm=193&amp;f=GIF&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7B2C\u4E8C\u4E2A\u6807\u9898&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lottie" tabindex="-1"><a class="header-anchor" href="#lottie" aria-hidden="true">#</a> lottie</h2><ul><li><p>\u5B9E\u73B0\uFF1A</p><ul><li><p>Android\uFF1ALottieAnimationView</p></li><li><p>iOS\uFF1ALotAnimationView</p></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2ALottie\u52A8\u753B\u5BB9\u5668\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u52A8\u753B\u3002 \u652F\u6301\u672C\u5730\u8D44\u6E90\u548C\u7F51\u7EDC\u8D44\u6E90\u3002</p></li></ul><h2 id="custom-view" tabindex="-1"><a class="header-anchor" href="#custom-view" aria-hidden="true">#</a> custom view</h2><ul><li>\u5B9E\u73B0\uFF1A <ul><li><p>\u81EA\u5B9A\u4E49\u89C6\u56FE\u5FC5\u987B\u5B9E\u73B0\u5982\u4E0B\u63A5\u53E3\uFF1A</p><ul><li>\u6570\u636E\u7ED1\u5B9A\u63A5\u53E3: <ul><li><p>Android: <code>com.alibaba.gaiax.GXTemplateEngine.GXICustomViewBindData</code></p></li><li><p>iOS: <code>- (void)gx_bindData:(id)data</code></p></li></ul></li></ul></li><li><p>\u5728index.json\u4E2D\uFF0C\u65B0\u589E\u8282\u70B9\u7C7B\u578B\u201Ccustom\u201D\u503C\u7C7B\u578B\uFF0C\u7528\u6765\u8868\u660E\u8BE5\u8282\u70B9\u662F\u81EA\u5B9A\u4E49view\u3002</p><ul><li><p>\u5728\u540C\u7EA7\u8282\u70B9\u589E\u52A0<code>view-class-ios</code>\u4EE3\u8868ios\u8282\u70B9\u7684\u8282\u70B9\u6620\u5C04\u7684\u81EA\u5B9A\u4E49View\u3002</p></li><li><p>\u5728\u540C\u7EA7\u8282\u70B9\u589E\u52A0<code>view-class-android</code>\u4EE3\u8868android\u8282\u70B9\u7684\u8282\u70B9\u6620\u5C04\u7684\u81EA\u5B9A\u4E49View\u3002</p></li></ul></li></ul></li></ul><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>Android - \u81EA\u5B9A\u4E49\u89C6\u56FE\u5FC5\u987B\u6DFB\u52A0Keep\u6CE8\u89E3\uFF0C\u9632\u6B62\u88AB\u6DF7\u6DC6\u3002</p></div><ul><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E00\u4E2A\u81EA\u5B9A\u4E49\u89C6\u56FE\u7684\u5BB9\u5668\uFF0C\u53EF\u4EE5\u7528\u4E8E\u627F\u8F7D\u539F\u751F\u89C6\u56FE\u3002</p></li><li><p>\u4F7F\u7528\uFF1A</p></li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5B9A\u4E49\uFF1A</span>
<span class="token punctuation">{</span>
	<span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom_view&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;view-class-android&quot;</span><span class="token operator">:</span><span class="token string">&quot;com.xxx.xxx.MyCustomLayout&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;view-class-ios&quot;</span><span class="token operator">:</span><span class="token string">&quot;xxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// \u6837\u5F0F\uFF1A
#custom_view</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span>#e4e4e4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u4E8B\u4EF6\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;custom_view&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$a.b&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u6570\u636E\u7ED1\u5B9A\uFF1A</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;custom_view&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$data&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function b(q,g){const e=p("ExternalLinkIcon");return o(),i("div",null,[u,n("ul",null,[r,n("li",null,[d,n("p",null,[s("\u4E00\u4E2A\u6587\u5B57\u56FE\u7247\u5BB9\u5668\uFF0C\u53EF\u7528\u4E8E\u627F\u8F7D\u6587\u5B57\u56FE\u7247\uFF0C\u4F8B\u5982\uFF1A"),n("a",v,[s("iconfont.cn"),l(e)]),s("\u7F51\u7AD9\u4E0B\u7684\u8D44\u6E90\u3002")])]),k]),m])}const y=t(c,[["render",b],["__file","views.html.vue"]]);export{y as default};
