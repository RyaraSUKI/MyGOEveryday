/* Popout-Macro v1.0.2 By RyaraSUKI
合并了改造版的Chapel's notify macro, 原notify作为popour的"side"属性，但原notify的的宏和接口仍可使用
AI帮我打的注解你信吗x（放心我看得懂我写的是什么
参数定义乱七八糟但是，缝缝补补又可以用就行 
*/

(function () {
    const DEFAULT_DURATION = 2000; // 默认显示时间
    const QUEUE_DELAY = 150;       // side(原notify)队列间隔

    // 一样，创建popout的top顶部与bottom底部容器
    const $topContainer = $('<div id="popout-container" class="top"></div>');
    const $bottomContainer = $('<div id="popout-container" class="bottom"></div>');
    $(document.body).append($topContainer, $bottomContainer);

    // side样式容器（原notify）
    const $sideContainer = $('<div id="notify-container"></div>');
    $(document.body).append($sideContainer);

    // 通知队列（原notify）
    const notifyQueue = [];
    let isNotifying = false;

/*
     - 创建 popout 弹窗 top/bottom
     - createPopout(
     - {string} message - 内容文本
     - {number} duration - 停滞时间
     - {string} position - 显示位置 "top"/"bottom"
     - {string} clickScript - 点击时执行获取的JavaScript
     - )
*/

    function createPopout(message, duration, position, clickScript) {
        const $container = position === 'bottom' ? $bottomContainer : $topContainer;
        const $item = $('<div class="popout-item"></div>').wiki(message);

        // 点击事件 JavaScript 感谢GPT让我知道还有这玩意可以实现执行js
        if (clickScript) {
            $item.on('click', () => {
                try {
                    Scripting.evalJavaScript(clickScript);
                } catch (e) {
                    console.error('[Popout Error] 气泡弹窗点击代码执行错误：', e);
                }
            });
        }

        $container.append($item);

        // 动画效果：顶部为淡入（css类.show实现），底部为滑动（jQuery动画slideDown实现）
        if (position === 'bottom') {
            $item.hide().slideDown(300, () => $item.addClass('show'));
        } else {
            void $item[0].offsetWidth;
            $item.addClass('show');
        }

        // 延迟移除，动画效果；slideUp实现滑动动画
        setTimeout(() => {
            $item.removeClass('show');
            setTimeout(() => {
                $item.slideUp(300, () => $item.remove());
            }, 300);
        }, duration);
    }

    // 处理 side （原notify）通知队列
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

        // notify 的点击事件
        if (ev.clickScript) {
            $item.on('click', () => {
                try {
                    Scripting.evalJavaScript(ev.clickScript);
                } catch (e) {
                    console.error('[Popout (side/notify) Error] 气泡弹窗(side/notify)点击代码执行错误：', e);
                }
            });
        }

        $sideContainer.append($item);
        void $item[0].offsetWidth;

        setTimeout(() => $item.addClass('open'), 20);

        // 延时关闭，动画：一样slideUp
        setTimeout(() => {
            $item.addClass('close');
            setTimeout(() => {
                $item.slideUp(300, () => $item.remove());
            }, 500);
        }, ev.delay || DEFAULT_DURATION);

        // 上一条退出，继续处理队列
        setTimeout(processQueue, QUEUE_DELAY);
    }

     // 通知触发函数（原notify/side属性），同时用于接口setup.notify
     
    function notify(message, delay, classes, clickScript) {
        if (typeof message !== 'string') return;

        $(document).trigger({
            type: ':notify',
            message: message.trim(),
            delay: typeof delay === 'number' ? delay : DEFAULT_DURATION,
            class: classes || '',
            clickScript: clickScript
        });
    }

    // 绑定:notify事件，触发时进入队列
    $(document).on(':notify', (ev) => {
        if (ev.message && typeof ev.message === 'string') {
            notifyQueue.push(ev);
            if (!isNotifying) processQueue();
        }
    });

/*
     - popout 宏定义（统一接口setup.popout）
     - 用法：<<popout 停滞时间（单位毫秒ms） "位置（top/bottom/side）" "点击JavaScript脚本字符串">> 内容 <</popout>>
     - 属性参数可乱序：停滞时间、位置（top/bottom/side）、点击脚本（JavaScript字符串）
     - 例子 <<popout 3000 "top" "UIbar.unstow()">>顶部弹下停滞3000毫秒点击展开侧边栏<</popout>>
     - 记得闭合！
*/
    Macro.add('popout', {
        tags: null,
        handler() {
            const message = this.payload[0].contents.trim();
            let duration = DEFAULT_DURATION;
            let position = 'top';
            let clickScript = '';

            // 简单获取属性参数 duration是数值 position是固定字符串 clickScript是字符串
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

            // 定义，如果是 side ，则使用notify方式
            if (position === 'side') {
                notify(message, duration, '', clickScript);
            } else {
                createPopout(message, duration, position, clickScript);
            }
        }
    });

/*
     - notify 宏定义（保留用于兼容，没优化过数值获取方法，接口setup.notify）
     - 用法：<<notify 停滞时间 "JavaScript脚本">> 内容 <</notify>>
*/
    Macro.add('notify', {
        tags: null,
        handler() {
            const msg = this.payload[0].contents.trim();
            let delay = DEFAULT_DURATION;
            let classes = '';
            let clickScript = '';

            if (this.args.length > 0) {
                if (typeof this.args[0] === 'number') {
                    delay = this.args[0];
                    classes = this.args.slice(1).join(' ');
                } else {
                    classes = this.args.join(' ');
                }
            }

            notify(msg, delay, classes, clickScript);
        }
    });

    // 定义接口，setup.notify和setup.popout，你知道怎么用：)
    setup.notify = notify;
    setup.popout = (message, duration, position = 'top', clickScript = '') => {
        if (position === 'side') {
            notify(message, duration, '', clickScript);
        } else {
            createPopout(message, duration, position, clickScript);
        }
    };
})();