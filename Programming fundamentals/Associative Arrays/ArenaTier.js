function solve(input) {

    const gladiators = {};

    for (const line of input) {
        if (line === 'Ave Cesar') {
            break;
        }

        if (!line.includes(' vs ')) {
            const [gladiator, technique, skill] = line.split(' -> ');
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
            }
            if (!gladiators[gladiator].hasOwnProperty(technique)) {
                gladiators[gladiator][technique] = 0;
            }
            if (gladiators[gladiator][technique] < skill) {
                gladiators[gladiator][technique] = Number(skill);
            }
        } else if (line.includes(' vs ')) {
            const [gladiator1, gladiator2] = line.split(' vs ');
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                const firstTechniques = gladiators[gladiator1];
                const secondTechniques = gladiators[gladiator2];

                for (let technique of Object.entries(firstTechniques)) {
                    if (secondTechniques.hasOwnProperty(technique[0])) {
                        const firstPower = getTotalSkill(gladiators[gladiator1]);
                        const secondPower = getTotalSkill(gladiators[gladiator2]);
                        if (firstPower > secondPower) {
                            delete gladiators[gladiator2];
                            break;
                        } else if (secondPower > firstPower) {
                            delete gladiators[gladiator1];
                            break;
                        }
                    }
                }
            }
        }
    }

    Object.entries(gladiators)
        .sort((a, b) => getTotalSkill(b[1]) - getTotalSkill(a[1]) || a[0].localeCompare(b[0]))
        .forEach(kvp => {
            console.log(`${kvp[0]}: ${getTotalSkill(kvp[1])} skill`);
            Object.entries(kvp[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(kvp => console.log(`- ${kvp[0]} <!> ${kvp[1]}`));
        });

    function getTotalSkill(man) {
        let totalSkill = 0;
        Object.keys(man).forEach(technique => totalSkill += Number(man[technique]));
        return totalSkill;
    }

}

solve(
    [
        'Pesho -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
)