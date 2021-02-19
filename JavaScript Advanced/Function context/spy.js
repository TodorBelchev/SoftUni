function Spy(obj, method) {
    const result = { count : 0 };
    const original = obj[method];

    obj[method] = function() {
        result.count++;
        return original.apply(this, arguments);
    }

    return result;
}

let spy = Spy(console,"log");

console.log(spy); // { count: 1 }
console.log(spy); // { count: 2 }
console.log(spy); // { count: 3 }