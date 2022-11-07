function cleverLily(input) {
    age = Number(input[0]);
    priceWashingMashine = Number(input[1]);
    priceOneToy = Number(input[2]);
 
    let savedMoney = 0;
    let countBrothersMoney = 0;
    let countToys = 0;
    let giftMoney = 10;
 
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += giftMoney;
            giftMoney += 10;
            countBrothersMoney++;
        }
        else {
            countToys++;
        }
    }
    savedMoney = savedMoney - countBrothersMoney*1;
    let totalPriceForToys=priceOneToy * countToys;
    if (savedMoney + totalPriceForToys >= priceWashingMashine) {
        console.log(`Yes! ${((savedMoney + totalPriceForToys) - priceWashingMashine).toFixed(2)}`)
    }
    else {
        console.log(`No! ${(priceWashingMashine - (savedMoney + totalPriceForToys)).toFixed(2)}`)
 
    }
}

cleverLily(["10", "170.00", "6"]);
