var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods: ['tuna'],
    fevFood: function () {
        return "Hello, my name is " + this.name + ", and my fev food is " + this.preferdFoods;
    },
    hatedFood: function () {
        return "Hey, it's " + this.name + " again. my hated food is " + this.HatedFoods;
    }
};
var fev = tzavi.fevFood();
var hate = tzavi.hatedFood();
console.log(fev);
console.log(hate);
