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
} from "@mui/material";
import * as React from "react";
import "./App.css";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import MenuItem from "./components/MenuItem";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const DRAWER_WIDTH = 320;

const TASK_LISTS = ["Groceries", "Bills", "Work"];

const lightTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
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
              <MenuItem text="All" icon={<HomeIcon />}></MenuItem>
              <MenuItem text="Important" icon={<StarBorderIcon />}></MenuItem>
            </List>
            <Divider />
            <List>
              <MenuItem text="Add a task list" icon={<AddIcon />}></MenuItem>
              {TASK_LISTS.map((text) => (
                <MenuItem text={text} icon={<FormatListBulletedIcon/>} canDelete={true}/>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box sx={{ width: "100%" }}>
          <Typography margin={2} variant="h5">
            Tasks
          </Typography>
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
              />
            </Paper>
            <MenuItem text="Task 1" icon={<Checkbox color="success" />} canDelete={true}/>
            <MenuItem text="Task 2" icon={<Checkbox />} canDelete={true}/>
            <MenuItem text="Task 3" icon={<Checkbox />} canDelete={true}/>
            <MenuItem text="Task 4" icon={<Checkbox />} canDelete={true}/>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
