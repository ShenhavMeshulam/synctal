import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
  appBar: {
    display: 'flax',
    width: '100%',
    height: '4rem',
  }
}));

export default ({ OnSidenavButtonClick }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton onClick={OnSidenavButtonClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Synctal
          </Typography>
      </Toolbar>
    </AppBar>
  );
}
