import React, { useEffect } from 'react';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { Box, Typography, Divider, Chip } from '@mui/material';

export const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
        ml: 'auto',
        mr: 'auto',
      }}
    >
      <Typography variant='h4' component='p'>Phonebook</Typography>
      <ContactForm />
      <Typography sx={{ mt: 4 }} variant='h5' component='p'>Contacts</Typography>
      <Filter />
      <ContactList />
    </Box>
  );
};

