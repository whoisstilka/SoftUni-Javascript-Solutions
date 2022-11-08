function subtraction(input) {
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }

    let evenSum = 0;
    let oddSum = 0;

    for (let num of input) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(evenSum - oddSum);
}

subtraction([1, 2, 3, 4, 5, 6]);