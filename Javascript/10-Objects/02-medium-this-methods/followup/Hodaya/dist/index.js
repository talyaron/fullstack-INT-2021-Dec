var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["Shawarma", "pizza"],
    HatedFoods: ["Peper", "avookado"],
    foodTzavi: function () {
        //method
        return "Hello, my name is " + this.name + ", and I like to eat " + this.preferdFoods[0] + " and I hate " + this.HatedFoods[1];
    }
};
var foodTaste = tzavi.foodTzavi();
console.log(foodTaste);
