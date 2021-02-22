function add(a) {
    let result = 0;
    result += a;

    function sum(b) {
        result += b;
        return sum;
    }

    sum.toString = () => result;

    return sum;
}

console.log(add(1));