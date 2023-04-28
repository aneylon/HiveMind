import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
export const Header = () => {
  return (
    <>
      <AppBar position="static">
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
            <Button component={Link} to="/" color="inherit">
              Dashboard
            </Button>
            <Button component={Link} to="tools" color="inherit">
              Tools
            </Button>
            <Button component={Link} to="about" color="inherit">
              About
            </Button>
            <Button component={Link} to="faq" color="inherit">
              FAQ
            </Button>
            <Button component={Link} to="admin" color="inherit">
              Admin
            </Button>
            <Button component={Link} to="signIn" color="inherit">
              SignIn
            </Button>
            <Button component={Link} to="signUp" color="inherit">
              SignUp
            </Button>
            <Button color="inherit">SignOut</Button>
          </nav>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
