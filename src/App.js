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

function App() {
  const [value, setValue] = React.useState(0);
  // State for Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="xs" disableGutters sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <Paper sx={{ width: 640, maxWidth: "100%", height: "auto", maxHeight: "100vh", overflow: "hidden", borderRadius: 2, boxShadow: 5, display: "flex", flexDirection: "column" }}>
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              PrimeRoute 2.0
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
              <MenuItem onClick={handleClose}>Privacy Acknowledgemnet</MenuItem>
              <MenuItem onClick={handleClose}>Terms of Service</MenuItem>
            </Menu>

          </Toolbar>
        </AppBar>

        {/* Content Area */}
        <Box sx={{ flexGrow: 1, overflow: "auto", padding: 2 }}>
          <Typography variant="h4" gutterBottom fontWeight={800}>
            RUN
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            Bishop Peak Trail from Highland Drive Trailhead
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            The Bishop Peak Trail at Highland Drive Trailhead in San Luis Obispo
            offers a rocky and challenging but beautiful hike with amazing views
            of the area. Recent reviews mention muddy conditions in the
            beginning, with rocky scrambles and technical sections.
          </Typography>

          <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F48668",
                ":hover": {
                  backgroundColor: "#c55d41", // A darker shade of orange for hover
                },
              }}
            >
              HIKING
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F48668",
                ":hover": {
                  backgroundColor: "#c55d41", // Adjusted for consistency
                },
              }}
            >
              RUNNING
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F48668",
                ":hover": {
                  backgroundColor: "#c55d41", // Adjusted for consistency
                },
              }}
            >
              WALKING
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F48668",
                ":hover": {
                  backgroundColor: "#c55d41", // Adjusted for consistency
                },
              }}
            >
              DOGS ON
            </Button>
          </Stack>

          <Card variant="outlined" sx={{ my: 2 }}>
            <CardContent>
              <Typography variant="h6">Conditions</Typography>
              <Typography variant="h5">March 1st</Typography>
              <Typography variant="h3">59°</Typography>
              <Typography variant="subtitle1">Cloudy</Typography>
              <Typography variant="body2">H:63° L:50°</Typography>
            </CardContent>
          </Card>

          {/* Scrollable Reviews Section */}
          <Box sx={{ maxHeight: 200, overflow: "auto", my: 2 }}>
            {/* First (existing) Review */}
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Chip icon={<StarIcon />} label="4.0" />
                <Typography variant="body2">
                  Awesome trail! Lot of rock scrambles... muddy at ways so wear
                  appropriate shoes.. amazing views ahead!!
                </Typography>
                <Avatar
                  sx={{ my: 1 }}
                  alt="Sarah Williams"
                  src="/static/images/avatar/1.jpg"
                />
                <Typography variant="caption" display="block">
                  Sarah Williams
                </Typography>
                <Typography variant="caption">Feb 20, 2024</Typography>
              </CardContent>
            </Card>
            {/* Second Fake Review */}
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Chip icon={<StarIcon />} label="3.5" />
                <Typography variant="body2">
                  Great views but quite crowded. Make sure to go early!
                </Typography>
                <Avatar
                  sx={{ my: 1 }}
                  alt="John Doe"
                  src="/static/images/avatar/2.jpg"
                />
                <Typography variant="caption" display="block">
                  John Doe
                </Typography>
                <Typography variant="caption">Mar 15, 2024</Typography>
              </CardContent>
            </Card>
            {/* Third Fake Review */}
            <Card variant="outlined">
              <CardContent>
                <Chip icon={<StarIcon />} label="4.5" />
                <Typography variant="body2">
                  The hike was challenging but definitely worth it for the
                  views. Highly recommend!
                </Typography>
                <Avatar
                  sx={{ my: 1 }}
                  alt="Alex Smith"
                  src="/static/images/avatar/3.jpg"
                />
                <Typography variant="caption" display="block">
                  Alex Smith
                </Typography>
                <Typography variant="caption">Apr 5, 2024</Typography>
              </CardContent>
            </Card>
          </Box>
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
              "&:hover": { color: "#F48668" }, // Change icon and label color on hover
              "&.Mui-selected": { color: "#F48668" }, // Keep the color when selected
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
