import React from "react";
import { Box, Paper } from "@mui/material";
import { Employee } from "@gusto/embedded-react-sdk";
import { useNavigate } from "react-router-dom";

const EmployeeList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 3 }}>
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
