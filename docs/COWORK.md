> 为更好交流，强烈建议加入讨论群：

## 目录

- [前言](#前言)
- [创作规则](#创作规则)
- [文本贡献](#文本贡献)
- [图像贡献](#图像贡献)
- [代码贡献](#代码贡献)

## 前言

『迷子们的每一天 !!!!!』欢迎所有热爱者的共同创作。
<br><br>
本项目意在建设一个开放包容的二创社区，欢迎各位热爱MyGO!!!!!&Ave Mujica以及BanGDream!的邦邦人参与到创作中，写出自己认可的故事，感受这个企划真正的美好，体会来自初心的快乐。
<br><br>
在开始创作前，请确保你遵守以下规则：

## 创作规则

## 文本贡献

## 图像贡献

## 代码贡献

**欢迎参与本项目贡献！**

- 如果你熟悉Twine的操作方式，要修改本项目，你可以直接将最新版的index.html导入Twine软件中

**tweego编译原版html**

> tweego是Twine引擎网页游戏的命令行编译工具，可以将分散的文件编译成html

如果有命令行及web开发基础，强烈推荐使用这个工具进行开发

以下提供使用tweego的编译说明（以Linux为例）：
1. 前往[tweego官方网站](https://www.motoslave.net/tweego/)或[tweego的仓库](https://github.com/tmedwards/tweego)下载最新版 tweego，注意选择自己系统的版本

2. 前往[本仓库开发工具中](https://github.com/RyaraSUKI/MyGoEveryday/blob/master/docs/devtools/storyformats)下载『MyGo Everyday !!!!! 』专用修改版Sugarcube2故事格式，然后将全部文件放置/替换在
```
你的项目/tweego/storyformats/sugarcube-2/
```

3. 编译HTML文件，-o 为发布编译，-t 为调试模式编译，具体参数参见[tweego文档](https://www.motoslave.net/tweego/docs/)

    - 注意，只需编译" game/ "即可，否则将连同图片字体等资源文件一起编译导致html容量剧增！

```
tweego -o 本项目根文件夹/game/
```

**打包**

- 一个完整的发布包应该包含：
    - img/ (图像资源文件)
    - fonts/ (字体资源文件)
    - index.html (网页主文件)
    - README.md (说明)
    - LICENSE.md (许可)

- 而这些文件只用于开发，不应该被添加到发布包里：
    - docs/ (文档)
    - devtools/ (开发工具)
    - game/ (源码)
    - 以及所有隐藏文件夹

**ModLoader相关**

为扩展网页功能，选择了[ModLoader框架](https://github.com/Lyoko-Jeremie/sugarcube-2-ModLoader)，仍处于测试实验阶段，详见[此处](https://github.com/RyaraSUKI/MyGoEveryday/blob/master/docs/MODLOADER.md)

**其余的建议**

- 推荐使用VSC进行编辑，有一个[适配twee文件的插件](https://marketplace.visualstudio.com/items?itemName=cyrusfirheir.twee3-language-tools)推荐下载