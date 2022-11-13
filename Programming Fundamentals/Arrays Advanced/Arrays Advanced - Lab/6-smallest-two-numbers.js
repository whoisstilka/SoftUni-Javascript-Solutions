function smallestNumbers(numbers) {
    let sortedInAscending = numbers.sort((a, b) => {
        return a - b;
    });
    let result = sortedInAscending.slice(0, 2);

    console.log(result.join(' '));
}

smallestNumbers([30, 15, 50, 5]);
smallestNumbers([3, 0, 10, 4, 7, 3]);