import React, { useState } from "react";
import {
  Typography,
  Box,
  Paper,
  Alert,
  Stack,
  Button,
  SelectChangeEvent,
  Divider,
} from "@mui/material";
import DirectDepositForm from "../../components/sdk/DirectDepositForm";
import {
  TextField,
  Select,
  Checkbox,
  RadioGroup,
  Badge,
} from "../../design-system";

type FormValues = {
  bankName: string;
  accountType: string;
  amount: string;
  frequency: string;
  agreeToTerms: boolean;
};

const DirectDepositDemo: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    bankName: "",
    accountType: "",
    amount: "",
    frequency: "biweekly",
    agreeToTerms: false,
  });

  // Handle text input changes
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle checkbox changes
  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  // Handle select changes
  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const name = event.target.name as string;
    const value = event.target.value as string;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Direct Deposit Component
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Our direct deposit component makes it easy to capture and validate bank
        account information.
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        This component includes built-in validation for routing numbers and
        standardized bank information collection. Below you can see our new
        design system components in action.
      </Alert>

      {/* Design System Components Demo */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Design System Components
        </Typography>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              label="Bank Name"
              name="bankName"
              value={formValues.bankName}
              onChange={handleTextChange}
              placeholder="Enter your bank name"
              fullWidth
              required
            />
            <Select
              label="Account Type"
              name="accountType"
              value={formValues.accountType}
              onChange={handleSelectChange}
              options={[
                { value: "checking", label: "Checking" },
                { value: "savings", label: "Savings" },
                { value: "money-market", label: "Money Market" },
              ]}
              fullWidth
              required
            />
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField
              label="Deposit Amount"
              name="amount"
              value={formValues.amount}
              onChange={handleTextChange}
              placeholder="Enter amount"
              fullWidth
              required
              type="number"
              InputProps={{
                endAdornment: "$",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <RadioGroup
                label="Deposit Frequency"
                name="frequency"
                value={formValues.frequency}
                onChange={handleTextChange}
                options={[
                  { value: "weekly", label: "Weekly" },
                  { value: "biweekly", label: "Bi-Weekly" },
                  { value: "monthly", label: "Monthly" },
                ]}
                direction="horizontal"
              />
            </Box>
          </Stack>

          <Checkbox
            name="agreeToTerms"
            checked={formValues.agreeToTerms}
            onChange={handleCheckChange}
            label="I agree to the terms and conditions"
            required
            helperText="You must agree to the terms to continue"
          />

          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              disabled={!formValues.agreeToTerms}
            >
              Save Deposit Information
            </Button>
          </Box>
        </Stack>
      </Paper>

      {/* Badge Component Demo */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Badge Component
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Status Variants
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Badge label="Default" status="default" />
            <Badge label="Info" status="info" />
            <Badge label="Success" status="success" />
            <Badge label="Warning" status="warning" />
            <Badge label="Error" status="error" />
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Size Variants
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Badge label="Small" size="small" status="info" />
            <Badge label="Medium" size="medium" status="info" />
            <Badge label="Large" size="large" status="info" />
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Shape Variants
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Badge label="Rounded" status="success" rounded={true} />
            <Badge label="Squared" status="success" rounded={false} />
            <Badge label="With Border" status="warning" bordered={true} />
          </Stack>
        </Box>
      </Paper>

      {/* Original Component */}
      <Paper sx={{ p: 0, overflow: "hidden", mb: 4 }}>
        <DirectDepositForm />
      </Paper>
    </Box>
  );
};

export default DirectDepositDemo;
