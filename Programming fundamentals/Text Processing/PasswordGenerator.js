function solve(arr) {
    let pass = (arr[0] + arr[1]).split('');
    const replacements = arr[2].split('');
    let output = [];
    let counter = 0;
    for (const index in pass) {
        if (counter > replacements.length - 1) {
            counter = 0;
        }
        switch (pass[index]) {
            case 'a':
            case 'o':
            case 'e':
            case 'i':
            case 'u':
                output.push(replacements[counter].toUpperCase());
                counter++;
                break;
            default:
                output.push(pass[index].toLowerCase());
                break;
        }
    }
    console.log(`Your generated password is ${output.reverse().join('')}`);
}

solve(
    [
        'ilovepizza',
        'ihatevegetables',
        'orange'
    ]
)