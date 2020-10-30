function solve(string, char, result) {
    string = string.replace(`_`, char);
    if (string === result) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}