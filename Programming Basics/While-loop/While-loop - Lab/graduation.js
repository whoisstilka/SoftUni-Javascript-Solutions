function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;

    let negativeGradeCount = 0;
    let sumOfGrade = 0;
    let grade = 1;
    let hasExcluded = false;

    while (grade <= 12) {
        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade < 4.00) {
            negativeGradeCount++;
            if (negativeGradeCount == 2) {
                hasExcluded = true;
                break;
            }
            continue;
        }
        sumOfGrade += currentGrade;
        grade++;
    }
    let avgGrade = sumOfGrade / 12;
    if (hasExcluded) {
        console.log(`${name} has been excluded at ${grade} grade`);
    } else {
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

graduation([
    "Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5", "6",
    "5.55",
    "5", "6",
    "6",
    "5.43",
    "5"
]);