function solve(fruit, weightInGrams, price) {
    const weight = weightInGrams / 1000;
    const total = weight * price;
    console.log(`I need $${total.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solve(
    'orange', 2500, 1.80
)