import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { MoreVert, Menu, Inbox, Mail, Home } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from '@reach/router'

function ListItemLink(props) {
  const { children, ...rest } = props
  return <ListItem button component={Link} {...rest}>{children}</ListItem>
}

export const AppMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  const close = () => {
    setDrawerOpen(false)
  }
  return <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Navigation" onClick={toggleDrawer}>
          <Menu />
        </IconButton>
        <Typography className='ml-4' variant="h6" color="inherit">
          MyApp
        </Typography>
        <IconButton color="inherit" className='ml-auto' aria-label="Menu">
          <MoreVert />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer open={drawerOpen} onClose={close}>
      <div>
        <List>
          <ListItemLink onClick={close} to='/'>
            <Home />
            <ListItemText primary="Home" />
          </ListItemLink>
          <ListItemLink onClick={close} to='/profile/leethaxxor'>
            <FontAwesomeIcon size='lg' icon='user' />
            <ListItemText primary="Profile" />
          </ListItemLink>
          <ListItemLink onClick={close} to='/list'>
            <FontAwesomeIcon size='lg' icon='th-list' />
            <ListItemText primary="List" />
          </ListItemLink>
          <ListItemLink onClick={close} to='/form'>
            <FontAwesomeIcon size='lg' icon='plus-square' />
            <ListItemText primary="Form" />
          </ListItemLink>
        </List>
      </div>
    </Drawer>
  </div >
}
