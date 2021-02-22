function solution() {
    let result = '';
    const actions = {
        append: (input) => result += input,
        removeStart: (n) => result = result.slice(n),
        removeEnd: (n) => result = result.substring(0, result.length - n),
        print: () => console.log(result)
    }
    return actions;
}

let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();