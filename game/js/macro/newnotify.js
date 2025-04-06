/* 原型:Chapel's Notify Macro，RyaraSUKI改造分支 */

(function() {
    var DEFAULT_TIME = 2000; // 通知显示时间（毫秒）
    var isCssTime = /\d+m?s$/; // 判断css时间格式（分钟/秒）
    var QUEUE_DELAY = 150; // 每条通知弹出的间隔（毫秒）

 /* 通知队列部分 */
    // 用来保存等待弹出的通知消息，并非空值
    var notifyQueue = [];
    // 标记当前是否有通知正在显示中（避免重复执行队列）
    var isNotifying = false;

/* 通知主体部分 */
    // 创建通知容器
    $(document.body).append("<div id='notify-container'></div>");

    // 处理通知队列，逐条显示通知
    function processQueue() {
        // 队列为空时停止显示
        if (notifyQueue.length === 0) {
            isNotifying = false;
            return;
        }

        isNotifying = true;
        var ev = notifyQueue.shift(); // 有通知则取出队列中第一条通知显示

        // 通知样式类名
        var classList = 'macro-notify ';
        if (ev.class) {
            if (typeof ev.class === 'string') {
                classList += ev.class;
            } else if (Array.isArray(ev.class)) {
                classList += ev.class.join(' ');
            }
        }

        // 检查并设置通知显示时间
        ev.delay = (typeof ev.delay === 'number' && !Number.isNaN(ev.delay)) ? ev.delay : DEFAULT_TIME;

        // 创建通知元素并设置内容与样式
        var $newNotify = $('<div class="notify-item"></div>')
            .addClass(classList)
            .wiki(ev.message);

        // 添加通知元素到容器里面
        $('#notify-container').append($newNotify);

        // 确保入场动画效果生效，这里利用了GPT帮忙（
        void $newNotify[0].offsetWidth;

        // 入场动画
        setTimeout(() => {
            $newNotify.addClass('open');
        }, 20);

        // 退场动画
        setTimeout(function() {
            $newNotify.addClass('close');
            setTimeout(function() {
                // 退场动画结束后向上滑动
                $newNotify.slideUp(300, function() {
                    $(this).remove();
                });
            }, 500);
        }, ev.delay);

        // 设置下一个通知的弹出时间
        setTimeout(processQueue, QUEUE_DELAY);
    }

    // 监听:notify事件，添加通知到队列中
    $(document).on(':notify', function(ev) {
        if (ev.message && typeof ev.message === 'string') {
            ev.message = ev.message.trim(); // 除掉空格
            notifyQueue.push(ev); // 添加到队列
            if (!isNotifying) {
                processQueue(); // 如果没有正在进行的通知，则开始处理队列
            }
        }
    });

    // 通知触发函数，拿来调用
    function notify(message, time, classes) {
        if (typeof message !== 'string') return;
        if (typeof time !== 'number') time = false;

        // 触发:notify事件
        $(document).trigger({
            type: ':notify',
            message: message,
            delay: time,
            class: classes || ''
        });
    }

    /* SugarCube2宏配置部分 */
    // 用法：<<notify 持续时间，单位s>> 内容 <</notify>>
    Macro.add('notify', {
        tags: null,
        handler: function() {
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