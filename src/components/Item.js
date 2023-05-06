import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function Item({ text, icon, buttons, onClick }) {
  return (
    <ListItem
      disablePadding
      sx={{
        "& .visible-on-hover": {
          visibility: "hidden",
        },
        "&:hover .visible-on-hover": {
          visibility: "visible",
        },
      }}
    >
      <ListItemButton disableRipple onClick={onClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {buttons}
      </ListItemButton>
    </ListItem>
  );
}
