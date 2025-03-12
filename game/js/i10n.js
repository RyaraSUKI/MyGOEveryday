(function () {
	/* General. */
	l10nStrings.identity = '游戏';
	l10nStrings.aborting = '终止';
	l10nStrings.textCancel   = '取消';
	l10nStrings.textClose    = '关闭';
	l10nStrings.textOk       = '确认';
  l10nStrings.textSave = '保存';
  l10nStrings.textExport = '导出';
	l10nStrings.textIdentity = '游戏';

	l10nStrings.textImport = '导入';

	l10nStrings.textLoad = '加载';
  l10nStrings.textClear = '清除';


	/* Errors. */
	l10nStrings.errorTitle              = '错误';
	l10nStrings.errorNonexistentPassage = '段落"{passage}"不存在';
	l10nStrings.errorSaveMissingData    = '存档缺少必须的数据，可能被读取的文件不是存档或者存档被损坏';
	l10nStrings.errorSaveIdMismatch     = '保存{identity}是错误的';

	/* Warnings. */
	l10nStrings._warningIntroLacking  = '你的浏览器可能损坏或者被禁用';
	l10nStrings._warningOutroDegraded = '，所以{identity}在受限制模式中运行。你可以继续运行，但是一些内容可能不能正确工作。';
	l10nStrings.warningNoWebStorage   = '{_warningIntroLacking} Web Storage API {_warningOutroDegraded}';
	l10nStrings.warningDegraded       = '{_warningIntroLacking} {identity}需要的功能 {_warningOutroDegraded}';

	/* Debug View. */
	l10nStrings.debugViewTitle  = '调试模式';
	l10nStrings.debugViewToggle = '切换调试模式';

	/* UI bar. */
	l10nStrings.uiBarLabelToggle   = '打开/关闭导航栏';
	l10nStrings.uiBarLabelBackward = '后退';
	l10nStrings.uiBarLabelForward  = '前进';
	l10nStrings.uiBarLabelJumpto   = '跳到{identity}的历史记录中的某一点';

	/* Jump To. */
	l10nStrings.jumptoTitle       = '跳到';
	l10nStrings.jumptoTurn        = '转到';
	l10nStrings.jumptoUnavailable = '目前没有跳跃点\u2026';

	/* Saves. */
	l10nStrings.savesTitle       = '存档';
	l10nStrings.savesDisallowed  = '在这个段落中不允许存档';
	l10nStrings.savesEmptySlot   = '\u2014 插槽空 \u2014';
	l10nStrings.savesIncapable   = '{_warningIntroLacking}支持存档所需的功能，因此本次游戏的存档功能已被禁用';
	l10nStrings.savesLabelAuto   = '自动存档';
	l10nStrings.savesLabelDelete = '删除';
	l10nStrings.savesLabelExport = '另存为\u2026';
	l10nStrings.savesLabelImport = '读取\u2026';
	l10nStrings.savesLabelDiskLoad   = '读取';
	l10nStrings.savesLabelDiskClear  = '全部删除';
	l10nStrings.savesLabelSave   = '保存';
	l10nStrings.savesLabelBrowserSlot   = '插槽';
	l10nStrings.savesSavedOn     = '保存在：';
	l10nStrings.savesUnavailable = '未找到存档插槽\u2026';
	l10nStrings.savesUnknownDate = '未知';
  
  	l10nStrings.continueTitle = '继续';

	l10nStrings.savesTitle = '存档';

	l10nStrings.savesHeaderBrowser = '应用';

	l10nStrings.savesHeaderDisk = '磁盘';

	l10nStrings.savesLabelBrowserClear = '清除所有存档';

	l10nStrings.savesLabelBrowserExport = '导出存档至';

	l10nStrings.savesLabelBrowserImport = '导入存档';

	l10nStrings.savesLabelDiskLoad = '导入存档';

	l10nStrings.savesLabelDiskSave = '导出存档';

	l10nStrings.savesTextBrowserAuto = '自动';

	l10nStrings.savesTextBrowserSlot = '存档槽';

	l10nStrings.savesTextNoDate = '未知日期';

	/* Settings. */
	l10nStrings.settingsTitle = '设置';
	l10nStrings.settingsOff   = '关闭';
	l10nStrings.settingsOn    = '开启';
	l10nStrings.settingsTextReset = '重置为默认值';

	/* Restart. */
	l10nStrings.restartTitle  = '重新开始';
	l10nStrings.restartMesgPrompt = '你确定要重新开始吗？未保存的进度将会丢失。';

	/* Share. */
	l10nStrings.shareTitle = '分享';

	/* Autoload. */
	l10nStrings.autoloadTitle  = '自动保存';
	l10nStrings.autoloadCancel = '前往最初的段落';
	l10nStrings.autoloadOk     = '读取自动存档';
	l10nStrings.autoloadPrompt = '有一个自动存档，读取它还是前往最初的段落？';

	/* Macros. */
	l10nStrings.macroBackText   = '返回';
	l10nStrings.macroReturnText = '返回';
})();
