function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let buff = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            buff += i + "\n";
        }
    }

    console.log("The sum: " + sum);
    console.log(buff);
}

numbersDivisibleBy9(["100", "200"]);
