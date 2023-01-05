import "./App.css";
import { Task } from "./components/Task/Task";
import { Count } from "./components/Count/Count";
import { Title } from "./components/Title/Title";
import { TaskInput } from "./components/TaskInput/TaskInput";
import { AddButton } from "./components/AddButton/AddButton";

function App() {
  const todoList = [
    {
      task: "Do homework",
      isDone: false,
    },
    {
      task: "Read book",
      isDone: true,
    },
    {
      task: "Play games",
      isDone: false,
    },
  ];

  const TaskElem = todoList.map((item) => {
    return <Task text={item.task} isDone={item.isDone} />;
  });

  return (
    <div>
      <div class='container'>
        <Title />
        <div class='wrapper'>
          <TaskInput />
          <AddButton />

          <ul class='lists'>{TaskElem}</ul>

          <Count />
        </div>
      </div>
    </div>
  );
}

export default App;
