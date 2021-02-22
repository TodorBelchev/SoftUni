function solution() {
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    const manager = {
        restock: (item, quantity) => {
            stock[item] += Number(quantity);
            return 'Success';
        },
        prepare: (recipe, quantity) => {
            if (recipes.hasOwnProperty(recipe)) {
                const ingredients = Object.entries(recipes[recipe]);
                for (const [ingredient, count] of ingredients) {
                    if (stock[ingredient] < quantity * count) {
                        return `Error: not enough ${ingredient} in stock`
                    }
                }
        
                ingredients.forEach(([ingredient, count]) => stock[ingredient] -= quantity * count);
                return 'Success';
            }
        },
        report: () => {
            return Object.entries(stock).map(x => x = `${x[0]}=${x[1]}`).join(' ');
        }
    }

    return (input) => {
        const [command, item, quantity] = input.split(' ');
        return manager[command](item, quantity);
    }
}

let manager = solution();
console.log(manager("restock flavour 50"));  // Success
console.log(manager("prepare lemonade 4"));  // Error: not enough carbohydrate in stock