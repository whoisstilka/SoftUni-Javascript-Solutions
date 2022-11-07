function trainTheTrainers(input) {
    let scoreNum = Number(input[0]);
    let presentation = input[1]; 
    let presentationCounter = 0;
    let totalAverage = 0;
    let index = 2;
    
    while (presentation !== 'Finish'){
        let grade = 0
        for (let i = 0; i < scoreNum; i++){
            grade += Number(input[index++]);
        }
        console.log(`${presentation} - ${(grade / scoreNum).toFixed(2)}.`);
        totalAverage += grade / scoreNum;
        presentation = input[index++];
        presentationCounter++;
    }
    console.log(`Student\'s final assessment is ${(totalAverage / presentationCounter).toFixed(2)}.`);
}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
]);