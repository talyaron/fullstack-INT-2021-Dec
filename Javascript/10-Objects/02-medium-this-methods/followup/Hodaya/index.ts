const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["Shawarma","pizza"],
    HatedFoods:["Peper","avookado"],
    foodTzavi: function ():string {
      //method
      return `Hello, my name is ${this.name}, and I like to eat ${this.preferdFoods[0]} and I hate ${this.HatedFoods[1]}`;
    },
};

const foodTaste:string = tzavi.foodTzavi();
console.log(foodTaste)
