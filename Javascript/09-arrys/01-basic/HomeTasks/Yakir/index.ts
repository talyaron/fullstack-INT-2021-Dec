// function for the typeOf chack later...
function max(a:number, b:number){
    var x:number = b;
    if(a>b){
        // console.log (`a:${a} is greater then b:${b}`)  /test
         x = a;
    }
    return x;
}

// calc the avarage of numbers giving in array
function avarageNmbers(numbersArray:Array<any>){
    var avarage:number = 0;
    var i; // declare i outside the if so i can use it after the block without warning
    for (i = 0; i < numbersArray.length; i++) {
        avarage = avarage + numbersArray[i];
      }
      avarage = avarage/i;
    return avarage;
}


// task arrays:
function arraysTask() {

    // ---- Print frinds unisg Loop
  const frinds: Array<any> = [
    "Dor",
    "Yaniv",
    "Alon",
    "Yaara",
    "Dana",
    "Mor",
    "Noy",
    "Omri",
    "Alona",
  ];

  for (let i = 0; i < frinds.length; i++) {
    console.log(frinds[i]);
  }

  // ---- Print Welcome + Name for each frind
  for (let i = 0; i < frinds.length; i++) {
    console.log(`Welcome ${frinds[i]}`);
  }

  //--------------------Check if Numbers are greater than 5
  const Numbers: Array<any> = [8, 10, 9, 6, 1, 2, 3, 4, 5, 11, 25, 35, 65];
  for (let i = 0; i < Numbers.length; i++) {
      if (Numbers[i]>5){
    console.log(`The Number ${Numbers[i]} is greater than 5.`);
      }
  }


//--------------------Array with diffrent Types
const typesTest:Array<any> = [1, `String test`, true, max];
  for (let i = 0; i < typesTest.length; i++) {
      if(typeof typesTest[i] == 'function') { // in case type of element is function
        console.log(`The type of element on position ${i} in the array is: Function`);
        console.log(`the function result is: ${typesTest[i](4,3)}`);
      }
    else{
        console.log(`The type of element on position ${i} in the array is: ` + typeof typesTest[i]);
      }
  }

}

arraysTask();
console.log(`avarage is: ` + avarageNmbers([1,2,3,4]))


//-------tests 
// compareNumbers(4,3)
// compareNumbers(1,2)
// compareNumbers(8,8)


