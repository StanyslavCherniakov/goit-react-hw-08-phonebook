import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/operations';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <button type='button' onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

UserMenu.propTypes = {};
