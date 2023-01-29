import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, removeContact } from '../redux/contactsSlice';
import LsService from './utils/localStorage';

import { nanoid } from 'nanoid';
import { Title, TitleContacts, Wrapper } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return LsService.load('contacts') ?? [];
  });
  const [filter, setFilter] = useState('');

  const state = useSelector(state => state.contactList);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   LsService.save('contacts', contacts);
  // }, [contacts]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

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

  const getVisibleContacts = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  const deleteContact = (id) => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  return (
    (<Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={getVisibleContacts()} deleteContact={deleteContact} />
    </Wrapper>));
};
