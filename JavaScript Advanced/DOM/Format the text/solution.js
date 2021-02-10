function solve() {
  const textArea = document.querySelector('#input');
  const outputDiv = document.querySelector('#output');
  let inputArr = textArea.value.split('.');
  inputArr = inputArr.filter(x => x !== '');

  while (inputArr.length > 0) {
    const p = document.createElement('p');
    const currentArr = inputArr.splice(0, 3);

    for (const text of currentArr) {

      if (text == undefined) {
        break;
      }

      p.textContent += text + '.'; 
    }

    outputDiv.appendChild(p);
  }
}