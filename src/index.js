import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ProductDataProvider } from "./providers/ProductDataContext";
import { CartProvider } from "./providers/CartContext";
import "./test";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductDataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
