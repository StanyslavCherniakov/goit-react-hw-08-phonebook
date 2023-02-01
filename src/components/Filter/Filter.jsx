import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';
import { Title } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <input type='text' name='filter' onChange={handleFilterChange} />
    </>
  );
};
