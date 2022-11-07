function santasHoliday(input) {
    let stayDays = Number(input[0]);
    let roomType = input[1];
    let grade = input[2];

    let stayNights = stayDays - 1;
    let roomPrice = 0;
    let priceOfStay = 0;
    let totalCost = 0;
    let discountedCost = 0;

    switch (roomType) {
        case "room for one person":
            roomPrice = 18;
            priceOfStay = roomPrice * stayNights;

            if (grade === "positive") {
                totalCost = priceOfStay + (priceOfStay * 0.25);
            } else {
                totalCost = priceOfStay - (priceOfStay * 0.1);
            }
            break;
        case "apartment":
            roomPrice = 25;
            priceOfStay = stayNights * roomPrice;

            if (stayDays < 10) {
                discountedCost = priceOfStay - (priceOfStay * 0.30);
            } else if (stayDays >= 10 && stayDays <= 15) {
                discountedCost = priceOfStay - (priceOfStay * 0.35);
            } else {
                discountedCost = priceOfStay - (priceOfStay * 0.5);
            }

            if (grade === "positive") {
                totalCost = discountedCost + (discountedCost * 0.25);
            } else {
                totalCost = discountedCost - (discountedCost * 0.1);
            }
            break;
        case "president apartment":
            roomPrice = 35;
            priceOfStay = stayNights * roomPrice;

            if (stayDays < 10) {
                discountedCost = priceOfStay - (priceOfStay * 0.1);
            } else if (stayDays >= 10 && stayDays <= 15) {
                discountedCost = priceOfStay - (priceOfStay * 0.15);
            } else {
                discountedCost = priceOfStay - (priceOfStay * 0.2);
            }

            if (grade === "positive") {
                totalCost = discountedCost + (discountedCost * 0.25);
            } else {
                totalCost = discountedCost - (discountedCost * 0.1);
            }
            break;
    }

    console.log(totalCost.toFixed(2));
}

// santasHoliday(["14", "apartment", "positive"]);
santasHoliday(["30", "president apartment", "negative"]);


