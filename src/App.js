import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { AppBar, Stack, Avatar, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Paper } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import * as React from 'react';
import './App.css';
import { Box, Container } from '@mui/system';
import styled from '@emotion/styled';

const DRAWER_WIDTH = 320;

const TASK_LISTS = ['Groceries', 'Bills', 'Work'];

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Container maxWidth="m">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer
          variant="permanent"
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: DRAWER_WIDTH, boxSizing: 'border-box' },
          }}
        > 
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ margin: 2, width: 48, height: 48,  bgcolor: "orange" }}>LW</Avatar>
            <Box>
            <Typography>Lukasz Wieckowski</Typography>
            <Typography variant="caption">luukka.wieckowski@gmail.com</Typography>
            </Box>
          </Box>
          <Box sx={{ overflow: 'auto' }}>
          <List>
          <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"All"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StarBorderIcon />
                </ListItemIcon>
                <ListItemText primary={"Important"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
          <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary={"Add a task list"} />
              </ListItemButton>
            </ListItem>
            {TASK_LISTS.map((name) => (
              <TaskListButton name={name}/>
            ))}
          </List>
        </Box>
        </Drawer>
        <Box sx={{ width: "100%"}}>
          <Typography margin={2} variant="h5">Tasks</Typography>
          <Stack spacing={2} margin={2}>
          <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary={"Add a task"} />
              </ListItemButton>
            </ListItem>
            <Item>Task 1</Item>
            <Item>Task 2</Item>
            <Item>Task 3</Item>
          </Stack>
        </Box>
      </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function TaskListButton({ name }) {
  return (
    <ListItem key={name} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <FormatListBulletedIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
}

