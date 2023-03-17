function calorieObject(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const calories = arr[i + 1];

        if (i % 2 === 0) {
            obj[element] = Number(calories);
        }
    }

    return obj;
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);