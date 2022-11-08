function mergeArrays(firstArray, secondArray) {

    let resultArray = [];
    let firstArrayLength = firstArray.length;

    for (let index = 0; index < firstArrayLength; index++) {
        if (index % 2 === 0) {
            resultArray.push(Number(firstArray[index]) + Number(secondArray[index]));
        } else {
            resultArray.push(firstArray[index] + secondArray[index]);
        }
    }

    console.log(resultArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);