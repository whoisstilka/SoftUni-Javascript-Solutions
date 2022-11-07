function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let teddyBearsPrice = teddyBears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    let totalToys = puzzles + dolls + teddyBears + minions + trucks;
    let toysPrice = puzzlesPrice + dollsPrice + teddyBearsPrice + minionsPrice + trucksPrice;

    if (totalToys >= 50) {
        let discount = 0.25 * toysPrice;
        toysPrice = toysPrice - discount;
    }

    let rentPrice = 0.10 * toysPrice;
    let earnedMoney = toysPrice - rentPrice;

    if (earnedMoney >= tripPrice) {
        console.log(`Yes! ${(earnedMoney - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - earnedMoney).toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);