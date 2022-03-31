
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
    
        const value = Math.abs(firstInput / secondInput)
        result.innerHTML = value
    }
    catch (err) {
        console.log(err);
    }
}


function handleSignUp(ev:any){
    try{
        ev.preventDefault();
        const userName: any = ev.target.elements.userName.value;
        const password: number = ev.target.elements.password.value;
        const repeatPassword: number = ev.target.elements.repeatPassword.value;
        const image: HTMLImageElement = document.querySelector('.img');
        const imgValue = ev.target.elements.image.value;
        image.innerHTML = `<img src=${imgValue}>`
        console.log(userName, password, repeatPassword, imgValue); 
    }
    catch(err) {
        console.log(err);

    }

}   
