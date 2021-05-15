import React, { useContext } from "react";
import { TodoContext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todo: React.FC = () => {
    const todoCtx = useContext(TodoContext);
    return (
        <ul className={classes.todos}>
            {todoCtx.items.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
                    ></TodoItem>
                );
            })}
        </ul>
    );
};

export default Todo;
