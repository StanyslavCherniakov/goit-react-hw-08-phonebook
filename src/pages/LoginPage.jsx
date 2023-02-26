import React from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';


export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Box component='div' sx={{ mt: 30 }}>
        <LoginForm />
      </Box>
    </>
  );
};


