var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods: ['tuna'],
    loveFood: function () {
        //method
        return "Hello, i love to eat " + this.preferdFoods;
    },
    hateFood: function () {
        return "i hate to eat " + this.HatedFoods;
    }
};
var love = tzavi.loveFood();
var hate = tzavi.hateFood();
console.log(love + " " + hate);
