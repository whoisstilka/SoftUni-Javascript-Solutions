function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = input[2];
    let sum = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": console.log(sum = (quantity * 2.50).toFixed(2)); break;
            case "apple": console.log(sum = (quantity * 1.20).toFixed(2)); break;
            case "orange": console.log(sum = (quantity * 0.85).toFixed(2)); break;
            case "grapefruit": console.log(sum = (quantity * 1.45).toFixed(2)); break;
            case "kiwi": console.log(sum = (quantity * 2.70).toFixed(2)); break;
            case "pineapple": console.log(sum = (quantity * 5.50).toFixed(2)); break;
            case "grapes": console.log(sum = (quantity * 3.85).toFixed(2)); break;
            default: console.log("error");
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": console.log(sum = (quantity * 2.70).toFixed(2)); break;
            case "apple": console.log(sum = (quantity * 1.25).toFixed(2)); break;
            case "orange": console.log(sum = (quantity * 0.90).toFixed(2)); break;
            case "grapefruit": console.log(sum = (quantity * 1.60).toFixed(2)); break;
            case "kiwi": console.log(sum = (quantity * 3.00).toFixed(2)); break;
            case "pineapple": console.log(sum = (quantity * 5.60).toFixed(2)); break;
            case "grapes": console.log(sum = (quantity * 4.20).toFixed(2)); break;
            default: console.log("error");
        }
    } else {
        console.log("error");
    }

    // switch (day) {
    //     case "Monday":
    //         switch (fruit) {
    //             case "banana":
    //             case "apple":
    //             case "orange":
    //             case "grapefruit":
    //             case "kiwi":
    //             case "pineapple":
    //             case "grapes":
    //         }
    //     case "Tuesday":
    //         switch (fruit) {
    //             case "banana":
    //             case "apple":
    //             case "orange":
    //             case "grapefruit":
    //             case "kiwi":
    //             case "pineapple":
    //             case "grapes":
    //         }
    //     case "Wednesday":
    //         switch (fruit) {
    //             case "banana":
    //             case "apple":
    //             case "orange":
    //             case "grapefruit":
    //             case "kiwi":
    //             case "pineapple":
    //             case "grapes":
    //         }
    //     case "Thursday":
    //         switch (fruit) {
    //             case "banana":
    //             case "apple":
    //             case "orange":
    //             case "grapefruit":
    //             case "kiwi":
    //             case "pineapple":
    //             case "grapes":
    //         }
    //     case "Friday":
    //         switch (fruit) {
    //             case "banana": sum = quantity * 2.50; break;
    //             case "apple": sum = quantity * 1.20; break;
    //             case "orange": sum = quantity * 0.85; break;
    //             case "grapefruit": sum = quantity * 1.45; break;
    //             case "kiwi": sum = quantity * 2.70; break;
    //             case "pineapple": sum = quantity * 5.50; break;
    //             case "grapes": sum = quantity * 3.85; break;
    //         }
    //     case "Saturday":
    //         switch (fruit) {
    //             case "banana":
    //             case "apple":
    //             case "orange":
    //             case "grapefruit":
    //             case "kiwi":
    //             case "pineapple":
    //             case "grapes":
    //         }
    //     case "Sunday":
    //         switch (fruit) {
    //             case "banana": sum = quantity * 2.70; break;
    //             case "apple": sum = quantity * 1.25; break;
    //             case "orange": sum = quantity * 0.90; break;
    //             case "grapefruit": sum = quantity * 1.60; break;
    //             case "kiwi": sum = quantity * 3.00; break;
    //             case "pineapple": sum = quantity * 5.60; break;
    //             case "grapes": sum = quantity * 4.20; break;
    //         }
    //     default: console.log("error");
    // }
}

// fruitShop(["apple", "Tuesday", "2"]);
// fruitShop(["orange", "Sunday", "3"]);
// fruitShop(["kiwi", "Monday", "2.5"]);
// fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);