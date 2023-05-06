import AddIcon from "@mui/icons-material/Add";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Context } from "../state/reducer";
import { useContext } from "react";

export function NewTaskField() {
  const { state, dispatch } = useContext(Context);

  function addTask(name, category) {
    return {
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        name,
        important: false,
        completed: false,
        category: category,
      },
    };
  }

  function changeNewTaskName(name) {
    return {
      type: "CHANGE_NEW_TASK_NAME",
      payload: name,
    };
  }

  function handleNewTaskKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(changeNewTaskName(""));
      dispatch(addTask(state.newTaskName, state.categories[state.category]));
    }
  }

  function handleNewTaskChange(e) {
    dispatch(changeNewTaskName(e.target.value));
  }

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginBottom: "20px",
      }}
    >
      <IconButton disableRipple sx={{ p: "10px 20px" }}>
        <AddIcon fontSize="medium" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add a task"
        value={state.newTaskName}
        onKeyDown={handleNewTaskKeyDown}
        onChange={handleNewTaskChange}
      />
    </Paper>
  );
}
