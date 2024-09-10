import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    equipment: [],
    vehicleType: '',
  },
  reducers: {
    changeFilter(state, action) {
      // state = Object.fromEntries(action.payload);
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
