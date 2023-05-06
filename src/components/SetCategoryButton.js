import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { ListItemIcon, IconButton } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SetCategoryButton({ categories, setCategory }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setCategory(e.target.innerText);
  };

  return (
    <ListItemIcon className="visible-on-hover" sx={{ minWidth: 44 }}>
      <IconButton
        id="basic-button"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <FormatListBulletedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {categories.slice(2).map((category) => (
          <MenuItem onClick={handleClose}>{category}</MenuItem>
        ))}
      </Menu>
    </ListItemIcon>
  );
}
