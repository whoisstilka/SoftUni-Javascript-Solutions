function extractSubsequence(numbers) {
    let biggestNumber = numbers.shift();
    const result = [biggestNumber];

    for (const number of numbers) {
        if (number >= biggestNumber) {
            biggestNumber = number;
            result.push(number);
        }
    }

    return result;
}

extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractSubsequence([1, 2, 3, 4]);
extractSubsequence([20, 3, 2, 15, 6, 1]);