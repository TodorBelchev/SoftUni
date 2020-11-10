function solve(a, b) {
    let line = ``;
    if (a.charCodeAt(0) < b.charCodeAt(0)) {
        for (let i = a.charCodeAt(0) + 1; i < b.charCodeAt(0); i++) {
            line += String.fromCharCode(i) + ` `;
        }
    } else {
        for (let i = b.charCodeAt(0) + 1; i < a.charCodeAt(0); i++) {
            line += String.fromCharCode(i) + ` `;
        }
    }
    console.log(line);
}