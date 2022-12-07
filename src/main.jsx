import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import GlobalStyles from "./global-styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
