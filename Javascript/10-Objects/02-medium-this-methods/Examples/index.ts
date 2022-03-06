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
};

let hello1:string = tzavi.sayHello();

let hello2:string = tzavi.sayHelloManyTimes(5);

console.log(hello1);
console.log(hello2);
//this refer to the object itself
