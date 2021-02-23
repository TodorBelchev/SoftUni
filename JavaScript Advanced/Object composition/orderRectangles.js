function solve(input) {
    const result = input.map(([width, height]) => ({
        width,
        height,
        area: () => width * height,
        compareTo(other) {
            let result = other.area() - this.area();
            return result == 0 ? other.width - this.width : result;
        }
    }))
        .sort((a, b) => a.compareTo(b));

    return result.sort((a, b) => a.compareTo(b));
}

console.log(solve([[1, 20], [20, 1], [5, 3], [5, 3]]));