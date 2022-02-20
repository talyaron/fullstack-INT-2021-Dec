// const arr: Array<any> = [10, 2, 34, 6, "b", "a", "B", "A"];
// console.log(arr);
// //methods are function of an object (in our case Array)

// arr.forEach((elm) => {
//   try {
//     console.log(elm);
//   } catch (error) {
//     console.error(error);
//   }
// });

// // const index = arr.findIndex(elm=>{return elm === 6});
// const index = arr.findIndex((elm) => elm === 6);
// console.log("index:", index);
// console.log(arr);
// const sortedArray = arr;

// sortedArray.sort((a, b) =>{
//     return a - b
// });


// console.log(sortedArray);

// if(2 === '2') console.log('2 == "2"')
// else console.log('2 != "2"')

//map build a new array from previous array
// const newArr = arr.map(elm=>{
//     if(typeof elm === 'number') return elm*100
//     else return "This wasnt a number!";
// }).filter(elm=>typeof elm === 'number');

// console.log (newArr);
// console.log(arr)







const arr: Array<number> = [10, 2, 34, 6, 120, 130, 99, 10000000, 200];

const newArr = arr.map(elm=>{
  if(elm >= 100) return elm
  else return "This number smaller than 100!";
}).filter(elm=>elm >= 100);

console.log (newArr);
console.log(arr.indexOf[1]); 