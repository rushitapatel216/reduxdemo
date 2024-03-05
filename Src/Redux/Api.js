import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('getProducts', async () => {
  try {
    const response = await axios.get(
      'https://dummy.restapiexample.com/api/v1/employees',
    );

    console.log('response///////', response);
    return response?.data?.data;
  } catch (error) {
    console.error(error);
  }
});
