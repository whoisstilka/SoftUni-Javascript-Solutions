function jansNotation(arr) {
    const ERROR_MESSAGE = 'Error: not enough operands!';
    const nums = [];
    const operations = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => b / a
    };

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (typeof element === 'number') {
            nums.push(element);
        } else {
            if (nums.length < 2) {
                return ERROR_MESSAGE;
            }
            nums.push(operations[element](nums.pop(), nums.pop()));
        }
    }

    if (nums.length != 1) {
        return 'Error: too many operands!';
    }

    return nums[0];
}

console.log(jansNotation([3,
    4,
    '+'
]));
jansNotation([5,
    3,
    4,
    '*',
    '-'
]);