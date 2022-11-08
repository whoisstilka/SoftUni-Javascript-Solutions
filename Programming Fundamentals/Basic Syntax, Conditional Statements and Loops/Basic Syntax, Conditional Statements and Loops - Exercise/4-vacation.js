function vacation(peopleGroup, groupType, day) {
    let totalPrice = 0;

    if (day === 'Friday') {
        if (groupType === 'Students') {
            totalPrice = peopleGroup * 8.45;
        } else if (groupType === 'Business') {
            totalPrice = peopleGroup * 10.90;
        } else if (groupType === 'Regular') {
            totalPrice = peopleGroup * 15;
        }
    } else if (day === 'Saturday') {
        if (groupType === 'Students') {
            totalPrice = peopleGroup * 9.80;
        } else if (groupType === 'Business') {
            totalPrice = peopleGroup * 15.60;
        } else if (groupType === 'Regular') {
            totalPrice = peopleGroup * 20;
        }
    } else if (day === 'Sunday') {
        if (groupType === 'Students') {
            totalPrice = peopleGroup * 10.46;
        } else if (groupType === 'Business') {
            totalPrice = peopleGroup * 16;
        } else if (groupType === 'Regular') {
            totalPrice = peopleGroup * 22.50;
        }
    }

    if (peopleGroup >= 30 && groupType === 'Students') {
        totalPrice = totalPrice - (totalPrice * 0.15);
    } else if (peopleGroup >= 100 && groupType === 'Business') {
        totalPrice = totalPrice - ((totalPrice / peopleGroup) * 10);
    } else if (peopleGroup >= 10 && peopleGroup <= 20 && groupType === 'Regular') {
        totalPrice = totalPrice - (totalPrice * 0.05);
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, 'Students', 'Sunday');
vacation(40, 'Regular', 'Saturday');