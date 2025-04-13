# ModLoader

- 请不要直接导入发布版带有Modloader的html，Twine2软件将会报错，请直接前往[仓库master分支](https://github.com/RyaraSUKI/MyGoEveryday/tree/master)或[Release](https://github.com/RyaraSUKI/MyGoEveryday/releases)下载[原版html](https://github.com/RyaraSUKI/MyGoEveryday/tree/master/index.html)

## **注入Modloader**
> 由ModLoadet提供的文档在[这里](https://github.com/Lyoko-Jeremie/sugarcube-2-ModLoader) 

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

### ModLoader将会在正式版中使用