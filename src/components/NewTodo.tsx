import React, { useRef } from "react";

const NewTodo = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
        // there are 2 versions in typescript
        // const enteredText = todoTextInputRef.current!.value; // this is used when we know ref has some value definitely
        // const enteredText = todoTextInputRef.current?.value; // this when we don't know ref has value or not, in not case it returns null
        // above one is a union type of string | undefined

        if (enteredText.trim().length === 0) {
            // throw error
            return;
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
