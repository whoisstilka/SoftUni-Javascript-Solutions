function delimiter(array, delimiterString) {
    let newArr = array.join(delimiterString);

    console.log(newArr);
}

delimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
delimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');