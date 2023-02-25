import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { NavItem } from '../Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <div>
      <Button color='inherit'>
        <NavItem to='/register'>
          Register
        </NavItem>
      </Button>
      <Button color='inherit'>
        <NavItem to='/login'>
          Log In
        </NavItem>
      </Button>
    </div>
  );
};



