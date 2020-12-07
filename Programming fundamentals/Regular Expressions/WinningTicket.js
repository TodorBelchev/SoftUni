function solve(input) {
    input = input[0].split(',');
    for (let line of input) {
        line = line.trim();
        const regex = /[@]{6,}|[$]{6,}|[#]{6,}|[\\^]{6,}/g;
        if (line.length !== 20) {
            console.log('invalid ticket');
        } else {
            const firstHalf = line.substring(0, 10);
            const secondHalf = line.substring(10);
            let firstMatch = firstHalf.match(regex);
            let secondMatch = secondHalf.match(regex);
            if (firstMatch) {
                firstMatch = firstMatch[0];
            } else {
                firstMatch = '1';
            }
            if (secondMatch) {
                secondMatch = secondMatch[0];
            } else {
                secondMatch = '2';
            }
            if (firstMatch[0] === secondMatch[0]) {
                const length = Math.min(firstMatch.length, secondMatch.length);
                if (length === 10) {
                    console.log(`ticket "${line}" - ${length}${firstMatch[0]} Jackpot!`);
                } else {
                    console.log(`ticket "${line}" - ${length}${firstMatch[0]}`);
                }
            } else {
                console.log(`ticket "${line}" - no match`);
            }
        }
    }
}

solve(
    [ '@@@@@@@@@@et@@@@@@@@' ]
)