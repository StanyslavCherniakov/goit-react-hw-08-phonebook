import { createSlice, current } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterquery',
  initialState: '',
  reducers: {
    filter(state, action) {
      return state = action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
