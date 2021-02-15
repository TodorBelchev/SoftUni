function create(words) {
   const parent = document.getElementById('content');
   words.forEach(x => {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = x;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', show);
      parent.appendChild(div);
   });

   function show(e) {
      e.target.querySelector('p').style.display = 'block';
   }
}