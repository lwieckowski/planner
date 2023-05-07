import { Delete } from "@mui/icons-material";
import { ListItemIcon, IconButton } from "@mui/material";

export function DeleteButton({ onClick }) {
  return (
    <ListItemIcon className="visible-on-hover" sx={{ minWidth: 44 }}>
      <IconButton onClick={onClick} aria-label="delete">
        <Delete />
      </IconButton>
    </ListItemIcon>
  );
}
