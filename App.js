import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Navigation from "./src/Navigation/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


