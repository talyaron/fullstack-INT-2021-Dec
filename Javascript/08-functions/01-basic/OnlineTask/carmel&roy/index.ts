

function precentage(age:number, gender:string){
    if(gender=`woman`){
      return (age/84)*100+ `%`
    }
    else if(gender=`boy`){
        return  (age/81)*100+ `%`
      }
}
const a=precentage(20,`boy`);

console.log(a);