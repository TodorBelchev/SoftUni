function solve(input) {
    const systems = {};

    for (const line of input) {
        const [system, component, sub] = line.split(' | ');

        if (!systems.hasOwnProperty(system)) {
            systems[system] = {};
        }

        if (!systems[system].hasOwnProperty(component)) {
            systems[system][component] = [];
        }

        systems[system][component].push(sub);
    }

    Object.entries(systems)
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]))
        .forEach(x => {
            console.log(x[0]);
            Object.entries(systems[x[0]])
                .sort((a, b) => b[1].length - a[1].length)
                .forEach(c => {
                    console.log('|||' + c[0]);
                    c[1].forEach(s => console.log('||||||' + s));
                })
        });
}

solve(
    [
        'SULS | Main Site | Home Page',
        'SULS | Main Site | Login Page',
        'SULS | Main Site | Register Page',
        'SULS | Judge Site | Login Page',
        'SULS | Judge Site | Submittion Page',
        'Lambda | CoreA | A23',
        'SULS | Digital Site | Login Page',
        'Lambda | CoreB | B24',
        'Lambda | CoreA | A24',
        'Lambda | CoreA | A25',
        'Lambda | CoreC | C4',
        'Indice | Session | Default Storage',
        'Indice | Session | Default Security'
    ]
)