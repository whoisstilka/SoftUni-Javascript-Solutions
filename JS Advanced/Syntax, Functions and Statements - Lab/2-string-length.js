function strlength(str1, str2, str3) {
    let sum = str1.length + str2.length + str3.length;
    let avg = Math.floor(sum / 3);

    console.log(sum);
    console.log(avg);
}

strlength('chocolate', 'ice cream', 'cake');
strlength('pasta', '5', '22.3');