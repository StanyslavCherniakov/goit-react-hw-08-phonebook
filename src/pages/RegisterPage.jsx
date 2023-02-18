import React from 'react';
import PropTypes from 'prop-types';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export const RegisterPage = props => {
  return (
    <div>
      <p>REGISTER PAGE</p>
      <RegisterForm />
    </div>
  );
};

RegisterPage.propTypes = {};
