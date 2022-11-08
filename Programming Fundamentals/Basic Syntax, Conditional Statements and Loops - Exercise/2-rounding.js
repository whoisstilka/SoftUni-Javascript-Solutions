function roundNumber(numToBeRounded, precisionNum) {
    let num1 = Number(numToBeRounded);
    let num2 = Number(precisionNum);

    if (num2 > 15) {
        num2 = 15;
    }

    num1 = num1.toFixed(num2);
    console.log(parseFloat(num1));
}

roundNumber(3.1415926535897932384626433832795, 2);
roundNumber(10.5, 3);
