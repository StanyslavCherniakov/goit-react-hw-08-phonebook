import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getErrorMessage, getLoadingState } from '../redux/contacts/contactsSlice';
import { ContactPage } from '../pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { RegisterPage } from '../pages/RegisterPage';
import { refreshUser } from '../redux/auth/operations';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
        <Route path='/register' element={<RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />} />
        <Route path='/contacts' element={<PrivateRoute component={<ContactPage />} redirectTo='/login' />} />
      </Route>
    </Routes>
  );
};
