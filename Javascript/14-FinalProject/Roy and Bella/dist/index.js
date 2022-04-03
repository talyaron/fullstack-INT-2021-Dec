var users = []; // Creating Fake Data Base To Hold All new Users
function handleSignUp(ev) {
    try {
        ev.preventDefault();
        var userName = ev.target.elements.userName.value;
        var password = ev.target.elements.password.value;
        var repeatPassword = ev.target.elements.repeatPassword.value;
        var image = document.querySelector('.img');
        var imgValue = ev.target.elements.image.value;
        image.innerHTML = "<img src=" + imgValue + ">";
        var person = {
            personUserName: "" + userName,
            personPassword: "" + password
        };
        console.log(person);
        // compare passwords
        if (repeatPassword != password) {
            alert('Your passwords does not match, try again!');
            console.log('false password');
            return false;
        }
        else {
            users.push(person); // Pushing new user information to fake data base 
            console.log(password);
        }
    }
    catch (err) {
        console.log(err);
    }
}
function handleLogin(ev) {
    try {
        ev.preventDefault();
        var loginUserName_1 = ev.target.elements.loginUserName.value;
        var loginPassword_1 = ev.target.elements.loginPassword.value;
        var isConnected_1 = false;
        console.log(loginUserName_1, loginPassword_1);
        // Checking if username and password exsixt in data base
        users.forEach(function (userInfo) {
            if (userInfo['personUserName'] == loginUserName_1) {
                if (userInfo['personPassword'] == loginPassword_1) {
                    isConnected_1 = true;
                }
            }
        });
        isConnected_1 ? alert('Connected') : alert('Username or password were inccorent');
    }
    catch (err) {
        console.log(err);
    }
}
// challange:
// medium + create on the same page a login form do it it dinamicly (after submit).
// and then chack if password and username are matching theses from register
//SIGN UP - הרשמה
// sign up datails are saved
//Login - כניסה
//enter user datails
//compare if the datails are match
//if userName !== loginusername{
//     return alert("false")
// }
