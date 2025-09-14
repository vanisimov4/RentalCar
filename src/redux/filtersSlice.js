import { createSlice } from '@reduxjs/toolkit';

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
});

// Експортуємо фабрики екшенів
export const { changeFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
