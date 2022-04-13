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
    // Append a new task to the tasks container
    task.innerHTML = "<div class='heading'>" + heading + "</div>\n    <div class='description'>" + description + "</div>\n    <div class='setReminderDate'>Scheduled to: " + setReminderDate + "</div> \n   <div class='deletesvg'><img src=./images/delete.svg onclick=removeTask(event) ></div>";
    taskContainer.append(task);
    // Push a new task to the tasks array ("data base").
    tasks.push(result);
    console.log(tasks);
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
function calculate() {
    Math.round(Math.random() * (100 - 1) + 1);
    console.log(Math.round(Math.random() * (100 - 1) + 1));
}
