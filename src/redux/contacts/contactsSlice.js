import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contactList',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    }).addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    }).addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
    }).addCase(addContact.pending, state => state)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      }).addCase(addContact.rejected, (state, action) => {
      state.error = action.payload;
    }).addCase(deleteContact.pending, state => state)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
      }).addCase(deleteContact.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

// Selectors
export const getContacts = (state) => state.contactList.contacts;
export const getErrorMessage = (state) => state.contactList.error;
export const getLoadingState = (state) => state.contactList.isLoading;

