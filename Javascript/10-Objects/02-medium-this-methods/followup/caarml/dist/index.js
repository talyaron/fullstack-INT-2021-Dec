//object
var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods: ['tuna'],
    sayHello: function () {
        //method
        return "Hello, my name is " + this.name + ", and I would like to talk with you";
    },
    sayHelloManyTimes: function (howManyTimes) {
        var hellos = "";
        for (var i = 0; i < howManyTimes; i++) {
            hellos += "My Name is " + this.name + ", Hello to you. ";
        }
        return hellos;
    },
    sayWhatFoodLikeDislike: function () {
        var list = "";
        this.preferdFoods.forEach(function (element) {
            list = +"" + element;
        });
        return "I AM " + this.name + " DEVOURER OF " + list + " and haater of " + this.HatedFoods;
    }
};
var hello1 = tzavi.sayHello();
var hello2 = tzavi.sayHelloManyTimes(5);
var food = tzavi.sayWhatFoodLikeDislike();
console.log(hello1);
console.log(hello2);
console.log(food);
//this refer to the object itself
