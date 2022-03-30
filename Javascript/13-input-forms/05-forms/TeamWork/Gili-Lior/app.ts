const formRegister: HTMLFormElement = document.querySelector('#registerForm');
const formLogin: HTMLFormElement = document.querySelector('#loginForm');
const users: Array<object> = [];

function checkMatchPassword(userInfo: object): boolean {
    return userInfo['password'] === userInfo['verPassword'] ? true : false
}

formRegister.addEventListener('submit', (event: any) => {
    event.preventDefault();
    const elements = event.target.elements
    const userInput: object = {};
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            userInput[elements[i].name] = elements[i].value;
        }
    }
    checkMatchPassword(userInput) ? users.push(userInput) : alert('password must be match!');
    formLogin.style.display = 'flex';
    formLogin.style.flexDirection = 'column';
})

formLogin.addEventListener('submit', (event :any) => {
    event.preventDefault();
    for(let i = 0; i < users.length; i++){
        if(users[i]['username'] === event.target.elements['username'].value && users[i]['password'] === event.target.elements['password'].value){
            alert('Connected!');
        }else if(users[i]['username'] !== event.target.elements['username'].value){
            
        }else{
            alert('Username or password were incorrent');
        }
    }
})