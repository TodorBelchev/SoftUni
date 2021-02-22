function solve(data, type) {
    return type === 'asc' ? data.sort((a, b) => a - b) : data.sort((a, b) => b - a);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));