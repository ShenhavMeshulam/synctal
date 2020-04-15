import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DescriptionIcon from '@material-ui/icons/Description';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PlaceIcon from '@material-ui/icons/Place';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    borderRight: '1px solid #9E9E9E',
    width: drawerWidth,
    height: '100%',
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: drawerWidth
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1
  },
}));

export default ({ isOpen }) => {
  const classes = useStyles();
  const menuItems = [
    {
      text: 'Work logs',
      icon: <DescriptionIcon />
    },
    {
      text: 'Workers',
      icon: <PermContactCalendarIcon />
    },
    {
      text: 'Work places',
      icon: <PlaceIcon />
    },
  ]
  console.log({ menuItems })
  return (
    <Box
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: false,
        [classes.drawerClose]: !isOpen,
      })}
    >
      <List>
        {menuItems.map((menuItem) => (
          <ListItem button key={menuItem.text}>
            <ListItemIcon>
              {menuItem.icon}
            </ListItemIcon>
            <ListItemText primary={menuItem.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}


