import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Contact, Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return <Item>
    <Contact>{name}: {number}</Contact>
    <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
  </Item>;
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};


