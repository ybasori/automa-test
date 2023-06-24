import { configureStore } from "@reduxjs/toolkit";
import cityReducer from "./Domain/city/city.reducer";
import weatherReducer from "./Domain/weather/weather.reducer";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
