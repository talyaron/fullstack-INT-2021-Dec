// selectors
const root = document.querySelector('.root');
// const note = document.querySelector('.note')
// Functions

function handleNote(ev: any) {
  ev.preventDefault();
  const elements = ev.target.elements;
  const result = {};
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].type === "text") {
      result[elements[i].name] = elements[i].value;
      }   else if (elements[i].name && elements[i].value) {
      
      result[elements[i].name] = elements[i].value;
    } 
  }
    
  
  console.log(result);
  root.innerHTML += `<div>${result.note}</div>`
}  

let todosArr: Array<any> = []

const todoList:HTMLElement = document.querySelector('#todolist');
const noOfTodos:HTMLElement = document.querySelector('#noOfTodos');

const createTodo = (arr) => {
  
  todoList.innerHTML = "";
  
  arr.forEach((todo, id) => {
    let list = document.createElement('li');
    let spanWithValue = document.createElement('span');
    let spanWithBtn = document.createElement('button')
    spanWithValue.innerText = todo.value;
    spanWithBtn.innerText = "X";
    spanWithBtn.style.color = 'red';
    
    
  
  
    spanWithBtn.addEventlistener("click", () => {
      deleteTodo(id);
    });
    
    list.appendChild(spanWithValue);
    list.appendChild(spanWithBtn);
  
    todoList.appendChild(list);
    
    
  }); 
  
  #noOfTodos.innerText = todosArr.length;
  
};

cosnt deleteTodo = (index) =>{
  todosArr.splice(index, 1);
  createTodo(todosArr);
};

window.addEventListener ("load", () => {
  createTodo(todosArr)
});
