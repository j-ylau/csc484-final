import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Paper,
  Button,
  Stack,
  Card,
  CardContent,
  Chip,
  Avatar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  MenuItem, 
  Menu
} from "@mui/material";
import {
  Menu as MenuIcon,
  Star as StarIcon,
  DirectionsRun as DirectionsRunIcon,
  Map as MapIcon,
  BarChart as BarChartIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import Run from "./Run";
import Route from "./Route";
import Profile from "./Profile";


function App() {
  const [value, setValue] = React.useState(0);
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderComponent = () => {
    switch (value) {
      case 0:
        return <Run />;
      case 1:
        return <Route />;
      case 2:
        
        return <div>Statistics</div>;
      case 3:
        return <Profile />;
      default:
        return <Run />;
    }
  };

  return (
    <Container maxWidth="xs" disableGutters sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px" }}>
      <Paper sx={{ flexGrow: 1, maxWidth: "100%", overflow: "hidden", borderRadius: 2, boxShadow: 5, display: "flex", flexDirection: "column" }}>
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              PrimeRoute
            </Typography>
            {/* Menu Component */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Privacy Acknowledgement</MenuItem>
              <MenuItem onClick={handleClose}>Terms of Service</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Dynamic Content Area */}
        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          {renderComponent()}
        </Box>


        {/* Bottom Navigation */}
        <BottomNavigation
          sx={{ width: "100%" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Run"
            icon={<DirectionsRunIcon />}
            sx={{
              "&:hover": { color: "#F48668" }, 
              "&.Mui-selected": { color: "#F48668" }, 
            }}
          />
          <BottomNavigationAction
            label="Routes"
            icon={<MapIcon />}
            sx={{
              "&:hover": { color: "#F48668" },
              "&.Mui-selected": { color: "#F48668" },
            }}
          />
          <BottomNavigationAction
            label="Statistics"
            icon={<BarChartIcon />}
            sx={{
              "&:hover": { color: "#F48668" },
              "&.Mui-selected": { color: "#F48668" },
            }}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<PersonIcon />}
            sx={{
              "&:hover": { color: "#F48668" },
              "&.Mui-selected": { color: "#F48668" },
            }}
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}

export default App;
