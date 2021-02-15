function solve() {
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    const input = JSON.parse(document.querySelector('textarea').value);
    input.forEach(x => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const img = document.createElement('img');
      img.src = x.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      const td2 = document.createElement('td');
      const p1 = document.createElement('p');
      p1.textContent = x.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      const td3 = document.createElement('td');
      const p2 = document.createElement('p');
      p2.textContent = Number(x.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      const td4 = document.createElement('td');
      const p3 = document.createElement('p');
      p3.textContent = Number(x.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      const td5 = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'checkbox';
      td5.appendChild(input);
      tr.appendChild(td5);
      document.querySelector('tbody').appendChild(tr);
    });
  }

  function buy() {
    const checkBoxes = Array.from(document.querySelectorAll('tbody input')).filter(x => x.checked);
    const bought = [];
    let price = 0;
    let decoration = 0;
    checkBoxes.forEach(x => {
      const parent = x.parentElement.parentElement;
      const data = Array.from(parent.querySelectorAll('p'));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    });
    const output = document.querySelectorAll('textarea')[1];
    output.textContent += `Bought furniture: ${bought.join(', ')}\r\n`;
    output.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    output.textContent += `Average decoration factor: ${decoration / checkBoxes.length}`;
  }
}