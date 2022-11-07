function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee": sum = quantity * 0.50; break;
                case "water": sum = quantity * 0.80; break;
                case "beer": sum = quantity * 1.20; break;
                case "sweets": sum = quantity * 1.45; break;
                case "peanuts": sum = quantity * 1.60; break;
            }
            break;
        case "Plovdiv":
            switch (product) {
                case "coffee": sum = quantity * 0.40; break;
                case "water": sum = quantity * 0.70; break;
                case "beer": sum = quantity * 1.15; break;
                case "sweets": sum = quantity * 1.30; break;
                case "peanuts": sum = quantity * 1.50; break;
            }
            break;
        case "Varna":
            switch (product) {
                case "coffee": sum = quantity * 0.45; break;
                case "water": sum = quantity * 0.70; break;
                case "beer": sum = quantity * 1.10; break;
                case "sweets": sum = quantity * 1.35; break;
                case "peanuts": sum = quantity * 1.55; break;
            }
            break;
    }

    // if(city === "Sofia"){
    //     if(product === "coffee") {
    //         sum = quantity * 0.50;
    //     } else if(product === "water") {
    //         sum = quantity * 0.80;
    //     } else if(product === "beer") {
    //         sum = quantity * 1.20;
    //     } else if(product === "sweets") {
    //         sum = quantity * 1.45;
    //     } else {
    //         sum = quantity * 1.60;
    //     }
    // } else if(city === "Plovdiv") {
    //     if(product === "coffee") {
    //         sum = quantity * 0.40;
    //     } else if(product === "water") {
    //         sum = quantity * 0.70;
    //     } else if(product === "beer") {
    //         sum = quantity * 1.15;
    //     } else if(product === "sweets") {
    //         sum = quantity * 1.30;
    //     } else {
    //         sum = quantity * 1.50;
    //     }
    // } else {
    //     if(product === "coffee") {
    //         sum = quantity * 0.45;
    //     } else if(product === "water") {
    //         sum = quantity * 0.70;
    //     } else if(product === "beer") {
    //         sum = quantity * 1.10;
    //     } else if(product === "sweets") {
    //         sum = quantity * 1.35;
    //     } else {
    //         sum = quantity * 1.55;
    //     }
    // }

    console.log(sum);
}

smallShop(["beer", "Sofia", "2"]);