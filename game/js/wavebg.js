// 模拟迷星叫mv五色正弦波背景，利用原生js写法创建全局canvas，使用了GPT辅助
$(document).on(':storyready', function () {
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

    const waves = colors.map(color => ({
        amp: Math.random() * 40 + 30,
        freq: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        color
    }));

    const step = 2;
    function draw(t) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const width = canvas.width;
        const height = canvas.height;
        const midX = width / 2;

        for (const wave of waves) {
            ctx.beginPath();
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 2;

            for (let y = 0; y < height; y += step) {
                const x = midX + Math.sin(y * wave.freq + t * 0.002 + wave.phase) * wave.amp;
                if (y === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            ctx.stroke();
        }

        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
});