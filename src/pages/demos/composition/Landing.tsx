import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
// Add a simple logo component for DemoCo
const DemoCoLogo: React.FC = () => (
  <Box
    sx={{
      width: 120,
      height: 120,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #4a90e2, #7c4dff)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: 3,
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    }}
  >
    <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
      DC
    </Typography>
  </Box>
);

const Landing: React.FC = () => {
  return (
    <Paper sx={{ p: 5, maxWidth: 800, mx: "auto", textAlign: "center" }}>
      <Stack alignItems="center">
        <DemoCoLogo />
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Welcome to DemoCo Add Employee Wizard
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3 }}>
          Streamline your onboarding process with our easy-to-use employee
          management system
        </Typography>
        <Box
          sx={{
            mt: 3,
            mb: 4,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #4a90e2, #7c4dff)",
          }}
        />
        <Box sx={{ mt: 2, textAlign: "left" }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            This wizard will help you:
          </Typography>
          <ul>
            <li>Add new employees with DemoCo</li>
            <li>Set up employee profiles</li>
            <li>Add payment information</li>
            <li>Invite employees to self onboard</li>
          </ul>
        </Box>
        <br />
        <Link to="/composition/profile">Get started</Link>
      </Stack>
    </Paper>
  );
};

export default Landing;
