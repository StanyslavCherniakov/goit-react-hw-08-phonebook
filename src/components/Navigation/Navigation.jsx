import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <NavLink to='/'>HOME</NavLink>
      {isLoggedIn && <NavLink to='/contacts'>CONTACTS</NavLink>}
    </div>
  );
};

