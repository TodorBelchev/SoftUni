function  solve(input) {
    if (input.dizziness === true) {
        input.levelOfHydrated += input.weight * 0.1 * input.experience;
        input.dizziness = false;
    }
    return input;
}