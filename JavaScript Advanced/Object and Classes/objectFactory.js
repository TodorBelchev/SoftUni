function solve(library, orders) {
    const result = [];

    orders.forEach(x => {
        const curr = Object.assign({}, x.template);
        x.parts.forEach(x => curr[x] = library[x]);
        result.push(curr);
    });

    return result;
}

console.log(solve({
    doA: () => { /* … */ },
    doB: () => { /* … */ },
    doC: () => { /* … */ }
},
    [{
        template: { id: 'first' },
        parts: ['doB']
    },
    {
        template: { id: 'second' },
        parts: ['doA', 'doC']
    },]));