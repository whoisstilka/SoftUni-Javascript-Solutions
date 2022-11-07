function walking(input) {
    let index = 0;

    let command = input[index];
    index++;

    let totalSteps = 0;

    while (command !== 'Going home') {
        let stepsCount = Number(command);

        totalSteps += stepsCount;

        if (totalSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'Going home') {
        let stepsGoingBack = Number(input[index]);

        totalSteps += stepsGoingBack;

        if (totalSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps - 10000} steps over the goal!`);
        } else {
            console.log(`${10000 - totalSteps} more steps to reach goal.`);
        }
    }
}

walking(["1000", "1500", "2000", "6500"]);