import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contactList: contactsSlice.reducer,
    filterquery: filterSlice.reducer,
  },
});

