function condenseArray(input) {
    while (input.length > 1) {
        let condensed = Array(input.length - 1);

        for (let i = 0; i < input.length - 1; i++) {
            condensed[i] = Number(input[i] + Number(input[i + 1]));
        }
        input = condensed;
    }
    console.log(input[0]);
}

condenseArray([2, 10, 3]);