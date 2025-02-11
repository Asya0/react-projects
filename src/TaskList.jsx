import { useState, React } from "react";
import Task from "./Task";

import { IoIosAdd } from "react-icons/io";

const TaskList = ({ tasks, onClick, onRemove, onAdd }) => {
  return (
    <>
      <div className="">
        <input type="text" value={tasks.title} placeholder="название задачи" />
        <IoIosAdd size={40} className="add-task" onClick={() => onAdd(title)} />
      </div>

      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isCompleted={task.isCompleted}
          onClick={onClick}
          onRemove={onRemove}
          onAdd={onAdd}
        />
      ))}
    </>
  );
};
export default TaskList;
