
const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", "Cabedge"],
    HatedFoods:["tuna", "ham"],
    printFoods: function():string {
        return (`I love eating ${this.preferdFoods} and hate eating ${this.HatedFoods}`)
    },
  };
  
  let printFood:string = tzavi.printFoods(); 

  console.log(printFood);

  