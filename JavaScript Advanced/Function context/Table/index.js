function solve(){
   const tbody = document.querySelector('tbody');
   tbody.addEventListener('click', mark);
   let previousElement;

   function mark(e) {
      const row = e.target.parentElement;
      row.style.backgroundColor = '#413f5e';
      if (previousElement) {
         previousElement.style.backgroundColor = '';
      }
      previousElement = row;
   }
}