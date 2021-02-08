function solve() {
  const text = document.getElementById('input');
  const arr = text.textContent.split('.');
  const output = document.getElementById('output');
  let current = document.createElement('p');

  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    counter++;
    if (arr[i] !== '') {
      current.innerText += arr[i].trim() + '.';
    }
    if (counter === 3) {
      output.appendChild(current);
      current = document.createElement('p');
      counter = 0;
    } else if (i === arr.length - 1) {
      output.appendChild(current);
    }
  }
} 