function solve(input) {
    const meetings = {};

    for (const line of input) {
        const [day, name] = line.split(' ');

        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }

    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }

}

solve(
    [
        'Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim'
    ]
)