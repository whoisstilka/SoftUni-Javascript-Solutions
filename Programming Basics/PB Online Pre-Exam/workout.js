function workout(input) {
    let trainingDays = Number(input[0]);
    let kmRanFirstDay = Number(input[1]);

    let totalKm = kmRanFirstDay;

    for (let i = 2; i <= trainingDays + 1; i++) {
        let nextDay = input[i];
        kmRanFirstDay = kmRanFirstDay + (kmRanFirstDay * (nextDay / 100));
        totalKm += kmRanFirstDay;
    }

    if (totalKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`);
    }
}

// workout([
//     "5",
//     "30",
//     "10",
//     "15",
//     "20",
//     "5",
//     "12"
// ]);
workout([
    "4",
    "100",
    "30",
    "50",
    "60",
    "80"
]);
