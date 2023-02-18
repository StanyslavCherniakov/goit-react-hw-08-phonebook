import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to='/register'>
        Register
      </NavLink>
      <NavLink to='/login'>
        Log In
      </NavLink>
    </div>
  );
};

AuthNav.propTypes = {};

