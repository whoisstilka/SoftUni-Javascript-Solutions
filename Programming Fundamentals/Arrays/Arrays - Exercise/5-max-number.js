function maxNumber(array) {

    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentNumber = array[i];

        for (let k = i + 1; k < array.length; k++) {
            if (currentNumber <= array[k]) {
                isBigger = false;
            }
        }

        if (isBigger) {
            resultArray.push(array[i]);
        }
    }

    console.log(resultArray.join(' '));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
