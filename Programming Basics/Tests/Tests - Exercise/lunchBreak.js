function lunchBreak(input) {
    let movie = input[0];
    let episodeLength = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForLunch = breakTime * 1/8;
    let timeForBreak = breakTime * 1/4;
    let timeLeft = breakTime - timeForLunch - timeForBreak;

    if (timeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${movie} and left with ${Math.ceil(timeLeft - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movie}, you need ${Math.ceil(episodeLength - timeLeft)} more minutes.`);
    }
}

// lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);