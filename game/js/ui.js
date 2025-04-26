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