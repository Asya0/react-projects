import { useState, React } from "react";
import Task from "./Task";

import { IoIosAdd } from "react-icons/io";

const TaskList = ({ tasks, onClick, onRemove, onAdd }) => {
  const [isValue, setIsValue] = useState("");

  return (
    <>
      <div className="">
        <input
          type="text"
          value={tasks.title}
          placeholder="название задачи"
          onChange={(e) => {
            setIsValue(e.target.value);
            console.log(isValue);
          }}
        />
        {/* value={isValue} */}
        <IoIosAdd
          size={40}
          className="add-task"
          onClick={() => onAdd(isValue)}
        />
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
