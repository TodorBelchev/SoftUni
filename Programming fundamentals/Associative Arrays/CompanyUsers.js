function solve(input) {
    const companies = {};
    input.forEach(line => {
        const [company, employee] = line.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        if (!companies[company].includes(employee)) {
            companies[company].push(employee);
        }
    });
    Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0])).forEach(comp => {
        console.log(comp[0]);
        const employees = comp[1];
        employees.forEach(e => console.log(`-- ${e}`))
    });
}

solve(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft -> CC12345',
        'HP -> BB12345'
    ]
)