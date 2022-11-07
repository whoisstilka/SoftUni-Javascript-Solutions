function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let depositTime = Number(input[1]);
    let depositAPY = Number(input[2]);

    let yearDepositAmount = depositAmount * (depositAPY / 100);
    let monthDeposit = yearDepositAmount / 12;

    let total = monthDeposit * depositTime;
    let totalMoney = total + depositAmount;
    console.log(totalMoney);
}

depositCalculator(["2350", "6", "7"]);