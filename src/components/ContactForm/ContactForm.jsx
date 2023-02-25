import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSlice';
import { addContact } from '../../redux/contacts/operations';
import { Box, Button, TextField } from '@mui/material';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'name' :
        setName(e.target.value);
        break;
      case 'number' :
        setNumber(e.target.value);
        break;
      default:
        console.log(`Error in ${e.target.name}`);
    }
  };

  const addNewContact = (name, number) => {
    if (checkDoubleContact(name)) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
  };

  const checkDoubleContact = (name) => {
    return contacts.find(contact => contact.name === name);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addNewContact(name, number);
    setName('');
    setNumber('');
  };


  return (
    <Box component='form' sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 300,
    }} onSubmit={handleSubmitForm}>
      <TextField
        fullWidth
        id='standard-basic'
        label='Name'
        variant='standard'
        size='small'
        value={name}
        onChange={handleInputChange}
        type='text'
        name='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <TextField
        sx={{ mb: 2 }}
        fullWidth
        id='standard-basic'
        label='Phone number'
        variant='standard'
        size='small'
        value={number}
        onChange={handleInputChange}
        type='number'
        name='number'
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        required
      />
      <Button variant='contained' size='small' type='submit'>Add contact</Button>
    </Box>
  );
};

