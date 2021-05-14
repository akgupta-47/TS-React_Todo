import React from "react";
import TodoModel from "../models/todo";
import TodoItem from "./TodoItem";

const Todo: React.FC<{ items: TodoModel[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => {
                return <TodoItem key={item.id} text={item.text}></TodoItem>;
            })}
        </ul>
    );
};

export default Todo;
