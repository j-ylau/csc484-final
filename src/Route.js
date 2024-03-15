import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Route = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  
  const routeDetails = {
    from: "Central Park",
    to: "Times Square",
    distance: "3.5 miles",
    estimatedTime: "25 mins",
    bestFor: ["Safety", "Environment", "Enjoyment"],
    weather: "Sunny, 75°F",
    
    path: [
      [40.785091, -73.968285], 
      [40.758896, -73.98513], 
    ],
  };

  const calculateRoute = () => {
    setLoading(true);
    setShowResult(false);

    
    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 3000); 
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Route Calculator
      </Typography>
      <Stack spacing={2} sx={{ mb: 2 }}>
        <TextField
          label="From"
          variant="outlined"
          fullWidth
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <TextField
          label="To"
          variant="outlined"
          fullWidth
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={calculateRoute}
          sx={{
            backgroundColor: "#F48668",
            ":hover": {
              backgroundColor: "#c55d41",
            },
          }}
        >
          Calculate
        </Button>
      </Stack>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}

      {showResult && (
        <>
          <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
            <Stack spacing={2}>
              <Typography variant="h6">From: {routeDetails.from}</Typography>
              <Typography variant="h6">To: {routeDetails.to}</Typography>
              <Divider />
              <Typography>Distance: {routeDetails.distance}</Typography>
              <Typography>
                Estimated Time: {routeDetails.estimatedTime}
              </Typography>
              <Typography>
                Weather Conditions: {routeDetails.weather}
              </Typography>
              <Box>
                <Typography variant="subtitle1">Route Features:</Typography>
                {routeDetails.bestFor.map((feature, index) => (
                  <Typography key={index}>- {feature}</Typography>
                ))}
              </Box>
            </Stack>
          </Paper>
          <MapContainer
            center={[40.7712, -73.9742]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https:
              attribution='&copy; <a href="https:
            />
            <Marker position={routeDetailps.path[0]} />
            <Marker position={routeDetails.path[1]} />
            <Polyline
              pathOptions={{ color: "blue" }}
              positions={routeDetails.path}
            />
          </MapContainer>
        </>
      )}
    </Box>
  );
};

export default Route;
