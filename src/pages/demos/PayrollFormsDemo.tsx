import React from "react";
import {
  Typography,
  Box,
  Paper,
  Alert,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const PayrollFormsDemo: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Payroll Forms Component
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Generate and process tax and payroll-related forms easily.
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        This component will be added soon. For now, this is a placeholder
        showing the planned functionality.
      </Alert>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Available Form Templates
        </Typography>

        <Grid container spacing={3}>
          <Grid>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">W-4 Form</Typography>
                <Typography variant="body2" color="text.secondary">
                  Employee's Withholding Certificate
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">W-2 Form</Typography>
                <Typography variant="body2" color="text.secondary">
                  Wage and Tax Statement
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">1099-NEC</Typography>
                <Typography variant="body2" color="text.secondary">
                  Nonemployee Compensation
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">I-9 Form</Typography>
                <Typography variant="body2" color="text.secondary">
                  Employment Eligibility Verification
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PayrollFormsDemo;
