import { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

let idAcc = 0;
const generateId = () => {
  return (idAcc += 1);
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state,
    };
    tasks.map((task) => {
      console.log("task", task);
    });
    setTasks((existingtasks) => {
      return [...existingtasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((item) => {
        if (item.id === id) {
          return { ...item, title, state };
        } else {
          return item;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask}
        />
        <TaskList
          title="Completa"
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) => t.state === "Completa")}
          onTaskUpdate={updateTask}
        />
      </div>
    </div>
  );
}
