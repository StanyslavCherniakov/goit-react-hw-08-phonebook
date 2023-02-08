import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63e2bc43c919fe386cfb5f96.mockapi.io/api/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

