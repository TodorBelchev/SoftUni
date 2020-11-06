function solve(arr) {
    let size = arr.shift();
    let positions = arr.shift().split(` `).map(Number);
    let field = [];
    for (let i = 0; i < size; i++) {
        field.push(0);
    }
    for (let i = 0; i < size; i++) {
        let bugIndex = positions[i];
        if (bugIndex < size) {
            field[bugIndex] = 1;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        let tokens = arr[j].split(` `);
        let command = tokens[1];
        let startIndex = Number(tokens[0]);
        let step = Number(tokens[2]);
        if (step < 0) {
            step = Math.abs(step);
            if (command === `right`) {
                command = `left`;
            } else {
                command = `right`;
            }
        }
        if (startIndex >= 0 && startIndex < field.length && field[startIndex] === 1) {
            field[startIndex] = 0;
            if (command === `right`) {
                for (let k = startIndex + step; k < field.length; k += step) {
                    if (field[k] === 0) {
                        field[k] = 1;
                        break;
                    }
                }
            } else if (command === `left`) {
                for (let k = startIndex - step; k >= 0; k -= step) {
                    if (field[k] === 0) {
                        field[k] = 1;
                        break;
                    }
                }
            }
        }
    }
    console.log(field.join(` `));
}