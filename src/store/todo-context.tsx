import React, { useState } from "react";

import TodoModel from "../models/todo";

type TodosContextObj = {
    items: TodoModel[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<TodoModel[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new TodoModel(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return (
        <TodoContext.Provider value={contextValue}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
