
//Exercise 1 - Array of friends 

let friendsDana = ['Michal', 'Daniel', 'Hila', 'Adam', 'Erez', 'Ofir', 'Jasmin']
  for (let i= 0 ; i<friendsDana.length; i++) {console.log(friendsDana)};

  
  for (let i= 0 ; i<friendsDana.length; i++) {console.log(`Welcome ${friendsDana[i]}`)};

  //Bigger than 5 Array 

  let newArray = [105, 60, 54, 366, 5, 4, 0, 2, 3]

  for (let i= 0; i<newArray.length; i++) {
      if(newArray[i]>5) {console.log(`The number ${newArray[i]} is larger than 5`)}
  }

  //Mix array + is the typeof a function ? 

const mixArray = ['54', 'Danushka', true, function, 109, '^', 'blah blah', null, 80, Math.random]
for (let i= 0; i<mixArray.length; i++) {
    mixArray.forEach(function(mixArray){
    console.log(`the typeof ${mixArray} is ${typeof mixArray}`) 

function whatNumber(a:number, b:number) {
    if (a!== String && b !==string)
    {
        return a+b;
    }
}