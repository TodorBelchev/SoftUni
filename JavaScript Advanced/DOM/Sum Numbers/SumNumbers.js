function calc() {
    const num1Input = document.querySelector('#num1');
    const num2Input = document.querySelector('#num2');
    const sumEl = document.querySelector('#sum');
    sumEl.value = Number(num1Input.value) + Number(num2Input.value);
}