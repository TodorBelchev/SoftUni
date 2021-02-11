function stopwatch() {
    const timer = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    startBtn.addEventListener('click', running);
    stopBtn.addEventListener('click', stop);

    function running() {
        timer.textContent = '00:00';
        let [minutes, seconds] = timer.textContent.split(':').map(Number);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        interval = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        }, 1000)

    }

    function stop() {
        clearInterval(interval);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}