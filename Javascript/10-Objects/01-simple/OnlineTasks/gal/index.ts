// // Read 3 numbers from the user and check if the 3rd is the sum of the first two.
// //  If it is, print all the numbers to the console like this: 6 + 4 = 10
// //  If not, print them like this: 3 + 5 != 10


// function checksum() {
//     const a = +prompt(`enter first number`);
//     const b = +prompt(`enter second number`);
//     const c = +prompt(`enter tierd number`);
  
//     if (a + b == c) {
//       console.log(`${a}+${b}=${c}`);
//     } else {
//       console.log(`${a}+${b}!=${c}`);
//     }
//   }
  
//   checksum();
  




// Read two positive numbers from the user.
// Calculate the difference between them (the absolute value).
// First, check that the input values are numbers
// (try googling something like ‘javascript check if number’)
// Print the inputs and the absolute difference between them to the console.
// If the difference is smaller than both input values,
// print to the console that those numbers are relatively close.
//Something like this – num1 = 5, num2 = 9, diff = 4 => numbers are relatively close!


const num1=prompt(`enter 1st number:`); //string
const num2=prompt(`enter 1st number:`); //string
//const num1= +prompt(`eneter blabla); //number
typeof num1

if (typeof num1==`number` && typeof num2=="number"){
   if (num1>=0 && num2>0){
       const diff= Math.abs(num1-num2);
       console.log (`${num1}+${num2}=${diff} `);
       if (diff<num1 && diff< num2){
           console.log (`${num1} & ${num2} are relatively close`)
       }
    
 } else{
       console.log ("only positive numbers")
   }
 } else{
        console.log("only numbers")
    }

