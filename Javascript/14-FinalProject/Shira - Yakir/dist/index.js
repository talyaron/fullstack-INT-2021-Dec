var userName;
var password;
var formUserName = document.querySelector("#UserName");
var formPassword = document.querySelector("#password");
var formconfirmPassword = document.querySelector("#repeatPassword");
var formSignUpMsg = document.querySelector("#signUpMsg");
var formLoginMsg = document.querySelector("#loginMsg");
var addTaskButton = document.querySelector('.btn--AddTask');
var taskForm = document.querySelector('#addTaskForm');
var editForm = document.querySelector('#editTaskForm');
var addNewCategory = document.querySelector('#addCategory');
var tasksHTML = document.querySelector('.tasks');
var newCategory = document.querySelector('.categories');
var categoriesSelect = document.querySelector('.selectCategory');
var editCategory = document.querySelector('.editCategory');
var addTaskInputTxt = document.querySelector('#addTask');
var defaultSelect = document.querySelector('#defaultSelect');
// const option = document.querySelector('#defaultSelect')
var currentEditTaskID; // var for idinify what task to update on edit form
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
    try {
        ev.preventDefault();
        var LoginUserName = document.querySelector("#LoginUserName");
        var LoginPassword = document.querySelector("#LoginPassword");
        var htmlBody = document.querySelector("body");
        var loginStatus = checkLogin(LoginUserName.value, LoginPassword.value);
        if (loginStatus) {
            formLoginMsg.innerHTML = "success Login";
            window.location.href = "Tasks.html";
        }
        else {
            htmlBody.style.background = "red";
            formLoginMsg.innerHTML = "Login Failed";
        }
    }
    catch (error) {
        console.error(error);
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
        "<div class=\"task\" id=\"taskIndex-" + taskIndex + "\">\n    <h1 class=\"title\">" + (taskIndex + 1) + ". " + tasksArray[taskIndex].title + "</h1>\n    <h2 class=\"contect\">" + tasksArray[taskIndex].content + "</h2>\n    <h3 class=\"dueDate\">" + tasksArray[taskIndex].dueDate + "</h3>\n    <h3 status=\"category\">Category  :   " + tasksArray[taskIndex].category + "</h3> \n    <button class=\"btn btn--delete\" onclick=\"deleteTask(" + taskIndex + ")\">Delete</button>\n    <button class=\"btn btn--Done\" onclick=\"DoneTask(" + taskIndex + ")\">Done</button>\n    <button class=\"btn btn--Edit\" onclick=\"EditTask(" + taskIndex + ")\">Edit</button>\n    </div>\n    ";
    // alertTaskPass(); disable becuse its too muck every cange or reopn the page
}
// clean the tasks view then recrate the html element for new array
function tasksViewUpdate() {
    document.querySelector(".tasks").innerHTML = ""; //clean current view
    // insert update view
    for (var i = 0; i < tasksArray.length; i++) {
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
    var newTask = new task("Js project", "create a game", new Date('04/08/2022'), false, "Studies");
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
    document.querySelector("#taskIndex-" + taskIndex).style.background = "rgb(77, 236, 77)";
    document.querySelector(".editTaskBtn-" + taskIndex).style.visibility = 'hidden';
    document.querySelector("#.editTaskBtn-" + taskIndex).style.visibility = 'hidden';
    tasksArray[taskIndex].title.style.textDecoration = "line-through"; //CHECK//
    console.dir(tasksArray);
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
    var newTask = new task(event.target.taskTitle.value, event.target.Content.value, new Date(event.target.dueDate.value), false, choice);
    tasksArray.push(newTask);
    updateHtmlTaskView(tasksArray.length - 1);
    closeTaskForm();
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
    //Reset the fields of form:
    addTaskInputTxt.value = "";
    document.querySelector('#contentInput').value = '';
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
    tasksViewUpdate();
    closeEditForm();
    // for debug console purpose
    console.dir(tasksArray);
    console.log("tasks has " + tasksArray.length + " objects");
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
    hideAddBtn();
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
    showAddBtn();
}
function closeEditForm() {
    editForm.style.visibility = 'hidden';
    tasksHTML.style.visibility = 'visible';
    showAddBtn();
}
function handleSelectCategory() {
    clearOptions();
    console.dir(categoriesSelect);
    console.dir(CategoryArray);
    // let option = document.createElement("option");
    for (var i = 0; i < CategoryArray.length; i++) {
        var option = document.createElement("option");
        option.value = CategoryArray[i];
        option.text = CategoryArray[i];
        categoriesSelect.appendChild(option);
        editCategory.appendChild(option);
        console.log(CategoryArray[i]);
    }
    console.dir(categoriesSelect);
}
function clearOptions() {
    var len;
    len = categoriesSelect.options.length - 1;
    for (var i = len; i > 0; i--) {
        categoriesSelect.remove(i);
        editCategory.remove(i);
    }
}
var choice = '';
function selctCtg(event) {
    choice = event.target.value;
    var input = document.querySelector('.ctgInput');
    input.innerHTML = choice;
}
// handleSelectCategory()
function addNewCtg(event) {
    try {
        if (event.keyCode == 13) {
            CategoryArray.push(event.target.value);
            var li = document.createElement("li");
            li.innerText = event.target.value;
            newCategory.appendChild(li);
            console.dir(CategoryArray);
            addNewCategory.value = "";
            handleSelectCategory();
        }
    }
    catch (error) {
        console.error(error);
    }
}
//call function again, to initial select categories 
handleSelectCategory();
function hideAddBtn() {
    document.querySelector('.btn--AddTask').style.visibility = "hidden";
}
function showAddBtn() {
    document.querySelector('.btn--AddTask').style.visibility = "visible";
}
function alertTaskPass() {
    var nowtime = new Date(Date.now());
    var d1 = new Date('2022-04-01');
    tasksArray.forEach(function (element) {
        try {
            if (element.status == false) {
                if (nowtime >= element.dueDate) {
                    alert("Task Pass: " + element.title + " at " + element.dueDate);
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
