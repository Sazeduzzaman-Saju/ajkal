import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="154575552277-olik80s4fd8ijueg0dkvrbdhqq79ol88.apps.googleusercontent.com">
      <App />
      <Toaster />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
