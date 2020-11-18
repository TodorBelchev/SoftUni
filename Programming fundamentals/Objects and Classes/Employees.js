function solve(input) {
    class Employee {
        constructor(name, id) {
            this.name = name;
            this.id = name.length;
        }
    }
    let employees = [];
    for (const line of input) {
        employees.push(new Employee(line));
    }
    employees.forEach((e) => console.log(`Name: ${e.name} -- Personal Number: ${e.id}`))
}

solve(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)