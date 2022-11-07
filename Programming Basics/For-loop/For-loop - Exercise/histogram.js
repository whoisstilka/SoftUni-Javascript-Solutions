function Histogram(input) {

    let n = Number(input[0]);

    let v1 = 0.0;
    let v2 = 0.0;
    let v3 = 0.0;
    let v4 = 0.0;
    let v5 = 0.0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(input[i])

        if (currentNum < 200) {
            v1++;
        }
        else if (currentNum < 400) {
            v2++;
        }
        else if (currentNum < 600) {
            v3++;
        }
        else if (currentNum < 800) {
            v4++;
        }
        else if (currentNum >= 800) {

            v5++;
        }
    }

    let p1Percantage = 0;
    let p2Percantage = 0;
    let p3Percantage = 0;
    let p4Percantage = 0;
    let p5Percantage = 0;

    p1Percantage = (v1 / n * 100);
    p2Percantage = (v2 / n * 100);
    p3Percantage = (v3 / n * 100);
    p4Percantage = (v4 / n * 100);
    p5Percantage = (v5 / n * 100);

    console.log(p1Percantage.toFixed(2) + "%");
    console.log(p2Percantage.toFixed(2) + "%");
    console.log(p3Percantage.toFixed(2) + "%");
    console.log(p4Percantage.toFixed(2) + "%");
    console.log(p5Percantage.toFixed(2) + "%");

}

Histogram('4', '53', '7', '56', '999');
