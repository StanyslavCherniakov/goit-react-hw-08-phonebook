import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { AppBar, Toolbar, Box } from '@mui/material';

export const Appbar = () => {

  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Box>
        <AppBar position='static'>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}> <Navigation /></Box>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};


