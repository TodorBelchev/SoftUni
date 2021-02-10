function solve() {
    const optionBinary = document.createElement('option');
    const optionHexadecimal = document.createElement('option');
    const dropDownMenu = document.getElementById('selectMenuTo');
    const result = document.getElementById('result');
    const button = document.querySelector('#container button');
    optionBinary.value = 'binary';
    optionBinary.textContent = 'Binary';
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';
    dropDownMenu.appendChild(optionBinary);
    dropDownMenu.appendChild(optionHexadecimal);
    button.addEventListener('click', convert);

    function convert() {
        let number = Number(document.getElementById('input').value);
        let result = '';
        let remainder;
        const resultInput = document.getElementById('result');

        if(dropDownMenu.value === 'binary') {

            while(number > 0) {
                remainder = number % 2;
                result = remainder + result;
                number = Math.trunc(number / 2);
            }

        } else if (dropDownMenu.value === 'hexadecimal') {
          
            const map = {
                10: 'A',
                11: 'B',
                12: 'C',
                13: 'D',
                14: 'E',
                15: 'F'
            }

            while(number > 0) {
                remainder = number % 16;
                if(remainder > 9) {
                    result = map[remainder] + result;
                } else {
                    result = remainder + result;
                }
                number = Math.trunc(number / 16);
            }

        }

        resultInput.value = result;
    }

}