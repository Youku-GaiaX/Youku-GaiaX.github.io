import{_ as e,o as n,c as s,f as i}from"./app.a9cb9a51.js";const t={};function o(r,a){return n(),s("div",null,a[0]||(a[0]=[i(`<h1 id="\u65B9\u6848-m1\u6A21\u62DF\u5668\u7F16\u8BD1\u62A5\u9519-ios" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848-m1\u6A21\u62DF\u5668\u7F16\u8BD1\u62A5\u9519-ios" aria-hidden="true">#</a> \u65B9\u6848 - M1\u6A21\u62DF\u5668\u7F16\u8BD1\u62A5\u9519\uFF08iOS\uFF09</h1><h2 id="\u9519\u8BEF\u63CF\u8FF0-\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u63CF\u8FF0-\u539F\u56E0" aria-hidden="true">#</a> \u9519\u8BEF\u63CF\u8FF0 &amp; \u539F\u56E0</h2><h3 id="\u9519\u8BEF\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u63CF\u8FF0" aria-hidden="true">#</a> \u9519\u8BEF\u63CF\u8FF0</h3><p>building for iOS Simulator-arm64 but attempting to link with file built for iOS</p><h3 id="\u9519\u8BEF\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u539F\u56E0" aria-hidden="true">#</a> \u9519\u8BEF\u539F\u56E0</h3><p>\u771F\u673A\u67B6\u6784\u4E3A\uFF1Aarm64\uFF0C\u6A21\u62DF\u5668\u67B6\u6784\u4E3A\uFF1Ax86\u3002</p><p>Xcode12\u4E4B\u540E\u6A21\u62DF\u5668\u5DF2\u7ECF\u7528arm\u67B6\u6784\u6765\u7F16\u8BD1\u9879\u76EE\u4E86\uFF0C\u800Clink\u94FE\u63A5\u7684\u8FD8\u662Fx86\u67B6\u6784\uFF0C\u5BFC\u81F4\u627E\u4E0D\u5230\u5BF9\u5E94\u7684\u67B6\u6784\u3002</p><h2 id="\u89E3\u51B3\u65B9\u68481" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u68481" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u68481</h2><ol><li>Finder -&gt; \u5E94\u7528\u7A0B\u5E8F -&gt; Xcode -&gt; \u663E\u793A\u7B80\u4ECB -&gt; \u52FE\u9009 \u201C\u4F7F\u7528Rosetta\u6253\u5F00\u201D</li><li>\u91CD\u542FXcode\uFF0C\u91CD\u65B0\u6253\u5F00\u9879\u76EE</li></ol><h2 id="\u89E3\u51B3\u65B9\u68482" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u68482" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u68482:</h2><ol><li>\u5728Excluded Architecture\u8BBE\u7F6E\u9488\u5BF9\u6A21\u62DF\u5668\u8BBE\u7F6E\u6392\u9664 arm64</li></ol><p><img src="https://gw.alicdn.com/imgextra/i3/O1CN01xNGsHt1jQk7UGOA8v_!!6000000004543-2-tps-484-135.png" alt="lALPJtuZYvU4xeDMh80B5A_484_135.png"></p><ol start="2"><li>\u5728Podfile\u6700\u540E\u6DFB\u52A0\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u907F\u514D\u88ABpod\u4E2D\u7684\u8BBE\u7F6E\u8986\u76D6</li></ol><div class="language-objectivec ext-objectivec line-numbers-mode"><pre class="language-objectivec"><code>post_install <span class="token keyword">do</span> <span class="token operator">|</span>installer<span class="token operator">|</span>
  installer<span class="token punctuation">.</span>pods_project<span class="token punctuation">.</span>build_configurations<span class="token punctuation">.</span>each <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
    config<span class="token punctuation">.</span>build_settings<span class="token punctuation">[</span><span class="token string">&quot;EXCLUDED_ARCHS[sdk=iphonesimulator*]&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;arm64&quot;</span>
  end
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const c=e(t,[["render",o],["__file","ios-m1-simulator-compile-error.html.vue"]]);export{c as default};