function attachEventsListeners() {
    const inputDays = document.getElementById('days');
    const inputHours = document.getElementById('hours');
    const inputMinutes = document.getElementById('minutes');
    const inputSeconds = document.getElementById('seconds');
    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(e) {
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        const parent = e.target.parentElement;

        if (parent.textContent.includes('Days')) {
            days = Number(parent.querySelector('#days').value);
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Hours')) {
            hours = Number(parent.querySelector('#hours').value);
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Minutes')) {
            minutes = Number(parent.querySelector('#minutes').value);
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;
        } else if (parent.textContent.includes('Seconds')) {
            seconds = Number(parent.querySelector('#seconds').value);
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
        }

        inputDays.value = days;
        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    }
}