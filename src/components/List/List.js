import React from "react";
import { DeleteIcon, MarkIcon } from "../../icons/icon";
import styles from "./List.module.css";

function ToDoList({ todo, setTodo, setProcess, setCompleted }) {
  function deleteTodo(item) {
    let removeTodo = [...todo].filter((el) => el.title !== item);
    let processLength = [...removeTodo].filter(
      (el) => el.isDone === false,
    ).length;
    setTodo(removeTodo);
    setCompleted(todo.length - processLength);
    setProcess(processLength);
  }

  function isDone(item, ind) {
    let hasDone = [...todo].filter((el, i) => {
      if (i == ind) {
        el.isDone = !item;
      }
      return el;
    });
    let processLength = [...hasDone].filter((el) => el.isDone === false).length;
    setCompleted(todo.length - processLength);
    setProcess(processLength);
    setTodo(hasDone);
  }

  return (
    <div className={styles.wrapper}>
      {todo.map((item, ind) => (
        <div className={styles.item} key={ind}>
          <div className={item.isDone ? styles.done : styles.undone}>
            {item.title}
          </div>
          <div className={styles.icons}>
            <div onClick={() => deleteTodo(item.title)}>
              <DeleteIcon />
            </div>
            <div onClick={() => isDone(item.isDone, ind)}>
              <MarkIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
