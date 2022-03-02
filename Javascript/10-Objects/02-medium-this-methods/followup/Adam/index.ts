//object
const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabbage'],
    HatedFoods: ['tuna'],
    sayHelloToMyFavFood: function (): string {
        //method
        return `Hello, my name is ${this.name}, eating ${this.HatedFoods} wont make me feel good, I prefer eating ${this.preferdFoods}`;
    },
}

let hello1: string = tzavi.sayHelloToMyFavFood();

console.log(hello1);

  //this refer to the object itself
