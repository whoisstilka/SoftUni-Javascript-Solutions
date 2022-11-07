function worldSwimmingRecord(input) {
    let recordTime = Number(input[0]);
    let lengthInMeters = Number(input[1]);
    let swimTime1Meter = Number(input[2]);

    let swimTime = lengthInMeters * swimTime1Meter;
    let addedTime = Math.floor(lengthInMeters / 15) * 12.5;
    let totalTime = swimTime + addedTime;

    if (totalTime < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordTime).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);