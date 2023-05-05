import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ConstructionIcon from "@mui/icons-material/Construction";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import InfoIcon from "@mui/icons-material/Info";
import { useLogout } from "../../Hooks/useSignOut";
import { useAuthContext } from "../../Hooks/useAuthContext";

export const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            HiveMind
          </Typography>

          <nav>
            {!user && (
              <Button component={Link} to="signIn" color="inherit">
                SignIn
              </Button>
            )}
            {user && (
              <Button color="inherit" onClick={handleLogout}>
                SignOut
              </Button>
            )}
          </nav>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItemButton component={Link} to="/" color="inherit">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              Dashboard
            </ListItemButton>
            <ListItemButton component={Link} to="tools" color="inherit">
              <ListItemIcon>
                <ConstructionIcon />
              </ListItemIcon>
              Tools
            </ListItemButton>
            {user && (
              <ListItemButton component={Link} to="admin" color="inherit">
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                Admin
              </ListItemButton>
            )}
          </List>
          <Divider />
          <List>
            <ListItemButton component={Link} to="about" color="inherit">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              About
            </ListItemButton>
            <ListItemButton component={Link} to="faq" color="inherit">
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              FAQ
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <Container>
        <Box component="main" sx={{ flexgrow: 1, pl: 6, ml: 15 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Container>
    </>
  );
};
