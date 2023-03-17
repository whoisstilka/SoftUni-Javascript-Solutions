function smallestNumbers(array) {
    let result = array.sort((a, b) => a - b).slice(0, 2);

    console.log(result);
}

smallestNumbers([30, 15, 50, 5]);
smallestNumbers([3, 0, 10, 4, 7, 3]);