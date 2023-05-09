import { Autocomplete } from "@mui/material";
import { Context } from "../util/context";
import { useContext } from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export function AddTaskCategoryField({ task }) {
  const { state, dispatch } = useContext(Context);

  function addCategory(name) {
    return {
      type: "ADD_CATEGORY",
      payload: name,
    };
  }

  function setTaskCategory(task, category) {
    return {
      type: "SET_TASK_CATEGORY",
      payload: {
        id: task.id,
        category: category,
      },
    };
  }

  return (
    <Box sx={{ width: 200 }}>
      <Autocomplete
        freeSolo
        blurOnSelect
        onChange={(_, value) => {
          !state.categories.includes(value) && dispatch(addCategory(value));
          dispatch(setTaskCategory(task, value));
        }}
        options={state.categories.slice(4)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Add a tag"
            InputProps={{ ...params.InputProps, disableUnderline: true }}
          />
        )}
      ></Autocomplete>
    </Box>
  );
}
