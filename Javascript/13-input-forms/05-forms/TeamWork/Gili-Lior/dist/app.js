var formRegister = document.querySelector('#registerForm');
var formLogin = document.querySelector('#loginForm');
var users = [];
function checkMatchPassword(userInfo) {
    return userInfo['password'] === userInfo['verPassword'] ? true : false;
}
formRegister.addEventListener('submit', function (event) {
    event.preventDefault();
    var elements = event.target.elements;
    var userInput = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            userInput[elements[i].name] = elements[i].value;
        }
    }
    checkMatchPassword(userInput) ? users.push(userInput) : alert('password must be match!');
    formLogin.style.display = 'flex';
    formLogin.style.flexDirection = 'column';
});
formLogin.addEventListener('submit', function (event) {
    event.preventDefault();
    for (var i = 0; i < users.length; i++) {
        if (users[i]['username'] === event.target.elements['username'].value && users[i]['password'] === event.target.elements['password'].value) {
            alert('Connected!');
        }
        else if (users[i]['username'] !== event.target.elements['username'].value) {
        }
        else {
            alert('Username or password were incorrent');
        }
    }
});
