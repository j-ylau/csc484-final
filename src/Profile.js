import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Avatar,
  TextField,
  Card,
  CardContent,
  CardActions,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const favoriteRoutes = [
  { id: 1, name: "Bishop Peak Trail", difficulty: "Moderate" },
  { id: 2, name: "Reservoir Canyon Trail", difficulty: "Hard" },
  { id: 3, name: "Cerro San Luis Trail", difficulty: "Easy" },
];


const ColorButton = styled(Button)(({ theme }) => ({
  color: "#F48668", 
  "&:hover": {
    backgroundColor: "#F48668",
    color: "#fff", 
    "& .MuiSvgIcon-root": {
      
      color: "#fff", 
    },
  },
  "& .MuiSvgIcon-root": {
    
    color: "#F48668",
  },
}));

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "John Runner",
    email: "john.runner@example.com",
    bio: "A passionate runner who loves exploring new trails and pushing limits.",
  });

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom fontWeight={800}>
        Profile
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <Avatar sx={{ width: 56, height: 56, bgcolor: "#F48668" }}>JR</Avatar>
        <Typography variant="h5">{userProfile.name}</Typography>
        {!isEditing && (
          <ColorButton startIcon={<EditIcon />} onClick={handleToggleEdit}>
            Edit
          </ColorButton>
        )}
      </Stack>

      {isEditing ? (
        <Stack spacing={2}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={userProfile.name}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={userProfile.email}
            onChange={handleInputChange}
          />
          <TextField
            name="bio"
            label="Bio"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={userProfile.bio}
            onChange={handleInputChange}
          />
          <ColorButton
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#F48668",
              "&:hover": { backgroundColor: "#dc7763", color: "white" },
            }} 
            startIcon={<SaveIcon sx={{ color: "white" }} />}
            onClick={handleToggleEdit}
          >
            Save
          </ColorButton>
        </Stack>
      ) : (
        <Box>
          <Typography variant="body1">{userProfile.bio}</Typography>
        </Box>
      )}

      <Typography variant="h6" mt={4} mb={2}>
        Favorite Routes
      </Typography>
      <Grid container spacing={2} direction="column">
        {favoriteRoutes.map((route) => (
          <Grid item xs={12} sm={6} md={4} key={route.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {route.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Difficulty: {route.difficulty}
                </Typography>
              </CardContent>
              <CardActions>
                <ColorButton size="small" startIcon={<FavoriteBorderIcon />}>
                  Like
                </ColorButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Profile;
