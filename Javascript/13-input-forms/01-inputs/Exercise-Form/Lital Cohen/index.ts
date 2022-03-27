

function handleGetText(event: any) {
    console.dir(event)
    
        let outputOfTExt:HTMLElement=document.querySelector(`#${event.target.name}`);
        try{
            const value= event.target.value;
            outputOfTExt.innerHTML=value;
            console.log(value)
    }catch(error){
    console.log(error);
    
    }
    
    }


