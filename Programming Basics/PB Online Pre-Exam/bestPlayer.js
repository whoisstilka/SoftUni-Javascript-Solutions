function bestPlayer(input) {
    let index = 0;
    let maxGoalsScored = 0;
    let bestPlayer;

    while (input[index] != "END") {
        let name = input[index];
        let goalsScored = Number(input[index + 1]);

        if (goalsScored > maxGoalsScored) {
            bestPlayer = name;
            maxGoalsScored = goalsScored;
        }

        if (maxGoalsScored >= 10) {
            break;
        }
        index += 2;
    }

    console.log(`${bestPlayer} is the best player!`);

    if (maxGoalsScored >= 3) {
        console.log(`He has scored ${maxGoalsScored} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoalsScored} goals.`);
    }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
// bestPlayer(["Silva", "5", "Harry Kane", "10"]);
// bestPlayer(["Petrov", "2", "Drogba", "11"]);
// bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
// bestPlayer(["Zidane", "1", "Felipe", "2", "Johnson", "4", "END"]);
