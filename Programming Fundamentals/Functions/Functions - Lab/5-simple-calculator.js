function simpleCalculator(numOne, numTwo, operator) {

    let sum = 0;

    switch (operator) {
        case 'multiply':
            sum = numOne * numTwo;
            break;
        case 'divide':
            sum = numOne / numTwo;
            break;
        case 'add':
            sum = numOne + numTwo;
            break;
        case 'subtract':
            sum = numOne - numTwo;
            break;
    }

    console.log(sum);
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');