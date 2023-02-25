import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@mui/material';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Button color='inherit'>
        <NavItem to='/'>HOME</NavItem>
      </Button>
      {isLoggedIn && <Button color='inherit'>
        <NavItem to='/contacts'>CONTACTS</NavItem>
      </Button>}
    </div>
  );
};

