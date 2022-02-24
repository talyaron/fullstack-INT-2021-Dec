
/* Method One ===> For Loop */
const arr:Array<any> = [5, 'Hello World', Math.pow(2,2), 18, "Hey",555,'mmm'];


//Function Start

const filterArray = (usersArray:Array<any>, type:any) => {
  //internal Function Variables//
  let temp_arr = [];

  //internal Function Variables//

  try {

    //checks if the passed to the function "filterArray"  parameters are valid //

  if (typeof type !== "string" && typeof type !== "number") throw "This is not a number or a string"
  
  //looping through the passed to function, array


  for (let i=0; i < usersArray.length; i++) {
 
  
    if (typeof usersArray[i] ==  typeof type ) {
      temp_arr.push(usersArray[i]);
    }  
  
    }
    return temp_arr;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

//Function End
/* console.log(filterArray(arr, 4));
console.log(filterArray(arr, 4));
console.log(filterArray(arr, Math.pow)); */


function filterString(someArr, type) {
  if (typeof type === "string") {
    const newArrStr = someArr.map(elm => {
      if (typeof elm === "string") {
        return elm;
      } 
    }).filter(elm => typeof elm === "number");
    return newArrStr;
  }
  if (typeof type === "number") {
    const newArrNum = someArr.map(elm => {
      if (typeof elm === "number") {
        return elm;
      }
    })
  }
}

console.log(filterString(arr, "string"));



 

















