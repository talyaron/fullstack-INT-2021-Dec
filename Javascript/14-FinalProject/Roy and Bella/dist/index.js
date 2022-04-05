var tasks = []; // Creating Fake Data Base To Hold All tasks.
// Add new task form.
function handleTask(event) {
    event.preventDefault();
    console.log(event);
    var heading = event.target.elements.heading.value;
    var description = event.target.elements.description.value;
    var startTime = event.target.elements.startTime.value;
    var endTime = event.target.elements.endTime.value;
    console.log(heading, description, startTime, endTime);
    // Creating new task div each time a task added from the form.
    var taskContainer = document.querySelector('.tasksContainer');
    var task = document.createElement('div');
    task.classList.add('task');
    // Appending new tasks into the tasks container.
    task.innerHTML = "<div class='heading'>" + heading + "</div>\n    <div class='description'>" + description + "</div>\n    <div class='startTime'>" + startTime + "</div>";
    console.log(task);
    taskContainer.append(task);
    // Pushing the task into a tasks array ("data base").
    tasks.push(task.name);
    console.log(tasks);
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