function palindrome(numberArray) {

    let numberArrayLength = numberArray.length;

    for (let index = 0; index < numberArrayLength; index++) {

        let numberAsString = numberArray[index].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if(numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindrome([123, 323, 421, 121]);