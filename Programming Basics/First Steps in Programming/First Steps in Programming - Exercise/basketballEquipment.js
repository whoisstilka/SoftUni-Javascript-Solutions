function basketballEquipment(input){
    let anualPriceTraining = Number(input[0]);
    let trainingShoesPrice = anualPriceTraining - (anualPriceTraining * 40 / 100);
    let trainingJerseyPrice = trainingShoesPrice - (trainingShoesPrice * 20 / 100);
    let basketballPrice = trainingJerseyPrice / 4;
    let basketballAccessoriesPrice = basketballPrice / 5;

    let totalMoneyNeeded = anualPriceTraining + trainingShoesPrice + trainingJerseyPrice + basketballPrice + basketballAccessoriesPrice;

    console.log(totalMoneyNeeded);
}

basketballEquipment(["550"]);
