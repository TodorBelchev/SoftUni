function solve(arr) {
    let username = arr.shift();
    let pass = username.split(``).reverse().join(``);
    for (let i = 0; i < 4; i++) {
        let current = arr.shift();
        if (current === pass) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (i === 3) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }

    }
}