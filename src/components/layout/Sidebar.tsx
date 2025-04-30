import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as ProfileIcon,
  Construction as ComponentsIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import DemoLogo from "../../assets/DemoLogo";

const SIDEBAR_WIDTH = 200;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Profile", icon: <ProfileIcon />, path: "/profile" },
];

const demos = [
  { text: "Flows", icon: <ComponentsIcon />, path: "/flows" },
  {
    text: "Composition",
    icon: <ComponentsIcon />,
    path: "/composition",
  },
  {
    text: "Copy",
    icon: <ComponentsIcon />,
    path: "/copy",
  },
  {
    text: "Events",
    icon: <ComponentsIcon />,
    path: "/events",
  },
  {
    text: "Theming",
    icon: <ComponentsIcon />,
    path: "/theming",
  },
];

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        height: "100vh",
        backgroundColor: theme.palette.primary.dark,
        borderRight: `1px solid ${theme.palette.primary.main}`,
        color: "#ffffff",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          margin: "1.5rem 1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
          <DemoLogo />
        </Link>
      </Box>
      <Box sx={{ overflow: "auto", mt: 4, flexGrow: 1 }}>
        <List disablePadding>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  color: "#ffffff",
                  px: 1,
                  outline: "none",
                  border: "none",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#ffffff",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <hr />
        <List disablePadding>
          {demos.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  color: "#ffffff",
                  px: 1,
                  outline: "none",
                  border: "none",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#ffffff",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
