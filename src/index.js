import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./App/store";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
