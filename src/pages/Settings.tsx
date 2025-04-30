import React from "react";
import { Typography, Box, Paper } from "@mui/material";

const Settings: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Demo settings page for the partner application showcase
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Application Settings
        </Typography>
        <Typography paragraph>
          This is a placeholder for a partner application settings page.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Settings;
