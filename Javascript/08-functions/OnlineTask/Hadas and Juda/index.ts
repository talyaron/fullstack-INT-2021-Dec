var gender:string = "male";
var age:number = 30;

const men:number = 81;
const women:number = 84;

function percentage(age:number, men:number) :number{
    return (age*100)/men;

}

const x = percentage(age, men)
console.log(x);
