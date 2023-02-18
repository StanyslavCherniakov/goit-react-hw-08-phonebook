import React, { useState } from 'react';
import { Form, Btn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contactsSlice';
import { addContact } from '../../redux/contacts/operations';


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
    <Form onSubmit={handleSubmitForm}>
      <label>
        <div>Name</div>
        <input
          value={name}
          onChange={handleInputChange}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <div>Number</div>
        <input
          value={number}
          onChange={handleInputChange}
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </label>
      <Btn type='submit'>Add contact</Btn>
    </Form>
  );
};








