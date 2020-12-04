function solve(input) {
    const pattern = /(?<day>\d{2})([\.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;
    while (valid = pattern.exec(input)) {
        const day = valid.groups['day'];
        const month = valid.groups['month'];
        const year = valid.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

solve(
    "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"
)