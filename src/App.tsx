import React, { useState } from "react";
import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";
import TodoModel from "./models/todo";

function App() {
    // const [todos, setTodo] = useState([]); this is an never array, it means always empty
    const [todos, setTodo] = useState<TodoModel[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new TodoModel(todoText);

        setTodo((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodo((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todo items={todos} onRemoveTodo={removeTodoHandler} />
        </div>
    );
}

export default App;
