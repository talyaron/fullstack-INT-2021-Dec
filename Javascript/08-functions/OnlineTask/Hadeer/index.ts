
function gender( a:any, age:number){
    if( a== `Man`){
        let x = (age/80*100)
    }

    else if ( a==`Woman`){
        let x = (age/88*100)
    }

    return `You are A ${a} , and you lived  ${x} of your life` 


}

let z = `Man`;

const q = gender(z,30);
console.log(q)



