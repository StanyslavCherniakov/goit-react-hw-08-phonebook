import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

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
  // extraReducers: builder => {
  //   builder.addCase(fetchContacts.pending, state => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(fetchContacts.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.contacts = action.payload;
  //   });
  //   builder.addCase(fetchContacts.rejected, (state, action) => {
  //     state.error = action.payload;
  //   });
  //   builder.addCase(addContact.pending, state => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(addContact.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.contacts = [...state.contacts, action.payload];
  //   });
  //   builder.addCase(addContact.rejected, (state, action) => {
  //     state.error = action.payload;
  //   });
  //   builder.addCase(deleteContact.pending, state => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(deleteContact.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
  //   });
  //   builder.addCase(deleteContact.rejected, (state, action) => {
  //     state.error = action.payload;
  //   });
  // },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    }).addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    }).addCase(fetchContacts.rejected, (state, action) => {
      state.error = action.payload;
    }).addCase(addContact.pending, state => {
      state.isLoading = true;
    }).addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = [...state.contacts, action.payload];
    }).addCase(addContact.rejected, (state, action) => {
      state.error = action.payload;
    }).addCase(deleteContact.pending, state => {
      state.isLoading = true;
    }).addCase(deleteContact.fulfilled, (state, action) => {
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
