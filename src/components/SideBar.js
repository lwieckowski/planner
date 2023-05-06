import { Drawer } from "@mui/material";
import { Context } from "../state/reducer";
import { useContext } from "react";
import { TaskCategoriesPanel } from "./TaskCategoriesPanel";
import { UserPanel } from "./UserPanel";
import { DRAWER_WIDTH } from "../App";

export function SideBar() {
  const { state, dispatch } = useContext(Context);
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <UserPanel />
      <TaskCategoriesPanel dispatch={dispatch} state={state} />
    </Drawer>
  );
}
