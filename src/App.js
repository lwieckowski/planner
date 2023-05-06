import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import {
  Stack,
  Avatar,
  Divider,
  Drawer,
  List,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  InputBase,
  TextField,
} from "@mui/material";
import "./App.css";
import { Box } from "@mui/system";
import Item from "./components/Item";
import DeleteButton from "./components/DeleteButton";
import ImportantButton from "./components/ImportantButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useReducer } from "react";
import SetCategoryButton from "./components/SetCategoryButton";
import { reducer, initialState, Context } from "./state/reducer";

const DRAWER_WIDTH = 320;

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

  function handleNewTaskKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(changeNewTaskName(""));
      dispatch(addTask(state.newTaskName, state.categories[state.category]));
    }
  }

  function handleNewTaskChange(e) {
    dispatch(changeNewTaskName(e.target.value));
  }

  function changeNewTaskName(name) {
    return {
      type: "CHANGE_NEW_TASK_NAME",
      payload: name,
    };
  }

  function addTask(name, category) {
    return {
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        name,
        important: false,
        completed: false,
        category: category,
      },
    };
  }

  function deleteTask(id) {
    return {
      type: "DELETE_TASK",
      payload: id,
    };
  }

  function toggleImportant(id) {
    return {
      type: "TOGGLE_IMPORTANT",
      payload: id,
    };
  }

  function toggleCompleted(id) {
    return {
      type: "TOGGLE_COMPLETED",
      payload: id,
    };
  }

  function addCategory() {
    return {
      type: "ADD_CATEGORY",
      payload: "Untitled category",
    };
  }

  function selectCategory(category) {
    return {
      type: "SELECT_CATEGORY",
      payload: category,
    };
  }

  function changeCategoryName(index, name) {
    return {
      type: "CHANGE_CATEGORY_NAME",
      payload: { index, name },
    };
  }

  function toggleCategoryEditMode() {
    return {
      type: "TOGGLE_CATEGORY_EDIT_MODE",
    };
  }

  function deleteCategory(index) {
    return {
      type: "DELETE_CATEGORY",
      payload: index,
    };
  }

  function setTaskCategory(id, category) {
    return {
      type: "SET_TASK_CATEGORY",
      payload: { id, category },
    };
  }

  return (
    <Context.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={lightTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ margin: 2, width: 48, height: 48, bgcolor: "orange" }}
              >
                LW
              </Avatar>
              <Box>
                <Typography>Lukasz Wieckowski</Typography>
                <Typography variant="caption">
                  luukka.wieckowski@gmail.com
                </Typography>
              </Box>
            </Box>
            <Box sx={{ overflow: "auto" }}>
              <List>
                <Item
                  key={0}
                  text="All"
                  icon={<HomeIcon />}
                  onClick={() => dispatch(selectCategory(0))}
                ></Item>
                <Item
                  key={1}
                  text="Important"
                  icon={<StarBorderIcon />}
                  onClick={() => dispatch(selectCategory(1))}
                ></Item>
              </List>
              <Divider />
              <List>
                <Item
                  key={2}
                  text="Add category"
                  icon={<AddIcon />}
                  onClick={() => dispatch(addCategory())}
                ></Item>
                {state.categories.map(
                  (category, index) =>
                    index >= 2 && (
                      <Item
                        key={category+index}
                        text={category}
                        icon={<FormatListBulletedIcon />}
                        buttons={[
                          <DeleteButton
                            key={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(deleteCategory(index));
                            }}
                          />,
                        ]}
                        onClick={() => dispatch(selectCategory(index))}
                      />
                    )
                )}
              </List>
            </Box>
          </Drawer>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ ml: 2, mt: 2 }}>
              <TextField
                variant="standard"
                disabled={state.category < 2}
                onChange={(e) =>
                  dispatch(changeCategoryName(state.category, e.target.value))
                }
                value={state.categories[state.category]}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    fontSize: 28,
                  },
                }}
                inputRef={(input) =>
                  state.categoryInEditMode && input && input.focus()
                }
                onFocus={(e) => e.target.select()}
                onBlur={() => dispatch(toggleCategoryEditMode())}
              ></TextField>
            </Box>

            <Stack spacing={0} margin={2}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: "20px",
                }}
              >
                <IconButton disableRipple sx={{ p: "10px 20px" }}>
                  <AddIcon fontSize="medium" />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Add a task"
                  value={state.newTaskName}
                  onKeyDown={handleNewTaskKeyDown}
                  onChange={handleNewTaskChange}
                />
              </Paper>
              {state.tasks
                .filter((task) => {
                  if (state.category == 0) return true;
                  if (state.category == 1) return task.important;
                  return task.category == state.categories[state.category];
                })
                .map((task) => (
                  <Item
                    key={task.name+task.id}
                    text={task.name}
                    icon={
                      <Checkbox
                        checked={task.completed}
                        onClick={() => dispatch(toggleCompleted(task.id))}
                      />
                    }
                    buttons={[
                      <SetCategoryButton
                        key={0}
                        categories={state.categories}
                        setCategory={(category) =>
                          dispatch(setTaskCategory(task.id, category))
                        }
                      />,
                      <ImportantButton
                        key={1}
                        important={task.important}
                        onClick={() => dispatch(toggleImportant(task.id))}
                      />,
                      <DeleteButton
                        key={2}
                        onClick={() => dispatch(deleteTask(task.id))}
                      />,
                    ]}
                  />
                ))}
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
