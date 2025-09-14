import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from './operations.js';

const slice = createSlice({
  name: 'filters',
  initialState: {
    selectedBrand: null,
    selectedYear: null,
    brands: [], // сюди кладемо довідкові бренди
    loading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, action) {
      state.brands = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
        state.error = null;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Експортуємо фабрики екшенів
export const { changeFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
