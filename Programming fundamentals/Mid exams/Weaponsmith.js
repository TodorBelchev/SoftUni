function solve(input) {
    const parts = input.shift().split('|');
    for (const line of input) {

        if (line === 'Done') {
            break;
        }

        const tokens = line.split(' ');
        const command = tokens[0];
        const direction = tokens[1];

        switch (command) {
            case 'Move':
                const index = Number(tokens[2]);

                if (direction === 'Left') {

                    if (index > 0 && index < parts.length) {
                        const part = parts.splice(index, 1);
                        parts.splice(index - 1, 0, part);
                    }

                } else {

                    if (index >= 0 && index < parts.length - 1) {
                        const part = parts.splice(index, 1);
                        parts.splice(index + 1, 0, part);
                    }

                }

                break;
            case 'Check':
                let odd = '';
                let even = '';

                for (let i = 0; i < parts.length; i++) {

                    if (i % 2 === 0) {
                        even += parts[i] + ' ';
                    } else {
                        odd += parts[i] + ' ';
                    }

                }

                if (direction === 'Even') {
                    console.log(even.trim());
                } else {
                    console.log(odd.trim());
                }

                break;
        }
    }

    console.log(`You crafted ${parts.join('')}!`);
}

solve(
    [
        'Ve|or|nd|st|ke|ri',
        'Check Even',
        'Move Right 5',
        'Move Left 2',
        'Move Left 0',
        'Move Right 4',
        'Done'
    ]
)