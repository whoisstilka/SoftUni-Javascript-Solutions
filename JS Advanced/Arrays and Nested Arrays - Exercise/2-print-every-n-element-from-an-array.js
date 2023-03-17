function printNthElement(array, n) {
    let result = [];

    for (let i = 0; i < array.length; i += n) {
        result.push(array[i]);
    }

    return result;
}

printNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2);
printNthElement(['dsa', 'asd', 'test', 'tset'], 2);