
const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods:['tuna'],
    loveFood: function ():string {
      //method
      return `Hello, i love to eat ${this.preferdFoods}`;
    },
    hateFood: function ():string {
      return `i hate to eat ${this.HatedFoods}`
      
      }
      
    }
    const love = tzavi.loveFood()
    const hate = tzavi.hateFood()
    console.log(love + " " + hate)
    
  
  