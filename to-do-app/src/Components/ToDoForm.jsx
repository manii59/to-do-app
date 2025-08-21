import React, { useState } from "react";

import "./ToDoForm.css";

export const ToDoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const inputHandler = (value) => {
    setInput({
      id: value,
      content: value,
      checked: false,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!input) return;
    onAddTodo(input);
    setInput({ id: "", content: "", checked: false });
  };

  return (
    <section>
      <form className="input-container" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            className="input-text"
            placeholder="Enter the task you want to store"
            onChange={(event) => inputHandler(event.target.value)}
            value={input.content}
          />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </section>
  );
};
