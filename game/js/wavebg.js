// 模拟迷星叫mv五色正弦波背景，利用原生js写法创建全局canvas，使用了GPT辅助
$(document).on(':storyready', function() {
    const canvas = document.createElement('canvas');
    canvas.id = 'wave-bg';
    document.getElementById('story').prepend(canvas);

    const ctx = canvas.getContext('2d');
    const colors = ['#ffdd88', '#ff8899', '#77bbdd', '#7777aa', '#77dd77'];
    let animationId = null; // 存储动画ID
    let isAnimating = true; // 动画状态标志

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const subWaveCount = 3;
    const waves = [];

    // 创建波浪数据
    for (let i = 0; i < colors.length; i++) {
        const subWaves = [];
        for (let j = 0; j < subWaveCount; j++) {
            subWaves.push({
                baseAmp: Math.random() * 25 + 20,
                baseFreq: Math.random() * 0.01 + 0.002,
                phase: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.01 + 0.005,
            });
        }
        waves.push({ subWaves, color: colors[i] });
    }

    const step = 2;

    function getWaveX(subWaves, y, t) {
        let x = 0;
        for (const w of subWaves) {
            const amp = w.baseAmp * (1 + 0.3 * Math.sin(t * w.speed));
            const freq = w.baseFreq * (1 + 0.3 * Math.cos(t * w.speed));
            x += amp * Math.sin(freq * y + w.phase + t);
        }
        return x;
    }

    function draw(t) {
        if (!isAnimating) return; // 如果动画已停止则退出

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const width = canvas.width;
        const height = canvas.height;
        const midX = width / 2;

        for (let i = 0; i < waves.length; i++) {
            ctx.beginPath();
            ctx.strokeStyle = waves[i].color;
            ctx.lineWidth = 2;

            for (let y = 0; y < height; y += step) {
                const x = midX + getWaveX(waves[i].subWaves, y, t * 0.0005);
                if (y === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            ctx.stroke();
        }

        animationId = requestAnimationFrame(draw);
    }

    // 启动动画
    animationId = requestAnimationFrame(draw);

    // 观察canvas类变化
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                const isHidden = canvas.classList.contains('wbg-close');
                if (isHidden && isAnimating) {
                    // 当添加.wbg-close时停止动画
                    cancelAnimationFrame(animationId);
                    isAnimating = false;
                } else if (!isHidden && !isAnimating) {
                    // 当移除.wbg-close时恢复动画
                    isAnimating = true;
                    animationId = requestAnimationFrame(draw);
                }
            }
        });
    });

    observer.observe(canvas, {
        attributes: true,
        attributeFilter: ['class']
    });

    // 页面卸载时清理
    window.addEventListener('beforeunload', function() {
        cancelAnimationFrame(animationId);
        observer.disconnect();
    });
});