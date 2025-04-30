import React, { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Alert,
  Divider,
} from "@mui/material";

interface DirectDepositFormProps {
  onSubmit?: (data: DirectDepositFormData) => void;
  employeeId?: string;
}

export interface DirectDepositFormData {
  accountType: "checking" | "savings";
  routingNumber: string;
  accountNumber: string;
  bankName: string;
  depositAmount: string;
  depositType: "percentage" | "amount";
}

const DirectDepositForm: React.FC<DirectDepositFormProps> = ({
  onSubmit,
  employeeId = "EMP-12345",
}) => {
  const [formData, setFormData] = useState<DirectDepositFormData>({
    accountType: "checking",
    routingNumber: "",
    accountNumber: "",
    bankName: "",
    depositAmount: "100",
    depositType: "percentage",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Direct Deposit Setup"
        subheader={`Employee ID: ${employeeId}`}
      />
      <Divider />
      <CardContent>
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Direct deposit information saved successfully!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
              >
                Bank Information
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bank Name"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                required
                placeholder="Enter bank name"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Account Type</InputLabel>
                <Select
                  name="accountType"
                  value={formData.accountType}
                  label="Account Type"
                  onChange={handleChange}
                >
                  <MenuItem value="checking">Checking</MenuItem>
                  <MenuItem value="savings">Savings</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Routing Number"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleChange}
                required
                inputProps={{ maxLength: 9, minLength: 9 }}
                placeholder="9 digit routing number"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Account Number"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                required
                placeholder="Enter account number"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="subtitle2"
                gutterBottom
                color="textSecondary"
                sx={{ mt: 2 }}
              >
                Deposit Information
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Deposit Type</InputLabel>
                <Select
                  name="depositType"
                  value={formData.depositType}
                  label="Deposit Type"
                  onChange={handleChange}
                >
                  <MenuItem value="percentage">Percentage</MenuItem>
                  <MenuItem value="amount">Fixed Amount</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={
                  formData.depositType === "percentage"
                    ? "Percentage"
                    : "Amount"
                }
                name="depositAmount"
                value={formData.depositAmount}
                onChange={handleChange}
                required
                type="number"
                InputProps={{
                  endAdornment:
                    formData.depositType === "percentage" ? "%" : "$",
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Save Direct Deposit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default DirectDepositForm;
