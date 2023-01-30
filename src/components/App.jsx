import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, getContacts } from '../redux/contactsSlice';

import { nanoid } from 'nanoid';
import { Title, TitleContacts, Wrapper } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContact = (data) => {
    const { name, number } = data;
    if (checkDoubleContact(data)) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContacts(newContact));
  };

  const checkDoubleContact = (inputData) => {
    return contacts.find(contact => contact.name === inputData.name);
  };

  return (
    (<Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Wrapper>));
};
