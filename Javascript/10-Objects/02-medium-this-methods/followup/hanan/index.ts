
const tzav = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge',`420grass`],
    HatedFoods:['tuna',`and jellyfishes`],
    SayFoodloveAndHate: function ():string {
        return `hi my name is ${this.name} and i want to tell you about my diet i love to eat ${this.preferdFoods} 
        and cant stand ${this.HatedFoods}`;
    },
  let goodFood:string = tzavi.SayFoodloveAndHate();
 
 console.log(goodFood);