function reverse(string) {
    let word = string.toString();
    let reverse = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverse += word[i];
    }

    console.log(reverse);
}

reverse('Hello');
reverse('SoftUni');
reverse(1234);