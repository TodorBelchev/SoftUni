// function solve(input) {
//     const output = [];
//     input.reduce((acc, cur) => {
//         if (acc !== undefined) {
//             output.push(acc)
//         }
//         if (cur >= output[output.length - 1]) {
//             output.push(cur);
//         }

//     })
//     return output;
// }

function solve(input) {
    const result = input.reduce((acc, curr) => {
        curr >= acc[acc.length - 1] || acc.length === 0 ? acc.push(curr) : '';
        return acc;
    }, []);
    return result;
}

console.log(solve(
    [1, 3, 8, 4, 10, 12, 3, 2, 24]
));