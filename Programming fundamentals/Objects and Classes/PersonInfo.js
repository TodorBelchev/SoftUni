function solve(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }
    let entries = Object.entries(person);
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
