import { render } from './node_modules/lit-html/lit-html.js';
import { tableView } from './tableView.js';
import { loadData } from './data.js';

const tbody = document.querySelector('tbody');
const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('searchField');

searchBtn.addEventListener('click', searchTable);

function searchTable() {
   if (input.value.trim() === '') {
      return alert('Please enter valid value!');
   }

   for (const row of [...tbody.querySelectorAll('tr')]) {
      if (row.textContent.toLowerCase().includes(input.value.toLowerCase().trim())) {
         row.classList.add('select');
      } else {
         row.classList.remove('select');
      }
   }

   input.value = '';
}

async function loadTable() {
   const response = await loadData();
   const data = await response.json();

   render(tableView(Object.values(data)), tbody);
}

loadTable();