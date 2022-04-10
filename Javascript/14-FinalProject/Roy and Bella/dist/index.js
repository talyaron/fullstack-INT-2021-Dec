var tasks = []; // Creating "Data Base" To Hold All the tasks.
// Add new task form.
function handleTask(event) {
    event.preventDefault();
    var heading = event.target.elements.heading.value;
    var description = event.target.elements.description.value;
    var startTime = event.target.elements.startTime.value;
    var endTime = event.target.elements.endTime.value;
    var elements = event.target.elements;
    var result = {};
    for (var i_1 = 0; i_1 < elements.length; i_1++) {
        if (elements[i_1].type === "checkbox") {
            result[elements[i_1].name] = elements[i_1].checked;
        }
        else if (elements[i_1].name && elements[i_1].value) {
            result[elements[i_1].name] = elements[i_1].value;
        }
        // const task: any = result;
    }
    // Creating new task div each time a task added from the form.
    var taskContainer = document.querySelector('.tasksContainer');
    var task = document.createElement('div');
    // const newtask: object = Object.create(result);
    // creating checkbox element
    var checkbox = document.createElement('input');
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    task.append(checkbox);
    task.classList.add('task');
    // Appending new tasks into the tasks container.
    task.innerHTML = "<div class='heading'>" + heading + "</div>\n    <div class='description'>" + description + "</div>\n    <div class='startTime'>Scheduled to: " + startTime + "</div> \n   <div class='deletesvg'><img src=./images/delete.svg onclick=removeTask(event) ></div>\n   <input type='checkbox' class='checkbox'></input>";
    taskContainer.append(task);
    // Pushing the task into a tasks array ("data base").
    tasks.push(result);
    console.log(tasks);
    for (var i = 0; i < tasks.length; i++) {
        var startDate = tasks[i].startTime;
        console.log(startDate);
        var countDownDate = new Date(startDate).getTime();
        // Run myfunc every second
        var myfunc = setInterval(function () {
            myfunc = setInterval(function () {
                var now = new Date().getTime();
                var timeleft = countDownDate - now;
                // Calculating the days, hours, minutes and seconds left
                document.getElementById("hours").innerHTML = hours + "h ";
                document.getElementById("mins").innerHTML = minutes + "m ";
                document.getElementById("secs").innerHTML = seconds + "s ";
                taskContainer.append(task);
                // Display the message when countdown is over
                if (timeleft < 0) {
                    clearInterval(myfunc);
                    alert("'it's time to " + heading + " ");
                }
            }, 1000);
        });
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
    function handleAddTask(event) {
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
    for (var i = 0; i < tasks.length; i++) {
        var countDownDate = new Date(startTime).getTime();
        var _loop_1 = function (i) {
            var startDate = tasks[i].startTime;
            console.log(startDate);
            var countDownDate = new Date(startDate).getTime();
            // Run myfunc every second
            var myfunc = setInterval(function () {
                myfunc = setInterval(function () {
                    var now = new Date().getTime();
                    var timeleft = countDownDate - now;
                    // Calculating the days, hours, minutes and seconds left
                    document.getElementById("hours").innerHTML = hours + "h ";
                    document.getElementById("mins").innerHTML = minutes + "m ";
                    document.getElementById("secs").innerHTML = seconds + "s ";
                    taskContainer.append(task);
                    // Display the message when countdown is over
                    if (timeleft < 0) {
                        clearInterval(myfunc);
                        alert("'it's time to " + heading + " ");
                    }
                }, 1000);
            });
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
        };
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
        // </div>}
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
