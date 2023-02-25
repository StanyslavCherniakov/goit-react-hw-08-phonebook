import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem';
import { getContacts } from '../../redux/contacts/contactsSlice';
import { getFilterField } from '../../redux/contacts/filterSlice';
import { Container, Collapse } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactFilter = useSelector(getFilterField);

  const getVisibleContacts = () => {
    const normalized = contactFilter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
  };

  return (
    <Container maxWidth='xs'>
      <ul>
        <TransitionGroup>
          {getVisibleContacts().map(({ id, name, number }) =>
            <Collapse key={id} timeout={500}>
              <ContactItem id={id}
                           name={name}
                           number={number}
              />
            </Collapse>)}
        </TransitionGroup>
      </ul>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
};

