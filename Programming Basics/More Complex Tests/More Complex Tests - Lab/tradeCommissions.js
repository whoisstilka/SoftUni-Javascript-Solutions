function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    switch (city) {
        case "Sofia":
            if (sales <= 0) {
                console.log("error");
            }
            else if (sales >= 0 && sales <= 500) {
                commission = sales * 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.08;
            } else if (sales > 10000) {
                commission = sales * 0.12;
            } else {
                console.log("error");
            } if (commission > 0) {
                console.log(commission.toFixed(2));
            }
            break;
        case "Varna":
            if (sales <= 0) {
                console.log("error");
            }
            else if (sales >= 0 && sales <= 500) {
                commission = sales * 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.1;
            } else if (sales > 10000) {
                commission = sales * 0.13;
            } else {
                console.log("error");
            } if (commission > 0) {
                console.log(commission.toFixed(2));
            }
            break;
        case "Plovdiv":
            if (sales <= 0) {
                console.log("error");
            }
            else if (sales >= 0 && sales <= 500) {
                commission = sales * 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * 0.12;
            } else if (sales > 10000) {
                commission = sales * 0.145;
            } else {
                console.log("error");
            } if (commission > 0) {
                console.log(commission.toFixed(2));
            }
            break;
        default: console.log("error");
    }
}

tradeCommissions(["Plovdiv", "-20"]);