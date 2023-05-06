import StarBorderIcon from "@mui/icons-material/StarBorder";
import GradeIcon from "@mui/icons-material/Grade";
import { ListItemIcon, IconButton } from "@mui/material";

export default function ImportantButton({ important, onClick }) {
  return (
    <ListItemIcon className="visible-on-hover" sx={{ minWidth: 44 }}>
      <IconButton onClick={onClick} aria-label="mark important">
        {important ? <GradeIcon /> : <StarBorderIcon />}
      </IconButton>
    </ListItemIcon>
  );
}
