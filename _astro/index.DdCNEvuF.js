import{s as c,g as r}from"./_astro_assets.Dq2sO3SX.js";import{c as h,r as g,m as u}from"./render-template.89w2LG9A.js";import{u as f}from"./hoisted.Dgzt7PrK.js";import"./astro/assets-service.DcMRmNXG.js";const m={src:"/_astro/logo.DMXfm6vf.png",width:512,height:512,format:"png"},F={src:"/_astro/about-astro.0znnbM0P.png",width:249,height:450,format:"png"},b=async function(a){const e={};{const i=new RegExp('__ASTRO_IMAGE_="([^"]*\\./logo\\.png[^"]*)"',"g");let t,n=0;for(;(t=i.exec(a))!==null;){const s="./logo.png_"+n,o=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:l,...d}=o;e[s]=await r({src:m,...d}),n++}}{const i=new RegExp('__ASTRO_IMAGE_="([^"]*@/assets/about-astro\\.png[^"]*)"',"g");let t,n=0;for(;(t=i.exec(a))!==null;){const s="@/assets/about-astro.png_"+n,o=JSON.parse(t[1].replace(/&#x22;/g,'"')),{src:l,...d}=o;e[s]=await r({src:F,...d}),n++}}return e};async function v(a){return b(a).then(e=>a.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm,(i,t)=>{const n=JSON.parse(t.replace(/&#x22;/g,'"')),s=n.src+"_"+n.index;e[s].srcSet&&e[s].srcSet.values.length>0&&(e[s].attributes.srcset=e[s].srcSet.attribute);const{index:o,...l}=e[s].attributes;return c({src:e[s].src,...l})}))}const p=await v(`<h2 id="this-is-a-h2-heading">This is a H2 Heading</h2>
<h3 id="this-is-a-h3-heading">This is a H3 Heading</h3>
<h4 id="this-is-a-h4-heading">This is a H4 Heading</h4>
<h5 id="this-is-a-h5-heading">This is a H5 Heading</h5>
<h6 id="this-is-a-h6-heading">This is a H6 Heading</h6>
<h2 id="horizontal-rules">Horizontal Rules</h2>
<hr>
<hr>
<hr>
<h2 id="emphasis">Emphasis</h2>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><del>Strikethrough</del></p>
<h2 id="quotes">Quotes</h2>
<p>”Double quotes” and ‘single quotes’</p>
<h2 id="blockquotes">Blockquotes</h2>
<blockquote>
<p>Blockquotes can also be nested…</p>
<blockquote>
<p>…by using additional greater-than signs right next to each other…</p>
</blockquote>
</blockquote>
<h2 id="references">References</h2>
<p>An example containing a clickable reference<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup> with a link to the source.</p>
<p>Second example containing a reference<sup><a href="#user-content-fn-2" id="user-content-fnref-2" data-footnote-ref="" aria-describedby="footnote-label">2</a></sup> with a link to the source.</p>
<p>If you check out this example in <code>src/content/post/markdown-elements/index.md</code>, you’ll notice that the references and the heading “Footnotes” are added to the bottom of the page via the <a href="https://github.com/remarkjs/remark-rehype#options" rel="nofollow, noopener, noreferrer" target="_blank">remark-rehype</a> plugin.</p>
<h2 id="lists">Lists</h2>
<p>Unordered</p>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:
<ul>
<li>Marker character change forces new list start:
<ul>
<li>Ac tristique libero volutpat at</li>
<li>Facilisis in pretium nisl aliquet</li>
<li>Nulla volutpat aliquam velit</li>
</ul>
</li>
</ul>
</li>
<li>Very easy!</li>
</ul>
<p>Ordered</p>
<ol>
<li>
<p>Lorem ipsum dolor sit amet</p>
</li>
<li>
<p>Consectetur adipiscing elit</p>
</li>
<li>
<p>Integer molestie lorem at massa</p>
</li>
<li>
<p>You can use sequential numbers…</p>
</li>
<li>
<p>…or keep all the numbers as <code>1.</code></p>
</li>
</ol>
<p>Start numbering with offset:</p>
<ol start="57">
<li>foo</li>
<li>bar</li>
</ol>
<h2 id="code">Code</h2>
<p>Inline <code>code</code></p>
<p>Indented code</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.p3msh.css"><script type="module" src="/_astro/ec.sgewm.js"><\/script><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#f8f8f2;--1:#24292e">// Some comments</span></div></div><div class="ec-line"><div class="code"><span style="--0:#f8f8f2;--1:#24292e">line 1 of code</span></div></div><div class="ec-line"><div class="code"><span style="--0:#f8f8f2;--1:#24292e">line 2 of code</span></div></div><div class="ec-line"><div class="code"><span style="--0:#f8f8f2;--1:#24292e">line 3 of code</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// Some commentsline 1 of codeline 2 of codeline 3 of code"><div></div></button></div></figure></div>
<p>Block code “fences”</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#f8f8f2;--1:#24292e">Sample text here...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Sample text here..."><div></div></button></div></figure></div>
<p>Syntax highlighting</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#FF79C6;--1:#BF3441">var</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#50FA7B;--1:#6F42C1">foo</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#FF79C6;--1:#BF3441">=</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#FF79C6;--1:#BF3441">function</span><span style="--0:#F8F8F2;--1:#24292E"> (</span><span style="--0:#FFB86C;--0fs:italic;--1:#AE4B07">bar</span><span style="--0:#F8F8F2;--1:#24292E">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#FF79C6;--1:#BF3441">return</span><span style="--0:#F8F8F2;--1:#24292E"> bar</span><span style="--0:#FF79C6;--1:#BF3441">++</span><span style="--0:#F8F8F2;--1:#24292E">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F8F8F2;--1:#24292E">};</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F8F8F2;--1:#24292E">console.</span><span style="--0:#50FA7B;--1:#6F42C1">log</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--0:#50FA7B;--1:#6F42C1">foo</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--0:#BD93F9;--1:#005CC5">5</span><span style="--0:#F8F8F2;--1:#24292E">));</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="var foo = function (bar) {  return bar++;};console.log(foo(5));"><div></div></button></div></figure></div>
<h3 id="expressive-code-examples">Expressive code examples</h3>
<p>Adding a title</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">file.js</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F8F8F2;--1:#24292E">console.</span><span style="--0:#50FA7B;--1:#6F42C1">log</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">Title example</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="console.log(&#x22;Title example&#x22;);"><div></div></button></div></figure></div>
<p>A bash terminal</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#8BE9FD;--1:#005CC5">echo</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">A base terminal example</span><span style="--0:#E9F284">"</span></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="echo &#x22;A base terminal example&#x22;"><div></div></button></div></figure></div>
<p>Highlighting code lines</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">line-markers.js</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#FF79C6;--1:#BF3441">function</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#50FA7B;--1:#6F42C1">demo</span><span style="--0:#F8F8F2;--1:#24292E">() {</span></div></div><div class="ec-line highlight del"><div class="code"><span class="indent"><span style="--0:#F8F8F2;--1:#24292E">  </span></span><span style="--0:#F8F8F2;--1:#24292E">console.</span><span style="--0:#50FA7B;--1:#613aa9">log</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">this line is marked as deleted</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent">  </span><span style="--0:#acb4cf;--1:#4d545b">// This line and the next one are marked as inserted</span></div></div><div class="ec-line highlight ins"><div class="code"><span class="indent"><span style="--0:#F8F8F2;--1:#24292E">  </span></span><span style="--0:#F8F8F2;--1:#24292E">console.</span><span style="--0:#50FA7B;--1:#613aa9">log</span><span style="--0:#F8F8F2;--1:#24292E">(</span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">this is the second inserted line</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line highlight mark"><div class="code"><span class="indent">  </span><span style="--0:#ff92d1;--1:#982934">return</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--1:#032F62"><span style="--0:#E9F284">"</span><span style="--0:#F1FA8C">this line uses the neutral default marker type</span><span style="--0:#E9F284">"</span></span><span style="--0:#F8F8F2;--1:#24292E">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F8F8F2;--1:#24292E">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="function demo() {  console.log(&#x22;this line is marked as deleted&#x22;);  // This line and the next one are marked as inserted  console.log(&#x22;this is the second inserted line&#x22;);  return &#x22;this line uses the neutral default marker type&#x22;;}"><div></div></button></div></figure></div>
<p><a href="https://expressive-code.com/" rel="nofollow, noopener, noreferrer" target="_blank">Expressive Code</a> can do a ton more than shown here, and includes a lot of <a href="https://expressive-code.com/reference/configuration/" rel="nofollow, noopener, noreferrer" target="_blank">customisation</a>.</p>
<h2 id="tables">Tables</h2>





















<table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>path to data files to supply the data that will be passed into templates.</td></tr><tr><td>engine</td><td>engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td>ext</td><td>extension to be used for dest files.</td></tr></tbody></table>
<p>Right aligned columns</p>





















<table><thead><tr><th align="right">Option</th><th align="right">Description</th></tr></thead><tbody><tr><td align="right">data</td><td align="right">path to data files to supply the data that will be passed into templates.</td></tr><tr><td align="right">engine</td><td align="right">engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td align="right">ext</td><td align="right">extension to be used for dest files.</td></tr></tbody></table>
<h2 id="images">Images</h2>
<p>Image in the same folder: <code>src/content/post/markdown-elements/logo.png</code></p>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;./logo.png&#x22;,&#x22;alt&#x22;:&#x22;Astro theme cactus logo&#x22;,&#x22;index&#x22;:0}">
<p>Image in the aliased assets folder: <code>src/assets/about-astro.png</code></p>
<img __ASTRO_IMAGE_="{&#x22;src&#x22;:&#x22;@/assets/about-astro.png&#x22;,&#x22;alt&#x22;:&#x22;A cartoon cactus looking at the Astro.build logo&#x22;,&#x22;index&#x22;:0}">
<h2 id="links">Links</h2>
<p><a href="https://markdown-it.github.io/" rel="nofollow, noopener, noreferrer" target="_blank">Content from markdown-it</a></p>
<section data-footnotes="" class="footnotes"><h2 class="" id="footnote-label">Footnotes</h2>
<ol>
<li id="user-content-fn-1">
<p>Reference first footnote with a return to content link. <a href="#user-content-fnref-1" data-footnote-backref="" aria-label="Back to reference 1" class="data-footnote-backref">↩</a></p>
</li>
<li id="user-content-fn-2">
<p>Second reference with a link. <a href="#user-content-fnref-2" data-footnote-backref="" aria-label="Back to reference 2" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`),x={title:"A post of Markdown elements",description:"This post is for testing and listing a number of different markdown elements",publishDate:"22 Feb 2023",updatedDate:"22 Jan 2024",tags:["test","markdown"],draft:!0,minutesRead:"2 min read"},y="/home/runner/work/blog/blog/src/content/post/markdown-elements/index.md",k=void 0;function H(){return`
## This is a H2 Heading

### This is a H3 Heading

#### This is a H4 Heading

##### This is a H5 Heading

###### This is a H6 Heading

## Horizontal Rules

---

---

---

## Emphasis

**This is bold text**

_This is italic text_

~~Strikethrough~~

## Quotes

"Double quotes" and 'single quotes'

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...

## References

An example containing a clickable reference[^1] with a link to the source.

Second example containing a reference[^2] with a link to the source.

[^1]: Reference first footnote with a return to content link.
[^2]: Second reference with a link.

If you check out this example in \`src/content/post/markdown-elements/index.md\`, you'll notice that the references and the heading "Footnotes" are added to the bottom of the page via the [remark-rehype](https://github.com/remarkjs/remark-rehype#options) plugin.

## Lists

Unordered

- Create a list by starting a line with \`+\`, \`-\`, or \`*\`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\`js
var foo = function (bar) {
	return bar++;
};

console.log(foo(5));
\`\`\`

### Expressive code examples

Adding a title

\`\`\`js title="file.js"
console.log("Title example");
\`\`\`

A bash terminal

\`\`\`bash
echo "A base terminal example"
\`\`\`

Highlighting code lines

\`\`\`js title="line-markers.js" del={2} ins={3-4} {6}
function demo() {
	console.log("this line is marked as deleted");
	// This line and the next one are marked as inserted
	console.log("this is the second inserted line");

	return "this line uses the neutral default marker type";
}
\`\`\`

[Expressive Code](https://expressive-code.com/) can do a ton more than shown here, and includes a lot of [customisation](https://expressive-code.com/reference/configuration/).

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Images

Image in the same folder: \`src/content/post/markdown-elements/logo.png\`

![Astro theme cactus logo](./logo.png)

Image in the aliased assets folder: \`src/assets/about-astro.png\`

![A cartoon cactus looking at the Astro.build logo](@/assets/about-astro.png)

## Links

[Content from markdown-it](https://markdown-it.github.io/)
`}function _(){return p}function T(){return[{depth:2,slug:"this-is-a-h2-heading",text:"This is a H2 Heading"},{depth:3,slug:"this-is-a-h3-heading",text:"This is a H3 Heading"},{depth:4,slug:"this-is-a-h4-heading",text:"This is a H4 Heading"},{depth:5,slug:"this-is-a-h5-heading",text:"This is a H5 Heading"},{depth:6,slug:"this-is-a-h6-heading",text:"This is a H6 Heading"},{depth:2,slug:"horizontal-rules",text:"Horizontal Rules"},{depth:2,slug:"emphasis",text:"Emphasis"},{depth:2,slug:"quotes",text:"Quotes"},{depth:2,slug:"blockquotes",text:"Blockquotes"},{depth:2,slug:"references",text:"References"},{depth:2,slug:"lists",text:"Lists"},{depth:2,slug:"code",text:"Code"},{depth:3,slug:"expressive-code-examples",text:"Expressive code examples"},{depth:2,slug:"tables",text:"Tables"},{depth:2,slug:"images",text:"Images"},{depth:2,slug:"links",text:"Links"},{depth:2,slug:"footnote-label",text:"Footnotes"}]}const B=h((a,e,i)=>{const{layout:t,...n}=x;return n.file=y,n.url=k,g`${u()}${f(p)}`});export{B as Content,_ as compiledContent,B as default,y as file,x as frontmatter,T as getHeadings,H as rawContent,k as url};
