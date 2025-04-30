import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  IconButton,
} from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  Share as ShareIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Archive as ArchiveIcon,
  Visibility as VisibilityIcon,
  Settings as SettingsIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import { Menu, MenuItem } from "../../design-system";

const MenuDemo: React.FC = () => {
  const [basicAnchorEl, setBasicAnchorEl] = useState<null | HTMLElement>(null);
  const [iconAnchorEl, setIconAnchorEl] = useState<null | HTMLElement>(null);
  const [descriptionAnchorEl, setDescriptionAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleBasicMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setBasicAnchorEl(event.currentTarget);
  };

  const handleBasicMenuClose = () => {
    setBasicAnchorEl(null);
  };

  const handleIconMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIconAnchorEl(event.currentTarget);
  };

  const handleIconMenuClose = () => {
    setIconAnchorEl(null);
  };

  const handleDescriptionMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDescriptionAnchorEl(event.currentTarget);
  };

  const handleDescriptionMenuClose = () => {
    setDescriptionAnchorEl(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Menu Component Demo
      </Typography>
      <Typography variant="body1" paragraph>
        Showcase of our design system's Menu component with various
        configurations.
      </Typography>

      <Stack spacing={6} sx={{ mt: 4 }}>
        {/* Basic Menu */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Basic Menu
          </Typography>
          <Typography variant="body2" paragraph>
            A simple menu with basic items and dividers between items.
          </Typography>

          <Button variant="contained" onClick={handleBasicMenuOpen}>
            Open Basic Menu
          </Button>

          <Menu
            anchorEl={basicAnchorEl}
            open={Boolean(basicAnchorEl)}
            onClose={handleBasicMenuClose}
          >
            <MenuItem onClick={handleBasicMenuClose}>Edit</MenuItem>
            <MenuItem onClick={handleBasicMenuClose}>Duplicate</MenuItem>
            <MenuItem onClick={handleBasicMenuClose}>Archive</MenuItem>
            <MenuItem onClick={handleBasicMenuClose}>Delete</MenuItem>
          </Menu>
        </Paper>

        {/* Icon Menu */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Menu with Icons
          </Typography>
          <Typography variant="body2" paragraph>
            A menu with icons next to each item for better visual hierarchy.
          </Typography>

          <IconButton onClick={handleIconMenuOpen}>
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={iconAnchorEl}
            open={Boolean(iconAnchorEl)}
            onClose={handleIconMenuClose}
          >
            <MenuItem
              onClick={handleIconMenuClose}
              icon={<EditIcon fontSize="small" color="primary" />}
            >
              Edit
            </MenuItem>
            <MenuItem
              onClick={handleIconMenuClose}
              icon={<ShareIcon fontSize="small" color="primary" />}
            >
              Share
            </MenuItem>
            <MenuItem
              onClick={handleIconMenuClose}
              icon={<VisibilityIcon fontSize="small" color="primary" />}
            >
              View Details
            </MenuItem>
            <MenuItem
              onClick={handleIconMenuClose}
              icon={<ArchiveIcon fontSize="small" color="primary" />}
            >
              Archive
            </MenuItem>
            <MenuItem
              onClick={handleIconMenuClose}
              icon={<DeleteIcon fontSize="small" color="error" />}
            >
              Delete
            </MenuItem>
          </Menu>
        </Paper>

        {/* Menu with Descriptions */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Menu with Descriptions
          </Typography>
          <Typography variant="body2" paragraph>
            A menu with additional description text for each item.
          </Typography>

          <Button
            variant="outlined"
            startIcon={<SettingsIcon />}
            onClick={handleDescriptionMenuOpen}
          >
            Settings
          </Button>

          <Menu
            anchorEl={descriptionAnchorEl}
            open={Boolean(descriptionAnchorEl)}
            onClose={handleDescriptionMenuClose}
          >
            <MenuItem
              onClick={handleDescriptionMenuClose}
              icon={<InfoIcon fontSize="small" color="info" />}
              description="View and modify your account details"
            >
              Account Settings
            </MenuItem>
            <MenuItem
              onClick={handleDescriptionMenuClose}
              icon={<VisibilityIcon fontSize="small" color="info" />}
              description="Control what others can see about you"
            >
              Privacy Settings
            </MenuItem>
            <MenuItem
              onClick={handleDescriptionMenuClose}
              icon={<SettingsIcon fontSize="small" color="info" />}
              description="Customize your notification preferences"
            >
              Notification Settings
            </MenuItem>
          </Menu>
        </Paper>
      </Stack>
    </Box>
  );
};

export default MenuDemo;
