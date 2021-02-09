/**
 *
 * Header
 *
 */
import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  appName?: string;
}

export const Header = ({ appName }: Props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography color="inherit" variant="h6">
          {appName || process.env.REACT_APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
