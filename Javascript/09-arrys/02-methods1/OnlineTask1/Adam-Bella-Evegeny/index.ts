
const arr: Array<number> = [10, 2, 34, 6, 120, 130, 99, 10000000, 200];

const newArr = arr.map(elm=>{
  if(elm >= 100) return elm
  else return "This number smaller than 100!";
}).filter(elm=>elm >= 100);

console.log (newArr);
console.log(arr.indexOf[1]); 
