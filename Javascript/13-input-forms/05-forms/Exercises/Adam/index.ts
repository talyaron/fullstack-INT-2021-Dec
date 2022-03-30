
function handleSend(ev: any) {
    ev.preventDefault();
    console.log(ev);
    
    const username = ev.target.elements.UserName.value;
    const password= ev.target.elements.password.value;
    
  
    console.log( username, password);
}

