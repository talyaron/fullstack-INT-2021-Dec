
interface list {
    name:string,
    address:string,
    friends:Array<string>,
}
const hanoch:list = {
    name:"hanoch",
    address:"jerusalem",
    friends:["eli", "moshe", "chaim"]

}

const eli:list ={
    name:"eli",
    address:"charish",
}
const moshe:list ={
    name:"moshe",
    address:"jerusalem",
}
const chaim:list ={
    name:"chaim",
    address:"heifa",
}

function lOfriends(count:number, adreses:Array<list>, key3:string ){
    let b:string = "" ;
    adreses.map(k=>{
        b = b + " " + k[key3]
       
    })
    
    console.log (`i have ${count} friends and they leave in ${b}`)
}
const c = hanoch.friends.length;
console.log(c)
const f:Array<list> = [eli, moshe, chaim]
console.log(f)
lOfriends(c,f,'address');