import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/filterSlice';
import { Title } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.filterquery);

  const handleFilterChange = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <input type='text' name='filter' value={state} onChange={handleFilterChange} />
    </>
  );
};
