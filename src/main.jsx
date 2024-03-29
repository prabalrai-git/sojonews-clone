import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MemoTutorial from "./MemoTutorial.jsx";
import CallbackTutorial from "./CallbackTutorial.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_MY_GOOGLE_LOGIN_CLIENT_ID}
      >
        <App />
        {/* <CallbackTutorial /> */}
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
