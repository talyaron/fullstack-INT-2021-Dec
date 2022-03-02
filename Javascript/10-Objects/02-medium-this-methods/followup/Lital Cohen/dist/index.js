var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["ice cream", "candy"],
    HatedFoods: ["lettuce", "carrot"],
    myFoodTaste: function () {
        return "Hello, my name is " + this.name + ", and I like eating " + this.preferdFoods[0] + " and I hate eating " + this.HatedFoods[1];
    }
};
var myFood = tzavi.myFoodTaste();
console.log(myFood);
