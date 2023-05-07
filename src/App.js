import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useReducer, useEffect } from "react";
import { reducer, initialState, Context } from "./state/reducer";
import { NewTaskField, TaskList, TopBar, CategorySelect } from "./components";

export const DRAWER_WIDTH = 320;

const lightTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      disabled: "primary",
    },
  },
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Box sx={{ width: "100%" }}>
            <TopBar />
            <Box sx={{ mx: "auto", width: 200, mt: 4 }}>
              <CategorySelect />
            </Box>
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
