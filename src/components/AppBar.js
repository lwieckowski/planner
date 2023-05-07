import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { AccountAvatar } from ".";
import { ListAlt } from "@mui/icons-material";

export function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <ListAlt sx={{ mr: 1 }}></ListAlt>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Planner
          </Typography>
          <AccountAvatar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
