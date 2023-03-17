function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;

    const resultDiv = document.getElementById('result');

    resultDiv.textContent = Number(firstNum) - Number(secondNum);
}