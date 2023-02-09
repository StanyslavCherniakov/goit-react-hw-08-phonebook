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


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(getLoadingState);
  const errorMessage = useSelector(getErrorMessage);

  return (
    (<Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {errorMessage && <Notifications />}
      {isLoading ? <ColorRing
        visible={true}
        height='80'
        width='80'
        ariaLabel='blocks-loading'
        wrapperStyle={{}}
        wrapperClass='blocks-wrapper'
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      /> : <ContactList />}
    </Wrapper>));
};
