//object
var tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    hatedFoods: ['tuna'],
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
    sayFavoret: function () {
        return "I love " + this.preferdFoods + ", but hate " + this.hatedFoods;
    }
};
var hello1 = tzavi.sayHello();
var hello2 = tzavi.sayHelloManyTimes(5);
var hello3 = tzavi.sayFavoret();
console.log(hello1);
console.log(hello2);
console.log(hello3);
//this refer to the object itself
