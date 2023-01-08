import React from "react";
import { DeleteIcon, MarkIcon } from "../../icons/icon";
import styles from "./List.module.css";

function ToDoList({ todo, setTodo }) {
  function deleteTodo(item) {
    let removeTodo = [...todo].filter((el) => el.title !== item);
    setTodo(removeTodo);
  }

  function isDone(item) {
    let hasDone = [...todo].filter((el) => {
      if (el.isDone == item.isDone) {
        el.isDone = !item.isDone;
      }
      return el;
    });
    setTodo(hasDone);
  }

  return (
    <div className={styles.wrapper}>
      {todo.map((item) => (
        <div className={styles.item} key={item.title}>
          <div className={item.isDone ? styles.done : ""}>{item.title}</div>
          <div className={styles.icons}>
          <div onClick={() => deleteTodo(item.title)}>
            <DeleteIcon />
          </div>
          <div onClick={() => isDone(item.isDone)}>
            <MarkIcon />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ToDoList;
