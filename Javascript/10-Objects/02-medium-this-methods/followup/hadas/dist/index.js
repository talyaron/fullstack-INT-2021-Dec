var Tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods: ['tuna'],
    FoodTzavi: function () {
        return "Hello my name is " + this.name + " and I hate " + this.HatedFoods + " and love " + this.preferdFoods;
    }
};
var Food = Tzavi.FoodTzavi();
console.log(Food);
