import React from "react";
import { CiTrash } from "react-icons/ci";

const Task = ({ id, title, isCompleted, onClick, onRemove }) => {
  return (
    <>
      <div className="task-block">
        {id}
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onClick(id)}
        />
        {title}
        {/* <button onClick={() => onRemove(id)}>удалить </button> */}
        <CiTrash
          size={30}
          onClick={() => onRemove(id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
};
export default Task;
