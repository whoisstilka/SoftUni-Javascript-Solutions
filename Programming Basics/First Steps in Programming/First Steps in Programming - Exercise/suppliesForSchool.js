function suppliesForSchool(input){
    let pricePens = 5.80;
    let priceMarkers = 7.20;
    let pricePreparation = 1.20;
    
    let pensNeeded = Number(input[0] * pricePens);
    let markersNeeded = Number(input[1] * priceMarkers);
    let preparationNeeded = Number(input[2] * pricePreparation);
    let discount = Number(input[3] / 100);

    let moneyNeeded = pensNeeded + markersNeeded + preparationNeeded;
    let moneyNeededAfterDiscount = moneyNeeded - (moneyNeeded * discount);

    console.log(moneyNeededAfterDiscount);
}

suppliesForSchool(["2", "3", "4", "25"]);