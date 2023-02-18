import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/contacts'>CONTACTS</NavLink>
    </div>
  );
};

Navigation.propTypes = {};
