import React from 'react';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import HomePage from './HomePage/HomePage';

const useStyles = makeStyles(() => ({

}));

export default () => {
  const classes = useStyles();

  return (
    <Box>
      <Header />
      <HomePage/>
    </Box>
  );
}