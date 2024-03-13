import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardContent,
  Chip,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Run = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "auto", padding: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight={800}>
        RUN
      </Typography>
      <Typography variant="h5" fontWeight={500}>
        Bishop Peak Trail from Highland Drive Trailhead
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        The Bishop Peak Trail at Highland Drive Trailhead in San Luis Obispo
        offers a rocky and challenging but beautiful hike with amazing views of
        the area. Recent reviews mention muddy conditions in the beginning, with
        rocky scrambles and technical sections.
      </Typography>

      <Stack direction="row" spacing={1} justifyContent="center" mb={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F48668",
            ":hover": {
              backgroundColor: "#c55d41",
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
              backgroundColor: "#c55d41",
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
              backgroundColor: "#c55d41",
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
              backgroundColor: "#c55d41",
            },
          }}
        >
          DOGS
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
              The hike was challenging but definitely worth it for the views.
              Highly recommend!
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
  );
};

export default Run;
