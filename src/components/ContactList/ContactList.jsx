import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem';
import { List } from './ContactList.styled';
import { getContacts } from '../../redux/contactsSlice';
import { getFilterField } from '../../redux/filterSlice';

import { fetchContacts } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactFilter = useSelector(getFilterField);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalized = contactFilter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  return (
    <List>
      {getVisibleContacts().map(({ id, name, phone }) =>
        <ContactItem key={id}
                     id={id}
                     name={name}
                     number={phone}
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

