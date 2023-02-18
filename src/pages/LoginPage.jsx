import React from 'react';
import PropTypes from 'prop-types';
import { LoginForm } from '../components/LoginForm/LoginForm';

export const LoginPage = props => {
  return (
    <div>
      <p>LOGIN PAGE</p>
      <LoginForm />
    </div>
  );
};

LoginPage.propTypes = {};

