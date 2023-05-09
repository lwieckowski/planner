import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { Context } from "../util/context";
import { useContext } from "react";
import { FIXED_CATEGORIES } from "../util/constants";
import {isMobile} from 'react-device-detect';

export function CategorySelect() {
  const { state, dispatch } = useContext(Context);
  const selectableCategories = isMobile
    ? state.categories.slice(0, FIXED_CATEGORIES.length)
    : state.categories;

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
        {selectableCategories.map((category, index) => (
          <MenuItem key={index} value={index}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
