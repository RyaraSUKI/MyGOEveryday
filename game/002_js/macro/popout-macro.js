/**
 * Popout-Macro v1.0.3 - 弹窗通知系统
 * By RyaraSUKI
 * 合并了改造版的 Chapel's notify macro，原 notify 作为 popout 的 "side" 属性，
 * 但原 notify 的宏和接口仍保持兼容
 * @version 1.0.3
 */
(function () {
    /** @constant {number} 默认显示时间（毫秒） */
    const DEFAULT_DURATION = 2000;
    /** @constant {number} side 类型通知的队列间隔时间（毫秒） */
    const QUEUE_DELAY = 150;

    // 初始化容器
    const $topContainer = $('<div id="popout-container" class="top"></div>');
    const $bottomContainer = $('<div id="popout-container" class="bottom"></div>');
    $(document.body).append($topContainer, $bottomContainer);

    // side 样式容器（原 notify）
    const $sideContainer = $('<div id="notify-container"></div>');
    $(document.body).append($sideContainer);

    /* 通知队列（原 notify） */
    const notifyQueue = [];
    /* 标记当前是否有通知正在显示 */
    let isNotifying = false;

    /**
     * 创建 popout 弹窗（top/bottom 类型）
     * @param {string} message - 显示内容文本
     * @param {number} [duration=DEFAULT_DURATION] - 显示持续时间（毫秒）
     * @param {'top'|'bottom'} [position='top'] - 弹窗显示位置
     * @param {string} [clickScript] - 点击时执行的 JavaScript 代码
     */
    function createPopout(message, duration = DEFAULT_DURATION, position = 'top', clickScript) {
        const $container = position === 'bottom' ? $bottomContainer : $topContainer;
        const $item = $('<div class="popout-item"></div>').wiki(message);

        // 绑定点击事件
        if (clickScript) {
            $item.on('click', () => {
                try {
                    Scripting.evalJavaScript(clickScript);
                } catch (e) {
                    console.error('[Popout Error] 弹窗点击代码执行错误：', e);
                }
            });
        }

        $container.append($item);

        // 动画效果
        if (position === 'bottom') {
            $item.hide().slideDown(300, () => $item.addClass('show'));
        } else {
            void $item[0].offsetWidth;
            $item.addClass('show');
        }

        // 延迟移除
        setTimeout(() => {
            $item.removeClass('show');
            setTimeout(() => {
                $item.slideUp(300, () => $item.remove());
            }, 300);
        }, duration);
    }

    // 处理 side 类型通知队列
    function processQueue() {
        if (notifyQueue.length === 0) {
            isNotifying = false;
            return;
        }
        
        isNotifying = true;
        const ev = notifyQueue.shift();

        const classList = Array.isArray(ev.class)
            ? ev.class.join(' ')
            : (typeof ev.class === 'string' ? ev.class : '');

        const $item = $('<div class="notify-item"></div>')
            .addClass(classList)
            .wiki(ev.message);

        // 绑定点击事件
        if (ev.clickScript) {
            $item.on('click', () => {
                try {
                    Scripting.evalJavaScript(ev.clickScript);
                } catch (e) {
                    console.error('[Popout (side) Error] 侧边弹窗点击代码执行错误：', e);
                }
            });
        }

        $sideContainer.append($item);
        void $item[0].offsetWidth;

        setTimeout(() => $item.addClass('open'), 20);

        // 延时关闭
        setTimeout(() => {
            $item.addClass('close');
            setTimeout(() => {
                $item.slideUp(300, () => $item.remove());
            }, 500);
        }, ev.duration || DEFAULT_DURATION);

        // 处理下一条通知
        setTimeout(processQueue, QUEUE_DELAY);
    }

    /**
     * 触发通知（原 notify/side 属性）
     * @param {string} message - 通知内容
     * @param {number} [duration=DEFAULT_DURATION] - 显示持续时间（毫秒）
     * @param {string|string[]} [classes] - 要添加的 CSS 类
     * @param {string} [clickScript] - 点击时执行的 JavaScript 代码
     */
    function notify(message, duration = DEFAULT_DURATION, classes = '', clickScript) {
        if (typeof message !== 'string') return;

        $(document).trigger({
            type: ':notify',
            message: message.trim(),
            duration: typeof duration === 'number' ? duration : DEFAULT_DURATION,
            class: classes || '',
            clickScript: clickScript
        });
    }

    // 绑定 :notify 事件
    $(document).on(':notify', (ev) => {
        if (ev.message && typeof ev.message === 'string') {
            notifyQueue.push(ev);
            if (!isNotifying) processQueue();
        }
    });

    /**
     * popout 宏定义
     * 用法：<<popout 持续时间 "位置" "点击脚本">>内容<</popout>>
     * @example
     * <<popout 3000 "top" "UIbar.unstow()">>
     *   顶部弹窗，显示3000毫秒，点击展开侧边栏
     * <</popout>>
     */
    Macro.add('popout', {
        tags: null,
        handler() {
            const message = this.payload[0].contents.trim();
            let duration = DEFAULT_DURATION;
            let position = 'top';
            let clickScript = '';

            // 解析参数
            for (const arg of this.args) {
                if (typeof arg === 'number') {
                    duration = arg;
                } else if (arg === 'top' || arg === 'bottom' || arg === 'side') {
                    position = arg;
                } else if (typeof arg === 'string') {
                    clickScript = arg;
                }
            }

            if (!message) return;

            if (position === 'side') {
                notify(message, duration, '', clickScript);
            } else {
                createPopout(message, duration, position, clickScript);
            }
        }
    });

    /**
     * notify 宏定义（兼容旧版）
     * @deprecated 建议使用 popout 宏代替
     */
    Macro.add('notify', {
        tags: null,
        handler() {
            const message = this.payload[0].contents.trim();
            let duration = DEFAULT_DURATION;
            let classes = '';
            let clickScript = '';

            if (this.args.length > 0) {
                if (typeof this.args[0] === 'number') {
                    duration = this.args[0];
                    classes = this.args.slice(1).join(' ');
                } else {
                    classes = this.args.join(' ');
                }
            }

            notify(message, duration, classes, clickScript);
        }
    });

    // 设置接口
    setup.notify = notify;
    /**
     * 全局 popout 接口
     * @param {string} message - 显示内容
     * @param {number} [duration] - 显示时间
     * @param {'top'|'bottom'|'side'} [position='top'] - 显示位置
     * @param {string} [clickScript] - 点击脚本
     */
    setup.popout = (message, duration, position = 'top', clickScript = '') => {
        if (position === 'side') {
            notify(message, duration, '', clickScript);
        } else {
            createPopout(message, duration, position, clickScript);
        }
    };
})();