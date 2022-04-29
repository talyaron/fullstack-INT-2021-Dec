// selectors
var root = document.querySelector('.root');
// const note = document.querySelector('.note')
// Functions
function handleNote(ev) {
    ev.preventDefault();
    var elements = ev.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "text") {
            result[elements[i].name] = elements[i].value;
        }
        else if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.log(result);
    root.innerHTML += "<div>" + result.note + "</div>";
}
var todosArr = [];
var todoList = document.querySelector('#todolist');
var noOfTodos = document.querySelector('#noOfTodos');
var createTodo = function (arr) {
    todoList.innerHTML = "";
    arr.forEach(function (todo, id) {
        var list = document.createElement('li');
        var spanWithValue = document.createElement('span');
        var spanWithBtn = document.createElement('button');
        spanWithValue.innerText = todo.value;
        spanWithBtn.innerText = "X";
        spanWithBtn.style.color = 'red';
        spanWithBtn.addEventlistener("click", function () {
            deleteTodo(id);
        });
        list.appendChild(spanWithValue);
        list.appendChild(spanWithBtn);
        todoList.appendChild(list);
    });
    #noOfTodos.innerText = todosArr.length;
};
cosnt;
deleteTodo = function (index) {
    todosArr.splice(index, 1);
    createTodo(todosArr);
};
window.addEventListener("load", function () {
    createTodo(todosArr);
});
