import React from "react";
import styles from "./Addition.module.css";

function Additions({
  todo,
  process,
  completed,
  setTodo,
  setCompleted,
  setProcess,
}) {
  return (
    <div>
      <div className={styles.additions}>
        <button
          className={styles.clear}
          onClick={() => {
            setTodo([]);
            setProcess(0);
            setCompleted(0);
          }}
        >
          Clear all
        </button>
        <div className={styles.all}>All tasks: {todo.length}</div>
        <div className={styles.processing}>Process: {process}</div>
        <div className={styles.compleated}>Completed: {completed}</div>
      </div>
    </div>
  );
}

export default Additions;
