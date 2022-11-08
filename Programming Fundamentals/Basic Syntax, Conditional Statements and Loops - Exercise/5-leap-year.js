function checkIfYearIsLeap(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

checkIfYearIsLeap(1984);
checkIfYearIsLeap(2003);
checkIfYearIsLeap(4);image.png 