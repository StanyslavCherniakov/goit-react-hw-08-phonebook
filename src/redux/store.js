import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contactsSlice';
import { filterSlice } from './contacts/filterSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contactList: contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
  },
});



