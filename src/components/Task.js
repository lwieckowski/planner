import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Checkbox } from "@mui/material";
import { useContext } from "react";
import { Context } from "../util/context";
import {
  DeleteButton,
  ImportantButton,
  CategoryChip,
  AddTaskCategoryField,
} from ".";
import { isMobile } from 'react-device-detect';

export function Task({ task, key }) {
  const { dispatch } = useContext(Context);

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
    <ListItem key={key} disablePadding>
      <ListItemButton disableRipple disableTouchRipple disableFocusRipple>
        <ListItemIcon>
          <Checkbox
            checked={task.completed}
            onClick={() => dispatch(toggleCompleted(task.id))}
          />
        </ListItemIcon>
        <ListItemText primary={task.name} />
        {!isMobile &&
          (task.category ? (
            <CategoryChip task={task} />
          ) : (
            <AddTaskCategoryField task={task} />
          ))}
        <ImportantButton
          important={task.important}
          onClick={() => dispatch(toggleImportant(task.id))}
        />
        <DeleteButton onClick={() => dispatch(deleteTask(task.id))} />
      </ListItemButton>
    </ListItem>
  );
}
