function worldSnookerChampionship(input) {
    let stage = input[0];
    let ticketType = input[1];
    let numberOfTickets = Number(input[2]);
    let photoWithTrophy = input[3];

    let priceOfTickets = 0;

    switch (stage) {
        case "Quarter final":
            switch (ticketType) {
                case "Standard":
                    priceOfTickets = numberOfTickets * 55.50;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - (numberOfTickets * 40);
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + (numberOfTickets * 40);
                    }
                    break;
                case "Premium":
                    priceOfTickets = numberOfTickets * 105.20;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - (numberOfTickets * 40);
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + (numberOfTickets * 40);
                    }
                    break;
                case "VIP":
                    priceOfTickets = numberOfTickets * 118.90;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - (numberOfTickets * 40);
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + (numberOfTickets * 40);
                    }
                    break;
            }
            break;
        case "Semi final":
            switch (ticketType) {
                case "Standard":
                    priceOfTickets = numberOfTickets * 75.88;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - (numberOfTickets * 40);
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + (numberOfTickets * 40);
                    }
                    break;
                case "Premium":
                    priceOfTickets = numberOfTickets * 125.22;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - (numberOfTickets * 40);
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + (numberOfTickets * 40);
                    }
                    break;
                case "VIP":
                    priceOfTickets = numberOfTickets * 300.40;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - (numberOfTickets * 40);
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + (numberOfTickets * 40);
                    }
                    break;
            }
            break;
        case "Final":
            switch (ticketType) {
                case "Standard":
                    priceOfTickets = numberOfTickets * 110.10;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - 40;
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + 40;
                    }
                    break;
                case "Premium":
                    priceOfTickets = numberOfTickets * 160.66;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - 40;
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + 40;
                    }
                    break;
                case "VIP":
                    priceOfTickets = numberOfTickets * 400;

                    if (priceOfTickets > 2500 && priceOfTickets <= 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.1);
                    }
                    else if (priceOfTickets > 4000) {
                        priceOfTickets = priceOfTickets - (priceOfTickets * 0.25) - 40;
                    }

                    if (photoWithTrophy === 'Y') {
                        priceOfTickets = priceOfTickets + 40;
                    }
                    break;
            }
            break;
        }

        console.log(priceOfTickets.toFixed(2));
}

// worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
// worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);
