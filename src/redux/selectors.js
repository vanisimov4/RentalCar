export const selectCars = state => state.cars.items;

export const selectCarDetails = state => state.cars.CarDetails;

export const selectLoading = state => state.cars.isLoading;

export const selectError = state => state.cars.error;
