// Import necessary components from Material UI
import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, List, ListItem, ListItemText, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" className="bg-gradient-to-t from-gray-800 to-blue-900">
        <Toolbar className="flex justify-between items-center">
          {/* Logo or Brand Name */}
          <Typography variant="h6" className="text-white">
            <span className='text-3xl'>A</span>SIF<span className='text-3xl'>A</span>KBAR
          </Typography>

          {/* Hamburger Menu Button for mobile view */}
          <div className="md:hidden">
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </div>

          {/* Unordered List for larger screens */}
          <List className="hidden md:flex flex-row space-x-4">
            <ListItem button component={NavLink} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={NavLink} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={NavLink} to="/Projects">
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button component={NavLink} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
          </List>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <IconButton component="a" href="https://www.facebook.com" target="_blank" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton component="a" href="https://twitter.com" target="_blank" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com" target="_blank" color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://www.instagram.com" target="_blank" color="inherit">
              <InstagramIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List className="w-64 p-4">
          <ListItem button component={NavLink} to="/" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={NavLink} to="/about" onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={NavLink} to="/Projects" onClick={toggleDrawer}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={NavLink} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;