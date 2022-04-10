var tasks = []; // Creating "Data Base" To Hold All the tasks.
// Add new task form.
function handleAddTask(event) {
    event.preventDefault();
    //console.log(event);
    var heading = event.target.elements.heading.value;
    var description = event.target.elements.description.value;
    var startTime = event.target.elements.startTime.value;
    var endTime = event.target.elements.endTime.value;
    // console.log(heading, description, startTime, endTime);
    //const task1:task1={heading, description, startTime, endTime}
    // Creating new task div each time a task added from the form.
    var taskContainer = document.querySelector('.tasksContainer');
    var task = document.createElement('div');
    var elements = event.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "checkbox") {
            result[elements[i].name] = elements[i].checked;
        }
        else if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
        // const task: any = result;
    }
    var newtask = Object.create(result);
    // creating checkbox element
    var checkbox = document.createElement('input');
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    task.append(checkbox);
    task.classList.add('task');
    // Appending new tasks into the tasks container.
    task.innerHTML = "<div class='heading'>" + heading + "</div>\n    <div class='description'>" + description + "</div>\n    <div class='startTime'>Scheduled to: " + startTime + "</div> \n   <input type='checkbox' class='checkbox'>\n   <div id=\"time\"></div>\n</div>\n<div class='deletesvg'><img src=./images/delete.svg onclick=removeTask(event) ></div>";
    console.dir(newtask);
    taskContainer.append(task);
    // Pushing the task into a tasks array ("data base").
    tasks.push(newtask);
    tasks.push(task);
    var _loop_1 = function (i) {
        var startDate = tasks[i].startTime;
        // console.log(startDate)
        var countDownDate = new Date(startDate).getTime();
        // Run myfunc every second
        myfunc = setInterval(showTime, 1000);
        function showTime() {
            var now = new Date().getTime();
            var timeleft = countDownDate - now;
            var textTime = timeToText(timeleft);
            // Result is output to the specific element
            document.getElementById("time").innerText = textTime;
            taskContainer.append(newtask);
            // Display the message when countdown is over
            if (timeleft < 0) {
                clearInterval(myfunc);
                alert("'it's time to " + heading + " ");
            }
        }
    };
    var myfunc;
    for (var i = 0; i < tasks.length; i++) {
        _loop_1(i);
    }
    event.target.reset();
}
// Remove tasks.
function removeTask(event) {
    event.preventDefault();
    var button = event.target;
    var task = button.parentNode;
    var array = task.parentNode;
    var div = array.parentNode;
    div.removeChild(array);
}
// Add new task (using 'handleTask' form).
function handleOpenForm(event) {
    event.preventDefault();
    var addBtn = document.querySelector('.addBtn');
    var slide = document.querySelector('.slide');
    var saveBtn = document.querySelector('.saveBtn');
    var cancelBtn = document.querySelector('.cancelBtn');
    // Pressing the 'add' button.
    addBtn.addEventListener('click', toggleSliderUp, false);
    // Slide up
    function toggleSliderUp() {
        slide.classList.contains('slide-up');
        {
            slide.classList.add('slide-up');
        }
    }
    // Pressing the 'save task' button.
    saveBtn.addEventListener('click', toggleSliderDown, false);
    // Slide down
    function toggleSliderDown() {
        slide.classList.contains('slide');
        {
            slide.classList.remove('slide-up');
        }
    }
}
function timeToText(time) {
    // Calculating the days, hours, minutes and seconds left
    if (time >= 0) {
        var days = timeToString(Math.floor(time / (1000 * 60 * 60 * 24)));
        var hours = timeToString(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        var minutes = timeToString(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        var seconds = timeToString(Math.floor((time % (1000 * 60)) / 1000));
        return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
    return '0d 0h 0m 0s';
    function timeToString(time) {
        if (time < 10) {
            return '0' + time;
        }
        return "" + time;
    }
}
// Drafts -------------------------------------------------------------------------------------------------------------------------
// const tasks: Array<object> = [];
// function handleTask(event: any) {
//   event.preventDefault();
//   const elements = event.target.elements;
//   console.log(event.target.elements);
//   console.log(elements.length);
//   const result = {};
//   for (let i = 0; i < elements.length; i++) {
//     if (elements[i].type === "input") {
//       result[elements[i].name] = elements[i].checked;
//     } else if (elements[i].name && elements[i].value) {
//       result[elements[i].name] = elements[i].value;
//     }
// const task: any = result;
// tasks.push(task);
// }
// const task: any = result;
// tasks.push(task);
// console.log(tasks);
// console.log(result);
// let taskContainer: any = document.querySelector('.tasksContainer');
// console.log(taskContainer);
// for (const property in tasks) {
//   console.log(tasks[property]);
//   taskContainer.innerHTML = tasks[property];
//   taskContainer.append(tasks);
//   console.log(tasks);
// }
// }
//   <div class='task'>
//   <h3 class='title'>Task name</h3>
//   <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.quam autem est.</p>
// </div>
