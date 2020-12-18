function solve(input) {
    const arr = input.split(' ').map(Number);
    const average = arr.reduce((acc, curr) => acc += curr) / arr.length;
    return arr.sort((a, b) => b - a).filter(x => x > average).slice(0, 5).join(' ') || 'No';
}

console.log(solve(
    '5 2 3 4 -10 30 40 50 20 50 60 60 51'
))