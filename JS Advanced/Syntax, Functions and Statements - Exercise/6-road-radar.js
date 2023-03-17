function roadRadar(speed, area) {
    let status = "";
    let allowedSpeed = 0;

    switch (area) {
        case 'motorway':
            allowedSpeed = 130;
            if ((allowedSpeed + 40 < speed)) {
                status = 'reckless driving';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else if ((allowedSpeed + 20) < speed) {
                status = 'excessive speeding';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else if (allowedSpeed < speed) {
                status = 'speeding';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
            }
            break;
        case 'interstate':
            allowedSpeed = 90;
            if ((allowedSpeed + 40 < speed)) {
                status = 'reckless driving';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else if ((allowedSpeed + 20) < speed) {
                status = 'excessive speeding';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else if (allowedSpeed < speed) {
                status = 'speeding';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
            }
            break;
        case 'city':
            allowedSpeed = 50;
            if ((allowedSpeed + 40 < speed)) {
                status = 'reckless driving';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else if ((allowedSpeed + 20) < speed) {
                status = 'excessive speeding';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else if (allowedSpeed < speed) {
                status = 'speeding';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
            }
            break;
        case 'residential':
            allowedSpeed = 20;
            if ((allowedSpeed + 40 < speed)) {
                status = 'reckless driving';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else if ((allowedSpeed + 20) < speed) {
                status = 'excessive speeding';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else if (allowedSpeed < speed) {
                status = 'speeding';
                console.log(`The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
            }
            break;
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');