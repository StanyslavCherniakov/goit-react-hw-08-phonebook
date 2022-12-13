import React from 'react';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, del }) => {
  return <li>
    <span>{name}: {number}</span>
    <button onClick={() => del(id)}>Delete</button>
  </li>;
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
};


