function solve(arr) {
    let money = 0;
    let bitcoinCount = 0;
    let day = [];
    let priceGold = 67.51;
    let priceBitcoin = 11949.16;

    for (let i = 1; i <= arr.length; i++) {
        let currentGold = Number(arr[i - 1]);
        if (i % 3 === 0) {
            currentGold *= 0.7;
        }
        money += currentGold * priceGold;
        if (money >= priceBitcoin) {
            bitcoinCount++;
            day.push(i);
            money -= priceBitcoin;
        }
    }
    while (money >= priceBitcoin) {
        bitcoinCount++;
        money -= priceBitcoin;
    }

    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (bitcoinCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${day[0]}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}