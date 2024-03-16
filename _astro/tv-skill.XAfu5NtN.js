import{c as n,r as e,m as t}from"./render-template.BjMBUGWY.js";import{u as p}from"./hoisted.n1NUkgfZ.js";import"./astro/assets-service.DcMRmNXG.js";const a=`<p>我想在电视上安装个播放器来播放本地 NAS 里面的视频，网上能找到的方案都是特定品牌型号的电视有应用商店或者浏览器，可以自行安装 apk。我家里的两个刚好都没有这种解决方案，于是想到了很早之前调试安卓手机 webview 的时候用过 adb。尝试下确实可行，通过 adb 给电视安装应用流程如下。</p>
<h2 id="安装-adb-工具">安装 adb 工具</h2>
<p>mac 可以使用 brew 安装。如果没有 brew 的话，brew 全称 Homebrew <a href="https://brew.sh/" rel="nofollow, noopener, noreferrer" target="_blank">官网</a>。参考官网安装成功后继续下面的内容。</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.v6sg1.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#50FA7B;--1:#6F42C1">brew</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#F1FA8C;--1:#032F62">install</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#BD93F9;--1:#005CC5">--cask</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#F1FA8C;--1:#032F62">android-platform-tools</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="brew install --cask android-platform-tools"><div></div></button></div></figure></div>
<p>之后命令行可以使用 <strong>adb</strong> 命令了，可以使用 <code>adb version</code> 看看是否安装成功。</p>
<h2 id="电视开启调试模式">电视开启调试模式</h2>
<p>首先要允许安装未知来源，一般在安全相关的类目下。打开这个后才可以安装非应用市场的 apk 了。</p>
<p>第二要开启开发者模式，在设置里面如果没有找到，试试多次点击电视型号或者安卓版本号可以让这个选项露出来，一般点击 10 次以内，会有 toast 提示的，之后打开就可以了。打开这个之后可以通过其他设备来调试这个安卓设备。</p>
<h2 id="连接电视安装-apk">连接电视安装 apk</h2>
<p>确保安装了 <strong>adb</strong> 的电脑与电视在同一个局域网下面。</p>
<p>通过路由器管理页面可以查询到电视的本地 ip，使用下面的命令连接和安装应用。</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#50FA7B;--1:#6F42C1">adb</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#F1FA8C;--1:#032F62">devices</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#96A1C2;--1:#616972"># 查询连接设备列表</span></div></div><div class="ec-line"><div class="code"><span style="--0:#50FA7B;--1:#6F42C1">adb</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#F1FA8C;--1:#032F62">connect</span><span style="--0:#F8F8F2;--1:#24292E"> [电视ip] </span><span style="--0:#96A1C2;--1:#616972"># 连接对应ip的电视</span></div></div><div class="ec-line"><div class="code"><span style="--0:#50FA7B;--1:#6F42C1">adb</span><span style="--0:#F8F8F2;--1:#24292E"> </span><span style="--0:#F1FA8C;--1:#032F62">install</span><span style="--0:#F8F8F2;--1:#24292E"> [**.apk] </span><span style="--0:#96A1C2;--1:#616972"># 安装 apk，确保输入的是正确的 apk 路径</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="adb devices # 查询连接设备列表adb connect [电视ip] # 连接对应ip的电视adb install [**.apk] # 安装 apk，确保输入的是正确的 apk 路径"><div></div></button></div></figure></div>
<p>安装命令执行完过一会应用就安装好了，一般不会出现问题，如果使用中遇到问题，可以谷歌查找 adb 相关命令来帮助排查。</p>`,d={title:"通过adb给电视安装任意应用",publishDate:"14 Mar 2024",description:"很多电视都不给用户安自由安装任意应用的入口，并且自带应用商店能够安装的应用数量有限。通过本文提到的手段(adb)可以应对大部分安卓电视",tags:["生活","技巧"],minutesRead:"3 min read"},i="/home/runner/work/blog/blog/src/content/post/tv-skill.md",l=void 0;function m(){return`
我想在电视上安装个播放器来播放本地 NAS 里面的视频，网上能找到的方案都是特定品牌型号的电视有应用商店或者浏览器，可以自行安装 apk。我家里的两个刚好都没有这种解决方案，于是想到了很早之前调试安卓手机 webview 的时候用过 adb。尝试下确实可行，通过 adb 给电视安装应用流程如下。

## 安装 adb 工具

mac 可以使用 brew 安装。如果没有 brew 的话，brew 全称 Homebrew [官网](https://brew.sh/)。参考官网安装成功后继续下面的内容。

\`\`\`shell
brew install --cask android-platform-tools
\`\`\`

之后命令行可以使用 **adb** 命令了，可以使用 \`adb version\` 看看是否安装成功。

## 电视开启调试模式

首先要允许安装未知来源，一般在安全相关的类目下。打开这个后才可以安装非应用市场的 apk 了。

第二要开启开发者模式，在设置里面如果没有找到，试试多次点击电视型号或者安卓版本号可以让这个选项露出来，一般点击 10 次以内，会有 toast 提示的，之后打开就可以了。打开这个之后可以通过其他设备来调试这个安卓设备。

## 连接电视安装 apk

确保安装了 **adb** 的电脑与电视在同一个局域网下面。

通过路由器管理页面可以查询到电视的本地 ip，使用下面的命令连接和安装应用。

\`\`\`shell
adb devices # 查询连接设备列表
adb connect [电视ip] # 连接对应ip的电视
adb install [**.apk] # 安装 apk，确保输入的是正确的 apk 路径
\`\`\`

安装命令执行完过一会应用就安装好了，一般不会出现问题，如果使用中遇到问题，可以谷歌查找 adb 相关命令来帮助排查。
`}function u(){return a}function f(){return[{depth:2,slug:"安装-adb-工具",text:"安装 adb 工具"},{depth:2,slug:"电视开启调试模式",text:"电视开启调试模式"},{depth:2,slug:"连接电视安装-apk",text:"连接电视安装 apk"}]}const k=n((o,r,c)=>{const{layout:b,...s}=d;return s.file=i,s.url=l,e`${t()}${p(a)}`});export{k as Content,u as compiledContent,k as default,i as file,d as frontmatter,f as getHeadings,m as rawContent,l as url};
