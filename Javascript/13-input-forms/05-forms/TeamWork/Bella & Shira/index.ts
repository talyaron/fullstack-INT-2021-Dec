
function handleSend(ev: any) {
    try {
    ev.preventDefault();
    console.log(ev);
    const firstInput: any = ev.target.elements.firstInput.value;
    const secondInput: any = ev.target.elements.secondInput.value;
    ev.target.elements.firstInput.value = '';
    ev.target.elements.secondInput.value = '';

    console.log(Math.floor(firstInput / secondInput))

    let result: any = document.querySelector('.result');
    
        const value = Math.floor(firstInput / secondInput)
        result.innerHTML = value
    }
    catch (err) {
        console.log(err);
    }
}

function handleLogin(ev){

    let image: HTMLImageElement = document.querySelector('.img');
    
    const imgValue = ev.target.elements.image.value;
    image.innerHTML = `<img src=${imgValue}>`

    console.log(imgValue); 
}   
