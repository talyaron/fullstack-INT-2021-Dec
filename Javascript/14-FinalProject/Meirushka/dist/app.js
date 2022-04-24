"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.TodoList = void 0;
var root = document.querySelector('.root');
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
var deleteHandler = function (e) {
};
exports.TodoList = function (_a) {
    var todos = _a.todos, toggleTodo = _a.toggleTodo;
    return todos.length > 1 ? { todos: todos, : .map(function (todo) { return className = "parent" >
            todo; }, { todo: todo }, toggleTodo = { toggleTodo: toggleTodo } > /ToDoListItems>
            < button, className = "DeleteTodo", onClick = {}()) } : ;
};
{
    console.log("clicked");
}
 > X < /button>    
    < /li>;
/ul>;
Please;
add;
some;
Todos. < /h2>;
;
var initialTodos = [
    { text: "walk the dog!", complete: false },
    { text: " learn how to creat app with typescript", complete: false }
];
function App() {
    var _a = useState(initialTodos), todos = _a[0], setTodos = _a[1];
    var toggleTodo = function (selectedTodo) {
        var newTodos = todos.map(function (todoItems) {
            if (todoItems === selectedTodo) {
                return __assign(__assign({}, todoItems), { complete: !todoItems.complete });
            }
            return todoItems;
        });
        setTodos(newTodos);
    };
    var addTodo = function (newTodo) {
        newTodo.trim() !== "" && setTodos(__spreadArrays(todos, [{ text: newTodo, complete: false }]));
    };
    return todos = { todos: todos };
    toggleTodo = { toggleTodo: toggleTodo } /  >
        addTodo;
    {
        addTodo;
    }
    />
        < /React.Fragment>;
    ;
}
exports["default"] = App;
