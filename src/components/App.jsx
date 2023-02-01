import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Title, TitleContacts, Wrapper } from './App.styled';

export const App = () => {

  return (
    (<Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Wrapper>));
};
