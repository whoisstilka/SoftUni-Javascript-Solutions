function clock() {

    for (let hours = 0; hours < 24; hours++) {
        for (let min = 0; min < 60; min++) {
            console.log(`${hours}:${min}`);
        }
    }
}

clock();