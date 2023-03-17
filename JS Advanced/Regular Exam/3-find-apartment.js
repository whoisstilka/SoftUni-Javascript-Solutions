const findNewApartment = {
    isGoodLocation(city, nearPublicTransportation) {
        if (typeof city !== "string" || typeof nearPublicTransportation !== "boolean") {
            throw new Error("Invalid input!");
        }
        if (city !== "Sofia" && city !== "Plovdiv" && city !== "Varna") {
            return "This location is not suitable for you.";
        } else {
            if (nearPublicTransportation == true) {
                return "You can go on home tour!";
            }
            else {
                return "There is no public transport in area.";
            }
        }
    },
    isLargeEnough(apartments, minimalSquareMeters) {
        let resultArr = [];
        if (!Array.isArray(apartments) || typeof minimalSquareMeters !== "number" || apartments.length == 0) {
            throw new Error("Invalid input!");
        }
        apartments.map((apartment) => {
            if (apartment >= minimalSquareMeters) {
                resultArr.push(apartment);
            }
        });
        return resultArr.join(', ');
    },
    isItAffordable(price, budget) {
        if (typeof price !== "number" || typeof budget !== "number"
            || price <= 0 || budget <= 0) {
            throw new Error("Invalid input!");
        }
        let result = budget - price;
        if (result < 0) {
            return "You don't have enough money for this house!";
        } else {
            return "You can afford this home!";
        }
    },
};

const assert = require("chai").assert;
const findNewApartment = require("./findNewApartment");

describe("findNewApartment", function () {
    describe("isGoodLocation", function () {
        it("returns 'This location is not suitable for you.' when given an invalid city", function () {
            assert.equal(findNewApartment.isGoodLocation("Ruse", true), "This location is not suitable for you.");
        });

        it("returns 'There is no public transport in area.' when given nearPublicTransportation as false", function () {
            assert.equal(findNewApartment.isGoodLocation("Sofia", false), "There is no public transport in area.");
        });

        it("returns 'You can go on home tour!' when given a valid city and nearPublicTransportation as true", function () {
            assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!");
        });

        it("throws an error if the input is invalid", function () {
            assert.throw(() => findNewApartment.isGoodLocation("Sofia", "true"), Error, "Invalid input!");
        });
    });

    describe("isLargeEnough", function () {
        it("returns an array of apartments that are at least as large as the minimalSquareMeters", function () {
            assert.deepEqual(findNewApartment.isLargeEnough([30, 40, 50, 60], 50), [50, 60]);
        });

        it("returns an empty array when there are no large enough apartments", function () {
            assert.deepEqual(findNewApartment.isLargeEnough([30, 40, 50, 60], 70), []);
        });

        it("throws an error if the input is invalid", function () {
            assert.throw(() => findNewApartment.isLargeEnough("not an array", 50), Error, "Invalid input!");
            assert.throw(() => findNewApartment.isLargeEnough([], 50), Error, "Invalid input!");
            assert.throw(() => findNewApartment.isLargeEnough([30, 40, 50, 60], "not a number"), Error, "Invalid input!");
        });
    });

    describe("isItAffordable", function () {
        it("returns 'You can afford this home!' when the budget is greater than the price", function () {
            assert.equal(findNewApartment.isItAffordable(100000, 200000), "You can afford this home!");
        });

        it("returns 'You don't have enough money for this house!' when the budget is less than the price", function () {
            assert.equal(findNewApartment.isItAffordable(200000, 100000), "You don't have enough money for this house!");
        });

        it("throws an error if the input is invalid", function () {
            assert.throw(() => findNewApartment.isItAffordable("not a number", 200000), Error, "Invalid input!");
            assert.throw(() => findNewApartment.isItAffordable(100000, "not a number"), Error, "Invalid input!");
            assert.throw(() => findNewApartment.isItAffordable(-100000, 200000), Error, "Invalid input!");
        });
    });
});
