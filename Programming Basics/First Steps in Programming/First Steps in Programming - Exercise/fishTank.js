function fishTank(input){
    let aquariumLength = Number(input[0]);
    let aquariumWidth = Number(input[1]);
    let aquariumHeight = Number(input[2]);
    let procent = Number(input[3]);

    let aquariumVolume = aquariumLength * aquariumWidth * aquariumHeight;
    let volumeToLitres = aquariumVolume * 0.001;
    let occupiedSpace = procent / 100;

    let litresNeeded = volumeToLitres * (1 - occupiedSpace);

    console.log(litresNeeded);
}

fishTank(["105", "77", "89", "18.5"]);