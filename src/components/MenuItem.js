import { ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


export default function MenuItem({ text, icon}) {
  return (
    <ListItem disablePadding sx={
      {
        '& .delete-button': {
          visibility: 'hidden'
        },
        '&:hover .delete-button': {
          visibility: 'visible'
        }
      }
      }>
      <ListItemButton disableRipple>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
        <ListItemIcon className="delete-button">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}
