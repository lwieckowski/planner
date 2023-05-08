import { Delete } from "@mui/icons-material";
import { ListItemIcon, IconButton } from "@mui/material";

export function DeleteButton({ onClick }) {
  return (
    <ListItemIcon sx={{ minWidth: 44 }}>
      <IconButton onClick={onClick} aria-label="delete">
        <Delete />
      </IconButton>
    </ListItemIcon>
  );
}
