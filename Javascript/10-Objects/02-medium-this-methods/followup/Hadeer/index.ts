
const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'cabbage'],
    HatedFoods:['tuna'],
    FavoriteFood: function ():string {
      //method
      return `Hello, my name is ${this.name}, and I would like to talk about my favorite food. I love 
      eating ${this.preferdFoods[0]} and ${this.preferdFoods[1]} and ${this.preferdFoods[2]}. but I hate eating ${this.HatedFoods}.`;
    },

}

  const MyFood:string = tzavi.FavoriteFood(); 
  
  console.log(MyFood);

