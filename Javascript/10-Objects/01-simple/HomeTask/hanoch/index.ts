
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
interface lfriends {
    fname:string,
    address:string,
}
const eli:lfriends ={
    fname:"eli",
    address:"charish",
}
const moshe:lfriends ={
    fname:"moshe",
    address:"jerusalem",
}
const chaim:lfriends ={
    fname:"chaim",
    address:"heifa",
}
function lOfriends(count:number, adreses:Array<lfriends>, key3:string ){
    adreses.map(k=>{
        
        console.log (`i have ${count} friends and they leave in ${k[key3]}`)
    })
    
    
}
const c = hanoch.friends.length;
console.log(c)
const f:Array<lfriends> = [eli, moshe, chaim]
console.log(f)
lOfriends(c,f,'address');