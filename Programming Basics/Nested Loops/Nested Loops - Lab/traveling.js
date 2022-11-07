function traveling(input) {
    let destination = input.shift();

    while (destination != "End") {
        let price = Number(input.shift());
        let savedMoney = 0;
        while (savedMoney < price) {
            savedMoney += Number(input.shift());
        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
    }
}

traveling([
    "Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"
]);