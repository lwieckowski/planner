import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function MenuItem({ text, icon}) {
  return (
    <ListItem disablePadding>
      <ListItemButton disableRipple>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
