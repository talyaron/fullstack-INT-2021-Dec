interface User {
    username: string
    password: string
}
const signUp: HTMLFormElement=document.querySelector(".signUp")
const logIn: HTMLFormElement=document.querySelector(".logIn")
const welc: HTMLDivElement= document.querySelector(".welcome")
const consol= {};
const consolCheck = {};

function handleSend(ev:any) {
    ev.preventDefault();
    const userDet =ev.target.elements;
    

    for (let i = 0; i < userDet.length; i++) {
        if ((userDet[i].username) && (userDet[i].password)){
          console.log(userDet)}
       
         else if (userDet[i].name && userDet[i].value){
        consol [userDet[i].name]=userDet[i].value;
        }
    }
    logIn.style.display = "inline"
    signUp.style.display = "none"
    console.log(consol)
}


function handleCheck(ev){
    ev.preventDefault();
    const userElm = ev.target.elements
    for (let i= 0; i<userElm.length; i++)
    {
        if ((userElm[i].username) && (userElm[i].password)){
            console.log(userElm)}
         
        else if (userElm[i].name && userElm[i].value){
            consolCheck[userElm[i].name]=userElm[i].value;
            if(consol[i] === consolCheck[i])
            {

            alert `you are in!`
                // welc.innerText = `welcome user ${consol[i]}`
                // welc.style.display = "inline"
            }
        }
    }
    
}