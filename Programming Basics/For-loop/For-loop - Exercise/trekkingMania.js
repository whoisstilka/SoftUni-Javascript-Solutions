function trekkingMania(input) {
    let statistics = {
        'Мусала': 0,
        'Монблан': 0,
        'Килиманджаро': 0,
        'К2': 0,
        'Еверест': 0
    };
    let allCount = 0;
    let groups = Number(input.shift());
    for (let i = 0; i < groups; i++) {
        let groupCount = Number(input.shift());
        let mountain = '';
        switch (true) {
            case groupCount <= 5:
                mountain = 'Мусала';
                break;
            case groupCount >= 6 && groupCount <= 12:
                mountain = 'Монблан';
                break;
            case groupCount >= 13 && groupCount <= 25:
                mountain = 'Килиманджаро';
                break;
            case groupCount >= 26 && groupCount <= 40:
                mountain = 'К2';
                break;
            case groupCount >= 41:
                mountain = 'Еверест';
                break;
            default:
                break;
        }
        allCount += groupCount;
        statistics[mountain] += groupCount;
    }
    Object.keys(statistics).forEach(mountain => {
        console.log(`${(statistics[mountain] * 100 / allCount).toFixed(2)}%`);
    });
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
