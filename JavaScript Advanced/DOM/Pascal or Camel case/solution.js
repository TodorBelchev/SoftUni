function solve() {

  function convertText(textArr, type) {
    textArr = textArr.map(x => x[0].toLocaleUpperCase() + x.slice(1));
    type === 'Camel Case' ? textArr[0] = textArr[0][0].toLocaleLowerCase() + textArr[0].slice(1) : textArr[0];
    return textArr.join('');
  }

  const textInput = document.querySelector('#text');
  const typeInput = document.querySelector('#naming-convention');
  const resultSpan = document.querySelector('#result');

  if (typeInput.value !== 'Camel Case' && typeInput.value !== 'Pascal Case') {
    resultSpan.textContent = 'Error!';
    return;
  }

  const textArr = textInput.value.trim().toLocaleLowerCase().split(' ');
  resultSpan.textContent = convertText(textArr, typeInput.value);
}