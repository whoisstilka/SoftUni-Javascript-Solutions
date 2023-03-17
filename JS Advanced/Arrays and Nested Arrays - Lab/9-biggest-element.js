function biggestNumber(array) {
    console.log(array.map(n => Math.max(...n)));
}

biggestNumber([[20, 50, 10], [8, 33, 145]]);
biggestNumber([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);