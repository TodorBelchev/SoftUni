function solve(input) {

    function carHandle() {
        const cars = {};
        return {
            create: (car, option, parent) => {
                if (option) {
                    cars[car] = Object.create(cars[parent]);
                } else {
                    cars[car] = {};
                }
            },
            set: (car, prop, value) => cars[car][prop] = value,
            print: (car) => {
                const result = [];

                for (const key in cars[car]) {
                    result.push(`${key}:${cars[car][key]}`)
                }

                console.log(result.join(', '));
            }
        }
    }

    const carFactory = carHandle();
    input.map(x => x.split(' ')).forEach(([command, car, option, parent]) => carFactory[command](car, option, parent));
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);