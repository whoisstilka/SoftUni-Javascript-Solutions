function rightPlace(firstString, checkChar, secondString) {
    let res = firstString.replace('_', checkChar);
    let output = res === secondString? "Matched": "Not Matched";
    console.log(output);
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');