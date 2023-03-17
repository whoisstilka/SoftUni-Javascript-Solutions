function biggerHalf(array) {
    array.sort((a, b) => a - b);

    let start = Math.floor(array.length / 2);
    let result = [];

    for (let i = start; i < array.length; i++) {
        result.push(array[i]);
    }

    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);