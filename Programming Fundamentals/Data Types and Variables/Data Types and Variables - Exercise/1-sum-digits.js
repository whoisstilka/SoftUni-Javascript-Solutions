function sumdigits(num) {
    let sum = 0;

    while (num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    console.log(sum);
}

sumdigits(245678);
sumdigits(97561);
sumdigits(543);
