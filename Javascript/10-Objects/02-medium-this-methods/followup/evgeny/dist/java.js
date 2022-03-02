var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods: ['tuna'],
    FoodsThatTzaviLikesAndHates: function () {
        return "Tzavi likes food such as " + this.preferdFoods + " and hates food such as " + this.HatedFoods;
    }
};
var foods = tzavi.FoodsThatTzaviLikesAndHates();
console.log(foods);
