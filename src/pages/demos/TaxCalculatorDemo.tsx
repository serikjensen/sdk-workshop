import React from "react";
import { Typography, Box, Paper, Alert } from "@mui/material";

const TaxCalculatorDemo: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Tax Calculator Component
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Calculate employee tax withholdings based on earnings, location, and tax
        status.
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        This component will be added soon. For now, this is a placeholder
        showing the planned functionality.
      </Alert>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Tax Calculator Features:
        </Typography>

        <ul>
          <li>Federal income tax calculation</li>
          <li>State and local tax support for all 50 states</li>
          <li>Social Security and Medicare calculation</li>
          <li>Support for various filing statuses</li>
          <li>Automatic calculation of pre-tax deductions</li>
          <li>Year-to-date wage tracking</li>
        </ul>
      </Paper>
    </Box>
  );
};

export default TaxCalculatorDemo;
