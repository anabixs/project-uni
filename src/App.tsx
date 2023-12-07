import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ bgcolor: "lightslategrey" }}>
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
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className="link">
                  HOME
                </Link>
              </Typography>
              <Link to="/sign" className="link">
                <Button color="inherit">Login</Button>{" "}
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
