function repainting(input){
    let priceNailon = 1.50;
    let pricePaint = 14.50;
    let pricePaintReducer = 5;
    let priceBag = 0.40;
    
    let nailonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let reducerNeeded = Number(input[2]);
    let hoursOfWork = Number(input[3]);

    let nailonAdded = nailonNeeded + 2;
    let paintAdded = paintNeeded + paintNeeded * 10 / 100;

    let materialPrice = (nailonAdded * priceNailon) + (paintAdded * pricePaint) + (reducerNeeded * pricePaintReducer) + priceBag;
    
    let priceOfWork = materialPrice * 30 / 100;
    let workPrice = hoursOfWork * priceOfWork;

    let totalPrice = materialPrice + workPrice;

    console.log(totalPrice);
}

repainting(["10", "11", "4", "8"]);