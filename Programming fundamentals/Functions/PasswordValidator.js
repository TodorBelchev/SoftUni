function solve(pass) {
    let isValid = true;
    if (pass.length < 6 || pass.length > 10) {
        console.log(`Password must be between 6 and 10 characters`);
        isValid = false;
    }
    for (let i = 0; i < pass.length; i++) {
        if (!/[a-zA-Z0-9]/.test(pass[i].toString())) {
            isValid = false;
            console.log(`Password must consist only of letters and digits`);
            break;
        }
    }
    let digitCounter = 0;
    for (let j = 0; j < pass.length; j++) {
        let current = Number(pass[j]);
        if (/[0-9]/.test(current)) {
            digitCounter++;
        }
    }
    if (digitCounter < 2) {
        console.log(`Password must have at least 2 digits`);
        isValid = false;
    }
    if (isValid) {
        console.log(`Password is valid`);
    }
}