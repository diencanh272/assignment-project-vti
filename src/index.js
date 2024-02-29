import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/style/reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
