function solve() {
  const sites = Array.from(document.querySelectorAll('.link-1'));
  sites.forEach(x => {
    x.addEventListener('click', (e) => {
      const paragraph = x.querySelector('p');
      const counter = Number(paragraph.textContent.split(' ')[1]) + 1;
      paragraph.innerText = `visited ${counter} times`
    })
  })
}