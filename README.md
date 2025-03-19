<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/RyaraSUKI/MyGoEveryday">
    <img src="img/mygoe_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">迷子们的每一天 !!!!!</h2>
  <h3 align="center">MyGo Everyday !!!!!</h3>
  <p align="center">  
一个基于BanGDream！世界观的二次创作文字互动网页，主体部分使用Sugarcube2完成，原创代码部分遵从 [MIT LICENSE] 开源许可，原创文字、图像等遵从 [CC BY-NC-SA 4.0] 协议    
    <br />
    <br />
    <a href="https://github.com/RyaraSUKI/MyGoEveryday"><strong>游玩网页版 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/RyaraSUKI/MyGoEveryday/releases/latest">最新发布版</a>
    ·
    <a href="https://github.com/RyaraSUKI/MyGoEveryday/issues">反馈Bug</a>
    ·
    <a href="https://github.com/RyaraSUKI/MyGoEveryday/issues">提议新功能</a>
  </p>
</div>
 
## 目录

- [简介](#简介)
- [贡献者](#贡献者)
- [版权声明](#版权声明)
- [使用说明](#使用说明)
- [编译说明](#编译说明)
- [待办项目](#待办项目)
- [更新日志](#更新日志)
- [引用与鸣谢](#引用与鸣谢)

### 简介



### 贡献者

初创：RyaraSUKI

### 版权声明

**本项目系粉丝二次创作，与官方无关，仅供学习和研究，修改内容不得用于商业用途。**

本项目基于BanGDream!世界观创作，相关角色、设定版权等归属Bushiroad所有

本项目为文字互动网页，不含完整游戏性

本项目中的代码部分采用 [MIT LICENSE] 许可，原创素材（包括但不限于文本，图像等）采用 [CC BY-NC-SA 4.0] 协议。

### 使用说明

- 你可以直接前往[github-pages]游玩已部署的最新版，如果你要下载本地版或历史版本，请前往[Releases](https://github.com/RyaraSUKI/MyGoEveryday/releases)

---
格式说明：
- apk：安卓软件安装包，可自行安装，本项目完全安全无风险
- exe：Windows可执行文件，可自行双击运行
- zip：包含html和资源文件夹，下载后请解压，确保html文件和资源文件夹在同一文件夹内，请使用任意**现代浏览器**打开html

### 编译说明
欢迎各位大佬参与本项目贡献！
- 如果你熟悉Twine的操作方式，要修改本项目，你可以直接将最新版的index.html导入Twine软件中
- 而tweego是Twine引擎网页游戏的命令行编译工具，可以将分散的文件编译成html

以下提供使用tweego的编译说明：
1. 前往[tweego官方网站](https://www.motoslave.net/tweego/)或[tweego的仓库](https://github.com/tmedwards/tweego)下载最新版 tweego，注意选择自己系统的版本
2. 前往[Sugarcube2官方网站](https://www.motoslave.net/sugarcube/2/)或[Sugarcube2的仓库](https://github.com/tmedwards/sugarcube-2)下载最新版Sugarcube2故事格式（请下载本地版本，如sugarcube-2.37.3-for-twine-2.1-local.zip），然后将解压的文件放置/替换在
```
你的项目/tweego文件夹/storyformats/sugarcube-2/
```
3. 编译命令，-o 为发布编译，-t 为调试模式编译，具体参数参见[tweego文档](https://www.motoslave.net/tweego/docs/)（只需编译game/即可，否则将连同图片字体等资源文件一起编译导致html容量剧增！）
```
tweego -o 你的项目/mygoeveryday根文件夹/game/
```
4. 推荐使用VSC进行编辑，有一个[适配twee文件的插件](https://marketplace.visualstudio.com/items?itemName=cyrusfirheir.twee3-language-tools)推荐下载

### 待办项目
- [X] 最初的起点
- [ ] 继续优化ui装修
- [ ] 加入换装系统
- [ ] 加入互动游戏
- [ ] 加入商店系统
- [ ] 丰富网页内容

### 更新记录

- [点击查看](https://github.com/RyaraSUKI/MyGoEveryday/blob/master/update.md)

### 引用与鸣谢

> 『迷子们的每一天 !!!!!』的主体引擎、编译工具和组件库使用了以下项目，在此表示感谢！

- [Twine](https://twinery.org/)
- [Sugarcube2](https://github.com/tmedwards/sugarcube-2)
- [Tweego](https://github.com/tmedwards/tweego)
- [sobar.js](https://soberjs.com/)

> 像素字体使用了unifont点阵字体，遵守GNU General Public协议
- [Unifont](https://unifoundry.com/unifont/index.html)

> 同时，本项目也参考或引用了下列项目的全部或部分内容，在此表示感谢！

- [Animate.css](https://daneden.github.io/animate.css)
- [jQuery](https://jquery.com/)
- [Best README Template](https://github.com/shaojintian/Best_README_template)
- [Chapel's Custom Macro Collection](https://github.com/ChapelR/custom-macros-for-sugarcube-2)
- [Twine 2 / SugarCube 2 Sample Code byHiEv](https://hiev-heavy-ind.com/Sample_Code/Sample_Code.html)
- [100% Good Twine Sugarcube Templates](https://manonamora.itch.io/twine-sugarcube-templates)

> 特别鸣谢

- 感谢[B站熔岩泡芙](https://b23.tv/2YHc679)以及热心群友们的帮助！
- 感谢[GitHub Pages](https://pages.github.com)提供网页托管！

<br>
<p align="center">[<a href="#top">返回顶部</a>]</p>