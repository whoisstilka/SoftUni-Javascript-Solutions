function equalSums(array) {

    let foundIndex = 'no';
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // calculate left sum
        for (let l = 0; l < i; l++) {
            leftSum = leftSum + array[l];
        }

        // calculate right sum
        for (let r = i + 1; r < arrayLength; r++) {
            rightSum = rightSum + array[r];
        }

        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }

    console.log(foundIndex);
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);