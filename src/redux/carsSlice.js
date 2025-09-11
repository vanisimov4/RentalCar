import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations.js";
const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export default carsSlice.reducer;
