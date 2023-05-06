import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useReducer } from "react";
import { reducer, initialState, Context } from "./state/reducer";
import { NewTaskField } from "./components/NewTaskField";
import { TaskCategoryTitleField } from "./components/TaskCategoryTitleField";
import { TaskList } from "./components/TaskList";
import { SideBar } from "./components/SideBar";

export const DRAWER_WIDTH = 320;

const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      disabled: "primary",
    },
  },
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  localStorage.setItem("state", JSON.stringify(state));

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <SideBar />
          <Box sx={{ width: "100%" }}>
            <TaskCategoryTitleField />
            <Stack spacing={0} margin={2}>
              <NewTaskField />
              <TaskList />
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
