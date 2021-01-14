function solve(input) {
    for (const line of input) {
        if (line === 'Last note') { break }
        const match = line.match(/^(?<name>[\w!@#$?]+)=(?<length>\d+)<<(?<geocode>\w+)$/);
        if (match) {
            const name = match.groups.name;
            const length = Number(match.groups.length);
            const geocode = match.groups.geocode;
            if (length === geocode.length) {
                let output = '';
                for (const char of name) {
                    if (char.match(/[a-zA-Z]/)) {
                        output += char;
                    }
                }
                console.log(`Coordinates found! ${output} -> ${geocode}`);
                continue;
            }
        }
        console.log('Nothing found!');
    }
}

solve(
    [
        '!@Ma?na?sl!u@=7<<tv58ycb4845',
        'E!ve?rest=.6<<tuvz26',
        '!K@2.,##$=4<<tvnd',
        '!Shiha@pan@gma##9<<tgfgegu67',
        '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
        'Last note'
    ]
)

solve(
    [
        'Ka?!#nch@@en@ju##nga@=3<<thfbghvn',
        '=9Cho?@#Oyu<<thvb7ydht',
        'Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6',
        'Dhau??la#gi@ri?!#=3<<bvnfhrtiuy',
        'Last note'
    ]
)