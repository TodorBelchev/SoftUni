function solve(input) {
    const book = {};

    for (const line of input) {
        const [name, address] = line.split(':');
        book[name] = address;
    }

    Object.keys(book)
        .sort((a, b) => a.localeCompare(b))
        .forEach(k => console.log(`${k} -> ${book[k]}`))
}

solve(
    [
        'Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd'
    ]
)