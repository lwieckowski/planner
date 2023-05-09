import { useContext } from "react";
import { Context } from "../util/reducer";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { AccountAvatar } from ".";
import { ListAlt } from "@mui/icons-material";

export function TopBar() {
  const { state, dispatch } = useContext(Context);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <ListAlt sx={{ mr: 1 }}></ListAlt>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Planner
          </Typography>
          {state.auth ? (
            <AccountAvatar />
          ) : (
            <Button
              color="inherit"
              onClick={() => dispatch({ type: "TOGGLE_AUTH" })}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
