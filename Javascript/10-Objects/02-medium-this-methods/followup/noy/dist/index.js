var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", "Cabedge"],
    HatedFoods: ["tuna", "ham"],
    printFoods: function () {
        return ("I love eating " + this.preferdFoods + " and hate eating " + this.HatedFoods);
    }
};
var printFood = tzavi.printFoods();
console.log(printFood);
