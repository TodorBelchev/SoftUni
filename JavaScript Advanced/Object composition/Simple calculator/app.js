function solve() {
    const data = {};
    const calc = {
        init: (selector1, selector2, resultSelector) => {
            data.firstElement = document.querySelector(selector1);
            data.secondElement = document.querySelector(selector2);
            data.resultElement = document.querySelector(resultSelector);
        },
        add: () => 
            data.resultElement.value = Number(data.firstElement.value) + Number(data.secondElement.value),
        subtract: () => data.resultElement.value = Number(data.firstElement.value) - Number(data.secondElement.value),
    }
    calc.init('#num1', '#num2', '#result');
    const sumBtn = document.querySelector('#sumButton');
    const subtractBtn = document.querySelector('#subtractButton');
    sumBtn.addEventListener('click', calc.add);
    subtractBtn.addEventListener('click', calc.subtract);
}


/* for Judge
function solve() {
    const data = {};
    const calc = {
        init: (selector1, selector2, resultSelector) => {
            data.firstElement = document.querySelector(selector1);
            data.secondElement = document.querySelector(selector2);
            data.resultElement = document.querySelector(resultSelector);
        },
        add: () =>data.resultElement.value = Number(data.firstElement.value) + Number(data.secondElement.value),
        subtract: () => data.resultElement.value = Number(data.firstElement.value) - Number(data.secondElement.value),
    }
    return calc.
}
*/