function footballKit(input) {
    let kitPrice = Number(input[0]);
    let priceNeededForAward = Number([input[1]]);
    let discount = 0.15;

    let shortsPrice = kitPrice * 0.75;
    let socksPrice = shortsPrice * 0.2;
    let footballShoes = (kitPrice + shortsPrice) * 2;

    let sum = kitPrice + shortsPrice + socksPrice + footballShoes;
    let sumAfterDiscount = sum - (sum * discount);

    if(sumAfterDiscount >= priceNeededForAward) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${sumAfterDiscount.toFixed(2)} lv.`);
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(priceNeededForAward - sumAfterDiscount).toFixed(2)} lv. more.`);
    }
}

// footballKit(["25", "100"]);
// footballKit(["55", "310"]);
footballKit(["59.99", "500"]);
