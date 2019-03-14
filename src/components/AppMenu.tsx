import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'

import { Link } from '@reach/router'

function ListItemLink(props) {
  const { children, ...rest } = props
  return <ListItem button component={Link} {...rest}>{children}</ListItem>
}

export const AppMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (val) => {
    console.log(drawerOpen)
    setDrawerOpen(val === undefined ? !drawerOpen : val)
  }
  const close = () => {
    setDrawerOpen(false)
  }
  return <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Navigation" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography className='ml-4' variant="h6" color="inherit">
          MyApp
        </Typography>
        <IconButton color="inherit" className='ml-auto' aria-label="Menu">
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer open={drawerOpen} onClose={close}>
      <div>
        <List>
          <ListItemLink onClick={close} to='/'>
            <MailIcon />
            <ListItemText primary="Home" />
          </ListItemLink>
          <ListItemLink onClick={close} to='/foo/123'>
            <InboxIcon />
            <ListItemText primary="Foo" />
          </ListItemLink>
        </List>
      </div>
    </Drawer>
  </div >
}
