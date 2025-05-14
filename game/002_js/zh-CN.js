/***********************************************************************************************************************

	locale/zh-CN.js – 简体中文

	Localization by: Alt236679.
	Edited by: RyaraSUKI , For MyGo Everyday !!!!!

	Copyright © 2017–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

	For more information about the guidelines used to create this localization, see:
		http://www.motoslave.net/sugarcube/2/docs/#guide-localization

***********************************************************************************************************************/
/* global l10nStrings */
/* eslint-disable strict */

(function () {
	/*******************************************************************************
		General.
	*******************************************************************************/

	l10nStrings.textAbort = '中止';

	l10nStrings.textAborting = '操作中止';

	l10nStrings.textCancel = '取消';

	l10nStrings.textClear = '清空';

	l10nStrings.textClose = '关闭';

	l10nStrings.textDelete = '删除';

	l10nStrings.textExport = '导出';

	// In lowercase, if possible.
	l10nStrings.textIdentity = '游戏';

	l10nStrings.textImport = '导入';

	l10nStrings.textLoad = '加载';

	l10nStrings.textOff = '关闭';

	l10nStrings.textOk = '确定';

	l10nStrings.textOn = '开启';

	l10nStrings.textSave = '记录';

	// (noun) chance to act (in a game), moment, period
	l10nStrings.textTurn = '迷子的某个记忆';


	/*******************************************************************************
		Errors.
	*******************************************************************************/

	// NOTE: `passage` is supplied locally.
	l10nStrings.errorNonexistentPassage = '片段"{passage}"不存在';


	/*******************************************************************************
		Warnings.
	*******************************************************************************/

	l10nStrings.warningNoStorage = '提供存储功能的API缺失。可能是由于第三方Cookie设置被禁用（这也会影响Web Storage API），或处于隐私浏览模式。';

	l10nStrings.warningNoWebStorage = 'Web Storage API缺失，因此该{textIdentity}在降级模式下运行。你可以继续，但一些部分可能无法正常工作。';

	l10nStrings.warningDegraded = '某些支持该{textIdentity}所需的功能缺失，因此运行于降级模式下。你可以继续，但一些部分可能无法正常工作。';

	l10nStrings.warningNoSaves = '某些支持保存所需的功能缺失，因此在本次会话中已禁用存档。';


	/*******************************************************************************
		API: Save.
	*******************************************************************************/

	l10nStrings.saveErrorDisallowed = '现在还不能写下迷子的日记……';

	l10nStrings.saveErrorDecodeFail = '无法阅读这个迷子的日记，该日记可能已经损坏';

	l10nStrings.saveErrorDiskLoadFail = '读取迷子的日记失败！';

	l10nStrings.saveErrorIdMismatch = '这不是迷子们的记忆！';

	l10nStrings.saveErrorInvalidData = '缺少这个迷子的数据，该日记可能已经损坏';

	l10nStrings.saveErrorNonexistent = '这个日记不存在……';


	/*******************************************************************************
		Base UI.
	*******************************************************************************/

	l10nStrings.uiBarLabelToggle = '展开/收起UI栏';

	l10nStrings.uiBarLabelBackward = '在{textIdentity}迷子记录中后退';

	l10nStrings.uiBarLabelForward = '在{textIdentity}迷子记录中前进';

	// [DEPRECATED]
	l10nStrings.uiBarLabelJumpto = '回忆至{textIdentity}迷子记录中的某一点';


	/*******************************************************************************
		Dialog: Alert.
	*******************************************************************************/

	l10nStrings.alertTitle = '提示';


	/*******************************************************************************
		Dialog: Restart.
	*******************************************************************************/

	l10nStrings.restartTitle = '迷子们的再出发';

	l10nStrings.restartMesgPrompt = '<strong>“让我们在这里重新出发吧——”</strong><br><br>点击确定以返回到主页面，所有未记录到日记里的内容都将消失——<br><br>确定要重新载入并回到主页面吗？';


	/*******************************************************************************
		Dialog: Saves.
	*******************************************************************************/

	l10nStrings.continueTitle = '继续';

	l10nStrings.savesTitle = '迷子们的日记本';

	l10nStrings.savesHeaderBrowser = '浏览器内的日记';

	l10nStrings.savesHeaderDisk = '本地的日记';

	l10nStrings.savesLabelBrowserClear = '清空浏览器里迷子的日记';

	l10nStrings.savesLabelBrowserExport = '导出浏览器内日记为bundle';

	l10nStrings.savesLabelBrowserImport = '从bundle导入浏览器日记';

	l10nStrings.savesLabelDiskLoad = '从本地加载日记';

	l10nStrings.savesLabelDiskSave = '保存日记至本地';

	l10nStrings.savesTextBrowserAuto = '自动记录';

	l10nStrings.savesTextBrowserSlot = '日记本';

	l10nStrings.savesTextNoDate = '未知时间';


	/*******************************************************************************
		Dialog: Settings.
	*******************************************************************************/

	l10nStrings.settingsTitle = '迷子们的北极星';

	l10nStrings.settingsTextReset = '重置为默认';


	/*******************************************************************************
		Debugging: Error Views.
	*******************************************************************************/

	l10nStrings.errorViewTitle = '错误！';

	l10nStrings.errorViewLabelToggle = '展开/收起错误视图';


	/*******************************************************************************
		Debugging: Debug bar.
	*******************************************************************************/

	l10nStrings.debugBarLabelToggle = '展开/收起调试栏';

	l10nStrings.debugBarLabelViewsToggle = '展开/收起调试视图';

	l10nStrings.debugBarLabelWatchAdd = '添加监视';

	l10nStrings.debugBarLabelWatchAll = '监视所有变量';

	l10nStrings.debugBarLabelWatchClear = '清空所有监视';

	l10nStrings.debugBarLabelWatchDelete = '删除该监视';

	l10nStrings.debugBarLabelWatchPlaceholder = '变量名称';

	l10nStrings.debugBarLabelPassagePlaceholder = '段落名称';

	l10nStrings.debugBarLabelPassagePlay = '播放段落';

	l10nStrings.debugBarLabelWatchToggle = '展开/收起监视面板';

	l10nStrings.debugBarMesgNoWatches = '没有设置监视';

	l10nStrings.debugBarTextAdd = '添加';

	l10nStrings.debugBarTextPassage = '段落';

	l10nStrings.debugBarTextViews = '视图';

	l10nStrings.debugBarTextWatch = '监视';


	/*******************************************************************************
		Macros.
	*******************************************************************************/

	// (verb) rewind, revert
	l10nStrings.macroBackText = '回退';

	// (verb) go/send back
	l10nStrings.macroReturnText = '前进';


	/*******************************************************************************
		[DEPRECATED] Dialog: Autoload.
	*******************************************************************************/

	l10nStrings.autoloadTitle = '读取自动记录';

	l10nStrings.autoloadMesgPrompt = '检测到自动记录。是加载该记录，还是从头开始？';

	l10nStrings.autoloadTextCancel = '从头开始';

	l10nStrings.autoloadTextOk = '加载记录';


	/*******************************************************************************
		[DEPRECATED] Dialog: Jump To.
	*******************************************************************************/

	l10nStrings.jumptoTitle = '跳转至';

	l10nStrings.jumptoMesgUnavailable = '当前无可用跳转点\u2026';


	/*******************************************************************************
		[DEPRECATED] Dialog: Share.
	*******************************************************************************/

	l10nStrings.shareTitle = '分享';
})();
