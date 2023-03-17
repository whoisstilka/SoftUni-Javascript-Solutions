function sumNums(array) {
    let result = Number(array.pop()) + Number(array.shift());

    console.log(result);
}

sumNums(['20', '30', '40']);
sumNums(['5', '10']);