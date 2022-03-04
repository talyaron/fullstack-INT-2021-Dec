var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'cabbage'],
    HatedFoods: ["tuna", "mushrooms", "watermalon"],
    preferdFoodsLike: function () {
        return "my name is " + this.name + " and i like to eat " + this.preferdFoods;
    },
    hatedFoodshate: function () {
        return "my name is " + this.name + " and i hate to eat " + this.HatedFoods;
    }
};
var food1 = tzavi.preferdFoodsLike();
console.log(food1);
var food2 = tzavi.hatedFoodshate();
console.log(food2);
