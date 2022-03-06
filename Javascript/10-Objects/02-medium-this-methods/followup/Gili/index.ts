
const tzavi = {
    name: "Tzavi",
    preferdFoods: ["kale", "pepper", 'cabbage'],
    HatedFoods:['rabbit stew'],
    goodFood: function ():string {
      //method
      return `Hello, my name is ${this.name}, and my favorite food is
     ${this.preferdFoods[0]} and ${this.preferdFoods[1]} and ${this.preferdFoods[2]}. but I hate eating ${this.HatedFoods}.`;
    },

}

  const goodieFood:string = tzavi.goodFood(); 
  
  console.log(goodieFood);

