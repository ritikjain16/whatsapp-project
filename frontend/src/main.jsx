import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserState from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>
);
