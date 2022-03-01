
interface friend {
    firstname: string,
    lastname: string,
    address: string,
}

const Me = {
    firstname: "Hadas",
    lastname: "Zabahon" ,
    address: "Beer sheva"
}

const friend1 :friend= {
    firstname: "Sara" ,
    lastname: "Koletker" ,
    address: "Migdal haemek" ,
}

const friend2 :friend= {
    firstname: "Moran" ,
    lastname: "Pinto" ,
    address: "Netivot" ,
}

const friend3 :friend= {
    firstname: "Hodaya" ,
    lastname: "Zeharya" ,
    address: "Netivot" ,
}

const friend4 :friend= {
    firstname: "Simcha" ,
    lastname: "Uzan" ,
    address: "Beer sheva" ,
}

const friendarr:Array<friend> = [friend1 , friend2 , friend3 , friend4];


function friends(arr:Array<friend>):string{
    let add:string= ``;
    arr .forEach (elm => add+=`${elm.address},`);
    return (`You have ${arr.length} friends and they live in ${add}`)
}

console.log (friends (friendarr));
