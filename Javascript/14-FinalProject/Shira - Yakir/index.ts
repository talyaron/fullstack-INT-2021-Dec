let userName;
let password;
const formUserName: HTMLInputElement = document.querySelector("#UserName");
const formPassword: HTMLInputElement = document.querySelector("#password");
const formconfirmPassword: HTMLInputElement = document.querySelector("#repeatPassword");
const formSignUpMsg: HTMLElement = document.querySelector("#signUpMsg");
const formLoginMsg: HTMLElement = document.querySelector("#loginMsg");

let tasksArray = [];

//create task object
function task(title:String, content?:String, dueDate?:Date, status?:boolean, category?:String) {
    this.title = title;
    this.contect = content;
    this.dueDate = dueDate;
    this.status = status;  // true = task is Done , false= Task open
    this.category = category;

};

function handleSignUp(event) {
    event.preventDefault();
    if (formPassword.value === formconfirmPassword.value) {
        userName = formUserName.value;
        password = formPassword.value;
        const elements = event.target.elements;
        formSignUpMsg.innerHTML = `sign up success`;
    } else {
        alert("confirm password dosent match");
        formSignUpMsg.innerHTML = `confirm password dosent match`;
    }
}

function handleLogin(ev) {
    ev.preventDefault();
    const LoginUserName: HTMLInputElement =
        document.querySelector("#LoginUserName");
    const LoginPassword: HTMLInputElement =
        document.querySelector("#LoginPassword");
    const htmlBody: HTMLElement = document.querySelector("body");

    const loginStatus = checkLogin(LoginUserName.value, LoginPassword.value);
    if (loginStatus) {
        htmlBody.style.background = "green";
        formLoginMsg.innerHTML = `success Login`;



    } else {
        htmlBody.style.background = "red";
        formLoginMsg.innerHTML = `Login Failed`;
    }
}

function checkLogin(check_username: String, check_password: string): Boolean {
    if (check_username === userName && check_password === password) return true;
    else return false;
}






function tasksPage() {
    let today = new Date();
    let todayDisplay = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    const todayDate: HTMLElement = document.querySelector("#todayDate");
    todayDate.innerHTML = `${todayDisplay}`;

}

tasksPage()


function addTask(event) {
    const HTML_tasks: HTMLElement = document.querySelector(".tasks");
    const HTML_addTaskInput = document.createElement('div')
    HTML_tasks.append(HTML_addTaskInput)
    HTML_addTaskInput.classList.add('task')

    //------------------
    let newTask = new task(event.target.value, "test content", new Date('2022-04-08') ,false,"test");
   
    console.dir(newTask);
    HTML_addTaskInput.innerHTML = newTask.title;
    console.log("test" + newTask.title.value);

    console.log(newTask);
    tasksArray.push(newTask);
}