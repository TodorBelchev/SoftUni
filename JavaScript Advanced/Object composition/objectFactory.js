function solve(input) {
    const result = {};
    JSON.parse(input).forEach(x => Object.assign(result, x));
    return result;
}

solve(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`)