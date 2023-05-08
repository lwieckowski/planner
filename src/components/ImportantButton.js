import { StarBorder } from "@mui/icons-material";
import { Grade } from "@mui/icons-material";
import { ListItemIcon, IconButton } from "@mui/material";

export function ImportantButton({ important, onClick }) {
  return (
    <ListItemIcon sx={{ minWidth: 44 }}>
      <IconButton onClick={onClick} aria-label="mark important">
        {important ? <Grade /> : <StarBorder />}
      </IconButton>
    </ListItemIcon>
  );
}
