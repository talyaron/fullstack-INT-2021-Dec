let userName;
let password;

const formUserName: HTMLInputElement = document.querySelector("#UserName");
const formPassword: HTMLInputElement = document.querySelector("#password");
const formconfirmPassword: HTMLInputElement = document.querySelector("#repeatPassword");
const formSignUpMsg: HTMLElement = document.querySelector("#signUpMsg");
const formLoginMsg: HTMLElement = document.querySelector("#loginMsg");
const addTaskButton: HTMLElement = document.querySelector('.btn--AddTask');
const taskForm: HTMLElement = document.querySelector('#addTaskForm');
const editForm: HTMLElement = document.querySelector('#editTaskForm');
const addNewCategory: HTMLElement = document.querySelector('#addCategory');
const tasksHTML: HTMLElement = document.querySelector('.tasks')
let newCategory = document.querySelector('.categories');
let categoriesSelect: any = document.querySelector('.selectCategory')
let editCategory: any = document.querySelector('.editCategory')
let addTaskInputTxt = document.querySelector('#addTask'); 
const defaultSelect = document.querySelector('#defaultSelect')
// const option = document.querySelector('#defaultSelect')
let currentEditTaskID:number;  // var for idinify what task to update on edit form



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
    try {
        ev.preventDefault();
        const LoginUserName: HTMLInputElement =
            document.querySelector("#LoginUserName");
        const LoginPassword: HTMLInputElement =
            document.querySelector("#LoginPassword");
        const htmlBody: HTMLElement = document.querySelector("body");

        const loginStatus = checkLogin(LoginUserName.value, LoginPassword.value);
        if (loginStatus) {
            formLoginMsg.innerHTML = `success Login`;
            window.location.href = "Tasks.html";

        } else {
            htmlBody.style.background = "red";
            formLoginMsg.innerHTML = `Login Failed`;
        }
    } catch (error) {
        console.error(error);
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
        `<div class="task" id="taskIndex-${taskIndex}">
    <h1 class="title">${taskIndex + 1}. ${tasksArray[taskIndex].title}</h1>
    <h2 class="contect">${tasksArray[taskIndex].content}</h2>
    <h3 class="dueDate">${tasksArray[taskIndex].dueDate}</h3>
    <h3 status="category">Category  :   ${tasksArray[taskIndex].category}</h3> 
    <button class="btn btn--delete" onclick="deleteTask(${taskIndex})">Delete</button>
    <button class="btn btn--Done" onclick="DoneTask(${taskIndex})">Done</button>
    <button class="btn btn--Edit" onclick="EditTask(${taskIndex})">Edit</button>
    </div>
    `;

    // alertTaskPass(); disable becuse its too muck every cange or reopn the page
}

// clean the tasks view then recrate the html element for new array
function tasksViewUpdate() {

    document.querySelector(".tasks").innerHTML = ""; //clean current view

    // insert update view
    for (let i = 0; i < tasksArray.length; i++) {
        updateHtmlTaskView(i);
    }
    // alertTaskPass(); disable becuse its too muck every cange or reopn the page
}

// demo data for Development and Testing process

