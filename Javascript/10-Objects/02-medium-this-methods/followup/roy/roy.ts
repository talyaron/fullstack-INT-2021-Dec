const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'cabbage'],
    HatedFoods:["tuna","mushrooms","watermalon"],
    preferdFoodsLike: function():string{
        return `my name is ${this.name} and i like to eat ${this.preferdFoods}`
    },
    hatedFoodshate: function():string{
        return `my name is ${this.name} and i hate to eat ${this.HatedFoods}`
    }
}

let food1:string= tzavi.preferdFoodsLike();

console.log(food1)

let food2:string= tzavi.hatedFoodshate();

console.log(food2)