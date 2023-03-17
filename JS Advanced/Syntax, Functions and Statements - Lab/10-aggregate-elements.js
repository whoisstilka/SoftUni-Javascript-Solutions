function aggregate(numbers) {
    let sum = 0;
    let concat = "";
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        concat += numbers[i];
        result += 1 / numbers[i];
    }

    console.log(sum);
    console.log(result);
    console.log(concat);
}

aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);