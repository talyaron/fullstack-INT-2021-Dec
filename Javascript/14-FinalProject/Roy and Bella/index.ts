const tasks: Array<object> = []; // Creating Fake Data Base To Hold All new Users

function handleTask(event: any) {
    event.preventDefault();
    // console.log(event);
    // const heading: any = event.target.elements.heading.value;
    // const description: any = event.target.elements.description.value;
    // const startTime: any = event.target.elements.startTime.value;
    // const endTime: any = event.target.elements.endTime.value;
    // console.log(heading, description, startTime, endTime);
  
    const elements = event.target.elements;
    const result = {};
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type === "checkbox") {
        result[elements[i].name] = elements[i].checked;
      } else if (elements[i].name && elements[i].value) {
        result[elements[i].name] = elements[i].value;
      }
    }
    console.log(result);
  }






















  
// function handleSignUp(event: any) {
//     try {
//         event.prevententDefault();
//         const userName: any = event.target.elements.userName.value;
//         const password: any = event.target.elements.password.value;
//         const repeatPassword: any = event.target.elements.repeatPassword.value;
//         const image: HTMLImageElement = document.querySelector('.img');
//         const imgValue = event.target.elements.image.value;
//         image.innerHTML = `<img src=${imgValue}>`

//         const person = {
//             personUserName: `${userName}`,
//             personPassword: `${password}`,
//         };
//         console.log(person);

//         // compare passwords
//         if (repeatPassword != password) {
//             alert('Your passwords does not match, try again!')
//             console.log('false password')
//             return false;
//         } else {
//             users.push(person); // Pushing new user information to fake data base 
//             console.log(password);
//         }

//     } catch (err) {
//         console.log(err);

//     }
// }


// function handleLogin(ev: any) {
//     try {
//         ev.preventDefault();
//         const loginUserName: any = ev.target.elements.loginUserName.value;
//         const loginPassword: any = ev.target.elements.loginPassword.value;
//         let isConnected: boolean = false;

//         console.log(loginUserName, loginPassword);

//         // Checking if username and password exsixt in data base
//         users.forEach(userInfo => {
//             if (userInfo['personUserName'] == loginUserName) {
//                 if (userInfo['personPassword'] == loginPassword) {
//                     isConnected = true; 
//                 }
//             }
//         })

//         isConnected ? alert('Connected') : alert('Username or password were inccorent');
//     } catch (err) {
//         console.log(err);

//     }
// }


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