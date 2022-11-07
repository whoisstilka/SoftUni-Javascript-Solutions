function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMinutes = hour * 60 + minutes;
    let timePlus15 = timeInMinutes + 15;

    let finalHour = Math.floor(timePlus15 / 60);
    let finalMin = timePlus15 % 60;

    if (finalHour >= 24) {
        finalHour = 0;
    }
    
    if (finalMin < 10) {
        console.log(`${finalHour}:0${finalMin}`);
    } else {
        console.log(`${finalHour}:${finalMin}`);
    }
}

timePlus15Minutes(["23", "59"]);