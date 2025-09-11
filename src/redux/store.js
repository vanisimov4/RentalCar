import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
  },
});

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
