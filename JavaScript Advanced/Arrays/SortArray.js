function solve(input) {
    const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join('\r\n'));
}

solve(
    ['alpha', 'beta', 'gamma']
)