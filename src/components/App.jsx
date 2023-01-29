import React, { useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useDispatch } from 'react-redux';
import { addContacts } from '../redux/contactsSlice';
import LsService from './utils/localStorage';

import { nanoid } from 'nanoid';
import { Title, TitleContacts, Wrapper } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return LsService.load('contacts') ?? [];
  });

  const dispatch = useDispatch();

  // useEffect(() => {
  //   LsService.save('contacts', contacts);
  // }, [contacts]);

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
    setContacts(pState => [newContact, ...pState]);
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
