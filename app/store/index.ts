import {configureStore} from '@reduxjs/toolkit';
import citiesReducer from './citiesSlice';

export const store = configureStore({
  reducer: {
    citiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
