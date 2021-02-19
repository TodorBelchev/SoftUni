function solve(area, vol, input) {
    input = JSON.parse(input).map(x => {
        return x = { area: Math.abs(area.call(x)), volume: Math.abs(vol.call(x)) }
    });
    return input;
}

function area() {
    return this.x * this.y;
}

function vol() {
    return this.x * this.y * this.z;
}
