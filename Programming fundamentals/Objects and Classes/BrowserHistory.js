function solve(obj, actions) {
    for (const line of actions) {
        const [command, ...rest] = line.split(' ');
        const site = rest.join(' ');

        if (command === 'Open') {
            obj['Open Tabs'].push(site);
            obj['Browser Logs'].push(line);
        } else if (command === 'Close') {
            if (obj['Open Tabs'].includes(site)) {
                obj['Recently Closed'].push(site);
                obj['Browser Logs'].push(line);
                while (obj['Open Tabs'].includes(site)) {
                    const index = obj['Open Tabs'].indexOf(site);
                    obj['Open Tabs'].splice(index, 1);
                }
            }
        } else if (command === 'Clear') {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        }
    }

    console.log(obj['Browser Name']);
    const kvp = Object.entries(obj);

    for (let i = 1; i < kvp.length; i++) {
        console.log(`${kvp[i][0]}: ${kvp[i][1].join(', ')}`);
    }
    
}

solve(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)