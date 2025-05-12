(function() {
    // 定义角色对应卡片css
    const styleMap = {
        anon: "char-anon",
        soyo: "char-soyo",
        tomori: "char-tomori",
        taki: "char-taki",
        rana: "char-rana"
    };

    // 获取当前为 true 的角色变量名
    function getActiveCharacters() {
        return Object.keys(styleMap).filter(char => State.getVar(`$${char}`));
    }

    // 为每个角色添加带 if 前缀的宏，例如 <<ifsoyo>>
    Object.entries(styleMap).forEach(([char, className]) => {
        Macro.add(`if${char}`, {
            tags: null, // 说明这是个闭合标签
            handler() {
                const activeChars = getActiveCharacters(); // 当前为 true 的角色

                // 如果当前角色变量为 true，显示内容
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
        Macro.add(`${char}img`, {
            handler: function() {
                let emo = null;
                let cls = "";

                this.args.forEach(arg => {
                    if (typeof arg === "string") {
                        if (arg.includes(" ")) {
                            cls = arg;
                        } else {
                            emo = arg;
                        }
                    }
                });

                const src = emo ?
                    `img/char/${char}_${emo}.png` :
                    `img/char/${char}.png`;

                const html = `<img src="${src}" class="charimg ${cls}">`;
                new Wikifier(this.output, html);
            }
        });
    });


    // 当没有任何角色变量为 true 时显示内容
    Macro.add("nochar", {
        tags: null,
        handler() {
            if (getActiveCharacters().length === 0) {
                new Wikifier(this.output, this.payload[0].contents);
            }
        }
    });
})();