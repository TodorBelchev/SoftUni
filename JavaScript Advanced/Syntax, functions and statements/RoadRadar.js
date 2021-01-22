function solve(speed, type) {
    const limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    const diff = speed - limits[type];

    if (diff > 0) {
        logSpeeding(diff);
    } else {
        console.log(`Driving ${speed} km/h in a ${limits[type]} zone`);
    }

    function logSpeeding(speeding) {
        if (speeding <= 20) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits[type]} - speeding`);
        } else if (speeding <= 40) {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits[type]} - excessive speeding`);
        } else {
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits[type]} - reckless driving`);
        }
    }
}

solve(50, 'city');