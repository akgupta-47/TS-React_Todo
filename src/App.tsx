import "./App.css";
import Todo from "./components/Todo";
import TodoModel from "./models/todo";

function App() {
    const todoItems = [
        new TodoModel("Learn React"),
        new TodoModel("Learn TypeScript"),
    ];
    return (
        <div>
            <Todo items={todoItems} />
        </div>
    );
}

export default App;
