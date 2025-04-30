import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Person as ProfileIcon,
  Construction as ComponentsIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate, useLocation, Link } from "react-router-dom";
import DemoLogo from "../../assets/DemoLogo";

const SIDEBAR_WIDTH = 240;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Profile", icon: <ProfileIcon />, path: "/profile" },
];

const demoItems = [
  {
    text: "Direct Deposit",
    icon: <ComponentsIcon />,
    path: "/demo/direct-deposit",
  },
  {
    text: "Pay Statements",
    icon: <ComponentsIcon />,
    path: "/demo/pay-statements",
  },
  {
    text: "Payroll Forms",
    icon: <ComponentsIcon />,
    path: "/demo/payroll-forms",
  },
  {
    text: "Tax Calculator",
    icon: <ComponentsIcon />,
    path: "/demo/tax-calculator",
  },
  {
    text: "Menu Component",
    icon: <MenuIcon />,
    path: "/demo/menu",
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
        <List>
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
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#ffffff",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 2, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

        <List
          subheader={
            <Box
              sx={{
                px: 2,
                py: 1,
                typography: "subtitle2",
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: "bold",
              }}
            >
              SDK DEMOS
            </Box>
          }
        >
          {demoItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.secondary.dark,
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                  color: "#ffffff",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#ffffff",
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
