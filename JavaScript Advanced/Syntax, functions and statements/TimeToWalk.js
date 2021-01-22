function solve(steps, footprint, speed) {
    const distance = steps * footprint;
    let time = distance / (speed / 3.6);
    time += Math.floor(distance / 500) * 60;
    const seconds = Math.round(time % 60);
    time /= 60;
    const minutes = Math.floor(time % 60);
    time /= 60;
    const hours = Math.floor(time % 60);
    console.log(`${insertLeadingZero(hours)}:${insertLeadingZero(minutes)}:${insertLeadingZero(seconds)}`);

    function insertLeadingZero(num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num.toString();
    }
}

solve(
    4000, 0.60, 5
)