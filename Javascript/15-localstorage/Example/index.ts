function handleSetName(ev){
    let name = ev.target.value;
    console.log(name)
    localStorage.setItem('name',JSON.stringify({name}));
}

function handleLoadIndex(){

}

function handleLoadSecond(){
    const userInput = JSON.parse( localStorage.getItem('name'));
    console.log(userInput);
    const nameRoot = document.querySelector('#nameRoot')
    nameRoot.innerHTML = userInput.name;
}