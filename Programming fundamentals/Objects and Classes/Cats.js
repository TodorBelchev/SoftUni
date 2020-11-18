function solve(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    for (let i = 0; i < arr.length; i++) {
        const [name, age] = [...arr[i].split(` `)];
        cats.push(new Cat(name, age))
    }
    for (const cat of cats) {
        cat.meow();
    }
}

solve(
    ['Mellow 2', 'Tom 5']
)