const tasks: Array < task > = [];

// Interface
interface task {
  heading: HTMLInputElement,
    description: HTMLInputElement,
    setReminderDate: HTMLInputElement
}

// Add task form
function handleAddTask(event: any) {
  event.preventDefault();

  const elements = event.target.elements;
  const result: task = {
    heading: elements.heading.value,
    description: elements.description.value,
    setReminderDate: elements.setReminderDate.value
  };

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].name && elements[i].value) {
      result[elements[i].name] = elements[i].value;
    }
  }
  // Create new task
  const taskContainer: any = document.querySelector('.tasksContainer');
  let task = document.createElement('div');
  task.classList.add('task');
  task.setAttribute('id', `${generateid()}`);
  let choosenId = task.id
  timerStarter(result.heading, result.setReminderDate, choosenId);
  // Append a new task to the tasks container
  task.innerHTML = `<div class='heading'>${result.heading}</div>
    <div class='description'>${result.description}</div>
    <div class='setReminderDate'>${result.setReminderDate}</div>
    <div class='time'></div>
    <div class='deletesvg'><img src=./images/delete.svg onclick=removeTask(event) ></div>`;

  taskContainer.append(task);
  tasks.push(result);
  event.target.reset()
}

// Sort tasks by date
function handleSorting(event: any) {
  event.preventDefault();
  const sortByDate = tasks.sort((a: any, b: any) => {
    return new Date(a.setReminderDate).getTime() - new Date(b.setReminderDate).getTime();
  });
  console.log(sortByDate);
}

// Remove tasks
function removeTask(event) {
  event.preventDefault();
  const button = event.target;
  const task = button.parentNode;
  const array = task.parentNode;
  const div = array.parentNode

  div.removeChild(array);
}

// Add new task (using 'handleTask' form)
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

// Time starter function
function timerStarter(heading, setReminderDate, choosenId) {

  const newReminderDate: any = setReminderDate;
  const countDownDate: number = new Date(newReminderDate).getTime();
  const runTimer = setInterval(showTime, 1000);

  function showTime() {
    const now: number = new Date().getTime();
    const timeleft = countDownDate - now;
    const textTime = timeToText(timeleft);
    // Result is output to the specific element
    let time: any = document.getElementById(choosenId)
    time.children[3].innerHTML = textTime
    // Display the message when countdown is over
    if (timeleft <= 0) {
      clearInterval(runTimer);
      alert(`'it's time to ${heading} `)
    }
  }
}

// Calculating the days, hours, minutes and seconds left
function timeToText(time: number) {
  if (time >= 0) {
    const days = timeToString(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = timeToString(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = timeToString(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = timeToString(Math.floor((time % (1000 * 60)) / 1000));
    return `${days}d - ${hours}h - ${minutes}m - ${seconds}s`;
  }
  return '0d 0h 0m 0s';
}

// time to string function
function timeToString(time: number): string {
  if (time < 10) {
    return '0' + time;
  }
  return `${time}`;
}

//set uniqid to the array's objects
function generateid() {
  let id = () => {
    return Math.floor((1 + Math.random()) * 10000)
      .toString()

  }
  return id();
}

function a(a: any) {
  throw new Error("Function not implemented.");
}
