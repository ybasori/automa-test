import { createSlice } from "@reduxjs/toolkit";
import { ICity } from "./city.type";
import { getCity } from "./city.thunk";

const initialState: ICity = {
  city: null,
  loadingCity: false,
  errorCity: null,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCity.pending, (state) => {
        state.city = null;
        state.loadingCity = true;
      })
      .addCase(getCity.fulfilled, (state, { payload }) => {
        state.city = payload.data.geonames?.[0] ?? null;
        state.loadingCity = false;
      })
      .addCase(getCity.rejected, (state, { payload }) => {
        state.errorCity = true;
        state.loadingCity = false;
      });
  },
});

export default citySlice.reducer;
