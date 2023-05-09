import { useContext } from "react";
import { Context } from "../util/context";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { AccountAvatar, LoginButton} from ".";
import { ListAlt } from "@mui/icons-material";

export function TopBar() {
  const { state, dispatch } = useContext(Context);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <ListAlt sx={{ mr: 1 }}></ListAlt>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task tracker
          </Typography>
          {state.auth ? <AccountAvatar /> : <LoginButton />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
