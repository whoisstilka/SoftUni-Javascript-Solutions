function city(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.taxRate * this.population;
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * percentage / 100);
        }
    };

    return result;
}

console.log(city('Tortuga', 7000, 15000));
console.log(city('Santo Domingo', 12000, 23500));

