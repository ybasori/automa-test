import React from "react";
import { Provider } from "react-redux";
import Home from "./Pages/Home/Home";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
