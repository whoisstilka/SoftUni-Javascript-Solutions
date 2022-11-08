function printNumbers(number) {
    let n = Number(number);
    let sum = 0;
    let counter = 0;

    for (let i = 1; i <= 100; i+= 2) {
        console.log(i);
        counter++;
        sum += i;

        if (counter == n) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}

printNumbers(5);