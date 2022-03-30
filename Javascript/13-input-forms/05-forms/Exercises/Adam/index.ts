
function handleSend(ev: any) {
    ev.preventDefault();
    console.log(ev);
    const name = ev.target.elements.name.value;
    const username = ev.target.elements.username.value;
    const password= ev.target.elements.password.value;
    
  
    console.log(name, username, password);
}

