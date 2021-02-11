function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');
    gradient.addEventListener('mousemove', (e) => {
        const percent = Math.trunc((e.offsetX / (e.target.clientWidth - 1)) * 100);
        result.textContent = `${percent}%`
    });
    gradient.addEventListener('mouseout', () => result.textContent = '');
}