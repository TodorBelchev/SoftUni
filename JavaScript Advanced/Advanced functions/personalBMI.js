function solve(name, age, weight, height) {
    const bmi = Math.round(weight / ((height * 0.01) ** 2));
    let curr = '';
    
    if (bmi < 18.5) {
        curr = 'underweight';
    } else if (bmi < 25) {
        curr = 'normal';
    } else if (bmi < 30) {
        curr = 'overweight';
    } else if (bmi >= 30) {
        curr = 'obese';
    }

    const person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: curr
    }
    
    curr === 'obese' ? person.recommendation = 'admission required' : 'pass';
    return person;
}

console.log(solve('Peter', 29, 75, 182));