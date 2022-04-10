const tasks: Array<task> = []; // Creating "Data Base" To Hold All the tasks.
interface task {
  heading: HTMLInputElement
  description: HTMLInputElement
  startTime: HTMLInputElement
  endTime: HTMLInputElement
}
// Add new task form.
function handleTask(event: any) {
  event.preventDefault();
  //console.log(event);
  const heading: HTMLInputElement = event.target.elements.heading.value;
  const description: HTMLInputElement = event.target.elements.description.value;
  const startTime: HTMLInputElement = event.target.elements.startTime.value;
  const endTime: HTMLInputElement = event.target.elements.endTime.value;
  // console.log(heading, description, startTime, endTime);
  //const task1:task1={heading, description, startTime, endTime}
  // Creating new task div each time a task added from the form.
  const taskContainer: HTMLDivElement = document.querySelector('.tasksContainer');
  const task: any = document.createElement('div')

  let elements = event.target.elements;
  let result = {};
  for (let i = 0; i < elements.length; i++) {
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
  const checkbox = document.createElement('input');

  // Assigning the attributes
  // to created checkbox
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";

  task.append(checkbox);

  task.classList.add('task');

  // Appending new tasks into the tasks container.
  task.innerHTML = `<div class='heading'>${heading}</div>
    <div class='description'>${description}</div>
    <div class='startTime'>Scheduled to: ${startTime}</div> 
   <input type='checkbox' class='checkbox'>
   <div id="time"></div>
</div>
<div class='deletesvg'><img src=./images/delete.svg onclick=removeTask(event) ></div>`;


  console.dir(newtask)


  taskContainer.append(task);
  //console.log(task1)
  //console.log(task1.startTime)
  // Pushing the task into a tasks array ("data base").
  tasks.push(newtask);
  tasks.push(task)
  //console.log(tasks)

  for (let i = 0; i < tasks.length; i++) {


    const startDate: any = tasks[i].startTime
    // console.log(startDate)
    const countDownDate:number = new Date(startDate).getTime();

    // Run myfunc every second
    var myfunc = setInterval(showTime, 1000);

    function showTime() {
      const now:number = new Date().getTime();
      const timeleft = countDownDate - now;
const textTime = timeToText(timeleft);
      

      // Result is output to the specific element
      document.getElementById("time").innerText = textTime;


      taskContainer.append(newtask)
      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc);
        alert(`'it's time to ${heading} `)
      }
    }
  }



  event.target.reset()

}
// Remove tasks.
function removeTask(event) {
  event.preventDefault();
  const button = event.target;
  const task = button.parentNode;
  const array = task.parentNode;
  const div = array.parentNode

  div.removeChild(array);
}

// Add new task (using 'handleTask' form).
function handleAddTask(event) {
  event.preventDefault();
  const addBtn = document.querySelector('.addBtn');
  const slide = document.querySelector('.slide');
  const saveBtn = document.querySelector('.saveBtn');
  const cancelBtn = document.querySelector('.cancelBtn');

  // Pressing the 'add' button.
  addBtn.addEventListener('click', toggleSliderUp, false);
  // Slide up
  function toggleSliderUp() {
    slide.classList.contains('slide-up'); {
      slide.classList.add('slide-up')
    }
  }

  // Pressing the 'save task' button.
  saveBtn.addEventListener('click', toggleSliderDown, false);
  // Slide down
  function toggleSliderDown() {
    slide.classList.contains('slide'); {
      slide.classList.remove('slide-up');
    }
  }
}


function timeToText(time:number){
  // Calculating the days, hours, minutes and seconds left
  const days:string =timeToString(Math.floor(time / (1000 * 60 * 60 * 24)));
 
  const hours = timeToString( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = timeToString(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = timeToString(Math.floor((time % (1000 * 60)) / 1000));

  function timeToString(time:number):string{
    if (time < 10) {
      return '0' + time;
    }
    return `${time}`;
  }

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
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

