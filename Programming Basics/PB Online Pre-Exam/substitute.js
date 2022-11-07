function substitute(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);

    let counter = 0;
    let hasEnded = false;

    for (let FNFD = K; FNFD <= 8; FNFD++) {
        for (let FNSD = 9; FNSD >= L; FNSD--) {
            for (let SNFD = M; SNFD <= 8; SNFD++) {
                for (let SNSD = 9; SNSD >= N; SNSD--) {
                    let isValid = FNFD % 2 == 0 &&
                        SNFD % 2 == 0 &&
                        FNSD % 2 != 0 &&
                        SNSD % 2 != 0;

                    let firstNum = (FNFD * 10) + FNSD;
                    let secondNum = (SNFD * 10) + SNSD;

                    if (isValid && firstNum == secondNum) {
                        console.log("Cannot change the same player.");
                    } else if (isValid && firstNum != secondNum) {
                        console.log(`${FNFD}${FNSD} - ${SNFD}${SNSD}`);
                        counter++;
                    }

                    if (counter >= 6) {
                        hasEnded = true;
                    }

                    if (hasEnded) {
                        break;
                    }
                }
                if (hasEnded) {
                    break;
                }
            }
            if (hasEnded) {
                break;
            }
        }
        if (hasEnded) {
            break;
        }
    }
}


substitute(["7", "6", "8", "5"]);
// substitute(["6", "7", "5", "6"]);
