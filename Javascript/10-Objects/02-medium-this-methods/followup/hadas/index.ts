const Tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods:['tuna'],

    FoodTzavi: function (): string{
        return `Hello my name is ${this.name} and I hate ${this.HatedFoods} and love ${this.preferdFoods}`;
    },
}

let Food:string =Tzavi.FoodTzavi();
console.log(Food);
