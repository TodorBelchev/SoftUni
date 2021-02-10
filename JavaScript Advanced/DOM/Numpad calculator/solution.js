function solve() {
    Array.from(document.querySelector('.keys').querySelectorAll('button')).forEach(x => x.addEventListener('click', handle));
    document.querySelector('.top .clear').addEventListener('click', clear);
    let result = document.getElementById('resultOutput');
    let display = document.getElementById('expressionOutput');
    let firstOperand = '';
    let secondOperand = '';
    let operator = '';
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    function handle(e) {
        const value = e.target.value;
        const num = Number(value);
        if (operator === '' && !isNaN(num)) {
            firstOperand += value;
            display.textContent = firstOperand;
        } else if (isNaN(num) && value !== '=' && operator === '') {
            if (value === '.') {
                firstOperand += value;
                display.textContent = firstOperand;
            } else {
                operator = value;
                display.textContent += ' ' + operator + ' ';
            }
        } else if (operator !== '' && value !== '=') {  
            if (value === '.') {
                secondOperand += value;
                display.textContent += value;
            } else {
                secondOperand += value;
                display.textContent += value;
            }
        } else if (value === '=') {
            if (firstOperand === '' || secondOperand === '') {
                result.textContent = 'NaN';
            } else {
                result.textContent = operations[operator](Number(firstOperand), Number(secondOperand));
            }
        }
    }

    function clear() {
        display.textContent = '';
        result.textContent = '';
        firstOperand = '';
        secondOperand = '';
        operator = '';
    }
}