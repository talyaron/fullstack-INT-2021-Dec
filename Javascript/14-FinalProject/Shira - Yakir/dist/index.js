var userName;
var password;
var formUserName = document.querySelector("#UserName");
var formPassword = document.querySelector("#password");
var formconfirmPassword = document.querySelector("#repeatPassword");
var formSignUpMsg = document.querySelector("#signUpMsg");
var formLoginMsg = document.querySelector("#loginMsg");
var newCategory = document.querySelector('.categories');
var tasksArray = []; // arays that contain the tasks
var CategoryArray = []; // arays that contain the Categories
//create task object
function task(title, content, dueDate, status, category) {
    this.title = title;
    this.content = content;
    this.dueDate = dueDate;
    this.status = status; // true = task is Done , false= Task open
    this.category = category;
}
;
//    SignUp
function handleSignUp(event) {
    event.preventDefault();
    if (formPassword.value === formconfirmPassword.value) {
        userName = formUserName.value;
        password = formPassword.value;
        var elements = event.target.elements;
        formSignUpMsg.innerHTML = "sign up success";
    }
    else {
        alert("confirm password dosent match");
        formSignUpMsg.innerHTML = "confirm password dosent match";
    }
}
//    Login
function handleLogin(ev) {
    ev.preventDefault();
    var LoginUserName = document.querySelector("#LoginUserName");
    var LoginPassword = document.querySelector("#LoginPassword");
    var htmlBody = document.querySelector("body");
    var loginStatus = checkLogin(LoginUserName.value, LoginPassword.value);
    if (loginStatus) {
        htmlBody.style.background = "green";
        formLoginMsg.innerHTML = "success Login";
        window.location.href = "Tasks.html";
    }
    else {
        htmlBody.style.background = "red";
        formLoginMsg.innerHTML = "Login Failed";
    }
}
// help function for Login
function checkLogin(check_username, check_password) {
    if (check_username === userName && check_password === password)
        return true;
    else
        return false;
}
//    tasks Page header Date VIEW
function tasksPage() {
    var today = new Date();
    var todayDisplay = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var todayDate = document.querySelector("#todayDate");
    todayDate.innerHTML = "" + todayDisplay;
}
tasksPage();
// create NEW task in the array then display it on HTML
function addTask(event) {
    // pass the arguments from the event to the object constractor 
    // and/or use some demo data for development and testing untile all set
    var title = event.target.value;
    var content = "test content";
    var dueDate = new Date(); // set current date
    var status = false;
    var category = "test category";
    //-----------------------------------------------------------------
    var newTask = new task(title, content, dueDate, false, category);
    tasksArray.push(newTask);
    updateHtmlTaskView(tasksArray.length - 1);
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
    console.dir(newTask);
}
// add the task from the array to the html by its givin index
function updateHtmlTaskView(taskIndex) {
    var HTML_tasks = document.querySelector(".tasks");
    var HTML_addTaskInput = document.createElement('div');
    HTML_tasks.append(HTML_addTaskInput);
    HTML_addTaskInput.classList.add('task');
    HTML_addTaskInput.innerHTML =
        "<div class=\"task\" id=\"taskInde-" + taskIndex + "\">\n    <h1 class=\"title\">" + (taskIndex + 1) + ". " + tasksArray[taskIndex].title + "</h1>\n    <h2 class=\"contect\">" + tasksArray[taskIndex].content + "</h2>\n    <h3 class=\"dueDate\">" + tasksArray[taskIndex].dueDate + "</h3>\n    <h3 status=\"status\">" + tasksArray[taskIndex].status + "</h3>\n    <h3 status=\"category\">" + tasksArray[taskIndex].category + "</h3> \n    <button class=\"btn btn--delete\" onclick=\"deleteTask(" + taskIndex + ")\">Delete</button>\n    <input type=\"checkbox\" class=\"inputCheck\" name=\"check\" id=\"checkboxDone\">\n    <p class=\"done\">Done</p>\n    <input type=\"date\" class=\"inputDate\" name=\"dueDate\" id=\"dueDate\" value=\"" + tasksArray[taskIndex].dueDate + "\">\n    <img class=\"editTaskBtn\" src=\"./images/edit.png\" alt=\"\">\n    </div>\n    ";
}
// clean the tasks view then recrate the html element for new array
function tasksViewUpdate() {
    document.querySelector(".tasks").innerHTML = ""; //clean current view
    // insert update view
    for (var i = 0; i < tasksArray.length; i++) {
        updateHtmlTaskView(i);
    }
}
// demo data for Development and Testing process
function addTask_demo_DATA() {
    //------------------
    //------ create example Category-----
    CategoryArray.push("General", "Work", "Studies");
    addCategoryUpdateView(CategoryArray);
    //-------------------------------------------
    //----------create example Task--------------
    var newTask = new task("test title", "test content", new Date('08/04/2022'), false, "test category");
    tasksArray.push(newTask);
    updateHtmlTaskView(tasksArray.length - 1);
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
}
addTask_demo_DATA();
function deleteTask(taskIndex) {
    tasksArray.splice(taskIndex, 1);
    tasksViewUpdate();
    console.dir(tasksArray);
}
function addCategory(ev) {
    CategoryArray.push(ev.target.value);
    var li = document.createElement("li");
    li.innerText = ev.target.value;
    newCategory.appendChild(li);
    console.dir(CategoryArray);
}
function addCategoryUpdateView(CategoryArray) {
    for (var i = 0; i < CategoryArray.length; i++) {
        var li = document.createElement("li");
        li.innerText = CategoryArray[i];
        newCategory.appendChild(li);
        console.dir(CategoryArray);
    }
}
function submitAddTaskForm(event) {
    event.preventDefault();
    var newTask = new task(event.target.taskTitle.value, event.target.Content.value, new Date(event.target.dueDate.value), false, "test category");
    tasksArray.push(newTask);
    updateHtmlTaskView(tasksArray.length - 1);
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
}
function handleSelectCategory() {
    var categoriesSelect = document.querySelector('#selectCategory');
    // for(let i=0; i<CategoryArray.length; i++){
    // categoriesSelect.innerHTML = `<option value="categoryy">${CategoryArray[i]}</option>`
    for (var i = 0; i < CategoryArray.length; i++) {
        var option = document.createElement("option");
        option.value = CategoryArray[i];
        option.text = CategoryArray[i];
        categoriesSelect.appendChild(option);
    }
}
handleSelectCategory();
function selctCtg(event) {
    var choice = '';
    choice = event.target.value;
    var input = document.querySelector('.ctgInput');
    input.innerHTML = choice;
    var categoriesSelect = document.querySelector('#selectCategory');
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
