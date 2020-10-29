function solve(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let floor = Math.ceil(base / 2);
    for (let i = 1; i <= floor; i++) {
        let area = base * base;
        if (i !== floor) {
            stone += ((base - 2) * (base - 2)) * increment;
        }
        if (i % 5 !== 0 && i !== floor) {
            marble += (area - ((base - 2) * (base - 2))) * increment;
        }
        if (i % 5 === 0 && i !== floor) {
            lapis += (area - ((base - 2) * (base - 2))) * increment;
        }
        if (i === floor) {
            gold += area * increment;
        }
        base -= 2;
    }
    floor = Math.floor(floor * increment);
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${floor}`);
}