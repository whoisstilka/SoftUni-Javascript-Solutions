function godzillaVSKong(input) {
    let budget = Number(input[0]);
    let statistNumber = Number(input[1]);
    let priceOfStatistClothing = Number(input[2]);

    let decorPrice = budget * 0.10;
    let moneyNeededForClothes = statistNumber * priceOfStatistClothing;

    if (statistNumber > 150) {
        let discount = moneyNeededForClothes * 0.10;
        moneyNeededForClothes = moneyNeededForClothes - discount;
    }

    let totalExpenses = decorPrice + moneyNeededForClothes;

    if (totalExpenses > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`);
    }
}

godzillaVSKong(["20000", "120", "55.5"]);
// godzillaVSKong(["15437.62", "186", "57.99"]);
// godzillaVSKong(["9587.88", "222", "55.68"]);