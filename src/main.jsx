import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-light dark:bg-dark">
      <Header />
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);
