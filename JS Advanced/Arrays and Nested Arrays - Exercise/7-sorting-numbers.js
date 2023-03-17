function sortingNumbers(numbers) {
    let result = [];
    numbers = numbers.sort((a, b) => a - b);

    while (numbers.length !== 0) {
        result.push(numbers.shift());
        result.push(numbers.pop());
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);