function solve(input) {
    let students = {};
    input.forEach(line => {
        const [name, ...grades] = line.split(` `);
        if (!students[name]) {
            students[name] = grades.map(Number);
        } else {
            students[name] = students[name].concat(grades.map(Number));
        }
    })
    let sorted = Object.entries(students).sort((a, b) => {
        let averageA = a[1].reduce((acc, x) => acc + x) / a[1].length;
        let averageB = b[1].reduce((acc, x) => acc + x) / b[1].length;

        return averageA - averageB;
    })
    for (const kvp of sorted) {
        console.log(`${kvp[0]}: ${kvp[1].join(`, `)}`);
    }
}

solve(
    [
        'Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6'
    ]
)