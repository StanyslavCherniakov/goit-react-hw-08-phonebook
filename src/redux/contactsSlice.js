import { createSlice, current } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contactList',
  initialState: {
    contacts: [],
    filterField: '',
  },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);

    },
    filterContact(state, action) {
      state.filterField = action.payload;
    },
  },
});

export const { addContacts, removeContact, filterContact } = contactsSlice.actions;
