const n="tv-skill.md",t="post",a="tv-skill",e=`
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
`,s={title:"通过adb给电视安装任意应用",description:"很多电视都不给用户安装预装的应用市场外的应用，而且这个应用市场内的应用数量稀少无法满足用户的需要。通过一点开发技巧可以实现安装任意apk",publishDate:new Date(17103744e5),draft:!1,tags:["生活","技巧"]},l={type:"content",filePath:"/home/runner/work/blog/blog/src/content/post/tv-skill.md",rawData:`
title: "通过adb给电视安装任意应用"
publishDate: "14 Mar 2024"
description: "很多电视都不给用户安装预装的应用市场外的应用，而且这个应用市场内的应用数量稀少无法满足用户的需要。通过一点开发技巧可以实现安装任意apk"
tags: ["生活", "技巧"]`};export{l as _internal,e as body,t as collection,s as data,n as id,a as slug};
