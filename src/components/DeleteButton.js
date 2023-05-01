import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemIcon, IconButton } from "@mui/material";

export default function DeleteButton({ onClick }) {
    return (
        <ListItemIcon className="visible-on-hover" sx={{ minWidth: 44 }}>
            <IconButton onClick={onClick} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItemIcon>
    )
  }