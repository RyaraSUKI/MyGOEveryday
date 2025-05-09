/* 感谢manonamora的设置模板代码!Thanks for manonamora's Settings Template source code! */
// 主题与视觉效果
Setting.addHeader("主题与视觉效果");
var settingThemeNames = ["夜隠染", "明弦音", "壱雫空", "無路矢", "影色舞", "潜在表明", "迷星叫"];
var changeTheme = function() {
    var $html = $("html");
    $html.addClass("theme-drk");
    $html.addClass("theme-sober-d");
    $html.removeClass("theme-sober-l");
    $html.removeClass("theme-lgt");
    $html.removeClass("theme-szk");
    $html.removeClass("theme-nrs");
    $html.removeClass("theme-shd");
    $html.removeClass("theme-szhm");
    $html.removeClass("theme-myu");
    switch (settings.theme) {
        case "明弦音":
            $html.toggleClass("theme-lgt");
            $html.addClass("theme-sober-l");
            break;
        case "壱雫空":
            $html.toggleClass("theme-szk");
            $html.addClass("theme-sober-l");
            break;
        case "無路矢":
            $html.toggleClass("theme-nrs");
            $html.addClass("theme-sober-l");
            break;
        case "影色舞":
            $html.toggleClass("theme-shd");
            $html.addClass("theme-sober-l");
            break;
        case "潜在表明":
            $html.toggleClass("theme-szhm");
            $html.addClass("theme-sober-d");
            break;
        case "迷星叫":
            $html.toggleClass("theme-myu");
            $html.addClass("theme-sober-d");
            break;
    }
};
Setting.addList("theme", {
    label: "主题切换",
    desc: "在这里选择你喜欢的主题吧！",
    list: settingThemeNames,
    default: "夜隠染",
    onInit: changeTheme,
    onChange: changeTheme
});
// 点击圆圈
var settingclickCircle = function() {
    // 先移除之前的事件监听器，防止重复绑定
    $(document).off('click', clickCircleHandler);

    // 如果开启了点击效果，则绑定事件
    if (settings.clickcircle) {
        $(document).on('click', clickCircleHandler);
    }
};

function clickCircleHandler(event) {
    const colors = ['#ffdd88', '#ff8899', '#77bbdd', '#7777aa', '#77dd77'];
    const $circle = $('<div class="click-circle"></div>');

    $circle.css({
        left: `${event.clientX - 5}px`,
        top: `${event.clientY - 5}px`,
        borderColor: colors[Math.floor(Math.random() * colors.length)]
    });

    $('body').append($circle);

    requestAnimationFrame(() => {
        $circle.css({
            transform: 'scale(6)',
            opacity: '0'
        });
    });

    setTimeout(() => {
        $circle.remove();
    }, 600);
}

