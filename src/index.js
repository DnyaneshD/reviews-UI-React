import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import configureStore from "./store/configureStore";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
      <Routes/>
  </Provider>,
  document.getElementById("root")
);
