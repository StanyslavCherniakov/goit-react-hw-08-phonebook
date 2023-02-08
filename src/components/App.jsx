import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { getErrorMessage } from '../redux/contactsSlice';
import { Title, TitleContacts, Wrapper } from './App.styled';

export const App = () => {
  const errorMessage = useSelector(getErrorMessage);
  console.log(errorMessage);

  return (
    (<Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {errorMessage ? <p>Can`t load contacts. Try again later</p> : <ContactList />}
    </Wrapper>));
};
