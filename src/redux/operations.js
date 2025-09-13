import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarDetails = createAsyncThunk(
  'cars/fetchCarDetails',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${id}`);
      return response.data;
      // setRecipe(data.data || data);
    } catch (error) {
      // toast.error('Something went wrong');
      return thunkAPI.rejectWithValue(error.response?.data?.data?.message);
    }
  }
);
