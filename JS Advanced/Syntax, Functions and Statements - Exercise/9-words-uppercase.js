function words(words) {
    console.log(words.match(/[A-z0-9]+/g).join(', ').toUpperCase());
}
 
words('Hi, how are you?');
words('hello');