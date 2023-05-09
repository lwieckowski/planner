import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useReducer, useEffect } from "react";
import { reducer, Context } from "./util/context";
import { INITIAL_STATE } from "./util/constants";
import { NewTaskField, TaskList, TopBar, CategorySelect } from "./components";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    text: {
      disabled: "primary",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    text: {
      disabled: "primary",
    },
  },
});

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const theme = state.theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    if (state.auth) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box sx={{ display: "flex" }}>
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
        </Container>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
