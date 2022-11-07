function oscarsCeremony(input) {
    let rent = Number(input[0]);
    let priceAwards = rent - (rent * 0.3);
    let catering = priceAwards - (priceAwards * 0.15);
    let audio = catering * 0.5;

    let sum = rent + priceAwards + catering + audio;

    console.log(sum.toFixed(2));
}

// oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);
