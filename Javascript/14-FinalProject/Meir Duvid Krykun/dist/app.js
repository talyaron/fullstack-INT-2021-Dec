var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todoItems = [];
function renderTodo(todo) {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    var list = document.querySelector('.js-todo-list');
    var item = document.querySelector("[data-key='" + todo.id + "']");
    if (todo.deleted) {
        item.remove();
        if (todoItems.length === 0)
            list.innerHTML = '';
        return;
    }
    var isChecked = todo.checked ? 'done' : '';
    var node = document.createElement("li");
    node.setAttribute('class', "todo-item " + isChecked);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = "\n    <input id=\"" + todo.id + "\" type=\"checkbox\"/>\n    <label for=\"" + todo.id + "\" class=\"tick js-tick\"></label>\n    <span>" + todo.text + "</span>\n    <button class=\"delete-todo js-delete-todo\">\n    <svg><use href=\"#delete-icon\"></use></svg>\n    </button>\n  ";
    if (item) {
        list.replaceChild(node, item);
    }
    else {
        list.append(node);
    }
}
function addTodo(text) {
    var todo = {
        text: text,
        checked: false,
        id: Date.now()
    };
    todoItems.push(todo);
    renderTodo(todo);
}
function toggleDone(key) {
    var index = todoItems.findIndex(function (item) { return item.id === Number(key); });
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
}
function deleteTodo(key) {
    var index = todoItems.findIndex(function (item) { return item.id === Number(key); });
    var todo = __assign({ deleted: true }, todoItems[index]);
    todoItems = todoItems.filter(function (item) { return item.id !== Number(key); });
    renderTodo(todo);
}
var form = document.querySelector('.js-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.querySelector('.js-todo-input');
    var text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});
var list = document.querySelector('.js-todo-list');
list.addEventListener('click', function (event) {
    if (event.target.classList.contains('js-tick')) {
        var itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
    if (event.target.classList.contains('js-delete-todo')) {
        var itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var ref = localStorage.getItem('todoItems');
    if (ref) {
        todoItems = JSON.parse(ref);
        todoItems.forEach(function (t) {
            renderTodo(t);
        });
    }
});
