function sumNumbers(input) {
    let index = 0;

    let n = Number(input[index]);
    index++;
    let sum = 0;

    while (sum < n) {
        let currentNumber = Number(input[index]);
        index++;

        sum += currentNumber;
    }

    console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);