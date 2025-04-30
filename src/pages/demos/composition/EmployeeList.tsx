import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Employee } from "@gusto/embedded-react-sdk";
import { useNavigate } from "react-router-dom";

const EmployeeList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Employee List Component
      </Typography>
      <Typography>
        This demo shows the employee onboarding flow from the SDK.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Employee.EmployeeList
          companyId="demo"
          onEvent={(evt, data) => {
            console.log("Employee Onboarding Event:", evt, data);
            navigate("/composition/landing");
          }}
        />
      </Box>
    </Paper>
  );
};

export default EmployeeList;
