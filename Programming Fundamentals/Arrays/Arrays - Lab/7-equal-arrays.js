function equalArrays(input1, input2) {
    let sum = 0;

    for (let i in input1) {
        if (input1[i] !== input2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += input1[i] - 0;
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);