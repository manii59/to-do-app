import React, { useState } from "react";

import "./Home.css";
import { DateTime } from "./DateTime";

import { ToDoForm } from "../Components/ToDoForm";
import { ToDoList } from "../Components/ToDoList";
import { DarkLightMode } from "../Components/darkmode/DarkLightMode";

export const Home = () => {
  const reactTodo = "toDoApp";

  const getLocalStorage = () => {
    const getRawToDo = localStorage.getItem(reactTodo);

    if (!getRawToDo) return [];

    return JSON.parse(getRawToDo);
  };

  const [task, setTask] = useState(() => getLocalStorage());

  const [complete, setComplete] = useState("");

  const submitHandler = (inputValue) => {
    const { id, content, checked } = inputValue;

    //TO Check if the input field is empty or not
    if (!content) return;

    // To check if the data is already existing or not
    const ifUpdatedList = task.find((curTask) => curTask.content === content);

    if (ifUpdatedList) return;

    setTask((prev) => [...prev, inputValue]);
  };

  //Delete to do
  const handleDeleteTodo = (value) => {
    const updateTask = task.filter((curTask) => curTask.id !== value);
    setTask(updateTask);
  };

  //CHeck to do

  const handleCheckTodo = (content) => {
    const updatedCheck = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedCheck);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  //Local Storage
  localStorage.setItem(reactTodo, JSON.stringify(task));

  return (
    <section className="main-container">
      <header>
        <div className="top-container">
          <h1>To Do App</h1>
          <DateTime />
        </div>
      </header>

      <aside>
        <DarkLightMode />
      </aside>

      <ToDoForm onAddTodo={submitHandler} />

      <section>
        <ul>
          {task.map((curElem) => {
            return (
              <ToDoList
                key={curElem.id}
                data={curElem.content}
                checked={curElem.checked}
                onDeleteTodo={handleDeleteTodo}
                onCheckTodo={handleCheckTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button onClick={() => handleClearAll()}>Clear All</button>
      </section>
    </section>
  );
};
