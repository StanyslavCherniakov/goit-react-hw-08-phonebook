import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { fetchContacts } from '../redux/operations';
import { getErrorMessage, getLoadingState } from '../redux/contactsSlice';
import { Notifications } from './Notifications/Notifications';

import { Title, TitleContacts, Wrapper } from './App.styled';
import { ColorRing } from 'react-loader-spinner';
import { ContactPage } from '../pages/ContactPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(getLoadingState);
  const errorMessage = useSelector(getErrorMessage);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/contacts' element={<ContactPage />} />
      </Route>
    </Routes>
    // <ContactPage />
  );
};
