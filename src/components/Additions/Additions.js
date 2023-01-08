import React from "react";
import styles from "./Addition.module.css";

function Additions({ todo, setTodo }) {
  console.log(todo);

  function ClearAll() {}

  function allTasks() {
    const allTask = todo.length;
    setTodo(allTask);
  }

  function Process() {}

  function Completed() {}

  return (
    <div>
      <div className={styles.additions}>
        <button className={styles.clear}>Clear all</button>
        <div className={styles.all}>All tasks: {todo}</div>
        <div className={styles.processing}>Process: 0</div>
        <div className={styles.compleated}>Completed: 0</div>
      </div>
    </div>
  );
}

export default Additions;
