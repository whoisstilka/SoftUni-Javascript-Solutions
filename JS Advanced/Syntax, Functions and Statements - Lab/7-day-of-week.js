function dayOfWeek(day) {
    let dayOfWeekAsNum = 0;

    switch (day) {
        case 'Monday':
            dayOfWeekAsNum = 1;
            console.log(dayOfWeekAsNum);
            break;
        case 'Tuesday':
            dayOfWeekAsNum = 2;
            console.log(dayOfWeekAsNum);
            break;
        case 'Wednesday':
            dayOfWeekAsNum = 3;
            console.log(dayOfWeekAsNum);
            break;
        case 'Thursday':
            dayOfWeekAsNum = 4;
            console.log(dayOfWeekAsNum);
            break;
        case 'Friday':
            dayOfWeekAsNum = 5;
            console.log(dayOfWeekAsNum);
            break;
        case 'Saturday':
            dayOfWeekAsNum = 6;
            console.log(dayOfWeekAsNum);
            break;
        case 'Sunday':
            dayOfWeekAsNum = 7;
            console.log(dayOfWeekAsNum);
            break;
        default:
            console.log('error');
            break;
    }
}

dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');