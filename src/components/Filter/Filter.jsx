import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/filterSlice';
import { TextField, Typography, InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <TextField
      sx={{ mb: 2, mt: 1 }}
      name='filter'
      onChange={handleFilterChange}
      id='input-with-icon-textfield'
      label='Find Contacts'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant='standard'
    />
  );
};
