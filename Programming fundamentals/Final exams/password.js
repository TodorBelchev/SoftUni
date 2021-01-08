function solve(input) {
    const pattern = /^(?<start>.+)>(?<nums>\d+)\|(?<chars>[a-z]+)\|(?<chars2>[A-Z]+)\|(?<random>[^><]+)<\k<start>$/g;
    const n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        const current = input[i];
        const match = pattern.exec(current);
        if (match) {
            console.log(`Password: ${match.groups.nums}${match.groups.chars}${match.groups.chars2}${match.groups.random}`);
        } else {
            console.log('Try another password!');
        }
    }
}

solve(
    [
        '3',
        '##>00|no|NO|!!!?<###',
        '##>123|yes|YES|!!!<##',
        '$$<111|noo|NOPE|<<>$$',
    ]
)

solve(
    [
        '5',
        'aa>111|mqu|BAU|mqu<aa',
        '()>111!aaa!AAA!^&*<()',
        'o>088|abc|AAA|***<o',
        'asd>asd|asd|ASD|asd<asd',
        '*>088|zzzz|ZzZ|123<*',
    ]
)