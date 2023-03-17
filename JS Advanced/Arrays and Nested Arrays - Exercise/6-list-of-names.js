function sorter(array) {
    array.sort((a, b) => a.localeCompare(b)).forEach((ele, i) => {
        console.log(`${i + 1}.${ele}`);
    });
}

sorter(["John",
"Bob",
"Christina",
"Ema"]);