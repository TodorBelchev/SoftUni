function solve() {
   const [creatorInput, titleInput, categoryInput] = document.querySelectorAll('input');
   const [blockSection, articlesSection, createSection, archiveSection] = document.querySelectorAll('section');
   const contentInput = document.querySelector('#content');
   const createBtn = document.querySelector('.btn,.create');
   createBtn.addEventListener('click', create);

   function create(e) {
      e.preventDefault();
      if (creatorInput.value.trim() === '' || titleInput.value.trim() === '' || categoryInput.value.trim() === '' || contentInput.value.trim() === '') {
         return;
      }

      const article = document.createElement('article');
      const h1 = document.createElement('h1');
      h1.textContent = titleInput.value;
      const categoryP = document.createElement('p');
      categoryP.innerHTML = `Category:<strong>${categoryInput.value}</strong>`;
      const creatorP = document.createElement('p');
      creatorP.innerHTML = `Creator:<strong>${creatorInput.value}</strong>`;
      const contentP = document.createElement('p');
      contentP.textContent = contentInput.value;
      const btnDiv = document.createElement('div');
      btnDiv.classList.add('buttons');
      const btnDelete = document.createElement('button');
      const btnArchive = document.createElement('button');
      btnDelete.className = 'btn delete';
      btnArchive.className = 'btn archive';
      btnDelete.textContent = 'Delete';
      btnArchive.textContent = 'Archive';
      btnDelete.addEventListener('click', del);
      btnArchive.addEventListener('click', archive);

      btnDiv.appendChild(btnDelete);
      btnDiv.appendChild(btnArchive);
      article.appendChild(h1);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(contentP);
      article.appendChild(btnDiv);
      articlesSection.appendChild(article);
   }

   function del(e) {
      e.target.parentElement.parentElement.remove();
   }

   function archive(e) {
      const article = e.target.parentElement.parentElement;
      const ul = archiveSection.querySelector('ul');
      const li = document.createElement('li');
      li.textContent = article.querySelector('h1').textContent;
      article.remove();
      ul.appendChild(li);
      const items = Array.from(ul.querySelectorAll('li'));
      ul.innerHTML = '';
      items.sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(x => ul.appendChild(x));
   }
}