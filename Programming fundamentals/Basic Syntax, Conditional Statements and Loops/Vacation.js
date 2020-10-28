function solve(count, type, day) {
    let price = 0;
    switch (type) {
        case `Students`:
            switch (day) {
                case `Friday`:
                    price = 8.45;
                    break;
                case `Saturday`:
                    price = 9.8;
                    break;
                case `Sunday`:
                    price = 10.46;
                    break;
            }
            if (count >= 30) {
                price *= 0.85;
            }
            break;
        case `Business`:
            if (count >= 100) {
                count -= 10;
            }
            switch (day) {
                case `Friday`:
                    price = 10.9;
                    break;
                case `Saturday`:
                    price = 15.6;
                    break;
                case `Sunday`:
                    price = 16;
                    break;
            }
            break;
        case `Regular`:
            switch (day) {
                case `Friday`:
                    price = 15;
                    break;
                case `Saturday`:
                    price = 20;
                    break;
                case `Sunday`:
                    price = 22.5;
                    break;
            }
            if (count >= 10 && count <= 20) {
                price *= 0.95;
            }
            break;
    }
    let total = count * price;
    console.log(`Total price: ${total.toFixed(2)}`);
}