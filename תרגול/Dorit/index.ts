//const arr:Array<number>=+prompt("pleas let me have 3 numbers")
//if (arr[0] + arr[1] === arr[2]){
//    alert(`${arr[0]} + ${arr[1]} = $arr[2]`)
//} else {
//    alert(`${arr[0]} + ${arr[1]} != ${arr[2]}`) 
//}


const a = +prompt("let me have the first number")
const b = +prompt("let me have the second number")

if (typeof a =="number" && typeof b =="number" && a > 0 && b > 0){
    let c = Math.abs(a - b)
    if (c < a && c < b){
        console.log("the difference is too small")       

    }
}else{
    console.log("you typed a NaN or a negative number")
}
