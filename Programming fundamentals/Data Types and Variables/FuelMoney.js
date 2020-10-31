function solve(distance, passengers, price) {
    let consumption = 7;
    let total = ((distance / 100 * consumption) + passengers * 0.1) * price;
    console.log(`Needed money for that trip is ${total}lv.`);
}