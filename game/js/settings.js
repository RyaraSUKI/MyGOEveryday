/* 感谢manonamora的设置模板代码!Thanks for manonamora's Settings Template source code! */
// 主题切换
Setting.addHeader("主题");
var settingThemeNames = ["明弦音（亮色主题）", "夜隠染（暗色主题）"]; 
var changeTheme = function () {
    var $html = $("html");
    $html.removeClass("rev");
    $("#passages").removeClass("theme-d");
    $("#passages").addClass("theme-l");
    switch (settings.theme) {
        case "夜隠染（暗色主题）":
            $html.addClass("rev");
            $("#passages").removeClass("theme-l");
            $("#passages").addClass("theme-d");
            break;
    }
};
Setting.addList("theme", {
    label       : "主题切换",
    desc        :"在这里选择你喜欢的主题吧！",
    list        : settingThemeNames,
    default	    : "夜隠染（暗色主题）",
    onInit      : changeTheme,
    onChange    : changeTheme
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
    label		: "切换字体",
    desc        : "选择你想要的字体吧！", 
    list		: settingFontFamily,
    default     : "系统字体", 
    onInit		: fontFamily,
    onChange	: fontFamily
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
    label		: "调整文字大小",
    desc        : "在这里调整字体的显示大小吧！",
    list		: settingFontSize,
    default     : "100%",
    onInit		: resizeFont,
    onChange	: resizeFont
});
// 切换行高
var settingLineHeight = ["75%", "100%", "125%", "150%"];
var lineHeight = function () {
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
    label       : "调整行高",
    desc        : "在这里调整合适的行高距离吧！",
    default     : "100%",
    list        : settingLineHeight,
    onInit      : lineHeight,
    onChange    : lineHeight
});
// 文本对齐
var settingtextAlign = function () {
    if (settings.textalign) { 
        $("html").addClass("justified");
    } else {
        $("html").removeClass("justified");
}};
Setting.addToggle("textalign", {
    label       : "切换文本对齐",
    desc        : "在这里开启文本绝对位置对齐吧！",
    default     : false,
    onInit      : settingtextAlign,
    onChange    : settingtextAlign
});
// 存档
Setting.addHeader("迷子的日记本设定");
Config.saves.isAllowed = function (saveType) {
    if (saveType === Save.Type.Auto) {
        if (settings.autosave && !tags().includes('autosave')){ //检查passage是否带有autosave标签，若有则自动存档
            return false;
        };
        if (settings.autosave && !tags().includes('nosave')){ //检查passage是否带有nosave标签，若有则禁止自动或手动存档
            return true;
        }
        return true;
    }
    else {
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
    label       : "自动记录",
    desc        :"在这里开启/关闭自动记录功能吧！",
    default     : true,
});
Config.saves.descriptions = function (saveType) {
    switch (saveType) {
        case Save.Type.Auto: {
            return "自动记录: " + passage();
            break;
        }
        default: {
            if (settings.autoname) {
                return "迷子的日记" + " - " + passage();
            }
            else {
                return prompt("请写下记录名：", "迷子的日记" + " - " + passage());
            }
        }
    }
};

Setting.addToggle("autoname", {
    label       : "自动命名",
    desc        : "在这里开启/关闭记录自动命名吧！（对应写下记录的页面名）",
    default     : false,
});