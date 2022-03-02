// create a method for Tzavi, whch say the food it likes and hate ("I hate tuna, and loce carot, latous ...")
// use "this"


const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    hatedFoods:['tuna'],
     tzaviFoods:function(turtleFood:string){

     let foods:string = " ";
     for (let i = 0; i < turtleFood.length; i++) {
        foods += `I like ${this.preferdFoods} and I hate ${this.hatedFoods}`

         
     }
       return foods;
    },
    
}
  
