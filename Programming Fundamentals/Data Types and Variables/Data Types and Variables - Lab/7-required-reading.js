function requiredReading(numberOfPages, pagesReadInHour, daysRequired) {
    let totalTime = numberOfPages / pagesReadInHour;
    let hoursPerDay = totalTime / daysRequired;
    
    console.log(hoursPerDay);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);