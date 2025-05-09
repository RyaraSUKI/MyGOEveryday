// 模拟迷星叫mv五色正弦波背景，利用原生js写法创建全局canvas，使用了GPT辅助
$(document).on(':storyready', function() {
    if (!settings.wavebg) {
        const nocanvas = document.createElement('canvas');
        nocanvas.id = 'wave-bg';
        document.getElementById('story').prepend(nocanvas);
    } else {
        const canvas = document.createElement('canvas');
        canvas.id = 'wave-bg';
        document.getElementById('story').prepend(canvas);

        const ctx = canvas.getContext('2d');
        const colors = ['#ffdd88', '#ff8899', '#77bbdd', '#7777aa', '#77dd77'];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const subWaveCount = 3;
        const waves = [];

        // 创建 5 条曲线，每条由多个动态子波组成
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

            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);
    }
});