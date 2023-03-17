function solve() {
    const firstOptElement = document.createElement('option');
    const secondOptElement = document.createElement('option');
    firstOptElement.value = 'binary';
    secondOptElement.value = 'hexadecimal';
    firstOptElement.innerHTML = 'Binary';
    secondOptElement.innerHTML = 'Hexadecimal';

    const menuToElement = document.getElementById('selectMenuTo');
    menuToElement.appendChild(firstOptElement);
    menuToElement.appendChild(secondOptElement);
    
    const button = document.getElementsByTagName('button')[0];
    
    button.addEventListener('click', function() {
        const numberInput = document.getElementById('input');

        const outputResult = document.getElementById('result');
        
        if (menuToElement.value === 'binary') {
            outputResult.value = Number(numberInput.value).toString(2);
        } else if (menuToElement.value === 'hexadecimal') {
            outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    });
}