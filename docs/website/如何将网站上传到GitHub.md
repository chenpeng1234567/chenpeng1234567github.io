---
id: 如何将网站上传到GitHub
title: 如何将网站上传到GitHub
sidebar_position: 2
---

### 1，Github创建repository

如果你没有github账号，那就先创建一个，github处于半墙状态，建议先找到有效处理DNS的办法。

如果你已有GitHub账号，那就直接新建一个New repository。

![ ](.\img\1.png)

然后，在Name里面输入名字，最好是yougithubname+github.io

![ ](.\img\2.png)

其他的不用管，建议添加一个readme

![ ](.\img\3.png)

直接点击创建，然后你GitHub会有一个空白的repository

### 2，docusaurus的配置

**docusaurus** 与我们熟知的静态网页不太一样，因为它的源代码并不是我们熟知的静态网页的模样，他还要使用下面的 `npm` 代码来完成打包这件事：

```
npm run build
```

完成这件事后，项目的根目录会出现一个 `build` 文件夹，这里面的内容就是我们熟知的打包后生成的原生 `html` 文件。

在这个文件夹中， `index.js` 就是项目入口文件，可以直接 `open with live server` 在浏览器运行。



### 3,push到你的github

这有很多方法：

1，git bash可以直接通过命令行push上去·1

2，vscode里面有插件可以进行

3，github desktop可以简单的管理

......

我用的是第三种，首先你需要下载一个github desktop

下载地址：[GitHub Desktop | Simple collaboration from your desktop](https://desktop.github.com/)

这个软件安装包exe文件是直接确定路径，所以打开exe文件就可以用。

![ ](.\img\4.png)

点击clone repository

选中你刚刚新建的repository

![ ](.\img\5.png)

你要创建一个上传的文件夹，把你网站里的文件复制进去，node_modules文件可以不需要。

![ ](.\img\6.png)

你把这些changes都commit to main上去，最后是第三步，在github desktop上有Fetch origin，你点击一下，这样你的网站文件就上传到GitHub上了。

> 本篇文章受 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议保护，转载请注明出处。