function pieceOfPie(pies, first, last) {
    let firstIndex = pies.indexOf(first);
    let lastIndex = pies.indexOf(last);

    return pies.slice(firstIndex, lastIndex + 1);
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
);