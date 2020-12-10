function solve(input) {
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let maxLectures = 0;
    input.map(Number).forEach(n => {
        if (n > maxLectures) {
            maxLectures = n;
        }
    });
    let bonus = Math.ceil((maxLectures / lecturesCount) * (5 + initialBonus));
    if (studentsCount > 0) {
        console.log(`Max Bonus: ${bonus}.`);
        console.log(`The student has attended ${maxLectures} lectures.`);
    } else {
        console.log(`Max Bonus: 0.`);
        console.log(`The student has attended 0 lectures.`);
    }
}

solve(
    [
        '10', '30', '14', '8',
        '23', '27', '28', '15',
        '17', '25', '26', '5',
        '18'
    ]
)