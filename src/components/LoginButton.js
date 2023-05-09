import { useContext, useState } from "react";
import { Context } from "../util/context";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

export function LoginButton() {
  const { state, dispatch } = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    if (state.tasks.length > 0) {
      setOpen(true);
    } else {
      proceedWithLogin();
    }
  };

  const proceedWithLogin = () => {
    dispatch({ type: "LOAD_STORED_STATE" });
    dispatch({ type: "LOGIN" });
    setOpen(false);
  };

  const cancelLogin = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tasks stored in your account will be loaded. Any changes will be
            lost. Proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelLogin} autoFocus>
            NO
          </Button>
          <Button onClick={proceedWithLogin}>YES</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
