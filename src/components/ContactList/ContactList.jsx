import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem';
import { List } from './ContactList.styled';
import { getContacts } from '../../redux/contactsSlice';
import { getFilterField } from '../../redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactFilter = useSelector(getFilterField);

  const getVisibleContacts = () => {
    const normalized = contactFilter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  return (
    <List>
      {getVisibleContacts().map(({ id, name, number }) =>
        <ContactItem key={id}
                     id={id}
                     name={name}
                     number={number}
        />)}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
};

