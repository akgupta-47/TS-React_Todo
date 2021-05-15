import React from "react";
import TodoModel from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todo.module.css";

const Todo: React.FC<{
    items: TodoModel[];
    onRemoveTodo: (id: string) => void;
}> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => {
                return (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                    ></TodoItem>
                );
            })}
        </ul>
    );
};

export default Todo;
