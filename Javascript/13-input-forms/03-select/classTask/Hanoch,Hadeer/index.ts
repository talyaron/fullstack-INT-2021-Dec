function HandleGetFlag(ev:any){  
    console.log(ev.target.value)
    const value= ev.target.value;
    const imgflag = document.querySelector('#imgflag');

    if (value == "turkey"){

        imgflag.innerHTML = `<img src="./dist/turkeyflag.jpg" alt=""> <br> ${value}`
        }
    else if (value == "ukriane"){
        imgflag.innerHTML = `<img src="./dist/ukrianeflag.jpg" alt=""> <br> ${value}`
    }

}

const playresFutball:Array<string>= ["ronaldo", "messi"]

function createSelect(playrName:Array<string>){
     const playrs = document.querySelector(".playrs")
     let newSelector = document.createElement("select")
     playrs.append(newSelector)
     playrName.forEach(elm =>{
        const newOption = document.createElement("option")
        newSelector.append(newOption)
        newOption.innerHTML = elm

     })
     newSelector.onchange = function
     

}
function handleGetPlayrs(event){
   const choose = event.target.value
   if (choose == "football"){
       createSelect(playresFutball)
   }
}