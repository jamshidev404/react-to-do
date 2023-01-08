import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title/Title";
import Add from "./components/Add/Add";
import ToDoList from "./components/List/List";
import Additions from "./components/Additions/Additions";

function App() {
  const [todo, setTodo] = useState(0);
  const [value, setValue] = useState([])

  return (
    <div className='App'>
      <Title />
      <Add todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setTodo={setTodo} />
      {/* <Additions todo={todo} setTodo={setTodo} /> */}
    </div>
  );
}

export default App;
