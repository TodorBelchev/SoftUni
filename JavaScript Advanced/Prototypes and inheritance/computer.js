function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target.name === 'Computer') {
                throw new Error('This is abstract class');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        set battery(battery) {
            if (battery.constructor.name !== 'Battery') {
                throw new TypeError('Invalid type');
            }
            this._battery = battery;
        }

        get battery() {
            return this._battery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        set keyboard(keyboard) {
            if (keyboard.constructor.name !== 'Keyboard') {
                throw new TypeError('Invalid type');
            }
            this._keyboard = keyboard;
        }

        get keyboard() {
            return this._keyboard;
        }

        set monitor(monitor) {
            if (monitor.constructor.name !== 'Monitor') {
                throw new TypeError('Invalid type');
            }
            this._monitor = monitor;
        }

        get monitor() {
            return this._monitor;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

const classes = createComputerHierarchy();

let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);
let desktop = new Desktop("JAR Computers", 3.3, 8, 1, keyboard, monitor);
console.log();
expect(desktop.manufacturer).to.equal("JAR Computers", 'Expected manufacturer did not match.');
expect(desktop.processorSpeed).to.be.closeTo(3.3, 0.01, 'Expected processor speed did not match.');
expect(desktop.ram).to.equal(8, 'Expected RAM did not match.');
expect(desktop.hardDiskSpace).to.equal(1, 'Expected hard disk space did not match.');
expect(desktop.keyboard).to.equal(keyboard, 'Expected keyboard did not match.');
expect(desktop.monitor).to.equal(monitor, 'Expected monitor did not match.');