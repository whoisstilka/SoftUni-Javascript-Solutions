function repeatStrings(string, repeatNum) {
    let repeatedString = '';

    while (repeatNum > 0) {
        repeatedString += string;
        repeatNum--;
    }

    console.log(repeatedString);
}

repeatStrings("abc", 3);
repeatStrings("String", 2);