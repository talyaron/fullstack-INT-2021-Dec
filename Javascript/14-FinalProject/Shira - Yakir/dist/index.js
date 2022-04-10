var userName;
var password;
var formUserName = document.querySelector("#UserName");
var formPassword = document.querySelector("#password");
var formconfirmPassword = document.querySelector("#repeatPassword");
var formSignUpMsg = document.querySelector("#signUpMsg");
var formLoginMsg = document.querySelector("#loginMsg");
var tasksArray = []; // arays that contain the tasks
//create task object
function task(title, content, dueDate, status, category) {
    this.title = title;
    this.content = content;
    this.dueDate = dueDate;
    this.status = status; // true = task is Done , false= Task open
    this.category = category;
}
;
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
function checkLogin(check_username, check_password) {
    if (check_username === userName && check_password === password)
        return true;
    else
        return false;
}
function tasksPage() {
    var today = new Date();
    var todayDisplay = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var todayDate = document.querySelector("#todayDate");
    todayDate.innerHTML = "" + todayDisplay;
}
tasksPage();
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
    updateHtmlTasksView(tasksArray.length - 1);
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
    console.dir(newTask);
}
// add the task from the array to the html by its givin index
function updateHtmlTasksView(taskIndex) {
    var HTML_tasks = document.querySelector(".tasks");
    var HTML_addTaskInput = document.createElement('div');
    HTML_tasks.append(HTML_addTaskInput);
    HTML_addTaskInput.classList.add('task');
    HTML_addTaskInput.innerHTML =
        "<div class=\"task\" id=\"taskInde-" + taskIndex + "\">\n    <h1 class=\"title\">" + (taskIndex + 1) + ". " + tasksArray[taskIndex].title + "</h1>\n    <h2 class=\"contect\">" + tasksArray[taskIndex].content + "</h2>\n    <h3 class=\"dueDate\">" + tasksArray[taskIndex].dueDate + "</h3>\n    <h3 status=\"status\">" + tasksArray[taskIndex].status + "</h3>\n    <h3 status=\"category\">" + tasksArray[taskIndex].category + "</h3> \n    <button class=\"btn btn--delete\" onclick=\"deleteTask(" + taskIndex + ")\">Delete</button>\n    </div>\n    ";
}
// demo data for Development and Testing process
function addTask_demo_DATA() {
    //------------------
    var newTask = new task("test title", "test content", new Date('08/04/2022'), false, "test category");
    tasksArray.push(newTask);
    updateHtmlTasksView(tasksArray.length - 1);
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
}
addTask_demo_DATA();
function deleteTask(taskIndex) {
    tasksArray.splice(taskIndex, 1);
    console.dir(tasksArray);
}
function addCategory(ev) {
    var categories = document.querySelector('.categories');
    categories.innerHTML += ev.target.value + ("" + '<br>');
}
