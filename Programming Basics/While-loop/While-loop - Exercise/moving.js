function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let volume = width * length * height;
    let index = 3;
 
    while (true) {
        let box = input[index++];
        if (box === "Done") {
            console.log(`${volume} Cubic meters left.`);
            break;
        }
        volume -= Number(box);
        if (volume < 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }
    }
}


 
