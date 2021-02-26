function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(value) {
            this.units = value;
        }

        convertParams(param) {
            const obj = {
                m: (param) => param /= 10,
                cm: (param) => param,
                mm: (param) => param *= 10
            }
            return obj[this.units](param);
        }
    }

    class Circle extends Figure {
        constructor(radius, units = 'cm') {
            super(units);
            this._radius = radius;
        }

        get radius () {
            return this.convertParams(this._radius);
        }

        get area() {
            return Math.PI * this.radius ** 2;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }

    }

    class Rectangle extends Figure {
        constructor(width, height, units = 'cm') {
            super(units);
            this._width = width;
            this._height = height;
        }

        get width() {
            return this.convertParams(this._width);
        }

        get height() {
            return this.convertParams(this._height);
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let app = solve();

let c = new app.Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new app.Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50