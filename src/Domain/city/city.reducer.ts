import { createSlice } from "@reduxjs/toolkit";
import { ICity } from "./city.type";
import { getCity } from "./city.thunk";

const initialState: ICity = {
  cities: null,
  loadingCities: false,
  errorCities: null,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCity.pending, (state) => {
        state.cities = null;
        state.loadingCities = true;
      })
      .addCase(getCity.fulfilled, (state, { payload }) => {
        state.cities = payload.data;
        state.loadingCities = false;
      })
      .addCase(getCity.rejected, (state, { payload }) => {
        state.errorCities = true;
        state.loadingCities = false;
      });
  },
});

export default citySlice.reducer;
