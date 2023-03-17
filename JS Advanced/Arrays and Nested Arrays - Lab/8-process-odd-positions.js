function oddPositions(array) {
    let oddNumbers = (array.filter((num, i) => i % 2 === 1));

    let double = oddNumbers.map(x => x * 2);

    let reverse = (double.reverse()).join(" ");
    console.log(reverse);
}

oddPositions([10, 15, 20, 25]);
oddPositions([3, 0, 10, 4, 7, 3]);