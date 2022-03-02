//object
var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods: ['tuna'],
    tasteInFood: function () {
        return "I dislike " + this.HatedFoods + ", and like " + this.preferdFoods + ".";
    }
};
var myTasteInFood = tzavi.tasteInFood();
console.log(myTasteInFood);
//this refer to the object itself
