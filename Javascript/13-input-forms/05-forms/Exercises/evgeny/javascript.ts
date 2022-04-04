

function handle(ev) {

    const elements = ev.target.elements
    
    ev.preventDefault();
    const result = {};
    for (let i = 0; i < elements.length; i++) {
        
        if (elements[i].name && elements[i].value) {
            
            result[elements[i].name] = elements[i].value;
        }
        
    }
    const passOne = ev.target.elements.password.value;
    const passTwo = ev.target.elements.repassword.value;
    if (passOne === passTwo) {
                console.log(result)
            }
             else {document.querySelector("#error").innerHTML = '<p>password does not match</p>' }
     
    
}   