function addTask_demo_DATA() {
    //------------------
    //------ create example Category-----
    CategoryArray.push("General", "Work", "Studies");

    addCategoryUpdateView(CategoryArray);
    //-------------------------------------------

    //----------create example Task--------------
    let newTask = new task(`Js project`, `create a game`, new Date('04/08/2022'), false, `Studies`);
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

function EditTask(taskIndex) {
    currentEditTaskID = taskIndex; // for later use when update save the update task
    tasksArray[taskIndex].status = true;
    editForm.style.visibility = 'visible';
    tasksHTML.style.visibility = 'hidden';   
    hideAddBtn();   

    // taskIndex
    // show original data from the selected task in the edit form
    document.querySelector('#editTaskTitle').value = tasksArray[taskIndex].title;
    document.querySelector('#editContent').value = tasksArray[taskIndex].content;
    document.querySelector('#editDueDate').value = tasksArray[taskIndex].dueDate;

}


function DoneTask(taskIndex) {
    tasksArray[taskIndex].status = true;
    document.querySelector(`#taskIndex-${taskIndex}`).style.background = "rgb(77, 236, 77)";
    document.querySelector(`.editTaskBtn-${taskIndex}`).style.visibility = 'hidden';
    document.querySelector(`#.editTaskBtn-${taskIndex}`).style.visibility = 'hidden';
    
    tasksArray[taskIndex].title.style.textDecoration = "line-through"; //CHECK//
    console.dir(tasksArray);
}

function addCategoryUpdateView(CategoryArray) {
    for (let i = 0; i < CategoryArray.length; i++) {
        let li = document.createElement("li");
        li.innerText = CategoryArray[i];
        newCategory.appendChild(li);
        console.dir(CategoryArray);
    }
}



function submitAddTaskForm(event) {
    event.preventDefault();
    let newTask = new task(event.target.taskTitle.value,
        event.target.Content.value, new Date(event.target.dueDate.value), false, choice);
    tasksArray.push(newTask);
    updateHtmlTaskView(tasksArray.length - 1);
    closeTaskForm()
    // for debug console purpose
    console.dir(tasksArray);
    console.log(`tasks has ${tasksArray.length} objects`);

        //Reset the fields of form:
    addTaskInputTxt.value = "";
    document.querySelector('#contentInput').value='';
    document.querySelector('#dateInput').value = '';
    var options = document.querySelectorAll('.selectCategory');
        for (var i = 0, l = options.length; i < l; i++) {
        options[i].value = defaultSelect.value;
    }
}

function submitEditTaskForm(event) {
    console.log(event);
    event.preventDefault();
    tasksArray[currentEditTaskID].title = event.target.editTaskTitle.value;
    tasksArray[currentEditTaskID].content = event.target.editContent.value;
    // tasksArray[currentEditTaskID].dueDate = new Date(event.target.dueDate.value);
    tasksArray[currentEditTaskID].status = false;
    tasksArray[currentEditTaskID] = choice;
    tasksViewUpdate()
    closeEditForm()
    
    // for debug console purpose
    console.dir(tasksArray);
    console.log(`tasks has ${tasksArray.length} objects`);

        //Reset the fields of form:
    // editForm.value = "";
    // document.querySelector('#contentInput').value='';
    // document.querySelector('#dateInput').value = '';
    // var options = document.querySelectorAll('.selectCategory');
    // for (var i = 0, l = options.length; i < l; i++) {
    // // options[i].value = defaultSelect.value;
}

addTaskButton.addEventListener("click", openTaskForm);
function openTaskForm() {
    taskForm.style.visibility = 'visible';
    tasksHTML.style.visibility = 'hidden';
    hideAddBtn()
}

addTaskButton.addEventListener("click", alertTaskPass);

// EditTask.addEventListener("click", editTaskForm)
// function editTaskForm() {
// taskForm.style.visibility = 'hidden';
// tasksHTML.style.visibility = 'hidden';
// }


function closeTaskForm() {
    taskForm.style.visibility = 'hidden';
    tasksHTML.style.visibility = 'visible';
    showAddBtn()
}

function closeEditForm() {
    editForm.style.visibility = 'hidden';
    tasksHTML.style.visibility = 'visible';
    showAddBtn()
}

function handleSelectCategory() {
    clearOptions()
    console.dir(categoriesSelect);
    console.dir(CategoryArray);
    // let option = document.createElement("option");

    for (let i = 0; i < CategoryArray.length; i++) {
        let option = document.createElement("option");
        option.value = CategoryArray[i];
        option.text = CategoryArray[i];
        categoriesSelect.appendChild(option);
        editCategory.appendChild(option);
        console.log(CategoryArray[i])

    }
   
    console.dir(categoriesSelect);
}

function clearOptions(){
   let len ;
    len = categoriesSelect.options.length-1;
    for (let i = len; i > 0; i--) {
        categoriesSelect.remove(i);
        editCategory.remove(i);
    }
}

let choice: string = '';

function selctCtg(event) {
    choice = event.target.value
    let input: any = document.querySelector('.ctgInput')
    input.innerHTML = choice;
}
            // handleSelectCategory()


function addNewCtg(event) {
    try {
        if (event.keyCode == 13) {
            CategoryArray.push(event.target.value);
            let li = document.createElement("li");
            li.innerText = event.target.value;
            newCategory.appendChild(li);
            console.dir(CategoryArray);
            addNewCategory.value = "";
            handleSelectCategory()
        }
    }
    catch (error) {
        console.error(error);
    }
}

//call function again, to initial select categories 
handleSelectCategory()


function hideAddBtn(){

    document.querySelector('.btn--AddTask').style.visibility = "hidden";
    
}

function showAddBtn(){

    document.querySelector('.btn--AddTask').style.visibility = "visible";
    
}


function alertTaskPass(){
    let nowtime:Date = new Date (Date.now());
    let d1:Date = new Date('2022-04-01');
    tasksArray.forEach(element => {
        try{
     if (element.status == false) {
        if( nowtime >= element.dueDate ){
            alert(`Task Pass: ${element.title} at ${element.dueDate}`);
        }
    }
        }
        catch (error) {
            console.error(error);
        }

    });
}

