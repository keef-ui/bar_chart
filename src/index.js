import React from "react";
import ReactDOM from "react-dom";
import reset from "./styles/reset.scss"
import base from "./styles/base.scss"


import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
