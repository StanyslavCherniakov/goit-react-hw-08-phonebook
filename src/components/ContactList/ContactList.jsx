import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) =>
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

