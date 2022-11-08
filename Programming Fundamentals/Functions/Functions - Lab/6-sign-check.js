function signCheck(numOne, numTwo, numThree) {

    let sum = numOne * numTwo * numThree;

    if (sum < 0) {
        console.log('Negative');
    } else if (sum > 0) {
        console.log('Positive');
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);