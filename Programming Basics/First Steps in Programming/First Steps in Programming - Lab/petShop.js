function petShop(input){
    let dogFood = 2.50;
    let catFood = 4;
    let boughtDF = input[0] * dogFood;
    let boughtCF = input[1] * catFood;
    let result = boughtDF + boughtCF;

    console.log(result + " lv.")
}

petShop(["13", "9"]);