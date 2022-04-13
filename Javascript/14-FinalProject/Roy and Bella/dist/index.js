var tasks = [];
// Add task form
function handleAddTask(event) {
    event.preventDefault();
    var elements = event.target.elements;
    var result = {};
    var heading = elements.heading.value;
    var description = elements.description.value;
    var setReminderDate = elements.setReminderDate.value;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    // Create new task
    var taskContainer = document.querySelector('.tasksContainer');
    var task = document.createElement('div');
    task.classList.add('task');
    task.setAttribute('id', "" + generateid());
    console.log(task);
    timerStarter(heading, setReminderDate);
    // Append a new task to the tasks container
    task.innerHTML = "<div class='heading'>" + heading + "</div>\n    <div class='description'>" + description + "</div>\n    <div class='setReminderDate'>" + setReminderDate + "</div>\n    <div class=\"time\"></div> \n   <div class='deletesvg'><img src=./images/delete.svg onclick=removeTask(event) ></div>\n   ";
    taskContainer.append(task);
    tasks.push(result);
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
    // Form slides up
    addBtn.addEventListener('click', toggleSliderUp);
    function toggleSliderUp() {
        slide.classList.contains('slide-up');
        {
            slide.classList.add('slide-up');
        }
    }
    saveBtn.addEventListener('click', toggleSliderDown);
    // Form slides down
    function toggleSliderDown() {
        slide.classList.contains('slide');
        {
            slide.classList.remove('slide-up');
        }
    }
    cancelBtn.addEventListener('click', handleCancelTask);
    // Form submition canceled
    function handleCancelTask() {
        slide.classList.contains('slide');
        {
            slide.classList.remove('slide-up');
        }
    }
}
function timerStarter(heading, setReminderDate) {
    var newReminderDate = setReminderDate;
    var countDownDate = new Date(newReminderDate).getTime();
    var runTimer = setInterval(showTime, 1000);
    function showTime() {
        var now = new Date().getTime();
        var timeleft = countDownDate - now;
        var textTime = timeToText(timeleft);
        // Result is output to the specific element
        document.querySelector(".time").innerHTML = textTime;
        // Display the message when countdown is over
        if (timeleft <= 0) {
            clearInterval(runTimer);
            alert("'it's time to " + heading + " ");
        }
    }
}
// Calculating the days, hours, minutes and seconds left
function timeToText(time) {
    if (time >= 0) {
        var days = timeToString(Math.floor(time / (1000 * 60 * 60 * 24)));
        var hours = timeToString(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        var minutes = timeToString(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        var seconds = timeToString(Math.floor((time % (1000 * 60)) / 1000));
        return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }
    return '0d 0h 0m 0s';
}
// time to string function
function timeToString(time) {
    if (time < 10) {
        return '0' + time;
    }
    return "" + time;
}
//set uniqid to the array's objects
function generateid() {
    var id = function () {
        return Math.floor((1 + Math.random()) * 10000)
            .toString();
    };
    return id();
}
