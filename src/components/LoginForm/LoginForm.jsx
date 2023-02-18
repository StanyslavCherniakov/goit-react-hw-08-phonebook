import React from 'react';
import PropTypes from 'prop-types';

export const LoginForm = props => {

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <label>
        Email
        <input type='email' name='email' />
      </label>
      <label>
        Password
        <input type='password' name='password' />
      </label>
      <button type='submit'>Log In</button>
    </form>
  );
};

LoginForm.propTypes = {};
