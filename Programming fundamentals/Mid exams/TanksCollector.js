function solve(input) {
    const tanks = input.shift().split(', ');
    const linesCount = Number(input.shift());

    for (let i = 0; i < linesCount; i++) {
        const tokens = input[i].split(', ');
        const command = tokens[0];
        let tankName;
        let index;

        switch (command) {
            case 'Add':
                tankName = tokens[1];

                if (tanks.includes(tankName)) {
                    console.log('Tank is already bought');
                } else {
                    console.log('Tank successfully bought');
                    tanks.push(tankName);
                }

                break;
            case 'Remove':
                tankName = tokens[1];

                if (tanks.includes(tankName)) {
                    console.log('Tank successfully sold');
                    index = tanks.indexOf(tankName);
                    tanks.splice(index, 1);
                } else {
                    console.log('Tank not found');
                }

                break;
            case 'Remove At':
                index = Number(tokens[1]);

                if (index >= 0 && index < tanks.length) {
                    console.log('Tank successfully sold');
                    tanks.splice(index, 1);
                } else {
                    console.log('Index out of range');
                }

                break;
            case 'Insert':
                index = Number(tokens[1]);
                tankName = tokens[2];

                if (index >= 0 && index < tanks.length) {

                    if (tanks.includes(tankName)) {
                        console.log('Tank is already bought');
                    } else {
                        console.log('Tank successfully bought');
                        tanks.splice(index, 0, tankName);
                    }

                } else {
                    console.log('Index out of range');
                }

                break;
        }
    }
    
    console.log(tanks.join(', '));
}

solve(
    [
        'T-34-85 Rudy, SU-100Y, STG',
        '3',
        'Remove, SU-100Y',
        'Remove, T-34-85',
        'Remove, STG'
    ]
)