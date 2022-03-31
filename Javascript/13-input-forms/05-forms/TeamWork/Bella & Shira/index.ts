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
    } catch (err) {
        console.log(err);
    }
}


function handleSignUp(ev: any) {
    try {
        ev.preventDefault();
        const userName: any = ev.target.elements.userName.value;
        const password: number = ev.target.elements.password.value;
        const repeatPassword: number = ev.target.elements.repeatPassword.value;
        const image: HTMLImageElement = document.querySelector('.img');
        const imgValue = ev.target.elements.image.value;
        image.innerHTML = `<img src=${imgValue}>`
        console.log(userName, password, repeatPassword, imgValue);

        if (repeatPassword != password) {
            alert('Your passwords does not match, try again!')
            console.log('false password')
            return false;
        } else {
            console.log (password);
        }

    } catch (err) {
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