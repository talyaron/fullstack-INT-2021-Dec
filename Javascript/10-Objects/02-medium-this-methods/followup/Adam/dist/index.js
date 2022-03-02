//object
var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabbage'],
    HatedFoods: ['tuna'],
    sayHelloToMyFavFood: function () {
        //method
        return "Hello, my name is " + this.name + ", eating " + this.HatedFoods + " wont make me feel good, I prefer eating " + this.preferdFoods;
    }
};
var hello1 = tzavi.sayHelloToMyFavFood();
console.log(hello1);
//this refer to the object itself
