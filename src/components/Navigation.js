import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

  const Navigation = () => {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit`y"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            BHARATH M H
          </Typography>
          <Button color="inherit"><Link to='/home'>Home</Link></Button>
          <Button color="inherit"><Link to='/contact'>Contact</Link></Button>
          <Button color="inherit"><Link to='/todolist'>TodoList</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
   }
   
export default Navigation