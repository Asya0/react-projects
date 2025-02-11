import { useState, React } from "react";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: " work ", isCompleted: true },
    { id: 2, title: " покурить ", isCompleted: false },
    { id: 3, title: " что-то типа обэда ", isCompleted: true },
    { id: 4, title: " чтение ", isCompleted: false },
    { id: 5, title: " учеба ", isCompleted: false },
  ]);

  //TODO находить нужнуую задачу и менять ее isChecked, по id
  const checkTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };
  const removeTask = (id) => {
    setTasks((prevTasks) => {
      const filteredTasks = prevTasks.filter((t) => t.id !== id);
      return filteredTasks;
    });
  };

  const addTask = (title) => {
    setTasks((prevTasks) => {
      const newTask = { id: prevTasks.length + 1, title, isCompleted: false };
      return [...prevTasks, newTask];
    });
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="text-3xl font-bold underline hover:text-sky-300">
            To do:
          </h1>
        </div>
        <div className="main">
          <TaskList
            tasks={tasks}
            onClick={checkTask}
            onRemove={removeTask}
            onAdd={addTask}
          />
        </div>
      </div>
    </>
  );
};
export default App;
