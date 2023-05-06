import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Context } from "../state/reducer";
import { useContext } from "react";

export function TaskCategoryTitleField() {
  const { state, dispatch } = useContext(Context);

  function changeCategoryName(index, name) {
    return {
      type: "CHANGE_CATEGORY_NAME",
      payload: { index, name },
    };
  }

  function toggleCategoryEditMode() {
    return {
      type: "TOGGLE_CATEGORY_EDIT_MODE",
    };
  }

  return (
    <Box sx={{ ml: 2, mt: 2 }}>
      <TextField
        variant="standard"
        disabled={state.category < 3}
        onChange={(e) =>
          dispatch(changeCategoryName(state.category, e.target.value))
        }
        value={state.categories[state.category]}
        InputProps={{
          disableUnderline: true,
          style: {
            fontSize: 28,
          },
        }}
        inputRef={(input) => state.categoryInEditMode && input && input.focus()}
        onFocus={(e) => e.target.select()}
        onBlur={() => dispatch(toggleCategoryEditMode())}
      ></TextField>
    </Box>
  );
}
