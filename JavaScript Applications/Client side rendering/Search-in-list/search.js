import { render } from './node_modules/lit-html/lit-html.js';
import { townsView } from './townsView.js';
import { towns } from './towns.js';

const root = document.getElementById('towns');
const searchInput = document.getElementById('searchText');
const resultDiv = document.getElementById('result');
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', search);

render(townsView(towns), root);

function search() {
   let matches = 0;

   if (searchInput.value.trim() === '') {
      return alert('Please enter search value!');
   }

   for (const town of [...root.querySelectorAll('li')]) {

      if (town.textContent.toLowerCase().includes(searchInput.value.trim().toLowerCase())) {
         town.classList.add('active');
         matches++;
      } else {
         town.classList.remove('active');
      }

   }

   resultDiv.textContent = `${matches} matches found`;
}