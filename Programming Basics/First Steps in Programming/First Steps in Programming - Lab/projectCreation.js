function projectCreation(input){
    let name = input[0];
    let project = Number(input[1]);
    let projectHoursNeeded = 3;
    let result = `The architect ${name} will need ${projectHoursNeeded * project} hours to complete ${project} project/s.`
    
    console.log(result);
}

projectCreation(['Sanya', '9']);