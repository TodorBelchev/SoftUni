function solve(input) {
    let phoneBookMap = new Map();
    for (const line of input) {
        let [name, phone] = line.split(` `);
        phoneBookMap.set(name, phone);
    }
    const entries = phoneBookMap.entries();
    for (const kvp of entries) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}
