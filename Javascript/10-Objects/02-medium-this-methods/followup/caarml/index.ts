//object
const tzavi = {
    name: "TzaviTsav",
    preferdFoods: ["lettuce", "carrot", 'Cabedge'],
    HatedFoods:['tuna'],
    sayHello: function ():string {
      //method
      return `Hello, my name is ${this.name}, and I would like to talk with you`;
    },
    sayHelloManyTimes: function (howManyTimes: number):string {
      
      let hellos: string = "";
      for (let i: number = 0; i < howManyTimes; i++) {
        hellos += `My Name is ${this.name}, Hello to you. `;
      }
      return hellos;
    },
    sayWhatFoodLikeDislike: function():string{
        let list:string=""
        this.preferdFoods.forEach(element => {
            list =+""+element
        });
        return `I AM ${this.name} DEVOURER OF ${list} and haater of ${this.HatedFoods }`
    }
  };
  
  let hello1:string = tzavi.sayHello();
  
  let hello2:string = tzavi.sayHelloManyTimes(5);
  
  let food:string=tzavi.sayWhatFoodLikeDislike();
  console.log(hello1);
  console.log(hello2);
  console.log(food);
  //this refer to the object itself
  