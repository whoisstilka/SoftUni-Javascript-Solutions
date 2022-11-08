function printAndSum(num1, num2) {
    let nums = '';
    let sum = 0;
    
    for (let i = num1; i <= num2; i++) {
        nums = nums + ' ' + i;
        sum += i;
    }

    console.log(nums);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);