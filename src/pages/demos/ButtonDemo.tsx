import React, { useState } from "react";
import { Box, Typography, Grid, Paper, Stack, Divider } from "@mui/material";
import {
  Save as SaveIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { Button } from "../../design-system";

const ButtonDemo: React.FC = () => {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleLoadingDemo1 = () => {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  };

  const handleLoadingDemo2 = () => {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 2000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Button Component Demo
      </Typography>
      <Typography variant="body1" paragraph>
        Showcase of our design system's Button component with various
        configurations.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Primary Hierarchy Buttons */}
        <Grid sx={{ width: "100%", mb: 2 }}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Primary Hierarchy
            </Typography>
            <Typography variant="body2" paragraph>
              Primary hierarchy buttons are used for main actions and
              call-to-actions.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Contained Variant
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button hierarchy="primary" variant="contained">
                  Standard
                </Button>
                <Button
                  hierarchy="primary"
                  variant="contained"
                  startIcon={<SaveIcon />}
                >
                  With Icon
                </Button>
                <Button hierarchy="primary" variant="contained" disabled>
                  Disabled
                </Button>
                <Button
                  hierarchy="primary"
                  variant="contained"
                  loading={loading1}
                  onClick={handleLoadingDemo1}
                >
                  {loading1 ? "Loading..." : "Click to Load"}
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Outlined Variant
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button hierarchy="primary" variant="outlined">
                  Standard
                </Button>
                <Button
                  hierarchy="primary"
                  variant="outlined"
                  startIcon={<AddIcon />}
                >
                  With Icon
                </Button>
                <Button hierarchy="primary" variant="outlined" disabled>
                  Disabled
                </Button>
                <Button hierarchy="primary" variant="outlined" size="small">
                  Small
                </Button>
                <Button hierarchy="primary" variant="outlined" size="large">
                  Large
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Text Variant
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button hierarchy="primary" variant="text">
                  Standard
                </Button>
                <Button
                  hierarchy="primary"
                  variant="text"
                  startIcon={<AddIcon />}
                >
                  With Icon
                </Button>
                <Button hierarchy="primary" variant="text" disabled>
                  Disabled
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>

        {/* Secondary Hierarchy Buttons */}
        <Grid sx={{ width: "100%", mb: 2 }}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Secondary Hierarchy
            </Typography>
            <Typography variant="body2" paragraph>
              Secondary hierarchy buttons are used for secondary actions and
              less important call-to-actions.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Contained Variant
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button hierarchy="secondary" variant="contained">
                  Standard
                </Button>
                <Button
                  hierarchy="secondary"
                  variant="contained"
                  startIcon={<DeleteIcon />}
                >
                  With Icon
                </Button>
                <Button hierarchy="secondary" variant="contained" disabled>
                  Disabled
                </Button>
                <Button
                  hierarchy="secondary"
                  variant="contained"
                  loading={loading2}
                  onClick={handleLoadingDemo2}
                >
                  {loading2 ? "Loading..." : "Click to Load"}
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Outlined Variant
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button hierarchy="secondary" variant="outlined">
                  Standard
                </Button>
                <Button
                  hierarchy="secondary"
                  variant="outlined"
                  startIcon={<DownloadIcon />}
                >
                  With Icon
                </Button>
                <Button hierarchy="secondary" variant="outlined" disabled>
                  Disabled
                </Button>
                <Button hierarchy="secondary" variant="outlined" size="small">
                  Small
                </Button>
                <Button hierarchy="secondary" variant="outlined" size="large">
                  Large
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Text Variant
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button hierarchy="secondary" variant="text">
                  Standard
                </Button>
                <Button
                  hierarchy="secondary"
                  variant="text"
                  startIcon={<SendIcon />}
                >
                  With Icon
                </Button>
                <Button hierarchy="secondary" variant="text" disabled>
                  Disabled
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>

        {/* Common Use Cases */}
        <Grid sx={{ width: "100%" }}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Common Use Cases
            </Typography>
            <Typography variant="body2" paragraph>
              Examples of buttons in typical UI patterns.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom>
                Form Actions
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  hierarchy="primary"
                  variant="contained"
                  startIcon={<SaveIcon />}
                >
                  Save Changes
                </Button>
                <Button
                  hierarchy="secondary"
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Cancel
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="subtitle2" gutterBottom>
                Dialog Actions
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="flex-end"
                alignItems="center"
              >
                <Button hierarchy="secondary" variant="text">
                  Cancel
                </Button>
                <Button hierarchy="primary" variant="contained">
                  Confirm
                </Button>
              </Stack>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ButtonDemo;
