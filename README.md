<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/RyaraSUKI/MyGoEveryday">
    <img src="img/mygoe_logo.png" alt="Logo" width="auto" height="auto">
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
- [更新日志](#更新日志)
- [使用说明](#使用说明)
- [编译说明](#编译说明)
- [待办项目](#待办项目)
- [引用与鸣谢](#引用与鸣谢)

## 简介



## 贡献者

初创：RyaraSUKI

## 版权声明

- [点击查看](https://github.com/RyaraSUKI/MyGoEveryday/blob/master/LICENSE.md)

## 更新记录

- [点击查看](https://github.com/RyaraSUKI/MyGoEveryday/blob/master/UPDATE.md)

## 使用说明

- 你可以直接前往[github-pages]游玩已部署的最新版，如果你要下载本地版或历史版本，请前往[Releases](https://github.com/RyaraSUKI/MyGoEveryday/releases)

**格式说明：**
- apk：安卓软件安装包，可自行安装，本项目完全安全无风险
- exe：Windows可执行文件，可自行双击运行
- zip：包含html和资源文件夹，下载后请解压，确保html文件和资源文件夹在同一文件夹内，请使用任意**现代浏览器**打开html

## 编译说明
**欢迎各位大佬参与本项目贡献！**
- 如果你熟悉Twine的操作方式，要修改本项目，你可以直接将最新版的_index-orig.html_导入Twine软件中
- 请不要直接导入发布版带有Modloader的html，Twine2软件将会报错，请直接前往[仓库master分支]或[Release]下载[原版html]

**tweego编译原版html**

> tweego是Twine引擎网页游戏的命令行编译工具，可以将分散的文件编译成html

如果有命令行及web开发基础，强烈推荐使用这个工具进行开发

以下提供使用tweego的编译说明（以Linux为例）：
1. 前往[tweego官方网站](https://www.motoslave.net/tweego/)或[tweego的仓库](https://github.com/tmedwards/tweego)下载最新版 tweego，注意选择自己系统的版本
2. 前往[本仓库开发工具中](https://github.com/RyaraSUKI/MyGoEveryday/blob/master/devtools/storyformats)下载MyGo Everyday !!!!! 专用修改版Sugarcube2故事格式，然后将全部文件放置/替换在
```
你的项目/tweego/storyformats/sugarcube-2/
```
3. 编译HTML文件，-o 为发布编译，-t 为调试模式编译，具体参数参见[tweego文档](https://www.motoslave.net/tweego/docs/)
- 注意，只需编译" game/ "即可，否则将连同图片字体等资源文件一起编译导致html容量剧增！
```
tweego -o mygoeveryday根文件夹/game/
```
**注入Modloader**
> 由ModLoadet提供的[文档](https://github.com/Lyoko-Jeremie/sugarcube-2-ModLoader) 

『迷子们的每一天 !!!!!』使用SugarCube2故事格式，可以接入SC2模组加载器
注入前，请确保HTML原文件使用了[修改版的SugarCube2格式编译](https://github.com/RyaraSUKI/MyGoEveryday/blob/master/devtools/storyformats)

下面提供注入Modloader的步骤（以Linux为例）：
1. 请自行配置好 **NodeJs环境** ，请从ModLoader/actions下载预编译版ModLoader：[ModLoader/actions](https://github.com/Lyoko-Jeremie/sugarcube-2-ModLoader/actions)
2. 解压，把你的HTML文件复制到
```
ModLoader_Package/
```
3. 由于基于原版SugarCube2的网页并不具备某些ModLoader为DoL定制的功能，故需要修改modList.json，去除某些内置组件，这里提供一份保留最低限度基础功能的组合：
```
[
  "mod/ModLoaderGui/ModLoaderGui.mod.zip",
  "mod/ConflictChecker/ConflictChecker.mod.zip",
  "mod/ModSubUiAngularJs/ModSubUiAngularJs.mod.zip",
  "mod/TweeReplacerLinker/TweeReplacerLinker.mod.zip",
  "mod/TweeReplacer/TweeReplacer.mod.zip",
  "mod/I18nTweeReplacer/I18nTweeReplacer.mod.zip",
  "mod/I18nTweeList/I18nTweeList.mod.zip",
  "mod/I18nScriptList/I18nScriptList.mod.zip",
  "mod/ReplacePatch/ReplacePatcher.mod.zip",
  "mod/TweePrefixPostfixAddon/TweePrefixPostfixAddon.mod.zip",
  "mod/Diff3WayMerge/Diff3WayMerge.mod.zip",
  "mod/SweetAlert2Mod/SweetAlert2Mod.mod.zip",
]
```
4. 运行node命令编译mod版HTML，例如
```
node dist-insertTools/insert2html.js MyGoEveryday.html modList.json dist-BeforeSC2/BeforeSC2.js
```
5. 恭喜！mod版HTML编译成功！现在可以进行测试

**打包**

一个完整的发布包应该包含：
- img/
- fonts/
- 主文件.html


**其余的建议**
- 推荐使用VSC进行编辑，有一个[适配twee文件的插件](https://marketplace.visualstudio.com/items?itemName=cyrusfirheir.twee3-language-tools)推荐下载

## 待办项目
- [X] 最初的起点
- [ ] 继续优化ui装修
- [ ] 加入换装系统
- [ ] 加入互动游戏
- [ ] 加入商店系统
- [ ] 丰富网页内容
- [ ] 存档系统更新

## 引用与鸣谢

> 以下是『迷子们的每一天 !!!!!』完整的引用列表，感谢所有提供支持的开源项目贡献者的无私奉献！

- [点击查看](https://github.com/RyaraSUKI/MyGoEveryday/blob/master/USEDLIBS.md)

**特别鸣谢**

- 感谢[Sguarcube2群代码整合](https://www.yuque.com/u45355763/twine)热心群友们的帮助！
- 感谢[Modloader](https://github.com/Lyoko-Jeremie/sugarcube-2-ModLoader)，不止为DoL社区贡献了如此强大的模组加载器，也为SugarCube2社区提供了扩展新方法
- 感谢[GitHub Pages](https://pages.github.com)提供网页托管！

<br>
<p align="center">[<a href="#top">返回顶部</a>]</p>