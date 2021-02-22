vectorMath = {
    add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
    multiply: ([x1, y1], scalar) => [x1 * scalar, y1 * scalar],
    length: ([x1, y1]) => Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2)),
    dot: ([x1, y1], [x2, y2]) => (x1 * x2) + (y1 * y2),
    cross: ([x1, y1], [x2, y2]) => (x1 * y2) - (x2 * y1)
}

console.log(vectorMath.dot([2, 3], [2, -1]));