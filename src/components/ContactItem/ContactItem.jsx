import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Contact, Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Box, Container, IconButton, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return <ListItem
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    divider
  >
    <span>{name}: {number}</span>
    <IconButton size='small' aria-label='delete' onClick={() => dispatch(deleteContact(id))}>
      <DeleteIcon />
    </IconButton>
  </ListItem>;
};


ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};


