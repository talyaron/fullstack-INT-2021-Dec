
/* Method One ===> For Loop */
const arr:Array<any> = [5, 'Hello World',null, NaN, Math.pow, 18, "Hey"];

const define = (list:Array<any>, value:any) => {
  try {
  if (typeof value !== "string" && typeof value !== "number") throw "This is not a number or a string"
  
  for (let i=0; i < list.length; i++) {
    if (typeof list[i] == "number" && value == "number") {
      console.log(list[i]);
    }  
    if (typeof list[i] == "string" && value == "string") {
      console.log(list[i]);
      }
    }
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

console.log(define(arr, "string"));
console.log(define(arr, "number"));
console.log(define(arr, Math.pow));

/* Method One ===> For Loop */


/* Method Two ===> .Map Function */










 

















