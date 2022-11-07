function foodDelivery(input){
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let veggieMenu = 8.15;
    let price = (Number(input[0]) * chickenMenu + Number(input[1]) * fishMenu + Number(input[2]) * veggieMenu);
    let dessert = price * 20 / 100;
    let deliveryPrice = 2.50;

    let totalPrice = price + dessert + deliveryPrice;

    console.log(totalPrice);
}

foodDelivery(["2", "4", "3"]);