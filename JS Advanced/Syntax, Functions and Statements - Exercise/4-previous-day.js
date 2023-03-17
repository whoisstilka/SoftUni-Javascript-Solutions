function calculateDate(year, month, day) {
    let date = new Date(year, month - 1, day);

    date.setDate(date.getDate() - 1);

    let prevYear = date.getFullYear();
    let prevMonth = date.getMonth() + 1;
    let prevDay = date.getDate();

    console.log(`${prevYear}-${prevMonth}-${prevDay}`);
}

calculateDate(2016, 9, 30);
calculateDate(2015, 5, 10);