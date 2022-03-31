function handleSend(ev) {
    try {
        ev.preventDefault();
        console.log(ev);
        var firstInput = ev.target.elements.firstInput.value;
        var secondInput = ev.target.elements.secondInput.value;
        ev.target.elements.firstInput.value = '';
        ev.target.elements.secondInput.value = '';
        console.log(Math.floor(firstInput / secondInput));
        var result = document.querySelector('.result');
        var value = Math.abs(firstInput / secondInput);
        result.innerHTML = value;
    }
    catch (err) {
        console.log(err);
    }
}
function handleSignUp(ev) {
    try {
        ev.preventDefault();
        var userName = ev.target.elements.userName.value;
        var password = ev.target.elements.password.value;
        var repeatPassword = ev.target.elements.repeatPassword.value;
        var image = document.querySelector('.img');
        var imgValue = ev.target.elements.image.value;
        image.innerHTML = "<img src=" + imgValue + ">";
        console.log(userName, password, repeatPassword, imgValue);
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
// function ComparePasswords(){
//     const passwordCheck = document.querySelector('#password').value;
//     const repeatPasswordCheck = document.querySelector('#repeatPassword').value;
//     if (repeatPasswordCheck!= passwordCheck) {
//         console.log (passwordCheck);
//     } else {
//         console.log (passwordCheck);
//         alert('Your password does not match!')
//     }
// }
// // Function to check Whether both passwords
// // is same or not.
// function checkPassword(form) {
//     passwordCheck = form.password1.value;
//     password2 = form.password2.value;
//     // If password not entered
//     if (password1 == '')
//         alert ("Please enter Password");
//     // If confirm password not entered
//     else if (password2 == '')
//         alert ("Please enter confirm password");
//     // If Not same return False.    
//     else if (password1 != password2) {
//         alert ("\nPassword did not match: Please try again...")
//         return false;
//     }
//     // If same return True.
//     else{
//         alert("Password Match: Welcome to GeeksforGeeks!")
//         return true;
//     }
// }
