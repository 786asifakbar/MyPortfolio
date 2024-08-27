// Import necessary components from Material UI
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, List, ListItem, ListItemText, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" className="bg-gray-900">
        <Toolbar className="flex justify-between">
          {/* Logo or Brand Name */}
          <Typography variant="h6" className="text-white">
            MyBrand
          </Typography>

          {/* Hamburger Menu Button for mobile view */}
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </div>

          {/* Unordered List for larger screens */}
          <List className="hidden md:flex flex-row space-x-4">
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>

          {/* Dark Themed Button */}
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-600 text-white"
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List className="w-64 p-4">
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;