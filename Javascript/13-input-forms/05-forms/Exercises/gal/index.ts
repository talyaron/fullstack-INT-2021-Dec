function handleExe (ev:any){
    ev.preventDefault();
    const elements =ev.target.elements;
    const consol= {};
    for(let i=0;i<elements.length;i++){
        if (elements[i].name==="username"){
            consol[elements[i].name]=elements[i].value;
        } else if (elements[i].name && elements[i].value){
            consol [elements[i].name]=elements[i].value;
        }
    }
    console.log(consol)
}


