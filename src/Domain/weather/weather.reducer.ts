import { createSlice } from "@reduxjs/toolkit";
import { IWeather } from "./weather.type";
import { getWeather } from "./weather.thunk";

const initialState: IWeather = {
  weather: null,
  loadingWeather: false,
  errorWeather: null,
};

export const citySlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getWeather.pending, (state) => {
        state.weather = null;
        state.loadingWeather = true;
      })
      .addCase(getWeather.fulfilled, (state, { payload }) => {
        state.weather = payload.data;
        state.loadingWeather = false;
      })
      .addCase(getWeather.rejected, (state, { payload }) => {
        state.errorWeather = true;
        state.loadingWeather = false;
      });
  },
});

export default citySlice.reducer;
