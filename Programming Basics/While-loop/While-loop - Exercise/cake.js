function cake(input) {
    let index = 2;
    let width = Number(input[0]);
    let length = Number(input[1]); 
    let cakePieces = width * length;
    let command = input[index];
 
    while (command !== "STOP") {
        cakePieces -= Number(command);
        if (cakePieces <= 0) {
            break;
        }
        index++;
        command = input[index];
    }
    if (cakePieces >= 0) {
        console.log(`${cakePieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`);
    }
}
