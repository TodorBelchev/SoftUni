function solve(input) {
    const flights = {};

    for (const line of input[0]) {
        const [sector, destination] = line.split(' ');

        if (!flights.hasOwnProperty(sector)) {
            flights[sector] = {
                Destination: destination,
                Status: 'Ready to fly'
            };
        }

    }

    for (const line of input[1]) {
        const [sector, status] = line.split(' ');

        if (flights.hasOwnProperty(sector)) {
            flights[sector].Status = status;
        }

    }

    Object.entries(flights).forEach(kvp => {
        if (kvp[1].Status == input[2]) {
            console.log(kvp[1]);
        }
    })
}

solve(
    [
        ["WN269 Delaware",
            "FL2269 Oregon",
            "WN498 Las vegas",
            "WN3145 Ohio",
            "WN612 Alabama",
            "WN4010 New York",
            "WN1173 California",
            "DL2120 Texas",
            "KL5744 Illinois"
            , "WN678 Pennsylvania"],
        ["DL2120 Cancelled",
            "WN612 Cancelled",
            "WN1173 Cancelled",
            "SK330 Cancelled"],
        ["Ready to fly"]]
)