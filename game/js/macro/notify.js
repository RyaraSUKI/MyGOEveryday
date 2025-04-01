/*原型:Chapel's Notify Macro*/

(function () { var DEFAULT_TIME = 2000; var isCssTime = /\d+m?s$/;

// 创建通知容器
$(document.body).append("<div id='notify-container'></div>");

$(document).on(':notify', function (ev) {
    if (ev.message && typeof ev.message === 'string') {
        ev.message = ev.message.trim();
        
        // 处理类名
        var classList = 'macro-notify ';
        if (ev.class) {
            if (typeof ev.class === 'string') {
                classList += ev.class;
            } else if (Array.isArray(ev.class)) {
                classList += ev.class.join(' ');
            }
        }
        
        // 处理延迟时间
        ev.delay = (typeof ev.delay === 'number' && !Number.isNaN(ev.delay)) ? ev.delay : DEFAULT_TIME;
        
        // 创建新的通知元素
        var $newNotify = $('<div class="notify-item"></div>')
            .addClass(classList)
            .wiki(ev.message);
        
        $('#notify-container').append($newNotify);
        
        // 强制重绘以触发动画
        requestAnimationFrame(() => {
            $newNotify.addClass('open');
        });
        
        // 定时移除通知
        setTimeout(function () {
            $newNotify.addClass('close');
            setTimeout(function () {
                $newNotify.slideUp(300, function () {
                    $(this).remove();
                });
            }, 500);
        }, ev.delay);
    }
});

function notify(message, time, classes) {
    if (typeof message !== 'string') return;
    if (typeof time !== 'number') time = false;
    
    $(document).trigger({
        type: ':notify',
        message: message,
        delay: time,
        class: classes || ''
    });
}

Macro.add('notify', {
    tags: null,
    handler: function () {
        var msg = this.payload[0].contents,
            time = false,
            classes = false;

        if (this.args.length > 0) {
            var cssTime = isCssTime.test(this.args[0]);
            if (typeof this.args[0] === 'number' || cssTime) {
                time = cssTime ? Util.fromCssTime(this.args[0]) : this.args[0];
                classes = (this.args.length > 1) ? this.args.slice(1).flat(Infinity) : false;
            } else {
                classes = this.args.flat(Infinity).join(' ');
            }
        }

        notify(msg, time, classes);
    }
});

setup.notify = notify;

})();

