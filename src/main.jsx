import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Appstore from "./Components/Appstore.jsx";
import "./Css/Signup.css"
import "./Css/Login.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
           <Provider store={Appstore}>

      <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
