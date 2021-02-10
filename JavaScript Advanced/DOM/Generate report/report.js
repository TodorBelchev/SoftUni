function generateReport(colNames) {
    // const checks = document.querySelectorAll('input[type="checkbox"]');
    // const data = [...document.querySelectorAll('tbody>tr')].map(r => [...r.children].reduce((acc, col, i) => Object.assign(acc, checks[i].checked ? {[checks[i].name]: col.textContent} : {}), {}));

    // document.getElementById('output').value = JSON.stringify(data, null, 2);
    const outputElement = document.querySelector('#output');
    const result = [];
    const checks = Array.from(document.querySelectorAll('thead tr th input'));
    const trs = Array.from(document.querySelectorAll('tbody tr'));
    trs.forEach(row => {
        const current = {};
        Array.from(row.querySelectorAll('td')).forEach((x, i) => {
            if (checks[i].checked) {
                current[checks[i].name] = x.textContent;
            }
        });
        result.push(current);
    });

    outputElement.value = JSON.stringify(result);
}