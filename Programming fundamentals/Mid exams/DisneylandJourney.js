function solve(input) {
    let cost = input[0];
    let months = input[1];
    let saved = 0;
    for (let i = 1; i <= months; i++) {
        if (i !== 1 && i % 2 !== 0) {
            saved *= 0.84;
        }
        if (i % 4 === 0) {
            saved *= 1.25;
        }
        saved += cost * 0.25;
    }
    if (saved >= cost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(saved - cost).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(cost - saved).toFixed(2)}lv. more.`);
    }
}

solve(
    [
        3265,
        3
    ]
)