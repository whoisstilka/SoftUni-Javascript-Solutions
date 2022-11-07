function pcStore(input) {
    let cpuPriceInDollars = Number(input[0]);
    let gpuPriceInDollars = Number(input[1]);
    let ramPriceInDollars = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let cpuPriceInBgn = cpuPriceInDollars * 1.57;
    let gpuPriceInBgn = gpuPriceInDollars * 1.57;
    let ramPriceInBgn = (ramPriceInDollars * ramCount) * 1.57;

    let priceCPUAfterDiscount = cpuPriceInBgn - (cpuPriceInBgn * discount);
    let priceGPUAfterDiscount = gpuPriceInBgn - (gpuPriceInBgn * discount);

    let totalPrice = priceCPUAfterDiscount + priceGPUAfterDiscount + ramPriceInBgn;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
}

// pcStore(["500", "200", "80", "2", "0.05"]);
// pcStore(["1200", "850", "120", "4", "0.1"]);
pcStore(["200", "100", "80", "1", "0.01"]);
