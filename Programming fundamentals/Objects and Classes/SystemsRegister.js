function solve(input) {
    let system = {};
    for (const line of input) {
        let [systemName, componentName, subComponentName] = line.split(` | `);
        if (!system.hasOwnProperty(systemName)) {
            system[systemName] = {};
        }
        if (!system[systemName].hasOwnProperty(componentName)) {
            system[systemName][componentName] = [];
        }
        system[systemName][componentName].push(subComponentName);
    }
    let sorted = Object.keys(system).sort((a, b) => Object.keys(system[b]).length - Object.keys(system[a]).length || a.localeCompare(b));
    sorted.forEach(key => {
        console.log(key);
        let sortedComponents = Object.keys(system[key]).sort((a, b) => Object.keys(system[key][b]).length - Object.keys(system[key][a]).length);
        sortedComponents.forEach(comp => {
            console.log(`|||${comp}`);
            system[key][comp].forEach(subComp => {
                console.log(`||||||${subComp}`);
            })
        })
    })
}

solve(
    [
        `SULS | Main Site | Home Page`,
        `SULS | Main Site | Login Page`,
        `SULS | Main Site | Register Page`,
        `SULS | Judge Site | Login Page`,
        `SULS | Judge Site | Submittion Page`,
        `Lambda | CoreA | A23`,
        `SULS | Digital Site | Login Page`,
        `Lambda | CoreB | B24`,
        `Lambda | CoreA | A24`,
        `Lambda | CoreA | A25`,
        `Lambda | CoreC | C4`,
        `Indice | Session | Default Storage`,
        `Indice | Session | Default Security`
    ]
)