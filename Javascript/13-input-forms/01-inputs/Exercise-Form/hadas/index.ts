function hendlename(ev:any){

    const name = document.querySelector ("#name");
    name.innerHTML = ev.target.value;
}

function hndleemail(event:any){
    const email = document.querySelector ("#email");
    email.innerHTML = event.target.value;
}

function hndlepassword(ev){
    const password = document.querySelector ("#password");
    password.innerHTML = ev.target.value;
}

