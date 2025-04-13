(function () {
    const characters = ["anon", "soyo", "tomori", "taki", "rana"];
    let nocharContent = "";

    // 定义 <<nochar>> 宏
    Macro.add("nochar", {
        tags: null,
        handler() {
            nocharContent = this.payload[0].contents;
        }
    });

    // 为每个角色宏创建闭合标签宏
    characters.forEach(char => {
        Macro.add(char, {
            tags: null,
            handler() {
                const varName = "$" + char;
                const hasChar = State.getVar(varName);

                if (hasChar) {
                    // 显示内容
                    new Wikifier(this.output, this.payload[0].contents);
                } else {
                    // 显示 nochar 内容
                    new Wikifier(this.output, nocharContent);
                }
            }
        });
    });
})();