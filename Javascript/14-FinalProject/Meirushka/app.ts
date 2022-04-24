const root = document.querySelector('.root')

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

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: (SelectedItems: Todo) => void;
   
}

const deleteHandler = (e: ChangeEvent<HTMLButtonElement>) => {
   
}


export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return todos.length > 1 ? ( //if the value is greater than 3 then, the msg below will appear 
        (
            <ul>
                {todos.map((todo) => (
                    <li className="parent">
                        <ToDoListItems todo={todo} toggleTodo={toggleTodo}> </ToDoListItems>
                        <button className="DeleteTodo" onClick={() =>{console.log("clicked")}} >X</button>    
                    </li>
                ))}

            </ul>
        )
   ) : (
    <h2>Please add some Todos.</h2>
  );
}






const initialTodos: Array<Todo> = [
  { text: "walk the dog!", complete: false },
  { text: " learn how to creat app with typescript", complete: false }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todoItems => {
      if (todoItems === selectedTodo) {
        return {
          ...todoItems,
          complete: !todoItems.complete
        };
      }
      return todoItems;
    });
    setTodos(newTodos);
  };


  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo, complete: false }])
  }


  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>



  );
}

export default App;


  
