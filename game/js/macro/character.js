(function () {
    // 定义角色对应卡片css
    const styleMap = {
        anon: "char-anon",
        soyo: "char-soyo",
        tomori: "char-tomori",
        taki: "char-taki",
        rana: "char-rana"
    };

    // 获取当前的角色变量
    function getActiveCharacters() {
        return Object.keys(styleMap).filter(char => State.getVar(`$${char}`));
    }

    // 为每个角色添加对应的宏，用object的遍历
    Object.entries(styleMap).forEach(([char, className]) => {
        Macro.add(char, {
            tags: null, // 说明这是个闭合标签
            handler() {
                const activeChars = getActiveCharacters(); // 获取当前为true的角色变量

                // 如果当前角色变量为true，显示内容
                if (activeChars.includes(char)) {
                    const content = this.payload[0].contents;

                    // 多角色变量同时存在，添加卡片样式
                    if (activeChars.length > 1) {
                        const html = `<div class="char-card ${className}">${content}</div>`;
                        new Wikifier(this.output, html);
                    } else {
                        // 只有一个角色变量存在时，直接显示内容，不加样式
                        new Wikifier(this.output, content);
                    }
                }
            }
        });
    });

    // nochar，当没有任何角色变量时显示这里面的内容
    Macro.add("nochar", {
        tags: null,
        handler() {
            if (getActiveCharacters().length === 0) {
                new Wikifier(this.output, this.payload[0].contents);
            }
        }
    });
})();