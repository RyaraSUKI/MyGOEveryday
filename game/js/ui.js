// 点击空白区域关闭侧边栏
$(document).on(':passagerender', function () {
	$(document).off('click.uiBarAutoHide');

	$(document).on('click.uiBarAutoHide', function (ev) {
		if (!$('#ui-bar').hasClass('stowed')) {
			if (!$(ev.target).closest('#ui-bar').length) {
				UIBar.stow();
			}
		}
	});
});
// 绑定空格按键收起侧边栏
$(document).on('keydown', function (ev) {
	if (ev.key === 'Escape' && !$('#ui-bar').hasClass('stowed')) {
		UIBar.stow();
	}
});
// 自动存档通知
$(document).on(':passagerender', function() {
    if (tags().includes('autosave')) {
    setup.popout("💾<strong>迷子的日记</strong><br>已完成自动记录！", 3000, "side", "UI.saves()");
    }
});
/*使用js方式实现带hidebar标签的页面则隐藏侧边栏，css已实现，已弃用
$(document).on(':passagerender', _ => {
  if (tags().includes('hidebar')) {
    UIBar.stow().hide();
  }else{
    UIBar.show();
  }
});*/