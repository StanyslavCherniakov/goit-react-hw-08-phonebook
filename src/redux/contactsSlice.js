import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { current } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contactList',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { addContacts, removeContact } = contactsSlice.actions;

// Selectors
export const getContacts = (state) => state.contactList.contacts;
export const getErrorMessage = (state) => state.contactList.error;
