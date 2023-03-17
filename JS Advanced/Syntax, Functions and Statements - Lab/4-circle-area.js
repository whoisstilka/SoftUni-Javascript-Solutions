function area(radius) {

    if (typeof radius === 'number') {
        const result = radius ** 2 * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}

area(5);
area('name');