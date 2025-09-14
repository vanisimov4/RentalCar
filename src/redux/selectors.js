export const selectCars = state => state.cars.items;

export const selectTotalPages = state => state.cars.totalPages;

export const selectPage = state => state.cars.page;

export const selectCarDetails = state => state.cars.CarDetails;

export const selectLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;
