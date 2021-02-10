function search() {
   const liItems = Array.from(document.querySelectorAll('#towns li'));
   const resultDiv = document.querySelector('#result');
   const searchInput = document.querySelector('#searchText');

   let counter = 0;

   liItems.forEach(x => {
      if (x.textContent.includes(searchInput.value)) {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
         counter++;
      } else {
         x.style.fontWeight = 'normal';
         x.style.textDecoration = 'none';
      }
   });
   resultDiv.textContent = `${counter} matches found.`
}