import React, { useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Switch,
  FormControlLabel,
  Stack,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Settings as SettingsIcon,
  Language as LanguageIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreVertIcon,
  Print as PrintIcon,
  VpnKey as VpnKeyIcon,
  Download as DownloadIcon,
  Delete as DeleteIcon,
  Security as SecurityIcon,
  Palette as PaletteIcon,
  Devices as DevicesIcon,
  Translate as TranslateIcon,
  NotificationsActive as NotificationsActiveIcon,
} from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import { Badge, Menu, MenuItem as DsMenuItem, Button } from "../design-system";
import withGustoProvider from "../hoc/withGustoProvider";

const ProfileComponent: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] =
    useState<null | HTMLElement>(null);
  const [settingsMenuAnchorEl, setSettingsMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "Jane Smith",
    title: "Software Engineer",
    email: "jane.smith@democompany.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    department: "Engineering",
    status: "active",
    notifications: true,
    preferredLanguage: "English",
  });

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSnackbar(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleProfileMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleSettingsMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSettingsMenuAnchorEl(event.currentTarget);
  };

  const handleSettingsMenuClose = () => {
    setSettingsMenuAnchorEl(null);
  };

  const getStatusBadge = () => {
    type StatusInfo = {
      status: "info" | "warning" | "error" | "success" | "default";
      label: string;
    };

    const statusMap: Record<string, StatusInfo> = {
      active: { status: "success", label: "Active" },
      vacation: { status: "info", label: "On Vacation" },
      sick: { status: "warning", label: "Out Sick" },
      meeting: { status: "info", label: "In Meeting" },
      inactive: { status: "error", label: "Inactive" },
    };

    return statusMap[formData.status] || statusMap.active;
  };

  const statusBadge = getStatusBadge();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <IconButton
          onClick={handleProfileMenuOpen}
          aria-label="Profile options"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={profileMenuAnchorEl}
          open={Boolean(profileMenuAnchorEl)}
          onClose={handleProfileMenuClose}
        >
          <DsMenuItem
            onClick={handleProfileMenuClose}
            icon={<PrintIcon fontSize="small" color="primary" />}
          >
            Print Profile
          </DsMenuItem>
          <DsMenuItem
            onClick={handleProfileMenuClose}
            icon={<DownloadIcon fontSize="small" color="primary" />}
          >
            Export Data
          </DsMenuItem>
          <DsMenuItem
            onClick={handleProfileMenuClose}
            icon={<VpnKeyIcon fontSize="small" color="primary" />}
            description="Change your account password"
          >
            Change Password
          </DsMenuItem>
          <DsMenuItem
            onClick={handleProfileMenuClose}
            icon={<DeleteIcon fontSize="small" color="error" />}
            description="Delete your account permanently"
          >
            Delete Account
          </DsMenuItem>
        </Menu>
      </Box>
      <Typography variant="subtitle1" color="textSecondary" paragraph>
        Manage your DemoCo employee profile
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 2 }}>
        <Card elevation={2} sx={{ minWidth: 275, maxWidth: 345 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 2,
                position: "relative",
              }}
            >
              <Avatar
                sx={{ width: 100, height: 100, bgcolor: blue[500], mb: 2 }}
              >
                <PersonIcon sx={{ fontSize: 60 }} />
              </Avatar>

              <Box sx={{ mb: 1 }}>
                <Badge
                  label={statusBadge.label}
                  status={statusBadge.status}
                  size="medium"
                  bordered
                />
              </Box>

              {isEditing ? (
                <FormControl
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ mb: 1 }}
                >
                  <InputLabel>Name</InputLabel>
                  <Select
                    name="name"
                    value={formData.name}
                    onChange={handleSelectChange}
                    label="Name"
                  >
                    <MenuItem value={formData.name}>{formData.name}</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <Typography variant="h5" gutterBottom>
                  {formData.name}
                </Typography>
              )}

              {isEditing ? (
                <FormControl
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ mb: 1 }}
                >
                  <InputLabel>Title</InputLabel>
                  <Select
                    name="title"
                    value={formData.title}
                    onChange={handleSelectChange}
                    label="Title"
                  >
                    <MenuItem value={formData.title}>{formData.title}</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <Typography variant="subtitle1" color="textSecondary">
                  {formData.title}
                </Typography>
              )}

              {!isEditing ? (
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ mt: 1 }}
                  startIcon={<EditIcon />}
                  onClick={() => setIsEditing(true)}
                  hierarchy="secondary"
                >
                  Edit Profile
                </Button>
              ) : (
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    hierarchy="primary"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    hierarchy="secondary"
                    startIcon={<CancelIcon />}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Stack>
              )}
            </Box>

            <Divider sx={{ my: 2 }} />

            <List disablePadding>
              {isEditing && (
                <ListItem disableGutters>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <SettingsIcon color="primary" />
                  </ListItemIcon>
                  <FormControl fullWidth size="small">
                    <InputLabel>Status</InputLabel>
                    <Select
                      name="status"
                      value={formData.status}
                      label="Status"
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="vacation">On Vacation</MenuItem>
                      <MenuItem value="sick">Out Sick</MenuItem>
                      <MenuItem value="meeting">In Meeting</MenuItem>
                      <MenuItem value="inactive">Inactive</MenuItem>
                    </Select>
                  </FormControl>
                </ListItem>
              )}

              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <EmailIcon color="primary" />
                </ListItemIcon>
                {isEditing ? (
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel>Email</InputLabel>
                    <Select
                      name="email"
                      value={formData.email}
                      onChange={handleSelectChange}
                      label="Email"
                    >
                      <MenuItem value={formData.email}>
                        {formData.email}
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <ListItemText primary="Email" secondary={formData.email} />
                )}
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <PhoneIcon color="primary" />
                </ListItemIcon>
                {isEditing ? (
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel>Phone</InputLabel>
                    <Select
                      name="phone"
                      value={formData.phone}
                      onChange={handleSelectChange}
                      label="Phone"
                    >
                      <MenuItem value={formData.phone}>
                        {formData.phone}
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <ListItemText primary="Phone" secondary={formData.phone} />
                )}
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <LocationIcon color="primary" />
                </ListItemIcon>
                {isEditing ? (
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel>Location</InputLabel>
                    <Select
                      name="location"
                      value={formData.location}
                      onChange={handleSelectChange}
                      label="Location"
                    >
                      <MenuItem value={formData.location}>
                        {formData.location}
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <ListItemText
                    primary="Location"
                    secondary={formData.location}
                  />
                )}
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <WorkIcon color="primary" />
                </ListItemIcon>
                {isEditing ? (
                  <FormControl fullWidth size="small">
                    <InputLabel>Department</InputLabel>
                    <Select
                      name="department"
                      value={formData.department}
                      label="Department"
                      onChange={handleSelectChange}
                    >
                      <MenuItem value="Engineering">Engineering</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="Human Resources">
                        Human Resources
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <ListItemText
                    primary="Department"
                    secondary={formData.department}
                  />
                )}
              </ListItem>
            </List>
          </CardContent>
        </Card>

        <Card elevation={2} sx={{ minWidth: 275, maxWidth: 345 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Settings
              </Typography>
              <IconButton
                size="small"
                onClick={handleSettingsMenuOpen}
                aria-label="Settings options"
              >
                <MoreVertIcon fontSize="small" />
              </IconButton>
              <Menu
                anchorEl={settingsMenuAnchorEl}
                open={Boolean(settingsMenuAnchorEl)}
                onClose={handleSettingsMenuClose}
              >
                <DsMenuItem
                  onClick={handleSettingsMenuClose}
                  icon={<SecurityIcon fontSize="small" color="primary" />}
                  description="Adjust your security preferences"
                >
                  Security Settings
                </DsMenuItem>
                <DsMenuItem
                  onClick={handleSettingsMenuClose}
                  icon={
                    <NotificationsActiveIcon fontSize="small" color="primary" />
                  }
                  description="Configure notification channels and frequency"
                >
                  Notification Preferences
                </DsMenuItem>
                <DsMenuItem
                  onClick={handleSettingsMenuClose}
                  icon={<PaletteIcon fontSize="small" color="primary" />}
                  description="Change interface appearance"
                >
                  Display Settings
                </DsMenuItem>
                <DsMenuItem
                  onClick={handleSettingsMenuClose}
                  icon={<TranslateIcon fontSize="small" color="primary" />}
                  description="Configure translation settings"
                >
                  Language Settings
                </DsMenuItem>
                <DsMenuItem
                  onClick={handleSettingsMenuClose}
                  icon={<DevicesIcon fontSize="small" color="primary" />}
                  description="Manage your connected devices"
                >
                  Device Management
                </DsMenuItem>
              </Menu>
            </Box>
            <List>
              <ListItem disableGutters>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Notifications"
                  secondary="Receive email notifications"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.notifications}
                      onChange={handleSwitchChange}
                      name="notifications"
                      color="primary"
                    />
                  }
                  label=""
                />
                <Box sx={{ ml: 1 }}>
                  <Badge
                    label={formData.notifications ? "On" : "Off"}
                    status={formData.notifications ? "success" : "default"}
                    size="small"
                  />
                </Box>
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon>
                  <LanguageIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Preferred Language"
                  secondary={formData.preferredLanguage}
                />
                {isEditing && (
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <Select
                      value={formData.preferredLanguage}
                      onChange={handleSelectChange}
                      name="preferredLanguage"
                      displayEmpty
                    >
                      <MenuItem value="English">English</MenuItem>
                      <MenuItem value="Spanish">Spanish</MenuItem>
                      <MenuItem value="French">French</MenuItem>
                      <MenuItem value="German">German</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          variant="filled"
        >
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export const Profile = withGustoProvider(ProfileComponent);

export default Profile;
