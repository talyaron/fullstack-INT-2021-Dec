// create a function that add 2 arguments with three forms of the function (regular, anonymous, arrow)
// 2 try to use them before the defintion and after the defition

// ----regular func---

function multy (a:number, b:number):number{
    return a+b;
}

console.log(multy(7,8))

// -----anonymous----

const anon= function (a:number, b:number):number{
    return a+b;
}

console.log (anon(7,9))

// -----arrow----

const arrow = (a:number, b:number):number=>{
    return a+b;
}

console.log (arrow (6,8))
