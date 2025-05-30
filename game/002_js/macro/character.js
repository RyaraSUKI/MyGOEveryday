(function() {
    // 定义角色对应卡片css
    const styleMap = {
        anon: "charcard-anon",
        soyo: "charcard-soyo",
        tomori: "charcard-tomori",
        taki: "charcard-taki",
        rana: "charcard-rana",
        mygo: "charcard-mygo"
    };

    // 获取当前角色变量名
    function getActiveCharacters() {
        return Object.keys(styleMap).filter(char => State.getVar(`$${char}`));
    }

    // if角色判定
    Object.entries(styleMap).forEach(([char, className]) => {
        Macro.add(`if${char}`, {
            tags: null, // 说明这是个闭合标签
            handler() {
                const activeChars = getActiveCharacters();

                // 显示当前角色内容
                if (activeChars.includes(char)) {
                    const content = this.payload[0].contents;

                    // 多角色变量同时存在，加卡片样式
                    if (activeChars.length > 1) {
                        const html = `<div class="charcard ${className}">${content}</div>`;
                        new Wikifier(this.output, html);
                    } else {
                        // 只有一个角色变量存在，直接显示内容
                        new Wikifier(this.output, content);
                    }
                }
            }
        });
        // 单纯的是角色卡片
        Macro.add(char, {
            tags: null,
            handler: function() {
                const content = this.payload[0].contents;
                const html = `<div class="charcard ${className}">${content}</div>`;
                new Wikifier(this.output, html);
            }
        });
        // 角色图片
        Macro.add(`${char}img`, {
            handler: function() {
                let emo = null;
                let style = "";

                this.args.forEach(arg => {
                    if (typeof arg === "string") {
                        if (arg.includes(" ")) {
                            style = arg;
                        } else {
                            emo = arg;
                        }
                    }
                });

                const src = emo ?
                    `img/char/${char}_${emo}.png` :
                    `img/char/${char}.png`;

                const html = `<img src="${src}" class="charimg ${style}">`;
                new Wikifier(this.output, html);
            }
        });
    });


    // 当没有任何角色变量时显示的宏
    Macro.add("nochar", {
        tags: null,
        handler() {
            if (getActiveCharacters().length === 0) {
                new Wikifier(this.output, this.payload[0].contents);
            }
        }
    });
})();