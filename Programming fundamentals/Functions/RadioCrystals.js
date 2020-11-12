function solve(input) {
    const target = input[0];
    let cutCounter;
    let lapCounter;
    let grindCounter;
    let etchCounter;

    function cut(num, target) {
        let counter = 0;
        while (num / 4 >= target - 1) {
            num /= 4;
            counter++;
        }
        return [counter, num];
    }

    function lap(num, target) {
        let counter = 0;
        while (num * 0.8 >= target - 1) {
            num *= 0.8;
            counter++;
        }
        return [counter, num];
    }

    function grind(num, target) {
        let counter = 0;
        while (num - 20 >= target - 1) {
            num -= 20;
            counter++;
        }
        return [counter, num];
    }

    function etch(num, target) {
        let counter = 0;
        while (num - 2 >= target - 1) {
            num -= 2;
            counter++;
        }
        return [counter, num];
    }

    for (let i = 1; i < input.length; i++) {
        let start = input[i];

        while (target !== start) {
            const arr = cut(start, target);
            cutCounter = arr[0];
            start = Math.floor(arr[1]);

            if (target === start + 1) {
                break;
            }

            const lapArr = lap(start, target);
            lapCounter = lapArr[0];
            start = Math.floor(lapArr[1]);

            if (target === start + 1) {
                break;
            }

            const grindArr = grind(start, target);
            grindCounter = grindArr[0];
            start = Math.floor(grindArr[1]);

            if (target === start + 1) {
                break;
            }

            const etchArr = etch(start, target);
            etchCounter = etchArr[0];
            start = Math.floor(etchArr[1]);

            if (target === start + 1) {
                break;
            }

        }
        console.log(`Processing chunk ${input[i]} microns`);
        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`);
            console.log('Transporting and washing');
        }
        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`);
            console.log('Transporting and washing');
        }
        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`);
            console.log('Transporting and washing');
        }
        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`);
            console.log('Transporting and washing');
        }
        if (target !== start) {
            console.log('X-ray x1');
        }
        console.log(`Finished crystal ${target} microns`);
    }
}



solve(
    [1000, 4000, 8100]
)