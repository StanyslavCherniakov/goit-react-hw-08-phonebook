import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contactList',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContacts, removeContact } = contactsSlice.actions;
