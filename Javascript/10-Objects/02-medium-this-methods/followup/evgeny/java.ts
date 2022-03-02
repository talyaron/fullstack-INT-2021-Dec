const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods:['tuna'],

     FoodsThatTzaviLikesAndHates: function ():string {
        return `Tzavi likes food such as ${this.preferdFoods} and hates food such as ${this.HatedFoods}`
        

   }
}
let foods:string= tzavi.FoodsThatTzaviLikesAndHates();
   
    console.log(foods)
   