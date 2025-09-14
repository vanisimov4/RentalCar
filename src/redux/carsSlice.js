import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarDetails } from './operations.js';
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload || 'Something went wrong';
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    CarDetails: null,
    page: 1,
    totalCars: 0,
    totalPages: 0,
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.cars;
        state.page = Number(action.payload.page); // 👈 приводимо до числа
        state.totalCars = action.payload.totalCars;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCarDetails.pending, handlePending)
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.CarDetails = action.payload;
      })
      .addCase(fetchCarDetails.rejected, handleRejected);
  },
});

export default carsSlice.reducer;
