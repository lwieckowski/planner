import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { Context } from "../state/reducer";
import { useContext } from "react";

export function CategorySelect() {
  const { state, dispatch } = useContext(Context);

  const handleChange = (event) => {
    dispatch(selectCategory(event.target.value));
  };

  function selectCategory(category) {
    return {
      type: "SELECT_CATEGORY",
      payload: category,
    };
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Filter by</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={state.category}
        label="Category"
        onChange={handleChange}
      >
        {state.categories.map((category, index) => (
          <MenuItem key={index} value={index}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
