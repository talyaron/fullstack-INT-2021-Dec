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

const users: Array<object> = [];

function handleSignUp(ev: any) {
    try {
        ev.preventDefault();
        const userName: any = ev.target.elements.userName.value;
        const password: any = ev.target.elements.password.value;
        const repeatPassword: any = ev.target.elements.repeatPassword.value;
        const image: HTMLImageElement = document.querySelector('.img');
        const imgValue = ev.target.elements.image.value;
        image.innerHTML = `<img src=${imgValue}>`

        const person = {
            personUserName: `${userName}`,
            personPassword: `${password}`,
        };
        console.log(person);

        // compare passwords
        if (repeatPassword != password) {
            alert('Your passwords does not match, try again!')
            console.log('false password')
            return false;
        } else {
            users.push(person);
            console.log(password);
        }

    } catch (err) {
        console.log(err);

    }
}


function handleLogin(ev: any) {
    try {
        ev.preventDefault();
        const loginUserName: any = ev.target.elements.loginUserName.value;
        const loginPassword: any = ev.target.elements.loginPassword.value;
        let isConnected: boolean = false;

        console.log(loginUserName, loginPassword);

        users.forEach(userInfo => {
            if (userInfo['personUserName'] == loginUserName) {
                if (userInfo['personPassword'] == loginPassword) {
                    isConnected = true;
                }
            }
        })

        isConnected ? alert('Connected') : alert('Username or password were inccorent');

        // const person = {
        //     personUserName: `${userName}`, 
        //     personPassword: `${password}`,
        //     personRepeatPassword: `${repeatPassword}`
        // };
        // console.log(person);

        // compare passwords
        // if (loginUserName != `${users.personPassword}`) {
        //     alert('Your passwords does not match, try again!')
        //     console.log('false password')
        //     return false;
        // } else {
        //     alert('Connected!');
        //     console.log (users.personPassword);
        // }

    } catch (err) {
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