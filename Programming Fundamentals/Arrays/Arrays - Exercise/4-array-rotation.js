function arrayRotation(arrayToRotate, rotations) {

    for (let index = 0; index < rotations; index++) {
        let numberToMove = arrayToRotate.shift();
        arrayToRotate.push(numberToMove);
    }

    console.log(arrayToRotate.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);