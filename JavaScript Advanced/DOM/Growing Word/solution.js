function growingWord() {
  const word = document.querySelector('#exercise > p');
  let px = 2;
  let colors = {
    blue: 'green',
    green: 'red',
    red: 'blue'
  }
  if(!word.hasAttribute('style')) {
    word.setAttribute('style', `color:blue; font-size:${px}px`);
  } else {
    let currentPx = word.style['font-size'];
    px = currentPx.substring(0, currentPx.length - 2) * 2;
    let currentColor = word.style.color;
    word.setAttribute('style', `color: ${colors[currentColor]}; font-size: ${px}px`)
  } 
}