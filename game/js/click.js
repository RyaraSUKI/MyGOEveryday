(function() {
    const colors = ['#ffdd88', '#ff8899', '#77bbdd', '#7777aa', '#77dd77'];
    document.addEventListener('click', function(event) {
        const circle = document.createElement('div');
        circle.className = 'click-circle';
        circle.style.left = `${event.clientX - 5}px`;
        circle.style.top = `${event.clientY - 5}px`;
        circle.style.borderColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(circle);
        requestAnimationFrame(() => {
            circle.style.transform = 'scale(6)';
            circle.style.opacity = '0';
        });

        setTimeout(() => {
            document.body.removeChild(circle);
        }, 600);
    });
})();