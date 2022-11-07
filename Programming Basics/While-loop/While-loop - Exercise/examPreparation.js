function examPreparation(input) {

    let negativeGradesLimit = Number(input.shift());
    let countOfBadGrades = 0;
    let sumGrades = 0;
    let gradesCounter = 0;
  
    let lastProblem;
    let avgGrade;

    while (countOfBadGrades < negativeGradesLimit) {
      
        let nameofExercise = input.shift();
        let grade = Number(input.shift());

        if (nameofExercise == "Enough") {
            avgGrade = sumGrades / gradesCounter;
            console.log(`Average score: ${avgGrade.toFixed(2)}`);
            console.log(`Number of problems: ${gradesCounter}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }

        if (grade <= 4) {
            countOfBadGrades++;
        }
      
        sumGrades += grade;
        gradesCounter++;
        lastProblem = nameofExercise;
    }

    if (countOfBadGrades == negativeGradesLimit) {
        console.log(`You need a break, ${countOfBadGrades} poor grades.`)
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);
