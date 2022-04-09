let userName;
let password;
const formUserName: HTMLInputElement = document.querySelector("#UserName");
const formPassword: HTMLInputElement = document.querySelector("#password");
const formconfirmPassword: HTMLInputElement = document.querySelector("#repeatPassword");
const formSignUpMsg: HTMLElement = document.querySelector("#signUpMsg");
const formLoginMsg: HTMLElement = document.querySelector("#loginMsg");

let tasksArray = []; // arays that contain the tasks

//create task object
function task(title:String, content?:String, dueDate?:Date, status?:boolean, category?:String) {
    this.title = title;
    this.content = content;
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

    //------------------
    let newTask = new task(event.target.value, "test content", new Date('2022-04-08') ,false,"test");
    tasksArray.push(newTask);
    updateHtmlTasksView(tasksArray.length-1);

    // for debug console purpose
    console.dir(tasksArray); 
    console.log(`tasks has ${tasksArray.length} objects`);
    console.dir(newTask); 

}

// add the task from the array to the html by its givin index
function updateHtmlTasksView(taskIndex){
    const HTML_tasks: HTMLElement = document.querySelector(".tasks");
    const HTML_addTaskInput = document.createElement('div');
    HTML_tasks.append(HTML_addTaskInput);
    HTML_addTaskInput.classList.add('task');
    HTML_addTaskInput.innerHTML = 
    `<div class="task" id="taskIndex${taskIndex}">
    <h1 class="title">${tasksArray[taskIndex].title}</h1>
    <h2 class="contect">${tasksArray[taskIndex].content}</h2>
    <h3 class="dueDate">${tasksArray[taskIndex].dueDate}</h3>
    <h3 status="status">${tasksArray[taskIndex].status}</h3>
    <h3 status="category">${tasksArray[taskIndex].category}</h3>    
    </div>
    `;
}

// demo data for Development and Testing process

function addTask_demo_DATA() {
    //------------------
    let newTask = new task(`test title`, `test content`, new Date('08/04/2022') ,false,`test`);
    tasksArray.push(newTask);
    updateHtmlTasksView(tasksArray.length-1);

    // for debug console purpose
    console.dir(tasksArray); 
    console.log(`tasks has ${tasksArray.length} objects`);
}

addTask_demo_DATA()