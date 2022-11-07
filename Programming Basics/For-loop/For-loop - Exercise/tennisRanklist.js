function tennisRanklist(input) {
    let tournamentsCount = Number(input[0]);
    let startingPoints = Number(input[1]);

    let pointsWon = 0;
    let tournamentsWon = 0;

    for (let i = 2; i < tournamentsCount + 2; i++) {
        let currentResult = input[i];

        if (currentResult === 'W') {
            pointsWon += 2000;
            tournamentsWon += 1;
        } else if (currentResult === 'F') {
            pointsWon += 1200;
        } else {
            pointsWon += 720;
        }
    }

    let finalPoints = startingPoints + pointsWon;
    console.log(`Final points: ${finalPoints}`);

    let averagePoints = Math.floor(pointsWon / tournamentsCount);
    console.log(`Average points: ${averagePoints}`);

    let percentWon = (tournamentsWon / tournamentsCount) * 100;
    console.log(`${percentWon.toFixed(2)}%`);
}

tennisRanklist([
    "5",        // tournaments count
    "1400",     // starting points
    "F",
    "SF",
    "W",
    "W",
    "SF"
]);
