function solve() {
    const args = Array.from(arguments);
    const count = new Map();
    args.forEach(x => {
        const type = typeof x;
        console.log(`${type}: ${x}`);
        if (!count.has(type)) {
            count.set(type, 0);
        }
        count.set(type, count.get(type) + 1);
    });
    Array.from(count.entries()).sort((a, b) => b[1] - a[1]).forEach(x => console.log(`${x[0]} = ${x[1]}`))
}

solve('cat', 42, function () { console.log('Hello world!'); });