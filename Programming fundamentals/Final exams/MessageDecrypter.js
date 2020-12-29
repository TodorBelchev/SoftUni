function solve(input) {
    const n = input.shift();
    for (let i = 0; i < n; i++) {
        const current = input[i];
        const match = current.match(/^([$|%])(?<name>[A-Z][a-z]{2,})\1: \[(?<first>\d+)\]\|\[(?<second>\d+)\]\|\[(?<third>\d+)\]\|$/);
        if (match) {
            let result = `${match.groups.name}: ${String.fromCharCode(match.groups.first)}${String.fromCharCode(match.groups.second)}${String.fromCharCode(match.groups.third)}`
            console.log(result);
        } else {
            console.log('Valid message not found!');
        }
    }
}

solve(
    [
        '4',
        '$Request$: [73]|[115]|[105]|',
        '%Taggy$: [73]|[73]|[73]|',
        '%Taggy%: [118]|[97]|[108]|',
        '$Request$: [73]|[115]|[105]|[32]|[75]|',
    ]
)

solve(
    [
        '3',
        'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
        '$tAGged$: [97][97][97]|',
        '$Request$: [73]|[115]|[105]|true',
    ]
)