function extractText() {
    const liElements = Array.from(document.querySelectorAll('#items li'));
    const resultElement = document.querySelector('#result');
    resultElement.textContent += liElements.map(x => x = x.textContent).join('\n');
//     resultElement.textContent += liElements.reduce((acc, curr) => {
//         acc.push(curr.textContent);
//         return acc;
//     }, []).join('\n');
// }