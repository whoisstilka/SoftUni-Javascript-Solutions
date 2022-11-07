function sumOfNumbers(input) {
    let numAsText = String(input[0]);
    let sum = 0;

    for (let i = 0; i < numAsText.length; i++) {
        let num = Number(numAsText[i]);
        sum += num;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers([1234]);
