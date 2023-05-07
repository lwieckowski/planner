import { useContext } from "react";
import { Context } from "../state/reducer";
import { Chip } from "@mui/material";

export function CategoryChip({ task }) {
  const { state, dispatch } = useContext(Context);

  const handleDelete = () => {
    dispatch(deleteTaskCategory(task));
  };

  function deleteTaskCategory(task) {
    return {
      type: "SET_TASK_CATEGORY",
      payload: {
        id: task.id,
        category: null,
      },
    };
  }

  return (
    <Chip
      className="visible-on-hover"
      label={task.category}
      onDelete={handleDelete}
      sx={{ mr: 2 }}
    />
  );
}
