function solve(input) {
    const arr = input.split(/\s+/);
    let result = 0;
    if (arr[0] !== '') {
        for (const el of arr) {
            const firstLetter = el.charAt(0);
            const lastLetter = el.charAt(el.length - 1);
            let number = Number(el.substring(1, el.length - 1));
            if (/^[A-Z]$/.test(firstLetter)) {
                number /= (firstLetter.charCodeAt(0) - 64);
            } else if (/^[a-z]$/.test(firstLetter)) {
                number *= (firstLetter.charCodeAt(0) - 96);
            }
            if (/^[A-Z]$/.test(lastLetter)) {
                number -= (lastLetter.charCodeAt(0) - 64);
            } else if (/^[a-z]$/.test(lastLetter)) {
                number += (lastLetter.charCodeAt(0) - 96);
            }
            result += number;
        }
    }
    console.log(result.toFixed(2));
}

solve(
    'P34562Z q2576f   H456z'
)