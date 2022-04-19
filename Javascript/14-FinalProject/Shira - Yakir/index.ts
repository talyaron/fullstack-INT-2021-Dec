let userName;
let password;

const formUserName: HTMLInputElement = document.querySelector("#UserName");
const formPassword: HTMLInputElement = document.querySelector("#password");
const formconfirmPassword: HTMLInputElement = document.querySelector("#repeatPassword");
const formSignUpMsg: HTMLElement = document.querySelector("#signUpMsg");
const formLoginMsg: HTMLElement = document.querySelector("#loginMsg");
let newCategory = document.querySelector('.categories');

let tasksArray = []; // arays that contain the tasks
let CategoryArray = [];  // arays that contain the Categories

//create task object
function task(title: String, content?: String, dueDate?: Date, status?: boolean, category?: String) {
    this.title = title;
    this.content = content;
    this.dueDate = dueDate;
    this.status = status;  // true = task is Done , false= Task open
    this.category = category;
};

//    SignUp
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

//    Login
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
        window.location.href = "Tasks.html";

    } else {
        htmlBody.style.background = "red";
        formLoginMsg.innerHTML = `Login Failed`;
    }
}

// help function for Login
function checkLogin(check_username: String, check_password: string): Boolean {
    if (check_username === userName && check_password === password) return true;
    else return false;
}

//    tasks Page header Date VIEW
function tasksPage() {
    let today = new Date();
    let todayDisplay = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    const todayDate: HTMLElement = document.querySelector("#todayDate");
    todayDate.innerHTML = `${todayDisplay}`;

}

tasksPage()

// create NEW task in the array then display it on HTML
function addTask(event) {

    // pass the arguments from the event to the object constractor 
    // and/or use some demo data for development and testing untile all set

    let title = event.target.value
    let content = `test content`;
    let dueDate = new Date(); // set current date
    let status = false;
    let category = "test category";

    //-----------------------------------------------------------------
    let newTask = new task(title, content, dueDate, false, category);
    tasksArray.push(newTask);
    updateHtmlTaskView(tasksArray.length - 1);

    // for debug console purpose
    console.dir(tasksArray);
    console.log(`tasks has ${tasksArray.length} objects`);
    console.dir(newTask);

}

// add the task from the array to the html by its givin index
function updateHtmlTaskView(taskIndex) {
    const HTML_tasks: HTMLElement = document.querySelector(".tasks");
    const HTML_addTaskInput = document.createElement('div');
    HTML_tasks.append(HTML_addTaskInput);
    HTML_addTaskInput.classList.add('task');
    HTML_addTaskInput.innerHTML =
        `<div class="task" id="taskInde-${taskIndex}">
    <h1 class="title">${taskIndex + 1}. ${tasksArray[taskIndex].title}</h1>
    <h2 class="contect">${tasksArray[taskIndex].content}</h2>
    <h3 class="dueDate">${tasksArray[taskIndex].dueDate}</h3>
    <h3 status="status">${tasksArray[taskIndex].status}</h3>
    <h3 status="category">${tasksArray[taskIndex].category}</h3> 
    <button class="btn btn--delete" onclick="deleteTask(${taskIndex})">Delete</button>
    <input type="checkbox" class="inputCheck" name="check" id="checkboxDone">
    <p class="done">Done</p>
    <input type="date" class="inputDate" name="dueDate" id="dueDate" value="${tasksArray[taskIndex].dueDate}">
    <img class="editTaskBtn" src="./images/edit.png" alt="">
    </div>
    `;
}

// clean the tasks view then recrate the html element for new array
function tasksViewUpdate(){

    document.querySelector(".tasks").innerHTML = ""; //clean current view
    
    // insert update view
    for(let i=0; i<tasksArray.length; i++){
        updateHtmlTaskView(i);
    }
    }

// demo data for Development and Testing process

function addTask_demo_DATA() {
    //------------------
    //------ create example Category-----
    CategoryArray.push("General","Work","Studies");
    addCategoryUpdateView(CategoryArray);
    //-------------------------------------------

    //----------create example Task--------------
    let newTask = new task(`test title`, `test content`, new Date('08/04/2022'), false, `test category`);
    tasksArray.push(newTask);
    updateHtmlTaskView(tasksArray.length - 1);

    // for debug console purpose
    console.dir(tasksArray);
    console.log(`tasks has ${tasksArray.length} objects`);
}

addTask_demo_DATA()

function deleteTask(taskIndex) {
    tasksArray.splice(taskIndex, 1)
    tasksViewUpdate()
    console.dir(tasksArray);
}

function addCategory(ev){
    CategoryArray.push(ev.target.value);
    let li = document.createElement("li");
    li.innerText = ev.target.value ;
    newCategory.appendChild(li);
    console.dir(CategoryArray);
}

function addCategoryUpdateView(CategoryArray){
    for(let i=0; i<CategoryArray.length; i++){
        let li = document.createElement("li");
        li.innerText = CategoryArray[i] ;
        newCategory.appendChild(li);
        console.dir(CategoryArray);
    }
}



function submitAddTaskForm(event){
    event.preventDefault();
    let newTask = new task(event.target.taskTitle.value, 
        event.target.Content.value, new Date(event.target.dueDate.value), false, `test category`);
    tasksArray.push(newTask);
    updateHtmlTaskView(tasksArray.length - 1);

    // for debug console purpose
    console.dir(tasksArray);
    console.log(`tasks has ${tasksArray.length} objects`);
}

function handleSelectCategory(){
    let categoriesSelect = document.querySelector('#selectCategory')
    // for(let i=0; i<CategoryArray.length; i++){
    // categoriesSelect.innerHTML = `<option value="categoryy">${CategoryArray[i]}</option>`
    for (let i = 0; i < CategoryArray.length; i++) {
        let option = document.createElement("option");
        option.value = CategoryArray[i];
        option.text = CategoryArray[i];
        categoriesSelect.appendChild(option);
    }

}
handleSelectCategory()


function selctCtg(event){
    let choice = '';
    choice = event.target.value
    let input:any = document.querySelector('.ctgInput')
    input.innerHTML = choice;
    let categoriesSelect = document.querySelector('#selectCategory')
    categoriesSelect.remove();
}

// let choice:string = ""

// function handleChooseCategory(event:any){
//     let option = document.createElement("option");
//     choice = event.target.value
//     for (let i = 0; i < CategoryArray.length; i++) {
//        option.innerHTML = CategoryArray[i]
//     } 
// }

