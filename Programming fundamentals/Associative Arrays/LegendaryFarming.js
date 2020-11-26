function solve(input) {
    const collected = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    const junk = {};
    const materials = input.split(' ');
    for (let i = 0; i < materials.length; i += 2) {
        const currentMaterial = materials[i + 1].toLowerCase();
        const quantity = Number(materials[i]);
        if (currentMaterial === 'shards' || currentMaterial === 'fragments' || currentMaterial === 'motes') {
            collected[currentMaterial] += quantity;
            if (collected[currentMaterial] >= 250) {
                let forgedItem = '';
                switch (currentMaterial) {
                    case 'shards':
                        forgedItem = 'Shadowmourne';
                        break;
                    case 'fragments':
                        forgedItem = 'Valanyr';
                        break;
                    case 'motes':
                        forgedItem = 'Dragonwrath';
                        break;
                }
                console.log(`${forgedItem} obtained!`);
                collected[currentMaterial] -= 250;
                break;
            }
        } else {
            if (!junk.hasOwnProperty(currentMaterial)) {
                junk[currentMaterial] = 0;
            }
            junk[currentMaterial] += quantity;
        }
    }
    Object.entries(collected)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(kvp => console.log(`${kvp[0]}: ${kvp[1]}`));
    Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(kvp => console.log(`${kvp[0]}: ${kvp[1]}`))
}

solve(
    '3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'
)