import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) =>
        <ContactItem key={id}
                     name={name}
                     number={number} />)}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
};
