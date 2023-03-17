function moneyNeeded(fruit, weightInGrams, pricePerKilo) {
    let price = (pricePerKilo * (weightInGrams / 1000)).toFixed(2);
    let weightToKilo = (weightInGrams / 1000).toFixed(2);

    console.log(`I need $${price} to buy ${weightToKilo} kilograms ${fruit}.`);
}

moneyNeeded('orange', 2500, 1.80);
moneyNeeded('apple', 1563, 2.35);