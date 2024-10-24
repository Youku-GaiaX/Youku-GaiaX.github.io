import{_ as s,o as a,c as e,f as t}from"./app.a9cb9a51.js";const p={};function i(o,n){return a(),e("div",null,n[0]||(n[0]=[t(`<h1 id="\u624B\u52A8\u57CB\u70B9-\u70B9\u51FB\u4E0E\u66DD\u5149" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u57CB\u70B9-\u70B9\u51FB\u4E0E\u66DD\u5149" aria-hidden="true">#</a> \u624B\u52A8\u57CB\u70B9\uFF08\u70B9\u51FB\u4E0E\u66DD\u5149\uFF09</h1><h2 id="\u6A21\u677F\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B9A\u4E49" aria-hidden="true">#</a> \u6A21\u677F\u5B9A\u4E49</h2><p>index.databinding\u4E2D\u65B0\u589Etrack\u57DF\uFF0C\u7528\u6765\u8BBE\u5B9A\u8282\u70B9\u7684\u57CB\u70B9\uFF08\u70B9\u51FB\u548C\u66DD\u5149\uFF09\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;track&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;nodeId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$nodeId&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BA2\u6237\u7AEF\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u5B9E\u73B0" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u5B9E\u73B0</h2><h3 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h3><p>\u5904\u7406\u624B\u52A8\u57CB\u70B9\uFF08\u70B9\u51FB\u4E0E\u66DD\u5149\uFF09\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>
<span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span>

templateData<span class="token punctuation">.</span>trackListener <span class="token operator">=</span> <span class="token keyword">object</span> <span class="token operator">:</span> GXTemplateEngine<span class="token punctuation">.</span><span class="token function">GXITrackListener</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onManualClickTrackEvent</span><span class="token punctuation">(</span>gxTrack<span class="token operator">:</span> GXTemplateEngine<span class="token punctuation">.</span>GXTrack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u624B\u52A8\u5904\u7406\u70B9\u51FB\u4E8B\u4EF6</span>
        Log<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;onManualClickTrackEvent() called with: gxTrack = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">gxTrack</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onManualExposureTrackEvent</span><span class="token punctuation">(</span>gxTrack<span class="token operator">:</span> GXTemplateEngine<span class="token punctuation">.</span>GXTrack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u624B\u52A8\u5904\u7406\u66DD\u5149\u4E8B\u4EF6</span>
        Log<span class="token punctuation">.</span><span class="token function">d</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;onManualExposureTrackEvent() called with: gxTrack = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">gxTrack</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">..</span><span class="token operator">..</span><span class="token operator">..</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u77E5\u89C6\u56FE\u53EF\u89C1\u4E0E\u4E0D\u53EF\u89C1\uFF0C\u544A\u77E5SDK\u8FDB\u884C\u66DD\u5149\u56DE\u8C03\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>
<span class="token comment">// \u901A\u77E5\u89C6\u56FE\u53EF\u89C1</span>
GXTemplateEngine<span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">onAppear</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span>

<span class="token comment">// \u901A\u77E5\u89C6\u56FE\u4E0D\u53EF\u89C1</span>
GXTemplateEngine<span class="token punctuation">.</span>instance<span class="token punctuation">.</span><span class="token function">onDisappear</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h3><p>\u5904\u7406\u624B\u52A8\u57CB\u70B9\uFF08\u70B9\u51FB\u4E0E\u66DD\u5149\uFF09\uFF1A</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment">// XXX\u7C7B\u5B9E\u73B0GXTrackProtocal</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>gx_onManualClickTrackEvent<span class="token punctuation">:</span><span class="token punctuation">(</span>GXTrack <span class="token operator">*</span><span class="token punctuation">)</span>track <span class="token punctuation">{</span> 
   <span class="token comment">//\u70B9\u51FB\u57CB\u70B9</span>
<span class="token punctuation">}</span>

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>gx_onManualExposureTrackEvent<span class="token punctuation">:</span><span class="token punctuation">(</span>GXTrack <span class="token operator">*</span><span class="token punctuation">)</span>track <span class="token punctuation">{</span>
   <span class="token comment">//\u66DD\u5149\u57CB\u70B9</span>
<span class="token punctuation">}</span>

<span class="token comment">//trackListener</span>
templateData<span class="token punctuation">.</span>trackListener <span class="token operator">=</span> XXX

<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u77E5\u89C6\u56FE\u53EF\u89C1\u4E0E\u4E0D\u53EF\u89C1\uFF0C\u544A\u77E5SDK\u8FDB\u884C\u66DD\u5149\u56DE\u8C03\uFF1A</p><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code>
<span class="token comment">//\u83B7\u53D6\u751F\u6210\u7684GaiaX\u89C6\u56FE</span>
UIView <span class="token operator">&lt;</span>GXRootViewProtocal<span class="token operator">&gt;</span> <span class="token operator">*</span>rootView <span class="token operator">=</span> XXX

<span class="token comment">// \u901A\u77E5\u89C6\u56FE\u53EF\u89C1</span>
<span class="token punctuation">[</span>rootView onAppear<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u901A\u77E5\u89C6\u56FE\u4E0D\u53EF\u89C1</span>
<span class="token punctuation">[</span>rootView onDisappear<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const l=s(p,[["render",i],["__file","manual-track.html.vue"]]);export{l as default};
