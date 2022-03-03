const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods:['tuna'],
    fevFood: function ():string {
      return `Hello, my name is ${this.name}, and my fev food is ${this.preferdFoods}`;
    },
    hatedFood: function ():string{
        return `Hey, it's ${this.name} again. my hated food is ${this.HatedFoods}`;
    }, 
  };
  
  let fev= tzavi.fevFood();
  
  let hate= tzavi.hatedFood();
  
  console.log(fev);
  console.log(hate);
