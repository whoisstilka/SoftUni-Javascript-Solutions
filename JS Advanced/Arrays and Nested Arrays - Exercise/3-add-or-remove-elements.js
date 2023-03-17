function addOrRemove(array) {
    let result = [];
    let counter = 1;

    for (let i = 0; i < array.length; i++) {
        const currentCommand = array[i];

        if (currentCommand === 'add') {
            result.push(counter++);
        } else if (currentCommand === 'remove') {
            result.pop(counter++);
        }
    }

    if (!result.length) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

addOrRemove(['add',
'add',
'add',
'add']);
addOrRemove(['add', 'add', 'remove', 'add', 'add']);
addOrRemove(['remove', 'remove', 'remove']);