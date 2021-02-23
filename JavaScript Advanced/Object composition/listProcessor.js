function solve(input) {
    function processor(value) {
        const result = [];
        return {
            add: (value) => result.push(value),
            remove: (value) => {
                while (result.includes(value)) {
                    const index = result.indexOf(value);
                    result.splice(index, 1);
                }
            },
            print: () => console.log(result.join(','))
        }
    }

    const listProcessor = processor();
    input.map(x => x.split(' '))
        .forEach(([command, value]) => listProcessor[command](value));
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);