function yardGardening(input){
    let gardenSize = Number(input[0]);
    let pricePerSM = 7.61;
    let discount = 18 / 100;
    let totalPrice = gardenSize * pricePerSM;
    let discountSize = totalPrice * discount;
    let finalPrice = totalPrice - discountSize;

    console.log("The final price is: " + finalPrice + " lv.");
    console.log("The discount is: " + discountSize + " lv.");
}

yardGardening(["150"])