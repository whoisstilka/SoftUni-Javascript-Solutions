function triangle(number) {
    let pyramid = "";

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            pyramid += " " + i;
        }
        pyramid += "\n";
    }

    console.log(pyramid);
}

triangle(3);
triangle(5);
triangle(6);