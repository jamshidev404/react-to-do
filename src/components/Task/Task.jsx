import { DeleteIcon, MarkIcon } from "../../icons/icon";
import "./Task.css";

export const Task = ({text, isDone}) => {
    const textClass = isDone ? "text done" : "text"
  return (
    <li class='list' key={text.task}>
      <span class={textClass}>{text}</span>
      <div class='icons'>
        <DeleteIcon />
        <MarkIcon />
      </div>
    </li>
  );
};
