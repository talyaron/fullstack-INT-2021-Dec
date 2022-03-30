function handleExe (ev:any){
    ev.preventDefault();
    const username= ev.target.elements.username.value;
    const password= ev.target.elements.password.value;
    
    const elements =ev.target.elements;
    const consol= {};
    for(let i=0;i<elements.length;i++){
        if (elements[i].type==="username"){
            consol[elements[i].name]=elements[i].value;
        } else if (elements[i].name && elements[i].value){
            consol [elements[i].name]=elements[i].value;
        }
    }
    console.log(consol)
}


