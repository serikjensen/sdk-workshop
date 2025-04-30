import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Chip,
  Container,
} from "@mui/material";
import {
  Event as EventIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreVertIcon,
  CheckCircle as CheckCircleIcon,
  PendingActions as PendingActionsIcon,
  Payment as PaymentIcon,
  Description as DescriptionIcon,
  Assignment as AssignmentIcon,
  AccessTime as AccessTimeIcon,
  Business as BusinessIcon,
} from "@mui/icons-material";
import { Badge, Button, Menu, MenuItem } from "../design-system";
import { Employee } from "@gusto/embedded-react-sdk";
import withGustoProvider from "../hoc/withGustoProvider";

// Function to determine color based on priority
const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "error";
    case "medium":
      return "warning";
    case "low":
      return "success";
    default:
      return "default";
  }
};

// Sample data for tasks
const tasks = [
  {
    id: 1,
    title: "Complete timesheet",
    priority: "high",
    status: "pending",
    dueDate: "2023-06-10",
  },
  {
    id: 2,
    title: "Review project proposal",
    priority: "medium",
    status: "completed",
    dueDate: "2023-06-08",
  },
  {
    id: 3,
    title: "Schedule team meeting",
    priority: "low",
    status: "pending",
    dueDate: "2023-06-15",
  },
];

// Sample data for upcoming events
const events = [
  {
    id: 1,
    title: "Quarterly review",
    type: "meeting",
    date: "2023-06-12",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Project deadline",
    type: "deadline",
    date: "2023-06-15",
    time: "5:00 PM",
  },
  {
    id: 3,
    title: "Team building event",
    type: "social",
    date: "2023-06-20",
    time: "3:00 PM",
  },
];

// Function to get status badge for pending tasks only
const getStatusBadge = (status: string) => {
  if (status === "pending") {
    return <Badge label="Pending" status="warning" size="small" />;
  }
  return null;
};

// Function to get event type badge only for deadlines
const getEventTypeBadge = (type: string) => {
  if (type === "deadline") {
    return <Badge label="Deadline" status="error" size="small" />;
  }
  return null;
};

const DashboardComponent: React.FC = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [eventMenuAnchorEl, setEventMenuAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleEventMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEventMenuAnchorEl(event.currentTarget);
  };

  const handleEventMenuClose = () => {
    setEventMenuAnchorEl(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Box>

      {/* <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mb: 4,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            flex: 2,
            p: 3,
            border: "1px solid",
            borderColor: "divider",
            height: "100%",
          }}
        >
          <Employee.EmployeeList
            companyId="demo"
            onEvent={(evt, data) => {
              console.log("Employee Onboarding Event:", evt, data);
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Employee.EmployeeList.List />
            </Box>
          </Employee.EmployeeList>
        </Paper>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mb: 4,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            flex: 2,
            p: 3,
            border: "1px solid",
            borderColor: "divider",
            height: "100%",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">
              <Box
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <AssignmentIcon sx={{ mr: 1 }} /> Tasks
              </Box>
            </Typography>
            <Button variant="outlined" size="small" hierarchy="secondary">
              View All
            </Button>
          </Stack>
          <Divider sx={{ mb: 2 }} />

          <List>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                sx={{
                  mb: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="more options"
                    onClick={(e) => handleMenuOpen(e)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  {task.status === "completed" ? (
                    <CheckCircleIcon color="success" />
                  ) : (
                    <PendingActionsIcon color="action" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {task.title}
                      {getStatusBadge(task.status)}
                    </Box>
                  }
                  secondary={
                    <Box
                      sx={{ display: "flex", alignItems: "center", mt: 0.5 }}
                    >
                      <AccessTimeIcon
                        fontSize="small"
                        sx={{ mr: 0.5, fontSize: "0.875rem" }}
                      />
                      <Typography variant="body2" sx={{ mr: 1 }}>
                        Due: {task.dueDate}
                      </Typography>
                      <Chip
                        label={task.priority}
                        size="small"
                        color={
                          getPriorityColor(task.priority) as
                            | "error"
                            | "warning"
                            | "success"
                            | "default"
                        }
                        sx={{ height: 20, fontSize: "0.75rem" }}
                      />
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            flex: 1,
            p: 3,
            border: "1px solid",
            borderColor: "divider",
            height: "100%",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">
              <Box
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <EventIcon sx={{ mr: 1 }} /> Upcoming Events
              </Box>
            </Typography>
            <Button variant="outlined" size="small" hierarchy="secondary">
              View Calendar
            </Button>
          </Stack>
          <Divider sx={{ mb: 2 }} />

          <List>
            {events.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  mb: 1,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="more options"
                    onClick={(e) => handleEventMenuOpen(e)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <EventIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {event.title}
                      {getEventTypeBadge(event.type)}
                    </Box>
                  }
                  secondary={
                    <Typography variant="body2">
                      {event.date} at {event.time}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            p: 3,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <BusinessIcon sx={{ mr: 1 }} /> Company Updates
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Stack spacing={2}>
            <Typography variant="body2">
              The quarterly financial report is now available. Please review by
              Friday.
            </Typography>
            <Typography variant="body2">
              New health benefits enrollment begins next week. Check your email
              for details.
            </Typography>
            <Button
              variant="contained"
              size="small"
              hierarchy="primary"
              sx={{ alignSelf: "flex-start", mt: 1 }}
            >
              Read All Updates
            </Button>
          </Stack>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            flex: 1,
            p: 3,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <PaymentIcon sx={{ mr: 1 }} /> Recent Payments
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <List dense>
            <ListItem>
              <ListItemIcon>
                <PaymentIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Payroll Deposit"
                secondary="$3,250.00 - June 1, 2023"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PaymentIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Travel Reimbursement"
                secondary="$450.00 - May 28, 2023"
              />
            </ListItem>
            <Button
              variant="contained"
              size="small"
              hierarchy="primary"
              sx={{ ml: 2, mt: 1 }}
            >
              View Payment History
            </Button>
          </List>
        </Paper>
      </Box>

      {/* Task Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={handleMenuClose}
          icon={<CheckCircleIcon fontSize="small" />}
        >
          Mark Complete
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          icon={<DescriptionIcon fontSize="small" />}
        >
          View Details
        </MenuItem>
      </Menu>

      {/* Event Menu */}
      <Menu
        anchorEl={eventMenuAnchorEl}
        open={Boolean(eventMenuAnchorEl)}
        onClose={handleEventMenuClose}
      >
        <MenuItem
          onClick={handleEventMenuClose}
          icon={<NotificationsIcon fontSize="small" />}
        >
          Set Reminder
        </MenuItem>
        <MenuItem
          onClick={handleEventMenuClose}
          icon={<DescriptionIcon fontSize="small" />}
        >
          View Details
        </MenuItem>
      </Menu>
    </Container>
  );
};

export const Dashboard = withGustoProvider(DashboardComponent);

export default Dashboard;
