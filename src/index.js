import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import DetalleCancion from "./components/DetalleCancion";
import NotFound from "./components/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="detail" element={<DetalleCancion />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
