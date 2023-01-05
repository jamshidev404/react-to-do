import { Clear } from "../Clear/Clear";
import { Counter } from "../Counter/Counter";
import "./Count.css";


export const Count = () => {
  return (
    <div class='count'>
      <Clear />
      <Counter />
    </div>
  );
};
