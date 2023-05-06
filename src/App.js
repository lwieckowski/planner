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
  Toolbar,
  TextField
} from "@mui/material";
import "./App.css";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Item from "./components/Item";
import DeleteButton from "./components/DeleteButton";
import ImportantButton from "./components/ImportantButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { createContext, useReducer } from "react";

const DRAWER_WIDTH = 320;



const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      disabled: "primary"
    }
  },
});

const initialState = {
  categories: ["All", "Important", "Groceries", "Bills", "Work", "Personal"],
  category: 0,
  categoryInEditMode: false,
  newTaskName: "",
  tasks: [
    {
      "id": 1,
      "name": "Buy milk",
      "important": false,
      "completed": false,
      "category": "Groceries"
    },
    {
      "id": 2,
      "name": "Buy bread",
      "important": false,
      "completed": false,
      "category": "Groceries"
    },
    {
      "id": 3,
      "name": "Pay electricity bill",
      "important": false,
      "completed": false,
      "category": "Bills"
    },
    {
      "id": 4,
      "name": "Pay rent",
      "important": false,
      "completed": false,
      "category": "Bills"
    },
    {
      "id": 5,
      "name": "Finish project",
      "important": false,
      "completed": false,
      "category": "Work"
    },
    {
      "id": 6,
      "name": "Prepare presentation",
      "important": false,
      "completed": false,
      "category": "Work"
    },
    {
      "id": 7,
      "name": "Go for a run",
      "important": false,
      "completed": false,
      "category": "Personal"
    },
    {
      "id": 8,
      "name": "Call mom",
      "important": false,
      "completed": false,
      "category": "Personal"
    }
  ]
};

const Context = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_NEW_TASK_NAME":
      return {
        ...state,
        newTaskName: action.payload
      }
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case "TOGGLE_CATEGORY_EDIT_MODE":
      return {
        ...state,
        categoryInEditMode: !state.categoryInEditMode
      }
    case "TOGGLE_IMPORTANT":
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload ? { ...task, important: !task.important } : task)
      }
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
      }
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
        category: state.categories.length,
        categoryInEditMode: true
      }
    case "SELECT_CATEGORY":
      return {
        ...state,
        category: action.payload
      }
    case "CHANGE_CATEGORY_NAME":
      return {
        ...state,
        categories: state.categories.map((category, index) => index === action.payload.index ? action.payload.name : category)
      }
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter((category, index) => index !== action.payload),
        tasks: state.tasks.filter(task => task.category !== action.payload),
        category: state.category === action.payload ? 0 : state.category < action.payload ? state.category : state.category - 1
      }
        default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

function handleNewTaskKeyDown(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    dispatch(changeNewTaskName(""));
    dispatch(addTask(state.newTaskName, state.selectedCategory));
  }
}

function handleNewTaskChange(e) {
  dispatch(changeNewTaskName(e.target.value));
}

function changeNewTaskName(name) {
  return {
    type: "CHANGE_NEW_TASK_NAME",
    payload: name
  }
}

function addTask(name, category) {
  return {
    type: "ADD_TASK",
    payload: {
      id: Date.now(),
      name,
      important: false,
      completed: false,
      category
    }
  }
}

function deleteTask(id) {
  return {
    type: "DELETE_TASK",
    payload: id
  }
}

function toggleImportant(id) {
  return {
    type: "TOGGLE_IMPORTANT",
    payload: id
  }
}

function toggleCompleted(id) {
  return {
    type: "TOGGLE_COMPLETED",
    payload: id
  }
}

function addCategory() {
  return {
    type: "ADD_CATEGORY",
    payload: "Untitled category"
  }
}

function selectCategory(category) {
  return {
    type: "SELECT_CATEGORY",
    payload: category
  }
}

function changeCategoryName(index, name) {
  return {
    type: "CHANGE_CATEGORY_NAME",
    payload: {index, name}
  }
}

function toggleCategoryEditMode() {
  return {
    type: "TOGGLE_CATEGORY_EDIT_MODE"
  }
}

function deleteCategory(index) {
  return {
    type: "DELETE_CATEGORY",
    payload: index
  }
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
                  text="All"
                  icon={<HomeIcon />}
                  onClick={() => dispatch(selectCategory(0))}
                ></Item>
                <Item
                  text="Important"
                  icon={<StarBorderIcon />}
                  onClick={() => dispatch(selectCategory(1))}
                ></Item>
              </List>
              <Divider />
              <List>
                <Item
                  text="Add category"
                  icon={<AddIcon />}
                  onClick={() => dispatch(addCategory())}
                ></Item>
                {state.categories.map((category, index) => (
                  index >= 2 &&
                  <Item
                    text={category}
                    icon={<FormatListBulletedIcon/>}
                    buttons={
                      [
                        <DeleteButton onClick={(e) => {
                          e.stopPropagation();
                          dispatch(deleteCategory(index))
                        }}/>
                      ]
                    }
                    onClick={() => dispatch(selectCategory(index))}
                  />
                ))}
              </List>
            </Box>
          </Drawer>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ ml: 2, mt: 2 }}>
              <TextField
                variant="standard"
                disabled={state.category < 2}
                onChange={(e) => dispatch(changeCategoryName(state.category, e.target.value))}
                value={state.categories[state.category]}
                InputProps={
                  {
                    disableUnderline: true,
                    style: {
                      fontSize: 28,
                    }
                  }
                }
                inputRef={input => state.categoryInEditMode && input && input.focus()}
                onFocus={e => e.target.select()}
                onBlur={() => dispatch(toggleCategoryEditMode())}
              ></TextField>
            </Box>

            <Stack spacing={0} margin={2}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", marginBottom: "20px" }}
              >
                <IconButton disableRipple sx={{ p: '10px 20px' }}>
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
              {state.tasks.map((task) => (
                <Item
                text={task.name}
                icon={
                  <Checkbox
                    checked={task.completed}
                    onClick={() => dispatch(toggleCompleted(task.id))}
                  />}
                buttons={
                  [
                    <ImportantButton
                      important={task.important}
                      onClick={() => dispatch(toggleImportant(task.id))}
                    />,
                    <DeleteButton
                      onClick={() => dispatch(deleteTask(task.id))}
                    />
                  ]
                }/>
              ))}
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
