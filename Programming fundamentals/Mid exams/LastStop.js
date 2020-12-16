function solve(input) {
    const numbers = input.shift().split(' ');

    let paintingNumber;

    for (const line of input) {

        if (line === 'END') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];

        switch (command) {
            case 'Change':
                paintingNumber = tokens[1];
                const change = tokens[2];

                if (numbers.includes(paintingNumber)) {
                    const index = numbers.indexOf(paintingNumber);
                    numbers[index] = change;
                }

                break;
            case 'Hide':
                paintingNumber = tokens[1];

                if (numbers.includes(paintingNumber)) {
                    const index = numbers.indexOf(paintingNumber);
                    numbers.splice(index, 1);
                }

                break;
            case 'Switch':
                paintingNumber = tokens[1];
                const number2 = tokens[2];

                if (numbers.includes(paintingNumber) && numbers.includes(number2)) {
                    const index = numbers.indexOf(paintingNumber);
                    const index2 = numbers.indexOf(number2);
                    const temp = numbers[index];
                    numbers[index] = numbers[index2];
                    numbers[index2] = temp;
                }

                break;
            case 'Insert':
                paintingNumber = tokens[2];
                const place = Number(tokens[1]);

                if (place >= 0 && place < numbers.length) {
                    numbers.splice(place + 1, 0, paintingNumber);
                }

                break;
            case 'Reverse':
                numbers.reverse();
                break;
        }
    }

    console.log(numbers.join(' '));
}

solve(
    [
        '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
        'Insert 5 32',
        'Switch 97 78',
        'Hide 88',
        'Change 120 117',
        'END'
    ]
)