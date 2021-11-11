import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NetlifyIdentityContext from "react-netlify-identity-gotrue";

import App from "./App";
import { ProductDataProvider } from "./providers/ProductDataContext";
import { CartProvider } from "./providers/CartContext";
import "./test";

ReactDOM.render(
  <React.StrictMode>
    <NetlifyIdentityContext url={"https://nextjs-identity-demo.jonsully.net"}>
      <BrowserRouter>
        <ProductDataProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductDataProvider>
      </BrowserRouter>
    </NetlifyIdentityContext>
  </React.StrictMode>,
  document.getElementById("root")
);