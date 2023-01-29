import { createSlice, current } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contactList',
  initialState: [],
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      state.contactList.filter(el => el.id !== action.payload.id);
    },
  },
});

export const { addContacts, removeContact } = contactsSlice.actions;