Setting.addToggle("clickcircle", {
    label: "点击效果",
    desc: "在这里开启页面点击效果吧！",
    default: true,
    onInit: settingclickCircle,
    onChange: settingclickCircle
});
// 正弦波背景
// 总开关
var settingwaveBg = function() {
    if (settings.wavebg) {
        $("html").removeClass("wbg-close");
    } else {
        $("html").addClass("wbg-close");
    }
};
Setting.addToggle("wavebg", {
    label: "背景动画开关",
    desc: "迷子们的正弦波相互交错，在这里切换背景动画显示吧！每次开关都要刷新网页！",
    default: true,
    onInit: settingwaveBg
});
// 切换显示
var settingWaveBgDisplay = ["竖直", "水平"];
var waveBgDisplay = function() {
    var $html = $("html");
    $html.removeClass("wbg-x wbg-close wbg-125 wbg-150 wbg-200 wbg-x-125 wbg-x-150 wbg-x-200");
    switch (settings.wavebgdisplay) {
        case "竖直":
            if (settings.wavebgscale === "125%") {
                $html.removeClass("wbg-x-125");
                $html.addClass("wbg-125");
            } else if (settings.wavebgscale === "150%") {
                $html.removeClass("wbg-x-150");
                $html.addClass("wbg-150");
            } else if (settings.wavebgscale === "200%") {
                $html.removeClass("wbg-x-200");
                $html.addClass("wbg-200");
            } else {
                $html.removeClass("wbg-125 wbg-150 wbg-200 wbg-x-125 wbg-x-150 wbg-x-200");
            }
            break;
        case "水平":
            if (settings.wavebgscale === "125%") {
                $html.removeClass("wbg-125");
                $html.addClass("wbg-x-125");
            } else if (settings.wavebgscale === "150%") {
                $html.removeClass("wbg-150");
                $html.addClass("wbg-x-150");
            } else if (settings.wavebgscale === "200%") {
                $html.removeClass("wbg-200");
                $html.addClass("wbg-x-200");
            } else {
                $html.removeClass("wbg-125 wbg-150 wbg-200 wbg-x-125 wbg-x-150 wbg-x-200");
                $html.addClass("wbg-x");
            }
            break;
    }
};
Setting.addList("wavebgdisplay", {
    label: "正弦波背景样式",
    desc: "在这里切换背景动画的显示样式吧！",
    default: "竖直",
    list: settingWaveBgDisplay,
    onInit: waveBgDisplay,
    onChange: waveBgDisplay
});
// 切换缩放
var settingWaveBgScale = ["100%", "125%", "150%", "200%"];
var waveBgScale = function() {
    var $html = $("html");
    $html.removeClass("wbg-125 wbg-150 wbg-200 wbg-x-125 wbg-x-150 wbg-x-200");
    switch (settings.wavebgscale) {
        case "100%":
            if (settings.wavebgdisplay === "水平") {
                $html.addClass("wbg-x");
            } else {
                $html.removeClass("wbg-125 wbg-150 wbg-200 wbg-x-125 wbg-x-150 wbg-x-200");
            }
            break;
        case "125%":
            if (settings.wavebgdisplay === "水平") {
                $html.addClass("wbg-x-125");
            } else {
                $html.addClass("wbg-125");
            }
            break;
        case "150%":
            if (settings.wavebgdisplay === "水平") {
                $html.addClass("wbg-x-150");
            } else {
                $html.addClass("wbg-150");
            }
            break;
        case "200%":
            if (settings.wavebgdisplay === "水平") {
                $html.addClass("wbg-x-200");
            } else {
                $html.addClass("wbg-200");
            }
            break;
    }
};
Setting.addList("wavebgscale", {
    label: "正弦波背景缩放",
    desc: "在这里切换背景动画的大小缩放吧！",
    default: "100%",
    list: settingWaveBgScale,
    onInit: waveBgScale,
    onChange: waveBgScale
});
// 文本显示
Setting.addHeader("文本显示", "在这里调整页面正文的字体、文字大小、行高与对齐哟~");
//字体切换
var settingFontFamily = ["系统字体", "像素字体"];
var fontFamily = function() {
    var $html = $("html");
    $html.removeClass("default unifont");
    switch (settings.fontFamily) {
        case "系统字体":
            $html.addClass("default");
            break;
        case "像素字体":
            $html.addClass("unifont");
            break;
    }
};
Setting.addList("fontFamily", {
    label: "切换字体",
    desc: "选择你想要的字体吧！",
    list: settingFontFamily,
    default: "像素字体",
    onInit: fontFamily,
    onChange: fontFamily
});
// 文字大小
var settingFontSize = ["75%", "100%", "125%", "150%"];
var resizeFont = function() {
    var size = document.getElementById("passages");
    switch (settings.fontSize) {
        case "75%":
            size.style.fontSize = "75%";
            break;
        case "100%":
            size.style.fontSize = "100%";
            break;
        case "125%":
            size.style.fontSize = "125%";
            break;
        case "150%":
            size.style.fontSize = "150%";
            break;
    }
};
Setting.addList("fontSize", {
    label: "调整文字大小",
    desc: "在这里调整字体的显示大小吧！",
    list: settingFontSize,
    default: "100%",
    onInit: resizeFont,
    onChange: resizeFont
});
// 切换行高
var settingLineHeight = ["75%", "100%", "125%", "150%"];
var lineHeight = function() {
    var $html = $("html");
    $html.removeClass("lh-small lh-medium lh-large lh-biggest");
    switch (settings.lineheight) {

        case "75%":
            $html.addClass("lh-small");
            break;
        case "100%":
            $html.addClass("lh-medium");
            break;
        case "125%":
            $html.addClass("lh-large");
            break;
        case "150%":
            $html.addClass("lh-biggest");
            break;
    }
};
Setting.addList("lineheight", {
    label: "调整行高",
    desc: "在这里调整合适的行高距离吧！",
    default: "100%",
    list: settingLineHeight,
    onInit: lineHeight,
    onChange: lineHeight
});
// 文本对齐
var settingtextAlign = function() {
    if (settings.textalign) {
        $("html").addClass("textcenter");
    } else {
        $("html").removeClass("textcenter");
    }
};
Setting.addToggle("textalign", {
    label: "切换文本对齐",
    desc: "在这里开启文本居中对齐吧！",
    default: false,
    onInit: settingtextAlign,
    onChange: settingtextAlign
});
// 存档
Setting.addHeader("迷子的日记本设定");
Config.saves.maxSlotSaves = 16; //设置最大存档数0~16
Config.saves.isAllowed = function(saveType) {
    if (saveType === Save.Type.Auto) {
        if (settings.autosave && !tags().includes('autosave')) { // 检查passage是否带有autosave标签，若有则自动存档
            return false;
        };
        if (settings.autosave && !tags().includes('nosave')) { // 检查passage是否带有nosave标签，若有则禁止自动或手动存档
            return true;
        }
        return false;
    } else {
        if (tags().includes('autosave')) {
            return true;
        };
        if (tags().includes('nosave')) {
            return false;
        }
        return true;
    }
};
Config.saves.maxAutoSaves = 1;
Setting.addToggle("autosave", {
    label: "自动记录",
    desc: "在这里开启/关闭自动记录功能吧！",
    default: true,
});
Config.saves.descriptions = function(saveType) {
    switch (saveType) {
        case Save.Type.Auto: {
            return "自动记录: " + passage();
            break;
        }
        default: {
            if (settings.autoname) {
                return "迷子的日记" + " - " + passage();
            } else {
                return prompt("请写下记录名：", "迷子的日记" + " - " + passage());
            }
        }
    }
};

Setting.addToggle("autoname", {
    label: "自动命名",
    desc: "在这里开启/关闭记录自动命名吧！",
    default: false,
});