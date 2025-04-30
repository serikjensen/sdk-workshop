import React from "react";
import { Typography, Box, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Payroll: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Payroll
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Demo payroll page for the partner application showcase
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          SDK Components for Payroll
        </Typography>
        <Typography paragraph>
          This is a placeholder for a partner application payroll page. From
          here, you could explore our SDK components.
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/demo/direct-deposit")}
            sx={{ mr: 2 }}
          >
            View Direct Deposit Demo
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/demo/pay-statements")}
          >
            View Pay Statements Demo
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Payroll;
