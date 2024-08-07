import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Todo(props) {
  const { _id, title, isCompleted } = props.task;

  return (
    <div className="todo-container">
      <input
        className="checkbox"
        type="checkbox"
        defaultChecked={isCompleted}
        onClick={() => {
          props.toggleTodo(_id, !isCompleted);
        }}
      />
      <span
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      >
        {title}
      </span>
      <button
        className="del"
        onClick={() => {
          props.deleteTodo(_id);
        }}
      >
        <FaTrash />
      </button>
    </div>
  );
}
