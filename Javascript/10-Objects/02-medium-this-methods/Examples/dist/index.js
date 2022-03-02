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
    }
};
var hello1 = tzavi.sayHello();
var hello2 = tzavi.sayHelloManyTimes(5);
console.log(hello1);
console.log(hello2);
//this refer to the object itself
