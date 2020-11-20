function solve(input) {
    const students = {};
    for (const line of input) {
        const [studentString, gradeString, scoreString] = line.split(', ')
        const [a, student] = studentString.split(': ');
        let [b, grade] = gradeString.split(': ');
        let [c, score] = scoreString.split(': ');
        grade = Number(grade);
        score = Number(score);

        if (score >= 3) {
            grade += 1
        } else {
            continue;
        }

        if (!students.hasOwnProperty(grade)) {
            students[grade] = {
                list: [],
                grades: []
            }
        }
        students[grade].list.push(student);
        students[grade].grades.push(score);

    }

    Object.entries(students).forEach(kvp => {
        console.log(`${kvp[0]} Grade `);
        console.log(`List of students: ${kvp[1].list.join(', ')}`);
        const averageScore = kvp[1].grades.reduce((acc, curr) => acc + curr) / kvp[1].grades.length;
        console.log(`Average annual grade from last year: ${averageScore.toFixed(2)}\r\n`);
    })
}

solve(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
)