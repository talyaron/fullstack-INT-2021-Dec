// function handleSend(ev: any) {
//     try {
//         ev.preventDefault();
//         console.log(ev);
//         const firstInput: any = ev.target.elements.firstInput.value;
//         const secondInput: any = ev.target.elements.secondInput.value;
//         ev.target.elements.firstInput.value = '';
//         ev.target.elements.secondInput.value = '';
//         console.log(Math.floor(firstInput / secondInput))
//         let result: any = document.querySelector('.result');
//         const value = Math.abs(firstInput / secondInput)
//         result.innerHTML = value
//     } catch (err) {
//         console.log(err);
//     }
// }
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
            personPassword: "" + password,
            personRepeatPassword: "" + repeatPassword
        };
        console.log(person);
        // compare passwords
        if (repeatPassword != password) {
            alert('Your passwords does not match, try again!');
            console.log('false password');
            return false;
        }
        else {
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
        var loginUserName = ev.target.elements.loginUserName.value;
        var loginPassword = ev.target.elements.loginPassword.value;
        console.log(loginUserName, loginPassword);
        // const person = {
        //     personUserName: `${userName}`, 
        //     personPassword: `${password}`,
        //     personRepeatPassword: `${repeatPassword}`
        // };
        // console.log(person);
        // compare passwords
        if (loginUserName != "" + person.personPassword) {
            alert('Your passwords does not match, try again!');
            console.log('false password');
            return false;
        }
        else {
            console.log(person.personPassword);
        }
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
