function solve() {
  const answers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let result = 0;
  Array.from(document.querySelectorAll('p')).forEach(x => x.addEventListener('click', handler));
  const questions = Array.from(document.querySelectorAll('#quizzie section'));
  questions[0].style.display = 'block';
  questions[1].style.display = 'none';
  questions[1].style.display = 'none';
 
  function handler(e) {
    const answer = e.target.parentElement.parentElement.querySelector('p').textContent;

    if (answers.includes(answer)) {
      result++;
    }

    for (let i = 0; i < questions.length; i++) {

      if (questions[i].style.display === 'block') {
        questions[i].style.display = 'none';

        if (i + 1 < questions.length) {
          questions[i + 1].style.display = 'block';
        } else {
          document.querySelector("#results").style.display = "block";
          let output = document.querySelector('.results-inner h1').textContent;

          if (result === 3) {
            output = `You are recognized as top JavaScript fan!`;
          } else {
            output = `You have ${result} right answers`;
          }

          document.querySelector('.results-inner h1').textContent = output;

        }
        break;
      }
    }
  }
}