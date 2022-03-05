//object
const tzavi = {
  name: "TzaviTsav",
  preferdFoods: ["lettuce", "carrot", "Cabedge"],
  HatedFoods:['tuna'],

tasteInFood: function ():string {
 return `I dislike ${this.HatedFoods}, and like ${this.preferdFoods}.`
}
};

let myTasteInFood:string = tzavi.tasteInFood()

console.log (myTasteInFood)
//this refer to the object itself

