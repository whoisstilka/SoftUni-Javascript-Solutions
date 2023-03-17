function sameNumbers(numberSequence) {
    let numString = numberSequence.toString();
    let firstDigit = numString[0];
    let allSame = true;

    for (let i = 1; i < numString.length; i++) {
        if (numString[i] !== firstDigit) {
            allSame = false;
            break;
        }
    }

    console.log(allSame);

    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }

    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);