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
    this.contect = content;
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
    //------------------
    var newTask = new task(event.target.value, "test content", new Date('2022-04-08'), false, "test");
    tasksArray.push(newTask);
    updateHtmlTasksView(tasksArray.length - 1);
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
    console.dir(newTask);
    //for test the html update
    HTML_addTaskInput.innerHTML = newTask.title;
}
function addTask_demo_DATA() {
    //------------------
    var newTask = new task("test title", "test content", new Date('08/04/2022'), false, "test");
    tasksArray.push(newTask);
    updateHtmlTasksView(tasksArray.length - 1);
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
}
addTask_demo_DATA();
function updateHtmlTasksView(taskIndex) {
    var HTML_tasks = document.querySelector(".tasks");
    var HTML_addTaskInput = document.createElement('div');
    HTML_tasks.append(HTML_addTaskInput);
    HTML_addTaskInput.classList.add('task');
    HTML_addTaskInput.innerHTML =
        "<div class=\"task\" id=\"taskIndex" + taskIndex + "\">\n    <h1 class=\"title\">" + tasksArray[taskIndex].title + "</h1>\n    <h2 class=\"contect\">" + tasksArray[taskIndex].content + "</h2>\n    <h3 class=\"dueDate\">" + tasksArray[taskIndex].dueDate + "</h3>\n    <h3 status=\"status\">" + tasksArray[taskIndex].status + "</h3>\n    <h3 status=\"category\">" + tasksArray[taskIndex].category + "</h3>    \n    </div>\n    ";
}
updateHtmlTasksView(0);
