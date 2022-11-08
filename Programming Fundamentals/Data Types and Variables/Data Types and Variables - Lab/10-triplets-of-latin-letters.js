function tripletsOfLatinLetters(num) {
    let number = Number(num);

    for(let i = 0; i < number; i++){
        let firstLetter = String.fromCharCode(i + 97);
        for(let j = 0; j < number; j++){
            let secondLetter = String.fromCharCode(j + 97);
            for(let k = 0; k < number; k++){
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

tripletsOfLatinLetters('3');
tripletsOfLatinLetters('2');