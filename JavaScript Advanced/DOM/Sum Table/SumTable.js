function sum() {
    const tds = Array.from(document.querySelectorAll('td'));
    const resultEl = document.querySelector('#sum');
    let sum = 0;
    for (let i = 1; i< tds.length; i += 2) {
        sum += Number(tds[i].textContent);
    }
    resultEl.textContent = sum;
}