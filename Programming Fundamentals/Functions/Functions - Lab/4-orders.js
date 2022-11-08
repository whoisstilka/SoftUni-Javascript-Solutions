function orders(product, quantity) {
    let sum = 0;
    let price = 0;

    switch (product) {
        case 'coffee':
            price = 1.5;
            sum = price * quantity;
            break;
        case 'water':
            price = 1;
            sum = price * quantity;
            break;
        case 'coke':
            price = 1.4;
            sum = price * quantity;
            break;
        case 'snacks':
            price = 2;
            sum = price * quantity;
            break;
    }

    console.log(sum.toFixed(2));
}

orders('water', 5);
orders('coffee', 2);