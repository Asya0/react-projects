import { useState, useEffect, React } from "react";
import Task from "./Task";

import { IoIosAdd } from "react-icons/io";

const TaskList = ({ tasks, onClick, onRemove, onAdd }) => {
  const [isValue, setIsValue] = useState("");
  const [taskList, setTaskList] = useState(tasks);

  //загружаем задачи из localStorage при каждом измненении
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) setTaskList(JSON.parse(savedTasks));
  }, []);

  //сохранение в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, []);

  const handleAddTask = () => {
    if (isValue === "" || isValue.trim() === "") {
      alert("введите название задачи");
      setIsValue("");
      return;
    }
    onAdd(isValue);
    setIsValue("");
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2.5 p-2.5 rounded-sm">
        <input
          type="text"
          value={isValue}
          placeholder="название задачи"
          onChange={(e) => {
            setIsValue(e.target.value);
            console.log(isValue);
          }}
        />
        <IoIosAdd size={40} className="" onClick={handleAddTask} />
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
