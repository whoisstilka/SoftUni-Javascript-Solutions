class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error("Not enough space in the cellar.");
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false,
        });

        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find((wine) => wine.wineName === wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const index = this.wines.findIndex((wine) => wine.wineName === wineName);

        if (index === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        const wine = this.wines[index];

        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(index, 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            const emptySlots = this.space;
            const info = [
                `You have space for ${emptySlots} bottles more.`,
                `You paid ${this.bill}$ for the wine.`,
            ];

            this.wines
                .sort((a, b) => a.wineName.localeCompare(b.wineName))
                .forEach((wine) => {
                    info.push(
                        `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"
                        }.`
                    );
                });

            return info.join("\n");
        }

        const wine = this.wines.find((wine) => wine.wineType === wineType);

        if (!wine) {
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        return `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"
            }.`;
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
