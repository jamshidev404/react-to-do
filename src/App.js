import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title/Title";
import Add from "./components/Add/Add";
import ToDoList from "./components/List/List";
import Additions from "./components/Additions/Additions";

function App() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState([]);
  const [process, setProcess] = useState(0);
  const [completed, setCompleted] = useState(0);

  // let processLength = [...todo].filter((el) => el.isDone === false).length + 1;
  // setProcess(processLength);

  return (
    <div className="App">
      <Title />
      <Add
        todo={todo}
        setTodo={setTodo}
        value={value}
        setValue={setValue}
        setProcess={setProcess}
      />
      <ToDoList
        todo={todo}
        setTodo={setTodo}
        setProcess={setProcess}
        setCompleted={setCompleted}
      />
      <Additions
        todo={todo}
        setTodo={setTodo}
        process={process}
        completed={completed}
        setProcess={setProcess}
        setCompleted={setCompleted}
      />
    </div>
  );
}

export default App;
