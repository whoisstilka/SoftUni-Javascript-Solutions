function divide(number) {
    if (number % 10 == 0) {
        console.log('The number is divisible by 10');
    } else if (number % 7 == 0) {
        console.log('The number is divisible by 7');
    } else if (number % 6 == 0) {
        console.log('The number is divisible by 6');
    } else if (number % 3 == 0) {
        console.log('The number is divisible by 3');
    } else if (number % 2 == 0) {
        console.log('The number is divisible by 2');
    } else {
        console.log('Not divisible');
    }
}

divide(30);
divide(15);
divide(12);
divide(1643);