function solve(input) {

    function isValid(type, fire) {
        if ((type === 'High' && fire >= 81 && fire <= 125) ||
            (type === 'Medium' && fire >= 51 && fire <= 80) ||
            (type === 'Low' && fire >= 1 && fire <= 50)) {
            return true;
        }
        return false;
    }

    let water = Number(input[1]);
    const cells = input[0].split('#')
    const output = [];
    let effort = 0;
    let totalFire = 0;

    for (const cell of cells) {

        const tokens = cell.split(' = ');
        const type = tokens[0];
        const fire = Number(tokens[1]);

        if (isValid(type, fire)) {

            if (water < fire) { continue }

            water -= fire;
            effort += fire * 0.25;
            totalFire += fire;
            output.push(fire);

            if (water <= 0) {
                break;
            }

        }
    }

    console.log('Cells:');
    output.forEach(x => console.log(` - ${x}`));
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);

}

solve(
    ['High = 89#Low = 28#Medium = 77#Low = 23', '1250']
)