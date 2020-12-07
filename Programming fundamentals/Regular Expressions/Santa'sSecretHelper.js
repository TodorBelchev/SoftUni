function solve(input) {
    const key = Number(input.shift());
    const kids = [];
    for (const line of input) {
        if (line === 'end') { break }
        let decrypted = '';
        for (const char of line) {
            const code = char.charCodeAt() - key;
            decrypted += String.fromCharCode(code);
        }
        const pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+?!(?<behaviour>[GN])!/g;
        const match = pattern.exec(decrypted);
        let name;
        let behaviour;
        if (match) {
            name = match.groups.name;
            behaviour = match.groups.behaviour;
        }
        if (behaviour === 'G') {
            kids.push(name);
        }
    }
    console.log(kids.join('\r\n'));
}

solve(
    [
        '4',
        '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
        '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
        ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
        "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
        'DReh}e=<4lhzj1%K%',
        'end'
      ]
)