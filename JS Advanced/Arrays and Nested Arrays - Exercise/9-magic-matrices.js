function matrices(arr) {
    let sumRows = 0;
    let sumCols = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentArray = arr[i].join('');
        
        for (let j = 0; j < currentArray.length; j++) {
            sumRows += Number(currentArray[j]);
            sumCols += Number(currentArray[0]);
        }
    }

    if (sumRows === sumCols) {
        console.log(true);
    } else {
        console.log(false);
    }
}

matrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);
matrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
matrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
);