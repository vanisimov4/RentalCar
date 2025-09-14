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
  reducers: {
    // resetCars(state) {
    //   state.items = [];
    //   state.page = 1;
    //   state.totalPages = 0;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newCars = action.payload.cars || []; // на випадок отримання null, або undefined

        if (Number(action.payload.page) === 1) {
          // перша сторінка — замінюємо список
          state.items = newCars;
        } else {
          // наступні сторінки — додаємо, уникаючи дублів
          state.items = [
            ...state.items,
            ...newCars.filter(
              car => !state.items.some(item => item.id === car.id)
            ),
          ];
        }
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

// export const { resetCars } = carsSlice.actions;
export default carsSlice.reducer;
