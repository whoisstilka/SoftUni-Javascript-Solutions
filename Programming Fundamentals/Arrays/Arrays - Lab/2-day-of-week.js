function daysOfWeek(days) {
    let day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (days >= 1 && days <= 7) {
        console.log(day[days - 1]);
    } else {
        console.log('Invalid day!');
    }
}

daysOfWeek(3);
daysOfWeek(6);
daysOfWeek(11);