
//regular function

console.log(regularFun(1, 2))

function regularFun(a:number, b:number):number{
    return a+b
}

//anonymous function

const anonymousFun = function(a:number, b:number):number{
    return a+b
}


//arrow function

const arrowFun = (a:number, b:number): number=>{
    return a+b
}

console.log(arrowFun(1, 2))

console.log(anonymousFun(1, 2));

