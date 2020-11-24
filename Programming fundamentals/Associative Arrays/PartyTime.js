function solve(input) {
    const guestList = { vip: [], regular: [] };
    const partyIndex = input.indexOf('PARTY');
    const allGuests = input.slice(0, partyIndex);
    const comingGuests = input.slice(partyIndex + 1);
    const vipGuests = guestList['vip'];
    const regularGuests = guestList['regular'];

    allGuests.forEach(guest => {
        if (isVip(guest)) {
            vipGuests.push(guest);
        } else {
            regularGuests.push(guest);
        }
    });

    comingGuests.forEach(guest => {
        if (isVip(guest)) {
            vipGuests.splice(vipGuests.indexOf(guest), 1);
        } else {
            regularGuests.splice(regularGuests.indexOf(guest), 1);
        }
    });

    console.log(vipGuests.length + regularGuests.length);
    vipGuests.concat(regularGuests).forEach(guest => console.log(guest));

    function isVip(man) {
        let status = false;
        if (Number.isInteger(Number(man[0]))) {
            status = true;
        }
        return status;
    }
}

solve(
    [
        '7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]
)