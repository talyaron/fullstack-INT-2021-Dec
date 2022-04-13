
const tasks: Array < object > = [];

// Add task form
function handleAddTask(event: any) {
  event.preventDefault();

  const elements = event.target.elements;
  const result = {};
  const heading: HTMLInputElement = elements.heading.value;
  const description: HTMLInputElement =  elements.description.value;
  const setReminderDate: HTMLInputElement =  elements.setReminderDate.value;

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name && elements[i].value) {
      result[elements[i].name] = elements[i].value;
    }
  }

  // Create new task
  const taskContainer: any = document.querySelector('.tasksContainer');
  let task = document.createElement('div');
  task.classList.add('task');

  // Append a new task to the tasks container
  task.innerHTML = `<div class='heading'>${heading}</div>
    <div class='description'>${description}</div>
    <div class='setReminderDate'>Scheduled to: ${setReminderDate}</div> 
   <div class='deletesvg'><img src=./images/delete.svg onclick=removeTask(event) ></div>`;
  taskContainer.append(task);

  // Push a new task to the tasks array ("data base").
  tasks.push(result);
  console.log(tasks);

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
function handleOpenForm(event) {
  event.preventDefault();
  const addBtn = document.querySelector('.addBtn');
  const slide = document.querySelector('.slide');
  const saveBtn = document.querySelector('.saveBtn');
  const cancelBtn = document.querySelector('.cancelBtn');

  // Form slides up
  addBtn.addEventListener('click', toggleSliderUp);
  function toggleSliderUp() {
    slide.classList.contains('slide-up'); {
      slide.classList.add('slide-up')
    }
  }

  saveBtn.addEventListener('click', toggleSliderDown);
  // Form slides down
  function toggleSliderDown() {
    slide.classList.contains('slide'); {
      slide.classList.remove('slide-up');
    }
  }

  cancelBtn.addEventListener('click', handleCancelTask);
  // Form submition canceled
  function handleCancelTask() {
    slide.classList.contains('slide'); {
      slide.classList.remove('slide-up');
    }
  }
}

function calculate(){ 
Math.round(Math.random() * (100 - 1) + 1);
console.log(Math.round(Math.random() * (100 - 1) + 1));
}