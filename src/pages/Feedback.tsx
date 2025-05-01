import React, { useState } from "react";
import { Typography, Paper, Box, Stack } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import {
  TextField,
  Select,
  RadioGroup,
  Checkbox,
  Button,
} from "../design-system/components/inputs";

const feedbackTypes = [
  { value: "suggestion", label: "Suggestion" },
  { value: "issue", label: "Issue Report" },
  { value: "question", label: "Question" },
  { value: "praise", label: "Praise" },
];

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "critical", label: "Critical" },
];

const satisfactionOptions = [
  { value: "1", label: "Very Unsatisfied" },
  { value: "2", label: "Unsatisfied" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Satisfied" },
  { value: "5", label: "Very Satisfied" },
];

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    feedbackType: "",
    priority: "",
    satisfaction: "",
    subject: "",
    message: "",
    contactPermission: false,
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name as string]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to an API
    alert("Thank you for your feedback!");
    setFormData({
      feedbackType: "",
      priority: "",
      satisfaction: "",
      subject: "",
      message: "",
      contactPermission: false,
      email: "",
    });
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Feedback
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        We value your feedback. Please fill out the form below to help us
        improve our services.
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Box sx={{ flex: "1 1 300px" }}>
                <Select
                  fullWidth
                  label="Feedback Type"
                  name="feedbackType"
                  value={formData.feedbackType}
                  options={feedbackTypes}
                  onChange={handleSelectChange}
                  required
                />
              </Box>
              <Box sx={{ flex: "1 1 300px" }}>
                <Select
                  fullWidth
                  label="Priority"
                  name="priority"
                  value={formData.priority}
                  options={priorityOptions}
                  onChange={handleSelectChange}
                  required
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Overall Satisfaction
              </Typography>
              <RadioGroup
                row
                name="satisfaction"
                value={formData.satisfaction}
                onChange={handleChange}
                options={satisfactionOptions}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="Your Feedback"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
            </Box>
            <Box>
              <Checkbox
                name="contactPermission"
                checked={formData.contactPermission}
                onChange={handleCheckboxChange}
                label="You may contact me about my feedback"
              />
            </Box>
            {formData.contactPermission && (
              <Box sx={{ maxWidth: "400px" }}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={formData.contactPermission}
                />
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <Button type="submit" variant="contained">
                Submit Feedback
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default Feedback;
