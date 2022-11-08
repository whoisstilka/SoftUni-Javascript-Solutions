function calculator(num1, operator, num2) {
    if (operator === '+') {
        console.log((num1 + num2).toFixed(2));
    } else if (operator === '-') {
        console.log((num1 - num2).toFixed(2));
    } else if (operator === '/') {
        console.log((num1 / num2).toFixed(2));
    } else {
        console.log((num1 * num2).toFixed(2));
    }
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);