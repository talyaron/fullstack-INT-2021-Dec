function handleInputNumber(event){
    console.dir(event)
    let inputNumber:HTMLElement = document.querySelector(`#${event.target.name}`);
    try{
        const value = event.target.value;
        inputNumber.innerHTML = value
    }
    catch(err){
        console.log(err);
    }
}

function handleInputInage(event){
    console.dir(event)
    let inputImg:HTMLElement = document.querySelector(`#${event.target.name}`);
    try{
        const value = event.target.value;
        inputImg.innerHTML = `<img src=${value}>`
    }
    catch(err){
        console.log(err);
    }
}

function handleLogin(event){
    console.dir(event)
    let loginBtn:HTMLElement = document.querySelector(`#${event.target.name}`);
    try{
       
    }
    catch(err){
        console.log(err);
    }
}

