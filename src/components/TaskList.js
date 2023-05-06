import { Checkbox } from "@mui/material";
import Item from "./Item";
import DeleteButton from "./DeleteButton";
import ImportantButton from "./ImportantButton";
import SetCategoryButton from "./SetCategoryButton";
import { Context } from "../state/reducer";
import { useContext } from "react";

export function TaskList() {
  const { state, dispatch } = useContext(Context);

  function deleteTask(id) {
    return {
      type: "DELETE_TASK",
      payload: id,
    };
  }

  function toggleImportant(id) {
    return {
      type: "TOGGLE_IMPORTANT",
      payload: id,
    };
  }

  function toggleCompleted(id) {
    return {
      type: "TOGGLE_COMPLETED",
      payload: id,
    };
  }

  function setTaskCategory(id, category) {
    return {
      type: "SET_TASK_CATEGORY",
      payload: { id, category },
    };
  }

  return state.tasks
    .filter((task) => {
      if (state.category == 0) return true;
      if (state.category == 1) return task.important;
      return task.category == state.categories[state.category];
    })
    .map((task) => (
      <Item
        key={task.name + task.id}
        text={task.name}
        icon={
          <Checkbox
            checked={task.completed}
            onClick={() => dispatch(toggleCompleted(task.id))}
          />
        }
        buttons={[
          <SetCategoryButton
            key={0}
            categories={state.categories}
            setCategory={(category) =>
              dispatch(setTaskCategory(task.id, category))
            }
          />,
          <ImportantButton
            key={1}
            important={task.important}
            onClick={() => dispatch(toggleImportant(task.id))}
          />,
          <DeleteButton
            key={2}
            onClick={() => dispatch(deleteTask(task.id))}
          />,
        ]}
      />
    ));
}
