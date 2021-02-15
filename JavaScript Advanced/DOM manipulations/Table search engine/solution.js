function solve() {
   const input = document.querySelector('#searchField');
   document.querySelector('button').addEventListener('click', search);

   function search() {
      Array.from(document.querySelectorAll('tbody tr')).forEach(row => {
         if (row.textContent.toLowerCase().includes(input.value.toLowerCase().trim())) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
      input.value = '';
   }
}