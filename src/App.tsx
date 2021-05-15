import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./store/todo-context";

function App() {
    // const [todos, setTodo] = useState([]); this is an never array, it means always empty
    return (
        <TodoContextProvider>
            <NewTodo />
            <Todo />
        </TodoContextProvider>
    );
}

export default App;
