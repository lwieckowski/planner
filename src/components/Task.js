import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { Context } from "../state/reducer";
import {
  DeleteButton,
  ImportantButton,
  CategoryChip,
  AddTaskCategoryField,
} from ".";

export function Task({ task, key }) {
  const { state, dispatch } = useContext(Context);

  function toggleCompleted(id) {
    return {
      type: "TOGGLE_COMPLETED",
      payload: id,
    };
  }

  function toggleImportant(id) {
    return {
      type: "TOGGLE_IMPORTANT",
      payload: id,
    };
  }

  function deleteTask(id) {
    return {
      type: "DELETE_TASK",
      payload: id,
    };
  }

  return (
    <ListItem
      key={key}
      disablePadding
      sx={{
        "& .visible-on-hover": {
          visibility: "hidden",
        },
        "&:hover .visible-on-hover": {
          visibility: "visible",
        },
      }}
    >
      <ListItemButton disableRipple disableTouchRipple disableFocusRipple>
        <ListItemIcon>
          <Checkbox
            checked={task.completed}
            onClick={() => dispatch(toggleCompleted(task.id))}
          />
        </ListItemIcon>
        <ListItemText primary={task.name} />
        {task.category ? (
          <CategoryChip task={task} />
        ) : (
          <AddTaskCategoryField task={task} />
        )}
        <ImportantButton
          important={task.important}
          onClick={() => dispatch(toggleImportant(task.id))}
        />
        <DeleteButton onClick={() => dispatch(deleteTask(task.id))} />
      </ListItemButton>
    </ListItem>
  );
}
