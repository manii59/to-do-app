import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { TimeStamp } from "../util/TimeStamp";

import "./ToDoList.css";

export const ToDoList = ({ data, onDeleteTodo, checked, onCheckTodo }) => {
  return (
    <li className="list-input">
      <div className="completed-task">
        <p className={!checked ? "check-visible" : ""}>Completed</p>
      </div>
      <div className="show-input-btns">
        <div className="show-text">{data}</div>

        <div>
          <button className="check-btn" onClick={() => onCheckTodo(data)}>
            <FaCheck />
          </button>
        </div>
        <div>
          <button className="dlt-btn" onClick={() => onDeleteTodo(data)}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
      <div>
        <TimeStamp />
      </div>
    </li>
  );
};
