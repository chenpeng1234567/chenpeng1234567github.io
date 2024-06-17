---
id: docusaurus做一个网站
title: docusaurus做一个网站
sidebar_position: 1
---

# 如何利用docusaurus做一个网站

### 1，首先你需要打开docusaurus网站[Docusaurus 中文网 (nodejs.cn)](https://docusaurus.nodejs.cn/)

如果你电脑还没有下载过Nodejs，请先下载。

下载链接为[下载 | Node.js 中文网 (nodejs.cn)](https://nodejs.cn/download/)

在你想要创建网站文件的地址下，右键打开命令行，输入：

```
npx create-docusaurus@latest my-website classic
```

my-website为你文件夹的名称，可以根据自己喜好修改！

当然，你也可以在[Docusaurus 案例展示 | Docusaurus](https://docusaurus.io/zh-CN/showcase)下，选择自己喜欢的示例

你还可以通过传递 `--typescript` 标志来使用模板的 TypeScript 变体。

```
npx create-docusaurus@latest my-website classic --typescript
```

这样你就安装好了

接着在命令行输入

```
cd my-website
npx docusaurus start
```

打开 [`http://localhost:3000`](http://localhost:3000/) 



## 2，运行开发服务器

```
cd my-website
npm run start
```

默认情况下，浏览器窗口将在 [`http://localhost:3000`](http://localhost:3000/) 打开。

构建

```
npm run build
```

然后，你将my-website整个文件夹用vscode打开

在vscode文件下，你将进行你想要的修改

> 本篇文章受 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议保护，转载请注明出处。