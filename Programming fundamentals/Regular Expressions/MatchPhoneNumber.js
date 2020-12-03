function solve(input) {
    const pattern = /\+359([ -])2\1[0-9]{3}\1[0-9]{4}\b/g;
    const phones = [];
    while (phone = pattern.exec(input)) {
        phones.push(phone[0]);
    }
    console.log(phones.join(', '));
}

solve(
    "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
)