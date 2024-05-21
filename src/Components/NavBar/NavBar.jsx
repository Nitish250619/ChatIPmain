import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 , height:"100%" ,bgcolor:"#b832b31c" , 
      background: "linear-gradient(135deg, #b832b31c, #dda0dd)"
}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
        <ListItemText primary="New Chat" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button>
        <ListItemText primary="About Us" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ marginBottom:"5px" }}>
      <AppBar position="static" sx={{ bgcolor:"#b832b31c" , background: 'linear-gradient(180deg, rgba(89, 63, 128, 0.75) 4.48%, rgba(118, 67, 135, 0.75) 25.41%, rgba(122, 68, 136, 0.75) 41.05%, rgba(122, 68, 136, 0.75) 65.11%, rgba(144, 72, 142, 0.75) 87.24%, rgba(179, 77, 150, 0.75) 100%), #b832b31c',}}>
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: isMobile ? 'right' : 'left',
            }}
          >
            OneChat
          </Typography>
          {!isMobile && (
            <>
              <Button color="inherit">New Chat</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Contact Us</Button> 
            </>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list}
        </Drawer>
      )}
    </Box>
  );
}