function solve() {
   const cards = Array.from(document.querySelectorAll('img'));
   cards.forEach(x => x.addEventListener('click', reveal));
   let first;
   let second;
   const history = [];

   function reveal(e) {
      e.target.src = 'images/whiteCard.jpg';
      const spans = Array.from(document.querySelectorAll('#result span'));

      if (e.target.parentElement.id === 'player1Div') {
         spans[0].textContent = e.target.name;
         first = e.target;
      } else {
         spans[2].textContent = e.target.name;
         second = e.target;
      }
      const winner = fight(spans);

      if (winner === spans[0]) {
         first.style.border = '2px solid green';
         second.style.border = '2px solid red';
         spans[0].textContent = '';
         spans[2].textContent = '';
         history.push(`[${first.name} vs ${second.name}] `);
         document.getElementById('history').textContent = history.join('');
      } else if (winner === spans[2]) {
         first.style.border = '2px solid red';
         second.style.border = '2px solid green';
         spans[0].textContent = '';
         spans[2].textContent = '';
         history.push(`[${first.name} vs ${second.name}] `);
         document.getElementById('history').textContent = history.join('');
      }
   }

   function fight(spans) {
      const firstNum = Number(spans[0].textContent);
      const secondNum = Number(spans[2].textContent);
      if (firstNum && secondNum) {
         if (firstNum > secondNum) {
            return spans[0]
         } else {
            return spans[2];
         }
      }
   }
}