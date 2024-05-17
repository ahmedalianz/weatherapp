import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ICity} from '../types';

const initialState: Array<ICity> = [];

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: initialState,
  },
  reducers: {
    addCity: (state, action: PayloadAction<ICity>) => {
      const exist = state.cities.find(city => city.id === action.payload.id);
      if (!exist) {
        state.cities.push(action.payload);
      }
    },
    removeCity: (state, action: PayloadAction<ICity['id']>) => {
      state.cities = state.cities.filter(todo => todo.id !== action.payload);
    },
  },
});

export const {addCity, removeCity} = citiesSlice.actions;

export default citiesSlice.reducer;
