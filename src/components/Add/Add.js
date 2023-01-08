import React, { useState } from "react";
import styles from "./Add.module.css";

function Add({ todo, setTodo }) {

  


  function saveTodo() {
    setTodo([
      ...todo,
      {
        title: value,
        isDone: false,
      },
    ]);
  }

  return (
    <div className={styles.form}>
      <input
       className={styles.input}
        placeholder='Enter a task'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}  className={styles.btn}>Add</button>
    </div>
  );
}

export default Add;
