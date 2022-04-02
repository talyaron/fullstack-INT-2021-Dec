
const details: HTMLDivElement = document.querySelector('.details')

const form: any = {};

function handleEnter(event) {
    event.preventDefault();
    // const user: string = event.target.elements.user.value
    // const pass: string = event.target.elements.pass.value
    // const confirmPass: string = event.target.elements.confirmPass.value
    // const url: string = event.target.elements.url.value

    const elements = event.target.elements;
   

    console.log(form)
    console.dir(elements.confirmPass)

    if (elements.confirmPass.value === elements.pass.value && elements.pass.value != "" && elements.confirmPass.value != "") {

        for (let i = 0; i < elements.length; i++) {
            if (elements[i].name && elements[i].value && elements[i].name != 'url') {
                form[elements[i].name] = elements[i].value
                details.innerText += `${elements[i].name}:${form[elements[i].name]} \n`
            }
            else if (elements[i].name === 'url') {
                details.innerHTML += `<img src="${elements[i].value}" alt="">`

            }
        }
    }
    else{
        alert (`Passwords are not match`);
    }
}

function handleLogIn (event){
    event.preventDefault();
    console.dir(form.pass)
    
    if (form.pass === event.target.elements.LoginPass.value && form.user === event.target.elements.LoginUser.value){
        alert(`The log in was successful`)
    }
    else{
       alert(' User name or password are wrong')
    }
}