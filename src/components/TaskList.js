import { Task } from "./Task";

import { Context } from "../state/reducer";
import { useContext } from "react";

export function TaskList() {
  const { state } = useContext(Context);

  return state.tasks
    .filter((task) => {
      if (state.category === 0) return true;
      if (state.category === 1) return task.important;
      if (state.category === 2) return task.completed;
      if (state.category === 3) return !task.completed;
      return task.category === state.categories[state.category];
    })
    .map((task) => <Task key={task.id} task={task} />);
}
