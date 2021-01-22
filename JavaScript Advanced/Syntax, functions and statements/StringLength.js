function solve(string, string2, string3) {
    const allStrings = string + string2 + string3;
    console.log(allStrings.length);
    console.log(Math.floor(allStrings.length / 3));
}

solve(
    'chocolate', 'ice cream', 'cake'
)