var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'cabbage'],
    HatedFoods: ['tuna'],
    FavoriteFood: function () {
        //method
        return "Hello, my name is " + this.name + ", and I would like to talk about my favorite food. I love \n      eating " + this.preferdFoods[0] + " and " + this.preferdFoods[1] + " and " + this.preferdFoods[2] + ". but I hate eating " + this.HatedFoods + ".";
    }
};
var MyFood = tzavi.FavoriteFood();
console.log(MyFood);
