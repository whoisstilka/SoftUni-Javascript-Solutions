function vacationBooksList(input){
    let pageAmount = Number(input[0]);
    let pagesReadIn1Hour = Number(input[1]);
    let daysAmount = Number(input[2]);

    let totalReadingTime = pageAmount / pagesReadIn1Hour;
    let hoursPerDay = totalReadingTime / daysAmount;

    console.log(hoursPerDay);
}

vacationBooksList(["432", "15", "4"])