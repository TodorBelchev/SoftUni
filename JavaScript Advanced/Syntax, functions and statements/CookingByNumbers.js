function solve(start, first, second, third, fourth, fifth) {
    let calories = Number(start);
    const arr = [first, second, third, fourth, fifth];
    const actions = {
        'chop': (x) => x / 2,
        'dice': (x) => Math.sqrt(x),
        'spice': (x) => x + 1,
        'bake': (x) => x * 3,
        'fillet': (x) => x * 0.8,
    }
    for (let i = 0; i < arr.length; i++) {
        calories = actions[arr[i]](calories);
        console.log(calories);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');