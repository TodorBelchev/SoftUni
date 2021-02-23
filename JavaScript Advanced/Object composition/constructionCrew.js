function  solve(input) {
    if (input.dizziness === true) {
        input.levelOfHydrated += input.weight * 0.1 * input.experience;
        input.dizziness = false;
    }
    return input;
}

console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));