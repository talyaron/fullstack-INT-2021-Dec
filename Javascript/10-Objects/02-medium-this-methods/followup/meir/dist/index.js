// create a method for Tzavi, whch say the food it likes and hate ("I hate tuna, and loce carot, latous ...")
// use "this"
var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    hatedFoods: ['tuna'],
    tzaviFoods: function (turtleFood) {
        var foods = " ";
        for (var i = 0; i < turtleFood.length; i++) {
            foods += "I like " + this.preferdFoods + " and I hate " + this.hatedFoods;
        }
        return foods;
    }
};
