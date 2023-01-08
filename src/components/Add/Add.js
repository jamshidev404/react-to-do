import React, { useState } from "react";
import styles from "./Add.module.css";

function Add({ todo, setTodo, value, setValue, setProcess }) {
  function saveTodo() {
    setValue("");
    let processLength =
      [...todo].filter((el) => el.isDone === false).length + 1;
    setProcess(processLength);
    return setTodo([
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
        placeholder="Enter a task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo} className={styles.btn}>
        Add
      </button>
    </div>
  );
}

export default Add;
