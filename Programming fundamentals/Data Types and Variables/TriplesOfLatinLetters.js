function solve(num) {
    for (let i = 0; i < num; i++) {
        let line = ``;
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let line = String.fromCharCode(97 + i) + String.fromCharCode(97 + j) + String.fromCharCode(97 + k);
                console.log(line);
            }
        }
    }
}