function starRectangle(n) {
    for (let row = 0; row <= n; row++) {
        let line = "";
        for (let col = 1; col <= n; col++) {
            line += "* "
        }
        console.log(line);
    }
}


starRectangle(1);
starRectangle(2);
starRectangle(5);
starRectangle(7);