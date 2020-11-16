function solve(arr, arr2) {
    let isPrinted = false;
    for (const line of arr2) {
        if (isPrinted) {
            break;
        }
        let tokens = line.split(` `);
        let command = tokens[0];
        let index;
        switch (command) {
            case `add`:
                index = Number(tokens[1]);
                let el = Number(tokens[2]);
                arr.splice(index, 0, el);
                break;
            case `addMany`:
                index = Number(tokens[1]);
                for (let i = 2; i < tokens.length; i++) {
                    arr.splice(index + i - 2, 0, Number(tokens[i]));
                }
                break;
            case `contains`:
                index = Number(arr.indexOf(Number(tokens[1])));
                console.log(index);
                break;
            case `remove`:
                index = Number(tokens[1]);
                arr.splice(index, 1)
                break;
            case `shift`:
                let rotations = Number(tokens[1]);
                for (let j = 0; j < rotations; j++) {
                    arr.push(arr.shift())
                }
                break;
            case `sumPairs`:
                let newArr = [];
                for (let k = 0; k < arr.length; k += 2) {
                    newArr.push(Number(arr[k] + Number(arr[k + 1])));
                }
                if (arr.length % 2 !== 0) {
                    newArr[newArr.length - 1] = arr[arr.length - 1]
                }
                arr = newArr;
                break;
            case `print`:
                isPrinted = true;
                console.log('[ ' + arr.join(', ') + ' ]');
                break;
        }
    }
}